/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/custom.options.restrictions/NotEmptyAdvancedWithCustomOption.js":
/*!**********************************************************************************!*\
  !*** ./frontend/custom.options.restrictions/NotEmptyAdvancedWithCustomOption.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isNotEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNotEmpty */ "./frontend/custom.options.restrictions/isNotEmpty.js");

const {
  AdvancedRestriction = function () {}
} = JetFormBuilderAbstract;
function NotEmptyAdvancedWithCustomOption() {
  AdvancedRestriction.call(this);
  this.type = 'required';
  this.isSupported = function (node, reporting) {
    return reporting.input.isRequired && ['radio', 'checkbox'].includes(reporting.input.inputType);
  };
  this.validate = function () {
    return (0,_isNotEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(this.reporting.input);
  };
  this.getMessage = function () {
    return this.getMessageBySlug('empty');
  };
}
NotEmptyAdvancedWithCustomOption.prototype = Object.create(AdvancedRestriction.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEmptyAdvancedWithCustomOption);

/***/ }),

/***/ "./frontend/custom.options.restrictions/NotEmptyWithCustomOption.js":
/*!**************************************************************************!*\
  !*** ./frontend/custom.options.restrictions/NotEmptyWithCustomOption.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isNotEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNotEmpty */ "./frontend/custom.options.restrictions/isNotEmpty.js");

const {
  Restriction
} = JetFormBuilderAbstract;
function NotEmptyWithCustomOption() {
  Restriction.call(this);
  this.type = 'required';
  this.isSupported = function (node, reporting) {
    return reporting.input.isRequired && ['radio', 'checkbox'].includes(reporting.input.inputType);
  };
  this.validate = function () {
    return (0,_isNotEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(this.reporting.input);
  };
}
NotEmptyWithCustomOption.prototype = Object.create(Restriction.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEmptyWithCustomOption);

/***/ }),

/***/ "./frontend/custom.options.restrictions/isNotEmpty.js":
/*!************************************************************!*\
  !*** ./frontend/custom.options.restrictions/isNotEmpty.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  isEmpty
} = JetFormBuilderFunctions;
const isNotEmptySingle = value => 'boolean' !== typeof value && !isEmpty(value);

/**
 * @param input {InputData}
 */
function isNotEmpty(input) {
  const value = input.getValue();
  if (!input.isArray()) {
    return isNotEmptySingle(value);
  }
  return value.some(isNotEmptySingle);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNotEmpty);

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./frontend/custom.options.restrictions/main.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotEmptyAdvancedWithCustomOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotEmptyAdvancedWithCustomOption */ "./frontend/custom.options.restrictions/NotEmptyAdvancedWithCustomOption.js");
/* harmony import */ var _NotEmptyWithCustomOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotEmptyWithCustomOption */ "./frontend/custom.options.restrictions/NotEmptyWithCustomOption.js");


const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.restrictions', 'jet-form-builder/with-custom-options', function (restrictions) {
  restrictions.push(_NotEmptyAdvancedWithCustomOption__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return restrictions;
});
addFilter('jet.fb.restrictions.default', 'jet-form-builder/with-custom-options', function (restrictions) {
  restrictions.push(_NotEmptyWithCustomOption__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return restrictions;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2N1c3RvbS5vcHRpb25zLnJlc3RyaWN0aW9ucy9Ob3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zL05vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zL2lzTm90RW1wdHkuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9jdXN0b20ub3B0aW9ucy5yZXN0cmljdGlvbnMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNOb3RFbXB0eSBmcm9tICcuL2lzTm90RW1wdHknO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24gPSBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBOb3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvbigpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy50eXBlID0gJ3JlcXVpcmVkJztcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0cmVwb3J0aW5nLmlucHV0LmlzUmVxdWlyZWQgJiZcclxuXHRcdFx0WyAncmFkaW8nLCAnY2hlY2tib3gnIF0uaW5jbHVkZXMoIHJlcG9ydGluZy5pbnB1dC5pbnB1dFR5cGUgKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGlzTm90RW1wdHkoIHRoaXMucmVwb3J0aW5nLmlucHV0ICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2VtcHR5JyApO1xyXG5cdH07XHJcbn1cclxuXHJcbk5vdEVtcHR5QWR2YW5jZWRXaXRoQ3VzdG9tT3B0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvbjsiLCJpbXBvcnQgaXNOb3RFbXB0eSBmcm9tICcuL2lzTm90RW1wdHknO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFJlc3RyaWN0aW9uLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIE5vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbigpIHtcclxuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMudHlwZSA9ICdyZXF1aXJlZCc7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkICYmXHJcblx0XHRcdFsgJ3JhZGlvJywgJ2NoZWNrYm94JyBdLmluY2x1ZGVzKCByZXBvcnRpbmcuaW5wdXQuaW5wdXRUeXBlIClcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBpc05vdEVtcHR5KCB0aGlzLnJlcG9ydGluZy5pbnB1dCApO1xyXG5cdH07XHJcbn1cclxuXHJcbk5vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdFJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbjsiLCJjb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuY29uc3QgaXNOb3RFbXB0eVNpbmdsZSA9IHZhbHVlID0+IChcclxuXHQnYm9vbGVhbicgIT09IHR5cGVvZiB2YWx1ZSAmJiAhaXNFbXB0eSggdmFsdWUgKVxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNOb3RFbXB0eSggaW5wdXQgKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBpbnB1dC5nZXRWYWx1ZSgpO1xyXG5cclxuXHRpZiAoICFpbnB1dC5pc0FycmF5KCkgKSB7XHJcblx0XHRyZXR1cm4gaXNOb3RFbXB0eVNpbmdsZSggdmFsdWUgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB2YWx1ZS5zb21lKCBpc05vdEVtcHR5U2luZ2xlICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTm90RW1wdHk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTm90RW1wdHlBZHZhbmNlZFdpdGhDdXN0b21PcHRpb25cclxuXHRmcm9tICcuL05vdEVtcHR5QWR2YW5jZWRXaXRoQ3VzdG9tT3B0aW9uJztcclxuaW1wb3J0IE5vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbiBmcm9tICcuL05vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbic7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvd2l0aC1jdXN0b20tb3B0aW9ucycsXHJcblx0ZnVuY3Rpb24gKCByZXN0cmljdGlvbnMgKSB7XHJcblx0XHRyZXN0cmljdGlvbnMucHVzaCggTm90RW1wdHlBZHZhbmNlZFdpdGhDdXN0b21PcHRpb24gKTtcclxuXHJcblx0XHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvd2l0aC1jdXN0b20tb3B0aW9ucycsXHJcblx0ZnVuY3Rpb24gKCByZXN0cmljdGlvbnMgKSB7XHJcblx0XHRyZXN0cmljdGlvbnMucHVzaCggTm90RW1wdHlXaXRoQ3VzdG9tT3B0aW9uICk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3RyaWN0aW9ucztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==