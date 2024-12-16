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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICkge1xyXG5cdHJldHVybiBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlcl9fY2FsY3VsYXRlZC1maWVsZCcgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NhbGN1bGF0ZWQoIG5vZGUgKSB7XHJcblx0cmV0dXJuICEhKFxyXG5cdFx0Z2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKT8uZGF0YXNldD8uZm9ybXVsYT8ubGVuZ3RoID8/ICcnXHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNDYWxjdWxhdGVkLCBnZXRDYWxjdWxhdGVkV3JhcHBlciB9OyIsImltcG9ydCB7IGdldENhbGN1bGF0ZWRXcmFwcGVyLCBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnMsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxyXG4gICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmZvcm11bGEgICAgICAgID0gJyc7XHJcblx0dGhpcy5wcmVjaXNpb24gICAgICA9IDA7XHJcblx0dGhpcy5zZXBEZWNpbWFsICAgICA9ICcnO1xyXG5cdHRoaXMuc2VwVGhvdXNhbmRzICAgPSAnJztcclxuXHR0aGlzLnZpc2libGVWYWxOb2RlID0gbnVsbDtcclxuXHR0aGlzLnZhbHVlVHlwZVByb3AgID0gJ251bWJlcic7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLnNldFZhbHVlICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcywgeyBmb3JjZUZ1bmN0aW9uOiB0cnVlIH0gKTtcclxuXHJcblx0XHRmb3JtdWxhLm9ic2VydmUoIHRoaXMuZm9ybXVsYSApO1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0XHR9O1xyXG5cdFx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSAoIGlucHV0ICkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGFwcGx5RmlsdGVycyhcclxuXHRcdFx0XHQnamV0LmZiLmNhbGN1bGF0ZWQuY2FsbGJhY2snLFxyXG5cdFx0XHRcdGZhbHNlLFxyXG5cdFx0XHRcdGlucHV0LFxyXG5cdFx0XHRcdHRoaXMsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoIGZhbHNlICE9PSB2YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgID8gaW5wdXQuY2FsY1ZhbHVlXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgOiBpbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGZpbHRlclJlc3VsdCA9IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMoXHJcblx0XHRcdFx0J2Zvcm1zL2NhbGN1bGF0ZWQtZmllbGQtdmFsdWUnLFxyXG5cdFx0XHRcdGlucHV0LnZhbHVlLmN1cnJlbnQsXHJcblx0XHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmlsdGVyUmVzdWx0ID09PSBpbnB1dC52YWx1ZS5jdXJyZW50XHJcblx0XHRcdCAgICAgICA/IHJlc3BvbnNlXHJcblx0XHRcdCAgICAgICA6IGZpbHRlclJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0Zm9ybXVsYS5lbXB0eVZhbHVlID0gKCkgPT4gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuYXBwbHlTYW5pdGl6ZXJzKCB0aGlzLnZhbHVlLmN1cnJlbnQgKTtcclxuXHJcblx0XHR0aGlzLmJlZm9yZVN1Ym1pdCggKCByZXNvbHZlICkgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbnVsbDtcclxuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XHJcblxyXG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cdFx0XHRyZXNvbHZlKCk7XHJcblx0XHR9LCB0aGlzICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdCAgICAgIGZvcm11bGEsXHJcblx0XHRcdCAgICAgIHByZWNpc2lvbixcclxuXHRcdFx0ICAgICAgc2VwRGVjaW1hbCxcclxuXHRcdFx0ICAgICAgdmFsdWVUeXBlLFxyXG5cdFx0XHQgICAgICBzZXBUaG91c2FuZHMsXHJcblx0XHQgICAgICB9ID0gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKS5kYXRhc2V0O1xyXG5cclxuXHRcdHRoaXMuZm9ybXVsYSAgICAgICAgPSBmb3JtdWxhO1xyXG5cdFx0dGhpcy5wcmVjaXNpb24gICAgICA9ICtwcmVjaXNpb247XHJcblx0XHR0aGlzLnNlcERlY2ltYWwgICAgID0gc2VwRGVjaW1hbCA/PyAnJztcclxuXHRcdHRoaXMuc2VwVGhvdXNhbmRzICAgPSBzZXBUaG91c2FuZHMgPz8gJyc7XHJcblx0XHR0aGlzLnZpc2libGVWYWxOb2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHR0aGlzLnZhbHVlVHlwZVByb3AgID0gdmFsdWVUeXBlO1xyXG5cclxuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ2NhbGN1bGF0ZWQnO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxyXG5cdH07XHJcblxyXG5cdC8vIGNhbGN1bGF0ZWQgZmllbGQgY2FuJ3QgYmUgdmFsaWRhdGVkXHJcblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZXZlcnRWYWx1ZSA9ICgpID0+IHt9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRGF0YTsiLCJpbXBvcnQgeyBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQmFzZVNpZ25hbCxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7Q2FsY3VsYXRlZERhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXQgaW5zdGFuY2VcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbENhbGN1bGF0ZWQoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5iYXNlU2lnbmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdGNvbnN0IGlzTnVtYmVyID0gJ251bWJlcicgPT09IHRoaXMuaW5wdXQudmFsdWVUeXBlUHJvcDtcclxuXHJcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGlzTnVtYmVyXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy53aXRoUHJlY2lzaW9uKClcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5zaWxlbmNlKCk7XHJcblx0XHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSBpc051bWJlclxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbnZlcnRWYWx1ZSgpXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xyXG5cclxuXHRcdHRoaXMuaW5wdXQudmlzaWJsZVZhbE5vZGUudGV4dENvbnRlbnQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0bm9kZS52YWx1ZSA9IHRoaXMuaW5wdXQuY2FsY1ZhbHVlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5iYXNlU2lnbmFsKCk7XHJcblxyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLmNvbnZlcnRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0aWYgKCBOdW1iZXIuaXNOYU4oIE51bWJlciggdmFsdWUgKSApICkge1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuXHRjb25zdCBwYXJ0cyA9IHRoaXMud2l0aFByZWNpc2lvbigpLnRvU3RyaW5nKCkuc3BsaXQoICcuJyApO1xyXG5cclxuXHRpZiAoIHRoaXMuaW5wdXQuc2VwVGhvdXNhbmRzICkge1xyXG5cdFx0cGFydHNbIDAgXSA9IHBhcnRzWyAwIF0ucmVwbGFjZShcclxuXHRcdFx0L1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csXHJcblx0XHRcdHRoaXMuaW5wdXQuc2VwVGhvdXNhbmRzLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXJ0cy5qb2luKCB0aGlzLmlucHV0LnNlcERlY2ltYWwgKTtcclxufTtcclxuXHJcblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLndpdGhQcmVjaXNpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIE51bWJlciggdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ICkudG9GaXhlZCggdGhpcy5pbnB1dC5wcmVjaXNpb24gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbENhbGN1bGF0ZWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FsY3VsYXRlZERhdGEgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTaWduYWxDYWxjdWxhdGVkIGZyb20gJy4vc2lnbmFsJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jYWxjdWxhdGVkLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgQ2FsY3VsYXRlZERhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcclxuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbENhbGN1bGF0ZWQsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==