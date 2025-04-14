/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/checkbox/CheckboxData.js":
/*!**************************************************!*\
  !*** ./frontend/blocks/checkbox/CheckboxData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_getCustomCheckboxInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/getCustomCheckboxInput */ "./frontend/blocks/checkbox/functions/getCustomCheckboxInput.js");
/* harmony import */ var _functions_sanitizeCheckbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/sanitizeCheckbox */ "./frontend/blocks/checkbox/functions/sanitizeCheckbox.js");


const {
  InputData,
  ReactiveHook
} = JetFormBuilderAbstract;
const {
  getParsedName
} = JetFormBuilderFunctions;
function sanitizeValue(value) {
  if (Array.isArray(value)) {
    /**
     * convert string to array for setting dynamic multi value
     *
     * @see https://github.com/Crocoblock/issues-tracker/issues/8509
     */
    if (value.length === 1 && value[0] && true != value[0] && value[0].includes(',')) {
      value = value[0].split(',');
      value = value.map(item => {
        if ('true' === item) return '';
        if ('false' === item) return null;
        return item;
      });
    }
    return value;
  }
  return [value].filter(Boolean);
}

/**
 * @property HTMLCollectionOf<HTMLInputElement> nodes
 */
function CheckboxData() {
  InputData.call(this);
  this.wrapper = null;
  this.isResetCalcValue = false;
}
CheckboxData.prototype = Object.create(InputData.prototype);
CheckboxData.prototype.wrapper = null;
CheckboxData.prototype.isSupported = function (node) {
  return node.classList.contains('checkradio-wrap') && node.querySelector('.checkboxes-wrap');
};
CheckboxData.prototype.addListeners = function () {
  this.enterKey = new ReactiveHook();
  this.wrapper.addEventListener('change', this.onChangeValue.bind(this));
  this.wrapper.addEventListener('keydown', this.handleEnterKey.bind(this));
  this.wrapper.addEventListener('focusout', event => {
    if (
    // just simple checkbox
    [...this.nodes].includes(event?.relatedTarget) ||
    // input from custom checkbox
    event?.relatedTarget?.closest?.('.jet-form-builder__field-wrap.custom-option')) {
      return;
    }
    this.reportOnBlur();
  });
  if (this.addNewButton) {
    this.wrapper.addEventListener('click', event => {
      if (event?.target && !this.addNewButton.isEqualNode(event.target)) {
        return;
      }
      this.silenceSet([...this.value.current, true]);
      const lastNode = this.getCustomNodes().at(-1);
      const input = lastNode.closest('.jet-form-builder__field-wrap').querySelector('span input.jet-form-builder__field');
      input.focus();
    });
  }
  this.isArray() && this.sanitize(sanitizeValue);

  /**
   * Use Sanitizer instead of BaseSignal prototype.
   * We need it because of deletion "null" values
   */

  this.callable = null;
  this.sanitize(value => (0,_functions_sanitizeCheckbox__WEBPACK_IMPORTED_MODULE_1__["default"])(value, this));
};
CheckboxData.prototype.onChangeValue = function (event) {
  this.value.current = this.getActiveValue();
};
CheckboxData.prototype.setValue = function () {
  this.value.current = this.getActiveValue();
  this.value.applySanitizers(this.value.current);
};
CheckboxData.prototype.setNode = function (node) {
  node.jfbSync = this;
  /**
   * It should be live collection for the case when items may change
   */
  this.nodes = node.getElementsByClassName('jet-form-builder__field checkboxes-field');
  this.rawName = this.nodes[0].name;
  this.name = getParsedName(this.rawName);
  this.inputType = 'checkbox';

  /**
   * @type {HTMLElement|HTMLInputElement}
   */
  this.wrapper = node;
  this.addNewButton = node.querySelector('.jet-form-builder__field-wrap.custom-option .add-custom-option');
};
CheckboxData.prototype.getActiveValue = function () {
  var _value$;
  const value = [];

  // iterate checkboxes
  for (const node of this.nodes) {
    this.processValueFormSingleChoice(node, value);
  }
  return this.isArray() ? value : (_value$ = value?.[0]) !== null && _value$ !== void 0 ? _value$ : '';
};

