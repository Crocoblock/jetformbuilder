/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/index.js":
/*!*************************!*\
  !*** ./editor/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-block */ \"./editor/welcome-block/index.js\");\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('jet.fb.register.fields', 'jet-form-builder/welcome-block', function (blocks) {\n  blocks.push(_welcome_block__WEBPACK_IMPORTED_MODULE_0__);\n  return blocks;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7QUFFM0MsSUFDT0MsU0FBUyxHQUNOQyxFQUFFLENBQUNDLEtBQUssQ0FEWEYsU0FBUztBQUdoQkEsU0FBUyxDQUNSLHdCQUF3QixFQUN4QixnQ0FBZ0MsRUFDaEMsVUFBV0csTUFBTSxFQUFHO0VBQ25CQSxNQUFNLENBQUNDLElBQUksQ0FBRUwsMkNBQVEsQ0FBQztFQUV0QixPQUFPSSxNQUFNO0FBQ2QsQ0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9lZGl0b3IvaW5kZXguanM/NWZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3ZWxjb21lIGZyb20gJy4vd2VsY29tZS1ibG9jayc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG4gICAgICB9ID0gd3AuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3dlbGNvbWUtYmxvY2snLFxyXG5cdGZ1bmN0aW9uICggYmxvY2tzICkge1xyXG5cdFx0YmxvY2tzLnB1c2goIHdlbGNvbWUgKTtcclxuXHJcblx0XHRyZXR1cm4gYmxvY2tzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbIndlbGNvbWUiLCJhZGRGaWx0ZXIiLCJ3cCIsImhvb2tzIiwiYmxvY2tzIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/index.js\n");

/***/ }),

/***/ "./editor/welcome-block/edit.js":
/*!**************************************!*\
  !*** ./editor/welcome-block/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction WelcomeBlockEdit(props) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeBlockEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3Ivd2VsY29tZS1ibG9jay9lZGl0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxnQkFBZ0JBLENBQUVDLEtBQUssRUFBRyxDQUVuQztBQUVBLGlFQUFlRCxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2VkaXRvci93ZWxjb21lLWJsb2NrL2VkaXQuanM/YWNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBXZWxjb21lQmxvY2tFZGl0KCBwcm9wcyApIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVCbG9ja0VkaXQ7Il0sIm5hbWVzIjpbIldlbGNvbWVCbG9ja0VkaXQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/welcome-block/edit.js\n");

/***/ }),

/***/ "./editor/welcome-block/index.js":
/*!***************************************!*\
  !*** ./editor/welcome-block/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   settings: () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./editor/welcome-block/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ \"./editor/welcome-block/block.json\");\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,\n  icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon;\nvar __ = wp.i18n.__;\nvar settings = {\n  //icon: <span dangerouslySetInnerHTML={ { __html: icon } }></span>,\n  description: __(\"\", 'jet-form-builder'),\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  example: {\n    attributes: {\n      isPreview: true\n    }\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3Ivd2VsY29tZS1ibG9jay9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzQztBQUNGO0FBRXBDLElBQ09FLElBQUksR0FFREQsNkNBRkM7RUFDSkUsSUFBSSxHQUNERiw2Q0FEQztBQUdYLElBQ09HLEVBQUUsR0FDQ0MsRUFBRSxDQUFDQyxJQUFJLENBRFZGLEVBQUU7QUFHVCxJQUFNRyxRQUFRLEdBQUc7RUFDaEI7RUFDQUMsV0FBVyxFQUFFSixFQUFFLEtBRWQsa0JBQ0QsQ0FBQztFQUNESyxJQUFJLEVBQUVULDZDQUFnQjtFQUN0QlUsT0FBTyxFQUFFO0lBQ1JDLFVBQVUsRUFBRTtNQUNYQyxTQUFTLEVBQUU7SUFDWjtFQUNEO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZWRpdG9yL3dlbGNvbWUtYmxvY2svaW5kZXguanM/OGE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VsY29tZUJsb2NrRWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBuYW1lLFxyXG5cdCAgICAgIGljb24sXHJcbiAgICAgIH0gPSBtZXRhZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHQvL2ljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZGVzY3JpcHRpb246IF9fKFxyXG5cdFx0YGAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRlZGl0OiBXZWxjb21lQmxvY2tFZGl0LFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzLFxyXG59OyJdLCJuYW1lcyI6WyJXZWxjb21lQmxvY2tFZGl0IiwibWV0YWRhdGEiLCJuYW1lIiwiaWNvbiIsIl9fIiwid3AiLCJpMThuIiwic2V0dGluZ3MiLCJkZXNjcmlwdGlvbiIsImVkaXQiLCJleGFtcGxlIiwiYXR0cmlidXRlcyIsImlzUHJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/welcome-block/index.js\n");

/***/ }),

/***/ "./editor/welcome-block/block.json":
/*!*****************************************!*\
  !*** ./editor/welcome-block/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/welcome","title":"Welcome","category":"jet-form-builder-elements","icon":"","keywords":["jetformbuilder","start","welcome"],"description":"","textdomain":"jet-form-builder"}');

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/index.js");
/******/ 	
/******/ })()
;