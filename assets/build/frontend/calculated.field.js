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
  let formatted = format;
  for (const key of sortedKeys) {
    formatted = formatted.replace(new RegExp(key, 'g'), map[key]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKSB7XHJcblx0cmV0dXJuIG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyX19jYWxjdWxhdGVkLWZpZWxkJyApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzQ2FsY3VsYXRlZCggbm9kZSApIHtcclxuXHRyZXR1cm4gISEoXHJcblx0XHRnZXRDYWxjdWxhdGVkV3JhcHBlciggbm9kZSApPy5kYXRhc2V0Py5mb3JtdWxhPy5sZW5ndGggPz8gJydcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogRm9ybWF0cyBtaWxsaXNlY29uZHMgaW50byBhIHN0cmluZyBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQuXHJcbiAqXHJcbiAqIFN1cHBvcnRlZCBwbGFjZWhvbGRlcnM6XHJcbiAqIFlZWVkg4oCUIDQtZGlnaXQgeWVhciAoMjAyNClcclxuICogTU0gICDigJQgbW9udGggd2l0aCBsZWFkaW5nIHplcm8gKDAx4oCTMTIpXHJcbiAqIE0gICAg4oCUIG1vbnRoIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgx4oCTMTIpXHJcbiAqIE1NTSAg4oCUIGFiYnJldmlhdGVkIG1vbnRoIG5hbWUgKEphbuKAk0RlYylcclxuICogTU1NTSDigJQgZnVsbCBtb250aCBuYW1lIChKYW51YXJ54oCTRGVjZW1iZXIpXHJcbiAqIEREICAg4oCUIGRheSBvZiBtb250aCB3aXRoIGxlYWRpbmcgemVybyAoMDHigJMzMSlcclxuICogRCAgICDigJQgZGF5IG9mIG1vbnRoIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgx4oCTMzEpXHJcbiAqIEhIICAg4oCUIGhvdXJzIHdpdGggbGVhZGluZyB6ZXJvICgwMOKAkzIzKSBpbiAyNC1ob3VyIGZvcm1hdFxyXG4gKiBIICAgIOKAlCBob3VycyB3aXRob3V0IGxlYWRpbmcgemVybyAoMOKAkzIzKSBpbiAyNC1ob3VyIGZvcm1hdFxyXG4gKiBoaCAgIOKAlCBob3VycyB3aXRoIGxlYWRpbmcgemVybyAoMDHigJMxMikgaW4gMTItaG91ciBmb3JtYXRcclxuICogaCAgICDigJQgaG91cnMgd2l0aG91dCBsZWFkaW5nIHplcm8gKDHigJMxMikgaW4gMTItaG91ciBmb3JtYXRcclxuICogbW0gICDigJQgbWludXRlcyB3aXRoIGxlYWRpbmcgemVybyAoMDDigJM1OSlcclxuICogbSAgICDigJQgbWludXRlcyB3aXRob3V0IGxlYWRpbmcgemVybyAoMOKAkzU5KVxyXG4gKiBzcyAgIOKAlCBzZWNvbmRzIHdpdGggbGVhZGluZyB6ZXJvICgwMOKAkzU5KVxyXG4gKiBzICAgIOKAlCBzZWNvbmRzIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgw4oCTNTkpXHJcbiAqIGRkZGQg4oCUIGZ1bGwgZGF5IG9mIHdlZWsgbmFtZSAoTW9uZGF54oCTU3VuZGF5KVxyXG4gKiBkZGQgIOKAlCBhYmJyZXZpYXRlZCBkYXkgb2Ygd2VlayBuYW1lIChNb27igJNTdW4pXHJcbiAqIEEgICAg4oCUIEFNL1BNIGRlc2lnbmF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbWlsbGlzSW5wdXQg4oCUIG1pbGxpc2Vjb25kc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IOKAlCBmb3JtYXQgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gY29udmVydE1pbGxpc1RvRGF0ZVN0cmluZyggbWlsbGlzSW5wdXQsIGZvcm1hdCA9ICdZWVlZLU1NLUREJyApIHtcclxuXHRjb25zdCBtaWxsaXMgPSBldmFsKCBtaWxsaXNJbnB1dCApO1xyXG5cclxuXHRpZiAoICFtaWxsaXMgfHwgaXNOYU4oIG1pbGxpcyApIHx8IG51bGwgPT09IG1pbGxpcyB8fCAwID09PSBtaWxsaXMgKSB7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggbWlsbGlzICk7XHJcblxyXG5cdGNvbnN0IG1vbnRoc0Z1bGwgPSBbXHJcblx0XHQnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXHJcblx0XHQnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXHJcblx0XTtcclxuXHRjb25zdCBtb250aHNTaG9ydCA9IG1vbnRoc0Z1bGwubWFwKCBtID0+IG0uc2xpY2UoIDAsIDMgKSApO1xyXG5cclxuXHRjb25zdCBkYXlzRnVsbCA9IFtcclxuXHRcdCdTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSdcclxuXHRdO1xyXG5cclxuXHRjb25zdCBkYXlzU2hvcnQgPSBkYXlzRnVsbC5tYXAoIGQgPT4gZC5zbGljZSggMCwgMyApICk7XHJcblxyXG5cdGNvbnN0IGhvdXJzMTIgPSBkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMjsgLy8gQ29udmVydCAwIHRvIDEyIGZvciAxMi1ob3VyIGZvcm1hdFxyXG5cdGNvbnN0IGFtcG0gICAgPSBkYXRlLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuXHJcblx0Y29uc3QgbWFwID0ge1xyXG5cdFx0WVlZWTogZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0TU06IFN0cmluZyggZGF0ZS5nZXRNb250aCgpICsgMSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcclxuXHRcdE06IGRhdGUuZ2V0TW9udGgoKSArIDEsXHJcblx0XHRNTU06IG1vbnRoc1Nob3J0WyBkYXRlLmdldE1vbnRoKCkgXSxcclxuXHRcdE1NTU06IG1vbnRoc0Z1bGxbIGRhdGUuZ2V0TW9udGgoKSBdLFxyXG5cdFx0REQ6IFN0cmluZyggZGF0ZS5nZXREYXRlKCkgKS5wYWRTdGFydCggMiwgJzAnICksXHJcblx0XHREOiBkYXRlLmdldERhdGUoKSxcclxuXHRcdEhIOiBTdHJpbmcoIGRhdGUuZ2V0SG91cnMoKSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcclxuXHRcdEg6IGRhdGUuZ2V0SG91cnMoKSxcclxuXHRcdGhoOiBTdHJpbmcoIGhvdXJzMTIgKS5wYWRTdGFydCggMiwgJzAnICksIC8vIDEyLWhvdXIgZm9ybWF0IHdpdGggbGVhZGluZyB6ZXJvXHJcblx0XHRoOiBob3VyczEyLCAvLyAxMi1ob3VyIGZvcm1hdCB3aXRob3V0IGxlYWRpbmcgemVyb1xyXG5cdFx0bW06IFN0cmluZyggZGF0ZS5nZXRNaW51dGVzKCkgKS5wYWRTdGFydCggMiwgJzAnICksXHJcblx0XHRtOiBkYXRlLmdldE1pbnV0ZXMoKSxcclxuXHRcdHNzOiBTdHJpbmcoIGRhdGUuZ2V0U2Vjb25kcygpICkucGFkU3RhcnQoIDIsICcwJyApLFxyXG5cdFx0czogZGF0ZS5nZXRTZWNvbmRzKCksXHJcblx0XHRkZGRkOiBkYXlzRnVsbFsgZGF0ZS5nZXREYXkoKSBdLFxyXG5cdFx0ZGRkOiBkYXlzU2hvcnRbIGRhdGUuZ2V0RGF5KCkgXSxcclxuXHRcdEE6IGFtcG0sIC8vIEFNL1BNXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc29ydGVkS2V5cyA9IE9iamVjdC5rZXlzKCBtYXAgKS5zb3J0KCAoIGEsIGIgKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoICk7XHJcblxyXG5cdGxldCBmb3JtYXR0ZWQgPSBmb3JtYXQ7XHJcblx0Zm9yICggY29uc3Qga2V5IG9mIHNvcnRlZEtleXMgKSB7XHJcblx0XHRmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZSggbmV3IFJlZ0V4cCgga2V5LCAnZycgKSwgbWFwW2tleV0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBmb3JtYXR0ZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzQ2FsY3VsYXRlZCwgZ2V0Q2FsY3VsYXRlZFdyYXBwZXIsIGNvbnZlcnRNaWxsaXNUb0RhdGVTdHJpbmcgfTsiLCJpbXBvcnQgeyBnZXRDYWxjdWxhdGVkV3JhcHBlciwgaXNDYWxjdWxhdGVkLCBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIElucHV0RGF0YSxcclxuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnM6IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgPSBmYWxzZSxcclxuICAgICAgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJNYWluPy5maWx0ZXJzID8/IHt9O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuZnVuY3Rpb24gQ2FsY3VsYXRlZERhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5mb3JtdWxhICAgICAgICA9ICcnO1xyXG5cdHRoaXMucHJlY2lzaW9uICAgICAgPSAwO1xyXG5cdHRoaXMuc2VwRGVjaW1hbCAgICAgPSAnJztcclxuXHR0aGlzLnNlcFRob3VzYW5kcyAgID0gJyc7XHJcblx0dGhpcy52aXNpYmxlVmFsTm9kZSA9IG51bGw7XHJcblx0dGhpcy52YWx1ZVR5cGVQcm9wICA9ICdudW1iZXInO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5zZXRWYWx1ZSAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMsIHsgZm9yY2VGdW5jdGlvbjogdHJ1ZSB9ICk7XHJcblxyXG5cdFx0Zm9ybXVsYS5vYnNlcnZlKCB0aGlzLmZvcm11bGEgKTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xyXG5cdFx0XHRpZiAoICdkYXRlJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wICkge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGVfZm9ybXVsYSA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gY29udmVydE1pbGxpc1RvRGF0ZVN0cmluZyggZGF0ZV9mb3JtdWxhLCB0aGlzLmRhdGVGb3JtYXQgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSAoIGlucHV0ICkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGFwcGx5RmlsdGVycyhcclxuXHRcdFx0XHQnamV0LmZiLmNhbGN1bGF0ZWQuY2FsbGJhY2snLFxyXG5cdFx0XHRcdGZhbHNlLFxyXG5cdFx0XHRcdGlucHV0LFxyXG5cdFx0XHRcdHRoaXMsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoIGZhbHNlICE9PSB2YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgID8gaW5wdXQuY2FsY1ZhbHVlXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgOiBpbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGZpbHRlclJlc3VsdCA9IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMoXHJcblx0XHRcdFx0J2Zvcm1zL2NhbGN1bGF0ZWQtZmllbGQtdmFsdWUnLFxyXG5cdFx0XHRcdGlucHV0LnZhbHVlLmN1cnJlbnQsXHJcblx0XHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmlsdGVyUmVzdWx0ID09PSBpbnB1dC52YWx1ZS5jdXJyZW50XHJcblx0XHRcdCAgICAgICA/IHJlc3BvbnNlXHJcblx0XHRcdCAgICAgICA6IGZpbHRlclJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0Zm9ybXVsYS5lbXB0eVZhbHVlID0gKCkgPT4gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuYXBwbHlTYW5pdGl6ZXJzKCB0aGlzLnZhbHVlLmN1cnJlbnQgKTtcclxuXHJcblx0XHR0aGlzLmJlZm9yZVN1Ym1pdCggKCByZXNvbHZlICkgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbnVsbDtcclxuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XHJcblxyXG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cdFx0XHRyZXNvbHZlKCk7XHJcblx0XHR9LCB0aGlzICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdCAgICAgIGZvcm11bGEsXHJcblx0XHRcdCAgICAgIHByZWNpc2lvbixcclxuXHRcdFx0ICAgICAgc2VwRGVjaW1hbCxcclxuXHRcdFx0ICAgICAgdmFsdWVUeXBlLFxyXG5cdFx0XHQgICAgICBzZXBUaG91c2FuZHMsXHJcblx0XHRcdCAgICAgIGRhdGVGb3JtYXQsXHJcblx0XHQgICAgICB9ID0gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKS5kYXRhc2V0O1xyXG5cclxuXHRcdHRoaXMuZm9ybXVsYSAgICAgICAgPSBmb3JtdWxhO1xyXG5cdFx0dGhpcy5wcmVjaXNpb24gICAgICA9ICtwcmVjaXNpb247XHJcblx0XHR0aGlzLnNlcERlY2ltYWwgICAgID0gc2VwRGVjaW1hbCA/PyAnJztcclxuXHRcdHRoaXMuc2VwVGhvdXNhbmRzICAgPSBzZXBUaG91c2FuZHMgPz8gJyc7XHJcblx0XHR0aGlzLnZpc2libGVWYWxOb2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHR0aGlzLnZhbHVlVHlwZVByb3AgID0gdmFsdWVUeXBlO1xyXG5cdFx0dGhpcy5kYXRlRm9ybWF0ICAgICA9IGRhdGVGb3JtYXQ7XHJcblx0XHR0aGlzLmlucHV0VHlwZSAgICAgID0gJ2NhbGN1bGF0ZWQnO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxyXG5cdH07XHJcblxyXG5cdC8vIGNhbGN1bGF0ZWQgZmllbGQgY2FuJ3QgYmUgdmFsaWRhdGVkXHJcblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZXZlcnRWYWx1ZSA9ICgpID0+IHt9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRGF0YTtcclxuIiwiaW1wb3J0IHsgaXNDYWxjdWxhdGVkIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEJhc2VTaWduYWwsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0NhbGN1bGF0ZWREYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0IGluc3RhbmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBTaWduYWxDYWxjdWxhdGVkKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuYmFzZVNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHJcblx0XHRjb25zdCBpc051bWJlciA9ICdudW1iZXInID09PSB0aGlzLmlucHV0LnZhbHVlVHlwZVByb3A7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSBpc051bWJlclxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMud2l0aFByZWNpc2lvbigpXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gaXNOdW1iZXJcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5jb252ZXJ0VmFsdWUoKVxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0XHR0aGlzLmlucHV0LnZhbHVlLnNpbGVuY2UoKTtcclxuXHJcblx0XHR0aGlzLmlucHV0LnZpc2libGVWYWxOb2RlLnRleHRDb250ZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdG5vZGUudmFsdWUgPSB0aGlzLmlucHV0LmNhbGNWYWx1ZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuYmFzZVNpZ25hbCgpO1xyXG5cclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHJcblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZS5jb252ZXJ0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdGlmICggTnVtYmVyLmlzTmFOKCBOdW1iZXIoIHZhbHVlICkgKSApIHtcclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFydHMgPSB0aGlzLndpdGhQcmVjaXNpb24oKS50b1N0cmluZygpLnNwbGl0KCAnLicgKTtcclxuXHJcblx0aWYgKCB0aGlzLmlucHV0LnNlcFRob3VzYW5kcyApIHtcclxuXHRcdHBhcnRzWyAwIF0gPSBwYXJ0c1sgMCBdLnJlcGxhY2UoXHJcblx0XHRcdC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFxyXG5cdFx0XHR0aGlzLmlucHV0LnNlcFRob3VzYW5kcyxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGFydHMuam9pbiggdGhpcy5pbnB1dC5zZXBEZWNpbWFsICk7XHJcbn07XHJcblxyXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZS53aXRoUHJlY2lzaW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBOdW1iZXIoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApLnRvRml4ZWQoIHRoaXMuaW5wdXQucHJlY2lzaW9uICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxDYWxjdWxhdGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhbGN1bGF0ZWREYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsQ2FsY3VsYXRlZCBmcm9tICcuL3NpZ25hbCc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIENhbGN1bGF0ZWREYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jYWxjdWxhdGVkLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxDYWxjdWxhdGVkLCAuLi5zaWduYWxzIF07XHJcblxyXG5cdFx0cmV0dXJuIHNpZ25hbHM7XHJcblx0fSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=