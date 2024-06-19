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
   * @param input {InputData}
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
   * @param attr {BaseHtmlAttr}
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
 * @constructor
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
   * @param input {InputData}
   * @returns {boolean}
   */
  isSupported(input) {
    return true;
  },
  /**
   * @param to_set
   * @param conditions
   * @param set_on_empty {Boolean}
   * @param frequency {'once'|'always'|'on_change'}
   * @param input {InputData}
   */
  observe({
    to_set,
    conditions = [],
    set_on_empty = false,
    frequency = 'on_change'
  }, input) {
    this.input = input;
    this.frequency = frequency;
    this.set_on_empty = set_on_empty;
    this.prevResult = null;
    this.prevValue = null;
    this.to_set = to_set;
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
   * @param list {ConditionsList|boolean}
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
 * @param input
 * @returns {ValueItem}
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
  let groups = [];
  try {
    groups = JSON.parse(json);
  } catch (error) {
    console.error(error);
    return;
  }
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
 * @param input {InputData}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZHluYW1pYy52YWx1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2R5bmFtaWMudmFsdWUvQmFzZVJlYWN0aXZlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9NdWx0aXBsZVZhbHVlSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9keW5hbWljLnZhbHVlL1JlYWN0aXZlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9WYWx1ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ2FsY3VsYXRlZEZvcm11bGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBCYXNlUmVhY3RpdmVQcm9wZXJ0eSggbmFtZSA9ICcnICkge1xyXG5cdHRoaXMuYXR0ck5hbWUgPSBuYW1lO1xyXG59XHJcblxyXG5CYXNlUmVhY3RpdmVQcm9wZXJ0eS5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogTmFtZSBvZiBkYXRhIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdGF0dHJOYW1lOiAnJyxcclxuXHQvKipcclxuXHQgKiBJZiB5b3UgbmVlZCBzcGVjaWZpYyBjaGVjayxcclxuXHQgKiB5b3UgY2FuIHJld3JpdGUgdGhpcyBmdW5jdGlvblxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc1N1cHBvcnRlZCggaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoIHRoaXMuYXR0ck5hbWUgKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRydW5PYnNlcnZlKCBpbnB1dCApIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge0Jhc2VIdG1sQXR0cn1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgaHRtbEF0dHIgPSBpbnB1dC5hdHRyc1sgdGhpcy5hdHRyTmFtZSBdO1xyXG5cclxuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XHJcblx0XHRmb3JtdWxhLm9ic2VydmUoIGh0bWxBdHRyLmluaXRpYWwgKTtcclxuXHJcblx0XHR0aGlzLm9ic2VydmUoIGh0bWxBdHRyLCBmb3JtdWxhICk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gYXR0ciB7QmFzZUh0bWxBdHRyfVxyXG5cdCAqIEBwYXJhbSBmb3JtdWxhIHtDYWxjdWxhdGVkRm9ybXVsYX1cclxuXHQgKi9cclxuXHRvYnNlcnZlKCBhdHRyLCBmb3JtdWxhICkge1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRcdGF0dHIudmFsdWUuY3VycmVudCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0XHR9O1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZVJlYWN0aXZlUHJvcGVydHk7IiwiaW1wb3J0IFZhbHVlSXRlbSBmcm9tICcuL1ZhbHVlSXRlbSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gTXVsdGlwbGVWYWx1ZUl0ZW0oIC4uLnByb3BzICkge1xyXG5cdFZhbHVlSXRlbS5jYWxsKCB0aGlzLCAuLi5wcm9wcyApO1xyXG59XHJcblxyXG5NdWx0aXBsZVZhbHVlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBWYWx1ZUl0ZW0ucHJvdG90eXBlICk7XHJcblxyXG5NdWx0aXBsZVZhbHVlSXRlbS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgICAgID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRyZXR1cm4gaW5wdXQuaXNBcnJheSgpO1xyXG59O1xyXG5NdWx0aXBsZVZhbHVlSXRlbS5wcm90b3R5cGUub2JzZXJ2ZVNldFZhbHVlID0gZnVuY3Rpb24gKCBjb25kaXRpb25zLCBpbnB1dCApIHtcclxuXHRsZXQgdG9TZXQgPSBbXTtcclxuXHJcblx0aWYgKCAhQXJyYXkuaXNBcnJheSggdGhpcy50b19zZXQgKSApIHtcclxuXHRcdHRvU2V0ID0gdGhpcy50b19zZXQuc3BsaXQoICcsJyApLm1hcCggaXRlbSA9PiBpdGVtLnRyaW0oKSApO1xyXG5cdH1cclxuXHR0aGlzLnRvX3NldCA9IHt9O1xyXG5cclxuXHRmb3IgKCBjb25zdCBbIGluZGV4LCB0b1NldEVsZW1lbnQgXSBvZiBPYmplY3QuZW50cmllcyggdG9TZXQgKSApIHtcclxuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XHJcblxyXG5cdFx0Zm9ybXVsYS5vYnNlcnZlKCB0b1NldEVsZW1lbnQgKTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRvX3NldFsgaW5kZXggXSA9ICcnICsgZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHJcblx0XHRcdHRoaXMudG9fc2V0ID0gT2JqZWN0LnZhbHVlcyggdGhpcy50b19zZXQgKS5maWx0ZXIoIEJvb2xlYW4gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHJcblx0XHR0aGlzLmZvcm11bGFzLnB1c2goIGZvcm11bGEgKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZVZhbHVlSXRlbTsiLCJpbXBvcnQgQmFzZVJlYWN0aXZlUHJvcGVydHkgZnJvbSAnLi9CYXNlUmVhY3RpdmVQcm9wZXJ0eSc7XHJcblxyXG5jb25zdCB7IENhbGN1bGF0ZWRGb3JtdWxhIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gUmVhY3RpdmVWYWx1ZSgpIHtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdHJldHVybiBub2RlLmRhdGFzZXQuaGFzT3duUHJvcGVydHkoICd2YWx1ZScgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJ1bk9ic2VydmUgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcclxuXHJcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCBpbnB1dCApO1xyXG5cclxuXHRcdGZvcm11bGEub2JzZXJ2ZSggbm9kZS5kYXRhc2V0LnZhbHVlICk7XHJcblx0XHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcclxuXHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0XHR9O1xyXG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHR9O1xyXG59XHJcblxyXG5SZWFjdGl2ZVZhbHVlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VSZWFjdGl2ZVByb3BlcnR5LnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVWYWx1ZTsiLCJjb25zdCB7XHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcblx0ICAgICAgQ29uZGl0aW9uc0xpc3QsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBWYWx1ZUl0ZW0oKSB7XHJcbn1cclxuXHJcblZhbHVlSXRlbS5wcm90b3R5cGUgPSB7XHJcblx0dG9fc2V0OiAnJyxcclxuXHRwcmV2UmVzdWx0OiBudWxsLFxyXG5cdHByZXZWYWx1ZTogbnVsbCxcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGlucHV0OiBudWxsLFxyXG5cdGZyZXF1ZW5jeTogJycsXHJcblx0c2V0X29uX2VtcHR5OiBmYWxzZSxcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7Q2FsY3VsYXRlZEZvcm11bGFbXX1cclxuXHQgKi9cclxuXHRmb3JtdWxhczogW10sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNTdXBwb3J0ZWQoIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gdG9fc2V0XHJcblx0ICogQHBhcmFtIGNvbmRpdGlvbnNcclxuXHQgKiBAcGFyYW0gc2V0X29uX2VtcHR5IHtCb29sZWFufVxyXG5cdCAqIEBwYXJhbSBmcmVxdWVuY3kgeydvbmNlJ3wnYWx3YXlzJ3wnb25fY2hhbmdlJ31cclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRvYnNlcnZlKFxyXG5cdFx0e1xyXG5cdFx0XHR0b19zZXQsXHJcblx0XHRcdGNvbmRpdGlvbnMgPSBbXSxcclxuXHRcdFx0c2V0X29uX2VtcHR5ID0gZmFsc2UsXHJcblx0XHRcdGZyZXF1ZW5jeSA9ICdvbl9jaGFuZ2UnLFxyXG5cdFx0fSxcclxuXHRcdGlucHV0LFxyXG5cdCkge1xyXG5cdFx0dGhpcy5pbnB1dCAgICAgICAgPSBpbnB1dDtcclxuXHRcdHRoaXMuZnJlcXVlbmN5ICAgID0gZnJlcXVlbmN5O1xyXG5cdFx0dGhpcy5zZXRfb25fZW1wdHkgPSBzZXRfb25fZW1wdHk7XHJcblx0XHR0aGlzLnByZXZSZXN1bHQgICA9IG51bGw7XHJcblx0XHR0aGlzLnByZXZWYWx1ZSAgICA9IG51bGw7XHJcblx0XHR0aGlzLnRvX3NldCAgICAgICA9IHRvX3NldDtcclxuXHRcdHRoaXMuZm9ybXVsYXMgICAgID0gW107XHJcblxyXG5cdFx0dGhpcy5vYnNlcnZlU2V0VmFsdWUoIGNvbmRpdGlvbnMsIGlucHV0ICk7XHJcblxyXG5cdFx0Y29uc3QgbGlzdCA9IG5ldyBDb25kaXRpb25zTGlzdCggY29uZGl0aW9ucywgaW5wdXQucm9vdCApO1xyXG5cclxuXHRcdGlmICggbGlzdC5jb25kaXRpb25zPy5sZW5ndGggKSB7XHJcblx0XHRcdGxpc3Qub25DaGFuZ2VSZWxhdGVkID0gKCkgPT4gdGhpcy5hcHBseVZhbHVlKCBsaXN0ICk7XHJcblx0XHRcdGxpc3Qub2JzZXJ2ZSgpO1xyXG5cdFx0XHRsaXN0Lm9uQ2hhbmdlUmVsYXRlZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IGZvcm11bGEgb2YgdGhpcy5mb3JtdWxhcyApIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0Q2FsbGJhY2sgPSBmb3JtdWxhLnNldFJlc3VsdC5iaW5kKCBmb3JtdWxhICk7XHJcblxyXG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXN1bHRDYWxsYmFjaygpO1xyXG5cdFx0XHRcdHRoaXMuYXBwbHlWYWx1ZSggZmFsc2UsIHRydWUgKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9ic2VydmVTZXRWYWx1ZSggY29uZGl0aW9ucywgaW5wdXQgKSB7XHJcblx0XHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCBpbnB1dCApO1xyXG5cclxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdGhpcy50b19zZXQgKTtcclxuXHRcdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRvX3NldCA9ICcnICsgZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHRcdH07XHJcblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cclxuXHRcdHRoaXMuZm9ybXVsYXMucHVzaCggZm9ybXVsYSApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGxpc3Qge0NvbmRpdGlvbnNMaXN0fGJvb2xlYW59XHJcblx0ICogQHBhcmFtIGZvcmNlUmVzdWx0IHtib29sZWFufG51bGx9XHJcblx0ICovXHJcblx0YXBwbHlWYWx1ZSggbGlzdCwgZm9yY2VSZXN1bHQgPSBudWxsICkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuXHRcdGlmICggbGlzdCApIHtcclxuXHRcdFx0cmVzdWx0ID0gbGlzdC5nZXRSZXN1bHQoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZXN1bHQgPSBmb3JjZVJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKCB0aGlzLmZyZXF1ZW5jeSApIHtcclxuXHRcdFx0Y2FzZSAnYWx3YXlzJzpcclxuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnb25fY2hhbmdlJzpcclxuXHRcdFx0XHRpZiAoIHRoaXMucHJldlJlc3VsdCA9PT0gcmVzdWx0ICkge1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucHJldlJlc3VsdCA9IHJlc3VsdDtcclxuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnb25jZSc6XHJcblx0XHRcdFx0aWYgKCAhcmVzdWx0ICkge1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHJcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xyXG5cdFx0XHRcdFx0bGlzdC5vbkNoYW5nZVJlbGF0ZWQgPSAoKSA9PiB7fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuZm9ybXVsYXMuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50LmNsZWFyV2F0Y2hlcnMoKSApO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNldFZhbHVlKCByZXN1bHQgPSB0cnVlICkge1xyXG5cdFx0aWYgKCAhcmVzdWx0ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoIHRoaXMuc2V0X29uX2VtcHR5ICkge1xyXG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlLnNldElmRW1wdHkoIHRoaXMudG9fc2V0ICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gdGhpcy50b19zZXQ7XHJcblx0XHR9XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbHVlSXRlbTsiLCJpbXBvcnQgVmFsdWVJdGVtIGZyb20gJy4vVmFsdWVJdGVtJztcclxuaW1wb3J0IE11bHRpcGxlVmFsdWVJdGVtIGZyb20gJy4vTXVsdGlwbGVWYWx1ZUl0ZW0nO1xyXG5pbXBvcnQgUmVhY3RpdmVWYWx1ZSBmcm9tICcuL1JlYWN0aXZlVmFsdWUnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5keW5hbWljLnZhbHVlLnR5cGVzJyxcclxuXHRbXHJcblx0XHRNdWx0aXBsZVZhbHVlSXRlbSxcclxuXHRcdFZhbHVlSXRlbSxcclxuXHRdLFxyXG4pO1xyXG4vKipcclxuICogQHR5cGUge1ZhbHVlSXRlbVtdfVxyXG4gKi9cclxubGV0IHZhbHVlcyAgICAgID0gW107XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0XHJcbiAqIEByZXR1cm5zIHtWYWx1ZUl0ZW19XHJcbiAqL1xyXG5jb25zdCBnZXRWYWx1ZSA9ICggaW5wdXQgKSA9PiB7XHJcblx0aWYgKCAhdmFsdWVzLmxlbmd0aCApIHtcclxuXHRcdHZhbHVlcyA9IGdldFZhbHVlcygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgdmFsdWUgb2YgdmFsdWVzICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyB2YWx1ZSgpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVmFsdWVzKCBqc29uLCBpbnB1dCApIHtcclxuXHRsZXQgZ3JvdXBzID0gW107XHJcblxyXG5cdHRyeSB7XHJcblx0XHRncm91cHMgPSBKU09OLnBhcnNlKCBqc29uICk7XHJcblx0fVxyXG5cdGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKCBlcnJvciApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgZ3JvdXAgb2YgZ3JvdXBzICkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBnZXRWYWx1ZSggaW5wdXQgKTtcclxuXHJcblx0XHR2YWx1ZS5vYnNlcnZlKCBncm91cCwgaW5wdXQgKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlSW5wdXQoIGlucHV0ICkge1xyXG5cdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblx0Y29uc3Qgd3JhcHBlciAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XHJcblxyXG5cdGlmICggd3JhcHBlciAmJiB3cmFwcGVyLmRhdGFzZXQuaGFzT3duUHJvcGVydHkoICd2YWx1ZScgKSApIHtcclxuXHRcdGNyZWF0ZVZhbHVlcyggd3JhcHBlci5kYXRhc2V0LnZhbHVlLCBpbnB1dCApO1xyXG5cdH1cclxuXHQvLyBmb3IgaGlkZGVuLWZpZWxkIGNhc2VcclxuXHRlbHNlIGlmICggbm9kZS5kYXRhc2V0Lmhhc093blByb3BlcnR5KCAnZHluYW1pY1ZhbHVlJyApICkge1xyXG5cdFx0Y3JlYXRlVmFsdWVzKCBub2RlLmRhdGFzZXQuZHluYW1pY1ZhbHVlLCBpbnB1dCApO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgcHJvcGVydHkgb2YgZ2V0UHJvcGVydGllcyggaW5wdXQgKSApIHtcclxuXHRcdHByb3BlcnR5LnJ1bk9ic2VydmUoIGlucHV0ICk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuaW1wb3J0IEJhc2VSZWFjdGl2ZVByb3BlcnR5IGZyb20gJy4vQmFzZVJlYWN0aXZlUHJvcGVydHknO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtCYXNlUmVhY3RpdmVQcm9wZXJ0eVtdfVxyXG4gKi9cclxuY29uc3QgcmVhY3RQcm9wZXJ0aWVzID0gW1xyXG5cdG5ldyBCYXNlUmVhY3RpdmVQcm9wZXJ0eSggJ21pbicgKSxcclxuXHRuZXcgQmFzZVJlYWN0aXZlUHJvcGVydHkoICdtYXgnICksXHJcblx0bmV3IFJlYWN0aXZlVmFsdWUoKSxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuICogQHJldHVybiB7R2VuZXJhdG9yPEJhc2VSZWFjdGl2ZVByb3BlcnR5Pn1cclxuICovXHJcbmZ1bmN0aW9uKiBnZXRQcm9wZXJ0aWVzKCBpbnB1dCApIHtcclxuXHRmb3IgKCBjb25zdCByZWFjdFByb3BlcnR5IG9mIHJlYWN0UHJvcGVydGllcyApIHtcclxuXHRcdGlmIChcclxuXHRcdFx0cmVhY3RQcm9wZXJ0eS5pc1N1cHBvcnRlZCggaW5wdXQgKVxyXG5cdFx0KSB7XHJcblx0XHRcdHlpZWxkIHJlYWN0UHJvcGVydHk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgcGFyc2VJbnB1dCwgZ2V0UHJvcGVydGllcyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcGFyc2VJbnB1dCB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvZHluYW1pYy12YWx1ZScsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xyXG5cdFx0Zm9yICggY29uc3QgZGF0YUlucHV0IG9mIG9ic2VydmFibGUuZ2V0SW5wdXRzKCkgKSB7XHJcblx0XHRcdHBhcnNlSW5wdXQoIGRhdGFJbnB1dCApO1xyXG5cdFx0fVxyXG5cdH1cclxuKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9