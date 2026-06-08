/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/radio/RadioData.js"
/*!********************************************!*\
  !*** ./frontend/blocks/radio/RadioData.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  strict_mode = false
} = window?.JetFormBuilderSettings;
const STRICT_MODE = Boolean(strict_mode);
const {
  InputData,
  ReactiveHook
} = JetFormBuilderAbstract;
const {
  getParsedName
} = JetFormBuilderFunctions;
function RadioData() {
  InputData.call(this);
  this.wrapper = null;
}
RadioData.prototype = Object.create(InputData.prototype);
RadioData.prototype.wrapper = null;
RadioData.prototype.isSupported = function (node) {
  return node.classList.contains('checkradio-wrap') && node.querySelector('.radio-wrap');
};
RadioData.prototype.addListeners = function () {
  this.enterKey = new ReactiveHook();
  this.wrapper.addEventListener('change', this.onChangeValue.bind(this));
  this.wrapper.addEventListener('keydown', this.handleEnterKey.bind(this));
  const input = this.getCustomInput();
  this.wrapper.addEventListener('focusout', event => {
    if ([...this.nodes].includes(event?.relatedTarget) || [event.relatedTarget, event.target].includes(input)) {
      return;
    }
    this.reportOnBlur();
  });
  input?.addEventListener?.('blur', event => {
    const prevValue = this.value.current;

    // update this.value.current
    this.setValue();

    // trigger signals & reporting
    if (prevValue === this.value.current) {
      this.onChange(prevValue);
    }
  });
  !STRICT_MODE && jQuery(this.wrapper).on('change', event => {
    if (this.value.current == event.target.value || event.target?.dataset?.custom) {
      return;
    }
    this.callable.lockTrigger();
    this.setValue();
    this.callable.unlockTrigger();
  });
};
RadioData.prototype.setValue = function () {
  this.value.current = this.getActiveValue();
};
RadioData.prototype.onChangeValue = function (event) {
  event.target.dataset.custom ? this.toggleCustomOption() : this.setValue();
};
RadioData.prototype.toggleCustomOption = function () {
  const node = this.lastNode();
  const input = this.getCustomInput();
  if (input.disabled === node.checked) {
    input.disabled = !node.checked;
  }
  if (node.checked) {
    input.focus();
  }
};
RadioData.prototype.getActiveValue = function () {
  for (const node of this.nodes) {
    if (node.dataset.custom) {
      continue;
    }
    if (node.checked) {
      return node.value;
    }
  }
  if (!this.hasCustom) {
    return '';
  }
  return this.getCustomInput().value;
};
RadioData.prototype.setNode = function (node) {
  node.jfbSync = this;
  /**
   * It should be live collection for the case when items may change
   */
  this.nodes = node.getElementsByClassName('jet-form-builder__field radio-field');
  this.rawName = this.nodes[0].name;
  this.name = getParsedName(this.rawName);
  this.inputType = 'radio';

  /**
   * @type {HTMLElement|HTMLInputElement}
   */
  this.wrapper = node;
  this.hasCustom = !!this.lastNode()?.dataset?.custom;
};
RadioData.prototype.lastNode = function () {
  return this.nodes[this.nodes.length - 1];
};
RadioData.prototype.getCustomInput = function () {
  const lastWrapper = this.lastNode().closest('.custom-option');
  return lastWrapper?.querySelector?.('input.text-field');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioData);

/***/ },

/***/ "./frontend/blocks/radio/SignalRadio.js"
/*!**********************************************!*\
  !*** ./frontend/blocks/radio/SignalRadio.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;

/**
 * @property input {RadioData}
 */
