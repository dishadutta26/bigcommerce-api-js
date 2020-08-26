/**
 * Store Information
 * ### Store Information Reference The Store Information object, and Get Store Information endpoint, manage store profile settings. A Store Information object represents an individual store’s profile and metadata.  ### System Reference The Get a Timestamp endpoint generates a timestamp ping to check the system status.
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import TimeStampFull1 from '../model/TimeStampFull1';

/**
* TimeZone service.
* @module api/TimeZoneApi
* @version 2.0
*/
export default class TimeZoneApi {

    /**
    * Constructs a new TimeZoneApi. 
    * @alias module:api/TimeZoneApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the timeGet operation.
     * @callback module:api/TimeZoneApi~timeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeStampFull1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get System Timestamp
     * Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
     * @param {module:api/TimeZoneApi~timeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeStampFull1}
     */
    timeGet(accept, contentType, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Accept': accept,
        'Content-Type': contentType
      };
      let formParams = {
      };

      let authNames = ['X-Auth-Client', 'X-Auth-Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TimeStampFull1;

      return this.apiClient.callApi(
        '/time', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
