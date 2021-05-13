/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package/manager.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./editor/blocks/controls/fields-map.js":
/*!**********************************************!*\
  !*** ./editor/blocks/controls/fields-map.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Internal dependencies
 */
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;

var JetFieldsMapControl = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(JetFieldsMapControl, _wp$element$Component);

  var _super = _createSuper(JetFieldsMapControl);

  function JetFieldsMapControl(props) {
    var _this;

    _classCallCheck(this, JetFieldsMapControl);

    _this = _super.call(this, props);
    _this.fieldTypes = _this.props.fieldTypes;
    _this.taxonomiesList = _this.props.taxonomiesList;
    _this.className = _this.props.className;
    _this.metaProp = _this.props.metaProp ? _this.props.metaProp : 'post_meta';
    _this.termsProp = _this.props.termsProp ? _this.props.termsProp : 'post_terms';
    _this.index = _this.props.index;

    _this.init();

    _this.bindFunctions();

    _this.state = {
      type: _this.getFieldType(_this.props.fieldValue)
    };
    return _this;
  }

  _createClass(JetFieldsMapControl, [{
    key: "bindFunctions",
    value: function bindFunctions() {
      this.onChangeType = this.onChangeType.bind(this);
      this.onChangeValue = this.onChangeValue.bind(this);
    }
  }, {
    key: "init",
    value: function init() {
      this.id = "inspector-select-control-".concat(this.index);
      this.preparedTaxes = [];
      this.taxPrefix = 'jet_tax__';

      if (!this.taxonomiesList) {
        return;
      }

      for (var i = 0; i < this.taxonomiesList.length; i++) {
        this.preparedTaxes.push({
          value: this.taxPrefix + this.taxonomiesList[i].value,
          label: this.taxonomiesList[i].label
        });
      }
    }
  }, {
    key: "getFieldName",
    value: function getFieldName(value) {
      if (!value) {
        return '';
      }

      var fieldType = this.getFieldType(value);

      if (this.termsProp === fieldType || this.metaProp === fieldType) {
        return value;
      } else {
        return '';
      }
    }
  }, {
    key: "isTermOrMeta",
    value: function isTermOrMeta(value) {
      return this.termsProp === value || this.metaProp === value;
    }
  }, {
    key: "getFieldType",
    value: function getFieldType(value) {
      if (!value) {
        return '';
      }

      for (var i = 0; i < this.fieldTypes.length; i++) {
        if (value === this.fieldTypes[i].value) {
          return value;
        }
      }

      if (value.includes(this.taxPrefix)) {
        return this.termsProp;
      } else {
        return this.metaProp;
      }
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(newValue) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.fieldsMap), {}, _defineProperty({}, this.props.fieldName, newValue)));
    }
  }, {
    key: "onChangeType",
    value: function onChangeType(newValue) {
      var val = this.getFieldType(newValue);
      this.setState({
        type: val
      });

      if (this.isTermOrMeta(val)) {
        val = '';
      }

      this.onChangeValue(val);
    } // Disable reason: A select with an onchange throws a warning

    /* eslint-disable jsx-a11y/no-onchange */

  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement("div", {
        className: "jet-fields-map__row"
      }, wp.element.createElement("div", {
        className: "jet-post-field-control"
      }, wp.element.createElement(SelectControl, {
        key: 'field_type_' + this.props.fieldName + this.index,
        label: this.props.fieldName,
        labelPosition: "side",
        value: this.state.type,
        onChange: this.onChangeType,
        options: this.fieldTypes,
        style: {
          width: '160px'
        }
      }), this.metaProp === this.state.type && wp.element.createElement(TextControl, {
        key: 'field_name_' + this.props.fieldName + this.index,
        value: this.props.fieldValue,
        onChange: this.onChangeValue,
        style: {
          width: '200px'
        }
      }), this.termsProp === this.state.type && wp.element.createElement(SelectControl, {
        className: "jet-control-without-label",
        key: 'field_tax_' + this.props.fieldName + this.index,
        value: this.props.fieldValue,
        onChange: this.onChangeValue,
        options: this.preparedTaxes,
        style: {
          width: '200px'
        }
      })));
    }
    /* eslint-enable jsx-a11y/no-onchange */

  }]);

  return JetFieldsMapControl;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (JetFieldsMapControl);

/***/ }),

/***/ "./package/components/action-fields-map.js":
/*!*************************************************!*\
  !*** ./package/components/action-fields-map.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionFieldsMap; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BaseControl = wp.components.BaseControl;
function ActionFieldsMap(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? [] : _ref$fields,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '[Empty label]' : _ref$label,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? function () {} : _ref$children;
  return wp.element.createElement(BaseControl, {
    label: label,
    key: "jet_fields_map"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, fields.map(function (_ref2, index) {
    var _ref3 = _slicedToArray(_ref2, 2),
        fieldId = _ref3[0],
        fieldData = _ref3[1];

    return wp.element.createElement(React.Fragment, {
      key: "field_in_map_".concat(fieldId + index)
    }, children({
      fieldId: fieldId,
      fieldData: fieldData,
      index: index
    }));
  })));
}
;

/***/ }),

/***/ "./package/components/action-modal.js":
/*!********************************************!*\
  !*** ./package/components/action-modal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ActionModal(_ref) {
  var onRequestClose = _ref.onRequestClose,
      children = _ref.children,
      title = _ref.title,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? [] : _ref$classNames,
      onUpdateClick = _ref.onUpdateClick,
      onCancelClick = _ref.onCancelClick;
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      ButtonGroup = _wp$components.ButtonGroup,
      Modal = _wp$components.Modal;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;
  var modalClasses = ['jet-form-edit-modal'].concat(_toConsumableArray(classNames)).join(' ');

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      actionClick = _useState2[0],
      setActionClick = _useState2[1];

  var updateClick = function updateClick() {
    if (onUpdateClick) {
      onUpdateClick();
    }

    setActionClick(true);
  };

  var cancelClick = function cancelClick() {
    if (onCancelClick) {
      onCancelClick();
    }

    setActionClick(false);
  };

  return wp.element.createElement(Modal, {
    onRequestClose: onRequestClose,
    className: modalClasses,
    title: title
  }, !children && wp.element.createElement("div", {
    className: "jet-form-edit-modal__content"
  }, 'Action callback is not found.'), children && wp.element.createElement("div", null, wp.element.createElement("div", {
    className: "jet-form-edit-modal__content"
  }, 'function' === typeof children && children({
    actionClick: actionClick,
    onRequestClose: onRequestClose
  }), 'function' !== typeof children && children), wp.element.createElement(ButtonGroup, {
    className: "jet-form-edit-modal__actions"
  }, wp.element.createElement(Button, {
    isPrimary: true,
    onClick: updateClick
  }, "Update"), wp.element.createElement(Button, {
    isSecondary: true,
    style: {
      margin: '0 0 0 10px'
    },
    onClick: cancelClick
  }, "Cancel"))));
}

/* harmony default export */ __webpack_exports__["default"] = (ActionModal);

/***/ }),

/***/ "./package/components/actions/placeholder-message.js":
/*!***********************************************************!*\
  !*** ./package/components/actions/placeholder-message.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PlaceholderMessage(_ref) {
  var style = _ref.style,
      children = _ref.children;

  var propStyle = _objectSpread({
    fontSize: '1.5em',
    padding: '2em',
    textAlign: 'center',
    backgroundColor: 'aliceblue'
  }, style);

  return wp.element.createElement("p", {
    style: propStyle
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (PlaceholderMessage);

/***/ }),

/***/ "./package/components/fields/controls.js":
/*!***********************************************!*\
  !*** ./package/components/fields/controls.js ***!
  \***********************************************/
/*! exports provided: ControlsSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsSettings", function() { return ControlsSettings; });
var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var ControlsSettings = function ControlsSettings() {
  return applyFilters('jet.fb.register.fields.controls', {
    "general": {
      label: __('General'),
      attrs: [{
        "attrName": "label",
        "type": "text",
        "label": __("Field Label")
      }, {
        "attrName": "name",
        "type": "text",
        "label": __("Form field name"),
        "help": __("Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case")
      }, {
        "attrName": "desc",
        "type": "text",
        "label": __("Field Description")
      }, {
        "attrName": "default",
        "type": "dynamic_text",
        "label": __("Default Value")
      }]
    },
    "toolbar": {
      attrs: [{
        "attrName": "required",
        "type": "toggle",
        "label": __("Is Required")
      }]
    },
    "advanced": {
      label: __('Advanced'),
      attrs: [{
        "attrName": "placeholder",
        "type": "text",
        "label": __("Placeholder")
      }, {
        "attrName": "add_prev",
        "type": "toggle",
        "label": __("Add Prev Page Button")
      }, {
        "attrName": "prev_label",
        "type": "text",
        "label": __("Prev Page Button Label"),
        "condition": "add_prev"
      }, {
        "attrName": "visibility",
        "label": __("Field Visibility"),
        "type": "select",
        "options": [{
          "value": "all",
          "label": __("For all")
        }, {
          "value": "logged_id",
          "label": __("Only for logged in users")
        }, {
          "value": "not_logged_in",
          "label": __("Only for NOT-logged in users")
        }]
      }, {
        "attrName": "class_name",
        "type": "text",
        "label": __("CSS Class Name")
      }]
    }
  });
};

/***/ }),

/***/ "./package/components/fields/field-control.js":
/*!****************************************************!*\
  !*** ./package/components/fields/field-control.js ***!
  \****************************************************/
/*! exports provided: GeneralFields, ToolBarFields, AdvancedFields, FieldControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralFields", function() { return GeneralFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarFields", function() { return ToolBarFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedFields", function() { return AdvancedFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldControl", function() { return FieldControl; });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ "./package/components/fields/controls.js");
/* harmony import */ var _field_with_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-with-preset */ "./package/components/fields/field-with-preset.js");
/* harmony import */ var _presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presets/dynamic-preset */ "./package/components/presets/dynamic-preset.js");
/* harmony import */ var _horizontal_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../horizontal-line */ "./package/components/horizontal-line.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Flex = _wp$components.Flex;

function FieldControl(_ref2) {
  var type = _ref2.type,
      setAttributes = _ref2.setAttributes,
      attributes = _ref2.attributes,
      _ref2$attrsSettings = _ref2.attrsSettings,
      attrsSettings = _ref2$attrsSettings === void 0 ? {} : _ref2$attrsSettings,
      _ref2$editProps = _ref2.editProps,
      _ref2$editProps$attrH = _ref2$editProps.attrHelp,
      attrHelp = _ref2$editProps$attrH === void 0 ? function () {
    return '';
  } : _ref2$editProps$attrH,
      _ref2$editProps$block = _ref2$editProps.blockName,
      blockName = _ref2$editProps$block === void 0 ? '' : _ref2$editProps$block;
  var controls = Object(_controls__WEBPACK_IMPORTED_MODULE_0__["ControlsSettings"])();

  if (!controls[type]) {
    return null;
  }

  var currentControl = controls[type];

  var onChangeValue = function onChangeValue(value, key) {
    setAttributes(_defineProperty({}, key, value));
  };

  var isValidCondition = function isValidCondition(attr) {
    if (!attr.condition) {
      return true;
    }

    if (blockName && attr.condition.blockName) {
      if ('string' === typeof attr.condition.blockName && blockName !== attr.condition.blockName) {
        return false;
      }

      if ('object' === _typeof(attr.condition.blockName) && attr.condition.blockName.length && !attr.condition.blockName.includes(blockName)) {
        return false;
      }
    }

    if (attr.condition.attr && !attributes[attr.condition.attr] || 'string' === typeof attr.condition && !attributes[attr.condition]) {
      return false;
    }

    return true;
  };

  return currentControl.attrs.map(function (_ref3) {
    var _ref3$help = _ref3.help,
        help = _ref3$help === void 0 ? '' : _ref3$help,
        attrName = _ref3.attrName,
        label = _ref3.label,
        attr = _objectWithoutProperties(_ref3, ["help", "attrName", "label"]);

    var isRegisterAttribute = (attrName in attributes);
    var validCondition = isValidCondition(attr);
    var isHidden = attrName in attrsSettings && 'show' in attrsSettings[attrName] && false === attrsSettings[attrName].show;

    if (!isRegisterAttribute || !validCondition || isHidden) {
      return null;
    }

    switch (attr.type) {
      case 'text':
        return wp.element.createElement(TextControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-TextControl"),
          label: label,
          help: help,
          value: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        });

      case 'dynamic_text':
        return wp.element.createElement(_field_with_preset__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "".concat(attr.type, "-").concat(attrName, "-FieldWithPreset"),
          ModalEditor: function ModalEditor(_ref4) {
            var actionClick = _ref4.actionClick,
                onRequestClose = _ref4.onRequestClose;
            return wp.element.createElement(_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_2__["default"], {
              value: attributes[attrName],
              isSaveAction: actionClick,
              onSavePreset: function onSavePreset(newVal) {
                onChangeValue(newVal, attrName);
              },
              onUnMount: onRequestClose
            });
          }
        }, wp.element.createElement(TextControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-TextControlDynamic"),
          label: label,
          help: help || attrHelp(attrName),
          value: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        }));

      case 'select':
        return wp.element.createElement(SelectControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-SelectControl"),
          label: label,
          help: help || attrHelp(attrName),
          value: attributes[attrName],
          options: attr.options,
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        });

      case 'toggle':
        return wp.element.createElement(ToggleControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-ToggleControl"),
          label: label,
          help: help || attrHelp(attrName),
          checked: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        });
    }
  });
}

function GeneralFields(props) {
  var currentControl = Object(_controls__WEBPACK_IMPORTED_MODULE_0__["ControlsSettings"])().general;
  return wp.element.createElement(PanelBody, {
    title: currentControl.label,
    key: 'jet-form-general-fields'
  }, wp.element.createElement(FieldControl, _extends({
    type: "general",
    key: 'jet-form-general-fields-component'
  }, props)), wp.element.createElement(FieldControl, _extends({
    type: "custom_general",
    key: 'jet-form-general-custom-fields-component'
  }, props)));
}

function AdvancedFields(props) {
  var currentControl = Object(_controls__WEBPACK_IMPORTED_MODULE_0__["ControlsSettings"])().advanced;
  return wp.element.createElement(PanelBody, {
    title: currentControl.label,
    key: 'jet-form-advanced-fields',
    initialOpen: false
  }, wp.element.createElement(FieldControl, _extends({
    type: "advanced",
    key: 'jet-form-advanced-fields-component'
  }, props)), wp.element.createElement(FieldControl, _extends({
    type: "custom_advanced",
    key: 'jet-form-advanced-custom-fields-component'
  }, props)));
}

function ToolBarFields(props) {
  var uniqKey = props.editProps.uniqKey,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  return wp.element.createElement(BlockControls, {
    key: uniqKey('ToolBarFields-BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolBarFields-ToolbarGroup')
  }, wp.element.createElement(Flex, {
    align: 'center',
    justify: 'center',
    className: 'jet-form-toggle-box'
  }, wp.element.createElement(FieldControl, _extends({
    type: "toolbar",
    key: uniqKey('jet-form-toolbar-fields-component')
  }, props)), children)));
}



/***/ }),

/***/ "./package/components/fields/field-with-preset.js":
/*!********************************************************!*\
  !*** ./package/components/fields/field-with-preset.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-modal */ "./package/components/action-modal.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _wp$components = wp.components,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;
var useState = wp.element.useState;

function FieldWithPreset(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      ModalEditor = _ref.ModalEditor,
      _ref$triggerClasses = _ref.triggerClasses,
      triggerClasses = _ref$triggerClasses === void 0 ? [] : _ref$triggerClasses;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalState = _useState2[0],
      setModalState = _useState2[1];

  var changeModalState = function changeModalState() {
    setModalState(function (prev) {
      return !prev;
    });
  };

  var classNames = ['jet-form-dynamic-preset__trigger'].concat(_toConsumableArray(triggerClasses)).join(' ');
  return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
    className: "jet-form-dynamic-preset"
  }, children, wp.element.createElement("div", {
    className: classNames,
    onClick: changeModalState
  }, wp.element.createElement(SVG, {
    viewBox: "0 0 54 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement(Path, {
    d: "M42.6396 26.4347C37.8682 27.3436 32.5666 28.0252 27.1894 28.0252C21.8121 28.0252 16.4348 27.3436 11.7391 26.4347C6.96774 25.4502 3.18093 23.8597 0.37868 21.9663L0.37868 28.0252C0.37868 29.5399 1.59046 31.1304 3.78682 32.4179C5.98317 33.7054 9.46704 34.9172 13.6325 35.5988C17.798 36.2805 22.115 36.8106 27.1894 36.8106C32.2637 36.8106 36.6564 36.5077 40.7462 35.5988C44.8359 34.69 48.3198 33.7054 50.5162 32.4179C52.7125 31.1304 54 29.5399 54 28.0252L54 21.9663C51.122 23.8597 47.3352 25.4502 42.6396 26.4347ZM42.6396 53.5484C37.8682 54.5329 32.5666 55.1388 27.1894 55.1388C21.8121 55.1388 16.4348 54.5329 11.7391 53.5484C7.04348 52.5638 3.18093 51.0491 0.378682 49.1556L0.378682 55.1388C0.378683 56.7293 1.59046 58.3197 3.78682 59.5315C6.36186 60.819 9.46705 62.1066 13.6325 62.7125C17.7223 63.697 22.115 64 27.1894 64C32.2637 64 36.6564 63.697 40.7462 62.7125C44.8359 61.8036 48.3198 60.819 50.5162 59.5315C52.7125 57.9411 54 56.7293 54 54.8359L54 48.8527C51.122 51.0491 47.3352 52.2608 42.6396 53.5484ZM42.6396 39.9915C37.8682 40.9004 32.5666 41.582 27.1894 41.582C21.8121 41.582 16.4348 40.9004 11.7391 39.9915C6.96774 39.007 3.18093 37.4922 0.378681 35.5988L0.378681 41.582C0.378681 43.1725 1.59046 44.6872 3.78682 45.9747C6.36185 47.2622 9.46705 48.474 13.6325 49.1556C17.7223 50.0645 22.115 50.3674 27.1894 50.3674C32.2637 50.3674 36.6564 50.0645 40.7462 49.1556C44.8359 48.1711 48.3198 47.2622 50.5162 45.9747C52.7125 44.3843 54 43.1725 54 41.582L54 35.5988C51.122 37.4922 47.3352 39.007 42.6396 39.9915ZM40.4432 2.12337C36.3535 1.13879 31.885 0.835848 26.8864 0.835849C21.8878 0.835849 17.4194 1.13879 13.2539 2.12337C9.08836 3.10794 5.68022 4.01678 3.48387 5.3043C1.28751 6.59181 -3.4782e-06 8.10654 -3.33916e-06 9.697L-2.95513e-06 14.0897C-2.81609e-06 15.6802 1.28752 17.2706 3.48387 18.5582C6.05891 19.7699 9.1641 21.0575 13.2539 21.6633C17.3436 22.2692 21.8121 22.9509 26.8864 22.9509C31.9607 22.9509 36.3535 22.9509 40.4432 22.345C44.533 21.7391 48.0169 20.4516 50.2132 19.164C52.7125 17.5736 54 15.9831 54 14.3927L54 9.99995C54 8.40948 52.7125 6.81902 50.5162 5.60724C48.3198 4.39546 44.533 2.72926 40.4432 2.12337Z",
    fill: "#7E8993"
  })))), modalState && wp.element.createElement(_action_modal__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onRequestClose: changeModalState,
    classNames: ['width-60'],
    title: 'Edit Preset'
  }, function (modalProps) {
    return wp.element.createElement(ModalEditor, modalProps);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FieldWithPreset);

