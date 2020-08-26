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
* The ThemeRegion1 model module.
* @module model/ThemeRegion1
* @version 3.0
*/
export default class ThemeRegion1 {
    /**
    * Constructs a new <code>ThemeRegion1</code>.
    * @alias module:model/ThemeRegion1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ThemeRegion1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ThemeRegion1} obj Optional instance to populate.
    * @return {module:model/ThemeRegion1} The populated <code>ThemeRegion1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThemeRegion1();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * The region name.
    * @member {String} name
    */
    'name' = undefined;




}
