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
function collectRepeaterLines(fieldNode, macros, template) {
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
    let rowNode = template.cloneNode(true);
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
      rowNode.querySelector(`[data-jfb-macro="${name}"]`).textContent = value;
    });
    lines.push(rowNode.body.innerHTML);
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
    return collectRepeaterLines(fieldNode, null, null);
  }
  const source = host.__jfbMacroTemplate;
  if (!source) {
    return collectRepeaterLines(fieldNode, null, null);
  }
  const doc = new DOMParser().parseFromString(String(source), 'text/html');
  const macros = Array.from(doc.querySelectorAll('[data-jfb-macro]')).map(el => el.getAttribute('data-jfb-macro')).filter(Boolean);
  return collectRepeaterLines(fieldNode, macros, doc);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFNQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL09ic2VydmFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2luZGV4LnBjc3MiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvcmVwZWF0ZXItbWFjcm9zLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3Jlc3RyaWN0aW9ucy9SZXBlYXRlclJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG5cdCAgICAgIE9ic2VydmFibGUsXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIE9ic2VydmFibGVSb3coIHBhcmVudCApIHtcblx0T2JzZXJ2YWJsZS5jYWxsKCB0aGlzLCBwYXJlbnQgKTtcblxuXHQvLyBCeSBkZWZhdWx0IHdlIHJldHVybiB0aGUgbnVtYmVyIG9mIHJlcGVhdGVyIHJvd3Ncblx0dGhpcy5jYWxjICAgICAgID0gMTtcblx0dGhpcy5pbml0ZWRDYWxjID0gZmFsc2U7XG59XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKCBPYnNlcnZhYmxlLnByb3RvdHlwZSApO1xuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuY2FsYyAgICAgICA9IDE7XG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5pbml0ZWRDYWxjID0gZmFsc2U7XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLnJlT2JzZXJ2ZSA9IGZ1bmN0aW9uICggcm9vdCApIHtcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XG5cblx0Y29uc3QgcHJldlZhbHVlcyA9IHsgLi4udGhpcy52YWx1ZS5jdXJyZW50IH07XG5cdHRoaXMuZGF0YUlucHV0cyAgPSB7fTtcblx0T2JzZXJ2YWJsZS5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzLCByb290ICk7XG5cblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gcHJldlZhbHVlcztcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoIHJvb3QgKSB7XG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xuXG5cdHRoaXMucGFyZW50Lmxhc3RPYnNlcnZlZC5jdXJyZW50ID0gdGhpcztcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLnJlbW92ZU1hbnVhbGx5ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuX2lzUmVtb3ZpbmcgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5faXNSZW1vdmluZyA9IHRydWU7XG5cblx0Y29uc3Qgb3RoZXJSb3dzID0gdGhpcy5wYXJlbnQudmFsdWUuY3VycmVudC5maWx0ZXIoIHJvdyA9PiByb3cgIT09IHRoaXMgJiYgIXJvdy5faXNSZW1vdmluZyApO1xuXG5cdGNvbnN0IG90aGVyVmFsdWVzID0gb3RoZXJSb3dzLm1hcCggcm93ID0+IHtcblx0XHQvLyBUcnkgdG8gZ2V0IHZhbHVlcyBmcm9tIGRhdGFJbnB1dHMgaWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eVxuXHRcdGNvbnN0IGRlZXBDb3B5VmFsdWVzID0ge307XG5cblx0XHQvLyBGaXJzdCwgdHJ5IGZyb20gdmFsdWUuY3VycmVudFxuXHRcdGZvciAoIGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyggcm93LnZhbHVlLmN1cnJlbnQgfHwge30gKSApIHtcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IFsuLi52YWx1ZV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eSwgdHJ5IHRvIGdldCBmcm9tIGRhdGFJbnB1dHNcblx0XHRpZiAoIDAgPT09IE9iamVjdC5rZXlzKCBkZWVwQ29weVZhbHVlcyApLmxlbmd0aCAmJiByb3cuZGF0YUlucHV0cyApIHtcblx0XHRcdGZvciAoIGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyggcm93LmRhdGFJbnB1dHMgKSApIHtcblx0XHRcdFx0aWYgKCBpbnB1dCAmJiBpbnB1dC5nZXRWYWx1ZSApIHtcblx0XHRcdFx0XHRjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQuZ2V0VmFsdWUoKTtcblx0XHRcdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGlucHV0VmFsdWUgKSApIHtcblx0XHRcdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4uaW5wdXRWYWx1ZV07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBpbnB1dFZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRub2RlOiByb3cucm9vdE5vZGUsXG5cdFx0XHR2YWx1ZXM6IGRlZXBDb3B5VmFsdWVzXG5cdFx0fTtcblx0fSApO1xuXG5cdG90aGVyUm93cy5mb3JFYWNoKCAoIHJvdywgaW5kZXggKSA9PiB7XG5cdFx0aWYgKCBvdGhlclZhbHVlc1tpbmRleF0gKSB7XG5cdFx0XHRjb25zdCB2YWx1ZXNUb1Jlc3RvcmUgPSBvdGhlclZhbHVlc1tpbmRleF0udmFsdWVzO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlc1RvUmVzdG9yZSApICkge1xuXHRcdFx0XHRyb3cudmFsdWUuY3VycmVudFtrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0Y29uc3QgaW5wdXRzID0gcm93LmdldElucHV0cygpO1xuXG5cdFx0XHRcdGlucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XG5cdFx0XHRcdFx0aWYgKCBpbnB1dC51cGRhdGVQcmV2aWV3cyAmJiB0eXBlb2YgaW5wdXQudXBkYXRlUHJldmlld3MgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHRpbnB1dC51cGRhdGVQcmV2aWV3cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFJlaW5pdGlhbGl6ZSByb3cgZm9ybXVsYSBhZnRlciByZWluZGV4aW5nXG5cdFx0XHRcdHJvdy5pbml0ZWRDYWxjID0gZmFsc2U7IC8vIFJlc2V0IHRoZSBmbGFnIHRvIGFsbG93IHJlLWluaXRpYWxpemF0aW9uXG5cdFx0XHRcdHJvdy5pbml0Q2FsYygpOyAvLyBSZS1pbml0aWFsaXplIHRoZSBmb3JtdWxhIHdpdGggbmV3IGZpZWxkIG5hbWVzXG5cdFx0XHR9LCA1MCApO1xuXHRcdH1cblx0fSApO1xuXG5cdHRoaXMucmVtb3ZlKCk7XG5cdHRoaXMucGFyZW50LnJlbW92ZSggdGhpcyApO1xuXHR0aGlzLnJvb3ROb2RlLnJlbW92ZSgpO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdENhbGMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggdGhpcy5pbml0ZWRDYWxjICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuaW5pdGVkQ2FsYyAgICAgPSB0cnVlO1xuXHRjb25zdCBbIG5vZGUgXSAgICAgID0gdGhpcy5wYXJlbnQubm9kZXM7XG5cdGNvbnN0IGZvcm11bGFTdHJpbmcgPSBub2RlLmRhdGFzZXQ/LmZvcm11bGE7XG5cblx0aWYgKCAhZm9ybXVsYVN0cmluZyB8fCAnZGVmYXVsdCcgPT09IHRoaXMucGFyZW50LmNhbGNUeXBlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMgKTtcblxuXHRmb3JtdWxhLm9ic2VydmUoIGZvcm11bGFTdHJpbmcgKTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoKSA9PiB7XG5cdFx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHR0aGlzLnBhcmVudC52YWx1ZS5ub3RpZnkoKTtcblx0fTtcblx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiBpbnB1dC5jYWxjVmFsdWU7XG5cdH07XG5cdGZvcm11bGEuZW1wdHlWYWx1ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAwO1xuXHR9O1xuXG5cdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdHRoaXMucGFyZW50LnNpbGVuY2VOb3RpZnkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGVSb3c7IiwiLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNSZXBlYXRlciggbm9kZSApIHtcblx0cmV0dXJuIDEgPT09ICtub2RlLmRhdGFzZXQucmVwZWF0ZXI7XG59XG5cbmV4cG9ydCB7IGlzUmVwZWF0ZXIgfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IE9ic2VydmFibGVSb3cgZnJvbSAnLi9PYnNlcnZhYmxlUm93JztcblxuY29uc3Qge1xuXHQgICAgICBJbnB1dERhdGEsXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBSZXBlYXRlckRhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5idXR0b25Ob2RlICAgPSBmYWxzZTtcblx0dGhpcy50ZW1wbGF0ZSAgICAgPSBudWxsO1xuXHR0aGlzLmNvbnRhaW5lciAgICA9IG51bGw7XG5cdHRoaXMubGFzdE9ic2VydmVkID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMubGFzdE9ic2VydmVkLm1ha2UoKTtcblxuXHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VJbnZhbGlkID0gKCkgPT4ge307XG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcblx0fTtcblxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gICAgID0gdGhpcy5ub2Rlcztcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycsXG5cdFx0KSApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgICAgPSBuZXcgT2JzZXJ2YWJsZVJvdyggdGhpcyApO1xuXHRcdFx0Y3VycmVudC5yb290Tm9kZSA9IHJvdztcblxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50LnB1c2goIGN1cnJlbnQgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBjdXJyZW50RWxlbWVudCBvZiB0aGlzLnZhbHVlLmN1cnJlbnQgKSB7XG5cdFx0XHRjdXJyZW50RWxlbWVudC5vYnNlcnZlKCk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xuXHRcdFx0Y3VycmVudEVsZW1lbnQuaW5pdENhbGMoKTtcblx0XHR9XG5cblx0XHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3QgYnV0dG9uIG9mIHJlbW92ZUJ1dHRvbnMgKSB7XG5cdFx0XHRjb25zdCByb3cgPSB0aGlzLmNsb3Nlc3RSb3coIGJ1dHRvbiApO1xuXG5cdFx0XHRpZiAoICFyb3cgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gcm93LnJlbW92ZU1hbnVhbGx5KCkgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuaXNNYW51YWxDb3VudCApIHtcblx0XHRcdGlmICggISB0aGlzLmFkZEV2ZW50QXR0YWNoZWQgJiYgISB0aGlzLmJ1dHRvbk5vZGUuaGFzTGlzdGVuZXIpIHtcblx0XHRcdFx0dGhpcy5idXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHRoaXMuYWRkTmV3KCkgKTtcblx0XHRcdFx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucm9vdC5nZXRJbnB1dCggdGhpcy5pdGVtc0ZpZWxkICk7XG5cblx0XHRpZiAoICFpbnB1dCApIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRgSmV0Rm9ybUJ1aWxkZXIgZXJyb3I6IHVuZGVmaW5lZCBpbnB1dCBieSBuYW1lIFskeyB0aGlzLml0ZW1zRmllbGQgfV1gLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlucHV0LndhdGNoKCAoKSA9PiB0aGlzLnJlY2FsY3VsYXRlSXRlbXMoIGlucHV0ICkgKTtcblx0XHR0aGlzLnJlY2FsY3VsYXRlSXRlbXMoIGlucHV0ICk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblxuXHRcdHRoaXMubm9kZXMgICAgID0gWyBub2RlIF07XG5cdFx0dGhpcy5uYW1lICAgICAgPSBub2RlLmRhdGFzZXQuZmllbGROYW1lO1xuXHRcdHRoaXMucmF3TmFtZSAgID0gdGhpcy5uYW1lO1xuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ3JlcGVhdGVyJztcblxuXHRcdHRoaXMubWFuYWdlSXRlbXMgPSBub2RlLmRhdGFzZXQ/Lm1hbmFnZUl0ZW1zIHx8ICdtYW51YWxseSc7XG5cdFx0dGhpcy5jYWxjVHlwZSAgICA9IG5vZGUuZGF0YXNldD8uY2FsY1R5cGUgfHwgJ2RlZmF1bHQnO1xuXHRcdHRoaXMuaXRlbXNGaWVsZCAgPSBub2RlLmRhdGFzZXQ/Lml0ZW1zRmllbGQ7XG5cblx0XHR0aGlzLmlzTWFudWFsQ291bnQgPSAoXG5cdFx0XHQhdGhpcy5pdGVtc0ZpZWxkIHx8ICdtYW51YWxseScgPT09IHRoaXMubWFuYWdlSXRlbXNcblx0XHQpO1xuXG5cdFx0Ly8gY2FuIGJlIG51bGxcblx0XHR0aGlzLmJ1dHRvbk5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX25ldycsXG5cdFx0KTtcblx0XHR0aGlzLnRlbXBsYXRlICAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2luaXRpYWwnLFxuXHRcdCk7XG5cdFx0dGhpcy5jb250YWluZXIgID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtcycsXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XG5cdH07XG5cblx0dGhpcy5wb3B1bGF0ZUlubmVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICggIXRoaXMudmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0cyA9IFtdO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3Qgcm93cyAgID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiByb3cuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0aWYgKCAhaW5wdXQucmVwb3J0aW5nPy5yZXN0cmljdGlvbnM/Lmxlbmd0aCApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dHMucHVzaCggaW5wdXQgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9O1xuXG5cdHRoaXMub25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XG5cdFx0XHRyb3cucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICggIXRoaXMudmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3QgcmVwZWF0ZXJSb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50XG5cblx0XHRyZXBlYXRlclJvd3MuZm9yRWFjaCggcm93ID0+IHtcblx0XHRcdHJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKCBpbnB1dCA9PiB7XG5cdFx0XHRcdGlucHV0LnNldFZhbHVlKCk7XG5cdFx0XHRcdGlucHV0LmluaXROb3RpZnlWYWx1ZSgpO1xuXHRcdFx0fSApO1xuXHRcdH0gKVxuXHR9XG59XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYnV0dG9uTm9kZSA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnRlbXBsYXRlICAgPSBudWxsO1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5jb250YWluZXIgID0gbnVsbDtcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuaXRlbXNGaWVsZCA9IGZhbHNlO1xuLyoqXG4gKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG4gKi9cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUubGFzdE9ic2VydmVkID0gbnVsbDtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5hZGROZXcgPSBmdW5jdGlvbiAoIGNvdW50ID0gMSApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW1xuXHRcdC4uLnRoaXMudmFsdWU/LmN1cnJlbnQgPz8gW10sXG5cdFx0Li4uKFxuXHRcdFx0bmV3IEFycmF5KCBjb3VudCApXG5cdFx0KS5maWxsKCBudWxsICkubWFwKFxuXHRcdFx0KCkgPT4gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKSxcblx0XHQpLFxuXHRdO1xufTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5maW5kSW5kZXggPSBmdW5jdGlvbiAoIG9ic2VydmFibGVSb3cgKSB7XG5cdGlmICggIUFycmF5LmlzQXJyYXkoIHRoaXMudmFsdWUuY3VycmVudCApICkge1xuXHRcdHJldHVybiAtMTtcblx0fVxuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50LmZpbmRJbmRleChcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgPT09IG9ic2VydmFibGVSb3csXG5cdCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7RWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW58T2JzZXJ2YWJsZVJvd31cbiAqL1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5jbG9zZXN0Um93ID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRjb25zdCByb3dOb2RlID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKTtcblxuXHRpZiAoICFyb3dOb2RlICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHQgKi9cblx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcblx0XHRpZiAoIHJvdy5yb290Tm9kZSA9PT0gcm93Tm9kZSApIHtcblx0XHRcdHJldHVybiByb3c7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIG9ic2VydmFibGVSb3cgKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuY3VycmVudC5maWx0ZXIoXG5cdFx0Y3VycmVudCA9PiBjdXJyZW50ICE9PSBvYnNlcnZhYmxlUm93LFxuXHQpO1xufTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZWNhbGN1bGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0Y29uc3QgY3VycmVudENvdW50ID0gdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHQvLyBpZiBpdCA8IDAgPT0+IHdlIHNob3VsZCBhZGQge2RpZmZ9IG5ldyByZXBlYXRlciBpdGVtc1xuXHQvLyBpZiBpdCA+IDAgPT0+IHdlIHNob3VsZCByZW1vdmUgbGFzdCB7ZGlmZn0gaXRlbXNcblx0Y29uc3QgZGlmZiA9IGN1cnJlbnRDb3VudCAtIGlucHV0LmNhbGNWYWx1ZTtcblxuXHRpZiAoIDAgPT09IGRpZmYgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCBkaWZmIDwgMCApIHtcblx0XHR0aGlzLmFkZE5ldyggLTEgKiBkaWZmICk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuc2xpY2UoIDAsIC0xICogZGlmZiApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJEYXRhO1xuIiwiZnVuY3Rpb24gYmluZFJlcGVhdGVyTm90aWZ5T25jZShub2RlKSB7XG5cdGlmIChub2RlLl9famZiTWFjcm9zUmVwZWF0ZXJCb3VuZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGUuX19qZmJNYWNyb3NSZXBlYXRlckJvdW5kID0gdHJ1ZTtcblxuXHRjb25zdCBmb3JtID0gbm9kZS5jbG9zZXN0KCdmb3JtLmpldC1mb3JtLWJ1aWxkZXInKTtcblx0Y29uc3QgZm9ybUlkID0gZm9ybT8uZGF0YXNldD8uZm9ybUlkO1xuXHRjb25zdCBzdG9yZSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlcj8uW2Zvcm1JZF07XG5cblx0Y29uc3QgcmVwZWF0ZXJJbnB1dCA9IHN0b3JlPy5nZXRJbnB1dD8uKG5vZGUuZGF0YXNldC5maWVsZE5hbWUpO1xuXG5cdGNvbnN0IG5vdGlmeSA9ICgpID0+IHtcblx0XHRyZXBlYXRlcklucHV0Py52YWx1ZT8ubm90aWZ5Py4oKTtcblx0fTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgbm90aWZ5LCB0cnVlKTtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBub3RpZnksIHRydWUpO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnY2xpY2snLFxuXHRcdChlKSA9PiB7XG5cdFx0XHRjb25zdCByZW1vdmVCdG4gPSBlLnRhcmdldC5jbG9zZXN0Py4oJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3ctcmVtb3ZlJyk7XG5cdFx0XHRpZiAoIXJlbW92ZUJ0biB8fCAhbm9kZS5jb250YWlucyhyZW1vdmVCdG4pKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKG5vdGlmeSk7XG5cdFx0fSxcblx0XHR0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzKGZpZWxkTm9kZSwgbWFjcm9zLCB0ZW1wbGF0ZSkge1xuXHRjb25zdCBpdGVtcyA9IGZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yKCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnKTtcblx0aWYgKCFpdGVtcykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IG1hY3Jvc1NldCA9IEFycmF5LmlzQXJyYXkobWFjcm9zKSAmJiBtYWNyb3MubGVuZ3RoXG5cdFx0PyBuZXcgU2V0KG1hY3Jvcylcblx0XHQ6IG51bGw7XG5cblx0Y29uc3Qgcm93cyA9IGl0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJlcGVhdGVyLXJvd10nKTtcblx0Y29uc3QgbGluZXMgPSBbXTtcblxuXHRyb3dzLmZvckVhY2goKHJvd0VsKSA9PiB7XG5cdFx0Y29uc3Qgcm93UmVwZWF0ZXJGaWVsZCA9IHJvd0VsLmNsb3Nlc3QoJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyk7XG5cdFx0Y29uc3QgZmllbGRzID0gcm93RWwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKTtcblx0XHRsZXQgcm93Tm9kZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuXHRcdGZpZWxkcy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0aWYgKGVsLmNsb3Nlc3QoJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJykgIT09IHJvd1JlcGVhdGVyRmllbGQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsLmRpc2FibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICgoZWwudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbC50eXBlID09PSAncmFkaW8nKSAmJiAhZWwuY2hlY2tlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBlbC5kYXRhc2V0Py5maWVsZE5hbWUgfHwgZWwubmFtZSB8fCAnJztcblx0XHRcdGNvbnN0IHZhbHVlID0gU3RyaW5nKGVsLnZhbHVlID8/ICcnKTtcblxuXHRcdFx0aWYgKG1hY3Jvc1NldCAmJiAhbWFjcm9zU2V0LmhhcyhuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJvd05vZGUucXVlcnlTZWxlY3RvcihgW2RhdGEtamZiLW1hY3JvPVwiJHtuYW1lfVwiXWApLnRleHRDb250ZW50ID0gdmFsdWU7XG5cdFx0fSk7XG5cblx0XHRsaW5lcy5wdXNoKHJvd05vZGUuYm9keS5pbm5lckhUTUwpO1xuXHR9KTtcblxuXHRyZXR1cm4gbGluZXMuam9pbignPGJyLz4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgPSBmYWxzZSkge1xuXHRjb25zdCBmaWVsZE5vZGUgPSAkZmllbGROb2RlPy5bMF07XG5cblx0aWYgKCFmaWVsZE5vZGUgfHwgZmllbGROb2RlLmRhdGFzZXQ/LnJlcGVhdGVyICE9PSAnMScpIHtcblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdGJpbmRSZXBlYXRlck5vdGlmeU9uY2UoZmllbGROb2RlKTtcblxuXHRjb25zdCBob3N0ID0gJG1hY3JvSG9zdD8uWzBdO1xuXHRpZiAoIWhvc3QpIHtcblx0XHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXMoZmllbGROb2RlLCBudWxsLCBudWxsKTtcblx0fVxuXG5cdGNvbnN0IHNvdXJjZSA9IGhvc3QuX19qZmJNYWNyb1RlbXBsYXRlO1xuXHRpZiAoIXNvdXJjZSkge1xuXHRcdHJldHVybiBjb2xsZWN0UmVwZWF0ZXJMaW5lcyhmaWVsZE5vZGUsIG51bGwsIG51bGwpO1xuXHR9XG5cblx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhTdHJpbmcoc291cmNlKSwgJ3RleHQvaHRtbCcpO1xuXG5cdGNvbnN0IG1hY3JvcyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpmYi1tYWNyb10nKSlcblx0XHQubWFwKChlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWpmYi1tYWNybycpKVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0cmV0dXJuIGNvbGxlY3RSZXBlYXRlckxpbmVzKGZpZWxkTm9kZSwgbWFjcm9zLCBkb2MpO1xufVxuXG5cbiIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5sZXQge1xuXHQgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcblx0ICAgIFJlc3RyaWN0aW9uLFxuICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5BZHZhbmNlZFJlc3RyaWN0aW9uID0gQWR2YW5jZWRSZXN0cmljdGlvbiB8fCBSZXN0cmljdGlvbjtcblxuZnVuY3Rpb24gUmVwZWF0ZXJSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnJztcblx0fTtcbn1cblxuUmVwZWF0ZXJSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclJlc3RyaWN0aW9uOyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlcGVhdGVyRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gU2lnbmFsUmVwZWF0ZXIoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICggcHJldlZhbHVlID0gW10gKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gICAgID0gdGhpcy5pbnB1dC52YWx1ZTtcblx0XHRjb25zdCBoYXNEZWxldGVkSXRlbXMgPSAoXG5cdFx0XHRwcmV2VmFsdWU/Lmxlbmd0aCAmJiBwcmV2VmFsdWUubGVuZ3RoID4gY3VycmVudC5sZW5ndGhcblx0XHQpO1xuXG5cdFx0aWYgKCBoYXNEZWxldGVkSXRlbXMgKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVByZXZJdGVtcyggcHJldlZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgaW5kZXggb2YgT2JqZWN0LmtleXMoIGN1cnJlbnQgKSApIHtcblx0XHRcdGlmICggIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ydW5JdGVtKCAraW5kZXgsIGhhc0RlbGV0ZWRJdGVtcyApO1xuXHRcdH1cblxuXHRcdGxldCBjYWxjVmFsdWUgPSAwO1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoIGN1cnJlbnQgKSApIHtcblx0XHRcdHJvdy5pbml0Q2FsYygpO1xuXHRcdFx0Y2FsY1ZhbHVlICs9IHJvdy5jYWxjO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gY2FsY1ZhbHVlO1xuXHR9O1xuXHQvKipcblx0ICogQHBhcmFtIGN1cnJlbnRJbmRleCAgICB7TnVtYmVyfVxuXHQgKiBAcGFyYW0gc2hvdWxkUmVPYnNlcnZlXG5cdCAqL1xuXHR0aGlzLnJ1bkl0ZW0gPSBmdW5jdGlvbiAoIGN1cnJlbnRJbmRleCwgc2hvdWxkUmVPYnNlcnZlID0gZmFsc2UgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3d9XG5cdFx0ICovXG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudFsgY3VycmVudEluZGV4IF07XG5cblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcblx0XHRcdGlmICggIXNob3VsZFJlT2JzZXJ2ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRvYnNlcnZhYmxlLnJvb3ROb2RlLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnRlbXBsYXRlLmlubmVySFRNTC50cmltKCk7XG5cblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUwucmVwbGFjZShcblx0XHRcdC9fX2lfXy9nLFxuXHRcdFx0Y3VycmVudEluZGV4LFxuXHRcdCk7XG5cblx0XHQvKipcblx0XHQgKiBSZXNldCBpbnB1dCB2YWx1ZXMgZm9yIGEgbmV3IHJvd1xuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDMuNC43XG5cdFx0ICovXG5cdFx0Y29uc3QgbmV3Um93ID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRjb25zdCBpbnB1dHMgPSBuZXdSb3cucXVlcnlTZWxlY3RvckFsbCggXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgb3V0cHV0XCIgKTtcblxuXHRcdGlucHV0cy5mb3JFYWNoKCAoIGlucHV0ICkgPT4ge1xuXHRcdFx0c3dpdGNoICggaW5wdXQudHlwZSApIHtcblx0XHRcdFx0Y2FzZSBcImNoZWNrYm94XCI6XG5cdFx0XHRcdGNhc2UgXCJyYWRpb1wiOlxuXHRcdFx0XHRcdC8vIFByZXNlcnZlIGRlZmF1bHQgY2hlY2tlZCBzdGF0ZSBmb3IgY2hlY2tib3gvcmFkaW8gZmllbGRzXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGlucHV0IGhhcyBkZWZhdWx0Q2hlY2tlZCBhdHRyaWJ1dGUgKGZyb20gSFRNTClcblx0XHRcdFx0XHRpbnB1dC5jaGVja2VkID0gaW5wdXQuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJzZWxlY3Qtb25lXCI6XG5cdFx0XHRcdGNhc2UgXCJzZWxlY3QtbXVsdGlwbGVcIjpcblx0XHRcdFx0XHRjb25zdCBvcHRpb25zID0gaW5wdXQucXVlcnlTZWxlY3RvckFsbCggJ29wdGlvbicgKTtcblx0XHRcdFx0XHRvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24uZGVmYXVsdFNlbGVjdGVkIHx8IGZhbHNlO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZpbGVcIjpcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyYW5nZVwiOlxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQuZGVmYXVsdFZhbHVlIHx8IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC5kZWZhdWx0VmFsdWUgfHwgXCJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHR0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuZGF0YXNldC5pbmRleCA9ICcnICsgY3VycmVudEluZGV4O1xuXG5cdFx0dGhpcy5pbnB1dC5jb250YWluZXIuYXBwZW5kKCBuZXdSb3cgKTtcblxuXHRcdGNvbnN0IGFwcGVuZGVkID0gdGhpcy5pbnB1dC5jb250YWluZXIubGFzdENoaWxkO1xuXG5cdFx0aWYgKCB0aGlzLmlucHV0LmlzTWFudWFsQ291bnQgKSB7XG5cdFx0XHRhcHBlbmRlZC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXG5cdFx0XHQpLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdCgpID0+IG9ic2VydmFibGUucmVtb3ZlTWFudWFsbHkoKSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRvYnNlcnZhYmxlLnJlT2JzZXJ2ZSggYXBwZW5kZWQgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRvYnNlcnZhYmxlLm9ic2VydmUoIGFwcGVuZGVkICk7XG5cdH07XG5cblx0dGhpcy5yZW1vdmVQcmV2SXRlbXMgPSBmdW5jdGlvbiAoIHByZXZSb3dzICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoIGNvbnN0IHByZXZSb3cgb2YgcHJldlJvd3MgKSB7XG5cdFx0XHRpZiAoICFjdXJyZW50LmluY2x1ZGVzKCBwcmV2Um93ICkgKSB7XG5cdFx0XHRcdHByZXZSb3cucmVtb3ZlTWFudWFsbHkoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cblNpZ25hbFJlcGVhdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlcGVhdGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFJlcGVhdGVyRGF0YSBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTaWduYWxSZXBlYXRlciBmcm9tICcuL3NpZ25hbCc7XG5pbXBvcnQgUmVwZWF0ZXJSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZXBlYXRlclJlc3RyaWN0aW9uJztcbmltcG9ydCB7IHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlIH0gZnJvbSAnLi9yZXBlYXRlci1tYWNyb3MnO1xuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcblx0ICAgICAgYWRkQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgUmVwZWF0ZXJEYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbFJlcGVhdGVyLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7XG5cbmNvbnN0IGFkZFJlc3RyaWN0aW9uID0gKCByZXN0cmljdGlvbnMgKSA9PiB7XG5cdHJlc3RyaWN0aW9ucy5wdXNoKFxuXHRcdFJlcGVhdGVyUmVzdHJpY3Rpb24sXG5cdCk7XG5cblx0cmV0dXJuIHJlc3RyaWN0aW9ucztcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0YWRkUmVzdHJpY3Rpb24sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRhZGRSZXN0cmljdGlvbixcbik7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5tdWx0aXN0ZXAucGFnZS5vYnNlcnZlZC5pbnB1dCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YXxSZXBlYXRlckRhdGF9XG5cdCAqIEBwYXJhbSBwYWdlU3RhdGUge1BhZ2VTdGF0ZX1cblx0ICovXG5cdGZ1bmN0aW9uICggaW5wdXQsIHBhZ2VTdGF0ZSApIHtcblx0XHRpZiAoICdyZXBlYXRlcicgIT09IGlucHV0LmlucHV0VHlwZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBpbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdO1xuXG5cdFx0aW5wdXQud2F0Y2goICgpID0+IHBhZ2VTdGF0ZS51cGRhdGVTdGF0ZSgpICk7XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0gY3VycmVudElucHV0IHtJbnB1dERhdGF9XG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gb2JzZXJ2ZUlubmVySW5wdXQoIGN1cnJlbnRJbnB1dCApIHtcblx0XHRcdHBhZ2VTdGF0ZS5oYW5kbGVJbnB1dEVudGVyKCBjdXJyZW50SW5wdXQgKTtcblxuXHRcdFx0aWYgKCAhY3VycmVudElucHV0LnJlcG9ydGluZz8ucmVzdHJpY3Rpb25zPy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudElucHV0LndhdGNoVmFsaWRpdHkoICgpID0+IHBhZ2VTdGF0ZS51cGRhdGVTdGF0ZSgpICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3Qgb2JzZXJ2YWJsZVJvdyBvZiBjdXJyZW50ICkge1xuXHRcdFx0b2JzZXJ2YWJsZVJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKCBvYnNlcnZlSW5uZXJJbnB1dCApO1xuXHRcdH1cblx0XHRpbnB1dC5sYXN0T2JzZXJ2ZWQud2F0Y2goICgpID0+IHtcblx0XHRcdGlucHV0Lmxhc3RPYnNlcnZlZC5jdXJyZW50LmdldElucHV0cygpLmZvckVhY2goIG9ic2VydmVJbm5lcklucHV0ICk7XG5cdFx0fSApO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHQoIGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgKSA9PlxuXHRcdHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ICksXG4pO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==