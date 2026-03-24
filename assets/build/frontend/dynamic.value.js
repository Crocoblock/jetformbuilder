/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/dynamic.value/BaseReactiveProperty.js":
/*!********************************************************!*\
  !*** ./frontend/dynamic.value/BaseReactiveProperty.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  CalculatedFormula
} = JetFormBuilderAbstract;
function BaseReactiveProperty(name = '') {
  this.attrName = name;
}
BaseReactiveProperty.prototype = {
  /**
   * Name of data attribute
   */
  attrName: '',
  /**
   * If you need specific check,
   * you can rewrite this function
   *
   * @param  input {InputData}
   * @return {boolean}
   */
  isSupported(input) {
    return input.attrs.hasOwnProperty(this.attrName);
  },
  /**
   * @param input {InputData}
   */
  runObserve(input) {
    /**
     * @type {BaseHtmlAttr}
     */
    const htmlAttr = input.attrs[this.attrName];
    const formula = new CalculatedFormula(input);
    formula.observe(htmlAttr.initial);
    this.observe(htmlAttr, formula);
  },
  /**
   * @param attr    {BaseHtmlAttr}
   * @param formula {CalculatedFormula}
   */
  observe(attr, formula) {
    formula.setResult = () => {
      attr.value.current = formula.calculate();
    };
    formula.setResult();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseReactiveProperty);

/***/ }),

/***/ "./frontend/dynamic.value/MultipleValueItem.js":
/*!*****************************************************!*\
  !*** ./frontend/dynamic.value/MultipleValueItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ValueItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueItem */ "./frontend/dynamic.value/ValueItem.js");

const {
  CalculatedFormula
} = JetFormBuilderAbstract;
function MultipleValueItem(...props) {
  _ValueItem__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, ...props);
}
MultipleValueItem.prototype = Object.create(_ValueItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MultipleValueItem.prototype.isSupported = function (input) {
  return input.isArray();
};
MultipleValueItem.prototype.observeSetValue = function (conditions, input) {
  let toSet = [];
  if (!Array.isArray(this.to_set)) {
    toSet = this.to_set.split(',').map(item => item.trim());
  }
  this.to_set = {};
  for (const [index, toSetElement] of Object.entries(toSet)) {
    const formula = new CalculatedFormula(input);
    formula.observe(toSetElement);
    formula.setResult = () => {
      this.to_set[index] = '' + formula.calculate();
      this.to_set = Object.values(this.to_set).filter(Boolean);
    };
    formula.setResult();
    this.formulas.push(formula);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleValueItem);

/***/ }),

/***/ "./frontend/dynamic.value/ReactiveValue.js":
/*!*************************************************!*\
  !*** ./frontend/dynamic.value/ReactiveValue.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseReactiveProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseReactiveProperty */ "./frontend/dynamic.value/BaseReactiveProperty.js");

const {
  CalculatedFormula
} = JetFormBuilderAbstract;
function ReactiveValue() {
  this.isSupported = function (input) {
    const [node] = input.nodes;
    return node.dataset.hasOwnProperty('value');
  };
  this.runObserve = function (input) {
    const [node] = input.nodes;
    const formula = new CalculatedFormula(input);
    formula.observe(node.dataset.value);
    formula.setResult = () => {
      input.value.current = formula.calculate();
    };
    formula.setResult();
  };
}
ReactiveValue.prototype = Object.create(_BaseReactiveProperty__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactiveValue);

/***/ }),

/***/ "./frontend/dynamic.value/ValueItem.js":
/*!*********************************************!*\
  !*** ./frontend/dynamic.value/ValueItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  CalculatedFormula,
  ConditionsList
} = JetFormBuilderAbstract;

/**
 * @type {Function}
 * @class
 */
