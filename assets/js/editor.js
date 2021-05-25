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
/* harmony import */ var _help_messages_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-messages-config */ "./editor/blocks/help-messages-config.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var applyFilters = wp.hooks.applyFilters;
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
  _help_messages_config__WEBPACK_IMPORTED_MODULE_0__["messagesConfig"].forEach(function (msg) {
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

var editProps = applyFilters('jet.fb.register.editProps', [{
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var _JetFBActions = JetFBActions,
    getFieldsWithoutCurrent = _JetFBActions.getFieldsWithoutCurrent;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    ToolbarGroup = _wp$components.ToolbarGroup,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = __experimentalNumberControl;
var useState = wp.element.useState;
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
    setFormFields(getFieldsWithoutCurrent());
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
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement("div", {
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
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      label: 'Calculated Field',
      desc: 'Field description...'
    }
  }
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
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    FieldControl = _JetFBComponents.FieldControl;
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
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__["default"], props, wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__["SelectRadioCheckPlaceholder"], _extends({
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
      desc: 'Field description...',
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

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/conditional-block\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"block\",\"conditonal\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect x=\\\"1\\\" y=\\\"12\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" fill=\\\"#ffffff\\\" stroke=\\\"#0F172A\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><rect x=\\\"1\\\" y=\\\"34\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#0F172A\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><rect x=\\\"45\\\" y=\\\"12\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#0F172A\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><rect x=\\\"45\\\" y=\\\"34\\\" width=\\\"18\\\" height=\\\"18\\\" rx=\\\"2\\\" fill=\\\"#ffffff\\\" stroke=\\\"#0F172A\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M40 17L44 21L40 25V22H36.7004L28.9398 43.3417C28.7961 43.7369 28.4205 44 28 44H19V42H27.2996L35.0602 20.6583C35.2039 20.2631 35.5795 20 36 20H40V17Z\\\" fill=\\\"#0F172A\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M30.9359 26.1477L28.9398 20.6583C28.7961 20.2631 28.4205 20 28 20H19V22H27.2996L29.8719 29.0739L30.9359 26.1477ZM33.0641 37.8524L35.0602 43.3417C35.2039 43.7369 35.5795 44 36 44H40V47L44 43L40 39V42H36.7004L34.1281 34.9262L33.0641 37.8524Z\\\" fill=\\\"#0F172A\\\"/></svg>\",\"attributes\":{\"conditions\":{\"type\":\"array\",\"default\":[]}}}");

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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/conditional-block/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBComponents = JetFBComponents,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    ActionModal = _JetFBComponents.ActionModal,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset;
var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    getInnerBlocks = _JetFBActions.getInnerBlocks,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InnerBlocks = _ref.InnerBlocks,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    Button = _wp$components.Button,
    ToolbarGroup = _wp$components.ToolbarGroup,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl;
var useState = wp.element.useState;
function ConditionalBlockEdit(props) {
  var blockProps = useBlockProps();
  var setAttributes = props.setAttributes,
      attributes = props.attributes,
      clientId = props.clientId,
      uniqKey = props.editProps.uniqKey;
  Tools.addConditionForCondType('isSingleField', function () {
    return 1 === getInnerBlocks(clientId).length;
  });
  var getConditionTypes = Tools.parseConditionsFunc(_options__WEBPACK_IMPORTED_MODULE_0__["options"].conditionTypes);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var formFields = getFormFieldsBlocks([], '--');
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
  })), showModal && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: function onRequestClose() {
      return setShowModal(false);
    },
    title: "Conditional Logic"
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
      key: uniqKey('RepeaterWithState'),
      items: attributes.conditions,
      isSaveAction: actionClick,
      onUnMount: onRequestClose,
      newItem: _options__WEBPACK_IMPORTED_MODULE_0__["options"].condition,
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
        options: _options__WEBPACK_IMPORTED_MODULE_0__["options"].conditionOperators,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            operator: newValue
          });
        }
      }), wp.element.createElement(FieldWithPreset, {
        key: uniqKey('FieldWithPreset-value_to_compare'),
        ModalEditor: function ModalEditor(_ref4) {
          var actionClick = _ref4.actionClick,
              onRequestClose = _ref4.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
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
      })), 'set_value' === currentItem.type && wp.element.createElement(FieldWithPreset, {
        key: uniqKey('FieldWithPreset-value_to_set'),
        ModalEditor: function ModalEditor(_ref5) {
          var actionClick = _ref5.actionClick,
              onRequestClose = _ref5.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
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
  useEditProps: ['uniqKey'],
  example: {
    innerBlocks: [{
      name: 'jet-forms/text-field',
      attributes: {
        label: 'Title'
      }
    }, {
      name: 'jet-forms/radio-field',
      attributes: {
        label: 'Item Radio',
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
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/conditional-block/options.js":
/*!****************************************************!*\
  !*** ./editor/blocks/conditional-block/options.js ***!
  \****************************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var options = {
  condition: {
    type: 'hide',
    field: '',
    operator: '',
    value: '',
    set_value: ''
  },
  conditionTypes: [{
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
  }],
  conditionOperators: [{
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
  }]
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
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
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(ToggleControl, {
    key: "is_timestamp",
    label: __('Is Timestamp'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  title: __('Date Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Date Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/datetime-field/block.json":
/*!*************************************************!*\
  !*** ./editor/blocks/datetime-field/block.json ***!
  \*************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/datetime-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"date\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M14 34C12.8954 34 12 34.8954 12 36V41H29V36C29 34.8954 28.1046 34 27 34H14ZM50.391 38.9385C50.7931 39.9091 51 40.9494 51 42H43V34C44.0506 34 45.0909 34.2069 46.0615 34.609C47.0321 35.011 47.914 35.6003 48.6569 36.3431C49.3997 37.086 49.989 37.9679 50.391 38.9385Z\\\" fill=\\\"#4AF3BA\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 14H4C2.89453 14 2 14.8955 2 16V41C2 42.1045 2.89453 43 4 43H12V41V36C12 34.8955 12.8945 34 14 34H16V33C16 32.4478 16.4473 32 17 32C17.5527 32 18 32.4478 18 33V34H23V33C23 32.4478 23.4473 32 24 32C24.1172 32 24.2305 32.02 24.334 32.0566C24.4453 32.0959 24.5469 32.1543 24.6348 32.2278C24.8574 32.4111 25 32.689 25 33V34H27C28.1055 34 29 34.8955 29 36V41V43H32H33.0494C33.0167 42.6711 33 42.3375 33 42C33 36.4771 37.4766 32 43 32C48.5234 32 53 36.4771 53 42C53 42.3375 52.9833 42.6711 52.9506 43H52.9512H54H60C61.1055 43 62 42.1045 62 41V16C62 14.8955 61.1055 14 60 14ZM54 45H52.543H52.5423C51.2681 49.0572 47.4781 52 43 52C38.5219 52 34.7312 49.0572 33.457 45H32H29V50C29 51.1045 28.1055 52 27 52H14C12.8945 52 12 51.1045 12 50V45H4C1.79102 45 0 43.2092 0 41V16C0 13.7908 1.79102 12 4 12H60C62.209 12 64 13.7908 64 16V41C64 43.2092 62.209 45 60 45H54ZM50.9375 43C50.4453 46.9463 47.0801 50 43 50C38.582 50 35 46.4182 35 42C35 37.9204 38.0527 34.554 42 34.062V41V42V43H50.9375ZM50.9375 41H44V34.062C47.6191 34.5132 50.4863 37.3813 50.9375 41ZM24 37C23.4473 37 23 36.5522 23 36H18C18 36.5522 17.5527 37 17 37C16.4473 37 16 36.5522 16 36H14V39H27V36H25C25 36.2761 24.8867 36.5261 24.7051 36.7073C24.5254 36.8882 24.2754 37 24 37ZM14 41H27V50H14V41Z\\\" fill=\\\"#0F172A\\\"/></svg>\",\"attributes\":{\"is_timestamp\":{\"type\":\"boolean\",\"default\":false},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
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
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(ToggleControl, {
    key: uniqKey('is_timestamp'),
    label: __('Is Timestamp'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Datetime Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/form-break-field/block.json":
/*!***************************************************!*\
  !*** ./editor/blocks/form-break-field/block.json ***!
  \***************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/form-break-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"block\",\"break\",\"pagebreak\",\"formbreak\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"29\\\" y=\\\"1\\\" width=\\\"34\\\" height=\\\"34\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"22\\\" width=\\\"41\\\" height=\\\"41\\\" rx=\\\"3\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M23.3721 49H20.832V39.209L17.7998 40.1494V38.084L23.0996 36.1855H23.3721V49Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M50.9795 23H44.1572V21.6465L47.377 18.2148C47.819 17.7318 48.1449 17.3102 48.3545 16.9502C48.5687 16.5902 48.6758 16.2484 48.6758 15.9248C48.6758 15.4827 48.5641 15.1364 48.3408 14.8857C48.1175 14.6305 47.7985 14.5029 47.3838 14.5029C46.9372 14.5029 46.584 14.6579 46.3242 14.9678C46.069 15.2731 45.9414 15.6764 45.9414 16.1777H43.959C43.959 15.5716 44.1025 15.0179 44.3896 14.5166C44.6813 14.0153 45.0915 13.6234 45.6201 13.3408C46.1488 13.0537 46.748 12.9102 47.418 12.9102C48.4434 12.9102 49.2386 13.1562 49.8037 13.6484C50.3734 14.1406 50.6582 14.8356 50.6582 15.7334C50.6582 16.2256 50.5306 16.7269 50.2754 17.2373C50.0202 17.7477 49.5827 18.3424 48.9629 19.0215L46.7002 21.4072H50.9795V23Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"page_break_disabled\":{\"type\":\"string\",\"default\":\"\"},\"label_progress\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
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
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(TextControl, {
    label: __('Label of progress'),
    value: attributes.label_progress,
    help: attrHelp('label_progress'),
    onChange: function onChange(newValue) {
      props.setAttributes({
        label_progress: newValue
      });
    }
  }), wp.element.createElement(TextareaControl, {
    key: "page_break_disabled",
    value: attributes.page_break_disabled,
    label: __('Disabled message'),
    help: attrHelp('page_break_disabled'),
    onChange: function onChange(newValue) {
      setAttributes({
        page_break_disabled: newValue
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Next Page'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/form-fields.js":
/*!**************************************!*\
  !*** ./editor/blocks/form-fields.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterFormFields; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var registerBlockType = wp.blocks.registerBlockType;
var applyFilters = wp.hooks.applyFilters;
var fields = applyFilters('jet.fb.register.fields', [_calculated_field__WEBPACK_IMPORTED_MODULE_0__, _checkbox_field__WEBPACK_IMPORTED_MODULE_1__, _conditional_block__WEBPACK_IMPORTED_MODULE_2__, _datetime_field__WEBPACK_IMPORTED_MODULE_4__, _date_field__WEBPACK_IMPORTED_MODULE_3__, _form_break_field__WEBPACK_IMPORTED_MODULE_5__, _group_break_field__WEBPACK_IMPORTED_MODULE_6__, _heading_field__WEBPACK_IMPORTED_MODULE_7__, _hidden_field__WEBPACK_IMPORTED_MODULE_8__, _media_field__WEBPACK_IMPORTED_MODULE_9__, _number_field__WEBPACK_IMPORTED_MODULE_10__, _radio_field__WEBPACK_IMPORTED_MODULE_11__, _range_field__WEBPACK_IMPORTED_MODULE_12__, _repeater_field__WEBPACK_IMPORTED_MODULE_13__, _select_field__WEBPACK_IMPORTED_MODULE_14__, _submit_field__WEBPACK_IMPORTED_MODULE_15__, _text_field__WEBPACK_IMPORTED_MODULE_16__, _textarea_field__WEBPACK_IMPORTED_MODULE_17__, _time_field__WEBPACK_IMPORTED_MODULE_18__, _wysiwyg_field__WEBPACK_IMPORTED_MODULE_19__]);

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

function sortBlocks(_ref, _ref2) {
  var a = _ref.settings.title;
  var b = _ref2.settings.title;

  try {
    return a.localeCompare(b);
  } catch (e) {
    return 0;
  }
}

function RegisterFormFields() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fields;
  blocks.sort(sortBlocks);
  blocks.forEach(applyFilters('jet.fb.register.fields.handler', registerFormField));
}

/***/ }),

/***/ "./editor/blocks/group-break-field/block.json":
/*!****************************************************!*\
  !*** ./editor/blocks/group-break-field/block.json ***!
  \****************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/group-break-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"block\",\"conditonal\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"1\\\" width=\\\"62\\\" height=\\\"24\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"39\\\" width=\\\"62\\\" height=\\\"24\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"30\\\" width=\\\"62\\\" height=\\\"4\\\" rx=\\\"2\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields;
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
  }, wp.element.createElement(AdvancedFields, _extends({
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
  useEditProps: ['uniqKey'],
  example: {}
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function HeadingEdit(props) {
  var blockProps = useBlockProps();
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey'],
  example: {
    attributes: {
      label: 'Heading Field',
      desc: 'Field description...'
    }
  }
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
  message: "https://github.com/RobinHerbots/Inputmask/blob/5.x/README_date.md"
}, {
  attribute: 'default',
  to: [TIME],
  message: __('Plain time should be in hh:mm:ss format')
}, {
  attribute: 'label_progress',
  to: [FORM_BREAK],
  message: __("To set/change a last progress name add a Form Break Field at the very end of the form.")
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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./editor/blocks/hidden-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __ = wp.i18n.__;
var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
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
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(SelectControl, {
    key: "field_value",
    label: "Field Value",
    labelPosition: "top",
    value: attributes.field_value,
    onChange: function onChange(newValue) {
      setAttributes({
        field_value: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_1__["hiddenValues"]
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
  })), wp.element.createElement(AdvancedFields, _extends({
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
  useEditProps: ['uniqKey'],
  example: {
    attributes: {
      field_value: 'post_id'
    }
  }
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
var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;
var hiddenValues = Tools.withPlaceholder([{
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

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/media-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"media\",\"image\",\"file\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><rect x=\\\"22.9474\\\" y=\\\"27.9474\\\" width=\\\"34.1053\\\" height=\\\"27.1822\\\" rx=\\\"1.82186\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.89474\\\"/><path d=\\\"M34.4615 46.3847L36.9393 43.8672L39.417 46.3847L42.8239 42.9231L46.2308 46.3847\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.38462\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><circle cx=\\\"39.6538\\\" cy=\\\"38.4231\\\" r=\\\"1.73077\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.38462\\\"/></svg>\",\"attributes\":{\"allowed_user_cap\":{\"type\":\"string\",\"default\":\"\"},\"insert_attachment\":{\"type\":\"boolean\",\"default\":false},\"value_format\":{\"type\":\"string\",\"default\":\"\"},\"max_files\":{\"type\":\"number\",\"default\":null},\"max_size\":{\"type\":\"number\",\"default\":null},\"allowed_mimes\":{\"type\":\"array\",\"default\":[]},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/media-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
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
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(SelectControl, {
    key: "allowed_user_cap",
    label: __('User access'),
    labelPosition: "top",
    value: attributes.allowed_user_cap,
    onChange: function onChange(newValue) {
      setAttributes({
        allowed_user_cap: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__["userAccess"]
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
    options: _options__WEBPACK_IMPORTED_MODULE_0__["valueFormats"]
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
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Thumbnail & file',
      desc: 'Field description...'
    }
  }
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
var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var userAccess = Tools.withPlaceholder([{
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
var valueFormats = Tools.withPlaceholder([{
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
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
    props.setAttributes(_defineProperty({}, key, newValue ? parseFloat(newValue) : null));
  };

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(NumberControl, {
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
    step: 0.01,
    value: attributes.step,
    onChange: function onChange(newValue) {
      return changeNumberValue('step', newValue);
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey'],
  example: {
    attributes: {
      label: 'Number Field',
      desc: 'Field description...',
      placeholder: 'Input your number...'
    }
  }
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldControl = _JetFBComponents.FieldControl;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function RadioEdit(props) {
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__["default"], props, wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__["SelectRadioCheckPlaceholder"], _extends({
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
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Radio Field',
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var useState = wp.element.useState;
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
  return [props.isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
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
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Range Field',
      prefix: 'price: ',
      suffix: '$'
    }
  }
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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/repeater-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields;
var _JetFBActions = JetFBActions,
    getFieldsWithoutCurrent = _JetFBActions.getFieldsWithoutCurrent,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
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
  var formFields = getFieldsWithoutCurrent();
  var meta = select('core/editor').getEditedPostAttribute('meta') || {};
  var label = Tools.getLabel(meta, attributes);

  var insertMacros = function insertMacros(macros) {
    var formula = attributes.calc_formula || '';
    props.setAttributes({
      calc_formula: formula + '%FIELD::' + macros + '%'
    });
  };

  return [wp.element.createElement(ToolBarFields, _extends({
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
  }, wp.element.createElement(GeneralFields, _extends({
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
    options: _options__WEBPACK_IMPORTED_MODULE_0__["manageItemsCount"]
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
    options: _options__WEBPACK_IMPORTED_MODULE_0__["calcType"]
  }), 'custom' === attributes.repeater_calc_type && wp.element.createElement("div", {
    className: "jet-form-editor__row-notice"
  }, __('Set math formula to calculate field value.', 'jet-form-builder'), wp.element.createElement("br", null), __('For example:', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null), "%FIELD::quantity%*%META::price%", wp.element.createElement("br", null), wp.element.createElement("br", null), __('Where:', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%FIELD::quantity% - macros for form field value. "quantity" - is a field name to get value from', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%META::price% - macros for current post meta value. "price" - is a meta key to get value from', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null))), wp.element.createElement(AdvancedFields, _extends({
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
  title: __('Repeater Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Multiple fields',
      desc: 'Field description...'
    },
    innerBlocks: [{
      name: 'jet-forms/text-field',
      attributes: {
        label: 'Item Title'
      }
    }, {
      name: 'jet-forms/radio-field',
      attributes: {
        label: 'Item Radio',
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
    }]
  }
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
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldControl = _JetFBComponents.FieldControl,
    HorizontalLine = _JetFBComponents.HorizontalLine;

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
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__["default"], props, wp.element.createElement(ToggleControl, {
    key: "switch_on_change",
    label: __('Switch page on change'),
    checked: attributes.switch_on_change,
    help: attrHelp('switch_on_change'),
    onChange: function onChange(newValue) {
      setAttributes({
        switch_on_change: Boolean(newValue)
      });
    }
  }), wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__["SelectRadioCheckPlaceholder"], _extends({
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
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Select Field',
      desc: 'Field description...',
      field_options: [{
        label: 'Choose option...',
        value: ''
      }]
    }
  }
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields;
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
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props, {
    attrsSettings: {
      name: {
        show: false
      }
    }
  })), wp.element.createElement(AdvancedFields, _extends({
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
  useEditProps: ['uniqKey'],
  example: {
    attributes: {
      label: 'Submit'
    }
  }
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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/text-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
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
var NumberControl = wp.components.NumberControl;

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
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(SelectControl, {
    key: "field_type",
    label: __('Field Type'),
    labelPosition: "top",
    value: attributes.field_type,
    onChange: function onChange(newValue) {
      setAttributes({
        field_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__["fieldTypesList"]
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
    options: _options__WEBPACK_IMPORTED_MODULE_0__["maskTypesList"]
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
    options: _options__WEBPACK_IMPORTED_MODULE_0__["maskVisibilitiesList"]
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
    options: _options__WEBPACK_IMPORTED_MODULE_0__["maskPlaceholdersList"]
  }))), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Text Field',
      placeholder: 'Input your text...',
      desc: 'Field description...'
    }
  }
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
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

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(NumberControl, {
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
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Textarea Field',
      desc: 'Field description...'
    }
  }
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
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
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Time Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/wysiwyg-field/block.json":
/*!************************************************!*\
  !*** ./editor/blocks/wysiwyg-field/block.json ***!
  \************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/wysiwyg-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jetformbuilder\",\"field\",\"wysiwyg\",\"text\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"15\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"#4EFEC3\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M10 34V23H13.7708C15.077 23 16.0678 23.2569 16.7431 23.7706C17.4184 24.2793 17.756 25.0272 17.756 26.0144C17.756 26.5533 17.6205 27.0293 17.3494 27.4423C17.0782 27.8503 16.7012 28.15 16.2181 28.3413C16.7702 28.4824 17.2039 28.7669 17.5194 29.1951C17.8398 29.6232 18 30.147 18 30.7665C18 31.8242 17.6697 32.625 17.0092 33.169C16.3487 33.7129 15.4073 33.9899 14.1848 34H10ZM12.2181 29.2102V32.1793H14.1183C14.6408 32.1793 15.0474 32.0533 15.3383 31.8015C15.634 31.5446 15.7819 31.1921 15.7819 30.7438C15.7819 29.7365 15.2717 29.2253 14.2514 29.2102H12.2181ZM12.2181 27.6085H13.8595C14.9784 27.5884 15.5379 27.1326 15.5379 26.2411C15.5379 25.7424 15.3949 25.3848 15.1091 25.1683C14.8281 24.9467 14.382 24.8359 13.7708 24.8359H12.2181V27.6085Z\\\" fill=\\\"#162B40\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M35.0634 25.2306H32.8394L30.5817 31.8276H32.0422V34.0581H26V31.8276H28.2241L30.4819 25.2306H29.0212V23H35.0634V25.2306Z\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"44.4385\\\" cy=\\\"24.375\\\" r=\\\"1.375\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"44.4385\\\" cy=\\\"28.5\\\" r=\\\"1.375\\\" fill=\\\"#162B40\\\"/><circle cx=\\\"44.4385\\\" cy=\\\"32.625\\\" r=\\\"1.375\\\" fill=\\\"#162B40\\\"/><path d=\\\"M47.1885 24.375H54.0635\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.375\\\"/><path d=\\\"M47.1885 28.5H54.0635\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.375\\\"/><path d=\\\"M47.1885 32.625H54.0635\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"1.375\\\"/></svg>\",\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"default\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var TextareaControl = wp.components.TextareaControl;
function WysiwygEdit(props) {
  var uniqKey = props.editProps.uniqKey,
      isSelected = props.isSelected;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
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
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Wysiwyg Field',
      desc: 'Field description...'
    }
  }
};


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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    ActionModal = _JetFBComponents.ActionModal;
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
  }, __('Manage Items')), showManualModal && wp.element.createElement(ActionModal, {
    title: 'Edit Manual Options',
    onRequestClose: toggleModal,
    classNames: ['width-60']
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
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
/* harmony import */ var _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/select-radio-chekc-options */ "./editor/blocks/select-radio-chekc-options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var _JetFBComponents = JetFBComponents,
    FieldWrapper = _JetFBComponents.FieldWrapper;
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

    full_label.push(getLabelProp(_blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__["listFrom"].find(function (option) {
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

  return wp.element.createElement(FieldWrapper, _extends({
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

/***/ "./editor/components/presets/general-preset.js":
/*!*****************************************************!*\
  !*** ./editor/components/presets/general-preset.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    GlobalField = _JetFBComponents.GlobalField,
    AvailableMapField = _JetFBComponents.AvailableMapField;
var _JetFBActions = JetFBActions,
    withPreset = _JetFBActions.withPreset;

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
    return wp.element.createElement(GlobalField, {
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
    return wp.element.createElement(AvailableMapField, {
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

/* harmony default export */ __webpack_exports__["default"] = (withPreset(GeneralPreset));

/***/ }),

/***/ "./editor/form-actions/activecampaign.js":
/*!***********************************************!*\
  !*** ./editor/form-actions/activecampaign.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab;
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
addAction('active_campaign', /*#__PURE__*/function (_IntegrationComponent) {
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
      var api_key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var api_url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.setState({
        className: ['loading']
      });
      this.getActiveCampaignData(true, {
        api_key: api_key,
        api_url: api_url
      });
    }
  }, {
    key: "getActiveCampaignData",
    value: function getActiveCampaignData() {
      var isValidate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          _ref$api_key = _ref.api_key,
          api_key = _ref$api_key === void 0 ? '' : _ref$api_key,
          _ref$api_url = _ref.api_url,
          api_url = _ref$api_url === void 0 ? '' : _ref$api_url;

      var self = this,
          lists = [],
          endpoint = '/admin/api.php?api_action=list_list';
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

      var options = Object.entries(entries).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            value = _ref3[0],
            label = _ref3[1];

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
      var currentTab = globalTab({
        slug: 'active-campaign-tab'
      });
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(React.Fragment, {
        key: "activecampaign"
      }, wp.element.createElement(ToggleControl, {
        key: 'use_global',
        label: label('use_global'),
        checked: settings.use_global,
        onChange: function onChange(use_global) {
          _this2.onChangeSetting(Boolean(use_global), 'use_global');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('api_data'),
        className: "input-with-button with-wrap",
        key: 'activecampaign_input_key'
      }, wp.element.createElement(TextControl, {
        key: "api_url",
        help: label('api_url'),
        className: "jet-control-clear",
        disabled: settings.use_global,
        value: settings.use_global ? currentTab.api_url : settings.api_url,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'api_url');
        }
      }), wp.element.createElement(TextControl, {
        key: "api_key",
        help: label('api_key'),
        className: "jet-control-clear",
        disabled: settings.use_global,
        value: settings.use_global ? currentTab.api_key : settings.api_key,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'api_key');
        }
      }), settings.api_key && settings.api_url && wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this2.validateActiveCampaignData(currentTab.api_key, currentTab.api_url) : _this2.validateActiveCampaignData(settings.api_key, settings.api_url);
        },
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
        onClick: function onClick() {
          settings.use_global ? _this2.getActiveCampaignData(false, currentTab) : _this2.getActiveCampaignData(false, settings);
        }
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
      }, Object.entries(source.activecampaign_fields).map(function (_ref4, index) {
        var _ref5 = _slicedToArray(_ref4, 2),
            fieldName = _ref5[0],
            fieldLabel = _ref5[1];

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
}(_integration_component__WEBPACK_IMPORTED_MODULE_0__["default"]));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
/*! no static exports found */
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction;
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
addAction('call_hook', function CallHookAction(_ref) {
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
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
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
addAction('call_webhook', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(CallWebHookAction, _wp$element$Component);

  var _super = _createSuper(CallWebHookAction);

  function CallWebHookAction(props) {
    var _this;

    _classCallCheck(this, CallWebHookAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
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
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab;
var _JetFBComponents = JetFBComponents,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
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
addAction('getresponse', /*#__PURE__*/function (_IntegrationComponent) {
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
      var currentTab = globalTab({
        slug: 'get-response-tab'
      });
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(React.Fragment, {
        key: "getresponse"
      }, wp.element.createElement(ToggleControl, {
        key: 'use_global',
        label: label('use_global'),
        checked: settings.use_global,
        onChange: function onChange(use_global) {
          _this.onChangeSetting(Boolean(use_global), 'use_global');
        }
      }), wp.element.createElement(BaseControl, {
        key: 'getresponse_input_key',
        className: "input-with-button"
      }, wp.element.createElement(TextControl, {
        key: "api_key",
        label: label('api_key'),
        disabled: settings.use_global,
        value: settings.use_global ? currentTab.api_key : settings.api_key,
        onChange: function onChange(newVal) {
          return _this.onChangeSetting(newVal, 'api_key');
        }
      }), wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this.validateAPIKey(currentTab.api_key) : _this.validateAPIKey();
        },
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
        onClick: function onClick() {
          settings.use_global ? _this.getApiData(settings.api_key) : _this.getApiData(currentTab.api_key);
        }
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

        return wp.element.createElement(WrapperRequiredControl, {
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
}(_integration_component__WEBPACK_IMPORTED_MODULE_0__["default"]));

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
/* harmony import */ var _blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/controls/default-meta */ "./editor/blocks/controls/default-meta.js");
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



var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
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
addAction('insert_post', /*#__PURE__*/function (_wp$element$Component) {
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

      var formFields = getFormFieldsBlocks();
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
      }, wp.element.createElement(_blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntegrationComponent; });
/* harmony import */ var _base_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-action-component */ "./editor/form-actions/base-action-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;

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
    _this.formFieldsList = getFormFieldsBlocks([], '--');
    _this.state = {
      className: [_this.getclassNameValidateButton()]
    };
    return _this;
  }

  _createClass(IntegrationComponent, [{
    key: "validateAPIKey",
    value: function validateAPIKey() {
      var customApiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        className: ['loading']
      });

      if (customApiKey && 'string' === typeof customApiKey) {
        this.getApiData(customApiKey);
        return;
      }

      var settings = this.props.settings;
      this.getApiData(settings.api_key);
    }
  }, {
    key: "getApiData",
    value: function getApiData(apiKey) {
      var self = this;

      if (!apiKey) {
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
          'action': this.props.source.action,
          'api_key': apiKey
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
var __ = wp.i18n.__;
addAction('mailchimp', /*#__PURE__*/function (_IntegrationComponent) {
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

      if (settings.data && settings.data.groups) {
        return settings.data.groups[settings.list_id];
      }

      return [];
    }
  }, {
    key: "formatEntriesArray",
    value: function formatEntriesArray() {
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

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
      return [{
        label: '--',
        value: ''
      }].concat(_toConsumableArray(options));
    }
  }, {
    key: "isCheckedGroup",
    value: function isCheckedGroup(value) {
      var settings = this.props.settings;
      return value && settings.groups_ids && settings.groups_ids[value] ? settings.groups_ids[value] : false;
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
      var currentTab = globalTab({
        slug: 'mailchimp-tab'
      });
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement("div", {
        key: "mailchimp"
      }, wp.element.createElement(ToggleControl, {
        key: 'use_global',
        label: label('use_global'),
        checked: settings.use_global,
        onChange: function onChange(use_global) {
          _this.onChangeSetting(Boolean(use_global), 'use_global');
        }
      }), wp.element.createElement(BaseControl, {
        key: 'mailchimp_key_inputs',
        className: "input-with-button"
      }, wp.element.createElement(TextControl, {
        key: "api_key",
        label: label('api_key'),
        disabled: settings.use_global,
        value: settings.use_global ? currentTab.api_key : settings.api_key,
        onChange: function onChange(newVal) {
          _this.onChangeSetting(newVal, 'api_key');
        }
      }), wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this.validateAPIKey(currentTab.api_key) : _this.validateAPIKey();
        },
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
        onClick: function onClick() {
          settings.use_global ? _this.getApiData(settings.api_key) : _this.getApiData(currentTab.api_key);
        }
      }, label('update_list_ids'))), Boolean(settings.list_id) && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        label: label('groups_ids')
      }, wp.element.createElement("div", null, this.getGroups().map(function (group) {
        return wp.element.createElement(CheckboxControl, {
          key: "groups_ids_".concat(group.value),
          checked: _this.isCheckedGroup(group.value),
          label: group.label,
          onChange: function onChange(active) {
            return _this.onChangeSetting(_objectSpread(_objectSpread({}, settings.groups_ids || {}), {}, _defineProperty({}, group.value, active)), 'groups_ids');
          }
        });
      }))), wp.element.createElement(TextControl, {
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
      }), wp.element.createElement(ActionFieldsMap, {
        label: label('fields_map'),
        key: "mailchimp",
        fields: fields
      }, function (_ref3) {
        var fieldId = _ref3.fieldId,
            fieldData = _ref3.fieldData,
            index = _ref3.index;
        return wp.element.createElement(WrapperRequiredControl, {
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
      }))));
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
/*! no static exports found */
/***/ (function(module, exports) {

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

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
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
addAction('redirect_to_page', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(RedirectToPageAction, _wp$element$Component);

  var _super = _createSuper(RedirectToPageAction);

  function RedirectToPageAction(props) {
    var _this;

    _classCallCheck(this, RedirectToPageAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
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
/* harmony import */ var _components_actions_action_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/actions/action-messages */ "./editor/components/actions/action-messages.js");
/* harmony import */ var _base_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-action-component */ "./editor/form-actions/base-action-component.js");
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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _JetFBComponents = JetFBComponents,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
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
addAction('register_user', /*#__PURE__*/function (_BaseActionComponent) {
  _inherits(RegisterUserAction, _BaseActionComponent);

  var _super = _createSuper(RegisterUserAction);

  function RegisterUserAction(props) {
    var _this;

    _classCallCheck(this, RegisterUserAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
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

        return wp.element.createElement(WrapperRequiredControl, {
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
      }), wp.element.createElement(_components_actions_action_messages__WEBPACK_IMPORTED_MODULE_0__["default"], this.props));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return RegisterUserAction;
}(_base_action_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./editor/form-actions/send-email.js":
/*!*******************************************!*\
  !*** ./editor/form-actions/send-email.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Internal dependencies
 */
var _JetFBComponents = JetFBComponents,
    MacrosInserter = _JetFBComponents.MacrosInserter;
var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl;
addAction('send_email', function SendEmailAction(_ref) {
  var settings = _ref.settings,
      source = _ref.source,
      label = _ref.label,
      help = _ref.help,
      onChangeSetting = _ref.onChangeSetting;
  var formFields = getFormFieldsBlocks([], '--');

  var insertMacros = function insertMacros(macros) {
    var content = (settings.content || '') + '%' + macros + '%';
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
  }), wp.element.createElement(MacrosInserter, {
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
/*! no static exports found */
/***/ (function(module, exports) {

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

var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    addAction = _JetFBActions.addAction;
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
addAction('update_options', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(UpdateOptionsAction, _wp$element$Component);

  var _super = _createSuper(UpdateOptionsAction);

  function UpdateOptionsAction(props) {
    var _this;

    _classCallCheck(this, UpdateOptionsAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
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
/* harmony import */ var _blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/controls/fields-map */ "./editor/blocks/controls/fields-map.js");
/* harmony import */ var _components_actions_action_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/actions/action-messages */ "./editor/components/actions/action-messages.js");
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



var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
addAction('update_user', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(UpdateUserAction, _wp$element$Component);

  var _super = _createSuper(UpdateUserAction);

  function UpdateUserAction(props) {
    var _this;

    _classCallCheck(this, UpdateUserAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
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
        }, wp.element.createElement(_blocks_controls_fields_map__WEBPACK_IMPORTED_MODULE_0__["default"], {
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
      }), wp.element.createElement(_components_actions_action_messages__WEBPACK_IMPORTED_MODULE_1__["default"], this.props));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return UpdateUserAction;
}(wp.element.Component));

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
/* harmony import */ var _paypal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal */ "./editor/gateways/paypal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBActions = JetFBActions,
    actionByTypeList = _JetFBActions.actionByTypeList,
    fromLocalizeHelper = _JetFBActions.fromLocalizeHelper,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    gatewayAttr = _JetFBActions.gatewayAttr,
    renderGateway = _JetFBActions.renderGateway,
    gatewayActionAttributes = _JetFBActions.gatewayActionAttributes;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
function GatewaysEditor(_ref) {
  var gatewaysArgs = _ref.gatewaysArgs,
      activeActions = _ref.activeActions,
      onUnMount = _ref.onUnMount,
      isSaveAction = _ref.isSaveAction,
      onSaveItems = _ref.onSaveItems;
  var availableActions = activeActions.filter(function (action) {
    return action.type !== 'redirect_to_page';
  });
  var gatewaysData = gatewayAttr();
  var label = gatewayAttr('labels');

  var _useState = useState(gatewaysArgs),
      _useState2 = _slicedToArray(_useState, 2),
      gateway = _useState2[0],
      setGateway = _useState2[1];

  var formFields = getFormFieldsBlocks([], '--');
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
  var actionsList = actionByTypeList('insert_post', true);
  var actionLabel = fromLocalizeHelper('getActionLabel');
  return wp.element.createElement(React.Fragment, null, renderGateway(gateway.gateway, {
    setValueInObject: setValueInObject,
    getNotifications: getNotifications
  }), Boolean(availableActions.length) && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: __('Before payment processed:', 'jet-form-builder'),
    key: "before_payment_base_control"
  }, wp.element.createElement("div", {
    className: 'checkboxes-row'
  }, activeActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsBefore(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
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
      help: gatewayActionAttributes(action),
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
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsFailed(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
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
    options: actionByTypeList('insert_post', true),
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
  }, wp.element.createElement("h4", null, __('Available macros list: ', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_amount% - payment amount returned from gateway template;', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_status% - payment status returned from payment gateway;', 'jet-form-builder'), wp.element.createElement("br", null), __('%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder'), wp.element.createElement("br", null))), wp.element.createElement(TextareaControl, {
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
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;
var _JetFBActions = JetFBActions,
    registerGateway = _JetFBActions.registerGateway,
    gatewayLabel = _JetFBActions.gatewayLabel,
    globalTab = _JetFBActions.globalTab;
var label = gatewayLabel('paypal');
var currentTab = globalTab({
  slug: 'paypal'
});
function PayPal(_ref) {
  var setValueInObject = _ref.setValueInObject,
      getNotifications = _ref.getNotifications;

  var setSetting = function setSetting(key, value) {
    setValueInObject('paypal', key, value);
  };

  var getSetting = function getSetting(key) {
    return getNotifications('paypal', key, '');
  };

  var isGlobal = getNotifications('paypal', 'use_global', false);

  var getManualOrGlobal = function getManualOrGlobal(key) {
    return isGlobal ? currentTab[key] : getSetting(key);
  };

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: label('use_global'),
    checked: getSetting('use_global'),
    onChange: function onChange(newVal) {
      return setSetting('use_global', newVal);
    }
  }), wp.element.createElement(TextControl, {
    label: label('client_id'),
    key: "paypal_client_id_setting",
    value: getManualOrGlobal('client_id'),
    onChange: function onChange(newVal) {
      return setSetting('client_id', newVal);
    },
    disabled: isGlobal
  }), wp.element.createElement(TextControl, {
    label: label('secret'),
    key: "paypal_secret_setting",
    value: getManualOrGlobal('secret'),
    onChange: function onChange(newVal) {
      return setSetting('secret', newVal);
    },
    disabled: isGlobal
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

/***/ "./editor/main.js":
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/form-fields */ "./editor/blocks/form-fields.js");
/* harmony import */ var _form_actions_send_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-actions/send-email */ "./editor/form-actions/send-email.js");
/* harmony import */ var _form_actions_send_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_actions_send_email__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_actions_insert_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-actions/insert-post */ "./editor/form-actions/insert-post.js");
/* harmony import */ var _form_actions_register_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-actions/register-user */ "./editor/form-actions/register-user.js");
/* harmony import */ var _form_actions_update_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-actions/update-user */ "./editor/form-actions/update-user.js");
/* harmony import */ var _form_actions_update_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-actions/update-options */ "./editor/form-actions/update-options.js");
/* harmony import */ var _form_actions_update_options__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_form_actions_update_options__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-actions/call-hook */ "./editor/form-actions/call-hook.js");
/* harmony import */ var _form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-actions/call-webhook */ "./editor/form-actions/call-webhook.js");
/* harmony import */ var _form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-actions/redirect-to-page */ "./editor/form-actions/redirect-to-page.js");
/* harmony import */ var _form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _form_actions_mailchimp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-actions/mailchimp */ "./editor/form-actions/mailchimp.js");
/* harmony import */ var _form_actions_getresponse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-actions/getresponse */ "./editor/form-actions/getresponse.js");
/* harmony import */ var _form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-actions/activecampaign */ "./editor/form-actions/activecampaign.js");
/* harmony import */ var _plugins_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/manager */ "./editor/plugins/manager.js");














var _JetFBActions = JetFBActions,
    event = _JetFBActions.event;
event('jet-form-builder-initialize')();
window.jetFormActionTypes.forEach(function (action, index) {
  if (window.jetFormDefaultActions && window.jetFormDefaultActions[action.id]) {
    window.jetFormActionTypes[index].callback = window.jetFormDefaultActions[action.id];
  }
});
Object(_plugins_manager__WEBPACK_IMPORTED_MODULE_12__["default"])();
Object(_blocks_form_fields__WEBPACK_IMPORTED_MODULE_0__["default"])();
event('jet-form-builder-initialized')();

/***/ }),

/***/ "./editor/plugins/actions/index.js":
/*!*****************************************!*\
  !*** ./editor/plugins/actions/index.js ***!
  \*****************************************/
/*! exports provided: base, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/actions/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-actions-panel',
  title: __('Post Submit Actions')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/actions/options.js":
/*!*******************************************!*\
  !*** ./editor/plugins/actions/options.js ***!
  \*******************************************/
/*! exports provided: getRandomID, defaultActions, newItemCondition, conditionOperators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomID", function() { return getRandomID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultActions", function() { return defaultActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newItemCondition", function() { return newItemCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionOperators", function() { return conditionOperators; });
var getRandomID = function getRandomID() {
  return Math.floor(Math.random() * 8999) + 1000;
};

var defaultActions = [{
  type: 'send_email',
  id: getRandomID(),
  settings: {
    send_email: {
      subject: 'New order on website',
      content: 'Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%'
    }
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


/***/ }),

/***/ "./editor/plugins/actions/render.js":
/*!******************************************!*\
  !*** ./editor/plugins/actions/render.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginActions; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/actions/options.js");
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


var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _JetFBComponents = JetFBComponents,
    ActionModal = _JetFBComponents.ActionModal,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset;
var _JetFBHooks = JetFBHooks,
    useActions = _JetFBHooks.useActions;
var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    DropdownMenu = _wp$components.DropdownMenu;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var __ = wp.i18n.__;
function PluginActions() {
  var _useActions = useActions(true),
      _useActions2 = _slicedToArray(_useActions, 2),
      actions = _useActions2[0],
      setActions = _useActions2[1];

  useEffect(function () {
    if (0 === actions.length) {
      setActions(_options__WEBPACK_IMPORTED_MODULE_0__["defaultActions"]);
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
  var formFields = getFormFieldsBlocks([], '--');

  var getMergedSettings = function getMergedSettings() {
    return editedAction.settings[editedAction.type] || editedAction.settings;
  };

  return wp.element.createElement(React.Fragment, null, actions && actions.map(function (action, index) {
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
        id: Object(_options__WEBPACK_IMPORTED_MODULE_0__["getRandomID"])(),
        settings: {}
      }]));
    }
  }, '+ New Action'), isEdit && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: closeModal,
    title: 'Edit Action',
    onUpdateClick: function onUpdateClick() {
      updateActionSettings(editedAction);
    },
    onCancelClick: closeModal
  }, Callback && wp.element.createElement(Callback, {
    settings: getMergedSettings(),
    onChange: function onChange(data) {
      setEditedAction(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          settings: _objectSpread(_objectSpread({}, prev.settings), {}, _defineProperty({}, editedAction.type, data))
        });
      });
    }
  })), isEditProcessAction && wp.element.createElement(ActionModal, {
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
    return wp.element.createElement(RepeaterWithState, {
      items: processedAction.conditions,
      newItem: _options__WEBPACK_IMPORTED_MODULE_0__["newItemCondition"],
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
        options: _options__WEBPACK_IMPORTED_MODULE_0__["conditionOperators"],
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
      }), wp.element.createElement(FieldWithPreset, {
        ModalEditor: function ModalEditor(_ref3) {
          var actionClick = _ref3.actionClick,
              onRequestClose = _ref3.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
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
}

/***/ }),

/***/ "./editor/plugins/arguments/index.js":
/*!*******************************************!*\
  !*** ./editor/plugins/arguments/index.js ***!
  \*******************************************/
/*! exports provided: base, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/arguments/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-args-panel',
  title: __('Form Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/arguments/options.js":
/*!*********************************************!*\
  !*** ./editor/plugins/arguments/options.js ***!
  \*********************************************/
/*! exports provided: submitTypes, fieldsLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitTypes", function() { return submitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsLayout", function() { return fieldsLayout; });
var submitTypes = [{
  value: '',
  label: '--'
}, {
  value: 'reload',
  label: 'Page Reload'
}, {
  value: 'ajax',
  label: 'AJAX'
}];
var fieldsLayout = [{
  value: '',
  label: '--'
}, {
  value: 'column',
  label: 'Column'
}, {
  value: 'row',
  label: 'Row'
}];


/***/ }),

/***/ "./editor/plugins/arguments/render.js":
/*!********************************************!*\
  !*** ./editor/plugins/arguments/render.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginArgs; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/arguments/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
function PluginArgs() {
  var _useMetaState = useMetaState('_jf_args'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: 'Fields Layout',
    value: args.fields_layout,
    options: _options__WEBPACK_IMPORTED_MODULE_0__["fieldsLayout"],
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
    options: _options__WEBPACK_IMPORTED_MODULE_0__["submitTypes"],
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
}
;

/***/ }),

/***/ "./editor/plugins/captcha/index.js":
/*!*****************************************!*\
  !*** ./editor/plugins/captcha/index.js ***!
  \*****************************************/
/*! exports provided: base, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/captcha/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-captcha-panel',
  title: __('Captcha Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/captcha/options.js":
/*!*******************************************!*\
  !*** ./editor/plugins/captcha/options.js ***!
  \*******************************************/
/*! exports provided: labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return labels; });
var __ = wp.i18n.__;
var labels = {
  enabled: __('Enable reCAPTCHA v3 form verification'),
  key: __('Site Key:'),
  secret: __('Secret Key:'),
  use_global: __('Use Global Settings')
};


/***/ }),

/***/ "./editor/plugins/captcha/render.js":
/*!******************************************!*\
  !*** ./editor/plugins/captcha/render.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/captcha/options.js");
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
var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var _JetFBActions = JetFBActions,
    globalTab = _JetFBActions.globalTab;
var currentTab = globalTab({
  slug: 'captcha-tab'
});

function PluginCaptcha() {
  var _useMetaState = useMetaState('_jf_recaptcha'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'enabled',
    label: _options__WEBPACK_IMPORTED_MODULE_0__["labels"].enabled,
    checked: args.enabled,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          enabled: Boolean(newVal)
        });
      });
    }
  }), args.enabled && wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: _options__WEBPACK_IMPORTED_MODULE_0__["labels"].use_global,
    checked: args.use_global,
    onChange: function onChange(use_global) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          use_global: Boolean(use_global)
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    key: 'site_key',
    label: _options__WEBPACK_IMPORTED_MODULE_0__["labels"].key,
    value: args.use_global ? currentTab.key : args.key,
    disabled: args.use_global,
    onChange: function onChange(newValue) {
      return setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          key: newValue
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    key: 'secret_key',
    label: _options__WEBPACK_IMPORTED_MODULE_0__["labels"].secret,
    value: args.use_global ? currentTab.secret : args.secret,
    disabled: args.use_global,
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
}

/* harmony default export */ __webpack_exports__["default"] = (PluginCaptcha);

/***/ }),

/***/ "./editor/plugins/gateways/index.js":
/*!******************************************!*\
  !*** ./editor/plugins/gateways/index.js ***!
  \******************************************/
/*! exports provided: base, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/gateways/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-gateways-panel',
  title: __('Gateways Settings'),
  condition: window.JetFormEditorData.gateways.allowed
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/gateways/render.js":
/*!*******************************************!*\
  !*** ./editor/plugins/gateways/render.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gateways/gateways-editor */ "./editor/gateways/gateways-editor.js");
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
    RadioControl = _wp$components.RadioControl,
    Button = _wp$components.Button;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBComponents = JetFBComponents,
    ActionModal = _JetFBComponents.ActionModal;

function PluginGateways() {
  var gatewaysData = window.JetFormEditorData.gateways;
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
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(RadioControl, {
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
  }, __('Edit')), isDisabled && wp.element.createElement("p", null, __('Please add \`Insert/Update Post\` action', 'jet-form-builder'))), isEdit && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: closeModal,
    title: "Edit ".concat(getGatewayLabel(gateway), " Settings")
  }, function (_ref) {
    var actionClick = _ref.actionClick,
        onRequestClose = _ref.onRequestClose;
    return wp.element.createElement(React.Fragment, null, wp.element.createElement(_gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({}, gatewaysProps, {
      isSaveAction: actionClick,
      onUnMount: onRequestClose,
      onSaveItems: saveArgs
    })));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PluginGateways);

/***/ }),