/***/ }),

/***/ "./package/components/fields/field-wrapper.js":
/*!****************************************************!*\
  !*** ./package/components/fields/field-wrapper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/tools */ "./package/helpers/tools.js");


function FieldWrapper(_ref) {
  var attributes = _ref.attributes,
      uniqKey = _ref.editProps.uniqKey,
      children = _ref.children,
      _ref$wrapClasses = _ref.wrapClasses,
      wrapClasses = _ref$wrapClasses === void 0 ? [] : _ref$wrapClasses,
      _ref$valueIfEmptyLabe = _ref.valueIfEmptyLabel,
      valueIfEmptyLabel = _ref$valueIfEmptyLabe === void 0 ? '' : _ref$valueIfEmptyLabe;
  var BaseControl = wp.components.BaseControl;
  var useSelect = wp.data.useSelect;
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });
  var label = _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].getLabel(meta, attributes);
  return wp.element.createElement(BaseControl, {
    key: uniqKey('placeHolder_block'),
    className: "jet-form-builder__field-wrap jet-form-builder-row ".concat(wrapClasses.join(' '))
  }, wp.element.createElement(BaseControl.VisualLabel, null, wp.element.createElement("div", {
    className: 'jet-form-builder__label'
  }, label.name ? label.name : valueIfEmptyLabel, attributes.required && wp.element.createElement("span", {
    className: 'jet-form-builder__required'
  }, label.mark ? label.mark : '*'))), children, wp.element.createElement(BaseControl, {
    key: 'custom_help_description',
    className: 'jet-form-builder__desc'
  }, wp.element.createElement("small", {
    className: 'components-base-control__help',
    style: {
      marginTop: '0px'
    }
  }, attributes.desc)));
}

/* harmony default export */ __webpack_exports__["default"] = (FieldWrapper);

/***/ }),

/***/ "./package/components/fields/macros-inserter.js":
/*!******************************************************!*\
  !*** ./package/components/fields/macros-inserter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    PanelBody = _wp$components.PanelBody;
var useState = wp.element.useState;

function MacrosInserter(_ref) {
  var children = _ref.children,
      fields = _ref.fields,
      onFieldClick = _ref.onFieldClick,
      customMacros = _ref.customMacros;

  var _useState = useState(function () {
    return false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      showPopover = _useState2[0],
      setPopoverState = _useState2[1];

  return wp.element.createElement("div", {
    className: "jet-form-editor__macros-inserter"
  }, wp.element.createElement(Button, {
    isTertiary: true,
    isSmall: true,
    icon: showPopover ? 'no-alt' : 'admin-tools',
    label: 'Insert macros',
    className: "jet-form-editor__macros-trigger",
    onClick: function onClick() {
      setPopoverState(function (prev) {
        return !prev;
      });
    }
  }), showPopover && wp.element.createElement(Popover, {
    position: 'bottom left'
  }, fields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, fields.map(function (field) {
    return wp.element.createElement("div", {
      key: 'field_' + field.name
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        onFieldClick(field.name);
      }
    }, '%' + field.name + '%'));
  })), customMacros && wp.element.createElement(PanelBody, {
    title: 'Custom Macros'
  }, customMacros.map(function (macros) {
    return wp.element.createElement("div", {
      key: 'macros_' + macros
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        onFieldClick(macros);
      }
    }, '%' + macros + '%'));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MacrosInserter);

/***/ }),

/***/ "./package/components/fields/repeater-with-state.js":
/*!**********************************************************!*\
  !*** ./package/components/fields/repeater-with-state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    CardHeader = _wp$components.CardHeader,
    ToggleControl = _wp$components.ToggleControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function RepeaterWithState(_ref) {
  var children = _ref.children,
      ItemHeading = _ref.ItemHeading,
      _ref$repeaterClasses = _ref.repeaterClasses,
      repeaterClasses = _ref$repeaterClasses === void 0 ? [] : _ref$repeaterClasses,
      _ref$repeaterItemClas = _ref.repeaterItemClasses,
      repeaterItemClasses = _ref$repeaterItemClas === void 0 ? [] : _ref$repeaterItemClas,
      newItem = _ref.newItem,
      _ref$addNewButtonLabe = _ref.addNewButtonLabel,
      addNewButtonLabel = _ref$addNewButtonLabe === void 0 ? 'Add New' : _ref$addNewButtonLabe,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      isSaveAction = _ref.isSaveAction,
      onSaveItems = _ref.onSaveItems,
      onUnMount = _ref.onUnMount,
      onAddNewItem = _ref.onAddNewItem,
      onRemoveItem = _ref.onRemoveItem,
      _ref$help = _ref.help,
      help = _ref$help === void 0 ? {
    helpSource: {},
    helpVisible: function helpVisible() {
      return false;
    },
    helpKey: ''
  } : _ref$help;
  var classNames = ['jet-form-builder__repeater-component'].concat(_toConsumableArray(repeaterClasses)).join(' ');
  var itemClassNames = ['jet-form-builder__repeater-component-item'].concat(_toConsumableArray(repeaterItemClasses)).join(' ');

  var parsedItems = function parsedItems() {
    if (items && items.length > 0) {
      var cloneItems = _toConsumableArray(items);

      cloneItems.forEach(function (item) {
        item.__visible = false;
      });
      return cloneItems;
    } else {
      return [_objectSpread(_objectSpread({}, newItem), {}, {
        __visible: true
      })];
    }
  };

  var _useState = useState(function () {
    return parsedItems();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemsData = _useState2[0],
      setItemsData = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isSafeDeleting = _useState4[0],
      setSafeDeleting = _useState4[1];

  var _changeCurrentItem = function changeCurrentItem(valueToSet, index) {
    setItemsData(function (prev) {
      prev[index] = _objectSpread(_objectSpread({}, prev[index]), valueToSet);
      return _toConsumableArray(prev);
    });
  };

  var onSaveDeleting = function onSaveDeleting(index) {
    return confirm(__("Are you sure you want to remove item ".concat(index + 1, "?"), 'jet-form-builder'));
  };

  var removeOption = function removeOption(index) {
    if (isSafeDeleting && !onSaveDeleting(index) || onRemoveItem && !onRemoveItem(index, itemsData)) {
      return;
    }

    setItemsData(function (prev) {
      var clonePrev = _toConsumableArray(prev);

      clonePrev.splice(index, 1);
      return clonePrev;
    });
  };

  var addNewItem = function addNewItem(value) {
    if (onAddNewItem) {
      onAddNewItem(value, itemsData);
    }

    setItemsData(function (prev) {
      return [].concat(_toConsumableArray(prev), [_objectSpread(_objectSpread({}, value), {}, {
        __visible: true
      })]);
    });
  };

  var cloneItem = function cloneItem(index) {
    setItemsData(function (prev) {
      var _ref2 = [prev.slice(0, index + 1), prev.slice(index + 1)],
          before = _ref2[0],
          after = _ref2[1];
      return [].concat(_toConsumableArray(before), [lodash.assign({}, prev[index])], _toConsumableArray(after));
    });
  };

  var moveRepeaterItem = function moveRepeaterItem(_ref3) {
    var oldIndex = _ref3.oldIndex,
        newIndex = _ref3.newIndex;
    setItemsData(function (prev) {
      var _ref4 = [prev[oldIndex], prev[newIndex]];
      prev[newIndex] = _ref4[0];
      prev[oldIndex] = _ref4[1];
      return _toConsumableArray(prev);
    });
  };

  var moveUp = function moveUp(index) {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index - 1
    });
  };

  var moveDown = function moveDown(index) {
    moveRepeaterItem({
      oldIndex: index,
      newIndex: index + 1
    });
  };

  var isDisabledEnd = function isDisabledEnd(index) {
    return !(index < itemsData.length - 1);
  };

  var toggleVisible = function toggleVisible(index) {
    setItemsData(function (prev) {
      prev[index].__visible = !prev[index].__visible;
      return _toConsumableArray(prev);
    });
  };

  useEffect(function () {
    if (true === isSaveAction) {
      var cloneItems = _toConsumableArray(itemsData);

      if (onSaveItems) {
        cloneItems.forEach(function (item, index) {
          for (var itemKey in item) {
            if (itemKey.startsWith('__')) {
              delete cloneItems[index][itemKey];
            }
          }
        });
        onSaveItems(cloneItems);
      }

      onUnMount();
    } else if (false === isSaveAction) {
      onUnMount();
    }
  }, [isSaveAction]);

  var getRepeaterItemId = function getRepeaterItemId(index) {
    return "jet-form-builder-repeater__item_".concat(index);
  };

  var RepeaterItem = function RepeaterItem(_ref5) {
    var currentItem = _ref5.currentItem,
        index = _ref5.index;
    return wp.element.createElement(Card, {
      isElevated: true,
      className: itemClassNames,
      key: getRepeaterItemId(index),
      id: getRepeaterItemId(index)
    }, wp.element.createElement(CardHeader, {
      className: 'repeater__item__header'
    }, wp.element.createElement("div", {
      className: "repeater-item__left-heading"
    }, wp.element.createElement(ButtonGroup, {
      className: 'repeater-action-buttons'
    }, wp.element.createElement(Button, {
      isSmall: true,
      icon: currentItem.__visible ? 'visibility' : 'hidden',
      onClick: function onClick() {
        return toggleVisible(index);
      },
      className: 'repeater-action-button'
    }), wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      disabled: !Boolean(index),
      icon: 'arrow-up-alt2',
      onClick: function onClick() {
        return moveUp(index);
      },
      className: 'repeater-action-button'
    }), wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      disabled: isDisabledEnd(index),
      icon: 'arrow-down-alt2',
      onClick: function onClick() {
        return moveDown(index);
      },
      className: 'repeater-action-button'
    })), wp.element.createElement("span", {
      className: 'repeater-item-title'
    }, ItemHeading && wp.element.createElement(ItemHeading, {
      currentItem: currentItem,
      index: index,
      changeCurrentItem: function changeCurrentItem(data) {
        return _changeCurrentItem(data, index);
      }
    }), !ItemHeading && "#".concat(index + 1))), wp.element.createElement(ButtonGroup, null, wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      onClick: function onClick() {
        return cloneItem(index);
      }
    }, __('Clone', 'jet-form-builder')), wp.element.createElement(Button, {
      isSmall: true,
      isSecondary: true,
      isDestructive: true,
      onClick: function onClick() {
        return removeOption(index);
      }
    }, __('Delete', 'jet-form-builder')))), currentItem.__visible && wp.element.createElement(CardBody, {
      className: 'repeater-item__content'
    }, children && wp.element.createElement(React.Fragment, {
      key: "repeater-component__item_".concat(index)
    }, 'function' === typeof children && children({
      currentItem: currentItem,
      changeCurrentItem: function changeCurrentItem(data) {
        return _changeCurrentItem(data, index);
      }
    }), 'function' !== typeof children && children), !children && 'Set up your Repeater Template, please.'));
  };

  var helpSource = help.helpSource,
      helpVisible = help.helpVisible,
      helpKey = help.helpKey;
  var isVisibleHelp = helpVisible(itemsData) && helpSource && helpSource[helpKey];
  return wp.element.createElement("div", {
    className: classNames,
    key: 'jet-form-builder-repeater'
  }, isVisibleHelp && wp.element.createElement("p", null, helpSource[helpKey].label), 0 < itemsData.length && wp.element.createElement(ToggleControl, {
    label: __('Safe deleting'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  }), itemsData.map(function (currentItem, index) {
    return RepeaterItem({
      currentItem: currentItem,
      index: index
    });
  }), 1 < itemsData.length && wp.element.createElement(ToggleControl, {
    className: "jet-control-clear",
    label: __('Safe deleting'),
    checked: isSafeDeleting,
    onChange: setSafeDeleting
  }), wp.element.createElement(Button, {
    isSecondary: true,
    onClick: function onClick() {
      return addNewItem(newItem);
    }
  }, addNewButtonLabel));
}

/* harmony default export */ __webpack_exports__["default"] = (RepeaterWithState);

/***/ }),

/***/ "./package/components/horizontal-line.js":
/*!***********************************************!*\
  !*** ./package/components/horizontal-line.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HorizontalLine(props) {
  return wp.element.createElement("hr", {
    style: _objectSpread({}, props)
  });
}

/* harmony default export */ __webpack_exports__["default"] = (HorizontalLine);

/***/ }),

/***/ "./package/components/presets/dynamic-preset.js":
/*!******************************************************!*\
  !*** ./package/components/presets/dynamic-preset.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preset_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preset-editor */ "./package/components/presets/preset-editor.js");
/* harmony import */ var _preset_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preset-render */ "./package/components/presets/preset-render.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function DynamicPreset(_ref) {
  var value = _ref.value,
      isSaveAction = _ref.isSaveAction,
      onSavePreset = _ref.onSavePreset,
      onUnMount = _ref.onUnMount,
      parseValue = _ref.parseValue,
      excludeOptions = _ref.excludeOptions,
      isCurrentFieldVisible = _ref.isCurrentFieldVisible,
      isVisible = _ref.isVisible;
  var position = 'dynamic';

  var _useState = useState(function () {
    return parseValue(value);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setValue = _useState2[1];

  var onChangeValue = function onChangeValue(newValue, name) {
    setValue(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, newValue));
    });
  };

  useEffect(function () {
    if (true === isSaveAction) {
      if (onSavePreset) {
        onSavePreset(JSON.stringify(stateValue));
      }

      onUnMount();
    } else if (false === isSaveAction) {
      onUnMount();
    }
  }, [isSaveAction]);
  return wp.element.createElement(React.Fragment, null, window.JetFormEditorData.presetConfig.global_fields.map(function (data, index) {
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_1__["GlobalField"], {
      key: "current_field_".concat(data.name, "_").concat(index),
      value: stateValue,
      index: index,
      data: data,
      excludeOptions: excludeOptions,
      onChangeValue: onChangeValue,
      isVisible: isVisible,
      position: position
    });
  }), window.JetFormEditorData.presetConfig.map_fields.map(function (data, index) {
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_1__["MapField"], {
      key: "current_field_".concat(data.name, "_").concat(index),
      currentState: stateValue,
      value: stateValue['current_field_' + data.name],
      index: index,
      data: data,
      onChangeValue: onChangeValue,
      isCurrentFieldVisible: isCurrentFieldVisible,
      position: position
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_preset_editor__WEBPACK_IMPORTED_MODULE_0__["default"])(DynamicPreset));

/***/ }),

/***/ "./package/components/presets/preset-editor.js":
/*!*****************************************************!*\
  !*** ./package/components/presets/preset-editor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function withPreset(WrappedComponent) {
  return function JetFormPresetEditor(props) {
    var parseValue = function parseValue() {
      var val = {};

      if ('object' === _typeof(props.value)) {
        val = _objectSpread({}, props.value);
      } else if (props.value && 'string' === typeof props.value) {
        try {
          val = JSON.parse(props.value);

          if ('number' === typeof val) {
            throw new Error();
          }
        } catch (exception) {
          val = {};
        }
      }

      val.jet_preset = true;
      return val;
    };

    var isVisible = function isVisible(currentState, data, position) {
      return (data.position && position === data.position || !data.position || 'query_var' !== currentState.from) && isGlobalVisible(currentState, data);
    };

    var isGlobalVisible = function isGlobalVisible(currentState, data) {
      if (!data.condition && !data.custom_condition) {
        return true;
      }

      if (data.custom_condition) {
        switch (data.custom_condition) {
          case 'query_var':
            return 'post' === currentState.from && 'query_var' === currentState.post_from || 'user' === currentState.from && 'query_var' === currentState.user_from || 'query_var' === currentState.from;
        }
      }

      if (data.condition) {
        return currentState[data.condition.field] === data.condition.value;
      }

      return true;
    };

    var isCurrentFieldVisible = function isCurrentFieldVisible(currentState, data, position) {
      if (!data.condition && !data.parent_condition) {
        return true;
      }

      if (data.position && position !== data.position) {
        return false;
      }

      if (data.parent_condition && !data.condition) {
        return currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (data.parent_condition && data.condition) {
        return currentState['current_field_' + data.condition.field] === data.condition.value && currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (!data.parent_condition && data.condition) {
        return currentState['current_field_' + data.condition.field] === data.condition.value;
      }

      return true;
    };

    var isMapFieldVisible = function isMapFieldVisible(currentState, data, field) {
      if (!data.condition && !data.parent_condition) {
        return true;
      }

      if (data.parent_condition && !data.condition) {
        return currentState[data.parent_condition.field] === data.parent_condition.value;
      } else if (data.parent_condition && data.condition) {
        if (!currentState.fields_map || !currentState.fields_map[field]) {
          return false;
        } else {
          return currentState.fields_map[field][data.condition.field] === data.condition.value && currentState[data.parent_condition.field] === data.parent_condition.value;
        }
      } else if (!data.parent_condition && data.condition) {
        if (!currentState.fields_map || !currentState.fields_map[field]) {
          return false;
        } else {
          return currentState.fields_map[field][data.condition.field] === data.condition.value;
        }
      }

      return true;
    };

    var excludeOptions = function excludeOptions(selectOptions) {
      var options = _toConsumableArray(selectOptions);

      options.forEach(function (option, index) {
        if (props.excludeSources && props.excludeSources.includes(option.value)) {
          options.splice(index, 1);
        }
      });
      return options;
    };

    return wp.element.createElement(WrappedComponent, _extends({
      key: "wrapped-preset-editor"
    }, props, {
      parseValue: parseValue,
      isVisible: isVisible,
      isMapFieldVisible: isMapFieldVisible,
      isCurrentFieldVisible: isCurrentFieldVisible,
      excludeOptions: excludeOptions
    }));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withPreset);

/***/ }),

/***/ "./package/components/presets/preset-render.js":
/*!*****************************************************!*\
  !*** ./package/components/presets/preset-render.js ***!
  \*****************************************************/
