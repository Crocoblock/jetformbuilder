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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ibG9jay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1ibG9jay9vcHRpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN1Ym1pdFR5cGVzID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnJyxcclxuXHRcdGxhYmVsOiAnLS0nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdyZWxvYWQnLFxyXG5cdFx0bGFiZWw6ICdQYWdlIFJlbG9hZCdcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnYWpheCcsXHJcblx0XHRsYWJlbDogJ0FKQVgnXHJcblx0fVxyXG5dXHJcblxyXG5jb25zdCBmaWVsZHNMYXlvdXQgPSBbXHJcblx0e1xyXG5cdFx0dmFsdWU6ICcnLFxyXG5cdFx0bGFiZWw6ICctLScsXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2NvbHVtbicsXHJcblx0XHRsYWJlbDogJ0NvbHVtbidcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncm93JyxcclxuXHRcdGxhYmVsOiAnUm93J1xyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCB7XHJcblx0c3VibWl0VHlwZXMsXHJcblx0ZmllbGRzTGF5b3V0XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvZm9ybS1ibG9jay9ibG9jay5qc29uXCJcclxuaW1wb3J0IHtcclxuXHRmaWVsZHNMYXlvdXQsXHJcblx0c3VibWl0VHlwZXNcclxufSBmcm9tIFwiLi9ibG9ja3MvZm9ybS1ibG9jay9vcHRpb25zXCI7XHJcblxyXG5jb25zdCB7XHJcblx0cmVnaXN0ZXJCbG9ja1R5cGUsXHJcbn0gPSB3cC5ibG9ja3M7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdEluc3BlY3RvckNvbnRyb2xzLFxyXG5cdHVzZUJsb2NrUHJvcHNcclxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0UGFuZWxCb2R5LFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0VGV4dENvbnRyb2wsXHJcblx0VG9nZ2xlQ29udHJvbFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHRzZXJ2ZXJTaWRlUmVuZGVyOiBTZXJ2ZXJTaWRlUmVuZGVyXHJcbn0gPSB3cDtcclxuXHJcbmNvbnN0IHVuaXFLZXkgPSBzdWZmaXggPT4gYCR7IG1ldGFkYXRhLm5hbWUgfS8keyBzdWZmaXggfWA7XHJcblxyXG5mdW5jdGlvbiBGb3JtRWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBpc1NlbGVjdGVkIH0gKSB7XHJcblxyXG5cdGNvbnN0IGxvY2FsaXplID0gd2luZG93LkpldEZvcm1EYXRhO1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiBbXHJcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xyXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8UGFuZWxCb2R5XHJcblx0XHRcdFx0dGl0bGU9eyBfXyggJ0Zvcm0gU2V0dGluZ3MnICkgfVxyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT0nZm9ybV9pZCdcclxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdDaG9vc2UgRm9ybScgKSB9XHJcblx0XHRcdFx0XHRsYWJlbHBvc2l0aW9uPSd0b3AnXHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZm9ybV9pZCB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcclxuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmb3JtX2lkOiBOdW1iZXIoIG5ld1ZhbHVlICkgfSApO1xyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgbG9jYWxpemUuZm9ybXNfbGlzdCB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHR7IEJvb2xlYW4oIGF0dHJpYnV0ZXMuZm9ybV9pZCApICYmIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgJ0ZpZWxkcyBMYXlvdXQnIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkc19sYXlvdXQgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgZmllbGRzTGF5b3V0IH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZHNfbGF5b3V0OiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17ICdSZXF1aXJlZCBNYXJrJyB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5yZXF1aXJlZF9tYXJrIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyByZXF1aXJlZF9tYXJrOiBuZXdWYWx1ZSB9ICk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgJ1N1Ym1pdCBUeXBlJyB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJtaXRfdHlwZSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBzdWJtaXRUeXBlcyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc3VibWl0X3R5cGU6IG5ld1ZhbHVlIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0a2V5PXsgJ2VuYWJsZV9wcm9ncmVzcycgfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRW5hYmxlIGZvcm0gcGFnZXMgcHJvZ3Jlc3MnICkgfVxyXG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5lbmFibGVfcHJvZ3Jlc3MgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBlbmFibGVfcHJvZ3Jlc3M6IEJvb2xlYW4oIG5ld1ZhbCApIH0gKTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cclxuXHRcdFx0PC9QYW5lbEJvZHk+XHJcblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcclxuXHRcdDxkaXYga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8U2VydmVyU2lkZVJlbmRlclxyXG5cdFx0XHRcdGJsb2NrPXsgbWV0YWRhdGEubmFtZSB9XHJcblx0XHRcdFx0YXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxyXG5cdFx0XHRcdGh0dHBNZXRob2Q9eyAnUE9TVCcgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0XTtcclxufVxyXG5cclxucmVnaXN0ZXJCbG9ja1R5cGUoXHJcblx0bWV0YWRhdGEubmFtZSxcclxuXHR7XHJcblx0XHQuLi5tZXRhZGF0YSxcclxuXHRcdHRpdGxlOiBfXyggJ0pldEZvcm0nICksXHJcblx0XHRpY29uOiA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cmVjdCB3aWR0aD1cIjQyXCIgaGVpZ2h0PVwiMlwiIHJ4PVwiMVwiIGZpbGw9XCIjMTYyQjQwXCIvPjxwYXRoIGQ9XCJNMCA1QzAgNC40NDc3MiAwLjQ0NzcxNSA0IDEgNEgyMEMyMC41NTIzIDQgMjEgNC40NDc3MiAyMSA1QzIxIDUuNTUyMjggMjAuNTUyMyA2IDIwIDZIMUMwLjQ0NzcxNSA2IDAgNS41NTIyOCAwIDVaXCJmaWxsPVwiIzE2MkI0MFwiLz48cmVjdCB4PVwiMVwiIHk9XCIyXCIgd2lkdGg9XCI2MlwiIGhlaWdodD1cIjYxXCIgcng9XCIzXCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiIzE2MkI0MFwiIHN0cm9rZS13aWR0aD1cIjJcIi8+PHJlY3QgeD1cIjdcIiB5PVwiMTlcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiMTFcIiByeD1cIjJcIiBmaWxsPVwiIzZGOENGRlwiIHN0cm9rZT1cIiMxNjJCNDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPjxyZWN0IHg9XCI3XCIgeT1cIjM1XCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjExXCIgcng9XCIyXCIgZmlsbD1cIiM0QUYzQkFcIiBzdHJva2U9XCIjMTYyQjQwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz48cmVjdCB4PVwiMzlcIiB5PVwiNTFcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiN1wiIHJ4PVwiMlwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiMxNjJCNDBcIiBzdHJva2Utd2lkdGg9XCIyXCIvPjwvc3ZnPixcclxuXHRcdGF0dHJpYnV0ZXM6IG1ldGFkYXRhLmF0dHJpYnV0ZXMsXHJcblx0XHRlZGl0OiBGb3JtRWRpdCxcclxuXHR9XHJcbik7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0E7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==