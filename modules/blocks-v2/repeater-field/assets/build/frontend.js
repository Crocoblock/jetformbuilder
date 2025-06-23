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
  const otherRows = this.parent.value.current.filter(row => row !== this);
  const otherValues = otherRows.map(row => ({
    node: row.rootNode,
    values: {
      ...row.value.current
    }
  }));
  this.remove();
  this.parent.remove(this);
  this.rootNode.remove();
  otherRows.forEach((row, index) => {
    if (otherValues[index]) {
      Object.assign(row.value.current, otherValues[index].values);
      const inputs = row.getInputs();
      inputs.forEach(input => {
        if (input.value.current !== undefined) {
          input.reQueryValue();
        }
      });
    }
  });
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

/***/ "./frontend/index.pcss":
/*!*****************************!*\
  !*** ./frontend/index.pcss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
      if (!this.addEventAttached && !this.buttonNode.hasListener) {
        this.buttonNode.addEventListener('click', () => this.addNew());
        this.addEventAttached = true;
        this.buttonNode.hasListener = true;
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

    /**
     * Reset input values for a new row
     *
     * @since 3.4.7
     */
    const newRow = template.content.firstElementChild;
    const inputs = newRow.querySelectorAll("input, select, textarea, output");
    inputs.forEach(input => {
      switch (input.type) {
        case "checkbox":
        case "radio":
          input.checked = false;
          break;
        case "select-one":
        case "select-multiple":
          input.selectedIndex = -1;
          break;
        case "file":
          input.value = "";
          break;
        case "range":
          input.value = input.defaultValue || "";
          break;
        default:
          input.value = "";
          break;
      }
    });
    template.content.firstChild.dataset.index = '' + currentIndex;
    this.input.container.append(newRow);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBTUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvT2JzZXJ2YWJsZVJvdy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIE9ic2VydmFibGUsXHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gT2JzZXJ2YWJsZVJvdyggcGFyZW50ICkge1xyXG5cdE9ic2VydmFibGUuY2FsbCggdGhpcywgcGFyZW50ICk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQgd2UgcmV0dXJuIHRoZSBudW1iZXIgb2YgcmVwZWF0ZXIgcm93c1xyXG5cdHRoaXMuY2FsYyAgICAgICA9IDE7XHJcblx0dGhpcy5pbml0ZWRDYWxjID0gZmFsc2U7XHJcbn1cclxuXHJcbk9ic2VydmFibGVSb3cucHJvdG90eXBlICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKCBPYnNlcnZhYmxlLnByb3RvdHlwZSApO1xyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5jYWxjICAgICAgID0gMTtcclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdGVkQ2FsYyA9IGZhbHNlO1xyXG5cclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVPYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xyXG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xyXG5cclxuXHRjb25zdCBwcmV2VmFsdWVzID0geyAuLi50aGlzLnZhbHVlLmN1cnJlbnQgfTtcclxuXHR0aGlzLmRhdGFJbnB1dHMgID0ge307XHJcblx0T2JzZXJ2YWJsZS5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzLCByb290ICk7XHJcblxyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHByZXZWYWx1ZXM7XHJcbn07XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xyXG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xyXG5cclxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XHJcbn07XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZW1vdmVNYW51YWxseSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBvdGhlclJvd3MgICA9IHRoaXMucGFyZW50LnZhbHVlLmN1cnJlbnQuZmlsdGVyKCByb3cgPT4gcm93ICE9PSB0aGlzICk7XHJcblx0Y29uc3Qgb3RoZXJWYWx1ZXMgPSBvdGhlclJvd3MubWFwKCByb3cgPT4gKCB7XHJcblx0XHRub2RlOiByb3cucm9vdE5vZGUsXHJcblx0XHR2YWx1ZXM6IHsgLi4ucm93LnZhbHVlLmN1cnJlbnQgfVxyXG5cdH0gKSApO1xyXG5cclxuXHR0aGlzLnJlbW92ZSgpO1xyXG5cclxuXHR0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcclxuXHR0aGlzLnJvb3ROb2RlLnJlbW92ZSgpO1xyXG5cclxuXHRvdGhlclJvd3MuZm9yRWFjaCggKCByb3csIGluZGV4ICkgPT4ge1xyXG5cdFx0aWYgKCBvdGhlclZhbHVlc1tpbmRleF0gKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24oIHJvdy52YWx1ZS5jdXJyZW50LCBvdGhlclZhbHVlc1tpbmRleF0udmFsdWVzICk7XHJcblxyXG5cdFx0XHRjb25zdCBpbnB1dHMgPSByb3cuZ2V0SW5wdXRzKCk7XHJcblx0XHRcdGlucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcblx0XHRcdFx0aWYgKCBpbnB1dC52YWx1ZS5jdXJyZW50ICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRpbnB1dC5yZVF1ZXJ5VmFsdWUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn07XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5pbml0Q2FsYyA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoIHRoaXMuaW5pdGVkQ2FsYyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMuaW5pdGVkQ2FsYyAgICAgPSB0cnVlO1xyXG5cdGNvbnN0IFsgbm9kZSBdICAgICAgPSB0aGlzLnBhcmVudC5ub2RlcztcclxuXHRjb25zdCBmb3JtdWxhU3RyaW5nID0gbm9kZS5kYXRhc2V0Py5mb3JtdWxhO1xyXG5cclxuXHRpZiAoICFmb3JtdWxhU3RyaW5nIHx8ICdkZWZhdWx0JyA9PT0gdGhpcy5wYXJlbnQuY2FsY1R5cGUgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzICk7XHJcblxyXG5cdGZvcm11bGEub2JzZXJ2ZSggZm9ybXVsYVN0cmluZyApO1xyXG5cdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHRcdHRoaXMucGFyZW50LnZhbHVlLm5vdGlmeSgpO1xyXG5cdH07XHJcblx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuIGlucHV0LmNhbGNWYWx1ZTtcclxuXHR9O1xyXG5cdGZvcm11bGEuZW1wdHlWYWx1ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHR0aGlzLnBhcmVudC5zaWxlbmNlTm90aWZ5KCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlUm93OyIsIi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZXBlYXRlciggbm9kZSApIHtcclxuXHRyZXR1cm4gMSA9PT0gK25vZGUuZGF0YXNldC5yZXBlYXRlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNSZXBlYXRlciB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBPYnNlcnZhYmxlUm93IGZyb20gJy4vT2JzZXJ2YWJsZVJvdyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIFJlcGVhdGVyRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmJ1dHRvbk5vZGUgICA9IGZhbHNlO1xyXG5cdHRoaXMudGVtcGxhdGUgICAgID0gbnVsbDtcclxuXHR0aGlzLmNvbnRhaW5lciAgICA9IG51bGw7XHJcblx0dGhpcy5sYXN0T2JzZXJ2ZWQgPSBuZXcgUmVhY3RpdmVWYXIoKTtcclxuXHR0aGlzLmxhc3RPYnNlcnZlZC5tYWtlKCk7XHJcblxyXG5cdHRoaXMuYWRkRXZlbnRBdHRhY2hlZCA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIGRpc2FibGUgYXJpYSBhdHRyaWJ1dGVzXHJcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlSW52YWxpZCA9ICgpID0+IHt9O1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdICAgICA9IHRoaXMubm9kZXM7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycsXHJcblx0XHQpICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ICAgID0gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKTtcclxuXHRcdFx0Y3VycmVudC5yb290Tm9kZSA9IHJvdztcclxuXHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudC5wdXNoKCBjdXJyZW50ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRjdXJyZW50RWxlbWVudC5vYnNlcnZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRjdXJyZW50RWxlbWVudC5pbml0Q2FsYygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiByZW1vdmVCdXR0b25zICkge1xyXG5cdFx0XHRjb25zdCByb3cgPSB0aGlzLmNsb3Nlc3RSb3coIGJ1dHRvbiApO1xyXG5cclxuXHRcdFx0aWYgKCAhcm93ICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gcm93LnJlbW92ZU1hbnVhbGx5KCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMuaXNNYW51YWxDb3VudCApIHtcclxuXHRcdFx0aWYgKCAhIHRoaXMuYWRkRXZlbnRBdHRhY2hlZCAmJiAhIHRoaXMuYnV0dG9uTm9kZS5oYXNMaXN0ZW5lcikge1xyXG5cdFx0XHRcdHRoaXMuYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB0aGlzLmFkZE5ldygpICk7XHJcblx0XHRcdFx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuaGFzTGlzdGVuZXIgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucm9vdC5nZXRJbnB1dCggdGhpcy5pdGVtc0ZpZWxkICk7XHJcblxyXG5cdFx0aWYgKCAhaW5wdXQgKSB7XHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdFx0YEpldEZvcm1CdWlsZGVyIGVycm9yOiB1bmRlZmluZWQgaW5wdXQgYnkgbmFtZSBbJHsgdGhpcy5pdGVtc0ZpZWxkIH1dYCxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dC53YXRjaCggKCkgPT4gdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCBpbnB1dCApICk7XHJcblx0XHR0aGlzLnJlY2FsY3VsYXRlSXRlbXMoIGlucHV0ICk7XHJcblx0fTtcclxuXHR0aGlzLnNldE5vZGUgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHJcblx0XHR0aGlzLm5vZGVzICAgICA9IFsgbm9kZSBdO1xyXG5cdFx0dGhpcy5uYW1lICAgICAgPSBub2RlLmRhdGFzZXQuZmllbGROYW1lO1xyXG5cdFx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5hbWU7XHJcblx0XHR0aGlzLmlucHV0VHlwZSA9ICdyZXBlYXRlcic7XHJcblxyXG5cdFx0dGhpcy5tYW5hZ2VJdGVtcyA9IG5vZGUuZGF0YXNldD8ubWFuYWdlSXRlbXMgfHwgJ21hbnVhbGx5JztcclxuXHRcdHRoaXMuY2FsY1R5cGUgICAgPSBub2RlLmRhdGFzZXQ/LmNhbGNUeXBlIHx8ICdkZWZhdWx0JztcclxuXHRcdHRoaXMuaXRlbXNGaWVsZCAgPSBub2RlLmRhdGFzZXQ/Lml0ZW1zRmllbGQ7XHJcblxyXG5cdFx0dGhpcy5pc01hbnVhbENvdW50ID0gKFxyXG5cdFx0XHQhdGhpcy5pdGVtc0ZpZWxkIHx8ICdtYW51YWxseScgPT09IHRoaXMubWFuYWdlSXRlbXNcclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gY2FuIGJlIG51bGxcclxuXHRcdHRoaXMuYnV0dG9uTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19uZXcnLFxyXG5cdFx0KTtcclxuXHRcdHRoaXMudGVtcGxhdGUgICA9IG5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pbml0aWFsJyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoICF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlucHV0cyA9IFtdO1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCByb3dzICAgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XHJcblx0XHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHJvdy5nZXRJbnB1dHMoKSApIHtcclxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXHJcblx0XHRcdFx0aWYgKCAhaW5wdXQucmVwb3J0aW5nPy5yZXN0cmljdGlvbnM/Lmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbnB1dHMucHVzaCggaW5wdXQgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcclxuXHRcdFx0cm93LnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IHJlcGVhdGVyUm93cyA9IHRoaXMudmFsdWUuY3VycmVudFxyXG5cclxuXHRcdHJlcGVhdGVyUm93cy5mb3JFYWNoKCByb3cgPT4ge1xyXG5cdFx0XHRyb3cuZ2V0SW5wdXRzKCkuZm9yRWFjaCggaW5wdXQgPT4ge1xyXG5cdFx0XHRcdGlucHV0LnNldFZhbHVlKCk7XHJcblx0XHRcdFx0aW5wdXQuaW5pdE5vdGlmeVZhbHVlKCk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKVxyXG5cdH1cclxufVxyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYnV0dG9uTm9kZSA9IG51bGw7XHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgICA9IG51bGw7XHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuY29udGFpbmVyICA9IG51bGw7XHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuaXRlbXNGaWVsZCA9IGZhbHNlO1xyXG4vKipcclxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG4gKi9cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5sYXN0T2JzZXJ2ZWQgPSBudWxsO1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5hZGROZXcgPSBmdW5jdGlvbiAoIGNvdW50ID0gMSApIHtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXHJcblx0XHQuLi50aGlzLnZhbHVlPy5jdXJyZW50ID8/IFtdLFxyXG5cdFx0Li4uKFxyXG5cdFx0XHRuZXcgQXJyYXkoIGNvdW50IClcclxuXHRcdCkuZmlsbCggbnVsbCApLm1hcChcclxuXHRcdFx0KCkgPT4gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKSxcclxuXHRcdCksXHJcblx0XTtcclxufTtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlUm93ICkge1xyXG5cdGlmICggIUFycmF5LmlzQXJyYXkoIHRoaXMudmFsdWUuY3VycmVudCApICkge1xyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH1cclxuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50LmZpbmRJbmRleChcclxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCA9PT0gb2JzZXJ2YWJsZVJvdyxcclxuXHQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZSB7RWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbnxPYnNlcnZhYmxlUm93fVxyXG4gKi9cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5jbG9zZXN0Um93ID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdGNvbnN0IHJvd05vZGUgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApO1xyXG5cclxuXHRpZiAoICFyb3dOb2RlICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHQgKi9cclxuXHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcclxuXHRcdGlmICggcm93LnJvb3ROb2RlID09PSByb3dOb2RlICkge1xyXG5cdFx0XHRyZXR1cm4gcm93O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIG9ic2VydmFibGVSb3cgKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LmZpbHRlcihcclxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCAhPT0gb2JzZXJ2YWJsZVJvdyxcclxuXHQpO1xyXG59O1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZWNhbGN1bGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xyXG5cclxuXHQvLyBpZiBpdCA8IDAgPT0+IHdlIHNob3VsZCBhZGQge2RpZmZ9IG5ldyByZXBlYXRlciBpdGVtc1xyXG5cdC8vIGlmIGl0ID4gMCA9PT4gd2Ugc2hvdWxkIHJlbW92ZSBsYXN0IHtkaWZmfSBpdGVtc1xyXG5cdGNvbnN0IGRpZmYgPSBjdXJyZW50Q291bnQgLSBpbnB1dC5jYWxjVmFsdWU7XHJcblxyXG5cdGlmICggMCA9PT0gZGlmZiApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggZGlmZiA8IDAgKSB7XHJcblx0XHR0aGlzLmFkZE5ldyggLTEgKiBkaWZmICk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LnNsaWNlKCAwLCAtMSAqIGRpZmYgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyRGF0YTtcclxuIiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5sZXQge1xyXG5cdCAgICBBZHZhbmNlZFJlc3RyaWN0aW9uLFxyXG5cdCAgICBSZXN0cmljdGlvbixcclxuICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbiA9IEFkdmFuY2VkUmVzdHJpY3Rpb24gfHwgUmVzdHJpY3Rpb247XHJcblxyXG5mdW5jdGlvbiBSZXBlYXRlclJlc3RyaWN0aW9uKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH07XHJcbn1cclxuXHJcblJlcGVhdGVyUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyUmVzdHJpY3Rpb247IiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCYXNlU2lnbmFsLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtSZXBlYXRlckRhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIFNpZ25hbFJlcGVhdGVyKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSA9IFtdICkge1xyXG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gICAgID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuXHRcdGNvbnN0IGhhc0RlbGV0ZWRJdGVtcyA9IChcclxuXHRcdFx0cHJldlZhbHVlPy5sZW5ndGggJiYgcHJldlZhbHVlLmxlbmd0aCA+IGN1cnJlbnQubGVuZ3RoXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmICggaGFzRGVsZXRlZEl0ZW1zICkge1xyXG5cdFx0XHR0aGlzLnJlbW92ZVByZXZJdGVtcyggcHJldlZhbHVlICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgaW5kZXggb2YgT2JqZWN0LmtleXMoIGN1cnJlbnQgKSApIHtcclxuXHRcdFx0aWYgKCAhY3VycmVudC5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnJ1bkl0ZW0oICtpbmRleCwgaGFzRGVsZXRlZEl0ZW1zICk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGNhbGNWYWx1ZSA9IDA7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoIGN1cnJlbnQgKSApIHtcclxuXHRcdFx0cm93LmluaXRDYWxjKCk7XHJcblx0XHRcdGNhbGNWYWx1ZSArPSByb3cuY2FsYztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGNhbGNWYWx1ZTtcclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBjdXJyZW50SW5kZXggICAge051bWJlcn1cclxuXHQgKiBAcGFyYW0gc2hvdWxkUmVPYnNlcnZlXHJcblx0ICovXHJcblx0dGhpcy5ydW5JdGVtID0gZnVuY3Rpb24gKCBjdXJyZW50SW5kZXgsIHNob3VsZFJlT2JzZXJ2ZSA9IGZhbHNlICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd31cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudFsgY3VycmVudEluZGV4IF07XHJcblxyXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XHJcblx0XHRcdGlmICggIXNob3VsZFJlT2JzZXJ2ZSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG9ic2VydmFibGUucm9vdE5vZGUucmVtb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xyXG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5pbnB1dC50ZW1wbGF0ZS5pbm5lckhUTUwudHJpbSgpO1xyXG5cclxuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTC5yZXBsYWNlKFxyXG5cdFx0XHQvX19pX18vZyxcclxuXHRcdFx0Y3VycmVudEluZGV4LFxyXG5cdFx0KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlc2V0IGlucHV0IHZhbHVlcyBmb3IgYSBuZXcgcm93XHJcblx0XHQgKlxyXG5cdFx0ICogQHNpbmNlIDMuNC43XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IG5ld1JvdyA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0XHRjb25zdCBpbnB1dHMgPSBuZXdSb3cucXVlcnlTZWxlY3RvckFsbCggXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgb3V0cHV0XCIgKTtcclxuXHJcblx0XHRpbnB1dHMuZm9yRWFjaCggKCBpbnB1dCApID0+IHtcclxuXHRcdFx0c3dpdGNoICggaW5wdXQudHlwZSApIHtcclxuXHRcdFx0XHRjYXNlIFwiY2hlY2tib3hcIjpcclxuXHRcdFx0XHRjYXNlIFwicmFkaW9cIjpcclxuXHRcdFx0XHRcdGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJzZWxlY3Qtb25lXCI6XHJcblx0XHRcdFx0Y2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxyXG5cdFx0XHRcdFx0aW5wdXQuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImZpbGVcIjpcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gXCJcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJyYW5nZVwiOlxyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC5kZWZhdWx0VmFsdWUgfHwgXCJcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IFwiXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZC5kYXRhc2V0LmluZGV4ID0gJycgKyBjdXJyZW50SW5kZXg7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5jb250YWluZXIuYXBwZW5kKCBuZXdSb3cgKTtcclxuXHJcblx0XHRjb25zdCBhcHBlbmRlZCA9IHRoaXMuaW5wdXQuY29udGFpbmVyLmxhc3RDaGlsZDtcclxuXHJcblx0XHRpZiAoIHRoaXMuaW5wdXQuaXNNYW51YWxDb3VudCApIHtcclxuXHRcdFx0YXBwZW5kZWQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXHJcblx0XHRcdCkuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0XHQnY2xpY2snLFxyXG5cdFx0XHRcdCgpID0+IG9ic2VydmFibGUucmVtb3ZlTWFudWFsbHkoKSxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcclxuXHRcdFx0b2JzZXJ2YWJsZS5yZU9ic2VydmUoIGFwcGVuZGVkICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlLm9ic2VydmUoIGFwcGVuZGVkICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5yZW1vdmVQcmV2SXRlbXMgPSBmdW5jdGlvbiAoIHByZXZSb3dzICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHByZXZSb3cgb2YgcHJldlJvd3MgKSB7XHJcblx0XHRcdGlmICggIWN1cnJlbnQuaW5jbHVkZXMoIHByZXZSb3cgKSApIHtcclxuXHRcdFx0XHRwcmV2Um93LnJlbW92ZU1hbnVhbGx5KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxSZXBlYXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVwZWF0ZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmVwZWF0ZXJEYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsUmVwZWF0ZXIgZnJvbSAnLi9zaWduYWwnO1xyXG5pbXBvcnQgUmVwZWF0ZXJSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZXBlYXRlclJlc3RyaWN0aW9uJztcclxuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFkZEZpbHRlcixcclxuXHQgICAgICBhZGRBY3Rpb24sXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIFJlcGVhdGVyRGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcclxuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbFJlcGVhdGVyLCAuLi5zaWduYWxzIF07XHJcblxyXG5cdFx0cmV0dXJuIHNpZ25hbHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmNvbnN0IGFkZFJlc3RyaWN0aW9uID0gKCByZXN0cmljdGlvbnMgKSA9PiB7XHJcblx0cmVzdHJpY3Rpb25zLnB1c2goXHJcblx0XHRSZXBlYXRlclJlc3RyaWN0aW9uLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiByZXN0cmljdGlvbnM7XHJcbn07XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxyXG5cdGFkZFJlc3RyaWN0aW9uLFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0YWRkUmVzdHJpY3Rpb24sXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5tdWx0aXN0ZXAucGFnZS5vYnNlcnZlZC5pbnB1dCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YXxSZXBlYXRlckRhdGF9XHJcblx0ICogQHBhcmFtIHBhZ2VTdGF0ZSB7UGFnZVN0YXRlfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggaW5wdXQsIHBhZ2VTdGF0ZSApIHtcclxuXHRcdGlmICggJ3JlcGVhdGVyJyAhPT0gaW5wdXQuaW5wdXRUeXBlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBjdXJyZW50ID0gaW5wdXQudmFsdWUuY3VycmVudCB8fCBbXTtcclxuXHJcblx0XHRpbnB1dC53YXRjaCggKCkgPT4gcGFnZVN0YXRlLnVwZGF0ZVN0YXRlKCkgKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBwYXJhbSBjdXJyZW50SW5wdXQge0lucHV0RGF0YX1cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gb2JzZXJ2ZUlubmVySW5wdXQoIGN1cnJlbnRJbnB1dCApIHtcclxuXHRcdFx0cGFnZVN0YXRlLmhhbmRsZUlucHV0RW50ZXIoIGN1cnJlbnRJbnB1dCApO1xyXG5cclxuXHRcdFx0aWYgKCAhY3VycmVudElucHV0LnJlcG9ydGluZz8ucmVzdHJpY3Rpb25zPy5sZW5ndGggKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjdXJyZW50SW5wdXQud2F0Y2hWYWxpZGl0eSggKCkgPT4gcGFnZVN0YXRlLnVwZGF0ZVN0YXRlKCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlUm93IG9mIGN1cnJlbnQgKSB7XHJcblx0XHRcdG9ic2VydmFibGVSb3cuZ2V0SW5wdXRzKCkuZm9yRWFjaCggb2JzZXJ2ZUlubmVySW5wdXQgKTtcclxuXHRcdH1cclxuXHRcdGlucHV0Lmxhc3RPYnNlcnZlZC53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHRpbnB1dC5sYXN0T2JzZXJ2ZWQuY3VycmVudC5nZXRJbnB1dHMoKS5mb3JFYWNoKCBvYnNlcnZlSW5uZXJJbnB1dCApO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9