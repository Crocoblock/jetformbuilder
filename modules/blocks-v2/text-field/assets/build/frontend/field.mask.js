/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/field.mask/TextFieldMaskedData.js":
/*!****************************************************!*\
  !*** ./frontend/field.mask/TextFieldMaskedData.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  applyFilters
} = JetPlugins.hooks;
const {
  ReactiveHook,
  InputData
} = JetFormBuilderAbstract;

// eslint-disable-next-line max-lines-per-function
function TextFieldMaskedData() {
  InputData.call(this);
  this.maskOptions = {};
  this.clearOnSubmit = false;
  this.isSupported = function (node) {
    return node.classList.contains('jet-form-builder__masked-field') && jQuery.fn.inputmask;
  };
  this.addListeners = function () {
    const [node] = this.nodes;
    this.enterKey = new ReactiveHook();
    node.addEventListener('keydown', this.handleEnterKey.bind(this));
  };
  this.maskValidation = function () {
    const [node] = this.nodes;
    const {
      value
    } = node;
    this.value.current = node.inputmask.unmaskedvalue();
    setTimeout(() => {
      this.reporting.validateOnBlur();
    }, 0);
    this.silenceSet(value);
  };
  this.changeStateMaskValidation = function () {
    const [node] = this.nodes;
    this.value.current = node.inputmask.unmaskedvalue();
  };
  this.setNode = function (node) {
    var _node$dataset$clearMa;
    InputData.prototype.setNode.call(this, node);
    this.clearOnSubmit = (_node$dataset$clearMa = node.dataset.clearMaskOnSubmit) !== null && _node$dataset$clearMa !== void 0 ? _node$dataset$clearMa : false;
    const inputMaskOpts = this.clearOnSubmit ? {
      autoUnmask: true
    } : {};
    inputMaskOpts.oncomplete = this.maskValidation.bind(this);
    inputMaskOpts.onincomplete = this.maskValidation.bind(this);
    const options = applyFilters('jet.fb.inputmask.options', inputMaskOpts, this);
    jQuery(node).inputmask(options);
    this.beforeSubmit(this.removeMask.bind(this));
    this.getSubmit().onEndSubmit(this.revertMask.bind(this));
  };
  this.removeMask = function (resolve) {
    const $maskedField = jQuery(this.nodes[0]);
    this.maskOptions = $maskedField[0].inputmask.opts;

    // Remove mask if empty value
    if (!this.value.current || this.clearOnSubmit) {
      $maskedField.inputmask('remove');
      this.value.notify();
    }
    resolve();
  };
  this.revertMask = function () {
    const [node] = this.nodes;
    const opts = this.maskOptions;
    this.maskOptions = {};
    if (node.inputmask) {
      return;
    }
    jQuery(node).inputmask(opts);
  };
  this.onClear = function () {
    this.silenceSet('');
  };
}
TextFieldMaskedData.prototype = Object.create(InputData.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextFieldMaskedData);

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
/*!**************************************!*\
  !*** ./frontend/field.mask/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextFieldMaskedData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextFieldMaskedData */ "./frontend/field.mask/TextFieldMaskedData.js");

