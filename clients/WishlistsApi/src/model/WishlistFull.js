/**
 * Wishlist
 * ## Wishlist API    The Wishlist API allows a developer to create and manage customer [Wishlists](https://support.bigcommerce.com/s/article/Wishlists). A Wishlist allows you to see what your customers are interested in and saving on the store. With this information you’ll be able to create targeted campaigns to help merchants grow their business. Customer API OAuth scopes give you access to Wishlists API. See [OAuth Scopes](https://developer.bigcommerce.com/api-docs/getting-started/authentication#authentication_oauth-scopes).
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
import WishlistItem from './WishlistItem';

/**
* The WishlistFull model module.
* @module model/WishlistFull
* @version 3.0
*/
export default class WishlistFull {
    /**
    * Constructs a new <code>WishlistFull</code>.
    * @alias module:model/WishlistFull
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>WishlistFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WishlistFull} obj Optional instance to populate.
    * @return {module:model/WishlistFull} The populated <code>WishlistFull</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WishlistFull();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [WishlistItem]);
            }
        }
        return obj;
    }

    /**
    * Wishlist ID, provided after creating a wishlist with a POST.
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The ID the customer to which the wishlist belongs.
    * @member {Number} customer_id
    */
    'customer_id' = undefined;
    /**
    * The Wishlist's name.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * Whether the Wishlist is available to the public.
    * @member {Boolean} is_public
    */
    'is_public' = undefined;
    /**
    * The token of the Wishlist. This is created internally within BigCommerce. The Wishlist ID is to be used for external apps. Read-Only
    * @member {String} token
    */
    'token' = undefined;
    /**
    * Array of Wishlist items
    * @member {Array.<module:model/WishlistItem>} items
    */
    'items' = undefined;




}
