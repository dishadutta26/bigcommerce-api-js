/**
 * Widgets
 * Widgets API allows developers to programatically inject content into a BigCommerce theme. To learn how to use Widgets, see our [Widgets Overview](/api-docs/storefront/widgets/widgets-overview).
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
* The Meta model module.
* @module model/Meta
* @version 3.0
*/
export default class Meta {
    /**
    * Constructs a new <code>Meta</code>.
    * Empty meta object; may be used later.
    * @alias module:model/Meta
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Meta} obj Optional instance to populate.
    * @return {module:model/Meta} The populated <code>Meta</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Meta();
                        
            
        }
        return obj;
    }





}
