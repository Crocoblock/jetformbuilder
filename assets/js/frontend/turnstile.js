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

/***/ "./frontend/turnstile/main.js":
/*!************************************!*\
  !*** ./frontend/turnstile/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./frontend/turnstile/observableHandle.js\");\n\nwindow.jfbTurnstileOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/turnstile', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC90dXJuc3RpbGUvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFrRDtBQUVsREMsTUFBTSxDQUFDQyxrQkFBa0IsR0FBRyxZQUFZO0VBQ3ZDLElBQVFDLFNBQVMsR0FBS0MsVUFBVSxDQUFDQyxLQUFLLENBQTlCRixTQUFTO0VBRWpCLFNBQUFHLEVBQUEsTUFBQUMsY0FBQSxHQUEwQkMsTUFBTSxDQUFDQyxNQUFNLENBQUVDLGNBQWMsQ0FBRSxFQUFBSixFQUFBLEdBQUFDLGNBQUEsQ0FBQUksTUFBQSxFQUFBTCxFQUFBLElBQUc7SUFBdEQsSUFBTU0sVUFBVSxHQUFBTCxjQUFBLENBQUFELEVBQUE7SUFDckIsSUFBSyxDQUFDTSxVQUFVLENBQUNDLGNBQWMsQ0FBRSxZQUFZLENBQUUsRUFBRztNQUNqRDtJQUNEO0lBQ0FiLDZEQUFnQixDQUFFWSxVQUFVLENBQUU7RUFDL0I7RUFFQVQsU0FBUyxDQUNSLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUJILHlEQUFnQixDQUNoQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC90dXJuc3RpbGUvbWFpbi5qcz8zN2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvYnNlcnZhYmxlSGFuZGxlIGZyb20gJy4vb2JzZXJ2YWJsZUhhbmRsZSc7XHJcblxyXG53aW5kb3cuamZiVHVybnN0aWxlT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIEpldEZvcm1CdWlsZGVyICkgKSB7XHJcblx0XHRpZiAoICFvYnNlcnZhYmxlLmhhc093blByb3BlcnR5KCAnaXNPYnNlcnZlZCcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICk7XHJcblx0fVxyXG5cclxuXHRhZGRBY3Rpb24oXHJcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvdHVybnN0aWxlJyxcclxuXHRcdG9ic2VydmFibGVIYW5kbGUsXHJcblx0KTtcclxufTsiXSwibmFtZXMiOlsib2JzZXJ2YWJsZUhhbmRsZSIsIndpbmRvdyIsImpmYlR1cm5zdGlsZU9uTG9hZCIsImFkZEFjdGlvbiIsIkpldFBsdWdpbnMiLCJob29rcyIsIl9pIiwiX09iamVjdCR2YWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJKZXRGb3JtQnVpbGRlciIsImxlbmd0aCIsIm9ic2VydmFibGUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/turnstile/main.js\n");

/***/ }),

