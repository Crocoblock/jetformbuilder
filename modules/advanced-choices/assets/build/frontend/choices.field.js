/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/choices.field/functions.js":
/*!*********************************************!*\
  !*** ./frontend/choices.field/functions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWrapper: () => (/* binding */ getWrapper),
/* harmony export */   isChoicesField: () => (/* binding */ isChoicesField)
/* harmony export */ });
/**
 * @param node {Element}
 */
function isChoicesField(node) {
  return node?.classList?.contains('jet-form-builder-choice');
}

/**
 * @param node {Element}
 * @returns {HTMLElement}
 */
function getWrapper(node) {
  return node.closest('.jet-form-builder-choice--item');
}


/***/ }),

/***/ "./frontend/choices.field/input.js":
/*!*****************************************!*\
  !*** ./frontend/choices.field/input.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/choices.field/functions.js");

const {
  InputData,
  ReactiveSet,
  ReactiveHook
} = JetFormBuilderAbstract;
const {
  getParsedName
} = JetFormBuilderFunctions;

/**
 * @property {ReactiveSet} value
 *
 * @constructor
 */
function ChoicesData() {
  InputData.call(this);
  this.isSupported = _functions__WEBPACK_IMPORTED_MODULE_0__.isChoicesField;
  this.setNode = function (node) {
    node.jfbSync = this;
    this.nodes = Array.from(node.querySelectorAll('.jet-form-builder-choice--item input'));
    this.rawName = this.nodes[0].name;
    this.name = getParsedName(this.rawName);
    this.inputType = 'choice';
  };
  this.setValue = function () {
    this.value.current = this.isArray() ? this.getMultipleValue() : this.getSingleValue();
  };
  this.addListeners = function () {
    for (const node of this.nodes) {
      node.addEventListener('change', () => this.setValue());
      this.addListenerForChoice(node);
    }
    if (!this.isArray()) {
      return;
    }
    this.sanitize(value => Array.isArray(value) ? value : [value]);
  };
  this.getMultipleValue = function () {
    return Array.from(this.nodes).filter(item => item.checked).map(item => item.value);
  };
  this.getSingleValue = function () {
    for (const node of this.nodes) {
      if (node.checked) {
        return node.value;
      }
    }
    return '';
  };
  this.addListenerForChoice = function (node) {
    const wrapperChoice = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(node);
    wrapperChoice.addEventListener('click', event => this.toggleChoice(node, event));
    this.enterKey = new ReactiveHook();

    /**
     * if it visible input,
     * we don't need accessibility for the wrapper element.
     */
    if (this.isNativeControl(node)) {
      node.addEventListener('keydown', this.handleEnterKey.bind(this));
      return;
    }
    wrapperChoice.addEventListener('keydown', event => {
      // handle enter for submit form of switch page
      this.handleEnterKey(event);

      // for space
      this.handleSpaceKey(event, node);

      // next handlers only for role="radio"
      if (this.isArray()) {
        return;
      }

      // for next or up keys
      this.handleNextKey(event, node);

      // for prev or down keys
      this.handlePrevKey(event, node);
    });
  };
  this.toggleChoice = function (node, event) {
    /**
     * We should skip event, if it triggered via element,
     * which inside <label> element.
     *
     * Because click on <label> triggers another event with connected
     * input as target.
     */
    if (event.target.closest('.jet-form-builder-choice--item-control label')) {
      return;
    }
    if (this.isArray()) {
      this.value.toggle(node.value);
      return;
    }
    if (this.value.current === node.value) {
      this.value.current = '';
      return;
    }
    this.value.current = node.value;
  };
  this.hasAutoScroll = function () {
    return this.isNativeControl(this.nodes[0]);
  };
  this.focusRaw = function () {
    const [node] = this.nodes;
    if (this.isNativeControl(node)) {
      InputData.prototype.focusRaw.call(this);
      return;
    }
    const wrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(node);
    wrapper.focus({
      preventScroll: true
    });
  };
}
ChoicesData.prototype = Object.create(InputData.prototype);
ChoicesData.prototype.getReactive = function () {
  return new ReactiveSet();
};

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
ChoicesData.prototype.isNativeControl = function (node) {
  return node.classList.contains('jet-form-builder-choice--item-control-input');
};

/**
 * @param event {Event}
 * @param node {HTMLElement}
 */
ChoicesData.prototype.handleNextKey = function (event, node) {
  if (!['ArrowRight', 'ArrowDown'].includes(event.key)) {
    return;
  }
  event.preventDefault();
  const nextNode = this.nextNode(node);
  this.switchChoice(event, nextNode);
};