function SignalRadio() {
  BaseSignal.call(this);
  this.isSupported = function (node, inputData) {
    return 'radio' === node.type;
  };
  this.runSignal = function () {
    this.input.calcValue = 0;
    const currentValue = this.input.value.current;
    let hasMatch = false;
    for (const node of this.input.nodes) {
      var _node$dataset$calcula;
      if (node.dataset.custom) {
        continue;
      }
      node.checked = '' + currentValue === node.value;
      if (!node.checked) {
        continue;
      }
      hasMatch = true;
      this.input.calcValue += parseFloat((_node$dataset$calcula = node.dataset?.calculate) !== null && _node$dataset$calcula !== void 0 ? _node$dataset$calcula : node.value);
      this.triggerJQuery(node);
      break;
    }
    if (!this.input.hasCustom) {
      return;
    }
    const lastNode = this.input.lastNode();
    const input = this.input.getCustomInput();
    const useCustom = !hasMatch && '' !== currentValue && null !== currentValue && undefined !== currentValue;
    lastNode.checked = useCustom;
    if (input.disabled === lastNode.checked) {
      input.disabled = !lastNode.checked;
    }
    const value = '' + currentValue;
    if (!lastNode.checked || input.value === value) {
      return;
    }
    input.value = value;
  };
}
SignalRadio.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalRadio);

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

/***/ "./frontend/blocks/radio/index.pcss"
/*!******************************************!*\
  !*** ./frontend/blocks/radio/index.pcss ***!
  \******************************************/
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
/*!***************************************!*\
  !*** ./frontend/blocks/radio/main.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioData */ "./frontend/blocks/radio/RadioData.js");
/* harmony import */ var _SignalRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignalRadio */ "./frontend/blocks/radio/SignalRadio.js");
/* harmony import */ var _default_value_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../default-value/main */ "./frontend/default-value/main.js");
/* harmony import */ var _default_value_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_default_value_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pcss */ "./frontend/blocks/radio/index.pcss");




