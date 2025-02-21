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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGNhcHRjaGEvZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2hjYXB0Y2hhL2Zyb250ZW5kL29ic2VydmFibGVIYW5kbGUuanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2hjYXB0Y2hhL2Zyb250ZW5kL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKSB7XG5cdGlmICggb2JzZXJ2YWJsZS5wYXJlbnQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtudWxsfElucHV0RGF0YX1cblx0ICovXG5cdGNvbnN0IHRva2VuICAgICA9IG9ic2VydmFibGUuZ2V0SW5wdXQoICdfY2FwdGNoYV90b2tlbicgKTtcblx0Y29uc3QgZm9ybUlEICAgID0gb2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcblx0Y29uc3QgY29udGFpbmVyID0gdG9rZW4/Lm5vZGVzPy5bIDAgXT8ucGFyZW50RWxlbWVudDtcblxuXHRsZXQgb3B0aW9ucyA9IChcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxuXHQpO1xuXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBmb3IgY29ycmVjdCBhcHBseWluZyB2YWxpZGF0aW9uIGxvZ2ljXG5cdHRva2VuLmlzVmlzaWJsZSA9ICgpID0+IHRydWU7XG5cblx0b3B0aW9ucy5jYWxsYmFjayA9ICggcmVzcG9uc2VIYXNoICkgPT4ge1xuXHRcdHRva2VuLnZhbHVlLmN1cnJlbnQgPSByZXNwb25zZUhhc2g7XG5cdH07XG5cblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcblx0XHQnamV0LmZiLmhDYXB0Y2hhLm9wdGlvbnMnLFxuXHRcdG9wdGlvbnMsXG5cdFx0b2JzZXJ2YWJsZSxcblx0KTtcblxuXHRjb25zdCB3aWRnZXRJRCA9IHdpbmRvdy5oY2FwdGNoYS5yZW5kZXIoIGNvbnRhaW5lciwgb3B0aW9ucyApO1xuXG5cdG9ic2VydmFibGUuZ2V0U3VibWl0KCkuc3VibWl0dGVyPy5zdGF0dXM/LndhdGNoPy4oICgpID0+IHtcblx0XHR3aW5kb3cuaGNhcHRjaGEucmVzZXQoIHdpZGdldElEICk7XG5cdFx0dG9rZW4ub25DbGVhcigpO1xuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmFibGVIYW5kbGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgb2JzZXJ2YWJsZUhhbmRsZSBmcm9tICcuL29ic2VydmFibGVIYW5kbGUnO1xuXG53aW5kb3cuamZiSENhcHRjaGFPbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5cdGZvciAoIGNvbnN0IG9ic2VydmFibGUgb2YgT2JqZWN0LnZhbHVlcyggd2luZG93LkpldEZvcm1CdWlsZGVyICkgKSB7XG5cdFx0aWYgKCAhb2JzZXJ2YWJsZS5oYXNPd25Qcm9wZXJ0eSggJ2lzT2JzZXJ2ZWQnICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApO1xuXHR9XG5cblx0YWRkQWN0aW9uKFxuXHRcdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvaENhcHRjaGEnLFxuXHRcdG9ic2VydmFibGVIYW5kbGUsXG5cdCk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==