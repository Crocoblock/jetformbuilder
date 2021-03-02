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
/******/ 	return __webpack_require__(__webpack_require__.s = "./editor/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./editor/blocks/block-wrappers.js":
/*!*****************************************!*\
  !*** ./editor/blocks/block-wrappers.js ***!
  \*****************************************/
/*! exports provided: withCustomProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCustomProps", function() { return withCustomProps; });
/* harmony import */ var _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/hooks-helper */ "./editor/helpers/hooks-helper.js");
/* harmony import */ var _help_messages_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-messages-config */ "./editor/blocks/help-messages-config.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function withCustomProps(block) {
  var EditComponent = block.settings.edit;
  var _plugins = {};

  if ('useEditProps' in block.settings) {
    var useEditProps = block.settings.useEditProps;
    useEditProps.forEach(function (name) {
      var editProp = editProps.find(function (prop) {
        return name === prop.name;
      });

      if (editProp) {
        _plugins[name] = editProp.callable(block);
      }
    });
    delete block.settings.useEditProps;
  }

  return function (props) {
    return wp.element.createElement(EditComponent, _extends({}, props, {
      editProps: _objectSpread({}, _plugins)
    }));
  };
}

var getHelpInstance = function getHelpInstance(block) {
  var messages = {};
  _help_messages_config__WEBPACK_IMPORTED_MODULE_1__["messagesConfig"].forEach(function (msg) {
    if (msg.to.includes(block.name) && msg.message) {
      messages[msg.attribute] = msg;
    }
  });
  return function (attribute) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!(attribute in messages)) {
      return '';
    }

    var item = messages[attribute];

    if ('conditions' in item) {
      for (var attrName in item.conditions) {
        if (!(attrName in attributes) || item.conditions[attrName] !== attributes[attrName]) {
          return;
        }
      }
    }

    return item.message;
  };
};

var editProps = _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_0__["jfbHooks"].applyFilters('jet.fb.register.editProps', [{
  name: 'uniqKey',
  callable: function callable(block) {
    return function (suffix) {
      return "".concat(block.name, "/").concat(suffix);
    };
  }
}, {
  name: 'blockName',
  callable: function callable(block) {
    return block.name;
  }
}, {
  name: 'attrHelp',
  callable: getHelpInstance
}]);

/***/ }),

/***/ "./editor/blocks/calculated-field/block.json":
/*!***************************************************!*\
  !*** ./editor/blocks/calculated-field/block.json ***!
  \***************************************************/
/*! exports provided: apiVersion, name, category, icon, keywords, textdomain, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/calculated-field\",\"category\":\"jet-form-builder-fields\",\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M30.0333 40.0333H27.3667C26.9775 40.0333 26.6418 40.195 26.396 40.4408C26.1353 40.7015 26 41.0418 26 41.4V43.6C26 43.9557 26.1322 44.2795 26.3598 44.5325L26.395 44.5716L26.4342 44.6068C26.6871 44.8345 27.011 44.9667 27.3667 44.9667H30.0333V47.6333C30.0333 47.9915 30.1686 48.3318 30.4293 48.5925C30.6751 48.8383 31.0109 49 31.4 49H33.6C33.9754 49 34.3116 48.8484 34.5595 48.5928C34.8151 48.3449 34.9667 48.0087 34.9667 47.6333V44.9667H37.6333C37.9915 44.9667 38.3318 44.8314 38.5925 44.5707C38.8383 44.3249 39 43.9891 39 43.6V41.4C39 41.0246 38.8484 40.6884 38.5928 40.4405C38.3449 40.1849 38.0087 40.0333 37.6333 40.0333H34.9667V37.3667C34.9667 36.9913 34.8151 36.6551 34.5595 36.4072C34.3116 36.1516 33.9754 36 33.6 36H31.4C31.0109 36 30.6751 36.1617 30.4294 36.4075L31.1365 37.1146L30.4294 36.4075C30.1686 36.6682 30.0333 37.0085 30.0333 37.3667V40.0333Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M52.0688 45.9949L52.0688 45.9949L52.0743 46.0003C52.4373 46.3595 52.6155 46.7809 52.6155 47.3289C52.6155 48.0345 52.3912 48.4956 51.9978 48.833C51.5866 49.1856 50.9592 49.4211 49.9936 49.4211C49.0383 49.4211 48.4404 49.1544 48.0492 48.7441C47.6528 48.3284 47.3845 47.6705 47.3845 46.6184V45.6184H46.3845H44H43V46.6184C43 48.53 43.4997 50.1667 44.6052 51.4134L44.6051 51.4135L44.6112 51.4202C45.528 52.4355 46.7156 53.0671 48.1171 53.3503V55V56H49.1171H51.0247H52.0247V55V53.3438C53.3759 53.0668 54.5232 52.4931 55.4047 51.5761C56.4928 50.4535 57 48.9947 57 47.3026C57 46.2477 56.8 45.2769 56.3652 44.4197C55.9365 43.5574 55.2757 42.8331 54.4266 42.2374C53.5819 41.63 52.4558 41.1146 51.0945 40.6692C49.8425 40.2485 49.0609 39.8226 48.6377 39.4384C48.3044 39.1212 48.1063 38.6866 48.1063 38.0263C48.1063 37.2533 48.3177 36.7877 48.6213 36.4875L48.6214 36.4876L48.6271 36.4818C48.9248 36.1827 49.4162 35.9605 50.2642 35.9605C50.9576 35.9605 51.4386 36.1996 51.8128 36.6729C52.2087 37.1735 52.4608 37.9134 52.4608 39V40H53.4608H55.8324H56.8324V39C56.8324 37.0613 56.3974 35.4023 55.4108 34.1368C54.607 33.0966 53.5388 32.4155 52.2567 32.0765V30V29H51.2567H49.3362H48.3362V30V32.0453C47.0883 32.342 46.0271 32.9372 45.2014 33.8592L45.2014 33.8591L45.1979 33.863C44.1926 34.9973 43.7218 36.4265 43.7218 38.0658C43.7218 39.6897 44.2078 41.1066 45.2306 42.2368L45.2306 42.2368L45.2373 42.2441C46.244 43.3347 47.7621 44.1442 49.6705 44.7402C50.9292 45.1697 51.6832 45.6073 52.0688 45.9949Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"keywords\":[\"jetformbuilder\",\"field\",\"calculated\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"attributes\":{\"calc_formula\":{\"type\":\"string\",\"default\":\"\"},\"precision\":{\"type\":\"number\",\"default\":2},\"calc_prefix\":{\"type\":\"string\",\"default\":\"\"},\"calc_suffix\":{\"type\":\"string\",\"default\":\"\"},\"calc_hidden\":{\"type\":\"boolean\",\"default\":false},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/calculated-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/calculated-field/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditCalculated; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var block = 'jet-forms/calculated-field';
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    ColorPalette = _ref.ColorPalette,
    RichText = _ref.RichText,
    Editable = _ref.Editable,
    MediaUpload = _ref.MediaUpload,
    ServerSideRender = _ref.ServerSideRender,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    PanelColor = _wp$components.PanelColor,
    IconButton = _wp$components.IconButton,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    RangeControl = _wp$components.RangeControl,
    CheckboxControl = _wp$components.CheckboxControl,
    Disabled = _wp$components.Disabled,
    ToolbarGroup = _wp$components.ToolbarGroup,
    ToolbarItem = _wp$components.ToolbarItem,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = __experimentalNumberControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var help = {
  calc_hidden: __('Check this to hide calculated field')
};
function EditCalculated(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;

  var insertMacros = function insertMacros(macros) {
    setAttributes({
      calc_formula: "".concat(attributes.calc_formula || '', "%FIELD::").concat(macros, "%")
    });
  };

  var togglePopover = function togglePopover() {
    setFormFields(Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__["getFieldsWithoutCurrent"])());
    setShowMacros(function (toggle) {
      return !toggle;
    });
  };

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFields = _useState2[0],
      setFormFields = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showMacros = _useState4[0],
      setShowMacros = _useState4[1];

  return [wp.element.createElement(BlockControls, {
    key: uniqKey('BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolbarGroup')
  }, wp.element.createElement(Button, {
    key: uniqKey('show-popover'),
    isTertiary: true,
    isSmall: true,
    icon: showMacros ? 'no-alt' : 'admin-tools',
    onClick: togglePopover
  }), showMacros && wp.element.createElement(Popover, {
    key: uniqKey('Popover'),
    position: 'bottom left'
  }, formFields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, formFields.map(function (_ref2, index) {
    var value = _ref2.value;
    return wp.element.createElement("div", {
      key: uniqKey("formFields-".concat(index))
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        insertMacros(value);
      }
    }, '%FIELD::' + value + '%'));
  }))))), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings')
  }, wp.element.createElement("div", {
    className: "jet-form-editor__row-notice"
  }, __('Set math formula to calculate field value.', 'jet-form-builder'), wp.element.createElement("br", null), __('For example:', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null), "%FIELD::quantity%*%META::price%", wp.element.createElement("br", null), wp.element.createElement("br", null), __('Where:', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%FIELD::quantity% - macros for form field value. "quantity" - is a field name to get value from', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%META::price% - macros for current post meta value. "price" - is a meta key to get value from', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null)), wp.element.createElement(NumberControl, {
    label: __('Decimal Places Number'),
    labelPosition: "top",
    key: "precision",
    value: attributes.precision,
    onChange: function onChange(newValue) {
      setAttributes({
        precision: parseInt(newValue)
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_prefix",
    label: __('Calculated Value Prefix'),
    value: attributes.calc_prefix,
    help: __('For space before or after text use: &nbsp;'),
    onChange: function onChange(newValue) {
      setAttributes({
        calc_prefix: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_suffix",
    label: __('Calculated Value Suffix'),
    value: attributes.calc_suffix,
    help: __('For space before or after text use: &nbsp;'),
    onChange: function onChange(newValue) {
      setAttributes({
        calc_suffix: newValue
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'calc_hidden',
    label: __('Hidden'),
    checked: attributes.calc_hidden,
    help: help.calc_hidden,
    onChange: function onChange(newVal) {
      setAttributes({
        calc_hidden: Boolean(newVal)
      });
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper'),
    valueIfEmptyLabel: 'Calculated Field'
  }, props), props.isSelected && wp.element.createElement(TextareaControl, {
    key: "calc_formula",
    value: attributes.calc_formula,
    onChange: function onChange(newValue) {
      setAttributes({
        calc_formula: newValue
      });
    }
  }), wp.element.createElement("div", {
    className: 'jet-form-builder__calculated-field'
  }, wp.element.createElement("div", {
    className: 'calc-prefix'
  }, attributes.calc_prefix), wp.element.createElement("div", {
    className: 'calc-formula'
  }, attributes.calc_formula), wp.element.createElement("div", {
    className: 'calc-suffix'
  }, attributes.calc_suffix))))];
}

/***/ }),

/***/ "./editor/blocks/calculated-field/index.js":
/*!*************************************************!*\
  !*** ./editor/blocks/calculated-field/index.js ***!
  \*************************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/calculated-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/calculated-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/calculated-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Calculated Field'),
  description: __('Calculate and display your number values'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName']
};


/***/ }),

/***/ "./editor/blocks/checkbox-field/block.json":
/*!*************************************************!*\
  !*** ./editor/blocks/checkbox-field/block.json ***!
  \*************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/checkbox-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"checkbox\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"6\\\" width=\\\"62\\\" height=\\\"52\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"7\\\" y=\\\"36\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"3\\\" fill=\\\"#6F8BFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"28\\\" y=\\\"41\\\" width=\\\"30\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><path d=\\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\\" fill=\\\"#162B40\\\"/><rect x=\\\"28\\\" y=\\\"17\\\" width=\\\"30\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><path d=\\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M11 44L14 47L19 41\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><rect x=\\\"7\\\" y=\\\"12\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"field_options_from\":{\"type\":\"string\",\"default\":\"manual_input\"},\"field_options\":{\"type\":\"array\",\"default\":[]},\"field_options_post_type\":{\"type\":\"string\",\"default\":\"post\"},\"field_options_tax\":{\"type\":\"string\",\"default\":\"category\"},\"field_options_key\":{\"type\":\"string\",\"default\":\"\"},\"generator_function\":{\"type\":\"string\",\"default\":\"\"},\"generator_field\":{\"type\":\"string\",\"default\":\"\"},\"calculated_value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/checkbox-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/checkbox-field/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxEdit; });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var localized = window.JetFormCheckboxFieldData;
function CheckboxEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var field_options_from = attributes.field_options_from;
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_2__["default"], props), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__["SelectRadioCheckPlaceholder"], _extends({
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: localized
  }, props)))];
}

/***/ }),

/***/ "./editor/blocks/checkbox-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/checkbox-field/index.js ***!
  \***********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/checkbox-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/checkbox-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/checkbox-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Checkbox Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/conditional-block/block.json":
/*!****************************************************!*\
  !*** ./editor/blocks/conditional-block/block.json ***!
  \****************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/conditional-block\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"block\",\"conditonal\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<SVG width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" role=\\\"img\\\" aria-hidden=\\\"true\\\" focusable=\\\"false\\\"><Path d=\\\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z\\\"></Path></SVG>\",\"attributes\":{\"conditions\":{\"type\":\"array\",\"default\":[]}}}");

/***/ }),

/***/ "./editor/blocks/conditional-block/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/conditional-block/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionalBlockEdit; });
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _components_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/actions/action-modal */ "./editor/components/actions/action-modal.js");
/* harmony import */ var _components_repeater_with_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/repeater-with-state */ "./editor/components/repeater-with-state.js");
/* harmony import */ var _components_field_with_preset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/field-with-preset */ "./editor/components/field-with-preset.js");
/* harmony import */ var _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/presets/dynamic-preset */ "./editor/components/presets/dynamic-preset.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    InnerBlocks = _ref.InnerBlocks,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    Button = _wp$components.Button,
    ToolbarGroup = _wp$components.ToolbarGroup,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var condition = {
  type: 'hide',
  field: '',
  operator: '',
  value: '',
  set_value: ''
};
var conditionTypes = [{
  label: '--',
  value: ''
}, {
  label: 'Hide this field if...',
  value: 'hide'
}, {
  label: 'Show this field if...',
  value: 'show'
}, {
  label: 'Set value for this field if...',
  value: 'set_value',
  condition: 'isSingleField'
}];
var conditionOperators = [{
  label: '--',
  value: ''
}, {
  label: 'Equal',
  value: 'equal'
}, {
  label: 'Greater than',
  value: 'greater'
}, {
  label: 'Less than',
  value: 'less'
}, {
  label: 'Between',
  value: 'between'
}, {
  label: 'In the list',
  value: 'one_of'
}, {
  label: 'Contain text',
  value: 'contain'
}];
function ConditionalBlockEdit(props) {
  var blockProps = useBlockProps();
  var setAttributes = props.setAttributes,
      attributes = props.attributes,
      clientId = props.clientId,
      uniqKey = props.editProps.uniqKey;
  _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].addConditionForCondType('isSingleField', function () {
    return 1 === Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_5__["getInnerBlocks"])(clientId).length;
  });
  var getConditionTypes = _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].parseConditionsFunc(conditionTypes);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var formFields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_5__["getFormFieldsBlocks"])([], '--');
  return [wp.element.createElement(BlockControls, {
    key: uniqKey('BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolbarGroup')
  }, wp.element.createElement(Button, {
    key: uniqKey('randomize'),
    isTertiary: true,
    isSmall: true,
    icon: "randomize",
    onClick: function onClick() {
      return setShowModal(true);
    }
  }))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(InnerBlocks, {
    key: uniqKey('conditional-fields'),
    renderAppender: function renderAppender() {
      return wp.element.createElement(InnerBlocks.ButtonBlockAppender, {
        key: uniqKey('ButtonBlockAppender')
      });
    }
  })), showModal && wp.element.createElement(_components_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    classNames: ['width-60'],
    onRequestClose: function onRequestClose() {
      return setShowModal(false);
    },
    title: "Conditional Logic"
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(_components_repeater_with_state__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: uniqKey('RepeaterWithState'),
      items: attributes.conditions,
      isSaveAction: actionClick,
      onUnMount: onRequestClose,
      newItem: condition,
      onSaveItems: function onSaveItems(conditions) {
        return setAttributes({
          conditions: conditions
        });
      },
      addNewButtonLabel: __("New Condition"),
      help: {
        helpVisible: function helpVisible(conditions) {
          return conditions.length > 1;
        },
        helpSource: window.JetFormEditorData.helpForRepeaters,
        helpKey: 'conditional_block'
      }
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-type'),
        label: "Type",
        labelPosition: "side",
        value: currentItem.type,
        options: getConditionTypes,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            type: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-field'),
        label: "Field",
        labelPosition: "side",
        value: currentItem.field,
        options: formFields,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            field: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-operator'),
        label: "Operator",
        labelPosition: "side",
        value: currentItem.operator,
        options: conditionOperators,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            operator: newValue
          });
        }
      }), wp.element.createElement(_components_field_with_preset__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: uniqKey('FieldWithPreset-value_to_compare'),
        ModalEditor: function ModalEditor(_ref4) {
          var actionClick = _ref4.actionClick,
              onRequestClose = _ref4.onRequestClose;
          return wp.element.createElement(_components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: uniqKey('DynamicPreset-value_to_compare'),
            value: currentItem.value,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                value: newValue
              });
            },
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        key: uniqKey('TextareaControl-value'),
        label: "Value to Compare",
        value: currentItem.value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            value: newValue
          });
        }
      })), 'set_value' === currentItem.type && wp.element.createElement(_components_field_with_preset__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: uniqKey('FieldWithPreset-value_to_set'),
        ModalEditor: function ModalEditor(_ref5) {
          var actionClick = _ref5.actionClick,
              onRequestClose = _ref5.onRequestClose;
          return wp.element.createElement(_components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: uniqKey('DynamicPreset-value_to_set'),
            value: currentItem.set_value,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                set_value: newValue
              });
            },
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        key: uniqKey('TextareaControl-set_value'),
        label: __('Value to Set', 'jet-form-builder'),
        help: __('Separate values with commas', 'jet-form-builder'),
        value: currentItem.set_value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            set_value: newValue
          });
        }
      })));
    });
  })];
}

/***/ }),

/***/ "./editor/blocks/conditional-block/index.js":
/*!**************************************************!*\
  !*** ./editor/blocks/conditional-block/index.js ***!
  \**************************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/conditional-block/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/conditional-block/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/conditional-block/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./editor/blocks/conditional-block/save.js");



var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Conditional Block'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  useEditProps: ['uniqKey']
};


/***/ }),

/***/ "./editor/blocks/conditional-block/save.js":
/*!*************************************************!*\
  !*** ./editor/blocks/conditional-block/save.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionalSave; });
var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InnerBlocks = _ref.InnerBlocks;

function ConditionalSave(props) {
  return wp.element.createElement(InnerBlocks.Content, null);
}

/***/ }),

/***/ "./editor/blocks/controls.js":
/*!***********************************!*\
  !*** ./editor/blocks/controls.js ***!
  \***********************************/
/*! exports provided: controlsSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlsSettings", function() { return controlsSettings; });
var __ = wp.i18n.__;
var controlsSettings = {
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
};

/***/ }),

/***/ "./editor/blocks/controls/default-meta.js":
/*!************************************************!*\
  !*** ./editor/blocks/controls/default-meta.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;

var JetDefaultMetaControl = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(JetDefaultMetaControl, _wp$element$Component);

  var _super = _createSuper(JetDefaultMetaControl);

  function JetDefaultMetaControl(props) {
    var _this;

    _classCallCheck(this, JetDefaultMetaControl);

    _this = _super.call(this, props);
    _this.addNewOption = _this.addNewOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(JetDefaultMetaControl, [{
    key: "getDefaultMeta",
    value: function getDefaultMeta() {
      if (!this.props.defaultMeta) {
        return [];
      }

      return Array.from(this.props.defaultMeta);
    }
  }, {
    key: "addNewOption",
    value: function addNewOption() {
      var items = this.getDefaultMeta();
      items.push({
        key: '',
        value: ''
      });
      this.props.onChange(items);
    }
  }, {
    key: "removeOption",
    value: function removeOption(index) {
      var items = this.getDefaultMeta();
      items.splice(index, 1);
      this.props.onChange(items);
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(_ref) {
      var value = _ref.value,
          name = _ref.name,
          id = _ref.id;
      var items = Array.from(this.props.defaultMeta);
      items[id][name] = value;
      this.props.onChange(items);
    }
    /* eslint-disable jsx-a11y/no-onchange */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return wp.element.createElement("div", {
        className: "jet-default-meta__row"
      }, this.getDefaultMeta().map(function (currentItem, index) {
        return wp.element.createElement("div", {
          className: "jet-form-builder__flex-controls",
          key: 'jet-form-builder-repeater-item-' + index
        }, wp.element.createElement("div", {
          className: "repeater-item-column"
        }, wp.element.createElement(TextControl, {
          key: "meta_key",
          label: __('Meta Key'),
          value: currentItem.key,
          onChange: function onChange(newValue) {
            _this2.onChangeValue({
              value: newValue,
              name: 'key',
              id: index
            });
          }
        })), wp.element.createElement("div", {
          className: "repeater-item-column"
        }, wp.element.createElement(TextControl, {
          key: "meta_value",
          label: __('Meta Value'),
          value: currentItem.value,
          onChange: function onChange(newValue) {
            _this2.onChangeValue({
              value: newValue,
              name: 'value',
              id: index
            });
          }
        })), wp.element.createElement("div", {
          className: "repeater-item-column"
        }, wp.element.createElement(Button, {
          icon: "dismiss",
          label: "Remove",
          onClick: function onClick() {
            return _this2.removeOption(index);
          }
        })));
      }), wp.element.createElement(Button, {
        className: "button-add-option",
        isSecondary: true,
        onClick: this.addNewOption
      }, __('Add New Option')));
    }
  }]);

  return JetDefaultMetaControl;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (JetDefaultMetaControl);

/***/ }),

/***/ "./editor/blocks/controls/field-control.js":
/*!*************************************************!*\
  !*** ./editor/blocks/controls/field-control.js ***!
  \*************************************************/
/*! exports provided: GeneralFields, ToolBarFields, AdvancedFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralFields", function() { return GeneralFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarFields", function() { return ToolBarFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedFields", function() { return AdvancedFields; });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls */ "./editor/blocks/controls.js");
/* harmony import */ var _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/presets/dynamic-preset */ "./editor/components/presets/dynamic-preset.js");
/* harmony import */ var _components_field_with_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/field-with-preset */ "./editor/components/field-with-preset.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var _wp$element = wp.element,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;

function FieldControl(_ref2) {
  var type = _ref2.type,
      setAttributes = _ref2.setAttributes,
      attributes = _ref2.attributes,
      _ref2$attrsSettings = _ref2.attrsSettings,
      attrsSettings = _ref2$attrsSettings === void 0 ? {} : _ref2$attrsSettings,
      _ref2$editProps$attrH = _ref2.editProps.attrHelp,
      attrHelp = _ref2$editProps$attrH === void 0 ? function () {
    return '';
  } : _ref2$editProps$attrH;
  var currentControl = _controls__WEBPACK_IMPORTED_MODULE_0__["controlsSettings"][type];

  var onChangeValue = function onChangeValue(value, key) {
    setAttributes(_defineProperty({}, key, value));
  };

  return currentControl.attrs.map(function (_ref3) {
    var _ref3$help = _ref3.help,
        help = _ref3$help === void 0 ? '' : _ref3$help,
        attrName = _ref3.attrName,
        label = _ref3.label,
        attr = _objectWithoutProperties(_ref3, ["help", "attrName", "label"]);

    if (!(attrName in attributes) || 'condition' in attr && !attributes[attr.condition] || attrName in attrsSettings && 'show' in attrsSettings[attrName] && false === attrsSettings[attrName].show) {
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
        return wp.element.createElement(_components_field_with_preset__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: "".concat(attr.type, "-").concat(attrName, "-FieldWithPreset"),
          ModalEditor: function ModalEditor(_ref4) {
            var actionClick = _ref4.actionClick,
                onRequestClose = _ref4.onRequestClose;
            return wp.element.createElement(_components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
          checked: attributes[attrName],
          onChange: function onChange(newVal) {
            onChangeValue(newVal, attrName);
          }
        });
    }
  });
}

function GeneralFields(props) {
  var currentControl = _controls__WEBPACK_IMPORTED_MODULE_0__["controlsSettings"].general;
  return wp.element.createElement(PanelBody, {
    title: currentControl.label,
    key: 'jet-form-general-fields'
  }, wp.element.createElement(FieldControl, _extends({
    type: "general",
    key: 'jet-form-general-fields-component'
  }, props)));
}

function AdvancedFields(props) {
  var currentControl = _controls__WEBPACK_IMPORTED_MODULE_0__["controlsSettings"].advanced;
  return wp.element.createElement(PanelBody, {
    title: currentControl.label,
    key: 'jet-form-advanced-fields',
    initialOpen: false
  }, wp.element.createElement(FieldControl, _extends({
    type: "advanced",
    key: 'jet-form-advanced-fields-component'
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * External dependencies
 */
var isEmpty = window.lodash.isEmpty;
/**
 * WordPress dependencies
 */

var withInstanceId = wp.compose.withInstanceId;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

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

/***/ "./editor/blocks/controls/placeholder.js":
/*!***********************************************!*\
  !*** ./editor/blocks/controls/placeholder.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function JetFieldPlaceholder(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === void 0 ? false : _ref$isRequired;
  subtitle = subtitle.filter(function (part) {
    return Boolean(part);
  });
  var subtitleStr = subtitle.join(', ');
  var className = 'jet-field-placeholder';

  if (isRequired) {
    className += ' is-required';
  }
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    className: className
  }, title, ": ", subtitleStr);
  /* eslint-enable jsx-a11y/no-onchange */
}

/* harmony default export */ __webpack_exports__["default"] = (JetFieldPlaceholder);

/***/ }),

/***/ "./editor/blocks/date-field/block.json":
/*!*********************************************!*\
  !*** ./editor/blocks/date-field/block.json ***!
  \*********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/date-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"date\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"15\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"31\\\" y=\\\"32.2\\\" width=\\\"26\\\" height=\\\"28.8\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M31 35.2C31 33.5431 32.3431 32.2 34 32.2H54C55.6569 32.2 57 33.5431 57 35.2V43.4H31V35.2Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M36.4615 30C36.4615 29.4477 36.9092 29 37.4615 29H37.6154C38.1676 29 38.6154 29.4477 38.6154 30V34.6C38.6154 35.1523 38.1676 35.6 37.6154 35.6H37.4615C36.9092 35.6 36.4615 35.1523 36.4615 34.6V30Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M49.3846 30C49.3846 29.4477 49.8323 29 50.3846 29H50.5384C51.0907 29 51.5384 29.4477 51.5384 30V34.6C51.5384 35.1523 51.0907 35.6 50.5384 35.6H50.3846C49.8323 35.6 49.3846 35.1523 49.3846 34.6V30Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"is_timestamp\":{\"type\":\"boolean\",\"default\":false},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/date-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/date-field/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateEdit; });
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    ColorPalette = _ref.ColorPalette,
    RichText = _ref.RichText,
    Editable = _ref.Editable,
    MediaUpload = _ref.MediaUpload,
    ServerSideRender = _ref.ServerSideRender,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    PanelColor = _wp$components.PanelColor,
    IconButton = _wp$components.IconButton,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl,
    CheckboxControl = _wp$components.CheckboxControl,
    DateTimePicker = _wp$components.DateTimePicker,
    Disabled = _wp$components.Disabled,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function DateEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      isSelected = props.isSelected,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      blockName = _props$editProps.blockName,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["ToolBarFields"], _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(ToggleControl, {
    key: "is_timestamp",
    label: __('Is Timestamp'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: "place_holder_block_".concat(blockName),
    placeholder: 'Input type="date"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/date-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/date-field/index.js ***!
  \*******************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/date-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/date-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/date-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Date field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/datetime-field/block.json":
/*!*************************************************!*\
  !*** ./editor/blocks/datetime-field/block.json ***!
  \*************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/datetime-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"date\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"15\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"31\\\" y=\\\"32.2\\\" width=\\\"26\\\" height=\\\"28.8\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M31 35.2C31 33.5431 32.3431 32.2 34 32.2H54C55.6569 32.2 57 33.5431 57 35.2V43.4H31V35.2Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M36.4615 30C36.4615 29.4477 36.9092 29 37.4615 29H37.6154C38.1676 29 38.6154 29.4477 38.6154 30V34.6C38.6154 35.1523 38.1676 35.6 37.6154 35.6H37.4615C36.9092 35.6 36.4615 35.1523 36.4615 34.6V30Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M49.3846 30C49.3846 29.4477 49.8323 29 50.3846 29H50.5384C51.0907 29 51.5384 29.4477 51.5384 30V34.6C51.5384 35.1523 51.0907 35.6 50.5384 35.6H50.3846C49.8323 35.6 49.3846 35.1523 49.3846 34.6V30Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"is_timestamp\":{\"type\":\"boolean\",\"default\":false},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/datetime-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/datetime-field/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTimeEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody;
function DateTimeEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings')
  }, wp.element.createElement(ToggleControl, {
    key: uniqKey('is_timestamp'),
    label: __('Is Timestamp'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: uniqKey('place_holder_block'),
    placeholder: 'Input type="datetime-local"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/datetime-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/datetime-field/index.js ***!
  \***********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/datetime-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/datetime-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/datetime-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Datetime field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/form-break-field/block.json":
/*!***************************************************!*\
  !*** ./editor/blocks/form-break-field/block.json ***!
  \***************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/form-break-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"block\",\"break\",\"pagebreak\",\"formbreak\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"29\\\" y=\\\"1\\\" width=\\\"34\\\" height=\\\"34\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"22\\\" width=\\\"41\\\" height=\\\"41\\\" rx=\\\"3\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M23.3721 49H20.832V39.209L17.7998 40.1494V38.084L23.0996 36.1855H23.3721V49Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M50.9795 23H44.1572V21.6465L47.377 18.2148C47.819 17.7318 48.1449 17.3102 48.3545 16.9502C48.5687 16.5902 48.6758 16.2484 48.6758 15.9248C48.6758 15.4827 48.5641 15.1364 48.3408 14.8857C48.1175 14.6305 47.7985 14.5029 47.3838 14.5029C46.9372 14.5029 46.584 14.6579 46.3242 14.9678C46.069 15.2731 45.9414 15.6764 45.9414 16.1777H43.959C43.959 15.5716 44.1025 15.0179 44.3896 14.5166C44.6813 14.0153 45.0915 13.6234 45.6201 13.3408C46.1488 13.0537 46.748 12.9102 47.418 12.9102C48.4434 12.9102 49.2386 13.1562 49.8037 13.6484C50.3734 14.1406 50.6582 14.8356 50.6582 15.7334C50.6582 16.2256 50.5306 16.7269 50.2754 17.2373C50.0202 17.7477 49.5827 18.3424 48.9629 19.0215L46.7002 21.4072H50.9795V23Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"page_break_disabled\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/form-break-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/form-break-field/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormBreakEdit; });
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    ColorPalette = _ref.ColorPalette,
    RichText = _ref.RichText,
    Editable = _ref.Editable,
    MediaUpload = _ref.MediaUpload,
    ServerSideRender = _ref.ServerSideRender,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    PanelColor = _wp$components.PanelColor,
    IconButton = _wp$components.IconButton,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button;
function FormBreakEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [props.isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_0__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings')
  }, wp.element.createElement(TextareaControl, {
    key: "page_break_disabled",
    value: attributes.page_break_disabled,
    label: __('Disabled message'),
    help: attrHelp('page_break_disabled'),
    onChange: function onChange(newValue) {
      setAttributes({
        page_break_disabled: newValue
      });
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_0__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement("div", {
    className: 'jet-form-builder__next-page-wrap'
  }, wp.element.createElement(Button, {
    isSecondary: true,
    key: "next_page_button",
    className: "jet-form-builder__next-page"
  }, attributes.label || 'Next'), attributes.add_prev && wp.element.createElement(Button, {
    isSecondary: true,
    key: "prev_page_button",
    className: "jet-form-builder__prev-page"
  }, attributes.prev_label || 'Prev')))];
}

/***/ }),

/***/ "./editor/blocks/form-break-field/index.js":
/*!*************************************************!*\
  !*** ./editor/blocks/form-break-field/index.js ***!
  \*************************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/form-break-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/form-break-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/form-break-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Form Break Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/form-fields.js":
/*!**************************************!*\
  !*** ./editor/blocks/form-fields.js ***!
  \**************************************/
/*! exports provided: registerFormFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFormFields", function() { return registerFormFields; });
/* harmony import */ var _calculated_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculated-field */ "./editor/blocks/calculated-field/index.js");
/* harmony import */ var _checkbox_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-field */ "./editor/blocks/checkbox-field/index.js");
/* harmony import */ var _conditional_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditional-block */ "./editor/blocks/conditional-block/index.js");
/* harmony import */ var _date_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-field */ "./editor/blocks/date-field/index.js");
/* harmony import */ var _datetime_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datetime-field */ "./editor/blocks/datetime-field/index.js");
/* harmony import */ var _form_break_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-break-field */ "./editor/blocks/form-break-field/index.js");
/* harmony import */ var _group_break_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-break-field */ "./editor/blocks/group-break-field/index.js");
/* harmony import */ var _heading_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heading-field */ "./editor/blocks/heading-field/index.js");
/* harmony import */ var _hidden_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hidden-field */ "./editor/blocks/hidden-field/index.js");
/* harmony import */ var _media_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-field */ "./editor/blocks/media-field/index.js");
/* harmony import */ var _number_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number-field */ "./editor/blocks/number-field/index.js");
/* harmony import */ var _radio_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radio-field */ "./editor/blocks/radio-field/index.js");
/* harmony import */ var _range_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./range-field */ "./editor/blocks/range-field/index.js");
/* harmony import */ var _repeater_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./repeater-field */ "./editor/blocks/repeater-field/index.js");
/* harmony import */ var _select_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select-field */ "./editor/blocks/select-field/index.js");
/* harmony import */ var _submit_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./submit-field */ "./editor/blocks/submit-field/index.js");
/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text-field */ "./editor/blocks/text-field/index.js");
/* harmony import */ var _textarea_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./textarea-field */ "./editor/blocks/textarea-field/index.js");
/* harmony import */ var _time_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./time-field */ "./editor/blocks/time-field/index.js");
/* harmony import */ var _wysiwyg_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wysiwyg-field */ "./editor/blocks/wysiwyg-field/index.js");
/* harmony import */ var _block_wrappers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./block-wrappers */ "./editor/blocks/block-wrappers.js");
/* harmony import */ var _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../helpers/hooks-helper */ "./editor/helpers/hooks-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var registerBlockType = wp.blocks.registerBlockType;
var fields = _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_21__["jfbHooks"].applyFilters('jet.fb.register.fields', [_calculated_field__WEBPACK_IMPORTED_MODULE_0__, _checkbox_field__WEBPACK_IMPORTED_MODULE_1__, _conditional_block__WEBPACK_IMPORTED_MODULE_2__, _datetime_field__WEBPACK_IMPORTED_MODULE_4__, _date_field__WEBPACK_IMPORTED_MODULE_3__, _form_break_field__WEBPACK_IMPORTED_MODULE_5__, _group_break_field__WEBPACK_IMPORTED_MODULE_6__, _heading_field__WEBPACK_IMPORTED_MODULE_7__, _hidden_field__WEBPACK_IMPORTED_MODULE_8__, _media_field__WEBPACK_IMPORTED_MODULE_9__, _number_field__WEBPACK_IMPORTED_MODULE_10__, _radio_field__WEBPACK_IMPORTED_MODULE_11__, _range_field__WEBPACK_IMPORTED_MODULE_12__, _repeater_field__WEBPACK_IMPORTED_MODULE_13__, _select_field__WEBPACK_IMPORTED_MODULE_14__, _submit_field__WEBPACK_IMPORTED_MODULE_15__, _text_field__WEBPACK_IMPORTED_MODULE_16__, _textarea_field__WEBPACK_IMPORTED_MODULE_17__, _time_field__WEBPACK_IMPORTED_MODULE_18__, _wysiwyg_field__WEBPACK_IMPORTED_MODULE_19__
/*
*/
]);

var registerFormField = function registerFormField(block) {
  if (!block) {
    return;
  }

  var metadata = block.metadata,
      settings = block.settings,
      name = block.name;
  settings.edit = _block_wrappers__WEBPACK_IMPORTED_MODULE_20__["withCustomProps"](block);
  registerBlockType(name, _objectSpread(_objectSpread({}, metadata), settings));
};

var registerFormFields = function registerFormFields() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fields;
  blocks.forEach(_helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_21__["jfbHooks"].applyFilters('jet.fb.register.fields.handler', registerFormField));
};
registerFormFields();

/***/ }),

/***/ "./editor/blocks/group-break-field/block.json":
/*!****************************************************!*\
  !*** ./editor/blocks/group-break-field/block.json ***!
  \****************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-form-builder/group-break-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"block\",\"conditonal\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"1\\\" width=\\\"62\\\" height=\\\"24\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"39\\\" width=\\\"62\\\" height=\\\"24\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"30\\\" width=\\\"62\\\" height=\\\"4\\\" rx=\\\"2\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/group-break-field/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/group-break-field/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupBreakEdit; });
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function GroupBreakEdit(props) {
  var blockProps = useBlockProps();
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_0__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", blockProps, wp.element.createElement("div", {
    className: 'jet-form-builder__group-break'
  }, wp.element.createElement("span", null, __('GROUP BREAK'))))];
}

/***/ }),

/***/ "./editor/blocks/group-break-field/index.js":
/*!**************************************************!*\
  !*** ./editor/blocks/group-break-field/index.js ***!
  \**************************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/group-break-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/group-break-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/group-break-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Group Break Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey']
};


/***/ }),

/***/ "./editor/blocks/heading-field/block.json":
/*!************************************************!*\
  !*** ./editor/blocks/heading-field/block.json ***!
  \************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/heading-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"heading\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M40.7126 54.5332C41.6699 54.5332 42.446 53.7572 42.446 52.7999V30.2825C42.446 29.3252 41.6699 28.5492 40.7126 28.5492H38.0411C37.0838 28.5492 36.3077 29.3252 36.3077 30.2825V38.5315H27.617V30.2825C27.617 29.3252 26.841 28.5492 25.8836 28.5492H23.1957C22.2383 28.5492 21.4623 29.3252 21.4623 30.2825V52.7999C21.4623 53.7572 22.2383 54.5332 23.1957 54.5332H25.8836C26.841 54.5332 27.617 53.7572 27.617 52.7999V43.8755H36.3077V52.7999C36.3077 53.7572 37.0838 54.5332 38.0411 54.5332H40.7126ZM55.8044 54.5332C56.7617 54.5332 57.5378 53.7572 57.5378 52.7999V29.8987C57.5378 29.1079 56.8967 28.4668 56.1058 28.4668C55.9366 28.4668 55.7688 28.4968 55.61 28.5554L46.8342 31.7945C46.1533 32.0458 45.701 32.6948 45.701 33.4206V35.2598C45.701 36.4491 46.8714 37.2852 47.9965 36.8995L51.5637 35.6767V52.7999C51.5637 53.7572 52.3397 54.5332 53.297 54.5332H55.8044Z\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/heading-field/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/heading-field/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadingEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function HeadingEdit(props) {
  var blockProps = useBlockProps();
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper'),
    valueIfEmptyLabel: 'Heading'
  }, props)))];
}

/***/ }),

/***/ "./editor/blocks/heading-field/index.js":
/*!**********************************************!*\
  !*** ./editor/blocks/heading-field/index.js ***!
  \**********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/heading-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/heading-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/heading-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Heading Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey']
};


/***/ }),

/***/ "./editor/blocks/help-messages-config.js":
/*!***********************************************!*\
  !*** ./editor/blocks/help-messages-config.js ***!
  \***********************************************/
/*! exports provided: messagesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messagesConfig", function() { return messagesConfig; });
var __ = wp.i18n.__;
var MEDIA = 'jet-forms/media-field';
var FORM_BREAK = 'jet-forms/form-break-field';
var DATE = 'jet-forms/date-field';
var DATETIME = 'jet-forms/datetime-field';
var RADIO = 'jet-forms/radio-field';
var CHECKBOX = 'jet-forms/checkbox-field';
var SELECT = 'jet-forms/select-field';
var RANGE = 'jet-forms/range-field';
var REPEATER = 'jet-forms/repeater-field';
var TEXT = 'jet-forms/text-field';
var TIME = 'jet-forms/time-field';
var messagesConfig = [{
  attribute: 'is_timestamp',
  to: [DATE, DATETIME],
  message: __("Check this if you want to send value of this \n\t\tfield as timestamp instead of plain datetime")
}, {
  attribute: 'default',
  to: [DATE],
  message: __('Plain date should be in yyyy-mm-dd format')
}, {
  attribute: 'default',
  to: [DATETIME],
  message: __('Plain datetime should be in yyyy-MM-ddThh:mm format')
}, {
  attribute: 'page_break_disabled',
  to: [FORM_BREAK],
  message: __("Text to show if next page button is disabled. \n\t\tFor example - \"Fill required fields\" etc.")
}, {
  attribute: 'insert_attachment',
  to: [MEDIA],
  message: __("If checked new attachment will be inserted for uploaded file. \n\t\tNote: work only for logged-in users!")
}, {
  attribute: 'max_files',
  to: [MEDIA],
  message: __('If not set allow to upload 1 file')
}, {
  attribute: 'max_size',
  to: [MEDIA],
  message: __('Mb')
}, {
  attribute: 'allowed_mimes',
  to: [MEDIA],
  message: __("If no MIME type selected will allow all types. \n\t\tHold down the Ctrl (windows) / Command (Mac) button to select multiple options.")
}, {
  attribute: 'value_from_meta',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("By default post/term ID is used as value. Here you can \n\t\tset meta field name to use its value as form field value")
}, {
  attribute: 'calculated_value_from_key',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("Here you can set meta field name to use its value \n\t\tas calculated value for current form field")
}, {
  attribute: 'generator_field',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("For Numbers range generator set field with max range value"),
  conditions: {
    generator_function: 'num_range'
  }
}, {
  attribute: 'switch_on_change',
  to: [SELECT],
  message: __("Check this to switch page to next on current value change")
}, {
  attribute: 'prefix_suffix',
  to: [RANGE],
  message: __('For space before or after text use: &nbsp;')
}, {
  attribute: 'calc_hidden',
  to: [REPEATER],
  message: __('Check this to hide calculated field')
}, {
  attribute: 'input_mask_default',
  to: [TEXT],
  message: __("Examples: (999) 999-9999 - static mask, 9-a{1,3}9{1,3} - mask with dynamic syntax \n\t\tDefault masking definitions: 9 - numeric, a - alphabetical, * - alphanumeric")
}, {
  attribute: 'input_mask_datetime_link',
  to: [TEXT],
  message: __("https://github.com/RobinHerbots/Inputmask/blob/5.x/README_date.md")
}, {
  attribute: 'default',
  to: [TIME],
  message: __('Plain time should be in hh:mm:ss format')
}];


/***/ }),

/***/ "./editor/blocks/hidden-field/block.json":
/*!***********************************************!*\
  !*** ./editor/blocks/hidden-field/block.json ***!
  \***********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/hidden-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"hidden\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M4 16H60C61.1046 16 62 16.8954 62 18V38C62 39.1046 61.1046 40 60 40H57V42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H28V40H4C2.89543 40 2 39.1046 2 38V18C2 16.8954 2.89543 16 4 16Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M42.5 32.5C36.9592 32.5 31.9346 35.5314 28.2269 40.4552C27.9244 40.8586 27.9244 41.4222 28.2269 41.8256C31.9346 46.7553 36.9592 49.7867 42.5 49.7867C48.0408 49.7867 53.0654 46.7553 56.7731 41.8315C57.0756 41.4281 57.0756 40.8645 56.7731 40.4611C53.0654 35.5314 48.0408 32.5 42.5 32.5ZM42.8975 47.2299C39.2194 47.4612 36.1821 44.4298 36.4135 40.7459C36.6033 37.7086 39.0652 35.2466 42.1025 35.0568C45.7806 34.8255 48.8179 37.8569 48.5865 41.5408C48.3908 44.5722 45.9289 47.0341 42.8975 47.2299Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"54.0909\\\" y=\\\"27.5858\\\" width=\\\"3.5\\\" height=\\\"34.7076\\\" rx=\\\"1.75\\\" transform=\\\"rotate(44.914 54.0909 27.5858)\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"field_value\":{\"type\":\"string\",\"default\":\"post_id\"},\"hidden_value_field\":{\"type\":\"string\",\"default\":\"\"},\"query_var_key\":{\"type\":\"string\",\"default\":\"\"},\"date_format\":{\"type\":\"string\",\"default\":\"\"},\"hidden_value\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"hidden_field_name\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/hidden-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/hidden-field/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HiddenEdit; });
/* harmony import */ var _controls_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/placeholder */ "./editor/blocks/controls/placeholder.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./editor/blocks/hidden-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;
function HiddenEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings')
  }, wp.element.createElement(SelectControl, {
    key: "field_value",
    label: "Field Value",
    labelPosition: "top",
    value: attributes.field_value,
    onChange: function onChange(newValue) {
      setAttributes({
        field_value: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_2__["hiddenValues"]
  }), ['post_meta', 'user_meta'].includes(attributes.field_value) && wp.element.createElement(TextControl, {
    key: "hidden_value_field",
    label: "Meta Field to Get Value From",
    value: attributes.hidden_value_field,
    onChange: function onChange(newValue) {
      setAttributes({
        hidden_value_field: newValue
      });
    }
  }), 'query_var' === attributes.field_value && wp.element.createElement(TextControl, {
    key: "query_var_key",
    label: "Query Variable Key",
    value: attributes.query_var_key,
    onChange: function onChange(newValue) {
      setAttributes({
        query_var_key: newValue
      });
    }
  }), 'current_date' === attributes.field_value && wp.element.createElement(TextControl, {
    key: "date_format",
    label: "Format",
    value: attributes.date_format,
    onChange: function onChange(newValue) {
      setAttributes({
        date_format: newValue
      });
    }
  }), 'manual_input' === attributes.field_value && wp.element.createElement(TextControl, {
    key: "hidden_value",
    label: "Value",
    value: attributes.hidden_value,
    onChange: function onChange(newValue) {
      setAttributes({
        hidden_value: newValue
      });
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_controls_placeholder__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: uniqKey('JetFieldPlaceholder'),
    title: 'Hidden Field',
    subtitle: [attributes.name]
  }))];
}
;

/***/ }),

/***/ "./editor/blocks/hidden-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/hidden-field/index.js ***!
  \*********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/hidden-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/hidden-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/hidden-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Hidden Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey']
};


/***/ }),

/***/ "./editor/blocks/hidden-field/options.js":
/*!***********************************************!*\
  !*** ./editor/blocks/hidden-field/options.js ***!
  \***********************************************/
/*! exports provided: hiddenValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenValues", function() { return hiddenValues; });
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/tools */ "./editor/helpers/tools.js");

var __ = wp.i18n.__;
var hiddenValues = _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].withPlaceholder([{
  value: 'post_id',
  label: __('Current Post ID')
}, {
  value: 'post_title',
  label: __('Current Post Title')
}, {
  value: 'post_url',
  label: __('Current Post/Page URL')
}, {
  value: 'post_meta',
  label: __('Current Post Meta')
}, {
  value: 'user_id',
  label: __('Current User ID')
}, {
  value: 'user_email',
  label: __('Current User Email')
}, {
  value: 'user_name',
  label: __('Current User Name')
}, {
  value: 'user_meta',
  label: __('Current User Meta')
}, {
  value: 'author_id',
  label: __('Current Post Author ID')
}, {
  value: 'author_email',
  label: __('Current Post Author Email')
}, {
  value: 'author_name',
  label: __('Current Post Author Name')
}, {
  value: 'query_var',
  label: __('URL Query Variable')
}, {
  value: 'current_date',
  label: __('Current Date')
}, {
  value: 'manual_input',
  label: __('Manual Input')
}]);


/***/ }),

/***/ "./editor/blocks/media-field/block.json":
/*!**********************************************!*\
  !*** ./editor/blocks/media-field/block.json ***!
  \**********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/media-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"media\",\"image\",\"file\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><rect x=\\\"22.9474\\\" y=\\\"27.9474\\\" width=\\\"34.1053\\\" height=\\\"27.1822\\\" rx=\\\"1.82186\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.89474\\\"/><path d=\\\"M34.4615 46.3847L36.9393 43.8672L39.417 46.3847L42.8239 42.9231L46.2308 46.3847\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.38462\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><circle cx=\\\"39.6538\\\" cy=\\\"38.4231\\\" r=\\\"1.73077\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.38462\\\"/></svg>\",\"attributes\":{\"allowed_user_cap\":{\"type\":\"string\",\"default\":\"\"},\"insert_attachment\":{\"type\":\"boolean\",\"default\":false},\"max_files\":{\"type\":\"number\",\"default\":null},\"max_size\":{\"type\":\"number\",\"default\":null},\"allowed_mimes\":{\"type\":\"array\",\"default\":[]},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/media-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/media-field/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./editor/blocks/media-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    useBlockProps = _ref.useBlockProps,
    InspectorControls = _ref.InspectorControls;

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var _wp$components2 = wp.components,
    NumberControl = _wp$components2.NumberControl,
    InputControl = _wp$components2.InputControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

var localizeData = window.jetFormMediaFieldData;
function MediaEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    className: "jet-form-media-fields"
  }, wp.element.createElement(SelectControl, {
    key: "allowed_user_cap",
    label: __('User access'),
    labelPosition: "top",
    value: attributes.allowed_user_cap,
    onChange: function onChange(newValue) {
      setAttributes({
        allowed_user_cap: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_2__["userAccess"]
  }), 'any_user' !== attributes.allowed_user_cap && wp.element.createElement(ToggleControl, {
    key: "insert_attachment",
    label: __('Insert attachment'),
    checked: attributes.insert_attachment,
    help: attrHelp('insert_attachment'),
    onChange: function onChange(newValue) {
      setAttributes({
        insert_attachment: Boolean(newValue)
      });
    }
  }), attributes.insert_attachment && wp.element.createElement(SelectControl, {
    key: "value_format",
    label: __('Field value'),
    labelPosition: "top",
    value: attributes.value_format,
    onChange: function onChange(newValue) {
      props.setAttributes({
        value_format: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_2__["valueFormats"]
  }), wp.element.createElement(NumberControl, {
    key: "max_files",
    label: __('Maximum allowed files to upload'),
    labelPosition: "top",
    help: attrHelp('max_files'),
    value: attributes.max_files,
    onChange: function onChange(newValue) {
      props.setAttributes({
        max_files: parseInt(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Maximum size in Mb'),
    labelPosition: "top",
    key: "max_size",
    help: attrHelp('max_size'),
    value: attributes.max_size,
    onChange: function onChange(newValue) {
      props.setAttributes({
        max_size: parseInt(newValue)
      });
    }
  }), wp.element.createElement(SelectControl, {
    multiple: true,
    className: "field-mime-types",
    key: "allowed_mimes",
    label: __('Allow MIME types'),
    labelPosition: "top",
    help: attrHelp('allowed_mimes'),
    value: attributes.allowed_mimes,
    onChange: function onChange(newValue) {
      props.setAttributes({
        allowed_mimes: newValue
      });
    },
    options: localizeData.mime_types
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(InputControl, {
    key: uniqKey('place_holder_block_new'),
    type: 'file',
    disabled: true
  })))];
}

/***/ }),

/***/ "./editor/blocks/media-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/media-field/index.js ***!
  \********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/media-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/media-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/media-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Media Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/media-field/options.js":
/*!**********************************************!*\
  !*** ./editor/blocks/media-field/options.js ***!
  \**********************************************/
/*! exports provided: userAccess, valueFormats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAccess", function() { return userAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFormats", function() { return valueFormats; });
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/tools */ "./editor/helpers/tools.js");

var userAccess = _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].withPlaceholder([{
  value: "all",
  label: "Any registered user"
}, {
  value: "upload_files",
  label: "Any user, who allowed to upload files"
}, {
  value: "edit_posts",
  label: "Any user, who allowed to edit posts"
}, {
  value: "any_user",
  label: "Any user ( incl. Guest )"
}]);
var valueFormats = _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].withPlaceholder([{
  "value": "id",
  "label": "Attachment ID"
}, {
  "value": "url",
  "label": "Attachment URL"
}, {
  "value": "both",
  "label": "Array with attachment ID and URL"
}]);


/***/ }),

/***/ "./editor/blocks/number-field/block.json":
/*!***********************************************!*\
  !*** ./editor/blocks/number-field/block.json ***!
  \***********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, icon, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/number-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"media\",\"image\",\"file\"],\"textdomain\":\"jet-form-builder\",\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"15\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" stroke=\\\"#162B40\\\" fill=\\\"white\\\" stroke-width=\\\"2\\\"/><path d=\\\"M44 16H60C61.1046 16 62 16.8954 62 18V38C62 39.1046 61.1046 40 60 40H44V16Z\\\" fill=\\\"#4EFEC3\\\"/><path d=\\\"M53.59 20.2409C53.2263 19.8772 52.6817 19.9692 52.318 20.333C51.9542 20.6967 51.9091 21.1944 52.2728 21.5581L55.41 24.6953C55.7737 25.0591 56.3635 25.0591 56.7272 24.6953C57.0909 24.3316 57.0909 23.7419 56.7272 23.3781L53.59 20.2409Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M52.41 20.2409C52.7737 19.8772 53.2949 19.9458 53.6586 20.3095C54.0223 20.6733 54.0909 21.1944 53.7272 21.5581L50.59 24.6953C50.2263 25.0591 49.6365 25.0591 49.2728 24.6953C48.9091 24.3316 48.9091 23.7419 49.2728 23.3781L52.41 20.2409Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M53.59 35.7272C53.2263 36.091 52.7094 36.0266 52.3456 35.6628C51.9819 35.2991 51.9091 34.7738 52.2728 34.41L55.41 31.2728C55.7737 30.9091 56.3635 30.9091 56.7272 31.2728C57.0909 31.6366 57.0909 32.2263 56.7272 32.59L53.59 35.7272Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M52.41 35.7272C52.7737 36.091 53.2906 36.0266 53.6544 35.6629C54.0181 35.2991 54.0909 34.7738 53.7272 34.41L50.59 31.2728C50.2263 30.9091 49.6365 30.9091 49.2728 31.2728C48.9091 31.6366 48.9091 32.2263 49.2728 32.59L52.41 35.7272Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M13.002 29.2539H14.1299V30.8467H13.002V33H11.0264V30.8467H6.94531L6.85645 29.6025L11.0059 23.0469H13.002V29.2539ZM8.8252 29.2539H11.0264V25.7402L10.8965 25.9658L8.8252 29.2539Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M43 16V40.5\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"supports\":{\"customClassName\":false,\"html\":false},\"attributes\":{\"min\":{\"type\":\"number\",\"default\":\"\"},\"max\":{\"type\":\"number\",\"default\":\"\"},\"step\":{\"type\":\"number\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/number-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/number-field/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    __experimentalInputControl = _wp$components.__experimentalInputControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var _wp$components2 = wp.components,
    InputControl = _wp$components2.InputControl,
    NumberControl = _wp$components2.NumberControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function NumberEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;

  var changeNumberValue = function changeNumberValue(key, newValue) {
    props.setAttributes(_defineProperty({}, key, newValue ? parseInt(newValue) : ''));
  };

  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    key: uniqKey('PanelBody'),
    title: __('Field Settings')
  }, wp.element.createElement(NumberControl, {
    label: __('Min Value'),
    labelPosition: "top",
    key: "min",
    value: attributes.min,
    onChange: function onChange(newValue) {
      return changeNumberValue('min', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max Value'),
    labelPosition: "top",
    key: "max",
    value: attributes.max,
    onChange: function onChange(newValue) {
      return changeNumberValue('max', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Step'),
    labelPosition: "top",
    key: "step",
    value: attributes.step,
    onChange: function onChange(newValue) {
      return changeNumberValue('step', newValue);
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(NumberControl, {
    placeholder: attributes.placeholder,
    key: uniqKey('place_holder_block'),
    min: attributes.min || 0,
    max: attributes.max || 1000,
    step: attributes.step || 1
  })))];
}

/***/ }),

/***/ "./editor/blocks/number-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/number-field/index.js ***!
  \*********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/number-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/number-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/number-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Number Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey']
};


/***/ }),

/***/ "./editor/blocks/radio-field/block.json":
/*!**********************************************!*\
  !*** ./editor/blocks/radio-field/block.json ***!
  \**********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/radio-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"radio\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"6\\\" width=\\\"62\\\" height=\\\"52\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"7\\\" y=\\\"36\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"8\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"28\\\" y=\\\"41\\\" width=\\\"30\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><path d=\\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\\" fill=\\\"#162B40\\\"/><rect x=\\\"28\\\" y=\\\"17\\\" width=\\\"30\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><path d=\\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\\" fill=\\\"#162B40\\\"/><rect x=\\\"7\\\" y=\\\"12\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"8\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><circle cx=\\\"15\\\" cy=\\\"20\\\" r=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"field_options_from\":{\"type\":\"string\",\"default\":\"manual_input\"},\"field_options\":{\"type\":\"array\",\"default\":[]},\"field_options_post_type\":{\"type\":\"string\",\"default\":\"post\"},\"field_options_tax\":{\"type\":\"string\",\"default\":\"category\"},\"field_options_key\":{\"type\":\"string\",\"default\":\"\"},\"generator_function\":{\"type\":\"string\",\"default\":\"\"},\"generator_field\":{\"type\":\"string\",\"default\":\"\"},\"calculated_value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/radio-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/radio-field/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioEdit; });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function RadioEdit(props) {
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__["default"], props), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__["SelectRadioCheckPlaceholder"], _extends({
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: window.JetFormRadioFieldData
  }, props)))];
}

/***/ }),

/***/ "./editor/blocks/radio-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/radio-field/index.js ***!
  \********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/radio-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/radio-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/radio-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Radio Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName']
};


/***/ }),

/***/ "./editor/blocks/range-field/block.json":
/*!**********************************************!*\
  !*** ./editor/blocks/range-field/block.json ***!
  \**********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/range-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"range\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><rect x=\\\"12\\\" y=\\\"28\\\" width=\\\"43\\\" height=\\\"2\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"12\\\" cy=\\\"29\\\" r=\\\"5\\\" fill=\\\"#4EFEC3\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><circle cx=\\\"55\\\" cy=\\\"29\\\" r=\\\"2\\\" fill=\\\"#162B40\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><circle cx=\\\"37\\\" cy=\\\"29\\\" r=\\\"5\\\" fill=\\\"#4EFEC3\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"min\":{\"type\":\"number\",\"default\":\"\"},\"max\":{\"type\":\"number\",\"default\":\"\"},\"step\":{\"type\":\"number\",\"default\":\"\"},\"prefix\":{\"type\":\"string\",\"default\":\"\"},\"suffix\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/range-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/range-field/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var _wp$components2 = wp.components,
    NumberControl = _wp$components2.NumberControl,
    InputControl = _wp$components2.InputControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function RangeEdit(props) {
  var blockProps = useBlockProps();

  var _useState = useState(50),
      _useState2 = _slicedToArray(_useState, 2),
      rangeValue = _useState2[0],
      setRangeValue = _useState2[1];

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], {
    key: uniqKey('ToolBarFields')
  }), props.isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(NumberControl, {
    label: __('Min Value'),
    labelPosition: "top",
    key: "min",
    value: attributes.min,
    onChange: function onChange(newValue) {
      setAttributes({
        min: parseInt(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max Value'),
    labelPosition: "top",
    key: "max",
    value: attributes.max,
    onChange: function onChange(newValue) {
      setAttributes({
        max: parseInt(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Step'),
    labelPosition: "top",
    key: "step",
    value: attributes.step,
    onChange: function onChange(newValue) {
      setAttributes({
        step: parseInt(newValue)
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "prefix",
    label: __('Value prefix'),
    value: attributes.prefix,
    help: attrHelp('prefix_suffix'),
    onChange: function onChange(newValue) {
      setAttributes({
        prefix: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "suffix",
    label: __('Value suffix'),
    value: attributes.suffix,
    help: attrHelp('prefix_suffix'),
    onChange: function onChange(newValue) {
      setAttributes({
        suffix: newValue
      });
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper'),
    wrapClasses: ['range-wrap']
  }, props), wp.element.createElement("div", {
    className: "range-flex-wrap"
  }, wp.element.createElement(InputControl, {
    key: uniqKey('placeholder_block'),
    type: 'range',
    min: attributes.min || 0,
    max: attributes.max || 100,
    step: attributes.step || 1,
    onChange: setRangeValue
  }), wp.element.createElement("div", {
    className: 'jet-form-builder__field-value'
  }, wp.element.createElement("span", {
    className: 'jet-form-builder__field-value-prefix'
  }, attributes.prefix), wp.element.createElement("span", null, rangeValue), wp.element.createElement("span", {
    className: 'jet-form-builder__field-value-suffix'
  }, attributes.suffix)))))];
}

/***/ }),

/***/ "./editor/blocks/range-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/range-field/index.js ***!
  \********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/range-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/range-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/range-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Range Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/repeater-field/block.json":
/*!*************************************************!*\
  !*** ./editor/blocks/repeater-field/block.json ***!
  \*************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/repeater-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"range\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"2\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"#4EFEC3\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M11.9561 20H9.98047V12.3848L7.62207 13.1162V11.5098L11.7441 10.0332H11.9561V20Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M20 3H60C61.1046 3 62 3.89543 62 5V25C62 26.1046 61.1046 27 60 27H20V3Z\\\" fill=\\\"white\\\"/><path d=\\\"M19.5 2V27.5\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"35\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"#4EFEC3\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M13.9795 53H7.15723V51.6465L10.377 48.2148C10.819 47.7318 11.1449 47.3102 11.3545 46.9502C11.5687 46.5902 11.6758 46.2484 11.6758 45.9248C11.6758 45.4827 11.5641 45.1364 11.3408 44.8857C11.1175 44.6305 10.7985 44.5029 10.3838 44.5029C9.93717 44.5029 9.58398 44.6579 9.32422 44.9678C9.06901 45.2731 8.94141 45.6764 8.94141 46.1777H6.95898C6.95898 45.5716 7.10254 45.0179 7.38965 44.5166C7.68132 44.0153 8.09147 43.6234 8.62012 43.3408C9.14876 43.0537 9.74805 42.9102 10.418 42.9102C11.4434 42.9102 12.2386 43.1562 12.8037 43.6484C13.3734 44.1406 13.6582 44.8356 13.6582 45.7334C13.6582 46.2256 13.5306 46.7269 13.2754 47.2373C13.0202 47.7477 12.5827 48.3424 11.9629 49.0215L9.7002 51.4072H13.9795V53Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M20 36H60C61.1046 36 62 36.8954 62 38V58C62 59.1046 61.1046 60 60 60H20V36Z\\\" fill=\\\"white\\\"/><path d=\\\"M19.5 35V60.5\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"calc_formula\":{\"type\":\"string\",\"default\":\"\"},\"manage_items_count\":{\"type\":\"string\",\"default\":\"manually\"},\"new_item_label\":{\"type\":\"string\",\"default\":\"\"},\"manage_items_count_field\":{\"type\":\"string\",\"default\":\"\"},\"repeater_calc_type\":{\"type\":\"string\",\"default\":\"default\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/repeater-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/repeater-field/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RepeaterEdit; });
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./editor/blocks/repeater-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    InnerBlocks = _ref.InnerBlocks,
    useBlockProps = _ref.useBlockProps;

var select = wp.data.select;
var useState = wp.element.useState;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function RepeaterEdit(props) {
  var blockProps = useBlockProps();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMacros = _useState2[0],
      setShowMacros = _useState2[1];

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var formFields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_1__["getFieldsWithoutCurrent"])();
  var meta = select('core/editor').getEditedPostAttribute('meta') || {};
  var label = _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].getLabel(meta, attributes);

  var insertMacros = function insertMacros(macros) {
    var formula = attributes.calc_formula || '';
    props.setAttributes({
      calc_formula: formula + '%FIELD::' + macros + '%'
    });
  };

  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props), 'custom' === attributes.repeater_calc_type && wp.element.createElement(Button, {
    key: uniqKey('Button'),
    isTertiary: true,
    isSmall: true,
    icon: showMacros ? 'no-alt' : 'admin-tools',
    onClick: function onClick() {
      return setShowMacros(function (toggle) {
        return !toggle;
      });
    }
  }), showMacros && wp.element.createElement(Popover, {
    position: 'bottom left',
    key: uniqKey('Popover')
  }, formFields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, formFields.map(function (_ref2, index) {
    var value = _ref2.value;
    return wp.element.createElement("div", {
      key: uniqKey('field_' + value + index)
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        insertMacros(value);
      }
    }, '%FIELD::' + value + '%'));
  })))), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(SelectControl, {
    key: "manage_items_count",
    label: __('Manage repeater items count'),
    labelPosition: "top",
    value: attributes.manage_items_count,
    onChange: function onChange(newValue) {
      props.setAttributes({
        manage_items_count: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_3__["manageItemsCount"]
  }), 'manually' === attributes.manage_items_count && wp.element.createElement(TextControl, {
    key: "new_item_label",
    label: __('Add New Item Label'),
    value: attributes.new_item_label,
    onChange: function onChange(newValue) {
      props.setAttributes({
        new_item_label: newValue
      });
    }
  }), 'dynamically' === attributes.manage_items_count && wp.element.createElement(SelectControl, {
    key: "manage_items_count_field",
    label: __('Field items count'),
    labelPosition: "top",
    value: attributes.manage_items_count_field,
    onChange: function onChange(newValue) {
      props.setAttributes({
        manage_items_count_field: newValue
      });
    },
    options: formFields
  }), wp.element.createElement(SelectControl, {
    key: "repeater_calc_type",
    label: __('Calculate repeater row value'),
    labelPosition: "top",
    value: attributes.repeater_calc_type,
    onChange: function onChange(newValue) {
      props.setAttributes({
        repeater_calc_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_3__["calcType"]
  }), 'custom' === attributes.repeater_calc_type && wp.element.createElement("div", {
    className: "jet-form-editor__row-notice"
  }, __('Set math formula to calculate field value.', 'jet-form-builder'), wp.element.createElement("br", null), __('For example:', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null), "%FIELD::quantity%*%META::price%", wp.element.createElement("br", null), wp.element.createElement("br", null), __('Where:', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%FIELD::quantity% - macros for form field value. "quantity" - is a field name to get value from', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%META::price% - macros for current post meta value. "price" - is a meta key to get value from', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null))), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_2__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('Fragment')
  }, blockProps), 'custom' === attributes.repeater_calc_type && wp.element.createElement("div", {
    className: "jet-forms__calc-formula-editor"
  }, wp.element.createElement("div", {
    className: "jet-form-editor__macros-wrap"
  }, wp.element.createElement(TextareaControl, {
    key: "calc_formula",
    value: attributes.calc_formula,
    label: __('Calculation Formula for Repeater'),
    onChange: function onChange(newValue) {
      props.setAttributes({
        calc_formula: newValue
      });
    }
  }))), wp.element.createElement(BaseControl, {
    key: uniqKey('repeater-fields-title')
  }, wp.element.createElement(BaseControl.VisualLabel, null, wp.element.createElement("div", {
    className: 'jet-form-builder__label'
  }, label.name || 'Repeater field', attributes.required && wp.element.createElement("span", {
    className: 'jet-form-builder__required'
  }, label.mark ? label.mark : '*'))), wp.element.createElement("div", {
    className: 'components-base-control__help jet-form-builder__desc',
    style: {
      marginTop: '0px'
    }
  }, attributes.desc)), wp.element.createElement(InnerBlocks, {
    key: uniqKey('repeater-fields'),
    renderAppender: function renderAppender() {
      return wp.element.createElement(InnerBlocks.ButtonBlockAppender, {
        key: uniqKey('ButtonBlockAppender')
      });
    }
  }), wp.element.createElement(Button, {
    className: 'jet-form-builder-repeater__remove',
    isSecondary: true,
    onClick: function onClick() {}
  }, "\xD7"), wp.element.createElement("div", {
    style: {
      width: '100%',
      height: '0.7em'
    }
  }), wp.element.createElement("div", {
    className: "jet-form-builder-repeater__actions"
  }, wp.element.createElement(Button, {
    className: 'jet-form-builder-repeater__new',
    isSecondary: true,
    onClick: function onClick() {}
  }, attributes.new_item_label || 'Add New')))];
}

/***/ }),

/***/ "./editor/blocks/repeater-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/repeater-field/index.js ***!
  \***********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/repeater-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/repeater-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/repeater-field/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./editor/blocks/repeater-field/save.js");



var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_0__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Range Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/repeater-field/options.js":
/*!*************************************************!*\
  !*** ./editor/blocks/repeater-field/options.js ***!
  \*************************************************/
/*! exports provided: calcType, manageItemsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcType", function() { return calcType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageItemsCount", function() { return manageItemsCount; });
var __ = wp.i18n.__;
var calcType = [{
  value: 'default',
  label: __('Default (returns rows count)')
}, {
  value: 'custom',
  label: __('Custom (calculate custom value for each row)')
}];
var manageItemsCount = [{
  value: 'manually',
  label: __('Manually')
}, {
  value: 'dynamically',
  label: __('Dynamically (get count from form field)')
}];


/***/ }),

/***/ "./editor/blocks/repeater-field/save.js":
/*!**********************************************!*\
  !*** ./editor/blocks/repeater-field/save.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RepeaterSave; });
var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InnerBlocks = _ref.InnerBlocks;

function RepeaterSave(props) {
  return wp.element.createElement(InnerBlocks.Content, null);
}
;

/***/ }),

/***/ "./editor/blocks/select-field/block.json":
/*!***********************************************!*\
  !*** ./editor/blocks/select-field/block.json ***!
  \***********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/select-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"select\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"3\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"42\\\" y=\\\"8\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"3\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M48 15L50 17L52 15\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"/><rect x=\\\"1\\\" y=\\\"36\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"42\\\" y=\\\"41\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"3\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M48 48L50 50L52 48\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\"/></svg>\",\"attributes\":{\"switch_on_change\":{\"type\":\"boolean\",\"default\":false},\"field_options_from\":{\"type\":\"string\",\"default\":\"manual_input\"},\"field_options\":{\"type\":\"array\",\"default\":[]},\"field_options_post_type\":{\"type\":\"string\",\"default\":\"post\"},\"field_options_tax\":{\"type\":\"string\",\"default\":\"category\"},\"field_options_key\":{\"type\":\"string\",\"default\":\"\"},\"generator_function\":{\"type\":\"string\",\"default\":\"\"},\"generator_field\":{\"type\":\"string\",\"default\":\"\"},\"calculated_value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/select-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/select-field/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectEdit; });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var ToggleControl = wp.components.ToggleControl;
function SelectEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var blockProps = useBlockProps();
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_2__["default"], props, wp.element.createElement(ToggleControl, {
    key: "switch_on_change",
    label: __('Switch page on change'),
    checked: attributes.switch_on_change,
    help: attrHelp('switch_on_change'),
    onChange: function onChange(newValue) {
      setAttributes({
        switch_on_change: Boolean(newValue)
      });
    }
  })), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__["SelectRadioCheckPlaceholder"], _extends({
    scriptData: window.JetFormSelectFieldData
  }, props)))];
}

/***/ }),

/***/ "./editor/blocks/select-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/select-field/index.js ***!
  \*********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/select-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/select-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/select-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Select Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp', 'blockName']
};


/***/ }),

/***/ "./editor/blocks/select-radio-chekc-options.js":
/*!*****************************************************!*\
  !*** ./editor/blocks/select-radio-chekc-options.js ***!
  \*****************************************************/
/*! exports provided: listFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFrom", function() { return listFrom; });
var __ = wp.i18n.__;
var listFrom = [{
  "value": "manual_input",
  "label": __('Manual Input')
}, {
  "value": "posts",
  "label": __('Posts')
}, {
  "value": "terms",
  "label": __('Terms')
}, {
  "value": "meta_field",
  "label": __('Meta Field')
}, {
  "value": "generate",
  "label": __('Generate Dynamically')
}];


/***/ }),

/***/ "./editor/blocks/submit-field/block.json":
/*!***********************************************!*\
  !*** ./editor/blocks/submit-field/block.json ***!
  \***********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/submit-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"submit\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false,\"multiple\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"12\\\" width=\\\"62\\\" height=\\\"31\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><mask id=\\\"path-3-outside-1\\\" maskUnits=\\\"userSpaceOnUse\\\" x=\\\"40\\\" y=\\\"38\\\" width=\\\"17\\\" height=\\\"17\\\" fill=\\\"black\\\"><rect fill=\\\"white\\\" x=\\\"40\\\" y=\\\"38\\\" width=\\\"17\\\" height=\\\"17\\\"/><path d=\\\"M53.5023 53C53.702 53 53.8917 52.9651 54.0714 52.8952C54.2512 52.8153 54.4159 52.7055 54.5657 52.5657C54.8552 52.2661 55 51.9117 55 51.5023C55 51.0929 54.8552 50.7385 54.5657 50.4389L50.0127 45.9009L54.6555 43.7892C54.7554 43.7492 54.8303 43.6843 54.8802 43.5945C54.9301 43.5046 54.9501 43.4098 54.9401 43.3099C54.9301 43.2101 54.8902 43.1202 54.8203 43.0403C54.7504 42.9604 54.6655 42.9105 54.5657 42.8906L42.5841 40.015C42.5042 39.995 42.4243 39.995 42.3445 40.015C42.2646 40.0349 42.1947 40.0749 42.1348 40.1348C42.0849 40.1947 42.0449 40.2646 42.015 40.3445C41.995 40.4243 41.995 40.5042 42.015 40.5841L44.8906 52.5657C44.9105 52.6655 44.9604 52.7504 45.0403 52.8203C45.1202 52.8902 45.2101 52.9301 45.3099 52.9401C45.4098 52.9501 45.5046 52.9301 45.5945 52.8802C45.6843 52.8303 45.7492 52.7554 45.7892 52.6555L47.9009 48.0127L52.4389 52.5657C52.5887 52.7055 52.7535 52.8153 52.9332 52.8952C53.1129 52.9651 53.3026 53 53.5023 53Z\\\"/></mask><path d=\\\"M53.5023 53C53.702 53 53.8917 52.9651 54.0714 52.8952C54.2512 52.8153 54.4159 52.7055 54.5657 52.5657C54.8552 52.2661 55 51.9117 55 51.5023C55 51.0929 54.8552 50.7385 54.5657 50.4389L50.0127 45.9009L54.6555 43.7892C54.7554 43.7492 54.8303 43.6843 54.8802 43.5945C54.9301 43.5046 54.9501 43.4098 54.9401 43.3099C54.9301 43.2101 54.8902 43.1202 54.8203 43.0403C54.7504 42.9604 54.6655 42.9105 54.5657 42.8906L42.5841 40.015C42.5042 39.995 42.4243 39.995 42.3445 40.015C42.2646 40.0349 42.1947 40.0749 42.1348 40.1348C42.0849 40.1947 42.0449 40.2646 42.015 40.3445C41.995 40.4243 41.995 40.5042 42.015 40.5841L44.8906 52.5657C44.9105 52.6655 44.9604 52.7504 45.0403 52.8203C45.1202 52.8902 45.2101 52.9301 45.3099 52.9401C45.4098 52.9501 45.5046 52.9301 45.5945 52.8802C45.6843 52.8303 45.7492 52.7554 45.7892 52.6555L47.9009 48.0127L52.4389 52.5657C52.5887 52.7055 52.7535 52.8153 52.9332 52.8952C53.1129 52.9651 53.3026 53 53.5023 53Z\\\" fill=\\\"#4AF3BA\\\"/><path d=\\\"M54.0714 52.8952L54.7963 54.7592L54.8404 54.742L54.8837 54.7228L54.0714 52.8952ZM54.5657 52.5657L55.9303 54.0278L55.9679 53.9927L56.0036 53.9557L54.5657 52.5657ZM54.5657 50.4389L56.0036 49.0489L55.9907 49.0355L55.9776 49.0224L54.5657 50.4389ZM50.0127 45.9009L49.1846 44.0804L46.5537 45.2771L48.6008 47.3175L50.0127 45.9009ZM54.6555 43.7892L53.9127 41.9322L53.8697 41.9494L53.8275 41.9686L54.6555 43.7892ZM54.5657 42.8906L54.0989 44.8353L54.136 44.8442L54.1734 44.8517L54.5657 42.8906ZM42.5841 40.015L42.099 41.9553L42.1082 41.9575L42.1174 41.9598L42.5841 40.015ZM42.1348 40.1348L40.7206 38.7206L40.6564 38.7847L40.5984 38.8544L42.1348 40.1348ZM42.015 40.3445L40.1423 39.6422L40.1023 39.7489L40.0747 39.8594L42.015 40.3445ZM42.015 40.5841L43.9598 40.1174L43.9575 40.1082L43.9553 40.099L42.015 40.5841ZM44.8906 52.5657L46.8517 52.1734L46.8442 52.136L46.8353 52.0989L44.8906 52.5657ZM45.7892 52.6555L43.9686 51.8275L43.9494 51.8697L43.9322 51.9127L45.7892 52.6555ZM47.9009 48.0127L49.3175 46.6008L47.2771 44.5537L46.0804 47.1846L47.9009 48.0127ZM52.4389 52.5657L51.0224 53.9776L51.0479 54.0031L51.0743 54.0278L52.4389 52.5657ZM52.9332 52.8952L52.1209 54.7228L52.1642 54.742L52.2083 54.7592L52.9332 52.8952ZM53.5023 55C53.941 55 54.3773 54.9221 54.7963 54.7592L53.3465 51.0312C53.4061 51.008 53.463 51 53.5023 51V55ZM54.8837 54.7228C55.275 54.5489 55.6249 54.3129 55.9303 54.0278L53.201 51.1036C53.2029 51.1019 53.2093 51.0962 53.2204 51.0888C53.2316 51.0813 53.2448 51.0739 53.2592 51.0675L54.8837 54.7228ZM56.0036 53.9557C56.6466 53.2906 57 52.4405 57 51.5023H53C53 51.4658 53.0076 51.398 53.0399 51.3189C53.0719 51.2405 53.1112 51.1927 53.1277 51.1756L56.0036 53.9557ZM57 51.5023C57 50.5641 56.6466 49.714 56.0036 49.0489L53.1277 51.829C53.1112 51.8119 53.0719 51.7641 53.0399 51.6857C53.0076 51.6066 53 51.5388 53 51.5023H57ZM55.9776 49.0224L51.4246 44.4844L48.6008 47.3175L53.1538 51.8555L55.9776 49.0224ZM50.8407 47.7215L55.4836 45.6097L53.8275 41.9686L49.1846 44.0804L50.8407 47.7215ZM55.3983 45.6461C55.9039 45.4439 56.3443 45.0773 56.6285 44.5658L53.1319 42.6232C53.3162 42.2914 53.6068 42.0546 53.9127 41.9322L55.3983 45.6461ZM56.6285 44.5658C56.8712 44.1288 56.9818 43.6268 56.9302 43.1109L52.95 43.5089C52.9184 43.1927 52.989 42.8804 53.1319 42.6232L56.6285 44.5658ZM56.9302 43.1109C56.8763 42.5724 56.6525 42.0972 56.3254 41.7233L53.3151 44.3573C53.1278 44.1432 52.9839 43.8478 52.95 43.5089L56.9302 43.1109ZM56.3254 41.7233C55.9788 41.3271 55.5088 41.0396 54.9579 40.9294L54.1734 44.8517C53.8223 44.7815 53.522 44.5937 53.3151 44.3573L56.3254 41.7233ZM55.0324 40.9458L43.0508 38.0702L42.1174 41.9598L54.0989 44.8353L55.0324 40.9458ZM43.0692 38.0747C42.6708 37.9751 42.2578 37.9751 41.8594 38.0747L42.8295 41.9553C42.5909 42.0149 42.3376 42.0149 42.099 41.9553L43.0692 38.0747ZM41.8594 38.0747C41.4173 38.1852 41.029 38.4122 40.7206 38.7206L43.549 41.549C43.3604 41.7376 43.1119 41.8847 42.8295 41.9553L41.8594 38.0747ZM40.5984 38.8544C40.3918 39.1023 40.2437 39.3718 40.1423 39.6422L43.8876 41.0467C43.8461 41.1574 43.7779 41.2871 43.6712 41.4152L40.5984 38.8544ZM40.0747 39.8594C39.9751 40.2578 39.9751 40.6708 40.0747 41.0692L43.9553 40.099C44.0149 40.3376 44.0149 40.5909 43.9553 40.8295L40.0747 39.8594ZM40.0702 41.0508L42.9458 53.0324L46.8353 52.0989L43.9598 40.1174L40.0702 41.0508ZM42.9294 52.9579C43.0396 53.5088 43.3271 53.9788 43.7233 54.3254L46.3573 51.3151C46.5937 51.522 46.7815 51.8223 46.8517 52.1734L42.9294 52.9579ZM43.7233 54.3254C44.0972 54.6525 44.5724 54.8763 45.1109 54.9302L45.5089 50.95C45.8478 50.9839 46.1432 51.1278 46.3573 51.3151L43.7233 54.3254ZM45.1109 54.9302C45.6268 54.9818 46.1288 54.8712 46.5658 54.6285L44.6232 51.1319C44.8804 50.989 45.1927 50.9184 45.5089 50.95L45.1109 54.9302ZM46.5658 54.6285C47.0773 54.3443 47.4439 53.9039 47.6461 53.3983L43.9322 51.9127C44.0546 51.6068 44.2914 51.3162 44.6232 51.1319L46.5658 54.6285ZM47.6097 53.4836L49.7215 48.8407L46.0804 47.1846L43.9686 51.8275L47.6097 53.4836ZM46.4844 49.4246L51.0224 53.9776L53.8555 51.1538L49.3175 46.6008L46.4844 49.4246ZM51.0743 54.0278C51.3798 54.3129 51.7296 54.5489 52.1209 54.7228L53.7455 51.0675C53.7598 51.0739 53.773 51.0813 53.7842 51.0888C53.7954 51.0962 53.8018 51.1019 53.8036 51.1036L51.0743 54.0278ZM52.2083 54.7592C52.6273 54.9221 53.0636 55 53.5023 55V51C53.5416 51 53.5985 51.008 53.6581 51.0312L52.2083 54.7592Z\\\" fill=\\\"#162B40\\\" mask=\\\"url(#path-3-outside-1)\\\"/><path d=\\\"M12.75 30.4365C12.75 29.999 12.5951 29.6618 12.2852 29.4248C11.9798 29.1878 11.4261 28.9486 10.624 28.707C9.82194 28.4655 9.18392 28.1966 8.70996 27.9004C7.80306 27.3307 7.34961 26.5879 7.34961 25.6719C7.34961 24.8698 7.67546 24.209 8.32715 23.6895C8.9834 23.1699 9.83333 22.9102 10.877 22.9102C11.5697 22.9102 12.1872 23.0378 12.7295 23.293C13.2718 23.5482 13.6979 23.9128 14.0078 24.3867C14.3177 24.8561 14.4727 25.3779 14.4727 25.9521H12.75C12.75 25.4326 12.5859 25.027 12.2578 24.7354C11.9342 24.4391 11.4694 24.291 10.8633 24.291C10.2982 24.291 9.8584 24.4118 9.54395 24.6533C9.23405 24.8949 9.0791 25.2321 9.0791 25.665C9.0791 26.0296 9.24772 26.335 9.58496 26.5811C9.9222 26.8226 10.4782 27.0596 11.2529 27.292C12.0277 27.5199 12.6497 27.7819 13.1191 28.0781C13.5885 28.3698 13.9326 28.707 14.1514 29.0898C14.3701 29.4681 14.4795 29.9124 14.4795 30.4229C14.4795 31.2523 14.1605 31.9131 13.5225 32.4053C12.889 32.8929 12.0277 33.1367 10.9385 33.1367C10.2184 33.1367 9.55534 33.0046 8.94922 32.7402C8.34766 32.4714 7.87826 32.1022 7.54102 31.6328C7.20833 31.1634 7.04199 30.6165 7.04199 29.9922H8.77148C8.77148 30.5573 8.95833 30.9948 9.33203 31.3047C9.70573 31.6146 10.2412 31.7695 10.9385 31.7695C11.54 31.7695 11.9912 31.6488 12.292 31.4072C12.5973 31.1611 12.75 30.8376 12.75 30.4365ZM23.2773 23.0469V29.6982C23.2773 30.7555 22.9378 31.5941 22.2588 32.2139C21.5843 32.8291 20.6842 33.1367 19.5586 33.1367C18.4193 33.1367 17.5146 32.8337 16.8447 32.2275C16.1748 31.6169 15.8398 30.7715 15.8398 29.6914V23.0469H17.5625V29.7051C17.5625 30.3704 17.7311 30.8786 18.0684 31.2295C18.4056 31.5804 18.9023 31.7559 19.5586 31.7559C20.8893 31.7559 21.5547 31.054 21.5547 29.6504V23.0469H23.2773ZM25.1299 33V23.0469H28.541C29.6667 23.0469 30.5234 23.2725 31.1113 23.7236C31.6992 24.1748 31.9932 24.847 31.9932 25.7402C31.9932 26.196 31.8701 26.6061 31.624 26.9707C31.3779 27.3353 31.0179 27.6178 30.5439 27.8184C31.0817 27.9642 31.4964 28.2399 31.7881 28.6455C32.0843 29.0465 32.2324 29.5296 32.2324 30.0947C32.2324 31.029 31.9316 31.7467 31.3301 32.248C30.7331 32.7493 29.8763 33 28.7598 33H25.1299ZM26.8594 28.5088V31.6191H28.7803C29.3226 31.6191 29.7464 31.4847 30.0518 31.2158C30.3571 30.9469 30.5098 30.5732 30.5098 30.0947C30.5098 29.0602 29.9811 28.5316 28.9238 28.5088H26.8594ZM26.8594 27.2373H28.5547C29.0924 27.2373 29.5117 27.1165 29.8125 26.875C30.1178 26.6289 30.2705 26.2826 30.2705 25.8359C30.2705 25.3438 30.1292 24.9883 29.8467 24.7695C29.5687 24.5508 29.1335 24.4414 28.541 24.4414H26.8594V27.2373ZM36.2041 23.0469L39.0752 30.6758L41.9395 23.0469H44.1748V33H42.4521V29.7188L42.623 25.3301L39.6836 33H38.4463L35.5137 25.3369L35.6846 29.7188V33H33.9619V23.0469H36.2041ZM48.0508 33H46.3281V23.0469H48.0508V33ZM57.1631 24.4414H54.0596V33H52.3438V24.4414H49.2676V23.0469H57.1631V24.4414Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"Submit\"},\"name\":{\"type\":\"string\",\"default\":\"Submit\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/submit-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/submit-field/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubmitEdit; });
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var Button = wp.components.Button;
function SubmitEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps({
    className: 'jet-form-builder__submit-wrap'
  });
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_0__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props, {
    attrsSettings: {
      name: {
        show: false
      }
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_0__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('submit-wrap')
  }), wp.element.createElement(Button, {
    isPrimary: true,
    className: 'jet-form-builder__submit',
    key: uniqKey('place_holder_block')
  }, attributes.label || 'Submit'))];
}

/***/ }),

/***/ "./editor/blocks/submit-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/submit-field/index.js ***!
  \*********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/submit-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/submit-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/submit-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Submit Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey']
};


/***/ }),

/***/ "./editor/blocks/text-field/block.json":
/*!*********************************************!*\
  !*** ./editor/blocks/text-field/block.json ***!
  \*********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/text-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"text\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"65\\\" height=\\\"64\\\" viewBox=\\\"0 0 65 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M44.9148 29.2883L45.8495 29.6436L44.9148 29.2883L33.1316 60.2883C32.6359 61.5925 33.594 63 34.9975 63H37.3174C38.1614 63 38.9118 62.4689 39.1962 61.6766L41.812 54.3874H54.1699L56.827 61.6853C57.1138 62.4731 57.8621 63 58.7027 63H61.0025C62.4065 63 63.3647 61.5916 62.868 60.2872L51.0636 29.2872C50.7691 28.5137 50.028 28 49.1982 28H46.7806C45.9503 28 45.209 28.5142 44.9148 29.2883ZM52.1579 48.8063H43.8411C43.8412 48.806 43.8413 48.8056 43.8414 48.8053L47.9911 37.3112L52.1575 48.8053C52.1577 48.8056 52.1578 48.806 52.1579 48.8063Z\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"field_type\":{\"type\":\"string\",\"default\":\"text\"},\"enable_input_mask\":{\"type\":\"boolean\",\"default\":false},\"mask_type\":{\"type\":\"string\",\"default\":\"\"},\"input_mask\":{\"type\":\"string\",\"default\":\"\"},\"mask_visibility\":{\"type\":\"string\",\"default\":\"always\"},\"mask_placeholder\":{\"type\":\"string\",\"default\":\"_\"},\"minlength\":{\"type\":\"number\",\"default\":\"\"},\"maxlength\":{\"type\":\"number\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/text-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/text-field/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./editor/blocks/text-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var _wp$components2 = wp.components,
    NumberControl = _wp$components2.NumberControl,
    InputControl = _wp$components2.InputControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function TextEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;

  var changeNumberValue = function changeNumberValue(key, newValue) {
    var value = newValue && newValue > 0 ? parseInt(newValue) : null;
    props.setAttributes(_defineProperty({}, key, value));
  };

  var blockProps = useBlockProps();
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings')
  }, wp.element.createElement(SelectControl, {
    key: "field_type",
    label: __('Field Type'),
    labelPosition: "top",
    value: attributes.field_type,
    onChange: function onChange(newValue) {
      setAttributes({
        field_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_2__["fieldTypesList"]
  }), wp.element.createElement(NumberControl, {
    label: __('Min length (symbols)'),
    labelPosition: "top",
    key: "minlength",
    min: 1,
    value: attributes.minlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('minlength', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max length (symbols)'),
    labelPosition: "top",
    key: "maxlength",
    min: 1,
    value: attributes.maxlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('maxlength', newValue);
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'enable_input_mask',
    label: __('Set Input Mask'),
    checked: attributes.enable_input_mask,
    help: __('Check this to setup specific input format for the current field'),
    onChange: function onChange(newVal) {
      setAttributes({
        enable_input_mask: newVal
      });
    }
  }), attributes.enable_input_mask && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "mask_type",
    label: __('Mask type'),
    labelPosition: "top",
    value: attributes.mask_type,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_2__["maskTypesList"]
  }), wp.element.createElement(TextControl, {
    key: "input_mask",
    label: __('Input mask'),
    value: attributes.input_mask,
    onChange: function onChange(newValue) {
      setAttributes({
        input_mask: newValue
      });
    }
  }), !attributes.mask_type && wp.element.createElement("div", {
    className: 'help-input'
  }, attrHelp('input_mask_default')), 'datetime' === attributes.mask_type && wp.element.createElement("div", {
    className: 'help-input'
  }, __('Examples:', 'jet-form-builder'), " dd/mm/yyyy, mm/dd/yyyy", wp.element.createElement("br", null), __('More info - ', 'jet-form-builder'), wp.element.createElement("a", {
    href: attrHelp('input_mask_datetime_link'),
    target: "_blank"
  }, __('here', 'jet-form-builder'))), wp.element.createElement(SelectControl, {
    key: "mask_visibility",
    label: __('Mask visibility'),
    labelPosition: "top",
    value: attributes.mask_visibility,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_visibility: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_2__["maskVisibilitiesList"]
  }), wp.element.createElement(SelectControl, {
    key: "mask_placeholder",
    label: __('Mask placeholder'),
    labelPosition: "top",
    value: attributes.mask_placeholder,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_placeholder: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_2__["maskPlaceholdersList"]
  }))), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    placeholder: attributes.placeholder,
    key: uniqKey('place_holder_block'),
    onChange: function onChange() {}
  })))];
}
;

/***/ }),

/***/ "./editor/blocks/text-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/text-field/index.js ***!
  \*******************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/text-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/text-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/text-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Text Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/text-field/options.js":
/*!*********************************************!*\
  !*** ./editor/blocks/text-field/options.js ***!
  \*********************************************/
/*! exports provided: fieldTypesList, maskTypesList, maskPlaceholdersList, maskVisibilitiesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldTypesList", function() { return fieldTypesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskTypesList", function() { return maskTypesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskPlaceholdersList", function() { return maskPlaceholdersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskVisibilitiesList", function() { return maskVisibilitiesList; });
var __ = wp.i18n.__;
var fieldTypesList = [{
  value: 'text',
  label: __('Text')
}, {
  value: 'email',
  label: __('Email')
}, {
  value: 'url',
  label: __('Url')
}, {
  value: 'tel',
  label: __('Tel')
}, {
  value: 'password',
  label: __('Password')
}];
var maskTypesList = [{
  value: '',
  label: __('Default')
}, {
  value: 'datetime',
  label: __('Datetime')
}];
var maskVisibilitiesList = [{
  value: 'always',
  label: __('Always')
}, {
  value: 'hover',
  label: __('Hover')
}, {
  value: 'focus',
  label: __('Focus')
}];
var maskPlaceholdersList = [{
  value: '_',
  label: '_'
}, {
  value: '-',
  label: '-'
}, {
  value: '*',
  label: '*'
}, {
  value: '•',
  label: '•'
}];


/***/ }),

/***/ "./editor/blocks/textarea-field/block.json":
/*!*************************************************!*\
  !*** ./editor/blocks/textarea-field/block.json ***!
  \*************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/textarea-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"textarea\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"6\\\" y=\\\"6\\\" width=\\\"52\\\" height=\\\"52\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"52\\\" y=\\\"1\\\" width=\\\"11\\\" height=\\\"11\\\" rx=\\\"1\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"52\\\" y=\\\"52\\\" width=\\\"11\\\" height=\\\"11\\\" rx=\\\"1\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"1\\\" width=\\\"11\\\" height=\\\"11\\\" rx=\\\"1\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"52\\\" width=\\\"11\\\" height=\\\"11\\\" rx=\\\"1\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M43 20.581C44.1046 20.581 45 19.6856 45 18.581V17C45 15.8954 44.1046 15 43 15H20C18.8954 15 18 15.8954 18 17V18.581C18 19.6856 18.8954 20.581 20 20.581H28.3686V48C28.3686 49.1046 29.264 50 30.3686 50H32.6092C33.7138 50 34.6092 49.1046 34.6092 48L34.6092 20.581H43Z\\\" fill=\\\"#6F8BFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"minlength\":{\"type\":\"number\",\"default\":\"\"},\"maxlength\":{\"type\":\"number\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/textarea-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/textarea-field/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextareaEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function TextareaEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var blockProps = useBlockProps();

  var changeNumberValue = function changeNumberValue(key, newValue) {
    var value = newValue && newValue > 0 ? parseInt(newValue) : null;
    setAttributes(_defineProperty({}, key, value));
  };

  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(NumberControl, {
    label: __('Min length (symbols)'),
    labelPosition: "top",
    key: "minlength",
    min: 1,
    value: attributes.minlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('minlength', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max length (symbols)'),
    labelPosition: "top",
    key: "maxlength",
    min: 1,
    value: attributes.maxlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('maxlength', newValue);
    }
  })), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextareaControl, {
    key: uniqKey('place_holder_block'),
    placeholder: attributes.placeholder,
    onChange: function onChange() {}
  })))];
}

/***/ }),

/***/ "./editor/blocks/textarea-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/textarea-field/index.js ***!
  \***********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/textarea-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/textarea-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/textarea-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Textarea Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/time-field/block.json":
/*!*********************************************!*\
  !*** ./editor/blocks/time-field/block.json ***!
  \*********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/time-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"time\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"43\\\" cy=\\\"42\\\" r=\\\"14\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"42\\\" y=\\\"43\\\" width=\\\"7\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><rect x=\\\"42\\\" y=\\\"35\\\" width=\\\"2\\\" height=\\\"10\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/time-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/time-field/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function TimeEdit(props) {
  var attributes = props.attributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: uniqKey('place_holder_block'),
    placeholder: 'Input type="time"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/time-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/time-field/index.js ***!
  \*******************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/time-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/time-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/time-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Time Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/blocks/wysiwyg-field/block.json":
/*!************************************************!*\
  !*** ./editor/blocks/wysiwyg-field/block.json ***!
  \************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/wysiwyg-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"wysiwyg\",\"text\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"15\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"#4EFEC3\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M10 34V23H13.7708C15.077 23 16.0678 23.2569 16.7431 23.7706C17.4184 24.2793 17.756 25.0272 17.756 26.0144C17.756 26.5533 17.6205 27.0293 17.3494 27.4423C17.0782 27.8503 16.7012 28.15 16.2181 28.3413C16.7702 28.4824 17.2039 28.7669 17.5194 29.1951C17.8398 29.6232 18 30.147 18 30.7665C18 31.8242 17.6697 32.625 17.0092 33.169C16.3487 33.7129 15.4073 33.9899 14.1848 34H10ZM12.2181 29.2102V32.1793H14.1183C14.6408 32.1793 15.0474 32.0533 15.3383 31.8015C15.634 31.5446 15.7819 31.1921 15.7819 30.7438C15.7819 29.7365 15.2717 29.2253 14.2514 29.2102H12.2181ZM12.2181 27.6085H13.8595C14.9784 27.5884 15.5379 27.1326 15.5379 26.2411C15.5379 25.7424 15.3949 25.3848 15.1091 25.1683C14.8281 24.9467 14.382 24.8359 13.7708 24.8359H12.2181V27.6085Z\\\" fill=\\\"#162B40\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M35.0634 25.2306H32.8394L30.5817 31.8276H32.0422V34.0581H26V31.8276H28.2241L30.4819 25.2306H29.0212V23H35.0634V25.2306Z\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"44.4385\\\" cy=\\\"24.375\\\" r=\\\"1.375\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"44.4385\\\" cy=\\\"28.5\\\" r=\\\"1.375\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"44.4385\\\" cy=\\\"32.625\\\" r=\\\"1.375\\\" fill=\\\"#162B40\\\"/><path d=\\\"M47.1885 24.375H54.0635\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.375\\\"/><path d=\\\"M47.1885 28.5H54.0635\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.375\\\"/><path d=\\\"M47.1885 32.625H54.0635\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.375\\\"/></svg>\",\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/wysiwyg-field/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/wysiwyg-field/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WysiwygEdit; });
/* harmony import */ var _components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/field-wrapper */ "./editor/components/field-wrapper.js");
/* harmony import */ var _controls_field_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controls/field-control */ "./editor/blocks/controls/field-control.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var TextareaControl = wp.components.TextareaControl;
function WysiwygEdit(props) {
  var uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();
  return [wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["ToolBarFields"], _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["GeneralFields"], _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(_controls_field_control__WEBPACK_IMPORTED_MODULE_1__["AdvancedFields"], _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(_components_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextareaControl, {
    key: uniqKey('place_holder_block'),
    onChange: function onChange() {}
  })))];
}

/***/ }),

/***/ "./editor/blocks/wysiwyg-field/index.js":
/*!**********************************************!*\
  !*** ./editor/blocks/wysiwyg-field/index.js ***!
  \**********************************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/wysiwyg-field/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/wysiwyg-field/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./editor/blocks/wysiwyg-field/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_1__; });


var __ = wp.i18n.__;
var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Wysiwyg Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp']
};


/***/ }),

/***/ "./editor/components/actions/action-fields-map.js":
/*!********************************************************!*\
  !*** ./editor/components/actions/action-fields-map.js ***!
  \********************************************************/
/*! exports provided: ActionFieldsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFieldsMap", function() { return ActionFieldsMap; });
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager */ "./editor/components/manager.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var ActionFieldsMap = function ActionFieldsMap(_ref) {
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
};
Object(_manager__WEBPACK_IMPORTED_MODULE_0__["saveGlobalComponent"])('JetFBComponents', {
  ActionFieldsMap: ActionFieldsMap
});

/***/ }),

/***/ "./editor/components/actions/action-messages.js":
/*!******************************************************!*\
  !*** ./editor/components/actions/action-messages.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;

var ActionMessages = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(ActionMessages, _wp$element$Component);

  var _super = _createSuper(ActionMessages);

  function ActionMessages(props) {
    var _this;

    _classCallCheck(this, ActionMessages);

    _this = _super.call(this, props);

    _this.setMessages();

    return _this;
  }

  _createClass(ActionMessages, [{
    key: "setMessages",
    value: function setMessages() {
      if (this.props.settings && this.props.settings.messages) {
        return;
      }

      var messages = {};
      Object.entries(this.props.source.__messages).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            type = _ref2[0],
            data = _ref2[1];

        messages[type] = data.value;
      });
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, {
        messages: messages
      }));
    }
  }, {
    key: "getMessage",
    value: function getMessage(name) {
      var settings = this.props.settings;

      if (settings['messages'] && settings['messages'][name]) {
        return settings['messages'][name];
      }

      return '';
    }
  }, {
    key: "changeFieldsMap",
    value: function changeFieldsMap(_ref3) {
      var source = _ref3.source,
          nameField = _ref3.nameField,
          value = _ref3.value;
      var fieldsMap = Object.assign({}, this.props.settings[source], _defineProperty({}, nameField, value));
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          messages = _this$props.messages;

      var onChangeMessage = function onChangeMessage(value, nameField) {
        var source = 'messages';

        _this2.changeFieldsMap({
          value: value,
          nameField: nameField,
          source: source
        });
      };

      return wp.element.createElement(BaseControl, {
        label: __('Messages Settings:'),
        key: "messages_settings_fields"
      }, wp.element.createElement("div", {
        className: "jet-user-meta-rows"
      }, settings.messages && Object.entries(settings.messages).map(function (_ref4, id) {
        var _ref5 = _slicedToArray(_ref4, 2),
            type = _ref5[0],
            data = _ref5[1];

        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'message_' + type + id
        }, wp.element.createElement(TextControl, {
          key: type + id,
          label: messages(type).label,
          value: _this2.getMessage(type),
          onChange: function onChange(newValue) {
            return onChangeMessage(newValue, type);
          }
        }));
      })));
    }
  }]);

  return ActionMessages;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["default"] = (ActionMessages);

/***/ }),

/***/ "./editor/components/actions/action-modal.js":
/*!***************************************************!*\
  !*** ./editor/components/actions/action-modal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionModal; });
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

/***/ }),

/***/ "./editor/components/actions/action-wrapper.js":
/*!*****************************************************!*\
  !*** ./editor/components/actions/action-wrapper.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withActionLocalizeScript; });
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/action-helper */ "./editor/helpers/action-helper.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function withActionLocalizeScript(actionType, ActionInstance) {
  var localizedData = Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_0__["fromLocalizeHelper"])('getLocalizedFullPack')(actionType);
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

/***/ "./editor/components/base-select-check-radio/from-generators-fields.js":
/*!*****************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-generators-fields.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;

function FromGeneratorsFields(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "generator_function",
    label: "Generator Function",
    labelPosition: "top",
    value: attributes.generator_function,
    onChange: function onChange(newValue) {
      setAttributes({
        generator_function: newValue
      });
    },
    options: window.JetFormSelectFieldData.generators_list
  }), wp.element.createElement(TextControl, {
    key: "generator_field",
    label: "Field Name",
    value: attributes.generator_field,
    help: attrHelp('generator_field', attributes),
    onChange: function onChange(newValue) {
      setAttributes({
        generator_field: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "from_generator__value_from_meta",
    label: "Value from meta field",
    help: attrHelp('value_from_meta'),
    value: attributes.from_generator__value_from_meta,
    onChange: function onChange(newValue) {
      setAttributes({
        from_generator__value_from_meta: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calculated_value_from_key",
    label: "Calculated value from meta field",
    help: attrHelp('calculated_value_from_key'),
    value: attributes.calculated_value_from_key,
    onChange: function onChange(newValue) {
      setAttributes({
        calculated_value_from_key: newValue
      });
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FromGeneratorsFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/from-manual-fields.js":
/*!*************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-manual-fields.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeater_with_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repeater-with-state */ "./editor/components/repeater-with-state.js");
/* harmony import */ var _actions_action_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/action-modal */ "./editor/components/actions/action-modal.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
var addNewOption = {
  label: '',
  value: '',
  calculate: ''
};

function FromManualFields(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showManualModal = _useState2[0],
      setShowModal = _useState2[1];

  var setAttributes = props.setAttributes,
      attributes = props.attributes;

  var toggleModal = function toggleModal() {
    setShowModal(function (toggle) {
      return !toggle;
    });
  };

  var onUpdateOptions = function onUpdateOptions(items) {
    /* Remove empty options */
    var field_options = items.filter(function (option) {
      return Boolean(option.value) || Boolean(option.calculate);
    });
    setAttributes({
      field_options: field_options
    });
  };

  var itemHeading = function itemHeading(_ref) {
    var currentItem = _ref.currentItem,
        index = _ref.index;
    var leftPart = ["#".concat(index + 1)];
    var rightPart = [];

    if (currentItem.label) {
      rightPart.push("Label [".concat(currentItem.label, "]"));
    }

    if (currentItem.value) {
      rightPart.push("Value [".concat(currentItem.value, "]"));
    }

    if (currentItem.calculate) {
      rightPart.push("Calculate [".concat(currentItem.calculate, "]"));
    }

    leftPart.push(rightPart.join(' | '));
    return leftPart.join(' ');
  };

  return wp.element.createElement(React.Fragment, {
    key: "jet-form/manage-manual-items"
  }, wp.element.createElement(Button, {
    isSecondary: true,
    onClick: toggleModal,
    icon: 'admin-tools',
    style: {
      marginBottom: '15px'
    }
  }, __('Manage Items')), showManualModal && wp.element.createElement(_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: 'Edit Manual Options',
    onRequestClose: toggleModal,
    classNames: ['width-60']
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(_repeater_with_state__WEBPACK_IMPORTED_MODULE_0__["default"], {
      items: attributes.field_options,
      onSaveItems: onUpdateOptions,
      newItem: addNewOption,
      onUnMount: onRequestClose,
      isSaveAction: actionClick,
      addNewButtonLabel: __('Add New Option'),
      ItemHeading: itemHeading
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
        key: "manual_label",
        label: __('Label'),
        value: currentItem.label,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            label: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "manual_value",
        label: __('Value'),
        value: currentItem.value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            value: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "manual_calculate",
        label: __('Calculate'),
        value: currentItem.calculate,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            calculate: newValue
          });
        }
      }));
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FromManualFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/from-post-terms-fields.js":
/*!*****************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-post-terms-fields.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources */ "./editor/components/base-select-check-radio/sources.js");

var TextControl = wp.components.TextControl;
var __ = wp.i18n.__;

function FromPostTermsFields(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;
  return wp.element.createElement(React.Fragment, null, Object(_sources__WEBPACK_IMPORTED_MODULE_0__["getSelectSource"])(props), wp.element.createElement(TextControl, {
    key: "value_from_key",
    label: __('Value from meta field'),
    value: attributes.value_from_key,
    help: attrHelp('value_from_meta'),
    onChange: function onChange(newValue) {
      setAttributes({
        value_from_key: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calculated_value_from_key",
    label: __('Calculated value from meta field'),
    value: attributes.calculated_value_from_key,
    help: attrHelp('calculated_value_from_key'),
    onChange: function onChange(newValue) {
      setAttributes({
        calculated_value_from_key: newValue
      });
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FromPostTermsFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js":
/*!*************************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/select-radio-check-placeholder.js ***!
  \*************************************************************************************/
/*! exports provided: SelectRadioCheckPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRadioCheckPlaceholder", function() { return SelectRadioCheckPlaceholder; });
/* harmony import */ var _field_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field-wrapper */ "./editor/components/field-wrapper.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    RadioControl = _wp$components.RadioControl;
var DELIMITER = ' - ';
function SelectRadioCheckPlaceholder(props) {
  var _props$editProps = props.editProps,
      blockName = _props$editProps.blockName,
      uniqKey = _props$editProps.uniqKey,
      scriptData = props.scriptData,
      attributes = props.attributes;

  var getCheckbox = function getCheckbox(label) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-form-builder__field-wrap checkboxes-wrap',
      key: "check_place_holder_block_".concat(label + index),
      label: label,
      onChange: function onChange() {}
    });
  };

  var getSelect = function getSelect(_ref) {
    var options = _ref.options,
        index = _ref.index;
    return wp.element.createElement(SelectControl, {
      key: "select_place_holder_block_".concat(attributes.name + index) //label={ attributes.label }
      ,
      options: options //help={ attributes.desc }
      ,
      onChange: function onChange() {}
    });
  };

  var getRadio = function getRadio(_ref2) {
    var options = _ref2.options,
        label = _ref2.label,
        index = _ref2.index;
    return wp.element.createElement(RadioControl, {
      key: "radio_place_holder_block_".concat(label + index) //label={ attributes.label }
      ,
      options: options //help={ attributes.desc }
      ,
      onChange: function onChange() {}
    });
  };

  var getProp = function getProp(of, propName) {
    var ifEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if ('undefined' !== typeof of && 'undefined' !== typeof of[propName]) {
      return of[propName];
    }

    return ifEmpty;
  };

  var getLabelProp = function getLabelProp(of) {
    return getProp(of, 'label');
  };

  var getFullLabel = function getFullLabel() {
    var field_options_from = attributes.field_options_from,
        field_options_post_type = attributes.field_options_post_type,
        field_options_tax = attributes.field_options_tax,
        field_options_key = attributes.field_options_key,
        generator_function = attributes.generator_function,
        generator_field = attributes.generator_field;
    var full_label = [];
    var value = [];

    switch (field_options_from) {
      case 'posts':
        if (field_options_post_type) {
          value.push(getLabelProp(scriptData.post_types_list.find(function (option) {
            return option.value === field_options_post_type;
          })));
        }

        break;

      case 'terms':
        if (field_options_tax) {
          value.push(getLabelProp(scriptData.taxonomies_list.find(function (option) {
            return option.value === field_options_tax;
          })));
        }

        break;

      case 'meta_field':
        if (field_options_key) {
          value.push(field_options_key);
        }

        break;

      case 'generate':
        if (generator_function) {
          value.push(getLabelProp(scriptData.generators_list.find(function (option) {
            return option.value === generator_function;
          })));
        }

        if (generator_field) {
          value.push(generator_field);
        }

        break;
    }

    full_label.push(getLabelProp(scriptData.options_from.find(function (option) {
      return option.value === field_options_from;
    })));

    if (value.length) {
      full_label.push(value.join(DELIMITER));
    }

    return full_label.join(DELIMITER);
  };

  var getManualField = function getManualField() {
    var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (blockName.includes('checkbox')) {
      if (label) {
        return getCheckbox(label);
      }

      return attributes.field_options.map(function (_ref3, index) {
        var checkLabel = _ref3.label;
        return getCheckbox(checkLabel, index);
      });
    } else if (blockName.includes('select')) {
      if (label) {
        return getSelect({
          attributes: attributes,
          options: [{
            label: label
          }]
        });
      }

      return getSelect({
        attributes: attributes,
        options: attributes.field_options
      });
    } else if (blockName.includes('radio')) {
      if (label) {
        return getRadio({
          attributes: attributes,
          options: [{
            label: label
          }]
        });
      }

      return getRadio({
        attributes: attributes,
        options: attributes.field_options
      });
    }
  };

  return wp.element.createElement(_field_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    key: 'jet-form-builder-field-wrapper'
  }, props), wp.element.createElement("div", {
    className: 'jet-form-builder__fields-group'
  }, ('manual_input' !== attributes.field_options_from || !attributes.field_options.length) && getManualField(getFullLabel(scriptData, attributes)) || null, 'manual_input' === attributes.field_options_from && attributes.field_options.length && getManualField() || null));
}

/***/ }),

/***/ "./editor/components/base-select-check-radio/select-radio-check.js":
/*!*************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/select-radio-check.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/select-radio-chekc-options */ "./editor/blocks/select-radio-chekc-options.js");
/* harmony import */ var _from_manual_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-manual-fields */ "./editor/components/base-select-check-radio/from-manual-fields.js");
/* harmony import */ var _from_post_terms_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-post-terms-fields */ "./editor/components/base-select-check-radio/from-post-terms-fields.js");
/* harmony import */ var _from_generators_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-generators-fields */ "./editor/components/base-select-check-radio/from-generators-fields.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;

function SelectRadioCheck(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  var field_options_from = attributes.field_options_from;
  return isSelected && wp.element.createElement("div", {
    className: "inside-block-options"
  }, wp.element.createElement(SelectControl, {
    key: "field_options_from",
    label: "Fill Options From",
    labelPosition: "top",
    value: field_options_from,
    onChange: function onChange(newValue) {
      setAttributes({
        field_options_from: newValue
      });
    },
    options: _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__["listFrom"]
  }), 'manual_input' === field_options_from && wp.element.createElement(_from_manual_fields__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: "from_manual"
  }, props)), ['posts', 'terms'].includes(field_options_from) && wp.element.createElement(_from_post_terms_fields__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    key: "form_posts_terms"
  }, props)), 'meta_field' === field_options_from && wp.element.createElement(TextControl, {
    key: "field_options_key",
    label: "Meta field to get value from",
    value: attributes.field_options_key,
    onChange: function onChange(newValue) {
      setAttributes({
        field_options_key: newValue
      });
    }
  }), 'generate' === field_options_from && wp.element.createElement(_from_generators_fields__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    key: "form_generators"
  }, props)), children);
}

/* harmony default export */ __webpack_exports__["default"] = (SelectRadioCheck);

/***/ }),

/***/ "./editor/components/base-select-check-radio/sources.js":
/*!**************************************************************!*\
  !*** ./editor/components/base-select-check-radio/sources.js ***!
  \**************************************************************/
/*! exports provided: getSelectSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectSource", function() { return getSelectSource; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var localizeData = window.JetFormSelectFieldData;
var SelectControl = wp.components.SelectControl;
var sources = {
  terms: {
    label: __('Taxonomy'),
    attr: 'field_options_tax',
    options: localizeData.taxonomies_list
  },
  posts: {
    label: __('Post Type'),
    attr: 'field_options_post_type',
    options: localizeData.post_types_list
  }
};

var getSelectSource = function getSelectSource(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var field_options_from = attributes.field_options_from;

  if (!sources[field_options_from] && !sources[field_options_from]) {
    return null;
  }

  var source = sources[field_options_from];
  return wp.element.createElement(SelectControl, {
    label: source.label,
    labelPosition: "top",
    value: attributes[source.attr],
    onChange: function onChange(newValue) {
      setAttributes(_defineProperty({}, source.attr, newValue));
    },
    options: source.options
  });
};



/***/ }),

/***/ "./editor/components/field-with-preset.js":
/*!************************************************!*\
  !*** ./editor/components/field-with-preset.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_action_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/action-modal */ "./editor/components/actions/action-modal.js");
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
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    G = _wp$components.G,
    Path = _wp$components.Path,
    Circle = _wp$components.Circle,
    Rect = _wp$components.Rect,
    SVG = _wp$components.SVG,
    Modal = _wp$components.Modal,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

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
  })))), modalState && wp.element.createElement(_actions_action_modal__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onRequestClose: changeModalState,
    classNames: ['width-60'],
    title: 'Edit Preset'
  }, function (modalProps) {
    return wp.element.createElement(ModalEditor, modalProps);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FieldWithPreset);

/***/ }),

/***/ "./editor/components/field-wrapper.js":
/*!********************************************!*\
  !*** ./editor/components/field-wrapper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FieldWrapper; });
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");

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

/***/ }),

/***/ "./editor/components/macros-inserter.js":
/*!**********************************************!*\
  !*** ./editor/components/macros-inserter.js ***!
  \**********************************************/
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
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

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

/***/ "./editor/components/manager.js":
/*!**************************************!*\
  !*** ./editor/components/manager.js ***!
  \**************************************/
/*! exports provided: saveGlobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGlobalComponent", function() { return saveGlobalComponent; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var saveGlobalComponent = function saveGlobalComponent(objectName, instance) {
  window[objectName] = _objectSpread(_objectSpread({}, window[objectName]), instance);
};

/***/ }),

/***/ "./editor/components/presets/dynamic-preset.js":
/*!*****************************************************!*\
  !*** ./editor/components/presets/dynamic-preset.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preset_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preset-render */ "./editor/components/presets/preset-render.js");
/* harmony import */ var _preset_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preset-editor */ "./editor/components/presets/preset-editor.js");
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
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_0__["default"].GlobalField, {
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
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_0__["default"].MapField, {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_preset_editor__WEBPACK_IMPORTED_MODULE_1__["default"])(DynamicPreset));

/***/ }),

/***/ "./editor/components/presets/general-preset.js":
/*!*****************************************************!*\
  !*** ./editor/components/presets/general-preset.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preset_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preset-render */ "./editor/components/presets/preset-render.js");
/* harmony import */ var _preset_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preset-editor */ "./editor/components/presets/preset-editor.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function GeneralPreset(_ref) {
  var value = _ref.value,
      availableFields = _ref.availableFields,
      isMapFieldVisible = _ref.isMapFieldVisible,
      isVisible = _ref.isVisible,
      onChange = _ref.onChange;
  var position = 'general';

  var onChangeValue = function onChangeValue(newValue, name) {
    onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, name, newValue)));
  };

  return wp.element.createElement(React.Fragment, null, window.JetFormEditorData.presetConfig.global_fields.map(function (data, index) {
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_0__["default"].GlobalField, {
      key: data.name + index,
      value: value,
      index: index,
      data: data,
      options: data.options,
      onChangeValue: onChangeValue,
      isVisible: isVisible,
      position: position
    });
  }), value.from && availableFields.map(function (field, index) {
    return wp.element.createElement(_preset_render__WEBPACK_IMPORTED_MODULE_0__["default"].AvailableMapField, {
      key: field + index,
      fieldsMap: value.fields_map,
      field: field,
      index: index,
      onChangeValue: onChangeValue,
      isMapFieldVisible: isMapFieldVisible,
      value: value
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_preset_editor__WEBPACK_IMPORTED_MODULE_1__["default"])(GeneralPreset));

/***/ }),

/***/ "./editor/components/presets/preset-editor.js":
/*!****************************************************!*\
  !*** ./editor/components/presets/preset-editor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preset_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preset-render */ "./editor/components/presets/preset-render.js");
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

/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Modal = _wp$components.Modal;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

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

    return wp.element.createElement(WrappedComponent, _extends({}, props, {
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

/***/ "./editor/components/presets/preset-render.js":
/*!****************************************************!*\
  !*** ./editor/components/presets/preset-render.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$components = wp.components,
    PanelColor = _wp$components.PanelColor,
    IconButton = _wp$components.IconButton,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    CheckboxControl = _wp$components.CheckboxControl,
    Disabled = _wp$components.Disabled,
    BaseControl = _wp$components.BaseControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var PresetRender = {
  GlobalField: function GlobalField(_ref) {
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
  },
  AvailableMapField: function AvailableMapField(_ref2) {
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
  },
  MapField: function MapField(_ref4) {
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
};
/* harmony default export */ __webpack_exports__["default"] = (PresetRender);

/***/ }),

/***/ "./editor/components/repeater-with-state.js":
/*!**************************************************!*\
  !*** ./editor/components/repeater-with-state.js ***!
  \**************************************************/
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
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    Draggable = _wp$components.Draggable,
    Icon = _wp$components.Icon,
    DropZoneProvider = _wp$components.DropZoneProvider,
    DropZone = _wp$components.DropZone,
    Dashicon = _wp$components.Dashicon,
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

/***/ "./editor/components/wrapper-required-control.js":
/*!*******************************************************!*\
  !*** ./editor/components/wrapper-required-control.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperRequiredControl; });
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager */ "./editor/components/manager.js");
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
Object(_manager__WEBPACK_IMPORTED_MODULE_0__["saveGlobalComponent"])('JetFBComponents', {
  WrapperRequiredControl: WrapperRequiredControl
});

/***/ }),

/***/ "./editor/form-actions/activecampaign.js":
/*!***********************************************!*\
  !*** ./editor/form-actions/activecampaign.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_2__["addAction"])('active_campaign', /*#__PURE__*/function (_IntegrationComponent) {
  _inherits(ActiveCampaignAction, _IntegrationComponent);

  var _super = _createSuper(ActiveCampaignAction);

  function ActiveCampaignAction(props) {
    var _this;

    _classCallCheck(this, ActiveCampaignAction);

    _this = _super.call(this, props);
    _this.validateActiveCampaignData = _this.validateActiveCampaignData.bind(_assertThisInitialized(_this));
    _this.getActiveCampaignData = _this.getActiveCampaignData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ActiveCampaignAction, [{
    key: "validateActiveCampaignData",
    value: function validateActiveCampaignData() {
      this.setState({
        className: ['loading']
      });
      this.getActiveCampaignData(true);
    }
  }, {
    key: "getActiveCampaignData",
    value: function getActiveCampaignData() {
      var isValidate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var self = this,
          lists = [],
          endpoint = '/admin/api.php?api_action=list_list';
      var _this$props$settings = this.props.settings,
          settings = _this$props$settings.settings,
          api_url = _this$props$settings.api_url,
          api_key = _this$props$settings.api_key;
      var url = api_url + endpoint + '&api_key=' + api_key + '&ids=all&api_output=json';
      jQuery.getJSON(url).success(function (data) {
        if (undefined !== data.result_code && data.result_code) {
          for (var prop in data) {
            if (undefined === data[prop].id) {
              continue;
            }

            lists.push({
              value: data[prop].id,
              label: data[prop].name
            });
          }

          self.onChangeSetting(lists, 'data');
          self.onChangeSetting(true, 'isValidAPI');
          self.setState({
            className: ['is-valid']
          });
        } else {
          self.onChangeSetting(false, 'isValidAPI');
          self.setState({
            className: ['is-invalid']
          });
        }
      }).error(function () {
        self.onChangeSetting(false, 'isValidAPI');
        self.setState({
          className: ['is-invalid']
        });
      });
    }
  }, {
    key: "getLists",
    value: function getLists() {
      var settings = this.props.settings;

      if (settings.data && settings.data) {
        return this.addPlaceholderForSelect(settings.data);
      }

      return [];
    }
  }, {
    key: "formatEntriesArray",
    value: function formatEntriesArray() {
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var isNeedPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var placeholder = {
        label: '--'
      };

      if (!entries) {
        return [];
      }

      var options = Object.entries(entries).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            label = _ref2[1];

        return {
          value: value,
          label: label
        };
      });
      return isNeedPlaceholder ? [placeholder].concat(_toConsumableArray(options)) : options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(React.Fragment, {
        key: "activecampaign"
      }, wp.element.createElement(BaseControl, {
        label: label('api_data'),
        className: "input-with-button with-wrap",
        key: 'activecampaign_input_key'
      }, wp.element.createElement(TextControl, {
        key: "api_url",
        value: settings.api_url,
        help: label('api_url'),
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'api_url');
        }
      }), wp.element.createElement(TextControl, {
        key: "api_key",
        help: label('api_key'),
        value: settings.api_key,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'api_key');
        }
      }), settings.api_key && settings.api_url && wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: this.validateActiveCampaignData,
        className: this.state.className.join(' ') + ' jet-form-validate-button'
      }, wp.element.createElement("i", {
        className: "dashicons"
      }), label('validate_api_key')), wp.element.createElement("div", null), wp.element.createElement("div", null, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
        href: help('api_key_link')
      }, help('api_key_link_suffix')))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        key: "activecampaign_input_key",
        className: "input-with-button"
      }, wp.element.createElement(SelectControl, {
        className: "full-width",
        key: "activecampaign_select_lists",
        label: label('list_id'),
        labelPosition: "side",
        value: settings.list_id,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'list_id');
        },
        options: this.getLists()
      }), wp.element.createElement(Button, {
        key: 'update_list_ids',
        isPrimary: true,
        onClick: this.getActiveCampaignData
      }, label('update_list_ids'))), wp.element.createElement(TextControl, {
        key: "activecampaign_tags",
        label: label('tags'),
        value: settings.tags,
        help: help('tags'),
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'tags');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('fields_map'),
        key: "activecampaign_fields_map"
      }, wp.element.createElement("div", {
        className: "jet-user-meta-rows"
      }, Object.entries(source.activecampaign_fields).map(function (_ref3, index) {
        var _ref4 = _slicedToArray(_ref3, 2),
            fieldName = _ref4[0],
            fieldLabel = _ref4[1];

        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'user_meta_' + fieldName + index
        }, wp.element.createElement(SelectControl, {
          className: "full-width",
          key: fieldName + index,
          label: fieldLabel,
          labelPosition: "side",
          value: _this2.getFieldDefault(fieldName),
          onChange: function onChange(value) {
            return _this2.onChangeFieldMap(value, fieldName);
          },
          options: _this2.formFieldsList
        }));
      })))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return ActiveCampaignAction;
}(_integration_component__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./editor/form-actions/base-action-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/base-action-component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseActionComponent; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BaseActionComponent = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(BaseActionComponent, _wp$element$Component);

  var _super = _createSuper(BaseActionComponent);

  function BaseActionComponent() {
    _classCallCheck(this, BaseActionComponent);

    return _super.apply(this, arguments);
  }

  _createClass(BaseActionComponent, [{
    key: "addPlaceholderForSelect",
    value: function addPlaceholderForSelect(array) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';
      return [{
        label: label
      }].concat(_toConsumableArray(array));
    }
  }, {
    key: "onChangeSetting",
    value: function onChangeSetting(value, key) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, key, value)));
    }
  }, {
    key: "getFieldDefault",
    value: function getFieldDefault(name) {
      var source = 'fields_map';
      return this.getFieldByName({
        name: name,
        source: source
      });
    }
  }, {
    key: "getFieldMeta",
    value: function getFieldMeta(name) {
      var source = 'meta_fields_map';
      return this.getFieldByName({
        name: name,
        source: source
      });
    }
  }, {
    key: "getFieldByName",
    value: function getFieldByName(_ref) {
      var source = _ref.source,
          name = _ref.name;
      var settings = this.props.settings;

      if (typeof settings[source] !== 'undefined' && typeof settings[source][name] !== 'undefined') {
        return settings[source][name];
      }

      return '';
    }
  }, {
    key: "onChangeFieldMap",
    value: function onChangeFieldMap(value, nameField) {
      var source = 'fields_map';
      this.changeFieldsMap({
        value: value,
        nameField: nameField,
        source: source
      });
    }
  }, {
    key: "onChangeMetaFieldMap",
    value: function onChangeMetaFieldMap(value, nameField) {
      var source = 'meta_fields_map';
      this.changeFieldsMap({
        value: value,
        nameField: nameField,
        source: source
      });
    }
  }, {
    key: "changeFieldsMap",
    value: function changeFieldsMap(_ref2) {
      var source = _ref2.source,
          nameField = _ref2.nameField,
          value = _ref2.value;
      var fieldsMap = Object.assign({}, this.props.settings[source], _defineProperty({}, nameField, value));
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));
    }
  }]);

  return BaseActionComponent;
}(wp.element.Component);



/***/ }),

/***/ "./editor/form-actions/call-hook.js":
/*!******************************************!*\
  !*** ./editor/form-actions/call-hook.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__["addAction"])('call_hook', function CallHookAction(_ref) {
  var settings = _ref.settings,
      onChange = _ref.onChange,
      source = _ref.source,
      label = _ref.label,
      help = _ref.help;

  var onChangeSetting = function onChangeSetting(value, key) {
    onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "call_hook"
  }, wp.element.createElement(TextControl, {
    key: "hook_name",
    label: label('hook_name'),
    value: settings.hook_name,
    onChange: function onChange(newVal) {
      onChangeSetting(newVal, 'hook_name');
    }
  }), wp.element.createElement(BaseControl, {
    key: "help_message"
  }, wp.element.createElement("div", {
    className: "jet-call-hook-instruction"
  }, __('Called hook names:'), wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("code", null, "jet-form-builder/custom-action/", settings.hook_name), " - ", __('WP action. Perform a hook without an ability to validate form,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "jet-form-builder/custom-filter/", settings.hook_name), " - ", __('WP filter. Perform a hook with an ability to validate form. Allows to return error message.'))), __('Hook arguments:'), wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("code", null, "$result"), " - ", __('only for WP filter. Hook execution result,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "$request"), " - ", __('array with submitted form data,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "$action_handler"), " - ", __('action handler object, allows to manage actions data and to throws error status:'), wp.element.createElement("code", null, "throw new Action_Exception( 'failed' )"))))));
  /* eslint-enable jsx-a11y/no-onchange */
});

/***/ }),

/***/ "./editor/form-actions/call-webhook.js":
/*!*********************************************!*\
  !*** ./editor/form-actions/call-webhook.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__["addAction"])('call_webhook', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(CallWebHookAction, _wp$element$Component);

  var _super = _createSuper(CallWebHookAction);

  function CallWebHookAction(props) {
    var _this;

    _classCallCheck(this, CallWebHookAction);

    _this = _super.call(this, props);
    _this.fields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__["getFormFieldsBlocks"])();
    return _this;
  }

  _createClass(CallWebHookAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          settings = _this$props.settings,
          label = _this$props.label,
          onChangeSetting = _this$props.onChangeSetting;
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(TextControl, {
        key: "webhook_url",
        label: label('webhook_url'),
        value: settings.webhook_url,
        onChange: function onChange(newVal) {
          return onChangeSetting(newVal, 'webhook_url');
        }
      });
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return CallWebHookAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/getresponse.js":
/*!********************************************!*\
  !*** ./editor/form-actions/getresponse.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
/* harmony import */ var _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wrapper-required-control */ "./editor/components/wrapper-required-control.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__["addAction"])('getresponse', /*#__PURE__*/function (_IntegrationComponent) {
  _inherits(GetResponseAction, _IntegrationComponent);

  var _super = _createSuper(GetResponseAction);

  function GetResponseAction() {
    _classCallCheck(this, GetResponseAction);

    return _super.apply(this, arguments);
  }

  _createClass(GetResponseAction, [{
    key: "getFields",
    value: function getFields() {
      var settings = this.props.settings;

      if (settings.data && settings.data.fields) {
        return Object.entries(settings.data.fields);
      }

      return [];
    }
  }, {
    key: "getLists",
    value: function getLists() {
      var settings = this.props.settings;

      if (settings.data && settings.data.lists) {
        return this.formatEntriesArray(settings.data.lists);
      }

      return [];
    }
  }, {
    key: "formatEntriesArray",
    value: function formatEntriesArray() {
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var isNeedPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var placeholder = {
        label: '--'
      };

      if (!entries) {
        return [];
      }

      var options = Object.entries(entries).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            label = _ref2[1];

        return {
          value: value,
          label: label
        };
      });
      return isNeedPlaceholder ? [placeholder].concat(_toConsumableArray(options)) : options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;
      var fields = this.getFields();
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(React.Fragment, {
        key: "getresponse"
      }, wp.element.createElement(BaseControl, {
        key: 'getresponse_input_key',
        className: "input-with-button"
      }, wp.element.createElement(TextControl, {
        key: "api_key",
        label: label('api_key'),
        value: settings.api_key,
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(newVal, 'api_key');
        }
      }), wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: this.validateAPIKey,
        className: this.state.className.join(' ') + ' jet-form-validate-button'
      }, wp.element.createElement("i", {
        className: "dashicons"
      }), label('validate_api_key'))), wp.element.createElement("div", null), wp.element.createElement("div", {
        className: "margin-bottom--small"
      }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
        href: help('api_key_link')
      }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        key: "getresponse_select_lists",
        className: "input-with-button"
      }, wp.element.createElement(SelectControl, {
        key: "list_id",
        className: "full-width",
        label: label('list_id'),
        labelPosition: "side",
        value: settings.list_id,
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(newVal, 'list_id');
        },
        options: this.getLists()
      }), wp.element.createElement(Button, {
        key: 'update_list_ids',
        isPrimary: true,
        onClick: this.getApiData
      }, label('update_list_ids'))), wp.element.createElement(BaseControl, {
        key: 'getresponse_day_of_cycle'
      }, wp.element.createElement(NumberControl, {
        key: "day_of_cycle",
        label: label('day_of_cycle'),
        labelPosition: "side",
        value: settings.day_of_cycle,
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(Number(newVal), 'day_of_cycle');
        }
      })), wp.element.createElement(BaseControl, {
        label: label('fields_map'),
        key: "getresponse_fields_map"
      }, wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, fields.map(function (_ref3, index) {
        var _ref4 = _slicedToArray(_ref3, 2),
            fieldName = _ref4[0],
            fieldData = _ref4[1];

        return wp.element.createElement(_components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
          field: [fieldName, fieldData]
        }, wp.element.createElement(SelectControl, {
          className: "full-width",
          key: fieldName + index,
          value: _this.getFieldDefault(fieldName),
          onChange: function onChange(value) {
            return _this.onChangeFieldMap(value, fieldName);
          },
          options: _this.formFieldsList
        }));
      })))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return GetResponseAction;
}(_integration_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./editor/form-actions/insert-post.js":
/*!********************************************!*\
  !*** ./editor/form-actions/insert-post.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/controls/fields-map */ "./editor/blocks/controls/fields-map.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/controls/default-meta */ "./editor/blocks/controls/default-meta.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__["addAction"])('insert_post', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(InsertPostAction, _wp$element$Component);

  var _super = _createSuper(InsertPostAction);

  function InsertPostAction() {
    _classCallCheck(this, InsertPostAction);

    return _super.apply(this, arguments);
  }

  _createClass(InsertPostAction, [{
    key: "getFieldMap",
    value: function getFieldMap(name) {
      var settings = this.props.settings;

      if (settings && settings.fields_map && settings.fields_map[name]) {
        return settings.fields_map[name];
      }

      return '';
    }
  }, {
    key: "isRenderHelp",
    value: function isRenderHelp(fields) {
      var help = this.props.help;
      return help('fields_map') && !fields.length;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;

      var onChangeValue = function onChangeValue(value, key) {
        onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
      };

      var formFields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_4__["getFormFieldsBlocks"])();
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement("div", {
        key: "insert_post"
      }, wp.element.createElement(SelectControl, {
        key: "post_type",
        className: "full-width",
        labelPosition: "side",
        value: settings.post_type,
        options: source.postTypes,
        label: label('post_type'),
        help: help('post_type'),
        onChange: function onChange(newValue) {
          return onChangeValue(newValue, 'post_type');
        }
      }), wp.element.createElement(SelectControl, {
        key: "post_status",
        className: "full-width",
        labelPosition: "side",
        value: settings.post_status,
        options: source.postStatuses,
        label: label('post_status'),
        help: help('post_status'),
        onChange: function onChange(newValue) {
          return onChangeValue(newValue, 'post_status');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('fields_map'),
        key: "fields_map"
      }, this.isRenderHelp(formFields) && wp.element.createElement("div", {
        className: "jet-fields-map__help"
      }, help('fields_map')), wp.element.createElement("div", {
        className: "jet-fields-map__list"
      }, formFields && formFields.map(function (field, index) {
        var fieldData = _this.getFieldMap(field.name);

        return wp.element.createElement("div", {
          className: "jet-fields-map__row",
          key: 'field_map_' + field.name + index
        }, wp.element.createElement(_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_0__["default"], {
          key: field.name + index,
          fieldValue: fieldData,
          fieldName: field.name,
          index: index,
          fieldsMap: settings.fields_map,
          taxonomiesList: source.taxonomies,
          fieldTypes: source.fieldsMapOptions,
          onChange: function onChange(newValue) {
            onChangeValue(newValue, 'fields_map');
          }
        }));
      }))), wp.element.createElement(BaseControl, {
        label: label('default_meta'),
        key: "default_meta"
      }, wp.element.createElement(_blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
        defaultMeta: settings.default_meta,
        onChange: function onChange(newValue) {
          return onChangeValue(newValue, 'default_meta');
        }
      })));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return InsertPostAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/integration-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/integration-component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntegrationComponent; });
/* harmony import */ var _base_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-action-component */ "./editor/form-actions/base-action-component.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var IntegrationComponent = /*#__PURE__*/function (_BaseActionComponent) {
  _inherits(IntegrationComponent, _BaseActionComponent);

  var _super = _createSuper(IntegrationComponent);

  function IntegrationComponent(props) {
    var _this;

    _classCallCheck(this, IntegrationComponent);

    _this = _super.call(this, props);
    _this.validateAPIKey = _this.validateAPIKey.bind(_assertThisInitialized(_this));
    _this.getApiData = _this.getApiData.bind(_assertThisInitialized(_this));
    _this.getLists = _this.getLists.bind(_assertThisInitialized(_this));
    _this.formFieldsList = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_1__["getFormFieldsBlocks"])([], '--');
    _this.state = {
      className: [_this.getclassNameValidateButton()]
    };
    return _this;
  }

  _createClass(IntegrationComponent, [{
    key: "validateAPIKey",
    value: function validateAPIKey() {
      this.setState({
        className: ['loading']
      });
      this.getApiData();
    }
  }, {
    key: "getApiData",
    value: function getApiData(event) {
      var self = this;
      var settings = self.props.settings;

      if (!settings.api_key) {
        self.onChangeSetting(null, 'isValidAPI');
        self.setState({
          className: []
        });
        return;
      }

      jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        data: {
          'action': this.data.action,
          'api_key': settings.api_key
        },
        success: function success(response) {
          if (response.success) {
            self.onChangeSetting(true, 'isValidAPI');
            self.onChangeSetting(response.data, 'data');
            self.setState({
              className: ['is-valid']
            });
          } else {
            self.onChangeSetting(false, 'isValidAPI');
            self.setState({
              className: ['is-invalid']
            });
          }
        },
        error: function error() {
          self.onChangeSetting(false, 'isValidAPI');
          self.setState({
            className: ['is-invalid']
          });
        }
      });
    }
  }, {
    key: "getclassNameValidateButton",
    value: function getclassNameValidateButton() {
      var settings = this.props.settings;

      if (true === settings.isValidAPI) {
        return 'is-valid';
      } else if (false === settings.isValidAPI) {
        return 'is-invalid';
      }
    }
  }]);

  return IntegrationComponent;
}(_base_action_component__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./editor/form-actions/mailchimp.js":
/*!******************************************!*\
  !*** ./editor/form-actions/mailchimp.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
/* harmony import */ var _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/wrapper-required-control */ "./editor/components/wrapper-required-control.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _components_actions_action_fields_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/actions/action-fields-map */ "./editor/components/actions/action-fields-map.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_2__["addAction"])('mailchimp', /*#__PURE__*/function (_IntegrationComponent) {
  _inherits(MailChimpAction, _IntegrationComponent);

  var _super = _createSuper(MailChimpAction);

  function MailChimpAction() {
    _classCallCheck(this, MailChimpAction);

    return _super.apply(this, arguments);
  }

  _createClass(MailChimpAction, [{
    key: "getFields",
    value: function getFields() {
      var settings = this.props.settings;

      if (settings.list_id && settings.data && settings.data.fields && settings.data.fields[settings.list_id]) {
        return Object.entries(settings.data.fields[settings.list_id]);
      }

      return [];
    }
  }, {
    key: "getLists",
    value: function getLists() {
      var settings = this.props.settings;

      if (settings.data && settings.data.lists) {
        return this.formatEntriesArray(settings.data.lists);
      }

      return [];
    }
  }, {
    key: "getGroups",
    value: function getGroups() {
      var settings = this.props.settings;

      if (settings.data && settings.data.groups && settings.list_id) {
        return this.formatEntriesArray(settings.data.groups[settings.list_id]);
      }

      return [];
    }
  }, {
    key: "formatEntriesArray",
    value: function formatEntriesArray() {
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var placeholder = {
        label: '--'
      };

      if (!entries) {
        return [];
      }

      var options = Object.entries(entries).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            label = _ref2[1];

        return {
          value: value,
          label: label
        };
      });
      return [placeholder].concat(_toConsumableArray(options));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;
      var fields = this.getFields();
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement("div", {
        key: "mailchimp"
      }, wp.element.createElement(BaseControl, {
        key: 'mailchimp_key_inputs',
        className: "input-with-button"
      }, wp.element.createElement(TextControl, {
        key: "api_key",
        label: label('api_key'),
        value: settings.api_key,
        onChange: function onChange(newVal) {
          _this.onChangeSetting(newVal, 'api_key');
        }
      }), wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: this.validateAPIKey,
        className: this.state.className.join(' ') + ' jet-form-validate-button'
      }, wp.element.createElement("i", {
        className: "dashicons"
      }), label('validate_api_key'))), wp.element.createElement("div", null), wp.element.createElement("div", {
        className: "margin-bottom--small"
      }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
        href: help('api_key_link')
      }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        key: 'mailchimp_select_lists',
        className: "input-with-button"
      }, wp.element.createElement(SelectControl, {
        key: "list_id",
        className: "full-width",
        label: label('list_id'),
        labelPosition: "side",
        value: settings.list_id,
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(newVal, 'list_id');
        },
        options: this.getLists()
      }), wp.element.createElement(Button, {
        key: 'update_list_ids',
        isPrimary: true,
        onClick: this.getApiData
      }, label('update_list_ids'))), wp.element.createElement(SelectControl, {
        key: "groups_ids",
        className: "full-width",
        label: label('groups_ids'),
        labelPosition: "side",
        value: settings.groups_ids,
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(newVal, 'groups_ids');
        },
        options: this.getGroups()
      }), wp.element.createElement(TextControl, {
        key: "mailchimp_tags",
        value: settings.tags,
        label: label('tags'),
        help: help('tags'),
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(newVal, 'tags');
        }
      }), wp.element.createElement(ToggleControl, {
        key: 'double_opt_in',
        label: label('double_opt_in'),
        checked: settings.double_opt_in,
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(Boolean(newVal), 'double_opt_in');
        }
      }), wp.element.createElement(_components_actions_action_fields_map__WEBPACK_IMPORTED_MODULE_3__["ActionFieldsMap"], {
        label: label('fields_map'),
        key: "mailchimp",
        fields: fields
      }, function (_ref3) {
        var fieldId = _ref3.fieldId,
            fieldData = _ref3.fieldData,
            index = _ref3.index;
        return wp.element.createElement(_components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
          field: [fieldId, fieldData]
        }, wp.element.createElement(SelectControl, {
          className: "full-width",
          key: fieldId + index,
          value: _this.getFieldDefault(fieldId),
          onChange: function onChange(value) {
            return _this.onChangeFieldMap(value, fieldId);
          },
          options: _this.formFieldsList
        }));
      })));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return MailChimpAction;
}(_integration_component__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./editor/form-actions/redirect-to-page.js":
/*!*************************************************!*\
  !*** ./editor/form-actions/redirect-to-page.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    CheckboxControl = _wp$components.CheckboxControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__["addAction"])('redirect_to_page', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(RedirectToPageAction, _wp$element$Component);

  var _super = _createSuper(RedirectToPageAction);

  function RedirectToPageAction(props) {
    var _this;

    _classCallCheck(this, RedirectToPageAction);

    _this = _super.call(this, props);
    _this.fields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__["getFormFieldsBlocks"])();
    return _this;
  }

  _createClass(RedirectToPageAction, [{
    key: "isChecked",
    value: function isChecked(name) {
      var args_fields = Array.from(this.props.settings.redirect_args || []);
      return Boolean(args_fields.includes(name));
    }
  }, {
    key: "onChangeRedirectArgs",
    value: function onChangeRedirectArgs(value, field_name) {
      var args_fields = Array.from(this.props.settings.redirect_args || []);

      if (!value) {
        var field_id = args_fields.indexOf(field_name);
        args_fields.splice(field_id, 1);
      } else {
        args_fields.push(field_name);
      }

      this.onChangeSetting(args_fields, 'redirect_args');
    }
  }, {
    key: "onChangeSetting",
    value: function onChangeSetting(value, key) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, key, value)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          source = _this$props.source,
          label = _this$props.label,
          settings = _this$props.settings;
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement("div", {
        key: "redirect_to_page"
      }, wp.element.createElement(SelectControl, {
        className: "full-width",
        key: "redirect_type",
        label: label('redirect_type'),
        labelPosition: "side",
        value: settings.redirect_type,
        options: source.redirect_types,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'redirect_type');
        }
      }), 'static_page' === settings.redirect_type && wp.element.createElement(SelectControl, {
        key: "redirect_type",
        className: "full-width",
        label: label('redirect_page'),
        labelPosition: "side",
        value: settings.redirect_page,
        options: source.pages,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'redirect_page');
        }
      }), 'custom_url' === settings.redirect_type && wp.element.createElement(TextControl, {
        key: "redirect_url_control",
        label: label('redirect_url'),
        value: settings.redirect_url,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'redirect_url');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('redirect_args'),
        key: "redirect_args_control"
      }, wp.element.createElement("div", {
        className: "redirect_args-control"
      }, this.fields.map(function (_ref, index) {
        var name = _ref.name;
        return wp.element.createElement(CheckboxControl, {
          key: "checkbox_args_".concat(name, "_").concat(index),
          label: name,
          checked: _this2.isChecked(name),
          onChange: function onChange(newVal) {
            return _this2.onChangeRedirectArgs(newVal, name);
          }
        });
      }))), wp.element.createElement(TextControl, {
        key: "redirect_hash_control",
        label: label('redirect_hash'),
        value: settings.redirect_hash,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'redirect_hash');
        }
      }));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return RedirectToPageAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/register-user.js":
/*!**********************************************!*\
  !*** ./editor/form-actions/register-user.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _components_actions_action_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/actions/action-messages */ "./editor/components/actions/action-messages.js");
/* harmony import */ var _base_action_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-action-component */ "./editor/form-actions/base-action-component.js");
/* harmony import */ var _components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/wrapper-required-control */ "./editor/components/wrapper-required-control.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_4__["addAction"])('register_user', /*#__PURE__*/function (_BaseActionComponent) {
  _inherits(RegisterUserAction, _BaseActionComponent);

  var _super = _createSuper(RegisterUserAction);

  function RegisterUserAction(props) {
    var _this;

    _classCallCheck(this, RegisterUserAction);

    _this = _super.call(this, props);
    _this.fields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_5__["getFormFieldsBlocks"])();
    _this.formFieldsList = [{
      value: '',
      label: '--'
    }].concat(_toConsumableArray(_this.fields));
    return _this;
  }

  _createClass(RegisterUserAction, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;
      var userFields = Object.entries(source.userFields);
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(React.Fragment, {
        key: "register_user"
      }, wp.element.createElement(BaseControl, {
        label: label('fields_map'),
        key: "user_fields_map"
      }, wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, wp.element.createElement("span", {
        className: 'description-controls'
      }, __('Set form fields names to to get user data from', 'jet-form-builder')), userFields.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            data = _ref2[1];

        return wp.element.createElement(_components_wrapper_required_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
          field: [value, data]
        }, wp.element.createElement(SelectControl, {
          className: "full-width",
          key: "form_fields_".concat(value),
          value: _this2.getFieldDefault(value),
          options: _this2.formFieldsList,
          onChange: function onChange(newValue) {
            return _this2.onChangeFieldMap(newValue, value);
          }
        }));
      }))), wp.element.createElement(SelectControl, {
        key: "user_role_list",
        className: "full-width",
        label: label('user_role'),
        labelPosition: "side",
        value: settings.user_role,
        options: source.userRoles,
        onChange: function onChange(newValue) {
          _this2.onChangeSetting(newValue, 'user_role');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('user_meta'),
        key: "user_meta_list"
      }, wp.element.createElement("div", {
        className: "jet-user-meta-rows"
      }, wp.element.createElement("span", {
        className: 'description-controls'
      }, __('Set user meta fields to save appropriate form fields into', 'jet-form-builder')), this.fields.map(function (_ref3, index) {
        var name = _ref3.name;
        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'user_meta_' + name + index
        }, wp.element.createElement(TextControl, {
          key: name + index,
          label: name,
          value: _this2.getFieldMeta(name),
          onChange: function onChange(newVal) {
            return _this2.onChangeMetaFieldMap(newVal, name);
          }
        }));
      }))), wp.element.createElement(ToggleControl, {
        key: "log_in",
        label: label('log_in'),
        checked: settings.log_in,
        onChange: function onChange(newValue) {
          _this2.onChangeSetting(newValue, 'log_in');
        }
      }), wp.element.createElement(ToggleControl, {
        key: "add_user_id_control",
        label: label('add_user_id'),
        checked: settings.add_user_id,
        onChange: function onChange(newValue) {
          return _this2.onChangeSetting(newValue, 'add_user_id');
        },
        help: help('add_user_id')
      }), wp.element.createElement(_components_actions_action_messages__WEBPACK_IMPORTED_MODULE_1__["default"], this.props));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return RegisterUserAction;
}(_base_action_component__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./editor/form-actions/send-email.js":
/*!*******************************************!*\
  !*** ./editor/form-actions/send-email.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _components_macros_inserter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/macros-inserter */ "./editor/components/macros-inserter.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
/**
 * Internal dependencies
 */




var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_2__["addAction"])('send_email', function SendEmailAction(_ref) {
  var settings = _ref.settings,
      source = _ref.source,
      label = _ref.label,
      help = _ref.help,
      onChangeSetting = _ref.onChangeSetting;
  var formFields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_3__["getFormFieldsBlocks"])([], '--');

  var insertMacros = function insertMacros(macros) {
    var content = settings.content || '' + '%' + macros + '%';
    onChangeSetting(content, 'content');
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "mail_to",
    labelPosition: "side",
    className: "full-width",
    value: settings.mail_to,
    options: source.mailTo,
    label: label('mail_to'),
    help: help('mail_to'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'mail_to');
    }
  }), 'custom' === settings.mail_to && wp.element.createElement(TextControl, {
    key: "custom_email",
    value: settings.custom_email,
    label: label('custom_email'),
    help: help('custom_email'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'custom_email');
    }
  }), 'form' === settings.mail_to && wp.element.createElement(SelectControl, {
    key: "from_field",
    labelPosition: "side",
    className: "full-width",
    value: settings.from_field,
    options: formFields,
    label: label('from_field'),
    help: help('from_field'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_field');
    }
  }), wp.element.createElement(SelectControl, {
    key: "reply_to",
    labelPosition: "side",
    className: "full-width",
    value: settings.reply_to,
    options: source.replyTo,
    label: label('reply_to'),
    help: help('reply_to'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_to');
    }
  }), 'custom' === settings.reply_to && wp.element.createElement(TextControl, {
    key: "reply_to_email",
    value: settings.reply_to_email,
    label: label('reply_to_email'),
    help: help('reply_to_email'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_to_email');
    }
  }), 'form' === settings.reply_to && wp.element.createElement(SelectControl, {
    key: "reply_from_field",
    labelPosition: "side",
    className: "full-width",
    value: settings.reply_from_field,
    options: formFields,
    label: label('reply_from_field'),
    help: help('reply_from_field'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_from_field');
    }
  }), wp.element.createElement(TextControl, {
    key: "subject",
    value: settings.subject,
    label: label('subject'),
    help: help('subject'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'subject');
    }
  }), wp.element.createElement(TextControl, {
    key: "from_name",
    value: settings.from_name,
    label: label('from_name'),
    help: help('from_name'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_name');
    }
  }), wp.element.createElement(TextControl, {
    key: "from_address",
    value: settings.from_address,
    label: label('from_address'),
    help: help('from_address'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_address');
    }
  }), wp.element.createElement(SelectControl, {
    key: "content_type",
    labelPosition: "side",
    className: "full-width",
    value: settings.content_type,
    options: source.content_type,
    label: label('content_type'),
    help: help('content_type'),
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'content_type');
    }
  }), wp.element.createElement("div", {
    className: "jet-form-editor__macros-wrap"
  }, wp.element.createElement(TextareaControl, {
    key: "content",
    value: settings.content,
    label: label('content'),
    help: help('content'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'content');
    }
  }), wp.element.createElement(_components_macros_inserter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fields: formFields,
    onFieldClick: insertMacros,
    customMacros: source.customMacros
  })));
  /* eslint-enable jsx-a11y/no-onchange */
});

/***/ }),

/***/ "./editor/form-actions/update-options.js":
/*!***********************************************!*\
  !*** ./editor/form-actions/update-options.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__["addAction"])('update_options', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(UpdateOptionsAction, _wp$element$Component);

  var _super = _createSuper(UpdateOptionsAction);

  function UpdateOptionsAction(props) {
    var _this;

    _classCallCheck(this, UpdateOptionsAction);

    _this = _super.call(this, props);
    _this.fields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__["getFormFieldsBlocks"])();
    return _this;
  }

  _createClass(UpdateOptionsAction, [{
    key: "getFieldByName",
    value: function getFieldByName(_ref) {
      var source = _ref.source,
          name = _ref.name;
      var settings = this.props.settings;

      if (settings[source] && settings[source][name]) {
        return settings[source][name];
      }

      return '';
    }
  }, {
    key: "getFieldMeta",
    value: function getFieldMeta(name) {
      return this.getFieldByName({
        source: 'meta_fields_map',
        name: name
      });
    }
  }, {
    key: "changeFieldsMap",
    value: function changeFieldsMap(_ref2) {
      var source = _ref2.source,
          nameField = _ref2.nameField,
          value = _ref2.value;
      var fieldsMap = Object.assign({}, this.props.settings[source]);
      fieldsMap[nameField] = value;
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;

      var onChangeMetaFieldMap = function onChangeMetaFieldMap(value, nameField) {
        var source = 'meta_fields_map';

        _this2.changeFieldsMap({
          value: value,
          nameField: nameField,
          source: source
        });
      };

      var onChangeSetting = function onChangeSetting(value, key) {
        onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
      };
      /* eslint-disable jsx-a11y/no-onchange */


      return wp.element.createElement("div", {
        key: "register_user"
      }, wp.element.createElement(SelectControl, {
        key: "options_page_list",
        className: "full-width",
        label: label('options_page'),
        labelPosition: "side",
        value: settings.options_page,
        options: source.optionsPages,
        onChange: function onChange(newValue) {
          onChangeSetting(newValue, 'options_page');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('options_map'),
        key: "options_meta_list"
      }, wp.element.createElement("div", {
        className: "jet-user-meta-rows"
      }, this.fields.map(function (_ref3, index) {
        var name = _ref3.name;
        return wp.element.createElement(TextControl, {
          key: 'options_meta_' + name + index,
          label: name,
          value: _this2.getFieldMeta(name),
          onChange: function onChange(newVal) {
            onChangeMetaFieldMap(newVal, name);
          }
        });
      }))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return UpdateOptionsAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/update-user.js":
/*!********************************************!*\
  !*** ./editor/form-actions/update-user.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/controls/fields-map */ "./editor/blocks/controls/fields-map.js");
/* harmony import */ var _components_actions_action_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/actions/action-messages */ "./editor/components/actions/action-messages.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__["addAction"])('update_user', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(UpdateUserAction, _wp$element$Component);

  var _super = _createSuper(UpdateUserAction);

  function UpdateUserAction(props) {
    var _this;

    _classCallCheck(this, UpdateUserAction);

    _this = _super.call(this, props);
    _this.fields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_4__["getFormFieldsBlocks"])();
    _this.metaOption = 'user_meta';
    _this.state = {
      type: ''
    };
    return _this;
  }

  _createClass(UpdateUserAction, [{
    key: "getFieldMap",
    value: function getFieldMap(name) {
      var settings = this.props.settings;

      if (settings && settings.fields_map && settings.fields_map[name]) {
        return settings.fields_map[name];
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;

      var onChangeValue = function onChangeValue(value, key) {
        onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
      };
      /* eslint-disable jsx-a11y/no-onchange */


      return wp.element.createElement("div", {
        key: "update_user"
      }, wp.element.createElement(BaseControl, {
        label: label('fields_map'),
        key: "user_fields_map"
      }, wp.element.createElement("div", {
        className: "jet-user-meta-rows"
      }, this.fields.map(function (field, index) {
        var fieldData = _this2.getFieldMap(field.name);

        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'user_meta_' + field.name + index
        }, wp.element.createElement(_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: field.name + index,
          fieldValue: fieldData,
          fieldName: field.name,
          index: index,
          metaProp: "user_meta",
          fieldsMap: settings.fields_map,
          fieldTypes: source.userFields,
          onChange: function onChange(newValue) {
            onChangeValue(newValue, 'fields_map');
          }
        }));
      }))), wp.element.createElement(SelectControl, {
        label: label('user_role'),
        labelPosition: "side",
        key: "user_role_list",
        className: "full-width",
        value: settings.user_role,
        options: source.userRoles,
        onChange: function onChange(newValue) {
          return onChangeValue(newValue, 'user_role');
        }
      }), wp.element.createElement(_components_actions_action_messages__WEBPACK_IMPORTED_MODULE_2__["default"], this.props));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return UpdateUserAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/gateways/gateway-action-attrubites.js":
/*!******************************************************!*\
  !*** ./editor/gateways/gateway-action-attrubites.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_gateway_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/gateway-helper */ "./editor/helpers/gateway-helper.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");



function gatewayActionAttributes(action) {
  var _fromLocalizeHelper = Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_1__["fromLocalizeHelper"])('getLocalizedFullPack')(action.type),
      gatewayAttrs = _fromLocalizeHelper.gatewayAttrs,
      label = _fromLocalizeHelper.label;

  var actionSettings = Object(_helpers_gateway_helper__WEBPACK_IMPORTED_MODULE_0__["getActionSettings"])(action.id);

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

/***/ "./editor/gateways/gateways-editor.js":
/*!********************************************!*\
  !*** ./editor/gateways/gateways-editor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GatewaysEditor; });
/* harmony import */ var _helpers_gateway_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/gateway-helper */ "./editor/helpers/gateway-helper.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway-action-attrubites */ "./editor/gateways/gateway-action-attrubites.js");
/* harmony import */ var _helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/action-helper */ "./editor/helpers/action-helper.js");
/* harmony import */ var _paypal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paypal */ "./editor/gateways/paypal.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_1__["event"])('jet-fb-gateways/init')();
var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal,
    Text = _wp$components.Text;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

var parseActions = function parseActions(actions) {
  return actions.filter(function (action) {
    return !(action.type === 'insert_post' || action.type === 'redirect_to_page');
  });
};

function GatewaysEditor(_ref) {
  var gatewaysArgs = _ref.gatewaysArgs,
      activeActions = _ref.activeActions,
      onUnMount = _ref.onUnMount,
      isSaveAction = _ref.isSaveAction,
      onSaveItems = _ref.onSaveItems;
  var availableActions = parseActions(activeActions);
  var gatewaysData = Object(_helpers_gateway_helper__WEBPACK_IMPORTED_MODULE_0__["gatewayAttr"])();
  var label = Object(_helpers_gateway_helper__WEBPACK_IMPORTED_MODULE_0__["gatewayAttr"])('labels');

  var _useState = useState(gatewaysArgs),
      _useState2 = _slicedToArray(_useState, 2),
      gateway = _useState2[0],
      setGateway = _useState2[1];

  var formFields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_5__["getFormFieldsBlocks"])();
  /**
   * Used for set notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param newValue
   */

  var setValueInObject = function setValueInObject(when, type, newValue) {
    setGateway(function (prevArgs) {
      if (!prevArgs[when]) {
        prevArgs[when] = {};
      }

      prevArgs[when][type] = newValue;
      return _objectSpread({}, prevArgs);
    });
  };
  /**
   * Used for get notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param isEmptyResult
   * @returns {boolean|*}
   */


  var getNotifications = function getNotifications(when, type) {
    var isEmptyResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (gateway[when] && gateway[when][type]) {
      return gateway[when][type];
    }

    return isEmptyResult;
  };

  var setResultMessage = function setResultMessage(key, value) {
    setValueInObject('messages', key, value);
  };

  var getResultMessage = function getResultMessage(key) {
    return getNotifications('messages', key, gatewaysData.messages[key]);
  };

  var setNotificationsBefore = function setNotificationsBefore(id, newValue) {
    setValueInObject('notifications_before', id, newValue);
  };

  var actionDefault = {
    active: false
  };

  var getNotificationsBefore = function getNotificationsBefore(id) {
    return getNotifications('notifications_before', id, actionDefault);
  };

  var setNotificationsFailed = function setNotificationsFailed(type, newValue) {
    setValueInObject('notifications_failed', type, newValue);
  };

  var getNotificationsFailed = function getNotificationsFailed(id) {
    return getNotifications('notifications_failed', id, actionDefault);
  };

  var setNotificationsSuccess = function setNotificationsSuccess(id, newValue) {
    setValueInObject('notifications_success', id, newValue);
  };

  var getNotificationsSuccess = function getNotificationsSuccess(id) {
    return getNotifications('notifications_success', id, actionDefault);
  };

  useEffect(function () {
    if (true === isSaveAction) {
      if (onSaveItems) {
        ['notifications_before', 'notifications_failed', 'notifications_success'].forEach(function (name) {
          if (!gateway[name]) {
            gateway[name] = {};
            return;
          }

          Object.entries(gateway[name]).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                action = _ref3[0],
                isChecked = _ref3[1];

            if (!isChecked) {
              delete gateway[name][action];
            }
          });
        });
        onSaveItems(gateway);
      }

      onUnMount();
    } else if (false === isSaveAction) {
      onUnMount();
    }
  }, [isSaveAction]);
  var actionsList = Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__["actionByTypeList"])('insert_post', true);
  var actionLabel = Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__["fromLocalizeHelper"])('getActionLabel');
  return wp.element.createElement(React.Fragment, null, Object(_helpers_gateway_helper__WEBPACK_IMPORTED_MODULE_0__["renderGateway"])(gateway.gateway, {
    setValueInObject: setValueInObject,
    getNotifications: getNotifications
  }), Boolean(availableActions.length) && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: __('Before payment processed:', 'jet-form-builder'),
    key: "before_payment_base_control"
  }, wp.element.createElement("div", {
    className: 'checkboxes-row'
  }, availableActions.map(function (action, index) {
    if (action.type === 'insert_post' || action.type === 'redirect_to_page') {
      return;
    }

    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsBefore(action.id).active,
      label: actionLabel(action.type),
      help: Object(_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_2__["default"])(action),
      onChange: function onChange(active) {
        return setNotificationsBefore(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  }))), wp.element.createElement(BaseControl, {
    label: __('On successful payment:', 'jet-form-builder'),
    key: "success_payment_base_control"
  }, wp.element.createElement("div", null, availableActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsSuccess(action.id).active,
      label: actionLabel(action.type),
      help: Object(_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_2__["default"])(action),
      onChange: function onChange(active) {
        return setNotificationsSuccess(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  }))), wp.element.createElement(BaseControl, {
    label: __('On failed payment:', 'jet-form-builder'),
    key: "failed_payment_base_control"
  }, wp.element.createElement("div", null, availableActions.map(function (action, index) {
    if (action.type === 'insert_post' || action.type === 'redirect_to_page') {
      return;
    }

    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsFailed(action.id).active,
      label: actionLabel(action.type),
      help: Object(_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_2__["default"])(action),
      onChange: function onChange(active) {
        return setNotificationsFailed(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  })))), (1 < actionsList.length || gateway.action_order) && wp.element.createElement(BaseControl, {
    label: label('action_order'),
    key: "gateway_action_order_base_control"
  }, wp.element.createElement(RadioControl, {
    className: "jet-control-clear-full",
    key: "gateway_action_order",
    options: Object(_helpers_action_helper__WEBPACK_IMPORTED_MODULE_3__["actionByTypeList"])('insert_post', true),
    selected: gateway.action_order,
    onChange: function onChange(newVal) {
      setGateway(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          action_order: Number(newVal)
        });
      });
    }
  })), wp.element.createElement(SelectControl, {
    label: label('price_field'),
    key: 'form_fields_price_field',
    value: gateway.price_field,
    labelPosition: "side",
    onChange: function onChange(newVal) {
      setGateway(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          price_field: newVal
        });
      });
    },
    options: formFields
  }), wp.element.createElement(BaseControl, {
    key: "payment_result_macros_base_control"
  }, wp.element.createElement("h4", null, __('Available macros list: ', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_amount% - payment amount returned from gateway template;', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_status% - payemnt status returned from payment gateway;', 'jet-form-builder'), wp.element.createElement("br", null), __('%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder'), wp.element.createElement("br", null))), wp.element.createElement(TextareaControl, {
    key: "payment_result_message_success",
    label: label('message_success'),
    value: getResultMessage('success'),
    onChange: function onChange(newValue) {
      return setResultMessage('success', newValue);
    }
  }), wp.element.createElement(TextareaControl, {
    key: "payment_result_message_failed",
    label: label('message_failed'),
    value: getResultMessage('failed'),
    onChange: function onChange(newValue) {
      return setResultMessage('failed', newValue);
    }
  }), activeActions.find(function (action) {
    return action.type === 'redirect_to_page';
  }) && wp.element.createElement(CheckboxControl, {
    key: "checkbox_block_redirect_to_page",
    checked: gateway.use_success_redirect,
    label: label('use_success_redirect'),
    onChange: function onChange(value) {
      setGateway(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          use_success_redirect: value
        });
      });
    }
  }));
}

/***/ }),

/***/ "./editor/gateways/paypal.js":
/*!***********************************!*\
  !*** ./editor/gateways/paypal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PayPal; });
var __ = wp.i18n.__;
var TextControl = wp.components.TextControl;
var _window$JetFBGateways = window.JetFBGateways,
    registerGateway = _window$JetFBGateways.registerGateway,
    gatewayLabel = _window$JetFBGateways.gatewayLabel;
var label = gatewayLabel('paypal');
function PayPal(_ref) {
  var setValueInObject = _ref.setValueInObject,
      getNotifications = _ref.getNotifications;

  var setSetting = function setSetting(key, value) {
    setValueInObject('paypal', key, value);
  };

  var getSetting = function getSetting(key) {
    return getNotifications('paypal', key, '');
  };

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
    label: label('client_id'),
    key: "paypal_client_id_setting",
    value: getSetting('client_id'),
    onChange: function onChange(newVal) {
      return setSetting('client_id', newVal);
    }
  }), wp.element.createElement(TextControl, {
    label: label('secret'),
    key: "paypal_secret_setting",
    value: getSetting('secret'),
    onChange: function onChange(newVal) {
      return setSetting('secret', newVal);
    }
  }), wp.element.createElement(TextControl, {
    label: label('currency'),
    key: "paypal_currency_code_setting",
    value: getSetting('currency'),
    onChange: function onChange(newVal) {
      return setSetting('currency', newVal);
    }
  }));
}
registerGateway('paypal', PayPal);

/***/ }),

/***/ "./editor/helpers/action-helper.js":
/*!*****************************************!*\
  !*** ./editor/helpers/action-helper.js ***!
  \*****************************************/
/*! exports provided: getActionsByType, fromLocalizeHelper, actionByTypeList, addAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionsByType", function() { return getActionsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromLocalizeHelper", function() { return fromLocalizeHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionByTypeList", function() { return actionByTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAction", function() { return addAction; });
/* harmony import */ var _components_actions_action_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/actions/action-wrapper */ "./editor/components/actions/action-wrapper.js");
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks-helper */ "./editor/helpers/hooks-helper.js");
/* harmony import */ var _gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gateways/gateway-action-attrubites */ "./editor/gateways/gateway-action-attrubites.js");
/* harmony import */ var _components_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/manager */ "./editor/components/manager.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var getActionsByType = function getActionsByType(type) {
  var _useActions = Object(_hooks_helper__WEBPACK_IMPORTED_MODULE_1__["useActions"])(),
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
      newAction.label += " (".concat(Object(_gateways_gateway_action_attrubites__WEBPACK_IMPORTED_MODULE_2__["default"])(action), ")");
    }

    return newAction;
  });
};
var addAction = function addAction(actionType, actionInstance) {
  window.jetFormDefaultActions = window.jetFormDefaultActions || {};
  window.jetFormDefaultActions[actionType] = Object(_components_actions_action_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(actionType, actionInstance);
};
Object(_components_manager__WEBPACK_IMPORTED_MODULE_3__["saveGlobalComponent"])('JetFBActions', {
  addAction: addAction
});

/***/ }),

/***/ "./editor/helpers/blocks-helper.js":
/*!*****************************************!*\
  !*** ./editor/helpers/blocks-helper.js ***!
  \*****************************************/
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
  return wp.data.select('core/block-editor').getBlock(clientId).innerBlocks;
};

var getFormFieldsByBlock = function getFormFieldsByBlock(blockExclude) {
  return function () {
    return getFormFieldsBlocks([blockExclude.name]);
  };
};



/***/ }),

/***/ "./editor/helpers/gateway-helper.js":
/*!******************************************!*\
  !*** ./editor/helpers/gateway-helper.js ***!
  \******************************************/
/*! exports provided: getActionSettings, gatewayAttr, gatewayLabel, registerGateway, renderGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionSettings", function() { return getActionSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatewayAttr", function() { return gatewayAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatewayLabel", function() { return gatewayLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerGateway", function() { return registerGateway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGateway", function() { return renderGateway; });
/* harmony import */ var _hooks_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks-helper */ "./editor/helpers/hooks-helper.js");
/* harmony import */ var _components_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/manager */ "./editor/components/manager.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var useSelect = wp.data.useSelect;
var getActionSettings = function getActionSettings(actionId) {
  var _useActions = Object(_hooks_helper__WEBPACK_IMPORTED_MODULE_0__["useActions"])(),
      _useActions2 = _slicedToArray(_useActions, 1),
      actions = _useActions2[0];

  var action = actions.find(function (action) {
    return actionId === action.id;
  });
  return action && action.settings ? action.settings : false;
};
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
Object(_components_manager__WEBPACK_IMPORTED_MODULE_1__["saveGlobalComponent"])('JetFBGateways', {
  gatewayAttr: gatewayAttr,
  gatewayLabel: gatewayLabel,
  registerGateway: registerGateway
});

/***/ }),

/***/ "./editor/helpers/hooks-helper.js":
/*!****************************************!*\
  !*** ./editor/helpers/hooks-helper.js ***!
  \****************************************/
/*! exports provided: jfbHooks, useActions, useStateClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jfbHooks", function() { return jfbHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActions", function() { return useActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateClasses", function() { return useStateClasses; });
/* harmony import */ var _components_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/manager */ "./editor/components/manager.js");
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
var createHooks = wp.hooks.createHooks;
var jfbHooks = createHooks();
var useActions = function useActions() {
  var withEditPostEffect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });

  var _useDispatch = useDispatch('core/editor'),
      editPost = _useDispatch.editPost;

  var _useState = useState(JSON.parse(meta._jf_actions || '[]')),
      _useState2 = _slicedToArray(_useState, 2),
      actions = _useState2[0],
      setActions = _useState2[1];

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
var useStateClasses = function useStateClasses(initialValid) {
  var validClass = 'is-valid';
  var invalidClass = 'is-invalid';
  var initClasses = ['jet-form-validate-button'];

  var initStateClasses = function initStateClasses() {
    if (initialValid) {
      return [].concat(initClasses, [validClass]);
    } else if (!initialValid) {
      return [].concat(initClasses, [invalidClass]);
    }
  };

  var _useState3 = useState(initStateClasses()),
      _useState4 = _slicedToArray(_useState3, 2),
      classes = _useState4[0],
      setClasses = _useState4[1];

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
Object(_components_manager__WEBPACK_IMPORTED_MODULE_0__["saveGlobalComponent"])('JetFBHooks', {
  useActions: useActions,
  useStateClasses: useStateClasses
});

/***/ }),

/***/ "./editor/helpers/tools.js":
/*!*********************************!*\
  !*** ./editor/helpers/tools.js ***!
  \*********************************/
/*! exports provided: event, listen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony import */ var _components_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/manager */ "./editor/components/manager.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var __ = wp.i18n.__;

var Tools = /*#__PURE__*/function () {
  function Tools() {
    _classCallCheck(this, Tools);
  }

  _createClass(Tools, null, [{
    key: "getHelpMessage",
    value: function getHelpMessage(from, name) {
      if (typeof from.help_messages[name] !== 'undefined') {
        return from.help_messages[name];
      }

      if (_typeof(from.help_messages[attributes.generator_function]) === 'object') {
        return from.help_messages[attributes.generator_function][name];
      }
    }
  }, {
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
  }]);

  return Tools;
}();

_defineProperty(Tools, "getFuncCondition", function (nameFunction) {
  return new Function("return window.JetFormBuilderConditions[ '".concat(nameFunction, "' ]"));
});

_defineProperty(Tools, "addConditionForCondType", function (name, callable) {
  window.JetFormBuilderConditions = window.JetFormBuilderConditions || {};
  window.JetFormBuilderConditions[name] = callable;
});

_defineProperty(Tools, "parseConditionsFunc", function (source) {
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
});

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
Object(_components_manager__WEBPACK_IMPORTED_MODULE_0__["saveGlobalComponent"])('JetFBTools', {
  Tools: Tools
});

/***/ }),

/***/ "./editor/main.js":
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meta_arguments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta/arguments */ "./editor/meta/arguments.js");
/* harmony import */ var _meta_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta/actions */ "./editor/meta/actions.js");
/* harmony import */ var _meta_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta/preset */ "./editor/meta/preset.js");
/* harmony import */ var _meta_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta/messages */ "./editor/meta/messages.js");
/* harmony import */ var _meta_captcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta/captcha */ "./editor/meta/captcha.js");
/* harmony import */ var _meta_gateways__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meta/gateways */ "./editor/meta/gateways.js");
/* harmony import */ var _blocks_form_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/form-fields */ "./editor/blocks/form-fields.js");
/* harmony import */ var _form_actions_send_email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-actions/send-email */ "./editor/form-actions/send-email.js");
/* harmony import */ var _form_actions_insert_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-actions/insert-post */ "./editor/form-actions/insert-post.js");
/* harmony import */ var _form_actions_register_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-actions/register-user */ "./editor/form-actions/register-user.js");
/* harmony import */ var _form_actions_update_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-actions/update-user */ "./editor/form-actions/update-user.js");
/* harmony import */ var _form_actions_update_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-actions/update-options */ "./editor/form-actions/update-options.js");
/* harmony import */ var _form_actions_call_hook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-actions/call-hook */ "./editor/form-actions/call-hook.js");
/* harmony import */ var _form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-actions/call-webhook */ "./editor/form-actions/call-webhook.js");
/* harmony import */ var _form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form-actions/redirect-to-page */ "./editor/form-actions/redirect-to-page.js");
/* harmony import */ var _form_actions_mailchimp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form-actions/mailchimp */ "./editor/form-actions/mailchimp.js");
/* harmony import */ var _form_actions_getresponse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form-actions/getresponse */ "./editor/form-actions/getresponse.js");
/* harmony import */ var _form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form-actions/activecampaign */ "./editor/form-actions/activecampaign.js");
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/tools */ "./editor/helpers/tools.js");



















Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_18__["event"])('jet-form-builder-initialize')();
window.jetFormActionTypes.forEach(function (action, index) {
  if (window.jetFormDefaultActions && window.jetFormDefaultActions[action.id]) {
    window.jetFormActionTypes[index].callback = window.jetFormDefaultActions[action.id];
  }
});
Object(_meta_arguments__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_meta_captcha__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_meta_gateways__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_meta_actions__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_meta_preset__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_meta_messages__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_helpers_tools__WEBPACK_IMPORTED_MODULE_18__["event"])('jet-form-builder-initialized')();

/***/ }),

/***/ "./editor/meta/actions.js":
/*!********************************!*\
  !*** ./editor/meta/actions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _components_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/actions/action-modal */ "./editor/components/actions/action-modal.js");
/* harmony import */ var _components_field_with_preset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/field-with-preset */ "./editor/components/field-with-preset.js");
/* harmony import */ var _components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/presets/dynamic-preset */ "./editor/components/presets/dynamic-preset.js");
/* harmony import */ var _components_repeater_with_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/repeater-with-state */ "./editor/components/repeater-with-state.js");
/* harmony import */ var _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/hooks-helper */ "./editor/helpers/hooks-helper.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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









function getRandomID() {
  return Math.floor(Math.random() * 8999) + 1000;
}

var defaultActions = [{
  type: 'send_email',
  id: getRandomID(),
  settings: {
    subject: 'New order on website',
    content: 'Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%'
  }
}];
var newItemCondition = {
  execute: false,
  operator: '',
  field: '',
  default: ''
};
var conditionOperators = [{
  label: '--',
  value: ''
}, {
  label: 'Equal',
  value: 'equal'
}, {
  label: 'Greater than',
  value: 'greater'
}, {
  label: 'Less than',
  value: 'less'
}, {
  label: 'Between',
  value: 'between'
}, {
  label: 'In the list',
  value: 'one_of'
}, {
  label: 'Contain text',
  value: 'contain'
}];
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    DropdownMenu = _wp$components.DropdownMenu,
    Modal = _wp$components.Modal;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var withState = wp.compose.withState;
var __ = wp.i18n.__;

function ActionsMeta() {
  var DocumentSettingPanelActions = function DocumentSettingPanelActions() {
    var _useActions = Object(_helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_5__["useActions"])(true),
        _useActions2 = _slicedToArray(_useActions, 2),
        actions = _useActions2[0],
        setActions = _useActions2[1];

    useEffect(function () {
      if (0 === actions.length) {
        setActions(defaultActions);
      }
    }, []);

    var moveAction = function moveAction(fromIndex, toIndex) {
      var item = JSON.parse(JSON.stringify(actions[fromIndex])),
          replacedItem = JSON.parse(JSON.stringify(actions[toIndex]));
      actions.splice(toIndex, 1, item);
      actions.splice(fromIndex, 1, replacedItem);
      setActions(_toConsumableArray(actions));
    };

    var deleteAction = function deleteAction(index) {
      actions.splice(index, 1);
      setActions(_toConsumableArray(actions));
    };

    var updateAction = function updateAction(id, key, value) {
      setActions(actions.map(function (action, index) {
        if (action.id === id) {
          var newAction = JSON.parse(JSON.stringify(action));
          newAction[key] = value;
          return newAction;
        } else {
          return action;
        }
      }));
    };

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        isEdit = _useState2[0],
        setEdit = _useState2[1];

    var _useState3 = useState({}),
        _useState4 = _slicedToArray(_useState3, 2),
        editedAction = _useState4[0],
        setEditedAction = _useState4[1];

    var _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isEditProcessAction = _useState6[0],
        setEditProcessAction = _useState6[1];

    var _useState7 = useState({}),
        _useState8 = _slicedToArray(_useState7, 2),
        processedAction = _useState8[0],
        setProcessedAction = _useState8[1];

    var closeModal = function closeModal() {
      setEdit(false);
    };

    var actionTypes = window.jetFormActionTypes.map(function (action) {
      return {
        value: action.id,
        label: action.name
      };
    });
    var Callback = false;

    for (var i = 0; i < window.jetFormActionTypes.length; i++) {
      if (window.jetFormActionTypes[i].id === editedAction.type && window.jetFormActionTypes[i].callback) {
        Callback = window.jetFormActionTypes[i].callback;
        break;
      }
    }

    var updateActionSettings = function updateActionSettings(action) {
      updateAction(action.id, 'settings', action.settings);
      closeModal();
    };

    var updateActionCondition = function updateActionCondition(items) {
      updateAction(processedAction.id, 'conditions', items);
      setEditProcessAction(false);
    };

    useEffect(function () {
      if (editedAction.type) {
        setEdit(true);
      }
    }, [editedAction]);
    useEffect(function () {
      if (processedAction.type) {
        setEditProcessAction(true);
      }
    }, [processedAction]);
    var formFields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_6__["getFormFieldsBlocks"])([], '--');
    return wp.element.createElement(PluginDocumentSettingPanel, {
      name: 'jf-actions',
      title: 'Post Submit Actions'
    }, actions && actions.map(function (action, index) {
      return wp.element.createElement(Card, {
        key: action.id,
        size: 'extraSmall',
        className: 'jet-form-action'
      }, wp.element.createElement(CardBody, null, wp.element.createElement(SelectControl, {
        value: action.type,
        options: actionTypes,
        onChange: function onChange(newType) {
          updateAction(action.id, 'type', newType);
        }
      }), wp.element.createElement(Button, {
        icon: "edit",
        label: 'Edit Action',
        onClick: function onClick() {
          setEditedAction(function () {
            return _objectSpread({}, action);
          });
        }
      }), wp.element.createElement("div", null), wp.element.createElement(Button, {
        icon: "randomize",
        label: 'Conditions',
        onClick: function onClick() {
          setProcessedAction(function () {
            return _objectSpread({}, action);
          });
        }
      }), wp.element.createElement(DropdownMenu, {
        icon: 'ellipsis',
        label: 'Edit, move or delete',
        controls: [{
          title: 'Up',
          icon: 'arrow-up',
          disabled: true,
          onClick: function onClick() {
            if (0 !== index) {
              moveAction(index, index - 1);
            }
          }
        }, {
          title: 'Down',
          icon: 'arrow-down',
          disabled: index === actions.length,
          onClick: function onClick() {
            if (actions.length - 1 !== index) {
              moveAction(index, index + 1);
            }
          }
        }, {
          title: 'Delete',
          icon: 'trash',
          onClick: function onClick() {
            deleteAction(index);
          }
        }]
      })));
    }), wp.element.createElement(Button, {
      isPrimary: true,
      onClick: function onClick() {
        setActions([].concat(_toConsumableArray(actions), [{
          type: 'send_email',
          id: getRandomID(),
          settings: {}
        }]));
      }
    }, '+ New Action'), isEdit && wp.element.createElement(_components_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      classNames: ['width-60'],
      onRequestClose: closeModal,
      title: 'Edit Action',
      onUpdateClick: function onUpdateClick() {
        updateActionSettings(editedAction);
      },
      onCancelClick: closeModal
    }, Callback && wp.element.createElement(Callback, {
      settings: editedAction.settings,
      onChange: function onChange(data) {
        setEditedAction(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            settings: data
          });
        });
      }
    })), isEditProcessAction && wp.element.createElement(_components_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      classNames: ['width-60'],
      title: 'Edit Action Conditions',
      onRequestClose: function onRequestClose() {
        return setEditProcessAction(false);
      },
      onCancelClick: function onCancelClick() {
        return setEditProcessAction(false);
      }
    }, function (_ref) {
      var actionClick = _ref.actionClick,
          onRequestClose = _ref.onRequestClose;
      return wp.element.createElement(_components_repeater_with_state__WEBPACK_IMPORTED_MODULE_4__["default"], {
        items: processedAction.conditions,
        newItem: newItemCondition,
        onUnMount: onRequestClose,
        isSaveAction: actionClick,
        onSaveItems: updateActionCondition,
        addNewButtonLabel: __('Add New Condition'),
        help: {
          helpVisible: function helpVisible(conditions) {
            return conditions.length > 1;
          },
          helpSource: window.JetFormEditorData.helpForRepeaters,
          helpKey: 'conditional_action'
        }
      }, function (_ref2) {
        var currentItem = _ref2.currentItem,
            changeCurrentItem = _ref2.changeCurrentItem;
        var executeLabel = __('To fulfill this condition, the result of the check must be', 'jet-form-builder') + ' ';
        executeLabel += currentItem.execute ? 'TRUE' : 'FALSE';
        return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
          label: executeLabel,
          checked: currentItem.execute,
          onChange: function onChange(newValue) {
            changeCurrentItem({
              execute: newValue
            });
          }
        }), wp.element.createElement(SelectControl, {
          label: "Operator",
          labelPosition: "side",
          value: currentItem.operator,
          options: conditionOperators,
          onChange: function onChange(newValue) {
            changeCurrentItem({
              operator: newValue
            });
          }
        }), wp.element.createElement(SelectControl, {
          label: "Field",
          labelPosition: "side",
          value: currentItem.field,
          options: formFields,
          onChange: function onChange(newValue) {
            changeCurrentItem({
              field: newValue
            });
          }
        }), wp.element.createElement(_components_field_with_preset__WEBPACK_IMPORTED_MODULE_2__["default"], {
          ModalEditor: function ModalEditor(_ref3) {
            var actionClick = _ref3.actionClick,
                onRequestClose = _ref3.onRequestClose;
            return wp.element.createElement(_components_presets_dynamic_preset__WEBPACK_IMPORTED_MODULE_3__["default"], {
              value: currentItem.default,
              isSaveAction: actionClick,
              onSavePreset: function onSavePreset(newValue) {
                changeCurrentItem({
                  default: newValue
                });
              },
              excludeSources: ['query_var'],
              onUnMount: onRequestClose
            });
          },
          triggerClasses: ['trigger__textarea']
        }, wp.element.createElement(TextareaControl, {
          label: "Value to Compare",
          value: currentItem.default,
          onChange: function onChange(newValue) {
            changeCurrentItem({
              default: newValue
            });
          }
        })));
      });
    }));
  };

  registerPlugin('jf-actions-panel', {
    render: DocumentSettingPanelActions,
    icon: null
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ActionsMeta);

/***/ }),

/***/ "./editor/meta/arguments.js":
/*!**********************************!*\
  !*** ./editor/meta/arguments.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ArgsMeta() {
  var _wp$components = wp.components,
      TextControl = _wp$components.TextControl,
      SelectControl = _wp$components.SelectControl,
      ToggleControl = _wp$components.ToggleControl;
  var registerPlugin = wp.plugins.registerPlugin;
  var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
  var _wp$data = wp.data,
      useSelect = _wp$data.useSelect,
      useDispatch = _wp$data.useDispatch;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;

  var DocumentSettingPanelArgs = function DocumentSettingPanelArgs() {
    var meta = useSelect(function (select) {
      return select('core/editor').getEditedPostAttribute('meta') || {};
    });

    var _useDispatch = useDispatch('core/editor'),
        editPost = _useDispatch.editPost;

    var _useState = useState(JSON.parse(meta._jf_args || '{}')),
        _useState2 = _slicedToArray(_useState, 2),
        args = _useState2[0],
        setArgs = _useState2[1];

    useEffect(function () {
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_args: JSON.stringify(args)
        })
      });
    });
    return wp.element.createElement(PluginDocumentSettingPanel, {
      name: 'jf-args',
      title: 'Form Settings'
    }, wp.element.createElement(SelectControl, {
      label: 'Fields Layout',
      value: args.fields_layout,
      options: [{
        value: '',
        label: '--'
      }, {
        value: 'column',
        label: 'Column'
      }, {
        value: 'row',
        label: 'Row'
      }],
      onChange: function onChange(newVal) {
        setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread({}, prevArgs), {}, {
            fields_layout: newVal
          });
        });
      }
    }), wp.element.createElement(TextControl, {
      label: 'Required Mark',
      value: args.required_mark,
      onChange: function onChange(newVal) {
        setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread({}, prevArgs), {}, {
            required_mark: newVal
          });
        });
      }
    }), wp.element.createElement(SelectControl, {
      label: 'Submit Type',
      value: args.submit_type,
      options: [{
        value: '',
        label: '--'
      }, {
        value: 'reload',
        label: 'Page Reload'
      }, {
        value: 'ajax',
        label: 'AJAX'
      }],
      onChange: function onChange(newVal) {
        setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread({}, prevArgs), {}, {
            submit_type: newVal
          });
        });
      }
    }), wp.element.createElement(ToggleControl, {
      key: 'enable_progress',
      label: 'Enable form pages progress',
      checked: args.enable_progress,
      onChange: function onChange(newVal) {
        setArgs(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            enable_progress: Boolean(newVal)
          });
        });
      }
    }));
  };

  registerPlugin('jf-args-panel', {
    render: DocumentSettingPanelArgs,
    icon: null
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ArgsMeta);

/***/ }),

/***/ "./editor/meta/captcha.js":
/*!********************************!*\
  !*** ./editor/meta/captcha.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function Captcha() {
  var DocumentSettingPanelCaptcha = function DocumentSettingPanelCaptcha() {
    var meta = wp.data.select('core/editor').getEditedPostAttribute('meta') || {};

    var _useDispatch = useDispatch('core/editor'),
        editPost = _useDispatch.editPost;

    var _useState = useState(JSON.parse(meta._jf_recaptcha || '{}')),
        _useState2 = _slicedToArray(_useState, 2),
        args = _useState2[0],
        setArgs = _useState2[1];

    useEffect(function () {
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_recaptcha: JSON.stringify(args)
        })
      });
    });
    var data = window.JetFormEditorData.recaptchaLabels;
    return wp.element.createElement(PluginDocumentSettingPanel, {
      name: 'jf-captcha',
      title: 'Captcha Settings',
      key: 'jf-captcha-panel'
    }, wp.element.createElement(ToggleControl, {
      key: 'enabled',
      label: data.enabled,
      checked: args.enabled,
      onChange: function onChange(newVal) {
        setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread({}, prevArgs), {}, {
            enabled: Boolean(newVal)
          });
        });
      }
    }), args.enabled && wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
      key: 'site_key',
      label: data.key,
      value: args.key,
      onChange: function onChange(newValue) {
        return setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread({}, prevArgs), {}, {
            key: newValue
          });
        });
      }
    }), wp.element.createElement(TextControl, {
      key: 'secret_key',
      label: data.secret,
      value: args.secret,
      onChange: function onChange(newValue) {
        return setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread({}, prevArgs), {}, {
            secret: newValue
          });
        });
      }
    }), wp.element.createElement("span", null, 'Register reCAPTCHA v3 keys ', wp.element.createElement("a", {
      href: "https://www.google.com/recaptcha/admin/create",
      target: "_blank"
    }, "here"))));
  };

  registerPlugin('jf-captcha-panel', {
    render: DocumentSettingPanelCaptcha,
    icon: null
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Captcha);

/***/ }),

/***/ "./editor/meta/gateways.js":
/*!*********************************!*\
  !*** ./editor/meta/gateways.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _components_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/actions/action-modal */ "./editor/components/actions/action-modal.js");
/* harmony import */ var _gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gateways/gateways-editor */ "./editor/gateways/gateways-editor.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var __ = wp.i18n.__;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal,
    Text = _wp$components.Text;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function Gateways() {
  if (!window.JetFormEditorData.gateways.allowed) {
    return;
  }

  var gatewaysData = window.JetFormEditorData.gateways;

  var DocumentSettingPanelGateways = function DocumentSettingPanelGateways() {
    var meta = useSelect(function (select) {
      return select('core/editor').getEditedPostAttribute('meta') || {};
    });

    var _useDispatch = useDispatch('core/editor'),
        editPost = _useDispatch.editPost;

    var gatewaysProps = {
      activeActions: JSON.parse(meta._jf_actions),
      gatewaysArgs: JSON.parse(meta._jf_gateways || '{}')
    };

    var _useState = useState(gatewaysProps.gatewaysArgs.gateway),
        _useState2 = _slicedToArray(_useState, 2),
        gateway = _useState2[0],
        setGateway = _useState2[1];

    var _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isEdit = _useState4[0],
        setEdit = _useState4[1];

    var closeModal = function closeModal() {
      setEdit(false);
    };

    var getGatewayLabel = function getGatewayLabel(type) {
      return gatewaysData.list.find(function (el) {
        return el.value === type;
      }).label;
    };

    var saveArgs = function saveArgs(newArgs) {
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_gateways: JSON.stringify(newArgs)
        })
      });
    };

    var saveGateway = function saveGateway(type) {
      gatewaysProps.gatewaysArgs.gateway = type;
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_gateways: JSON.stringify(gatewaysProps.gatewaysArgs)
        })
      });
    };

    var issetActionType = function issetActionType(type) {
      return Boolean(gatewaysProps.activeActions.find(function (action) {
        return type === action.type;
      }));
    };

    var isDisabled = !issetActionType('insert_post');
    useEffect(function () {
      saveGateway(gateway);
    }, [gateway]);
    return wp.element.createElement(PluginDocumentSettingPanel, {
      name: 'jf-gateways',
      title: 'Gateways Settings',
      key: 'jf-gateways-panel'
    }, wp.element.createElement(RadioControl, {
      key: 'gateways_radio_control',
      selected: gateway,
      options: [{
        label: 'None',
        value: 'none'
      }].concat(_toConsumableArray(gatewaysData.list)),
      onChange: setGateway
    }), gateway && 'none' !== gateway && wp.element.createElement(React.Fragment, null, wp.element.createElement(Button, {
      onClick: function onClick() {
        return setEdit(true);
      },
      icon: 'admin-tools',
      style: {
        margin: '1em 0'
      },
      isSecondary: true,
      disabled: isDisabled
    }, __('Edit')), isDisabled && wp.element.createElement("p", null, __('Please add \`Insert/Update Post\` action', 'jet-form-builder'))), isEdit && wp.element.createElement(_components_actions_action_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      classNames: ['width-60'],
      onRequestClose: closeModal,
      title: "Edit ".concat(getGatewayLabel(gateway), " Settings")
    }, function (_ref) {
      var actionClick = _ref.actionClick,
          onRequestClose = _ref.onRequestClose;
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(_gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, gatewaysProps, {
        isSaveAction: actionClick,
        onUnMount: onRequestClose,
        onSaveItems: saveArgs
      })));
    }));
  };

  registerPlugin('jf-gateways-panel', {
    render: DocumentSettingPanelGateways,
    icon: null
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Gateways);

/***/ }),

/***/ "./editor/meta/messages.js":
/*!*********************************!*\
  !*** ./editor/meta/messages.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Messages() {
  var _wp$components = wp.components,
      ToggleControl = _wp$components.ToggleControl,
      TextControl = _wp$components.TextControl;
  var __ = wp.i18n.__;
  var registerPlugin = wp.plugins.registerPlugin;
  var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
  var _wp$data = wp.data,
      useSelect = _wp$data.useSelect,
      useDispatch = _wp$data.useDispatch;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;

  var DocumentSettingPanelMessages = function DocumentSettingPanelMessages() {
    var meta = wp.data.select('core/editor').getEditedPostAttribute('meta') || {};

    var _useDispatch = useDispatch('core/editor'),
        editPost = _useDispatch.editPost;

    var getDefaultMessagesValues = function getDefaultMessagesValues() {
      var defaults = {};
      Object.entries(JetFormEditorData.messagesDefault).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            type = _ref2[0],
            data = _ref2[1];

        defaults[type] = data.value;
      });
      return defaults;
    };

    var _useState = useState(function () {
      var metaMessages = JSON.parse(meta._jf_messages || '{}');
      return _helpers_tools__WEBPACK_IMPORTED_MODULE_0__["default"].isEmptyObject(metaMessages) ? getDefaultMessagesValues() : metaMessages;
    }),
        _useState2 = _slicedToArray(_useState, 2),
        messages = _useState2[0],
        setMessages = _useState2[1];

    useEffect(function () {
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_messages: JSON.stringify(messages)
        })
      });
    });

    var onChangeMessage = function onChangeMessage(type, value) {
      setMessages(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, type, value));
      });
    };

    return wp.element.createElement(PluginDocumentSettingPanel, {
      name: 'jf-messages',
      title: 'General Messages Settings'
    }, Object.entries(messages).map(function (_ref3, id) {
      var _ref4 = _slicedToArray(_ref3, 2),
          type = _ref4[0],
          text = _ref4[1];

      return JetFormEditorData.messagesDefault[type] && wp.element.createElement(TextControl, {
        key: type + id,
        label: JetFormEditorData.messagesDefault[type].label,
        value: text,
        onChange: function onChange(newValue) {
          return onChangeMessage(type, newValue);
        }
      });
    }));
  };

  registerPlugin('jf-messages-panel', {
    render: DocumentSettingPanelMessages,
    icon: null
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./editor/meta/preset.js":
/*!*******************************!*\
  !*** ./editor/meta/preset.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/tools */ "./editor/helpers/tools.js");
/* harmony import */ var _components_presets_general_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/presets/general-preset */ "./editor/components/presets/general-preset.js");
/* harmony import */ var _helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/blocks-helper */ "./editor/helpers/blocks-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function PresetMeta() {
  var ToggleControl = wp.components.ToggleControl;
  var registerPlugin = wp.plugins.registerPlugin;
  var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
  var _wp$data = wp.data,
      useSelect = _wp$data.useSelect,
      useDispatch = _wp$data.useDispatch;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;

  var DocumentSettingPanelPreset = function DocumentSettingPanelPreset() {
    var meta = wp.data.select('core/editor').getEditedPostAttribute('meta') || {};

    var _useDispatch = useDispatch('core/editor'),
        editPost = _useDispatch.editPost;

    var _useState = useState(JSON.parse(meta._jf_preset || '{}')),
        _useState2 = _slicedToArray(_useState, 2),
        args = _useState2[0],
        setArgs = _useState2[1];

    useEffect(function () {
      editPost({
        meta: _objectSpread(_objectSpread({}, meta), {}, {
          _jf_preset: JSON.stringify(args)
        })
      });
    });
    var formFields = Object(_helpers_blocks_helper__WEBPACK_IMPORTED_MODULE_2__["getAvailableFields"])();
    return wp.element.createElement(PluginDocumentSettingPanel, {
      name: 'jf-preset',
      title: 'Preset Settings'
    }, wp.element.createElement(ToggleControl, {
      key: 'enable_preset',
      label: 'Enable',
      checked: args.enabled,
      help: 'Check this to enable global form preset',
      onChange: function onChange(newVal) {
        setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread({}, prevArgs), {}, {
            enabled: newVal
          });
        });
      }
    }), args.enabled && wp.element.createElement(_components_presets_general_preset__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: args,
      onChange: function onChange(newVal) {
        setArgs(function (prevArgs) {
          return _objectSpread(_objectSpread(_objectSpread({}, prevArgs), newVal), {}, {
            enabled: prevArgs.enabled
          });
        });
      },
      availableFields: formFields
    }));
  };

  registerPlugin('jf-preset-panel', {
    render: DocumentSettingPanelPreset,
    icon: null
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PresetMeta);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvYmxvY2std3JhcHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jYWxjdWxhdGVkLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jYWxjdWxhdGVkLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NoZWNrYm94LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29uZGl0aW9uYWwtYmxvY2svZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29uZGl0aW9uYWwtYmxvY2svc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZGVmYXVsdC1tZXRhLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZmllbGQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGUtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGUtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9kYXRldGltZS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZXRpbWUtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9mb3JtLWJyZWFrLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9mb3JtLWJyZWFrLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9ncm91cC1icmVhay1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZ3JvdXAtYnJlYWstZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oZWFkaW5nLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oZWFkaW5nLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGVscC1tZXNzYWdlcy1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oaWRkZW4tZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hpZGRlbi1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hpZGRlbi1maWVsZC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbWVkaWEtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL21lZGlhLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbWVkaWEtZmllbGQvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL251bWJlci1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbnVtYmVyLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmFkaW8tZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhZGlvLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmFuZ2UtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhbmdlLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmVwZWF0ZXItZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmVwZWF0ZXItZmllbGQvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zZWxlY3QtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC1yYWRpby1jaGVrYy1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc3VibWl0LWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zdWJtaXQtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0LWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dC1maWVsZC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dGFyZWEtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHRhcmVhLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGltZS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGltZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3d5c2l3eWctZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3d5c2l3eWctZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tZmllbGRzLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tZ2VuZXJhdG9ycy1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vZnJvbS1tYW51YWwtZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tcG9zdC10ZXJtcy1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zb3VyY2VzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2ZpZWxkLXdpdGgtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2ZpZWxkLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvbWFjcm9zLWluc2VydGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9wcmVzZXRzL2dlbmVyYWwtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9wcmVzZXRzL3ByZXNldC1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvcmVwZWF0ZXItd2l0aC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9hY3RpdmVjYW1wYWlnbi5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2Jhc2UtYWN0aW9uLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwtd2ViaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2dldHJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvaW5zZXJ0LXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9pbnRlZ3JhdGlvbi1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9tYWlsY2hpbXAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9yZWRpcmVjdC10by1wYWdlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvcmVnaXN0ZXItdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3NlbmQtZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy91cGRhdGUtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3VwZGF0ZS11c2VyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9nYXRld2F5LWFjdGlvbi1hdHRydWJpdGVzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9nYXRld2F5cy1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2dhdGV3YXlzL3BheXBhbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvaGVscGVycy9hY3Rpb24taGVscGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2hlbHBlcnMvZ2F0ZXdheS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2hlbHBlcnMvaG9va3MtaGVscGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9oZWxwZXJzL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9tYWluLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9tZXRhL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvYXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9tZXRhL2NhcHRjaGEuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvZ2F0ZXdheXMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvcHJlc2V0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZWRpdG9yL21haW4uanNcIik7XG4iLCJpbXBvcnQgeyBqZmJIb29rcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlc0NvbmZpZyB9IGZyb20gXCIuL2hlbHAtbWVzc2FnZXMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEN1c3RvbVByb3BzKCBibG9jayApIHtcclxuXHRjb25zdCB7IGVkaXQ6IEVkaXRDb21wb25lbnQgfSA9IGJsb2NrLnNldHRpbmdzO1xyXG5cclxuXHRsZXQgX3BsdWdpbnMgPSB7fTtcclxuXHJcblx0aWYgKCAndXNlRWRpdFByb3BzJyBpbiBibG9jay5zZXR0aW5ncyApIHtcclxuXHRcdGNvbnN0IHsgdXNlRWRpdFByb3BzIH0gPSBibG9jay5zZXR0aW5ncztcclxuXHJcblx0XHR1c2VFZGl0UHJvcHMuZm9yRWFjaCggbmFtZSA9PiB7XHJcblx0XHRcdGNvbnN0IGVkaXRQcm9wID0gZWRpdFByb3BzLmZpbmQoIHByb3AgPT4gbmFtZSA9PT0gcHJvcC5uYW1lICk7XHJcblxyXG5cdFx0XHRpZiAoIGVkaXRQcm9wICkge1xyXG5cdFx0XHRcdF9wbHVnaW5zWyBuYW1lIF0gPSBlZGl0UHJvcC5jYWxsYWJsZSggYmxvY2sgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGRlbGV0ZSBibG9jay5zZXR0aW5ncy51c2VFZGl0UHJvcHM7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcHJvcHMgPT4gPEVkaXRDb21wb25lbnQgeyAuLi5wcm9wcyB9IGVkaXRQcm9wcz17IHsgLi4uX3BsdWdpbnMgfSB9Lz47XHJcbn1cclxuXHJcbmNvbnN0IGdldEhlbHBJbnN0YW5jZSA9IGJsb2NrID0+IHtcclxuXHRjb25zdCBtZXNzYWdlcyA9IHt9O1xyXG5cclxuXHRtZXNzYWdlc0NvbmZpZy5mb3JFYWNoKCBtc2cgPT4ge1xyXG5cdFx0aWYgKCBtc2cudG8uaW5jbHVkZXMoIGJsb2NrLm5hbWUgKSAmJiBtc2cubWVzc2FnZSApIHtcclxuXHRcdFx0bWVzc2FnZXNbIG1zZy5hdHRyaWJ1dGUgXSA9IG1zZztcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiAoIGF0dHJpYnV0ZSwgYXR0cmlidXRlcyA9IHt9ICkgPT4ge1xyXG5cdFx0aWYgKCAhICggYXR0cmlidXRlIGluIG1lc3NhZ2VzICkgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHRcdGNvbnN0IGl0ZW0gPSBtZXNzYWdlc1sgYXR0cmlidXRlIF07XHJcblxyXG5cdFx0aWYgKCAnY29uZGl0aW9ucycgaW4gaXRlbSApIHtcclxuXHRcdFx0Zm9yICggY29uc3QgYXR0ck5hbWUgaW4gaXRlbS5jb25kaXRpb25zICkge1xyXG5cdFx0XHRcdGlmICggISAoIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMgKSB8fCBpdGVtLmNvbmRpdGlvbnNbIGF0dHJOYW1lIF0gIT09IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXRlbS5tZXNzYWdlO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGVkaXRQcm9wcyA9IGpmYkhvb2tzLmFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5lZGl0UHJvcHMnLCBbXHJcblx0e1xyXG5cdFx0bmFtZTogJ3VuaXFLZXknLFxyXG5cdFx0Y2FsbGFibGU6IGJsb2NrID0+ICggc3VmZml4ID0+IGAkeyBibG9jay5uYW1lIH0vJHsgc3VmZml4IH1gIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdibG9ja05hbWUnLFxyXG5cdFx0Y2FsbGFibGU6IGJsb2NrID0+IGJsb2NrLm5hbWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdhdHRySGVscCcsXHJcblx0XHRjYWxsYWJsZTogZ2V0SGVscEluc3RhbmNlXHJcblx0fVxyXG5dICk7IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcbmltcG9ydCB7XHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2Nrc1xyXG59IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IGJsb2NrID0gJ2pldC1mb3Jtcy9jYWxjdWxhdGVkLWZpZWxkJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0Q29sb3JQYWxldHRlLFxyXG5cdFJpY2hUZXh0LFxyXG5cdEVkaXRhYmxlLFxyXG5cdE1lZGlhVXBsb2FkLFxyXG5cdFNlcnZlclNpZGVSZW5kZXIsXHJcblx0QmxvY2tDb250cm9scyxcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRQYW5lbENvbG9yLFxyXG5cdEljb25CdXR0b24sXHJcblx0VGV4dENvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0QnV0dG9uLFxyXG5cdFBvcG92ZXIsXHJcblx0UmFuZ2VDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHREaXNhYmxlZCxcclxuXHRUb29sYmFyR3JvdXAsXHJcblx0VG9vbGJhckl0ZW0sXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcblxyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGNhbGNfaGlkZGVuOiBfXyggJ0NoZWNrIHRoaXMgdG8gaGlkZSBjYWxjdWxhdGVkIGZpZWxkJyApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Q2FsY3VsYXRlZCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7XHJcblx0XHRcdGNhbGNfZm9ybXVsYTogYCR7IGF0dHJpYnV0ZXMuY2FsY19mb3JtdWxhIHx8ICcnIH0lRklFTEQ6OiR7IG1hY3JvcyB9JWBcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdGNvbnN0IHRvZ2dsZVBvcG92ZXIgPSAoKSA9PiB7XHJcblx0XHRzZXRGb3JtRmllbGRzKCBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCgpICk7XHJcblx0XHRzZXRTaG93TWFjcm9zKCB0b2dnbGUgPT4gISB0b2dnbGUgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbIGZvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHMgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cdGNvbnN0IFsgc2hvd01hY3Jvcywgc2V0U2hvd01hY3JvcyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnc2hvdy1wb3BvdmVyJyApIH1cclxuXHRcdFx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdGljb249eyBzaG93TWFjcm9zID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0b2dnbGVQb3BvdmVyIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgc2hvd01hY3JvcyAmJiA8UG9wb3ZlclxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BvcG92ZXInICkgfVxyXG5cdFx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IGZvcm1GaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XHJcblx0XHRcdFx0XHRcdHsgZm9ybUZpZWxkcy5tYXAoICggeyB2YWx1ZSB9LCBpbmRleCApID0+IDxkaXYga2V5PXsgdW5pcUtleSggYGZvcm1GaWVsZHMtJHsgaW5kZXggfWAgKSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnNlcnRNYWNyb3MoIHZhbHVlIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHQ+eyAnJUZJRUxEOjonICsgdmFsdWUgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdFx0PC9Qb3BvdmVyPiB9XHJcblx0XHRcdDwvVG9vbGJhckdyb3VwPlxyXG5cdFx0PC9CbG9ja0NvbnRyb2xzPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tZ2VuZXJhbCcgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX3Jvdy1ub3RpY2VcIj5cclxuXHRcdFx0XHRcdHsgX18oICdTZXQgbWF0aCBmb3JtdWxhIHRvIGNhbGN1bGF0ZSBmaWVsZCB2YWx1ZS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICdGb3IgZXhhbXBsZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0JUZJRUxEOjpxdWFudGl0eSUqJU1FVEE6OnByaWNlJTxici8+PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICdXaGVyZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdC1cclxuXHRcdFx0XHRcdHsgX18oICclRklFTEQ6OnF1YW50aXR5JSAtIG1hY3JvcyBmb3IgZm9ybSBmaWVsZCB2YWx1ZS4gXCJxdWFudGl0eVwiIC0gaXMgYSBmaWVsZCBuYW1lIHRvIGdldCB2YWx1ZSBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHQtXHJcblx0XHRcdFx0XHR7IF9fKCAnJU1FVEE6OnByaWNlJSAtIG1hY3JvcyBmb3IgY3VycmVudCBwb3N0IG1ldGEgdmFsdWUuIFwicHJpY2VcIiAtIGlzIGEgbWV0YSBrZXkgdG8gZ2V0IHZhbHVlIGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RlY2ltYWwgUGxhY2VzIE51bWJlcicgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J3ByZWNpc2lvbidcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcmVjaXNpb24gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHByZWNpc2lvbjogcGFyc2VJbnQoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nY2FsY19wcmVmaXgnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlZCBWYWx1ZSBQcmVmaXgnICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfcHJlZml4IH1cclxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ0ZvciBzcGFjZSBiZWZvcmUgb3IgYWZ0ZXIgdGV4dCB1c2U6ICZuYnNwOycgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY19wcmVmaXg6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2NhbGNfc3VmZml4J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgVmFsdWUgU3VmZml4JyApIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX3N1ZmZpeCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgX18oICdGb3Igc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHRleHQgdXNlOiAmbmJzcDsnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGNfc3VmZml4OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnY2FsY19oaWRkZW4nIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdIaWRkZW4nICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuY2FsY19oaWRkZW4gfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAuY2FsY19oaWRkZW4gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XHJcblx0XHRcdFx0XHRcdFx0Y2FsY19oaWRkZW46IEJvb2xlYW4oIG5ld1ZhbCApLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLWFkdmFuY2VkJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR2YWx1ZUlmRW1wdHlMYWJlbD17ICdDYWxjdWxhdGVkIEZpZWxkJyB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IHByb3BzLmlzU2VsZWN0ZWQgJiYgPFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PVwiY2FsY19mb3JtdWxhXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGNfZm9ybXVsYTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnIH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdjYWxjLXByZWZpeCcgfT57IGF0dHJpYnV0ZXMuY2FsY19wcmVmaXggfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2FsYy1mb3JtdWxhJyB9PnsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2FsYy1zdWZmaXgnIH0+eyBhdHRyaWJ1dGVzLmNhbGNfc3VmZml4IH08L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IEVkaXRDYWxjdWxhdGVkIGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0NhbGN1bGF0ZWQgRmllbGQnICksXHJcblx0ZGVzY3JpcHRpb246IF9fKCAnQ2FsY3VsYXRlIGFuZCBkaXNwbGF5IHlvdXIgbnVtYmVyIHZhbHVlcycgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEVkaXRDYWxjdWxhdGVkLFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTtcclxuIiwiaW1wb3J0IHsgU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuXHJcbmNvbnN0IGxvY2FsaXplZCA9IHdpbmRvdy5KZXRGb3JtQ2hlY2tib3hGaWVsZERhdGE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveEVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLXRvb2xiYXInICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1nZW5lcmFsJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tYWR2YW5jZWQnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2sgeyAuLi5wcm9wcyB9IC8+XHJcblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJyApIH1cclxuXHRcdFx0XHRzY3JpcHREYXRhPXsgbG9jYWxpemVkIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgQ2hlY2tib3hFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0NoZWNrYm94IEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogQ2hlY2tib3hFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCBSZXBlYXRlcldpdGhTdGF0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXBlYXRlci13aXRoLXN0YXRlXCI7XHJcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmllbGQtd2l0aC1wcmVzZXRcIjtcclxuaW1wb3J0IER5bmFtaWNQcmVzZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xyXG5pbXBvcnQge1xyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcblx0Z2V0SW5uZXJCbG9ja3NcclxufSBmcm9tIFwiLi4vLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJsb2NrQ29udHJvbHMsXHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0SW5uZXJCbG9ja3MsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcblx0VG9vbGJhckdyb3VwLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCBjb25kaXRpb24gPSB7XHJcblx0dHlwZTogJ2hpZGUnLFxyXG5cdGZpZWxkOiAnJyxcclxuXHRvcGVyYXRvcjogJycsXHJcblx0dmFsdWU6ICcnLFxyXG5cdHNldF92YWx1ZTogJycsXHJcbn07XHJcblxyXG5jb25zdCBjb25kaXRpb25UeXBlcyA9IFtcclxuXHR7IGxhYmVsOiAnLS0nLCB2YWx1ZTogJycgfSxcclxuXHR7XHJcblx0XHRsYWJlbDogJ0hpZGUgdGhpcyBmaWVsZCBpZi4uLicsXHJcblx0XHR2YWx1ZTogJ2hpZGUnXHJcblx0fSxcclxuXHR7XHJcblx0XHRsYWJlbDogJ1Nob3cgdGhpcyBmaWVsZCBpZi4uLicsXHJcblx0XHR2YWx1ZTogJ3Nob3cnXHJcblx0fSxcclxuXHR7XHJcblx0XHRsYWJlbDogJ1NldCB2YWx1ZSBmb3IgdGhpcyBmaWVsZCBpZi4uLicsXHJcblx0XHR2YWx1ZTogJ3NldF92YWx1ZScsXHJcblx0XHRjb25kaXRpb246ICdpc1NpbmdsZUZpZWxkJyxcclxuXHR9LFxyXG5dO1xyXG5cclxuY29uc3QgY29uZGl0aW9uT3BlcmF0b3JzID0gW1xyXG5cdHsgbGFiZWw6ICctLScsIHZhbHVlOiAnJyB9LFxyXG5cdHsgbGFiZWw6ICdFcXVhbCcsIHZhbHVlOiAnZXF1YWwnIH0sXHJcblx0eyBsYWJlbDogJ0dyZWF0ZXIgdGhhbicsIHZhbHVlOiAnZ3JlYXRlcicgfSxcclxuXHR7IGxhYmVsOiAnTGVzcyB0aGFuJywgdmFsdWU6ICdsZXNzJyB9LFxyXG5cdHsgbGFiZWw6ICdCZXR3ZWVuJywgdmFsdWU6ICdiZXR3ZWVuJyB9LFxyXG5cdHsgbGFiZWw6ICdJbiB0aGUgbGlzdCcsIHZhbHVlOiAnb25lX29mJyB9LFxyXG5cdHsgbGFiZWw6ICdDb250YWluIHRleHQnLCB2YWx1ZTogJ2NvbnRhaW4nIH0sXHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZGl0aW9uYWxCbG9ja0VkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGNsaWVudElkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0VG9vbHMuYWRkQ29uZGl0aW9uRm9yQ29uZFR5cGUoICdpc1NpbmdsZUZpZWxkJywgKCkgPT4ge1xyXG5cdFx0cmV0dXJuIDEgPT09IGdldElubmVyQmxvY2tzKCBjbGllbnRJZCApLmxlbmd0aDtcclxuXHR9IClcclxuXHJcblx0Y29uc3QgZ2V0Q29uZGl0aW9uVHlwZXMgPSBUb29scy5wYXJzZUNvbmRpdGlvbnNGdW5jKCBjb25kaXRpb25UeXBlcyApO1xyXG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxCbG9ja0NvbnRyb2xzIGtleT17IHVuaXFLZXkoICdCbG9ja0NvbnRyb2xzJyApIH0+XHJcblx0XHRcdDxUb29sYmFyR3JvdXAga2V5PXsgdW5pcUtleSggJ1Rvb2xiYXJHcm91cCcgKSB9PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdyYW5kb21pemUnICkgfVxyXG5cdFx0XHRcdFx0aXNUZXJ0aWFyeVxyXG5cdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0aWNvbj0ncmFuZG9taXplJ1xyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNb2RhbCggdHJ1ZSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1Rvb2xiYXJHcm91cD5cclxuXHRcdDwvQmxvY2tDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PElubmVyQmxvY2tzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2NvbmRpdGlvbmFsLWZpZWxkcycgKSB9XHJcblx0XHRcdFx0cmVuZGVyQXBwZW5kZXI9eyAoKSA9PiA8SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlciBrZXk9eyB1bmlxS2V5KCAnQnV0dG9uQmxvY2tBcHBlbmRlcicgKSB9Lz4gfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+LFxyXG5cdFx0c2hvd01vZGFsICYmIDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XHJcblx0XHRcdHRpdGxlPVwiQ29uZGl0aW9uYWwgTG9naWNcIlxyXG5cdFx0PlxyXG5cdFx0XHR7ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxSZXBlYXRlcldpdGhTdGF0ZVxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdSZXBlYXRlcldpdGhTdGF0ZScgKSB9XHJcblx0XHRcdFx0aXRlbXM9eyBhdHRyaWJ1dGVzLmNvbmRpdGlvbnMgfVxyXG5cdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0bmV3SXRlbT17IGNvbmRpdGlvbiB9XHJcblx0XHRcdFx0b25TYXZlSXRlbXM9eyBjb25kaXRpb25zID0+IHNldEF0dHJpYnV0ZXMoIHsgY29uZGl0aW9ucyB9ICkgfVxyXG5cdFx0XHRcdGFkZE5ld0J1dHRvbkxhYmVsPXsgX18oIFwiTmV3IENvbmRpdGlvblwiICkgfVxyXG5cdFx0XHRcdGhlbHA9eyB7XHJcblx0XHRcdFx0XHRoZWxwVmlzaWJsZTogY29uZGl0aW9ucyA9PiBjb25kaXRpb25zLmxlbmd0aCA+IDEsXHJcblx0XHRcdFx0XHRoZWxwU291cmNlOiB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuaGVscEZvclJlcGVhdGVycyxcclxuXHRcdFx0XHRcdGhlbHBLZXk6ICdjb25kaXRpb25hbF9ibG9jaydcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgKCB7IGN1cnJlbnRJdGVtLCBjaGFuZ2VDdXJyZW50SXRlbSB9ICkgPT4gPD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RDb250cm9sLXR5cGUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlR5cGVcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udHlwZSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBnZXRDb25kaXRpb25UeXBlcyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHR5cGU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtZmllbGQnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkZpZWxkXCJcclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmZpZWxkIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBmaWVsZDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC1vcGVyYXRvcicgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiT3BlcmF0b3JcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ub3BlcmF0b3IgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgY29uZGl0aW9uT3BlcmF0b3JzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3I6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXaXRoUHJlc2V0LXZhbHVlX3RvX2NvbXBhcmUnICkgfVxyXG5cdFx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0R5bmFtaWNQcmVzZXQtdmFsdWVfdG9fY29tcGFyZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHRcdHRyaWdnZXJDbGFzc2VzPXsgWyAndHJpZ2dlcl9fdGV4dGFyZWEnIF0gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1RleHRhcmVhQ29udHJvbC12YWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJWYWx1ZSB0byBDb21wYXJlXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD5cclxuXHRcdFx0XHRcdHsgJ3NldF92YWx1ZScgPT09IGN1cnJlbnRJdGVtLnR5cGUgJiYgPEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXaXRoUHJlc2V0LXZhbHVlX3RvX3NldCcgKSB9XHJcblx0XHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRHluYW1pY1ByZXNldC12YWx1ZV90b19zZXQnICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uc2V0X3ZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgc2V0X3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHRcdHRyaWdnZXJDbGFzc2VzPXsgWyAndHJpZ2dlcl9fdGV4dGFyZWEnIF0gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1RleHRhcmVhQ29udHJvbC1zZXRfdmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSB0byBTZXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0aGVscD17IF9fKCAnU2VwYXJhdGUgdmFsdWVzIHdpdGggY29tbWFzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uc2V0X3ZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHNldF92YWx1ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+IH1cclxuXHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHQ8L1JlcGVhdGVyV2l0aFN0YXRlPiB9XHJcblx0XHQ8L0FjdGlvbk1vZGFsPlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgQ29uZGl0aW9uYWxCbG9ja0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5pbXBvcnQgQ29uZGl0aW9uYWxTYXZlIGZyb20gXCIuL3NhdmVcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnQ29uZGl0aW9uYWwgQmxvY2snICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBDb25kaXRpb25hbEJsb2NrRWRpdCxcclxuXHRzYXZlOiBDb25kaXRpb25hbFNhdmUsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmRpdGlvbmFsU2F2ZSggcHJvcHMgKSB7XHJcblx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50Lz47XHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRyb2xzU2V0dGluZ3MgPSB7XHJcblx0XCJnZW5lcmFsXCI6IHtcclxuXHRcdGxhYmVsOiBfXyggJ0dlbmVyYWwnICksXHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImxhYmVsXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRmllbGQgTGFiZWxcIiApXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwibmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZvcm0gZmllbGQgbmFtZVwiICksXHJcblx0XHRcdFx0XCJoZWxwXCI6IF9fKCBcIlNob3VsZCBjb250YWluIG9ubHkgTGF0aW4gbGV0dGVycywgbnVtYmVycywgYC1gIG9yIGBfYCBjaGFycywgbm8gc3BhY2VzIG9ubHkgbG93ZXIgY2FzZVwiIClcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJkZXNjXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRmllbGQgRGVzY3JpcHRpb25cIiApXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVmYXVsdFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcImR5bmFtaWNfdGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRGVmYXVsdCBWYWx1ZVwiIClcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFwidG9vbGJhclwiOiB7XHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidG9nZ2xlXCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJJcyBSZXF1aXJlZFwiIClcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0XCJhZHZhbmNlZFwiOiB7XHJcblx0XHRsYWJlbDogX18oICdBZHZhbmNlZCcgKSxcclxuXHRcdGF0dHJzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwicGxhY2Vob2xkZXJcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJQbGFjZWhvbGRlclwiIClcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJhZGRfcHJldlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRvZ2dsZVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiQWRkIFByZXYgUGFnZSBCdXR0b25cIiApXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwicHJldl9sYWJlbFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIlByZXYgUGFnZSBCdXR0b24gTGFiZWxcIiApLFxyXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwiYWRkX3ByZXZcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInZpc2liaWxpdHlcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZpZWxkIFZpc2liaWxpdHlcIiApLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInNlbGVjdFwiLFxyXG5cdFx0XHRcdFwib3B0aW9uc1wiOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJhbGxcIixcclxuXHRcdFx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGb3IgYWxsXCIgKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcImxvZ2dlZF9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIGxvZ2dlZCBpbiB1c2Vyc1wiIClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJub3RfbG9nZ2VkX2luXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiT25seSBmb3IgTk9ULWxvZ2dlZCBpbiB1c2Vyc1wiIClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiY2xhc3NfbmFtZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkNTUyBDbGFzcyBOYW1lXCIgKVxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH1cclxufSIsImNvbnN0IHtcclxuXHRCdXR0b24sXHJcblx0VGV4dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNsYXNzIEpldERlZmF1bHRNZXRhQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5hZGROZXdPcHRpb24gPSB0aGlzLmFkZE5ld09wdGlvbi5iaW5kKCB0aGlzICk7XHJcblx0fVxyXG5cclxuXHRnZXREZWZhdWx0TWV0YSgpIHtcclxuXHRcdGlmICggISB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICkge1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSggdGhpcy5wcm9wcy5kZWZhdWx0TWV0YSApO1xyXG5cdH1cclxuXHJcblxyXG5cdGFkZE5ld09wdGlvbigpIHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5nZXREZWZhdWx0TWV0YSgpO1xyXG5cclxuXHRcdGl0ZW1zLnB1c2goIHtcclxuXHRcdFx0a2V5OiAnJyxcclxuXHRcdFx0dmFsdWU6ICcnLFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIGl0ZW1zICk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVPcHRpb24oIGluZGV4ICkge1xyXG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLmdldERlZmF1bHRNZXRhKCk7XHJcblx0XHRpdGVtcy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlVmFsdWUoIHsgdmFsdWUsIG5hbWUsIGlkIH0gKSB7XHJcblxyXG5cdFx0Y29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XHJcblx0XHRpdGVtc1sgaWQgXVsgbmFtZSBdID0gdmFsdWU7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcclxuXHR9XHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1kZWZhdWx0LW1ldGFfX3Jvd1wiXHJcblx0XHQ+XHJcblx0XHRcdHsgdGhpcy5nZXREZWZhdWx0TWV0YSgpLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX2ZsZXgtY29udHJvbHNcIlxyXG5cdFx0XHRcdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXItaXRlbS0nICsgaW5kZXggfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtLWNvbHVtbic+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT0nbWV0YV9rZXknXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgS2V5JyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmtleSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBuZXdWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ2tleScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleFxyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbS1jb2x1bW4nPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9J21ldGFfdmFsdWUnXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgVmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICd2YWx1ZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleFxyXG5cdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbS1jb2x1bW4nPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aWNvbj1cImRpc21pc3NcIlxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUmVtb3ZlXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdGhpcy5yZW1vdmVPcHRpb24oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdH0gKSB9XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbi1hZGQtb3B0aW9uJ1xyXG5cdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0b25DbGljaz17IHRoaXMuYWRkTmV3T3B0aW9uIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgX18oICdBZGQgTmV3IE9wdGlvbicgKSB9XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSmV0RGVmYXVsdE1ldGFDb250cm9sOyIsImltcG9ydCB7IGNvbnRyb2xzU2V0dGluZ3MgfSBmcm9tIFwiLi4vY29udHJvbHNcIjtcclxuaW1wb3J0IER5bmFtaWNQcmVzZXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xyXG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XHJcblxyXG5jb25zdCB7XHJcblx0QmxvY2tDb250cm9sc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFRvb2xiYXJHcm91cCxcclxuXHRGbGV4LFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIEZpZWxkQ29udHJvbCgge1xyXG5cdFx0XHRcdFx0XHQgICB0eXBlLFxyXG5cdFx0XHRcdFx0XHQgICBzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0XHQgICBhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0XHQgICBhdHRyc1NldHRpbmdzID0ge30sXHJcblx0XHRcdFx0XHRcdCAgIGVkaXRQcm9wczogeyBhdHRySGVscCA9ICgpID0+ICcnIH1cclxuXHRcdFx0XHRcdCAgIH0gKSB7XHJcblx0Y29uc3QgY3VycmVudENvbnRyb2wgPSBjb250cm9sc1NldHRpbmdzWyB0eXBlIF07XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsga2V5IF06IHZhbHVlIH0gKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gY3VycmVudENvbnRyb2wuYXR0cnMubWFwKCAoIHsgaGVscCA9ICcnLCBhdHRyTmFtZSwgbGFiZWwsIC4uLmF0dHIgfSApID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0KFxyXG5cdFx0XHRcdCEgKCBhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzIClcclxuXHRcdFx0KVxyXG5cdFx0XHR8fCAoXHJcblx0XHRcdFx0J2NvbmRpdGlvbicgaW4gYXR0clxyXG5cdFx0XHRcdCYmICEgYXR0cmlidXRlc1sgYXR0ci5jb25kaXRpb24gXVxyXG5cdFx0XHQpXHJcblx0XHRcdHx8IChcclxuXHRcdFx0XHRhdHRyTmFtZSBpbiBhdHRyc1NldHRpbmdzXHJcblx0XHRcdFx0JiYgJ3Nob3cnIGluIGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF1cclxuXHRcdFx0XHQmJiBmYWxzZSA9PT0gYXR0cnNTZXR0aW5nc1sgYXR0ck5hbWUgXS5zaG93XHJcblx0XHRcdClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKCBhdHRyLnR5cGUgKSB7XHJcblx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdHJldHVybiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRleHRDb250cm9sYCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz47XHJcblx0XHRcdGNhc2UgJ2R5bmFtaWNfdGV4dCc6XHJcblx0XHRcdFx0cmV0dXJuIDxGaWVsZFdpdGhQcmVzZXRcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LUZpZWxkV2l0aFByZXNldGAgfVxyXG5cdFx0XHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8RHluYW1pY1ByZXNldFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRleHRDb250cm9sRHluYW1pY2AgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGhlbHAgfHwgYXR0ckhlbHAoIGF0dHJOYW1lICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD47XHJcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0cmV0dXJuIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1TZWxlY3RDb250cm9sYCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgYXR0ck5hbWUgXSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgYXR0ci5vcHRpb25zIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPjtcclxuXHRcdFx0Y2FzZSAndG9nZ2xlJzpcclxuXHRcdFx0XHRyZXR1cm4gPFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IGAkeyBhdHRyLnR5cGUgfS0keyBhdHRyTmFtZSB9LVRvZ2dsZUNvbnRyb2xgIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+O1xyXG5cdFx0fVxyXG5cclxuXHR9ICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBHZW5lcmFsRmllbGRzKCBwcm9wcyApIHtcclxuXHRjb25zdCBjdXJyZW50Q29udHJvbCA9IGNvbnRyb2xzU2V0dGluZ3MuZ2VuZXJhbDtcclxuXHJcblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBjdXJyZW50Q29udHJvbC5sYWJlbCB9IGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWZpZWxkcycgfT5cclxuXHRcdDxGaWVsZENvbnRyb2xcclxuXHRcdFx0dHlwZT0nZ2VuZXJhbCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWdlbmVyYWwtZmllbGRzLWNvbXBvbmVudCcgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0PC9QYW5lbEJvZHk+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBBZHZhbmNlZEZpZWxkcyggcHJvcHMgKSB7XHJcblx0Y29uc3QgY3VycmVudENvbnRyb2wgPSBjb250cm9sc1NldHRpbmdzLmFkdmFuY2VkO1xyXG5cclxuXHRyZXR1cm4gPFBhbmVsQm9keSB0aXRsZT17IGN1cnJlbnRDb250cm9sLmxhYmVsIH0ga2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcycgfSBpbml0aWFsT3Blbj17IGZhbHNlIH0+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2FkdmFuY2VkJ1xyXG5cdFx0XHRrZXk9eyAnamV0LWZvcm0tYWR2YW5jZWQtZmllbGRzLWNvbXBvbmVudCcgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+XHJcblx0PC9QYW5lbEJvZHk+O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gVG9vbEJhckZpZWxkcyggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHsgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSwgY2hpbGRyZW4gPSBbXSB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiA8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1CbG9ja0NvbnRyb2xzJyApIH0+XHJcblx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzLVRvb2xiYXJHcm91cCcgKSB9PlxyXG5cdFx0XHQ8RmxleFxyXG5cdFx0XHRcdGFsaWduPXsgJ2NlbnRlcicgfVxyXG5cdFx0XHRcdGp1c3RpZnk9eyAnY2VudGVyJyB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXRvZ2dsZS1ib3gnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxGaWVsZENvbnRyb2xcclxuXHRcdFx0XHRcdHR5cGU9J3Rvb2xiYXInXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnamV0LWZvcm0tdG9vbGJhci1maWVsZHMtY29tcG9uZW50JyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDwvRmxleD5cclxuXHRcdDwvVG9vbGJhckdyb3VwPlxyXG5cdDwvQmxvY2tDb250cm9scz47XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEFkdmFuY2VkRmllbGRzXHJcbn07IiwiLyoqXHJcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3QgeyBpc0VtcHR5IH0gPSB3aW5kb3cubG9kYXNoO1xyXG5cclxuLyoqXHJcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHsgd2l0aEluc3RhbmNlSWQgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUZXh0Q29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cclxuY2xhc3MgSmV0RmllbGRzTWFwQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZFR5cGVzID0gdGhpcy5wcm9wcy5maWVsZFR5cGVzO1xyXG5cdFx0dGhpcy50YXhvbm9taWVzTGlzdCA9IHRoaXMucHJvcHMudGF4b25vbWllc0xpc3Q7XHJcblx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xyXG5cdFx0dGhpcy5tZXRhUHJvcCA9IHRoaXMucHJvcHMubWV0YVByb3AgPyB0aGlzLnByb3BzLm1ldGFQcm9wIDogJ3Bvc3RfbWV0YSc7XHJcblx0XHR0aGlzLnRlcm1zUHJvcCA9IHRoaXMucHJvcHMudGVybXNQcm9wID8gdGhpcy5wcm9wcy50ZXJtc1Byb3AgOiAncG9zdF90ZXJtcyc7XHJcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5wcm9wcy5pbmRleDtcclxuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuYmluZEZ1bmN0aW9ucygpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHR5cGU6IHRoaXMuZ2V0RmllbGRUeXBlKCB0aGlzLnByb3BzLmZpZWxkVmFsdWUgKSxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRiaW5kRnVuY3Rpb25zKCkge1xyXG5cdFx0dGhpcy5vbkNoYW5nZVR5cGUgPSB0aGlzLm9uQ2hhbmdlVHlwZS5iaW5kKCB0aGlzICk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUgPSB0aGlzLm9uQ2hhbmdlVmFsdWUuYmluZCggdGhpcyApO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmlkID0gYGluc3BlY3Rvci1zZWxlY3QtY29udHJvbC0keyB0aGlzLmluZGV4IH1gO1xyXG5cdFx0dGhpcy5wcmVwYXJlZFRheGVzID0gW107XHJcblx0XHR0aGlzLnRheFByZWZpeCA9ICdqZXRfdGF4X18nO1xyXG5cclxuXHRcdGlmICggISB0aGlzLnRheG9ub21pZXNMaXN0ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy50YXhvbm9taWVzTGlzdC5sZW5ndGg7IGkgKysgKSB7XHJcblx0XHRcdHRoaXMucHJlcGFyZWRUYXhlcy5wdXNoKCB7XHJcblx0XHRcdFx0dmFsdWU6IHRoaXMudGF4UHJlZml4ICsgdGhpcy50YXhvbm9taWVzTGlzdFsgaSBdLnZhbHVlLFxyXG5cdFx0XHRcdGxhYmVsOiB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0ubGFiZWwsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEZpZWxkTmFtZSggdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAhIHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZmllbGRUeXBlID0gdGhpcy5nZXRGaWVsZFR5cGUoIHZhbHVlICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLnRlcm1zUHJvcCA9PT0gZmllbGRUeXBlIHx8IHRoaXMubWV0YVByb3AgPT09IGZpZWxkVHlwZSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0aXNUZXJtT3JNZXRhKCB2YWx1ZSApIHtcclxuXHRcdHJldHVybiAoIHRoaXMudGVybXNQcm9wID09PSB2YWx1ZSB8fCB0aGlzLm1ldGFQcm9wID09PSB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblxyXG5cdGdldEZpZWxkVHlwZSggdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAhIHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZFR5cGVzLmxlbmd0aDsgaSArKyApIHtcclxuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gdGhpcy5maWVsZFR5cGVzWyBpIF0udmFsdWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB2YWx1ZS5pbmNsdWRlcyggdGhpcy50YXhQcmVmaXggKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudGVybXNQcm9wO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm1ldGFQcm9wO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUgKSB7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnRoaXMucHJvcHMuZmllbGRzTWFwLFxyXG5cdFx0XHRbIHRoaXMucHJvcHMuZmllbGROYW1lIF06IG5ld1ZhbHVlXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblxyXG5cdG9uQ2hhbmdlVHlwZSggbmV3VmFsdWUgKSB7XHJcblx0XHRsZXQgdmFsID0gdGhpcy5nZXRGaWVsZFR5cGUoIG5ld1ZhbHVlICk7XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSgge1xyXG5cdFx0XHR0eXBlOiB2YWxcclxuXHRcdH0gKTtcclxuXHJcblx0XHRpZiAoIHRoaXMuaXNUZXJtT3JNZXRhKCB2YWwgKSApIHtcclxuXHRcdFx0dmFsID0gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB2YWwgKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBEaXNhYmxlIHJlYXNvbjogQSBzZWxlY3Qgd2l0aCBhbiBvbmNoYW5nZSB0aHJvd3MgYSB3YXJuaW5nXHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX3Jvd1wiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LXBvc3QtZmllbGQtY29udHJvbFwiPlxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdHlwZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgdGhpcy5wcm9wcy5maWVsZE5hbWUgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnN0YXRlLnR5cGUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVHlwZSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5maWVsZFR5cGVzIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzE2MHB4J1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7ICggdGhpcy5tZXRhUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfbmFtZV8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0eyAoIHRoaXMudGVybXNQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC13aXRob3V0LWxhYmVsJ1xyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3RheF8nICsgdGhpcy5wcm9wcy5maWVsZE5hbWUgKyB0aGlzLmluZGV4IH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLnByZXBhcmVkVGF4ZXMgfVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG5cclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpldEZpZWxkc01hcENvbnRyb2w7IiwiZnVuY3Rpb24gSmV0RmllbGRQbGFjZWhvbGRlcigge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICB0aXRsZSxcclxuXHRcdFx0XHRcdFx0XHRcdCAgc3VidGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0XHQgIGlzUmVxdWlyZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0c3VidGl0bGUgPSBzdWJ0aXRsZS5maWx0ZXIoIHBhcnQgPT4gQm9vbGVhbiggcGFydCApICk7XHJcblxyXG5cdGNvbnN0IHN1YnRpdGxlU3RyID0gc3VidGl0bGUuam9pbiggJywgJyApO1xyXG5cclxuXHR2YXIgY2xhc3NOYW1lID0gJ2pldC1maWVsZC1wbGFjZWhvbGRlcic7XHJcblxyXG5cdGlmICggaXNSZXF1aXJlZCApIHtcclxuXHRcdGNsYXNzTmFtZSArPSAnIGlzLXJlcXVpcmVkJztcclxuXHR9XHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0+XHJcblx0XHR7IHRpdGxlIH06IHsgc3VidGl0bGVTdHIgfVxyXG5cdDwvZGl2PlxyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSmV0RmllbGRQbGFjZWhvbGRlcjsiLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpZWxkLXdyYXBwZXInO1xyXG5pbXBvcnQge1xyXG5cdFRvb2xCYXJGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRBZHZhbmNlZEZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdENvbG9yUGFsZXR0ZSxcclxuXHRSaWNoVGV4dCxcclxuXHRFZGl0YWJsZSxcclxuXHRNZWRpYVVwbG9hZCxcclxuXHRTZXJ2ZXJTaWRlUmVuZGVyLFxyXG5cdEJsb2NrQ29udHJvbHMsXHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wcyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0UGFuZWxDb2xvcixcclxuXHRJY29uQnV0dG9uLFxyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG5cdEJ1dHRvbixcclxuXHRSYW5nZUNvbnRyb2wsXHJcblx0Q2hlY2tib3hDb250cm9sLFxyXG5cdERhdGVUaW1lUGlja2VyLFxyXG5cdERpc2FibGVkLFxyXG5cdF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IElucHV0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIElucHV0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGJsb2NrTmFtZSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLXRvb2xiYXInICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0naXNfdGltZXN0YW1wJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0lzIFRpbWVzdGFtcCcgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5pc190aW1lc3RhbXAgfVxyXG5cdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnaXNfdGltZXN0YW1wJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBpc190aW1lc3RhbXA6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGJsb2NrTmFtZSB9YCB9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ICdJbnB1dCB0eXBlPVwiZGF0ZVwiJyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IERhdGVFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnRGF0ZSBmaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IERhdGVFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyJztcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWVFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLWdlbmVyYWwnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdpc190aW1lc3RhbXAnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSXMgVGltZXN0YW1wJyApIH1cclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaXNfdGltZXN0YW1wIH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnaXNfdGltZXN0YW1wJyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBpc190aW1lc3RhbXA6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1hZHZhbmNlZCcgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxyXG5cdFx0KSxcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgJ0lucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiJyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IERhdGVUaW1lRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0RhdGV0aW1lIGZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogRGF0ZVRpbWVFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdENvbG9yUGFsZXR0ZSxcclxuXHRSaWNoVGV4dCxcclxuXHRFZGl0YWJsZSxcclxuXHRNZWRpYVVwbG9hZCxcclxuXHRTZXJ2ZXJTaWRlUmVuZGVyLFxyXG5cdEJsb2NrQ29udHJvbHMsXHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wcyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0UGFuZWxDb2xvcixcclxuXHRJY29uQnV0dG9uLFxyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG5cdEJ1dHRvbixcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUJyZWFrRWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHRwcm9wcy5pc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdHRpdGxlPXsgX18oICdGaWVsZCBTZXR0aW5ncycgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9XCJwYWdlX2JyZWFrX2Rpc2FibGVkXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wYWdlX2JyZWFrX2Rpc2FibGVkIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdEaXNhYmxlZCBtZXNzYWdlJyApIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3BhZ2VfYnJlYWtfZGlzYWJsZWQnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHBhZ2VfYnJlYWtfZGlzYWJsZWQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fbmV4dC1wYWdlLXdyYXAnIH0+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdGtleT1cIm5leHRfcGFnZV9idXR0b25cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlcl9fbmV4dC1wYWdlXCJcclxuXHRcdFx0XHQ+eyBhdHRyaWJ1dGVzLmxhYmVsIHx8ICdOZXh0JyB9PC9CdXR0b24+XHJcblxyXG5cdFx0XHRcdHsgYXR0cmlidXRlcy5hZGRfcHJldiAmJiA8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0a2V5PVwicHJldl9wYWdlX2J1dHRvblwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2VcIlxyXG5cdFx0XHRcdD57IGF0dHJpYnV0ZXMucHJldl9sYWJlbCB8fCAnUHJldicgfTwvQnV0dG9uPiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxuXHJcbn0iLCJpbXBvcnQgRm9ybUJyZWFrRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0Zvcm0gQnJlYWsgRmllbGQnICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBGb3JtQnJlYWtFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsIlxyXG5pbXBvcnQgKiBhcyBjYWxjdWxhdGVkIGZyb20gJy4vY2FsY3VsYXRlZC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGNoZWNrYm94IGZyb20gJy4vY2hlY2tib3gtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBjb25kaXRpb25hbCBmcm9tICcuL2NvbmRpdGlvbmFsLWJsb2NrJztcclxuaW1wb3J0ICogYXMgZGF0ZSBmcm9tICcuL2RhdGUtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBkYXRldGltZSBmcm9tICcuL2RhdGV0aW1lLWZpZWxkJztcclxuaW1wb3J0ICogYXMgZm9ybUJyZWFrIGZyb20gJy4vZm9ybS1icmVhay1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGdyb3VwQnJlYWsgZnJvbSAnLi9ncm91cC1icmVhay1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGhlYWRpbmcgZnJvbSAnLi9oZWFkaW5nLWZpZWxkJztcclxuaW1wb3J0ICogYXMgaGlkZGVuIGZyb20gJy4vaGlkZGVuLWZpZWxkJztcclxuaW1wb3J0ICogYXMgbWVkaWEgZnJvbSAnLi9tZWRpYS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIG51bWJlciBmcm9tICcuL251bWJlci1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHJhZGlvIGZyb20gJy4vcmFkaW8tZmllbGQnO1xyXG5pbXBvcnQgKiBhcyByYW5nZSBmcm9tICcuL3JhbmdlLWZpZWxkJztcclxuaW1wb3J0ICogYXMgcmVwZWF0ZXIgZnJvbSAnLi9yZXBlYXRlci1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHNlbGVjdCBmcm9tICcuL3NlbGVjdC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHN1Ym1pdCBmcm9tICcuL3N1Ym1pdC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHRleHQgZnJvbSAnLi90ZXh0LWZpZWxkJztcclxuaW1wb3J0ICogYXMgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHRpbWUgZnJvbSAnLi90aW1lLWZpZWxkJztcclxuaW1wb3J0ICogYXMgd3lzaXd5ZyBmcm9tICcuL3d5c2l3eWctZmllbGQnO1xyXG5cclxuaW1wb3J0ICogYXMgd3JhcHBlcnMgZnJvbSBcIi4vYmxvY2std3JhcHBlcnNcIjtcclxuaW1wb3J0IHsgamZiSG9va3MgfSBmcm9tIFwiLi4vaGVscGVycy9ob29rcy1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRyZWdpc3RlckJsb2NrVHlwZVxyXG59ID0gd3AuYmxvY2tzO1xyXG5cclxuY29uc3QgZmllbGRzID0gamZiSG9va3MuYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsIFtcclxuXHRjYWxjdWxhdGVkLFxyXG5cdGNoZWNrYm94LFxyXG5cdGNvbmRpdGlvbmFsLFxyXG5cdGRhdGV0aW1lLFxyXG5cdGRhdGUsXHJcblx0Zm9ybUJyZWFrLFxyXG5cdGdyb3VwQnJlYWssXHJcblx0aGVhZGluZyxcclxuXHRoaWRkZW4sXHJcblx0bWVkaWEsXHJcblx0bnVtYmVyLFxyXG5cdHJhZGlvLFxyXG5cdHJhbmdlLFxyXG5cdHJlcGVhdGVyLFxyXG5cdHNlbGVjdCxcclxuXHRzdWJtaXQsXHJcblx0dGV4dCxcclxuXHR0ZXh0YXJlYSxcclxuXHR0aW1lLFxyXG5cdHd5c2l3eWcsXHJcblxyXG5cdC8qXHJcblx0Ki9cclxuXSApO1xyXG5cclxuY29uc3QgcmVnaXN0ZXJGb3JtRmllbGQgPSBibG9jayA9PiB7XHJcblx0aWYgKCAhIGJsb2NrICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRjb25zdCB7IG1ldGFkYXRhLCBzZXR0aW5ncywgbmFtZSB9ID0gYmxvY2s7XHJcblxyXG5cdHNldHRpbmdzLmVkaXQgPSB3cmFwcGVycy53aXRoQ3VzdG9tUHJvcHMoIGJsb2NrICk7XHJcblxyXG5cdHJlZ2lzdGVyQmxvY2tUeXBlKCBuYW1lLCB7XHJcblx0XHQuLi5tZXRhZGF0YSxcclxuXHRcdC4uLnNldHRpbmdzXHJcblx0fSApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckZvcm1GaWVsZHMgPSAoIGJsb2NrcyA9IGZpZWxkcyApID0+IHtcclxuXHRibG9ja3MuZm9yRWFjaCggamZiSG9va3MuYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcy5oYW5kbGVyJywgcmVnaXN0ZXJGb3JtRmllbGQgKSApO1xyXG59XHJcblxyXG5yZWdpc3RlckZvcm1GaWVsZHMoKTtcclxuIiwiaW1wb3J0IHsgQWR2YW5jZWRGaWVsZHMgfSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyb3VwQnJlYWtFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19ncm91cC1icmVhaycgfT5cclxuXHRcdFx0XHQ8c3Bhbj57IF9fKCAnR1JPVVAgQlJFQUsnICkgfTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IEdyb3VwQnJlYWtFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnR3JvdXAgQnJlYWsgRmllbGQnICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBHcm91cEJyZWFrRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpZWxkLXdyYXBwZXJcIjtcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRpbmdFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR2YWx1ZUlmRW1wdHlMYWJlbD17ICdIZWFkaW5nJyB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IEhlYWRpbmdFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnSGVhZGluZyBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEhlYWRpbmdFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBNRURJQSA9ICdqZXQtZm9ybXMvbWVkaWEtZmllbGQnO1xyXG5jb25zdCBGT1JNX0JSRUFLID0gJ2pldC1mb3Jtcy9mb3JtLWJyZWFrLWZpZWxkJztcclxuY29uc3QgREFURSA9ICdqZXQtZm9ybXMvZGF0ZS1maWVsZCc7XHJcbmNvbnN0IERBVEVUSU1FID0gJ2pldC1mb3Jtcy9kYXRldGltZS1maWVsZCc7XHJcbmNvbnN0IFJBRElPID0gJ2pldC1mb3Jtcy9yYWRpby1maWVsZCc7XHJcbmNvbnN0IENIRUNLQk9YID0gJ2pldC1mb3Jtcy9jaGVja2JveC1maWVsZCc7XHJcbmNvbnN0IFNFTEVDVCA9ICdqZXQtZm9ybXMvc2VsZWN0LWZpZWxkJztcclxuY29uc3QgUkFOR0UgPSAnamV0LWZvcm1zL3JhbmdlLWZpZWxkJztcclxuY29uc3QgUkVQRUFURVIgPSAnamV0LWZvcm1zL3JlcGVhdGVyLWZpZWxkJztcclxuY29uc3QgVEVYVCA9ICdqZXQtZm9ybXMvdGV4dC1maWVsZCc7XHJcbmNvbnN0IFRJTUUgPSAnamV0LWZvcm1zL3RpbWUtZmllbGQnO1xyXG5cclxuXHJcbmNvbnN0IG1lc3NhZ2VzQ29uZmlnID0gW1xyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2lzX3RpbWVzdGFtcCcsXHJcblx0XHR0bzogWyBEQVRFLCBEQVRFVElNRSBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBDaGVjayB0aGlzIGlmIHlvdSB3YW50IHRvIHNlbmQgdmFsdWUgb2YgdGhpcyBcclxuXHRcdGZpZWxkIGFzIHRpbWVzdGFtcCBpbnN0ZWFkIG9mIHBsYWluIGRhdGV0aW1lYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0JyxcclxuXHRcdHRvOiBbIERBVEUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnUGxhaW4gZGF0ZSBzaG91bGQgYmUgaW4geXl5eS1tbS1kZCBmb3JtYXQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2RlZmF1bHQnLFxyXG5cdFx0dG86IFsgREFURVRJTUUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnUGxhaW4gZGF0ZXRpbWUgc2hvdWxkIGJlIGluIHl5eXktTU0tZGRUaGg6bW0gZm9ybWF0JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdwYWdlX2JyZWFrX2Rpc2FibGVkJyxcclxuXHRcdHRvOiBbIEZPUk1fQlJFQUsgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgVGV4dCB0byBzaG93IGlmIG5leHQgcGFnZSBidXR0b24gaXMgZGlzYWJsZWQuIFxyXG5cdFx0Rm9yIGV4YW1wbGUgLSBcIkZpbGwgcmVxdWlyZWQgZmllbGRzXCIgZXRjLmAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnaW5zZXJ0X2F0dGFjaG1lbnQnLFxyXG5cdFx0dG86IFsgTUVESUEgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgSWYgY2hlY2tlZCBuZXcgYXR0YWNobWVudCB3aWxsIGJlIGluc2VydGVkIGZvciB1cGxvYWRlZCBmaWxlLiBcclxuXHRcdE5vdGU6IHdvcmsgb25seSBmb3IgbG9nZ2VkLWluIHVzZXJzIWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnbWF4X2ZpbGVzJyxcclxuXHRcdHRvOiBbIE1FRElBIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ0lmIG5vdCBzZXQgYWxsb3cgdG8gdXBsb2FkIDEgZmlsZScgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnbWF4X3NpemUnLFxyXG5cdFx0dG86IFsgTUVESUEgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnTWInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2FsbG93ZWRfbWltZXMnLFxyXG5cdFx0dG86IFsgTUVESUEgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgSWYgbm8gTUlNRSB0eXBlIHNlbGVjdGVkIHdpbGwgYWxsb3cgYWxsIHR5cGVzLiBcclxuXHRcdEhvbGQgZG93biB0aGUgQ3RybCAod2luZG93cykgLyBDb21tYW5kIChNYWMpIGJ1dHRvbiB0byBzZWxlY3QgbXVsdGlwbGUgb3B0aW9ucy5gIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ3ZhbHVlX2Zyb21fbWV0YScsXHJcblx0XHR0bzogWyBSQURJTywgQ0hFQ0tCT1gsIFNFTEVDVCBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBCeSBkZWZhdWx0IHBvc3QvdGVybSBJRCBpcyB1c2VkIGFzIHZhbHVlLiBIZXJlIHlvdSBjYW4gXHJcblx0XHRzZXQgbWV0YSBmaWVsZCBuYW1lIHRvIHVzZSBpdHMgdmFsdWUgYXMgZm9ybSBmaWVsZCB2YWx1ZWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleScsXHJcblx0XHR0bzogWyBSQURJTywgQ0hFQ0tCT1gsIFNFTEVDVCBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBIZXJlIHlvdSBjYW4gc2V0IG1ldGEgZmllbGQgbmFtZSB0byB1c2UgaXRzIHZhbHVlIFxyXG5cdFx0YXMgY2FsY3VsYXRlZCB2YWx1ZSBmb3IgY3VycmVudCBmb3JtIGZpZWxkYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdnZW5lcmF0b3JfZmllbGQnLFxyXG5cdFx0dG86IFsgUkFESU8sIENIRUNLQk9YLCBTRUxFQ1QgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgRm9yIE51bWJlcnMgcmFuZ2UgZ2VuZXJhdG9yIHNldCBmaWVsZCB3aXRoIG1heCByYW5nZSB2YWx1ZWAgKSxcclxuXHRcdGNvbmRpdGlvbnM6IHtcclxuXHRcdFx0Z2VuZXJhdG9yX2Z1bmN0aW9uOiAnbnVtX3JhbmdlJ1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnc3dpdGNoX29uX2NoYW5nZScsXHJcblx0XHR0bzogWyBTRUxFQ1QgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgQ2hlY2sgdGhpcyB0byBzd2l0Y2ggcGFnZSB0byBuZXh0IG9uIGN1cnJlbnQgdmFsdWUgY2hhbmdlYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdwcmVmaXhfc3VmZml4JyxcclxuXHRcdHRvOiBbIFJBTkdFIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ0ZvciBzcGFjZSBiZWZvcmUgb3IgYWZ0ZXIgdGV4dCB1c2U6ICZuYnNwOycgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnY2FsY19oaWRkZW4nLFxyXG5cdFx0dG86IFsgUkVQRUFURVIgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnQ2hlY2sgdGhpcyB0byBoaWRlIGNhbGN1bGF0ZWQgZmllbGQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2lucHV0X21hc2tfZGVmYXVsdCcsXHJcblx0XHR0bzogWyBURVhUIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYEV4YW1wbGVzOiAoOTk5KSA5OTktOTk5OSAtIHN0YXRpYyBtYXNrLCA5LWF7MSwzfTl7MSwzfSAtIG1hc2sgd2l0aCBkeW5hbWljIHN5bnRheCBcclxuXHRcdERlZmF1bHQgbWFza2luZyBkZWZpbml0aW9uczogOSAtIG51bWVyaWMsIGEgLSBhbHBoYWJldGljYWwsICogLSBhbHBoYW51bWVyaWNgIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2lucHV0X21hc2tfZGF0ZXRpbWVfbGluaycsXHJcblx0XHR0bzogWyBURVhUIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvSW5wdXRtYXNrL2Jsb2IvNS54L1JFQURNRV9kYXRlLm1kYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0JyxcclxuXHRcdHRvOiBbIFRJTUUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnUGxhaW4gdGltZSBzaG91bGQgYmUgaW4gaGg6bW06c3MgZm9ybWF0JyApXHJcblx0fVxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCB7IG1lc3NhZ2VzQ29uZmlnIH07IiwiaW1wb3J0IEpldEZpZWxkUGxhY2Vob2xkZXIgZnJvbSAnLi4vY29udHJvbHMvcGxhY2Vob2xkZXInO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5pbXBvcnQgeyBoaWRkZW5WYWx1ZXMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJsb2NrQ29udHJvbHMsXHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wcyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZGVuRWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHRpc1NlbGVjdGVkICYmIChcclxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHRcdHRpdGxlPXsgX18oICdGaWVsZCBTZXR0aW5ncycgKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdmaWVsZF92YWx1ZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJGaWVsZCBWYWx1ZVwiXHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJ0b3BcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgaGlkZGVuVmFsdWVzIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7IFsgJ3Bvc3RfbWV0YScsICd1c2VyX21ldGEnIF0uaW5jbHVkZXMoIGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgKSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PVwiaGlkZGVuX3ZhbHVlX2ZpZWxkXCJcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJNZXRhIEZpZWxkIHRvIEdldCBWYWx1ZSBGcm9tXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmhpZGRlbl92YWx1ZV9maWVsZCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaGlkZGVuX3ZhbHVlX2ZpZWxkOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0eyAncXVlcnlfdmFyJyA9PT0gYXR0cmlidXRlcy5maWVsZF92YWx1ZSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PVwicXVlcnlfdmFyX2tleVwiXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiUXVlcnkgVmFyaWFibGUgS2V5XCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnF1ZXJ5X3Zhcl9rZXkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHF1ZXJ5X3Zhcl9rZXk6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHR7ICdjdXJyZW50X2RhdGUnID09PSBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9XCJkYXRlX2Zvcm1hdFwiXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRm9ybWF0XCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRhdGVfZm9ybWF0IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBkYXRlX2Zvcm1hdDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdHsgJ21hbnVhbF9pbnB1dCcgPT09IGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT1cImhpZGRlbl92YWx1ZVwiXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiVmFsdWVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaGlkZGVuX3ZhbHVlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBoaWRkZW5fdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cclxuXHRcdCksXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEpldEZpZWxkUGxhY2Vob2xkZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0RmllbGRQbGFjZWhvbGRlcicgKSB9XHJcblx0XHRcdFx0dGl0bGU9eyAnSGlkZGVuIEZpZWxkJyB9XHJcblx0XHRcdFx0c3VidGl0bGU9eyBbIGF0dHJpYnV0ZXMubmFtZSBdIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn07XHJcbiIsImltcG9ydCBIZWFkaW5nRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0hpZGRlbiBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEhlYWRpbmdFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vLi4vaGVscGVycy90b29sc1wiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGhpZGRlblZhbHVlcyA9IFRvb2xzLndpdGhQbGFjZWhvbGRlciggW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAncG9zdF9pZCcsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgSUQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncG9zdF90aXRsZScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgVGl0bGUnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncG9zdF91cmwnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0L1BhZ2UgVVJMJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3Bvc3RfbWV0YScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgTWV0YScgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICd1c2VyX2lkJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBJRCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICd1c2VyX2VtYWlsJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBFbWFpbCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICd1c2VyX25hbWUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBVc2VyIE5hbWUnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndXNlcl9tZXRhJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBNZXRhJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2F1dGhvcl9pZCcsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgQXV0aG9yIElEJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2F1dGhvcl9lbWFpbCcsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgQXV0aG9yIEVtYWlsJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2F1dGhvcl9uYW1lJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBBdXRob3IgTmFtZScgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdxdWVyeV92YXInLFxyXG5cdFx0bGFiZWw6IF9fKCAnVVJMIFF1ZXJ5IFZhcmlhYmxlJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2N1cnJlbnRfZGF0ZScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IERhdGUnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnbWFudWFsX2lucHV0JyxcclxuXHRcdGxhYmVsOiBfXyggJ01hbnVhbCBJbnB1dCcgKVxyXG5cdH0sXHJcbl0gKTtcclxuXHJcbmV4cG9ydCB7IGhpZGRlblZhbHVlcyB9OyIsImltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyJztcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5pbXBvcnQge1xyXG5cdHVzZXJBY2Nlc3MsXHJcblx0dmFsdWVGb3JtYXRzXHJcbn0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxuXHRfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBOdW1iZXJDb250cm9sLCBJbnB1dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xyXG59XHJcblxyXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdElucHV0Q29udHJvbCA9IF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sO1xyXG59XHJcblxyXG5cclxuY29uc3QgbG9jYWxpemVEYXRhID0gd2luZG93LmpldEZvcm1NZWRpYUZpZWxkRGF0YTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhRWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiAoXHJcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtZm9ybS1tZWRpYS1maWVsZHMnXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdhbGxvd2VkX3VzZXJfY2FwJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVXNlciBhY2Nlc3MnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGxvd2VkX3VzZXJfY2FwIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgYWxsb3dlZF91c2VyX2NhcDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHVzZXJBY2Nlc3MgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdHsgJ2FueV91c2VyJyAhPT0gYXR0cmlidXRlcy5hbGxvd2VkX3VzZXJfY2FwICYmIDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0naW5zZXJ0X2F0dGFjaG1lbnQnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdJbnNlcnQgYXR0YWNobWVudCcgKSB9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmluc2VydF9hdHRhY2htZW50IH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnaW5zZXJ0X2F0dGFjaG1lbnQnICkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBpbnNlcnRfYXR0YWNobWVudDogQm9vbGVhbiggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0eyBhdHRyaWJ1dGVzLmluc2VydF9hdHRhY2htZW50ICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0ndmFsdWVfZm9ybWF0J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGQgdmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52YWx1ZV9mb3JtYXQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyB2YWx1ZV9mb3JtYXQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB2YWx1ZUZvcm1hdHMgfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdtYXhfZmlsZXMnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXhpbXVtIGFsbG93ZWQgZmlsZXMgdG8gdXBsb2FkJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdtYXhfZmlsZXMnICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4X2ZpbGVzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWF4X2ZpbGVzOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXhpbXVtIHNpemUgaW4gTWInICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nbWF4X3NpemUnXHJcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ21heF9zaXplJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heF9zaXplIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWF4X3NpemU6IHBhcnNlSW50KCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0bXVsdGlwbGVcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmaWVsZC1taW1lLXR5cGVzJ1xyXG5cdFx0XHRcdFx0XHRrZXk9J2FsbG93ZWRfbWltZXMnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdBbGxvdyBNSU1FIHR5cGVzJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdhbGxvd2VkX21pbWVzJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsbG93ZWRfbWltZXMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBhbGxvd2VkX21pbWVzOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbG9jYWxpemVEYXRhLm1pbWVfdHlwZXMgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cclxuXHRcdCksXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9ja19uZXcnICkgfVxyXG5cdFx0XHRcdFx0dHlwZT17ICdmaWxlJyB9XHJcblx0XHRcdFx0XHRkaXNhYmxlZD17IHRydWUgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBNZWRpYUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdNZWRpYSBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IE1lZGlhRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdG9vbHNcIjtcclxuXHJcbmNvbnN0IHVzZXJBY2Nlc3MgPSBUb29scy53aXRoUGxhY2Vob2xkZXIoIFtcclxuXHR7XHJcblx0XHR2YWx1ZTogXCJhbGxcIixcclxuXHRcdGxhYmVsOiBcIkFueSByZWdpc3RlcmVkIHVzZXJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6IFwidXBsb2FkX2ZpbGVzXCIsXHJcblx0XHRsYWJlbDogXCJBbnkgdXNlciwgd2hvIGFsbG93ZWQgdG8gdXBsb2FkIGZpbGVzXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiBcImVkaXRfcG9zdHNcIixcclxuXHRcdGxhYmVsOiBcIkFueSB1c2VyLCB3aG8gYWxsb3dlZCB0byBlZGl0IHBvc3RzXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiBcImFueV91c2VyXCIsXHJcblx0XHRsYWJlbDogXCJBbnkgdXNlciAoIGluY2wuIEd1ZXN0IClcIlxyXG5cdH1cclxuXSApO1xyXG5cclxuY29uc3QgdmFsdWVGb3JtYXRzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcImlkXCIsXHJcblx0XHRcImxhYmVsXCI6IFwiQXR0YWNobWVudCBJRFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcInZhbHVlXCI6IFwidXJsXCIsXHJcblx0XHRcImxhYmVsXCI6IFwiQXR0YWNobWVudCBVUkxcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcImJvdGhcIixcclxuXHRcdFwibGFiZWxcIjogXCJBcnJheSB3aXRoIGF0dGFjaG1lbnQgSUQgYW5kIFVSTFwiXHJcblx0fVxyXG5dICk7XHJcblxyXG5leHBvcnQge1xyXG5cdHVzZXJBY2Nlc3MsXHJcblx0dmFsdWVGb3JtYXRzXHJcbn07IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJsb2NrQ29udHJvbHMsXHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRQYW5lbEJvZHksXHJcblx0X19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IElucHV0Q29udHJvbCwgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIElucHV0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XHJcbn1cclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE51bWJlckVkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGNoYW5nZU51bWJlclZhbHVlID0gKCBrZXksIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiBuZXdWYWx1ZSA/IHBhcnNlSW50KCBuZXdWYWx1ZSApIDogJycgfSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BhbmVsQm9keScgKSB9XHJcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gVmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nbWluJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWluIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21pbicsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXggVmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nbWF4J1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdGVwJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRrZXk9J3N0ZXAnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdGVwIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ3N0ZXAnLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cclxuXHRcdCksXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdG1pbj17IGF0dHJpYnV0ZXMubWluIHx8IDAgfVxyXG5cdFx0XHRcdFx0bWF4PXsgYXR0cmlidXRlcy5tYXggfHwgMTAwMCB9XHJcblx0XHRcdFx0XHRzdGVwPXsgYXR0cmlidXRlcy5zdGVwIHx8IDEgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBOdW1iZXJFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnTnVtYmVyIEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogTnVtYmVyRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgeyBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2stcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wcyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWRpb0VkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7IGlzU2VsZWN0ZWQsIGVkaXRQcm9wczogeyB1bmlxS2V5IH0gfSA9IHByb3BzO1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrIHsgLi4ucHJvcHMgfS8+XHJcblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJyApIH1cclxuXHRcdFx0XHRzY3JpcHREYXRhPXsgd2luZG93LkpldEZvcm1SYWRpb0ZpZWxkRGF0YSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IFJhZGlvRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1JhZGlvIEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogUmFkaW9FZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcsICdibG9ja05hbWUnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmllbGQtd3JhcHBlcic7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG5cdF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCwgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgWyByYW5nZVZhbHVlLCBzZXRSYW5nZVZhbHVlIF0gPSB1c2VTdGF0ZSggNTAgKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdC8+LFxyXG5cdFx0cHJvcHMuaXNTZWxlY3RlZCAmJiAoXHJcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BhbmVsQm9keScgKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbiBWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0a2V5PSdtaW4nXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5taW4gfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtaW46IHBhcnNlSW50KCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heCBWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0a2V5PSdtYXgnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXggfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtYXg6IHBhcnNlSW50KCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N0ZXAnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nc3RlcCdcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnN0ZXAgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzdGVwOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J3ByZWZpeCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlIHByZWZpeCcgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcmVmaXggfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdwcmVmaXhfc3VmZml4JyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcHJlZml4OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J3N1ZmZpeCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlIHN1ZmZpeCcgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWZmaXggfVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdwcmVmaXhfc3VmZml4JyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc3VmZml4OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cclxuXHRcdCksXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHdyYXBDbGFzc2VzPXsgW1xyXG5cdFx0XHRcdFx0J3JhbmdlLXdyYXAnXHJcblx0XHRcdFx0XSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhbmdlLWZsZXgtd3JhcFwiPlxyXG5cdFx0XHRcdFx0PElucHV0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2Vob2xkZXJfYmxvY2snICkgfVxyXG5cdFx0XHRcdFx0XHR0eXBlPXsgJ3JhbmdlJyB9XHJcblx0XHRcdFx0XHRcdG1pbj17IGF0dHJpYnV0ZXMubWluIHx8IDAgfVxyXG5cdFx0XHRcdFx0XHRtYXg9eyBhdHRyaWJ1dGVzLm1heCB8fCAxMDAgfVxyXG5cdFx0XHRcdFx0XHRzdGVwPXsgYXR0cmlidXRlcy5zdGVwIHx8IDEgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHNldFJhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlJyB9PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtcHJlZml4JyB9PnsgYXR0cmlidXRlcy5wcmVmaXggfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4+eyByYW5nZVZhbHVlIH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC12YWx1ZS1zdWZmaXgnIH0+eyBhdHRyaWJ1dGVzLnN1ZmZpeCB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBSYW5nZUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdSYW5nZSBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFJhbmdlRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IHtcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2Nrc1xyXG59IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5pbXBvcnQge1xyXG5cdGNhbGNUeXBlLFxyXG5cdG1hbmFnZUl0ZW1zQ291bnRcclxufSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJsb2NrQ29udHJvbHMsXHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0SW5uZXJCbG9ja3MsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRzZWxlY3QsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRCdXR0b24sXHJcblx0UG9wb3ZlcixcclxuXHRCYXNlQ29udHJvbCxcclxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcGVhdGVyRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgWyBzaG93TWFjcm9zLCBzZXRTaG93TWFjcm9zIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCgpO1xyXG5cclxuXHRjb25zdCBtZXRhID0gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0Y29uc3QgbGFiZWwgPSBUb29scy5nZXRMYWJlbCggbWV0YSwgYXR0cmlidXRlcyApO1xyXG5cclxuXHRjb25zdCBpbnNlcnRNYWNyb3MgPSAoIG1hY3JvcyApID0+IHtcclxuXHRcdGNvbnN0IGZvcm11bGEgPSBhdHRyaWJ1dGVzLmNhbGNfZm9ybXVsYSB8fCAnJztcclxuXHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgY2FsY19mb3JtdWxhOiBmb3JtdWxhICsgJyVGSUVMRDo6JyArIG1hY3JvcyArICclJyB9ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdD5cclxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gYXR0cmlidXRlcy5yZXBlYXRlcl9jYWxjX3R5cGUgJiYgPEJ1dHRvblxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdCdXR0b24nICkgfVxyXG5cdFx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0aWNvbj17IHNob3dNYWNyb3MgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxyXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TWFjcm9zKCB0b2dnbGUgPT4gISB0b2dnbGUgKSB9XHJcblx0XHRcdC8+IH1cclxuXHRcdFx0eyBzaG93TWFjcm9zICYmIDxQb3BvdmVyXHJcblx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUG9wb3ZlcicgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGZvcm1GaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XHJcblx0XHRcdFx0XHR7IGZvcm1GaWVsZHMubWFwKCAoIHsgdmFsdWUgfSwgaW5kZXggKSA9PiA8ZGl2XHJcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdmaWVsZF8nICsgdmFsdWUgKyBpbmRleCApIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpbnNlcnRNYWNyb3MoIHZhbHVlIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0PnsgJyVGSUVMRDo6JyArIHZhbHVlICsgJyUnIH08L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PiApIH1cclxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxyXG5cdFx0XHQ8L1BvcG92ZXI+IH1cclxuXHRcdDwvVG9vbEJhckZpZWxkcz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdHRpdGxlPXsgX18oICdGaWVsZCBTZXR0aW5ncycgKSB9XHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BhbmVsQm9keScgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdtYW5hZ2VfaXRlbXNfY291bnQnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWFuYWdlIHJlcGVhdGVyIGl0ZW1zIGNvdW50JyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYW5hZ2VfaXRlbXNfY291bnQgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWFuYWdlX2l0ZW1zX2NvdW50OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBtYW5hZ2VJdGVtc0NvdW50IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgJ21hbnVhbGx5JyA9PT0gYXR0cmlidXRlcy5tYW5hZ2VfaXRlbXNfY291bnQgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J25ld19pdGVtX2xhYmVsJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FkZCBOZXcgSXRlbSBMYWJlbCcgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmV3X2l0ZW1fbGFiZWwgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG5ld19pdGVtX2xhYmVsOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0eyAnZHluYW1pY2FsbHknID09PSBhdHRyaWJ1dGVzLm1hbmFnZV9pdGVtc19jb3VudCAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdtYW5hZ2VfaXRlbXNfY291bnRfZmllbGQnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGQgaXRlbXMgY291bnQnICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hbmFnZV9pdGVtc19jb3VudF9maWVsZCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBtYW5hZ2VfaXRlbXNfY291bnRfZmllbGQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdC8+IH1cclxuXHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0ncmVwZWF0ZXJfY2FsY190eXBlJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZSByZXBlYXRlciByb3cgdmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnJlcGVhdGVyX2NhbGNfdHlwZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyByZXBlYXRlcl9jYWxjX3R5cGU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGNhbGNUeXBlIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgJ2N1c3RvbScgPT09IGF0dHJpYnV0ZXMucmVwZWF0ZXJfY2FsY190eXBlICYmIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19yb3ctbm90aWNlXCI+XHJcblx0XHRcdFx0XHR7IF9fKCAnU2V0IG1hdGggZm9ybXVsYSB0byBjYWxjdWxhdGUgZmllbGQgdmFsdWUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHR7IF9fKCAnRm9yIGV4YW1wbGU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+PGJyLz5cclxuXHRcdFx0XHRcdCVGSUVMRDo6cXVhbnRpdHklKiVNRVRBOjpwcmljZSU8YnIvPjxici8+XHJcblx0XHRcdFx0XHR7IF9fKCAnV2hlcmU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHQtXHJcblx0XHRcdFx0XHR7IF9fKCAnJUZJRUxEOjpxdWFudGl0eSUgLSBtYWNyb3MgZm9yIGZvcm0gZmllbGQgdmFsdWUuIFwicXVhbnRpdHlcIiAtIGlzIGEgZmllbGQgbmFtZSB0byBnZXQgdmFsdWUgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdFx0LVxyXG5cdFx0XHRcdFx0eyBfXyggJyVNRVRBOjpwcmljZSUgLSBtYWNyb3MgZm9yIGN1cnJlbnQgcG9zdCBtZXRhIHZhbHVlLiBcInByaWNlXCIgLSBpcyBhIG1ldGEga2V5IHRvIGdldCB2YWx1ZSBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+PGJyLz5cclxuXHRcdFx0XHQ8L2Rpdj4gfVxyXG5cclxuXHJcblx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICdGcmFnbWVudCcgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHR7ICdjdXN0b20nID09PSBhdHRyaWJ1dGVzLnJlcGVhdGVyX2NhbGNfdHlwZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3Jtc19fY2FsYy1mb3JtdWxhLWVkaXRvclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3Mtd3JhcFwiPlxyXG5cdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9XCJjYWxjX2Zvcm11bGFcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY19mb3JtdWxhIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0aW9uIEZvcm11bGEgZm9yIFJlcGVhdGVyJyApIH1cclxuXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGNhbGNfZm9ybXVsYTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PiB9XHJcblx0XHRcdDxCYXNlQ29udHJvbCBrZXk9eyB1bmlxS2V5KCAncmVwZWF0ZXItZmllbGRzLXRpdGxlJyApIH0+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sLlZpc3VhbExhYmVsPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fbGFiZWwnIH0+XHJcblx0XHRcdFx0XHRcdHsgbGFiZWwubmFtZSB8fCAnUmVwZWF0ZXIgZmllbGQnIH1cclxuXHRcdFx0XHRcdFx0eyBhdHRyaWJ1dGVzLnJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXF1aXJlZCcgfT5cclxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWwubWFyayA/IGxhYmVsLm1hcmsgOiAnKicgfVxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj4gfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCBqZXQtZm9ybS1idWlsZGVyX19kZXNjJyB9XHJcblx0XHRcdFx0XHQgc3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcgfSB9PnsgYXR0cmlidXRlcy5kZXNjIH08L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0XHRcdDxJbm5lckJsb2Nrc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdyZXBlYXRlci1maWVsZHMnICkgfVxyXG5cdFx0XHRcdHJlbmRlckFwcGVuZGVyPXsgKCkgPT4gKFxyXG5cdFx0XHRcdFx0PElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIga2V5PXsgdW5pcUtleSggJ0J1dHRvbkJsb2NrQXBwZW5kZXInICkgfS8+XHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyB9XHJcblx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQ+JnRpbWVzOzwvQnV0dG9uPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcwLjdlbScgfSB9Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19hY3Rpb25zXCI+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX25ldycgfVxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQ+eyBhdHRyaWJ1dGVzLm5ld19pdGVtX2xhYmVsIHx8ICdBZGQgTmV3JyB9PC9CdXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcbmltcG9ydCBSZXBlYXRlckVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgUmVwZWF0ZXJTYXZlIGZyb20gXCIuL3NhdmVcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnUmFuZ2UgRmllbGQnICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBSZXBlYXRlckVkaXQsXHJcblx0c2F2ZTogUmVwZWF0ZXJTYXZlLFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBjYWxjVHlwZSA9IFtcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2RlZmF1bHQnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRGVmYXVsdCAocmV0dXJucyByb3dzIGNvdW50KScgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdjdXN0b20nLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VzdG9tIChjYWxjdWxhdGUgY3VzdG9tIHZhbHVlIGZvciBlYWNoIHJvdyknIClcclxuXHR9XHJcbl07XHJcblxyXG5jb25zdCBtYW5hZ2VJdGVtc0NvdW50ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnbWFudWFsbHknLFxyXG5cdFx0bGFiZWw6IF9fKCAnTWFudWFsbHknIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnZHluYW1pY2FsbHknLFxyXG5cdFx0bGFiZWw6IF9fKCAnRHluYW1pY2FsbHkgKGdldCBjb3VudCBmcm9tIGZvcm0gZmllbGQpJyApXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IHtcclxuXHRjYWxjVHlwZSxcclxuXHRtYW5hZ2VJdGVtc0NvdW50XHJcbn07IiwiY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcGVhdGVyU2F2ZSggcHJvcHMgKSB7XHJcblx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50Lz47XHJcbn07XHJcbiIsImltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcbmltcG9ydCBTZWxlY3RSYWRpb0NoZWNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVja1wiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCbG9ja0NvbnRyb2xzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VG9nZ2xlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XHJcblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrIHsgLi4ucHJvcHMgfT5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdzd2l0Y2hfb25fY2hhbmdlJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N3aXRjaCBwYWdlIG9uIGNoYW5nZScgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zd2l0Y2hfb25fY2hhbmdlIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3N3aXRjaF9vbl9jaGFuZ2UnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN3aXRjaF9vbl9jaGFuZ2U6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9TZWxlY3RSYWRpb0NoZWNrPlxyXG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyXHJcblx0XHRcdFx0c2NyaXB0RGF0YT17IHdpbmRvdy5KZXRGb3JtU2VsZWN0RmllbGREYXRhIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgU2VsZWN0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1NlbGVjdCBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFNlbGVjdEVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBsaXN0RnJvbSA9IFtcclxuXHR7XHJcblx0XHRcInZhbHVlXCI6IFwibWFudWFsX2lucHV0XCIsXHJcblx0XHRcImxhYmVsXCI6IF9fKCAnTWFudWFsIElucHV0JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRcInZhbHVlXCI6IFwicG9zdHNcIixcclxuXHRcdFwibGFiZWxcIjogX18oICdQb3N0cycgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcInRlcm1zXCIsXHJcblx0XHRcImxhYmVsXCI6IF9fKCAnVGVybXMnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJtZXRhX2ZpZWxkXCIsXHJcblx0XHRcImxhYmVsXCI6IF9fKCAnTWV0YSBGaWVsZCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcImdlbmVyYXRlXCIsXHJcblx0XHRcImxhYmVsXCI6IF9fKCAnR2VuZXJhdGUgRHluYW1pY2FsbHknIClcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgeyBsaXN0RnJvbSB9OyIsImltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXRFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoIHsgY2xhc3NOYW1lOiAnamV0LWZvcm0tYnVpbGRlcl9fc3VibWl0LXdyYXAnIH0gKTtcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdGF0dHJzU2V0dGluZ3M9eyB7XHJcblx0XHRcdFx0XHRuYW1lOiB7IHNob3c6IGZhbHNlIH1cclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAnc3VibWl0LXdyYXAnICkgfT5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19zdWJtaXQnIH1cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgYXR0cmlidXRlcy5sYWJlbCB8fCAnU3VibWl0JyB9XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBTdWJtaXRFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnU3VibWl0IEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogU3VibWl0RWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpZWxkLXdyYXBwZXJcIjtcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5pbXBvcnQge1xyXG5cdGZpZWxkVHlwZXNMaXN0LFxyXG5cdG1hc2tQbGFjZWhvbGRlcnNMaXN0LFxyXG5cdG1hc2tUeXBlc0xpc3QsXHJcblx0bWFza1Zpc2liaWxpdGllc0xpc3RcclxufSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCwgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEVkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VOdW1iZXJWYWx1ZSA9ICgga2V5LCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gKCBuZXdWYWx1ZSAmJiBuZXdWYWx1ZSA+IDAgKSA/IHBhcnNlSW50KCBuZXdWYWx1ZSApIDogbnVsbDtcclxuXHJcblx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IFsga2V5IF06IHZhbHVlIH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfT5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdmaWVsZF90eXBlJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkIFR5cGUnICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkX3R5cGUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfdHlwZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgZmllbGRUeXBlc0xpc3QgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gbGVuZ3RoIChzeW1ib2xzKScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J21pbmxlbmd0aCdcclxuXHRcdFx0XHRcdG1pbj17IDEgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbmxlbmd0aCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21pbmxlbmd0aCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXggbGVuZ3RoIChzeW1ib2xzKScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J21heGxlbmd0aCdcclxuXHRcdFx0XHRcdG1pbj17IDEgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heGxlbmd0aCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heGxlbmd0aCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdlbmFibGVfaW5wdXRfbWFzaycgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NldCBJbnB1dCBNYXNrJyApIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmVuYWJsZV9pbnB1dF9tYXNrIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ0NoZWNrIHRoaXMgdG8gc2V0dXAgc3BlY2lmaWMgaW5wdXQgZm9ybWF0IGZvciB0aGUgY3VycmVudCBmaWVsZCcgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlX2lucHV0X21hc2s6IG5ld1ZhbCB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgYXR0cmlidXRlcy5lbmFibGVfaW5wdXRfbWFzayAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J21hc2tfdHlwZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgdHlwZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hc2tfdHlwZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1hc2tfdHlwZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tUeXBlc0xpc3QgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2lucHV0X21hc2snXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdJbnB1dCBtYXNrJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmlucHV0X21hc2sgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBpbnB1dF9tYXNrOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdHsgKCAhIGF0dHJpYnV0ZXMubWFza190eXBlICkgJiYgPGRpdiBjbGFzc05hbWU9eyAnaGVscC1pbnB1dCcgfT5cclxuXHRcdFx0XHRcdFx0eyBhdHRySGVscCggJ2lucHV0X21hc2tfZGVmYXVsdCcgKSB9XHJcblx0XHRcdFx0XHQ8L2Rpdj4gfVxyXG5cclxuXHRcdFx0XHRcdHsgJ2RhdGV0aW1lJyA9PT0gYXR0cmlidXRlcy5tYXNrX3R5cGUgJiYgPGRpdiBjbGFzc05hbWU9eyAnaGVscC1pbnB1dCcgfT5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ0V4YW1wbGVzOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH0gZGQvbW0veXl5eSwgbW0vZGQveXl5eTxici8+XHJcblx0XHRcdFx0XHRcdHsgX18oICdNb3JlIGluZm8gLSAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9eyBhdHRySGVscCggJ2lucHV0X21hc2tfZGF0ZXRpbWVfbGluaycgKSB9XHJcblx0XHRcdFx0XHRcdCAgIHRhcmdldD0nX2JsYW5rJz57IF9fKCAnaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gfVxyXG5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nbWFza192aXNpYmlsaXR5J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWFzayB2aXNpYmlsaXR5JyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFza192aXNpYmlsaXR5IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWFza192aXNpYmlsaXR5OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbWFza1Zpc2liaWxpdGllc0xpc3QgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nbWFza19wbGFjZWhvbGRlcidcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgcGxhY2Vob2xkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXNrX3BsYWNlaG9sZGVyIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWFza19wbGFjZWhvbGRlcjogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tQbGFjZWhvbGRlcnNMaXN0IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBhdHRyaWJ1dGVzLnBsYWNlaG9sZGVyIH1cclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn07XHJcbiIsImltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1RleHQgRmllbGQnICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBUZXh0RWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgZmllbGRUeXBlc0xpc3QgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICd0ZXh0JyxcclxuXHRcdGxhYmVsOiBfXyggJ1RleHQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnZW1haWwnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRW1haWwnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndXJsJyxcclxuXHRcdGxhYmVsOiBfXyggJ1VybCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICd0ZWwnLFxyXG5cdFx0bGFiZWw6IF9fKCAnVGVsJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3Bhc3N3b3JkJyxcclxuXHRcdGxhYmVsOiBfXyggJ1Bhc3N3b3JkJyApXHJcblx0fSxcclxuXTtcclxuXHJcbmNvbnN0IG1hc2tUeXBlc0xpc3QgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICcnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRGVmYXVsdCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdkYXRldGltZScsXHJcblx0XHRsYWJlbDogX18oICdEYXRldGltZScgKVxyXG5cdH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNrVmlzaWJpbGl0aWVzTGlzdCA9IFtcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2Fsd2F5cycsXHJcblx0XHRsYWJlbDogX18oICdBbHdheXMnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnaG92ZXInLFxyXG5cdFx0bGFiZWw6IF9fKCAnSG92ZXInIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnZm9jdXMnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRm9jdXMnIClcclxuXHR9LFxyXG5dO1xyXG5cclxuY29uc3QgbWFza1BsYWNlaG9sZGVyc0xpc3QgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdfJyxcclxuXHRcdGxhYmVsOiAnXydcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnLScsXHJcblx0XHRsYWJlbDogJy0nXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJyonLFxyXG5cdFx0bGFiZWw6ICcqJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICfigKInLFxyXG5cdFx0bGFiZWw6ICfigKInXHJcblx0fSxcclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcblx0ZmllbGRUeXBlc0xpc3QsXHJcblx0bWFza1R5cGVzTGlzdCxcclxuXHRtYXNrUGxhY2Vob2xkZXJzTGlzdCxcclxuXHRtYXNrVmlzaWJpbGl0aWVzTGlzdFxyXG59OyIsImltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmllbGQtd3JhcHBlclwiO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcblxyXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dGFyZWFFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IGNoYW5nZU51bWJlclZhbHVlID0gKCBrZXksIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSAoIG5ld1ZhbHVlICYmIG5ld1ZhbHVlID4gMCApID8gcGFyc2VJbnQoIG5ld1ZhbHVlICkgOiBudWxsO1xyXG5cdFx0c2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH0+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUGFuZWxCb2R5JyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluIGxlbmd0aCAoc3ltYm9scyknICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0a2V5PSdtaW5sZW5ndGgnXHJcblx0XHRcdFx0XHRtaW49eyAxIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5taW5sZW5ndGggfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtaW5sZW5ndGgnLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4IGxlbmd0aCAoc3ltYm9scyknICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0a2V5PSdtYXhsZW5ndGgnXHJcblx0XHRcdFx0XHRtaW49eyAxIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXhsZW5ndGggfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtYXhsZW5ndGgnLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHt9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn1cclxuIiwiaW1wb3J0IFRleHRhcmVhRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1RleHRhcmVhIEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogVGV4dGFyZWFFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyJztcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBJbnB1dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdElucHV0Q29udHJvbCA9IF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgJ0lucHV0IHR5cGU9XCJ0aW1lXCInIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgVGltZUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdUaW1lIEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogVGltZUVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3lzaXd5Z0VkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7IGVkaXRQcm9wczogeyB1bmlxS2V5IH0gfSA9IHByb3BzO1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIChcclxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQpLFxyXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcblxyXG59IiwiaW1wb3J0IFd5c2l3eWdFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnV3lzaXd5ZyBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFd5c2l3eWdFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImltcG9ydCB7IHNhdmVHbG9iYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvbkZpZWxkc01hcCA9ICgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgZmllbGRzID0gW10sIGxhYmVsID0gJ1tFbXB0eSBsYWJlbF0nLCBjaGlsZHJlbiA9ICgpID0+IHtcclxuXHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgfSApID0+IHtcclxuXHJcblx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRrZXk9J2pldF9maWVsZHNfbWFwJ1xyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGRJZCwgZmllbGREYXRhIF0sIGluZGV4ICkgPT4gPFJlYWN0LkZyYWdtZW50XHJcblx0XHRcdFx0a2V5PXsgYGZpZWxkX2luX21hcF8keyBmaWVsZElkICsgaW5kZXggfWAgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSB9XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICkgfVxyXG5cdFx0PC9kaXY+XHJcblx0PC9CYXNlQ29udHJvbD5cclxufTtcclxuXHJcbnNhdmVHbG9iYWxDb21wb25lbnQoICdKZXRGQkNvbXBvbmVudHMnLCB7IEFjdGlvbkZpZWxkc01hcCB9ICk7IiwiY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5cclxuY2xhc3MgQWN0aW9uTWVzc2FnZXMgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuc2V0TWVzc2FnZXMoKTtcclxuXHR9XHJcblxyXG5cdHNldE1lc3NhZ2VzKCkge1xyXG5cdFx0aWYgKCB0aGlzLnByb3BzLnNldHRpbmdzICYmIHRoaXMucHJvcHMuc2V0dGluZ3MubWVzc2FnZXMgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG1lc3NhZ2VzID0ge307XHJcblxyXG5cdFx0T2JqZWN0LmVudHJpZXMoIHRoaXMucHJvcHMuc291cmNlLl9fbWVzc2FnZXMgKS5mb3JFYWNoKCAoIFsgdHlwZSwgZGF0YSBdICkgPT4ge1xyXG5cdFx0XHRtZXNzYWdlc1sgdHlwZSBdID0gZGF0YS52YWx1ZTtcclxuXHRcdH0gKVxyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0bWVzc2FnZXM6IG1lc3NhZ2VzXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRnZXRNZXNzYWdlKCBuYW1lICkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3NbICdtZXNzYWdlcycgXSAmJiBzZXR0aW5nc1sgJ21lc3NhZ2VzJyBdWyBuYW1lIF0gKSB7XHJcblx0XHRcdHJldHVybiBzZXR0aW5nc1sgJ21lc3NhZ2VzJyBdWyBuYW1lIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHJcblx0Y2hhbmdlRmllbGRzTWFwKCB7IHNvdXJjZSwgbmFtZUZpZWxkLCB2YWx1ZSB9ICkge1xyXG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbihcclxuXHRcdFx0e30sXHJcblx0XHRcdHRoaXMucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdLFxyXG5cdFx0XHR7IFsgbmFtZUZpZWxkIF06IHZhbHVlIH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXBcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG1lc3NhZ2VzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9ICggdmFsdWUsIG5hbWVGaWVsZCApID0+IHtcclxuXHRcdFx0Y29uc3Qgc291cmNlID0gJ21lc3NhZ2VzJztcclxuXHJcblx0XHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxyXG5cdFx0XHRcdHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH1cclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnTWVzc2FnZXMgU2V0dGluZ3M6JyApIH1cclxuXHRcdFx0a2V5PSdtZXNzYWdlc19zZXR0aW5nc19maWVsZHMnXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxyXG5cdFx0XHRcdHsgc2V0dGluZ3MubWVzc2FnZXMgJiYgT2JqZWN0LmVudHJpZXMoIHNldHRpbmdzLm1lc3NhZ2VzIClcclxuXHRcdFx0XHQubWFwKCAoIFsgdHlwZSwgZGF0YSBdLCBpZCApID0+IDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ21lc3NhZ2VfJyArIHR5cGUgKyBpZCB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHR5cGUgKyBpZCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBtZXNzYWdlcyggdHlwZSApLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0TWVzc2FnZSggdHlwZSApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlTWVzc2FnZSggbmV3VmFsdWUsIHR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbk1lc3NhZ2VzOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1vZGFsKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uUmVxdWVzdENsb3NlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgdGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGNsYXNzTmFtZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25VcGRhdGVDbGljayxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25DYW5jZWxDbGlja1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgfSApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0QnV0dG9uLFxyXG5cdFx0QnV0dG9uR3JvdXAsXHJcblx0XHRNb2RhbCxcclxuXHR9ID0gd3AuY29tcG9uZW50cztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU3RhdGUsXHJcblx0XHR1c2VFZmZlY3RcclxuXHR9ID0gd3AuZWxlbWVudDtcclxuXHJcblx0Y29uc3QgbW9kYWxDbGFzc2VzID0gWyAnamV0LWZvcm0tZWRpdC1tb2RhbCcsIC4uLmNsYXNzTmFtZXMgXS5qb2luKCAnICcgKTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25DbGljaywgc2V0QWN0aW9uQ2xpY2sgXSA9IHVzZVN0YXRlKCBudWxsICk7XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBvblVwZGF0ZUNsaWNrICkge1xyXG5cdFx0XHRvblVwZGF0ZUNsaWNrKCk7XHJcblx0XHR9XHJcblx0XHRzZXRBY3Rpb25DbGljayggdHJ1ZSApXHJcblx0fVxyXG5cdGNvbnN0IGNhbmNlbENsaWNrID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBvbkNhbmNlbENsaWNrICkge1xyXG5cdFx0XHRvbkNhbmNlbENsaWNrKCk7XHJcblx0XHR9XHJcblx0XHRzZXRBY3Rpb25DbGljayggZmFsc2UgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8TW9kYWxcclxuXHRcdG9uUmVxdWVzdENsb3NlPXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgbW9kYWxDbGFzc2VzIH1cclxuXHRcdHRpdGxlPXsgdGl0bGUgfVxyXG5cdD5cclxuXHRcdHsgISBjaGlsZHJlbiAmJiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2NvbnRlbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7ICdBY3Rpb24gY2FsbGJhY2sgaXMgbm90IGZvdW5kLicgfVxyXG5cdFx0PC9kaXY+IH1cclxuXHRcdHsgY2hpbGRyZW4gJiYgPGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCI+XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSB9XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEJ1dHRvbkdyb3VwXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fYWN0aW9uc1wiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB1cGRhdGVDbGljayB9XHJcblx0XHRcdFx0PlVwZGF0ZTwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAnMCAwIDAgMTBweCdcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b25DbGljaz17IGNhbmNlbENsaWNrIH1cclxuXHRcdFx0XHQ+Q2FuY2VsPC9CdXR0b24+XHJcblx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHQ8L2Rpdj4gfVxyXG5cdDwvTW9kYWw+O1xyXG59IiwiaW1wb3J0IHsgZnJvbUxvY2FsaXplSGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0KCBhY3Rpb25UeXBlLCBBY3Rpb25JbnN0YW5jZSApIHtcclxuXHRjb25zdCBsb2NhbGl6ZWREYXRhID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvblR5cGUgKTtcclxuXHJcblx0cmV0dXJuIHByb3BzID0+IHtcclxuXHRcdGNvbnN0IG9uQ2hhbmdlU2V0dGluZyA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGdldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9IHByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNldE1hcEZpZWxkID0gKCB7IHNvdXJjZSA9ICdmaWVsZHNfbWFwJywgbmFtZUZpZWxkLCB2YWx1ZSB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWVsZHNNYXAgPSB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdLFxyXG5cdFx0XHRcdFsgbmFtZUZpZWxkIF06IHZhbHVlLFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXBcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGFkZGl0aW9uYWxQcm9wcyA9IHsgb25DaGFuZ2VTZXR0aW5nLCBnZXRNYXBGaWVsZCwgc2V0TWFwRmllbGQgfTtcclxuXHJcblx0XHRyZXR1cm4gPEFjdGlvbkluc3RhbmNlXHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHR7IC4uLmxvY2FsaXplZERhdGEgfVxyXG5cdFx0XHR7IC4uLmFkZGl0aW9uYWxQcm9wcyB9XHJcblx0XHQvPlxyXG5cdH07XHJcbn0iLCJjb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5mdW5jdGlvbiBGcm9tR2VuZXJhdG9yc0ZpZWxkcyggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0ZWRpdFByb3BzOiB7IGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PSdnZW5lcmF0b3JfZnVuY3Rpb24nXHJcblx0XHRcdGxhYmVsPSdHZW5lcmF0b3IgRnVuY3Rpb24nXHJcblx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9mdW5jdGlvbiB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9mdW5jdGlvbjogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IHdpbmRvdy5KZXRGb3JtU2VsZWN0RmllbGREYXRhLmdlbmVyYXRvcnNfbGlzdCB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nZ2VuZXJhdG9yX2ZpZWxkJ1xyXG5cdFx0XHRsYWJlbD0nRmllbGQgTmFtZSdcclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9maWVsZCB9XHJcblx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2dlbmVyYXRvcl9maWVsZCcsIGF0dHJpYnV0ZXMgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9maWVsZDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PSdmcm9tX2dlbmVyYXRvcl9fdmFsdWVfZnJvbV9tZXRhJ1xyXG5cdFx0XHRsYWJlbD0nVmFsdWUgZnJvbSBtZXRhIGZpZWxkJ1xyXG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICd2YWx1ZV9mcm9tX21ldGEnICkgfVxyXG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZnJvbV9nZW5lcmF0b3JfX3ZhbHVlX2Zyb21fbWV0YSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZyb21fZ2VuZXJhdG9yX192YWx1ZV9mcm9tX21ldGE6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleSdcclxuXHRcdFx0bGFiZWw9J0NhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkJ1xyXG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5JyApIH1cclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb21HZW5lcmF0b3JzRmllbGRzOyIsImltcG9ydCBSZXBlYXRlcldpdGhTdGF0ZSBmcm9tIFwiLi4vcmVwZWF0ZXItd2l0aC1zdGF0ZVwiO1xyXG5pbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uLW1vZGFsXCI7XHJcblxyXG5jb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdFRleHRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCBhZGROZXdPcHRpb24gPSB7XHJcblx0bGFiZWw6ICcnLFxyXG5cdHZhbHVlOiAnJyxcclxuXHRjYWxjdWxhdGU6ICcnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBGcm9tTWFudWFsRmllbGRzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgWyBzaG93TWFudWFsTW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRhdHRyaWJ1dGVzXHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHJcblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XHJcblx0XHRzZXRTaG93TW9kYWwoIHRvZ2dsZSA9PiAhIHRvZ2dsZSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgb25VcGRhdGVPcHRpb25zID0gaXRlbXMgPT4ge1xyXG5cdFx0LyogUmVtb3ZlIGVtcHR5IG9wdGlvbnMgKi9cclxuXHRcdGNvbnN0IGZpZWxkX29wdGlvbnMgPSBpdGVtcy5maWx0ZXIoIG9wdGlvbiA9PiB7XHJcblx0XHRcdHJldHVybiAoIEJvb2xlYW4oIG9wdGlvbi52YWx1ZSApIHx8IEJvb2xlYW4oIG9wdGlvbi5jYWxjdWxhdGUgKSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfb3B0aW9ucyB9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtSGVhZGluZyA9ICggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApID0+IHtcclxuXHRcdGNvbnN0IGxlZnRQYXJ0ID0gWyBgIyR7IGluZGV4ICsgMSB9YCBdO1xyXG5cdFx0Y29uc3QgcmlnaHRQYXJ0ID0gW107XHJcblxyXG5cdFx0aWYgKCBjdXJyZW50SXRlbS5sYWJlbCApIHtcclxuXHRcdFx0cmlnaHRQYXJ0LnB1c2goIGBMYWJlbCBbJHsgY3VycmVudEl0ZW0ubGFiZWwgfV1gICk7XHJcblx0XHR9XHJcblx0XHRpZiAoIGN1cnJlbnRJdGVtLnZhbHVlICkge1xyXG5cdFx0XHRyaWdodFBhcnQucHVzaCggYFZhbHVlIFskeyBjdXJyZW50SXRlbS52YWx1ZSB9XWAgKTtcclxuXHRcdH1cclxuXHRcdGlmICggY3VycmVudEl0ZW0uY2FsY3VsYXRlICkge1xyXG5cdFx0XHRyaWdodFBhcnQucHVzaCggYENhbGN1bGF0ZSBbJHsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1dYCApO1xyXG5cdFx0fVxyXG5cdFx0bGVmdFBhcnQucHVzaCggcmlnaHRQYXJ0LmpvaW4oICcgfCAnICkgKVxyXG5cclxuXHRcdHJldHVybiBsZWZ0UGFydC5qb2luKCAnICcgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT0namV0LWZvcm0vbWFuYWdlLW1hbnVhbC1pdGVtcyc+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdG9uQ2xpY2s9eyB0b2dnbGVNb2RhbCB9XHJcblx0XHRcdGljb249eyAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMTVweCdcclxuXHRcdFx0fSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgX18oICdNYW5hZ2UgSXRlbXMnICkgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0XHR7IHNob3dNYW51YWxNb2RhbCAmJiA8QWN0aW9uTW9kYWxcclxuXHRcdFx0dGl0bGU9eyAnRWRpdCBNYW51YWwgT3B0aW9ucycgfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IHRvZ2dsZU1vZGFsIH1cclxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdD5cclxuXHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlcldpdGhTdGF0ZVxyXG5cdFx0XHRcdFx0aXRlbXM9eyBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMgfVxyXG5cdFx0XHRcdFx0b25TYXZlSXRlbXM9eyBvblVwZGF0ZU9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0bmV3SXRlbT17IGFkZE5ld09wdGlvbiB9XHJcblx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbD17IF9fKCAnQWRkIE5ldyBPcHRpb24nICkgfVxyXG5cdFx0XHRcdFx0SXRlbUhlYWRpbmc9eyBpdGVtSGVhZGluZyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyAoIHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PSdtYW51YWxfbGFiZWwnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTGFiZWwnICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgbGFiZWw6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9J21hbnVhbF92YWx1ZSdcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9J21hbnVhbF9jYWxjdWxhdGUnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgY2FsY3VsYXRlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8Lz47XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQ8L1JlcGVhdGVyV2l0aFN0YXRlPlxyXG5cdFx0XHR9IH1cclxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cclxuXHQ8L1JlYWN0LkZyYWdtZW50PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbU1hbnVhbEZpZWxkczsiLCJpbXBvcnQgeyBnZXRTZWxlY3RTb3VyY2UgfSBmcm9tIFwiLi9zb3VyY2VzXCI7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIEZyb21Qb3N0VGVybXNGaWVsZHMoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGVkaXRQcm9wczogeyBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgZ2V0U2VsZWN0U291cmNlKCBwcm9wcyApIH1cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J3ZhbHVlX2Zyb21fa2V5J1xyXG5cdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbHVlX2Zyb21fa2V5IH1cclxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAndmFsdWVfZnJvbV9tZXRhJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgdmFsdWVfZnJvbV9rZXk6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleSdcclxuXHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXkgfVxyXG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5JyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0PC8+O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbVBvc3RUZXJtc0ZpZWxkczsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJy4uL2ZpZWxkLXdyYXBwZXInO1xyXG5cclxuY29uc3Qge1xyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFJhZGlvQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBERUxJTUlURVIgPSAnIC0gJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ZWRpdFByb3BzOiB7IGJsb2NrTmFtZSwgdW5pcUtleSB9LFxyXG5cdFx0c2NyaXB0RGF0YSxcclxuXHRcdGF0dHJpYnV0ZXNcclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGdldENoZWNrYm94ID0gKCBsYWJlbCwgaW5kZXggPSAxICkgPT4ge1xyXG5cdFx0cmV0dXJuIDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAgY2hlY2tib3hlcy13cmFwJyB9XHJcblx0XHRcdGtleT17IGBjaGVja19wbGFjZV9ob2xkZXJfYmxvY2tfJHsgbGFiZWwgKyBpbmRleCB9YCB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0fSB9XHJcblx0XHQvPjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldFNlbGVjdCA9ICggeyBvcHRpb25zLCBpbmRleCB9ICkgPT4ge1xyXG5cdFx0cmV0dXJuIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT17IGBzZWxlY3RfcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGF0dHJpYnV0ZXMubmFtZSArIGluZGV4IH1gIH1cclxuXHRcdFx0Ly9sYWJlbD17IGF0dHJpYnV0ZXMubGFiZWwgfVxyXG5cdFx0XHRvcHRpb25zPXsgb3B0aW9ucyB9XHJcblx0XHRcdC8vaGVscD17IGF0dHJpYnV0ZXMuZGVzYyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0UmFkaW8gPSAoIHsgb3B0aW9ucywgbGFiZWwsIGluZGV4IH0gKSA9PiB7XHJcblx0XHRyZXR1cm4gPFJhZGlvQ29udHJvbFxyXG5cdFx0XHRrZXk9eyBgcmFkaW9fcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGxhYmVsICsgaW5kZXggfWAgfVxyXG5cdFx0XHQvL2xhYmVsPXsgYXR0cmlidXRlcy5sYWJlbCB9XHJcblx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cclxuXHRcdFx0Ly9oZWxwPXsgYXR0cmlidXRlcy5kZXNjIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz47XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRQcm9wID0gKCBvZiwgcHJvcE5hbWUsIGlmRW1wdHkgPSAnJyApID0+IHtcclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBvZiAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG9mWyBwcm9wTmFtZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gb2ZbIHByb3BOYW1lIF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGlmRW1wdHk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0TGFiZWxQcm9wID0gb2YgPT4ge1xyXG5cdFx0cmV0dXJuIGdldFByb3AoIG9mLCAnbGFiZWwnICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ2V0RnVsbExhYmVsID0gKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZmllbGRfb3B0aW9uc19mcm9tLFxyXG5cdFx0XHRmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZSxcclxuXHRcdFx0ZmllbGRfb3B0aW9uc190YXgsXHJcblx0XHRcdGZpZWxkX29wdGlvbnNfa2V5LFxyXG5cdFx0XHRnZW5lcmF0b3JfZnVuY3Rpb24sXHJcblx0XHRcdGdlbmVyYXRvcl9maWVsZFxyXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0bGV0IGZ1bGxfbGFiZWwgPSBbXTtcclxuXHRcdGxldCB2YWx1ZSA9IFtdO1xyXG5cdFx0c3dpdGNoICggZmllbGRfb3B0aW9uc19mcm9tICkge1xyXG5cdFx0XHRjYXNlICdwb3N0cyc6XHJcblx0XHRcdFx0aWYgKCBmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZSApIHtcclxuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdldExhYmVsUHJvcCggc2NyaXB0RGF0YS5wb3N0X3R5cGVzX2xpc3QuZmluZChcclxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc19wb3N0X3R5cGVcclxuXHRcdFx0XHRcdCkgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3Rlcm1zJzpcclxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfdGF4ICkge1xyXG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCBzY3JpcHREYXRhLnRheG9ub21pZXNfbGlzdC5maW5kKFxyXG5cdFx0XHRcdFx0XHRvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBmaWVsZF9vcHRpb25zX3RheFxyXG5cdFx0XHRcdFx0KSApIClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdtZXRhX2ZpZWxkJzpcclxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfa2V5ICkge1xyXG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZmllbGRfb3B0aW9uc19rZXkgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdnZW5lcmF0ZSc6XHJcblx0XHRcdFx0aWYgKCBnZW5lcmF0b3JfZnVuY3Rpb24gKSB7XHJcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBnZXRMYWJlbFByb3AoIHNjcmlwdERhdGEuZ2VuZXJhdG9yc19saXN0LmZpbmQoXHJcblx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGdlbmVyYXRvcl9mdW5jdGlvblxyXG5cdFx0XHRcdFx0KSApIClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCBnZW5lcmF0b3JfZmllbGQgKSB7XHJcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBnZW5lcmF0b3JfZmllbGQgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZnVsbF9sYWJlbC5wdXNoKCBnZXRMYWJlbFByb3AoIHNjcmlwdERhdGEub3B0aW9uc19mcm9tLmZpbmQoIG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZpZWxkX29wdGlvbnNfZnJvbSApICkgKTtcclxuXHJcblx0XHRpZiAoIHZhbHVlLmxlbmd0aCApIHtcclxuXHRcdFx0ZnVsbF9sYWJlbC5wdXNoKCB2YWx1ZS5qb2luKCBERUxJTUlURVIgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmdWxsX2xhYmVsLmpvaW4oIERFTElNSVRFUiApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0TWFudWFsRmllbGQgPSAoIGxhYmVsID0gJycgKSA9PiB7XHJcblx0XHRpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ2NoZWNrYm94JyApICkge1xyXG5cdFx0XHRpZiAoIGxhYmVsICkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRDaGVja2JveCggbGFiZWwgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYXR0cmlidXRlcy5maWVsZF9vcHRpb25zLm1hcCggKCB7IGxhYmVsOiBjaGVja0xhYmVsIH0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBnZXRDaGVja2JveCggY2hlY2tMYWJlbCwgaW5kZXggKVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ3NlbGVjdCcgKSApIHtcclxuXHRcdFx0aWYgKCBsYWJlbCApIHtcclxuXHRcdFx0XHRyZXR1cm4gZ2V0U2VsZWN0KCB7XHJcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0b3B0aW9uczogWyB7IGxhYmVsIH0gXVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZ2V0U2VsZWN0KCB7XHJcblx0XHRcdFx0YXR0cmlidXRlcyxcclxuXHRcdFx0XHRvcHRpb25zOiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ3JhZGlvJyApICkge1xyXG5cdFx0XHRpZiAoIGxhYmVsICkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRSYWRpbygge1xyXG5cdFx0XHRcdFx0YXR0cmlidXRlcyxcclxuXHRcdFx0XHRcdG9wdGlvbnM6IFsgeyBsYWJlbCB9IF1cclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGdldFJhZGlvKCB7XHJcblx0XHRcdFx0YXR0cmlidXRlcyxcclxuXHRcdFx0XHRvcHRpb25zOiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxGaWVsZFdyYXBwZXJcclxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLWZpZWxkLXdyYXBwZXInIH1cclxuXHRcdHsgLi4ucHJvcHMgfVxyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkcy1ncm91cCcgfT5cclxuXHRcdFx0eyAoICdtYW51YWxfaW5wdXQnICE9PSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfZnJvbSB8fCAhIGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucy5sZW5ndGggKSAmJlxyXG5cdFx0XHRnZXRNYW51YWxGaWVsZCggZ2V0RnVsbExhYmVsKCBzY3JpcHREYXRhLCBhdHRyaWJ1dGVzICkgKSB8fCBudWxsXHJcblx0XHRcdH1cclxuXHRcdFx0eyAnbWFudWFsX2lucHV0JyA9PT0gYXR0cmlidXRlcy5maWVsZF9vcHRpb25zX2Zyb20gJiYgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zLmxlbmd0aCAmJlxyXG5cdFx0XHRnZXRNYW51YWxGaWVsZCgpIHx8IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0PC9kaXY+XHJcblx0PC9GaWVsZFdyYXBwZXI+O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBsaXN0RnJvbSB9IGZyb20gXCIuLi8uLi9ibG9ja3Mvc2VsZWN0LXJhZGlvLWNoZWtjLW9wdGlvbnNcIjtcclxuaW1wb3J0IEZyb21NYW51YWxGaWVsZHMgZnJvbSBcIi4vZnJvbS1tYW51YWwtZmllbGRzXCI7XHJcbmltcG9ydCBGcm9tUG9zdFRlcm1zRmllbGRzIGZyb20gXCIuL2Zyb20tcG9zdC10ZXJtcy1maWVsZHNcIjtcclxuaW1wb3J0IEZyb21HZW5lcmF0b3JzRmllbGRzIGZyb20gXCIuL2Zyb20tZ2VuZXJhdG9ycy1maWVsZHNcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFJhZGlvQ2hlY2soIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRjaGlsZHJlbiA9IFtdXHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcclxuXHJcblx0cmV0dXJuIGlzU2VsZWN0ZWQgJiYgPGRpdiBjbGFzc05hbWU9J2luc2lkZS1ibG9jay1vcHRpb25zJz5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT0nZmllbGRfb3B0aW9uc19mcm9tJ1xyXG5cdFx0XHRsYWJlbD0nRmlsbCBPcHRpb25zIEZyb20nXHJcblx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0dmFsdWU9eyBmaWVsZF9vcHRpb25zX2Zyb20gfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zX2Zyb206IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHRcdG9wdGlvbnM9eyBsaXN0RnJvbSB9XHJcblx0XHQvPlxyXG5cdFx0eyAnbWFudWFsX2lucHV0JyA9PT0gZmllbGRfb3B0aW9uc19mcm9tICYmIDxGcm9tTWFudWFsRmllbGRzXHJcblx0XHRcdGtleT0nZnJvbV9tYW51YWwnXHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyBbICdwb3N0cycsICd0ZXJtcycgXS5pbmNsdWRlcyggZmllbGRfb3B0aW9uc19mcm9tICkgJiYgPEZyb21Qb3N0VGVybXNGaWVsZHNcclxuXHRcdFx0a2V5PSdmb3JtX3Bvc3RzX3Rlcm1zJ1xyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+IH1cclxuXHRcdHsgJ21ldGFfZmllbGQnID09PSBmaWVsZF9vcHRpb25zX2Zyb20gJiYgPFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nZmllbGRfb3B0aW9uc19rZXknXHJcblx0XHRcdGxhYmVsPSdNZXRhIGZpZWxkIHRvIGdldCB2YWx1ZSBmcm9tJ1xyXG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc19rZXkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zX2tleTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdHsgJ2dlbmVyYXRlJyA9PT0gZmllbGRfb3B0aW9uc19mcm9tICYmIDxGcm9tR2VuZXJhdG9yc0ZpZWxkc1xyXG5cdFx0XHRrZXk9J2Zvcm1fZ2VuZXJhdG9ycydcclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPiB9XHJcblx0XHR7IGNoaWxkcmVuIH1cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFJhZGlvQ2hlY2s7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgbG9jYWxpemVEYXRhID0gd2luZG93LkpldEZvcm1TZWxlY3RGaWVsZERhdGE7XHJcblxyXG5cclxuY29uc3Qge1xyXG5cdFNlbGVjdENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qgc291cmNlcyA9IHtcclxuXHR0ZXJtczoge1xyXG5cdFx0bGFiZWw6IF9fKCAnVGF4b25vbXknICksXHJcblx0XHRhdHRyOiAnZmllbGRfb3B0aW9uc190YXgnLFxyXG5cdFx0b3B0aW9uczogbG9jYWxpemVEYXRhLnRheG9ub21pZXNfbGlzdFxyXG5cdH0sXHJcblx0cG9zdHM6IHtcclxuXHRcdGxhYmVsOiBfXyggJ1Bvc3QgVHlwZScgKSxcclxuXHRcdGF0dHI6ICdmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZScsXHJcblx0XHRvcHRpb25zOiBsb2NhbGl6ZURhdGEucG9zdF90eXBlc19saXN0XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZ2V0U2VsZWN0U291cmNlID0gKCBwcm9wcyApID0+IHtcclxuXHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xyXG5cdGNvbnN0IHsgZmllbGRfb3B0aW9uc19mcm9tIH0gPSBhdHRyaWJ1dGVzO1xyXG5cclxuXHRpZiAoICEgc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF0gJiYgISBzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRjb25zdCBzb3VyY2UgPSBzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXTtcclxuXHJcblx0cmV0dXJuIDxTZWxlY3RDb250cm9sXHJcblx0XHRsYWJlbD17IHNvdXJjZS5sYWJlbCB9XHJcblx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIHNvdXJjZS5hdHRyIF0gfVxyXG5cdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBzb3VyY2UuYXR0ciBdOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHR9IH1cclxuXHRcdG9wdGlvbnM9eyBzb3VyY2Uub3B0aW9ucyB9XHJcblx0Lz5cclxufTtcclxuXHJcbmV4cG9ydCB7IGdldFNlbGVjdFNvdXJjZSB9OyIsImltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi9hY3Rpb25zL2FjdGlvbi1tb2RhbFwiO1xyXG5cclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0RyxcclxuXHRQYXRoLFxyXG5cdENpcmNsZSxcclxuXHRSZWN0LFxyXG5cdFNWRyxcclxuXHRNb2RhbCxcclxuXHRCdXR0b24sXHJcblx0QnV0dG9uR3JvdXBcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gRmllbGRXaXRoUHJlc2V0KCB7XHJcblx0XHRcdFx0XHRcdFx0ICBjaGlsZHJlbiA9IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0ICBNb2RhbEVkaXRvcixcclxuXHRcdFx0XHRcdFx0XHQgIHRyaWdnZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHJcblx0Y29uc3QgWyBtb2RhbFN0YXRlLCBzZXRNb2RhbFN0YXRlIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlTW9kYWxTdGF0ZSA9ICgpID0+IHtcclxuXHRcdHNldE1vZGFsU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XHJcblx0fTtcclxuXHRjb25zdCBjbGFzc05hbWVzID0gWyAnamV0LWZvcm0tZHluYW1pYy1wcmVzZXRfX3RyaWdnZXInLCAuLi50cmlnZ2VyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZHluYW1pYy1wcmVzZXRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cclxuXHRcdFx0PjxTVkcgdmlld0JveD1cIjAgMCA1NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoXHJcblx0XHRcdFx0ZD1cIk00Mi42Mzk2IDI2LjQzNDdDMzcuODY4MiAyNy4zNDM2IDMyLjU2NjYgMjguMDI1MiAyNy4xODk0IDI4LjAyNTJDMjEuODEyMSAyOC4wMjUyIDE2LjQzNDggMjcuMzQzNiAxMS43MzkxIDI2LjQzNDdDNi45Njc3NCAyNS40NTAyIDMuMTgwOTMgMjMuODU5NyAwLjM3ODY4IDIxLjk2NjNMMC4zNzg2OCAyOC4wMjUyQzAuMzc4NjggMjkuNTM5OSAxLjU5MDQ2IDMxLjEzMDQgMy43ODY4MiAzMi40MTc5QzUuOTgzMTcgMzMuNzA1NCA5LjQ2NzA0IDM0LjkxNzIgMTMuNjMyNSAzNS41OTg4QzE3Ljc5OCAzNi4yODA1IDIyLjExNSAzNi44MTA2IDI3LjE4OTQgMzYuODEwNkMzMi4yNjM3IDM2LjgxMDYgMzYuNjU2NCAzNi41MDc3IDQwLjc0NjIgMzUuNTk4OEM0NC44MzU5IDM0LjY5IDQ4LjMxOTggMzMuNzA1NCA1MC41MTYyIDMyLjQxNzlDNTIuNzEyNSAzMS4xMzA0IDU0IDI5LjUzOTkgNTQgMjguMDI1Mkw1NCAyMS45NjYzQzUxLjEyMiAyMy44NTk3IDQ3LjMzNTIgMjUuNDUwMiA0Mi42Mzk2IDI2LjQzNDdaTTQyLjYzOTYgNTMuNTQ4NEMzNy44NjgyIDU0LjUzMjkgMzIuNTY2NiA1NS4xMzg4IDI3LjE4OTQgNTUuMTM4OEMyMS44MTIxIDU1LjEzODggMTYuNDM0OCA1NC41MzI5IDExLjczOTEgNTMuNTQ4NEM3LjA0MzQ4IDUyLjU2MzggMy4xODA5MyA1MS4wNDkxIDAuMzc4NjgyIDQ5LjE1NTZMMC4zNzg2ODIgNTUuMTM4OEMwLjM3ODY4MyA1Ni43MjkzIDEuNTkwNDYgNTguMzE5NyAzLjc4NjgyIDU5LjUzMTVDNi4zNjE4NiA2MC44MTkgOS40NjcwNSA2Mi4xMDY2IDEzLjYzMjUgNjIuNzEyNUMxNy43MjIzIDYzLjY5NyAyMi4xMTUgNjQgMjcuMTg5NCA2NEMzMi4yNjM3IDY0IDM2LjY1NjQgNjMuNjk3IDQwLjc0NjIgNjIuNzEyNUM0NC44MzU5IDYxLjgwMzYgNDguMzE5OCA2MC44MTkgNTAuNTE2MiA1OS41MzE1QzUyLjcxMjUgNTcuOTQxMSA1NCA1Ni43MjkzIDU0IDU0LjgzNTlMNTQgNDguODUyN0M1MS4xMjIgNTEuMDQ5MSA0Ny4zMzUyIDUyLjI2MDggNDIuNjM5NiA1My41NDg0Wk00Mi42Mzk2IDM5Ljk5MTVDMzcuODY4MiA0MC45MDA0IDMyLjU2NjYgNDEuNTgyIDI3LjE4OTQgNDEuNTgyQzIxLjgxMjEgNDEuNTgyIDE2LjQzNDggNDAuOTAwNCAxMS43MzkxIDM5Ljk5MTVDNi45Njc3NCAzOS4wMDcgMy4xODA5MyAzNy40OTIyIDAuMzc4NjgxIDM1LjU5ODhMMC4zNzg2ODEgNDEuNTgyQzAuMzc4NjgxIDQzLjE3MjUgMS41OTA0NiA0NC42ODcyIDMuNzg2ODIgNDUuOTc0N0M2LjM2MTg1IDQ3LjI2MjIgOS40NjcwNSA0OC40NzQgMTMuNjMyNSA0OS4xNTU2QzE3LjcyMjMgNTAuMDY0NSAyMi4xMTUgNTAuMzY3NCAyNy4xODk0IDUwLjM2NzRDMzIuMjYzNyA1MC4zNjc0IDM2LjY1NjQgNTAuMDY0NSA0MC43NDYyIDQ5LjE1NTZDNDQuODM1OSA0OC4xNzExIDQ4LjMxOTggNDcuMjYyMiA1MC41MTYyIDQ1Ljk3NDdDNTIuNzEyNSA0NC4zODQzIDU0IDQzLjE3MjUgNTQgNDEuNTgyTDU0IDM1LjU5ODhDNTEuMTIyIDM3LjQ5MjIgNDcuMzM1MiAzOS4wMDcgNDIuNjM5NiAzOS45OTE1Wk00MC40NDMyIDIuMTIzMzdDMzYuMzUzNSAxLjEzODc5IDMxLjg4NSAwLjgzNTg0OCAyNi44ODY0IDAuODM1ODQ5QzIxLjg4NzggMC44MzU4NDkgMTcuNDE5NCAxLjEzODc5IDEzLjI1MzkgMi4xMjMzN0M5LjA4ODM2IDMuMTA3OTQgNS42ODAyMiA0LjAxNjc4IDMuNDgzODcgNS4zMDQzQzEuMjg3NTEgNi41OTE4MSAtMy40NzgyZS0wNiA4LjEwNjU0IC0zLjMzOTE2ZS0wNiA5LjY5N0wtMi45NTUxM2UtMDYgMTQuMDg5N0MtMi44MTYwOWUtMDYgMTUuNjgwMiAxLjI4NzUyIDE3LjI3MDYgMy40ODM4NyAxOC41NTgyQzYuMDU4OTEgMTkuNzY5OSA5LjE2NDEgMjEuMDU3NSAxMy4yNTM5IDIxLjY2MzNDMTcuMzQzNiAyMi4yNjkyIDIxLjgxMjEgMjIuOTUwOSAyNi44ODY0IDIyLjk1MDlDMzEuOTYwNyAyMi45NTA5IDM2LjM1MzUgMjIuOTUwOSA0MC40NDMyIDIyLjM0NUM0NC41MzMgMjEuNzM5MSA0OC4wMTY5IDIwLjQ1MTYgNTAuMjEzMiAxOS4xNjRDNTIuNzEyNSAxNy41NzM2IDU0IDE1Ljk4MzEgNTQgMTQuMzkyN0w1NCA5Ljk5OTk1QzU0IDguNDA5NDggNTIuNzEyNSA2LjgxOTAyIDUwLjUxNjIgNS42MDcyNEM0OC4zMTk4IDQuMzk1NDYgNDQuNTMzIDIuNzI5MjYgNDAuNDQzMiAyLjEyMzM3WlwiXHJcblx0XHRcdFx0ZmlsbD1cIiM3RTg5OTNcIj48L1BhdGg+PC9TVkc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHR7IG1vZGFsU3RhdGUgJiYgKFxyXG5cdFx0XHQ8QWN0aW9uTW9kYWxcclxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNoYW5nZU1vZGFsU3RhdGUgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdFx0dGl0bGU9eyAnRWRpdCBQcmVzZXQnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgbW9kYWxQcm9wcyA9PiA8TW9kYWxFZGl0b3JcclxuXHRcdFx0XHRcdHsgLi4ubW9kYWxQcm9wcyB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L0FjdGlvbk1vZGFsPlxyXG5cdFx0KSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZFdpdGhQcmVzZXQ7IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWVsZFdyYXBwZXIoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB3cmFwQ2xhc3NlcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgdmFsdWVJZkVtcHR5TGFiZWwgPSAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIH0gKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0QmFzZUNvbnRyb2wsXHJcblx0fSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVNlbGVjdCxcclxuXHR9ID0gd3AuZGF0YTtcclxuXHJcblx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XHJcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0fSApO1xyXG5cclxuXHRjb25zdCBsYWJlbCA9IFRvb2xzLmdldExhYmVsKCBtZXRhLCBhdHRyaWJ1dGVzICk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8QmFzZUNvbnRyb2wga2V5PXsgdW5pcUtleSggJ3BsYWNlSG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdCBjbGFzc05hbWU9eyBgamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBqZXQtZm9ybS1idWlsZGVyLXJvdyAkeyB3cmFwQ2xhc3Nlcy5qb2luKCAnICcgKSB9YCB9PlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fbGFiZWwnIH0+XHJcblx0XHRcdFx0XHR7IGxhYmVsLm5hbWUgPyBsYWJlbC5uYW1lIDogdmFsdWVJZkVtcHR5TGFiZWwgfVxyXG5cdFx0XHRcdFx0eyBhdHRyaWJ1dGVzLnJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXF1aXJlZCcgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbC5tYXJrID8gbGFiZWwubWFyayA6ICcqJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XHJcblx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8QmFzZUNvbnRyb2wga2V5PXsgJ2N1c3RvbV9oZWxwX2Rlc2NyaXB0aW9uJyB9IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19kZXNjJyB9PlxyXG5cdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cclxuXHRcdFx0XHRcdCAgIHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwcHgnIH0gfT57IGF0dHJpYnV0ZXMuZGVzYyB9PC9zbWFsbD5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0KTtcclxufSIsImNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0UG9wb3ZlcixcclxuXHRQYW5lbEJvZHksXHJcblx0UGFuZWxSb3dcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gTWFjcm9zSW5zZXJ0ZXIoIHtcclxuXHRcdFx0XHRcdFx0XHQgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0IGZpZWxkcyxcclxuXHRcdFx0XHRcdFx0XHQgb25GaWVsZENsaWNrLFxyXG5cdFx0XHRcdFx0XHRcdCBjdXN0b21NYWNyb3MsXHJcblx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRjb25zdCBbIHNob3dQb3BvdmVyLCBzZXRQb3BvdmVyU3RhdGUgXSA9IHVzZVN0YXRlKCAoKSA9PiBmYWxzZSApO1xyXG5cclxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy1pbnNlcnRlclwiPlxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRpc1RlcnRpYXJ5XHJcblx0XHRcdGlzU21hbGxcclxuXHRcdFx0aWNvbj17IHNob3dQb3BvdmVyID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0bGFiZWw9eyAnSW5zZXJ0IG1hY3JvcycgfVxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy10cmlnZ2VyXCJcclxuXHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRzZXRQb3BvdmVyU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgKFxyXG5cdFx0XHQ8UG9wb3ZlclxyXG5cdFx0XHRcdHBvc2l0aW9uPXsgJ2JvdHRvbSBsZWZ0JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGZpZWxkcy5sZW5ndGggJiYgPFBhbmVsQm9keSB0aXRsZT17ICdGb3JtIEZpZWxkcycgfT5cclxuXHRcdFx0XHRcdHsgZmllbGRzLm1hcCggZmllbGQgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnZmllbGRfJyArIGZpZWxkLm5hbWUgfT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggZmllbGQubmFtZSApXHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQ+eyAnJScgKyBmaWVsZC5uYW1lICsgJyUnIH08L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxyXG5cdFx0XHRcdHsgY3VzdG9tTWFjcm9zICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnQ3VzdG9tIE1hY3JvcycgfT5cclxuXHRcdFx0XHRcdHsgY3VzdG9tTWFjcm9zLm1hcCggbWFjcm9zID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXsgJ21hY3Jvc18nICsgbWFjcm9zIH0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIG1hY3JvcyApXHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQ+eyAnJScgKyBtYWNyb3MgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdDwvUG9wb3Zlcj5cclxuXHRcdCkgfVxyXG5cdDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFjcm9zSW5zZXJ0ZXI7IiwiZXhwb3J0IGNvbnN0IHNhdmVHbG9iYWxDb21wb25lbnQgPSAoIG9iamVjdE5hbWUsIGluc3RhbmNlICkgPT4ge1xyXG5cdHdpbmRvd1sgb2JqZWN0TmFtZSBdID0ge1xyXG5cdFx0Li4ud2luZG93WyBvYmplY3ROYW1lIF0sXHJcblx0XHQuLi5pbnN0YW5jZVxyXG5cdH07XHJcbn0iLCJpbXBvcnQgUHJlc2V0UmVuZGVyIGZyb20gXCIuL3ByZXNldC1yZW5kZXJcIjtcclxuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vcHJlc2V0LWVkaXRvclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRwYXJzZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IHBvc2l0aW9uID0gJ2R5bmFtaWMnO1xyXG5cdGNvbnN0IFsgc3RhdGVWYWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZVZhbHVlKCB2YWx1ZSApICk7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xyXG5cdFx0c2V0VmFsdWUoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICkgKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGlmICggb25TYXZlUHJlc2V0ICkge1xyXG5cdFx0XHRcdG9uU2F2ZVByZXNldCggSlNPTi5zdHJpbmdpZnkoIHN0YXRlVmFsdWUgKSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPFByZXNldFJlbmRlci5HbG9iYWxGaWVsZFxyXG5cdFx0XHRrZXk9eyBgY3VycmVudF9maWVsZF8keyBkYXRhLm5hbWUgfV8keyBpbmRleCB9YCB9XHJcblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZSB9XHJcblx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRkYXRhPXsgZGF0YSB9XHJcblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxyXG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XHJcblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxyXG5cdFx0Lz4gKSB9XHJcblxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPFByZXNldFJlbmRlci5NYXBGaWVsZFxyXG5cdFx0XHRrZXk9eyBgY3VycmVudF9maWVsZF8keyBkYXRhLm5hbWUgfV8keyBpbmRleCB9YCB9XHJcblx0XHRcdGN1cnJlbnRTdGF0ZT17IHN0YXRlVmFsdWUgfVxyXG5cdFx0XHR2YWx1ZT17IHN0YXRlVmFsdWVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRkYXRhPXsgZGF0YSB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQoIER5bmFtaWNQcmVzZXQgKTsiLCJpbXBvcnQgUHJlc2V0UmVuZGVyIGZyb20gXCIuL3ByZXNldC1yZW5kZXJcIjtcclxuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vcHJlc2V0LWVkaXRvclwiO1xyXG5cclxuZnVuY3Rpb24gR2VuZXJhbFByZXNldCgge1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGF2YWlsYWJsZUZpZWxkcyxcclxuXHRcdFx0XHRcdFx0XHRpc01hcEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblx0Y29uc3QgcG9zaXRpb24gPSAnZ2VuZXJhbCc7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xyXG5cdFx0b25DaGFuZ2UoIHsgLi4udmFsdWUsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5nbG9iYWxfZmllbGRzLm1hcCggKCBkYXRhLCBpbmRleCApID0+IDxQcmVzZXRSZW5kZXIuR2xvYmFsRmllbGRcclxuXHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHZhbHVlLmZyb20gJiYgKFxyXG5cdFx0XHRhdmFpbGFibGVGaWVsZHMubWFwKCAoIGZpZWxkLCBpbmRleCApID0+IDxQcmVzZXRSZW5kZXIuQXZhaWxhYmxlTWFwRmllbGRcclxuXHRcdFx0XHRrZXk9eyBmaWVsZCArIGluZGV4IH1cclxuXHRcdFx0XHRmaWVsZHNNYXA9eyB2YWx1ZS5maWVsZHNfbWFwIH1cclxuXHRcdFx0XHRmaWVsZD17IGZpZWxkIH1cclxuXHRcdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0aXNNYXBGaWVsZFZpc2libGU9eyBpc01hcEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdC8+IClcclxuXHRcdCkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFByZXNldCggR2VuZXJhbFByZXNldCApOyIsIi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBQcmVzZXRSZW5kZXIgZnJvbSBcIi4vcHJlc2V0LXJlbmRlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0TW9kYWxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gd2l0aFByZXNldCggV3JhcHBlZENvbXBvbmVudCApIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gSmV0Rm9ybVByZXNldEVkaXRvciggcHJvcHMgKSB7XHJcblxyXG5cdFx0Y29uc3QgcGFyc2VWYWx1ZSA9ICgpID0+IHtcclxuXHRcdFx0bGV0IHZhbCA9IHt9O1xyXG5cclxuXHRcdFx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xyXG5cdFx0XHRcdHZhbCA9IHsgLi4ucHJvcHMudmFsdWUgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggcHJvcHMudmFsdWUgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dmFsID0gSlNPTi5wYXJzZSggcHJvcHMudmFsdWUgKTtcclxuXHRcdFx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWwgKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKCBleGNlcHRpb24gKSB7XHJcblx0XHRcdFx0XHR2YWwgPSB7fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dmFsLmpldF9wcmVzZXQgPSB0cnVlO1xyXG5cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc1Zpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblx0XHRcdHJldHVybiAoICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiA9PT0gZGF0YS5wb3NpdGlvbiApXHJcblx0XHRcdFx0fHwgISBkYXRhLnBvc2l0aW9uIHx8ICdxdWVyeV92YXInICE9PSBjdXJyZW50U3RhdGUuZnJvbSApICYmIGlzR2xvYmFsVmlzaWJsZSggY3VycmVudFN0YXRlLCBkYXRhICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGlzR2xvYmFsVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhICkgPT4ge1xyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XHJcblx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0KCAncG9zdCcgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUucG9zdF9mcm9tIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoICd1c2VyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS51c2VyX2Zyb20gKVxyXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tIClcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlzQ3VycmVudEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBwb3NpdGlvbiApID0+IHtcclxuXHJcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gIT09IGRhdGEucG9zaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiAhIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyAnY3VycmVudF9maWVsZF8nICsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlzTWFwRmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIGZpZWxkICkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiAhIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIGRhdGEucGFyZW50X2NvbmRpdGlvbiAmJiBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRpZiAoICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXAgfHwgISBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF1bIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdGlmICggISBjdXJyZW50U3RhdGUuZmllbGRzX21hcCB8fCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGV4Y2x1ZGVPcHRpb25zID0gKCBzZWxlY3RPcHRpb25zICkgPT4ge1xyXG5cdFx0XHRjb25zdCBvcHRpb25zID0gWyAuLi5zZWxlY3RPcHRpb25zIF07XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdGlmICggcHJvcHMuZXhjbHVkZVNvdXJjZXMgJiYgcHJvcHMuZXhjbHVkZVNvdXJjZXMuaW5jbHVkZXMoIG9wdGlvbi52YWx1ZSApICkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHRcdHJldHVybiBvcHRpb25zO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gPFdyYXBwZWRDb21wb25lbnRcclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdHBhcnNlVmFsdWU9eyBwYXJzZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0aXNNYXBGaWVsZFZpc2libGU9eyBpc01hcEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxyXG5cdFx0Lz47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0O1xyXG4iLCJjb25zdCB7XHJcblx0UGFuZWxDb2xvcixcclxuXHRJY29uQnV0dG9uLFxyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG5cdFJhbmdlQ29udHJvbCxcclxuXHRDaGVja2JveENvbnRyb2wsXHJcblx0RGlzYWJsZWQsXHJcblx0QmFzZUNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IFByZXNldFJlbmRlciA9IHtcclxuXHRHbG9iYWxGaWVsZDogZnVuY3Rpb24gKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0XHRleGNsdWRlT3B0aW9ucyA9IG9wdGlvbnMgPT4gb3B0aW9ucyxcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uXHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblxyXG5cdFx0c3dpdGNoICggZGF0YS50eXBlICkge1xyXG5cdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0cmV0dXJuICggaXNWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgcG9zaXRpb24gKSAmJlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMoIGRhdGEub3B0aW9ucyApIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9LFxyXG5cdEF2YWlsYWJsZU1hcEZpZWxkOiBmdW5jdGlvbiAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBmaWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgZmllbGQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBpc01hcEZpZWxkVmlzaWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRcdGxldCBjdXJyZW50VmFsID0gbnVsbDtcclxuXHJcblx0XHRpZiAoICEgZmllbGRzTWFwICkge1xyXG5cdFx0XHRmaWVsZHNNYXAgPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRjdXJyZW50VmFsID0gZmllbGRzTWFwWyBmaWVsZCBdO1xyXG5cclxuXHRcdGlmICggISBjdXJyZW50VmFsICkge1xyXG5cdFx0XHRjdXJyZW50VmFsID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgQXZhaWxhYmxlRmllbGRXcmFwcGVyID0gKCB7IGZpZWxkLCBuYW1lLCBpbmRleCwgZkluZGV4LCBjaGlsZHJlbiB9ICkgPT4gPD5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdqZXQtbGFiZWwtb3ZlcmZsb3cnPnsgZmllbGQgfTwvc3Bhbj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGtleT17IGZpZWxkICsgbmFtZSArIGluZGV4ICsgZkluZGV4IH1cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPjtcclxuXHJcblx0XHRyZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17IGBtYXBfZmllbGRfcHJlc2V0XyR7IGZpZWxkICsgaW5kZXggfWAgfT5cclxuXHJcblx0XHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcCggKCBkYXRhLCBmSW5kZXggKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHMgPSB7IGZpZWxkLCBuYW1lOiBkYXRhLm5hbWUsIGluZGV4LCBmSW5kZXggfTtcclxuXHJcblx0XHRcdFx0Y29uc3QgdW5pcUtleSA9ICdjb250cm9sXycgKyBmaWVsZCArIGRhdGEubmFtZSArIGluZGV4ICsgZkluZGV4O1xyXG5cclxuXHRcdFx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXHJcblx0XHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9IGtleT17IHVuaXFLZXkgfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL2xhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKSB9XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PjtcclxuXHR9LFxyXG5cclxuXHRNYXBGaWVsZDogZnVuY3Rpb24gKCB7XHJcblx0XHRcdFx0XHRcdFx0IGRhdGEsXHJcblx0XHRcdFx0XHRcdFx0IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdCBpbmRleCxcclxuXHRcdFx0XHRcdFx0XHQgY3VycmVudFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRcdCBvbkNoYW5nZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdCBpc0N1cnJlbnRGaWVsZFZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0IHBvc2l0aW9uID0gJ2dlbmVyYWwnXHJcblx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRcdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyAnY29udHJvbF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXNldFJlbmRlcjsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cCxcclxuXHRDYXJkLFxyXG5cdENhcmRCb2R5LFxyXG5cdENhcmRIZWFkZXIsXHJcblx0UGFuZWwsXHJcblx0UGFuZWxCb2R5LFxyXG5cdERyYWdnYWJsZSxcclxuXHRJY29uLFxyXG5cdERyb3Bab25lUHJvdmlkZXIsXHJcblx0RHJvcFpvbmUsXHJcblx0RGFzaGljb24sXHJcblx0VG9nZ2xlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlcGVhdGVyV2l0aFN0YXRlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdEl0ZW1IZWFkaW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0ZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckl0ZW1DbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRuZXdJdGVtLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWwgPSAnQWRkIE5ldycsXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0b25TYXZlSXRlbXMsXHJcblx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkFkZE5ld0l0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRvblJlbW92ZUl0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwU291cmNlOiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscFZpc2libGU6ICgpID0+IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5OiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1idWlsZGVyX19yZXBlYXRlci1jb21wb25lbnQnLCAuLi5yZXBlYXRlckNsYXNzZXMgXS5qb2luKCAnICcgKTtcclxuXHRjb25zdCBpdGVtQ2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtJywgLi4ucmVwZWF0ZXJJdGVtQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRjb25zdCBwYXJzZWRJdGVtcyA9ICgpID0+IHtcclxuXHRcdGlmICggaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0Y29uc3QgY2xvbmVJdGVtcyA9IFsgLi4uaXRlbXMgXTtcclxuXHJcblx0XHRcdGNsb25lSXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGNsb25lSXRlbXM7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFsge1xyXG5cdFx0XHRcdC4uLm5ld0l0ZW0sXHJcblx0XHRcdFx0X192aXNpYmxlOiB0cnVlLFxyXG5cdFx0XHR9IF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBbIGl0ZW1zRGF0YSwgc2V0SXRlbXNEYXRhIF0gPSB1c2VTdGF0ZSggKCkgPT4gcGFyc2VkSXRlbXMoKSApO1xyXG5cclxuXHRjb25zdCBbIGlzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XHJcblxyXG5cdGNvbnN0IGNoYW5nZUN1cnJlbnRJdGVtID0gKCB2YWx1ZVRvU2V0LCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdHByZXZbIGluZGV4IF0gPSB7XHJcblx0XHRcdFx0Li4ucHJldlsgaW5kZXggXSxcclxuXHRcdFx0XHQuLi52YWx1ZVRvU2V0LFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XHJcblx0XHRyZXR1cm4gY29uZmlybSggX18oIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGl0ZW0gJHsgaW5kZXggKyAxIH0/YCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbW92ZU9wdGlvbiA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdGlzU2FmZURlbGV0aW5nICYmICEgb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcclxuXHRcdFx0b25SZW1vdmVJdGVtICYmICEgb25SZW1vdmVJdGVtKCBpbmRleCwgaXRlbXNEYXRhIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgY2xvbmVQcmV2ID0gWyAuLi5wcmV2IF07XHJcblx0XHRcdGNsb25lUHJldi5zcGxpY2UoIGluZGV4LCAxICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gY2xvbmVQcmV2O1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgYWRkTmV3SXRlbSA9ICggdmFsdWUgKSA9PiB7XHJcblx0XHRpZiAoIG9uQWRkTmV3SXRlbSApIHtcclxuXHRcdFx0b25BZGROZXdJdGVtKCB2YWx1ZSwgaXRlbXNEYXRhICk7XHJcblx0XHR9XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4gWyAuLi5wcmV2LCB7XHJcblx0XHRcdC4uLnZhbHVlLFxyXG5cdFx0XHRfX3Zpc2libGU6IHRydWUsXHJcblx0XHR9IF0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsb25lSXRlbSA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRjb25zdCBbIGJlZm9yZSwgYWZ0ZXIgXSA9IFsgcHJldi5zbGljZSggMCwgaW5kZXggKyAxICksIHByZXYuc2xpY2UoIGluZGV4ICsgMSApIF07XHJcblx0XHRcdHJldHVybiBbIC4uLmJlZm9yZSwgbG9kYXNoLmFzc2lnbigge30sIHByZXZbIGluZGV4IF0gKSwgLi4uYWZ0ZXIgXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdmVSZXBlYXRlckl0ZW0gPSAoIHsgb2xkSW5kZXgsIG5ld0luZGV4IH0gKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRbIHByZXZbIG5ld0luZGV4IF0sIHByZXZbIG9sZEluZGV4IF0gXSA9IFsgcHJldlsgb2xkSW5kZXggXSwgcHJldlsgbmV3SW5kZXggXSBdO1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3ZlVXAgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0bW92ZVJlcGVhdGVySXRlbSggeyBvbGRJbmRleDogaW5kZXgsIG5ld0luZGV4OiBpbmRleCAtIDEgfSApO1xyXG5cdH1cclxuXHRjb25zdCBtb3ZlRG93biA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4ICsgMSB9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpc0Rpc2FibGVkRW5kID0gKCBpbmRleCApID0+IHtcclxuXHRcdHJldHVybiAhICggaW5kZXggPCBpdGVtc0RhdGEubGVuZ3RoIC0gMSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG9nZ2xlVmlzaWJsZSA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSA9ICEgKCBwcmV2WyBpbmRleCBdLl9fdmlzaWJsZSApO1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5wcmV2IF07XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRjb25zdCBjbG9uZUl0ZW1zID0gWyAuLi5pdGVtc0RhdGEgXTtcclxuXHJcblx0XHRcdGlmICggb25TYXZlSXRlbXMgKSB7XHJcblx0XHRcdFx0Y2xvbmVJdGVtcy5mb3JFYWNoKCAoIGl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGl0ZW1LZXkgaW4gaXRlbSApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCBpdGVtS2V5LnN0YXJ0c1dpdGgoICdfXycgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgY2xvbmVJdGVtc1sgaW5kZXggXVsgaXRlbUtleSBdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRvblNhdmVJdGVtcyggY2xvbmVJdGVtcyApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcclxuXHJcblx0Y29uc3QgZ2V0UmVwZWF0ZXJJdGVtSWQgPSBpbmRleCA9PiBgamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbV8keyBpbmRleCB9YDtcclxuXHJcblxyXG5cdGNvbnN0IFJlcGVhdGVySXRlbSA9ICggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApID0+IDxDYXJkXHJcblx0XHRpc0VsZXZhdGVkPXsgdHJ1ZSB9XHJcblx0XHRjbGFzc05hbWU9eyBpdGVtQ2xhc3NOYW1lcyB9XHJcblx0XHRrZXk9eyBnZXRSZXBlYXRlckl0ZW1JZCggaW5kZXggKSB9XHJcblx0XHRpZD17IGdldFJlcGVhdGVySXRlbUlkKCBpbmRleCApIH1cclxuXHQ+XHJcblx0XHQ8Q2FyZEhlYWRlciBjbGFzc05hbWU9eyAncmVwZWF0ZXJfX2l0ZW1fX2hlYWRlcicgfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW1fX2xlZnQtaGVhZGluZyc+XHJcblx0XHRcdFx0PEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9ucycgfT5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpY29uPXsgY3VycmVudEl0ZW0uX192aXNpYmxlID8gJ3Zpc2liaWxpdHknIDogJ2hpZGRlbicgfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdG9nZ2xlVmlzaWJsZSggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsgISBCb29sZWFuKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy11cC1hbHQyJyB9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlVXAoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWRFbmQoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LWRvd24tYWx0MicgfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZURvd24oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtLXRpdGxlJyB9PlxyXG5cdFx0XHRcdFx0XHRcdHsgSXRlbUhlYWRpbmcgJiYgPEl0ZW1IZWFkaW5nXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50SXRlbT17IGN1cnJlbnRJdGVtIH1cclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW09eyBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHR7ICEgSXRlbUhlYWRpbmcgJiYgYCMkeyBpbmRleCArIDEgfWAgfVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8QnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBjbG9uZUl0ZW0oIGluZGV4ICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oICdDbG9uZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHJlbW92ZU9wdGlvbiggaW5kZXggKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ0RlbGV0ZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdDwvQ2FyZEhlYWRlcj5cclxuXHRcdHsgY3VycmVudEl0ZW0uX192aXNpYmxlICYmIDxDYXJkQm9keVxyXG5cdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbV9fY29udGVudCcgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuICYmIDxSZWFjdC5GcmFnbWVudFxyXG5cdFx0XHRcdGtleT17IGByZXBlYXRlci1jb21wb25lbnRfX2l0ZW1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4oIHtcclxuXHRcdFx0XHRcdGN1cnJlbnRJdGVtLFxyXG5cdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW06IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIGRhdGEsIGluZGV4IClcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHR7ICEgY2hpbGRyZW4gJiYgJ1NldCB1cCB5b3VyIFJlcGVhdGVyIFRlbXBsYXRlLCBwbGVhc2UuJyB9XHJcblx0XHQ8L0NhcmRCb2R5PiB9XHJcblx0PC9DYXJkPjtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0aGVscFNvdXJjZSxcclxuXHRcdGhlbHBWaXNpYmxlLFxyXG5cdFx0aGVscEtleSxcclxuXHR9ID0gaGVscDtcclxuXHJcblx0Y29uc3QgaXNWaXNpYmxlSGVscCA9IGhlbHBWaXNpYmxlKCBpdGVtc0RhdGEgKSAmJiBoZWxwU291cmNlICYmIGhlbHBTb3VyY2VbIGhlbHBLZXkgXTtcclxuXHJcblx0cmV0dXJuIDxkaXZcclxuXHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIH1cclxuXHQ+XHJcblx0XHR7IGlzVmlzaWJsZUhlbHAgJiYgPHA+eyBoZWxwU291cmNlWyBoZWxwS2V5IF0ubGFiZWwgfTwvcD4gfVxyXG5cclxuXHRcdHsgMCA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgaXNTYWZlRGVsZXRpbmcgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XHJcblx0XHQvPiB9XHJcblx0XHR7IGl0ZW1zRGF0YS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gUmVwZWF0ZXJJdGVtKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICk7XHJcblx0XHR9ICkgfVxyXG5cdFx0eyAxIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyJ1xyXG5cdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cclxuXHRcdC8+IH1cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0b25DbGljaz17ICgpID0+IGFkZE5ld0l0ZW0oIG5ld0l0ZW0gKSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgYWRkTmV3QnV0dG9uTGFiZWwgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlcldpdGhTdGF0ZTsiLCJpbXBvcnQgeyBzYXZlR2xvYmFsQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3JhcHBlclJlcXVpcmVkQ29udHJvbCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsS2V5ID0gJ2xhYmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZEtleSA9ICdyZXF1aXJlZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHRjb25zdCBbIG5hbWUsIGRhdGEgXSA9IGZpZWxkO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3cgZmllbGRzLW1hcC1jb250cm9sXCJcclxuXHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgbmFtZSB9XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZpZWxkLW1hcF9fcm93LWxhYmVsXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2ZpZWxkcy1tYXBfX2xhYmVsJyB9PlxyXG5cdFx0XHRcdFx0eyAoIGRhdGEuaGFzT3duUHJvcGVydHkoIGxhYmVsS2V5ICkgJiYgZGF0YVsgbGFiZWxLZXkgXSApICYmIGRhdGFbIGxhYmVsS2V5IF0gfVxyXG5cdFx0XHRcdFx0eyAoICEgZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKSApICYmIGRhdGEgfVxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggcmVxdWlyZWRLZXkgKSAmJiBkYXRhWyByZXF1aXJlZEtleSBdICkgJiZcclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fcmVxdWlyZWQnIH0+ICo8L3NwYW4+IH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5zYXZlR2xvYmFsQ29tcG9uZW50KCAnSmV0RkJDb21wb25lbnRzJywgeyBXcmFwcGVyUmVxdWlyZWRDb250cm9sIH0gKTsiLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEludGVncmF0aW9uQ29tcG9uZW50IGZyb20gXCIuL2ludGVncmF0aW9uLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdEJ1dHRvbixcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ2FjdGl2ZV9jYW1wYWlnbicsIGNsYXNzIEFjdGl2ZUNhbXBhaWduQWN0aW9uIGV4dGVuZHMgSW50ZWdyYXRpb25Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLnZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhID0gdGhpcy52YWxpZGF0ZUFjdGl2ZUNhbXBhaWduRGF0YS5iaW5kKCB0aGlzICk7XHJcblx0XHR0aGlzLmdldEFjdGl2ZUNhbXBhaWduRGF0YSA9IHRoaXMuZ2V0QWN0aXZlQ2FtcGFpZ25EYXRhLmJpbmQoIHRoaXMgKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2xvYWRpbmcnIF0gfSApO1xyXG5cdFx0dGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEoIHRydWUgKTtcclxuXHR9XHJcblxyXG5cdGdldEFjdGl2ZUNhbXBhaWduRGF0YSggaXNWYWxpZGF0ZSA9IGZhbHNlICkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdGxpc3RzID0gW10sXHJcblx0XHRcdGVuZHBvaW50ID0gJy9hZG1pbi9hcGkucGhwP2FwaV9hY3Rpb249bGlzdF9saXN0JztcclxuXHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBhcGlfdXJsLCBhcGlfa2V5IH0gPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGNvbnN0IHVybCA9IGFwaV91cmwgKyBlbmRwb2ludCArICcmYXBpX2tleT0nICsgYXBpX2tleSArICcmaWRzPWFsbCZhcGlfb3V0cHV0PWpzb24nO1xyXG5cclxuXHRcdGpRdWVyeS5nZXRKU09OKCB1cmwgKVxyXG5cdFx0LnN1Y2Nlc3MoIGZ1bmN0aW9uICggZGF0YSApIHtcclxuXHRcdFx0aWYgKCB1bmRlZmluZWQgIT09IGRhdGEucmVzdWx0X2NvZGUgJiYgZGF0YS5yZXN1bHRfY29kZSApIHtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIHByb3AgaW4gZGF0YSApIHtcclxuXHRcdFx0XHRcdGlmICggdW5kZWZpbmVkID09PSBkYXRhWyBwcm9wIF0uaWQgKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGlzdHMucHVzaCgge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogZGF0YVsgcHJvcCBdLmlkLFxyXG5cdFx0XHRcdFx0XHRsYWJlbDogZGF0YVsgcHJvcCBdLm5hbWVcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBsaXN0cywgJ2RhdGEnICk7XHJcblx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIHRydWUsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdpcy12YWxpZCcgXSB9ICk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLWludmFsaWQnIF0gfSApO1xyXG5cdFx0XHR9XHJcblx0XHR9IClcclxuXHRcdC5lcnJvciggZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtaW52YWxpZCcgXSB9ICk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRnZXRMaXN0cygpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MuZGF0YSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYWRkUGxhY2Vob2xkZXJGb3JTZWxlY3QoIHNldHRpbmdzLmRhdGEgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cclxuXHRmb3JtYXRFbnRyaWVzQXJyYXkoIGVudHJpZXMgPSBbXSwgaXNOZWVkUGxhY2Vob2xkZXIgPSB0cnVlICkge1xyXG5cdFx0Y29uc3QgcGxhY2Vob2xkZXIgPSB7XHJcblx0XHRcdGxhYmVsOiAnLS0nXHJcblx0XHR9O1xyXG5cdFx0aWYgKCAhIGVudHJpZXMgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvcHRpb25zID0gT2JqZWN0LmVudHJpZXMoIGVudHJpZXMgKS5tYXAoICggWyB2YWx1ZSwgbGFiZWwgXSApID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIGlzTmVlZFBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciwgLi4ub3B0aW9ucyBdIDogb3B0aW9ucztcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPFJlYWN0LkZyYWdtZW50IGtleT1cImFjdGl2ZWNhbXBhaWduXCI+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdhcGlfZGF0YScgKSB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC13aXRoLWJ1dHRvbiB3aXRoLXdyYXAnXHJcblx0XHRcdFx0a2V5PXsgJ2FjdGl2ZWNhbXBhaWduX2lucHV0X2tleScgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2FwaV91cmwnXHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmFwaV91cmwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGxhYmVsKCAnYXBpX3VybCcgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnYXBpX3VybCcgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nYXBpX2tleSdcclxuXHRcdFx0XHRcdGhlbHA9eyBsYWJlbCggJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgKCBzZXR0aW5ncy5hcGlfa2V5ICYmIHNldHRpbmdzLmFwaV91cmwgKSAmJiA8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy52YWxpZGF0ZUFjdGl2ZUNhbXBhaWduRGF0YSB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyB0aGlzLnN0YXRlLmNsYXNzTmFtZS5qb2luKCAnICcgKSArICcgamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxyXG5cdFx0XHRcdFx0eyBsYWJlbCggJ3ZhbGlkYXRlX2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPiB9XHJcblx0XHRcdFx0PGRpdi8+XHJcblx0XHRcdFx0PGRpdj57IGhlbHAoICdhcGlfa2V5X2xpbmtfcHJlZml4JyApIH0gPGFcclxuXHRcdFx0XHRcdGhyZWY9eyBoZWxwKCAnYXBpX2tleV9saW5rJyApIH0+eyBoZWxwKCAnYXBpX2tleV9saW5rX3N1ZmZpeCcgKSB9PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHR7IHNldHRpbmdzLmlzVmFsaWRBUEkgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdhY3RpdmVjYW1wYWlnbl9pbnB1dF9rZXknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXdpdGgtYnV0dG9uJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX3NlbGVjdF9saXN0cydcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MubGlzdF9pZCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdsaXN0X2lkJyApIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZ2V0TGlzdHMoKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRrZXk9eyAndXBkYXRlX2xpc3RfaWRzJyB9XHJcblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAndXBkYXRlX2xpc3RfaWRzJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX3RhZ3MnXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndGFncycgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnRhZ3MgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAoICd0YWdzJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdFx0a2V5PSdhY3RpdmVjYW1wYWlnbl9maWVsZHNfbWFwJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxyXG5cdFx0XHRcdFx0XHR7IE9iamVjdC5lbnRyaWVzKCBzb3VyY2UuYWN0aXZlY2FtcGFpZ25fZmllbGRzICkubWFwKFxyXG5cdFx0XHRcdFx0XHRcdCggWyBmaWVsZE5hbWUsIGZpZWxkTGFiZWwgXSwgaW5kZXggKSA9PiA8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgZmllbGROYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZE5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgZmllbGRMYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkRGVmYXVsdCggZmllbGROYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHRoaXMub25DaGFuZ2VGaWVsZE1hcCggdmFsdWUsIGZpZWxkTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZm9ybUZpZWxkc0xpc3QgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKSB9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VBY3Rpb25Db21wb25lbnQgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGFkZFBsYWNlaG9sZGVyRm9yU2VsZWN0KCBhcnJheSwgbGFiZWwgPSAnLS0nICkge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0eyBsYWJlbCB9LFxyXG5cdFx0XHQuLi5hcnJheVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlU2V0dGluZyggdmFsdWUsIGtleSApIHtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRnZXRGaWVsZERlZmF1bHQoIG5hbWUgKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnZmllbGRzX21hcCc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoXHJcblx0XHRcdHsgbmFtZSwgc291cmNlIH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZE1ldGEoIG5hbWUgKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnbWV0YV9maWVsZHNfbWFwJztcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXRGaWVsZEJ5TmFtZShcclxuXHRcdFx0eyBuYW1lLCBzb3VyY2UgfVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEZpZWxkQnlOYW1lKCB7IHNvdXJjZSwgbmFtZSB9ICkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VGaWVsZE1hcCggdmFsdWUsIG5hbWVGaWVsZCApIHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdmaWVsZHNfbWFwJztcclxuXHJcblx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcclxuXHRcdFx0eyB2YWx1ZSwgbmFtZUZpZWxkLCBzb3VyY2UgfVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRvbkNoYW5nZU1ldGFGaWVsZE1hcCggdmFsdWUsIG5hbWVGaWVsZCApIHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXRhX2ZpZWxkc19tYXAnO1xyXG5cclxuXHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxyXG5cdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cclxuXHRjaGFuZ2VGaWVsZHNNYXAoIHsgc291cmNlLCBuYW1lRmllbGQsIHZhbHVlIH0gKSB7XHJcblx0XHRjb25zdCBmaWVsZHNNYXAgPSBPYmplY3QuYXNzaWduKFxyXG5cdFx0XHR7fSxcclxuXHRcdFx0dGhpcy5wcm9wcy5zZXR0aW5nc1sgc291cmNlIF0sXHJcblx0XHRcdHsgWyBuYW1lRmllbGQgXTogdmFsdWUgfVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnRoaXMucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFsgc291cmNlIF06IGZpZWxkc01hcFxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdjYWxsX2hvb2snLCBmdW5jdGlvbiBDYWxsSG9va0FjdGlvbiggeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSApIHtcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0b25DaGFuZ2UoIHtcclxuXHRcdFx0Li4uc2V0dGluZ3MsXHJcblx0XHRcdFsga2V5IF06IHZhbHVlXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gKCA8ZGl2IGtleT1cImNhbGxfaG9va1wiPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT0naG9va19uYW1lJ1xyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnaG9va19uYW1lJyApIH1cclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5ob29rX25hbWUgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdob29rX25hbWUnIClcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdGtleT0naGVscF9tZXNzYWdlJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LWNhbGwtaG9vay1pbnN0cnVjdGlvbic+XHJcblx0XHRcdFx0eyBfXyggJ0NhbGxlZCBob29rIG5hbWVzOicgKSB9XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2N1c3RvbS1hY3Rpb24veyBzZXR0aW5ncy5ob29rX25hbWUgfTwvY29kZT4gLSB7IF9fKCAnV1AgYWN0aW9uLiBQZXJmb3JtIGEgaG9vayB3aXRob3V0IGFuIGFiaWxpdHkgdG8gdmFsaWRhdGUgZm9ybSwnICkgfVxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGNvZGU+amV0LWZvcm0tYnVpbGRlci9jdXN0b20tZmlsdGVyL3sgc2V0dGluZ3MuaG9va19uYW1lIH08L2NvZGU+IC0geyBfXyggJ1dQIGZpbHRlci4gUGVyZm9ybSBhIGhvb2sgd2l0aCBhbiBhYmlsaXR5IHRvIHZhbGlkYXRlIGZvcm0uIEFsbG93cyB0byByZXR1cm4gZXJyb3IgbWVzc2FnZS4nICkgfVxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdHsgX18oICdIb29rIGFyZ3VtZW50czonICkgfVxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdDxsaT48Y29kZT4kcmVzdWx0PC9jb2RlPiAtIHsgX18oICdvbmx5IGZvciBXUCBmaWx0ZXIuIEhvb2sgZXhlY3V0aW9uIHJlc3VsdCwnICkgfTwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+PGNvZGU+JHJlcXVlc3Q8L2NvZGU+IC0geyBfXyggJ2FycmF5IHdpdGggc3VibWl0dGVkIGZvcm0gZGF0YSwnICkgfTwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxjb2RlPiRhY3Rpb25faGFuZGxlcjwvY29kZT4gLSB7IF9fKCAnYWN0aW9uIGhhbmRsZXIgb2JqZWN0LCBhbGxvd3MgdG8gbWFuYWdlIGFjdGlvbnMgZGF0YSBhbmQgdG8gdGhyb3dzIGVycm9yIHN0YXR1czonICkgfVxyXG5cdFx0XHRcdFx0XHQ8Y29kZT50aHJvdyBuZXcgQWN0aW9uX0V4Y2VwdGlvbiggJ2ZhaWxlZCcgKTwvY29kZT5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cclxuXHQ8L2Rpdj4gKTtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn0gKTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAnY2FsbF93ZWJob29rJywgY2xhc3MgQ2FsbFdlYkhvb2tBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgbGFiZWwsIG9uQ2hhbmdlU2V0dGluZyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J3dlYmhvb2tfdXJsJ1xyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnd2ViaG9va191cmwnICkgfVxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLndlYmhvb2tfdXJsIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd3ZWJob29rX3VybCcgKSB9XHJcblx0XHQvPjtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBJbnRlZ3JhdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9pbnRlZ3JhdGlvbi1jb21wb25lbnRcIjtcclxuaW1wb3J0IFdyYXBwZXJSZXF1aXJlZENvbnRyb2wgZnJvbSBcIi4uL2NvbXBvbmVudHMvd3JhcHBlci1yZXF1aXJlZC1jb250cm9sXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ2dldHJlc3BvbnNlJywgY2xhc3MgR2V0UmVzcG9uc2VBY3Rpb24gZXh0ZW5kcyBJbnRlZ3JhdGlvbkNvbXBvbmVudCB7XHJcblxyXG5cdGdldEZpZWxkcygpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MuZGF0YS5maWVsZHMgKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QuZW50cmllcyggc2V0dGluZ3MuZGF0YS5maWVsZHMgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGdldExpc3RzKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhLmxpc3RzICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXRFbnRyaWVzQXJyYXkoIHNldHRpbmdzLmRhdGEubGlzdHMgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGZvcm1hdEVudHJpZXNBcnJheSggZW50cmllcyA9IFtdLCBpc05lZWRQbGFjZWhvbGRlciA9IHRydWUgKSB7XHJcblx0XHRjb25zdCBwbGFjZWhvbGRlciA9IHtcclxuXHRcdFx0bGFiZWw6ICctLSdcclxuXHRcdH07XHJcblx0XHRpZiAoICEgZW50cmllcyApIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyB2YWx1ZSwgbGFiZWwgfTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gaXNOZWVkUGxhY2Vob2xkZXIgPyBbIHBsYWNlaG9sZGVyLCAuLi5vcHRpb25zIF0gOiBvcHRpb25zO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkcygpO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQga2V5PVwiZ2V0cmVzcG9uc2VcIj5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0a2V5PXsgJ2dldHJlc3BvbnNlX2lucHV0X2tleScgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0LXdpdGgtYnV0dG9uXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGtleT17ICd2YWxpZGF0ZV9hcGlfa2V5JyB9XHJcblx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLnZhbGlkYXRlQVBJS2V5IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IHRoaXMuc3RhdGUuY2xhc3NOYW1lLmpvaW4oICcgJyApICsgJyBqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0XHRcdFx0XHR7IGxhYmVsKCAndmFsaWRhdGVfYXBpX2tleScgKSB9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxkaXYvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luLWJvdHRvbS0tc21hbGwnPnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxyXG5cdFx0XHRcdGhyZWY9eyBoZWxwKCAnYXBpX2tleV9saW5rJyApIH0+eyBoZWxwKCAnYXBpX2tleV9saW5rX3N1ZmZpeCcgKSB9PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBzZXR0aW5ncy5pc1ZhbGlkQVBJICYmIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nZ2V0cmVzcG9uc2Vfc2VsZWN0X2xpc3RzJ1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC13aXRoLWJ1dHRvbidcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2xpc3RfaWQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cclxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmdldEFwaURhdGEgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAndXBkYXRlX2xpc3RfaWRzJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZ2V0cmVzcG9uc2VfZGF5X29mX2N5Y2xlJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdkYXlfb2ZfY3ljbGUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdkYXlfb2ZfY3ljbGUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZGF5X29mX2N5Y2xlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIE51bWJlciggbmV3VmFsICksICdkYXlfb2ZfY3ljbGUnICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9maWVsZHNfbWFwJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0XHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGROYW1lLCBmaWVsZERhdGEgXSwgaW5kZXggKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkTmFtZSwgZmllbGREYXRhIF0gfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZE5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZERlZmF1bHQoIGZpZWxkTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBmaWVsZE5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPjtcclxuXHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gJy4uL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwJztcclxuaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBKZXREZWZhdWx0TWV0YUNvbnRyb2wgZnJvbSBcIi4uL2Jsb2Nrcy9jb250cm9scy9kZWZhdWx0LW1ldGFcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRQb3BvdmVyLFxyXG5cdFBhbmVsQm9keSxcclxuXHRQYW5lbFJvdyxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdpbnNlcnRfcG9zdCcsIGNsYXNzIEluc2VydFBvc3RBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGdldEZpZWxkTWFwKCBuYW1lICkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MgJiYgc2V0dGluZ3MuZmllbGRzX21hcCAmJiBzZXR0aW5ncy5maWVsZHNfbWFwWyBuYW1lIF0gKSB7XHJcblx0XHRcdHJldHVybiBzZXR0aW5ncy5maWVsZHNfbWFwWyBuYW1lIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRpc1JlbmRlckhlbHAoIGZpZWxkcyApIHtcclxuXHRcdGNvbnN0IHsgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybiBoZWxwKCAnZmllbGRzX21hcCcgKSAmJiAhIGZpZWxkcy5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRvbkNoYW5nZSgge1xyXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHRcdFsga2V5IF06IHZhbHVlXHJcblx0XHRcdH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPGRpdiBrZXk9XCJpbnNlcnRfcG9zdFwiPlxyXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGtleT1cInBvc3RfdHlwZVwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF90eXBlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBvc3RUeXBlcyB9XHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3Bvc3RfdHlwZScgKSB9XHJcblx0XHRcdFx0aGVscD17IGhlbHAoICdwb3N0X3R5cGUnICkgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUsICdwb3N0X3R5cGUnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGtleT1cInBvc3Rfc3RhdHVzXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5wb3N0X3N0YXR1cyB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wb3N0U3RhdHVzZXMgfVxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdwb3N0X3N0YXR1cycgKSB9XHJcblx0XHRcdFx0aGVscD17IGhlbHAoICdwb3N0X3N0YXR1cycgKSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ3Bvc3Rfc3RhdHVzJyApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdGtleT1cImZpZWxkc19tYXBcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyB0aGlzLmlzUmVuZGVySGVscCggZm9ybUZpZWxkcyApICYmXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9faGVscFwiPlxyXG5cdFx0XHRcdFx0eyBoZWxwKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX2xpc3RcIj5cclxuXHRcdFx0XHRcdHsgZm9ybUZpZWxkcyAmJiBmb3JtRmllbGRzLm1hcCggKCBmaWVsZCwgaW5kZXggKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZERhdGEgPSB0aGlzLmdldEZpZWxkTWFwKCBmaWVsZC5uYW1lICk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1maWVsZHMtbWFwX19yb3dcIlxyXG5cdFx0XHRcdFx0XHRcdGtleT17ICdmaWVsZF9tYXBfJyArIGZpZWxkLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8SmV0RmllbGRzTWFwQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGQubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVmFsdWU9eyBmaWVsZERhdGEgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGROYW1lPXsgZmllbGQubmFtZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkc01hcD17IHNldHRpbmdzLmZpZWxkc19tYXAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dGF4b25vbWllc0xpc3Q9eyBzb3VyY2UudGF4b25vbWllcyB9XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZFR5cGVzPXsgc291cmNlLmZpZWxkc01hcE9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZGVmYXVsdF9tZXRhJyApIH1cclxuXHRcdFx0XHRrZXk9XCJkZWZhdWx0X21ldGFcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEpldERlZmF1bHRNZXRhQ29udHJvbFxyXG5cdFx0XHRcdFx0ZGVmYXVsdE1ldGE9eyBzZXR0aW5ncy5kZWZhdWx0X21ldGEgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ2RlZmF1bHRfbWV0YScgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDwvZGl2PiApO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxufSApO1xyXG4iLCJpbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9iYXNlLWFjdGlvbi1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVncmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUFjdGlvbkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMudmFsaWRhdGVBUElLZXkgPSB0aGlzLnZhbGlkYXRlQVBJS2V5LmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMuZ2V0QXBpRGF0YSA9IHRoaXMuZ2V0QXBpRGF0YS5iaW5kKCB0aGlzICk7XHJcblx0XHR0aGlzLmdldExpc3RzID0gdGhpcy5nZXRMaXN0cy5iaW5kKCB0aGlzICk7XHJcblxyXG5cdFx0dGhpcy5mb3JtRmllbGRzTGlzdCA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0Y2xhc3NOYW1lOiBbIHRoaXMuZ2V0Y2xhc3NOYW1lVmFsaWRhdGVCdXR0b24oKSBdLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlQVBJS2V5KCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2xvYWRpbmcnIF0gfSApO1xyXG5cclxuXHRcdHRoaXMuZ2V0QXBpRGF0YSgpO1xyXG5cdH1cclxuXHJcblx0Z2V0QXBpRGF0YSggZXZlbnQgKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcztcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gc2VsZi5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoICEgc2V0dGluZ3MuYXBpX2tleSApIHtcclxuXHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIG51bGwsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogW10gfSApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0alF1ZXJ5LmFqYXgoIHtcclxuXHRcdFx0dXJsOiBhamF4dXJsLFxyXG5cdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHQnYWN0aW9uJzogdGhpcy5kYXRhLmFjdGlvbixcclxuXHRcdFx0XHQnYXBpX2tleSc6IHNldHRpbmdzLmFwaV9rZXlcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKCByZXNwb25zZSApIHtcclxuXHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggdHJ1ZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggcmVzcG9uc2UuZGF0YSwgJ2RhdGEnICk7XHJcblxyXG5cdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLXZhbGlkJyBdIH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLWludmFsaWQnIF0gfSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdpcy1pbnZhbGlkJyBdIH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHJcblx0fVxyXG5cclxuXHRnZXRjbGFzc05hbWVWYWxpZGF0ZUJ1dHRvbigpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHRydWUgPT09IHNldHRpbmdzLmlzVmFsaWRBUEkgKSB7XHJcblx0XHRcdHJldHVybiAnaXMtdmFsaWQnO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBzZXR0aW5ncy5pc1ZhbGlkQVBJICkge1xyXG5cdFx0XHRyZXR1cm4gJ2lzLWludmFsaWQnO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBJbnRlZ3JhdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9pbnRlZ3JhdGlvbi1jb21wb25lbnRcIjtcclxuaW1wb3J0IFdyYXBwZXJSZXF1aXJlZENvbnRyb2wgZnJvbSBcIi4uL2NvbXBvbmVudHMvd3JhcHBlci1yZXF1aXJlZC1jb250cm9sXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgQWN0aW9uRmllbGRzTWFwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tZmllbGRzLW1hcFwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ21haWxjaGltcCcsIGNsYXNzIE1haWxDaGltcEFjdGlvbiBleHRlbmRzIEludGVncmF0aW9uQ29tcG9uZW50IHtcclxuXHJcblx0Z2V0RmllbGRzKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmxpc3RfaWRcclxuXHRcdFx0JiYgc2V0dGluZ3MuZGF0YVxyXG5cdFx0XHQmJiBzZXR0aW5ncy5kYXRhLmZpZWxkc1xyXG5cdFx0XHQmJiBzZXR0aW5ncy5kYXRhLmZpZWxkc1sgc2V0dGluZ3MubGlzdF9pZCBdICkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoIHNldHRpbmdzLmRhdGEuZmllbGRzWyBzZXR0aW5ncy5saXN0X2lkIF0gKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGdldExpc3RzKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhLmxpc3RzICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXRFbnRyaWVzQXJyYXkoIHNldHRpbmdzLmRhdGEubGlzdHMgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGdldEdyb3VwcygpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmRhdGFcclxuXHRcdFx0JiYgc2V0dGluZ3MuZGF0YS5ncm91cHNcclxuXHRcdFx0JiYgc2V0dGluZ3MubGlzdF9pZCApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0RW50cmllc0FycmF5KCBzZXR0aW5ncy5kYXRhLmdyb3Vwc1sgc2V0dGluZ3MubGlzdF9pZCBdICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRmb3JtYXRFbnRyaWVzQXJyYXkoIGVudHJpZXMgPSBbXSApIHtcclxuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0ge1xyXG5cdFx0XHRsYWJlbDogJy0tJ1xyXG5cdFx0fTtcclxuXHRcdGlmICggISBlbnRyaWVzICkge1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKCBlbnRyaWVzICkubWFwKCAoIFsgdmFsdWUsIGxhYmVsIF0gKSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHZhbHVlLCBsYWJlbCB9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiBbIHBsYWNlaG9sZGVyLCAuLi5vcHRpb25zIF07XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKCk7XHJcblxyXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRcdHJldHVybiAoIDxkaXYga2V5PVwibWFpbGNoaW1wXCI+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGtleT17ICdtYWlsY2hpbXBfa2V5X2lucHV0cycgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0LXdpdGgtYnV0dG9uXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV9rZXknIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17IHRoaXMudmFsaWRhdGVBUElLZXkgfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS5jbGFzc05hbWUuam9pbiggJyAnICkgKyAnIGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cclxuXHRcdFx0XHRcdHsgbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PGRpdi8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW4tYm90dG9tLS1zbWFsbCc+eyBoZWxwKCAnYXBpX2tleV9saW5rX3ByZWZpeCcgKSB9IDxhXHJcblx0XHRcdFx0aHJlZj17IGhlbHAoICdhcGlfa2V5X2xpbmsnICkgfT57IGhlbHAoICdhcGlfa2V5X2xpbmtfc3VmZml4JyApIH08L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7IHNldHRpbmdzLmlzVmFsaWRBUEkgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ21haWxjaGltcF9zZWxlY3RfbGlzdHMnIH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0LXdpdGgtYnV0dG9uXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2xpc3RfaWQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cclxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmdldEFwaURhdGEgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAndXBkYXRlX2xpc3RfaWRzJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2dyb3Vwc19pZHMnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdncm91cHNfaWRzJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZ3JvdXBzX2lkcyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnZ3JvdXBzX2lkcycgKSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRHcm91cHMoKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nbWFpbGNoaW1wX3RhZ3MnXHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnRhZ3MgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3RhZ3MnICkgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAoICd0YWdzJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZG91YmxlX29wdF9pbicgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2RvdWJsZV9vcHRfaW4nICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmRvdWJsZV9vcHRfaW4gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIEJvb2xlYW4oIG5ld1ZhbCApLCAnZG91YmxlX29wdF9pbicgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8QWN0aW9uRmllbGRzTWFwXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0XHRrZXk9J21haWxjaGltcCdcclxuXHRcdFx0XHRcdGZpZWxkcz17IGZpZWxkcyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyAoIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9ICkgPT4gPFdyYXBwZXJSZXF1aXJlZENvbnRyb2xcclxuXHRcdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZElkICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZERlZmF1bHQoIGZpZWxkSWQgKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBmaWVsZElkICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD4gfVxyXG5cdFx0XHRcdDwvQWN0aW9uRmllbGRzTWFwPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblx0XHQ8L2Rpdj4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0Q2hlY2tib3hDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdyZWRpcmVjdF90b19wYWdlJywgY2xhc3MgUmVkaXJlY3RUb1BhZ2VBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cdH1cclxuXHJcblx0aXNDaGVja2VkKCBuYW1lICkge1xyXG5cdFx0Y29uc3QgYXJnc19maWVsZHMgPSBBcnJheS5mcm9tKCB0aGlzLnByb3BzLnNldHRpbmdzLnJlZGlyZWN0X2FyZ3MgfHwgW10gKTtcclxuXHJcblx0XHRyZXR1cm4gQm9vbGVhbiggYXJnc19maWVsZHMuaW5jbHVkZXMoIG5hbWUgKSApO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VSZWRpcmVjdEFyZ3MoIHZhbHVlLCBmaWVsZF9uYW1lICkge1xyXG5cdFx0bGV0IGFyZ3NfZmllbGRzID0gQXJyYXkuZnJvbSggdGhpcy5wcm9wcy5zZXR0aW5ncy5yZWRpcmVjdF9hcmdzIHx8IFtdICk7XHJcblxyXG5cdFx0aWYgKCAhIHZhbHVlICkge1xyXG5cdFx0XHRjb25zdCBmaWVsZF9pZCA9IGFyZ3NfZmllbGRzLmluZGV4T2YoIGZpZWxkX25hbWUgKTtcclxuXHJcblx0XHRcdGFyZ3NfZmllbGRzLnNwbGljZSggZmllbGRfaWQsIDEgKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRhcmdzX2ZpZWxkcy5wdXNoKCBmaWVsZF9uYW1lICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIGFyZ3NfZmllbGRzLCAncmVkaXJlY3RfYXJncycgKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlU2V0dGluZyggdmFsdWUsIGtleSApIHtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzb3VyY2UsIGxhYmVsLCBzZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPGRpdiBrZXk9XCJyZWRpcmVjdF90b19wYWdlXCI+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0a2V5PSdyZWRpcmVjdF90eXBlJ1xyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF90eXBlJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF90eXBlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnJlZGlyZWN0X3R5cGVzIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAncmVkaXJlY3RfdHlwZScgKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdHsgJ3N0YXRpY19wYWdlJyA9PT0gc2V0dGluZ3MucmVkaXJlY3RfdHlwZSAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGtleT0ncmVkaXJlY3RfdHlwZSdcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfcGFnZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfcGFnZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3JlZGlyZWN0X3BhZ2UnICkgfVxyXG5cdFx0XHQvPiB9XHJcblx0XHRcdHsgJ2N1c3RvbV91cmwnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdGtleT0ncmVkaXJlY3RfdXJsX2NvbnRyb2wnXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X3VybCcgKSB9XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF91cmwgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdyZWRpcmVjdF91cmwnICkgfVxyXG5cdFx0XHQvPiB9XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9hcmdzJyApIH1cclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF9hcmdzX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlZGlyZWN0X2FyZ3MtY29udHJvbCc+XHJcblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCB7IG5hbWUgfSwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgYGNoZWNrYm94X2FyZ3NfJHsgbmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IG5hbWUgfVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyB0aGlzLmlzQ2hlY2tlZCggbmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlUmVkaXJlY3RBcmdzKCBuZXdWYWwsIG5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0a2V5PSdyZWRpcmVjdF9oYXNoX2NvbnRyb2wnXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X2hhc2gnICkgfVxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfaGFzaCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3JlZGlyZWN0X2hhc2gnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgQWN0aW9uTWVzc2FnZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXNcIjtcclxuaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4vYmFzZS1hY3Rpb24tY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgV3JhcHBlclJlcXVpcmVkQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdyZWdpc3Rlcl91c2VyJywgY2xhc3MgUmVnaXN0ZXJVc2VyQWN0aW9uIGV4dGVuZHMgQmFzZUFjdGlvbkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cdFx0dGhpcy5mb3JtRmllbGRzTGlzdCA9IFsgeyB2YWx1ZTogJycsIGxhYmVsOiAnLS0nIH0sIC4uLnRoaXMuZmllbGRzIF07XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IHVzZXJGaWVsZHMgPSBPYmplY3QuZW50cmllcyggc291cmNlLnVzZXJGaWVsZHMgKTtcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPFJlYWN0LkZyYWdtZW50IGtleT1cInJlZ2lzdGVyX3VzZXJcIj5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdGtleT1cInVzZXJfZmllbGRzX21hcFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3RcIj5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfT57IF9fKCAnU2V0IGZvcm0gZmllbGRzIG5hbWVzIHRvIHRvIGdldCB1c2VyIGRhdGEgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3NwYW4+XHJcblx0XHRcdFx0XHR7IHVzZXJGaWVsZHMubWFwKCAoIFsgdmFsdWUsIGRhdGEgXSApID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkPXsgWyB2YWx1ZSwgZGF0YSBdIH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17IGBmb3JtX2ZpZWxkc18keyB2YWx1ZSB9YCB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGREZWZhdWx0KCB2YWx1ZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gdGhpcy5vbkNoYW5nZUZpZWxkTWFwKCBuZXdWYWx1ZSwgdmFsdWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PVwidXNlcl9yb2xlX2xpc3RcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2VyX3JvbGUnICkgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfcm9sZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS51c2VyUm9sZXMgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3VzZXJfcm9sZScgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfbWV0YScgKSB9XHJcblx0XHRcdFx0a2V5PSd1c2VyX21ldGFfbGlzdCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxyXG5cdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9PnsgX18oICdTZXQgdXNlciBtZXRhIGZpZWxkcyB0byBzYXZlIGFwcHJvcHJpYXRlIGZvcm0gZmllbGRzIGludG8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0eyB0aGlzLmZpZWxkcy5tYXAoICggeyBuYW1lIH0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgbmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgbmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgbmFtZSB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGRNZXRhKCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZU1ldGFGaWVsZE1hcCggbmV3VmFsLCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0a2V5PSdsb2dfaW4nXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xvZ19pbicgKSB9XHJcblx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmxvZ19pbiB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnbG9nX2luJyApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdGtleT0nYWRkX3VzZXJfaWRfY29udHJvbCdcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYWRkX3VzZXJfaWQnICkgfVxyXG5cdFx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy5hZGRfdXNlcl9pZCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnYWRkX3VzZXJfaWQnICkgfVxyXG5cdFx0XHRcdGhlbHA9eyBoZWxwKCAnYWRkX3VzZXJfaWQnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWN0aW9uTWVzc2FnZXNcclxuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcblxyXG59ICk7XHJcbiIsIi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgTWFjcm9zSW5zZXJ0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFjcm9zLWluc2VydGVyXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5hZGRBY3Rpb24oICdzZW5kX2VtYWlsJywgZnVuY3Rpb24gU2VuZEVtYWlsQWN0aW9uKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc2V0dGluZ3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc291cmNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGhlbHAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2VTZXR0aW5nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH0gKSB7XHJcblxyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcclxuXHJcblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XHJcblx0XHRjb25zdCBjb250ZW50ID0gc2V0dGluZ3MuY29udGVudCB8fCAnJyArICclJyArIG1hY3JvcyArICclJztcclxuXHJcblx0XHRvbkNoYW5nZVNldHRpbmcoIGNvbnRlbnQsICdjb250ZW50JyApO1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cIm1haWxfdG9cIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLm1haWxfdG8gfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLm1haWxUbyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtYWlsX3RvJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdtYWlsX3RvJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdtYWlsX3RvJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7ICdjdXN0b20nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJjdXN0b21fZW1haWxcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmN1c3RvbV9lbWFpbCB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjdXN0b21fZW1haWwnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2N1c3RvbV9lbWFpbCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY3VzdG9tX2VtYWlsJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdHsgJ2Zvcm0nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cImZyb21fZmllbGRcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fZmllbGQgfVxyXG5cdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdmcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdmcm9tX2ZpZWxkJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cInJlcGx5X3RvXCJcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZXBseV90byB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucmVwbHlUbyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXBseV90bycgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAncmVwbHlfdG8nICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X3RvJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7ICdjdXN0b20nID09PSBzZXR0aW5ncy5yZXBseV90byAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PVwicmVwbHlfdG9fZW1haWxcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X3RvX2VtYWlsIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlcGx5X3RvX2VtYWlsJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV90b19lbWFpbCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAncmVwbHlfdG9fZW1haWwnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyAnZm9ybScgPT09IHNldHRpbmdzLnJlcGx5X3RvICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cInJlcGx5X2Zyb21fZmllbGRcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X2Zyb21fZmllbGQgfVxyXG5cdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXBseV9mcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV9mcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdyZXBseV9mcm9tX2ZpZWxkJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJzdWJqZWN0XCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5zdWJqZWN0IH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3N1YmplY3QnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ3N1YmplY3QnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3N1YmplY3QnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJmcm9tX25hbWVcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fbmFtZSB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmcm9tX25hbWUnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fbmFtZScgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9uYW1lJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PVwiZnJvbV9hZGRyZXNzXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5mcm9tX2FkZHJlc3MgfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZnJvbV9hZGRyZXNzJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdmcm9tX2FkZHJlc3MnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2Zyb21fYWRkcmVzcycgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwiY29udGVudF90eXBlXCJcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5jb250ZW50X3R5cGUgfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLmNvbnRlbnRfdHlwZSB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjb250ZW50X3R5cGUnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2NvbnRlbnRfdHlwZScgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdjb250ZW50X3R5cGUnICkgfVxyXG5cdFx0Lz5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3Mtd3JhcFwiPlxyXG5cdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0a2V5PVwiY29udGVudFwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5jb250ZW50IH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnY29udGVudCcgKSB9XHJcblx0XHRcdFx0aGVscD17IGhlbHAoICdjb250ZW50JyApIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY29udGVudCcgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PE1hY3Jvc0luc2VydGVyXHJcblx0XHRcdFx0ZmllbGRzPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdFx0b25GaWVsZENsaWNrPXsgaW5zZXJ0TWFjcm9zIH1cclxuXHRcdFx0XHRjdXN0b21NYWNyb3M9eyBzb3VyY2UuY3VzdG9tTWFjcm9zIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPjtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn0gKTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAndXBkYXRlX29wdGlvbnMnLCBjbGFzcyBVcGRhdGVPcHRpb25zQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHR9XHJcblxyXG5cclxuXHRnZXRGaWVsZEJ5TmFtZSggeyBzb3VyY2UsIG5hbWUgfSApIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzWyBzb3VyY2UgXSAmJiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSApIHtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Z2V0RmllbGRNZXRhKCBuYW1lICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoIHtcclxuXHRcdFx0c291cmNlOiAnbWV0YV9maWVsZHNfbWFwJyxcclxuXHRcdFx0bmFtZVxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlRmllbGRzTWFwKCB7IHNvdXJjZSwgbmFtZUZpZWxkLCB2YWx1ZSB9ICkge1xyXG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdICk7XHJcblxyXG5cdFx0ZmllbGRzTWFwWyBuYW1lRmllbGQgXSA9IHZhbHVlO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZU1ldGFGaWVsZE1hcCA9ICggdmFsdWUsIG5hbWVGaWVsZCApID0+IHtcclxuXHRcdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XHJcblxyXG5cdFx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcclxuXHRcdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlU2V0dGluZyA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdFx0b25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInJlZ2lzdGVyX3VzZXJcIj5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJvcHRpb25zX3BhZ2VfbGlzdFwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfcGFnZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mub3B0aW9uc19wYWdlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLm9wdGlvbnNQYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ29wdGlvbnNfcGFnZScgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfbWFwJyApIH1cclxuXHRcdFx0XHRrZXk9J29wdGlvbnNfbWV0YV9saXN0J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLW1ldGEtcm93cyc+XHJcblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCB7IG5hbWUgfSwgaW5kZXggKSA9PiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ29wdGlvbnNfbWV0YV8nICsgbmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBuYW1lIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkTWV0YSggbmFtZSApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlTWV0YUZpZWxkTWFwKCBuZXdWYWwsIG5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cclxuXHRcdDwvZGl2PiApO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxufSApO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEpldEZpZWxkc01hcENvbnRyb2wgZnJvbSBcIi4uL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwXCI7XHJcbmltcG9ydCBBY3Rpb25NZXNzYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ3VwZGF0ZV91c2VyJywgY2xhc3MgVXBkYXRlVXNlckFjdGlvbiBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblx0XHR0aGlzLm1ldGFPcHRpb24gPSAndXNlcl9tZXRhJztcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR0eXBlOiAnJyxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZE1hcCggbmFtZSApIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzICYmIHNldHRpbmdzLmZpZWxkc19tYXAgJiYgc2V0dGluZ3MuZmllbGRzX21hcFsgbmFtZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuZmllbGRzX21hcFsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdFx0b25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInVwZGF0ZV91c2VyXCI+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHRrZXk9J3VzZXJfZmllbGRzX21hcCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxyXG5cdFx0XHRcdFx0eyB0aGlzLmZpZWxkcy5tYXAoICggZmllbGQsIGluZGV4ICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGREYXRhID0gdGhpcy5nZXRGaWVsZE1hcCggZmllbGQubmFtZSApO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRcdFx0XHRcdGtleT17ICd1c2VyX21ldGFfJyArIGZpZWxkLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8SmV0RmllbGRzTWFwQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGQubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVmFsdWU9eyBmaWVsZERhdGEgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGROYW1lPXsgZmllbGQubmFtZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdG1ldGFQcm9wPSd1c2VyX21ldGEnXHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZHNNYXA9eyBzZXR0aW5ncy5maWVsZHNfbWFwIH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVHlwZXM9eyBzb3VyY2UudXNlckZpZWxkcyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfcm9sZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdGtleT1cInVzZXJfcm9sZV9saXN0XCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfcm9sZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS51c2VyUm9sZXMgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUsICd1c2VyX3JvbGUnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWN0aW9uTWVzc2FnZXNcclxuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCB7IGdldEFjdGlvblNldHRpbmdzIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2F0ZXdheS1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZnJvbUxvY2FsaXplSGVscGVyIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIHtcclxuXHRjb25zdCB7IGdhdGV3YXlBdHRycywgbGFiZWwgfSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb24udHlwZSApO1xyXG5cdGNvbnN0IGFjdGlvblNldHRpbmdzID0gZ2V0QWN0aW9uU2V0dGluZ3MoIGFjdGlvbi5pZCApO1xyXG5cclxuXHRjb25zdCB2YWx1ZSA9IGF0dHIgPT4gYWN0aW9uU2V0dGluZ3NbIGF0dHIgXSA/IGFjdGlvblNldHRpbmdzWyBhdHRyIF0gOiAnTlVMTCc7XHJcblxyXG5cdGNvbnN0IGxhYmVsV2l0aEF0dHJzID0gZ2F0ZXdheUF0dHJzKCkubWFwKCBhdHRyID0+ICggYCR7IGxhYmVsKCBhdHRyICkgfSAkeyB2YWx1ZSggYXR0ciApIH1gICkgKTtcclxuXHJcblx0cmV0dXJuIGxhYmVsV2l0aEF0dHJzLmpvaW4oICcsICcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXM7IiwiaW1wb3J0IHtcclxuXHRnYXRld2F5QXR0cixcclxuXHRyZW5kZXJHYXRld2F5XHJcbn0gZnJvbSBcIi4uL2hlbHBlcnMvZ2F0ZXdheS1oZWxwZXJcIjtcclxuaW1wb3J0IFRvb2xzLCB7IGV2ZW50IH0gZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXNcIjtcclxuaW1wb3J0IHtcclxuXHRhY3Rpb25CeVR5cGVMaXN0LFxyXG5cdGZyb21Mb2NhbGl6ZUhlbHBlclxyXG59IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IFBheVBhbCBmcm9tIFwiLi9wYXlwYWxcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbmV2ZW50KCAnamV0LWZiLWdhdGV3YXlzL2luaXQnICkoKTtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0VGV4dENvbnRyb2wsXHJcblx0Q2hlY2tib3hDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0UmFkaW9Db250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRNb2RhbCxcclxuXHRUZXh0LFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCBwYXJzZUFjdGlvbnMgPSBhY3Rpb25zID0+IHtcclxuXHRyZXR1cm4gYWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiAhICggYWN0aW9uLnR5cGUgPT09ICdpbnNlcnRfcG9zdCcgfHwgYWN0aW9uLnR5cGUgPT09ICdyZWRpcmVjdF90b19wYWdlJyApICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYXRld2F5c0VkaXRvcigge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2F0ZXdheXNBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQWN0aW9ucyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0Y29uc3QgYXZhaWxhYmxlQWN0aW9ucyA9IHBhcnNlQWN0aW9ucyggYWN0aXZlQWN0aW9ucyApO1xyXG5cclxuXHRjb25zdCBnYXRld2F5c0RhdGEgPSBnYXRld2F5QXR0cigpO1xyXG5cdGNvbnN0IGxhYmVsID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XHJcblxyXG5cdGNvbnN0IFsgZ2F0ZXdheSwgc2V0R2F0ZXdheSBdID0gdXNlU3RhdGUoIGdhdGV3YXlzQXJncyApO1xyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cclxuXHQvKipcclxuXHQgKiBVc2VkIGZvciBzZXQgbm90aWZpY2F0aW9ucyBhbmQgZ2F0ZXdheSB0eXBlIHNldHRpbmdzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gd2hlblxyXG5cdCAqIEBwYXJhbSB0eXBlXHJcblx0ICogQHBhcmFtIG5ld1ZhbHVlXHJcblx0ICovXHJcblx0Y29uc3Qgc2V0VmFsdWVJbk9iamVjdCA9ICggd2hlbiwgdHlwZSwgbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRzZXRHYXRld2F5KCAoIHByZXZBcmdzICkgPT4ge1xyXG5cdFx0XHRpZiAoICEgcHJldkFyZ3NbIHdoZW4gXSApIHtcclxuXHRcdFx0XHRwcmV2QXJnc1sgd2hlbiBdID0ge307XHJcblx0XHRcdH1cclxuXHRcdFx0cHJldkFyZ3NbIHdoZW4gXVsgdHlwZSBdID0gbmV3VmFsdWU7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBVc2VkIGZvciBnZXQgbm90aWZpY2F0aW9ucyBhbmQgZ2F0ZXdheSB0eXBlIHNldHRpbmdzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gd2hlblxyXG5cdCAqIEBwYXJhbSB0eXBlXHJcblx0ICogQHBhcmFtIGlzRW1wdHlSZXN1bHRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG5cdCAqL1xyXG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnMgPSAoIHdoZW4sIHR5cGUsIGlzRW1wdHlSZXN1bHQgPSBmYWxzZSApID0+IHtcclxuXHRcdGlmICggZ2F0ZXdheVsgd2hlbiBdICYmIGdhdGV3YXlbIHdoZW4gXVsgdHlwZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gZ2F0ZXdheVsgd2hlbiBdWyB0eXBlIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNFbXB0eVJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRSZXN1bHRNZXNzYWdlID0gKCBrZXksIHZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ21lc3NhZ2VzJywga2V5LCB2YWx1ZSApO1xyXG5cdH07XHJcblx0Y29uc3QgZ2V0UmVzdWx0TWVzc2FnZSA9ICgga2V5ICkgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdtZXNzYWdlcycsIGtleSwgZ2F0ZXdheXNEYXRhLm1lc3NhZ2VzWyBrZXkgXSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldE5vdGlmaWNhdGlvbnNCZWZvcmUgPSAoIGlkLCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHNldFZhbHVlSW5PYmplY3QoICdub3RpZmljYXRpb25zX2JlZm9yZScsIGlkLCBuZXdWYWx1ZSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFjdGlvbkRlZmF1bHQgPSB7IGFjdGl2ZTogZmFsc2UgfTtcclxuXHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9uc0JlZm9yZSA9IGlkID0+IHtcclxuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbm90aWZpY2F0aW9uc19iZWZvcmUnLCBpZCwgYWN0aW9uRGVmYXVsdCApO1xyXG5cdH07XHJcblxyXG5cclxuXHRjb25zdCBzZXROb3RpZmljYXRpb25zRmFpbGVkID0gKCB0eXBlLCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHNldFZhbHVlSW5PYmplY3QoICdub3RpZmljYXRpb25zX2ZhaWxlZCcsIHR5cGUsIG5ld1ZhbHVlICk7XHJcblx0fTtcclxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zRmFpbGVkID0gaWQgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX2ZhaWxlZCcsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MgPSAoIGlkLCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHNldFZhbHVlSW5PYmplY3QoICdub3RpZmljYXRpb25zX3N1Y2Nlc3MnLCBpZCwgbmV3VmFsdWUgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnNTdWNjZXNzID0gaWQgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX3N1Y2Nlc3MnLCBpZCwgYWN0aW9uRGVmYXVsdCApO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGlmICggb25TYXZlSXRlbXMgKSB7XHJcblxyXG5cdFx0XHRcdFsgJ25vdGlmaWNhdGlvbnNfYmVmb3JlJywgJ25vdGlmaWNhdGlvbnNfZmFpbGVkJywgJ25vdGlmaWNhdGlvbnNfc3VjY2VzcycgXS5mb3JFYWNoKCBuYW1lID0+IHtcclxuXHRcdFx0XHRcdGlmICggISBnYXRld2F5WyBuYW1lIF0gKSB7XHJcblx0XHRcdFx0XHRcdGdhdGV3YXlbIG5hbWUgXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyggZ2F0ZXdheVsgbmFtZSBdICkuZm9yRWFjaCggKCBbIGFjdGlvbiwgaXNDaGVja2VkIF0gKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICggISBpc0NoZWNrZWQgKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGdhdGV3YXlbIG5hbWUgXVsgYWN0aW9uIF07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gKVxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0b25TYXZlSXRlbXMoIGdhdGV3YXkgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XHJcblxyXG5cdGNvbnN0IGFjdGlvbnNMaXN0ID0gYWN0aW9uQnlUeXBlTGlzdCggJ2luc2VydF9wb3N0JywgdHJ1ZSApO1xyXG5cdGNvbnN0IGFjdGlvbkxhYmVsID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0QWN0aW9uTGFiZWwnICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCBnYXRld2F5LmdhdGV3YXksIHsgc2V0VmFsdWVJbk9iamVjdCwgZ2V0Tm90aWZpY2F0aW9ucyB9ICkgfVxyXG5cdFx0eyBCb29sZWFuKCBhdmFpbGFibGVBY3Rpb25zLmxlbmd0aCApICYmIDw+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgX18oICdCZWZvcmUgcGF5bWVudCBwcm9jZXNzZWQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdGtleT1cImJlZm9yZV9wYXltZW50X2Jhc2VfY29udHJvbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdjaGVja2JveGVzLXJvdycgfT5cclxuXHRcdFx0XHRcdHsgYXZhaWxhYmxlQWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCBhY3Rpb24udHlwZSA9PT0gJ2luc2VydF9wb3N0JyB8fCBhY3Rpb24udHlwZSA9PT0gJ3JlZGlyZWN0X3RvX3BhZ2UnICkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybXMtY2hlY2tib3gtZmllbGQnIH1cclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgZ2V0Tm90aWZpY2F0aW9uc0JlZm9yZSggYWN0aW9uLmlkICkuYWN0aXZlIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IGFjdGlvbkxhYmVsKCBhY3Rpb24udHlwZSApIH1cclxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGFjdGl2ZSA9PiBzZXROb3RpZmljYXRpb25zQmVmb3JlKCBhY3Rpb24uaWQsIHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlXHJcblx0XHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdFx0Lz47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT24gc3VjY2Vzc2Z1bCBwYXltZW50OicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRrZXk9XCJzdWNjZXNzX3BheW1lbnRfYmFzZV9jb250cm9sXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHR7IGF2YWlsYWJsZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3Jtcy1jaGVja2JveC1maWVsZCcgfVxyXG5cdFx0XHRcdFx0XHRcdGtleT17IGBwbGFjZV9ob2xkZXJfYmxvY2tfJHsgYWN0aW9uLmlkICsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zU3VjY2VzcyggYWN0aW9uLmlkICkuYWN0aXZlIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IGFjdGlvbkxhYmVsKCBhY3Rpb24udHlwZSApIH1cclxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGFjdGl2ZSA9PiBzZXROb3RpZmljYXRpb25zU3VjY2VzcyggYWN0aW9uLmlkLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmUsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBhY3Rpb24udHlwZVxyXG5cdFx0XHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0XHRcdC8+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBfXyggJ09uIGZhaWxlZCBwYXltZW50OicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRrZXk9XCJmYWlsZWRfcGF5bWVudF9iYXNlX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdHsgYXZhaWxhYmxlQWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCBhY3Rpb24udHlwZSA9PT0gJ2luc2VydF9wb3N0JyB8fCBhY3Rpb24udHlwZSA9PT0gJ3JlZGlyZWN0X3RvX3BhZ2UnICkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybXMtY2hlY2tib3gtZmllbGQnIH1cclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgZ2V0Tm90aWZpY2F0aW9uc0ZhaWxlZCggYWN0aW9uLmlkICkuYWN0aXZlIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IGFjdGlvbkxhYmVsKCBhY3Rpb24udHlwZSApIH1cclxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IGFjdGl2ZSA9PiBzZXROb3RpZmljYXRpb25zRmFpbGVkKCBhY3Rpb24uaWQsIHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlXHJcblx0XHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdFx0Lz47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0PC8+IH1cclxuXHJcblx0XHR7ICggMSA8IGFjdGlvbnNMaXN0Lmxlbmd0aCB8fCBnYXRld2F5LmFjdGlvbl9vcmRlciApICYmIDxCYXNlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnYWN0aW9uX29yZGVyJyApIH1cclxuXHRcdFx0a2V5PSdnYXRld2F5X2FjdGlvbl9vcmRlcl9iYXNlX2NvbnRyb2wnXHJcblx0XHQ+XHJcblx0XHRcdDxSYWRpb0NvbnRyb2xcclxuXHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyLWZ1bGwnXHJcblx0XHRcdFx0a2V5PSdnYXRld2F5X2FjdGlvbl9vcmRlcidcclxuXHRcdFx0XHRvcHRpb25zPXsgYWN0aW9uQnlUeXBlTGlzdCggJ2luc2VydF9wb3N0JywgdHJ1ZSApIH1cclxuXHRcdFx0XHRzZWxlY3RlZD17IGdhdGV3YXkuYWN0aW9uX29yZGVyIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRzZXRHYXRld2F5KCBwcmV2QXJncyA9PiAoIHtcclxuXHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdGFjdGlvbl9vcmRlcjogTnVtYmVyKCBuZXdWYWwgKVxyXG5cdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0Jhc2VDb250cm9sPiB9XHJcblxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3ByaWNlX2ZpZWxkJyApIH1cclxuXHRcdFx0a2V5PXsgJ2Zvcm1fZmllbGRzX3ByaWNlX2ZpZWxkJyB9XHJcblx0XHRcdHZhbHVlPXsgZ2F0ZXdheS5wcmljZV9maWVsZCB9XHJcblx0XHRcdGxhYmVsUG9zaXRpb249J3NpZGUnXHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRzZXRHYXRld2F5KCBwcmV2QXJncyA9PiAoIHtcclxuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0cHJpY2VfZmllbGQ6IG5ld1ZhbFxyXG5cdFx0XHRcdH0gKSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0Lz5cclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tYWNyb3NfYmFzZV9jb250cm9sXCJcclxuXHRcdD5cclxuXHRcdFx0PGg0PlxyXG5cdFx0XHRcdHsgX18oICdBdmFpbGFibGUgbWFjcm9zIGxpc3Q6ICcsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdHsgX18oICclZ2F0ZXdheV9hbW91bnQlIC0gcGF5bWVudCBhbW91bnQgcmV0dXJuZWQgZnJvbSBnYXRld2F5IHRlbXBsYXRlOycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdHsgX18oICclZ2F0ZXdheV9zdGF0dXMlIC0gcGF5ZW1udCBzdGF0dXMgcmV0dXJuZWQgZnJvbSBwYXltZW50IGdhdGV3YXk7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0eyBfXyggJyVmaWVsZF9uYW1lJSAtIHJlcGxhY2UgXCJmaWVsZF9uYW1lXCIgd2l0aCBhbnkgZmllbGQgbmFtZSBmcm9tIHRoZSBmb3JtOycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHQ8L2g0PlxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21lc3NhZ2Vfc3VjY2Vzc1wiXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtZXNzYWdlX3N1Y2Nlc3MnICkgfVxyXG5cdFx0XHR2YWx1ZT17IGdldFJlc3VsdE1lc3NhZ2UoICdzdWNjZXNzJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRSZXN1bHRNZXNzYWdlKCAnc3VjY2VzcycsIG5ld1ZhbHVlICkgfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9mYWlsZWRcIlxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnbWVzc2FnZV9mYWlsZWQnICkgfVxyXG5cdFx0XHR2YWx1ZT17IGdldFJlc3VsdE1lc3NhZ2UoICdmYWlsZWQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdmYWlsZWQnLCBuZXdWYWx1ZSApIH1cclxuXHRcdC8+XHJcblx0XHR7IGFjdGl2ZUFjdGlvbnMuZmluZCggYWN0aW9uID0+IGFjdGlvbi50eXBlID09PSAncmVkaXJlY3RfdG9fcGFnZScgKSAmJiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdGtleT1cImNoZWNrYm94X2Jsb2NrX3JlZGlyZWN0X3RvX3BhZ2VcIlxyXG5cdFx0XHRjaGVja2VkPXsgZ2F0ZXdheS51c2Vfc3VjY2Vzc19yZWRpcmVjdCB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2Vfc3VjY2Vzc19yZWRpcmVjdCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4ge1xyXG5cdFx0XHRcdHNldEdhdGV3YXkoIHByZXZBcmdzID0+ICgge1xyXG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHR1c2Vfc3VjY2Vzc19yZWRpcmVjdDogdmFsdWVcclxuXHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPiB9XHJcblx0PC8+O1xyXG5cclxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHJlZ2lzdGVyR2F0ZXdheSxcclxuXHRnYXRld2F5TGFiZWxcclxufSA9IHdpbmRvdy5KZXRGQkdhdGV3YXlzO1xyXG5cclxuY29uc3QgbGFiZWwgPSBnYXRld2F5TGFiZWwoICdwYXlwYWwnICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXlQYWwoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVJbk9iamVjdCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2V0Tm90aWZpY2F0aW9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0Y29uc3Qgc2V0U2V0dGluZyA9ICgga2V5LCB2YWx1ZSApID0+IHtcclxuXHRcdHNldFZhbHVlSW5PYmplY3QoICdwYXlwYWwnLCBrZXksIHZhbHVlICk7XHJcblx0fTtcclxuXHRjb25zdCBnZXRTZXR0aW5nID0gKCBrZXkgKSA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ3BheXBhbCcsIGtleSwgJycgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnY2xpZW50X2lkJyApIH1cclxuXHRcdFx0a2V5PSdwYXlwYWxfY2xpZW50X2lkX3NldHRpbmcnXHJcblx0XHRcdHZhbHVlPXsgZ2V0U2V0dGluZyggJ2NsaWVudF9pZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHNldFNldHRpbmcoICdjbGllbnRfaWQnLCBuZXdWYWwgKSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdzZWNyZXQnICkgfVxyXG5cdFx0XHRrZXk9J3BheXBhbF9zZWNyZXRfc2V0dGluZydcclxuXHRcdFx0dmFsdWU9eyBnZXRTZXR0aW5nKCAnc2VjcmV0JyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ3NlY3JldCcsIG5ld1ZhbCApIH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2N1cnJlbmN5JyApIH1cclxuXHRcdFx0a2V5PSdwYXlwYWxfY3VycmVuY3lfY29kZV9zZXR0aW5nJ1xyXG5cdFx0XHR2YWx1ZT17IGdldFNldHRpbmcoICdjdXJyZW5jeScgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHNldFNldHRpbmcoICdjdXJyZW5jeScsIG5ld1ZhbCApIH1cclxuXHRcdC8+XHJcblx0PC8+O1xyXG59XHJcblxyXG5yZWdpc3RlckdhdGV3YXkoICdwYXlwYWwnLCBQYXlQYWwgKTtcclxuXHJcbiIsImltcG9ydCB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24td3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSBcIi4vaG9va3MtaGVscGVyXCI7XHJcbmltcG9ydCBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyBmcm9tIFwiLi4vZ2F0ZXdheXMvZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5pbXBvcnQgeyBzYXZlR2xvYmFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGlvbnNCeVR5cGUgPSB0eXBlID0+IHtcclxuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcclxuXHJcblx0cmV0dXJuIGFjdGlvbnMuZmlsdGVyKCBhY3Rpb24gPT4gdHlwZSA9PT0gYWN0aW9uLnR5cGUgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmcm9tTG9jYWxpemVIZWxwZXIgPSBuYW1lID0+IHtcclxuXHRyZXR1cm4gbmFtZSA/IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyWyBuYW1lIF0gOiB3aW5kb3cuSmV0RkJMb2NhbGl6ZUhlbHBlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25CeVR5cGVMaXN0ID0gKCBhY3Rpb25UeXBlLCB3aXRoRGVzYyA9IGZhbHNlICkgPT4ge1xyXG5cdHJldHVybiBnZXRBY3Rpb25zQnlUeXBlKCBhY3Rpb25UeXBlICkubWFwKCBhY3Rpb24gPT4ge1xyXG5cdFx0Y29uc3QgbmV3QWN0aW9uID0ge1xyXG5cdFx0XHR2YWx1ZTogYWN0aW9uLmlkLFxyXG5cdFx0XHRsYWJlbDogZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0QWN0aW9uTGFiZWwnICkoIGFjdGlvbi50eXBlIClcclxuXHRcdH07XHJcblx0XHRpZiAoIHdpdGhEZXNjICkge1xyXG5cdFx0XHRuZXdBY3Rpb24ubGFiZWwgKz0gYCAoJHsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH0pYFxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuZXdBY3Rpb247XHJcblx0fSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEFjdGlvbiA9ICggYWN0aW9uVHlwZSwgYWN0aW9uSW5zdGFuY2UgKSA9PiB7XHJcblx0d2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9ucyA9IHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgfHwge307XHJcblx0d2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uVHlwZSBdID0gd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0KCBhY3Rpb25UeXBlLCBhY3Rpb25JbnN0YW5jZSApO1xyXG59O1xyXG5cclxuc2F2ZUdsb2JhbENvbXBvbmVudCggJ0pldEZCQWN0aW9ucycsIHsgYWRkQWN0aW9uIH0gKTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgYmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IgPSAoIGJsb2NrUGFyc2VyRnVuYyApID0+IHtcclxuXHRjb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tzICkgPT4ge1xyXG5cclxuXHRcdGJsb2NrcyA9IGJsb2NrcyB8fCB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrcygpO1xyXG5cclxuXHRcdGJsb2Nrcy5tYXAoIGJsb2NrID0+IHtcclxuXHRcdFx0YmxvY2tQYXJzZXJGdW5jKCBibG9jayApO1xyXG5cclxuXHRcdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcy5sZW5ndGggKSB7XHJcblx0XHRcdFx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrLmlubmVyQmxvY2tzICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvcigpO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQmxvY2tzID0gKCBleGNsdWRlID0gW10sIHBsYWNlaG9sZGVyID0gZmFsc2UgKSA9PiB7XHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IFtdO1xyXG5cclxuXHRsZXQgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnLCAuLi5leGNsdWRlIF07XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGJsb2NrLmF0dHJpYnV0ZXMubmFtZVxyXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXHJcblx0XHQpIHtcclxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XHJcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxyXG5cdFx0XHRcdG5hbWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHRsYWJlbDogYmxvY2suYXR0cmlidXRlcy5sYWJlbCB8fCBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdFx0dmFsdWU6IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIHBsYWNlaG9sZGVyXHJcblx0XHQ/IFsgeyB2YWx1ZTogJycsIGxhYmVsOiBwbGFjZWhvbGRlciB9LCAuLi5mb3JtRmllbGRzIF1cclxuXHRcdDogZm9ybUZpZWxkcztcclxufVxyXG5cclxuY29uc3QgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQgPSAoIHBsYWNlaG9sZGVyID0gZmFsc2UgKSA9PiB7XHJcblxyXG5cdGNvbnN0IHNraXBGaWVsZHMgPSBbICdzdWJtaXQnLCAnZm9ybS1icmVhaycsICdoZWFkaW5nJywgJ2dyb3VwLWJyZWFrJyBdO1xyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBbXTtcclxuXHJcblx0Y29uc3QgY3VycmVudCA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0U2VsZWN0ZWRCbG9jaygpO1xyXG5cclxuXHRpZiAoIG51bGwgPT09IGN1cnJlbnQgKSB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2sgPT4ge1xyXG5cdFx0aWYgKCBibG9jay5uYW1lLmluY2x1ZGVzKCAnamV0LWZvcm1zLycgKVxyXG5cdFx0XHQmJiBjdXJyZW50LmNsaWVudElkICE9PSBibG9jay5jbGllbnRJZFxyXG5cdFx0XHQmJiAhIHNraXBGaWVsZHMuZmluZCggZmllbGQgPT4gYmxvY2submFtZS5pbmNsdWRlcyggZmllbGQgKSApXHJcblx0XHQpIHtcclxuXHRcdFx0Zm9ybUZpZWxkcy5wdXNoKCB7XHJcblx0XHRcdFx0YmxvY2tOYW1lOiBibG9jay5uYW1lLFxyXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gcGxhY2Vob2xkZXJcclxuXHRcdD8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxyXG5cdFx0OiBmb3JtRmllbGRzO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzID0gKCBleGNsdWRlID0gW10gKSA9PiB7XHJcblx0bGV0IGZpZWxkcyA9IFtdO1xyXG5cdGNvbnN0IGJsb2NrcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIGV4Y2x1ZGUgKTtcclxuXHJcblx0aWYgKCBibG9ja3MgKSB7XHJcblx0XHRibG9ja3MuZm9yRWFjaCggaXRlbSA9PiBmaWVsZHMucHVzaCggaXRlbS5uYW1lICkgKTtcclxuXHR9XHJcblx0cmV0dXJuIGZpZWxkcztcclxufVxyXG5cclxuY29uc3QgZ2V0QXZhaWxhYmxlRmllbGRzU3RyaW5nID0gKCBibG9ja05hbWUgKSA9PiB7XHJcblx0Y29uc3QgZmllbGRzID0gZ2V0QXZhaWxhYmxlRmllbGRzKCBbIGJsb2NrTmFtZSBdICk7XHJcblxyXG5cdGxldCBmaWVsZHNTdHJpbmcgPSBbXTtcclxuXHRmaWVsZHMuZm9yRWFjaCggZnVuY3Rpb24gKCBpdGVtICkge1xyXG5cdFx0ZmllbGRzU3RyaW5nLnB1c2goICclRklFTEQ6OicgKyBpdGVtICsgJyUnICk7XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gX18oICdBdmFpbGFibGUgZmllbGRzOiAnICkgKyBmaWVsZHNTdHJpbmcuam9pbiggJywgJyApO1xyXG59XHJcblxyXG5cclxuY29uc3QgZ2V0SW5uZXJCbG9ja3MgPSAoIGNsaWVudElkICkgPT4ge1xyXG5cdHJldHVybiB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldEJsb2NrKCBjbGllbnRJZCApLmlubmVyQmxvY2tzO1xyXG59XHJcblxyXG5jb25zdCBnZXRGb3JtRmllbGRzQnlCbG9jayA9ICggYmxvY2tFeGNsdWRlICkgPT4ge1xyXG5cdHJldHVybiAoKSA9PiBnZXRGb3JtRmllbGRzQmxvY2tzKCBbIGJsb2NrRXhjbHVkZS5uYW1lIF0gKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRnZXRGb3JtRmllbGRzQnlCbG9jayxcclxuXHRnZXRJbm5lckJsb2NrcyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcsXHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzLFxyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tIFwiLi9ob29rcy1oZWxwZXJcIjtcclxuaW1wb3J0IHsgc2F2ZUdsb2JhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBY3Rpb25TZXR0aW5ncyA9IGFjdGlvbklkID0+IHtcclxuXHRjb25zdCBbIGFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoKTtcclxuXHRjb25zdCBhY3Rpb24gPSBhY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiBhY3Rpb25JZCA9PT0gYWN0aW9uLmlkICk7XHJcblxyXG5cdHJldHVybiAoIGFjdGlvbiAmJiBhY3Rpb24uc2V0dGluZ3MgKSA/IGFjdGlvbi5zZXR0aW5ncyA6IGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhdGV3YXlBdHRyID0gKCBhdHRyID0gZmFsc2UsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuXHRpZiAoICEgYXR0ciApIHtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHRpZiAoICEgZGF0YVsgYXR0ciBdICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xyXG5cclxuXHRyZXR1cm4gbmFtZSA9PiBzb3VyY2VbIG5hbWUgXSA/IHNvdXJjZVsgbmFtZSBdIDogaXNFbXB0eTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYXRld2F5TGFiZWwgPSAoIHR5cGUsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuXHRyZXR1cm4gYXR0ciA9PiBsYWJlbCggdHlwZSApID8gbGFiZWwoIHR5cGUgKVsgYXR0ciBdIDogaXNFbXB0eTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyR2F0ZXdheSA9ICggaWQsIGNhbGxiYWNrICkgPT4ge1xyXG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcclxuXHR3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF0gPSBjYWxsYmFjaztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJHYXRld2F5ID0gKCBpZCwgcHJvcHMgKSA9PiB7XHJcblx0aWYgKCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRjb25zdCBHYXRld2F5Q29tcG9uZW50ID0gd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdO1xyXG5cclxuXHRyZXR1cm4gPEdhdGV3YXlDb21wb25lbnQgeyAuLi5wcm9wcyB9IC8+O1xyXG59O1xyXG5cclxuc2F2ZUdsb2JhbENvbXBvbmVudCggJ0pldEZCR2F0ZXdheXMnLCB7XHJcblx0Z2F0ZXdheUF0dHIsXHJcblx0Z2F0ZXdheUxhYmVsLFxyXG5cdHJlZ2lzdGVyR2F0ZXdheVxyXG59ICk7IiwiaW1wb3J0IHsgc2F2ZUdsb2JhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHRjcmVhdGVIb29rc1xyXG59ID0gd3AuaG9va3M7XHJcblxyXG5leHBvcnQgY29uc3QgamZiSG9va3MgPSBjcmVhdGVIb29rcygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFjdGlvbnMgPSAoIHdpdGhFZGl0UG9zdEVmZmVjdCA9IGZhbHNlICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ZWRpdFBvc3RcclxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyB8fCAnW10nICkgKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHdpdGhFZGl0UG9zdEVmZmVjdCApIHtcclxuXHRcdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRfamZfYWN0aW9uczogSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnMgKVxyXG5cdFx0XHRcdH0gKVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSwgWyBhY3Rpb25zIF0gKTtcclxuXHJcblx0cmV0dXJuIFsgYWN0aW9ucywgc2V0QWN0aW9ucyBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ2xhc3NlcyA9IGluaXRpYWxWYWxpZCA9PiB7XHJcblx0Y29uc3QgdmFsaWRDbGFzcyA9ICdpcy12YWxpZCc7XHJcblx0Y29uc3QgaW52YWxpZENsYXNzID0gJ2lzLWludmFsaWQnXHJcblx0Y29uc3QgaW5pdENsYXNzZXMgPSBbICdqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nIF07XHJcblxyXG5cdGNvbnN0IGluaXRTdGF0ZUNsYXNzZXMgPSAoKSA9PiB7XHJcblx0XHRpZiAoIGluaXRpYWxWYWxpZCApIHtcclxuXHRcdFx0cmV0dXJuIFsgLi4uaW5pdENsYXNzZXMsIHZhbGlkQ2xhc3MgXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCAhIGluaXRpYWxWYWxpZCApIHtcclxuXHRcdFx0cmV0dXJuIFsgLi4uaW5pdENsYXNzZXMsIGludmFsaWRDbGFzcyBdO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IFsgY2xhc3Nlcywgc2V0Q2xhc3NlcyBdID0gdXNlU3RhdGUoIGluaXRTdGF0ZUNsYXNzZXMoKSApO1xyXG5cclxuXHRjb25zdCBzZXRWYWxpZENsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgdmFsaWRDbGFzcyBdIClcclxuXHR9O1xyXG5cdGNvbnN0IHNldEludmFsaWRDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsIGludmFsaWRDbGFzcyBdIClcclxuXHR9O1xyXG5cdGNvbnN0IHNldExvYWRpbmdDbGFzcyA9ICgpID0+IHtcclxuXHRcdHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsICdsb2FkaW5nJyBdIClcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gWyBjbGFzc2VzLmpvaW4oICcgJyApLCBzZXRWYWxpZENsYXNzLCBzZXRJbnZhbGlkQ2xhc3MsIHNldExvYWRpbmdDbGFzcyBdO1xyXG59XHJcblxyXG5cclxuc2F2ZUdsb2JhbENvbXBvbmVudCggJ0pldEZCSG9va3MnLCB7IHVzZUFjdGlvbnMsIHVzZVN0YXRlQ2xhc3NlcyB9ICk7XHJcbiIsImltcG9ydCB7IHNhdmVHbG9iYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY2xhc3MgVG9vbHMge1xyXG5cclxuXHRzdGF0aWMgZ2V0SGVscE1lc3NhZ2UoIGZyb20sIG5hbWUgKSB7XHJcblx0XHRpZiAoIHR5cGVvZiBmcm9tLmhlbHBfbWVzc2FnZXNbIG5hbWUgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdHJldHVybiBmcm9tLmhlbHBfbWVzc2FnZXNbIG5hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHR5cGVvZiBmcm9tLmhlbHBfbWVzc2FnZXNbIGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2Z1bmN0aW9uIF0gPT09ICdvYmplY3QnICkge1xyXG5cdFx0XHRyZXR1cm4gZnJvbS5oZWxwX21lc3NhZ2VzWyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9mdW5jdGlvbiBdWyBuYW1lIF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0TGFiZWwoIG1ldGEsIGF0dHJzICkge1xyXG5cdFx0Y29uc3QgbGFiZWwgPSB7fTtcclxuXHRcdGxhYmVsLm5hbWUgPSBhdHRycy5sYWJlbDtcclxuXHRcdGlmICggYXR0cnMucmVxdWlyZWQgKSB7XHJcblx0XHRcdGxhYmVsLm1hcmsgPSBKU09OLnBhcnNlKCBtZXRhLl9qZl9hcmdzICkucmVxdWlyZWRfbWFyayB8fCAnJztcclxuXHRcdH1cclxuXHRcdHJldHVybiBsYWJlbDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB3aXRoUGxhY2Vob2xkZXIoIHNvdXJjZSwgbGFiZWwgPSAnLS0nLCB2YWx1ZSA9ICcnICkge1xyXG5cdFx0cmV0dXJuIFtcclxuXHRcdFx0eyBsYWJlbCwgdmFsdWUgfSxcclxuXHRcdFx0Li4uc291cmNlXHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGlzRW1wdHlPYmplY3QoIG9iamVjdCApIHtcclxuXHRcdHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iamVjdCAmJiBPYmplY3Qua2V5cyggb2JqZWN0ICkubGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldEZ1bmNDb25kaXRpb24gPSAoIG5hbWVGdW5jdGlvbiApID0+IHtcclxuXHRcdHJldHVybiBuZXcgRnVuY3Rpb24oIGByZXR1cm4gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgJyR7IG5hbWVGdW5jdGlvbiB9JyBdYCApO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZENvbmRpdGlvbkZvckNvbmRUeXBlID0gKCBuYW1lLCBjYWxsYWJsZSApID0+IHtcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zIHx8IHt9O1xyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9uc1sgbmFtZSBdID0gY2FsbGFibGU7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcGFyc2VDb25kaXRpb25zRnVuYyA9ICggc291cmNlICkgPT4ge1xyXG5cdFx0Y29uc3QgdHlwZXMgPSBbXTtcclxuXHJcblx0XHRzb3VyY2UuZm9yRWFjaCggdHlwZSA9PiB7XHJcblx0XHRcdGlmICggdHlwZS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCBUb29scy5nZXRGdW5jQ29uZGl0aW9uKCB0eXBlLmNvbmRpdGlvbiApKCkoIHR5cGUudmFsdWUgKSApIHtcclxuXHRcdFx0XHRcdHR5cGVzLnB1c2goIHR5cGUgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIHR5cGVzO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudCA9IG5hbWUgPT4ge1xyXG5cdGNvbnN0IGluaXRpYWxpemVDYWxsYmFja3NFdmVudCA9IG5ldyBFdmVudCggbmFtZSApO1xyXG5cdHJldHVybiAoKSA9PiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZW4gPSAoIG5hbWUsIGZ1bmMgKSA9PiB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZnVuYyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29scztcclxuXHJcbnNhdmVHbG9iYWxDb21wb25lbnQoICdKZXRGQlRvb2xzJywgeyBUb29scyB9ICk7IiwiaW1wb3J0IEFyZ3NNZXRhIGZyb20gJy4vbWV0YS9hcmd1bWVudHMnO1xyXG5pbXBvcnQgQWN0aW9uc01ldGEgZnJvbSAnLi9tZXRhL2FjdGlvbnMnO1xyXG5pbXBvcnQgUHJlc2V0TWV0YSBmcm9tICcuL21ldGEvcHJlc2V0JztcclxuaW1wb3J0IE1lc3NhZ2VzTWV0YSBmcm9tICcuL21ldGEvbWVzc2FnZXMnO1xyXG5pbXBvcnQgQ2FwdGNoYSBmcm9tIFwiLi9tZXRhL2NhcHRjaGFcIjtcclxuaW1wb3J0IEdhdGV3YXlzIGZyb20gXCIuL21ldGEvZ2F0ZXdheXNcIjtcclxuXHJcbmltcG9ydCAnLi9ibG9ja3MvZm9ybS1maWVsZHMnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3NlbmQtZW1haWwnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2luc2VydC1wb3N0JztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9yZWdpc3Rlci11c2VyJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy91cGRhdGUtdXNlcic7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvdXBkYXRlLW9wdGlvbnMnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2NhbGwtaG9vayc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvY2FsbC13ZWJob29rJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9yZWRpcmVjdC10by1wYWdlJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9tYWlsY2hpbXAnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2dldHJlc3BvbnNlJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9hY3RpdmVjYW1wYWlnbic7XHJcbmltcG9ydCB7IGV2ZW50IH0gZnJvbSBcIi4vaGVscGVycy90b29sc1wiO1xyXG5cclxuXHJcbmV2ZW50KCAnamV0LWZvcm0tYnVpbGRlci1pbml0aWFsaXplJyApKCk7XHJcblxyXG53aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLmZvckVhY2goIGZ1bmN0aW9uICggYWN0aW9uLCBpbmRleCApIHtcclxuXHRpZiAoIHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgJiYgd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uLmlkIF0gKSB7XHJcblx0XHR3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpbmRleCBdLmNhbGxiYWNrID0gd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uLmlkIF07XHJcblx0fVxyXG59ICk7XHJcblxyXG5BcmdzTWV0YSgpO1xyXG5DYXB0Y2hhKCk7XHJcbkdhdGV3YXlzKCk7XHJcbkFjdGlvbnNNZXRhKCk7XHJcblByZXNldE1ldGEoKTtcclxuTWVzc2FnZXNNZXRhKCk7XHJcblxyXG5ldmVudCggJ2pldC1mb3JtLWJ1aWxkZXItaW5pdGlhbGl6ZWQnICkoKTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tb2RhbFwiO1xyXG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuLi9jb21wb25lbnRzL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXRcIjtcclxuaW1wb3J0IFJlcGVhdGVyV2l0aFN0YXRlIGZyb20gXCIuLi9jb21wb25lbnRzL3JlcGVhdGVyLXdpdGgtc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tSUQoKSB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiA4OTk5ICkgKyAxMDAwO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0QWN0aW9ucyA9IFsge1xyXG5cdHR5cGU6ICdzZW5kX2VtYWlsJyxcclxuXHRpZDogZ2V0UmFuZG9tSUQoKSxcclxuXHRzZXR0aW5nczoge1xyXG5cdFx0c3ViamVjdDogJ05ldyBvcmRlciBvbiB3ZWJzaXRlJyxcclxuXHRcdGNvbnRlbnQ6ICdIaSBhZG1pbiFcXG5cXG5UaGVyZSBhcmUgbmV3IG9yZGVyIG9uIHlvdXIgd2Vic2l0ZS5cXG5cXG5PcmRlciBkZXRhaWxzOlxcbi0gUG9zdCBJRDogJXBvc3RfaWQlJ1xyXG5cdH1cclxufSBdO1xyXG5cclxuY29uc3QgbmV3SXRlbUNvbmRpdGlvbiA9IHtcclxuXHRleGVjdXRlOiBmYWxzZSxcclxuXHRvcGVyYXRvcjogJycsXHJcblx0ZmllbGQ6ICcnLFxyXG5cdGRlZmF1bHQ6ICcnLFxyXG59O1xyXG5cclxuY29uc3QgY29uZGl0aW9uT3BlcmF0b3JzID0gW1xyXG5cdHsgbGFiZWw6ICctLScsIHZhbHVlOiAnJyB9LFxyXG5cdHsgbGFiZWw6ICdFcXVhbCcsIHZhbHVlOiAnZXF1YWwnIH0sXHJcblx0eyBsYWJlbDogJ0dyZWF0ZXIgdGhhbicsIHZhbHVlOiAnZ3JlYXRlcicgfSxcclxuXHR7IGxhYmVsOiAnTGVzcyB0aGFuJywgdmFsdWU6ICdsZXNzJyB9LFxyXG5cdHsgbGFiZWw6ICdCZXR3ZWVuJywgdmFsdWU6ICdiZXR3ZWVuJyB9LFxyXG5cdHsgbGFiZWw6ICdJbiB0aGUgbGlzdCcsIHZhbHVlOiAnb25lX29mJyB9LFxyXG5cdHsgbGFiZWw6ICdDb250YWluIHRleHQnLCB2YWx1ZTogJ2NvbnRhaW4nIH0sXHJcbl07XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0QnV0dG9uR3JvdXAsXHJcblx0Q2FyZCxcclxuXHRDYXJkQm9keSxcclxuXHREcm9wZG93bk1lbnUsXHJcblx0TW9kYWxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0cmVnaXN0ZXJQbHVnaW5cclxufSA9IHdwLnBsdWdpbnM7XHJcblxyXG5jb25zdCB7XHJcblx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxufSA9IHdwLmVkaXRQb3N0O1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVNlbGVjdCxcclxuXHR1c2VEaXNwYXRjaFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFN0YXRlXHJcbn0gPSB3cC5jb21wb3NlO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmZ1bmN0aW9uIEFjdGlvbnNNZXRhKCkge1xyXG5cclxuXHRjb25zdCBEb2N1bWVudFNldHRpbmdQYW5lbEFjdGlvbnMgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VBY3Rpb25zKCB0cnVlICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRcdGlmICggMCA9PT0gYWN0aW9ucy5sZW5ndGggKSB7XHJcblx0XHRcdFx0c2V0QWN0aW9ucyggZGVmYXVsdEFjdGlvbnMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgW10gKTtcclxuXHJcblx0XHRjb25zdCBtb3ZlQWN0aW9uID0gKCBmcm9tSW5kZXgsIHRvSW5kZXggKSA9PiB7XHJcblxyXG5cdFx0XHR2YXIgaXRlbSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBhY3Rpb25zWyBmcm9tSW5kZXggXSApICksXHJcblx0XHRcdFx0cmVwbGFjZWRJdGVtID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnNbIHRvSW5kZXggXSApICk7XHJcblxyXG5cdFx0XHRhY3Rpb25zLnNwbGljZSggdG9JbmRleCwgMSwgaXRlbSApO1xyXG5cdFx0XHRhY3Rpb25zLnNwbGljZSggZnJvbUluZGV4LCAxLCByZXBsYWNlZEl0ZW0gKTtcclxuXHJcblx0XHRcdHNldEFjdGlvbnMoIFsgLi4uYWN0aW9ucyBdICk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBkZWxldGVBY3Rpb24gPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRhY3Rpb25zLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHRcdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zIF0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlQWN0aW9uID0gKCBpZCwga2V5LCB2YWx1ZSApID0+IHtcclxuXHRcdFx0c2V0QWN0aW9ucyggYWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRpZiAoIGFjdGlvbi5pZCA9PT0gaWQgKSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3QWN0aW9uID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGFjdGlvbiApICk7XHJcblx0XHRcdFx0XHRuZXdBY3Rpb25bIGtleSBdID0gdmFsdWU7XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3QWN0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBhY3Rpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICkgKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgWyBpc0VkaXQsIHNldEVkaXQgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cdFx0Y29uc3QgWyBlZGl0ZWRBY3Rpb24sIHNldEVkaXRlZEFjdGlvbiBdID0gdXNlU3RhdGUoIHt9ICk7XHJcblxyXG5cdFx0Y29uc3QgWyBpc0VkaXRQcm9jZXNzQWN0aW9uLCBzZXRFZGl0UHJvY2Vzc0FjdGlvbiBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblx0XHRjb25zdCBbIHByb2Nlc3NlZEFjdGlvbiwgc2V0UHJvY2Vzc2VkQWN0aW9uIF0gPSB1c2VTdGF0ZSgge30gKTtcclxuXHJcblx0XHRjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG5cdFx0XHRzZXRFZGl0KCBmYWxzZSApXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFjdGlvblR5cGVzID0gd2luZG93LmpldEZvcm1BY3Rpb25UeXBlcy5tYXAoIGZ1bmN0aW9uICggYWN0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZhbHVlOiBhY3Rpb24uaWQsXHJcblx0XHRcdFx0bGFiZWw6IGFjdGlvbi5uYW1lLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHZhciBDYWxsYmFjayA9IGZhbHNlO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuXHRcdFx0aWYgKCB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpIF0uaWQgPT09IGVkaXRlZEFjdGlvbi50eXBlICYmIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGkgXS5jYWxsYmFjayApIHtcclxuXHRcdFx0XHRDYWxsYmFjayA9IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGkgXS5jYWxsYmFjaztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHVwZGF0ZUFjdGlvblNldHRpbmdzID0gYWN0aW9uID0+IHtcclxuXHRcdFx0dXBkYXRlQWN0aW9uKCBhY3Rpb24uaWQsICdzZXR0aW5ncycsIGFjdGlvbi5zZXR0aW5ncyApO1xyXG5cdFx0XHRjbG9zZU1vZGFsKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlQWN0aW9uQ29uZGl0aW9uID0gaXRlbXMgPT4ge1xyXG5cdFx0XHR1cGRhdGVBY3Rpb24oIHByb2Nlc3NlZEFjdGlvbi5pZCwgJ2NvbmRpdGlvbnMnLCBpdGVtcyApO1xyXG5cdFx0XHRzZXRFZGl0UHJvY2Vzc0FjdGlvbiggZmFsc2UgKTtcclxuXHRcdH1cclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdFx0aWYgKCBlZGl0ZWRBY3Rpb24udHlwZSApIHtcclxuXHRcdFx0XHRzZXRFZGl0KCB0cnVlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sIFsgZWRpdGVkQWN0aW9uIF0gKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdFx0aWYgKCBwcm9jZXNzZWRBY3Rpb24udHlwZSApIHtcclxuXHRcdFx0XHRzZXRFZGl0UHJvY2Vzc0FjdGlvbiggdHJ1ZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBbIHByb2Nlc3NlZEFjdGlvbiBdICk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1hY3Rpb25zJyB9XHJcblx0XHRcdFx0dGl0bGU9eyAnUG9zdCBTdWJtaXQgQWN0aW9ucycgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBhY3Rpb25zICYmIGFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gPENhcmRcclxuXHRcdFx0XHRcdFx0a2V5PXsgYWN0aW9uLmlkIH1cclxuXHRcdFx0XHRcdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1hY3Rpb24nIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PENhcmRCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGFjdGlvbi50eXBlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBhY3Rpb25UeXBlcyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VHlwZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlQWN0aW9uKCBhY3Rpb24uaWQsICd0eXBlJywgbmV3VHlwZSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uPSdlZGl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyAnRWRpdCBBY3Rpb24nIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXRlZEFjdGlvbiggKCkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uYWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2Lz5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uPSdyYW5kb21pemUnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17ICdDb25kaXRpb25zJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcm9jZXNzZWRBY3Rpb24oICgpID0+ICggeyAuLi5hY3Rpb24gfSApICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93bk1lbnVcclxuXHRcdFx0XHRcdFx0XHRcdGljb249eyAnZWxsaXBzaXMnIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgJ0VkaXQsIG1vdmUgb3IgZGVsZXRlJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9scz17IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnVXAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdhcnJvdy11cCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAwICE9PSBpbmRleCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4IC0gMSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnRG93bicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2Fycm93LWRvd24nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiBpbmRleCA9PT0gYWN0aW9ucy5sZW5ndGgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIGFjdGlvbnMubGVuZ3RoIC0gMSApICE9PSBpbmRleCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4ICsgMSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnRGVsZXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAndHJhc2gnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUFjdGlvbiggaW5kZXggKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBY3Rpb25zKCBbXHJcblx0XHRcdFx0XHRcdFx0Li4uYWN0aW9ucyxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc2VuZF9lbWFpbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRpZDogZ2V0UmFuZG9tSUQoKSxcclxuXHRcdFx0XHRcdFx0XHRcdHNldHRpbmdzOiB7fSxcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgJysgTmV3IEFjdGlvbicgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdHsgaXNFZGl0ICYmIDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgY2xvc2VNb2RhbCB9XHJcblx0XHRcdFx0XHR0aXRsZT17ICdFZGl0IEFjdGlvbicgfVxyXG5cdFx0XHRcdFx0b25VcGRhdGVDbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlQWN0aW9uU2V0dGluZ3MoIGVkaXRlZEFjdGlvbiApXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9uQ2FuY2VsQ2xpY2s9eyBjbG9zZU1vZGFsIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IENhbGxiYWNrICYmIDxDYWxsYmFja1xyXG5cdFx0XHRcdFx0XHRzZXR0aW5ncz17IGVkaXRlZEFjdGlvbi5zZXR0aW5ncyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkYXRhICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEVkaXRlZEFjdGlvbiggcHJldiA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnByZXYsXHJcblx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nczogZGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHQ8L0FjdGlvbk1vZGFsPiB9XHJcblx0XHRcdFx0eyBpc0VkaXRQcm9jZXNzQWN0aW9uICYmIDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHRcdHRpdGxlPXsgJ0VkaXQgQWN0aW9uIENvbmRpdGlvbnMnIH1cclxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gc2V0RWRpdFByb2Nlc3NBY3Rpb24oIGZhbHNlICkgfVxyXG5cdFx0XHRcdFx0b25DYW5jZWxDbGljaz17ICgpID0+IHNldEVkaXRQcm9jZXNzQWN0aW9uKCBmYWxzZSApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlcldpdGhTdGF0ZVxyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zPXsgcHJvY2Vzc2VkQWN0aW9uLmNvbmRpdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdG5ld0l0ZW09eyBuZXdJdGVtQ29uZGl0aW9uIH1cclxuXHRcdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgdXBkYXRlQWN0aW9uQ29uZGl0aW9uIH1cclxuXHRcdFx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbD17IF9fKCAnQWRkIE5ldyBDb25kaXRpb24nICkgfVxyXG5cdFx0XHRcdFx0XHRcdGhlbHA9eyB7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogY29uZGl0aW9ucyA9PiBjb25kaXRpb25zLmxlbmd0aCA+IDEsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwU291cmNlOiB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuaGVscEZvclJlcGVhdGVycyxcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHBLZXk6ICdjb25kaXRpb25hbF9hY3Rpb24nXHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBleGVjdXRlTGFiZWwgPSBfXyggJ1RvIGZ1bGZpbGwgdGhpcyBjb25kaXRpb24sIHRoZSByZXN1bHQgb2YgdGhlIGNoZWNrIG11c3QgYmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJztcclxuXHRcdFx0XHRcdFx0XHRcdGV4ZWN1dGVMYWJlbCArPSBjdXJyZW50SXRlbS5leGVjdXRlID8gJ1RSVUUnIDogJ0ZBTFNFJztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IGV4ZWN1dGVMYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGN1cnJlbnRJdGVtLmV4ZWN1dGUgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZXhlY3V0ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiT3BlcmF0b3JcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLm9wZXJhdG9yIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgY29uZGl0aW9uT3BlcmF0b3JzIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IG9wZXJhdG9yOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGaWVsZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZmllbGQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGZpZWxkOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGaWVsZFdpdGhQcmVzZXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmRlZmF1bHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBkZWZhdWx0OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4Y2x1ZGVTb3VyY2VzPXsgWyAncXVlcnlfdmFyJyBdIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0YXJlYScgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZhbHVlIHRvIENvbXBhcmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5kZWZhdWx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBkZWZhdWx0OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvPjtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT47XHJcblx0XHRcdFx0XHR9IH1cclxuXHJcblx0XHRcdFx0PC9BY3Rpb25Nb2RhbD4gfVxyXG5cdFx0XHQ8L1BsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsPlxyXG5cdFx0KVxyXG5cdH07XHJcblxyXG5cdHJlZ2lzdGVyUGx1Z2luKCAnamYtYWN0aW9ucy1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxBY3Rpb25zLFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnNNZXRhO1xyXG4iLCJmdW5jdGlvbiBBcmdzTWV0YSgpIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0VGV4dENvbnRyb2wsXHJcblx0XHRTZWxlY3RDb250cm9sLFxyXG5cdFx0VG9nZ2xlQ29udHJvbCxcclxuXHR9ID0gd3AuY29tcG9uZW50cztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXJQbHVnaW5cclxuXHR9ID0gd3AucGx1Z2lucztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHR9ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVNlbGVjdCxcclxuXHRcdHVzZURpc3BhdGNoXHJcblx0fSA9IHdwLmRhdGE7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVN0YXRlLFxyXG5cdFx0dXNlRWZmZWN0XHJcblx0fSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsQXJncyA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcclxuXHRcdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZWRpdFBvc3RcclxuXHRcdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRcdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGEuX2pmX2FyZ3MgfHwgJ3t9JyApICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9hcmdzOiBKU09OLnN0cmluZ2lmeSggYXJncyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1hcmdzJyB9XHJcblx0XHRcdFx0dGl0bGU9eyAnRm9ybSBTZXR0aW5ncycgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgJ0ZpZWxkcyBMYXlvdXQnIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXJncy5maWVsZHNfbGF5b3V0IH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBbXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICcnLCBsYWJlbDogJy0tJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHZhbHVlOiAnY29sdW1uJywgbGFiZWw6ICdDb2x1bW4nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICdyb3cnLCBsYWJlbDogJ1JvdycgfVxyXG5cdFx0XHRcdFx0XSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRmaWVsZHNfbGF5b3V0OiBuZXdWYWxcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnUmVxdWlyZWQgTWFyaycgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhcmdzLnJlcXVpcmVkX21hcmsgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRfbWFyazogbmV3VmFsXHJcblx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnU3VibWl0IFR5cGUnIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXJncy5zdWJtaXRfdHlwZSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgW1xyXG5cdFx0XHRcdFx0XHR7IHZhbHVlOiAnJywgbGFiZWw6ICctLScgfSxcclxuXHRcdFx0XHRcdFx0eyB2YWx1ZTogJ3JlbG9hZCcsIGxhYmVsOiAnUGFnZSBSZWxvYWQnIH0sXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICdhamF4JywgbGFiZWw6ICdBSkFYJyB9XHJcblx0XHRcdFx0XHRdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdHN1Ym1pdF90eXBlOiBuZXdWYWxcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2VuYWJsZV9wcm9ncmVzcycgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnRW5hYmxlIGZvcm0gcGFnZXMgcHJvZ3Jlc3MnIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhcmdzLmVuYWJsZV9wcm9ncmVzcyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoIHByZXYgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldixcclxuXHRcdFx0XHRcdFx0XHRlbmFibGVfcHJvZ3Jlc3M6IEJvb2xlYW4oIG5ld1ZhbCApXHJcblx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLWFyZ3MtcGFuZWwnLCB7XHJcblx0XHRyZW5kZXI6IERvY3VtZW50U2V0dGluZ1BhbmVsQXJncyxcclxuXHRcdGljb246IG51bGwsXHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmdzTWV0YTtcclxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFRleHRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRyZWdpc3RlclBsdWdpblxyXG59ID0gd3AucGx1Z2lucztcclxuXHJcbmNvbnN0IHtcclxuXHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG59ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIENhcHRjaGEoKSB7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsQ2FwdGNoYSA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGVkaXRQb3N0XHJcblx0XHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0XHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9yZWNhcHRjaGEgfHwgJ3t9JyApICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9yZWNhcHRjaGE6IEpTT04uc3RyaW5naWZ5KCBhcmdzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHRcdGNvbnN0IGRhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucmVjYXB0Y2hhTGFiZWxzO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdFx0XHRcdG5hbWU9eyAnamYtY2FwdGNoYScgfVxyXG5cdFx0XHRcdHRpdGxlPXsgJ0NhcHRjaGEgU2V0dGluZ3MnIH1cclxuXHRcdFx0XHRrZXk9eyAnamYtY2FwdGNoYS1wYW5lbCcgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdlbmFibGVkJyB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGRhdGEuZW5hYmxlZCB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXJncy5lbmFibGVkIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IEJvb2xlYW4oIG5ld1ZhbCApXHJcblx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IGFyZ3MuZW5hYmxlZCAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ3NpdGVfa2V5JyB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5rZXkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGFyZ3Mua2V5IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0a2V5OiBuZXdWYWx1ZVxyXG5cdFx0XHRcdFx0XHR9ICkgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdzZWNyZXRfa2V5JyB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5zZWNyZXQgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGFyZ3Muc2VjcmV0IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0c2VjcmV0OiBuZXdWYWx1ZVxyXG5cdFx0XHRcdFx0XHR9ICkgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PHNwYW4+eyAnUmVnaXN0ZXIgcmVDQVBUQ0hBIHYzIGtleXMgJyB9XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hZG1pbi9jcmVhdGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLWNhcHRjaGEtcGFuZWwnLCB7XHJcblx0XHRyZW5kZXI6IERvY3VtZW50U2V0dGluZ1BhbmVsQ2FwdGNoYSxcclxuXHRcdGljb246IG51bGwsXHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXB0Y2hhO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCBHYXRld2F5c0VkaXRvciBmcm9tIFwiLi4vZ2F0ZXdheXMvZ2F0ZXdheXMtZWRpdG9yXCI7XHJcblxyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRUZXh0Q29udHJvbCxcclxuXHRDaGVja2JveENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRSYWRpb0NvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG5cdE1vZGFsLFxyXG5cdFRleHQsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHJlZ2lzdGVyUGx1Z2luXHJcbn0gPSB3cC5wbHVnaW5zO1xyXG5cclxuY29uc3Qge1xyXG5cdFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcbn0gPSB3cC5lZGl0UG9zdDtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcblx0dXNlRGlzcGF0Y2hcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gR2F0ZXdheXMoKSB7XHJcblxyXG5cdGlmICggISB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXMuYWxsb3dlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdhdGV3YXlzRGF0YSA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5nYXRld2F5cztcclxuXHJcblx0Y29uc3QgRG9jdW1lbnRTZXR0aW5nUGFuZWxHYXRld2F5cyA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcclxuXHRcdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZWRpdFBvc3RcclxuXHRcdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRcdGNvbnN0IGdhdGV3YXlzUHJvcHMgPSB7XHJcblx0XHRcdGFjdGl2ZUFjdGlvbnM6IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FjdGlvbnMgKSxcclxuXHRcdFx0Z2F0ZXdheXNBcmdzOiBKU09OLnBhcnNlKCBtZXRhLl9qZl9nYXRld2F5cyB8fCAne30nICksXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IFsgZ2F0ZXdheSwgc2V0R2F0ZXdheSBdID0gdXNlU3RhdGUoIGdhdGV3YXlzUHJvcHMuZ2F0ZXdheXNBcmdzLmdhdGV3YXkgKTtcclxuXHJcblx0XHRjb25zdCBbIGlzRWRpdCwgc2V0RWRpdCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdFx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0c2V0RWRpdCggZmFsc2UgKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZ2V0R2F0ZXdheUxhYmVsID0gKCB0eXBlICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKCBnYXRld2F5c0RhdGEubGlzdC5maW5kKCBlbCA9PiBlbC52YWx1ZSA9PT0gdHlwZSApLmxhYmVsICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNhdmVBcmdzID0gbmV3QXJncyA9PiB7XHJcblx0XHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0X2pmX2dhdGV3YXlzOiBKU09OLnN0cmluZ2lmeSggbmV3QXJncyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2F2ZUdhdGV3YXkgPSB0eXBlID0+IHtcclxuXHRcdFx0Z2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MuZ2F0ZXdheSA9IHR5cGU7XHJcblxyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9nYXRld2F5czogSlNPTi5zdHJpbmdpZnkoIGdhdGV3YXlzUHJvcHMuZ2F0ZXdheXNBcmdzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlzc2V0QWN0aW9uVHlwZSA9IHR5cGUgPT4ge1xyXG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggZ2F0ZXdheXNQcm9wcy5hY3RpdmVBY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGlzRGlzYWJsZWQgPSAhIGlzc2V0QWN0aW9uVHlwZSggJ2luc2VydF9wb3N0JyApO1xyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0XHRzYXZlR2F0ZXdheSggZ2F0ZXdheSApO1xyXG5cdFx0fSwgWyBnYXRld2F5IF0gKTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHRcdFx0XHRuYW1lPXsgJ2pmLWdhdGV3YXlzJyB9XHJcblx0XHRcdFx0dGl0bGU9eyAnR2F0ZXdheXMgU2V0dGluZ3MnIH1cclxuXHRcdFx0XHRrZXk9eyAnamYtZ2F0ZXdheXMtcGFuZWwnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxSYWRpb0NvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdnYXRld2F5c19yYWRpb19jb250cm9sJyB9XHJcblx0XHRcdFx0XHRzZWxlY3RlZD17IGdhdGV3YXkgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IFtcclxuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogJ25vbmUnIH0sXHJcblx0XHRcdFx0XHRcdC4uLmdhdGV3YXlzRGF0YS5saXN0XHJcblx0XHRcdFx0XHRdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0R2F0ZXdheSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7ICggZ2F0ZXdheSAmJiAnbm9uZScgIT09IGdhdGV3YXkgKSAmJiA8PlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0RWRpdCggdHJ1ZSApIH1cclxuXHRcdFx0XHRcdFx0aWNvbj17ICdhZG1pbi10b29scycgfVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46ICcxZW0gMCdcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsgaXNEaXNhYmxlZCB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgX18oICdFZGl0JyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0eyBpc0Rpc2FibGVkICYmIDxwPnsgX18oICdQbGVhc2UgYWRkIFxcYEluc2VydC9VcGRhdGUgUG9zdFxcYCBhY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9wPiB9XHJcblx0XHRcdFx0PC8+IH1cclxuXHRcdFx0XHR7IGlzRWRpdCAmJiAoXHJcblx0XHRcdFx0XHQ8QWN0aW9uTW9kYWxcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBjbG9zZU1vZGFsIH1cclxuXHRcdFx0XHRcdFx0dGl0bGU9eyBgRWRpdCAkeyBnZXRHYXRld2F5TGFiZWwoIGdhdGV3YXkgKSB9IFNldHRpbmdzYCB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPD5cclxuXHRcdFx0XHRcdFx0XHQ8R2F0ZXdheXNFZGl0b3JcclxuXHRcdFx0XHRcdFx0XHRcdHsgLi4uZ2F0ZXdheXNQcm9wcyB9XHJcblx0XHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtcz17IHNhdmVBcmdzIH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHRcdFx0PC9BY3Rpb25Nb2RhbD4gKSB9XHJcblx0XHRcdDwvUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw+XHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cmVnaXN0ZXJQbHVnaW4oICdqZi1nYXRld2F5cy1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxHYXRld2F5cyxcclxuXHRcdGljb246IG51bGwsXHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYXRld2F5cztcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlcygpIHtcclxuXHRjb25zdCB7XHJcblx0XHRUb2dnbGVDb250cm9sLFxyXG5cdFx0VGV4dENvbnRyb2xcclxuXHR9ID0gd3AuY29tcG9uZW50cztcclxuXHJcblx0Y29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXJQbHVnaW5cclxuXHR9ID0gd3AucGx1Z2lucztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHR9ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVNlbGVjdCxcclxuXHRcdHVzZURpc3BhdGNoXHJcblx0fSA9IHdwLmRhdGE7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVN0YXRlLFxyXG5cdFx0dXNlRWZmZWN0XHJcblx0fSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsTWVzc2FnZXMgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbWV0YSA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRlZGl0UG9zdFxyXG5cdFx0fSA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XHJcblxyXG5cdFx0Y29uc3QgZ2V0RGVmYXVsdE1lc3NhZ2VzVmFsdWVzID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBkZWZhdWx0cyA9IHt9O1xyXG5cdFx0XHRPYmplY3QuZW50cmllcyggSmV0Rm9ybUVkaXRvckRhdGEubWVzc2FnZXNEZWZhdWx0ICkuZm9yRWFjaCggKCBbIHR5cGUsIGRhdGEgXSApID0+IHtcclxuXHRcdFx0XHRkZWZhdWx0c1sgdHlwZSBdID0gZGF0YS52YWx1ZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IFsgbWVzc2FnZXMsIHNldE1lc3NhZ2VzIF0gPSB1c2VTdGF0ZSggKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBtZXRhTWVzc2FnZXMgPSBKU09OLnBhcnNlKCBtZXRhLl9qZl9tZXNzYWdlcyB8fCAne30nICk7XHJcblx0XHRcdHJldHVybiBUb29scy5pc0VtcHR5T2JqZWN0KCBtZXRhTWVzc2FnZXMgKSA/IGdldERlZmF1bHRNZXNzYWdlc1ZhbHVlcygpIDogbWV0YU1lc3NhZ2VzO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9tZXNzYWdlczogSlNPTi5zdHJpbmdpZnkoIG1lc3NhZ2VzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoIHR5cGUsIHZhbHVlICkgPT4ge1xyXG5cdFx0XHRzZXRNZXNzYWdlcyggcHJldiA9PiAoIHsgLi4ucHJldiwgWyB0eXBlIF06IHZhbHVlIH0gKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdFx0XHRcdG5hbWU9eyAnamYtbWVzc2FnZXMnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdHZW5lcmFsIE1lc3NhZ2VzIFNldHRpbmdzJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IE9iamVjdC5lbnRyaWVzKCBtZXNzYWdlcyApLm1hcCggKCBbIHR5cGUsIHRleHQgXSwgaWQgKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gSmV0Rm9ybUVkaXRvckRhdGEubWVzc2FnZXNEZWZhdWx0WyB0eXBlIF0gJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IHR5cGUgKyBpZCB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgSmV0Rm9ybUVkaXRvckRhdGEubWVzc2FnZXNEZWZhdWx0WyB0eXBlIF0ubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHRleHQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlTWVzc2FnZSggdHlwZSwgbmV3VmFsdWUgKSB9XHJcblx0XHRcdFx0XHQvPjtcclxuXHRcdFx0XHR9ICkgfVxyXG5cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLW1lc3NhZ2VzLXBhbmVsJywge1xyXG5cdFx0cmVuZGVyOiBEb2N1bWVudFNldHRpbmdQYW5lbE1lc3NhZ2VzLFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzOyIsImltcG9ydCBUb29scyBmcm9tICcuLi9oZWxwZXJzL3Rvb2xzJztcclxuaW1wb3J0IEdlbmVyYWxQcmVzZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJlc2V0cy9nZW5lcmFsLXByZXNldFwiO1xyXG5pbXBvcnQgeyBnZXRBdmFpbGFibGVGaWVsZHMgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBQcmVzZXRNZXRhKCkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRUb2dnbGVDb250cm9sLFxyXG5cdH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlclBsdWdpblxyXG5cdH0gPSB3cC5wbHVnaW5zO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdH0gPSB3cC5lZGl0UG9zdDtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU2VsZWN0LFxyXG5cdFx0dXNlRGlzcGF0Y2hcclxuXHR9ID0gd3AuZGF0YTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU3RhdGUsXHJcblx0XHR1c2VFZmZlY3RcclxuXHR9ID0gd3AuZWxlbWVudDtcclxuXHJcblx0Y29uc3QgRG9jdW1lbnRTZXR0aW5nUGFuZWxQcmVzZXQgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbWV0YSA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRlZGl0UG9zdFxyXG5cdFx0fSA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XHJcblxyXG5cdFx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YS5famZfcHJlc2V0IHx8ICd7fScgKSApO1xyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cclxuXHRcdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRfamZfcHJlc2V0OiBKU09OLnN0cmluZ2lmeSggYXJncyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEF2YWlsYWJsZUZpZWxkcygpO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdFx0XHRcdG5hbWU9eyAnamYtcHJlc2V0JyB9XHJcblx0XHRcdFx0dGl0bGU9eyAnUHJlc2V0IFNldHRpbmdzJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2VuYWJsZV9wcmVzZXQnIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgJ0VuYWJsZScgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGFyZ3MuZW5hYmxlZCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgJ0NoZWNrIHRoaXMgdG8gZW5hYmxlIGdsb2JhbCBmb3JtIHByZXNldCcgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogbmV3VmFsXHJcblx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IGFyZ3MuZW5hYmxlZCAmJiA8R2VuZXJhbFByZXNldFxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhcmdzIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdC4uLm5ld1ZhbCxcclxuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBwcmV2QXJncy5lbmFibGVkXHJcblx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRhdmFpbGFibGVGaWVsZHM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdDwvUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw+XHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cmVnaXN0ZXJQbHVnaW4oICdqZi1wcmVzZXQtcGFuZWwnLCB7XHJcblx0XHRyZW5kZXI6IERvY3VtZW50U2V0dGluZ1BhbmVsUHJlc2V0LFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXNldE1ldGE7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQVVBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBc0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFjQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFHQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFjQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7OztBQzdMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFPQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQU1BO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaUJBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBbEVBO0FBZEE7QUE4RkE7Ozs7Ozs7Ozs7OztBQzdNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBbkJBO0FBMEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQWJBO0FBb0JBO0FBQ0E7QUFDQTtBQUhBO0FBdENBO0FBcENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBYUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFhQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOzs7O0FBbEdBO0FBQ0E7QUFvR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFDQTtBQVNBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFGQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUE1Q0E7QUFzREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBOzs7QUFHQTtBQUVBOzs7O0FBR0E7QUFFQTs7OztBQU1BO0FBRkE7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBR0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQWJBO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7Ozs7QUFwSkE7QUFDQTtBQXFKQTs7Ozs7Ozs7Ozs7O0FDOUtBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQVVBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBSkE7QUFTQTs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFFQTtBQURBO0FBTUE7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBOzs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUtBO0FBQ0E7QUFVQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFFQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFzQkE7O0FBdEJBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUVBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQU1BO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQU9BO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFLQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUdBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFVQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUtBO0FBS0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBUUE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFFQTtBQURBO0FBTUE7QUFEQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVhBO0FBZ0JBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBSEE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7Ozs7Ozs7Ozs7OztBQzFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBT0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBT0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBWUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUNBO0FBTUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQVlBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFjQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFjQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7Ozs7Ozs7Ozs7OztBQzVOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBTUE7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBS0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBSUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFIQTtBQVFBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFLQTtBQU9BO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQVFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFhQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVdBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBSkE7QUFTQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBU0E7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUpBO0FBY0E7Ozs7QUE5RUE7QUFDQTtBQWdGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWhDQTtBQUNBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQURBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQUNBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQWNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVlBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBV0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7OztBQUdBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQXZCQTtBQUNBO0FBcUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVRBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVkE7QUFwQkE7QUFtQ0E7QUFFQTtBQUVBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUF2QkE7QUFDQTtBQW1DQTtBQUNBO0FBaExBO0FBbUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFnQkE7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBdEJBO0FBdUJBO0FBQUE7QUF2QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFXQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFqRUE7QUFDQTtBQTlIQTtBQUFBO0FBQUE7QUE4TUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UkE7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBU0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbkRBO0FBQUE7QUFBQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBNURBO0FBQUE7QUFBQTtBQStEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQTVFQTtBQUFBO0FBQUE7QUErRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBREE7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFKQTtBQW9CQTtBQUNBO0FBM0tBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBSUE7Ozs7QUFyRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFFQTs7OztBQVFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBREE7QUFHQTtBQUFBO0FBdUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQW5CQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVVBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFvQkE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBbUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFLQTtBQUNBO0FBMUhBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVlBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVdBO0FBRUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQS9GQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFUQTtBQVlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBdEJBO0FBMEJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFyRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFTQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBaENBO0FBQUE7QUFBQTtBQWtDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUEvQ0E7QUFBQTtBQUFBO0FBa0RBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBSEE7QUFjQTtBQUNBO0FBbkpBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVNBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFTQTtBQUVBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQThCQTtBQUlBO0FBbENBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBeEZBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBS0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVdBO0FBQ0E7QUE1RkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFRQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBdkJBO0FBQUE7QUFBQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQWxDQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQVlBO0FBQ0E7QUFyRkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQU5BO0FBU0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBc0JBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQWFBO0FBQ0E7QUE3RUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQWFBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBTkE7QUFXQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBV0E7QUFJQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBV0E7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFYQTtBQWNBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTs7Ozs7Ozs7Ozs7O0FDaFNBO0FBQUE7QUFBQTtBQUdBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUtBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBS0E7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBOUJBO0FBaUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQTBDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBY0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFNQTtBQUZBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXhCQTtBQW9DQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFYQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBU0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQWJBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFLQTtBQUZBO0FBQ0E7QUFJQTtBQUlBO0FBTUE7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBR0E7QUFhQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQU1BO0FBRkE7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBUEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF5QkE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF1QkE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU9BO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9