/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./turnstile/frontend/main.js":
/*!************************************!*\
  !*** ./turnstile/frontend/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./turnstile/frontend/observableHandle.js\");\n\nwindow.jfbTurnstileOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/turnstile', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90dXJuc3RpbGUvZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFrRDtBQUVsREMsTUFBTSxDQUFDQyxrQkFBa0IsR0FBRyxZQUFZO0VBQ3ZDLElBQVFDLFNBQVMsR0FBS0MsVUFBVSxDQUFDQyxLQUFLLENBQTlCRixTQUFTO0VBRWpCLFNBQUFHLEVBQUEsTUFBQUMsY0FBQSxHQUEwQkMsTUFBTSxDQUFDQyxNQUFNLENBQUVDLGNBQWUsQ0FBQyxFQUFBSixFQUFBLEdBQUFDLGNBQUEsQ0FBQUksTUFBQSxFQUFBTCxFQUFBLElBQUc7SUFBdEQsSUFBTU0sVUFBVSxHQUFBTCxjQUFBLENBQUFELEVBQUE7SUFDckIsSUFBSyxDQUFDTSxVQUFVLENBQUNDLGNBQWMsQ0FBRSxZQUFhLENBQUMsRUFBRztNQUNqRDtJQUNEO0lBQ0FiLDZEQUFnQixDQUFFWSxVQUFXLENBQUM7RUFDL0I7RUFFQVQsU0FBUyxDQUNSLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUJILHlEQUNELENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi90dXJuc3RpbGUvZnJvbnRlbmQvbWFpbi5qcz9mMTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvYnNlcnZhYmxlSGFuZGxlIGZyb20gJy4vb2JzZXJ2YWJsZUhhbmRsZSc7XHJcblxyXG53aW5kb3cuamZiVHVybnN0aWxlT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIEpldEZvcm1CdWlsZGVyICkgKSB7XHJcblx0XHRpZiAoICFvYnNlcnZhYmxlLmhhc093blByb3BlcnR5KCAnaXNPYnNlcnZlZCcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICk7XHJcblx0fVxyXG5cclxuXHRhZGRBY3Rpb24oXHJcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvdHVybnN0aWxlJyxcclxuXHRcdG9ic2VydmFibGVIYW5kbGUsXHJcblx0KTtcclxufTsiXSwibmFtZXMiOlsib2JzZXJ2YWJsZUhhbmRsZSIsIndpbmRvdyIsImpmYlR1cm5zdGlsZU9uTG9hZCIsImFkZEFjdGlvbiIsIkpldFBsdWdpbnMiLCJob29rcyIsIl9pIiwiX09iamVjdCR2YWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJKZXRGb3JtQnVpbGRlciIsImxlbmd0aCIsIm9ic2VydmFibGUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./turnstile/frontend/main.js\n");

/***/ }),

