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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUMxREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vUmFkaW9EYXRhLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vU2lnbmFsUmFkaW8uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9pbmRleC5wY3NzPzFmM2QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHN0cmljdF9tb2RlID0gZmFsc2UgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuY29uc3QgU1RSSUNUX01PREUgPSBCb29sZWFuKCBzdHJpY3RfbW9kZSApO1xuXG5jb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgUmVhY3RpdmVIb29rLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHsgZ2V0UGFyc2VkTmFtZSB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIFJhZGlvRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndyYXBwZXIgPSBudWxsO1xufVxuXG5SYWRpb0RhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0cmV0dXJuIChcblx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSAmJlxuXHRcdG5vZGUucXVlcnlTZWxlY3RvciggJy5yYWRpby13cmFwJyApXG5cdCk7XG59O1xuUmFkaW9EYXRhLnByb3RvdHlwZS5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlVmFsdWUuYmluZCggdGhpcyApICk7XG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdrZXlkb3duJyxcblx0XHR0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSxcblx0KTtcblxuXHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q3VzdG9tSW5wdXQoKTtcblxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3Vzb3V0JywgZXZlbnQgPT4ge1xuXHRcdGlmIChcblx0XHRcdFsgLi4udGhpcy5ub2RlcyBdLmluY2x1ZGVzKCBldmVudD8ucmVsYXRlZFRhcmdldCApIHx8XG5cdFx0XHRbIGV2ZW50LnJlbGF0ZWRUYXJnZXQsIGV2ZW50LnRhcmdldCBdLmluY2x1ZGVzKCBpbnB1dCApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMucmVwb3J0T25CbHVyKCk7XG5cdH0gKTtcblxuXHRpbnB1dD8uYWRkRXZlbnRMaXN0ZW5lcj8uKCAnYmx1cicsIGV2ZW50ID0+IHtcblx0XHRjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0XHQvLyB1cGRhdGUgdGhpcy52YWx1ZS5jdXJyZW50XG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXG5cdFx0Ly8gdHJpZ2dlciBzaWduYWxzICYgcmVwb3J0aW5nXG5cdFx0aWYgKCBwcmV2VmFsdWUgPT09IHRoaXMudmFsdWUuY3VycmVudCApIHtcblx0XHRcdHRoaXMub25DaGFuZ2UoIHByZXZWYWx1ZSApO1xuXHRcdH1cblx0fSApO1xuXG5cdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIHRoaXMud3JhcHBlciApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdGlmIChcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9PSBldmVudC50YXJnZXQudmFsdWUgfHxcblx0XHRcdGV2ZW50LnRhcmdldD8uZGF0YXNldD8uY3VzdG9tXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcblx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XG5cdH0gKTtcbn07XG5cblJhZGlvRGF0YS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcbn07XG5cblJhZGlvRGF0YS5wcm90b3R5cGUub25DaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdGV2ZW50LnRhcmdldC5kYXRhc2V0LmN1c3RvbSA/IHRoaXMudG9nZ2xlQ3VzdG9tT3B0aW9uKCkgOiB0aGlzLnNldFZhbHVlKCk7XG59XG5cblJhZGlvRGF0YS5wcm90b3R5cGUudG9nZ2xlQ3VzdG9tT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBub2RlICA9IHRoaXMubGFzdE5vZGUoKTtcblx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldEN1c3RvbUlucHV0KCk7XG5cblx0aWYgKCBpbnB1dC5kaXNhYmxlZCA9PT0gbm9kZS5jaGVja2VkICkge1xuXHRcdGlucHV0LmRpc2FibGVkID0gIW5vZGUuY2hlY2tlZDtcblx0fVxuXG5cdGlmICggbm9kZS5jaGVja2VkICkge1xuXHRcdGlucHV0LmZvY3VzKCk7XG5cdH1cblxufTtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzICkge1xuXHRcdGlmICggbm9kZS5kYXRhc2V0LmN1c3RvbSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoIG5vZGUuY2hlY2tlZCApIHtcblx0XHRcdHJldHVybiBub2RlLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIXRoaXMuaGFzQ3VzdG9tICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB0aGlzLmdldEN1c3RvbUlucHV0KCkudmFsdWU7XG59O1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdG5vZGUuamZiU3luYyA9IHRoaXM7XG5cdC8qKlxuXHQgKiBJdCBzaG91bGQgYmUgbGl2ZSBjb2xsZWN0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGl0ZW1zIG1heSBjaGFuZ2Vcblx0ICovXG5cdHRoaXMubm9kZXMgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkIHJhZGlvLWZpZWxkJyApO1xuXG5cdHRoaXMucmF3TmFtZSAgID0gdGhpcy5ub2Rlc1sgMCBdLm5hbWU7XG5cdHRoaXMubmFtZSAgICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XG5cdHRoaXMuaW5wdXRUeXBlID0gJ3JhZGlvJztcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLndyYXBwZXIgPSBub2RlO1xuXG5cdHRoaXMuaGFzQ3VzdG9tID0gISEoXG5cdFx0dGhpcy5sYXN0Tm9kZSgpPy5kYXRhc2V0Py5jdXN0b21cblx0KTtcbn07XG5cblJhZGlvRGF0YS5wcm90b3R5cGUubGFzdE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzWyB0aGlzLm5vZGVzLmxlbmd0aCAtIDEgXTtcbn07XG5cblJhZGlvRGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGxhc3RXcmFwcGVyID0gdGhpcy5sYXN0Tm9kZSgpLmNsb3Nlc3QoICcuY3VzdG9tLW9wdGlvbicgKTtcblxuXHRyZXR1cm4gbGFzdFdyYXBwZXI/LnF1ZXJ5U2VsZWN0b3I/LiggJ2lucHV0LnRleHQtZmllbGQnICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0RhdGE7IiwiY29uc3Qge1xuXHQgICAgICBCYXNlU2lnbmFsLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IGlucHV0IHtSYWRpb0RhdGF9XG4gKi9cbmZ1bmN0aW9uIFNpZ25hbFJhZGlvKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdFx0cmV0dXJuICdyYWRpbycgPT09IG5vZGUudHlwZTtcblx0fTtcblxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IDA7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMuaW5wdXQubm9kZXMgKSB7XG5cdFx0XHRpZiAoIG5vZGUuZGF0YXNldC5jdXN0b20gKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5jaGVja2VkID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID09PSBub2RlLnZhbHVlO1xuXG5cdFx0XHRpZiAoICFub2RlLmNoZWNrZWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxuXHRcdFx0XHRub2RlLmRhdGFzZXQ/LmNhbGN1bGF0ZSA/PyBub2RlLnZhbHVlLFxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmlucHV0Lmhhc0N1c3RvbSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBsYXN0Tm9kZSA9IHRoaXMuaW5wdXQubGFzdE5vZGUoKTtcblx0XHRjb25zdCBpbnB1dCAgICA9IHRoaXMuaW5wdXQuZ2V0Q3VzdG9tSW5wdXQoKTtcblxuXHRcdGlmICggaW5wdXQuZGlzYWJsZWQgPT09IGxhc3ROb2RlLmNoZWNrZWQgKSB7XG5cdFx0XHRpbnB1dC5kaXNhYmxlZCA9ICFsYXN0Tm9kZS5jaGVja2VkO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0aWYgKCAhbGFzdE5vZGUuY2hlY2tlZCB8fCBpbnB1dC52YWx1ZSA9PT0gdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW5wdXQudmFsdWUgPSB2YWx1ZTtcblx0fTtcbn1cblxuU2lnbmFsUmFkaW8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmFkaW87IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmFkaW9EYXRhIGZyb20gJy4vUmFkaW9EYXRhJztcbmltcG9ydCBTaWduYWxSYWRpbyBmcm9tICcuL1NpZ25hbFJhZGlvJztcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxuXHRSYWRpb0RhdGEsXG5cdFNpZ25hbFJhZGlvLFxufTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JhZGlvLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBSYWRpb0RhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmFkaW8tZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmFkaW8sIC4uLnNpZ25hbHMgXTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=