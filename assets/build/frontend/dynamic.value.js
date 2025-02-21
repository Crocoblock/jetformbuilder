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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvZHluYW1pYy52YWx1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9keW5hbWljLnZhbHVlL0Jhc2VSZWFjdGl2ZVByb3BlcnR5LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2R5bmFtaWMudmFsdWUvTXVsdGlwbGVWYWx1ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvZHluYW1pYy52YWx1ZS9SZWFjdGl2ZVZhbHVlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2R5bmFtaWMudmFsdWUvVmFsdWVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2R5bmFtaWMudmFsdWUvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2R5bmFtaWMudmFsdWUvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENhbGN1bGF0ZWRGb3JtdWxhIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBCYXNlUmVhY3RpdmVQcm9wZXJ0eSggbmFtZSA9ICcnICkge1xuXHR0aGlzLmF0dHJOYW1lID0gbmFtZTtcbn1cblxuQmFzZVJlYWN0aXZlUHJvcGVydHkucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogTmFtZSBvZiBkYXRhIGF0dHJpYnV0ZVxuXHQgKi9cblx0YXR0ck5hbWU6ICcnLFxuXHQvKipcblx0ICogSWYgeW91IG5lZWQgc3BlY2lmaWMgY2hlY2ssXG5cdCAqIHlvdSBjYW4gcmV3cml0ZSB0aGlzIGZ1bmN0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGlzU3VwcG9ydGVkKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoIHRoaXMuYXR0ck5hbWUgKTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqL1xuXHRydW5PYnNlcnZlKCBpbnB1dCApIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7QmFzZUh0bWxBdHRyfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGh0bWxBdHRyID0gaW5wdXQuYXR0cnNbIHRoaXMuYXR0ck5hbWUgXTtcblxuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XG5cdFx0Zm9ybXVsYS5vYnNlcnZlKCBodG1sQXR0ci5pbml0aWFsICk7XG5cblx0XHR0aGlzLm9ic2VydmUoIGh0bWxBdHRyLCBmb3JtdWxhICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gYXR0ciAgICB7QmFzZUh0bWxBdHRyfVxuXHQgKiBAcGFyYW0gZm9ybXVsYSB7Q2FsY3VsYXRlZEZvcm11bGF9XG5cdCAqL1xuXHRvYnNlcnZlKCBhdHRyLCBmb3JtdWxhICkge1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdFx0YXR0ci52YWx1ZS5jdXJyZW50ID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHR9O1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlUmVhY3RpdmVQcm9wZXJ0eTsiLCJpbXBvcnQgVmFsdWVJdGVtIGZyb20gJy4vVmFsdWVJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBNdWx0aXBsZVZhbHVlSXRlbSggLi4ucHJvcHMgKSB7XG5cdFZhbHVlSXRlbS5jYWxsKCB0aGlzLCAuLi5wcm9wcyApO1xufVxuXG5NdWx0aXBsZVZhbHVlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBWYWx1ZUl0ZW0ucHJvdG90eXBlICk7XG5cbk11bHRpcGxlVmFsdWVJdGVtLnByb3RvdHlwZS5pc1N1cHBvcnRlZCAgICAgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRyZXR1cm4gaW5wdXQuaXNBcnJheSgpO1xufTtcbk11bHRpcGxlVmFsdWVJdGVtLnByb3RvdHlwZS5vYnNlcnZlU2V0VmFsdWUgPSBmdW5jdGlvbiAoIGNvbmRpdGlvbnMsIGlucHV0ICkge1xuXHRsZXQgdG9TZXQgPSBbXTtcblxuXHRpZiAoICFBcnJheS5pc0FycmF5KCB0aGlzLnRvX3NldCApICkge1xuXHRcdHRvU2V0ID0gdGhpcy50b19zZXQuc3BsaXQoICcsJyApLm1hcCggaXRlbSA9PiBpdGVtLnRyaW0oKSApO1xuXHR9XG5cdHRoaXMudG9fc2V0ID0ge307XG5cblx0Zm9yICggY29uc3QgWyBpbmRleCwgdG9TZXRFbGVtZW50IF0gb2YgT2JqZWN0LmVudHJpZXMoIHRvU2V0ICkgKSB7XG5cdFx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggaW5wdXQgKTtcblxuXHRcdGZvcm11bGEub2JzZXJ2ZSggdG9TZXRFbGVtZW50ICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnRvX3NldFsgaW5kZXggXSA9ICcnICsgZm9ybXVsYS5jYWxjdWxhdGUoKTtcblxuXHRcdFx0dGhpcy50b19zZXQgPSBPYmplY3QudmFsdWVzKCB0aGlzLnRvX3NldCApLmZpbHRlciggQm9vbGVhbiApO1xuXHRcdH07XG5cblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXG5cdFx0dGhpcy5mb3JtdWxhcy5wdXNoKCBmb3JtdWxhICk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlVmFsdWVJdGVtOyIsImltcG9ydCBCYXNlUmVhY3RpdmVQcm9wZXJ0eSBmcm9tICcuL0Jhc2VSZWFjdGl2ZVByb3BlcnR5JztcblxuY29uc3QgeyBDYWxjdWxhdGVkRm9ybXVsYSB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gUmVhY3RpdmVWYWx1ZSgpIHtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0cmV0dXJuIG5vZGUuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSggJ3ZhbHVlJyApO1xuXHR9O1xuXG5cdHRoaXMucnVuT2JzZXJ2ZSA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XG5cblx0XHRmb3JtdWxhLm9ic2VydmUoIG5vZGUuZGF0YXNldC52YWx1ZSApO1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdFx0aW5wdXQudmFsdWUuY3VycmVudCA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdFx0fTtcblx0XHRmb3JtdWxhLnNldFJlc3VsdCgpO1xuXHR9O1xufVxuXG5SZWFjdGl2ZVZhbHVlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VSZWFjdGl2ZVByb3BlcnR5LnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZVZhbHVlOyIsImNvbnN0IHtcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG5cdCAgICAgIENvbmRpdGlvbnNMaXN0LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHR5cGUge0Z1bmN0aW9ufVxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFZhbHVlSXRlbSgpIHtcbn1cblxuVmFsdWVJdGVtLnByb3RvdHlwZSA9IHtcblx0dG9fc2V0OiAnJyxcblx0cHJldlJlc3VsdDogbnVsbCxcblx0cHJldlZhbHVlOiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGlucHV0OiBudWxsLFxuXHRmcmVxdWVuY3k6ICcnLFxuXHRzZXRfb25fZW1wdHk6IGZhbHNlLFxuXHQvKipcblx0ICogQHR5cGUge0NhbGN1bGF0ZWRGb3JtdWxhW119XG5cdCAqL1xuXHRmb3JtdWxhczogW10sXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0aXNTdXBwb3J0ZWQoIGlucHV0ICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRvYnNlcnZlKFxuXHRcdHtcblx0XHRcdHRvX3NldDogdG9TZXQsXG5cdFx0XHRjb25kaXRpb25zID0gW10sXG5cdFx0XHRzZXRfb25fZW1wdHk6IHNldE9uRW1wdHkgPSBmYWxzZSxcblx0XHRcdGZyZXF1ZW5jeSA9ICdvbl9jaGFuZ2UnLFxuXHRcdH0sXG5cdFx0aW5wdXQsXG5cdCkge1xuXHRcdHRoaXMuaW5wdXQgICAgICAgID0gaW5wdXQ7XG5cdFx0dGhpcy5mcmVxdWVuY3kgICAgPSBmcmVxdWVuY3k7XG5cdFx0dGhpcy5zZXRfb25fZW1wdHkgPSBzZXRPbkVtcHR5O1xuXHRcdHRoaXMucHJldlJlc3VsdCAgID0gbnVsbDtcblx0XHR0aGlzLnByZXZWYWx1ZSAgICA9IG51bGw7XG5cdFx0dGhpcy50b19zZXQgICAgICAgPSB0b1NldDtcblx0XHR0aGlzLmZvcm11bGFzICAgICA9IFtdO1xuXG5cdFx0dGhpcy5vYnNlcnZlU2V0VmFsdWUoIGNvbmRpdGlvbnMsIGlucHV0ICk7XG5cblx0XHRjb25zdCBsaXN0ID0gbmV3IENvbmRpdGlvbnNMaXN0KCBjb25kaXRpb25zLCBpbnB1dC5yb290ICk7XG5cblx0XHRpZiAoIGxpc3QuY29uZGl0aW9ucz8ubGVuZ3RoICkge1xuXHRcdFx0bGlzdC5vbkNoYW5nZVJlbGF0ZWQgPSAoKSA9PiB0aGlzLmFwcGx5VmFsdWUoIGxpc3QgKTtcblx0XHRcdGxpc3Qub2JzZXJ2ZSgpO1xuXHRcdFx0bGlzdC5vbkNoYW5nZVJlbGF0ZWQoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGZvcm11bGEgb2YgdGhpcy5mb3JtdWxhcyApIHtcblx0XHRcdGNvbnN0IHJlc3VsdENhbGxiYWNrID0gZm9ybXVsYS5zZXRSZXN1bHQuYmluZCggZm9ybXVsYSApO1xuXG5cdFx0XHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRcdFx0cmVzdWx0Q2FsbGJhY2soKTtcblx0XHRcdFx0dGhpcy5hcHBseVZhbHVlKCBmYWxzZSwgdHJ1ZSApO1xuXHRcdFx0fTtcblx0XHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdFx0fVxuXHR9LFxuXHRvYnNlcnZlU2V0VmFsdWUoIGNvbmRpdGlvbnMsIGlucHV0ICkge1xuXHRcdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIGlucHV0ICk7XG5cblx0XHRmb3JtdWxhLm9ic2VydmUoIHRoaXMudG9fc2V0ICk7XG5cdFx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnRvX3NldCA9ICcnICsgZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHR9O1xuXHRcdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cblx0XHR0aGlzLmZvcm11bGFzLnB1c2goIGZvcm11bGEgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBsaXN0ICAgICAgICB7Q29uZGl0aW9uc0xpc3R8Ym9vbGVhbn1cblx0ICogQHBhcmFtIGZvcmNlUmVzdWx0IHtib29sZWFufG51bGx9XG5cdCAqL1xuXHRhcHBseVZhbHVlKCBsaXN0LCBmb3JjZVJlc3VsdCA9IG51bGwgKSB7XG5cdFx0bGV0IHJlc3VsdCA9IGZhbHNlO1xuXG5cdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0cmVzdWx0ID0gbGlzdC5nZXRSZXN1bHQoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBmb3JjZVJlc3VsdDtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKCB0aGlzLmZyZXF1ZW5jeSApIHtcblx0XHRcdGNhc2UgJ2Fsd2F5cyc6XG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoIHJlc3VsdCApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29uX2NoYW5nZSc6XG5cdFx0XHRcdGlmICggdGhpcy5wcmV2UmVzdWx0ID09PSByZXN1bHQgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wcmV2UmVzdWx0ID0gcmVzdWx0O1xuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCByZXN1bHQgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvbmNlJzpcblx0XHRcdFx0aWYgKCAhcmVzdWx0ICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblxuXHRcdFx0XHRpZiAoIGxpc3QgKSB7XG5cdFx0XHRcdFx0bGlzdC5vbkNoYW5nZVJlbGF0ZWQgPSAoKSA9PiB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuZm9ybXVsYXMuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50LmNsZWFyV2F0Y2hlcnMoKSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblx0c2V0VmFsdWUoIHJlc3VsdCA9IHRydWUgKSB7XG5cdFx0aWYgKCAhcmVzdWx0ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMuc2V0X29uX2VtcHR5ICkge1xuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZS5zZXRJZkVtcHR5KCB0aGlzLnRvX3NldCApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IHRoaXMudG9fc2V0O1xuXHRcdH1cblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhbHVlSXRlbTsiLCJpbXBvcnQgVmFsdWVJdGVtIGZyb20gJy4vVmFsdWVJdGVtJztcbmltcG9ydCBNdWx0aXBsZVZhbHVlSXRlbSBmcm9tICcuL011bHRpcGxlVmFsdWVJdGVtJztcbmltcG9ydCBSZWFjdGl2ZVZhbHVlIGZyb20gJy4vUmVhY3RpdmVWYWx1ZSc7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRWYWx1ZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuZHluYW1pYy52YWx1ZS50eXBlcycsXG5cdFtcblx0XHRNdWx0aXBsZVZhbHVlSXRlbSxcblx0XHRWYWx1ZUl0ZW0sXG5cdF0sXG4pO1xuLyoqXG4gKiBAdHlwZSB7VmFsdWVJdGVtW119XG4gKi9cbmxldCB2YWx1ZXMgICAgICA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRcbiAqIEByZXR1cm4ge1ZhbHVlSXRlbX1cbiAqL1xuY29uc3QgZ2V0VmFsdWUgPSAoIGlucHV0ICkgPT4ge1xuXHRpZiAoICF2YWx1ZXMubGVuZ3RoICkge1xuXHRcdHZhbHVlcyA9IGdldFZhbHVlcygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgdmFsdWUgb2YgdmFsdWVzICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgdmFsdWUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlcygganNvbiwgaW5wdXQgKSB7XG5cdGNvbnN0IGdyb3VwcyA9IEpTT04ucGFyc2UoIGpzb24gKTtcdFxuXG5cdGZvciAoIGNvbnN0IGdyb3VwIG9mIGdyb3VwcyApIHtcblx0XHRjb25zdCB2YWx1ZSA9IGdldFZhbHVlKCBpbnB1dCApO1xuXG5cdFx0dmFsdWUub2JzZXJ2ZSggZ3JvdXAsIGlucHV0ICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VJbnB1dCggaW5wdXQgKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cdGNvbnN0IHdyYXBwZXIgID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xuXG5cdGlmICggd3JhcHBlciAmJiB3cmFwcGVyLmRhdGFzZXQuaGFzT3duUHJvcGVydHkoICd2YWx1ZScgKSApIHtcblx0XHRjcmVhdGVWYWx1ZXMoIHdyYXBwZXIuZGF0YXNldC52YWx1ZSwgaW5wdXQgKTtcblx0fVxuXHQvLyBmb3IgaGlkZGVuLWZpZWxkIGNhc2Vcblx0ZWxzZSBpZiAoIG5vZGUuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSggJ2R5bmFtaWNWYWx1ZScgKSApIHtcblx0XHRjcmVhdGVWYWx1ZXMoIG5vZGUuZGF0YXNldC5keW5hbWljVmFsdWUsIGlucHV0ICk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBwcm9wZXJ0eSBvZiBnZXRQcm9wZXJ0aWVzKCBpbnB1dCApICkge1xuXHRcdHByb3BlcnR5LnJ1bk9ic2VydmUoIGlucHV0ICk7XG5cdH1cblxufVxuXG5pbXBvcnQgQmFzZVJlYWN0aXZlUHJvcGVydHkgZnJvbSAnLi9CYXNlUmVhY3RpdmVQcm9wZXJ0eSc7XG5cbi8qKlxuICogQHR5cGUge0Jhc2VSZWFjdGl2ZVByb3BlcnR5W119XG4gKi9cbmNvbnN0IHJlYWN0UHJvcGVydGllcyA9IFtcblx0bmV3IEJhc2VSZWFjdGl2ZVByb3BlcnR5KCAnbWluJyApLFxuXHRuZXcgQmFzZVJlYWN0aXZlUHJvcGVydHkoICdtYXgnICksXG5cdG5ldyBSZWFjdGl2ZVZhbHVlKCksXG5dO1xuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cbiAqIEByZXR1cm4ge0dlbmVyYXRvcjxCYXNlUmVhY3RpdmVQcm9wZXJ0eT59XG4gKi9cbmZ1bmN0aW9uKiBnZXRQcm9wZXJ0aWVzKCBpbnB1dCApIHtcblx0Zm9yICggY29uc3QgcmVhY3RQcm9wZXJ0eSBvZiByZWFjdFByb3BlcnRpZXMgKSB7XG5cdFx0aWYgKFxuXHRcdFx0cmVhY3RQcm9wZXJ0eS5pc1N1cHBvcnRlZCggaW5wdXQgKVxuXHRcdCkge1xuXHRcdFx0eWllbGQgcmVhY3RQcm9wZXJ0eTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgeyBwYXJzZUlucHV0LCBnZXRQcm9wZXJ0aWVzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYXJzZUlucHV0IH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHQnamV0LWZvcm0tYnVpbGRlci9keW5hbWljLXZhbHVlJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHRcdGZvciAoIGNvbnN0IGRhdGFJbnB1dCBvZiBvYnNlcnZhYmxlLmdldElucHV0cygpICkge1xuXHRcdFx0cGFyc2VJbnB1dCggZGF0YUlucHV0ICk7XG5cdFx0fVxuXHR9XG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9