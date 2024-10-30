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
    if (value.length === 1 && value[0] && value[0].includes(',')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM05BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDckZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvQ2hlY2tib3hEYXRhLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL2dldEN1c3RvbUNoZWNrYm94SW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvcHJvY2Vzc09wdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9zYW5pdGl6ZUNoZWNrYm94LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDdXN0b21DaGVja2JveElucHV0IGZyb20gJy4vZnVuY3Rpb25zL2dldEN1c3RvbUNoZWNrYm94SW5wdXQnO1xyXG5pbXBvcnQgc2FuaXRpemVDaGVja2JveCBmcm9tICcuL2Z1bmN0aW9ucy9zYW5pdGl6ZUNoZWNrYm94JztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBJbnB1dERhdGEsXHJcblx0ICAgICAgUmVhY3RpdmVIb29rLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmNvbnN0IHsgZ2V0UGFyc2VkTmFtZSB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBzYW5pdGl6ZVZhbHVlKCB2YWx1ZSApIHtcclxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBjb252ZXJ0IHN0cmluZyB0byBhcnJheSBmb3Igc2V0dGluZyBkeW5hbWljIG11bHRpIHZhbHVlXHJcblx0XHQgKlxyXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvODUwOVxyXG5cdFx0ICovXHJcblx0XHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gMSAmJiB2YWx1ZVswXSAmJiB2YWx1ZVswXS5pbmNsdWRlcygnLCcpICkge1xyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlWzBdLnNwbGl0KCcsJylcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gWyB2YWx1ZSBdLmZpbHRlcihcclxuXHRcdEJvb2xlYW4sXHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+IG5vZGVzXHJcbiAqL1xyXG5mdW5jdGlvbiBDaGVja2JveERhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53cmFwcGVyICAgICAgICAgID0gbnVsbDtcclxuXHR0aGlzLmlzUmVzZXRDYWxjVmFsdWUgPSBmYWxzZTtcclxufVxyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUud3JhcHBlciA9IG51bGw7XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0bm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdjaGVja3JhZGlvLXdyYXAnICkgJiZcclxuXHRcdG5vZGUucXVlcnlTZWxlY3RvciggJy5jaGVja2JveGVzLXdyYXAnIClcclxuXHQpO1xyXG59O1xyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xyXG5cclxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICkgKTtcclxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCdrZXlkb3duJyxcclxuXHRcdHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApLFxyXG5cdCk7XHJcblxyXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNvdXQnLCBldmVudCA9PiB7XHJcblx0XHRpZiAoXHJcblx0XHRcdC8vIGp1c3Qgc2ltcGxlIGNoZWNrYm94XHJcblx0XHRcdFsgLi4udGhpcy5ub2RlcyBdLmluY2x1ZGVzKCBldmVudD8ucmVsYXRlZFRhcmdldCApIHx8XHJcblx0XHRcdC8vIGlucHV0IGZyb20gY3VzdG9tIGNoZWNrYm94XHJcblx0XHRcdGV2ZW50Py5yZWxhdGVkVGFyZ2V0Py5jbG9zZXN0Py4oXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24nLFxyXG5cdFx0XHQpXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yZXBvcnRPbkJsdXIoKTtcclxuXHR9ICk7XHJcblxyXG5cdGlmICggdGhpcy5hZGROZXdCdXR0b24gKSB7XHJcblx0XHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoIGV2ZW50Py50YXJnZXQgJiZcclxuXHRcdFx0XHQhdGhpcy5hZGROZXdCdXR0b24uaXNFcXVhbE5vZGUoIGV2ZW50LnRhcmdldCApXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNpbGVuY2VTZXQoIFsgLi4udGhpcy52YWx1ZS5jdXJyZW50LCB0cnVlIF0gKTtcclxuXHRcdFx0Y29uc3QgbGFzdE5vZGUgPSB0aGlzLmdldEN1c3RvbU5vZGVzKCkuYXQoIC0xICk7XHJcblxyXG5cdFx0XHRjb25zdCBpbnB1dCA9IGxhc3ROb2RlLmNsb3Nlc3QoXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyxcclxuXHRcdFx0KS5xdWVyeVNlbGVjdG9yKCAnc3BhbiBpbnB1dC5qZXQtZm9ybS1idWlsZGVyX19maWVsZCcgKTtcclxuXHJcblx0XHRcdGlucHV0LmZvY3VzKCk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmlzQXJyYXkoKSAmJiB0aGlzLnNhbml0aXplKCBzYW5pdGl6ZVZhbHVlICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZSBTYW5pdGl6ZXIgaW5zdGVhZCBvZiBCYXNlU2lnbmFsIHByb3RvdHlwZS5cclxuXHQgKiBXZSBuZWVkIGl0IGJlY2F1c2Ugb2YgZGVsZXRpb24gXCJudWxsXCIgdmFsdWVzXHJcblx0ICovXHJcblxyXG5cdHRoaXMuY2FsbGFibGUgPSBudWxsO1xyXG5cdHRoaXMuc2FuaXRpemUoIHZhbHVlID0+IHNhbml0aXplQ2hlY2tib3goIHZhbHVlLCB0aGlzICkgKTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUub25DaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmdldEFjdGl2ZVZhbHVlKCk7XHJcblx0dGhpcy52YWx1ZS5hcHBseVNhbml0aXplcnMoIHRoaXMudmFsdWUuY3VycmVudCApO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5zZXROb2RlID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdG5vZGUuamZiU3luYyA9IHRoaXM7XHJcblx0LyoqXHJcblx0ICogSXQgc2hvdWxkIGJlIGxpdmUgY29sbGVjdGlvbiBmb3IgdGhlIGNhc2Ugd2hlbiBpdGVtcyBtYXkgY2hhbmdlXHJcblx0ICovXHJcblx0dGhpcy5ub2RlcyA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyX19maWVsZCBjaGVja2JveGVzLWZpZWxkJyApO1xyXG5cclxuXHR0aGlzLnJhd05hbWUgICA9IHRoaXMubm9kZXNbIDAgXS5uYW1lO1xyXG5cdHRoaXMubmFtZSAgICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XHJcblx0dGhpcy5pbnB1dFR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLndyYXBwZXIgPSBub2RlO1xyXG5cclxuXHR0aGlzLmFkZE5ld0J1dHRvbiA9IG5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcC5jdXN0b20tb3B0aW9uIC5hZGQtY3VzdG9tLW9wdGlvbicsXHJcblx0KTtcclxufTtcclxuXHJcbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuZ2V0QWN0aXZlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBbXTtcclxuXHJcblx0Ly8gaXRlcmF0ZSBjaGVja2JveGVzXHJcblx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGVzICkge1xyXG5cdFx0dGhpcy5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlKCBub2RlLCB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXMuaXNBcnJheSgpID8gdmFsdWUgOiAoXHJcblx0XHR2YWx1ZT8uWyAwIF0gPz8gJydcclxuXHQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxyXG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxyXG4gKi9cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5wcm9jZXNzVmFsdWVGb3JtU2luZ2xlQ2hvaWNlID0gZnVuY3Rpb24gKCBub2RlLCB2YWx1ZSApIHtcclxuXHRpZiAoICFub2RlLmRhdGFzZXQuY3VzdG9tICYmICFub2RlLmNoZWNrZWQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBpZiBiYXNpYyBvcHRpb24ganVzdCByZXR1cm4gdmFsdWVcclxuXHRpZiAoICFub2RlLmRhdGFzZXQuY3VzdG9tICkge1xyXG5cdFx0dmFsdWUucHVzaCggbm9kZS52YWx1ZSApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5wdXQgPSBnZXRDdXN0b21DaGVja2JveElucHV0KCBub2RlICk7XHJcblxyXG5cdGlmICggIW5vZGUuY2hlY2tlZCAmJiAhaW5wdXQudmFsdWUgKSB7XHJcblx0XHR2YWx1ZS5wdXNoKCBudWxsICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyByZWNlbnRseSBhZGRlZCBuZXcgb3B0aW9uXHJcblx0aWYgKCAhaW5wdXQudmFsdWUgJiYgbm9kZS5jaGVja2VkICkge1xyXG5cdFx0dmFsdWUucHVzaCggdHJ1ZSApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhaW5wdXQudmFsdWUgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBkaXNhYmxlZCBvciBlbmFibGUgaW5wdXQsIGRlcGVuZGluZyBvbiBjaGVja2JveCBjaGVjayBzdGF0ZVxyXG5cdHZhbHVlLnB1c2goICFub2RlLmNoZWNrZWQgPyBmYWxzZSA6IGlucHV0LnZhbHVlICk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmlzQXJyYXkgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdEJvb2xlYW4oIHRoaXMuYWRkTmV3QnV0dG9uICkgfHxcclxuXHRcdHRoaXMubm9kZXMuaXRlbSggMCApPy5uYW1lPy5pbmNsdWRlcz8uKCAnW10nIClcclxuXHQpO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5hZGRDdXN0b21PcHRpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3Qgcm93V3JhcHBlciA9IHRoaXMuYWRkTmV3QnV0dG9uLmNsb3Nlc3QoXHJcblx0XHQnLmN1c3RvbS1vcHRpb24nLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiB0aGlzLndyYXBwZXIuaW5zZXJ0QmVmb3JlKFxyXG5cdFx0dGhpcy5nZXRDdXN0b21PcHRpb25Ob2RlKCksXHJcblx0XHRyb3dXcmFwcGVyLFxyXG5cdCk7XHJcbn07XHJcblxyXG5DaGVja2JveERhdGEucHJvdG90eXBlLmdldEN1c3RvbU9wdGlvbk5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCAhdGhpcy5hZGROZXdCdXR0b24gKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbml0aWFsID0gdGhpcy5hZGROZXdCdXR0b24ucXVlcnlTZWxlY3RvciggJ3RlbXBsYXRlJyApO1xyXG5cclxuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gaW5pdGlhbC5pbm5lckhUTUwudHJpbSgpO1xyXG5cclxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xyXG59O1xyXG5cclxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRDdXN0b21Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gWyAuLi50aGlzLm5vZGVzIF0uZmlsdGVyKFxyXG5cdFx0bm9kZSA9PiBub2RlLmRhdGFzZXQuY3VzdG9tICYmIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLFxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveERhdGE7IiwiZnVuY3Rpb24gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggbm9kZSApIHtcclxuXHRyZXR1cm4gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvciggJ2lucHV0LnRleHQtZmllbGQnICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEN1c3RvbUNoZWNrYm94SW5wdXQ7IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqIEBwYXJhbSBjdXJyZW50IHtBcnJheXxTdHJpbmd9XHJcbiAqIEBwYXJhbSBpbnB1dCB7Q2hlY2tib3hEYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc09wdGlvbiggbm9kZSwgY3VycmVudCwgaW5wdXQgKSB7XHJcblx0bm9kZS5jaGVja2VkID0gY3VycmVudD8uaW5jbHVkZXMoIG5vZGUudmFsdWUgKTtcclxuXHJcblx0aWYgKCAhbm9kZS5jaGVja2VkICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aW5wdXQuY2FsY1ZhbHVlICs9IHBhcnNlRmxvYXQoXHJcblx0XHRub2RlLmRhdGFzZXQ/LmNhbGN1bGF0ZSA/PyBub2RlLnZhbHVlLFxyXG5cdCk7XHJcblxyXG5cdGlmICggIWlucHV0LmlzQXJyYXkoKSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGluZGV4ID0gY3VycmVudC5pbmRleE9mKCBub2RlLnZhbHVlICk7XHJcblxyXG5cdC8vIHJlbW92ZSBmcm9tIGFycmF5IHZhbHVlc1xyXG5cdGN1cnJlbnQuc3BsaWNlKCBpbmRleCwgMSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzT3B0aW9uOyIsImltcG9ydCBnZXRDdXN0b21DaGVja2JveElucHV0IGZyb20gJy4vZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCc7XHJcbmltcG9ydCBwcm9jZXNzT3B0aW9uIGZyb20gJy4vcHJvY2Vzc09wdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB2YWx1ZSB7QXJyYXl9XHJcbiAqIEBwYXJhbSBpbnB1dCB7Q2hlY2tib3hEYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gc2FuaXRpemVDaGVja2JveCggdmFsdWUsIGlucHV0ICkge1xyXG5cdGlucHV0LmNhbGNWYWx1ZSA9IDA7XHJcblx0Y29uc3QgY29weVZhbHVlID0gaW5wdXQuaXNBcnJheSgpID8gWyAuLi52YWx1ZSBdIDogdmFsdWU7XHJcblxyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XHJcblx0XHQoXHJcblx0XHRcdCFub2RlLmRhdGFzZXQuY3VzdG9tXHJcblx0XHQpICYmIHByb2Nlc3NPcHRpb24oIG5vZGUsIGNvcHlWYWx1ZSwgaW5wdXQgKTtcclxuXHR9XHJcblxyXG5cdGlmICggIWlucHV0LmFkZE5ld0J1dHRvbiApIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGN1c3RvbU5vZGVzID0gaW5wdXQuZ2V0Q3VzdG9tTm9kZXMoKTtcclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIGlmIGN1c3RvbSBvcHRpb25zIGRvbid0IGV4aXN0XHJcblx0ICogQW5kIGlmIHZhbHVlcyBsaXN0IGlzIGVtcHR5LlxyXG5cdCAqXHJcblx0ICogQHNlZSBwcm9jZXNzT3B0aW9uXHJcblx0ICovXHJcblx0aWYgKCBjdXN0b21Ob2Rlcy5sZW5ndGggJiYgIWNvcHlWYWx1ZS5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRjb25zdCBsaW1pdCA9IE1hdGgubWF4KCBjdXN0b21Ob2Rlcy5sZW5ndGgsIGNvcHlWYWx1ZS5sZW5ndGggKTtcclxuXHJcblx0Zm9yICggbGV0IGkgPSBsaW1pdCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG5cdFx0bGV0IGN1cnJlbnROb2RlICAgID0gY3VzdG9tTm9kZXNbIGkgXTtcclxuXHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvcHlWYWx1ZVsgaSBdO1xyXG5cclxuXHRcdC8vIHZhbHVlIGhhcyBiZWVuIHJlbW92ZWRcclxuXHRcdGlmICggbnVsbCA9PT0gY3VycmVudFZhbHVlICkge1xyXG5cdFx0XHRjdXJyZW50Tm9kZS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICkucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhZGQgcm93IGVsZW1lbnQgaW4gZG9tXHJcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgY3VycmVudE5vZGUgKSB7XHJcblx0XHRcdC8vIGl0IGNhbid0IGJlIGRpc2FibGVkLCBzb21ldGhpbmcgd2VudCB3cm9uZ1xyXG5cdFx0XHRpZiAoIGZhbHNlID09PSBjdXJyZW50VmFsdWUgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aW5wdXQuYWRkQ3VzdG9tT3B0aW9uKCk7XHJcblxyXG5cdFx0XHRjdXJyZW50Tm9kZSA9IGlucHV0Lm5vZGVzWyBpbnB1dC5ub2Rlcy5sZW5ndGggLSAxIF07XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5wdXROb2RlICAgID0gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggY3VycmVudE5vZGUgKTtcclxuXHRcdGlucHV0Tm9kZS5kaXNhYmxlZCA9IGZhbHNlID09PSBjdXJyZW50VmFsdWU7XHJcblxyXG5cdFx0Ly8gYWRkIDEgaWYgY3VzdG9tIG9wdGlvbiBub3QgZGVzZWxlY3RlZCwgbm90IHdpdGggZW1wdHkgdmFsdWVcclxuXHRcdC8vIGFuZCBoYXNuJ3QganVzdCBhZGRlZFxyXG5cdFx0aWYgKCAhaW5wdXROb2RlLmRpc2FibGVkICYmXHJcblx0XHRcdCFpc0VtcHR5KCBjdXJyZW50VmFsdWUgKSAmJlxyXG5cdFx0XHR0cnVlICE9PSBjdXJyZW50VmFsdWVcclxuXHRcdCkge1xyXG5cdFx0XHRpbnB1dC5jYWxjVmFsdWUgKz0gMTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGlucHV0Tm9kZS52YWx1ZSA9PT0gY3VycmVudFZhbHVlIHx8XHJcblx0XHRcdCdib29sZWFuJyA9PT0gdHlwZW9mIGN1cnJlbnRWYWx1ZVxyXG5cdFx0KSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0Tm9kZS52YWx1ZSA9IGN1cnJlbnRWYWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB2YWx1ZS5maWx0ZXIoIHZhbCA9PiBudWxsICE9PSB2YWwgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVDaGVja2JveDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDaGVja2JveERhdGEgZnJvbSAnLi9DaGVja2JveERhdGEnO1xyXG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxyXG5cdENoZWNrYm94RGF0YSxcclxufTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2hlY2tib3gtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBDaGVja2JveERhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=