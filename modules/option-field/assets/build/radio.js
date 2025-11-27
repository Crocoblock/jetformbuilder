/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/radio/RadioData.js":
/*!********************************************!*\
  !*** ./frontend/blocks/radio/RadioData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  strict_mode = false
} = window?.JetFormBuilderSettings;
const STRICT_MODE = Boolean(strict_mode);
const {
  InputData,
  ReactiveHook
} = JetFormBuilderAbstract;
const {
  getParsedName
} = JetFormBuilderFunctions;
function RadioData() {
  InputData.call(this);
  this.wrapper = null;
}
RadioData.prototype = Object.create(InputData.prototype);
RadioData.prototype.wrapper = null;
RadioData.prototype.isSupported = function (node) {
  return node.classList.contains('checkradio-wrap') && node.querySelector('.radio-wrap');
};
RadioData.prototype.addListeners = function () {
  this.enterKey = new ReactiveHook();
  this.wrapper.addEventListener('change', this.onChangeValue.bind(this));
  this.wrapper.addEventListener('keydown', this.handleEnterKey.bind(this));
  const input = this.getCustomInput();
  this.wrapper.addEventListener('focusout', event => {
    if ([...this.nodes].includes(event?.relatedTarget) || [event.relatedTarget, event.target].includes(input)) {
      return;
    }
    this.reportOnBlur();
  });
  input?.addEventListener?.('blur', event => {
    const prevValue = this.value.current;

    // update this.value.current
    this.setValue();

    // trigger signals & reporting
    if (prevValue === this.value.current) {
      this.onChange(prevValue);
    }
  });
  !STRICT_MODE && jQuery(this.wrapper).on('change', event => {
    if (this.value.current == event.target.value || event.target?.dataset?.custom) {
      return;
    }
    this.callable.lockTrigger();
    this.setValue();
    this.callable.unlockTrigger();
  });
};
RadioData.prototype.setValue = function () {
  this.value.current = this.getActiveValue();
};
RadioData.prototype.onChangeValue = function (event) {
  event.target.dataset.custom ? this.toggleCustomOption() : this.setValue();
};
RadioData.prototype.toggleCustomOption = function () {
  const node = this.lastNode();
  const input = this.getCustomInput();
  if (input.disabled === node.checked) {
    input.disabled = !node.checked;
  }
  if (node.checked) {
    input.focus();
  }
};
RadioData.prototype.getActiveValue = function () {
  for (const node of this.nodes) {
    if (node.dataset.custom) {
      continue;
    }
    if (node.checked) {
      return node.value;
    }
  }
  if (!this.hasCustom) {
    return '';
  }
  return this.getCustomInput().value;
};
RadioData.prototype.setNode = function (node) {
  node.jfbSync = this;
  /**
   * It should be live collection for the case when items may change
   */
  this.nodes = node.getElementsByClassName('jet-form-builder__field radio-field');
  this.rawName = this.nodes[0].name;
  this.name = getParsedName(this.rawName);
  this.inputType = 'radio';

  /**
   * @type {HTMLElement|HTMLInputElement}
   */
  this.wrapper = node;
  this.hasCustom = !!this.lastNode()?.dataset?.custom;
};
RadioData.prototype.lastNode = function () {
  return this.nodes[this.nodes.length - 1];
};
RadioData.prototype.getCustomInput = function () {
  const lastWrapper = this.lastNode().closest('.custom-option');
  return lastWrapper?.querySelector?.('input.text-field');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioData);

/***/ }),

/***/ "./frontend/blocks/radio/SignalRadio.js":
/*!**********************************************!*\
  !*** ./frontend/blocks/radio/SignalRadio.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;

/**
 * @property input {RadioData}
 */
function SignalRadio() {
  BaseSignal.call(this);
  this.isSupported = function (node, inputData) {
    return 'radio' === node.type;
  };
  this.runSignal = function () {
    this.input.calcValue = 0;
    for (const node of this.input.nodes) {
      var _node$dataset$calcula;
      if (node.dataset.custom) {
        continue;
      }
      node.checked = this.input.value.current === node.value;
      if (!node.checked) {
        continue;
      }
      this.input.calcValue += parseFloat((_node$dataset$calcula = node.dataset?.calculate) !== null && _node$dataset$calcula !== void 0 ? _node$dataset$calcula : node.value);
      this.triggerJQuery(node);
      break;
    }
    if (!this.input.hasCustom) {
      return;
    }
    const lastNode = this.input.lastNode();
    const input = this.input.getCustomInput();
    if (input.disabled === lastNode.checked) {
      input.disabled = !lastNode.checked;
    }
    const value = this.input.value.current;
    if (!lastNode.checked || input.value === value) {
      return;
    }
    input.value = value;
  };
}
SignalRadio.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalRadio);

