/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/ObservableRow.js":
/*!***********************************!*\
  !*** ./frontend/ObservableRow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  Observable,
  CalculatedFormula
} = JetFormBuilderAbstract;
function ObservableRow(parent) {
  Observable.call(this, parent);

  // By default we return the number of repeater rows
  this.calc = 1;
  this.initedCalc = false;
}
ObservableRow.prototype = Object.create(Observable.prototype);
ObservableRow.prototype.calc = 1;
ObservableRow.prototype.initedCalc = false;
ObservableRow.prototype.reObserve = function (root) {
  this.isObserved = false;
  const prevValues = {
    ...this.value.current
  };
  this.dataInputs = {};
  Observable.prototype.observe.call(this, root);
  this.value.current = prevValues;
};
ObservableRow.prototype.observe = function (root) {
  Observable.prototype.observe.call(this, root);
  this.parent.lastObserved.current = this;
};
ObservableRow.prototype.removeManually = function () {
  this.remove();
  this.parent.remove(this);
  this.rootNode.remove();
};
ObservableRow.prototype.initCalc = function () {
  if (this.initedCalc) {
    return;
  }
  this.initedCalc = true;
  const [node] = this.parent.nodes;
  const formulaString = node.dataset?.formula;
  if (!formulaString || 'default' === this.parent.calcType) {
    return;
  }
  const formula = new CalculatedFormula(this);
  formula.observe(formulaString);
  formula.setResult = () => {
    this.calc = formula.calculate();
    this.parent.value.notify();
  };
  formula.relatedCallback = function (input) {
    return input.calcValue;
  };
  formula.emptyValue = function () {
    return 0;
  };
  this.calc = formula.calculate();
  this.parent.silenceNotify();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObservableRow);

/***/ }),

/***/ "./frontend/functions.js":
/*!*******************************!*\
  !*** ./frontend/functions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRepeater: () => (/* binding */ isRepeater)
/* harmony export */ });
/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isRepeater(node) {
  return 1 === +node.dataset.repeater;
}


/***/ }),

/***/ "./frontend/input.js":
/*!***************************!*\
  !*** ./frontend/input.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/functions.js");
/* harmony import */ var _ObservableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObservableRow */ "./frontend/ObservableRow.js");


const {
  InputData,
  ReactiveVar
} = JetFormBuilderAbstract;

