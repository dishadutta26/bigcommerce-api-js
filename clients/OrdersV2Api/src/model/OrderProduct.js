/**
 * Orders V2
 * `/orders`endpoints integrate with point-of-sale, shipping, distribution, and inventory-management systems.  ## Order The Order object contains a record of the purchase agreement between a shopper and a merchant. To learn more about creating orders, see [Orders API Guide](/api-docs/orders/orders-api-overview).  ### Currency Fields  * `currency_code` - the display currency used to present prices to the shopper on the storefront. * `currency_exchange_rate`: the exchange rate between the store's default currency and the display currency; when the order is created by means of the V2 endpoints, this value is always 1 (only in the storefront this value can be different to 1).  The following additional fields are returned on orders when Multi-Currency is enabled on the store:  * `store_default_currency_code` - the store's default currency * `store_default_to_transactional_exchange_rate` - the exchange rate between the store's default currency and the transactional currency used in the order.  **Example:**  ```json {   //...   \"currency_id\": 4,   \"currency_code\": \"EUR\",   \"currency_exchange_rate\": 1,   \"default_currency_id\": 4,   \"default_currency_code\": \"EUR\",   \"store_default_currency_code: \"USD\",   \"store_default_to_transactional_exchange_rate\": \"100.0000000000\"   //... }  ```  ## Order Coupons Coupon code applied to an order.  ## Order Messages Messages associated with an order.  ## Order Products Product line items belonging to an order.  ## Order Shipping Addresses Customer shipping address belonging to an order.  ## Order Statuses Each order status represents a state in the order-fulfillment workflow.  ## Order Taxes Each tax applied to an order. This information can be useful for reporting purposes. All values are read-only.  ## Order Shipments Tracks a package consignment from an order that is shipped from the seller to the buyer.  ## Order Shipping Addresses Quotes Read Only. Gets all shipping quotes from an order.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OrderProductProductOptions from './OrderProductProductOptions';

/**
* The OrderProduct model module.
* @module model/OrderProduct
* @version 2.0
*/
export default class OrderProduct {
    /**
    * Constructs a new <code>OrderProduct</code>.
    * &#x60;product_options&#x60; are required if adding a product with variants.
    * @alias module:model/OrderProduct
    * @class
    * @param productId {Number} 
    * @param productOptions {Array.<module:model/OrderProductProductOptions>} 
    * @param quantity {Number} 
    */

    constructor(productId, productOptions, quantity) {
        
        
        this['product_id'] = productId;
        this['product_options'] = productOptions;
        this['quantity'] = quantity;
        
    }

    /**
    * Constructs a <code>OrderProduct</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderProduct} obj Optional instance to populate.
    * @return {module:model/OrderProduct} The populated <code>OrderProduct</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderProduct();
                        
            
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('product_options')) {
                obj['product_options'] = ApiClient.convertToType(data['product_options'], [OrderProductProductOptions]);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('price_inc_tax')) {
                obj['price_inc_tax'] = ApiClient.convertToType(data['price_inc_tax'], 'Number');
            }
            if (data.hasOwnProperty('price_ex_tax')) {
                obj['price_ex_tax'] = ApiClient.convertToType(data['price_ex_tax'], 'Number');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('variant_id')) {
                obj['variant_id'] = ApiClient.convertToType(data['variant_id'], 'Number');
            }
            if (data.hasOwnProperty('wrapping_name')) {
                obj['wrapping_name'] = ApiClient.convertToType(data['wrapping_name'], 'String');
            }
            if (data.hasOwnProperty('wrapping_message')) {
                obj['wrapping_message'] = ApiClient.convertToType(data['wrapping_message'], 'String');
            }
            if (data.hasOwnProperty('wrapping_cost_ex_tax')) {
                obj['wrapping_cost_ex_tax'] = ApiClient.convertToType(data['wrapping_cost_ex_tax'], 'Number');
            }
            if (data.hasOwnProperty('wrapping_cost_inc_tax')) {
                obj['wrapping_cost_inc_tax'] = ApiClient.convertToType(data['wrapping_cost_inc_tax'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} product_id
    */
    'product_id' = undefined;
    /**
    * @member {Array.<module:model/OrderProductProductOptions>} product_options
    */
    'product_options' = undefined;
    /**
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * @member {Number} price_inc_tax
    */
    'price_inc_tax' = undefined;
    /**
    * @member {Number} price_ex_tax
    */
    'price_ex_tax' = undefined;
    /**
    * @member {String} upc
    */
    'upc' = undefined;
    /**
    * Products `variant_id`. PUT or POST. This field is not available for custom products.
    * @member {Number} variant_id
    */
    'variant_id' = undefined;
    /**
    * @member {String} wrapping_name
    */
    'wrapping_name' = undefined;
    /**
    * @member {String} wrapping_message
    */
    'wrapping_message' = undefined;
    /**
    * @member {Number} wrapping_cost_ex_tax
    */
    'wrapping_cost_ex_tax' = undefined;
    /**
    * @member {Number} wrapping_cost_inc_tax
    */
    'wrapping_cost_inc_tax' = undefined;




}