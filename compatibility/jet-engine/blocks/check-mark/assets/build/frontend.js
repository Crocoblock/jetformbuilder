/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/DynamicCheckboxData.js":
/*!*****************************************!*\
  !*** ./frontend/DynamicCheckboxData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resolveCheckMark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveCheckMark */ "./frontend/resolveCheckMark.js");
/* harmony import */ var _sanitizeDynamicCheckbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanitizeDynamicCheckbox */ "./frontend/sanitizeDynamicCheckbox.js");


const {
  CheckboxData
} = JetFormBuilderAbstract;
function DynamicCheckboxData() {
  CheckboxData.call(this);
}
DynamicCheckboxData.prototype = Object.create(CheckboxData.prototype);
DynamicCheckboxData.prototype.isSupported = function (node) {
  return CheckboxData.prototype.isSupported.call(this, node) && !!node.querySelector('.jet-form-builder__field-template .wp-block-jet-forms-check-mark input');
};
DynamicCheckboxData.prototype.addListeners = function () {
  CheckboxData.prototype.addListeners.call(this);
  this.sanitize(value => (0,_sanitizeDynamicCheckbox__WEBPACK_IMPORTED_MODULE_1__["default"])(value, this));
};
DynamicCheckboxData.prototype.processValueFormSingleChoice = function (node, value) {
  const prevLength = value.length;
  CheckboxData.prototype.processValueFormSingleChoice.call(this, node, value);
  if (value.includes(node.value)) {
    return;
  }
  const checkMark = (0,_resolveCheckMark__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  if (checkMark?.checked) {
    value.push(node.value);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicCheckboxData);

/***/ }),

/***/ "./frontend/resolveCheckMark.js":
/*!**************************************!*\
  !*** ./frontend/resolveCheckMark.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function resolveCheckMark(node) {
  return node.closest('.checkradio-wrap').querySelector('.jet-form-builder__field-template .wp-block-jet-forms-check-mark input');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveCheckMark);

/***/ }),

/***/ "./frontend/sanitizeDynamicCheckbox.js":
/*!*********************************************!*\
  !*** ./frontend/sanitizeDynamicCheckbox.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_assets_src_frontend_resolveCheckMark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/assets/src/frontend/resolveCheckMark */ "./frontend/resolveCheckMark.js");


/**
 * @param value {Array}
 * @param input {DynamicCheckboxData}
 */
function sanitizeDynamicCheckbox(value, input) {
  for (const node of input.nodes) {
    processOption(node, value, input);
  }
  return value;
}

/**
 * @param node {Element}
 * @param value {Array}
 * @param input {DynamicCheckboxData}
 */
function processOption(node, value, input) {
  if (node.dataset.custom) {
    return;
  }
  const checkMarkNode = (0,_root_assets_src_frontend_resolveCheckMark__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  checkMarkNode.checked = node.checked;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sanitizeDynamicCheckbox);

/***/ }),

/***/ "./frontend/index.pcss":
/*!*****************************!*\
  !*** ./frontend/index.pcss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.pcss */ "./frontend/index.pcss");
/* harmony import */ var _DynamicCheckboxData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicCheckboxData */ "./frontend/DynamicCheckboxData.js");


