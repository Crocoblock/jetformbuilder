/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/calculated.field/functions.js"
/*!************************************************!*\
  !*** ./frontend/calculated.field/functions.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertMillisToDateString: () => (/* binding */ convertMillisToDateString),
/* harmony export */   getCalculatedWrapper: () => (/* binding */ getCalculatedWrapper),
/* harmony export */   isCalculated: () => (/* binding */ isCalculated)
/* harmony export */ });
function getCalculatedWrapper(node) {
  return node.closest('.jet-form-builder__calculated-field');
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isCalculated(node) {
  var _getCalculatedWrapper;
  return !!((_getCalculatedWrapper = getCalculatedWrapper(node)?.dataset?.formula?.length) !== null && _getCalculatedWrapper !== void 0 ? _getCalculatedWrapper : '');
}

/**
 * Formats milliseconds into a string according to the specified format.
 *
 * Supported placeholders:
 * YYYY — 4-digit year (2024)
 * MM   — month with leading zero (01–12)
 * M    — month without leading zero (1–12)
 * MMM  — abbreviated month name (Jan–Dec)
 * MMMM — full month name (January–December)
 * DD   — day of month with leading zero (01–31)
 * D    — day of month without leading zero (1–31)
 * HH   — hours with leading zero (00–23) in 24-hour format
 * H    — hours without leading zero (0–23) in 24-hour format
 * hh   — hours with leading zero (01–12) in 12-hour format
 * h    — hours without leading zero (1–12) in 12-hour format
 * mm   — minutes with leading zero (00–59)
 * m    — minutes without leading zero (0–59)
 * ss   — seconds with leading zero (00–59)
 * s    — seconds without leading zero (0–59)
 * dddd — full day of week name (Monday–Sunday)
 * ddd  — abbreviated day of week name (Mon–Sun)
 * A    — AM/PM designation
 *
 * @param {number|string} millisInput — milliseconds
 * @param {string} format — format string
 * @returns {string|number}
 */
function convertMillisToDateString(millisInput, format = 'YYYY-MM-DD') {
  const millis = eval(millisInput);
  if (!millis || isNaN(millis) || null === millis || 0 === millis) {
    return 0;
  }
  const date = new Date(millis);
  const monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthsShort = monthsFull.map(m => m.slice(0, 3));
  const daysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysShort = daysFull.map(d => d.slice(0, 3));
  const hours12 = date.getHours() % 12 || 12; // Convert 0 to 12 for 12-hour format
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  const map = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    M: date.getMonth() + 1,
    MMM: monthsShort[date.getMonth()],
    MMMM: monthsFull[date.getMonth()],
    DD: String(date.getDate()).padStart(2, '0'),
    D: date.getDate(),
    HH: String(date.getHours()).padStart(2, '0'),
    H: date.getHours(),
    hh: String(hours12).padStart(2, '0'),
    // 12-hour format with leading zero
    h: hours12,
    // 12-hour format without leading zero
    mm: String(date.getMinutes()).padStart(2, '0'),
    m: date.getMinutes(),
    ss: String(date.getSeconds()).padStart(2, '0'),
    s: date.getSeconds(),
    dddd: daysFull[date.getDay()],
    ddd: daysShort[date.getDay()],
    A: ampm // AM/PM
  };
  const sortedKeys = Object.keys(map).sort((a, b) => b.length - a.length);

  // Use temporary placeholders to prevent conflicts
  let formatted = format;
  const placeholders = {};

  // First pass: replace format tokens with unique placeholders
  sortedKeys.forEach((key, index) => {
    const placeholder = `\x00${index}\x00`; // Use index-based unique identifier
    placeholders[placeholder] = String(map[key]);

    // Use word boundaries for single-letter tokens to avoid replacing letters in text
    const pattern = key.length <= 2 && /^[a-zA-Z]+$/.test(key) ? new RegExp(`\\b${key}\\b`, 'g') : new RegExp(key, 'g');
    formatted = formatted.replace(pattern, placeholder);
  });

  // Second pass: replace placeholders with actual values
  for (const [placeholder, value] of Object.entries(placeholders)) {
    formatted = formatted.split(placeholder).join(value);
  }
  return formatted;
}


