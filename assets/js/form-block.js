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
/******/ 	return __webpack_require__(__webpack_require__.s = "./editor/form-block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./editor/blocks/form-block/block.json":
/*!*********************************************!*\
  !*** ./editor/blocks/form-block/block.json ***!
  \*********************************************/
/*! exports provided: apiVersion, name, keywords, textdomain, supports, category, icon, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"jet-forms/form-block\",\"keywords\":[\"jetformbuilder\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"html\":false,\"className\":true},\"category\":\"layout\",\"icon\":\"<svg width=\\\"64\\\" height=\\\"64\\\" viewBox=\\\"0 0 64 64\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><rect width=\\\"42\\\" height=\\\"2\\\" rx=\\\"1\\\" fill=\\\"#162B40\\\"/><path d=\\\"M0 5C0 4.44772 0.447715 4 1 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H1C0.447715 6 0 5.55228 0 5Z\\\"fill=\\\"#162B40\\\"/><rect x=\\\"1\\\" y=\\\"2\\\" width=\\\"62\\\" height=\\\"61\\\" rx=\\\"3\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"7\\\" y=\\\"19\\\" width=\\\"50\\\" height=\\\"11\\\" rx=\\\"2\\\" fill=\\\"#6F8CFF\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"7\\\" y=\\\"35\\\" width=\\\"50\\\" height=\\\"11\\\" rx=\\\"2\\\" fill=\\\"#4AF3BA\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/><rect x=\\\"39\\\" y=\\\"51\\\" width=\\\"18\\\" height=\\\"7\\\" rx=\\\"2\\\" fill=\\\"white\\\" stroke=\\\"#162B40\\\" stroke-width=\\\"2\\\"/></svg>\",\"attributes\":{\"form_id\":{\"type\":\"number\",\"default\":0},\"submit_type\":{\"type\":\"string\",\"default\":\"reload\"},\"required_mark\":{\"type\":\"string\",\"default\":\"*\"},\"fields_layout\":{\"type\":\"string\",\"default\":\"column\"},\"enable_progress\":{\"type\":\"boolean\",\"default\":false}}}");

/***/ }),

/***/ "./editor/blocks/form-block/options.js":
/*!*********************************************!*\
  !*** ./editor/blocks/form-block/options.js ***!
  \*********************************************/
/*! exports provided: submitTypes, fieldsLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitTypes", function() { return submitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldsLayout", function() { return fieldsLayout; });
var submitTypes = [{
  value: 'reload',
  label: 'Page Reload'
}, {
  value: 'ajax',
  label: 'AJAX'
}];
var fieldsLayout = [{
  value: 'column',
  label: 'Column'
}, {
  value: 'row',
  label: 'Row'
}];


/***/ }),

/***/ "./editor/form-block.js":
/*!******************************!*\
  !*** ./editor/form-block.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/form-block/block.json */ "./editor/blocks/form-block/block.json");
var _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./blocks/form-block/block.json */ "./editor/blocks/form-block/block.json", 1);
/* harmony import */ var _blocks_form_block_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/form-block/options */ "./editor/blocks/form-block/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp = wp,
    ServerSideRender = _wp.serverSideRender;

var uniqKey = function uniqKey(suffix) {
  return "".concat(_blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name, "/").concat(suffix);
};

