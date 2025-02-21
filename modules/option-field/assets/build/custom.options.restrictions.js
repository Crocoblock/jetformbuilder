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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9jdXN0b20ub3B0aW9ucy5yZXN0cmljdGlvbnMvTm90RW1wdHlBZHZhbmNlZFdpdGhDdXN0b21PcHRpb24uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2N1c3RvbS5vcHRpb25zLnJlc3RyaWN0aW9ucy9Ob3RFbXB0eVdpdGhDdXN0b21PcHRpb24uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2N1c3RvbS5vcHRpb25zLnJlc3RyaWN0aW9ucy9pc05vdEVtcHR5LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzTm90RW1wdHkgZnJvbSAnLi9pc05vdEVtcHR5JztcblxuY29uc3Qge1xuXHQgICAgICBBZHZhbmNlZFJlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCkge30sXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gTm90RW1wdHlBZHZhbmNlZFdpdGhDdXN0b21PcHRpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMudHlwZSA9ICdyZXF1aXJlZCc7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRyZXBvcnRpbmcuaW5wdXQuaXNSZXF1aXJlZCAmJlxuXHRcdFx0WyAncmFkaW8nLCAnY2hlY2tib3gnIF0uaW5jbHVkZXMoIHJlcG9ydGluZy5pbnB1dC5pbnB1dFR5cGUgKVxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gaXNOb3RFbXB0eSggdGhpcy5yZXBvcnRpbmcuaW5wdXQgKTtcblx0fTtcblxuXHR0aGlzLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2VtcHR5JyApO1xuXHR9O1xufVxuXG5Ob3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEVtcHR5QWR2YW5jZWRXaXRoQ3VzdG9tT3B0aW9uOyIsImltcG9ydCBpc05vdEVtcHR5IGZyb20gJy4vaXNOb3RFbXB0eSc7XG5cbmNvbnN0IHtcblx0ICAgICAgUmVzdHJpY3Rpb24sXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gTm90RW1wdHlXaXRoQ3VzdG9tT3B0aW9uKCkge1xuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy50eXBlID0gJ3JlcXVpcmVkJztcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkICYmXG5cdFx0XHRbICdyYWRpbycsICdjaGVja2JveCcgXS5pbmNsdWRlcyggcmVwb3J0aW5nLmlucHV0LmlucHV0VHlwZSApXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpc05vdEVtcHR5KCB0aGlzLnJlcG9ydGluZy5pbnB1dCApO1xuXHR9O1xufVxuXG5Ob3RFbXB0eVdpdGhDdXN0b21PcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0UmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90RW1wdHlXaXRoQ3VzdG9tT3B0aW9uOyIsImNvbnN0IHtcblx0ICAgICAgaXNFbXB0eSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuY29uc3QgaXNOb3RFbXB0eVNpbmdsZSA9IHZhbHVlID0+IChcblx0J2Jvb2xlYW4nICE9PSB0eXBlb2YgdmFsdWUgJiYgIWlzRW1wdHkoIHZhbHVlIClcbik7XG5cbi8qKlxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG4gKi9cbmZ1bmN0aW9uIGlzTm90RW1wdHkoIGlucHV0ICkge1xuXHRjb25zdCB2YWx1ZSA9IGlucHV0LmdldFZhbHVlKCk7XG5cblx0aWYgKCAhaW5wdXQuaXNBcnJheSgpICkge1xuXHRcdHJldHVybiBpc05vdEVtcHR5U2luZ2xlKCB2YWx1ZSApO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnNvbWUoIGlzTm90RW1wdHlTaW5nbGUgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNOb3RFbXB0eTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBOb3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvblxuXHRmcm9tICcuL05vdEVtcHR5QWR2YW5jZWRXaXRoQ3VzdG9tT3B0aW9uJztcbmltcG9ydCBOb3RFbXB0eVdpdGhDdXN0b21PcHRpb24gZnJvbSAnLi9Ob3RFbXB0eVdpdGhDdXN0b21PcHRpb24nO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3dpdGgtY3VzdG9tLW9wdGlvbnMnLFxuXHRmdW5jdGlvbiAoIHJlc3RyaWN0aW9ucyApIHtcblx0XHRyZXN0cmljdGlvbnMucHVzaCggTm90RW1wdHlBZHZhbmNlZFdpdGhDdXN0b21PcHRpb24gKTtcblxuXHRcdHJldHVybiByZXN0cmljdGlvbnM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zLmRlZmF1bHQnLFxuXHQnamV0LWZvcm0tYnVpbGRlci93aXRoLWN1c3RvbS1vcHRpb25zJyxcblx0ZnVuY3Rpb24gKCByZXN0cmljdGlvbnMgKSB7XG5cdFx0cmVzdHJpY3Rpb25zLnB1c2goIE5vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbiApO1xuXG5cdFx0cmV0dXJuIHJlc3RyaWN0aW9ucztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9