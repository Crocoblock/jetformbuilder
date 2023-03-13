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

/***/ "./frontend/hcaptcha/main.js":
/*!***********************************!*\
  !*** ./frontend/hcaptcha/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./frontend/hcaptcha/observableHandle.js\");\n\nwindow.jfbHCaptchaOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/hCaptcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9oY2FwdGNoYS9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtEO0FBRWxEQyxNQUFNLENBQUNDLGlCQUFpQixHQUFHLFlBQVk7RUFDdEMsSUFBUUMsU0FBUyxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBOUJGLFNBQVM7RUFFakIsa0NBQTBCRyxNQUFNLENBQUNDLE1BQU0sQ0FBRUMsY0FBYyxDQUFFLG9DQUFHO0lBQXRELElBQU1DLFVBQVU7SUFDckIsSUFBSyxDQUFDQSxVQUFVLENBQUNDLGNBQWMsQ0FBRSxZQUFZLENBQUUsRUFBRztNQUNqRDtJQUNEO0lBQ0FWLDZEQUFnQixDQUFFUyxVQUFVLENBQUU7RUFDL0I7RUFFQU4sU0FBUyxDQUNSLHNCQUFzQixFQUN0QiwyQkFBMkIsRUFDM0JILHlEQUFnQixDQUNoQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9oY2FwdGNoYS9tYWluLmpzPzlkNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9ic2VydmFibGVIYW5kbGUgZnJvbSAnLi9vYnNlcnZhYmxlSGFuZGxlJztcclxuXHJcbndpbmRvdy5qZmJIQ2FwdGNoYU9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcblx0Zm9yICggY29uc3Qgb2JzZXJ2YWJsZSBvZiBPYmplY3QudmFsdWVzKCBKZXRGb3JtQnVpbGRlciApICkge1xyXG5cdFx0aWYgKCAhb2JzZXJ2YWJsZS5oYXNPd25Qcm9wZXJ0eSggJ2lzT2JzZXJ2ZWQnICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApO1xyXG5cdH1cclxuXHJcblx0YWRkQWN0aW9uKFxyXG5cdFx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2hDYXB0Y2hhJyxcclxuXHRcdG9ic2VydmFibGVIYW5kbGUsXHJcblx0KTtcclxufTsiXSwibmFtZXMiOlsib2JzZXJ2YWJsZUhhbmRsZSIsIndpbmRvdyIsImpmYkhDYXB0Y2hhT25Mb2FkIiwiYWRkQWN0aW9uIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwiT2JqZWN0IiwidmFsdWVzIiwiSmV0Rm9ybUJ1aWxkZXIiLCJvYnNlcnZhYmxlIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./frontend/hcaptcha/main.js\n");

/***/ }),