// eslint-disable-next-line max-lines-per-function
function RepeaterData() {
  InputData.call(this);
  this.buttonNode = false;
  this.template = null;
  this.container = null;
  this.lastObserved = new ReactiveVar();
  this.lastObserved.make();
  this.addEventAttached = false;
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isRepeater)(node);
  };
  this.addListeners = function () {
    // disable aria attributes
    this.reporting.makeInvalid = () => {};
    this.reporting.makeValid = () => {};
  };
  this.hasAutoScroll = function () {
    return false;
  };
  this.setValue = function () {
    const [node] = this.nodes;
    this.value.current = [];
    for (const row of node.querySelectorAll('.jet-form-builder-repeater__row')) {
      const current = new _ObservableRow__WEBPACK_IMPORTED_MODULE_1__["default"](this);
      current.rootNode = row;
      this.value.current.push(current);
    }
    for (const currentElement of this.value.current) {
      currentElement.observe();
    }
    for (const currentElement of this.value.current) {
      currentElement.initCalc();
    }
    const removeButtons = this.container.querySelectorAll('.jet-form-builder-repeater__remove');
    for (const button of removeButtons) {
      const row = this.closestRow(button);
      if (!row) {
        continue;
      }
      button.addEventListener('click', () => row.removeManually());
    }
    if (this.isManualCount) {
      if (!this.addEventAttached) {
        this.buttonNode.addEventListener('click', () => this.addNew());
        this.addEventAttached = true;
      }
      return;
    }
    const input = this.root.getInput(this.itemsField);
    if (!input) {
      // eslint-disable-next-line no-console
      console.error(`JetFormBuilder error: undefined input by name [${this.itemsField}]`);
      return;
    }
    input.watch(() => this.recalculateItems(input));
    this.recalculateItems(input);
  };
  this.setNode = function (node) {
    InputData.prototype.setNode.call(this, node);
    this.nodes = [node];
    this.name = node.dataset.fieldName;
    this.rawName = this.name;
    this.inputType = 'repeater';
    this.manageItems = node.dataset?.manageItems || 'manually';
    this.calcType = node.dataset?.calcType || 'default';
    this.itemsField = node.dataset?.itemsField;
    this.isManualCount = !this.itemsField || 'manually' === this.manageItems;

    // can be null
    this.buttonNode = node.querySelector('.jet-form-builder-repeater__new');
    this.template = node.querySelector('.jet-form-builder-repeater__initial');
    this.container = node.querySelector('.jet-form-builder-repeater__items');
  };
  this.onClear = function () {
    this.value.current = [];
  };
  this.populateInner = function () {
    if (!this.value.current?.length) {
      return false;
    }
    const inputs = [];
    /**
     * @type {ObservableRow[]}
     */
    const rows = this.value.current;
    for (const row of rows) {
      for (const input of row.getInputs()) {
        // eslint-disable-next-line max-depth
        if (!input.reporting?.restrictions?.length) {
          continue;
        }
        inputs.push(input);
      }
    }
    return inputs;
  };
  this.onRemove = function () {
    /**
     * @type {ObservableRow[]}
     */
    const rows = this.value.current;
    for (const row of rows) {
      row.remove();
    }
  };
  this.reQueryValue = function () {
    if (!this.value.current?.length) {
      return;
    }

    /**
     * @type {ObservableRow[]}
     */
    const repeaterRows = this.value.current;
    repeaterRows.forEach(row => {
      row.getInputs().forEach(input => {
        input.setValue();
        input.initNotifyValue();
      });
    });
  };
}
RepeaterData.prototype = Object.create(InputData.prototype);
RepeaterData.prototype.buttonNode = null;
RepeaterData.prototype.template = null;
RepeaterData.prototype.container = null;
RepeaterData.prototype.itemsField = false;
/**
 * @type {ReactiveVar}
 */
RepeaterData.prototype.lastObserved = null;
RepeaterData.prototype.addNew = function (count = 1) {
  var _this$value$current;
  this.value.current = [...((_this$value$current = this.value?.current) !== null && _this$value$current !== void 0 ? _this$value$current : []), ...new Array(count).fill(null).map(() => new _ObservableRow__WEBPACK_IMPORTED_MODULE_1__["default"](this))];
};
RepeaterData.prototype.findIndex = function (observableRow) {
  if (!Array.isArray(this.value.current)) {
    return -1;
  }
  return this.value.current.findIndex(current => current === observableRow);
};

/**
 * @param  node {Element}
 * @return {boolean|ObservableRow}
 */
RepeaterData.prototype.closestRow = function (node) {
  const rowNode = node.closest('.jet-form-builder-repeater__row');
  if (!rowNode) {
    return false;
  }

  /**
   * @type {ObservableRow[]}
   */
  const rows = this.value.current;
  for (const row of rows) {
    if (row.rootNode === rowNode) {
      return row;
    }
  }
  return false;
};
RepeaterData.prototype.remove = function (observableRow) {
  this.value.current = this.value.current.filter(current => current !== observableRow);
};
RepeaterData.prototype.recalculateItems = function (input) {
  var _this$value$current$l;
  const currentCount = (_this$value$current$l = this.value.current?.length) !== null && _this$value$current$l !== void 0 ? _this$value$current$l : 0;

  // if it < 0 ==> we should add {diff} new repeater items
  // if it > 0 ==> we should remove last {diff} items
  const diff = currentCount - input.calcValue;
  if (0 === diff) {
    return;
  }
  if (diff < 0) {
    this.addNew(-1 * diff);
    return;
  }
  this.value.current = this.value.current.slice(0, -1 * diff);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterData);

/***/ }),

