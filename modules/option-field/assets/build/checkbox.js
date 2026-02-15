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
function sanitizeValue(value, ctx) {
  if (Array.isArray(value)) {
    /**
     * @see https://github.com/Crocoblock/jetformbuilder/issues/569
     */
    const keepCommas = !!ctx?.keepCommas;

    /**
     * convert string to array for setting dynamic multi value
     *
     * @see https://github.com/Crocoblock/issues-tracker/issues/8509
     */

    if (!keepCommas && value.length === 1 && value[0] && true != value[0] && String(value[0]).includes(',')) {
      value = String(value[0]).split(',');
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
  if (this.isArray()) {
    this.sanitize(value => sanitizeValue(value, this));
  }

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
  this.keepCommas = false;
  for (const node of this.nodes) {
    if (node.checked && node.dataset.keepCommas === '1') {
      this.keepCommas = true;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuUEE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNyR0E7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9DaGVja2JveERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9wcm9jZXNzT3B0aW9uLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5wY3NzPzhkMjkiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCBmcm9tICcuL2Z1bmN0aW9ucy9nZXRDdXN0b21DaGVja2JveElucHV0JztcbmltcG9ydCBzYW5pdGl6ZUNoZWNrYm94IGZyb20gJy4vZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3gnO1xuXG5jb25zdCB7XG5cdElucHV0RGF0YSxcblx0UmVhY3RpdmVIb29rLFxufSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHsgZ2V0UGFyc2VkTmFtZSB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlLCBjdHggKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblxuXHRcdC8qKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svamV0Zm9ybWJ1aWxkZXIvaXNzdWVzLzU2OVxuXHRcdCAqL1xuXHRcdGNvbnN0IGtlZXBDb21tYXMgPSAhIWN0eD8ua2VlcENvbW1hcztcblxuXHRcdC8qKlxuXHRcdCAqIGNvbnZlcnQgc3RyaW5nIHRvIGFycmF5IGZvciBzZXR0aW5nIGR5bmFtaWMgbXVsdGkgdmFsdWVcblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzg1MDlcblx0XHQgKi9cblxuXHRcdGlmIChcblx0XHRcdCFrZWVwQ29tbWFzICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPT09IDEgJiZcblx0XHRcdHZhbHVlWzBdICYmXG5cdFx0XHR0cnVlICE9IHZhbHVlWzBdICYmXG5cdFx0XHRTdHJpbmcoIHZhbHVlWzBdICkuaW5jbHVkZXMoICcsJyApXG5cdFx0KSB7XG5cdFx0XHR2YWx1ZSA9IFN0cmluZyggdmFsdWVbMF0gKS5zcGxpdCgnLCcpO1xuXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLm1hcCggaXRlbSA9PiB7XG5cdFx0XHRcdGlmICggJ3RydWUnID09PSBpdGVtICkgcmV0dXJuICcnO1xuXHRcdFx0XHRpZiAoICdmYWxzZScgPT09IGl0ZW0gKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiBbIHZhbHVlIF0uZmlsdGVyKCBCb29sZWFuICk7XG59XG5cbi8qKlxuICogQHByb3BlcnR5IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4gbm9kZXNcbiAqL1xuZnVuY3Rpb24gQ2hlY2tib3hEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud3JhcHBlciAgICAgICAgICA9IG51bGw7XG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IGZhbHNlO1xufVxuXG5DaGVja2JveERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0cmV0dXJuIChcblx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSAmJlxuXHRcdG5vZGUucXVlcnlTZWxlY3RvciggJy5jaGVja2JveGVzLXdyYXAnIClcblx0KTtcbn07XG5DaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICkgKTtcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2tleWRvd24nLFxuXHRcdHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApLFxuXHQpO1xuXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNvdXQnLCBldmVudCA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0Ly8ganVzdCBzaW1wbGUgY2hlY2tib3hcblx0XHRcdFsgLi4udGhpcy5ub2RlcyBdLmluY2x1ZGVzKCBldmVudD8ucmVsYXRlZFRhcmdldCApIHx8XG5cdFx0XHQvLyBpbnB1dCBmcm9tIGN1c3RvbSBjaGVja2JveFxuXHRcdFx0ZXZlbnQ/LnJlbGF0ZWRUYXJnZXQ/LmNsb3Nlc3Q/Lihcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24nLFxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xuXHR9ICk7XG5cblx0aWYgKCB0aGlzLmFkZE5ld0J1dHRvbiApIHtcblx0XHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKCBldmVudD8udGFyZ2V0ICYmXG5cdFx0XHRcdCF0aGlzLmFkZE5ld0J1dHRvbi5pc0VxdWFsTm9kZSggZXZlbnQudGFyZ2V0IClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNpbGVuY2VTZXQoIFsgLi4udGhpcy52YWx1ZS5jdXJyZW50LCB0cnVlIF0gKTtcblx0XHRcdGNvbnN0IGxhc3ROb2RlID0gdGhpcy5nZXRDdXN0b21Ob2RlcygpLmF0KCAtMSApO1xuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGxhc3ROb2RlLmNsb3Nlc3QoXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXG5cdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoICdzcGFuIGlucHV0LmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkJyApO1xuXG5cdFx0XHRpbnB1dC5mb2N1cygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0dGhpcy5zYW5pdGl6ZSggdmFsdWUgPT4gc2FuaXRpemVWYWx1ZSggdmFsdWUsIHRoaXMgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVzZSBTYW5pdGl6ZXIgaW5zdGVhZCBvZiBCYXNlU2lnbmFsIHByb3RvdHlwZS5cblx0ICogV2UgbmVlZCBpdCBiZWNhdXNlIG9mIGRlbGV0aW9uIFwibnVsbFwiIHZhbHVlc1xuXHQgKi9cblxuXHR0aGlzLmNhbGxhYmxlID0gbnVsbDtcblx0dGhpcy5zYW5pdGl6ZSggdmFsdWUgPT4gc2FuaXRpemVDaGVja2JveCggdmFsdWUsIHRoaXMgKSApO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xuXHR0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XG59O1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdG5vZGUuamZiU3luYyA9IHRoaXM7XG5cdC8qKlxuXHQgKiBJdCBzaG91bGQgYmUgbGl2ZSBjb2xsZWN0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGl0ZW1zIG1heSBjaGFuZ2Vcblx0ICovXG5cdHRoaXMubm9kZXMgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkIGNoZWNrYm94ZXMtZmllbGQnICk7XG5cblx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5vZGVzWyAwIF0ubmFtZTtcblx0dGhpcy5uYW1lICAgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcblx0dGhpcy5pbnB1dFR5cGUgPSAnY2hlY2tib3gnO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cblx0ICovXG5cdHRoaXMud3JhcHBlciA9IG5vZGU7XG5cblx0dGhpcy5hZGROZXdCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24gLmFkZC1jdXN0b20tb3B0aW9uJyxcblx0KTtcbn07XG5cblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdmFsdWUgPSBbXTtcblxuXHR0aGlzLmtlZXBDb21tYXMgPSBmYWxzZTtcblxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XG5cblx0XHRpZiAoIG5vZGUuY2hlY2tlZCAmJiBub2RlLmRhdGFzZXQua2VlcENvbW1hcyA9PT0gJzEnICkge1xuXHRcdFx0dGhpcy5rZWVwQ29tbWFzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UoIG5vZGUsIHZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5pc0FycmF5KCkgPyB2YWx1ZSA6IChcblx0XHR2YWx1ZT8uWyAwIF0gPz8gJydcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxuICovXG5DaGVja2JveERhdGEucHJvdG90eXBlLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UgPSBmdW5jdGlvbiAoIG5vZGUsIHZhbHVlICkge1xuXHRpZiAoICFub2RlLmRhdGFzZXQuY3VzdG9tICYmICFub2RlLmNoZWNrZWQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaWYgYmFzaWMgb3B0aW9uIGp1c3QgcmV0dXJuIHZhbHVlXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gKSB7XG5cdFx0dmFsdWUucHVzaCggbm9kZS52YWx1ZSApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlucHV0ID0gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggbm9kZSApO1xuXG5cdGlmICggIW5vZGUuY2hlY2tlZCAmJiAhaW5wdXQudmFsdWUgKSB7XG5cdFx0dmFsdWUucHVzaCggbnVsbCApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHJlY2VudGx5IGFkZGVkIG5ldyBvcHRpb25cblx0aWYgKCAhaW5wdXQudmFsdWUgJiYgbm9kZS5jaGVja2VkICkge1xuXHRcdHZhbHVlLnB1c2goIHRydWUgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoICFpbnB1dC52YWx1ZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBkaXNhYmxlZCBvciBlbmFibGUgaW5wdXQsIGRlcGVuZGluZyBvbiBjaGVja2JveCBjaGVjayBzdGF0ZVxuXHR2YWx1ZS5wdXNoKCAhbm9kZS5jaGVja2VkID8gZmFsc2UgOiBpbnB1dC52YWx1ZSApO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gKFxuXHRcdEJvb2xlYW4oIHRoaXMuYWRkTmV3QnV0dG9uICkgfHxcblx0XHR0aGlzLm5vZGVzLml0ZW0gJiYgdGhpcy5ub2Rlcy5pdGVtKCAwICk/Lm5hbWU/LmluY2x1ZGVzPy4oICdbXScgKVxuXHQpO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5hZGRDdXN0b21PcHRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHJvd1dyYXBwZXIgPSB0aGlzLmFkZE5ld0J1dHRvbi5jbG9zZXN0KFxuXHRcdCcuY3VzdG9tLW9wdGlvbicsXG5cdCk7XG5cblx0cmV0dXJuIHRoaXMud3JhcHBlci5pbnNlcnRCZWZvcmUoXG5cdFx0dGhpcy5nZXRDdXN0b21PcHRpb25Ob2RlKCksXG5cdFx0cm93V3JhcHBlcixcblx0KTtcbn07XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tT3B0aW9uTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5hZGROZXdCdXR0b24gKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgaW5pdGlhbCA9IHRoaXMuYWRkTmV3QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoICd0ZW1wbGF0ZScgKTtcblxuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IGluaXRpYWwuaW5uZXJIVE1MLnRyaW0oKTtcblxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRDdXN0b21Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIFsgLi4udGhpcy5ub2RlcyBdLmZpbHRlcihcblx0XHRub2RlID0+IG5vZGUuZGF0YXNldC5jdXN0b20gJiYgbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcsXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveERhdGE7IiwiZnVuY3Rpb24gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggbm9kZSApIHtcblx0cmV0dXJuIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dC50ZXh0LWZpZWxkJyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDdXN0b21DaGVja2JveElucHV0OyIsIi8qKlxuICogQHBhcmFtIG5vZGVcbiAqIEBwYXJhbSBjdXJyZW50IHtBcnJheXxTdHJpbmd9XG4gKiBAcGFyYW0gaW5wdXQge0NoZWNrYm94RGF0YX1cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc09wdGlvbiggbm9kZSwgY3VycmVudCwgaW5wdXQgKSB7XG5cdG5vZGUuY2hlY2tlZCA9IGN1cnJlbnQ/LmluY2x1ZGVzKCBub2RlLnZhbHVlICk7XG5cblx0aWYgKCAhbm9kZS5jaGVja2VkICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxuXHRcdG5vZGUuZGF0YXNldD8uY2FsY3VsYXRlID8/IG5vZGUudmFsdWUsXG5cdCk7XG5cblx0aWYgKCAhaW5wdXQuaXNBcnJheSgpICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGluZGV4ID0gY3VycmVudC5pbmRleE9mKCBub2RlLnZhbHVlICk7XG5cblx0Ly8gcmVtb3ZlIGZyb20gYXJyYXkgdmFsdWVzXG5cdGN1cnJlbnQuc3BsaWNlKCBpbmRleCwgMSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzT3B0aW9uOyIsImltcG9ydCBnZXRDdXN0b21DaGVja2JveElucHV0IGZyb20gJy4vZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCc7XG5pbXBvcnQgcHJvY2Vzc09wdGlvbiBmcm9tICcuL3Byb2Nlc3NPcHRpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIGlzRW1wdHksXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbi8qKlxuICogQHBhcmFtIHZhbHVlIHtBcnJheX1cbiAqIEBwYXJhbSBpbnB1dCB7Q2hlY2tib3hEYXRhfVxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZUNoZWNrYm94KCB2YWx1ZSwgaW5wdXQgKSB7XG5cdGlucHV0LmNhbGNWYWx1ZSA9IDA7XG5cdGNvbnN0IGNvcHlWYWx1ZSA9IGlucHV0LmlzQXJyYXkoKSA/IFsgLi4udmFsdWUgXSA6IHZhbHVlO1xuXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XG5cdFx0KFxuXHRcdFx0IW5vZGUuZGF0YXNldC5jdXN0b21cblx0XHQpICYmIHByb2Nlc3NPcHRpb24oIG5vZGUsIGNvcHlWYWx1ZSwgaW5wdXQgKTtcblx0fVxuXG5cdGlmICggIWlucHV0LmFkZE5ld0J1dHRvbiApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBjdXN0b21Ob2RlcyA9IGlucHV0LmdldEN1c3RvbU5vZGVzKCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBpZiBjdXN0b20gb3B0aW9ucyBkb24ndCBleGlzdFxuXHQgKiBBbmQgaWYgdmFsdWVzIGxpc3QgaXMgZW1wdHkuXG5cdCAqXG5cdCAqIEBzZWUgcHJvY2Vzc09wdGlvblxuXHQgKi9cblx0aWYgKCBjdXN0b21Ob2Rlcy5sZW5ndGggJiYgIWNvcHlWYWx1ZS5sZW5ndGggKSB7XG5cdFx0Y29uc3QgbGltaXQgPSBNYXRoLm1heCggY3VzdG9tTm9kZXMubGVuZ3RoLCBjb3B5VmFsdWUubGVuZ3RoICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IGxpbWl0IC0gMTsgaSA+PSAwOyBpLS0gKSB7XG5cdFx0XHRpZiAoIGN1c3RvbU5vZGVzWyBpIF0gKSB7XG5cdFx0XHRcdGxldCBjdXJyZW50Tm9kZSAgICA9IGN1c3RvbU5vZGVzWyBpIF07XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvcHlWYWx1ZVsgaSBdO1xuXG5cdFx0XHRcdC8vIHZhbHVlIGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IGN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW1pdCA9IE1hdGgubWF4KCBjdXN0b21Ob2Rlcy5sZW5ndGgsIGNvcHlWYWx1ZS5sZW5ndGggKTtcblxuXHRmb3IgKCBsZXQgaSA9IGxpbWl0IC0gMTsgaSA+PSAwOyBpLS0gKSB7XG5cdFx0bGV0IGN1cnJlbnROb2RlICAgID0gY3VzdG9tTm9kZXNbIGkgXTtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBjb3B5VmFsdWVbIGkgXTtcblxuXHRcdC8vIHZhbHVlIGhhcyBiZWVuIHJlbW92ZWRcblx0XHRpZiAoIG51bGwgPT09IGN1cnJlbnRWYWx1ZSB8fCB1bmRlZmluZWQgPT09IGN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdGlmICggY3VycmVudE5vZGUgKSB7XG5cdFx0XHRcdGN1cnJlbnROb2RlLmNsb3Nlc3QoICcuY3VzdG9tLW9wdGlvbicgKS5yZW1vdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIHJvdyBlbGVtZW50IGluIGRvbVxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBjdXJyZW50Tm9kZSApIHtcblx0XHRcdC8vIGl0IGNhbid0IGJlIGRpc2FibGVkLCBzb21ldGhpbmcgd2VudCB3cm9uZ1xuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VycmVudFZhbHVlICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlucHV0LmFkZEN1c3RvbU9wdGlvbigpO1xuXG5cdFx0XHRjdXJyZW50Tm9kZSA9IGlucHV0Lm5vZGVzWyBpbnB1dC5ub2Rlcy5sZW5ndGggLSAxIF07XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXROb2RlICAgID0gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggY3VycmVudE5vZGUgKTtcblx0XHRpbnB1dE5vZGUuZGlzYWJsZWQgPSBmYWxzZSA9PT0gY3VycmVudFZhbHVlO1xuXG5cdFx0Ly8gYWRkIDEgaWYgY3VzdG9tIG9wdGlvbiBub3QgZGVzZWxlY3RlZCwgbm90IHdpdGggZW1wdHkgdmFsdWVcblx0XHQvLyBhbmQgaGFzbid0IGp1c3QgYWRkZWRcblx0XHRpZiAoICFpbnB1dE5vZGUuZGlzYWJsZWQgJiZcblx0XHRcdCFpc0VtcHR5KCBjdXJyZW50VmFsdWUgKSAmJlxuXHRcdFx0dHJ1ZSAhPT0gY3VycmVudFZhbHVlXG5cdFx0KSB7XG5cdFx0XHRpbnB1dC5jYWxjVmFsdWUgKz0gMTtcblx0XHR9XG5cblx0XHRpZiAoIGlucHV0Tm9kZS52YWx1ZSA9PT0gY3VycmVudFZhbHVlIHx8XG5cdFx0XHQnYm9vbGVhbicgPT09IHR5cGVvZiBjdXJyZW50VmFsdWVcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlucHV0Tm9kZS52YWx1ZSA9IGN1cnJlbnRWYWx1ZTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZS5maWx0ZXIoIHZhbCA9PiBudWxsICE9PSB2YWwgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVDaGVja2JveDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDaGVja2JveERhdGEgZnJvbSAnLi9DaGVja2JveERhdGEnO1xuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4ud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QsXG5cdENoZWNrYm94RGF0YSxcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9jaGVja2JveC1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgQ2hlY2tib3hEYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==