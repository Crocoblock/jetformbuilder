/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/field.mask/TextFieldMaskedData.js"
/*!****************************************************!*\
  !*** ./frontend/field.mask/TextFieldMaskedData.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    node.addEventListener('input', this.handleAutofill.bind(this, node));
  };
  this.handleAutofill = function (node) {
    if (node && node.inputmask) {
      node.inputmask.setValue(node.value);
      this.maskValidation();
    }
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

    // Restore the input value when navigating back to the form page.
    // Inputmask may visually retain the value, but the actual input field remains empty.
    if (node.inputmask) {
      setTimeout(() => {
        const savedValue = node.inputmask._valueGet();
        const emptyMask = node.inputmask.getemptymask();
        if (savedValue && savedValue !== emptyMask) {
          node.value = savedValue;
          jQuery(node).trigger('input');
        }
      }, 0);
    }
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

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZmllbGQubWFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvLi9mcm9udGVuZC9maWVsZC5tYXNrL1RleHRGaWVsZE1hc2tlZERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC8uL2Zyb250ZW5kL2ZpZWxkLm1hc2svaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IHtcblx0UmVhY3RpdmVIb29rLFxuXHRJbnB1dERhdGEsXG59ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFRleHRGaWVsZE1hc2tlZERhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5tYXNrT3B0aW9ucyAgID0ge307XG5cdHRoaXMuY2xlYXJPblN1Ym1pdCA9IGZhbHNlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlcl9fbWFza2VkLWZpZWxkJyApICYmXG5cdFx0XHRqUXVlcnkuZm4uaW5wdXRtYXNrXG5cdFx0KTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5oYW5kbGVBdXRvZmlsbC5iaW5kKHRoaXMsIG5vZGUpKTtcblx0fTtcblx0dGhpcy5oYW5kbGVBdXRvZmlsbCA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRpZiAobm9kZSAmJiBub2RlLmlucHV0bWFzaykgeyBcblx0XHRcdG5vZGUuaW5wdXRtYXNrLnNldFZhbHVlKG5vZGUudmFsdWUpO1xuXHRcdFx0dGhpcy5tYXNrVmFsaWRhdGlvbigpO1xuXHRcdH1cblx0fTtcblx0dGhpcy5tYXNrVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2Rlcztcblx0XHRjb25zdCB7IHZhbHVlIH0gPSBub2RlO1xuXG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbm9kZS5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkJsdXIoKTtcblx0XHR9LCAwICk7XG5cblx0XHR0aGlzLnNpbGVuY2VTZXQoIHZhbHVlICk7XG5cdH07XG5cdHRoaXMuY2hhbmdlU3RhdGVNYXNrVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG5vZGUuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcblx0fTtcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblxuXHRcdHRoaXMuY2xlYXJPblN1Ym1pdCA9IG5vZGUuZGF0YXNldC5jbGVhck1hc2tPblN1Ym1pdCA/PyBmYWxzZTtcblxuXHRcdGNvbnN0IGlucHV0TWFza09wdHMgPSB0aGlzLmNsZWFyT25TdWJtaXQgPyB7IGF1dG9Vbm1hc2s6IHRydWUgfSA6IHt9O1xuXG5cdFx0aW5wdXRNYXNrT3B0cy5vbmNvbXBsZXRlICAgPSB0aGlzLm1hc2tWYWxpZGF0aW9uLmJpbmQoIHRoaXMgKTtcblx0XHRpbnB1dE1hc2tPcHRzLm9uaW5jb21wbGV0ZSA9IHRoaXMubWFza1ZhbGlkYXRpb24uYmluZCggdGhpcyApO1xuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5pbnB1dG1hc2sub3B0aW9ucycsIGlucHV0TWFza09wdHMsIHRoaXMgKTtcblxuXHRcdGpRdWVyeSggbm9kZSApLmlucHV0bWFzayggb3B0aW9ucyApO1xuXG5cdFx0Ly8gUmVzdG9yZSB0aGUgaW5wdXQgdmFsdWUgd2hlbiBuYXZpZ2F0aW5nIGJhY2sgdG8gdGhlIGZvcm0gcGFnZS5cblx0XHQvLyBJbnB1dG1hc2sgbWF5IHZpc3VhbGx5IHJldGFpbiB0aGUgdmFsdWUsIGJ1dCB0aGUgYWN0dWFsIGlucHV0IGZpZWxkIHJlbWFpbnMgZW1wdHkuXG5cdFx0aWYgKG5vZGUuaW5wdXRtYXNrKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Y29uc3Qgc2F2ZWRWYWx1ZSA9IG5vZGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpO1xuXHRcdFx0XHRjb25zdCBlbXB0eU1hc2sgID0gbm9kZS5pbnB1dG1hc2suZ2V0ZW1wdHltYXNrKCk7XG5cdFx0XHRcdGlmIChzYXZlZFZhbHVlICYmIHNhdmVkVmFsdWUgIT09IGVtcHR5TWFzaykge1xuXHRcdFx0XHRcdG5vZGUudmFsdWUgPSBzYXZlZFZhbHVlO1xuXHRcdFx0XHRcdGpRdWVyeShub2RlKS50cmlnZ2VyKCdpbnB1dCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cblxuXHRcdHRoaXMuYmVmb3JlU3VibWl0KCB0aGlzLnJlbW92ZU1hc2suYmluZCggdGhpcyApICk7XG5cdFx0dGhpcy5nZXRTdWJtaXQoKS5vbkVuZFN1Ym1pdCggdGhpcy5yZXZlcnRNYXNrLmJpbmQoIHRoaXMgKSApO1xuXHR9O1xuXHR0aGlzLnJlbW92ZU1hc2sgICA9IGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblx0XHRjb25zdCAkbWFza2VkRmllbGQgPSBqUXVlcnkoIHRoaXMubm9kZXNbIDAgXSApO1xuXHRcdHRoaXMubWFza09wdGlvbnMgICA9ICRtYXNrZWRGaWVsZFswXS5pbnB1dG1hc2sub3B0cztcblxuXHRcdC8vIFJlbW92ZSBtYXNrIGlmIGVtcHR5IHZhbHVlXG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50IHx8IHRoaXMuY2xlYXJPblN1Ym1pdCApIHtcblx0XHRcdCRtYXNrZWRGaWVsZC5pbnB1dG1hc2soICdyZW1vdmUnICk7XG5cdFx0XHR0aGlzLnZhbHVlLm5vdGlmeSgpO1xuXHRcdH1cblxuXHRcdHJlc29sdmUoKTtcblx0fTtcblx0dGhpcy5yZXZlcnRNYXNrICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gICA9IHRoaXMubm9kZXM7XG5cdFx0Y29uc3Qgb3B0cyAgICAgICA9IHRoaXMubWFza09wdGlvbnM7XG5cdFx0dGhpcy5tYXNrT3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKCBub2RlLmlucHV0bWFzayApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRqUXVlcnkoIG5vZGUgKS5pbnB1dG1hc2soIG9wdHMgKTtcblx0fTtcblxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5zaWxlbmNlU2V0KCAnJyApO1xuXHR9O1xuXG59XG5cblRleHRGaWVsZE1hc2tlZERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0RmllbGRNYXNrZWREYXRhOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGV4dEZpZWxkTWFza2VkRGF0YSBmcm9tIFwiLi9UZXh0RmllbGRNYXNrZWREYXRhXCI7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvdGV4dC1maWVsZC1tYXNrZWQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIFRleHRGaWVsZE1hc2tlZERhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fVxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=