/***/ "./frontend/turnstile/observableHandle.js":
/*!************************************************!*\
  !*** ./frontend/turnstile/observableHandle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _window$JetFormBuilde2, _observable$getSubmit, _observable$getSubmit2, _observable$getSubmit3;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde2 = _window.JetFormBuilderCaptchaConfig) === null || _window$JetFormBuilde2 === void 0 ? void 0 : _window$JetFormBuilde2[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.turnstile.options', options, observable);\n  var widgetID = turnstile.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 ? void 0 : (_observable$getSubmit2 = _observable$getSubmit.status) === null || _observable$getSubmit2 === void 0 ? void 0 : (_observable$getSubmit3 = _observable$getSubmit2.watch) === null || _observable$getSubmit3 === void 0 ? void 0 : _observable$getSubmit3.call(_observable$getSubmit2, function () {\n    turnstile.reset(widgetID);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC90dXJuc3RpbGUvb2JzZXJ2YWJsZUhhbmRsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBUUEsWUFBWSxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBakNGLFlBQVk7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLFNBQVNHLGdCQUFnQkEsQ0FBRUMsVUFBVSxFQUFHO0VBQUEsSUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxzQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxzQkFBQTtFQUN2QyxJQUFLTixVQUFVLENBQUNPLE1BQU0sRUFBRztJQUN4QjtFQUNEOztFQUVBO0FBQ0Q7QUFDQTtFQUNDLElBQU1DLEtBQUssR0FBT1IsVUFBVSxDQUFDUyxRQUFRLENBQUUsZ0JBQWdCLENBQUU7RUFDekQsSUFBTUMsTUFBTSxHQUFNVixVQUFVLENBQUNXLFNBQVMsRUFBRSxDQUFDQyxTQUFTLEVBQUU7RUFDcEQsSUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNNLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQ0MsYUFBYTtFQUVoRCxJQUFJQyxPQUFPLElBQUFmLHFCQUFBLElBQUFDLE9BQUEsR0FDVmUsTUFBTSxjQUFBZixPQUFBLHdCQUFBQyxzQkFBQSxHQUFORCxPQUFBLENBQVFnQiwyQkFBMkIsY0FBQWYsc0JBQUEsdUJBQW5DQSxzQkFBQSxDQUF1Q08sTUFBTSxDQUFFLGNBQUFULHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksS0FDbkQ7RUFFRCxJQUFLLENBQUNZLFNBQVMsSUFBSSxDQUFDRyxPQUFPLEVBQUc7SUFDN0I7RUFDRDs7RUFFQTtFQUNBUixLQUFLLENBQUNXLFNBQVMsR0FBRztJQUFBLE9BQU0sSUFBSTtFQUFBO0VBRTVCSCxPQUFPLENBQUNJLFFBQVEsR0FBRyxVQUFFQyxZQUFZLEVBQU07SUFDdENiLEtBQUssQ0FBQ2MsS0FBSyxDQUFDQyxPQUFPLEdBQUdGLFlBQVk7RUFDbkMsQ0FBQztFQUVETCxPQUFPLEdBQUdwQixZQUFZLENBQ3JCLDBCQUEwQixFQUMxQm9CLE9BQU8sRUFDUGhCLFVBQVUsQ0FDVjtFQUVELElBQU13QixRQUFRLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFFYixTQUFTLEVBQUVHLE9BQU8sQ0FBRTtFQUV2RCxDQUFBWixxQkFBQSxHQUFBSixVQUFVLENBQUNXLFNBQVMsRUFBRSxDQUFDZ0IsU0FBUyxjQUFBdkIscUJBQUEsd0JBQUFDLHNCQUFBLEdBQWhDRCxxQkFBQSxDQUFrQ3dCLE1BQU0sY0FBQXZCLHNCQUFBLHdCQUFBQyxzQkFBQSxHQUF4Q0Qsc0JBQUEsQ0FBMEN3QixLQUFLLGNBQUF2QixzQkFBQSx1QkFBL0NBLHNCQUFBLENBQUF3QixJQUFBLENBQUF6QixzQkFBQSxFQUFtRCxZQUFNO0lBQ3hEb0IsU0FBUyxDQUFDTSxLQUFLLENBQUVQLFFBQVEsQ0FBRTtFQUM1QixDQUFDLENBQUU7QUFDSjtBQUVBLGlFQUFlekIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvdHVybnN0aWxlL29ic2VydmFibGVIYW5kbGUuanM/NTA2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cclxuICovXHJcbmZ1bmN0aW9uIG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKSB7XHJcblx0aWYgKCBvYnNlcnZhYmxlLnBhcmVudCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtudWxsfElucHV0RGF0YX1cclxuXHQgKi9cclxuXHRjb25zdCB0b2tlbiAgICAgPSBvYnNlcnZhYmxlLmdldElucHV0KCAnX2NhcHRjaGFfdG9rZW4nICk7XHJcblx0Y29uc3QgZm9ybUlEICAgID0gb2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcclxuXHRjb25zdCBjb250YWluZXIgPSB0b2tlbi5ub2Rlc1sgMCBdLnBhcmVudEVsZW1lbnQ7XHJcblxyXG5cdGxldCBvcHRpb25zID0gKFxyXG5cdFx0d2luZG93Py5KZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWc/LlsgZm9ybUlEIF0gPz8gZmFsc2VcclxuXHQpO1xyXG5cclxuXHRpZiAoICFjb250YWluZXIgfHwgIW9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgY29ycmVjdCBhcHBseWluZyB2YWxpZGF0aW9uIGxvZ2ljXHJcblx0dG9rZW4uaXNWaXNpYmxlID0gKCkgPT4gdHJ1ZTtcclxuXHJcblx0b3B0aW9ucy5jYWxsYmFjayA9ICggcmVzcG9uc2VIYXNoICkgPT4ge1xyXG5cdFx0dG9rZW4udmFsdWUuY3VycmVudCA9IHJlc3BvbnNlSGFzaDtcclxuXHR9O1xyXG5cclxuXHRvcHRpb25zID0gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0J2pldC5mYi50dXJuc3RpbGUub3B0aW9ucycsXHJcblx0XHRvcHRpb25zLFxyXG5cdFx0b2JzZXJ2YWJsZSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCB3aWRnZXRJRCA9IHR1cm5zdGlsZS5yZW5kZXIoIGNvbnRhaW5lciwgb3B0aW9ucyApO1xyXG5cclxuXHRvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLnN1Ym1pdHRlcj8uc3RhdHVzPy53YXRjaD8uKCAoKSA9PiB7XHJcblx0XHR0dXJuc3RpbGUucmVzZXQoIHdpZGdldElEICk7XHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZhYmxlSGFuZGxlOyJdLCJuYW1lcyI6WyJhcHBseUZpbHRlcnMiLCJKZXRQbHVnaW5zIiwiaG9va3MiLCJvYnNlcnZhYmxlSGFuZGxlIiwib2JzZXJ2YWJsZSIsIl93aW5kb3ckSmV0Rm9ybUJ1aWxkZSIsIl93aW5kb3ciLCJfd2luZG93JEpldEZvcm1CdWlsZGUyIiwiX29ic2VydmFibGUkZ2V0U3VibWl0IiwiX29ic2VydmFibGUkZ2V0U3VibWl0MiIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdDMiLCJwYXJlbnQiLCJ0b2tlbiIsImdldElucHV0IiwiZm9ybUlEIiwiZ2V0U3VibWl0IiwiZ2V0Rm9ybUlkIiwiY29udGFpbmVyIiwibm9kZXMiLCJwYXJlbnRFbGVtZW50Iiwib3B0aW9ucyIsIndpbmRvdyIsIkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZyIsImlzVmlzaWJsZSIsImNhbGxiYWNrIiwicmVzcG9uc2VIYXNoIiwidmFsdWUiLCJjdXJyZW50Iiwid2lkZ2V0SUQiLCJ0dXJuc3RpbGUiLCJyZW5kZXIiLCJzdWJtaXR0ZXIiLCJzdGF0dXMiLCJ3YXRjaCIsImNhbGwiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/turnstile/observableHandle.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/turnstile/main.js");
/******/ 	
/******/ })()
;