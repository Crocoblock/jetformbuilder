/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/select/input.js"
/*!*****************************************!*\
  !*** ./frontend/blocks/select/input.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  InputData,
  ReactiveHook
} = JetFormBuilderAbstract;
function MultiSelectData() {
  InputData.call(this);
  function sanitizeValue(value) {
    if (Array.isArray(value)) {
      if (value.length === 1 && value[0] && value[0].includes(',')) {
        value = value[0].split(',');
      }
      return value;
    }
    return [value].filter(Boolean);
  }
  this.isSupported = function (node) {
    return 'select-multiple' === node?.type;
  };
  this.addListeners = function () {
    this.sanitize(value => Array.isArray(value) ? value : [value]);

    /**
     * convert string to array for setting dynamic multi value
     *
     * @see https://github.com/Crocoblock/issues-tracker/issues/8509
     */
    this.sanitize(sanitizeValue);
    const [node] = this.nodes;
    node.addEventListener('change', () => this.setValue());
    node.addEventListener('blur', () => this.reportOnBlur());
    this.enterKey = new ReactiveHook();
    node.addEventListener('keydown', this.handleEnterKey.bind(this));
  };
  this.setValue = function () {
    this.value.current = this.getActiveValue();
  };
  this.getActiveValue = function () {
    const [node] = this.nodes;
    return Array.from(node.options).filter(item => item.selected).map(item => item.value);
  };
  this.onClear = function () {
    this.silenceSet([]);
  };
}
MultiSelectData.prototype = Object.create(InputData.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelectData);

/***/ },

/***/ "./frontend/blocks/select/signal.js"
/*!******************************************!*\
  !*** ./frontend/blocks/select/signal.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;
function SignalSelect() {
  BaseSignal.call(this);
  this.isSupported = function (node, inputData) {
    return ['select-multiple', 'select-one'].includes(node?.type);
  };
  this.runSignal = function () {
    const [node] = this.input.nodes;
    const isMultiple = 'select-one' !== node?.type;
    const {
      value
    } = this.input;
    this.input.calcValue = 0;
    for (const option of node.options) {
      var _option$dataset$calcu;
      option.selected = isMultiple ? value.current?.includes(option.value) : option.value === value.current;
      if (!option.selected) {
        continue;
      }
      this.input.calcValue += parseFloat((_option$dataset$calcu = option.dataset?.calculate) !== null && _option$dataset$calcu !== void 0 ? _option$dataset$calcu : option.value);
    }
    this.triggerJQuery(node);
  };
}
SignalSelect.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalSelect);

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

/***/ "./frontend/blocks/select/main.pcss"
/*!******************************************!*\
  !*** ./frontend/blocks/select/main.pcss ***!
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
/*!****************************************!*\
  !*** ./frontend/blocks/select/main.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/blocks/select/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/blocks/select/signal.js");
/* harmony import */ var _default_value_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../default-value/main */ "./frontend/default-value/main.js");
/* harmony import */ var _default_value_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_default_value_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.pcss */ "./frontend/blocks/select/main.pcss");




