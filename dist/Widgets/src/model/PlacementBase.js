'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The PlacementBase model module.
* @module model/PlacementBase
* @version 3.0
*/
var PlacementBase = function () {
    /**
    * Constructs a new <code>PlacementBase</code>.
    * @alias module:model/PlacementBase
    * @class
    */

    function PlacementBase() {
        _classCallCheck(this, PlacementBase);

        this['entity_id'] = undefined;
        this['sort_order'] = undefined;
        this['region'] = undefined;
        this['status'] = 'inactive';
    }

    /**
    * Constructs a <code>PlacementBase</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlacementBase} obj Optional instance to populate.
    * @return {module:model/PlacementBase} The populated <code>PlacementBase</code> instance.
    */


    _createClass(PlacementBase, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PlacementBase();

                if (data.hasOwnProperty('entity_id')) {
                    obj['entity_id'] = _ApiClient2.default.convertToType(data['entity_id'], 'String');
                }
                if (data.hasOwnProperty('sort_order')) {
                    obj['sort_order'] = _ApiClient2.default.convertToType(data['sort_order'], 'Number');
                }
                if (data.hasOwnProperty('region')) {
                    obj['region'] = _ApiClient2.default.convertToType(data['region'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
            }
            return obj;
        }

        /**
        * The specific instance of a page that you would like to target.
        * @member {String} entity_id
        */

        /**
        * The sort order to control the position of a content widget in a region.
        * @member {Number} sort_order
        */

        /**
        * The name of the region in which to insert content widgets.
        * @member {String} region
        */

        /**
        * Sets the placement as either inactive or active.
        * @member {module:model/PlacementBase.StatusEnum} status
        * @default 'inactive'
        */


        /**
        * Allowed values for the <code>status</code> property.
        * @enum {String}
        * @readonly
        */

    }]);

    return PlacementBase;
}();

PlacementBase.StatusEnum = {
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",
    /**
     * value: "active"
     * @const
     */
    "active": "active" };
exports.default = PlacementBase;