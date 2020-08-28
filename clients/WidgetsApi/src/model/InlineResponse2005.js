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
import ThemeRegion1 from './ThemeRegion1';

/**
* The InlineResponse2005 model module.
* @module model/InlineResponse2005
* @version 3.0
*/
export default class InlineResponse2005 {
    /**
    * Constructs a new <code>InlineResponse2005</code>.
    * @alias module:model/InlineResponse2005
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse2005} obj Optional instance to populate.
    * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005();
                        
            
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ThemeRegion1]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ThemeRegion1>} data
    */
    'data' = undefined;
    /**
    * Empty meta object; may be used later.
    * @member {Object} meta
    */
    'meta' = undefined;




}