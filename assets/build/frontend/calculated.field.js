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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NhbGN1bGF0ZWQuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY2FsY3VsYXRlZC5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiBnZXRDYWxjdWxhdGVkV3JhcHBlciggbm9kZSApIHtcclxuXHRyZXR1cm4gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXJfX2NhbGN1bGF0ZWQtZmllbGQnICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNDYWxjdWxhdGVkKCBub2RlICkge1xyXG5cdHJldHVybiAhIShcclxuXHRcdGdldENhbGN1bGF0ZWRXcmFwcGVyKCBub2RlICk/LmRhdGFzZXQ/LmZvcm11bGE/Lmxlbmd0aCA/PyAnJ1xyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzQ2FsY3VsYXRlZCwgZ2V0Q2FsY3VsYXRlZFdyYXBwZXIgfTsiLCJpbXBvcnQgeyBnZXRDYWxjdWxhdGVkV3JhcHBlciwgaXNDYWxjdWxhdGVkIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIElucHV0RGF0YSxcclxuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnM6IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgPSBmYWxzZSxcclxuICAgICAgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJNYWluPy5maWx0ZXJzID8/IHt9O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuZnVuY3Rpb24gQ2FsY3VsYXRlZERhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5mb3JtdWxhICAgICAgICA9ICcnO1xyXG5cdHRoaXMucHJlY2lzaW9uICAgICAgPSAwO1xyXG5cdHRoaXMuc2VwRGVjaW1hbCAgICAgPSAnJztcclxuXHR0aGlzLnNlcFRob3VzYW5kcyAgID0gJyc7XHJcblx0dGhpcy52aXNpYmxlVmFsTm9kZSA9IG51bGw7XHJcblx0dGhpcy52YWx1ZVR5cGVQcm9wICA9ICdudW1iZXInO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzQ2FsY3VsYXRlZCggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5zZXRWYWx1ZSAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMsIHsgZm9yY2VGdW5jdGlvbjogdHJ1ZSB9ICk7XHJcblxyXG5cdFx0Zm9ybXVsYS5vYnNlcnZlKCB0aGlzLmZvcm11bGEgKTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xyXG5cdFx0fTtcclxuXHRcdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gKCBpbnB1dCApID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBhcHBseUZpbHRlcnMoXHJcblx0XHRcdFx0J2pldC5mYi5jYWxjdWxhdGVkLmNhbGxiYWNrJyxcclxuXHRcdFx0XHRmYWxzZSxcclxuXHRcdFx0XHRpbnB1dCxcclxuXHRcdFx0XHR0aGlzLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKCBmYWxzZSAhPT0gdmFsdWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3BcclxuXHRcdFx0ICAgICAgICAgICAgICAgICA/IGlucHV0LmNhbGNWYWx1ZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgIDogaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHRcdGlmICggZmFsc2UgPT09IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBmaWx0ZXJSZXN1bHQgPSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdCdmb3Jtcy9jYWxjdWxhdGVkLWZpZWxkLXZhbHVlJyxcclxuXHRcdFx0XHRpbnB1dC52YWx1ZS5jdXJyZW50LFxyXG5cdFx0XHRcdGpRdWVyeSggaW5wdXQubm9kZXNbIDAgXSApLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZpbHRlclJlc3VsdCA9PT0gaW5wdXQudmFsdWUuY3VycmVudFxyXG5cdFx0XHQgICAgICAgPyByZXNwb25zZVxyXG5cdFx0XHQgICAgICAgOiBmaWx0ZXJSZXN1bHQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdGZvcm11bGEuZW1wdHlWYWx1ZSA9ICgpID0+ICdudW1iZXInID09PSB0aGlzLnZhbHVlVHlwZVByb3BcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggdGhpcy52YWx1ZS5jdXJyZW50ICk7XHJcblxyXG5cdFx0dGhpcy5iZWZvcmVTdWJtaXQoICggcmVzb2x2ZSApID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5zaWxlbmNlKCk7XHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG51bGw7XHJcblx0XHRcdHRoaXMudmFsdWUuc2lsZW5jZSgpO1xyXG5cclxuXHRcdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0fSwgdGhpcyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdCAgICAgIGZvcm11bGEsXHJcblx0XHRcdCAgICAgIHByZWNpc2lvbixcclxuXHRcdFx0ICAgICAgc2VwRGVjaW1hbCxcclxuXHRcdFx0ICAgICAgdmFsdWVUeXBlLFxyXG5cdFx0XHQgICAgICBzZXBUaG91c2FuZHMsXHJcblx0XHQgICAgICB9ID0gZ2V0Q2FsY3VsYXRlZFdyYXBwZXIoIG5vZGUgKS5kYXRhc2V0O1xyXG5cclxuXHRcdHRoaXMuZm9ybXVsYSAgICAgICAgPSBmb3JtdWxhO1xyXG5cdFx0dGhpcy5wcmVjaXNpb24gICAgICA9ICtwcmVjaXNpb247XHJcblx0XHR0aGlzLnNlcERlY2ltYWwgICAgID0gc2VwRGVjaW1hbCA/PyAnJztcclxuXHRcdHRoaXMuc2VwVGhvdXNhbmRzICAgPSBzZXBUaG91c2FuZHMgPz8gJyc7XHJcblx0XHR0aGlzLnZpc2libGVWYWxOb2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0XHR0aGlzLnZhbHVlVHlwZVByb3AgID0gdmFsdWVUeXBlO1xyXG5cclxuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ2NhbGN1bGF0ZWQnO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxyXG5cdH07XHJcblxyXG5cdC8vIGNhbGN1bGF0ZWQgZmllbGQgY2FuJ3QgYmUgdmFsaWRhdGVkXHJcblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5yZXZlcnRWYWx1ZSA9ICgpID0+IHt9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRGF0YTsiLCJpbXBvcnQgeyBpc0NhbGN1bGF0ZWQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQmFzZVNpZ25hbCxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7Q2FsY3VsYXRlZERhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXQgaW5zdGFuY2VcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbENhbGN1bGF0ZWQoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNDYWxjdWxhdGVkKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5iYXNlU2lnbmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdGNvbnN0IGlzTnVtYmVyID0gJ251bWJlcicgPT09IHRoaXMuaW5wdXQudmFsdWVUeXBlUHJvcDtcclxuXHJcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGlzTnVtYmVyXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy53aXRoUHJlY2lzaW9uKClcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5zaWxlbmNlKCk7XHJcblx0XHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSBpc051bWJlclxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbnZlcnRWYWx1ZSgpXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHRcdHRoaXMuaW5wdXQudmFsdWUuc2lsZW5jZSgpO1xyXG5cclxuXHRcdHRoaXMuaW5wdXQudmlzaWJsZVZhbE5vZGUudGV4dENvbnRlbnQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0bm9kZS52YWx1ZSA9IHRoaXMuaW5wdXQuY2FsY1ZhbHVlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5iYXNlU2lnbmFsKCk7XHJcblxyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLmNvbnZlcnRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0aWYgKCBOdW1iZXIuaXNOYU4oIE51bWJlciggdmFsdWUgKSApICkge1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuXHRjb25zdCBwYXJ0cyA9IHRoaXMud2l0aFByZWNpc2lvbigpLnRvU3RyaW5nKCkuc3BsaXQoICcuJyApO1xyXG5cclxuXHRpZiAoIHRoaXMuaW5wdXQuc2VwVGhvdXNhbmRzICkge1xyXG5cdFx0cGFydHNbIDAgXSA9IHBhcnRzWyAwIF0ucmVwbGFjZShcclxuXHRcdFx0L1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csXHJcblx0XHRcdHRoaXMuaW5wdXQuc2VwVGhvdXNhbmRzLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXJ0cy5qb2luKCB0aGlzLmlucHV0LnNlcERlY2ltYWwgKTtcclxufTtcclxuXHJcblNpZ25hbENhbGN1bGF0ZWQucHJvdG90eXBlLndpdGhQcmVjaXNpb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIE51bWJlciggdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ICkudG9GaXhlZCggdGhpcy5pbnB1dC5wcmVjaXNpb24gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbENhbGN1bGF0ZWQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FsY3VsYXRlZERhdGEgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTaWduYWxDYWxjdWxhdGVkIGZyb20gJy4vc2lnbmFsJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jYWxjdWxhdGVkLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgQ2FsY3VsYXRlZERhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NhbGN1bGF0ZWQtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcclxuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbENhbGN1bGF0ZWQsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==