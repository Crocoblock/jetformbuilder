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

    /**
     * convert string to array for setting dynamic multi value
     *
     * @see https://github.com/Crocoblock/issues-tracker/issues/8509
     */
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7O0FDcENBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3QvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3Qvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3Mvc2VsZWN0L21haW4ucGNzcz8wNTg4Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3NlbGVjdC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcblx0ICAgICAgSW5wdXREYXRhLFxuXHQgICAgICBSZWFjdGl2ZUhvb2ssXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gTXVsdGlTZWxlY3REYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdGZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlICkge1xuXHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblxuXHRcdFx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWVbMF0gJiYgdmFsdWVbMF0uaW5jbHVkZXMoJywnKSApIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZVswXS5zcGxpdCgnLCcpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFsgdmFsdWUgXS5maWx0ZXIoXG5cdFx0XHRCb29sZWFuLFxuXHRcdCk7XG5cdH1cblxuXHR0aGlzLmlzU3VwcG9ydGVkICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAnc2VsZWN0LW11bHRpcGxlJyA9PT0gbm9kZT8udHlwZTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnNhbml0aXplKCB2YWx1ZSA9PiBBcnJheS5pc0FycmF5KCB2YWx1ZSApID8gdmFsdWUgOiBbIHZhbHVlIF0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIGNvbnZlcnQgc3RyaW5nIHRvIGFycmF5IGZvciBzZXR0aW5nIGR5bmFtaWMgbXVsdGkgdmFsdWVcblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzg1MDlcblx0XHQgKi9cblx0XHR0aGlzLnNhbml0aXplKCBzYW5pdGl6ZVZhbHVlICk7XG5cblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldFZhbHVlKCkgKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgKCkgPT4gdGhpcy5yZXBvcnRPbkJsdXIoKSApO1xuXG5cdFx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcblx0fTtcblx0dGhpcy5zZXRWYWx1ZSAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XG5cdH07XG5cdHRoaXMuZ2V0QWN0aXZlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIG5vZGUub3B0aW9ucyApLlxuXHRcdFx0ZmlsdGVyKCBpdGVtID0+IGl0ZW0uc2VsZWN0ZWQgKS5cblx0XHRcdG1hcCggaXRlbSA9PiBpdGVtLnZhbHVlICk7XG5cdH07XG5cblx0dGhpcy5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuc2lsZW5jZVNldCggW10gKTtcblx0fTtcbn1cblxuTXVsdGlTZWxlY3REYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3REYXRhOyIsImNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBTaWduYWxTZWxlY3QoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0XHRyZXR1cm4gWyAnc2VsZWN0LW11bHRpcGxlJywgJ3NlbGVjdC1vbmUnIF0uaW5jbHVkZXMoIG5vZGU/LnR5cGUgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IDA7XG5cdFx0Y29uc3QgWyBub2RlIF0gICAgICAgPSB0aGlzLmlucHV0Lm5vZGVzO1xuXHRcdGNvbnN0IGlzTXVsdGlwbGUgICAgID0gJ3NlbGVjdC1vbmUnICE9PSBub2RlPy50eXBlO1xuXHRcdGNvbnN0IHsgdmFsdWUgfSAgICAgID0gdGhpcy5pbnB1dDtcblxuXHRcdGZvciAoIGNvbnN0IG9wdGlvbiBvZiBub2RlLm9wdGlvbnMgKSB7XG5cdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBpc011bHRpcGxlXG5cdFx0XHQgICAgICAgICAgICAgICAgICA/IHZhbHVlLmN1cnJlbnQ/LmluY2x1ZGVzKCBvcHRpb24udmFsdWUgKVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgOiBvcHRpb24udmFsdWUgPT09IHZhbHVlLmN1cnJlbnQ7XG5cblx0XHRcdGlmICggIW9wdGlvbi5zZWxlY3RlZCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlICs9IHBhcnNlRmxvYXQoXG5cdFx0XHRcdG9wdGlvbi5kYXRhc2V0Py5jYWxjdWxhdGUgPz8gb3B0aW9uLnZhbHVlLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcblx0fTtcbn1cblxuU2lnbmFsU2VsZWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFNlbGVjdDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNdWx0aVNlbGVjdERhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsU2VsZWN0IGZyb20gJy4vc2lnbmFsJztcbmltcG9ydCAnLi9tYWluLnBjc3MnO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxuXHRNdWx0aVNlbGVjdERhdGEsXG5cdFNpZ25hbFNlbGVjdCxcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9zZWxlY3QtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIE11bHRpU2VsZWN0RGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9zZWxlY3QtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsU2VsZWN0LCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9