/**
 * @param event {Event}
 * @param node {HTMLElement}
 */
ChoicesData.prototype.handlePrevKey = function (event, node) {
  if (!['ArrowUp', 'ArrowLeft'].includes(event.key)) {
    return;
  }
  event.preventDefault();
  const prevNode = this.prevNode(node);
  this.switchChoice(event, prevNode);
};

/**
 * @param event {Event}
 * @param node {HTMLElement}
 */
ChoicesData.prototype.handleSpaceKey = function (event, node) {
  if (!['Spacebar', ' '].includes(event.key)) {
    return;
  }
  event.preventDefault();
  this.toggleChoice(node, event);
};
ChoicesData.prototype.switchChoice = function (event, node) {
  const wrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(node);
  this.toggleChoice(node, event);
  wrapper.focus({
    preventScroll: true
  });
};
ChoicesData.prototype.nextNode = function (baseNode) {
  for (const [index, node] of this.nodes.entries()) {
    if (node !== baseNode) {
      continue;
    }
    return this.nodes.hasOwnProperty(+index + 1) ? this.nodes[+index + 1] : this.nodes[0];
  }
};
ChoicesData.prototype.prevNode = function (baseNode) {
  for (const [index, node] of this.nodes.entries()) {
    if (node !== baseNode) {
      continue;
    }
    return this.nodes.at(index - 1);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChoicesData);

/***/ }),

/***/ "./frontend/choices.field/signal.js":
/*!******************************************!*\
  !*** ./frontend/choices.field/signal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/choices.field/functions.js");

const {
  BaseSignal
} = JetFormBuilderAbstract;
const {
  isEmpty
} = JetFormBuilderFunctions;

/**
 * @property {ChoicesData} input
 */
function SignalChoices() {
  BaseSignal.call(this);

  /**
   * @type {Boolean|null}
   */
  this.isRadio = null;
  this.indexedFirst = false;
  this.isSupported = function (node, inputData) {
    return !!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(node);
  };
  this.runSignal = function () {
    this.input.calcValue = 0;
    this.indexedFirst = false;
    for (const node of this.input.nodes) {
      var _node$dataset$calcula;
      node.checked = !this.isRadio ? this.input.value.current?.includes(node.value) : this.input.value.current === node.value;
      const wrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(node);
      this.toggleTabIndex(node, wrapper);
      wrapper.classList.toggle('is-checked', node.checked);
      wrapper.ariaChecked = node.checked;
      this.toggleImageControl(wrapper, node.checked);
      if (!node.checked) {
        continue;
      }
      this.input.calcValue += parseFloat((_node$dataset$calcula = node.dataset?.calculate) !== null && _node$dataset$calcula !== void 0 ? _node$dataset$calcula : node.value);
    }
  };
  this.setInput = function (input) {
    BaseSignal.prototype.setInput.call(this, input);
    this.isRadio = !this.input.isArray();
  };
}
SignalChoices.prototype = Object.create(BaseSignal.prototype);

/**
 * @param wrapper {HTMLElement}
 * @param isChecked {Boolean}
 */
SignalChoices.prototype.toggleImageControl = function (wrapper, isChecked) {
  /**
   * @type {NodeListOf<HTMLImageElement>}
   */
  const images = wrapper.querySelectorAll('.jet-form-builder-choice--item-control-img');
  for (const image of images) {
    if (isChecked) {
      image.style.display = image.classList.contains('checked') ? '' : 'none';
    } else {
      image.style.display = image.classList.contains('checked') ? 'none' : '';
    }
  }
};

/**
 * @param node {HTMLInputElement}
 * @param wrapper {HTMLInputElement}
 */
SignalChoices.prototype.toggleTabIndex = function (node, wrapper) {
  if (!this.isRadio || this.input.isNativeControl(node)) {
    return;
  }
  const hasValue = !isEmpty(this.input.value.current);

  // set tabIndex = 1 for the first element if empty value
  if (!hasValue) {
    this.setRawTabIndex(wrapper, this.indexedFirst ? -1 : 0);
    this.indexedFirst = true;
    return;
  }
  this.setRawTabIndex(wrapper, node.checked ? 0 : -1);
};

/**
 * @param node {HTMLInputElement}
 * @param tabIndex {Number}
 */
