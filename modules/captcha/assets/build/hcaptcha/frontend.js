/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./hcaptcha/frontend/observableHandle.js"
/*!***********************************************!*\
  !*** ./hcaptcha/frontend/observableHandle.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    token.value.current = responseHash;
  };
  options = applyFilters('jet.fb.hCaptcha.options', options, observable);
  const widgetID = window.hcaptcha.render(container, options);
  observable.getSubmit().submitter?.status?.watch?.(() => {
    window.hcaptcha.reset(widgetID);
    token.onClear();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);

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
/*!***********************************!*\
  !*** ./hcaptcha/frontend/main.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ "./hcaptcha/frontend/observableHandle.js");

window.jfbHCaptchaOnLoad = function () {
  const {
    addAction
  } = JetPlugins.hooks;
  for (const observable of Object.values(window.JetFormBuilder)) {
    if (!observable.hasOwnProperty('isObserved')) {
      continue;
    }
    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__["default"])(observable);
  }
  addAction('jet.fb.observe.after', 'jet-form-builder/hCaptcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__["default"]);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGNhcHRjaGEvZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vaGNhcHRjaGEvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vaGNhcHRjaGEvZnJvbnRlbmQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApIHtcblx0aWYgKCBvYnNlcnZhYmxlLnBhcmVudCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge251bGx8SW5wdXREYXRhfVxuXHQgKi9cblx0Y29uc3QgdG9rZW4gICAgID0gb2JzZXJ2YWJsZS5nZXRJbnB1dCggJ19jYXB0Y2hhX3Rva2VuJyApO1xuXHRjb25zdCBmb3JtSUQgICAgPSBvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xuXHRjb25zdCBjb250YWluZXIgPSB0b2tlbj8ubm9kZXM/LlsgMCBdPy5wYXJlbnRFbGVtZW50O1xuXG5cdGxldCBvcHRpb25zID0gKFxuXHRcdHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnPy5bIGZvcm1JRCBdID8/IGZhbHNlXG5cdCk7XG5cblx0aWYgKCAhY29udGFpbmVyIHx8ICFvcHRpb25zICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGZvciBjb3JyZWN0IGFwcGx5aW5nIHZhbGlkYXRpb24gbG9naWNcblx0dG9rZW4uaXNWaXNpYmxlID0gKCkgPT4gdHJ1ZTtcblxuXHRvcHRpb25zLmNhbGxiYWNrID0gKCByZXNwb25zZUhhc2ggKSA9PiB7XG5cdFx0dG9rZW4udmFsdWUuY3VycmVudCA9IHJlc3BvbnNlSGFzaDtcblx0fTtcblxuXHRvcHRpb25zID0gYXBwbHlGaWx0ZXJzKFxuXHRcdCdqZXQuZmIuaENhcHRjaGEub3B0aW9ucycsXG5cdFx0b3B0aW9ucyxcblx0XHRvYnNlcnZhYmxlLFxuXHQpO1xuXG5cdGNvbnN0IHdpZGdldElEID0gd2luZG93LmhjYXB0Y2hhLnJlbmRlciggY29udGFpbmVyLCBvcHRpb25zICk7XG5cblx0b2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5zdWJtaXR0ZXI/LnN0YXR1cz8ud2F0Y2g/LiggKCkgPT4ge1xuXHRcdHdpbmRvdy5oY2FwdGNoYS5yZXNldCggd2lkZ2V0SUQgKTtcblx0XHR0b2tlbi5vbkNsZWFyKCk7XG5cdH0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZUhhbmRsZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG9ic2VydmFibGVIYW5kbGUgZnJvbSAnLi9vYnNlcnZhYmxlSGFuZGxlJztcblxud2luZG93LmpmYkhDYXB0Y2hhT25Mb2FkID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIHdpbmRvdy5KZXRGb3JtQnVpbGRlciApICkge1xuXHRcdGlmICggIW9ic2VydmFibGUuaGFzT3duUHJvcGVydHkoICdpc09ic2VydmVkJyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKTtcblx0fVxuXG5cdGFkZEFjdGlvbihcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2hDYXB0Y2hhJyxcblx0XHRvYnNlcnZhYmxlSGFuZGxlLFxuXHQpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=