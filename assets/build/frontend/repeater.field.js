/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/repeater.field/ObservableRow.js":
/*!**************************************************!*\
  !*** ./frontend/repeater.field/ObservableRow.js ***!
  \**************************************************/
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

/***/ "./frontend/repeater.field/functions.js":
/*!**********************************************!*\
  !*** ./frontend/repeater.field/functions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRepeater: () => (/* binding */ isRepeater)
/* harmony export */ });
/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isRepeater(node) {
  return 1 === +node.dataset.repeater;
}


/***/ }),

/***/ "./frontend/repeater.field/input.js":
/*!******************************************!*\
  !*** ./frontend/repeater.field/input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/repeater.field/functions.js");
/* harmony import */ var _ObservableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObservableRow */ "./frontend/repeater.field/ObservableRow.js");


const {
  InputData,
  ReactiveVar
} = JetFormBuilderAbstract;
function RepeaterData() {
  InputData.call(this);
  this.buttonNode = false;
  this.template = null;
  this.container = null;
  this.lastObserved = new ReactiveVar();
  this.lastObserved.make();
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
      this.buttonNode.addEventListener('click', () => this.addNew());
      return;
    }
    const input = this.root.getInput(this.itemsField);
    if (!input) {
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
      row.getInputs().forEach(input => input.setValue());
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
 * @param node {Element}
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

/***/ "./frontend/repeater.field/restrictions/RepeaterRestriction.js":
/*!*********************************************************************!*\
  !*** ./frontend/repeater.field/restrictions/RepeaterRestriction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./frontend/repeater.field/functions.js");

let {
  AdvancedRestriction,
  Restriction
} = JetFormBuilderAbstract;
AdvancedRestriction = AdvancedRestriction || Restriction;
function RepeaterRestriction() {
  AdvancedRestriction.call(this);
  this.isSupported = function (node, reporting) {
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

/***/ "./frontend/repeater.field/signal.js":
/*!*******************************************!*\
  !*** ./frontend/repeater.field/signal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/repeater.field/functions.js");

const {
  BaseSignal
} = window.JetFormBuilderAbstract;

/**
 * @property {RepeaterData} input
 */
function SignalRepeater() {
  BaseSignal.call(this);
  this.isSupported = function (node, inputData) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isRepeater)(node);
  };
  this.runSignal = function (prevValue = []) {
    const {
      current
    } = this.input.value;
    if (prevValue?.length && prevValue.length > current.length) {
      this.removePrevItems(prevValue);
    }
    for (const index of Object.keys(current)) {
      if (!current.hasOwnProperty(index)) {
        continue;
      }
      this.runItem(+index);
    }
    let calcValue = 0;
    for (const row of Object.values(current)) {
      row.initCalc();
      calcValue += row.calc;
    }
    this.input.calcValue = calcValue;
  };
  /**
   * @param currentIndex {Number}
   */
  this.runItem = function (currentIndex) {
    /**
     * @type {ObservableRow}
     */
    const observable = this.input.value.current[currentIndex];
    if (observable.isObserved) {
      return;
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
    observable.observe(appended);
  };
  this.removePrevItems = function (prevRows) {
    const {
      current
    } = this.input.value;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./frontend/repeater.field/main.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/repeater.field/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/repeater.field/signal.js");
/* harmony import */ var _restrictions_RepeaterRestriction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restrictions/RepeaterRestriction */ "./frontend/repeater.field/restrictions/RepeaterRestriction.js");



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
 * @param input {InputData|RepeaterData}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvcmVwZWF0ZXIuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4UEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFNQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9yZXBlYXRlci5maWVsZC9PYnNlcnZhYmxlUm93LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL3JlcGVhdGVyLmZpZWxkL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9yZXBlYXRlci5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9yZXBlYXRlci5maWVsZC9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9yZXBlYXRlci5maWVsZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvcmVwZWF0ZXIuZmllbGQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgT2JzZXJ2YWJsZSxcclxuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBPYnNlcnZhYmxlUm93KCBwYXJlbnQgKSB7XHJcblx0T2JzZXJ2YWJsZS5jYWxsKCB0aGlzLCBwYXJlbnQgKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCB3ZSByZXR1cm4gdGhlIG51bWJlciBvZiByZXBlYXRlciByb3dzXHJcblx0dGhpcy5jYWxjICAgICAgID0gMTtcclxuXHR0aGlzLmluaXRlZENhbGMgPSBmYWxzZTtcclxufVxyXG5cclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoIE9ic2VydmFibGUucHJvdG90eXBlICk7XHJcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmNhbGMgICAgICAgPSAxO1xyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5pbml0ZWRDYWxjID0gZmFsc2U7XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xyXG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xyXG5cclxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XHJcbn07XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZW1vdmVNYW51YWxseSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnJlbW92ZSgpO1xyXG5cclxuXHR0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcclxuXHR0aGlzLnJvb3ROb2RlLnJlbW92ZSgpO1xyXG59O1xyXG5cclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdENhbGMgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCB0aGlzLmluaXRlZENhbGMgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLmluaXRlZENhbGMgICAgID0gdHJ1ZTtcclxuXHRjb25zdCBbIG5vZGUgXSAgICAgID0gdGhpcy5wYXJlbnQubm9kZXM7XHJcblx0Y29uc3QgZm9ybXVsYVN0cmluZyA9IG5vZGUuZGF0YXNldD8uZm9ybXVsYTtcclxuXHJcblx0aWYgKCAhZm9ybXVsYVN0cmluZyB8fCAnZGVmYXVsdCcgPT09IHRoaXMucGFyZW50LmNhbGNUeXBlICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcyApO1xyXG5cclxuXHRmb3JtdWxhLm9ic2VydmUoIGZvcm11bGFTdHJpbmcgKTtcclxuXHRmb3JtdWxhLnNldFJlc3VsdCAgICAgICA9ICgpID0+IHtcclxuXHRcdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0XHR0aGlzLnBhcmVudC52YWx1ZS5ub3RpZnkoKTtcclxuXHR9O1xyXG5cdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHJldHVybiBpbnB1dC5jYWxjVmFsdWU7XHJcblx0fTtcclxuXHRmb3JtdWxhLmVtcHR5VmFsdWUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAwO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0dGhpcy5wYXJlbnQuc2lsZW5jZU5vdGlmeSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZVJvdzsiLCIvKipcclxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVwZWF0ZXIoIG5vZGUgKSB7XHJcblx0cmV0dXJuIDEgPT09ICtub2RlLmRhdGFzZXQucmVwZWF0ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzUmVwZWF0ZXIgfTsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVJvdyBmcm9tICcuL09ic2VydmFibGVSb3cnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIElucHV0RGF0YSxcclxuXHQgICAgICBSZWFjdGl2ZVZhcixcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBSZXBlYXRlckRhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5idXR0b25Ob2RlICAgPSBmYWxzZTtcclxuXHR0aGlzLnRlbXBsYXRlICAgICA9IG51bGw7XHJcblx0dGhpcy5jb250YWluZXIgICAgPSBudWxsO1xyXG5cdHRoaXMubGFzdE9ic2VydmVkID0gbmV3IFJlYWN0aXZlVmFyKCk7XHJcblx0dGhpcy5sYXN0T2JzZXJ2ZWQubWFrZSgpO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIGRpc2FibGUgYXJpYSBhdHRyaWJ1dGVzXHJcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlSW52YWxpZCA9ICgpID0+IHt9O1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdICAgICA9IHRoaXMubm9kZXM7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycsXHJcblx0XHQpICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ICAgID0gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKTtcclxuXHRcdFx0Y3VycmVudC5yb290Tm9kZSA9IHJvdztcclxuXHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudC5wdXNoKCBjdXJyZW50ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRjdXJyZW50RWxlbWVudC5vYnNlcnZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRjdXJyZW50RWxlbWVudC5pbml0Q2FsYygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiByZW1vdmVCdXR0b25zICkge1xyXG5cdFx0XHRjb25zdCByb3cgPSB0aGlzLmNsb3Nlc3RSb3coIGJ1dHRvbiApO1xyXG5cclxuXHRcdFx0aWYgKCAhcm93ICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gcm93LnJlbW92ZU1hbnVhbGx5KCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMuaXNNYW51YWxDb3VudCApIHtcclxuXHRcdFx0dGhpcy5idXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMuYWRkTmV3KCkgKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucm9vdC5nZXRJbnB1dCggdGhpcy5pdGVtc0ZpZWxkICk7XHJcblxyXG5cdFx0aWYgKCAhaW5wdXQgKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdFx0YEpldEZvcm1CdWlsZGVyIGVycm9yOiB1bmRlZmluZWQgaW5wdXQgYnkgbmFtZSBbJHsgdGhpcy5pdGVtc0ZpZWxkIH1dYCxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dC53YXRjaCggKCkgPT4gdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCBpbnB1dCApICk7XHJcblx0XHR0aGlzLnJlY2FsY3VsYXRlSXRlbXMoIGlucHV0ICk7XHJcblx0fTtcclxuXHR0aGlzLnNldE5vZGUgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHJcblx0XHR0aGlzLm5vZGVzICAgICA9IFsgbm9kZSBdO1xyXG5cdFx0dGhpcy5uYW1lICAgICAgPSBub2RlLmRhdGFzZXQuZmllbGROYW1lO1xyXG5cdFx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5hbWU7XHJcblx0XHR0aGlzLmlucHV0VHlwZSA9ICdyZXBlYXRlcic7XHJcblxyXG5cdFx0dGhpcy5tYW5hZ2VJdGVtcyA9IG5vZGUuZGF0YXNldD8ubWFuYWdlSXRlbXMgfHwgJ21hbnVhbGx5JztcclxuXHRcdHRoaXMuY2FsY1R5cGUgICAgPSBub2RlLmRhdGFzZXQ/LmNhbGNUeXBlIHx8ICdkZWZhdWx0JztcclxuXHRcdHRoaXMuaXRlbXNGaWVsZCAgPSBub2RlLmRhdGFzZXQ/Lml0ZW1zRmllbGQ7XHJcblxyXG5cdFx0dGhpcy5pc01hbnVhbENvdW50ID0gKFxyXG5cdFx0XHQhdGhpcy5pdGVtc0ZpZWxkIHx8ICdtYW51YWxseScgPT09IHRoaXMubWFuYWdlSXRlbXNcclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gY2FuIGJlIG51bGxcclxuXHRcdHRoaXMuYnV0dG9uTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19uZXcnLFxyXG5cdFx0KTtcclxuXHRcdHRoaXMudGVtcGxhdGUgICA9IG5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pbml0aWFsJyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoICF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlucHV0cyA9IFtdO1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCByb3dzICAgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XHJcblx0XHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHJvdy5nZXRJbnB1dHMoKSApIHtcclxuXHRcdFx0XHRpZiAoICFpbnB1dC5yZXBvcnRpbmc/LnJlc3RyaWN0aW9ucz8ubGVuZ3RoICkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlucHV0cy5wdXNoKCBpbnB1dCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiByb3dzICkge1xyXG5cdFx0XHRyb3cucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoICF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgcmVwZWF0ZXJSb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50XHJcblxyXG5cdFx0cmVwZWF0ZXJSb3dzLmZvckVhY2goIHJvdyA9PiB7XHJcblx0XHRcdHJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKCBpbnB1dCA9PiBpbnB1dC5zZXRWYWx1ZSgpICk7XHJcblx0XHR9IClcclxuXHR9XHJcbn1cclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmJ1dHRvbk5vZGUgPSBudWxsO1xyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnRlbXBsYXRlICAgPSBudWxsO1xyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNvbnRhaW5lciAgPSBudWxsO1xyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLml0ZW1zRmllbGQgPSBmYWxzZTtcclxuLyoqXHJcbiAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cclxuICovXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUubGFzdE9ic2VydmVkID0gbnVsbDtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYWRkTmV3ID0gZnVuY3Rpb24gKCBjb3VudCA9IDEgKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW1xyXG5cdFx0Li4udGhpcy52YWx1ZT8uY3VycmVudCA/PyBbXSxcclxuXHRcdC4uLihcclxuXHRcdFx0bmV3IEFycmF5KCBjb3VudCApXHJcblx0XHQpLmZpbGwoIG51bGwgKS5tYXAoXHJcblx0XHRcdCgpID0+IG5ldyBPYnNlcnZhYmxlUm93KCB0aGlzICksXHJcblx0XHQpLFxyXG5cdF07XHJcbn07XHJcblxyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZVJvdyApIHtcclxuXHRpZiAoICFBcnJheS5pc0FycmF5KCB0aGlzLnZhbHVlLmN1cnJlbnQgKSApIHtcclxuXHRcdHJldHVybiAtMTtcclxuXHR9XHJcblx0cmV0dXJuIHRoaXMudmFsdWUuY3VycmVudC5maW5kSW5kZXgoXHJcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgPT09IG9ic2VydmFibGVSb3csXHJcblx0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbnxPYnNlcnZhYmxlUm93fVxyXG4gKi9cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5jbG9zZXN0Um93ID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdGNvbnN0IHJvd05vZGUgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApO1xyXG5cclxuXHRpZiAoICFyb3dOb2RlICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHQgKi9cclxuXHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcclxuXHRcdGlmICggcm93LnJvb3ROb2RlID09PSByb3dOb2RlICkge1xyXG5cdFx0XHRyZXR1cm4gcm93O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIG9ic2VydmFibGVSb3cgKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LmZpbHRlcihcclxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCAhPT0gb2JzZXJ2YWJsZVJvdyxcclxuXHQpO1xyXG59O1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZWNhbGN1bGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xyXG5cclxuXHQvLyBpZiBpdCA8IDAgPT0+IHdlIHNob3VsZCBhZGQge2RpZmZ9IG5ldyByZXBlYXRlciBpdGVtc1xyXG5cdC8vIGlmIGl0ID4gMCA9PT4gd2Ugc2hvdWxkIHJlbW92ZSBsYXN0IHtkaWZmfSBpdGVtc1xyXG5cdGNvbnN0IGRpZmYgPSBjdXJyZW50Q291bnQgLSBpbnB1dC5jYWxjVmFsdWU7XHJcblxyXG5cdGlmICggMCA9PT0gZGlmZiApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggZGlmZiA8IDAgKSB7XHJcblx0XHR0aGlzLmFkZE5ldyggLTEgKiBkaWZmICk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LnNsaWNlKCAwLCAtMSAqIGRpZmYgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyRGF0YTsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmxldCB7XHJcblx0ICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXHJcblx0ICAgIFJlc3RyaWN0aW9uLFxyXG4gICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5BZHZhbmNlZFJlc3RyaWN0aW9uID0gQWR2YW5jZWRSZXN0cmljdGlvbiB8fCBSZXN0cmljdGlvbjtcclxuXHJcbmZ1bmN0aW9uIFJlcGVhdGVyUmVzdHJpY3Rpb24oKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9O1xyXG59XHJcblxyXG5SZXBlYXRlclJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclJlc3RyaWN0aW9uOyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQmFzZVNpZ25hbCxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7UmVwZWF0ZXJEYXRhfSBpbnB1dFxyXG4gKi9cclxuZnVuY3Rpb24gU2lnbmFsUmVwZWF0ZXIoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcclxuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgPSBbXSApIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuXHJcblx0XHRpZiAoIHByZXZWYWx1ZT8ubGVuZ3RoICYmIHByZXZWYWx1ZS5sZW5ndGggPiBjdXJyZW50Lmxlbmd0aCApIHtcclxuXHRcdFx0dGhpcy5yZW1vdmVQcmV2SXRlbXMoIHByZXZWYWx1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IGluZGV4IG9mIE9iamVjdC5rZXlzKCBjdXJyZW50ICkgKSB7XHJcblx0XHRcdGlmICggIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5ydW5JdGVtKCAraW5kZXggKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgY2FsY1ZhbHVlID0gMDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyggY3VycmVudCApICkge1xyXG5cdFx0XHRyb3cuaW5pdENhbGMoKTtcclxuXHRcdFx0Y2FsY1ZhbHVlICs9IHJvdy5jYWxjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gY2FsY1ZhbHVlO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGN1cnJlbnRJbmRleCB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cdHRoaXMucnVuSXRlbSA9IGZ1bmN0aW9uICggY3VycmVudEluZGV4ICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd31cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudFsgY3VycmVudEluZGV4IF07XHJcblxyXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcclxuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuaW5wdXQudGVtcGxhdGUuaW5uZXJIVE1MLnRyaW0oKTtcclxuXHJcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUwucmVwbGFjZShcclxuXHRcdFx0L19faV9fL2csXHJcblx0XHRcdGN1cnJlbnRJbmRleCxcclxuXHRcdCk7XHJcblxyXG5cdFx0dGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLmRhdGFzZXQuaW5kZXggPSAnJyArIGN1cnJlbnRJbmRleDtcclxuXHRcdHRoaXMuaW5wdXQuY29udGFpbmVyLmFwcGVuZCggdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkICk7XHJcblxyXG5cdFx0Y29uc3QgYXBwZW5kZWQgPSB0aGlzLmlucHV0LmNvbnRhaW5lci5sYXN0Q2hpbGQ7XHJcblxyXG5cdFx0aWYgKCB0aGlzLmlucHV0LmlzTWFudWFsQ291bnQgKSB7XHJcblx0XHRcdGFwcGVuZGVkLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnLFxyXG5cdFx0XHQpLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0XHQoKSA9PiBvYnNlcnZhYmxlLnJlbW92ZU1hbnVhbGx5KCksXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBhcHBlbmRlZCApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucmVtb3ZlUHJldkl0ZW1zID0gZnVuY3Rpb24gKCBwcmV2Um93cyApIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBwcmV2Um93IG9mIHByZXZSb3dzICkge1xyXG5cdFx0XHRpZiAoICFjdXJyZW50LmluY2x1ZGVzKCBwcmV2Um93ICkgKSB7XHJcblx0XHRcdFx0cHJldlJvdy5yZW1vdmVNYW51YWxseSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsUmVwZWF0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlcGVhdGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFJlcGVhdGVyRGF0YSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFNpZ25hbFJlcGVhdGVyIGZyb20gJy4vc2lnbmFsJztcclxuaW1wb3J0IFJlcGVhdGVyUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgUmVwZWF0ZXJEYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmVwZWF0ZXIsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pO1xyXG5cclxuY29uc3QgYWRkUmVzdHJpY3Rpb24gPSAoIHJlc3RyaWN0aW9ucyApID0+IHtcclxuXHRyZXN0cmljdGlvbnMucHVzaChcclxuXHRcdFJlcGVhdGVyUmVzdHJpY3Rpb24sXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHJlc3RyaWN0aW9ucztcclxufTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0JyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0YWRkUmVzdHJpY3Rpb25cclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxyXG5cdGFkZFJlc3RyaWN0aW9uXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5tdWx0aXN0ZXAucGFnZS5vYnNlcnZlZC5pbnB1dCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfFJlcGVhdGVyRGF0YX1cclxuXHQgKiBAcGFyYW0gcGFnZVN0YXRlIHtQYWdlU3RhdGV9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gKCBpbnB1dCwgcGFnZVN0YXRlICkge1xyXG5cdFx0aWYgKCAncmVwZWF0ZXInICE9PSBpbnB1dC5pbnB1dFR5cGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBpbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdO1xyXG5cclxuXHRcdGlucHV0LndhdGNoKCAoKSA9PiBwYWdlU3RhdGUudXBkYXRlU3RhdGUoKSApO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIGN1cnJlbnRJbnB1dCB7SW5wdXREYXRhfVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBvYnNlcnZlSW5uZXJJbnB1dCggY3VycmVudElucHV0ICkge1xyXG5cdFx0XHRwYWdlU3RhdGUuaGFuZGxlSW5wdXRFbnRlciggY3VycmVudElucHV0ICk7XHJcblxyXG5cdFx0XHRpZiAoICEgY3VycmVudElucHV0LnJlcG9ydGluZz8ucmVzdHJpY3Rpb25zPy5sZW5ndGggKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjdXJyZW50SW5wdXQud2F0Y2hWYWxpZGl0eSggKCkgPT4gcGFnZVN0YXRlLnVwZGF0ZVN0YXRlKCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlUm93IG9mIGN1cnJlbnQgKSB7XHJcblx0XHRcdG9ic2VydmFibGVSb3cuZ2V0SW5wdXRzKCkuZm9yRWFjaCggb2JzZXJ2ZUlubmVySW5wdXQgKTtcclxuXHRcdH1cclxuXHRcdGlucHV0Lmxhc3RPYnNlcnZlZC53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHRpbnB1dC5sYXN0T2JzZXJ2ZWQuY3VycmVudC5nZXRJbnB1dHMoKS5mb3JFYWNoKCBvYnNlcnZlSW5uZXJJbnB1dCApO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9