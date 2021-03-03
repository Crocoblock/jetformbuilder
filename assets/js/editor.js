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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'blockName', 'attrHelp'],
  example: {
    attributes: {
      label: 'Checkbox Field',
      field_options: [{
        label: 'First Option',
        value: ''
      }, {
        label: 'Second Option',
        value: ''
      }, {
        label: 'Third Option',
        value: ''
      }]
    }
  }
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/text-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"text\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"65\\\" height=\\\"64\\\" viewBox=\\\"0 0 65 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M44.9148 29.2883L45.8495 29.6436L44.9148 29.2883L33.1316 60.2883C32.6359 61.5925 33.594 63 34.9975 63H37.3174C38.1614 63 38.9118 62.4689 39.1962 61.6766L41.812 54.3874H54.1699L56.827 61.6853C57.1138 62.4731 57.8621 63 58.7027 63H61.0025C62.4065 63 63.3647 61.5916 62.868 60.2872L51.0636 29.2872C50.7691 28.5137 50.028 28 49.1982 28H46.7806C45.9503 28 45.209 28.5142 44.9148 29.2883ZM52.1579 48.8063H43.8411C43.8412 48.806 43.8413 48.8056 43.8414 48.8053L47.9911 37.3112L52.1575 48.8053C52.1577 48.8056 52.1578 48.806 52.1579 48.8063Z\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"field_type\":{\"type\":\"string\",\"default\":\"text\"},\"enable_input_mask\":{\"type\":\"boolean\",\"default\":false},\"mask_type\":{\"type\":\"string\",\"default\":\"\"},\"input_mask\":{\"type\":\"string\",\"default\":\"\"},\"mask_visibility\":{\"type\":\"string\",\"default\":\"always\"},\"mask_placeholder\":{\"type\":\"string\",\"default\":\"_\"},\"minlength\":{\"type\":\"number\",\"default\":\"\"},\"maxlength\":{\"type\":\"number\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"},\"className\":{\"type\":\"string\",\"default\":\"\"}}}");

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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
  className: name.replace('/', '-'),
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
/* harmony import */ var _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/select-radio-chekc-options */ "./editor/blocks/select-radio-chekc-options.js");
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

    full_label.push(getLabelProp(_blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_1__["listFrom"].find(function (option) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvYmxvY2std3JhcHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jYWxjdWxhdGVkLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jYWxjdWxhdGVkLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NoZWNrYm94LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29uZGl0aW9uYWwtYmxvY2svZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29uZGl0aW9uYWwtYmxvY2svc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZGVmYXVsdC1tZXRhLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZmllbGQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGUtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGUtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9kYXRldGltZS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZXRpbWUtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9mb3JtLWJyZWFrLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9mb3JtLWJyZWFrLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9ncm91cC1icmVhay1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZ3JvdXAtYnJlYWstZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oZWFkaW5nLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oZWFkaW5nLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGVscC1tZXNzYWdlcy1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oaWRkZW4tZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hpZGRlbi1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hpZGRlbi1maWVsZC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbWVkaWEtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL21lZGlhLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbWVkaWEtZmllbGQvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL251bWJlci1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbnVtYmVyLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmFkaW8tZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhZGlvLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmFuZ2UtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhbmdlLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmVwZWF0ZXItZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmVwZWF0ZXItZmllbGQvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zZWxlY3QtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC1yYWRpby1jaGVrYy1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc3VibWl0LWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zdWJtaXQtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0LWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dC1maWVsZC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dGFyZWEtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHRhcmVhLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGltZS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGltZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3d5c2l3eWctZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3d5c2l3eWctZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tZmllbGRzLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tZ2VuZXJhdG9ycy1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vZnJvbS1tYW51YWwtZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tcG9zdC10ZXJtcy1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zb3VyY2VzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2ZpZWxkLXdpdGgtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2ZpZWxkLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvbWFjcm9zLWluc2VydGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9wcmVzZXRzL2dlbmVyYWwtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9wcmVzZXRzL3ByZXNldC1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvcmVwZWF0ZXItd2l0aC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9hY3RpdmVjYW1wYWlnbi5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2Jhc2UtYWN0aW9uLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwtd2ViaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2dldHJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvaW5zZXJ0LXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9pbnRlZ3JhdGlvbi1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9tYWlsY2hpbXAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9yZWRpcmVjdC10by1wYWdlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvcmVnaXN0ZXItdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3NlbmQtZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy91cGRhdGUtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3VwZGF0ZS11c2VyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9nYXRld2F5LWFjdGlvbi1hdHRydWJpdGVzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9nYXRld2F5cy1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2dhdGV3YXlzL3BheXBhbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvaGVscGVycy9hY3Rpb24taGVscGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2hlbHBlcnMvZ2F0ZXdheS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2hlbHBlcnMvaG9va3MtaGVscGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9oZWxwZXJzL3Rvb2xzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9tYWluLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9tZXRhL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvYXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9tZXRhL2NhcHRjaGEuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvZ2F0ZXdheXMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvcHJlc2V0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZWRpdG9yL21haW4uanNcIik7XG4iLCJpbXBvcnQgeyBqZmJIb29rcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlc0NvbmZpZyB9IGZyb20gXCIuL2hlbHAtbWVzc2FnZXMtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2l0aEN1c3RvbVByb3BzKCBibG9jayApIHtcclxuXHRjb25zdCB7IGVkaXQ6IEVkaXRDb21wb25lbnQgfSA9IGJsb2NrLnNldHRpbmdzO1xyXG5cclxuXHRsZXQgX3BsdWdpbnMgPSB7fTtcclxuXHJcblx0aWYgKCAndXNlRWRpdFByb3BzJyBpbiBibG9jay5zZXR0aW5ncyApIHtcclxuXHRcdGNvbnN0IHsgdXNlRWRpdFByb3BzIH0gPSBibG9jay5zZXR0aW5ncztcclxuXHJcblx0XHR1c2VFZGl0UHJvcHMuZm9yRWFjaCggbmFtZSA9PiB7XHJcblx0XHRcdGNvbnN0IGVkaXRQcm9wID0gZWRpdFByb3BzLmZpbmQoIHByb3AgPT4gbmFtZSA9PT0gcHJvcC5uYW1lICk7XHJcblxyXG5cdFx0XHRpZiAoIGVkaXRQcm9wICkge1xyXG5cdFx0XHRcdF9wbHVnaW5zWyBuYW1lIF0gPSBlZGl0UHJvcC5jYWxsYWJsZSggYmxvY2sgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGRlbGV0ZSBibG9jay5zZXR0aW5ncy51c2VFZGl0UHJvcHM7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcHJvcHMgPT4gPEVkaXRDb21wb25lbnQgeyAuLi5wcm9wcyB9IGVkaXRQcm9wcz17IHsgLi4uX3BsdWdpbnMgfSB9Lz47XHJcbn1cclxuXHJcbmNvbnN0IGdldEhlbHBJbnN0YW5jZSA9IGJsb2NrID0+IHtcclxuXHRjb25zdCBtZXNzYWdlcyA9IHt9O1xyXG5cclxuXHRtZXNzYWdlc0NvbmZpZy5mb3JFYWNoKCBtc2cgPT4ge1xyXG5cdFx0aWYgKCBtc2cudG8uaW5jbHVkZXMoIGJsb2NrLm5hbWUgKSAmJiBtc2cubWVzc2FnZSApIHtcclxuXHRcdFx0bWVzc2FnZXNbIG1zZy5hdHRyaWJ1dGUgXSA9IG1zZztcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiAoIGF0dHJpYnV0ZSwgYXR0cmlidXRlcyA9IHt9ICkgPT4ge1xyXG5cdFx0aWYgKCAhICggYXR0cmlidXRlIGluIG1lc3NhZ2VzICkgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHRcdGNvbnN0IGl0ZW0gPSBtZXNzYWdlc1sgYXR0cmlidXRlIF07XHJcblxyXG5cdFx0aWYgKCAnY29uZGl0aW9ucycgaW4gaXRlbSApIHtcclxuXHRcdFx0Zm9yICggY29uc3QgYXR0ck5hbWUgaW4gaXRlbS5jb25kaXRpb25zICkge1xyXG5cdFx0XHRcdGlmICggISAoIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMgKSB8fCBpdGVtLmNvbmRpdGlvbnNbIGF0dHJOYW1lIF0gIT09IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXRlbS5tZXNzYWdlO1xyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGVkaXRQcm9wcyA9IGpmYkhvb2tzLmFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5lZGl0UHJvcHMnLCBbXHJcblx0e1xyXG5cdFx0bmFtZTogJ3VuaXFLZXknLFxyXG5cdFx0Y2FsbGFibGU6IGJsb2NrID0+ICggc3VmZml4ID0+IGAkeyBibG9jay5uYW1lIH0vJHsgc3VmZml4IH1gIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdibG9ja05hbWUnLFxyXG5cdFx0Y2FsbGFibGU6IGJsb2NrID0+IGJsb2NrLm5hbWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdhdHRySGVscCcsXHJcblx0XHRjYWxsYWJsZTogZ2V0SGVscEluc3RhbmNlXHJcblx0fVxyXG5dICk7IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcbmltcG9ydCB7XHJcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2Nrc1xyXG59IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IGJsb2NrID0gJ2pldC1mb3Jtcy9jYWxjdWxhdGVkLWZpZWxkJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0Q29sb3JQYWxldHRlLFxyXG5cdFJpY2hUZXh0LFxyXG5cdEVkaXRhYmxlLFxyXG5cdE1lZGlhVXBsb2FkLFxyXG5cdFNlcnZlclNpZGVSZW5kZXIsXHJcblx0QmxvY2tDb250cm9scyxcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRQYW5lbENvbG9yLFxyXG5cdEljb25CdXR0b24sXHJcblx0VGV4dENvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0QnV0dG9uLFxyXG5cdFBvcG92ZXIsXHJcblx0UmFuZ2VDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHREaXNhYmxlZCxcclxuXHRUb29sYmFyR3JvdXAsXHJcblx0VG9vbGJhckl0ZW0sXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcblxyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCBoZWxwID0ge1xyXG5cdGNhbGNfaGlkZGVuOiBfXyggJ0NoZWNrIHRoaXMgdG8gaGlkZSBjYWxjdWxhdGVkIGZpZWxkJyApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0Q2FsY3VsYXRlZCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7XHJcblx0XHRcdGNhbGNfZm9ybXVsYTogYCR7IGF0dHJpYnV0ZXMuY2FsY19mb3JtdWxhIHx8ICcnIH0lRklFTEQ6OiR7IG1hY3JvcyB9JWBcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdGNvbnN0IHRvZ2dsZVBvcG92ZXIgPSAoKSA9PiB7XHJcblx0XHRzZXRGb3JtRmllbGRzKCBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCgpICk7XHJcblx0XHRzZXRTaG93TWFjcm9zKCB0b2dnbGUgPT4gISB0b2dnbGUgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbIGZvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHMgXSA9IHVzZVN0YXRlKCBbXSApO1xyXG5cdGNvbnN0IFsgc2hvd01hY3Jvcywgc2V0U2hvd01hY3JvcyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnc2hvdy1wb3BvdmVyJyApIH1cclxuXHRcdFx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdGljb249eyBzaG93TWFjcm9zID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0b2dnbGVQb3BvdmVyIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgc2hvd01hY3JvcyAmJiA8UG9wb3ZlclxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BvcG92ZXInICkgfVxyXG5cdFx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IGZvcm1GaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XHJcblx0XHRcdFx0XHRcdHsgZm9ybUZpZWxkcy5tYXAoICggeyB2YWx1ZSB9LCBpbmRleCApID0+IDxkaXYga2V5PXsgdW5pcUtleSggYGZvcm1GaWVsZHMtJHsgaW5kZXggfWAgKSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnNlcnRNYWNyb3MoIHZhbHVlIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHQ+eyAnJUZJRUxEOjonICsgdmFsdWUgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdFx0PC9Qb3BvdmVyPiB9XHJcblx0XHRcdDwvVG9vbGJhckdyb3VwPlxyXG5cdFx0PC9CbG9ja0NvbnRyb2xzPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tZ2VuZXJhbCcgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX3Jvdy1ub3RpY2VcIj5cclxuXHRcdFx0XHRcdHsgX18oICdTZXQgbWF0aCBmb3JtdWxhIHRvIGNhbGN1bGF0ZSBmaWVsZCB2YWx1ZS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICdGb3IgZXhhbXBsZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0JUZJRUxEOjpxdWFudGl0eSUqJU1FVEE6OnByaWNlJTxici8+PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICdXaGVyZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdC1cclxuXHRcdFx0XHRcdHsgX18oICclRklFTEQ6OnF1YW50aXR5JSAtIG1hY3JvcyBmb3IgZm9ybSBmaWVsZCB2YWx1ZS4gXCJxdWFudGl0eVwiIC0gaXMgYSBmaWVsZCBuYW1lIHRvIGdldCB2YWx1ZSBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHQtXHJcblx0XHRcdFx0XHR7IF9fKCAnJU1FVEE6OnByaWNlJSAtIG1hY3JvcyBmb3IgY3VycmVudCBwb3N0IG1ldGEgdmFsdWUuIFwicHJpY2VcIiAtIGlzIGEgbWV0YSBrZXkgdG8gZ2V0IHZhbHVlIGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0RlY2ltYWwgUGxhY2VzIE51bWJlcicgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRrZXk9J3ByZWNpc2lvbidcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcmVjaXNpb24gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHByZWNpc2lvbjogcGFyc2VJbnQoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nY2FsY19wcmVmaXgnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlZCBWYWx1ZSBQcmVmaXgnICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfcHJlZml4IH1cclxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ0ZvciBzcGFjZSBiZWZvcmUgb3IgYWZ0ZXIgdGV4dCB1c2U6ICZuYnNwOycgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY19wcmVmaXg6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2NhbGNfc3VmZml4J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgVmFsdWUgU3VmZml4JyApIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX3N1ZmZpeCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgX18oICdGb3Igc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHRleHQgdXNlOiAmbmJzcDsnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGNfc3VmZml4OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnY2FsY19oaWRkZW4nIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdIaWRkZW4nICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuY2FsY19oaWRkZW4gfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAuY2FsY19oaWRkZW4gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XHJcblx0XHRcdFx0XHRcdFx0Y2FsY19oaWRkZW46IEJvb2xlYW4oIG5ld1ZhbCApLFxyXG5cdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLWFkdmFuY2VkJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR2YWx1ZUlmRW1wdHlMYWJlbD17ICdDYWxjdWxhdGVkIEZpZWxkJyB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IHByb3BzLmlzU2VsZWN0ZWQgJiYgPFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PVwiY2FsY19mb3JtdWxhXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGNfZm9ybXVsYTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnIH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdjYWxjLXByZWZpeCcgfT57IGF0dHJpYnV0ZXMuY2FsY19wcmVmaXggfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2FsYy1mb3JtdWxhJyB9PnsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2FsYy1zdWZmaXgnIH0+eyBhdHRyaWJ1dGVzLmNhbGNfc3VmZml4IH08L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IEVkaXRDYWxjdWxhdGVkIGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0NhbGN1bGF0ZWQgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0ZGVzY3JpcHRpb246IF9fKCAnQ2FsY3VsYXRlIGFuZCBkaXNwbGF5IHlvdXIgbnVtYmVyIHZhbHVlcycgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEVkaXRDYWxjdWxhdGVkLFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTtcclxuIiwiaW1wb3J0IHsgU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuXHJcbmNvbnN0IGxvY2FsaXplZCA9IHdpbmRvdy5KZXRGb3JtQ2hlY2tib3hGaWVsZERhdGE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveEVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLXRvb2xiYXInICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1nZW5lcmFsJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tYWR2YW5jZWQnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2sgeyAuLi5wcm9wcyB9IC8+XHJcblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJyApIH1cclxuXHRcdFx0XHRzY3JpcHREYXRhPXsgbG9jYWxpemVkIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgQ2hlY2tib3hFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0NoZWNrYm94IEZpZWxkJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogQ2hlY2tib3hFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnLCAnYXR0ckhlbHAnIF0sXHJcblx0ZXhhbXBsZToge1xyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogJ0NoZWNrYm94IEZpZWxkJyxcclxuXHRcdFx0ZmllbGRfb3B0aW9uczogW1xyXG5cdFx0XHRcdHsgbGFiZWw6ICdGaXJzdCBPcHRpb24nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XHR7IGxhYmVsOiAnU2Vjb25kIE9wdGlvbicsIHZhbHVlOiAnJyB9LFxyXG5cdFx0XHRcdHsgbGFiZWw6ICdUaGlyZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi8uLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tb2RhbFwiO1xyXG5pbXBvcnQgUmVwZWF0ZXJXaXRoU3RhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVwZWF0ZXItd2l0aC1zdGF0ZVwiO1xyXG5pbXBvcnQgRmllbGRXaXRoUHJlc2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpZWxkLXdpdGgtcHJlc2V0XCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXRcIjtcclxuaW1wb3J0IHtcclxuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdGdldElubmVyQmxvY2tzXHJcbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCbG9ja0NvbnRyb2xzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdElubmVyQmxvY2tzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdFRvb2xiYXJHcm91cCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgY29uZGl0aW9uID0ge1xyXG5cdHR5cGU6ICdoaWRlJyxcclxuXHRmaWVsZDogJycsXHJcblx0b3BlcmF0b3I6ICcnLFxyXG5cdHZhbHVlOiAnJyxcclxuXHRzZXRfdmFsdWU6ICcnLFxyXG59O1xyXG5cclxuY29uc3QgY29uZGl0aW9uVHlwZXMgPSBbXHJcblx0eyBsYWJlbDogJy0tJywgdmFsdWU6ICcnIH0sXHJcblx0e1xyXG5cdFx0bGFiZWw6ICdIaWRlIHRoaXMgZmllbGQgaWYuLi4nLFxyXG5cdFx0dmFsdWU6ICdoaWRlJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGFiZWw6ICdTaG93IHRoaXMgZmllbGQgaWYuLi4nLFxyXG5cdFx0dmFsdWU6ICdzaG93J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0bGFiZWw6ICdTZXQgdmFsdWUgZm9yIHRoaXMgZmllbGQgaWYuLi4nLFxyXG5cdFx0dmFsdWU6ICdzZXRfdmFsdWUnLFxyXG5cdFx0Y29uZGl0aW9uOiAnaXNTaW5nbGVGaWVsZCcsXHJcblx0fSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbmRpdGlvbk9wZXJhdG9ycyA9IFtcclxuXHR7IGxhYmVsOiAnLS0nLCB2YWx1ZTogJycgfSxcclxuXHR7IGxhYmVsOiAnRXF1YWwnLCB2YWx1ZTogJ2VxdWFsJyB9LFxyXG5cdHsgbGFiZWw6ICdHcmVhdGVyIHRoYW4nLCB2YWx1ZTogJ2dyZWF0ZXInIH0sXHJcblx0eyBsYWJlbDogJ0xlc3MgdGhhbicsIHZhbHVlOiAnbGVzcycgfSxcclxuXHR7IGxhYmVsOiAnQmV0d2VlbicsIHZhbHVlOiAnYmV0d2VlbicgfSxcclxuXHR7IGxhYmVsOiAnSW4gdGhlIGxpc3QnLCB2YWx1ZTogJ29uZV9vZicgfSxcclxuXHR7IGxhYmVsOiAnQ29udGFpbiB0ZXh0JywgdmFsdWU6ICdjb250YWluJyB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmRpdGlvbmFsQmxvY2tFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRjbGllbnRJZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdFRvb2xzLmFkZENvbmRpdGlvbkZvckNvbmRUeXBlKCAnaXNTaW5nbGVGaWVsZCcsICgpID0+IHtcclxuXHRcdHJldHVybiAxID09PSBnZXRJbm5lckJsb2NrcyggY2xpZW50SWQgKS5sZW5ndGg7XHJcblx0fSApXHJcblxyXG5cdGNvbnN0IGdldENvbmRpdGlvblR5cGVzID0gVG9vbHMucGFyc2VDb25kaXRpb25zRnVuYyggY29uZGl0aW9uVHlwZXMgKTtcclxuXHRjb25zdCBbIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmFuZG9taXplJyApIH1cclxuXHRcdFx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdGljb249J3JhbmRvbWl6ZSdcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TW9kYWwoIHRydWUgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Ub29sYmFyR3JvdXA+XHJcblx0XHQ8L0Jsb2NrQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxJbm5lckJsb2Nrc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdjb25kaXRpb25hbC1maWVsZHMnICkgfVxyXG5cdFx0XHRcdHJlbmRlckFwcGVuZGVyPXsgKCkgPT4gPElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIga2V5PXsgdW5pcUtleSggJ0J1dHRvbkJsb2NrQXBwZW5kZXInICkgfS8+IH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PixcclxuXHRcdHNob3dNb2RhbCAmJiA8QWN0aW9uTW9kYWxcclxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxyXG5cdFx0XHR0aXRsZT1cIkNvbmRpdGlvbmFsIExvZ2ljXCJcclxuXHRcdD5cclxuXHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8UmVwZWF0ZXJXaXRoU3RhdGVcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUmVwZWF0ZXJXaXRoU3RhdGUnICkgfVxyXG5cdFx0XHRcdGl0ZW1zPXsgYXR0cmlidXRlcy5jb25kaXRpb25zIH1cclxuXHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdG5ld0l0ZW09eyBjb25kaXRpb24gfVxyXG5cdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgY29uZGl0aW9ucyA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbmRpdGlvbnMgfSApIH1cclxuXHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbD17IF9fKCBcIk5ldyBDb25kaXRpb25cIiApIH1cclxuXHRcdFx0XHRoZWxwPXsge1xyXG5cdFx0XHRcdFx0aGVscFZpc2libGU6IGNvbmRpdGlvbnMgPT4gY29uZGl0aW9ucy5sZW5ndGggPiAxLFxyXG5cdFx0XHRcdFx0aGVscFNvdXJjZTogd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmhlbHBGb3JSZXBlYXRlcnMsXHJcblx0XHRcdFx0XHRoZWxwS2V5OiAnY29uZGl0aW9uYWxfYmxvY2snXHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IDw+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC10eXBlJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJUeXBlXCJcclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnR5cGUgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZ2V0Q29uZGl0aW9uVHlwZXMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB0eXBlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdTZWxlY3RDb250cm9sLWZpZWxkJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJGaWVsZFwiXHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5maWVsZCB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZmllbGQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtb3BlcmF0b3InICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIk9wZXJhdG9yXCJcclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLm9wZXJhdG9yIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGNvbmRpdGlvbk9wZXJhdG9ycyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IG9wZXJhdG9yOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxGaWVsZFdpdGhQcmVzZXRcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV2l0aFByZXNldC12YWx1ZV90b19jb21wYXJlJyApIH1cclxuXHRcdFx0XHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8RHluYW1pY1ByZXNldFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdEeW5hbWljUHJlc2V0LXZhbHVlX3RvX2NvbXBhcmUnICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQ9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0XHR0cmlnZ2VyQ2xhc3Nlcz17IFsgJ3RyaWdnZXJfX3RleHRhcmVhJyBdIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdUZXh0YXJlYUNvbnRyb2wtdmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiVmFsdWUgdG8gQ29tcGFyZVwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+XHJcblx0XHRcdFx0XHR7ICdzZXRfdmFsdWUnID09PSBjdXJyZW50SXRlbS50eXBlICYmIDxGaWVsZFdpdGhQcmVzZXRcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV2l0aFByZXNldC12YWx1ZV90b19zZXQnICkgfVxyXG5cdFx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0R5bmFtaWNQcmVzZXQtdmFsdWVfdG9fc2V0JyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnNldF92YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHNldF92YWx1ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0XHR0cmlnZ2VyQ2xhc3Nlcz17IFsgJ3RyaWdnZXJfX3RleHRhcmVhJyBdIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdUZXh0YXJlYUNvbnRyb2wtc2V0X3ZhbHVlJyApIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgdG8gU2V0JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBfXyggJ1NlcGFyYXRlIHZhbHVlcyB3aXRoIGNvbW1hcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnNldF92YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBzZXRfdmFsdWU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PiB9XHJcblx0XHRcdFx0PC8+IH1cclxuXHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT4gfVxyXG5cdFx0PC9BY3Rpb25Nb2RhbD5cclxuXHRdO1xyXG59IiwiaW1wb3J0IENvbmRpdGlvbmFsQmxvY2tFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuaW1wb3J0IENvbmRpdGlvbmFsU2F2ZSBmcm9tIFwiLi9zYXZlXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0NvbmRpdGlvbmFsIEJsb2NrJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogQ29uZGl0aW9uYWxCbG9ja0VkaXQsXHJcblx0c2F2ZTogQ29uZGl0aW9uYWxTYXZlLFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25kaXRpb25hbFNhdmUoIHByb3BzICkge1xyXG5cdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+O1xyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9sc1NldHRpbmdzID0ge1xyXG5cdFwiZ2VuZXJhbFwiOiB7XHJcblx0XHRsYWJlbDogX18oICdHZW5lcmFsJyApLFxyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJsYWJlbFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZpZWxkIExhYmVsXCIgKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcIm5hbWVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGb3JtIGZpZWxkIG5hbWVcIiApLFxyXG5cdFx0XHRcdFwiaGVscFwiOiBfXyggXCJTaG91bGQgY29udGFpbiBvbmx5IExhdGluIGxldHRlcnMsIG51bWJlcnMsIGAtYCBvciBgX2AgY2hhcnMsIG5vIHNwYWNlcyBvbmx5IGxvd2VyIGNhc2VcIiApXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiZGVzY1wiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkZpZWxkIERlc2NyaXB0aW9uXCIgKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImRlZmF1bHRcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJkeW5hbWljX3RleHRcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkRlZmF1bHQgVmFsdWVcIiApXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSxcclxuXHRcInRvb2xiYXJcIjoge1xyXG5cdFx0YXR0cnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInRvZ2dsZVwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiSXMgUmVxdWlyZWRcIiApXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdFwiYWR2YW5jZWRcIjoge1xyXG5cdFx0bGFiZWw6IF9fKCAnQWR2YW5jZWQnICksXHJcblx0XHRhdHRyczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInBsYWNlaG9sZGVyXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFwibGFiZWxcIjogX18oIFwiUGxhY2Vob2xkZXJcIiApXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImF0dHJOYW1lXCI6IFwiYWRkX3ByZXZcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0b2dnbGVcIixcclxuXHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIkFkZCBQcmV2IFBhZ2UgQnV0dG9uXCIgKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcInByZXZfbGFiZWxcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJQcmV2IFBhZ2UgQnV0dG9uIExhYmVsXCIgKSxcclxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcImFkZF9wcmV2XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiYXR0ck5hbWVcIjogXCJ2aXNpYmlsaXR5XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJGaWVsZCBWaXNpYmlsaXR5XCIgKSxcclxuXHRcdFx0XHRcInR5cGVcIjogXCJzZWxlY3RcIixcclxuXHRcdFx0XHRcIm9wdGlvbnNcIjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiYWxsXCIsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxcIjogX18oIFwiRm9yIGFsbFwiIClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCJsb2dnZWRfaWRcIixcclxuXHRcdFx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJPbmx5IGZvciBsb2dnZWQgaW4gdXNlcnNcIiApXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwibm90X2xvZ2dlZF9pblwiLFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsXCI6IF9fKCBcIk9ubHkgZm9yIE5PVC1sb2dnZWQgaW4gdXNlcnNcIiApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhdHRyTmFtZVwiOiBcImNsYXNzX25hbWVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XCJsYWJlbFwiOiBfXyggXCJDU1MgQ2xhc3MgTmFtZVwiIClcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9XHJcbn0iLCJjb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdFRleHRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jbGFzcyBKZXREZWZhdWx0TWV0YUNvbnRyb2wgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuYWRkTmV3T3B0aW9uID0gdGhpcy5hZGROZXdPcHRpb24uYmluZCggdGhpcyApO1xyXG5cdH1cclxuXHJcblx0Z2V0RGVmYXVsdE1ldGEoKSB7XHJcblx0XHRpZiAoICEgdGhpcy5wcm9wcy5kZWZhdWx0TWV0YSApIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKTtcclxuXHR9XHJcblxyXG5cclxuXHRhZGROZXdPcHRpb24oKSB7XHJcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcclxuXHJcblx0XHRpdGVtcy5wdXNoKCB7XHJcblx0XHRcdGtleTogJycsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlT3B0aW9uKCBpbmRleCApIHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5nZXREZWZhdWx0TWV0YSgpO1xyXG5cdFx0aXRlbXMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIGl0ZW1zICk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVZhbHVlKCB7IHZhbHVlLCBuYW1lLCBpZCB9ICkge1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbSggdGhpcy5wcm9wcy5kZWZhdWx0TWV0YSApO1xyXG5cdFx0aXRlbXNbIGlkIF1bIG5hbWUgXSA9IHZhbHVlO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIGl0ZW1zICk7XHJcblx0fVxyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZGVmYXVsdC1tZXRhX19yb3dcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyX19mbGV4LWNvbnRyb2xzXCJcclxuXHRcdFx0XHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyLWl0ZW0tJyArIGluZGV4IH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbS1jb2x1bW4nPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9J21ldGFfa2V5J1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRhIEtleScgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5rZXkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6ICdrZXknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogaW5kZXhcclxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW0tY29sdW1uJz5cclxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PSdtZXRhX3ZhbHVlJ1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNZXRhIFZhbHVlJyApIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAndmFsdWUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZDogaW5kZXhcclxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW0tY29sdW1uJz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGljb249XCJkaXNtaXNzXCJcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlJlbW92ZVwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRoaXMucmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHR9ICkgfVxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdidXR0b24tYWRkLW9wdGlvbidcclxuXHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmFkZE5ld09wdGlvbiB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnQWRkIE5ldyBPcHRpb24nICkgfVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpldERlZmF1bHRNZXRhQ29udHJvbDsiLCJpbXBvcnQgeyBjb250cm9sc1NldHRpbmdzIH0gZnJvbSBcIi4uL2NvbnRyb2xzXCI7XHJcbmltcG9ydCBEeW5hbWljUHJlc2V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3ByZXNldHMvZHluYW1pYy1wcmVzZXRcIjtcclxuaW1wb3J0IEZpZWxkV2l0aFByZXNldCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWVsZC13aXRoLXByZXNldFwiO1xyXG5cclxuY29uc3Qge1xyXG5cdEJsb2NrQ29udHJvbHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRUb29sYmFyR3JvdXAsXHJcblx0RmxleCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBGaWVsZENvbnRyb2woIHtcclxuXHRcdFx0XHRcdFx0ICAgdHlwZSxcclxuXHRcdFx0XHRcdFx0ICAgc2V0QXR0cmlidXRlcyxcclxuXHRcdFx0XHRcdFx0ICAgYXR0cmlidXRlcyxcclxuXHRcdFx0XHRcdFx0ICAgYXR0cnNTZXR0aW5ncyA9IHt9LFxyXG5cdFx0XHRcdFx0XHQgICBlZGl0UHJvcHM6IHsgYXR0ckhlbHAgPSAoKSA9PiAnJyB9XHJcblx0XHRcdFx0XHQgICB9ICkge1xyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gY29udHJvbHNTZXR0aW5nc1sgdHlwZSBdO1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0c2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGN1cnJlbnRDb250cm9sLmF0dHJzLm1hcCggKCB7IGhlbHAgPSAnJywgYXR0ck5hbWUsIGxhYmVsLCAuLi5hdHRyIH0gKSA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdChcclxuXHRcdFx0XHQhICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApXHJcblx0XHRcdClcclxuXHRcdFx0fHwgKFxyXG5cdFx0XHRcdCdjb25kaXRpb24nIGluIGF0dHJcclxuXHRcdFx0XHQmJiAhIGF0dHJpYnV0ZXNbIGF0dHIuY29uZGl0aW9uIF1cclxuXHRcdFx0KVxyXG5cdFx0XHR8fCAoXHJcblx0XHRcdFx0YXR0ck5hbWUgaW4gYXR0cnNTZXR0aW5nc1xyXG5cdFx0XHRcdCYmICdzaG93JyBpbiBhdHRyc1NldHRpbmdzWyBhdHRyTmFtZSBdXHJcblx0XHRcdFx0JiYgZmFsc2UgPT09IGF0dHJzU2V0dGluZ3NbIGF0dHJOYW1lIF0uc2hvd1xyXG5cdFx0XHQpXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0c3dpdGNoICggYXR0ci50eXBlICkge1xyXG5cdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1UZXh0Q29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGF0dHJOYW1lIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+O1xyXG5cdFx0XHRjYXNlICdkeW5hbWljX3RleHQnOlxyXG5cdFx0XHRcdHJldHVybiA8RmllbGRXaXRoUHJlc2V0XHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1GaWVsZFdpdGhQcmVzZXRgIH1cclxuXHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQ9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1UZXh0Q29udHJvbER5bmFtaWNgIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBoZWxwIHx8IGF0dHJIZWxwKCBhdHRyTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+O1xyXG5cdFx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRcdHJldHVybiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgYCR7IGF0dHIudHlwZSB9LSR7IGF0dHJOYW1lIH0tU2VsZWN0Q29udHJvbGAgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXNbIGF0dHJOYW1lIF0gfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGF0dHIub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgYXR0ck5hbWUgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz47XHJcblx0XHRcdGNhc2UgJ3RvZ2dsZSc6XHJcblx0XHRcdFx0cmV0dXJuIDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyBgJHsgYXR0ci50eXBlIH0tJHsgYXR0ck5hbWUgfS1Ub2dnbGVDb250cm9sYCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBhdHRyTmFtZSApXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPjtcclxuXHRcdH1cclxuXHJcblx0fSApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gR2VuZXJhbEZpZWxkcyggcHJvcHMgKSB7XHJcblx0Y29uc3QgY3VycmVudENvbnRyb2wgPSBjb250cm9sc1NldHRpbmdzLmdlbmVyYWw7XHJcblxyXG5cdHJldHVybiA8UGFuZWxCb2R5IHRpdGxlPXsgY3VycmVudENvbnRyb2wubGFiZWwgfSBrZXk9eyAnamV0LWZvcm0tZ2VuZXJhbC1maWVsZHMnIH0+XHJcblx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdHR5cGU9J2dlbmVyYWwnXHJcblx0XHRcdGtleT17ICdqZXQtZm9ybS1nZW5lcmFsLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdDwvUGFuZWxCb2R5PjtcclxufVxyXG5cclxuZnVuY3Rpb24gQWR2YW5jZWRGaWVsZHMoIHByb3BzICkge1xyXG5cdGNvbnN0IGN1cnJlbnRDb250cm9sID0gY29udHJvbHNTZXR0aW5ncy5hZHZhbmNlZDtcclxuXHJcblx0cmV0dXJuIDxQYW5lbEJvZHkgdGl0bGU9eyBjdXJyZW50Q29udHJvbC5sYWJlbCB9IGtleT17ICdqZXQtZm9ybS1hZHZhbmNlZC1maWVsZHMnIH0gaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxyXG5cdFx0PEZpZWxkQ29udHJvbFxyXG5cdFx0XHR0eXBlPSdhZHZhbmNlZCdcclxuXHRcdFx0a2V5PXsgJ2pldC1mb3JtLWFkdmFuY2VkLWZpZWxkcy1jb21wb25lbnQnIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPlxyXG5cdDwvUGFuZWxCb2R5PjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFRvb2xCYXJGaWVsZHMoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7IGVkaXRQcm9wczogeyB1bmlxS2V5IH0sIGNoaWxkcmVuID0gW10gfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gPEJsb2NrQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMtQmxvY2tDb250cm9scycgKSB9PlxyXG5cdFx0PFRvb2xiYXJHcm91cCBrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcy1Ub29sYmFyR3JvdXAnICkgfT5cclxuXHRcdFx0PEZsZXhcclxuXHRcdFx0XHRhbGlnbj17ICdjZW50ZXInIH1cclxuXHRcdFx0XHRqdXN0aWZ5PXsgJ2NlbnRlcicgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS10b2dnbGUtYm94JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8RmllbGRDb250cm9sXHJcblx0XHRcdFx0XHR0eXBlPSd0b29sYmFyJ1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2pldC1mb3JtLXRvb2xiYXItZmllbGRzLWNvbXBvbmVudCcgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHQ8L1Rvb2xiYXJHcm91cD5cclxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkcyxcclxuXHRBZHZhbmNlZEZpZWxkc1xyXG59OyIsIi8qKlxyXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHsgaXNFbXB0eSB9ID0gd2luZG93LmxvZGFzaDtcclxuXHJcbi8qKlxyXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7IHdpdGhJbnN0YW5jZUlkIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VGV4dENvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHJcbmNsYXNzIEpldEZpZWxkc01hcENvbnRyb2wgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuZmllbGRUeXBlcyA9IHRoaXMucHJvcHMuZmllbGRUeXBlcztcclxuXHRcdHRoaXMudGF4b25vbWllc0xpc3QgPSB0aGlzLnByb3BzLnRheG9ub21pZXNMaXN0O1xyXG5cdFx0dGhpcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcclxuXHRcdHRoaXMubWV0YVByb3AgPSB0aGlzLnByb3BzLm1ldGFQcm9wID8gdGhpcy5wcm9wcy5tZXRhUHJvcCA6ICdwb3N0X21ldGEnO1xyXG5cdFx0dGhpcy50ZXJtc1Byb3AgPSB0aGlzLnByb3BzLnRlcm1zUHJvcCA/IHRoaXMucHJvcHMudGVybXNQcm9wIDogJ3Bvc3RfdGVybXMnO1xyXG5cdFx0dGhpcy5pbmRleCA9IHRoaXMucHJvcHMuaW5kZXg7XHJcblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLmJpbmRGdW5jdGlvbnMoKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR0eXBlOiB0aGlzLmdldEZpZWxkVHlwZSggdGhpcy5wcm9wcy5maWVsZFZhbHVlICksXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0YmluZEZ1bmN0aW9ucygpIHtcclxuXHRcdHRoaXMub25DaGFuZ2VUeXBlID0gdGhpcy5vbkNoYW5nZVR5cGUuYmluZCggdGhpcyApO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlID0gdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKTtcclxuXHR9XHJcblxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5pZCA9IGBpbnNwZWN0b3Itc2VsZWN0LWNvbnRyb2wtJHsgdGhpcy5pbmRleCB9YDtcclxuXHRcdHRoaXMucHJlcGFyZWRUYXhlcyA9IFtdO1xyXG5cdFx0dGhpcy50YXhQcmVmaXggPSAnamV0X3RheF9fJztcclxuXHJcblx0XHRpZiAoICEgdGhpcy50YXhvbm9taWVzTGlzdCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMudGF4b25vbWllc0xpc3QubGVuZ3RoOyBpICsrICkge1xyXG5cdFx0XHR0aGlzLnByZXBhcmVkVGF4ZXMucHVzaCgge1xyXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRheFByZWZpeCArIHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS52YWx1ZSxcclxuXHRcdFx0XHRsYWJlbDogdGhpcy50YXhvbm9taWVzTGlzdFsgaSBdLmxhYmVsLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZE5hbWUoIHZhbHVlICkge1xyXG5cclxuXHRcdGlmICggISB2YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZpZWxkVHlwZSA9IHRoaXMuZ2V0RmllbGRUeXBlKCB2YWx1ZSApO1xyXG5cclxuXHRcdGlmICggdGhpcy50ZXJtc1Byb3AgPT09IGZpZWxkVHlwZSB8fCB0aGlzLm1ldGFQcm9wID09PSBmaWVsZFR5cGUgKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdGlzVGVybU9yTWV0YSggdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gKCB0aGlzLnRlcm1zUHJvcCA9PT0gdmFsdWUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gdmFsdWUgKTtcclxuXHR9XHJcblxyXG5cclxuXHRnZXRGaWVsZFR5cGUoIHZhbHVlICkge1xyXG5cclxuXHRcdGlmICggISB2YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRUeXBlcy5sZW5ndGg7IGkgKysgKSB7XHJcblx0XHRcdGlmICggdmFsdWUgPT09IHRoaXMuZmllbGRUeXBlc1sgaSBdLnZhbHVlICkge1xyXG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdmFsdWUuaW5jbHVkZXMoIHRoaXMudGF4UHJlZml4ICkgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnRlcm1zUHJvcDtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tZXRhUHJvcDtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlICkge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLmZpZWxkc01hcCxcclxuXHRcdFx0WyB0aGlzLnByb3BzLmZpZWxkTmFtZSBdOiBuZXdWYWx1ZVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cclxuXHRvbkNoYW5nZVR5cGUoIG5ld1ZhbHVlICkge1xyXG5cdFx0bGV0IHZhbCA9IHRoaXMuZ2V0RmllbGRUeXBlKCBuZXdWYWx1ZSApO1xyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUoIHtcclxuXHRcdFx0dHlwZTogdmFsXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLmlzVGVybU9yTWV0YSggdmFsICkgKSB7XHJcblx0XHRcdHZhbCA9ICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSggdmFsICk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRGlzYWJsZSByZWFzb246IEEgc2VsZWN0IHdpdGggYW4gb25jaGFuZ2UgdGhyb3dzIGEgd2FybmluZ1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1maWVsZHMtbWFwX19yb3dcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1wb3N0LWZpZWxkLWNvbnRyb2xcIj5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3R5cGVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IHRoaXMucHJvcHMuZmllbGROYW1lIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5zdGF0ZS50eXBlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVR5cGUgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZmllbGRUeXBlcyB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNjBweCdcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyAoIHRoaXMubWV0YVByb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX25hbWVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdHsgKCB0aGlzLnRlcm1zUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtd2l0aG91dC1sYWJlbCdcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90YXhfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5wcmVwYXJlZFRheGVzIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKZXRGaWVsZHNNYXBDb250cm9sOyIsImZ1bmN0aW9uIEpldEZpZWxkUGxhY2Vob2xkZXIoIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgdGl0bGUsXHJcblx0XHRcdFx0XHRcdFx0XHQgIHN1YnRpdGxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICBpc1JlcXVpcmVkID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHQgIH0gKSB7XHJcblxyXG5cdHN1YnRpdGxlID0gc3VidGl0bGUuZmlsdGVyKCBwYXJ0ID0+IEJvb2xlYW4oIHBhcnQgKSApO1xyXG5cclxuXHRjb25zdCBzdWJ0aXRsZVN0ciA9IHN1YnRpdGxlLmpvaW4oICcsICcgKTtcclxuXHJcblx0dmFyIGNsYXNzTmFtZSA9ICdqZXQtZmllbGQtcGxhY2Vob2xkZXInO1xyXG5cclxuXHRpZiAoIGlzUmVxdWlyZWQgKSB7XHJcblx0XHRjbGFzc05hbWUgKz0gJyBpcy1yZXF1aXJlZCc7XHJcblx0fVxyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9PlxyXG5cdFx0eyB0aXRsZSB9OiB7IHN1YnRpdGxlU3RyIH1cclxuXHQ8L2Rpdj5cclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpldEZpZWxkUGxhY2Vob2xkZXI7IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi8uLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyJztcclxuaW1wb3J0IHtcclxuXHRUb29sQmFyRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0QWR2YW5jZWRGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRDb2xvclBhbGV0dGUsXHJcblx0UmljaFRleHQsXHJcblx0RWRpdGFibGUsXHJcblx0TWVkaWFVcGxvYWQsXHJcblx0U2VydmVyU2lkZVJlbmRlcixcclxuXHRCbG9ja0NvbnRyb2xzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFBhbmVsQ29sb3IsXHJcblx0SWNvbkJ1dHRvbixcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRCdXR0b24sXHJcblx0UmFuZ2VDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHREYXRlVGltZVBpY2tlcixcclxuXHREaXNhYmxlZCxcclxuXHRfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBJbnB1dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdElucHV0Q29udHJvbCA9IF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUVkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBibG9ja05hbWUsIGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS10b29sYmFyJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUGFuZWxCb2R5JyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2lzX3RpbWVzdGFtcCdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdJcyBUaW1lc3RhbXAnICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaXNfdGltZXN0YW1wIH1cclxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2lzX3RpbWVzdGFtcCcgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaXNfdGltZXN0YW1wOiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0a2V5PXsgYHBsYWNlX2hvbGRlcl9ibG9ja18keyBibG9ja05hbWUgfWAgfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyAnSW5wdXQgdHlwZT1cImRhdGVcIicgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBEYXRlRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0RhdGUgZmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBEYXRlRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmllbGQtd3JhcHBlcic7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wcyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVUaW1lRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIChcclxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1nZW5lcmFsJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnaXNfdGltZXN0YW1wJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0lzIFRpbWVzdGFtcCcgKSB9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmlzX3RpbWVzdGFtcCB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2lzX3RpbWVzdGFtcCcgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaXNfdGltZXN0YW1wOiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tYWR2YW5jZWQnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cclxuXHRcdCksXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ICdJbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIicgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvRmllbGRXcmFwcGVyPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBEYXRlVGltZUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdEYXRldGltZSBmaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IERhdGVUaW1lRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRDb2xvclBhbGV0dGUsXHJcblx0UmljaFRleHQsXHJcblx0RWRpdGFibGUsXHJcblx0TWVkaWFVcGxvYWQsXHJcblx0U2VydmVyU2lkZVJlbmRlcixcclxuXHRCbG9ja0NvbnRyb2xzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFBhbmVsQ29sb3IsXHJcblx0SWNvbkJ1dHRvbixcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1CcmVha0VkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0cHJvcHMuaXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PVwicGFnZV9icmVha19kaXNhYmxlZFwiXHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucGFnZV9icmVha19kaXNhYmxlZCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGlzYWJsZWQgbWVzc2FnZScgKSB9XHJcblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdwYWdlX2JyZWFrX2Rpc2FibGVkJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBwYWdlX2JyZWFrX2Rpc2FibGVkOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX25leHQtcGFnZS13cmFwJyB9PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRrZXk9XCJuZXh0X3BhZ2VfYnV0dG9uXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX25leHQtcGFnZVwiXHJcblx0XHRcdFx0PnsgYXR0cmlidXRlcy5sYWJlbCB8fCAnTmV4dCcgfTwvQnV0dG9uPlxyXG5cclxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMuYWRkX3ByZXYgJiYgPEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdGtleT1cInByZXZfcGFnZV9idXR0b25cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlXCJcclxuXHRcdFx0XHQ+eyBhdHRyaWJ1dGVzLnByZXZfbGFiZWwgfHwgJ1ByZXYnIH08L0J1dHRvbj4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcblxyXG59IiwiaW1wb3J0IEZvcm1CcmVha0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdGb3JtIEJyZWFrIEZpZWxkJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogRm9ybUJyZWFrRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJcclxuaW1wb3J0ICogYXMgY2FsY3VsYXRlZCBmcm9tICcuL2NhbGN1bGF0ZWQtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBjaGVja2JveCBmcm9tICcuL2NoZWNrYm94LWZpZWxkJztcclxuaW1wb3J0ICogYXMgY29uZGl0aW9uYWwgZnJvbSAnLi9jb25kaXRpb25hbC1ibG9jayc7XHJcbmltcG9ydCAqIGFzIGRhdGUgZnJvbSAnLi9kYXRlLWZpZWxkJztcclxuaW1wb3J0ICogYXMgZGF0ZXRpbWUgZnJvbSAnLi9kYXRldGltZS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGZvcm1CcmVhayBmcm9tICcuL2Zvcm0tYnJlYWstZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBncm91cEJyZWFrIGZyb20gJy4vZ3JvdXAtYnJlYWstZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBoZWFkaW5nIGZyb20gJy4vaGVhZGluZy1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGhpZGRlbiBmcm9tICcuL2hpZGRlbi1maWVsZCc7XHJcbmltcG9ydCAqIGFzIG1lZGlhIGZyb20gJy4vbWVkaWEtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBudW1iZXIgZnJvbSAnLi9udW1iZXItZmllbGQnO1xyXG5pbXBvcnQgKiBhcyByYWRpbyBmcm9tICcuL3JhZGlvLWZpZWxkJztcclxuaW1wb3J0ICogYXMgcmFuZ2UgZnJvbSAnLi9yYW5nZS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHJlcGVhdGVyIGZyb20gJy4vcmVwZWF0ZXItZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBzZWxlY3QgZnJvbSAnLi9zZWxlY3QtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBzdWJtaXQgZnJvbSAnLi9zdWJtaXQtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyB0ZXh0IGZyb20gJy4vdGV4dC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyB0aW1lIGZyb20gJy4vdGltZS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHd5c2l3eWcgZnJvbSAnLi93eXNpd3lnLWZpZWxkJztcclxuXHJcbmltcG9ydCAqIGFzIHdyYXBwZXJzIGZyb20gXCIuL2Jsb2NrLXdyYXBwZXJzXCI7XHJcbmltcG9ydCB7IGpmYkhvb2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvaG9va3MtaGVscGVyXCI7XHJcblxyXG5jb25zdCB7XHJcblx0cmVnaXN0ZXJCbG9ja1R5cGVcclxufSA9IHdwLmJsb2NrcztcclxuXHJcbmNvbnN0IGZpZWxkcyA9IGpmYkhvb2tzLmFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLCBbXHJcblx0Y2FsY3VsYXRlZCxcclxuXHRjaGVja2JveCxcclxuXHRjb25kaXRpb25hbCxcclxuXHRkYXRldGltZSxcclxuXHRkYXRlLFxyXG5cdGZvcm1CcmVhayxcclxuXHRncm91cEJyZWFrLFxyXG5cdGhlYWRpbmcsXHJcblx0aGlkZGVuLFxyXG5cdG1lZGlhLFxyXG5cdG51bWJlcixcclxuXHRyYWRpbyxcclxuXHRyYW5nZSxcclxuXHRyZXBlYXRlcixcclxuXHRzZWxlY3QsXHJcblx0c3VibWl0LFxyXG5cdHRleHQsXHJcblx0dGV4dGFyZWEsXHJcblx0dGltZSxcclxuXHR3eXNpd3lnLFxyXG5cclxuXHQvKlxyXG5cdCovXHJcbl0gKTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyRm9ybUZpZWxkID0gYmxvY2sgPT4ge1xyXG5cdGlmICggISBibG9jayApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3QgeyBtZXRhZGF0YSwgc2V0dGluZ3MsIG5hbWUgfSA9IGJsb2NrO1xyXG5cclxuXHRzZXR0aW5ncy5lZGl0ID0gd3JhcHBlcnMud2l0aEN1c3RvbVByb3BzKCBibG9jayApO1xyXG5cclxuXHRyZWdpc3RlckJsb2NrVHlwZSggbmFtZSwge1xyXG5cdFx0Li4ubWV0YWRhdGEsXHJcblx0XHQuLi5zZXR0aW5nc1xyXG5cdH0gKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGb3JtRmllbGRzID0gKCBibG9ja3MgPSBmaWVsZHMgKSA9PiB7XHJcblx0YmxvY2tzLmZvckVhY2goIGpmYkhvb2tzLmFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5maWVsZHMuaGFuZGxlcicsIHJlZ2lzdGVyRm9ybUZpZWxkICkgKTtcclxufVxyXG5cclxucmVnaXN0ZXJGb3JtRmllbGRzKCk7XHJcbiIsImltcG9ydCB7IEFkdmFuY2VkRmllbGRzIH0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wc1xyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcm91cEJyZWFrRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfT5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZ3JvdXAtYnJlYWsnIH0+XHJcblx0XHRcdFx0PHNwYW4+eyBfXyggJ0dST1VQIEJSRUFLJyApIH08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBHcm91cEJyZWFrRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0dyb3VwIEJyZWFrIEZpZWxkJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogR3JvdXBCcmVha0VkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wcyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkaW5nRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfT5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0dmFsdWVJZkVtcHR5TGFiZWw9eyAnSGVhZGluZycgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBIZWFkaW5nRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0hlYWRpbmcgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBIZWFkaW5nRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgTUVESUEgPSAnamV0LWZvcm1zL21lZGlhLWZpZWxkJztcclxuY29uc3QgRk9STV9CUkVBSyA9ICdqZXQtZm9ybXMvZm9ybS1icmVhay1maWVsZCc7XHJcbmNvbnN0IERBVEUgPSAnamV0LWZvcm1zL2RhdGUtZmllbGQnO1xyXG5jb25zdCBEQVRFVElNRSA9ICdqZXQtZm9ybXMvZGF0ZXRpbWUtZmllbGQnO1xyXG5jb25zdCBSQURJTyA9ICdqZXQtZm9ybXMvcmFkaW8tZmllbGQnO1xyXG5jb25zdCBDSEVDS0JPWCA9ICdqZXQtZm9ybXMvY2hlY2tib3gtZmllbGQnO1xyXG5jb25zdCBTRUxFQ1QgPSAnamV0LWZvcm1zL3NlbGVjdC1maWVsZCc7XHJcbmNvbnN0IFJBTkdFID0gJ2pldC1mb3Jtcy9yYW5nZS1maWVsZCc7XHJcbmNvbnN0IFJFUEVBVEVSID0gJ2pldC1mb3Jtcy9yZXBlYXRlci1maWVsZCc7XHJcbmNvbnN0IFRFWFQgPSAnamV0LWZvcm1zL3RleHQtZmllbGQnO1xyXG5jb25zdCBUSU1FID0gJ2pldC1mb3Jtcy90aW1lLWZpZWxkJztcclxuXHJcblxyXG5jb25zdCBtZXNzYWdlc0NvbmZpZyA9IFtcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdpc190aW1lc3RhbXAnLFxyXG5cdFx0dG86IFsgREFURSwgREFURVRJTUUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgQ2hlY2sgdGhpcyBpZiB5b3Ugd2FudCB0byBzZW5kIHZhbHVlIG9mIHRoaXMgXHJcblx0XHRmaWVsZCBhcyB0aW1lc3RhbXAgaW5zdGVhZCBvZiBwbGFpbiBkYXRldGltZWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnZGVmYXVsdCcsXHJcblx0XHR0bzogWyBEQVRFIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ1BsYWluIGRhdGUgc2hvdWxkIGJlIGluIHl5eXktbW0tZGQgZm9ybWF0JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0JyxcclxuXHRcdHRvOiBbIERBVEVUSU1FIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ1BsYWluIGRhdGV0aW1lIHNob3VsZCBiZSBpbiB5eXl5LU1NLWRkVGhoOm1tIGZvcm1hdCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAncGFnZV9icmVha19kaXNhYmxlZCcsXHJcblx0XHR0bzogWyBGT1JNX0JSRUFLIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYFRleHQgdG8gc2hvdyBpZiBuZXh0IHBhZ2UgYnV0dG9uIGlzIGRpc2FibGVkLiBcclxuXHRcdEZvciBleGFtcGxlIC0gXCJGaWxsIHJlcXVpcmVkIGZpZWxkc1wiIGV0Yy5gIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2luc2VydF9hdHRhY2htZW50JyxcclxuXHRcdHRvOiBbIE1FRElBIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYElmIGNoZWNrZWQgbmV3IGF0dGFjaG1lbnQgd2lsbCBiZSBpbnNlcnRlZCBmb3IgdXBsb2FkZWQgZmlsZS4gXHJcblx0XHROb3RlOiB3b3JrIG9ubHkgZm9yIGxvZ2dlZC1pbiB1c2VycyFgIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ21heF9maWxlcycsXHJcblx0XHR0bzogWyBNRURJQSBdLFxyXG5cdFx0bWVzc2FnZTogX18oICdJZiBub3Qgc2V0IGFsbG93IHRvIHVwbG9hZCAxIGZpbGUnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ21heF9zaXplJyxcclxuXHRcdHRvOiBbIE1FRElBIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ01iJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdhbGxvd2VkX21pbWVzJyxcclxuXHRcdHRvOiBbIE1FRElBIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYElmIG5vIE1JTUUgdHlwZSBzZWxlY3RlZCB3aWxsIGFsbG93IGFsbCB0eXBlcy4gXHJcblx0XHRIb2xkIGRvd24gdGhlIEN0cmwgKHdpbmRvd3MpIC8gQ29tbWFuZCAoTWFjKSBidXR0b24gdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMuYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICd2YWx1ZV9mcm9tX21ldGEnLFxyXG5cdFx0dG86IFsgUkFESU8sIENIRUNLQk9YLCBTRUxFQ1QgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgQnkgZGVmYXVsdCBwb3N0L3Rlcm0gSUQgaXMgdXNlZCBhcyB2YWx1ZS4gSGVyZSB5b3UgY2FuIFxyXG5cdFx0c2V0IG1ldGEgZmllbGQgbmFtZSB0byB1c2UgaXRzIHZhbHVlIGFzIGZvcm0gZmllbGQgdmFsdWVgIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknLFxyXG5cdFx0dG86IFsgUkFESU8sIENIRUNLQk9YLCBTRUxFQ1QgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCBgSGVyZSB5b3UgY2FuIHNldCBtZXRhIGZpZWxkIG5hbWUgdG8gdXNlIGl0cyB2YWx1ZSBcclxuXHRcdGFzIGNhbGN1bGF0ZWQgdmFsdWUgZm9yIGN1cnJlbnQgZm9ybSBmaWVsZGAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnZ2VuZXJhdG9yX2ZpZWxkJyxcclxuXHRcdHRvOiBbIFJBRElPLCBDSEVDS0JPWCwgU0VMRUNUIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYEZvciBOdW1iZXJzIHJhbmdlIGdlbmVyYXRvciBzZXQgZmllbGQgd2l0aCBtYXggcmFuZ2UgdmFsdWVgICksXHJcblx0XHRjb25kaXRpb25zOiB7XHJcblx0XHRcdGdlbmVyYXRvcl9mdW5jdGlvbjogJ251bV9yYW5nZSdcclxuXHRcdH1cclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ3N3aXRjaF9vbl9jaGFuZ2UnLFxyXG5cdFx0dG86IFsgU0VMRUNUIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYENoZWNrIHRoaXMgdG8gc3dpdGNoIHBhZ2UgdG8gbmV4dCBvbiBjdXJyZW50IHZhbHVlIGNoYW5nZWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAncHJlZml4X3N1ZmZpeCcsXHJcblx0XHR0bzogWyBSQU5HRSBdLFxyXG5cdFx0bWVzc2FnZTogX18oICdGb3Igc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHRleHQgdXNlOiAmbmJzcDsnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ2NhbGNfaGlkZGVuJyxcclxuXHRcdHRvOiBbIFJFUEVBVEVSIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ0NoZWNrIHRoaXMgdG8gaGlkZSBjYWxjdWxhdGVkIGZpZWxkJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdpbnB1dF9tYXNrX2RlZmF1bHQnLFxyXG5cdFx0dG86IFsgVEVYVCBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBFeGFtcGxlczogKDk5OSkgOTk5LTk5OTkgLSBzdGF0aWMgbWFzaywgOS1hezEsM305ezEsM30gLSBtYXNrIHdpdGggZHluYW1pYyBzeW50YXggXHJcblx0XHREZWZhdWx0IG1hc2tpbmcgZGVmaW5pdGlvbnM6IDkgLSBudW1lcmljLCBhIC0gYWxwaGFiZXRpY2FsLCAqIC0gYWxwaGFudW1lcmljYCApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdpbnB1dF9tYXNrX2RhdGV0aW1lX2xpbmsnLFxyXG5cdFx0dG86IFsgVEVYVCBdLFxyXG5cdFx0bWVzc2FnZTogX18oIGBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFzay9ibG9iLzUueC9SRUFETUVfZGF0ZS5tZGAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnZGVmYXVsdCcsXHJcblx0XHR0bzogWyBUSU1FIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ1BsYWluIHRpbWUgc2hvdWxkIGJlIGluIGhoOm1tOnNzIGZvcm1hdCcgKVxyXG5cdH1cclxuXTtcclxuXHJcblxyXG5leHBvcnQgeyBtZXNzYWdlc0NvbmZpZyB9OyIsImltcG9ydCBKZXRGaWVsZFBsYWNlaG9sZGVyIGZyb20gJy4uL2NvbnRyb2xzL3BsYWNlaG9sZGVyJztcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgaGlkZGVuVmFsdWVzIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCbG9ja0NvbnRyb2xzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZGRlbkVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0aXNTZWxlY3RlZCAmJiAoXHJcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nZmllbGRfdmFsdWUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiRmllbGQgVmFsdWVcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF92YWx1ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGhpZGRlblZhbHVlcyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0eyBbICdwb3N0X21ldGEnLCAndXNlcl9tZXRhJyBdLmluY2x1ZGVzKCBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICkgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT1cImhpZGRlbl92YWx1ZV9maWVsZFwiXHJcblx0XHRcdFx0XHRcdGxhYmVsPVwiTWV0YSBGaWVsZCB0byBHZXQgVmFsdWUgRnJvbVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5oaWRkZW5fdmFsdWVfZmllbGQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGhpZGRlbl92YWx1ZV9maWVsZDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdHsgJ3F1ZXJ5X3ZhcicgPT09IGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT1cInF1ZXJ5X3Zhcl9rZXlcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlF1ZXJ5IFZhcmlhYmxlIEtleVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5xdWVyeV92YXJfa2V5IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBxdWVyeV92YXJfa2V5OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0eyAnY3VycmVudF9kYXRlJyA9PT0gYXR0cmlidXRlcy5maWVsZF92YWx1ZSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PVwiZGF0ZV9mb3JtYXRcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkZvcm1hdFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kYXRlX2Zvcm1hdCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZGF0ZV9mb3JtYXQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9XCJoaWRkZW5fdmFsdWVcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlZhbHVlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmhpZGRlbl92YWx1ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaGlkZGVuX3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQpLFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxKZXRGaWVsZFBsYWNlaG9sZGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZpZWxkUGxhY2Vob2xkZXInICkgfVxyXG5cdFx0XHRcdHRpdGxlPXsgJ0hpZGRlbiBGaWVsZCcgfVxyXG5cdFx0XHRcdHN1YnRpdGxlPXsgWyBhdHRyaWJ1dGVzLm5hbWUgXSB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59O1xyXG4iLCJpbXBvcnQgSGVhZGluZ0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdIaWRkZW4gRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBIZWFkaW5nRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdG9vbHNcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBoaWRkZW5WYWx1ZXMgPSBUb29scy53aXRoUGxhY2Vob2xkZXIoIFtcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3Bvc3RfaWQnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IElEJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3Bvc3RfdGl0bGUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IFRpdGxlJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3Bvc3RfdXJsJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdC9QYWdlIFVSTCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdwb3N0X21ldGEnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IE1ldGEnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndXNlcl9pZCcsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgSUQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndXNlcl9lbWFpbCcsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgRW1haWwnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndXNlcl9uYW1lJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBOYW1lJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3VzZXJfbWV0YScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgTWV0YScgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdhdXRob3JfaWQnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IEF1dGhvciBJRCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdhdXRob3JfZW1haWwnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IEF1dGhvciBFbWFpbCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdhdXRob3JfbmFtZScsXHJcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgQXV0aG9yIE5hbWUnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncXVlcnlfdmFyJyxcclxuXHRcdGxhYmVsOiBfXyggJ1VSTCBRdWVyeSBWYXJpYWJsZScgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdjdXJyZW50X2RhdGUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBEYXRlJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ21hbnVhbF9pbnB1dCcsXHJcblx0XHRsYWJlbDogX18oICdNYW51YWwgSW5wdXQnIClcclxuXHR9LFxyXG5dICk7XHJcblxyXG5leHBvcnQgeyBoaWRkZW5WYWx1ZXMgfTsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmllbGQtd3JhcHBlcic7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHtcclxuXHR1c2VyQWNjZXNzLFxyXG5cdHZhbHVlRm9ybWF0c1xyXG59IGZyb20gXCIuL29wdGlvbnNcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlQmxvY2tQcm9wcyxcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcblx0X19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCwgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcclxufVxyXG5cclxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcclxufVxyXG5cclxuXHJcbmNvbnN0IGxvY2FsaXplRGF0YSA9IHdpbmRvdy5qZXRGb3JtTWVkaWFGaWVsZERhdGE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpYUVkaXQoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWZvcm0tbWVkaWEtZmllbGRzJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nYWxsb3dlZF91c2VyX2NhcCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1VzZXIgYWNjZXNzJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxsb3dlZF91c2VyX2NhcCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGFsbG93ZWRfdXNlcl9jYXA6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB1c2VyQWNjZXNzIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7ICdhbnlfdXNlcicgIT09IGF0dHJpYnV0ZXMuYWxsb3dlZF91c2VyX2NhcCAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2luc2VydF9hdHRhY2htZW50J1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW5zZXJ0IGF0dGFjaG1lbnQnICkgfVxyXG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5pbnNlcnRfYXR0YWNobWVudCB9XHJcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2luc2VydF9hdHRhY2htZW50JyApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaW5zZXJ0X2F0dGFjaG1lbnQ6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdHsgYXR0cmlidXRlcy5pbnNlcnRfYXR0YWNobWVudCAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J3ZhbHVlX2Zvcm1hdCdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkIHZhbHVlJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmFsdWVfZm9ybWF0IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgdmFsdWVfZm9ybWF0OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdmFsdWVGb3JtYXRzIH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nbWF4X2ZpbGVzJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4aW11bSBhbGxvd2VkIGZpbGVzIHRvIHVwbG9hZCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnbWF4X2ZpbGVzJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heF9maWxlcyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG1heF9maWxlczogcGFyc2VJbnQoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4aW11bSBzaXplIGluIE1iJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRrZXk9J21heF9zaXplJ1xyXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdtYXhfc2l6ZScgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXhfc2l6ZSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG1heF9zaXplOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdG11bHRpcGxlXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmllbGQtbWltZS10eXBlcydcclxuXHRcdFx0XHRcdFx0a2V5PSdhbGxvd2VkX21pbWVzJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQWxsb3cgTUlNRSB0eXBlcycgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnYWxsb3dlZF9taW1lcycgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5hbGxvd2VkX21pbWVzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgYWxsb3dlZF9taW1lczogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGxvY2FsaXplRGF0YS5taW1lX3R5cGVzIH1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQpLFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxJbnB1dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2tfbmV3JyApIH1cclxuXHRcdFx0XHRcdHR5cGU9eyAnZmlsZScgfVxyXG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyB0cnVlIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgTWVkaWFFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnTWVkaWEgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBNZWRpYUVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi8uLi9oZWxwZXJzL3Rvb2xzXCI7XHJcblxyXG5jb25zdCB1c2VyQWNjZXNzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXHJcblx0e1xyXG5cdFx0dmFsdWU6IFwiYWxsXCIsXHJcblx0XHRsYWJlbDogXCJBbnkgcmVnaXN0ZXJlZCB1c2VyXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiBcInVwbG9hZF9maWxlc1wiLFxyXG5cdFx0bGFiZWw6IFwiQW55IHVzZXIsIHdobyBhbGxvd2VkIHRvIHVwbG9hZCBmaWxlc1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogXCJlZGl0X3Bvc3RzXCIsXHJcblx0XHRsYWJlbDogXCJBbnkgdXNlciwgd2hvIGFsbG93ZWQgdG8gZWRpdCBwb3N0c1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogXCJhbnlfdXNlclwiLFxyXG5cdFx0bGFiZWw6IFwiQW55IHVzZXIgKCBpbmNsLiBHdWVzdCApXCJcclxuXHR9XHJcbl0gKTtcclxuXHJcbmNvbnN0IHZhbHVlRm9ybWF0cyA9IFRvb2xzLndpdGhQbGFjZWhvbGRlciggW1xyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJpZFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBcIkF0dGFjaG1lbnQgSURcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcInVybFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBcIkF0dGFjaG1lbnQgVVJMXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJib3RoXCIsXHJcblx0XHRcImxhYmVsXCI6IFwiQXJyYXkgd2l0aCBhdHRhY2htZW50IElEIGFuZCBVUkxcIlxyXG5cdH1cclxuXSApO1xyXG5cclxuZXhwb3J0IHtcclxuXHR1c2VyQWNjZXNzLFxyXG5cdHZhbHVlRm9ybWF0c1xyXG59OyIsImltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmllbGQtd3JhcHBlclwiO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCbG9ja0NvbnRyb2xzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0UGFuZWxCb2R5LFxyXG5cdF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sLFxyXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5sZXQgeyBJbnB1dENvbnRyb2wsIE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdElucHV0Q29udHJvbCA9IF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sO1xyXG59XHJcblxyXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VOdW1iZXJWYWx1ZSA9ICgga2V5LCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogbmV3VmFsdWUgPyBwYXJzZUludCggbmV3VmFsdWUgKSA6ICcnIH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4sXHJcblx0XHRpc1NlbGVjdGVkICYmIChcclxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxyXG5cdFx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluIFZhbHVlJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRrZXk9J21pbidcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbiB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtaW4nLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4IFZhbHVlJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRrZXk9J21heCdcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtYXgnLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3RlcCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0a2V5PSdzdGVwJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3RlcCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdzdGVwJywgbmV3VmFsdWUgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQpLFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgfVxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdFx0XHRtaW49eyBhdHRyaWJ1dGVzLm1pbiB8fCAwIH1cclxuXHRcdFx0XHRcdG1heD17IGF0dHJpYnV0ZXMubWF4IHx8IDEwMDAgfVxyXG5cdFx0XHRcdFx0c3RlcD17IGF0dHJpYnV0ZXMuc3RlcCB8fCAxIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgTnVtYmVyRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ051bWJlciBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IE51bWJlckVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IHsgU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCBTZWxlY3RSYWRpb0NoZWNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVja1wiO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHMsXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFkaW9FZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgeyBpc1NlbGVjdGVkLCBlZGl0UHJvcHM6IHsgdW5pcUtleSB9IH0gPSBwcm9wcztcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxyXG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0vPlxyXG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlcicgKSB9XHJcblx0XHRcdFx0c2NyaXB0RGF0YT17IHdpbmRvdy5KZXRGb3JtUmFkaW9GaWVsZERhdGEgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufSIsImltcG9ydCBSYWRpb0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdSYWRpbyBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFJhZGlvRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnLCAnYmxvY2tOYW1lJyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpZWxkLXdyYXBwZXInO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxuXHRfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IE51bWJlckNvbnRyb2wsIElucHV0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmlmICggdHlwZW9mIElucHV0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmdlRWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IFsgcmFuZ2VWYWx1ZSwgc2V0UmFuZ2VWYWx1ZSBdID0gdXNlU3RhdGUoIDUwICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHQ8VG9vbEJhckZpZWxkc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XHJcblx0XHQvPixcclxuXHRcdHByb3BzLmlzU2VsZWN0ZWQgJiYgKFxyXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdFx0dGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gVmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nbWluJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWluIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWluOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXggVmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdGtleT0nbWF4J1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWF4OiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdGVwJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHRrZXk9J3N0ZXAnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdGVwIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc3RlcDogcGFyc2VJbnQoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdwcmVmaXgnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSBwcmVmaXgnICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucHJlZml4IH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAncHJlZml4X3N1ZmZpeCcgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHByZWZpeDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdzdWZmaXgnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSBzdWZmaXgnICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3VmZml4IH1cclxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAncHJlZml4X3N1ZmZpeCcgKSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN1ZmZpeDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XHJcblx0XHQpLFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XHJcblx0XHRcdDxGaWVsZFdyYXBwZXJcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cclxuXHRcdFx0XHR3cmFwQ2xhc3Nlcz17IFtcclxuXHRcdFx0XHRcdCdyYW5nZS13cmFwJ1xyXG5cdFx0XHRcdF0gfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyYW5nZS1mbGV4LXdyYXBcIj5cclxuXHRcdFx0XHRcdDxJbnB1dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdFx0dHlwZT17ICdyYW5nZScgfVxyXG5cdFx0XHRcdFx0XHRtaW49eyBhdHRyaWJ1dGVzLm1pbiB8fCAwIH1cclxuXHRcdFx0XHRcdFx0bWF4PXsgYXR0cmlidXRlcy5tYXggfHwgMTAwIH1cclxuXHRcdFx0XHRcdFx0c3RlcD17IGF0dHJpYnV0ZXMuc3RlcCB8fCAxIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRSYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC12YWx1ZScgfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlLXByZWZpeCcgfT57IGF0dHJpYnV0ZXMucHJlZml4IH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuPnsgcmFuZ2VWYWx1ZSB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtc3VmZml4JyB9PnsgYXR0cmlidXRlcy5zdWZmaXggfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgUmFuZ2VFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnUmFuZ2UgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBSYW5nZUVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi8uLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCB7XHJcblx0Z2V0QXZhaWxhYmxlRmllbGRzLFxyXG5cdGdldEZpZWxkc1dpdGhvdXRDdXJyZW50LFxyXG5cdGdldEZvcm1GaWVsZHNCbG9ja3NcclxufSBmcm9tIFwiLi4vLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHtcclxuXHRjYWxjVHlwZSxcclxuXHRtYW5hZ2VJdGVtc0NvdW50XHJcbn0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRCbG9ja0NvbnRyb2xzLFxyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdElubmVyQmxvY2tzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0c2VsZWN0LFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0QnV0dG9uLFxyXG5cdFBvcG92ZXIsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXBlYXRlckVkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IFsgc2hvd01hY3Jvcywgc2V0U2hvd01hY3JvcyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQoKTtcclxuXHJcblx0Y29uc3QgbWV0YSA9IHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdGNvbnN0IGxhYmVsID0gVG9vbHMuZ2V0TGFiZWwoIG1ldGEsIGF0dHJpYnV0ZXMgKTtcclxuXHJcblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XHJcblx0XHRjb25zdCBmb3JtdWxhID0gYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfHwgJyc7XHJcblx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGNhbGNfZm9ybXVsYTogZm9ybXVsYSArICclRklFTEQ6OicgKyBtYWNyb3MgKyAnJScgfSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQ+XHJcblx0XHRcdHsgJ2N1c3RvbScgPT09IGF0dHJpYnV0ZXMucmVwZWF0ZXJfY2FsY190eXBlICYmIDxCdXR0b25cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQnV0dG9uJyApIH1cclxuXHRcdFx0XHRpc1RlcnRpYXJ5XHJcblx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdGljb249eyBzaG93TWFjcm9zID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd01hY3JvcyggdG9nZ2xlID0+ICEgdG9nZ2xlICkgfVxyXG5cdFx0XHQvPiB9XHJcblx0XHRcdHsgc2hvd01hY3JvcyAmJiA8UG9wb3ZlclxyXG5cdFx0XHRcdHBvc2l0aW9uPXsgJ2JvdHRvbSBsZWZ0JyB9XHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BvcG92ZXInICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBmb3JtRmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxyXG5cdFx0XHRcdFx0eyBmb3JtRmllbGRzLm1hcCggKCB7IHZhbHVlIH0sIGluZGV4ICkgPT4gPGRpdlxyXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnZmllbGRfJyArIHZhbHVlICsgaW5kZXggKSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aW5zZXJ0TWFjcm9zKCB2YWx1ZSApXHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdD57ICclRklFTEQ6OicgKyB2YWx1ZSArICclJyB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gKSB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cclxuXHRcdFx0PC9Qb3BvdmVyPiB9XHJcblx0XHQ8L1Rvb2xCYXJGaWVsZHM+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxQYW5lbEJvZHlcclxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nbWFuYWdlX2l0ZW1zX2NvdW50J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hbmFnZSByZXBlYXRlciBpdGVtcyBjb3VudCcgKSB9XHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFuYWdlX2l0ZW1zX2NvdW50IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG1hbmFnZV9pdGVtc19jb3VudDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgbWFuYWdlSXRlbXNDb3VudCB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7ICdtYW51YWxseScgPT09IGF0dHJpYnV0ZXMubWFuYWdlX2l0ZW1zX2NvdW50ICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSduZXdfaXRlbV9sYWJlbCdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdBZGQgTmV3IEl0ZW0gTGFiZWwnICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5ld19pdGVtX2xhYmVsIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBuZXdfaXRlbV9sYWJlbDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdHsgJ2R5bmFtaWNhbGx5JyA9PT0gYXR0cmlidXRlcy5tYW5hZ2VfaXRlbXNfY291bnQgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nbWFuYWdlX2l0ZW1zX2NvdW50X2ZpZWxkJ1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkIGl0ZW1zIGNvdW50JyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYW5hZ2VfaXRlbXNfY291bnRfZmllbGQgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWFuYWdlX2l0ZW1zX2NvdW50X2ZpZWxkOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHQvPiB9XHJcblxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J3JlcGVhdGVyX2NhbGNfdHlwZSdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGUgcmVwZWF0ZXIgcm93IHZhbHVlJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5yZXBlYXRlcl9jYWxjX3R5cGUgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgcmVwZWF0ZXJfY2FsY190eXBlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBjYWxjVHlwZSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7ICdjdXN0b20nID09PSBhdHRyaWJ1dGVzLnJlcGVhdGVyX2NhbGNfdHlwZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fcm93LW5vdGljZVwiPlxyXG5cdFx0XHRcdFx0eyBfXyggJ1NldCBtYXRoIGZvcm11bGEgdG8gY2FsY3VsYXRlIGZpZWxkIHZhbHVlLicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdFx0eyBfXyggJ0ZvciBleGFtcGxlOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPjxici8+XHJcblx0XHRcdFx0XHQlRklFTEQ6OnF1YW50aXR5JSolTUVUQTo6cHJpY2UlPGJyLz48YnIvPlxyXG5cdFx0XHRcdFx0eyBfXyggJ1doZXJlOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdFx0LVxyXG5cdFx0XHRcdFx0eyBfXyggJyVGSUVMRDo6cXVhbnRpdHklIC0gbWFjcm9zIGZvciBmb3JtIGZpZWxkIHZhbHVlLiBcInF1YW50aXR5XCIgLSBpcyBhIGZpZWxkIG5hbWUgdG8gZ2V0IHZhbHVlIGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdC1cclxuXHRcdFx0XHRcdHsgX18oICclTUVUQTo6cHJpY2UlIC0gbWFjcm9zIGZvciBjdXJyZW50IHBvc3QgbWV0YSB2YWx1ZS4gXCJwcmljZVwiIC0gaXMgYSBtZXRhIGtleSB0byBnZXQgdmFsdWUgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPjxici8+XHJcblx0XHRcdFx0PC9kaXY+IH1cclxuXHJcblxyXG5cdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxyXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAnRnJhZ21lbnQnICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gYXR0cmlidXRlcy5yZXBlYXRlcl9jYWxjX3R5cGUgJiYgPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybXNfX2NhbGMtZm9ybXVsYS1lZGl0b3JcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLXdyYXBcIj5cclxuXHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PVwiY2FsY19mb3JtdWxhXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfZm9ybXVsYSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGlvbiBGb3JtdWxhIGZvciBSZXBlYXRlcicgKSB9XHJcblxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBjYWxjX2Zvcm11bGE6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj4gfVxyXG5cdFx0XHQ8QmFzZUNvbnRyb2wga2V5PXsgdW5pcUtleSggJ3JlcGVhdGVyLWZpZWxkcy10aXRsZScgKSB9PlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2xhYmVsJyB9PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsLm5hbWUgfHwgJ1JlcGVhdGVyIGZpZWxkJyB9XHJcblx0XHRcdFx0XHRcdHsgYXR0cmlidXRlcy5yZXF1aXJlZCAmJiA8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fcmVxdWlyZWQnIH0+XHJcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsLm1hcmsgPyBsYWJlbC5tYXJrIDogJyonIH1cclxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+IH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAgamV0LWZvcm0tYnVpbGRlcl9fZGVzYycgfVxyXG5cdFx0XHRcdFx0IHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcwcHgnIH0gfT57IGF0dHJpYnV0ZXMuZGVzYyB9PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8SW5uZXJCbG9ja3NcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmVwZWF0ZXItZmllbGRzJyApIH1cclxuXHRcdFx0XHRyZW5kZXJBcHBlbmRlcj17ICgpID0+IChcclxuXHRcdFx0XHRcdDxJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyIGtleT17IHVuaXFLZXkoICdCdXR0b25CbG9ja0FwcGVuZGVyJyApIH0vPlxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScgfVxyXG5cdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0PiZ0aW1lczs8L0J1dHRvbj5cclxuXHRcdFx0PGRpdiBzdHlsZT17IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMC43ZW0nIH0gfS8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fYWN0aW9uc1wiPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19uZXcnIH1cclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0PnsgYXR0cmlidXRlcy5uZXdfaXRlbV9sYWJlbCB8fCAnQWRkIE5ldycgfTwvQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5pbXBvcnQgUmVwZWF0ZXJFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IFJlcGVhdGVyU2F2ZSBmcm9tIFwiLi9zYXZlXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1JhbmdlIEZpZWxkJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogUmVwZWF0ZXJFZGl0LFxyXG5cdHNhdmU6IFJlcGVhdGVyU2F2ZSxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgY2FsY1R5cGUgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdkZWZhdWx0JyxcclxuXHRcdGxhYmVsOiBfXyggJ0RlZmF1bHQgKHJldHVybnMgcm93cyBjb3VudCknIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnY3VzdG9tJyxcclxuXHRcdGxhYmVsOiBfXyggJ0N1c3RvbSAoY2FsY3VsYXRlIGN1c3RvbSB2YWx1ZSBmb3IgZWFjaCByb3cpJyApXHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgbWFuYWdlSXRlbXNDb3VudCA9IFtcclxuXHR7XHJcblx0XHR2YWx1ZTogJ21hbnVhbGx5JyxcclxuXHRcdGxhYmVsOiBfXyggJ01hbnVhbGx5JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2R5bmFtaWNhbGx5JyxcclxuXHRcdGxhYmVsOiBfXyggJ0R5bmFtaWNhbGx5IChnZXQgY291bnQgZnJvbSBmb3JtIGZpZWxkKScgKVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcblx0Y2FsY1R5cGUsXHJcblx0bWFuYWdlSXRlbXNDb3VudFxyXG59OyIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXBlYXRlclNhdmUoIHByb3BzICkge1xyXG5cdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2stcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2tcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0QmxvY2tDb250cm9scyxcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0RWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nc3dpdGNoX29uX2NoYW5nZSdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdTd2l0Y2ggcGFnZSBvbiBjaGFuZ2UnICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuc3dpdGNoX29uX2NoYW5nZSB9XHJcblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdzd2l0Y2hfb25fY2hhbmdlJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzd2l0Y2hfb25fY2hhbmdlOiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cclxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxyXG5cdFx0XHRcdHNjcmlwdERhdGE9eyB3aW5kb3cuSmV0Rm9ybVNlbGVjdEZpZWxkRGF0YSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IFNlbGVjdEVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdTZWxlY3QgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBTZWxlY3RFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcsICdibG9ja05hbWUnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgbGlzdEZyb20gPSBbXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcIm1hbnVhbF9pbnB1dFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ01hbnVhbCBJbnB1dCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJ2YWx1ZVwiOiBcInBvc3RzXCIsXHJcblx0XHRcImxhYmVsXCI6IF9fKCAnUG9zdHMnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJ0ZXJtc1wiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ1Rlcm1zJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRcInZhbHVlXCI6IFwibWV0YV9maWVsZFwiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ01ldGEgRmllbGQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwidmFsdWVcIjogXCJnZW5lcmF0ZVwiLFxyXG5cdFx0XCJsYWJlbFwiOiBfXyggJ0dlbmVyYXRlIER5bmFtaWNhbGx5JyApXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IHsgbGlzdEZyb20gfTsiLCJpbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0RWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCB7IGNsYXNzTmFtZTogJ2pldC1mb3JtLWJ1aWxkZXJfX3N1Ym1pdC13cmFwJyB9ICk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHRhdHRyc1NldHRpbmdzPXsge1xyXG5cdFx0XHRcdFx0bmFtZTogeyBzaG93OiBmYWxzZSB9XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3N1Ym1pdC13cmFwJyApIH0+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fc3VibWl0JyB9XHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMubGFiZWwgfHwgJ1N1Ym1pdCcgfVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn0iLCJpbXBvcnQgU3VibWl0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1N1Ym1pdCBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFN1Ym1pdEVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9maWVsZC13cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHtcclxuXHRmaWVsZFR5cGVzTGlzdCxcclxuXHRtYXNrUGxhY2Vob2xkZXJzTGlzdCxcclxuXHRtYXNrVHlwZXNMaXN0LFxyXG5cdG1hc2tWaXNpYmlsaXRpZXNMaXN0XHJcbn0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IE51bWJlckNvbnRyb2wsIElucHV0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGlzU2VsZWN0ZWQsXHJcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoIGtleSwgbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRjb25zdCB2YWx1ZSA9ICggbmV3VmFsdWUgJiYgbmV3VmFsdWUgPiAwICkgPyBwYXJzZUludCggbmV3VmFsdWUgKSA6IG51bGw7XHJcblxyXG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0ZpZWxkIFNldHRpbmdzJyApIH0+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nZmllbGRfdHlwZSdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdGaWVsZCBUeXBlJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF90eXBlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX3R5cGU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGZpZWxkVHlwZXNMaXN0IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluIGxlbmd0aCAoc3ltYm9scyknICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0a2V5PSdtaW5sZW5ndGgnXHJcblx0XHRcdFx0XHRtaW49eyAxIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5taW5sZW5ndGggfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtaW5sZW5ndGgnLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4IGxlbmd0aCAoc3ltYm9scyknICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0a2V5PSdtYXhsZW5ndGgnXHJcblx0XHRcdFx0XHRtaW49eyAxIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXhsZW5ndGggfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtYXhsZW5ndGgnLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZW5hYmxlX2lucHV0X21hc2snIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdTZXQgSW5wdXQgTWFzaycgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5lbmFibGVfaW5wdXRfbWFzayB9XHJcblx0XHRcdFx0XHRoZWxwPXsgX18oICdDaGVjayB0aGlzIHRvIHNldHVwIHNwZWNpZmljIGlucHV0IGZvcm1hdCBmb3IgdGhlIGN1cnJlbnQgZmllbGQnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGVuYWJsZV9pbnB1dF9tYXNrOiBuZXdWYWwgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMuZW5hYmxlX2lucHV0X21hc2sgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdtYXNrX3R5cGUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXNrIHR5cGUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXNrX3R5cGUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtYXNrX3R5cGU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBtYXNrVHlwZXNMaXN0IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdpbnB1dF9tYXNrJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW5wdXQgbWFzaycgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5pbnB1dF9tYXNrIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaW5wdXRfbWFzazogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7ICggISBhdHRyaWJ1dGVzLm1hc2tfdHlwZSApICYmIDxkaXYgY2xhc3NOYW1lPXsgJ2hlbHAtaW5wdXQnIH0+XHJcblx0XHRcdFx0XHRcdHsgYXR0ckhlbHAoICdpbnB1dF9tYXNrX2RlZmF1bHQnICkgfVxyXG5cdFx0XHRcdFx0PC9kaXY+IH1cclxuXHJcblx0XHRcdFx0XHR7ICdkYXRldGltZScgPT09IGF0dHJpYnV0ZXMubWFza190eXBlICYmIDxkaXYgY2xhc3NOYW1lPXsgJ2hlbHAtaW5wdXQnIH0+XHJcblx0XHRcdFx0XHRcdHsgX18oICdFeGFtcGxlczonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9IGRkL21tL3l5eXksIG1tL2RkL3l5eXk8YnIvPlxyXG5cdFx0XHRcdFx0XHR7IF9fKCAnTW9yZSBpbmZvIC0gJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXsgYXR0ckhlbHAoICdpbnB1dF9tYXNrX2RhdGV0aW1lX2xpbmsnICkgfVxyXG5cdFx0XHRcdFx0XHQgICB0YXJnZXQ9J19ibGFuayc+eyBfXyggJ2hlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+IH1cclxuXHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J21hc2tfdmlzaWJpbGl0eSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgdmlzaWJpbGl0eScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hc2tfdmlzaWJpbGl0eSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1hc2tfdmlzaWJpbGl0eTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tWaXNpYmlsaXRpZXNMaXN0IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J21hc2tfcGxhY2Vob2xkZXInXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXNrIHBsYWNlaG9sZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFza19wbGFjZWhvbGRlciB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1hc2tfcGxhY2Vob2xkZXI6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBtYXNrUGxhY2Vob2xkZXJzTGlzdCB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59O1xyXG4iLCJpbXBvcnQgVGV4dEVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdUZXh0IEZpZWxkJyApLFxyXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogVGV4dEVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzXHJcbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGZpZWxkVHlwZXNMaXN0ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAndGV4dCcsXHJcblx0XHRsYWJlbDogX18oICdUZXh0JyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2VtYWlsJyxcclxuXHRcdGxhYmVsOiBfXyggJ0VtYWlsJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3VybCcsXHJcblx0XHRsYWJlbDogX18oICdVcmwnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndGVsJyxcclxuXHRcdGxhYmVsOiBfXyggJ1RlbCcgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdwYXNzd29yZCcsXHJcblx0XHRsYWJlbDogX18oICdQYXNzd29yZCcgKVxyXG5cdH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNrVHlwZXNMaXN0ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnJyxcclxuXHRcdGxhYmVsOiBfXyggJ0RlZmF1bHQnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnZGF0ZXRpbWUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRGF0ZXRpbWUnIClcclxuXHR9LFxyXG5dO1xyXG5cclxuY29uc3QgbWFza1Zpc2liaWxpdGllc0xpc3QgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdhbHdheXMnLFxyXG5cdFx0bGFiZWw6IF9fKCAnQWx3YXlzJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2hvdmVyJyxcclxuXHRcdGxhYmVsOiBfXyggJ0hvdmVyJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2ZvY3VzJyxcclxuXHRcdGxhYmVsOiBfXyggJ0ZvY3VzJyApXHJcblx0fSxcclxuXTtcclxuXHJcbmNvbnN0IG1hc2tQbGFjZWhvbGRlcnNMaXN0ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnXycsXHJcblx0XHRsYWJlbDogJ18nXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJy0nLFxyXG5cdFx0bGFiZWw6ICctJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICcqJyxcclxuXHRcdGxhYmVsOiAnKidcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAn4oCiJyxcclxuXHRcdGxhYmVsOiAn4oCiJ1xyXG5cdH0sXHJcbl07XHJcblxyXG5leHBvcnQge1xyXG5cdGZpZWxkVHlwZXNMaXN0LFxyXG5cdG1hc2tUeXBlc0xpc3QsXHJcblx0bWFza1BsYWNlaG9sZGVyc0xpc3QsXHJcblx0bWFza1Zpc2liaWxpdGllc0xpc3RcclxufTsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpZWxkLXdyYXBwZXJcIjtcclxuaW1wb3J0IHtcclxuXHRBZHZhbmNlZEZpZWxkcyxcclxuXHRHZW5lcmFsRmllbGRzLFxyXG5cdFRvb2xCYXJGaWVsZHNcclxufSBmcm9tIFwiLi4vY29udHJvbHMvZmllbGQtY29udHJvbFwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzLFxyXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRhcmVhRWRpdCggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VOdW1iZXJWYWx1ZSA9ICgga2V5LCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gKCBuZXdWYWx1ZSAmJiBuZXdWYWx1ZSA+IDAgKSA/IHBhcnNlSW50KCBuZXdWYWx1ZSApIDogbnVsbDtcclxuXHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogdmFsdWUgfSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxyXG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cclxuXHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdHRpdGxlPXsgX18oICdGaWVsZCBTZXR0aW5ncycgKSB9XHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BhbmVsQm9keScgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbiBsZW5ndGggKHN5bWJvbHMpJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdGtleT0nbWlubGVuZ3RoJ1xyXG5cdFx0XHRcdFx0bWluPXsgMSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWlubGVuZ3RoIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IGNoYW5nZU51bWJlclZhbHVlKCAnbWlubGVuZ3RoJywgbmV3VmFsdWUgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heCBsZW5ndGggKHN5bWJvbHMpJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdFx0XHRcdGtleT0nbWF4bGVuZ3RoJ1xyXG5cdFx0XHRcdFx0bWluPXsgMSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4bGVuZ3RoIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IGNoYW5nZU51bWJlclZhbHVlKCAnbWF4bGVuZ3RoJywgbmV3VmFsdWUgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59XHJcbiIsImltcG9ydCBUZXh0YXJlYUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdUZXh0YXJlYSBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFRleHRhcmVhRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmllbGQtd3JhcHBlcic7XHJcbmltcG9ydCB7XHJcblx0QWR2YW5jZWRGaWVsZHMsXHJcblx0R2VuZXJhbEZpZWxkcyxcclxuXHRUb29sQmFyRmllbGRzXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xzL2ZpZWxkLWNvbnRyb2xcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0SW5zcGVjdG9yQ29udHJvbHMsXHJcblx0dXNlQmxvY2tQcm9wcyxcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0X19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZUVkaXQoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpc1NlbGVjdGVkLFxyXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0cmV0dXJuIFtcclxuXHRcdDxUb29sQmFyRmllbGRzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPixcclxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXHJcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxHZW5lcmFsRmllbGRzXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cclxuXHRcdFx0PEZpZWxkV3JhcHBlclxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxyXG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ICdJbnB1dCB0eXBlPVwidGltZVwiJyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG59IiwiaW1wb3J0IFRpbWVFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnVGltZSBGaWVsZCcgKSxcclxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IFRpbWVFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5nc1xyXG59OyIsImltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmllbGQtd3JhcHBlclwiO1xyXG5pbXBvcnQge1xyXG5cdEFkdmFuY2VkRmllbGRzLFxyXG5cdEdlbmVyYWxGaWVsZHMsXHJcblx0VG9vbEJhckZpZWxkc1xyXG59IGZyb20gXCIuLi9jb250cm9scy9maWVsZC1jb250cm9sXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFd5c2l3eWdFZGl0KCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgeyBlZGl0UHJvcHM6IHsgdW5pcUtleSB9IH0gPSBwcm9wcztcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0PFRvb2xCYXJGaWVsZHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+LFxyXG5cdFx0aXNTZWxlY3RlZCAmJiAoXHJcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxyXG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8QWR2YW5jZWRGaWVsZHNcclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XHJcblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxyXG5cdFx0KSxcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8RmllbGRXcmFwcGVyXHJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XHJcblx0XHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHRdO1xyXG5cclxufSIsImltcG9ydCBXeXNpd3lnRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ1d5c2l3eWcgRmllbGQnICksXHJcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBXeXNpd3lnRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3NcclxufTsiLCJpbXBvcnQgeyBzYXZlR2xvYmFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL21hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25GaWVsZHNNYXAgPSAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IGZpZWxkcyA9IFtdLCBsYWJlbCA9ICdbRW1wdHkgbGFiZWxdJywgY2hpbGRyZW4gPSAoKSA9PiB7XHJcblx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0IH0gKSA9PiB7XHJcblxyXG5cdHJldHVybiA8QmFzZUNvbnRyb2xcclxuXHRcdGxhYmVsPXsgbGFiZWwgfVxyXG5cdFx0a2V5PSdqZXRfZmllbGRzX21hcCdcclxuXHQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCc+XHJcblx0XHRcdHsgZmllbGRzLm1hcCggKCBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdLCBpbmRleCApID0+IDxSZWFjdC5GcmFnbWVudFxyXG5cdFx0XHRcdGtleT17IGBmaWVsZF9pbl9tYXBfJHsgZmllbGRJZCArIGluZGV4IH1gIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4oIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9ICkgfVxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiApIH1cclxuXHRcdDwvZGl2PlxyXG5cdDwvQmFzZUNvbnRyb2w+XHJcbn07XHJcblxyXG5zYXZlR2xvYmFsQ29tcG9uZW50KCAnSmV0RkJDb21wb25lbnRzJywgeyBBY3Rpb25GaWVsZHNNYXAgfSApOyIsImNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuXHJcbmNsYXNzIEFjdGlvbk1lc3NhZ2VzIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLnNldE1lc3NhZ2VzKCk7XHJcblx0fVxyXG5cclxuXHRzZXRNZXNzYWdlcygpIHtcclxuXHRcdGlmICggdGhpcy5wcm9wcy5zZXR0aW5ncyAmJiB0aGlzLnByb3BzLnNldHRpbmdzLm1lc3NhZ2VzICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBtZXNzYWdlcyA9IHt9O1xyXG5cclxuXHRcdE9iamVjdC5lbnRyaWVzKCB0aGlzLnByb3BzLnNvdXJjZS5fX21lc3NhZ2VzICkuZm9yRWFjaCggKCBbIHR5cGUsIGRhdGEgXSApID0+IHtcclxuXHRcdFx0bWVzc2FnZXNbIHR5cGUgXSA9IGRhdGEudmFsdWU7XHJcblx0XHR9IClcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnRoaXMucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdG1lc3NhZ2VzOiBtZXNzYWdlc1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Z2V0TWVzc2FnZSggbmFtZSApIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzWyAnbWVzc2FnZXMnIF0gJiYgc2V0dGluZ3NbICdtZXNzYWdlcycgXVsgbmFtZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbICdtZXNzYWdlcycgXVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblxyXG5cdGNoYW5nZUZpZWxkc01hcCggeyBzb3VyY2UsIG5hbWVGaWVsZCwgdmFsdWUgfSApIHtcclxuXHRcdGNvbnN0IGZpZWxkc01hcCA9IE9iamVjdC5hc3NpZ24oXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR0aGlzLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcclxuXHRcdFx0eyBbIG5hbWVGaWVsZCBdOiB2YWx1ZSB9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoIHZhbHVlLCBuYW1lRmllbGQgKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNvdXJjZSA9ICdtZXNzYWdlcyc7XHJcblxyXG5cdFx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcclxuXHRcdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ01lc3NhZ2VzIFNldHRpbmdzOicgKSB9XHJcblx0XHRcdGtleT0nbWVzc2FnZXNfc2V0dGluZ3NfZmllbGRzJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItbWV0YS1yb3dzJz5cclxuXHRcdFx0XHR7IHNldHRpbmdzLm1lc3NhZ2VzICYmIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5tZXNzYWdlcyApXHJcblx0XHRcdFx0Lm1hcCggKCBbIHR5cGUsIGRhdGEgXSwgaWQgKSA9PiA8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdGtleT17ICdtZXNzYWdlXycgKyB0eXBlICsgaWQgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyB0eXBlICsgaWQgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgbWVzc2FnZXMoIHR5cGUgKS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldE1lc3NhZ2UoIHR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZU1lc3NhZ2UoIG5ld1ZhbHVlLCB0eXBlICkgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9CYXNlQ29udHJvbD47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25NZXNzYWdlczsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25Nb2RhbCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvblJlcXVlc3RDbG9zZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHRpdGxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBjbGFzc05hbWVzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uVXBkYXRlQ2xpY2ssXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IG9uQ2FuY2VsQ2xpY2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdEJ1dHRvbixcclxuXHRcdEJ1dHRvbkdyb3VwLFxyXG5cdFx0TW9kYWwsXHJcblx0fSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVN0YXRlLFxyXG5cdFx0dXNlRWZmZWN0XHJcblx0fSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0IG1vZGFsQ2xhc3NlcyA9IFsgJ2pldC1mb3JtLWVkaXQtbW9kYWwnLCAuLi5jbGFzc05hbWVzIF0uam9pbiggJyAnICk7XHJcblxyXG5cdGNvbnN0IFsgYWN0aW9uQ2xpY2ssIHNldEFjdGlvbkNsaWNrIF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuXHRjb25zdCB1cGRhdGVDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25VcGRhdGVDbGljayApIHtcclxuXHRcdFx0b25VcGRhdGVDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIHRydWUgKVxyXG5cdH1cclxuXHRjb25zdCBjYW5jZWxDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25DYW5jZWxDbGljayApIHtcclxuXHRcdFx0b25DYW5jZWxDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIGZhbHNlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPE1vZGFsXHJcblx0XHRvblJlcXVlc3RDbG9zZT17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdGNsYXNzTmFtZT17IG1vZGFsQ2xhc3NlcyB9XHJcblx0XHR0aXRsZT17IHRpdGxlIH1cclxuXHQ+XHJcblx0XHR7ICEgY2hpbGRyZW4gJiYgPGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCJcclxuXHRcdD5cclxuXHRcdFx0eyAnQWN0aW9uIGNhbGxiYWNrIGlzIG5vdCBmb3VuZC4nIH1cclxuXHRcdDwvZGl2PiB9XHJcblx0XHR7IGNoaWxkcmVuICYmIDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fY29udGVudFwiPlxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgfVxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxCdXR0b25Hcm91cFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2FjdGlvbnNcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdXBkYXRlQ2xpY2sgfVxyXG5cdFx0XHRcdD5VcGRhdGU8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogJzAgMCAwIDEwcHgnXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyBjYW5jZWxDbGljayB9XHJcblx0XHRcdFx0PkNhbmNlbDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0PC9kaXY+IH1cclxuXHQ8L01vZGFsPjtcclxufSIsImltcG9ydCB7IGZyb21Mb2NhbGl6ZUhlbHBlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCggYWN0aW9uVHlwZSwgQWN0aW9uSW5zdGFuY2UgKSB7XHJcblx0Y29uc3QgbG9jYWxpemVkRGF0YSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb25UeXBlICk7XHJcblxyXG5cdHJldHVybiBwcm9wcyA9PiB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdFx0fSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBnZXRNYXBGaWVsZCA9ICggeyBzb3VyY2UgPSAnZmllbGRzX21hcCcsIG5hbWUgfSApID0+IHtcclxuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBwcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRcdGlmICggdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzZXRNYXBGaWVsZCA9ICggeyBzb3VyY2UgPSAnZmllbGRzX21hcCcsIG5hbWVGaWVsZCwgdmFsdWUgfSApID0+IHtcclxuXHRcdFx0Y29uc3QgZmllbGRzTWFwID0ge1xyXG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcclxuXHRcdFx0XHRbIG5hbWVGaWVsZCBdOiB2YWx1ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBhZGRpdGlvbmFsUHJvcHMgPSB7IG9uQ2hhbmdlU2V0dGluZywgZ2V0TWFwRmllbGQsIHNldE1hcEZpZWxkIH07XHJcblxyXG5cdFx0cmV0dXJuIDxBY3Rpb25JbnN0YW5jZVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0eyAuLi5sb2NhbGl6ZWREYXRhIH1cclxuXHRcdFx0eyAuLi5hZGRpdGlvbmFsUHJvcHMgfVxyXG5cdFx0Lz5cclxuXHR9O1xyXG59IiwiY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gRnJvbUdlbmVyYXRvcnNGaWVsZHMoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0c2V0QXR0cmlidXRlcyxcclxuXHRcdGVkaXRQcm9wczogeyBhdHRySGVscCB9XHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT0nZ2VuZXJhdG9yX2Z1bmN0aW9uJ1xyXG5cdFx0XHRsYWJlbD0nR2VuZXJhdG9yIEZ1bmN0aW9uJ1xyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfZnVuY3Rpb24gfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfZnVuY3Rpb246IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHRcdG9wdGlvbnM9eyB3aW5kb3cuSmV0Rm9ybVNlbGVjdEZpZWxkRGF0YS5nZW5lcmF0b3JzX2xpc3QgfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J2dlbmVyYXRvcl9maWVsZCdcclxuXHRcdFx0bGFiZWw9J0ZpZWxkIE5hbWUnXHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfZmllbGQgfVxyXG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdnZW5lcmF0b3JfZmllbGQnLCBhdHRyaWJ1dGVzICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfZmllbGQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nZnJvbV9nZW5lcmF0b3JfX3ZhbHVlX2Zyb21fbWV0YSdcclxuXHRcdFx0bGFiZWw9J1ZhbHVlIGZyb20gbWV0YSBmaWVsZCdcclxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAndmFsdWVfZnJvbV9tZXRhJyApIH1cclxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZyb21fZ2VuZXJhdG9yX192YWx1ZV9mcm9tX21ldGEgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmcm9tX2dlbmVyYXRvcl9fdmFsdWVfZnJvbV9tZXRhOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknXHJcblx0XHRcdGxhYmVsPSdDYWxjdWxhdGVkIHZhbHVlIGZyb20gbWV0YSBmaWVsZCdcclxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAnY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleScgKSB9XHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5IH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcm9tR2VuZXJhdG9yc0ZpZWxkczsiLCJpbXBvcnQgUmVwZWF0ZXJXaXRoU3RhdGUgZnJvbSBcIi4uL3JlcGVhdGVyLXdpdGgtc3RhdGVcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbi1tb2RhbFwiO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRUZXh0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgYWRkTmV3T3B0aW9uID0ge1xyXG5cdGxhYmVsOiAnJyxcclxuXHR2YWx1ZTogJycsXHJcblx0Y2FsY3VsYXRlOiAnJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gRnJvbU1hbnVhbEZpZWxkcyggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IFsgc2hvd01hbnVhbE1vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0YXR0cmlidXRlc1xyXG5cdH0gPSBwcm9wcztcclxuXHJcblxyXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xyXG5cdFx0c2V0U2hvd01vZGFsKCB0b2dnbGUgPT4gISB0b2dnbGUgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uVXBkYXRlT3B0aW9ucyA9IGl0ZW1zID0+IHtcclxuXHRcdC8qIFJlbW92ZSBlbXB0eSBvcHRpb25zICovXHJcblx0XHRjb25zdCBmaWVsZF9vcHRpb25zID0gaXRlbXMuZmlsdGVyKCBvcHRpb24gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKCBCb29sZWFuKCBvcHRpb24udmFsdWUgKSB8fCBCb29sZWFuKCBvcHRpb24uY2FsY3VsYXRlICkgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX29wdGlvbnMgfSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbUhlYWRpbmcgPSAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiB7XHJcblx0XHRjb25zdCBsZWZ0UGFydCA9IFsgYCMkeyBpbmRleCArIDEgfWAgXTtcclxuXHRcdGNvbnN0IHJpZ2h0UGFydCA9IFtdO1xyXG5cclxuXHRcdGlmICggY3VycmVudEl0ZW0ubGFiZWwgKSB7XHJcblx0XHRcdHJpZ2h0UGFydC5wdXNoKCBgTGFiZWwgWyR7IGN1cnJlbnRJdGVtLmxhYmVsIH1dYCApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBjdXJyZW50SXRlbS52YWx1ZSApIHtcclxuXHRcdFx0cmlnaHRQYXJ0LnB1c2goIGBWYWx1ZSBbJHsgY3VycmVudEl0ZW0udmFsdWUgfV1gICk7XHJcblx0XHR9XHJcblx0XHRpZiAoIGN1cnJlbnRJdGVtLmNhbGN1bGF0ZSApIHtcclxuXHRcdFx0cmlnaHRQYXJ0LnB1c2goIGBDYWxjdWxhdGUgWyR7IGN1cnJlbnRJdGVtLmNhbGN1bGF0ZSB9XWAgKTtcclxuXHRcdH1cclxuXHRcdGxlZnRQYXJ0LnB1c2goIHJpZ2h0UGFydC5qb2luKCAnIHwgJyApIClcclxuXHJcblx0XHRyZXR1cm4gbGVmdFBhcnQuam9pbiggJyAnICk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9J2pldC1mb3JtL21hbmFnZS1tYW51YWwtaXRlbXMnPlxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRvbkNsaWNrPXsgdG9nZ2xlTW9kYWwgfVxyXG5cdFx0XHRpY29uPXsgJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbTogJzE1cHgnXHJcblx0XHRcdH0gfVxyXG5cdFx0PlxyXG5cdFx0XHR7IF9fKCAnTWFuYWdlIEl0ZW1zJyApIH1cclxuXHRcdDwvQnV0dG9uPlxyXG5cdFx0eyBzaG93TWFudWFsTW9kYWwgJiYgPEFjdGlvbk1vZGFsXHJcblx0XHRcdHRpdGxlPXsgJ0VkaXQgTWFudWFsIE9wdGlvbnMnIH1cclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyB0b2dnbGVNb2RhbCB9XHJcblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiA8UmVwZWF0ZXJXaXRoU3RhdGVcclxuXHRcdFx0XHRcdGl0ZW1zPXsgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zIH1cclxuXHRcdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgb25VcGRhdGVPcHRpb25zIH1cclxuXHRcdFx0XHRcdG5ld0l0ZW09eyBhZGROZXdPcHRpb24gfVxyXG5cdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWw9eyBfXyggJ0FkZCBOZXcgT3B0aW9uJyApIH1cclxuXHRcdFx0XHRcdEl0ZW1IZWFkaW5nPXsgaXRlbUhlYWRpbmcgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgKCB7IGN1cnJlbnRJdGVtLCBjaGFuZ2VDdXJyZW50SXRlbSB9ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGtleT0nbWFudWFsX2xhYmVsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0xhYmVsJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGxhYmVsOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PSdtYW51YWxfdmFsdWUnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUnICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PSdtYW51YWxfY2FsY3VsYXRlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmNhbGN1bGF0ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGNhbGN1bGF0ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC8+O1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT5cclxuXHRcdFx0fSB9XHJcblx0XHQ8L0FjdGlvbk1vZGFsPiB9XHJcblx0PC9SZWFjdC5GcmFnbWVudD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb21NYW51YWxGaWVsZHM7IiwiaW1wb3J0IHsgZ2V0U2VsZWN0U291cmNlIH0gZnJvbSBcIi4vc291cmNlc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5mdW5jdGlvbiBGcm9tUG9zdFRlcm1zRmllbGRzKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdHNldEF0dHJpYnV0ZXMsXHJcblx0XHRlZGl0UHJvcHM6IHsgYXR0ckhlbHAgfVxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHR7IGdldFNlbGVjdFNvdXJjZSggcHJvcHMgKSB9XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PSd2YWx1ZV9mcm9tX2tleSdcclxuXHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlIGZyb20gbWV0YSBmaWVsZCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52YWx1ZV9mcm9tX2tleSB9XHJcblx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3ZhbHVlX2Zyb21fbWV0YScgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknXHJcblx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGVkIHZhbHVlIGZyb20gbWV0YSBmaWVsZCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5IH1cclxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAnY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleScgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXk6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdDwvPjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb21Qb3N0VGVybXNGaWVsZHM7IiwiaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICcuLi9maWVsZC13cmFwcGVyJztcclxuaW1wb3J0IHsgbGlzdEZyb20gfSBmcm9tIFwiLi4vLi4vYmxvY2tzL3NlbGVjdC1yYWRpby1jaGVrYy1vcHRpb25zXCI7XHJcblxyXG5jb25zdCB7XHJcblx0Q2hlY2tib3hDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0UmFkaW9Db250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IERFTElNSVRFUiA9ICcgLSAnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlZGl0UHJvcHM6IHsgYmxvY2tOYW1lLCB1bmlxS2V5IH0sXHJcblx0XHRzY3JpcHREYXRhLFxyXG5cdFx0YXR0cmlidXRlc1xyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgZ2V0Q2hlY2tib3ggPSAoIGxhYmVsLCBpbmRleCA9IDEgKSA9PiB7XHJcblx0XHRyZXR1cm4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBjaGVja2JveGVzLXdyYXAnIH1cclxuXHRcdFx0a2V5PXsgYGNoZWNrX3BsYWNlX2hvbGRlcl9ibG9ja18keyBsYWJlbCArIGluZGV4IH1gIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0U2VsZWN0ID0gKCB7IG9wdGlvbnMsIGluZGV4IH0gKSA9PiB7XHJcblx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PXsgYHNlbGVjdF9wbGFjZV9ob2xkZXJfYmxvY2tfJHsgYXR0cmlidXRlcy5uYW1lICsgaW5kZXggfWAgfVxyXG5cdFx0XHQvL2xhYmVsPXsgYXR0cmlidXRlcy5sYWJlbCB9XHJcblx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cclxuXHRcdFx0Ly9oZWxwPXsgYXR0cmlidXRlcy5kZXNjIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz47XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRSYWRpbyA9ICggeyBvcHRpb25zLCBsYWJlbCwgaW5kZXggfSApID0+IHtcclxuXHRcdHJldHVybiA8UmFkaW9Db250cm9sXHJcblx0XHRcdGtleT17IGByYWRpb19wbGFjZV9ob2xkZXJfYmxvY2tfJHsgbGFiZWwgKyBpbmRleCB9YCB9XHJcblx0XHRcdC8vbGFiZWw9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cclxuXHRcdFx0b3B0aW9ucz17IG9wdGlvbnMgfVxyXG5cdFx0XHQvL2hlbHA9eyBhdHRyaWJ1dGVzLmRlc2MgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcclxuXHRcdFx0fSB9XHJcblx0XHQvPjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldFByb3AgPSAoIG9mLCBwcm9wTmFtZSwgaWZFbXB0eSA9ICcnICkgPT4ge1xyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG9mICYmICd1bmRlZmluZWQnICE9PSB0eXBlb2Ygb2ZbIHByb3BOYW1lIF0gKSB7XHJcblx0XHRcdHJldHVybiBvZlsgcHJvcE5hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaWZFbXB0eTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRMYWJlbFByb3AgPSBvZiA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0UHJvcCggb2YsICdsYWJlbCcgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRGdWxsTGFiZWwgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRmaWVsZF9vcHRpb25zX2Zyb20sXHJcblx0XHRcdGZpZWxkX29wdGlvbnNfcG9zdF90eXBlLFxyXG5cdFx0XHRmaWVsZF9vcHRpb25zX3RheCxcclxuXHRcdFx0ZmllbGRfb3B0aW9uc19rZXksXHJcblx0XHRcdGdlbmVyYXRvcl9mdW5jdGlvbixcclxuXHRcdFx0Z2VuZXJhdG9yX2ZpZWxkXHJcblx0XHR9ID0gYXR0cmlidXRlcztcclxuXHJcblx0XHRsZXQgZnVsbF9sYWJlbCA9IFtdO1xyXG5cdFx0bGV0IHZhbHVlID0gW107XHJcblx0XHRzd2l0Y2ggKCBmaWVsZF9vcHRpb25zX2Zyb20gKSB7XHJcblx0XHRcdGNhc2UgJ3Bvc3RzJzpcclxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfcG9zdF90eXBlICkge1xyXG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCBzY3JpcHREYXRhLnBvc3RfdHlwZXNfbGlzdC5maW5kKFxyXG5cdFx0XHRcdFx0XHRvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZVxyXG5cdFx0XHRcdFx0KSApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAndGVybXMnOlxyXG5cdFx0XHRcdGlmICggZmllbGRfb3B0aW9uc190YXggKSB7XHJcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBnZXRMYWJlbFByb3AoIHNjcmlwdERhdGEudGF4b25vbWllc19saXN0LmZpbmQoXHJcblx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZpZWxkX29wdGlvbnNfdGF4XHJcblx0XHRcdFx0XHQpICkgKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ21ldGFfZmllbGQnOlxyXG5cdFx0XHRcdGlmICggZmllbGRfb3B0aW9uc19rZXkgKSB7XHJcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBmaWVsZF9vcHRpb25zX2tleSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2dlbmVyYXRlJzpcclxuXHRcdFx0XHRpZiAoIGdlbmVyYXRvcl9mdW5jdGlvbiApIHtcclxuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdldExhYmVsUHJvcCggc2NyaXB0RGF0YS5nZW5lcmF0b3JzX2xpc3QuZmluZChcclxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZ2VuZXJhdG9yX2Z1bmN0aW9uXHJcblx0XHRcdFx0XHQpICkgKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIGdlbmVyYXRvcl9maWVsZCApIHtcclxuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdlbmVyYXRvcl9maWVsZCApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblx0XHRmdWxsX2xhYmVsLnB1c2goIGdldExhYmVsUHJvcCggbGlzdEZyb20uZmluZCggb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc19mcm9tICkgKSApO1xyXG5cclxuXHRcdGlmICggdmFsdWUubGVuZ3RoICkge1xyXG5cdFx0XHRmdWxsX2xhYmVsLnB1c2goIHZhbHVlLmpvaW4oIERFTElNSVRFUiApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZ1bGxfbGFiZWwuam9pbiggREVMSU1JVEVSICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRNYW51YWxGaWVsZCA9ICggbGFiZWwgPSAnJyApID0+IHtcclxuXHRcdGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAnY2hlY2tib3gnICkgKSB7XHJcblx0XHRcdGlmICggbGFiZWwgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBsYWJlbCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubWFwKCAoIHsgbGFiZWw6IGNoZWNrTGFiZWwgfSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBjaGVja0xhYmVsLCBpbmRleCApXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAnc2VsZWN0JyApICkge1xyXG5cdFx0XHRpZiAoIGxhYmVsICkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcclxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRcdFx0XHRvcHRpb25zOiBbIHsgbGFiZWwgfSBdXHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcclxuXHRcdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdG9wdGlvbnM6IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggYmxvY2tOYW1lLmluY2x1ZGVzKCAncmFkaW8nICkgKSB7XHJcblx0XHRcdGlmICggbGFiZWwgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldFJhZGlvKCB7XHJcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdFx0b3B0aW9uczogWyB7IGxhYmVsIH0gXVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZ2V0UmFkaW8oIHtcclxuXHRcdFx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0XHRcdG9wdGlvbnM6IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPEZpZWxkV3JhcHBlclxyXG5cdFx0a2V5PXsgJ2pldC1mb3JtLWJ1aWxkZXItZmllbGQtd3JhcHBlcicgfVxyXG5cdFx0eyAuLi5wcm9wcyB9XHJcblx0PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGRzLWdyb3VwJyB9PlxyXG5cdFx0XHR7ICggJ21hbnVhbF9pbnB1dCcgIT09IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc19mcm9tIHx8ICEgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zLmxlbmd0aCApICYmXHJcblx0XHRcdGdldE1hbnVhbEZpZWxkKCBnZXRGdWxsTGFiZWwoIHNjcmlwdERhdGEsIGF0dHJpYnV0ZXMgKSApIHx8IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfZnJvbSAmJiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubGVuZ3RoICYmXHJcblx0XHRcdGdldE1hbnVhbEZpZWxkKCkgfHwgbnVsbFxyXG5cdFx0XHR9XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L0ZpZWxkV3JhcHBlcj47XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGxpc3RGcm9tIH0gZnJvbSBcIi4uLy4uL2Jsb2Nrcy9zZWxlY3QtcmFkaW8tY2hla2Mtb3B0aW9uc1wiO1xyXG5pbXBvcnQgRnJvbU1hbnVhbEZpZWxkcyBmcm9tIFwiLi9mcm9tLW1hbnVhbC1maWVsZHNcIjtcclxuaW1wb3J0IEZyb21Qb3N0VGVybXNGaWVsZHMgZnJvbSBcIi4vZnJvbS1wb3N0LXRlcm1zLWZpZWxkc1wiO1xyXG5pbXBvcnQgRnJvbUdlbmVyYXRvcnNGaWVsZHMgZnJvbSBcIi4vZnJvbS1nZW5lcmF0b3JzLWZpZWxkc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gU2VsZWN0UmFkaW9DaGVjayggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRzZXRBdHRyaWJ1dGVzLFxyXG5cdFx0aXNTZWxlY3RlZCxcclxuXHRcdGNoaWxkcmVuID0gW11cclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IHsgZmllbGRfb3B0aW9uc19mcm9tIH0gPSBhdHRyaWJ1dGVzO1xyXG5cclxuXHRyZXR1cm4gaXNTZWxlY3RlZCAmJiA8ZGl2IGNsYXNzTmFtZT0naW5zaWRlLWJsb2NrLW9wdGlvbnMnPlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PSdmaWVsZF9vcHRpb25zX2Zyb20nXHJcblx0XHRcdGxhYmVsPSdGaWxsIE9wdGlvbnMgRnJvbSdcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHR2YWx1ZT17IGZpZWxkX29wdGlvbnNfZnJvbSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX29wdGlvbnNfZnJvbTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IGxpc3RGcm9tIH1cclxuXHRcdC8+XHJcblx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBmaWVsZF9vcHRpb25zX2Zyb20gJiYgPEZyb21NYW51YWxGaWVsZHNcclxuXHRcdFx0a2V5PSdmcm9tX21hbnVhbCdcclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHQvPiB9XHJcblx0XHR7IFsgJ3Bvc3RzJywgJ3Rlcm1zJyBdLmluY2x1ZGVzKCBmaWVsZF9vcHRpb25zX2Zyb20gKSAmJiA8RnJvbVBvc3RUZXJtc0ZpZWxkc1xyXG5cdFx0XHRrZXk9J2Zvcm1fcG9zdHNfdGVybXMnXHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyAnbWV0YV9maWVsZCcgPT09IGZpZWxkX29wdGlvbnNfZnJvbSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PSdmaWVsZF9vcHRpb25zX2tleSdcclxuXHRcdFx0bGFiZWw9J01ldGEgZmllbGQgdG8gZ2V0IHZhbHVlIGZyb20nXHJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zX2tleSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX29wdGlvbnNfa2V5OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyAnZ2VuZXJhdGUnID09PSBmaWVsZF9vcHRpb25zX2Zyb20gJiYgPEZyb21HZW5lcmF0b3JzRmllbGRzXHJcblx0XHRcdGtleT0nZm9ybV9nZW5lcmF0b3JzJ1xyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdC8+IH1cclxuXHRcdHsgY2hpbGRyZW4gfVxyXG5cdDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0UmFkaW9DaGVjazsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCBsb2NhbGl6ZURhdGEgPSB3aW5kb3cuSmV0Rm9ybVNlbGVjdEZpZWxkRGF0YTtcclxuXHJcblxyXG5jb25zdCB7XHJcblx0U2VsZWN0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCBzb3VyY2VzID0ge1xyXG5cdHRlcm1zOiB7XHJcblx0XHRsYWJlbDogX18oICdUYXhvbm9teScgKSxcclxuXHRcdGF0dHI6ICdmaWVsZF9vcHRpb25zX3RheCcsXHJcblx0XHRvcHRpb25zOiBsb2NhbGl6ZURhdGEudGF4b25vbWllc19saXN0XHJcblx0fSxcclxuXHRwb3N0czoge1xyXG5cdFx0bGFiZWw6IF9fKCAnUG9zdCBUeXBlJyApLFxyXG5cdFx0YXR0cjogJ2ZpZWxkX29wdGlvbnNfcG9zdF90eXBlJyxcclxuXHRcdG9wdGlvbnM6IGxvY2FsaXplRGF0YS5wb3N0X3R5cGVzX2xpc3RcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBnZXRTZWxlY3RTb3VyY2UgPSAoIHByb3BzICkgPT4ge1xyXG5cdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XHJcblx0Y29uc3QgeyBmaWVsZF9vcHRpb25zX2Zyb20gfSA9IGF0dHJpYnV0ZXM7XHJcblxyXG5cdGlmICggISBzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXSAmJiAhIHNvdXJjZXNbIGZpZWxkX29wdGlvbnNfZnJvbSBdICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGNvbnN0IHNvdXJjZSA9IHNvdXJjZXNbIGZpZWxkX29wdGlvbnNfZnJvbSBdO1xyXG5cclxuXHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcclxuXHRcdGxhYmVsPXsgc291cmNlLmxhYmVsIH1cclxuXHRcdGxhYmVsUG9zaXRpb249J3RvcCdcclxuXHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgc291cmNlLmF0dHIgXSB9XHJcblx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBbIHNvdXJjZS5hdHRyIF06IG5ld1ZhbHVlIH0gKTtcclxuXHRcdH0gfVxyXG5cdFx0b3B0aW9ucz17IHNvdXJjZS5vcHRpb25zIH1cclxuXHQvPlxyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0U2VsZWN0U291cmNlIH07IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuL2FjdGlvbnMvYWN0aW9uLW1vZGFsXCI7XHJcblxyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRHLFxyXG5cdFBhdGgsXHJcblx0Q2lyY2xlLFxyXG5cdFJlY3QsXHJcblx0U1ZHLFxyXG5cdE1vZGFsLFxyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBGaWVsZFdpdGhQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHQgIGNoaWxkcmVuID0gbnVsbCxcclxuXHRcdFx0XHRcdFx0XHQgIE1vZGFsRWRpdG9yLFxyXG5cdFx0XHRcdFx0XHRcdCAgdHJpZ2dlckNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRjb25zdCBbIG1vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGUgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VNb2RhbFN0YXRlID0gKCkgPT4ge1xyXG5cdFx0c2V0TW9kYWxTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbICdqZXQtZm9ybS1keW5hbWljLXByZXNldF9fdHJpZ2dlcicsIC4uLnRyaWdnZXJDbGFzc2VzIF0uam9pbiggJyAnICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1keW5hbWljLXByZXNldFwiXHJcblx0XHQ+XHJcblx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lcyB9XHJcblx0XHRcdFx0b25DbGljaz17IGNoYW5nZU1vZGFsU3RhdGUgfVxyXG5cdFx0XHQ+PFNWRyB2aWV3Qm94PVwiMCAwIDU0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PFBhdGhcclxuXHRcdFx0XHRkPVwiTTQyLjYzOTYgMjYuNDM0N0MzNy44NjgyIDI3LjM0MzYgMzIuNTY2NiAyOC4wMjUyIDI3LjE4OTQgMjguMDI1MkMyMS44MTIxIDI4LjAyNTIgMTYuNDM0OCAyNy4zNDM2IDExLjczOTEgMjYuNDM0N0M2Ljk2Nzc0IDI1LjQ1MDIgMy4xODA5MyAyMy44NTk3IDAuMzc4NjggMjEuOTY2M0wwLjM3ODY4IDI4LjAyNTJDMC4zNzg2OCAyOS41Mzk5IDEuNTkwNDYgMzEuMTMwNCAzLjc4NjgyIDMyLjQxNzlDNS45ODMxNyAzMy43MDU0IDkuNDY3MDQgMzQuOTE3MiAxMy42MzI1IDM1LjU5ODhDMTcuNzk4IDM2LjI4MDUgMjIuMTE1IDM2LjgxMDYgMjcuMTg5NCAzNi44MTA2QzMyLjI2MzcgMzYuODEwNiAzNi42NTY0IDM2LjUwNzcgNDAuNzQ2MiAzNS41OTg4QzQ0LjgzNTkgMzQuNjkgNDguMzE5OCAzMy43MDU0IDUwLjUxNjIgMzIuNDE3OUM1Mi43MTI1IDMxLjEzMDQgNTQgMjkuNTM5OSA1NCAyOC4wMjUyTDU0IDIxLjk2NjNDNTEuMTIyIDIzLjg1OTcgNDcuMzM1MiAyNS40NTAyIDQyLjYzOTYgMjYuNDM0N1pNNDIuNjM5NiA1My41NDg0QzM3Ljg2ODIgNTQuNTMyOSAzMi41NjY2IDU1LjEzODggMjcuMTg5NCA1NS4xMzg4QzIxLjgxMjEgNTUuMTM4OCAxNi40MzQ4IDU0LjUzMjkgMTEuNzM5MSA1My41NDg0QzcuMDQzNDggNTIuNTYzOCAzLjE4MDkzIDUxLjA0OTEgMC4zNzg2ODIgNDkuMTU1NkwwLjM3ODY4MiA1NS4xMzg4QzAuMzc4NjgzIDU2LjcyOTMgMS41OTA0NiA1OC4zMTk3IDMuNzg2ODIgNTkuNTMxNUM2LjM2MTg2IDYwLjgxOSA5LjQ2NzA1IDYyLjEwNjYgMTMuNjMyNSA2Mi43MTI1QzE3LjcyMjMgNjMuNjk3IDIyLjExNSA2NCAyNy4xODk0IDY0QzMyLjI2MzcgNjQgMzYuNjU2NCA2My42OTcgNDAuNzQ2MiA2Mi43MTI1QzQ0LjgzNTkgNjEuODAzNiA0OC4zMTk4IDYwLjgxOSA1MC41MTYyIDU5LjUzMTVDNTIuNzEyNSA1Ny45NDExIDU0IDU2LjcyOTMgNTQgNTQuODM1OUw1NCA0OC44NTI3QzUxLjEyMiA1MS4wNDkxIDQ3LjMzNTIgNTIuMjYwOCA0Mi42Mzk2IDUzLjU0ODRaTTQyLjYzOTYgMzkuOTkxNUMzNy44NjgyIDQwLjkwMDQgMzIuNTY2NiA0MS41ODIgMjcuMTg5NCA0MS41ODJDMjEuODEyMSA0MS41ODIgMTYuNDM0OCA0MC45MDA0IDExLjczOTEgMzkuOTkxNUM2Ljk2Nzc0IDM5LjAwNyAzLjE4MDkzIDM3LjQ5MjIgMC4zNzg2ODEgMzUuNTk4OEwwLjM3ODY4MSA0MS41ODJDMC4zNzg2ODEgNDMuMTcyNSAxLjU5MDQ2IDQ0LjY4NzIgMy43ODY4MiA0NS45NzQ3QzYuMzYxODUgNDcuMjYyMiA5LjQ2NzA1IDQ4LjQ3NCAxMy42MzI1IDQ5LjE1NTZDMTcuNzIyMyA1MC4wNjQ1IDIyLjExNSA1MC4zNjc0IDI3LjE4OTQgNTAuMzY3NEMzMi4yNjM3IDUwLjM2NzQgMzYuNjU2NCA1MC4wNjQ1IDQwLjc0NjIgNDkuMTU1NkM0NC44MzU5IDQ4LjE3MTEgNDguMzE5OCA0Ny4yNjIyIDUwLjUxNjIgNDUuOTc0N0M1Mi43MTI1IDQ0LjM4NDMgNTQgNDMuMTcyNSA1NCA0MS41ODJMNTQgMzUuNTk4OEM1MS4xMjIgMzcuNDkyMiA0Ny4zMzUyIDM5LjAwNyA0Mi42Mzk2IDM5Ljk5MTVaTTQwLjQ0MzIgMi4xMjMzN0MzNi4zNTM1IDEuMTM4NzkgMzEuODg1IDAuODM1ODQ4IDI2Ljg4NjQgMC44MzU4NDlDMjEuODg3OCAwLjgzNTg0OSAxNy40MTk0IDEuMTM4NzkgMTMuMjUzOSAyLjEyMzM3QzkuMDg4MzYgMy4xMDc5NCA1LjY4MDIyIDQuMDE2NzggMy40ODM4NyA1LjMwNDNDMS4yODc1MSA2LjU5MTgxIC0zLjQ3ODJlLTA2IDguMTA2NTQgLTMuMzM5MTZlLTA2IDkuNjk3TC0yLjk1NTEzZS0wNiAxNC4wODk3Qy0yLjgxNjA5ZS0wNiAxNS42ODAyIDEuMjg3NTIgMTcuMjcwNiAzLjQ4Mzg3IDE4LjU1ODJDNi4wNTg5MSAxOS43Njk5IDkuMTY0MSAyMS4wNTc1IDEzLjI1MzkgMjEuNjYzM0MxNy4zNDM2IDIyLjI2OTIgMjEuODEyMSAyMi45NTA5IDI2Ljg4NjQgMjIuOTUwOUMzMS45NjA3IDIyLjk1MDkgMzYuMzUzNSAyMi45NTA5IDQwLjQ0MzIgMjIuMzQ1QzQ0LjUzMyAyMS43MzkxIDQ4LjAxNjkgMjAuNDUxNiA1MC4yMTMyIDE5LjE2NEM1Mi43MTI1IDE3LjU3MzYgNTQgMTUuOTgzMSA1NCAxNC4zOTI3TDU0IDkuOTk5OTVDNTQgOC40MDk0OCA1Mi43MTI1IDYuODE5MDIgNTAuNTE2MiA1LjYwNzI0QzQ4LjMxOTggNC4zOTU0NiA0NC41MzMgMi43MjkyNiA0MC40NDMyIDIuMTIzMzdaXCJcclxuXHRcdFx0XHRmaWxsPVwiIzdFODk5M1wiPjwvUGF0aD48L1NWRz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdHsgbW9kYWxTdGF0ZSAmJiAoXHJcblx0XHRcdDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgY2hhbmdlTW9kYWxTdGF0ZSB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHR0aXRsZT17ICdFZGl0IFByZXNldCcgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBtb2RhbFByb3BzID0+IDxNb2RhbEVkaXRvclxyXG5cdFx0XHRcdFx0eyAuLi5tb2RhbFByb3BzIH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdDwvQWN0aW9uTW9kYWw+XHJcblx0XHQpIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkV2l0aFByZXNldDsiLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpZWxkV3JhcHBlcigge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgYXR0cmlidXRlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHdyYXBDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB2YWx1ZUlmRW1wdHlMYWJlbCA9ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHRjb25zdCB7XHJcblx0XHRCYXNlQ29udHJvbCxcclxuXHR9ID0gd3AuY29tcG9uZW50cztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU2VsZWN0LFxyXG5cdH0gPSB3cC5kYXRhO1xyXG5cclxuXHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcclxuXHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHR9ICk7XHJcblxyXG5cdGNvbnN0IGxhYmVsID0gVG9vbHMuZ2V0TGFiZWwoIG1ldGEsIGF0dHJpYnV0ZXMgKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCYXNlQ29udHJvbCBrZXk9eyB1bmlxS2V5KCAncGxhY2VIb2xkZXJfYmxvY2snICkgfVxyXG5cdFx0XHRcdFx0IGNsYXNzTmFtZT17IGBqZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwIGpldC1mb3JtLWJ1aWxkZXItcm93ICR7IHdyYXBDbGFzc2VzLmpvaW4oICcgJyApIH1gIH0+XHJcblx0XHRcdDxCYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19sYWJlbCcgfT5cclxuXHRcdFx0XHRcdHsgbGFiZWwubmFtZSA/IGxhYmVsLm5hbWUgOiB2YWx1ZUlmRW1wdHlMYWJlbCB9XHJcblx0XHRcdFx0XHR7IGF0dHJpYnV0ZXMucmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcXVpcmVkJyB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsLm1hcmsgPyBsYWJlbC5tYXJrIDogJyonIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbC5WaXN1YWxMYWJlbD5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDxCYXNlQ29udHJvbCBrZXk9eyAnY3VzdG9tX2hlbHBfZGVzY3JpcHRpb24nIH0gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2Rlc2MnIH0+XHJcblx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT17ICdjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscCcgfVxyXG5cdFx0XHRcdFx0ICAgc3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcgfSB9PnsgYXR0cmlidXRlcy5kZXNjIH08L3NtYWxsPlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHQpO1xyXG59IiwiY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRQb3BvdmVyLFxyXG5cdFBhbmVsQm9keSxcclxuXHRQYW5lbFJvd1xyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBNYWNyb3NJbnNlcnRlcigge1xyXG5cdFx0XHRcdFx0XHRcdCBjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHQgZmllbGRzLFxyXG5cdFx0XHRcdFx0XHRcdCBvbkZpZWxkQ2xpY2ssXHJcblx0XHRcdFx0XHRcdFx0IGN1c3RvbU1hY3JvcyxcclxuXHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdGNvbnN0IFsgc2hvd1BvcG92ZXIsIHNldFBvcG92ZXJTdGF0ZSBdID0gdXNlU3RhdGUoICgpID0+IGZhbHNlICk7XHJcblxyXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLWluc2VydGVyXCI+XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzVGVydGlhcnlcclxuXHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRpY29uPXsgc2hvd1BvcG92ZXIgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxyXG5cdFx0XHRsYWJlbD17ICdJbnNlcnQgbWFjcm9zJyB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fbWFjcm9zLXRyaWdnZXJcIlxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdHNldFBvcG92ZXJTdGF0ZSggcHJldiA9PiAhIHByZXYgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0eyBzaG93UG9wb3ZlciAmJiAoXHJcblx0XHRcdDxQb3BvdmVyXHJcblx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgZmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxyXG5cdFx0XHRcdFx0eyBmaWVsZHMubWFwKCBmaWVsZCA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ICdmaWVsZF8nICsgZmllbGQubmFtZSB9PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGlzTGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25GaWVsZENsaWNrKCBmaWVsZC5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIGZpZWxkLm5hbWUgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdFx0eyBjdXN0b21NYWNyb3MgJiYgPFBhbmVsQm9keSB0aXRsZT17ICdDdXN0b20gTWFjcm9zJyB9PlxyXG5cdFx0XHRcdFx0eyBjdXN0b21NYWNyb3MubWFwKCBtYWNyb3MgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnbWFjcm9zXycgKyBtYWNyb3MgfT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggbWFjcm9zIClcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdD57ICclJyArIG1hY3JvcyArICclJyB9PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cclxuXHRcdFx0PC9Qb3BvdmVyPlxyXG5cdFx0KSB9XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWNyb3NJbnNlcnRlcjsiLCJleHBvcnQgY29uc3Qgc2F2ZUdsb2JhbENvbXBvbmVudCA9ICggb2JqZWN0TmFtZSwgaW5zdGFuY2UgKSA9PiB7XHJcblx0d2luZG93WyBvYmplY3ROYW1lIF0gPSB7XHJcblx0XHQuLi53aW5kb3dbIG9iamVjdE5hbWUgXSxcclxuXHRcdC4uLmluc3RhbmNlXHJcblx0fTtcclxufSIsImltcG9ydCBQcmVzZXRSZW5kZXIgZnJvbSBcIi4vcHJlc2V0LXJlbmRlclwiO1xyXG5pbXBvcnQgd2l0aFByZXNldCBmcm9tIFwiLi9wcmVzZXQtZWRpdG9yXCI7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gRHluYW1pY1ByZXNldCgge1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQsXHJcblx0XHRcdFx0XHRcdFx0b25Vbk1vdW50LFxyXG5cdFx0XHRcdFx0XHRcdHBhcnNlVmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0ZXhjbHVkZU9wdGlvbnMsXHJcblx0XHRcdFx0XHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0Y29uc3QgcG9zaXRpb24gPSAnZHluYW1pYyc7XHJcblx0Y29uc3QgWyBzdGF0ZVZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoICgpID0+IHBhcnNlVmFsdWUoIHZhbHVlICkgKTtcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggbmV3VmFsdWUsIG5hbWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZSggcHJldiA9PiAoIHsgLi4ucHJldiwgWyBuYW1lIF06IG5ld1ZhbHVlIH0gKSApO1xyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHRydWUgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0aWYgKCBvblNhdmVQcmVzZXQgKSB7XHJcblx0XHRcdFx0b25TYXZlUHJlc2V0KCBKU09OLnN0cmluZ2lmeSggc3RhdGVWYWx1ZSApICk7XHJcblx0XHRcdH1cclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcuZ2xvYmFsX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8UHJlc2V0UmVuZGVyLkdsb2JhbEZpZWxkXHJcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8UHJlc2V0UmVuZGVyLk1hcEZpZWxkXHJcblx0XHRcdGtleT17IGBjdXJyZW50X2ZpZWxkXyR7IGRhdGEubmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0Y3VycmVudFN0YXRlPXsgc3RhdGVWYWx1ZSB9XHJcblx0XHRcdHZhbHVlPXsgc3RhdGVWYWx1ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRpc0N1cnJlbnRGaWVsZFZpc2libGU9eyBpc0N1cnJlbnRGaWVsZFZpc2libGUgfVxyXG5cdFx0XHRwb3NpdGlvbj17IHBvc2l0aW9uIH1cclxuXHRcdC8+ICkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFByZXNldCggRHluYW1pY1ByZXNldCApOyIsImltcG9ydCBQcmVzZXRSZW5kZXIgZnJvbSBcIi4vcHJlc2V0LXJlbmRlclwiO1xyXG5pbXBvcnQgd2l0aFByZXNldCBmcm9tIFwiLi9wcmVzZXQtZWRpdG9yXCI7XHJcblxyXG5mdW5jdGlvbiBHZW5lcmFsUHJlc2V0KCB7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0YXZhaWxhYmxlRmllbGRzLFxyXG5cdFx0XHRcdFx0XHRcdGlzTWFwRmllbGRWaXNpYmxlLFxyXG5cdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSxcclxuXHRcdFx0XHRcdFx0fSApIHtcclxuXHRjb25zdCBwb3NpdGlvbiA9ICdnZW5lcmFsJztcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggbmV3VmFsdWUsIG5hbWUgKSA9PiB7XHJcblx0XHRvbkNoYW5nZSggeyAuLi52YWx1ZSwgWyBuYW1lIF06IG5ld1ZhbHVlIH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPFByZXNldFJlbmRlci5HbG9iYWxGaWVsZFxyXG5cdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0ZGF0YT17IGRhdGEgfVxyXG5cdFx0XHRvcHRpb25zPXsgZGF0YS5vcHRpb25zIH1cclxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxyXG5cdFx0XHRwb3NpdGlvbj17IHBvc2l0aW9uIH1cclxuXHRcdC8+ICkgfVxyXG5cclxuXHRcdHsgdmFsdWUuZnJvbSAmJiAoXHJcblx0XHRcdGF2YWlsYWJsZUZpZWxkcy5tYXAoICggZmllbGQsIGluZGV4ICkgPT4gPFByZXNldFJlbmRlci5BdmFpbGFibGVNYXBGaWVsZFxyXG5cdFx0XHRcdGtleT17IGZpZWxkICsgaW5kZXggfVxyXG5cdFx0XHRcdGZpZWxkc01hcD17IHZhbHVlLmZpZWxkc19tYXAgfVxyXG5cdFx0XHRcdGZpZWxkPXsgZmllbGQgfVxyXG5cdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cclxuXHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0Lz4gKVxyXG5cdFx0KSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0KCBHZW5lcmFsUHJlc2V0ICk7IiwiLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFByZXNldFJlbmRlciBmcm9tIFwiLi9wcmVzZXQtcmVuZGVyXCI7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRNb2RhbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiB3aXRoUHJlc2V0KCBXcmFwcGVkQ29tcG9uZW50ICkge1xyXG5cdHJldHVybiBmdW5jdGlvbiBKZXRGb3JtUHJlc2V0RWRpdG9yKCBwcm9wcyApIHtcclxuXHJcblx0XHRjb25zdCBwYXJzZVZhbHVlID0gKCkgPT4ge1xyXG5cdFx0XHRsZXQgdmFsID0ge307XHJcblxyXG5cdFx0XHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgcHJvcHMudmFsdWUgKSB7XHJcblx0XHRcdFx0dmFsID0geyAuLi5wcm9wcy52YWx1ZSB9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBwcm9wcy52YWx1ZSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIHByb3BzLnZhbHVlICkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHR2YWwgPSBKU09OLnBhcnNlKCBwcm9wcy52YWx1ZSApO1xyXG5cdFx0XHRcdFx0aWYgKCAnbnVtYmVyJyA9PT0gdHlwZW9mIHZhbCApIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaCAoIGV4Y2VwdGlvbiApIHtcclxuXHRcdFx0XHRcdHZhbCA9IHt9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR2YWwuamV0X3ByZXNldCA9IHRydWU7XHJcblxyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlzVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBwb3NpdGlvbiApID0+IHtcclxuXHRcdFx0cmV0dXJuICggKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uID09PSBkYXRhLnBvc2l0aW9uIClcclxuXHRcdFx0XHR8fCAhIGRhdGEucG9zaXRpb24gfHwgJ3F1ZXJ5X3ZhcicgIT09IGN1cnJlbnRTdGF0ZS5mcm9tICkgJiYgaXNHbG9iYWxWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaXNHbG9iYWxWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEgKSA9PiB7XHJcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0c3dpdGNoICggZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdFx0Y2FzZSAncXVlcnlfdmFyJzpcclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQoICdwb3N0JyA9PT0gY3VycmVudFN0YXRlLmZyb20gJiYgJ3F1ZXJ5X3ZhcicgPT09IGN1cnJlbnRTdGF0ZS5wb3N0X2Zyb20gKVxyXG5cdFx0XHRcdFx0XHRcdHx8ICggJ3VzZXInID09PSBjdXJyZW50U3RhdGUuZnJvbSAmJiAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLnVzZXJfZnJvbSApXHJcblx0XHRcdFx0XHRcdFx0fHwgKCAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLmZyb20gKVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaXNDdXJyZW50RmllbGRWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggZGF0YS5wb3NpdGlvbiAmJiBwb3NpdGlvbiAhPT0gZGF0YS5wb3NpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZSAmJiBjdXJyZW50U3RhdGVbIGRhdGEucGFyZW50X2NvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLnBhcmVudF9jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoICEgZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaXNNYXBGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgZmllbGQgKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmICEgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggZGF0YS5wYXJlbnRfY29uZGl0aW9uICYmIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdGlmICggISBjdXJyZW50U3RhdGUuZmllbGRzX21hcCB8fCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwWyBmaWVsZCBdWyBkYXRhLmNvbmRpdGlvbi5maWVsZCBdID09PSBkYXRhLmNvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZXhjbHVkZU9wdGlvbnMgPSAoIHNlbGVjdE9wdGlvbnMgKSA9PiB7XHJcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBbIC4uLnNlbGVjdE9wdGlvbnMgXTtcclxuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKCAoIG9wdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0aWYgKCBwcm9wcy5leGNsdWRlU291cmNlcyAmJiBwcm9wcy5leGNsdWRlU291cmNlcy5pbmNsdWRlcyggb3B0aW9uLnZhbHVlICkgKSB7XHJcblx0XHRcdFx0XHRvcHRpb25zLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHRcdFx0cmV0dXJuIG9wdGlvbnM7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8V3JhcHBlZENvbXBvbmVudFxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0cGFyc2VWYWx1ZT17IHBhcnNlVmFsdWUgfVxyXG5cdFx0XHRpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxyXG5cdFx0XHRpc01hcEZpZWxkVmlzaWJsZT17IGlzTWFwRmllbGRWaXNpYmxlIH1cclxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHQvPjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQ7XHJcbiIsImNvbnN0IHtcclxuXHRQYW5lbENvbG9yLFxyXG5cdEljb25CdXR0b24sXHJcblx0VGV4dENvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRQYW5lbEJvZHksXHJcblx0UmFuZ2VDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHREaXNhYmxlZCxcclxuXHRCYXNlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgUHJlc2V0UmVuZGVyID0ge1xyXG5cdEdsb2JhbEZpZWxkOiBmdW5jdGlvbiAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zID0gb3B0aW9ucyA9PiBvcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25cclxuXHRcdFx0XHRcdFx0XHR9ICkge1xyXG5cclxuXHJcblx0XHRzd2l0Y2ggKCBkYXRhLnR5cGUgKSB7XHJcblx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdHJldHVybiAoIGlzVmlzaWJsZSggdmFsdWUsIGRhdGEsIHBvc2l0aW9uICkgJiZcclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyggZGF0YS5vcHRpb25zICkgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH0sXHJcblx0QXZhaWxhYmxlTWFwRmllbGQ6IGZ1bmN0aW9uICgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGZpZWxkc01hcCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBmaWVsZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBpbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBvbkNoYW5nZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGlzTWFwRmllbGRWaXNpYmxlXHJcblx0XHRcdFx0XHRcdFx0XHQgIH0gKSB7XHJcblxyXG5cdFx0bGV0IGN1cnJlbnRWYWwgPSBudWxsO1xyXG5cclxuXHRcdGlmICggISBmaWVsZHNNYXAgKSB7XHJcblx0XHRcdGZpZWxkc01hcCA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGN1cnJlbnRWYWwgPSBmaWVsZHNNYXBbIGZpZWxkIF07XHJcblxyXG5cdFx0aWYgKCAhIGN1cnJlbnRWYWwgKSB7XHJcblx0XHRcdGN1cnJlbnRWYWwgPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBBdmFpbGFibGVGaWVsZFdyYXBwZXIgPSAoIHsgZmllbGQsIG5hbWUsIGluZGV4LCBmSW5kZXgsIGNoaWxkcmVuIH0gKSA9PiA8PlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2pldC1sYWJlbC1vdmVyZmxvdyc+eyBmaWVsZCB9PC9zcGFuPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0a2V5PXsgZmllbGQgKyBuYW1lICsgaW5kZXggKyBmSW5kZXggfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX2ZpZWxkcy1tYXAtaXRlbScgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+O1xyXG5cclxuXHRcdHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PXsgYG1hcF9maWVsZF9wcmVzZXRfJHsgZmllbGQgKyBpbmRleCB9YCB9PlxyXG5cclxuXHRcdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLm1hcF9maWVsZHMubWFwKCAoIGRhdGEsIGZJbmRleCApID0+IHtcclxuXHRcdFx0XHRjb25zdCBwcm9wcyA9IHsgZmllbGQsIG5hbWU6IGRhdGEubmFtZSwgaW5kZXgsIGZJbmRleCB9O1xyXG5cclxuXHRcdFx0XHRjb25zdCB1bmlxS2V5ID0gJ2NvbnRyb2xfJyArIGZpZWxkICsgZGF0YS5uYW1lICsgaW5kZXggKyBmSW5kZXg7XHJcblxyXG5cdFx0XHRcdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKCBpc01hcEZpZWxkVmlzaWJsZSggdmFsdWUsIGRhdGEsIGZpZWxkICkgJiZcclxuXHRcdFx0XHRcdFx0XHQ8QXZhaWxhYmxlRmllbGRXcmFwcGVyIHsgLi4ucHJvcHMgfSBrZXk9eyB1bmlxS2V5IH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXHJcblx0XHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0ga2V5PXsgdW5pcUtleSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vbGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApIH1cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+O1xyXG5cdH0sXHJcblxyXG5cdE1hcEZpZWxkOiBmdW5jdGlvbiAoIHtcclxuXHRcdFx0XHRcdFx0XHQgZGF0YSxcclxuXHRcdFx0XHRcdFx0XHQgdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0IGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdCBjdXJyZW50U3RhdGUsXHJcblx0XHRcdFx0XHRcdFx0IG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0IGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHQgcG9zaXRpb24gPSAnZ2VuZXJhbCdcclxuXHRcdFx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdFx0c3dpdGNoICggZGF0YS50eXBlICkge1xyXG5cdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRyZXR1cm4gKCBpc0N1cnJlbnRGaWVsZFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApICYmXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGtleT17IGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgJ2NvbnRyb2xfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgKVxyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlc2V0UmVuZGVyOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdEJ1dHRvbkdyb3VwLFxyXG5cdENhcmQsXHJcblx0Q2FyZEJvZHksXHJcblx0Q2FyZEhlYWRlcixcclxuXHRQYW5lbCxcclxuXHRQYW5lbEJvZHksXHJcblx0RHJhZ2dhYmxlLFxyXG5cdEljb24sXHJcblx0RHJvcFpvbmVQcm92aWRlcixcclxuXHREcm9wWm9uZSxcclxuXHREYXNoaWNvbixcclxuXHRUb2dnbGVDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cclxuZnVuY3Rpb24gUmVwZWF0ZXJXaXRoU3RhdGUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0SXRlbUhlYWRpbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdHJlcGVhdGVySXRlbUNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdG5ld0l0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbCA9ICdBZGQgTmV3JyxcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtcyxcclxuXHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uQWRkTmV3SXRlbSxcclxuXHRcdFx0XHRcdFx0XHRcdG9uUmVtb3ZlSXRlbSxcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHAgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlbHBTb3VyY2U6IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogKCkgPT4gZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlbHBLZXk6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsgJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudCcsIC4uLnJlcGVhdGVyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cdGNvbnN0IGl0ZW1DbGFzc05hbWVzID0gWyAnamV0LWZvcm0tYnVpbGRlcl9fcmVwZWF0ZXItY29tcG9uZW50LWl0ZW0nLCAuLi5yZXBlYXRlckl0ZW1DbGFzc2VzIF0uam9pbiggJyAnICk7XHJcblxyXG5cdGNvbnN0IHBhcnNlZEl0ZW1zID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRjb25zdCBjbG9uZUl0ZW1zID0gWyAuLi5pdGVtcyBdO1xyXG5cclxuXHRcdFx0Y2xvbmVJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLl9fdmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gY2xvbmVJdGVtcztcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gWyB7XHJcblx0XHRcdFx0Li4ubmV3SXRlbSxcclxuXHRcdFx0XHRfX3Zpc2libGU6IHRydWUsXHJcblx0XHRcdH0gXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IFsgaXRlbXNEYXRhLCBzZXRJdGVtc0RhdGEgXSA9IHVzZVN0YXRlKCAoKSA9PiBwYXJzZWRJdGVtcygpICk7XHJcblxyXG5cdGNvbnN0IFsgaXNTYWZlRGVsZXRpbmcsIHNldFNhZmVEZWxldGluZyBdID0gdXNlU3RhdGUoIHRydWUgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlQ3VycmVudEl0ZW0gPSAoIHZhbHVlVG9TZXQsIGluZGV4ICkgPT4ge1xyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0cHJldlsgaW5kZXggXSA9IHtcclxuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxyXG5cdFx0XHRcdC4uLnZhbHVlVG9TZXQsXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiBbIC4uLnByZXYgXTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblNhdmVEZWxldGluZyA9IGluZGV4ID0+IHtcclxuXHRcdHJldHVybiBjb25maXJtKCBfXyggYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgaXRlbSAkeyBpbmRleCArIDEgfT9gLCAnamV0LWZvcm0tYnVpbGRlcicgKSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVtb3ZlT3B0aW9uID0gKCBpbmRleCApID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0aXNTYWZlRGVsZXRpbmcgJiYgISBvblNhdmVEZWxldGluZyggaW5kZXggKSB8fFxyXG5cdFx0XHRvblJlbW92ZUl0ZW0gJiYgISBvblJlbW92ZUl0ZW0oIGluZGV4LCBpdGVtc0RhdGEgKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRJdGVtc0RhdGEoIHByZXYgPT4ge1xyXG5cdFx0XHRjb25zdCBjbG9uZVByZXYgPSBbIC4uLnByZXYgXTtcclxuXHRcdFx0Y2xvbmVQcmV2LnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHJcblx0XHRcdHJldHVybiBjbG9uZVByZXY7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBhZGROZXdJdGVtID0gKCB2YWx1ZSApID0+IHtcclxuXHRcdGlmICggb25BZGROZXdJdGVtICkge1xyXG5cdFx0XHRvbkFkZE5ld0l0ZW0oIHZhbHVlLCBpdGVtc0RhdGEgKTtcclxuXHRcdH1cclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiBbIC4uLnByZXYsIHtcclxuXHRcdFx0Li4udmFsdWUsXHJcblx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcclxuXHRcdH0gXSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xvbmVJdGVtID0gKCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IFsgYmVmb3JlLCBhZnRlciBdID0gWyBwcmV2LnNsaWNlKCAwLCBpbmRleCArIDEgKSwgcHJldi5zbGljZSggaW5kZXggKyAxICkgXTtcclxuXHRcdFx0cmV0dXJuIFsgLi4uYmVmb3JlLCBsb2Rhc2guYXNzaWduKCB7fSwgcHJldlsgaW5kZXggXSApLCAuLi5hZnRlciBdO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW92ZVJlcGVhdGVySXRlbSA9ICggeyBvbGRJbmRleCwgbmV3SW5kZXggfSApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdFsgcHJldlsgbmV3SW5kZXggXSwgcHJldlsgb2xkSW5kZXggXSBdID0gWyBwcmV2WyBvbGRJbmRleCBdLCBwcmV2WyBuZXdJbmRleCBdIF07XHJcblx0XHRcdHJldHVybiBbIC4uLnByZXYgXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdmVVcCA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4IC0gMSB9ICk7XHJcblx0fVxyXG5cdGNvbnN0IG1vdmVEb3duID0gKCBpbmRleCApID0+IHtcclxuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggKyAxIH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlzRGlzYWJsZWRFbmQgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0cmV0dXJuICEgKCBpbmRleCA8IGl0ZW1zRGF0YS5sZW5ndGggLSAxICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b2dnbGVWaXNpYmxlID0gKCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdHByZXZbIGluZGV4IF0uX192aXNpYmxlID0gISAoIHByZXZbIGluZGV4IF0uX192aXNpYmxlICk7XHJcblx0XHRcdHJldHVybiBbIC4uLnByZXYgXTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGNvbnN0IGNsb25lSXRlbXMgPSBbIC4uLml0ZW1zRGF0YSBdO1xyXG5cclxuXHRcdFx0aWYgKCBvblNhdmVJdGVtcyApIHtcclxuXHRcdFx0XHRjbG9uZUl0ZW1zLmZvckVhY2goICggaXRlbSwgaW5kZXggKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggY29uc3QgaXRlbUtleSBpbiBpdGVtICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIGl0ZW1LZXkuc3RhcnRzV2l0aCggJ19fJyApICkge1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBjbG9uZUl0ZW1zWyBpbmRleCBdWyBpdGVtS2V5IF07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdG9uU2F2ZUl0ZW1zKCBjbG9uZUl0ZW1zICk7XHJcblx0XHRcdH1cclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggZmFsc2UgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblx0XHR9XHJcblx0fSwgWyBpc1NhdmVBY3Rpb24gXSApO1xyXG5cclxuXHRjb25zdCBnZXRSZXBlYXRlckl0ZW1JZCA9IGluZGV4ID0+IGBqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtXyR7IGluZGV4IH1gO1xyXG5cclxuXHJcblx0Y29uc3QgUmVwZWF0ZXJJdGVtID0gKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICkgPT4gPENhcmRcclxuXHRcdGlzRWxldmF0ZWQ9eyB0cnVlIH1cclxuXHRcdGNsYXNzTmFtZT17IGl0ZW1DbGFzc05hbWVzIH1cclxuXHRcdGtleT17IGdldFJlcGVhdGVySXRlbUlkKCBpbmRleCApIH1cclxuXHRcdGlkPXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxyXG5cdD5cclxuXHRcdDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17ICdyZXBlYXRlcl9faXRlbV9faGVhZGVyJyB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbV9fbGVmdC1oZWFkaW5nJz5cclxuXHRcdFx0XHQ8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b25zJyB9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGljb249eyBjdXJyZW50SXRlbS5fX3Zpc2libGUgPyAndmlzaWJpbGl0eScgOiAnaGlkZGVuJyB9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0b2dnbGVWaXNpYmxlKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyAhIEJvb2xlYW4oIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2Fycm93LXVwLWFsdDInIH1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVVcCggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXsgaXNEaXNhYmxlZEVuZCggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctZG93bi1hbHQyJyB9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBtb3ZlRG93biggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1hY3Rpb24tYnV0dG9uJyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW0tdGl0bGUnIH0+XHJcblx0XHRcdFx0XHRcdFx0eyBJdGVtSGVhZGluZyAmJiA8SXRlbUhlYWRpbmdcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtPXsgY3VycmVudEl0ZW0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbT17IGRhdGEgPT4gY2hhbmdlQ3VycmVudEl0ZW0oIGRhdGEsIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdHsgISBJdGVtSGVhZGluZyAmJiBgIyR7IGluZGV4ICsgMSB9YCB9XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxCdXR0b25Hcm91cD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NtYWxsXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IGNsb25lSXRlbSggaW5kZXggKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ0Nsb25lJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gcmVtb3ZlT3B0aW9uKCBpbmRleCApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IF9fKCAnRGVsZXRlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0PC9DYXJkSGVhZGVyPlxyXG5cdFx0eyBjdXJyZW50SXRlbS5fX3Zpc2libGUgJiYgPENhcmRCb2R5XHJcblx0XHRcdGNsYXNzTmFtZT17ICdyZXBlYXRlci1pdGVtX19jb250ZW50JyB9XHJcblx0XHQ+XHJcblx0XHRcdHsgY2hpbGRyZW4gJiYgPFJlYWN0LkZyYWdtZW50XHJcblx0XHRcdFx0a2V5PXsgYHJlcGVhdGVyLWNvbXBvbmVudF9faXRlbV8keyBpbmRleCB9YCB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbigge1xyXG5cdFx0XHRcdFx0Y3VycmVudEl0ZW0sXHJcblx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbTogZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKVxyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0eyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gJiYgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblx0XHRcdHsgISBjaGlsZHJlbiAmJiAnU2V0IHVwIHlvdXIgUmVwZWF0ZXIgVGVtcGxhdGUsIHBsZWFzZS4nIH1cclxuXHRcdDwvQ2FyZEJvZHk+IH1cclxuXHQ8L0NhcmQ+O1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRoZWxwU291cmNlLFxyXG5cdFx0aGVscFZpc2libGUsXHJcblx0XHRoZWxwS2V5LFxyXG5cdH0gPSBoZWxwO1xyXG5cclxuXHRjb25zdCBpc1Zpc2libGVIZWxwID0gaGVscFZpc2libGUoIGl0ZW1zRGF0YSApICYmIGhlbHBTb3VyY2UgJiYgaGVscFNvdXJjZVsgaGVscEtleSBdO1xyXG5cclxuXHRyZXR1cm4gPGRpdlxyXG5cdFx0Y2xhc3NOYW1lPXsgY2xhc3NOYW1lcyB9XHJcblx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicgfVxyXG5cdD5cclxuXHRcdHsgaXNWaXNpYmxlSGVscCAmJiA8cD57IGhlbHBTb3VyY2VbIGhlbHBLZXkgXS5sYWJlbCB9PC9wPiB9XHJcblxyXG5cdFx0eyAwIDwgaXRlbXNEYXRhLmxlbmd0aCAmJiA8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IF9fKCAnU2FmZSBkZWxldGluZycgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBpc1NhZmVEZWxldGluZyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgc2V0U2FmZURlbGV0aW5nIH1cclxuXHRcdC8+IH1cclxuXHRcdHsgaXRlbXNEYXRhLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdHJldHVybiBSZXBlYXRlckl0ZW0oIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKTtcclxuXHRcdH0gKSB9XHJcblx0XHR7IDEgPCBpdGVtc0RhdGEubGVuZ3RoICYmIDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXInXHJcblx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxyXG5cdFx0Lz4gfVxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gYWRkTmV3SXRlbSggbmV3SXRlbSApIH1cclxuXHRcdD5cclxuXHRcdFx0eyBhZGROZXdCdXR0b25MYWJlbCB9XHJcblx0XHQ8L0J1dHRvbj5cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyV2l0aFN0YXRlOyIsImltcG9ydCB7IHNhdmVHbG9iYWxDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcmFwcGVyUmVxdWlyZWRDb250cm9sKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmllbGQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxLZXkgPSAnbGFiZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkS2V5ID0gJ3JlcXVpcmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICkge1xyXG5cdGNvbnN0IFsgbmFtZSwgZGF0YSBdID0gZmllbGQ7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3JvdyBmaWVsZHMtbWFwLWNvbnRyb2xcIlxyXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGQtbWFwX19yb3ctbGFiZWxcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fbGFiZWwnIH0+XHJcblx0XHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKSAmJiBkYXRhWyBsYWJlbEtleSBdICkgJiYgZGF0YVsgbGFiZWxLZXkgXSB9XHJcblx0XHRcdFx0XHR7ICggISBkYXRhLmhhc093blByb3BlcnR5KCBsYWJlbEtleSApICkgJiYgZGF0YSB9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdHsgKCBkYXRhLmhhc093blByb3BlcnR5KCByZXF1aXJlZEtleSApICYmIGRhdGFbIHJlcXVpcmVkS2V5IF0gKSAmJlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19yZXF1aXJlZCcgfT4gKjwvc3Bhbj4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbnNhdmVHbG9iYWxDb21wb25lbnQoICdKZXRGQkNvbXBvbmVudHMnLCB7IFdyYXBwZXJSZXF1aXJlZENvbnRyb2wgfSApOyIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgSW50ZWdyYXRpb25Db21wb25lbnQgZnJvbSBcIi4vaW50ZWdyYXRpb24tY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAnYWN0aXZlX2NhbXBhaWduJywgY2xhc3MgQWN0aXZlQ2FtcGFpZ25BY3Rpb24gZXh0ZW5kcyBJbnRlZ3JhdGlvbkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMudmFsaWRhdGVBY3RpdmVDYW1wYWlnbkRhdGEgPSB0aGlzLnZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMuZ2V0QWN0aXZlQ2FtcGFpZ25EYXRhID0gdGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEuYmluZCggdGhpcyApO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVBY3RpdmVDYW1wYWlnbkRhdGEoKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnbG9hZGluZycgXSB9ICk7XHJcblx0XHR0aGlzLmdldEFjdGl2ZUNhbXBhaWduRGF0YSggdHJ1ZSApO1xyXG5cdH1cclxuXHJcblx0Z2V0QWN0aXZlQ2FtcGFpZ25EYXRhKCBpc1ZhbGlkYXRlID0gZmFsc2UgKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0bGlzdHMgPSBbXSxcclxuXHRcdFx0ZW5kcG9pbnQgPSAnL2FkbWluL2FwaS5waHA/YXBpX2FjdGlvbj1saXN0X2xpc3QnO1xyXG5cclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIGFwaV91cmwsIGFwaV9rZXkgfSA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0Y29uc3QgdXJsID0gYXBpX3VybCArIGVuZHBvaW50ICsgJyZhcGlfa2V5PScgKyBhcGlfa2V5ICsgJyZpZHM9YWxsJmFwaV9vdXRwdXQ9anNvbic7XHJcblxyXG5cdFx0alF1ZXJ5LmdldEpTT04oIHVybCApXHJcblx0XHQuc3VjY2VzcyggZnVuY3Rpb24gKCBkYXRhICkge1xyXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCAhPT0gZGF0YS5yZXN1bHRfY29kZSAmJiBkYXRhLnJlc3VsdF9jb2RlICkge1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgcHJvcCBpbiBkYXRhICkge1xyXG5cdFx0XHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IGRhdGFbIHByb3AgXS5pZCApIHtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsaXN0cy5wdXNoKCB7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiBkYXRhWyBwcm9wIF0uaWQsXHJcblx0XHRcdFx0XHRcdGxhYmVsOiBkYXRhWyBwcm9wIF0ubmFtZVxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIGxpc3RzLCAnZGF0YScgKTtcclxuXHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggdHJ1ZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLXZhbGlkJyBdIH0gKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIGZhbHNlLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtaW52YWxpZCcgXSB9ICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKVxyXG5cdFx0LmVycm9yKCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdpcy1pbnZhbGlkJyBdIH0gKTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGdldExpc3RzKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hZGRQbGFjZWhvbGRlckZvclNlbGVjdCggc2V0dGluZ3MuZGF0YSApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblxyXG5cdGZvcm1hdEVudHJpZXNBcnJheSggZW50cmllcyA9IFtdLCBpc05lZWRQbGFjZWhvbGRlciA9IHRydWUgKSB7XHJcblx0XHRjb25zdCBwbGFjZWhvbGRlciA9IHtcclxuXHRcdFx0bGFiZWw6ICctLSdcclxuXHRcdH07XHJcblx0XHRpZiAoICEgZW50cmllcyApIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyB2YWx1ZSwgbGFiZWwgfTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gaXNOZWVkUGxhY2Vob2xkZXIgPyBbIHBsYWNlaG9sZGVyLCAuLi5vcHRpb25zIF0gOiBvcHRpb25zO1xyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQga2V5PVwiYWN0aXZlY2FtcGFpZ25cIj5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FwaV9kYXRhJyApIH1cclxuXHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXdpdGgtYnV0dG9uIHdpdGgtd3JhcCdcclxuXHRcdFx0XHRrZXk9eyAnYWN0aXZlY2FtcGFpZ25faW5wdXRfa2V5JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nYXBpX3VybCdcclxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuYXBpX3VybCB9XHJcblx0XHRcdFx0XHRoZWxwPXsgbGFiZWwoICdhcGlfdXJsJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfdXJsJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xyXG5cdFx0XHRcdFx0aGVscD17IGxhYmVsKCAnYXBpX2tleScgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmFwaV9rZXkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyAoIHNldHRpbmdzLmFwaV9rZXkgJiYgc2V0dGluZ3MuYXBpX3VybCApICYmIDxCdXR0b25cclxuXHRcdFx0XHRcdGtleT17ICd2YWxpZGF0ZV9hcGlfa2V5JyB9XHJcblx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLnZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhIH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IHRoaXMuc3RhdGUuY2xhc3NOYW1lLmpvaW4oICcgJyApICsgJyBqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0XHRcdFx0XHR7IGxhYmVsKCAndmFsaWRhdGVfYXBpX2tleScgKSB9XHJcblx0XHRcdFx0PC9CdXR0b24+IH1cclxuXHRcdFx0XHQ8ZGl2Lz5cclxuXHRcdFx0XHQ8ZGl2PnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxyXG5cdFx0XHRcdFx0aHJlZj17IGhlbHAoICdhcGlfa2V5X2xpbmsnICkgfT57IGhlbHAoICdhcGlfa2V5X2xpbmtfc3VmZml4JyApIH08L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdHsgc2V0dGluZ3MuaXNWYWxpZEFQSSAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX2lucHV0X2tleSdcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0naW5wdXQtd2l0aC1idXR0b24nXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdGtleT0nYWN0aXZlY2FtcGFpZ25fc2VsZWN0X2xpc3RzJ1xyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cclxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmdldEFjdGl2ZUNhbXBhaWduRGF0YSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgbGFiZWwoICd1cGRhdGVfbGlzdF9pZHMnICkgfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nYWN0aXZlY2FtcGFpZ25fdGFncydcclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd0YWdzJyApIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudGFncyB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCggJ3RhZ3MnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3RhZ3MnICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX2ZpZWxkc19tYXAnXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLW1ldGEtcm93cyc+XHJcblx0XHRcdFx0XHRcdHsgT2JqZWN0LmVudHJpZXMoIHNvdXJjZS5hY3RpdmVjYW1wYWlnbl9maWVsZHMgKS5tYXAoXHJcblx0XHRcdFx0XHRcdFx0KCBbIGZpZWxkTmFtZSwgZmllbGRMYWJlbCBdLCBpbmRleCApID0+IDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBmaWVsZE5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGZpZWxkTmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBmaWVsZExhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGREZWZhdWx0KCBmaWVsZE5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gdGhpcy5vbkNoYW5nZUZpZWxkTWFwKCB2YWx1ZSwgZmllbGROYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5mb3JtRmllbGRzTGlzdCB9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PiApIH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUFjdGlvbkNvbXBvbmVudCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0YWRkUGxhY2Vob2xkZXJGb3JTZWxlY3QoIGFycmF5LCBsYWJlbCA9ICctLScgKSB7XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHR7IGxhYmVsIH0sXHJcblx0XHRcdC4uLmFycmF5XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VTZXR0aW5nKCB2YWx1ZSwga2V5ICkge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdGdldEZpZWxkRGVmYXVsdCggbmFtZSApIHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdmaWVsZHNfbWFwJztcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXRGaWVsZEJ5TmFtZShcclxuXHRcdFx0eyBuYW1lLCBzb3VyY2UgfVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEZpZWxkTWV0YSggbmFtZSApIHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXRhX2ZpZWxkc19tYXAnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldEZpZWxkQnlOYW1lKFxyXG5cdFx0XHR7IG5hbWUsIHNvdXJjZSB9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0RmllbGRCeU5hbWUoIHsgc291cmNlLCBuYW1lIH0gKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZUZpZWxkTWFwKCB2YWx1ZSwgbmFtZUZpZWxkICkge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ2ZpZWxkc19tYXAnO1xyXG5cclxuXHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxyXG5cdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdG9uQ2hhbmdlTWV0YUZpZWxkTWFwKCB2YWx1ZSwgbmFtZUZpZWxkICkge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XHJcblxyXG5cdFx0dGhpcy5jaGFuZ2VGaWVsZHNNYXAoXHJcblx0XHRcdHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH1cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblxyXG5cdGNoYW5nZUZpZWxkc01hcCggeyBzb3VyY2UsIG5hbWVGaWVsZCwgdmFsdWUgfSApIHtcclxuXHRcdGNvbnN0IGZpZWxkc01hcCA9IE9iamVjdC5hc3NpZ24oXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR0aGlzLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcclxuXHRcdFx0eyBbIG5hbWVGaWVsZCBdOiB2YWx1ZSB9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ2NhbGxfaG9vaycsIGZ1bmN0aW9uIENhbGxIb29rQWN0aW9uKCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ICkge1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRvbkNoYW5nZSgge1xyXG5cdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJldHVybiAoIDxkaXYga2V5PVwiY2FsbF9ob29rXCI+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PSdob29rX25hbWUnXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdob29rX25hbWUnICkgfVxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmhvb2tfbmFtZSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2hvb2tfbmFtZScgKVxyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0a2V5PSdoZWxwX21lc3NhZ2UnXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtY2FsbC1ob29rLWluc3RydWN0aW9uJz5cclxuXHRcdFx0XHR7IF9fKCAnQ2FsbGVkIGhvb2sgbmFtZXM6JyApIH1cclxuXHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvY3VzdG9tLWFjdGlvbi97IHNldHRpbmdzLmhvb2tfbmFtZSB9PC9jb2RlPiAtIHsgX18oICdXUCBhY3Rpb24uIFBlcmZvcm0gYSBob29rIHdpdGhvdXQgYW4gYWJpbGl0eSB0byB2YWxpZGF0ZSBmb3JtLCcgKSB9XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2N1c3RvbS1maWx0ZXIveyBzZXR0aW5ncy5ob29rX25hbWUgfTwvY29kZT4gLSB7IF9fKCAnV1AgZmlsdGVyLiBQZXJmb3JtIGEgaG9vayB3aXRoIGFuIGFiaWxpdHkgdG8gdmFsaWRhdGUgZm9ybS4gQWxsb3dzIHRvIHJldHVybiBlcnJvciBtZXNzYWdlLicgKSB9XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0eyBfXyggJ0hvb2sgYXJndW1lbnRzOicgKSB9XHJcblx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0PGxpPjxjb2RlPiRyZXN1bHQ8L2NvZGU+IC0geyBfXyggJ29ubHkgZm9yIFdQIGZpbHRlci4gSG9vayBleGVjdXRpb24gcmVzdWx0LCcgKSB9PC9saT5cclxuXHRcdFx0XHRcdDxsaT48Y29kZT4kcmVxdWVzdDwvY29kZT4gLSB7IF9fKCAnYXJyYXkgd2l0aCBzdWJtaXR0ZWQgZm9ybSBkYXRhLCcgKSB9PC9saT5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGNvZGU+JGFjdGlvbl9oYW5kbGVyPC9jb2RlPiAtIHsgX18oICdhY3Rpb24gaGFuZGxlciBvYmplY3QsIGFsbG93cyB0byBtYW5hZ2UgYWN0aW9ucyBkYXRhIGFuZCB0byB0aHJvd3MgZXJyb3Igc3RhdHVzOicgKSB9XHJcblx0XHRcdFx0XHRcdDxjb2RlPnRocm93IG5ldyBBY3Rpb25fRXhjZXB0aW9uKCAnZmFpbGVkJyApPC9jb2RlPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblxyXG5cdDwvZGl2PiApO1xyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufSApO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdjYWxsX3dlYmhvb2snLCBjbGFzcyBDYWxsV2ViSG9va0FjdGlvbiBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBsYWJlbCwgb25DaGFuZ2VTZXR0aW5nIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gPFRleHRDb250cm9sXHJcblx0XHRcdGtleT0nd2ViaG9va191cmwnXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICd3ZWJob29rX3VybCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mud2ViaG9va191cmwgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3dlYmhvb2tfdXJsJyApIH1cclxuXHRcdC8+O1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxufSApO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEludGVncmF0aW9uQ29tcG9uZW50IGZyb20gXCIuL2ludGVncmF0aW9uLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgV3JhcHBlclJlcXVpcmVkQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcclxuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xyXG59XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAnZ2V0cmVzcG9uc2UnLCBjbGFzcyBHZXRSZXNwb25zZUFjdGlvbiBleHRlbmRzIEludGVncmF0aW9uQ29tcG9uZW50IHtcclxuXHJcblx0Z2V0RmllbGRzKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhLmZpZWxkcyApIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5kYXRhLmZpZWxkcyApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0TGlzdHMoKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLmRhdGEubGlzdHMgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZvcm1hdEVudHJpZXNBcnJheSggc2V0dGluZ3MuZGF0YS5saXN0cyApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0RW50cmllc0FycmF5KCBlbnRyaWVzID0gW10sIGlzTmVlZFBsYWNlaG9sZGVyID0gdHJ1ZSApIHtcclxuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0ge1xyXG5cdFx0XHRsYWJlbDogJy0tJ1xyXG5cdFx0fTtcclxuXHRcdGlmICggISBlbnRyaWVzICkge1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKCBlbnRyaWVzICkubWFwKCAoIFsgdmFsdWUsIGxhYmVsIF0gKSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHZhbHVlLCBsYWJlbCB9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiBpc05lZWRQbGFjZWhvbGRlciA/IFsgcGxhY2Vob2xkZXIsIC4uLm9wdGlvbnMgXSA6IG9wdGlvbnM7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKCk7XHJcblxyXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRcdHJldHVybiAoIDxSZWFjdC5GcmFnbWVudCBrZXk9XCJnZXRyZXNwb25zZVwiPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9eyAnZ2V0cmVzcG9uc2VfaW5wdXRfa2V5JyB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5wdXQtd2l0aC1idXR0b25cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2FwaV9rZXknXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYXBpX2tleScgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmFwaV9rZXkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17IHRoaXMudmFsaWRhdGVBUElLZXkgfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS5jbGFzc05hbWUuam9pbiggJyAnICkgKyAnIGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cclxuXHRcdFx0XHRcdHsgbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PGRpdi8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW4tYm90dG9tLS1zbWFsbCc+eyBoZWxwKCAnYXBpX2tleV9saW5rX3ByZWZpeCcgKSB9IDxhXHJcblx0XHRcdFx0aHJlZj17IGhlbHAoICdhcGlfa2V5X2xpbmsnICkgfT57IGhlbHAoICdhcGlfa2V5X2xpbmtfc3VmZml4JyApIH08L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7IHNldHRpbmdzLmlzVmFsaWRBUEkgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9zZWxlY3RfbGlzdHMnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXdpdGgtYnV0dG9uJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nbGlzdF9pZCdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsaXN0X2lkJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmxpc3RfaWQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmdldExpc3RzKCkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0a2V5PXsgJ3VwZGF0ZV9saXN0X2lkcycgfVxyXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuZ2V0QXBpRGF0YSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgbGFiZWwoICd1cGRhdGVfbGlzdF9pZHMnICkgfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdnZXRyZXNwb25zZV9kYXlfb2ZfY3ljbGUnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2RheV9vZl9jeWNsZSdcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2RheV9vZl9jeWNsZScgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5kYXlfb2ZfY3ljbGUgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggTnVtYmVyKCBuZXdWYWwgKSwgJ2RheV9vZl9jeWNsZScgKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0XHRrZXk9J2dldHJlc3BvbnNlX2ZpZWxkc19tYXAnXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxyXG5cdFx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoICggWyBmaWVsZE5hbWUsIGZpZWxkRGF0YSBdLCBpbmRleCApID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZD17IFsgZmllbGROYW1lLCBmaWVsZERhdGEgXSB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGZpZWxkTmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkRGVmYXVsdCggZmllbGROYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHRoaXMub25DaGFuZ2VGaWVsZE1hcCggdmFsdWUsIGZpZWxkTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZm9ybUZpZWxkc0xpc3QgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+O1xyXG5cdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTtcclxuIiwiaW1wb3J0IEpldEZpZWxkc01hcENvbnRyb2wgZnJvbSAnLi4vYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAnO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEpldERlZmF1bHRNZXRhQ29udHJvbCBmcm9tIFwiLi4vYmxvY2tzL2NvbnRyb2xzL2RlZmF1bHQtbWV0YVwiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG5cdFBvcG92ZXIsXHJcblx0UGFuZWxCb2R5LFxyXG5cdFBhbmVsUm93LFxyXG5cdEJhc2VDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ2luc2VydF9wb3N0JywgY2xhc3MgSW5zZXJ0UG9zdEFjdGlvbiBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Z2V0RmllbGRNYXAoIG5hbWUgKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncyAmJiBzZXR0aW5ncy5maWVsZHNfbWFwICYmIHNldHRpbmdzLmZpZWxkc19tYXBbIG5hbWUgXSApIHtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmZpZWxkc19tYXBbIG5hbWUgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGlzUmVuZGVySGVscCggZmllbGRzICkge1xyXG5cdFx0Y29uc3QgeyBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIGhlbHAoICdmaWVsZHNfbWFwJyApICYmICEgZmllbGRzLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRcdG9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4uc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdFx0fSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cImluc2VydF9wb3N0XCI+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicG9zdF90eXBlXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5wb3N0X3R5cGUgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucG9zdFR5cGVzIH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncG9zdF90eXBlJyApIH1cclxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ3Bvc3RfdHlwZScgKSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ3Bvc3RfdHlwZScgKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicG9zdF9zdGF0dXNcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnBvc3Rfc3RhdHVzIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBvc3RTdGF0dXNlcyB9XHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3Bvc3Rfc3RhdHVzJyApIH1cclxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ3Bvc3Rfc3RhdHVzJyApIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAncG9zdF9zdGF0dXMnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0a2V5PVwiZmllbGRzX21hcFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IHRoaXMuaXNSZW5kZXJIZWxwKCBmb3JtRmllbGRzICkgJiZcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1maWVsZHMtbWFwX19oZWxwXCI+XHJcblx0XHRcdFx0XHR7IGhlbHAoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0eyBmb3JtRmllbGRzICYmIGZvcm1GaWVsZHMubWFwKCAoIGZpZWxkLCBpbmRleCApID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkRGF0YSA9IHRoaXMuZ2V0RmllbGRNYXAoIGZpZWxkLm5hbWUgKTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX21hcF8nICsgZmllbGQubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxKZXRGaWVsZHNNYXBDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZC5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRWYWx1ZT17IGZpZWxkRGF0YSB9XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZE5hbWU9eyBmaWVsZC5uYW1lIH1cclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRzTWFwPXsgc2V0dGluZ3MuZmllbGRzX21hcCB9XHJcblx0XHRcdFx0XHRcdFx0XHR0YXhvbm9taWVzTGlzdD17IHNvdXJjZS50YXhvbm9taWVzIH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVHlwZXM9eyBzb3VyY2UuZmllbGRzTWFwT3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdkZWZhdWx0X21ldGEnICkgfVxyXG5cdFx0XHRcdGtleT1cImRlZmF1bHRfbWV0YVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SmV0RGVmYXVsdE1ldGFDb250cm9sXHJcblx0XHRcdFx0XHRkZWZhdWx0TWV0YT17IHNldHRpbmdzLmRlZmF1bHRfbWV0YSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAnZGVmYXVsdF9tZXRhJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBCYXNlQWN0aW9uQ29tcG9uZW50IGZyb20gXCIuL2Jhc2UtYWN0aW9uLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZWdyYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQWN0aW9uQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy52YWxpZGF0ZUFQSUtleSA9IHRoaXMudmFsaWRhdGVBUElLZXkuYmluZCggdGhpcyApO1xyXG5cdFx0dGhpcy5nZXRBcGlEYXRhID0gdGhpcy5nZXRBcGlEYXRhLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQoIHRoaXMgKTtcclxuXHJcblx0XHR0aGlzLmZvcm1GaWVsZHNMaXN0ID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRjbGFzc05hbWU6IFsgdGhpcy5nZXRjbGFzc05hbWVWYWxpZGF0ZUJ1dHRvbigpIF0sXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVBUElLZXkoKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnbG9hZGluZycgXSB9ICk7XHJcblxyXG5cdFx0dGhpcy5nZXRBcGlEYXRhKCk7XHJcblx0fVxyXG5cclxuXHRnZXRBcGlEYXRhKCBldmVudCApIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBzZWxmLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggISBzZXR0aW5ncy5hcGlfa2V5ICkge1xyXG5cdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggbnVsbCwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbXSB9ICk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRqUXVlcnkuYWpheCgge1xyXG5cdFx0XHR1cmw6IGFqYXh1cmwsXHJcblx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdCdhY3Rpb24nOiB0aGlzLmRhdGEuYWN0aW9uLFxyXG5cdFx0XHRcdCdhcGlfa2V5Jzogc2V0dGluZ3MuYXBpX2tleVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoIHJlc3BvbnNlICkge1xyXG5cdFx0XHRcdGlmICggcmVzcG9uc2Uuc3VjY2VzcyApIHtcclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCB0cnVlLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCByZXNwb25zZS5kYXRhLCAnZGF0YScgKTtcclxuXHJcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtdmFsaWQnIF0gfSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtaW52YWxpZCcgXSB9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLWludmFsaWQnIF0gfSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGdldGNsYXNzTmFtZVZhbGlkYXRlQnV0dG9uKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggdHJ1ZSA9PT0gc2V0dGluZ3MuaXNWYWxpZEFQSSApIHtcclxuXHRcdFx0cmV0dXJuICdpcy12YWxpZCc7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggZmFsc2UgPT09IHNldHRpbmdzLmlzVmFsaWRBUEkgKSB7XHJcblx0XHRcdHJldHVybiAnaXMtaW52YWxpZCc7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IEludGVncmF0aW9uQ29tcG9uZW50IGZyb20gXCIuL2ludGVncmF0aW9uLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgV3JhcHBlclJlcXVpcmVkQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBBY3Rpb25GaWVsZHNNYXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1maWVsZHMtbWFwXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdEJ1dHRvbixcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAnbWFpbGNoaW1wJywgY2xhc3MgTWFpbENoaW1wQWN0aW9uIGV4dGVuZHMgSW50ZWdyYXRpb25Db21wb25lbnQge1xyXG5cclxuXHRnZXRGaWVsZHMoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MubGlzdF9pZFxyXG5cdFx0XHQmJiBzZXR0aW5ncy5kYXRhXHJcblx0XHRcdCYmIHNldHRpbmdzLmRhdGEuZmllbGRzXHJcblx0XHRcdCYmIHNldHRpbmdzLmRhdGEuZmllbGRzWyBzZXR0aW5ncy5saXN0X2lkIF0gKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QuZW50cmllcyggc2V0dGluZ3MuZGF0YS5maWVsZHNbIHNldHRpbmdzLmxpc3RfaWQgXSApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0TGlzdHMoKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLmRhdGEubGlzdHMgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZvcm1hdEVudHJpZXNBcnJheSggc2V0dGluZ3MuZGF0YS5saXN0cyApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0R3JvdXBzKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MuZGF0YVxyXG5cdFx0XHQmJiBzZXR0aW5ncy5kYXRhLmdyb3Vwc1xyXG5cdFx0XHQmJiBzZXR0aW5ncy5saXN0X2lkICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXRFbnRyaWVzQXJyYXkoIHNldHRpbmdzLmRhdGEuZ3JvdXBzWyBzZXR0aW5ncy5saXN0X2lkIF0gKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGZvcm1hdEVudHJpZXNBcnJheSggZW50cmllcyA9IFtdICkge1xyXG5cdFx0Y29uc3QgcGxhY2Vob2xkZXIgPSB7XHJcblx0XHRcdGxhYmVsOiAnLS0nXHJcblx0XHR9O1xyXG5cdFx0aWYgKCAhIGVudHJpZXMgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvcHRpb25zID0gT2JqZWN0LmVudHJpZXMoIGVudHJpZXMgKS5tYXAoICggWyB2YWx1ZSwgbGFiZWwgXSApID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIFsgcGxhY2Vob2xkZXIsIC4uLm9wdGlvbnMgXTtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0Y29uc3QgZmllbGRzID0gdGhpcy5nZXRGaWVsZHMoKTtcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPGRpdiBrZXk9XCJtYWlsY2hpbXBcIj5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0a2V5PXsgJ21haWxjaGltcF9rZXlfaW5wdXRzJyB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5wdXQtd2l0aC1idXR0b25cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2FwaV9rZXknXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYXBpX2tleScgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmFwaV9rZXkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnYXBpX2tleScgKVxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy52YWxpZGF0ZUFQSUtleSB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyB0aGlzLnN0YXRlLmNsYXNzTmFtZS5qb2luKCAnICcgKSArICcgamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxyXG5cdFx0XHRcdFx0eyBsYWJlbCggJ3ZhbGlkYXRlX2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8ZGl2Lz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21hcmdpbi1ib3R0b20tLXNtYWxsJz57IGhlbHAoICdhcGlfa2V5X2xpbmtfcHJlZml4JyApIH0gPGFcclxuXHRcdFx0XHRocmVmPXsgaGVscCggJ2FwaV9rZXlfbGluaycgKSB9PnsgaGVscCggJ2FwaV9rZXlfbGlua19zdWZmaXgnICkgfTwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHsgc2V0dGluZ3MuaXNWYWxpZEFQSSAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnbWFpbGNoaW1wX3NlbGVjdF9saXN0cycgfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5wdXQtd2l0aC1idXR0b25cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT0nbGlzdF9pZCdcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsaXN0X2lkJyApIH1cclxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmxpc3RfaWQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmdldExpc3RzKCkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0a2V5PXsgJ3VwZGF0ZV9saXN0X2lkcycgfVxyXG5cdFx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdFx0b25DbGljaz17IHRoaXMuZ2V0QXBpRGF0YSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHsgbGFiZWwoICd1cGRhdGVfbGlzdF9pZHMnICkgfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nZ3JvdXBzX2lkcydcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2dyb3Vwc19pZHMnICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5ncm91cHNfaWRzIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdncm91cHNfaWRzJyApIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmdldEdyb3VwcygpIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdtYWlsY2hpbXBfdGFncydcclxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudGFncyB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndGFncycgKSB9XHJcblx0XHRcdFx0XHRoZWxwPXsgaGVscCggJ3RhZ3MnICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3RhZ3MnICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17ICdkb3VibGVfb3B0X2luJyB9XHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZG91YmxlX29wdF9pbicgKSB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MuZG91YmxlX29wdF9pbiB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggQm9vbGVhbiggbmV3VmFsICksICdkb3VibGVfb3B0X2luJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxBY3Rpb25GaWVsZHNNYXBcclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHRcdGtleT0nbWFpbGNoaW1wJ1xyXG5cdFx0XHRcdFx0ZmllbGRzPXsgZmllbGRzIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ICggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSA9PiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRmaWVsZD17IFsgZmllbGRJZCwgZmllbGREYXRhIF0gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRcdGtleT17IGZpZWxkSWQgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkRGVmYXVsdCggZmllbGRJZCApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHRoaXMub25DaGFuZ2VGaWVsZE1hcCggdmFsdWUsIGZpZWxkSWQgKSB9XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZm9ybUZpZWxkc0xpc3QgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPiB9XHJcblx0XHRcdFx0PC9BY3Rpb25GaWVsZHNNYXA+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHRcdDwvZGl2PiApO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxufSApO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRDaGVja2JveENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ3JlZGlyZWN0X3RvX3BhZ2UnLCBjbGFzcyBSZWRpcmVjdFRvUGFnZUFjdGlvbiBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblx0fVxyXG5cclxuXHRpc0NoZWNrZWQoIG5hbWUgKSB7XHJcblx0XHRjb25zdCBhcmdzX2ZpZWxkcyA9IEFycmF5LmZyb20oIHRoaXMucHJvcHMuc2V0dGluZ3MucmVkaXJlY3RfYXJncyB8fCBbXSApO1xyXG5cclxuXHRcdHJldHVybiBCb29sZWFuKCBhcmdzX2ZpZWxkcy5pbmNsdWRlcyggbmFtZSApICk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVJlZGlyZWN0QXJncyggdmFsdWUsIGZpZWxkX25hbWUgKSB7XHJcblx0XHRsZXQgYXJnc19maWVsZHMgPSBBcnJheS5mcm9tKCB0aGlzLnByb3BzLnNldHRpbmdzLnJlZGlyZWN0X2FyZ3MgfHwgW10gKTtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdGNvbnN0IGZpZWxkX2lkID0gYXJnc19maWVsZHMuaW5kZXhPZiggZmllbGRfbmFtZSApO1xyXG5cclxuXHRcdFx0YXJnc19maWVsZHMuc3BsaWNlKCBmaWVsZF9pZCwgMSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGFyZ3NfZmllbGRzLnB1c2goIGZpZWxkX25hbWUgKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggYXJnc19maWVsZHMsICdyZWRpcmVjdF9hcmdzJyApO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VTZXR0aW5nKCB2YWx1ZSwga2V5ICkge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNvdXJjZSwgbGFiZWwsIHNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInJlZGlyZWN0X3RvX3BhZ2VcIj5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRrZXk9J3JlZGlyZWN0X3R5cGUnXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X3R5cGUnICkgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X3R5cGUgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucmVkaXJlY3RfdHlwZXMgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdyZWRpcmVjdF90eXBlJyApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0eyAnc3RhdGljX3BhZ2UnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PSdyZWRpcmVjdF90eXBlJ1xyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9wYWdlJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF9wYWdlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBhZ2VzIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAncmVkaXJlY3RfcGFnZScgKSB9XHJcblx0XHRcdC8+IH1cclxuXHRcdFx0eyAnY3VzdG9tX3VybCcgPT09IHNldHRpbmdzLnJlZGlyZWN0X3R5cGUgJiYgPFRleHRDb250cm9sXHJcblx0XHRcdFx0a2V5PSdyZWRpcmVjdF91cmxfY29udHJvbCdcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfdXJsJyApIH1cclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X3VybCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3JlZGlyZWN0X3VybCcgKSB9XHJcblx0XHRcdC8+IH1cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X2FyZ3MnICkgfVxyXG5cdFx0XHRcdGtleT1cInJlZGlyZWN0X2FyZ3NfY29udHJvbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVkaXJlY3RfYXJncy1jb250cm9sJz5cclxuXHRcdFx0XHRcdHsgdGhpcy5maWVsZHMubWFwKCAoIHsgbmFtZSB9LCBpbmRleCApID0+IDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgY2hlY2tib3hfYXJnc18keyBuYW1lIH1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgbmFtZSB9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHRoaXMuaXNDaGVja2VkKCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VSZWRpcmVjdEFyZ3MoIG5ld1ZhbCwgbmFtZSApIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRrZXk9J3JlZGlyZWN0X2hhc2hfY29udHJvbCdcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfaGFzaCcgKSB9XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF9oYXNoIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAncmVkaXJlY3RfaGFzaCcgKSB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBBY3Rpb25NZXNzYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9iYXNlLWFjdGlvbi1jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCBXcmFwcGVyUmVxdWlyZWRDb250cm9sIGZyb20gXCIuLi9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbFwiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ3JlZ2lzdGVyX3VzZXInLCBjbGFzcyBSZWdpc3RlclVzZXJBY3Rpb24gZXh0ZW5kcyBCYXNlQWN0aW9uQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblx0XHR0aGlzLmZvcm1GaWVsZHNMaXN0ID0gWyB7IHZhbHVlOiAnJywgbGFiZWw6ICctLScgfSwgLi4udGhpcy5maWVsZHMgXTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3QgdXNlckZpZWxkcyA9IE9iamVjdC5lbnRyaWVzKCBzb3VyY2UudXNlckZpZWxkcyApO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQga2V5PVwicmVnaXN0ZXJfdXNlclwiPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0a2V5PVwidXNlcl9maWVsZHNfbWFwXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9PnsgX18oICdTZXQgZm9ybSBmaWVsZHMgbmFtZXMgdG8gdG8gZ2V0IHVzZXIgZGF0YSBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvc3Bhbj5cclxuXHRcdFx0XHRcdHsgdXNlckZpZWxkcy5tYXAoICggWyB2YWx1ZSwgZGF0YSBdICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0ZmllbGQ9eyBbIHZhbHVlLCBkYXRhIF0gfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgYGZvcm1fZmllbGRzXyR7IHZhbHVlIH1gIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZERlZmF1bHQoIHZhbHVlICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZm9ybUZpZWxkc0xpc3QgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIG5ld1ZhbHVlLCB2YWx1ZSApIH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJ1c2VyX3JvbGVfbGlzdFwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfcm9sZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlcl9yb2xlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnVzZXJSb2xlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAndXNlcl9yb2xlJyApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlcl9tZXRhJyApIH1cclxuXHRcdFx0XHRrZXk9J3VzZXJfbWV0YV9saXN0J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLW1ldGEtcm93cyc+XHJcblx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnZGVzY3JpcHRpb24tY29udHJvbHMnIH0+eyBfXyggJ1NldCB1c2VyIG1ldGEgZmllbGRzIHRvIHNhdmUgYXBwcm9wcmlhdGUgZm9ybSBmaWVsZHMgaW50bycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3NwYW4+XHJcblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCB7IG5hbWUgfSwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBuYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBuYW1lIH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZE1ldGEoIG5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlTWV0YUZpZWxkTWFwKCBuZXdWYWwsIG5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9J2xvZ19pbidcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnbG9nX2luJyApIH1cclxuXHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MubG9nX2luIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdsb2dfaW4nICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0a2V5PSdhZGRfdXNlcl9pZF9jb250cm9sJ1xyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdhZGRfdXNlcl9pZCcgKSB9XHJcblx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmFkZF91c2VyX2lkIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdhZGRfdXNlcl9pZCcgKSB9XHJcblx0XHRcdFx0aGVscD17IGhlbHAoICdhZGRfdXNlcl9pZCcgKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBY3Rpb25NZXNzYWdlc1xyXG5cdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PiApO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxuXHJcbn0gKTtcclxuIiwiLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBNYWNyb3NJbnNlcnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9tYWNyb3MtaW5zZXJ0ZXJcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmFkZEFjdGlvbiggJ3NlbmRfZW1haWwnLCBmdW5jdGlvbiBTZW5kRW1haWxBY3Rpb24oIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzZXR0aW5ncyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzb3VyY2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGFiZWwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaGVscCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBvbkNoYW5nZVNldHRpbmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgfSApIHtcclxuXHJcblxyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCBbXSwgJy0tJyApO1xyXG5cclxuXHRjb25zdCBpbnNlcnRNYWNyb3MgPSAoIG1hY3JvcyApID0+IHtcclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBzZXR0aW5ncy5jb250ZW50IHx8ICcnICsgJyUnICsgbWFjcm9zICsgJyUnO1xyXG5cclxuXHRcdG9uQ2hhbmdlU2V0dGluZyggY29udGVudCwgJ2NvbnRlbnQnICk7XHJcblx0fVxyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJldHVybiA8PlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwibWFpbF90b1wiXHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MubWFpbF90byB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UubWFpbFRvIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21haWxfdG8nICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ21haWxfdG8nICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ21haWxfdG8nICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdHsgJ2N1c3RvbScgPT09IHNldHRpbmdzLm1haWxfdG8gJiYgPFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cImN1c3RvbV9lbWFpbFwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuY3VzdG9tX2VtYWlsIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2N1c3RvbV9lbWFpbCcgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnY3VzdG9tX2VtYWlsJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdjdXN0b21fZW1haWwnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyAnZm9ybScgPT09IHNldHRpbmdzLm1haWxfdG8gJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwiZnJvbV9maWVsZFwiXHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZnJvbV9maWVsZCB9XHJcblx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2Zyb21fZmllbGQnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fZmllbGQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2Zyb21fZmllbGQnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwicmVwbHlfdG9cIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X3RvIH1cclxuXHRcdFx0b3B0aW9ucz17IHNvdXJjZS5yZXBseVRvIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlcGx5X3RvJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV90bycgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAncmVwbHlfdG8nICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdHsgJ2N1c3RvbScgPT09IHNldHRpbmdzLnJlcGx5X3RvICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJyZXBseV90b19lbWFpbFwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVwbHlfdG9fZW1haWwgfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncmVwbHlfdG9fZW1haWwnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ3JlcGx5X3RvX2VtYWlsJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdyZXBseV90b19lbWFpbCcgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPiB9XHJcblx0XHR7ICdmb3JtJyA9PT0gc2V0dGluZ3MucmVwbHlfdG8gJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwicmVwbHlfZnJvbV9maWVsZFwiXHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVwbHlfZnJvbV9maWVsZCB9XHJcblx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlcGx5X2Zyb21fZmllbGQnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ3JlcGx5X2Zyb21fZmllbGQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X2Zyb21fZmllbGQnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cInN1YmplY3RcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnN1YmplY3QgfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnc3ViamVjdCcgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnc3ViamVjdCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnc3ViamVjdCcgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGtleT1cImZyb21fbmFtZVwiXHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZnJvbV9uYW1lIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2Zyb21fbmFtZScgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnZnJvbV9uYW1lJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdmcm9tX25hbWUnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJmcm9tX2FkZHJlc3NcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fYWRkcmVzcyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmcm9tX2FkZHJlc3MnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fYWRkcmVzcycgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9hZGRyZXNzJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJjb250ZW50X3R5cGVcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmNvbnRlbnRfdHlwZSB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UuY29udGVudF90eXBlIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2NvbnRlbnRfdHlwZScgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAnY29udGVudF90eXBlJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2NvbnRlbnRfdHlwZScgKSB9XHJcblx0XHQvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy13cmFwXCI+XHJcblx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJjb250ZW50XCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmNvbnRlbnQgfVxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdjb250ZW50JyApIH1cclxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ2NvbnRlbnQnICkgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdjb250ZW50JyApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8TWFjcm9zSW5zZXJ0ZXJcclxuXHRcdFx0XHRmaWVsZHM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHRvbkZpZWxkQ2xpY2s9eyBpbnNlcnRNYWNyb3MgfVxyXG5cdFx0XHRcdGN1c3RvbU1hY3Jvcz17IHNvdXJjZS5jdXN0b21NYWNyb3MgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC8+O1xyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufSApO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICd1cGRhdGVfb3B0aW9ucycsIGNsYXNzIFVwZGF0ZU9wdGlvbnNBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cdH1cclxuXHJcblxyXG5cdGdldEZpZWxkQnlOYW1lKCB7IHNvdXJjZSwgbmFtZSB9ICkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3NbIHNvdXJjZSBdICYmIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZE1ldGEoIG5hbWUgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRGaWVsZEJ5TmFtZSgge1xyXG5cdFx0XHRzb3VyY2U6ICdtZXRhX2ZpZWxkc19tYXAnLFxyXG5cdFx0XHRuYW1lXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VGaWVsZHNNYXAoIHsgc291cmNlLCBuYW1lRmllbGQsIHZhbHVlIH0gKSB7XHJcblx0XHRjb25zdCBmaWVsZHNNYXAgPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5wcm9wcy5zZXR0aW5nc1sgc291cmNlIF0gKTtcclxuXHJcblx0XHRmaWVsZHNNYXBbIG5hbWVGaWVsZCBdID0gdmFsdWU7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXBcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlTWV0YUZpZWxkTWFwID0gKCB2YWx1ZSwgbmFtZUZpZWxkICkgPT4ge1xyXG5cdFx0XHRjb25zdCBzb3VyY2UgPSAnbWV0YV9maWVsZHNfbWFwJztcclxuXHJcblx0XHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxyXG5cdFx0XHRcdHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH1cclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRvbkNoYW5nZSgge1xyXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHRcdFsga2V5IF06IHZhbHVlXHJcblx0XHRcdH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRcdHJldHVybiAoIDxkaXYga2V5PVwicmVnaXN0ZXJfdXNlclwiPlxyXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGtleT1cIm9wdGlvbnNfcGFnZV9saXN0XCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnb3B0aW9uc19wYWdlJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5vcHRpb25zX3BhZ2UgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2Uub3B0aW9uc1BhZ2VzIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnb3B0aW9uc19wYWdlJyApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnb3B0aW9uc19tYXAnICkgfVxyXG5cdFx0XHRcdGtleT0nb3B0aW9uc19tZXRhX2xpc3QnXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItbWV0YS1yb3dzJz5cclxuXHRcdFx0XHRcdHsgdGhpcy5maWVsZHMubWFwKCAoIHsgbmFtZSB9LCBpbmRleCApID0+IDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyAnb3B0aW9uc19tZXRhXycgKyBuYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IG5hbWUgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGRNZXRhKCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2VNZXRhRmllbGRNYXAoIG5ld1ZhbCwgbmFtZSApXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz4gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgSmV0RmllbGRzTWFwQ29udHJvbCBmcm9tIFwiLi4vYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXBcIjtcclxuaW1wb3J0IEFjdGlvbk1lc3NhZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAndXBkYXRlX3VzZXInLCBjbGFzcyBVcGRhdGVVc2VyQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHRcdHRoaXMubWV0YU9wdGlvbiA9ICd1c2VyX21ldGEnO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHR5cGU6ICcnLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGdldEZpZWxkTWFwKCBuYW1lICkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggc2V0dGluZ3MgJiYgc2V0dGluZ3MuZmllbGRzX21hcCAmJiBzZXR0aW5ncy5maWVsZHNfbWFwWyBuYW1lIF0gKSB7XHJcblx0XHRcdHJldHVybiBzZXR0aW5ncy5maWVsZHNfbWFwWyBuYW1lIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cdFx0XHRvbkNoYW5nZSgge1xyXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHRcdFsga2V5IF06IHZhbHVlXHJcblx0XHRcdH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRcdHJldHVybiAoIDxkaXYga2V5PVwidXBkYXRlX3VzZXJcIj5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdGtleT0ndXNlcl9maWVsZHNfbWFwJ1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLW1ldGEtcm93cyc+XHJcblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCBmaWVsZCwgaW5kZXggKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZERhdGEgPSB0aGlzLmdldEZpZWxkTWFwKCBmaWVsZC5uYW1lICk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgZmllbGQubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxKZXRGaWVsZHNNYXBDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZC5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRWYWx1ZT17IGZpZWxkRGF0YSB9XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZE5hbWU9eyBmaWVsZC5uYW1lIH1cclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0bWV0YVByb3A9J3VzZXJfbWV0YSdcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkc01hcD17IHNldHRpbmdzLmZpZWxkc19tYXAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRUeXBlcz17IHNvdXJjZS51c2VyRmllbGRzIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUsICdmaWVsZHNfbWFwJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlcl9yb2xlJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0a2V5PVwidXNlcl9yb2xlX2xpc3RcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlcl9yb2xlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnVzZXJSb2xlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ3VzZXJfcm9sZScgKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxBY3Rpb25NZXNzYWdlc1xyXG5cdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTtcclxuIiwiaW1wb3J0IHsgZ2V0QWN0aW9uU2V0dGluZ3MgfSBmcm9tIFwiLi4vaGVscGVycy9nYXRld2F5LWhlbHBlclwiO1xyXG5pbXBvcnQgeyBmcm9tTG9jYWxpemVIZWxwZXIgfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkge1xyXG5cdGNvbnN0IHsgZ2F0ZXdheUF0dHJzLCBsYWJlbCB9ID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0TG9jYWxpemVkRnVsbFBhY2snICkoIGFjdGlvbi50eXBlICk7XHJcblx0Y29uc3QgYWN0aW9uU2V0dGluZ3MgPSBnZXRBY3Rpb25TZXR0aW5ncyggYWN0aW9uLmlkICk7XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gYXR0ciA9PiBhY3Rpb25TZXR0aW5nc1sgYXR0ciBdID8gYWN0aW9uU2V0dGluZ3NbIGF0dHIgXSA6ICdOVUxMJztcclxuXHJcblx0Y29uc3QgbGFiZWxXaXRoQXR0cnMgPSBnYXRld2F5QXR0cnMoKS5tYXAoIGF0dHIgPT4gKCBgJHsgbGFiZWwoIGF0dHIgKSB9ICR7IHZhbHVlKCBhdHRyICkgfWAgKSApO1xyXG5cclxuXHRyZXR1cm4gbGFiZWxXaXRoQXR0cnMuam9pbiggJywgJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYXRld2F5QWN0aW9uQXR0cmlidXRlczsiLCJpbXBvcnQge1xyXG5cdGdhdGV3YXlBdHRyLFxyXG5cdHJlbmRlckdhdGV3YXlcclxufSBmcm9tIFwiLi4vaGVscGVycy9nYXRld2F5LWhlbHBlclwiO1xyXG5pbXBvcnQgVG9vbHMsIHsgZXZlbnQgfSBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMgZnJvbSBcIi4vZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5pbXBvcnQge1xyXG5cdGFjdGlvbkJ5VHlwZUxpc3QsXHJcblx0ZnJvbUxvY2FsaXplSGVscGVyXHJcbn0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgUGF5UGFsIGZyb20gXCIuL3BheXBhbFwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuZXZlbnQoICdqZXQtZmItZ2F0ZXdheXMvaW5pdCcgKSgpO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRUZXh0Q29udHJvbCxcclxuXHRDaGVja2JveENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRSYWRpb0NvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG5cdE1vZGFsLFxyXG5cdFRleHQsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHBhcnNlQWN0aW9ucyA9IGFjdGlvbnMgPT4ge1xyXG5cdHJldHVybiBhY3Rpb25zLmZpbHRlciggYWN0aW9uID0+ICEgKCBhY3Rpb24udHlwZSA9PT0gJ2luc2VydF9wb3N0JyB8fCBhY3Rpb24udHlwZSA9PT0gJ3JlZGlyZWN0X3RvX3BhZ2UnICkgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhdGV3YXlzRWRpdG9yKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXRld2F5c0FyZ3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVBY3Rpb25zLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25Vbk1vdW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TYXZlSXRlbXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICkge1xyXG5cclxuXHRjb25zdCBhdmFpbGFibGVBY3Rpb25zID0gcGFyc2VBY3Rpb25zKCBhY3RpdmVBY3Rpb25zICk7XHJcblxyXG5cdGNvbnN0IGdhdGV3YXlzRGF0YSA9IGdhdGV3YXlBdHRyKCk7XHJcblx0Y29uc3QgbGFiZWwgPSBnYXRld2F5QXR0ciggJ2xhYmVscycgKTtcclxuXHJcblx0Y29uc3QgWyBnYXRld2F5LCBzZXRHYXRld2F5IF0gPSB1c2VTdGF0ZSggZ2F0ZXdheXNBcmdzICk7XHJcblxyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIHNldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gbmV3VmFsdWVcclxuXHQgKi9cclxuXHRjb25zdCBzZXRWYWx1ZUluT2JqZWN0ID0gKCB3aGVuLCB0eXBlLCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHNldEdhdGV3YXkoICggcHJldkFyZ3MgKSA9PiB7XHJcblx0XHRcdGlmICggISBwcmV2QXJnc1sgd2hlbiBdICkge1xyXG5cdFx0XHRcdHByZXZBcmdzWyB3aGVuIF0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwcmV2QXJnc1sgd2hlbiBdWyB0eXBlIF0gPSBuZXdWYWx1ZTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIGdldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gaXNFbXB0eVJlc3VsdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcblx0ICovXHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9ucyA9ICggd2hlbiwgdHlwZSwgaXNFbXB0eVJlc3VsdCA9IGZhbHNlICkgPT4ge1xyXG5cdFx0aWYgKCBnYXRld2F5WyB3aGVuIF0gJiYgZ2F0ZXdheVsgd2hlbiBdWyB0eXBlIF0gKSB7XHJcblx0XHRcdHJldHVybiBnYXRld2F5WyB3aGVuIF1bIHR5cGUgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0VtcHR5UmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFJlc3VsdE1lc3NhZ2UgPSAoIGtleSwgdmFsdWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbWVzc2FnZXMnLCBrZXksIHZhbHVlICk7XHJcblx0fTtcclxuXHRjb25zdCBnZXRSZXN1bHRNZXNzYWdlID0gKCBrZXkgKSA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ21lc3NhZ2VzJywga2V5LCBnYXRld2F5c0RhdGEubWVzc2FnZXNbIGtleSBdICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc0JlZm9yZSA9ICggaWQsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfYmVmb3JlJywgaWQsIG5ld1ZhbHVlICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYWN0aW9uRGVmYXVsdCA9IHsgYWN0aXZlOiBmYWxzZSB9O1xyXG5cclxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zQmVmb3JlID0gaWQgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX2JlZm9yZScsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IHNldE5vdGlmaWNhdGlvbnNGYWlsZWQgPSAoIHR5cGUsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfZmFpbGVkJywgdHlwZSwgbmV3VmFsdWUgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnNGYWlsZWQgPSBpZCA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ25vdGlmaWNhdGlvbnNfZmFpbGVkJywgaWQsIGFjdGlvbkRlZmF1bHQgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXROb3RpZmljYXRpb25zU3VjY2VzcyA9ICggaWQsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfc3VjY2VzcycsIGlkLCBuZXdWYWx1ZSApO1xyXG5cdH07XHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MgPSBpZCA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ25vdGlmaWNhdGlvbnNfc3VjY2VzcycsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHRydWUgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0aWYgKCBvblNhdmVJdGVtcyApIHtcclxuXHJcblx0XHRcdFx0WyAnbm90aWZpY2F0aW9uc19iZWZvcmUnLCAnbm90aWZpY2F0aW9uc19mYWlsZWQnLCAnbm90aWZpY2F0aW9uc19zdWNjZXNzJyBdLmZvckVhY2goIG5hbWUgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCAhIGdhdGV3YXlbIG5hbWUgXSApIHtcclxuXHRcdFx0XHRcdFx0Z2F0ZXdheVsgbmFtZSBdID0ge307XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdE9iamVjdC5lbnRyaWVzKCBnYXRld2F5WyBuYW1lIF0gKS5mb3JFYWNoKCAoIFsgYWN0aW9uLCBpc0NoZWNrZWQgXSApID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCAhIGlzQ2hlY2tlZCApIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZ2F0ZXdheVsgbmFtZSBdWyBhY3Rpb24gXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSApXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRvblNhdmVJdGVtcyggZ2F0ZXdheSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdH0sIFsgaXNTYXZlQWN0aW9uIF0gKTtcclxuXHJcblx0Y29uc3QgYWN0aW9uc0xpc3QgPSBhY3Rpb25CeVR5cGVMaXN0KCAnaW5zZXJ0X3Bvc3QnLCB0cnVlICk7XHJcblx0Y29uc3QgYWN0aW9uTGFiZWwgPSBmcm9tTG9jYWxpemVIZWxwZXIoICdnZXRBY3Rpb25MYWJlbCcgKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHR7IHJlbmRlckdhdGV3YXkoIGdhdGV3YXkuZ2F0ZXdheSwgeyBzZXRWYWx1ZUluT2JqZWN0LCBnZXROb3RpZmljYXRpb25zIH0gKSB9XHJcblx0XHR7IEJvb2xlYW4oIGF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoICkgJiYgPD5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBfXyggJ0JlZm9yZSBwYXltZW50IHByb2Nlc3NlZDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0a2V5PVwiYmVmb3JlX3BheW1lbnRfYmFzZV9jb250cm9sXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NoZWNrYm94ZXMtcm93JyB9PlxyXG5cdFx0XHRcdFx0eyBhdmFpbGFibGVBY3Rpb25zLm1hcCggKCBhY3Rpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIGFjdGlvbi50eXBlID09PSAnaW5zZXJ0X3Bvc3QnIHx8IGFjdGlvbi50eXBlID09PSAncmVkaXJlY3RfdG9fcGFnZScgKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3Jtcy1jaGVja2JveC1maWVsZCcgfVxyXG5cdFx0XHRcdFx0XHRcdGtleT17IGBwbGFjZV9ob2xkZXJfYmxvY2tfJHsgYWN0aW9uLmlkICsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zQmVmb3JlKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgYWN0aW9uTGFiZWwoIGFjdGlvbi50eXBlICkgfVxyXG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNCZWZvcmUoIGFjdGlvbi5pZCwge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogYWN0aW9uLnR5cGVcclxuXHRcdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0XHQvPjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPbiBzdWNjZXNzZnVsIHBheW1lbnQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdGtleT1cInN1Y2Nlc3NfcGF5bWVudF9iYXNlX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdHsgYXZhaWxhYmxlQWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgYHBsYWNlX2hvbGRlcl9ibG9ja18keyBhY3Rpb24uaWQgKyBpbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGdldE5vdGlmaWNhdGlvbnNTdWNjZXNzKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgYWN0aW9uTGFiZWwoIGFjdGlvbi50eXBlICkgfVxyXG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNTdWNjZXNzKCBhY3Rpb24uaWQsIHtcclxuXHRcdFx0XHRcdFx0XHRcdGFjdGl2ZSxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlXHJcblx0XHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdFx0Lz47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT24gZmFpbGVkIHBheW1lbnQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdGtleT1cImZhaWxlZF9wYXltZW50X2Jhc2VfY29udHJvbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0eyBhdmFpbGFibGVBY3Rpb25zLm1hcCggKCBhY3Rpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIGFjdGlvbi50eXBlID09PSAnaW5zZXJ0X3Bvc3QnIHx8IGFjdGlvbi50eXBlID09PSAncmVkaXJlY3RfdG9fcGFnZScgKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3Jtcy1jaGVja2JveC1maWVsZCcgfVxyXG5cdFx0XHRcdFx0XHRcdGtleT17IGBwbGFjZV9ob2xkZXJfYmxvY2tfJHsgYWN0aW9uLmlkICsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zRmFpbGVkKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgYWN0aW9uTGFiZWwoIGFjdGlvbi50eXBlICkgfVxyXG5cdFx0XHRcdFx0XHRcdGhlbHA9eyBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNGYWlsZWQoIGFjdGlvbi5pZCwge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogYWN0aW9uLnR5cGVcclxuXHRcdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0XHQvPjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHQ8Lz4gfVxyXG5cclxuXHRcdHsgKCAxIDwgYWN0aW9uc0xpc3QubGVuZ3RoIHx8IGdhdGV3YXkuYWN0aW9uX29yZGVyICkgJiYgPEJhc2VDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdhY3Rpb25fb3JkZXInICkgfVxyXG5cdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyX2Jhc2VfY29udHJvbCdcclxuXHRcdD5cclxuXHRcdFx0PFJhZGlvQ29udHJvbFxyXG5cdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCdcclxuXHRcdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyJ1xyXG5cdFx0XHRcdG9wdGlvbnM9eyBhY3Rpb25CeVR5cGVMaXN0KCAnaW5zZXJ0X3Bvc3QnLCB0cnVlICkgfVxyXG5cdFx0XHRcdHNlbGVjdGVkPXsgZ2F0ZXdheS5hY3Rpb25fb3JkZXIgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdHNldEdhdGV3YXkoIHByZXZBcmdzID0+ICgge1xyXG5cdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0YWN0aW9uX29yZGVyOiBOdW1iZXIoIG5ld1ZhbCApXHJcblx0XHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvQmFzZUNvbnRyb2w+IH1cclxuXHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncHJpY2VfZmllbGQnICkgfVxyXG5cdFx0XHRrZXk9eyAnZm9ybV9maWVsZHNfcHJpY2VfZmllbGQnIH1cclxuXHRcdFx0dmFsdWU9eyBnYXRld2F5LnByaWNlX2ZpZWxkIH1cclxuXHRcdFx0bGFiZWxQb3NpdGlvbj0nc2lkZSdcclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdHNldEdhdGV3YXkoIHByZXZBcmdzID0+ICgge1xyXG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRwcmljZV9maWVsZDogbmV3VmFsXHJcblx0XHRcdFx0fSApICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHQvPlxyXG5cdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21hY3Jvc19iYXNlX2NvbnRyb2xcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8aDQ+XHJcblx0XHRcdFx0eyBfXyggJ0F2YWlsYWJsZSBtYWNyb3MgbGlzdDogJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0eyBfXyggJyVnYXRld2F5X2Ftb3VudCUgLSBwYXltZW50IGFtb3VudCByZXR1cm5lZCBmcm9tIGdhdGV3YXkgdGVtcGxhdGU7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0eyBfXyggJyVnYXRld2F5X3N0YXR1cyUgLSBwYXllbW50IHN0YXR1cyByZXR1cm5lZCBmcm9tIHBheW1lbnQgZ2F0ZXdheTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHR7IF9fKCAnJWZpZWxkX25hbWUlIC0gcmVwbGFjZSBcImZpZWxkX25hbWVcIiB3aXRoIGFueSBmaWVsZCBuYW1lIGZyb20gdGhlIGZvcm07JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdDwvaDQ+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cclxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9zdWNjZXNzXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2Vfc3VjY2VzcycgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdzdWNjZXNzJywgbmV3VmFsdWUgKSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tZXNzYWdlX2ZhaWxlZFwiXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtZXNzYWdlX2ZhaWxlZCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0Lz5cclxuXHRcdHsgYWN0aXZlQWN0aW9ucy5maW5kKCBhY3Rpb24gPT4gYWN0aW9uLnR5cGUgPT09ICdyZWRpcmVjdF90b19wYWdlJyApICYmIDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0a2V5PVwiY2hlY2tib3hfYmxvY2tfcmVkaXJlY3RfdG9fcGFnZVwiXHJcblx0XHRcdGNoZWNrZWQ9eyBnYXRld2F5LnVzZV9zdWNjZXNzX3JlZGlyZWN0IH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZV9zdWNjZXNzX3JlZGlyZWN0JyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB7XHJcblx0XHRcdFx0c2V0R2F0ZXdheSggcHJldkFyZ3MgPT4gKCB7XHJcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdHVzZV9zdWNjZXNzX3JlZGlyZWN0OiB2YWx1ZVxyXG5cdFx0XHRcdH0gKSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHQ8Lz47XHJcblxyXG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0cmVnaXN0ZXJHYXRld2F5LFxyXG5cdGdhdGV3YXlMYWJlbFxyXG59ID0gd2luZG93LkpldEZCR2F0ZXdheXM7XHJcblxyXG5jb25zdCBsYWJlbCA9IGdhdGV3YXlMYWJlbCggJ3BheXBhbCcgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheVBhbCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRWYWx1ZUluT2JqZWN0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXROb3RpZmljYXRpb25zXHJcblx0XHRcdFx0XHRcdFx0XHR9ICkge1xyXG5cclxuXHRjb25zdCBzZXRTZXR0aW5nID0gKCBrZXksIHZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ3BheXBhbCcsIGtleSwgdmFsdWUgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGdldFNldHRpbmcgPSAoIGtleSApID0+IHtcclxuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAncGF5cGFsJywga2V5LCAnJyApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjbGllbnRfaWQnICkgfVxyXG5cdFx0XHRrZXk9J3BheXBhbF9jbGllbnRfaWRfc2V0dGluZydcclxuXHRcdFx0dmFsdWU9eyBnZXRTZXR0aW5nKCAnY2xpZW50X2lkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ2NsaWVudF9pZCcsIG5ld1ZhbCApIH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3NlY3JldCcgKSB9XHJcblx0XHRcdGtleT0ncGF5cGFsX3NlY3JldF9zZXR0aW5nJ1xyXG5cdFx0XHR2YWx1ZT17IGdldFNldHRpbmcoICdzZWNyZXQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBzZXRTZXR0aW5nKCAnc2VjcmV0JywgbmV3VmFsICkgfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnY3VycmVuY3knICkgfVxyXG5cdFx0XHRrZXk9J3BheXBhbF9jdXJyZW5jeV9jb2RlX3NldHRpbmcnXHJcblx0XHRcdHZhbHVlPXsgZ2V0U2V0dGluZyggJ2N1cnJlbmN5JyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ2N1cnJlbmN5JywgbmV3VmFsICkgfVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbnJlZ2lzdGVyR2F0ZXdheSggJ3BheXBhbCcsIFBheVBhbCApO1xyXG5cclxuIiwiaW1wb3J0IHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi13cmFwcGVyXCI7XHJcbmltcG9ydCB7IHVzZUFjdGlvbnMgfSBmcm9tIFwiLi9ob29rcy1oZWxwZXJcIjtcclxuaW1wb3J0IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzIGZyb20gXCIuLi9nYXRld2F5cy9nYXRld2F5LWFjdGlvbi1hdHRydWJpdGVzXCI7XHJcbmltcG9ydCB7IHNhdmVHbG9iYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWN0aW9uc0J5VHlwZSA9IHR5cGUgPT4ge1xyXG5cdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xyXG5cclxuXHRyZXR1cm4gYWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbGl6ZUhlbHBlciA9IG5hbWUgPT4ge1xyXG5cdHJldHVybiBuYW1lID8gd2luZG93LkpldEZCTG9jYWxpemVIZWxwZXJbIG5hbWUgXSA6IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkJ5VHlwZUxpc3QgPSAoIGFjdGlvblR5cGUsIHdpdGhEZXNjID0gZmFsc2UgKSA9PiB7XHJcblx0cmV0dXJuIGdldEFjdGlvbnNCeVR5cGUoIGFjdGlvblR5cGUgKS5tYXAoIGFjdGlvbiA9PiB7XHJcblx0XHRjb25zdCBuZXdBY3Rpb24gPSB7XHJcblx0XHRcdHZhbHVlOiBhY3Rpb24uaWQsXHJcblx0XHRcdGxhYmVsOiBmcm9tTG9jYWxpemVIZWxwZXIoICdnZXRBY3Rpb25MYWJlbCcgKSggYWN0aW9uLnR5cGUgKVxyXG5cdFx0fTtcclxuXHRcdGlmICggd2l0aERlc2MgKSB7XHJcblx0XHRcdG5ld0FjdGlvbi5sYWJlbCArPSBgICgkeyBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkgfSlgXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ld0FjdGlvbjtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQWN0aW9uID0gKCBhY3Rpb25UeXBlLCBhY3Rpb25JbnN0YW5jZSApID0+IHtcclxuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zID0gd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9ucyB8fCB7fTtcclxuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zWyBhY3Rpb25UeXBlIF0gPSB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICk7XHJcbn07XHJcblxyXG5zYXZlR2xvYmFsQ29tcG9uZW50KCAnSmV0RkJBY3Rpb25zJywgeyBhZGRBY3Rpb24gfSApOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tQYXJzZXJGdW5jICkgPT4ge1xyXG5cdGNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yID0gKCBibG9ja3MgKSA9PiB7XHJcblxyXG5cdFx0YmxvY2tzID0gYmxvY2tzIHx8IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XHJcblxyXG5cdFx0YmxvY2tzLm1hcCggYmxvY2sgPT4ge1xyXG5cdFx0XHRibG9ja1BhcnNlckZ1bmMoIGJsb2NrICk7XHJcblxyXG5cdFx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2suaW5uZXJCbG9ja3MgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZvcm1GaWVsZHNCbG9ja3MgPSAoIGV4Y2x1ZGUgPSBbXSwgcGxhY2Vob2xkZXIgPSBmYWxzZSApID0+IHtcclxuXHRjb25zdCBmb3JtRmllbGRzID0gW107XHJcblxyXG5cdGxldCBza2lwRmllbGRzID0gWyAnc3VibWl0JywgJ2Zvcm0tYnJlYWsnLCAnaGVhZGluZycsICdncm91cC1icmVhaycsIC4uLmV4Y2x1ZGUgXTtcclxuXHJcblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrID0+IHtcclxuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcclxuXHRcdFx0JiYgYmxvY2suYXR0cmlidXRlcy5uYW1lXHJcblx0XHRcdCYmICEgc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcclxuXHRcdCkge1xyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bmFtZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gcGxhY2Vob2xkZXJcclxuXHRcdD8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxyXG5cdFx0OiBmb3JtRmllbGRzO1xyXG59XHJcblxyXG5jb25zdCBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCA9ICggcGxhY2Vob2xkZXIgPSBmYWxzZSApID0+IHtcclxuXHJcblx0Y29uc3Qgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnIF07XHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IFtdO1xyXG5cclxuXHRjb25zdCBjdXJyZW50ID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZWxlY3RlZEJsb2NrKCk7XHJcblxyXG5cdGlmICggbnVsbCA9PT0gY3VycmVudCApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGN1cnJlbnQuY2xpZW50SWQgIT09IGJsb2NrLmNsaWVudElkXHJcblx0XHRcdCYmICEgc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcclxuXHRcdCkge1xyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bGFiZWw6IGJsb2NrLmF0dHJpYnV0ZXMubGFiZWwgfHwgYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBwbGFjZWhvbGRlclxyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXHJcblx0XHQ6IGZvcm1GaWVsZHM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdmFpbGFibGVGaWVsZHMgPSAoIGV4Y2x1ZGUgPSBbXSApID0+IHtcclxuXHRsZXQgZmllbGRzID0gW107XHJcblx0Y29uc3QgYmxvY2tzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggZXhjbHVkZSApO1xyXG5cclxuXHRpZiAoIGJsb2NrcyApIHtcclxuXHRcdGJsb2Nrcy5mb3JFYWNoKCBpdGVtID0+IGZpZWxkcy5wdXNoKCBpdGVtLm5hbWUgKSApO1xyXG5cdH1cclxuXHRyZXR1cm4gZmllbGRzO1xyXG59XHJcblxyXG5jb25zdCBnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcgPSAoIGJsb2NrTmFtZSApID0+IHtcclxuXHRjb25zdCBmaWVsZHMgPSBnZXRBdmFpbGFibGVGaWVsZHMoIFsgYmxvY2tOYW1lIF0gKTtcclxuXHJcblx0bGV0IGZpZWxkc1N0cmluZyA9IFtdO1xyXG5cdGZpZWxkcy5mb3JFYWNoKCBmdW5jdGlvbiAoIGl0ZW0gKSB7XHJcblx0XHRmaWVsZHNTdHJpbmcucHVzaCggJyVGSUVMRDo6JyArIGl0ZW0gKyAnJScgKTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBfXyggJ0F2YWlsYWJsZSBmaWVsZHM6ICcgKSArIGZpZWxkc1N0cmluZy5qb2luKCAnLCAnICk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBnZXRJbm5lckJsb2NrcyA9ICggY2xpZW50SWQgKSA9PiB7XHJcblx0cmV0dXJuIHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2soIGNsaWVudElkICkuaW5uZXJCbG9ja3M7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZvcm1GaWVsZHNCeUJsb2NrID0gKCBibG9ja0V4Y2x1ZGUgKSA9PiB7XHJcblx0cmV0dXJuICgpID0+IGdldEZvcm1GaWVsZHNCbG9ja3MoIFsgYmxvY2tFeGNsdWRlLm5hbWUgXSApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxyXG5cdGdldElubmVyQmxvY2tzLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBzYXZlR2xvYmFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFuYWdlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGlvblNldHRpbmdzID0gYWN0aW9uSWQgPT4ge1xyXG5cdGNvbnN0IFsgYWN0aW9ucyBdID0gdXNlQWN0aW9ucygpO1xyXG5cdGNvbnN0IGFjdGlvbiA9IGFjdGlvbnMuZmluZCggYWN0aW9uID0+IGFjdGlvbklkID09PSBhY3Rpb24uaWQgKTtcclxuXHJcblx0cmV0dXJuICggYWN0aW9uICYmIGFjdGlvbi5zZXR0aW5ncyApID8gYWN0aW9uLnNldHRpbmdzIDogZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2F0ZXdheUF0dHIgPSAoIGF0dHIgPSBmYWxzZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xyXG5cdGNvbnN0IGRhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XHJcblxyXG5cdGlmICggISBhdHRyICkge1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cdGlmICggISBkYXRhWyBhdHRyIF0gKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBzb3VyY2UgPSBkYXRhWyBhdHRyIF07XHJcblxyXG5cdHJldHVybiBuYW1lID0+IHNvdXJjZVsgbmFtZSBdID8gc291cmNlWyBuYW1lIF0gOiBpc0VtcHR5O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhdGV3YXlMYWJlbCA9ICggdHlwZSwgaXNFbXB0eSA9ICcnICkgPT4ge1xyXG5cdGNvbnN0IGxhYmVsID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XHJcblxyXG5cdHJldHVybiBhdHRyID0+IGxhYmVsKCB0eXBlICkgPyBsYWJlbCggdHlwZSApWyBhdHRyIF0gOiBpc0VtcHR5O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJHYXRld2F5ID0gKCBpZCwgY2FsbGJhY2sgKSA9PiB7XHJcblx0d2luZG93LmpldEZCR2F0ZXdheXNMaXN0ID0gd2luZG93LmpldEZCR2F0ZXdheXNMaXN0IHx8IHt9O1xyXG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSA9IGNhbGxiYWNrO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckdhdGV3YXkgPSAoIGlkLCBwcm9wcyApID0+IHtcclxuXHRpZiAoICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0IHx8ICEgd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGNvbnN0IEdhdGV3YXlDb21wb25lbnQgPSB3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF07XHJcblxyXG5cdHJldHVybiA8R2F0ZXdheUNvbXBvbmVudCB7IC4uLnByb3BzIH0gLz47XHJcbn07XHJcblxyXG5zYXZlR2xvYmFsQ29tcG9uZW50KCAnSmV0RkJHYXRld2F5cycsIHtcclxuXHRnYXRld2F5QXR0cixcclxuXHRnYXRld2F5TGFiZWwsXHJcblx0cmVnaXN0ZXJHYXRld2F5XHJcbn0gKTsiLCJpbXBvcnQgeyBzYXZlR2xvYmFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFuYWdlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcblx0dXNlRGlzcGF0Y2gsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdGNyZWF0ZUhvb2tzXHJcbn0gPSB3cC5ob29rcztcclxuXHJcbmV4cG9ydCBjb25zdCBqZmJIb29rcyA9IGNyZWF0ZUhvb2tzKCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQWN0aW9ucyA9ICggd2l0aEVkaXRQb3N0RWZmZWN0ID0gZmFsc2UgKSA9PiB7XHJcblx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XHJcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0fSApO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlZGl0UG9zdFxyXG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zIHx8ICdbXScgKSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggd2l0aEVkaXRQb3N0RWZmZWN0ICkge1xyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9hY3Rpb25zOiBKU09OLnN0cmluZ2lmeSggYWN0aW9ucyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9LCBbIGFjdGlvbnMgXSApO1xyXG5cclxuXHRyZXR1cm4gWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDbGFzc2VzID0gaW5pdGlhbFZhbGlkID0+IHtcclxuXHRjb25zdCB2YWxpZENsYXNzID0gJ2lzLXZhbGlkJztcclxuXHRjb25zdCBpbnZhbGlkQ2xhc3MgPSAnaXMtaW52YWxpZCdcclxuXHRjb25zdCBpbml0Q2xhc3NlcyA9IFsgJ2pldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgXTtcclxuXHJcblx0Y29uc3QgaW5pdFN0YXRlQ2xhc3NlcyA9ICgpID0+IHtcclxuXHRcdGlmICggaW5pdGlhbFZhbGlkICkge1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5pbml0Q2xhc3NlcywgdmFsaWRDbGFzcyBdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoICEgaW5pdGlhbFZhbGlkICkge1xyXG5cdFx0XHRyZXR1cm4gWyAuLi5pbml0Q2xhc3NlcywgaW52YWxpZENsYXNzIF07XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgWyBjbGFzc2VzLCBzZXRDbGFzc2VzIF0gPSB1c2VTdGF0ZSggaW5pdFN0YXRlQ2xhc3NlcygpICk7XHJcblxyXG5cdGNvbnN0IHNldFZhbGlkQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRzZXRDbGFzc2VzKCBbIC4uLmluaXRDbGFzc2VzLCB2YWxpZENsYXNzIF0gKVxyXG5cdH07XHJcblx0Y29uc3Qgc2V0SW52YWxpZENsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgaW52YWxpZENsYXNzIF0gKVxyXG5cdH07XHJcblx0Y29uc3Qgc2V0TG9hZGluZ0NsYXNzID0gKCkgPT4ge1xyXG5cdFx0c2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgJ2xvYWRpbmcnIF0gKVxyXG5cdH07XHJcblxyXG5cdHJldHVybiBbIGNsYXNzZXMuam9pbiggJyAnICksIHNldFZhbGlkQ2xhc3MsIHNldEludmFsaWRDbGFzcywgc2V0TG9hZGluZ0NsYXNzIF07XHJcbn1cclxuXHJcblxyXG5zYXZlR2xvYmFsQ29tcG9uZW50KCAnSmV0RkJIb29rcycsIHsgdXNlQWN0aW9ucywgdXNlU3RhdGVDbGFzc2VzIH0gKTtcclxuIiwiaW1wb3J0IHsgc2F2ZUdsb2JhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jbGFzcyBUb29scyB7XHJcblxyXG5cdHN0YXRpYyBnZXRIZWxwTWVzc2FnZSggZnJvbSwgbmFtZSApIHtcclxuXHRcdGlmICggdHlwZW9mIGZyb20uaGVscF9tZXNzYWdlc1sgbmFtZSBdICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0cmV0dXJuIGZyb20uaGVscF9tZXNzYWdlc1sgbmFtZSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdHlwZW9mIGZyb20uaGVscF9tZXNzYWdlc1sgYXR0cmlidXRlcy5nZW5lcmF0b3JfZnVuY3Rpb24gXSA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHRcdHJldHVybiBmcm9tLmhlbHBfbWVzc2FnZXNbIGF0dHJpYnV0ZXMuZ2VuZXJhdG9yX2Z1bmN0aW9uIF1bIG5hbWUgXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMYWJlbCggbWV0YSwgYXR0cnMgKSB7XHJcblx0XHRjb25zdCBsYWJlbCA9IHt9O1xyXG5cdFx0bGFiZWwubmFtZSA9IGF0dHJzLmxhYmVsO1xyXG5cdFx0aWYgKCBhdHRycy5yZXF1aXJlZCApIHtcclxuXHRcdFx0bGFiZWwubWFyayA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX2FyZ3MgKS5yZXF1aXJlZF9tYXJrIHx8ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxhYmVsO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHdpdGhQbGFjZWhvbGRlciggc291cmNlLCBsYWJlbCA9ICctLScsIHZhbHVlID0gJycgKSB7XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHR7IGxhYmVsLCB2YWx1ZSB9LFxyXG5cdFx0XHQuLi5zb3VyY2VcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXNFbXB0eU9iamVjdCggb2JqZWN0ICkge1xyXG5cdFx0cmV0dXJuICdvYmplY3QnID09PSB0eXBlb2Ygb2JqZWN0ICYmIE9iamVjdC5rZXlzKCBvYmplY3QgKS5sZW5ndGggPT09IDA7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0RnVuY0NvbmRpdGlvbiA9ICggbmFtZUZ1bmN0aW9uICkgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBGdW5jdGlvbiggYHJldHVybiB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zWyAnJHsgbmFtZUZ1bmN0aW9uIH0nIF1gICk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkQ29uZGl0aW9uRm9yQ29uZFR5cGUgPSAoIG5hbWUsIGNhbGxhYmxlICkgPT4ge1xyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9ucyA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnMgfHwge307XHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zWyBuYW1lIF0gPSBjYWxsYWJsZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBwYXJzZUNvbmRpdGlvbnNGdW5jID0gKCBzb3VyY2UgKSA9PiB7XHJcblx0XHRjb25zdCB0eXBlcyA9IFtdO1xyXG5cclxuXHRcdHNvdXJjZS5mb3JFYWNoKCB0eXBlID0+IHtcclxuXHRcdFx0aWYgKCB0eXBlLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRpZiAoIFRvb2xzLmdldEZ1bmNDb25kaXRpb24oIHR5cGUuY29uZGl0aW9uICkoKSggdHlwZS52YWx1ZSApICkge1xyXG5cdFx0XHRcdFx0dHlwZXMucHVzaCggdHlwZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0eXBlcy5wdXNoKCB0eXBlICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gdHlwZXM7XHJcblxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50ID0gbmFtZSA9PiB7XHJcblx0Y29uc3QgaW5pdGlhbGl6ZUNhbGxiYWNrc0V2ZW50ID0gbmV3IEV2ZW50KCBuYW1lICk7XHJcblx0cmV0dXJuICgpID0+IGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGluaXRpYWxpemVDYWxsYmFja3NFdmVudCApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlbiA9ICggbmFtZSwgZnVuYyApID0+IHtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBuYW1lLCBmdW5jICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xzO1xyXG5cclxuc2F2ZUdsb2JhbENvbXBvbmVudCggJ0pldEZCVG9vbHMnLCB7IFRvb2xzIH0gKTsiLCJpbXBvcnQgQXJnc01ldGEgZnJvbSAnLi9tZXRhL2FyZ3VtZW50cyc7XHJcbmltcG9ydCBBY3Rpb25zTWV0YSBmcm9tICcuL21ldGEvYWN0aW9ucyc7XHJcbmltcG9ydCBQcmVzZXRNZXRhIGZyb20gJy4vbWV0YS9wcmVzZXQnO1xyXG5pbXBvcnQgTWVzc2FnZXNNZXRhIGZyb20gJy4vbWV0YS9tZXNzYWdlcyc7XHJcbmltcG9ydCBDYXB0Y2hhIGZyb20gXCIuL21ldGEvY2FwdGNoYVwiO1xyXG5pbXBvcnQgR2F0ZXdheXMgZnJvbSBcIi4vbWV0YS9nYXRld2F5c1wiO1xyXG5cclxuaW1wb3J0ICcuL2Jsb2Nrcy9mb3JtLWZpZWxkcyc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvc2VuZC1lbWFpbCc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvaW5zZXJ0LXBvc3QnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3JlZ2lzdGVyLXVzZXInO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3VwZGF0ZS11c2VyJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy91cGRhdGUtb3B0aW9ucyc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvY2FsbC1ob29rJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9jYWxsLXdlYmhvb2snO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3JlZGlyZWN0LXRvLXBhZ2UnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL21haWxjaGltcCc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvZ2V0cmVzcG9uc2UnO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2FjdGl2ZWNhbXBhaWduJztcclxuaW1wb3J0IHsgZXZlbnQgfSBmcm9tIFwiLi9oZWxwZXJzL3Rvb2xzXCI7XHJcblxyXG5cclxuZXZlbnQoICdqZXQtZm9ybS1idWlsZGVyLWluaXRpYWxpemUnICkoKTtcclxuXHJcbndpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMuZm9yRWFjaCggZnVuY3Rpb24gKCBhY3Rpb24sIGluZGV4ICkge1xyXG5cdGlmICggd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9ucyAmJiB3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zWyBhY3Rpb24uaWQgXSApIHtcclxuXHRcdHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGluZGV4IF0uY2FsbGJhY2sgPSB3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zWyBhY3Rpb24uaWQgXTtcclxuXHR9XHJcbn0gKTtcclxuXHJcbkFyZ3NNZXRhKCk7XHJcbkNhcHRjaGEoKTtcclxuR2F0ZXdheXMoKTtcclxuQWN0aW9uc01ldGEoKTtcclxuUHJlc2V0TWV0YSgpO1xyXG5NZXNzYWdlc01ldGEoKTtcclxuXHJcbmV2ZW50KCAnamV0LWZvcm0tYnVpbGRlci1pbml0aWFsaXplZCcgKSgpO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmllbGQtd2l0aC1wcmVzZXRcIjtcclxuaW1wb3J0IER5bmFtaWNQcmVzZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xyXG5pbXBvcnQgUmVwZWF0ZXJXaXRoU3RhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVwZWF0ZXItd2l0aC1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSBcIi4uL2hlbHBlcnMvaG9va3MtaGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21JRCgpIHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDg5OTkgKSArIDEwMDA7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRBY3Rpb25zID0gWyB7XHJcblx0dHlwZTogJ3NlbmRfZW1haWwnLFxyXG5cdGlkOiBnZXRSYW5kb21JRCgpLFxyXG5cdHNldHRpbmdzOiB7XHJcblx0XHRzdWJqZWN0OiAnTmV3IG9yZGVyIG9uIHdlYnNpdGUnLFxyXG5cdFx0Y29udGVudDogJ0hpIGFkbWluIVxcblxcblRoZXJlIGFyZSBuZXcgb3JkZXIgb24geW91ciB3ZWJzaXRlLlxcblxcbk9yZGVyIGRldGFpbHM6XFxuLSBQb3N0IElEOiAlcG9zdF9pZCUnXHJcblx0fVxyXG59IF07XHJcblxyXG5jb25zdCBuZXdJdGVtQ29uZGl0aW9uID0ge1xyXG5cdGV4ZWN1dGU6IGZhbHNlLFxyXG5cdG9wZXJhdG9yOiAnJyxcclxuXHRmaWVsZDogJycsXHJcblx0ZGVmYXVsdDogJycsXHJcbn07XHJcblxyXG5jb25zdCBjb25kaXRpb25PcGVyYXRvcnMgPSBbXHJcblx0eyBsYWJlbDogJy0tJywgdmFsdWU6ICcnIH0sXHJcblx0eyBsYWJlbDogJ0VxdWFsJywgdmFsdWU6ICdlcXVhbCcgfSxcclxuXHR7IGxhYmVsOiAnR3JlYXRlciB0aGFuJywgdmFsdWU6ICdncmVhdGVyJyB9LFxyXG5cdHsgbGFiZWw6ICdMZXNzIHRoYW4nLCB2YWx1ZTogJ2xlc3MnIH0sXHJcblx0eyBsYWJlbDogJ0JldHdlZW4nLCB2YWx1ZTogJ2JldHdlZW4nIH0sXHJcblx0eyBsYWJlbDogJ0luIHRoZSBsaXN0JywgdmFsdWU6ICdvbmVfb2YnIH0sXHJcblx0eyBsYWJlbDogJ0NvbnRhaW4gdGV4dCcsIHZhbHVlOiAnY29udGFpbicgfSxcclxuXTtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cCxcclxuXHRDYXJkLFxyXG5cdENhcmRCb2R5LFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHRNb2RhbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRyZWdpc3RlclBsdWdpblxyXG59ID0gd3AucGx1Z2lucztcclxuXHJcbmNvbnN0IHtcclxuXHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG59ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU3RhdGVcclxufSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZnVuY3Rpb24gQWN0aW9uc01ldGEoKSB7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsQWN0aW9ucyA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoIHRydWUgKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdFx0aWYgKCAwID09PSBhY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdFx0XHRzZXRBY3Rpb25zKCBkZWZhdWx0QWN0aW9ucyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBbXSApO1xyXG5cclxuXHRcdGNvbnN0IG1vdmVBY3Rpb24gPSAoIGZyb21JbmRleCwgdG9JbmRleCApID0+IHtcclxuXHJcblx0XHRcdHZhciBpdGVtID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnNbIGZyb21JbmRleCBdICkgKSxcclxuXHRcdFx0XHRyZXBsYWNlZEl0ZW0gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uc1sgdG9JbmRleCBdICkgKTtcclxuXHJcblx0XHRcdGFjdGlvbnMuc3BsaWNlKCB0b0luZGV4LCAxLCBpdGVtICk7XHJcblx0XHRcdGFjdGlvbnMuc3BsaWNlKCBmcm9tSW5kZXgsIDEsIHJlcGxhY2VkSXRlbSApO1xyXG5cclxuXHRcdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zIF0gKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGRlbGV0ZUFjdGlvbiA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRcdGFjdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMgXSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1cGRhdGVBY3Rpb24gPSAoIGlkLCBrZXksIHZhbHVlICkgPT4ge1xyXG5cdFx0XHRzZXRBY3Rpb25zKCBhY3Rpb25zLm1hcCggKCBhY3Rpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdGlmICggYWN0aW9uLmlkID09PSBpZCApIHtcclxuXHRcdFx0XHRcdHZhciBuZXdBY3Rpb24gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uICkgKTtcclxuXHRcdFx0XHRcdG5ld0FjdGlvblsga2V5IF0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHJldHVybiBuZXdBY3Rpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGFjdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBbIGlzRWRpdCwgc2V0RWRpdCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblx0XHRjb25zdCBbIGVkaXRlZEFjdGlvbiwgc2V0RWRpdGVkQWN0aW9uIF0gPSB1c2VTdGF0ZSgge30gKTtcclxuXHJcblx0XHRjb25zdCBbIGlzRWRpdFByb2Nlc3NBY3Rpb24sIHNldEVkaXRQcm9jZXNzQWN0aW9uIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRcdGNvbnN0IFsgcHJvY2Vzc2VkQWN0aW9uLCBzZXRQcm9jZXNzZWRBY3Rpb24gXSA9IHVzZVN0YXRlKCB7fSApO1xyXG5cclxuXHRcdGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcblx0XHRcdHNldEVkaXQoIGZhbHNlIClcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWN0aW9uVHlwZXMgPSB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLm1hcCggZnVuY3Rpb24gKCBhY3Rpb24gKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dmFsdWU6IGFjdGlvbi5pZCxcclxuXHRcdFx0XHRsYWJlbDogYWN0aW9uLm5hbWUsXHJcblx0XHRcdH07XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dmFyIENhbGxiYWNrID0gZmFsc2U7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgd2luZG93LmpldEZvcm1BY3Rpb25UeXBlcy5sZW5ndGg7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGkgXS5pZCA9PT0gZWRpdGVkQWN0aW9uLnR5cGUgJiYgd2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgaSBdLmNhbGxiYWNrICkge1xyXG5cdFx0XHRcdENhbGxiYWNrID0gd2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgaSBdLmNhbGxiYWNrO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlQWN0aW9uU2V0dGluZ3MgPSBhY3Rpb24gPT4ge1xyXG5cdFx0XHR1cGRhdGVBY3Rpb24oIGFjdGlvbi5pZCwgJ3NldHRpbmdzJywgYWN0aW9uLnNldHRpbmdzICk7XHJcblx0XHRcdGNsb3NlTW9kYWwoKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1cGRhdGVBY3Rpb25Db25kaXRpb24gPSBpdGVtcyA9PiB7XHJcblx0XHRcdHVwZGF0ZUFjdGlvbiggcHJvY2Vzc2VkQWN0aW9uLmlkLCAnY29uZGl0aW9ucycsIGl0ZW1zICk7XHJcblx0XHRcdHNldEVkaXRQcm9jZXNzQWN0aW9uKCBmYWxzZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0XHRpZiAoIGVkaXRlZEFjdGlvbi50eXBlICkge1xyXG5cdFx0XHRcdHNldEVkaXQoIHRydWUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgWyBlZGl0ZWRBY3Rpb24gXSApO1xyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0XHRpZiAoIHByb2Nlc3NlZEFjdGlvbi50eXBlICkge1xyXG5cdFx0XHRcdHNldEVkaXRQcm9jZXNzQWN0aW9uKCB0cnVlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sIFsgcHJvY2Vzc2VkQWN0aW9uIF0gKTtcclxuXHJcblx0XHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHRcdFx0XHRuYW1lPXsgJ2pmLWFjdGlvbnMnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdQb3N0IFN1Ym1pdCBBY3Rpb25zJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGFjdGlvbnMgJiYgYWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8Q2FyZFxyXG5cdFx0XHRcdFx0XHRrZXk9eyBhY3Rpb24uaWQgfVxyXG5cdFx0XHRcdFx0XHRzaXplPXsgJ2V4dHJhU21hbGwnIH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWFjdGlvbicgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZEJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYWN0aW9uLnR5cGUgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGFjdGlvblR5cGVzIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdUeXBlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVBY3Rpb24oIGFjdGlvbi5pZCwgJ3R5cGUnLCBuZXdUeXBlICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGljb249J2VkaXQnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17ICdFZGl0IEFjdGlvbicgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdGVkQWN0aW9uKCAoKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5hY3Rpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYvPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGljb249J3JhbmRvbWl6ZSdcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgJ0NvbmRpdGlvbnMnIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFByb2Nlc3NlZEFjdGlvbiggKCkgPT4gKCB7IC4uLmFjdGlvbiB9ICkgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PERyb3Bkb3duTWVudVxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbj17ICdlbGxpcHNpcycgfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyAnRWRpdCwgbW92ZSBvciBkZWxldGUnIH1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xzPXsgW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdVcCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2Fycm93LXVwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIDAgIT09IGluZGV4ICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlQWN0aW9uKCBpbmRleCwgaW5kZXggLSAxICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdEb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnYXJyb3ctZG93bicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IGluZGV4ID09PSBhY3Rpb25zLmxlbmd0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoICggYWN0aW9ucy5sZW5ndGggLSAxICkgIT09IGluZGV4ICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlQWN0aW9uKCBpbmRleCwgaW5kZXggKyAxICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdEZWxldGUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICd0cmFzaCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQWN0aW9uKCBpbmRleCApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdDwvQ2FyZEJvZHk+XHJcblx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFjdGlvbnMoIFtcclxuXHRcdFx0XHRcdFx0XHQuLi5hY3Rpb25zLFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzZW5kX2VtYWlsJyxcclxuXHRcdFx0XHRcdFx0XHRcdGlkOiBnZXRSYW5kb21JRCgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0dGluZ3M6IHt9LFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyAnKyBOZXcgQWN0aW9uJyB9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0eyBpc0VkaXQgJiYgPEFjdGlvbk1vZGFsXHJcblx0XHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxyXG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBjbG9zZU1vZGFsIH1cclxuXHRcdFx0XHRcdHRpdGxlPXsgJ0VkaXQgQWN0aW9uJyB9XHJcblx0XHRcdFx0XHRvblVwZGF0ZUNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVBY3Rpb25TZXR0aW5ncyggZWRpdGVkQWN0aW9uIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b25DYW5jZWxDbGljaz17IGNsb3NlTW9kYWwgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgQ2FsbGJhY2sgJiYgPENhbGxiYWNrXHJcblx0XHRcdFx0XHRcdHNldHRpbmdzPXsgZWRpdGVkQWN0aW9uLnNldHRpbmdzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGEgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0RWRpdGVkQWN0aW9uKCBwcmV2ID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4ucHJldixcclxuXHRcdFx0XHRcdFx0XHRcdHNldHRpbmdzOiBkYXRhXHJcblx0XHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdDwvQWN0aW9uTW9kYWw+IH1cclxuXHRcdFx0XHR7IGlzRWRpdFByb2Nlc3NBY3Rpb24gJiYgPEFjdGlvbk1vZGFsXHJcblx0XHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxyXG5cdFx0XHRcdFx0dGl0bGU9eyAnRWRpdCBBY3Rpb24gQ29uZGl0aW9ucycgfVxyXG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRFZGl0UHJvY2Vzc0FjdGlvbiggZmFsc2UgKSB9XHJcblx0XHRcdFx0XHRvbkNhbmNlbENsaWNrPXsgKCkgPT4gc2V0RWRpdFByb2Nlc3NBY3Rpb24oIGZhbHNlICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPFJlcGVhdGVyV2l0aFN0YXRlXHJcblx0XHRcdFx0XHRcdFx0aXRlbXM9eyBwcm9jZXNzZWRBY3Rpb24uY29uZGl0aW9ucyB9XHJcblx0XHRcdFx0XHRcdFx0bmV3SXRlbT17IG5ld0l0ZW1Db25kaXRpb24gfVxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRcdFx0b25TYXZlSXRlbXM9eyB1cGRhdGVBY3Rpb25Db25kaXRpb24gfVxyXG5cdFx0XHRcdFx0XHRcdGFkZE5ld0J1dHRvbkxhYmVsPXsgX18oICdBZGQgTmV3IENvbmRpdGlvbicgKSB9XHJcblx0XHRcdFx0XHRcdFx0aGVscD17IHtcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHBWaXNpYmxlOiBjb25kaXRpb25zID0+IGNvbmRpdGlvbnMubGVuZ3RoID4gMSxcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHBTb3VyY2U6IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5oZWxwRm9yUmVwZWF0ZXJzLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVscEtleTogJ2NvbmRpdGlvbmFsX2FjdGlvbidcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHsgKCB7IGN1cnJlbnRJdGVtLCBjaGFuZ2VDdXJyZW50SXRlbSB9ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGV4ZWN1dGVMYWJlbCA9IF9fKCAnVG8gZnVsZmlsbCB0aGlzIGNvbmRpdGlvbiwgdGhlIHJlc3VsdCBvZiB0aGUgY2hlY2sgbXVzdCBiZScsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZXhlY3V0ZUxhYmVsICs9IGN1cnJlbnRJdGVtLmV4ZWN1dGUgPyAnVFJVRScgOiAnRkFMU0UnO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgZXhlY3V0ZUxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgY3VycmVudEl0ZW0uZXhlY3V0ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBleGVjdXRlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJPcGVyYXRvclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ub3BlcmF0b3IgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBjb25kaXRpb25PcGVyYXRvcnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3I6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZpZWxkXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5maWVsZCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZmllbGQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZpZWxkV2l0aFByZXNldFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZGVmYXVsdCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQ9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGRlZmF1bHQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXhjbHVkZVNvdXJjZXM9eyBbICdxdWVyeV92YXInIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmlnZ2VyQ2xhc3Nlcz17IFsgJ3RyaWdnZXJfX3RleHRhcmVhJyBdIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVmFsdWUgdG8gQ29tcGFyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmRlZmF1bHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGRlZmF1bHQ6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRmllbGRXaXRoUHJlc2V0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+O1xyXG5cdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHQ8L1JlcGVhdGVyV2l0aFN0YXRlPjtcclxuXHRcdFx0XHRcdH0gfVxyXG5cclxuXHRcdFx0XHQ8L0FjdGlvbk1vZGFsPiB9XHJcblx0XHRcdDwvUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw+XHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cmVnaXN0ZXJQbHVnaW4oICdqZi1hY3Rpb25zLXBhbmVsJywge1xyXG5cdFx0cmVuZGVyOiBEb2N1bWVudFNldHRpbmdQYW5lbEFjdGlvbnMsXHJcblx0XHRpY29uOiBudWxsLFxyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uc01ldGE7XHJcbiIsImZ1bmN0aW9uIEFyZ3NNZXRhKCkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRUZXh0Q29udHJvbCxcclxuXHRcdFNlbGVjdENvbnRyb2wsXHJcblx0XHRUb2dnbGVDb250cm9sLFxyXG5cdH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlclBsdWdpblxyXG5cdH0gPSB3cC5wbHVnaW5zO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdH0gPSB3cC5lZGl0UG9zdDtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU2VsZWN0LFxyXG5cdFx0dXNlRGlzcGF0Y2hcclxuXHR9ID0gd3AuZGF0YTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU3RhdGUsXHJcblx0XHR1c2VFZmZlY3RcclxuXHR9ID0gd3AuZWxlbWVudDtcclxuXHJcblx0Y29uc3QgRG9jdW1lbnRTZXR0aW5nUGFuZWxBcmdzID0gKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRlZGl0UG9zdFxyXG5cdFx0fSA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XHJcblxyXG5cdFx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YS5famZfYXJncyB8fCAne30nICkgKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHJcblx0XHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0X2pmX2FyZ3M6IEpTT04uc3RyaW5naWZ5KCBhcmdzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHRcdFx0XHRuYW1lPXsgJ2pmLWFyZ3MnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdGb3JtIFNldHRpbmdzJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnRmllbGRzIExheW91dCcgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhcmdzLmZpZWxkc19sYXlvdXQgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IFtcclxuXHRcdFx0XHRcdFx0eyB2YWx1ZTogJycsIGxhYmVsOiAnLS0nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICdjb2x1bW4nLCBsYWJlbDogJ0NvbHVtbicgfSxcclxuXHRcdFx0XHRcdFx0eyB2YWx1ZTogJ3JvdycsIGxhYmVsOiAnUm93JyB9XHJcblx0XHRcdFx0XHRdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkc19sYXlvdXQ6IG5ld1ZhbFxyXG5cdFx0XHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17ICdSZXF1aXJlZCBNYXJrJyB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGFyZ3MucmVxdWlyZWRfbWFyayB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZF9tYXJrOiBuZXdWYWxcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRsYWJlbD17ICdTdWJtaXQgVHlwZScgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhcmdzLnN1Ym1pdF90eXBlIH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBbXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICcnLCBsYWJlbDogJy0tJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHZhbHVlOiAncmVsb2FkJywgbGFiZWw6ICdQYWdlIFJlbG9hZCcgfSxcclxuXHRcdFx0XHRcdFx0eyB2YWx1ZTogJ2FqYXgnLCBsYWJlbDogJ0FKQVgnIH1cclxuXHRcdFx0XHRcdF0gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0c3VibWl0X3R5cGU6IG5ld1ZhbFxyXG5cdFx0XHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZW5hYmxlX3Byb2dyZXNzJyB9XHJcblx0XHRcdFx0XHRsYWJlbD17ICdFbmFibGUgZm9ybSBwYWdlcyBwcm9ncmVzcycgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGFyZ3MuZW5hYmxlX3Byb2dyZXNzIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXJncyggcHJldiA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2LFxyXG5cdFx0XHRcdFx0XHRcdGVuYWJsZV9wcm9ncmVzczogQm9vbGVhbiggbmV3VmFsIClcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L1BsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsPlxyXG5cdFx0KVxyXG5cdH07XHJcblxyXG5cdHJlZ2lzdGVyUGx1Z2luKCAnamYtYXJncy1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxBcmdzLFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyZ3NNZXRhO1xyXG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0VGV4dENvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHJlZ2lzdGVyUGx1Z2luXHJcbn0gPSB3cC5wbHVnaW5zO1xyXG5cclxuY29uc3Qge1xyXG5cdFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcbn0gPSB3cC5lZGl0UG9zdDtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcblx0dXNlRGlzcGF0Y2hcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gQ2FwdGNoYSgpIHtcclxuXHJcblx0Y29uc3QgRG9jdW1lbnRTZXR0aW5nUGFuZWxDYXB0Y2hhID0gKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG1ldGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZWRpdFBvc3RcclxuXHRcdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRcdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGEuX2pmX3JlY2FwdGNoYSB8fCAne30nICkgKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHJcblx0XHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0X2pmX3JlY2FwdGNoYTogSlNPTi5zdHJpbmdpZnkoIGFyZ3MgKVxyXG5cdFx0XHRcdH0gKVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5yZWNhcHRjaGFMYWJlbHM7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1jYXB0Y2hhJyB9XHJcblx0XHRcdFx0dGl0bGU9eyAnQ2FwdGNoYSBTZXR0aW5ncycgfVxyXG5cdFx0XHRcdGtleT17ICdqZi1jYXB0Y2hhLXBhbmVsJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2VuYWJsZWQnIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5lbmFibGVkIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhcmdzLmVuYWJsZWQgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0ZW5hYmxlZDogQm9vbGVhbiggbmV3VmFsIClcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgYXJncy5lbmFibGVkICYmIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyAnc2l0ZV9rZXknIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmtleSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXJncy5rZXkgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRrZXk6IG5ld1ZhbHVlXHJcblx0XHRcdFx0XHRcdH0gKSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ3NlY3JldF9rZXknIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBkYXRhLnNlY3JldCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXJncy5zZWNyZXQgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRzZWNyZXQ6IG5ld1ZhbHVlXHJcblx0XHRcdFx0XHRcdH0gKSApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8c3Bhbj57ICdSZWdpc3RlciByZUNBUFRDSEEgdjMga2V5cyAnIH1cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FkbWluL2NyZWF0ZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0XHQ8L1BsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsPlxyXG5cdFx0KVxyXG5cdH07XHJcblxyXG5cdHJlZ2lzdGVyUGx1Z2luKCAnamYtY2FwdGNoYS1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxDYXB0Y2hhLFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcHRjaGE7XHJcbiIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgQWN0aW9uTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbW9kYWxcIjtcclxuaW1wb3J0IEdhdGV3YXlzRWRpdG9yIGZyb20gXCIuLi9nYXRld2F5cy9nYXRld2F5cy1lZGl0b3JcIjtcclxuXHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFRleHRDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdFJhZGlvQ29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0TW9kYWwsXHJcblx0VGV4dCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0cmVnaXN0ZXJQbHVnaW5cclxufSA9IHdwLnBsdWdpbnM7XHJcblxyXG5jb25zdCB7XHJcblx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxufSA9IHdwLmVkaXRQb3N0O1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVNlbGVjdCxcclxuXHR1c2VEaXNwYXRjaFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBHYXRld2F5cygpIHtcclxuXHJcblx0aWYgKCAhIHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5nYXRld2F5cy5hbGxvd2VkICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2F0ZXdheXNEYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuXHRjb25zdCBEb2N1bWVudFNldHRpbmdQYW5lbEdhdGV3YXlzID0gKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRlZGl0UG9zdFxyXG5cdFx0fSA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XHJcblxyXG5cdFx0Y29uc3QgZ2F0ZXdheXNQcm9wcyA9IHtcclxuXHRcdFx0YWN0aXZlQWN0aW9uczogSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyApLFxyXG5cdFx0XHRnYXRld2F5c0FyZ3M6IEpTT04ucGFyc2UoIG1ldGEuX2pmX2dhdGV3YXlzIHx8ICd7fScgKSxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgWyBnYXRld2F5LCBzZXRHYXRld2F5IF0gPSB1c2VTdGF0ZSggZ2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MuZ2F0ZXdheSApO1xyXG5cclxuXHRcdGNvbnN0IFsgaXNFZGl0LCBzZXRFZGl0IF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0XHRjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG5cdFx0XHRzZXRFZGl0KCBmYWxzZSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBnZXRHYXRld2F5TGFiZWwgPSAoIHR5cGUgKSA9PiB7XHJcblx0XHRcdHJldHVybiAoIGdhdGV3YXlzRGF0YS5saXN0LmZpbmQoIGVsID0+IGVsLnZhbHVlID09PSB0eXBlICkubGFiZWwgKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2F2ZUFyZ3MgPSBuZXdBcmdzID0+IHtcclxuXHRcdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRfamZfZ2F0ZXdheXM6IEpTT04uc3RyaW5naWZ5KCBuZXdBcmdzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzYXZlR2F0ZXdheSA9IHR5cGUgPT4ge1xyXG5cdFx0XHRnYXRld2F5c1Byb3BzLmdhdGV3YXlzQXJncy5nYXRld2F5ID0gdHlwZTtcclxuXHJcblx0XHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0X2pmX2dhdGV3YXlzOiBKU09OLnN0cmluZ2lmeSggZ2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MgKVxyXG5cdFx0XHRcdH0gKVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaXNzZXRBY3Rpb25UeXBlID0gdHlwZSA9PiB7XHJcblx0XHRcdHJldHVybiBCb29sZWFuKCBnYXRld2F5c1Byb3BzLmFjdGl2ZUFjdGlvbnMuZmluZCggYWN0aW9uID0+IHR5cGUgPT09IGFjdGlvbi50eXBlICkgKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgaXNEaXNhYmxlZCA9ICEgaXNzZXRBY3Rpb25UeXBlKCAnaW5zZXJ0X3Bvc3QnICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRcdHNhdmVHYXRld2F5KCBnYXRld2F5ICk7XHJcblx0XHR9LCBbIGdhdGV3YXkgXSApO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdFx0XHRcdG5hbWU9eyAnamYtZ2F0ZXdheXMnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdHYXRld2F5cyBTZXR0aW5ncycgfVxyXG5cdFx0XHRcdGtleT17ICdqZi1nYXRld2F5cy1wYW5lbCcgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFJhZGlvQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2dhdGV3YXlzX3JhZGlvX2NvbnRyb2wnIH1cclxuXHRcdFx0XHRcdHNlbGVjdGVkPXsgZ2F0ZXdheSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgW1xyXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcclxuXHRcdFx0XHRcdFx0Li4uZ2F0ZXdheXNEYXRhLmxpc3RcclxuXHRcdFx0XHRcdF0gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRHYXRld2F5IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgKCBnYXRld2F5ICYmICdub25lJyAhPT0gZ2F0ZXdheSApICYmIDw+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRFZGl0KCB0cnVlICkgfVxyXG5cdFx0XHRcdFx0XHRpY29uPXsgJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogJzFlbSAwJ1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0Rpc2FibGVkIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ0VkaXQnICkgfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHR7IGlzRGlzYWJsZWQgJiYgPHA+eyBfXyggJ1BsZWFzZSBhZGQgXFxgSW5zZXJ0L1VwZGF0ZSBQb3N0XFxgIGFjdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3A+IH1cclxuXHRcdFx0XHQ8Lz4gfVxyXG5cdFx0XHRcdHsgaXNFZGl0ICYmIChcclxuXHRcdFx0XHRcdDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxyXG5cdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG5cdFx0XHRcdFx0XHR0aXRsZT17IGBFZGl0ICR7IGdldEdhdGV3YXlMYWJlbCggZ2F0ZXdheSApIH0gU2V0dGluZ3NgIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8PlxyXG5cdFx0XHRcdFx0XHRcdDxHYXRld2F5c0VkaXRvclxyXG5cdFx0XHRcdFx0XHRcdFx0eyAuLi5nYXRld2F5c1Byb3BzIH1cclxuXHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgc2F2ZUFyZ3MgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvPiB9XHJcblx0XHRcdFx0XHQ8L0FjdGlvbk1vZGFsPiApIH1cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLWdhdGV3YXlzLXBhbmVsJywge1xyXG5cdFx0cmVuZGVyOiBEb2N1bWVudFNldHRpbmdQYW5lbEdhdGV3YXlzLFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhdGV3YXlzO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VzKCkge1xyXG5cdGNvbnN0IHtcclxuXHRcdFRvZ2dsZUNvbnRyb2wsXHJcblx0XHRUZXh0Q29udHJvbFxyXG5cdH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHRjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlclBsdWdpblxyXG5cdH0gPSB3cC5wbHVnaW5zO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdH0gPSB3cC5lZGl0UG9zdDtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU2VsZWN0LFxyXG5cdFx0dXNlRGlzcGF0Y2hcclxuXHR9ID0gd3AuZGF0YTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU3RhdGUsXHJcblx0XHR1c2VFZmZlY3RcclxuXHR9ID0gd3AuZWxlbWVudDtcclxuXHJcblx0Y29uc3QgRG9jdW1lbnRTZXR0aW5nUGFuZWxNZXNzYWdlcyA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGVkaXRQb3N0XHJcblx0XHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0XHRjb25zdCBnZXREZWZhdWx0TWVzc2FnZXNWYWx1ZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGRlZmF1bHRzID0ge307XHJcblx0XHRcdE9iamVjdC5lbnRyaWVzKCBKZXRGb3JtRWRpdG9yRGF0YS5tZXNzYWdlc0RlZmF1bHQgKS5mb3JFYWNoKCAoIFsgdHlwZSwgZGF0YSBdICkgPT4ge1xyXG5cdFx0XHRcdGRlZmF1bHRzWyB0eXBlIF0gPSBkYXRhLnZhbHVlO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdHM7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgWyBtZXNzYWdlcywgc2V0TWVzc2FnZXMgXSA9IHVzZVN0YXRlKCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IG1ldGFNZXNzYWdlcyA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX21lc3NhZ2VzIHx8ICd7fScgKTtcclxuXHRcdFx0cmV0dXJuIFRvb2xzLmlzRW1wdHlPYmplY3QoIG1ldGFNZXNzYWdlcyApID8gZ2V0RGVmYXVsdE1lc3NhZ2VzVmFsdWVzKCkgOiBtZXRhTWVzc2FnZXM7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0X2pmX21lc3NhZ2VzOiBKU09OLnN0cmluZ2lmeSggbWVzc2FnZXMgKVxyXG5cdFx0XHRcdH0gKVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9ICggdHlwZSwgdmFsdWUgKSA9PiB7XHJcblx0XHRcdHNldE1lc3NhZ2VzKCBwcmV2ID0+ICggeyAuLi5wcmV2LCBbIHR5cGUgXTogdmFsdWUgfSApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1tZXNzYWdlcycgfVxyXG5cdFx0XHRcdHRpdGxlPXsgJ0dlbmVyYWwgTWVzc2FnZXMgU2V0dGluZ3MnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgT2JqZWN0LmVudHJpZXMoIG1lc3NhZ2VzICkubWFwKCAoIFsgdHlwZSwgdGV4dCBdLCBpZCApID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBKZXRGb3JtRWRpdG9yRGF0YS5tZXNzYWdlc0RlZmF1bHRbIHR5cGUgXSAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgdHlwZSArIGlkIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBKZXRGb3JtRWRpdG9yRGF0YS5tZXNzYWdlc0RlZmF1bHRbIHR5cGUgXS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgdGV4dCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VNZXNzYWdlKCB0eXBlLCBuZXdWYWx1ZSApIH1cclxuXHRcdFx0XHRcdC8+O1xyXG5cdFx0XHRcdH0gKSB9XHJcblxyXG5cdFx0XHQ8L1BsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsPlxyXG5cdFx0KVxyXG5cdH07XHJcblxyXG5cdHJlZ2lzdGVyUGx1Z2luKCAnamYtbWVzc2FnZXMtcGFuZWwnLCB7XHJcblx0XHRyZW5kZXI6IERvY3VtZW50U2V0dGluZ1BhbmVsTWVzc2FnZXMsXHJcblx0XHRpY29uOiBudWxsLFxyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7IiwiaW1wb3J0IFRvb2xzIGZyb20gJy4uL2hlbHBlcnMvdG9vbHMnO1xyXG5pbXBvcnQgR2VuZXJhbFByZXNldCBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmVzZXRzL2dlbmVyYWwtcHJlc2V0XCI7XHJcbmltcG9ydCB7IGdldEF2YWlsYWJsZUZpZWxkcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFByZXNldE1ldGEoKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFRvZ2dsZUNvbnRyb2wsXHJcblx0fSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHJlZ2lzdGVyUGx1Z2luXHJcblx0fSA9IHdwLnBsdWdpbnM7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0fSA9IHdwLmVkaXRQb3N0O1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHR1c2VTZWxlY3QsXHJcblx0XHR1c2VEaXNwYXRjaFxyXG5cdH0gPSB3cC5kYXRhO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHR1c2VTdGF0ZSxcclxuXHRcdHVzZUVmZmVjdFxyXG5cdH0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHRjb25zdCBEb2N1bWVudFNldHRpbmdQYW5lbFByZXNldCA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGVkaXRQb3N0XHJcblx0XHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0XHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9wcmVzZXQgfHwgJ3t9JyApICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9wcmVzZXQ6IEpTT04uc3RyaW5naWZ5KCBhcmdzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25zdCBmb3JtRmllbGRzID0gZ2V0QXZhaWxhYmxlRmllbGRzKCk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1wcmVzZXQnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdQcmVzZXQgU2V0dGluZ3MnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZW5hYmxlX3ByZXNldCcgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnRW5hYmxlJyB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXJncy5lbmFibGVkIH1cclxuXHRcdFx0XHRcdGhlbHA9eyAnQ2hlY2sgdGhpcyB0byBlbmFibGUgZ2xvYmFsIGZvcm0gcHJlc2V0JyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBuZXdWYWxcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgYXJncy5lbmFibGVkICYmIDxHZW5lcmFsUHJlc2V0XHJcblx0XHRcdFx0XHR2YWx1ZT17IGFyZ3MgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0Li4ubmV3VmFsLFxyXG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IHByZXZBcmdzLmVuYWJsZWRcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdGF2YWlsYWJsZUZpZWxkcz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLXByZXNldC1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxQcmVzZXQsXHJcblx0XHRpY29uOiBudWxsLFxyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlc2V0TWV0YTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUlBO0FBS0E7QUFFQTtBQUNBO0FBVUE7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQWNBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUdBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFUQTtBQWNBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBT0E7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQU1BO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaUJBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBbEVBO0FBZEE7QUE4RkE7Ozs7Ozs7Ozs7OztBQzdNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFuQkE7QUEwQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBYkE7QUFvQkE7QUFDQTtBQUNBO0FBSEE7QUF0Q0E7QUFwQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFhQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFWQTtBQWFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7Ozs7QUFsR0E7QUFDQTtBQW9HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBU0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQTVDQTtBQXNEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7OztBQUdBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7O0FBTUE7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBYkE7QUFnQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBRUE7QUFDQTs7OztBQXBKQTtBQUNBO0FBcUpBOzs7Ozs7Ozs7Ozs7QUM5S0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBVUE7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBOzs7Ozs7Ozs7Ozs7QUNuR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBUUE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBSkE7QUFTQTs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUtBO0FBQ0E7QUFVQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFFQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQXNCQTs7QUF0QkE7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBTUE7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFPQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFLQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUdBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFVQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUVBO0FBREE7QUFNQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBWEE7QUFnQkE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFRQTs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBT0E7QUFDQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBOzs7Ozs7Ozs7Ozs7QUMxR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBT0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFPQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFZQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQU1BOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFLQTtBQUtBO0FBS0E7QUFDQTtBQU1BO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFZQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBY0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBY0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVNBOzs7Ozs7Ozs7Ozs7QUM1TkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBTUE7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFLQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBREE7QUFJQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUhBO0FBUUE7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVNBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBS0E7QUFPQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBYUE7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFTQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN6S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVdBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFLQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBREE7QUFNQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQVNBOzs7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUpBO0FBY0E7Ozs7QUE5RUE7QUFDQTtBQWdGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUtBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWhDQTtBQUNBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQURBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQUNBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQWNBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVlBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBV0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7OztBQUdBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQXZCQTtBQUNBO0FBcUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVRBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBVkE7QUFwQkE7QUFtQ0E7QUFFQTtBQUVBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUF2QkE7QUFDQTtBQW1DQTtBQUNBO0FBaExBO0FBbUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFnQkE7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBdEJBO0FBdUJBO0FBQUE7QUF2QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFXQTtBQURBO0FBSUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFqRUE7QUFDQTtBQTlIQTtBQUFBO0FBQUE7QUE4TUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UkE7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBU0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbkRBO0FBQUE7QUFBQTtBQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBNURBO0FBQUE7QUFBQTtBQStEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQTVFQTtBQUFBO0FBQUE7QUErRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBREE7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFKQTtBQW9CQTtBQUNBO0FBM0tBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBSUE7Ozs7QUFyRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFFQTs7OztBQVFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBREE7QUFHQTtBQUFBO0FBdUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQW5CQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVVBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFvQkE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBbUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFLQTtBQUNBO0FBMUhBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVlBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVdBO0FBRUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQS9GQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFUQTtBQVlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBdEJBO0FBMEJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFyRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFTQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBaENBO0FBQUE7QUFBQTtBQWtDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUEvQ0E7QUFBQTtBQUFBO0FBa0RBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBSEE7QUFjQTtBQUNBO0FBbkpBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVNBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFTQTtBQUVBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBQUE7QUFBQTtBQThCQTtBQUlBO0FBbENBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBeEZBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBS0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVdBO0FBQ0E7QUE1RkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFRQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBdkJBO0FBQUE7QUFBQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQWxDQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQVlBO0FBQ0E7QUFyRkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQU5BO0FBU0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBc0JBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQWFBO0FBQ0E7QUE3RUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQWFBO0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBTkE7QUFXQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBV0E7QUFJQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBV0E7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFYQTtBQWNBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTs7Ozs7Ozs7Ozs7O0FDaFNBO0FBQUE7QUFBQTtBQUdBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUtBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBS0E7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBOUJBO0FBaUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQTBDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBY0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFNQTtBQUZBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXhCQTtBQW9DQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFYQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBU0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQWJBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFLQTtBQUZBO0FBQ0E7QUFJQTtBQUlBO0FBTUE7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBR0E7QUFhQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQU1BO0FBRkE7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBUEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF5QkE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF1QkE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU9BO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9