/***/ "./editor/plugins/manager.js":
/*!***********************************!*\
  !*** ./editor/plugins/manager.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterPlugins; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./editor/plugins/actions/index.js");
/* harmony import */ var _arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arguments */ "./editor/plugins/arguments/index.js");
/* harmony import */ var _captcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha */ "./editor/plugins/captcha/index.js");
/* harmony import */ var _gateways__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateways */ "./editor/plugins/gateways/index.js");
/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preset */ "./editor/plugins/preset/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./editor/plugins/messages/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var applyFilters = wp.hooks.applyFilters;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;

var withPluginProps = function withPluginProps(settings, base) {
  var PluginRender = settings.render;
  return function () {
    return wp.element.createElement(PluginDocumentSettingPanel, _extends({}, base, {
      key: "plugin-panel-".concat(base.name)
    }), wp.element.createElement(PluginRender, {
      key: "plugin-render-".concat(base.name)
    }));
  };
};

var registerJfbPlugin = function registerJfbPlugin(plugin) {
  var base = plugin.base,
      settings = plugin.settings;
  settings.render = withPluginProps(settings, base);
  registerPlugin(base.name, settings);
};

function RegisterPlugins() {
  var sortedPlugins = [];
  var jfbPlugins = applyFilters('jet.fb.register.plugins', [_arguments__WEBPACK_IMPORTED_MODULE_1__, _captcha__WEBPACK_IMPORTED_MODULE_2__, _gateways__WEBPACK_IMPORTED_MODULE_3__, _actions__WEBPACK_IMPORTED_MODULE_0__, _preset__WEBPACK_IMPORTED_MODULE_4__, _messages__WEBPACK_IMPORTED_MODULE_5__]);
  jfbPlugins.forEach(function (plugin) {
    var _plugin$base = plugin.base,
        name = _plugin$base.name,
        _plugin$base$conditio = _plugin$base.condition,
        condition = _plugin$base$conditio === void 0 ? true : _plugin$base$conditio;

    if (!condition) {
      return false;
    }

    var beforePlugin = applyFilters("jet.fb.register.plugin.".concat(name, ".before"), []);

    if (beforePlugin) {
      sortedPlugins.push.apply(sortedPlugins, _toConsumableArray(beforePlugin));
    }

    sortedPlugins.push(plugin);
    var afterPlugin = applyFilters("jet.fb.register.plugin.".concat(name, ".after"), []);

    if (afterPlugin) {
      sortedPlugins.push.apply(sortedPlugins, _toConsumableArray(afterPlugin));
    }
  });
  sortedPlugins.forEach(registerJfbPlugin);
}

/***/ }),

/***/ "./editor/plugins/messages/index.js":
/*!******************************************!*\
  !*** ./editor/plugins/messages/index.js ***!
  \******************************************/
/*! exports provided: base, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/messages/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-messages-panel',
  title: __('General Messages Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/messages/render.js":
/*!*******************************************!*\
  !*** ./editor/plugins/messages/render.js ***!
  \*******************************************/
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

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var TextControl = wp.components.TextControl;

function PluginMessages() {
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
    return Tools.isEmptyObject(metaMessages) ? getDefaultMessagesValues() : metaMessages;
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

  return wp.element.createElement(React.Fragment, null, Object.entries(messages).map(function (_ref3, id) {
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
}

/* harmony default export */ __webpack_exports__["default"] = (PluginMessages);

/***/ }),

/***/ "./editor/plugins/preset/index.js":
/*!****************************************!*\
  !*** ./editor/plugins/preset/index.js ***!
  \****************************************/
/*! exports provided: base, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/preset/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-preset-panel',
  title: __('Preset Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: null
};


/***/ }),

/***/ "./editor/plugins/preset/render.js":
/*!*****************************************!*\
  !*** ./editor/plugins/preset/render.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_presets_general_preset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/presets/general-preset */ "./editor/components/presets/general-preset.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _JetFBActions = JetFBActions,
    getAvailableFields = _JetFBActions.getAvailableFields;

function PluginPreset() {
  var ToggleControl = wp.components.ToggleControl;

  var _useMetaState = useMetaState('_jf_preset'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  var formFields = getAvailableFields();
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
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
  }), args.enabled && wp.element.createElement(_components_presets_general_preset__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: '_jf_preset_general',
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
}

