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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7O0FDcERBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC8uL2Zyb250ZW5kL2ZpZWxkL1NpZ25hbFRleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC8uL2Zyb250ZW5kL2ZpZWxkL1RleHRGaWVsZERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvLi9zaGFyZWQvZXllLmljb24uc2Nzcz84NTcxIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvLi9mcm9udGVuZC9maWVsZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IEJhc2VTaWduYWwgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIFNpZ25hbFRleHRGaWVsZCgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IE51bWJlci5pc05hTiggTnVtYmVyKCB0aGlzLmlucHV0LmNhbGNWYWx1ZSApIClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5pbnB1dC5jYWxjVmFsdWVcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdCggdGhpcy5pbnB1dC5jYWxjVmFsdWUgKTtcblxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdGlmICggbm9kZS52YWx1ZSA9PT0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG5vZGUudmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcblx0fTtcbn1cblxuU2lnbmFsVGV4dEZpZWxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFRleHRGaWVsZDsiLCJjb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBUZXh0RmllbGREYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5hZGRMaXN0ZW5lcnMuY2FsbCggdGhpcyApO1xuXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpPy5xdWVyeVNlbGVjdG9yPy4oXG5cdFx0XHQnLmpmYi1leWUtaWNvbicsXG5cdFx0KTtcblxuXHRcdC8vIHNob3cgZXllIGljb24gaXMgZGlzYWJsZWRcblx0XHRpZiAoICFidXR0b24gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCAnc2VlbicgKTtcblx0XHRcdGNvbnN0IGlzUHJlc3NlZCA9IHRoaXMuZ2V0QXR0cmlidXRlKCAnYXJpYS1wcmVzc2VkJyApID09PSAndHJ1ZSc7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSggJ2FyaWEtcHJlc3NlZCcsICFpc1ByZXNzZWQgKTtcblxuXHRcdFx0bm9kZS50eXBlID0gYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyggJ3NlZW4nIClcblx0XHRcdCAgICAgICAgICAgID8gJ3Bhc3N3b3JkJ1xuXHRcdFx0ICAgICAgICAgICAgOiAndGV4dCc7XG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHRcdGlmICggZXZlbnQua2V5ID09PSAnICcgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInICkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmNsaWNrKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdFx0XHRpZiAoIGV2ZW50LmtleSA9PT0gJyAnICkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcbn1cblxuVGV4dEZpZWxkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRGaWVsZERhdGE7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGV4dEZpZWxkRGF0YSBmcm9tIFwiLi9UZXh0RmllbGREYXRhXCI7XG5pbXBvcnQgU2lnbmFsVGV4dEZpZWxkIGZyb20gXCIuL1NpZ25hbFRleHRGaWVsZFwiO1xuaW1wb3J0ICcuLi8uLi9zaGFyZWQvZXllLmljb24uc2Nzcyc7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvdGV4dC1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cy5wdXNoKCBUZXh0RmllbGREYXRhICk7XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuXHQ5OTlcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvdGV4dC1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzLnB1c2goIFNpZ25hbFRleHRGaWVsZCApO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG5cdDk5OVxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=