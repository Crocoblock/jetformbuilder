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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2N1c3RvbS5vcHRpb25zLnJlc3RyaWN0aW9ucy9Ob3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zL05vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvY3VzdG9tLm9wdGlvbnMucmVzdHJpY3Rpb25zL2lzTm90RW1wdHkuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9jdXN0b20ub3B0aW9ucy5yZXN0cmljdGlvbnMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNOb3RFbXB0eSBmcm9tICcuL2lzTm90RW1wdHknO1xuXG5jb25zdCB7XG5cdCAgICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24gPSBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBOb3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy50eXBlID0gJ3JlcXVpcmVkJztcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkICYmXG5cdFx0XHRbICdyYWRpbycsICdjaGVja2JveCcgXS5pbmNsdWRlcyggcmVwb3J0aW5nLmlucHV0LmlucHV0VHlwZSApXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBpc05vdEVtcHR5KCB0aGlzLnJlcG9ydGluZy5pbnB1dCApO1xuXHR9O1xuXG5cdHRoaXMuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZW1wdHknICk7XG5cdH07XG59XG5cbk5vdEVtcHR5QWR2YW5jZWRXaXRoQ3VzdG9tT3B0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90RW1wdHlBZHZhbmNlZFdpdGhDdXN0b21PcHRpb247IiwiaW1wb3J0IGlzTm90RW1wdHkgZnJvbSAnLi9pc05vdEVtcHR5JztcblxuY29uc3Qge1xuXHQgICAgICBSZXN0cmljdGlvbixcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBOb3RFbXB0eVdpdGhDdXN0b21PcHRpb24oKSB7XG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLnR5cGUgPSAncmVxdWlyZWQnO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0cmVwb3J0aW5nLmlucHV0LmlzUmVxdWlyZWQgJiZcblx0XHRcdFsgJ3JhZGlvJywgJ2NoZWNrYm94JyBdLmluY2x1ZGVzKCByZXBvcnRpbmcuaW5wdXQuaW5wdXRUeXBlIClcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGlzTm90RW1wdHkoIHRoaXMucmVwb3J0aW5nLmlucHV0ICk7XG5cdH07XG59XG5cbk5vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRSZXN0cmljdGlvbi5wcm90b3R5cGUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RFbXB0eVdpdGhDdXN0b21PcHRpb247IiwiY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5jb25zdCBpc05vdEVtcHR5U2luZ2xlID0gdmFsdWUgPT4gKFxuXHQnYm9vbGVhbicgIT09IHR5cGVvZiB2YWx1ZSAmJiAhaXNFbXB0eSggdmFsdWUgKVxuKTtcblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cbiAqL1xuZnVuY3Rpb24gaXNOb3RFbXB0eSggaW5wdXQgKSB7XG5cdGNvbnN0IHZhbHVlID0gaW5wdXQuZ2V0VmFsdWUoKTtcblxuXHRpZiAoICFpbnB1dC5pc0FycmF5KCkgKSB7XG5cdFx0cmV0dXJuIGlzTm90RW1wdHlTaW5nbGUoIHZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWUuc29tZSggaXNOb3RFbXB0eVNpbmdsZSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc05vdEVtcHR5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE5vdEVtcHR5QWR2YW5jZWRXaXRoQ3VzdG9tT3B0aW9uXG5cdGZyb20gJy4vTm90RW1wdHlBZHZhbmNlZFdpdGhDdXN0b21PcHRpb24nO1xuaW1wb3J0IE5vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbiBmcm9tICcuL05vdEVtcHR5V2l0aEN1c3RvbU9wdGlvbic7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvd2l0aC1jdXN0b20tb3B0aW9ucycsXG5cdGZ1bmN0aW9uICggcmVzdHJpY3Rpb25zICkge1xuXHRcdHJlc3RyaWN0aW9ucy5wdXNoKCBOb3RFbXB0eUFkdmFuY2VkV2l0aEN1c3RvbU9wdGlvbiApO1xuXG5cdFx0cmV0dXJuIHJlc3RyaWN0aW9ucztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3dpdGgtY3VzdG9tLW9wdGlvbnMnLFxuXHRmdW5jdGlvbiAoIHJlc3RyaWN0aW9ucyApIHtcblx0XHRyZXN0cmljdGlvbnMucHVzaCggTm90RW1wdHlXaXRoQ3VzdG9tT3B0aW9uICk7XG5cblx0XHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xuXHR9LFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=