/***/ }),

/***/ "./frontend/blocks/radio/index.pcss":
/*!******************************************!*\
  !*** ./frontend/blocks/radio/index.pcss ***!
  \******************************************/
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
/*!***************************************!*\
  !*** ./frontend/blocks/radio/main.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioData */ "./frontend/blocks/radio/RadioData.js");
/* harmony import */ var _SignalRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignalRadio */ "./frontend/blocks/radio/SignalRadio.js");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.pcss */ "./frontend/blocks/radio/index.pcss");



const {
  addFilter
} = JetPlugins.hooks;
window.JetFormBuilderAbstract = {
  ...window.JetFormBuilderAbstract,
  RadioData: _RadioData__WEBPACK_IMPORTED_MODULE_0__["default"],
  SignalRadio: _SignalRadio__WEBPACK_IMPORTED_MODULE_1__["default"]
};
addFilter('jet.fb.inputs', 'jet-form-builder/radio-field', function (inputs) {
  inputs = [_RadioData__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/radio-field', function (signals) {
  signals = [_SignalRadio__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUMxREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vUmFkaW9EYXRhLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vU2lnbmFsUmFkaW8uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9pbmRleC5wY3NzPzFmM2QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHN0cmljdF9tb2RlID0gZmFsc2UgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcclxuXHJcbmNvbnN0IFNUUklDVF9NT0RFID0gQm9vbGVhbiggc3RyaWN0X21vZGUgKTtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBJbnB1dERhdGEsXHJcblx0ICAgICAgUmVhY3RpdmVIb29rLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmNvbnN0IHsgZ2V0UGFyc2VkTmFtZSB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBSYWRpb0RhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53cmFwcGVyID0gbnVsbDtcclxufVxyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUud3JhcHBlciA9IG51bGw7XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0bm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdjaGVja3JhZGlvLXdyYXAnICkgJiZcclxuXHRcdG5vZGUucXVlcnlTZWxlY3RvciggJy5yYWRpby13cmFwJyApXHJcblx0KTtcclxufTtcclxuUmFkaW9EYXRhLnByb3RvdHlwZS5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcclxuXHJcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlVmFsdWUuYmluZCggdGhpcyApICk7XHJcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQna2V5ZG93bicsXHJcblx0XHR0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q3VzdG9tSW5wdXQoKTtcclxuXHJcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c291dCcsIGV2ZW50ID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0WyAuLi50aGlzLm5vZGVzIF0uaW5jbHVkZXMoIGV2ZW50Py5yZWxhdGVkVGFyZ2V0ICkgfHxcclxuXHRcdFx0WyBldmVudC5yZWxhdGVkVGFyZ2V0LCBldmVudC50YXJnZXQgXS5pbmNsdWRlcyggaW5wdXQgKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVwb3J0T25CbHVyKCk7XHJcblx0fSApO1xyXG5cclxuXHRpbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcj8uKCAnYmx1cicsIGV2ZW50ID0+IHtcclxuXHRcdGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHQvLyB1cGRhdGUgdGhpcy52YWx1ZS5jdXJyZW50XHJcblx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblxyXG5cdFx0Ly8gdHJpZ2dlciBzaWduYWxzICYgcmVwb3J0aW5nXHJcblx0XHRpZiAoIHByZXZWYWx1ZSA9PT0gdGhpcy52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0XHR0aGlzLm9uQ2hhbmdlKCBwcmV2VmFsdWUgKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIHRoaXMud3JhcHBlciApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlIHx8XHJcblx0XHRcdGV2ZW50LnRhcmdldD8uZGF0YXNldD8uY3VzdG9tXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xyXG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XHJcblx0fSApO1xyXG59O1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XHJcbn07XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdGV2ZW50LnRhcmdldC5kYXRhc2V0LmN1c3RvbSA/IHRoaXMudG9nZ2xlQ3VzdG9tT3B0aW9uKCkgOiB0aGlzLnNldFZhbHVlKCk7XHJcbn1cclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUudG9nZ2xlQ3VzdG9tT3B0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IG5vZGUgID0gdGhpcy5sYXN0Tm9kZSgpO1xyXG5cdGNvbnN0IGlucHV0ID0gdGhpcy5nZXRDdXN0b21JbnB1dCgpO1xyXG5cclxuXHRpZiAoIGlucHV0LmRpc2FibGVkID09PSBub2RlLmNoZWNrZWQgKSB7XHJcblx0XHRpbnB1dC5kaXNhYmxlZCA9ICFub2RlLmNoZWNrZWQ7XHJcblx0fVxyXG5cclxuXHRpZiAoIG5vZGUuY2hlY2tlZCApIHtcclxuXHRcdGlucHV0LmZvY3VzKCk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUuZ2V0QWN0aXZlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzICkge1xyXG5cdFx0aWYgKCBub2RlLmRhdGFzZXQuY3VzdG9tICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGlmICggbm9kZS5jaGVja2VkICkge1xyXG5cdFx0XHRyZXR1cm4gbm9kZS52YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICggIXRoaXMuaGFzQ3VzdG9tICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXMuZ2V0Q3VzdG9tSW5wdXQoKS52YWx1ZTtcclxufTtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xyXG5cdC8qKlxyXG5cdCAqIEl0IHNob3VsZCBiZSBsaXZlIGNvbGxlY3Rpb24gZm9yIHRoZSBjYXNlIHdoZW4gaXRlbXMgbWF5IGNoYW5nZVxyXG5cdCAqL1xyXG5cdHRoaXMubm9kZXMgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQgcmFkaW8tZmllbGQnICk7XHJcblxyXG5cdHRoaXMucmF3TmFtZSAgID0gdGhpcy5ub2Rlc1sgMCBdLm5hbWU7XHJcblx0dGhpcy5uYW1lICAgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcclxuXHR0aGlzLmlucHV0VHlwZSA9ICdyYWRpbyc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMud3JhcHBlciA9IG5vZGU7XHJcblxyXG5cdHRoaXMuaGFzQ3VzdG9tID0gISEoXHJcblx0XHR0aGlzLmxhc3ROb2RlKCk/LmRhdGFzZXQ/LmN1c3RvbVxyXG5cdCk7XHJcbn07XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLmxhc3ROb2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLm5vZGVzWyB0aGlzLm5vZGVzLmxlbmd0aCAtIDEgXTtcclxufTtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tSW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgbGFzdFdyYXBwZXIgPSB0aGlzLmxhc3ROb2RlKCkuY2xvc2VzdCggJy5jdXN0b20tb3B0aW9uJyApO1xyXG5cclxuXHRyZXR1cm4gbGFzdFdyYXBwZXI/LnF1ZXJ5U2VsZWN0b3I/LiggJ2lucHV0LnRleHQtZmllbGQnICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYWRpb0RhdGE7IiwiY29uc3Qge1xyXG5cdCAgICAgIEJhc2VTaWduYWwsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSBpbnB1dCB7UmFkaW9EYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gU2lnbmFsUmFkaW8oKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcclxuXHRcdHJldHVybiAncmFkaW8nID09PSBub2RlLnR5cGU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IDA7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLmlucHV0Lm5vZGVzICkge1xyXG5cdFx0XHRpZiAoIG5vZGUuZGF0YXNldC5jdXN0b20gKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0bm9kZS5jaGVja2VkID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID09PSBub2RlLnZhbHVlO1xyXG5cclxuXHRcdFx0aWYgKCAhbm9kZS5jaGVja2VkICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxyXG5cdFx0XHRcdG5vZGUuZGF0YXNldD8uY2FsY3VsYXRlID8/IG5vZGUudmFsdWUsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhdGhpcy5pbnB1dC5oYXNDdXN0b20gKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsYXN0Tm9kZSA9IHRoaXMuaW5wdXQubGFzdE5vZGUoKTtcclxuXHRcdGNvbnN0IGlucHV0ICAgID0gdGhpcy5pbnB1dC5nZXRDdXN0b21JbnB1dCgpO1xyXG5cclxuXHRcdGlmICggaW5wdXQuZGlzYWJsZWQgPT09IGxhc3ROb2RlLmNoZWNrZWQgKSB7XHJcblx0XHRcdGlucHV0LmRpc2FibGVkID0gIWxhc3ROb2RlLmNoZWNrZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0aWYgKCAhbGFzdE5vZGUuY2hlY2tlZCB8fCBpbnB1dC52YWx1ZSA9PT0gdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbFJhZGlvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSYWRpbzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBSYWRpb0RhdGEgZnJvbSAnLi9SYWRpb0RhdGEnO1xyXG5pbXBvcnQgU2lnbmFsUmFkaW8gZnJvbSAnLi9TaWduYWxSYWRpbyc7XHJcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XHJcblx0Li4ud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QsXHJcblx0UmFkaW9EYXRhLFxyXG5cdFNpZ25hbFJhZGlvLFxyXG59O1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yYWRpby1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIFJhZGlvRGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmFkaW8tZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcclxuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbFJhZGlvLCAuLi5zaWduYWxzIF07XHJcblxyXG5cdFx0cmV0dXJuIHNpZ25hbHM7XHJcblx0fSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=