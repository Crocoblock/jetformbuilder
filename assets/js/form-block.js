/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../blocks-src/form-block/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/form-block/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":"2","name":"jet-forms/form-block","title":"JetForm","keywords":["jetform","form","builder","crocoblock"],"textdomain":"jet-form-builder","supports":{"html":false,"className":true},"editorScript":"","editorStyle":"","category":"layout","icon":"feedback","attributes":{"form_id":{"type":"number","default":0},"submit_type":{"type":"string","default":"reload"},"required_mark":{"type":"string","default":"*"},"fields_layout":{"type":"string","default":"column"},"enable_progress":{"type":"boolean","default":false}}}');

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ibG9jay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1ibG9jay9vcHRpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN1Ym1pdFR5cGVzID0gW1xuXHR7XG5cdFx0dmFsdWU6ICcnLFxuXHRcdGxhYmVsOiAnLS0nLFxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdyZWxvYWQnLFxuXHRcdGxhYmVsOiAnUGFnZSBSZWxvYWQnXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2FqYXgnLFxuXHRcdGxhYmVsOiAnQUpBWCdcblx0fVxuXVxuXG5jb25zdCBmaWVsZHNMYXlvdXQgPSBbXG5cdHtcblx0XHR2YWx1ZTogJycsXG5cdFx0bGFiZWw6ICctLScsXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2NvbHVtbicsXG5cdFx0bGFiZWw6ICdDb2x1bW4nXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ3JvdycsXG5cdFx0bGFiZWw6ICdSb3cnXG5cdH1cbl07XG5cbmV4cG9ydCB7XG5cdHN1Ym1pdFR5cGVzLFxuXHRmaWVsZHNMYXlvdXRcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvZm9ybS1ibG9jay9ibG9jay5qc29uXCJcbmltcG9ydCB7XG5cdGZpZWxkc0xheW91dCxcblx0c3VibWl0VHlwZXNcbn0gZnJvbSBcIi4vYmxvY2tzL2Zvcm0tYmxvY2svb3B0aW9uc1wiO1xuXG5jb25zdCB7XG5cdHJlZ2lzdGVyQmxvY2tUeXBlLFxufSA9IHdwLmJsb2NrcztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlQmxvY2tQcm9wc1xufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0c2VydmVyU2lkZVJlbmRlcjogU2VydmVyU2lkZVJlbmRlclxufSA9IHdwO1xuXG5jb25zdCB1bmlxS2V5ID0gc3VmZml4ID0+IGAkeyBtZXRhZGF0YS5uYW1lIH0vJHsgc3VmZml4IH1gO1xuXG5mdW5jdGlvbiBGb3JtRWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XG5cblx0Y29uc3QgbG9jYWxpemUgPSB3aW5kb3cuSmV0Rm9ybURhdGE7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIFtcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHQ+XG5cdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdHRpdGxlPXsgX18oICdGb3JtIFNldHRpbmdzJyApIH1cblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BhbmVsQm9keScgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdmb3JtX2lkJ1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdDaG9vc2UgRm9ybScgKSB9XG5cdFx0XHRcdFx0bGFiZWxwb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mb3JtX2lkIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZm9ybV9pZDogTnVtYmVyKCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvcHRpb25zPXsgbG9jYWxpemUuZm9ybXNfbGlzdCB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgQm9vbGVhbiggYXR0cmlidXRlcy5mb3JtX2lkICkgJiYgPFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17ICdGaWVsZHMgTGF5b3V0JyB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmllbGRzX2xheW91dCB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZmllbGRzTGF5b3V0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkc19sYXlvdXQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17ICdSZXF1aXJlZCBNYXJrJyB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucmVxdWlyZWRfbWFyayB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyByZXF1aXJlZF9tYXJrOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17ICdTdWJtaXQgVHlwZScgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnN1Ym1pdF90eXBlIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBzdWJtaXRUeXBlcyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzdWJtaXRfdHlwZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgJ2VuYWJsZV9wcm9ncmVzcycgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSBmb3JtIHBhZ2VzIHByb2dyZXNzJyApIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmVuYWJsZV9wcm9ncmVzcyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlX3Byb2dyZXNzOiBCb29sZWFuKCBuZXdWYWwgKSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdDxTZXJ2ZXJTaWRlUmVuZGVyXG5cdFx0XHRcdGJsb2NrPXsgbWV0YWRhdGEubmFtZSB9XG5cdFx0XHRcdGF0dHJpYnV0ZXM9eyBhdHRyaWJ1dGVzIH1cblx0XHRcdFx0aHR0cE1ldGhvZD17ICdQT1NUJyB9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHRdO1xufVxuXG5yZWdpc3RlckJsb2NrVHlwZShcblx0bWV0YWRhdGEubmFtZSxcblx0e1xuXHRcdC4uLm1ldGFkYXRhLFxuXHRcdHRpdGxlOiBfXyggJ0pldEZvcm0nICksXG5cdFx0aWNvbjogPHN2ZyB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3Qgd2lkdGg9XCI0MlwiIGhlaWdodD1cIjJcIiByeD1cIjFcIiBmaWxsPVwiIzE2MkI0MFwiLz48cGF0aCBkPVwiTTAgNUMwIDQuNDQ3NzIgMC40NDc3MTUgNCAxIDRIMjBDMjAuNTUyMyA0IDIxIDQuNDQ3NzIgMjEgNUMyMSA1LjU1MjI4IDIwLjU1MjMgNiAyMCA2SDFDMC40NDc3MTUgNiAwIDUuNTUyMjggMCA1WlwiZmlsbD1cIiMxNjJCNDBcIi8+PHJlY3QgeD1cIjFcIiB5PVwiMlwiIHdpZHRoPVwiNjJcIiBoZWlnaHQ9XCI2MVwiIHJ4PVwiM1wiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMxNjJCNDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPjxyZWN0IHg9XCI3XCIgeT1cIjE5XCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjExXCIgcng9XCIyXCIgZmlsbD1cIiM2RjhDRkZcIiBzdHJva2U9XCIjMTYyQjQwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz48cmVjdCB4PVwiN1wiIHk9XCIzNVwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIxMVwiIHJ4PVwiMlwiIGZpbGw9XCIjNEFGM0JBXCIgc3Ryb2tlPVwiIzE2MkI0MFwiIHN0cm9rZS13aWR0aD1cIjJcIi8+PHJlY3QgeD1cIjM5XCIgeT1cIjUxXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjdcIiByeD1cIjJcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjMTYyQjQwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz48L3N2Zz4sXG5cdFx0YXR0cmlidXRlczogbWV0YWRhdGEuYXR0cmlidXRlcyxcblx0XHRlZGl0OiBGb3JtRWRpdCxcblx0fVxuKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QTs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTs7OztBIiwic291cmNlUm9vdCI6IiJ9