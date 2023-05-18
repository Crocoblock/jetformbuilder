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

/***/ "./hcaptcha/frontend/main.js":
/*!***********************************!*\
  !*** ./hcaptcha/frontend/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./hcaptcha/frontend/observableHandle.js\");\n\nwindow.jfbHCaptchaOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/hCaptcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oY2FwdGNoYS9mcm9udGVuZC9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtEO0FBRWxEQyxNQUFNLENBQUNDLGlCQUFpQixHQUFHLFlBQVk7RUFDdEMsSUFBUUMsU0FBUyxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBOUJGLFNBQVM7RUFFakIsU0FBQUcsRUFBQSxNQUFBQyxjQUFBLEdBQTBCQyxNQUFNLENBQUNDLE1BQU0sQ0FBRUMsY0FBZSxDQUFDLEVBQUFKLEVBQUEsR0FBQUMsY0FBQSxDQUFBSSxNQUFBLEVBQUFMLEVBQUEsSUFBRztJQUF0RCxJQUFNTSxVQUFVLEdBQUFMLGNBQUEsQ0FBQUQsRUFBQTtJQUNyQixJQUFLLENBQUNNLFVBQVUsQ0FBQ0MsY0FBYyxDQUFFLFlBQWEsQ0FBQyxFQUFHO01BQ2pEO0lBQ0Q7SUFDQWIsNkRBQWdCLENBQUVZLFVBQVcsQ0FBQztFQUMvQjtFQUVBVCxTQUFTLENBQ1Isc0JBQXNCLEVBQ3RCLDJCQUEyQixFQUMzQkgseURBQ0QsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2hjYXB0Y2hhL2Zyb250ZW5kL21haW4uanM/ZTA4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JzZXJ2YWJsZUhhbmRsZSBmcm9tICcuL29ic2VydmFibGVIYW5kbGUnO1xyXG5cclxud2luZG93LmpmYkhDYXB0Y2hhT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIEpldEZvcm1CdWlsZGVyICkgKSB7XHJcblx0XHRpZiAoICFvYnNlcnZhYmxlLmhhc093blByb3BlcnR5KCAnaXNPYnNlcnZlZCcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICk7XHJcblx0fVxyXG5cclxuXHRhZGRBY3Rpb24oXHJcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvaENhcHRjaGEnLFxyXG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSxcclxuXHQpO1xyXG59OyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlSGFuZGxlIiwid2luZG93IiwiamZiSENhcHRjaGFPbkxvYWQiLCJhZGRBY3Rpb24iLCJKZXRQbHVnaW5zIiwiaG9va3MiLCJfaSIsIl9PYmplY3QkdmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiSmV0Rm9ybUJ1aWxkZXIiLCJsZW5ndGgiLCJvYnNlcnZhYmxlIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hcaptcha/frontend/main.js\n");

/***/ }),