/***/ "./frontend/restrictions/RepeaterRestriction.js":
/*!******************************************************!*\
  !*** ./frontend/restrictions/RepeaterRestriction.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./frontend/functions.js");

let {
  AdvancedRestriction,
  Restriction
} = JetFormBuilderAbstract;
AdvancedRestriction = AdvancedRestriction || Restriction;
function RepeaterRestriction() {
  AdvancedRestriction.call(this);
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isRepeater)(node);
  };
  this.validate = function () {
    return true;
  };
  this.getRawMessage = function () {
    return '';
  };
}
RepeaterRestriction.prototype = Object.create(AdvancedRestriction.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeaterRestriction);

/***/ }),

/***/ "./frontend/signal.js":
/*!****************************!*\
  !*** ./frontend/signal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/functions.js");

const {
  BaseSignal
} = window.JetFormBuilderAbstract;

/**
 * @property {RepeaterData} input Related input
 */
// eslint-disable-next-line max-lines-per-function
function SignalRepeater() {
  BaseSignal.call(this);
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isRepeater)(node);
  };
  this.runSignal = function (prevValue = []) {
    const {
      current
    } = this.input.value;
    const hasDeletedItems = prevValue?.length && prevValue.length > current.length;
    if (hasDeletedItems) {
      this.removePrevItems(prevValue);
    }
    for (const index of Object.keys(current)) {
      if (!current.hasOwnProperty(index)) {
        continue;
      }
      this.runItem(+index, hasDeletedItems);
    }
    let calcValue = 0;
    for (const row of Object.values(current)) {
      row.initCalc();
      calcValue += row.calc;
    }
    this.input.calcValue = calcValue;
  };
  /**
   * @param currentIndex    {Number}
   * @param shouldReObserve
   */
  this.runItem = function (currentIndex, shouldReObserve = false) {
    /**
     * @type {ObservableRow}
     */
    const observable = this.input.value.current[currentIndex];
    if (observable.isObserved) {
      if (!shouldReObserve) {
        return;
      }
      observable.rootNode.remove();
    }
    const template = document.createElement('template');
    template.innerHTML = this.input.template.innerHTML.trim();
    template.innerHTML = template.innerHTML.replace(/__i__/g, currentIndex);
    template.content.firstChild.dataset.index = '' + currentIndex;
    this.input.container.append(template.content.firstChild);
    const appended = this.input.container.lastChild;
    if (this.input.isManualCount) {
      appended.querySelector('.jet-form-builder-repeater__remove').addEventListener('click', () => observable.removeManually());
    }
    if (observable.isObserved) {
      observable.reObserve(appended);
      return;
    }
    observable.observe(appended);
  };
  this.removePrevItems = function (prevRows) {
    /**
     * @type {ObservableRow[]}
     */
    const current = this.input.value.current;
    for (const prevRow of prevRows) {
      if (!current.includes(prevRow)) {
        prevRow.removeManually();
      }
    }
  };
}
SignalRepeater.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalRepeater);

/***/ }),

/***/ "./frontend/index.pcss":
/*!*****************************!*\
  !*** ./frontend/index.pcss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/signal.js");
/* harmony import */ var _restrictions_RepeaterRestriction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restrictions/RepeaterRestriction */ "./frontend/restrictions/RepeaterRestriction.js");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pcss */ "./frontend/index.pcss");