/***/ },

/***/ "./frontend/calculated.field/input.js"
/*!********************************************!*\
  !*** ./frontend/calculated.field/input.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/calculated.field/functions.js");
var _window$JetFormBuilde;

const {
  InputData,
  CalculatedFormula
} = window.JetFormBuilderAbstract;
const {
  applyFilters
} = JetPlugins.hooks;
const {
  applyFilters: deprecatedApplyFilters = false
} = (_window$JetFormBuilde = window?.JetFormBuilderMain?.filters) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {};

// eslint-disable-next-line max-lines-per-function
function CalculatedData() {
  InputData.call(this);
  this.calculatedFormula = null;
  this.formula = '';
  this.precision = 0;
  this.sepDecimal = '';
  this.sepThousands = '';
  this.visibleValNode = null;
  this.valueTypeProp = 'number';
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);
  };
  this.setValue = function () {
    this.calculatedFormula?.clearWatchers();
    const formula = new CalculatedFormula(this, {
      forceFunction: true
    });
    this.calculatedFormula = formula;
    formula.observe(this.formula);
    formula.setResult = () => {
      if ('date' === this.valueTypeProp) {
        const date_formula = formula.calculate();
        this.value.current = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.convertMillisToDateString)(date_formula, this.dateFormat);
      } else {
        this.value.current = formula.calculate();
      }
    };
    formula.relatedCallback = input => {
      const value = applyFilters('jet.fb.calculated.callback', false, input, this);
      if (false !== value) {
        return value;
      }
      const response = 'number' === this.valueTypeProp ? input.calcValue : input.value.current;
      if (false === deprecatedApplyFilters) {
        return response;
      }
      const filterResult = deprecatedApplyFilters('forms/calculated-field-value', input.value.current, jQuery(input.nodes[0]));
      return filterResult === input.value.current ? response : filterResult;
    };
    formula.emptyValue = () => 'number' === this.valueTypeProp ? 0 : '';
    formula.setResult();
    this.value.current = this.value.applySanitizers(this.value.current);
    this.beforeSubmit(resolve => {
      this.value.silence();
      this.value.current = null;
      this.value.silence();
      formula.setResult();
      resolve();
    }, this);
  };
  this.setNode = function (node) {
    InputData.prototype.setNode.call(this, node);
    InputData.prototype.reQueryValue = () => {};
    const {
      formula,
      precision,
      sepDecimal,
      valueType,
      sepThousands,
      dateFormat
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getCalculatedWrapper)(node).dataset;
    this.formula = formula;
    this.precision = +precision;
    this.sepDecimal = sepDecimal !== null && sepDecimal !== void 0 ? sepDecimal : '';
    this.sepThousands = sepThousands !== null && sepThousands !== void 0 ? sepThousands : '';
    this.visibleValNode = node.nextElementSibling;
    this.valueTypeProp = valueType;
    this.dateFormat = dateFormat;
    this.inputType = 'calculated';
  };
  this.addListeners = function () {
    // silence is golden
  };

  // calculated field can't be validated
  this.report = () => {};
  this.reQueryValue = () => {};
  this.revertValue = () => {};
}
CalculatedData.prototype = Object.create(InputData.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedData);

/***/ },

/***/ "./frontend/calculated.field/signal.js"
/*!*********************************************!*\
  !*** ./frontend/calculated.field/signal.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/calculated.field/functions.js");

const {
  BaseSignal
} = window.JetFormBuilderAbstract;

/**
 * @property {CalculatedData} input Related input instance
 */
