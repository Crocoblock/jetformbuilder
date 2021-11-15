/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/blocks/form-block/options.js":
/*!*********************************************!*\
  !*** ./editor/blocks/form-block/options.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitTypes": () => (/* binding */ submitTypes),
/* harmony export */   "fieldsLayout": () => (/* binding */ fieldsLayout)
/* harmony export */ });
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

/***/ "../blocks-src/form-block/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/form-block/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":"2","name":"jet-forms/form-block","title":"JetForm","keywords":["jetform","form","builder","crocoblock"],"textdomain":"jet-form-builder","supports":{"html":false,"className":true},"editorScript":"","editorStyle":"","category":"layout","icon":"feedback","attributes":{"form_id":{"type":"number","default":0},"submit_type":{"type":"string","default":"reload"},"required_mark":{"type":"string","default":"*"},"fields_layout":{"type":"string","default":"column"},"enable_progress":{"type":"boolean","default":false}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./editor/form-block.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/form-block/block.json */ "../blocks-src/form-block/block.json");
/* harmony import */ var _blocks_form_block_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/form-block/options */ "./editor/blocks/form-block/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
    options: _blocks_form_block_options__WEBPACK_IMPORTED_MODULE_1__.fieldsLayout,
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
    options: _blocks_form_block_options__WEBPACK_IMPORTED_MODULE_1__.submitTypes,
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
  icon: wp.element.createElement("svg", {
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement("rect", {
    width: "42",
    height: "2",
    rx: "1",
    fill: "#162B40"
  }), wp.element.createElement("path", {
    d: "M0 5C0 4.44772 0.447715 4 1 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H1C0.447715 6 0 5.55228 0 5Z",
    fill: "#162B40"
  }), wp.element.createElement("rect", {
    x: "1",
    y: "2",
    width: "62",
    height: "61",
    rx: "3",
    fill: "white",
    stroke: "#162B40",
    "stroke-width": "2"
  }), wp.element.createElement("rect", {
    x: "7",
    y: "19",
    width: "50",
    height: "11",
    rx: "2",
    fill: "#6F8CFF",
    stroke: "#162B40",
    "stroke-width": "2"
  }), wp.element.createElement("rect", {
    x: "7",
    y: "35",
    width: "50",
    height: "11",
    rx: "2",
    fill: "#4AF3BA",
    stroke: "#162B40",
    "stroke-width": "2"
  }), wp.element.createElement("rect", {
    x: "39",
    y: "51",
    width: "18",
    height: "7",
    rx: "2",
    fill: "white",
    stroke: "#162B40",
    "stroke-width": "2"
  })),
  attributes: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  edit: FormEdit
}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ibG9jay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUtBO0FBSUE7O0FBRUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBOztBQUlBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BOztBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tYmxvY2svb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1ibG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdWJtaXRUeXBlcyA9IFtcclxuXHR7XHJcblx0XHR2YWx1ZTogJycsXHJcblx0XHRsYWJlbDogJy0tJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncmVsb2FkJyxcclxuXHRcdGxhYmVsOiAnUGFnZSBSZWxvYWQnXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2FqYXgnLFxyXG5cdFx0bGFiZWw6ICdBSkFYJ1xyXG5cdH1cclxuXVxyXG5cclxuY29uc3QgZmllbGRzTGF5b3V0ID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnJyxcclxuXHRcdGxhYmVsOiAnLS0nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdjb2x1bW4nLFxyXG5cdFx0bGFiZWw6ICdDb2x1bW4nXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ3JvdycsXHJcblx0XHRsYWJlbDogJ1JvdydcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQge1xyXG5cdHN1Ym1pdFR5cGVzLFxyXG5cdGZpZWxkc0xheW91dFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL2Zvcm0tYmxvY2svYmxvY2suanNvblwiXHJcbmltcG9ydCB7XHJcblx0ZmllbGRzTGF5b3V0LFxyXG5cdHN1Ym1pdFR5cGVzXHJcbn0gZnJvbSBcIi4vYmxvY2tzL2Zvcm0tYmxvY2svb3B0aW9uc1wiO1xyXG5cclxuY29uc3Qge1xyXG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxyXG59ID0gd3AuYmxvY2tzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRJbnNwZWN0b3JDb250cm9scyxcclxuXHR1c2VCbG9ja1Byb3BzXHJcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdFBhbmVsQm9keSxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdFRleHRDb250cm9sLFxyXG5cdFRvZ2dsZUNvbnRyb2xcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0c2VydmVyU2lkZVJlbmRlcjogU2VydmVyU2lkZVJlbmRlclxyXG59ID0gd3A7XHJcblxyXG5jb25zdCB1bmlxS2V5ID0gc3VmZml4ID0+IGAkeyBtZXRhZGF0YS5uYW1lIH0vJHsgc3VmZml4IH1gO1xyXG5cclxuZnVuY3Rpb24gRm9ybUVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xyXG5cclxuXHRjb25zdCBsb2NhbGl6ZSA9IHdpbmRvdy5KZXRGb3JtRGF0YTtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcclxuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PFBhbmVsQm9keVxyXG5cdFx0XHRcdHRpdGxlPXsgX18oICdGb3JtIFNldHRpbmdzJyApIH1cclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUGFuZWxCb2R5JyApIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9J2Zvcm1faWQnXHJcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2hvb3NlIEZvcm0nICkgfVxyXG5cdFx0XHRcdFx0bGFiZWxwb3NpdGlvbj0ndG9wJ1xyXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZvcm1faWQgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZm9ybV9pZDogTnVtYmVyKCBuZXdWYWx1ZSApIH0gKTtcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IGxvY2FsaXplLmZvcm1zX2xpc3QgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0eyBCb29sZWFuKCBhdHRyaWJ1dGVzLmZvcm1faWQgKSAmJiA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17ICdGaWVsZHMgTGF5b3V0JyB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZHNfbGF5b3V0IH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGZpZWxkc0xheW91dCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRzX2xheW91dDogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyAnUmVxdWlyZWQgTWFyaycgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucmVxdWlyZWRfbWFyayB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcmVxdWlyZWRfbWFyazogbmV3VmFsdWUgfSApO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17ICdTdWJtaXQgVHlwZScgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuc3VibWl0X3R5cGUgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgc3VibWl0VHlwZXMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN1Ym1pdF90eXBlOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdGtleT17ICdlbmFibGVfcHJvZ3Jlc3MnIH1cclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBmb3JtIHBhZ2VzIHByb2dyZXNzJyApIH1cclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuZW5hYmxlX3Byb2dyZXNzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlX3Byb2dyZXNzOiBCb29sZWFuKCBuZXdWYWwgKSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XHJcblx0XHRcdDwvUGFuZWxCb2R5PlxyXG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXHJcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0PFNlcnZlclNpZGVSZW5kZXJcclxuXHRcdFx0XHRibG9jaz17IG1ldGFkYXRhLm5hbWUgfVxyXG5cdFx0XHRcdGF0dHJpYnV0ZXM9eyBhdHRyaWJ1dGVzIH1cclxuXHRcdFx0XHRodHRwTWV0aG9kPXsgJ1BPU1QnIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdF07XHJcbn1cclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKFxyXG5cdG1ldGFkYXRhLm5hbWUsXHJcblx0e1xyXG5cdFx0Li4ubWV0YWRhdGEsXHJcblx0XHR0aXRsZTogX18oICdKZXRGb3JtJyApLFxyXG5cdFx0aWNvbjogPHN2ZyB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3Qgd2lkdGg9XCI0MlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiBmaWxsPVwiIzE2MkI0MFwiLz48cGF0aCBkPVwiTTAgNUMwIDQuNDQ3NzIgMC40NDc3MTUgNCAxIDRIMjBDMjAuNTUyMyA0IDIxIDQuNDQ3NzIgMjEgNUMyMSA1LjU1MjI4IDIwLjU1MjMgNiAyMCA2SDFDMC40NDc3MTUgNiAwIDUuNTUyMjggMCA1WlwiZmlsbD1cIiMxNjJCNDBcIi8+PHJlY3QgeD1cIjFcIiB5PVwiMlwiIHdpZHRoPVwiNjJcIiBoZWlnaHQ9XCI2MVwiIHJ4PVwiM1wiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMxNjJCNDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPjxyZWN0IHg9XCI3XCIgeT1cIjE5XCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjExXCIgcng9XCIyXCIgZmlsbD1cIiM2RjhDRkZcIiBzdHJva2U9XCIjMTYyQjQwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz48cmVjdCB4PVwiN1wiIHk9XCIzNVwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIxMVwiIHJ4PVwiMlwiIGZpbGw9XCIjNEFGM0JBXCIgc3Ryb2tlPVwiIzE2MkI0MFwiIHN0cm9rZS13aWR0aD1cIjJcIi8+PHJlY3QgeD1cIjM5XCIgeT1cIjUxXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjdcIiByeD1cIjJcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMTYyQjQwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz48L3N2Zz4sXHJcblx0XHRhdHRyaWJ1dGVzOiBtZXRhZGF0YS5hdHRyaWJ1dGVzLFxyXG5cdFx0ZWRpdDogRm9ybUVkaXQsXHJcblx0fVxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==