function ValueItem() {}
ValueItem.prototype = {
  to_set: '',
  prevResult: null,
  prevValue: null,
  /**
   * @type {InputData}
   */
  input: null,
  frequency: '',
  set_on_empty: false,
  /**
   * @type {CalculatedFormula[]}
   */
  formulas: [],
  /**
   * @param  input {InputData}
   * @return {boolean}
   */
  // eslint-disable-next-line no-unused-vars
  isSupported(input) {
    return true;
  },
  observe({
    to_set: toSet,
    conditions = [],
    set_on_empty: setOnEmpty = false,
    frequency = 'on_change'
  }, input) {
    this.input = input;
    this.frequency = frequency;
    this.set_on_empty = setOnEmpty;
    this.prevResult = null;
    this.prevValue = null;
    this.to_set = toSet;
    this.formulas = [];
    this.observeSetValue(conditions, input);
    const list = new ConditionsList(conditions, input.root);
    if (list.conditions?.length) {
      list.onChangeRelated = () => this.applyValue(list);
      list.observe();
      list.onChangeRelated();
      return;
    }
    for (const formula of this.formulas) {
      const resultCallback = formula.setResult.bind(formula);
      formula.setResult = () => {
        resultCallback();
        this.applyValue(false, true);
      };
      formula.setResult();
    }
  },
  observeSetValue(conditions, input) {
    const formula = new CalculatedFormula(input);
    formula.observe(this.to_set);
    formula.setResult = () => {
      this.to_set = '' + formula.calculate();
    };
    formula.setResult();
    this.formulas.push(formula);
  },
  /**
   * @param list        {ConditionsList|boolean}
   * @param forceResult {boolean|null}
   */
  applyValue(list, forceResult = null) {
    let result = false;
    if (list) {
      result = list.getResult();
    } else {
      result = forceResult;
    }
    switch (this.frequency) {
      case 'always':
        this.setValue(result);
        break;
      case 'on_change':
        if (this.prevResult === result) {
          break;
        }
        this.prevResult = result;
        this.setValue(result);
        break;
      case 'once':
        if (!result) {
          break;
        }
        this.setValue();
        if (list) {
          list.onChangeRelated = () => {};
        }
        this.formulas.forEach(current => current.clearWatchers());
        break;
    }
  },
  setValue(result = true) {
    if (!result) {
      return;
    }
    if (this.set_on_empty) {
      this.input.value.setIfEmpty(this.to_set);
    } else {
      this.input.value.current = this.to_set;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValueItem);

/***/ }),

/***/ "./frontend/dynamic.value/functions.js":
/*!*********************************************!*\
  !*** ./frontend/dynamic.value/functions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProperties: () => (/* binding */ getProperties),
/* harmony export */   parseInput: () => (/* binding */ parseInput)
/* harmony export */ });
/* harmony import */ var _ValueItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueItem */ "./frontend/dynamic.value/ValueItem.js");
/* harmony import */ var _MultipleValueItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleValueItem */ "./frontend/dynamic.value/MultipleValueItem.js");
/* harmony import */ var _ReactiveValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReactiveValue */ "./frontend/dynamic.value/ReactiveValue.js");
/* harmony import */ var _BaseReactiveProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseReactiveProperty */ "./frontend/dynamic.value/BaseReactiveProperty.js");



const {
  applyFilters
} = JetPlugins.hooks;
const getValues = () => applyFilters('jet.fb.dynamic.value.types', [_MultipleValueItem__WEBPACK_IMPORTED_MODULE_1__["default"], _ValueItem__WEBPACK_IMPORTED_MODULE_0__["default"]]);
/**
 * @type {ValueItem[]}
 */
let values = [];

/**
 * @param  input
 * @return {ValueItem}
 */
const getValue = input => {
  if (!values.length) {
    values = getValues();
  }
  for (const value of values) {
    const current = new value();
    if (!current.isSupported(input)) {
      continue;
    }
    return current;
  }
};
function createValues(json, input) {
  const groups = JSON.parse(json);
  for (const group of groups) {
    const value = getValue(input);
    value.observe(group, input);
  }
}
function parseInput(input) {
  const [node] = input.nodes;
  const wrapper = node.closest('.jet-form-builder-row');
  if (wrapper && wrapper.dataset.hasOwnProperty('value')) {
    createValues(wrapper.dataset.value, input);
  }
  // for hidden-field case
  else if (node.dataset.hasOwnProperty('dynamicValue')) {
    createValues(node.dataset.dynamicValue, input);
  }
  for (const property of getProperties(input)) {
    property.runObserve(input);
  }
}


/**
 * @type {BaseReactiveProperty[]}
 */
const reactProperties = [new _BaseReactiveProperty__WEBPACK_IMPORTED_MODULE_3__["default"]('min'), new _BaseReactiveProperty__WEBPACK_IMPORTED_MODULE_3__["default"]('max'), new _ReactiveValue__WEBPACK_IMPORTED_MODULE_2__["default"]()];

