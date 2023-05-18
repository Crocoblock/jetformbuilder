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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./turnstile/frontend/observableHandle.js\");\n\nwindow.jfbTurnstileOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/turnstile', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90dXJuc3RpbGUvZnJvbnRlbmQvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFrRDtBQUVsREMsTUFBTSxDQUFDQyxrQkFBa0IsR0FBRyxZQUFZO0VBQ3ZDLElBQVFDLFNBQVMsR0FBS0MsVUFBVSxDQUFDQyxLQUFLLENBQTlCRixTQUFTO0VBRWpCLFNBQUFHLEVBQUEsTUFBQUMsY0FBQSxHQUEwQkMsTUFBTSxDQUFDQyxNQUFNLENBQUVDLGNBQWUsQ0FBQyxFQUFBSixFQUFBLEdBQUFDLGNBQUEsQ0FBQUksTUFBQSxFQUFBTCxFQUFBLElBQUc7SUFBdEQsSUFBTU0sVUFBVSxHQUFBTCxjQUFBLENBQUFELEVBQUE7SUFDckIsSUFBSyxDQUFDTSxVQUFVLENBQUNDLGNBQWMsQ0FBRSxZQUFhLENBQUMsRUFBRztNQUNqRDtJQUNEO0lBQ0FiLDZEQUFnQixDQUFFWSxVQUFXLENBQUM7RUFDL0I7RUFFQVQsU0FBUyxDQUNSLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUJILHlEQUNELENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi90dXJuc3RpbGUvZnJvbnRlbmQvbWFpbi5qcz9mMTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvYnNlcnZhYmxlSGFuZGxlIGZyb20gJy4vb2JzZXJ2YWJsZUhhbmRsZSc7XHJcblxyXG53aW5kb3cuamZiVHVybnN0aWxlT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIEpldEZvcm1CdWlsZGVyICkgKSB7XHJcblx0XHRpZiAoICFvYnNlcnZhYmxlLmhhc093blByb3BlcnR5KCAnaXNPYnNlcnZlZCcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICk7XHJcblx0fVxyXG5cclxuXHRhZGRBY3Rpb24oXHJcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvdHVybnN0aWxlJyxcclxuXHRcdG9ic2VydmFibGVIYW5kbGUsXHJcblx0KTtcclxufTsiXSwibmFtZXMiOlsib2JzZXJ2YWJsZUhhbmRsZSIsIndpbmRvdyIsImpmYlR1cm5zdGlsZU9uTG9hZCIsImFkZEFjdGlvbiIsIkpldFBsdWdpbnMiLCJob29rcyIsIl9pIiwiX09iamVjdCR2YWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJKZXRGb3JtQnVpbGRlciIsImxlbmd0aCIsIm9ic2VydmFibGUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./turnstile/frontend/main.js\n");

/***/ }),

