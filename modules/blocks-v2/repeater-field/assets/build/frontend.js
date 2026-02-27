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
  if (this._isRemoving) {
    return;
  }
  this._isRemoving = true;
  const otherRows = this.parent.value.current.filter(row => row !== this && !row._isRemoving);
  const otherValues = otherRows.map(row => {
    // Try to get values from dataInputs if value.current is empty
    const deepCopyValues = {};

    // First, try from value.current
    for (const [key, value] of Object.entries(row.value.current || {})) {
      if (Array.isArray(value)) {
        deepCopyValues[key] = [...value];
      } else {
        deepCopyValues[key] = value;
      }
    }

    // If value.current is empty, try to get from dataInputs
    if (0 === Object.keys(deepCopyValues).length && row.dataInputs) {
      for (const [key, input] of Object.entries(row.dataInputs)) {
        if (input && input.getValue) {
          const inputValue = input.getValue();
          if (Array.isArray(inputValue)) {
            deepCopyValues[key] = [...inputValue];
          } else {
            deepCopyValues[key] = inputValue;
          }
        }
      }
    }
    return {
      node: row.rootNode,
      values: deepCopyValues
    };
  });
  otherRows.forEach((row, index) => {
    if (otherValues[index]) {
      const valuesToRestore = otherValues[index].values;
      for (const [key, value] of Object.entries(valuesToRestore)) {
        row.value.current[key] = value;
      }
      setTimeout(() => {
        const inputs = row.getInputs();
        inputs.forEach(input => {
          if (input.updatePreviews && typeof input.updatePreviews === 'function') {
            input.updatePreviews();
          }
        });

        // Reinitialize row formula after reindexing
        row.initedCalc = false; // Reset the flag to allow re-initialization
        row.initCalc(); // Re-initialize the formula with new field names
      }, 50);
    }
  });
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

/***/ "./frontend/repeater-macros.js":
/*!*************************************!*\
  !*** ./frontend/repeater-macros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveRepeaterMacrosValue: () => (/* binding */ resolveRepeaterMacrosValue)