/**
 * @param  input {InputData}
 * @return {Generator<BaseReactiveProperty>}
 */
function* getProperties(input) {
  for (const reactProperty of reactProperties) {
    if (reactProperty.isSupported(input)) {
      yield reactProperty;
    }
  }
}


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
/*!****************************************!*\
  !*** ./frontend/dynamic.value/main.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/dynamic.value/functions.js");

const {
  addAction
} = JetPlugins.hooks;
addAction('jet.fb.observe.after', 'jet-form-builder/dynamic-value',
/**
 * @param observable {Observable}
 */
function (observable) {
  for (const dataInput of observable.getInputs()) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.parseInput)(dataInput);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZHluYW1pYy52YWx1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2R5bmFtaWMudmFsdWUvQmFzZVJlYWN0aXZlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9NdWx0aXBsZVZhbHVlSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9keW5hbWljLnZhbHVlL1JlYWN0aXZlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9WYWx1ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ2FsY3VsYXRlZEZvcm11bGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBCYXNlUmVhY3RpdmVQcm9wZXJ0eSggbmFtZSA9ICcnICkge1xyXG5cdHRoaXMuYXR0ck5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5CYXNlUmVhY3RpdmVQcm9wZXJ0eS5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogTmFtZSBvZiBkYXRhIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdGF0dHJOYW1lOiAnJyxcclxuXHQvKipcclxuXHQgKiBJZiB5b3UgbmVlZCBzcGVjaWZpYyBjaGVjayxcclxuXHQgKiB5b3UgY2FuIHJld3JpdGUgdGhpcyBmdW5jdGlvblxyXG5cdCAqXHJcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNTdXBwb3J0ZWQoIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuIGlucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCB0aGlzLmF0dHJOYW1lICk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0cnVuT2JzZXJ2ZSggaW5wdXQgKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtCYXNlSHRtbEF0dHJ9XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGh0bWxBdHRyID0gaW5wdXQuYXR0cnNbIHRoaXMuYXR0ck5hbWUgXTtcclxuXHJcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCBpbnB1dCApO1xyXG5cdFx0Zm9ybXVsYS5vYnNlcnZlKCBodG1sQXR0ci5pbml0aWFsICk7XHJcblxyXG5cdFx0dGhpcy5vYnNlcnZlKCBodG1sQXR0ciwgZm9ybXVsYSApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGF0dHIgICAge0Jhc2VIdG1sQXR0cn1cclxuXHQgKiBAcGFyYW0gZm9ybXVsYSB7Q2FsY3VsYXRlZEZvcm11bGF9XHJcblx0ICovXHJcblx0b2JzZXJ2ZSggYXR0ciwgZm9ybXVsYSApIHtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0XHRhdHRyLnZhbHVlLmN1cnJlbnQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xyXG5cdFx0fTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VSZWFjdGl2ZVByb3BlcnR5OyIsImltcG9ydCBWYWx1ZUl0ZW0gZnJvbSAnLi9WYWx1ZUl0ZW0nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIE11bHRpcGxlVmFsdWVJdGVtKCAuLi5wcm9wcyApIHtcclxuXHRWYWx1ZUl0ZW0uY2FsbCggdGhpcywgLi4ucHJvcHMgKTtcclxufVxyXG5cclxuTXVsdGlwbGVWYWx1ZUl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVmFsdWVJdGVtLnByb3RvdHlwZSApO1xyXG5cclxuTXVsdGlwbGVWYWx1ZUl0ZW0ucHJvdG90eXBlLmlzU3VwcG9ydGVkICAgICA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0cmV0dXJuIGlucHV0LmlzQXJyYXkoKTtcclxufTtcclxuTXVsdGlwbGVWYWx1ZUl0ZW0ucHJvdG90eXBlLm9ic2VydmVTZXRWYWx1ZSA9IGZ1bmN0aW9uICggY29uZGl0aW9ucywgaW5wdXQgKSB7XHJcblx0bGV0IHRvU2V0ID0gW107XHJcblxyXG5cdGlmICggIUFycmF5LmlzQXJyYXkoIHRoaXMudG9fc2V0ICkgKSB7XHJcblx0XHR0b1NldCA9IHRoaXMudG9fc2V0LnNwbGl0KCAnLCcgKS5tYXAoIGl0ZW0gPT4gaXRlbS50cmltKCkgKTtcclxuXHR9XHJcblx0dGhpcy50b19zZXQgPSB7fTtcclxuXHJcblx0Zm9yICggY29uc3QgWyBpbmRleCwgdG9TZXRFbGVtZW50IF0gb2YgT2JqZWN0LmVudHJpZXMoIHRvU2V0ICkgKSB7XHJcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCBpbnB1dCApO1xyXG5cclxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdG9TZXRFbGVtZW50ICk7XHJcblx0XHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy50b19zZXRbIGluZGV4IF0gPSAnJyArIGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblxyXG5cdFx0XHR0aGlzLnRvX3NldCA9IE9iamVjdC52YWx1ZXMoIHRoaXMudG9fc2V0ICkuZmlsdGVyKCBCb29sZWFuICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblxyXG5cdFx0dGhpcy5mb3JtdWxhcy5wdXNoKCBmb3JtdWxhICk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVWYWx1ZUl0ZW07IiwiaW1wb3J0IEJhc2VSZWFjdGl2ZVByb3BlcnR5IGZyb20gJy4vQmFzZVJlYWN0aXZlUHJvcGVydHknO1xyXG5cclxuY29uc3QgeyBDYWxjdWxhdGVkRm9ybXVsYSB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIFJlYWN0aXZlVmFsdWUoKSB7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcclxuXHJcblx0XHRyZXR1cm4gbm9kZS5kYXRhc2V0Lmhhc093blByb3BlcnR5KCAndmFsdWUnICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5ydW5PYnNlcnZlID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggaW5wdXQgKTtcclxuXHJcblx0XHRmb3JtdWxhLm9ic2VydmUoIG5vZGUuZGF0YXNldC52YWx1ZSApO1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRcdGlucHV0LnZhbHVlLmN1cnJlbnQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xyXG5cdFx0fTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblx0fTtcclxufVxyXG5cclxuUmVhY3RpdmVWYWx1ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlUmVhY3RpdmVQcm9wZXJ0eS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlVmFsdWU7IiwiY29uc3Qge1xyXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxyXG5cdCAgICAgIENvbmRpdGlvbnNMaXN0LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqIEBjbGFzc1xyXG4gKi9cclxuZnVuY3Rpb24gVmFsdWVJdGVtKCkge1xyXG59XHJcblxyXG5WYWx1ZUl0ZW0ucHJvdG90eXBlID0ge1xyXG5cdHRvX3NldDogJycsXHJcblx0cHJldlJlc3VsdDogbnVsbCxcclxuXHRwcmV2VmFsdWU6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRpbnB1dDogbnVsbCxcclxuXHRmcmVxdWVuY3k6ICcnLFxyXG5cdHNldF9vbl9lbXB0eTogZmFsc2UsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0NhbGN1bGF0ZWRGb3JtdWxhW119XHJcblx0ICovXHJcblx0Zm9ybXVsYXM6IFtdLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5cdGlzU3VwcG9ydGVkKCBpbnB1dCApIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0b2JzZXJ2ZShcclxuXHRcdHtcclxuXHRcdFx0dG9fc2V0OiB0b1NldCxcclxuXHRcdFx0Y29uZGl0aW9ucyA9IFtdLFxyXG5cdFx0XHRzZXRfb25fZW1wdHk6IHNldE9uRW1wdHkgPSBmYWxzZSxcclxuXHRcdFx0ZnJlcXVlbmN5ID0gJ29uX2NoYW5nZScsXHJcblx0XHR9LFxyXG5cdFx0aW5wdXQsXHJcblx0KSB7XHJcblx0XHR0aGlzLmlucHV0ICAgICAgICA9IGlucHV0O1xyXG5cdFx0dGhpcy5mcmVxdWVuY3kgICAgPSBmcmVxdWVuY3k7XHJcblx0XHR0aGlzLnNldF9vbl9lbXB0eSA9IHNldE9uRW1wdHk7XHJcblx0XHR0aGlzLnByZXZSZXN1bHQgICA9IG51bGw7XHJcblx0XHR0aGlzLnByZXZWYWx1ZSAgICA9IG51bGw7XHJcblx0XHR0aGlzLnRvX3NldCAgICAgICA9IHRvU2V0O1xyXG5cdFx0dGhpcy5mb3JtdWxhcyAgICAgPSBbXTtcclxuXHJcblx0XHR0aGlzLm9ic2VydmVTZXRWYWx1ZSggY29uZGl0aW9ucywgaW5wdXQgKTtcclxuXHJcblx0XHRjb25zdCBsaXN0ID0gbmV3IENvbmRpdGlvbnNMaXN0KCBjb25kaXRpb25zLCBpbnB1dC5yb290ICk7XHJcblxyXG5cdFx0aWYgKCBsaXN0LmNvbmRpdGlvbnM/Lmxlbmd0aCApIHtcclxuXHRcdFx0bGlzdC5vbkNoYW5nZVJlbGF0ZWQgPSAoKSA9PiB0aGlzLmFwcGx5VmFsdWUoIGxpc3QgKTtcclxuXHRcdFx0bGlzdC5vYnNlcnZlKCk7XHJcblx0XHRcdGxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgZm9ybXVsYSBvZiB0aGlzLmZvcm11bGFzICkge1xyXG5cdFx0XHRjb25zdCByZXN1bHRDYWxsYmFjayA9IGZvcm11bGEuc2V0UmVzdWx0LmJpbmQoIGZvcm11bGEgKTtcclxuXHJcblx0XHRcdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0XHRcdHJlc3VsdENhbGxiYWNrKCk7XHJcblx0XHRcdFx0dGhpcy5hcHBseVZhbHVlKCBmYWxzZSwgdHJ1ZSApO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b2JzZXJ2ZVNldFZhbHVlKCBjb25kaXRpb25zLCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XHJcblxyXG5cdFx0Zm9ybXVsYS5vYnNlcnZlKCB0aGlzLnRvX3NldCApO1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMudG9fc2V0ID0gJycgKyBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xyXG5cdFx0fTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblxyXG5cdFx0dGhpcy5mb3JtdWxhcy5wdXNoKCBmb3JtdWxhICk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gbGlzdCAgICAgICAge0NvbmRpdGlvbnNMaXN0fGJvb2xlYW59XHJcblx0ICogQHBhcmFtIGZvcmNlUmVzdWx0IHtib29sZWFufG51bGx9XHJcblx0ICovXHJcblx0YXBwbHlWYWx1ZSggbGlzdCwgZm9yY2VSZXN1bHQgPSBudWxsICkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICggbGlzdCApIHtcclxuXHRcdFx0cmVzdWx0ID0gbGlzdC5nZXRSZXN1bHQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXN1bHQgPSBmb3JjZVJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKCB0aGlzLmZyZXF1ZW5jeSApIHtcclxuXHRcdFx0Y2FzZSAnYWx3YXlzJzpcclxuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnb25fY2hhbmdlJzpcclxuXHRcdFx0XHRpZiAoIHRoaXMucHJldlJlc3VsdCA9PT0gcmVzdWx0ICkge1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucHJldlJlc3VsdCA9IHJlc3VsdDtcclxuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnb25jZSc6XHJcblx0XHRcdFx0aWYgKCAhcmVzdWx0ICkge1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xyXG5cdFx0XHRcdFx0bGlzdC5vbkNoYW5nZVJlbGF0ZWQgPSAoKSA9PiB7fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuZm9ybXVsYXMuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50LmNsZWFyV2F0Y2hlcnMoKSApO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNldFZhbHVlKCByZXN1bHQgPSB0cnVlICkge1xyXG5cdFx0aWYgKCAhcmVzdWx0ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoIHRoaXMuc2V0X29uX2VtcHR5ICkge1xyXG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlLnNldElmRW1wdHkoIHRoaXMudG9fc2V0ICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gdGhpcy50b19zZXQ7XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbHVlSXRlbTsiLCJpbXBvcnQgVmFsdWVJdGVtIGZyb20gJy4vVmFsdWVJdGVtJztcclxuaW1wb3J0IE11bHRpcGxlVmFsdWVJdGVtIGZyb20gJy4vTXVsdGlwbGVWYWx1ZUl0ZW0nO1xyXG5pbXBvcnQgUmVhY3RpdmVWYWx1ZSBmcm9tICcuL1JlYWN0aXZlVmFsdWUnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5keW5hbWljLnZhbHVlLnR5cGVzJyxcclxuXHRbXHJcblx0XHRNdWx0aXBsZVZhbHVlSXRlbSxcclxuXHRcdFZhbHVlSXRlbSxcclxuXHRdLFxyXG4pO1xyXG4vKipcclxuICogQHR5cGUge1ZhbHVlSXRlbVtdfVxyXG4gKi9cclxubGV0IHZhbHVlcyAgICAgID0gW107XHJcblxyXG4vKipcclxuICogQHBhcmFtICBpbnB1dFxyXG4gKiBAcmV0dXJuIHtWYWx1ZUl0ZW19XHJcbiAqL1xyXG5jb25zdCBnZXRWYWx1ZSA9ICggaW5wdXQgKSA9PiB7XHJcblx0aWYgKCAhdmFsdWVzLmxlbmd0aCApIHtcclxuXHRcdHZhbHVlcyA9IGdldFZhbHVlcygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgdmFsdWUgb2YgdmFsdWVzICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyB2YWx1ZSgpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVmFsdWVzKCBqc29uLCBpbnB1dCApIHtcclxuXHRjb25zdCBncm91cHMgPSBKU09OLnBhcnNlKCBqc29uICk7XHRcclxuXHJcblx0Zm9yICggY29uc3QgZ3JvdXAgb2YgZ3JvdXBzICkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBnZXRWYWx1ZSggaW5wdXQgKTtcclxuXHJcblx0XHR2YWx1ZS5vYnNlcnZlKCBncm91cCwgaW5wdXQgKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSW5wdXQoIGlucHV0ICkge1xyXG5cdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblx0Y29uc3Qgd3JhcHBlciAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XHJcblxyXG5cdGlmICggd3JhcHBlciAmJiB3cmFwcGVyLmRhdGFzZXQuaGFzT3duUHJvcGVydHkoICd2YWx1ZScgKSApIHtcclxuXHRcdGNyZWF0ZVZhbHVlcyggd3JhcHBlci5kYXRhc2V0LnZhbHVlLCBpbnB1dCApO1xyXG5cdH1cclxuXHQvLyBmb3IgaGlkZGVuLWZpZWxkIGNhc2VcclxuXHRlbHNlIGlmICggbm9kZS5kYXRhc2V0Lmhhc093blByb3BlcnR5KCAnZHluYW1pY1ZhbHVlJyApICkge1xyXG5cdFx0Y3JlYXRlVmFsdWVzKCBub2RlLmRhdGFzZXQuZHluYW1pY1ZhbHVlLCBpbnB1dCApO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgcHJvcGVydHkgb2YgZ2V0UHJvcGVydGllcyggaW5wdXQgKSApIHtcclxuXHRcdHByb3BlcnR5LnJ1bk9ic2VydmUoIGlucHV0ICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuaW1wb3J0IEJhc2VSZWFjdGl2ZVByb3BlcnR5IGZyb20gJy4vQmFzZVJlYWN0aXZlUHJvcGVydHknO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtCYXNlUmVhY3RpdmVQcm9wZXJ0eVtdfVxyXG4gKi9cclxuY29uc3QgcmVhY3RQcm9wZXJ0aWVzID0gW1xyXG5cdG5ldyBCYXNlUmVhY3RpdmVQcm9wZXJ0eSggJ21pbicgKSxcclxuXHRuZXcgQmFzZVJlYWN0aXZlUHJvcGVydHkoICdtYXgnICksXHJcblx0bmV3IFJlYWN0aXZlVmFsdWUoKSxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XHJcbiAqIEByZXR1cm4ge0dlbmVyYXRvcjxCYXNlUmVhY3RpdmVQcm9wZXJ0eT59XHJcbiAqL1xyXG5mdW5jdGlvbiogZ2V0UHJvcGVydGllcyggaW5wdXQgKSB7XHJcblx0Zm9yICggY29uc3QgcmVhY3RQcm9wZXJ0eSBvZiByZWFjdFByb3BlcnRpZXMgKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdHJlYWN0UHJvcGVydHkuaXNTdXBwb3J0ZWQoIGlucHV0IClcclxuXHRcdCkge1xyXG5cdFx0XHR5aWVsZCByZWFjdFByb3BlcnR5O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHBhcnNlSW5wdXQsIGdldFByb3BlcnRpZXMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhcnNlSW5wdXQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2R5bmFtaWMtdmFsdWUnLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcclxuXHRcdGZvciAoIGNvbnN0IGRhdGFJbnB1dCBvZiBvYnNlcnZhYmxlLmdldElucHV0cygpICkge1xyXG5cdFx0XHRwYXJzZUlucHV0KCBkYXRhSW5wdXQgKTtcclxuXHRcdH1cclxuXHR9XHJcbik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==