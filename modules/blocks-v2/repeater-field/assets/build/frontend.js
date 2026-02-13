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
      const macrosNode = rowNode.querySelector(`[data-jfb-macro="${name}"]`);
      if (macrosNode) {
        macrosNode.textContent = value;
      }
    });
    lines.push(rowNode.body.innerHTML);
  });
  return lines.join('');
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
  console.log(source);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQU1BO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvT2JzZXJ2YWJsZVJvdy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXgucGNzcz81NTQ5Iiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2lucHV0LmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3JlcGVhdGVyLW1hY3Jvcy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuXHQgICAgICBPYnNlcnZhYmxlLFxuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlUm93KCBwYXJlbnQgKSB7XG5cdE9ic2VydmFibGUuY2FsbCggdGhpcywgcGFyZW50ICk7XG5cblx0Ly8gQnkgZGVmYXVsdCB3ZSByZXR1cm4gdGhlIG51bWJlciBvZiByZXBlYXRlciByb3dzXG5cdHRoaXMuY2FsYyAgICAgICA9IDE7XG5cdHRoaXMuaW5pdGVkQ2FsYyA9IGZhbHNlO1xufVxuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZSAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZSggT2JzZXJ2YWJsZS5wcm90b3R5cGUgKTtcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmNhbGMgICAgICAgPSAxO1xuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdGVkQ2FsYyA9IGZhbHNlO1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZU9ic2VydmUgPSBmdW5jdGlvbiAoIHJvb3QgKSB7XG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xuXG5cdGNvbnN0IHByZXZWYWx1ZXMgPSB7IC4uLnRoaXMudmFsdWUuY3VycmVudCB9O1xuXHR0aGlzLmRhdGFJbnB1dHMgID0ge307XG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xuXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHByZXZWYWx1ZXM7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xuXHRPYnNlcnZhYmxlLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMsIHJvb3QgKTtcblxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZW1vdmVNYW51YWxseSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLl9pc1JlbW92aW5nICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuX2lzUmVtb3ZpbmcgPSB0cnVlO1xuXG5cdGNvbnN0IG90aGVyUm93cyA9IHRoaXMucGFyZW50LnZhbHVlLmN1cnJlbnQuZmlsdGVyKCByb3cgPT4gcm93ICE9PSB0aGlzICYmICFyb3cuX2lzUmVtb3ZpbmcgKTtcblxuXHRjb25zdCBvdGhlclZhbHVlcyA9IG90aGVyUm93cy5tYXAoIHJvdyA9PiB7XG5cdFx0Ly8gVHJ5IHRvIGdldCB2YWx1ZXMgZnJvbSBkYXRhSW5wdXRzIGlmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHlcblx0XHRjb25zdCBkZWVwQ29weVZhbHVlcyA9IHt9O1xuXG5cdFx0Ly8gRmlyc3QsIHRyeSBmcm9tIHZhbHVlLmN1cnJlbnRcblx0XHRmb3IgKCBjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHJvdy52YWx1ZS5jdXJyZW50IHx8IHt9ICkgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4udmFsdWVdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHksIHRyeSB0byBnZXQgZnJvbSBkYXRhSW5wdXRzXG5cdFx0aWYgKCAwID09PSBPYmplY3Qua2V5cyggZGVlcENvcHlWYWx1ZXMgKS5sZW5ndGggJiYgcm93LmRhdGFJbnB1dHMgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCBpbnB1dF0gb2YgT2JqZWN0LmVudHJpZXMoIHJvdy5kYXRhSW5wdXRzICkgKSB7XG5cdFx0XHRcdGlmICggaW5wdXQgJiYgaW5wdXQuZ2V0VmFsdWUgKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpbnB1dFZhbHVlICkgKSB7XG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gWy4uLmlucHV0VmFsdWVdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gaW5wdXRWYWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bm9kZTogcm93LnJvb3ROb2RlLFxuXHRcdFx0dmFsdWVzOiBkZWVwQ29weVZhbHVlc1xuXHRcdH07XG5cdH0gKTtcblxuXHRvdGhlclJvd3MuZm9yRWFjaCggKCByb3csIGluZGV4ICkgPT4ge1xuXHRcdGlmICggb3RoZXJWYWx1ZXNbaW5kZXhdICkge1xuXHRcdFx0Y29uc3QgdmFsdWVzVG9SZXN0b3JlID0gb3RoZXJWYWx1ZXNbaW5kZXhdLnZhbHVlcztcblxuXHRcdFx0Zm9yICggY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZXNUb1Jlc3RvcmUgKSApIHtcblx0XHRcdFx0cm93LnZhbHVlLmN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlucHV0cyA9IHJvdy5nZXRJbnB1dHMoKTtcblxuXHRcdFx0XHRpbnB1dHMuZm9yRWFjaCggaW5wdXQgPT4ge1xuXHRcdFx0XHRcdGlmICggaW5wdXQudXBkYXRlUHJldmlld3MgJiYgdHlwZW9mIGlucHV0LnVwZGF0ZVByZXZpZXdzID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdFx0aW5wdXQudXBkYXRlUHJldmlld3MoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvLyBSZWluaXRpYWxpemUgcm93IGZvcm11bGEgYWZ0ZXIgcmVpbmRleGluZ1xuXHRcdFx0XHRyb3cuaW5pdGVkQ2FsYyA9IGZhbHNlOyAvLyBSZXNldCB0aGUgZmxhZyB0byBhbGxvdyByZS1pbml0aWFsaXphdGlvblxuXHRcdFx0XHRyb3cuaW5pdENhbGMoKTsgLy8gUmUtaW5pdGlhbGl6ZSB0aGUgZm9ybXVsYSB3aXRoIG5ldyBmaWVsZCBuYW1lc1xuXHRcdFx0fSwgNTAgKTtcblx0XHR9XG5cdH0gKTtcblxuXHR0aGlzLnJlbW92ZSgpO1xuXHR0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcblx0dGhpcy5yb290Tm9kZS5yZW1vdmUoKTtcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmluaXRDYWxjID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuaW5pdGVkQ2FsYyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmluaXRlZENhbGMgICAgID0gdHJ1ZTtcblx0Y29uc3QgWyBub2RlIF0gICAgICA9IHRoaXMucGFyZW50Lm5vZGVzO1xuXHRjb25zdCBmb3JtdWxhU3RyaW5nID0gbm9kZS5kYXRhc2V0Py5mb3JtdWxhO1xuXG5cdGlmICggIWZvcm11bGFTdHJpbmcgfHwgJ2RlZmF1bHQnID09PSB0aGlzLnBhcmVudC5jYWxjVHlwZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzICk7XG5cblx0Zm9ybXVsYS5vYnNlcnZlKCBmb3JtdWxhU3RyaW5nICk7XG5cdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xuXHRcdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdFx0dGhpcy5wYXJlbnQudmFsdWUubm90aWZ5KCk7XG5cdH07XG5cdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuY2FsY1ZhbHVlO1xuXHR9O1xuXHRmb3JtdWxhLmVtcHR5VmFsdWUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR0aGlzLmNhbGMgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHR0aGlzLnBhcmVudC5zaWxlbmNlTm90aWZ5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlUm93OyIsIi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzUmVwZWF0ZXIoIG5vZGUgKSB7XG5cdHJldHVybiAxID09PSArbm9kZS5kYXRhc2V0LnJlcGVhdGVyO1xufVxuXG5leHBvcnQgeyBpc1JlcGVhdGVyIH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBPYnNlcnZhYmxlUm93IGZyb20gJy4vT2JzZXJ2YWJsZVJvdyc7XG5cbmNvbnN0IHtcblx0ICAgICAgSW5wdXREYXRhLFxuXHQgICAgICBSZWFjdGl2ZVZhcixcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gUmVwZWF0ZXJEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYnV0dG9uTm9kZSAgID0gZmFsc2U7XG5cdHRoaXMudGVtcGxhdGUgICAgID0gbnVsbDtcblx0dGhpcy5jb250YWluZXIgICAgPSBudWxsO1xuXHR0aGlzLmxhc3RPYnNlcnZlZCA9IG5ldyBSZWFjdGl2ZVZhcigpO1xuXHR0aGlzLmxhc3RPYnNlcnZlZC5tYWtlKCk7XG5cblx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gZmFsc2U7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gZGlzYWJsZSBhcmlhIGF0dHJpYnV0ZXNcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlSW52YWxpZCA9ICgpID0+IHt9O1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VWYWxpZCAgID0gKCkgPT4ge307XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdICAgICA9IHRoaXMubm9kZXM7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XG5cblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnLFxuXHRcdCkgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ICAgID0gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKTtcblx0XHRcdGN1cnJlbnQucm9vdE5vZGUgPSByb3c7XG5cblx0XHRcdHRoaXMudmFsdWUuY3VycmVudC5wdXNoKCBjdXJyZW50ICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xuXHRcdFx0Y3VycmVudEVsZW1lbnQub2JzZXJ2ZSgpO1xuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCApIHtcblx0XHRcdGN1cnJlbnRFbGVtZW50LmluaXRDYWxjKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVtb3ZlQnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXG5cdFx0KTtcblxuXHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiByZW1vdmVCdXR0b25zICkge1xuXHRcdFx0Y29uc3Qgcm93ID0gdGhpcy5jbG9zZXN0Um93KCBidXR0b24gKTtcblxuXHRcdFx0aWYgKCAhcm93ICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHJvdy5yZW1vdmVNYW51YWxseSgpICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmlzTWFudWFsQ291bnQgKSB7XG5cdFx0XHRpZiAoICEgdGhpcy5hZGRFdmVudEF0dGFjaGVkICYmICEgdGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB0aGlzLmFkZE5ldygpICk7XG5cdFx0XHRcdHRoaXMuYWRkRXZlbnRBdHRhY2hlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuYnV0dG9uTm9kZS5oYXNMaXN0ZW5lciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLnJvb3QuZ2V0SW5wdXQoIHRoaXMuaXRlbXNGaWVsZCApO1xuXG5cdFx0aWYgKCAhaW5wdXQgKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdFx0YEpldEZvcm1CdWlsZGVyIGVycm9yOiB1bmRlZmluZWQgaW5wdXQgYnkgbmFtZSBbJHsgdGhpcy5pdGVtc0ZpZWxkIH1dYCxcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpbnB1dC53YXRjaCggKCkgPT4gdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCBpbnB1dCApICk7XG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCBpbnB1dCApO1xuXHR9O1xuXHR0aGlzLnNldE5vZGUgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cblx0XHR0aGlzLm5vZGVzICAgICA9IFsgbm9kZSBdO1xuXHRcdHRoaXMubmFtZSAgICAgID0gbm9kZS5kYXRhc2V0LmZpZWxkTmFtZTtcblx0XHR0aGlzLnJhd05hbWUgICA9IHRoaXMubmFtZTtcblx0XHR0aGlzLmlucHV0VHlwZSA9ICdyZXBlYXRlcic7XG5cblx0XHR0aGlzLm1hbmFnZUl0ZW1zID0gbm9kZS5kYXRhc2V0Py5tYW5hZ2VJdGVtcyB8fCAnbWFudWFsbHknO1xuXHRcdHRoaXMuY2FsY1R5cGUgICAgPSBub2RlLmRhdGFzZXQ/LmNhbGNUeXBlIHx8ICdkZWZhdWx0Jztcblx0XHR0aGlzLml0ZW1zRmllbGQgID0gbm9kZS5kYXRhc2V0Py5pdGVtc0ZpZWxkO1xuXG5cdFx0dGhpcy5pc01hbnVhbENvdW50ID0gKFxuXHRcdFx0IXRoaXMuaXRlbXNGaWVsZCB8fCAnbWFudWFsbHknID09PSB0aGlzLm1hbmFnZUl0ZW1zXG5cdFx0KTtcblxuXHRcdC8vIGNhbiBiZSBudWxsXG5cdFx0dGhpcy5idXR0b25Ob2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19uZXcnLFxuXHRcdCk7XG5cdFx0dGhpcy50ZW1wbGF0ZSAgID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pbml0aWFsJyxcblx0XHQpO1xuXHRcdHRoaXMuY29udGFpbmVyICA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnLFxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IFtdO1xuXHR9O1xuXG5cdHRoaXMucG9wdWxhdGVJbm5lciA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoICF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dHMgPSBbXTtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJvd3MgICA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiByb3dzICkge1xuXHRcdFx0Zm9yICggY29uc3QgaW5wdXQgb2Ygcm93LmdldElucHV0cygpICkge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRcdGlmICggIWlucHV0LnJlcG9ydGluZz8ucmVzdHJpY3Rpb25zPy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5wdXRzLnB1c2goIGlucHV0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fTtcblxuXHR0aGlzLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiByb3dzICkge1xuXHRcdFx0cm93LnJlbW92ZSgpO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLnJlUXVlcnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoICF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJlcGVhdGVyUm93cyA9IHRoaXMudmFsdWUuY3VycmVudFxuXG5cdFx0cmVwZWF0ZXJSb3dzLmZvckVhY2goIHJvdyA9PiB7XG5cdFx0XHRyb3cuZ2V0SW5wdXRzKCkuZm9yRWFjaCggaW5wdXQgPT4ge1xuXHRcdFx0XHRpbnB1dC5zZXRWYWx1ZSgpO1xuXHRcdFx0XHRpbnB1dC5pbml0Tm90aWZ5VmFsdWUoKTtcblx0XHRcdH0gKTtcblx0XHR9IClcblx0fVxufVxuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmJ1dHRvbk5vZGUgPSBudWxsO1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS50ZW1wbGF0ZSAgID0gbnVsbDtcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuY29udGFpbmVyICA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLml0ZW1zRmllbGQgPSBmYWxzZTtcbi8qKlxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxuICovXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmxhc3RPYnNlcnZlZCA9IG51bGw7XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYWRkTmV3ID0gZnVuY3Rpb24gKCBjb3VudCA9IDEgKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IFtcblx0XHQuLi50aGlzLnZhbHVlPy5jdXJyZW50ID8/IFtdLFxuXHRcdC4uLihcblx0XHRcdG5ldyBBcnJheSggY291bnQgKVxuXHRcdCkuZmlsbCggbnVsbCApLm1hcChcblx0XHRcdCgpID0+IG5ldyBPYnNlcnZhYmxlUm93KCB0aGlzICksXG5cdFx0KSxcblx0XTtcbn07XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlUm93ICkge1xuXHRpZiAoICFBcnJheS5pc0FycmF5KCB0aGlzLnZhbHVlLmN1cnJlbnQgKSApIHtcblx0XHRyZXR1cm4gLTE7XG5cdH1cblx0cmV0dXJuIHRoaXMudmFsdWUuY3VycmVudC5maW5kSW5kZXgoXG5cdFx0Y3VycmVudCA9PiBjdXJyZW50ID09PSBvYnNlcnZhYmxlUm93LFxuXHQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0VsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufE9ic2VydmFibGVSb3d9XG4gKi9cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuY2xvc2VzdFJvdyA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0Y29uc3Qgcm93Tm9kZSA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnICk7XG5cblx0aWYgKCAhcm93Tm9kZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0ICovXG5cdGNvbnN0IHJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XG5cdFx0aWYgKCByb3cucm9vdE5vZGUgPT09IHJvd05vZGUgKSB7XG5cdFx0XHRyZXR1cm4gcm93O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlUm93ICkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuZmlsdGVyKFxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCAhPT0gb2JzZXJ2YWJsZVJvdyxcblx0KTtcbn07XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUucmVjYWxjdWxhdGVJdGVtcyA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdGNvbnN0IGN1cnJlbnRDb3VudCA9IHRoaXMudmFsdWUuY3VycmVudD8ubGVuZ3RoID8/IDA7XG5cblx0Ly8gaWYgaXQgPCAwID09PiB3ZSBzaG91bGQgYWRkIHtkaWZmfSBuZXcgcmVwZWF0ZXIgaXRlbXNcblx0Ly8gaWYgaXQgPiAwID09PiB3ZSBzaG91bGQgcmVtb3ZlIGxhc3Qge2RpZmZ9IGl0ZW1zXG5cdGNvbnN0IGRpZmYgPSBjdXJyZW50Q291bnQgLSBpbnB1dC5jYWxjVmFsdWU7XG5cblx0aWYgKCAwID09PSBkaWZmICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggZGlmZiA8IDAgKSB7XG5cdFx0dGhpcy5hZGROZXcoIC0xICogZGlmZiApO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LnNsaWNlKCAwLCAtMSAqIGRpZmYgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyRGF0YTtcbiIsImZ1bmN0aW9uIGJpbmRSZXBlYXRlck5vdGlmeU9uY2Uobm9kZSkge1xuXHRpZiAobm9kZS5fX2pmYk1hY3Jvc1JlcGVhdGVyQm91bmQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRub2RlLl9famZiTWFjcm9zUmVwZWF0ZXJCb3VuZCA9IHRydWU7XG5cblx0Y29uc3QgZm9ybSA9IG5vZGUuY2xvc2VzdCgnZm9ybS5qZXQtZm9ybS1idWlsZGVyJyk7XG5cdGNvbnN0IGZvcm1JZCA9IGZvcm0/LmRhdGFzZXQ/LmZvcm1JZDtcblx0Y29uc3Qgc3RvcmUgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXI/Lltmb3JtSWRdO1xuXG5cdGNvbnN0IHJlcGVhdGVySW5wdXQgPSBzdG9yZT8uZ2V0SW5wdXQ/Lihub2RlLmRhdGFzZXQuZmllbGROYW1lKTtcblxuXHRjb25zdCBub3RpZnkgPSAoKSA9PiB7XG5cdFx0cmVwZWF0ZXJJbnB1dD8udmFsdWU/Lm5vdGlmeT8uKCk7XG5cdH07XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG5vdGlmeSwgdHJ1ZSk7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgbm90aWZ5LCB0cnVlKTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHQoZSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQuY2xvc2VzdD8uKCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93LXJlbW92ZScpO1xuXHRcdFx0aWYgKCFyZW1vdmVCdG4gfHwgIW5vZGUuY29udGFpbnMocmVtb3ZlQnRuKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShub3RpZnkpO1xuXHRcdH0sXG5cdFx0dHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVwZWF0ZXJMaW5lcyhmaWVsZE5vZGUsIG1hY3JvcywgdGVtcGxhdGUpIHtcblx0Y29uc3QgaXRlbXMgPSBmaWVsZE5vZGUucXVlcnlTZWxlY3RvcignLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyk7XG5cdGlmICghaXRlbXMpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBtYWNyb3NTZXQgPSBBcnJheS5pc0FycmF5KG1hY3JvcykgJiYgbWFjcm9zLmxlbmd0aFxuXHRcdD8gbmV3IFNldChtYWNyb3MpXG5cdFx0OiBudWxsO1xuXG5cdGNvbnN0IHJvd3MgPSBpdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXBlYXRlci1yb3ddJyk7XG5cdGNvbnN0IGxpbmVzID0gW107XG5cblx0cm93cy5mb3JFYWNoKChyb3dFbCkgPT4ge1xuXHRcdGNvbnN0IHJvd1JlcGVhdGVyRmllbGQgPSByb3dFbC5jbG9zZXN0KCcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcpO1xuXHRcdGNvbnN0IGZpZWxkcyA9IHJvd0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cdFx0bGV0IHJvd05vZGUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRmaWVsZHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGlmIChlbC5jbG9zZXN0KCcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcpICE9PSByb3dSZXBlYXRlckZpZWxkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChlbC5kaXNhYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoKGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJykgJiYgIWVsLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBuYW1lID0gZWwuZGF0YXNldD8uZmllbGROYW1lIHx8IGVsLm5hbWUgfHwgJyc7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IFN0cmluZyhlbC52YWx1ZSA/PyAnJyk7XG5cblx0XHRcdGlmIChtYWNyb3NTZXQgJiYgIW1hY3Jvc1NldC5oYXMobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtYWNyb3NOb2RlID0gcm93Tm9kZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1qZmItbWFjcm89XCIke25hbWV9XCJdYCk7XG5cblx0XHRcdGlmIChtYWNyb3NOb2RlKSB7XG5cdFx0XHRcdG1hY3Jvc05vZGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGxpbmVzLnB1c2gocm93Tm9kZS5ib2R5LmlubmVySFRNTCk7XG5cdH0pO1xuXG5cdHJldHVybiBsaW5lcy5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgPSBmYWxzZSkge1xuXHRjb25zdCBmaWVsZE5vZGUgPSAkZmllbGROb2RlPy5bMF07XG5cblx0aWYgKCFmaWVsZE5vZGUgfHwgZmllbGROb2RlLmRhdGFzZXQ/LnJlcGVhdGVyICE9PSAnMScpIHtcblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdGJpbmRSZXBlYXRlck5vdGlmeU9uY2UoZmllbGROb2RlKTtcblxuXHRjb25zdCBob3N0ID0gJG1hY3JvSG9zdD8uWzBdO1xuXHRpZiAoIWhvc3QpIHtcblx0XHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXMoZmllbGROb2RlLCBudWxsLCBudWxsKTtcblx0fVxuXG5cdGNvbnN0IHNvdXJjZSA9IGhvc3QuX19qZmJNYWNyb1RlbXBsYXRlO1xuXHRpZiAoIXNvdXJjZSkge1xuXHRcdHJldHVybiBjb2xsZWN0UmVwZWF0ZXJMaW5lcyhmaWVsZE5vZGUsIG51bGwsIG51bGwpO1xuXHR9XG5cblx0Y29uc29sZS5sb2coc291cmNlKTtcblxuXHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKFN0cmluZyhzb3VyY2UpLCAndGV4dC9odG1sJyk7XG5cblx0Y29uc3QgbWFjcm9zID0gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtamZiLW1hY3JvXScpKVxuXHRcdC5tYXAoKGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtamZiLW1hY3JvJykpXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXMoZmllbGROb2RlLCBtYWNyb3MsIGRvYyk7XG59XG5cblxuIiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmxldCB7XG5cdCAgICBBZHZhbmNlZFJlc3RyaWN0aW9uLFxuXHQgICAgUmVzdHJpY3Rpb24sXG4gICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbkFkdmFuY2VkUmVzdHJpY3Rpb24gPSBBZHZhbmNlZFJlc3RyaWN0aW9uIHx8IFJlc3RyaWN0aW9uO1xuXG5mdW5jdGlvbiBSZXBlYXRlclJlc3RyaWN0aW9uKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xufVxuXG5SZXBlYXRlclJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyUmVzdHJpY3Rpb247IiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBCYXNlU2lnbmFsLFxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVwZWF0ZXJEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBTaWduYWxSZXBlYXRlcigpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgPSBbXSApIHtcblx0XHRjb25zdCB7IGN1cnJlbnQgfSAgICAgPSB0aGlzLmlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IGhhc0RlbGV0ZWRJdGVtcyA9IChcblx0XHRcdHByZXZWYWx1ZT8ubGVuZ3RoICYmIHByZXZWYWx1ZS5sZW5ndGggPiBjdXJyZW50Lmxlbmd0aFxuXHRcdCk7XG5cblx0XHRpZiAoIGhhc0RlbGV0ZWRJdGVtcyApIHtcblx0XHRcdHRoaXMucmVtb3ZlUHJldkl0ZW1zKCBwcmV2VmFsdWUgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBpbmRleCBvZiBPYmplY3Qua2V5cyggY3VycmVudCApICkge1xuXHRcdFx0aWYgKCAhY3VycmVudC5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJ1bkl0ZW0oICtpbmRleCwgaGFzRGVsZXRlZEl0ZW1zICk7XG5cdFx0fVxuXG5cdFx0bGV0IGNhbGNWYWx1ZSA9IDA7XG5cblx0XHRmb3IgKCBjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyggY3VycmVudCApICkge1xuXHRcdFx0cm93LmluaXRDYWxjKCk7XG5cdFx0XHRjYWxjVmFsdWUgKz0gcm93LmNhbGM7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSBjYWxjVmFsdWU7XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0gY3VycmVudEluZGV4ICAgIHtOdW1iZXJ9XG5cdCAqIEBwYXJhbSBzaG91bGRSZU9ic2VydmVcblx0ICovXG5cdHRoaXMucnVuSXRlbSA9IGZ1bmN0aW9uICggY3VycmVudEluZGV4LCBzaG91bGRSZU9ic2VydmUgPSBmYWxzZSApIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd31cblx0XHQgKi9cblx0XHRjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50WyBjdXJyZW50SW5kZXggXTtcblxuXHRcdGlmICggb2JzZXJ2YWJsZS5pc09ic2VydmVkICkge1xuXHRcdFx0aWYgKCAhc2hvdWxkUmVPYnNlcnZlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG9ic2VydmFibGUucm9vdE5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuaW5wdXQudGVtcGxhdGUuaW5uZXJIVE1MLnRyaW0oKTtcblxuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTC5yZXBsYWNlKFxuXHRcdFx0L19faV9fL2csXG5cdFx0XHRjdXJyZW50SW5kZXgsXG5cdFx0KTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlc2V0IGlucHV0IHZhbHVlcyBmb3IgYSBuZXcgcm93XG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMy40Ljdcblx0XHQgKi9cblx0XHRjb25zdCBuZXdSb3cgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdGNvbnN0IGlucHV0cyA9IG5ld1Jvdy5xdWVyeVNlbGVjdG9yQWxsKCBcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBvdXRwdXRcIiApO1xuXG5cdFx0aW5wdXRzLmZvckVhY2goICggaW5wdXQgKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKCBpbnB1dC50eXBlICkge1xuXHRcdFx0XHRjYXNlIFwiY2hlY2tib3hcIjpcblx0XHRcdFx0Y2FzZSBcInJhZGlvXCI6XG5cdFx0XHRcdFx0Ly8gUHJlc2VydmUgZGVmYXVsdCBjaGVja2VkIHN0YXRlIGZvciBjaGVja2JveC9yYWRpbyBmaWVsZHNcblx0XHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgaW5wdXQgaGFzIGRlZmF1bHRDaGVja2VkIGF0dHJpYnV0ZSAoZnJvbSBIVE1MKVxuXHRcdFx0XHRcdGlucHV0LmNoZWNrZWQgPSBpbnB1dC5kZWZhdWx0Q2hlY2tlZCB8fCBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInNlbGVjdC1vbmVcIjpcblx0XHRcdFx0Y2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbnMgPSBpbnB1dC5xdWVyeVNlbGVjdG9yQWxsKCAnb3B0aW9uJyApO1xuXHRcdFx0XHRcdG9wdGlvbnMuZm9yRWFjaCggb3B0aW9uID0+IHtcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi5kZWZhdWx0U2VsZWN0ZWQgfHwgZmFsc2U7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZmlsZVwiOlxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gXCJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJhbmdlXCI6XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC5kZWZhdWx0VmFsdWUgfHwgXCJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LmRlZmF1bHRWYWx1ZSB8fCBcIlwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZC5kYXRhc2V0LmluZGV4ID0gJycgKyBjdXJyZW50SW5kZXg7XG5cblx0XHR0aGlzLmlucHV0LmNvbnRhaW5lci5hcHBlbmQoIG5ld1JvdyApO1xuXG5cdFx0Y29uc3QgYXBwZW5kZWQgPSB0aGlzLmlucHV0LmNvbnRhaW5lci5sYXN0Q2hpbGQ7XG5cblx0XHRpZiAoIHRoaXMuaW5wdXQuaXNNYW51YWxDb3VudCApIHtcblx0XHRcdGFwcGVuZGVkLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyxcblx0XHRcdCkuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2YWJsZS5yZW1vdmVNYW51YWxseSgpLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcblx0XHRcdG9ic2VydmFibGUucmVPYnNlcnZlKCBhcHBlbmRlZCApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdG9ic2VydmFibGUub2JzZXJ2ZSggYXBwZW5kZWQgKTtcblx0fTtcblxuXHR0aGlzLnJlbW92ZVByZXZJdGVtcyA9IGZ1bmN0aW9uICggcHJldlJvd3MgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yICggY29uc3QgcHJldlJvdyBvZiBwcmV2Um93cyApIHtcblx0XHRcdGlmICggIWN1cnJlbnQuaW5jbHVkZXMoIHByZXZSb3cgKSApIHtcblx0XHRcdFx0cHJldlJvdy5yZW1vdmVNYW51YWxseSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuU2lnbmFsUmVwZWF0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVwZWF0ZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmVwZWF0ZXJEYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbFJlcGVhdGVyIGZyb20gJy4vc2lnbmFsJztcbmltcG9ydCBSZXBlYXRlclJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlcGVhdGVyUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgcmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUgfSBmcm9tICcuL3JlcGVhdGVyLW1hY3Jvcyc7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuXHQgICAgICBhZGRBY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBSZXBlYXRlckRhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmVwZWF0ZXIsIC4uLnNpZ25hbHMgXTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuKTtcblxuY29uc3QgYWRkUmVzdHJpY3Rpb24gPSAoIHJlc3RyaWN0aW9ucyApID0+IHtcblx0cmVzdHJpY3Rpb25zLnB1c2goXG5cdFx0UmVwZWF0ZXJSZXN0cmljdGlvbixcblx0KTtcblxuXHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xufTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRhZGRSZXN0cmljdGlvbixcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGFkZFJlc3RyaWN0aW9uLFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm11bHRpc3RlcC5wYWdlLm9ic2VydmVkLmlucHV0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfFJlcGVhdGVyRGF0YX1cblx0ICogQHBhcmFtIHBhZ2VTdGF0ZSB7UGFnZVN0YXRlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBpbnB1dCwgcGFnZVN0YXRlICkge1xuXHRcdGlmICggJ3JlcGVhdGVyJyAhPT0gaW5wdXQuaW5wdXRUeXBlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3QgY3VycmVudCA9IGlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW107XG5cblx0XHRpbnB1dC53YXRjaCggKCkgPT4gcGFnZVN0YXRlLnVwZGF0ZVN0YXRlKCkgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSBjdXJyZW50SW5wdXQge0lucHV0RGF0YX1cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBvYnNlcnZlSW5uZXJJbnB1dCggY3VycmVudElucHV0ICkge1xuXHRcdFx0cGFnZVN0YXRlLmhhbmRsZUlucHV0RW50ZXIoIGN1cnJlbnRJbnB1dCApO1xuXG5cdFx0XHRpZiAoICFjdXJyZW50SW5wdXQucmVwb3J0aW5nPy5yZXN0cmljdGlvbnM/Lmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50SW5wdXQud2F0Y2hWYWxpZGl0eSggKCkgPT4gcGFnZVN0YXRlLnVwZGF0ZVN0YXRlKCkgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBvYnNlcnZhYmxlUm93IG9mIGN1cnJlbnQgKSB7XG5cdFx0XHRvYnNlcnZhYmxlUm93LmdldElucHV0cygpLmZvckVhY2goIG9ic2VydmVJbm5lcklucHV0ICk7XG5cdFx0fVxuXHRcdGlucHV0Lmxhc3RPYnNlcnZlZC53YXRjaCggKCkgPT4ge1xuXHRcdFx0aW5wdXQubGFzdE9ic2VydmVkLmN1cnJlbnQuZ2V0SW5wdXRzKCkuZm9yRWFjaCggb2JzZXJ2ZUlubmVySW5wdXQgKTtcblx0XHR9ICk7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdCggY3VycmVudCwgJGZpZWxkTm9kZSwgJG1hY3JvSG9zdCApID0+XG5cdFx0cmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUoIGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgKSxcbik7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9