/***/ "./turnstile/frontend/observableHandle.js":
/*!************************************************!*\
  !*** ./turnstile/frontend/observableHandle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _observable$getSubmit, _observable$getSubmit2;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 || (_window = _window.JetFormBuilderCaptchaConfig) === null || _window === void 0 ? void 0 : _window[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.turnstile.options', options, observable);\n  var widgetID = turnstile.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 || (_observable$getSubmit = _observable$getSubmit.status) === null || _observable$getSubmit === void 0 || (_observable$getSubmit2 = _observable$getSubmit.watch) === null || _observable$getSubmit2 === void 0 ? void 0 : _observable$getSubmit2.call(_observable$getSubmit, function () {\n    turnstile.reset(widgetID);\n    token.onClear();\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90dXJuc3RpbGUvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBUUEsWUFBWSxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBakNGLFlBQVk7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLFNBQVNHLGdCQUFnQkEsQ0FBRUMsVUFBVSxFQUFHO0VBQUEsSUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQTtFQUN2QyxJQUFLSixVQUFVLENBQUNLLE1BQU0sRUFBRztJQUN4QjtFQUNEOztFQUVBO0FBQ0Q7QUFDQTtFQUNDLElBQU1DLEtBQUssR0FBT04sVUFBVSxDQUFDTyxRQUFRLENBQUUsZ0JBQWlCLENBQUM7RUFDekQsSUFBTUMsTUFBTSxHQUFNUixVQUFVLENBQUNTLFNBQVMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BELElBQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUNDLGFBQWE7RUFFaEQsSUFBSUMsT0FBTyxJQUFBYixxQkFBQSxJQUFBQyxPQUFBLEdBQ1ZhLE1BQU0sY0FBQWIsT0FBQSxnQkFBQUEsT0FBQSxHQUFOQSxPQUFBLENBQVFjLDJCQUEyQixjQUFBZCxPQUFBLHVCQUFuQ0EsT0FBQSxDQUF1Q00sTUFBTSxDQUFFLGNBQUFQLHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksS0FDbkQ7RUFFRCxJQUFLLENBQUNVLFNBQVMsSUFBSSxDQUFDRyxPQUFPLEVBQUc7SUFDN0I7RUFDRDs7RUFFQTtFQUNBUixLQUFLLENBQUNXLFNBQVMsR0FBRztJQUFBLE9BQU0sSUFBSTtFQUFBO0VBRTVCSCxPQUFPLENBQUNJLFFBQVEsR0FBRyxVQUFFQyxZQUFZLEVBQU07SUFDdENiLEtBQUssQ0FBQ2MsS0FBSyxDQUFDQyxPQUFPLEdBQUdGLFlBQVk7RUFDbkMsQ0FBQztFQUVETCxPQUFPLEdBQUdsQixZQUFZLENBQ3JCLDBCQUEwQixFQUMxQmtCLE9BQU8sRUFDUGQsVUFDRCxDQUFDO0VBRUQsSUFBTXNCLFFBQVEsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLENBQUViLFNBQVMsRUFBRUcsT0FBUSxDQUFDO0VBRXZELENBQUFYLHFCQUFBLEdBQUFILFVBQVUsQ0FBQ1MsU0FBUyxDQUFDLENBQUMsQ0FBQ2dCLFNBQVMsY0FBQXRCLHFCQUFBLGdCQUFBQSxxQkFBQSxHQUFoQ0EscUJBQUEsQ0FBa0N1QixNQUFNLGNBQUF2QixxQkFBQSxnQkFBQUMsc0JBQUEsR0FBeENELHFCQUFBLENBQTBDd0IsS0FBSyxjQUFBdkIsc0JBQUEsdUJBQS9DQSxzQkFBQSxDQUFBd0IsSUFBQSxDQUFBekIscUJBQUEsRUFBbUQsWUFBTTtJQUN4RG9CLFNBQVMsQ0FBQ00sS0FBSyxDQUFFUCxRQUFTLENBQUM7SUFDM0JoQixLQUFLLENBQUN3QixPQUFPLENBQUMsQ0FBQztFQUNoQixDQUFFLENBQUM7QUFDSjtBQUVBLGlFQUFlL0IsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi90dXJuc3RpbGUvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcz80YjZlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApIHtcclxuXHRpZiAoIG9ic2VydmFibGUucGFyZW50ICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge251bGx8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGNvbnN0IHRva2VuICAgICA9IG9ic2VydmFibGUuZ2V0SW5wdXQoICdfY2FwdGNoYV90b2tlbicgKTtcclxuXHRjb25zdCBmb3JtSUQgICAgPSBvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IHRva2VuLm5vZGVzWyAwIF0ucGFyZW50RWxlbWVudDtcclxuXHJcblx0bGV0IG9wdGlvbnMgPSAoXHJcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxyXG5cdCk7XHJcblxyXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBjb3JyZWN0IGFwcGx5aW5nIHZhbGlkYXRpb24gbG9naWNcclxuXHR0b2tlbi5pc1Zpc2libGUgPSAoKSA9PiB0cnVlO1xyXG5cclxuXHRvcHRpb25zLmNhbGxiYWNrID0gKCByZXNwb25zZUhhc2ggKSA9PiB7XHJcblx0XHR0b2tlbi52YWx1ZS5jdXJyZW50ID0gcmVzcG9uc2VIYXNoO1xyXG5cdH07XHJcblxyXG5cdG9wdGlvbnMgPSBhcHBseUZpbHRlcnMoXHJcblx0XHQnamV0LmZiLnR1cm5zdGlsZS5vcHRpb25zJyxcclxuXHRcdG9wdGlvbnMsXHJcblx0XHRvYnNlcnZhYmxlLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHdpZGdldElEID0gdHVybnN0aWxlLnJlbmRlciggY29udGFpbmVyLCBvcHRpb25zICk7XHJcblxyXG5cdG9ic2VydmFibGUuZ2V0U3VibWl0KCkuc3VibWl0dGVyPy5zdGF0dXM/LndhdGNoPy4oICgpID0+IHtcclxuXHRcdHR1cm5zdGlsZS5yZXNldCggd2lkZ2V0SUQgKTtcclxuXHRcdHRva2VuLm9uQ2xlYXIoKTtcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmFibGVIYW5kbGU7Il0sIm5hbWVzIjpbImFwcGx5RmlsdGVycyIsIkpldFBsdWdpbnMiLCJob29rcyIsIm9ic2VydmFibGVIYW5kbGUiLCJvYnNlcnZhYmxlIiwiX3dpbmRvdyRKZXRGb3JtQnVpbGRlIiwiX3dpbmRvdyIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdCIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdDIiLCJwYXJlbnQiLCJ0b2tlbiIsImdldElucHV0IiwiZm9ybUlEIiwiZ2V0U3VibWl0IiwiZ2V0Rm9ybUlkIiwiY29udGFpbmVyIiwibm9kZXMiLCJwYXJlbnRFbGVtZW50Iiwib3B0aW9ucyIsIndpbmRvdyIsIkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZyIsImlzVmlzaWJsZSIsImNhbGxiYWNrIiwicmVzcG9uc2VIYXNoIiwidmFsdWUiLCJjdXJyZW50Iiwid2lkZ2V0SUQiLCJ0dXJuc3RpbGUiLCJyZW5kZXIiLCJzdWJtaXR0ZXIiLCJzdGF0dXMiLCJ3YXRjaCIsImNhbGwiLCJyZXNldCIsIm9uQ2xlYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./turnstile/frontend/observableHandle.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./turnstile/frontend/main.js");
/******/ 	
/******/ })()
;