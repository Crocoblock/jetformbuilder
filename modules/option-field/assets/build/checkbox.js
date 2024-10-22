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
    if (value[0] && value[0].includes(',')) {
      value = value[0].split(',');
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
  return Boolean(this.addNewButton) || this.nodes.item(0)?.name?.includes?.('[]');
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
    return value;
  }
  const limit = Math.max(customNodes.length, copyValue.length);
  for (let i = limit - 1; i >= 0; i--) {
    let currentNode = customNodes[i];
    const currentValue = copyValue[i];

    // value has been removed
    if (null === currentValue) {
      currentNode.closest('.custom-option').remove();
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0TkE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNyRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9DaGVja2JveERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9wcm9jZXNzT3B0aW9uLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEN1c3RvbUNoZWNrYm94SW5wdXQgZnJvbSAnLi9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCc7XHJcbmltcG9ydCBzYW5pdGl6ZUNoZWNrYm94IGZyb20gJy4vZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3gnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIElucHV0RGF0YSxcclxuXHQgICAgICBSZWFjdGl2ZUhvb2ssXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3QgeyBnZXRQYXJzZWROYW1lIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlICkge1xyXG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcclxuXHJcblx0XHRpZiAoIHZhbHVlWzBdICYmIHZhbHVlWzBdLmluY2x1ZGVzKCcsJykgKSB7XHJcblx0XHRcdHZhbHVlID0gdmFsdWVbMF0uc3BsaXQoJywnKVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbIHZhbHVlIF0uZmlsdGVyKFxyXG5cdFx0Qm9vbGVhbixcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4gbm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIENoZWNrYm94RGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndyYXBwZXIgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS53cmFwcGVyID0gbnVsbDtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdHJldHVybiAoXHJcblx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSAmJlxyXG5cdFx0bm9kZS5xdWVyeVNlbGVjdG9yKCAnLmNoZWNrYm94ZXMtd3JhcCcgKVxyXG5cdCk7XHJcbn07XHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblxyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKSApO1xyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2tleWRvd24nLFxyXG5cdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXHJcblx0KTtcclxuXHJcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c291dCcsIGV2ZW50ID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0Ly8ganVzdCBzaW1wbGUgY2hlY2tib3hcclxuXHRcdFx0WyAuLi50aGlzLm5vZGVzIF0uaW5jbHVkZXMoIGV2ZW50Py5yZWxhdGVkVGFyZ2V0ICkgfHxcclxuXHRcdFx0Ly8gaW5wdXQgZnJvbSBjdXN0b20gY2hlY2tib3hcclxuXHRcdFx0ZXZlbnQ/LnJlbGF0ZWRUYXJnZXQ/LmNsb3Nlc3Q/LihcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAuY3VzdG9tLW9wdGlvbicsXHJcblx0XHRcdClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xyXG5cdH0gKTtcclxuXHJcblx0aWYgKCB0aGlzLmFkZE5ld0J1dHRvbiApIHtcclxuXHRcdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiB7XHJcblx0XHRcdGlmICggZXZlbnQ/LnRhcmdldCAmJlxyXG5cdFx0XHRcdCF0aGlzLmFkZE5ld0J1dHRvbi5pc0VxdWFsTm9kZSggZXZlbnQudGFyZ2V0IClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2lsZW5jZVNldCggWyAuLi50aGlzLnZhbHVlLmN1cnJlbnQsIHRydWUgXSApO1xyXG5cdFx0XHRjb25zdCBsYXN0Tm9kZSA9IHRoaXMuZ2V0Q3VzdG9tTm9kZXMoKS5hdCggLTEgKTtcclxuXHJcblx0XHRcdGNvbnN0IGlucHV0ID0gbGFzdE5vZGUuY2xvc2VzdChcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxyXG5cdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoICdzcGFuIGlucHV0LmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkJyApO1xyXG5cclxuXHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNBcnJheSgpICYmIHRoaXMuc2FuaXRpemUoIHNhbml0aXplVmFsdWUgKTtcclxuXHJcblx0LyoqXHJcblx0ICogVXNlIFNhbml0aXplciBpbnN0ZWFkIG9mIEJhc2VTaWduYWwgcHJvdG90eXBlLlxyXG5cdCAqIFdlIG5lZWQgaXQgYmVjYXVzZSBvZiBkZWxldGlvbiBcIm51bGxcIiB2YWx1ZXNcclxuXHQgKi9cclxuXHJcblx0dGhpcy5jYWxsYWJsZSA9IG51bGw7XHJcblx0dGhpcy5zYW5pdGl6ZSggdmFsdWUgPT4gc2FuaXRpemVDaGVja2JveCggdmFsdWUsIHRoaXMgKSApO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcclxuXHR0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0bm9kZS5qZmJTeW5jID0gdGhpcztcclxuXHQvKipcclxuXHQgKiBJdCBzaG91bGQgYmUgbGl2ZSBjb2xsZWN0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGl0ZW1zIG1heSBjaGFuZ2VcclxuXHQgKi9cclxuXHR0aGlzLm5vZGVzID0gbm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkIGNoZWNrYm94ZXMtZmllbGQnICk7XHJcblxyXG5cdHRoaXMucmF3TmFtZSAgID0gdGhpcy5ub2Rlc1sgMCBdLm5hbWU7XHJcblx0dGhpcy5uYW1lICAgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcclxuXHR0aGlzLmlucHV0VHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMud3JhcHBlciA9IG5vZGU7XHJcblxyXG5cdHRoaXMuYWRkTmV3QnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24gLmFkZC1jdXN0b20tb3B0aW9uJyxcclxuXHQpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IFtdO1xyXG5cclxuXHQvLyBpdGVyYXRlIGNoZWNrYm94ZXNcclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XHJcblx0XHR0aGlzLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UoIG5vZGUsIHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5pc0FycmF5KCkgPyB2YWx1ZSA6IChcclxuXHRcdHZhbHVlPy5bIDAgXSA/PyAnJ1xyXG5cdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XHJcbiAqIEBwYXJhbSB2YWx1ZSB7QXJyYXl9XHJcbiAqL1xyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UgPSBmdW5jdGlvbiAoIG5vZGUsIHZhbHVlICkge1xyXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gJiYgIW5vZGUuY2hlY2tlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGlmIGJhc2ljIG9wdGlvbiBqdXN0IHJldHVybiB2YWx1ZVxyXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCBub2RlLnZhbHVlICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dCA9IGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIG5vZGUgKTtcclxuXHJcblx0aWYgKCAhbm9kZS5jaGVja2VkICYmICFpbnB1dC52YWx1ZSApIHtcclxuXHRcdHZhbHVlLnB1c2goIG51bGwgKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIHJlY2VudGx5IGFkZGVkIG5ldyBvcHRpb25cclxuXHRpZiAoICFpbnB1dC52YWx1ZSAmJiBub2RlLmNoZWNrZWQgKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCB0cnVlICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoICFpbnB1dC52YWx1ZSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGRpc2FibGVkIG9yIGVuYWJsZSBpbnB1dCwgZGVwZW5kaW5nIG9uIGNoZWNrYm94IGNoZWNrIHN0YXRlXHJcblx0dmFsdWUucHVzaCggIW5vZGUuY2hlY2tlZCA/IGZhbHNlIDogaW5wdXQudmFsdWUgKTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuaXNBcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Qm9vbGVhbiggdGhpcy5hZGROZXdCdXR0b24gKSB8fFxyXG5cdFx0dGhpcy5ub2Rlcy5pdGVtKCAwICk/Lm5hbWU/LmluY2x1ZGVzPy4oICdbXScgKVxyXG5cdCk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmFkZEN1c3RvbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCByb3dXcmFwcGVyID0gdGhpcy5hZGROZXdCdXR0b24uY2xvc2VzdChcclxuXHRcdCcuY3VzdG9tLW9wdGlvbicsXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHRoaXMud3JhcHBlci5pbnNlcnRCZWZvcmUoXHJcblx0XHR0aGlzLmdldEN1c3RvbU9wdGlvbk5vZGUoKSxcclxuXHRcdHJvd1dyYXBwZXIsXHJcblx0KTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tT3B0aW9uTm9kZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoICF0aGlzLmFkZE5ld0J1dHRvbiApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGluaXRpYWwgPSB0aGlzLmFkZE5ld0J1dHRvbi5xdWVyeVNlbGVjdG9yKCAndGVtcGxhdGUnICk7XHJcblxyXG5cdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBpbml0aWFsLmlubmVySFRNTC50cmltKCk7XHJcblxyXG5cdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmdldEN1c3RvbU5vZGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBbIC4uLnRoaXMubm9kZXMgXS5maWx0ZXIoXHJcblx0XHRub2RlID0+IG5vZGUuZGF0YXNldC5jdXN0b20gJiYgbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcsXHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94RGF0YTsiLCJmdW5jdGlvbiBnZXRDdXN0b21DaGVja2JveElucHV0KCBub2RlICkge1xyXG5cdHJldHVybiBub2RlLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCAnaW5wdXQudGV4dC1maWVsZCcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dDsiLCIvKipcclxuICogQHBhcmFtIG5vZGVcclxuICogQHBhcmFtIGN1cnJlbnQge0FycmF5fFN0cmluZ31cclxuICogQHBhcmFtIGlucHV0IHtDaGVja2JveERhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzT3B0aW9uKCBub2RlLCBjdXJyZW50LCBpbnB1dCApIHtcclxuXHRub2RlLmNoZWNrZWQgPSBjdXJyZW50Py5pbmNsdWRlcyggbm9kZS52YWx1ZSApO1xyXG5cclxuXHRpZiAoICFub2RlLmNoZWNrZWQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpbnB1dC5jYWxjVmFsdWUgKz0gcGFyc2VGbG9hdChcclxuXHRcdG5vZGUuZGF0YXNldD8uY2FsY3VsYXRlID8/IG5vZGUudmFsdWUsXHJcblx0KTtcclxuXHJcblx0aWYgKCAhaW5wdXQuaXNBcnJheSgpICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5kZXggPSBjdXJyZW50LmluZGV4T2YoIG5vZGUudmFsdWUgKTtcclxuXHJcblx0Ly8gcmVtb3ZlIGZyb20gYXJyYXkgdmFsdWVzXHJcblx0Y3VycmVudC5zcGxpY2UoIGluZGV4LCAxICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3NPcHRpb247IiwiaW1wb3J0IGdldEN1c3RvbUNoZWNrYm94SW5wdXQgZnJvbSAnLi9nZXRDdXN0b21DaGVja2JveElucHV0JztcclxuaW1wb3J0IHByb2Nlc3NPcHRpb24gZnJvbSAnLi9wcm9jZXNzT3B0aW9uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBpc0VtcHR5LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHZhbHVlIHtBcnJheX1cclxuICogQHBhcmFtIGlucHV0IHtDaGVja2JveERhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBzYW5pdGl6ZUNoZWNrYm94KCB2YWx1ZSwgaW5wdXQgKSB7XHJcblx0aW5wdXQuY2FsY1ZhbHVlID0gMDtcclxuXHRjb25zdCBjb3B5VmFsdWUgPSBpbnB1dC5pc0FycmF5KCkgPyBbIC4uLnZhbHVlIF0gOiB2YWx1ZTtcclxuXHJcblx0Zm9yICggY29uc3Qgbm9kZSBvZiBpbnB1dC5ub2RlcyApIHtcclxuXHRcdChcclxuXHRcdFx0IW5vZGUuZGF0YXNldC5jdXN0b21cclxuXHRcdCkgJiYgcHJvY2Vzc09wdGlvbiggbm9kZSwgY29weVZhbHVlLCBpbnB1dCApO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhaW5wdXQuYWRkTmV3QnV0dG9uICkge1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY3VzdG9tTm9kZXMgPSBpbnB1dC5nZXRDdXN0b21Ob2RlcygpO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gaWYgY3VzdG9tIG9wdGlvbnMgZG9uJ3QgZXhpc3RcclxuXHQgKiBBbmQgaWYgdmFsdWVzIGxpc3QgaXMgZW1wdHkuXHJcblx0ICpcclxuXHQgKiBAc2VlIHByb2Nlc3NPcHRpb25cclxuXHQgKi9cclxuXHRpZiAoIGN1c3RvbU5vZGVzLmxlbmd0aCAmJiAhY29weVZhbHVlLmxlbmd0aCApIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGxpbWl0ID0gTWF0aC5tYXgoIGN1c3RvbU5vZGVzLmxlbmd0aCwgY29weVZhbHVlLmxlbmd0aCApO1xyXG5cclxuXHRmb3IgKCBsZXQgaSA9IGxpbWl0IC0gMTsgaSA+PSAwOyBpLS0gKSB7XHJcblx0XHRsZXQgY3VycmVudE5vZGUgICAgPSBjdXN0b21Ob2Rlc1sgaSBdO1xyXG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gY29weVZhbHVlWyBpIF07XHJcblxyXG5cdFx0Ly8gdmFsdWUgaGFzIGJlZW4gcmVtb3ZlZFxyXG5cdFx0aWYgKCBudWxsID09PSBjdXJyZW50VmFsdWUgKSB7XHJcblx0XHRcdGN1cnJlbnROb2RlLmNsb3Nlc3QoICcuY3VzdG9tLW9wdGlvbicgKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFkZCByb3cgZWxlbWVudCBpbiBkb21cclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBjdXJyZW50Tm9kZSApIHtcclxuXHRcdFx0Ly8gaXQgY2FuJ3QgYmUgZGlzYWJsZWQsIHNvbWV0aGluZyB3ZW50IHdyb25nXHJcblx0XHRcdGlmICggZmFsc2UgPT09IGN1cnJlbnRWYWx1ZSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbnB1dC5hZGRDdXN0b21PcHRpb24oKTtcclxuXHJcblx0XHRcdGN1cnJlbnROb2RlID0gaW5wdXQubm9kZXNbIGlucHV0Lm5vZGVzLmxlbmd0aCAtIDEgXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dE5vZGUgICAgPSBnZXRDdXN0b21DaGVja2JveElucHV0KCBjdXJyZW50Tm9kZSApO1xyXG5cdFx0aW5wdXROb2RlLmRpc2FibGVkID0gZmFsc2UgPT09IGN1cnJlbnRWYWx1ZTtcclxuXHJcblx0XHQvLyBhZGQgMSBpZiBjdXN0b20gb3B0aW9uIG5vdCBkZXNlbGVjdGVkLCBub3Qgd2l0aCBlbXB0eSB2YWx1ZVxyXG5cdFx0Ly8gYW5kIGhhc24ndCBqdXN0IGFkZGVkXHJcblx0XHRpZiAoICFpbnB1dE5vZGUuZGlzYWJsZWQgJiZcclxuXHRcdFx0IWlzRW1wdHkoIGN1cnJlbnRWYWx1ZSApICYmXHJcblx0XHRcdHRydWUgIT09IGN1cnJlbnRWYWx1ZVxyXG5cdFx0KSB7XHJcblx0XHRcdGlucHV0LmNhbGNWYWx1ZSArPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggaW5wdXROb2RlLnZhbHVlID09PSBjdXJyZW50VmFsdWUgfHxcclxuXHRcdFx0J2Jvb2xlYW4nID09PSB0eXBlb2YgY3VycmVudFZhbHVlXHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXROb2RlLnZhbHVlID0gY3VycmVudFZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbHVlLmZpbHRlciggdmFsID0+IG51bGwgIT09IHZhbCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdGl6ZUNoZWNrYm94OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENoZWNrYm94RGF0YSBmcm9tICcuL0NoZWNrYm94RGF0YSc7XHJcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XHJcblx0Li4ud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QsXHJcblx0Q2hlY2tib3hEYXRhLFxyXG59O1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jaGVja2JveC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIENoZWNrYm94RGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==