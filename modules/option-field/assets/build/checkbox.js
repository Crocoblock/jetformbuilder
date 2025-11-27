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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuUEE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNyR0E7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9DaGVja2JveERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9wcm9jZXNzT3B0aW9uLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEN1c3RvbUNoZWNrYm94SW5wdXQgZnJvbSAnLi9mdW5jdGlvbnMvZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCc7XHJcbmltcG9ydCBzYW5pdGl6ZUNoZWNrYm94IGZyb20gJy4vZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3gnO1xyXG5cclxuY29uc3Qge1xyXG5cdElucHV0RGF0YSxcclxuXHRSZWFjdGl2ZUhvb2ssXHJcbn0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3QgeyBnZXRQYXJzZWROYW1lIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlLCBjdHggKSB7XHJcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9qZXRmb3JtYnVpbGRlci9pc3N1ZXMvNTY5XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGtlZXBDb21tYXMgPSAhIWN0eD8ua2VlcENvbW1hcztcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIGNvbnZlcnQgc3RyaW5nIHRvIGFycmF5IGZvciBzZXR0aW5nIGR5bmFtaWMgbXVsdGkgdmFsdWVcclxuXHRcdCAqXHJcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy84NTA5XHJcblx0XHQgKi9cclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCFrZWVwQ29tbWFzICYmXHJcblx0XHRcdHZhbHVlLmxlbmd0aCA9PT0gMSAmJlxyXG5cdFx0XHR2YWx1ZVswXSAmJlxyXG5cdFx0XHR0cnVlICE9IHZhbHVlWzBdICYmXHJcblx0XHRcdFN0cmluZyggdmFsdWVbMF0gKS5pbmNsdWRlcyggJywnIClcclxuXHRcdCkge1xyXG5cdFx0XHR2YWx1ZSA9IFN0cmluZyggdmFsdWVbMF0gKS5zcGxpdCgnLCcpO1xyXG5cclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5tYXAoIGl0ZW0gPT4ge1xyXG5cdFx0XHRcdGlmICggJ3RydWUnID09PSBpdGVtICkgcmV0dXJuICcnO1xyXG5cdFx0XHRcdGlmICggJ2ZhbHNlJyA9PT0gaXRlbSApIHJldHVybiBudWxsO1xyXG5cdFx0XHRcdHJldHVybiBpdGVtO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gWyB2YWx1ZSBdLmZpbHRlciggQm9vbGVhbiApO1xyXG59XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4gbm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIENoZWNrYm94RGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndyYXBwZXIgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS53cmFwcGVyID0gbnVsbDtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdHJldHVybiAoXHJcblx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSAmJlxyXG5cdFx0bm9kZS5xdWVyeVNlbGVjdG9yKCAnLmNoZWNrYm94ZXMtd3JhcCcgKVxyXG5cdCk7XHJcbn07XHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblxyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgdGhpcy5vbkNoYW5nZVZhbHVlLmJpbmQoIHRoaXMgKSApO1xyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2tleWRvd24nLFxyXG5cdFx0dGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICksXHJcblx0KTtcclxuXHJcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdmb2N1c291dCcsIGV2ZW50ID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0Ly8ganVzdCBzaW1wbGUgY2hlY2tib3hcclxuXHRcdFx0WyAuLi50aGlzLm5vZGVzIF0uaW5jbHVkZXMoIGV2ZW50Py5yZWxhdGVkVGFyZ2V0ICkgfHxcclxuXHRcdFx0Ly8gaW5wdXQgZnJvbSBjdXN0b20gY2hlY2tib3hcclxuXHRcdFx0ZXZlbnQ/LnJlbGF0ZWRUYXJnZXQ/LmNsb3Nlc3Q/LihcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAuY3VzdG9tLW9wdGlvbicsXHJcblx0XHRcdClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xyXG5cdH0gKTtcclxuXHJcblx0aWYgKCB0aGlzLmFkZE5ld0J1dHRvbiApIHtcclxuXHRcdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiB7XHJcblx0XHRcdGlmICggZXZlbnQ/LnRhcmdldCAmJlxyXG5cdFx0XHRcdCF0aGlzLmFkZE5ld0J1dHRvbi5pc0VxdWFsTm9kZSggZXZlbnQudGFyZ2V0IClcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2lsZW5jZVNldCggWyAuLi50aGlzLnZhbHVlLmN1cnJlbnQsIHRydWUgXSApO1xyXG5cdFx0XHRjb25zdCBsYXN0Tm9kZSA9IHRoaXMuZ2V0Q3VzdG9tTm9kZXMoKS5hdCggLTEgKTtcclxuXHJcblx0XHRcdGNvbnN0IGlucHV0ID0gbGFzdE5vZGUuY2xvc2VzdChcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAnLFxyXG5cdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoICdzcGFuIGlucHV0LmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkJyApO1xyXG5cclxuXHRcdFx0aW5wdXQuZm9jdXMoKTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdGlmICggdGhpcy5pc0FycmF5KCkgKSB7XHJcblx0XHR0aGlzLnNhbml0aXplKCB2YWx1ZSA9PiBzYW5pdGl6ZVZhbHVlKCB2YWx1ZSwgdGhpcyApICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVc2UgU2FuaXRpemVyIGluc3RlYWQgb2YgQmFzZVNpZ25hbCBwcm90b3R5cGUuXHJcblx0ICogV2UgbmVlZCBpdCBiZWNhdXNlIG9mIGRlbGV0aW9uIFwibnVsbFwiIHZhbHVlc1xyXG5cdCAqL1xyXG5cclxuXHR0aGlzLmNhbGxhYmxlID0gbnVsbDtcclxuXHR0aGlzLnNhbml0aXplKCB2YWx1ZSA9PiBzYW5pdGl6ZUNoZWNrYm94KCB2YWx1ZSwgdGhpcyApICk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZ2V0QWN0aXZlVmFsdWUoKTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xyXG5cdHRoaXMudmFsdWUuYXBwbHlTYW5pdGl6ZXJzKCB0aGlzLnZhbHVlLmN1cnJlbnQgKTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xyXG5cdC8qKlxyXG5cdCAqIEl0IHNob3VsZCBiZSBsaXZlIGNvbGxlY3Rpb24gZm9yIHRoZSBjYXNlIHdoZW4gaXRlbXMgbWF5IGNoYW5nZVxyXG5cdCAqL1xyXG5cdHRoaXMubm9kZXMgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQgY2hlY2tib3hlcy1maWVsZCcgKTtcclxuXHJcblx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5vZGVzWyAwIF0ubmFtZTtcclxuXHR0aGlzLm5hbWUgICAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xyXG5cdHRoaXMuaW5wdXRUeXBlID0gJ2NoZWNrYm94JztcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy53cmFwcGVyID0gbm9kZTtcclxuXHJcblx0dGhpcy5hZGROZXdCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXdyYXAuY3VzdG9tLW9wdGlvbiAuYWRkLWN1c3RvbS1vcHRpb24nLFxyXG5cdCk7XHJcbn07XHJcblxyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IFtdO1xyXG5cclxuXHR0aGlzLmtlZXBDb21tYXMgPSBmYWxzZTtcclxuXHJcblx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzICkge1xyXG5cclxuXHRcdGlmICggbm9kZS5jaGVja2VkICYmIG5vZGUuZGF0YXNldC5rZWVwQ29tbWFzID09PSAnMScgKSB7XHJcblx0XHRcdHRoaXMua2VlcENvbW1hcyA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlKCBub2RlLCB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXMuaXNBcnJheSgpID8gdmFsdWUgOiAoXHJcblx0XHR2YWx1ZT8uWyAwIF0gPz8gJydcclxuXHQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxyXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxyXG4gKi9cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlID0gZnVuY3Rpb24gKCBub2RlLCB2YWx1ZSApIHtcclxuXHRpZiAoICFub2RlLmRhdGFzZXQuY3VzdG9tICYmICFub2RlLmNoZWNrZWQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBpZiBiYXNpYyBvcHRpb24ganVzdCByZXR1cm4gdmFsdWVcclxuXHRpZiAoICFub2RlLmRhdGFzZXQuY3VzdG9tICkge1xyXG5cdFx0dmFsdWUucHVzaCggbm9kZS52YWx1ZSApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5wdXQgPSBnZXRDdXN0b21DaGVja2JveElucHV0KCBub2RlICk7XHJcblxyXG5cdGlmICggIW5vZGUuY2hlY2tlZCAmJiAhaW5wdXQudmFsdWUgKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCBudWxsICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyByZWNlbnRseSBhZGRlZCBuZXcgb3B0aW9uXHJcblx0aWYgKCAhaW5wdXQudmFsdWUgJiYgbm9kZS5jaGVja2VkICkge1xyXG5cdFx0dmFsdWUucHVzaCggdHJ1ZSApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhaW5wdXQudmFsdWUgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBkaXNhYmxlZCBvciBlbmFibGUgaW5wdXQsIGRlcGVuZGluZyBvbiBjaGVja2JveCBjaGVjayBzdGF0ZVxyXG5cdHZhbHVlLnB1c2goICFub2RlLmNoZWNrZWQgPyBmYWxzZSA6IGlucHV0LnZhbHVlICk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmlzQXJyYXkgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdEJvb2xlYW4oIHRoaXMuYWRkTmV3QnV0dG9uICkgfHxcclxuXHRcdHRoaXMubm9kZXMuaXRlbSAmJiB0aGlzLm5vZGVzLml0ZW0oIDAgKT8ubmFtZT8uaW5jbHVkZXM/LiggJ1tdJyApXHJcblx0KTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuYWRkQ3VzdG9tT3B0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHJvd1dyYXBwZXIgPSB0aGlzLmFkZE5ld0J1dHRvbi5jbG9zZXN0KFxyXG5cdFx0Jy5jdXN0b20tb3B0aW9uJyxcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gdGhpcy53cmFwcGVyLmluc2VydEJlZm9yZShcclxuXHRcdHRoaXMuZ2V0Q3VzdG9tT3B0aW9uTm9kZSgpLFxyXG5cdFx0cm93V3JhcHBlcixcclxuXHQpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRDdXN0b21PcHRpb25Ob2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdGlmICggIXRoaXMuYWRkTmV3QnV0dG9uICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5pdGlhbCA9IHRoaXMuYWRkTmV3QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoICd0ZW1wbGF0ZScgKTtcclxuXHJcblx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xyXG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IGluaXRpYWwuaW5uZXJIVE1MLnRyaW0oKTtcclxuXHJcblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tTm9kZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIFsgLi4udGhpcy5ub2RlcyBdLmZpbHRlcihcclxuXHRcdG5vZGUgPT4gbm9kZS5kYXRhc2V0LmN1c3RvbSAmJiBub2RlLm5leHRFbGVtZW50U2libGluZyxcclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hEYXRhOyIsImZ1bmN0aW9uIGdldEN1c3RvbUNoZWNrYm94SW5wdXQoIG5vZGUgKSB7XHJcblx0cmV0dXJuIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dC50ZXh0LWZpZWxkJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDdXN0b21DaGVja2JveElucHV0OyIsIi8qKlxyXG4gKiBAcGFyYW0gbm9kZVxyXG4gKiBAcGFyYW0gY3VycmVudCB7QXJyYXl8U3RyaW5nfVxyXG4gKiBAcGFyYW0gaW5wdXQge0NoZWNrYm94RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NPcHRpb24oIG5vZGUsIGN1cnJlbnQsIGlucHV0ICkge1xyXG5cdG5vZGUuY2hlY2tlZCA9IGN1cnJlbnQ/LmluY2x1ZGVzKCBub2RlLnZhbHVlICk7XHJcblxyXG5cdGlmICggIW5vZGUuY2hlY2tlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxyXG5cdFx0bm9kZS5kYXRhc2V0Py5jYWxjdWxhdGUgPz8gbm9kZS52YWx1ZSxcclxuXHQpO1xyXG5cclxuXHRpZiAoICFpbnB1dC5pc0FycmF5KCkgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbmRleCA9IGN1cnJlbnQuaW5kZXhPZiggbm9kZS52YWx1ZSApO1xyXG5cclxuXHQvLyByZW1vdmUgZnJvbSBhcnJheSB2YWx1ZXNcclxuXHRjdXJyZW50LnNwbGljZSggaW5kZXgsIDEgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc09wdGlvbjsiLCJpbXBvcnQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCBmcm9tICcuL2dldEN1c3RvbUNoZWNrYm94SW5wdXQnO1xyXG5pbXBvcnQgcHJvY2Vzc09wdGlvbiBmcm9tICcuL3Byb2Nlc3NPcHRpb24nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGlzRW1wdHksXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxyXG4gKiBAcGFyYW0gaW5wdXQge0NoZWNrYm94RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIHNhbml0aXplQ2hlY2tib3goIHZhbHVlLCBpbnB1dCApIHtcclxuXHRpbnB1dC5jYWxjVmFsdWUgPSAwO1xyXG5cdGNvbnN0IGNvcHlWYWx1ZSA9IGlucHV0LmlzQXJyYXkoKSA/IFsgLi4udmFsdWUgXSA6IHZhbHVlO1xyXG5cclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIGlucHV0Lm5vZGVzICkge1xyXG5cdFx0KFxyXG5cdFx0XHQhbm9kZS5kYXRhc2V0LmN1c3RvbVxyXG5cdFx0KSAmJiBwcm9jZXNzT3B0aW9uKCBub2RlLCBjb3B5VmFsdWUsIGlucHV0ICk7XHJcblx0fVxyXG5cclxuXHRpZiAoICFpbnB1dC5hZGROZXdCdXR0b24gKSB7XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjdXN0b21Ob2RlcyA9IGlucHV0LmdldEN1c3RvbU5vZGVzKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBpZiBjdXN0b20gb3B0aW9ucyBkb24ndCBleGlzdFxyXG5cdCAqIEFuZCBpZiB2YWx1ZXMgbGlzdCBpcyBlbXB0eS5cclxuXHQgKlxyXG5cdCAqIEBzZWUgcHJvY2Vzc09wdGlvblxyXG5cdCAqL1xyXG5cdGlmICggY3VzdG9tTm9kZXMubGVuZ3RoICYmICFjb3B5VmFsdWUubGVuZ3RoICkge1xyXG5cdFx0Y29uc3QgbGltaXQgPSBNYXRoLm1heCggY3VzdG9tTm9kZXMubGVuZ3RoLCBjb3B5VmFsdWUubGVuZ3RoICk7XHJcblxyXG5cdFx0Zm9yICggbGV0IGkgPSBsaW1pdCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG5cdFx0XHRpZiAoIGN1c3RvbU5vZGVzWyBpIF0gKSB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnROb2RlICAgID0gY3VzdG9tTm9kZXNbIGkgXTtcclxuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBjb3B5VmFsdWVbIGkgXTtcclxuXHJcblx0XHRcdFx0Ly8gdmFsdWUgaGFzIGJlZW4gcmVtb3ZlZFxyXG5cdFx0XHRcdGlmICggdW5kZWZpbmVkID09PSBjdXJyZW50VmFsdWUgKSB7XHJcblx0XHRcdFx0XHRjdXJyZW50Tm9kZS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICkucmVtb3ZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbGltaXQgPSBNYXRoLm1heCggY3VzdG9tTm9kZXMubGVuZ3RoLCBjb3B5VmFsdWUubGVuZ3RoICk7XHJcblxyXG5cdGZvciAoIGxldCBpID0gbGltaXQgLSAxOyBpID49IDA7IGktLSApIHtcclxuXHRcdGxldCBjdXJyZW50Tm9kZSAgICA9IGN1c3RvbU5vZGVzWyBpIF07XHJcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBjb3B5VmFsdWVbIGkgXTtcclxuXHJcblx0XHQvLyB2YWx1ZSBoYXMgYmVlbiByZW1vdmVkXHJcblx0XHRpZiAoIG51bGwgPT09IGN1cnJlbnRWYWx1ZSB8fCB1bmRlZmluZWQgPT09IGN1cnJlbnRWYWx1ZSApIHtcclxuXHRcdFx0aWYgKCBjdXJyZW50Tm9kZSApIHtcclxuXHRcdFx0XHRjdXJyZW50Tm9kZS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICkucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFkZCByb3cgZWxlbWVudCBpbiBkb21cclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBjdXJyZW50Tm9kZSApIHtcclxuXHRcdFx0Ly8gaXQgY2FuJ3QgYmUgZGlzYWJsZWQsIHNvbWV0aGluZyB3ZW50IHdyb25nXHJcblx0XHRcdGlmICggZmFsc2UgPT09IGN1cnJlbnRWYWx1ZSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbnB1dC5hZGRDdXN0b21PcHRpb24oKTtcclxuXHJcblx0XHRcdGN1cnJlbnROb2RlID0gaW5wdXQubm9kZXNbIGlucHV0Lm5vZGVzLmxlbmd0aCAtIDEgXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dE5vZGUgICAgPSBnZXRDdXN0b21DaGVja2JveElucHV0KCBjdXJyZW50Tm9kZSApO1xyXG5cdFx0aW5wdXROb2RlLmRpc2FibGVkID0gZmFsc2UgPT09IGN1cnJlbnRWYWx1ZTtcclxuXHJcblx0XHQvLyBhZGQgMSBpZiBjdXN0b20gb3B0aW9uIG5vdCBkZXNlbGVjdGVkLCBub3Qgd2l0aCBlbXB0eSB2YWx1ZVxyXG5cdFx0Ly8gYW5kIGhhc24ndCBqdXN0IGFkZGVkXHJcblx0XHRpZiAoICFpbnB1dE5vZGUuZGlzYWJsZWQgJiZcclxuXHRcdFx0IWlzRW1wdHkoIGN1cnJlbnRWYWx1ZSApICYmXHJcblx0XHRcdHRydWUgIT09IGN1cnJlbnRWYWx1ZVxyXG5cdFx0KSB7XHJcblx0XHRcdGlucHV0LmNhbGNWYWx1ZSArPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggaW5wdXROb2RlLnZhbHVlID09PSBjdXJyZW50VmFsdWUgfHxcclxuXHRcdFx0J2Jvb2xlYW4nID09PSB0eXBlb2YgY3VycmVudFZhbHVlXHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXROb2RlLnZhbHVlID0gY3VycmVudFZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbHVlLmZpbHRlciggdmFsID0+IG51bGwgIT09IHZhbCApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdGl6ZUNoZWNrYm94OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENoZWNrYm94RGF0YSBmcm9tICcuL0NoZWNrYm94RGF0YSc7XHJcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XHJcblx0Li4ud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QsXHJcblx0Q2hlY2tib3hEYXRhLFxyXG59O1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jaGVja2JveC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIENoZWNrYm94RGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==