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
    let lastResult;
    formula.observe(this.formula);
    formula.setResult = (beforeSubmit = false) => {
      const calculated = formula.calculate();
      const result = 'date' === this.valueTypeProp ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__.convertMillisToDateString)(calculated, this.dateFormat) : calculated;

      // Compare formula results, not the formatted value or a manual override.
      if (beforeSubmit && Object.is(lastResult, result)) {
        return;
      }
      lastResult = result;
      if (beforeSubmit) {
        this.value.silence();
        this.value.current = null;
        this.value.silence();
      }
      this.value.current = result;
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
      formula.setResult(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2FsY3VsYXRlZCggbm9kZSApIHtcblx0cmV0dXJuICEhKFxuXHRcdGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICk/LmRhdGFzZXQ/LmZvcm11bGE/Lmxlbmd0aCA/PyAnJ1xuXHQpO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgbWlsbGlzZWNvbmRzIGludG8gYSBzdHJpbmcgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0LlxuICpcbiAqIFN1cHBvcnRlZCBwbGFjZWhvbGRlcnM6XG4gKiBZWVlZIOKAlCA0LWRpZ2l0IHllYXIgKDIwMjQpXG4gKiBNTSAgIOKAlCBtb250aCB3aXRoIGxlYWRpbmcgemVybyAoMDHigJMxMilcbiAqIE0gICAg4oCUIG1vbnRoIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgx4oCTMTIpXG4gKiBNTU0gIOKAlCBhYmJyZXZpYXRlZCBtb250aCBuYW1lIChKYW7igJNEZWMpXG4gKiBNTU1NIOKAlCBmdWxsIG1vbnRoIG5hbWUgKEphbnVhcnnigJNEZWNlbWJlcilcbiAqIEREICAg4oCUIGRheSBvZiBtb250aCB3aXRoIGxlYWRpbmcgemVybyAoMDHigJMzMSlcbiAqIEQgICAg4oCUIGRheSBvZiBtb250aCB3aXRob3V0IGxlYWRpbmcgemVybyAoMeKAkzMxKVxuICogSEggICDigJQgaG91cnMgd2l0aCBsZWFkaW5nIHplcm8gKDAw4oCTMjMpIGluIDI0LWhvdXIgZm9ybWF0XG4gKiBIICAgIOKAlCBob3VycyB3aXRob3V0IGxlYWRpbmcgemVybyAoMOKAkzIzKSBpbiAyNC1ob3VyIGZvcm1hdFxuICogaGggICDigJQgaG91cnMgd2l0aCBsZWFkaW5nIHplcm8gKDAx4oCTMTIpIGluIDEyLWhvdXIgZm9ybWF0XG4gKiBoICAgIOKAlCBob3VycyB3aXRob3V0IGxlYWRpbmcgemVybyAoMeKAkzEyKSBpbiAxMi1ob3VyIGZvcm1hdFxuICogbW0gICDigJQgbWludXRlcyB3aXRoIGxlYWRpbmcgemVybyAoMDDigJM1OSlcbiAqIG0gICAg4oCUIG1pbnV0ZXMgd2l0aG91dCBsZWFkaW5nIHplcm8gKDDigJM1OSlcbiAqIHNzICAg4oCUIHNlY29uZHMgd2l0aCBsZWFkaW5nIHplcm8gKDAw4oCTNTkpXG4gKiBzICAgIOKAlCBzZWNvbmRzIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgw4oCTNTkpXG4gKiBkZGRkIOKAlCBmdWxsIGRheSBvZiB3ZWVrIG5hbWUgKE1vbmRheeKAk1N1bmRheSlcbiAqIGRkZCAg4oCUIGFiYnJldmlhdGVkIGRheSBvZiB3ZWVrIG5hbWUgKE1vbuKAk1N1bilcbiAqIEEgICAg4oCUIEFNL1BNIGRlc2lnbmF0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBtaWxsaXNJbnB1dCDigJQgbWlsbGlzZWNvbmRzXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IOKAlCBmb3JtYXQgc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfG51bWJlcn1cbiAqL1xuZnVuY3Rpb24gY29udmVydE1pbGxpc1RvRGF0ZVN0cmluZyggbWlsbGlzSW5wdXQsIGZvcm1hdCA9ICdZWVlZLU1NLUREJyApIHtcblx0Y29uc3QgbWlsbGlzID0gZXZhbCggbWlsbGlzSW5wdXQgKTtcblxuXHRpZiAoICFtaWxsaXMgfHwgaXNOYU4oIG1pbGxpcyApIHx8IG51bGwgPT09IG1pbGxpcyB8fCAwID09PSBtaWxsaXMgKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoIG1pbGxpcyApO1xuXG5cdGNvbnN0IG1vbnRoc0Z1bGwgPSBbXG5cdFx0J0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuXHRcdCdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcblx0XTtcblx0Y29uc3QgbW9udGhzU2hvcnQgPSBtb250aHNGdWxsLm1hcCggbSA9PiBtLnNsaWNlKCAwLCAzICkgKTtcblxuXHRjb25zdCBkYXlzRnVsbCA9IFtcblx0XHQnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXG5cdF07XG5cblx0Y29uc3QgZGF5c1Nob3J0ID0gZGF5c0Z1bGwubWFwKCBkID0+IGQuc2xpY2UoIDAsIDMgKSApO1xuXG5cdGNvbnN0IGhvdXJzMTIgPSBkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMjsgLy8gQ29udmVydCAwIHRvIDEyIGZvciAxMi1ob3VyIGZvcm1hdFxuXHRjb25zdCBhbXBtICAgID0gZGF0ZS5nZXRIb3VycygpID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cblx0Y29uc3QgbWFwID0ge1xuXHRcdFlZWVk6IGRhdGUuZ2V0RnVsbFllYXIoKSxcblx0XHRNTTogU3RyaW5nKCBkYXRlLmdldE1vbnRoKCkgKyAxICkucGFkU3RhcnQoIDIsICcwJyApLFxuXHRcdE06IGRhdGUuZ2V0TW9udGgoKSArIDEsXG5cdFx0TU1NOiBtb250aHNTaG9ydFsgZGF0ZS5nZXRNb250aCgpIF0sXG5cdFx0TU1NTTogbW9udGhzRnVsbFsgZGF0ZS5nZXRNb250aCgpIF0sXG5cdFx0REQ6IFN0cmluZyggZGF0ZS5nZXREYXRlKCkgKS5wYWRTdGFydCggMiwgJzAnICksXG5cdFx0RDogZGF0ZS5nZXREYXRlKCksXG5cdFx0SEg6IFN0cmluZyggZGF0ZS5nZXRIb3VycygpICkucGFkU3RhcnQoIDIsICcwJyApLFxuXHRcdEg6IGRhdGUuZ2V0SG91cnMoKSxcblx0XHRoaDogU3RyaW5nKCBob3VyczEyICkucGFkU3RhcnQoIDIsICcwJyApLCAvLyAxMi1ob3VyIGZvcm1hdCB3aXRoIGxlYWRpbmcgemVyb1xuXHRcdGg6IGhvdXJzMTIsIC8vIDEyLWhvdXIgZm9ybWF0IHdpdGhvdXQgbGVhZGluZyB6ZXJvXG5cdFx0bW06IFN0cmluZyggZGF0ZS5nZXRNaW51dGVzKCkgKS5wYWRTdGFydCggMiwgJzAnICksXG5cdFx0bTogZGF0ZS5nZXRNaW51dGVzKCksXG5cdFx0c3M6IFN0cmluZyggZGF0ZS5nZXRTZWNvbmRzKCkgKS5wYWRTdGFydCggMiwgJzAnICksXG5cdFx0czogZGF0ZS5nZXRTZWNvbmRzKCksXG5cdFx0ZGRkZDogZGF5c0Z1bGxbIGRhdGUuZ2V0RGF5KCkgXSxcblx0XHRkZGQ6IGRheXNTaG9ydFsgZGF0ZS5nZXREYXkoKSBdLFxuXHRcdEE6IGFtcG0sIC8vIEFNL1BNXG5cdH07XG5cblx0Y29uc3Qgc29ydGVkS2V5cyA9IE9iamVjdC5rZXlzKCBtYXAgKS5zb3J0KCAoIGEsIGIgKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoICk7XG5cblx0Ly8gVXNlIHRlbXBvcmFyeSBwbGFjZWhvbGRlcnMgdG8gcHJldmVudCBjb25mbGljdHNcblx0bGV0IGZvcm1hdHRlZCA9IGZvcm1hdDtcblx0Y29uc3QgcGxhY2Vob2xkZXJzID0ge307XG5cblx0Ly8gRmlyc3QgcGFzczogcmVwbGFjZSBmb3JtYXQgdG9rZW5zIHdpdGggdW5pcXVlIHBsYWNlaG9sZGVyc1xuXHRzb3J0ZWRLZXlzLmZvckVhY2goICgga2V5LCBpbmRleCApID0+IHtcblx0XHRjb25zdCBwbGFjZWhvbGRlciA9IGBcXHgwMCR7aW5kZXh9XFx4MDBgOyAvLyBVc2UgaW5kZXgtYmFzZWQgdW5pcXVlIGlkZW50aWZpZXJcblx0XHRwbGFjZWhvbGRlcnNbcGxhY2Vob2xkZXJdID0gU3RyaW5nKCBtYXBba2V5XSApO1xuXG5cdFx0Ly8gVXNlIHdvcmQgYm91bmRhcmllcyBmb3Igc2luZ2xlLWxldHRlciB0b2tlbnMgdG8gYXZvaWQgcmVwbGFjaW5nIGxldHRlcnMgaW4gdGV4dFxuXHRcdGNvbnN0IHBhdHRlcm4gPSBrZXkubGVuZ3RoIDw9IDIgJiYgL15bYS16QS1aXSskLy50ZXN0KCBrZXkgKVxuXHRcdFx0PyBuZXcgUmVnRXhwKCBgXFxcXGIke2tleX1cXFxcYmAsICdnJyApXG5cdFx0XHQ6IG5ldyBSZWdFeHAoIGtleSwgJ2cnICk7XG5cblx0XHRmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZSggcGF0dGVybiwgcGxhY2Vob2xkZXIgKTtcblx0fSApO1xuXG5cdC8vIFNlY29uZCBwYXNzOiByZXBsYWNlIHBsYWNlaG9sZGVycyB3aXRoIGFjdHVhbCB2YWx1ZXNcblx0Zm9yICggY29uc3QgW3BsYWNlaG9sZGVyLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHBsYWNlaG9sZGVycyApICkge1xuXHRcdGZvcm1hdHRlZCA9IGZvcm1hdHRlZC5zcGxpdCggcGxhY2Vob2xkZXIgKS5qb2luKCB2YWx1ZSApO1xuXHR9XG5cblx0cmV0dXJuIGZvcm1hdHRlZDtcbn1cblxuZXhwb3J0IHsgaXNDYWxjdWxhdGVkLCBnZXRDYWxjdWxhdGVkV3JhcHBlciwgY29udmVydE1pbGxpc1RvRGF0ZVN0cmluZyB9OyIsImltcG9ydCB7IGdldENhbGN1bGF0ZWRXcmFwcGVyLCBpc0NhbGN1bGF0ZWQsIGNvbnZlcnRNaWxsaXNUb0RhdGVTdHJpbmcgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgSW5wdXREYXRhLFxuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzOiBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzID0gZmFsc2UsXG4gICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBDYWxjdWxhdGVkRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmNhbGN1bGF0ZWRGb3JtdWxhID0gbnVsbDtcblxuXHR0aGlzLmZvcm11bGEgICAgICAgID0gJyc7XG5cdHRoaXMucHJlY2lzaW9uICAgICAgPSAwO1xuXHR0aGlzLnNlcERlY2ltYWwgICAgID0gJyc7XG5cdHRoaXMuc2VwVGhvdXNhbmRzICAgPSAnJztcblx0dGhpcy52aXNpYmxlVmFsTm9kZSA9IG51bGw7XG5cdHRoaXMudmFsdWVUeXBlUHJvcCAgPSAnbnVtYmVyJztcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0NhbGN1bGF0ZWQoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5zZXRWYWx1ZSAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZWRGb3JtdWxhPy5jbGVhcldhdGNoZXJzKCk7XG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcywgeyBmb3JjZUZ1bmN0aW9uOiB0cnVlIH0gKTtcblx0XHR0aGlzLmNhbGN1bGF0ZWRGb3JtdWxhID0gZm9ybXVsYTtcblx0XHRsZXQgbGFzdFJlc3VsdDtcblxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy5mb3JtdWxhICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoIGJlZm9yZVN1Ym1pdCA9IGZhbHNlICkgPT4ge1xuXHRcdFx0Y29uc3QgY2FsY3VsYXRlZCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSAnZGF0ZScgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxuXHRcdFx0ICAgICAgICAgICAgICAgPyBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nKCBjYWxjdWxhdGVkLCB0aGlzLmRhdGVGb3JtYXQgKVxuXHRcdFx0ICAgICAgICAgICAgICAgOiBjYWxjdWxhdGVkO1xuXG5cdFx0XHQvLyBDb21wYXJlIGZvcm11bGEgcmVzdWx0cywgbm90IHRoZSBmb3JtYXR0ZWQgdmFsdWUgb3IgYSBtYW51YWwgb3ZlcnJpZGUuXG5cdFx0XHRpZiAoIGJlZm9yZVN1Ym1pdCAmJiBPYmplY3QuaXMoIGxhc3RSZXN1bHQsIHJlc3VsdCApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxhc3RSZXN1bHQgPSByZXN1bHQ7XG5cblx0XHRcdGlmICggYmVmb3JlU3VibWl0ICkge1xuXHRcdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbnVsbDtcblx0XHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHJlc3VsdDtcblx0XHR9O1xuXHRcdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gKCBpbnB1dCApID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gYXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmNhbGN1bGF0ZWQuY2FsbGJhY2snLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0aW5wdXQsXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGZhbHNlICE9PSB2YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3Bcblx0XHRcdCAgICAgICAgICAgICAgICAgPyBpbnB1dC5jYWxjVmFsdWVcblx0XHRcdCAgICAgICAgICAgICAgICAgOiBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0XHRpZiAoIGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZpbHRlclJlc3VsdCA9IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdmb3Jtcy9jYWxjdWxhdGVkLWZpZWxkLXZhbHVlJyxcblx0XHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCxcblx0XHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gZmlsdGVyUmVzdWx0ID09PSBpbnB1dC52YWx1ZS5jdXJyZW50XG5cdFx0XHQgICAgICAgPyByZXNwb25zZVxuXHRcdFx0ICAgICAgIDogZmlsdGVyUmVzdWx0O1xuXHRcdH07XG5cblx0XHRmb3JtdWxhLmVtcHR5VmFsdWUgPSAoKSA9PiAnbnVtYmVyJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuYXBwbHlTYW5pdGl6ZXJzKCB0aGlzLnZhbHVlLmN1cnJlbnQgKTtcblxuXHRcdHRoaXMuYmVmb3JlU3VibWl0KCAoIHJlc29sdmUgKSA9PiB7XG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCggdHJ1ZSApO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0sIHRoaXMgKTtcblx0fTtcblxuXHR0aGlzLnNldE5vZGUgICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XG5cblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBmb3JtdWxhLFxuXHRcdFx0ICAgICAgcHJlY2lzaW9uLFxuXHRcdFx0ICAgICAgc2VwRGVjaW1hbCxcblx0XHRcdCAgICAgIHZhbHVlVHlwZSxcblx0XHRcdCAgICAgIHNlcFRob3VzYW5kcyxcblx0XHRcdCAgICAgIGRhdGVGb3JtYXQsXG5cdFx0ICAgICAgfSA9IGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICkuZGF0YXNldDtcblxuXHRcdHRoaXMuZm9ybXVsYSAgICAgICAgPSBmb3JtdWxhO1xuXHRcdHRoaXMucHJlY2lzaW9uICAgICAgPSArcHJlY2lzaW9uO1xuXHRcdHRoaXMuc2VwRGVjaW1hbCAgICAgPSBzZXBEZWNpbWFsID8/ICcnO1xuXHRcdHRoaXMuc2VwVGhvdXNhbmRzICAgPSBzZXBUaG91c2FuZHMgPz8gJyc7XG5cdFx0dGhpcy52aXNpYmxlVmFsTm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdHRoaXMudmFsdWVUeXBlUHJvcCAgPSB2YWx1ZVR5cGU7XG5cdFx0dGhpcy5kYXRlRm9ybWF0ICAgICA9IGRhdGVGb3JtYXQ7XG5cdFx0dGhpcy5pbnB1dFR5cGUgICAgICA9ICdjYWxjdWxhdGVkJztcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gc2lsZW5jZSBpcyBnb2xkZW5cblx0fTtcblxuXHQvLyBjYWxjdWxhdGVkIGZpZWxkIGNhbid0IGJlIHZhbGlkYXRlZFxuXHR0aGlzLnJlcG9ydCA9ICgpID0+IHt9O1xuXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XG5cblx0dGhpcy5yZXZlcnRWYWx1ZSA9ICgpID0+IHt9O1xufVxuXG5DYWxjdWxhdGVkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWREYXRhO1xuIiwiaW1wb3J0IHsgaXNDYWxjdWxhdGVkIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IHtDYWxjdWxhdGVkRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dCBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBTaWduYWxDYWxjdWxhdGVkKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0NhbGN1bGF0ZWQoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLmJhc2VTaWduYWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0Y29uc3QgaXNOdW1iZXIgPSAnbnVtYmVyJyA9PT0gdGhpcy5pbnB1dC52YWx1ZVR5cGVQcm9wO1xuXG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSBpc051bWJlclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLndpdGhQcmVjaXNpb24oKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHR0aGlzLmlucHV0LnZhbHVlLnNpbGVuY2UoKTtcblx0XHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSBpc051bWJlclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5jb252ZXJ0VmFsdWUoKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xuXG5cdFx0dGhpcy5pbnB1dC52aXNpYmxlVmFsTm9kZS50ZXh0Q29udGVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdG5vZGUudmFsdWUgPSB0aGlzLmlucHV0LmNhbGNWYWx1ZTtcblx0fTtcblxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmJhc2VTaWduYWwoKTtcblxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xuXHR9O1xufVxuXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLmNvbnZlcnRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0aWYgKCBOdW1iZXIuaXNOYU4oIE51bWJlciggdmFsdWUgKSApICkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgcGFydHMgPSB0aGlzLndpdGhQcmVjaXNpb24oKS50b1N0cmluZygpLnNwbGl0KCAnLicgKTtcblxuXHRpZiAoIHRoaXMuaW5wdXQuc2VwVGhvdXNhbmRzICkge1xuXHRcdHBhcnRzWyAwIF0gPSBwYXJ0c1sgMCBdLnJlcGxhY2UoXG5cdFx0XHQvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZyxcblx0XHRcdHRoaXMuaW5wdXQuc2VwVGhvdXNhbmRzLFxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gcGFydHMuam9pbiggdGhpcy5pbnB1dC5zZXBEZWNpbWFsICk7XG59O1xuXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZS53aXRoUHJlY2lzaW9uID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gTnVtYmVyKCB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgKS50b0ZpeGVkKCB0aGlzLmlucHV0LnByZWNpc2lvbiApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsQ2FsY3VsYXRlZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhbGN1bGF0ZWREYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbENhbGN1bGF0ZWQgZnJvbSAnLi9zaWduYWwnO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIENhbGN1bGF0ZWREYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsQ2FsY3VsYXRlZCwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==