/*! exports provided: GlobalField, AvailableMapField, MapField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalField", function() { return GlobalField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableMapField", function() { return AvailableMapField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapField", function() { return MapField; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;

function GlobalField(_ref) {
  var data = _ref.data,
      value = _ref.value,
      index = _ref.index,
      onChangeValue = _ref.onChangeValue,
      isVisible = _ref.isVisible,
      _ref$excludeOptions = _ref.excludeOptions,
      excludeOptions = _ref$excludeOptions === void 0 ? function (options) {
    return options;
  } : _ref$excludeOptions,
      position = _ref.position;

  switch (data.type) {
    case 'text':
      return isVisible(value, data, position) && wp.element.createElement("div", {
        key: 'field_' + data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(TextControl, {
        key: data.name + index,
        label: data.label,
        value: value[data.name],
        onChange: function onChange(newVal) {
          onChangeValue(newVal, data.name);
        }
      }));

    case 'select':
      return isVisible(value, data, position) && wp.element.createElement("div", {
        key: 'field_' + data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(SelectControl, {
        key: data.name + index,
        labelPosition: "side",
        options: excludeOptions(data.options),
        label: data.label,
        value: value[data.name],
        onChange: function onChange(newVal) {
          onChangeValue(newVal, data.name);
        }
      }));
  }

  return null;
}

function AvailableMapField(_ref2) {
  var fieldsMap = _ref2.fieldsMap,
      field = _ref2.field,
      index = _ref2.index,
      value = _ref2.value,
      onChangeValue = _ref2.onChangeValue,
      isMapFieldVisible = _ref2.isMapFieldVisible;
  var currentVal = null;

  if (!fieldsMap) {
    fieldsMap = {};
  }

  currentVal = fieldsMap[field];

  if (!currentVal) {
    currentVal = {};
  }

  var AvailableFieldWrapper = function AvailableFieldWrapper(_ref3) {
    var field = _ref3.field,
        name = _ref3.name,
        index = _ref3.index,
        fIndex = _ref3.fIndex,
        children = _ref3.children;
    return wp.element.createElement(React.Fragment, null, wp.element.createElement("span", {
      className: "jet-label-overflow"
    }, field), wp.element.createElement("div", {
      key: field + name + index + fIndex,
      className: 'jet-form-preset__fields-map-item'
    }, children));
  };

  return wp.element.createElement(React.Fragment, {
    key: "map_field_preset_".concat(field + index)
  }, window.JetFormEditorData.presetConfig.map_fields.map(function (data, fIndex) {
    var props = {
      field: field,
      name: data.name,
      index: index,
      fIndex: fIndex
    };
    var uniqKey = 'control_' + field + data.name + index + fIndex;

    switch (data.type) {
      case 'text':
        return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, _extends({}, props, {
          key: uniqKey
        }), wp.element.createElement(TextControl, {
          placeholder: data.label,
          value: currentVal[data.name],
          onChange: function onChange(newVal) {
            currentVal[data.name] = newVal;
            onChangeValue(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, field, currentVal)), 'fields_map');
          }
        }));

      case 'select':
        return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, _extends({}, props, {
          key: uniqKey
        }), wp.element.createElement(SelectControl, {
          options: data.options //label={ data.label }
          ,
          value: currentVal[data.name],
          onChange: function onChange(newVal) {
            currentVal[data.name] = newVal;
            onChangeValue(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, field, currentVal)), 'fields_map');
          }
        }));
    }
  }));
}

function MapField(_ref4) {
  var data = _ref4.data,
      value = _ref4.value,
      index = _ref4.index,
      currentState = _ref4.currentState,
      onChangeValue = _ref4.onChangeValue,
      isCurrentFieldVisible = _ref4.isCurrentFieldVisible,
      _ref4$position = _ref4.position,
      position = _ref4$position === void 0 ? 'general' : _ref4$position;

  switch (data.type) {
    case 'text':
      return isCurrentFieldVisible(currentState, data) && wp.element.createElement("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(TextControl, {
        key: 'control_' + data.name + index,
        placeholder: data.label,
        value: value,
        onChange: function onChange(newVal) {
          onChangeValue(newVal, 'current_field_' + data.name);
        }
      }));

    case 'select':
      return isCurrentFieldVisible(currentState, data) && wp.element.createElement("div", {
        key: data.name + index,
        className: 'jet-form-preset__row'
      }, wp.element.createElement(SelectControl, {
        key: 'control_' + data.name + index,
        labelPosition: "side",
        options: data.options,
        label: data.label,
        value: value,
        onChange: function onChange(newVal) {
          onChangeValue(newVal, 'current_field_' + data.name);
        }
      }));
  }

  return null;
}



/***/ }),

/***/ "./package/components/request-button.js":
/*!**********************************************!*\
  !*** ./package/components/request-button.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __ = wp.i18n.__;
var Button = wp.components.Button;

function RequestButton(_ref) {
  var label = _ref.label,
      _ref$ajaxArgs = _ref.ajaxArgs,
      ajaxArgs = _ref$ajaxArgs === void 0 ? {} : _ref$ajaxArgs,
      _ref$onSuccessRequest = _ref.onSuccessRequest,
      onSuccessRequest = _ref$onSuccessRequest === void 0 ? function () {} : _ref$onSuccessRequest,
      _ref$onFailRequest = _ref.onFailRequest,
      onFailRequest = _ref$onFailRequest === void 0 ? function () {} : _ref$onFailRequest,
      _ref$onLoading = _ref.onLoading,
      onLoading = _ref$onLoading === void 0 ? function () {} : _ref$onLoading,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? function () {} : _ref$children;

  var defaultValidate = function defaultValidate() {
    return jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      data: ajaxArgs
    });
  };

  var request = function request() {
    onLoading();
    defaultValidate().done(function (response) {
      return response.success ? onSuccessRequest(response) : onFailRequest();
    }).fail(function () {
      return onFailRequest();
    });
  };

  return wp.element.createElement(Button, {
    key: 'validate_api_key',
    isPrimary: true,
    onClick: request,
    className: className
  }, children && children, label);
}

/* harmony default export */ __webpack_exports__["default"] = (RequestButton);

/***/ }),

/***/ "./package/components/request-loading-button.js":
/*!******************************************************!*\
  !*** ./package/components/request-loading-button.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-button */ "./package/components/request-button.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function RequestLoadingButton(_ref) {
  var label = _ref.label,
      _ref$ajaxArgs = _ref.ajaxArgs,
      ajaxArgs = _ref$ajaxArgs === void 0 ? {} : _ref$ajaxArgs,
      _ref$onSuccessRequest = _ref.onSuccessRequest,
      _onSuccessRequest = _ref$onSuccessRequest === void 0 ? function () {} : _ref$onSuccessRequest,
      _ref$onFailRequest = _ref.onFailRequest,
      _onFailRequest = _ref$onFailRequest === void 0 ? function () {} : _ref$onFailRequest;

  var _useStateLoadingClass = Object(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__["useStateLoadingClasses"])(),
      _useStateLoadingClass2 = _slicedToArray(_useStateLoadingClass, 3),
      className = _useStateLoadingClass2[0],
      setLoadingClass = _useStateLoadingClass2[1],
      clearLoadingClass = _useStateLoadingClass2[2];

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ajaxArgs: ajaxArgs,
    label: label,
    onLoading: setLoadingClass,
    onSuccessRequest: function onSuccessRequest(response) {
      clearLoadingClass();

      _onSuccessRequest(response);
    },
    onFailRequest: function onFailRequest() {
      clearLoadingClass();

      _onFailRequest();
    },
    className: className
  }, wp.element.createElement("i", {
    className: "dashicons"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RequestLoadingButton);

/***/ }),

/***/ "./package/components/validate-button.js":
/*!***********************************************!*\
  !*** ./package/components/validate-button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-button */ "./package/components/request-button.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ValidateButton(_ref) {
  var initialValid = _ref.initialValid,
      label = _ref.label,
      _ref$ajaxArgs = _ref.ajaxArgs,
      ajaxArgs = _ref$ajaxArgs === void 0 ? {} : _ref$ajaxArgs,
      _ref$onValid = _ref.onValid,
      onValid = _ref$onValid === void 0 ? function () {} : _ref$onValid,
      _ref$onInvalid = _ref.onInvalid,
      onInvalid = _ref$onInvalid === void 0 ? function () {} : _ref$onInvalid;

  var _useStateValidClasses = Object(_helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_1__["useStateValidClasses"])(initialValid || false),
      _useStateValidClasses2 = _slicedToArray(_useStateValidClasses, 4),
      className = _useStateValidClasses2[0],
      setValidClass = _useStateValidClasses2[1],
      setInvalidClass = _useStateValidClasses2[2],
      setLoadingClass = _useStateValidClasses2[3];

  var setValid = function setValid(response) {
    setValidClass();
    onValid(response);
  };

  var setInvalid = function setInvalid() {
    setInvalidClass();
    onInvalid();
  };

  return wp.element.createElement(_request_button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    ajaxArgs: ajaxArgs,
    label: label,
    onLoading: setLoadingClass,
    onSuccessRequest: setValid,
    onFailRequest: setInvalid,
    className: className
  }, wp.element.createElement("i", {
    className: "dashicons"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ValidateButton);

/***/ }),

/***/ "./package/components/wrapper-required-control.js":
/*!********************************************************!*\
  !*** ./package/components/wrapper-required-control.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperRequiredControl; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function WrapperRequiredControl(_ref) {
  var field = _ref.field,
      children = _ref.children,
      _ref$labelKey = _ref.labelKey,
      labelKey = _ref$labelKey === void 0 ? 'label' : _ref$labelKey,
      _ref$requiredKey = _ref.requiredKey,
      requiredKey = _ref$requiredKey === void 0 ? 'required' : _ref$requiredKey;

  var _field = _slicedToArray(field, 2),
      name = _field[0],
      data = _field[1];

  return wp.element.createElement("div", {
    className: "jet-user-meta__row fields-map-control",
    key: 'user_meta_' + name
  }, wp.element.createElement("div", {
    className: "jet-field-map__row-label"
  }, wp.element.createElement("span", {
    className: 'fields-map__label'
  }, data.hasOwnProperty(labelKey) && data[labelKey] && data[labelKey], !data.hasOwnProperty(labelKey) && data), data.hasOwnProperty(requiredKey) && data[requiredKey] && wp.element.createElement("span", {
    className: 'fields-map__required'
  }, " *")), children);
}

/***/ }),

/***/ "./package/helpers/actions/action-helper.js":
/*!**************************************************!*\
  !*** ./package/helpers/actions/action-helper.js ***!
  \**************************************************/
/*! exports provided: getActionsByType, fromLocalizeHelper, actionByTypeList, getActionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionsByType", function() { return getActionsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromLocalizeHelper", function() { return fromLocalizeHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionByTypeList", function() { return actionByTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionSettings", function() { return getActionSettings; });
/* harmony import */ var _hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
/* harmony import */ var _gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gateways/gateway-action-attrubites */ "./package/helpers/gateways/gateway-action-attrubites.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var getActionsByType = function getActionsByType(type) {
  var _useActions = Object(_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__["useActions"])(),
      _useActions2 = _slicedToArray(_useActions, 1),
      actions = _useActions2[0];

  return actions.filter(function (action) {
    return type === action.type;
  });
};
var fromLocalizeHelper = function fromLocalizeHelper(name) {
  return name ? window.JetFBLocalizeHelper[name] : window.JetFBLocalizeHelper;
};
var actionByTypeList = function actionByTypeList(actionType) {
  var withDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return getActionsByType(actionType).map(function (action) {
    var newAction = {
      value: action.id,
      label: fromLocalizeHelper('getActionLabel')(action.type)
    };

    if (withDesc) {
      newAction.label += " (".concat(Object(_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_1__["default"])(action), ")");
    }

    return newAction;
  });
};
var getActionSettings = function getActionSettings(actionId) {
  var _useActions3 = Object(_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_0__["useActions"])(),
      _useActions4 = _slicedToArray(_useActions3, 1),
      actions = _useActions4[0];

  var action = actions.find(function (action) {
    return actionId === action.id;
  });
  return action && action.settings ? action.settings : false;
};

/***/ }),

/***/ "./package/helpers/actions/action-manager.js":
/*!***************************************************!*\
  !*** ./package/helpers/actions/action-manager.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-wrapper */ "./package/helpers/actions/action-wrapper.js");


function addAction(actionType, actionInstance) {
  window.jetFormDefaultActions = window.jetFormDefaultActions || {};
  window.jetFormDefaultActions[actionType] = Object(_action_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(actionType, actionInstance);
}

/* harmony default export */ __webpack_exports__["default"] = (addAction);

/***/ }),

/***/ "./package/helpers/actions/action-wrapper.js":
/*!***************************************************!*\
  !*** ./package/helpers/actions/action-wrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withActionLocalizeScript; });
/* harmony import */ var _action_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-helper */ "./package/helpers/actions/action-helper.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function withActionLocalizeScript(actionType, ActionInstance) {
  var localizedData = Object(_action_helper__WEBPACK_IMPORTED_MODULE_0__["fromLocalizeHelper"])('getLocalizedFullPack')(actionType);
  return function (props) {
    var onChangeSetting = function onChangeSetting(value, key) {
      props.onChange(_objectSpread(_objectSpread({}, props.settings), {}, _defineProperty({}, key, value)));
    };

    var getMapField = function getMapField(_ref) {
      var _ref$source = _ref.source,
          source = _ref$source === void 0 ? 'fields_map' : _ref$source,
          name = _ref.name;
      var settings = props.settings;

      if (typeof settings[source] !== 'undefined' && typeof settings[source][name] !== 'undefined') {
        return settings[source][name];
      }

      return '';
    };

    var setMapField = function setMapField(_ref2) {
      var _ref2$source = _ref2.source,
          source = _ref2$source === void 0 ? 'fields_map' : _ref2$source,
          nameField = _ref2.nameField,
          value = _ref2.value;

      var fieldsMap = _objectSpread(_objectSpread({}, props.settings[source]), {}, _defineProperty({}, nameField, value));

      props.onChange(_objectSpread(_objectSpread({}, props.settings), {}, _defineProperty({}, source, fieldsMap)));
    };

    var additionalProps = {
      onChangeSetting: onChangeSetting,
      getMapField: getMapField,
      setMapField: setMapField
    };
    return wp.element.createElement(ActionInstance, _extends({}, props, localizedData, additionalProps));
  };
}

/***/ }),

/***/ "./package/helpers/blocks/blocks-helper.js":
/*!*************************************************!*\
  !*** ./package/helpers/blocks/blocks-helper.js ***!
  \*************************************************/
/*! exports provided: getFormFieldsByBlock, getInnerBlocks, getAvailableFieldsString, getAvailableFields, getFormFieldsBlocks, getFieldsWithoutCurrent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormFieldsByBlock", function() { return getFormFieldsByBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerBlocks", function() { return getInnerBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableFieldsString", function() { return getAvailableFieldsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableFields", function() { return getAvailableFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormFieldsBlocks", function() { return getFormFieldsBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldsWithoutCurrent", function() { return getFieldsWithoutCurrent; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __ = wp.i18n.__;

var blocksRecursiveIterator = function blocksRecursiveIterator(blockParserFunc) {
  var blocksRecursiveIterator = function blocksRecursiveIterator(blocks) {
    blocks = blocks || wp.data.select('core/block-editor').getBlocks();
    blocks.map(function (block) {
      blockParserFunc(block);

      if (block.innerBlocks.length) {
        blocksRecursiveIterator(block.innerBlocks);
      }
    });
  };

  blocksRecursiveIterator();
};

var getFormFieldsBlocks = function getFormFieldsBlocks() {
  var exclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var formFields = [];
  var skipFields = ['submit', 'form-break', 'heading', 'group-break'].concat(_toConsumableArray(exclude));
  blocksRecursiveIterator(function (block) {
    if (block.name.includes('jet-forms/') && block.attributes.name && !skipFields.find(function (field) {
      return block.name.includes(field);
    })) {
      formFields.push({
        blockName: block.name,
        name: block.attributes.name,
        label: block.attributes.label || block.attributes.name,
        value: block.attributes.name
      });
    }
  });
  return placeholder ? [{
    value: '',
    label: placeholder
  }].concat(formFields) : formFields;
};

var getFieldsWithoutCurrent = function getFieldsWithoutCurrent() {
  var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var skipFields = ['submit', 'form-break', 'heading', 'group-break'];
  var formFields = [];
  var current = wp.data.select('core/block-editor').getSelectedBlock();

  if (null === current) {
    return [];
  }

  blocksRecursiveIterator(function (block) {
    if (block.name.includes('jet-forms/') && current.clientId !== block.clientId && !skipFields.find(function (field) {
      return block.name.includes(field);
    })) {
      formFields.push({
        blockName: block.name,
        label: block.attributes.label || block.attributes.name,
        value: block.attributes.name
      });
    }
  });
  return placeholder ? [{
    value: '',
    label: placeholder
  }].concat(formFields) : formFields;
};

var getAvailableFields = function getAvailableFields() {
  var exclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fields = [];
  var blocks = getFormFieldsBlocks(exclude);

  if (blocks) {
    blocks.forEach(function (item) {
      return fields.push(item.name);
    });
  }

  return fields;
};

var getAvailableFieldsString = function getAvailableFieldsString(blockName) {
  var fields = getAvailableFields([blockName]);
  var fieldsString = [];
  fields.forEach(function (item) {
    fieldsString.push('%FIELD::' + item + '%');
  });
  return __('Available fields: ') + fieldsString.join(', ');
};

var getInnerBlocks = function getInnerBlocks(clientId) {
  var block = wp.data.select('core/block-editor').getBlock(clientId);
  return block ? block.innerBlocks : [];
};

var getFormFieldsByBlock = function getFormFieldsByBlock(blockExclude) {
  return function () {
    return getFormFieldsBlocks([blockExclude.name]);
  };
};



/***/ }),

/***/ "./package/helpers/gateways/gateway-action-attrubites.js":
/*!***************************************************************!*\
  !*** ./package/helpers/gateways/gateway-action-attrubites.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_action_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-helper */ "./package/helpers/actions/action-helper.js");


function gatewayActionAttributes(action) {
  var _fromLocalizeHelper = Object(_actions_action_helper__WEBPACK_IMPORTED_MODULE_0__["fromLocalizeHelper"])('getLocalizedFullPack')(action.type),
      gatewayAttrs = _fromLocalizeHelper.gatewayAttrs,
      label = _fromLocalizeHelper.label;

  var actionSettings = Object(_actions_action_helper__WEBPACK_IMPORTED_MODULE_0__["getActionSettings"])(action.id);

  var value = function value(attr) {
    return actionSettings[attr] ? actionSettings[attr] : 'NULL';
  };

  var labelWithAttrs = gatewayAttrs().map(function (attr) {
    return "".concat(label(attr), " ").concat(value(attr));
  });
  return labelWithAttrs.join(', ');
}

/* harmony default export */ __webpack_exports__["default"] = (gatewayActionAttributes);

/***/ }),

/***/ "./package/helpers/gateways/gateway-helper.js":
/*!****************************************************!*\
  !*** ./package/helpers/gateways/gateway-helper.js ***!
  \****************************************************/