const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/choice-with-check-mark', function (inputs) {
  inputs = [_DynamicCheckboxData__WEBPACK_IMPORTED_MODULE_1__["default"], ...inputs];
  return inputs;
}, 20);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvLi9mcm9udGVuZC9EeW5hbWljQ2hlY2tib3hEYXRhLmpzIiwid2VicGFjazovL2pmYi1lbmdpbmUtY2hlY2stbWFyay8uL2Zyb250ZW5kL3Jlc29sdmVDaGVja01hcmsuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1jaGVjay1tYXJrLy4vZnJvbnRlbmQvc2FuaXRpemVEeW5hbWljQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1jaGVjay1tYXJrLy4vZnJvbnRlbmQvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1jaGVjay1tYXJrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvLi9mcm9udGVuZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzb2x2ZUNoZWNrTWFyayBmcm9tICcuL3Jlc29sdmVDaGVja01hcmsnO1xyXG5pbXBvcnQgc2FuaXRpemVEeW5hbWljQ2hlY2tib3ggZnJvbSAnLi9zYW5pdGl6ZUR5bmFtaWNDaGVja2JveCc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQ2hlY2tib3hEYXRhLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNDaGVja2JveERhdGEoKSB7XHJcblx0Q2hlY2tib3hEYXRhLmNhbGwoIHRoaXMgKTtcclxufVxyXG5cclxuRHluYW1pY0NoZWNrYm94RGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDaGVja2JveERhdGEucHJvdG90eXBlICk7XHJcblxyXG5EeW5hbWljQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Q2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZC5jYWxsKCB0aGlzLCBub2RlICkgJiZcclxuXHRcdCEhbm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXRlbXBsYXRlIC53cC1ibG9jay1qZXQtZm9ybXMtY2hlY2stbWFyayBpbnB1dCcsXHJcblx0XHQpXHJcblx0KTtcclxufTtcclxuXHJcbkR5bmFtaWNDaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRDaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycy5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuc2FuaXRpemUoIHZhbHVlID0+IHNhbml0aXplRHluYW1pY0NoZWNrYm94KCB2YWx1ZSwgdGhpcyApICk7XHJcbn07XHJcblxyXG5EeW5hbWljQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlID0gZnVuY3Rpb24gKFxyXG5cdG5vZGUsIHZhbHVlLFxyXG4pIHtcclxuXHJcblx0Y29uc3QgcHJldkxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcclxuXHJcblx0Q2hlY2tib3hEYXRhLnByb3RvdHlwZS5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlLmNhbGwoXHJcblx0XHR0aGlzLFxyXG5cdFx0bm9kZSxcclxuXHRcdHZhbHVlLFxyXG5cdCk7XHJcblxyXG5cdGlmICggdmFsdWUuaW5jbHVkZXMoIG5vZGUudmFsdWUgKSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNoZWNrTWFyayA9IHJlc29sdmVDaGVja01hcmsoIG5vZGUgKTtcclxuXHJcblx0aWYgKCBjaGVja01hcms/LmNoZWNrZWQgKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCBub2RlLnZhbHVlICk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0NoZWNrYm94RGF0YTsiLCJmdW5jdGlvbiByZXNvbHZlQ2hlY2tNYXJrKCBub2RlICkge1xyXG5cdHJldHVybiBub2RlLmNsb3Nlc3QoXHJcblx0XHQnLmNoZWNrcmFkaW8td3JhcCdcclxuXHQpLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXRlbXBsYXRlIC53cC1ibG9jay1qZXQtZm9ybXMtY2hlY2stbWFyayBpbnB1dCdcclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlQ2hlY2tNYXJrOyIsImltcG9ydCByZXNvbHZlQ2hlY2tNYXJrIGZyb20gJ0Byb290L2Fzc2V0cy9zcmMvZnJvbnRlbmQvcmVzb2x2ZUNoZWNrTWFyayc7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHZhbHVlIHtBcnJheX1cclxuICogQHBhcmFtIGlucHV0IHtEeW5hbWljQ2hlY2tib3hEYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gc2FuaXRpemVEeW5hbWljQ2hlY2tib3goIHZhbHVlLCBpbnB1dCApIHtcclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIGlucHV0Lm5vZGVzICkge1xyXG5cdFx0cHJvY2Vzc09wdGlvbiggbm9kZSwgdmFsdWUsIGlucHV0ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cclxuICogQHBhcmFtIHZhbHVlIHtBcnJheX1cclxuICogQHBhcmFtIGlucHV0IHtEeW5hbWljQ2hlY2tib3hEYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc09wdGlvbiggbm9kZSwgdmFsdWUsIGlucHV0ICkge1xyXG5cdGlmICggbm9kZS5kYXRhc2V0LmN1c3RvbSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNoZWNrTWFya05vZGUgICA9IHJlc29sdmVDaGVja01hcmsoIG5vZGUgKTtcclxuXHRjaGVja01hcmtOb2RlLmNoZWNrZWQgPSBub2RlLmNoZWNrZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplRHluYW1pY0NoZWNrYm94OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xyXG5pbXBvcnQgRHluYW1pY0NoZWNrYm94RGF0YSBmcm9tICcuL0R5bmFtaWNDaGVja2JveERhdGEnO1xyXG5cclxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2Nob2ljZS13aXRoLWNoZWNrLW1hcmsnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBEeW5hbWljQ2hlY2tib3hEYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcblx0MjBcclxuKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==