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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jYWxjdWxhdGVkLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICkge1xyXG5cdHJldHVybiBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlcl9fY2FsY3VsYXRlZC1maWVsZCcgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NhbGN1bGF0ZWQoIG5vZGUgKSB7XHJcblx0cmV0dXJuICEhKFxyXG5cdFx0Z2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKT8uZGF0YXNldD8uZm9ybXVsYT8ubGVuZ3RoID8/ICcnXHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNDYWxjdWxhdGVkLCBnZXRDYWxjdWxhdGVkV3JhcHBlciB9OyIsImltcG9ydCB7IGdldENhbGN1bGF0ZWRXcmFwcGVyLCBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnMsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxyXG4gICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmZvcm11bGEgICAgICAgID0gJyc7XHJcblx0dGhpcy5wcmVjaXNpb24gICAgICA9IDA7XHJcblx0dGhpcy5zZXBEZWNpbWFsICAgICA9ICcnO1xyXG5cdHRoaXMuc2VwVGhvdXNhbmRzICAgPSAnJztcclxuXHR0aGlzLnZpc2libGVWYWxOb2RlID0gbnVsbDtcclxuXHR0aGlzLnZhbHVlVHlwZVByb3AgID0gJ251bWJlcic7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLnNldFZhbHVlICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcywgeyBmb3JjZUZ1bmN0aW9uOiB0cnVlIH0gKTtcclxuXHJcblx0XHRmb3JtdWxhLm9ic2VydmUoIHRoaXMuZm9ybXVsYSApO1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0XHR9O1xyXG5cdFx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSAoIGlucHV0ICkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGFwcGx5RmlsdGVycyhcclxuXHRcdFx0XHQnamV0LmZiLmNhbGN1bGF0ZWQuY2FsbGJhY2snLFxyXG5cdFx0XHRcdGZhbHNlLFxyXG5cdFx0XHRcdGlucHV0LFxyXG5cdFx0XHRcdHRoaXMsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAoIGZhbHNlICE9PSB2YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgID8gaW5wdXQuY2FsY1ZhbHVlXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgOiBpbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyApIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGZpbHRlclJlc3VsdCA9IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMoXHJcblx0XHRcdFx0J2Zvcm1zL2NhbGN1bGF0ZWQtZmllbGQtdmFsdWUnLFxyXG5cdFx0XHRcdGlucHV0LnZhbHVlLmN1cnJlbnQsXHJcblx0XHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmlsdGVyUmVzdWx0ID09PSBpbnB1dC52YWx1ZS5jdXJyZW50XHJcblx0XHRcdCAgICAgICA/IHJlc3BvbnNlXHJcblx0XHRcdCAgICAgICA6IGZpbHRlclJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0Zm9ybXVsYS5lbXB0eVZhbHVlID0gKCkgPT4gJ251bWJlcicgPT09IHRoaXMudmFsdWVUeXBlUHJvcFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuYXBwbHlTYW5pdGl6ZXJzKCB0aGlzLnZhbHVlLmN1cnJlbnQgKTtcclxuXHJcblx0XHR0aGlzLmJlZm9yZVN1Ym1pdCggKCByZXNvbHZlICkgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLnNpbGVuY2UoKTtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbnVsbDtcclxuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XHJcblxyXG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cdFx0XHRyZXNvbHZlKCk7XHJcblx0XHR9LCB0aGlzICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdCAgICAgIGZvcm11bGEsXHJcblx0XHRcdCAgICAgIHByZWNpc2lvbixcclxuXHRcdFx0ICAgICAgc2VwRGVjaW1hbCxcclxuXHRcdFx0ICAgICAgdmFsdWVUeXBlLFxyXG5cdFx0XHQgICAgICBzZXBUaG91c2FuZHMsXHJcblx0XHQgICAgICB9ID0gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKS5kYXRhc2V0O1xyXG5cclxuXHRcdHRoaXMuZm9ybXVsYSAgICAgICAgPSBmb3JtdWxhO1xyXG5cdFx0dGhpcy5wcmVjaXNpb24gICAgICA9ICtwcmVjaXNpb247XHJcblx0XHR0aGlzLnNlcERlY2ltYWwgICAgID0gc2VwRGVjaW1hbCA/PyAnJztcclxuXHRcdHRoaXMuc2VwVGhvdXNhbmRzICAgPSBzZXBUaG91c2FuZHMgPz8gJyc7XHJcblx0XHR0aGlzLnZpc2libGVWYWxOb2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHR0aGlzLnZhbHVlVHlwZVByb3AgID0gdmFsdWVUeXBlO1xyXG5cclxuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ2NhbGN1bGF0ZWQnO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxyXG5cdH07XHJcblxyXG5cdC8vIGNhbGN1bGF0ZWQgZmllbGQgY2FuJ3QgYmUgdmFsaWRhdGVkXHJcblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZXZlcnRWYWx1ZSA9ICgpID0+IHt9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRGF0YTtcclxuIiwiaW1wb3J0IHsgaXNDYWxjdWxhdGVkIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEJhc2VTaWduYWwsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0NhbGN1bGF0ZWREYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0IGluc3RhbmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBTaWduYWxDYWxjdWxhdGVkKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuYmFzZVNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHJcblx0XHRjb25zdCBpc051bWJlciA9ICdudW1iZXInID09PSB0aGlzLmlucHV0LnZhbHVlVHlwZVByb3A7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSBpc051bWJlclxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMud2l0aFByZWNpc2lvbigpXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gaXNOdW1iZXJcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5jb252ZXJ0VmFsdWUoKVxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0XHR0aGlzLmlucHV0LnZhbHVlLnNpbGVuY2UoKTtcclxuXHJcblx0XHR0aGlzLmlucHV0LnZpc2libGVWYWxOb2RlLnRleHRDb250ZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdG5vZGUudmFsdWUgPSB0aGlzLmlucHV0LmNhbGNWYWx1ZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuYmFzZVNpZ25hbCgpO1xyXG5cclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHJcblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZS5jb252ZXJ0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdGlmICggTnVtYmVyLmlzTmFOKCBOdW1iZXIoIHZhbHVlICkgKSApIHtcclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFydHMgPSB0aGlzLndpdGhQcmVjaXNpb24oKS50b1N0cmluZygpLnNwbGl0KCAnLicgKTtcclxuXHJcblx0aWYgKCB0aGlzLmlucHV0LnNlcFRob3VzYW5kcyApIHtcclxuXHRcdHBhcnRzWyAwIF0gPSBwYXJ0c1sgMCBdLnJlcGxhY2UoXHJcblx0XHRcdC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLFxyXG5cdFx0XHR0aGlzLmlucHV0LnNlcFRob3VzYW5kcyxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGFydHMuam9pbiggdGhpcy5pbnB1dC5zZXBEZWNpbWFsICk7XHJcbn07XHJcblxyXG5TaWduYWxDYWxjdWxhdGVkLnByb3RvdHlwZS53aXRoUHJlY2lzaW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBOdW1iZXIoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApLnRvRml4ZWQoIHRoaXMuaW5wdXQucHJlY2lzaW9uICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxDYWxjdWxhdGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhbGN1bGF0ZWREYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsQ2FsY3VsYXRlZCBmcm9tICcuL3NpZ25hbCc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY2FsY3VsYXRlZC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIENhbGN1bGF0ZWREYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jYWxjdWxhdGVkLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxDYWxjdWxhdGVkLCAuLi5zaWduYWxzIF07XHJcblxyXG5cdFx0cmV0dXJuIHNpZ25hbHM7XHJcblx0fSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=