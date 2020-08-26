/**
 * Subscribers
 * ### OAuth Scopes |  **UI Name** | **Permission** | **Parameter** | | --- | --- | --- | |  Customers | modify | `store_v2_customers` | |  Customers | read-only | `store_v2_customers_read_only` |  ### Headers  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  ### Example  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Content-Type: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  * For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication). 
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

/**
* The SubscriberBase model module.
* @module model/SubscriberBase
* @version 3.0
*/
export default class SubscriberBase {
    /**
    * Constructs a new <code>SubscriberBase</code>.
    * Common Subscriber properties.
    * @alias module:model/SubscriberBase
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SubscriberBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubscriberBase} obj Optional instance to populate.
    * @return {module:model/SubscriberBase} The populated <code>SubscriberBase</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriberBase();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'Number');
            }
            if (data.hasOwnProperty('date_modified')) {
                obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'Date');
            }
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'Date');
            }
        }
        return obj;
    }

    /**
    * The unique numeric ID of the subscriber; increments sequentially. 
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * The email of the subscriber. Must be unique. 
    * @member {String} email
    */
    'email' = undefined;
    /**
    * The first name of the subscriber. 
    * @member {String} first_name
    */
    'first_name' = undefined;
    /**
    * The last name of the subscriber. 
    * @member {String} last_name
    */
    'last_name' = undefined;
    /**
    * The source of the subscriber. Values are: `storefront`, `order`, or `custom`. 
    * @member {String} source
    */
    'source' = undefined;
    /**
    * The ID of the source order, if source was an order. 
    * @member {Number} order_id
    */
    'order_id' = undefined;
    /**
    * The date on which the subscriber was modified. 
    * @member {Date} date_modified
    */
    'date_modified' = undefined;
    /**
    * The date of which the subscriber was created. 
    * @member {Date} date_created
    */
    'date_created' = undefined;




}