const {
  addFilter,
  addAction
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/repeater-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/repeater-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
const addRestriction = restrictions => {
  restrictions.push(_restrictions_RepeaterRestriction__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return restrictions;
};
addFilter('jet.fb.restrictions.default', 'jet-form-builder/repeater-field', addRestriction);
addFilter('jet.fb.restrictions', 'jet-form-builder/repeater-field', addRestriction);
addAction('jet.fb.multistep.page.observed.input', 'jet-form-builder/repeater-field',
/**
 * @param input     {InputData|RepeaterData}
 * @param pageState {PageState}
 */
function (input, pageState) {
  if ('repeater' !== input.inputType) {
    return;
  }

  /**
   * @type {ObservableRow[]}
   */
  const current = input.value.current || [];
  input.watch(() => pageState.updateState());

  /**
   * @param currentInput {InputData}
   */
  function observeInnerInput(currentInput) {
    pageState.handleInputEnter(currentInput);
    if (!currentInput.reporting?.restrictions?.length) {
      return;
    }
    currentInput.watchValidity(() => pageState.updateState());
  }
  for (const observableRow of current) {
    observableRow.getInputs().forEach(observeInnerInput);
  }
  input.lastObserved.watch(() => {
    input.lastObserved.current.getInputs().forEach(observeInnerInput);
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7O0FDMUdBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFNQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9PYnNlcnZhYmxlUm93LmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXgucGNzcz81NTQ5Iiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcblx0ICAgICAgT2JzZXJ2YWJsZSxcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gT2JzZXJ2YWJsZVJvdyggcGFyZW50ICkge1xuXHRPYnNlcnZhYmxlLmNhbGwoIHRoaXMsIHBhcmVudCApO1xuXG5cdC8vIEJ5IGRlZmF1bHQgd2UgcmV0dXJuIHRoZSBudW1iZXIgb2YgcmVwZWF0ZXIgcm93c1xuXHR0aGlzLmNhbGMgICAgICAgPSAxO1xuXHR0aGlzLmluaXRlZENhbGMgPSBmYWxzZTtcbn1cblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoIE9ic2VydmFibGUucHJvdG90eXBlICk7XG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5jYWxjICAgICAgID0gMTtcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmluaXRlZENhbGMgPSBmYWxzZTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVPYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcblxuXHRjb25zdCBwcmV2VmFsdWVzID0geyAuLi50aGlzLnZhbHVlLmN1cnJlbnQgfTtcblx0dGhpcy5kYXRhSW5wdXRzICA9IHt9O1xuXHRPYnNlcnZhYmxlLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMsIHJvb3QgKTtcblxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBwcmV2VmFsdWVzO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICggcm9vdCApIHtcblx0T2JzZXJ2YWJsZS5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzLCByb290ICk7XG5cblx0dGhpcy5wYXJlbnQubGFzdE9ic2VydmVkLmN1cnJlbnQgPSB0aGlzO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVtb3ZlTWFudWFsbHkgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMucmVtb3ZlKCk7XG5cblx0dGhpcy5wYXJlbnQucmVtb3ZlKCB0aGlzICk7XG5cdHRoaXMucm9vdE5vZGUucmVtb3ZlKCk7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5pbml0Q2FsYyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLmluaXRlZENhbGMgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5pbml0ZWRDYWxjICAgICA9IHRydWU7XG5cdGNvbnN0IFsgbm9kZSBdICAgICAgPSB0aGlzLnBhcmVudC5ub2Rlcztcblx0Y29uc3QgZm9ybXVsYVN0cmluZyA9IG5vZGUuZGF0YXNldD8uZm9ybXVsYTtcblxuXHRpZiAoICFmb3JtdWxhU3RyaW5nIHx8ICdkZWZhdWx0JyA9PT0gdGhpcy5wYXJlbnQuY2FsY1R5cGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcyApO1xuXG5cdGZvcm11bGEub2JzZXJ2ZSggZm9ybXVsYVN0cmluZyApO1xuXHRmb3JtdWxhLnNldFJlc3VsdCAgICAgICA9ICgpID0+IHtcblx0XHR0aGlzLmNhbGMgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHRcdHRoaXMucGFyZW50LnZhbHVlLm5vdGlmeSgpO1xuXHR9O1xuXHRmb3JtdWxhLnJlbGF0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0cmV0dXJuIGlucHV0LmNhbGNWYWx1ZTtcblx0fTtcblx0Zm9ybXVsYS5lbXB0eVZhbHVlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cblx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0dGhpcy5wYXJlbnQuc2lsZW5jZU5vdGlmeSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZVJvdzsiLCIvKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1JlcGVhdGVyKCBub2RlICkge1xuXHRyZXR1cm4gMSA9PT0gK25vZGUuZGF0YXNldC5yZXBlYXRlcjtcbn1cblxuZXhwb3J0IHsgaXNSZXBlYXRlciB9OyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgT2JzZXJ2YWJsZVJvdyBmcm9tICcuL09ic2VydmFibGVSb3cnO1xuXG5jb25zdCB7XG5cdCAgICAgIElucHV0RGF0YSxcblx0ICAgICAgUmVhY3RpdmVWYXIsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFJlcGVhdGVyRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmJ1dHRvbk5vZGUgICA9IGZhbHNlO1xuXHR0aGlzLnRlbXBsYXRlICAgICA9IG51bGw7XG5cdHRoaXMuY29udGFpbmVyICAgID0gbnVsbDtcblx0dGhpcy5sYXN0T2JzZXJ2ZWQgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0dGhpcy5sYXN0T2JzZXJ2ZWQubWFrZSgpO1xuXG5cdHRoaXMuYWRkRXZlbnRBdHRhY2hlZCA9IGZhbHNlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIGRpc2FibGUgYXJpYSBhdHRyaWJ1dGVzXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZUludmFsaWQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlVmFsaWQgICA9ICgpID0+IHt9O1xuXHR9O1xuXG5cdHRoaXMuaGFzQXV0b1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSAgICAgPSB0aGlzLm5vZGVzO1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIG5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93Jyxcblx0XHQpICkge1xuXHRcdFx0Y29uc3QgY3VycmVudCAgICA9IG5ldyBPYnNlcnZhYmxlUm93KCB0aGlzICk7XG5cdFx0XHRjdXJyZW50LnJvb3ROb2RlID0gcm93O1xuXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQucHVzaCggY3VycmVudCApO1xuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCApIHtcblx0XHRcdGN1cnJlbnRFbGVtZW50Lm9ic2VydmUoKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBjdXJyZW50RWxlbWVudCBvZiB0aGlzLnZhbHVlLmN1cnJlbnQgKSB7XG5cdFx0XHRjdXJyZW50RWxlbWVudC5pbml0Q2FsYygpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnLFxuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBidXR0b24gb2YgcmVtb3ZlQnV0dG9ucyApIHtcblx0XHRcdGNvbnN0IHJvdyA9IHRoaXMuY2xvc2VzdFJvdyggYnV0dG9uICk7XG5cblx0XHRcdGlmICggIXJvdyApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiByb3cucmVtb3ZlTWFudWFsbHkoKSApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5pc01hbnVhbENvdW50ICkge1xuXHRcdFx0aWYgKCAhIHRoaXMuYWRkRXZlbnRBdHRhY2hlZCApIHtcblx0XHRcdFx0dGhpcy5idXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMuYWRkTmV3KCkgKTtcblx0XHRcdFx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5yb290LmdldElucHV0KCB0aGlzLml0ZW1zRmllbGQgKTtcblxuXHRcdGlmICggIWlucHV0ICkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdGBKZXRGb3JtQnVpbGRlciBlcnJvcjogdW5kZWZpbmVkIGlucHV0IGJ5IG5hbWUgWyR7IHRoaXMuaXRlbXNGaWVsZCB9XWAsXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW5wdXQud2F0Y2goICgpID0+IHRoaXMucmVjYWxjdWxhdGVJdGVtcyggaW5wdXQgKSApO1xuXHRcdHRoaXMucmVjYWxjdWxhdGVJdGVtcyggaW5wdXQgKTtcblx0fTtcblx0dGhpcy5zZXROb2RlICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5ub2RlcyAgICAgPSBbIG5vZGUgXTtcblx0XHR0aGlzLm5hbWUgICAgICA9IG5vZGUuZGF0YXNldC5maWVsZE5hbWU7XG5cdFx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5hbWU7XG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAncmVwZWF0ZXInO1xuXG5cdFx0dGhpcy5tYW5hZ2VJdGVtcyA9IG5vZGUuZGF0YXNldD8ubWFuYWdlSXRlbXMgfHwgJ21hbnVhbGx5Jztcblx0XHR0aGlzLmNhbGNUeXBlICAgID0gbm9kZS5kYXRhc2V0Py5jYWxjVHlwZSB8fCAnZGVmYXVsdCc7XG5cdFx0dGhpcy5pdGVtc0ZpZWxkICA9IG5vZGUuZGF0YXNldD8uaXRlbXNGaWVsZDtcblxuXHRcdHRoaXMuaXNNYW51YWxDb3VudCA9IChcblx0XHRcdCF0aGlzLml0ZW1zRmllbGQgfHwgJ21hbnVhbGx5JyA9PT0gdGhpcy5tYW5hZ2VJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBjYW4gYmUgbnVsbFxuXHRcdHRoaXMuYnV0dG9uTm9kZSA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fbmV3Jyxcblx0XHQpO1xuXHRcdHRoaXMudGVtcGxhdGUgICA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faW5pdGlhbCcsXG5cdFx0KTtcblx0XHR0aGlzLmNvbnRhaW5lciAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcblx0fTtcblxuXHR0aGlzLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXRzID0gW107XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCByb3dzICAgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcblx0XHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHJvdy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRpZiAoICFpbnB1dC5yZXBvcnRpbmc/LnJlc3RyaWN0aW9ucz8ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlucHV0cy5wdXNoKCBpbnB1dCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH07XG5cblx0dGhpcy5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcblx0XHRcdHJvdy5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCByZXBlYXRlclJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnRcblxuXHRcdHJlcGVhdGVyUm93cy5mb3JFYWNoKCByb3cgPT4ge1xuXHRcdFx0cm93LmdldElucHV0cygpLmZvckVhY2goIGlucHV0ID0+IHtcblx0XHRcdFx0aW5wdXQuc2V0VmFsdWUoKTtcblx0XHRcdFx0aW5wdXQuaW5pdE5vdGlmeVZhbHVlKCk7XG5cdFx0XHR9ICk7XG5cdFx0fSApXG5cdH1cbn1cblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5idXR0b25Ob2RlID0gbnVsbDtcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgICA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNvbnRhaW5lciAgPSBudWxsO1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5pdGVtc0ZpZWxkID0gZmFsc2U7XG4vKipcbiAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cbiAqL1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5sYXN0T2JzZXJ2ZWQgPSBudWxsO1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmFkZE5ldyA9IGZ1bmN0aW9uICggY291bnQgPSAxICkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXG5cdFx0Li4udGhpcy52YWx1ZT8uY3VycmVudCA/PyBbXSxcblx0XHQuLi4oXG5cdFx0XHRuZXcgQXJyYXkoIGNvdW50IClcblx0XHQpLmZpbGwoIG51bGwgKS5tYXAoXG5cdFx0XHQoKSA9PiBuZXcgT2JzZXJ2YWJsZVJvdyggdGhpcyApLFxuXHRcdCksXG5cdF07XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZVJvdyApIHtcblx0aWYgKCAhQXJyYXkuaXNBcnJheSggdGhpcy52YWx1ZS5jdXJyZW50ICkgKSB7XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdHJldHVybiB0aGlzLnZhbHVlLmN1cnJlbnQuZmluZEluZGV4KFxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCA9PT0gb2JzZXJ2YWJsZVJvdyxcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbnxPYnNlcnZhYmxlUm93fVxuICovXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNsb3Nlc3RSb3cgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdGNvbnN0IHJvd05vZGUgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApO1xuXG5cdGlmICggIXJvd05vZGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdCAqL1xuXHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdGZvciAoIGNvbnN0IHJvdyBvZiByb3dzICkge1xuXHRcdGlmICggcm93LnJvb3ROb2RlID09PSByb3dOb2RlICkge1xuXHRcdFx0cmV0dXJuIHJvdztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZVJvdyApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LmZpbHRlcihcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgIT09IG9ic2VydmFibGVSb3csXG5cdCk7XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnJlY2FsY3VsYXRlSXRlbXMgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xuXG5cdC8vIGlmIGl0IDwgMCA9PT4gd2Ugc2hvdWxkIGFkZCB7ZGlmZn0gbmV3IHJlcGVhdGVyIGl0ZW1zXG5cdC8vIGlmIGl0ID4gMCA9PT4gd2Ugc2hvdWxkIHJlbW92ZSBsYXN0IHtkaWZmfSBpdGVtc1xuXHRjb25zdCBkaWZmID0gY3VycmVudENvdW50IC0gaW5wdXQuY2FsY1ZhbHVlO1xuXG5cdGlmICggMCA9PT0gZGlmZiApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIGRpZmYgPCAwICkge1xuXHRcdHRoaXMuYWRkTmV3KCAtMSAqIGRpZmYgKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuY3VycmVudC5zbGljZSggMCwgLTEgKiBkaWZmICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckRhdGE7XG4iLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxubGV0IHtcblx0ICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXG5cdCAgICBSZXN0cmljdGlvbixcbiAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuQWR2YW5jZWRSZXN0cmljdGlvbiA9IEFkdmFuY2VkUmVzdHJpY3Rpb24gfHwgUmVzdHJpY3Rpb247XG5cbmZ1bmN0aW9uIFJlcGVhdGVyUmVzdHJpY3Rpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH07XG59XG5cblJlcGVhdGVyUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZXBlYXRlckRhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFNpZ25hbFJlcGVhdGVyKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XG5cdH07XG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSA9IFtdICkge1xuXHRcdGNvbnN0IHsgY3VycmVudCB9ICAgICA9IHRoaXMuaW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgaGFzRGVsZXRlZEl0ZW1zID0gKFxuXHRcdFx0cHJldlZhbHVlPy5sZW5ndGggJiYgcHJldlZhbHVlLmxlbmd0aCA+IGN1cnJlbnQubGVuZ3RoXG5cdFx0KTtcblxuXHRcdGlmICggaGFzRGVsZXRlZEl0ZW1zICkge1xuXHRcdFx0dGhpcy5yZW1vdmVQcmV2SXRlbXMoIHByZXZWYWx1ZSApO1xuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGluZGV4IG9mIE9iamVjdC5rZXlzKCBjdXJyZW50ICkgKSB7XG5cdFx0XHRpZiAoICFjdXJyZW50Lmhhc093blByb3BlcnR5KCBpbmRleCApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSXRlbSggK2luZGV4LCBoYXNEZWxldGVkSXRlbXMgKTtcblx0XHR9XG5cblx0XHRsZXQgY2FsY1ZhbHVlID0gMDtcblxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKCBjdXJyZW50ICkgKSB7XG5cdFx0XHRyb3cuaW5pdENhbGMoKTtcblx0XHRcdGNhbGNWYWx1ZSArPSByb3cuY2FsYztcblx0XHR9XG5cblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGNhbGNWYWx1ZTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSBjdXJyZW50SW5kZXggICAge051bWJlcn1cblx0ICogQHBhcmFtIHNob3VsZFJlT2JzZXJ2ZVxuXHQgKi9cblx0dGhpcy5ydW5JdGVtID0gZnVuY3Rpb24gKCBjdXJyZW50SW5kZXgsIHNob3VsZFJlT2JzZXJ2ZSA9IGZhbHNlICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93fVxuXHRcdCAqL1xuXHRcdGNvbnN0IG9ic2VydmFibGUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnRbIGN1cnJlbnRJbmRleCBdO1xuXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRpZiAoICFzaG91bGRSZU9ic2VydmUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0b2JzZXJ2YWJsZS5yb290Tm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5pbnB1dC50ZW1wbGF0ZS5pbm5lckhUTUwudHJpbSgpO1xuXG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MLnJlcGxhY2UoXG5cdFx0XHQvX19pX18vZyxcblx0XHRcdGN1cnJlbnRJbmRleCxcblx0XHQpO1xuXG5cdFx0dGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLmRhdGFzZXQuaW5kZXggPSAnJyArIGN1cnJlbnRJbmRleDtcblx0XHR0aGlzLmlucHV0LmNvbnRhaW5lci5hcHBlbmQoIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZCApO1xuXG5cdFx0Y29uc3QgYXBwZW5kZWQgPSB0aGlzLmlucHV0LmNvbnRhaW5lci5sYXN0Q2hpbGQ7XG5cblx0XHRpZiAoIHRoaXMuaW5wdXQuaXNNYW51YWxDb3VudCApIHtcblx0XHRcdGFwcGVuZGVkLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyxcblx0XHRcdCkuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2YWJsZS5yZW1vdmVNYW51YWxseSgpLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcblx0XHRcdG9ic2VydmFibGUucmVPYnNlcnZlKCBhcHBlbmRlZCApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdG9ic2VydmFibGUub2JzZXJ2ZSggYXBwZW5kZWQgKTtcblx0fTtcblxuXHR0aGlzLnJlbW92ZVByZXZJdGVtcyA9IGZ1bmN0aW9uICggcHJldlJvd3MgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yICggY29uc3QgcHJldlJvdyBvZiBwcmV2Um93cyApIHtcblx0XHRcdGlmICggIWN1cnJlbnQuaW5jbHVkZXMoIHByZXZSb3cgKSApIHtcblx0XHRcdFx0cHJldlJvdy5yZW1vdmVNYW51YWxseSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuU2lnbmFsUmVwZWF0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVwZWF0ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmVwZWF0ZXJEYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbFJlcGVhdGVyIGZyb20gJy4vc2lnbmFsJztcbmltcG9ydCBSZXBlYXRlclJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlcGVhdGVyUmVzdHJpY3Rpb24nO1xuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcblx0ICAgICAgYWRkQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgUmVwZWF0ZXJEYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbFJlcGVhdGVyLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7XG5cbmNvbnN0IGFkZFJlc3RyaWN0aW9uID0gKCByZXN0cmljdGlvbnMgKSA9PiB7XG5cdHJlc3RyaWN0aW9ucy5wdXNoKFxuXHRcdFJlcGVhdGVyUmVzdHJpY3Rpb24sXG5cdCk7XG5cblx0cmV0dXJuIHJlc3RyaWN0aW9ucztcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0YWRkUmVzdHJpY3Rpb24sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRhZGRSZXN0cmljdGlvbixcbik7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5tdWx0aXN0ZXAucGFnZS5vYnNlcnZlZC5pbnB1dCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YXxSZXBlYXRlckRhdGF9XG5cdCAqIEBwYXJhbSBwYWdlU3RhdGUge1BhZ2VTdGF0ZX1cblx0ICovXG5cdGZ1bmN0aW9uICggaW5wdXQsIHBhZ2VTdGF0ZSApIHtcblx0XHRpZiAoICdyZXBlYXRlcicgIT09IGlucHV0LmlucHV0VHlwZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBpbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdO1xuXG5cdFx0aW5wdXQud2F0Y2goICgpID0+IHBhZ2VTdGF0ZS51cGRhdGVTdGF0ZSgpICk7XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0gY3VycmVudElucHV0IHtJbnB1dERhdGF9XG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gb2JzZXJ2ZUlubmVySW5wdXQoIGN1cnJlbnRJbnB1dCApIHtcblx0XHRcdHBhZ2VTdGF0ZS5oYW5kbGVJbnB1dEVudGVyKCBjdXJyZW50SW5wdXQgKTtcblxuXHRcdFx0aWYgKCAhY3VycmVudElucHV0LnJlcG9ydGluZz8ucmVzdHJpY3Rpb25zPy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudElucHV0LndhdGNoVmFsaWRpdHkoICgpID0+IHBhZ2VTdGF0ZS51cGRhdGVTdGF0ZSgpICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3Qgb2JzZXJ2YWJsZVJvdyBvZiBjdXJyZW50ICkge1xuXHRcdFx0b2JzZXJ2YWJsZVJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKCBvYnNlcnZlSW5uZXJJbnB1dCApO1xuXHRcdH1cblx0XHRpbnB1dC5sYXN0T2JzZXJ2ZWQud2F0Y2goICgpID0+IHtcblx0XHRcdGlucHV0Lmxhc3RPYnNlcnZlZC5jdXJyZW50LmdldElucHV0cygpLmZvckVhY2goIG9ic2VydmVJbm5lcklucHV0ICk7XG5cdFx0fSApO1xuXHR9LFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=