/**
 * @param node {Element}
 * @param value {Array}
 */
CheckboxData.prototype.processValueFormSingleChoice = function (node, value) {
  if (!node.dataset.custom && !node.checked) {
    return;
  }

  // if basic option just return value
  if (!node.dataset.custom) {
    value.push(node.value);
    return;
  }
  const input = (0,_functions_getCustomCheckboxInput__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  if (!node.checked && !input.value) {
    value.push(null);
    return;
  }

  // recently added new option
  if (!input.value && node.checked) {
    value.push(true);
    return;
  }
  if (!input.value) {
    return;
  }

  // disabled or enable input, depending on checkbox check state
  value.push(!node.checked ? false : input.value);
};
CheckboxData.prototype.isArray = function () {
  return Boolean(this.addNewButton) || this.nodes.item && this.nodes.item(0)?.name?.includes?.('[]');
};
CheckboxData.prototype.addCustomOption = function () {
  const rowWrapper = this.addNewButton.closest('.custom-option');
  return this.wrapper.insertBefore(this.getCustomOptionNode(), rowWrapper);
};
CheckboxData.prototype.getCustomOptionNode = function () {
  if (!this.addNewButton) {
    return false;
  }
  const initial = this.addNewButton.querySelector('template');
  const template = document.createElement('template');
  template.innerHTML = initial.innerHTML.trim();
  return template.content.firstChild;
};
CheckboxData.prototype.getCustomNodes = function () {
  return [...this.nodes].filter(node => node.dataset.custom && node.nextElementSibling);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxData);

/***/ }),

/***/ "./frontend/blocks/checkbox/functions/getCustomCheckboxInput.js":
/*!**********************************************************************!*\
  !*** ./frontend/blocks/checkbox/functions/getCustomCheckboxInput.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getCustomCheckboxInput(node) {
  return node.nextElementSibling.querySelector('input.text-field');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCustomCheckboxInput);

/***/ }),

/***/ "./frontend/blocks/checkbox/functions/processOption.js":
/*!*************************************************************!*\
  !*** ./frontend/blocks/checkbox/functions/processOption.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param node
 * @param current {Array|String}
 * @param input {CheckboxData}
 */
function processOption(node, current, input) {
  var _node$dataset$calcula;
  node.checked = current?.includes(node.value);
  if (!node.checked) {
    return;
  }
  input.calcValue += parseFloat((_node$dataset$calcula = node.dataset?.calculate) !== null && _node$dataset$calcula !== void 0 ? _node$dataset$calcula : node.value);
  if (!input.isArray()) {
    return;
  }
  const index = current.indexOf(node.value);

  // remove from array values
  current.splice(index, 1);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processOption);

/***/ }),

/***/ "./frontend/blocks/checkbox/functions/sanitizeCheckbox.js":
/*!****************************************************************!*\
  !*** ./frontend/blocks/checkbox/functions/sanitizeCheckbox.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCustomCheckboxInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCustomCheckboxInput */ "./frontend/blocks/checkbox/functions/getCustomCheckboxInput.js");
/* harmony import */ var _processOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processOption */ "./frontend/blocks/checkbox/functions/processOption.js");


const {
  isEmpty
} = JetFormBuilderFunctions;

/**
 * @param value {Array}
 * @param input {CheckboxData}
 */
