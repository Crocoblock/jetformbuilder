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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ3JHQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9DaGVja2JveERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9wcm9jZXNzT3B0aW9uLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5wY3NzPzhkMjkiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCBmcm9tICcuL2Z1bmN0aW9ucy9nZXRDdXN0b21DaGVja2JveElucHV0JztcbmltcG9ydCBzYW5pdGl6ZUNoZWNrYm94IGZyb20gJy4vZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3gnO1xuXG5jb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgUmVhY3RpdmVIb29rLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHsgZ2V0UGFyc2VkTmFtZSB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlICkge1xuXHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cblx0XHQvKipcblx0XHQgKiBjb252ZXJ0IHN0cmluZyB0byBhcnJheSBmb3Igc2V0dGluZyBkeW5hbWljIG11bHRpIHZhbHVlXG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy84NTA5XG5cdFx0ICovXG5cdFx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDEgJiYgdmFsdWVbMF0gJiYgdHJ1ZSAhPSB2YWx1ZVswXSAmJiB2YWx1ZVswXS5pbmNsdWRlcygnLCcpICkge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZVswXS5zcGxpdCgnLCcpO1xuXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLm1hcCggaXRlbSA9PiB7XG5cdFx0XHRcdGlmICggJ3RydWUnID09PSBpdGVtICkgcmV0dXJuICcnO1xuXHRcdFx0XHRpZiAoICdmYWxzZScgPT09IGl0ZW0gKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIFsgdmFsdWUgXS5maWx0ZXIoXG5cdFx0Qm9vbGVhbixcblx0KTtcbn1cblxuLyoqXG4gKiBAcHJvcGVydHkgSFRNTENvbGxlY3Rpb25PZjxIVE1MSW5wdXRFbGVtZW50PiBub2Rlc1xuICovXG5mdW5jdGlvbiBDaGVja2JveERhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53cmFwcGVyICAgICAgICAgID0gbnVsbDtcblx0dGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlID0gZmFsc2U7XG59XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUud3JhcHBlciA9IG51bGw7XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRyZXR1cm4gKFxuXHRcdG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2hlY2tyYWRpby13cmFwJyApICYmXG5cdFx0bm9kZS5xdWVyeVNlbGVjdG9yKCAnLmNoZWNrYm94ZXMtd3JhcCcgKVxuXHQpO1xufTtcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xuXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKSApO1xuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQna2V5ZG93bicsXG5cdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXG5cdCk7XG5cblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c291dCcsIGV2ZW50ID0+IHtcblx0XHRpZiAoXG5cdFx0XHQvLyBqdXN0IHNpbXBsZSBjaGVja2JveFxuXHRcdFx0WyAuLi50aGlzLm5vZGVzIF0uaW5jbHVkZXMoIGV2ZW50Py5yZWxhdGVkVGFyZ2V0ICkgfHxcblx0XHRcdC8vIGlucHV0IGZyb20gY3VzdG9tIGNoZWNrYm94XG5cdFx0XHRldmVudD8ucmVsYXRlZFRhcmdldD8uY2xvc2VzdD8uKFxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAuY3VzdG9tLW9wdGlvbicsXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMucmVwb3J0T25CbHVyKCk7XG5cdH0gKTtcblxuXHRpZiAoIHRoaXMuYWRkTmV3QnV0dG9uICkge1xuXHRcdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiB7XG5cdFx0XHRpZiAoIGV2ZW50Py50YXJnZXQgJiZcblx0XHRcdFx0IXRoaXMuYWRkTmV3QnV0dG9uLmlzRXF1YWxOb2RlKCBldmVudC50YXJnZXQgKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2lsZW5jZVNldCggWyAuLi50aGlzLnZhbHVlLmN1cnJlbnQsIHRydWUgXSApO1xuXHRcdFx0Y29uc3QgbGFzdE5vZGUgPSB0aGlzLmdldEN1c3RvbU5vZGVzKCkuYXQoIC0xICk7XG5cblx0XHRcdGNvbnN0IGlucHV0ID0gbGFzdE5vZGUuY2xvc2VzdChcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyxcblx0XHRcdCkucXVlcnlTZWxlY3RvciggJ3NwYW4gaW5wdXQuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQnICk7XG5cblx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0fSApO1xuXHR9XG5cblx0dGhpcy5pc0FycmF5KCkgJiYgdGhpcy5zYW5pdGl6ZSggc2FuaXRpemVWYWx1ZSApO1xuXG5cdC8qKlxuXHQgKiBVc2UgU2FuaXRpemVyIGluc3RlYWQgb2YgQmFzZVNpZ25hbCBwcm90b3R5cGUuXG5cdCAqIFdlIG5lZWQgaXQgYmVjYXVzZSBvZiBkZWxldGlvbiBcIm51bGxcIiB2YWx1ZXNcblx0ICovXG5cblx0dGhpcy5jYWxsYWJsZSA9IG51bGw7XG5cdHRoaXMuc2FuaXRpemUoIHZhbHVlID0+IHNhbml0aXplQ2hlY2tib3goIHZhbHVlLCB0aGlzICkgKTtcbn07XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUub25DaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcbn07XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcblx0dGhpcy52YWx1ZS5hcHBseVNhbml0aXplcnMoIHRoaXMudmFsdWUuY3VycmVudCApO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5zZXROb2RlID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xuXHQvKipcblx0ICogSXQgc2hvdWxkIGJlIGxpdmUgY29sbGVjdGlvbiBmb3IgdGhlIGNhc2Ugd2hlbiBpdGVtcyBtYXkgY2hhbmdlXG5cdCAqL1xuXHR0aGlzLm5vZGVzID0gbm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyX19maWVsZCBjaGVja2JveGVzLWZpZWxkJyApO1xuXG5cdHRoaXMucmF3TmFtZSAgID0gdGhpcy5ub2Rlc1sgMCBdLm5hbWU7XG5cdHRoaXMubmFtZSAgICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XG5cdHRoaXMuaW5wdXRUeXBlID0gJ2NoZWNrYm94JztcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLndyYXBwZXIgPSBub2RlO1xuXG5cdHRoaXMuYWRkTmV3QnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcC5jdXN0b20tb3B0aW9uIC5hZGQtY3VzdG9tLW9wdGlvbicsXG5cdCk7XG59O1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLmdldEFjdGl2ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB2YWx1ZSA9IFtdO1xuXG5cdC8vIGl0ZXJhdGUgY2hlY2tib3hlc1xuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XG5cdFx0dGhpcy5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlKCBub2RlLCB2YWx1ZSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMuaXNBcnJheSgpID8gdmFsdWUgOiAoXG5cdFx0dmFsdWU/LlsgMCBdID8/ICcnXG5cdCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICogQHBhcmFtIHZhbHVlIHtBcnJheX1cbiAqL1xuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlID0gZnVuY3Rpb24gKCBub2RlLCB2YWx1ZSApIHtcblx0aWYgKCAhbm9kZS5kYXRhc2V0LmN1c3RvbSAmJiAhbm9kZS5jaGVja2VkICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGlmIGJhc2ljIG9wdGlvbiBqdXN0IHJldHVybiB2YWx1ZVxuXHRpZiAoICFub2RlLmRhdGFzZXQuY3VzdG9tICkge1xuXHRcdHZhbHVlLnB1c2goIG5vZGUudmFsdWUgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbnB1dCA9IGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIG5vZGUgKTtcblxuXHRpZiAoICFub2RlLmNoZWNrZWQgJiYgIWlucHV0LnZhbHVlICkge1xuXHRcdHZhbHVlLnB1c2goIG51bGwgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyByZWNlbnRseSBhZGRlZCBuZXcgb3B0aW9uXG5cdGlmICggIWlucHV0LnZhbHVlICYmIG5vZGUuY2hlY2tlZCApIHtcblx0XHR2YWx1ZS5wdXNoKCB0cnVlICk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCAhaW5wdXQudmFsdWUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZGlzYWJsZWQgb3IgZW5hYmxlIGlucHV0LCBkZXBlbmRpbmcgb24gY2hlY2tib3ggY2hlY2sgc3RhdGVcblx0dmFsdWUucHVzaCggIW5vZGUuY2hlY2tlZCA/IGZhbHNlIDogaW5wdXQudmFsdWUgKTtcbn07XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuaXNBcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIChcblx0XHRCb29sZWFuKCB0aGlzLmFkZE5ld0J1dHRvbiApIHx8XG5cdFx0dGhpcy5ub2Rlcy5pdGVtICYmIHRoaXMubm9kZXMuaXRlbSggMCApPy5uYW1lPy5pbmNsdWRlcz8uKCAnW10nIClcblx0KTtcbn07XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuYWRkQ3VzdG9tT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCByb3dXcmFwcGVyID0gdGhpcy5hZGROZXdCdXR0b24uY2xvc2VzdChcblx0XHQnLmN1c3RvbS1vcHRpb24nLFxuXHQpO1xuXG5cdHJldHVybiB0aGlzLndyYXBwZXIuaW5zZXJ0QmVmb3JlKFxuXHRcdHRoaXMuZ2V0Q3VzdG9tT3B0aW9uTm9kZSgpLFxuXHRcdHJvd1dyYXBwZXIsXG5cdCk7XG59O1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLmdldEN1c3RvbU9wdGlvbk5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMuYWRkTmV3QnV0dG9uICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IGluaXRpYWwgPSB0aGlzLmFkZE5ld0J1dHRvbi5xdWVyeVNlbGVjdG9yKCAndGVtcGxhdGUnICk7XG5cblx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBpbml0aWFsLmlubmVySFRNTC50cmltKCk7XG5cblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbn07XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBbIC4uLnRoaXMubm9kZXMgXS5maWx0ZXIoXG5cdFx0bm9kZSA9PiBub2RlLmRhdGFzZXQuY3VzdG9tICYmIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLFxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hEYXRhOyIsImZ1bmN0aW9uIGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCAnaW5wdXQudGV4dC1maWVsZCcgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dDsiLCIvKipcbiAqIEBwYXJhbSBub2RlXG4gKiBAcGFyYW0gY3VycmVudCB7QXJyYXl8U3RyaW5nfVxuICogQHBhcmFtIGlucHV0IHtDaGVja2JveERhdGF9XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NPcHRpb24oIG5vZGUsIGN1cnJlbnQsIGlucHV0ICkge1xuXHRub2RlLmNoZWNrZWQgPSBjdXJyZW50Py5pbmNsdWRlcyggbm9kZS52YWx1ZSApO1xuXG5cdGlmICggIW5vZGUuY2hlY2tlZCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpbnB1dC5jYWxjVmFsdWUgKz0gcGFyc2VGbG9hdChcblx0XHRub2RlLmRhdGFzZXQ/LmNhbGN1bGF0ZSA/PyBub2RlLnZhbHVlLFxuXHQpO1xuXG5cdGlmICggIWlucHV0LmlzQXJyYXkoKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbmRleCA9IGN1cnJlbnQuaW5kZXhPZiggbm9kZS52YWx1ZSApO1xuXG5cdC8vIHJlbW92ZSBmcm9tIGFycmF5IHZhbHVlc1xuXHRjdXJyZW50LnNwbGljZSggaW5kZXgsIDEgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc09wdGlvbjsiLCJpbXBvcnQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCBmcm9tICcuL2dldEN1c3RvbUNoZWNrYm94SW5wdXQnO1xuaW1wb3J0IHByb2Nlc3NPcHRpb24gZnJvbSAnLi9wcm9jZXNzT3B0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG4vKipcbiAqIEBwYXJhbSB2YWx1ZSB7QXJyYXl9XG4gKiBAcGFyYW0gaW5wdXQge0NoZWNrYm94RGF0YX1cbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVDaGVja2JveCggdmFsdWUsIGlucHV0ICkge1xuXHRpbnB1dC5jYWxjVmFsdWUgPSAwO1xuXHRjb25zdCBjb3B5VmFsdWUgPSBpbnB1dC5pc0FycmF5KCkgPyBbIC4uLnZhbHVlIF0gOiB2YWx1ZTtcblxuXHRmb3IgKCBjb25zdCBub2RlIG9mIGlucHV0Lm5vZGVzICkge1xuXHRcdChcblx0XHRcdCFub2RlLmRhdGFzZXQuY3VzdG9tXG5cdFx0KSAmJiBwcm9jZXNzT3B0aW9uKCBub2RlLCBjb3B5VmFsdWUsIGlucHV0ICk7XG5cdH1cblxuXHRpZiAoICFpbnB1dC5hZGROZXdCdXR0b24gKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3QgY3VzdG9tTm9kZXMgPSBpbnB1dC5nZXRDdXN0b21Ob2RlcygpO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm4gaWYgY3VzdG9tIG9wdGlvbnMgZG9uJ3QgZXhpc3Rcblx0ICogQW5kIGlmIHZhbHVlcyBsaXN0IGlzIGVtcHR5LlxuXHQgKlxuXHQgKiBAc2VlIHByb2Nlc3NPcHRpb25cblx0ICovXG5cdGlmICggY3VzdG9tTm9kZXMubGVuZ3RoICYmICFjb3B5VmFsdWUubGVuZ3RoICkge1xuXHRcdGNvbnN0IGxpbWl0ID0gTWF0aC5tYXgoIGN1c3RvbU5vZGVzLmxlbmd0aCwgY29weVZhbHVlLmxlbmd0aCApO1xuXG5cdFx0Zm9yICggbGV0IGkgPSBsaW1pdCAtIDE7IGkgPj0gMDsgaS0tICkge1xuXHRcdFx0aWYgKCBjdXN0b21Ob2Rlc1sgaSBdICkge1xuXHRcdFx0XHRsZXQgY3VycmVudE5vZGUgICAgPSBjdXN0b21Ob2Rlc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBjb3B5VmFsdWVbIGkgXTtcblxuXHRcdFx0XHQvLyB2YWx1ZSBoYXMgYmVlbiByZW1vdmVkXG5cdFx0XHRcdGlmICggdW5kZWZpbmVkID09PSBjdXJyZW50VmFsdWUgKSB7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUuY2xvc2VzdCggJy5jdXN0b20tb3B0aW9uJyApLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbGltaXQgPSBNYXRoLm1heCggY3VzdG9tTm9kZXMubGVuZ3RoLCBjb3B5VmFsdWUubGVuZ3RoICk7XG5cblx0Zm9yICggbGV0IGkgPSBsaW1pdCAtIDE7IGkgPj0gMDsgaS0tICkge1xuXHRcdGxldCBjdXJyZW50Tm9kZSAgICA9IGN1c3RvbU5vZGVzWyBpIF07XG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gY29weVZhbHVlWyBpIF07XG5cblx0XHQvLyB2YWx1ZSBoYXMgYmVlbiByZW1vdmVkXG5cdFx0aWYgKCBudWxsID09PSBjdXJyZW50VmFsdWUgfHwgdW5kZWZpbmVkID09PSBjdXJyZW50VmFsdWUgKSB7XG5cdFx0XHRpZiAoIGN1cnJlbnROb2RlICkge1xuXHRcdFx0XHRjdXJyZW50Tm9kZS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICkucmVtb3ZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGFkZCByb3cgZWxlbWVudCBpbiBkb21cblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgY3VycmVudE5vZGUgKSB7XG5cdFx0XHQvLyBpdCBjYW4ndCBiZSBkaXNhYmxlZCwgc29tZXRoaW5nIHdlbnQgd3Jvbmdcblx0XHRcdGlmICggZmFsc2UgPT09IGN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpbnB1dC5hZGRDdXN0b21PcHRpb24oKTtcblxuXHRcdFx0Y3VycmVudE5vZGUgPSBpbnB1dC5ub2Rlc1sgaW5wdXQubm9kZXMubGVuZ3RoIC0gMSBdO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0Tm9kZSAgICA9IGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIGN1cnJlbnROb2RlICk7XG5cdFx0aW5wdXROb2RlLmRpc2FibGVkID0gZmFsc2UgPT09IGN1cnJlbnRWYWx1ZTtcblxuXHRcdC8vIGFkZCAxIGlmIGN1c3RvbSBvcHRpb24gbm90IGRlc2VsZWN0ZWQsIG5vdCB3aXRoIGVtcHR5IHZhbHVlXG5cdFx0Ly8gYW5kIGhhc24ndCBqdXN0IGFkZGVkXG5cdFx0aWYgKCAhaW5wdXROb2RlLmRpc2FibGVkICYmXG5cdFx0XHQhaXNFbXB0eSggY3VycmVudFZhbHVlICkgJiZcblx0XHRcdHRydWUgIT09IGN1cnJlbnRWYWx1ZVxuXHRcdCkge1xuXHRcdFx0aW5wdXQuY2FsY1ZhbHVlICs9IDE7XG5cdFx0fVxuXG5cdFx0aWYgKCBpbnB1dE5vZGUudmFsdWUgPT09IGN1cnJlbnRWYWx1ZSB8fFxuXHRcdFx0J2Jvb2xlYW4nID09PSB0eXBlb2YgY3VycmVudFZhbHVlXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpbnB1dE5vZGUudmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWUuZmlsdGVyKCB2YWwgPT4gbnVsbCAhPT0gdmFsICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplQ2hlY2tib3g7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2hlY2tib3hEYXRhIGZyb20gJy4vQ2hlY2tib3hEYXRhJztcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxuXHRDaGVja2JveERhdGEsXG59O1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2hlY2tib3gtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIENoZWNrYm94RGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=