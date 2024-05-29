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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUMxREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vUmFkaW9EYXRhLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vU2lnbmFsUmFkaW8uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3JhZGlvL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBzdHJpY3RfbW9kZSA9IGZhbHNlIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XHJcblxyXG5jb25zdCBTVFJJQ1RfTU9ERSA9IEJvb2xlYW4oIHN0cmljdF9tb2RlICk7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG5cdCAgICAgIFJlYWN0aXZlSG9vayxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5jb25zdCB7IGdldFBhcnNlZE5hbWUgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gUmFkaW9EYXRhKCkge1xyXG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud3JhcHBlciA9IG51bGw7XHJcbn1cclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2hlY2tyYWRpby13cmFwJyApICYmXHJcblx0XHRub2RlLnF1ZXJ5U2VsZWN0b3IoICcucmFkaW8td3JhcCcgKVxyXG5cdCk7XHJcbn07XHJcblJhZGlvRGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblxyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKSApO1xyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2tleWRvd24nLFxyXG5cdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXHJcblx0KTtcclxuXHJcblx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldEN1c3RvbUlucHV0KCk7XHJcblxyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNvdXQnLCBldmVudCA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdFsgLi4udGhpcy5ub2RlcyBdLmluY2x1ZGVzKCBldmVudD8ucmVsYXRlZFRhcmdldCApIHx8XHJcblx0XHRcdFsgZXZlbnQucmVsYXRlZFRhcmdldCwgZXZlbnQudGFyZ2V0IF0uaW5jbHVkZXMoIGlucHV0IClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xyXG5cdH0gKTtcclxuXHJcblx0aW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXI/LiggJ2JsdXInLCBldmVudCA9PiB7XHJcblx0XHRjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0Ly8gdXBkYXRlIHRoaXMudmFsdWUuY3VycmVudFxyXG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cclxuXHRcdC8vIHRyaWdnZXIgc2lnbmFscyAmIHJlcG9ydGluZ1xyXG5cdFx0aWYgKCBwcmV2VmFsdWUgPT09IHRoaXMudmFsdWUuY3VycmVudCApIHtcclxuXHRcdFx0dGhpcy5vbkNoYW5nZSggcHJldlZhbHVlICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHQhU1RSSUNUX01PREUgJiYgalF1ZXJ5KCB0aGlzLndyYXBwZXIgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSB8fFxyXG5cdFx0XHRldmVudC50YXJnZXQ/LmRhdGFzZXQ/LmN1c3RvbVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcclxuXHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xyXG5cdH0gKTtcclxufTtcclxuXHJcblJhZGlvRGF0YS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xyXG59O1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRldmVudC50YXJnZXQuZGF0YXNldC5jdXN0b20gPyB0aGlzLnRvZ2dsZUN1c3RvbU9wdGlvbigpIDogdGhpcy5zZXRWYWx1ZSgpO1xyXG59XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLnRvZ2dsZUN1c3RvbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBub2RlICA9IHRoaXMubGFzdE5vZGUoKTtcclxuXHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q3VzdG9tSW5wdXQoKTtcclxuXHJcblx0aWYgKCBpbnB1dC5kaXNhYmxlZCA9PT0gbm9kZS5jaGVja2VkICkge1xyXG5cdFx0aW5wdXQuZGlzYWJsZWQgPSAhbm9kZS5jaGVja2VkO1xyXG5cdH1cclxuXHJcblx0aWYgKCBub2RlLmNoZWNrZWQgKSB7XHJcblx0XHRpbnB1dC5mb2N1cygpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLmdldEFjdGl2ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlcyApIHtcclxuXHRcdGlmICggbm9kZS5kYXRhc2V0LmN1c3RvbSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRpZiAoIG5vZGUuY2hlY2tlZCApIHtcclxuXHRcdFx0cmV0dXJuIG5vZGUudmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoICF0aGlzLmhhc0N1c3RvbSApIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdHJldHVybiB0aGlzLmdldEN1c3RvbUlucHV0KCkudmFsdWU7XHJcbn07XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0bm9kZS5qZmJTeW5jID0gdGhpcztcclxuXHQvKipcclxuXHQgKiBJdCBzaG91bGQgYmUgbGl2ZSBjb2xsZWN0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGl0ZW1zIG1heSBjaGFuZ2VcclxuXHQgKi9cclxuXHR0aGlzLm5vZGVzID0gbm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkIHJhZGlvLWZpZWxkJyApO1xyXG5cclxuXHR0aGlzLnJhd05hbWUgICA9IHRoaXMubm9kZXNbIDAgXS5uYW1lO1xyXG5cdHRoaXMubmFtZSAgICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XHJcblx0dGhpcy5pbnB1dFR5cGUgPSAncmFkaW8nO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLndyYXBwZXIgPSBub2RlO1xyXG5cclxuXHR0aGlzLmhhc0N1c3RvbSA9ICEhKFxyXG5cdFx0dGhpcy5sYXN0Tm9kZSgpPy5kYXRhc2V0Py5jdXN0b21cclxuXHQpO1xyXG59O1xyXG5cclxuUmFkaW9EYXRhLnByb3RvdHlwZS5sYXN0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5ub2Rlc1sgdGhpcy5ub2Rlcy5sZW5ndGggLSAxIF07XHJcbn07XHJcblxyXG5SYWRpb0RhdGEucHJvdG90eXBlLmdldEN1c3RvbUlucHV0ID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGxhc3RXcmFwcGVyID0gdGhpcy5sYXN0Tm9kZSgpLmNsb3Nlc3QoICcuY3VzdG9tLW9wdGlvbicgKTtcclxuXHJcblx0cmV0dXJuIGxhc3RXcmFwcGVyPy5xdWVyeVNlbGVjdG9yPy4oICdpbnB1dC50ZXh0LWZpZWxkJyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9EYXRhOyIsImNvbnN0IHtcclxuXHQgICAgICBCYXNlU2lnbmFsLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkgaW5wdXQge1JhZGlvRGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbFJhZGlvKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XHJcblx0XHRyZXR1cm4gJ3JhZGlvJyA9PT0gbm9kZS50eXBlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSAwO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5pbnB1dC5ub2RlcyApIHtcclxuXHRcdFx0aWYgKCBub2RlLmRhdGFzZXQuY3VzdG9tICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdG5vZGUuY2hlY2tlZCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9PT0gbm9kZS52YWx1ZTtcclxuXHJcblx0XHRcdGlmICggIW5vZGUuY2hlY2tlZCApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgKz0gcGFyc2VGbG9hdChcclxuXHRcdFx0XHRub2RlLmRhdGFzZXQ/LmNhbGN1bGF0ZSA/PyBub2RlLnZhbHVlLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggIXRoaXMuaW5wdXQuaGFzQ3VzdG9tICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGFzdE5vZGUgPSB0aGlzLmlucHV0Lmxhc3ROb2RlKCk7XHJcblx0XHRjb25zdCBpbnB1dCAgICA9IHRoaXMuaW5wdXQuZ2V0Q3VzdG9tSW5wdXQoKTtcclxuXHJcblx0XHRpZiAoIGlucHV0LmRpc2FibGVkID09PSBsYXN0Tm9kZS5jaGVja2VkICkge1xyXG5cdFx0XHRpbnB1dC5kaXNhYmxlZCA9ICFsYXN0Tm9kZS5jaGVja2VkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdGlmICggIWxhc3ROb2RlLmNoZWNrZWQgfHwgaW5wdXQudmFsdWUgPT09IHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxSYWRpby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmFkaW87IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmFkaW9EYXRhIGZyb20gJy4vUmFkaW9EYXRhJztcclxuaW1wb3J0IFNpZ25hbFJhZGlvIGZyb20gJy4vU2lnbmFsUmFkaW8nO1xyXG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxyXG5cdFJhZGlvRGF0YSxcclxuXHRTaWduYWxSYWRpbyxcclxufTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmFkaW8tZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBSYWRpb0RhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JhZGlvLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxSYWRpbywgLi4uc2lnbmFscyBdO1xyXG5cclxuXHRcdHJldHVybiBzaWduYWxzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9