const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/text-field-masked', function (inputs) {
  inputs = [_TextFieldMaskedData__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZmllbGQubWFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi10ZXh0LWZpZWxkLy4vZnJvbnRlbmQvZmllbGQubWFzay9UZXh0RmllbGRNYXNrZWREYXRhLmpzIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvLi9mcm9udGVuZC9maWVsZC5tYXNrL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCB7XG5cdFJlYWN0aXZlSG9vayxcblx0SW5wdXREYXRhLFxufSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBUZXh0RmllbGRNYXNrZWREYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubWFza09wdGlvbnMgICA9IHt9O1xuXHR0aGlzLmNsZWFyT25TdWJtaXQgPSBmYWxzZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXJfX21hc2tlZC1maWVsZCcgKSAmJlxuXHRcdFx0alF1ZXJ5LmZuLmlucHV0bWFza1xuXHRcdCk7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApICk7XG5cdH07XG5cdHRoaXMubWFza1ZhbGlkYXRpb24gPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gbm9kZTtcblxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG5vZGUuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcblxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25CbHVyKCk7XG5cdFx0fSwgMCApO1xuXG5cdFx0dGhpcy5zaWxlbmNlU2V0KCB2YWx1ZSApO1xuXHR9O1xuXHR0aGlzLmNoYW5nZVN0YXRlTWFza1ZhbGlkYXRpb24gPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBub2RlLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cblx0XHR0aGlzLmNsZWFyT25TdWJtaXQgPSBub2RlLmRhdGFzZXQuY2xlYXJNYXNrT25TdWJtaXQgPz8gZmFsc2U7XG5cblx0XHRjb25zdCBpbnB1dE1hc2tPcHRzID0gdGhpcy5jbGVhck9uU3VibWl0ID8geyBhdXRvVW5tYXNrOiB0cnVlIH0gOiB7fTtcblxuXHRcdGlucHV0TWFza09wdHMub25jb21wbGV0ZSAgID0gdGhpcy5tYXNrVmFsaWRhdGlvbi5iaW5kKCB0aGlzICk7XG5cdFx0aW5wdXRNYXNrT3B0cy5vbmluY29tcGxldGUgPSB0aGlzLm1hc2tWYWxpZGF0aW9uLmJpbmQoIHRoaXMgKTtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIuaW5wdXRtYXNrLm9wdGlvbnMnLCBpbnB1dE1hc2tPcHRzLCB0aGlzICk7XG5cblx0XHRqUXVlcnkoIG5vZGUgKS5pbnB1dG1hc2soIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMuYmVmb3JlU3VibWl0KCB0aGlzLnJlbW92ZU1hc2suYmluZCggdGhpcyApICk7XG5cdFx0dGhpcy5nZXRTdWJtaXQoKS5vbkVuZFN1Ym1pdCggdGhpcy5yZXZlcnRNYXNrLmJpbmQoIHRoaXMgKSApO1xuXHR9O1xuXHR0aGlzLnJlbW92ZU1hc2sgICA9IGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblx0XHRjb25zdCAkbWFza2VkRmllbGQgPSBqUXVlcnkoIHRoaXMubm9kZXNbIDAgXSApO1xuXHRcdHRoaXMubWFza09wdGlvbnMgICA9ICRtYXNrZWRGaWVsZFswXS5pbnB1dG1hc2sub3B0cztcblxuXHRcdC8vIFJlbW92ZSBtYXNrIGlmIGVtcHR5IHZhbHVlXG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50IHx8IHRoaXMuY2xlYXJPblN1Ym1pdCApIHtcblx0XHRcdCRtYXNrZWRGaWVsZC5pbnB1dG1hc2soICdyZW1vdmUnICk7XG5cdFx0XHR0aGlzLnZhbHVlLm5vdGlmeSgpO1xuXHRcdH1cblxuXHRcdHJlc29sdmUoKTtcblx0fTtcblx0dGhpcy5yZXZlcnRNYXNrICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gICA9IHRoaXMubm9kZXM7XG5cdFx0Y29uc3Qgb3B0cyAgICAgICA9IHRoaXMubWFza09wdGlvbnM7XG5cdFx0dGhpcy5tYXNrT3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKCBub2RlLmlucHV0bWFzayApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRqUXVlcnkoIG5vZGUgKS5pbnB1dG1hc2soIG9wdHMgKTtcblx0fTtcblxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5zaWxlbmNlU2V0KCAnJyApO1xuXHR9O1xuXG59XG5cblRleHRGaWVsZE1hc2tlZERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0RmllbGRNYXNrZWREYXRhOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRleHRGaWVsZE1hc2tlZERhdGEgZnJvbSBcIi4vVGV4dEZpZWxkTWFza2VkRGF0YVwiO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3RleHQtZmllbGQtbWFza2VkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBUZXh0RmllbGRNYXNrZWREYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH1cbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9