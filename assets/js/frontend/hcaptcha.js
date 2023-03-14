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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./frontend/hcaptcha/observableHandle.js\");\n\nwindow.jfbHCaptchaOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/hCaptcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9oY2FwdGNoYS9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtEO0FBRWxEQyxNQUFNLENBQUNDLGlCQUFpQixHQUFHLFlBQVk7RUFDdEMsSUFBUUMsU0FBUyxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBOUJGLFNBQVM7RUFFakIsU0FBQUcsRUFBQSxNQUFBQyxjQUFBLEdBQTBCQyxNQUFNLENBQUNDLE1BQU0sQ0FBRUMsY0FBYyxDQUFFLEVBQUFKLEVBQUEsR0FBQUMsY0FBQSxDQUFBSSxNQUFBLEVBQUFMLEVBQUEsSUFBRztJQUF0RCxJQUFNTSxVQUFVLEdBQUFMLGNBQUEsQ0FBQUQsRUFBQTtJQUNyQixJQUFLLENBQUNNLFVBQVUsQ0FBQ0MsY0FBYyxDQUFFLFlBQVksQ0FBRSxFQUFHO01BQ2pEO0lBQ0Q7SUFDQWIsNkRBQWdCLENBQUVZLFVBQVUsQ0FBRTtFQUMvQjtFQUVBVCxTQUFTLENBQ1Isc0JBQXNCLEVBQ3RCLDJCQUEyQixFQUMzQkgseURBQWdCLENBQ2hCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2hjYXB0Y2hhL21haW4uanM/OWQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JzZXJ2YWJsZUhhbmRsZSBmcm9tICcuL29ic2VydmFibGVIYW5kbGUnO1xyXG5cclxud2luZG93LmpmYkhDYXB0Y2hhT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIEpldEZvcm1CdWlsZGVyICkgKSB7XHJcblx0XHRpZiAoICFvYnNlcnZhYmxlLmhhc093blByb3BlcnR5KCAnaXNPYnNlcnZlZCcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICk7XHJcblx0fVxyXG5cclxuXHRhZGRBY3Rpb24oXHJcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvaENhcHRjaGEnLFxyXG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSxcclxuXHQpO1xyXG59OyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlSGFuZGxlIiwid2luZG93IiwiamZiSENhcHRjaGFPbkxvYWQiLCJhZGRBY3Rpb24iLCJKZXRQbHVnaW5zIiwiaG9va3MiLCJfaSIsIl9PYmplY3QkdmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiSmV0Rm9ybUJ1aWxkZXIiLCJsZW5ndGgiLCJvYnNlcnZhYmxlIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./frontend/hcaptcha/main.js\n");

/***/ }),

