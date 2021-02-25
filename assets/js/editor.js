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

/***/ "./editor/blocks/base-block.json":
/*!***************************************!*\
  !*** ./editor/blocks/base-block.json ***!
  \***************************************/
/*! exports provided: attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/block-wrappers.js":
/*!*****************************************!*\
  !*** ./editor/blocks/block-wrappers.js ***!
  \*****************************************/
/*! exports provided: getEditWrapperProps, withCustomProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditWrapperProps", function() { return getEditWrapperProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withCustomProps", function() { return withCustomProps; });
/* harmony import */ var _base_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-block.json */ "./editor/blocks/base-block.json");
var _base_block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./base-block.json */ "./editor/blocks/base-block.json", 1);
/* harmony import */ var _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/hooks-helper */ "./editor/helpers/hooks-helper.js");
/* harmony import */ var _help_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-messages */ "./editor/blocks/help-messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var editProps = _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_1__["jfbHooks"].applyFilters('jet.fb.register.editProps', [{
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
  callable: _help_messages__WEBPACK_IMPORTED_MODULE_2__["getHelpInstance"]
}]);
function getEditWrapperProps(props) {
  var attributes = _base_block_json__WEBPACK_IMPORTED_MODULE_0__.attributes;
  return _objectSpread(_objectSpread({}, attributes), props);
}
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

/***/ }),

/***/ "./editor/blocks/calculated-field/block.json":
/*!***************************************************!*\
  !*** ./editor/blocks/calculated-field/block.json ***!
  \***************************************************/
/*! exports provided: apiVersion, name, category, icon, keywords, textdomain, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/calculated-field\",\"category\":\"jet-form-builder-fields\",\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M30.0333 40.0333H27.3667C26.9775 40.0333 26.6418 40.195 26.396 40.4408C26.1353 40.7015 26 41.0418 26 41.4V43.6C26 43.9557 26.1322 44.2795 26.3598 44.5325L26.395 44.5716L26.4342 44.6068C26.6871 44.8345 27.011 44.9667 27.3667 44.9667H30.0333V47.6333C30.0333 47.9915 30.1686 48.3318 30.4293 48.5925C30.6751 48.8383 31.0109 49 31.4 49H33.6C33.9754 49 34.3116 48.8484 34.5595 48.5928C34.8151 48.3449 34.9667 48.0087 34.9667 47.6333V44.9667H37.6333C37.9915 44.9667 38.3318 44.8314 38.5925 44.5707C38.8383 44.3249 39 43.9891 39 43.6V41.4C39 41.0246 38.8484 40.6884 38.5928 40.4405C38.3449 40.1849 38.0087 40.0333 37.6333 40.0333H34.9667V37.3667C34.9667 36.9913 34.8151 36.6551 34.5595 36.4072C34.3116 36.1516 33.9754 36 33.6 36H31.4C31.0109 36 30.6751 36.1617 30.4294 36.4075L31.1365 37.1146L30.4294 36.4075C30.1686 36.6682 30.0333 37.0085 30.0333 37.3667V40.0333Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M52.0688 45.9949L52.0688 45.9949L52.0743 46.0003C52.4373 46.3595 52.6155 46.7809 52.6155 47.3289C52.6155 48.0345 52.3912 48.4956 51.9978 48.833C51.5866 49.1856 50.9592 49.4211 49.9936 49.4211C49.0383 49.4211 48.4404 49.1544 48.0492 48.7441C47.6528 48.3284 47.3845 47.6705 47.3845 46.6184V45.6184H46.3845H44H43V46.6184C43 48.53 43.4997 50.1667 44.6052 51.4134L44.6051 51.4135L44.6112 51.4202C45.528 52.4355 46.7156 53.0671 48.1171 53.3503V55V56H49.1171H51.0247H52.0247V55V53.3438C53.3759 53.0668 54.5232 52.4931 55.4047 51.5761C56.4928 50.4535 57 48.9947 57 47.3026C57 46.2477 56.8 45.2769 56.3652 44.4197C55.9365 43.5574 55.2757 42.8331 54.4266 42.2374C53.5819 41.63 52.4558 41.1146 51.0945 40.6692C49.8425 40.2485 49.0609 39.8226 48.6377 39.4384C48.3044 39.1212 48.1063 38.6866 48.1063 38.0263C48.1063 37.2533 48.3177 36.7877 48.6213 36.4875L48.6214 36.4876L48.6271 36.4818C48.9248 36.1827 49.4162 35.9605 50.2642 35.9605C50.9576 35.9605 51.4386 36.1996 51.8128 36.6729C52.2087 37.1735 52.4608 37.9134 52.4608 39V40H53.4608H55.8324H56.8324V39C56.8324 37.0613 56.3974 35.4023 55.4108 34.1368C54.607 33.0966 53.5388 32.4155 52.2567 32.0765V30V29H51.2567H49.3362H48.3362V30V32.0453C47.0883 32.342 46.0271 32.9372 45.2014 33.8592L45.2014 33.8591L45.1979 33.863C44.1926 34.9973 43.7218 36.4265 43.7218 38.0658C43.7218 39.6897 44.2078 41.1066 45.2306 42.2368L45.2306 42.2368L45.2373 42.2441C46.244 43.3347 47.7621 44.1442 49.6705 44.7402C50.9292 45.1697 51.6832 45.6073 52.0688 45.9949Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"field\",\"calculated\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"attributes\":{\"calc_formula\":{\"type\":\"string\",\"default\":\"\"},\"precision\":{\"type\":\"number\",\"default\":2},\"calc_prefix\":{\"type\":\"string\",\"default\":\"\"},\"calc_suffix\":{\"type\":\"string\",\"default\":\"\"},\"calc_hidden\":{\"type\":\"boolean\",\"default\":false},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/calculated-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/calculated-field/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\calculated-field\\edit.js: Unexpected token (40:1)\n\n\u001b[0m \u001b[90m 38 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mNumberControl\u001b[39m \u001b[33m=\u001b[39m __experimentalNumberControl\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 40 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 | \u001b[39m\u001b[36mconst\u001b[39m { useState\u001b[33m,\u001b[39m useEffect } \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39melement\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m\u001b[36mconst\u001b[39m help \u001b[33m=\u001b[39m {\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/checkbox-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"field\",\"checkbox\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"6\\\" width=\\\"62\\\" height=\\\"52\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"7\\\" y=\\\"36\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"3\\\" fill=\\\"#6F8BFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"28\\\" y=\\\"41\\\" width=\\\"30\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><path d=\\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\\" fill=\\\"#162B40\\\"/><rect x=\\\"28\\\" y=\\\"17\\\" width=\\\"30\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><path d=\\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M11 44L14 47L19 41\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"/><rect x=\\\"7\\\" y=\\\"12\\\" width=\\\"16\\\" height=\\\"16\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"field_options_from\":{\"type\":\"string\",\"default\":\"manual_input\"},\"field_options\":{\"type\":\"array\",\"default\":[]},\"field_options_post_type\":{\"type\":\"string\",\"default\":\"post\"},\"field_options_tax\":{\"type\":\"string\",\"default\":\"category\"},\"field_options_key\":{\"type\":\"string\",\"default\":\"\"},\"generator_function\":{\"type\":\"string\",\"default\":\"\"},\"generator_field\":{\"type\":\"string\",\"default\":\"\"},\"calculated_value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"value_from_key\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/checkbox-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/checkbox-field/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\checkbox-field\\edit.js: Unexpected token (38:1)\n\n\u001b[0m \u001b[90m 36 | \u001b[39m} \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mcomponents\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 38 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 | \u001b[39mwindow\u001b[33m.\u001b[39mjetFormBuilderBlockCallbacks[ block ]\u001b[33m.\u001b[39medit \u001b[33m=\u001b[39m \u001b[36mclass\u001b[39m \u001b[33mCheckboxEdit\u001b[39m \u001b[36mextends\u001b[39m wp\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 41 | \u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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
  useEditProps: ['uniqKey', 'blockName']
};


/***/ }),

/***/ "./editor/blocks/conditional-block/block.json":
/*!****************************************************!*\
  !*** ./editor/blocks/conditional-block/block.json ***!
  \****************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/conditional-block\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"block\",\"conditonal\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<SVG width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" role=\\\"img\\\" aria-hidden=\\\"true\\\" focusable=\\\"false\\\"><Path d=\\\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z\\\"></Path></SVG>\",\"attributes\":{\"conditions\":{\"type\":\"array\",\"default\":[]}}}");

/***/ }),

/***/ "./editor/blocks/conditional-block/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/conditional-block/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\conditional-block\\edit.js: Identifier 'uniqKey' has already been declared (86:7)\n\n\u001b[0m \u001b[90m 84 | \u001b[39m\t\u001b[36mconst\u001b[39m formFields \u001b[33m=\u001b[39m getFormFieldsBlocks( []\u001b[33m,\u001b[39m \u001b[32m'--'\u001b[39m )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 86 | \u001b[39m\t\u001b[36mconst\u001b[39m uniqKey \u001b[33m=\u001b[39m suffix \u001b[33m=>\u001b[39m \u001b[32m`${ block }-${ suffix }`\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 87 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 88 | \u001b[39m\t\u001b[36mreturn\u001b[39m [\u001b[0m\n\u001b[0m \u001b[90m 89 | \u001b[39m\t\t\u001b[33m<\u001b[39m\u001b[33mBlockControls\u001b[39m key\u001b[33m=\u001b[39m{ uniqKey( \u001b[32m'BlockControls'\u001b[39m ) }\u001b[33m>\u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4793:12)\n    at ScopeHandler.declareName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4759:12)\n    at Object.checkLVal (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9261:22)\n    at Object.parseVarId (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11837:10)\n    at Object.parseVar (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11812:12)\n    at Object.parseVarStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11624:10)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11223:21)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseBlock (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11701:10)\n    at Object.parseFunctionBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:10708:24)\n    at Object.parseFunctionBodyAndFinish (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:10691:10)\n    at C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11871:12\n    at Object.withTopicForbiddingContext (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11031:14)\n    at Object.parseFunction (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11870:10)\n    at Object.parseExportDefaultExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12345:19)\n    at Object.parseExport (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12260:31)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11260:27)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)");

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

/***/ "./editor/blocks/date-field/block.json":
/*!*********************************************!*\
  !*** ./editor/blocks/date-field/block.json ***!
  \*********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/date-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"field\",\"date\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"15\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"31\\\" y=\\\"32.2\\\" width=\\\"26\\\" height=\\\"28.8\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M31 35.2C31 33.5431 32.3431 32.2 34 32.2H54C55.6569 32.2 57 33.5431 57 35.2V43.4H31V35.2Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M36.4615 30C36.4615 29.4477 36.9092 29 37.4615 29H37.6154C38.1676 29 38.6154 29.4477 38.6154 30V34.6C38.6154 35.1523 38.1676 35.6 37.6154 35.6H37.4615C36.9092 35.6 36.4615 35.1523 36.4615 34.6V30Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M49.3846 30C49.3846 29.4477 49.8323 29 50.3846 29H50.5384C51.0907 29 51.5384 29.4477 51.5384 30V34.6C51.5384 35.1523 51.0907 35.6 50.5384 35.6H50.3846C49.8323 35.6 49.3846 35.1523 49.3846 34.6V30Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"is_timestamp\":{\"type\":\"boolean\",\"default\":false},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/date-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/date-field/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\date-field\\edit.js: Unexpected token (41:1)\n\n\u001b[0m \u001b[90m 39 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 40 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 41 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 43 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mDateEdit\u001b[39m( props ) {\u001b[0m\n\u001b[0m \u001b[90m 44 | \u001b[39m\t\u001b[36mconst\u001b[39m blockProps \u001b[33m=\u001b[39m useBlockProps()\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/datetime-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"field\",\"date\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"15\\\" width=\\\"62\\\" height=\\\"26\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"31\\\" y=\\\"32.2\\\" width=\\\"26\\\" height=\\\"28.8\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M31 35.2C31 33.5431 32.3431 32.2 34 32.2H54C55.6569 32.2 57 33.5431 57 35.2V43.4H31V35.2Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M36.4615 30C36.4615 29.4477 36.9092 29 37.4615 29H37.6154C38.1676 29 38.6154 29.4477 38.6154 30V34.6C38.6154 35.1523 38.1676 35.6 37.6154 35.6H37.4615C36.9092 35.6 36.4615 35.1523 36.4615 34.6V30Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M49.3846 30C49.3846 29.4477 49.8323 29 50.3846 29H50.5384C51.0907 29 51.5384 29.4477 51.5384 30V34.6C51.5384 35.1523 51.0907 35.6 50.5384 35.6H50.3846C49.8323 35.6 49.3846 35.1523 49.3846 34.6V30Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"is_timestamp\":{\"type\":\"boolean\",\"default\":false},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"placeholder\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/datetime-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/datetime-field/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\datetime-field\\edit.js: Unexpected token (21:1)\n\n\u001b[0m \u001b[90m 19 | \u001b[39m\u001b[36mconst\u001b[39m uniqKey \u001b[33m=\u001b[39m suffix \u001b[33m=>\u001b[39m \u001b[32m`${ block }-${ suffix }`\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mDateTimeEdit\u001b[39m( props ) {\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m\t\u001b[36mconst\u001b[39m blockProps \u001b[33m=\u001b[39m useBlockProps()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/form-break-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"block\",\"break\",\"pagebreak\",\"formbreak\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"29\\\" y=\\\"1\\\" width=\\\"34\\\" height=\\\"34\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"22\\\" width=\\\"41\\\" height=\\\"41\\\" rx=\\\"3\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><path d=\\\"M23.3721 49H20.832V39.209L17.7998 40.1494V38.084L23.0996 36.1855H23.3721V49Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M50.9795 23H44.1572V21.6465L47.377 18.2148C47.819 17.7318 48.1449 17.3102 48.3545 16.9502C48.5687 16.5902 48.6758 16.2484 48.6758 15.9248C48.6758 15.4827 48.5641 15.1364 48.3408 14.8857C48.1175 14.6305 47.7985 14.5029 47.3838 14.5029C46.9372 14.5029 46.584 14.6579 46.3242 14.9678C46.069 15.2731 45.9414 15.6764 45.9414 16.1777H43.959C43.959 15.5716 44.1025 15.0179 44.3896 14.5166C44.6813 14.0153 45.0915 13.6234 45.6201 13.3408C46.1488 13.0537 46.748 12.9102 47.418 12.9102C48.4434 12.9102 49.2386 13.1562 49.8037 13.6484C50.3734 14.1406 50.6582 14.8356 50.6582 15.7334C50.6582 16.2256 50.5306 16.7269 50.2754 17.2373C50.0202 17.7477 49.5827 18.3424 48.9629 19.0215L46.7002 21.4072H50.9795V23Z\\\" fill=\\\"#162B40\\\"/></svg>\",\"attributes\":{\"page_break_disabled\":{\"type\":\"string\",\"default\":\"\"},\"label\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/form-break-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/form-break-field/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\form-break-field\\edit.js: Unexpected token (27:1)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m} \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mcomponents\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mFormBreakEdit\u001b[39m( props ) {\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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
/* harmony import */ var _block_wrappers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-wrappers */ "./editor/blocks/block-wrappers.js");
/* harmony import */ var _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/hooks-helper */ "./editor/helpers/hooks-helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*import * as text from './text-field';
import * as select from './select-field';
import * as radio from './radio-field';
import * as number from './number-field';
import * as time from './time-field';
import * as wysiwyg from './wysiwyg-field';
import * as range from './range-field';
import * as textarea from './textarea-field';
import * as submit from './submit-field';
import * as repeater from './repeater-field';
*/












var registerBlockType = wp.blocks.registerBlockType;
var fields = _helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_11__["jfbHooks"].applyFilters('jet.fb.register.fields', [_calculated_field__WEBPACK_IMPORTED_MODULE_0__, _checkbox_field__WEBPACK_IMPORTED_MODULE_1__, _conditional_block__WEBPACK_IMPORTED_MODULE_2__, _datetime_field__WEBPACK_IMPORTED_MODULE_4__, _date_field__WEBPACK_IMPORTED_MODULE_3__, _form_break_field__WEBPACK_IMPORTED_MODULE_5__, _group_break_field__WEBPACK_IMPORTED_MODULE_6__, _heading_field__WEBPACK_IMPORTED_MODULE_7__, _hidden_field__WEBPACK_IMPORTED_MODULE_8__, _media_field__WEBPACK_IMPORTED_MODULE_9__
/*
text,
select,
radio,
number,
time,
wysiwyg,
range,
textarea,
submit,
repeater,
*/
]);

var registerFormField = function registerFormField(block) {
  if (!block) {
    return;
  }

  var metadata = block.metadata,
      settings = block.settings,
      name = block.name;
  settings.edit = _block_wrappers__WEBPACK_IMPORTED_MODULE_10__["withCustomProps"](block);
  registerBlockType(name, _objectSpread(_objectSpread({}, metadata), settings));
};

var registerFormFields = function registerFormFields() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fields;
  blocks.forEach(_helpers_hooks_helper__WEBPACK_IMPORTED_MODULE_11__["jfbHooks"].applyFilters('jet.fb.register.fields.handler', registerFormField));
};
registerFormFields();

/***/ }),

/***/ "./editor/blocks/group-break-field/block.json":
/*!****************************************************!*\
  !*** ./editor/blocks/group-break-field/block.json ***!
  \****************************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-form-builder/group-break-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"block\",\"conditonal\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><rect x=\\\"1\\\" y=\\\"1\\\" width=\\\"62\\\" height=\\\"24\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"39\\\" width=\\\"62\\\" height=\\\"24\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"1\\\" y=\\\"30\\\" width=\\\"62\\\" height=\\\"4\\\" rx=\\\"2\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/group-break-field/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/group-break-field/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\group-break-field\\edit.js: Unexpected token (10:1)\n\n\u001b[0m \u001b[90m  8 | \u001b[39m} \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mblockEditor \u001b[33m?\u001b[39m wp\u001b[33m.\u001b[39mblockEditor \u001b[33m:\u001b[39m wp\u001b[33m.\u001b[39meditor\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mGroupBreakEdit\u001b[39m( props ) {\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m\t\u001b[36mconst\u001b[39m blockProps \u001b[33m=\u001b[39m useBlockProps()\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/heading-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"field\",\"heading\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M40.7126 54.5332C41.6699 54.5332 42.446 53.7572 42.446 52.7999V30.2825C42.446 29.3252 41.6699 28.5492 40.7126 28.5492H38.0411C37.0838 28.5492 36.3077 29.3252 36.3077 30.2825V38.5315H27.617V30.2825C27.617 29.3252 26.841 28.5492 25.8836 28.5492H23.1957C22.2383 28.5492 21.4623 29.3252 21.4623 30.2825V52.7999C21.4623 53.7572 22.2383 54.5332 23.1957 54.5332H25.8836C26.841 54.5332 27.617 53.7572 27.617 52.7999V43.8755H36.3077V52.7999C36.3077 53.7572 37.0838 54.5332 38.0411 54.5332H40.7126ZM55.8044 54.5332C56.7617 54.5332 57.5378 53.7572 57.5378 52.7999V29.8987C57.5378 29.1079 56.8967 28.4668 56.1058 28.4668C55.9366 28.4668 55.7688 28.4968 55.61 28.5554L46.8342 31.7945C46.1533 32.0458 45.701 32.6948 45.701 33.4206V35.2598C45.701 36.4491 46.8714 37.2852 47.9965 36.8995L51.5637 35.6767V52.7999C51.5637 53.7572 52.3397 54.5332 53.297 54.5332H55.8044Z\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"label\":{\"type\":\"string\",\"default\":\"\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/heading-field/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/heading-field/edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\heading-field\\edit.js: Unexpected token (9:1)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m} \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mblockEditor \u001b[33m?\u001b[39m wp\u001b[33m.\u001b[39mblockEditor \u001b[33m:\u001b[39m wp\u001b[33m.\u001b[39meditor\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mHeadingEdit\u001b[39m( props ) {\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m\t\u001b[36mconst\u001b[39m blockProps \u001b[33m=\u001b[39m useBlockProps()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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

/***/ "./editor/blocks/help-messages.js":
/*!****************************************!*\
  !*** ./editor/blocks/help-messages.js ***!
  \****************************************/
/*! exports provided: getHelpInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelpInstance", function() { return getHelpInstance; });
var __ = wp.i18n.__;
var MEDIA = 'jet-forms/media-field';
var FORM_BREAK = 'jet-forms/form-break-field';
var DATE = 'jet-forms/date-field';
var DATETIME = 'jet-forms/datetime-field';
var messagesConfig = [{
  attribute: 'is_timestamp',
  to: [DATE, DATETIME],
  message: __('Check this if you want to send value of this field as timestamp instead of plain datetime')
}, {
  attribute: 'page_break_disabled',
  to: [FORM_BREAK],
  message: __('Text to show if next page button is disabled. For example - "Fill required fields" etc.')
}, {
  attribute: 'insert_attachment',
  to: [MEDIA],
  message: __('If checked new attachment will be inserted for uploaded file. Note: work only for logged-in users!')
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
}];

var getHelpInstance = function getHelpInstance(block) {
  var messages = {};
  messagesConfig.forEach(function (msg) {
    if (msg.to.includes(block.name) && msg.message) {
      messages[msg.attribute] = msg.message;
    }
  });
  return function (attribute) {
    return attribute in messages ? messages[attribute] : 'Undefined help';
  };
};



/***/ }),

/***/ "./editor/blocks/hidden-field/block.json":
/*!***********************************************!*\
  !*** ./editor/blocks/hidden-field/block.json ***!
  \***********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/hidden-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"field\",\"hidden\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"64\\\" height=\\\"64\\\" fill=\\\"white\\\"/><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M4 16H60C61.1046 16 62 16.8954 62 18V38C62 39.1046 61.1046 40 60 40H57V42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H28V40H4C2.89543 40 2 39.1046 2 38V18C2 16.8954 2.89543 16 4 16Z\\\" fill=\\\"#162B40\\\"/><path d=\\\"M42.5 32.5C36.9592 32.5 31.9346 35.5314 28.2269 40.4552C27.9244 40.8586 27.9244 41.4222 28.2269 41.8256C31.9346 46.7553 36.9592 49.7867 42.5 49.7867C48.0408 49.7867 53.0654 46.7553 56.7731 41.8315C57.0756 41.4281 57.0756 40.8645 56.7731 40.4611C53.0654 35.5314 48.0408 32.5 42.5 32.5ZM42.8975 47.2299C39.2194 47.4612 36.1821 44.4298 36.4135 40.7459C36.6033 37.7086 39.0652 35.2466 42.1025 35.0568C45.7806 34.8255 48.8179 37.8569 48.5865 41.5408C48.3908 44.5722 45.9289 47.0341 42.8975 47.2299Z\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"54.0909\\\" y=\\\"27.5858\\\" width=\\\"3.5\\\" height=\\\"34.7076\\\" rx=\\\"1.75\\\" transform=\\\"rotate(44.914 54.0909 27.5858)\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"field_value\":{\"type\":\"string\",\"default\":\"post_id\"},\"hidden_value_field\":{\"type\":\"string\",\"default\":\"\"},\"query_var_key\":{\"type\":\"string\",\"default\":\"\"},\"date_format\":{\"type\":\"string\",\"default\":\"\"},\"hidden_value\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"hidden_field_name\"},\"default\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/hidden-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/hidden-field/edit.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\hidden-field\\edit.js: Unexpected token (19:1)\n\n\u001b[0m \u001b[90m 17 | \u001b[39m} \u001b[33m=\u001b[39m wp\u001b[33m.\u001b[39mcomponents\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 19 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mHiddenEdit\u001b[39m( props ) {\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m\u001b[36mconst\u001b[39m uniqKey \u001b[33m=\u001b[39m suffix \u001b[33m=>\u001b[39m \u001b[32m`${ block }-${ suffix }`\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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

/***/ "./editor/blocks/media-field/block.json":
/*!**********************************************!*\
  !*** ./editor/blocks/media-field/block.json ***!
  \**********************************************/
/*! exports provided: apiVersion, name, category, keywords, textdomain, supports, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/media-field\",\"category\":\"jet-form-builder-fields\",\"keywords\":[\"jet\",\"form\",\"builder\",\"jetformbuilder\",\"field\",\"media\",\"image\",\"file\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"customClassName\":false,\"html\":false},\"attributes\":{\"allowed_user_cap\":{\"type\":\"string\",\"default\":\"\"},\"insert_attachment\":{\"type\":\"boolean\",\"default\":false},\"max_files\":{\"type\":\"number\",\"default\":null},\"max_size\":{\"type\":\"number\",\"default\":null},\"allowed_mimes\":{\"type\":\"array\",\"default\":[]},\"label\":{\"type\":\"string\",\"default\":\"\"},\"name\":{\"type\":\"string\",\"default\":\"field_name\"},\"desc\":{\"type\":\"string\",\"default\":\"\"},\"required\":{\"type\":\"boolean\",\"default\":false},\"add_prev\":{\"type\":\"boolean\",\"default\":false},\"prev_label\":{\"type\":\"string\",\"default\":\"\"},\"visibility\":{\"type\":\"string\",\"default\":\"\"},\"class_name\":{\"type\":\"string\",\"default\":\"\"}}}");

/***/ }),

/***/ "./editor/blocks/media-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/media-field/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\src\\editor\\blocks\\media-field\\edit.js: Unexpected token (31:1)\n\n\u001b[0m \u001b[90m 29 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 34 | \u001b[39m\u001b[33m>>>\u001b[39m\u001b[33m>>>\u001b[39m\u001b[33m>\u001b[39m \u001b[35m1.1\u001b[39m\u001b[35m.0\u001b[39m\u001b[0m\n    at Object._raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:746:17)\n    at Object.raiseWithData (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:739:17)\n    at Object.raise (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:733:17)\n    at Object.unexpected (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:8807:16)\n    at Object.jsxParseIdentifier (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4412:12)\n    at Object.jsxParseNamespacedName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4422:23)\n    at Object.jsxParseElementName (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4433:21)\n    at Object.jsxParseOpeningElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4519:22)\n    at Object.jsxParseElementAt (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4552:33)\n    at Object.jsxParseElement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4626:17)\n    at Object.parseExprAtom (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:4633:19)\n    at Object.parseExprSubscripts (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9656:23)\n    at Object.parseMaybeUnary (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9636:21)\n    at Object.parseExprOps (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9506:23)\n    at Object.parseMaybeConditional (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeAssign (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9434:21)\n    at Object.parseExpression (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:9386:23)\n    at Object.parseStatementContent (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11285:23)\n    at Object.parseStatement (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11156:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11731:25)\n    at Object.parseBlockBody (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11717:10)\n    at Object.parseTopLevel (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:11087:10)\n    at Object.parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12768:10)\n    at parse (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\parser\\lib\\index.js:12821:38)\n    at parser (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\OSPanel\\domains\\localhost\\2020\\jet-engine-test\\wp-content\\plugins\\jet-form-builder\\assets\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

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



