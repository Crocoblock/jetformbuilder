/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./hcaptcha/frontend/observableHandle.js":
/*!***********************************************!*\
  !*** ./hcaptcha/frontend/observableHandle.js ***!
  \***********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGNhcHRjaGEvZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vaGNhcHRjaGEvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vaGNhcHRjaGEvZnJvbnRlbmQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cclxuICovXHJcbmZ1bmN0aW9uIG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKSB7XHJcblx0aWYgKCBvYnNlcnZhYmxlLnBhcmVudCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtudWxsfElucHV0RGF0YX1cclxuXHQgKi9cclxuXHRjb25zdCB0b2tlbiAgICAgPSBvYnNlcnZhYmxlLmdldElucHV0KCAnX2NhcHRjaGFfdG9rZW4nICk7XHJcblx0Y29uc3QgZm9ybUlEICAgID0gb2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcclxuXHRjb25zdCBjb250YWluZXIgPSB0b2tlbj8ubm9kZXM/LlsgMCBdPy5wYXJlbnRFbGVtZW50O1xyXG5cclxuXHRsZXQgb3B0aW9ucyA9IChcclxuXHRcdHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnPy5bIGZvcm1JRCBdID8/IGZhbHNlXHJcblx0KTtcclxuXHJcblx0aWYgKCAhY29udGFpbmVyIHx8ICFvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Ly8gZm9yIGNvcnJlY3QgYXBwbHlpbmcgdmFsaWRhdGlvbiBsb2dpY1xyXG5cdHRva2VuLmlzVmlzaWJsZSA9ICgpID0+IHRydWU7XHJcblxyXG5cdG9wdGlvbnMuY2FsbGJhY2sgPSAoIHJlc3BvbnNlSGFzaCApID0+IHtcclxuXHRcdHRva2VuLnZhbHVlLmN1cnJlbnQgPSByZXNwb25zZUhhc2g7XHJcblx0fTtcclxuXHJcblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcclxuXHRcdCdqZXQuZmIuaENhcHRjaGEub3B0aW9ucycsXHJcblx0XHRvcHRpb25zLFxyXG5cdFx0b2JzZXJ2YWJsZSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCB3aWRnZXRJRCA9IHdpbmRvdy5oY2FwdGNoYS5yZW5kZXIoIGNvbnRhaW5lciwgb3B0aW9ucyApO1xyXG5cclxuXHRvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLnN1Ym1pdHRlcj8uc3RhdHVzPy53YXRjaD8uKCAoKSA9PiB7XHJcblx0XHR3aW5kb3cuaGNhcHRjaGEucmVzZXQoIHdpZGdldElEICk7XHJcblx0XHR0b2tlbi5vbkNsZWFyKCk7XHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZhYmxlSGFuZGxlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG9ic2VydmFibGVIYW5kbGUgZnJvbSAnLi9vYnNlcnZhYmxlSGFuZGxlJztcclxuXHJcbndpbmRvdy5qZmJIQ2FwdGNoYU9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcblx0Zm9yICggY29uc3Qgb2JzZXJ2YWJsZSBvZiBPYmplY3QudmFsdWVzKCB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgKSApIHtcclxuXHRcdGlmICggIW9ic2VydmFibGUuaGFzT3duUHJvcGVydHkoICdpc09ic2VydmVkJyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKTtcclxuXHR9XHJcblxyXG5cdGFkZEFjdGlvbihcclxuXHRcdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci9oQ2FwdGNoYScsXHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlLFxyXG5cdCk7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9