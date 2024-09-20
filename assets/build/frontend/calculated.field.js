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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL2lucHV0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2FsY3VsYXRlZCggbm9kZSApIHtcblx0cmV0dXJuICEhKFxuXHRcdGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICk/LmRhdGFzZXQ/LmZvcm11bGE/Lmxlbmd0aCA/PyAnJ1xuXHQpO1xufVxuXG5leHBvcnQgeyBpc0NhbGN1bGF0ZWQsIGdldENhbGN1bGF0ZWRXcmFwcGVyIH07IiwiaW1wb3J0IHsgZ2V0Q2FsY3VsYXRlZFdyYXBwZXIsIGlzQ2FsY3VsYXRlZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBJbnB1dERhdGEsXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnM6IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgPSBmYWxzZSxcbiAgICAgIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyTWFpbj8uZmlsdGVycyA/PyB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIENhbGN1bGF0ZWREYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZm9ybXVsYSAgICAgICAgPSAnJztcblx0dGhpcy5wcmVjaXNpb24gICAgICA9IDA7XG5cdHRoaXMuc2VwRGVjaW1hbCAgICAgPSAnJztcblx0dGhpcy5zZXBUaG91c2FuZHMgICA9ICcnO1xuXHR0aGlzLnZpc2libGVWYWxOb2RlID0gbnVsbDtcblx0dGhpcy52YWx1ZVR5cGVQcm9wICA9ICdudW1iZXInO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnNldFZhbHVlICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMsIHsgZm9yY2VGdW5jdGlvbjogdHJ1ZSB9ICk7XG5cblx0XHRmb3JtdWxhLm9ic2VydmUoIHRoaXMuZm9ybXVsYSApO1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHR9O1xuXHRcdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gKCBpbnB1dCApID0+IHtcblx0XHRcdGNvbnN0IHZhbHVlID0gYXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmNhbGN1bGF0ZWQuY2FsbGJhY2snLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0aW5wdXQsXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGZhbHNlICE9PSB2YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3Bcblx0XHRcdCAgICAgICAgICAgICAgICAgPyBpbnB1dC5jYWxjVmFsdWVcblx0XHRcdCAgICAgICAgICAgICAgICAgOiBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0XHRpZiAoIGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZpbHRlclJlc3VsdCA9IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdmb3Jtcy9jYWxjdWxhdGVkLWZpZWxkLXZhbHVlJyxcblx0XHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCxcblx0XHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm4gZmlsdGVyUmVzdWx0ID09PSBpbnB1dC52YWx1ZS5jdXJyZW50XG5cdFx0XHQgICAgICAgPyByZXNwb25zZVxuXHRcdFx0ICAgICAgIDogZmlsdGVyUmVzdWx0O1xuXHRcdH07XG5cblx0XHRmb3JtdWxhLmVtcHR5VmFsdWUgPSAoKSA9PiAnbnVtYmVyJyA9PT0gdGhpcy52YWx1ZVR5cGVQcm9wXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuYXBwbHlTYW5pdGl6ZXJzKCB0aGlzLnZhbHVlLmN1cnJlbnQgKTtcblxuXHRcdHRoaXMuYmVmb3JlU3VibWl0KCAoIHJlc29sdmUgKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG51bGw7XG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcblxuXHRcdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9LCB0aGlzICk7XG5cdH07XG5cblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblxuXHRcdGNvbnN0IHtcblx0XHRcdCAgICAgIGZvcm11bGEsXG5cdFx0XHQgICAgICBwcmVjaXNpb24sXG5cdFx0XHQgICAgICBzZXBEZWNpbWFsLFxuXHRcdFx0ICAgICAgdmFsdWVUeXBlLFxuXHRcdFx0ICAgICAgc2VwVGhvdXNhbmRzLFxuXHRcdCAgICAgIH0gPSBnZXRDYWxjdWxhdGVkV3JhcHBlciggbm9kZSApLmRhdGFzZXQ7XG5cblx0XHR0aGlzLmZvcm11bGEgICAgICAgID0gZm9ybXVsYTtcblx0XHR0aGlzLnByZWNpc2lvbiAgICAgID0gK3ByZWNpc2lvbjtcblx0XHR0aGlzLnNlcERlY2ltYWwgICAgID0gc2VwRGVjaW1hbCA/PyAnJztcblx0XHR0aGlzLnNlcFRob3VzYW5kcyAgID0gc2VwVGhvdXNhbmRzID8/ICcnO1xuXHRcdHRoaXMudmlzaWJsZVZhbE5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHR0aGlzLnZhbHVlVHlwZVByb3AgID0gdmFsdWVUeXBlO1xuXG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAnY2FsY3VsYXRlZCc7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIHNpbGVuY2UgaXMgZ29sZGVuXG5cdH07XG5cblx0Ly8gY2FsY3VsYXRlZCBmaWVsZCBjYW4ndCBiZSB2YWxpZGF0ZWRcblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnJlUXVlcnlWYWx1ZSA9ICgpID0+IHt9O1xuXG5cdHRoaXMucmV2ZXJ0VmFsdWUgPSAoKSA9PiB7fTtcbn1cblxuQ2FsY3VsYXRlZERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRGF0YTsiLCJpbXBvcnQgeyBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkge0NhbGN1bGF0ZWREYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0IGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIFNpZ25hbENhbGN1bGF0ZWQoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMuYmFzZVNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRjb25zdCBpc051bWJlciA9ICdudW1iZXInID09PSB0aGlzLmlucHV0LnZhbHVlVHlwZVByb3A7XG5cblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGlzTnVtYmVyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMud2l0aFByZWNpc2lvbigpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xuXHRcdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IGlzTnVtYmVyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbnZlcnRWYWx1ZSgpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5zaWxlbmNlKCk7XG5cblx0XHR0aGlzLmlucHV0LnZpc2libGVWYWxOb2RlLnRleHRDb250ZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0bm9kZS52YWx1ZSA9IHRoaXMuaW5wdXQuY2FsY1ZhbHVlO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuYmFzZVNpZ25hbCgpO1xuXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdH07XG59XG5cblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuU2lnbmFsQ2FsY3VsYXRlZC5wcm90b3R5cGUuY29udmVydFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRpZiAoIE51bWJlci5pc05hTiggTnVtYmVyKCB2YWx1ZSApICkgKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBwYXJ0cyA9IHRoaXMud2l0aFByZWNpc2lvbigpLnRvU3RyaW5nKCkuc3BsaXQoICcuJyApO1xuXG5cdGlmICggdGhpcy5pbnB1dC5zZXBUaG91c2FuZHMgKSB7XG5cdFx0cGFydHNbIDAgXSA9IHBhcnRzWyAwIF0ucmVwbGFjZShcblx0XHRcdC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFxuXHRcdFx0dGhpcy5pbnB1dC5zZXBUaG91c2FuZHMsXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiBwYXJ0cy5qb2luKCB0aGlzLmlucHV0LnNlcERlY2ltYWwgKTtcbn07XG5cblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLndpdGhQcmVjaXNpb24gPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBOdW1iZXIoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApLnRvRml4ZWQoIHRoaXMuaW5wdXQucHJlY2lzaW9uICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxDYWxjdWxhdGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhbGN1bGF0ZWREYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbENhbGN1bGF0ZWQgZnJvbSAnLi9zaWduYWwnO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIENhbGN1bGF0ZWREYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsQ2FsY3VsYXRlZCwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==