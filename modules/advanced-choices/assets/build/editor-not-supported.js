/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor-not-supported/choices-field/edit.js":
/*!****************************************************!*\
  !*** ./editor-not-supported/choices-field/edit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditAdvancedChoicesField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
let {
  useBlockProps
} = wp.blockEditor;
const {
  Placeholder
} = wp.components;
function EditAdvancedChoicesField(props) {
  const blockProps = useBlockProps();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
    instructions: __('You should update your WordPress to version 6.2 or higher', 'jet-form-builder'),
    label: __('Advanced Choices not supported', 'jet-form-builder'),
    ...blockProps
  });
}

/***/ }),

/***/ "./editor-not-supported/choices-field/index.js":
/*!*****************************************************!*\
  !*** ./editor-not-supported/choices-field/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor-not-supported/choices-field/edit.js");
/* harmony import */ var _blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/choices-field/block.json */ "../../blocks-metadata/choices-field/block.json");



const {
  name,
  icon
} = _blocks_choices_field_block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "../../blocks-metadata/choices-field/block.json":
/*!******************************************************!*\
  !*** ../../blocks-metadata/choices-field/block.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/choices-field","category":"jet-form-builder-fields","title":"Advanced Choices Field","description":"","icon":"<svg width=\\"52\\" height=\\"53\\" viewBox=\\"0 0 52 53\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M10 14C8.89543 14 8 14.8954 8 16V22C8 23.1046 8.89543 24 10 24H16C17.1046 24 18 23.1046 18 22V16C18 14.8954 17.1046 14 16 14H10ZM16 16H10V22H16V16Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M23 16C22.4477 16 22 16.4477 22 17C22 17.5523 22.4477 18 23 18H37C37.5523 18 38 17.5523 38 17C38 16.4477 37.5523 16 37 16H23Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M22 21C22 20.4477 22.4477 20 23 20H37C37.5523 20 38 20.4477 38 21C38 21.5523 37.5523 22 37 22H23C22.4477 22 22 21.5523 22 21Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M23.5 37C25.433 37 27 35.433 27 33.5C27 31.567 25.433 30 23.5 30C21.567 30 20 31.567 20 33.5C20 35.433 21.567 37 23.5 37ZM23.5 35C24.3284 35 25 34.3284 25 33.5C25 32.6716 24.3284 32 23.5 32C22.6716 32 22 32.6716 22 33.5C22 34.3284 22.6716 35 23.5 35Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M27.0789 39C27.3469 39 27.6037 39.1076 27.7917 39.2985L32.7127 44.2985C33.1001 44.6922 33.0951 45.3253 32.7015 45.7127C32.3078 46.1001 31.6747 46.0951 31.2873 45.7015L27.0789 41.4256L22.8706 45.7015C22.6826 45.8924 22.4259 46 22.1579 46C21.8899 46 21.6332 45.8924 21.4452 45.7015L18.5789 42.7892L15.7127 45.7015C15.3253 46.0951 14.6922 46.1001 14.2985 45.7127C13.9049 45.3253 13.8999 44.6922 14.2873 44.2985L17.8662 40.6622C18.0542 40.4712 18.311 40.3636 18.5789 40.3636C18.8469 40.3636 19.1037 40.4712 19.2917 40.6622L22.1579 43.5744L26.3662 39.2985C26.5542 39.1076 26.811 39 27.0789 39Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M12 0C9.79086 0 8 1.79086 8 4V7H4C1.79086 7 0 8.79086 0 11V49C0 51.2091 1.79086 53 4 53H42C44.2091 53 46 51.2091 46 49V44H48C50.2091 44 52 42.2091 52 40V4C52 1.79086 50.2091 0 48 0H12ZM42 9C43.1046 9 44 9.89543 44 11V49C44 50.1046 43.1046 51 42 51H4C2.89543 51 2 50.1046 2 49V11C2 9.89543 2.89543 9 4 9H42ZM10 4C10 2.89543 10.8954 2 12 2H48C49.1046 2 50 2.89543 50 4V40C50 41.1046 49.1046 42 48 42H46V11C46 8.79086 44.2091 7 42 7H10V4Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"isPreview":{"type":"boolean","default":false},"value":{"type":"object","default":{}},"allow_multiple":{"type":"boolean","default":false},"label":{"type":"string","default":"","jfb":{"rich":true}},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":"","jfb":{"rich":true}},"default":{"type":["string","array","number","boolean","object"],"default":"","jfb":{"rich-no-preset":true}},"required":{"type":"boolean","default":false},"visibility":{"type":"string","default":""}},"keywords":["jetformbuilder","field","choices"],"textdomain":"jet-form-builder","supports":{"html":false,"jetFBSwitchPageOnChange":true,"jetFBSanitizeValue":true,"jetStyle":{"--jfb-choice-text":[".jet-form-builder-choice--item","color","text"],"--jfb-choice-bg":[".jet-form-builder-choice--item","color","background"],"--jfb-choice-border":[".jet-form-builder-choice--item","border"],"--jfb-choice-border-radius":[".jet-form-builder-choice--item","border","radius"],"--jfb-choice-hover-text":[".jet-form-builder-choice--item:hover","color","text"],"--jfb-choice-hover-bg":[".jet-form-builder-choice--item:hover","color","background"],"--jfb-choice-hover-border":[".jet-form-builder-choice--item:hover","border"],"--jfb-choice-hover-border-radius":[".jet-form-builder-choice--item:hover","border","radius"],"--jfb-choice-checked-text":[".jet-form-builder-choice--item.is-checked","color","text"],"--jfb-choice-checked-bg":[".jet-form-builder-choice--item.is-checked","color","background"],"--jfb-choice-checked-border":[".jet-form-builder-choice--item.is-checked","border"],"--jfb-choice-checked-border-radius":[".jet-form-builder-choice--item.is-checked","border","radius"]},"jetCustomWrapperLayout":true,"layout":{"allowSwitching":false,"allowInheriting":false,"allowVerticalAlignment":false,"allowSizingOnChildren":true,"default":{"type":"flex"}},"spacing":{"blockGap":["horizontal","vertical"],"margin":true,"padding":true,"units":["px","em","rem","vh","vw"]}},"providesContext":{"jet-forms/choices-field--multiple":"allow_multiple","jet-forms/choices-field--required":"required","jet-forms/choices-field--name":"name","jet-forms/choices-field--default":"default"},"usesContext":["jet-forms/repeater-field--name","jet-forms/repeater-row--default","jet-forms/repeater-row--current-index"],"viewScript":"jet-fb-advanced-choices","style":"jet-fb-advanced-choices"}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**************************************!*\
  !*** ./editor-not-supported/main.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _choices_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./choices-field */ "./editor-not-supported/choices-field/index.js");

