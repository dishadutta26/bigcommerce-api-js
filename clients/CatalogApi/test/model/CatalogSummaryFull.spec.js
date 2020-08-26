/*
 * Catalog
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication) - [Differentiating Variants & Modifiers](#variants-and-modifiers) - [Available Endpoints](#available-endpoints) - [Resources](#resources)  The Catalog API manages products, brands and categories for a store. To learn more about the Catalog resources see [Catalog Products](https://developer.bigcommerce.com/api-docs/catalog/products-overview) and [Categories](https://developer.bigcommerce.com/api-docs/catalog/products-overview#products-overview_categories).  ## OAuth Scopes | UI Name  | Permission | Parameter                     | |----------|------------|-------------------------------| | Products | modify     | `store_v2_products`           | | Products | read-only  | `store_v2_products_read_only` |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Differentiating Variants and Modifiers [Variants](https://support.bigcommerce.com/s/article/Product-Options-v3#variations) represent a physical product made up of [Product Option](https://support.bigcommerce.com/s/article/Product-Options-v3) choices, i.e. a large blue t-shirt. Each variant can have a unique SKU.  Modifiers represent a choice a customer makes about a product that doesn't represent a physical item, i.e. text to be printed on a t-shirt. Assigning a SKU to a modifier will turn it into a variant.  See [Variant Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#variant-options) and [Modifier Options](https://developer.bigcommerce.com/api-docs/catalog/products-overview#modifier-options) for more information.  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Brand Images                            | Create and manage brand images                                          | | Brand Metafields                        | Create and manage brand metafields                                      | | Brands                                  | Create and manage brands                                                | | Catalog                                 | Create and manage store categories, products, and brands                | | Categories                              | Create and manage categorties                                           | | Category Images                         | Create and manage category images                                       | | Category Metafields                     | Create and manage category metafields                                   | | Product Bulk Pricing Rules              | Create and manage product bulk pricing rules                            | | Product Complex Rules                   | Create and manage product complex rules                                 | | Product Custom Fields                   | Create and manage product custom fields                                 | | Product Images                          | Create and manage product images                                        | | Product Metafields                      | Create and manage product meta fields                                   | | Product Modifier Images                 | Create and manage product modifer images                                | | Product Modifier Values                 | Create and manage product modifier values                               | | Product Modifiers                       | Create and manage product midifiers                                     | | Product Reviews                         | Create and manage product reviews                                       | | Product Variant Option Values           | Create and manage product variant option values                         | | Product Variant Options                 | Create and manage product variant options                               | | Product Variants                        | Create and manage product variants                                      | | Product Videos                          | Create and manage product videos                                        | | Products                                | Create and manage products                                              | | ProductVariant Metafields               | Create and manage product meta flields                                  | | Variants                                | Get and update all variants                                             |  ## Resources  ### Webhooks * [Products](/api-docs/getting-started/webhooks/webhook-events#webhook-events_products) * [Categories](/api-docs/getting-started/webhooks/webhook-events#webhook-events_category) * [SKU](/api-docs/getting-started/webhooks/webhook-events#webhook-events_sku)  ### Related Endpoints * [Catalog API](/api-reference/catalog/catalog-api)
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
    factory(root.expect, root.Catalog);
  }
}(this, function(expect, Catalog) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CatalogSummaryFull', function() {
      beforeEach(function() {
        instance = new Catalog.CatalogSummaryFull();
      });

      it('should create an instance of CatalogSummaryFull', function() {
        expect(instance).to.be.a(Catalog.CatalogSummaryFull);
      });

      it('should have the property inventory_count (base name: "inventory_count")', function() {
        expect(instance).to.have.property('inventory_count');
        // expect(instance.inventory_count).to.be(expectedValueLiteral);
      });

      it('should have the property inventory_value (base name: "inventory_value")', function() {
        expect(instance).to.have.property('inventory_value');
        // expect(instance.inventory_value).to.be(expectedValueLiteral);
      });

      it('should have the property primary_category_id (base name: "primary_category_id")', function() {
        expect(instance).to.have.property('primary_category_id');
        // expect(instance.primary_category_id).to.be(expectedValueLiteral);
      });

      it('should have the property primary_category_name (base name: "primary_category_name")', function() {
        expect(instance).to.have.property('primary_category_name');
        // expect(instance.primary_category_name).to.be(expectedValueLiteral);
      });

      it('should have the property variant_count (base name: "variant_count")', function() {
        expect(instance).to.have.property('variant_count');
        // expect(instance.variant_count).to.be(expectedValueLiteral);
      });

      it('should have the property highest_variant_price (base name: "highest_variant_price")', function() {
        expect(instance).to.have.property('highest_variant_price');
        // expect(instance.highest_variant_price).to.be(expectedValueLiteral);
      });

      it('should have the property average_variant_price (base name: "average_variant_price")', function() {
        expect(instance).to.have.property('average_variant_price');
        // expect(instance.average_variant_price).to.be(expectedValueLiteral);
      });

      it('should have the property lowest_variant_price (base name: "lowest_variant_price")', function() {
        expect(instance).to.have.property('lowest_variant_price');
        // expect(instance.lowest_variant_price).to.be(expectedValueLiteral);
      });

      it('should have the property oldest_variant_date (base name: "oldest_variant_date")', function() {
        expect(instance).to.have.property('oldest_variant_date');
        // expect(instance.oldest_variant_date).to.be(expectedValueLiteral);
      });

      it('should have the property newest_variant_date (base name: "newest_variant_date")', function() {
        expect(instance).to.have.property('newest_variant_date');
        // expect(instance.newest_variant_date).to.be(expectedValueLiteral);
      });

    });
  });

}));
