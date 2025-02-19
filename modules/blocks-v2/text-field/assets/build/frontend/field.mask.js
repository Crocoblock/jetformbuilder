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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZmllbGQubWFzay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvLi9mcm9udGVuZC9maWVsZC5tYXNrL1RleHRGaWVsZE1hc2tlZERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC8uL2Zyb250ZW5kL2ZpZWxkLm1hc2svaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0UmVhY3RpdmVIb29rLFxyXG5cdElucHV0RGF0YSxcclxufSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBUZXh0RmllbGRNYXNrZWREYXRhKCkge1xyXG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMubWFza09wdGlvbnMgICA9IHt9O1xyXG5cdHRoaXMuY2xlYXJPblN1Ym1pdCA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0bm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyX19tYXNrZWQtZmllbGQnICkgJiZcclxuXHRcdFx0alF1ZXJ5LmZuLmlucHV0bWFza1xyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmhhbmRsZUF1dG9maWxsLmJpbmQodGhpcywgbm9kZSkpO1xyXG5cdH07XHJcblx0dGhpcy5oYW5kbGVBdXRvZmlsbCA9IGZ1bmN0aW9uKG5vZGUpIHtcclxuXHRcdGlmIChub2RlICYmIG5vZGUuaW5wdXRtYXNrKSB7IFxyXG5cdFx0XHRub2RlLmlucHV0bWFzay5zZXRWYWx1ZShub2RlLnZhbHVlKTtcclxuXHRcdFx0dGhpcy5tYXNrVmFsaWRhdGlvbigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0dGhpcy5tYXNrVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gbm9kZTtcclxuXHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBub2RlLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlcG9ydGluZy52YWxpZGF0ZU9uQmx1cigpO1xyXG5cdFx0fSwgMCApO1xyXG5cclxuXHRcdHRoaXMuc2lsZW5jZVNldCggdmFsdWUgKTtcclxuXHR9O1xyXG5cdHRoaXMuY2hhbmdlU3RhdGVNYXNrVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG5vZGUuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHJcblx0XHR0aGlzLmNsZWFyT25TdWJtaXQgPSBub2RlLmRhdGFzZXQuY2xlYXJNYXNrT25TdWJtaXQgPz8gZmFsc2U7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRNYXNrT3B0cyA9IHRoaXMuY2xlYXJPblN1Ym1pdCA/IHsgYXV0b1VubWFzazogdHJ1ZSB9IDoge307XHJcblxyXG5cdFx0aW5wdXRNYXNrT3B0cy5vbmNvbXBsZXRlICAgPSB0aGlzLm1hc2tWYWxpZGF0aW9uLmJpbmQoIHRoaXMgKTtcclxuXHRcdGlucHV0TWFza09wdHMub25pbmNvbXBsZXRlID0gdGhpcy5tYXNrVmFsaWRhdGlvbi5iaW5kKCB0aGlzICk7XHJcblxyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5pbnB1dG1hc2sub3B0aW9ucycsIGlucHV0TWFza09wdHMsIHRoaXMgKTtcclxuXHJcblx0XHRqUXVlcnkoIG5vZGUgKS5pbnB1dG1hc2soIG9wdGlvbnMgKTtcclxuXHJcblx0XHQvLyBSZXN0b3JlIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIG5hdmlnYXRpbmcgYmFjayB0byB0aGUgZm9ybSBwYWdlLlxyXG5cdFx0Ly8gSW5wdXRtYXNrIG1heSB2aXN1YWxseSByZXRhaW4gdGhlIHZhbHVlLCBidXQgdGhlIGFjdHVhbCBpbnB1dCBmaWVsZCByZW1haW5zIGVtcHR5LlxyXG5cdFx0aWYgKG5vZGUuaW5wdXRtYXNrKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHNhdmVkVmFsdWUgPSBub2RlLmlucHV0bWFzay5fdmFsdWVHZXQoKTtcclxuXHRcdFx0XHRjb25zdCBlbXB0eU1hc2sgID0gbm9kZS5pbnB1dG1hc2suZ2V0ZW1wdHltYXNrKCk7XHJcblx0XHRcdFx0aWYgKHNhdmVkVmFsdWUgJiYgc2F2ZWRWYWx1ZSAhPT0gZW1wdHlNYXNrKSB7XHJcblx0XHRcdFx0XHRub2RlLnZhbHVlID0gc2F2ZWRWYWx1ZTtcclxuXHRcdFx0XHRcdGpRdWVyeShub2RlKS50cmlnZ2VyKCdpbnB1dCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHRoaXMuYmVmb3JlU3VibWl0KCB0aGlzLnJlbW92ZU1hc2suYmluZCggdGhpcyApICk7XHJcblx0XHR0aGlzLmdldFN1Ym1pdCgpLm9uRW5kU3VibWl0KCB0aGlzLnJldmVydE1hc2suYmluZCggdGhpcyApICk7XHJcblx0fTtcclxuXHR0aGlzLnJlbW92ZU1hc2sgICA9IGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcclxuXHRcdGNvbnN0ICRtYXNrZWRGaWVsZCA9IGpRdWVyeSggdGhpcy5ub2Rlc1sgMCBdICk7XHJcblx0XHR0aGlzLm1hc2tPcHRpb25zICAgPSAkbWFza2VkRmllbGRbMF0uaW5wdXRtYXNrLm9wdHM7XHJcblxyXG5cdFx0Ly8gUmVtb3ZlIG1hc2sgaWYgZW1wdHkgdmFsdWVcclxuXHRcdGlmICggIXRoaXMudmFsdWUuY3VycmVudCB8fCB0aGlzLmNsZWFyT25TdWJtaXQgKSB7XHJcblx0XHRcdCRtYXNrZWRGaWVsZC5pbnB1dG1hc2soICdyZW1vdmUnICk7XHJcblx0XHRcdHRoaXMudmFsdWUubm90aWZ5KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVzb2x2ZSgpO1xyXG5cdH07XHJcblx0dGhpcy5yZXZlcnRNYXNrICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSAgID0gdGhpcy5ub2RlcztcclxuXHRcdGNvbnN0IG9wdHMgICAgICAgPSB0aGlzLm1hc2tPcHRpb25zO1xyXG5cdFx0dGhpcy5tYXNrT3B0aW9ucyA9IHt9O1xyXG5cclxuXHRcdGlmICggbm9kZS5pbnB1dG1hc2sgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRqUXVlcnkoIG5vZGUgKS5pbnB1dG1hc2soIG9wdHMgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnNpbGVuY2VTZXQoICcnICk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcblRleHRGaWVsZE1hc2tlZERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkTWFza2VkRGF0YTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUZXh0RmllbGRNYXNrZWREYXRhIGZyb20gXCIuL1RleHRGaWVsZE1hc2tlZERhdGFcIjtcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci90ZXh0LWZpZWxkLW1hc2tlZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIFRleHRGaWVsZE1hc2tlZERhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fVxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==