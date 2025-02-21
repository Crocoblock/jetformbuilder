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
    token.value.current = responseHash;
  };
  options = applyFilters('jet.fb.turnstile.options', options, observable);
  const widgetID = window.turnstile.render(container, options);
  observable.getSubmit().submitter?.status?.watch?.(() => {
    window.turnstile.reset(widgetID);
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVybnN0aWxlL2Zyb250ZW5kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi90dXJuc3RpbGUvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vdHVybnN0aWxlL2Zyb250ZW5kL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKSB7XG5cdGlmICggb2JzZXJ2YWJsZS5wYXJlbnQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtudWxsfElucHV0RGF0YX1cblx0ICovXG5cdGNvbnN0IHRva2VuICAgICA9IG9ic2VydmFibGUuZ2V0SW5wdXQoICdfY2FwdGNoYV90b2tlbicgKTtcblx0Y29uc3QgZm9ybUlEICAgID0gb2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcblx0Y29uc3QgY29udGFpbmVyID0gdG9rZW4/Lm5vZGVzPy5bIDAgXT8ucGFyZW50RWxlbWVudDtcblxuXHRsZXQgb3B0aW9ucyA9IChcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxuXHQpO1xuXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBmb3IgY29ycmVjdCBhcHBseWluZyB2YWxpZGF0aW9uIGxvZ2ljXG5cdHRva2VuLmlzVmlzaWJsZSA9ICgpID0+IHRydWU7XG5cblx0b3B0aW9ucy5jYWxsYmFjayA9ICggcmVzcG9uc2VIYXNoICkgPT4ge1xuXHRcdHRva2VuLnZhbHVlLmN1cnJlbnQgPSByZXNwb25zZUhhc2g7XG5cdH07XG5cblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcblx0XHQnamV0LmZiLnR1cm5zdGlsZS5vcHRpb25zJyxcblx0XHRvcHRpb25zLFxuXHRcdG9ic2VydmFibGUsXG5cdCk7XG5cblx0Y29uc3Qgd2lkZ2V0SUQgPSB3aW5kb3cudHVybnN0aWxlLnJlbmRlciggY29udGFpbmVyLCBvcHRpb25zICk7XG5cblx0b2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5zdWJtaXR0ZXI/LnN0YXR1cz8ud2F0Y2g/LiggKCkgPT4ge1xuXHRcdHdpbmRvdy50dXJuc3RpbGUucmVzZXQoIHdpZGdldElEICk7XG5cdFx0dG9rZW4ub25DbGVhcigpO1xuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmFibGVIYW5kbGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgb2JzZXJ2YWJsZUhhbmRsZSBmcm9tICcuL29ic2VydmFibGVIYW5kbGUnO1xuXG53aW5kb3cuamZiVHVybnN0aWxlT25Mb2FkID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIHdpbmRvdy5KZXRGb3JtQnVpbGRlciApICkge1xuXHRcdGlmICggIW9ic2VydmFibGUuaGFzT3duUHJvcGVydHkoICdpc09ic2VydmVkJyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKTtcblx0fVxuXG5cdGFkZEFjdGlvbihcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL3R1cm5zdGlsZScsXG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSxcblx0KTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9