/* harmony default export */ __webpack_exports__["default"] = (PluginPreset);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvYmxvY2std3JhcHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jYWxjdWxhdGVkLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jYWxjdWxhdGVkLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NoZWNrYm94LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29uZGl0aW9uYWwtYmxvY2svZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29uZGl0aW9uYWwtYmxvY2svb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9kZWZhdWx0LW1ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvcGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9kYXRlLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9kYXRlLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZXRpbWUtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGV0aW1lLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1icmVhay1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1icmVhay1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZ3JvdXAtYnJlYWstZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2dyb3VwLWJyZWFrLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGVhZGluZy1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGVhZGluZy1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hlbHAtbWVzc2FnZXMtY29uZmlnLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGlkZGVuLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oaWRkZW4tZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oaWRkZW4tZmllbGQvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL21lZGlhLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9tZWRpYS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL21lZGlhLWZpZWxkL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9udW1iZXItZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL251bWJlci1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhZGlvLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yYWRpby1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JhbmdlLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yYW5nZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yZXBlYXRlci1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3JlcGVhdGVyLWZpZWxkL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yZXBlYXRlci1maWVsZC9zYXZlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc2VsZWN0LWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zZWxlY3QtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zZWxlY3QtcmFkaW8tY2hla2Mtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3N1Ym1pdC1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc3VibWl0LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dC1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dC1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHQtZmllbGQvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHRhcmVhLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0YXJlYS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RpbWUtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RpbWUtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy93eXNpd3lnLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy93eXNpd3lnLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tZ2VuZXJhdG9ycy1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vZnJvbS1tYW51YWwtZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tcG9zdC10ZXJtcy1maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zb3VyY2VzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL3ByZXNldHMvZ2VuZXJhbC1wcmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9hY3RpdmVjYW1wYWlnbi5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2Jhc2UtYWN0aW9uLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwtaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2NhbGwtd2ViaG9vay5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2dldHJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvaW5zZXJ0LXBvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9pbnRlZ3JhdGlvbi1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9tYWlsY2hpbXAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9yZWRpcmVjdC10by1wYWdlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvcmVnaXN0ZXItdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3NlbmQtZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy91cGRhdGUtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3VwZGF0ZS11c2VyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9nYXRld2F5cy1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2dhdGV3YXlzL3BheXBhbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL2FjdGlvbnMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9hY3Rpb25zL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9hcmd1bWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYXJndW1lbnRzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYXJndW1lbnRzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9jYXB0Y2hhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL2NhcHRjaGEvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9jYXB0Y2hhL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9nYXRld2F5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9nYXRld2F5cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9tZXNzYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9tZXNzYWdlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvcHJlc2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL3ByZXNldC9yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9lZGl0b3IvbWFpbi5qc1wiKTtcbiIsImltcG9ydCB7IG1lc3NhZ2VzQ29uZmlnIH0gZnJvbSBcIi4vaGVscC1tZXNzYWdlcy1jb25maWdcIjtcblxuY29uc3Qge1xuXHRhcHBseUZpbHRlcnNcbn0gPSB3cC5ob29rcztcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhDdXN0b21Qcm9wcyggYmxvY2sgKSB7XG5cdGNvbnN0IHsgZWRpdDogRWRpdENvbXBvbmVudCB9ID0gYmxvY2suc2V0dGluZ3M7XG5cblx0bGV0IF9wbHVnaW5zID0ge307XG5cblx0aWYgKCAndXNlRWRpdFByb3BzJyBpbiBibG9jay5zZXR0aW5ncyApIHtcblx0XHRjb25zdCB7IHVzZUVkaXRQcm9wcyB9ID0gYmxvY2suc2V0dGluZ3M7XG5cblx0XHR1c2VFZGl0UHJvcHMuZm9yRWFjaCggbmFtZSA9PiB7XG5cdFx0XHRjb25zdCBlZGl0UHJvcCA9IGVkaXRQcm9wcy5maW5kKCBwcm9wID0+IG5hbWUgPT09IHByb3AubmFtZSApO1xuXG5cdFx0XHRpZiAoIGVkaXRQcm9wICkge1xuXHRcdFx0XHRfcGx1Z2luc1sgbmFtZSBdID0gZWRpdFByb3AuY2FsbGFibGUoIGJsb2NrICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0ZGVsZXRlIGJsb2NrLnNldHRpbmdzLnVzZUVkaXRQcm9wcztcblx0fVxuXG5cdHJldHVybiBwcm9wcyA9PiA8RWRpdENvbXBvbmVudCB7IC4uLnByb3BzIH0gZWRpdFByb3BzPXsgeyAuLi5fcGx1Z2lucyB9IH0vPjtcbn1cblxuY29uc3QgZ2V0SGVscEluc3RhbmNlID0gYmxvY2sgPT4ge1xuXHRjb25zdCBtZXNzYWdlcyA9IHt9O1xuXG5cdG1lc3NhZ2VzQ29uZmlnLmZvckVhY2goIG1zZyA9PiB7XG5cdFx0aWYgKCBtc2cudG8uaW5jbHVkZXMoIGJsb2NrLm5hbWUgKSAmJiBtc2cubWVzc2FnZSApIHtcblx0XHRcdG1lc3NhZ2VzWyBtc2cuYXR0cmlidXRlIF0gPSBtc2c7XG5cdFx0fVxuXHR9ICk7XG5cblx0cmV0dXJuICggYXR0cmlidXRlLCBhdHRyaWJ1dGVzID0ge30gKSA9PiB7XG5cdFx0aWYgKCAhICggYXR0cmlidXRlIGluIG1lc3NhZ2VzICkgKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGNvbnN0IGl0ZW0gPSBtZXNzYWdlc1sgYXR0cmlidXRlIF07XG5cblx0XHRpZiAoICdjb25kaXRpb25zJyBpbiBpdGVtICkge1xuXHRcdFx0Zm9yICggY29uc3QgYXR0ck5hbWUgaW4gaXRlbS5jb25kaXRpb25zICkge1xuXHRcdFx0XHRpZiAoICEgKCBhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzICkgfHwgaXRlbS5jb25kaXRpb25zWyBhdHRyTmFtZSBdICE9PSBhdHRyaWJ1dGVzWyBhdHRyTmFtZSBdICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaXRlbS5tZXNzYWdlO1xuXHR9XG59O1xuXG5jb25zdCBlZGl0UHJvcHMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZWRpdFByb3BzJywgW1xuXHR7XG5cdFx0bmFtZTogJ3VuaXFLZXknLFxuXHRcdGNhbGxhYmxlOiBibG9jayA9PiAoIHN1ZmZpeCA9PiBgJHsgYmxvY2submFtZSB9LyR7IHN1ZmZpeCB9YCApXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnYmxvY2tOYW1lJyxcblx0XHRjYWxsYWJsZTogYmxvY2sgPT4gYmxvY2submFtZVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2F0dHJIZWxwJyxcblx0XHRjYWxsYWJsZTogZ2V0SGVscEluc3RhbmNlXG5cdH1cbl0gKTsiLCJjb25zdCB7XG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBGaWVsZFdyYXBwZXIsXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBCbG9ja0NvbnRyb2xzLFxuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFRleHRhcmVhQ29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBCdXR0b24sXG5cdFx0ICBQb3BvdmVyLFxuXHRcdCAgVG9vbGJhckdyb3VwLFxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBOdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xuXG5jb25zdCB7IHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBoZWxwID0ge1xuXHRjYWxjX2hpZGRlbjogX18oICdDaGVjayB0aGlzIHRvIGhpZGUgY2FsY3VsYXRlZCBmaWVsZCcgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRDYWxjdWxhdGVkKCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Y2FsY19mb3JtdWxhOiBgJHsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfHwgJycgfSVGSUVMRDo6JHsgbWFjcm9zIH0lYCxcblx0XHR9ICk7XG5cdH07XG5cdGNvbnN0IHRvZ2dsZVBvcG92ZXIgPSAoKSA9PiB7XG5cdFx0c2V0Rm9ybUZpZWxkcyggZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQoKSApO1xuXHRcdHNldFNob3dNYWNyb3MoIHRvZ2dsZSA9PiAhIHRvZ2dsZSApO1xuXHR9O1xuXG5cdGNvbnN0IFsgZm9ybUZpZWxkcywgc2V0Rm9ybUZpZWxkcyBdID0gdXNlU3RhdGUoIFtdICk7XG5cdGNvbnN0IFsgc2hvd01hY3Jvcywgc2V0U2hvd01hY3JvcyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0cmV0dXJuIFtcblx0XHQ8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnQmxvY2tDb250cm9scycgKSB9PlxuXHRcdFx0PFRvb2xiYXJHcm91cCBrZXk9eyB1bmlxS2V5KCAnVG9vbGJhckdyb3VwJyApIH0+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnc2hvdy1wb3BvdmVyJyApIH1cblx0XHRcdFx0XHRpc1RlcnRpYXJ5XG5cdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdGljb249eyBzaG93TWFjcm9zID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cblx0XHRcdFx0XHRvbkNsaWNrPXsgdG9nZ2xlUG9wb3ZlciB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgc2hvd01hY3JvcyAmJiA8UG9wb3ZlclxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdQb3BvdmVyJyApIH1cblx0XHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBmb3JtRmllbGRzLmxlbmd0aCAmJiA8UGFuZWxCb2R5IHRpdGxlPXsgJ0Zvcm0gRmllbGRzJyB9PlxuXHRcdFx0XHRcdFx0eyBmb3JtRmllbGRzLm1hcCggKCB7IHZhbHVlIH0sIGluZGV4ICkgPT4gPGRpdiBrZXk9eyB1bmlxS2V5KCBgZm9ybUZpZWxkcy0keyBpbmRleCB9YCApIH0+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnNlcnRNYWNyb3MoIHZhbHVlIClcblx0XHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHRcdD57ICclRklFTEQ6OicgKyB2YWx1ZSArICclJyB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2Pixcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cdFx0XHRcdDwvUG9wb3Zlcj4gfVxuXHRcdFx0PC9Ub29sYmFyR3JvdXA+XG5cdFx0PC9CbG9ja0NvbnRyb2xzPixcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHQ+XG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1nZW5lcmFsJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX3Jvdy1ub3RpY2VcIj5cblx0XHRcdFx0XHR7IF9fKCAnU2V0IG1hdGggZm9ybXVsYSB0byBjYWxjdWxhdGUgZmllbGQgdmFsdWUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XG5cdFx0XHRcdFx0eyBfXyggJ0ZvciBleGFtcGxlOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPjxici8+XG5cdFx0XHRcdFx0JUZJRUxEOjpxdWFudGl0eSUqJU1FVEE6OnByaWNlJTxici8+PGJyLz5cblx0XHRcdFx0XHR7IF9fKCAnV2hlcmU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XG5cdFx0XHRcdFx0LVxuXHRcdFx0XHRcdHsgX18oICclRklFTEQ6OnF1YW50aXR5JSAtIG1hY3JvcyBmb3IgZm9ybSBmaWVsZCB2YWx1ZS4gXCJxdWFudGl0eVwiIC0gaXMgYSBmaWVsZCBuYW1lIHRvIGdldCB2YWx1ZSBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XG5cdFx0XHRcdFx0LVxuXHRcdFx0XHRcdHsgX18oICclTUVUQTo6cHJpY2UlIC0gbWFjcm9zIGZvciBjdXJyZW50IHBvc3QgbWV0YSB2YWx1ZS4gXCJwcmljZVwiIC0gaXMgYSBtZXRhIGtleSB0byBnZXQgdmFsdWUgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPjxici8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdEZWNpbWFsIFBsYWNlcyBOdW1iZXInICkgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRrZXk9J3ByZWNpc2lvbidcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucHJlY2lzaW9uIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHByZWNpc2lvbjogcGFyc2VJbnQoIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J2NhbGNfcHJlZml4J1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGVkIFZhbHVlIFByZWZpeCcgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfcHJlZml4IH1cblx0XHRcdFx0XHRoZWxwPXsgX18oICdGb3Igc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHRleHQgdXNlOiAmbmJzcDsnICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY19wcmVmaXg6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdjYWxjX3N1ZmZpeCdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlZCBWYWx1ZSBTdWZmaXgnICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX3N1ZmZpeCB9XG5cdFx0XHRcdFx0aGVscD17IF9fKCAnRm9yIHNwYWNlIGJlZm9yZSBvciBhZnRlciB0ZXh0IHVzZTogJm5ic3A7JyApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGNfc3VmZml4OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgJ2NhbGNfaGlkZGVuJyB9XG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0hpZGRlbicgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuY2FsY19oaWRkZW4gfVxuXHRcdFx0XHRcdGhlbHA9eyBoZWxwLmNhbGNfaGlkZGVuIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdGNhbGNfaGlkZGVuOiBCb29sZWFuKCBuZXdWYWwgKSxcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tYWR2YW5jZWQnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR2YWx1ZUlmRW1wdHlMYWJlbD17ICdDYWxjdWxhdGVkIEZpZWxkJyB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IHByb3BzLmlzU2VsZWN0ZWQgJiYgPFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdGtleT1cImNhbGNfZm9ybXVsYVwiXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfZm9ybXVsYSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjX2Zvcm11bGE6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz4gfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19jYWxjdWxhdGVkLWZpZWxkJyB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NhbGMtcHJlZml4JyB9PnsgYXR0cmlidXRlcy5jYWxjX3ByZWZpeCB9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2FsYy1mb3JtdWxhJyB9PnsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NhbGMtc3VmZml4JyB9PnsgYXR0cmlidXRlcy5jYWxjX3N1ZmZpeCB9PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+LFxuXHRdO1xufSIsImltcG9ydCBFZGl0Q2FsY3VsYXRlZCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdDYWxjdWxhdGVkIEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0ZGVzY3JpcHRpb246IF9fKCAnQ2FsY3VsYXRlIGFuZCBkaXNwbGF5IHlvdXIgbnVtYmVyIHZhbHVlcycgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogRWRpdENhbGN1bGF0ZWQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ0NhbGN1bGF0ZWQgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTtcbiIsImltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlclwiO1xuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrXCI7XG5cbmNvbnN0IHtcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEdlbmVyYWxGaWVsZHMsXG5cdFRvb2xCYXJGaWVsZHMsXG5cdEZpZWxkQ29udHJvbCxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3QgbG9jYWxpemVkID0gd2luZG93LkpldEZvcm1DaGVja2JveEZpZWxkRGF0YTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tib3hFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0aXNTZWxlY3RlZCxcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XG5cdH0gPSBwcm9wcztcblxuXHRyZXR1cm4gW1xuXHRcdDxUb29sQmFyRmllbGRzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS10b29sYmFyJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLWdlbmVyYWwnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tYWR2YW5jZWQnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdFx0XHR0eXBlPSdjdXN0b21fc2V0dGluZ3MnXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlcicgKSB9XG5cdFx0XHRcdHNjcmlwdERhdGE9eyBsb2NhbGl6ZWQgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdF07XG59IiwiaW1wb3J0IENoZWNrYm94RWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdDaGVja2JveCBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IENoZWNrYm94RWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2Jsb2NrTmFtZScsICdhdHRySGVscCcgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnQ2hlY2tib3ggRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcblx0XHRcdGZpZWxkX29wdGlvbnM6IFtcblx0XHRcdFx0eyBsYWJlbDogJ0ZpcnN0IE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHR7IGxhYmVsOiAnU2Vjb25kIE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHR7IGxhYmVsOiAnVGhpcmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRdXG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5jb25zdCB7XG5cdFJlcGVhdGVyV2l0aFN0YXRlLFxuXHRBY3Rpb25Nb2RhbCxcblx0RmllbGRXaXRoUHJlc2V0LFxuXHREeW5hbWljUHJlc2V0LFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRnZXRJbm5lckJsb2Nrcyxcblx0VG9vbHNcbn0gPSBKZXRGQkFjdGlvbnM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG5cdHVzZUJsb2NrUHJvcHNcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0VG9vbGJhckdyb3VwLFxuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHR1c2VTdGF0ZSxcbn0gPSB3cC5lbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25kaXRpb25hbEJsb2NrRWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdGNsaWVudElkLFxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cblx0fSA9IHByb3BzO1xuXG5cdFRvb2xzLmFkZENvbmRpdGlvbkZvckNvbmRUeXBlKCAnaXNTaW5nbGVGaWVsZCcsICgpID0+IHtcblx0XHRyZXR1cm4gMSA9PT0gZ2V0SW5uZXJCbG9ja3MoIGNsaWVudElkICkubGVuZ3RoO1xuXHR9IClcblxuXHRjb25zdCBnZXRDb25kaXRpb25UeXBlcyA9IFRvb2xzLnBhcnNlQ29uZGl0aW9uc0Z1bmMoIG9wdGlvbnMuY29uZGl0aW9uVHlwZXMgKTtcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XG5cblx0cmV0dXJuIFtcblx0XHQ8QmxvY2tDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnQmxvY2tDb250cm9scycgKSB9PlxuXHRcdFx0PFRvb2xiYXJHcm91cCBrZXk9eyB1bmlxS2V5KCAnVG9vbGJhckdyb3VwJyApIH0+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmFuZG9taXplJyApIH1cblx0XHRcdFx0XHRpc1RlcnRpYXJ5XG5cdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdGljb249J3JhbmRvbWl6ZSdcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd01vZGFsKCB0cnVlICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Ub29sYmFyR3JvdXA+XG5cdFx0PC9CbG9ja0NvbnRyb2xzPixcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnY29uZGl0aW9uYWwtZmllbGRzJyApIH1cblx0XHRcdFx0cmVuZGVyQXBwZW5kZXI9eyAoKSA9PiA8SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlciBrZXk9eyB1bmlxS2V5KCAnQnV0dG9uQmxvY2tBcHBlbmRlcicgKSB9Lz4gfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj4sXG5cdFx0c2hvd01vZGFsICYmIDxBY3Rpb25Nb2RhbFxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gc2V0U2hvd01vZGFsKCBmYWxzZSApIH1cblx0XHRcdHRpdGxlPVwiQ29uZGl0aW9uYWwgTG9naWNcIlxuXHRcdD5cblx0XHRcdHsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPFJlcGVhdGVyV2l0aFN0YXRlXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdSZXBlYXRlcldpdGhTdGF0ZScgKSB9XG5cdFx0XHRcdGl0ZW1zPXsgYXR0cmlidXRlcy5jb25kaXRpb25zIH1cblx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxuXHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XG5cdFx0XHRcdG5ld0l0ZW09eyBvcHRpb25zLmNvbmRpdGlvbiB9XG5cdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgY29uZGl0aW9ucyA9PiBzZXRBdHRyaWJ1dGVzKCB7IGNvbmRpdGlvbnMgfSApIH1cblx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWw9eyBfXyggXCJOZXcgQ29uZGl0aW9uXCIgKSB9XG5cdFx0XHRcdGhlbHA9eyB7XG5cdFx0XHRcdFx0aGVscFZpc2libGU6IGNvbmRpdGlvbnMgPT4gY29uZGl0aW9ucy5sZW5ndGggPiAxLFxuXHRcdFx0XHRcdGhlbHBTb3VyY2U6IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5oZWxwRm9yUmVwZWF0ZXJzLFxuXHRcdFx0XHRcdGhlbHBLZXk6ICdjb25kaXRpb25hbF9ibG9jaydcblx0XHRcdFx0fSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKCB7IGN1cnJlbnRJdGVtLCBjaGFuZ2VDdXJyZW50SXRlbSB9ICkgPT4gPD5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtdHlwZScgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIlR5cGVcIlxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS50eXBlIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBnZXRDb25kaXRpb25UeXBlcyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdHlwZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtZmllbGQnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJGaWVsZFwiXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmZpZWxkIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBmaWVsZDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdENvbnRyb2wtb3BlcmF0b3InICkgfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJPcGVyYXRvclwiXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLm9wZXJhdG9yIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBvcHRpb25zLmNvbmRpdGlvbk9wZXJhdG9ycyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3I6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEZpZWxkV2l0aFByZXNldFxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV2l0aFByZXNldC12YWx1ZV90b19jb21wYXJlJyApIH1cblx0XHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0R5bmFtaWNQcmVzZXQtdmFsdWVfdG9fY29tcGFyZScgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XG5cdFx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0YXJlYScgXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnVGV4dGFyZWFDb250cm9sLXZhbHVlJyApIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJWYWx1ZSB0byBDb21wYXJlXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD5cblx0XHRcdFx0XHR7ICdzZXRfdmFsdWUnID09PSBjdXJyZW50SXRlbS50eXBlICYmIDxGaWVsZFdpdGhQcmVzZXRcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdpdGhQcmVzZXQtdmFsdWVfdG9fc2V0JyApIH1cblx0XHRcdFx0XHRcdE1vZGFsRWRpdG9yPXsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPER5bmFtaWNQcmVzZXRcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0R5bmFtaWNQcmVzZXQtdmFsdWVfdG9fc2V0JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5zZXRfdmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XG5cdFx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBzZXRfdmFsdWU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHRcdHRyaWdnZXJDbGFzc2VzPXsgWyAndHJpZ2dlcl9fdGV4dGFyZWEnIF0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1RleHRhcmVhQ29udHJvbC1zZXRfdmFsdWUnICkgfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgdG8gU2V0JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXsgX18oICdTZXBhcmF0ZSB2YWx1ZXMgd2l0aCBjb21tYXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uc2V0X3ZhbHVlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgc2V0X3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD4gfVxuXHRcdFx0XHQ8Lz4gfVxuXHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT4gfVxuXHRcdDwvQWN0aW9uTW9kYWw+XG5cdF07XG59IiwiaW1wb3J0IENvbmRpdGlvbmFsQmxvY2tFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XG5pbXBvcnQgQ29uZGl0aW9uYWxTYXZlIGZyb20gXCIuL3NhdmVcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdDb25kaXRpb25hbCBCbG9jaycgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IENvbmRpdGlvbmFsQmxvY2tFZGl0LFxuXHRzYXZlOiBDb25kaXRpb25hbFNhdmUsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRsYWJlbDogJ1RpdGxlJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnamV0LWZvcm1zL3JhZGlvLWZpZWxkJyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdGxhYmVsOiAnSXRlbSBSYWRpbycsXG5cdFx0XHRcdFx0ZmllbGRfb3B0aW9uczogW1xuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ0ZpcnN0IE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ1NlY29uZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdUaGlyZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0sXG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XG5cdGNvbmRpdGlvbjoge1xuXHRcdHR5cGU6ICdoaWRlJyxcblx0XHRmaWVsZDogJycsXG5cdFx0b3BlcmF0b3I6ICcnLFxuXHRcdHZhbHVlOiAnJyxcblx0XHRzZXRfdmFsdWU6ICcnLFxuXHR9LFxuXHRjb25kaXRpb25UeXBlczogW1xuXHRcdHsgbGFiZWw6ICctLScsIHZhbHVlOiAnJyB9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAnSGlkZSB0aGlzIGZpZWxkIGlmLi4uJyxcblx0XHRcdHZhbHVlOiAnaGlkZSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAnU2hvdyB0aGlzIGZpZWxkIGlmLi4uJyxcblx0XHRcdHZhbHVlOiAnc2hvdydcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAnU2V0IHZhbHVlIGZvciB0aGlzIGZpZWxkIGlmLi4uJyxcblx0XHRcdHZhbHVlOiAnc2V0X3ZhbHVlJyxcblx0XHRcdGNvbmRpdGlvbjogJ2lzU2luZ2xlRmllbGQnLFxuXHRcdH0sXG5cdF0sXG5cdGNvbmRpdGlvbk9wZXJhdG9yczogW1xuXHRcdHsgbGFiZWw6ICctLScsIHZhbHVlOiAnJyB9LFxuXHRcdHsgbGFiZWw6ICdFcXVhbCcsIHZhbHVlOiAnZXF1YWwnIH0sXG5cdFx0eyBsYWJlbDogJ0dyZWF0ZXIgdGhhbicsIHZhbHVlOiAnZ3JlYXRlcicgfSxcblx0XHR7IGxhYmVsOiAnTGVzcyB0aGFuJywgdmFsdWU6ICdsZXNzJyB9LFxuXHRcdHsgbGFiZWw6ICdCZXR3ZWVuJywgdmFsdWU6ICdiZXR3ZWVuJyB9LFxuXHRcdHsgbGFiZWw6ICdJbiB0aGUgbGlzdCcsIHZhbHVlOiAnb25lX29mJyB9LFxuXHRcdHsgbGFiZWw6ICdDb250YWluIHRleHQnLCB2YWx1ZTogJ2NvbnRhaW4nIH0sXG5cdF0sXG59OyIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmRpdGlvbmFsU2F2ZSggcHJvcHMgKSB7XG5cdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+O1xufSIsImNvbnN0IHtcblx0QnV0dG9uLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jbGFzcyBKZXREZWZhdWx0TWV0YUNvbnRyb2wgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5hZGROZXdPcHRpb24gPSB0aGlzLmFkZE5ld09wdGlvbi5iaW5kKCB0aGlzICk7XG5cdH1cblxuXHRnZXREZWZhdWx0TWV0YSgpIHtcblx0XHRpZiAoICEgdGhpcy5wcm9wcy5kZWZhdWx0TWV0YSApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKTtcblx0fVxuXG5cblx0YWRkTmV3T3B0aW9uKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5nZXREZWZhdWx0TWV0YSgpO1xuXG5cdFx0aXRlbXMucHVzaCgge1xuXHRcdFx0a2V5OiAnJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9ICk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xuXHR9XG5cblx0cmVtb3ZlT3B0aW9uKCBpbmRleCApIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcblx0XHRpdGVtcy5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xuXHR9XG5cblx0b25DaGFuZ2VWYWx1ZSggeyB2YWx1ZSwgbmFtZSwgaWQgfSApIHtcblxuXHRcdGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbSggdGhpcy5wcm9wcy5kZWZhdWx0TWV0YSApO1xuXHRcdGl0ZW1zWyBpZCBdWyBuYW1lIF0gPSB2YWx1ZTtcblxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIGl0ZW1zICk7XG5cdH1cblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gPGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWRlZmF1bHQtbWV0YV9fcm93XCJcblx0XHQ+XG5cdFx0XHR7IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKS5tYXAoICggY3VycmVudEl0ZW0sIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gPGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX2ZsZXgtY29udHJvbHNcIlxuXHRcdFx0XHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyLWl0ZW0tJyArIGluZGV4IH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtLWNvbHVtbic+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PSdtZXRhX2tleSdcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgS2V5JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5rZXkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAna2V5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtLWNvbHVtbic+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PSdtZXRhX3ZhbHVlJ1xuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0YSBWYWx1ZScgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAndmFsdWUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGluZGV4XG5cdFx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW0tY29sdW1uJz5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aWNvbj1cImRpc21pc3NcIlxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlJlbW92ZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnJlbW92ZU9wdGlvbiggaW5kZXggKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH0gKSB9XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uLWFkZC1vcHRpb24nXG5cdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmFkZE5ld09wdGlvbiB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgX18oICdBZGQgTmV3IE9wdGlvbicgKSB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj47XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSmV0RGVmYXVsdE1ldGFDb250cm9sOyIsIlxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY2xhc3MgSmV0RmllbGRzTWFwQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIHByb3BzICk7XG5cblx0XHR0aGlzLmZpZWxkVHlwZXMgPSB0aGlzLnByb3BzLmZpZWxkVHlwZXM7XG5cdFx0dGhpcy50YXhvbm9taWVzTGlzdCA9IHRoaXMucHJvcHMudGF4b25vbWllc0xpc3Q7XG5cdFx0dGhpcy5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblx0XHR0aGlzLm1ldGFQcm9wID0gdGhpcy5wcm9wcy5tZXRhUHJvcCA/IHRoaXMucHJvcHMubWV0YVByb3AgOiAncG9zdF9tZXRhJztcblx0XHR0aGlzLnRlcm1zUHJvcCA9IHRoaXMucHJvcHMudGVybXNQcm9wID8gdGhpcy5wcm9wcy50ZXJtc1Byb3AgOiAncG9zdF90ZXJtcyc7XG5cdFx0dGhpcy5pbmRleCA9IHRoaXMucHJvcHMuaW5kZXg7XG5cblx0XHR0aGlzLmluaXQoKTtcblx0XHR0aGlzLmJpbmRGdW5jdGlvbnMoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0eXBlOiB0aGlzLmdldEZpZWxkVHlwZSggdGhpcy5wcm9wcy5maWVsZFZhbHVlICksXG5cdFx0fTtcblx0fVxuXG5cdGJpbmRGdW5jdGlvbnMoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZVR5cGUgPSB0aGlzLm9uQ2hhbmdlVHlwZS5iaW5kKCB0aGlzICk7XG5cdFx0dGhpcy5vbkNoYW5nZVZhbHVlID0gdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLmlkID0gYGluc3BlY3Rvci1zZWxlY3QtY29udHJvbC0keyB0aGlzLmluZGV4IH1gO1xuXHRcdHRoaXMucHJlcGFyZWRUYXhlcyA9IFtdO1xuXHRcdHRoaXMudGF4UHJlZml4ID0gJ2pldF90YXhfXyc7XG5cblx0XHRpZiAoICEgdGhpcy50YXhvbm9taWVzTGlzdCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnRheG9ub21pZXNMaXN0Lmxlbmd0aDsgaSArKyApIHtcblx0XHRcdHRoaXMucHJlcGFyZWRUYXhlcy5wdXNoKCB7XG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRheFByZWZpeCArIHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS52YWx1ZSxcblx0XHRcdFx0bGFiZWw6IHRoaXMudGF4b25vbWllc0xpc3RbIGkgXS5sYWJlbCxcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRnZXRGaWVsZE5hbWUoIHZhbHVlICkge1xuXG5cdFx0aWYgKCAhIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZpZWxkVHlwZSA9IHRoaXMuZ2V0RmllbGRUeXBlKCB2YWx1ZSApO1xuXG5cdFx0aWYgKCB0aGlzLnRlcm1zUHJvcCA9PT0gZmllbGRUeXBlIHx8IHRoaXMubWV0YVByb3AgPT09IGZpZWxkVHlwZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdH07XG5cblx0aXNUZXJtT3JNZXRhKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gKCB0aGlzLnRlcm1zUHJvcCA9PT0gdmFsdWUgfHwgdGhpcy5tZXRhUHJvcCA9PT0gdmFsdWUgKTtcblx0fVxuXG5cblx0Z2V0RmllbGRUeXBlKCB2YWx1ZSApIHtcblxuXHRcdGlmICggISB2YWx1ZSApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkVHlwZXMubGVuZ3RoOyBpICsrICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gdGhpcy5maWVsZFR5cGVzWyBpIF0udmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlLmluY2x1ZGVzKCB0aGlzLnRheFByZWZpeCApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGVybXNQcm9wO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLm1ldGFQcm9wO1xuXHRcdH1cblxuXHR9O1xuXG5cblx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUgKSB7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0Li4udGhpcy5wcm9wcy5maWVsZHNNYXAsXG5cdFx0XHRbIHRoaXMucHJvcHMuZmllbGROYW1lIF06IG5ld1ZhbHVlXG5cdFx0fSApO1xuXHR9O1xuXG5cblx0b25DaGFuZ2VUeXBlKCBuZXdWYWx1ZSApIHtcblx0XHRsZXQgdmFsID0gdGhpcy5nZXRGaWVsZFR5cGUoIG5ld1ZhbHVlICk7XG5cblx0XHR0aGlzLnNldFN0YXRlKCB7XG5cdFx0XHR0eXBlOiB2YWxcblx0XHR9ICk7XG5cblx0XHRpZiAoIHRoaXMuaXNUZXJtT3JNZXRhKCB2YWwgKSApIHtcblx0XHRcdHZhbCA9ICcnO1xuXHRcdH1cblxuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSggdmFsICk7XG5cdH1cblxuXG5cdC8vIERpc2FibGUgcmVhc29uOiBBIHNlbGVjdCB3aXRoIGFuIG9uY2hhbmdlIHRocm93cyBhIHdhcm5pbmdcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImpldC1maWVsZHMtbWFwX19yb3dcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LXBvc3QtZmllbGQtY29udHJvbFwiPlxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90eXBlXycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxuXHRcdFx0XHRcdGxhYmVsPXsgdGhpcy5wcm9wcy5maWVsZE5hbWUgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuc3RhdGUudHlwZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVHlwZSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZmllbGRUeXBlcyB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzE2MHB4J1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7ICggdGhpcy5tZXRhUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFRleHRDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX25hbWVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XG5cdFx0XHRcdFx0dmFsdWU9eyB0aGlzLnByb3BzLmZpZWxkVmFsdWUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVZhbHVlIH1cblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XG5cdFx0XHRcdC8+IH1cblx0XHRcdFx0eyAoIHRoaXMudGVybXNQcm9wID09PSB0aGlzLnN0YXRlLnR5cGUgKSAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtd2l0aG91dC1sYWJlbCdcblx0XHRcdFx0XHRrZXk9eyAnZmllbGRfdGF4XycgKyB0aGlzLnByb3BzLmZpZWxkTmFtZSArIHRoaXMuaW5kZXggfVxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5wcm9wcy5maWVsZFZhbHVlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMucHJlcGFyZWRUYXhlcyB9XG5cdFx0XHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnMjAwcHgnIH0gfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj47XG5cdH1cblxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpldEZpZWxkc01hcENvbnRyb2w7IiwiZnVuY3Rpb24gSmV0RmllbGRQbGFjZWhvbGRlcigge1xuXHRcdFx0XHRcdFx0XHRcdCAgdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0ICBzdWJ0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHQgIGlzUmVxdWlyZWQgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHQgIH0gKSB7XG5cblx0c3VidGl0bGUgPSBzdWJ0aXRsZS5maWx0ZXIoIHBhcnQgPT4gQm9vbGVhbiggcGFydCApICk7XG5cblx0Y29uc3Qgc3VidGl0bGVTdHIgPSBzdWJ0aXRsZS5qb2luKCAnLCAnICk7XG5cblx0dmFyIGNsYXNzTmFtZSA9ICdqZXQtZmllbGQtcGxhY2Vob2xkZXInO1xuXG5cdGlmICggaXNSZXF1aXJlZCApIHtcblx0XHRjbGFzc05hbWUgKz0gJyBpcy1yZXF1aXJlZCc7XG5cdH1cblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfT5cblx0XHR7IHRpdGxlIH06IHsgc3VidGl0bGVTdHIgfVxuXHQ8L2Rpdj5cblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBKZXRGaWVsZFBsYWNlaG9sZGVyOyIsImNvbnN0IHtcblx0XHQgIFRvb2xCYXJGaWVsZHMsXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXG5cdFx0ICBGaWVsZFdyYXBwZXIsXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcblx0XHQgIHVzZUJsb2NrUHJvcHMsXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcblx0XHQgIFBhbmVsQm9keSxcblx0XHQgIF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5sZXQgeyBJbnB1dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIElucHV0Q29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdElucHV0Q29udHJvbCA9IF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlRWRpdCggcHJvcHMgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBpc1NlbGVjdGVkLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYmxvY2tOYW1lLCBhdHRySGVscCB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLXRvb2xiYXInICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT0naXNfdGltZXN0YW1wJ1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdJcyBUaW1lc3RhbXAnICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmlzX3RpbWVzdGFtcCB9XG5cdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnaXNfdGltZXN0YW1wJyApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGlzX3RpbWVzdGFtcDogQm9vbGVhbiggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGJsb2NrTmFtZSB9YCB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyAnSW5wdXQgdHlwZT1cImRhdGVcIicgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+LFxuXHRdO1xufSIsImltcG9ydCBEYXRlRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0RhdGUgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBEYXRlRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bGFiZWw6ICdEYXRlIEZpZWxkJyxcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiY29uc3Qge1xuXHRUb29sQmFyRmllbGRzLFxuXHRHZW5lcmFsRmllbGRzLFxuXHRBZHZhbmNlZEZpZWxkcyxcblx0RmllbGRXcmFwcGVyLFxuXHRGaWVsZFNldHRpbmdzV3JhcHBlcixcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0VGV4dGFyZWFDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRQYW5lbEJvZHksXG59ID0gd3AuY29tcG9uZW50cztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlVGltZUVkaXQoIHByb3BzICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0aXNTZWxlY3RlZCxcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxuXHR9ID0gcHJvcHM7XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiAoXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHRcdD5cblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1nZW5lcmFsJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2lzX3RpbWVzdGFtcCcgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSXMgVGltZXN0YW1wJyApIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmlzX3RpbWVzdGFtcCB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdpc190aW1lc3RhbXAnICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaXNfdGltZXN0YW1wOiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLWFkdmFuY2VkJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0KSxcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ICdJbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIicgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+XG5cdF07XG59IiwiaW1wb3J0IERhdGVUaW1lRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0RhdGV0aW1lIGZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogRGF0ZVRpbWVFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ0RhdGV0aW1lIEZpZWxkJyxcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiY29uc3Qge1xuXHRHZW5lcmFsRmllbGRzLFxuXHRBZHZhbmNlZEZpZWxkcyxcblx0RmllbGRTZXR0aW5nc1dyYXBwZXJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRQYW5lbEJvZHksXG5cdEJ1dHRvbixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1CcmVha0VkaXQoIHByb3BzICkge1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3Qge1xuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxuXHR9ID0gcHJvcHM7XG5cblx0cmV0dXJuIFtcblx0XHRwcm9wcy5pc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHQ+XG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlciB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdMYWJlbCBvZiBwcm9ncmVzcycgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsX3Byb2dyZXNzIH1cblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdsYWJlbF9wcm9ncmVzcycgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBsYWJlbF9wcm9ncmVzczogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0a2V5PVwicGFnZV9icmVha19kaXNhYmxlZFwiXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnBhZ2VfYnJlYWtfZGlzYWJsZWQgfVxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdEaXNhYmxlZCBtZXNzYWdlJyApIH1cblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdwYWdlX2JyZWFrX2Rpc2FibGVkJyApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHBhZ2VfYnJlYWtfZGlzYWJsZWQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fbmV4dC1wYWdlLXdyYXAnIH0+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdGtleT1cIm5leHRfcGFnZV9idXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX25leHQtcGFnZVwiXG5cdFx0XHRcdD57IGF0dHJpYnV0ZXMubGFiZWwgfHwgJ05leHQnIH08L0J1dHRvbj5cblxuXHRcdFx0XHR7IGF0dHJpYnV0ZXMuYWRkX3ByZXYgJiYgPEJ1dHRvblxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0a2V5PVwicHJldl9wYWdlX2J1dHRvblwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlXCJcblx0XHRcdFx0PnsgYXR0cmlidXRlcy5wcmV2X2xhYmVsIHx8ICdQcmV2JyB9PC9CdXR0b24+IH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRdO1xuXG59IiwiaW1wb3J0IEZvcm1CcmVha0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdGb3JtIEJyZWFrIEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogRm9ybUJyZWFrRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bGFiZWw6ICdOZXh0IFBhZ2UnXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiaW1wb3J0ICogYXMgY2FsY3VsYXRlZCBmcm9tICcuL2NhbGN1bGF0ZWQtZmllbGQnO1xuaW1wb3J0ICogYXMgY2hlY2tib3ggZnJvbSAnLi9jaGVja2JveC1maWVsZCc7XG5pbXBvcnQgKiBhcyBjb25kaXRpb25hbCBmcm9tICcuL2NvbmRpdGlvbmFsLWJsb2NrJztcbmltcG9ydCAqIGFzIGRhdGUgZnJvbSAnLi9kYXRlLWZpZWxkJztcbmltcG9ydCAqIGFzIGRhdGV0aW1lIGZyb20gJy4vZGF0ZXRpbWUtZmllbGQnO1xuaW1wb3J0ICogYXMgZm9ybUJyZWFrIGZyb20gJy4vZm9ybS1icmVhay1maWVsZCc7XG5pbXBvcnQgKiBhcyBncm91cEJyZWFrIGZyb20gJy4vZ3JvdXAtYnJlYWstZmllbGQnO1xuaW1wb3J0ICogYXMgaGVhZGluZyBmcm9tICcuL2hlYWRpbmctZmllbGQnO1xuaW1wb3J0ICogYXMgaGlkZGVuIGZyb20gJy4vaGlkZGVuLWZpZWxkJztcbmltcG9ydCAqIGFzIG1lZGlhIGZyb20gJy4vbWVkaWEtZmllbGQnO1xuaW1wb3J0ICogYXMgbnVtYmVyIGZyb20gJy4vbnVtYmVyLWZpZWxkJztcbmltcG9ydCAqIGFzIHJhZGlvIGZyb20gJy4vcmFkaW8tZmllbGQnO1xuaW1wb3J0ICogYXMgcmFuZ2UgZnJvbSAnLi9yYW5nZS1maWVsZCc7XG5pbXBvcnQgKiBhcyByZXBlYXRlciBmcm9tICcuL3JlcGVhdGVyLWZpZWxkJztcbmltcG9ydCAqIGFzIHNlbGVjdCBmcm9tICcuL3NlbGVjdC1maWVsZCc7XG5pbXBvcnQgKiBhcyBzdWJtaXQgZnJvbSAnLi9zdWJtaXQtZmllbGQnO1xuaW1wb3J0ICogYXMgdGV4dCBmcm9tICcuL3RleHQtZmllbGQnO1xuaW1wb3J0ICogYXMgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XG5pbXBvcnQgKiBhcyB0aW1lIGZyb20gJy4vdGltZS1maWVsZCc7XG5pbXBvcnQgKiBhcyB3eXNpd3lnIGZyb20gJy4vd3lzaXd5Zy1maWVsZCc7XG5pbXBvcnQgKiBhcyB3cmFwcGVycyBmcm9tIFwiLi9ibG9jay13cmFwcGVyc1wiO1xuXG5jb25zdCB7XG5cdFx0ICByZWdpc3RlckJsb2NrVHlwZSxcblx0ICB9ID0gd3AuYmxvY2tzO1xuXG5jb25zdCB7XG5cdFx0ICBhcHBseUZpbHRlcnMsXG5cdCAgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBmaWVsZHMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJywgW1xuXHRjYWxjdWxhdGVkLFxuXHRjaGVja2JveCxcblx0Y29uZGl0aW9uYWwsXG5cdGRhdGV0aW1lLFxuXHRkYXRlLFxuXHRmb3JtQnJlYWssXG5cdGdyb3VwQnJlYWssXG5cdGhlYWRpbmcsXG5cdGhpZGRlbixcblx0bWVkaWEsXG5cdG51bWJlcixcblx0cmFkaW8sXG5cdHJhbmdlLFxuXHRyZXBlYXRlcixcblx0c2VsZWN0LFxuXHRzdWJtaXQsXG5cdHRleHQsXG5cdHRleHRhcmVhLFxuXHR0aW1lLFxuXHR3eXNpd3lnLFxuXSApO1xuXG5jb25zdCByZWdpc3RlckZvcm1GaWVsZCA9IGJsb2NrID0+IHtcblx0aWYgKCAhIGJsb2NrICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCB7IG1ldGFkYXRhLCBzZXR0aW5ncywgbmFtZSB9ID0gYmxvY2s7XG5cblx0c2V0dGluZ3MuZWRpdCA9IHdyYXBwZXJzLndpdGhDdXN0b21Qcm9wcyggYmxvY2sgKTtcblxuXHRyZWdpc3RlckJsb2NrVHlwZSggbmFtZSwge1xuXHRcdC4uLm1ldGFkYXRhLFxuXHRcdC4uLnNldHRpbmdzLFxuXHR9ICk7XG59O1xuXG5mdW5jdGlvbiBzb3J0QmxvY2tzKCB7IHNldHRpbmdzOiB7IHRpdGxlOiBhIH0gfSxcblx0XHRcdFx0XHQgeyBzZXR0aW5nczogeyB0aXRsZTogYiB9IH0gKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGEubG9jYWxlQ29tcGFyZSggYiApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlckZvcm1GaWVsZHMoIGJsb2NrcyA9IGZpZWxkcyApIHtcblx0YmxvY2tzLnNvcnQoIHNvcnRCbG9ja3MgKTtcblx0YmxvY2tzLmZvckVhY2goIGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5maWVsZHMuaGFuZGxlcicsIHJlZ2lzdGVyRm9ybUZpZWxkICkgKTtcbn1cbiIsImNvbnN0IHtcblx0QWR2YW5jZWRGaWVsZHMsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHR1c2VCbG9ja1Byb3BzXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcm91cEJyZWFrRWRpdCggcHJvcHMgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3Qge1xuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxuXHR9ID0gcHJvcHM7XG5cblx0cmV0dXJuIFtcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9scyBrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfT5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2dyb3VwLWJyZWFrJyB9PlxuXHRcdFx0XHQ8c3Bhbj57IF9fKCAnR1JPVVAgQlJFQUsnICkgfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRdO1xufSIsImltcG9ydCBHcm91cEJyZWFrRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0dyb3VwIEJyZWFrIEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogR3JvdXBCcmVha0VkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcblx0ZXhhbXBsZToge31cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCB7XG5cdEdlbmVyYWxGaWVsZHMsXG5cdEFkdmFuY2VkRmllbGRzLFxuXHRGaWVsZFdyYXBwZXIsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHR1c2VCbG9ja1Byb3BzLFxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRpbmdFZGl0KCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0aXNTZWxlY3RlZCxcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XG5cdH0gPSBwcm9wcztcblxuXHRyZXR1cm4gW1xuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PEZpZWxkV3JhcHBlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cblx0XHRcdFx0dmFsdWVJZkVtcHR5TGFiZWw9eyAnSGVhZGluZycgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdF07XG59IiwiaW1wb3J0IEhlYWRpbmdFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnSGVhZGluZyBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IEhlYWRpbmdFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ0hlYWRpbmcgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBNRURJQSA9ICdqZXQtZm9ybXMvbWVkaWEtZmllbGQnO1xuY29uc3QgRk9STV9CUkVBSyA9ICdqZXQtZm9ybXMvZm9ybS1icmVhay1maWVsZCc7XG5jb25zdCBEQVRFID0gJ2pldC1mb3Jtcy9kYXRlLWZpZWxkJztcbmNvbnN0IERBVEVUSU1FID0gJ2pldC1mb3Jtcy9kYXRldGltZS1maWVsZCc7XG5jb25zdCBSQURJTyA9ICdqZXQtZm9ybXMvcmFkaW8tZmllbGQnO1xuY29uc3QgQ0hFQ0tCT1ggPSAnamV0LWZvcm1zL2NoZWNrYm94LWZpZWxkJztcbmNvbnN0IFNFTEVDVCA9ICdqZXQtZm9ybXMvc2VsZWN0LWZpZWxkJztcbmNvbnN0IFJBTkdFID0gJ2pldC1mb3Jtcy9yYW5nZS1maWVsZCc7XG5jb25zdCBSRVBFQVRFUiA9ICdqZXQtZm9ybXMvcmVwZWF0ZXItZmllbGQnO1xuY29uc3QgVEVYVCA9ICdqZXQtZm9ybXMvdGV4dC1maWVsZCc7XG5jb25zdCBUSU1FID0gJ2pldC1mb3Jtcy90aW1lLWZpZWxkJztcblxuXG5jb25zdCBtZXNzYWdlc0NvbmZpZyA9IFtcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2lzX3RpbWVzdGFtcCcsXG5cdFx0dG86IFsgREFURSwgREFURVRJTUUgXSxcblx0XHRtZXNzYWdlOiBfXyggYENoZWNrIHRoaXMgaWYgeW91IHdhbnQgdG8gc2VuZCB2YWx1ZSBvZiB0aGlzIFxuXHRcdGZpZWxkIGFzIHRpbWVzdGFtcCBpbnN0ZWFkIG9mIHBsYWluIGRhdGV0aW1lYCApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0Jyxcblx0XHR0bzogWyBEQVRFIF0sXG5cdFx0bWVzc2FnZTogX18oICdQbGFpbiBkYXRlIHNob3VsZCBiZSBpbiB5eXl5LW1tLWRkIGZvcm1hdCcgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnZGVmYXVsdCcsXG5cdFx0dG86IFsgREFURVRJTUUgXSxcblx0XHRtZXNzYWdlOiBfXyggJ1BsYWluIGRhdGV0aW1lIHNob3VsZCBiZSBpbiB5eXl5LU1NLWRkVGhoOm1tIGZvcm1hdCcgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAncGFnZV9icmVha19kaXNhYmxlZCcsXG5cdFx0dG86IFsgRk9STV9CUkVBSyBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgVGV4dCB0byBzaG93IGlmIG5leHQgcGFnZSBidXR0b24gaXMgZGlzYWJsZWQuIFxuXHRcdEZvciBleGFtcGxlIC0gXCJGaWxsIHJlcXVpcmVkIGZpZWxkc1wiIGV0Yy5gIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2luc2VydF9hdHRhY2htZW50Jyxcblx0XHR0bzogWyBNRURJQSBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgSWYgY2hlY2tlZCBuZXcgYXR0YWNobWVudCB3aWxsIGJlIGluc2VydGVkIGZvciB1cGxvYWRlZCBmaWxlLiBcblx0XHROb3RlOiB3b3JrIG9ubHkgZm9yIGxvZ2dlZC1pbiB1c2VycyFgIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ21heF9maWxlcycsXG5cdFx0dG86IFsgTUVESUEgXSxcblx0XHRtZXNzYWdlOiBfXyggJ0lmIG5vdCBzZXQgYWxsb3cgdG8gdXBsb2FkIDEgZmlsZScgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnbWF4X3NpemUnLFxuXHRcdHRvOiBbIE1FRElBIF0sXG5cdFx0bWVzc2FnZTogX18oICdNYicgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnYWxsb3dlZF9taW1lcycsXG5cdFx0dG86IFsgTUVESUEgXSxcblx0XHRtZXNzYWdlOiBfXyggYElmIG5vIE1JTUUgdHlwZSBzZWxlY3RlZCB3aWxsIGFsbG93IGFsbCB0eXBlcy4gXG5cdFx0SG9sZCBkb3duIHRoZSBDdHJsICh3aW5kb3dzKSAvIENvbW1hbmQgKE1hYykgYnV0dG9uIHRvIHNlbGVjdCBtdWx0aXBsZSBvcHRpb25zLmAgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAndmFsdWVfZnJvbV9tZXRhJyxcblx0XHR0bzogWyBSQURJTywgQ0hFQ0tCT1gsIFNFTEVDVCBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgQnkgZGVmYXVsdCBwb3N0L3Rlcm0gSUQgaXMgdXNlZCBhcyB2YWx1ZS4gSGVyZSB5b3UgY2FuIFxuXHRcdHNldCBtZXRhIGZpZWxkIG5hbWUgdG8gdXNlIGl0cyB2YWx1ZSBhcyBmb3JtIGZpZWxkIHZhbHVlYCApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5Jyxcblx0XHR0bzogWyBSQURJTywgQ0hFQ0tCT1gsIFNFTEVDVCBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgSGVyZSB5b3UgY2FuIHNldCBtZXRhIGZpZWxkIG5hbWUgdG8gdXNlIGl0cyB2YWx1ZSBcblx0XHRhcyBjYWxjdWxhdGVkIHZhbHVlIGZvciBjdXJyZW50IGZvcm0gZmllbGRgIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2dlbmVyYXRvcl9maWVsZCcsXG5cdFx0dG86IFsgUkFESU8sIENIRUNLQk9YLCBTRUxFQ1QgXSxcblx0XHRtZXNzYWdlOiBfXyggYEZvciBOdW1iZXJzIHJhbmdlIGdlbmVyYXRvciBzZXQgZmllbGQgd2l0aCBtYXggcmFuZ2UgdmFsdWVgICksXG5cdFx0Y29uZGl0aW9uczoge1xuXHRcdFx0Z2VuZXJhdG9yX2Z1bmN0aW9uOiAnbnVtX3JhbmdlJ1xuXHRcdH1cblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ3N3aXRjaF9vbl9jaGFuZ2UnLFxuXHRcdHRvOiBbIFNFTEVDVCBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgQ2hlY2sgdGhpcyB0byBzd2l0Y2ggcGFnZSB0byBuZXh0IG9uIGN1cnJlbnQgdmFsdWUgY2hhbmdlYCApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdwcmVmaXhfc3VmZml4Jyxcblx0XHR0bzogWyBSQU5HRSBdLFxuXHRcdG1lc3NhZ2U6IF9fKCAnRm9yIHNwYWNlIGJlZm9yZSBvciBhZnRlciB0ZXh0IHVzZTogJm5ic3A7JyApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdjYWxjX2hpZGRlbicsXG5cdFx0dG86IFsgUkVQRUFURVIgXSxcblx0XHRtZXNzYWdlOiBfXyggJ0NoZWNrIHRoaXMgdG8gaGlkZSBjYWxjdWxhdGVkIGZpZWxkJyApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdpbnB1dF9tYXNrX2RlZmF1bHQnLFxuXHRcdHRvOiBbIFRFWFQgXSxcblx0XHRtZXNzYWdlOiBfXyggYEV4YW1wbGVzOiAoOTk5KSA5OTktOTk5OSAtIHN0YXRpYyBtYXNrLCA5LWF7MSwzfTl7MSwzfSAtIG1hc2sgd2l0aCBkeW5hbWljIHN5bnRheCBcblx0XHREZWZhdWx0IG1hc2tpbmcgZGVmaW5pdGlvbnM6IDkgLSBudW1lcmljLCBhIC0gYWxwaGFiZXRpY2FsLCAqIC0gYWxwaGFudW1lcmljYCApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdpbnB1dF9tYXNrX2RhdGV0aW1lX2xpbmsnLFxuXHRcdHRvOiBbIFRFWFQgXSxcblx0XHRtZXNzYWdlOiBgaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2svYmxvYi81LngvUkVBRE1FX2RhdGUubWRgXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0Jyxcblx0XHR0bzogWyBUSU1FIF0sXG5cdFx0bWVzc2FnZTogX18oICdQbGFpbiB0aW1lIHNob3VsZCBiZSBpbiBoaDptbTpzcyBmb3JtYXQnIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2xhYmVsX3Byb2dyZXNzJyxcblx0XHR0bzogWyBGT1JNX0JSRUFLIF0sXG5cdFx0bWVzc2FnZTogX18oIGBUbyBzZXQvY2hhbmdlIGEgbGFzdCBwcm9ncmVzcyBuYW1lIGFkZCBhIEZvcm0gQnJlYWsgRmllbGQgYXQgdGhlIHZlcnkgZW5kIG9mIHRoZSBmb3JtLmAgKVxuXHR9LFxuXTtcblxuXG5leHBvcnQgeyBtZXNzYWdlc0NvbmZpZyB9OyIsImltcG9ydCBKZXRGaWVsZFBsYWNlaG9sZGVyIGZyb20gJy4uL2NvbnRyb2xzL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IGhpZGRlblZhbHVlcyB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRHZW5lcmFsRmllbGRzLFxuXHRBZHZhbmNlZEZpZWxkcyxcblx0RmllbGRTZXR0aW5nc1dyYXBwZXIsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHR1c2VCbG9ja1Byb3BzLFxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFBhbmVsQm9keSxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaWRkZW5FZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxuXHR9ID0gcHJvcHM7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRyZXR1cm4gW1xuXHRcdGlzU2VsZWN0ZWQgJiYgKFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J2ZpZWxkX3ZhbHVlJ1xuXHRcdFx0XHRcdFx0bGFiZWw9XCJGaWVsZCBWYWx1ZVwiXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF92YWx1ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF92YWx1ZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgaGlkZGVuVmFsdWVzIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHsgWyAncG9zdF9tZXRhJywgJ3VzZXJfbWV0YScgXS5pbmNsdWRlcyggYXR0cmlidXRlcy5maWVsZF92YWx1ZSApICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PVwiaGlkZGVuX3ZhbHVlX2ZpZWxkXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiTWV0YSBGaWVsZCB0byBHZXQgVmFsdWUgRnJvbVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaGlkZGVuX3ZhbHVlX2ZpZWxkIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGhpZGRlbl92YWx1ZV9maWVsZDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdHsgJ3F1ZXJ5X3ZhcicgPT09IGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgJiYgPFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9XCJxdWVyeV92YXJfa2V5XCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiUXVlcnkgVmFyaWFibGUgS2V5XCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5xdWVyeV92YXJfa2V5IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHF1ZXJ5X3Zhcl9rZXk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHR7ICdjdXJyZW50X2RhdGUnID09PSBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PVwiZGF0ZV9mb3JtYXRcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJGb3JtYXRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRhdGVfZm9ybWF0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGRhdGVfZm9ybWF0OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0eyAnbWFudWFsX2lucHV0JyA9PT0gYXR0cmlidXRlcy5maWVsZF92YWx1ZSAmJiA8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT1cImhpZGRlbl92YWx1ZVwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlZhbHVlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5oaWRkZW5fdmFsdWUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaGlkZGVuX3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdCksXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8SmV0RmllbGRQbGFjZWhvbGRlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0RmllbGRQbGFjZWhvbGRlcicgKSB9XG5cdFx0XHRcdHRpdGxlPXsgJ0hpZGRlbiBGaWVsZCcgfVxuXHRcdFx0XHRzdWJ0aXRsZT17IFsgYXR0cmlidXRlcy5uYW1lIF0gfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0XTtcbn07XG4iLCJpbXBvcnQgSGVhZGluZ0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdIaWRkZW4gRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBIZWFkaW5nRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0ZmllbGRfdmFsdWU6ICdwb3N0X2lkJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgVG9vbHMgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgaGlkZGVuVmFsdWVzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXG5cdHtcblx0XHR2YWx1ZTogJ3Bvc3RfaWQnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBJRCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdwb3N0X3RpdGxlJyxcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgVGl0bGUnIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAncG9zdF91cmwnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdC9QYWdlIFVSTCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdwb3N0X21ldGEnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBNZXRhJyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ3VzZXJfaWQnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBJRCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd1c2VyX2VtYWlsJyxcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgRW1haWwnIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAndXNlcl9uYW1lJyxcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgTmFtZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd1c2VyX21ldGEnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBNZXRhJyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2F1dGhvcl9pZCcsXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IEF1dGhvciBJRCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdhdXRob3JfZW1haWwnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBBdXRob3IgRW1haWwnIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnYXV0aG9yX25hbWUnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBBdXRob3IgTmFtZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdxdWVyeV92YXInLFxuXHRcdGxhYmVsOiBfXyggJ1VSTCBRdWVyeSBWYXJpYWJsZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdjdXJyZW50X2RhdGUnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgRGF0ZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdtYW51YWxfaW5wdXQnLFxuXHRcdGxhYmVsOiBfXyggJ01hbnVhbCBJbnB1dCcgKVxuXHR9LFxuXSApO1xuXG5leHBvcnQgeyBoaWRkZW5WYWx1ZXMgfTsiLCJpbXBvcnQge1xuXHR1c2VyQWNjZXNzLFxuXHR2YWx1ZUZvcm1hdHMsXG59IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkV3JhcHBlcixcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIHVzZUJsb2NrUHJvcHMsXG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdFx0ICBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgTnVtYmVyQ29udHJvbCwgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XG59XG5cbmNvbnN0IGxvY2FsaXplRGF0YSA9IHdpbmRvdy5qZXRGb3JtTWVkaWFGaWVsZERhdGE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhRWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J2FsbG93ZWRfdXNlcl9jYXAnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVXNlciBhY2Nlc3MnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsbG93ZWRfdXNlcl9jYXAgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGFsbG93ZWRfdXNlcl9jYXA6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHVzZXJBY2Nlc3MgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0eyAnYW55X3VzZXInICE9PSBhdHRyaWJ1dGVzLmFsbG93ZWRfdXNlcl9jYXAgJiYgPFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0naW5zZXJ0X2F0dGFjaG1lbnQnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW5zZXJ0IGF0dGFjaG1lbnQnICkgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaW5zZXJ0X2F0dGFjaG1lbnQgfVxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnaW5zZXJ0X2F0dGFjaG1lbnQnICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGluc2VydF9hdHRhY2htZW50OiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHR7IGF0dHJpYnV0ZXMuaW5zZXJ0X2F0dGFjaG1lbnQgJiYgPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0ndmFsdWVfZm9ybWF0J1xuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkIHZhbHVlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52YWx1ZV9mb3JtYXQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IHZhbHVlX2Zvcm1hdDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdmFsdWVGb3JtYXRzIH1cblx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0nbWF4X2ZpbGVzJ1xuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heGltdW0gYWxsb3dlZCBmaWxlcyB0byB1cGxvYWQnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnbWF4X2ZpbGVzJyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXhfZmlsZXMgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG1heF9maWxlczogcGFyc2VJbnQoIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heGltdW0gc2l6ZSBpbiBNYicgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRrZXk9J21heF9zaXplJ1xuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnbWF4X3NpemUnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heF9zaXplIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBtYXhfc2l6ZTogcGFyc2VJbnQoIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmllbGQtbWltZS10eXBlcydcblx0XHRcdFx0XHRcdGtleT0nYWxsb3dlZF9taW1lcydcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdBbGxvdyBNSU1FIHR5cGVzJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2FsbG93ZWRfbWltZXMnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsbG93ZWRfbWltZXMgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGFsbG93ZWRfbWltZXM6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGxvY2FsaXplRGF0YS5taW1lX3R5cGVzIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxuXHRcdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQpLFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PEZpZWxkV3JhcHBlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxJbnB1dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrX25ldycgKSB9XG5cdFx0XHRcdFx0dHlwZT17ICdmaWxlJyB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyB0cnVlIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2Pixcblx0XTtcbn0iLCJpbXBvcnQgTWVkaWFFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnTWVkaWEgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBNZWRpYUVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnVGh1bWJuYWlsICYgZmlsZScsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgVG9vbHMgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgdXNlckFjY2VzcyA9IFRvb2xzLndpdGhQbGFjZWhvbGRlciggW1xuXHR7XG5cdFx0dmFsdWU6IFwiYWxsXCIsXG5cdFx0bGFiZWw6IFwiQW55IHJlZ2lzdGVyZWQgdXNlclwiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJ1cGxvYWRfZmlsZXNcIixcblx0XHRsYWJlbDogXCJBbnkgdXNlciwgd2hvIGFsbG93ZWQgdG8gdXBsb2FkIGZpbGVzXCJcblx0fSxcblx0e1xuXHRcdHZhbHVlOiBcImVkaXRfcG9zdHNcIixcblx0XHRsYWJlbDogXCJBbnkgdXNlciwgd2hvIGFsbG93ZWQgdG8gZWRpdCBwb3N0c1wiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJhbnlfdXNlclwiLFxuXHRcdGxhYmVsOiBcIkFueSB1c2VyICggaW5jbC4gR3Vlc3QgKVwiXG5cdH1cbl0gKTtcblxuY29uc3QgdmFsdWVGb3JtYXRzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXG5cdHtcblx0XHRcInZhbHVlXCI6IFwiaWRcIixcblx0XHRcImxhYmVsXCI6IFwiQXR0YWNobWVudCBJRFwiXG5cdH0sXG5cdHtcblx0XHRcInZhbHVlXCI6IFwidXJsXCIsXG5cdFx0XCJsYWJlbFwiOiBcIkF0dGFjaG1lbnQgVVJMXCJcblx0fSxcblx0e1xuXHRcdFwidmFsdWVcIjogXCJib3RoXCIsXG5cdFx0XCJsYWJlbFwiOiBcIkFycmF5IHdpdGggYXR0YWNobWVudCBJRCBhbmQgVVJMXCJcblx0fVxuXSApO1xuXG5leHBvcnQge1xuXHR1c2VyQWNjZXNzLFxuXHR2YWx1ZUZvcm1hdHNcbn07IiwiY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkV3JhcHBlcixcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgUGFuZWxCb2R5LFxuXHRcdCAgX19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IElucHV0Q29udHJvbCwgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XG59XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJFZGl0KCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoIGtleSwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiBuZXdWYWx1ZSA/IHBhcnNlRmxvYXQoIG5ld1ZhbHVlICkgOiBudWxsIH0gKTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluIFZhbHVlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nbWluJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbiB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IGNoYW5nZU51bWJlclZhbHVlKCAnbWluJywgbmV3VmFsdWUgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heCBWYWx1ZScgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRrZXk9J21heCdcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heCcsIG5ld1ZhbHVlICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdGVwJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nc3RlcCdcblx0XHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdGVwIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdzdGVwJywgbmV3VmFsdWUgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9GaWVsZFNldHRpbmdzV3JhcHBlcj5cblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0KSxcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRcdFx0bWluPXsgYXR0cmlidXRlcy5taW4gfHwgMCB9XG5cdFx0XHRcdFx0bWF4PXsgYXR0cmlidXRlcy5tYXggfHwgMTAwMCB9XG5cdFx0XHRcdFx0c3RlcD17IGF0dHJpYnV0ZXMuc3RlcCB8fCAxIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2Pixcblx0XTtcbn0iLCJpbXBvcnQgTnVtYmVyRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ051bWJlciBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IE51bWJlckVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnTnVtYmVyIEZpZWxkJyxcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ0lucHV0IHlvdXIgbnVtYmVyLi4uJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlclwiO1xuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrXCI7XG5cbmNvbnN0IHtcblx0VG9vbEJhckZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkQ29udHJvbCxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFkaW9FZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7IGlzU2VsZWN0ZWQsIGVkaXRQcm9wczogeyB1bmlxS2V5IH0gfSA9IHByb3BzO1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0PEZpZWxkQ29udHJvbFxuXHRcdFx0XHRcdHR5cGU9J2N1c3RvbV9zZXR0aW5ncydcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnY3VzdG9tU2V0dGluZ3NGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TZWxlY3RSYWRpb0NoZWNrPlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJyApIH1cblx0XHRcdFx0c2NyaXB0RGF0YT17IHdpbmRvdy5KZXRGb3JtUmFkaW9GaWVsZERhdGEgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdF07XG59IiwiaW1wb3J0IFJhZGlvRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ1JhZGlvIEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogUmFkaW9FZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnLCAnYmxvY2tOYW1lJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bGFiZWw6ICdSYWRpbyBGaWVsZCcsXG5cdFx0XHRmaWVsZF9vcHRpb25zOiBbXG5cdFx0XHRcdHsgbGFiZWw6ICdGaXJzdCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdFx0eyBsYWJlbDogJ1NlY29uZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdFx0eyBsYWJlbDogJ1RoaXJkIE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCB7XG5cdEdlbmVyYWxGaWVsZHMsXG5cdEFkdmFuY2VkRmllbGRzLFxuXHRGaWVsZFdyYXBwZXIsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHR1c2VCbG9ja1Byb3BzXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0UGFuZWxCb2R5LFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyB1c2VTdGF0ZSB9ID0gd3AuZWxlbWVudDtcblxubGV0IHsgTnVtYmVyQ29udHJvbCwgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmdlRWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCBbIHJhbmdlVmFsdWUsIHNldFJhbmdlVmFsdWUgXSA9IHVzZVN0YXRlKCA1MCApO1xuXG5cdGNvbnN0IHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cblx0fSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0cHJvcHMuaXNTZWxlY3RlZCAmJiAoXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHRcdD5cblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gVmFsdWUnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0a2V5PSdtaW4nXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWluIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtaW46IHBhcnNlSW50KCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXggVmFsdWUnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0a2V5PSdtYXgnXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtYXg6IHBhcnNlSW50KCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdGVwJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nc3RlcCdcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdGVwIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzdGVwOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdwcmVmaXgnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgcHJlZml4JyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5wcmVmaXggfVxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAncHJlZml4X3N1ZmZpeCcgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcHJlZml4OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdzdWZmaXgnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgc3VmZml4JyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWZmaXggfVxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAncHJlZml4X3N1ZmZpeCcgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc3VmZml4OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQpLFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PEZpZWxkV3JhcHBlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cblx0XHRcdFx0d3JhcENsYXNzZXM9eyBbXG5cdFx0XHRcdFx0J3JhbmdlLXdyYXAnXG5cdFx0XHRcdF0gfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyYW5nZS1mbGV4LXdyYXBcIj5cblx0XHRcdFx0XHQ8SW5wdXRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2Vob2xkZXJfYmxvY2snICkgfVxuXHRcdFx0XHRcdFx0dHlwZT17ICdyYW5nZScgfVxuXHRcdFx0XHRcdFx0bWluPXsgYXR0cmlidXRlcy5taW4gfHwgMCB9XG5cdFx0XHRcdFx0XHRtYXg9eyBhdHRyaWJ1dGVzLm1heCB8fCAxMDAgfVxuXHRcdFx0XHRcdFx0c3RlcD17IGF0dHJpYnV0ZXMuc3RlcCB8fCAxIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0UmFuZ2VWYWx1ZSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC12YWx1ZScgfT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC12YWx1ZS1wcmVmaXgnIH0+eyBhdHRyaWJ1dGVzLnByZWZpeCB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4+eyByYW5nZVZhbHVlIH08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtc3VmZml4JyB9PnsgYXR0cmlidXRlcy5zdWZmaXggfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0XTtcbn0iLCJpbXBvcnQgUmFuZ2VFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnUmFuZ2UgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBSYW5nZUVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnUmFuZ2UgRmllbGQnLFxuXHRcdFx0cHJlZml4OiAncHJpY2U6ICcsXG5cdFx0XHRzdWZmaXg6ICckJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImltcG9ydCB7XG5cdGNhbGNUeXBlLFxuXHRtYW5hZ2VJdGVtc0NvdW50XG59IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRUb29sQmFyRmllbGRzLFxuXHRHZW5lcmFsRmllbGRzLFxuXHRBZHZhbmNlZEZpZWxkcyxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0Z2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXG5cdFRvb2xzXG59ID0gSmV0RkJBY3Rpb25zO1xuXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHR1c2VCbG9ja1Byb3BzXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRzZWxlY3QsXG59ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHR1c2VTdGF0ZVxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFRleHRhcmVhQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0UGFuZWxCb2R5LFxuXHRCdXR0b24sXG5cdFBvcG92ZXIsXG5cdEJhc2VDb250cm9sLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcGVhdGVyRWRpdCggcHJvcHMgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3QgWyBzaG93TWFjcm9zLCBzZXRTaG93TWFjcm9zIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cblx0fSA9IHByb3BzO1xuXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCgpO1xuXG5cdGNvbnN0IG1ldGEgPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcblx0Y29uc3QgbGFiZWwgPSBUb29scy5nZXRMYWJlbCggbWV0YSwgYXR0cmlidXRlcyApO1xuXG5cdGNvbnN0IGluc2VydE1hY3JvcyA9ICggbWFjcm9zICkgPT4ge1xuXHRcdGNvbnN0IGZvcm11bGEgPSBhdHRyaWJ1dGVzLmNhbGNfZm9ybXVsYSB8fCAnJztcblx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGNhbGNfZm9ybXVsYTogZm9ybXVsYSArICclRklFTEQ6OicgKyBtYWNyb3MgKyAnJScgfSApO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0PlxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gYXR0cmlidXRlcy5yZXBlYXRlcl9jYWxjX3R5cGUgJiYgPEJ1dHRvblxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQnV0dG9uJyApIH1cblx0XHRcdFx0aXNUZXJ0aWFyeVxuXHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdGljb249eyBzaG93TWFjcm9zID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cblx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFNob3dNYWNyb3MoIHRvZ2dsZSA9PiAhIHRvZ2dsZSApIH1cblx0XHRcdC8+IH1cblx0XHRcdHsgc2hvd01hY3JvcyAmJiA8UG9wb3ZlclxuXHRcdFx0XHRwb3NpdGlvbj17ICdib3R0b20gbGVmdCcgfVxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUG9wb3ZlcicgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgZm9ybUZpZWxkcy5sZW5ndGggJiYgPFBhbmVsQm9keSB0aXRsZT17ICdGb3JtIEZpZWxkcycgfT5cblx0XHRcdFx0XHR7IGZvcm1GaWVsZHMubWFwKCAoIHsgdmFsdWUgfSwgaW5kZXggKSA9PiA8ZGl2XG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnZmllbGRfJyArIHZhbHVlICsgaW5kZXggKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpbnNlcnRNYWNyb3MoIHZhbHVlIClcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHQ+eyAnJUZJRUxEOjonICsgdmFsdWUgKyAnJScgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PiApIH1cblx0XHRcdFx0PC9QYW5lbEJvZHk+IH1cblx0XHRcdDwvUG9wb3Zlcj4gfVxuXHRcdDwvVG9vbEJhckZpZWxkcz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdHRpdGxlPXsgX18oICdGaWVsZCBTZXR0aW5ncycgKSB9XG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nbWFuYWdlX2l0ZW1zX2NvdW50J1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYW5hZ2UgcmVwZWF0ZXIgaXRlbXMgY291bnQnICkgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFuYWdlX2l0ZW1zX2NvdW50IH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWFuYWdlX2l0ZW1zX2NvdW50OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IG1hbmFnZUl0ZW1zQ291bnQgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7ICdtYW51YWxseScgPT09IGF0dHJpYnV0ZXMubWFuYWdlX2l0ZW1zX2NvdW50ICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nbmV3X2l0ZW1fbGFiZWwnXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FkZCBOZXcgSXRlbSBMYWJlbCcgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm5ld19pdGVtX2xhYmVsIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG5ld19pdGVtX2xhYmVsOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+IH1cblx0XHRcdFx0eyAnZHluYW1pY2FsbHknID09PSBhdHRyaWJ1dGVzLm1hbmFnZV9pdGVtc19jb3VudCAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nbWFuYWdlX2l0ZW1zX2NvdW50X2ZpZWxkJ1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdGaWVsZCBpdGVtcyBjb3VudCcgKSB9XG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYW5hZ2VfaXRlbXNfY291bnRfZmllbGQgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBtYW5hZ2VfaXRlbXNfY291bnRfZmllbGQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRcdC8+IH1cblxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0ncmVwZWF0ZXJfY2FsY190eXBlJ1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGUgcmVwZWF0ZXIgcm93IHZhbHVlJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnJlcGVhdGVyX2NhbGNfdHlwZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IHJlcGVhdGVyX2NhbGNfdHlwZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBjYWxjVHlwZSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgJ2N1c3RvbScgPT09IGF0dHJpYnV0ZXMucmVwZWF0ZXJfY2FsY190eXBlICYmIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19yb3ctbm90aWNlXCI+XG5cdFx0XHRcdFx0eyBfXyggJ1NldCBtYXRoIGZvcm11bGEgdG8gY2FsY3VsYXRlIGZpZWxkIHZhbHVlLicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxuXHRcdFx0XHRcdHsgX18oICdGb3IgZXhhbXBsZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxuXHRcdFx0XHRcdCVGSUVMRDo6cXVhbnRpdHklKiVNRVRBOjpwcmljZSU8YnIvPjxici8+XG5cdFx0XHRcdFx0eyBfXyggJ1doZXJlOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxuXHRcdFx0XHRcdC1cblx0XHRcdFx0XHR7IF9fKCAnJUZJRUxEOjpxdWFudGl0eSUgLSBtYWNyb3MgZm9yIGZvcm0gZmllbGQgdmFsdWUuIFwicXVhbnRpdHlcIiAtIGlzIGEgZmllbGQgbmFtZSB0byBnZXQgdmFsdWUgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxuXHRcdFx0XHRcdC1cblx0XHRcdFx0XHR7IF9fKCAnJU1FVEE6OnByaWNlJSAtIG1hY3JvcyBmb3IgY3VycmVudCBwb3N0IG1ldGEgdmFsdWUuIFwicHJpY2VcIiAtIGlzIGEgbWV0YSBrZXkgdG8gZ2V0IHZhbHVlIGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz48YnIvPlxuXHRcdFx0XHQ8L2Rpdj4gfVxuXG5cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICdGcmFnbWVudCcgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxuXHRcdFx0eyAnY3VzdG9tJyA9PT0gYXR0cmlidXRlcy5yZXBlYXRlcl9jYWxjX3R5cGUgJiYgPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybXNfX2NhbGMtZm9ybXVsYS1lZGl0b3JcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy13cmFwXCI+XG5cdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PVwiY2FsY19mb3JtdWxhXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0aW9uIEZvcm11bGEgZm9yIFJlcGVhdGVyJyApIH1cblxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGNhbGNfZm9ybXVsYTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0PEJhc2VDb250cm9sIGtleT17IHVuaXFLZXkoICdyZXBlYXRlci1maWVsZHMtdGl0bGUnICkgfT5cblx0XHRcdFx0PEJhc2VDb250cm9sLlZpc3VhbExhYmVsPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2xhYmVsJyB9PlxuXHRcdFx0XHRcdFx0eyBsYWJlbC5uYW1lIHx8ICdSZXBlYXRlciBmaWVsZCcgfVxuXHRcdFx0XHRcdFx0eyBhdHRyaWJ1dGVzLnJlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19yZXF1aXJlZCcgfT5cblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsLm1hcmsgPyBsYWJlbC5tYXJrIDogJyonIH1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2wuVmlzdWFsTGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwIGpldC1mb3JtLWJ1aWxkZXJfX2Rlc2MnIH1cblx0XHRcdFx0XHQgc3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcgfSB9PnsgYXR0cmlidXRlcy5kZXNjIH08L2Rpdj5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cblx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncmVwZWF0ZXItZmllbGRzJyApIH1cblx0XHRcdFx0cmVuZGVyQXBwZW5kZXI9eyAoKSA9PiAoXG5cdFx0XHRcdFx0PElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIga2V5PXsgdW5pcUtleSggJ0J1dHRvbkJsb2NrQXBwZW5kZXInICkgfS8+XG5cdFx0XHRcdCkgfVxuXHRcdFx0Lz5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScgfVxuXHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHR9IH1cblx0XHRcdD4mdGltZXM7PC9CdXR0b24+XG5cdFx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcwLjdlbScgfSB9Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fYWN0aW9uc1wiPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX25ldycgfVxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0PnsgYXR0cmlidXRlcy5uZXdfaXRlbV9sYWJlbCB8fCAnQWRkIE5ldycgfTwvQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdF07XG59IiwiaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcbmltcG9ydCBSZXBlYXRlckVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IFJlcGVhdGVyU2F2ZSBmcm9tIFwiLi9zYXZlXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnUmVwZWF0ZXIgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBSZXBlYXRlckVkaXQsXG5cdHNhdmU6IFJlcGVhdGVyU2F2ZSxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bGFiZWw6ICdNdWx0aXBsZSBmaWVsZHMnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcblx0XHR9LFxuXHRcdGlubmVyQmxvY2tzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRsYWJlbDogJ0l0ZW0gVGl0bGUnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6ICdqZXQtZm9ybXMvcmFkaW8tZmllbGQnLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0bGFiZWw6ICdJdGVtIFJhZGlvJyxcblx0XHRcdFx0XHRmaWVsZF9vcHRpb25zOiBbXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnRmlyc3QgT3B0aW9uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnU2Vjb25kIE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ1RoaXJkIE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGNhbGNUeXBlID0gW1xuXHR7XG5cdFx0dmFsdWU6ICdkZWZhdWx0Jyxcblx0XHRsYWJlbDogX18oICdEZWZhdWx0IChyZXR1cm5zIHJvd3MgY291bnQpJyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2N1c3RvbScsXG5cdFx0bGFiZWw6IF9fKCAnQ3VzdG9tIChjYWxjdWxhdGUgY3VzdG9tIHZhbHVlIGZvciBlYWNoIHJvdyknIClcblx0fVxuXTtcblxuY29uc3QgbWFuYWdlSXRlbXNDb3VudCA9IFtcblx0e1xuXHRcdHZhbHVlOiAnbWFudWFsbHknLFxuXHRcdGxhYmVsOiBfXyggJ01hbnVhbGx5JyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2R5bmFtaWNhbGx5Jyxcblx0XHRsYWJlbDogX18oICdEeW5hbWljYWxseSAoZ2V0IGNvdW50IGZyb20gZm9ybSBmaWVsZCknIClcblx0fVxuXTtcblxuZXhwb3J0IHtcblx0Y2FsY1R5cGUsXG5cdG1hbmFnZUl0ZW1zQ291bnRcbn07IiwiY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVwZWF0ZXJTYXZlKCBwcm9wcyApIHtcblx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50Lz47XG59O1xuIiwiaW1wb3J0IHsgU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2tcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcblxuY29uc3Qge1xuXHRUb29sQmFyRmllbGRzLFxuXHRHZW5lcmFsRmllbGRzLFxuXHRBZHZhbmNlZEZpZWxkcyxcblx0RmllbGRDb250cm9sLFxuXHRIb3Jpem9udGFsTGluZVxufSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlQmxvY2tQcm9wc1xufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cblx0fSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2sgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT0nc3dpdGNoX29uX2NoYW5nZSdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3dpdGNoIHBhZ2Ugb24gY2hhbmdlJyApIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zd2l0Y2hfb25fY2hhbmdlIH1cblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdzd2l0Y2hfb25fY2hhbmdlJyApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN3aXRjaF9vbl9jaGFuZ2U6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRDb250cm9sXG5cdFx0XHRcdFx0dHlwZT0nY3VzdG9tX3NldHRpbmdzJ1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdjdXN0b21TZXR0aW5nc0ZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1NlbGVjdFJhZGlvQ2hlY2s+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyXG5cdFx0XHRcdHNjcmlwdERhdGE9eyB3aW5kb3cuSmV0Rm9ybVNlbGVjdEZpZWxkRGF0YSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0XTtcbn0iLCJpbXBvcnQgU2VsZWN0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ1NlbGVjdCBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IFNlbGVjdEVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcsICdibG9ja05hbWUnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ1NlbGVjdCBGaWVsZCcsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdFx0ZmllbGRfb3B0aW9uczogW1xuXHRcdFx0XHR7IGxhYmVsOiAnQ2hvb3NlIG9wdGlvbi4uLicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxpc3RGcm9tID0gW1xuXHR7XG5cdFx0XCJ2YWx1ZVwiOiBcIm1hbnVhbF9pbnB1dFwiLFxuXHRcdFwibGFiZWxcIjogX18oICdNYW51YWwgSW5wdXQnIClcblx0fSxcblx0e1xuXHRcdFwidmFsdWVcIjogXCJwb3N0c1wiLFxuXHRcdFwibGFiZWxcIjogX18oICdQb3N0cycgKVxuXHR9LFxuXHR7XG5cdFx0XCJ2YWx1ZVwiOiBcInRlcm1zXCIsXG5cdFx0XCJsYWJlbFwiOiBfXyggJ1Rlcm1zJyApXG5cdH0sXG5cdHtcblx0XHRcInZhbHVlXCI6IFwibWV0YV9maWVsZFwiLFxuXHRcdFwibGFiZWxcIjogX18oICdNZXRhIEZpZWxkJyApXG5cdH0sXG5cdHtcblx0XHRcInZhbHVlXCI6IFwiZ2VuZXJhdGVcIixcblx0XHRcImxhYmVsXCI6IF9fKCAnR2VuZXJhdGUgRHluYW1pY2FsbHknIClcblx0fVxuXTtcblxuZXhwb3J0IHsgbGlzdEZyb20gfTsiLCJjb25zdCB7XG5cdEdlbmVyYWxGaWVsZHMsXG5cdEFkdmFuY2VkRmllbGRzLFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXRFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXkgfVxuXHR9ID0gcHJvcHM7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoIHsgY2xhc3NOYW1lOiAnamV0LWZvcm0tYnVpbGRlcl9fc3VibWl0LXdyYXAnIH0gKTtcblxuXHRyZXR1cm4gW1xuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdGF0dHJzU2V0dGluZ3M9eyB7XG5cdFx0XHRcdFx0bmFtZTogeyBzaG93OiBmYWxzZSB9XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAnc3VibWl0LXdyYXAnICkgfT5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19zdWJtaXQnIH1cblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgYXR0cmlidXRlcy5sYWJlbCB8fCAnU3VibWl0JyB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XTtcbn0iLCJpbXBvcnQgU3VibWl0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ1N1Ym1pdCBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IFN1Ym1pdEVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnU3VibWl0J1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImltcG9ydCB7XG5cdGZpZWxkVHlwZXNMaXN0LFxuXHRtYXNrUGxhY2Vob2xkZXJzTGlzdCxcblx0bWFza1R5cGVzTGlzdCxcblx0bWFza1Zpc2liaWxpdGllc0xpc3QsXG59IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkV3JhcHBlcixcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgVGV4dENvbnRyb2wsXG5cdFx0ICBTZWxlY3RDb250cm9sLFxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcblx0XHQgIFBhbmVsQm9keSxcblx0XHQgIF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuaWYgKCB0eXBlb2YgTnVtYmVyQ29udHJvbCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0KCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBpc1NlbGVjdGVkLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfSxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRjb25zdCBjaGFuZ2VOdW1iZXJWYWx1ZSA9ICgga2V5LCBuZXdWYWx1ZSApID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9ICggbmV3VmFsdWUgJiYgbmV3VmFsdWUgPiAwICkgPyBwYXJzZUludCggbmV3VmFsdWUgKSA6IG51bGw7XG5cblx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IFsga2V5IF06IHZhbHVlIH0gKTtcblx0fVxuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nZmllbGRfdHlwZSdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGQgVHlwZScgKSB9XG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF90eXBlIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfdHlwZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBmaWVsZFR5cGVzTGlzdCB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbiBsZW5ndGggKHN5bWJvbHMpJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0a2V5PSdtaW5sZW5ndGgnXG5cdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbmxlbmd0aCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtaW5sZW5ndGgnLCBuZXdWYWx1ZSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4IGxlbmd0aCAoc3ltYm9scyknICkgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRrZXk9J21heGxlbmd0aCdcblx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4bGVuZ3RoIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heGxlbmd0aCcsIG5ld1ZhbHVlICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT17ICdlbmFibGVfaW5wdXRfbWFzaycgfVxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdTZXQgSW5wdXQgTWFzaycgKSB9XG5cdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuZW5hYmxlX2lucHV0X21hc2sgfVxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ0NoZWNrIHRoaXMgdG8gc2V0dXAgc3BlY2lmaWMgaW5wdXQgZm9ybWF0IGZvciB0aGUgY3VycmVudCBmaWVsZCcgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBlbmFibGVfaW5wdXRfbWFzazogbmV3VmFsIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBhdHRyaWJ1dGVzLmVuYWJsZV9pbnB1dF9tYXNrICYmIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdtYXNrX3R5cGUnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWFzayB0eXBlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXNrX3R5cGUgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1hc2tfdHlwZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbWFza1R5cGVzTGlzdCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0naW5wdXRfbWFzaydcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdJbnB1dCBtYXNrJyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5pbnB1dF9tYXNrIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBpbnB1dF9tYXNrOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHsgKCAhIGF0dHJpYnV0ZXMubWFza190eXBlICkgJiYgPGRpdiBjbGFzc05hbWU9eyAnaGVscC1pbnB1dCcgfT5cblx0XHRcdFx0XHRcdHsgYXR0ckhlbHAoICdpbnB1dF9tYXNrX2RlZmF1bHQnICkgfVxuXHRcdFx0XHRcdDwvZGl2PiB9XG5cblx0XHRcdFx0XHR7ICdkYXRldGltZScgPT09IGF0dHJpYnV0ZXMubWFza190eXBlICYmIDxkaXYgY2xhc3NOYW1lPXsgJ2hlbHAtaW5wdXQnIH0+XG5cdFx0XHRcdFx0XHR7IF9fKCAnRXhhbXBsZXM6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfSBkZC9tbS95eXl5LCBtbS9kZC95eXl5PGJyLz5cblx0XHRcdFx0XHRcdHsgX18oICdNb3JlIGluZm8gLSAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdFx0XHQ8YSBocmVmPXsgYXR0ckhlbHAoICdpbnB1dF9tYXNrX2RhdGV0aW1lX2xpbmsnICkgfVxuXHRcdFx0XHRcdFx0ICAgdGFyZ2V0PSdfYmxhbmsnPnsgX18oICdoZXJlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvYT5cblx0XHRcdFx0XHQ8L2Rpdj4gfVxuXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0nbWFza192aXNpYmlsaXR5J1xuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgdmlzaWJpbGl0eScgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFza192aXNpYmlsaXR5IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtYXNrX3Zpc2liaWxpdHk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tWaXNpYmlsaXRpZXNMaXN0IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J21hc2tfcGxhY2Vob2xkZXInXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWFzayBwbGFjZWhvbGRlcicgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFza19wbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWFza19wbGFjZWhvbGRlcjogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbWFza1BsYWNlaG9sZGVyc0xpc3QgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxuXHRcdFx0PEZpZWxkV3JhcHBlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cblx0XHQ8L2Rpdj4sXG5cdF07XG59O1xuIiwiaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnVGV4dCBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IFRleHRFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ1RleHQgRmllbGQnLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICdJbnB1dCB5b3VyIHRleHQuLi4nLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGZpZWxkVHlwZXNMaXN0ID0gW1xuXHR7XG5cdFx0dmFsdWU6ICd0ZXh0Jyxcblx0XHRsYWJlbDogX18oICdUZXh0JyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2VtYWlsJyxcblx0XHRsYWJlbDogX18oICdFbWFpbCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd1cmwnLFxuXHRcdGxhYmVsOiBfXyggJ1VybCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd0ZWwnLFxuXHRcdGxhYmVsOiBfXyggJ1RlbCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdwYXNzd29yZCcsXG5cdFx0bGFiZWw6IF9fKCAnUGFzc3dvcmQnIClcblx0fSxcbl07XG5cbmNvbnN0IG1hc2tUeXBlc0xpc3QgPSBbXG5cdHtcblx0XHR2YWx1ZTogJycsXG5cdFx0bGFiZWw6IF9fKCAnRGVmYXVsdCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdkYXRldGltZScsXG5cdFx0bGFiZWw6IF9fKCAnRGF0ZXRpbWUnIClcblx0fSxcbl07XG5cbmNvbnN0IG1hc2tWaXNpYmlsaXRpZXNMaXN0ID0gW1xuXHR7XG5cdFx0dmFsdWU6ICdhbHdheXMnLFxuXHRcdGxhYmVsOiBfXyggJ0Fsd2F5cycgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdob3ZlcicsXG5cdFx0bGFiZWw6IF9fKCAnSG92ZXInIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnZm9jdXMnLFxuXHRcdGxhYmVsOiBfXyggJ0ZvY3VzJyApXG5cdH0sXG5dO1xuXG5jb25zdCBtYXNrUGxhY2Vob2xkZXJzTGlzdCA9IFtcblx0e1xuXHRcdHZhbHVlOiAnXycsXG5cdFx0bGFiZWw6ICdfJ1xuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICctJyxcblx0XHRsYWJlbDogJy0nXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJyonLFxuXHRcdGxhYmVsOiAnKidcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAn4oCiJyxcblx0XHRsYWJlbDogJ+KAoidcblx0fSxcbl07XG5cbmV4cG9ydCB7XG5cdGZpZWxkVHlwZXNMaXN0LFxuXHRtYXNrVHlwZXNMaXN0LFxuXHRtYXNrUGxhY2Vob2xkZXJzTGlzdCxcblx0bWFza1Zpc2liaWxpdGllc0xpc3Rcbn07IiwiY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkV3JhcHBlcixcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgVGV4dGFyZWFDb250cm9sLFxuXHRcdCAgUGFuZWxCb2R5LFxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dGFyZWFFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoIGtleSwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSAoIG5ld1ZhbHVlICYmIG5ld1ZhbHVlID4gMCApID8gcGFyc2VJbnQoIG5ld1ZhbHVlICkgOiBudWxsO1xuXHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogdmFsdWUgfSApO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH0+XG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlciB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbiBsZW5ndGggKHN5bWJvbHMpJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0a2V5PSdtaW5sZW5ndGgnXG5cdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbmxlbmd0aCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtaW5sZW5ndGgnLCBuZXdWYWx1ZSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4IGxlbmd0aCAoc3ltYm9scyknICkgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRrZXk9J21heGxlbmd0aCdcblx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4bGVuZ3RoIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heGxlbmd0aCcsIG5ld1ZhbHVlICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFNldHRpbmdzV3JhcHBlcj5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cblx0XHQ8L2Rpdj4sXG5cdF07XG59XG4iLCJpbXBvcnQgVGV4dGFyZWFFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnVGV4dGFyZWEgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBUZXh0YXJlYUVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnVGV4dGFyZWEgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0VG9vbEJhckZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkV3JhcHBlcixcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0X19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZUVkaXQoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRpc1NlbGVjdGVkLFxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cblx0fSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PEZpZWxkV3JhcHBlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgJ0lucHV0IHR5cGU9XCJ0aW1lXCInIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2PlxuXHRdO1xufSIsImltcG9ydCBUaW1lRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ1RpbWUgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBUaW1lRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bGFiZWw6ICdUaW1lIEZpZWxkJyxcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLidcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCB7XG5cdFRvb2xCYXJGaWVsZHMsXG5cdEdlbmVyYWxGaWVsZHMsXG5cdEFkdmFuY2VkRmllbGRzLFxuXHRGaWVsZFdyYXBwZXIsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHR1c2VCbG9ja1Byb3BzXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRUZXh0YXJlYUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV3lzaXd5Z0VkaXQoIHByb3BzICkge1xuXG5cdGNvbnN0IHsgZWRpdFByb3BzOiB7IHVuaXFLZXkgfSwgaXNTZWxlY3RlZCB9ID0gcHJvcHM7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiAoXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHRcdD5cblx0XHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdCksXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+XG5cdF07XG5cbn0iLCJpbXBvcnQgV3lzaXd5Z0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdXeXNpd3lnIEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogV3lzaXd5Z0VkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnV3lzaXd5ZyBGaWVsZCcsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0QmFzZUNvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5cbmNsYXNzIEFjdGlvbk1lc3NhZ2VzIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMuc2V0TWVzc2FnZXMoKTtcblx0fVxuXG5cdHNldE1lc3NhZ2VzKCkge1xuXHRcdGlmICggdGhpcy5wcm9wcy5zZXR0aW5ncyAmJiB0aGlzLnByb3BzLnNldHRpbmdzLm1lc3NhZ2VzICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBtZXNzYWdlcyA9IHt9O1xuXG5cdFx0T2JqZWN0LmVudHJpZXMoIHRoaXMucHJvcHMuc291cmNlLl9fbWVzc2FnZXMgKS5mb3JFYWNoKCAoIFsgdHlwZSwgZGF0YSBdICkgPT4ge1xuXHRcdFx0bWVzc2FnZXNbIHR5cGUgXSA9IGRhdGEudmFsdWU7XG5cdFx0fSApXG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxuXHRcdFx0bWVzc2FnZXM6IG1lc3NhZ2VzXG5cdFx0fSApO1xuXHR9XG5cblx0Z2V0TWVzc2FnZSggbmFtZSApIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHNldHRpbmdzWyAnbWVzc2FnZXMnIF0gJiYgc2V0dGluZ3NbICdtZXNzYWdlcycgXVsgbmFtZSBdICkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzWyAnbWVzc2FnZXMnIF1bIG5hbWUgXTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblxuXHRjaGFuZ2VGaWVsZHNNYXAoIHsgc291cmNlLCBuYW1lRmllbGQsIHZhbHVlIH0gKSB7XG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdHt9LFxuXHRcdFx0dGhpcy5wcm9wcy5zZXR0aW5nc1sgc291cmNlIF0sXG5cdFx0XHR7IFsgbmFtZUZpZWxkIF06IHZhbHVlIH1cblx0XHQpO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFsgc291cmNlIF06IGZpZWxkc01hcFxuXHRcdH0gKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9ICggdmFsdWUsIG5hbWVGaWVsZCApID0+IHtcblx0XHRcdGNvbnN0IHNvdXJjZSA9ICdtZXNzYWdlcyc7XG5cblx0XHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxuXHRcdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gPEJhc2VDb250cm9sXG5cdFx0XHRsYWJlbD17IF9fKCAnTWVzc2FnZXMgU2V0dGluZ3M6JyApIH1cblx0XHRcdGtleT0nbWVzc2FnZXNfc2V0dGluZ3NfZmllbGRzJ1xuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxuXHRcdFx0XHR7IHNldHRpbmdzLm1lc3NhZ2VzICYmIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5tZXNzYWdlcyApXG5cdFx0XHRcdC5tYXAoICggWyB0eXBlLCBkYXRhIF0sIGlkICkgPT4gPGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcblx0XHRcdFx0XHRcdGtleT17ICdtZXNzYWdlXycgKyB0eXBlICsgaWQgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9eyB0eXBlICsgaWQgfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IG1lc3NhZ2VzKCB0eXBlICkubGFiZWwgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0TWVzc2FnZSggdHlwZSApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZU1lc3NhZ2UoIG5ld1ZhbHVlLCB0eXBlICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sPjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25NZXNzYWdlczsiLCJjb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIEZyb21HZW5lcmF0b3JzRmllbGRzKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGVkaXRQcm9wczogeyBhdHRySGVscCB9XG5cdH0gPSBwcm9wcztcblxuXHRyZXR1cm4gPD5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PSdnZW5lcmF0b3JfZnVuY3Rpb24nXG5cdFx0XHRsYWJlbD0nR2VuZXJhdG9yIEZ1bmN0aW9uJ1xuXHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9mdW5jdGlvbiB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX2Z1bmN0aW9uOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHRcdG9wdGlvbnM9eyB3aW5kb3cuSmV0Rm9ybVNlbGVjdEZpZWxkRGF0YS5nZW5lcmF0b3JzX2xpc3QgfVxuXHRcdC8+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9J2dlbmVyYXRvcl9maWVsZCdcblx0XHRcdGxhYmVsPSdGaWVsZCBOYW1lJ1xuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9maWVsZCB9XG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdnZW5lcmF0b3JfZmllbGQnLCBhdHRyaWJ1dGVzICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9maWVsZDogbmV3VmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT0nZnJvbV9nZW5lcmF0b3JfX3ZhbHVlX2Zyb21fbWV0YSdcblx0XHRcdGxhYmVsPSdWYWx1ZSBmcm9tIG1ldGEgZmllbGQnXG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICd2YWx1ZV9mcm9tX21ldGEnICkgfVxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZyb21fZ2VuZXJhdG9yX192YWx1ZV9mcm9tX21ldGEgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZyb21fZ2VuZXJhdG9yX192YWx1ZV9mcm9tX21ldGE6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9J2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknXG5cdFx0XHRsYWJlbD0nQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIG1ldGEgZmllbGQnXG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5JyApIH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5IH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb21HZW5lcmF0b3JzRmllbGRzOyIsImNvbnN0IHtcblx0UmVwZWF0ZXJXaXRoU3RhdGUsXG5cdEFjdGlvbk1vZGFsLFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCBhZGROZXdPcHRpb24gPSB7XG5cdGxhYmVsOiAnJyxcblx0dmFsdWU6ICcnLFxuXHRjYWxjdWxhdGU6ICcnXG59O1xuXG5mdW5jdGlvbiBGcm9tTWFudWFsRmllbGRzKCBwcm9wcyApIHtcblxuXHRjb25zdCBbIHNob3dNYW51YWxNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRjb25zdCB7XG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRhdHRyaWJ1dGVzXG5cdH0gPSBwcm9wcztcblxuXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuXHRcdHNldFNob3dNb2RhbCggdG9nZ2xlID0+ICEgdG9nZ2xlICk7XG5cdH1cblxuXHRjb25zdCBvblVwZGF0ZU9wdGlvbnMgPSBpdGVtcyA9PiB7XG5cdFx0LyogUmVtb3ZlIGVtcHR5IG9wdGlvbnMgKi9cblx0XHRjb25zdCBmaWVsZF9vcHRpb25zID0gaXRlbXMuZmlsdGVyKCBvcHRpb24gPT4ge1xuXHRcdFx0cmV0dXJuICggQm9vbGVhbiggb3B0aW9uLnZhbHVlICkgfHwgQm9vbGVhbiggb3B0aW9uLmNhbGN1bGF0ZSApICk7XG5cdFx0fSApO1xuXG5cdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zIH0gKTtcblx0fVxuXG5cdGNvbnN0IGl0ZW1IZWFkaW5nID0gKCB7IGN1cnJlbnRJdGVtLCBpbmRleCB9ICkgPT4ge1xuXHRcdGNvbnN0IGxlZnRQYXJ0ID0gWyBgIyR7IGluZGV4ICsgMSB9YCBdO1xuXHRcdGNvbnN0IHJpZ2h0UGFydCA9IFtdO1xuXG5cdFx0aWYgKCBjdXJyZW50SXRlbS5sYWJlbCApIHtcblx0XHRcdHJpZ2h0UGFydC5wdXNoKCBgTGFiZWwgWyR7IGN1cnJlbnRJdGVtLmxhYmVsIH1dYCApO1xuXHRcdH1cblx0XHRpZiAoIGN1cnJlbnRJdGVtLnZhbHVlICkge1xuXHRcdFx0cmlnaHRQYXJ0LnB1c2goIGBWYWx1ZSBbJHsgY3VycmVudEl0ZW0udmFsdWUgfV1gICk7XG5cdFx0fVxuXHRcdGlmICggY3VycmVudEl0ZW0uY2FsY3VsYXRlICkge1xuXHRcdFx0cmlnaHRQYXJ0LnB1c2goIGBDYWxjdWxhdGUgWyR7IGN1cnJlbnRJdGVtLmNhbGN1bGF0ZSB9XWAgKTtcblx0XHR9XG5cdFx0bGVmdFBhcnQucHVzaCggcmlnaHRQYXJ0LmpvaW4oICcgfCAnICkgKVxuXG5cdFx0cmV0dXJuIGxlZnRQYXJ0LmpvaW4oICcgJyApO1xuXHR9O1xuXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQga2V5PSdqZXQtZm9ybS9tYW5hZ2UtbWFudWFsLWl0ZW1zJz5cblx0XHQ8QnV0dG9uXG5cdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0b25DbGljaz17IHRvZ2dsZU1vZGFsIH1cblx0XHRcdGljb249eyAnYWRtaW4tdG9vbHMnIH1cblx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxNXB4J1xuXHRcdFx0fSB9XG5cdFx0PlxuXHRcdFx0eyBfXyggJ01hbmFnZSBJdGVtcycgKSB9XG5cdFx0PC9CdXR0b24+XG5cdFx0eyBzaG93TWFudWFsTW9kYWwgJiYgPEFjdGlvbk1vZGFsXG5cdFx0XHR0aXRsZT17ICdFZGl0IE1hbnVhbCBPcHRpb25zJyB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IHRvZ2dsZU1vZGFsIH1cblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XG5cdFx0PlxuXHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiB7XG5cdFx0XHRcdHJldHVybiA8UmVwZWF0ZXJXaXRoU3RhdGVcblx0XHRcdFx0XHRpdGVtcz17IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucyB9XG5cdFx0XHRcdFx0b25TYXZlSXRlbXM9eyBvblVwZGF0ZU9wdGlvbnMgfVxuXHRcdFx0XHRcdG5ld0l0ZW09eyBhZGROZXdPcHRpb24gfVxuXHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XG5cdFx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWw9eyBfXyggJ0FkZCBOZXcgT3B0aW9uJyApIH1cblx0XHRcdFx0XHRJdGVtSGVhZGluZz17IGl0ZW1IZWFkaW5nIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgKCB7IGN1cnJlbnRJdGVtLCBjaGFuZ2VDdXJyZW50SXRlbSB9ICkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGtleT0nbWFudWFsX2xhYmVsJ1xuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdMYWJlbCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5sYWJlbCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBsYWJlbDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRrZXk9J21hbnVhbF92YWx1ZSdcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHZhbHVlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGtleT0nbWFudWFsX2NhbGN1bGF0ZSdcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlJyApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmNhbGN1bGF0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgY2FsY3VsYXRlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz47XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdDwvUmVwZWF0ZXJXaXRoU3RhdGU+XG5cdFx0XHR9IH1cblx0XHQ8L0FjdGlvbk1vZGFsPiB9XG5cdDwvUmVhY3QuRnJhZ21lbnQ+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tTWFudWFsRmllbGRzOyIsImltcG9ydCB7IGdldFNlbGVjdFNvdXJjZSB9IGZyb20gXCIuL3NvdXJjZXNcIjtcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5mdW5jdGlvbiBGcm9tUG9zdFRlcm1zRmllbGRzKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGVkaXRQcm9wczogeyBhdHRySGVscCB9XG5cdH0gPSBwcm9wcztcblxuXHRyZXR1cm4gPD5cblx0XHR7IGdldFNlbGVjdFNvdXJjZSggcHJvcHMgKSB9XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9J3ZhbHVlX2Zyb21fa2V5J1xuXHRcdFx0bGFiZWw9eyBfXyggJ1ZhbHVlIGZyb20gbWV0YSBmaWVsZCcgKSB9XG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudmFsdWVfZnJvbV9rZXkgfVxuXHRcdFx0aGVscD17IGF0dHJIZWxwKCAndmFsdWVfZnJvbV9tZXRhJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyB2YWx1ZV9mcm9tX2tleTogbmV3VmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT0nY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleSdcblx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGVkIHZhbHVlIGZyb20gbWV0YSBmaWVsZCcgKSB9XG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleSB9XG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5JyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHQ8Lz47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbVBvc3RUZXJtc0ZpZWxkczsiLCJpbXBvcnQgeyBsaXN0RnJvbSB9IGZyb20gXCIuLi8uLi9ibG9ja3Mvc2VsZWN0LXJhZGlvLWNoZWtjLW9wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRGaWVsZFdyYXBwZXIsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdENoZWNrYm94Q29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0UmFkaW9Db250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IERFTElNSVRFUiA9ICcgLSAnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXIoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRlZGl0UHJvcHM6IHsgYmxvY2tOYW1lLCB1bmlxS2V5IH0sXG5cdFx0c2NyaXB0RGF0YSxcblx0XHRhdHRyaWJ1dGVzXG5cdH0gPSBwcm9wcztcblxuXHRjb25zdCBnZXRDaGVja2JveCA9ICggbGFiZWwsIGluZGV4ID0gMSApID0+IHtcblx0XHRyZXR1cm4gPENoZWNrYm94Q29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAgY2hlY2tib3hlcy13cmFwJyB9XG5cdFx0XHRrZXk9eyBgY2hlY2tfcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGxhYmVsICsgaW5kZXggfWAgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCB9XG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcblx0XHRcdH0gfVxuXHRcdC8+O1xuXHR9XG5cblx0Y29uc3QgZ2V0U2VsZWN0ID0gKCB7IG9wdGlvbnMsIGluZGV4IH0gKSA9PiB7XG5cdFx0cmV0dXJuIDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9eyBgc2VsZWN0X3BsYWNlX2hvbGRlcl9ibG9ja18keyBhdHRyaWJ1dGVzLm5hbWUgKyBpbmRleCB9YCB9XG5cdFx0XHQvL2xhYmVsPXsgYXR0cmlidXRlcy5sYWJlbCB9XG5cdFx0XHRvcHRpb25zPXsgb3B0aW9ucyB9XG5cdFx0XHQvL2hlbHA9eyBhdHRyaWJ1dGVzLmRlc2MgfVxuXHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHR9IH1cblx0XHQvPjtcblx0fVxuXG5cdGNvbnN0IGdldFJhZGlvID0gKCB7IG9wdGlvbnMsIGxhYmVsLCBpbmRleCB9ICkgPT4ge1xuXHRcdHJldHVybiA8UmFkaW9Db250cm9sXG5cdFx0XHRrZXk9eyBgcmFkaW9fcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGxhYmVsICsgaW5kZXggfWAgfVxuXHRcdFx0Ly9sYWJlbD17IGF0dHJpYnV0ZXMubGFiZWwgfVxuXHRcdFx0b3B0aW9ucz17IG9wdGlvbnMgfVxuXHRcdFx0Ly9oZWxwPXsgYXR0cmlidXRlcy5kZXNjIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0fSB9XG5cdFx0Lz47XG5cdH1cblxuXHRjb25zdCBnZXRQcm9wID0gKCBvZiwgcHJvcE5hbWUsIGlmRW1wdHkgPSAnJyApID0+IHtcblx0XHRpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2Ygb2YgJiYgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBvZlsgcHJvcE5hbWUgXSApIHtcblx0XHRcdHJldHVybiBvZlsgcHJvcE5hbWUgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaWZFbXB0eTtcblx0fTtcblxuXHRjb25zdCBnZXRMYWJlbFByb3AgPSBvZiA9PiB7XG5cdFx0cmV0dXJuIGdldFByb3AoIG9mLCAnbGFiZWwnICk7XG5cdH07XG5cblx0Y29uc3QgZ2V0RnVsbExhYmVsID0gKCkgPT4ge1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0ZmllbGRfb3B0aW9uc19mcm9tLFxuXHRcdFx0ZmllbGRfb3B0aW9uc19wb3N0X3R5cGUsXG5cdFx0XHRmaWVsZF9vcHRpb25zX3RheCxcblx0XHRcdGZpZWxkX29wdGlvbnNfa2V5LFxuXHRcdFx0Z2VuZXJhdG9yX2Z1bmN0aW9uLFxuXHRcdFx0Z2VuZXJhdG9yX2ZpZWxkXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRsZXQgZnVsbF9sYWJlbCA9IFtdO1xuXHRcdGxldCB2YWx1ZSA9IFtdO1xuXHRcdHN3aXRjaCAoIGZpZWxkX29wdGlvbnNfZnJvbSApIHtcblx0XHRcdGNhc2UgJ3Bvc3RzJzpcblx0XHRcdFx0aWYgKCBmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZSApIHtcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBnZXRMYWJlbFByb3AoIHNjcmlwdERhdGEucG9zdF90eXBlc19saXN0LmZpbmQoXG5cdFx0XHRcdFx0XHRvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZVxuXHRcdFx0XHRcdCkgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXJtcyc6XG5cdFx0XHRcdGlmICggZmllbGRfb3B0aW9uc190YXggKSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCBzY3JpcHREYXRhLnRheG9ub21pZXNfbGlzdC5maW5kKFxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc190YXhcblx0XHRcdFx0XHQpICkgKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtZXRhX2ZpZWxkJzpcblx0XHRcdFx0aWYgKCBmaWVsZF9vcHRpb25zX2tleSApIHtcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBmaWVsZF9vcHRpb25zX2tleSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdnZW5lcmF0ZSc6XG5cdFx0XHRcdGlmICggZ2VuZXJhdG9yX2Z1bmN0aW9uICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdldExhYmVsUHJvcCggc2NyaXB0RGF0YS5nZW5lcmF0b3JzX2xpc3QuZmluZChcblx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGdlbmVyYXRvcl9mdW5jdGlvblxuXHRcdFx0XHRcdCkgKSApXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBnZW5lcmF0b3JfZmllbGQgKSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2VuZXJhdG9yX2ZpZWxkICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdFx0ZnVsbF9sYWJlbC5wdXNoKCBnZXRMYWJlbFByb3AoIGxpc3RGcm9tLmZpbmQoIG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZpZWxkX29wdGlvbnNfZnJvbSApICkgKTtcblxuXHRcdGlmICggdmFsdWUubGVuZ3RoICkge1xuXHRcdFx0ZnVsbF9sYWJlbC5wdXNoKCB2YWx1ZS5qb2luKCBERUxJTUlURVIgKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmdWxsX2xhYmVsLmpvaW4oIERFTElNSVRFUiApO1xuXHR9XG5cblx0Y29uc3QgZ2V0TWFudWFsRmllbGQgPSAoIGxhYmVsID0gJycgKSA9PiB7XG5cdFx0aWYgKCBibG9ja05hbWUuaW5jbHVkZXMoICdjaGVja2JveCcgKSApIHtcblx0XHRcdGlmICggbGFiZWwgKSB7XG5cdFx0XHRcdHJldHVybiBnZXRDaGVja2JveCggbGFiZWwgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubWFwKCAoIHsgbGFiZWw6IGNoZWNrTGFiZWwgfSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdHJldHVybiBnZXRDaGVja2JveCggY2hlY2tMYWJlbCwgaW5kZXggKVxuXHRcdFx0fSApO1xuXG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBibG9ja05hbWUuaW5jbHVkZXMoICdzZWxlY3QnICkgKSB7XG5cdFx0XHRpZiAoIGxhYmVsICkge1xuXHRcdFx0XHRyZXR1cm4gZ2V0U2VsZWN0KCB7XG5cdFx0XHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdFx0XHRvcHRpb25zOiBbIHsgbGFiZWwgfSBdXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcblx0XHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdFx0b3B0aW9uczogYXR0cmlidXRlcy5maWVsZF9vcHRpb25zXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBibG9ja05hbWUuaW5jbHVkZXMoICdyYWRpbycgKSApIHtcblx0XHRcdGlmICggbGFiZWwgKSB7XG5cdFx0XHRcdHJldHVybiBnZXRSYWRpbygge1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0b3B0aW9uczogWyB7IGxhYmVsIH0gXVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZ2V0UmFkaW8oIHtcblx0XHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdFx0b3B0aW9uczogYXR0cmlidXRlcy5maWVsZF9vcHRpb25zXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIDxGaWVsZFdyYXBwZXJcblx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1maWVsZC13cmFwcGVyJyB9XG5cdFx0eyAuLi5wcm9wcyB9XG5cdD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZHMtZ3JvdXAnIH0+XG5cdFx0XHR7ICggJ21hbnVhbF9pbnB1dCcgIT09IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc19mcm9tIHx8ICEgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zLmxlbmd0aCApICYmXG5cdFx0XHRnZXRNYW51YWxGaWVsZCggZ2V0RnVsbExhYmVsKCBzY3JpcHREYXRhLCBhdHRyaWJ1dGVzICkgKSB8fCBudWxsXG5cdFx0XHR9XG5cdFx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfZnJvbSAmJiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubGVuZ3RoICYmXG5cdFx0XHRnZXRNYW51YWxGaWVsZCgpIHx8IG51bGxcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0PC9GaWVsZFdyYXBwZXI+O1xuXG5cbn1cblxuXG4iLCJpbXBvcnQgeyBsaXN0RnJvbSB9IGZyb20gXCIuLi8uLi9ibG9ja3Mvc2VsZWN0LXJhZGlvLWNoZWtjLW9wdGlvbnNcIjtcbmltcG9ydCBGcm9tTWFudWFsRmllbGRzIGZyb20gXCIuL2Zyb20tbWFudWFsLWZpZWxkc1wiO1xuaW1wb3J0IEZyb21Qb3N0VGVybXNGaWVsZHMgZnJvbSBcIi4vZnJvbS1wb3N0LXRlcm1zLWZpZWxkc1wiO1xuaW1wb3J0IEZyb21HZW5lcmF0b3JzRmllbGRzIGZyb20gXCIuL2Zyb20tZ2VuZXJhdG9ycy1maWVsZHNcIjtcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5mdW5jdGlvbiBTZWxlY3RSYWRpb0NoZWNrKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0Y2hpbGRyZW4gPSBbXVxuXHR9ID0gcHJvcHM7XG5cblx0Y29uc3QgeyBmaWVsZF9vcHRpb25zX2Zyb20gfSA9IGF0dHJpYnV0ZXM7XG5cblx0cmV0dXJuIGlzU2VsZWN0ZWQgJiYgPGRpdiBjbGFzc05hbWU9J2luc2lkZS1ibG9jay1vcHRpb25zJz5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PSdmaWVsZF9vcHRpb25zX2Zyb20nXG5cdFx0XHRsYWJlbD0nRmlsbCBPcHRpb25zIEZyb20nXG5cdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHR2YWx1ZT17IGZpZWxkX29wdGlvbnNfZnJvbSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfb3B0aW9uc19mcm9tOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHRcdG9wdGlvbnM9eyBsaXN0RnJvbSB9XG5cdFx0Lz5cblx0XHR7ICdtYW51YWxfaW5wdXQnID09PSBmaWVsZF9vcHRpb25zX2Zyb20gJiYgPEZyb21NYW51YWxGaWVsZHNcblx0XHRcdGtleT0nZnJvbV9tYW51YWwnXG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPiB9XG5cdFx0eyBbICdwb3N0cycsICd0ZXJtcycgXS5pbmNsdWRlcyggZmllbGRfb3B0aW9uc19mcm9tICkgJiYgPEZyb21Qb3N0VGVybXNGaWVsZHNcblx0XHRcdGtleT0nZm9ybV9wb3N0c190ZXJtcydcblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+IH1cblx0XHR7ICdtZXRhX2ZpZWxkJyA9PT0gZmllbGRfb3B0aW9uc19mcm9tICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PSdmaWVsZF9vcHRpb25zX2tleSdcblx0XHRcdGxhYmVsPSdNZXRhIGZpZWxkIHRvIGdldCB2YWx1ZSBmcm9tJ1xuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfa2V5IH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zX2tleTogbmV3VmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHRcdHsgJ2dlbmVyYXRlJyA9PT0gZmllbGRfb3B0aW9uc19mcm9tICYmIDxGcm9tR2VuZXJhdG9yc0ZpZWxkc1xuXHRcdFx0a2V5PSdmb3JtX2dlbmVyYXRvcnMnXG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPiB9XG5cdFx0eyBjaGlsZHJlbiB9XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0UmFkaW9DaGVjazsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgbG9jYWxpemVEYXRhID0gd2luZG93LkpldEZvcm1TZWxlY3RGaWVsZERhdGE7XG5cblxuY29uc3Qge1xuXHRTZWxlY3RDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHNvdXJjZXMgPSB7XG5cdHRlcm1zOiB7XG5cdFx0bGFiZWw6IF9fKCAnVGF4b25vbXknICksXG5cdFx0YXR0cjogJ2ZpZWxkX29wdGlvbnNfdGF4Jyxcblx0XHRvcHRpb25zOiBsb2NhbGl6ZURhdGEudGF4b25vbWllc19saXN0XG5cdH0sXG5cdHBvc3RzOiB7XG5cdFx0bGFiZWw6IF9fKCAnUG9zdCBUeXBlJyApLFxuXHRcdGF0dHI6ICdmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZScsXG5cdFx0b3B0aW9uczogbG9jYWxpemVEYXRhLnBvc3RfdHlwZXNfbGlzdFxuXHR9XG59O1xuXG5jb25zdCBnZXRTZWxlY3RTb3VyY2UgPSAoIHByb3BzICkgPT4ge1xuXHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcblxuXHRpZiAoICEgc291cmNlc1sgZmllbGRfb3B0aW9uc19mcm9tIF0gJiYgISBzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRjb25zdCBzb3VyY2UgPSBzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXTtcblxuXHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRsYWJlbD17IHNvdXJjZS5sYWJlbCB9XG5cdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdHZhbHVlPXsgYXR0cmlidXRlc1sgc291cmNlLmF0dHIgXSB9XG5cdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IFsgc291cmNlLmF0dHIgXTogbmV3VmFsdWUgfSApO1xuXHRcdH0gfVxuXHRcdG9wdGlvbnM9eyBzb3VyY2Uub3B0aW9ucyB9XG5cdC8+XG59O1xuXG5leHBvcnQgeyBnZXRTZWxlY3RTb3VyY2UgfTsiLCJjb25zdCB7XG5cdEdsb2JhbEZpZWxkLFxuXHRBdmFpbGFibGVNYXBGaWVsZFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyB3aXRoUHJlc2V0IH0gPSBKZXRGQkFjdGlvbnM7XG5cbmZ1bmN0aW9uIEdlbmVyYWxQcmVzZXQoIHtcblx0XHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRcdGF2YWlsYWJsZUZpZWxkcyxcblx0XHRcdFx0XHRcdFx0aXNNYXBGaWVsZFZpc2libGUsXG5cdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UsXG5cdFx0XHRcdFx0XHR9ICkge1xuXHRjb25zdCBwb3NpdGlvbiA9ICdnZW5lcmFsJztcblxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBuZXdWYWx1ZSwgbmFtZSApID0+IHtcblx0XHRvbkNoYW5nZSggeyAuLi52YWx1ZSwgWyBuYW1lIF06IG5ld1ZhbHVlIH0gKTtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5nbG9iYWxfZmllbGRzLm1hcCggKCBkYXRhLCBpbmRleCApID0+IDxHbG9iYWxGaWVsZFxuXHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxuXHRcdFx0dmFsdWU9eyB2YWx1ZSB9XG5cdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdGRhdGE9eyBkYXRhIH1cblx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxuXHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxuXHRcdC8+ICkgfVxuXG5cdFx0eyB2YWx1ZS5mcm9tICYmIChcblx0XHRcdGF2YWlsYWJsZUZpZWxkcy5tYXAoICggZmllbGQsIGluZGV4ICkgPT4gPEF2YWlsYWJsZU1hcEZpZWxkXG5cdFx0XHRcdGtleT17IGZpZWxkICsgaW5kZXggfVxuXHRcdFx0XHRmaWVsZHNNYXA9eyB2YWx1ZS5maWVsZHNfbWFwIH1cblx0XHRcdFx0ZmllbGQ9eyBmaWVsZCB9XG5cdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRcdGlzTWFwRmllbGRWaXNpYmxlPXsgaXNNYXBGaWVsZFZpc2libGUgfVxuXHRcdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdC8+IClcblx0XHQpIH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0KCBHZW5lcmFsUHJlc2V0ICk7IiwiaW1wb3J0IEludGVncmF0aW9uQ29tcG9uZW50IGZyb20gXCIuL2ludGVncmF0aW9uLWNvbXBvbmVudFwiO1xuXG5jb25zdCB7XG5cdGFkZEFjdGlvbixcblx0Z2xvYmFsVGFiXG59ID0gSmV0RkJBY3Rpb25zO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRCYXNlQ29udHJvbCxcblx0QnV0dG9uLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHR1c2VTdGF0ZVxufSA9IHdwLmVsZW1lbnQ7XG5cbmFkZEFjdGlvbiggJ2FjdGl2ZV9jYW1wYWlnbicsIGNsYXNzIEFjdGl2ZUNhbXBhaWduQWN0aW9uIGV4dGVuZHMgSW50ZWdyYXRpb25Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMudmFsaWRhdGVBY3RpdmVDYW1wYWlnbkRhdGEgPSB0aGlzLnZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhLmJpbmQoIHRoaXMgKTtcblx0XHR0aGlzLmdldEFjdGl2ZUNhbXBhaWduRGF0YSA9IHRoaXMuZ2V0QWN0aXZlQ2FtcGFpZ25EYXRhLmJpbmQoIHRoaXMgKTtcblx0fVxuXG5cdHZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhKCBhcGlfa2V5ID0gJycsIGFwaV91cmwgPSAnJyApIHtcblx0XHR0aGlzLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnbG9hZGluZycgXSB9ICk7XG5cdFx0dGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEoIHRydWUsIHsgYXBpX2tleSwgYXBpX3VybCB9ICk7XG5cdH1cblxuXHRnZXRBY3RpdmVDYW1wYWlnbkRhdGEoIGlzVmFsaWRhdGUgPSBmYWxzZSwgeyBhcGlfa2V5ID0gJycsIGFwaV91cmwgPSAnJyB9ICkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxuXHRcdFx0bGlzdHMgPSBbXSxcblx0XHRcdGVuZHBvaW50ID0gJy9hZG1pbi9hcGkucGhwP2FwaV9hY3Rpb249bGlzdF9saXN0JztcblxuXHRcdGNvbnN0IHVybCA9IGFwaV91cmwgKyBlbmRwb2ludCArICcmYXBpX2tleT0nICsgYXBpX2tleSArICcmaWRzPWFsbCZhcGlfb3V0cHV0PWpzb24nO1xuXG5cdFx0alF1ZXJ5LmdldEpTT04oIHVybCApXG5cdFx0LnN1Y2Nlc3MoIGZ1bmN0aW9uICggZGF0YSApIHtcblx0XHRcdGlmICggdW5kZWZpbmVkICE9PSBkYXRhLnJlc3VsdF9jb2RlICYmIGRhdGEucmVzdWx0X2NvZGUgKSB7XG5cblx0XHRcdFx0Zm9yICggdmFyIHByb3AgaW4gZGF0YSApIHtcblx0XHRcdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gZGF0YVsgcHJvcCBdLmlkICkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpc3RzLnB1c2goIHtcblx0XHRcdFx0XHRcdHZhbHVlOiBkYXRhWyBwcm9wIF0uaWQsXG5cdFx0XHRcdFx0XHRsYWJlbDogZGF0YVsgcHJvcCBdLm5hbWVcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggbGlzdHMsICdkYXRhJyApO1xuXHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggdHJ1ZSwgJ2lzVmFsaWRBUEknICk7XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdpcy12YWxpZCcgXSB9ICk7XG5cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtaW52YWxpZCcgXSB9ICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LmVycm9yKCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xuXHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLWludmFsaWQnIF0gfSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGdldExpc3RzKCkge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkUGxhY2Vob2xkZXJGb3JTZWxlY3QoIHNldHRpbmdzLmRhdGEgKTtcblx0XHR9XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblxuXHRmb3JtYXRFbnRyaWVzQXJyYXkoIGVudHJpZXMgPSBbXSwgaXNOZWVkUGxhY2Vob2xkZXIgPSB0cnVlICkge1xuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0ge1xuXHRcdFx0bGFiZWw6ICctLSdcblx0XHR9O1xuXHRcdGlmICggISBlbnRyaWVzICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIGlzTmVlZFBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciwgLi4ub3B0aW9ucyBdIDogb3B0aW9ucztcblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ2FjdGl2ZS1jYW1wYWlnbi10YWInIH0gKVxuXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0XHRyZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQga2V5PVwiYWN0aXZlY2FtcGFpZ25cIj5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGtleT17ICd1c2VfZ2xvYmFsJyB9XG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2VfZ2xvYmFsJyApIH1cblx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHVzZV9nbG9iYWwgPT4ge1xuXHRcdFx0XHRcdHRoaXMub25DaGFuZ2VTZXR0aW5nKCBCb29sZWFuKCB1c2VfZ2xvYmFsICksICd1c2VfZ2xvYmFsJyApXG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYXBpX2RhdGEnICkgfVxuXHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXdpdGgtYnV0dG9uIHdpdGgtd3JhcCdcblx0XHRcdFx0a2V5PXsgJ2FjdGl2ZWNhbXBhaWduX2lucHV0X2tleScgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J2FwaV91cmwnXG5cdFx0XHRcdFx0aGVscD17IGxhYmVsKCAnYXBpX3VybCcgKSB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhcidcblx0XHRcdFx0XHRkaXNhYmxlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0PyBjdXJyZW50VGFiLmFwaV91cmxcblx0XHRcdFx0XHRcdDogc2V0dGluZ3MuYXBpX3VybFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnYXBpX3VybCcgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nYXBpX2tleSdcblx0XHRcdFx0XHRoZWxwPXsgbGFiZWwoICdhcGlfa2V5JyApIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyJ1xuXHRcdFx0XHRcdGRpc2FibGVkPXsgc2V0dGluZ3MudXNlX2dsb2JhbCB9XG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy51c2VfZ2xvYmFsXG5cdFx0XHRcdFx0XHQ/IGN1cnJlbnRUYWIuYXBpX2tleVxuXHRcdFx0XHRcdFx0OiBzZXR0aW5ncy5hcGlfa2V5XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfa2V5JyApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAoIHNldHRpbmdzLmFwaV9rZXkgJiYgc2V0dGluZ3MuYXBpX3VybCApICYmIDxCdXR0b25cblx0XHRcdFx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxuXHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXR0aW5ncy51c2VfZ2xvYmFsXG5cdFx0XHRcdFx0XHRcdD8gdGhpcy52YWxpZGF0ZUFjdGl2ZUNhbXBhaWduRGF0YSggY3VycmVudFRhYi5hcGlfa2V5LCBjdXJyZW50VGFiLmFwaV91cmwgKVxuXHRcdFx0XHRcdFx0XHQ6IHRoaXMudmFsaWRhdGVBY3RpdmVDYW1wYWlnbkRhdGEoIHNldHRpbmdzLmFwaV9rZXksIHNldHRpbmdzLmFwaV91cmwgKVxuXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS5jbGFzc05hbWUuam9pbiggJyAnICkgKyAnIGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxuXHRcdFx0XHRcdHsgbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cblx0XHRcdFx0PC9CdXR0b24+IH1cblx0XHRcdFx0PGRpdi8+XG5cdFx0XHRcdDxkaXY+eyBoZWxwKCAnYXBpX2tleV9saW5rX3ByZWZpeCcgKSB9IDxhXG5cdFx0XHRcdFx0aHJlZj17IGhlbHAoICdhcGlfa2V5X2xpbmsnICkgfT57IGhlbHAoICdhcGlfa2V5X2xpbmtfc3VmZml4JyApIH08L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdHsgc2V0dGluZ3MuaXNWYWxpZEFQSSAmJiA8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdGtleT0nYWN0aXZlY2FtcGFpZ25faW5wdXRfa2V5J1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0naW5wdXQtd2l0aC1idXR0b24nXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX3NlbGVjdF9saXN0cydcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsaXN0X2lkJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MubGlzdF9pZCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnbGlzdF9pZCcgKSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEoIGZhbHNlLCBjdXJyZW50VGFiIClcblx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuZ2V0QWN0aXZlQ2FtcGFpZ25EYXRhKCBmYWxzZSwgc2V0dGluZ3MgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyBsYWJlbCggJ3VwZGF0ZV9saXN0X2lkcycgKSB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nYWN0aXZlY2FtcGFpZ25fdGFncydcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndGFncycgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy50YWdzIH1cblx0XHRcdFx0XHRoZWxwPXsgaGVscCggJ3RhZ3MnICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxuXHRcdFx0XHRcdGtleT0nYWN0aXZlY2FtcGFpZ25fZmllbGRzX21hcCdcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxuXHRcdFx0XHRcdFx0eyBPYmplY3QuZW50cmllcyggc291cmNlLmFjdGl2ZWNhbXBhaWduX2ZpZWxkcyApLm1hcChcblx0XHRcdFx0XHRcdFx0KCBbIGZpZWxkTmFtZSwgZmllbGRMYWJlbCBdLCBpbmRleCApID0+IDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxuXHRcdFx0XHRcdFx0XHRcdGtleT17ICd1c2VyX21ldGFfJyArIGZpZWxkTmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGZpZWxkTmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgZmllbGRMYWJlbCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGREZWZhdWx0KCBmaWVsZE5hbWUgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHRoaXMub25DaGFuZ2VGaWVsZE1hcCggdmFsdWUsIGZpZWxkTmFtZSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gKSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cblxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICk7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHR9XG59ICk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xuXG5cdGFkZFBsYWNlaG9sZGVyRm9yU2VsZWN0KCBhcnJheSwgbGFiZWwgPSAnLS0nICkge1xuXHRcdHJldHVybiBbXG5cdFx0XHR7IGxhYmVsIH0sXG5cdFx0XHQuLi5hcnJheVxuXHRcdF07XG5cdH1cblxuXHRvbkNoYW5nZVNldHRpbmcoIHZhbHVlLCBrZXkgKSB7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFsga2V5IF06IHZhbHVlXG5cdFx0fSApO1xuXHR9O1xuXG5cdGdldEZpZWxkRGVmYXVsdCggbmFtZSApIHtcblx0XHRjb25zdCBzb3VyY2UgPSAnZmllbGRzX21hcCc7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRGaWVsZEJ5TmFtZShcblx0XHRcdHsgbmFtZSwgc291cmNlIH1cblx0XHQpO1xuXHR9XG5cblx0Z2V0RmllbGRNZXRhKCBuYW1lICkge1xuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXRhX2ZpZWxkc19tYXAnO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoXG5cdFx0XHR7IG5hbWUsIHNvdXJjZSB9XG5cdFx0KTtcblx0fVxuXG5cdGdldEZpZWxkQnlOYW1lKCB7IHNvdXJjZSwgbmFtZSB9ICkge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuXHRcdGlmICggdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0b25DaGFuZ2VGaWVsZE1hcCggdmFsdWUsIG5hbWVGaWVsZCApIHtcblx0XHRjb25zdCBzb3VyY2UgPSAnZmllbGRzX21hcCc7XG5cblx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcblx0XHRcdHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH1cblx0XHQpO1xuXHR9O1xuXG5cdG9uQ2hhbmdlTWV0YUZpZWxkTWFwKCB2YWx1ZSwgbmFtZUZpZWxkICkge1xuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXRhX2ZpZWxkc19tYXAnO1xuXG5cdFx0dGhpcy5jaGFuZ2VGaWVsZHNNYXAoXG5cdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XG5cdFx0KTtcblx0fTtcblxuXG5cdGNoYW5nZUZpZWxkc01hcCggeyBzb3VyY2UsIG5hbWVGaWVsZCwgdmFsdWUgfSApIHtcblx0XHRjb25zdCBmaWVsZHNNYXAgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0e30sXG5cdFx0XHR0aGlzLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcblx0XHRcdHsgWyBuYW1lRmllbGQgXTogdmFsdWUgfVxuXHRcdCk7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXG5cdFx0fSApO1xuXHR9XG5cbn0iLCJcbmNvbnN0IHsgVG9vbHMsIGFkZEFjdGlvbiB9ID0gSmV0RkJBY3Rpb25zO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRCYXNlQ29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0dXNlU3RhdGVcbn0gPSB3cC5lbGVtZW50O1xuXG5hZGRBY3Rpb24oICdjYWxsX2hvb2snLCBmdW5jdGlvbiBDYWxsSG9va0FjdGlvbiggeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSApIHtcblxuXHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0b25DaGFuZ2UoIHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0WyBrZXkgXTogdmFsdWVcblx0XHR9ICk7XG5cdH07XG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmV0dXJuICggPGRpdiBrZXk9XCJjYWxsX2hvb2tcIj5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT0naG9va19uYW1lJ1xuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2hvb2tfbmFtZScgKSB9XG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmhvb2tfbmFtZSB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnaG9va19uYW1lJyApXG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0a2V5PSdoZWxwX21lc3NhZ2UnXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC1jYWxsLWhvb2staW5zdHJ1Y3Rpb24nPlxuXHRcdFx0XHR7IF9fKCAnQ2FsbGVkIGhvb2sgbmFtZXM6JyApIH1cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvY3VzdG9tLWFjdGlvbi97IHNldHRpbmdzLmhvb2tfbmFtZSB9PC9jb2RlPiAtIHsgX18oICdXUCBhY3Rpb24uIFBlcmZvcm0gYSBob29rIHdpdGhvdXQgYW4gYWJpbGl0eSB0byB2YWxpZGF0ZSBmb3JtLCcgKSB9XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2N1c3RvbS1maWx0ZXIveyBzZXR0aW5ncy5ob29rX25hbWUgfTwvY29kZT4gLSB7IF9fKCAnV1AgZmlsdGVyLiBQZXJmb3JtIGEgaG9vayB3aXRoIGFuIGFiaWxpdHkgdG8gdmFsaWRhdGUgZm9ybS4gQWxsb3dzIHRvIHJldHVybiBlcnJvciBtZXNzYWdlLicgKSB9XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0eyBfXyggJ0hvb2sgYXJndW1lbnRzOicgKSB9XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+PGNvZGU+JHJlc3VsdDwvY29kZT4gLSB7IF9fKCAnb25seSBmb3IgV1AgZmlsdGVyLiBIb29rIGV4ZWN1dGlvbiByZXN1bHQsJyApIH08L2xpPlxuXHRcdFx0XHRcdDxsaT48Y29kZT4kcmVxdWVzdDwvY29kZT4gLSB7IF9fKCAnYXJyYXkgd2l0aCBzdWJtaXR0ZWQgZm9ybSBkYXRhLCcgKSB9PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8Y29kZT4kYWN0aW9uX2hhbmRsZXI8L2NvZGU+IC0geyBfXyggJ2FjdGlvbiBoYW5kbGVyIG9iamVjdCwgYWxsb3dzIHRvIG1hbmFnZSBhY3Rpb25zIGRhdGEgYW5kIHRvIHRocm93cyBlcnJvciBzdGF0dXM6JyApIH1cblx0XHRcdFx0XHRcdDxjb2RlPnRocm93IG5ldyBBY3Rpb25fRXhjZXB0aW9uKCAnZmFpbGVkJyApPC9jb2RlPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXG5cdDwvZGl2PiApO1xuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59ICk7XG4iLCJjb25zdCB7XG5cdFRvb2xzLFxuXHRhZGRBY3Rpb24sXG5cdGdldEZvcm1GaWVsZHNCbG9ja3Ncbn0gPSBKZXRGQkFjdGlvbnM7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdEJhc2VDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHR1c2VTdGF0ZVxufSA9IHdwLmVsZW1lbnQ7XG5cbmFkZEFjdGlvbiggJ2NhbGxfd2ViaG9vaycsIGNsYXNzIENhbGxXZWJIb29rQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIGxhYmVsLCBvbkNoYW5nZVNldHRpbmcgfSA9IHRoaXMucHJvcHM7XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRcdHJldHVybiA8VGV4dENvbnRyb2xcblx0XHRcdGtleT0nd2ViaG9va191cmwnXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnd2ViaG9va191cmwnICkgfVxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy53ZWJob29rX3VybCB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3dlYmhvb2tfdXJsJyApIH1cblx0XHQvPjtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn0gKTtcbiIsImltcG9ydCBJbnRlZ3JhdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9pbnRlZ3JhdGlvbi1jb21wb25lbnRcIjtcblxuY29uc3Qge1xuXHRhZGRBY3Rpb24sXG5cdGdsb2JhbFRhYlxufSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0QmFzZUNvbnRyb2wsXG5cdEJ1dHRvbixcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdHVzZVN0YXRlXG59ID0gd3AuZWxlbWVudDtcblxuYWRkQWN0aW9uKCAnZ2V0cmVzcG9uc2UnLCBjbGFzcyBHZXRSZXNwb25zZUFjdGlvbiBleHRlbmRzIEludGVncmF0aW9uQ29tcG9uZW50IHtcblxuXHRnZXRGaWVsZHMoKSB7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG5cdFx0aWYgKCBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLmRhdGEuZmllbGRzICkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5kYXRhLmZpZWxkcyApO1xuXHRcdH1cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRnZXRMaXN0cygpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MuZGF0YS5saXN0cyApIHtcblx0XHRcdHJldHVybiB0aGlzLmZvcm1hdEVudHJpZXNBcnJheSggc2V0dGluZ3MuZGF0YS5saXN0cyApO1xuXHRcdH1cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRmb3JtYXRFbnRyaWVzQXJyYXkoIGVudHJpZXMgPSBbXSwgaXNOZWVkUGxhY2Vob2xkZXIgPSB0cnVlICkge1xuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0ge1xuXHRcdFx0bGFiZWw6ICctLSdcblx0XHR9O1xuXHRcdGlmICggISBlbnRyaWVzICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIGlzTmVlZFBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciwgLi4ub3B0aW9ucyBdIDogb3B0aW9ucztcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkcygpO1xuXHRcdGNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ2dldC1yZXNwb25zZS10YWInIH0gKTtcblxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdFx0cmV0dXJuICggPFJlYWN0LkZyYWdtZW50IGtleT1cImdldHJlc3BvbnNlXCI+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRrZXk9eyAndXNlX2dsb2JhbCcgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlX2dsb2JhbCcgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cblx0XHRcdFx0b25DaGFuZ2U9eyB1c2VfZ2xvYmFsID0+IHtcblx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggQm9vbGVhbiggdXNlX2dsb2JhbCApLCAndXNlX2dsb2JhbCcgKVxuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0a2V5PXsgJ2dldHJlc3BvbnNlX2lucHV0X2tleScgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dC13aXRoLWJ1dHRvblwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nYXBpX2tleSdcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYXBpX2tleScgKSB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZV9nbG9iYWxcblx0XHRcdFx0XHRcdD8gY3VycmVudFRhYi5hcGlfa2V5XG5cdFx0XHRcdFx0XHQ6IHNldHRpbmdzLmFwaV9rZXlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV9rZXknICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cblx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0XHQ/IHRoaXMudmFsaWRhdGVBUElLZXkoIGN1cnJlbnRUYWIuYXBpX2tleSApXG5cdFx0XHRcdFx0XHRcdDogdGhpcy52YWxpZGF0ZUFQSUtleSgpXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS5jbGFzc05hbWUuam9pbiggJyAnICkgKyAnIGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxuXHRcdFx0XHRcdHsgbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PGRpdi8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luLWJvdHRvbS0tc21hbGwnPnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxuXHRcdFx0XHRocmVmPXsgaGVscCggJ2FwaV9rZXlfbGluaycgKSB9PnsgaGVscCggJ2FwaV9rZXlfbGlua19zdWZmaXgnICkgfTwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyBzZXR0aW5ncy5pc1ZhbGlkQVBJICYmIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9zZWxlY3RfbGlzdHMnXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC13aXRoLWJ1dHRvbidcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J2xpc3RfaWQnXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsaXN0X2lkJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MubGlzdF9pZCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnbGlzdF9pZCcgKSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRBcGlEYXRhKCBzZXR0aW5ncy5hcGlfa2V5IClcblx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuZ2V0QXBpRGF0YSggY3VycmVudFRhYi5hcGlfa2V5IClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgbGFiZWwoICd1cGRhdGVfbGlzdF9pZHMnICkgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZ2V0cmVzcG9uc2VfZGF5X29mX2N5Y2xlJyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdkYXlfb2ZfY3ljbGUnXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZGF5X29mX2N5Y2xlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZGF5X29mX2N5Y2xlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBOdW1iZXIoIG5ld1ZhbCApLCAnZGF5X29mX2N5Y2xlJyApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9maWVsZHNfbWFwJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxuXHRcdFx0XHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGROYW1lLCBmaWVsZERhdGEgXSwgaW5kZXggKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkTmFtZSwgZmllbGREYXRhIF0gfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGROYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkRGVmYXVsdCggZmllbGROYW1lICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBmaWVsZE5hbWUgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5mb3JtRmllbGRzTGlzdCB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPjtcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn0gKTtcbiIsImltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gJy4uL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwJztcbmltcG9ydCBKZXREZWZhdWx0TWV0YUNvbnRyb2wgZnJvbSBcIi4uL2Jsb2Nrcy9jb250cm9scy9kZWZhdWx0LW1ldGFcIjtcblxuY29uc3Qge1xuXHRhZGRBY3Rpb24sXG5cdGdldEZvcm1GaWVsZHNCbG9ja3Ncbn0gPSBKZXRGQkFjdGlvbnM7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFRleHRhcmVhQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRQb3BvdmVyLFxuXHRQYW5lbEJvZHksXG5cdFBhbmVsUm93LFxuXHRCYXNlQ29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0dXNlU3RhdGVcbn0gPSB3cC5lbGVtZW50O1xuXG5hZGRBY3Rpb24oICdpbnNlcnRfcG9zdCcsIGNsYXNzIEluc2VydFBvc3RBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Z2V0RmllbGRNYXAoIG5hbWUgKSB7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG5cdFx0aWYgKCBzZXR0aW5ncyAmJiBzZXR0aW5ncy5maWVsZHNfbWFwICYmIHNldHRpbmdzLmZpZWxkc19tYXBbIG5hbWUgXSApIHtcblx0XHRcdHJldHVybiBzZXR0aW5ncy5maWVsZHNfbWFwWyBuYW1lIF07XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlzUmVuZGVySGVscCggZmllbGRzICkge1xuXHRcdGNvbnN0IHsgaGVscCB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gaGVscCggJ2ZpZWxkc19tYXAnICkgJiYgISBmaWVsZHMubGVuZ3RoO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdG9uQ2hhbmdlKCB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xuXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cImluc2VydF9wb3N0XCI+XG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRrZXk9XCJwb3N0X3R5cGVcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnBvc3RfdHlwZSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucG9zdFR5cGVzIH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3Bvc3RfdHlwZScgKSB9XG5cdFx0XHRcdGhlbHA9eyBoZWxwKCAncG9zdF90eXBlJyApIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ3Bvc3RfdHlwZScgKSB9XG5cdFx0XHQvPlxuXHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0a2V5PVwicG9zdF9zdGF0dXNcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnBvc3Rfc3RhdHVzIH1cblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wb3N0U3RhdHVzZXMgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncG9zdF9zdGF0dXMnICkgfVxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ3Bvc3Rfc3RhdHVzJyApIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ3Bvc3Rfc3RhdHVzJyApIH1cblx0XHRcdC8+XG5cdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxuXHRcdFx0XHRrZXk9XCJmaWVsZHNfbWFwXCJcblx0XHRcdD5cblx0XHRcdFx0eyB0aGlzLmlzUmVuZGVySGVscCggZm9ybUZpZWxkcyApICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX2hlbHBcIj5cblx0XHRcdFx0XHR7IGhlbHAoICdmaWVsZHNfbWFwJyApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fbGlzdFwiPlxuXHRcdFx0XHRcdHsgZm9ybUZpZWxkcyAmJiBmb3JtRmllbGRzLm1hcCggKCBmaWVsZCwgaW5kZXggKSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkRGF0YSA9IHRoaXMuZ2V0RmllbGRNYXAoIGZpZWxkLm5hbWUgKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX3Jvd1wiXG5cdFx0XHRcdFx0XHRcdGtleT17ICdmaWVsZF9tYXBfJyArIGZpZWxkLm5hbWUgKyBpbmRleCB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxKZXRGaWVsZHNNYXBDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGQubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdFx0XHRmaWVsZFZhbHVlPXsgZmllbGREYXRhIH1cblx0XHRcdFx0XHRcdFx0XHRmaWVsZE5hbWU9eyBmaWVsZC5uYW1lIH1cblx0XHRcdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cblx0XHRcdFx0XHRcdFx0XHRmaWVsZHNNYXA9eyBzZXR0aW5ncy5maWVsZHNfbWFwIH1cblx0XHRcdFx0XHRcdFx0XHR0YXhvbm9taWVzTGlzdD17IHNvdXJjZS50YXhvbm9taWVzIH1cblx0XHRcdFx0XHRcdFx0XHRmaWVsZFR5cGVzPXsgc291cmNlLmZpZWxkc01hcE9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAnZmllbGRzX21hcCcgKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2Pjtcblx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2RlZmF1bHRfbWV0YScgKSB9XG5cdFx0XHRcdGtleT1cImRlZmF1bHRfbWV0YVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxKZXREZWZhdWx0TWV0YUNvbnRyb2xcblx0XHRcdFx0XHRkZWZhdWx0TWV0YT17IHNldHRpbmdzLmRlZmF1bHRfbWV0YSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ2RlZmF1bHRfbWV0YScgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdDwvZGl2PiApO1xuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0fVxufSApO1xuIiwiaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4vYmFzZS1hY3Rpb24tY29tcG9uZW50XCI7XG5cbmNvbnN0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9ID0gSmV0RkJBY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlZ3JhdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VBY3Rpb25Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMudmFsaWRhdGVBUElLZXkgPSB0aGlzLnZhbGlkYXRlQVBJS2V5LmJpbmQoIHRoaXMgKTtcblx0XHR0aGlzLmdldEFwaURhdGEgPSB0aGlzLmdldEFwaURhdGEuYmluZCggdGhpcyApO1xuXHRcdHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQoIHRoaXMgKTtcblxuXHRcdHRoaXMuZm9ybUZpZWxkc0xpc3QgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCBbXSwgJy0tJyApO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNsYXNzTmFtZTogWyB0aGlzLmdldGNsYXNzTmFtZVZhbGlkYXRlQnV0dG9uKCkgXSxcblx0XHR9O1xuXHR9XG5cblx0dmFsaWRhdGVBUElLZXkoIGN1c3RvbUFwaUtleSA9IGZhbHNlICkge1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdsb2FkaW5nJyBdIH0gKTtcblxuXHRcdGlmICggY3VzdG9tQXBpS2V5ICYmICdzdHJpbmcnID09PSB0eXBlb2YgY3VzdG9tQXBpS2V5ICkge1xuXHRcdFx0dGhpcy5nZXRBcGlEYXRhKCBjdXN0b21BcGlLZXkgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXHRcdHRoaXMuZ2V0QXBpRGF0YSggc2V0dGluZ3MuYXBpX2tleSApO1xuXHR9XG5cblx0Z2V0QXBpRGF0YSggYXBpS2V5ICkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0aWYgKCAhIGFwaUtleSApIHtcblx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBudWxsLCAnaXNWYWxpZEFQSScgKTtcblx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbXSB9ICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogYWpheHVybCxcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0J2FjdGlvbic6IHRoaXMucHJvcHMuc291cmNlLmFjdGlvbixcblx0XHRcdFx0J2FwaV9rZXknOiBhcGlLZXlcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiAoIHJlc3BvbnNlICkge1xuXHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIHRydWUsICdpc1ZhbGlkQVBJJyApO1xuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCByZXNwb25zZS5kYXRhLCAnZGF0YScgKTtcblxuXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdpcy12YWxpZCcgXSB9ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIGZhbHNlLCAnaXNWYWxpZEFQSScgKTtcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtaW52YWxpZCcgXSB9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWyAnaXMtaW52YWxpZCcgXSB9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cblx0fVxuXG5cdGdldGNsYXNzTmFtZVZhbGlkYXRlQnV0dG9uKCkge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuXHRcdGlmICggdHJ1ZSA9PT0gc2V0dGluZ3MuaXNWYWxpZEFQSSApIHtcblx0XHRcdHJldHVybiAnaXMtdmFsaWQnO1xuXHRcdH1cblx0XHRlbHNlIGlmICggZmFsc2UgPT09IHNldHRpbmdzLmlzVmFsaWRBUEkgKSB7XG5cdFx0XHRyZXR1cm4gJ2lzLWludmFsaWQnO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCBJbnRlZ3JhdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9pbnRlZ3JhdGlvbi1jb21wb25lbnRcIjtcblxuY29uc3Qge1xuXHRhZGRBY3Rpb24sXG5cdGdsb2JhbFRhYlxufSA9IEpldEZCQWN0aW9ucztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0Q2hlY2tib3hDb250cm9sLFxuXHRCYXNlQ29udHJvbCxcblx0QnV0dG9uLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QWN0aW9uRmllbGRzTWFwLFxuXHRXcmFwcGVyUmVxdWlyZWRDb250cm9sXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5hZGRBY3Rpb24oICdtYWlsY2hpbXAnLCBjbGFzcyBNYWlsQ2hpbXBBY3Rpb24gZXh0ZW5kcyBJbnRlZ3JhdGlvbkNvbXBvbmVudCB7XG5cblx0Z2V0RmllbGRzKCkge1xuXHRcdGNvbnN0IHsgc2V0dGluZ3MgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAoIHNldHRpbmdzLmxpc3RfaWRcblx0XHRcdCYmIHNldHRpbmdzLmRhdGFcblx0XHRcdCYmIHNldHRpbmdzLmRhdGEuZmllbGRzXG5cdFx0XHQmJiBzZXR0aW5ncy5kYXRhLmZpZWxkc1sgc2V0dGluZ3MubGlzdF9pZCBdICkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5kYXRhLmZpZWxkc1sgc2V0dGluZ3MubGlzdF9pZCBdICk7XG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGdldExpc3RzKCkge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhLmxpc3RzICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0RW50cmllc0FycmF5KCBzZXR0aW5ncy5kYXRhLmxpc3RzICk7XG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGdldEdyb3VwcygpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHNldHRpbmdzLmRhdGFcblx0XHRcdCYmIHNldHRpbmdzLmRhdGEuZ3JvdXBzICkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmRhdGEuZ3JvdXBzWyBzZXR0aW5ncy5saXN0X2lkIF07XG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGZvcm1hdEVudHJpZXNBcnJheSggZW50cmllcyA9IFtdICkge1xuXHRcdGlmICggISBlbnRyaWVzICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIFsgeyBsYWJlbDogJy0tJywgdmFsdWU6ICcnIH0sIC4uLm9wdGlvbnMgXTtcblx0fVxuXG5cdGlzQ2hlY2tlZEdyb3VwKCB2YWx1ZSApIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRyZXR1cm4gKCB2YWx1ZSAmJiBzZXR0aW5ncy5ncm91cHNfaWRzICYmIHNldHRpbmdzLmdyb3Vwc19pZHNbIHZhbHVlIF0gKSA/IHNldHRpbmdzLmdyb3Vwc19pZHNbIHZhbHVlIF0gOiBmYWxzZTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKCk7XG5cdFx0Y29uc3QgY3VycmVudFRhYiA9IGdsb2JhbFRhYiggeyBzbHVnOiAnbWFpbGNoaW1wLXRhYicgfSApO1xuXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cIm1haWxjaGltcFwiPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0a2V5PXsgJ3VzZV9nbG9iYWwnIH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZV9nbG9iYWwnICkgfVxuXHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MudXNlX2dsb2JhbCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgdXNlX2dsb2JhbCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIEJvb2xlYW4oIHVzZV9nbG9iYWwgKSwgJ3VzZV9nbG9iYWwnIClcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdGtleT17ICdtYWlsY2hpbXBfa2V5X2lucHV0cycgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dC13aXRoLWJ1dHRvblwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nYXBpX2tleSdcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYXBpX2tleScgKSB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZV9nbG9iYWxcblx0XHRcdFx0XHRcdD8gY3VycmVudFRhYi5hcGlfa2V5XG5cdFx0XHRcdFx0XHQ6IHNldHRpbmdzLmFwaV9rZXlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV9rZXknIClcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGtleT17ICd2YWxpZGF0ZV9hcGlfa2V5JyB9XG5cdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdHNldHRpbmdzLnVzZV9nbG9iYWxcblx0XHRcdFx0XHRcdFx0PyB0aGlzLnZhbGlkYXRlQVBJS2V5KCBjdXJyZW50VGFiLmFwaV9rZXkgKVxuXHRcdFx0XHRcdFx0XHQ6IHRoaXMudmFsaWRhdGVBUElLZXkoKVxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IHRoaXMuc3RhdGUuY2xhc3NOYW1lLmpvaW4oICcgJyApICsgJyBqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cblx0XHRcdFx0XHR7IGxhYmVsKCAndmFsaWRhdGVfYXBpX2tleScgKSB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdDxkaXYvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21hcmdpbi1ib3R0b20tLXNtYWxsJz57IGhlbHAoICdhcGlfa2V5X2xpbmtfcHJlZml4JyApIH0gPGFcblx0XHRcdFx0aHJlZj17IGhlbHAoICdhcGlfa2V5X2xpbmsnICkgfT57IGhlbHAoICdhcGlfa2V5X2xpbmtfc3VmZml4JyApIH08L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsgc2V0dGluZ3MuaXNWYWxpZEFQSSAmJiA8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdGtleT17ICdtYWlsY2hpbXBfc2VsZWN0X2xpc3RzJyB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5wdXQtd2l0aC1idXR0b25cIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0nbGlzdF9pZCdcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xpc3RfaWQnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5saXN0X2lkIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdsaXN0X2lkJyApIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmdldExpc3RzKCkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0a2V5PXsgJ3VwZGF0ZV9saXN0X2lkcycgfVxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXR0aW5ncy51c2VfZ2xvYmFsXG5cdFx0XHRcdFx0XHRcdFx0PyB0aGlzLmdldEFwaURhdGEoIHNldHRpbmdzLmFwaV9rZXkgKVxuXHRcdFx0XHRcdFx0XHRcdDogdGhpcy5nZXRBcGlEYXRhKCBjdXJyZW50VGFiLmFwaV9rZXkgKVxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyBsYWJlbCggJ3VwZGF0ZV9saXN0X2lkcycgKSB9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdHsgQm9vbGVhbiggc2V0dGluZ3MubGlzdF9pZCApICYmIDw+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZ3JvdXBzX2lkcycgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLmdldEdyb3VwcygpLm1hcCggZ3JvdXAgPT4gPENoZWNrYm94Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGtleT17IGBncm91cHNfaWRzXyR7IGdyb3VwLnZhbHVlIH1gIH1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgdGhpcy5pc0NoZWNrZWRHcm91cCggZ3JvdXAudmFsdWUgKSB9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBncm91cC5sYWJlbCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhY3RpdmUgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLiggc2V0dGluZ3MuZ3JvdXBzX2lkcyB8fCB7fSApLFxuXHRcdFx0XHRcdFx0XHRcdFx0WyBncm91cC52YWx1ZSBdOiBhY3RpdmVcblx0XHRcdFx0XHRcdFx0XHR9LCAnZ3JvdXBzX2lkcycgKSB9XG5cdFx0XHRcdFx0XHRcdC8+ICkgfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0nbWFpbGNoaW1wX3RhZ3MnXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnRhZ3MgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3RhZ3MnICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IGhlbHAoICd0YWdzJyApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyAnZG91YmxlX29wdF9pbicgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2RvdWJsZV9vcHRfaW4nICkgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmRvdWJsZV9vcHRfaW4gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIEJvb2xlYW4oIG5ld1ZhbCApLCAnZG91YmxlX29wdF9pbicgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QWN0aW9uRmllbGRzTWFwXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XG5cdFx0XHRcdFx0XHRrZXk9J21haWxjaGltcCdcblx0XHRcdFx0XHRcdGZpZWxkcz17IGZpZWxkcyB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0eyAoIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9ICkgPT4gPFdyYXBwZXJSZXF1aXJlZENvbnRyb2xcblx0XHRcdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdIH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZElkICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZERlZmF1bHQoIGZpZWxkSWQgKSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBmaWVsZElkICkgfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD4gfVxuXHRcdFx0XHRcdDwvQWN0aW9uRmllbGRzTWFwPlxuXHRcdFx0XHQ8Lz4gfVxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxuXHRcdDwvZGl2PiApO1xuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0fVxufSApO1xuIiwiY29uc3Qge1xuXHRUb29scyxcblx0YWRkQWN0aW9uLFxuXHRnZXRGb3JtRmllbGRzQmxvY2tzXG59ID0gSmV0RkJBY3Rpb25zO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRCYXNlQ29udHJvbCxcblx0Q2hlY2tib3hDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0dXNlU3RhdGVcbn0gPSB3cC5lbGVtZW50O1xuXG5hZGRBY3Rpb24oICdyZWRpcmVjdF90b19wYWdlJywgY2xhc3MgUmVkaXJlY3RUb1BhZ2VBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XG5cdH1cblxuXHRpc0NoZWNrZWQoIG5hbWUgKSB7XG5cdFx0Y29uc3QgYXJnc19maWVsZHMgPSBBcnJheS5mcm9tKCB0aGlzLnByb3BzLnNldHRpbmdzLnJlZGlyZWN0X2FyZ3MgfHwgW10gKTtcblxuXHRcdHJldHVybiBCb29sZWFuKCBhcmdzX2ZpZWxkcy5pbmNsdWRlcyggbmFtZSApICk7XG5cdH1cblxuXHRvbkNoYW5nZVJlZGlyZWN0QXJncyggdmFsdWUsIGZpZWxkX25hbWUgKSB7XG5cdFx0bGV0IGFyZ3NfZmllbGRzID0gQXJyYXkuZnJvbSggdGhpcy5wcm9wcy5zZXR0aW5ncy5yZWRpcmVjdF9hcmdzIHx8IFtdICk7XG5cblx0XHRpZiAoICEgdmFsdWUgKSB7XG5cdFx0XHRjb25zdCBmaWVsZF9pZCA9IGFyZ3NfZmllbGRzLmluZGV4T2YoIGZpZWxkX25hbWUgKTtcblxuXHRcdFx0YXJnc19maWVsZHMuc3BsaWNlKCBmaWVsZF9pZCwgMSApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGFyZ3NfZmllbGRzLnB1c2goIGZpZWxkX25hbWUgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggYXJnc19maWVsZHMsICdyZWRpcmVjdF9hcmdzJyApO1xuXHR9XG5cblx0b25DaGFuZ2VTZXR0aW5nKCB2YWx1ZSwga2V5ICkge1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcblx0XHRcdC4uLnRoaXMucHJvcHMuc2V0dGluZ3MsXG5cdFx0XHRbIGtleSBdOiB2YWx1ZVxuXHRcdH0gKTtcblx0fTtcblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNvdXJjZSwgbGFiZWwsIHNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInJlZGlyZWN0X3RvX3BhZ2VcIj5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0XHRrZXk9J3JlZGlyZWN0X3R5cGUnXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF90eXBlJyApIH1cblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X3R5cGUgfVxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnJlZGlyZWN0X3R5cGVzIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3JlZGlyZWN0X3R5cGUnICkgfVxuXHRcdFx0Lz5cblx0XHRcdHsgJ3N0YXRpY19wYWdlJyA9PT0gc2V0dGluZ3MucmVkaXJlY3RfdHlwZSAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRrZXk9J3JlZGlyZWN0X3R5cGUnXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfcGFnZScgKSB9XG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF9wYWdlIH1cblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wYWdlcyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdyZWRpcmVjdF9wYWdlJyApIH1cblx0XHRcdC8+IH1cblx0XHRcdHsgJ2N1c3RvbV91cmwnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9J3JlZGlyZWN0X3VybF9jb250cm9sJ1xuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfdXJsJyApIH1cblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF91cmwgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAncmVkaXJlY3RfdXJsJyApIH1cblx0XHRcdC8+IH1cblx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfYXJncycgKSB9XG5cdFx0XHRcdGtleT1cInJlZGlyZWN0X2FyZ3NfY29udHJvbFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWRpcmVjdF9hcmdzLWNvbnRyb2wnPlxuXHRcdFx0XHRcdHsgdGhpcy5maWVsZHMubWFwKCAoIHsgbmFtZSB9LCBpbmRleCApID0+IDxDaGVja2JveENvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PXsgYGNoZWNrYm94X2FyZ3NfJHsgbmFtZSB9XyR7IGluZGV4IH1gIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBuYW1lIH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHRoaXMuaXNDaGVja2VkKCBuYW1lICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlUmVkaXJlY3RBcmdzKCBuZXdWYWwsIG5hbWUgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0a2V5PSdyZWRpcmVjdF9oYXNoX2NvbnRyb2wnXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9oYXNoJyApIH1cblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF9oYXNoIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3JlZGlyZWN0X2hhc2gnICkgfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj4gKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn0gKTtcbiIsImltcG9ydCBBY3Rpb25NZXNzYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlc1wiO1xuaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4vYmFzZS1hY3Rpb24tY29tcG9uZW50XCI7XG5cbmNvbnN0IHsgV3JhcHBlclJlcXVpcmVkQ29udHJvbCB9ID0gSmV0RkJDb21wb25lbnRzO1xuY29uc3Qge1xuXHRhZGRBY3Rpb24sXG5cdGdldEZvcm1GaWVsZHNCbG9ja3Ncbn0gPSBKZXRGQkFjdGlvbnM7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdEJhc2VDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHR1c2VTdGF0ZVxufSA9IHdwLmVsZW1lbnQ7XG5cbmFkZEFjdGlvbiggJ3JlZ2lzdGVyX3VzZXInLCBjbGFzcyBSZWdpc3RlclVzZXJBY3Rpb24gZXh0ZW5kcyBCYXNlQWN0aW9uQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIHByb3BzICk7XG5cblx0XHR0aGlzLmZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcblx0XHR0aGlzLmZvcm1GaWVsZHNMaXN0ID0gWyB7IHZhbHVlOiAnJywgbGFiZWw6ICctLScgfSwgLi4udGhpcy5maWVsZHMgXTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgdXNlckZpZWxkcyA9IE9iamVjdC5lbnRyaWVzKCBzb3VyY2UudXNlckZpZWxkcyApO1xuXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0XHRyZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQga2V5PVwicmVnaXN0ZXJfdXNlclwiPlxuXHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cblx0XHRcdFx0a2V5PVwidXNlcl9maWVsZHNfbWFwXCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtdXNlci1maWVsZHMtbWFwX19saXN0XCI+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfT57IF9fKCAnU2V0IGZvcm0gZmllbGRzIG5hbWVzIHRvIHRvIGdldCB1c2VyIGRhdGEgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3NwYW4+XG5cdFx0XHRcdFx0eyB1c2VyRmllbGRzLm1hcCggKCBbIHZhbHVlLCBkYXRhIF0gKSA9PiB7XG5cblx0XHRcdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRmaWVsZD17IFsgdmFsdWUsIGRhdGEgXSB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgYGZvcm1fZmllbGRzXyR7IHZhbHVlIH1gIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGREZWZhdWx0KCB2YWx1ZSApIH1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5mb3JtRmllbGRzTGlzdCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIG5ld1ZhbHVlLCB2YWx1ZSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD47XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0a2V5PVwidXNlcl9yb2xlX2xpc3RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfcm9sZScgKSB9XG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy51c2VyX3JvbGUgfVxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnVzZXJSb2xlcyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICd1c2VyX3JvbGUnICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlcl9tZXRhJyApIH1cblx0XHRcdFx0a2V5PSd1c2VyX21ldGFfbGlzdCdcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLW1ldGEtcm93cyc+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfT57IF9fKCAnU2V0IHVzZXIgbWV0YSBmaWVsZHMgdG8gc2F2ZSBhcHByb3ByaWF0ZSBmb3JtIGZpZWxkcyBpbnRvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvc3Bhbj5cblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCB7IG5hbWUgfSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxuXHRcdFx0XHRcdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBuYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgbmFtZSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkTWV0YSggbmFtZSApIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlTWV0YUZpZWxkTWFwKCBuZXdWYWwsIG5hbWUgKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0a2V5PSdsb2dfaW4nXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsb2dfaW4nICkgfVxuXHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MubG9nX2luIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2xvZ19pbicgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0a2V5PSdhZGRfdXNlcl9pZF9jb250cm9sJ1xuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYWRkX3VzZXJfaWQnICkgfVxuXHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MuYWRkX3VzZXJfaWQgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdhZGRfdXNlcl9pZCcgKSB9XG5cdFx0XHRcdGhlbHA9eyBoZWxwKCAnYWRkX3VzZXJfaWQnICkgfVxuXHRcdFx0Lz5cblx0XHRcdDxBY3Rpb25NZXNzYWdlc1xuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L1JlYWN0LkZyYWdtZW50PiApO1xuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0fVxuXG59ICk7XG4iLCIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmNvbnN0IHtcblx0TWFjcm9zSW5zZXJ0ZXJcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0YWRkQWN0aW9uLFxuXHRnZXRGb3JtRmllbGRzQmxvY2tzXG59ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuYWRkQWN0aW9uKCAnc2VuZF9lbWFpbCcsIGZ1bmN0aW9uIFNlbmRFbWFpbEFjdGlvbigge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzZXR0aW5ncyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc291cmNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsYWJlbCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaGVscCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2VTZXR0aW5nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9ICkge1xuXG5cblx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XG5cblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XG5cdFx0Y29uc3QgY29udGVudCA9ICggc2V0dGluZ3MuY29udGVudCB8fCAnJyApICsgJyUnICsgbWFjcm9zICsgJyUnO1xuXHRcdG9uQ2hhbmdlU2V0dGluZyggY29udGVudCwgJ2NvbnRlbnQnICk7XG5cdH1cblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRyZXR1cm4gPD5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwibWFpbF90b1wiXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MubWFpbF90byB9XG5cdFx0XHRvcHRpb25zPXsgc291cmNlLm1haWxUbyB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnbWFpbF90bycgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ21haWxfdG8nICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnbWFpbF90bycgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyAnY3VzdG9tJyA9PT0gc2V0dGluZ3MubWFpbF90byAmJiA8VGV4dENvbnRyb2xcblx0XHRcdGtleT1cImN1c3RvbV9lbWFpbFwiXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmN1c3RvbV9lbWFpbCB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnY3VzdG9tX2VtYWlsJyApIH1cblx0XHRcdGhlbHA9eyBoZWxwKCAnY3VzdG9tX2VtYWlsJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2N1c3RvbV9lbWFpbCcgKTtcblx0XHRcdH0gfVxuXHRcdC8+IH1cblx0XHR7ICdmb3JtJyA9PT0gc2V0dGluZ3MubWFpbF90byAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwiZnJvbV9maWVsZFwiXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZnJvbV9maWVsZCB9XG5cdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZnJvbV9maWVsZCcgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fZmllbGQnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9maWVsZCcgKTtcblx0XHRcdH0gfVxuXHRcdC8+IH1cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwicmVwbHlfdG9cIlxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X3RvIH1cblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucmVwbHlUbyB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncmVwbHlfdG8nICkgfVxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV90bycgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdyZXBseV90bycgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyAnY3VzdG9tJyA9PT0gc2V0dGluZ3MucmVwbHlfdG8gJiYgPFRleHRDb250cm9sXG5cdFx0XHRrZXk9XCJyZXBseV90b19lbWFpbFwiXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X3RvX2VtYWlsIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXBseV90b19lbWFpbCcgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ3JlcGx5X3RvX2VtYWlsJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X3RvX2VtYWlsJyApO1xuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHRcdHsgJ2Zvcm0nID09PSBzZXR0aW5ncy5yZXBseV90byAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwicmVwbHlfZnJvbV9maWVsZFwiXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVwbHlfZnJvbV9maWVsZCB9XG5cdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncmVwbHlfZnJvbV9maWVsZCcgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ3JlcGx5X2Zyb21fZmllbGQnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAncmVwbHlfZnJvbV9maWVsZCcgKTtcblx0XHRcdH0gfVxuXHRcdC8+IH1cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT1cInN1YmplY3RcIlxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5zdWJqZWN0IH1cblx0XHRcdGxhYmVsPXsgbGFiZWwoICdzdWJqZWN0JyApIH1cblx0XHRcdGhlbHA9eyBoZWxwKCAnc3ViamVjdCcgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdzdWJqZWN0JyApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT1cImZyb21fbmFtZVwiXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fbmFtZSB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZnJvbV9uYW1lJyApIH1cblx0XHRcdGhlbHA9eyBoZWxwKCAnZnJvbV9uYW1lJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2Zyb21fbmFtZScgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9XCJmcm9tX2FkZHJlc3NcIlxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5mcm9tX2FkZHJlc3MgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2Zyb21fYWRkcmVzcycgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fYWRkcmVzcycgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdmcm9tX2FkZHJlc3MnICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9XCJjb250ZW50X3R5cGVcIlxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmNvbnRlbnRfdHlwZSB9XG5cdFx0XHRvcHRpb25zPXsgc291cmNlLmNvbnRlbnRfdHlwZSB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnY29udGVudF90eXBlJyApIH1cblx0XHRcdGhlbHA9eyBoZWxwKCAnY29udGVudF90eXBlJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdjb250ZW50X3R5cGUnICkgfVxuXHRcdC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy13cmFwXCI+XG5cdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdGtleT1cImNvbnRlbnRcIlxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmNvbnRlbnQgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnY29udGVudCcgKSB9XG5cdFx0XHRcdGhlbHA9eyBoZWxwKCAnY29udGVudCcgKSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY29udGVudCcgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PE1hY3Jvc0luc2VydGVyXG5cdFx0XHRcdGZpZWxkcz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRvbkZpZWxkQ2xpY2s9eyBpbnNlcnRNYWNyb3MgfVxuXHRcdFx0XHRjdXN0b21NYWNyb3M9eyBzb3VyY2UuY3VzdG9tTWFjcm9zIH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdDwvPjtcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufSApO1xuIiwiY29uc3Qge1xuXHRnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRhZGRBY3Rpb24sXG59ID0gSmV0RkJBY3Rpb25zO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRCYXNlQ29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0dXNlU3RhdGVcbn0gPSB3cC5lbGVtZW50O1xuXG5hZGRBY3Rpb24oICd1cGRhdGVfb3B0aW9ucycsIGNsYXNzIFVwZGF0ZU9wdGlvbnNBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XG5cdH1cblxuXG5cdGdldEZpZWxkQnlOYW1lKCB7IHNvdXJjZSwgbmFtZSB9ICkge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuXHRcdGlmICggc2V0dGluZ3NbIHNvdXJjZSBdICYmIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRGaWVsZE1ldGEoIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoIHtcblx0XHRcdHNvdXJjZTogJ21ldGFfZmllbGRzX21hcCcsXG5cdFx0XHRuYW1lXG5cdFx0fSApO1xuXHR9XG5cblx0Y2hhbmdlRmllbGRzTWFwKCB7IHNvdXJjZSwgbmFtZUZpZWxkLCB2YWx1ZSB9ICkge1xuXHRcdGNvbnN0IGZpZWxkc01hcCA9IE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSApO1xuXG5cdFx0ZmllbGRzTWFwWyBuYW1lRmllbGQgXSA9IHZhbHVlO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFsgc291cmNlIF06IGZpZWxkc01hcFxuXHRcdH0gKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IG9uQ2hhbmdlTWV0YUZpZWxkTWFwID0gKCB2YWx1ZSwgbmFtZUZpZWxkICkgPT4ge1xuXHRcdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XG5cblx0XHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxuXHRcdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XG5cdFx0XHQpO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0XHRvbkNoYW5nZSgge1xuXHRcdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdFx0WyBrZXkgXTogdmFsdWVcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInJlZ2lzdGVyX3VzZXJcIj5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGtleT1cIm9wdGlvbnNfcGFnZV9saXN0XCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdvcHRpb25zX3BhZ2UnICkgfVxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mub3B0aW9uc19wYWdlIH1cblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5vcHRpb25zUGFnZXMgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ29wdGlvbnNfcGFnZScgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdvcHRpb25zX21hcCcgKSB9XG5cdFx0XHRcdGtleT0nb3B0aW9uc19tZXRhX2xpc3QnXG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxuXHRcdFx0XHRcdHsgdGhpcy5maWVsZHMubWFwKCAoIHsgbmFtZSB9LCBpbmRleCApID0+IDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgJ29wdGlvbnNfbWV0YV8nICsgbmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgbmFtZSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGRNZXRhKCBuYW1lICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZU1ldGFGaWVsZE1hcCggbmV3VmFsLCBuYW1lIClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+ICkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cblx0XHQ8L2Rpdj4gKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn0gKTtcbiIsImltcG9ydCBKZXRGaWVsZHNNYXBDb250cm9sIGZyb20gXCIuLi9ibG9ja3MvY29udHJvbHMvZmllbGRzLW1hcFwiO1xuaW1wb3J0IEFjdGlvbk1lc3NhZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1lc3NhZ2VzXCI7XG5cbmNvbnN0IHtcblx0YWRkQWN0aW9uLFxuXHRnZXRGb3JtRmllbGRzQmxvY2tzXG59ID0gSmV0RkJBY3Rpb25zO1xuXG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0U2VsZWN0Q29udHJvbCxcblx0QmFzZUNvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdHVzZVN0YXRlXG59ID0gd3AuZWxlbWVudDtcblxuYWRkQWN0aW9uKCAndXBkYXRlX3VzZXInLCBjbGFzcyBVcGRhdGVVc2VyQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xuXHRcdHRoaXMubWV0YU9wdGlvbiA9ICd1c2VyX21ldGEnO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHR5cGU6ICcnLFxuXHRcdH07XG5cdH1cblxuXHRnZXRGaWVsZE1hcCggbmFtZSApIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHNldHRpbmdzICYmIHNldHRpbmdzLmZpZWxkc19tYXAgJiYgc2V0dGluZ3MuZmllbGRzX21hcFsgbmFtZSBdICkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmZpZWxkc19tYXBbIG5hbWUgXTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggdmFsdWUsIGtleSApID0+IHtcblx0XHRcdG9uQ2hhbmdlKCB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRcdHJldHVybiAoIDxkaXYga2V5PVwidXBkYXRlX3VzZXJcIj5cblx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XG5cdFx0XHRcdGtleT0ndXNlcl9maWVsZHNfbWFwJ1xuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItbWV0YS1yb3dzJz5cblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCBmaWVsZCwgaW5kZXggKSA9PiB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkRGF0YSA9IHRoaXMuZ2V0RmllbGRNYXAoIGZpZWxkLm5hbWUgKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcblx0XHRcdFx0XHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgZmllbGQubmFtZSArIGluZGV4IH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEpldEZpZWxkc01hcENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZC5uYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVmFsdWU9eyBmaWVsZERhdGEgfVxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkTmFtZT17IGZpZWxkLm5hbWUgfVxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdG1ldGFQcm9wPSd1c2VyX21ldGEnXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRzTWFwPXsgc2V0dGluZ3MuZmllbGRzX21hcCB9XG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRUeXBlcz17IHNvdXJjZS51c2VyRmllbGRzIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ2ZpZWxkc19tYXAnICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj47XG5cdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfcm9sZScgKSB9XG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0a2V5PVwidXNlcl9yb2xlX2xpc3RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy51c2VyX3JvbGUgfVxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnVzZXJSb2xlcyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUsICd1c2VyX3JvbGUnICkgfVxuXHRcdFx0Lz5cblx0XHRcdDxBY3Rpb25NZXNzYWdlc1xuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj4gKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn0gKTtcbiIsImltcG9ydCBQYXlQYWwgZnJvbSBcIi4vcGF5cGFsXCI7XG5cbmNvbnN0IHtcblx0XHQgIGFjdGlvbkJ5VHlwZUxpc3QsXG5cdFx0ICBmcm9tTG9jYWxpemVIZWxwZXIsXG5cdFx0ICBnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRcdCAgZ2F0ZXdheUF0dHIsXG5cdFx0ICByZW5kZXJHYXRld2F5LFxuXHRcdCAgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMsXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRcdCAgVGV4dGFyZWFDb250cm9sLFxuXHRcdCAgQ2hlY2tib3hDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIEJhc2VDb250cm9sLFxuXHRcdCAgUmFkaW9Db250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICB1c2VTdGF0ZSxcblx0XHQgIHVzZUVmZmVjdCxcblx0ICB9ID0gd3AuZWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2F0ZXdheXNFZGl0b3IoIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXRld2F5c0FyZ3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQWN0aW9ucyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICkge1xuXG5cdGNvbnN0IGF2YWlsYWJsZUFjdGlvbnMgPSBhY3RpdmVBY3Rpb25zLmZpbHRlciggYWN0aW9uID0+IGFjdGlvbi50eXBlICE9PSAncmVkaXJlY3RfdG9fcGFnZScgKTtcblxuXHRjb25zdCBnYXRld2F5c0RhdGEgPSBnYXRld2F5QXR0cigpO1xuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xuXG5cdGNvbnN0IFsgZ2F0ZXdheSwgc2V0R2F0ZXdheSBdID0gdXNlU3RhdGUoIGdhdGV3YXlzQXJncyApO1xuXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCBbXSwgJy0tJyApO1xuXG5cdC8qKlxuXHQgKiBVc2VkIGZvciBzZXQgbm90aWZpY2F0aW9ucyBhbmQgZ2F0ZXdheSB0eXBlIHNldHRpbmdzXG5cdCAqXG5cdCAqIEBwYXJhbSB3aGVuXG5cdCAqIEBwYXJhbSB0eXBlXG5cdCAqIEBwYXJhbSBuZXdWYWx1ZVxuXHQgKi9cblx0Y29uc3Qgc2V0VmFsdWVJbk9iamVjdCA9ICggd2hlbiwgdHlwZSwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0c2V0R2F0ZXdheSggKCBwcmV2QXJncyApID0+IHtcblx0XHRcdGlmICggISBwcmV2QXJnc1sgd2hlbiBdICkge1xuXHRcdFx0XHRwcmV2QXJnc1sgd2hlbiBdID0ge307XG5cdFx0XHR9XG5cdFx0XHRwcmV2QXJnc1sgd2hlbiBdWyB0eXBlIF0gPSBuZXdWYWx1ZTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHQvKipcblx0ICogVXNlZCBmb3IgZ2V0IG5vdGlmaWNhdGlvbnMgYW5kIGdhdGV3YXkgdHlwZSBzZXR0aW5nc1xuXHQgKlxuXHQgKiBAcGFyYW0gd2hlblxuXHQgKiBAcGFyYW0gdHlwZVxuXHQgKiBAcGFyYW0gaXNFbXB0eVJlc3VsdFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxuXHQgKi9cblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9ucyA9ICggd2hlbiwgdHlwZSwgaXNFbXB0eVJlc3VsdCA9IGZhbHNlICkgPT4ge1xuXHRcdGlmICggZ2F0ZXdheVsgd2hlbiBdICYmIGdhdGV3YXlbIHdoZW4gXVsgdHlwZSBdICkge1xuXHRcdFx0cmV0dXJuIGdhdGV3YXlbIHdoZW4gXVsgdHlwZSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNFbXB0eVJlc3VsdDtcblx0fTtcblxuXHRjb25zdCBzZXRSZXN1bHRNZXNzYWdlID0gKCBrZXksIHZhbHVlICkgPT4ge1xuXHRcdHNldFZhbHVlSW5PYmplY3QoICdtZXNzYWdlcycsIGtleSwgdmFsdWUgKTtcblx0fTtcblx0Y29uc3QgZ2V0UmVzdWx0TWVzc2FnZSA9ICgga2V5ICkgPT4ge1xuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbWVzc2FnZXMnLCBrZXksIGdhdGV3YXlzRGF0YS5tZXNzYWdlc1sga2V5IF0gKTtcblx0fTtcblxuXHRjb25zdCBzZXROb3RpZmljYXRpb25zQmVmb3JlID0gKCBpZCwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfYmVmb3JlJywgaWQsIG5ld1ZhbHVlICk7XG5cdH07XG5cblx0Y29uc3QgYWN0aW9uRGVmYXVsdCA9IHsgYWN0aXZlOiBmYWxzZSB9O1xuXG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnNCZWZvcmUgPSBpZCA9PiB7XG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX2JlZm9yZScsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc0ZhaWxlZCA9ICggdHlwZSwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfZmFpbGVkJywgdHlwZSwgbmV3VmFsdWUgKTtcblx0fTtcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9uc0ZhaWxlZCA9IGlkID0+IHtcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ25vdGlmaWNhdGlvbnNfZmFpbGVkJywgaWQsIGFjdGlvbkRlZmF1bHQgKTtcblx0fTtcblxuXHRjb25zdCBzZXROb3RpZmljYXRpb25zU3VjY2VzcyA9ICggaWQsIG5ld1ZhbHVlICkgPT4ge1xuXHRcdHNldFZhbHVlSW5PYmplY3QoICdub3RpZmljYXRpb25zX3N1Y2Nlc3MnLCBpZCwgbmV3VmFsdWUgKTtcblx0fTtcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MgPSBpZCA9PiB7XG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX3N1Y2Nlc3MnLCBpZCwgYWN0aW9uRGVmYXVsdCApO1xuXHR9O1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0aWYgKCBvblNhdmVJdGVtcyApIHtcblxuXHRcdFx0XHRbICdub3RpZmljYXRpb25zX2JlZm9yZScsICdub3RpZmljYXRpb25zX2ZhaWxlZCcsICdub3RpZmljYXRpb25zX3N1Y2Nlc3MnIF0uZm9yRWFjaCggbmFtZSA9PiB7XG5cdFx0XHRcdFx0aWYgKCAhIGdhdGV3YXlbIG5hbWUgXSApIHtcblx0XHRcdFx0XHRcdGdhdGV3YXlbIG5hbWUgXSA9IHt9O1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyggZ2F0ZXdheVsgbmFtZSBdICkuZm9yRWFjaCggKCBbIGFjdGlvbiwgaXNDaGVja2VkIF0gKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoICEgaXNDaGVja2VkICkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgZ2F0ZXdheVsgbmFtZSBdWyBhY3Rpb24gXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IClcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdG9uU2F2ZUl0ZW1zKCBnYXRld2F5ICk7XG5cdFx0XHR9XG5cdFx0XHRvblVuTW91bnQoKTtcblx0XHR9IGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xuXHRcdFx0b25Vbk1vdW50KCk7XG5cdFx0fVxuXHR9LCBbIGlzU2F2ZUFjdGlvbiBdICk7XG5cblx0Y29uc3QgYWN0aW9uc0xpc3QgPSBhY3Rpb25CeVR5cGVMaXN0KCAnaW5zZXJ0X3Bvc3QnLCB0cnVlICk7XG5cdGNvbnN0IGFjdGlvbkxhYmVsID0gZnJvbUxvY2FsaXplSGVscGVyKCAnZ2V0QWN0aW9uTGFiZWwnICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0eyByZW5kZXJHYXRld2F5KCBnYXRld2F5LmdhdGV3YXksIHsgc2V0VmFsdWVJbk9iamVjdCwgZ2V0Tm90aWZpY2F0aW9ucyB9ICkgfVxuXHRcdHsgQm9vbGVhbiggYXZhaWxhYmxlQWN0aW9ucy5sZW5ndGggKSAmJiA8PlxuXHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdCZWZvcmUgcGF5bWVudCBwcm9jZXNzZWQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRrZXk9XCJiZWZvcmVfcGF5bWVudF9iYXNlX2NvbnRyb2xcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdjaGVja2JveGVzLXJvdycgfT5cblx0XHRcdFx0XHR7IGFjdGl2ZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XG5cdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zQmVmb3JlKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBhY3Rpb25MYWJlbCggYWN0aW9uLnR5cGUgKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNCZWZvcmUoIGFjdGlvbi5pZCwge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmUsXG5cdFx0XHRcdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlLFxuXHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHQvPiApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPbiBzdWNjZXNzZnVsIHBheW1lbnQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRrZXk9XCJzdWNjZXNzX3BheW1lbnRfYmFzZV9jb250cm9sXCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7IGF2YWlsYWJsZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XG5cdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zU3VjY2VzcyggYWN0aW9uLmlkICkuYWN0aXZlIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgYWN0aW9uTGFiZWwoIGFjdGlvbi50eXBlICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGFjdGl2ZSA9PiBzZXROb3RpZmljYXRpb25zU3VjY2VzcyggYWN0aW9uLmlkLCB7XG5cdFx0XHRcdFx0XHRcdGFjdGl2ZSxcblx0XHRcdFx0XHRcdFx0dHlwZTogYWN0aW9uLnR5cGUsXG5cdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdC8+ICkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ09uIGZhaWxlZCBwYXltZW50OicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0a2V5PVwiZmFpbGVkX3BheW1lbnRfYmFzZV9jb250cm9sXCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7IGF2YWlsYWJsZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XG5cdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zRmFpbGVkKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBhY3Rpb25MYWJlbCggYWN0aW9uLnR5cGUgKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNGYWlsZWQoIGFjdGlvbi5pZCwge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmUsXG5cdFx0XHRcdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlLFxuXHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHQvPiApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdDwvPiB9XG5cblx0XHR7ICggMSA8IGFjdGlvbnNMaXN0Lmxlbmd0aCB8fCBnYXRld2F5LmFjdGlvbl9vcmRlciApICYmIDxCYXNlQ29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FjdGlvbl9vcmRlcicgKSB9XG5cdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyX2Jhc2VfY29udHJvbCdcblx0XHQ+XG5cdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCdcblx0XHRcdFx0a2V5PSdnYXRld2F5X2FjdGlvbl9vcmRlcidcblx0XHRcdFx0b3B0aW9ucz17IGFjdGlvbkJ5VHlwZUxpc3QoICdpbnNlcnRfcG9zdCcsIHRydWUgKSB9XG5cdFx0XHRcdHNlbGVjdGVkPXsgZ2F0ZXdheS5hY3Rpb25fb3JkZXIgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0c2V0R2F0ZXdheSggcHJldkFyZ3MgPT4gKCB7XG5cdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHRcdGFjdGlvbl9vcmRlcjogTnVtYmVyKCBuZXdWYWwgKSxcblx0XHRcdFx0XHR9ICkgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdDwvQmFzZUNvbnRyb2w+IH1cblxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncHJpY2VfZmllbGQnICkgfVxuXHRcdFx0a2V5PXsgJ2Zvcm1fZmllbGRzX3ByaWNlX2ZpZWxkJyB9XG5cdFx0XHR2YWx1ZT17IGdhdGV3YXkucHJpY2VfZmllbGQgfVxuXHRcdFx0bGFiZWxQb3NpdGlvbj0nc2lkZSdcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0c2V0R2F0ZXdheSggcHJldkFyZ3MgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0cHJpY2VfZmllbGQ6IG5ld1ZhbCxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IH1cblx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cblx0XHQvPlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWFjcm9zX2Jhc2VfY29udHJvbFwiXG5cdFx0PlxuXHRcdFx0PGg0PlxuXHRcdFx0XHR7IF9fKCAnQXZhaWxhYmxlIG1hY3JvcyBsaXN0OiAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cblx0XHRcdFx0eyBfXyggJyVnYXRld2F5X2Ftb3VudCUgLSBwYXltZW50IGFtb3VudCByZXR1cm5lZCBmcm9tIGdhdGV3YXkgdGVtcGxhdGU7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XG5cdFx0XHRcdHsgX18oICclZ2F0ZXdheV9zdGF0dXMlIC0gcGF5bWVudCBzdGF0dXMgcmV0dXJuZWQgZnJvbSBwYXltZW50IGdhdGV3YXk7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XG5cdFx0XHRcdHsgX18oICclZmllbGRfbmFtZSUgLSByZXBsYWNlIFwiZmllbGRfbmFtZVwiIHdpdGggYW55IGZpZWxkIG5hbWUgZnJvbSB0aGUgZm9ybTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cblx0XHRcdDwvaDQ+XG5cdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21lc3NhZ2Vfc3VjY2Vzc1wiXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnbWVzc2FnZV9zdWNjZXNzJyApIH1cblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRSZXN1bHRNZXNzYWdlKCAnc3VjY2VzcycsIG5ld1ZhbHVlICkgfVxuXHRcdC8+XG5cdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9mYWlsZWRcIlxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2VfZmFpbGVkJyApIH1cblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcgKSB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdmYWlsZWQnLCBuZXdWYWx1ZSApIH1cblx0XHQvPlxuXHRcdHsgYWN0aXZlQWN0aW9ucy5maW5kKCBhY3Rpb24gPT4gYWN0aW9uLnR5cGUgPT09ICdyZWRpcmVjdF90b19wYWdlJyApICYmIDxDaGVja2JveENvbnRyb2xcblx0XHRcdGtleT1cImNoZWNrYm94X2Jsb2NrX3JlZGlyZWN0X3RvX3BhZ2VcIlxuXHRcdFx0Y2hlY2tlZD17IGdhdGV3YXkudXNlX3N1Y2Nlc3NfcmVkaXJlY3QgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZV9zdWNjZXNzX3JlZGlyZWN0JyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4ge1xuXHRcdFx0XHRzZXRHYXRld2F5KCBwcmV2QXJncyA9PiAoIHtcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHR1c2Vfc3VjY2Vzc19yZWRpcmVjdDogdmFsdWUsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHQ8Lz47XG5cbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0XHQgIHJlZ2lzdGVyR2F0ZXdheSxcblx0XHQgIGdhdGV3YXlMYWJlbCxcblx0XHQgIGdsb2JhbFRhYixcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCBsYWJlbCA9IGdhdGV3YXlMYWJlbCggJ3BheXBhbCcgKTtcbmNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ3BheXBhbCcgfSApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXlQYWwoIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlSW5PYmplY3QsXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXROb3RpZmljYXRpb25zLFxuXHRcdFx0XHRcdFx0XHRcdH0gKSB7XG5cblx0Y29uc3Qgc2V0U2V0dGluZyA9ICgga2V5LCB2YWx1ZSApID0+IHtcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAncGF5cGFsJywga2V5LCB2YWx1ZSApO1xuXHR9O1xuXHRjb25zdCBnZXRTZXR0aW5nID0gKCBrZXkgKSA9PiB7XG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdwYXlwYWwnLCBrZXksICcnICk7XG5cdH07XG5cblx0Y29uc3QgaXNHbG9iYWwgPSBnZXROb3RpZmljYXRpb25zKCAncGF5cGFsJywgJ3VzZV9nbG9iYWwnLCBmYWxzZSApO1xuXG5cdGNvbnN0IGdldE1hbnVhbE9yR2xvYmFsID0ga2V5ID0+IHtcblx0XHRyZXR1cm4gaXNHbG9iYWxcblx0XHRcdD8gY3VycmVudFRhYlsga2V5IF1cblx0XHRcdDogZ2V0U2V0dGluZygga2V5ICk7XG5cdH07XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdGtleT17ICd1c2VfZ2xvYmFsJyB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlX2dsb2JhbCcgKSB9XG5cdFx0XHRjaGVja2VkPXsgZ2V0U2V0dGluZyggJ3VzZV9nbG9iYWwnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ3VzZV9nbG9iYWwnLCBuZXdWYWwgKSB9XG5cdFx0Lz5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjbGllbnRfaWQnICkgfVxuXHRcdFx0a2V5PSdwYXlwYWxfY2xpZW50X2lkX3NldHRpbmcnXG5cdFx0XHR2YWx1ZT17IGdldE1hbnVhbE9yR2xvYmFsKCAnY2xpZW50X2lkJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHNldFNldHRpbmcoICdjbGllbnRfaWQnLCBuZXdWYWwgKSB9XG5cdFx0XHRkaXNhYmxlZD17IGlzR2xvYmFsIH1cblx0XHQvPlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3NlY3JldCcgKSB9XG5cdFx0XHRrZXk9J3BheXBhbF9zZWNyZXRfc2V0dGluZydcblx0XHRcdHZhbHVlPXsgZ2V0TWFudWFsT3JHbG9iYWwoICdzZWNyZXQnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ3NlY3JldCcsIG5ld1ZhbCApIH1cblx0XHRcdGRpc2FibGVkPXsgaXNHbG9iYWwgfVxuXHRcdC8+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnY3VycmVuY3knICkgfVxuXHRcdFx0a2V5PSdwYXlwYWxfY3VycmVuY3lfY29kZV9zZXR0aW5nJ1xuXHRcdFx0dmFsdWU9eyBnZXRTZXR0aW5nKCAnY3VycmVuY3knICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ2N1cnJlbmN5JywgbmV3VmFsICkgfVxuXHRcdC8+XG5cdDwvPjtcbn1cblxucmVnaXN0ZXJHYXRld2F5KCAncGF5cGFsJywgUGF5UGFsICk7XG5cbiIsImltcG9ydCAnLi9ibG9ja3MvZm9ybS1maWVsZHMnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9zZW5kLWVtYWlsJztcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvaW5zZXJ0LXBvc3QnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9yZWdpc3Rlci11c2VyJztcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvdXBkYXRlLXVzZXInO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy91cGRhdGUtb3B0aW9ucyc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2NhbGwtaG9vayc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2NhbGwtd2ViaG9vayc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3JlZGlyZWN0LXRvLXBhZ2UnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9tYWlsY2hpbXAnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9nZXRyZXNwb25zZSc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2FjdGl2ZWNhbXBhaWduJztcbmltcG9ydCBSZWdpc3RlclBsdWdpbnMgZnJvbSBcIi4vcGx1Z2lucy9tYW5hZ2VyXCI7XG5pbXBvcnQgUmVnaXN0ZXJGb3JtRmllbGRzIGZyb20gXCIuL2Jsb2Nrcy9mb3JtLWZpZWxkc1wiO1xuXG5jb25zdCB7IGV2ZW50IH0gPSBKZXRGQkFjdGlvbnM7XG5cbmV2ZW50KCAnamV0LWZvcm0tYnVpbGRlci1pbml0aWFsaXplJyApKCk7XG5cbndpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMuZm9yRWFjaCggZnVuY3Rpb24gKCBhY3Rpb24sIGluZGV4ICkge1xuXHRpZiAoIHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgJiYgd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uLmlkIF0gKSB7XG5cdFx0d2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgaW5kZXggXS5jYWxsYmFjayA9IHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnNbIGFjdGlvbi5pZCBdO1xuXHR9XG59ICk7XG5cblJlZ2lzdGVyUGx1Z2lucygpO1xuUmVnaXN0ZXJGb3JtRmllbGRzKCk7XG5cbmV2ZW50KCAnamV0LWZvcm0tYnVpbGRlci1pbml0aWFsaXplZCcgKSgpO1xuIiwiaW1wb3J0IFBsdWdpbkFjdGlvbnMgZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGJhc2UgPSB7XG5cdG5hbWU6ICdqZi1hY3Rpb25zLXBhbmVsJyxcblx0dGl0bGU6IF9fKCAnUG9zdCBTdWJtaXQgQWN0aW9ucycgKVxufTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHJlbmRlcjogUGx1Z2luQWN0aW9ucyxcblx0aWNvbjogbnVsbFxufTtcblxuZXhwb3J0IHtcblx0YmFzZSxcblx0c2V0dGluZ3Ncbn07IiwiXG5jb25zdCBnZXRSYW5kb21JRCA9ICgpID0+IHtcblx0cmV0dXJuIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiA4OTk5ICkgKyAxMDAwO1xufVxuXG5jb25zdCBkZWZhdWx0QWN0aW9ucyA9IFsge1xuXHR0eXBlOiAnc2VuZF9lbWFpbCcsXG5cdGlkOiBnZXRSYW5kb21JRCgpLFxuXHRzZXR0aW5nczoge1xuXHRcdHNlbmRfZW1haWw6IHtcblx0XHRcdHN1YmplY3Q6ICdOZXcgb3JkZXIgb24gd2Vic2l0ZScsXG5cdFx0XHRjb250ZW50OiAnSGkgYWRtaW4hXFxuXFxuVGhlcmUgYXJlIG5ldyBvcmRlciBvbiB5b3VyIHdlYnNpdGUuXFxuXFxuT3JkZXIgZGV0YWlsczpcXG4tIFBvc3QgSUQ6ICVwb3N0X2lkJSdcblx0XHR9LFxuXHR9XG59IF07XG5cbmNvbnN0IG5ld0l0ZW1Db25kaXRpb24gPSB7XG5cdGV4ZWN1dGU6IGZhbHNlLFxuXHRvcGVyYXRvcjogJycsXG5cdGZpZWxkOiAnJyxcblx0ZGVmYXVsdDogJycsXG59O1xuXG5jb25zdCBjb25kaXRpb25PcGVyYXRvcnMgPSBbXG5cdHsgbGFiZWw6ICctLScsIHZhbHVlOiAnJyB9LFxuXHR7IGxhYmVsOiAnRXF1YWwnLCB2YWx1ZTogJ2VxdWFsJyB9LFxuXHR7IGxhYmVsOiAnR3JlYXRlciB0aGFuJywgdmFsdWU6ICdncmVhdGVyJyB9LFxuXHR7IGxhYmVsOiAnTGVzcyB0aGFuJywgdmFsdWU6ICdsZXNzJyB9LFxuXHR7IGxhYmVsOiAnQmV0d2VlbicsIHZhbHVlOiAnYmV0d2VlbicgfSxcblx0eyBsYWJlbDogJ0luIHRoZSBsaXN0JywgdmFsdWU6ICdvbmVfb2YnIH0sXG5cdHsgbGFiZWw6ICdDb250YWluIHRleHQnLCB2YWx1ZTogJ2NvbnRhaW4nIH0sXG5dO1xuXG5leHBvcnQgeyBnZXRSYW5kb21JRCwgZGVmYXVsdEFjdGlvbnMsIG5ld0l0ZW1Db25kaXRpb24sIGNvbmRpdGlvbk9wZXJhdG9ycyB9OyIsImltcG9ydCB7XG5cdGNvbmRpdGlvbk9wZXJhdG9ycyxcblx0ZGVmYXVsdEFjdGlvbnMsXG5cdGdldFJhbmRvbUlELFxuXHRuZXdJdGVtQ29uZGl0aW9uLFxufSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IHtcblx0XHQgIGdldEZvcm1GaWVsZHNCbG9ja3MsXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRcdCAgQWN0aW9uTW9kYWwsXG5cdFx0ICBSZXBlYXRlcldpdGhTdGF0ZSxcblx0XHQgIEZpZWxkV2l0aFByZXNldCxcblx0XHQgIER5bmFtaWNQcmVzZXQsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyB1c2VBY3Rpb25zIH0gPSBKZXRGQkhvb2tzO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0YXJlYUNvbnRyb2wsXG5cdFx0ICBUb2dnbGVDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIEJ1dHRvbixcblx0XHQgIENhcmQsXG5cdFx0ICBDYXJkQm9keSxcblx0XHQgIERyb3Bkb3duTWVudSxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdFx0ICB1c2VFZmZlY3QsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpbkFjdGlvbnMoKSB7XG5cblx0Y29uc3QgWyBhY3Rpb25zLCBzZXRBY3Rpb25zIF0gPSB1c2VBY3Rpb25zKCB0cnVlICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCAwID09PSBhY3Rpb25zLmxlbmd0aCApIHtcblx0XHRcdHNldEFjdGlvbnMoIGRlZmF1bHRBY3Rpb25zICk7XG5cdFx0fVxuXHR9LCBbXSApO1xuXG5cdGNvbnN0IG1vdmVBY3Rpb24gPSAoIGZyb21JbmRleCwgdG9JbmRleCApID0+IHtcblxuXHRcdHZhciBpdGVtICAgICAgICAgPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uc1sgZnJvbUluZGV4IF0gKSApLFxuXHRcdFx0cmVwbGFjZWRJdGVtID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnNbIHRvSW5kZXggXSApICk7XG5cblx0XHRhY3Rpb25zLnNwbGljZSggdG9JbmRleCwgMSwgaXRlbSApO1xuXHRcdGFjdGlvbnMuc3BsaWNlKCBmcm9tSW5kZXgsIDEsIHJlcGxhY2VkSXRlbSApO1xuXG5cdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zIF0gKTtcblxuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUFjdGlvbiA9ICggaW5kZXggKSA9PiB7XG5cdFx0YWN0aW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zIF0gKTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVBY3Rpb24gPSAoIGlkLCBrZXksIHZhbHVlICkgPT4ge1xuXHRcdHNldEFjdGlvbnMoIGFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XG5cdFx0XHRpZiAoIGFjdGlvbi5pZCA9PT0gaWQgKSB7XG5cdFx0XHRcdHZhciBuZXdBY3Rpb24gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uICkgKTtcblx0XHRcdFx0bmV3QWN0aW9uWyBrZXkgXSA9IHZhbHVlO1xuXHRcdFx0XHRyZXR1cm4gbmV3QWN0aW9uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGFjdGlvbjtcblx0XHRcdH1cblx0XHR9ICkgKTtcblx0fTtcblxuXHRjb25zdCBbIGlzRWRpdCwgc2V0RWRpdCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdGNvbnN0IFsgZWRpdGVkQWN0aW9uLCBzZXRFZGl0ZWRBY3Rpb24gXSA9IHVzZVN0YXRlKCB7fSApO1xuXG5cdGNvbnN0IFsgaXNFZGl0UHJvY2Vzc0FjdGlvbiwgc2V0RWRpdFByb2Nlc3NBY3Rpb24gXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIHByb2Nlc3NlZEFjdGlvbiwgc2V0UHJvY2Vzc2VkQWN0aW9uIF0gPSB1c2VTdGF0ZSgge30gKTtcblxuXHRjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuXHRcdHNldEVkaXQoIGZhbHNlIClcblx0fTtcblxuXHRjb25zdCBhY3Rpb25UeXBlcyA9IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMubWFwKCBmdW5jdGlvbiggYWN0aW9uICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogYWN0aW9uLmlkLFxuXHRcdFx0bGFiZWw6IGFjdGlvbi5uYW1lLFxuXHRcdH07XG5cdH0gKTtcblxuXHR2YXIgQ2FsbGJhY2sgPSBmYWxzZTtcblxuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLmxlbmd0aDsgaSsrICkge1xuXG5cdFx0aWYgKCB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpIF0uaWQgPT09IGVkaXRlZEFjdGlvbi50eXBlICYmIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGkgXS5jYWxsYmFjayApIHtcblx0XHRcdENhbGxiYWNrID0gd2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgaSBdLmNhbGxiYWNrO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlQWN0aW9uU2V0dGluZ3MgPSBhY3Rpb24gPT4ge1xuXHRcdHVwZGF0ZUFjdGlvbiggYWN0aW9uLmlkLCAnc2V0dGluZ3MnLCBhY3Rpb24uc2V0dGluZ3MgKTtcblx0XHRjbG9zZU1vZGFsKCk7XG5cdH1cblxuXHRjb25zdCB1cGRhdGVBY3Rpb25Db25kaXRpb24gPSBpdGVtcyA9PiB7XG5cdFx0dXBkYXRlQWN0aW9uKCBwcm9jZXNzZWRBY3Rpb24uaWQsICdjb25kaXRpb25zJywgaXRlbXMgKTtcblx0XHRzZXRFZGl0UHJvY2Vzc0FjdGlvbiggZmFsc2UgKTtcblx0fVxuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggZWRpdGVkQWN0aW9uLnR5cGUgKSB7XG5cdFx0XHRzZXRFZGl0KCB0cnVlICk7XG5cdFx0fVxuXHR9LCBbIGVkaXRlZEFjdGlvbiBdICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCBwcm9jZXNzZWRBY3Rpb24udHlwZSApIHtcblx0XHRcdHNldEVkaXRQcm9jZXNzQWN0aW9uKCB0cnVlICk7XG5cdFx0fVxuXHR9LCBbIHByb2Nlc3NlZEFjdGlvbiBdICk7XG5cblx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XG5cblx0Y29uc3QgZ2V0TWVyZ2VkU2V0dGluZ3MgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGVkaXRlZEFjdGlvbi5zZXR0aW5nc1sgZWRpdGVkQWN0aW9uLnR5cGUgXSB8fCBlZGl0ZWRBY3Rpb24uc2V0dGluZ3M7XG5cdH07XG5cblx0cmV0dXJuIDw+XG5cdFx0eyBhY3Rpb25zICYmIGFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XG5cdFx0XHRyZXR1cm4gPENhcmRcblx0XHRcdFx0a2V5PXsgYWN0aW9uLmlkIH1cblx0XHRcdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1hY3Rpb24nIH1cblx0XHRcdD5cblx0XHRcdFx0PENhcmRCb2R5PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGFjdGlvbi50eXBlIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBhY3Rpb25UeXBlcyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VHlwZSApID0+IHtcblx0XHRcdFx0XHRcdFx0dXBkYXRlQWN0aW9uKCBhY3Rpb24uaWQsICd0eXBlJywgbmV3VHlwZSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpY29uPSdlZGl0J1xuXHRcdFx0XHRcdFx0bGFiZWw9eyAnRWRpdCBBY3Rpb24nIH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEVkaXRlZEFjdGlvbiggKCkgPT4gKCB7XG5cdFx0XHRcdFx0XHRcdFx0Li4uYWN0aW9uLFxuXHRcdFx0XHRcdFx0XHR9ICkgKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdi8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aWNvbj0ncmFuZG9taXplJ1xuXHRcdFx0XHRcdFx0bGFiZWw9eyAnQ29uZGl0aW9ucycgfVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0UHJvY2Vzc2VkQWN0aW9uKCAoKSA9PiAoIHsgLi4uYWN0aW9uIH0gKSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8RHJvcGRvd25NZW51XG5cdFx0XHRcdFx0XHRpY29uPXsgJ2VsbGlwc2lzJyB9XG5cdFx0XHRcdFx0XHRsYWJlbD17ICdFZGl0LCBtb3ZlIG9yIGRlbGV0ZScgfVxuXHRcdFx0XHRcdFx0Y29udHJvbHM9eyBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ1VwJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnYXJyb3ctdXAnLFxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggMCAhPT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vdmVBY3Rpb24oIGluZGV4LCBpbmRleCAtIDEgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdEb3duJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnYXJyb3ctZG93bicsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IGluZGV4ID09PSBhY3Rpb25zLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoICggYWN0aW9ucy5sZW5ndGggLSAxICkgIT09IGluZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb3ZlQWN0aW9uKCBpbmRleCwgaW5kZXggKyAxICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnRGVsZXRlJyxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAndHJhc2gnLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUFjdGlvbiggaW5kZXggKTtcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8L0NhcmRCb2R5PlxuXHRcdFx0PC9DYXJkPlxuXHRcdH0gKSB9XG5cdFx0PEJ1dHRvblxuXHRcdFx0aXNQcmltYXJ5XG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRzZXRBY3Rpb25zKCBbXG5cdFx0XHRcdFx0Li4uYWN0aW9ucyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiAnc2VuZF9lbWFpbCcsXG5cdFx0XHRcdFx0XHRpZDogZ2V0UmFuZG9tSUQoKSxcblx0XHRcdFx0XHRcdHNldHRpbmdzOiB7fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdICk7XG5cdFx0XHR9IH1cblx0XHQ+XG5cdFx0XHR7ICcrIE5ldyBBY3Rpb24nIH1cblx0XHQ8L0J1dHRvbj5cblx0XHR7IGlzRWRpdCAmJiA8QWN0aW9uTW9kYWxcblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxuXHRcdFx0dGl0bGU9eyAnRWRpdCBBY3Rpb24nIH1cblx0XHRcdG9uVXBkYXRlQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdHVwZGF0ZUFjdGlvblNldHRpbmdzKCBlZGl0ZWRBY3Rpb24gKVxuXHRcdFx0fSB9XG5cdFx0XHRvbkNhbmNlbENsaWNrPXsgY2xvc2VNb2RhbCB9XG5cdFx0PlxuXHRcdFx0eyBDYWxsYmFjayAmJiA8Q2FsbGJhY2tcblx0XHRcdFx0c2V0dGluZ3M9eyBnZXRNZXJnZWRTZXR0aW5ncygpIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIGRhdGEgKSA9PiB7XG5cdFx0XHRcdFx0c2V0RWRpdGVkQWN0aW9uKCBwcmV2ID0+ICgge1xuXHRcdFx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHRcdC4uLnByZXYuc2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRcdFsgZWRpdGVkQWN0aW9uLnR5cGUgXTogZGF0YSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSApICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz4gfVxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cblx0XHR7IGlzRWRpdFByb2Nlc3NBY3Rpb24gJiYgPEFjdGlvbk1vZGFsXG5cdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdFx0dGl0bGU9eyAnRWRpdCBBY3Rpb24gQ29uZGl0aW9ucycgfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRFZGl0UHJvY2Vzc0FjdGlvbiggZmFsc2UgKSB9XG5cdFx0XHRvbkNhbmNlbENsaWNrPXsgKCkgPT4gc2V0RWRpdFByb2Nlc3NBY3Rpb24oIGZhbHNlICkgfVxuXHRcdD5cblx0XHRcdHsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gPFJlcGVhdGVyV2l0aFN0YXRlXG5cdFx0XHRcdFx0aXRlbXM9eyBwcm9jZXNzZWRBY3Rpb24uY29uZGl0aW9ucyB9XG5cdFx0XHRcdFx0bmV3SXRlbT17IG5ld0l0ZW1Db25kaXRpb24gfVxuXHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XG5cdFx0XHRcdFx0b25TYXZlSXRlbXM9eyB1cGRhdGVBY3Rpb25Db25kaXRpb24gfVxuXHRcdFx0XHRcdGFkZE5ld0J1dHRvbkxhYmVsPXsgX18oICdBZGQgTmV3IENvbmRpdGlvbicgKSB9XG5cdFx0XHRcdFx0aGVscD17IHtcblx0XHRcdFx0XHRcdGhlbHBWaXNpYmxlOiBjb25kaXRpb25zID0+IGNvbmRpdGlvbnMubGVuZ3RoID4gMSxcblx0XHRcdFx0XHRcdGhlbHBTb3VyY2U6IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5oZWxwRm9yUmVwZWF0ZXJzLFxuXHRcdFx0XHRcdFx0aGVscEtleTogJ2NvbmRpdGlvbmFsX2FjdGlvbicsXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IHtcblx0XHRcdFx0XHRcdGxldCBleGVjdXRlTGFiZWwgPSBfXyggJ1RvIGZ1bGZpbGwgdGhpcyBjb25kaXRpb24sIHRoZSByZXN1bHQgb2YgdGhlIGNoZWNrIG11c3QgYmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJztcblx0XHRcdFx0XHRcdGV4ZWN1dGVMYWJlbCArPSBjdXJyZW50SXRlbS5leGVjdXRlID8gJ1RSVUUnIDogJ0ZBTFNFJztcblxuXHRcdFx0XHRcdFx0cmV0dXJuIDw+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBleGVjdXRlTGFiZWwgfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBjdXJyZW50SXRlbS5leGVjdXRlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGV4ZWN1dGU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIk9wZXJhdG9yXCJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5vcGVyYXRvciB9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGNvbmRpdGlvbk9wZXJhdG9ycyB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBvcGVyYXRvcjogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRmllbGRcIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmZpZWxkIH1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBmaWVsZDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8RmllbGRXaXRoUHJlc2V0XG5cdFx0XHRcdFx0XHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8RHluYW1pY1ByZXNldFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5kZWZhdWx0IH1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZGVmYXVsdDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRleGNsdWRlU291cmNlcz17IFsgJ3F1ZXJ5X3ZhcicgXSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0XHRcdHRyaWdnZXJDbGFzc2VzPXsgWyAndHJpZ2dlcl9fdGV4dGFyZWEnIF0gfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJWYWx1ZSB0byBDb21wYXJlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZGVmYXVsdCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZGVmYXVsdDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+XG5cdFx0XHRcdFx0XHQ8Lz47XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdDwvUmVwZWF0ZXJXaXRoU3RhdGU+O1xuXHRcdFx0fSB9XG5cdFx0PC9BY3Rpb25Nb2RhbD4gfVxuXHQ8Lz5cbn0iLCJpbXBvcnQgUGx1Z2luQXJncyBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgYmFzZSA9IHtcblx0bmFtZTogJ2pmLWFyZ3MtcGFuZWwnLFxuXHR0aXRsZTogX18oICdGb3JtIFNldHRpbmdzJyApXG59O1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0cmVuZGVyOiBQbHVnaW5BcmdzLFxuXHRpY29uOiBudWxsXG59O1xuXG5leHBvcnQge1xuXHRiYXNlLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCBzdWJtaXRUeXBlcyA9IFtcblx0eyB2YWx1ZTogJycsIGxhYmVsOiAnLS0nIH0sXG5cdHsgdmFsdWU6ICdyZWxvYWQnLCBsYWJlbDogJ1BhZ2UgUmVsb2FkJyB9LFxuXHR7IHZhbHVlOiAnYWpheCcsIGxhYmVsOiAnQUpBWCcgfVxuXTtcblxuY29uc3QgZmllbGRzTGF5b3V0ID0gW1xuXHR7IHZhbHVlOiAnJywgbGFiZWw6ICctLScgfSxcblx0eyB2YWx1ZTogJ2NvbHVtbicsIGxhYmVsOiAnQ29sdW1uJyB9LFxuXHR7IHZhbHVlOiAncm93JywgbGFiZWw6ICdSb3cnIH1cbl07XG5cbmV4cG9ydCB7XG5cdHN1Ym1pdFR5cGVzLFxuXHRmaWVsZHNMYXlvdXRcbn07IiwiaW1wb3J0IHtcblx0ZmllbGRzTGF5b3V0LFxuXHRzdWJtaXRUeXBlc1xufSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IHsgdXNlTWV0YVN0YXRlIH0gPSBKZXRGQkhvb2tzO1xuXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpbkFyZ3MoKSB7XG5cblx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gPSB1c2VNZXRhU3RhdGUoICdfamZfYXJncycgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyAnRmllbGRzIExheW91dCcgfVxuXHRcdFx0dmFsdWU9eyBhcmdzLmZpZWxkc19sYXlvdXQgfVxuXHRcdFx0b3B0aW9ucz17IGZpZWxkc0xheW91dCB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHRmaWVsZHNfbGF5b3V0OiBuZXdWYWxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyAnUmVxdWlyZWQgTWFyaycgfVxuXHRcdFx0dmFsdWU9eyBhcmdzLnJlcXVpcmVkX21hcmsgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0cmVxdWlyZWRfbWFyazogbmV3VmFsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyAnU3VibWl0IFR5cGUnIH1cblx0XHRcdHZhbHVlPXsgYXJncy5zdWJtaXRfdHlwZSB9XG5cdFx0XHRvcHRpb25zPXsgc3VibWl0VHlwZXMgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0c3VibWl0X3R5cGU6IG5ld1ZhbFxuXHRcdFx0XHR9ICkgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0a2V5PXsgJ2VuYWJsZV9wcm9ncmVzcycgfVxuXHRcdFx0bGFiZWw9eyAnRW5hYmxlIGZvcm0gcGFnZXMgcHJvZ3Jlc3MnIH1cblx0XHRcdGNoZWNrZWQ9eyBhcmdzLmVuYWJsZV9wcm9ncmVzcyB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdHNldEFyZ3MoIHByZXYgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldixcblx0XHRcdFx0XHRlbmFibGVfcHJvZ3Jlc3M6IEJvb2xlYW4oIG5ld1ZhbCApXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0PC8+XG59OyIsImltcG9ydCBQbHVnaW5DYXB0Y2hhIGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBiYXNlID0ge1xuXHRuYW1lOiAnamYtY2FwdGNoYS1wYW5lbCcsXG5cdHRpdGxlOiBfXyggJ0NhcHRjaGEgU2V0dGluZ3MnIClcbn07XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRyZW5kZXI6IFBsdWdpbkNhcHRjaGEsXG5cdGljb246IG51bGxcbn07XG5cbmV4cG9ydCB7XG5cdGJhc2UsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGxhYmVscyA9IHtcblx0ZW5hYmxlZDogX18oICdFbmFibGUgcmVDQVBUQ0hBIHYzIGZvcm0gdmVyaWZpY2F0aW9uJyApLFxuXHRrZXk6IF9fKCAnU2l0ZSBLZXk6JyApLFxuXHRzZWNyZXQ6IF9fKCAnU2VjcmV0IEtleTonICksXG5cdHVzZV9nbG9iYWw6IF9fKCAnVXNlIEdsb2JhbCBTZXR0aW5ncycgKVxufTtcblxuZXhwb3J0IHsgbGFiZWxzIH07IiwiaW1wb3J0IHsgbGFiZWxzIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyB1c2VNZXRhU3RhdGUgfSA9IEpldEZCSG9va3M7XG5jb25zdCB7XG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHNcblxuY29uc3QgeyBnbG9iYWxUYWIgfSA9IEpldEZCQWN0aW9ucztcbmNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ2NhcHRjaGEtdGFiJyB9ICk7XG5cbmZ1bmN0aW9uIFBsdWdpbkNhcHRjaGEoKSB7XG5cblx0Y29uc3QgWyBhcmdzLCBzZXRBcmdzIF0gPSB1c2VNZXRhU3RhdGUoICdfamZfcmVjYXB0Y2hhJyApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRrZXk9eyAnZW5hYmxlZCcgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbHMuZW5hYmxlZCB9XG5cdFx0XHRjaGVja2VkPXsgYXJncy5lbmFibGVkIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdGVuYWJsZWQ6IEJvb2xlYW4oIG5ld1ZhbCApXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHR7IGFyZ3MuZW5hYmxlZCAmJiA8PlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0a2V5PXsgJ3VzZV9nbG9iYWwnIH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbHMudXNlX2dsb2JhbCB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBhcmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHVzZV9nbG9iYWwgPT4ge1xuXHRcdFx0XHRcdHNldEFyZ3MoIHByZXZBcmdzID0+ICgge1xuXHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0XHR1c2VfZ2xvYmFsOiBCb29sZWFuKCB1c2VfZ2xvYmFsIClcblx0XHRcdFx0XHR9ICkgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdGtleT17ICdzaXRlX2tleScgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVscy5rZXkgfVxuXHRcdFx0XHR2YWx1ZT17IGFyZ3MudXNlX2dsb2JhbCA/IGN1cnJlbnRUYWIua2V5IDogYXJncy5rZXkgfVxuXHRcdFx0XHRkaXNhYmxlZD17IGFyZ3MudXNlX2dsb2JhbCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdGtleTogbmV3VmFsdWVcblx0XHRcdFx0fSApICkgfVxuXHRcdFx0Lz5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9eyAnc2VjcmV0X2tleScgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVscy5zZWNyZXQgfVxuXHRcdFx0XHR2YWx1ZT17IGFyZ3MudXNlX2dsb2JhbCA/IGN1cnJlbnRUYWIuc2VjcmV0IDogYXJncy5zZWNyZXQgfVxuXHRcdFx0XHRkaXNhYmxlZD17IGFyZ3MudXNlX2dsb2JhbCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdHNlY3JldDogbmV3VmFsdWVcblx0XHRcdFx0fSApICkgfVxuXHRcdFx0Lz5cblx0XHRcdDxzcGFuPnsgJ1JlZ2lzdGVyIHJlQ0FQVENIQSB2MyBrZXlzICcgfVxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0PC8+IH1cblx0PC8+XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luQ2FwdGNoYTtcbiIsImltcG9ydCBQbHVnaW5HYXRld2F5cyBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgYmFzZSA9IHtcblx0bmFtZTogJ2pmLWdhdGV3YXlzLXBhbmVsJyxcblx0dGl0bGU6IF9fKCAnR2F0ZXdheXMgU2V0dGluZ3MnICksXG5cdGNvbmRpdGlvbjogd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzLmFsbG93ZWRcbn07XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRyZW5kZXI6IFBsdWdpbkdhdGV3YXlzLFxuXHRpY29uOiBudWxsXG59O1xuXG5leHBvcnQge1xuXHRiYXNlLFxuXHRzZXR0aW5nc1xufTsiLCJpbXBvcnQgR2F0ZXdheXNFZGl0b3IgZnJvbSBcIi4uLy4uL2dhdGV3YXlzL2dhdGV3YXlzLWVkaXRvclwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFJhZGlvQ29udHJvbCxcblx0QnV0dG9uLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0dXNlU2VsZWN0LFxuXHR1c2VEaXNwYXRjaFxufSA9IHdwLmRhdGE7XG5cbmNvbnN0IHtcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgQWN0aW9uTW9kYWwgfSA9IEpldEZCQ29tcG9uZW50cztcblxuZnVuY3Rpb24gUGx1Z2luR2F0ZXdheXMoKSB7XG5cdGNvbnN0IGdhdGV3YXlzRGF0YSA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5nYXRld2F5cztcblxuXHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHRyZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XG5cdH0gKTtcblxuXHRjb25zdCB7XG5cdFx0ZWRpdFBvc3Rcblx0fSA9IHVzZURpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XG5cblx0Y29uc3QgZ2F0ZXdheXNQcm9wcyA9IHtcblx0XHRhY3RpdmVBY3Rpb25zOiBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zICksXG5cdFx0Z2F0ZXdheXNBcmdzOiBKU09OLnBhcnNlKCBtZXRhLl9qZl9nYXRld2F5cyB8fCAne30nICksXG5cdH07XG5cblx0Y29uc3QgWyBnYXRld2F5LCBzZXRHYXRld2F5IF0gPSB1c2VTdGF0ZSggZ2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MuZ2F0ZXdheSApO1xuXG5cdGNvbnN0IFsgaXNFZGl0LCBzZXRFZGl0IF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuXHRcdHNldEVkaXQoIGZhbHNlICk7XG5cdH07XG5cblx0Y29uc3QgZ2V0R2F0ZXdheUxhYmVsID0gKCB0eXBlICkgPT4ge1xuXHRcdHJldHVybiAoIGdhdGV3YXlzRGF0YS5saXN0LmZpbmQoIGVsID0+IGVsLnZhbHVlID09PSB0eXBlICkubGFiZWwgKTtcblx0fTtcblxuXHRjb25zdCBzYXZlQXJncyA9IG5ld0FyZ3MgPT4ge1xuXHRcdGVkaXRQb3N0KCB7XG5cdFx0XHRtZXRhOiAoIHtcblx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0X2pmX2dhdGV3YXlzOiBKU09OLnN0cmluZ2lmeSggbmV3QXJncyApXG5cdFx0XHR9IClcblx0XHR9ICk7XG5cdH07XG5cblx0Y29uc3Qgc2F2ZUdhdGV3YXkgPSB0eXBlID0+IHtcblx0XHRnYXRld2F5c1Byb3BzLmdhdGV3YXlzQXJncy5nYXRld2F5ID0gdHlwZTtcblxuXHRcdGVkaXRQb3N0KCB7XG5cdFx0XHRtZXRhOiAoIHtcblx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0X2pmX2dhdGV3YXlzOiBKU09OLnN0cmluZ2lmeSggZ2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MgKVxuXHRcdFx0fSApXG5cdFx0fSApO1xuXHR9XG5cblx0Y29uc3QgaXNzZXRBY3Rpb25UeXBlID0gdHlwZSA9PiB7XG5cdFx0cmV0dXJuIEJvb2xlYW4oIGdhdGV3YXlzUHJvcHMuYWN0aXZlQWN0aW9ucy5maW5kKCBhY3Rpb24gPT4gdHlwZSA9PT0gYWN0aW9uLnR5cGUgKSApO1xuXHR9O1xuXG5cdGNvbnN0IGlzRGlzYWJsZWQgPSAhIGlzc2V0QWN0aW9uVHlwZSggJ2luc2VydF9wb3N0JyApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNhdmVHYXRld2F5KCBnYXRld2F5ICk7XG5cdH0sIFsgZ2F0ZXdheSBdICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFJhZGlvQ29udHJvbFxuXHRcdFx0a2V5PXsgJ2dhdGV3YXlzX3JhZGlvX2NvbnRyb2wnIH1cblx0XHRcdHNlbGVjdGVkPXsgZ2F0ZXdheSB9XG5cdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHR7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcblx0XHRcdFx0Li4uZ2F0ZXdheXNEYXRhLmxpc3Rcblx0XHRcdF0gfVxuXHRcdFx0b25DaGFuZ2U9eyBzZXRHYXRld2F5IH1cblx0XHQvPlxuXHRcdHsgKCBnYXRld2F5ICYmICdub25lJyAhPT0gZ2F0ZXdheSApICYmIDw+XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRFZGl0KCB0cnVlICkgfVxuXHRcdFx0XHRpY29uPXsgJ2FkbWluLXRvb2xzJyB9XG5cdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdG1hcmdpbjogJzFlbSAwJ1xuXHRcdFx0XHR9IH1cblx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0Rpc2FibGVkIH1cblx0XHRcdD5cblx0XHRcdFx0eyBfXyggJ0VkaXQnICkgfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0XHR7IGlzRGlzYWJsZWQgJiYgPHA+eyBfXyggJ1BsZWFzZSBhZGQgXFxgSW5zZXJ0L1VwZGF0ZSBQb3N0XFxgIGFjdGlvbicsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3A+IH1cblx0XHQ8Lz4gfVxuXHRcdHsgaXNFZGl0ICYmIChcblx0XHRcdDxBY3Rpb25Nb2RhbFxuXHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxuXHRcdFx0XHR0aXRsZT17IGBFZGl0ICR7IGdldEdhdGV3YXlMYWJlbCggZ2F0ZXdheSApIH0gU2V0dGluZ3NgIH1cblx0XHRcdD5cblx0XHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8PlxuXHRcdFx0XHRcdDxHYXRld2F5c0VkaXRvclxuXHRcdFx0XHRcdFx0eyAuLi5nYXRld2F5c1Byb3BzIH1cblx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cblx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgc2F2ZUFyZ3MgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvPiB9XG5cdFx0XHQ8L0FjdGlvbk1vZGFsPiApIH1cblx0PC8+O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbkdhdGV3YXlzO1xuIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBhcmdzIGZyb20gXCIuL2FyZ3VtZW50c1wiO1xuaW1wb3J0ICogYXMgY2FwdGNoYSBmcm9tIFwiLi9jYXB0Y2hhXCI7XG5pbXBvcnQgKiBhcyBnYXRld2F5cyBmcm9tIFwiLi9nYXRld2F5c1wiO1xuaW1wb3J0ICogYXMgcHJlc2V0IGZyb20gXCIuL3ByZXNldFwiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3Qge1xuXHRhcHBseUZpbHRlcnNcbn0gPSB3cC5ob29rcztcblxuY29uc3Qge1xuXHRyZWdpc3RlclBsdWdpblxufSA9IHdwLnBsdWdpbnM7XG5cbmNvbnN0IHtcblx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcbn0gPSB3cC5lZGl0UG9zdDtcblxuY29uc3Qgd2l0aFBsdWdpblByb3BzID0gKCBzZXR0aW5ncywgYmFzZSApID0+IHtcblx0Y29uc3QgUGx1Z2luUmVuZGVyID0gc2V0dGluZ3MucmVuZGVyO1xuXHRyZXR1cm4gKCkgPT4gPFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsIHsgLi4uYmFzZSB9IGtleT17IGBwbHVnaW4tcGFuZWwtJHsgYmFzZS5uYW1lIH1gIH0+XG5cdFx0PFBsdWdpblJlbmRlciBrZXk9eyBgcGx1Z2luLXJlbmRlci0keyBiYXNlLm5hbWUgfWAgfS8+XG5cdDwvUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw+O1xufVxuXG5jb25zdCByZWdpc3RlckpmYlBsdWdpbiA9IHBsdWdpbiA9PiB7XG5cdGNvbnN0IHsgYmFzZSwgc2V0dGluZ3MgfSA9IHBsdWdpbjtcblxuXHRzZXR0aW5ncy5yZW5kZXIgPSB3aXRoUGx1Z2luUHJvcHMoIHNldHRpbmdzLCBiYXNlICk7XG5cblx0cmVnaXN0ZXJQbHVnaW4oIGJhc2UubmFtZSwgc2V0dGluZ3MgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyUGx1Z2lucygpIHtcblx0Y29uc3Qgc29ydGVkUGx1Z2lucyA9IFtdO1xuXHRjb25zdCBqZmJQbHVnaW5zID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLnBsdWdpbnMnLCBbXG5cdFx0YXJncyxcblx0XHRjYXB0Y2hhLFxuXHRcdGdhdGV3YXlzLFxuXHRcdGFjdGlvbnMsXG5cdFx0cHJlc2V0LFxuXHRcdG1lc3NhZ2VzXG5cdF0gKTtcblxuXHRqZmJQbHVnaW5zLmZvckVhY2goIHBsdWdpbiA9PiB7XG5cdFx0Y29uc3QgeyBiYXNlOiB7IG5hbWUsIGNvbmRpdGlvbiA9IHRydWUgfSB9ID0gcGx1Z2luO1xuXG5cdFx0aWYgKCAhIGNvbmRpdGlvbiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBiZWZvcmVQbHVnaW4gPSBhcHBseUZpbHRlcnMoIGBqZXQuZmIucmVnaXN0ZXIucGx1Z2luLiR7IG5hbWUgfS5iZWZvcmVgLCBbXSApO1xuXHRcdGlmICggYmVmb3JlUGx1Z2luICkge1xuXHRcdFx0c29ydGVkUGx1Z2lucy5wdXNoKCAuLi5iZWZvcmVQbHVnaW4gKTtcblx0XHR9XG5cdFx0c29ydGVkUGx1Z2lucy5wdXNoKCBwbHVnaW4gKTtcblxuXHRcdGNvbnN0IGFmdGVyUGx1Z2luID0gYXBwbHlGaWx0ZXJzKCBgamV0LmZiLnJlZ2lzdGVyLnBsdWdpbi4keyBuYW1lIH0uYWZ0ZXJgLCBbXSApO1xuXHRcdGlmICggYWZ0ZXJQbHVnaW4gKSB7XG5cdFx0XHRzb3J0ZWRQbHVnaW5zLnB1c2goIC4uLmFmdGVyUGx1Z2luICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0c29ydGVkUGx1Z2lucy5mb3JFYWNoKCByZWdpc3RlckpmYlBsdWdpbiApO1xufVxuXG4iLCJpbXBvcnQgUGx1Z2luTWVzc2FnZXMgZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGJhc2UgPSB7XG5cdG5hbWU6ICdqZi1tZXNzYWdlcy1wYW5lbCcsXG5cdHRpdGxlOiBfXyggJ0dlbmVyYWwgTWVzc2FnZXMgU2V0dGluZ3MnICksXG59O1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0cmVuZGVyOiBQbHVnaW5NZXNzYWdlcyxcblx0aWNvbjogbnVsbFxufTtcblxuZXhwb3J0IHtcblx0YmFzZSxcblx0c2V0dGluZ3Ncbn07IiwiY29uc3QgeyBUb29scyB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7XG5cdHVzZVNlbGVjdCxcblx0dXNlRGlzcGF0Y2hcbn0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdHVzZVN0YXRlLFxuXHR1c2VFZmZlY3Rcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdFRleHRDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuZnVuY3Rpb24gUGx1Z2luTWVzc2FnZXMoKSB7XG5cblx0Y29uc3QgbWV0YSA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XG5cblx0Y29uc3Qge1xuXHRcdGVkaXRQb3N0XG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xuXG5cdGNvbnN0IGdldERlZmF1bHRNZXNzYWdlc1ZhbHVlcyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZhdWx0cyA9IHt9O1xuXHRcdE9iamVjdC5lbnRyaWVzKCBKZXRGb3JtRWRpdG9yRGF0YS5tZXNzYWdlc0RlZmF1bHQgKS5mb3JFYWNoKCAoIFsgdHlwZSwgZGF0YSBdICkgPT4ge1xuXHRcdFx0ZGVmYXVsdHNbIHR5cGUgXSA9IGRhdGEudmFsdWU7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIGRlZmF1bHRzO1xuXHR9XG5cblx0Y29uc3QgWyBtZXNzYWdlcywgc2V0TWVzc2FnZXMgXSA9IHVzZVN0YXRlKCAoKSA9PiB7XG5cdFx0Y29uc3QgbWV0YU1lc3NhZ2VzID0gSlNPTi5wYXJzZSggbWV0YS5famZfbWVzc2FnZXMgfHwgJ3t9JyApO1xuXHRcdHJldHVybiBUb29scy5pc0VtcHR5T2JqZWN0KCBtZXRhTWVzc2FnZXMgKSA/IGdldERlZmF1bHRNZXNzYWdlc1ZhbHVlcygpIDogbWV0YU1lc3NhZ2VzO1xuXHR9ICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0ZWRpdFBvc3QoIHtcblx0XHRcdG1ldGE6ICgge1xuXHRcdFx0XHQuLi5tZXRhLFxuXHRcdFx0XHRfamZfbWVzc2FnZXM6IEpTT04uc3RyaW5naWZ5KCBtZXNzYWdlcyApXG5cdFx0XHR9IClcblx0XHR9ICk7XG5cblx0fSApO1xuXG5cdGNvbnN0IG9uQ2hhbmdlTWVzc2FnZSA9ICggdHlwZSwgdmFsdWUgKSA9PiB7XG5cdFx0c2V0TWVzc2FnZXMoIHByZXYgPT4gKCB7IC4uLnByZXYsIFsgdHlwZSBdOiB2YWx1ZSB9ICkgKTtcblx0fVxuXG5cdHJldHVybiA8PlxuXHRcdHsgT2JqZWN0LmVudHJpZXMoIG1lc3NhZ2VzICkubWFwKCAoIFsgdHlwZSwgdGV4dCBdLCBpZCApID0+IHtcblx0XHRcdHJldHVybiBKZXRGb3JtRWRpdG9yRGF0YS5tZXNzYWdlc0RlZmF1bHRbIHR5cGUgXSAmJiA8VGV4dENvbnRyb2xcblx0XHRcdFx0a2V5PXsgdHlwZSArIGlkIH1cblx0XHRcdFx0bGFiZWw9eyBKZXRGb3JtRWRpdG9yRGF0YS5tZXNzYWdlc0RlZmF1bHRbIHR5cGUgXS5sYWJlbCB9XG5cdFx0XHRcdHZhbHVlPXsgdGV4dCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VNZXNzYWdlKCB0eXBlLCBuZXdWYWx1ZSApIH1cblx0XHRcdC8+O1xuXHRcdH0gKSB9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luTWVzc2FnZXM7IiwiaW1wb3J0IFBsdWdpblByZXNldCBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgYmFzZSA9IHtcblx0bmFtZTogJ2pmLXByZXNldC1wYW5lbCcsXG5cdHRpdGxlOiBfXyggJ1ByZXNldCBTZXR0aW5ncycgKSxcbn07XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRyZW5kZXI6IFBsdWdpblByZXNldCxcblx0aWNvbjogbnVsbFxufTtcblxuZXhwb3J0IHtcblx0YmFzZSxcblx0c2V0dGluZ3Ncbn07IiwiaW1wb3J0IEdlbmVyYWxQcmVzZXQgZnJvbSBcIkBjb21wb25lbnRzL3ByZXNldHMvZ2VuZXJhbC1wcmVzZXRcIjtcblxuY29uc3QgeyB1c2VNZXRhU3RhdGUgfSA9IEpldEZCSG9va3M7XG5jb25zdCB7IGdldEF2YWlsYWJsZUZpZWxkcyB9ID0gSmV0RkJBY3Rpb25zO1xuXG5mdW5jdGlvbiBQbHVnaW5QcmVzZXQoKSB7XG5cblx0Y29uc3Qge1xuXHRcdFRvZ2dsZUNvbnRyb2wsXG5cdH0gPSB3cC5jb21wb25lbnRzO1xuXG5cdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX3ByZXNldCcgKTtcblx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEF2YWlsYWJsZUZpZWxkcygpO1xuXG5cdHJldHVybiA8PlxuXHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRrZXk9eyAnZW5hYmxlX3ByZXNldCcgfVxuXHRcdFx0bGFiZWw9eyAnRW5hYmxlJyB9XG5cdFx0XHRjaGVja2VkPXsgYXJncy5lbmFibGVkIH1cblx0XHRcdGhlbHA9eyAnQ2hlY2sgdGhpcyB0byBlbmFibGUgZ2xvYmFsIGZvcm0gcHJlc2V0JyB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHRlbmFibGVkOiBuZXdWYWxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdHsgYXJncy5lbmFibGVkICYmIDxHZW5lcmFsUHJlc2V0XG5cdFx0XHRrZXk9eyAnX2pmX3ByZXNldF9nZW5lcmFsJyB9XG5cdFx0XHR2YWx1ZT17IGFyZ3MgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0Li4ubmV3VmFsLFxuXHRcdFx0XHRcdGVuYWJsZWQ6IHByZXZBcmdzLmVuYWJsZWRcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IH1cblx0XHRcdGF2YWlsYWJsZUZpZWxkcz17IGZvcm1GaWVsZHMgfVxuXHRcdC8+IH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5QcmVzZXQ7XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFHQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQURBO0FBR0E7QUFDQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXNCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBY0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFhQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7OztBQzVLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBT0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQU9BOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQU9BO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaUJBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBbEVBO0FBZEE7QUE4RkE7Ozs7Ozs7Ozs7OztBQzNLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUZBO0FBUkE7QUFQQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBL0JBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBYUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFhQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOzs7O0FBbEdBO0FBQ0E7QUFvR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBR0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQWJBO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7Ozs7QUFwSkE7QUFDQTtBQXFKQTs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBT0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBOzs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQVFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUVBO0FBREE7QUFNQTtBQURBO0FBSUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBSkE7QUFTQTs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQU9BO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFEQTtBQUlBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBR0E7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBREE7QUFHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFFQTtBQU1BO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUZBO0FBQ0E7QUFDQTtBQU1BO0FBSEE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBRUE7QUFHQTtBQURBO0FBSUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFVQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQVdBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQVFBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFYQTtBQWVBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQURBO0FBSUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFPQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUZBO0FBT0E7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFPQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBR0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBWUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQVNBO0FBSEE7QUFDQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBWUE7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQWNBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQWNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDNU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQVpBO0FBUEE7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUZBO0FBT0E7QUFEQTtBQU1BOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQURBO0FBSUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFIQTtBQVFBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFhQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQWFBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDM0tBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVNBOzs7Ozs7Ozs7Ozs7QUMxRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFLQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFFQTtBQURBO0FBTUE7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFTQTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFKQTtBQWNBOzs7O0FBOUVBO0FBQ0E7QUFnRkE7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUFBO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFJQTtBQURBO0FBT0E7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFoQ0E7QUFDQTtBQWtDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFGQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBS0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBakRBO0FBQUE7QUFBQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMURBO0FBQUE7QUFBQTtBQTZEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQTFFQTtBQUFBO0FBQUE7QUE2RUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBS0E7QUFEQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFKQTtBQW9CQTtBQUNBO0FBck1BO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFJQTs7OztBQXJFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBREE7QUFHQTtBQUFBO0FBdUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQW5CQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFLQTtBQUZBO0FBQ0E7QUFLQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFQQTtBQWFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBS0E7QUFDQTtBQS9JQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFXQTtBQUVBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQVdBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUEvRkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQVRBO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXRCQTtBQTBCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBekVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBS0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQWlDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEzQ0E7QUFBQTtBQUFBO0FBOENBO0FBRUE7QUFDQTtBQWpEQTtBQUFBO0FBQUE7QUFtREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBY0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQUhBO0FBZUE7QUFDQTtBQWhMQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBSEE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUE4QkE7QUFJQTtBQWxDQTtBQUFBO0FBQUE7QUFxQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQXhGQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFLQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBV0E7QUFDQTtBQTVGQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQU1BO0FBRkE7QUFDQTtBQU9BO0FBSEE7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNKQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF2QkE7QUFBQTtBQUFBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBbENBO0FBQUE7QUFBQTtBQW9DQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBWUE7QUFDQTtBQXJGQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBS0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFOQTtBQVNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQXNCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFhQTtBQUNBO0FBN0VBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFTQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUUE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFOQTtBQUFBO0FBY0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBTkE7QUFBQTtBQWNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBQUE7QUFnQkE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBWEE7QUFjQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBYUE7Ozs7Ozs7Ozs7OztBQ3JRQTtBQUFBO0FBQUE7QUFLQTtBQUZBO0FBQ0E7QUFPQTtBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFTQTtBQURBO0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFVQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBeEJBO0FBb0NBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVhBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQU9BO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBYUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFTQTtBQUVBO0FBR0E7Ozs7Ozs7Ozs7OztBQ3pUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBS0E7QUFBQTtBQU1BO0FBSEE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFUQTtBQVlBO0FBQUE7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBQ0E7QUFBQTtBQUlBO0FBRkE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBS0E7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBUEE7QUFlQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFVQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUtBO0FBRkE7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=