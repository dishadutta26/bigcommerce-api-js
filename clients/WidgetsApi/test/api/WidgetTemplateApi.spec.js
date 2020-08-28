/*
 * Widgets
 * Widgets API allows developers to programatically inject content into a BigCommerce theme. To learn how to use Widgets, see our [Widgets Overview](/api-docs/storefront/widgets/widgets-overview).
 *
 * OpenAPI spec version: 3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.21
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'), require('../../src/BCApiClient'), require('../config'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Widgets);
  }
}(this, function(expect, Widgets, BCApiClient, config) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Widgets.WidgetTemplateApi(new BCApiClient(config));
  });

  describe('(package)', function() {
    describe('WidgetTemplateApi', function() {
      describe('createWidgetTemplate', function() {
        it('should call createWidgetTemplate successfully', async function() {
          // const createWidgetTemplateResponse = await instance.createWidgetTemplate();
          // expect(createWidgetTemplateResponse.ok).to.be(true);
          // expect(createWidgetTemplateResponse.body.data).to.be.an('array');
        });
      });
      describe('deleteWidgetTemplate', function() {
        it('should call deleteWidgetTemplate successfully', async function() {
          // const deleteWidgetTemplateResponse = await instance.deleteWidgetTemplate();
          // expect(deleteWidgetTemplateResponse.ok).to.be(true);
          // expect(deleteWidgetTemplateResponse.body.data).to.be.an('array');
        });
      });
      describe('getWidgetTemplate', function() {
        it('should call getWidgetTemplate successfully', async function() {
          // const getWidgetTemplateResponse = await instance.getWidgetTemplate();
          // expect(getWidgetTemplateResponse.ok).to.be(true);
          // expect(getWidgetTemplateResponse.body.data).to.be.an('array');
        });
      });
      describe('getWidgetTemplates', function() {
        it('should call getWidgetTemplates successfully', async function() {
          // const getWidgetTemplatesResponse = await instance.getWidgetTemplates();
          // expect(getWidgetTemplatesResponse.ok).to.be(true);
          // expect(getWidgetTemplatesResponse.body.data).to.be.an('array');
        });
      });
      describe('updateWidgetTemplate', function() {
        it('should call updateWidgetTemplate successfully', async function() {
          // const updateWidgetTemplateResponse = await instance.updateWidgetTemplate();
          // expect(updateWidgetTemplateResponse.ok).to.be(true);
          // expect(updateWidgetTemplateResponse.body.data).to.be.an('array');
        });
      });
    });
  });

}));