/***/ "./hcaptcha/frontend/observableHandle.js":
/*!***********************************************!*\
  !*** ./hcaptcha/frontend/observableHandle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _window$JetFormBuilde2, _observable$getSubmit, _observable$getSubmit2, _observable$getSubmit3;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde2 = _window.JetFormBuilderCaptchaConfig) === null || _window$JetFormBuilde2 === void 0 ? void 0 : _window$JetFormBuilde2[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.hCaptcha.options', options, observable);\n  var widgetID = hcaptcha.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 ? void 0 : (_observable$getSubmit2 = _observable$getSubmit.status) === null || _observable$getSubmit2 === void 0 ? void 0 : (_observable$getSubmit3 = _observable$getSubmit2.watch) === null || _observable$getSubmit3 === void 0 ? void 0 : _observable$getSubmit3.call(_observable$getSubmit2, function () {\n    hcaptcha.reset(widgetID);\n    token.onClear();\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oY2FwdGNoYS9mcm9udGVuZC9vYnNlcnZhYmxlSGFuZGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFRQSxZQUFZLEdBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFqQ0YsWUFBWTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsU0FBU0csZ0JBQWdCQSxDQUFFQyxVQUFVLEVBQUc7RUFBQSxJQUFBQyxxQkFBQSxFQUFBQyxPQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHNCQUFBO0VBQ3ZDLElBQUtOLFVBQVUsQ0FBQ08sTUFBTSxFQUFHO0lBQ3hCO0VBQ0Q7O0VBRUE7QUFDRDtBQUNBO0VBQ0MsSUFBTUMsS0FBSyxHQUFPUixVQUFVLENBQUNTLFFBQVEsQ0FBRSxnQkFBaUIsQ0FBQztFQUN6RCxJQUFNQyxNQUFNLEdBQU1WLFVBQVUsQ0FBQ1csU0FBUyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEQsSUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNNLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQ0MsYUFBYTtFQUVoRCxJQUFJQyxPQUFPLElBQUFmLHFCQUFBLElBQUFDLE9BQUEsR0FDVmUsTUFBTSxjQUFBZixPQUFBLHdCQUFBQyxzQkFBQSxHQUFORCxPQUFBLENBQVFnQiwyQkFBMkIsY0FBQWYsc0JBQUEsdUJBQW5DQSxzQkFBQSxDQUF1Q08sTUFBTSxDQUFFLGNBQUFULHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksS0FDbkQ7RUFFRCxJQUFLLENBQUNZLFNBQVMsSUFBSSxDQUFDRyxPQUFPLEVBQUc7SUFDN0I7RUFDRDs7RUFFQTtFQUNBUixLQUFLLENBQUNXLFNBQVMsR0FBRztJQUFBLE9BQU0sSUFBSTtFQUFBO0VBRTVCSCxPQUFPLENBQUNJLFFBQVEsR0FBRyxVQUFFQyxZQUFZLEVBQU07SUFDdENiLEtBQUssQ0FBQ2MsS0FBSyxDQUFDQyxPQUFPLEdBQUdGLFlBQVk7RUFDbkMsQ0FBQztFQUVETCxPQUFPLEdBQUdwQixZQUFZLENBQ3JCLHlCQUF5QixFQUN6Qm9CLE9BQU8sRUFDUGhCLFVBQ0QsQ0FBQztFQUVELElBQU13QixRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFFYixTQUFTLEVBQUVHLE9BQVEsQ0FBQztFQUV0RCxDQUFBWixxQkFBQSxHQUFBSixVQUFVLENBQUNXLFNBQVMsQ0FBQyxDQUFDLENBQUNnQixTQUFTLGNBQUF2QixxQkFBQSx3QkFBQUMsc0JBQUEsR0FBaENELHFCQUFBLENBQWtDd0IsTUFBTSxjQUFBdkIsc0JBQUEsd0JBQUFDLHNCQUFBLEdBQXhDRCxzQkFBQSxDQUEwQ3dCLEtBQUssY0FBQXZCLHNCQUFBLHVCQUEvQ0Esc0JBQUEsQ0FBQXdCLElBQUEsQ0FBQXpCLHNCQUFBLEVBQW1ELFlBQU07SUFDeERvQixRQUFRLENBQUNNLEtBQUssQ0FBRVAsUUFBUyxDQUFDO0lBQzFCaEIsS0FBSyxDQUFDd0IsT0FBTyxDQUFDLENBQUM7RUFDaEIsQ0FBRSxDQUFDO0FBQ0o7QUFFQSxpRUFBZWpDLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vaGNhcHRjaGEvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcz9iOWU5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApIHtcclxuXHRpZiAoIG9ic2VydmFibGUucGFyZW50ICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge251bGx8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGNvbnN0IHRva2VuICAgICA9IG9ic2VydmFibGUuZ2V0SW5wdXQoICdfY2FwdGNoYV90b2tlbicgKTtcclxuXHRjb25zdCBmb3JtSUQgICAgPSBvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IHRva2VuLm5vZGVzWyAwIF0ucGFyZW50RWxlbWVudDtcclxuXHJcblx0bGV0IG9wdGlvbnMgPSAoXHJcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxyXG5cdCk7XHJcblxyXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBjb3JyZWN0IGFwcGx5aW5nIHZhbGlkYXRpb24gbG9naWNcclxuXHR0b2tlbi5pc1Zpc2libGUgPSAoKSA9PiB0cnVlO1xyXG5cclxuXHRvcHRpb25zLmNhbGxiYWNrID0gKCByZXNwb25zZUhhc2ggKSA9PiB7XHJcblx0XHR0b2tlbi52YWx1ZS5jdXJyZW50ID0gcmVzcG9uc2VIYXNoO1xyXG5cdH07XHJcblxyXG5cdG9wdGlvbnMgPSBhcHBseUZpbHRlcnMoXHJcblx0XHQnamV0LmZiLmhDYXB0Y2hhLm9wdGlvbnMnLFxyXG5cdFx0b3B0aW9ucyxcclxuXHRcdG9ic2VydmFibGUsXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgd2lkZ2V0SUQgPSBoY2FwdGNoYS5yZW5kZXIoIGNvbnRhaW5lciwgb3B0aW9ucyApO1xyXG5cclxuXHRvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLnN1Ym1pdHRlcj8uc3RhdHVzPy53YXRjaD8uKCAoKSA9PiB7XHJcblx0XHRoY2FwdGNoYS5yZXNldCggd2lkZ2V0SUQgKTtcclxuXHRcdHRva2VuLm9uQ2xlYXIoKTtcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmFibGVIYW5kbGU7Il0sIm5hbWVzIjpbImFwcGx5RmlsdGVycyIsIkpldFBsdWdpbnMiLCJob29rcyIsIm9ic2VydmFibGVIYW5kbGUiLCJvYnNlcnZhYmxlIiwiX3dpbmRvdyRKZXRGb3JtQnVpbGRlIiwiX3dpbmRvdyIsIl93aW5kb3ckSmV0Rm9ybUJ1aWxkZTIiLCJfb2JzZXJ2YWJsZSRnZXRTdWJtaXQiLCJfb2JzZXJ2YWJsZSRnZXRTdWJtaXQyIiwiX29ic2VydmFibGUkZ2V0U3VibWl0MyIsInBhcmVudCIsInRva2VuIiwiZ2V0SW5wdXQiLCJmb3JtSUQiLCJnZXRTdWJtaXQiLCJnZXRGb3JtSWQiLCJjb250YWluZXIiLCJub2RlcyIsInBhcmVudEVsZW1lbnQiLCJvcHRpb25zIiwid2luZG93IiwiSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnIiwiaXNWaXNpYmxlIiwiY2FsbGJhY2siLCJyZXNwb25zZUhhc2giLCJ2YWx1ZSIsImN1cnJlbnQiLCJ3aWRnZXRJRCIsImhjYXB0Y2hhIiwicmVuZGVyIiwic3VibWl0dGVyIiwic3RhdHVzIiwid2F0Y2giLCJjYWxsIiwicmVzZXQiLCJvbkNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hcaptcha/frontend/observableHandle.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./hcaptcha/frontend/main.js");
/******/ 	
/******/ })()
;