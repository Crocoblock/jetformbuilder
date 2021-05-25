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
    Flex = _wp$components.Flex,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

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

    var objectNotMatch = function () {
      if ('object' !== _typeof(attr.condition.attr)) {
        return true;
      }

      var _attr$condition$attr = attr.condition.attr,
          _attr$condition$attr$ = _attr$condition$attr.operator,
          operator = _attr$condition$attr$ === void 0 ? 'and' : _attr$condition$attr$,
          _attr$condition$attr$2 = _attr$condition$attr.items,
          items = _attr$condition$attr$2 === void 0 ? {} : _attr$condition$attr$2;

      if ('or' === operator.toLowerCase()) {
        for (var attrToCompare in items) {
          var valueCompare = items[attrToCompare];

          if (valueCompare === attributes[attrToCompare]) {
            return true;
          }
        }
      }

      if ('and' === operator.toLowerCase()) {
        return function () {
          for (var _attrToCompare in items) {
            if (items[_attrToCompare] !== attributes[_attrToCompare]) {
              return false;
            }
          }

          return true;
        }();
      }

      return true;
    }();

    if (!objectNotMatch || 'string' === typeof attr.condition.attr && attr.condition.attr && !attributes[attr.condition.attr] || 'string' === typeof attr.condition && !attributes[attr.condition]) {
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

      case 'number':
        return wp.element.createElement(BaseControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-BaseControl"),
          label: label
        }, wp.element.createElement(NumberControl, {
          key: "".concat(attr.type, "-").concat(attrName, "-NumberControl"),
          value: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(Number(newVal), attrName);
          }
        }), wp.element.createElement("p", {
          className: 'components-base-control__help',
          style: {
            color: 'rgb(117, 117, 117)'
          }
        }, help || attrHelp(attrName)));
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

