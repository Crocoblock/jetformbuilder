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
/* harmony import */ var _sanitizeDynamicCheckbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanitizeDynamicCheckbox */ "./frontend/sanitizeDynamicCheckbox.js");

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
  this.sanitize(value => (0,_sanitizeDynamicCheckbox__WEBPACK_IMPORTED_MODULE_0__["default"])(value, this));
};

/**
 * @param event {Event}
 */
DynamicCheckboxData.prototype.onChangeValue = function (event) {
  if (event.target.classList.contains('jet-form-builder__field')) {
    CheckboxData.prototype.onChangeValue.call(this, event);
    return;
  }
  const realInput = event.target.closest('.jet-form-builder__field-wrap').querySelector('.jet-form-builder__field');
  realInput.checked = event.target.checked;
  CheckboxData.prototype.onChangeValue.call(this, event);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvLi9mcm9udGVuZC9EeW5hbWljQ2hlY2tib3hEYXRhLmpzIiwid2VicGFjazovL2pmYi1lbmdpbmUtY2hlY2stbWFyay8uL2Zyb250ZW5kL3Jlc29sdmVDaGVja01hcmsuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1jaGVjay1tYXJrLy4vZnJvbnRlbmQvc2FuaXRpemVEeW5hbWljQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1jaGVjay1tYXJrLy4vZnJvbnRlbmQvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1jaGVjay1tYXJrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLWNoZWNrLW1hcmsvLi9mcm9udGVuZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXRpemVEeW5hbWljQ2hlY2tib3ggZnJvbSAnLi9zYW5pdGl6ZUR5bmFtaWNDaGVja2JveCc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQ2hlY2tib3hEYXRhLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIER5bmFtaWNDaGVja2JveERhdGEoKSB7XHJcblx0Q2hlY2tib3hEYXRhLmNhbGwoIHRoaXMgKTtcclxufVxyXG5cclxuRHluYW1pY0NoZWNrYm94RGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDaGVja2JveERhdGEucHJvdG90eXBlICk7XHJcblxyXG5EeW5hbWljQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Q2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZC5jYWxsKCB0aGlzLCBub2RlICkgJiZcclxuXHRcdCEhbm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXRlbXBsYXRlIC53cC1ibG9jay1qZXQtZm9ybXMtY2hlY2stbWFyayBpbnB1dCcsXHJcblx0XHQpXHJcblx0KTtcclxufTtcclxuXHJcbkR5bmFtaWNDaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRDaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycy5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuc2FuaXRpemUoIHZhbHVlID0+IHNhbml0aXplRHluYW1pY0NoZWNrYm94KCB2YWx1ZSwgdGhpcyApICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIGV2ZW50IHtFdmVudH1cclxuICovXHJcbkR5bmFtaWNDaGVja2JveERhdGEucHJvdG90eXBlLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkJyApICkge1xyXG5cdFx0Q2hlY2tib3hEYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlLmNhbGwoIHRoaXMsIGV2ZW50ICk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVhbElucHV0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxyXG5cdCkucXVlcnlTZWxlY3RvcihcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQnLFxyXG5cdCk7XHJcblxyXG5cdHJlYWxJbnB1dC5jaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcblx0Q2hlY2tib3hEYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlLmNhbGwoIHRoaXMsIGV2ZW50ICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljQ2hlY2tib3hEYXRhOyIsImZ1bmN0aW9uIHJlc29sdmVDaGVja01hcmsoIG5vZGUgKSB7XHJcblx0cmV0dXJuIG5vZGUuY2xvc2VzdChcclxuXHRcdCcuY2hlY2tyYWRpby13cmFwJ1xyXG5cdCkucXVlcnlTZWxlY3RvcihcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdGVtcGxhdGUgLndwLWJsb2NrLWpldC1mb3Jtcy1jaGVjay1tYXJrIGlucHV0J1xyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVDaGVja01hcms7IiwiaW1wb3J0IHJlc29sdmVDaGVja01hcmsgZnJvbSAnQHJvb3QvYXNzZXRzL3NyYy9mcm9udGVuZC9yZXNvbHZlQ2hlY2tNYXJrJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxyXG4gKiBAcGFyYW0gaW5wdXQge0R5bmFtaWNDaGVja2JveERhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBzYW5pdGl6ZUR5bmFtaWNDaGVja2JveCggdmFsdWUsIGlucHV0ICkge1xyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XHJcblx0XHRwcm9jZXNzT3B0aW9uKCBub2RlLCB2YWx1ZSwgaW5wdXQgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxyXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxyXG4gKiBAcGFyYW0gaW5wdXQge0R5bmFtaWNDaGVja2JveERhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzT3B0aW9uKCBub2RlLCB2YWx1ZSwgaW5wdXQgKSB7XHJcblx0aWYgKCBub2RlLmRhdGFzZXQuY3VzdG9tICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2hlY2tNYXJrTm9kZSAgID0gcmVzb2x2ZUNoZWNrTWFyayggbm9kZSApO1xyXG5cdGNoZWNrTWFya05vZGUuY2hlY2tlZCA9IG5vZGUuY2hlY2tlZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVEeW5hbWljQ2hlY2tib3g7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXgucGNzcyc7XHJcbmltcG9ydCBEeW5hbWljQ2hlY2tib3hEYXRhIGZyb20gJy4vRHluYW1pY0NoZWNrYm94RGF0YSc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2hvaWNlLXdpdGgtY2hlY2stbWFyaycsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIER5bmFtaWNDaGVja2JveERhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuXHQyMFxyXG4pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9