/* harmony export */ });
function bindRepeaterNotifyOnce(node) {
  if (node.__jfbMacrosRepeaterBound) {
    return;
  }
  node.__jfbMacrosRepeaterBound = true;
  const form = node.closest('form.jet-form-builder');
  const formId = form?.dataset?.formId;
  const store = window.JetFormBuilder?.[formId];
  const repeaterInput = store?.getInput?.(node.dataset.fieldName);
  const notify = () => {
    repeaterInput?.value?.notify?.();
  };
  node.addEventListener('input', notify, true);
  node.addEventListener('change', notify, true);
  node.addEventListener('click', e => {
    const removeBtn = e.target.closest?.('.jet-form-builder-repeater__row-remove');
    if (!removeBtn || !node.contains(removeBtn)) {
      return;
    }
    requestAnimationFrame(notify);
  }, true);
}
function collectRepeaterLines(fieldNode, macros) {
  const items = fieldNode.querySelector('.jet-form-builder-repeater__items');
  if (!items) {
    return '';
  }
  const macrosSet = Array.isArray(macros) && macros.length ? new Set(macros) : null;
  const rows = items.querySelectorAll('[data-repeater-row]');
  const lines = [];
  rows.forEach(rowEl => {
    const rowRepeaterField = rowEl.closest('.field-type-repeater-field');
    const fields = rowEl.querySelectorAll('input, select, textarea');
    fields.forEach(el => {
      var _el$value;
      if (el.closest('.field-type-repeater-field') !== rowRepeaterField) {
        return;
      }
      if (el.disabled) {
        return;
      }
      if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) {
        return;
      }
      const name = el.dataset?.fieldName || el.name || '';
      const value = String((_el$value = el.value) !== null && _el$value !== void 0 ? _el$value : '');
      if (macrosSet && !macrosSet.has(name)) {
        return;
      }
      lines.push(`${name}: ${value}`);
    });
  });
  return lines.join('<br/>');
}
function resolveRepeaterMacrosValue(current, $fieldNode, $macroHost = false) {
  const fieldNode = $fieldNode?.[0];
  if (!fieldNode || fieldNode.dataset?.repeater !== '1') {
    return current;
  }
  bindRepeaterNotifyOnce(fieldNode);
  const host = $macroHost?.[0];
  if (!host) {
    return collectRepeaterLines(fieldNode, null);
  }
  const source = host.__jfbMacroTemplate;
  if (!source) {
    return collectRepeaterLines(fieldNode, null);
  }
  const doc = new DOMParser().parseFromString(String(source), 'text/html');
  const macros = Array.from(doc.querySelectorAll('[data-jfb-macro]')).map(el => el.getAttribute('data-jfb-macro')).filter(Boolean);
  return collectRepeaterLines(fieldNode, macros);
}

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
          // Preserve default checked state for checkbox/radio fields
          // Check if the input has defaultChecked attribute (from HTML)
          input.checked = input.defaultChecked || false;
          break;
        case "select-one":
        case "select-multiple":
          const options = input.querySelectorAll('option');
          options.forEach(option => {
            option.selected = option.defaultSelected || false;
          });
          break;
        case "file":
          input.value = "";
          break;
        case "range":
          input.value = input.defaultValue || "";
          break;
        default:
          input.value = input.defaultValue || "";
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
/* harmony import */ var _repeater_macros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repeater-macros */ "./frontend/repeater-macros.js");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.pcss */ "./frontend/index.pcss");





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
addFilter('jet.fb.macro.field.value', 'jet-form-builder/repeater-field', (current, $fieldNode, $macroHost) => (0,_repeater_macros__WEBPACK_IMPORTED_MODULE_3__.resolveRepeaterMacrosValue)(current, $fieldNode, $macroHost));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQU1BO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvT2JzZXJ2YWJsZVJvdy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXBlYXRlci1tYWNyb3MuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvcmVzdHJpY3Rpb25zL1JlcGVhdGVyUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHQgICAgICBPYnNlcnZhYmxlLFxyXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIE9ic2VydmFibGVSb3coIHBhcmVudCApIHtcclxuXHRPYnNlcnZhYmxlLmNhbGwoIHRoaXMsIHBhcmVudCApO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0IHdlIHJldHVybiB0aGUgbnVtYmVyIG9mIHJlcGVhdGVyIHJvd3NcclxuXHR0aGlzLmNhbGMgICAgICAgPSAxO1xyXG5cdHRoaXMuaW5pdGVkQ2FsYyA9IGZhbHNlO1xyXG59XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZSAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZSggT2JzZXJ2YWJsZS5wcm90b3R5cGUgKTtcclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuY2FsYyAgICAgICA9IDE7XHJcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmluaXRlZENhbGMgPSBmYWxzZTtcclxuXHJcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLnJlT2JzZXJ2ZSA9IGZ1bmN0aW9uICggcm9vdCApIHtcclxuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcclxuXHJcblx0Y29uc3QgcHJldlZhbHVlcyA9IHsgLi4udGhpcy52YWx1ZS5jdXJyZW50IH07XHJcblx0dGhpcy5kYXRhSW5wdXRzICA9IHt9O1xyXG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xyXG5cclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBwcmV2VmFsdWVzO1xyXG59O1xyXG5cclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICggcm9vdCApIHtcclxuXHRPYnNlcnZhYmxlLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMsIHJvb3QgKTtcclxuXHJcblx0dGhpcy5wYXJlbnQubGFzdE9ic2VydmVkLmN1cnJlbnQgPSB0aGlzO1xyXG59O1xyXG5cclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVtb3ZlTWFudWFsbHkgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCB0aGlzLl9pc1JlbW92aW5nICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5faXNSZW1vdmluZyA9IHRydWU7XHJcblxyXG5cdGNvbnN0IG90aGVyUm93cyA9IHRoaXMucGFyZW50LnZhbHVlLmN1cnJlbnQuZmlsdGVyKCByb3cgPT4gcm93ICE9PSB0aGlzICYmICFyb3cuX2lzUmVtb3ZpbmcgKTtcclxuXHJcblx0Y29uc3Qgb3RoZXJWYWx1ZXMgPSBvdGhlclJvd3MubWFwKCByb3cgPT4ge1xyXG5cdFx0Ly8gVHJ5IHRvIGdldCB2YWx1ZXMgZnJvbSBkYXRhSW5wdXRzIGlmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHlcclxuXHRcdGNvbnN0IGRlZXBDb3B5VmFsdWVzID0ge307XHJcblxyXG5cdFx0Ly8gRmlyc3QsIHRyeSBmcm9tIHZhbHVlLmN1cnJlbnRcclxuXHRcdGZvciAoIGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyggcm93LnZhbHVlLmN1cnJlbnQgfHwge30gKSApIHtcclxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xyXG5cdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4udmFsdWVdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIElmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHksIHRyeSB0byBnZXQgZnJvbSBkYXRhSW5wdXRzXHJcblx0XHRpZiAoIDAgPT09IE9iamVjdC5rZXlzKCBkZWVwQ29weVZhbHVlcyApLmxlbmd0aCAmJiByb3cuZGF0YUlucHV0cyApIHtcclxuXHRcdFx0Zm9yICggY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKCByb3cuZGF0YUlucHV0cyApICkge1xyXG5cdFx0XHRcdGlmICggaW5wdXQgJiYgaW5wdXQuZ2V0VmFsdWUgKSB7XHJcblx0XHRcdFx0XHRjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHRcdFx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggaW5wdXRWYWx1ZSApICkge1xyXG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gWy4uLmlucHV0VmFsdWVdO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IGlucHV0VmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bm9kZTogcm93LnJvb3ROb2RlLFxyXG5cdFx0XHR2YWx1ZXM6IGRlZXBDb3B5VmFsdWVzXHJcblx0XHR9O1xyXG5cdH0gKTtcclxuXHJcblx0b3RoZXJSb3dzLmZvckVhY2goICggcm93LCBpbmRleCApID0+IHtcclxuXHRcdGlmICggb3RoZXJWYWx1ZXNbaW5kZXhdICkge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXNUb1Jlc3RvcmUgPSBvdGhlclZhbHVlc1tpbmRleF0udmFsdWVzO1xyXG5cclxuXHRcdFx0Zm9yICggY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZXNUb1Jlc3RvcmUgKSApIHtcclxuXHRcdFx0XHRyb3cudmFsdWUuY3VycmVudFtrZXldID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCBpbnB1dHMgPSByb3cuZ2V0SW5wdXRzKCk7XHJcblxyXG5cdFx0XHRcdGlucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIGlucHV0LnVwZGF0ZVByZXZpZXdzICYmIHR5cGVvZiBpbnB1dC51cGRhdGVQcmV2aWV3cyA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuXHRcdFx0XHRcdFx0aW5wdXQudXBkYXRlUHJldmlld3MoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdC8vIFJlaW5pdGlhbGl6ZSByb3cgZm9ybXVsYSBhZnRlciByZWluZGV4aW5nXHJcblx0XHRcdFx0cm93LmluaXRlZENhbGMgPSBmYWxzZTsgLy8gUmVzZXQgdGhlIGZsYWcgdG8gYWxsb3cgcmUtaW5pdGlhbGl6YXRpb25cclxuXHRcdFx0XHRyb3cuaW5pdENhbGMoKTsgLy8gUmUtaW5pdGlhbGl6ZSB0aGUgZm9ybXVsYSB3aXRoIG5ldyBmaWVsZCBuYW1lc1xyXG5cdFx0XHR9LCA1MCApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0dGhpcy5yZW1vdmUoKTtcclxuXHR0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcclxuXHR0aGlzLnJvb3ROb2RlLnJlbW92ZSgpO1xyXG59O1xyXG5cclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdENhbGMgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCB0aGlzLmluaXRlZENhbGMgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLmluaXRlZENhbGMgICAgID0gdHJ1ZTtcclxuXHRjb25zdCBbIG5vZGUgXSAgICAgID0gdGhpcy5wYXJlbnQubm9kZXM7XHJcblx0Y29uc3QgZm9ybXVsYVN0cmluZyA9IG5vZGUuZGF0YXNldD8uZm9ybXVsYTtcclxuXHJcblx0aWYgKCAhZm9ybXVsYVN0cmluZyB8fCAnZGVmYXVsdCcgPT09IHRoaXMucGFyZW50LmNhbGNUeXBlICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcyApO1xyXG5cclxuXHRmb3JtdWxhLm9ic2VydmUoIGZvcm11bGFTdHJpbmcgKTtcclxuXHRmb3JtdWxhLnNldFJlc3VsdCAgICAgICA9ICgpID0+IHtcclxuXHRcdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0XHR0aGlzLnBhcmVudC52YWx1ZS5ub3RpZnkoKTtcclxuXHR9O1xyXG5cdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHJldHVybiBpbnB1dC5jYWxjVmFsdWU7XHJcblx0fTtcclxuXHRmb3JtdWxhLmVtcHR5VmFsdWUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAwO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XHJcblx0dGhpcy5wYXJlbnQuc2lsZW5jZU5vdGlmeSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZVJvdzsiLCIvKipcclxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzUmVwZWF0ZXIoIG5vZGUgKSB7XHJcblx0cmV0dXJuIDEgPT09ICtub2RlLmRhdGFzZXQucmVwZWF0ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzUmVwZWF0ZXIgfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVJvdyBmcm9tICcuL09ic2VydmFibGVSb3cnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIElucHV0RGF0YSxcclxuXHQgICAgICBSZWFjdGl2ZVZhcixcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBSZXBlYXRlckRhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5idXR0b25Ob2RlICAgPSBmYWxzZTtcclxuXHR0aGlzLnRlbXBsYXRlICAgICA9IG51bGw7XHJcblx0dGhpcy5jb250YWluZXIgICAgPSBudWxsO1xyXG5cdHRoaXMubGFzdE9ic2VydmVkID0gbmV3IFJlYWN0aXZlVmFyKCk7XHJcblx0dGhpcy5sYXN0T2JzZXJ2ZWQubWFrZSgpO1xyXG5cclxuXHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZUludmFsaWQgPSAoKSA9PiB7fTtcclxuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VWYWxpZCAgID0gKCkgPT4ge307XHJcblx0fTtcclxuXHJcblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSAgICAgPSB0aGlzLm5vZGVzO1xyXG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIG5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnLFxyXG5cdFx0KSApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCAgICA9IG5ldyBPYnNlcnZhYmxlUm93KCB0aGlzICk7XHJcblx0XHRcdGN1cnJlbnQucm9vdE5vZGUgPSByb3c7XHJcblxyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQucHVzaCggY3VycmVudCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCApIHtcclxuXHRcdFx0Y3VycmVudEVsZW1lbnQub2JzZXJ2ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCApIHtcclxuXHRcdFx0Y3VycmVudEVsZW1lbnQuaW5pdENhbGMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnLFxyXG5cdFx0KTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBidXR0b24gb2YgcmVtb3ZlQnV0dG9ucyApIHtcclxuXHRcdFx0Y29uc3Qgcm93ID0gdGhpcy5jbG9zZXN0Um93KCBidXR0b24gKTtcclxuXHJcblx0XHRcdGlmICggIXJvdyApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHJvdy5yZW1vdmVNYW51YWxseSgpICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLmlzTWFudWFsQ291bnQgKSB7XHJcblx0XHRcdGlmICggISB0aGlzLmFkZEV2ZW50QXR0YWNoZWQgJiYgISB0aGlzLmJ1dHRvbk5vZGUuaGFzTGlzdGVuZXIpIHtcclxuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gdGhpcy5hZGROZXcoKSApO1xyXG5cdFx0XHRcdHRoaXMuYWRkRXZlbnRBdHRhY2hlZCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLnJvb3QuZ2V0SW5wdXQoIHRoaXMuaXRlbXNGaWVsZCApO1xyXG5cclxuXHRcdGlmICggIWlucHV0ICkge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG5cdFx0XHRjb25zb2xlLmVycm9yKFxyXG5cdFx0XHRcdGBKZXRGb3JtQnVpbGRlciBlcnJvcjogdW5kZWZpbmVkIGlucHV0IGJ5IG5hbWUgWyR7IHRoaXMuaXRlbXNGaWVsZCB9XWAsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQud2F0Y2goICgpID0+IHRoaXMucmVjYWxjdWxhdGVJdGVtcyggaW5wdXQgKSApO1xyXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCBpbnB1dCApO1xyXG5cdH07XHJcblx0dGhpcy5zZXROb2RlICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XHJcblxyXG5cdFx0dGhpcy5ub2RlcyAgICAgPSBbIG5vZGUgXTtcclxuXHRcdHRoaXMubmFtZSAgICAgID0gbm9kZS5kYXRhc2V0LmZpZWxkTmFtZTtcclxuXHRcdHRoaXMucmF3TmFtZSAgID0gdGhpcy5uYW1lO1xyXG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAncmVwZWF0ZXInO1xyXG5cclxuXHRcdHRoaXMubWFuYWdlSXRlbXMgPSBub2RlLmRhdGFzZXQ/Lm1hbmFnZUl0ZW1zIHx8ICdtYW51YWxseSc7XHJcblx0XHR0aGlzLmNhbGNUeXBlICAgID0gbm9kZS5kYXRhc2V0Py5jYWxjVHlwZSB8fCAnZGVmYXVsdCc7XHJcblx0XHR0aGlzLml0ZW1zRmllbGQgID0gbm9kZS5kYXRhc2V0Py5pdGVtc0ZpZWxkO1xyXG5cclxuXHRcdHRoaXMuaXNNYW51YWxDb3VudCA9IChcclxuXHRcdFx0IXRoaXMuaXRlbXNGaWVsZCB8fCAnbWFudWFsbHknID09PSB0aGlzLm1hbmFnZUl0ZW1zXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIGNhbiBiZSBudWxsXHJcblx0XHR0aGlzLmJ1dHRvbk5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fbmV3JyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLnRlbXBsYXRlICAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faW5pdGlhbCcsXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jb250YWluZXIgID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyxcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XHJcblx0fTtcclxuXHJcblx0dGhpcy5wb3B1bGF0ZUlubmVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dHMgPSBbXTtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3Qgcm93cyAgID0gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiByb3dzICkge1xyXG5cdFx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiByb3cuZ2V0SW5wdXRzKCkgKSB7XHJcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxyXG5cdFx0XHRcdGlmICggIWlucHV0LnJlcG9ydGluZz8ucmVzdHJpY3Rpb25zPy5sZW5ndGggKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW5wdXRzLnB1c2goIGlucHV0ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XHJcblx0XHRcdHJvdy5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGlzLnJlUXVlcnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggIXRoaXMudmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCByZXBlYXRlclJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnRcclxuXHJcblx0XHRyZXBlYXRlclJvd3MuZm9yRWFjaCggcm93ID0+IHtcclxuXHRcdFx0cm93LmdldElucHV0cygpLmZvckVhY2goIGlucHV0ID0+IHtcclxuXHRcdFx0XHRpbnB1dC5zZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdGlucHV0LmluaXROb3RpZnlWYWx1ZSgpO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9IClcclxuXHR9XHJcbn1cclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmJ1dHRvbk5vZGUgPSBudWxsO1xyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnRlbXBsYXRlICAgPSBudWxsO1xyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNvbnRhaW5lciAgPSBudWxsO1xyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLml0ZW1zRmllbGQgPSBmYWxzZTtcclxuLyoqXHJcbiAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cclxuICovXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUubGFzdE9ic2VydmVkID0gbnVsbDtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYWRkTmV3ID0gZnVuY3Rpb24gKCBjb3VudCA9IDEgKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW1xyXG5cdFx0Li4udGhpcy52YWx1ZT8uY3VycmVudCA/PyBbXSxcclxuXHRcdC4uLihcclxuXHRcdFx0bmV3IEFycmF5KCBjb3VudCApXHJcblx0XHQpLmZpbGwoIG51bGwgKS5tYXAoXHJcblx0XHRcdCgpID0+IG5ldyBPYnNlcnZhYmxlUm93KCB0aGlzICksXHJcblx0XHQpLFxyXG5cdF07XHJcbn07XHJcblxyXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZVJvdyApIHtcclxuXHRpZiAoICFBcnJheS5pc0FycmF5KCB0aGlzLnZhbHVlLmN1cnJlbnQgKSApIHtcclxuXHRcdHJldHVybiAtMTtcclxuXHR9XHJcblx0cmV0dXJuIHRoaXMudmFsdWUuY3VycmVudC5maW5kSW5kZXgoXHJcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgPT09IG9ic2VydmFibGVSb3csXHJcblx0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0VsZW1lbnR9XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW58T2JzZXJ2YWJsZVJvd31cclxuICovXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuY2xvc2VzdFJvdyA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRjb25zdCByb3dOb2RlID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKTtcclxuXHJcblx0aWYgKCAhcm93Tm9kZSApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XHJcblx0ICovXHJcblx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcclxuXHJcblx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XHJcblx0XHRpZiAoIHJvdy5yb290Tm9kZSA9PT0gcm93Tm9kZSApIHtcclxuXHRcdFx0cmV0dXJuIHJvdztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlUm93ICkge1xyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuY3VycmVudC5maWx0ZXIoXHJcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgIT09IG9ic2VydmFibGVSb3csXHJcblx0KTtcclxufTtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUucmVjYWxjdWxhdGVJdGVtcyA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0Y29uc3QgY3VycmVudENvdW50ID0gdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcclxuXHJcblx0Ly8gaWYgaXQgPCAwID09PiB3ZSBzaG91bGQgYWRkIHtkaWZmfSBuZXcgcmVwZWF0ZXIgaXRlbXNcclxuXHQvLyBpZiBpdCA+IDAgPT0+IHdlIHNob3VsZCByZW1vdmUgbGFzdCB7ZGlmZn0gaXRlbXNcclxuXHRjb25zdCBkaWZmID0gY3VycmVudENvdW50IC0gaW5wdXQuY2FsY1ZhbHVlO1xyXG5cclxuXHRpZiAoIDAgPT09IGRpZmYgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIGRpZmYgPCAwICkge1xyXG5cdFx0dGhpcy5hZGROZXcoIC0xICogZGlmZiApO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuY3VycmVudC5zbGljZSggMCwgLTEgKiBkaWZmICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckRhdGE7XHJcbiIsImZ1bmN0aW9uIGJpbmRSZXBlYXRlck5vdGlmeU9uY2UoIG5vZGUgKSB7XHJcblx0aWYgKCBub2RlLl9famZiTWFjcm9zUmVwZWF0ZXJCb3VuZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdG5vZGUuX19qZmJNYWNyb3NSZXBlYXRlckJvdW5kID0gdHJ1ZTtcclxuXHJcblx0Y29uc3QgZm9ybSAgID0gbm9kZS5jbG9zZXN0KCAnZm9ybS5qZXQtZm9ybS1idWlsZGVyJyApO1xyXG5cdGNvbnN0IGZvcm1JZCA9IGZvcm0/LmRhdGFzZXQ/LmZvcm1JZDtcclxuXHRjb25zdCBzdG9yZSAgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXI/LlsgZm9ybUlkIF07XHJcblxyXG5cdGNvbnN0IHJlcGVhdGVySW5wdXQgPSBzdG9yZT8uZ2V0SW5wdXQ/Liggbm9kZS5kYXRhc2V0LmZpZWxkTmFtZSApO1xyXG5cclxuXHRjb25zdCBub3RpZnkgPSAoKSA9PiB7XHJcblx0XHRyZXBlYXRlcklucHV0Py52YWx1ZT8ubm90aWZ5Py4oKTtcclxuXHR9O1xyXG5cclxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsIG5vdGlmeSwgdHJ1ZSApO1xyXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIG5vdGlmeSwgdHJ1ZSApO1xyXG5cclxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQnY2xpY2snLFxyXG5cdFx0KCBlICkgPT4ge1xyXG5cdFx0XHRjb25zdCByZW1vdmVCdG4gPSBlLnRhcmdldC5jbG9zZXN0Py4oICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93LXJlbW92ZScgKTtcclxuXHRcdFx0aWYgKCAhcmVtb3ZlQnRuIHx8ICFub2RlLmNvbnRhaW5zKCByZW1vdmVCdG4gKSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggbm90aWZ5ICk7XHJcblx0XHR9LFxyXG5cdFx0dHJ1ZVxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzKCBmaWVsZE5vZGUsIG1hY3JvcyApIHtcclxuXHRjb25zdCBpdGVtcyA9IGZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyApO1xyXG5cdGlmICggIWl0ZW1zICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWFjcm9zU2V0ID0gQXJyYXkuaXNBcnJheSggbWFjcm9zICkgJiYgbWFjcm9zLmxlbmd0aFxyXG5cdFx0PyBuZXcgU2V0KCBtYWNyb3MgKVxyXG5cdFx0OiBudWxsO1xyXG5cclxuXHRjb25zdCByb3dzICA9IGl0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1yZXBlYXRlci1yb3ddJyApO1xyXG5cdGNvbnN0IGxpbmVzID0gW107XHJcblxyXG5cdHJvd3MuZm9yRWFjaCggKCByb3dFbCApID0+IHtcclxuXHRcdGNvbnN0IHJvd1JlcGVhdGVyRmllbGQgPSByb3dFbC5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnICk7XHJcblx0XHRjb25zdCBmaWVsZHMgPSByb3dFbC5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnICk7XHJcblxyXG5cdFx0ZmllbGRzLmZvckVhY2goICggZWwgKSA9PiB7XHJcblx0XHRcdGlmICggZWwuY2xvc2VzdCggJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyApICE9PSByb3dSZXBlYXRlckZpZWxkICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIGVsLmRpc2FibGVkICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICggZWwudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbC50eXBlID09PSAncmFkaW8nICkgJiYgIWVsLmNoZWNrZWQgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBuYW1lICA9IGVsLmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCBlbC5uYW1lIHx8ICcnO1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IFN0cmluZyggZWwudmFsdWUgPz8gJycgKTtcclxuXHJcblx0XHRcdGlmICggbWFjcm9zU2V0ICYmICFtYWNyb3NTZXQuaGFzKCBuYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsaW5lcy5wdXNoKCBgJHsgbmFtZSB9OiAkeyB2YWx1ZSB9YCApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIGxpbmVzLmpvaW4oICc8YnIvPicgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ID0gZmFsc2UgKSB7XHJcblx0Y29uc3QgZmllbGROb2RlID0gJGZpZWxkTm9kZT8uWyAwIF07XHJcblx0aWYgKCAhZmllbGROb2RlIHx8IGZpZWxkTm9kZS5kYXRhc2V0Py5yZXBlYXRlciAhPT0gJzEnICkge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG5cclxuXHRiaW5kUmVwZWF0ZXJOb3RpZnlPbmNlKCBmaWVsZE5vZGUgKTtcclxuXHJcblx0Y29uc3QgaG9zdCA9ICRtYWNyb0hvc3Q/LlsgMCBdO1xyXG5cdGlmICggIWhvc3QgKSB7XHJcblx0XHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXMoIGZpZWxkTm9kZSwgbnVsbCApO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc291cmNlID0gaG9zdC5fX2pmYk1hY3JvVGVtcGxhdGU7XHJcblx0aWYgKCAhc291cmNlICkge1xyXG5cdFx0cmV0dXJuIGNvbGxlY3RSZXBlYXRlckxpbmVzKCBmaWVsZE5vZGUsIG51bGwgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoIFN0cmluZyggc291cmNlICksICd0ZXh0L2h0bWwnICk7XHJcblxyXG5cdGNvbnN0IG1hY3JvcyA9IEFycmF5LmZyb20oIGRvYy5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLW1hY3JvXScgKSApXHJcblx0XHQubWFwKCAoIGVsICkgPT4gZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1qZmItbWFjcm8nICkgKVxyXG5cdFx0LmZpbHRlciggQm9vbGVhbiApO1xyXG5cclxuXHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXMoIGZpZWxkTm9kZSwgbWFjcm9zICk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmxldCB7XHJcblx0ICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXHJcblx0ICAgIFJlc3RyaWN0aW9uLFxyXG4gICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5BZHZhbmNlZFJlc3RyaWN0aW9uID0gQWR2YW5jZWRSZXN0cmljdGlvbiB8fCBSZXN0cmljdGlvbjtcclxuXHJcbmZ1bmN0aW9uIFJlcGVhdGVyUmVzdHJpY3Rpb24oKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fTtcclxufVxyXG5cclxuUmVwZWF0ZXJSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEJhc2VTaWduYWwsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1JlcGVhdGVyRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuZnVuY3Rpb24gU2lnbmFsUmVwZWF0ZXIoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICggcHJldlZhbHVlID0gW10gKSB7XHJcblx0XHRjb25zdCB7IGN1cnJlbnQgfSAgICAgPSB0aGlzLmlucHV0LnZhbHVlO1xyXG5cdFx0Y29uc3QgaGFzRGVsZXRlZEl0ZW1zID0gKFxyXG5cdFx0XHRwcmV2VmFsdWU/Lmxlbmd0aCAmJiBwcmV2VmFsdWUubGVuZ3RoID4gY3VycmVudC5sZW5ndGhcclxuXHRcdCk7XHJcblxyXG5cdFx0aWYgKCBoYXNEZWxldGVkSXRlbXMgKSB7XHJcblx0XHRcdHRoaXMucmVtb3ZlUHJldkl0ZW1zKCBwcmV2VmFsdWUgKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBjb25zdCBpbmRleCBvZiBPYmplY3Qua2V5cyggY3VycmVudCApICkge1xyXG5cdFx0XHRpZiAoICFjdXJyZW50Lmhhc093blByb3BlcnR5KCBpbmRleCApICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucnVuSXRlbSggK2luZGV4LCBoYXNEZWxldGVkSXRlbXMgKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgY2FsY1ZhbHVlID0gMDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyggY3VycmVudCApICkge1xyXG5cdFx0XHRyb3cuaW5pdENhbGMoKTtcclxuXHRcdFx0Y2FsY1ZhbHVlICs9IHJvdy5jYWxjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gY2FsY1ZhbHVlO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGN1cnJlbnRJbmRleCAgICB7TnVtYmVyfVxyXG5cdCAqIEBwYXJhbSBzaG91bGRSZU9ic2VydmVcclxuXHQgKi9cclxuXHR0aGlzLnJ1bkl0ZW0gPSBmdW5jdGlvbiAoIGN1cnJlbnRJbmRleCwgc2hvdWxkUmVPYnNlcnZlID0gZmFsc2UgKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93fVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50WyBjdXJyZW50SW5kZXggXTtcclxuXHJcblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcclxuXHRcdFx0aWYgKCAhc2hvdWxkUmVPYnNlcnZlICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0b2JzZXJ2YWJsZS5yb290Tm9kZS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XHJcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnRlbXBsYXRlLmlubmVySFRNTC50cmltKCk7XHJcblxyXG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MLnJlcGxhY2UoXHJcblx0XHRcdC9fX2lfXy9nLFxyXG5cdFx0XHRjdXJyZW50SW5kZXgsXHJcblx0XHQpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVzZXQgaW5wdXQgdmFsdWVzIGZvciBhIG5ldyByb3dcclxuXHRcdCAqXHJcblx0XHQgKiBAc2luY2UgMy40LjdcclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgbmV3Um93ID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdGNvbnN0IGlucHV0cyA9IG5ld1Jvdy5xdWVyeVNlbGVjdG9yQWxsKCBcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBvdXRwdXRcIiApO1xyXG5cclxuXHRcdGlucHV0cy5mb3JFYWNoKCAoIGlucHV0ICkgPT4ge1xyXG5cdFx0XHRzd2l0Y2ggKCBpbnB1dC50eXBlICkge1xyXG5cdFx0XHRcdGNhc2UgXCJjaGVja2JveFwiOlxyXG5cdFx0XHRcdGNhc2UgXCJyYWRpb1wiOlxyXG5cdFx0XHRcdFx0Ly8gUHJlc2VydmUgZGVmYXVsdCBjaGVja2VkIHN0YXRlIGZvciBjaGVja2JveC9yYWRpbyBmaWVsZHNcclxuXHRcdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBpbnB1dCBoYXMgZGVmYXVsdENoZWNrZWQgYXR0cmlidXRlIChmcm9tIEhUTUwpXHJcblx0XHRcdFx0XHRpbnB1dC5jaGVja2VkID0gaW5wdXQuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwic2VsZWN0LW9uZVwiOlxyXG5cdFx0XHRcdGNhc2UgXCJzZWxlY3QtbXVsdGlwbGVcIjpcclxuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbnMgPSBpbnB1dC5xdWVyeVNlbGVjdG9yQWxsKCAnb3B0aW9uJyApO1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5mb3JFYWNoKCBvcHRpb24gPT4ge1xyXG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24uZGVmYXVsdFNlbGVjdGVkIHx8IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcImZpbGVcIjpcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gXCJcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJyYW5nZVwiOlxyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC5kZWZhdWx0VmFsdWUgfHwgXCJcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LmRlZmF1bHRWYWx1ZSB8fCBcIlwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuZGF0YXNldC5pbmRleCA9ICcnICsgY3VycmVudEluZGV4O1xyXG5cclxuXHRcdHRoaXMuaW5wdXQuY29udGFpbmVyLmFwcGVuZCggbmV3Um93ICk7XHJcblxyXG5cdFx0Y29uc3QgYXBwZW5kZWQgPSB0aGlzLmlucHV0LmNvbnRhaW5lci5sYXN0Q2hpbGQ7XHJcblxyXG5cdFx0aWYgKCB0aGlzLmlucHV0LmlzTWFudWFsQ291bnQgKSB7XHJcblx0XHRcdGFwcGVuZGVkLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnLFxyXG5cdFx0XHQpLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdFx0J2NsaWNrJyxcclxuXHRcdFx0XHQoKSA9PiBvYnNlcnZhYmxlLnJlbW92ZU1hbnVhbGx5KCksXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XHJcblx0XHRcdG9ic2VydmFibGUucmVPYnNlcnZlKCBhcHBlbmRlZCApO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBhcHBlbmRlZCApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucmVtb3ZlUHJldkl0ZW1zID0gZnVuY3Rpb24gKCBwcmV2Um93cyApIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBwcmV2Um93IG9mIHByZXZSb3dzICkge1xyXG5cdFx0XHRpZiAoICFjdXJyZW50LmluY2x1ZGVzKCBwcmV2Um93ICkgKSB7XHJcblx0XHRcdFx0cHJldlJvdy5yZW1vdmVNYW51YWxseSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsUmVwZWF0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlcGVhdGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFJlcGVhdGVyRGF0YSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFNpZ25hbFJlcGVhdGVyIGZyb20gJy4vc2lnbmFsJztcclxuaW1wb3J0IFJlcGVhdGVyUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbic7XHJcbmltcG9ydCB7IHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlIH0gZnJvbSAnLi9yZXBlYXRlci1tYWNyb3MnO1xyXG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgUmVwZWF0ZXJEYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmVwZWF0ZXIsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pO1xyXG5cclxuY29uc3QgYWRkUmVzdHJpY3Rpb24gPSAoIHJlc3RyaWN0aW9ucyApID0+IHtcclxuXHRyZXN0cmljdGlvbnMucHVzaChcclxuXHRcdFJlcGVhdGVyUmVzdHJpY3Rpb24sXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHJlc3RyaWN0aW9ucztcclxufTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0JyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0YWRkUmVzdHJpY3Rpb24sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcclxuXHRhZGRSZXN0cmljdGlvbixcclxuKTtcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLm11bHRpc3RlcC5wYWdlLm9ic2VydmVkLmlucHV0JyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfFJlcGVhdGVyRGF0YX1cclxuXHQgKiBAcGFyYW0gcGFnZVN0YXRlIHtQYWdlU3RhdGV9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gKCBpbnB1dCwgcGFnZVN0YXRlICkge1xyXG5cdFx0aWYgKCAncmVwZWF0ZXInICE9PSBpbnB1dC5pbnB1dFR5cGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBpbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdO1xyXG5cclxuXHRcdGlucHV0LndhdGNoKCAoKSA9PiBwYWdlU3RhdGUudXBkYXRlU3RhdGUoKSApO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIGN1cnJlbnRJbnB1dCB7SW5wdXREYXRhfVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBvYnNlcnZlSW5uZXJJbnB1dCggY3VycmVudElucHV0ICkge1xyXG5cdFx0XHRwYWdlU3RhdGUuaGFuZGxlSW5wdXRFbnRlciggY3VycmVudElucHV0ICk7XHJcblxyXG5cdFx0XHRpZiAoICFjdXJyZW50SW5wdXQucmVwb3J0aW5nPy5yZXN0cmljdGlvbnM/Lmxlbmd0aCApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGN1cnJlbnRJbnB1dC53YXRjaFZhbGlkaXR5KCAoKSA9PiBwYWdlU3RhdGUudXBkYXRlU3RhdGUoKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IG9ic2VydmFibGVSb3cgb2YgY3VycmVudCApIHtcclxuXHRcdFx0b2JzZXJ2YWJsZVJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKCBvYnNlcnZlSW5uZXJJbnB1dCApO1xyXG5cdFx0fVxyXG5cdFx0aW5wdXQubGFzdE9ic2VydmVkLndhdGNoKCAoKSA9PiB7XHJcblx0XHRcdGlucHV0Lmxhc3RPYnNlcnZlZC5jdXJyZW50LmdldElucHV0cygpLmZvckVhY2goIG9ic2VydmVJbm5lcklucHV0ICk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXHJcblx0KCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ICkgPT5cclxuXHRcdHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ICksXHJcbik7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9