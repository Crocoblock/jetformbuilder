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
      this.value.current = formula.calculate();
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
      sepThousands
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getCalculatedWrapper)(node).dataset;
    this.formula = formula;
    this.precision = +precision;
    this.sepDecimal = sepDecimal !== null && sepDecimal !== void 0 ? sepDecimal : '';
    this.sepThousands = sepThousands !== null && sepThousands !== void 0 ? sepThousands : '';
    this.visibleValNode = node.nextElementSibling;
    this.valueTypeProp = valueType;
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlcl9fY2FsY3VsYXRlZC1maWVsZCcgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDYWxjdWxhdGVkKCBub2RlICkge1xuXHRyZXR1cm4gISEoXG5cdFx0Z2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKT8uZGF0YXNldD8uZm9ybXVsYT8ubGVuZ3RoID8/ICcnXG5cdCk7XG59XG5cbmV4cG9ydCB7IGlzQ2FsY3VsYXRlZCwgZ2V0Q2FsY3VsYXRlZFdyYXBwZXIgfTsiLCJpbXBvcnQgeyBnZXRDYWxjdWxhdGVkV3JhcHBlciwgaXNDYWxjdWxhdGVkIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxuICAgICAgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJNYWluPy5maWx0ZXJzID8/IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gQ2FsY3VsYXRlZERhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5mb3JtdWxhICAgICAgICA9ICcnO1xuXHR0aGlzLnByZWNpc2lvbiAgICAgID0gMDtcblx0dGhpcy5zZXBEZWNpbWFsICAgICA9ICcnO1xuXHR0aGlzLnNlcFRob3VzYW5kcyAgID0gJyc7XG5cdHRoaXMudmlzaWJsZVZhbE5vZGUgPSBudWxsO1xuXHR0aGlzLnZhbHVlVHlwZVByb3AgID0gJ251bWJlcic7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XG5cdH07XG5cdHRoaXMuc2V0VmFsdWUgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcywgeyBmb3JjZUZ1bmN0aW9uOiB0cnVlIH0gKTtcblxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy5mb3JtdWxhICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHRcdH07XG5cdFx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSAoIGlucHV0ICkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBhcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIuY2FsY3VsYXRlZC5jYWxsYmFjaycsXG5cdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRpbnB1dCxcblx0XHRcdFx0dGhpcyxcblx0XHRcdCk7XG5cblx0XHRcdGlmICggZmFsc2UgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxuXHRcdFx0ICAgICAgICAgICAgICAgICA/IGlucHV0LmNhbGNWYWx1ZVxuXHRcdFx0ICAgICAgICAgICAgICAgICA6IGlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRcdGlmICggZmFsc2UgPT09IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZmlsdGVyUmVzdWx0ID0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcblx0XHRcdFx0J2Zvcm1zL2NhbGN1bGF0ZWQtZmllbGQtdmFsdWUnLFxuXHRcdFx0XHRpbnB1dC52YWx1ZS5jdXJyZW50LFxuXHRcdFx0XHRqUXVlcnkoIGlucHV0Lm5vZGVzWyAwIF0gKSxcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBmaWx0ZXJSZXN1bHQgPT09IGlucHV0LnZhbHVlLmN1cnJlbnRcblx0XHRcdCAgICAgICA/IHJlc3BvbnNlXG5cdFx0XHQgICAgICAgOiBmaWx0ZXJSZXN1bHQ7XG5cdFx0fTtcblxuXHRcdGZvcm11bGEuZW1wdHlWYWx1ZSA9ICgpID0+ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3Bcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5hcHBseVNhbml0aXplcnMoIHRoaXMudmFsdWUuY3VycmVudCApO1xuXG5cdFx0dGhpcy5iZWZvcmVTdWJtaXQoICggcmVzb2x2ZSApID0+IHtcblx0XHRcdHRoaXMudmFsdWUuc2lsZW5jZSgpO1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbnVsbDtcblx0XHRcdHRoaXMudmFsdWUuc2lsZW5jZSgpO1xuXG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0sIHRoaXMgKTtcblx0fTtcblxuXHR0aGlzLnNldE5vZGUgICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XG5cblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBmb3JtdWxhLFxuXHRcdFx0ICAgICAgcHJlY2lzaW9uLFxuXHRcdFx0ICAgICAgc2VwRGVjaW1hbCxcblx0XHRcdCAgICAgIHZhbHVlVHlwZSxcblx0XHRcdCAgICAgIHNlcFRob3VzYW5kcyxcblx0XHQgICAgICB9ID0gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKS5kYXRhc2V0O1xuXG5cdFx0dGhpcy5mb3JtdWxhICAgICAgICA9IGZvcm11bGE7XG5cdFx0dGhpcy5wcmVjaXNpb24gICAgICA9ICtwcmVjaXNpb247XG5cdFx0dGhpcy5zZXBEZWNpbWFsICAgICA9IHNlcERlY2ltYWwgPz8gJyc7XG5cdFx0dGhpcy5zZXBUaG91c2FuZHMgICA9IHNlcFRob3VzYW5kcyA/PyAnJztcblx0XHR0aGlzLnZpc2libGVWYWxOb2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0dGhpcy52YWx1ZVR5cGVQcm9wICA9IHZhbHVlVHlwZTtcblxuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ2NhbGN1bGF0ZWQnO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxuXHR9O1xuXG5cdC8vIGNhbGN1bGF0ZWQgZmllbGQgY2FuJ3QgYmUgdmFsaWRhdGVkXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XG5cblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnJldmVydFZhbHVlID0gKCkgPT4ge307XG59XG5cbkNhbGN1bGF0ZWREYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZERhdGE7XG4iLCJpbXBvcnQgeyBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkge0NhbGN1bGF0ZWREYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0IGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIFNpZ25hbENhbGN1bGF0ZWQoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMuYmFzZVNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRjb25zdCBpc051bWJlciA9ICdudW1iZXInID09PSB0aGlzLmlucHV0LnZhbHVlVHlwZVByb3A7XG5cblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGlzTnVtYmVyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMud2l0aFByZWNpc2lvbigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xuXHRcdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IGlzTnVtYmVyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbnZlcnRWYWx1ZSgpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5zaWxlbmNlKCk7XG5cblx0XHR0aGlzLmlucHV0LnZpc2libGVWYWxOb2RlLnRleHRDb250ZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0bm9kZS52YWx1ZSA9IHRoaXMuaW5wdXQuY2FsY1ZhbHVlO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuYmFzZVNpZ25hbCgpO1xuXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdH07XG59XG5cblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUuY29udmVydFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRpZiAoIE51bWJlci5pc05hTiggTnVtYmVyKCB2YWx1ZSApICkgKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBwYXJ0cyA9IHRoaXMud2l0aFByZWNpc2lvbigpLnRvU3RyaW5nKCkuc3BsaXQoICcuJyApO1xuXG5cdGlmICggdGhpcy5pbnB1dC5zZXBUaG91c2FuZHMgKSB7XG5cdFx0cGFydHNbIDAgXSA9IHBhcnRzWyAwIF0ucmVwbGFjZShcblx0XHRcdC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFxuXHRcdFx0dGhpcy5pbnB1dC5zZXBUaG91c2FuZHMsXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiBwYXJ0cy5qb2luKCB0aGlzLmlucHV0LnNlcERlY2ltYWwgKTtcbn07XG5cblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLndpdGhQcmVjaXNpb24gPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBOdW1iZXIoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApLnRvRml4ZWQoIHRoaXMuaW5wdXQucHJlY2lzaW9uICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxDYWxjdWxhdGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhbGN1bGF0ZWREYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbENhbGN1bGF0ZWQgZnJvbSAnLi9zaWduYWwnO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIENhbGN1bGF0ZWREYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsQ2FsY3VsYXRlZCwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==