function sanitizeCheckbox(value, input) {
  input.calcValue = 0;
  const copyValue = input.isArray() ? [...value] : value;
  for (const node of input.nodes) {
    !node.dataset.custom && (0,_processOption__WEBPACK_IMPORTED_MODULE_1__["default"])(node, copyValue, input);
  }
  if (!input.addNewButton) {
    return value;
  }
  const customNodes = input.getCustomNodes();

  /**
   * Return if custom options don't exist
   * And if values list is empty.
   *
   * @see processOption
   */
  if (customNodes.length && !copyValue.length) {
    const limit = Math.max(customNodes.length, copyValue.length);
    for (let i = limit - 1; i >= 0; i--) {
      if (customNodes[i]) {
        let currentNode = customNodes[i];
        const currentValue = copyValue[i];

        // value has been removed
        if (undefined === currentValue) {
          currentNode.closest('.custom-option').remove();
        }
      }
    }
    return;
  }
  const limit = Math.max(customNodes.length, copyValue.length);
  for (let i = limit - 1; i >= 0; i--) {
    let currentNode = customNodes[i];
    const currentValue = copyValue[i];

    // value has been removed
    if (null === currentValue || undefined === currentValue) {
      if (currentNode) {
        currentNode.closest('.custom-option').remove();
      }
      continue;
    }

    // add row element in dom
    if ('undefined' === typeof currentNode) {
      // it can't be disabled, something went wrong
      if (false === currentValue) {
        continue;
      }
      input.addCustomOption();
      currentNode = input.nodes[input.nodes.length - 1];
    }
    const inputNode = (0,_getCustomCheckboxInput__WEBPACK_IMPORTED_MODULE_0__["default"])(currentNode);
    inputNode.disabled = false === currentValue;

    // add 1 if custom option not deselected, not with empty value
    // and hasn't just added
    if (!inputNode.disabled && !isEmpty(currentValue) && true !== currentValue) {
      input.calcValue += 1;
    }
    if (inputNode.value === currentValue || 'boolean' === typeof currentValue) {
      continue;
    }
    inputNode.value = currentValue;
  }
  return value.filter(val => null !== val);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sanitizeCheckbox);

/***/ }),

/***/ "./frontend/blocks/checkbox/index.pcss":
/*!*********************************************!*\
  !*** ./frontend/blocks/checkbox/index.pcss ***!
  \*********************************************/
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
/*!******************************************!*\
  !*** ./frontend/blocks/checkbox/main.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxData */ "./frontend/blocks/checkbox/CheckboxData.js");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.pcss */ "./frontend/blocks/checkbox/index.pcss");


