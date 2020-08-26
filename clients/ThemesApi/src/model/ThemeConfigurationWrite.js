/**
 * Themes
 * - [OAuth Scopes](#oauth-scopes) - [Authentication](#authentication)  With BigCommerce's V3 REST API Theme endpoints, developers can: * backup themes * restore themes * download themes * activate themes * get status of theme jobs * read theme configurations  ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Themes                                       | modify     | `store_themes_manage`                         |  For more information on OAuth Scopes, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).  ## Authentication  Requests can be authenticated by sending a `client_id` and `access_token` via `X-Auth-Client` and `X-Auth-Token` HTTP headers:  ```http GET /stores/{$$.env.store_hash}/v3/catalog/summary host: api.bigcommerce.com Accept: application/json X-Auth-Client: {client_id} X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Client`|`client_id`|Obtained by creating an API account or installing an app in a BigCommerce control panel.| |`X-Auth-Token`|`access_token `|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see: [Authentication](https://developer.bigcommerce.com/api-docs/getting-started/authentication).
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
* The ThemeConfigurationWrite model module.
* @module model/ThemeConfigurationWrite
* @version 3.0
*/
export default class ThemeConfigurationWrite {
    /**
    * Constructs a new <code>ThemeConfigurationWrite</code>.
    * A theme.
    * @alias module:model/ThemeConfigurationWrite
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ThemeConfigurationWrite</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ThemeConfigurationWrite} obj Optional instance to populate.
    * @return {module:model/ThemeConfigurationWrite} The populated <code>ThemeConfigurationWrite</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThemeConfigurationWrite();
                        
            
            if (data.hasOwnProperty('variation_id')) {
                obj['variation_id'] = ApiClient.convertToType(data['variation_id'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], Object);
            }
        }
        return obj;
    }

    /**
    * The Variation to which the Configuration belongs.
    * @member {String} variation_id
    */
    'variation_id' = undefined;
    /**
    * The content of the configuration, which is a JSON object which will vary in structure from theme to theme.
    * @member {Object} settings
    */
    'settings' = undefined;




}