function SignalCalculated() {
  BaseSignal.call(this);
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isCalculated)(node);
  };
  this.baseSignal = function () {
    const [node] = this.input.nodes;
    const isNumber = 'number' === this.input.valueTypeProp;
    this.input.calcValue = isNumber ? this.withPrecision() : this.input.value.current;
    this.input.value.silence();
    this.input.value.current = isNumber ? this.convertValue() : this.input.value.current;
    this.input.value.silence();
    this.input.visibleValNode.textContent = this.input.value.current;
    node.value = this.input.calcValue;
  };
  this.runSignal = function () {
    this.baseSignal();
    const [node] = this.input.nodes;
    this.triggerJQuery(node);
  };
}
SignalCalculated.prototype = Object.create(BaseSignal.prototype);
SignalCalculated.prototype.convertValue = function () {
  const value = this.input.value.current;
  if (Number.isNaN(Number(value))) {
    return 0;
  }
  const parts = this.withPrecision().toString().split('.');
  if (this.input.sepThousands) {
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.input.sepThousands);
  }
  return parts.join(this.input.sepDecimal);
};
SignalCalculated.prototype.withPrecision = function () {
  return Number(this.input.value.current).toFixed(this.input.precision);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalCalculated);

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
/*!*******************************************!*\
  !*** ./frontend/calculated.field/main.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/calculated.field/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/calculated.field/signal.js");


const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/calculated-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/calculated-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2lucHV0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDYWxjdWxhdGVkV3JhcHBlciggbm9kZSApIHtcblx0cmV0dXJuIG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyX19jYWxjdWxhdGVkLWZpZWxkJyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NhbGN1bGF0ZWQoIG5vZGUgKSB7XG5cdHJldHVybiAhIShcblx0XHRnZXRDYWxjdWxhdGVkV3JhcHBlciggbm9kZSApPy5kYXRhc2V0Py5mb3JtdWxhPy5sZW5ndGggPz8gJydcblx0KTtcbn1cblxuLyoqXG4gKiBGb3JtYXRzIG1pbGxpc2Vjb25kcyBpbnRvIGEgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdC5cbiAqXG4gKiBTdXBwb3J0ZWQgcGxhY2Vob2xkZXJzOlxuICogWVlZWSDigJQgNC1kaWdpdCB5ZWFyICgyMDI0KVxuICogTU0gICDigJQgbW9udGggd2l0aCBsZWFkaW5nIHplcm8gKDAx4oCTMTIpXG4gKiBNICAgIOKAlCBtb250aCB3aXRob3V0IGxlYWRpbmcgemVybyAoMeKAkzEyKVxuICogTU1NICDigJQgYWJicmV2aWF0ZWQgbW9udGggbmFtZSAoSmFu4oCTRGVjKVxuICogTU1NTSDigJQgZnVsbCBtb250aCBuYW1lIChKYW51YXJ54oCTRGVjZW1iZXIpXG4gKiBERCAgIOKAlCBkYXkgb2YgbW9udGggd2l0aCBsZWFkaW5nIHplcm8gKDAx4oCTMzEpXG4gKiBEICAgIOKAlCBkYXkgb2YgbW9udGggd2l0aG91dCBsZWFkaW5nIHplcm8gKDHigJMzMSlcbiAqIEhIICAg4oCUIGhvdXJzIHdpdGggbGVhZGluZyB6ZXJvICgwMOKAkzIzKSBpbiAyNC1ob3VyIGZvcm1hdFxuICogSCAgICDigJQgaG91cnMgd2l0aG91dCBsZWFkaW5nIHplcm8gKDDigJMyMykgaW4gMjQtaG91ciBmb3JtYXRcbiAqIGhoICAg4oCUIGhvdXJzIHdpdGggbGVhZGluZyB6ZXJvICgwMeKAkzEyKSBpbiAxMi1ob3VyIGZvcm1hdFxuICogaCAgICDigJQgaG91cnMgd2l0aG91dCBsZWFkaW5nIHplcm8gKDHigJMxMikgaW4gMTItaG91ciBmb3JtYXRcbiAqIG1tICAg4oCUIG1pbnV0ZXMgd2l0aCBsZWFkaW5nIHplcm8gKDAw4oCTNTkpXG4gKiBtICAgIOKAlCBtaW51dGVzIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgw4oCTNTkpXG4gKiBzcyAgIOKAlCBzZWNvbmRzIHdpdGggbGVhZGluZyB6ZXJvICgwMOKAkzU5KVxuICogcyAgICDigJQgc2Vjb25kcyB3aXRob3V0IGxlYWRpbmcgemVybyAoMOKAkzU5KVxuICogZGRkZCDigJQgZnVsbCBkYXkgb2Ygd2VlayBuYW1lIChNb25kYXnigJNTdW5kYXkpXG4gKiBkZGQgIOKAlCBhYmJyZXZpYXRlZCBkYXkgb2Ygd2VlayBuYW1lIChNb27igJNTdW4pXG4gKiBBICAgIOKAlCBBTS9QTSBkZXNpZ25hdGlvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbWlsbGlzSW5wdXQg4oCUIG1pbGxpc2Vjb25kc1xuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCDigJQgZm9ybWF0IHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ3xudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRNaWxsaXNUb0RhdGVTdHJpbmcoIG1pbGxpc0lucHV0LCBmb3JtYXQgPSAnWVlZWS1NTS1ERCcgKSB7XG5cdGNvbnN0IG1pbGxpcyA9IGV2YWwoIG1pbGxpc0lucHV0ICk7XG5cblx0aWYgKCAhbWlsbGlzIHx8IGlzTmFOKCBtaWxsaXMgKSB8fCBudWxsID09PSBtaWxsaXMgfHwgMCA9PT0gbWlsbGlzICkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCBtaWxsaXMgKTtcblxuXHRjb25zdCBtb250aHNGdWxsID0gW1xuXHRcdCdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcblx0XHQnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG5cdF07XG5cdGNvbnN0IG1vbnRoc1Nob3J0ID0gbW9udGhzRnVsbC5tYXAoIG0gPT4gbS5zbGljZSggMCwgMyApICk7XG5cblx0Y29uc3QgZGF5c0Z1bGwgPSBbXG5cdFx0J1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J1xuXHRdO1xuXG5cdGNvbnN0IGRheXNTaG9ydCA9IGRheXNGdWxsLm1hcCggZCA9PiBkLnNsaWNlKCAwLCAzICkgKTtcblxuXHRjb25zdCBob3VyczEyID0gZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTI7IC8vIENvbnZlcnQgMCB0byAxMiBmb3IgMTItaG91ciBmb3JtYXRcblx0Y29uc3QgYW1wbSAgICA9IGRhdGUuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nO1xuXG5cdGNvbnN0IG1hcCA9IHtcblx0XHRZWVlZOiBkYXRlLmdldEZ1bGxZZWFyKCksXG5cdFx0TU06IFN0cmluZyggZGF0ZS5nZXRNb250aCgpICsgMSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcblx0XHRNOiBkYXRlLmdldE1vbnRoKCkgKyAxLFxuXHRcdE1NTTogbW9udGhzU2hvcnRbIGRhdGUuZ2V0TW9udGgoKSBdLFxuXHRcdE1NTU06IG1vbnRoc0Z1bGxbIGRhdGUuZ2V0TW9udGgoKSBdLFxuXHRcdEREOiBTdHJpbmcoIGRhdGUuZ2V0RGF0ZSgpICkucGFkU3RhcnQoIDIsICcwJyApLFxuXHRcdEQ6IGRhdGUuZ2V0RGF0ZSgpLFxuXHRcdEhIOiBTdHJpbmcoIGRhdGUuZ2V0SG91cnMoKSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcblx0XHRIOiBkYXRlLmdldEhvdXJzKCksXG5cdFx0aGg6IFN0cmluZyggaG91cnMxMiApLnBhZFN0YXJ0KCAyLCAnMCcgKSwgLy8gMTItaG91ciBmb3JtYXQgd2l0aCBsZWFkaW5nIHplcm9cblx0XHRoOiBob3VyczEyLCAvLyAxMi1ob3VyIGZvcm1hdCB3aXRob3V0IGxlYWRpbmcgemVyb1xuXHRcdG1tOiBTdHJpbmcoIGRhdGUuZ2V0TWludXRlcygpICkucGFkU3RhcnQoIDIsICcwJyApLFxuXHRcdG06IGRhdGUuZ2V0TWludXRlcygpLFxuXHRcdHNzOiBTdHJpbmcoIGRhdGUuZ2V0U2Vjb25kcygpICkucGFkU3RhcnQoIDIsICcwJyApLFxuXHRcdHM6IGRhdGUuZ2V0U2Vjb25kcygpLFxuXHRcdGRkZGQ6IGRheXNGdWxsWyBkYXRlLmdldERheSgpIF0sXG5cdFx0ZGRkOiBkYXlzU2hvcnRbIGRhdGUuZ2V0RGF5KCkgXSxcblx0XHRBOiBhbXBtLCAvLyBBTS9QTVxuXHR9O1xuXG5cdGNvbnN0IHNvcnRlZEtleXMgPSBPYmplY3Qua2V5cyggbWFwICkuc29ydCggKCBhLCBiICkgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCApO1xuXG5cdC8vIFVzZSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJzIHRvIHByZXZlbnQgY29uZmxpY3RzXG5cdGxldCBmb3JtYXR0ZWQgPSBmb3JtYXQ7XG5cdGNvbnN0IHBsYWNlaG9sZGVycyA9IHt9O1xuXG5cdC8vIEZpcnN0IHBhc3M6IHJlcGxhY2UgZm9ybWF0IHRva2VucyB3aXRoIHVuaXF1ZSBwbGFjZWhvbGRlcnNcblx0c29ydGVkS2V5cy5mb3JFYWNoKCAoIGtleSwgaW5kZXggKSA9PiB7XG5cdFx0Y29uc3QgcGxhY2Vob2xkZXIgPSBgXFx4MDAke2luZGV4fVxceDAwYDsgLy8gVXNlIGluZGV4LWJhc2VkIHVuaXF1ZSBpZGVudGlmaWVyXG5cdFx0cGxhY2Vob2xkZXJzW3BsYWNlaG9sZGVyXSA9IFN0cmluZyggbWFwW2tleV0gKTtcblxuXHRcdC8vIFVzZSB3b3JkIGJvdW5kYXJpZXMgZm9yIHNpbmdsZS1sZXR0ZXIgdG9rZW5zIHRvIGF2b2lkIHJlcGxhY2luZyBsZXR0ZXJzIGluIHRleHRcblx0XHRjb25zdCBwYXR0ZXJuID0ga2V5Lmxlbmd0aCA8PSAyICYmIC9eW2EtekEtWl0rJC8udGVzdCgga2V5IClcblx0XHRcdD8gbmV3IFJlZ0V4cCggYFxcXFxiJHtrZXl9XFxcXGJgLCAnZycgKVxuXHRcdFx0OiBuZXcgUmVnRXhwKCBrZXksICdnJyApO1xuXG5cdFx0Zm9ybWF0dGVkID0gZm9ybWF0dGVkLnJlcGxhY2UoIHBhdHRlcm4sIHBsYWNlaG9sZGVyICk7XG5cdH0gKTtcblxuXHQvLyBTZWNvbmQgcGFzczogcmVwbGFjZSBwbGFjZWhvbGRlcnMgd2l0aCBhY3R1YWwgdmFsdWVzXG5cdGZvciAoIGNvbnN0IFtwbGFjZWhvbGRlciwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKCBwbGFjZWhvbGRlcnMgKSApIHtcblx0XHRmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQuc3BsaXQoIHBsYWNlaG9sZGVyICkuam9pbiggdmFsdWUgKTtcblx0fVxuXG5cdHJldHVybiBmb3JtYXR0ZWQ7XG59XG5cbmV4cG9ydCB7IGlzQ2FsY3VsYXRlZCwgZ2V0Q2FsY3VsYXRlZFdyYXBwZXIsIGNvbnZlcnRNaWxsaXNUb0RhdGVTdHJpbmcgfTsiLCJpbXBvcnQgeyBnZXRDYWxjdWxhdGVkV3JhcHBlciwgaXNDYWxjdWxhdGVkLCBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxuICAgICAgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJNYWluPy5maWx0ZXJzID8/IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gQ2FsY3VsYXRlZERhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5jYWxjdWxhdGVkRm9ybXVsYSA9IG51bGw7XG5cblx0dGhpcy5mb3JtdWxhICAgICAgICA9ICcnO1xuXHR0aGlzLnByZWNpc2lvbiAgICAgID0gMDtcblx0dGhpcy5zZXBEZWNpbWFsICAgICA9ICcnO1xuXHR0aGlzLnNlcFRob3VzYW5kcyAgID0gJyc7XG5cdHRoaXMudmlzaWJsZVZhbE5vZGUgPSBudWxsO1xuXHR0aGlzLnZhbHVlVHlwZVByb3AgID0gJ251bWJlcic7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XG5cdH07XG5cdHRoaXMuc2V0VmFsdWUgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVkRm9ybXVsYT8uY2xlYXJXYXRjaGVycygpO1xuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMsIHsgZm9yY2VGdW5jdGlvbjogdHJ1ZSB9ICk7XG5cdFx0dGhpcy5jYWxjdWxhdGVkRm9ybXVsYSA9IGZvcm11bGE7XG5cblx0XHRmb3JtdWxhLm9ic2VydmUoIHRoaXMuZm9ybXVsYSApO1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xuXHRcdFx0aWYgKCAnZGF0ZScgPT09IHRoaXMudmFsdWVUeXBlUHJvcCApIHtcblx0XHRcdFx0Y29uc3QgZGF0ZV9mb3JtdWxhID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gY29udmVydE1pbGxpc1RvRGF0ZVN0cmluZyggZGF0ZV9mb3JtdWxhLCB0aGlzLmRhdGVGb3JtYXQgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRmb3JtdWxhLnJlbGF0ZWRDYWxsYmFjayA9ICggaW5wdXQgKSA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGFwcGx5RmlsdGVycyhcblx0XHRcdFx0J2pldC5mYi5jYWxjdWxhdGVkLmNhbGxiYWNrJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdGlucHV0LFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBmYWxzZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAnbnVtYmVyJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wXG5cdFx0XHQgICAgICAgICAgICAgICAgID8gaW5wdXQuY2FsY1ZhbHVlXG5cdFx0XHQgICAgICAgICAgICAgICAgIDogaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBmaWx0ZXJSZXN1bHQgPSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1maWVsZC12YWx1ZScsXG5cdFx0XHRcdGlucHV0LnZhbHVlLmN1cnJlbnQsXG5cdFx0XHRcdGpRdWVyeSggaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuIGZpbHRlclJlc3VsdCA9PT0gaW5wdXQudmFsdWUuY3VycmVudFxuXHRcdFx0ICAgICAgID8gcmVzcG9uc2Vcblx0XHRcdCAgICAgICA6IGZpbHRlclJlc3VsdDtcblx0XHR9O1xuXG5cdFx0Zm9ybXVsYS5lbXB0eVZhbHVlID0gKCkgPT4gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XG5cblx0XHR0aGlzLmJlZm9yZVN1Ym1pdCggKCByZXNvbHZlICkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBudWxsO1xuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XG5cblx0XHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSwgdGhpcyApO1xuXHR9O1xuXG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcblxuXHRcdGNvbnN0IHtcblx0XHRcdCAgICAgIGZvcm11bGEsXG5cdFx0XHQgICAgICBwcmVjaXNpb24sXG5cdFx0XHQgICAgICBzZXBEZWNpbWFsLFxuXHRcdFx0ICAgICAgdmFsdWVUeXBlLFxuXHRcdFx0ICAgICAgc2VwVGhvdXNhbmRzLFxuXHRcdFx0ICAgICAgZGF0ZUZvcm1hdCxcblx0XHQgICAgICB9ID0gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKS5kYXRhc2V0O1xuXG5cdFx0dGhpcy5mb3JtdWxhICAgICAgICA9IGZvcm11bGE7XG5cdFx0dGhpcy5wcmVjaXNpb24gICAgICA9ICtwcmVjaXNpb247XG5cdFx0dGhpcy5zZXBEZWNpbWFsICAgICA9IHNlcERlY2ltYWwgPz8gJyc7XG5cdFx0dGhpcy5zZXBUaG91c2FuZHMgICA9IHNlcFRob3VzYW5kcyA/PyAnJztcblx0XHR0aGlzLnZpc2libGVWYWxOb2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0dGhpcy52YWx1ZVR5cGVQcm9wICA9IHZhbHVlVHlwZTtcblx0XHR0aGlzLmRhdGVGb3JtYXQgICAgID0gZGF0ZUZvcm1hdDtcblx0XHR0aGlzLmlucHV0VHlwZSAgICAgID0gJ2NhbGN1bGF0ZWQnO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxuXHR9O1xuXG5cdC8vIGNhbGN1bGF0ZWQgZmllbGQgY2FuJ3QgYmUgdmFsaWRhdGVkXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XG5cblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnJldmVydFZhbHVlID0gKCkgPT4ge307XG59XG5cbkNhbGN1bGF0ZWREYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZERhdGE7XG4iLCJpbXBvcnQgeyBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkge0NhbGN1bGF0ZWREYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0IGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIFNpZ25hbENhbGN1bGF0ZWQoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMuYmFzZVNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRjb25zdCBpc051bWJlciA9ICdudW1iZXInID09PSB0aGlzLmlucHV0LnZhbHVlVHlwZVByb3A7XG5cblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGlzTnVtYmVyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMud2l0aFByZWNpc2lvbigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xuXHRcdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IGlzTnVtYmVyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbnZlcnRWYWx1ZSgpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5zaWxlbmNlKCk7XG5cblx0XHR0aGlzLmlucHV0LnZpc2libGVWYWxOb2RlLnRleHRDb250ZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0bm9kZS52YWx1ZSA9IHRoaXMuaW5wdXQuY2FsY1ZhbHVlO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuYmFzZVNpZ25hbCgpO1xuXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdH07XG59XG5cblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUuY29udmVydFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRpZiAoIE51bWJlci5pc05hTiggTnVtYmVyKCB2YWx1ZSApICkgKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBwYXJ0cyA9IHRoaXMud2l0aFByZWNpc2lvbigpLnRvU3RyaW5nKCkuc3BsaXQoICcuJyApO1xuXG5cdGlmICggdGhpcy5pbnB1dC5zZXBUaG91c2FuZHMgKSB7XG5cdFx0cGFydHNbIDAgXSA9IHBhcnRzWyAwIF0ucmVwbGFjZShcblx0XHRcdC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFxuXHRcdFx0dGhpcy5pbnB1dC5zZXBUaG91c2FuZHMsXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiBwYXJ0cy5qb2luKCB0aGlzLmlucHV0LnNlcERlY2ltYWwgKTtcbn07XG5cblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLndpdGhQcmVjaXNpb24gPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBOdW1iZXIoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApLnRvRml4ZWQoIHRoaXMuaW5wdXQucHJlY2lzaW9uICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxDYWxjdWxhdGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FsY3VsYXRlZERhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsQ2FsY3VsYXRlZCBmcm9tICcuL3NpZ25hbCc7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgQ2FsY3VsYXRlZERhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxDYWxjdWxhdGVkLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9