/***/ "./frontend/hcaptcha/observableHandle.js":
/*!***********************************************!*\
  !*** ./frontend/hcaptcha/observableHandle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _window$JetFormBuilde2, _observable$getSubmit;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde2 = _window.JetFormBuilderCaptchaConfig) === null || _window$JetFormBuilde2 === void 0 ? void 0 : _window$JetFormBuilde2[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.hCaptcha.options', options, observable);\n  var widgetID = hcaptcha.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 ? void 0 : _observable$getSubmit.watchFail(function () {\n    hcaptcha.reset(widgetID);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9oY2FwdGNoYS9vYnNlcnZhYmxlSGFuZGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFRQSxZQUFZLEdBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFqQ0YsWUFBWTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsU0FBU0csZ0JBQWdCQSxDQUFFQyxVQUFVLEVBQUc7RUFBQSxJQUFBQyxxQkFBQSxFQUFBQyxPQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHFCQUFBO0VBQ3ZDLElBQUtKLFVBQVUsQ0FBQ0ssTUFBTSxFQUFHO0lBQ3hCO0VBQ0Q7O0VBRUE7QUFDRDtBQUNBO0VBQ0MsSUFBTUMsS0FBSyxHQUFPTixVQUFVLENBQUNPLFFBQVEsQ0FBRSxnQkFBZ0IsQ0FBRTtFQUN6RCxJQUFNQyxNQUFNLEdBQU1SLFVBQVUsQ0FBQ1MsU0FBUyxFQUFFLENBQUNDLFNBQVMsRUFBRTtFQUNwRCxJQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ00sS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDQyxhQUFhO0VBRWhELElBQUlDLE9BQU8sSUFBQWIscUJBQUEsSUFBQUMsT0FBQSxHQUNWYSxNQUFNLGNBQUFiLE9BQUEsd0JBQUFDLHNCQUFBLEdBQU5ELE9BQUEsQ0FBUWMsMkJBQTJCLGNBQUFiLHNCQUFBLHVCQUFuQ0Esc0JBQUEsQ0FBdUNLLE1BQU0sQ0FBRSxjQUFBUCxxQkFBQSxjQUFBQSxxQkFBQSxHQUFJLEtBQ25EO0VBRUQsSUFBSyxDQUFDVSxTQUFTLElBQUksQ0FBQ0csT0FBTyxFQUFHO0lBQzdCO0VBQ0Q7O0VBRUE7RUFDQVIsS0FBSyxDQUFDVyxTQUFTLEdBQUc7SUFBQSxPQUFNLElBQUk7RUFBQTtFQUU1QkgsT0FBTyxDQUFDSSxRQUFRLEdBQUcsVUFBRUMsWUFBWSxFQUFNO0lBQ3RDYixLQUFLLENBQUNjLEtBQUssQ0FBQ0MsT0FBTyxHQUFHRixZQUFZO0VBQ25DLENBQUM7RUFFREwsT0FBTyxHQUFHbEIsWUFBWSxDQUNyQix5QkFBeUIsRUFDekJrQixPQUFPLEVBQ1BkLFVBQVUsQ0FDVjtFQUVELElBQU1zQixRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFFYixTQUFTLEVBQUVHLE9BQU8sQ0FBRTtFQUV0RCxDQUFBVixxQkFBQSxHQUFBSixVQUFVLENBQUNTLFNBQVMsRUFBRSxDQUFDZ0IsU0FBUyxjQUFBckIscUJBQUEsdUJBQWhDQSxxQkFBQSxDQUFrQ3NCLFNBQVMsQ0FBRSxZQUFNO0lBQ2xESCxRQUFRLENBQUNJLEtBQUssQ0FBRUwsUUFBUSxDQUFFO0VBQzNCLENBQUMsQ0FBRTtBQUNKO0FBRUEsaUVBQWV2QixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9oY2FwdGNoYS9vYnNlcnZhYmxlSGFuZGxlLmpzP2ZlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICkge1xyXG5cdGlmICggb2JzZXJ2YWJsZS5wYXJlbnQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7bnVsbHxJbnB1dERhdGF9XHJcblx0ICovXHJcblx0Y29uc3QgdG9rZW4gICAgID0gb2JzZXJ2YWJsZS5nZXRJbnB1dCggJ19jYXB0Y2hhX3Rva2VuJyApO1xyXG5cdGNvbnN0IGZvcm1JRCAgICA9IG9ic2VydmFibGUuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XHJcblx0Y29uc3QgY29udGFpbmVyID0gdG9rZW4ubm9kZXNbIDAgXS5wYXJlbnRFbGVtZW50O1xyXG5cclxuXHRsZXQgb3B0aW9ucyA9IChcclxuXHRcdHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnPy5bIGZvcm1JRCBdID8/IGZhbHNlXHJcblx0KTtcclxuXHJcblx0aWYgKCAhY29udGFpbmVyIHx8ICFvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Ly8gZm9yIGNvcnJlY3QgYXBwbHlpbmcgdmFsaWRhdGlvbiBsb2dpY1xyXG5cdHRva2VuLmlzVmlzaWJsZSA9ICgpID0+IHRydWU7XHJcblxyXG5cdG9wdGlvbnMuY2FsbGJhY2sgPSAoIHJlc3BvbnNlSGFzaCApID0+IHtcclxuXHRcdHRva2VuLnZhbHVlLmN1cnJlbnQgPSByZXNwb25zZUhhc2g7XHJcblx0fTtcclxuXHJcblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcclxuXHRcdCdqZXQuZmIuaENhcHRjaGEub3B0aW9ucycsXHJcblx0XHRvcHRpb25zLFxyXG5cdFx0b2JzZXJ2YWJsZSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCB3aWRnZXRJRCA9IGhjYXB0Y2hhLnJlbmRlciggY29udGFpbmVyLCBvcHRpb25zICk7XHJcblxyXG5cdG9ic2VydmFibGUuZ2V0U3VibWl0KCkuc3VibWl0dGVyPy53YXRjaEZhaWwoICgpID0+IHtcclxuXHRcdGhjYXB0Y2hhLnJlc2V0KCB3aWRnZXRJRCApO1xyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZUhhbmRsZTsiXSwibmFtZXMiOlsiYXBwbHlGaWx0ZXJzIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwib2JzZXJ2YWJsZUhhbmRsZSIsIm9ic2VydmFibGUiLCJfd2luZG93JEpldEZvcm1CdWlsZGUiLCJfd2luZG93IiwiX3dpbmRvdyRKZXRGb3JtQnVpbGRlMiIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdCIsInBhcmVudCIsInRva2VuIiwiZ2V0SW5wdXQiLCJmb3JtSUQiLCJnZXRTdWJtaXQiLCJnZXRGb3JtSWQiLCJjb250YWluZXIiLCJub2RlcyIsInBhcmVudEVsZW1lbnQiLCJvcHRpb25zIiwid2luZG93IiwiSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnIiwiaXNWaXNpYmxlIiwiY2FsbGJhY2siLCJyZXNwb25zZUhhc2giLCJ2YWx1ZSIsImN1cnJlbnQiLCJ3aWRnZXRJRCIsImhjYXB0Y2hhIiwicmVuZGVyIiwic3VibWl0dGVyIiwid2F0Y2hGYWlsIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./frontend/hcaptcha/observableHandle.js\n");

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