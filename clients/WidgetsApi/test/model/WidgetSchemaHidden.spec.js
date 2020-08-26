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
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Widgets);
  }
}(this, function(expect, Widgets) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('WidgetSchemaHidden', function() {
      beforeEach(function() {
        instance = Widgets.WidgetSchemaHidden;
      });

      it('should create an instance of WidgetSchemaHidden', function() {
        expect(instance).to.be.a('object');
      });

      it('should have the property hidden', function() {
        expect(instance).to.have.property('hidden');
        expect(instance.hidden).to.be("hidden");
      });

    });
  });

}));
