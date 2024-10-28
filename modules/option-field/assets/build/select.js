/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/select/input.js":
/*!*****************************************!*\
  !*** ./frontend/blocks/select/input.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  InputData,
  ReactiveHook
} = JetFormBuilderAbstract;
function MultiSelectData() {
  InputData.call(this);
  function sanitizeValue(value) {
    if (Array.isArray(value)) {
      if (value.length === 1 && value[0] && value[0].includes(',')) {
        value = value[0].split(',');
      }
      return value;
    }
    return [value].filter(Boolean);
  }
  this.isSupported = function (node) {
    return 'select-multiple' === node?.type;
  };
  this.addListeners = function () {
    this.sanitize(value => Array.isArray(value) ? value : [value]);
    this.sanitize(sanitizeValue);
    const [node] = this.nodes;
    node.addEventListener('change', () => this.setValue());
    node.addEventListener('blur', () => this.reportOnBlur());
    this.enterKey = new ReactiveHook();
    node.addEventListener('keydown', this.handleEnterKey.bind(this));
  };
  this.setValue = function () {
    this.value.current = this.getActiveValue();
  };
  this.getActiveValue = function () {
    const [node] = this.nodes;
    return Array.from(node.options).filter(item => item.selected).map(item => item.value);
  };
  this.onClear = function () {
    this.silenceSet([]);
  };
}
MultiSelectData.prototype = Object.create(InputData.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelectData);

/***/ }),

/***/ "./frontend/blocks/select/signal.js":
/*!******************************************!*\
  !*** ./frontend/blocks/select/signal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;
function SignalSelect() {
  BaseSignal.call(this);
  this.isSupported = function (node, inputData) {
    return ['select-multiple', 'select-one'].includes(node?.type);
  };
  this.runSignal = function () {
    this.input.calcValue = 0;
    const [node] = this.input.nodes;
    const isMultiple = 'select-one' !== node?.type;
    const {
      value
    } = this.input;
    for (const option of node.options) {
      var _option$dataset$calcu;
      option.selected = isMultiple ? value.current?.includes(option.value) : option.value === value.current;
      if (!option.selected) {
        continue;
      }
      this.input.calcValue += parseFloat((_option$dataset$calcu = option.dataset?.calculate) !== null && _option$dataset$calcu !== void 0 ? _option$dataset$calcu : option.value);
    }
    this.triggerJQuery(node);
  };
}
SignalSelect.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalSelect);

/***/ }),

/***/ "./frontend/blocks/select/main.pcss":
/*!******************************************!*\
  !*** ./frontend/blocks/select/main.pcss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!****************************************!*\
  !*** ./frontend/blocks/select/main.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/blocks/select/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/blocks/select/signal.js");
/* harmony import */ var _main_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.pcss */ "./frontend/blocks/select/main.pcss");



const {
  addFilter
} = JetPlugins.hooks;
window.JetFormBuilderAbstract = {
  ...window.JetFormBuilderAbstract,
  MultiSelectData: _input__WEBPACK_IMPORTED_MODULE_0__["default"],
  SignalSelect: _signal__WEBPACK_IMPORTED_MODULE_1__["default"]
};
addFilter('jet.fb.inputs', 'jet-form-builder/select-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/select-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7OztBQ3BDQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3QvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3Qvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3Mvc2VsZWN0L21haW4ucGNzcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3QvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG5cdCAgICAgIFJlYWN0aXZlSG9vayxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBNdWx0aVNlbGVjdERhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0ZnVuY3Rpb24gc2FuaXRpemVWYWx1ZSggdmFsdWUgKSB7XHJcblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMSAmJiB2YWx1ZVswXSAmJiB2YWx1ZVswXS5pbmNsdWRlcygnLCcpICkge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbMF0uc3BsaXQoJywnKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gWyB2YWx1ZSBdLmZpbHRlcihcclxuXHRcdFx0Qm9vbGVhbixcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuICdzZWxlY3QtbXVsdGlwbGUnID09PSBub2RlPy50eXBlO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuc2FuaXRpemUoIHZhbHVlID0+IEFycmF5LmlzQXJyYXkoIHZhbHVlICkgPyB2YWx1ZSA6IFsgdmFsdWUgXSApO1xyXG5cclxuXHRcdHRoaXMuc2FuaXRpemUoIHNhbml0aXplVmFsdWUgKTtcclxuXHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRWYWx1ZSgpICk7XHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgKCkgPT4gdGhpcy5yZXBvcnRPbkJsdXIoKSApO1xyXG5cclxuXHRcdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0VmFsdWUgICAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XHJcblx0fTtcclxuXHR0aGlzLmdldEFjdGl2ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdHJldHVybiBBcnJheS5mcm9tKCBub2RlLm9wdGlvbnMgKS5cclxuXHRcdFx0ZmlsdGVyKCBpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgKS5cclxuXHRcdFx0bWFwKCBpdGVtID0+IGl0ZW0udmFsdWUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnNpbGVuY2VTZXQoIFtdICk7XHJcblx0fTtcclxufVxyXG5cclxuTXVsdGlTZWxlY3REYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpU2VsZWN0RGF0YTsiLCJjb25zdCB7XHJcblx0ICAgICAgQmFzZVNpZ25hbCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBTaWduYWxTZWxlY3QoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcclxuXHRcdHJldHVybiBbICdzZWxlY3QtbXVsdGlwbGUnLCAnc2VsZWN0LW9uZScgXS5pbmNsdWRlcyggbm9kZT8udHlwZSApO1xyXG5cdH07XHJcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gMDtcclxuXHRcdGNvbnN0IFsgbm9kZSBdICAgICAgID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHRcdGNvbnN0IGlzTXVsdGlwbGUgICAgID0gJ3NlbGVjdC1vbmUnICE9PSBub2RlPy50eXBlO1xyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ICAgICAgPSB0aGlzLmlucHV0O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG9wdGlvbiBvZiBub2RlLm9wdGlvbnMgKSB7XHJcblx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IGlzTXVsdGlwbGVcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgPyB2YWx1ZS5jdXJyZW50Py5pbmNsdWRlcyggb3B0aW9uLnZhbHVlIClcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgOiBvcHRpb24udmFsdWUgPT09IHZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0XHRpZiAoICFvcHRpb24uc2VsZWN0ZWQgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlICs9IHBhcnNlRmxvYXQoXHJcblx0XHRcdFx0b3B0aW9uLmRhdGFzZXQ/LmNhbGN1bGF0ZSA/PyBvcHRpb24udmFsdWUsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsU2VsZWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxTZWxlY3Q7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTXVsdGlTZWxlY3REYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsU2VsZWN0IGZyb20gJy4vc2lnbmFsJztcclxuaW1wb3J0ICcuL21haW4ucGNzcyc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxyXG5cdE11bHRpU2VsZWN0RGF0YSxcclxuXHRTaWduYWxTZWxlY3QsXHJcbn07XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3NlbGVjdC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIE11bHRpU2VsZWN0RGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvc2VsZWN0LWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxTZWxlY3QsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==