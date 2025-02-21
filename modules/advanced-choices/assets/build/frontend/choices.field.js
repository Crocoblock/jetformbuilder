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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2hvaWNlcy5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pQQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9mcm9udGVuZC9jaG9pY2VzLmZpZWxkL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy8uL2Zyb250ZW5kL2Nob2ljZXMuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvLi9mcm9udGVuZC9jaG9pY2VzLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWFkdmFuY2VkLWNob2ljZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItYWR2YW5jZWQtY2hvaWNlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1hZHZhbmNlZC1jaG9pY2VzLy4vZnJvbnRlbmQvY2hvaWNlcy5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGlzQ2hvaWNlc0ZpZWxkKCBub2RlICkge1xuXHRyZXR1cm4gbm9kZT8uY2xhc3NMaXN0Py5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXItY2hvaWNlJyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXRXcmFwcGVyKCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5jbG9zZXN0KFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0nLFxuXHQpO1xufVxuXG5leHBvcnQgeyBpc0Nob2ljZXNGaWVsZCwgZ2V0V3JhcHBlciB9OyIsImltcG9ydCB7IGdldFdyYXBwZXIsIGlzQ2hvaWNlc0ZpZWxkIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgUmVhY3RpdmVTZXQsXG5cdCAgICAgIFJlYWN0aXZlSG9vayxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIGdldFBhcnNlZE5hbWUsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZWFjdGl2ZVNldH0gdmFsdWVcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ2hvaWNlc0RhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGlzQ2hvaWNlc0ZpZWxkO1xuXG5cdHRoaXMuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRub2RlLmpmYlN5bmMgICA9IHRoaXM7XG5cdFx0dGhpcy5ub2RlcyAgICAgPSBBcnJheS5mcm9tKFxuXHRcdFx0bm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmpldC1mb3JtLWJ1aWxkZXItY2hvaWNlLS1pdGVtIGlucHV0JyApLFxuXHRcdCk7XG5cdFx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5vZGVzWyAwIF0ubmFtZTtcblx0XHR0aGlzLm5hbWUgICAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ2Nob2ljZSc7XG5cdH07XG5cblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmlzQXJyYXkoKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRNdWx0aXBsZVZhbHVlKClcblx0XHQgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2luZ2xlVmFsdWUoKTtcblx0fTtcblxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNldFZhbHVlKCkgKTtcblxuXHRcdFx0dGhpcy5hZGRMaXN0ZW5lckZvckNob2ljZSggbm9kZSApO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaXNBcnJheSgpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2FuaXRpemUoXG5cdFx0XHR2YWx1ZSA9PiBBcnJheS5pc0FycmF5KCB2YWx1ZSApID8gdmFsdWUgOiBbIHZhbHVlIF0sXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLmdldE11bHRpcGxlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIHRoaXMubm9kZXMgKS5cblx0XHRcdGZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQgKS5cblx0XHRcdG1hcCggaXRlbSA9PiBpdGVtLnZhbHVlICk7XG5cdH07XG5cblx0dGhpcy5nZXRTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XG5cdFx0XHRpZiAoIG5vZGUuY2hlY2tlZCApIHtcblx0XHRcdFx0cmV0dXJuIG5vZGUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXG5cdHRoaXMuYWRkTGlzdGVuZXJGb3JDaG9pY2UgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cblx0XHRjb25zdCB3cmFwcGVyQ2hvaWNlID0gZ2V0V3JhcHBlciggbm9kZSApO1xuXG5cdFx0d3JhcHBlckNob2ljZS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2NsaWNrJyxcblx0XHRcdGV2ZW50ID0+IHRoaXMudG9nZ2xlQ2hvaWNlKCBub2RlLCBldmVudCApLFxuXHRcdCk7XG5cblx0XHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xuXG5cdFx0LyoqXG5cdFx0ICogaWYgaXQgdmlzaWJsZSBpbnB1dCxcblx0XHQgKiB3ZSBkb24ndCBuZWVkIGFjY2Vzc2liaWxpdHkgZm9yIHRoZSB3cmFwcGVyIGVsZW1lbnQuXG5cdFx0ICovXG5cdFx0aWYgKCB0aGlzLmlzTmF0aXZlQ29udHJvbCggbm9kZSApICkge1xuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHQna2V5ZG93bicsXG5cdFx0XHRcdHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHdyYXBwZXJDaG9pY2UuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBldmVudCA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgZW50ZXIgZm9yIHN1Ym1pdCBmb3JtIG9mIHN3aXRjaCBwYWdlXG5cdFx0XHR0aGlzLmhhbmRsZUVudGVyS2V5KCBldmVudCApO1xuXG5cdFx0XHQvLyBmb3Igc3BhY2Vcblx0XHRcdHRoaXMuaGFuZGxlU3BhY2VLZXkoIGV2ZW50LCBub2RlICk7XG5cblx0XHRcdC8vIG5leHQgaGFuZGxlcnMgb25seSBmb3Igcm9sZT1cInJhZGlvXCJcblx0XHRcdGlmICggdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9yIG5leHQgb3IgdXAga2V5c1xuXHRcdFx0dGhpcy5oYW5kbGVOZXh0S2V5KCBldmVudCwgbm9kZSApO1xuXG5cdFx0XHQvLyBmb3IgcHJldiBvciBkb3duIGtleXNcblx0XHRcdHRoaXMuaGFuZGxlUHJldktleSggZXZlbnQsIG5vZGUgKTtcblx0XHR9ICk7XG5cblx0fTtcblxuXHR0aGlzLnRvZ2dsZUNob2ljZSA9IGZ1bmN0aW9uICggbm9kZSwgZXZlbnQgKSB7XG5cdFx0LyoqXG5cdFx0ICogV2Ugc2hvdWxkIHNraXAgZXZlbnQsIGlmIGl0IHRyaWdnZXJlZCB2aWEgZWxlbWVudCxcblx0XHQgKiB3aGljaCBpbnNpZGUgPGxhYmVsPiBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQmVjYXVzZSBjbGljayBvbiA8bGFiZWw+IHRyaWdnZXJzIGFub3RoZXIgZXZlbnQgd2l0aCBjb25uZWN0ZWRcblx0XHQgKiBpbnB1dCBhcyB0YXJnZXQuXG5cdFx0ICovXG5cdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbCBsYWJlbCcsXG5cdFx0KSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLmlzQXJyYXkoKSApIHtcblx0XHRcdHRoaXMudmFsdWUudG9nZ2xlKCBub2RlLnZhbHVlICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMudmFsdWUuY3VycmVudCA9PT0gbm9kZS52YWx1ZSApIHtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9ICcnO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG5vZGUudmFsdWU7XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmlzTmF0aXZlQ29udHJvbCggdGhpcy5ub2Rlc1sgMCBdICk7XG5cdH07XG5cblx0dGhpcy5mb2N1c1JhdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRpZiAoIHRoaXMuaXNOYXRpdmVDb250cm9sKCBub2RlICkgKSB7XG5cdFx0XHRJbnB1dERhdGEucHJvdG90eXBlLmZvY3VzUmF3LmNhbGwoIHRoaXMgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHdyYXBwZXIgPSBnZXRXcmFwcGVyKCBub2RlICk7XG5cblx0XHR3cmFwcGVyLmZvY3VzKCB7IHByZXZlbnRTY3JvbGw6IHRydWUgfSApO1xuXHR9O1xufVxuXG5DaG9pY2VzRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbkNob2ljZXNEYXRhLnByb3RvdHlwZS5nZXRSZWFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIG5ldyBSZWFjdGl2ZVNldCgpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuQ2hvaWNlc0RhdGEucHJvdG90eXBlLmlzTmF0aXZlQ29udHJvbCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0cmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyLWNob2ljZS0taXRlbS1jb250cm9sLWlucHV0Jyxcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIGV2ZW50IHtFdmVudH1cbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuQ2hvaWNlc0RhdGEucHJvdG90eXBlLmhhbmRsZU5leHRLZXkgPSBmdW5jdGlvbiAoIGV2ZW50LCBub2RlICkge1xuXHRpZiAoICFbICdBcnJvd1JpZ2h0JywgJ0Fycm93RG93bicgXS5pbmNsdWRlcyggZXZlbnQua2V5ICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3QgbmV4dE5vZGUgPSB0aGlzLm5leHROb2RlKCBub2RlICk7XG5cblx0dGhpcy5zd2l0Y2hDaG9pY2UoIGV2ZW50LCBuZXh0Tm9kZSApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gZXZlbnQge0V2ZW50fVxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5DaG9pY2VzRGF0YS5wcm90b3R5cGUuaGFuZGxlUHJldktleSA9IGZ1bmN0aW9uICggZXZlbnQsIG5vZGUgKSB7XG5cdGlmICggIVsgJ0Fycm93VXAnLCAnQXJyb3dMZWZ0JyBdLmluY2x1ZGVzKCBldmVudC5rZXkgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBwcmV2Tm9kZSA9IHRoaXMucHJldk5vZGUoIG5vZGUgKTtcblxuXHR0aGlzLnN3aXRjaENob2ljZSggZXZlbnQsIHByZXZOb2RlICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSBldmVudCB7RXZlbnR9XG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKi9cbkNob2ljZXNEYXRhLnByb3RvdHlwZS5oYW5kbGVTcGFjZUtleSA9IGZ1bmN0aW9uICggZXZlbnQsIG5vZGUgKSB7XG5cdGlmICggIVsgJ1NwYWNlYmFyJywgJyAnIF0uaW5jbHVkZXMoIGV2ZW50LmtleSApICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdHRoaXMudG9nZ2xlQ2hvaWNlKCBub2RlLCBldmVudCApO1xufTtcblxuQ2hvaWNlc0RhdGEucHJvdG90eXBlLnN3aXRjaENob2ljZSA9IGZ1bmN0aW9uICggZXZlbnQsIG5vZGUgKSB7XG5cdGNvbnN0IHdyYXBwZXIgPSBnZXRXcmFwcGVyKCBub2RlICk7XG5cblx0dGhpcy50b2dnbGVDaG9pY2UoIG5vZGUsIGV2ZW50ICk7XG5cdHdyYXBwZXIuZm9jdXMoIHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9ICk7XG59O1xuXG5DaG9pY2VzRGF0YS5wcm90b3R5cGUubmV4dE5vZGUgPSBmdW5jdGlvbiAoIGJhc2VOb2RlICkge1xuXHRmb3IgKCBjb25zdCBbIGluZGV4LCBub2RlIF0gb2YgdGhpcy5ub2Rlcy5lbnRyaWVzKCkgKSB7XG5cdFx0aWYgKCBub2RlICE9PSBiYXNlTm9kZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm5vZGVzLmhhc093blByb3BlcnR5KCAraW5kZXggKyAxIClcblx0XHQgICAgICAgPyB0aGlzLm5vZGVzWyAraW5kZXggKyAxIF1cblx0XHQgICAgICAgOiB0aGlzLm5vZGVzWyAwIF07XG5cdH1cbn07XG5cbkNob2ljZXNEYXRhLnByb3RvdHlwZS5wcmV2Tm9kZSA9IGZ1bmN0aW9uICggYmFzZU5vZGUgKSB7XG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIG5vZGUgXSBvZiB0aGlzLm5vZGVzLmVudHJpZXMoKSApIHtcblx0XHRpZiAoIG5vZGUgIT09IGJhc2VOb2RlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubm9kZXMuYXQoIGluZGV4IC0gMSApO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaG9pY2VzRGF0YTsiLCJpbXBvcnQgeyBnZXRXcmFwcGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7Q2hvaWNlc0RhdGF9IGlucHV0XG4gKi9cbmZ1bmN0aW9uIFNpZ25hbENob2ljZXMoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Qm9vbGVhbnxudWxsfVxuXHQgKi9cblx0dGhpcy5pc1JhZGlvID0gbnVsbDtcblx0dGhpcy5pbmRleGVkRmlyc3QgPSBmYWxzZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdFx0cmV0dXJuICEhZ2V0V3JhcHBlciggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gMDtcblx0XHR0aGlzLmluZGV4ZWRGaXJzdCAgICA9IGZhbHNlO1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLmlucHV0Lm5vZGVzICkge1xuXHRcdFx0bm9kZS5jaGVja2VkID0gIXRoaXMuaXNSYWRpb1xuXHRcdFx0ICAgICAgICAgICAgICAgPyB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ/LmluY2x1ZGVzKCBub2RlLnZhbHVlIClcblx0XHRcdCAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID09PSBub2RlLnZhbHVlO1xuXG5cdFx0XHRjb25zdCB3cmFwcGVyID0gZ2V0V3JhcHBlciggbm9kZSApO1xuXG5cdFx0XHR0aGlzLnRvZ2dsZVRhYkluZGV4KCBub2RlLCB3cmFwcGVyICk7XG5cblx0XHRcdHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWNoZWNrZWQnLCBub2RlLmNoZWNrZWQgKTtcblx0XHRcdHdyYXBwZXIuYXJpYUNoZWNrZWQgPSBub2RlLmNoZWNrZWQ7XG5cblx0XHRcdHRoaXMudG9nZ2xlSW1hZ2VDb250cm9sKCB3cmFwcGVyLCBub2RlLmNoZWNrZWQgKTtcblxuXHRcdFx0aWYgKCAhbm9kZS5jaGVja2VkICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgKz0gcGFyc2VGbG9hdChcblx0XHRcdFx0bm9kZS5kYXRhc2V0Py5jYWxjdWxhdGUgPz8gbm9kZS52YWx1ZSxcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdEJhc2VTaWduYWwucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cblx0XHR0aGlzLmlzUmFkaW8gPSAhdGhpcy5pbnB1dC5pc0FycmF5KCk7XG5cdH07XG59XG5cblNpZ25hbENob2ljZXMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBAcGFyYW0gd3JhcHBlciB7SFRNTEVsZW1lbnR9XG4gKiBAcGFyYW0gaXNDaGVja2VkIHtCb29sZWFufVxuICovXG5TaWduYWxDaG9pY2VzLnByb3RvdHlwZS50b2dnbGVJbWFnZUNvbnRyb2wgPSBmdW5jdGlvbiAoIHdyYXBwZXIsIGlzQ2hlY2tlZCApIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlTGlzdE9mPEhUTUxJbWFnZUVsZW1lbnQ+fVxuXHQgKi9cblx0Y29uc3QgaW1hZ2VzID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1jaG9pY2UtLWl0ZW0tY29udHJvbC1pbWcnLFxuXHQpO1xuXG5cdGZvciAoIGNvbnN0IGltYWdlIG9mIGltYWdlcyApIHtcblx0XHRpZiAoIGlzQ2hlY2tlZCApIHtcblx0XHRcdGltYWdlLnN0eWxlLmRpc3BsYXkgPSBpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoICdjaGVja2VkJyApXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgIDogJ25vbmUnO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGltYWdlLnN0eWxlLmRpc3BsYXkgPSBpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoICdjaGVja2VkJyApXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgPyAnbm9uZSdcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTElucHV0RWxlbWVudH1cbiAqIEBwYXJhbSB3cmFwcGVyIHtIVE1MSW5wdXRFbGVtZW50fVxuICovXG5TaWduYWxDaG9pY2VzLnByb3RvdHlwZS50b2dnbGVUYWJJbmRleCA9IGZ1bmN0aW9uICggbm9kZSwgd3JhcHBlciApIHtcblx0aWYgKCAhdGhpcy5pc1JhZGlvIHx8IHRoaXMuaW5wdXQuaXNOYXRpdmVDb250cm9sKCBub2RlICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGhhc1ZhbHVlID0gIWlzRW1wdHkoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApO1xuXG5cdC8vIHNldCB0YWJJbmRleCA9IDEgZm9yIHRoZSBmaXJzdCBlbGVtZW50IGlmIGVtcHR5IHZhbHVlXG5cdGlmICggIWhhc1ZhbHVlICkge1xuXHRcdHRoaXMuc2V0UmF3VGFiSW5kZXgoIHdyYXBwZXIsIHRoaXMuaW5kZXhlZEZpcnN0ID8gLTEgOiAwICk7XG5cdFx0dGhpcy5pbmRleGVkRmlyc3QgPSB0cnVlO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5zZXRSYXdUYWJJbmRleCggd3JhcHBlciwgbm9kZS5jaGVja2VkID8gMCA6IC0xICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MSW5wdXRFbGVtZW50fVxuICogQHBhcmFtIHRhYkluZGV4IHtOdW1iZXJ9XG4gKi9cblNpZ25hbENob2ljZXMucHJvdG90eXBlLnNldFJhd1RhYkluZGV4ID0gZnVuY3Rpb24gKCBub2RlLCB0YWJJbmRleCApIHtcblx0aWYgKCB0YWJJbmRleCAhPT0gbm9kZS50YWJJbmRleCApIHtcblx0XHRub2RlLnRhYkluZGV4ID0gdGFiSW5kZXg7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbENob2ljZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2hvaWNlc0RhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsQ2hvaWNlcyBmcm9tICcuL3NpZ25hbCc7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2hvaWNlcy1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgQ2hvaWNlc0RhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2hvaWNlcy1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxDaG9pY2VzLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjIuMCAoZm9yIHJhZGlvLWZpZWxkIGNvbXBhdGliaWxpdHkpXG5cdCAqL1xuXHQyMFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=