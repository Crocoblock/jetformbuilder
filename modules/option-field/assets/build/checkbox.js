/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/checkbox/CheckboxData.js"
/*!**************************************************!*\
  !*** ./frontend/blocks/checkbox/CheckboxData.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ },

/***/ "./frontend/blocks/checkbox/functions/getCustomCheckboxInput.js"
/*!**********************************************************************!*\
  !*** ./frontend/blocks/checkbox/functions/getCustomCheckboxInput.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getCustomCheckboxInput(node) {
  return node.nextElementSibling.querySelector('input.text-field');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCustomCheckboxInput);

/***/ },

/***/ "./frontend/blocks/checkbox/functions/processOption.js"
/*!*************************************************************!*\
  !*** ./frontend/blocks/checkbox/functions/processOption.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ },

/***/ "./frontend/blocks/checkbox/functions/sanitizeCheckbox.js"
/*!****************************************************************!*\
  !*** ./frontend/blocks/checkbox/functions/sanitizeCheckbox.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ },

/***/ "./frontend/default-value/main.js"
/*!****************************************!*\
  !*** ./frontend/default-value/main.js ***!
  \****************************************/
() {

const {
  CalculatedFormula
} = JetFormBuilderAbstract;
const {
  addAction
} = JetPlugins.hooks;
const OBSERVER_FLAG = '__JFB_OPTION_FIELD_DEFAULT_VALUE_OBSERVER__';
function stripWrappingQuotes(value) {
  if ('string' !== typeof value || value.length < 2) {
    return value;
  }
  const first = value.charAt(0);
  const last = value.charAt(value.length - 1);
  if ('\'' === first && '\'' === last || '"' === first && '"' === last) {
    return value.slice(1, -1);
  }
  return value;
}
function parseDefaultValue(value) {
  if ('string' !== typeof value) {
    return value;
  }
  const normalized = value.trim();
  try {
    const parsed = JSON.parse(normalized);
    return Array.isArray(parsed) ? parsed : normalized;
  } catch (error) {
    if (normalized.startsWith('[') && normalized.endsWith(']') && normalized.includes('\'')) {
      try {
        const normalizedJson = normalized.replace(/'((?:\\'|[^'])*)'/g, (match, current) => `"${current.replace(/"/g, '\\"')}"`);
        const parsed = JSON.parse(normalizedJson);
        return Array.isArray(parsed) ? parsed : normalized;
      } catch (fallbackError) {
        return normalized;
      }
    }
    return normalized;
  }
}
function parseArrayLikeValue(value) {
  if ('string' !== typeof value) {
    return value;
  }
  const normalized = value.trim();
  try {
    const parsed = JSON.parse(normalized);
    return Array.isArray(parsed) ? parsed : value;
  } catch (error) {
    if (normalized.startsWith('[') && normalized.endsWith(']') && normalized.includes('\'')) {
      try {
        const normalizedJson = normalized.replace(/'((?:\\'|[^'])*)'/g, (match, current) => `"${current.replace(/"/g, '\\"')}"`);
        const parsed = JSON.parse(normalizedJson);
        return Array.isArray(parsed) ? parsed : value;
      } catch (fallbackError) {
        return value;
      }
    }
    return value;
  }
}
function hasMacroValue(value) {
  if (Array.isArray(value)) {
    return value.some(hasMacroValue);
  }
  return 'string' === typeof value && value.includes('%');
}
function shouldHandleDefaultValue(rawValue, parsedValue) {
  if (Array.isArray(parsedValue)) {
    return parsedValue.length > 0;
  }
  if ('string' !== typeof rawValue) {
    return hasMacroValue(parsedValue);
  }
  const normalized = rawValue.trim();
  return hasMacroValue(parsedValue) || normalized.startsWith('[') && normalized.endsWith(']');
}
function isQuotedString(value) {
  if ('string' !== typeof value || value.length < 2) {
    return false;
  }
  const first = value.charAt(0);
  const last = value.charAt(value.length - 1);
  return '\'' === first && '\'' === last || '"' === first && '"' === last;
}
function prepareFormulaValue(value) {
  if ('string' !== typeof value) {
    return value;
  }
  const normalized = value.trim();
  if (!hasMacroValue(normalized) || isQuotedString(normalized)) {
    return normalized;
  }

  // Exact-match option defaults should resolve to string values, not bare JS identifiers.
  return `'${normalized.replace(/'/g, '\\\'')}'`;
}
function isResolved(value) {
  return !('' === value || null === value || Array.isArray(value) && !value.length);
}
function canOverrideAutoSelectedSingleSelect(input) {
  if (input.isArray() || 'select' !== input.inputType) {
    return false;
  }
  const [node] = input.nodes;
  if (!node || 'select-one' !== node.type || node.multiple || !node.options?.length) {
    return false;
  }
  const options = Array.from(node.options);
  const [firstOption] = options;
  if (!firstOption) {
    return false;
  }
  if (options.some(option => '' === option.value)) {
    return false;
  }
  if (options.some(option => option.defaultSelected)) {
    return false;
  }
  return 0 === node.selectedIndex && node.value === firstOption.value;
}
function applyResolvedValue(input, value) {
  if (Array.isArray(value)) {
    input.value.setIfEmpty(value.map(current => stripWrappingQuotes('' + current)));
    return;
  }
  const normalized = stripWrappingQuotes('' + value);
  if (!input.isArray()) {
    if (canOverrideAutoSelectedSingleSelect(input)) {
      input.value.current = normalized;
      return;
    }
    input.value.setIfEmpty(normalized);
    return;
  }
  const nextValue = parseArrayLikeValue(normalized);
  input.value.setIfEmpty(Array.isArray(nextValue) ? nextValue.map(current => stripWrappingQuotes('' + current)) : [normalized]);
}
function observeDefaultValue(input, defaultValue) {
  const values = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const formulas = [];
  const results = new Array(values.length);
  const maybeApply = () => {
    if (Object.keys(results).length !== values.length || !results.every(isResolved)) {
      return;
    }
    applyResolvedValue(input, Array.isArray(defaultValue) ? results : results[0]);
    formulas.forEach(current => current.clearWatchers());
  };
  values.forEach((currentValue, index) => {
    const formula = new CalculatedFormula(input);
    formula.observe(prepareFormulaValue(currentValue));
    formula.setResult = () => {
      const result = formula.calculate();
      if (!isResolved(result)) {
        return;
      }
      results[index] = result;
      maybeApply();
    };
    formula.setResult();
    formulas.push(formula);
  });
}
function applyOptionFieldDefault(input) {
  var _input$wrapper, _ref, _fieldWrapper$dataset;
  const [node] = input.nodes;
  const fieldWrapper = (_input$wrapper = input.wrapper) !== null && _input$wrapper !== void 0 ? _input$wrapper : node;
  const rawDefault = (_ref = (_fieldWrapper$dataset = fieldWrapper?.dataset?.defaultVal) !== null && _fieldWrapper$dataset !== void 0 ? _fieldWrapper$dataset : node?.dataset?.defaultVal) !== null && _ref !== void 0 ? _ref : '';
  const defaultValue = parseDefaultValue(rawDefault);
  if (!shouldHandleDefaultValue(rawDefault, defaultValue)) {
    return;
  }
  observeDefaultValue(input, defaultValue);
}
if (!window[OBSERVER_FLAG]) {
  window[OBSERVER_FLAG] = true;
  addAction('jet.fb.observe.after', 'jet-form-builder/option-field-default-value', function (observable) {
    for (const input of observable.getInputs()) {
      const [node] = input.nodes;
      if (!node || !['select', 'radio', 'checkbox'].includes(input.inputType)) {
        continue;
      }
      applyOptionFieldDefault(input);
    }
  });
}

/***/ },

/***/ "./frontend/blocks/checkbox/index.pcss"
/*!*********************************************!*\
  !*** ./frontend/blocks/checkbox/index.pcss ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./frontend/blocks/checkbox/main.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxData */ "./frontend/blocks/checkbox/CheckboxData.js");
/* harmony import */ var _default_value_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../default-value/main */ "./frontend/default-value/main.js");
/* harmony import */ var _default_value_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_default_value_main__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.pcss */ "./frontend/blocks/checkbox/index.pcss");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDblBBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDcFVBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L0NoZWNrYm94RGF0YS5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL2NoZWNrYm94L2Z1bmN0aW9ucy9nZXRDdXN0b21DaGVja2JveElucHV0LmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvZnVuY3Rpb25zL3Byb2Nlc3NPcHRpb24uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9jaGVja2JveC9mdW5jdGlvbnMvc2FuaXRpemVDaGVja2JveC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvZGVmYXVsdC12YWx1ZS9tYWluLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvaW5kZXgucGNzcz84ZDI5Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9ibG9ja3MvY2hlY2tib3gvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCBmcm9tICcuL2Z1bmN0aW9ucy9nZXRDdXN0b21DaGVja2JveElucHV0JztcbmltcG9ydCBzYW5pdGl6ZUNoZWNrYm94IGZyb20gJy4vZnVuY3Rpb25zL3Nhbml0aXplQ2hlY2tib3gnO1xuXG5jb25zdCB7XG5cdElucHV0RGF0YSxcblx0UmVhY3RpdmVIb29rLFxufSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHsgZ2V0UGFyc2VkTmFtZSB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUoIHZhbHVlLCBjdHggKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblxuXHRcdC8qKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svamV0Zm9ybWJ1aWxkZXIvaXNzdWVzLzU2OVxuXHRcdCAqL1xuXHRcdGNvbnN0IGtlZXBDb21tYXMgPSAhIWN0eD8ua2VlcENvbW1hcztcblxuXHRcdC8qKlxuXHRcdCAqIGNvbnZlcnQgc3RyaW5nIHRvIGFycmF5IGZvciBzZXR0aW5nIGR5bmFtaWMgbXVsdGkgdmFsdWVcblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzg1MDlcblx0XHQgKi9cblxuXHRcdGlmIChcblx0XHRcdCFrZWVwQ29tbWFzICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPT09IDEgJiZcblx0XHRcdHZhbHVlWzBdICYmXG5cdFx0XHR0cnVlICE9IHZhbHVlWzBdICYmXG5cdFx0XHRTdHJpbmcoIHZhbHVlWzBdICkuaW5jbHVkZXMoICcsJyApXG5cdFx0KSB7XG5cdFx0XHR2YWx1ZSA9IFN0cmluZyggdmFsdWVbMF0gKS5zcGxpdCgnLCcpO1xuXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLm1hcCggaXRlbSA9PiB7XG5cdFx0XHRcdGlmICggJ3RydWUnID09PSBpdGVtICkgcmV0dXJuICcnO1xuXHRcdFx0XHRpZiAoICdmYWxzZScgPT09IGl0ZW0gKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiBbIHZhbHVlIF0uZmlsdGVyKCBCb29sZWFuICk7XG59XG5cbi8qKlxuICogQHByb3BlcnR5IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4gbm9kZXNcbiAqL1xuZnVuY3Rpb24gQ2hlY2tib3hEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud3JhcHBlciAgICAgICAgICA9IG51bGw7XG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IGZhbHNlO1xufVxuXG5DaGVja2JveERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0cmV0dXJuIChcblx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2NoZWNrcmFkaW8td3JhcCcgKSAmJlxuXHRcdG5vZGUucXVlcnlTZWxlY3RvciggJy5jaGVja2JveGVzLXdyYXAnIClcblx0KTtcbn07XG5DaGVja2JveERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICkgKTtcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2tleWRvd24nLFxuXHRcdHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApLFxuXHQpO1xuXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNvdXQnLCBldmVudCA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0Ly8ganVzdCBzaW1wbGUgY2hlY2tib3hcblx0XHRcdFsgLi4udGhpcy5ub2RlcyBdLmluY2x1ZGVzKCBldmVudD8ucmVsYXRlZFRhcmdldCApIHx8XG5cdFx0XHQvLyBpbnB1dCBmcm9tIGN1c3RvbSBjaGVja2JveFxuXHRcdFx0ZXZlbnQ/LnJlbGF0ZWRUYXJnZXQ/LmNsb3Nlc3Q/Lihcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24nLFxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnJlcG9ydE9uQmx1cigpO1xuXHR9ICk7XG5cblx0aWYgKCB0aGlzLmFkZE5ld0J1dHRvbiApIHtcblx0XHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKCBldmVudD8udGFyZ2V0ICYmXG5cdFx0XHRcdCF0aGlzLmFkZE5ld0J1dHRvbi5pc0VxdWFsTm9kZSggZXZlbnQudGFyZ2V0IClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNpbGVuY2VTZXQoIFsgLi4udGhpcy52YWx1ZS5jdXJyZW50LCB0cnVlIF0gKTtcblx0XHRcdGNvbnN0IGxhc3ROb2RlID0gdGhpcy5nZXRDdXN0b21Ob2RlcygpLmF0KCAtMSApO1xuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGxhc3ROb2RlLmNsb3Nlc3QoXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXG5cdFx0XHQpLnF1ZXJ5U2VsZWN0b3IoICdzcGFuIGlucHV0LmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkJyApO1xuXG5cdFx0XHRpbnB1dC5mb2N1cygpO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0dGhpcy5zYW5pdGl6ZSggdmFsdWUgPT4gc2FuaXRpemVWYWx1ZSggdmFsdWUsIHRoaXMgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVzZSBTYW5pdGl6ZXIgaW5zdGVhZCBvZiBCYXNlU2lnbmFsIHByb3RvdHlwZS5cblx0ICogV2UgbmVlZCBpdCBiZWNhdXNlIG9mIGRlbGV0aW9uIFwibnVsbFwiIHZhbHVlc1xuXHQgKi9cblxuXHR0aGlzLmNhbGxhYmxlID0gbnVsbDtcblx0dGhpcy5zYW5pdGl6ZSggdmFsdWUgPT4gc2FuaXRpemVDaGVja2JveCggdmFsdWUsIHRoaXMgKSApO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xuXHR0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XG59O1xuXG5DaGVja2JveERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdG5vZGUuamZiU3luYyA9IHRoaXM7XG5cdC8qKlxuXHQgKiBJdCBzaG91bGQgYmUgbGl2ZSBjb2xsZWN0aW9uIGZvciB0aGUgY2FzZSB3aGVuIGl0ZW1zIG1heSBjaGFuZ2Vcblx0ICovXG5cdHRoaXMubm9kZXMgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkIGNoZWNrYm94ZXMtZmllbGQnICk7XG5cblx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5vZGVzWyAwIF0ubmFtZTtcblx0dGhpcy5uYW1lICAgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcblx0dGhpcy5pbnB1dFR5cGUgPSAnY2hlY2tib3gnO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cblx0ICovXG5cdHRoaXMud3JhcHBlciA9IG5vZGU7XG5cblx0dGhpcy5hZGROZXdCdXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwLmN1c3RvbS1vcHRpb24gLmFkZC1jdXN0b20tb3B0aW9uJyxcblx0KTtcbn07XG5cblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRBY3RpdmVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdmFsdWUgPSBbXTtcblxuXHR0aGlzLmtlZXBDb21tYXMgPSBmYWxzZTtcblxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XG5cblx0XHRpZiAoIG5vZGUuY2hlY2tlZCAmJiBub2RlLmRhdGFzZXQua2VlcENvbW1hcyA9PT0gJzEnICkge1xuXHRcdFx0dGhpcy5rZWVwQ29tbWFzID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UoIG5vZGUsIHZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5pc0FycmF5KCkgPyB2YWx1ZSA6IChcblx0XHR2YWx1ZT8uWyAwIF0gPz8gJydcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKiBAcGFyYW0gdmFsdWUge0FycmF5fVxuICovXG5DaGVja2JveERhdGEucHJvdG90eXBlLnByb2Nlc3NWYWx1ZUZvcm1TaW5nbGVDaG9pY2UgPSBmdW5jdGlvbiAoIG5vZGUsIHZhbHVlICkge1xuXHRpZiAoICFub2RlLmRhdGFzZXQuY3VzdG9tICYmICFub2RlLmNoZWNrZWQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaWYgYmFzaWMgb3B0aW9uIGp1c3QgcmV0dXJuIHZhbHVlXG5cdGlmICggIW5vZGUuZGF0YXNldC5jdXN0b20gKSB7XG5cdFx0dmFsdWUucHVzaCggbm9kZS52YWx1ZSApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlucHV0ID0gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggbm9kZSApO1xuXG5cdGlmICggIW5vZGUuY2hlY2tlZCAmJiAhaW5wdXQudmFsdWUgKSB7XG5cdFx0dmFsdWUucHVzaCggbnVsbCApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHJlY2VudGx5IGFkZGVkIG5ldyBvcHRpb25cblx0aWYgKCAhaW5wdXQudmFsdWUgJiYgbm9kZS5jaGVja2VkICkge1xuXHRcdHZhbHVlLnB1c2goIHRydWUgKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoICFpbnB1dC52YWx1ZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBkaXNhYmxlZCBvciBlbmFibGUgaW5wdXQsIGRlcGVuZGluZyBvbiBjaGVja2JveCBjaGVjayBzdGF0ZVxuXHR2YWx1ZS5wdXNoKCAhbm9kZS5jaGVja2VkID8gZmFsc2UgOiBpbnB1dC52YWx1ZSApO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gKFxuXHRcdEJvb2xlYW4oIHRoaXMuYWRkTmV3QnV0dG9uICkgfHxcblx0XHR0aGlzLm5vZGVzLml0ZW0gJiYgdGhpcy5ub2Rlcy5pdGVtKCAwICk/Lm5hbWU/LmluY2x1ZGVzPy4oICdbXScgKVxuXHQpO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5hZGRDdXN0b21PcHRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHJvd1dyYXBwZXIgPSB0aGlzLmFkZE5ld0J1dHRvbi5jbG9zZXN0KFxuXHRcdCcuY3VzdG9tLW9wdGlvbicsXG5cdCk7XG5cblx0cmV0dXJuIHRoaXMud3JhcHBlci5pbnNlcnRCZWZvcmUoXG5cdFx0dGhpcy5nZXRDdXN0b21PcHRpb25Ob2RlKCksXG5cdFx0cm93V3JhcHBlcixcblx0KTtcbn07XG5cbkNoZWNrYm94RGF0YS5wcm90b3R5cGUuZ2V0Q3VzdG9tT3B0aW9uTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5hZGROZXdCdXR0b24gKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgaW5pdGlhbCA9IHRoaXMuYWRkTmV3QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoICd0ZW1wbGF0ZScgKTtcblxuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IGluaXRpYWwuaW5uZXJIVE1MLnRyaW0oKTtcblxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xufTtcblxuQ2hlY2tib3hEYXRhLnByb3RvdHlwZS5nZXRDdXN0b21Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIFsgLi4udGhpcy5ub2RlcyBdLmZpbHRlcihcblx0XHRub2RlID0+IG5vZGUuZGF0YXNldC5jdXN0b20gJiYgbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcsXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveERhdGE7IiwiZnVuY3Rpb24gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggbm9kZSApIHtcblx0cmV0dXJuIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoICdpbnB1dC50ZXh0LWZpZWxkJyApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDdXN0b21DaGVja2JveElucHV0OyIsIi8qKlxuICogQHBhcmFtIG5vZGVcbiAqIEBwYXJhbSBjdXJyZW50IHtBcnJheXxTdHJpbmd9XG4gKiBAcGFyYW0gaW5wdXQge0NoZWNrYm94RGF0YX1cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc09wdGlvbiggbm9kZSwgY3VycmVudCwgaW5wdXQgKSB7XG5cdG5vZGUuY2hlY2tlZCA9IGN1cnJlbnQ/LmluY2x1ZGVzKCBub2RlLnZhbHVlICk7XG5cblx0aWYgKCAhbm9kZS5jaGVja2VkICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxuXHRcdG5vZGUuZGF0YXNldD8uY2FsY3VsYXRlID8/IG5vZGUudmFsdWUsXG5cdCk7XG5cblx0aWYgKCAhaW5wdXQuaXNBcnJheSgpICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGluZGV4ID0gY3VycmVudC5pbmRleE9mKCBub2RlLnZhbHVlICk7XG5cblx0Ly8gcmVtb3ZlIGZyb20gYXJyYXkgdmFsdWVzXG5cdGN1cnJlbnQuc3BsaWNlKCBpbmRleCwgMSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzT3B0aW9uOyIsImltcG9ydCBnZXRDdXN0b21DaGVja2JveElucHV0IGZyb20gJy4vZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCc7XG5pbXBvcnQgcHJvY2Vzc09wdGlvbiBmcm9tICcuL3Byb2Nlc3NPcHRpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIGlzRW1wdHksXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbi8qKlxuICogQHBhcmFtIHZhbHVlIHtBcnJheX1cbiAqIEBwYXJhbSBpbnB1dCB7Q2hlY2tib3hEYXRhfVxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZUNoZWNrYm94KCB2YWx1ZSwgaW5wdXQgKSB7XG5cdGlucHV0LmNhbGNWYWx1ZSA9IDA7XG5cdGNvbnN0IGNvcHlWYWx1ZSA9IGlucHV0LmlzQXJyYXkoKSA/IFsgLi4udmFsdWUgXSA6IHZhbHVlO1xuXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XG5cdFx0KFxuXHRcdFx0IW5vZGUuZGF0YXNldC5jdXN0b21cblx0XHQpICYmIHByb2Nlc3NPcHRpb24oIG5vZGUsIGNvcHlWYWx1ZSwgaW5wdXQgKTtcblx0fVxuXG5cdGlmICggIWlucHV0LmFkZE5ld0J1dHRvbiApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBjdXN0b21Ob2RlcyA9IGlucHV0LmdldEN1c3RvbU5vZGVzKCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBpZiBjdXN0b20gb3B0aW9ucyBkb24ndCBleGlzdFxuXHQgKiBBbmQgaWYgdmFsdWVzIGxpc3QgaXMgZW1wdHkuXG5cdCAqXG5cdCAqIEBzZWUgcHJvY2Vzc09wdGlvblxuXHQgKi9cblx0aWYgKCBjdXN0b21Ob2Rlcy5sZW5ndGggJiYgIWNvcHlWYWx1ZS5sZW5ndGggKSB7XG5cdFx0Y29uc3QgbGltaXQgPSBNYXRoLm1heCggY3VzdG9tTm9kZXMubGVuZ3RoLCBjb3B5VmFsdWUubGVuZ3RoICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IGxpbWl0IC0gMTsgaSA+PSAwOyBpLS0gKSB7XG5cdFx0XHRpZiAoIGN1c3RvbU5vZGVzWyBpIF0gKSB7XG5cdFx0XHRcdGxldCBjdXJyZW50Tm9kZSAgICA9IGN1c3RvbU5vZGVzWyBpIF07XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGNvcHlWYWx1ZVsgaSBdO1xuXG5cdFx0XHRcdC8vIHZhbHVlIGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IGN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZS5jbG9zZXN0KCAnLmN1c3RvbS1vcHRpb24nICkucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW1pdCA9IE1hdGgubWF4KCBjdXN0b21Ob2Rlcy5sZW5ndGgsIGNvcHlWYWx1ZS5sZW5ndGggKTtcblxuXHRmb3IgKCBsZXQgaSA9IGxpbWl0IC0gMTsgaSA+PSAwOyBpLS0gKSB7XG5cdFx0bGV0IGN1cnJlbnROb2RlICAgID0gY3VzdG9tTm9kZXNbIGkgXTtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBjb3B5VmFsdWVbIGkgXTtcblxuXHRcdC8vIHZhbHVlIGhhcyBiZWVuIHJlbW92ZWRcblx0XHRpZiAoIG51bGwgPT09IGN1cnJlbnRWYWx1ZSB8fCB1bmRlZmluZWQgPT09IGN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdGlmICggY3VycmVudE5vZGUgKSB7XG5cdFx0XHRcdGN1cnJlbnROb2RlLmNsb3Nlc3QoICcuY3VzdG9tLW9wdGlvbicgKS5yZW1vdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIHJvdyBlbGVtZW50IGluIGRvbVxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBjdXJyZW50Tm9kZSApIHtcblx0XHRcdC8vIGl0IGNhbid0IGJlIGRpc2FibGVkLCBzb21ldGhpbmcgd2VudCB3cm9uZ1xuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VycmVudFZhbHVlICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlucHV0LmFkZEN1c3RvbU9wdGlvbigpO1xuXG5cdFx0XHRjdXJyZW50Tm9kZSA9IGlucHV0Lm5vZGVzWyBpbnB1dC5ub2Rlcy5sZW5ndGggLSAxIF07XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXROb2RlICAgID0gZ2V0Q3VzdG9tQ2hlY2tib3hJbnB1dCggY3VycmVudE5vZGUgKTtcblx0XHRpbnB1dE5vZGUuZGlzYWJsZWQgPSBmYWxzZSA9PT0gY3VycmVudFZhbHVlO1xuXG5cdFx0Ly8gYWRkIDEgaWYgY3VzdG9tIG9wdGlvbiBub3QgZGVzZWxlY3RlZCwgbm90IHdpdGggZW1wdHkgdmFsdWVcblx0XHQvLyBhbmQgaGFzbid0IGp1c3QgYWRkZWRcblx0XHRpZiAoICFpbnB1dE5vZGUuZGlzYWJsZWQgJiZcblx0XHRcdCFpc0VtcHR5KCBjdXJyZW50VmFsdWUgKSAmJlxuXHRcdFx0dHJ1ZSAhPT0gY3VycmVudFZhbHVlXG5cdFx0KSB7XG5cdFx0XHRpbnB1dC5jYWxjVmFsdWUgKz0gMTtcblx0XHR9XG5cblx0XHRpZiAoIGlucHV0Tm9kZS52YWx1ZSA9PT0gY3VycmVudFZhbHVlIHx8XG5cdFx0XHQnYm9vbGVhbicgPT09IHR5cGVvZiBjdXJyZW50VmFsdWVcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlucHV0Tm9kZS52YWx1ZSA9IGN1cnJlbnRWYWx1ZTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZS5maWx0ZXIoIHZhbCA9PiBudWxsICE9PSB2YWwgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVDaGVja2JveDsiLCJjb25zdCB7XG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IE9CU0VSVkVSX0ZMQUcgPSAnX19KRkJfT1BUSU9OX0ZJRUxEX0RFRkFVTFRfVkFMVUVfT0JTRVJWRVJfXyc7XG5cbmZ1bmN0aW9uIHN0cmlwV3JhcHBpbmdRdW90ZXMoIHZhbHVlICkge1xuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2YgdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgMiApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBmaXJzdCA9IHZhbHVlLmNoYXJBdCggMCApO1xuXHRjb25zdCBsYXN0ICA9IHZhbHVlLmNoYXJBdCggdmFsdWUubGVuZ3RoIC0gMSApO1xuXG5cdGlmIChcblx0XHQoICdcXCcnID09PSBmaXJzdCAmJiAnXFwnJyA9PT0gbGFzdCApIHx8XG5cdFx0KCAnXCInID09PSBmaXJzdCAmJiAnXCInID09PSBsYXN0IClcblx0KSB7XG5cdFx0cmV0dXJuIHZhbHVlLnNsaWNlKCAxLCAtMSApO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYXJzZURlZmF1bHRWYWx1ZSggdmFsdWUgKSB7XG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkID0gdmFsdWUudHJpbSgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSggbm9ybWFsaXplZCApO1xuXG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoIHBhcnNlZCApID8gcGFyc2VkIDogbm9ybWFsaXplZDtcblx0fVxuXHRjYXRjaCAoIGVycm9yICkge1xuXHRcdGlmIChcblx0XHRcdG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCggJ1snICkgJiZcblx0XHRcdG5vcm1hbGl6ZWQuZW5kc1dpdGgoICddJyApICYmXG5cdFx0XHRub3JtYWxpemVkLmluY2x1ZGVzKCAnXFwnJyApXG5cdFx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBub3JtYWxpemVkSnNvbiA9IG5vcm1hbGl6ZWQucmVwbGFjZShcblx0XHRcdFx0XHQvJygoPzpcXFxcJ3xbXiddKSopJy9nLFxuXHRcdFx0XHRcdCggbWF0Y2gsIGN1cnJlbnQgKSA9PiBgXCIkeyBjdXJyZW50LnJlcGxhY2UoIC9cIi9nLCAnXFxcXFwiJyApIH1cImAsXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoIG5vcm1hbGl6ZWRKc29uICk7XG5cblx0XHRcdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoIHBhcnNlZCApID8gcGFyc2VkIDogbm9ybWFsaXplZDtcblx0XHRcdH1cblx0XHRcdGNhdGNoICggZmFsbGJhY2tFcnJvciApIHtcblx0XHRcdFx0cmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VBcnJheUxpa2VWYWx1ZSggdmFsdWUgKSB7XG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkID0gdmFsdWUudHJpbSgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSggbm9ybWFsaXplZCApO1xuXG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoIHBhcnNlZCApID8gcGFyc2VkIDogdmFsdWU7XG5cdH1cblx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRpZiAoXG5cdFx0XHRub3JtYWxpemVkLnN0YXJ0c1dpdGgoICdbJyApICYmXG5cdFx0XHRub3JtYWxpemVkLmVuZHNXaXRoKCAnXScgKSAmJlxuXHRcdFx0bm9ybWFsaXplZC5pbmNsdWRlcyggJ1xcJycgKVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3Qgbm9ybWFsaXplZEpzb24gPSBub3JtYWxpemVkLnJlcGxhY2UoXG5cdFx0XHRcdFx0LycoKD86XFxcXCd8W14nXSkqKScvZyxcblx0XHRcdFx0XHQoIG1hdGNoLCBjdXJyZW50ICkgPT4gYFwiJHsgY3VycmVudC5yZXBsYWNlKCAvXCIvZywgJ1xcXFxcIicgKSB9XCJgLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKCBub3JtYWxpemVkSnNvbiApO1xuXG5cdFx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBwYXJzZWQgKSA/IHBhcnNlZCA6IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKCBmYWxsYmFja0Vycm9yICkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhc01hY3JvVmFsdWUoIHZhbHVlICkge1xuXHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0cmV0dXJuIHZhbHVlLnNvbWUoIGhhc01hY3JvVmFsdWUgKTtcblx0fVxuXG5cdHJldHVybiAnc3RyaW5nJyA9PT0gdHlwZW9mIHZhbHVlICYmIHZhbHVlLmluY2x1ZGVzKCAnJScgKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkSGFuZGxlRGVmYXVsdFZhbHVlKCByYXdWYWx1ZSwgcGFyc2VkVmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggcGFyc2VkVmFsdWUgKSApIHtcblx0XHRyZXR1cm4gcGFyc2VkVmFsdWUubGVuZ3RoID4gMDtcblx0fVxuXG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiByYXdWYWx1ZSApIHtcblx0XHRyZXR1cm4gaGFzTWFjcm9WYWx1ZSggcGFyc2VkVmFsdWUgKTtcblx0fVxuXG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSByYXdWYWx1ZS50cmltKCk7XG5cblx0cmV0dXJuIChcblx0XHRoYXNNYWNyb1ZhbHVlKCBwYXJzZWRWYWx1ZSApIHx8XG5cdFx0KFxuXHRcdFx0bm9ybWFsaXplZC5zdGFydHNXaXRoKCAnWycgKSAmJlxuXHRcdFx0bm9ybWFsaXplZC5lbmRzV2l0aCggJ10nIClcblx0XHQpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGlzUXVvdGVkU3RyaW5nKCB2YWx1ZSApIHtcblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIHZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8IDIgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgZmlyc3QgPSB2YWx1ZS5jaGFyQXQoIDAgKTtcblx0Y29uc3QgbGFzdCAgPSB2YWx1ZS5jaGFyQXQoIHZhbHVlLmxlbmd0aCAtIDEgKTtcblxuXHRyZXR1cm4gKFxuXHRcdCggJ1xcJycgPT09IGZpcnN0ICYmICdcXCcnID09PSBsYXN0ICkgfHxcblx0XHQoICdcIicgPT09IGZpcnN0ICYmICdcIicgPT09IGxhc3QgKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlRm9ybXVsYVZhbHVlKCB2YWx1ZSApIHtcblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSB2YWx1ZS50cmltKCk7XG5cblx0aWYgKCAhaGFzTWFjcm9WYWx1ZSggbm9ybWFsaXplZCApIHx8IGlzUXVvdGVkU3RyaW5nKCBub3JtYWxpemVkICkgKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZWQ7XG5cdH1cblxuXHQvLyBFeGFjdC1tYXRjaCBvcHRpb24gZGVmYXVsdHMgc2hvdWxkIHJlc29sdmUgdG8gc3RyaW5nIHZhbHVlcywgbm90IGJhcmUgSlMgaWRlbnRpZmllcnMuXG5cdHJldHVybiBgJyR7XG5cdFx0bm9ybWFsaXplZC5yZXBsYWNlKCAvJy9nLCAnXFxcXFxcJycgKVxuXHR9J2A7XG59XG5cbmZ1bmN0aW9uIGlzUmVzb2x2ZWQoIHZhbHVlICkge1xuXHRyZXR1cm4gIShcblx0XHQnJyA9PT0gdmFsdWUgfHxcblx0XHRudWxsID09PSB2YWx1ZSB8fFxuXHRcdChcblx0XHRcdEFycmF5LmlzQXJyYXkoIHZhbHVlICkgJiZcblx0XHRcdCF2YWx1ZS5sZW5ndGhcblx0XHQpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGNhbk92ZXJyaWRlQXV0b1NlbGVjdGVkU2luZ2xlU2VsZWN0KCBpbnB1dCApIHtcblx0aWYgKCBpbnB1dC5pc0FycmF5KCkgfHwgJ3NlbGVjdCcgIT09IGlucHV0LmlucHV0VHlwZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdGlmIChcblx0XHQhbm9kZSB8fFxuXHRcdCdzZWxlY3Qtb25lJyAhPT0gbm9kZS50eXBlIHx8XG5cdFx0bm9kZS5tdWx0aXBsZSB8fFxuXHRcdCFub2RlLm9wdGlvbnM/Lmxlbmd0aFxuXHQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSggbm9kZS5vcHRpb25zICk7XG5cdGNvbnN0IFsgZmlyc3RPcHRpb24gXSA9IG9wdGlvbnM7XG5cblx0aWYgKCAhZmlyc3RPcHRpb24gKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKCBvcHRpb25zLnNvbWUoIG9wdGlvbiA9PiAnJyA9PT0gb3B0aW9uLnZhbHVlICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKCBvcHRpb25zLnNvbWUoIG9wdGlvbiA9PiBvcHRpb24uZGVmYXVsdFNlbGVjdGVkICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQwID09PSBub2RlLnNlbGVjdGVkSW5kZXggJiZcblx0XHRub2RlLnZhbHVlID09PSBmaXJzdE9wdGlvbi52YWx1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBhcHBseVJlc29sdmVkVmFsdWUoIGlucHV0LCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdGlucHV0LnZhbHVlLnNldElmRW1wdHkoXG5cdFx0XHR2YWx1ZS5tYXAoXG5cdFx0XHRcdGN1cnJlbnQgPT4gc3RyaXBXcmFwcGluZ1F1b3RlcyggJycgKyBjdXJyZW50ICksXG5cdFx0XHQpLFxuXHRcdCk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkID0gc3RyaXBXcmFwcGluZ1F1b3RlcyggJycgKyB2YWx1ZSApO1xuXG5cdGlmICggIWlucHV0LmlzQXJyYXkoKSApIHtcblx0XHRpZiAoIGNhbk92ZXJyaWRlQXV0b1NlbGVjdGVkU2luZ2xlU2VsZWN0KCBpbnB1dCApICkge1xuXHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCA9IG5vcm1hbGl6ZWQ7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpbnB1dC52YWx1ZS5zZXRJZkVtcHR5KCBub3JtYWxpemVkICk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBuZXh0VmFsdWUgPSBwYXJzZUFycmF5TGlrZVZhbHVlKCBub3JtYWxpemVkICk7XG5cblx0aW5wdXQudmFsdWUuc2V0SWZFbXB0eShcblx0XHRBcnJheS5pc0FycmF5KCBuZXh0VmFsdWUgKVxuXHRcdFx0PyBuZXh0VmFsdWUubWFwKCBjdXJyZW50ID0+IHN0cmlwV3JhcHBpbmdRdW90ZXMoICcnICsgY3VycmVudCApIClcblx0XHRcdDogWyBub3JtYWxpemVkIF0sXG5cdCk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVEZWZhdWx0VmFsdWUoIGlucHV0LCBkZWZhdWx0VmFsdWUgKSB7XG5cdGNvbnN0IHZhbHVlcyAgID0gQXJyYXkuaXNBcnJheSggZGVmYXVsdFZhbHVlICkgPyBkZWZhdWx0VmFsdWUgOiBbIGRlZmF1bHRWYWx1ZSBdO1xuXHRjb25zdCBmb3JtdWxhcyA9IFtdO1xuXHRjb25zdCByZXN1bHRzICA9IG5ldyBBcnJheSggdmFsdWVzLmxlbmd0aCApO1xuXG5cdGNvbnN0IG1heWJlQXBwbHkgPSAoKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0T2JqZWN0LmtleXMoIHJlc3VsdHMgKS5sZW5ndGggIT09IHZhbHVlcy5sZW5ndGggfHxcblx0XHRcdCFyZXN1bHRzLmV2ZXJ5KCBpc1Jlc29sdmVkIClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhcHBseVJlc29sdmVkVmFsdWUoXG5cdFx0XHRpbnB1dCxcblx0XHRcdEFycmF5LmlzQXJyYXkoIGRlZmF1bHRWYWx1ZSApID8gcmVzdWx0cyA6IHJlc3VsdHNbIDAgXSxcblx0XHQpO1xuXG5cdFx0Zm9ybXVsYXMuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50LmNsZWFyV2F0Y2hlcnMoKSApO1xuXHR9O1xuXG5cdHZhbHVlcy5mb3JFYWNoKCAoIGN1cnJlbnRWYWx1ZSwgaW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggaW5wdXQgKTtcblxuXHRcdGZvcm11bGEub2JzZXJ2ZSggcHJlcGFyZUZvcm11bGFWYWx1ZSggY3VycmVudFZhbHVlICkgKTtcblx0XHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cblx0XHRcdGlmICggIWlzUmVzb2x2ZWQoIHJlc3VsdCApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdHNbIGluZGV4IF0gPSByZXN1bHQ7XG5cdFx0XHRtYXliZUFwcGx5KCk7XG5cdFx0fTtcblxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdFx0Zm9ybXVsYXMucHVzaCggZm9ybXVsYSApO1xuXHR9ICk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5T3B0aW9uRmllbGREZWZhdWx0KCBpbnB1dCApIHtcblx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2Rlcztcblx0Y29uc3QgZmllbGRXcmFwcGVyID0gaW5wdXQud3JhcHBlciA/PyBub2RlO1xuXHRjb25zdCByYXdEZWZhdWx0ID0gKFxuXHRcdGZpZWxkV3JhcHBlcj8uZGF0YXNldD8uZGVmYXVsdFZhbCA/P1xuXHRcdG5vZGU/LmRhdGFzZXQ/LmRlZmF1bHRWYWwgPz9cblx0XHQnJ1xuXHQpO1xuXHRjb25zdCBkZWZhdWx0VmFsdWUgPSBwYXJzZURlZmF1bHRWYWx1ZSggcmF3RGVmYXVsdCApO1xuXG5cdGlmICggIXNob3VsZEhhbmRsZURlZmF1bHRWYWx1ZSggcmF3RGVmYXVsdCwgZGVmYXVsdFZhbHVlICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0b2JzZXJ2ZURlZmF1bHRWYWx1ZSggaW5wdXQsIGRlZmF1bHRWYWx1ZSApO1xufVxuXG5pZiAoICF3aW5kb3dbIE9CU0VSVkVSX0ZMQUcgXSApIHtcblx0d2luZG93WyBPQlNFUlZFUl9GTEFHIF0gPSB0cnVlO1xuXG5cdGFkZEFjdGlvbihcblx0XHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL29wdGlvbi1maWVsZC1kZWZhdWx0LXZhbHVlJyxcblx0XHRmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiBvYnNlcnZhYmxlLmdldElucHV0cygpICkge1xuXHRcdFx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhbm9kZSB8fFxuXHRcdFx0XHRcdCFbXG5cdFx0XHRcdFx0XHQnc2VsZWN0Jyxcblx0XHRcdFx0XHRcdCdyYWRpbycsXG5cdFx0XHRcdFx0XHQnY2hlY2tib3gnLFxuXHRcdFx0XHRcdF0uaW5jbHVkZXMoIGlucHV0LmlucHV0VHlwZSApXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXBwbHlPcHRpb25GaWVsZERlZmF1bHQoIGlucHV0ICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDaGVja2JveERhdGEgZnJvbSAnLi9DaGVja2JveERhdGEnO1xuaW1wb3J0ICcuLi8uLi9kZWZhdWx0LXZhbHVlL21haW4nO1xuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4ud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QsXG5cdENoZWNrYm94RGF0YSxcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9jaGVja2JveC1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgQ2hlY2tib3hEYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9