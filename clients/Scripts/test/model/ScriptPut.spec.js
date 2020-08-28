/*
 * Scripts
 *  - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Available Endpoints](#available-endpoints)  The BigCommerce Scripts API can be used to add a script to a store's page. Some use cases: * Insert tracking codes * Storefront single click applications * Live chat, support plugins * Theme extension or connector apps  To learn more about Scripts, see [here](/api-docs/scripts/scripts-overview).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content<sup>1</sup>                             | modify     | `store_content_checkout`                      | | Checkout Content<sup>1</sup>                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
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
    factory(root.expect, root.Scripts);
  }
}(this, function(expect, Scripts) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ScriptPut', function() {
      beforeEach(function() {
        instance = new Scripts.ScriptPut();
      });

      it('should create an instance of ScriptPut', function() {
        expect(instance).to.be.a(Scripts.ScriptPut);
      });

      it('should have the property description (base name: "description")', function() {
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property html (base name: "html")', function() {
        expect(instance).to.have.property('html');
        // expect(instance.html).to.be(expectedValueLiteral);
      });

      it('should have the property src (base name: "src")', function() {
        expect(instance).to.have.property('src');
        // expect(instance.src).to.be(expectedValueLiteral);
      });

      it('should have the property auto_uninstall (base name: "auto_uninstall")', function() {
        expect(instance).to.have.property('auto_uninstall');
        // expect(instance.auto_uninstall).to.be(expectedValueLiteral);
      });

      it('should have the property load_method (base name: "load_method")', function() {
        expect(instance).to.have.property('load_method');
        // expect(instance.load_method).to.be(expectedValueLiteral);
      });

      it('should have the property location (base name: "location")', function() {
        expect(instance).to.have.property('location');
        // expect(instance.location).to.be(expectedValueLiteral);
      });

      it('should have the property visibility (base name: "visibility")', function() {
        expect(instance).to.have.property('visibility');
        // expect(instance.visibility).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property api_client_id (base name: "api_client_id")', function() {
        expect(instance).to.have.property('api_client_id');
        // expect(instance.api_client_id).to.be(expectedValueLiteral);
      });

      it('should have the property consent_category (base name: "consent_category")', function() {
        expect(instance).to.have.property('consent_category');
        // expect(instance.consent_category).to.be(expectedValueLiteral);
      });

      it('should have the property enabled (base name: "enabled")', function() {
        expect(instance).to.have.property('enabled');
        // expect(instance.enabled).to.be(expectedValueLiteral);
      });

    });
  });

}));
