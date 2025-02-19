/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/field/SignalTextField.js":
/*!*******************************************!*\
  !*** ./frontend/field/SignalTextField.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;
function SignalTextField() {
  BaseSignal.call(this);
  this.isSupported = function () {
    return true;
  };
  this.runSignal = function () {
    this.input.calcValue = Number.isNaN(Number(this.input.calcValue)) ? this.input.calcValue : parseFloat(this.input.calcValue);
    const [node] = this.input.nodes;
    if (node.value === this.input.value.current) {
      return;
    }
    node.value = this.input.value.current;
    this.triggerJQuery(node);
  };
}
SignalTextField.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalTextField);

/***/ }),

/***/ "./frontend/field/TextFieldData.js":
/*!*****************************************!*\
  !*** ./frontend/field/TextFieldData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  InputData
} = JetFormBuilderAbstract;
function TextFieldData() {
  InputData.call(this);
  this.isSupported = function () {
    return true;
  };
  this.addListeners = function () {
    InputData.prototype.addListeners.call(this);
    const [node] = this.nodes;
    const button = this.getWrapperNode()?.querySelector?.('.jfb-eye-icon');

    // show eye icon is disabled
    if (!button) {
      return;
    }
    button.addEventListener('click', function () {
      button.classList.toggle('seen');
      const isPressed = this.getAttribute('aria-pressed') === 'true';
      this.setAttribute('aria-pressed', !isPressed);
      node.type = button.classList.contains('seen') ? 'password' : 'text';
    });
    button.addEventListener('keydown', function (event) {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        this.click();
      }
    });
    button.addEventListener('keyup', function (event) {
      if (event.key === ' ') {
        event.preventDefault();
      }
    });
  };
}
TextFieldData.prototype = Object.create(InputData.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextFieldData);

/***/ }),

/***/ "./shared/eye.icon.scss":
/*!******************************!*\
  !*** ./shared/eye.icon.scss ***!
  \******************************/
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./frontend/field/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextFieldData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextFieldData */ "./frontend/field/TextFieldData.js");
/* harmony import */ var _SignalTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignalTextField */ "./frontend/field/SignalTextField.js");
/* harmony import */ var _shared_eye_icon_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/eye.icon.scss */ "./shared/eye.icon.scss");



const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/text-field', function (inputs) {
  inputs.push(_TextFieldData__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return inputs;
}, 999);
addFilter('jet.fb.signals', 'jet-form-builder/text-field', function (signals) {
  signals.push(_SignalTextField__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return signals;
}, 999);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7O0FDcERBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi10ZXh0LWZpZWxkLy4vZnJvbnRlbmQvZmllbGQvU2lnbmFsVGV4dEZpZWxkLmpzIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkLy4vZnJvbnRlbmQvZmllbGQvVGV4dEZpZWxkRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC8uL3NoYXJlZC9leWUuaWNvbi5zY3NzPzg1NzEiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC8uL2Zyb250ZW5kL2ZpZWxkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQmFzZVNpZ25hbCB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIFNpZ25hbFRleHRGaWVsZCgpIHtcclxuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH07XHJcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gTnVtYmVyLmlzTmFOKCBOdW1iZXIoIHRoaXMuaW5wdXQuY2FsY1ZhbHVlICkgKVxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuaW5wdXQuY2FsY1ZhbHVlXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdCggdGhpcy5pbnB1dC5jYWxjVmFsdWUgKTtcclxuXHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0aWYgKCBub2RlLnZhbHVlID09PSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRub2RlLnZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbFRleHRGaWVsZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsVGV4dEZpZWxkOyIsImNvbnN0IHtcclxuXHQgICAgICBJbnB1dERhdGEsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gVGV4dEZpZWxkRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycy5jYWxsKCB0aGlzICk7XHJcblxyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKT8ucXVlcnlTZWxlY3Rvcj8uKFxyXG5cdFx0XHQnLmpmYi1leWUtaWNvbicsXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIHNob3cgZXllIGljb24gaXMgZGlzYWJsZWRcclxuXHRcdGlmICggIWJ1dHRvbiApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCAnc2VlbicgKTtcclxuXHRcdFx0Y29uc3QgaXNQcmVzc2VkID0gdGhpcy5nZXRBdHRyaWJ1dGUoICdhcmlhLXByZXNzZWQnICkgPT09ICd0cnVlJztcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoICdhcmlhLXByZXNzZWQnLCAhaXNQcmVzc2VkICk7XHJcblxyXG5cdFx0XHRub2RlLnR5cGUgPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCAnc2VlbicgKVxyXG5cdFx0XHQgICAgICAgICAgICA/ICdwYXNzd29yZCdcclxuXHRcdFx0ICAgICAgICAgICAgOiAndGV4dCc7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRcdFx0aWYgKCBldmVudC5rZXkgPT09ICcgJyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicgKSB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLmNsaWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRcdFx0aWYgKCBldmVudC5rZXkgPT09ICcgJyApIHtcclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblx0fTtcclxufVxyXG5cclxuVGV4dEZpZWxkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0RmllbGREYXRhOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRleHRGaWVsZERhdGEgZnJvbSBcIi4vVGV4dEZpZWxkRGF0YVwiO1xyXG5pbXBvcnQgU2lnbmFsVGV4dEZpZWxkIGZyb20gXCIuL1NpZ25hbFRleHRGaWVsZFwiO1xyXG5pbXBvcnQgJy4uLy4uL3NoYXJlZC9leWUuaWNvbi5zY3NzJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci90ZXh0LWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cy5wdXNoKCBUZXh0RmllbGREYXRhICk7XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG5cdDk5OVxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvdGV4dC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscy5wdXNoKCBTaWduYWxUZXh0RmllbGQgKTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG5cdDk5OVxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==