const {
  addFilter
} = JetPlugins.hooks;
window.JetFormBuilderAbstract = {
  ...window.JetFormBuilderAbstract,
  RadioData: _RadioData__WEBPACK_IMPORTED_MODULE_0__["default"],
  SignalRadio: _SignalRadio__WEBPACK_IMPORTED_MODULE_1__["default"]
};
addFilter('jet.fb.inputs', 'jet-form-builder/radio-field', function (inputs) {
  inputs = [_RadioData__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/radio-field', function (signals) {
  signals = [_SignalRadio__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNwVUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3JhZGlvL1JhZGlvRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3JhZGlvL1NpZ25hbFJhZGlvLmpzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvLi9mcm9udGVuZC9kZWZhdWx0LXZhbHVlL21haW4uanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9pbmRleC5wY3NzPzFmM2QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9yYWRpby9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgc3RyaWN0X21vZGUgPSBmYWxzZSB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG5jb25zdCBTVFJJQ1RfTU9ERSA9IEJvb2xlYW4oIHN0cmljdF9tb2RlICk7XG5cbmNvbnN0IHtcblx0ICAgICAgSW5wdXREYXRhLFxuXHQgICAgICBSZWFjdGl2ZUhvb2ssXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3QgeyBnZXRQYXJzZWROYW1lIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuZnVuY3Rpb24gUmFkaW9EYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud3JhcHBlciA9IG51bGw7XG59XG5cblJhZGlvRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cblJhZGlvRGF0YS5wcm90b3R5cGUud3JhcHBlciA9IG51bGw7XG5cblJhZGlvRGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRyZXR1cm4gKFxuXHRcdG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2hlY2tyYWRpby13cmFwJyApICYmXG5cdFx0bm9kZS5xdWVyeVNlbGVjdG9yKCAnLnJhZGlvLXdyYXAnIClcblx0KTtcbn07XG5SYWRpb0RhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblxuXHR0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIHRoaXMub25DaGFuZ2VWYWx1ZS5iaW5kKCB0aGlzICkgKTtcblx0dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2tleWRvd24nLFxuXHRcdHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApLFxuXHQpO1xuXG5cdGNvbnN0IGlucHV0ID0gdGhpcy5nZXRDdXN0b21JbnB1dCgpO1xuXG5cdHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNvdXQnLCBldmVudCA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0WyAuLi50aGlzLm5vZGVzIF0uaW5jbHVkZXMoIGV2ZW50Py5yZWxhdGVkVGFyZ2V0ICkgfHxcblx0XHRcdFsgZXZlbnQucmVsYXRlZFRhcmdldCwgZXZlbnQudGFyZ2V0IF0uaW5jbHVkZXMoIGlucHV0IClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5yZXBvcnRPbkJsdXIoKTtcblx0fSApO1xuXG5cdGlucHV0Py5hZGRFdmVudExpc3RlbmVyPy4oICdibHVyJywgZXZlbnQgPT4ge1xuXHRcdGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRcdC8vIHVwZGF0ZSB0aGlzLnZhbHVlLmN1cnJlbnRcblx0XHR0aGlzLnNldFZhbHVlKCk7XG5cblx0XHQvLyB0cmlnZ2VyIHNpZ25hbHMgJiByZXBvcnRpbmdcblx0XHRpZiAoIHByZXZWYWx1ZSA9PT0gdGhpcy52YWx1ZS5jdXJyZW50ICkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZSggcHJldlZhbHVlICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0IVNUUklDVF9NT0RFICYmIGpRdWVyeSggdGhpcy53cmFwcGVyICkub24oICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSB8fFxuXHRcdFx0ZXZlbnQudGFyZ2V0Py5kYXRhc2V0Py5jdXN0b21cblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xuXHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHR0aGlzLmNhbGxhYmxlLnVubG9ja1RyaWdnZXIoKTtcblx0fSApO1xufTtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xufTtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS5vbkNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0ZXZlbnQudGFyZ2V0LmRhdGFzZXQuY3VzdG9tID8gdGhpcy50b2dnbGVDdXN0b21PcHRpb24oKSA6IHRoaXMuc2V0VmFsdWUoKTtcbn1cblxuUmFkaW9EYXRhLnByb3RvdHlwZS50b2dnbGVDdXN0b21PcHRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IG5vZGUgID0gdGhpcy5sYXN0Tm9kZSgpO1xuXHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0Q3VzdG9tSW5wdXQoKTtcblxuXHRpZiAoIGlucHV0LmRpc2FibGVkID09PSBub2RlLmNoZWNrZWQgKSB7XG5cdFx0aW5wdXQuZGlzYWJsZWQgPSAhbm9kZS5jaGVja2VkO1xuXHR9XG5cblx0aWYgKCBub2RlLmNoZWNrZWQgKSB7XG5cdFx0aW5wdXQuZm9jdXMoKTtcblx0fVxuXG59O1xuXG5SYWRpb0RhdGEucHJvdG90eXBlLmdldEFjdGl2ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZXMgKSB7XG5cdFx0aWYgKCBub2RlLmRhdGFzZXQuY3VzdG9tICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICggbm9kZS5jaGVja2VkICkge1xuXHRcdFx0cmV0dXJuIG5vZGUudmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhdGhpcy5oYXNDdXN0b20gKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMuZ2V0Q3VzdG9tSW5wdXQoKS52YWx1ZTtcbn07XG5cblJhZGlvRGF0YS5wcm90b3R5cGUuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0bm9kZS5qZmJTeW5jID0gdGhpcztcblx0LyoqXG5cdCAqIEl0IHNob3VsZCBiZSBsaXZlIGNvbGxlY3Rpb24gZm9yIHRoZSBjYXNlIHdoZW4gaXRlbXMgbWF5IGNoYW5nZVxuXHQgKi9cblx0dGhpcy5ub2RlcyA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcblx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQgcmFkaW8tZmllbGQnICk7XG5cblx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5vZGVzWyAwIF0ubmFtZTtcblx0dGhpcy5uYW1lICAgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcblx0dGhpcy5pbnB1dFR5cGUgPSAncmFkaW8nO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cblx0ICovXG5cdHRoaXMud3JhcHBlciA9IG5vZGU7XG5cblx0dGhpcy5oYXNDdXN0b20gPSAhIShcblx0XHR0aGlzLmxhc3ROb2RlKCk/LmRhdGFzZXQ/LmN1c3RvbVxuXHQpO1xufTtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS5sYXN0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubm9kZXNbIHRoaXMubm9kZXMubGVuZ3RoIC0gMSBdO1xufTtcblxuUmFkaW9EYXRhLnByb3RvdHlwZS5nZXRDdXN0b21JbnB1dCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgbGFzdFdyYXBwZXIgPSB0aGlzLmxhc3ROb2RlKCkuY2xvc2VzdCggJy5jdXN0b20tb3B0aW9uJyApO1xuXG5cdHJldHVybiBsYXN0V3JhcHBlcj8ucXVlcnlTZWxlY3Rvcj8uKCAnaW5wdXQudGV4dC1maWVsZCcgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvRGF0YTsiLCJjb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5wdXQge1JhZGlvRGF0YX1cbiAqL1xuZnVuY3Rpb24gU2lnbmFsUmFkaW8oKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0XHRyZXR1cm4gJ3JhZGlvJyA9PT0gbm9kZS50eXBlO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gMDtcblx0XHRjb25zdCBjdXJyZW50VmFsdWUgICA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblx0XHRsZXQgaGFzTWF0Y2ggICAgICAgICA9IGZhbHNlO1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLmlucHV0Lm5vZGVzICkge1xuXHRcdFx0aWYgKCBub2RlLmRhdGFzZXQuY3VzdG9tICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdG5vZGUuY2hlY2tlZCA9ICcnICsgY3VycmVudFZhbHVlID09PSBub2RlLnZhbHVlO1xuXG5cdFx0XHRpZiAoICFub2RlLmNoZWNrZWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRoYXNNYXRjaCA9IHRydWU7XG5cblx0XHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlICs9IHBhcnNlRmxvYXQoXG5cdFx0XHRcdG5vZGUuZGF0YXNldD8uY2FsY3VsYXRlID8/IG5vZGUudmFsdWUsXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMuaW5wdXQuaGFzQ3VzdG9tICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxhc3ROb2RlID0gdGhpcy5pbnB1dC5sYXN0Tm9kZSgpO1xuXHRcdGNvbnN0IGlucHV0ICAgID0gdGhpcy5pbnB1dC5nZXRDdXN0b21JbnB1dCgpO1xuXHRcdGNvbnN0IHVzZUN1c3RvbSA9IChcblx0XHRcdCFoYXNNYXRjaCAmJlxuXHRcdFx0JycgIT09IGN1cnJlbnRWYWx1ZSAmJlxuXHRcdFx0bnVsbCAhPT0gY3VycmVudFZhbHVlICYmXG5cdFx0XHR1bmRlZmluZWQgIT09IGN1cnJlbnRWYWx1ZVxuXHRcdCk7XG5cblx0XHRsYXN0Tm9kZS5jaGVja2VkID0gdXNlQ3VzdG9tO1xuXG5cdFx0aWYgKCBpbnB1dC5kaXNhYmxlZCA9PT0gbGFzdE5vZGUuY2hlY2tlZCApIHtcblx0XHRcdGlucHV0LmRpc2FibGVkID0gIWxhc3ROb2RlLmNoZWNrZWQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWUgPSAnJyArIGN1cnJlbnRWYWx1ZTtcblxuXHRcdGlmICggIWxhc3ROb2RlLmNoZWNrZWQgfHwgaW5wdXQudmFsdWUgPT09IHZhbHVlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlucHV0LnZhbHVlID0gdmFsdWU7XG5cdH07XG59XG5cblNpZ25hbFJhZGlvLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJhZGlvO1xuIiwiY29uc3Qge1xuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBPQlNFUlZFUl9GTEFHID0gJ19fSkZCX09QVElPTl9GSUVMRF9ERUZBVUxUX1ZBTFVFX09CU0VSVkVSX18nO1xuXG5mdW5jdGlvbiBzdHJpcFdyYXBwaW5nUXVvdGVzKCB2YWx1ZSApIHtcblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIHZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8IDIgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3QgZmlyc3QgPSB2YWx1ZS5jaGFyQXQoIDAgKTtcblx0Y29uc3QgbGFzdCAgPSB2YWx1ZS5jaGFyQXQoIHZhbHVlLmxlbmd0aCAtIDEgKTtcblxuXHRpZiAoXG5cdFx0KCAnXFwnJyA9PT0gZmlyc3QgJiYgJ1xcJycgPT09IGxhc3QgKSB8fFxuXHRcdCggJ1wiJyA9PT0gZmlyc3QgJiYgJ1wiJyA9PT0gbGFzdCApXG5cdCkge1xuXHRcdHJldHVybiB2YWx1ZS5zbGljZSggMSwgLTEgKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEZWZhdWx0VmFsdWUoIHZhbHVlICkge1xuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoIG5vcm1hbGl6ZWQgKTtcblxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBwYXJzZWQgKSA/IHBhcnNlZCA6IG5vcm1hbGl6ZWQ7XG5cdH1cblx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRpZiAoXG5cdFx0XHRub3JtYWxpemVkLnN0YXJ0c1dpdGgoICdbJyApICYmXG5cdFx0XHRub3JtYWxpemVkLmVuZHNXaXRoKCAnXScgKSAmJlxuXHRcdFx0bm9ybWFsaXplZC5pbmNsdWRlcyggJ1xcJycgKVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3Qgbm9ybWFsaXplZEpzb24gPSBub3JtYWxpemVkLnJlcGxhY2UoXG5cdFx0XHRcdFx0LycoKD86XFxcXCd8W14nXSkqKScvZyxcblx0XHRcdFx0XHQoIG1hdGNoLCBjdXJyZW50ICkgPT4gYFwiJHsgY3VycmVudC5yZXBsYWNlKCAvXCIvZywgJ1xcXFxcIicgKSB9XCJgLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKCBub3JtYWxpemVkSnNvbiApO1xuXG5cdFx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBwYXJzZWQgKSA/IHBhcnNlZCA6IG5vcm1hbGl6ZWQ7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoIGZhbGxiYWNrRXJyb3IgKSB7XG5cdFx0XHRcdHJldHVybiBub3JtYWxpemVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBub3JtYWxpemVkO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJyYXlMaWtlVmFsdWUoIHZhbHVlICkge1xuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoIG5vcm1hbGl6ZWQgKTtcblxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBwYXJzZWQgKSA/IHBhcnNlZCA6IHZhbHVlO1xuXHR9XG5cdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0aWYgKFxuXHRcdFx0bm9ybWFsaXplZC5zdGFydHNXaXRoKCAnWycgKSAmJlxuXHRcdFx0bm9ybWFsaXplZC5lbmRzV2l0aCggJ10nICkgJiZcblx0XHRcdG5vcm1hbGl6ZWQuaW5jbHVkZXMoICdcXCcnIClcblx0XHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRKc29uID0gbm9ybWFsaXplZC5yZXBsYWNlKFxuXHRcdFx0XHRcdC8nKCg/OlxcXFwnfFteJ10pKiknL2csXG5cdFx0XHRcdFx0KCBtYXRjaCwgY3VycmVudCApID0+IGBcIiR7IGN1cnJlbnQucmVwbGFjZSggL1wiL2csICdcXFxcXCInICkgfVwiYCxcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSggbm9ybWFsaXplZEpzb24gKTtcblxuXHRcdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSggcGFyc2VkICkgPyBwYXJzZWQgOiB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdGNhdGNoICggZmFsbGJhY2tFcnJvciApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYXNNYWNyb1ZhbHVlKCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZS5zb21lKCBoYXNNYWNyb1ZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5pbmNsdWRlcyggJyUnICk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZEhhbmRsZURlZmF1bHRWYWx1ZSggcmF3VmFsdWUsIHBhcnNlZFZhbHVlICkge1xuXHRpZiAoIEFycmF5LmlzQXJyYXkoIHBhcnNlZFZhbHVlICkgKSB7XG5cdFx0cmV0dXJuIHBhcnNlZFZhbHVlLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2YgcmF3VmFsdWUgKSB7XG5cdFx0cmV0dXJuIGhhc01hY3JvVmFsdWUoIHBhcnNlZFZhbHVlICk7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkID0gcmF3VmFsdWUudHJpbSgpO1xuXG5cdHJldHVybiAoXG5cdFx0aGFzTWFjcm9WYWx1ZSggcGFyc2VkVmFsdWUgKSB8fFxuXHRcdChcblx0XHRcdG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCggJ1snICkgJiZcblx0XHRcdG5vcm1hbGl6ZWQuZW5kc1dpdGgoICddJyApXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBpc1F1b3RlZFN0cmluZyggdmFsdWUgKSB7XG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiB2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPCAyICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IGZpcnN0ID0gdmFsdWUuY2hhckF0KCAwICk7XG5cdGNvbnN0IGxhc3QgID0gdmFsdWUuY2hhckF0KCB2YWx1ZS5sZW5ndGggLSAxICk7XG5cblx0cmV0dXJuIChcblx0XHQoICdcXCcnID09PSBmaXJzdCAmJiAnXFwnJyA9PT0gbGFzdCApIHx8XG5cdFx0KCAnXCInID09PSBmaXJzdCAmJiAnXCInID09PSBsYXN0IClcblx0KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUZvcm11bGFWYWx1ZSggdmFsdWUgKSB7XG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkID0gdmFsdWUudHJpbSgpO1xuXG5cdGlmICggIWhhc01hY3JvVmFsdWUoIG5vcm1hbGl6ZWQgKSB8fCBpc1F1b3RlZFN0cmluZyggbm9ybWFsaXplZCApICkge1xuXHRcdHJldHVybiBub3JtYWxpemVkO1xuXHR9XG5cblx0Ly8gRXhhY3QtbWF0Y2ggb3B0aW9uIGRlZmF1bHRzIHNob3VsZCByZXNvbHZlIHRvIHN0cmluZyB2YWx1ZXMsIG5vdCBiYXJlIEpTIGlkZW50aWZpZXJzLlxuXHRyZXR1cm4gYCcke1xuXHRcdG5vcm1hbGl6ZWQucmVwbGFjZSggLycvZywgJ1xcXFxcXCcnIClcblx0fSdgO1xufVxuXG5mdW5jdGlvbiBpc1Jlc29sdmVkKCB2YWx1ZSApIHtcblx0cmV0dXJuICEoXG5cdFx0JycgPT09IHZhbHVlIHx8XG5cdFx0bnVsbCA9PT0gdmFsdWUgfHxcblx0XHQoXG5cdFx0XHRBcnJheS5pc0FycmF5KCB2YWx1ZSApICYmXG5cdFx0XHQhdmFsdWUubGVuZ3RoXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBjYW5PdmVycmlkZUF1dG9TZWxlY3RlZFNpbmdsZVNlbGVjdCggaW5wdXQgKSB7XG5cdGlmICggaW5wdXQuaXNBcnJheSgpIHx8ICdzZWxlY3QnICE9PSBpbnB1dC5pbnB1dFR5cGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRpZiAoXG5cdFx0IW5vZGUgfHxcblx0XHQnc2VsZWN0LW9uZScgIT09IG5vZGUudHlwZSB8fFxuXHRcdG5vZGUubXVsdGlwbGUgfHxcblx0XHQhbm9kZS5vcHRpb25zPy5sZW5ndGhcblx0KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20oIG5vZGUub3B0aW9ucyApO1xuXHRjb25zdCBbIGZpcnN0T3B0aW9uIF0gPSBvcHRpb25zO1xuXG5cdGlmICggIWZpcnN0T3B0aW9uICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggb3B0aW9ucy5zb21lKCBvcHRpb24gPT4gJycgPT09IG9wdGlvbi52YWx1ZSApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggb3B0aW9ucy5zb21lKCBvcHRpb24gPT4gb3B0aW9uLmRlZmF1bHRTZWxlY3RlZCApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0MCA9PT0gbm9kZS5zZWxlY3RlZEluZGV4ICYmXG5cdFx0bm9kZS52YWx1ZSA9PT0gZmlyc3RPcHRpb24udmFsdWVcblx0KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlSZXNvbHZlZFZhbHVlKCBpbnB1dCwgdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRpbnB1dC52YWx1ZS5zZXRJZkVtcHR5KFxuXHRcdFx0dmFsdWUubWFwKFxuXHRcdFx0XHRjdXJyZW50ID0+IHN0cmlwV3JhcHBpbmdRdW90ZXMoICcnICsgY3VycmVudCApLFxuXHRcdFx0KSxcblx0XHQpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZCA9IHN0cmlwV3JhcHBpbmdRdW90ZXMoICcnICsgdmFsdWUgKTtcblxuXHRpZiAoICFpbnB1dC5pc0FycmF5KCkgKSB7XG5cdFx0aWYgKCBjYW5PdmVycmlkZUF1dG9TZWxlY3RlZFNpbmdsZVNlbGVjdCggaW5wdXQgKSApIHtcblx0XHRcdGlucHV0LnZhbHVlLmN1cnJlbnQgPSBub3JtYWxpemVkO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW5wdXQudmFsdWUuc2V0SWZFbXB0eSggbm9ybWFsaXplZCApO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbmV4dFZhbHVlID0gcGFyc2VBcnJheUxpa2VWYWx1ZSggbm9ybWFsaXplZCApO1xuXG5cdGlucHV0LnZhbHVlLnNldElmRW1wdHkoXG5cdFx0QXJyYXkuaXNBcnJheSggbmV4dFZhbHVlIClcblx0XHRcdD8gbmV4dFZhbHVlLm1hcCggY3VycmVudCA9PiBzdHJpcFdyYXBwaW5nUXVvdGVzKCAnJyArIGN1cnJlbnQgKSApXG5cdFx0XHQ6IFsgbm9ybWFsaXplZCBdLFxuXHQpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGVmYXVsdFZhbHVlKCBpbnB1dCwgZGVmYXVsdFZhbHVlICkge1xuXHRjb25zdCB2YWx1ZXMgICA9IEFycmF5LmlzQXJyYXkoIGRlZmF1bHRWYWx1ZSApID8gZGVmYXVsdFZhbHVlIDogWyBkZWZhdWx0VmFsdWUgXTtcblx0Y29uc3QgZm9ybXVsYXMgPSBbXTtcblx0Y29uc3QgcmVzdWx0cyAgPSBuZXcgQXJyYXkoIHZhbHVlcy5sZW5ndGggKTtcblxuXHRjb25zdCBtYXliZUFwcGx5ID0gKCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdE9iamVjdC5rZXlzKCByZXN1bHRzICkubGVuZ3RoICE9PSB2YWx1ZXMubGVuZ3RoIHx8XG5cdFx0XHQhcmVzdWx0cy5ldmVyeSggaXNSZXNvbHZlZCApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXBwbHlSZXNvbHZlZFZhbHVlKFxuXHRcdFx0aW5wdXQsXG5cdFx0XHRBcnJheS5pc0FycmF5KCBkZWZhdWx0VmFsdWUgKSA/IHJlc3VsdHMgOiByZXN1bHRzWyAwIF0sXG5cdFx0KTtcblxuXHRcdGZvcm11bGFzLmZvckVhY2goIGN1cnJlbnQgPT4gY3VycmVudC5jbGVhcldhdGNoZXJzKCkgKTtcblx0fTtcblxuXHR2YWx1ZXMuZm9yRWFjaCggKCBjdXJyZW50VmFsdWUsIGluZGV4ICkgPT4ge1xuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XG5cblx0XHRmb3JtdWxhLm9ic2VydmUoIHByZXBhcmVGb3JtdWxhVmFsdWUoIGN1cnJlbnRWYWx1ZSApICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXG5cdFx0XHRpZiAoICFpc1Jlc29sdmVkKCByZXN1bHQgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHRzWyBpbmRleCBdID0gcmVzdWx0O1xuXHRcdFx0bWF5YmVBcHBseSgpO1xuXHRcdH07XG5cblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXHRcdGZvcm11bGFzLnB1c2goIGZvcm11bGEgKTtcblx0fSApO1xufVxuXG5mdW5jdGlvbiBhcHBseU9wdGlvbkZpZWxkRGVmYXVsdCggaW5wdXQgKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cdGNvbnN0IGZpZWxkV3JhcHBlciA9IGlucHV0LndyYXBwZXIgPz8gbm9kZTtcblx0Y29uc3QgcmF3RGVmYXVsdCA9IChcblx0XHRmaWVsZFdyYXBwZXI/LmRhdGFzZXQ/LmRlZmF1bHRWYWwgPz9cblx0XHRub2RlPy5kYXRhc2V0Py5kZWZhdWx0VmFsID8/XG5cdFx0Jydcblx0KTtcblx0Y29uc3QgZGVmYXVsdFZhbHVlID0gcGFyc2VEZWZhdWx0VmFsdWUoIHJhd0RlZmF1bHQgKTtcblxuXHRpZiAoICFzaG91bGRIYW5kbGVEZWZhdWx0VmFsdWUoIHJhd0RlZmF1bHQsIGRlZmF1bHRWYWx1ZSApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG9ic2VydmVEZWZhdWx0VmFsdWUoIGlucHV0LCBkZWZhdWx0VmFsdWUgKTtcbn1cblxuaWYgKCAhd2luZG93WyBPQlNFUlZFUl9GTEFHIF0gKSB7XG5cdHdpbmRvd1sgT0JTRVJWRVJfRkxBRyBdID0gdHJ1ZTtcblxuXHRhZGRBY3Rpb24oXG5cdFx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlci9vcHRpb24tZmllbGQtZGVmYXVsdC12YWx1ZScsXG5cdFx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHRcdFx0Zm9yICggY29uc3QgaW5wdXQgb2Ygb2JzZXJ2YWJsZS5nZXRJbnB1dHMoKSApIHtcblx0XHRcdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IW5vZGUgfHxcblx0XHRcdFx0XHQhW1xuXHRcdFx0XHRcdFx0J3NlbGVjdCcsXG5cdFx0XHRcdFx0XHQncmFkaW8nLFxuXHRcdFx0XHRcdFx0J2NoZWNrYm94Jyxcblx0XHRcdFx0XHRdLmluY2x1ZGVzKCBpbnB1dC5pbnB1dFR5cGUgKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFwcGx5T3B0aW9uRmllbGREZWZhdWx0KCBpbnB1dCApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmFkaW9EYXRhIGZyb20gJy4vUmFkaW9EYXRhJztcbmltcG9ydCBTaWduYWxSYWRpbyBmcm9tICcuL1NpZ25hbFJhZGlvJztcbmltcG9ydCAnLi4vLi4vZGVmYXVsdC12YWx1ZS9tYWluJztcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0LFxuXHRSYWRpb0RhdGEsXG5cdFNpZ25hbFJhZGlvLFxufTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JhZGlvLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBSYWRpb0RhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmFkaW8tZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmFkaW8sIC4uLnNpZ25hbHMgXTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==