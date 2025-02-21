/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/@wordpress/icons/build-module/library/copy-small.js":
/*!************************************************************************************!*\
  !*** ../../../../node_modules/@wordpress/icons/build-module/library/copy-small.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const copySmall = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.625 5.5h9.75c.069 0 .125.056.125.125v9.75a.125.125 0 0 1-.125.125h-9.75a.125.125 0 0 1-.125-.125v-9.75c0-.069.056-.125.125-.125ZM4 5.625C4 4.728 4.728 4 5.625 4h9.75C16.273 4 17 4.728 17 5.625v9.75c0 .898-.727 1.625-1.625 1.625h-9.75A1.625 1.625 0 0 1 4 15.375v-9.75Zm14.5 11.656v-9H20v9C20 18.8 18.77 20 17.251 20H6.25v-1.5h11.001c.69 0 1.249-.528 1.249-1.219Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySmall);
//# sourceMappingURL=copy-small.js.map

/***/ }),

/***/ "./blockBuilder/builder/BlockBuilder.jsx":
/*!***********************************************!*\
  !*** ./blockBuilder/builder/BlockBuilder.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "../../../../node_modules/@wordpress/icons/build-module/library/copy-small.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_use_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-use-form */ "jet-form-builder-use-form");
/* harmony import */ var jet_form_builder_use_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_use_form__WEBPACK_IMPORTED_MODULE_3__);





function BlockBuilder({
  name
}) {
  const [settings, updateSettings] = (0,jet_form_builder_use_form__WEBPACK_IMPORTED_MODULE_3__.usePluginUseSettings)();
  const isActive = name === settings.builder;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => updateSettings({
      builder: name
    }),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    variant: isActive ? 'primary' : 'secondary'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block for Block Editor', 'jet-form-builder')), isActive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_use_form__WEBPACK_IMPORTED_MODULE_3__.BuilderHelpSlotFill.Fill, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_use_form__WEBPACK_IMPORTED_MODULE_3__.Description, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The form will be automatically added to the end of the selected page', 'jet-form-builder'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockBuilder);

/***/ }),

/***/ "./blockBuilder/builder/index.js":
/*!***************************************!*\
  !*** ./blockBuilder/builder/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockBuilder */ "./blockBuilder/builder/BlockBuilder.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'blocks',
  view: _BlockBuilder__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "jet-form-builder-use-form":
/*!**********************************!*\
  !*** external ["jfb","useForm"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["jfb"]["useForm"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

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
/*!*******************************!*\
  !*** ./blockBuilder/index.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./blockBuilder/builder/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('jet-forms/use-form').registerBuilders([_builder__WEBPACK_IMPORTED_MODULE_0__["default"]]);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suYnVpbGRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBZ0JBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9jb3B5LXNtYWxsLmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vYmxvY2tCdWlsZGVyL2J1aWxkZXIvQmxvY2tCdWlsZGVyLmpzeCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2Jsb2NrQnVpbGRlci9idWlsZGVyL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwidXNlRm9ybVwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vbmJvYXJkaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2Jsb2NrQnVpbGRlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGNvcHlTbWFsbCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIixcbiAgZDogXCJNNS42MjUgNS41aDkuNzVjLjA2OSAwIC4xMjUuMDU2LjEyNS4xMjV2OS43NWEuMTI1LjEyNSAwIDAgMS0uMTI1LjEyNWgtOS43NWEuMTI1LjEyNSAwIDAgMS0uMTI1LS4xMjV2LTkuNzVjMC0uMDY5LjA1Ni0uMTI1LjEyNS0uMTI1Wk00IDUuNjI1QzQgNC43MjggNC43MjggNCA1LjYyNSA0aDkuNzVDMTYuMjczIDQgMTcgNC43MjggMTcgNS42MjV2OS43NWMwIC44OTgtLjcyNyAxLjYyNS0xLjYyNSAxLjYyNWgtOS43NUExLjYyNSAxLjYyNSAwIDAgMSA0IDE1LjM3NXYtOS43NVptMTQuNSAxMS42NTZ2LTlIMjB2OUMyMCAxOC44IDE4Ljc3IDIwIDE3LjI1MSAyMEg2LjI1di0xLjVoMTEuMDAxYy42OSAwIDEuMjQ5LS41MjggMS4yNDktMS4yMTlaXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGNvcHlTbWFsbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcHktc21hbGwuanMubWFwIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IGNvcHlTbWFsbCB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0dXNlUGx1Z2luVXNlU2V0dGluZ3MsXG5cdEJ1aWxkZXJIZWxwU2xvdEZpbGwsXG5cdERlc2NyaXB0aW9uXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItdXNlLWZvcm0nO1xuXG5mdW5jdGlvbiBCbG9ja0J1aWxkZXIoIHsgbmFtZSB9ICkge1xuXHRjb25zdCBbIHNldHRpbmdzLCB1cGRhdGVTZXR0aW5ncyBdID0gdXNlUGx1Z2luVXNlU2V0dGluZ3MoKTtcblxuXHRjb25zdCBpc0FjdGl2ZSA9IG5hbWUgPT09IHNldHRpbmdzLmJ1aWxkZXI7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEJ1dHRvblxuXHRcdFx0b25DbGljaz17ICgpID0+IHVwZGF0ZVNldHRpbmdzKCB7IGJ1aWxkZXI6IG5hbWUgfSApIH1cblx0XHRcdGljb249eyBjb3B5U21hbGwgfVxuXHRcdFx0dmFyaWFudD17IGlzQWN0aXZlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeScgfVxuXHRcdD5cblx0XHRcdHsgX18oXG5cdFx0XHRcdCdCbG9jayBmb3IgQmxvY2sgRWRpdG9yJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSB9XG5cdFx0PC9CdXR0b24+XG5cdFx0eyBpc0FjdGl2ZSAmJiA8QnVpbGRlckhlbHBTbG90RmlsbC5GaWxsPlxuXHRcdFx0PERlc2NyaXB0aW9uPlxuXHRcdFx0XHR7IF9fKFxuXHRcdFx0XHRcdCdUaGUgZm9ybSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgc2VsZWN0ZWQgcGFnZScsXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHQpIH1cblx0XHRcdDwvRGVzY3JpcHRpb24+XG5cdFx0PC9CdWlsZGVySGVscFNsb3RGaWxsLkZpbGw+IH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0J1aWxkZXI7IiwiaW1wb3J0IEJsb2NrQnVpbGRlciBmcm9tICcuL0Jsb2NrQnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2Jsb2NrcycsXG5cdHZpZXc6IEJsb2NrQnVpbGRlcixcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcInVzZUZvcm1cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBibG9ja0J1aWxkZXIgZnJvbSAnLi9idWlsZGVyJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZGlzcGF0Y2goICdqZXQtZm9ybXMvdXNlLWZvcm0nICkucmVnaXN0ZXJCdWlsZGVycyggW1xuXHRibG9ja0J1aWxkZXIsXG5dICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9