SignalChoices.prototype.setRawTabIndex = function (node, tabIndex) {
  if (tabIndex !== node.tabIndex) {
    node.tabIndex = tabIndex;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalChoices);

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
/*!****************************************!*\
  !*** ./frontend/choices.field/main.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/choices.field/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/choices.field/signal.js");


const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/choices-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/choices-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
},
/**
 * @since 3.2.0 (for radio-field compatibility)
 */
20);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2hvaWNlcy5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pQQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2Zyb250ZW5kL2Nob2ljZXMuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZnJvbnRlbmQvY2hvaWNlcy5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2Zyb250ZW5kL2Nob2ljZXMuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9mcm9udGVuZC9jaG9pY2VzLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaXNDaG9pY2VzRmllbGQoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlPy5jbGFzc0xpc3Q/LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlci1jaG9pY2UnICk7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldFdyYXBwZXIoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlLmNsb3Nlc3QoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWNob2ljZS0taXRlbScsXG5cdCk7XG59XG5cbmV4cG9ydCB7IGlzQ2hvaWNlc0ZpZWxkLCBnZXRXcmFwcGVyIH07IiwiaW1wb3J0IHsgZ2V0V3JhcHBlciwgaXNDaG9pY2VzRmllbGQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgSW5wdXREYXRhLFxuXHQgICAgICBSZWFjdGl2ZVNldCxcblx0ICAgICAgUmVhY3RpdmVIb29rLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHtcblx0ICAgICAgZ2V0UGFyc2VkTmFtZSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlU2V0fSB2YWx1ZVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDaG9pY2VzRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gaXNDaG9pY2VzRmllbGQ7XG5cblx0dGhpcy5zZXROb2RlID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdG5vZGUuamZiU3luYyAgID0gdGhpcztcblx0XHR0aGlzLm5vZGVzICAgICA9IEFycmF5LmZyb20oXG5cdFx0XHRub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0gaW5wdXQnICksXG5cdFx0KTtcblx0XHR0aGlzLnJhd05hbWUgICA9IHRoaXMubm9kZXNbIDAgXS5uYW1lO1xuXHRcdHRoaXMubmFtZSAgICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAnY2hvaWNlJztcblx0fTtcblxuXHR0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuaXNBcnJheSgpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldE11bHRpcGxlVmFsdWUoKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRTaW5nbGVWYWx1ZSgpO1xuXHR9O1xuXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlcyApIHtcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHRoaXMuc2V0VmFsdWUoKSApO1xuXG5cdFx0XHR0aGlzLmFkZExpc3RlbmVyRm9yQ2hvaWNlKCBub2RlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zYW5pdGl6ZShcblx0XHRcdHZhbHVlID0+IEFycmF5LmlzQXJyYXkoIHZhbHVlICkgPyB2YWx1ZSA6IFsgdmFsdWUgXSxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMuZ2V0TXVsdGlwbGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSggdGhpcy5ub2RlcyApLlxuXHRcdFx0ZmlsdGVyKCBpdGVtID0+IGl0ZW0uY2hlY2tlZCApLlxuXHRcdFx0bWFwKCBpdGVtID0+IGl0ZW0udmFsdWUgKTtcblx0fTtcblxuXHR0aGlzLmdldFNpbmdsZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlcyApIHtcblx0XHRcdGlmICggbm9kZS5jaGVja2VkICkge1xuXHRcdFx0XHRyZXR1cm4gbm9kZS52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cblx0dGhpcy5hZGRMaXN0ZW5lckZvckNob2ljZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcblxuXHRcdGNvbnN0IHdyYXBwZXJDaG9pY2UgPSBnZXRXcmFwcGVyKCBub2RlICk7XG5cblx0XHR3cmFwcGVyQ2hvaWNlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xpY2snLFxuXHRcdFx0ZXZlbnQgPT4gdGhpcy50b2dnbGVDaG9pY2UoIG5vZGUsIGV2ZW50ICksXG5cdFx0KTtcblxuXHRcdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cblx0XHQvKipcblx0XHQgKiBpZiBpdCB2aXNpYmxlIGlucHV0LFxuXHRcdCAqIHdlIGRvbid0IG5lZWQgYWNjZXNzaWJpbGl0eSBmb3IgdGhlIHdyYXBwZXIgZWxlbWVudC5cblx0XHQgKi9cblx0XHRpZiAoIHRoaXMuaXNOYXRpdmVDb250cm9sKCBub2RlICkgKSB7XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdCdrZXlkb3duJyxcblx0XHRcdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d3JhcHBlckNob2ljZS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIGV2ZW50ID0+IHtcblx0XHRcdC8vIGhhbmRsZSBlbnRlciBmb3Igc3VibWl0IGZvcm0gb2Ygc3dpdGNoIHBhZ2Vcblx0XHRcdHRoaXMuaGFuZGxlRW50ZXJLZXkoIGV2ZW50ICk7XG5cblx0XHRcdC8vIGZvciBzcGFjZVxuXHRcdFx0dGhpcy5oYW5kbGVTcGFjZUtleSggZXZlbnQsIG5vZGUgKTtcblxuXHRcdFx0Ly8gbmV4dCBoYW5kbGVycyBvbmx5IGZvciByb2xlPVwicmFkaW9cIlxuXHRcdFx0aWYgKCB0aGlzLmlzQXJyYXkoKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgbmV4dCBvciB1cCBrZXlzXG5cdFx0XHR0aGlzLmhhbmRsZU5leHRLZXkoIGV2ZW50LCBub2RlICk7XG5cblx0XHRcdC8vIGZvciBwcmV2IG9yIGRvd24ga2V5c1xuXHRcdFx0dGhpcy5oYW5kbGVQcmV2S2V5KCBldmVudCwgbm9kZSApO1xuXHRcdH0gKTtcblxuXHR9O1xuXG5cdHRoaXMudG9nZ2xlQ2hvaWNlID0gZnVuY3Rpb24gKCBub2RlLCBldmVudCApIHtcblx0XHQvKipcblx0XHQgKiBXZSBzaG91bGQgc2tpcCBldmVudCwgaWYgaXQgdHJpZ2dlcmVkIHZpYSBlbGVtZW50LFxuXHRcdCAqIHdoaWNoIGluc2lkZSA8bGFiZWw+IGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBCZWNhdXNlIGNsaWNrIG9uIDxsYWJlbD4gdHJpZ2dlcnMgYW5vdGhlciBldmVudCB3aXRoIGNvbm5lY3RlZFxuXHRcdCAqIGlucHV0IGFzIHRhcmdldC5cblx0XHQgKi9cblx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWNob2ljZS0taXRlbS1jb250cm9sIGxhYmVsJyxcblx0XHQpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMuaXNBcnJheSgpICkge1xuXHRcdFx0dGhpcy52YWx1ZS50b2dnbGUoIG5vZGUudmFsdWUgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy52YWx1ZS5jdXJyZW50ID09PSBub2RlLnZhbHVlICkge1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gJyc7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbm9kZS52YWx1ZTtcblx0fTtcblxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaXNOYXRpdmVDb250cm9sKCB0aGlzLm5vZGVzWyAwIF0gKTtcblx0fTtcblxuXHR0aGlzLmZvY3VzUmF3ID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdGlmICggdGhpcy5pc05hdGl2ZUNvbnRyb2woIG5vZGUgKSApIHtcblx0XHRcdElucHV0RGF0YS5wcm90b3R5cGUuZm9jdXNSYXcuY2FsbCggdGhpcyApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGdldFdyYXBwZXIoIG5vZGUgKTtcblxuXHRcdHdyYXBwZXIuZm9jdXMoIHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9ICk7XG5cdH07XG59XG5cbkNob2ljZXNEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuQ2hvaWNlc0RhdGEucHJvdG90eXBlLmdldFJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gbmV3IFJlYWN0aXZlU2V0KCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5DaG9pY2VzRGF0YS5wcm90b3R5cGUuaXNOYXRpdmVDb250cm9sID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtLWNvbnRyb2wtaW5wdXQnLFxuXHQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gZXZlbnQge0V2ZW50fVxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5DaG9pY2VzRGF0YS5wcm90b3R5cGUuaGFuZGxlTmV4dEtleSA9IGZ1bmN0aW9uICggZXZlbnQsIG5vZGUgKSB7XG5cdGlmICggIVsgJ0Fycm93UmlnaHQnLCAnQXJyb3dEb3duJyBdLmluY2x1ZGVzKCBldmVudC5rZXkgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBuZXh0Tm9kZSA9IHRoaXMubmV4dE5vZGUoIG5vZGUgKTtcblxuXHR0aGlzLnN3aXRjaENob2ljZSggZXZlbnQsIG5leHROb2RlICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSBldmVudCB7RXZlbnR9XG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKi9cbkNob2ljZXNEYXRhLnByb3RvdHlwZS5oYW5kbGVQcmV2S2V5ID0gZnVuY3Rpb24gKCBldmVudCwgbm9kZSApIHtcblx0aWYgKCAhWyAnQXJyb3dVcCcsICdBcnJvd0xlZnQnIF0uaW5jbHVkZXMoIGV2ZW50LmtleSApICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IHByZXZOb2RlID0gdGhpcy5wcmV2Tm9kZSggbm9kZSApO1xuXG5cdHRoaXMuc3dpdGNoQ2hvaWNlKCBldmVudCwgcHJldk5vZGUgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIGV2ZW50IHtFdmVudH1cbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuQ2hvaWNlc0RhdGEucHJvdG90eXBlLmhhbmRsZVNwYWNlS2V5ID0gZnVuY3Rpb24gKCBldmVudCwgbm9kZSApIHtcblx0aWYgKCAhWyAnU3BhY2ViYXInLCAnICcgXS5pbmNsdWRlcyggZXZlbnQua2V5ICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0dGhpcy50b2dnbGVDaG9pY2UoIG5vZGUsIGV2ZW50ICk7XG59O1xuXG5DaG9pY2VzRGF0YS5wcm90b3R5cGUuc3dpdGNoQ2hvaWNlID0gZnVuY3Rpb24gKCBldmVudCwgbm9kZSApIHtcblx0Y29uc3Qgd3JhcHBlciA9IGdldFdyYXBwZXIoIG5vZGUgKTtcblxuXHR0aGlzLnRvZ2dsZUNob2ljZSggbm9kZSwgZXZlbnQgKTtcblx0d3JhcHBlci5mb2N1cyggeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0gKTtcbn07XG5cbkNob2ljZXNEYXRhLnByb3RvdHlwZS5uZXh0Tm9kZSA9IGZ1bmN0aW9uICggYmFzZU5vZGUgKSB7XG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIG5vZGUgXSBvZiB0aGlzLm5vZGVzLmVudHJpZXMoKSApIHtcblx0XHRpZiAoIG5vZGUgIT09IGJhc2VOb2RlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubm9kZXMuaGFzT3duUHJvcGVydHkoICtpbmRleCArIDEgKVxuXHRcdCAgICAgICA/IHRoaXMubm9kZXNbICtpbmRleCArIDEgXVxuXHRcdCAgICAgICA6IHRoaXMubm9kZXNbIDAgXTtcblx0fVxufTtcblxuQ2hvaWNlc0RhdGEucHJvdG90eXBlLnByZXZOb2RlID0gZnVuY3Rpb24gKCBiYXNlTm9kZSApIHtcblx0Zm9yICggY29uc3QgWyBpbmRleCwgbm9kZSBdIG9mIHRoaXMubm9kZXMuZW50cmllcygpICkge1xuXHRcdGlmICggbm9kZSAhPT0gYmFzZU5vZGUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5ub2Rlcy5hdCggaW5kZXggLSAxICk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENob2ljZXNEYXRhOyIsImltcG9ydCB7IGdldFdyYXBwZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIGlzRW1wdHksXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbi8qKlxuICogQHByb3BlcnR5IHtDaG9pY2VzRGF0YX0gaW5wdXRcbiAqL1xuZnVuY3Rpb24gU2lnbmFsQ2hvaWNlcygpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtCb29sZWFufG51bGx9XG5cdCAqL1xuXHR0aGlzLmlzUmFkaW8gPSBudWxsO1xuXHR0aGlzLmluZGV4ZWRGaXJzdCA9IGZhbHNlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0XHRyZXR1cm4gISFnZXRXcmFwcGVyKCBub2RlICk7XG5cdH07XG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSAwO1xuXHRcdHRoaXMuaW5kZXhlZEZpcnN0ICAgID0gZmFsc2U7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMuaW5wdXQubm9kZXMgKSB7XG5cdFx0XHRub2RlLmNoZWNrZWQgPSAhdGhpcy5pc1JhZGlvXG5cdFx0XHQgICAgICAgICAgICAgICA/IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudD8uaW5jbHVkZXMoIG5vZGUudmFsdWUgKVxuXHRcdFx0ICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPT09IG5vZGUudmFsdWU7XG5cblx0XHRcdGNvbnN0IHdyYXBwZXIgPSBnZXRXcmFwcGVyKCBub2RlICk7XG5cblx0XHRcdHRoaXMudG9nZ2xlVGFiSW5kZXgoIG5vZGUsIHdyYXBwZXIgKTtcblxuXHRcdFx0d3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtY2hlY2tlZCcsIG5vZGUuY2hlY2tlZCApO1xuXHRcdFx0d3JhcHBlci5hcmlhQ2hlY2tlZCA9IG5vZGUuY2hlY2tlZDtcblxuXHRcdFx0dGhpcy50b2dnbGVJbWFnZUNvbnRyb2woIHdyYXBwZXIsIG5vZGUuY2hlY2tlZCApO1xuXG5cdFx0XHRpZiAoICFub2RlLmNoZWNrZWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxuXHRcdFx0XHRub2RlLmRhdGFzZXQ/LmNhbGN1bGF0ZSA/PyBub2RlLnZhbHVlLFxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0QmFzZVNpZ25hbC5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblxuXHRcdHRoaXMuaXNSYWRpbyA9ICF0aGlzLmlucHV0LmlzQXJyYXkoKTtcblx0fTtcbn1cblxuU2lnbmFsQ2hvaWNlcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIEBwYXJhbSB3cmFwcGVyIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBpc0NoZWNrZWQge0Jvb2xlYW59XG4gKi9cblNpZ25hbENob2ljZXMucHJvdG90eXBlLnRvZ2dsZUltYWdlQ29udHJvbCA9IGZ1bmN0aW9uICggd3JhcHBlciwgaXNDaGVja2VkICkge1xuXHQvKipcblx0ICogQHR5cGUge05vZGVMaXN0T2Y8SFRNTEltYWdlRWxlbWVudD59XG5cdCAqL1xuXHRjb25zdCBpbWFnZXMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWNob2ljZS0taXRlbS1jb250cm9sLWltZycsXG5cdCk7XG5cblx0Zm9yICggY29uc3QgaW1hZ2Ugb2YgaW1hZ2VzICkge1xuXHRcdGlmICggaXNDaGVja2VkICkge1xuXHRcdFx0aW1hZ2Uuc3R5bGUuZGlzcGxheSA9IGltYWdlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrZWQnIClcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA/ICcnXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgOiAnbm9uZSc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aW1hZ2Uuc3R5bGUuZGlzcGxheSA9IGltYWdlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrZWQnIClcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA/ICdub25lJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MSW5wdXRFbGVtZW50fVxuICogQHBhcmFtIHdyYXBwZXIge0hUTUxJbnB1dEVsZW1lbnR9XG4gKi9cblNpZ25hbENob2ljZXMucHJvdG90eXBlLnRvZ2dsZVRhYkluZGV4ID0gZnVuY3Rpb24gKCBub2RlLCB3cmFwcGVyICkge1xuXHRpZiAoICF0aGlzLmlzUmFkaW8gfHwgdGhpcy5pbnB1dC5pc05hdGl2ZUNvbnRyb2woIG5vZGUgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgaGFzVmFsdWUgPSAhaXNFbXB0eSggdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ICk7XG5cblx0Ly8gc2V0IHRhYkluZGV4ID0gMSBmb3IgdGhlIGZpcnN0IGVsZW1lbnQgaWYgZW1wdHkgdmFsdWVcblx0aWYgKCAhaGFzVmFsdWUgKSB7XG5cdFx0dGhpcy5zZXRSYXdUYWJJbmRleCggd3JhcHBlciwgdGhpcy5pbmRleGVkRmlyc3QgPyAtMSA6IDAgKTtcblx0XHR0aGlzLmluZGV4ZWRGaXJzdCA9IHRydWU7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLnNldFJhd1RhYkluZGV4KCB3cmFwcGVyLCBub2RlLmNoZWNrZWQgPyAwIDogLTEgKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxJbnB1dEVsZW1lbnR9XG4gKiBAcGFyYW0gdGFiSW5kZXgge051bWJlcn1cbiAqL1xuU2lnbmFsQ2hvaWNlcy5wcm90b3R5cGUuc2V0UmF3VGFiSW5kZXggPSBmdW5jdGlvbiAoIG5vZGUsIHRhYkluZGV4ICkge1xuXHRpZiAoIHRhYkluZGV4ICE9PSBub2RlLnRhYkluZGV4ICkge1xuXHRcdG5vZGUudGFiSW5kZXggPSB0YWJJbmRleDtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsQ2hvaWNlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDaG9pY2VzRGF0YSBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTaWduYWxDaG9pY2VzIGZyb20gJy4vc2lnbmFsJztcblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9jaG9pY2VzLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBDaG9pY2VzRGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9jaG9pY2VzLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbENob2ljZXMsIC4uLnNpZ25hbHMgXTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMi4wIChmb3IgcmFkaW8tZmllbGQgY29tcGF0aWJpbGl0eSlcblx0ICovXG5cdDIwXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==