/***/ "./package/components/fields/field-settings-wrapper.js":
/*!*************************************************************!*\
  !*** ./package/components/fields/field-settings-wrapper.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FieldSettingsWrapper; });
/* harmony import */ var _field_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-control */ "./package/components/fields/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;
var PanelBody = wp.components.PanelBody;
function FieldSettingsWrapper(props) {
  var title = props.title,
      children = props.children,
      _props$editProps$uniq = props.editProps.uniqKey,
      uniqKey = _props$editProps$uniq === void 0 ? function (val) {
    return val;
  } : _props$editProps$uniq;
  return wp.element.createElement(PanelBody, {
    title: title || __('Field Settings')
  }, children, wp.element.createElement(_field_control__WEBPACK_IMPORTED_MODULE_0__["FieldControl"], _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props)));
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
    if (actionSettings[attr]) {
      return actionSettings[attr];
    }

    if (actionSettings[action.type] && actionSettings[action.type][attr]) {
      return actionSettings[action.type][attr];
    }

    return 'NULL';
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
/* harmony import */ var _components_fields_field_settings_wrapper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/fields/field-settings-wrapper */ "./package/components/fields/field-settings-wrapper.js");

























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
  HorizontalLine: _components_horizontal_line__WEBPACK_IMPORTED_MODULE_20__["default"],
  FieldSettingsWrapper: _components_fields_field_settings_wrapper__WEBPACK_IMPORTED_MODULE_25__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbi1maWVsZHMtbWFwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9hY3Rpb24tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9maWVsZHMvZmllbGQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXNldHRpbmdzLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9maWVsZC13aXRoLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL2ZpZWxkcy9yZXBlYXRlci13aXRoLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9ob3Jpem9udGFsLWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy9yZXF1ZXN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvcmVxdWVzdC1sb2FkaW5nLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2NvbXBvbmVudHMvdmFsaWRhdGUtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24tbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYWN0aW9ucy9hY3Rpb24td3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvYmxvY2tzL2Jsb2Nrcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL2dhdGV3YXlzL2dhdGV3YXktaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2UvaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9oZWxwZXJzL3NldHRpbmdzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlL2hlbHBlcnMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS9tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFja2FnZS9tYW5hZ2VyLmpzXCIpO1xuIiwiXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5jbGFzcyBKZXRGaWVsZHNNYXBDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMuZmllbGRUeXBlcyA9IHRoaXMucHJvcHMuZmllbGRUeXBlcztcblx0XHR0aGlzLnRheG9ub21pZXNMaXN0ID0gdGhpcy5wcm9wcy50YXhvbm9taWVzTGlzdDtcblx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuXHRcdHRoaXMubWV0YVByb3AgPSB0aGlzLnByb3BzLm1ldGFQcm9wID8gdGhpcy5wcm9wcy5tZXRhUHJvcCA6ICdwb3N0X21ldGEnO1xuXHRcdHRoaXMudGVybXNQcm9wID0gdGhpcy5wcm9wcy50ZXJtc1Byb3AgPyB0aGlzLnByb3BzLnRlcm1zUHJvcCA6ICdwb3N0X3Rlcm1zJztcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5wcm9wcy5pbmRleDtcblxuXHRcdHRoaXMuaW5pdCgpO1xuXHRcdHRoaXMuYmluZEZ1bmN0aW9ucygpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHR5cGU6IHRoaXMuZ2V0RmllbGRUeXBlKCB0aGlzLnByb3BzLmZpZWxkVmFsdWUgKSxcblx0XHR9O1xuXHR9XG5cblx0YmluZEZ1bmN0aW9ucygpIHtcblx0XHR0aGlzLm9uQ2hhbmdlVHlwZSA9IHRoaXMub25DaGFuZ2VUeXBlLmJpbmQoIHRoaXMgKTtcblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUgPSB0aGlzLm9uQ2hhbmdlVmFsdWUuYmluZCggdGhpcyApO1xuXHR9XG5cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuaWQgPSBgaW5zcGVjdG9yLXNlbGVjdC1jb250cm9sLSR7IHRoaXMuaW5kZXggfWA7XG5cdFx0dGhpcy5wcmVwYXJlZFRheGVzID0gW107XG5cdFx0dGhpcy50YXhQcmVmaXggPSAnamV0X3RheF9fJztcblxuXHRcdGlmICggISB0aGlzLnRheG9ub21pZXNMaXN0ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMudGF4b25vbWllc0xpc3QubGVuZ3RoOyBpICsrICkge1xuXHRcdFx0dGhpcy5wcmVwYXJlZFRheGVzLnB1c2goIHtcblx0XHRcdFx0dmFsdWU6IHRoaXMudGF4UHJlZml4ICsgdGhpcy50YXhvbm9taWVzTGlzdFsgaSBdLnZhbHVlLFxuXHRcdFx0XHRsYWJlbDogdGhpcy50YXhvbm9taWVzTGlzdFsgaSBdLmxhYmVsLFxuXHRcdFx0fSApO1xuXHRcdH1cblx0fVxuXG5cdGdldEZpZWxkTmFtZSggdmFsdWUgKSB7XG5cblx0XHRpZiAoICEgdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRUeXBlID0gdGhpcy5nZXRGaWVsZFR5cGUoIHZhbHVlICk7XG5cblx0XHRpZiAoIHRoaXMudGVybXNQcm9wID09PSBmaWVsZFR5cGUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gZmllbGRUeXBlICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0fTtcblxuXHRpc1Rlcm1Pck1ldGEoIHZhbHVlICkge1xuXHRcdHJldHVybiAoIHRoaXMudGVybXNQcm9wID09PSB2YWx1ZSB8fCB0aGlzLm1ldGFQcm9wID09PSB2YWx1ZSApO1xuXHR9XG5cblxuXHRnZXRGaWVsZFR5cGUoIHZhbHVlICkge1xuXG5cdFx0aWYgKCAhIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRUeXBlcy5sZW5ndGg7IGkgKysgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSB0aGlzLmZpZWxkVHlwZXNbIGkgXS52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdmFsdWUuaW5jbHVkZXMoIHRoaXMudGF4UHJlZml4ICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXJtc1Byb3A7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMubWV0YVByb3A7XG5cdFx0fVxuXG5cdH07XG5cblxuXHRvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSApIHtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XG5cdFx0XHQuLi50aGlzLnByb3BzLmZpZWxkc01hcCxcblx0XHRcdFsgdGhpcy5wcm9wcy5maWVsZE5hbWUgXTogbmV3VmFsdWVcblx0XHR9ICk7XG5cdH07XG5cblxuXHRvbkNoYW5nZVR5cGUoIG5ld1ZhbHVlICkge1xuXHRcdGxldCB2YWwgPSB0aGlzLmdldEZpZWxkVHlwZSggbmV3VmFsdWUgKTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoIHtcblx0XHRcdHR5cGU6IHZhbFxuXHRcdH0gKTtcblxuXHRcdGlmICggdGhpcy5pc1Rlcm1Pck1ldGEoIHZhbCApICkge1xuXHRcdFx0dmFsID0gJyc7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB2YWwgKTtcblx0fVxuXG5cblx0Ly8gRGlzYWJsZSByZWFzb246IEEgc2VsZWN0IHdpdGggYW4gb25jaGFuZ2UgdGhyb3dzIGEgd2FybmluZ1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX3Jvd1wiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtcG9zdC1maWVsZC1jb250cm9sXCI+XG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3R5cGVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XG5cdFx0XHRcdFx0bGFiZWw9eyB0aGlzLnByb3BzLmZpZWxkTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5zdGF0ZS50eXBlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VUeXBlIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5maWVsZFR5cGVzIH1cblx0XHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTYwcHgnXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgKCB0aGlzLm1ldGFQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfbmFtZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0XHR7ICggdGhpcy50ZXJtc1Byb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC13aXRob3V0LWxhYmVsJ1xuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90YXhfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVZhbHVlIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5wcmVwYXJlZFRheGVzIH1cblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XG5cdFx0XHRcdC8+IH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2Pjtcblx0fVxuXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmV0RmllbGRzTWFwQ29udHJvbDsiLCJcbmNvbnN0IHtcblx0QmFzZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uRmllbGRzTWFwKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgZmllbGRzID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHQgbGFiZWwgPSAnW0VtcHR5IGxhYmVsXScsXG5cdFx0XHRcdFx0XHRcdFx0XHQgY2hpbGRyZW4gPSAoKSA9PiB7fVxuXHRcdFx0XHRcdFx0XHRcdCB9ICkge1xuXG5cdHJldHVybiA8QmFzZUNvbnRyb2xcblx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRrZXk9J2pldF9maWVsZHNfbWFwJ1xuXHQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxuXHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGRJZCwgZmllbGREYXRhIF0sIGluZGV4ICkgPT4gPFJlYWN0LkZyYWdtZW50XG5cdFx0XHRcdGtleT17IGBmaWVsZF9pbl9tYXBfJHsgZmllbGRJZCArIGluZGV4IH1gIH1cblx0XHRcdD5cblx0XHRcdFx0eyBjaGlsZHJlbiggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSB9XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiApIH1cblx0XHQ8L2Rpdj5cblx0PC9CYXNlQ29udHJvbD5cbn07XG5cbiIsImZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvblJlcXVlc3RDbG9zZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBjbGFzc05hbWVzID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvblVwZGF0ZUNsaWNrLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25DYW5jZWxDbGlja1xuXHRcdFx0XHRcdFx0XHRcdFx0IH0gKSB7XG5cblx0Y29uc3Qge1xuXHRcdEJ1dHRvbixcblx0XHRCdXR0b25Hcm91cCxcblx0XHRNb2RhbCxcblx0fSA9IHdwLmNvbXBvbmVudHM7XG5cblx0Y29uc3Qge1xuXHRcdHVzZVN0YXRlLFxuXHRcdHVzZUVmZmVjdFxuXHR9ID0gd3AuZWxlbWVudDtcblxuXHRjb25zdCBtb2RhbENsYXNzZXMgPSBbICdqZXQtZm9ybS1lZGl0LW1vZGFsJywgLi4uY2xhc3NOYW1lcyBdLmpvaW4oICcgJyApO1xuXG5cdGNvbnN0IFsgYWN0aW9uQ2xpY2ssIHNldEFjdGlvbkNsaWNrIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xuXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xuXHRcdGlmICggb25VcGRhdGVDbGljayApIHtcblx0XHRcdG9uVXBkYXRlQ2xpY2soKTtcblx0XHR9XG5cdFx0c2V0QWN0aW9uQ2xpY2soIHRydWUgKVxuXHR9XG5cdGNvbnN0IGNhbmNlbENsaWNrID0gKCkgPT4ge1xuXHRcdGlmICggb25DYW5jZWxDbGljayApIHtcblx0XHRcdG9uQ2FuY2VsQ2xpY2soKTtcblx0XHR9XG5cdFx0c2V0QWN0aW9uQ2xpY2soIGZhbHNlICk7XG5cdH1cblxuXHRyZXR1cm4gPE1vZGFsXG5cdFx0b25SZXF1ZXN0Q2xvc2U9eyBvblJlcXVlc3RDbG9zZSB9XG5cdFx0Y2xhc3NOYW1lPXsgbW9kYWxDbGFzc2VzIH1cblx0XHR0aXRsZT17IHRpdGxlIH1cblx0PlxuXHRcdHsgISBjaGlsZHJlbiAmJiA8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCJcblx0XHQ+XG5cdFx0XHR7ICdBY3Rpb24gY2FsbGJhY2sgaXMgbm90IGZvdW5kLicgfVxuXHRcdDwvZGl2PiB9XG5cdFx0eyBjaGlsZHJlbiAmJiA8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCI+XG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgfVxuXHRcdFx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxCdXR0b25Hcm91cFxuXHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19hY3Rpb25zXCJcblx0XHRcdD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XG5cdFx0XHRcdD5VcGRhdGU8L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRtYXJnaW46ICcwIDAgMCAxMHB4J1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyBjYW5jZWxDbGljayB9XG5cdFx0XHRcdD5DYW5jZWw8L0J1dHRvbj5cblx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0PC9kaXY+IH1cblx0PC9Nb2RhbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1vZGFsOyIsImZ1bmN0aW9uIFBsYWNlaG9sZGVyTWVzc2FnZSggeyBzdHlsZSwgY2hpbGRyZW4gfSApIHtcblx0Y29uc3QgcHJvcFN0eWxlID0ge1xuXHRcdGZvbnRTaXplOiAnMS41ZW0nLFxuXHRcdHBhZGRpbmc6ICcyZW0nLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnYWxpY2VibHVlJyxcblx0XHQuLi5zdHlsZVxuXHR9O1xuXG5cdHJldHVybiA8cCBzdHlsZT17IHByb3BTdHlsZSB9PnsgY2hpbGRyZW4gfTwvcD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWNlaG9sZGVyTWVzc2FnZTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5leHBvcnQgY29uc3QgQ29udHJvbHNTZXR0aW5ncyA9ICgpID0+IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5maWVsZHMuY29udHJvbHMnLCB7XG5cdFwiZ2VuZXJhbFwiOiAge1xuXHRcdGxhYmVsOiBfXyggJ0dlbmVyYWwnICksXG5cdFx0YXR0cnM6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImxhYmVsXCIsXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiRmllbGQgTGFiZWxcIiApLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcIm5hbWVcIixcblx0XHRcdFx0XCJ0eXBlXCI6ICAgICBcInRleHRcIixcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJGb3JtIGZpZWxkIG5hbWVcIiApLFxuXHRcdFx0XHRcImhlbHBcIjogICAgIF9fKCBcIlNob3VsZCBjb250YWluIG9ubHkgTGF0aW4gbGV0dGVycywgbnVtYmVycywgYC1gIG9yIGBfYCBjaGFycywgbm8gc3BhY2VzIG9ubHkgbG93ZXIgY2FzZVwiICksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVzY1wiLFxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidGV4dFwiLFxuXHRcdFx0XHRcImxhYmVsXCI6ICAgIF9fKCBcIkZpZWxkIERlc2NyaXB0aW9uXCIgKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJkeW5hbWljX3RleHRcIixcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJEZWZhdWx0IFZhbHVlXCIgKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0XCJ0b29sYmFyXCI6ICB7XG5cdFx0YXR0cnM6IFtcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0b2dnbGVcIixcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJJcyBSZXF1aXJlZFwiICksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdFwiYWR2YW5jZWRcIjoge1xuXHRcdGxhYmVsOiBfXyggJ0FkdmFuY2VkJyApLFxuXHRcdGF0dHJzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJwbGFjZWhvbGRlclwiLFxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidGV4dFwiLFxuXHRcdFx0XHRcImxhYmVsXCI6ICAgIF9fKCBcIlBsYWNlaG9sZGVyXCIgKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJhZGRfcHJldlwiLFxuXHRcdFx0XHRcInR5cGVcIjogICAgIFwidG9nZ2xlXCIsXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiQWRkIFByZXYgUGFnZSBCdXR0b25cIiApLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiAgXCJwcmV2X2xhYmVsXCIsXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgIFwidGV4dFwiLFxuXHRcdFx0XHRcImxhYmVsXCI6ICAgICBfXyggXCJQcmV2IFBhZ2UgQnV0dG9uIExhYmVsXCIgKSxcblx0XHRcdFx0XCJjb25kaXRpb25cIjogXCJhZGRfcHJldlwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInZpc2liaWxpdHlcIixcblx0XHRcdFx0XCJsYWJlbFwiOiAgICBfXyggXCJGaWVsZCBWaXNpYmlsaXR5XCIgKSxcblx0XHRcdFx0XCJ0eXBlXCI6ICAgICBcInNlbGVjdFwiLFxuXHRcdFx0XHRcIm9wdGlvbnNcIjogIFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZvciBhbGxcIiApLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcImxvZ2dlZF9pZFwiLFxuXHRcdFx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJPbmx5IGZvciBsb2dnZWQgaW4gdXNlcnNcIiApLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIm5vdF9sb2dnZWRfaW5cIixcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgTk9ULWxvZ2dlZCBpbiB1c2Vyc1wiICksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJjbGFzc19uYW1lXCIsXG5cdFx0XHRcdFwidHlwZVwiOiAgICAgXCJ0ZXh0XCIsXG5cdFx0XHRcdFwibGFiZWxcIjogICAgX18oIFwiQ1NTIENsYXNzIE5hbWVcIiApLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufSApIiwiaW1wb3J0IHsgQ29udHJvbHNTZXR0aW5ncyB9IGZyb20gXCIuL2NvbnRyb2xzXCI7XG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tIFwiLi4vcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xuXG5jb25zdCB7XG5cdFx0ICBCbG9ja0NvbnRyb2xzLFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFNlbGVjdENvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBUb2dnbGVDb250cm9sLFxuXHRcdCAgVG9vbGJhckdyb3VwLFxuXHRcdCAgRmxleCxcblx0XHQgIEJhc2VDb250cm9sLFxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuZnVuY3Rpb24gRmllbGRDb250cm9sKCB7XG5cdFx0XHRcdFx0XHQgICB0eXBlLFxuXHRcdFx0XHRcdFx0ICAgc2V0QXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdCAgIGF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHQgICBhdHRyc1NldHRpbmdzID0ge30sXG5cdFx0XHRcdFx0XHQgICBlZGl0UHJvcHM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBhdHRySGVscCA9ICgpID0+ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGJsb2NrTmFtZSA9ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICB9LFxuXHRcdFx0XHRcdCAgIH0gKSB7XG5cdGNvbnN0IGNvbnRyb2xzID0gQ29udHJvbHNTZXR0aW5ncygpO1xuXG5cdGlmICggISBjb250cm9sc1sgdHlwZSBdICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgY3VycmVudENvbnRyb2wgPSBjb250cm9sc1sgdHlwZSBdO1xuXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XG5cdH07XG5cblx0Y29uc3QgaXNWYWxpZENvbmRpdGlvbiA9ICggYXR0ciApID0+IHtcblx0XHRpZiAoICEgYXR0ci5jb25kaXRpb24gKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGJsb2NrTmFtZSAmJiBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUgKSB7XG5cdFx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICYmIGJsb2NrTmFtZSAhPT0gYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgYXR0ci5jb25kaXRpb24uYmxvY2tOYW1lXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmJsb2NrTmFtZS5sZW5ndGhcblx0XHRcdFx0JiYgISBhdHRyLmNvbmRpdGlvbi5ibG9ja05hbWUuaW5jbHVkZXMoIGJsb2NrTmFtZSApXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IG9iamVjdE5vdE1hdGNoID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAnb2JqZWN0JyAhPT0gdHlwZW9mIGF0dHIuY29uZGl0aW9uLmF0dHIgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgeyBvcGVyYXRvciA9ICdhbmQnLCBpdGVtcyA9IHt9IH0gPSBhdHRyLmNvbmRpdGlvbi5hdHRyXG5cblx0XHRcdGlmICggJ29yJyA9PT0gb3BlcmF0b3IudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0Zm9yICggY29uc3QgYXR0clRvQ29tcGFyZSBpbiBpdGVtcyApIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZUNvbXBhcmUgPSBpdGVtc1sgYXR0clRvQ29tcGFyZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB2YWx1ZUNvbXBhcmUgPT09IGF0dHJpYnV0ZXNbIGF0dHJUb0NvbXBhcmUgXSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdhbmQnID09PSBvcGVyYXRvci50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRyZXR1cm4gKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJUb0NvbXBhcmUgaW4gaXRlbXMgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGl0ZW1zWyBhdHRyVG9Db21wYXJlIF0gIT09IGF0dHJpYnV0ZXNbIGF0dHJUb0NvbXBhcmUgXSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSkoKVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9KSgpXG5cblx0XHRpZiAoICEgb2JqZWN0Tm90TWF0Y2hcblx0XHRcdHx8IChcblx0XHRcdFx0J3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvbi5hdHRyXG5cdFx0XHRcdCYmIGF0dHIuY29uZGl0aW9uLmF0dHJcblx0XHRcdFx0JiYgISBhdHRyaWJ1dGVzWyBhdHRyLmNvbmRpdGlvbi5hdHRyIF1cblx0XHRcdClcblx0XHRcdHx8IChcblx0XHRcdFx0J3N0cmluZycgPT09IHR5cGVvZiBhdHRyLmNvbmRpdGlvblxuXHRcdFx0XHQmJiAhIGF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uIF1cblx0XHRcdClcblx0XHQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRyZXR1cm4gY3VycmVudENvbnRyb2wuYXR0cnMubWFwKCAoIHsgaGVscCA9ICcnLCBhdHRyTmFtZSwgbGFiZWwsIC4uLmF0dHIgfSApID0+IHtcblxuXHRcdGNvbnN0IGlzUmVnaXN0ZXJBdHRyaWJ1dGUgPSAoIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMgKTtcblx0XHRjb25zdCB2YWxpZENvbmRpdGlvbiA9IGlzVmFsaWRDb25kaXRpb24oIGF0dHIgKTtcblx0XHRjb25zdCBpc0hpZGRlbiA9IChcblx0XHRcdGF0dHJOYW1lIGluIGF0dHJzU2V0dGluZ3Ncblx0XHRcdCYmICdzaG93JyBpbiBhdHRyc1NldHRpbmdzWyBhdHRyTmFtZSBdXG5cdFx0XHQmJiBmYWxzZSA9PT0gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXS5zaG93XG5cdFx0KTtcblxuXHRcdGlmICggISBpc1JlZ2lzdGVyQXR0cmlidXRlIHx8ICEgdmFsaWRDb25kaXRpb24gfHwgaXNIaWRkZW4gKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKCBhdHRyLnR5cGUgKSB7XG5cdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRleHRDb250cm9sYCB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+O1xuXHRcdFx0Y2FzZSAnZHluYW1pY190ZXh0Jzpcblx0XHRcdFx0cmV0dXJuIDxGaWVsZFdpdGhQcmVzZXRcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1GaWVsZFdpdGhQcmVzZXRgIH1cblx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxuXHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRleHRDb250cm9sRHluYW1pY2AgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0Pjtcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRcdHJldHVybiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVNlbGVjdENvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCB8fCBhdHRySGVscCggYXR0ck5hbWUgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgYXR0ci5vcHRpb25zIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz47XG5cdFx0XHRjYXNlICd0b2dnbGUnOlxuXHRcdFx0XHRyZXR1cm4gPFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1Ub2dnbGVDb250cm9sYCB9XG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAgfHwgYXR0ckhlbHAoIGF0dHJOYW1lICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz47XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRyZXR1cm4gPEJhc2VDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tQmFzZUNvbnRyb2xgIH1cblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1OdW1iZXJDb250cm9sYCB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBOdW1iZXIoIG5ld1ZhbCApLCBhdHRyTmFtZSApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCcgfVxuXHRcdFx0XHRcdCAgIHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0ICAgY29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknLFxuXHRcdFx0XHRcdCAgIH0gfT57IGhlbHAgfHwgYXR0ckhlbHAoIGF0dHJOYW1lICkgfTwvcD5cblx0XHRcdFx0PC9CYXNlQ29udHJvbD47XG5cdFx0fVxuXG5cdH0gKTtcblxufVxuXG5mdW5jdGlvbiBHZW5lcmFsRmllbGRzKCBwcm9wcyApIHtcblx0Y29uc3QgY3VycmVudENvbnRyb2wgPSBDb250cm9sc1NldHRpbmdzKCkuZ2VuZXJhbDtcblxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtZmllbGRzJyB9PlxuXHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdHR5cGU9J2dlbmVyYWwnXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMtY29tcG9uZW50JyB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPlxuXHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdHR5cGU9J2N1c3RvbV9nZW5lcmFsJ1xuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtY3VzdG9tLWZpZWxkcy1jb21wb25lbnQnIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdDwvUGFuZWxCb2R5Pjtcbn1cblxuZnVuY3Rpb24gQWR2YW5jZWRGaWVsZHMoIHByb3BzICkge1xuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IENvbnRyb2xzU2V0dGluZ3MoKS5hZHZhbmNlZDtcblxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcycgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG5cdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0dHlwZT0nYWR2YW5jZWQnXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tYWR2YW5jZWQtZmllbGRzLWNvbXBvbmVudCcgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz5cblx0XHQ8RmllbGRDb250cm9sXG5cdFx0XHR0eXBlPSdjdXN0b21fYWR2YW5jZWQnXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tYWR2YW5jZWQtY3VzdG9tLWZpZWxkcy1jb21wb25lbnQnIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdDwvUGFuZWxCb2R5Pjtcbn1cblxuZnVuY3Rpb24gVG9vbEJhckZpZWxkcyggcHJvcHMgKSB7XG5cblx0Y29uc3QgeyBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LCBjaGlsZHJlbiA9IFtdIH0gPSBwcm9wcztcblxuXHRyZXR1cm4gPEJsb2NrQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtQmxvY2tDb250cm9scycgKSB9PlxuXHRcdDxUb29sYmFyR3JvdXAga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtVG9vbGJhckdyb3VwJyApIH0+XG5cdFx0XHQ8RmxleFxuXHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cblx0XHRcdFx0anVzdGlmeT17ICdjZW50ZXInIH1cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXRvZ2dsZS1ib3gnIH1cblx0XHRcdD5cblx0XHRcdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0XHRcdHR5cGU9J3Rvb2xiYXInXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2pldC1mb3JtLXRvb2xiYXItZmllbGRzLWNvbXBvbmVudCcgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0PC9GbGV4PlxuXHRcdDwvVG9vbGJhckdyb3VwPlxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xufVxuXG5leHBvcnQge1xuXHRHZW5lcmFsRmllbGRzLFxuXHRUb29sQmFyRmllbGRzLFxuXHRBZHZhbmNlZEZpZWxkcyxcblx0RmllbGRDb250cm9sLFxufTsiLCJpbXBvcnQgeyBGaWVsZENvbnRyb2wgfSBmcm9tICcuL2ZpZWxkLWNvbnRyb2wnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBQYW5lbEJvZHkgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpZWxkU2V0dGluZ3NXcmFwcGVyKCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdFx0ICB0aXRsZSxcblx0XHRcdCAgY2hpbGRyZW4sXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5ID0gdmFsID0+IHZhbCB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdHJldHVybiA8UGFuZWxCb2R5XG5cdFx0dGl0bGU9eyB0aXRsZSB8fCBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdHR5cGU9J2N1c3RvbV9zZXR0aW5ncydcblx0XHRcdGtleT17IHVuaXFLZXkoICdjdXN0b21TZXR0aW5nc0ZpZWxkcycgKSB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPlxuXHQ8L1BhbmVsQm9keT47XG59IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi9hY3Rpb24tbW9kYWxcIjtcblxuY29uc3Qge1xuXHRQYXRoLFxuXHRTVkcsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHR1c2VTdGF0ZSxcbn0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiBGaWVsZFdpdGhQcmVzZXQoIHtcblx0XHRcdFx0XHRcdFx0ICBjaGlsZHJlbiA9IG51bGwsXG5cdFx0XHRcdFx0XHRcdCAgTW9kYWxFZGl0b3IsXG5cdFx0XHRcdFx0XHRcdCAgdHJpZ2dlckNsYXNzZXMgPSBbXSxcblx0XHRcdFx0XHRcdCAgfSApIHtcblxuXHRjb25zdCBbIG1vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGUgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdGNvbnN0IGNoYW5nZU1vZGFsU3RhdGUgPSAoKSA9PiB7XG5cdFx0c2V0TW9kYWxTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcblx0fTtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWR5bmFtaWMtcHJlc2V0X190cmlnZ2VyJywgLi4udHJpZ2dlckNsYXNzZXMgXS5qb2luKCAnICcgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1keW5hbWljLXByZXNldFwiXG5cdFx0PlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxuXHRcdFx0XHRvbkNsaWNrPXsgY2hhbmdlTW9kYWxTdGF0ZSB9XG5cdFx0XHQ+PFNWRyB2aWV3Qm94PVwiMCAwIDU0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PFBhdGhcblx0XHRcdFx0ZD1cIk00Mi42Mzk2IDI2LjQzNDdDMzcuODY4MiAyNy4zNDM2IDMyLjU2NjYgMjguMDI1MiAyNy4xODk0IDI4LjAyNTJDMjEuODEyMSAyOC4wMjUyIDE2LjQzNDggMjcuMzQzNiAxMS43MzkxIDI2LjQzNDdDNi45Njc3NCAyNS40NTAyIDMuMTgwOTMgMjMuODU5NyAwLjM3ODY4IDIxLjk2NjNMMC4zNzg2OCAyOC4wMjUyQzAuMzc4NjggMjkuNTM5OSAxLjU5MDQ2IDMxLjEzMDQgMy43ODY4MiAzMi40MTc5QzUuOTgzMTcgMzMuNzA1NCA5LjQ2NzA0IDM0LjkxNzIgMTMuNjMyNSAzNS41OTg4QzE3Ljc5OCAzNi4yODA1IDIyLjExNSAzNi44MTA2IDI3LjE4OTQgMzYuODEwNkMzMi4yNjM3IDM2LjgxMDYgMzYuNjU2NCAzNi41MDc3IDQwLjc0NjIgMzUuNTk4OEM0NC44MzU5IDM0LjY5IDQ4LjMxOTggMzMuNzA1NCA1MC41MTYyIDMyLjQxNzlDNTIuNzEyNSAzMS4xMzA0IDU0IDI5LjUzOTkgNTQgMjguMDI1Mkw1NCAyMS45NjYzQzUxLjEyMiAyMy44NTk3IDQ3LjMzNTIgMjUuNDUwMiA0Mi42Mzk2IDI2LjQzNDdaTTQyLjYzOTYgNTMuNTQ4NEMzNy44NjgyIDU0LjUzMjkgMzIuNTY2NiA1NS4xMzg4IDI3LjE4OTQgNTUuMTM4OEMyMS44MTIxIDU1LjEzODggMTYuNDM0OCA1NC41MzI5IDExLjczOTEgNTMuNTQ4NEM3LjA0MzQ4IDUyLjU2MzggMy4xODA5MyA1MS4wNDkxIDAuMzc4NjgyIDQ5LjE1NTZMMC4zNzg2ODIgNTUuMTM4OEMwLjM3ODY4MyA1Ni43MjkzIDEuNTkwNDYgNTguMzE5NyAzLjc4NjgyIDU5LjUzMTVDNi4zNjE4NiA2MC44MTkgOS40NjcwNSA2Mi4xMDY2IDEzLjYzMjUgNjIuNzEyNUMxNy43MjIzIDYzLjY5NyAyMi4xMTUgNjQgMjcuMTg5NCA2NEMzMi4yNjM3IDY0IDM2LjY1NjQgNjMuNjk3IDQwLjc0NjIgNjIuNzEyNUM0NC44MzU5IDYxLjgwMzYgNDguMzE5OCA2MC44MTkgNTAuNTE2MiA1OS41MzE1QzUyLjcxMjUgNTcuOTQxMSA1NCA1Ni43MjkzIDU0IDU0LjgzNTlMNTQgNDguODUyN0M1MS4xMjIgNTEuMDQ5MSA0Ny4zMzUyIDUyLjI2MDggNDIuNjM5NiA1My41NDg0Wk00Mi42Mzk2IDM5Ljk5MTVDMzcuODY4MiA0MC45MDA0IDMyLjU2NjYgNDEuNTgyIDI3LjE4OTQgNDEuNTgyQzIxLjgxMjEgNDEuNTgyIDE2LjQzNDggNDAuOTAwNCAxMS43MzkxIDM5Ljk5MTVDNi45Njc3NCAzOS4wMDcgMy4xODA5MyAzNy40OTIyIDAuMzc4NjgxIDM1LjU5ODhMMC4zNzg2ODEgNDEuNTgyQzAuMzc4NjgxIDQzLjE3MjUgMS41OTA0NiA0NC42ODcyIDMuNzg2ODIgNDUuOTc0N0M2LjM2MTg1IDQ3LjI2MjIgOS40NjcwNSA0OC40NzQgMTMuNjMyNSA0OS4xNTU2QzE3LjcyMjMgNTAuMDY0NSAyMi4xMTUgNTAuMzY3NCAyNy4xODk0IDUwLjM2NzRDMzIuMjYzNyA1MC4zNjc0IDM2LjY1NjQgNTAuMDY0NSA0MC43NDYyIDQ5LjE1NTZDNDQuODM1OSA0OC4xNzExIDQ4LjMxOTggNDcuMjYyMiA1MC41MTYyIDQ1Ljk3NDdDNTIuNzEyNSA0NC4zODQzIDU0IDQzLjE3MjUgNTQgNDEuNTgyTDU0IDM1LjU5ODhDNTEuMTIyIDM3LjQ5MjIgNDcuMzM1MiAzOS4wMDcgNDIuNjM5NiAzOS45OTE1Wk00MC40NDMyIDIuMTIzMzdDMzYuMzUzNSAxLjEzODc5IDMxLjg4NSAwLjgzNTg0OCAyNi44ODY0IDAuODM1ODQ5QzIxLjg4NzggMC44MzU4NDkgMTcuNDE5NCAxLjEzODc5IDEzLjI1MzkgMi4xMjMzN0M5LjA4ODM2IDMuMTA3OTQgNS42ODAyMiA0LjAxNjc4IDMuNDgzODcgNS4zMDQzQzEuMjg3NTEgNi41OTE4MSAtMy40NzgyZS0wNiA4LjEwNjU0IC0zLjMzOTE2ZS0wNiA5LjY5N0wtMi45NTUxM2UtMDYgMTQuMDg5N0MtMi44MTYwOWUtMDYgMTUuNjgwMiAxLjI4NzUyIDE3LjI3MDYgMy40ODM4NyAxOC41NTgyQzYuMDU4OTEgMTkuNzY5OSA5LjE2NDEgMjEuMDU3NSAxMy4yNTM5IDIxLjY2MzNDMTcuMzQzNiAyMi4yNjkyIDIxLjgxMjEgMjIuOTUwOSAyNi44ODY0IDIyLjk1MDlDMzEuOTYwNyAyMi45NTA5IDM2LjM1MzUgMjIuOTUwOSA0MC40NDMyIDIyLjM0NUM0NC41MzMgMjEuNzM5MSA0OC4wMTY5IDIwLjQ1MTYgNTAuMjEzMiAxOS4xNjRDNTIuNzEyNSAxNy41NzM2IDU0IDE1Ljk4MzEgNTQgMTQuMzkyN0w1NCA5Ljk5OTk1QzU0IDguNDA5NDggNTIuNzEyNSA2LjgxOTAyIDUwLjUxNjIgNS42MDcyNEM0OC4zMTk4IDQuMzk1NDYgNDQuNTMzIDIuNzI5MjYgNDAuNDQzMiAyLjEyMzM3WlwiXG5cdFx0XHRcdGZpbGw9XCIjN0U4OTkzXCIvPjwvU1ZHPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0eyBtb2RhbFN0YXRlICYmIChcblx0XHRcdDxBY3Rpb25Nb2RhbFxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNoYW5nZU1vZGFsU3RhdGUgfVxuXHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdFx0XHR0aXRsZT17ICdFZGl0IFByZXNldCcgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IG1vZGFsUHJvcHMgPT4gPE1vZGFsRWRpdG9yXG5cdFx0XHRcdFx0eyAuLi5tb2RhbFByb3BzIH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0PC9BY3Rpb25Nb2RhbD5cblx0XHQpIH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdpdGhQcmVzZXQ7IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi8uLi9oZWxwZXJzL3Rvb2xzXCI7XG5cbmZ1bmN0aW9uIEZpZWxkV3JhcHBlcigge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB3cmFwQ2xhc3NlcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHZhbHVlSWZFbXB0eUxhYmVsID0gJydcblx0XHRcdFx0XHRcdFx0XHRcdCAgfSApIHtcblx0Y29uc3Qge1xuXHRcdEJhc2VDb250cm9sLFxuXHR9ID0gd3AuY29tcG9uZW50cztcblxuXHRjb25zdCB7XG5cdFx0dXNlU2VsZWN0LFxuXHR9ID0gd3AuZGF0YTtcblxuXHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XG5cdH0gKTtcblxuXHRjb25zdCBsYWJlbCA9IFRvb2xzLmdldExhYmVsKCBtZXRhLCBhdHRyaWJ1dGVzICk7XG5cblx0cmV0dXJuIChcblx0XHQ8QmFzZUNvbnRyb2wga2V5PXsgdW5pcUtleSggJ3BsYWNlSG9sZGVyX2Jsb2NrJyApIH1cblx0XHRcdFx0XHQgY2xhc3NOYW1lPXsgYGpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAgamV0LWZvcm0tYnVpbGRlci1yb3cgJHsgd3JhcENsYXNzZXMuam9pbiggJyAnICkgfWAgfT5cblx0XHRcdDxCYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fbGFiZWwnIH0+XG5cdFx0XHRcdFx0eyBsYWJlbC5uYW1lID8gbGFiZWwubmFtZSA6IHZhbHVlSWZFbXB0eUxhYmVsIH1cblx0XHRcdFx0XHR7IGF0dHJpYnV0ZXMucmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcXVpcmVkJyB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbC5tYXJrID8gbGFiZWwubWFyayA6ICcqJyB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdDxCYXNlQ29udHJvbCBrZXk9eyAnY3VzdG9tX2hlbHBfZGVzY3JpcHRpb24nIH0gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2Rlc2MnIH0+XG5cdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cblx0XHRcdFx0XHQgICBzdHlsZT17IHsgbWFyZ2luVG9wOiAnMHB4JyB9IH0+eyBhdHRyaWJ1dGVzLmRlc2MgfTwvc21hbGw+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkV3JhcHBlcjsiLCJjb25zdCB7XG5cdEJ1dHRvbixcblx0UG9wb3Zlcixcblx0UGFuZWxCb2R5LFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0dXNlU3RhdGUsXG59ID0gd3AuZWxlbWVudDtcblxuZnVuY3Rpb24gTWFjcm9zSW5zZXJ0ZXIoIHtcblx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuLFxuXHRcdFx0XHRcdFx0XHQgZmllbGRzLFxuXHRcdFx0XHRcdFx0XHQgb25GaWVsZENsaWNrLFxuXHRcdFx0XHRcdFx0XHQgY3VzdG9tTWFjcm9zLFxuXHRcdFx0XHRcdFx0IH0gKSB7XG5cblx0Y29uc3QgWyBzaG93UG9wb3Zlciwgc2V0UG9wb3ZlclN0YXRlIF0gPSB1c2VTdGF0ZSggKCkgPT4gZmFsc2UgKTtcblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy1pbnNlcnRlclwiPlxuXHRcdDxCdXR0b25cblx0XHRcdGlzVGVydGlhcnlcblx0XHRcdGlzU21hbGxcblx0XHRcdGljb249eyBzaG93UG9wb3ZlciA/ICduby1hbHQnIDogJ2FkbWluLXRvb2xzJyB9XG5cdFx0XHRsYWJlbD17ICdJbnNlcnQgbWFjcm9zJyB9XG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy10cmlnZ2VyXCJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdHNldFBvcG92ZXJTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXG5cdFx0XHQ8UG9wb3ZlclxuXHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGZpZWxkcy5sZW5ndGggJiYgPFBhbmVsQm9keSB0aXRsZT17ICdGb3JtIEZpZWxkcycgfT5cblx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoIGZpZWxkID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdmaWVsZF8nICsgZmllbGQubmFtZSB9PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggZmllbGQubmFtZSApXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD57ICclJyArIGZpZWxkLm5hbWUgKyAnJScgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+O1xuXHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cdFx0XHRcdHsgY3VzdG9tTWFjcm9zICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnQ3VzdG9tIE1hY3JvcycgfT5cblx0XHRcdFx0XHR7IGN1c3RvbU1hY3Jvcy5tYXAoIG1hY3JvcyA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnbWFjcm9zXycgKyBtYWNyb3MgfT5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIG1hY3JvcyApXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdD57ICclJyArIG1hY3JvcyArICclJyB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cblx0XHRcdDwvUG9wb3Zlcj5cblx0XHQpIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NJbnNlcnRlcjsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0QnV0dG9uR3JvdXAsXG5cdENhcmQsXG5cdENhcmRCb2R5LFxuXHRDYXJkSGVhZGVyLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSA9IHdwLmVsZW1lbnQ7XG5cblxuZnVuY3Rpb24gUmVwZWF0ZXJXaXRoU3RhdGUoIHtcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbixcblx0XHRcdFx0XHRcdFx0XHRJdGVtSGVhZGluZyxcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckNsYXNzZXMgPSBbXSxcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckl0ZW1DbGFzc2VzID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0bmV3SXRlbSxcblx0XHRcdFx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbCA9ICdBZGQgTmV3Jyxcblx0XHRcdFx0XHRcdFx0XHRpdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcblx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtcyxcblx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0b25BZGROZXdJdGVtLFxuXHRcdFx0XHRcdFx0XHRcdG9uUmVtb3ZlSXRlbSxcblx0XHRcdFx0XHRcdFx0XHRoZWxwID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVscFNvdXJjZToge30sXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogKCkgPT4gZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApIHtcblxuXHRjb25zdCBjbGFzc05hbWVzID0gWyAnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50JywgLi4ucmVwZWF0ZXJDbGFzc2VzIF0uam9pbiggJyAnICk7XG5cdGNvbnN0IGl0ZW1DbGFzc05hbWVzID0gWyAnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50LWl0ZW0nLCAuLi5yZXBlYXRlckl0ZW1DbGFzc2VzIF0uam9pbiggJyAnICk7XG5cblx0Y29uc3QgcGFyc2VkSXRlbXMgPSAoKSA9PiB7XG5cdFx0aWYgKCBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICkge1xuXHRcdFx0Y29uc3QgY2xvbmVJdGVtcyA9IFsgLi4uaXRlbXMgXTtcblxuXHRcdFx0Y2xvbmVJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIGNsb25lSXRlbXM7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIFsge1xuXHRcdFx0XHQuLi5uZXdJdGVtLFxuXHRcdFx0XHRfX3Zpc2libGU6IHRydWUsXG5cdFx0XHR9IF07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgWyBpdGVtc0RhdGEsIHNldEl0ZW1zRGF0YSBdID0gdXNlU3RhdGUoICgpID0+IHBhcnNlZEl0ZW1zKCkgKTtcblxuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XG5cblx0Y29uc3QgY2hhbmdlQ3VycmVudEl0ZW0gPSAoIHZhbHVlVG9TZXQsIGluZGV4ICkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRwcmV2WyBpbmRleCBdID0ge1xuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiBbIC4uLnByZXYgXTtcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XG5cdFx0cmV0dXJuIGNvbmZpcm0oIF9fKCBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSBpdGVtICR7IGluZGV4ICsgMSB9P2AsICdqZXQtZm9ybS1idWlsZGVyJyApICk7XG5cdH1cblxuXHRjb25zdCByZW1vdmVPcHRpb24gPSAoIGluZGV4ICkgPT4ge1xuXHRcdGlmIChcblx0XHRcdGlzU2FmZURlbGV0aW5nICYmICEgb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcblx0XHRcdG9uUmVtb3ZlSXRlbSAmJiAhIG9uUmVtb3ZlSXRlbSggaW5kZXgsIGl0ZW1zRGF0YSApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IGNsb25lUHJldiA9IFsgLi4ucHJldiBdO1xuXHRcdFx0Y2xvbmVQcmV2LnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0cmV0dXJuIGNsb25lUHJldjtcblx0XHR9ICk7XG5cdH1cblxuXHRjb25zdCBhZGROZXdJdGVtID0gKCB2YWx1ZSApID0+IHtcblx0XHRpZiAoIG9uQWRkTmV3SXRlbSApIHtcblx0XHRcdG9uQWRkTmV3SXRlbSggdmFsdWUsIGl0ZW1zRGF0YSApO1xuXHRcdH1cblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4gWyAuLi5wcmV2LCB7XG5cdFx0XHQuLi52YWx1ZSxcblx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcblx0XHR9IF0gKTtcblx0fVxuXG5cdGNvbnN0IGNsb25lSXRlbSA9ICggaW5kZXggKSA9PiB7XG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcblx0XHRcdGNvbnN0IFsgYmVmb3JlLCBhZnRlciBdID0gWyBwcmV2LnNsaWNlKCAwLCBpbmRleCArIDEgKSwgcHJldi5zbGljZSggaW5kZXggKyAxICkgXTtcblx0XHRcdHJldHVybiBbIC4uLmJlZm9yZSwgbG9kYXNoLmFzc2lnbigge30sIHByZXZbIGluZGV4IF0gKSwgLi4uYWZ0ZXIgXTtcblx0XHR9ICk7XG5cdH1cblxuXHRjb25zdCBtb3ZlUmVwZWF0ZXJJdGVtID0gKCB7IG9sZEluZGV4LCBuZXdJbmRleCB9ICkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRbIHByZXZbIG5ld0luZGV4IF0sIHByZXZbIG9sZEluZGV4IF0gXSA9IFsgcHJldlsgb2xkSW5kZXggXSwgcHJldlsgbmV3SW5kZXggXSBdO1xuXHRcdFx0cmV0dXJuIFsgLi4ucHJldiBdO1xuXHRcdH0gKTtcblx0fVxuXG5cdGNvbnN0IG1vdmVVcCA9ICggaW5kZXggKSA9PiB7XG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCAtIDEgfSApO1xuXHR9XG5cdGNvbnN0IG1vdmVEb3duID0gKCBpbmRleCApID0+IHtcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4ICsgMSB9ICk7XG5cdH1cblxuXHRjb25zdCBpc0Rpc2FibGVkRW5kID0gKCBpbmRleCApID0+IHtcblx0XHRyZXR1cm4gISAoIGluZGV4IDwgaXRlbXNEYXRhLmxlbmd0aCAtIDEgKTtcblx0fVxuXG5cdGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoIGluZGV4ICkgPT4ge1xuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XG5cdFx0XHRwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSA9ICEgKCBwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSApO1xuXHRcdFx0cmV0dXJuIFsgLi4ucHJldiBdO1xuXHRcdH0gKTtcblx0fVxuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0Y29uc3QgY2xvbmVJdGVtcyA9IFsgLi4uaXRlbXNEYXRhIF07XG5cblx0XHRcdGlmICggb25TYXZlSXRlbXMgKSB7XG5cdFx0XHRcdGNsb25lSXRlbXMuZm9yRWFjaCggKCBpdGVtLCBpbmRleCApID0+IHtcblxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGl0ZW1LZXkgaW4gaXRlbSApIHtcblx0XHRcdFx0XHRcdGlmICggaXRlbUtleS5zdGFydHNXaXRoKCAnX18nICkgKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBjbG9uZUl0ZW1zWyBpbmRleCBdWyBpdGVtS2V5IF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0b25TYXZlSXRlbXMoIGNsb25lSXRlbXMgKTtcblx0XHRcdH1cblx0XHRcdG9uVW5Nb3VudCgpO1xuXHRcdH1cblx0XHRlbHNlIGlmICggZmFsc2UgPT09IGlzU2F2ZUFjdGlvbiApIHtcblx0XHRcdG9uVW5Nb3VudCgpO1xuXHRcdH1cblx0fSwgWyBpc1NhdmVBY3Rpb24gXSApO1xuXG5cdGNvbnN0IGdldFJlcGVhdGVySXRlbUlkID0gaW5kZXggPT4gYGpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1fJHsgaW5kZXggfWA7XG5cblxuXHRjb25zdCBSZXBlYXRlckl0ZW0gPSAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiA8Q2FyZFxuXHRcdGlzRWxldmF0ZWQ9eyB0cnVlIH1cblx0XHRjbGFzc05hbWU9eyBpdGVtQ2xhc3NOYW1lcyB9XG5cdFx0a2V5PXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxuXHRcdGlkPXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxuXHQ+XG5cdFx0PENhcmRIZWFkZXIgY2xhc3NOYW1lPXsgJ3JlcGVhdGVyX19pdGVtX19oZWFkZXInIH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbV9fbGVmdC1oZWFkaW5nJz5cblx0XHRcdFx0PEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9ucycgfT5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRpY29uPXsgY3VycmVudEl0ZW0uX192aXNpYmxlID8gJ3Zpc2liaWxpdHknIDogJ2hpZGRlbicgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRvZ2dsZVZpc2libGUoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17ICEgQm9vbGVhbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LXVwLWFsdDInIH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlVXAoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWRFbmQoIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy1kb3duLWFsdDInIH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlRG93biggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9PlxuXHRcdFx0XHRcdFx0XHR7IEl0ZW1IZWFkaW5nICYmIDxJdGVtSGVhZGluZ1xuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKSB9XG5cdFx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHR7ICEgSXRlbUhlYWRpbmcgJiYgYCMkeyBpbmRleCArIDEgfWAgfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QnV0dG9uR3JvdXA+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gY2xvbmVJdGVtKCBpbmRleCApIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdDbG9uZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0PC9DYXJkSGVhZGVyPlxuXHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxuXHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW1fX2NvbnRlbnQnIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuICYmIDxSZWFjdC5GcmFnbWVudFxuXHRcdFx0XHRrZXk9eyBgcmVwZWF0ZXItY29tcG9uZW50X19pdGVtXyR7IGluZGV4IH1gIH1cblx0XHRcdD5cblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHtcblx0XHRcdFx0XHRjdXJyZW50SXRlbSxcblx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbTogZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKVxuXHRcdFx0XHR9ICkgfVxuXHRcdFx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XG5cdFx0XHR7ICEgY2hpbGRyZW4gJiYgJ1NldCB1cCB5b3VyIFJlcGVhdGVyIFRlbXBsYXRlLCBwbGVhc2UuJyB9XG5cdFx0PC9DYXJkQm9keT4gfVxuXHQ8L0NhcmQ+O1xuXG5cdGNvbnN0IHtcblx0XHRoZWxwU291cmNlLFxuXHRcdGhlbHBWaXNpYmxlLFxuXHRcdGhlbHBLZXksXG5cdH0gPSBoZWxwO1xuXG5cdGNvbnN0IGlzVmlzaWJsZUhlbHAgPSBoZWxwVmlzaWJsZSggaXRlbXNEYXRhICkgJiYgaGVscFNvdXJjZSAmJiBoZWxwU291cmNlWyBoZWxwS2V5IF07XG5cblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWVzIH1cblx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicgfVxuXHQ+XG5cdFx0eyBpc1Zpc2libGVIZWxwICYmIDxwPnsgaGVscFNvdXJjZVsgaGVscEtleSBdLmxhYmVsIH08L3A+IH1cblxuXHRcdHsgMCA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPFRvZ2dsZUNvbnRyb2xcblx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJyApIH1cblx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XG5cdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XG5cdFx0Lz4gfVxuXHRcdHsgaXRlbXNEYXRhLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiB7XG5cdFx0XHRyZXR1cm4gUmVwZWF0ZXJJdGVtKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICk7XG5cdFx0fSApIH1cblx0XHR7IDEgPCBpdGVtc0RhdGEubGVuZ3RoICYmIDxUb2dnbGVDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyJ1xuXHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxuXHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cblx0XHQvPiB9XG5cdFx0PEJ1dHRvblxuXHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCBuZXdJdGVtICkgfVxuXHRcdD5cblx0XHRcdHsgYWRkTmV3QnV0dG9uTGFiZWwgfVxuXHRcdDwvQnV0dG9uPlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyV2l0aFN0YXRlOyIsImZ1bmN0aW9uIEhvcml6b250YWxMaW5lKCBwcm9wcyApIHtcblx0cmV0dXJuIDxociBzdHlsZT17IHsgLi4ucHJvcHMgfSB9Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxMaW5lOyIsImltcG9ydCB3aXRoUHJlc2V0IGZyb20gXCIuL3ByZXNldC1lZGl0b3JcIjtcbmltcG9ydCB7XG5cdEdsb2JhbEZpZWxkLFxuXHRNYXBGaWVsZFxufSBmcm9tIFwiLi9wcmVzZXQtcmVuZGVyXCI7XG5cbmNvbnN0IHtcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcblx0XHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxuXHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXG5cdFx0XHRcdFx0XHRcdHBhcnNlVmFsdWUsXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGUsXG5cdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcblx0XHRcdFx0XHRcdH0gKSB7XG5cblx0Y29uc3QgcG9zaXRpb24gPSAnZHluYW1pYyc7XG5cdGNvbnN0IFsgc3RhdGVWYWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZVZhbHVlKCB2YWx1ZSApICk7XG5cblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggbmV3VmFsdWUsIG5hbWUgKSA9PiB7XG5cdFx0c2V0VmFsdWUoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICkgKTtcblx0fVxuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0aWYgKCBvblNhdmVQcmVzZXQgKSB7XG5cdFx0XHRcdG9uU2F2ZVByZXNldCggSlNPTi5zdHJpbmdpZnkoIHN0YXRlVmFsdWUgKSApO1xuXHRcdFx0fVxuXHRcdFx0b25Vbk1vdW50KCk7XG5cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9XG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcblxuXHRyZXR1cm4gPD5cblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcuZ2xvYmFsX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8R2xvYmFsRmllbGRcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZSB9XG5cdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdGRhdGE9eyBkYXRhIH1cblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxuXHRcdC8+ICkgfVxuXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPE1hcEZpZWxkXG5cdFx0XHRrZXk9eyBgY3VycmVudF9maWVsZF8keyBkYXRhLm5hbWUgfV8keyBpbmRleCB9YCB9XG5cdFx0XHRjdXJyZW50U3RhdGU9eyBzdGF0ZVZhbHVlIH1cblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSBdIH1cblx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0ZGF0YT17IGRhdGEgfVxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxuXHRcdC8+ICkgfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQoIER5bmFtaWNQcmVzZXQgKTsiLCJmdW5jdGlvbiB3aXRoUHJlc2V0KCBXcmFwcGVkQ29tcG9uZW50ICkge1xuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XG5cblx0XHRjb25zdCBwYXJzZVZhbHVlID0gKCkgPT4ge1xuXHRcdFx0bGV0IHZhbCA9IHt9O1xuXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgcHJvcHMudmFsdWUgKSB7XG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBwcm9wcy52YWx1ZSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhbCA9IEpTT04ucGFyc2UoIHByb3BzLnZhbHVlICk7XG5cdFx0XHRcdFx0aWYgKCAnbnVtYmVyJyA9PT0gdHlwZW9mIHZhbCApIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoIGV4Y2VwdGlvbiApIHtcblx0XHRcdFx0XHR2YWwgPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFsLmpldF9wcmVzZXQgPSB0cnVlO1xuXG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlzVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBwb3NpdGlvbiApID0+IHtcblx0XHRcdHJldHVybiAoICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiA9PT0gZGF0YS5wb3NpdGlvbiApXG5cdFx0XHRcdHx8ICEgZGF0YS5wb3NpdGlvbiB8fCAncXVlcnlfdmFyJyAhPT0gY3VycmVudFN0YXRlLmZyb20gKSAmJiBpc0dsb2JhbFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBpc0dsb2JhbFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSApID0+IHtcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xuXHRcdFx0XHRzd2l0Y2ggKCBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XG5cdFx0XHRcdFx0Y2FzZSAncXVlcnlfdmFyJzpcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdCggJ3Bvc3QnID09PSBjdXJyZW50U3RhdGUuZnJvbSAmJiAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLnBvc3RfZnJvbSApXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3VzZXInID09PSBjdXJyZW50U3RhdGUuZnJvbSAmJiAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLnVzZXJfZnJvbSApXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tIClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlzQ3VycmVudEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBwb3NpdGlvbiApID0+IHtcblxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiAhPT0gZGF0YS5wb3NpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiAhIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpc01hcEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBmaWVsZCApID0+IHtcblxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdGlmICggISBjdXJyZW50U3RhdGUuZmllbGRzX21hcCB8fCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF1bIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdH07XG5cblx0XHRjb25zdCBleGNsdWRlT3B0aW9ucyA9ICggc2VsZWN0T3B0aW9ucyApID0+IHtcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBbIC4uLnNlbGVjdE9wdGlvbnMgXTtcblx0XHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24sIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRpZiAoIHByb3BzLmV4Y2x1ZGVTb3VyY2VzICYmIHByb3BzLmV4Y2x1ZGVTb3VyY2VzLmluY2x1ZGVzKCBvcHRpb24udmFsdWUgKSApIHtcblx0XHRcdFx0XHRvcHRpb25zLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdFx0cmV0dXJuIG9wdGlvbnM7XG5cdFx0fTtcblxuXHRcdHJldHVybiA8V3JhcHBlZENvbXBvbmVudFxuXHRcdFx0a2V5PSd3cmFwcGVkLXByZXNldC1lZGl0b3InXG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdHBhcnNlVmFsdWU9eyBwYXJzZVZhbHVlIH1cblx0XHRcdGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XG5cdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XG5cdFx0XHRleGNsdWRlT3B0aW9ucz17IGV4Y2x1ZGVPcHRpb25zIH1cblx0XHQvPjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0O1xuIiwiY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBHbG9iYWxGaWVsZCgge1xuXHRcdFx0XHRcdFx0XHRcdCBkYXRhLFxuXHRcdFx0XHRcdFx0XHRcdCB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHQgaW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0IG9uQ2hhbmdlVmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0IGlzVmlzaWJsZSxcblx0XHRcdFx0XHRcdFx0XHQgZXhjbHVkZU9wdGlvbnMgPSBvcHRpb25zID0+IG9wdGlvbnMsXG5cdFx0XHRcdFx0XHRcdFx0IHBvc2l0aW9uXG5cdFx0XHRcdFx0XHRcdCB9ICkge1xuXG5cdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiAoIGlzVmlzaWJsZSggdmFsdWUsIGRhdGEsIHBvc2l0aW9uICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGRhdGEubmFtZSApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAoIGlzVmlzaWJsZSggdmFsdWUsIGRhdGEsIHBvc2l0aW9uICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyggZGF0YS5vcHRpb25zICkgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHR9XG5cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gQXZhaWxhYmxlTWFwRmllbGQoIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZpZWxkc01hcCxcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZpZWxkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgaW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgIG9uQ2hhbmdlVmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBpc01hcEZpZWxkVmlzaWJsZVxuXHRcdFx0XHRcdFx0XHRcdCAgIH0gKSB7XG5cblx0bGV0IGN1cnJlbnRWYWwgPSBudWxsO1xuXG5cdGlmICggISBmaWVsZHNNYXAgKSB7XG5cdFx0ZmllbGRzTWFwID0ge307XG5cdH1cblxuXHRjdXJyZW50VmFsID0gZmllbGRzTWFwWyBmaWVsZCBdO1xuXG5cdGlmICggISBjdXJyZW50VmFsICkge1xuXHRcdGN1cnJlbnRWYWwgPSB7fTtcblx0fVxuXG5cdGNvbnN0IEF2YWlsYWJsZUZpZWxkV3JhcHBlciA9ICggeyBmaWVsZCwgbmFtZSwgaW5kZXgsIGZJbmRleCwgY2hpbGRyZW4gfSApID0+IDw+XG5cdFx0PHNwYW4gY2xhc3NOYW1lPSdqZXQtbGFiZWwtb3ZlcmZsb3cnPnsgZmllbGQgfTwvc3Bhbj5cblx0XHQ8ZGl2XG5cdFx0XHRrZXk9eyBmaWVsZCArIG5hbWUgKyBpbmRleCArIGZJbmRleCB9XG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cblx0XHQ+XG5cdFx0XHR7IGNoaWxkcmVuIH1cblx0XHQ8L2Rpdj5cblx0PC8+O1xuXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXsgYG1hcF9maWVsZF9wcmVzZXRfJHsgZmllbGQgKyBpbmRleCB9YCB9PlxuXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGZJbmRleCApID0+IHtcblx0XHRcdGNvbnN0IHByb3BzID0geyBmaWVsZCwgbmFtZTogZGF0YS5uYW1lLCBpbmRleCwgZkluZGV4IH07XG5cblx0XHRcdGNvbnN0IHVuaXFLZXkgPSAnY29udHJvbF8nICsgZmllbGQgKyBkYXRhLm5hbWUgKyBpbmRleCArIGZJbmRleDtcblxuXHRcdFx0c3dpdGNoICggZGF0YS50eXBlICkge1xuXHRcdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcblx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkgfT5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRWYWxbIGRhdGEubmFtZSBdIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWxcblx0XHRcdFx0XHRcdFx0XHRcdH0sICdmaWVsZHNfbWFwJyApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9BdmFpbGFibGVGaWVsZFdyYXBwZXI+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcblx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkgfT5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0XHQvL2xhYmVsPXsgZGF0YS5sYWJlbCB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmZpZWxkc01hcCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSApIH1cblx0PC9SZWFjdC5GcmFnbWVudD47XG59XG5cbmZ1bmN0aW9uIE1hcEZpZWxkKCB7XG5cdFx0XHRcdFx0XHRcdCAgZGF0YSxcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0ICBpbmRleCxcblx0XHRcdFx0XHRcdFx0ICBjdXJyZW50U3RhdGUsXG5cdFx0XHRcdFx0XHRcdCAgb25DaGFuZ2VWYWx1ZSxcblx0XHRcdFx0XHRcdFx0ICBpc0N1cnJlbnRGaWVsZFZpc2libGUsXG5cdFx0XHRcdFx0XHRcdCAgcG9zaXRpb24gPSAnZ2VuZXJhbCdcblx0XHRcdFx0XHRcdCAgfSApIHtcblxuXHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdHJldHVybiAoIGlzQ3VycmVudEZpZWxkVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICkgJiZcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyAnY29udHJvbF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7XG5cdEdsb2JhbEZpZWxkLFxuXHRBdmFpbGFibGVNYXBGaWVsZCxcblx0TWFwRmllbGRcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRCdXR0b24sXG59ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gUmVxdWVzdEJ1dHRvbigge1xuXHRcdFx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0XHRcdFx0YWpheEFyZ3MgPSB7fSxcblx0XHRcdFx0XHRcdFx0b25TdWNjZXNzUmVxdWVzdCA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRvbkZhaWxSZXF1ZXN0ID0gKCkgPT4ge30sXG5cdFx0XHRcdFx0XHRcdG9uTG9hZGluZyA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWUgPSAnJyxcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4gPSAoKSA9PiB7fVxuXHRcdFx0XHRcdFx0fSApIHtcblxuXHRjb25zdCBkZWZhdWx0VmFsaWRhdGUgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGpRdWVyeS5hamF4KCB7IHVybDogYWpheHVybCwgdHlwZTogJ1BPU1QnLCBkYXRhOiBhamF4QXJncyB9ICk7XG5cdH07XG5cblx0Y29uc3QgcmVxdWVzdCA9ICgpID0+IHtcblx0XHRvbkxvYWRpbmcoKTtcblxuXHRcdGRlZmF1bHRWYWxpZGF0ZSgpXG5cdFx0LmRvbmUoIHJlc3BvbnNlID0+IHJlc3BvbnNlLnN1Y2Nlc3MgPyBvblN1Y2Nlc3NSZXF1ZXN0KCByZXNwb25zZSApIDogb25GYWlsUmVxdWVzdCgpIClcblx0XHQuZmFpbCggKCkgPT4gb25GYWlsUmVxdWVzdCgpICk7XG5cdH07XG5cblx0cmV0dXJuIDxCdXR0b25cblx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxuXHRcdGlzUHJpbWFyeVxuXHRcdG9uQ2xpY2s9eyByZXF1ZXN0IH1cblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHQ+XG5cdFx0eyBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XG5cdFx0eyBsYWJlbCB9XG5cdDwvQnV0dG9uPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEJ1dHRvbjtcbiIsImltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gXCIuL3JlcXVlc3QtYnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzIH0gZnJvbSBcIi4uL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyXCI7XG5cbmZ1bmN0aW9uIFJlcXVlc3RMb2FkaW5nQnV0dG9uKCB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgbGFiZWwsXG5cdFx0XHRcdFx0XHRcdFx0ICAgYWpheEFyZ3MgPSB7fSxcblx0XHRcdFx0XHRcdFx0XHQgICBvblN1Y2Nlc3NSZXF1ZXN0ID0gKCkgPT4ge30sXG5cdFx0XHRcdFx0XHRcdFx0ICAgb25GYWlsUmVxdWVzdCA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHQgICB9ICkge1xuXG5cdGNvbnN0IFtcblx0XHRjbGFzc05hbWUsXG5cdFx0c2V0TG9hZGluZ0NsYXNzLFxuXHRcdGNsZWFyTG9hZGluZ0NsYXNzXG5cdF0gPSB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzKCk7XG5cblx0cmV0dXJuIDxSZXF1ZXN0QnV0dG9uXG5cdFx0YWpheEFyZ3M9eyBhamF4QXJncyB9XG5cdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0b25Mb2FkaW5nPXsgc2V0TG9hZGluZ0NsYXNzIH1cblx0XHRvblN1Y2Nlc3NSZXF1ZXN0PXsgcmVzcG9uc2UgPT4ge1xuXHRcdFx0Y2xlYXJMb2FkaW5nQ2xhc3MoKTtcblx0XHRcdG9uU3VjY2Vzc1JlcXVlc3QoIHJlc3BvbnNlIClcblx0XHR9IH1cblx0XHRvbkZhaWxSZXF1ZXN0PXsgKCkgPT4ge1xuXHRcdFx0Y2xlYXJMb2FkaW5nQ2xhc3MoKTtcblx0XHRcdG9uRmFpbFJlcXVlc3QoKTtcblx0XHR9IH1cblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHQ+XG5cdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxuXHQ8L1JlcXVlc3RCdXR0b24+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TG9hZGluZ0J1dHRvbjsiLCJpbXBvcnQgUmVxdWVzdEJ1dHRvbiBmcm9tIFwiLi9yZXF1ZXN0LWJ1dHRvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWxpZENsYXNzZXMgfSBmcm9tIFwiLi4vaGVscGVycy9ob29rcy9ob29rcy1oZWxwZXJcIjtcblxuZnVuY3Rpb24gVmFsaWRhdGVCdXR0b24oIHtcblx0XHRcdFx0XHRcdFx0IGluaXRpYWxWYWxpZCxcblx0XHRcdFx0XHRcdFx0IGxhYmVsLFxuXHRcdFx0XHRcdFx0XHQgYWpheEFyZ3MgPSB7fSxcblx0XHRcdFx0XHRcdFx0IG9uVmFsaWQgPSAoKSA9PiB7fSxcblx0XHRcdFx0XHRcdFx0IG9uSW52YWxpZCA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0IH0gKSB7XG5cblx0Y29uc3QgW1xuXHRcdGNsYXNzTmFtZSxcblx0XHRzZXRWYWxpZENsYXNzLFxuXHRcdHNldEludmFsaWRDbGFzcyxcblx0XHRzZXRMb2FkaW5nQ2xhc3Ncblx0XSA9IHVzZVN0YXRlVmFsaWRDbGFzc2VzKCBpbml0aWFsVmFsaWQgfHwgZmFsc2UgKTtcblxuXHRjb25zdCBzZXRWYWxpZCA9IHJlc3BvbnNlID0+IHtcblx0XHRzZXRWYWxpZENsYXNzKCk7XG5cdFx0b25WYWxpZCggcmVzcG9uc2UgKTtcblx0fTtcblxuXHRjb25zdCBzZXRJbnZhbGlkID0gKCkgPT4ge1xuXHRcdHNldEludmFsaWRDbGFzcygpO1xuXHRcdG9uSW52YWxpZCgpO1xuXHR9O1xuXG5cdHJldHVybiA8UmVxdWVzdEJ1dHRvblxuXHRcdGFqYXhBcmdzPXsgYWpheEFyZ3MgfVxuXHRcdGxhYmVsPXsgbGFiZWwgfVxuXHRcdG9uTG9hZGluZz17IHNldExvYWRpbmdDbGFzcyB9XG5cdFx0b25TdWNjZXNzUmVxdWVzdD17IHNldFZhbGlkIH1cblx0XHRvbkZhaWxSZXF1ZXN0PXsgc2V0SW52YWxpZCB9XG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cblx0PlxuXHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cblx0PC9SZXF1ZXN0QnV0dG9uPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGVCdXR0b247IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsS2V5ID0gJ2xhYmVsJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRLZXkgPSAncmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICkge1xuXHRjb25zdCBbIG5hbWUsIGRhdGEgXSA9IGZpZWxkO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93IGZpZWxkcy1tYXAtY29udHJvbFwiXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1maWVsZC1tYXBfX3Jvdy1sYWJlbFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fbGFiZWwnIH0+XG5cdFx0XHRcdFx0eyAoIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgJiYgZGF0YVsgbGFiZWxLZXkgXSApICYmIGRhdGFbIGxhYmVsS2V5IF0gfVxuXHRcdFx0XHRcdHsgKCAhIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgKSAmJiBkYXRhIH1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggcmVxdWlyZWRLZXkgKSAmJiBkYXRhWyByZXF1aXJlZEtleSBdICkgJiZcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX3JlcXVpcmVkJyB9PiAqPC9zcGFuPiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvZGl2PlxuXHQpO1xufSIsImltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tIFwiLi4vaG9va3MvaG9va3MtaGVscGVyXCI7XG5pbXBvcnQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMgZnJvbSBcIi4uL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXNcIjtcblxuXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uc0J5VHlwZSA9IHR5cGUgPT4ge1xuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcblxuXHRyZXR1cm4gYWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbGl6ZUhlbHBlciA9IG5hbWUgPT4ge1xuXHRyZXR1cm4gbmFtZSA/IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyWyBuYW1lIF0gOiB3aW5kb3cuSmV0RkJMb2NhbGl6ZUhlbHBlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25CeVR5cGVMaXN0ID0gKCBhY3Rpb25UeXBlLCB3aXRoRGVzYyA9IGZhbHNlICkgPT4ge1xuXHRyZXR1cm4gZ2V0QWN0aW9uc0J5VHlwZSggYWN0aW9uVHlwZSApLm1hcCggYWN0aW9uID0+IHtcblx0XHRjb25zdCBuZXdBY3Rpb24gPSB7XG5cdFx0XHR2YWx1ZTogYWN0aW9uLmlkLFxuXHRcdFx0bGFiZWw6IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldEFjdGlvbkxhYmVsJyApKCBhY3Rpb24udHlwZSApXG5cdFx0fTtcblx0XHRpZiAoIHdpdGhEZXNjICkge1xuXHRcdFx0bmV3QWN0aW9uLmxhYmVsICs9IGAgKCR7IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9KWBcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3QWN0aW9uO1xuXHR9ICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uU2V0dGluZ3MgPSBhY3Rpb25JZCA9PiB7XG5cdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xuXHRjb25zdCBhY3Rpb24gPSBhY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiBhY3Rpb25JZCA9PT0gYWN0aW9uLmlkICk7XG5cblx0cmV0dXJuICggYWN0aW9uICYmIGFjdGlvbi5zZXR0aW5ncyApID8gYWN0aW9uLnNldHRpbmdzIDogZmFsc2U7XG59O1xuXG4iLCJpbXBvcnQgd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0IGZyb20gXCIuL2FjdGlvbi13cmFwcGVyXCI7XG5cbmZ1bmN0aW9uIGFkZEFjdGlvbiggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKSB7XG5cdHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgPSB3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zIHx8IHt9O1xuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zWyBhY3Rpb25UeXBlIF0gPSB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEFjdGlvbjtcbiIsImltcG9ydCB7IGZyb21Mb2NhbGl6ZUhlbHBlciB9IGZyb20gXCIuL2FjdGlvbi1oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0KCBhY3Rpb25UeXBlLCBBY3Rpb25JbnN0YW5jZSApIHtcblx0Y29uc3QgbG9jYWxpemVkRGF0YSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb25UeXBlICk7XG5cblx0cmV0dXJuIHByb3BzID0+IHtcblx0XHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFx0WyBrZXkgXTogdmFsdWVcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZ2V0TWFwRmllbGQgPSAoIHsgc291cmNlID0gJ2ZpZWxkc19tYXAnLCBuYW1lIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xuXG5cdFx0XHRpZiAoIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnJztcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2V0TWFwRmllbGQgPSAoIHsgc291cmNlID0gJ2ZpZWxkc19tYXAnLCBuYW1lRmllbGQsIHZhbHVlIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBmaWVsZHNNYXAgPSB7XG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcblx0XHRcdFx0WyBuYW1lRmllbGQgXTogdmFsdWUsXG5cdFx0XHR9O1xuXG5cdFx0XHRwcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWRkaXRpb25hbFByb3BzID0geyBvbkNoYW5nZVNldHRpbmcsIGdldE1hcEZpZWxkLCBzZXRNYXBGaWVsZCB9O1xuXG5cdFx0cmV0dXJuIDxBY3Rpb25JbnN0YW5jZVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHR7IC4uLmxvY2FsaXplZERhdGEgfVxuXHRcdFx0eyAuLi5hZGRpdGlvbmFsUHJvcHMgfVxuXHRcdC8+XG5cdH07XG59IiwiXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tQYXJzZXJGdW5jICkgPT4ge1xuXHRjb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tzICkgPT4ge1xuXG5cdFx0YmxvY2tzID0gYmxvY2tzIHx8IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XG5cblx0XHRibG9ja3MubWFwKCBibG9jayA9PiB7XG5cdFx0XHRibG9ja1BhcnNlckZ1bmMoIGJsb2NrICk7XG5cblx0XHRcdGlmICggYmxvY2suaW5uZXJCbG9ja3MubGVuZ3RoICkge1xuXHRcdFx0XHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2suaW5uZXJCbG9ja3MgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH07XG5cblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoKTtcbn1cblxuY29uc3QgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyA9ICggZXhjbHVkZSA9IFtdLCBwbGFjZWhvbGRlciA9IGZhbHNlICkgPT4ge1xuXHRjb25zdCBmb3JtRmllbGRzID0gW107XG5cblx0bGV0IHNraXBGaWVsZHMgPSBbICdzdWJtaXQnLCAnZm9ybS1icmVhaycsICdoZWFkaW5nJywgJ2dyb3VwLWJyZWFrJywgLi4uZXhjbHVkZSBdO1xuXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxuXHRcdFx0JiYgYmxvY2suYXR0cmlidXRlcy5uYW1lXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXG5cdFx0KSB7XG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxuXHRcdFx0XHRuYW1lOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdFx0dmFsdWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0gKTtcblxuXHRyZXR1cm4gcGxhY2Vob2xkZXJcblx0XHQ/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cblx0XHQ6IGZvcm1GaWVsZHM7XG59XG5cbmNvbnN0IGdldEZpZWxkc1dpdGhvdXRDdXJyZW50ID0gKCBwbGFjZWhvbGRlciA9IGZhbHNlICkgPT4ge1xuXG5cdGNvbnN0IHNraXBGaWVsZHMgPSBbICdzdWJtaXQnLCAnZm9ybS1icmVhaycsICdoZWFkaW5nJywgJ2dyb3VwLWJyZWFrJyBdO1xuXHRjb25zdCBmb3JtRmllbGRzID0gW107XG5cblx0Y29uc3QgY3VycmVudCA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9jaygpO1xuXG5cdGlmICggbnVsbCA9PT0gY3VycmVudCApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcblx0XHRcdCYmIGN1cnJlbnQuY2xpZW50SWQgIT09IGJsb2NrLmNsaWVudElkXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXG5cdFx0KSB7XG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0cmV0dXJuIHBsYWNlaG9sZGVyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXG5cdFx0OiBmb3JtRmllbGRzO1xufTtcblxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzID0gKCBleGNsdWRlID0gW10gKSA9PiB7XG5cdGxldCBmaWVsZHMgPSBbXTtcblx0Y29uc3QgYmxvY2tzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggZXhjbHVkZSApO1xuXG5cdGlmICggYmxvY2tzICkge1xuXHRcdGJsb2Nrcy5mb3JFYWNoKCBpdGVtID0+IGZpZWxkcy5wdXNoKCBpdGVtLm5hbWUgKSApO1xuXHR9XG5cdHJldHVybiBmaWVsZHM7XG59XG5cbmNvbnN0IGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyA9ICggYmxvY2tOYW1lICkgPT4ge1xuXHRjb25zdCBmaWVsZHMgPSBnZXRBdmFpbGFibGVGaWVsZHMoIFsgYmxvY2tOYW1lIF0gKTtcblxuXHRsZXQgZmllbGRzU3RyaW5nID0gW107XG5cdGZpZWxkcy5mb3JFYWNoKCBmdW5jdGlvbiAoIGl0ZW0gKSB7XG5cdFx0ZmllbGRzU3RyaW5nLnB1c2goICclRklFTEQ6OicgKyBpdGVtICsgJyUnICk7XG5cdH0gKTtcblxuXHRyZXR1cm4gX18oICdBdmFpbGFibGUgZmllbGRzOiAnICkgKyBmaWVsZHNTdHJpbmcuam9pbiggJywgJyApO1xufVxuXG5cbmNvbnN0IGdldElubmVyQmxvY2tzID0gKCBjbGllbnRJZCApID0+IHtcblx0Y29uc3QgYmxvY2sgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrKCBjbGllbnRJZCApO1xuXHRyZXR1cm4gYmxvY2sgPyBibG9jay5pbm5lckJsb2NrcyA6IFtdO1xufVxuXG5jb25zdCBnZXRGb3JtRmllbGRzQnlCbG9jayA9ICggYmxvY2tFeGNsdWRlICkgPT4ge1xuXHRyZXR1cm4gKCkgPT4gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggWyBibG9ja0V4Y2x1ZGUubmFtZSBdICk7XG59XG5cblxuZXhwb3J0IHtcblx0Z2V0Rm9ybUZpZWxkc0J5QmxvY2ssXG5cdGdldElubmVyQmxvY2tzLFxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcblx0Z2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXG59O1xuXG4iLCJpbXBvcnQge1xuXHRmcm9tTG9jYWxpemVIZWxwZXIsXG5cdGdldEFjdGlvblNldHRpbmdzLFxufSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb24taGVscGVyXCI7XG5cbmZ1bmN0aW9uIGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB7XG5cdGNvbnN0IHsgZ2F0ZXdheUF0dHJzLCBsYWJlbCB9ID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvbi50eXBlICk7XG5cdGNvbnN0IGFjdGlvblNldHRpbmdzID0gZ2V0QWN0aW9uU2V0dGluZ3MoIGFjdGlvbi5pZCApO1xuXG5cdGNvbnN0IHZhbHVlID0gYXR0ciA9PiB7XG5cdFx0aWYgKCBhY3Rpb25TZXR0aW5nc1sgYXR0ciBdICkge1xuXHRcdFx0cmV0dXJuIGFjdGlvblNldHRpbmdzWyBhdHRyIF07XG5cdFx0fVxuXHRcdGlmICggYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF0gJiYgYWN0aW9uU2V0dGluZ3NbIGFjdGlvbi50eXBlIF1bIGF0dHIgXSApIHtcblx0XHRcdHJldHVybiBhY3Rpb25TZXR0aW5nc1sgYWN0aW9uLnR5cGUgXVsgYXR0ciBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJ05VTEwnO1xuXHR9O1xuXG5cdGNvbnN0IGxhYmVsV2l0aEF0dHJzID0gZ2F0ZXdheUF0dHJzKCkubWFwKCBhdHRyID0+ICggYCR7IGxhYmVsKCBhdHRyICkgfSAkeyB2YWx1ZSggYXR0ciApIH1gICkgKTtcblxuXHRyZXR1cm4gbGFiZWxXaXRoQXR0cnMuam9pbiggJywgJyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYXRld2F5QWN0aW9uQXR0cmlidXRlczsiLCJleHBvcnQgY29uc3QgZ2F0ZXdheUF0dHIgPSAoIGF0dHIgPSBmYWxzZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xuXG5cdGlmICggISBhdHRyICkge1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cdGlmICggISBkYXRhWyBhdHRyIF0gKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xuXG5cdHJldHVybiBuYW1lID0+IHNvdXJjZVsgbmFtZSBdID8gc291cmNlWyBuYW1lIF0gOiBpc0VtcHR5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdhdGV3YXlMYWJlbCA9ICggdHlwZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xuXG5cdHJldHVybiBhdHRyID0+IGxhYmVsKCB0eXBlICkgPyBsYWJlbCggdHlwZSApWyBhdHRyIF0gOiBpc0VtcHR5O1xufVxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJHYXRld2F5ID0gKCBpZCwgY2FsbGJhY2sgKSA9PiB7XG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcblx0d2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdID0gY2FsbGJhY2s7XG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyR2F0ZXdheSA9ICggaWQsIHByb3BzICkgPT4ge1xuXHRpZiAoICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0IHx8ICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IEdhdGV3YXlDb21wb25lbnQgPSB3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF07XG5cblx0cmV0dXJuIDxHYXRld2F5Q29tcG9uZW50IHsgLi4ucHJvcHMgfSAvPjtcbn07IiwiY29uc3Qge1xuXHR1c2VTdGF0ZSxcblx0dXNlRWZmZWN0XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHR1c2VTZWxlY3QsXG5cdHVzZURpc3BhdGNoLFxufSA9IHdwLmRhdGE7XG5cbmV4cG9ydCBjb25zdCB1c2VNZXRhU3RhdGUgPSAoIGtleSwgaWZFbXB0eSA9ICd7fScgKSA9PiB7XG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcblx0fSApO1xuXG5cdGNvbnN0IHtcblx0XHRlZGl0UG9zdFxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblxuXHRjb25zdCBbIG1ldGFTdGF0ZVZhbHVlLCBzZXRNZXRhU3RhdGVWYWx1ZSBdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGFbIGtleSBdIHx8IGlmRW1wdHkgKSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGVkaXRQb3N0KCB7XG5cdFx0XHRtZXRhOiAoIHtcblx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0WyBrZXkgXTogSlNPTi5zdHJpbmdpZnkoIG1ldGFTdGF0ZVZhbHVlIClcblx0XHRcdH0gKVxuXHRcdH0gKTtcblx0fSwgWyBtZXRhU3RhdGVWYWx1ZSBdICk7XG5cblx0cmV0dXJuIFsgbWV0YVN0YXRlVmFsdWUsIHNldE1ldGFTdGF0ZVZhbHVlIF07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQWN0aW9ucyA9ICggd2l0aEVkaXRQb3N0RWZmZWN0ID0gZmFsc2UgKSA9PiB7XG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcblx0fSApO1xuXG5cdGNvbnN0IHtcblx0XHRlZGl0UG9zdFxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblxuXHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zIHx8ICdbXScgKSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggd2l0aEVkaXRQb3N0RWZmZWN0ICkge1xuXHRcdFx0ZWRpdFBvc3QoIHtcblx0XHRcdFx0bWV0YTogKCB7XG5cdFx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0XHRfamZfYWN0aW9uczogSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnMgKVxuXHRcdFx0XHR9IClcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0sIFsgYWN0aW9ucyBdICk7XG5cblx0cmV0dXJuIFsgYWN0aW9ucywgc2V0QWN0aW9ucyBdO1xufTtcbmNvbnN0IGluaXRDbGFzc2VzID0gWyAnamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyBdO1xuXG5leHBvcnQgY29uc3QgdXNlU3RhdGVWYWxpZENsYXNzZXMgPSBpbml0aWFsVmFsaWQgPT4ge1xuXHRjb25zdCB2YWxpZENsYXNzID0gJ2lzLXZhbGlkJztcblx0Y29uc3QgaW52YWxpZENsYXNzID0gJ2lzLWludmFsaWQnXG5cblx0Y29uc3QgaW5pdFN0YXRlQ2xhc3NlcyA9ICgpID0+IHtcblx0XHRpZiAoIGluaXRpYWxWYWxpZCApIHtcblx0XHRcdHJldHVybiBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF07XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCAhIGluaXRpYWxWYWxpZCApIHtcblx0XHRcdHJldHVybiBbIC4uLmluaXRDbGFzc2VzLCBpbnZhbGlkQ2xhc3MgXTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgWyBjbGFzc2VzLCBzZXRDbGFzc2VzIF0gPSB1c2VTdGF0ZSggaW5pdFN0YXRlQ2xhc3NlcygpICk7XG5cblx0Y29uc3Qgc2V0VmFsaWRDbGFzcyA9ICgpID0+IHtcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF0gKVxuXHR9O1xuXHRjb25zdCBzZXRJbnZhbGlkQ2xhc3MgPSAoKSA9PiB7XG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgaW52YWxpZENsYXNzIF0gKVxuXHR9O1xuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKVxuXHR9O1xuXG5cdHJldHVybiBbIGNsYXNzZXMuam9pbiggJyAnICksIHNldFZhbGlkQ2xhc3MsIHNldEludmFsaWRDbGFzcywgc2V0TG9hZGluZ0NsYXNzIF07XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzID0gKCkgPT4ge1xuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCBbIC4uLmluaXRDbGFzc2VzIF0gKTtcblxuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7XG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKVxuXHR9O1xuXHRjb25zdCBjbGVhckxvYWRpbmdDbGFzcyA9ICgpID0+IHtcblx0XHRzZXRDbGFzc2VzKCBpbml0Q2xhc3NlcyApO1xuXHR9XG5cblx0cmV0dXJuIFsgY2xhc3Nlcy5qb2luKCAnICcgKSwgc2V0TG9hZGluZ0NsYXNzLCBjbGVhckxvYWRpbmdDbGFzcyBdO1xufVxuIiwiXG5mdW5jdGlvbiBnbG9iYWxUYWIoIHsgc2x1ZywgZWxlbWVudCA9ICcnLCBlbXB0eSA9ICcnIH0gKSB7XG5cdGNvbnN0IGdsb2JhbCA9IEpldEZvcm1FZGl0b3JEYXRhLmdsb2JhbF9zZXR0aW5ncztcblxuXHRpZiggISBnbG9iYWwgKSB7XG5cdFx0cmV0dXJuIGVtcHR5O1xuXHR9XG5cblx0aWYgKCBlbGVtZW50ICkge1xuXHRcdHJldHVybiAoIGdsb2JhbFsgc2x1ZyBdICYmIGdsb2JhbFsgc2x1ZyBdWyBlbGVtZW50IF0gKSA/IGdsb2JhbFsgc2x1ZyBdWyBlbGVtZW50IF0gOiBlbXB0eTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxbIHNsdWcgXSB8fCBlbXB0eTtcbn1cblxuZXhwb3J0IHsgZ2xvYmFsVGFiIH07IiwiXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNsYXNzIFRvb2xzIHtcblxuXHRzdGF0aWMgZ2V0TGFiZWwoIG1ldGEsIGF0dHJzICkge1xuXHRcdGNvbnN0IGxhYmVsID0ge307XG5cdFx0bGFiZWwubmFtZSA9IGF0dHJzLmxhYmVsO1xuXHRcdGlmICggYXR0cnMucmVxdWlyZWQgKSB7XG5cdFx0XHRsYWJlbC5tYXJrID0gSlNPTi5wYXJzZSggbWV0YS5famZfYXJncyApLnJlcXVpcmVkX21hcmsgfHwgJyc7XG5cdFx0fVxuXHRcdHJldHVybiBsYWJlbDtcblx0fVxuXG5cdHN0YXRpYyB3aXRoUGxhY2Vob2xkZXIoIHNvdXJjZSwgbGFiZWwgPSAnLS0nLCB2YWx1ZSA9ICcnICkge1xuXHRcdHJldHVybiBbXG5cdFx0XHR7IGxhYmVsLCB2YWx1ZSB9LFxuXHRcdFx0Li4uc291cmNlXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBpc0VtcHR5T2JqZWN0KCBvYmplY3QgKSB7XG5cdFx0cmV0dXJuICdvYmplY3QnID09PSB0eXBlb2Ygb2JqZWN0ICYmIE9iamVjdC5rZXlzKCBvYmplY3QgKS5sZW5ndGggPT09IDA7XG5cdH1cblxuXHRzdGF0aWMgZ2V0RnVuY0NvbmRpdGlvbiggbmFtZUZ1bmN0aW9uICkge1xuXHRcdHJldHVybiBuZXcgRnVuY3Rpb24oIGByZXR1cm4gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgJyR7IG5hbWVGdW5jdGlvbiB9JyBdYCApO1xuXHR9XG5cblx0c3RhdGljIGFkZENvbmRpdGlvbkZvckNvbmRUeXBlKCBuYW1lLCBjYWxsYWJsZSApIHtcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zID0gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9ucyB8fCB7fTtcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zWyBuYW1lIF0gPSBjYWxsYWJsZTtcblx0fVxuXG5cdHN0YXRpYyBwYXJzZUNvbmRpdGlvbnNGdW5jKCBzb3VyY2UgKSB7XG5cdFx0Y29uc3QgdHlwZXMgPSBbXTtcblxuXHRcdHNvdXJjZS5mb3JFYWNoKCB0eXBlID0+IHtcblx0XHRcdGlmICggdHlwZS5jb25kaXRpb24gKSB7XG5cdFx0XHRcdGlmICggVG9vbHMuZ2V0RnVuY0NvbmRpdGlvbiggdHlwZS5jb25kaXRpb24gKSgpKCB0eXBlLnZhbHVlICkgKSB7XG5cdFx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0eXBlcztcblxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBldmVudCA9IG5hbWUgPT4ge1xuXHRjb25zdCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgPSBuZXcgRXZlbnQoIG5hbWUgKTtcblx0cmV0dXJuICgpID0+IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGluaXRpYWxpemVDYWxsYmFja3NFdmVudCApO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpc3RlbiA9ICggbmFtZSwgZnVuYyApID0+IHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZnVuYyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sczsiLCJpbXBvcnQgQWN0aW9uRmllbGRzTWFwIGZyb20gXCIuL2NvbXBvbmVudHMvYWN0aW9uLWZpZWxkcy1tYXBcIjtcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbi1tb2RhbFwiO1xuaW1wb3J0IFdyYXBwZXJSZXF1aXJlZENvbnRyb2wgZnJvbSBcIi4vY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2xcIjtcbmltcG9ydCBSZXF1ZXN0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvcmVxdWVzdC1idXR0b25cIjtcbmltcG9ydCBWYWxpZGF0ZUJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL3ZhbGlkYXRlLWJ1dHRvblwiO1xuaW1wb3J0IGFkZEFjdGlvbiBmcm9tIFwiLi9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLW1hbmFnZXJcIjtcbmltcG9ydCBUb29scywge1xuXHRldmVudCxcblx0bGlzdGVuLFxufSBmcm9tIFwiLi9oZWxwZXJzL3Rvb2xzXCI7XG5pbXBvcnQgRHluYW1pY1ByZXNldCBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXRcIjtcbmltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gXCIuLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXBcIjtcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtd2l0aC1wcmVzZXRcIjtcbmltcG9ydCB7XG5cdEdsb2JhbEZpZWxkLFxuXHRBdmFpbGFibGVNYXBGaWVsZCxcblx0TWFwRmllbGQsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtcmVuZGVyXCI7XG5cbmltcG9ydCB7XG5cdGdldEF2YWlsYWJsZUZpZWxkcyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcblx0Z2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0Z2V0Rm9ybUZpZWxkc0J5QmxvY2ssXG5cdGdldElubmVyQmxvY2tzLFxufSBmcm9tIFwiLi9oZWxwZXJzL2Jsb2Nrcy9ibG9ja3MtaGVscGVyXCI7XG5pbXBvcnQge1xuXHRnYXRld2F5QXR0cixcblx0Z2F0ZXdheUxhYmVsLFxuXHRyZWdpc3RlckdhdGV3YXksXG5cdHJlbmRlckdhdGV3YXksXG59IGZyb20gXCIuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1oZWxwZXJcIjtcbmltcG9ydCB7XG5cdHVzZUFjdGlvbnMsXG5cdHVzZU1ldGFTdGF0ZSxcblx0dXNlU3RhdGVWYWxpZENsYXNzZXMsXG5cdHVzZVN0YXRlTG9hZGluZ0NsYXNzZXMsXG59IGZyb20gXCIuL2hlbHBlcnMvaG9va3MvaG9va3MtaGVscGVyXCI7XG5pbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXdyYXBwZXJcIjtcbmltcG9ydCBNYWNyb3NJbnNlcnRlciBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9tYWNyb3MtaW5zZXJ0ZXJcIjtcbmltcG9ydCBSZXBlYXRlcldpdGhTdGF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkcy9yZXBlYXRlci13aXRoLXN0YXRlXCI7XG5pbXBvcnQgd2l0aFByZXNldCBmcm9tIFwiLi9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvclwiO1xuaW1wb3J0IHtcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEdlbmVyYWxGaWVsZHMsXG5cdFRvb2xCYXJGaWVsZHMsXG5cdEZpZWxkQ29udHJvbCxcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZHMvZmllbGQtY29udHJvbFwiO1xuaW1wb3J0IFBsYWNlaG9sZGVyTWVzc2FnZSBmcm9tIFwiLi9jb21wb25lbnRzL2FjdGlvbnMvcGxhY2Vob2xkZXItbWVzc2FnZVwiO1xuaW1wb3J0IEhvcml6b250YWxMaW5lIGZyb20gXCIuL2NvbXBvbmVudHMvaG9yaXpvbnRhbC1saW5lXCI7XG5pbXBvcnQgUmVxdWVzdExvYWRpbmdCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9yZXF1ZXN0LWxvYWRpbmctYnV0dG9uXCI7XG5pbXBvcnQge1xuXHRhY3Rpb25CeVR5cGVMaXN0LFxuXHRmcm9tTG9jYWxpemVIZWxwZXIsXG5cdGdldEFjdGlvblNldHRpbmdzLFxufSBmcm9tIFwiLi9oZWxwZXJzL2FjdGlvbnMvYWN0aW9uLWhlbHBlclwiO1xuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuL2hlbHBlcnMvZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xuaW1wb3J0IHsgZ2xvYmFsVGFiIH0gZnJvbSBcIi4vaGVscGVycy9zZXR0aW5ncy9oZWxwZXJcIjtcbmltcG9ydCBGaWVsZFNldHRpbmdzV3JhcHBlciBmcm9tICcuL2NvbXBvbmVudHMvZmllbGRzL2ZpZWxkLXNldHRpbmdzLXdyYXBwZXInO1xuXG4vLyBKRkJDb21wb25lbnRzXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xuXHRBY3Rpb25GaWVsZHNNYXAsXG5cdEFjdGlvbk1vZGFsLFxuXHRSZXF1ZXN0QnV0dG9uLFxuXHRWYWxpZGF0ZUJ1dHRvbixcblx0UmVxdWVzdExvYWRpbmdCdXR0b24sXG5cdFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXG5cdER5bmFtaWNQcmVzZXQsXG5cdEpldEZpZWxkc01hcENvbnRyb2wsXG5cdEZpZWxkV2l0aFByZXNldCxcblx0R2xvYmFsRmllbGQsXG5cdEF2YWlsYWJsZU1hcEZpZWxkLFxuXHRNYXBGaWVsZCxcblx0RmllbGRXcmFwcGVyLFxuXHRNYWNyb3NJbnNlcnRlcixcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXG5cdEFkdmFuY2VkRmllbGRzLFxuXHRHZW5lcmFsRmllbGRzLFxuXHRUb29sQmFyRmllbGRzLFxuXHRGaWVsZENvbnRyb2wsXG5cdFBsYWNlaG9sZGVyTWVzc2FnZSxcblx0SG9yaXpvbnRhbExpbmUsXG5cdEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxufTtcblxuLy8gSkZCRnVuY3Rpb25zXG53aW5kb3cuSmV0RkJBY3Rpb25zID0ge1xuXHRhZGRBY3Rpb24sXG5cdHdpdGhQcmVzZXQsXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxuXHRnZXRJbm5lckJsb2Nrcyxcblx0Z2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nLFxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxuXHRnYXRld2F5QXR0cixcblx0Z2F0ZXdheUxhYmVsLFxuXHRyZWdpc3RlckdhdGV3YXksXG5cdFRvb2xzLFxuXHRldmVudCxcblx0bGlzdGVuLFxuXHRhY3Rpb25CeVR5cGVMaXN0LFxuXHRnZXRBY3Rpb25TZXR0aW5ncyxcblx0ZnJvbUxvY2FsaXplSGVscGVyLFxuXHRyZW5kZXJHYXRld2F5LFxuXHRnYXRld2F5QWN0aW9uQXR0cmlidXRlcyxcblx0Z2xvYmFsVGFiLFxufTtcblxuLy8gSkZCSG9va3NcbndpbmRvdy5KZXRGQkhvb2tzID0ge1xuXHR1c2VBY3Rpb25zLFxuXHR1c2VNZXRhU3RhdGUsXG5cdHVzZVN0YXRlVmFsaWRDbGFzc2VzLFxuXHR1c2VTdGF0ZUxvYWRpbmdDbGFzc2VzLFxufTtcblxuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBR0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQWJBO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7Ozs7QUFwSkE7QUFDQTtBQXFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SkE7QUFHQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQW5CQTtBQTBCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFiQTtBQW9CQTtBQUNBO0FBQ0E7QUFIQTtBQXRDQTtBQXBDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQVdBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQWxFQTtBQXlFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUtBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFIQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBWUE7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFTQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBdEJBO0FBdUJBO0FBQUE7QUF2QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFXQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFqRUE7QUFDQTtBQTlIQTtBQUFBO0FBQUE7QUE4TUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBUUE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQXZCQTtBQUNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVEE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFWQTtBQXBCQTtBQW1DQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBdkJBO0FBQ0E7QUFtQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckxBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUZBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBUUE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7OztBIiwic291cmNlUm9vdCI6IiJ9