function FormEdit(_ref2) {
  var attributes = _ref2.attributes,
      setAttributes = _ref2.setAttributes,
      isSelected = _ref2.isSelected;
  var localize = window.JetFormData;
  var blockProps = useBlockProps();
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(PanelBody, {
    title: __('Form Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(SelectControl, {
    key: "form_id",
    label: __('Choose Form'),
    labelposition: "top",
    value: attributes.form_id,
    onChange: function onChange(newValue) {
      setAttributes({
        form_id: Number(newValue)
      });
    },
    options: localize.forms_list
  }), Boolean(attributes.form_id) && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: 'Fields Layout',
    value: attributes.fields_layout,
    options: _blocks_form_block_options__WEBPACK_IMPORTED_MODULE_1__["fieldsLayout"],
    onChange: function onChange(newValue) {
      setAttributes({
        fields_layout: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    label: 'Required Mark',
    value: attributes.required_mark,
    onChange: function onChange(newValue) {
      setAttributes({
        required_mark: newValue
      });
    }
  }), wp.element.createElement(SelectControl, {
    label: 'Submit Type',
    value: attributes.submit_type,
    options: _blocks_form_block_options__WEBPACK_IMPORTED_MODULE_1__["submitTypes"],
    onChange: function onChange(newValue) {
      setAttributes({
        submit_type: newValue
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'enable_progress',
    label: __('Enable form pages progress'),
    checked: attributes.enable_progress,
    onChange: function onChange(newVal) {
      setAttributes({
        enable_progress: Boolean(newVal)
      });
    }
  })))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(ServerSideRender, {
    block: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name,
    attributes: attributes,
    httpMethod: 'POST'
  }))];
}

registerBlockType(_blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name, _objectSpread(_objectSpread({}, _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__), {}, {
  title: __('JetForm'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.icon
    }
  }),
  attributes: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  edit: FormEdit
}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ibG9jay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tYmxvY2svb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2VkaXRvci9mb3JtLWJsb2NrLmpzXCIpO1xuIiwiY29uc3Qgc3VibWl0VHlwZXMgPSBbXG5cdHtcblx0XHR2YWx1ZTogJ3JlbG9hZCcsXG5cdFx0bGFiZWw6ICdQYWdlIFJlbG9hZCdcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnYWpheCcsXG5cdFx0bGFiZWw6ICdBSkFYJ1xuXHR9XG5dXG5cbmNvbnN0IGZpZWxkc0xheW91dCA9IFtcblx0e1xuXHRcdHZhbHVlOiAnY29sdW1uJyxcblx0XHRsYWJlbDogJ0NvbHVtbidcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAncm93Jyxcblx0XHRsYWJlbDogJ1Jvdydcblx0fVxuXTtcblxuZXhwb3J0IHtcblx0c3VibWl0VHlwZXMsXG5cdGZpZWxkc0xheW91dFxufTsiLCJpbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2tzL2Zvcm0tYmxvY2svYmxvY2suanNvblwiXG5pbXBvcnQge1xuXHRmaWVsZHNMYXlvdXQsXG5cdHN1Ym1pdFR5cGVzXG59IGZyb20gXCIuL2Jsb2Nrcy9mb3JtLWJsb2NrL29wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHNcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdHNlcnZlclNpZGVSZW5kZXI6IFNlcnZlclNpZGVSZW5kZXJcbn0gPSB3cDtcblxuY29uc3QgdW5pcUtleSA9IHN1ZmZpeCA9PiBgJHsgbWV0YWRhdGEubmFtZSB9LyR7IHN1ZmZpeCB9YDtcblxuZnVuY3Rpb24gRm9ybUVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXG5cdGNvbnN0IGxvY2FsaXplID0gd2luZG93LkpldEZvcm1EYXRhO1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdHJldHVybiBbXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRm9ybSBTZXR0aW5ncycgKSB9XG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nZm9ybV9pZCdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2hvb3NlIEZvcm0nICkgfVxuXHRcdFx0XHRcdGxhYmVscG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZm9ybV9pZCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZvcm1faWQ6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IGxvY2FsaXplLmZvcm1zX2xpc3QgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IEJvb2xlYW4oIGF0dHJpYnV0ZXMuZm9ybV9pZCApICYmIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyAnRmllbGRzIExheW91dCcgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkc19sYXlvdXQgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGZpZWxkc0xheW91dCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZHNfbGF5b3V0OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyAnUmVxdWlyZWQgTWFyaycgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnJlcXVpcmVkX21hcmsgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcmVxdWlyZWRfbWFyazogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyAnU3VibWl0IFR5cGUnIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJtaXRfdHlwZSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgc3VibWl0VHlwZXMgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc3VibWl0X3R5cGU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17ICdlbmFibGVfcHJvZ3Jlc3MnIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgZm9ybSBwYWdlcyBwcm9ncmVzcycgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5lbmFibGVfcHJvZ3Jlc3MgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGVuYWJsZV9wcm9ncmVzczogQm9vbGVhbiggbmV3VmFsICkgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8U2VydmVyU2lkZVJlbmRlclxuXHRcdFx0XHRibG9jaz17IG1ldGFkYXRhLm5hbWUgfVxuXHRcdFx0XHRhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG5cdFx0XHRcdGh0dHBNZXRob2Q9eyAnUE9TVCcgfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0XTtcbn1cblxucmVnaXN0ZXJCbG9ja1R5cGUoXG5cdG1ldGFkYXRhLm5hbWUsXG5cdHtcblx0XHQuLi5tZXRhZGF0YSxcblx0XHR0aXRsZTogX18oICdKZXRGb3JtJyApLFxuXHRcdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IG1ldGFkYXRhLmljb24gfSB9Pjwvc3Bhbj4sXG5cdFx0YXR0cmlidXRlczogbWV0YWRhdGEuYXR0cmlidXRlcyxcblx0XHRlZGl0OiBGb3JtRWRpdCxcblx0fVxuKTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFPQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTs7OztBIiwic291cmNlUm9vdCI6IiJ9