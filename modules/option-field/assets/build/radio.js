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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUMxREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3JhZGlvL1JhZGlvRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3JhZGlvL1NpZ25hbFJhZGlvLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvcmFkaW8vaW5kZXgucGNzcz8xZjNkIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3JhZGlvL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBzdHJpY3RfbW9kZSA9IGZhbHNlIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cbmNvbnN0IFNUUklDVF9NT0RFID0gQm9vbGVhbiggc3RyaWN0X21vZGUgKTtcblxuY29uc3Qge1xuXHQgICAgICBJbnB1dERhdGEsXG5cdCAgICAgIFJlYWN0aXZlSG9vayxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7IGdldFBhcnNlZE5hbWUgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBSYWRpb0RhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53cmFwcGVyID0gbnVsbDtcbn1cblxuUmFkaW9EYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS53cmFwcGVyID0gbnVsbDtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdjaGVja3JhZGlvLXdyYXAnICkgJiZcblx0XHRub2RlLnF1ZXJ5U2VsZWN0b3IoICcucmFkaW8td3JhcCcgKVxuXHQpO1xufTtcblJhZGlvRGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xuXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKSApO1xuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQna2V5ZG93bicsXG5cdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXG5cdCk7XG5cblx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldEN1c3RvbUlucHV0KCk7XG5cblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c291dCcsIGV2ZW50ID0+IHtcblx0XHRpZiAoXG5cdFx0XHRbIC4uLnRoaXMubm9kZXMgXS5pbmNsdWRlcyggZXZlbnQ/LnJlbGF0ZWRUYXJnZXQgKSB8fFxuXHRcdFx0WyBldmVudC5yZWxhdGVkVGFyZ2V0LCBldmVudC50YXJnZXQgXS5pbmNsdWRlcyggaW5wdXQgKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xuXHR9ICk7XG5cblx0aW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXI/LiggJ2JsdXInLCBldmVudCA9PiB7XG5cdFx0Y29uc3QgcHJldlZhbHVlID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Ly8gdXBkYXRlIHRoaXMudmFsdWUuY3VycmVudFxuXHRcdHRoaXMuc2V0VmFsdWUoKTtcblxuXHRcdC8vIHRyaWdnZXIgc2lnbmFscyAmIHJlcG9ydGluZ1xuXHRcdGlmICggcHJldlZhbHVlID09PSB0aGlzLnZhbHVlLmN1cnJlbnQgKSB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKCBwcmV2VmFsdWUgKTtcblx0XHR9XG5cdH0gKTtcblxuXHQhU1RSSUNUX01PREUgJiYgalF1ZXJ5KCB0aGlzLndyYXBwZXIgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlIHx8XG5cdFx0XHRldmVudC50YXJnZXQ/LmRhdGFzZXQ/LmN1c3RvbVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmNhbGxhYmxlLmxvY2tUcmlnZ2VyKCk7XG5cdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xuXHR9ICk7XG59O1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XG59O1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRldmVudC50YXJnZXQuZGF0YXNldC5jdXN0b20gPyB0aGlzLnRvZ2dsZUN1c3RvbU9wdGlvbigpIDogdGhpcy5zZXRWYWx1ZSgpO1xufVxuXG5SYWRpb0RhdGEucHJvdG90eXBlLnRvZ2dsZUN1c3RvbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgbm9kZSAgPSB0aGlzLmxhc3ROb2RlKCk7XG5cdGNvbnN0IGlucHV0ID0gdGhpcy5nZXRDdXN0b21JbnB1dCgpO1xuXG5cdGlmICggaW5wdXQuZGlzYWJsZWQgPT09IG5vZGUuY2hlY2tlZCApIHtcblx0XHRpbnB1dC5kaXNhYmxlZCA9ICFub2RlLmNoZWNrZWQ7XG5cdH1cblxuXHRpZiAoIG5vZGUuY2hlY2tlZCApIHtcblx0XHRpbnB1dC5mb2N1cygpO1xuXHR9XG5cbn07XG5cblJhZGlvRGF0YS5wcm90b3R5cGUuZ2V0QWN0aXZlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlcyApIHtcblx0XHRpZiAoIG5vZGUuZGF0YXNldC5jdXN0b20gKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKCBub2RlLmNoZWNrZWQgKSB7XG5cdFx0XHRyZXR1cm4gbm9kZS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRpZiAoICF0aGlzLmhhc0N1c3RvbSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5nZXRDdXN0b21JbnB1dCgpLnZhbHVlO1xufTtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS5zZXROb2RlID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xuXHQvKipcblx0ICogSXQgc2hvdWxkIGJlIGxpdmUgY29sbGVjdGlvbiBmb3IgdGhlIGNhc2Ugd2hlbiBpdGVtcyBtYXkgY2hhbmdlXG5cdCAqL1xuXHR0aGlzLm5vZGVzID0gbm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyX19maWVsZCByYWRpby1maWVsZCcgKTtcblxuXHR0aGlzLnJhd05hbWUgICA9IHRoaXMubm9kZXNbIDAgXS5uYW1lO1xuXHR0aGlzLm5hbWUgICAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xuXHR0aGlzLmlucHV0VHlwZSA9ICdyYWRpbyc7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxuXHQgKi9cblx0dGhpcy53cmFwcGVyID0gbm9kZTtcblxuXHR0aGlzLmhhc0N1c3RvbSA9ICEhKFxuXHRcdHRoaXMubGFzdE5vZGUoKT8uZGF0YXNldD8uY3VzdG9tXG5cdCk7XG59O1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLmxhc3ROb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5ub2Rlc1sgdGhpcy5ub2Rlcy5sZW5ndGggLSAxIF07XG59O1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLmdldEN1c3RvbUlucHV0ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBsYXN0V3JhcHBlciA9IHRoaXMubGFzdE5vZGUoKS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICk7XG5cblx0cmV0dXJuIGxhc3RXcmFwcGVyPy5xdWVyeVNlbGVjdG9yPy4oICdpbnB1dC50ZXh0LWZpZWxkJyApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9EYXRhOyIsImNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbnB1dCB7UmFkaW9EYXRhfVxuICovXG5mdW5jdGlvbiBTaWduYWxSYWRpbygpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXREYXRhICkge1xuXHRcdHJldHVybiAncmFkaW8nID09PSBub2RlLnR5cGU7XG5cdH07XG5cblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSAwO1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLmlucHV0Lm5vZGVzICkge1xuXHRcdFx0aWYgKCBub2RlLmRhdGFzZXQuY3VzdG9tICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdG5vZGUuY2hlY2tlZCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9PT0gbm9kZS52YWx1ZTtcblxuXHRcdFx0aWYgKCAhbm9kZS5jaGVja2VkICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgKz0gcGFyc2VGbG9hdChcblx0XHRcdFx0bm9kZS5kYXRhc2V0Py5jYWxjdWxhdGUgPz8gbm9kZS52YWx1ZSxcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5pbnB1dC5oYXNDdXN0b20gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGFzdE5vZGUgPSB0aGlzLmlucHV0Lmxhc3ROb2RlKCk7XG5cdFx0Y29uc3QgaW5wdXQgICAgPSB0aGlzLmlucHV0LmdldEN1c3RvbUlucHV0KCk7XG5cblx0XHRpZiAoIGlucHV0LmRpc2FibGVkID09PSBsYXN0Tm9kZS5jaGVja2VkICkge1xuXHRcdFx0aW5wdXQuZGlzYWJsZWQgPSAhbGFzdE5vZGUuY2hlY2tlZDtcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdGlmICggIWxhc3ROb2RlLmNoZWNrZWQgfHwgaW5wdXQudmFsdWUgPT09IHZhbHVlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlucHV0LnZhbHVlID0gdmFsdWU7XG5cdH07XG59XG5cblNpZ25hbFJhZGlvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJhZGlvOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFJhZGlvRGF0YSBmcm9tICcuL1JhZGlvRGF0YSc7XG5pbXBvcnQgU2lnbmFsUmFkaW8gZnJvbSAnLi9TaWduYWxSYWRpbyc7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCxcblx0UmFkaW9EYXRhLFxuXHRTaWduYWxSYWRpbyxcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yYWRpby1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgUmFkaW9EYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JhZGlvLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbFJhZGlvLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9