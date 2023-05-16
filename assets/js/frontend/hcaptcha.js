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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./frontend/hcaptcha/observableHandle.js\");\n\nwindow.jfbHCaptchaOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/hCaptcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9oY2FwdGNoYS9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtEO0FBRWxEQyxNQUFNLENBQUNDLGlCQUFpQixHQUFHLFlBQVk7RUFDdEMsSUFBUUMsU0FBUyxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBOUJGLFNBQVM7RUFFakIsU0FBQUcsRUFBQSxNQUFBQyxjQUFBLEdBQTBCQyxNQUFNLENBQUNDLE1BQU0sQ0FBRUMsY0FBZSxDQUFDLEVBQUFKLEVBQUEsR0FBQUMsY0FBQSxDQUFBSSxNQUFBLEVBQUFMLEVBQUEsSUFBRztJQUF0RCxJQUFNTSxVQUFVLEdBQUFMLGNBQUEsQ0FBQUQsRUFBQTtJQUNyQixJQUFLLENBQUNNLFVBQVUsQ0FBQ0MsY0FBYyxDQUFFLFlBQWEsQ0FBQyxFQUFHO01BQ2pEO0lBQ0Q7SUFDQWIsNkRBQWdCLENBQUVZLFVBQVcsQ0FBQztFQUMvQjtFQUVBVCxTQUFTLENBQ1Isc0JBQXNCLEVBQ3RCLDJCQUEyQixFQUMzQkgseURBQ0QsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9oY2FwdGNoYS9tYWluLmpzPzlkNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9ic2VydmFibGVIYW5kbGUgZnJvbSAnLi9vYnNlcnZhYmxlSGFuZGxlJztcclxuXHJcbndpbmRvdy5qZmJIQ2FwdGNoYU9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcblx0Zm9yICggY29uc3Qgb2JzZXJ2YWJsZSBvZiBPYmplY3QudmFsdWVzKCBKZXRGb3JtQnVpbGRlciApICkge1xyXG5cdFx0aWYgKCAhb2JzZXJ2YWJsZS5oYXNPd25Qcm9wZXJ0eSggJ2lzT2JzZXJ2ZWQnICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSggb2JzZXJ2YWJsZSApO1xyXG5cdH1cclxuXHJcblx0YWRkQWN0aW9uKFxyXG5cdFx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2hDYXB0Y2hhJyxcclxuXHRcdG9ic2VydmFibGVIYW5kbGUsXHJcblx0KTtcclxufTsiXSwibmFtZXMiOlsib2JzZXJ2YWJsZUhhbmRsZSIsIndpbmRvdyIsImpmYkhDYXB0Y2hhT25Mb2FkIiwiYWRkQWN0aW9uIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwiX2kiLCJfT2JqZWN0JHZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsIkpldEZvcm1CdWlsZGVyIiwibGVuZ3RoIiwib2JzZXJ2YWJsZSIsImhhc093blByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./frontend/hcaptcha/main.js\n");

/***/ }),