const {
  addFilter
} = JetPlugins.hooks;
window.JetFormBuilderAbstract = {
  ...window.JetFormBuilderAbstract,
  CheckboxData: _CheckboxData__WEBPACK_IMPORTED_MODULE_0__["default"]
};
addFilter('jet.fb.inputs', 'jet-form-builder/checkbox-field', function (inputs) {
  inputs = [_CheckboxData__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ3JHQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L0NoZWNrYm94RGF0YS5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9nZXRDdXN0b21DaGVja2JveElucHV0LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL3Byb2Nlc3NPcHRpb24uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvc2FuaXRpemVDaGVja2JveC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2luZGV4LnBjc3M/OGQyOSIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDdXN0b21DaGVja2JveElucHV0IGZyb20gJy4vZnVuY3Rpb25zL2dldEN1c3RvbUNoZWNrYm94SW5wdXQnO1xyXG5pbXBvcnQgc2FuaXRpemVDaGVja2JveCBmcm9tICcuL2Z1bmN0aW9ucy9zYW5pdGl6ZUNoZWNrYm94JztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBJbnB1dERhdGEsXHJcblx0ICAgICAgUmVhY3RpdmVIb29rLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmNvbnN0IHsgZ2V0UGFyc2VkTmFtZSB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBzYW5pdGl6ZVZhbHVlKCB2YWx1ZSApIHtcclxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBjb252ZXJ0IHN0cmluZyB0byBhcnJheSBmb3Igc2V0dGluZyBkeW5hbWljIG11bHRpIHZhbHVlXHJcblx0XHQgKlxyXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvODUwOVxyXG5cdFx0ICovXHJcblx0XHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMSAmJiB2YWx1ZVswXSAmJiB0cnVlICE9IHZhbHVlWzBdICYmIHZhbHVlWzBdLmluY2x1ZGVzKCcsJykgKSB7XHJcblx0XHRcdHZhbHVlID0gdmFsdWVbMF0uc3BsaXQoJywnKTtcclxuXHJcblx0XHRcdHZhbHVlID0gdmFsdWUubWFwKCBpdGVtID0+IHtcclxuXHRcdFx0XHRpZiAoICd0cnVlJyA9PT0gaXRlbSApIHJldHVybiAnJztcclxuXHRcdFx0XHRpZiAoICdmYWxzZScgPT09IGl0ZW0gKSByZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbIHZhbHVlIF0uZmlsdGVyKFxyXG5cdFx0Qm9vbGVhbixcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4gbm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIENoZWNrYm94RGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndyYXBwZXIgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS53cmFwcGVyID0gbnVsbDtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdHJldHVybiAoXHJcblx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSAmJlxyXG5cdFx0bm9kZS5xdWVyeVNlbGVjdG9yKCAnLmNoZWNrYm94ZXMtd3JhcCcgKVxyXG5cdCk7XHJcbn07XHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblxyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKSApO1xyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2tleWRvd24nLFxyXG5cdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXHJcblx0KTtcclxuXHJcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c291dCcsIGV2ZW50ID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0Ly8ganVzdCBzaW1wbGUgY2hlY2tib3hcclxuXHRcdFx0WyAuLi50aGlzLm5vZGVzIF0uaW5jbHVkZXMoIGV2ZW50Py5yZWxhdGVkVGFyZ2V0ICkgfHxcclxuXHRcdFx0Ly8gaW5wdXQgZnJvbSBjdXN0b20gY2hlY2tib3hcclxuXHRcdFx0ZXZlbnQ/LnJlbGF0ZWRUYXJnZXQ/LmNsb3Nlc3Q/LihcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAuY3VzdG9tLW9wdGlvbicsXHJcblx0XHRcdClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xyXG5cdH0gKTtcclxuXHJcblx0aWYgKCB0aGlzLmFkZE5ld0J1dHRvbiApIHtcclxuXHRcdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiB7XHJcblx0XHRcdGlmICggZXZlbnQ/LnRhcmdldCAmJlxyXG5cdFx0XHRcdCF0aGlzLmFkZE5ld0J1dHRvbi5pc0VxdWFsTm9kZSggZXZlbnQudGFyZ2V0IClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2lsZW5jZVNldCggWyAuLi50aGlzLnZhbHVlLmN1cnJlbnQsIHRydWUgXSApO1xyXG5cdFx0XHRjb25zdCBsYXN0Tm9kZSA9IHRoaXMuZ2V0Q3VzdG9tTm9kZXMoKS5hdCggLTEgKTtcclxuXHJcblx0XHRcdGNvbnN0IGlucHV0ID0gbGFzdE5vZGUuY2xvc2VzdChcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxyXG5cdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoICdzcGFuIGlucHV0LmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkJyApO1xyXG5cclxuXHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNBcnJheSgpICYmIHRoaXMuc2FuaXRpemUoIHNhbml0aXplVmFsdWUgKTtcclxuXHJcblx0LyoqXHJcblx0ICogVXNlIFNhbml0aXplciBpbnN0ZWFkIG9mIEJhc2VTaWduYWwgcHJvdG90eXBlLlxyXG5cdCAqIFdlIG5lZWQgaXQgYmVjYXVzZSBvZiBkZWxldGlvbiBcIm51bGxcIiB2YWx1ZXNcclxuXHQgKi9cclxuXHJcblx0dGhpcy5jYWxsYWJsZSA9IG51bGw7XHJcblx0dGhpcy5zYW5pdGl6ZSggdmFsdWUgPT4gc2FuaXRpemVDaGVja2JveCggdmFsdWUsIHRoaXMgKSApO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcclxuXHR0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0bm9kZS5qZmJTeW5jID0gdGhpcztcclxuXHQvKipcclxuXHQgKiBJdCBzaG91bGQgYmUgbGl2ZSBjb2xsZWN0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGl0ZW1zIG1heSBjaGFuZ2VcclxuXHQgKi9cclxuXHR0aGlzLm5vZGVzID0gbm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkIGNoZWNrYm94ZXMtZmllbGQnICk7XHJcblxyXG5cdHRoaXMucmF3TmFtZSAgID0gdGhpcy5ub2Rlc1sgMCBdLm5hbWU7XHJcblx0dGhpcy5uYW1lICAgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcclxuXHR0aGlzLmlucHV0VHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMud3JhcHBlciA9IG5vZGU7XHJcblxyXG5cdHRoaXMuYWRkTmV3QnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24gLmFkZC1jdXN0b20tb3B0aW9uJyxcclxuXHQpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IFtdO1xyXG5cclxuXHQvLyBpdGVyYXRlIGNoZWNrYm94ZXNcclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XHJcblx0XHR0aGlzLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UoIG5vZGUsIHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5pc0FycmF5KCkgPyB2YWx1ZSA6IChcclxuXHRcdHZhbHVlPy5bIDAgXSA/PyAnJ1xyXG5cdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XHJcbiAqIEBwYXJhbSB2YWx1ZSB7QXJyYXl9XHJcbiAqL1xyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UgPSBmdW5jdGlvbiAoIG5vZGUsIHZhbHVlICkge1xyXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gJiYgIW5vZGUuY2hlY2tlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGlmIGJhc2ljIG9wdGlvbiBqdXN0IHJldHVybiB2YWx1ZVxyXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCBub2RlLnZhbHVlICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dCA9IGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIG5vZGUgKTtcclxuXHJcblx0aWYgKCAhbm9kZS5jaGVja2VkICYmICFpbnB1dC52YWx1ZSApIHtcclxuXHRcdHZhbHVlLnB1c2goIG51bGwgKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIHJlY2VudGx5IGFkZGVkIG5ldyBvcHRpb25cclxuXHRpZiAoICFpbnB1dC52YWx1ZSAmJiBub2RlLmNoZWNrZWQgKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCB0cnVlICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoICFpbnB1dC52YWx1ZSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGRpc2FibGVkIG9yIGVuYWJsZSBpbnB1dCwgZGVwZW5kaW5nIG9uIGNoZWNrYm94IGNoZWNrIHN0YXRlXHJcblx0dmFsdWUucHVzaCggIW5vZGUuY2hlY2tlZCA/IGZhbHNlIDogaW5wdXQudmFsdWUgKTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuaXNBcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Qm9vbGVhbiggdGhpcy5hZGROZXdCdXR0b24gKSB8fFxyXG5cdFx0dGhpcy5ub2Rlcy5pdGVtICYmIHRoaXMubm9kZXMuaXRlbSggMCApPy5uYW1lPy5pbmNsdWRlcz8uKCAnW10nIClcclxuXHQpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5hZGRDdXN0b21PcHRpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3Qgcm93V3JhcHBlciA9IHRoaXMuYWRkTmV3QnV0dG9uLmNsb3Nlc3QoXHJcblx0XHQnLmN1c3RvbS1vcHRpb24nLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiB0aGlzLndyYXBwZXIuaW5zZXJ0QmVmb3JlKFxyXG5cdFx0dGhpcy5nZXRDdXN0b21PcHRpb25Ob2RlKCksXHJcblx0XHRyb3dXcmFwcGVyLFxyXG5cdCk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmdldEN1c3RvbU9wdGlvbk5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCAhdGhpcy5hZGROZXdCdXR0b24gKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbml0aWFsID0gdGhpcy5hZGROZXdCdXR0b24ucXVlcnlTZWxlY3RvciggJ3RlbXBsYXRlJyApO1xyXG5cclxuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gaW5pdGlhbC5pbm5lckhUTUwudHJpbSgpO1xyXG5cclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRDdXN0b21Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gWyAuLi50aGlzLm5vZGVzIF0uZmlsdGVyKFxyXG5cdFx0bm9kZSA9PiBub2RlLmRhdGFzZXQuY3VzdG9tICYmIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLFxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveERhdGE7IiwiZnVuY3Rpb24gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggbm9kZSApIHtcclxuXHRyZXR1cm4gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvciggJ2lucHV0LnRleHQtZmllbGQnICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEN1c3RvbUNoZWNrYm94SW5wdXQ7IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqIEBwYXJhbSBjdXJyZW50IHtBcnJheXxTdHJpbmd9XHJcbiAqIEBwYXJhbSBpbnB1dCB7Q2hlY2tib3hEYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc09wdGlvbiggbm9kZSwgY3VycmVudCwgaW5wdXQgKSB7XHJcblx0bm9kZS5jaGVja2VkID0gY3VycmVudD8uaW5jbHVkZXMoIG5vZGUudmFsdWUgKTtcclxuXHJcblx0aWYgKCAhbm9kZS5jaGVja2VkICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aW5wdXQuY2FsY1ZhbHVlICs9IHBhcnNlRmxvYXQoXHJcblx0XHRub2RlLmRhdGFzZXQ/LmNhbGN1bGF0ZSA/PyBub2RlLnZhbHVlLFxyXG5cdCk7XHJcblxyXG5cdGlmICggIWlucHV0LmlzQXJyYXkoKSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGluZGV4ID0gY3VycmVudC5pbmRleE9mKCBub2RlLnZhbHVlICk7XHJcblxyXG5cdC8vIHJlbW92ZSBmcm9tIGFycmF5IHZhbHVlc1xyXG5cdGN1cnJlbnQuc3BsaWNlKCBpbmRleCwgMSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzT3B0aW9uOyIsImltcG9ydCBnZXRDdXN0b21DaGVja2JveElucHV0IGZyb20gJy4vZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCc7XHJcbmltcG9ydCBwcm9jZXNzT3B0aW9uIGZyb20gJy4vcHJvY2Vzc09wdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB2YWx1ZSB7QXJyYXl9XHJcbiAqIEBwYXJhbSBpbnB1dCB7Q2hlY2tib3hEYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gc2FuaXRpemVDaGVja2JveCggdmFsdWUsIGlucHV0ICkge1xyXG5cdGlucHV0LmNhbGNWYWx1ZSA9IDA7XHJcblx0Y29uc3QgY29weVZhbHVlID0gaW5wdXQuaXNBcnJheSgpID8gWyAuLi52YWx1ZSBdIDogdmFsdWU7XHJcblxyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XHJcblx0XHQoXHJcblx0XHRcdCFub2RlLmRhdGFzZXQuY3VzdG9tXHJcblx0XHQpICYmIHByb2Nlc3NPcHRpb24oIG5vZGUsIGNvcHlWYWx1ZSwgaW5wdXQgKTtcclxuXHR9XHJcblxyXG5cdGlmICggIWlucHV0LmFkZE5ld0J1dHRvbiApIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGN1c3RvbU5vZGVzID0gaW5wdXQuZ2V0Q3VzdG9tTm9kZXMoKTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIGlmIGN1c3RvbSBvcHRpb25zIGRvbid0IGV4aXN0XHJcblx0ICogQW5kIGlmIHZhbHVlcyBsaXN0IGlzIGVtcHR5LlxyXG5cdCAqXHJcblx0ICogQHNlZSBwcm9jZXNzT3B0aW9uXHJcblx0ICovXHJcblx0aWYgKCBjdXN0b21Ob2Rlcy5sZW5ndGggJiYgIWNvcHlWYWx1ZS5sZW5ndGggKSB7XHJcblx0XHRjb25zdCBsaW1pdCA9IE1hdGgubWF4KCBjdXN0b21Ob2Rlcy5sZW5ndGgsIGNvcHlWYWx1ZS5sZW5ndGggKTtcclxuXHJcblx0XHRmb3IgKCBsZXQgaSA9IGxpbWl0IC0gMTsgaSA+PSAwOyBpLS0gKSB7XHJcblx0XHRcdGlmICggY3VzdG9tTm9kZXNbIGkgXSApIHtcclxuXHRcdFx0XHRsZXQgY3VycmVudE5vZGUgICAgPSBjdXN0b21Ob2Rlc1sgaSBdO1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvcHlWYWx1ZVsgaSBdO1xyXG5cclxuXHRcdFx0XHQvLyB2YWx1ZSBoYXMgYmVlbiByZW1vdmVkXHJcblx0XHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IGN1cnJlbnRWYWx1ZSApIHtcclxuXHRcdFx0XHRcdGN1cnJlbnROb2RlLmNsb3Nlc3QoICcuY3VzdG9tLW9wdGlvbicgKS5yZW1vdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBsaW1pdCA9IE1hdGgubWF4KCBjdXN0b21Ob2Rlcy5sZW5ndGgsIGNvcHlWYWx1ZS5sZW5ndGggKTtcclxuXHJcblx0Zm9yICggbGV0IGkgPSBsaW1pdCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG5cdFx0bGV0IGN1cnJlbnROb2RlICAgID0gY3VzdG9tTm9kZXNbIGkgXTtcclxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvcHlWYWx1ZVsgaSBdO1xyXG5cclxuXHRcdC8vIHZhbHVlIGhhcyBiZWVuIHJlbW92ZWRcclxuXHRcdGlmICggbnVsbCA9PT0gY3VycmVudFZhbHVlIHx8IHVuZGVmaW5lZCA9PT0gY3VycmVudFZhbHVlICkge1xyXG5cdFx0XHRpZiAoIGN1cnJlbnROb2RlICkge1xyXG5cdFx0XHRcdGN1cnJlbnROb2RlLmNsb3Nlc3QoICcuY3VzdG9tLW9wdGlvbicgKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWRkIHJvdyBlbGVtZW50IGluIGRvbVxyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGN1cnJlbnROb2RlICkge1xyXG5cdFx0XHQvLyBpdCBjYW4ndCBiZSBkaXNhYmxlZCwgc29tZXRoaW5nIHdlbnQgd3JvbmdcclxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VycmVudFZhbHVlICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlucHV0LmFkZEN1c3RvbU9wdGlvbigpO1xyXG5cclxuXHRcdFx0Y3VycmVudE5vZGUgPSBpbnB1dC5ub2Rlc1sgaW5wdXQubm9kZXMubGVuZ3RoIC0gMSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlucHV0Tm9kZSAgICA9IGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIGN1cnJlbnROb2RlICk7XHJcblx0XHRpbnB1dE5vZGUuZGlzYWJsZWQgPSBmYWxzZSA9PT0gY3VycmVudFZhbHVlO1xyXG5cclxuXHRcdC8vIGFkZCAxIGlmIGN1c3RvbSBvcHRpb24gbm90IGRlc2VsZWN0ZWQsIG5vdCB3aXRoIGVtcHR5IHZhbHVlXHJcblx0XHQvLyBhbmQgaGFzbid0IGp1c3QgYWRkZWRcclxuXHRcdGlmICggIWlucHV0Tm9kZS5kaXNhYmxlZCAmJlxyXG5cdFx0XHQhaXNFbXB0eSggY3VycmVudFZhbHVlICkgJiZcclxuXHRcdFx0dHJ1ZSAhPT0gY3VycmVudFZhbHVlXHJcblx0XHQpIHtcclxuXHRcdFx0aW5wdXQuY2FsY1ZhbHVlICs9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBpbnB1dE5vZGUudmFsdWUgPT09IGN1cnJlbnRWYWx1ZSB8fFxyXG5cdFx0XHQnYm9vbGVhbicgPT09IHR5cGVvZiBjdXJyZW50VmFsdWVcclxuXHRcdCkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dE5vZGUudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdmFsdWUuZmlsdGVyKCB2YWwgPT4gbnVsbCAhPT0gdmFsICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplQ2hlY2tib3g7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2hlY2tib3hEYXRhIGZyb20gJy4vQ2hlY2tib3hEYXRhJztcclxuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFkZEZpbHRlcixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCxcclxuXHRDaGVja2JveERhdGEsXHJcbn07XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NoZWNrYm94LWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgQ2hlY2tib3hEYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9