/*! exports provided: gatewayAttr, gatewayLabel, registerGateway, renderGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatewayAttr", function() { return gatewayAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatewayLabel", function() { return gatewayLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerGateway", function() { return registerGateway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGateway", function() { return renderGateway; });
var gatewayAttr = function gatewayAttr() {
  var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var isEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var data = window.JetFormEditorData.gateways;

  if (!attr) {
    return data;
  }

  if (!data[attr]) {
    return false;
  }

  var source = data[attr];
  return function (name) {
    return source[name] ? source[name] : isEmpty;
  };
};
var gatewayLabel = function gatewayLabel(type) {
  var isEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var label = gatewayAttr('labels');
  return function (attr) {
    return label(type) ? label(type)[attr] : isEmpty;
  };
};
var registerGateway = function registerGateway(id, callback) {
  window.jetFBGatewaysList = window.jetFBGatewaysList || {};
  window.jetFBGatewaysList[id] = callback;
};
var renderGateway = function renderGateway(id, props) {
  if (!window.jetFBGatewaysList || !window.jetFBGatewaysList[id]) {
    return null;
  }

  var GatewayComponent = window.jetFBGatewaysList[id];
  return wp.element.createElement(GatewayComponent, props);
};

/***/ }),

/***/ "./package/helpers/hooks/hooks-helper.js":
/*!***********************************************!*\
  !*** ./package/helpers/hooks/hooks-helper.js ***!
  \***********************************************/
/*! exports provided: useMetaState, useActions, useStateValidClasses, useStateLoadingClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMetaState", function() { return useMetaState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActions", function() { return useActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateValidClasses", function() { return useStateValidClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateLoadingClasses", function() { return useStateLoadingClasses; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var useMetaState = function useMetaState(key) {
  var ifEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '{}';
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });

  var _useDispatch = useDispatch('core/editor'),
      editPost = _useDispatch.editPost;

  var _useState = useState(JSON.parse(meta[key] || ifEmpty)),
      _useState2 = _slicedToArray(_useState, 2),
      metaStateValue = _useState2[0],
      setMetaStateValue = _useState2[1];

  useEffect(function () {
    editPost({
      meta: _objectSpread(_objectSpread({}, meta), {}, _defineProperty({}, key, JSON.stringify(metaStateValue)))
    });
  }, [metaStateValue]);
  return [metaStateValue, setMetaStateValue];
};
var useActions = function useActions() {
  var withEditPostEffect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });

  var _useDispatch2 = useDispatch('core/editor'),
      editPost = _useDispatch2.editPost;

  var _useState3 = useState(JSON.parse(meta._jf_actions || '[]')),
      _useState4 = _slicedToArray(_useState3, 2),
      actions = _useState4[0],
      setActions = _useState4[1];

  useEffect(function () {
    if (withEditPostEffect) {
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_actions: JSON.stringify(actions)
        })
      });
    }
  }, [actions]);
  return [actions, setActions];
};
var initClasses = ['jet-form-validate-button'];
var useStateValidClasses = function useStateValidClasses(initialValid) {
  var validClass = 'is-valid';
  var invalidClass = 'is-invalid';

  var initStateClasses = function initStateClasses() {
    if (initialValid) {
      return [].concat(initClasses, [validClass]);
    } else if (!initialValid) {
      return [].concat(initClasses, [invalidClass]);
    }
  };

  var _useState5 = useState(initStateClasses()),
      _useState6 = _slicedToArray(_useState5, 2),
      classes = _useState6[0],
      setClasses = _useState6[1];

  var setValidClass = function setValidClass() {
    setClasses([].concat(initClasses, [validClass]));
  };

  var setInvalidClass = function setInvalidClass() {
    setClasses([].concat(initClasses, [invalidClass]));
  };

  var setLoadingClass = function setLoadingClass() {
    setClasses([].concat(initClasses, ['loading']));
  };

  return [classes.join(' '), setValidClass, setInvalidClass, setLoadingClass];
};
var useStateLoadingClasses = function useStateLoadingClasses() {
  var _useState7 = useState([].concat(initClasses)),
      _useState8 = _slicedToArray(_useState7, 2),
      classes = _useState8[0],
      setClasses = _useState8[1];

  var setLoadingClass = function setLoadingClass() {
    setClasses([].concat(initClasses, ['loading']));
  };

  var clearLoadingClass = function clearLoadingClass() {
    setClasses(initClasses);
  };

  return [classes.join(' '), setLoadingClass, clearLoadingClass];
};

/***/ }),

/***/ "./package/helpers/settings/helper.js":
/*!********************************************!*\
  !*** ./package/helpers/settings/helper.js ***!
  \********************************************/
/*! exports provided: globalTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalTab", function() { return globalTab; });
function globalTab(_ref) {
  var slug = _ref.slug,
      _ref$element = _ref.element,
      element = _ref$element === void 0 ? '' : _ref$element,
      _ref$empty = _ref.empty,
      empty = _ref$empty === void 0 ? '' : _ref$empty;
  var global = JetFormEditorData.global_settings;

  if (!global) {
    return empty;
  }

  if (element) {
    return global[slug] && global[slug][element] ? global[slug][element] : empty;
  }

  return global[slug] || empty;
}



/***/ }),

/***/ "./package/helpers/tools.js":
/*!**********************************!*\
  !*** ./package/helpers/tools.js ***!
  \**********************************/
/*! exports provided: event, listen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __ = wp.i18n.__;

var Tools = /*#__PURE__*/function () {
  function Tools() {
    _classCallCheck(this, Tools);
  }

  _createClass(Tools, null, [{
    key: "getLabel",
    value: function getLabel(meta, attrs) {
      var label = {};
      label.name = attrs.label;

      if (attrs.required) {
        label.mark = JSON.parse(meta._jf_args).required_mark || '';
      }

      return label;
    }
  }, {
    key: "withPlaceholder",
    value: function withPlaceholder(source) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return [{
        label: label,
        value: value
      }].concat(_toConsumableArray(source));
    }
  }, {
    key: "isEmptyObject",
    value: function isEmptyObject(object) {
      return 'object' === _typeof(object) && Object.keys(object).length === 0;
    }
  }, {
    key: "getFuncCondition",
    value: function getFuncCondition(nameFunction) {
      return new Function("return window.JetFormBuilderConditions[ '".concat(nameFunction, "' ]"));
    }
  }, {
    key: "addConditionForCondType",
    value: function addConditionForCondType(name, callable) {
      window.JetFormBuilderConditions = window.JetFormBuilderConditions || {};
      window.JetFormBuilderConditions[name] = callable;
    }
  }, {
    key: "parseConditionsFunc",
    value: function parseConditionsFunc(source) {
      var types = [];
      source.forEach(function (type) {
        if (type.condition) {
          if (Tools.getFuncCondition(type.condition)()(type.value)) {
            types.push(type);
          }
        } else {
          types.push(type);
        }
      });
      return types;
    }
  }]);

  return Tools;
}();

var event = function event(name) {
  var initializeCallbacksEvent = new Event(name);
  return function () {
    return document.dispatchEvent(initializeCallbacksEvent);
  };
};
var listen = function listen(name, func) {
  document.addEventListener(name, func);
};
/* harmony default export */ __webpack_exports__["default"] = (Tools);

/***/ }),

/***/ "./package/manager.js":
/*!****************************!*\
  !*** ./package/manager.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_action_fields_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/action-fields-map */ "./package/components/action-fields-map.js");
/* harmony import */ var _components_action_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/action-modal */ "./package/components/action-modal.js");
/* harmony import */ var _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/wrapper-required-control */ "./package/components/wrapper-required-control.js");
/* harmony import */ var _components_request_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request-button */ "./package/components/request-button.js");
/* harmony import */ var _components_validate_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validate-button */ "./package/components/validate-button.js");
/* harmony import */ var _helpers_actions_action_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/actions/action-manager */ "./package/helpers/actions/action-manager.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/tools */ "./package/helpers/tools.js");
/* harmony import */ var _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/presets/dynamic-preset */ "./package/components/presets/dynamic-preset.js");
/* harmony import */ var _editor_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/blocks/controls/fields-map */ "./editor/blocks/controls/fields-map.js");
/* harmony import */ var _components_fields_field_with_preset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fields/field-with-preset */ "./package/components/fields/field-with-preset.js");
/* harmony import */ var _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/presets/preset-render */ "./package/components/presets/preset-render.js");
/* harmony import */ var _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/blocks/blocks-helper */ "./package/helpers/blocks/blocks-helper.js");
/* harmony import */ var _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/gateways/gateway-helper */ "./package/helpers/gateways/gateway-helper.js");
/* harmony import */ var _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/hooks/hooks-helper */ "./package/helpers/hooks/hooks-helper.js");
/* harmony import */ var _components_fields_field_wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/fields/field-wrapper */ "./package/components/fields/field-wrapper.js");
/* harmony import */ var _components_fields_macros_inserter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/fields/macros-inserter */ "./package/components/fields/macros-inserter.js");
/* harmony import */ var _components_fields_repeater_with_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/fields/repeater-with-state */ "./package/components/fields/repeater-with-state.js");
/* harmony import */ var _components_presets_preset_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/presets/preset-editor */ "./package/components/presets/preset-editor.js");
/* harmony import */ var _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/fields/field-control */ "./package/components/fields/field-control.js");
/* harmony import */ var _components_actions_placeholder_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/actions/placeholder-message */ "./package/components/actions/placeholder-message.js");
/* harmony import */ var _components_horizontal_line__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/horizontal-line */ "./package/components/horizontal-line.js");
/* harmony import */ var _components_request_loading_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/request-loading-button */ "./package/components/request-loading-button.js");
/* harmony import */ var _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/actions/action-helper */ "./package/helpers/actions/action-helper.js");
/* harmony import */ var _helpers_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/gateways/gateway-action-attrubites */ "./package/helpers/gateways/gateway-action-attrubites.js");
/* harmony import */ var _helpers_settings_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/settings/helper */ "./package/helpers/settings/helper.js");
























 // JFBComponents

window.JetFBComponents = {
  ActionFieldsMap: _components_action_fields_map__WEBPACK_IMPORTED_MODULE_0__["default"],
  ActionModal: _components_action_modal__WEBPACK_IMPORTED_MODULE_1__["default"],
  RequestButton: _components_request_button__WEBPACK_IMPORTED_MODULE_3__["default"],
  ValidateButton: _components_validate_button__WEBPACK_IMPORTED_MODULE_4__["default"],
  RequestLoadingButton: _components_request_loading_button__WEBPACK_IMPORTED_MODULE_21__["default"],
  WrapperRequiredControl: _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_2__["default"],
  DynamicPreset: _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_7__["default"],
  JetFieldsMapControl: _editor_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_8__["default"],
  FieldWithPreset: _components_fields_field_with_preset__WEBPACK_IMPORTED_MODULE_9__["default"],
  GlobalField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__["GlobalField"],
  AvailableMapField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__["AvailableMapField"],
  MapField: _components_presets_preset_render__WEBPACK_IMPORTED_MODULE_10__["MapField"],
  FieldWrapper: _components_fields_field_wrapper__WEBPACK_IMPORTED_MODULE_14__["default"],
  MacrosInserter: _components_fields_macros_inserter__WEBPACK_IMPORTED_MODULE_15__["default"],
  RepeaterWithState: _components_fields_repeater_with_state__WEBPACK_IMPORTED_MODULE_16__["default"],
  AdvancedFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__["AdvancedFields"],
  GeneralFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__["GeneralFields"],
  ToolBarFields: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__["ToolBarFields"],
  FieldControl: _components_fields_field_control__WEBPACK_IMPORTED_MODULE_18__["FieldControl"],
  PlaceholderMessage: _components_actions_placeholder_message__WEBPACK_IMPORTED_MODULE_19__["default"],
  HorizontalLine: _components_horizontal_line__WEBPACK_IMPORTED_MODULE_20__["default"]
}; // JFBFunctions

window.JetFBActions = {
  addAction: _helpers_actions_action_manager__WEBPACK_IMPORTED_MODULE_5__["default"],
  withPreset: _components_presets_preset_editor__WEBPACK_IMPORTED_MODULE_17__["default"],
  getFormFieldsByBlock: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__["getFormFieldsByBlock"],
  getInnerBlocks: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__["getInnerBlocks"],
  getAvailableFieldsString: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__["getAvailableFieldsString"],
  getAvailableFields: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__["getAvailableFields"],
  getFormFieldsBlocks: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__["getFormFieldsBlocks"],
  getFieldsWithoutCurrent: _helpers_blocks_blocks_helper__WEBPACK_IMPORTED_MODULE_11__["getFieldsWithoutCurrent"],
  gatewayAttr: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__["gatewayAttr"],
  gatewayLabel: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__["gatewayLabel"],
  registerGateway: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__["registerGateway"],
  Tools: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__["default"],
  event: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__["event"],
  listen: _helpers_tools__WEBPACK_IMPORTED_MODULE_6__["listen"],
  actionByTypeList: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_22__["actionByTypeList"],
  getActionSettings: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_22__["getActionSettings"],
  fromLocalizeHelper: _helpers_actions_action_helper__WEBPACK_IMPORTED_MODULE_22__["fromLocalizeHelper"],
  renderGateway: _helpers_gateways_gateway_helper__WEBPACK_IMPORTED_MODULE_12__["renderGateway"],
  gatewayActionAttributes: _helpers_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_23__["default"],
  globalTab: _helpers_settings_helper__WEBPACK_IMPORTED_MODULE_24__["globalTab"]
}; // JFBHooks