const {
  addFilter
} = wp.hooks;
addFilter('jet.fb.register.fields', 'jet-form-builder/advanced-choices-not-supported', function (blocks) {
  blocks.push(_choices_field__WEBPACK_IMPORTED_MODULE_0__);
  return blocks;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLW5vdC1zdXBwb3J0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3Itbm90LXN1cHBvcnRlZC9jaG9pY2VzLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3Itbm90LXN1cHBvcnRlZC9jaG9pY2VzLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci1ub3Qtc3VwcG9ydGVkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxubGV0IHtcblx0ICAgIHVzZUJsb2NrUHJvcHMsXG4gICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdCAgICAgIFBsYWNlaG9sZGVyLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRBZHZhbmNlZENob2ljZXNGaWVsZCggcHJvcHMgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIDxQbGFjZWhvbGRlclxuXHRcdGluc3RydWN0aW9ucz17IF9fKFxuXHRcdFx0J1lvdSBzaG91bGQgdXBkYXRlIHlvdXIgV29yZFByZXNzIHRvIHZlcnNpb24gNi4yIG9yIGhpZ2hlcicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcidcblx0XHQpIH1cblx0XHRsYWJlbD17IF9fKCAnQWR2YW5jZWQgQ2hvaWNlcyBub3Qgc3VwcG9ydGVkJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdHsgLi4uYmxvY2tQcm9wcyB9XG5cdC8+O1xufSIsImltcG9ydCBFZGl0QWR2YW5jZWRDaG9pY2VzRmllbGQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBtZXRhZGF0YSBmcm9tICdAYmxvY2tzL2Nob2ljZXMtZmllbGQvYmxvY2suanNvbic7XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiB9ID0gbWV0YWRhdGE7XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBFZGl0QWR2YW5jZWRDaG9pY2VzRmllbGQsXG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3MsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgY2hvaWNlc0ZpZWxkIGZyb20gJy4vY2hvaWNlcy1maWVsZCc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IHdwLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvYWR2YW5jZWQtY2hvaWNlcy1ub3Qtc3VwcG9ydGVkJyxcblx0ZnVuY3Rpb24gKCBibG9ja3MgKSB7XG5cdFx0YmxvY2tzLnB1c2goXG5cdFx0XHRjaG9pY2VzRmllbGQsXG5cdFx0KTtcblxuXHRcdHJldHVybiBibG9ja3M7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==