/***/ "./frontend/hcaptcha/observableHandle.js":
/*!***********************************************!*\
  !*** ./frontend/hcaptcha/observableHandle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _window$JetFormBuilde2, _observable$getSubmit;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde2 = _window.JetFormBuilderCaptchaConfig) === null || _window$JetFormBuilde2 === void 0 ? void 0 : _window$JetFormBuilde2[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.hCaptcha.options', options, observable);\n  var widgetID = hcaptcha.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 ? void 0 : _observable$getSubmit.watchFail(function () {\n    hcaptcha.reset(widgetID);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9oY2FwdGNoYS9vYnNlcnZhYmxlSGFuZGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFRQSxZQUFZLEdBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFqQ0YsWUFBWTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsU0FBU0csZ0JBQWdCLENBQUVDLFVBQVUsRUFBRztFQUFBO0VBQ3ZDLElBQUtBLFVBQVUsQ0FBQ0MsTUFBTSxFQUFHO0lBQ3hCO0VBQ0Q7O0VBRUE7QUFDRDtBQUNBO0VBQ0MsSUFBTUMsS0FBSyxHQUFPRixVQUFVLENBQUNHLFFBQVEsQ0FBRSxnQkFBZ0IsQ0FBRTtFQUN6RCxJQUFNQyxNQUFNLEdBQU1KLFVBQVUsQ0FBQ0ssU0FBUyxFQUFFLENBQUNDLFNBQVMsRUFBRTtFQUNwRCxJQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ00sS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDQyxhQUFhO0VBRWhELElBQUlDLE9BQU8sdUNBQ1ZDLE1BQU0sc0VBQU4sUUFBUUMsMkJBQTJCLDJEQUFuQyx1QkFBdUNSLE1BQU0sQ0FBRSx5RUFBSSxLQUNuRDtFQUVELElBQUssQ0FBQ0csU0FBUyxJQUFJLENBQUNHLE9BQU8sRUFBRztJQUM3QjtFQUNEOztFQUVBO0VBQ0FSLEtBQUssQ0FBQ1csU0FBUyxHQUFHO0lBQUEsT0FBTSxJQUFJO0VBQUE7RUFFNUJILE9BQU8sQ0FBQ0ksUUFBUSxHQUFHLFVBQUVDLFlBQVksRUFBTTtJQUN0Q2IsS0FBSyxDQUFDYyxLQUFLLENBQUNDLE9BQU8sR0FBR0YsWUFBWTtFQUNuQyxDQUFDO0VBRURMLE9BQU8sR0FBR2QsWUFBWSxDQUNyQix5QkFBeUIsRUFDekJjLE9BQU8sRUFDUFYsVUFBVSxDQUNWO0VBRUQsSUFBTWtCLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUViLFNBQVMsRUFBRUcsT0FBTyxDQUFFO0VBRXRELHlCQUFBVixVQUFVLENBQUNLLFNBQVMsRUFBRSxDQUFDZ0IsU0FBUywwREFBaEMsc0JBQWtDQyxTQUFTLENBQUUsWUFBTTtJQUNsREgsUUFBUSxDQUFDSSxLQUFLLENBQUVMLFFBQVEsQ0FBRTtFQUMzQixDQUFDLENBQUU7QUFDSjtBQUVBLGlFQUFlbkIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvaGNhcHRjaGEvb2JzZXJ2YWJsZUhhbmRsZS5qcz9mZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApIHtcclxuXHRpZiAoIG9ic2VydmFibGUucGFyZW50ICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge251bGx8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGNvbnN0IHRva2VuICAgICA9IG9ic2VydmFibGUuZ2V0SW5wdXQoICdfY2FwdGNoYV90b2tlbicgKTtcclxuXHRjb25zdCBmb3JtSUQgICAgPSBvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xyXG5cdGNvbnN0IGNvbnRhaW5lciA9IHRva2VuLm5vZGVzWyAwIF0ucGFyZW50RWxlbWVudDtcclxuXHJcblx0bGV0IG9wdGlvbnMgPSAoXHJcblx0XHR3aW5kb3c/LkpldEZvcm1CdWlsZGVyQ2FwdGNoYUNvbmZpZz8uWyBmb3JtSUQgXSA/PyBmYWxzZVxyXG5cdCk7XHJcblxyXG5cdGlmICggIWNvbnRhaW5lciB8fCAhb3B0aW9ucyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBjb3JyZWN0IGFwcGx5aW5nIHZhbGlkYXRpb24gbG9naWNcclxuXHR0b2tlbi5pc1Zpc2libGUgPSAoKSA9PiB0cnVlO1xyXG5cclxuXHRvcHRpb25zLmNhbGxiYWNrID0gKCByZXNwb25zZUhhc2ggKSA9PiB7XHJcblx0XHR0b2tlbi52YWx1ZS5jdXJyZW50ID0gcmVzcG9uc2VIYXNoO1xyXG5cdH07XHJcblxyXG5cdG9wdGlvbnMgPSBhcHBseUZpbHRlcnMoXHJcblx0XHQnamV0LmZiLmhDYXB0Y2hhLm9wdGlvbnMnLFxyXG5cdFx0b3B0aW9ucyxcclxuXHRcdG9ic2VydmFibGUsXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgd2lkZ2V0SUQgPSBoY2FwdGNoYS5yZW5kZXIoIGNvbnRhaW5lciwgb3B0aW9ucyApO1xyXG5cclxuXHRvYnNlcnZhYmxlLmdldFN1Ym1pdCgpLnN1Ym1pdHRlcj8ud2F0Y2hGYWlsKCAoKSA9PiB7XHJcblx0XHRoY2FwdGNoYS5yZXNldCggd2lkZ2V0SUQgKTtcclxuXHR9ICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmFibGVIYW5kbGU7Il0sIm5hbWVzIjpbImFwcGx5RmlsdGVycyIsIkpldFBsdWdpbnMiLCJob29rcyIsIm9ic2VydmFibGVIYW5kbGUiLCJvYnNlcnZhYmxlIiwicGFyZW50IiwidG9rZW4iLCJnZXRJbnB1dCIsImZvcm1JRCIsImdldFN1Ym1pdCIsImdldEZvcm1JZCIsImNvbnRhaW5lciIsIm5vZGVzIiwicGFyZW50RWxlbWVudCIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJKZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWciLCJpc1Zpc2libGUiLCJjYWxsYmFjayIsInJlc3BvbnNlSGFzaCIsInZhbHVlIiwiY3VycmVudCIsIndpZGdldElEIiwiaGNhcHRjaGEiLCJyZW5kZXIiLCJzdWJtaXR0ZXIiLCJ3YXRjaEZhaWwiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/hcaptcha/observableHandle.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/hcaptcha/main.js");
/******/ 	
/******/ })()
;