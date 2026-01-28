/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/calculated.field/functions.js":
/*!************************************************!*\
  !*** ./frontend/calculated.field/functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./frontend/calculated.field/input.js":
/*!********************************************!*\
  !*** ./frontend/calculated.field/input.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    const formula = new CalculatedFormula(this, {
      forceFunction: true
    });
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

/***/ }),

/***/ "./frontend/calculated.field/signal.js":
/*!*********************************************!*\
  !*** ./frontend/calculated.field/signal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2lucHV0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDYWxjdWxhdGVkV3JhcHBlciggbm9kZSApIHtcclxuXHRyZXR1cm4gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNDYWxjdWxhdGVkKCBub2RlICkge1xyXG5cdHJldHVybiAhIShcclxuXHRcdGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICk/LmRhdGFzZXQ/LmZvcm11bGE/Lmxlbmd0aCA/PyAnJ1xyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRzIG1pbGxpc2Vjb25kcyBpbnRvIGEgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdC5cclxuICpcclxuICogU3VwcG9ydGVkIHBsYWNlaG9sZGVyczpcclxuICogWVlZWSDigJQgNC1kaWdpdCB5ZWFyICgyMDI0KVxyXG4gKiBNTSAgIOKAlCBtb250aCB3aXRoIGxlYWRpbmcgemVybyAoMDHigJMxMilcclxuICogTSAgICDigJQgbW9udGggd2l0aG91dCBsZWFkaW5nIHplcm8gKDHigJMxMilcclxuICogTU1NICDigJQgYWJicmV2aWF0ZWQgbW9udGggbmFtZSAoSmFu4oCTRGVjKVxyXG4gKiBNTU1NIOKAlCBmdWxsIG1vbnRoIG5hbWUgKEphbnVhcnnigJNEZWNlbWJlcilcclxuICogREQgICDigJQgZGF5IG9mIG1vbnRoIHdpdGggbGVhZGluZyB6ZXJvICgwMeKAkzMxKVxyXG4gKiBEICAgIOKAlCBkYXkgb2YgbW9udGggd2l0aG91dCBsZWFkaW5nIHplcm8gKDHigJMzMSlcclxuICogSEggICDigJQgaG91cnMgd2l0aCBsZWFkaW5nIHplcm8gKDAw4oCTMjMpIGluIDI0LWhvdXIgZm9ybWF0XHJcbiAqIEggICAg4oCUIGhvdXJzIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgw4oCTMjMpIGluIDI0LWhvdXIgZm9ybWF0XHJcbiAqIGhoICAg4oCUIGhvdXJzIHdpdGggbGVhZGluZyB6ZXJvICgwMeKAkzEyKSBpbiAxMi1ob3VyIGZvcm1hdFxyXG4gKiBoICAgIOKAlCBob3VycyB3aXRob3V0IGxlYWRpbmcgemVybyAoMeKAkzEyKSBpbiAxMi1ob3VyIGZvcm1hdFxyXG4gKiBtbSAgIOKAlCBtaW51dGVzIHdpdGggbGVhZGluZyB6ZXJvICgwMOKAkzU5KVxyXG4gKiBtICAgIOKAlCBtaW51dGVzIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgw4oCTNTkpXHJcbiAqIHNzICAg4oCUIHNlY29uZHMgd2l0aCBsZWFkaW5nIHplcm8gKDAw4oCTNTkpXHJcbiAqIHMgICAg4oCUIHNlY29uZHMgd2l0aG91dCBsZWFkaW5nIHplcm8gKDDigJM1OSlcclxuICogZGRkZCDigJQgZnVsbCBkYXkgb2Ygd2VlayBuYW1lIChNb25kYXnigJNTdW5kYXkpXHJcbiAqIGRkZCAg4oCUIGFiYnJldmlhdGVkIGRheSBvZiB3ZWVrIG5hbWUgKE1vbuKAk1N1bilcclxuICogQSAgICDigJQgQU0vUE0gZGVzaWduYXRpb25cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBtaWxsaXNJbnB1dCDigJQgbWlsbGlzZWNvbmRzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQg4oCUIGZvcm1hdCBzdHJpbmdcclxuICogQHJldHVybnMge3N0cmluZ3xudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nKCBtaWxsaXNJbnB1dCwgZm9ybWF0ID0gJ1lZWVktTU0tREQnICkge1xyXG5cdGNvbnN0IG1pbGxpcyA9IGV2YWwoIG1pbGxpc0lucHV0ICk7XHJcblxyXG5cdGlmICggIW1pbGxpcyB8fCBpc05hTiggbWlsbGlzICkgfHwgbnVsbCA9PT0gbWlsbGlzIHx8IDAgPT09IG1pbGxpcyApIHtcclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCBtaWxsaXMgKTtcclxuXHJcblx0Y29uc3QgbW9udGhzRnVsbCA9IFtcclxuXHRcdCdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcclxuXHRcdCdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcclxuXHRdO1xyXG5cdGNvbnN0IG1vbnRoc1Nob3J0ID0gbW9udGhzRnVsbC5tYXAoIG0gPT4gbS5zbGljZSggMCwgMyApICk7XHJcblxyXG5cdGNvbnN0IGRheXNGdWxsID0gW1xyXG5cdFx0J1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J1xyXG5cdF07XHJcblxyXG5cdGNvbnN0IGRheXNTaG9ydCA9IGRheXNGdWxsLm1hcCggZCA9PiBkLnNsaWNlKCAwLCAzICkgKTtcclxuXHJcblx0Y29uc3QgaG91cnMxMiA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyOyAvLyBDb252ZXJ0IDAgdG8gMTIgZm9yIDEyLWhvdXIgZm9ybWF0XHJcblx0Y29uc3QgYW1wbSAgICA9IGRhdGUuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG5cclxuXHRjb25zdCBtYXAgPSB7XHJcblx0XHRZWVlZOiBkYXRlLmdldEZ1bGxZZWFyKCksXHJcblx0XHRNTTogU3RyaW5nKCBkYXRlLmdldE1vbnRoKCkgKyAxICkucGFkU3RhcnQoIDIsICcwJyApLFxyXG5cdFx0TTogZGF0ZS5nZXRNb250aCgpICsgMSxcclxuXHRcdE1NTTogbW9udGhzU2hvcnRbIGRhdGUuZ2V0TW9udGgoKSBdLFxyXG5cdFx0TU1NTTogbW9udGhzRnVsbFsgZGF0ZS5nZXRNb250aCgpIF0sXHJcblx0XHRERDogU3RyaW5nKCBkYXRlLmdldERhdGUoKSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcclxuXHRcdEQ6IGRhdGUuZ2V0RGF0ZSgpLFxyXG5cdFx0SEg6IFN0cmluZyggZGF0ZS5nZXRIb3VycygpICkucGFkU3RhcnQoIDIsICcwJyApLFxyXG5cdFx0SDogZGF0ZS5nZXRIb3VycygpLFxyXG5cdFx0aGg6IFN0cmluZyggaG91cnMxMiApLnBhZFN0YXJ0KCAyLCAnMCcgKSwgLy8gMTItaG91ciBmb3JtYXQgd2l0aCBsZWFkaW5nIHplcm9cclxuXHRcdGg6IGhvdXJzMTIsIC8vIDEyLWhvdXIgZm9ybWF0IHdpdGhvdXQgbGVhZGluZyB6ZXJvXHJcblx0XHRtbTogU3RyaW5nKCBkYXRlLmdldE1pbnV0ZXMoKSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcclxuXHRcdG06IGRhdGUuZ2V0TWludXRlcygpLFxyXG5cdFx0c3M6IFN0cmluZyggZGF0ZS5nZXRTZWNvbmRzKCkgKS5wYWRTdGFydCggMiwgJzAnICksXHJcblx0XHRzOiBkYXRlLmdldFNlY29uZHMoKSxcclxuXHRcdGRkZGQ6IGRheXNGdWxsWyBkYXRlLmdldERheSgpIF0sXHJcblx0XHRkZGQ6IGRheXNTaG9ydFsgZGF0ZS5nZXREYXkoKSBdLFxyXG5cdFx0QTogYW1wbSwgLy8gQU0vUE1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzb3J0ZWRLZXlzID0gT2JqZWN0LmtleXMoIG1hcCApLnNvcnQoICggYSwgYiApID0+IGIubGVuZ3RoIC0gYS5sZW5ndGggKTtcclxuXHJcblx0Ly8gVXNlIHRlbXBvcmFyeSBwbGFjZWhvbGRlcnMgdG8gcHJldmVudCBjb25mbGljdHNcclxuXHRsZXQgZm9ybWF0dGVkID0gZm9ybWF0O1xyXG5cdGNvbnN0IHBsYWNlaG9sZGVycyA9IHt9O1xyXG5cclxuXHQvLyBGaXJzdCBwYXNzOiByZXBsYWNlIGZvcm1hdCB0b2tlbnMgd2l0aCB1bmlxdWUgcGxhY2Vob2xkZXJzXHJcblx0c29ydGVkS2V5cy5mb3JFYWNoKCAoIGtleSwgaW5kZXggKSA9PiB7XHJcblx0XHRjb25zdCBwbGFjZWhvbGRlciA9IGBcXHgwMCR7aW5kZXh9XFx4MDBgOyAvLyBVc2UgaW5kZXgtYmFzZWQgdW5pcXVlIGlkZW50aWZpZXJcclxuXHRcdHBsYWNlaG9sZGVyc1twbGFjZWhvbGRlcl0gPSBTdHJpbmcoIG1hcFtrZXldICk7XHJcblxyXG5cdFx0Ly8gVXNlIHdvcmQgYm91bmRhcmllcyBmb3Igc2luZ2xlLWxldHRlciB0b2tlbnMgdG8gYXZvaWQgcmVwbGFjaW5nIGxldHRlcnMgaW4gdGV4dFxyXG5cdFx0Y29uc3QgcGF0dGVybiA9IGtleS5sZW5ndGggPD0gMiAmJiAvXlthLXpBLVpdKyQvLnRlc3QoIGtleSApXHJcblx0XHRcdD8gbmV3IFJlZ0V4cCggYFxcXFxiJHtrZXl9XFxcXGJgLCAnZycgKVxyXG5cdFx0XHQ6IG5ldyBSZWdFeHAoIGtleSwgJ2cnICk7XHJcblxyXG5cdFx0Zm9ybWF0dGVkID0gZm9ybWF0dGVkLnJlcGxhY2UoIHBhdHRlcm4sIHBsYWNlaG9sZGVyICk7XHJcblx0fSApO1xyXG5cclxuXHQvLyBTZWNvbmQgcGFzczogcmVwbGFjZSBwbGFjZWhvbGRlcnMgd2l0aCBhY3R1YWwgdmFsdWVzXHJcblx0Zm9yICggY29uc3QgW3BsYWNlaG9sZGVyLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHBsYWNlaG9sZGVycyApICkge1xyXG5cdFx0Zm9ybWF0dGVkID0gZm9ybWF0dGVkLnNwbGl0KCBwbGFjZWhvbGRlciApLmpvaW4oIHZhbHVlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZm9ybWF0dGVkO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc0NhbGN1bGF0ZWQsIGdldENhbGN1bGF0ZWRXcmFwcGVyLCBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nIH07IiwiaW1wb3J0IHsgZ2V0Q2FsY3VsYXRlZFdyYXBwZXIsIGlzQ2FsY3VsYXRlZCwgY29udmVydE1pbGxpc1RvRGF0ZVN0cmluZyB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBJbnB1dERhdGEsXHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVycyxcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzOiBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzID0gZmFsc2UsXHJcbiAgICAgIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyTWFpbj8uZmlsdGVycyA/PyB7fTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIENhbGN1bGF0ZWREYXRhKCkge1xyXG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZm9ybXVsYSAgICAgICAgPSAnJztcclxuXHR0aGlzLnByZWNpc2lvbiAgICAgID0gMDtcclxuXHR0aGlzLnNlcERlY2ltYWwgICAgID0gJyc7XHJcblx0dGhpcy5zZXBUaG91c2FuZHMgICA9ICcnO1xyXG5cdHRoaXMudmlzaWJsZVZhbE5vZGUgPSBudWxsO1xyXG5cdHRoaXMudmFsdWVUeXBlUHJvcCAgPSAnbnVtYmVyJztcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc0NhbGN1bGF0ZWQoIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0VmFsdWUgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLCB7IGZvcmNlRnVuY3Rpb246IHRydWUgfSApO1xyXG5cclxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy5mb3JtdWxhICk7XHJcblx0XHRmb3JtdWxhLnNldFJlc3VsdCAgICAgICA9ICgpID0+IHtcclxuXHRcdFx0aWYgKCAnZGF0ZScgPT09IHRoaXMudmFsdWVUeXBlUHJvcCApIHtcclxuXHRcdFx0XHRjb25zdCBkYXRlX2Zvcm11bGEgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGNvbnZlcnRNaWxsaXNUb0RhdGVTdHJpbmcoIGRhdGVfZm9ybXVsYSwgdGhpcy5kYXRlRm9ybWF0ICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gKCBpbnB1dCApID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBhcHBseUZpbHRlcnMoXHJcblx0XHRcdFx0J2pldC5mYi5jYWxjdWxhdGVkLmNhbGxiYWNrJyxcclxuXHRcdFx0XHRmYWxzZSxcclxuXHRcdFx0XHRpbnB1dCxcclxuXHRcdFx0XHR0aGlzLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKCBmYWxzZSAhPT0gdmFsdWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3BcclxuXHRcdFx0ICAgICAgICAgICAgICAgICA/IGlucHV0LmNhbGNWYWx1ZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgIDogaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHRcdGlmICggZmFsc2UgPT09IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBmaWx0ZXJSZXN1bHQgPSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdCdmb3Jtcy9jYWxjdWxhdGVkLWZpZWxkLXZhbHVlJyxcclxuXHRcdFx0XHRpbnB1dC52YWx1ZS5jdXJyZW50LFxyXG5cdFx0XHRcdGpRdWVyeSggaW5wdXQubm9kZXNbIDAgXSApLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZpbHRlclJlc3VsdCA9PT0gaW5wdXQudmFsdWUuY3VycmVudFxyXG5cdFx0XHQgICAgICAgPyByZXNwb25zZVxyXG5cdFx0XHQgICAgICAgOiBmaWx0ZXJSZXN1bHQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdGZvcm11bGEuZW1wdHlWYWx1ZSA9ICgpID0+ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3BcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XHJcblxyXG5cdFx0dGhpcy5iZWZvcmVTdWJtaXQoICggcmVzb2x2ZSApID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG51bGw7XHJcblx0XHRcdHRoaXMudmFsdWUuc2lsZW5jZSgpO1xyXG5cclxuXHRcdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0fSwgdGhpcyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHRcdElucHV0RGF0YS5wcm90b3R5cGUucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XHJcblxyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHQgICAgICBmb3JtdWxhLFxyXG5cdFx0XHQgICAgICBwcmVjaXNpb24sXHJcblx0XHRcdCAgICAgIHNlcERlY2ltYWwsXHJcblx0XHRcdCAgICAgIHZhbHVlVHlwZSxcclxuXHRcdFx0ICAgICAgc2VwVGhvdXNhbmRzLFxyXG5cdFx0XHQgICAgICBkYXRlRm9ybWF0LFxyXG5cdFx0ICAgICAgfSA9IGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICkuZGF0YXNldDtcclxuXHJcblx0XHR0aGlzLmZvcm11bGEgICAgICAgID0gZm9ybXVsYTtcclxuXHRcdHRoaXMucHJlY2lzaW9uICAgICAgPSArcHJlY2lzaW9uO1xyXG5cdFx0dGhpcy5zZXBEZWNpbWFsICAgICA9IHNlcERlY2ltYWwgPz8gJyc7XHJcblx0XHR0aGlzLnNlcFRob3VzYW5kcyAgID0gc2VwVGhvdXNhbmRzID8/ICcnO1xyXG5cdFx0dGhpcy52aXNpYmxlVmFsTm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdFx0dGhpcy52YWx1ZVR5cGVQcm9wICA9IHZhbHVlVHlwZTtcclxuXHRcdHRoaXMuZGF0ZUZvcm1hdCAgICAgPSBkYXRlRm9ybWF0O1xyXG5cdFx0dGhpcy5pbnB1dFR5cGUgICAgICA9ICdjYWxjdWxhdGVkJztcclxuXHR9O1xyXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gc2lsZW5jZSBpcyBnb2xkZW5cclxuXHR9O1xyXG5cclxuXHQvLyBjYWxjdWxhdGVkIGZpZWxkIGNhbid0IGJlIHZhbGlkYXRlZFxyXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XHJcblxyXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XHJcblxyXG5cdHRoaXMucmV2ZXJ0VmFsdWUgPSAoKSA9PiB7fTtcclxufVxyXG5cclxuQ2FsY3VsYXRlZERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZERhdGE7XHJcbiIsImltcG9ydCB7IGlzQ2FsY3VsYXRlZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCYXNlU2lnbmFsLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtDYWxjdWxhdGVkRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dCBpbnN0YW5jZVxyXG4gKi9cclxuZnVuY3Rpb24gU2lnbmFsQ2FsY3VsYXRlZCgpIHtcclxuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc0NhbGN1bGF0ZWQoIG5vZGUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmJhc2VTaWduYWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0Y29uc3QgaXNOdW1iZXIgPSAnbnVtYmVyJyA9PT0gdGhpcy5pbnB1dC52YWx1ZVR5cGVQcm9wO1xyXG5cclxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gaXNOdW1iZXJcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLndpdGhQcmVjaXNpb24oKVxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHR0aGlzLmlucHV0LnZhbHVlLnNpbGVuY2UoKTtcclxuXHRcdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IGlzTnVtYmVyXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuY29udmVydFZhbHVlKClcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5zaWxlbmNlKCk7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC52aXNpYmxlVmFsTm9kZS50ZXh0Q29udGVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHRub2RlLnZhbHVlID0gdGhpcy5pbnB1dC5jYWxjVmFsdWU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmJhc2VTaWduYWwoKTtcclxuXHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xyXG5cclxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUuY29udmVydFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRpZiAoIE51bWJlci5pc05hTiggTnVtYmVyKCB2YWx1ZSApICkgKSB7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBhcnRzID0gdGhpcy53aXRoUHJlY2lzaW9uKCkudG9TdHJpbmcoKS5zcGxpdCggJy4nICk7XHJcblxyXG5cdGlmICggdGhpcy5pbnB1dC5zZXBUaG91c2FuZHMgKSB7XHJcblx0XHRwYXJ0c1sgMCBdID0gcGFydHNbIDAgXS5yZXBsYWNlKFxyXG5cdFx0XHQvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZyxcclxuXHRcdFx0dGhpcy5pbnB1dC5zZXBUaG91c2FuZHMsXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHBhcnRzLmpvaW4oIHRoaXMuaW5wdXQuc2VwRGVjaW1hbCApO1xyXG59O1xyXG5cclxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUud2l0aFByZWNpc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gTnVtYmVyKCB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgKS50b0ZpeGVkKCB0aGlzLmlucHV0LnByZWNpc2lvbiApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsQ2FsY3VsYXRlZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDYWxjdWxhdGVkRGF0YSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFNpZ25hbENhbGN1bGF0ZWQgZnJvbSAnLi9zaWduYWwnO1xyXG5cclxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBDYWxjdWxhdGVkRGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsQ2FsY3VsYXRlZCwgLi4uc2lnbmFscyBdO1xyXG5cclxuXHRcdHJldHVybiBzaWduYWxzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9