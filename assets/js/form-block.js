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

/***/ "./editor/blocks/form-block/block.json":
/*!*********************************************!*\
  !*** ./editor/blocks/form-block/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/form-block","keywords":["jetformbuilder"],"textdomain":"jet-form-builder","supports":{"html":false,"className":true},"category":"layout","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"42\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M0 5C0 4.44772 0.447715 4 1 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H1C0.447715 6 0 5.55228 0 5Z\\"fill=\\"#162B40\\"/><rect x=\\"1\\" y=\\"2\\" width=\\"62\\" height=\\"61\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"19\\" width=\\"50\\" height=\\"11\\" rx=\\"2\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"35\\" width=\\"50\\" height=\\"11\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"39\\" y=\\"51\\" width=\\"18\\" height=\\"7\\" rx=\\"2\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"form_id":{"type":"number","default":0},"submit_type":{"type":"string","default":"reload"},"required_mark":{"type":"string","default":"*"},"fields_layout":{"type":"string","default":"column"},"enable_progress":{"type":"boolean","default":false}}}');

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
/* harmony import */ var _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/form-block/block.json */ "./editor/blocks/form-block/block.json");
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
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.icon
    }
  }),
  attributes: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  edit: FormEdit
}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ibG9jay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZm9ybS1ibG9jay9vcHRpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN1Ym1pdFR5cGVzID0gW1xuXHR7XG5cdFx0dmFsdWU6ICdyZWxvYWQnLFxuXHRcdGxhYmVsOiAnUGFnZSBSZWxvYWQnXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2FqYXgnLFxuXHRcdGxhYmVsOiAnQUpBWCdcblx0fVxuXVxuXG5jb25zdCBmaWVsZHNMYXlvdXQgPSBbXG5cdHtcblx0XHR2YWx1ZTogJ2NvbHVtbicsXG5cdFx0bGFiZWw6ICdDb2x1bW4nXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ3JvdycsXG5cdFx0bGFiZWw6ICdSb3cnXG5cdH1cbl07XG5cbmV4cG9ydCB7XG5cdHN1Ym1pdFR5cGVzLFxuXHRmaWVsZHNMYXlvdXRcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWV0YWRhdGEgZnJvbSBcIi4vYmxvY2tzL2Zvcm0tYmxvY2svYmxvY2suanNvblwiXG5pbXBvcnQge1xuXHRmaWVsZHNMYXlvdXQsXG5cdHN1Ym1pdFR5cGVzXG59IGZyb20gXCIuL2Jsb2Nrcy9mb3JtLWJsb2NrL29wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRyZWdpc3RlckJsb2NrVHlwZSxcbn0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHNcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdHNlcnZlclNpZGVSZW5kZXI6IFNlcnZlclNpZGVSZW5kZXJcbn0gPSB3cDtcblxuY29uc3QgdW5pcUtleSA9IHN1ZmZpeCA9PiBgJHsgbWV0YWRhdGEubmFtZSB9LyR7IHN1ZmZpeCB9YDtcblxuZnVuY3Rpb24gRm9ybUVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgaXNTZWxlY3RlZCB9ICkge1xuXG5cdGNvbnN0IGxvY2FsaXplID0gd2luZG93LkpldEZvcm1EYXRhO1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdHJldHVybiBbXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRm9ybSBTZXR0aW5ncycgKSB9XG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdQYW5lbEJvZHknICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nZm9ybV9pZCdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2hvb3NlIEZvcm0nICkgfVxuXHRcdFx0XHRcdGxhYmVscG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZm9ybV9pZCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZvcm1faWQ6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IGxvY2FsaXplLmZvcm1zX2xpc3QgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7IEJvb2xlYW4oIGF0dHJpYnV0ZXMuZm9ybV9pZCApICYmIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyAnRmllbGRzIExheW91dCcgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkc19sYXlvdXQgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGZpZWxkc0xheW91dCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZHNfbGF5b3V0OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyAnUmVxdWlyZWQgTWFyaycgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnJlcXVpcmVkX21hcmsgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgcmVxdWlyZWRfbWFyazogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyAnU3VibWl0IFR5cGUnIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdWJtaXRfdHlwZSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgc3VibWl0VHlwZXMgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc3VibWl0X3R5cGU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17ICdlbmFibGVfcHJvZ3Jlc3MnIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFbmFibGUgZm9ybSBwYWdlcyBwcm9ncmVzcycgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5lbmFibGVfcHJvZ3Jlc3MgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGVuYWJsZV9wcm9ncmVzczogQm9vbGVhbiggbmV3VmFsICkgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD4gfVxuXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8U2VydmVyU2lkZVJlbmRlclxuXHRcdFx0XHRibG9jaz17IG1ldGFkYXRhLm5hbWUgfVxuXHRcdFx0XHRhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG5cdFx0XHRcdGh0dHBNZXRob2Q9eyAnUE9TVCcgfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0XTtcbn1cblxucmVnaXN0ZXJCbG9ja1R5cGUoXG5cdG1ldGFkYXRhLm5hbWUsXG5cdHtcblx0XHQuLi5tZXRhZGF0YSxcblx0XHR0aXRsZTogX18oICdKZXRGb3JtJyApLFxuXHRcdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IG1ldGFkYXRhLmljb24gfSB9Pjwvc3Bhbj4sXG5cdFx0YXR0cmlidXRlczogbWV0YWRhdGEuYXR0cmlidXRlcyxcblx0XHRlZGl0OiBGb3JtRWRpdCxcblx0fVxuKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7QTs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==