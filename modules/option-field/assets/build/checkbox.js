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
CheckboxData.prototype.isResetCalcValue = false;
CheckboxData.prototype.isSupported = function (node) {
  return node.classList.contains('checkradio-wrap') && node.querySelector('.checkboxes-wrap');
};
CheckboxData.prototype.addListeners = function () {
  this.enterKey = new ReactiveHook();
  this.wrapper.addEventListener('change', () => {
    this.value.current = this.getActiveValue();
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNoTkE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNyRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9DaGVja2JveERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9wcm9jZXNzT3B0aW9uLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEN1c3RvbUNoZWNrYm94SW5wdXQgZnJvbSAnLi9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCc7XHJcbmltcG9ydCBzYW5pdGl6ZUNoZWNrYm94IGZyb20gJy4vZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3gnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIElucHV0RGF0YSxcclxuXHQgICAgICBSZWFjdGl2ZUhvb2ssXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3QgeyBnZXRQYXJzZWROYW1lIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlICkge1xyXG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBbIHZhbHVlIF0uZmlsdGVyKFxyXG5cdFx0Qm9vbGVhbixcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4gbm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIENoZWNrYm94RGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndyYXBwZXIgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS53cmFwcGVyICAgICAgICAgID0gbnVsbDtcclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc1Jlc2V0Q2FsY1ZhbHVlID0gZmFsc2U7XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0bm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdjaGVja3JhZGlvLXdyYXAnICkgJiZcclxuXHRcdG5vZGUucXVlcnlTZWxlY3RvciggJy5jaGVja2JveGVzLXdyYXAnIClcclxuXHQpO1xyXG59O1xyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xyXG5cclxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHtcclxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcclxuXHR9ICk7XHJcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQna2V5ZG93bicsXHJcblx0XHR0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSxcclxuXHQpO1xyXG5cclxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3Vzb3V0JywgZXZlbnQgPT4ge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHQvLyBqdXN0IHNpbXBsZSBjaGVja2JveFxyXG5cdFx0XHRbIC4uLnRoaXMubm9kZXMgXS5pbmNsdWRlcyggZXZlbnQ/LnJlbGF0ZWRUYXJnZXQgKSB8fFxyXG5cdFx0XHQvLyBpbnB1dCBmcm9tIGN1c3RvbSBjaGVja2JveFxyXG5cdFx0XHRldmVudD8ucmVsYXRlZFRhcmdldD8uY2xvc2VzdD8uKFxyXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcC5jdXN0b20tb3B0aW9uJyxcclxuXHRcdFx0KVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVwb3J0T25CbHVyKCk7XHJcblx0fSApO1xyXG5cclxuXHRpZiAoIHRoaXMuYWRkTmV3QnV0dG9uICkge1xyXG5cdFx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKCBldmVudD8udGFyZ2V0ICYmXHJcblx0XHRcdFx0IXRoaXMuYWRkTmV3QnV0dG9uLmlzRXF1YWxOb2RlKCBldmVudC50YXJnZXQgKVxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zaWxlbmNlU2V0KCBbIC4uLnRoaXMudmFsdWUuY3VycmVudCwgdHJ1ZSBdICk7XHJcblx0XHRcdGNvbnN0IGxhc3ROb2RlID0gdGhpcy5nZXRDdXN0b21Ob2RlcygpLmF0KCAtMSApO1xyXG5cclxuXHRcdFx0Y29uc3QgaW5wdXQgPSBsYXN0Tm9kZS5jbG9zZXN0KFxyXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXHJcblx0XHRcdCkucXVlcnlTZWxlY3RvciggJ3NwYW4gaW5wdXQuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQnICk7XHJcblxyXG5cdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pc0FycmF5KCkgJiYgdGhpcy5zYW5pdGl6ZSggc2FuaXRpemVWYWx1ZSApO1xyXG5cclxuXHQvKipcclxuXHQgKiBVc2UgU2FuaXRpemVyIGluc3RlYWQgb2YgQmFzZVNpZ25hbCBwcm90b3R5cGUuXHJcblx0ICogV2UgbmVlZCBpdCBiZWNhdXNlIG9mIGRlbGV0aW9uIFwibnVsbFwiIHZhbHVlc1xyXG5cdCAqL1xyXG5cclxuXHR0aGlzLmNhbGxhYmxlID0gbnVsbDtcclxuXHR0aGlzLnNhbml0aXplKCB2YWx1ZSA9PiBzYW5pdGl6ZUNoZWNrYm94KCB2YWx1ZSwgdGhpcyApICk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcclxuXHR0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0bm9kZS5qZmJTeW5jID0gdGhpcztcclxuXHQvKipcclxuXHQgKiBJdCBzaG91bGQgYmUgbGl2ZSBjb2xsZWN0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGl0ZW1zIG1heSBjaGFuZ2VcclxuXHQgKi9cclxuXHR0aGlzLm5vZGVzID0gbm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkIGNoZWNrYm94ZXMtZmllbGQnICk7XHJcblxyXG5cdHRoaXMucmF3TmFtZSAgID0gdGhpcy5ub2Rlc1sgMCBdLm5hbWU7XHJcblx0dGhpcy5uYW1lICAgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcclxuXHR0aGlzLmlucHV0VHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMud3JhcHBlciA9IG5vZGU7XHJcblxyXG5cdHRoaXMuYWRkTmV3QnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24gLmFkZC1jdXN0b20tb3B0aW9uJyxcclxuXHQpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IFtdO1xyXG5cclxuXHQvLyBpdGVyYXRlIGNoZWNrYm94ZXNcclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XHJcblx0XHR0aGlzLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UoIG5vZGUsIHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5pc0FycmF5KCkgPyB2YWx1ZSA6IChcclxuXHRcdHZhbHVlPy5bIDAgXSA/PyAnJ1xyXG5cdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XHJcbiAqIEBwYXJhbSB2YWx1ZSB7QXJyYXl9XHJcbiAqL1xyXG5DaGVja2JveERhdGEucHJvdG90eXBlLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UgPSBmdW5jdGlvbiAoIG5vZGUsIHZhbHVlICkge1xyXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gJiYgIW5vZGUuY2hlY2tlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGlmIGJhc2ljIG9wdGlvbiBqdXN0IHJldHVybiB2YWx1ZVxyXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCBub2RlLnZhbHVlICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dCA9IGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIG5vZGUgKTtcclxuXHJcblx0aWYgKCAhbm9kZS5jaGVja2VkICYmICFpbnB1dC52YWx1ZSApIHtcclxuXHRcdHZhbHVlLnB1c2goIG51bGwgKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIHJlY2VudGx5IGFkZGVkIG5ldyBvcHRpb25cclxuXHRpZiAoICFpbnB1dC52YWx1ZSAmJiBub2RlLmNoZWNrZWQgKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCB0cnVlICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoICFpbnB1dC52YWx1ZSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIGRpc2FibGVkIG9yIGVuYWJsZSBpbnB1dCwgZGVwZW5kaW5nIG9uIGNoZWNrYm94IGNoZWNrIHN0YXRlXHJcblx0dmFsdWUucHVzaCggIW5vZGUuY2hlY2tlZCA/IGZhbHNlIDogaW5wdXQudmFsdWUgKTtcclxufVxyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHRCb29sZWFuKCB0aGlzLmFkZE5ld0J1dHRvbiApIHx8XHJcblx0XHR0aGlzLm5vZGVzLml0ZW0oIDAgKT8ubmFtZT8uaW5jbHVkZXM/LiggJ1tdJyApXHJcblx0KTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuYWRkQ3VzdG9tT3B0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHJvd1dyYXBwZXIgPSB0aGlzLmFkZE5ld0J1dHRvbi5jbG9zZXN0KFxyXG5cdFx0Jy5jdXN0b20tb3B0aW9uJyxcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gdGhpcy53cmFwcGVyLmluc2VydEJlZm9yZShcclxuXHRcdHRoaXMuZ2V0Q3VzdG9tT3B0aW9uTm9kZSgpLFxyXG5cdFx0cm93V3JhcHBlcixcclxuXHQpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRDdXN0b21PcHRpb25Ob2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdGlmICggIXRoaXMuYWRkTmV3QnV0dG9uICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5pdGlhbCA9IHRoaXMuYWRkTmV3QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoICd0ZW1wbGF0ZScgKTtcclxuXHJcblx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IGluaXRpYWwuaW5uZXJIVE1MLnRyaW0oKTtcclxuXHJcblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIFsgLi4udGhpcy5ub2RlcyBdLmZpbHRlcihcclxuXHRcdG5vZGUgPT4gbm9kZS5kYXRhc2V0LmN1c3RvbSAmJiBub2RlLm5leHRFbGVtZW50U2libGluZyxcclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hEYXRhOyIsImZ1bmN0aW9uIGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIG5vZGUgKSB7XHJcblx0cmV0dXJuIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dC50ZXh0LWZpZWxkJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDdXN0b21DaGVja2JveElucHV0OyIsIi8qKlxyXG4gKiBAcGFyYW0gbm9kZVxyXG4gKiBAcGFyYW0gY3VycmVudCB7QXJyYXl8U3RyaW5nfVxyXG4gKiBAcGFyYW0gaW5wdXQge0NoZWNrYm94RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NPcHRpb24oIG5vZGUsIGN1cnJlbnQsIGlucHV0ICkge1xyXG5cdG5vZGUuY2hlY2tlZCA9IGN1cnJlbnQ/LmluY2x1ZGVzKCBub2RlLnZhbHVlICk7XHJcblxyXG5cdGlmICggIW5vZGUuY2hlY2tlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxyXG5cdFx0bm9kZS5kYXRhc2V0Py5jYWxjdWxhdGUgPz8gbm9kZS52YWx1ZSxcclxuXHQpO1xyXG5cclxuXHRpZiAoICFpbnB1dC5pc0FycmF5KCkgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbmRleCA9IGN1cnJlbnQuaW5kZXhPZiggbm9kZS52YWx1ZSApO1xyXG5cclxuXHQvLyByZW1vdmUgZnJvbSBhcnJheSB2YWx1ZXNcclxuXHRjdXJyZW50LnNwbGljZSggaW5kZXgsIDEgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc09wdGlvbjsiLCJpbXBvcnQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCBmcm9tICcuL2dldEN1c3RvbUNoZWNrYm94SW5wdXQnO1xyXG5pbXBvcnQgcHJvY2Vzc09wdGlvbiBmcm9tICcuL3Byb2Nlc3NPcHRpb24nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGlzRW1wdHksXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxyXG4gKiBAcGFyYW0gaW5wdXQge0NoZWNrYm94RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIHNhbml0aXplQ2hlY2tib3goIHZhbHVlLCBpbnB1dCApIHtcclxuXHRpbnB1dC5jYWxjVmFsdWUgPSAwO1xyXG5cdGNvbnN0IGNvcHlWYWx1ZSA9IGlucHV0LmlzQXJyYXkoKSA/IFsgLi4udmFsdWUgXSA6IHZhbHVlO1xyXG5cclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIGlucHV0Lm5vZGVzICkge1xyXG5cdFx0KFxyXG5cdFx0XHQhbm9kZS5kYXRhc2V0LmN1c3RvbVxyXG5cdFx0KSAmJiBwcm9jZXNzT3B0aW9uKCBub2RlLCBjb3B5VmFsdWUsIGlucHV0ICk7XHJcblx0fVxyXG5cclxuXHRpZiAoICFpbnB1dC5hZGROZXdCdXR0b24gKSB7XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjdXN0b21Ob2RlcyA9IGlucHV0LmdldEN1c3RvbU5vZGVzKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBpZiBjdXN0b20gb3B0aW9ucyBkb24ndCBleGlzdFxyXG5cdCAqIEFuZCBpZiB2YWx1ZXMgbGlzdCBpcyBlbXB0eS5cclxuXHQgKlxyXG5cdCAqIEBzZWUgcHJvY2Vzc09wdGlvblxyXG5cdCAqL1xyXG5cdGlmICggY3VzdG9tTm9kZXMubGVuZ3RoICYmICFjb3B5VmFsdWUubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbGltaXQgPSBNYXRoLm1heCggY3VzdG9tTm9kZXMubGVuZ3RoLCBjb3B5VmFsdWUubGVuZ3RoICk7XHJcblxyXG5cdGZvciAoIGxldCBpID0gbGltaXQgLSAxOyBpID49IDA7IGktLSApIHtcclxuXHRcdGxldCBjdXJyZW50Tm9kZSAgICA9IGN1c3RvbU5vZGVzWyBpIF07XHJcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBjb3B5VmFsdWVbIGkgXTtcclxuXHJcblx0XHQvLyB2YWx1ZSBoYXMgYmVlbiByZW1vdmVkXHJcblx0XHRpZiAoIG51bGwgPT09IGN1cnJlbnRWYWx1ZSApIHtcclxuXHRcdFx0Y3VycmVudE5vZGUuY2xvc2VzdCggJy5jdXN0b20tb3B0aW9uJyApLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWRkIHJvdyBlbGVtZW50IGluIGRvbVxyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGN1cnJlbnROb2RlICkge1xyXG5cdFx0XHQvLyBpdCBjYW4ndCBiZSBkaXNhYmxlZCwgc29tZXRoaW5nIHdlbnQgd3JvbmdcclxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VycmVudFZhbHVlICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlucHV0LmFkZEN1c3RvbU9wdGlvbigpO1xyXG5cclxuXHRcdFx0Y3VycmVudE5vZGUgPSBpbnB1dC5ub2Rlc1sgaW5wdXQubm9kZXMubGVuZ3RoIC0gMSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlucHV0Tm9kZSAgICA9IGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIGN1cnJlbnROb2RlICk7XHJcblx0XHRpbnB1dE5vZGUuZGlzYWJsZWQgPSBmYWxzZSA9PT0gY3VycmVudFZhbHVlO1xyXG5cclxuXHRcdC8vIGFkZCAxIGlmIGN1c3RvbSBvcHRpb24gbm90IGRlc2VsZWN0ZWQsIG5vdCB3aXRoIGVtcHR5IHZhbHVlXHJcblx0XHQvLyBhbmQgaGFzbid0IGp1c3QgYWRkZWRcclxuXHRcdGlmICggIWlucHV0Tm9kZS5kaXNhYmxlZCAmJlxyXG5cdFx0XHQhaXNFbXB0eSggY3VycmVudFZhbHVlICkgJiZcclxuXHRcdFx0dHJ1ZSAhPT0gY3VycmVudFZhbHVlXHJcblx0XHQpIHtcclxuXHRcdFx0aW5wdXQuY2FsY1ZhbHVlICs9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBpbnB1dE5vZGUudmFsdWUgPT09IGN1cnJlbnRWYWx1ZSB8fFxyXG5cdFx0XHQnYm9vbGVhbicgPT09IHR5cGVvZiBjdXJyZW50VmFsdWVcclxuXHRcdCkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dE5vZGUudmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdmFsdWUuZmlsdGVyKCB2YWwgPT4gbnVsbCAhPT0gdmFsICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplQ2hlY2tib3g7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2hlY2tib3hEYXRhIGZyb20gJy4vQ2hlY2tib3hEYXRhJztcclxuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFkZEZpbHRlcixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCxcclxuXHRDaGVja2JveERhdGEsXHJcbn07XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NoZWNrYm94LWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgQ2hlY2tib3hEYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9