window.JetFBHooks = {
  useActions: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__["useActions"],
  useMetaState: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__["useMetaState"],
  useStateValidClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__["useStateValidClasses"],
  useStateLoadingClasses: _helpers_hooks_hooks_helper__WEBPACK_IMPORTED_MODULE_13__["useStateLoadingClasses"]
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbi1maWVsZHMtbWFwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9hY3Rpb24tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdpdGgtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL21hY3Jvcy1pbnNlcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL3JlcGVhdGVyLXdpdGgtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2hvcml6b250YWwtbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9wcmVzZXRzL3ByZXNldC1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3JlcXVlc3QtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9yZXF1ZXN0LWxvYWRpbmctYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy92YWxpZGF0ZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24taGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9hY3Rpb25zL2FjdGlvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9ibG9ja3MvYmxvY2tzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvc2V0dGluZ3MvaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL21hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWNrYWdlL21hbmFnZXIuanNcIik7XG4iLCJcclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VGV4dENvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cclxuY2xhc3MgSmV0RmllbGRzTWFwQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZFR5cGVzID0gdGhpcy5wcm9wcy5maWVsZFR5cGVzO1xyXG5cdFx0dGhpcy50YXhvbm9taWVzTGlzdCA9IHRoaXMucHJvcHMudGF4b25vbWllc0xpc3Q7XHJcblx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xyXG5cdFx0dGhpcy5tZXRhUHJvcCA9IHRoaXMucHJvcHMubWV0YVByb3AgPyB0aGlzLnByb3BzLm1ldGFQcm9wIDogJ3Bvc3RfbWV0YSc7XHJcblx0XHR0aGlzLnRlcm1zUHJvcCA9IHRoaXMucHJvcHMudGVybXNQcm9wID8gdGhpcy5wcm9wcy50ZXJtc1Byb3AgOiAncG9zdF90ZXJtcyc7XHJcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5wcm9wcy5pbmRleDtcclxuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuYmluZEZ1bmN0aW9ucygpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHR5cGU6IHRoaXMuZ2V0RmllbGRUeXBlKCB0aGlzLnByb3BzLmZpZWxkVmFsdWUgKSxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRiaW5kRnVuY3Rpb25zKCkge1xyXG5cdFx0dGhpcy5vbkNoYW5nZVR5cGUgPSB0aGlzLm9uQ2hhbmdlVHlwZS5iaW5kKCB0aGlzICk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUgPSB0aGlzLm9uQ2hhbmdlVmFsdWUuYmluZCggdGhpcyApO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmlkID0gYGluc3BlY3Rvci1zZWxlY3QtY29udHJvbC0keyB0aGlzLmluZGV4IH1gO1xyXG5cdFx0dGhpcy5wcmVwYXJlZFRheGVzID0gW107XHJcblx0XHR0aGlzLnRheFByZWZpeCA9ICdqZXRfdGF4X18nO1xyXG5cclxuXHRcdGlmICggISB0aGlzLnRheG9ub21pZXNMaXN0ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy50YXhvbm9taWVzTGlzdC5sZW5ndGg7IGkgKysgKSB7XHJcblx0XHRcdHRoaXMucHJlcGFyZWRUYXhlcy5wdXNoKCB7XHJcblx0XHRcdFx0dmFsdWU6IHRoaXMudGF4UHJlZml4ICsgdGhpcy50YXhvbm9taWVzTGlzdFsgaSBdLnZhbHVlLFxyXG5cdFx0XHRcdGxhYmVsOiB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0ubGFiZWwsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEZpZWxkTmFtZSggdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAhIHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZmllbGRUeXBlID0gdGhpcy5nZXRGaWVsZFR5cGUoIHZhbHVlICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLnRlcm1zUHJvcCA9PT0gZmllbGRUeXBlIHx8IHRoaXMubWV0YVByb3AgPT09IGZpZWxkVHlwZSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0aXNUZXJtT3JNZXRhKCB2YWx1ZSApIHtcclxuXHRcdHJldHVybiAoIHRoaXMudGVybXNQcm9wID09PSB2YWx1ZSB8fCB0aGlzLm1ldGFQcm9wID09PSB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblxyXG5cdGdldEZpZWxkVHlwZSggdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAhIHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZFR5cGVzLmxlbmd0aDsgaSArKyApIHtcclxuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gdGhpcy5maWVsZFR5cGVzWyBpIF0udmFsdWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB2YWx1ZS5pbmNsdWRlcyggdGhpcy50YXhQcmVmaXggKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudGVybXNQcm9wO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm1ldGFQcm9wO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUgKSB7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnRoaXMucHJvcHMuZmllbGRzTWFwLFxyXG5cdFx0XHRbIHRoaXMucHJvcHMuZmllbGROYW1lIF06IG5ld1ZhbHVlXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblxyXG5cdG9uQ2hhbmdlVHlwZSggbmV3VmFsdWUgKSB7XHJcblx0XHRsZXQgdmFsID0gdGhpcy5nZXRGaWVsZFR5cGUoIG5ld1ZhbHVlICk7XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSgge1xyXG5cdFx0XHR0eXBlOiB2YWxcclxuXHRcdH0gKTtcclxuXHJcblx0XHRpZiAoIHRoaXMuaXNUZXJtT3JNZXRhKCB2YWwgKSApIHtcclxuXHRcdFx0dmFsID0gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB2YWwgKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX3Jvd1wiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LXBvc3QtZmllbGQtY29udHJvbFwiPlxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdHlwZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgdGhpcy5wcm9wcy5maWVsZE5hbWUgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnN0YXRlLnR5cGUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVHlwZSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5maWVsZFR5cGVzIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE2MHB4J1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7ICggdGhpcy5tZXRhUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfbmFtZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0eyAoIHRoaXMudGVybXNQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC13aXRob3V0LWxhYmVsJ1xyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3RheF8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLnByZXBhcmVkVGF4ZXMgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpldEZpZWxkc01hcENvbnRyb2w7IiwiXHJcbmNvbnN0IHtcclxuXHRCYXNlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25GaWVsZHNNYXAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IGZpZWxkcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgbGFiZWwgPSAnW0VtcHR5IGxhYmVsXScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBjaGlsZHJlbiA9ICgpID0+IHt9XHJcblx0XHRcdFx0XHRcdFx0XHQgfSApIHtcclxuXHJcblx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRrZXk9J2pldF9maWVsZHNfbWFwJ1xyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGRJZCwgZmllbGREYXRhIF0sIGluZGV4ICkgPT4gPFJlYWN0LkZyYWdtZW50XHJcblx0XHRcdFx0a2V5PXsgYGZpZWxkX2luX21hcF8keyBmaWVsZElkICsgaW5kZXggfWAgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSB9XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICkgfVxyXG5cdFx0PC9kaXY+XHJcblx0PC9CYXNlQ29udHJvbD5cclxufTtcclxuXHJcbiIsImZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uUmVxdWVzdENsb3NlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgdGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGNsYXNzTmFtZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25VcGRhdGVDbGljayxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25DYW5jZWxDbGlja1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfSApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0QnV0dG9uLFxyXG5cdFx0QnV0dG9uR3JvdXAsXHJcblx0XHRNb2RhbCxcclxuXHR9ID0gd3AuY29tcG9uZW50cztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU3RhdGUsXHJcblx0XHR1c2VFZmZlY3RcclxuXHR9ID0gd3AuZWxlbWVudDtcclxuXHJcblx0Y29uc3QgbW9kYWxDbGFzc2VzID0gWyAnamV0LWZvcm0tZWRpdC1tb2RhbCcsIC4uLmNsYXNzTmFtZXMgXS5qb2luKCAnICcgKTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25DbGljaywgc2V0QWN0aW9uQ2xpY2sgXSA9IHVzZVN0YXRlKCBudWxsICk7XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBvblVwZGF0ZUNsaWNrICkge1xyXG5cdFx0XHRvblVwZGF0ZUNsaWNrKCk7XHJcblx0XHR9XHJcblx0XHRzZXRBY3Rpb25DbGljayggdHJ1ZSApXHJcblx0fVxyXG5cdGNvbnN0IGNhbmNlbENsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBvbkNhbmNlbENsaWNrICkge1xyXG5cdFx0XHRvbkNhbmNlbENsaWNrKCk7XHJcblx0XHR9XHJcblx0XHRzZXRBY3Rpb25DbGljayggZmFsc2UgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8TW9kYWxcclxuXHRcdG9uUmVxdWVzdENsb3NlPXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgbW9kYWxDbGFzc2VzIH1cclxuXHRcdHRpdGxlPXsgdGl0bGUgfVxyXG5cdD5cclxuXHRcdHsgISBjaGlsZHJlbiAmJiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7ICdBY3Rpb24gY2FsbGJhY2sgaXMgbm90IGZvdW5kLicgfVxyXG5cdFx0PC9kaXY+IH1cclxuXHRcdHsgY2hpbGRyZW4gJiYgPGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCI+XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSB9XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEJ1dHRvbkdyb3VwXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fYWN0aW9uc1wiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XHJcblx0XHRcdFx0PlVwZGF0ZTwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAnMCAwIDAgMTBweCdcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b25DbGljaz17IGNhbmNlbENsaWNrIH1cclxuXHRcdFx0XHQ+Q2FuY2VsPC9CdXR0b24+XHJcblx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHQ8L2Rpdj4gfVxyXG5cdDwvTW9kYWw+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25Nb2RhbDsiLCJmdW5jdGlvbiBQbGFjZWhvbGRlck1lc3NhZ2UoIHsgc3R5bGUsIGNoaWxkcmVuIH0gKSB7XHJcblx0Y29uc3QgcHJvcFN0eWxlID0ge1xyXG5cdFx0Zm9udFNpemU6ICcxLjVlbScsXHJcblx0XHRwYWRkaW5nOiAnMmVtJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdhbGljZWJsdWUnLFxyXG5cdFx0Li4uc3R5bGVcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPHAgc3R5bGU9eyBwcm9wU3R5bGUgfT57IGNoaWxkcmVuIH08L3A+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlck1lc3NhZ2U7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xzU2V0dGluZ3MgPSAoKSA9PiBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzLmNvbnRyb2xzJywge1xyXG5cdFwiZ2VuZXJhbFwiOiAge1xyXG5cdFx0bGFiZWw6IF9fKCAnR2VuZXJhbCcgKSxcclxuXHRcdGF0dHJzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwibGFiZWxcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiRmllbGQgTGFiZWxcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcIm5hbWVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiRm9ybSBmaWVsZCBuYW1lXCIgKSxcclxuXHRcdFx0XHRcImhlbHBcIjogICAgIF9fKCBcIlNob3VsZCBjb250YWluIG9ubHkgTGF0aW4gbGV0dGVycywgbnVtYmVycywgYC1gIG9yIGBfYCBjaGFycywgbm8gc3BhY2VzIG9ubHkgbG93ZXIgY2FzZVwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVzY1wiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJGaWVsZCBEZXNjcmlwdGlvblwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVmYXVsdFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJkeW5hbWljX3RleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6ICAgIF9fKCBcIkRlZmF1bHQgVmFsdWVcIiApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFwidG9vbGJhclwiOiAge1xyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0b2dnbGVcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6ICAgIF9fKCBcIklzIFJlcXVpcmVkXCIgKSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRcImFkdmFuY2VkXCI6IHtcclxuXHRcdGxhYmVsOiBfXyggJ0FkdmFuY2VkJyApLFxyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJwbGFjZWhvbGRlclwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJQbGFjZWhvbGRlclwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiYWRkX3ByZXZcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidG9nZ2xlXCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJBZGQgUHJldiBQYWdlIEJ1dHRvblwiICksXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6ICBcInByZXZfbGFiZWxcIixcclxuXHRcdFx0XHRcInR5cGVcIjogICAgICBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6ICAgICBfXyggXCJQcmV2IFBhZ2UgQnV0dG9uIExhYmVsXCIgKSxcclxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImFkZF9wcmV2XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwidmlzaWJpbGl0eVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiRmllbGQgVmlzaWJpbGl0eVwiICksXHJcblx0XHRcdFx0XCJ0eXBlXCI6ICAgICBcInNlbGVjdFwiLFxyXG5cdFx0XHRcdFwib3B0aW9uc1wiOiAgW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRm9yIGFsbFwiICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwibG9nZ2VkX2lkXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgbG9nZ2VkIGluIHVzZXJzXCIgKSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJub3RfbG9nZ2VkX2luXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgTk9ULWxvZ2dlZCBpbiB1c2Vyc1wiICksXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiY2xhc3NfbmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJDU1MgQ2xhc3MgTmFtZVwiICksXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn0gKSIsImltcG9ydCB7IENvbnRyb2xzU2V0dGluZ3MgfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuLi9wcmVzZXRzL2R5bmFtaWMtcHJlc2V0XCI7XHJcbmltcG9ydCBIb3Jpem9udGFsTGluZSBmcm9tICcuLi9ob3Jpem9udGFsLWxpbmUnO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBCbG9ja0NvbnRyb2xzLFxyXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFRleHRDb250cm9sLFxyXG5cdFx0ICBTZWxlY3RDb250cm9sLFxyXG5cdFx0ICBQYW5lbEJvZHksXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0XHQgIFRvb2xiYXJHcm91cCxcclxuXHRcdCAgRmxleCxcclxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gRmllbGRDb250cm9sKCB7XHJcblx0XHRcdFx0XHRcdCAgIHR5cGUsXHJcblx0XHRcdFx0XHRcdCAgIHNldEF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRcdCAgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRcdCAgIGF0dHJzU2V0dGluZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0ICAgZWRpdFByb3BzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBhdHRySGVscCA9ICgpID0+ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgYmxvY2tOYW1lID0gJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdCAgIH0gKSB7XHJcblx0Y29uc3QgY29udHJvbHMgPSBDb250cm9sc1NldHRpbmdzKCk7XHJcblxyXG5cdGlmICggISBjb250cm9sc1sgdHlwZSBdICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IGNvbnRyb2xzWyB0eXBlIF07XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsga2V5IF06IHZhbHVlIH0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpc1ZhbGlkQ29uZGl0aW9uID0gKCBhdHRyICkgPT4ge1xyXG5cdFx0aWYgKCAhIGF0dHIuY29uZGl0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGJsb2NrTmFtZSAmJiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XHJcblx0XHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgJiYgYmxvY2tOYW1lICE9PSBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWVcclxuXHRcdFx0XHQmJiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUubGVuZ3RoXHJcblx0XHRcdFx0JiYgISBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUuaW5jbHVkZXMoIGJsb2NrTmFtZSApXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKFxyXG5cdFx0XHQoIGF0dHIuY29uZGl0aW9uLmF0dHIgJiYgISBhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbi5hdHRyIF0gKVxyXG5cdFx0XHR8fCAoICdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24gJiYgISBhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbiBdIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGN1cnJlbnRDb250cm9sLmF0dHJzLm1hcCggKCB7IGhlbHAgPSAnJywgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaXNSZWdpc3RlckF0dHJpYnV0ZSA9ICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApO1xyXG5cdFx0Y29uc3QgdmFsaWRDb25kaXRpb24gPSBpc1ZhbGlkQ29uZGl0aW9uKCBhdHRyICk7XHJcblx0XHRjb25zdCBpc0hpZGRlbiA9IChcclxuXHRcdFx0YXR0ck5hbWUgaW4gYXR0cnNTZXR0aW5nc1xyXG5cdFx0XHQmJiAnc2hvdycgaW4gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXVxyXG5cdFx0XHQmJiBmYWxzZSA9PT0gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXS5zaG93XHJcblx0XHQpO1xyXG5cclxuXHRcdGlmICggISBpc1JlZ2lzdGVyQXR0cmlidXRlIHx8ICEgdmFsaWRDb25kaXRpb24gfHwgaXNIaWRkZW4gKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCAoIGF0dHIudHlwZSApIHtcclxuXHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPjtcclxuXHRcdFx0Y2FzZSAnZHluYW1pY190ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gPEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tRmllbGRXaXRoUHJlc2V0YCB9XHJcblx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVGV4dENvbnRyb2xEeW5hbWljYCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PjtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVNlbGVjdENvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfHwgYXR0ckhlbHAoIGF0dHJOYW1lICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBhdHRyLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+O1xyXG5cdFx0XHRjYXNlICd0b2dnbGUnOlxyXG5cdFx0XHRcdHJldHVybiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tVG9nZ2xlQ29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz47XHJcblx0XHR9XHJcblxyXG5cdH0gKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdlbmVyYWxGaWVsZHMoIHByb3BzICkge1xyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gQ29udHJvbHNTZXR0aW5ncygpLmdlbmVyYWw7XHJcblxyXG5cdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgY3VycmVudENvbnRyb2wubGFiZWwgfSBrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMnIH0+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2dlbmVyYWwnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdjdXN0b21fZ2VuZXJhbCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtY3VzdG9tLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdDwvUGFuZWxCb2R5PjtcclxufVxyXG5cclxuZnVuY3Rpb24gQWR2YW5jZWRGaWVsZHMoIHByb3BzICkge1xyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gQ29udHJvbHNTZXR0aW5ncygpLmFkdmFuY2VkO1xyXG5cclxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcycgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2FkdmFuY2VkJ1xyXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tYWR2YW5jZWQtZmllbGRzLWNvbXBvbmVudCcgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2N1c3RvbV9hZHZhbmNlZCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWN1c3RvbS1maWVsZHMtY29tcG9uZW50JyB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHQ8L1BhbmVsQm9keT47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRvb2xCYXJGaWVsZHMoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7IGVkaXRQcm9wczogeyB1bmlxS2V5IH0sIGNoaWxkcmVuID0gW10gfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gPEJsb2NrQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0PFRvb2xiYXJHcm91cCBrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1Ub29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0PEZsZXhcclxuXHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cclxuXHRcdFx0XHRqdXN0aWZ5PXsgJ2NlbnRlcicgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS10b2dnbGUtYm94JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdFx0XHR0eXBlPSd0b29sYmFyJ1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2pldC1mb3JtLXRvb2xiYXItZmllbGRzLWNvbXBvbmVudCcgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHQ8L1Rvb2xiYXJHcm91cD5cclxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkcyxcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRGaWVsZENvbnRyb2wsXHJcbn07IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi9hY3Rpb24tbW9kYWxcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRQYXRoLFxyXG5cdFNWRyxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gRmllbGRXaXRoUHJlc2V0KCB7XHJcblx0XHRcdFx0XHRcdFx0ICBjaGlsZHJlbiA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0ICBNb2RhbEVkaXRvcixcclxuXHRcdFx0XHRcdFx0XHQgIHRyaWdnZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0Y29uc3QgWyBtb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlTW9kYWxTdGF0ZSA9ICgpID0+IHtcclxuXHRcdHNldE1vZGFsU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XHJcblx0fTtcclxuXHRjb25zdCBjbGFzc05hbWVzID0gWyAnamV0LWZvcm0tZHluYW1pYy1wcmVzZXRfX3RyaWdnZXInLCAuLi50cmlnZ2VyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZHluYW1pYy1wcmVzZXRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cclxuXHRcdFx0PjxTVkcgdmlld0JveD1cIjAgMCA1NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoXHJcblx0XHRcdFx0ZD1cIk00Mi42Mzk2IDI2LjQzNDdDMzcuODY4MiAyNy4zNDM2IDMyLjU2NjYgMjguMDI1MiAyNy4xODk0IDI4LjAyNTJDMjEuODEyMSAyOC4wMjUyIDE2LjQzNDggMjcuMzQzNiAxMS43MzkxIDI2LjQzNDdDNi45Njc3NCAyNS40NTAyIDMuMTgwOTMgMjMuODU5NyAwLjM3ODY4IDIxLjk2NjNMMC4zNzg2OCAyOC4wMjUyQzAuMzc4NjggMjkuNTM5OSAxLjU5MDQ2IDMxLjEzMDQgMy43ODY4MiAzMi40MTc5QzUuOTgzMTcgMzMuNzA1NCA5LjQ2NzA0IDM0LjkxNzIgMTMuNjMyNSAzNS41OTg4QzE3Ljc5OCAzNi4yODA1IDIyLjExNSAzNi44MTA2IDI3LjE4OTQgMzYuODEwNkMzMi4yNjM3IDM2LjgxMDYgMzYuNjU2NCAzNi41MDc3IDQwLjc0NjIgMzUuNTk4OEM0NC44MzU5IDM0LjY5IDQ4LjMxOTggMzMuNzA1NCA1MC41MTYyIDMyLjQxNzlDNTIuNzEyNSAzMS4xMzA0IDU0IDI5LjUzOTkgNTQgMjguMDI1Mkw1NCAyMS45NjYzQzUxLjEyMiAyMy44NTk3IDQ3LjMzNTIgMjUuNDUwMiA0Mi42Mzk2IDI2LjQzNDdaTTQyLjYzOTYgNTMuNTQ4NEMzNy44NjgyIDU0LjUzMjkgMzIuNTY2NiA1NS4xMzg4IDI3LjE4OTQgNTUuMTM4OEMyMS44MTIxIDU1LjEzODggMTYuNDM0OCA1NC41MzI5IDExLjczOTEgNTMuNTQ4NEM3LjA0MzQ4IDUyLjU2MzggMy4xODA5MyA1MS4wNDkxIDAuMzc4NjgyIDQ5LjE1NTZMMC4zNzg2ODIgNTUuMTM4OEMwLjM3ODY4MyA1Ni43MjkzIDEuNTkwNDYgNTguMzE5NyAzLjc4NjgyIDU5LjUzMTVDNi4zNjE4NiA2MC44MTkgOS40NjcwNSA2Mi4xMDY2IDEzLjYzMjUgNjIuNzEyNUMxNy43MjIzIDYzLjY5NyAyMi4xMTUgNjQgMjcuMTg5NCA2NEMzMi4yNjM3IDY0IDM2LjY1NjQgNjMuNjk3IDQwLjc0NjIgNjIuNzEyNUM0NC44MzU5IDYxLjgwMzYgNDguMzE5OCA2MC44MTkgNTAuNTE2MiA1OS41MzE1QzUyLjcxMjUgNTcuOTQxMSA1NCA1Ni43MjkzIDU0IDU0LjgzNTlMNTQgNDguODUyN0M1MS4xMjIgNTEuMDQ5MSA0Ny4zMzUyIDUyLjI2MDggNDIuNjM5NiA1My41NDg0Wk00Mi42Mzk2IDM5Ljk5MTVDMzcuODY4MiA0MC45MDA0IDMyLjU2NjYgNDEuNTgyIDI3LjE4OTQgNDEuNTgyQzIxLjgxMjEgNDEuNTgyIDE2LjQzNDggNDAuOTAwNCAxMS43MzkxIDM5Ljk5MTVDNi45Njc3NCAzOS4wMDcgMy4xODA5MyAzNy40OTIyIDAuMzc4NjgxIDM1LjU5ODhMMC4zNzg2ODEgNDEuNTgyQzAuMzc4NjgxIDQzLjE3MjUgMS41OTA0NiA0NC42ODcyIDMuNzg2ODIgNDUuOTc0N0M2LjM2MTg1IDQ3LjI2MjIgOS40NjcwNSA0OC40NzQgMTMuNjMyNSA0OS4xNTU2QzE3LjcyMjMgNTAuMDY0NSAyMi4xMTUgNTAuMzY3NCAyNy4xODk0IDUwLjM2NzRDMzIuMjYzNyA1MC4zNjc0IDM2LjY1NjQgNTAuMDY0NSA0MC43NDYyIDQ5LjE1NTZDNDQuODM1OSA0OC4xNzExIDQ4LjMxOTggNDcuMjYyMiA1MC41MTYyIDQ1Ljk3NDdDNTIuNzEyNSA0NC4zODQzIDU0IDQzLjE3MjUgNTQgNDEuNTgyTDU0IDM1LjU5ODhDNTEuMTIyIDM3LjQ5MjIgNDcuMzM1MiAzOS4wMDcgNDIuNjM5NiAzOS45OTE1Wk00MC40NDMyIDIuMTIzMzdDMzYuMzUzNSAxLjEzODc5IDMxLjg4NSAwLjgzNTg0OCAyNi44ODY0IDAuODM1ODQ5QzIxLjg4NzggMC44MzU4NDkgMTcuNDE5NCAxLjEzODc5IDEzLjI1MzkgMi4xMjMzN0M5LjA4ODM2IDMuMTA3OTQgNS42ODAyMiA0LjAxNjc4IDMuNDgzODcgNS4zMDQzQzEuMjg3NTEgNi41OTE4MSAtMy40NzgyZS0wNiA4LjEwNjU0IC0zLjMzOTE2ZS0wNiA5LjY5N0wtMi45NTUxM2UtMDYgMTQuMDg5N0MtMi44MTYwOWUtMDYgMTUuNjgwMiAxLjI4NzUyIDE3LjI3MDYgMy40ODM4NyAxOC41NTgyQzYuMDU4OTEgMTkuNzY5OSA5LjE2NDEgMjEuMDU3NSAxMy4yNTM5IDIxLjY2MzNDMTcuMzQzNiAyMi4yNjkyIDIxLjgxMjEgMjIuOTUwOSAyNi44ODY0IDIyLjk1MDlDMzEuOTYwNyAyMi45NTA5IDM2LjM1MzUgMjIuOTUwOSA0MC40NDMyIDIyLjM0NUM0NC41MzMgMjEuNzM5MSA0OC4wMTY5IDIwLjQ1MTYgNTAuMjEzMiAxOS4xNjRDNTIuNzEyNSAxNy41NzM2IDU0IDE1Ljk4MzEgNTQgMTQuMzkyN0w1NCA5Ljk5OTk1QzU0IDguNDA5NDggNTIuNzEyNSA2LjgxOTAyIDUwLjUxNjIgNS42MDcyNEM0OC4zMTk4IDQuMzk1NDYgNDQuNTMzIDIuNzI5MjYgNDAuNDQzMiAyLjEyMzM3WlwiXHJcblx0XHRcdFx0ZmlsbD1cIiM3RTg5OTNcIi8+PC9TVkc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHR7IG1vZGFsU3RhdGUgJiYgKFxyXG5cdFx0XHQ8QWN0aW9uTW9kYWxcclxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNoYW5nZU1vZGFsU3RhdGUgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdFx0dGl0bGU9eyAnRWRpdCBQcmVzZXQnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgbW9kYWxQcm9wcyA9PiA8TW9kYWxFZGl0b3JcclxuXHRcdFx0XHRcdHsgLi4ubW9kYWxQcm9wcyB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L0FjdGlvbk1vZGFsPlxyXG5cdFx0KSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdpdGhQcmVzZXQ7IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi8uLi9oZWxwZXJzL3Rvb2xzXCI7XHJcblxyXG5mdW5jdGlvbiBGaWVsZFdyYXBwZXIoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB3cmFwQ2xhc3NlcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdmFsdWVJZkVtcHR5TGFiZWwgPSAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIH0gKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0QmFzZUNvbnRyb2wsXHJcblx0fSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVNlbGVjdCxcclxuXHR9ID0gd3AuZGF0YTtcclxuXHJcblx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XHJcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0fSApO1xyXG5cclxuXHRjb25zdCBsYWJlbCA9IFRvb2xzLmdldExhYmVsKCBtZXRhLCBhdHRyaWJ1dGVzICk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8QmFzZUNvbnRyb2wga2V5PXsgdW5pcUtleSggJ3BsYWNlSG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdCBjbGFzc05hbWU9eyBgamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBqZXQtZm9ybS1idWlsZGVyLXJvdyAkeyB3cmFwQ2xhc3Nlcy5qb2luKCAnICcgKSB9YCB9PlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fbGFiZWwnIH0+XHJcblx0XHRcdFx0XHR7IGxhYmVsLm5hbWUgPyBsYWJlbC5uYW1lIDogdmFsdWVJZkVtcHR5TGFiZWwgfVxyXG5cdFx0XHRcdFx0eyBhdHRyaWJ1dGVzLnJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXF1aXJlZCcgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbC5tYXJrID8gbGFiZWwubWFyayA6ICcqJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XHJcblx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8QmFzZUNvbnRyb2wga2V5PXsgJ2N1c3RvbV9oZWxwX2Rlc2NyaXB0aW9uJyB9IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19kZXNjJyB9PlxyXG5cdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cclxuXHRcdFx0XHRcdCAgIHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwcHgnIH0gfT57IGF0dHJpYnV0ZXMuZGVzYyB9PC9zbWFsbD5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRXcmFwcGVyOyIsImNvbnN0IHtcclxuXHRCdXR0b24sXHJcblx0UG9wb3ZlcixcclxuXHRQYW5lbEJvZHksXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIE1hY3Jvc0luc2VydGVyKCB7XHJcblx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdCBmaWVsZHMsXHJcblx0XHRcdFx0XHRcdFx0IG9uRmllbGRDbGljayxcclxuXHRcdFx0XHRcdFx0XHQgY3VzdG9tTWFjcm9zLFxyXG5cdFx0XHRcdFx0XHQgfSApIHtcclxuXHJcblx0Y29uc3QgWyBzaG93UG9wb3Zlciwgc2V0UG9wb3ZlclN0YXRlIF0gPSB1c2VTdGF0ZSggKCkgPT4gZmFsc2UgKTtcclxuXHJcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtaW5zZXJ0ZXJcIj5cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0aXNUZXJ0aWFyeVxyXG5cdFx0XHRpc1NtYWxsXHJcblx0XHRcdGljb249eyBzaG93UG9wb3ZlciA/ICduby1hbHQnIDogJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdGxhYmVsPXsgJ0luc2VydCBtYWNyb3MnIH1cclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3MtdHJpZ2dlclwiXHJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0c2V0UG9wb3ZlclN0YXRlKCBwcmV2ID0+ICEgcHJldiApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7IHNob3dQb3BvdmVyICYmIChcclxuXHRcdFx0PFBvcG92ZXJcclxuXHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBmaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XHJcblx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoIGZpZWxkID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXsgJ2ZpZWxkXycgKyBmaWVsZC5uYW1lIH0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIGZpZWxkLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0PnsgJyUnICsgZmllbGQubmFtZSArICclJyB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cclxuXHRcdFx0XHR7IGN1c3RvbU1hY3JvcyAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0N1c3RvbSBNYWNyb3MnIH0+XHJcblx0XHRcdFx0XHR7IGN1c3RvbU1hY3Jvcy5tYXAoIG1hY3JvcyA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdtYWNyb3NfJyArIG1hY3JvcyB9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBtYWNyb3MgKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0PnsgJyUnICsgbWFjcm9zICsgJyUnIH08L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxyXG5cdFx0XHQ8L1BvcG92ZXI+XHJcblx0XHQpIH1cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hY3Jvc0luc2VydGVyOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdEJ1dHRvbkdyb3VwLFxyXG5cdENhcmQsXHJcblx0Q2FyZEJvZHksXHJcblx0Q2FyZEhlYWRlcixcclxuXHRUb2dnbGVDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cclxuZnVuY3Rpb24gUmVwZWF0ZXJXaXRoU3RhdGUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0SXRlbUhlYWRpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdHJlcGVhdGVySXRlbUNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdG5ld0l0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbCA9ICdBZGQgTmV3JyxcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtcyxcclxuXHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uQWRkTmV3SXRlbSxcclxuXHRcdFx0XHRcdFx0XHRcdG9uUmVtb3ZlSXRlbSxcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHAgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlbHBTb3VyY2U6IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogKCkgPT4gZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlbHBLZXk6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudCcsIC4uLnJlcGVhdGVyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cdGNvbnN0IGl0ZW1DbGFzc05hbWVzID0gWyAnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50LWl0ZW0nLCAuLi5yZXBlYXRlckl0ZW1DbGFzc2VzIF0uam9pbiggJyAnICk7XHJcblxyXG5cdGNvbnN0IHBhcnNlZEl0ZW1zID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRjb25zdCBjbG9uZUl0ZW1zID0gWyAuLi5pdGVtcyBdO1xyXG5cclxuXHRcdFx0Y2xvbmVJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLl9fdmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gY2xvbmVJdGVtcztcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gWyB7XHJcblx0XHRcdFx0Li4ubmV3SXRlbSxcclxuXHRcdFx0XHRfX3Zpc2libGU6IHRydWUsXHJcblx0XHRcdH0gXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IFsgaXRlbXNEYXRhLCBzZXRJdGVtc0RhdGEgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZWRJdGVtcygpICk7XHJcblxyXG5cdGNvbnN0IFsgaXNTYWZlRGVsZXRpbmcsIHNldFNhZmVEZWxldGluZyBdID0gdXNlU3RhdGUoIHRydWUgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlQ3VycmVudEl0ZW0gPSAoIHZhbHVlVG9TZXQsIGluZGV4ICkgPT4ge1xyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0cHJldlsgaW5kZXggXSA9IHtcclxuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxyXG5cdFx0XHRcdC4uLnZhbHVlVG9TZXQsXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiBbIC4uLnByZXYgXTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblNhdmVEZWxldGluZyA9IGluZGV4ID0+IHtcclxuXHRcdHJldHVybiBjb25maXJtKCBfXyggYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgaXRlbSAkeyBpbmRleCArIDEgfT9gLCAnamV0LWZvcm0tYnVpbGRlcicgKSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVtb3ZlT3B0aW9uID0gKCBpbmRleCApID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0aXNTYWZlRGVsZXRpbmcgJiYgISBvblNhdmVEZWxldGluZyggaW5kZXggKSB8fFxyXG5cdFx0XHRvblJlbW92ZUl0ZW0gJiYgISBvblJlbW92ZUl0ZW0oIGluZGV4LCBpdGVtc0RhdGEgKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRjb25zdCBjbG9uZVByZXYgPSBbIC4uLnByZXYgXTtcclxuXHRcdFx0Y2xvbmVQcmV2LnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHJcblx0XHRcdHJldHVybiBjbG9uZVByZXY7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBhZGROZXdJdGVtID0gKCB2YWx1ZSApID0+IHtcclxuXHRcdGlmICggb25BZGROZXdJdGVtICkge1xyXG5cdFx0XHRvbkFkZE5ld0l0ZW0oIHZhbHVlLCBpdGVtc0RhdGEgKTtcclxuXHRcdH1cclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiBbIC4uLnByZXYsIHtcclxuXHRcdFx0Li4udmFsdWUsXHJcblx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcclxuXHRcdH0gXSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xvbmVJdGVtID0gKCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IFsgYmVmb3JlLCBhZnRlciBdID0gWyBwcmV2LnNsaWNlKCAwLCBpbmRleCArIDEgKSwgcHJldi5zbGljZSggaW5kZXggKyAxICkgXTtcclxuXHRcdFx0cmV0dXJuIFsgLi4uYmVmb3JlLCBsb2Rhc2guYXNzaWduKCB7fSwgcHJldlsgaW5kZXggXSApLCAuLi5hZnRlciBdO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW92ZVJlcGVhdGVySXRlbSA9ICggeyBvbGRJbmRleCwgbmV3SW5kZXggfSApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdFsgcHJldlsgbmV3SW5kZXggXSwgcHJldlsgb2xkSW5kZXggXSBdID0gWyBwcmV2WyBvbGRJbmRleCBdLCBwcmV2WyBuZXdJbmRleCBdIF07XHJcblx0XHRcdHJldHVybiBbIC4uLnByZXYgXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdmVVcCA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4IC0gMSB9ICk7XHJcblx0fVxyXG5cdGNvbnN0IG1vdmVEb3duID0gKCBpbmRleCApID0+IHtcclxuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggKyAxIH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlzRGlzYWJsZWRFbmQgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0cmV0dXJuICEgKCBpbmRleCA8IGl0ZW1zRGF0YS5sZW5ndGggLSAxICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b2dnbGVWaXNpYmxlID0gKCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdHByZXZbIGluZGV4IF0uX192aXNpYmxlID0gISAoIHByZXZbIGluZGV4IF0uX192aXNpYmxlICk7XHJcblx0XHRcdHJldHVybiBbIC4uLnByZXYgXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGNvbnN0IGNsb25lSXRlbXMgPSBbIC4uLml0ZW1zRGF0YSBdO1xyXG5cclxuXHRcdFx0aWYgKCBvblNhdmVJdGVtcyApIHtcclxuXHRcdFx0XHRjbG9uZUl0ZW1zLmZvckVhY2goICggaXRlbSwgaW5kZXggKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggY29uc3QgaXRlbUtleSBpbiBpdGVtICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIGl0ZW1LZXkuc3RhcnRzV2l0aCggJ19fJyApICkge1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBjbG9uZUl0ZW1zWyBpbmRleCBdWyBpdGVtS2V5IF07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdG9uU2F2ZUl0ZW1zKCBjbG9uZUl0ZW1zICk7XHJcblx0XHRcdH1cclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggZmFsc2UgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblx0XHR9XHJcblx0fSwgWyBpc1NhdmVBY3Rpb24gXSApO1xyXG5cclxuXHRjb25zdCBnZXRSZXBlYXRlckl0ZW1JZCA9IGluZGV4ID0+IGBqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtXyR7IGluZGV4IH1gO1xyXG5cclxuXHJcblx0Y29uc3QgUmVwZWF0ZXJJdGVtID0gKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICkgPT4gPENhcmRcclxuXHRcdGlzRWxldmF0ZWQ9eyB0cnVlIH1cclxuXHRcdGNsYXNzTmFtZT17IGl0ZW1DbGFzc05hbWVzIH1cclxuXHRcdGtleT17IGdldFJlcGVhdGVySXRlbUlkKCBpbmRleCApIH1cclxuXHRcdGlkPXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxyXG5cdD5cclxuXHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbV9fbGVmdC1oZWFkaW5nJz5cclxuXHRcdFx0XHQ8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b25zJyB9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGljb249eyBjdXJyZW50SXRlbS5fX3Zpc2libGUgPyAndmlzaWJpbGl0eScgOiAnaGlkZGVuJyB9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0b2dnbGVWaXNpYmxlKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhIEJvb2xlYW4oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LXVwLWFsdDInIH1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVVcCggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsgaXNEaXNhYmxlZEVuZCggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctZG93bi1hbHQyJyB9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlRG93biggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW0tdGl0bGUnIH0+XHJcblx0XHRcdFx0XHRcdFx0eyBJdGVtSGVhZGluZyAmJiA8SXRlbUhlYWRpbmdcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIGRhdGEsIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdHsgISBJdGVtSGVhZGluZyAmJiBgIyR7IGluZGV4ICsgMSB9YCB9XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxCdXR0b25Hcm91cD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGNsb25lSXRlbSggaW5kZXggKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ0Nsb25lJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0PC9DYXJkSGVhZGVyPlxyXG5cdFx0eyBjdXJyZW50SXRlbS5fX3Zpc2libGUgJiYgPENhcmRCb2R5XHJcblx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtX19jb250ZW50JyB9XHJcblx0XHQ+XHJcblx0XHRcdHsgY2hpbGRyZW4gJiYgPFJlYWN0LkZyYWdtZW50XHJcblx0XHRcdFx0a2V5PXsgYHJlcGVhdGVyLWNvbXBvbmVudF9faXRlbV8keyBpbmRleCB9YCB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbigge1xyXG5cdFx0XHRcdFx0Y3VycmVudEl0ZW0sXHJcblx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbTogZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKVxyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblx0XHRcdHsgISBjaGlsZHJlbiAmJiAnU2V0IHVwIHlvdXIgUmVwZWF0ZXIgVGVtcGxhdGUsIHBsZWFzZS4nIH1cclxuXHRcdDwvQ2FyZEJvZHk+IH1cclxuXHQ8L0NhcmQ+O1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRoZWxwU291cmNlLFxyXG5cdFx0aGVscFZpc2libGUsXHJcblx0XHRoZWxwS2V5LFxyXG5cdH0gPSBoZWxwO1xyXG5cclxuXHRjb25zdCBpc1Zpc2libGVIZWxwID0gaGVscFZpc2libGUoIGl0ZW1zRGF0YSApICYmIGhlbHBTb3VyY2UgJiYgaGVscFNvdXJjZVsgaGVscEtleSBdO1xyXG5cclxuXHRyZXR1cm4gPGRpdlxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lcyB9XHJcblx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicgfVxyXG5cdD5cclxuXHRcdHsgaXNWaXNpYmxlSGVscCAmJiA8cD57IGhlbHBTb3VyY2VbIGhlbHBLZXkgXS5sYWJlbCB9PC9wPiB9XHJcblxyXG5cdFx0eyAwIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cclxuXHRcdC8+IH1cclxuXHRcdHsgaXRlbXNEYXRhLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdHJldHVybiBSZXBlYXRlckl0ZW0oIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKTtcclxuXHRcdH0gKSB9XHJcblx0XHR7IDEgPCBpdGVtc0RhdGEubGVuZ3RoICYmIDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXInXHJcblx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxyXG5cdFx0Lz4gfVxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gYWRkTmV3SXRlbSggbmV3SXRlbSApIH1cclxuXHRcdD5cclxuXHRcdFx0eyBhZGROZXdCdXR0b25MYWJlbCB9XHJcblx0XHQ8L0J1dHRvbj5cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyV2l0aFN0YXRlOyIsImZ1bmN0aW9uIEhvcml6b250YWxMaW5lKCBwcm9wcyApIHtcclxuXHRyZXR1cm4gPGhyIHN0eWxlPXsgeyAuLi5wcm9wcyB9IH0vPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbExpbmU7IiwiaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vcHJlc2V0LWVkaXRvclwiO1xyXG5pbXBvcnQge1xyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdE1hcEZpZWxkXHJcbn0gZnJvbSBcIi4vcHJlc2V0LXJlbmRlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRwYXJzZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IHBvc2l0aW9uID0gJ2R5bmFtaWMnO1xyXG5cdGNvbnN0IFsgc3RhdGVWYWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZVZhbHVlKCB2YWx1ZSApICk7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xyXG5cdFx0c2V0VmFsdWUoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICkgKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGlmICggb25TYXZlUHJlc2V0ICkge1xyXG5cdFx0XHRcdG9uU2F2ZVByZXNldCggSlNPTi5zdHJpbmdpZnkoIHN0YXRlVmFsdWUgKSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPEdsb2JhbEZpZWxkXHJcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8TWFwRmllbGRcclxuXHRcdFx0a2V5PXsgYGN1cnJlbnRfZmllbGRfJHsgZGF0YS5uYW1lIH1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRjdXJyZW50U3RhdGU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0ZGF0YT17IGRhdGEgfVxyXG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxyXG5cdFx0Lz4gKSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0KCBEeW5hbWljUHJlc2V0ICk7IiwiZnVuY3Rpb24gd2l0aFByZXNldCggV3JhcHBlZENvbXBvbmVudCApIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VWYWx1ZSA9ICgpID0+IHtcclxuXHRcdFx0bGV0IHZhbCA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xyXG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggcHJvcHMudmFsdWUgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dmFsID0gSlNPTi5wYXJzZSggcHJvcHMudmFsdWUgKTtcclxuXHRcdFx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWwgKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKCBleGNlcHRpb24gKSB7XHJcblx0XHRcdFx0XHR2YWwgPSB7fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dmFsLmpldF9wcmVzZXQgPSB0cnVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc1Zpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblx0XHRcdHJldHVybiAoICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiA9PT0gZGF0YS5wb3NpdGlvbiApXHJcblx0XHRcdFx0fHwgISBkYXRhLnBvc2l0aW9uIHx8ICdxdWVyeV92YXInICE9PSBjdXJyZW50U3RhdGUuZnJvbSApICYmIGlzR2xvYmFsVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGlzR2xvYmFsVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhICkgPT4ge1xyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0KCAncG9zdCcgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUucG9zdF9mcm9tIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoICd1c2VyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS51c2VyX2Zyb20gKVxyXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tIClcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlzQ3VycmVudEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBwb3NpdGlvbiApID0+IHtcclxuXHJcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gIT09IGRhdGEucG9zaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiAhIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlzTWFwRmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIGZpZWxkICkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiAhIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF1bIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdGlmICggISBjdXJyZW50U3RhdGUuZmllbGRzX21hcCB8fCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGV4Y2x1ZGVPcHRpb25zID0gKCBzZWxlY3RPcHRpb25zICkgPT4ge1xyXG5cdFx0XHRjb25zdCBvcHRpb25zID0gWyAuLi5zZWxlY3RPcHRpb25zIF07XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdGlmICggcHJvcHMuZXhjbHVkZVNvdXJjZXMgJiYgcHJvcHMuZXhjbHVkZVNvdXJjZXMuaW5jbHVkZXMoIG9wdGlvbi52YWx1ZSApICkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHRcdHJldHVybiBvcHRpb25zO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gPFdyYXBwZWRDb21wb25lbnRcclxuXHRcdFx0a2V5PSd3cmFwcGVkLXByZXNldC1lZGl0b3InXHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRwYXJzZVZhbHVlPXsgcGFyc2VWYWx1ZSB9XHJcblx0XHRcdGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XHJcblx0XHRcdGlzTWFwRmllbGRWaXNpYmxlPXsgaXNNYXBGaWVsZFZpc2libGUgfVxyXG5cdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGU9eyBpc0N1cnJlbnRGaWVsZFZpc2libGUgfVxyXG5cdFx0XHRleGNsdWRlT3B0aW9ucz17IGV4Y2x1ZGVPcHRpb25zIH1cclxuXHRcdC8+O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFByZXNldDtcclxuIiwiY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gR2xvYmFsRmllbGQoIHtcclxuXHRcdFx0XHRcdFx0XHRcdCBkYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0IGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0IG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHQgaXNWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0IGV4Y2x1ZGVPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdFx0IHBvc2l0aW9uXHJcblx0XHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdHJldHVybiAoIGlzVmlzaWJsZSggdmFsdWUsIGRhdGEsIHBvc2l0aW9uICkgJiZcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMoIGRhdGEub3B0aW9ucyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF2YWlsYWJsZU1hcEZpZWxkKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZmllbGQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgaXNNYXBGaWVsZFZpc2libGVcclxuXHRcdFx0XHRcdFx0XHRcdCAgIH0gKSB7XHJcblxyXG5cdGxldCBjdXJyZW50VmFsID0gbnVsbDtcclxuXHJcblx0aWYgKCAhIGZpZWxkc01hcCApIHtcclxuXHRcdGZpZWxkc01hcCA9IHt9O1xyXG5cdH1cclxuXHJcblx0Y3VycmVudFZhbCA9IGZpZWxkc01hcFsgZmllbGQgXTtcclxuXHJcblx0aWYgKCAhIGN1cnJlbnRWYWwgKSB7XHJcblx0XHRjdXJyZW50VmFsID0ge307XHJcblx0fVxyXG5cclxuXHRjb25zdCBBdmFpbGFibGVGaWVsZFdyYXBwZXIgPSAoIHsgZmllbGQsIG5hbWUsIGluZGV4LCBmSW5kZXgsIGNoaWxkcmVuIH0gKSA9PiA8PlxyXG5cdFx0PHNwYW4gY2xhc3NOYW1lPSdqZXQtbGFiZWwtb3ZlcmZsb3cnPnsgZmllbGQgfTwvc3Bhbj5cclxuXHRcdDxkaXZcclxuXHRcdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cclxuXHRcdD5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz47XHJcblxyXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXsgYG1hcF9maWVsZF9wcmVzZXRfJHsgZmllbGQgKyBpbmRleCB9YCB9PlxyXG5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcCggKCBkYXRhLCBmSW5kZXggKSA9PiB7XHJcblx0XHRcdGNvbnN0IHByb3BzID0geyBmaWVsZCwgbmFtZTogZGF0YS5uYW1lLCBpbmRleCwgZkluZGV4IH07XHJcblxyXG5cdFx0XHRjb25zdCB1bmlxS2V5ID0gJ2NvbnRyb2xfJyArIGZpZWxkICsgZGF0YS5uYW1lICsgaW5kZXggKyBmSW5kZXg7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9sYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdID0gbmV3VmFsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFsgZmllbGQgXTogY3VycmVudFZhbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSApIH1cclxuXHQ8L1JlYWN0LkZyYWdtZW50PjtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFwRmllbGQoIHtcclxuXHRcdFx0XHRcdFx0XHQgIGRhdGEsXHJcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHQgIGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdCAgY3VycmVudFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRcdCAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHQgIGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHQgIHBvc2l0aW9uID0gJ2dlbmVyYWwnXHJcblx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0c3dpdGNoICggZGF0YS50eXBlICkge1xyXG5cdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ2NvbnRyb2xfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ2NvbnRyb2xfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdEdsb2JhbEZpZWxkLFxyXG5cdEF2YWlsYWJsZU1hcEZpZWxkLFxyXG5cdE1hcEZpZWxkXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdEJ1dHRvbigge1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRvbkxvYWRpbmcgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSAnJyxcclxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbiA9ICgpID0+IHt9XHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGRlZmF1bHRWYWxpZGF0ZSA9ICgpID0+IHtcclxuXHRcdHJldHVybiBqUXVlcnkuYWpheCggeyB1cmw6IGFqYXh1cmwsIHR5cGU6ICdQT1NUJywgZGF0YTogYWpheEFyZ3MgfSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlcXVlc3QgPSAoKSA9PiB7XHJcblx0XHRvbkxvYWRpbmcoKTtcclxuXHJcblx0XHRkZWZhdWx0VmFsaWRhdGUoKVxyXG5cdFx0LmRvbmUoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnN1Y2Nlc3MgPyBvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApIDogb25GYWlsUmVxdWVzdCgpIClcclxuXHRcdC5mYWlsKCAoKSA9PiBvbkZhaWxSZXF1ZXN0KCkgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPEJ1dHRvblxyXG5cdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdGlzUHJpbWFyeVxyXG5cdFx0b25DbGljaz17IHJlcXVlc3QgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHR7IGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdHsgbGFiZWwgfVxyXG5cdDwvQnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzL2hvb2tzLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gUmVxdWVzdExvYWRpbmdCdXR0b24oIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgYWpheEFyZ3MgPSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uU3VjY2Vzc1JlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgIG9uRmFpbFJlcXVlc3QgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgICB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRMb2FkaW5nQ2xhc3MsXHJcblx0XHRjbGVhckxvYWRpbmdDbGFzc1xyXG5cdF0gPSB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzKCk7XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgcmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRjbGVhckxvYWRpbmdDbGFzcygpO1xyXG5cdFx0XHRvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApXHJcblx0XHR9IH1cclxuXHRcdG9uRmFpbFJlcXVlc3Q9eyAoKSA9PiB7XHJcblx0XHRcdGNsZWFyTG9hZGluZ0NsYXNzKCk7XHJcblx0XHRcdG9uRmFpbFJlcXVlc3QoKTtcclxuXHRcdH0gfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdExvYWRpbmdCdXR0b247IiwiaW1wb3J0IFJlcXVlc3RCdXR0b24gZnJvbSBcIi4vcmVxdWVzdC1idXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGVWYWxpZENsYXNzZXMgfSBmcm9tIFwiLi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFZhbGlkYXRlQnV0dG9uKCB7XHJcblx0XHRcdFx0XHRcdFx0IGluaXRpYWxWYWxpZCxcclxuXHRcdFx0XHRcdFx0XHQgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0IGFqYXhBcmdzID0ge30sXHJcblx0XHRcdFx0XHRcdFx0IG9uVmFsaWQgPSAoKSA9PiB7fSxcclxuXHRcdFx0XHRcdFx0XHQgb25JbnZhbGlkID0gKCkgPT4ge30sXHJcblx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRjb25zdCBbXHJcblx0XHRjbGFzc05hbWUsXHJcblx0XHRzZXRWYWxpZENsYXNzLFxyXG5cdFx0c2V0SW52YWxpZENsYXNzLFxyXG5cdFx0c2V0TG9hZGluZ0NsYXNzXHJcblx0XSA9IHVzZVN0YXRlVmFsaWRDbGFzc2VzKCBpbml0aWFsVmFsaWQgfHwgZmFsc2UgKTtcclxuXHJcblx0Y29uc3Qgc2V0VmFsaWQgPSByZXNwb25zZSA9PiB7XHJcblx0XHRzZXRWYWxpZENsYXNzKCk7XHJcblx0XHRvblZhbGlkKCByZXNwb25zZSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldEludmFsaWQgPSAoKSA9PiB7XHJcblx0XHRzZXRJbnZhbGlkQ2xhc3MoKTtcclxuXHRcdG9uSW52YWxpZCgpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxyXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XHJcblx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XHJcblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgc2V0VmFsaWQgfVxyXG5cdFx0b25GYWlsUmVxdWVzdD17IHNldEludmFsaWQgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cclxuXHQ+XHJcblx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0PC9SZXF1ZXN0QnV0dG9uPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVCdXR0b247IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsS2V5ID0gJ2xhYmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZEtleSA9ICdyZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHRjb25zdCBbIG5hbWUsIGRhdGEgXSA9IGZpZWxkO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3cgZmllbGRzLW1hcC1jb250cm9sXCJcclxuXHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgbmFtZSB9XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZpZWxkLW1hcF9fcm93LWxhYmVsXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX2xhYmVsJyB9PlxyXG5cdFx0XHRcdFx0eyAoIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgJiYgZGF0YVsgbGFiZWxLZXkgXSApICYmIGRhdGFbIGxhYmVsS2V5IF0gfVxyXG5cdFx0XHRcdFx0eyAoICEgZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKSApICYmIGRhdGEgfVxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggcmVxdWlyZWRLZXkgKSAmJiBkYXRhWyByZXF1aXJlZEtleSBdICkgJiZcclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fcmVxdWlyZWQnIH0+ICo8L3NwYW4+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSIsImltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tIFwiLi4vaG9va3MvaG9va3MtaGVscGVyXCI7XHJcbmltcG9ydCBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyBmcm9tIFwiLi4vZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBY3Rpb25zQnlUeXBlID0gdHlwZSA9PiB7XHJcblx0Y29uc3QgWyBhY3Rpb25zIF0gPSB1c2VBY3Rpb25zKCk7XHJcblxyXG5cdHJldHVybiBhY3Rpb25zLmZpbHRlciggYWN0aW9uID0+IHR5cGUgPT09IGFjdGlvbi50eXBlICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZnJvbUxvY2FsaXplSGVscGVyID0gbmFtZSA9PiB7XHJcblx0cmV0dXJuIG5hbWUgPyB3aW5kb3cuSmV0RkJMb2NhbGl6ZUhlbHBlclsgbmFtZSBdIDogd2luZG93LkpldEZCTG9jYWxpemVIZWxwZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQnlUeXBlTGlzdCA9ICggYWN0aW9uVHlwZSwgd2l0aERlc2MgPSBmYWxzZSApID0+IHtcclxuXHRyZXR1cm4gZ2V0QWN0aW9uc0J5VHlwZSggYWN0aW9uVHlwZSApLm1hcCggYWN0aW9uID0+IHtcclxuXHRcdGNvbnN0IG5ld0FjdGlvbiA9IHtcclxuXHRcdFx0dmFsdWU6IGFjdGlvbi5pZCxcclxuXHRcdFx0bGFiZWw6IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldEFjdGlvbkxhYmVsJyApKCBhY3Rpb24udHlwZSApXHJcblx0XHR9O1xyXG5cdFx0aWYgKCB3aXRoRGVzYyApIHtcclxuXHRcdFx0bmV3QWN0aW9uLmxhYmVsICs9IGAgKCR7IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9KWBcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbmV3QWN0aW9uO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBY3Rpb25TZXR0aW5ncyA9IGFjdGlvbklkID0+IHtcclxuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcclxuXHRjb25zdCBhY3Rpb24gPSBhY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiBhY3Rpb25JZCA9PT0gYWN0aW9uLmlkICk7XHJcblxyXG5cdHJldHVybiAoIGFjdGlvbiAmJiBhY3Rpb24uc2V0dGluZ3MgKSA/IGFjdGlvbi5zZXR0aW5ncyA6IGZhbHNlO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCBmcm9tIFwiLi9hY3Rpb24td3JhcHBlclwiO1xyXG5cclxuZnVuY3Rpb24gYWRkQWN0aW9uKCBhY3Rpb25UeXBlLCBhY3Rpb25JbnN0YW5jZSApIHtcclxuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zID0gd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9ucyB8fCB7fTtcclxuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zWyBhY3Rpb25UeXBlIF0gPSB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgZnJvbUxvY2FsaXplSGVscGVyIH0gZnJvbSBcIi4vYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0KCBhY3Rpb25UeXBlLCBBY3Rpb25JbnN0YW5jZSApIHtcclxuXHRjb25zdCBsb2NhbGl6ZWREYXRhID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvblR5cGUgKTtcclxuXHJcblx0cmV0dXJuIHByb3BzID0+IHtcclxuXHRcdGNvbnN0IG9uQ2hhbmdlU2V0dGluZyA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGdldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZUZpZWxkLCB2YWx1ZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWVsZHNNYXAgPSB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdLFxyXG5cdFx0XHRcdFsgbmFtZUZpZWxkIF06IHZhbHVlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXBcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGFkZGl0aW9uYWxQcm9wcyA9IHsgb25DaGFuZ2VTZXR0aW5nLCBnZXRNYXBGaWVsZCwgc2V0TWFwRmllbGQgfTtcclxuXHJcblx0XHRyZXR1cm4gPEFjdGlvbkluc3RhbmNlXHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHR7IC4uLmxvY2FsaXplZERhdGEgfVxyXG5cdFx0XHR7IC4uLmFkZGl0aW9uYWxQcm9wcyB9XHJcblx0XHQvPlxyXG5cdH07XHJcbn0iLCJcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yID0gKCBibG9ja1BhcnNlckZ1bmMgKSA9PiB7XHJcblx0Y29uc3QgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgPSAoIGJsb2NrcyApID0+IHtcclxuXHJcblx0XHRibG9ja3MgPSBibG9ja3MgfHwgd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRCbG9ja3MoKTtcclxuXHJcblx0XHRibG9ja3MubWFwKCBibG9jayA9PiB7XHJcblx0XHRcdGJsb2NrUGFyc2VyRnVuYyggYmxvY2sgKTtcclxuXHJcblx0XHRcdGlmICggYmxvY2suaW5uZXJCbG9ja3MubGVuZ3RoICkge1xyXG5cdFx0XHRcdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jay5pbm5lckJsb2NrcyApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoKTtcclxufVxyXG5cclxuY29uc3QgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyA9ICggZXhjbHVkZSA9IFtdLCBwbGFjZWhvbGRlciA9IGZhbHNlICkgPT4ge1xyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBbXTtcclxuXHJcblx0bGV0IHNraXBGaWVsZHMgPSBbICdzdWJtaXQnLCAnZm9ybS1icmVhaycsICdoZWFkaW5nJywgJ2dyb3VwLWJyZWFrJywgLi4uZXhjbHVkZSBdO1xyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xyXG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxyXG5cdFx0XHQmJiBibG9jay5hdHRyaWJ1dGVzLm5hbWVcclxuXHRcdFx0JiYgISBza2lwRmllbGRzLmZpbmQoIGZpZWxkID0+IGJsb2NrLm5hbWUuaW5jbHVkZXMoIGZpZWxkICkgKVxyXG5cdFx0KSB7XHJcblx0XHRcdGZvcm1GaWVsZHMucHVzaCgge1xyXG5cdFx0XHRcdGJsb2NrTmFtZTogYmxvY2submFtZSxcclxuXHRcdFx0XHRuYW1lOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdFx0bGFiZWw6IGJsb2NrLmF0dHJpYnV0ZXMubGFiZWwgfHwgYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBwbGFjZWhvbGRlclxyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXHJcblx0XHQ6IGZvcm1GaWVsZHM7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50ID0gKCBwbGFjZWhvbGRlciA9IGZhbHNlICkgPT4ge1xyXG5cclxuXHRjb25zdCBza2lwRmllbGRzID0gWyAnc3VibWl0JywgJ2Zvcm0tYnJlYWsnLCAnaGVhZGluZycsICdncm91cC1icmVhaycgXTtcclxuXHRjb25zdCBmb3JtRmllbGRzID0gW107XHJcblxyXG5cdGNvbnN0IGN1cnJlbnQgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNlbGVjdGVkQmxvY2soKTtcclxuXHJcblx0aWYgKCBudWxsID09PSBjdXJyZW50ICkge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrID0+IHtcclxuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcclxuXHRcdFx0JiYgY3VycmVudC5jbGllbnRJZCAhPT0gYmxvY2suY2xpZW50SWRcclxuXHRcdFx0JiYgISBza2lwRmllbGRzLmZpbmQoIGZpZWxkID0+IGJsb2NrLm5hbWUuaW5jbHVkZXMoIGZpZWxkICkgKVxyXG5cdFx0KSB7XHJcblx0XHRcdGZvcm1GaWVsZHMucHVzaCgge1xyXG5cdFx0XHRcdGJsb2NrTmFtZTogYmxvY2submFtZSxcclxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdFx0dmFsdWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIHBsYWNlaG9sZGVyXHJcblx0XHQ/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cclxuXHRcdDogZm9ybUZpZWxkcztcclxufTtcclxuXHJcbmNvbnN0IGdldEF2YWlsYWJsZUZpZWxkcyA9ICggZXhjbHVkZSA9IFtdICkgPT4ge1xyXG5cdGxldCBmaWVsZHMgPSBbXTtcclxuXHRjb25zdCBibG9ja3MgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCBleGNsdWRlICk7XHJcblxyXG5cdGlmICggYmxvY2tzICkge1xyXG5cdFx0YmxvY2tzLmZvckVhY2goIGl0ZW0gPT4gZmllbGRzLnB1c2goIGl0ZW0ubmFtZSApICk7XHJcblx0fVxyXG5cdHJldHVybiBmaWVsZHM7XHJcbn1cclxuXHJcbmNvbnN0IGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyA9ICggYmxvY2tOYW1lICkgPT4ge1xyXG5cdGNvbnN0IGZpZWxkcyA9IGdldEF2YWlsYWJsZUZpZWxkcyggWyBibG9ja05hbWUgXSApO1xyXG5cclxuXHRsZXQgZmllbGRzU3RyaW5nID0gW107XHJcblx0ZmllbGRzLmZvckVhY2goIGZ1bmN0aW9uICggaXRlbSApIHtcclxuXHRcdGZpZWxkc1N0cmluZy5wdXNoKCAnJUZJRUxEOjonICsgaXRlbSArICclJyApO1xyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIF9fKCAnQXZhaWxhYmxlIGZpZWxkczogJyApICsgZmllbGRzU3RyaW5nLmpvaW4oICcsICcgKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGdldElubmVyQmxvY2tzID0gKCBjbGllbnRJZCApID0+IHtcclxuXHRjb25zdCBibG9jayA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2soIGNsaWVudElkICk7XHJcblx0cmV0dXJuIGJsb2NrID8gYmxvY2suaW5uZXJCbG9ja3MgOiBbXTtcclxufVxyXG5cclxuY29uc3QgZ2V0Rm9ybUZpZWxkc0J5QmxvY2sgPSAoIGJsb2NrRXhjbHVkZSApID0+IHtcclxuXHRyZXR1cm4gKCkgPT4gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggWyBibG9ja0V4Y2x1ZGUubmFtZSBdICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxyXG5cdGdldElubmVyQmxvY2tzLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcclxufTtcclxuXHJcbiIsImltcG9ydCB7XHJcblx0ZnJvbUxvY2FsaXplSGVscGVyLFxyXG5cdGdldEFjdGlvblNldHRpbmdzXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIHtcclxuXHRjb25zdCB7IGdhdGV3YXlBdHRycywgbGFiZWwgfSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb24udHlwZSApO1xyXG5cdGNvbnN0IGFjdGlvblNldHRpbmdzID0gZ2V0QWN0aW9uU2V0dGluZ3MoIGFjdGlvbi5pZCApO1xyXG5cclxuXHRjb25zdCB2YWx1ZSA9IGF0dHIgPT4gYWN0aW9uU2V0dGluZ3NbIGF0dHIgXSA/IGFjdGlvblNldHRpbmdzWyBhdHRyIF0gOiAnTlVMTCc7XHJcblxyXG5cdGNvbnN0IGxhYmVsV2l0aEF0dHJzID0gZ2F0ZXdheUF0dHJzKCkubWFwKCBhdHRyID0+ICggYCR7IGxhYmVsKCBhdHRyICkgfSAkeyB2YWx1ZSggYXR0ciApIH1gICkgKTtcclxuXHJcblx0cmV0dXJuIGxhYmVsV2l0aEF0dHJzLmpvaW4oICcsICcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXM7IiwiZXhwb3J0IGNvbnN0IGdhdGV3YXlBdHRyID0gKCBhdHRyID0gZmFsc2UsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuXHRpZiAoICEgYXR0ciApIHtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHRpZiAoICEgZGF0YVsgYXR0ciBdICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xyXG5cclxuXHRyZXR1cm4gbmFtZSA9PiBzb3VyY2VbIG5hbWUgXSA/IHNvdXJjZVsgbmFtZSBdIDogaXNFbXB0eTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYXRld2F5TGFiZWwgPSAoIHR5cGUsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuXHRyZXR1cm4gYXR0ciA9PiBsYWJlbCggdHlwZSApID8gbGFiZWwoIHR5cGUgKVsgYXR0ciBdIDogaXNFbXB0eTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyR2F0ZXdheSA9ICggaWQsIGNhbGxiYWNrICkgPT4ge1xyXG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcclxuXHR3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF0gPSBjYWxsYmFjaztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJHYXRld2F5ID0gKCBpZCwgcHJvcHMgKSA9PiB7XHJcblx0aWYgKCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRjb25zdCBHYXRld2F5Q29tcG9uZW50ID0gd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdO1xyXG5cclxuXHRyZXR1cm4gPEdhdGV3YXlDb21wb25lbnQgeyAuLi5wcm9wcyB9IC8+O1xyXG59OyIsImNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNZXRhU3RhdGUgPSAoIGtleSwgaWZFbXB0eSA9ICd7fScgKSA9PiB7XHJcblx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XHJcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0fSApO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlZGl0UG9zdFxyXG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRjb25zdCBbIG1ldGFTdGF0ZVZhbHVlLCBzZXRNZXRhU3RhdGVWYWx1ZSBdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGFbIGtleSBdIHx8IGlmRW1wdHkgKSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0WyBrZXkgXTogSlNPTi5zdHJpbmdpZnkoIG1ldGFTdGF0ZVZhbHVlIClcclxuXHRcdFx0fSApXHJcblx0XHR9ICk7XHJcblx0fSwgWyBtZXRhU3RhdGVWYWx1ZSBdICk7XHJcblxyXG5cdHJldHVybiBbIG1ldGFTdGF0ZVZhbHVlLCBzZXRNZXRhU3RhdGVWYWx1ZSBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFjdGlvbnMgPSAoIHdpdGhFZGl0UG9zdEVmZmVjdCA9IGZhbHNlICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ZWRpdFBvc3RcclxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyB8fCAnW10nICkgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHdpdGhFZGl0UG9zdEVmZmVjdCApIHtcclxuXHRcdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRfamZfYWN0aW9uczogSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnMgKVxyXG5cdFx0XHRcdH0gKVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSwgWyBhY3Rpb25zIF0gKTtcclxuXHJcblx0cmV0dXJuIFsgYWN0aW9ucywgc2V0QWN0aW9ucyBdO1xyXG59O1xyXG5jb25zdCBpbml0Q2xhc3NlcyA9IFsgJ2pldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgXTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdGF0ZVZhbGlkQ2xhc3NlcyA9IGluaXRpYWxWYWxpZCA9PiB7XHJcblx0Y29uc3QgdmFsaWRDbGFzcyA9ICdpcy12YWxpZCc7XHJcblx0Y29uc3QgaW52YWxpZENsYXNzID0gJ2lzLWludmFsaWQnXHJcblxyXG5cdGNvbnN0IGluaXRTdGF0ZUNsYXNzZXMgPSAoKSA9PiB7XHJcblx0XHRpZiAoIGluaXRpYWxWYWxpZCApIHtcclxuXHRcdFx0cmV0dXJuIFsgLi4uaW5pdENsYXNzZXMsIHZhbGlkQ2xhc3MgXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCAhIGluaXRpYWxWYWxpZCApIHtcclxuXHRcdFx0cmV0dXJuIFsgLi4uaW5pdENsYXNzZXMsIGludmFsaWRDbGFzcyBdO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IFsgY2xhc3Nlcywgc2V0Q2xhc3NlcyBdID0gdXNlU3RhdGUoIGluaXRTdGF0ZUNsYXNzZXMoKSApO1xyXG5cclxuXHRjb25zdCBzZXRWYWxpZENsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgdmFsaWRDbGFzcyBdIClcclxuXHR9O1xyXG5cdGNvbnN0IHNldEludmFsaWRDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsIGludmFsaWRDbGFzcyBdIClcclxuXHR9O1xyXG5cdGNvbnN0IHNldExvYWRpbmdDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsICdsb2FkaW5nJyBdIClcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gWyBjbGFzc2VzLmpvaW4oICcgJyApLCBzZXRWYWxpZENsYXNzLCBzZXRJbnZhbGlkQ2xhc3MsIHNldExvYWRpbmdDbGFzcyBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyA9ICgpID0+IHtcclxuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCBbIC4uLmluaXRDbGFzc2VzIF0gKTtcclxuXHJcblx0Y29uc3Qgc2V0TG9hZGluZ0NsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKVxyXG5cdH07XHJcblx0Y29uc3QgY2xlYXJMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBpbml0Q2xhc3NlcyApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFsgY2xhc3Nlcy5qb2luKCAnICcgKSwgc2V0TG9hZGluZ0NsYXNzLCBjbGVhckxvYWRpbmdDbGFzcyBdO1xyXG59XHJcbiIsIlxyXG5mdW5jdGlvbiBnbG9iYWxUYWIoIHsgc2x1ZywgZWxlbWVudCA9ICcnLCBlbXB0eSA9ICcnIH0gKSB7XHJcblx0Y29uc3QgZ2xvYmFsID0gSmV0Rm9ybUVkaXRvckRhdGEuZ2xvYmFsX3NldHRpbmdzO1xyXG5cclxuXHRpZiggISBnbG9iYWwgKSB7XHJcblx0XHRyZXR1cm4gZW1wdHk7XHJcblx0fVxyXG5cclxuXHRpZiAoIGVsZW1lbnQgKSB7XHJcblx0XHRyZXR1cm4gKCBnbG9iYWxbIHNsdWcgXSAmJiBnbG9iYWxbIHNsdWcgXVsgZWxlbWVudCBdICkgPyBnbG9iYWxbIHNsdWcgXVsgZWxlbWVudCBdIDogZW1wdHk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZ2xvYmFsWyBzbHVnIF0gfHwgZW1wdHk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdsb2JhbFRhYiB9OyIsIlxyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNsYXNzIFRvb2xzIHtcclxuXHJcblx0c3RhdGljIGdldExhYmVsKCBtZXRhLCBhdHRycyApIHtcclxuXHRcdGNvbnN0IGxhYmVsID0ge307XHJcblx0XHRsYWJlbC5uYW1lID0gYXR0cnMubGFiZWw7XHJcblx0XHRpZiAoIGF0dHJzLnJlcXVpcmVkICkge1xyXG5cdFx0XHRsYWJlbC5tYXJrID0gSlNPTi5wYXJzZSggbWV0YS5famZfYXJncyApLnJlcXVpcmVkX21hcmsgfHwgJyc7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGFiZWw7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgd2l0aFBsYWNlaG9sZGVyKCBzb3VyY2UsIGxhYmVsID0gJy0tJywgdmFsdWUgPSAnJyApIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHsgbGFiZWwsIHZhbHVlIH0sXHJcblx0XHRcdC4uLnNvdXJjZVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpc0VtcHR5T2JqZWN0KCBvYmplY3QgKSB7XHJcblx0XHRyZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBvYmplY3QgJiYgT2JqZWN0LmtleXMoIG9iamVjdCApLmxlbmd0aCA9PT0gMDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRGdW5jQ29uZGl0aW9uKCBuYW1lRnVuY3Rpb24gKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCBgcmV0dXJuIHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnNbICckeyBuYW1lRnVuY3Rpb24gfScgXWAgKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRDb25kaXRpb25Gb3JDb25kVHlwZSggbmFtZSwgY2FsbGFibGUgKSB7XHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zID0gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9ucyB8fCB7fTtcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnNbIG5hbWUgXSA9IGNhbGxhYmxlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHBhcnNlQ29uZGl0aW9uc0Z1bmMoIHNvdXJjZSApIHtcclxuXHRcdGNvbnN0IHR5cGVzID0gW107XHJcblxyXG5cdFx0c291cmNlLmZvckVhY2goIHR5cGUgPT4ge1xyXG5cdFx0XHRpZiAoIHR5cGUuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdGlmICggVG9vbHMuZ2V0RnVuY0NvbmRpdGlvbiggdHlwZS5jb25kaXRpb24gKSgpKCB0eXBlLnZhbHVlICkgKSB7XHJcblx0XHRcdFx0XHR0eXBlcy5wdXNoKCB0eXBlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHR5cGVzLnB1c2goIHR5cGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiB0eXBlcztcclxuXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnQgPSBuYW1lID0+IHtcclxuXHRjb25zdCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgPSBuZXcgRXZlbnQoIG5hbWUgKTtcclxuXHRyZXR1cm4gKCkgPT4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggaW5pdGlhbGl6ZUNhbGxiYWNrc0V2ZW50ICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVuID0gKCBuYW1lLCBmdW5jICkgPT4ge1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGZ1bmMgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7IiwiaW1wb3J0IEFjdGlvbkZpZWxkc01hcCBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbi1maWVsZHMtbWFwXCI7XHJcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbi1tb2RhbFwiO1xyXG5pbXBvcnQgV3JhcHBlclJlcXVpcmVkQ29udHJvbCBmcm9tIFwiLi9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbFwiO1xyXG5pbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL3JlcXVlc3QtYnV0dG9uXCI7XHJcbmltcG9ydCBWYWxpZGF0ZUJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL3ZhbGlkYXRlLWJ1dHRvblwiO1xyXG5pbXBvcnQgYWRkQWN0aW9uIGZyb20gXCIuL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24tbWFuYWdlclwiO1xyXG5pbXBvcnQgVG9vbHMsIHtcclxuXHRldmVudCxcclxuXHRsaXN0ZW5cclxufSBmcm9tIFwiLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xyXG5pbXBvcnQgSmV0RmllbGRzTWFwQ29udHJvbCBmcm9tIFwiLi4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwXCI7XHJcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtd2l0aC1wcmVzZXRcIjtcclxuaW1wb3J0IHtcclxuXHRHbG9iYWxGaWVsZCxcclxuXHRBdmFpbGFibGVNYXBGaWVsZCxcclxuXHRNYXBGaWVsZFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcclxuXHRnZXRJbm5lckJsb2Nrc1xyXG59IGZyb20gXCIuL2hlbHBlcnMvYmxvY2tzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuaW1wb3J0IHtcclxuXHRnYXRld2F5QXR0cixcclxuXHRnYXRld2F5TGFiZWwsXHJcblx0cmVnaXN0ZXJHYXRld2F5LFxyXG5cdHJlbmRlckdhdGV3YXlcclxufSBmcm9tIFwiLi9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktaGVscGVyXCI7XHJcbmltcG9ydCB7XHJcblx0dXNlQWN0aW9ucyxcclxuXHR1c2VNZXRhU3RhdGUsXHJcblx0dXNlU3RhdGVWYWxpZENsYXNzZXMsXHJcblx0dXNlU3RhdGVMb2FkaW5nQ2xhc3Nlc1xyXG59IGZyb20gXCIuL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyXCI7XHJcbmltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtd3JhcHBlclwiO1xyXG5pbXBvcnQgTWFjcm9zSW5zZXJ0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvbWFjcm9zLWluc2VydGVyXCI7XHJcbmltcG9ydCBSZXBlYXRlcldpdGhTdGF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9yZXBlYXRlci13aXRoLXN0YXRlXCI7XHJcbmltcG9ydCB3aXRoUHJlc2V0IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtZWRpdG9yXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEZpZWxkQ29udHJvbFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IFBsYWNlaG9sZGVyTWVzc2FnZSBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZVwiO1xyXG5pbXBvcnQgSG9yaXpvbnRhbExpbmUgZnJvbSBcIi4vY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmVcIjtcclxuaW1wb3J0IFJlcXVlc3RMb2FkaW5nQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvblwiO1xyXG5pbXBvcnQge1xyXG5cdGFjdGlvbkJ5VHlwZUxpc3QsXHJcblx0ZnJvbUxvY2FsaXplSGVscGVyLFxyXG5cdGdldEFjdGlvblNldHRpbmdzXHJcbn0gZnJvbSBcIi4vaGVscGVycy9hY3Rpb25zL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5pbXBvcnQgeyBnbG9iYWxUYWIgfSBmcm9tIFwiLi9oZWxwZXJzL3NldHRpbmdzL2hlbHBlclwiO1xyXG5cclxuLy8gSkZCQ29tcG9uZW50c1xyXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xyXG5cdEFjdGlvbkZpZWxkc01hcCxcclxuXHRBY3Rpb25Nb2RhbCxcclxuXHRSZXF1ZXN0QnV0dG9uLFxyXG5cdFZhbGlkYXRlQnV0dG9uLFxyXG5cdFJlcXVlc3RMb2FkaW5nQnV0dG9uLFxyXG5cdFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcblx0RHluYW1pY1ByZXNldCxcclxuXHRKZXRGaWVsZHNNYXBDb250cm9sLFxyXG5cdEZpZWxkV2l0aFByZXNldCxcclxuXHRHbG9iYWxGaWVsZCxcclxuXHRBdmFpbGFibGVNYXBGaWVsZCxcclxuXHRNYXBGaWVsZCxcclxuXHRGaWVsZFdyYXBwZXIsXHJcblx0TWFjcm9zSW5zZXJ0ZXIsXHJcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEZpZWxkQ29udHJvbCxcclxuXHRQbGFjZWhvbGRlck1lc3NhZ2UsXHJcblx0SG9yaXpvbnRhbExpbmVcclxufTtcclxuXHJcbi8vIEpGQkZ1bmN0aW9uc1xyXG53aW5kb3cuSmV0RkJBY3Rpb25zID0ge1xyXG5cdGFkZEFjdGlvbixcclxuXHR3aXRoUHJlc2V0LFxyXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxyXG5cdGdldElubmVyQmxvY2tzLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcclxuXHRnYXRld2F5QXR0cixcclxuXHRnYXRld2F5TGFiZWwsXHJcblx0cmVnaXN0ZXJHYXRld2F5LFxyXG5cdFRvb2xzLFxyXG5cdGV2ZW50LFxyXG5cdGxpc3RlbixcclxuXHRhY3Rpb25CeVR5cGVMaXN0LFxyXG5cdGdldEFjdGlvblNldHRpbmdzLFxyXG5cdGZyb21Mb2NhbGl6ZUhlbHBlcixcclxuXHRyZW5kZXJHYXRld2F5LFxyXG5cdGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzLFxyXG5cdGdsb2JhbFRhYlxyXG59O1xyXG5cclxuLy8gSkZCSG9va3Ncclxud2luZG93LkpldEZCSG9va3MgPSB7XHJcblx0dXNlQWN0aW9ucyxcclxuXHR1c2VNZXRhU3RhdGUsXHJcblx0dXNlU3RhdGVWYWxpZENsYXNzZXMsXHJcblx0dXNlU3RhdGVMb2FkaW5nQ2xhc3NlcyxcclxufTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQUdBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFiQTtBQWdCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFFQTtBQUNBOzs7O0FBcEpBO0FBQ0E7QUFxSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUpBO0FBR0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBVUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFuQkE7QUEwQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBYkE7QUFvQkE7QUFDQTtBQUNBO0FBSEE7QUF0Q0E7QUFwQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFTQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUE3Q0E7QUF3REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTUE7QUFLQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBSEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVlBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBU0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUdBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQXRCQTtBQXVCQTtBQUFBO0FBdkJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBV0E7QUFEQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBakVBO0FBQ0E7QUE5SEE7QUFBQTtBQUFBO0FBOE1BO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hSQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQVFBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUF2QkE7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVRBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVkE7QUFwQkE7QUFtQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQXZCQTtBQUNBO0FBbUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JMQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUZBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVFBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQUNBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7OztBIiwic291cmNlUm9vdCI6IiJ9