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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZHluYW1pYy52YWx1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2R5bmFtaWMudmFsdWUvQmFzZVJlYWN0aXZlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9NdWx0aXBsZVZhbHVlSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9keW5hbWljLnZhbHVlL1JlYWN0aXZlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9WYWx1ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ2FsY3VsYXRlZEZvcm11bGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIEJhc2VSZWFjdGl2ZVByb3BlcnR5KCBuYW1lID0gJycgKSB7XG5cdHRoaXMuYXR0ck5hbWUgPSBuYW1lO1xufVxuXG5CYXNlUmVhY3RpdmVQcm9wZXJ0eS5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBOYW1lIG9mIGRhdGEgYXR0cmlidXRlXG5cdCAqL1xuXHRhdHRyTmFtZTogJycsXG5cdC8qKlxuXHQgKiBJZiB5b3UgbmVlZCBzcGVjaWZpYyBjaGVjayxcblx0ICogeW91IGNhbiByZXdyaXRlIHRoaXMgZnVuY3Rpb25cblx0ICpcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aXNTdXBwb3J0ZWQoIGlucHV0ICkge1xuXHRcdHJldHVybiBpbnB1dC5hdHRycy5oYXNPd25Qcm9wZXJ0eSggdGhpcy5hdHRyTmFtZSApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cblx0ICovXG5cdHJ1bk9ic2VydmUoIGlucHV0ICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtCYXNlSHRtbEF0dHJ9XG5cdFx0ICovXG5cdFx0Y29uc3QgaHRtbEF0dHIgPSBpbnB1dC5hdHRyc1sgdGhpcy5hdHRyTmFtZSBdO1xuXG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggaW5wdXQgKTtcblx0XHRmb3JtdWxhLm9ic2VydmUoIGh0bWxBdHRyLmluaXRpYWwgKTtcblxuXHRcdHRoaXMub2JzZXJ2ZSggaHRtbEF0dHIsIGZvcm11bGEgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBhdHRyICAgIHtCYXNlSHRtbEF0dHJ9XG5cdCAqIEBwYXJhbSBmb3JtdWxhIHtDYWxjdWxhdGVkRm9ybXVsYX1cblx0ICovXG5cdG9ic2VydmUoIGF0dHIsIGZvcm11bGEgKSB7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0XHRhdHRyLnZhbHVlLmN1cnJlbnQgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHRcdH07XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VSZWFjdGl2ZVByb3BlcnR5OyIsImltcG9ydCBWYWx1ZUl0ZW0gZnJvbSAnLi9WYWx1ZUl0ZW0nO1xuXG5jb25zdCB7XG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIE11bHRpcGxlVmFsdWVJdGVtKCAuLi5wcm9wcyApIHtcblx0VmFsdWVJdGVtLmNhbGwoIHRoaXMsIC4uLnByb3BzICk7XG59XG5cbk11bHRpcGxlVmFsdWVJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFZhbHVlSXRlbS5wcm90b3R5cGUgKTtcblxuTXVsdGlwbGVWYWx1ZUl0ZW0ucHJvdG90eXBlLmlzU3VwcG9ydGVkICAgICA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdHJldHVybiBpbnB1dC5pc0FycmF5KCk7XG59O1xuTXVsdGlwbGVWYWx1ZUl0ZW0ucHJvdG90eXBlLm9ic2VydmVTZXRWYWx1ZSA9IGZ1bmN0aW9uICggY29uZGl0aW9ucywgaW5wdXQgKSB7XG5cdGxldCB0b1NldCA9IFtdO1xuXG5cdGlmICggIUFycmF5LmlzQXJyYXkoIHRoaXMudG9fc2V0ICkgKSB7XG5cdFx0dG9TZXQgPSB0aGlzLnRvX3NldC5zcGxpdCggJywnICkubWFwKCBpdGVtID0+IGl0ZW0udHJpbSgpICk7XG5cdH1cblx0dGhpcy50b19zZXQgPSB7fTtcblxuXHRmb3IgKCBjb25zdCBbIGluZGV4LCB0b1NldEVsZW1lbnQgXSBvZiBPYmplY3QuZW50cmllcyggdG9TZXQgKSApIHtcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCBpbnB1dCApO1xuXG5cdFx0Zm9ybXVsYS5vYnNlcnZlKCB0b1NldEVsZW1lbnQgKTtcblx0XHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRcdHRoaXMudG9fc2V0WyBpbmRleCBdID0gJycgKyBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXG5cdFx0XHR0aGlzLnRvX3NldCA9IE9iamVjdC52YWx1ZXMoIHRoaXMudG9fc2V0ICkuZmlsdGVyKCBCb29sZWFuICk7XG5cdFx0fTtcblxuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cblx0XHR0aGlzLmZvcm11bGFzLnB1c2goIGZvcm11bGEgKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVWYWx1ZUl0ZW07IiwiaW1wb3J0IEJhc2VSZWFjdGl2ZVByb3BlcnR5IGZyb20gJy4vQmFzZVJlYWN0aXZlUHJvcGVydHknO1xuXG5jb25zdCB7IENhbGN1bGF0ZWRGb3JtdWxhIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBSZWFjdGl2ZVZhbHVlKCkge1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gbm9kZS5kYXRhc2V0Lmhhc093blByb3BlcnR5KCAndmFsdWUnICk7XG5cdH07XG5cblx0dGhpcy5ydW5PYnNlcnZlID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggaW5wdXQgKTtcblxuXHRcdGZvcm11bGEub2JzZXJ2ZSggbm9kZS5kYXRhc2V0LnZhbHVlICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0XHRpbnB1dC52YWx1ZS5jdXJyZW50ID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHR9O1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdH07XG59XG5cblJlYWN0aXZlVmFsdWUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVJlYWN0aXZlUHJvcGVydHkucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlVmFsdWU7IiwiY29uc3Qge1xuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcblx0ICAgICAgQ29uZGl0aW9uc0xpc3QsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gVmFsdWVJdGVtKCkge1xufVxuXG5WYWx1ZUl0ZW0ucHJvdG90eXBlID0ge1xuXHR0b19zZXQ6ICcnLFxuXHRwcmV2UmVzdWx0OiBudWxsLFxuXHRwcmV2VmFsdWU6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0aW5wdXQ6IG51bGwsXG5cdGZyZXF1ZW5jeTogJycsXG5cdHNldF9vbl9lbXB0eTogZmFsc2UsXG5cdC8qKlxuXHQgKiBAdHlwZSB7Q2FsY3VsYXRlZEZvcm11bGFbXX1cblx0ICovXG5cdGZvcm11bGFzOiBbXSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZCggaW5wdXQgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdG9ic2VydmUoXG5cdFx0e1xuXHRcdFx0dG9fc2V0OiB0b1NldCxcblx0XHRcdGNvbmRpdGlvbnMgPSBbXSxcblx0XHRcdHNldF9vbl9lbXB0eTogc2V0T25FbXB0eSA9IGZhbHNlLFxuXHRcdFx0ZnJlcXVlbmN5ID0gJ29uX2NoYW5nZScsXG5cdFx0fSxcblx0XHRpbnB1dCxcblx0KSB7XG5cdFx0dGhpcy5pbnB1dCAgICAgICAgPSBpbnB1dDtcblx0XHR0aGlzLmZyZXF1ZW5jeSAgICA9IGZyZXF1ZW5jeTtcblx0XHR0aGlzLnNldF9vbl9lbXB0eSA9IHNldE9uRW1wdHk7XG5cdFx0dGhpcy5wcmV2UmVzdWx0ICAgPSBudWxsO1xuXHRcdHRoaXMucHJldlZhbHVlICAgID0gbnVsbDtcblx0XHR0aGlzLnRvX3NldCAgICAgICA9IHRvU2V0O1xuXHRcdHRoaXMuZm9ybXVsYXMgICAgID0gW107XG5cblx0XHR0aGlzLm9ic2VydmVTZXRWYWx1ZSggY29uZGl0aW9ucywgaW5wdXQgKTtcblxuXHRcdGNvbnN0IGxpc3QgPSBuZXcgQ29uZGl0aW9uc0xpc3QoIGNvbmRpdGlvbnMsIGlucHV0LnJvb3QgKTtcblxuXHRcdGlmICggbGlzdC5jb25kaXRpb25zPy5sZW5ndGggKSB7XG5cdFx0XHRsaXN0Lm9uQ2hhbmdlUmVsYXRlZCA9ICgpID0+IHRoaXMuYXBwbHlWYWx1ZSggbGlzdCApO1xuXHRcdFx0bGlzdC5vYnNlcnZlKCk7XG5cdFx0XHRsaXN0Lm9uQ2hhbmdlUmVsYXRlZCgpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgZm9ybXVsYSBvZiB0aGlzLmZvcm11bGFzICkge1xuXHRcdFx0Y29uc3QgcmVzdWx0Q2FsbGJhY2sgPSBmb3JtdWxhLnNldFJlc3VsdC5iaW5kKCBmb3JtdWxhICk7XG5cblx0XHRcdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdFx0XHRyZXN1bHRDYWxsYmFjaygpO1xuXHRcdFx0XHR0aGlzLmFwcGx5VmFsdWUoIGZhbHNlLCB0cnVlICk7XG5cdFx0XHR9O1xuXHRcdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0XHR9XG5cdH0sXG5cdG9ic2VydmVTZXRWYWx1ZSggY29uZGl0aW9ucywgaW5wdXQgKSB7XG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggaW5wdXQgKTtcblxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy50b19zZXQgKTtcblx0XHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRcdHRoaXMudG9fc2V0ID0gJycgKyBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHRcdH07XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblxuXHRcdHRoaXMuZm9ybXVsYXMucHVzaCggZm9ybXVsYSApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIGxpc3QgICAgICAgIHtDb25kaXRpb25zTGlzdHxib29sZWFufVxuXHQgKiBAcGFyYW0gZm9yY2VSZXN1bHQge2Jvb2xlYW58bnVsbH1cblx0ICovXG5cdGFwcGx5VmFsdWUoIGxpc3QsIGZvcmNlUmVzdWx0ID0gbnVsbCApIHtcblx0XHRsZXQgcmVzdWx0ID0gZmFsc2U7XG5cblx0XHRpZiAoIGxpc3QgKSB7XG5cdFx0XHRyZXN1bHQgPSBsaXN0LmdldFJlc3VsdCgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlc3VsdCA9IGZvcmNlUmVzdWx0O1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoIHRoaXMuZnJlcXVlbmN5ICkge1xuXHRcdFx0Y2FzZSAnYWx3YXlzJzpcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSggcmVzdWx0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnb25fY2hhbmdlJzpcblx0XHRcdFx0aWYgKCB0aGlzLnByZXZSZXN1bHQgPT09IHJlc3VsdCApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnByZXZSZXN1bHQgPSByZXN1bHQ7XG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoIHJlc3VsdCApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29uY2UnOlxuXHRcdFx0XHRpZiAoICFyZXN1bHQgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXG5cdFx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0XHRsaXN0Lm9uQ2hhbmdlUmVsYXRlZCA9ICgpID0+IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5mb3JtdWxhcy5mb3JFYWNoKCBjdXJyZW50ID0+IGN1cnJlbnQuY2xlYXJXYXRjaGVycygpICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXHRzZXRWYWx1ZSggcmVzdWx0ID0gdHJ1ZSApIHtcblx0XHRpZiAoICFyZXN1bHQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICggdGhpcy5zZXRfb25fZW1wdHkgKSB7XG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlLnNldElmRW1wdHkoIHRoaXMudG9fc2V0ICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gdGhpcy50b19zZXQ7XG5cdFx0fVxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsdWVJdGVtOyIsImltcG9ydCBWYWx1ZUl0ZW0gZnJvbSAnLi9WYWx1ZUl0ZW0nO1xuaW1wb3J0IE11bHRpcGxlVmFsdWVJdGVtIGZyb20gJy4vTXVsdGlwbGVWYWx1ZUl0ZW0nO1xuaW1wb3J0IFJlYWN0aXZlVmFsdWUgZnJvbSAnLi9SZWFjdGl2ZVZhbHVlJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFZhbHVlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5keW5hbWljLnZhbHVlLnR5cGVzJyxcblx0W1xuXHRcdE11bHRpcGxlVmFsdWVJdGVtLFxuXHRcdFZhbHVlSXRlbSxcblx0XSxcbik7XG4vKipcbiAqIEB0eXBlIHtWYWx1ZUl0ZW1bXX1cbiAqL1xubGV0IHZhbHVlcyAgICAgID0gW107XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dFxuICogQHJldHVybiB7VmFsdWVJdGVtfVxuICovXG5jb25zdCBnZXRWYWx1ZSA9ICggaW5wdXQgKSA9PiB7XG5cdGlmICggIXZhbHVlcy5sZW5ndGggKSB7XG5cdFx0dmFsdWVzID0gZ2V0VmFsdWVzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCB2YWx1ZSBvZiB2YWx1ZXMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyB2YWx1ZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggaW5wdXQgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxufTtcblxuZnVuY3Rpb24gY3JlYXRlVmFsdWVzKCBqc29uLCBpbnB1dCApIHtcblx0Y29uc3QgZ3JvdXBzID0gSlNPTi5wYXJzZSgganNvbiApO1x0XG5cblx0Zm9yICggY29uc3QgZ3JvdXAgb2YgZ3JvdXBzICkge1xuXHRcdGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoIGlucHV0ICk7XG5cblx0XHR2YWx1ZS5vYnNlcnZlKCBncm91cCwgaW5wdXQgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0KCBpbnB1dCApIHtcblx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2Rlcztcblx0Y29uc3Qgd3JhcHBlciAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XG5cblx0aWYgKCB3cmFwcGVyICYmIHdyYXBwZXIuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSggJ3ZhbHVlJyApICkge1xuXHRcdGNyZWF0ZVZhbHVlcyggd3JhcHBlci5kYXRhc2V0LnZhbHVlLCBpbnB1dCApO1xuXHR9XG5cdC8vIGZvciBoaWRkZW4tZmllbGQgY2FzZVxuXHRlbHNlIGlmICggbm9kZS5kYXRhc2V0Lmhhc093blByb3BlcnR5KCAnZHluYW1pY1ZhbHVlJyApICkge1xuXHRcdGNyZWF0ZVZhbHVlcyggbm9kZS5kYXRhc2V0LmR5bmFtaWNWYWx1ZSwgaW5wdXQgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByb3BlcnR5IG9mIGdldFByb3BlcnRpZXMoIGlucHV0ICkgKSB7XG5cdFx0cHJvcGVydHkucnVuT2JzZXJ2ZSggaW5wdXQgKTtcblx0fVxuXG59XG5cbmltcG9ydCBCYXNlUmVhY3RpdmVQcm9wZXJ0eSBmcm9tICcuL0Jhc2VSZWFjdGl2ZVByb3BlcnR5JztcblxuLyoqXG4gKiBAdHlwZSB7QmFzZVJlYWN0aXZlUHJvcGVydHlbXX1cbiAqL1xuY29uc3QgcmVhY3RQcm9wZXJ0aWVzID0gW1xuXHRuZXcgQmFzZVJlYWN0aXZlUHJvcGVydHkoICdtaW4nICksXG5cdG5ldyBCYXNlUmVhY3RpdmVQcm9wZXJ0eSggJ21heCcgKSxcblx0bmV3IFJlYWN0aXZlVmFsdWUoKSxcbl07XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuICogQHJldHVybiB7R2VuZXJhdG9yPEJhc2VSZWFjdGl2ZVByb3BlcnR5Pn1cbiAqL1xuZnVuY3Rpb24qIGdldFByb3BlcnRpZXMoIGlucHV0ICkge1xuXHRmb3IgKCBjb25zdCByZWFjdFByb3BlcnR5IG9mIHJlYWN0UHJvcGVydGllcyApIHtcblx0XHRpZiAoXG5cdFx0XHRyZWFjdFByb3BlcnR5LmlzU3VwcG9ydGVkKCBpbnB1dCApXG5cdFx0KSB7XG5cdFx0XHR5aWVsZCByZWFjdFByb3BlcnR5O1xuXHRcdH1cblx0fVxuXG59XG5cbmV4cG9ydCB7IHBhcnNlSW5wdXQsIGdldFByb3BlcnRpZXMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhcnNlSW5wdXQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2R5bmFtaWMtdmFsdWUnLFxuXHQvKipcblx0ICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XG5cdCAqL1xuXHRmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XG5cdFx0Zm9yICggY29uc3QgZGF0YUlucHV0IG9mIG9ic2VydmFibGUuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRwYXJzZUlucHV0KCBkYXRhSW5wdXQgKTtcblx0XHR9XG5cdH1cbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=