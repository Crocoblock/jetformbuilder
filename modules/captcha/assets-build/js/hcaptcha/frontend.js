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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observableHandle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observableHandle */ \"./hcaptcha/frontend/observableHandle.js\");\n\nwindow.jfbHCaptchaOnLoad = function () {\n  var addAction = JetPlugins.hooks.addAction;\n  for (var _i = 0, _Object$values = Object.values(JetFormBuilder); _i < _Object$values.length; _i++) {\n    var observable = _Object$values[_i];\n    if (!observable.hasOwnProperty('isObserved')) {\n      continue;\n    }\n    (0,_observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(observable);\n  }\n  addAction('jet.fb.observe.after', 'jet-form-builder/hCaptcha', _observableHandle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oY2FwdGNoYS9mcm9udGVuZC9tYWluLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtEO0FBRWxEQyxNQUFNLENBQUNDLGlCQUFpQixHQUFHLFlBQVk7RUFDdEMsSUFBUUMsU0FBUyxHQUFLQyxVQUFVLENBQUNDLEtBQUssQ0FBOUJGLFNBQVM7RUFFakIsU0FBQUcsRUFBQSxNQUFBQyxjQUFBLEdBQTBCQyxNQUFNLENBQUNDLE1BQU0sQ0FBRUMsY0FBZSxDQUFDLEVBQUFKLEVBQUEsR0FBQUMsY0FBQSxDQUFBSSxNQUFBLEVBQUFMLEVBQUEsSUFBRztJQUF0RCxJQUFNTSxVQUFVLEdBQUFMLGNBQUEsQ0FBQUQsRUFBQTtJQUNyQixJQUFLLENBQUNNLFVBQVUsQ0FBQ0MsY0FBYyxDQUFFLFlBQWEsQ0FBQyxFQUFHO01BQ2pEO0lBQ0Q7SUFDQWIsNkRBQWdCLENBQUVZLFVBQVcsQ0FBQztFQUMvQjtFQUVBVCxTQUFTLENBQ1Isc0JBQXNCLEVBQ3RCLDJCQUEyQixFQUMzQkgseURBQ0QsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2hjYXB0Y2hhL2Zyb250ZW5kL21haW4uanM/ZTA4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JzZXJ2YWJsZUhhbmRsZSBmcm9tICcuL29ic2VydmFibGVIYW5kbGUnO1xyXG5cclxud2luZG93LmpmYkhDYXB0Y2hhT25Mb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuXHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlIG9mIE9iamVjdC52YWx1ZXMoIEpldEZvcm1CdWlsZGVyICkgKSB7XHJcblx0XHRpZiAoICFvYnNlcnZhYmxlLmhhc093blByb3BlcnR5KCAnaXNPYnNlcnZlZCcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlSGFuZGxlKCBvYnNlcnZhYmxlICk7XHJcblx0fVxyXG5cclxuXHRhZGRBY3Rpb24oXHJcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvaENhcHRjaGEnLFxyXG5cdFx0b2JzZXJ2YWJsZUhhbmRsZSxcclxuXHQpO1xyXG59OyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlSGFuZGxlIiwid2luZG93IiwiamZiSENhcHRjaGFPbkxvYWQiLCJhZGRBY3Rpb24iLCJKZXRQbHVnaW5zIiwiaG9va3MiLCJfaSIsIl9PYmplY3QkdmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiSmV0Rm9ybUJ1aWxkZXIiLCJsZW5ndGgiLCJvYnNlcnZhYmxlIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hcaptcha/frontend/main.js\n");

/***/ }),

