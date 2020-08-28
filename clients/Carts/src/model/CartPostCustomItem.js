/**
 * Carts
 * ### Cart Allows for a cart to be created using BigCommerce cart logic. The existing BigCommerce front end cart can be bypassed.  Notes: - A **cart** `id` is the same as a **checkout** `id`. - A cart can be created by adding an existing **catalog item** or a **custom item**. - Carts are valid for 30 days from the last modification. This can include creating the cart or editing the cart. - Redirect URLs can be generated only from carts created using the Server to Server Cart API. To restore a cart that was created on the storefront, either by a shopper or the Storefront Cart API, first recreate the cart using the Server to Server Cart API.
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CartsCustomItems from './CartsCustomItems';

/**
* The CartPostCustomItem model module.
* @module model/CartPostCustomItem
* @version 3.0
*/
export default class CartPostCustomItem extends Array {
    /**
    * Constructs a new <code>CartPostCustomItem</code>.
    * @alias module:model/CartPostCustomItem
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>CartPostCustomItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CartPostCustomItem} obj Optional instance to populate.
    * @return {module:model/CartPostCustomItem} The populated <code>CartPostCustomItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPostCustomItem();
            ApiClient.constructFromObject(data, obj, 'CartsCustomItems');
            
            
        }
        return obj;
    }





}