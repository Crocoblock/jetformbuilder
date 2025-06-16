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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlcl9fY2FsY3VsYXRlZC1maWVsZCcgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDYWxjdWxhdGVkKCBub2RlICkge1xuXHRyZXR1cm4gISEoXG5cdFx0Z2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKT8uZGF0YXNldD8uZm9ybXVsYT8ubGVuZ3RoID8/ICcnXG5cdCk7XG59XG5cbi8qKlxuICogRm9ybWF0cyBtaWxsaXNlY29uZHMgaW50byBhIHN0cmluZyBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQuXG4gKlxuICogU3VwcG9ydGVkIHBsYWNlaG9sZGVyczpcbiAqIFlZWVkg4oCUIDQtZGlnaXQgeWVhciAoMjAyNClcbiAqIE1NICAg4oCUIG1vbnRoIHdpdGggbGVhZGluZyB6ZXJvICgwMeKAkzEyKVxuICogTSAgICDigJQgbW9udGggd2l0aG91dCBsZWFkaW5nIHplcm8gKDHigJMxMilcbiAqIE1NTSAg4oCUIGFiYnJldmlhdGVkIG1vbnRoIG5hbWUgKEphbuKAk0RlYylcbiAqIE1NTU0g4oCUIGZ1bGwgbW9udGggbmFtZSAoSmFudWFyeeKAk0RlY2VtYmVyKVxuICogREQgICDigJQgZGF5IG9mIG1vbnRoIHdpdGggbGVhZGluZyB6ZXJvICgwMeKAkzMxKVxuICogRCAgICDigJQgZGF5IG9mIG1vbnRoIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgx4oCTMzEpXG4gKiBISCAgIOKAlCBob3VycyB3aXRoIGxlYWRpbmcgemVybyAoMDDigJMyMykgaW4gMjQtaG91ciBmb3JtYXRcbiAqIEggICAg4oCUIGhvdXJzIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgw4oCTMjMpIGluIDI0LWhvdXIgZm9ybWF0XG4gKiBoaCAgIOKAlCBob3VycyB3aXRoIGxlYWRpbmcgemVybyAoMDHigJMxMikgaW4gMTItaG91ciBmb3JtYXRcbiAqIGggICAg4oCUIGhvdXJzIHdpdGhvdXQgbGVhZGluZyB6ZXJvICgx4oCTMTIpIGluIDEyLWhvdXIgZm9ybWF0XG4gKiBtbSAgIOKAlCBtaW51dGVzIHdpdGggbGVhZGluZyB6ZXJvICgwMOKAkzU5KVxuICogbSAgICDigJQgbWludXRlcyB3aXRob3V0IGxlYWRpbmcgemVybyAoMOKAkzU5KVxuICogc3MgICDigJQgc2Vjb25kcyB3aXRoIGxlYWRpbmcgemVybyAoMDDigJM1OSlcbiAqIHMgICAg4oCUIHNlY29uZHMgd2l0aG91dCBsZWFkaW5nIHplcm8gKDDigJM1OSlcbiAqIGRkZGQg4oCUIGZ1bGwgZGF5IG9mIHdlZWsgbmFtZSAoTW9uZGF54oCTU3VuZGF5KVxuICogZGRkICDigJQgYWJicmV2aWF0ZWQgZGF5IG9mIHdlZWsgbmFtZSAoTW9u4oCTU3VuKVxuICogQSAgICDigJQgQU0vUE0gZGVzaWduYXRpb25cbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG1pbGxpc0lucHV0IOKAlCBtaWxsaXNlY29uZHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQg4oCUIGZvcm1hdCBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nKCBtaWxsaXNJbnB1dCwgZm9ybWF0ID0gJ1lZWVktTU0tREQnICkge1xuXHRjb25zdCBtaWxsaXMgPSBldmFsKCBtaWxsaXNJbnB1dCApO1xuXG5cdGlmICggIW1pbGxpcyB8fCBpc05hTiggbWlsbGlzICkgfHwgbnVsbCA9PT0gbWlsbGlzIHx8IDAgPT09IG1pbGxpcyApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggbWlsbGlzICk7XG5cblx0Y29uc3QgbW9udGhzRnVsbCA9IFtcblx0XHQnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG5cdFx0J0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuXHRdO1xuXHRjb25zdCBtb250aHNTaG9ydCA9IG1vbnRoc0Z1bGwubWFwKCBtID0+IG0uc2xpY2UoIDAsIDMgKSApO1xuXG5cdGNvbnN0IGRheXNGdWxsID0gW1xuXHRcdCdTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSdcblx0XTtcblxuXHRjb25zdCBkYXlzU2hvcnQgPSBkYXlzRnVsbC5tYXAoIGQgPT4gZC5zbGljZSggMCwgMyApICk7XG5cblx0Y29uc3QgaG91cnMxMiA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyOyAvLyBDb252ZXJ0IDAgdG8gMTIgZm9yIDEyLWhvdXIgZm9ybWF0XG5cdGNvbnN0IGFtcG0gICAgPSBkYXRlLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJztcblxuXHRjb25zdCBtYXAgPSB7XG5cdFx0WVlZWTogZGF0ZS5nZXRGdWxsWWVhcigpLFxuXHRcdE1NOiBTdHJpbmcoIGRhdGUuZ2V0TW9udGgoKSArIDEgKS5wYWRTdGFydCggMiwgJzAnICksXG5cdFx0TTogZGF0ZS5nZXRNb250aCgpICsgMSxcblx0XHRNTU06IG1vbnRoc1Nob3J0WyBkYXRlLmdldE1vbnRoKCkgXSxcblx0XHRNTU1NOiBtb250aHNGdWxsWyBkYXRlLmdldE1vbnRoKCkgXSxcblx0XHRERDogU3RyaW5nKCBkYXRlLmdldERhdGUoKSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcblx0XHREOiBkYXRlLmdldERhdGUoKSxcblx0XHRISDogU3RyaW5nKCBkYXRlLmdldEhvdXJzKCkgKS5wYWRTdGFydCggMiwgJzAnICksXG5cdFx0SDogZGF0ZS5nZXRIb3VycygpLFxuXHRcdGhoOiBTdHJpbmcoIGhvdXJzMTIgKS5wYWRTdGFydCggMiwgJzAnICksIC8vIDEyLWhvdXIgZm9ybWF0IHdpdGggbGVhZGluZyB6ZXJvXG5cdFx0aDogaG91cnMxMiwgLy8gMTItaG91ciBmb3JtYXQgd2l0aG91dCBsZWFkaW5nIHplcm9cblx0XHRtbTogU3RyaW5nKCBkYXRlLmdldE1pbnV0ZXMoKSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcblx0XHRtOiBkYXRlLmdldE1pbnV0ZXMoKSxcblx0XHRzczogU3RyaW5nKCBkYXRlLmdldFNlY29uZHMoKSApLnBhZFN0YXJ0KCAyLCAnMCcgKSxcblx0XHRzOiBkYXRlLmdldFNlY29uZHMoKSxcblx0XHRkZGRkOiBkYXlzRnVsbFsgZGF0ZS5nZXREYXkoKSBdLFxuXHRcdGRkZDogZGF5c1Nob3J0WyBkYXRlLmdldERheSgpIF0sXG5cdFx0QTogYW1wbSwgLy8gQU0vUE1cblx0fTtcblxuXHRjb25zdCBzb3J0ZWRLZXlzID0gT2JqZWN0LmtleXMoIG1hcCApLnNvcnQoICggYSwgYiApID0+IGIubGVuZ3RoIC0gYS5sZW5ndGggKTtcblxuXHRsZXQgZm9ybWF0dGVkID0gZm9ybWF0O1xuXHRmb3IgKCBjb25zdCBrZXkgb2Ygc29ydGVkS2V5cyApIHtcblx0XHRmb3JtYXR0ZWQgPSBmb3JtYXR0ZWQucmVwbGFjZSggbmV3IFJlZ0V4cCgga2V5LCAnZycgKSwgbWFwW2tleV0gKTtcblx0fVxuXG5cdHJldHVybiBmb3JtYXR0ZWQ7XG59XG5cbmV4cG9ydCB7IGlzQ2FsY3VsYXRlZCwgZ2V0Q2FsY3VsYXRlZFdyYXBwZXIsIGNvbnZlcnRNaWxsaXNUb0RhdGVTdHJpbmcgfTsiLCJpbXBvcnQgeyBnZXRDYWxjdWxhdGVkV3JhcHBlciwgaXNDYWxjdWxhdGVkLCBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxuICAgICAgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJNYWluPy5maWx0ZXJzID8/IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gQ2FsY3VsYXRlZERhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mb3JtdWxhICAgICAgICA9ICcnO1xuXHR0aGlzLnByZWNpc2lvbiAgICAgID0gMDtcblx0dGhpcy5zZXBEZWNpbWFsICAgICA9ICcnO1xuXHR0aGlzLnNlcFRob3VzYW5kcyAgID0gJyc7XG5cdHRoaXMudmlzaWJsZVZhbE5vZGUgPSBudWxsO1xuXHR0aGlzLnZhbHVlVHlwZVByb3AgID0gJ251bWJlcic7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XG5cdH07XG5cdHRoaXMuc2V0VmFsdWUgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcywgeyBmb3JjZUZ1bmN0aW9uOiB0cnVlIH0gKTtcblxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy5mb3JtdWxhICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoKSA9PiB7XG5cdFx0XHRpZiAoICdkYXRlJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wICkge1xuXHRcdFx0XHRjb25zdCBkYXRlX2Zvcm11bGEgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBjb252ZXJ0TWlsbGlzVG9EYXRlU3RyaW5nKCBkYXRlX2Zvcm11bGEsIHRoaXMuZGF0ZUZvcm1hdCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gKCBpbnB1dCApID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gYXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmNhbGN1bGF0ZWQuY2FsbGJhY2snLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0aW5wdXQsXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGZhbHNlICE9PSB2YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3Bcblx0XHRcdCAgICAgICAgICAgICAgICAgPyBpbnB1dC5jYWxjVmFsdWVcblx0XHRcdCAgICAgICAgICAgICAgICAgOiBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0XHRpZiAoIGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZpbHRlclJlc3VsdCA9IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdmb3Jtcy9jYWxjdWxhdGVkLWZpZWxkLXZhbHVlJyxcblx0XHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCxcblx0XHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gZmlsdGVyUmVzdWx0ID09PSBpbnB1dC52YWx1ZS5jdXJyZW50XG5cdFx0XHQgICAgICAgPyByZXNwb25zZVxuXHRcdFx0ICAgICAgIDogZmlsdGVyUmVzdWx0O1xuXHRcdH07XG5cblx0XHRmb3JtdWxhLmVtcHR5VmFsdWUgPSAoKSA9PiAnbnVtYmVyJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuYXBwbHlTYW5pdGl6ZXJzKCB0aGlzLnZhbHVlLmN1cnJlbnQgKTtcblxuXHRcdHRoaXMuYmVmb3JlU3VibWl0KCAoIHJlc29sdmUgKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcblxuXHRcdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9LCB0aGlzICk7XG5cdH07XG5cblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnJlUXVlcnlWYWx1ZSA9ICgpID0+IHt9O1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0ICAgICAgZm9ybXVsYSxcblx0XHRcdCAgICAgIHByZWNpc2lvbixcblx0XHRcdCAgICAgIHNlcERlY2ltYWwsXG5cdFx0XHQgICAgICB2YWx1ZVR5cGUsXG5cdFx0XHQgICAgICBzZXBUaG91c2FuZHMsXG5cdFx0XHQgICAgICBkYXRlRm9ybWF0LFxuXHRcdCAgICAgIH0gPSBnZXRDYWxjdWxhdGVkV3JhcHBlciggbm9kZSApLmRhdGFzZXQ7XG5cblx0XHR0aGlzLmZvcm11bGEgICAgICAgID0gZm9ybXVsYTtcblx0XHR0aGlzLnByZWNpc2lvbiAgICAgID0gK3ByZWNpc2lvbjtcblx0XHR0aGlzLnNlcERlY2ltYWwgICAgID0gc2VwRGVjaW1hbCA/PyAnJztcblx0XHR0aGlzLnNlcFRob3VzYW5kcyAgID0gc2VwVGhvdXNhbmRzID8/ICcnO1xuXHRcdHRoaXMudmlzaWJsZVZhbE5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHR0aGlzLnZhbHVlVHlwZVByb3AgID0gdmFsdWVUeXBlO1xuXHRcdHRoaXMuZGF0ZUZvcm1hdCAgICAgPSBkYXRlRm9ybWF0O1xuXHRcdHRoaXMuaW5wdXRUeXBlICAgICAgPSAnY2FsY3VsYXRlZCc7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIHNpbGVuY2UgaXMgZ29sZGVuXG5cdH07XG5cblx0Ly8gY2FsY3VsYXRlZCBmaWVsZCBjYW4ndCBiZSB2YWxpZGF0ZWRcblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnJlUXVlcnlWYWx1ZSA9ICgpID0+IHt9O1xuXG5cdHRoaXMucmV2ZXJ0VmFsdWUgPSAoKSA9PiB7fTtcbn1cblxuQ2FsY3VsYXRlZERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRGF0YTtcbiIsImltcG9ydCB7IGlzQ2FsY3VsYXRlZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBCYXNlU2lnbmFsLFxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7Q2FsY3VsYXRlZERhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXQgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gU2lnbmFsQ2FsY3VsYXRlZCgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XG5cdH07XG5cblx0dGhpcy5iYXNlU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdGNvbnN0IGlzTnVtYmVyID0gJ251bWJlcicgPT09IHRoaXMuaW5wdXQudmFsdWVUeXBlUHJvcDtcblxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gaXNOdW1iZXJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy53aXRoUHJlY2lzaW9uKClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5zaWxlbmNlKCk7XG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gaXNOdW1iZXJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuY29udmVydFZhbHVlKClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblx0XHR0aGlzLmlucHV0LnZhbHVlLnNpbGVuY2UoKTtcblxuXHRcdHRoaXMuaW5wdXQudmlzaWJsZVZhbE5vZGUudGV4dENvbnRlbnQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRub2RlLnZhbHVlID0gdGhpcy5pbnB1dC5jYWxjVmFsdWU7XG5cdH07XG5cblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5iYXNlU2lnbmFsKCk7XG5cblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcblx0fTtcbn1cblxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZS5jb252ZXJ0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdGlmICggTnVtYmVyLmlzTmFOKCBOdW1iZXIoIHZhbHVlICkgKSApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IHBhcnRzID0gdGhpcy53aXRoUHJlY2lzaW9uKCkudG9TdHJpbmcoKS5zcGxpdCggJy4nICk7XG5cblx0aWYgKCB0aGlzLmlucHV0LnNlcFRob3VzYW5kcyApIHtcblx0XHRwYXJ0c1sgMCBdID0gcGFydHNbIDAgXS5yZXBsYWNlKFxuXHRcdFx0L1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csXG5cdFx0XHR0aGlzLmlucHV0LnNlcFRob3VzYW5kcyxcblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIHBhcnRzLmpvaW4oIHRoaXMuaW5wdXQuc2VwRGVjaW1hbCApO1xufTtcblxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUud2l0aFByZWNpc2lvbiA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIE51bWJlciggdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ICkudG9GaXhlZCggdGhpcy5pbnB1dC5wcmVjaXNpb24gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbENhbGN1bGF0ZWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FsY3VsYXRlZERhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsQ2FsY3VsYXRlZCBmcm9tICcuL3NpZ25hbCc7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgQ2FsY3VsYXRlZERhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxDYWxjdWxhdGVkLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9