var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Modal = _wp$components.Modal;
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

      switch (data.type) {
        case 'text':
          return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, props, wp.element.createElement(TextControl, {
            key: 'control_' + field + data.name + index + fIndex,
            placeholder: data.label,
            value: currentVal[data.name],
            onChange: function onChange(newVal) {
              currentVal[data.name] = newVal;
              onChangeValue(_objectSpread(_objectSpread({}, fieldsMap), {}, _defineProperty({}, field, currentVal)), 'fields_map');
            }
          }));

        case 'select':
          return isMapFieldVisible(value, data, field) && wp.element.createElement(AvailableFieldWrapper, props, wp.element.createElement(SelectControl, {
            key: 'control_' + field + data.name + index + fIndex,
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
        cloneItems.forEach(function (item) {
          for (var itemKey in item) {
            if (itemKey.startsWith('__')) {
              delete item[itemKey];
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
  console.log(new Date().getTime());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvYmxvY2std3JhcHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jYWxjdWxhdGVkLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb25kaXRpb25hbC1ibG9jay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9kZWZhdWx0LW1ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGV0aW1lLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1icmVhay1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZ3JvdXAtYnJlYWstZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oZWFkaW5nLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGVscC1tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hpZGRlbi1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL21lZGlhLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLWZpZWxkcy1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24td3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9maWVsZC13aXRoLXByZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9tYWNyb3MtaW5zZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9wcmVzZXRzL2R5bmFtaWMtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL3ByZXNldHMvZ2VuZXJhbC1wcmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvcHJlc2V0cy9wcmVzZXQtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL3ByZXNldHMvcHJlc2V0LXJlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9yZXBlYXRlci13aXRoLXN0YXRlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2FjdGl2ZWNhbXBhaWduLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvYmFzZS1hY3Rpb24tY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvY2FsbC1ob29rLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvY2FsbC13ZWJob29rLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvZ2V0cmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9pbnNlcnQtcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2ludGVncmF0aW9uLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL21haWxjaGltcC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZGlyZWN0LXRvLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9yZWdpc3Rlci11c2VyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvc2VuZC1lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3VwZGF0ZS1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvdXBkYXRlLXVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2dhdGV3YXlzL2dhdGV3YXlzLWVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZ2F0ZXdheXMvcGF5cGFsLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9oZWxwZXJzL2FjdGlvbi1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2hlbHBlcnMvYmxvY2tzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvaGVscGVycy9nYXRld2F5LWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvaGVscGVycy9ob29rcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2hlbHBlcnMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvbWV0YS9hcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL21ldGEvY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvbWV0YS9nYXRld2F5cy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvbWV0YS9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvbWV0YS9wcmVzZXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9lZGl0b3IvbWFpbi5qc1wiKTtcbiIsImltcG9ydCBiYXNlTWV0YURhdGEgZnJvbSBcIi4vYmFzZS1ibG9jay5qc29uXCI7XHJcbmltcG9ydCB7IGpmYkhvb2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvaG9va3MtaGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEhlbHBJbnN0YW5jZSB9IGZyb20gXCIuL2hlbHAtbWVzc2FnZXNcIjtcclxuXHJcbmNvbnN0IGVkaXRQcm9wcyA9IGpmYkhvb2tzLmFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5lZGl0UHJvcHMnLCBbXHJcblx0e1xyXG5cdFx0bmFtZTogJ3VuaXFLZXknLFxyXG5cdFx0Y2FsbGFibGU6IGJsb2NrID0+ICggc3VmZml4ID0+YCR7IGJsb2NrLm5hbWUgfS8keyBzdWZmaXggfWAgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogJ2Jsb2NrTmFtZScsXHJcblx0XHRjYWxsYWJsZTogYmxvY2sgPT4gYmxvY2submFtZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogJ2F0dHJIZWxwJyxcclxuXHRcdGNhbGxhYmxlOiBnZXRIZWxwSW5zdGFuY2VcclxuXHR9XHJcbl0gKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFZGl0V3JhcHBlclByb3BzKCBwcm9wcyApIHtcclxuXHRjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IGJhc2VNZXRhRGF0YTtcclxuXHJcblx0cmV0dXJuIHsgLi4uYXR0cmlidXRlcywgLi4ucHJvcHMgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhDdXN0b21Qcm9wcyggYmxvY2sgKSB7XHJcblx0Y29uc3QgeyBlZGl0OiBFZGl0Q29tcG9uZW50IH0gPSBibG9jay5zZXR0aW5ncztcclxuXHJcblx0bGV0IF9wbHVnaW5zID0ge307XHJcblxyXG5cdGlmICggJ3VzZUVkaXRQcm9wcycgaW4gYmxvY2suc2V0dGluZ3MgKSB7XHJcblx0XHRjb25zdCB7IHVzZUVkaXRQcm9wcyB9ID0gYmxvY2suc2V0dGluZ3M7XHJcblxyXG5cdFx0dXNlRWRpdFByb3BzLmZvckVhY2goIG5hbWUgPT4ge1xyXG5cdFx0XHRjb25zdCBlZGl0UHJvcCA9IGVkaXRQcm9wcy5maW5kKCBwcm9wID0+IG5hbWUgPT09IHByb3AubmFtZSApO1xyXG5cclxuXHRcdFx0aWYgKCBlZGl0UHJvcCApIHtcclxuXHRcdFx0XHRfcGx1Z2luc1sgbmFtZSBdID0gZWRpdFByb3AuY2FsbGFibGUoIGJsb2NrICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHRkZWxldGUgYmxvY2suc2V0dGluZ3MudXNlRWRpdFByb3BzO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHByb3BzID0+IDxFZGl0Q29tcG9uZW50IHsgLi4ucHJvcHMgfSBlZGl0UHJvcHM9eyB7IC4uLl9wbHVnaW5zIH0gfS8+O1xyXG59IiwiaW1wb3J0IEVkaXRDYWxjdWxhdGVkIGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0NhbGN1bGF0ZWQgRmllbGQnICksXHJcblx0ZGVzY3JpcHRpb246IF9fKCAnQ2FsY3VsYXRlIGFuZCBkaXNwbGF5IHlvdXIgbnVtYmVyIHZhbHVlcycgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEVkaXRDYWxjdWxhdGVkLFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnIF0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBtZXRhZGF0YSwgbmFtZSwgc2V0dGluZ3MgfTtcclxuIiwiaW1wb3J0IENoZWNrYm94RWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdDaGVja2JveCBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IENoZWNrYm94RWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYmxvY2tOYW1lJyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbWV0YWRhdGEsIG5hbWUsIHNldHRpbmdzIH07IiwiaW1wb3J0IENvbmRpdGlvbmFsQmxvY2tFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuaW1wb3J0IENvbmRpdGlvbmFsU2F2ZSBmcm9tIFwiLi9zYXZlXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0NvbmRpdGlvbmFsIEJsb2NrJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogQ29uZGl0aW9uYWxCbG9ja0VkaXQsXHJcblx0c2F2ZTogQ29uZGl0aW9uYWxTYXZlLFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7IG1ldGFkYXRhLCBuYW1lLCBzZXR0aW5ncyB9OyIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25kaXRpb25hbFNhdmUoIHByb3BzICkge1xyXG5cdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+O1xyXG59IiwiY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRUZXh0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY2xhc3MgSmV0RGVmYXVsdE1ldGFDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmFkZE5ld09wdGlvbiA9IHRoaXMuYWRkTmV3T3B0aW9uLmJpbmQoIHRoaXMgKTtcclxuXHR9XHJcblxyXG5cdGdldERlZmF1bHRNZXRhKCkge1xyXG5cdFx0aWYgKCAhIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XHJcblx0fVxyXG5cclxuXHJcblx0YWRkTmV3T3B0aW9uKCkge1xyXG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLmdldERlZmF1bHRNZXRhKCk7XHJcblxyXG5cdFx0aXRlbXMucHVzaCgge1xyXG5cdFx0XHRrZXk6ICcnLFxyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZU9wdGlvbiggaW5kZXggKSB7XHJcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcclxuXHRcdGl0ZW1zLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VWYWx1ZSggeyB2YWx1ZSwgbmFtZSwgaWQgfSApIHtcclxuXHJcblx0XHRjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKTtcclxuXHRcdGl0ZW1zWyBpZCBdWyBuYW1lIF0gPSB2YWx1ZTtcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWRlZmF1bHQtbWV0YV9fcm93XCJcclxuXHRcdD5cclxuXHRcdFx0eyB0aGlzLmdldERlZmF1bHRNZXRhKCkubWFwKCAoIGN1cnJlbnRJdGVtLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tYnVpbGRlcl9fZmxleC1jb250cm9sc1wiXHJcblx0XHRcdFx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlci1pdGVtLScgKyBpbmRleCB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlcGVhdGVyLWl0ZW0tY29sdW1uJz5cclxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PSdtZXRhX2tleSdcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0YSBLZXknICkgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ua2V5IH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAna2V5JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGluZGV4XHJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtLWNvbHVtbic+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT0nbWV0YV92YWx1ZSdcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWV0YSBWYWx1ZScgKSB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBuZXdWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ3ZhbHVlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IGluZGV4XHJcblx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtLWNvbHVtbic+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpY29uPVwiZGlzbWlzc1wiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJSZW1vdmVcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnJlbW92ZU9wdGlvbiggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0fSApIH1cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT0nYnV0dG9uLWFkZC1vcHRpb24nXHJcblx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5hZGROZXdPcHRpb24gfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBfXyggJ0FkZCBOZXcgT3B0aW9uJyApIH1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L2Rpdj47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKZXREZWZhdWx0TWV0YUNvbnRyb2w7IiwiLyoqXHJcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3QgeyBpc0VtcHR5IH0gPSB3aW5kb3cubG9kYXNoO1xyXG5cclxuLyoqXHJcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHsgd2l0aEluc3RhbmNlSWQgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRUZXh0Q29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cclxuY2xhc3MgSmV0RmllbGRzTWFwQ29udHJvbCBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZFR5cGVzID0gdGhpcy5wcm9wcy5maWVsZFR5cGVzO1xyXG5cdFx0dGhpcy50YXhvbm9taWVzTGlzdCA9IHRoaXMucHJvcHMudGF4b25vbWllc0xpc3Q7XHJcblx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xyXG5cdFx0dGhpcy5tZXRhUHJvcCA9IHRoaXMucHJvcHMubWV0YVByb3AgPyB0aGlzLnByb3BzLm1ldGFQcm9wIDogJ3Bvc3RfbWV0YSc7XHJcblx0XHR0aGlzLnRlcm1zUHJvcCA9IHRoaXMucHJvcHMudGVybXNQcm9wID8gdGhpcy5wcm9wcy50ZXJtc1Byb3AgOiAncG9zdF90ZXJtcyc7XHJcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5wcm9wcy5pbmRleDtcclxuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHRcdHRoaXMuYmluZEZ1bmN0aW9ucygpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHR5cGU6IHRoaXMuZ2V0RmllbGRUeXBlKCB0aGlzLnByb3BzLmZpZWxkVmFsdWUgKSxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRiaW5kRnVuY3Rpb25zKCkge1xyXG5cdFx0dGhpcy5vbkNoYW5nZVR5cGUgPSB0aGlzLm9uQ2hhbmdlVHlwZS5iaW5kKCB0aGlzICk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVmFsdWUgPSB0aGlzLm9uQ2hhbmdlVmFsdWUuYmluZCggdGhpcyApO1xyXG5cdH1cclxuXHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmlkID0gYGluc3BlY3Rvci1zZWxlY3QtY29udHJvbC0keyB0aGlzLmluZGV4IH1gO1xyXG5cdFx0dGhpcy5wcmVwYXJlZFRheGVzID0gW107XHJcblx0XHR0aGlzLnRheFByZWZpeCA9ICdqZXRfdGF4X18nO1xyXG5cclxuXHRcdGlmICggISB0aGlzLnRheG9ub21pZXNMaXN0ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy50YXhvbm9taWVzTGlzdC5sZW5ndGg7IGkgKysgKSB7XHJcblx0XHRcdHRoaXMucHJlcGFyZWRUYXhlcy5wdXNoKCB7XHJcblx0XHRcdFx0dmFsdWU6IHRoaXMudGF4UHJlZml4ICsgdGhpcy50YXhvbm9taWVzTGlzdFsgaSBdLnZhbHVlLFxyXG5cdFx0XHRcdGxhYmVsOiB0aGlzLnRheG9ub21pZXNMaXN0WyBpIF0ubGFiZWwsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEZpZWxkTmFtZSggdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAhIHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZmllbGRUeXBlID0gdGhpcy5nZXRGaWVsZFR5cGUoIHZhbHVlICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLnRlcm1zUHJvcCA9PT0gZmllbGRUeXBlIHx8IHRoaXMubWV0YVByb3AgPT09IGZpZWxkVHlwZSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRpc1Rlcm1Pck1ldGEoIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuICggdGhpcy50ZXJtc1Byb3AgPT09IHZhbHVlIHx8IHRoaXMubWV0YVByb3AgPT09IHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0RmllbGRUeXBlKCB2YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkVHlwZXMubGVuZ3RoOyBpICsrICkge1xyXG5cdFx0XHRpZiAoIHZhbHVlID09PSB0aGlzLmZpZWxkVHlwZXNbIGkgXS52YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHZhbHVlLmluY2x1ZGVzKCB0aGlzLnRheFByZWZpeCApICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50ZXJtc1Byb3A7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tZXRhUHJvcDtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlICkge1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLmZpZWxkc01hcCxcclxuXHRcdFx0WyB0aGlzLnByb3BzLmZpZWxkTmFtZSBdOiBuZXdWYWx1ZVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cclxuXHRvbkNoYW5nZVR5cGUoIG5ld1ZhbHVlICkge1xyXG5cdFx0bGV0IHZhbCA9IHRoaXMuZ2V0RmllbGRUeXBlKCBuZXdWYWx1ZSApO1xyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUoIHtcclxuXHRcdFx0dHlwZTogdmFsXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLmlzVGVybU9yTWV0YSggdmFsICkgKSB7XHJcblx0XHRcdHZhbCA9ICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub25DaGFuZ2VWYWx1ZSggdmFsICk7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gRGlzYWJsZSByZWFzb246IEEgc2VsZWN0IHdpdGggYW4gb25jaGFuZ2UgdGhyb3dzIGEgd2FybmluZ1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC1maWVsZHMtbWFwX19yb3dcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1wb3N0LWZpZWxkLWNvbnRyb2xcIj5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX3R5cGVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHRsYWJlbD17IHRoaXMucHJvcHMuZmllbGROYW1lIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5zdGF0ZS50eXBlIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVR5cGUgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZmllbGRUeXBlcyB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxNjBweCdcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyAoIHRoaXMubWV0YVByb3AgPT09IHRoaXMuc3RhdGUudHlwZSApICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX25hbWVfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0XHRzdHlsZT17IHsgd2lkdGg6ICcyMDBweCcgfSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdHsgKCB0aGlzLnRlcm1zUHJvcCA9PT0gdGhpcy5zdGF0ZS50eXBlICkgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtd2l0aG91dC1sYWJlbCdcclxuXHRcdFx0XHRcdGtleT17ICdmaWVsZF90YXhfJyArIHRoaXMucHJvcHMuZmllbGROYW1lICsgdGhpcy5pbmRleCB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHRoaXMucHJvcHMuZmllbGRWYWx1ZSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5wcmVwYXJlZFRheGVzIH1cclxuXHRcdFx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzIwMHB4JyB9IH1cclxuXHRcdFx0XHQvPiB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKZXRGaWVsZHNNYXBDb250cm9sOyIsImltcG9ydCBEYXRlRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0RhdGUgZmllbGQnICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBEYXRlRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBtZXRhZGF0YSwgbmFtZSwgc2V0dGluZ3MgfTsiLCJpbXBvcnQgRGF0ZVRpbWVFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnRGF0ZXRpbWUgZmllbGQnICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBEYXRlVGltZUVkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbWV0YWRhdGEsIG5hbWUsIHNldHRpbmdzIH07IiwiaW1wb3J0IEZvcm1CcmVha0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdGb3JtIEJyZWFrIEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogRm9ybUJyZWFrRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBtZXRhZGF0YSwgbmFtZSwgc2V0dGluZ3MgfTsiLCIvKmltcG9ydCAqIGFzIHRleHQgZnJvbSAnLi90ZXh0LWZpZWxkJztcclxuaW1wb3J0ICogYXMgc2VsZWN0IGZyb20gJy4vc2VsZWN0LWZpZWxkJztcclxuaW1wb3J0ICogYXMgcmFkaW8gZnJvbSAnLi9yYWRpby1maWVsZCc7XHJcbmltcG9ydCAqIGFzIG51bWJlciBmcm9tICcuL251bWJlci1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHRpbWUgZnJvbSAnLi90aW1lLWZpZWxkJztcclxuaW1wb3J0ICogYXMgd3lzaXd5ZyBmcm9tICcuL3d5c2l3eWctZmllbGQnO1xyXG5pbXBvcnQgKiBhcyByYW5nZSBmcm9tICcuL3JhbmdlLWZpZWxkJztcclxuaW1wb3J0ICogYXMgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYS1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHN1Ym1pdCBmcm9tICcuL3N1Ym1pdC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIHJlcGVhdGVyIGZyb20gJy4vcmVwZWF0ZXItZmllbGQnO1xyXG4qL1xyXG5pbXBvcnQgKiBhcyBjYWxjdWxhdGVkIGZyb20gJy4vY2FsY3VsYXRlZC1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGNoZWNrYm94IGZyb20gJy4vY2hlY2tib3gtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBjb25kaXRpb25hbCBmcm9tICcuL2NvbmRpdGlvbmFsLWJsb2NrJztcclxuaW1wb3J0ICogYXMgZGF0ZSBmcm9tICcuL2RhdGUtZmllbGQnO1xyXG5pbXBvcnQgKiBhcyBkYXRldGltZSBmcm9tICcuL2RhdGV0aW1lLWZpZWxkJztcclxuaW1wb3J0ICogYXMgZm9ybUJyZWFrIGZyb20gJy4vZm9ybS1icmVhay1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGdyb3VwQnJlYWsgZnJvbSAnLi9ncm91cC1icmVhay1maWVsZCc7XHJcbmltcG9ydCAqIGFzIGhlYWRpbmcgZnJvbSAnLi9oZWFkaW5nLWZpZWxkJztcclxuaW1wb3J0ICogYXMgaGlkZGVuIGZyb20gJy4vaGlkZGVuLWZpZWxkJztcclxuaW1wb3J0ICogYXMgbWVkaWEgZnJvbSAnLi9tZWRpYS1maWVsZCc7XHJcblxyXG5pbXBvcnQgKiBhcyB3cmFwcGVycyBmcm9tIFwiLi9ibG9jay13cmFwcGVyc1wiO1xyXG5pbXBvcnQgeyBqZmJIb29rcyB9IGZyb20gXCIuLi9oZWxwZXJzL2hvb2tzLWhlbHBlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHJlZ2lzdGVyQmxvY2tUeXBlXHJcbn0gPSB3cC5ibG9ja3M7XHJcblxyXG5jb25zdCBmaWVsZHMgPSBqZmJIb29rcy5hcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJywgW1xyXG5cdGNhbGN1bGF0ZWQsXHJcblx0Y2hlY2tib3gsXHJcblx0Y29uZGl0aW9uYWwsXHJcblx0ZGF0ZXRpbWUsXHJcblx0ZGF0ZSxcclxuXHRmb3JtQnJlYWssXHJcblx0Z3JvdXBCcmVhayxcclxuXHRoZWFkaW5nLFxyXG5cdGhpZGRlbixcclxuXHRtZWRpYSxcclxuXHJcblx0LypcclxuXHR0ZXh0LFxyXG5cdHNlbGVjdCxcclxuXHRyYWRpbyxcclxuXHRudW1iZXIsXHJcblx0dGltZSxcclxuXHR3eXNpd3lnLFxyXG5cdHJhbmdlLFxyXG5cdHRleHRhcmVhLFxyXG5cdHN1Ym1pdCxcclxuXHRyZXBlYXRlcixcclxuXHQqL1xyXG5dICk7XHJcblxyXG5jb25zdCByZWdpc3RlckZvcm1GaWVsZCA9IGJsb2NrID0+IHtcclxuXHRpZiAoICEgYmxvY2sgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNvbnN0IHsgbWV0YWRhdGEsIHNldHRpbmdzLCBuYW1lIH0gPSBibG9jaztcclxuXHJcblx0c2V0dGluZ3MuZWRpdCA9IHdyYXBwZXJzLndpdGhDdXN0b21Qcm9wcyggYmxvY2sgKTtcclxuXHJcblx0cmVnaXN0ZXJCbG9ja1R5cGUoIG5hbWUsIHtcclxuXHRcdC4uLm1ldGFkYXRhLFxyXG5cdFx0Li4uc2V0dGluZ3NcclxuXHR9ICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyRm9ybUZpZWxkcyA9ICggYmxvY2tzID0gZmllbGRzICkgPT4ge1xyXG5cdGJsb2Nrcy5mb3JFYWNoKCBqZmJIb29rcy5hcHBseUZpbHRlcnMoICdqZXQuZmIucmVnaXN0ZXIuZmllbGRzLmhhbmRsZXInLCByZWdpc3RlckZvcm1GaWVsZCApICk7XHJcbn1cclxuXHJcbnJlZ2lzdGVyRm9ybUZpZWxkcygpO1xyXG4iLCJpbXBvcnQgR3JvdXBCcmVha0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2suanNvblwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbi8qKlxyXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxyXG4gKiAgLSB1bmlxS2V5XHJcbiAqICAtIGZvcm1GaWVsZHNcclxuICogIC0gYmxvY2tOYW1lXHJcbiAqICAtIGF0dHJIZWxwXHJcbiAqL1xyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHR0aXRsZTogX18oICdHcm91cCBCcmVhayBGaWVsZCcgKSxcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGVkaXQ6IEdyb3VwQnJlYWtFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7IG1ldGFkYXRhLCBuYW1lLCBzZXR0aW5ncyB9OyIsImltcG9ydCBIZWFkaW5nRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ0hlYWRpbmcgRmllbGQnICksXHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRlZGl0OiBIZWFkaW5nRWRpdCxcclxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBtZXRhZGF0YSwgbmFtZSwgc2V0dGluZ3MgfTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuXHJcbmNvbnN0IE1FRElBID0gJ2pldC1mb3Jtcy9tZWRpYS1maWVsZCc7XHJcbmNvbnN0IEZPUk1fQlJFQUsgPSAnamV0LWZvcm1zL2Zvcm0tYnJlYWstZmllbGQnO1xyXG5jb25zdCBEQVRFID0gJ2pldC1mb3Jtcy9kYXRlLWZpZWxkJztcclxuY29uc3QgREFURVRJTUUgPSAnamV0LWZvcm1zL2RhdGV0aW1lLWZpZWxkJztcclxuXHJcblxyXG5jb25zdCBtZXNzYWdlc0NvbmZpZyA9IFtcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdpc190aW1lc3RhbXAnLFxyXG5cdFx0dG86IFsgREFURSwgREFURVRJTUUgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnQ2hlY2sgdGhpcyBpZiB5b3Ugd2FudCB0byBzZW5kIHZhbHVlIG9mIHRoaXMgZmllbGQgYXMgdGltZXN0YW1wIGluc3RlYWQgb2YgcGxhaW4gZGF0ZXRpbWUnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ3BhZ2VfYnJlYWtfZGlzYWJsZWQnLFxyXG5cdFx0dG86IFsgRk9STV9CUkVBSyBdLFxyXG5cdFx0bWVzc2FnZTogX18oICdUZXh0IHRvIHNob3cgaWYgbmV4dCBwYWdlIGJ1dHRvbiBpcyBkaXNhYmxlZC4gRm9yIGV4YW1wbGUgLSBcIkZpbGwgcmVxdWlyZWQgZmllbGRzXCIgZXRjLicgKVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0YXR0cmlidXRlOiAnaW5zZXJ0X2F0dGFjaG1lbnQnLFxyXG5cdFx0dG86IFsgTUVESUEgXSxcclxuXHRcdG1lc3NhZ2U6IF9fKCAnSWYgY2hlY2tlZCBuZXcgYXR0YWNobWVudCB3aWxsIGJlIGluc2VydGVkIGZvciB1cGxvYWRlZCBmaWxlLiBOb3RlOiB3b3JrIG9ubHkgZm9yIGxvZ2dlZC1pbiB1c2VycyEnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ21heF9maWxlcycsXHJcblx0XHR0bzogWyBNRURJQSBdLFxyXG5cdFx0bWVzc2FnZTogX18oICdJZiBub3Qgc2V0IGFsbG93IHRvIHVwbG9hZCAxIGZpbGUnIClcclxuXHR9LFxyXG5cdHtcclxuXHRcdGF0dHJpYnV0ZTogJ21heF9zaXplJyxcclxuXHRcdHRvOiBbIE1FRElBIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggJ01iJyApXHJcblx0fSxcclxuXHR7XHJcblx0XHRhdHRyaWJ1dGU6ICdhbGxvd2VkX21pbWVzJyxcclxuXHRcdHRvOiBbIE1FRElBIF0sXHJcblx0XHRtZXNzYWdlOiBfXyggYElmIG5vIE1JTUUgdHlwZSBzZWxlY3RlZCB3aWxsIGFsbG93IGFsbCB0eXBlcy4gXHJcblx0XHRIb2xkIGRvd24gdGhlIEN0cmwgKHdpbmRvd3MpIC8gQ29tbWFuZCAoTWFjKSBidXR0b24gdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMuYCApXHJcblx0fVxyXG5dO1xyXG5cclxuY29uc3QgZ2V0SGVscEluc3RhbmNlID0gYmxvY2sgPT4ge1xyXG5cdGNvbnN0IG1lc3NhZ2VzID0ge307XHJcblxyXG5cdG1lc3NhZ2VzQ29uZmlnLmZvckVhY2goIG1zZyA9PiB7XHJcblx0XHRpZiAoIG1zZy50by5pbmNsdWRlcyggYmxvY2submFtZSApICYmIG1zZy5tZXNzYWdlICkge1xyXG5cdFx0XHRtZXNzYWdlc1sgbXNnLmF0dHJpYnV0ZSBdID0gbXNnLm1lc3NhZ2U7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gYXR0cmlidXRlID0+ICggYXR0cmlidXRlIGluIG1lc3NhZ2VzICkgPyBtZXNzYWdlc1sgYXR0cmlidXRlIF0gOiAnVW5kZWZpbmVkIGhlbHAnO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0SGVscEluc3RhbmNlIH07IiwiaW1wb3J0IEhlYWRpbmdFZGl0IGZyb20gXCIuL2VkaXRcIjtcclxuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCIuL2Jsb2NrLmpzb25cIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG4vKipcclxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcclxuICogIC0gdW5pcUtleVxyXG4gKiAgLSBmb3JtRmllbGRzXHJcbiAqICAtIGJsb2NrTmFtZVxyXG4gKiAgLSBhdHRySGVscFxyXG4gKi9cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0dGl0bGU6IF9fKCAnSGlkZGVuIEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogSGVhZGluZ0VkaXQsXHJcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JyBdLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbWV0YWRhdGEsIG5hbWUsIHNldHRpbmdzIH07IiwiaW1wb3J0IE1lZGlhRWRpdCBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiLi9ibG9jay5qc29uXCI7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xyXG5cclxuLyoqXHJcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XHJcbiAqICAtIHVuaXFLZXlcclxuICogIC0gZm9ybUZpZWxkc1xyXG4gKiAgLSBibG9ja05hbWVcclxuICogIC0gYXR0ckhlbHBcclxuICovXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHRpdGxlOiBfXyggJ01lZGlhIEZpZWxkJyApLFxyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZWRpdDogTWVkaWFFZGl0LFxyXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7IG1ldGFkYXRhLCBuYW1lLCBzZXR0aW5ncyB9OyIsImltcG9ydCB7IHNhdmVHbG9iYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vbWFuYWdlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRCdXR0b24sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvbkZpZWxkc01hcCA9ICggeyBmaWVsZHMgPSBbXSwgbGFiZWwgPSAnW0VtcHR5IGxhYmVsXScsIGNoaWxkcmVuID0gKCkgPT4ge30gfSApID0+IHtcclxuXHJcblx0cmV0dXJuIDxCYXNlQ29udHJvbFxyXG5cdFx0bGFiZWw9eyBsYWJlbCB9XHJcblx0XHRrZXk9J2pldF9maWVsZHNfbWFwJ1xyXG5cdD5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGRJZCwgZmllbGREYXRhIF0sIGluZGV4ICkgPT4gPFJlYWN0LkZyYWdtZW50XHJcblx0XHRcdFx0a2V5PXsgYGZpZWxkX2luX21hcF8keyBmaWVsZElkICsgaW5kZXggfWAgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBjaGlsZHJlbiggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSB9XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+ICkgfVxyXG5cdFx0PC9kaXY+XHJcblx0PC9CYXNlQ29udHJvbD5cclxufTtcclxuXHJcbnNhdmVHbG9iYWxDb21wb25lbnQoICdKZXRGQkNvbXBvbmVudHMnLCB7IEFjdGlvbkZpZWxkc01hcCB9ICk7IiwiY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5cclxuY2xhc3MgQWN0aW9uTWVzc2FnZXMgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuc2V0TWVzc2FnZXMoKTtcclxuXHR9XHJcblxyXG5cdHNldE1lc3NhZ2VzKCkge1xyXG5cdFx0aWYgKCB0aGlzLnByb3BzLnNldHRpbmdzICYmIHRoaXMucHJvcHMuc2V0dGluZ3MubWVzc2FnZXMgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IG1lc3NhZ2VzID0ge307XHJcblxyXG5cdFx0T2JqZWN0LmVudHJpZXMoIHRoaXMucHJvcHMuc291cmNlLl9fbWVzc2FnZXMgKS5mb3JFYWNoKCAoIFt0eXBlLCBkYXRhXSApID0+IHtcclxuXHRcdFx0bWVzc2FnZXNbIHR5cGUgXSA9IGRhdGEudmFsdWU7XHJcblx0XHR9IClcclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnRoaXMucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdG1lc3NhZ2VzOiBtZXNzYWdlc1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Z2V0TWVzc2FnZSggbmFtZSApIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzWyAnbWVzc2FnZXMnIF0gJiYgc2V0dGluZ3NbICdtZXNzYWdlcycgXVsgbmFtZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbICdtZXNzYWdlcycgXVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblxyXG5cdGNoYW5nZUZpZWxkc01hcCggeyBzb3VyY2UsIG5hbWVGaWVsZCwgdmFsdWUgfSApIHtcclxuXHRcdGNvbnN0IGZpZWxkc01hcCA9IE9iamVjdC5hc3NpZ24oXHJcblx0XHRcdHt9LFxyXG5cdFx0XHR0aGlzLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcclxuXHRcdFx0eyBbIG5hbWVGaWVsZCBdOiB2YWx1ZSB9XHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBtZXNzYWdlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoIHZhbHVlLCBuYW1lRmllbGQgKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNvdXJjZSA9ICdtZXNzYWdlcyc7XHJcblxyXG5cdFx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcclxuXHRcdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiA8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ01lc3NhZ2VzIFNldHRpbmdzOicgKSB9XHJcblx0XHRcdGtleT0nbWVzc2FnZXNfc2V0dGluZ3NfZmllbGRzJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItbWV0YS1yb3dzJz5cclxuXHRcdFx0XHR7IHNldHRpbmdzLm1lc3NhZ2VzICYmIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5tZXNzYWdlcyApXHJcblx0XHRcdFx0XHQubWFwKCAoIFt0eXBlLCBkYXRhXSwgaWQgKSA9PiA8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyAnbWVzc2FnZV8nICsgdHlwZSArIGlkIH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgdHlwZSArIGlkIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgbWVzc2FnZXMoIHR5cGUgKS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0TWVzc2FnZSggdHlwZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VNZXNzYWdlKCBuZXdWYWx1ZSwgdHlwZSApIH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQmFzZUNvbnRyb2w+O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uTWVzc2FnZXM7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uTW9kYWwoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgb25SZXF1ZXN0Q2xvc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB0aXRsZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgY2xhc3NOYW1lcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvblVwZGF0ZUNsaWNrLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbkNhbmNlbENsaWNrXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRCdXR0b24sXHJcblx0XHRCdXR0b25Hcm91cCxcclxuXHRcdE1vZGFsLFxyXG5cdH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHR1c2VTdGF0ZSxcclxuXHRcdHVzZUVmZmVjdFxyXG5cdH0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHRjb25zdCBtb2RhbENsYXNzZXMgPSBbJ2pldC1mb3JtLWVkaXQtbW9kYWwnLCAuLi5jbGFzc05hbWVzXS5qb2luKCAnICcgKTtcclxuXHJcblx0Y29uc3QgW2FjdGlvbkNsaWNrLCBzZXRBY3Rpb25DbGlja10gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuXHRjb25zdCB1cGRhdGVDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25VcGRhdGVDbGljayApIHtcclxuXHRcdFx0b25VcGRhdGVDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIHRydWUgKVxyXG5cdH1cclxuXHRjb25zdCBjYW5jZWxDbGljayA9ICgpID0+IHtcclxuXHRcdGlmICggb25DYW5jZWxDbGljayApIHtcclxuXHRcdFx0b25DYW5jZWxDbGljaygpO1xyXG5cdFx0fVxyXG5cdFx0c2V0QWN0aW9uQ2xpY2soIGZhbHNlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPE1vZGFsXHJcblx0XHRvblJlcXVlc3RDbG9zZT17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdGNsYXNzTmFtZT17IG1vZGFsQ2xhc3NlcyB9XHJcblx0XHR0aXRsZT17IHRpdGxlIH1cclxuXHQ+XHJcblx0XHR7ICEgY2hpbGRyZW4gJiYgPGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0LW1vZGFsX19jb250ZW50XCJcclxuXHRcdD5cclxuXHRcdFx0eyAnQWN0aW9uIGNhbGxiYWNrIGlzIG5vdCBmb3VuZC4nIH1cclxuXHRcdDwvZGl2PiB9XHJcblx0XHR7IGNoaWxkcmVuICYmIDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdC1tb2RhbF9fY29udGVudFwiPlxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgfVxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuIH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxCdXR0b25Hcm91cFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXQtbW9kYWxfX2FjdGlvbnNcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdXBkYXRlQ2xpY2sgfVxyXG5cdFx0XHRcdD5VcGRhdGU8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogJzAgMCAwIDEwcHgnXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyBjYW5jZWxDbGljayB9XHJcblx0XHRcdFx0PkNhbmNlbDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0J1dHRvbkdyb3VwPlxyXG5cdFx0PC9kaXY+IH1cclxuXHQ8L01vZGFsPjtcclxufSIsImltcG9ydCB7IGZyb21Mb2NhbGl6ZUhlbHBlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBY3Rpb25Mb2NhbGl6ZVNjcmlwdCggYWN0aW9uVHlwZSwgQWN0aW9uSW5zdGFuY2UgKSB7XHJcblx0Y29uc3QgbG9jYWxpemVkRGF0YSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb25UeXBlICk7XHJcblxyXG5cdHJldHVybiBwcm9wcyA9PiB7XHJcblx0XHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdFx0fSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBnZXRNYXBGaWVsZCA9ICggeyBzb3VyY2UgPSAnZmllbGRzX21hcCcsIG5hbWUgfSApID0+IHtcclxuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBwcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRcdGlmICggdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzZXRNYXBGaWVsZCA9ICggeyBzb3VyY2UgPSAnZmllbGRzX21hcCcsIG5hbWVGaWVsZCwgdmFsdWUgfSApID0+IHtcclxuXHRcdFx0Y29uc3QgZmllbGRzTWFwID0ge1xyXG5cdFx0XHRcdC4uLnByb3BzLnNldHRpbmdzWyBzb3VyY2UgXSxcclxuXHRcdFx0XHRbIG5hbWVGaWVsZCBdOiB2YWx1ZSxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4ucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBhZGRpdGlvbmFsUHJvcHMgPSB7IG9uQ2hhbmdlU2V0dGluZywgZ2V0TWFwRmllbGQsIHNldE1hcEZpZWxkIH07XHJcblxyXG5cdFx0cmV0dXJuIDxBY3Rpb25JbnN0YW5jZVxyXG5cdFx0XHR7IC4uLnByb3BzIH1cclxuXHRcdFx0eyAuLi5sb2NhbGl6ZWREYXRhIH1cclxuXHRcdFx0eyAuLi5hZGRpdGlvbmFsUHJvcHMgfVxyXG5cdFx0Lz5cclxuXHR9O1xyXG59IiwiaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuL2FjdGlvbnMvYWN0aW9uLW1vZGFsXCI7XHJcblxyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFBhbmVsQm9keSxcclxuXHRHLFxyXG5cdFBhdGgsXHJcblx0Q2lyY2xlLFxyXG5cdFJlY3QsXHJcblx0U1ZHLFxyXG5cdE1vZGFsLFxyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBGaWVsZFdpdGhQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHQgIGNoaWxkcmVuID0gbnVsbCxcclxuXHRcdFx0XHRcdFx0XHQgIE1vZGFsRWRpdG9yLFxyXG5cdFx0XHRcdFx0XHRcdCAgdHJpZ2dlckNsYXNzZXMgPSBbXSxcclxuXHRcdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRjb25zdCBbbW9kYWxTdGF0ZSwgc2V0TW9kYWxTdGF0ZV0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlTW9kYWxTdGF0ZSA9ICgpID0+IHtcclxuXHRcdHNldE1vZGFsU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XHJcblx0fTtcclxuXHRjb25zdCBjbGFzc05hbWVzID0gWyAnamV0LWZvcm0tZHluYW1pYy1wcmVzZXRfX3RyaWdnZXInLCAuLi50cmlnZ2VyQ2xhc3NlcyBdLmpvaW4oICcgJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZvcm0tZHluYW1pYy1wcmVzZXRcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IGNoaWxkcmVuIH1cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZXMgfVxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjaGFuZ2VNb2RhbFN0YXRlIH1cclxuXHRcdFx0PjxTVkcgdmlld0JveD1cIjAgMCA1NCA2NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoXHJcblx0XHRcdFx0ZD1cIk00Mi42Mzk2IDI2LjQzNDdDMzcuODY4MiAyNy4zNDM2IDMyLjU2NjYgMjguMDI1MiAyNy4xODk0IDI4LjAyNTJDMjEuODEyMSAyOC4wMjUyIDE2LjQzNDggMjcuMzQzNiAxMS43MzkxIDI2LjQzNDdDNi45Njc3NCAyNS40NTAyIDMuMTgwOTMgMjMuODU5NyAwLjM3ODY4IDIxLjk2NjNMMC4zNzg2OCAyOC4wMjUyQzAuMzc4NjggMjkuNTM5OSAxLjU5MDQ2IDMxLjEzMDQgMy43ODY4MiAzMi40MTc5QzUuOTgzMTcgMzMuNzA1NCA5LjQ2NzA0IDM0LjkxNzIgMTMuNjMyNSAzNS41OTg4QzE3Ljc5OCAzNi4yODA1IDIyLjExNSAzNi44MTA2IDI3LjE4OTQgMzYuODEwNkMzMi4yNjM3IDM2LjgxMDYgMzYuNjU2NCAzNi41MDc3IDQwLjc0NjIgMzUuNTk4OEM0NC44MzU5IDM0LjY5IDQ4LjMxOTggMzMuNzA1NCA1MC41MTYyIDMyLjQxNzlDNTIuNzEyNSAzMS4xMzA0IDU0IDI5LjUzOTkgNTQgMjguMDI1Mkw1NCAyMS45NjYzQzUxLjEyMiAyMy44NTk3IDQ3LjMzNTIgMjUuNDUwMiA0Mi42Mzk2IDI2LjQzNDdaTTQyLjYzOTYgNTMuNTQ4NEMzNy44NjgyIDU0LjUzMjkgMzIuNTY2NiA1NS4xMzg4IDI3LjE4OTQgNTUuMTM4OEMyMS44MTIxIDU1LjEzODggMTYuNDM0OCA1NC41MzI5IDExLjczOTEgNTMuNTQ4NEM3LjA0MzQ4IDUyLjU2MzggMy4xODA5MyA1MS4wNDkxIDAuMzc4NjgyIDQ5LjE1NTZMMC4zNzg2ODIgNTUuMTM4OEMwLjM3ODY4MyA1Ni43MjkzIDEuNTkwNDYgNTguMzE5NyAzLjc4NjgyIDU5LjUzMTVDNi4zNjE4NiA2MC44MTkgOS40NjcwNSA2Mi4xMDY2IDEzLjYzMjUgNjIuNzEyNUMxNy43MjIzIDYzLjY5NyAyMi4xMTUgNjQgMjcuMTg5NCA2NEMzMi4yNjM3IDY0IDM2LjY1NjQgNjMuNjk3IDQwLjc0NjIgNjIuNzEyNUM0NC44MzU5IDYxLjgwMzYgNDguMzE5OCA2MC44MTkgNTAuNTE2MiA1OS41MzE1QzUyLjcxMjUgNTcuOTQxMSA1NCA1Ni43MjkzIDU0IDU0LjgzNTlMNTQgNDguODUyN0M1MS4xMjIgNTEuMDQ5MSA0Ny4zMzUyIDUyLjI2MDggNDIuNjM5NiA1My41NDg0Wk00Mi42Mzk2IDM5Ljk5MTVDMzcuODY4MiA0MC45MDA0IDMyLjU2NjYgNDEuNTgyIDI3LjE4OTQgNDEuNTgyQzIxLjgxMjEgNDEuNTgyIDE2LjQzNDggNDAuOTAwNCAxMS43MzkxIDM5Ljk5MTVDNi45Njc3NCAzOS4wMDcgMy4xODA5MyAzNy40OTIyIDAuMzc4NjgxIDM1LjU5ODhMMC4zNzg2ODEgNDEuNTgyQzAuMzc4NjgxIDQzLjE3MjUgMS41OTA0NiA0NC42ODcyIDMuNzg2ODIgNDUuOTc0N0M2LjM2MTg1IDQ3LjI2MjIgOS40NjcwNSA0OC40NzQgMTMuNjMyNSA0OS4xNTU2QzE3LjcyMjMgNTAuMDY0NSAyMi4xMTUgNTAuMzY3NCAyNy4xODk0IDUwLjM2NzRDMzIuMjYzNyA1MC4zNjc0IDM2LjY1NjQgNTAuMDY0NSA0MC43NDYyIDQ5LjE1NTZDNDQuODM1OSA0OC4xNzExIDQ4LjMxOTggNDcuMjYyMiA1MC41MTYyIDQ1Ljk3NDdDNTIuNzEyNSA0NC4zODQzIDU0IDQzLjE3MjUgNTQgNDEuNTgyTDU0IDM1LjU5ODhDNTEuMTIyIDM3LjQ5MjIgNDcuMzM1MiAzOS4wMDcgNDIuNjM5NiAzOS45OTE1Wk00MC40NDMyIDIuMTIzMzdDMzYuMzUzNSAxLjEzODc5IDMxLjg4NSAwLjgzNTg0OCAyNi44ODY0IDAuODM1ODQ5QzIxLjg4NzggMC44MzU4NDkgMTcuNDE5NCAxLjEzODc5IDEzLjI1MzkgMi4xMjMzN0M5LjA4ODM2IDMuMTA3OTQgNS42ODAyMiA0LjAxNjc4IDMuNDgzODcgNS4zMDQzQzEuMjg3NTEgNi41OTE4MSAtMy40NzgyZS0wNiA4LjEwNjU0IC0zLjMzOTE2ZS0wNiA5LjY5N0wtMi45NTUxM2UtMDYgMTQuMDg5N0MtMi44MTYwOWUtMDYgMTUuNjgwMiAxLjI4NzUyIDE3LjI3MDYgMy40ODM4NyAxOC41NTgyQzYuMDU4OTEgMTkuNzY5OSA5LjE2NDEgMjEuMDU3NSAxMy4yNTM5IDIxLjY2MzNDMTcuMzQzNiAyMi4yNjkyIDIxLjgxMjEgMjIuOTUwOSAyNi44ODY0IDIyLjk1MDlDMzEuOTYwNyAyMi45NTA5IDM2LjM1MzUgMjIuOTUwOSA0MC40NDMyIDIyLjM0NUM0NC41MzMgMjEuNzM5MSA0OC4wMTY5IDIwLjQ1MTYgNTAuMjEzMiAxOS4xNjRDNTIuNzEyNSAxNy41NzM2IDU0IDE1Ljk4MzEgNTQgMTQuMzkyN0w1NCA5Ljk5OTk1QzU0IDguNDA5NDggNTIuNzEyNSA2LjgxOTAyIDUwLjUxNjIgNS42MDcyNEM0OC4zMTk4IDQuMzk1NDYgNDQuNTMzIDIuNzI5MjYgNDAuNDQzMiAyLjEyMzM3WlwiXHJcblx0XHRcdFx0ZmlsbD1cIiM3RTg5OTNcIj48L1BhdGg+PC9TVkc+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHR7IG1vZGFsU3RhdGUgJiYgKFxyXG5cdFx0XHQ8QWN0aW9uTW9kYWxcclxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNoYW5nZU1vZGFsU3RhdGUgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZXM9eyBbJ3dpZHRoLTYwJ10gfVxyXG5cdFx0XHRcdHRpdGxlPXsgJ0VkaXQgUHJlc2V0JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IG1vZGFsUHJvcHMgPT4gPE1vZGFsRWRpdG9yXHJcblx0XHRcdFx0XHR7IC4uLm1vZGFsUHJvcHMgfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0PC9BY3Rpb25Nb2RhbD5cclxuXHRcdCkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRXaXRoUHJlc2V0OyIsImNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0UG9wb3ZlcixcclxuXHRQYW5lbEJvZHksXHJcblx0UGFuZWxSb3dcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gTWFjcm9zSW5zZXJ0ZXIoIHtcclxuXHRcdFx0XHRcdFx0XHQgY2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0IGZpZWxkcyxcclxuXHRcdFx0XHRcdFx0XHQgb25GaWVsZENsaWNrLFxyXG5cdFx0XHRcdFx0XHRcdCBjdXN0b21NYWNyb3MsIH0gKSB7XHJcblxyXG5cdGNvbnN0IFtzaG93UG9wb3Zlciwgc2V0UG9wb3ZlclN0YXRlXSA9IHVzZVN0YXRlKCAoKSA9PiBmYWxzZSApO1xyXG5cclxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy1pbnNlcnRlclwiPlxyXG5cdFx0PEJ1dHRvblxyXG5cdFx0XHRpc1RlcnRpYXJ5XHJcblx0XHRcdGlzU21hbGxcclxuXHRcdFx0aWNvbj17IHNob3dQb3BvdmVyID8gJ25vLWFsdCcgOiAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0bGFiZWw9eyAnSW5zZXJ0IG1hY3JvcycgfVxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZXQtZm9ybS1lZGl0b3JfX21hY3Jvcy10cmlnZ2VyXCJcclxuXHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRzZXRQb3BvdmVyU3RhdGUoIHByZXYgPT4gISBwcmV2ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdHsgc2hvd1BvcG92ZXIgJiYgKFxyXG5cdFx0XHQ8UG9wb3ZlclxyXG5cdFx0XHRcdHBvc2l0aW9uPXsgJ2JvdHRvbSBsZWZ0JyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGZpZWxkcy5sZW5ndGggJiYgPFBhbmVsQm9keSB0aXRsZT17ICdGb3JtIEZpZWxkcycgfT5cclxuXHRcdFx0XHRcdHsgZmllbGRzLm1hcCggZmllbGQgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9eyAnZmllbGRfJyArIGZpZWxkLm5hbWUgfT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpc0xpbmtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uRmllbGRDbGljayggZmllbGQubmFtZSApXHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQ+eyAnJScgKyBmaWVsZC5uYW1lICsgJyUnIH08L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L1BhbmVsQm9keT4gfVxyXG5cdFx0XHRcdHsgY3VzdG9tTWFjcm9zICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnQ3VzdG9tIE1hY3JvcycgfT5cclxuXHRcdFx0XHRcdHsgY3VzdG9tTWFjcm9zLm1hcCggbWFjcm9zID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXsgJ21hY3Jvc18nICsgbWFjcm9zIH0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0aXNMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZpZWxkQ2xpY2soIG1hY3JvcyApXHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQ+eyAnJScgKyBtYWNyb3MgKyAnJScgfTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj47XHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XHJcblx0XHRcdDwvUG9wb3Zlcj5cclxuXHRcdCkgfVxyXG5cdDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFjcm9zSW5zZXJ0ZXI7IiwiXHJcbmV4cG9ydCBjb25zdCBzYXZlR2xvYmFsQ29tcG9uZW50ID0gKCBvYmplY3ROYW1lLCBpbnN0YW5jZSApID0+IHtcclxuXHR3aW5kb3dbIG9iamVjdE5hbWUgXSA9IHtcclxuXHRcdC4uLndpbmRvd1sgb2JqZWN0TmFtZSBdLFxyXG5cdFx0Li4uaW5zdGFuY2VcclxuXHR9O1xyXG59IiwiaW1wb3J0IFByZXNldFJlbmRlciBmcm9tIFwiLi9wcmVzZXQtcmVuZGVyXCI7XHJcbmltcG9ydCB3aXRoUHJlc2V0IGZyb20gXCIuL3ByZXNldC1lZGl0b3JcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdE1vZGFsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNQcmVzZXQoIHtcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0LFxyXG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudCxcclxuXHRcdFx0XHRcdFx0XHRwYXJzZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGV4Y2x1ZGVPcHRpb25zLFxyXG5cdFx0XHRcdFx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IHBvc2l0aW9uID0gJ2R5bmFtaWMnO1xyXG5cdGNvbnN0IFtzdGF0ZVZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSggKCkgPT4gcGFyc2VWYWx1ZSggdmFsdWUgKSApO1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBuZXdWYWx1ZSwgbmFtZSApID0+IHtcclxuXHRcdHNldFZhbHVlKCBwcmV2ID0+ICggeyAuLi5wcmV2LCBbIG5hbWUgXTogbmV3VmFsdWUgfSApICk7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggdHJ1ZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRpZiAoIG9uU2F2ZVByZXNldCApIHtcclxuXHRcdFx0XHRvblNhdmVQcmVzZXQoIEpTT04uc3RyaW5naWZ5KCBzdGF0ZVZhbHVlICkgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbaXNTYXZlQWN0aW9uXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5nbG9iYWxfZmllbGRzLm1hcCggKCBkYXRhLCBpbmRleCApID0+IDxQcmVzZXRSZW5kZXIuR2xvYmFsRmllbGRcclxuXHRcdFx0dmFsdWU9eyBzdGF0ZVZhbHVlIH1cclxuXHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdGRhdGE9eyBkYXRhIH1cclxuXHRcdFx0ZXhjbHVkZU9wdGlvbnM9eyBleGNsdWRlT3B0aW9ucyB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHJcblx0XHR7IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5wcmVzZXRDb25maWcubWFwX2ZpZWxkcy5tYXAoICggZGF0YSwgaW5kZXggKSA9PiA8UHJlc2V0UmVuZGVyLk1hcEZpZWxkXHJcblx0XHRcdGN1cnJlbnRTdGF0ZT17IHN0YXRlVmFsdWUgfVxyXG5cdFx0XHR2YWx1ZT17IHN0YXRlVmFsdWVbICdjdXJyZW50X2ZpZWxkXycgKyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRkYXRhPXsgZGF0YSB9XHJcblx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cclxuXHRcdFx0aXNDdXJyZW50RmllbGRWaXNpYmxlPXsgaXNDdXJyZW50RmllbGRWaXNpYmxlIH1cclxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XHJcblx0XHQvPiApIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQoIER5bmFtaWNQcmVzZXQgKTsiLCJpbXBvcnQgUHJlc2V0UmVuZGVyIGZyb20gXCIuL3ByZXNldC1yZW5kZXJcIjtcclxuaW1wb3J0IHdpdGhQcmVzZXQgZnJvbSBcIi4vcHJlc2V0LWVkaXRvclwiO1xyXG5cclxuZnVuY3Rpb24gR2VuZXJhbFByZXNldCgge1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdGF2YWlsYWJsZUZpZWxkcyxcclxuXHRcdFx0XHRcdFx0XHRpc01hcEZpZWxkVmlzaWJsZSxcclxuXHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UsXHJcblx0XHRcdFx0XHRcdH0gKSB7XHJcblx0Y29uc3QgcG9zaXRpb24gPSAnZ2VuZXJhbCc7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIG5ld1ZhbHVlLCBuYW1lICkgPT4ge1xyXG5cdFx0b25DaGFuZ2UoIHsgLi4udmFsdWUsIFsgbmFtZSBdOiBuZXdWYWx1ZSB9ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5nbG9iYWxfZmllbGRzLm1hcCggKCBkYXRhLCBpbmRleCApID0+IDxQcmVzZXRSZW5kZXIuR2xvYmFsRmllbGRcclxuXHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRkYXRhPXsgZGF0YSB9XHJcblx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XHJcblx0XHRcdGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XHJcblx0XHRcdHBvc2l0aW9uPXsgcG9zaXRpb24gfVxyXG5cdFx0Lz4gKSB9XHJcblxyXG5cdFx0eyB2YWx1ZS5mcm9tICYmIChcclxuXHRcdFx0YXZhaWxhYmxlRmllbGRzLm1hcCggKCBmaWVsZCwgaW5kZXggKSA9PiA8UHJlc2V0UmVuZGVyLkF2YWlsYWJsZU1hcEZpZWxkXHJcblx0XHRcdFx0ZmllbGRzTWFwPXsgdmFsdWUuZmllbGRzX21hcCB9XHJcblx0XHRcdFx0ZmllbGQ9eyBmaWVsZCB9XHJcblx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XHJcblx0XHRcdFx0b25DaGFuZ2VWYWx1ZT17IG9uQ2hhbmdlVmFsdWUgfVxyXG5cdFx0XHRcdGlzTWFwRmllbGRWaXNpYmxlPXsgaXNNYXBGaWVsZFZpc2libGUgfVxyXG5cdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxyXG5cdFx0XHQvPiApXHJcblx0XHQpIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQcmVzZXQoIEdlbmVyYWxQcmVzZXQgKTsiLCIvKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5pbXBvcnQgUHJlc2V0UmVuZGVyIGZyb20gXCIuL3ByZXNldC1yZW5kZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdE1vZGFsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIHdpdGhQcmVzZXQoIFdyYXBwZWRDb21wb25lbnQgKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIEpldEZvcm1QcmVzZXRFZGl0b3IoIHByb3BzICkge1xyXG5cclxuXHRcdGNvbnN0IHBhcnNlVmFsdWUgPSAoKSA9PiB7XHJcblx0XHRcdGxldCB2YWwgPSB7fTtcclxuXHJcblx0XHRcdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBwcm9wcy52YWx1ZSApIHtcclxuXHRcdFx0XHR2YWwgPSB7IC4uLnByb3BzLnZhbHVlIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoIHByb3BzLnZhbHVlICYmICdzdHJpbmcnID09PSB0eXBlb2YgcHJvcHMudmFsdWUgKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHZhbCA9IEpTT04ucGFyc2UoIHByb3BzLnZhbHVlICk7XHJcblx0XHRcdFx0XHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsICkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoICggZXhjZXB0aW9uICkge1xyXG5cdFx0XHRcdFx0dmFsID0ge307XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHZhbC5qZXRfcHJlc2V0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gKCBjdXJyZW50U3RhdGUsIGRhdGEsIHBvc2l0aW9uICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKCAoIGRhdGEucG9zaXRpb24gJiYgcG9zaXRpb24gPT09IGRhdGEucG9zaXRpb24gKVxyXG5cdFx0XHRcdHx8ICEgZGF0YS5wb3NpdGlvbiB8fCAncXVlcnlfdmFyJyAhPT0gY3VycmVudFN0YXRlLmZyb20gKSAmJiBpc0dsb2JhbFZpc2libGUoIGN1cnJlbnRTdGF0ZSwgZGF0YSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBpc0dsb2JhbFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSApID0+IHtcclxuXHRcdFx0aWYgKCAhIGRhdGEuY29uZGl0aW9uICYmICEgZGF0YS5jdXN0b21fY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEuY3VzdG9tX2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRzd2l0Y2ggKCBkYXRhLmN1c3RvbV9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0XHRjYXNlICdxdWVyeV92YXInOlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdCggJ3Bvc3QnID09PSBjdXJyZW50U3RhdGUuZnJvbSAmJiAncXVlcnlfdmFyJyA9PT0gY3VycmVudFN0YXRlLnBvc3RfZnJvbSApXHJcblx0XHRcdFx0XHRcdFx0fHwgKCAndXNlcicgPT09IGN1cnJlbnRTdGF0ZS5mcm9tICYmICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUudXNlcl9mcm9tIClcclxuXHRcdFx0XHRcdFx0XHR8fCAoICdxdWVyeV92YXInID09PSBjdXJyZW50U3RhdGUuZnJvbSApXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGRhdGEuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGVbIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc0N1cnJlbnRGaWVsZFZpc2libGUgPSAoIGN1cnJlbnRTdGF0ZSwgZGF0YSwgcG9zaXRpb24gKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoICEgZGF0YS5jb25kaXRpb24gJiYgISBkYXRhLnBhcmVudF9jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCBkYXRhLnBvc2l0aW9uICYmIHBvc2l0aW9uICE9PSBkYXRhLnBvc2l0aW9uICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlICYmIGN1cnJlbnRTdGF0ZVsgZGF0YS5wYXJlbnRfY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEucGFyZW50X2NvbmRpdGlvbi52YWx1ZTtcclxuXHRcdFx0fSBlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0ZVsgJ2N1cnJlbnRfZmllbGRfJyArIGRhdGEuY29uZGl0aW9uLmZpZWxkIF0gPT09IGRhdGEuY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpc01hcEZpZWxkVmlzaWJsZSA9ICggY3VycmVudFN0YXRlLCBkYXRhLCBmaWVsZCApID0+IHtcclxuXHJcblx0XHRcdGlmICggISBkYXRhLmNvbmRpdGlvbiAmJiAhIGRhdGEucGFyZW50X2NvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgISBkYXRhLmNvbmRpdGlvbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWUgJiYgY3VycmVudFN0YXRlWyBkYXRhLnBhcmVudF9jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5wYXJlbnRfY29uZGl0aW9uLnZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICggISBkYXRhLnBhcmVudF9jb25kaXRpb24gJiYgZGF0YS5jb25kaXRpb24gKSB7XHJcblx0XHRcdFx0aWYgKCAhIGN1cnJlbnRTdGF0ZS5maWVsZHNfbWFwIHx8ICEgY3VycmVudFN0YXRlLmZpZWxkc19tYXBbIGZpZWxkIF0gKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50U3RhdGUuZmllbGRzX21hcFsgZmllbGQgXVsgZGF0YS5jb25kaXRpb24uZmllbGQgXSA9PT0gZGF0YS5jb25kaXRpb24udmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGV4Y2x1ZGVPcHRpb25zID0gKCBzZWxlY3RPcHRpb25zICkgPT4ge1xyXG5cdFx0XHRjb25zdCBvcHRpb25zID0gWyAuLi5zZWxlY3RPcHRpb25zIF07XHJcblx0XHRcdG9wdGlvbnMuZm9yRWFjaCggKCBvcHRpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdGlmICggcHJvcHMuZXhjbHVkZVNvdXJjZXMgJiYgcHJvcHMuZXhjbHVkZVNvdXJjZXMuaW5jbHVkZXMoIG9wdGlvbi52YWx1ZSApICkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHRcdHJldHVybiBvcHRpb25zO1xyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gPFdyYXBwZWRDb21wb25lbnRcclxuXHRcdFx0eyAuLi5wcm9wcyB9XHJcblx0XHRcdHBhcnNlVmFsdWU9eyBwYXJzZVZhbHVlIH1cclxuXHRcdFx0aXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cclxuXHRcdFx0aXNNYXBGaWVsZFZpc2libGU9eyBpc01hcEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdGlzQ3VycmVudEZpZWxkVmlzaWJsZT17IGlzQ3VycmVudEZpZWxkVmlzaWJsZSB9XHJcblx0XHRcdGV4Y2x1ZGVPcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMgfVxyXG5cdFx0Lz47XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJlc2V0O1xyXG4iLCJjb25zdCB7XHJcblx0UGFuZWxDb2xvcixcclxuXHRJY29uQnV0dG9uLFxyXG5cdFRleHRDb250cm9sLFxyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0UGFuZWxCb2R5LFxyXG5cdFJhbmdlQ29udHJvbCxcclxuXHRDaGVja2JveENvbnRyb2wsXHJcblx0RGlzYWJsZWQsXHJcblx0QmFzZUNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IFByZXNldFJlbmRlciA9IHtcclxuXHRHbG9iYWxGaWVsZDogZnVuY3Rpb24gKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRpc1Zpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0XHRleGNsdWRlT3B0aW9ucyA9IG9wdGlvbnMgPT4gb3B0aW9ucyxcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uXHJcblx0XHRcdFx0XHRcdFx0fSApIHtcclxuXHJcblxyXG5cdFx0c3dpdGNoICggZGF0YS50eXBlICkge1xyXG5cdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRyZXR1cm4gKCBpc1Zpc2libGUoIHZhbHVlLCBkYXRhLCBwb3NpdGlvbiApICYmXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGtleT17ICdmaWVsZF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19yb3cnIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZVsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbCwgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0cmV0dXJuICggaXNWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgcG9zaXRpb24gKSAmJlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRrZXk9eyAnZmllbGRfJyArIGRhdGEubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLXByZXNldF9fcm93JyB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZXhjbHVkZU9wdGlvbnMoIGRhdGEub3B0aW9ucyApIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEubGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdmFsdWVbIGRhdGEubmFtZSBdIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCBuZXdWYWwsIGRhdGEubmFtZSApXHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9LFxyXG5cdEF2YWlsYWJsZU1hcEZpZWxkOiBmdW5jdGlvbiAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBmaWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgZmllbGQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgaW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgb25DaGFuZ2VWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBpc01hcEZpZWxkVmlzaWJsZVxyXG5cdFx0XHRcdFx0XHRcdFx0ICB9ICkge1xyXG5cclxuXHRcdGxldCBjdXJyZW50VmFsID0gbnVsbDtcclxuXHJcblx0XHRpZiAoICEgZmllbGRzTWFwICkge1xyXG5cdFx0XHRmaWVsZHNNYXAgPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRjdXJyZW50VmFsID0gZmllbGRzTWFwWyBmaWVsZCBdO1xyXG5cclxuXHRcdGlmICggISBjdXJyZW50VmFsICkge1xyXG5cdFx0XHRjdXJyZW50VmFsID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgQXZhaWxhYmxlRmllbGRXcmFwcGVyID0gKCB7IGZpZWxkLCBuYW1lLCBpbmRleCwgZkluZGV4LCBjaGlsZHJlbiB9ICkgPT4gPD5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdqZXQtbGFiZWwtb3ZlcmZsb3cnPnsgZmllbGQgfTwvc3Bhbj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGtleT17IGZpZWxkICsgbmFtZSArIGluZGV4ICsgZkluZGV4IH1cclxuXHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tcHJlc2V0X19maWVsZHMtbWFwLWl0ZW0nIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPjtcclxuXHJcblx0XHRyZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17IGBtYXBfZmllbGRfcHJlc2V0XyR7IGZpZWxkICsgaW5kZXggfWAgfT5cclxuXHJcblx0XHRcdHsgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnByZXNldENvbmZpZy5tYXBfZmllbGRzLm1hcCggKCBkYXRhLCBmSW5kZXggKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHMgPSB7IGZpZWxkLCBuYW1lOiBkYXRhLm5hbWUsIGluZGV4LCBmSW5kZXggfTtcclxuXHJcblx0XHRcdFx0c3dpdGNoICggZGF0YS50eXBlICkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRcdHJldHVybiAoIGlzTWFwRmllbGRWaXNpYmxlKCB2YWx1ZSwgZGF0YSwgZmllbGQgKSAmJlxyXG5cdFx0XHRcdFx0XHRcdDxBdmFpbGFibGVGaWVsZFdyYXBwZXIgeyAuLi5wcm9wcyB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBmaWVsZCArIGRhdGEubmFtZSArIGluZGV4ICsgZkluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBkYXRhLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsWyBkYXRhLm5hbWUgXSA9IG5ld1ZhbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZVZhbHVlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5maWVsZHNNYXAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbIGZpZWxkIF06IGN1cnJlbnRWYWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQXZhaWxhYmxlRmllbGRXcmFwcGVyPlxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHRcdFx0cmV0dXJuICggaXNNYXBGaWVsZFZpc2libGUoIHZhbHVlLCBkYXRhLCBmaWVsZCApICYmXHJcblx0XHRcdFx0XHRcdFx0PEF2YWlsYWJsZUZpZWxkV3JhcHBlciB7IC4uLnByb3BzIH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyAnY29udHJvbF8nICsgZmllbGQgKyBkYXRhLm5hbWUgKyBpbmRleCArIGZJbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL2xhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudFZhbFsgZGF0YS5uYW1lIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbFsgZGF0YS5uYW1lIF0gPSBuZXdWYWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZmllbGRzTWFwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0WyBmaWVsZCBdOiBjdXJyZW50VmFsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgJ2ZpZWxkc19tYXAnICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L0F2YWlsYWJsZUZpZWxkV3JhcHBlcj5cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKSB9XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PjtcclxuXHR9LFxyXG5cclxuXHRNYXBGaWVsZDogZnVuY3Rpb24gKCB7XHJcblx0XHRcdFx0XHRcdFx0IGRhdGEsXHJcblx0XHRcdFx0XHRcdFx0IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdCBpbmRleCxcclxuXHRcdFx0XHRcdFx0XHQgY3VycmVudFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRcdCBvbkNoYW5nZVZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdCBpc0N1cnJlbnRGaWVsZFZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0IHBvc2l0aW9uID0gJ2dlbmVyYWwnXHJcblx0XHRcdFx0XHRcdCB9ICkge1xyXG5cclxuXHRcdHN3aXRjaCAoIGRhdGEudHlwZSApIHtcclxuXHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyAnY29udHJvbF8nICsgZGF0YS5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XHJcblx0XHRcdFx0cmV0dXJuICggaXNDdXJyZW50RmllbGRWaXNpYmxlKCBjdXJyZW50U3RhdGUsIGRhdGEgKSAmJlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1wcmVzZXRfX3JvdycgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17ICdjb250cm9sXycgKyBkYXRhLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBkYXRhLm9wdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgZGF0YS5sYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyB2YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VWYWx1ZSggbmV3VmFsLCAnY3VycmVudF9maWVsZF8nICsgZGF0YS5uYW1lIClcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXNldFJlbmRlcjsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cCxcclxuXHRDYXJkLFxyXG5cdENhcmRCb2R5LFxyXG5cdENhcmRIZWFkZXIsXHJcblx0UGFuZWwsXHJcblx0UGFuZWxCb2R5LFxyXG5cdERyYWdnYWJsZSxcclxuXHRJY29uLFxyXG5cdERyb3Bab25lUHJvdmlkZXIsXHJcblx0RHJvcFpvbmUsXHJcblx0RGFzaGljb24sXHJcblx0VG9nZ2xlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuXHJcbmZ1bmN0aW9uIFJlcGVhdGVyV2l0aFN0YXRlKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdEl0ZW1IZWFkaW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVwZWF0ZXJDbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRyZXBlYXRlckl0ZW1DbGFzc2VzID0gW10sXHJcblx0XHRcdFx0XHRcdFx0XHRuZXdJdGVtLFxyXG5cdFx0XHRcdFx0XHRcdFx0YWRkTmV3QnV0dG9uTGFiZWwgPSAnQWRkIE5ldycsXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcyA9IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0b25TYXZlSXRlbXMsXHJcblx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXHJcblx0XHRcdFx0XHRcdFx0XHRvbkFkZE5ld0l0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRvblJlbW92ZUl0ZW0sXHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwU291cmNlOiB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscFZpc2libGU6ICgpID0+IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwS2V5OiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudCcsIC4uLnJlcGVhdGVyQ2xhc3Nlc10uam9pbiggJyAnICk7XHJcblx0Y29uc3QgaXRlbUNsYXNzTmFtZXMgPSBbJ2pldC1mb3JtLWJ1aWxkZXJfX3JlcGVhdGVyLWNvbXBvbmVudC1pdGVtJywgLi4ucmVwZWF0ZXJJdGVtQ2xhc3Nlc10uam9pbiggJyAnICk7XHJcblxyXG5cdGNvbnN0IHBhcnNlZEl0ZW1zID0gKCkgPT4ge1xyXG5cdFx0aWYgKCBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRjb25zdCBjbG9uZUl0ZW1zID0gWy4uLml0ZW1zXTtcclxuXHJcblx0XHRcdGNsb25lSXRlbXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5fX3Zpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGNsb25lSXRlbXM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gW3tcclxuXHRcdFx0XHQuLi5uZXdJdGVtLFxyXG5cdFx0XHRcdF9fdmlzaWJsZTogdHJ1ZSxcclxuXHRcdFx0fV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBbaXRlbXNEYXRhLCBzZXRJdGVtc0RhdGFdID0gdXNlU3RhdGUoICgpID0+IHBhcnNlZEl0ZW1zKCkgKTtcclxuXHJcblx0Y29uc3QgW2lzU2FmZURlbGV0aW5nLCBzZXRTYWZlRGVsZXRpbmddID0gdXNlU3RhdGUoIHRydWUgKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlQ3VycmVudEl0ZW0gPSAoIHZhbHVlVG9TZXQsIGluZGV4ICkgPT4ge1xyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0cHJldlsgaW5kZXggXSA9IHtcclxuXHRcdFx0XHQuLi5wcmV2WyBpbmRleCBdLFxyXG5cdFx0XHRcdC4uLnZhbHVlVG9TZXQsXHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiBbLi4ucHJldl07XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TYXZlRGVsZXRpbmcgPSBpbmRleCA9PiB7XHJcblx0XHRyZXR1cm4gY29uZmlybSggX18oIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIGl0ZW0gJHsgaW5kZXggKyAxIH0/YCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbW92ZU9wdGlvbiA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdGlzU2FmZURlbGV0aW5nICYmICEgb25TYXZlRGVsZXRpbmcoIGluZGV4ICkgfHxcclxuXHRcdFx0b25SZW1vdmVJdGVtICYmICEgb25SZW1vdmVJdGVtKCBpbmRleCwgaXRlbXNEYXRhIClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IHtcclxuXHRcdFx0Y29uc3QgY2xvbmVQcmV2ID0gWy4uLnByZXZdO1xyXG5cdFx0XHRjbG9uZVByZXYuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGNsb25lUHJldjtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGFkZE5ld0l0ZW0gPSAoIHZhbHVlICkgPT4ge1xyXG5cdFx0aWYgKCBvbkFkZE5ld0l0ZW0gKSB7XHJcblx0XHRcdG9uQWRkTmV3SXRlbSggdmFsdWUsIGl0ZW1zRGF0YSApO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXRlbXNEYXRhKCBwcmV2ID0+IFsuLi5wcmV2LCB7XHJcblx0XHRcdC4uLnZhbHVlLFxyXG5cdFx0XHRfX3Zpc2libGU6IHRydWUsXHJcblx0XHR9XSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xvbmVJdGVtID0gKCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdGNvbnN0IFtiZWZvcmUsIGFmdGVyXSA9IFtwcmV2LnNsaWNlKCAwLCBpbmRleCArIDEgKSwgcHJldi5zbGljZSggaW5kZXggKyAxICldO1xyXG5cdFx0XHRyZXR1cm4gWy4uLmJlZm9yZSwgbG9kYXNoLmFzc2lnbigge30sIHByZXZbIGluZGV4IF0gKSwgLi4uYWZ0ZXJdO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbW92ZVJlcGVhdGVySXRlbSA9ICggeyBvbGRJbmRleCwgbmV3SW5kZXggfSApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdFtwcmV2WyBuZXdJbmRleCBdLCBwcmV2WyBvbGRJbmRleCBdXSA9IFtwcmV2WyBvbGRJbmRleCBdLCBwcmV2WyBuZXdJbmRleCBdXTtcclxuXHRcdFx0cmV0dXJuIFsuLi5wcmV2XTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vdmVVcCA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRtb3ZlUmVwZWF0ZXJJdGVtKCB7IG9sZEluZGV4OiBpbmRleCwgbmV3SW5kZXg6IGluZGV4IC0gMSB9ICk7XHJcblx0fVxyXG5cdGNvbnN0IG1vdmVEb3duID0gKCBpbmRleCApID0+IHtcclxuXHRcdG1vdmVSZXBlYXRlckl0ZW0oIHsgb2xkSW5kZXg6IGluZGV4LCBuZXdJbmRleDogaW5kZXggKyAxIH0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlzRGlzYWJsZWRFbmQgPSAoIGluZGV4ICkgPT4ge1xyXG5cdFx0cmV0dXJuICEgKCBpbmRleCA8IGl0ZW1zRGF0YS5sZW5ndGggLSAxICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b2dnbGVWaXNpYmxlID0gKCBpbmRleCApID0+IHtcclxuXHRcdHNldEl0ZW1zRGF0YSggcHJldiA9PiB7XHJcblx0XHRcdHByZXZbIGluZGV4IF0uX192aXNpYmxlID0gISBwcmV2WyBpbmRleCBdLl9fdmlzaWJsZTtcclxuXHRcdFx0cmV0dXJuIFsuLi5wcmV2XTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB0cnVlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdGNvbnN0IGNsb25lSXRlbXMgPSBbLi4uaXRlbXNEYXRhXTtcclxuXHJcblx0XHRcdGlmICggb25TYXZlSXRlbXMgKSB7XHJcblx0XHRcdFx0Y2xvbmVJdGVtcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHJcblx0XHRcdFx0XHRmb3IgKCBjb25zdCBpdGVtS2V5IGluIGl0ZW0gKSB7XHJcblx0XHRcdFx0XHRcdGlmICggaXRlbUtleS5zdGFydHNXaXRoKCAnX18nICkgKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGl0ZW1bIGl0ZW1LZXkgXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0b25TYXZlSXRlbXMoIGNsb25lSXRlbXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH0gZWxzZSBpZiAoIGZhbHNlID09PSBpc1NhdmVBY3Rpb24gKSB7XHJcblx0XHRcdG9uVW5Nb3VudCgpO1xyXG5cdFx0fVxyXG5cdH0sIFtpc1NhdmVBY3Rpb25dICk7XHJcblxyXG5cdGNvbnN0IGdldFJlcGVhdGVySXRlbUlkID0gaW5kZXggPT4gYGpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1fJHsgaW5kZXggfWA7XHJcblxyXG5cclxuXHRjb25zdCBSZXBlYXRlckl0ZW0gPSAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiA8Q2FyZFxyXG5cdFx0aXNFbGV2YXRlZD17IHRydWUgfVxyXG5cdFx0Y2xhc3NOYW1lPXsgaXRlbUNsYXNzTmFtZXMgfVxyXG5cdFx0a2V5PXsgZ2V0UmVwZWF0ZXJJdGVtSWQoIGluZGV4ICkgfVxyXG5cdFx0aWQ9eyBnZXRSZXBlYXRlckl0ZW1JZCggaW5kZXggKSB9XHJcblx0PlxyXG5cdFx0PENhcmRIZWFkZXIgY2xhc3NOYW1lPXsgJ3JlcGVhdGVyX19pdGVtX19oZWFkZXInIH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtX19sZWZ0LWhlYWRpbmcnPlxyXG5cdFx0XHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbnMnIH0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0aWNvbj17IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSA/ICd2aXNpYmlsaXR5JyA6ICdoaWRkZW4nIH1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHRvZ2dsZVZpc2libGUoIGluZGV4ICkgfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAncmVwZWF0ZXItYWN0aW9uLWJ1dHRvbicgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17ICEgQm9vbGVhbiggaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdGljb249eyAnYXJyb3ctdXAtYWx0MicgfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gbW92ZVVwKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0Rpc2FibGVkRW5kKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0aWNvbj17ICdhcnJvdy1kb3duLWFsdDInIH1cclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG1vdmVEb3duKCBpbmRleCApIH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWFjdGlvbi1idXR0b24nIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9CdXR0b25Hcm91cD5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAncmVwZWF0ZXItaXRlbS10aXRsZScgfT5cclxuXHRcdFx0XHRcdFx0XHR7IEl0ZW1IZWFkaW5nICYmIDxJdGVtSGVhZGluZ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEl0ZW09eyBjdXJyZW50SXRlbSB9XHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtPXsgZGF0YSA9PiBjaGFuZ2VDdXJyZW50SXRlbSggZGF0YSwgaW5kZXggKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz4gfVxyXG5cdFx0XHRcdFx0eyAhIEl0ZW1IZWFkaW5nICYmIGAjJHsgaW5kZXggKyAxIH1gIH1cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PEJ1dHRvbkdyb3VwPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGlzU21hbGxcclxuXHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gY2xvbmVJdGVtKCBpbmRleCApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IF9fKCAnQ2xvbmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNTbWFsbFxyXG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiByZW1vdmVPcHRpb24oIGluZGV4ICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgX18oICdEZWxldGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQnV0dG9uR3JvdXA+XHJcblx0XHQ8L0NhcmRIZWFkZXI+XHJcblx0XHR7IGN1cnJlbnRJdGVtLl9fdmlzaWJsZSAmJiA8Q2FyZEJvZHlcclxuXHRcdFx0Y2xhc3NOYW1lPXsgJ3JlcGVhdGVyLWl0ZW1fX2NvbnRlbnQnIH1cclxuXHRcdD5cclxuXHRcdFx0eyBjaGlsZHJlbiAmJiA8UmVhY3QuRnJhZ21lbnRcclxuXHRcdFx0XHRrZXk9eyBgcmVwZWF0ZXItY29tcG9uZW50X19pdGVtXyR7IGluZGV4IH1gIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNoaWxkcmVuICYmIGNoaWxkcmVuKCB7XHJcblx0XHRcdFx0XHRjdXJyZW50SXRlbSxcclxuXHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtOiBkYXRhID0+IGNoYW5nZUN1cnJlbnRJdGVtKCBkYXRhLCBpbmRleCApXHJcblx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHR7ICdmdW5jdGlvbicgIT09IHR5cGVvZiBjaGlsZHJlbiAmJiBjaGlsZHJlbiB9XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHRcdFx0eyAhIGNoaWxkcmVuICYmICdTZXQgdXAgeW91ciBSZXBlYXRlciBUZW1wbGF0ZSwgcGxlYXNlLicgfVxyXG5cdFx0PC9DYXJkQm9keT4gfVxyXG5cdDwvQ2FyZD47XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGhlbHBTb3VyY2UsXHJcblx0XHRoZWxwVmlzaWJsZSxcclxuXHRcdGhlbHBLZXksXHJcblx0fSA9IGhlbHA7XHJcblxyXG5cdGNvbnN0IGlzVmlzaWJsZUhlbHAgPSBoZWxwVmlzaWJsZSggaXRlbXNEYXRhICkgJiYgaGVscFNvdXJjZSAmJiBoZWxwU291cmNlWyBoZWxwS2V5IF07XHJcblxyXG5cdHJldHVybiA8ZGl2XHJcblx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWVzIH1cclxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyB9XHJcblx0PlxyXG5cdFx0eyBpc1Zpc2libGVIZWxwICYmIDxwPnsgaGVscFNvdXJjZVsgaGVscEtleSBdLmxhYmVsIH08L3A+IH1cclxuXHJcblx0XHR7IDAgPCBpdGVtc0RhdGEubGVuZ3RoICYmIDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgX18oICdTYWZlIGRlbGV0aW5nJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IGlzU2FmZURlbGV0aW5nIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBzZXRTYWZlRGVsZXRpbmcgfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyBpdGVtc0RhdGEubWFwKCAoIGN1cnJlbnRJdGVtLCBpbmRleCApID0+IHtcclxuXHRcdFx0cmV0dXJuIFJlcGVhdGVySXRlbSggeyBjdXJyZW50SXRlbSwgaW5kZXggfSApO1xyXG5cdFx0fSApIH1cclxuXHRcdHsgMSA8IGl0ZW1zRGF0YS5sZW5ndGggJiYgPFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhcidcclxuXHRcdFx0bGFiZWw9eyBfXyggJ1NhZmUgZGVsZXRpbmcnICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgaXNTYWZlRGVsZXRpbmcgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNldFNhZmVEZWxldGluZyB9XHJcblx0XHQvPiB9XHJcblx0XHQ8QnV0dG9uXHJcblx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBhZGROZXdJdGVtKCBuZXdJdGVtICkgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IGFkZE5ld0J1dHRvbkxhYmVsIH1cclxuXHRcdDwvQnV0dG9uPlxyXG5cdDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJXaXRoU3RhdGU7IiwiaW1wb3J0IHsgc2F2ZUdsb2JhbENvbXBvbmVudCB9IGZyb20gXCIuL21hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyYXBwZXJSZXF1aXJlZENvbnRyb2woIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbEtleSA9ICdsYWJlbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRLZXkgPSAncmVxdWlyZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKSB7XHJcblx0Y29uc3QgW25hbWUsIGRhdGFdID0gZmllbGQ7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3JvdyBmaWVsZHMtbWFwLWNvbnRyb2xcIlxyXG5cdFx0XHRrZXk9eyAndXNlcl9tZXRhXycgKyBuYW1lIH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGQtbWFwX19yb3ctbGFiZWxcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyAnZmllbGRzLW1hcF9fbGFiZWwnIH0+XHJcblx0XHRcdFx0XHR7ICggZGF0YS5oYXNPd25Qcm9wZXJ0eSggbGFiZWxLZXkgKSAmJiBkYXRhWyBsYWJlbEtleSBdICkgJiYgZGF0YVsgbGFiZWxLZXkgXSB9XHJcblx0XHRcdFx0XHR7ICggISBkYXRhLmhhc093blByb3BlcnR5KCBsYWJlbEtleSApICkgJiYgZGF0YSB9XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdHsgKCBkYXRhLmhhc093blByb3BlcnR5KCByZXF1aXJlZEtleSApICYmIGRhdGFbIHJlcXVpcmVkS2V5IF0gKSAmJlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdmaWVsZHMtbWFwX19yZXF1aXJlZCcgfT4gKjwvc3Bhbj4gfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBjaGlsZHJlbiB9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbnNhdmVHbG9iYWxDb21wb25lbnQoICdKZXRGQkNvbXBvbmVudHMnLCB7IFdyYXBwZXJSZXF1aXJlZENvbnRyb2wgfSApOyIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgSW50ZWdyYXRpb25Db21wb25lbnQgZnJvbSBcIi4vaW50ZWdyYXRpb24tY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAnYWN0aXZlX2NhbXBhaWduJywgY2xhc3MgQWN0aXZlQ2FtcGFpZ25BY3Rpb24gZXh0ZW5kcyBJbnRlZ3JhdGlvbkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMudmFsaWRhdGVBY3RpdmVDYW1wYWlnbkRhdGEgPSB0aGlzLnZhbGlkYXRlQWN0aXZlQ2FtcGFpZ25EYXRhLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMuZ2V0QWN0aXZlQ2FtcGFpZ25EYXRhID0gdGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEuYmluZCggdGhpcyApO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVBY3RpdmVDYW1wYWlnbkRhdGEoKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWydsb2FkaW5nJ10gfSApO1xyXG5cdFx0dGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEoIHRydWUgKTtcclxuXHR9XHJcblxyXG5cdGdldEFjdGl2ZUNhbXBhaWduRGF0YSggaXNWYWxpZGF0ZSA9IGZhbHNlICkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdGxpc3RzID0gW10sXHJcblx0XHRcdGVuZHBvaW50ID0gJy9hZG1pbi9hcGkucGhwP2FwaV9hY3Rpb249bGlzdF9saXN0JztcclxuXHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBhcGlfdXJsLCBhcGlfa2V5IH0gPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGNvbnN0IHVybCA9IGFwaV91cmwgKyBlbmRwb2ludCArICcmYXBpX2tleT0nICsgYXBpX2tleSArICcmaWRzPWFsbCZhcGlfb3V0cHV0PWpzb24nO1xyXG5cclxuXHRcdGpRdWVyeS5nZXRKU09OKCB1cmwgKVxyXG5cdFx0XHQuc3VjY2VzcyggZnVuY3Rpb24gKCBkYXRhICkge1xyXG5cdFx0XHRcdGlmICggdW5kZWZpbmVkICE9PSBkYXRhLnJlc3VsdF9jb2RlICYmIGRhdGEucmVzdWx0X2NvZGUgKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggdmFyIHByb3AgaW4gZGF0YSApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IGRhdGFbIHByb3AgXS5pZCApIHtcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsaXN0cy5wdXNoKCB7XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGRhdGFbIHByb3AgXS5pZCxcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogZGF0YVsgcHJvcCBdLm5hbWVcclxuXHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBsaXN0cywgJ2RhdGEnICk7XHJcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggdHJ1ZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWydpcy12YWxpZCddIH0gKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWydpcy1pbnZhbGlkJ10gfSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApXHJcblx0XHRcdC5lcnJvciggZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XHJcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsnaXMtaW52YWxpZCddIH0gKTtcclxuXHRcdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Z2V0TGlzdHMoKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLmRhdGEgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFkZFBsYWNlaG9sZGVyRm9yU2VsZWN0KCBzZXR0aW5ncy5kYXRhICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHJcblx0Zm9ybWF0RW50cmllc0FycmF5KCBlbnRyaWVzID0gW10sIGlzTmVlZFBsYWNlaG9sZGVyID0gdHJ1ZSApIHtcclxuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0ge1xyXG5cdFx0XHRsYWJlbDogJy0tJ1xyXG5cdFx0fTtcclxuXHRcdGlmICggISBlbnRyaWVzICkge1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKCBlbnRyaWVzICkubWFwKCAoIFt2YWx1ZSwgbGFiZWxdICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyB2YWx1ZSwgbGFiZWwgfTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gaXNOZWVkUGxhY2Vob2xkZXIgPyBbcGxhY2Vob2xkZXIsIC4uLm9wdGlvbnNdIDogb3B0aW9ucztcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPFJlYWN0LkZyYWdtZW50IGtleT1cImFjdGl2ZWNhbXBhaWduXCI+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdhcGlfZGF0YScgKSB9XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC13aXRoLWJ1dHRvbiB3aXRoLXdyYXAnXHJcblx0XHRcdFx0a2V5PXsgJ2FjdGl2ZWNhbXBhaWduX2lucHV0X2tleScgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2FwaV91cmwnXHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmFwaV91cmwgfVxyXG5cdFx0XHRcdFx0aGVscD17IGxhYmVsKCAnYXBpX3VybCcgKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnYXBpX3VybCcgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nYXBpX2tleSdcclxuXHRcdFx0XHRcdGhlbHA9eyBsYWJlbCggJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgKCBzZXR0aW5ncy5hcGlfa2V5ICYmIHNldHRpbmdzLmFwaV91cmwgKSAmJiA8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy52YWxpZGF0ZUFjdGl2ZUNhbXBhaWduRGF0YSB9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyB0aGlzLnN0YXRlLmNsYXNzTmFtZS5qb2luKCAnICcgKSArICcgamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxyXG5cdFx0XHRcdFx0eyBsYWJlbCggJ3ZhbGlkYXRlX2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPiB9XHJcblx0XHRcdFx0PGRpdi8+XHJcblx0XHRcdFx0PGRpdj57IGhlbHAoICdhcGlfa2V5X2xpbmtfcHJlZml4JyApIH0gPGFcclxuXHRcdFx0XHRcdGhyZWY9eyBoZWxwKCAnYXBpX2tleV9saW5rJyApIH0+eyBoZWxwKCAnYXBpX2tleV9saW5rX3N1ZmZpeCcgKSB9PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHR7IHNldHRpbmdzLmlzVmFsaWRBUEkgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdhY3RpdmVjYW1wYWlnbl9pbnB1dF9rZXknXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXdpdGgtYnV0dG9uJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX3NlbGVjdF9saXN0cydcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MubGlzdF9pZCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdsaXN0X2lkJyApIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZ2V0TGlzdHMoKSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRrZXk9eyAndXBkYXRlX2xpc3RfaWRzJyB9XHJcblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5nZXRBY3RpdmVDYW1wYWlnbkRhdGEgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAndXBkYXRlX2xpc3RfaWRzJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX3RhZ3MnXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndGFncycgKSB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnRhZ3MgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAoICd0YWdzJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdFx0a2V5PSdhY3RpdmVjYW1wYWlnbl9maWVsZHNfbWFwJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxyXG5cdFx0XHRcdFx0XHR7IE9iamVjdC5lbnRyaWVzKCBzb3VyY2UuYWN0aXZlY2FtcGFpZ25fZmllbGRzICkubWFwKFxyXG5cdFx0XHRcdFx0XHRcdCggW2ZpZWxkTmFtZSwgZmllbGRMYWJlbF0sIGluZGV4ICkgPT4gPGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17ICd1c2VyX21ldGFfJyArIGZpZWxkTmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGROYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IGZpZWxkTGFiZWwgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGhpcy5nZXRGaWVsZERlZmF1bHQoIGZpZWxkTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBmaWVsZE5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+ICkgfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PiApO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxufSApO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRhZGRQbGFjZWhvbGRlckZvclNlbGVjdCggYXJyYXksIGxhYmVsID0gJy0tJyApIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHsgbGFiZWwgfSxcclxuXHRcdFx0Li4uYXJyYXlcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZVNldHRpbmcoIHZhbHVlLCBrZXkgKSB7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnRoaXMucHJvcHMuc2V0dGluZ3MsXHJcblx0XHRcdFsga2V5IF06IHZhbHVlXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0Z2V0RmllbGREZWZhdWx0KCBuYW1lICkge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ2ZpZWxkc19tYXAnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldEZpZWxkQnlOYW1lKFxyXG5cdFx0XHR7IG5hbWUsIHNvdXJjZSB9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0RmllbGRNZXRhKCBuYW1lICkge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoXHJcblx0XHRcdHsgbmFtZSwgc291cmNlIH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZEJ5TmFtZSggeyBzb3VyY2UsIG5hbWUgfSApIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBuYW1lRmllbGQgKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnZmllbGRzX21hcCc7XHJcblxyXG5cdFx0dGhpcy5jaGFuZ2VGaWVsZHNNYXAoXHJcblx0XHRcdHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH1cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0b25DaGFuZ2VNZXRhRmllbGRNYXAoIHZhbHVlLCBuYW1lRmllbGQgKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSAnbWV0YV9maWVsZHNfbWFwJztcclxuXHJcblx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcclxuXHRcdFx0eyB2YWx1ZSwgbmFtZUZpZWxkLCBzb3VyY2UgfVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHJcblx0Y2hhbmdlRmllbGRzTWFwKCB7IHNvdXJjZSwgbmFtZUZpZWxkLCB2YWx1ZSB9ICkge1xyXG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbihcclxuXHRcdFx0e30sXHJcblx0XHRcdHRoaXMucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdLFxyXG5cdFx0XHR7IFsgbmFtZUZpZWxkIF06IHZhbHVlIH1cclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xyXG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxyXG5cdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXBcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAnY2FsbF9ob29rJywgZnVuY3Rpb24gQ2FsbEhvb2tBY3Rpb24oIHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gKSB7XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlU2V0dGluZyA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdG9uQ2hhbmdlKCB7XHJcblx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0cmV0dXJuICggPGRpdiBrZXk9XCJjYWxsX2hvb2tcIj5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9J2hvb2tfbmFtZSdcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2hvb2tfbmFtZScgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuaG9va19uYW1lIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnaG9va19uYW1lJyApXHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRrZXk9J2hlbHBfbWVzc2FnZSdcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC1jYWxsLWhvb2staW5zdHJ1Y3Rpb24nPlxyXG5cdFx0XHRcdHsgX18oICdDYWxsZWQgaG9vayBuYW1lczonICkgfVxyXG5cdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PGNvZGU+amV0LWZvcm0tYnVpbGRlci9jdXN0b20tYWN0aW9uL3sgc2V0dGluZ3MuaG9va19uYW1lIH08L2NvZGU+IC0geyBfXyggJ1dQIGFjdGlvbi4gUGVyZm9ybSBhIGhvb2sgd2l0aG91dCBhbiBhYmlsaXR5IHRvIHZhbGlkYXRlIGZvcm0sJyApIH1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvY3VzdG9tLWZpbHRlci97IHNldHRpbmdzLmhvb2tfbmFtZSB9PC9jb2RlPiAtIHsgX18oICdXUCBmaWx0ZXIuIFBlcmZvcm0gYSBob29rIHdpdGggYW4gYWJpbGl0eSB0byB2YWxpZGF0ZSBmb3JtLiBBbGxvd3MgdG8gcmV0dXJuIGVycm9yIG1lc3NhZ2UuJyApIH1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHR7IF9fKCAnSG9vayBhcmd1bWVudHM6JyApIH1cclxuXHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHQ8bGk+PGNvZGU+JHJlc3VsdDwvY29kZT4gLSB7IF9fKCAnb25seSBmb3IgV1AgZmlsdGVyLiBIb29rIGV4ZWN1dGlvbiByZXN1bHQsJyApIH08L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxjb2RlPiRyZXF1ZXN0PC9jb2RlPiAtIHsgX18oICdhcnJheSB3aXRoIHN1Ym1pdHRlZCBmb3JtIGRhdGEsJyApIH08L2xpPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8Y29kZT4kYWN0aW9uX2hhbmRsZXI8L2NvZGU+IC0geyBfXyggJ2FjdGlvbiBoYW5kbGVyIG9iamVjdCwgYWxsb3dzIHRvIG1hbmFnZSBhY3Rpb25zIGRhdGEgYW5kIHRvIHRocm93cyBlcnJvciBzdGF0dXM6JyApIH1cclxuXHRcdFx0XHRcdFx0PGNvZGU+dGhyb3cgbmV3IEFjdGlvbl9FeGNlcHRpb24oICdmYWlsZWQnICk8L2NvZGU+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHJcblx0PC9kaXY+ICk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59ICk7XHJcbiIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ2NhbGxfd2ViaG9vaycsIGNsYXNzIENhbGxXZWJIb29rQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIGxhYmVsLCBvbkNoYW5nZVNldHRpbmcgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRcdHJldHVybiA8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PSd3ZWJob29rX3VybCdcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3dlYmhvb2tfdXJsJyApIH1cclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy53ZWJob29rX3VybCB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnd2ViaG9va191cmwnICkgfVxyXG5cdFx0Lz47XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgSW50ZWdyYXRpb25Db21wb25lbnQgZnJvbSBcIi4vaW50ZWdyYXRpb24tY29tcG9uZW50XCI7XHJcbmltcG9ydCBXcmFwcGVyUmVxdWlyZWRDb250cm9sIGZyb20gXCIuLi9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbFwiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxubGV0IHsgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xyXG5cdE51bWJlckNvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2w7XHJcbn1cclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdnZXRyZXNwb25zZScsIGNsYXNzIEdldFJlc3BvbnNlQWN0aW9uIGV4dGVuZHMgSW50ZWdyYXRpb25Db21wb25lbnQge1xyXG5cclxuXHRnZXRGaWVsZHMoKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLmRhdGEuZmllbGRzICkge1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmVudHJpZXMoIHNldHRpbmdzLmRhdGEuZmllbGRzICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRnZXRMaXN0cygpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MuZGF0YS5saXN0cyApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0RW50cmllc0FycmF5KCBzZXR0aW5ncy5kYXRhLmxpc3RzICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRmb3JtYXRFbnRyaWVzQXJyYXkoIGVudHJpZXMgPSBbXSwgaXNOZWVkUGxhY2Vob2xkZXIgPSB0cnVlICkge1xyXG5cdFx0Y29uc3QgcGxhY2Vob2xkZXIgPSB7XHJcblx0XHRcdGxhYmVsOiAnLS0nXHJcblx0XHR9O1xyXG5cdFx0aWYgKCAhIGVudHJpZXMgKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvcHRpb25zID0gT2JqZWN0LmVudHJpZXMoIGVudHJpZXMgKS5tYXAoICggW3ZhbHVlLCBsYWJlbF0gKSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHZhbHVlLCBsYWJlbCB9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiBpc05lZWRQbGFjZWhvbGRlciA/IFtwbGFjZWhvbGRlciwgLi4ub3B0aW9uc10gOiBvcHRpb25zO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkcygpO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8UmVhY3QuRnJhZ21lbnQga2V5PVwiZ2V0cmVzcG9uc2VcIj5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0a2V5PXsgJ2dldHJlc3BvbnNlX2lucHV0X2tleScgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0LXdpdGgtYnV0dG9uXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdhcGlfa2V5JyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdGtleT17ICd2YWxpZGF0ZV9hcGlfa2V5JyB9XHJcblx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLnZhbGlkYXRlQVBJS2V5IH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17IHRoaXMuc3RhdGUuY2xhc3NOYW1lLmpvaW4oICcgJyApICsgJyBqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XHJcblx0XHRcdFx0XHR7IGxhYmVsKCAndmFsaWRhdGVfYXBpX2tleScgKSB9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxkaXYvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luLWJvdHRvbS0tc21hbGwnPnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxyXG5cdFx0XHRcdGhyZWY9eyBoZWxwKCAnYXBpX2tleV9saW5rJyApIH0+eyBoZWxwKCAnYXBpX2tleV9saW5rX3N1ZmZpeCcgKSB9PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0eyBzZXR0aW5ncy5pc1ZhbGlkQVBJICYmIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nZ2V0cmVzcG9uc2Vfc2VsZWN0X2xpc3RzJ1xyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC13aXRoLWJ1dHRvbidcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2xpc3RfaWQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cclxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmdldEFwaURhdGEgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAndXBkYXRlX2xpc3RfaWRzJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZ2V0cmVzcG9uc2VfZGF5X29mX2N5Y2xlJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PSdkYXlfb2ZfY3ljbGUnXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdkYXlfb2ZfY3ljbGUnICkgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZGF5X29mX2N5Y2xlIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIE51bWJlciggbmV3VmFsICksICdkYXlfb2ZfY3ljbGUnICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9maWVsZHNfbWFwJ1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cclxuXHRcdFx0XHRcdFx0eyBmaWVsZHMubWFwKCAoIFtmaWVsZE5hbWUsIGZpZWxkRGF0YV0sIGluZGV4ICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPFdyYXBwZXJSZXF1aXJlZENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkPXsgW2ZpZWxkTmFtZSwgZmllbGREYXRhXSB9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17IGZpZWxkTmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkRGVmYXVsdCggZmllbGROYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHRoaXMub25DaGFuZ2VGaWVsZE1hcCggdmFsdWUsIGZpZWxkTmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHRoaXMuZm9ybUZpZWxkc0xpc3QgfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+O1xyXG5cdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcbn0gKTtcclxuIiwiaW1wb3J0IEpldEZpZWxkc01hcENvbnRyb2wgZnJvbSAnLi4vYmxvY2tzL2NvbnRyb2xzL2ZpZWxkcy1tYXAnO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEpldERlZmF1bHRNZXRhQ29udHJvbCBmcm9tIFwiLi4vYmxvY2tzL2NvbnRyb2xzL2RlZmF1bHQtbWV0YVwiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG5cdFBvcG92ZXIsXHJcblx0UGFuZWxCb2R5LFxyXG5cdFBhbmVsUm93LFxyXG5cdEJhc2VDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ2luc2VydF9wb3N0JywgY2xhc3MgSW5zZXJ0UG9zdEFjdGlvbiBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Z2V0RmllbGRNYXAoIG5hbWUgKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncyAmJiBzZXR0aW5ncy5maWVsZHNfbWFwICYmIHNldHRpbmdzLmZpZWxkc19tYXBbIG5hbWUgXSApIHtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmZpZWxkc19tYXBbIG5hbWUgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGlzUmVuZGVySGVscCggZmllbGRzICkge1xyXG5cdFx0Y29uc3QgeyBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuIGhlbHAoICdmaWVsZHNfbWFwJyApICYmICEgZmllbGRzLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIG9uQ2hhbmdlLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlVmFsdWUgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XHJcblx0XHRcdG9uQ2hhbmdlKCB7XHJcblx0XHRcdFx0Li4uc2V0dGluZ3MsXHJcblx0XHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdFx0fSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cImluc2VydF9wb3N0XCI+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicG9zdF90eXBlXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5wb3N0X3R5cGUgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucG9zdFR5cGVzIH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncG9zdF90eXBlJyApIH1cclxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ3Bvc3RfdHlwZScgKSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVZhbHVlKCBuZXdWYWx1ZSwgJ3Bvc3RfdHlwZScgKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicG9zdF9zdGF0dXNcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnBvc3Rfc3RhdHVzIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBvc3RTdGF0dXNlcyB9XHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3Bvc3Rfc3RhdHVzJyApIH1cclxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ3Bvc3Rfc3RhdHVzJyApIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAncG9zdF9zdGF0dXMnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0a2V5PVwiZmllbGRzX21hcFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IHRoaXMuaXNSZW5kZXJIZWxwKCBmb3JtRmllbGRzICkgJiZcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC1maWVsZHMtbWFwX19oZWxwXCI+XHJcblx0XHRcdFx0XHR7IGhlbHAoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZmllbGRzLW1hcF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0eyBmb3JtRmllbGRzICYmIGZvcm1GaWVsZHMubWFwKCAoIGZpZWxkLCBpbmRleCApID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IGZpZWxkRGF0YSA9IHRoaXMuZ2V0RmllbGRNYXAoIGZpZWxkLm5hbWUgKTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LWZpZWxkcy1tYXBfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgJ2ZpZWxkX21hcF8nICsgZmllbGQubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxKZXRGaWVsZHNNYXBDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9eyBmaWVsZC5uYW1lICsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRWYWx1ZT17IGZpZWxkRGF0YSB9XHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZE5hbWU9eyBmaWVsZC5uYW1lIH1cclxuXHRcdFx0XHRcdFx0XHRcdGluZGV4PXsgaW5kZXggfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRzTWFwPXsgc2V0dGluZ3MuZmllbGRzX21hcCB9XHJcblx0XHRcdFx0XHRcdFx0XHR0YXhvbm9taWVzTGlzdD17IHNvdXJjZS50YXhvbm9taWVzIH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVHlwZXM9eyBzb3VyY2UuZmllbGRzTWFwT3B0aW9ucyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdkZWZhdWx0X21ldGEnICkgfVxyXG5cdFx0XHRcdGtleT1cImRlZmF1bHRfbWV0YVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SmV0RGVmYXVsdE1ldGFDb250cm9sXHJcblx0XHRcdFx0XHRkZWZhdWx0TWV0YT17IHNldHRpbmdzLmRlZmF1bHRfbWV0YSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAnZGVmYXVsdF9tZXRhJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBCYXNlQWN0aW9uQ29tcG9uZW50IGZyb20gXCIuL2Jhc2UtYWN0aW9uLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZWdyYXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQWN0aW9uQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy52YWxpZGF0ZUFQSUtleSA9IHRoaXMudmFsaWRhdGVBUElLZXkuYmluZCggdGhpcyApO1xyXG5cdFx0dGhpcy5nZXRBcGlEYXRhID0gdGhpcy5nZXRBcGlEYXRhLmJpbmQoIHRoaXMgKTtcclxuXHRcdHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQoIHRoaXMgKTtcclxuXHJcblx0XHR0aGlzLmZvcm1GaWVsZHNMaXN0ID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRjbGFzc05hbWU6IFt0aGlzLmdldGNsYXNzTmFtZVZhbGlkYXRlQnV0dG9uKCldLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlQVBJS2V5KCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsnbG9hZGluZyddIH0gKTtcclxuXHJcblx0XHR0aGlzLmdldEFwaURhdGEoKTtcclxuXHR9XHJcblxyXG5cdGdldEFwaURhdGEoIGV2ZW50ICkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHNlbGYucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCAhIHNldHRpbmdzLmFwaV9rZXkgKSB7XHJcblx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBudWxsLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFtdIH0gKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGpRdWVyeS5hamF4KCB7XHJcblx0XHRcdHVybDogYWpheHVybCxcclxuXHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0J2FjdGlvbic6IHRoaXMuZGF0YS5hY3Rpb24sXHJcblx0XHRcdFx0J2FwaV9rZXknOiBzZXR0aW5ncy5hcGlfa2V5XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uICggcmVzcG9uc2UgKSB7XHJcblx0XHRcdFx0aWYgKCByZXNwb25zZS5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIHRydWUsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIHJlc3BvbnNlLmRhdGEsICdkYXRhJyApO1xyXG5cclxuXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbJ2lzLXZhbGlkJ10gfSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xyXG5cdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsnaXMtaW52YWxpZCddIH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIGZhbHNlLCAnaXNWYWxpZEFQSScgKTtcclxuXHRcdFx0XHRzZWxmLnNldFN0YXRlKCB7IGNsYXNzTmFtZTogWydpcy1pbnZhbGlkJ10gfSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGdldGNsYXNzTmFtZVZhbGlkYXRlQnV0dG9uKCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmICggdHJ1ZSA9PT0gc2V0dGluZ3MuaXNWYWxpZEFQSSApIHtcclxuXHRcdFx0cmV0dXJuICdpcy12YWxpZCc7XHJcblx0XHR9IGVsc2UgaWYgKCBmYWxzZSA9PT0gc2V0dGluZ3MuaXNWYWxpZEFQSSApIHtcclxuXHRcdFx0cmV0dXJuICdpcy1pbnZhbGlkJztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgSW50ZWdyYXRpb25Db21wb25lbnQgZnJvbSBcIi4vaW50ZWdyYXRpb24tY29tcG9uZW50XCI7XHJcbmltcG9ydCBXcmFwcGVyUmVxdWlyZWRDb250cm9sIGZyb20gXCIuLi9jb21wb25lbnRzL3dyYXBwZXItcmVxdWlyZWQtY29udHJvbFwiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IEFjdGlvbkZpZWxkc01hcCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLWZpZWxkcy1tYXBcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdtYWlsY2hpbXAnLCBjbGFzcyBNYWlsQ2hpbXBBY3Rpb24gZXh0ZW5kcyBJbnRlZ3JhdGlvbkNvbXBvbmVudCB7XHJcblxyXG5cdGdldEZpZWxkcygpIHtcclxuXHRcdGNvbnN0IHsgc2V0dGluZ3MgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncy5saXN0X2lkXHJcblx0XHRcdCYmIHNldHRpbmdzLmRhdGFcclxuXHRcdFx0JiYgc2V0dGluZ3MuZGF0YS5maWVsZHNcclxuXHRcdFx0JiYgc2V0dGluZ3MuZGF0YS5maWVsZHNbIHNldHRpbmdzLmxpc3RfaWQgXSApIHtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5kYXRhLmZpZWxkc1sgc2V0dGluZ3MubGlzdF9pZCBdICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRnZXRMaXN0cygpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MuZGF0YS5saXN0cyApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0RW50cmllc0FycmF5KCBzZXR0aW5ncy5kYXRhLmxpc3RzICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRnZXRHcm91cHMoKSB7XHJcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKCBzZXR0aW5ncy5kYXRhXHJcblx0XHRcdCYmIHNldHRpbmdzLmRhdGEuZ3JvdXBzXHJcblx0XHRcdCYmIHNldHRpbmdzLmxpc3RfaWQgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZvcm1hdEVudHJpZXNBcnJheSggc2V0dGluZ3MuZGF0YS5ncm91cHNbIHNldHRpbmdzLmxpc3RfaWQgXSApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0RW50cmllc0FycmF5KCBlbnRyaWVzID0gW10gKSB7XHJcblx0XHRjb25zdCBwbGFjZWhvbGRlciA9IHtcclxuXHRcdFx0bGFiZWw6ICctLSdcclxuXHRcdH07XHJcblx0XHRpZiAoICEgZW50cmllcyApIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbdmFsdWUsIGxhYmVsXSApID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIFtwbGFjZWhvbGRlciwgLi4ub3B0aW9uc107XHJcblx0fVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKCk7XHJcblxyXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRcdHJldHVybiAoIDxkaXYga2V5PVwibWFpbGNoaW1wXCI+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGtleT17ICdtYWlsY2hpbXBfa2V5X2lucHV0cycgfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0LXdpdGgtYnV0dG9uXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FwaV9rZXknICkgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5hcGlfa2V5IH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV9rZXknIClcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cclxuXHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0b25DbGljaz17IHRoaXMudmFsaWRhdGVBUElLZXkgfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS5jbGFzc05hbWUuam9pbiggJyAnICkgKyAnIGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImRhc2hpY29uc1wiLz5cclxuXHRcdFx0XHRcdHsgbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PGRpdi8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYXJnaW4tYm90dG9tLS1zbWFsbCc+eyBoZWxwKCAnYXBpX2tleV9saW5rX3ByZWZpeCcgKSB9IDxhXHJcblx0XHRcdFx0aHJlZj17IGhlbHAoICdhcGlfa2V5X2xpbmsnICkgfT57IGhlbHAoICdhcGlfa2V5X2xpbmtfc3VmZml4JyApIH08L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7IHNldHRpbmdzLmlzVmFsaWRBUEkgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ21haWxjaGltcF9zZWxlY3RfbGlzdHMnIH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0LXdpdGgtYnV0dG9uXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9J2xpc3RfaWQnXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnbGlzdF9pZCcgKSB9XHJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5saXN0X2lkIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2xpc3RfaWQnICkgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cclxuXHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyB0aGlzLmdldEFwaURhdGEgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IGxhYmVsKCAndXBkYXRlX2xpc3RfaWRzJyApIH1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2dyb3Vwc19pZHMnXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdncm91cHNfaWRzJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZ3JvdXBzX2lkcyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnZ3JvdXBzX2lkcycgKSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRHcm91cHMoKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nbWFpbGNoaW1wX3RhZ3MnXHJcblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnRhZ3MgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3RhZ3MnICkgfVxyXG5cdFx0XHRcdFx0aGVscD17IGhlbHAoICd0YWdzJyApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZG91YmxlX29wdF9pbicgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2RvdWJsZV9vcHRfaW4nICkgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmRvdWJsZV9vcHRfaW4gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIEJvb2xlYW4oIG5ld1ZhbCApLCAnZG91YmxlX29wdF9pbicgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8QWN0aW9uRmllbGRzTWFwXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0XHRrZXk9J21haWxjaGltcCdcclxuXHRcdFx0XHRcdGZpZWxkcz17IGZpZWxkcyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyAoIHsgZmllbGRJZCwgZmllbGREYXRhLCBpbmRleCB9ICkgPT4gPFdyYXBwZXJSZXF1aXJlZENvbnRyb2xcclxuXHRcdFx0XHRcdFx0ZmllbGQ9eyBbZmllbGRJZCwgZmllbGREYXRhXSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGRJZCArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGREZWZhdWx0KCBmaWVsZElkICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gdGhpcy5vbkNoYW5nZUZpZWxkTWFwKCB2YWx1ZSwgZmllbGRJZCApIH1cclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5mb3JtRmllbGRzTGlzdCB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+IH1cclxuXHRcdFx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cclxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAncmVkaXJlY3RfdG9fcGFnZScsIGNsYXNzIFJlZGlyZWN0VG9QYWdlQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHR9XHJcblxyXG5cdGlzQ2hlY2tlZCggbmFtZSApIHtcclxuXHRcdGNvbnN0IGFyZ3NfZmllbGRzID0gQXJyYXkuZnJvbSggdGhpcy5wcm9wcy5zZXR0aW5ncy5yZWRpcmVjdF9hcmdzIHx8IFtdICk7XHJcblxyXG5cdFx0cmV0dXJuIEJvb2xlYW4oIGFyZ3NfZmllbGRzLmluY2x1ZGVzKCBuYW1lICkgKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlUmVkaXJlY3RBcmdzKCB2YWx1ZSwgZmllbGRfbmFtZSApIHtcclxuXHRcdGxldCBhcmdzX2ZpZWxkcyA9IEFycmF5LmZyb20oIHRoaXMucHJvcHMuc2V0dGluZ3MucmVkaXJlY3RfYXJncyB8fCBbXSApO1xyXG5cclxuXHRcdGlmICggISB2YWx1ZSApIHtcclxuXHRcdFx0Y29uc3QgZmllbGRfaWQgPSBhcmdzX2ZpZWxkcy5pbmRleE9mKCBmaWVsZF9uYW1lICk7XHJcblxyXG5cdFx0XHRhcmdzX2ZpZWxkcy5zcGxpY2UoIGZpZWxkX2lkLCAxICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhcmdzX2ZpZWxkcy5wdXNoKCBmaWVsZF9uYW1lICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIGFyZ3NfZmllbGRzLCAncmVkaXJlY3RfYXJncycgKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlU2V0dGluZyggdmFsdWUsIGtleSApIHtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBrZXkgXTogdmFsdWVcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzb3VyY2UsIGxhYmVsLCBzZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPGRpdiBrZXk9XCJyZWRpcmVjdF90b19wYWdlXCI+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0a2V5PSdyZWRpcmVjdF90eXBlJ1xyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF90eXBlJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF90eXBlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnJlZGlyZWN0X3R5cGVzIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAncmVkaXJlY3RfdHlwZScgKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdHsgJ3N0YXRpY19wYWdlJyA9PT0gc2V0dGluZ3MucmVkaXJlY3RfdHlwZSAmJiA8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGtleT0ncmVkaXJlY3RfdHlwZSdcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfcGFnZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfcGFnZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3JlZGlyZWN0X3BhZ2UnICkgfVxyXG5cdFx0XHQvPiB9XHJcblx0XHRcdHsgJ2N1c3RvbV91cmwnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdGtleT0ncmVkaXJlY3RfdXJsX2NvbnRyb2wnXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X3VybCcgKSB9XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF91cmwgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICdyZWRpcmVjdF91cmwnICkgfVxyXG5cdFx0XHQvPiB9XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9hcmdzJyApIH1cclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF9hcmdzX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlZGlyZWN0X2FyZ3MtY29udHJvbCc+XHJcblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCB7IG5hbWUgfSwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgYGNoZWNrYm94X2FyZ3NfJHsgbmFtZSB9XyR7IGluZGV4IH1gIH1cclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IG5hbWUgfVxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyB0aGlzLmlzQ2hlY2tlZCggbmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlUmVkaXJlY3RBcmdzKCBuZXdWYWwsIG5hbWUgKSB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0a2V5PSdyZWRpcmVjdF9oYXNoX2NvbnRyb2wnXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X2hhc2gnICkgfVxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfaGFzaCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3JlZGlyZWN0X2hhc2gnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgQWN0aW9uTWVzc2FnZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWN0aW9ucy9hY3Rpb24tbWVzc2FnZXNcIjtcclxuaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSBcIi4vYmFzZS1hY3Rpb24tY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgV3JhcHBlclJlcXVpcmVkQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy93cmFwcGVyLXJlcXVpcmVkLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgYWRkQWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGVcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5hZGRBY3Rpb24oICdyZWdpc3Rlcl91c2VyJywgY2xhc3MgUmVnaXN0ZXJVc2VyQWN0aW9uIGV4dGVuZHMgQmFzZUFjdGlvbkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcclxuXHRcdHN1cGVyKCBwcm9wcyApO1xyXG5cclxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xyXG5cdFx0dGhpcy5mb3JtRmllbGRzTGlzdCA9IFsgeyB2YWx1ZTogJycsIGxhYmVsOiAnLS0nIH0sIC4uLnRoaXMuZmllbGRzIF07XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdGNvbnN0IHVzZXJGaWVsZHMgPSBPYmplY3QuZW50cmllcyggc291cmNlLnVzZXJGaWVsZHMgKTtcclxuXHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdFx0cmV0dXJuICggPFJlYWN0LkZyYWdtZW50IGtleT1cInJlZ2lzdGVyX3VzZXJcIj5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdGtleT1cInVzZXJfZmllbGRzX21hcFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3RcIj5cclxuXHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfT57IF9fKCAnU2V0IGZvcm0gZmllbGRzIG5hbWVzIHRvIHRvIGdldCB1c2VyIGRhdGEgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3NwYW4+XHJcblx0XHRcdFx0XHR7IHVzZXJGaWVsZHMubWFwKCAoIFsgdmFsdWUsIGRhdGEgXSApID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkPXsgWyB2YWx1ZSwgZGF0YSBdIH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17IGBmb3JtX2ZpZWxkc18keyB2YWx1ZSB9YCB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGREZWZhdWx0KCB2YWx1ZSApIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmZvcm1GaWVsZHNMaXN0IH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gdGhpcy5vbkNoYW5nZUZpZWxkTWFwKCBuZXdWYWx1ZSwgdmFsdWUgKSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PVwidXNlcl9yb2xlX2xpc3RcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2VyX3JvbGUnICkgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfcm9sZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS51c2VyUm9sZXMgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdHRoaXMub25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3VzZXJfcm9sZScgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfbWV0YScgKSB9XHJcblx0XHRcdFx0a2V5PSd1c2VyX21ldGFfbGlzdCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxyXG5cdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9PnsgX18oICdTZXQgdXNlciBtZXRhIGZpZWxkcyB0byBzYXZlIGFwcHJvcHJpYXRlIGZvcm0gZmllbGRzIGludG8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0eyB0aGlzLmZpZWxkcy5tYXAoICggeyBuYW1lIH0sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgJ3VzZXJfbWV0YV8nICsgbmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgbmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgbmFtZSB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGRNZXRhKCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZU1ldGFGaWVsZE1hcCggbmV3VmFsLCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0a2V5PSdsb2dfaW4nXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xvZ19pbicgKSB9XHJcblx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmxvZ19pbiB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnbG9nX2luJyApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdGtleT0nYWRkX3VzZXJfaWRfY29udHJvbCdcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYWRkX3VzZXJfaWQnICkgfVxyXG5cdFx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy5hZGRfdXNlcl9pZCB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnYWRkX3VzZXJfaWQnICkgfVxyXG5cdFx0XHRcdGhlbHA9eyBoZWxwKCAnYWRkX3VzZXJfaWQnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWN0aW9uTWVzc2FnZXNcclxuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHR9XHJcblxyXG59ICk7XHJcbiIsIi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmltcG9ydCBUb29scyBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgTWFjcm9zSW5zZXJ0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFjcm9zLWluc2VydGVyXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5hZGRBY3Rpb24oICdzZW5kX2VtYWlsJywgZnVuY3Rpb24gU2VuZEVtYWlsQWN0aW9uKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc2V0dGluZ3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc291cmNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxhYmVsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGhlbHAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgb25DaGFuZ2VTZXR0aW5nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH0gKSB7XHJcblxyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcclxuXHJcblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XHJcblx0XHRjb25zdCBjb250ZW50ID0gc2V0dGluZ3MuY29udGVudCB8fCAnJyArICclJyArIG1hY3JvcyArICclJztcclxuXHJcblx0XHRvbkNoYW5nZVNldHRpbmcoIGNvbnRlbnQsICdjb250ZW50JyApO1xyXG5cdH1cclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cIm1haWxfdG9cIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLm1haWxfdG8gfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLm1haWxUbyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtYWlsX3RvJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdtYWlsX3RvJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdtYWlsX3RvJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7ICdjdXN0b20nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJjdXN0b21fZW1haWxcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmN1c3RvbV9lbWFpbCB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjdXN0b21fZW1haWwnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2N1c3RvbV9lbWFpbCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY3VzdG9tX2VtYWlsJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdHsgJ2Zvcm0nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cImZyb21fZmllbGRcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fZmllbGQgfVxyXG5cdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdmcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdmcm9tX2ZpZWxkJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cInJlcGx5X3RvXCJcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZXBseV90byB9XHJcblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucmVwbHlUbyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXBseV90bycgKSB9XHJcblx0XHRcdGhlbHA9eyBoZWxwKCAncmVwbHlfdG8nICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X3RvJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHR7ICdjdXN0b20nID09PSBzZXR0aW5ncy5yZXBseV90byAmJiA8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PVwicmVwbHlfdG9fZW1haWxcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X3RvX2VtYWlsIH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlcGx5X3RvX2VtYWlsJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV90b19lbWFpbCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAncmVwbHlfdG9fZW1haWwnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdFx0eyAnZm9ybScgPT09IHNldHRpbmdzLnJlcGx5X3RvICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGtleT1cInJlcGx5X2Zyb21fZmllbGRcIlxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X2Zyb21fZmllbGQgfVxyXG5cdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXBseV9mcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV9mcm9tX2ZpZWxkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdyZXBseV9mcm9tX2ZpZWxkJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+IH1cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJzdWJqZWN0XCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5zdWJqZWN0IH1cclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3N1YmplY3QnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ3N1YmplY3QnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3N1YmplY3QnICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJmcm9tX25hbWVcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmZyb21fbmFtZSB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmcm9tX25hbWUnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fbmFtZScgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9uYW1lJyApO1xyXG5cdFx0XHR9IH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0a2V5PVwiZnJvbV9hZGRyZXNzXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5mcm9tX2FkZHJlc3MgfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZnJvbV9hZGRyZXNzJyApIH1cclxuXHRcdFx0aGVscD17IGhlbHAoICdmcm9tX2FkZHJlc3MnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2Zyb21fYWRkcmVzcycgKTtcclxuXHRcdFx0fSB9XHJcblx0XHQvPlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0a2V5PVwiY29udGVudF90eXBlXCJcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5jb250ZW50X3R5cGUgfVxyXG5cdFx0XHRvcHRpb25zPXsgc291cmNlLmNvbnRlbnRfdHlwZSB9XHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjb250ZW50X3R5cGUnICkgfVxyXG5cdFx0XHRoZWxwPXsgaGVscCggJ2NvbnRlbnRfdHlwZScgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdjb250ZW50X3R5cGUnICkgfVxyXG5cdFx0Lz5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3Mtd3JhcFwiPlxyXG5cdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0a2V5PVwiY29udGVudFwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5jb250ZW50IH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnY29udGVudCcgKSB9XHJcblx0XHRcdFx0aGVscD17IGhlbHAoICdjb250ZW50JyApIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY29udGVudCcgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PE1hY3Jvc0luc2VydGVyXHJcblx0XHRcdFx0ZmllbGRzPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdFx0b25GaWVsZENsaWNrPXsgaW5zZXJ0TWFjcm9zIH1cclxuXHRcdFx0XHRjdXN0b21NYWNyb3M9eyBzb3VyY2UuY3VzdG9tTWFjcm9zIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPjtcclxuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcbn0gKTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCB7IGFkZEFjdGlvbiB9IGZyb20gXCIuLi9oZWxwZXJzL2FjdGlvbi1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybUZpZWxkc0Jsb2NrcyB9IGZyb20gXCIuLi9oZWxwZXJzL2Jsb2Nrcy1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcclxuICovXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlXHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuYWRkQWN0aW9uKCAndXBkYXRlX29wdGlvbnMnLCBjbGFzcyBVcGRhdGVPcHRpb25zQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcblx0XHRzdXBlciggcHJvcHMgKTtcclxuXHJcblx0XHR0aGlzLmZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcclxuXHR9XHJcblxyXG5cclxuXHRnZXRGaWVsZEJ5TmFtZSggeyBzb3VyY2UsIG5hbWUgfSApIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzWyBzb3VyY2UgXSAmJiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSApIHtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzWyBzb3VyY2UgXVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Z2V0RmllbGRNZXRhKCBuYW1lICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoIHtcclxuXHRcdFx0c291cmNlOiAnbWV0YV9maWVsZHNfbWFwJyxcclxuXHRcdFx0bmFtZVxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlRmllbGRzTWFwKCB7IHNvdXJjZSwgbmFtZUZpZWxkLCB2YWx1ZSB9ICkge1xyXG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdICk7XHJcblxyXG5cdFx0ZmllbGRzTWFwWyBuYW1lRmllbGQgXSA9IHZhbHVlO1xyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcclxuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcclxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZU1ldGFGaWVsZE1hcCA9ICggdmFsdWUsIG5hbWVGaWVsZCApID0+IHtcclxuXHRcdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XHJcblxyXG5cdFx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcclxuXHRcdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9XHJcblx0XHRcdCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlU2V0dGluZyA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdFx0b25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInJlZ2lzdGVyX3VzZXJcIj5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJvcHRpb25zX3BhZ2VfbGlzdFwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfcGFnZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mub3B0aW9uc19wYWdlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLm9wdGlvbnNQYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ29wdGlvbnNfcGFnZScgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfbWFwJyApIH1cclxuXHRcdFx0XHRrZXk9J29wdGlvbnNfbWV0YV9saXN0J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLW1ldGEtcm93cyc+XHJcblx0XHRcdFx0XHR7IHRoaXMuZmllbGRzLm1hcCggKCB7IG5hbWUgfSwgaW5kZXggKSA9PiA8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ29wdGlvbnNfbWV0YV8nICsgbmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBuYW1lIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkTWV0YSggbmFtZSApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlTWV0YUZpZWxkTWFwKCBuZXdWYWwsIG5hbWUgKVxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+ICkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cclxuXHRcdDwvZGl2PiApO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdH1cclxufSApO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEpldEZpZWxkc01hcENvbnRyb2wgZnJvbSBcIi4uL2Jsb2Nrcy9jb250cm9scy9maWVsZHMtbWFwXCI7XHJcbmltcG9ydCBBY3Rpb25NZXNzYWdlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgeyBhZGRBY3Rpb24gfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZVxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmFkZEFjdGlvbiggJ3VwZGF0ZV91c2VyJywgY2xhc3MgVXBkYXRlVXNlckFjdGlvbiBleHRlbmRzIHdwLmVsZW1lbnQuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblxyXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblx0XHR0aGlzLm1ldGFPcHRpb24gPSAndXNlcl9tZXRhJztcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR0eXBlOiAnJyxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRnZXRGaWVsZE1hcCggbmFtZSApIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcclxuXHJcblx0XHRpZiAoIHNldHRpbmdzICYmIHNldHRpbmdzLmZpZWxkc19tYXAgJiYgc2V0dGluZ3MuZmllbGRzX21hcFsgbmFtZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3MuZmllbGRzX21hcFsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0Y29uc3Qgb25DaGFuZ2VWYWx1ZSA9ICggdmFsdWUsIGtleSApID0+IHtcclxuXHRcdFx0b25DaGFuZ2UoIHtcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0XHRbIGtleSBdOiB2YWx1ZVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cInVwZGF0ZV91c2VyXCI+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHRrZXk9J3VzZXJfZmllbGRzX21hcCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1tZXRhLXJvd3MnPlxyXG5cdFx0XHRcdFx0eyB0aGlzLmZpZWxkcy5tYXAoICggZmllbGQsIGluZGV4ICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGREYXRhID0gdGhpcy5nZXRGaWVsZE1hcCggZmllbGQubmFtZSApO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZXQtdXNlci1tZXRhX19yb3dcIlxyXG5cdFx0XHRcdFx0XHRcdGtleT17ICd1c2VyX21ldGFfJyArIGZpZWxkLm5hbWUgKyBpbmRleCB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8SmV0RmllbGRzTWFwQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGQubmFtZSArIGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVmFsdWU9eyBmaWVsZERhdGEgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGROYW1lPXsgZmllbGQubmFtZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRpbmRleD17IGluZGV4IH1cclxuXHRcdFx0XHRcdFx0XHRcdG1ldGFQcm9wPSd1c2VyX21ldGEnXHJcblx0XHRcdFx0XHRcdFx0XHRmaWVsZHNNYXA9eyBzZXR0aW5ncy5maWVsZHNfbWFwIH1cclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkVHlwZXM9eyBzb3VyY2UudXNlckZpZWxkcyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlVmFsdWUoIG5ld1ZhbHVlLCAnZmllbGRzX21hcCcgKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfcm9sZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdGtleT1cInVzZXJfcm9sZV9saXN0XCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfcm9sZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS51c2VyUm9sZXMgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VWYWx1ZSggbmV3VmFsdWUsICd1c2VyX3JvbGUnICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8QWN0aW9uTWVzc2FnZXNcclxuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+ICk7XHJcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXHJcblx0fVxyXG59ICk7XHJcbiIsImltcG9ydCB7IGdldEFjdGlvblNldHRpbmdzIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2F0ZXdheS1oZWxwZXJcIjtcclxuaW1wb3J0IHsgZnJvbUxvY2FsaXplSGVscGVyIH0gZnJvbSBcIi4uL2hlbHBlcnMvYWN0aW9uLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIHtcclxuXHRjb25zdCB7IGdhdGV3YXlBdHRycywgbGFiZWwgfSA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldExvY2FsaXplZEZ1bGxQYWNrJyApKCBhY3Rpb24udHlwZSApO1xyXG5cdGNvbnN0IGFjdGlvblNldHRpbmdzID0gZ2V0QWN0aW9uU2V0dGluZ3MoIGFjdGlvbi5pZCApO1xyXG5cclxuXHRjb25zdCB2YWx1ZSA9IGF0dHIgPT4gYWN0aW9uU2V0dGluZ3NbIGF0dHIgXSA/IGFjdGlvblNldHRpbmdzWyBhdHRyIF0gOiAnTlVMTCc7XHJcblxyXG5cdGNvbnN0IGxhYmVsV2l0aEF0dHJzID0gZ2F0ZXdheUF0dHJzKCkubWFwKCBhdHRyID0+ICggYCR7IGxhYmVsKCBhdHRyICkgfSAkeyB2YWx1ZSggYXR0ciApIH1gICkgKTtcclxuXHJcblx0cmV0dXJuIGxhYmVsV2l0aEF0dHJzLmpvaW4oICcsICcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXM7IiwiaW1wb3J0IHsgZ2F0ZXdheUF0dHIsIHJlbmRlckdhdGV3YXkgfSBmcm9tIFwiLi4vaGVscGVycy9nYXRld2F5LWhlbHBlclwiO1xyXG5pbXBvcnQgVG9vbHMsIHsgZXZlbnQgfSBmcm9tIFwiLi4vaGVscGVycy90b29sc1wiO1xyXG5pbXBvcnQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMgZnJvbSBcIi4vZ2F0ZXdheS1hY3Rpb24tYXR0cnViaXRlc1wiO1xyXG5pbXBvcnQgeyBhY3Rpb25CeVR5cGVMaXN0LCBmcm9tTG9jYWxpemVIZWxwZXIgfSBmcm9tIFwiLi4vaGVscGVycy9hY3Rpb24taGVscGVyXCI7XHJcbmltcG9ydCBQYXlQYWwgZnJvbSBcIi4vcGF5cGFsXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG5ldmVudCggJ2pldC1mYi1nYXRld2F5cy9pbml0JyApKCk7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdFRleHRDb250cm9sLFxyXG5cdENoZWNrYm94Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdFJhZGlvQ29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0TW9kYWwsXHJcblx0VGV4dCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU3RhdGUsXHJcblx0dXNlRWZmZWN0XHJcbn0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgcGFyc2VBY3Rpb25zID0gYWN0aW9ucyA9PiB7XHJcblx0cmV0dXJuIGFjdGlvbnMuZmlsdGVyKCBhY3Rpb24gPT4gISAoIGFjdGlvbi50eXBlID09PSAnaW5zZXJ0X3Bvc3QnIHx8IGFjdGlvbi50eXBlID09PSAncmVkaXJlY3RfdG9fcGFnZScgKSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2F0ZXdheXNFZGl0b3IoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhdGV3YXlzQXJncyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUFjdGlvbnMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKSB7XHJcblxyXG5cdGNvbnN0IGF2YWlsYWJsZUFjdGlvbnMgPSBwYXJzZUFjdGlvbnMoIGFjdGl2ZUFjdGlvbnMgKTtcclxuXHJcblx0Y29uc3QgZ2F0ZXdheXNEYXRhID0gZ2F0ZXdheUF0dHIoKTtcclxuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuXHRjb25zdCBbZ2F0ZXdheSwgc2V0R2F0ZXdheV0gPSB1c2VTdGF0ZSggZ2F0ZXdheXNBcmdzICk7XHJcblxyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIHNldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gbmV3VmFsdWVcclxuXHQgKi9cclxuXHRjb25zdCBzZXRWYWx1ZUluT2JqZWN0ID0gKCB3aGVuLCB0eXBlLCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHNldEdhdGV3YXkoICggcHJldkFyZ3MgKSA9PiB7XHJcblx0XHRcdGlmICggISBwcmV2QXJnc1sgd2hlbiBdICkge1xyXG5cdFx0XHRcdHByZXZBcmdzWyB3aGVuIF0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwcmV2QXJnc1sgd2hlbiBdWyB0eXBlIF0gPSBuZXdWYWx1ZTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIGdldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gaXNFbXB0eVJlc3VsdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcblx0ICovXHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9ucyA9ICggd2hlbiwgdHlwZSwgaXNFbXB0eVJlc3VsdCA9IGZhbHNlICkgPT4ge1xyXG5cdFx0aWYgKCBnYXRld2F5WyB3aGVuIF0gJiYgZ2F0ZXdheVsgd2hlbiBdWyB0eXBlIF0gKSB7XHJcblx0XHRcdHJldHVybiBnYXRld2F5WyB3aGVuIF1bIHR5cGUgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0VtcHR5UmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFJlc3VsdE1lc3NhZ2UgPSAoIGtleSwgdmFsdWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbWVzc2FnZXMnLCBrZXksIHZhbHVlICk7XHJcblx0fTtcclxuXHRjb25zdCBnZXRSZXN1bHRNZXNzYWdlID0gKCBrZXkgKSA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ21lc3NhZ2VzJywga2V5LCBnYXRld2F5c0RhdGEubWVzc2FnZXNbIGtleSBdICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc0JlZm9yZSA9ICggaWQsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfYmVmb3JlJywgaWQsIG5ld1ZhbHVlICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYWN0aW9uRGVmYXVsdCA9IHsgYWN0aXZlOiBmYWxzZSB9O1xyXG5cclxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zQmVmb3JlID0gaWQgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX2JlZm9yZScsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XHJcblx0fTtcclxuXHJcblxyXG5cdGNvbnN0IHNldE5vdGlmaWNhdGlvbnNGYWlsZWQgPSAoIHR5cGUsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfZmFpbGVkJywgdHlwZSwgbmV3VmFsdWUgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnNGYWlsZWQgPSBpZCA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ25vdGlmaWNhdGlvbnNfZmFpbGVkJywgaWQsIGFjdGlvbkRlZmF1bHQgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXROb3RpZmljYXRpb25zU3VjY2VzcyA9ICggaWQsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ25vdGlmaWNhdGlvbnNfc3VjY2VzcycsIGlkLCBuZXdWYWx1ZSApO1xyXG5cdH07XHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MgPSBpZCA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ25vdGlmaWNhdGlvbnNfc3VjY2VzcycsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIHRydWUgPT09IGlzU2F2ZUFjdGlvbiApIHtcclxuXHRcdFx0aWYgKCBvblNhdmVJdGVtcyApIHtcclxuXHJcblx0XHRcdFx0Wydub3RpZmljYXRpb25zX2JlZm9yZScsICdub3RpZmljYXRpb25zX2ZhaWxlZCcsICdub3RpZmljYXRpb25zX3N1Y2Nlc3MnXS5mb3JFYWNoKCBuYW1lID0+IHtcclxuXHRcdFx0XHRcdGlmICggISBnYXRld2F5WyBuYW1lIF0gKSB7XHJcblx0XHRcdFx0XHRcdGdhdGV3YXlbIG5hbWUgXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRPYmplY3QuZW50cmllcyggZ2F0ZXdheVsgbmFtZSBdICkuZm9yRWFjaCggKCBbYWN0aW9uLCBpc0NoZWNrZWRdICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoICEgaXNDaGVja2VkICkge1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBnYXRld2F5WyBuYW1lIF1bIGFjdGlvbiBdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IClcclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdG9uU2F2ZUl0ZW1zKCBnYXRld2F5ICk7XHJcblx0XHRcdH1cclxuXHRcdFx0b25Vbk1vdW50KCk7XHJcblx0XHR9IGVsc2UgaWYgKCBmYWxzZSA9PT0gaXNTYXZlQWN0aW9uICkge1xyXG5cdFx0XHRvblVuTW91bnQoKTtcclxuXHRcdH1cclxuXHR9LCBbaXNTYXZlQWN0aW9uXSApO1xyXG5cclxuXHRjb25zdCBhY3Rpb25zTGlzdCA9IGFjdGlvbkJ5VHlwZUxpc3QoICdpbnNlcnRfcG9zdCcsIHRydWUgKTtcclxuXHRjb25zdCBhY3Rpb25MYWJlbCA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldEFjdGlvbkxhYmVsJyApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgcmVuZGVyR2F0ZXdheSggZ2F0ZXdheS5nYXRld2F5LCB7IHNldFZhbHVlSW5PYmplY3QsIGdldE5vdGlmaWNhdGlvbnMgfSApIH1cclxuXHRcdHsgQm9vbGVhbiggYXZhaWxhYmxlQWN0aW9ucy5sZW5ndGggKSAmJiA8PlxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnQmVmb3JlIHBheW1lbnQgcHJvY2Vzc2VkOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRrZXk9XCJiZWZvcmVfcGF5bWVudF9iYXNlX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2hlY2tib3hlcy1yb3cnIH0+XHJcblx0XHRcdFx0XHR7IGF2YWlsYWJsZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICggYWN0aW9uLnR5cGUgPT09ICdpbnNlcnRfcG9zdCcgfHwgYWN0aW9uLnR5cGUgPT09ICdyZWRpcmVjdF90b19wYWdlJyApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgYHBsYWNlX2hvbGRlcl9ibG9ja18keyBhY3Rpb24uaWQgKyBpbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGdldE5vdGlmaWNhdGlvbnNCZWZvcmUoIGFjdGlvbi5pZCApLmFjdGl2ZSB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBhY3Rpb25MYWJlbCggYWN0aW9uLnR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdFx0aGVscD17IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhY3RpdmUgPT4gc2V0Tm90aWZpY2F0aW9uc0JlZm9yZSggYWN0aW9uLmlkLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmUsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBhY3Rpb24udHlwZVxyXG5cdFx0XHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0XHRcdC8+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBfXyggJ09uIHN1Y2Nlc3NmdWwgcGF5bWVudDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0a2V5PVwic3VjY2Vzc19wYXltZW50X2Jhc2VfY29udHJvbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0eyBhdmFpbGFibGVBY3Rpb25zLm1hcCggKCBhY3Rpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybXMtY2hlY2tib3gtZmllbGQnIH1cclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgZ2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MoIGFjdGlvbi5pZCApLmFjdGl2ZSB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBhY3Rpb25MYWJlbCggYWN0aW9uLnR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdFx0aGVscD17IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhY3RpdmUgPT4gc2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MoIGFjdGlvbi5pZCwge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogYWN0aW9uLnR5cGVcclxuXHRcdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0XHQvPjtcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPbiBmYWlsZWQgcGF5bWVudDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0a2V5PVwiZmFpbGVkX3BheW1lbnRfYmFzZV9jb250cm9sXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHR7IGF2YWlsYWJsZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICggYWN0aW9uLnR5cGUgPT09ICdpbnNlcnRfcG9zdCcgfHwgYWN0aW9uLnR5cGUgPT09ICdyZWRpcmVjdF90b19wYWdlJyApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgYHBsYWNlX2hvbGRlcl9ibG9ja18keyBhY3Rpb24uaWQgKyBpbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGdldE5vdGlmaWNhdGlvbnNGYWlsZWQoIGFjdGlvbi5pZCApLmFjdGl2ZSB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBhY3Rpb25MYWJlbCggYWN0aW9uLnR5cGUgKSB9XHJcblx0XHRcdFx0XHRcdFx0aGVscD17IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhY3RpdmUgPT4gc2V0Tm90aWZpY2F0aW9uc0ZhaWxlZCggYWN0aW9uLmlkLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmUsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBhY3Rpb24udHlwZVxyXG5cdFx0XHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0XHRcdC8+O1xyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdDwvPiB9XHJcblxyXG5cdFx0eyAoIDEgPCBhY3Rpb25zTGlzdC5sZW5ndGggfHwgZ2F0ZXdheS5hY3Rpb25fb3JkZXIgKSAmJiA8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FjdGlvbl9vcmRlcicgKSB9XHJcblx0XHRcdGtleT0nZ2F0ZXdheV9hY3Rpb25fb3JkZXJfYmFzZV9jb250cm9sJ1xyXG5cdFx0PlxyXG5cdFx0XHQ8UmFkaW9Db250cm9sXHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdqZXQtY29udHJvbC1jbGVhci1mdWxsJ1xyXG5cdFx0XHRcdGtleT0nZ2F0ZXdheV9hY3Rpb25fb3JkZXInXHJcblx0XHRcdFx0b3B0aW9ucz17IGFjdGlvbkJ5VHlwZUxpc3QoICdpbnNlcnRfcG9zdCcsIHRydWUgKSB9XHJcblx0XHRcdFx0c2VsZWN0ZWQ9eyBnYXRld2F5LmFjdGlvbl9vcmRlciB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0c2V0R2F0ZXdheSggcHJldkFyZ3MgPT4gKCB7XHJcblx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRhY3Rpb25fb3JkZXI6IE51bWJlciggbmV3VmFsIClcclxuXHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9CYXNlQ29udHJvbD4gfVxyXG5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdwcmljZV9maWVsZCcgKSB9XHJcblx0XHRcdGtleT17ICdmb3JtX2ZpZWxkc19wcmljZV9maWVsZCcgfVxyXG5cdFx0XHR2YWx1ZT17IGdhdGV3YXkucHJpY2VfZmllbGQgfVxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPSdzaWRlJ1xyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0c2V0R2F0ZXdheSggcHJldkFyZ3MgPT4gKCB7XHJcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdHByaWNlX2ZpZWxkOiBuZXdWYWxcclxuXHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0fSB9XHJcblx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdC8+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWFjcm9zX2Jhc2VfY29udHJvbFwiXHJcblx0XHQ+XHJcblx0XHRcdDxoND5cclxuXHRcdFx0XHR7IF9fKCAnQXZhaWxhYmxlIG1hY3JvcyBsaXN0OiAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHR7IF9fKCAnJWdhdGV3YXlfYW1vdW50JSAtIHBheW1lbnQgYW1vdW50IHJldHVybmVkIGZyb20gZ2F0ZXdheSB0ZW1wbGF0ZTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHR7IF9fKCAnJWdhdGV3YXlfc3RhdHVzJSAtIHBheWVtbnQgc3RhdHVzIHJldHVybmVkIGZyb20gcGF5bWVudCBnYXRld2F5OycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdHsgX18oICclZmllbGRfbmFtZSUgLSByZXBsYWNlIFwiZmllbGRfbmFtZVwiIHdpdGggYW55IGZpZWxkIG5hbWUgZnJvbSB0aGUgZm9ybTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0PC9oND5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblxyXG5cdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tZXNzYWdlX3N1Y2Nlc3NcIlxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnbWVzc2FnZV9zdWNjZXNzJyApIH1cclxuXHRcdFx0dmFsdWU9eyBnZXRSZXN1bHRNZXNzYWdlKCAnc3VjY2VzcycgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnLCBuZXdWYWx1ZSApIH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21lc3NhZ2VfZmFpbGVkXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2VfZmFpbGVkJyApIH1cclxuXHRcdFx0dmFsdWU9eyBnZXRSZXN1bHRNZXNzYWdlKCAnZmFpbGVkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRSZXN1bHRNZXNzYWdlKCAnZmFpbGVkJywgbmV3VmFsdWUgKSB9XHJcblx0XHQvPlxyXG5cdFx0eyBhY3RpdmVBY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiBhY3Rpb24udHlwZSA9PT0gJ3JlZGlyZWN0X3RvX3BhZ2UnICkgJiYgPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRrZXk9XCJjaGVja2JveF9ibG9ja19yZWRpcmVjdF90b19wYWdlXCJcclxuXHRcdFx0Y2hlY2tlZD17IGdhdGV3YXkudXNlX3N1Y2Nlc3NfcmVkaXJlY3QgfVxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlX3N1Y2Nlc3NfcmVkaXJlY3QnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHtcclxuXHRcdFx0XHRzZXRHYXRld2F5KCBwcmV2QXJncyA9PiAoIHtcclxuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0dXNlX3N1Y2Nlc3NfcmVkaXJlY3Q6IHZhbHVlXHJcblx0XHRcdFx0fSApICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0Lz4gfVxyXG5cdDwvPjtcclxuXHJcbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRyZWdpc3RlckdhdGV3YXksXHJcblx0Z2F0ZXdheUxhYmVsXHJcbn0gPSB3aW5kb3cuSmV0RkJHYXRld2F5cztcclxuXHJcbmNvbnN0IGxhYmVsID0gZ2F0ZXdheUxhYmVsKCAncGF5cGFsJyApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF5UGFsKCB7XHJcblx0XHRcdFx0XHQgc2V0VmFsdWVJbk9iamVjdCxcclxuXHRcdFx0XHRcdCBnZXROb3RpZmljYXRpb25zXHJcblx0XHRcdFx0IH0gKSB7XHJcblxyXG5cdGNvbnN0IHNldFNldHRpbmcgPSAoIGtleSwgdmFsdWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAncGF5cGFsJywga2V5LCB2YWx1ZSApO1xyXG5cdH07XHJcblx0Y29uc3QgZ2V0U2V0dGluZyA9ICgga2V5ICkgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdwYXlwYWwnLCBrZXksICcnICk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2NsaWVudF9pZCcgKSB9XHJcblx0XHRcdGtleT0ncGF5cGFsX2NsaWVudF9pZF9zZXR0aW5nJ1xyXG5cdFx0XHR2YWx1ZT17IGdldFNldHRpbmcoICdjbGllbnRfaWQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBzZXRTZXR0aW5nKCAnY2xpZW50X2lkJywgbmV3VmFsICkgfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnc2VjcmV0JyApIH1cclxuXHRcdFx0a2V5PSdwYXlwYWxfc2VjcmV0X3NldHRpbmcnXHJcblx0XHRcdHZhbHVlPXsgZ2V0U2V0dGluZyggJ3NlY3JldCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHNldFNldHRpbmcoICdzZWNyZXQnLCBuZXdWYWwgKSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjdXJyZW5jeScgKSB9XHJcblx0XHRcdGtleT0ncGF5cGFsX2N1cnJlbmN5X2NvZGVfc2V0dGluZydcclxuXHRcdFx0dmFsdWU9eyBnZXRTZXR0aW5nKCAnY3VycmVuY3knICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBzZXRTZXR0aW5nKCAnY3VycmVuY3knLCBuZXdWYWwgKSB9XHJcblx0XHQvPlxyXG5cdDwvPjtcclxufVxyXG5cclxucmVnaXN0ZXJHYXRld2F5KCAncGF5cGFsJywgUGF5UGFsICk7XHJcblxyXG4iLCJpbXBvcnQgd2l0aEFjdGlvbkxvY2FsaXplU2NyaXB0IGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMgZnJvbSBcIi4uL2dhdGV3YXlzL2dhdGV3YXktYWN0aW9uLWF0dHJ1Yml0ZXNcIjtcclxuaW1wb3J0IHsgc2F2ZUdsb2JhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBY3Rpb25zQnlUeXBlID0gdHlwZSA9PiB7XHJcblx0Y29uc3QgW2FjdGlvbnNdID0gdXNlQWN0aW9ucygpO1xyXG5cclxuXHRyZXR1cm4gYWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbGl6ZUhlbHBlciA9IG5hbWUgPT4ge1xyXG5cdHJldHVybiBuYW1lID8gd2luZG93LkpldEZCTG9jYWxpemVIZWxwZXJbIG5hbWUgXSA6IHdpbmRvdy5KZXRGQkxvY2FsaXplSGVscGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkJ5VHlwZUxpc3QgPSAoIGFjdGlvblR5cGUsIHdpdGhEZXNjID0gZmFsc2UgKSA9PiB7XHJcblx0cmV0dXJuIGdldEFjdGlvbnNCeVR5cGUoIGFjdGlvblR5cGUgKS5tYXAoIGFjdGlvbiA9PiB7XHJcblx0XHRjb25zdCBuZXdBY3Rpb24gPSB7XHJcblx0XHRcdHZhbHVlOiBhY3Rpb24uaWQsXHJcblx0XHRcdGxhYmVsOiBmcm9tTG9jYWxpemVIZWxwZXIoICdnZXRBY3Rpb25MYWJlbCcgKSggYWN0aW9uLnR5cGUgKVxyXG5cdFx0fTtcclxuXHRcdGlmICggd2l0aERlc2MgKSB7XHJcblx0XHRcdG5ld0FjdGlvbi5sYWJlbCArPSBgICgkeyBnYXRld2F5QWN0aW9uQXR0cmlidXRlcyggYWN0aW9uICkgfSlgXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG5ld0FjdGlvbjtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQWN0aW9uID0gKCBhY3Rpb25UeXBlLCBhY3Rpb25JbnN0YW5jZSApID0+IHtcclxuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zID0gd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9ucyB8fCB7fTtcclxuXHR3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zWyBhY3Rpb25UeXBlIF0gPSB3aXRoQWN0aW9uTG9jYWxpemVTY3JpcHQoIGFjdGlvblR5cGUsIGFjdGlvbkluc3RhbmNlICk7XHJcbn07XHJcblxyXG5zYXZlR2xvYmFsQ29tcG9uZW50KCAnSmV0RkJBY3Rpb25zJywgeyBhZGRBY3Rpb24gfSApOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBibG9ja3NSZWN1cnNpdmVJdGVyYXRvciA9ICggYmxvY2tQYXJzZXJGdW5jICkgPT4ge1xyXG5cdGNvbnN0IGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yID0gKCBibG9ja3MgKSA9PiB7XHJcblxyXG5cdFx0YmxvY2tzID0gYmxvY2tzIHx8IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tzKCk7XHJcblxyXG5cdFx0YmxvY2tzLm1hcCggYmxvY2sgPT4ge1xyXG5cdFx0XHRibG9ja1BhcnNlckZ1bmMoIGJsb2NrICk7XHJcblxyXG5cdFx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRibG9ja3NSZWN1cnNpdmVJdGVyYXRvciggYmxvY2suaW5uZXJCbG9ja3MgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZvcm1GaWVsZHNCbG9ja3MgPSAoIGV4Y2x1ZGUgPSBbXSwgcGxhY2Vob2xkZXIgPSBmYWxzZSApID0+IHtcclxuXHRjb25zdCBmb3JtRmllbGRzID0gW107XHJcblxyXG5cdGxldCBza2lwRmllbGRzID0gWyAnc3VibWl0JywgJ2Zvcm0tYnJlYWsnLCAnaGVhZGluZycsICdncm91cC1icmVhaycsIC4uLmV4Y2x1ZGUgXTtcclxuXHJcblx0YmxvY2tzUmVjdXJzaXZlSXRlcmF0b3IoIGJsb2NrID0+IHtcclxuXHRcdGlmICggYmxvY2submFtZS5pbmNsdWRlcyggJ2pldC1mb3Jtcy8nIClcclxuXHRcdFx0JiYgYmxvY2suYXR0cmlidXRlcy5uYW1lXHJcblx0XHRcdCYmICEgc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcclxuXHRcdCkge1xyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bmFtZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdGxhYmVsOiBibG9jay5hdHRyaWJ1dGVzLmxhYmVsIHx8IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSxcclxuXHRcdFx0XHR2YWx1ZTogYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gcGxhY2Vob2xkZXJcclxuXHRcdD8gWyB7IHZhbHVlOiAnJywgbGFiZWw6IHBsYWNlaG9sZGVyIH0sIC4uLmZvcm1GaWVsZHMgXVxyXG5cdFx0OiBmb3JtRmllbGRzO1xyXG59XHJcblxyXG5jb25zdCBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCA9ICggcGxhY2Vob2xkZXIgPSBmYWxzZSApID0+IHtcclxuXHRjb25zb2xlLmxvZyggbmV3IERhdGUoKS5nZXRUaW1lKCkgKTtcclxuXHJcblx0Y29uc3Qgc2tpcEZpZWxkcyA9IFsgJ3N1Ym1pdCcsICdmb3JtLWJyZWFrJywgJ2hlYWRpbmcnLCAnZ3JvdXAtYnJlYWsnIF07XHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IFtdO1xyXG5cclxuXHRjb25zdCBjdXJyZW50ID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5nZXRTZWxlY3RlZEJsb2NrKCk7XHJcblxyXG5cdGlmICggbnVsbCA9PT0gY3VycmVudCApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGJsb2Nrc1JlY3Vyc2l2ZUl0ZXJhdG9yKCBibG9jayA9PiB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUuaW5jbHVkZXMoICdqZXQtZm9ybXMvJyApXHJcblx0XHRcdCYmIGN1cnJlbnQuY2xpZW50SWQgIT09IGJsb2NrLmNsaWVudElkXHJcblx0XHRcdCYmICEgc2tpcEZpZWxkcy5maW5kKCBmaWVsZCA9PiBibG9jay5uYW1lLmluY2x1ZGVzKCBmaWVsZCApIClcclxuXHRcdCkge1xyXG5cdFx0XHRmb3JtRmllbGRzLnB1c2goIHtcclxuXHRcdFx0XHRibG9ja05hbWU6IGJsb2NrLm5hbWUsXHJcblx0XHRcdFx0bGFiZWw6IGJsb2NrLmF0dHJpYnV0ZXMubGFiZWwgfHwgYmxvY2suYXR0cmlidXRlcy5uYW1lLFxyXG5cdFx0XHRcdHZhbHVlOiBibG9jay5hdHRyaWJ1dGVzLm5hbWUsXHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBwbGFjZWhvbGRlclxyXG5cdFx0PyBbIHsgdmFsdWU6ICcnLCBsYWJlbDogcGxhY2Vob2xkZXIgfSwgLi4uZm9ybUZpZWxkcyBdXHJcblx0XHQ6IGZvcm1GaWVsZHM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdmFpbGFibGVGaWVsZHMgPSAoIGV4Y2x1ZGUgPSBbXSApID0+IHtcclxuXHRsZXQgZmllbGRzID0gW107XHJcblx0Y29uc3QgYmxvY2tzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggZXhjbHVkZSApO1xyXG5cclxuXHRpZiAoIGJsb2NrcyApIHtcclxuXHRcdGJsb2Nrcy5mb3JFYWNoKCBpdGVtID0+IGZpZWxkcy5wdXNoKCBpdGVtLm5hbWUgKSApO1xyXG5cdH1cclxuXHRyZXR1cm4gZmllbGRzO1xyXG59XHJcblxyXG5jb25zdCBnZXRBdmFpbGFibGVGaWVsZHNTdHJpbmcgPSAoIGJsb2NrTmFtZSApID0+IHtcclxuXHRjb25zdCBmaWVsZHMgPSBnZXRBdmFpbGFibGVGaWVsZHMoIFsgYmxvY2tOYW1lIF0gKTtcclxuXHJcblx0bGV0IGZpZWxkc1N0cmluZyA9IFtdO1xyXG5cdGZpZWxkcy5mb3JFYWNoKCBmdW5jdGlvbiAoIGl0ZW0gKSB7XHJcblx0XHRmaWVsZHNTdHJpbmcucHVzaCggJyVGSUVMRDo6JyArIGl0ZW0gKyAnJScgKTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBfXyggJ0F2YWlsYWJsZSBmaWVsZHM6ICcgKSArIGZpZWxkc1N0cmluZy5qb2luKCAnLCAnICk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBnZXRJbm5lckJsb2NrcyA9ICggY2xpZW50SWQgKSA9PiB7XHJcblx0cmV0dXJuIHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2soIGNsaWVudElkICkuaW5uZXJCbG9ja3M7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZvcm1GaWVsZHNCeUJsb2NrID0gKCBibG9ja0V4Y2x1ZGUgKSA9PiB7XHJcblx0cmV0dXJuICgpID0+IGdldEZvcm1GaWVsZHNCbG9ja3MoIFsgYmxvY2tFeGNsdWRlLm5hbWUgXSApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGdldEZvcm1GaWVsZHNCeUJsb2NrLFxyXG5cdGdldElubmVyQmxvY2tzLFxyXG5cdGdldEF2YWlsYWJsZUZpZWxkc1N0cmluZyxcclxuXHRnZXRBdmFpbGFibGVGaWVsZHMsXHJcblx0Z2V0Rm9ybUZpZWxkc0Jsb2NrcyxcclxuXHRnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlQWN0aW9ucyB9IGZyb20gXCIuL2hvb2tzLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBzYXZlR2xvYmFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFuYWdlclwiO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTZWxlY3QsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjdGlvblNldHRpbmdzID0gYWN0aW9uSWQgPT4ge1xyXG5cdGNvbnN0IFthY3Rpb25zXSA9IHVzZUFjdGlvbnMoKTtcclxuXHRjb25zdCBhY3Rpb24gPSBhY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiBhY3Rpb25JZCA9PT0gYWN0aW9uLmlkICk7XHJcblxyXG5cdHJldHVybiAoIGFjdGlvbiAmJiBhY3Rpb24uc2V0dGluZ3MgKSA/IGFjdGlvbi5zZXR0aW5ncyA6IGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhdGV3YXlBdHRyID0gKCBhdHRyID0gZmFsc2UsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuXHRpZiAoICEgYXR0ciApIHtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHRpZiAoICEgZGF0YVsgYXR0ciBdICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc291cmNlID0gZGF0YVsgYXR0ciBdO1xyXG5cclxuXHRyZXR1cm4gbmFtZSA9PiBzb3VyY2VbIG5hbWUgXSA/IHNvdXJjZVsgbmFtZSBdIDogaXNFbXB0eTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYXRld2F5TGFiZWwgPSAoIHR5cGUsIGlzRW1wdHkgPSAnJyApID0+IHtcclxuXHRjb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuXHRyZXR1cm4gYXR0ciA9PiBsYWJlbCggdHlwZSApID8gbGFiZWwoIHR5cGUgKVsgYXR0ciBdIDogaXNFbXB0eTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyR2F0ZXdheSA9ICggaWQsIGNhbGxiYWNrICkgPT4ge1xyXG5cdHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCA9IHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCB7fTtcclxuXHR3aW5kb3cuamV0RkJHYXRld2F5c0xpc3RbIGlkIF0gPSBjYWxsYmFjaztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJHYXRld2F5ID0gKCBpZCwgcHJvcHMgKSA9PiB7XHJcblx0aWYgKCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdCB8fCAhIHdpbmRvdy5qZXRGQkdhdGV3YXlzTGlzdFsgaWQgXSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHRjb25zdCBHYXRld2F5Q29tcG9uZW50ID0gd2luZG93LmpldEZCR2F0ZXdheXNMaXN0WyBpZCBdO1xyXG5cclxuXHRyZXR1cm4gPEdhdGV3YXlDb21wb25lbnQgeyAuLi5wcm9wcyB9IC8+O1xyXG59O1xyXG5cclxuc2F2ZUdsb2JhbENvbXBvbmVudCggJ0pldEZCR2F0ZXdheXMnLCB7XHJcblx0Z2F0ZXdheUF0dHIsXHJcblx0Z2F0ZXdheUxhYmVsLFxyXG5cdHJlZ2lzdGVyR2F0ZXdheVxyXG59ICk7IiwiaW1wb3J0IHsgc2F2ZUdsb2JhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL21hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VFZmZlY3RcclxufSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHRjcmVhdGVIb29rc1xyXG59ID0gd3AuaG9va3M7XHJcblxyXG5leHBvcnQgY29uc3QgamZiSG9va3MgPSBjcmVhdGVIb29rcygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFjdGlvbnMgPSAoIHdpdGhFZGl0UG9zdEVmZmVjdCA9IGZhbHNlICkgPT4ge1xyXG5cdGNvbnN0IG1ldGEgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xyXG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ZWRpdFBvc3RcclxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0Y29uc3QgW2FjdGlvbnMsIHNldEFjdGlvbnNdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGEuX2pmX2FjdGlvbnMgfHwgJ1tdJyApICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCB3aXRoRWRpdFBvc3RFZmZlY3QgKSB7XHJcblx0XHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0X2pmX2FjdGlvbnM6IEpTT04uc3RyaW5naWZ5KCBhY3Rpb25zIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0sIFthY3Rpb25zXSApO1xyXG5cclxuXHRyZXR1cm4gW2FjdGlvbnMsIHNldEFjdGlvbnNdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ2xhc3NlcyA9IGluaXRpYWxWYWxpZCA9PiB7XHJcblx0Y29uc3QgdmFsaWRDbGFzcyA9ICdpcy12YWxpZCc7XHJcblx0Y29uc3QgaW52YWxpZENsYXNzID0gJ2lzLWludmFsaWQnXHJcblx0Y29uc3QgaW5pdENsYXNzZXMgPSBbICdqZXQtZm9ybS12YWxpZGF0ZS1idXR0b24nIF07XHJcblxyXG5cdGNvbnN0IGluaXRTdGF0ZUNsYXNzZXMgPSAoKSA9PiB7XHJcblx0XHRpZiAoIGluaXRpYWxWYWxpZCApIHtcclxuXHRcdFx0cmV0dXJuIFsgLi4uaW5pdENsYXNzZXMsIHZhbGlkQ2xhc3MgXTtcclxuXHRcdH0gZWxzZSBpZiggISBpbml0aWFsVmFsaWQgKSB7XHJcblx0XHRcdHJldHVybiBbIC4uLmluaXRDbGFzc2VzLCBpbnZhbGlkQ2xhc3MgXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBbIGNsYXNzZXMsIHNldENsYXNzZXMgXSA9IHVzZVN0YXRlKCBpbml0U3RhdGVDbGFzc2VzKCkgKTtcclxuXHJcblx0Y29uc3Qgc2V0VmFsaWRDbGFzcyA9ICgpID0+IHsgc2V0Q2xhc3NlcyggWyAuLi5pbml0Q2xhc3NlcywgdmFsaWRDbGFzcyBdICkgfTtcclxuXHRjb25zdCBzZXRJbnZhbGlkQ2xhc3MgPSAoKSA9PiB7IHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsIGludmFsaWRDbGFzcyBdICkgfTtcclxuXHRjb25zdCBzZXRMb2FkaW5nQ2xhc3MgPSAoKSA9PiB7IHNldENsYXNzZXMoIFsgLi4uaW5pdENsYXNzZXMsICdsb2FkaW5nJyBdICkgfTtcclxuXHJcblx0cmV0dXJuIFsgY2xhc3Nlcy5qb2luKCAnICcgKSwgc2V0VmFsaWRDbGFzcywgc2V0SW52YWxpZENsYXNzLCBzZXRMb2FkaW5nQ2xhc3MgXTtcclxufVxyXG5cclxuXHJcbnNhdmVHbG9iYWxDb21wb25lbnQoICdKZXRGQkhvb2tzJywgeyB1c2VBY3Rpb25zLCB1c2VTdGF0ZUNsYXNzZXMgfSApO1xyXG4iLCJpbXBvcnQgeyBzYXZlR2xvYmFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNsYXNzIFRvb2xzIHtcclxuXHJcblx0c3RhdGljIGdldEhlbHBNZXNzYWdlKCBmcm9tLCBuYW1lICkge1xyXG5cdFx0aWYgKCB0eXBlb2YgZnJvbS5oZWxwX21lc3NhZ2VzWyBuYW1lIF0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cdFx0XHRyZXR1cm4gZnJvbS5oZWxwX21lc3NhZ2VzWyBuYW1lIF07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0eXBlb2YgZnJvbS5oZWxwX21lc3NhZ2VzWyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9mdW5jdGlvbiBdID09PSAnb2JqZWN0JyApIHtcclxuXHRcdFx0cmV0dXJuIGZyb20uaGVscF9tZXNzYWdlc1sgYXR0cmlidXRlcy5nZW5lcmF0b3JfZnVuY3Rpb24gXVsgbmFtZSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldExhYmVsKCBtZXRhLCBhdHRycyApIHtcclxuXHRcdGNvbnN0IGxhYmVsID0ge307XHJcblx0XHRsYWJlbC5uYW1lID0gYXR0cnMubGFiZWw7XHJcblx0XHRpZiAoIGF0dHJzLnJlcXVpcmVkICkge1xyXG5cdFx0XHRsYWJlbC5tYXJrID0gSlNPTi5wYXJzZSggbWV0YS5famZfYXJncyApLnJlcXVpcmVkX21hcmsgfHwgJyc7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGFiZWw7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgd2l0aFBsYWNlaG9sZGVyKCBzb3VyY2UsIGxhYmVsID0gJy0tJywgdmFsdWUgPSAnJyApIHtcclxuXHRcdHJldHVybiBbXHJcblx0XHRcdHsgbGFiZWwsIHZhbHVlIH0sXHJcblx0XHRcdC4uLnNvdXJjZVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpc0VtcHR5T2JqZWN0KCBvYmplY3QgKSB7XHJcblx0XHRyZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBvYmplY3QgJiYgT2JqZWN0LmtleXMoIG9iamVjdCApLmxlbmd0aCA9PT0gMDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRGdW5jQ29uZGl0aW9uID0gKCBuYW1lRnVuY3Rpb24gKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IEZ1bmN0aW9uKCBgcmV0dXJuIHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnNbICckeyBuYW1lRnVuY3Rpb24gfScgXWAgKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRDb25kaXRpb25Gb3JDb25kVHlwZSA9ICggbmFtZSwgY2FsbGFibGUgKSA9PiB7XHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25kaXRpb25zID0gd2luZG93LkpldEZvcm1CdWlsZGVyQ29uZGl0aW9ucyB8fCB7fTtcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbmRpdGlvbnNbIG5hbWUgXSA9IGNhbGxhYmxlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHBhcnNlQ29uZGl0aW9uc0Z1bmMgPSAoIHNvdXJjZSApID0+IHtcclxuXHRcdGNvbnN0IHR5cGVzID0gW107XHJcblxyXG5cdFx0c291cmNlLmZvckVhY2goIHR5cGUgPT4ge1xyXG5cdFx0XHRpZiAoIHR5cGUuY29uZGl0aW9uICkge1xyXG5cdFx0XHRcdGlmICggVG9vbHMuZ2V0RnVuY0NvbmRpdGlvbiggdHlwZS5jb25kaXRpb24gKSgpKCB0eXBlLnZhbHVlICkgKSB7XHJcblx0XHRcdFx0XHR0eXBlcy5wdXNoKCB0eXBlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHR5cGVzLnB1c2goIHR5cGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiB0eXBlcztcclxuXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnQgPSBuYW1lID0+IHtcclxuXHRjb25zdCBpbml0aWFsaXplQ2FsbGJhY2tzRXZlbnQgPSBuZXcgRXZlbnQoIG5hbWUgKTtcclxuXHRyZXR1cm4gKCkgPT4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggaW5pdGlhbGl6ZUNhbGxiYWNrc0V2ZW50ICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVuID0gKCBuYW1lLCBmdW5jICkgPT4ge1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIG5hbWUsIGZ1bmMgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHM7XHJcblxyXG5zYXZlR2xvYmFsQ29tcG9uZW50KCAnSmV0RkJUb29scycsIHsgVG9vbHMgfSApOyIsImltcG9ydCBBcmdzTWV0YSBmcm9tICcuL21ldGEvYXJndW1lbnRzJztcclxuaW1wb3J0IEFjdGlvbnNNZXRhIGZyb20gJy4vbWV0YS9hY3Rpb25zJztcclxuaW1wb3J0IFByZXNldE1ldGEgZnJvbSAnLi9tZXRhL3ByZXNldCc7XHJcbmltcG9ydCBNZXNzYWdlc01ldGEgZnJvbSAnLi9tZXRhL21lc3NhZ2VzJztcclxuaW1wb3J0IENhcHRjaGEgZnJvbSBcIi4vbWV0YS9jYXB0Y2hhXCI7XHJcbmltcG9ydCBHYXRld2F5cyBmcm9tIFwiLi9tZXRhL2dhdGV3YXlzXCI7XHJcblxyXG5pbXBvcnQgJy4vYmxvY2tzL2Zvcm0tZmllbGRzJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9zZW5kLWVtYWlsJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9pbnNlcnQtcG9zdCc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvcmVnaXN0ZXItdXNlcic7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvdXBkYXRlLXVzZXInO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3VwZGF0ZS1vcHRpb25zJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9jYWxsLWhvb2snO1xyXG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2NhbGwtd2ViaG9vayc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvcmVkaXJlY3QtdG8tcGFnZSc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvbWFpbGNoaW1wJztcclxuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9nZXRyZXNwb25zZSc7XHJcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvYWN0aXZlY2FtcGFpZ24nO1xyXG5pbXBvcnQgeyBldmVudCB9IGZyb20gXCIuL2hlbHBlcnMvdG9vbHNcIjtcclxuXHJcblxyXG5ldmVudCggJ2pldC1mb3JtLWJ1aWxkZXItaW5pdGlhbGl6ZScgKSgpO1xyXG5cclxud2luZG93LmpldEZvcm1BY3Rpb25UeXBlcy5mb3JFYWNoKCBmdW5jdGlvbiAoIGFjdGlvbiwgaW5kZXggKSB7XHJcblx0aWYgKCB3aW5kb3cuamV0Rm9ybURlZmF1bHRBY3Rpb25zICYmIHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnNbIGFjdGlvbi5pZCBdICkge1xyXG5cdFx0d2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgaW5kZXggXS5jYWxsYmFjayA9IHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnNbIGFjdGlvbi5pZCBdO1xyXG5cdH1cclxufSApO1xyXG5cclxuQXJnc01ldGEoKTtcclxuQ2FwdGNoYSgpO1xyXG5HYXRld2F5cygpO1xyXG5BY3Rpb25zTWV0YSgpO1xyXG5QcmVzZXRNZXRhKCk7XHJcbk1lc3NhZ2VzTWV0YSgpO1xyXG5cclxuZXZlbnQoJ2pldC1mb3JtLWJ1aWxkZXItaW5pdGlhbGl6ZWQnKSgpO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuaW1wb3J0IEFjdGlvbk1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL2FjdGlvbnMvYWN0aW9uLW1vZGFsXCI7XHJcbmltcG9ydCBGaWVsZFdpdGhQcmVzZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZmllbGQtd2l0aC1wcmVzZXRcIjtcclxuaW1wb3J0IER5bmFtaWNQcmVzZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJlc2V0cy9keW5hbWljLXByZXNldFwiO1xyXG5pbXBvcnQgUmVwZWF0ZXJXaXRoU3RhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVwZWF0ZXItd2l0aC1zdGF0ZVwiO1xyXG5pbXBvcnQgeyB1c2VBY3Rpb25zIH0gZnJvbSBcIi4uL2hlbHBlcnMvaG9va3MtaGVscGVyXCI7XHJcbmltcG9ydCB7IGdldEZvcm1GaWVsZHNCbG9ja3MgfSBmcm9tIFwiLi4vaGVscGVycy9ibG9ja3MtaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21JRCgpIHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDg5OTkgKSArIDEwMDA7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRBY3Rpb25zID0gWyB7XHJcblx0dHlwZTogJ3NlbmRfZW1haWwnLFxyXG5cdGlkOiBnZXRSYW5kb21JRCgpLFxyXG5cdHNldHRpbmdzOiB7XHJcblx0XHRzdWJqZWN0OiAnTmV3IG9yZGVyIG9uIHdlYnNpdGUnLFxyXG5cdFx0Y29udGVudDogJ0hpIGFkbWluIVxcblxcblRoZXJlIGFyZSBuZXcgb3JkZXIgb24geW91ciB3ZWJzaXRlLlxcblxcbk9yZGVyIGRldGFpbHM6XFxuLSBQb3N0IElEOiAlcG9zdF9pZCUnXHJcblx0fVxyXG59IF07XHJcblxyXG5jb25zdCBuZXdJdGVtQ29uZGl0aW9uID0ge1xyXG5cdGV4ZWN1dGU6IGZhbHNlLFxyXG5cdG9wZXJhdG9yOiAnJyxcclxuXHRmaWVsZDogJycsXHJcblx0ZGVmYXVsdDogJycsXHJcbn07XHJcblxyXG5jb25zdCBjb25kaXRpb25PcGVyYXRvcnMgPSBbXHJcblx0eyBsYWJlbDogJy0tJywgdmFsdWU6ICcnIH0sXHJcblx0eyBsYWJlbDogJ0VxdWFsJywgdmFsdWU6ICdlcXVhbCcgfSxcclxuXHR7IGxhYmVsOiAnR3JlYXRlciB0aGFuJywgdmFsdWU6ICdncmVhdGVyJyB9LFxyXG5cdHsgbGFiZWw6ICdMZXNzIHRoYW4nLCB2YWx1ZTogJ2xlc3MnIH0sXHJcblx0eyBsYWJlbDogJ0JldHdlZW4nLCB2YWx1ZTogJ2JldHdlZW4nIH0sXHJcblx0eyBsYWJlbDogJ0luIHRoZSBsaXN0JywgdmFsdWU6ICdvbmVfb2YnIH0sXHJcblx0eyBsYWJlbDogJ0NvbnRhaW4gdGV4dCcsIHZhbHVlOiAnY29udGFpbicgfSxcclxuXTtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRCdXR0b25Hcm91cCxcclxuXHRDYXJkLFxyXG5cdENhcmRCb2R5LFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHRNb2RhbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRyZWdpc3RlclBsdWdpblxyXG59ID0gd3AucGx1Z2lucztcclxuXHJcbmNvbnN0IHtcclxuXHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG59ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU3RhdGVcclxufSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuZnVuY3Rpb24gQWN0aW9uc01ldGEoKSB7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsQWN0aW9ucyA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoIHRydWUgKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdFx0aWYgKCAwID09PSBhY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdFx0XHRzZXRBY3Rpb25zKCBkZWZhdWx0QWN0aW9ucyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBbXSApO1xyXG5cclxuXHRcdGNvbnN0IG1vdmVBY3Rpb24gPSAoIGZyb21JbmRleCwgdG9JbmRleCApID0+IHtcclxuXHJcblx0XHRcdHZhciBpdGVtID0gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGFjdGlvbnNbIGZyb21JbmRleCBdICkgKSxcclxuXHRcdFx0XHRyZXBsYWNlZEl0ZW0gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uc1sgdG9JbmRleCBdICkgKTtcclxuXHJcblx0XHRcdGFjdGlvbnMuc3BsaWNlKCB0b0luZGV4LCAxLCBpdGVtICk7XHJcblx0XHRcdGFjdGlvbnMuc3BsaWNlKCBmcm9tSW5kZXgsIDEsIHJlcGxhY2VkSXRlbSApO1xyXG5cclxuXHRcdFx0c2V0QWN0aW9ucyggWyAuLi5hY3Rpb25zIF0gKTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGRlbGV0ZUFjdGlvbiA9ICggaW5kZXggKSA9PiB7XHJcblx0XHRcdGFjdGlvbnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdFx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMgXSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1cGRhdGVBY3Rpb24gPSAoIGlkLCBrZXksIHZhbHVlICkgPT4ge1xyXG5cdFx0XHRzZXRBY3Rpb25zKCBhY3Rpb25zLm1hcCggKCBhY3Rpb24sIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdGlmICggYWN0aW9uLmlkID09PSBpZCApIHtcclxuXHRcdFx0XHRcdHZhciBuZXdBY3Rpb24gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uICkgKTtcclxuXHRcdFx0XHRcdG5ld0FjdGlvblsga2V5IF0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHJldHVybiBuZXdBY3Rpb247XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBhY3Rpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICkgKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgWyBpc0VkaXQsIHNldEVkaXQgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cdFx0Y29uc3QgWyBlZGl0ZWRBY3Rpb24sIHNldEVkaXRlZEFjdGlvbiBdID0gdXNlU3RhdGUoIHt9ICk7XHJcblxyXG5cdFx0Y29uc3QgWyBpc0VkaXRQcm9jZXNzQWN0aW9uLCBzZXRFZGl0UHJvY2Vzc0FjdGlvbiBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblx0XHRjb25zdCBbIHByb2Nlc3NlZEFjdGlvbiwgc2V0UHJvY2Vzc2VkQWN0aW9uIF0gPSB1c2VTdGF0ZSgge30gKTtcclxuXHJcblx0XHRjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG5cdFx0XHRzZXRFZGl0KCBmYWxzZSApXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFjdGlvblR5cGVzID0gd2luZG93LmpldEZvcm1BY3Rpb25UeXBlcy5tYXAoIGZ1bmN0aW9uICggYWN0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZhbHVlOiBhY3Rpb24uaWQsXHJcblx0XHRcdFx0bGFiZWw6IGFjdGlvbi5uYW1lLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHZhciBDYWxsYmFjayA9IGZhbHNlO1xyXG5cclxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuXHRcdFx0aWYgKCB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpIF0uaWQgPT09IGVkaXRlZEFjdGlvbi50eXBlICYmIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGkgXS5jYWxsYmFjayApIHtcclxuXHRcdFx0XHRDYWxsYmFjayA9IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGkgXS5jYWxsYmFjaztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHVwZGF0ZUFjdGlvblNldHRpbmdzID0gYWN0aW9uID0+IHtcclxuXHRcdFx0dXBkYXRlQWN0aW9uKCBhY3Rpb24uaWQsICdzZXR0aW5ncycsIGFjdGlvbi5zZXR0aW5ncyApO1xyXG5cdFx0XHRjbG9zZU1vZGFsKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlQWN0aW9uQ29uZGl0aW9uID0gaXRlbXMgPT4ge1xyXG5cdFx0XHR1cGRhdGVBY3Rpb24oIHByb2Nlc3NlZEFjdGlvbi5pZCwgJ2NvbmRpdGlvbnMnLCBpdGVtcyApO1xyXG5cdFx0XHRzZXRFZGl0UHJvY2Vzc0FjdGlvbiggZmFsc2UgKTtcclxuXHRcdH1cclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdFx0aWYgKCBlZGl0ZWRBY3Rpb24udHlwZSApIHtcclxuXHRcdFx0XHRzZXRFZGl0KCB0cnVlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sIFsgZWRpdGVkQWN0aW9uIF0gKTtcclxuXHJcblx0XHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdFx0aWYgKCBwcm9jZXNzZWRBY3Rpb24udHlwZSApIHtcclxuXHRcdFx0XHRzZXRFZGl0UHJvY2Vzc0FjdGlvbiggdHJ1ZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBbIHByb2Nlc3NlZEFjdGlvbiBdICk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1hY3Rpb25zJyB9XHJcblx0XHRcdFx0dGl0bGU9eyAnUG9zdCBTdWJtaXQgQWN0aW9ucycgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBhY3Rpb25zICYmIGFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gPENhcmRcclxuXHRcdFx0XHRcdFx0a2V5PXsgYWN0aW9uLmlkIH1cclxuXHRcdFx0XHRcdFx0c2l6ZT17ICdleHRyYVNtYWxsJyB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybS1hY3Rpb24nIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PENhcmRCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGFjdGlvbi50eXBlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBhY3Rpb25UeXBlcyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VHlwZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlQWN0aW9uKCBhY3Rpb24uaWQsICd0eXBlJywgbmV3VHlwZSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uPSdlZGl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyAnRWRpdCBBY3Rpb24nIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXRlZEFjdGlvbiggKCkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uYWN0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2Lz5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uPSdyYW5kb21pemUnXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17ICdDb25kaXRpb25zJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQcm9jZXNzZWRBY3Rpb24oICgpID0+ICggeyAuLi5hY3Rpb24gfSApICk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxEcm9wZG93bk1lbnVcclxuXHRcdFx0XHRcdFx0XHRcdGljb249eyAnZWxsaXBzaXMnIH1cclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgJ0VkaXQsIG1vdmUgb3IgZGVsZXRlJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRjb250cm9scz17IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnVXAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdhcnJvdy11cCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAwICE9PSBpbmRleCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4IC0gMSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnRG93bicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2Fycm93LWRvd24nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiBpbmRleCA9PT0gYWN0aW9ucy5sZW5ndGgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIGFjdGlvbnMubGVuZ3RoIC0gMSApICE9PSBpbmRleCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4ICsgMSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnRGVsZXRlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAndHJhc2gnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUFjdGlvbiggaW5kZXggKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF0gfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRCb2R5PlxyXG5cdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBY3Rpb25zKCBbXHJcblx0XHRcdFx0XHRcdFx0Li4uYWN0aW9ucyxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc2VuZF9lbWFpbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRpZDogZ2V0UmFuZG9tSUQoKSxcclxuXHRcdFx0XHRcdFx0XHRcdHNldHRpbmdzOiB7fSxcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgJysgTmV3IEFjdGlvbicgfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdHsgaXNFZGl0ICYmIDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgY2xvc2VNb2RhbCB9XHJcblx0XHRcdFx0XHR0aXRsZT17ICdFZGl0IEFjdGlvbicgfVxyXG5cdFx0XHRcdFx0b25VcGRhdGVDbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlQWN0aW9uU2V0dGluZ3MoIGVkaXRlZEFjdGlvbiApXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9uQ2FuY2VsQ2xpY2s9eyBjbG9zZU1vZGFsIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IENhbGxiYWNrICYmIDxDYWxsYmFja1xyXG5cdFx0XHRcdFx0XHRzZXR0aW5ncz17IGVkaXRlZEFjdGlvbi5zZXR0aW5ncyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkYXRhICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEVkaXRlZEFjdGlvbiggcHJldiA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnByZXYsXHJcblx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nczogZGF0YVxyXG5cdFx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+IH1cclxuXHRcdFx0XHQ8L0FjdGlvbk1vZGFsPiB9XHJcblx0XHRcdFx0eyBpc0VkaXRQcm9jZXNzQWN0aW9uICYmIDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHRcdHRpdGxlPXsgJ0VkaXQgQWN0aW9uIENvbmRpdGlvbnMnIH1cclxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gc2V0RWRpdFByb2Nlc3NBY3Rpb24oIGZhbHNlICkgfVxyXG5cdFx0XHRcdFx0b25DYW5jZWxDbGljaz17ICgpID0+IHNldEVkaXRQcm9jZXNzQWN0aW9uKCBmYWxzZSApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlcldpdGhTdGF0ZVxyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zPXsgcHJvY2Vzc2VkQWN0aW9uLmNvbmRpdGlvbnMgfVxyXG5cdFx0XHRcdFx0XHRcdG5ld0l0ZW09eyBuZXdJdGVtQ29uZGl0aW9uIH1cclxuXHRcdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XHJcblx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgdXBkYXRlQWN0aW9uQ29uZGl0aW9uIH1cclxuXHRcdFx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbD17IF9fKCAnQWRkIE5ldyBDb25kaXRpb24nICkgfVxyXG5cdFx0XHRcdFx0XHRcdGhlbHA9eyB7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogY29uZGl0aW9ucyA9PiBjb25kaXRpb25zLmxlbmd0aCA+IDEsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWxwU291cmNlOiB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuaGVscEZvclJlcGVhdGVycyxcclxuXHRcdFx0XHRcdFx0XHRcdGhlbHBLZXk6ICdjb25kaXRpb25hbF9hY3Rpb24nXHJcblx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7ICggeyBjdXJyZW50SXRlbSwgY2hhbmdlQ3VycmVudEl0ZW0gfSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBleGVjdXRlTGFiZWwgPSBfXyggJ1RvIGZ1bGZpbGwgdGhpcyBjb25kaXRpb24sIHRoZSByZXN1bHQgb2YgdGhlIGNoZWNrIG11c3QgYmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJztcclxuXHRcdFx0XHRcdFx0XHRcdGV4ZWN1dGVMYWJlbCArPSBjdXJyZW50SXRlbS5leGVjdXRlID8gJ1RSVUUnIDogJ0ZBTFNFJztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IGV4ZWN1dGVMYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGN1cnJlbnRJdGVtLmV4ZWN1dGUgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZXhlY3V0ZTogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiT3BlcmF0b3JcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLm9wZXJhdG9yIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgY29uZGl0aW9uT3BlcmF0b3JzIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IG9wZXJhdG9yOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGaWVsZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZmllbGQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGZpZWxkOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxGaWVsZFdpdGhQcmVzZXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmRlZmF1bHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBkZWZhdWx0OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4Y2x1ZGVTb3VyY2VzPXsgWyAncXVlcnlfdmFyJyBdIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0YXJlYScgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZhbHVlIHRvIENvbXBhcmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5kZWZhdWx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBkZWZhdWx0OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvPjtcclxuXHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT47XHJcblx0XHRcdFx0XHR9IH1cclxuXHJcblx0XHRcdFx0PC9BY3Rpb25Nb2RhbD4gfVxyXG5cdFx0XHQ8L1BsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsPlxyXG5cdFx0KVxyXG5cdH07XHJcblxyXG5cdHJlZ2lzdGVyUGx1Z2luKCAnamYtYWN0aW9ucy1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxBY3Rpb25zLFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnNNZXRhO1xyXG4iLCJmdW5jdGlvbiBBcmdzTWV0YSgpIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0VGV4dENvbnRyb2wsXHJcblx0XHRTZWxlY3RDb250cm9sLFxyXG5cdFx0VG9nZ2xlQ29udHJvbCxcclxuXHR9ID0gd3AuY29tcG9uZW50cztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXJQbHVnaW5cclxuXHR9ID0gd3AucGx1Z2lucztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHR9ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVNlbGVjdCxcclxuXHRcdHVzZURpc3BhdGNoXHJcblx0fSA9IHdwLmRhdGE7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVN0YXRlLFxyXG5cdFx0dXNlRWZmZWN0XHJcblx0fSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsQXJncyA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcclxuXHRcdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZWRpdFBvc3RcclxuXHRcdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRcdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlU3RhdGUoIEpTT04ucGFyc2UoIG1ldGEuX2pmX2FyZ3MgfHwgJ3t9JyApICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9hcmdzOiBKU09OLnN0cmluZ2lmeSggYXJncyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1hcmdzJyB9XHJcblx0XHRcdFx0dGl0bGU9eyAnRm9ybSBTZXR0aW5ncycgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGxhYmVsPXsgJ0ZpZWxkcyBMYXlvdXQnIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXJncy5maWVsZHNfbGF5b3V0IH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBbXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICcnLCBsYWJlbDogJy0tJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHZhbHVlOiAnY29sdW1uJywgbGFiZWw6ICdDb2x1bW4nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICdyb3cnLCBsYWJlbDogJ1JvdycgfVxyXG5cdFx0XHRcdFx0XSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRmaWVsZHNfbGF5b3V0OiBuZXdWYWxcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnUmVxdWlyZWQgTWFyaycgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBhcmdzLnJlcXVpcmVkX21hcmsgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRfbWFyazogbmV3VmFsXHJcblx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnU3VibWl0IFR5cGUnIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgYXJncy5zdWJtaXRfdHlwZSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgW1xyXG5cdFx0XHRcdFx0XHR7IHZhbHVlOiAnJywgbGFiZWw6ICctLScgfSxcclxuXHRcdFx0XHRcdFx0eyB2YWx1ZTogJ3JlbG9hZCcsIGxhYmVsOiAnUGFnZSBSZWxvYWQnIH0sXHJcblx0XHRcdFx0XHRcdHsgdmFsdWU6ICdhamF4JywgbGFiZWw6ICdBSkFYJyB9XHJcblx0XHRcdFx0XHRdIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdHN1Ym1pdF90eXBlOiBuZXdWYWxcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgJ2VuYWJsZV9wcm9ncmVzcycgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnRW5hYmxlIGZvcm0gcGFnZXMgcHJvZ3Jlc3MnIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhcmdzLmVuYWJsZV9wcm9ncmVzcyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoIHByZXYgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldixcclxuXHRcdFx0XHRcdFx0XHRlbmFibGVfcHJvZ3Jlc3M6IEJvb2xlYW4oIG5ld1ZhbCApXHJcblx0XHRcdFx0XHRcdH0gKSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLWFyZ3MtcGFuZWwnLCB7XHJcblx0XHRyZW5kZXI6IERvY3VtZW50U2V0dGluZ1BhbmVsQXJncyxcclxuXHRcdGljb246IG51bGwsXHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmdzTWV0YTtcclxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdFRleHRDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRyZWdpc3RlclBsdWdpblxyXG59ID0gd3AucGx1Z2lucztcclxuXHJcbmNvbnN0IHtcclxuXHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG59ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIENhcHRjaGEoKSB7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsQ2FwdGNoYSA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGVkaXRQb3N0XHJcblx0XHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0XHRjb25zdCBbYXJncywgc2V0QXJnc10gPSB1c2VTdGF0ZSggSlNPTi5wYXJzZSggbWV0YS5famZfcmVjYXB0Y2hhIHx8ICd7fScgKSApO1xyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cclxuXHRcdFx0ZWRpdFBvc3QoIHtcclxuXHRcdFx0XHRtZXRhOiAoIHtcclxuXHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRfamZfcmVjYXB0Y2hhOiBKU09OLnN0cmluZ2lmeSggYXJncyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR9ICk7XHJcblx0XHRjb25zdCBkYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLnJlY2FwdGNoYUxhYmVscztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHRcdFx0XHRuYW1lPXsgJ2pmLWNhcHRjaGEnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdDYXB0Y2hhIFNldHRpbmdzJyB9XHJcblx0XHRcdFx0a2V5PXsgJ2pmLWNhcHRjaGEtcGFuZWwnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZW5hYmxlZCcgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBkYXRhLmVuYWJsZWQgfVxyXG5cdFx0XHRcdFx0Y2hlY2tlZD17IGFyZ3MuZW5hYmxlZCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBCb29sZWFuKCBuZXdWYWwgKVxyXG5cdFx0XHRcdFx0XHR9ICkgKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyBhcmdzLmVuYWJsZWQgJiYgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdzaXRlX2tleScgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEua2V5IH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhcmdzLmtleSB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdGtleTogbmV3VmFsdWVcclxuXHRcdFx0XHRcdFx0fSApICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyAnc2VjcmV0X2tleScgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IGRhdGEuc2VjcmV0IH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhcmdzLnNlY3JldCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xyXG5cdFx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxyXG5cdFx0XHRcdFx0XHRcdHNlY3JldDogbmV3VmFsdWVcclxuXHRcdFx0XHRcdFx0fSApICkgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxzcGFuPnsgJ1JlZ2lzdGVyIHJlQ0FQVENIQSB2MyBrZXlzICcgfVxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYWRtaW4vY3JlYXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblx0XHRcdDwvUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw+XHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cmVnaXN0ZXJQbHVnaW4oICdqZi1jYXB0Y2hhLXBhbmVsJywge1xyXG5cdFx0cmVuZGVyOiBEb2N1bWVudFNldHRpbmdQYW5lbENhcHRjaGEsXHJcblx0XHRpY29uOiBudWxsLFxyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FwdGNoYTtcclxuIiwiaW1wb3J0IFRvb2xzIGZyb20gXCIuLi9oZWxwZXJzL3Rvb2xzXCI7XHJcbmltcG9ydCBBY3Rpb25Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbi1tb2RhbFwiO1xyXG5pbXBvcnQgR2F0ZXdheXNFZGl0b3IgZnJvbSBcIi4uL2dhdGV3YXlzL2dhdGV3YXlzLWVkaXRvclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0VGV4dENvbnRyb2wsXHJcblx0Q2hlY2tib3hDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0UmFkaW9Db250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRNb2RhbCxcclxuXHRUZXh0LFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRyZWdpc3RlclBsdWdpblxyXG59ID0gd3AucGx1Z2lucztcclxuXHJcbmNvbnN0IHtcclxuXHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG59ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5jb25zdCB7XHJcblx0dXNlU2VsZWN0LFxyXG5cdHVzZURpc3BhdGNoXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZUVmZmVjdFxyXG59ID0gd3AuZWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIEdhdGV3YXlzKCkge1xyXG5cclxuXHRpZiAoICEgd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzLmFsbG93ZWQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBnYXRld2F5c0RhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsR2F0ZXdheXMgPSAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XHJcblx0XHRcdHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGVkaXRQb3N0XHJcblx0XHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0XHRjb25zdCBnYXRld2F5c1Byb3BzID0ge1xyXG5cdFx0XHRhY3RpdmVBY3Rpb25zOiBKU09OLnBhcnNlKCBtZXRhLl9qZl9hY3Rpb25zICksXHJcblx0XHRcdGdhdGV3YXlzQXJnczogSlNPTi5wYXJzZSggbWV0YS5famZfZ2F0ZXdheXMgfHwgJ3t9JyApLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBbZ2F0ZXdheSwgc2V0R2F0ZXdheV0gPSB1c2VTdGF0ZSggZ2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MuZ2F0ZXdheSApO1xyXG5cclxuXHRcdGNvbnN0IFtpc0VkaXQsIHNldEVkaXRdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdFx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuXHRcdFx0c2V0RWRpdCggZmFsc2UgKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZ2V0R2F0ZXdheUxhYmVsID0gKCB0eXBlICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKCBnYXRld2F5c0RhdGEubGlzdC5maW5kKCBlbCA9PiBlbC52YWx1ZSA9PT0gdHlwZSApLmxhYmVsICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNhdmVBcmdzID0gbmV3QXJncyA9PiB7XHJcblx0XHRcdGVkaXRQb3N0KCB7XHJcblx0XHRcdFx0bWV0YTogKCB7XHJcblx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0X2pmX2dhdGV3YXlzOiBKU09OLnN0cmluZ2lmeSggbmV3QXJncyApXHJcblx0XHRcdFx0fSApXHJcblx0XHRcdH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2F2ZUdhdGV3YXkgPSB0eXBlID0+IHtcclxuXHRcdFx0Z2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MuZ2F0ZXdheSA9IHR5cGU7XHJcblxyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9nYXRld2F5czogSlNPTi5zdHJpbmdpZnkoIGdhdGV3YXlzUHJvcHMuZ2F0ZXdheXNBcmdzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlzc2V0QWN0aW9uVHlwZSA9IHR5cGUgPT4ge1xyXG5cdFx0XHRyZXR1cm4gQm9vbGVhbiggZ2F0ZXdheXNQcm9wcy5hY3RpdmVBY3Rpb25zLmZpbmQoIGFjdGlvbiA9PiB0eXBlID09PSBhY3Rpb24udHlwZSApICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGlzRGlzYWJsZWQgPSAhIGlzc2V0QWN0aW9uVHlwZSggJ2luc2VydF9wb3N0JyApO1xyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0XHRzYXZlR2F0ZXdheSggZ2F0ZXdheSApO1xyXG5cdFx0fSwgW2dhdGV3YXldICk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1nYXRld2F5cycgfVxyXG5cdFx0XHRcdHRpdGxlPXsgJ0dhdGV3YXlzIFNldHRpbmdzJyB9XHJcblx0XHRcdFx0a2V5PXsgJ2pmLWdhdGV3YXlzLXBhbmVsJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8UmFkaW9Db250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZ2F0ZXdheXNfcmFkaW9fY29udHJvbCcgfVxyXG5cdFx0XHRcdFx0c2VsZWN0ZWQ9eyBnYXRld2F5IH1cclxuXHRcdFx0XHRcdG9wdGlvbnM9eyBbXHJcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdOb25lJywgdmFsdWU6ICdub25lJyB9LFxyXG5cdFx0XHRcdFx0XHQuLi5nYXRld2F5c0RhdGEubGlzdFxyXG5cdFx0XHRcdFx0XSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHNldEdhdGV3YXkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyAoIGdhdGV3YXkgJiYgJ25vbmUnICE9PSBnYXRld2F5ICkgJiYgPD5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldEVkaXQoIHRydWUgKSB9XHJcblx0XHRcdFx0XHRcdGljb249eyAnYWRtaW4tdG9vbHMnIH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAnMWVtIDAnXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzRGlzYWJsZWQgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7IF9fKCAnRWRpdCcgKSB9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdHsgaXNEaXNhYmxlZCAmJiA8cD57IF9fKCAnUGxlYXNlIGFkZCBcXGBJbnNlcnQvVXBkYXRlIFBvc3RcXGAgYWN0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvcD4gfVxyXG5cdFx0XHRcdDwvPiB9XHJcblx0XHRcdFx0eyBpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdFx0PEFjdGlvbk1vZGFsXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZXM9eyBbJ3dpZHRoLTYwJ10gfVxyXG5cdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfVxyXG5cdFx0XHRcdFx0XHR0aXRsZT17IGBFZGl0ICR7IGdldEdhdGV3YXlMYWJlbCggZ2F0ZXdheSApIH0gU2V0dGluZ3NgIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8PlxyXG5cdFx0XHRcdFx0XHRcdDxHYXRld2F5c0VkaXRvclxyXG5cdFx0XHRcdFx0XHRcdFx0eyAuLi5nYXRld2F5c1Byb3BzIH1cclxuXHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgc2F2ZUFyZ3MgfVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvPiB9XHJcblx0XHRcdFx0XHQ8L0FjdGlvbk1vZGFsPiApIH1cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLWdhdGV3YXlzLXBhbmVsJywge1xyXG5cdFx0cmVuZGVyOiBEb2N1bWVudFNldHRpbmdQYW5lbEdhdGV3YXlzLFxyXG5cdFx0aWNvbjogbnVsbCxcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhdGV3YXlzO1xyXG4iLCJpbXBvcnQgVG9vbHMgZnJvbSBcIi4uL2hlbHBlcnMvdG9vbHNcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VzKCkge1xyXG5cdGNvbnN0IHtcclxuXHRcdFRvZ2dsZUNvbnRyb2wsXHJcblx0XHRUZXh0Q29udHJvbFxyXG5cdH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuXHRjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlclBsdWdpblxyXG5cdH0gPSB3cC5wbHVnaW5zO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdH0gPSB3cC5lZGl0UG9zdDtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU2VsZWN0LFxyXG5cdFx0dXNlRGlzcGF0Y2hcclxuXHR9ID0gd3AuZGF0YTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0dXNlU3RhdGUsXHJcblx0XHR1c2VFZmZlY3RcclxuXHR9ID0gd3AuZWxlbWVudDtcclxuXHJcblx0Y29uc3QgRG9jdW1lbnRTZXR0aW5nUGFuZWxNZXNzYWdlcyA9ICgpID0+IHtcclxuXHJcblx0XHRjb25zdCBtZXRhID0gd3AuZGF0YS5zZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKSB8fCB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdGVkaXRQb3N0XHJcblx0XHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcclxuXHJcblx0XHRjb25zdCBnZXREZWZhdWx0TWVzc2FnZXNWYWx1ZXMgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGRlZmF1bHRzID0ge307XHJcblx0XHRcdE9iamVjdC5lbnRyaWVzKCBKZXRGb3JtRWRpdG9yRGF0YS5tZXNzYWdlc0RlZmF1bHQgKS5mb3JFYWNoKCAoIFsgdHlwZSwgZGF0YSBdICkgPT4ge1xyXG5cdFx0XHRcdGRlZmF1bHRzWyB0eXBlIF0gPSBkYXRhLnZhbHVlO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdHM7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZSggKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBtZXRhTWVzc2FnZXMgPSBKU09OLnBhcnNlKCBtZXRhLl9qZl9tZXNzYWdlcyB8fCAne30nICk7XHJcblx0XHRcdHJldHVybiBUb29scy5pc0VtcHR5T2JqZWN0KCBtZXRhTWVzc2FnZXMgKSA/IGdldERlZmF1bHRNZXNzYWdlc1ZhbHVlcygpIDogbWV0YU1lc3NhZ2VzO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9tZXNzYWdlczogSlNPTi5zdHJpbmdpZnkoIG1lc3NhZ2VzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoIHR5cGUsIHZhbHVlICkgPT4ge1xyXG5cdFx0XHRzZXRNZXNzYWdlcyggcHJldiA9PiAoIHsgLi4ucHJldiwgWyB0eXBlIF06IHZhbHVlIH0gKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbFxyXG5cdFx0XHRcdG5hbWU9eyAnamYtbWVzc2FnZXMnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdHZW5lcmFsIE1lc3NhZ2VzIFNldHRpbmdzJyB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IE9iamVjdC5lbnRyaWVzKCBtZXNzYWdlcyApLm1hcCggKCBbdHlwZSwgdGV4dF0sIGlkICkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIEpldEZvcm1FZGl0b3JEYXRhLm1lc3NhZ2VzRGVmYXVsdFsgdHlwZSBdICYmIDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRrZXk9eyB0eXBlICsgaWQgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IEpldEZvcm1FZGl0b3JEYXRhLm1lc3NhZ2VzRGVmYXVsdFsgdHlwZSBdLmxhYmVsIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyB0ZXh0IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZU1lc3NhZ2UoIHR5cGUsIG5ld1ZhbHVlICkgfVxyXG5cdFx0XHRcdFx0Lz47XHJcblx0XHRcdFx0fSApIH1cclxuXHJcblx0XHRcdDwvUGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWw+XHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cmVnaXN0ZXJQbHVnaW4oICdqZi1tZXNzYWdlcy1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxNZXNzYWdlcyxcclxuXHRcdGljb246IG51bGwsXHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlczsiLCJpbXBvcnQgVG9vbHMgZnJvbSAnLi4vaGVscGVycy90b29scyc7XHJcbmltcG9ydCBHZW5lcmFsUHJlc2V0IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXNldHMvZ2VuZXJhbC1wcmVzZXRcIjtcclxuaW1wb3J0IHsgZ2V0QXZhaWxhYmxlRmllbGRzIH0gZnJvbSBcIi4uL2hlbHBlcnMvYmxvY2tzLWhlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gUHJlc2V0TWV0YSgpIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0VG9nZ2xlQ29udHJvbCxcclxuXHR9ID0gd3AuY29tcG9uZW50cztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXJQbHVnaW5cclxuXHR9ID0gd3AucGx1Z2lucztcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcclxuXHR9ID0gd3AuZWRpdFBvc3Q7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVNlbGVjdCxcclxuXHRcdHVzZURpc3BhdGNoXHJcblx0fSA9IHdwLmRhdGE7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHVzZVN0YXRlLFxyXG5cdFx0dXNlRWZmZWN0XHJcblx0fSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0IERvY3VtZW50U2V0dGluZ1BhbmVsUHJlc2V0ID0gKCkgPT4ge1xyXG5cclxuXHRcdGNvbnN0IG1ldGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xyXG5cclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZWRpdFBvc3RcclxuXHRcdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xyXG5cclxuXHRcdGNvbnN0IFthcmdzLCBzZXRBcmdzXSA9IHVzZVN0YXRlKCBKU09OLnBhcnNlKCBtZXRhLl9qZl9wcmVzZXQgfHwgJ3t9JyApICk7XHJcblxyXG5cdFx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRlZGl0UG9zdCgge1xyXG5cdFx0XHRcdG1ldGE6ICgge1xyXG5cdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdF9qZl9wcmVzZXQ6IEpTT04uc3RyaW5naWZ5KCBhcmdzIClcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25zdCBmb3JtRmllbGRzID0gZ2V0QXZhaWxhYmxlRmllbGRzKCk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXHJcblx0XHRcdFx0bmFtZT17ICdqZi1wcmVzZXQnIH1cclxuXHRcdFx0XHR0aXRsZT17ICdQcmVzZXQgU2V0dGluZ3MnIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyAnZW5hYmxlX3ByZXNldCcgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyAnRW5hYmxlJyB9XHJcblx0XHRcdFx0XHRjaGVja2VkPXsgYXJncy5lbmFibGVkIH1cclxuXHRcdFx0XHRcdGhlbHA9eyAnQ2hlY2sgdGhpcyB0byBlbmFibGUgZ2xvYmFsIGZvcm0gcHJlc2V0JyB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcclxuXHRcdFx0XHRcdFx0XHQuLi5wcmV2QXJncyxcclxuXHRcdFx0XHRcdFx0XHRlbmFibGVkOiBuZXdWYWxcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHsgYXJncy5lbmFibGVkICYmIDxHZW5lcmFsUHJlc2V0XHJcblx0XHRcdFx0XHR2YWx1ZT17IGFyZ3MgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XHJcblx0XHRcdFx0XHRcdFx0Li4ucHJldkFyZ3MsXHJcblx0XHRcdFx0XHRcdFx0Li4ubmV3VmFsLFxyXG5cdFx0XHRcdFx0XHRcdGVuYWJsZWQ6IHByZXZBcmdzLmVuYWJsZWRcclxuXHRcdFx0XHRcdFx0fSApICk7XHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdGF2YWlsYWJsZUZpZWxkcz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdC8+IH1cclxuXHRcdFx0PC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRyZWdpc3RlclBsdWdpbiggJ2pmLXByZXNldC1wYW5lbCcsIHtcclxuXHRcdHJlbmRlcjogRG9jdW1lbnRTZXR0aW5nUGFuZWxQcmVzZXQsXHJcblx0XHRpY29uOiBudWxsLFxyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlc2V0TWV0YTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFWQTtBQWFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBYUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFRQTs7OztBQWxHQTtBQUNBO0FBb0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTs7O0FBR0E7QUFFQTs7OztBQUdBO0FBRUE7Ozs7QUFNQTtBQUZBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUdBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFiQTtBQWdCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFFQTtBQUNBOzs7O0FBbEpBO0FBQ0E7QUFtSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFZQTs7Ozs7Ozs7Ozs7O0FBWkE7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUpBO0FBY0E7Ozs7QUE5RUE7QUFDQTtBQWdGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFjQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVlBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUdBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBVUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7OztBQUdBO0FBTUE7QUFIQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhBO0FBWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUF2QkE7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVZBO0FBQ0E7QUFhQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVhBO0FBckJBO0FBcUNBO0FBRUE7QUFFQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBdkJBO0FBQ0E7QUFtQ0E7QUFDQTtBQWhMQTtBQW1MQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE1BO0FBZ0JBO0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFDQTtBQUdBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQXJCQTtBQXNCQTtBQUFBO0FBdEJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBV0E7QUFEQTtBQUlBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBakVBO0FBQ0E7QUE1SEE7QUFBQTtBQUFBO0FBNE1BO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclJBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVNBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWxEQTtBQUFBO0FBQUE7QUFxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTNEQTtBQUFBO0FBQUE7QUE4REE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUEzRUE7QUFBQTtBQUFBO0FBOEVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFLQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBSkE7QUFvQkE7QUFDQTtBQTFLQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUlBOzs7O0FBckVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBRUE7Ozs7QUFRQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQURBO0FBR0E7QUFBQTtBQXVCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQ0E7QUFuQkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFVQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQW1DQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBS0E7QUFDQTtBQTFIQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFZQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFXQTtBQUVBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQVdBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUEvRkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBVEE7QUFZQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXJCQTtBQXlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBbkVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBU0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWhDQTtBQUFBO0FBQUE7QUFrQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBL0NBO0FBQUE7QUFBQTtBQWtEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQUhBO0FBY0E7QUFDQTtBQW5KQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFTQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUE2QkE7QUFJQTtBQWpDQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQXZGQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0FBNUZBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBSEE7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBUUE7QUFKQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXZCQTtBQUFBO0FBQUE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFsQ0E7QUFBQTtBQUFBO0FBb0NBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFZQTtBQUNBO0FBckZBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQVFBO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFOQTtBQVNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQXNCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFhQTtBQUNBO0FBN0VBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFhQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBV0E7QUFJQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFOQTtBQVdBO0FBSUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFOQTtBQVdBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBWEE7QUFjQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBYUE7Ozs7Ozs7Ozs7OztBQ3pSQTtBQUFBO0FBQUE7QUFHQTtBQU1BO0FBRkE7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUtBO0FBRkE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBS0E7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBSUE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBOUJBO0FBaUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQTBDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBY0E7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFNQTtBQUZBO0FBQ0E7QUFNQTtBQUZBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXhCQTtBQW9DQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFYQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBU0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBeUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQWJBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFLQTtBQUZBO0FBQ0E7QUFJQTtBQUlBO0FBTUE7QUFGQTtBQUNBO0FBTUE7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFKQTtBQVVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBR0E7QUFhQTtBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQU1BO0FBRkE7QUFDQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBUEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF5QkE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF1QkE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU9BO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9