const {
  addFilter
} = JetPlugins.hooks;
window.JetFormBuilderAbstract = {
  ...window.JetFormBuilderAbstract,
  MultiSelectData: _input__WEBPACK_IMPORTED_MODULE_0__["default"],
  SignalSelect: _signal__WEBPACK_IMPORTED_MODULE_1__["default"]
};
addFilter('jet.fb.inputs', 'jet-form-builder/select-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/select-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNwVUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3NlbGVjdC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3NlbGVjdC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2RlZmF1bHQtdmFsdWUvbWFpbi5qcyIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkLy4vZnJvbnRlbmQvYmxvY2tzL3NlbGVjdC9tYWluLnBjc3MiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1vcHRpb24tZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItb3B0aW9uLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW9wdGlvbi1maWVsZC8uL2Zyb250ZW5kL2Jsb2Nrcy9zZWxlY3QvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgUmVhY3RpdmVIb29rLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIE11bHRpU2VsZWN0RGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHRmdW5jdGlvbiBzYW5pdGl6ZVZhbHVlKCB2YWx1ZSApIHtcblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cblx0XHRcdGlmICggdmFsdWUubGVuZ3RoID09PSAxICYmIHZhbHVlWzBdICYmIHZhbHVlWzBdLmluY2x1ZGVzKCcsJykgKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbMF0uc3BsaXQoJywnKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBbIHZhbHVlIF0uZmlsdGVyKFxuXHRcdFx0Qm9vbGVhbixcblx0XHQpO1xuXHR9XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gJ3NlbGVjdC1tdWx0aXBsZScgPT09IG5vZGU/LnR5cGU7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5zYW5pdGl6ZSggdmFsdWUgPT4gQXJyYXkuaXNBcnJheSggdmFsdWUgKSA/IHZhbHVlIDogWyB2YWx1ZSBdICk7XG5cblx0XHQvKipcblx0XHQgKiBjb252ZXJ0IHN0cmluZyB0byBhcnJheSBmb3Igc2V0dGluZyBkeW5hbWljIG11bHRpIHZhbHVlXG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy84NTA5XG5cdFx0ICovXG5cdFx0dGhpcy5zYW5pdGl6ZSggc2FuaXRpemVWYWx1ZSApO1xuXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4gdGhpcy5zZXRWYWx1ZSgpICk7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsICgpID0+IHRoaXMucmVwb3J0T25CbHVyKCkgKTtcblxuXHRcdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApICk7XG5cdH07XG5cdHRoaXMuc2V0VmFsdWUgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5nZXRBY3RpdmVWYWx1ZSgpO1xuXHR9O1xuXHR0aGlzLmdldEFjdGl2ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdHJldHVybiBBcnJheS5mcm9tKCBub2RlLm9wdGlvbnMgKS5cblx0XHRcdGZpbHRlciggaXRlbSA9PiBpdGVtLnNlbGVjdGVkICkuXG5cdFx0XHRtYXAoIGl0ZW0gPT4gaXRlbS52YWx1ZSApO1xuXHR9O1xuXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnNpbGVuY2VTZXQoIFtdICk7XG5cdH07XG59XG5cbk11bHRpU2VsZWN0RGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpU2VsZWN0RGF0YTsiLCJjb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gU2lnbmFsU2VsZWN0KCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdFx0cmV0dXJuIFsgJ3NlbGVjdC1tdWx0aXBsZScsICdzZWxlY3Qtb25lJyBdLmluY2x1ZGVzKCBub2RlPy50eXBlICk7XG5cdH07XG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gICA9IHRoaXMuaW5wdXQubm9kZXM7XG5cdFx0Y29uc3QgaXNNdWx0aXBsZSA9ICdzZWxlY3Qtb25lJyAhPT0gbm9kZT8udHlwZTtcblx0XHRjb25zdCB7IHZhbHVlIH0gID0gdGhpcy5pbnB1dDtcblxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gMDtcblx0XHRmb3IgKCBjb25zdCBvcHRpb24gb2Ygbm9kZS5vcHRpb25zICkge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gaXNNdWx0aXBsZVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgPyB2YWx1ZS5jdXJyZW50Py5pbmNsdWRlcyggb3B0aW9uLnZhbHVlIClcblx0XHRcdCAgICAgICAgICAgICAgICAgIDogb3B0aW9uLnZhbHVlID09PSB2YWx1ZS5jdXJyZW50O1xuXG5cdFx0XHRpZiAoICFvcHRpb24uc2VsZWN0ZWQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSArPSBwYXJzZUZsb2F0KFxuXHRcdFx0XHRvcHRpb24uZGF0YXNldD8uY2FsY3VsYXRlID8/IG9wdGlvbi52YWx1ZSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdH07XG59XG5cblNpZ25hbFNlbGVjdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxTZWxlY3Q7IiwiY29uc3Qge1xuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBPQlNFUlZFUl9GTEFHID0gJ19fSkZCX09QVElPTl9GSUVMRF9ERUZBVUxUX1ZBTFVFX09CU0VSVkVSX18nO1xuXG5mdW5jdGlvbiBzdHJpcFdyYXBwaW5nUXVvdGVzKCB2YWx1ZSApIHtcblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIHZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8IDIgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3QgZmlyc3QgPSB2YWx1ZS5jaGFyQXQoIDAgKTtcblx0Y29uc3QgbGFzdCAgPSB2YWx1ZS5jaGFyQXQoIHZhbHVlLmxlbmd0aCAtIDEgKTtcblxuXHRpZiAoXG5cdFx0KCAnXFwnJyA9PT0gZmlyc3QgJiYgJ1xcJycgPT09IGxhc3QgKSB8fFxuXHRcdCggJ1wiJyA9PT0gZmlyc3QgJiYgJ1wiJyA9PT0gbGFzdCApXG5cdCkge1xuXHRcdHJldHVybiB2YWx1ZS5zbGljZSggMSwgLTEgKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEZWZhdWx0VmFsdWUoIHZhbHVlICkge1xuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoIG5vcm1hbGl6ZWQgKTtcblxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBwYXJzZWQgKSA/IHBhcnNlZCA6IG5vcm1hbGl6ZWQ7XG5cdH1cblx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRpZiAoXG5cdFx0XHRub3JtYWxpemVkLnN0YXJ0c1dpdGgoICdbJyApICYmXG5cdFx0XHRub3JtYWxpemVkLmVuZHNXaXRoKCAnXScgKSAmJlxuXHRcdFx0bm9ybWFsaXplZC5pbmNsdWRlcyggJ1xcJycgKVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3Qgbm9ybWFsaXplZEpzb24gPSBub3JtYWxpemVkLnJlcGxhY2UoXG5cdFx0XHRcdFx0LycoKD86XFxcXCd8W14nXSkqKScvZyxcblx0XHRcdFx0XHQoIG1hdGNoLCBjdXJyZW50ICkgPT4gYFwiJHsgY3VycmVudC5yZXBsYWNlKCAvXCIvZywgJ1xcXFxcIicgKSB9XCJgLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKCBub3JtYWxpemVkSnNvbiApO1xuXG5cdFx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBwYXJzZWQgKSA/IHBhcnNlZCA6IG5vcm1hbGl6ZWQ7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoIGZhbGxiYWNrRXJyb3IgKSB7XG5cdFx0XHRcdHJldHVybiBub3JtYWxpemVkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBub3JtYWxpemVkO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJyYXlMaWtlVmFsdWUoIHZhbHVlICkge1xuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZCA9IHZhbHVlLnRyaW0oKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoIG5vcm1hbGl6ZWQgKTtcblxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBwYXJzZWQgKSA/IHBhcnNlZCA6IHZhbHVlO1xuXHR9XG5cdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0aWYgKFxuXHRcdFx0bm9ybWFsaXplZC5zdGFydHNXaXRoKCAnWycgKSAmJlxuXHRcdFx0bm9ybWFsaXplZC5lbmRzV2l0aCggJ10nICkgJiZcblx0XHRcdG5vcm1hbGl6ZWQuaW5jbHVkZXMoICdcXCcnIClcblx0XHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRKc29uID0gbm9ybWFsaXplZC5yZXBsYWNlKFxuXHRcdFx0XHRcdC8nKCg/OlxcXFwnfFteJ10pKiknL2csXG5cdFx0XHRcdFx0KCBtYXRjaCwgY3VycmVudCApID0+IGBcIiR7IGN1cnJlbnQucmVwbGFjZSggL1wiL2csICdcXFxcXCInICkgfVwiYCxcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSggbm9ybWFsaXplZEpzb24gKTtcblxuXHRcdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSggcGFyc2VkICkgPyBwYXJzZWQgOiB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdGNhdGNoICggZmFsbGJhY2tFcnJvciApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoYXNNYWNyb1ZhbHVlKCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZS5zb21lKCBoYXNNYWNyb1ZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5pbmNsdWRlcyggJyUnICk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZEhhbmRsZURlZmF1bHRWYWx1ZSggcmF3VmFsdWUsIHBhcnNlZFZhbHVlICkge1xuXHRpZiAoIEFycmF5LmlzQXJyYXkoIHBhcnNlZFZhbHVlICkgKSB7XG5cdFx0cmV0dXJuIHBhcnNlZFZhbHVlLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2YgcmF3VmFsdWUgKSB7XG5cdFx0cmV0dXJuIGhhc01hY3JvVmFsdWUoIHBhcnNlZFZhbHVlICk7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkID0gcmF3VmFsdWUudHJpbSgpO1xuXG5cdHJldHVybiAoXG5cdFx0aGFzTWFjcm9WYWx1ZSggcGFyc2VkVmFsdWUgKSB8fFxuXHRcdChcblx0XHRcdG5vcm1hbGl6ZWQuc3RhcnRzV2l0aCggJ1snICkgJiZcblx0XHRcdG5vcm1hbGl6ZWQuZW5kc1dpdGgoICddJyApXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBpc1F1b3RlZFN0cmluZyggdmFsdWUgKSB7XG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiB2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPCAyICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNvbnN0IGZpcnN0ID0gdmFsdWUuY2hhckF0KCAwICk7XG5cdGNvbnN0IGxhc3QgID0gdmFsdWUuY2hhckF0KCB2YWx1ZS5sZW5ndGggLSAxICk7XG5cblx0cmV0dXJuIChcblx0XHQoICdcXCcnID09PSBmaXJzdCAmJiAnXFwnJyA9PT0gbGFzdCApIHx8XG5cdFx0KCAnXCInID09PSBmaXJzdCAmJiAnXCInID09PSBsYXN0IClcblx0KTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUZvcm11bGFWYWx1ZSggdmFsdWUgKSB7XG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkID0gdmFsdWUudHJpbSgpO1xuXG5cdGlmICggIWhhc01hY3JvVmFsdWUoIG5vcm1hbGl6ZWQgKSB8fCBpc1F1b3RlZFN0cmluZyggbm9ybWFsaXplZCApICkge1xuXHRcdHJldHVybiBub3JtYWxpemVkO1xuXHR9XG5cblx0Ly8gRXhhY3QtbWF0Y2ggb3B0aW9uIGRlZmF1bHRzIHNob3VsZCByZXNvbHZlIHRvIHN0cmluZyB2YWx1ZXMsIG5vdCBiYXJlIEpTIGlkZW50aWZpZXJzLlxuXHRyZXR1cm4gYCcke1xuXHRcdG5vcm1hbGl6ZWQucmVwbGFjZSggLycvZywgJ1xcXFxcXCcnIClcblx0fSdgO1xufVxuXG5mdW5jdGlvbiBpc1Jlc29sdmVkKCB2YWx1ZSApIHtcblx0cmV0dXJuICEoXG5cdFx0JycgPT09IHZhbHVlIHx8XG5cdFx0bnVsbCA9PT0gdmFsdWUgfHxcblx0XHQoXG5cdFx0XHRBcnJheS5pc0FycmF5KCB2YWx1ZSApICYmXG5cdFx0XHQhdmFsdWUubGVuZ3RoXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBjYW5PdmVycmlkZUF1dG9TZWxlY3RlZFNpbmdsZVNlbGVjdCggaW5wdXQgKSB7XG5cdGlmICggaW5wdXQuaXNBcnJheSgpIHx8ICdzZWxlY3QnICE9PSBpbnB1dC5pbnB1dFR5cGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRpZiAoXG5cdFx0IW5vZGUgfHxcblx0XHQnc2VsZWN0LW9uZScgIT09IG5vZGUudHlwZSB8fFxuXHRcdG5vZGUubXVsdGlwbGUgfHxcblx0XHQhbm9kZS5vcHRpb25zPy5sZW5ndGhcblx0KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20oIG5vZGUub3B0aW9ucyApO1xuXHRjb25zdCBbIGZpcnN0T3B0aW9uIF0gPSBvcHRpb25zO1xuXG5cdGlmICggIWZpcnN0T3B0aW9uICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggb3B0aW9ucy5zb21lKCBvcHRpb24gPT4gJycgPT09IG9wdGlvbi52YWx1ZSApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggb3B0aW9ucy5zb21lKCBvcHRpb24gPT4gb3B0aW9uLmRlZmF1bHRTZWxlY3RlZCApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0MCA9PT0gbm9kZS5zZWxlY3RlZEluZGV4ICYmXG5cdFx0bm9kZS52YWx1ZSA9PT0gZmlyc3RPcHRpb24udmFsdWVcblx0KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlSZXNvbHZlZFZhbHVlKCBpbnB1dCwgdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRpbnB1dC52YWx1ZS5zZXRJZkVtcHR5KFxuXHRcdFx0dmFsdWUubWFwKFxuXHRcdFx0XHRjdXJyZW50ID0+IHN0cmlwV3JhcHBpbmdRdW90ZXMoICcnICsgY3VycmVudCApLFxuXHRcdFx0KSxcblx0XHQpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZCA9IHN0cmlwV3JhcHBpbmdRdW90ZXMoICcnICsgdmFsdWUgKTtcblxuXHRpZiAoICFpbnB1dC5pc0FycmF5KCkgKSB7XG5cdFx0aWYgKCBjYW5PdmVycmlkZUF1dG9TZWxlY3RlZFNpbmdsZVNlbGVjdCggaW5wdXQgKSApIHtcblx0XHRcdGlucHV0LnZhbHVlLmN1cnJlbnQgPSBub3JtYWxpemVkO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW5wdXQudmFsdWUuc2V0SWZFbXB0eSggbm9ybWFsaXplZCApO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbmV4dFZhbHVlID0gcGFyc2VBcnJheUxpa2VWYWx1ZSggbm9ybWFsaXplZCApO1xuXG5cdGlucHV0LnZhbHVlLnNldElmRW1wdHkoXG5cdFx0QXJyYXkuaXNBcnJheSggbmV4dFZhbHVlIClcblx0XHRcdD8gbmV4dFZhbHVlLm1hcCggY3VycmVudCA9PiBzdHJpcFdyYXBwaW5nUXVvdGVzKCAnJyArIGN1cnJlbnQgKSApXG5cdFx0XHQ6IFsgbm9ybWFsaXplZCBdLFxuXHQpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlRGVmYXVsdFZhbHVlKCBpbnB1dCwgZGVmYXVsdFZhbHVlICkge1xuXHRjb25zdCB2YWx1ZXMgICA9IEFycmF5LmlzQXJyYXkoIGRlZmF1bHRWYWx1ZSApID8gZGVmYXVsdFZhbHVlIDogWyBkZWZhdWx0VmFsdWUgXTtcblx0Y29uc3QgZm9ybXVsYXMgPSBbXTtcblx0Y29uc3QgcmVzdWx0cyAgPSBuZXcgQXJyYXkoIHZhbHVlcy5sZW5ndGggKTtcblxuXHRjb25zdCBtYXliZUFwcGx5ID0gKCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdE9iamVjdC5rZXlzKCByZXN1bHRzICkubGVuZ3RoICE9PSB2YWx1ZXMubGVuZ3RoIHx8XG5cdFx0XHQhcmVzdWx0cy5ldmVyeSggaXNSZXNvbHZlZCApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXBwbHlSZXNvbHZlZFZhbHVlKFxuXHRcdFx0aW5wdXQsXG5cdFx0XHRBcnJheS5pc0FycmF5KCBkZWZhdWx0VmFsdWUgKSA/IHJlc3VsdHMgOiByZXN1bHRzWyAwIF0sXG5cdFx0KTtcblxuXHRcdGZvcm11bGFzLmZvckVhY2goIGN1cnJlbnQgPT4gY3VycmVudC5jbGVhcldhdGNoZXJzKCkgKTtcblx0fTtcblxuXHR2YWx1ZXMuZm9yRWFjaCggKCBjdXJyZW50VmFsdWUsIGluZGV4ICkgPT4ge1xuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XG5cblx0XHRmb3JtdWxhLm9ic2VydmUoIHByZXBhcmVGb3JtdWxhVmFsdWUoIGN1cnJlbnRWYWx1ZSApICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXG5cdFx0XHRpZiAoICFpc1Jlc29sdmVkKCByZXN1bHQgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHRzWyBpbmRleCBdID0gcmVzdWx0O1xuXHRcdFx0bWF5YmVBcHBseSgpO1xuXHRcdH07XG5cblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXHRcdGZvcm11bGFzLnB1c2goIGZvcm11bGEgKTtcblx0fSApO1xufVxuXG5mdW5jdGlvbiBhcHBseU9wdGlvbkZpZWxkRGVmYXVsdCggaW5wdXQgKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cdGNvbnN0IGZpZWxkV3JhcHBlciA9IGlucHV0LndyYXBwZXIgPz8gbm9kZTtcblx0Y29uc3QgcmF3RGVmYXVsdCA9IChcblx0XHRmaWVsZFdyYXBwZXI/LmRhdGFzZXQ/LmRlZmF1bHRWYWwgPz9cblx0XHRub2RlPy5kYXRhc2V0Py5kZWZhdWx0VmFsID8/XG5cdFx0Jydcblx0KTtcblx0Y29uc3QgZGVmYXVsdFZhbHVlID0gcGFyc2VEZWZhdWx0VmFsdWUoIHJhd0RlZmF1bHQgKTtcblxuXHRpZiAoICFzaG91bGRIYW5kbGVEZWZhdWx0VmFsdWUoIHJhd0RlZmF1bHQsIGRlZmF1bHRWYWx1ZSApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG9ic2VydmVEZWZhdWx0VmFsdWUoIGlucHV0LCBkZWZhdWx0VmFsdWUgKTtcbn1cblxuaWYgKCAhd2luZG93WyBPQlNFUlZFUl9GTEFHIF0gKSB7XG5cdHdpbmRvd1sgT0JTRVJWRVJfRkxBRyBdID0gdHJ1ZTtcblxuXHRhZGRBY3Rpb24oXG5cdFx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlci9vcHRpb24tZmllbGQtZGVmYXVsdC12YWx1ZScsXG5cdFx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHRcdFx0Zm9yICggY29uc3QgaW5wdXQgb2Ygb2JzZXJ2YWJsZS5nZXRJbnB1dHMoKSApIHtcblx0XHRcdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IW5vZGUgfHxcblx0XHRcdFx0XHQhW1xuXHRcdFx0XHRcdFx0J3NlbGVjdCcsXG5cdFx0XHRcdFx0XHQncmFkaW8nLFxuXHRcdFx0XHRcdFx0J2NoZWNrYm94Jyxcblx0XHRcdFx0XHRdLmluY2x1ZGVzKCBpbnB1dC5pbnB1dFR5cGUgKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFwcGx5T3B0aW9uRmllbGREZWZhdWx0KCBpbnB1dCApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTXVsdGlTZWxlY3REYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbFNlbGVjdCBmcm9tICcuL3NpZ25hbCc7XG5pbXBvcnQgJy4uLy4uL2RlZmF1bHQtdmFsdWUvbWFpbic7XG5pbXBvcnQgJy4vbWFpbi5wY3NzJztcblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCxcblx0TXVsdGlTZWxlY3REYXRhLFxuXHRTaWduYWxTZWxlY3QsXG59O1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvc2VsZWN0LWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBNdWx0aVNlbGVjdERhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvc2VsZWN0LWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbFNlbGVjdCwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9