/***/ "./hcaptcha/frontend/observableHandle.js":
/*!***********************************************!*\
  !*** ./hcaptcha/frontend/observableHandle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar applyFilters = JetPlugins.hooks.applyFilters;\n\n/**\r\n * @param observable {Observable}\r\n */\nfunction observableHandle(observable) {\n  var _window$JetFormBuilde, _window, _observable$getSubmit, _observable$getSubmit2;\n  if (observable.parent) {\n    return;\n  }\n\n  /**\r\n   * @type {null|InputData}\r\n   */\n  var token = observable.getInput('_captcha_token');\n  var formID = observable.getSubmit().getFormId();\n  var container = token.nodes[0].parentElement;\n  var options = (_window$JetFormBuilde = (_window = window) === null || _window === void 0 || (_window = _window.JetFormBuilderCaptchaConfig) === null || _window === void 0 ? void 0 : _window[formID]) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : false;\n  if (!container || !options) {\n    return;\n  }\n\n  // for correct applying validation logic\n  token.isVisible = function () {\n    return true;\n  };\n  options.callback = function (responseHash) {\n    token.value.current = responseHash;\n  };\n  options = applyFilters('jet.fb.hCaptcha.options', options, observable);\n  var widgetID = hcaptcha.render(container, options);\n  (_observable$getSubmit = observable.getSubmit().submitter) === null || _observable$getSubmit === void 0 || (_observable$getSubmit = _observable$getSubmit.status) === null || _observable$getSubmit === void 0 || (_observable$getSubmit2 = _observable$getSubmit.watch) === null || _observable$getSubmit2 === void 0 ? void 0 : _observable$getSubmit2.call(_observable$getSubmit, function () {\n    hcaptcha.reset(widgetID);\n    token.onClear();\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observableHandle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oY2FwdGNoYS9mcm9udGVuZC9vYnNlcnZhYmxlSGFuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFRQSxZQUFZLEdBQUtDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFqQ0YsWUFBWTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsU0FBU0csZ0JBQWdCQSxDQUFFQyxVQUFVLEVBQUc7RUFBQSxJQUFBQyxxQkFBQSxFQUFBQyxPQUFBLEVBQUFDLHFCQUFBLEVBQUFDLHNCQUFBO0VBQ3ZDLElBQUtKLFVBQVUsQ0FBQ0ssTUFBTSxFQUFHO0lBQ3hCO0VBQ0Q7O0VBRUE7QUFDRDtBQUNBO0VBQ0MsSUFBTUMsS0FBSyxHQUFPTixVQUFVLENBQUNPLFFBQVEsQ0FBRSxnQkFBaUIsQ0FBQztFQUN6RCxJQUFNQyxNQUFNLEdBQU1SLFVBQVUsQ0FBQ1MsU0FBUyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDcEQsSUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNNLEtBQUssQ0FBRSxDQUFDLENBQUUsQ0FBQ0MsYUFBYTtFQUVoRCxJQUFJQyxPQUFPLElBQUFiLHFCQUFBLElBQUFDLE9BQUEsR0FDVmEsTUFBTSxjQUFBYixPQUFBLGdCQUFBQSxPQUFBLEdBQU5BLE9BQUEsQ0FBUWMsMkJBQTJCLGNBQUFkLE9BQUEsdUJBQW5DQSxPQUFBLENBQXVDTSxNQUFNLENBQUUsY0FBQVAscUJBQUEsY0FBQUEscUJBQUEsR0FBSSxLQUNuRDtFQUVELElBQUssQ0FBQ1UsU0FBUyxJQUFJLENBQUNHLE9BQU8sRUFBRztJQUM3QjtFQUNEOztFQUVBO0VBQ0FSLEtBQUssQ0FBQ1csU0FBUyxHQUFHO0lBQUEsT0FBTSxJQUFJO0VBQUE7RUFFNUJILE9BQU8sQ0FBQ0ksUUFBUSxHQUFHLFVBQUVDLFlBQVksRUFBTTtJQUN0Q2IsS0FBSyxDQUFDYyxLQUFLLENBQUNDLE9BQU8sR0FBR0YsWUFBWTtFQUNuQyxDQUFDO0VBRURMLE9BQU8sR0FBR2xCLFlBQVksQ0FDckIseUJBQXlCLEVBQ3pCa0IsT0FBTyxFQUNQZCxVQUNELENBQUM7RUFFRCxJQUFNc0IsUUFBUSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBRWIsU0FBUyxFQUFFRyxPQUFRLENBQUM7RUFFdEQsQ0FBQVgscUJBQUEsR0FBQUgsVUFBVSxDQUFDUyxTQUFTLENBQUMsQ0FBQyxDQUFDZ0IsU0FBUyxjQUFBdEIscUJBQUEsZ0JBQUFBLHFCQUFBLEdBQWhDQSxxQkFBQSxDQUFrQ3VCLE1BQU0sY0FBQXZCLHFCQUFBLGdCQUFBQyxzQkFBQSxHQUF4Q0QscUJBQUEsQ0FBMEN3QixLQUFLLGNBQUF2QixzQkFBQSx1QkFBL0NBLHNCQUFBLENBQUF3QixJQUFBLENBQUF6QixxQkFBQSxFQUFtRCxZQUFNO0lBQ3hEb0IsUUFBUSxDQUFDTSxLQUFLLENBQUVQLFFBQVMsQ0FBQztJQUMxQmhCLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQyxDQUFDO0VBQ2hCLENBQUUsQ0FBQztBQUNKO0FBRUEsaUVBQWUvQixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2hjYXB0Y2hhL2Zyb250ZW5kL29ic2VydmFibGVIYW5kbGUuanM/YjllOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cclxuICovXHJcbmZ1bmN0aW9uIG9ic2VydmFibGVIYW5kbGUoIG9ic2VydmFibGUgKSB7XHJcblx0aWYgKCBvYnNlcnZhYmxlLnBhcmVudCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtudWxsfElucHV0RGF0YX1cclxuXHQgKi9cclxuXHRjb25zdCB0b2tlbiAgICAgPSBvYnNlcnZhYmxlLmdldElucHV0KCAnX2NhcHRjaGFfdG9rZW4nICk7XHJcblx0Y29uc3QgZm9ybUlEICAgID0gb2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcclxuXHRjb25zdCBjb250YWluZXIgPSB0b2tlbi5ub2Rlc1sgMCBdLnBhcmVudEVsZW1lbnQ7XHJcblxyXG5cdGxldCBvcHRpb25zID0gKFxyXG5cdFx0d2luZG93Py5KZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWc/LlsgZm9ybUlEIF0gPz8gZmFsc2VcclxuXHQpO1xyXG5cclxuXHRpZiAoICFjb250YWluZXIgfHwgIW9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgY29ycmVjdCBhcHBseWluZyB2YWxpZGF0aW9uIGxvZ2ljXHJcblx0dG9rZW4uaXNWaXNpYmxlID0gKCkgPT4gdHJ1ZTtcclxuXHJcblx0b3B0aW9ucy5jYWxsYmFjayA9ICggcmVzcG9uc2VIYXNoICkgPT4ge1xyXG5cdFx0dG9rZW4udmFsdWUuY3VycmVudCA9IHJlc3BvbnNlSGFzaDtcclxuXHR9O1xyXG5cclxuXHRvcHRpb25zID0gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0J2pldC5mYi5oQ2FwdGNoYS5vcHRpb25zJyxcclxuXHRcdG9wdGlvbnMsXHJcblx0XHRvYnNlcnZhYmxlLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHdpZGdldElEID0gaGNhcHRjaGEucmVuZGVyKCBjb250YWluZXIsIG9wdGlvbnMgKTtcclxuXHJcblx0b2JzZXJ2YWJsZS5nZXRTdWJtaXQoKS5zdWJtaXR0ZXI/LnN0YXR1cz8ud2F0Y2g/LiggKCkgPT4ge1xyXG5cdFx0aGNhcHRjaGEucmVzZXQoIHdpZGdldElEICk7XHJcblx0XHR0b2tlbi5vbkNsZWFyKCk7XHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZhYmxlSGFuZGxlOyJdLCJuYW1lcyI6WyJhcHBseUZpbHRlcnMiLCJKZXRQbHVnaW5zIiwiaG9va3MiLCJvYnNlcnZhYmxlSGFuZGxlIiwib2JzZXJ2YWJsZSIsIl93aW5kb3ckSmV0Rm9ybUJ1aWxkZSIsIl93aW5kb3ciLCJfb2JzZXJ2YWJsZSRnZXRTdWJtaXQiLCJfb2JzZXJ2YWJsZSRnZXRTdWJtaXQyIiwicGFyZW50IiwidG9rZW4iLCJnZXRJbnB1dCIsImZvcm1JRCIsImdldFN1Ym1pdCIsImdldEZvcm1JZCIsImNvbnRhaW5lciIsIm5vZGVzIiwicGFyZW50RWxlbWVudCIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJKZXRGb3JtQnVpbGRlckNhcHRjaGFDb25maWciLCJpc1Zpc2libGUiLCJjYWxsYmFjayIsInJlc3BvbnNlSGFzaCIsInZhbHVlIiwiY3VycmVudCIsIndpZGdldElEIiwiaGNhcHRjaGEiLCJyZW5kZXIiLCJzdWJtaXR0ZXIiLCJzdGF0dXMiLCJ3YXRjaCIsImNhbGwiLCJyZXNldCIsIm9uQ2xlYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hcaptcha/frontend/observableHandle.js\n");

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