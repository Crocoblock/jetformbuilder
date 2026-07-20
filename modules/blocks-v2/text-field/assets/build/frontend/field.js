/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/field/SignalTextField.js"
/*!*******************************************!*\
  !*** ./frontend/field/SignalTextField.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;
const {
  toDate,
  toDateTime,
  toTime
} = JetFormBuilderFunctions;
function formatNativeDateLikeValue(node, value) {
  if ('' === value || null === value || undefined === value) {
    return '';
  }
  if (Number.isNaN(Number(value))) {
    return value;
  }
  const date = new Date(Number(value));
  if ('date' === node.type) {
    return toDate(date);
  }
  if ('time' === node.type) {
    return toTime(date);
  }
  if ('datetime-local' === node.type) {
    return toDateTime(date);
  }
  return value;
}
function SignalTextField() {
  BaseSignal.call(this);
  this.isSupported = function () {
    return true;
  };
  this.runSignal = function () {
    this.input.calcValue = Number.isNaN(Number(this.input.calcValue)) ? this.input.calcValue : parseFloat(this.input.calcValue);
    const [node] = this.input.nodes;
    const nextValue = ['date', 'time', 'datetime-local'].includes(node.type) ? formatNativeDateLikeValue(node, this.input.value.current) : this.input.value.current;
    if (node.value === nextValue) {
      return;
    }
    node.value = nextValue;
    this.triggerJQuery(node);
  };
}
SignalTextField.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalTextField);

/***/ },

/***/ "./frontend/field/TextFieldData.js"
/*!*****************************************!*\
  !*** ./frontend/field/TextFieldData.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./shared/eye.icon.scss"
/*!******************************!*\
  !*** ./shared/eye.icon.scss ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUNwREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvLi9mcm9udGVuZC9maWVsZC9TaWduYWxUZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvLi9mcm9udGVuZC9maWVsZC9UZXh0RmllbGREYXRhLmpzIiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkLy4vc2hhcmVkL2V5ZS5pY29uLnNjc3M/ODU3MSIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXRleHQtZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItdGV4dC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi10ZXh0LWZpZWxkLy4vZnJvbnRlbmQvZmllbGQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBCYXNlU2lnbmFsIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuY29uc3Qge1xuXHQgICAgICB0b0RhdGUsXG5cdCAgICAgIHRvRGF0ZVRpbWUsXG5cdCAgICAgIHRvVGltZSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuZnVuY3Rpb24gZm9ybWF0TmF0aXZlRGF0ZUxpa2VWYWx1ZSggbm9kZSwgdmFsdWUgKSB7XG5cdGlmICggJycgPT09IHZhbHVlIHx8IG51bGwgPT09IHZhbHVlIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYgKCBOdW1iZXIuaXNOYU4oIE51bWJlciggdmFsdWUgKSApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggTnVtYmVyKCB2YWx1ZSApICk7XG5cblx0aWYgKCAnZGF0ZScgPT09IG5vZGUudHlwZSApIHtcblx0XHRyZXR1cm4gdG9EYXRlKCBkYXRlICk7XG5cdH1cblxuXHRpZiAoICd0aW1lJyA9PT0gbm9kZS50eXBlICkge1xuXHRcdHJldHVybiB0b1RpbWUoIGRhdGUgKTtcblx0fVxuXG5cdGlmICggJ2RhdGV0aW1lLWxvY2FsJyA9PT0gbm9kZS50eXBlICkge1xuXHRcdHJldHVybiB0b0RhdGVUaW1lKCBkYXRlICk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIFNpZ25hbFRleHRGaWVsZCgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IE51bWJlci5pc05hTiggTnVtYmVyKCB0aGlzLmlucHV0LmNhbGNWYWx1ZSApIClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5pbnB1dC5jYWxjVmFsdWVcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdCggdGhpcy5pbnB1dC5jYWxjVmFsdWUgKTtcblxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2Rlcztcblx0XHRjb25zdCBuZXh0VmFsdWUgPSBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApXG5cdFx0XHQ/IGZvcm1hdE5hdGl2ZURhdGVMaWtlVmFsdWUoIG5vZGUsIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApXG5cdFx0XHQ6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdGlmICggbm9kZS52YWx1ZSA9PT0gbmV4dFZhbHVlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG5vZGUudmFsdWUgPSBuZXh0VmFsdWU7XG5cblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcblx0fTtcbn1cblxuU2lnbmFsVGV4dEZpZWxkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFRleHRGaWVsZDtcbiIsImNvbnN0IHtcblx0ICAgICAgSW5wdXREYXRhLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIFRleHRGaWVsZERhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycy5jYWxsKCB0aGlzICk7XG5cblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk/LnF1ZXJ5U2VsZWN0b3I/Lihcblx0XHRcdCcuamZiLWV5ZS1pY29uJyxcblx0XHQpO1xuXG5cdFx0Ly8gc2hvdyBleWUgaWNvbiBpcyBkaXNhYmxlZFxuXHRcdGlmICggIWJ1dHRvbiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoICdzZWVuJyApO1xuXHRcdFx0Y29uc3QgaXNQcmVzc2VkID0gdGhpcy5nZXRBdHRyaWJ1dGUoICdhcmlhLXByZXNzZWQnICkgPT09ICd0cnVlJztcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCAnYXJpYS1wcmVzc2VkJywgIWlzUHJlc3NlZCApO1xuXG5cdFx0XHRub2RlLnR5cGUgPSBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCAnc2VlbicgKVxuXHRcdFx0ICAgICAgICAgICAgPyAncGFzc3dvcmQnXG5cdFx0XHQgICAgICAgICAgICA6ICd0ZXh0Jztcblx0XHR9ICk7XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdFx0aWYgKCBldmVudC5rZXkgPT09ICcgJyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicgKSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdHRoaXMuY2xpY2soKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHRcdGlmICggZXZlbnQua2V5ID09PSAnICcgKSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xufVxuXG5UZXh0RmllbGREYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkRGF0YTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRleHRGaWVsZERhdGEgZnJvbSBcIi4vVGV4dEZpZWxkRGF0YVwiO1xuaW1wb3J0IFNpZ25hbFRleHRGaWVsZCBmcm9tIFwiLi9TaWduYWxUZXh0RmllbGRcIjtcbmltcG9ydCAnLi4vLi4vc2hhcmVkL2V5ZS5pY29uLnNjc3MnO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3RleHQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMucHVzaCggVGV4dEZpZWxkRGF0YSApO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcblx0OTk5XG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3RleHQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscy5wdXNoKCBTaWduYWxUZXh0RmllbGQgKTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuXHQ5OTlcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9