/***/ "./turnstile/frontend/observableHandle.js":
/*!************************************************!*\
  !*** ./turnstile/frontend/observableHandle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _window$JetFormBuilde2, _observable$getSubmit, _observable$getSubmit2, _observable$getSubmit3;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde2 = _window.JetFormBuilderCaptchaConfig) === null || _window$JetFormBuilde2 === void 0 ? void 0 : _window$JetFormBuilde2[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.turnstile.options', options, observable);\n  var widgetID = turnstile.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 ? void 0 : (_observable$getSubmit2 = _observable$getSubmit.status) === null || _observable$getSubmit2 === void 0 ? void 0 : (_observable$getSubmit3 = _observable$getSubmit2.watch) === null || _observable$getSubmit3 === void 0 ? void 0 : _observable$getSubmit3.call(_observable$getSubmit2, function () {\n    turnstile.reset(widgetID);\n    token.onClear();\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90dXJuc3RpbGUvZnJvbnRlbmQvb2JzZXJ2YWJsZUhhbmRsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBUUEsWUFBWSxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBakNGLFlBQVk7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLFNBQVNHLGdCQUFnQkEsQ0FBRUMsVUFBVSxFQUFHO0VBQUEsSUFBQUMscUJBQUEsRUFBQUMsT0FBQSxFQUFBQyxzQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxzQkFBQTtFQUN2QyxJQUFLTixVQUFVLENBQUNPLE1BQU0sRUFBRztJQUN4QjtFQUNEOztFQUVBO0FBQ0Q7QUFDQTtFQUNDLElBQU1DLEtBQUssR0FBT1IsVUFBVSxDQUFDUyxRQUFRLENBQUUsZ0JBQWlCLENBQUM7RUFDekQsSUFBTUMsTUFBTSxHQUFNVixVQUFVLENBQUNXLFNBQVMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0VBQ3BELElBQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUNDLGFBQWE7RUFFaEQsSUFBSUMsT0FBTyxJQUFBZixxQkFBQSxJQUFBQyxPQUFBLEdBQ1ZlLE1BQU0sY0FBQWYsT0FBQSx3QkFBQUMsc0JBQUEsR0FBTkQsT0FBQSxDQUFRZ0IsMkJBQTJCLGNBQUFmLHNCQUFBLHVCQUFuQ0Esc0JBQUEsQ0FBdUNPLE1BQU0sQ0FBRSxjQUFBVCxxQkFBQSxjQUFBQSxxQkFBQSxHQUFJLEtBQ25EO0VBRUQsSUFBSyxDQUFDWSxTQUFTLElBQUksQ0FBQ0csT0FBTyxFQUFHO0lBQzdCO0VBQ0Q7O0VBRUE7RUFDQVIsS0FBSyxDQUFDVyxTQUFTLEdBQUc7SUFBQSxPQUFNLElBQUk7RUFBQTtFQUU1QkgsT0FBTyxDQUFDSSxRQUFRLEdBQUcsVUFBRUMsWUFBWSxFQUFNO0lBQ3RDYixLQUFLLENBQUNjLEtBQUssQ0FBQ0MsT0FBTyxHQUFHRixZQUFZO0VBQ25DLENBQUM7RUFFREwsT0FBTyxHQUFHcEIsWUFBWSxDQUNyQiwwQkFBMEIsRUFDMUJvQixPQUFPLEVBQ1BoQixVQUNELENBQUM7RUFFRCxJQUFNd0IsUUFBUSxHQUFHQyxTQUFTLENBQUNDLE1BQU0sQ0FBRWIsU0FBUyxFQUFFRyxPQUFRLENBQUM7RUFFdkQsQ0FBQVoscUJBQUEsR0FBQUosVUFBVSxDQUFDVyxTQUFTLENBQUMsQ0FBQyxDQUFDZ0IsU0FBUyxjQUFBdkIscUJBQUEsd0JBQUFDLHNCQUFBLEdBQWhDRCxxQkFBQSxDQUFrQ3dCLE1BQU0sY0FBQXZCLHNCQUFBLHdCQUFBQyxzQkFBQSxHQUF4Q0Qsc0JBQUEsQ0FBMEN3QixLQUFLLGNBQUF2QixzQkFBQSx1QkFBL0NBLHNCQUFBLENBQUF3QixJQUFBLENBQUF6QixzQkFBQSxFQUFtRCxZQUFNO0lBQ3hEb0IsU0FBUyxDQUFDTSxLQUFLLENBQUVQLFFBQVMsQ0FBQztJQUMzQmhCLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQyxDQUFDO0VBQ2hCLENBQUUsQ0FBQztBQUNKO0FBRUEsaUVBQWVqQyxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL3R1cm5zdGlsZS9mcm9udGVuZC9vYnNlcnZhYmxlSGFuZGxlLmpzPzRiNmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICkge1xyXG5cdGlmICggb2JzZXJ2YWJsZS5wYXJlbnQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7bnVsbHxJbnB1dERhdGF9XHJcblx0ICovXHJcblx0Y29uc3QgdG9rZW4gICAgID0gb2JzZXJ2YWJsZS5nZXRJbnB1dCggJ19jYXB0Y2hhX3Rva2VuJyApO1xyXG5cdGNvbnN0IGZvcm1JRCAgICA9IG9ic2VydmFibGUuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XHJcblx0Y29uc3QgY29udGFpbmVyID0gdG9rZW4ubm9kZXNbIDAgXS5wYXJlbnRFbGVtZW50O1xyXG5cclxuXHRsZXQgb3B0aW9ucyA9IChcclxuXHRcdHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnPy5bIGZvcm1JRCBdID8/IGZhbHNlXHJcblx0KTtcclxuXHJcblx0aWYgKCAhY29udGFpbmVyIHx8ICFvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Ly8gZm9yIGNvcnJlY3QgYXBwbHlpbmcgdmFsaWRhdGlvbiBsb2dpY1xyXG5cdHRva2VuLmlzVmlzaWJsZSA9ICgpID0+IHRydWU7XHJcblxyXG5cdG9wdGlvbnMuY2FsbGJhY2sgPSAoIHJlc3BvbnNlSGFzaCApID0+IHtcclxuXHRcdHRva2VuLnZhbHVlLmN1cnJlbnQgPSByZXNwb25zZUhhc2g7XHJcblx0fTtcclxuXHJcblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcclxuXHRcdCdqZXQuZmIudHVybnN0aWxlLm9wdGlvbnMnLFxyXG5cdFx0b3B0aW9ucyxcclxuXHRcdG9ic2VydmFibGUsXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgd2lkZ2V0SUQgPSB0dXJuc3RpbGUucmVuZGVyKCBjb250YWluZXIsIG9wdGlvbnMgKTtcclxuXHJcblx0b2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5zdWJtaXR0ZXI/LnN0YXR1cz8ud2F0Y2g/LiggKCkgPT4ge1xyXG5cdFx0dHVybnN0aWxlLnJlc2V0KCB3aWRnZXRJRCApO1xyXG5cdFx0dG9rZW4ub25DbGVhcigpO1xyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZUhhbmRsZTsiXSwibmFtZXMiOlsiYXBwbHlGaWx0ZXJzIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwib2JzZXJ2YWJsZUhhbmRsZSIsIm9ic2VydmFibGUiLCJfd2luZG93JEpldEZvcm1CdWlsZGUiLCJfd2luZG93IiwiX3dpbmRvdyRKZXRGb3JtQnVpbGRlMiIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdCIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdDIiLCJfb2JzZXJ2YWJsZSRnZXRTdWJtaXQzIiwicGFyZW50IiwidG9rZW4iLCJnZXRJbnB1dCIsImZvcm1JRCIsImdldFN1Ym1pdCIsImdldEZvcm1JZCIsImNvbnRhaW5lciIsIm5vZGVzIiwicGFyZW50RWxlbWVudCIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJKZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWciLCJpc1Zpc2libGUiLCJjYWxsYmFjayIsInJlc3BvbnNlSGFzaCIsInZhbHVlIiwiY3VycmVudCIsIndpZGdldElEIiwidHVybnN0aWxlIiwicmVuZGVyIiwic3VibWl0dGVyIiwic3RhdHVzIiwid2F0Y2giLCJjYWxsIiwicmVzZXQiLCJvbkNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./turnstile/frontend/observableHandle.js\n");

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