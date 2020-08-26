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
* The AllOfinlineResponse2002Data model module.
* @module model/AllOfinlineResponse2002Data
* @version 3.0
*/
export default class AllOfinlineResponse2002Data {
    /**
    * Constructs a new <code>AllOfinlineResponse2002Data</code>.
    * @alias module:model/AllOfinlineResponse2002Data
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AllOfinlineResponse2002Data</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AllOfinlineResponse2002Data} obj Optional instance to populate.
    * @return {module:model/AllOfinlineResponse2002Data} The populated <code>AllOfinlineResponse2002Data</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllOfinlineResponse2002Data();
                        
            
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('widget_template')) {
                obj['widget_template'] = ApiClient.convertToType(data['widget_template'], Object);
            }
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
            }
            if (data.hasOwnProperty('date_modified')) {
                obj['date_modified'] = ApiClient.convertToType(data['date_modified'], 'String');
            }
        }
        return obj;
    }

    /**
    * The primary identifier.
    * @member {String} uuid
    */
    'uuid' = undefined;
    /**
    * @member {Object} widget_template
    */
    'widget_template' = undefined;
    /**
    * The date on which this object was initially created.
    * @member {String} date_created
    */
    'date_created' = undefined;
    /**
    * The date on which this object was last updated.
    * @member {String} date_modified
    */
    'date_modified' = undefined;




}
