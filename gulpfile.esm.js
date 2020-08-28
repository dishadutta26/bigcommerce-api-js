import gulp from 'gulp';
import cleaner from 'gulp-clean';
import { exec } from 'child_process';
import log from 'fancy-log';
import mustache from 'gulp-mustache';
import rename from 'gulp-rename';
import download from 'gulp-download2';
import fs from 'fs';
import { find } from 'lodash';
import merge from 'gulp-merge-json';

const apis = [
  {
    name: 'WishlistsApi',
    url: 'https://developer.bigcommerce.com/api-reference/customer-subscribers/wishlist-api/BigCommerce_Wishlist_API.oas2.json',
  },
  {
    name: 'WidgetsApi',
    url: 'https://developer.bigcommerce.com/api-reference/store-management/widgets/BigCommerce_Widgets_API.oas2.json',
  },
  {
    name: 'ThemesApi',
    url: 'https://developer.bigcommerce.com/api-reference/store-management/themes/BigCommerce_Themes_API.oas2.json',
  },
  {
    name: 'CatalogApi',
    url: 'https://developer.bigcommerce.com/api-reference/catalog/catalog-api/BigCommerce_Catalog_API.oas2.json',
    patch: 'catalog_api.patch',
  },
  {
    name: 'SubscribersApi',
    url: 'https://developer.bigcommerce.com/api-reference/store-management/subscribers/BigCommerce_Subscribers_API.oas2.json',
  },
  {
    name: 'StoreInfoApi',
    url: 'https://developer.bigcommerce.com/api-reference/store-management/store-information-api/BigCommerce_Store_Information_API.oas2.json',
  },
  {
    name: 'Scripts',
    url: 'https://developer.bigcommerce.com/api-reference/store-management/scripts/BigCommerce_Scripts_API.oas2.json',
  },
];

const installSwagger = (done) => (
  fs.access('./bin/swagger-codegen-cli.jar', (err) => {
    if (err) {
      download({
          url: 'https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.21/swagger-codegen-cli-3.0.21.jar',
          file: 'swagger-codegen-cli.jar',
         })
        .pipe(gulp.dest('bin'));
    }
    return done();
  })
)

const clean = api => (
  () => (
    gulp
      .src([
        `clients/${api.name}/*`,
        `!clients/${api.name}/node_modules`,
        `!clients/${api.name}/test`,
      ],
      { read: false, allowEmpty: true })
      .pipe(cleaner())
  )
)

const codegen = api => done => (
  exec(
    `java -jar bin/swagger-codegen-cli.jar generate \
  -i ${api.url} \
  -l javascript \
  -t resources/templates \
  -o clients/${api.name}`,
    { cwd: '.' },
    (err, stdout, stderr) => {
      log(stdout);
      log(stderr);
      done(err);
    },
  )
);

const processTestSupportFiles = api => () => (
  gulp.src('./resources/test/**/*.mustache')
    .pipe(mustache('./gulpfile.config.json'))
    .pipe(rename(path => ({
      dirname: path.dirname,
      basename: path.basename,
      extname: ""
    })))    
    .pipe(gulp.dest(`clients/${api.name}/test`))
);

const processSourceFiles = api => () => {
  // all the apis and models
  const apiFilenames = fs.readdirSync(`clients/${api.name}/src/api`);
  const modelFilenames = fs.readdirSync(`clients/${api.name}/src/model`);
  const files = [
    ...apiFilenames.map(f => ({ name: f.replace('.js', ''), path: `./api/${f.replace('.js', '')}`})),
    ...modelFilenames.map(f => ({ name: f.replace('.js', ''), path: `./model/${f.replace('.js', '')}`})),
  ];

  // index file
  gulp.src('./resources/src/index.js.mustache')
    .pipe(mustache({ files }))
    .pipe(rename(path => ({
      dirname: path.dirname,
      basename: path.basename,
      extname: ""
    })))
    .pipe(gulp.dest(`clients/${api.name}/src`))

  return gulp.src(['./resources/src/*.js', '!resources/src/*.mustache'])
    .pipe(gulp.dest(`clients/${api.name}/src`));
};

const copyConfigFiles = api => () => (
  gulp.src('resources/.babelrc')
    .pipe(gulp.dest(`clients/${api.name}`))
);

const postCleanup = api => () => (
  gulp
    .src([
      `clients/${api.name}/.travis.yml`,
      `clients/${api.name}/git_push.sh`,
      `clients/${api.name}/mocha.opts`,
    ],
    { read: false, allowEmpty: true })
    .pipe(cleaner())
);

const applyPatch = api => (done) => {
  // duplicate the src dir to src.orig
  // make the fix in src
  // diff -ur src.orig src > ../../resources/patches/catalog_api.patch
  // to patch an unfixed src: cd src && patch -p1 -i ../../../resources/patches/catalog_api.patch
  if (api.patch) {
    exec(
      `patch -p1 -i ../../../resources/patches/${api.patch}`,
      { cwd: `./clients/${api.name}/src` },
      (err, stdout, stderr) => {
        log(stdout);
        log(stderr);
        done(err);
      },
    )
  } else {
    done();
  }
};

const packageMaker = () => {
  const { version } = JSON.parse(fs.readFileSync('package.json'), 'utf8');
  return gulp.src(['resources/bcapi.package.json'])
    .pipe(merge({
      fileName: 'package.json',
      endObj: {
        version,
      },
    }))
    .pipe(gulp.dest('clients'))
};

const buildClean = (api) => (
  gulp.series(
    Object.assign(clean(api), { displayName: 'clean' }),
    installSwagger,
    Object.assign(codegen(api), { displayName: 'codegen' }),
    Object.assign(processSourceFiles(api), { displayName: 'processSourceFiles' }),
    Object.assign(processTestSupportFiles(api), { displayName: 'processTestSupportFiles' }),
    Object.assign(copyConfigFiles(api), { displayName: 'copyConfigFiles' }),
    Object.assign(applyPatch(api), { displayName: 'applyPatch' }),
    packageMaker,
    Object.assign(postCleanup(api), { displayName: 'postCleanup' }),
  )
);
const buildOne = async (done) => {
  const [,,,arg,value] = process.argv;
  if (arg !== '--name' || !value) {
    console.info('Usage: gulp buildOne --name [api.name]');
    return done();
  }
  const api = find(apis, { name: value });
  if (!api) {
    console.warn(`No such api: ${value}`);
    console.info('Usage: gulp buildOne --name [api.name]');
    return done();    
  }
  console.info(api);
  await buildClean(api)();
  return done();
};
const buildAll = gulp.series(apis.map(api => buildClean(api)));


// export tasks
export {
  buildAll, buildOne,
};

export default buildAll;