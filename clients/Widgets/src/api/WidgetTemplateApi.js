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

import ApiClient from "../ApiClient";
import ErrorBase1 from '../model/ErrorBase1';
import InlineResponse200 from '../model/InlineResponse200';
import WidgetTemplateBase1 from '../model/WidgetTemplateBase1';
import WidgetTemplatePost1 from '../model/WidgetTemplatePost1';

/**
* WidgetTemplate service.
* @module api/WidgetTemplateApi
* @version 3.0
*/
export default class WidgetTemplateApi {

    /**
    * Constructs a new WidgetTemplateApi. 
    * @alias module:api/WidgetTemplateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createWidgetTemplate operation.
     * @callback module:api/WidgetTemplateApi~createWidgetTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Widget Template
     * Creates a **Widget Template**.  ***Note:*** *There is a limit of 100 custom widget templates per store.*  **Required Fields** * name * template
     * @param {Object} opts Optional parameters
     * @param {module:api/WidgetTemplateApi~createWidgetTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createWidgetTemplate(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/content/widget-templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteWidgetTemplate operation.
     * @callback module:api/WidgetTemplateApi~deleteWidgetTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete A Widget Template
     * Delete a **Widget Template**.
     * @param {Object} opts Optional parameters
     * @param {module:api/WidgetTemplateApi~deleteWidgetTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteWidgetTemplate(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/content/widget-templates/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWidgetTemplate operation.
     * @callback module:api/WidgetTemplateApi~getWidgetTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Widget Template
     * Return a single **Widget Template**.
     * @param {Object} opts Optional parameters
     * @param {module:api/WidgetTemplateApi~getWidgetTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getWidgetTemplate(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/content/widget-templates/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getWidgetTemplates operation.
     * @callback module:api/WidgetTemplateApi~getWidgetTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Widget Templates
     * Returns a list of **Widget Templates**.
     * @param {Object} opts Optional parameters
     * @param {module:api/WidgetTemplateApi~getWidgetTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    getWidgetTemplates(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'widget_template_kind': opts['widgetTemplateKind']
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/content/widget-templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateWidgetTemplate operation.
     * @callback module:api/WidgetTemplateApi~updateWidgetTemplateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Widget Template
     * Update a **Widget Template**.
     * @param {Object} opts Optional parameters
     * @param {module:api/WidgetTemplateApi~updateWidgetTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateWidgetTemplate(body, uuid, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': opts['accept'],
        'Content-Type': opts['contentType']
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/content/widget-templates/{uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}