/***/ "./frontend/hcaptcha/observableHandle.js":
/*!***********************************************!*\
  !*** ./frontend/hcaptcha/observableHandle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _window$JetFormBuilde2, _observable$getSubmit, _observable$getSubmit2, _observable$getSubmit3;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 ? void 0 : (_window$JetFormBuilde2 = _window.JetFormBuilderCaptchaConfig) === null || _window$JetFormBuilde2 === void 0 ? void 0 : _window$JetFormBuilde2[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.hCaptcha.options', options, observable);\n  var widgetID = hcaptcha.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 ? void 0 : (_observable$getSubmit2 = _observable$getSubmit.status) === null || _observable$getSubmit2 === void 0 ? void 0 : (_observable$getSubmit3 = _observable$getSubmit2.watch) === null || _observable$getSubmit3 === void 0 ? void 0 : _observable$getSubmit3.call(_observable$getSubmit2, function () {\n    hcaptcha.reset(widgetID);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9oY2FwdGNoYS9vYnNlcnZhYmxlSGFuZGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFRQSxZQUFZLEdBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFqQ0YsWUFBWTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsU0FBU0csZ0JBQWdCQSxDQUFFQyxVQUFVLEVBQUc7RUFBQSxJQUFBQyxxQkFBQSxFQUFBQyxPQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBLEVBQUFDLHNCQUFBO0VBQ3ZDLElBQUtOLFVBQVUsQ0FBQ08sTUFBTSxFQUFHO0lBQ3hCO0VBQ0Q7O0VBRUE7QUFDRDtBQUNBO0VBQ0MsSUFBTUMsS0FBSyxHQUFPUixVQUFVLENBQUNTLFFBQVEsQ0FBRSxnQkFBaUIsQ0FBQztFQUN6RCxJQUFNQyxNQUFNLEdBQU1WLFVBQVUsQ0FBQ1csU0FBUyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEQsSUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNNLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQ0MsYUFBYTtFQUVoRCxJQUFJQyxPQUFPLElBQUFmLHFCQUFBLElBQUFDLE9BQUEsR0FDVmUsTUFBTSxjQUFBZixPQUFBLHdCQUFBQyxzQkFBQSxHQUFORCxPQUFBLENBQVFnQiwyQkFBMkIsY0FBQWYsc0JBQUEsdUJBQW5DQSxzQkFBQSxDQUF1Q08sTUFBTSxDQUFFLGNBQUFULHFCQUFBLGNBQUFBLHFCQUFBLEdBQUksS0FDbkQ7RUFFRCxJQUFLLENBQUNZLFNBQVMsSUFBSSxDQUFDRyxPQUFPLEVBQUc7SUFDN0I7RUFDRDs7RUFFQTtFQUNBUixLQUFLLENBQUNXLFNBQVMsR0FBRztJQUFBLE9BQU0sSUFBSTtFQUFBO0VBRTVCSCxPQUFPLENBQUNJLFFBQVEsR0FBRyxVQUFFQyxZQUFZLEVBQU07SUFDdENiLEtBQUssQ0FBQ2MsS0FBSyxDQUFDQyxPQUFPLEdBQUdGLFlBQVk7RUFDbkMsQ0FBQztFQUVETCxPQUFPLEdBQUdwQixZQUFZLENBQ3JCLHlCQUF5QixFQUN6Qm9CLE9BQU8sRUFDUGhCLFVBQ0QsQ0FBQztFQUVELElBQU13QixRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFFYixTQUFTLEVBQUVHLE9BQVEsQ0FBQztFQUV0RCxDQUFBWixxQkFBQSxHQUFBSixVQUFVLENBQUNXLFNBQVMsQ0FBQyxDQUFDLENBQUNnQixTQUFTLGNBQUF2QixxQkFBQSx3QkFBQUMsc0JBQUEsR0FBaENELHFCQUFBLENBQWtDd0IsTUFBTSxjQUFBdkIsc0JBQUEsd0JBQUFDLHNCQUFBLEdBQXhDRCxzQkFBQSxDQUEwQ3dCLEtBQUssY0FBQXZCLHNCQUFBLHVCQUEvQ0Esc0JBQUEsQ0FBQXdCLElBQUEsQ0FBQXpCLHNCQUFBLEVBQW1ELFlBQU07SUFDeERvQixRQUFRLENBQUNNLEtBQUssQ0FBRVAsUUFBUyxDQUFDO0VBQzNCLENBQUUsQ0FBQztBQUNKO0FBRUEsaUVBQWV6QixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9oY2FwdGNoYS9vYnNlcnZhYmxlSGFuZGxlLmpzP2ZlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICkge1xyXG5cdGlmICggb2JzZXJ2YWJsZS5wYXJlbnQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7bnVsbHxJbnB1dERhdGF9XHJcblx0ICovXHJcblx0Y29uc3QgdG9rZW4gICAgID0gb2JzZXJ2YWJsZS5nZXRJbnB1dCggJ19jYXB0Y2hhX3Rva2VuJyApO1xyXG5cdGNvbnN0IGZvcm1JRCAgICA9IG9ic2VydmFibGUuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XHJcblx0Y29uc3QgY29udGFpbmVyID0gdG9rZW4ubm9kZXNbIDAgXS5wYXJlbnRFbGVtZW50O1xyXG5cclxuXHRsZXQgb3B0aW9ucyA9IChcclxuXHRcdHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJDYXB0Y2hhQ29uZmlnPy5bIGZvcm1JRCBdID8/IGZhbHNlXHJcblx0KTtcclxuXHJcblx0aWYgKCAhY29udGFpbmVyIHx8ICFvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Ly8gZm9yIGNvcnJlY3QgYXBwbHlpbmcgdmFsaWRhdGlvbiBsb2dpY1xyXG5cdHRva2VuLmlzVmlzaWJsZSA9ICgpID0+IHRydWU7XHJcblxyXG5cdG9wdGlvbnMuY2FsbGJhY2sgPSAoIHJlc3BvbnNlSGFzaCApID0+IHtcclxuXHRcdHRva2VuLnZhbHVlLmN1cnJlbnQgPSByZXNwb25zZUhhc2g7XHJcblx0fTtcclxuXHJcblx0b3B0aW9ucyA9IGFwcGx5RmlsdGVycyhcclxuXHRcdCdqZXQuZmIuaENhcHRjaGEub3B0aW9ucycsXHJcblx0XHRvcHRpb25zLFxyXG5cdFx0b2JzZXJ2YWJsZSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCB3aWRnZXRJRCA9IGhjYXB0Y2hhLnJlbmRlciggY29udGFpbmVyLCBvcHRpb25zICk7XHJcblxyXG5cdG9ic2VydmFibGUuZ2V0U3VibWl0KCkuc3VibWl0dGVyPy5zdGF0dXM/LndhdGNoPy4oICgpID0+IHtcclxuXHRcdGhjYXB0Y2hhLnJlc2V0KCB3aWRnZXRJRCApO1xyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZUhhbmRsZTsiXSwibmFtZXMiOlsiYXBwbHlGaWx0ZXJzIiwiSmV0UGx1Z2lucyIsImhvb2tzIiwib2JzZXJ2YWJsZUhhbmRsZSIsIm9ic2VydmFibGUiLCJfd2luZG93JEpldEZvcm1CdWlsZGUiLCJfd2luZG93IiwiX3dpbmRvdyRKZXRGb3JtQnVpbGRlMiIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdCIsIl9vYnNlcnZhYmxlJGdldFN1Ym1pdDIiLCJfb2JzZXJ2YWJsZSRnZXRTdWJtaXQzIiwicGFyZW50IiwidG9rZW4iLCJnZXRJbnB1dCIsImZvcm1JRCIsImdldFN1Ym1pdCIsImdldEZvcm1JZCIsImNvbnRhaW5lciIsIm5vZGVzIiwicGFyZW50RWxlbWVudCIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJKZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWciLCJpc1Zpc2libGUiLCJjYWxsYmFjayIsInJlc3BvbnNlSGFzaCIsInZhbHVlIiwiY3VycmVudCIsIndpZGdldElEIiwiaGNhcHRjaGEiLCJyZW5kZXIiLCJzdWJtaXR0ZXIiLCJzdGF0dXMiLCJ3YXRjaCIsImNhbGwiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./frontend/hcaptcha/observableHandle.js\n");

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