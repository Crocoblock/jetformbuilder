/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./turnstile/frontend/observableHandle.js":
/*!************************************************!*\
  !*** ./turnstile/frontend/observableHandle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  applyFilters
} = JetPlugins.hooks;

/**
 * @param observable {Observable}
 */
function observableHandle(observable) {
  var _window$JetFormBuilde;
  if (observable.parent) {
    return;
  }

  /**
   * @type {null|InputData}
   */
  const token = observable.getInput('_captcha_token');
  const formID = observable.getSubmit().getFormId();
  const container = token?.nodes?.[0]?.parentElement;
  let options = (_window$JetFormBuilde = window?.JetFormBuilderCaptchaConfig?.[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;
  if (!container || !options) {
    return;
  }

  // for correct applying validation logic
  token.isVisible = () => true;
  options.callback = responseHash => {
    if (token?.nodes?.length) {
      token.nodes.forEach(node => {
        if (node && node.name === '_captcha_token') {
          node.value = responseHash;
        }
      });
    }
    token.value.current = responseHash;
  };
  options = applyFilters('jet.fb.turnstile.options', options, observable);
  const widgetID = window.turnstile.render(container, options);
  observable.getSubmit().submitter?.status?.watch?.(() => {
    window.turnstile.reset(widgetID);
    if (token?.nodes?.length) {
      token.nodes.forEach(node => {
        if (node && node.name === '_captcha_token') {
          node.value = '';
        }
      });
    }
    token.onClear();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);

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
/*!************************************!*\
  !*** ./turnstile/frontend/main.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ "./turnstile/frontend/observableHandle.js");

window.jfbTurnstileOnLoad = function () {
  const {
    addAction
  } = JetPlugins.hooks;
  for (const observable of Object.values(window.JetFormBuilder)) {
    if (!observable.hasOwnProperty('isObserved')) {
      continue;
    }
    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__["default"])(observable);
  }
  addAction('jet.fb.observe.after', 'jet-form-builder/turnstile', _observableHandle__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVybnN0aWxlL2Zyb250ZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi90dXJuc3RpbGUvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vdHVybnN0aWxlL2Zyb250ZW5kL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICkge1xyXG5cdGlmICggb2JzZXJ2YWJsZS5wYXJlbnQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7bnVsbHxJbnB1dERhdGF9XHJcblx0ICovXHJcblx0Y29uc3QgdG9rZW4gICAgID0gb2JzZXJ2YWJsZS5nZXRJbnB1dCggJ19jYXB0Y2hhX3Rva2VuJyApO1xyXG5cdGNvbnN0IGZvcm1JRCAgICA9IG9ic2VydmFibGUuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XHJcblx0Y29uc3QgY29udGFpbmVyID0gdG9rZW4/Lm5vZGVzPy5bIDAgXT8ucGFyZW50RWxlbWVudDtcclxuXHJcblx0bGV0IG9wdGlvbnMgPSAoXHJcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxyXG5cdCk7XHJcblxyXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBjb3JyZWN0IGFwcGx5aW5nIHZhbGlkYXRpb24gbG9naWNcclxuXHR0b2tlbi5pc1Zpc2libGUgPSAoKSA9PiB0cnVlO1xyXG5cclxuXHRvcHRpb25zLmNhbGxiYWNrID0gKCByZXNwb25zZUhhc2ggKSA9PiB7XHJcblx0XHRpZiAoIHRva2VuPy5ub2Rlcz8ubGVuZ3RoICkge1xyXG5cdFx0XHR0b2tlbi5ub2Rlcy5mb3JFYWNoKCBub2RlID0+IHtcclxuXHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS5uYW1lID09PSAnX2NhcHRjaGFfdG9rZW4nICkge1xyXG5cdFx0XHRcdFx0bm9kZS52YWx1ZSA9IHJlc3BvbnNlSGFzaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0dG9rZW4udmFsdWUuY3VycmVudCA9IHJlc3BvbnNlSGFzaDtcclxuXHR9O1xyXG5cclxuXHRvcHRpb25zID0gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0J2pldC5mYi50dXJuc3RpbGUub3B0aW9ucycsXHJcblx0XHRvcHRpb25zLFxyXG5cdFx0b2JzZXJ2YWJsZSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCB3aWRnZXRJRCA9IHdpbmRvdy50dXJuc3RpbGUucmVuZGVyKCBjb250YWluZXIsIG9wdGlvbnMgKTtcclxuXHJcblx0b2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5zdWJtaXR0ZXI/LnN0YXR1cz8ud2F0Y2g/LiggKCkgPT4ge1xyXG5cdFx0d2luZG93LnR1cm5zdGlsZS5yZXNldCggd2lkZ2V0SUQgKTtcclxuXHRcdGlmICggdG9rZW4/Lm5vZGVzPy5sZW5ndGggKSB7XHJcblx0XHRcdHRva2VuLm5vZGVzLmZvckVhY2goIG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmICggbm9kZSAmJiBub2RlLm5hbWUgPT09ICdfY2FwdGNoYV90b2tlbicgKSB7XHJcblx0XHRcdFx0XHRub2RlLnZhbHVlID0gJyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHRva2VuLm9uQ2xlYXIoKTtcclxuXHR9ICk7ICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZUhhbmRsZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBvYnNlcnZhYmxlSGFuZGxlIGZyb20gJy4vb2JzZXJ2YWJsZUhhbmRsZSc7XHJcblxyXG53aW5kb3cuamZiVHVybnN0aWxlT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIHdpbmRvdy5KZXRGb3JtQnVpbGRlciApICkge1xyXG5cdFx0aWYgKCAhb2JzZXJ2YWJsZS5oYXNPd25Qcm9wZXJ0eSggJ2lzT2JzZXJ2ZWQnICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApO1xyXG5cdH1cclxuXHJcblx0YWRkQWN0aW9uKFxyXG5cdFx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL3R1cm5zdGlsZScsXHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlLFxyXG5cdCk7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9