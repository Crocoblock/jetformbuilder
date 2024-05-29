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
  this.wrapper.addEventListener('change', ({
    target
  }) => {
    target.dataset.custom ? this.toggleCustomOption() : this.setValue();
  });
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7OztBQzFEQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9SYWRpb0RhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9TaWduYWxSYWRpby5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3JhZGlvL2luZGV4LnBjc3M/MWYzZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgc3RyaWN0X21vZGUgPSBmYWxzZSB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xyXG5cclxuY29uc3QgU1RSSUNUX01PREUgPSBCb29sZWFuKCBzdHJpY3RfbW9kZSApO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIElucHV0RGF0YSxcclxuXHQgICAgICBSZWFjdGl2ZUhvb2ssXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3QgeyBnZXRQYXJzZWROYW1lIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIFJhZGlvRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndyYXBwZXIgPSBudWxsO1xyXG59XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS53cmFwcGVyID0gbnVsbDtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdHJldHVybiAoXHJcblx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSAmJlxyXG5cdFx0bm9kZS5xdWVyeVNlbGVjdG9yKCAnLnJhZGlvLXdyYXAnIClcclxuXHQpO1xyXG59O1xyXG5SYWRpb0RhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xyXG5cclxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICggeyB0YXJnZXQgfSApID0+IHtcclxuXHRcdHRhcmdldC5kYXRhc2V0LmN1c3RvbSA/IHRoaXMudG9nZ2xlQ3VzdG9tT3B0aW9uKCkgOiB0aGlzLnNldFZhbHVlKCk7XHJcblx0fSApO1xyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2tleWRvd24nLFxyXG5cdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXHJcblx0KTtcclxuXHJcblx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldEN1c3RvbUlucHV0KCk7XHJcblxyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNvdXQnLCBldmVudCA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdFsgLi4udGhpcy5ub2RlcyBdLmluY2x1ZGVzKCBldmVudD8ucmVsYXRlZFRhcmdldCApIHx8XHJcblx0XHRcdFsgZXZlbnQucmVsYXRlZFRhcmdldCwgZXZlbnQudGFyZ2V0IF0uaW5jbHVkZXMoIGlucHV0IClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xyXG5cdH0gKTtcclxuXHJcblx0aW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXI/LiggJ2JsdXInLCBldmVudCA9PiB7XHJcblx0XHRjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIHRoaXMudmFsdWUuY3VycmVudFxyXG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cclxuXHRcdC8vIHRyaWdnZXIgc2lnbmFscyAmIHJlcG9ydGluZ1xyXG5cdFx0aWYgKCBwcmV2VmFsdWUgPT09IHRoaXMudmFsdWUuY3VycmVudCApIHtcclxuXHRcdFx0dGhpcy5vbkNoYW5nZSggcHJldlZhbHVlICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHQhU1RSSUNUX01PREUgJiYgalF1ZXJ5KCB0aGlzLndyYXBwZXIgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSB8fFxyXG5cdFx0XHRldmVudC50YXJnZXQ/LmRhdGFzZXQ/LmN1c3RvbVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcclxuXHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xyXG5cdH0gKTtcclxufTtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xyXG59O1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS50b2dnbGVDdXN0b21PcHRpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3Qgbm9kZSAgPSB0aGlzLmxhc3ROb2RlKCk7XHJcblx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldEN1c3RvbUlucHV0KCk7XHJcblxyXG5cdGlmICggaW5wdXQuZGlzYWJsZWQgPT09IG5vZGUuY2hlY2tlZCApIHtcclxuXHRcdGlucHV0LmRpc2FibGVkID0gIW5vZGUuY2hlY2tlZDtcclxuXHR9XHJcblxyXG5cdGlmICggbm9kZS5jaGVja2VkICkge1xyXG5cdFx0aW5wdXQuZm9jdXMoKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XHJcblx0XHRpZiAoIG5vZGUuZGF0YXNldC5jdXN0b20gKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBub2RlLmNoZWNrZWQgKSB7XHJcblx0XHRcdHJldHVybiBub2RlLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKCAhdGhpcy5oYXNDdXN0b20gKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5nZXRDdXN0b21JbnB1dCgpLnZhbHVlO1xyXG59O1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS5zZXROb2RlID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdG5vZGUuamZiU3luYyA9IHRoaXM7XHJcblx0LyoqXHJcblx0ICogSXQgc2hvdWxkIGJlIGxpdmUgY29sbGVjdGlvbiBmb3IgdGhlIGNhc2Ugd2hlbiBpdGVtcyBtYXkgY2hhbmdlXHJcblx0ICovXHJcblx0dGhpcy5ub2RlcyA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyX19maWVsZCByYWRpby1maWVsZCcgKTtcclxuXHJcblx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5vZGVzWyAwIF0ubmFtZTtcclxuXHR0aGlzLm5hbWUgICAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xyXG5cdHRoaXMuaW5wdXRUeXBlID0gJ3JhZGlvJztcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy53cmFwcGVyID0gbm9kZTtcclxuXHJcblx0dGhpcy5oYXNDdXN0b20gPSAhIShcclxuXHRcdHRoaXMubGFzdE5vZGUoKT8uZGF0YXNldD8uY3VzdG9tXHJcblx0KTtcclxufTtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUubGFzdE5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMubm9kZXNbIHRoaXMubm9kZXMubGVuZ3RoIC0gMSBdO1xyXG59O1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS5nZXRDdXN0b21JbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBsYXN0V3JhcHBlciA9IHRoaXMubGFzdE5vZGUoKS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICk7XHJcblxyXG5cdHJldHVybiBsYXN0V3JhcHBlcj8ucXVlcnlTZWxlY3Rvcj8uKCAnaW5wdXQudGV4dC1maWVsZCcgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvRGF0YTsiLCJjb25zdCB7XHJcblx0ICAgICAgQmFzZVNpZ25hbCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IGlucHV0IHtSYWRpb0RhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBTaWduYWxSYWRpbygpIHtcclxuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXREYXRhICkge1xyXG5cdFx0cmV0dXJuICdyYWRpbycgPT09IG5vZGUudHlwZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gMDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMuaW5wdXQubm9kZXMgKSB7XHJcblx0XHRcdGlmICggbm9kZS5kYXRhc2V0LmN1c3RvbSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRub2RlLmNoZWNrZWQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPT09IG5vZGUudmFsdWU7XHJcblxyXG5cdFx0XHRpZiAoICFub2RlLmNoZWNrZWQgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlICs9IHBhcnNlRmxvYXQoXHJcblx0XHRcdFx0bm9kZS5kYXRhc2V0Py5jYWxjdWxhdGUgPz8gbm9kZS52YWx1ZSxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICF0aGlzLmlucHV0Lmhhc0N1c3RvbSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGxhc3ROb2RlID0gdGhpcy5pbnB1dC5sYXN0Tm9kZSgpO1xyXG5cdFx0Y29uc3QgaW5wdXQgICAgPSB0aGlzLmlucHV0LmdldEN1c3RvbUlucHV0KCk7XHJcblxyXG5cdFx0aWYgKCBpbnB1dC5kaXNhYmxlZCA9PT0gbGFzdE5vZGUuY2hlY2tlZCApIHtcclxuXHRcdFx0aW5wdXQuZGlzYWJsZWQgPSAhbGFzdE5vZGUuY2hlY2tlZDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHRpZiAoICFsYXN0Tm9kZS5jaGVja2VkIHx8IGlucHV0LnZhbHVlID09PSB2YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0LnZhbHVlID0gdmFsdWU7XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsUmFkaW8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJhZGlvOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFJhZGlvRGF0YSBmcm9tICcuL1JhZGlvRGF0YSc7XHJcbmltcG9ydCBTaWduYWxSYWRpbyBmcm9tICcuL1NpZ25hbFJhZGlvJztcclxuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFkZEZpbHRlcixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCxcclxuXHRSYWRpb0RhdGEsXHJcblx0U2lnbmFsUmFkaW8sXHJcbn07XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JhZGlvLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgUmFkaW9EYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yYWRpby1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmFkaW8sIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==