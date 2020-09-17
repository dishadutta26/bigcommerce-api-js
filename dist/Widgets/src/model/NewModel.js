'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _NewmodelInner = require('./NewmodelInner');

var _NewmodelInner2 = _interopRequireDefault(_NewmodelInner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
    }

    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
        ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
} /**
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

/**
* The NewModel model module.
* @module model/NewModel
* @version 3.0
*/
var NewModel = function (_extendableBuiltin2) {
    _inherits(NewModel, _extendableBuiltin2);

    /**
    * Constructs a new <code>NewModel</code>.
    * @alias module:model/NewModel
    * @class
    * @extends Array
    */

    function NewModel() {
        var _ret;

        _classCallCheck(this, NewModel);

        var _this = _possibleConstructorReturn(this, (NewModel.__proto__ || Object.getPrototypeOf(NewModel)).call(this));

        return _ret = _this, _possibleConstructorReturn(_this, _ret);
    }

    /**
    * Constructs a <code>NewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NewModel} obj Optional instance to populate.
    * @return {module:model/NewModel} The populated <code>NewModel</code> instance.
    */


    _createClass(NewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NewModel();
                _ApiClient2.default.constructFromObject(data, obj, 'NewmodelInner');
            }
            return obj;
        }
    }]);

    return NewModel;
}(_extendableBuiltin(Array));

exports.default = NewModel;