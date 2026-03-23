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
const {
  applyFilters
} = JetPlugins.hooks;
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
function getFieldValue(el) {
  var _el$value;
  if (el.tagName === 'SELECT' && el.multiple) {
    const values = Array.from(el.selectedOptions || []).map(opt => {
      var _opt$value;
      return String((_opt$value = opt.value) !== null && _opt$value !== void 0 ? _opt$value : '').trim();
    }).filter(Boolean);
    return values.join(', ');
  }
  return String((_el$value = el.value) !== null && _el$value !== void 0 ? _el$value : '').trim();
}
function getRepeaterFieldValue(el, rowEl, rowRepeaterField) {
  const current = getFieldValue(el);
  return applyFilters('jet.fb.macro.inside.repeater.field.value', current, el, rowEl, rowRepeaterField);
}
function collectRowValues(rowEl) {
  const valuesByName = Object.create(null);
  const rowRepeaterField = rowEl.closest('.field-type-repeater-field');
  const fields = rowEl.querySelectorAll('input, select, textarea');
  fields.forEach(el => {
    // ignore nested repeater-in-repeater
    if (el.closest('.field-type-repeater-field') !== rowRepeaterField) {
      return;
    }
    if (el.disabled) {
      return;
    }

    // ignore hidden (usually stores internal/service values)
    if (el.tagName === 'INPUT' && el.type === 'hidden') {
      return;
    }
    if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) {
      return;
    }
    const name = el.dataset?.fieldName || el.name || '';
    if (!name) {
      return;
    }
    const value = getRepeaterFieldValue(el, rowEl, rowRepeaterField);
    if (value === '') {
      return;
    }
    if (valuesByName[name]) {
      valuesByName[name] += `, ${value}`;
    } else {
      valuesByName[name] = value;
    }
  });
  return valuesByName;
}
function collectRepeaterLinesFromTemplate(fieldNode, templateHtml) {
  const items = fieldNode.querySelector('.jet-form-builder-repeater__items');
  if (!items) {
    return '';
  }
  const tpl = document.createElement('template');
  tpl.innerHTML = String(templateHtml !== null && templateHtml !== void 0 ? templateHtml : '');
  const rows = items.querySelectorAll('[data-repeater-row]');
  const lines = [];
  rows.forEach(rowEl => {
    const fragment = tpl.content.cloneNode(true);
    const macroNodes = fragment.querySelectorAll('[data-jfb-macro]');
    const valuesByName = collectRowValues(rowEl);
    macroNodes.forEach(node => {
      var _valuesByName$macroNa;
      const macroName = node.getAttribute('data-jfb-macro') || '';
      if (!macroName) {
        return;
      }
      node.innerHTML = String((_valuesByName$macroNa = valuesByName[macroName]) !== null && _valuesByName$macroNa !== void 0 ? _valuesByName$macroNa : '');
    });
    const tmp = document.createElement('div');
    tmp.appendChild(fragment);
    lines.push(tmp.innerHTML);
  });
  return lines.join('');
}
function collectRepeaterLinesPlain(fieldNode, macros) {
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
      if (el.closest('.field-type-repeater-field') !== rowRepeaterField) {
        return;
      }
      if (el.disabled) {
        return;
      }
      if (el.tagName === 'INPUT' && el.type === 'hidden') {
        return;
      }
      if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) {
        return;
      }
      const name = el.dataset?.fieldName || el.name || '';
      if (!name) {
        return;
      }
      if (macrosSet && !macrosSet.has(name)) {
        return;
      }
      const value = getRepeaterFieldValue(el, rowEl, rowRepeaterField);
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
  const source = host?.__jfbMacroTemplate;
  if (!host || !source) {
    return collectRepeaterLinesPlain(fieldNode, null);
  }
  return collectRepeaterLinesFromTemplate(fieldNode, source);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuUUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBTUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9PYnNlcnZhYmxlUm93LmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2lucHV0LmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3JlcGVhdGVyLW1hY3Jvcy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIE9ic2VydmFibGUsXHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gT2JzZXJ2YWJsZVJvdyggcGFyZW50ICkge1xyXG5cdE9ic2VydmFibGUuY2FsbCggdGhpcywgcGFyZW50ICk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQgd2UgcmV0dXJuIHRoZSBudW1iZXIgb2YgcmVwZWF0ZXIgcm93c1xyXG5cdHRoaXMuY2FsYyAgICAgICA9IDE7XHJcblx0dGhpcy5pbml0ZWRDYWxjID0gZmFsc2U7XHJcbn1cclxuXHJcbk9ic2VydmFibGVSb3cucHJvdG90eXBlICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKCBPYnNlcnZhYmxlLnByb3RvdHlwZSApO1xyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5jYWxjICAgICAgID0gMTtcclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdGVkQ2FsYyA9IGZhbHNlO1xyXG5cclxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVPYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xyXG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xyXG5cclxuXHRjb25zdCBwcmV2VmFsdWVzID0geyAuLi50aGlzLnZhbHVlLmN1cnJlbnQgfTtcclxuXHR0aGlzLmRhdGFJbnB1dHMgID0ge307XHJcblx0T2JzZXJ2YWJsZS5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzLCByb290ICk7XHJcblxyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHByZXZWYWx1ZXM7XHJcbn07XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xyXG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xyXG5cclxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XHJcbn07XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZW1vdmVNYW51YWxseSA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoIHRoaXMuX2lzUmVtb3ZpbmcgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLl9pc1JlbW92aW5nID0gdHJ1ZTtcclxuXHJcblx0Y29uc3Qgb3RoZXJSb3dzID0gdGhpcy5wYXJlbnQudmFsdWUuY3VycmVudC5maWx0ZXIoIHJvdyA9PiByb3cgIT09IHRoaXMgJiYgIXJvdy5faXNSZW1vdmluZyApO1xyXG5cclxuXHRjb25zdCBvdGhlclZhbHVlcyA9IG90aGVyUm93cy5tYXAoIHJvdyA9PiB7XHJcblx0XHQvLyBUcnkgdG8gZ2V0IHZhbHVlcyBmcm9tIGRhdGFJbnB1dHMgaWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eVxyXG5cdFx0Y29uc3QgZGVlcENvcHlWYWx1ZXMgPSB7fTtcclxuXHJcblx0XHQvLyBGaXJzdCwgdHJ5IGZyb20gdmFsdWUuY3VycmVudFxyXG5cdFx0Zm9yICggY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKCByb3cudmFsdWUuY3VycmVudCB8fCB7fSApICkge1xyXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IFsuLi52YWx1ZV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eSwgdHJ5IHRvIGdldCBmcm9tIGRhdGFJbnB1dHNcclxuXHRcdGlmICggMCA9PT0gT2JqZWN0LmtleXMoIGRlZXBDb3B5VmFsdWVzICkubGVuZ3RoICYmIHJvdy5kYXRhSW5wdXRzICkge1xyXG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCBpbnB1dF0gb2YgT2JqZWN0LmVudHJpZXMoIHJvdy5kYXRhSW5wdXRzICkgKSB7XHJcblx0XHRcdFx0aWYgKCBpbnB1dCAmJiBpbnB1dC5nZXRWYWx1ZSApIHtcclxuXHRcdFx0XHRcdGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC5nZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpbnB1dFZhbHVlICkgKSB7XHJcblx0XHRcdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4uaW5wdXRWYWx1ZV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gaW5wdXRWYWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRub2RlOiByb3cucm9vdE5vZGUsXHJcblx0XHRcdHZhbHVlczogZGVlcENvcHlWYWx1ZXNcclxuXHRcdH07XHJcblx0fSApO1xyXG5cclxuXHRvdGhlclJvd3MuZm9yRWFjaCggKCByb3csIGluZGV4ICkgPT4ge1xyXG5cdFx0aWYgKCBvdGhlclZhbHVlc1tpbmRleF0gKSB7XHJcblx0XHRcdGNvbnN0IHZhbHVlc1RvUmVzdG9yZSA9IG90aGVyVmFsdWVzW2luZGV4XS52YWx1ZXM7XHJcblxyXG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlc1RvUmVzdG9yZSApICkge1xyXG5cdFx0XHRcdHJvdy52YWx1ZS5jdXJyZW50W2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGlucHV0cyA9IHJvdy5nZXRJbnB1dHMoKTtcclxuXHJcblx0XHRcdFx0aW5wdXRzLmZvckVhY2goIGlucHV0ID0+IHtcclxuXHRcdFx0XHRcdGlmICggaW5wdXQudXBkYXRlUHJldmlld3MgJiYgdHlwZW9mIGlucHV0LnVwZGF0ZVByZXZpZXdzID09PSAnZnVuY3Rpb24nICkge1xyXG5cdFx0XHRcdFx0XHRpbnB1dC51cGRhdGVQcmV2aWV3cygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0Ly8gUmVpbml0aWFsaXplIHJvdyBmb3JtdWxhIGFmdGVyIHJlaW5kZXhpbmdcclxuXHRcdFx0XHRyb3cuaW5pdGVkQ2FsYyA9IGZhbHNlOyAvLyBSZXNldCB0aGUgZmxhZyB0byBhbGxvdyByZS1pbml0aWFsaXphdGlvblxyXG5cdFx0XHRcdHJvdy5pbml0Q2FsYygpOyAvLyBSZS1pbml0aWFsaXplIHRoZSBmb3JtdWxhIHdpdGggbmV3IGZpZWxkIG5hbWVzXHJcblx0XHRcdH0sIDUwICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHR0aGlzLnJlbW92ZSgpO1xyXG5cdHRoaXMucGFyZW50LnJlbW92ZSggdGhpcyApO1xyXG5cdHRoaXMucm9vdE5vZGUucmVtb3ZlKCk7XHJcbn07XHJcblxyXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5pbml0Q2FsYyA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoIHRoaXMuaW5pdGVkQ2FsYyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMuaW5pdGVkQ2FsYyAgICAgPSB0cnVlO1xyXG5cdGNvbnN0IFsgbm9kZSBdICAgICAgPSB0aGlzLnBhcmVudC5ub2RlcztcclxuXHRjb25zdCBmb3JtdWxhU3RyaW5nID0gbm9kZS5kYXRhc2V0Py5mb3JtdWxhO1xyXG5cclxuXHRpZiAoICFmb3JtdWxhU3RyaW5nIHx8ICdkZWZhdWx0JyA9PT0gdGhpcy5wYXJlbnQuY2FsY1R5cGUgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzICk7XHJcblxyXG5cdGZvcm11bGEub2JzZXJ2ZSggZm9ybXVsYVN0cmluZyApO1xyXG5cdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHRcdHRoaXMucGFyZW50LnZhbHVlLm5vdGlmeSgpO1xyXG5cdH07XHJcblx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuIGlucHV0LmNhbGNWYWx1ZTtcclxuXHR9O1xyXG5cdGZvcm11bGEuZW1wdHlWYWx1ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcclxuXHR0aGlzLnBhcmVudC5zaWxlbmNlTm90aWZ5KCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlUm93OyIsIi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZXBlYXRlciggbm9kZSApIHtcclxuXHRyZXR1cm4gMSA9PT0gK25vZGUuZGF0YXNldC5yZXBlYXRlcjtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNSZXBlYXRlciB9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBPYnNlcnZhYmxlUm93IGZyb20gJy4vT2JzZXJ2YWJsZVJvdyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIFJlcGVhdGVyRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmJ1dHRvbk5vZGUgICA9IGZhbHNlO1xyXG5cdHRoaXMudGVtcGxhdGUgICAgID0gbnVsbDtcclxuXHR0aGlzLmNvbnRhaW5lciAgICA9IG51bGw7XHJcblx0dGhpcy5sYXN0T2JzZXJ2ZWQgPSBuZXcgUmVhY3RpdmVWYXIoKTtcclxuXHR0aGlzLmxhc3RPYnNlcnZlZC5tYWtlKCk7XHJcblxyXG5cdHRoaXMuYWRkRXZlbnRBdHRhY2hlZCA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIGRpc2FibGUgYXJpYSBhdHRyaWJ1dGVzXHJcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlSW52YWxpZCA9ICgpID0+IHt9O1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdICAgICA9IHRoaXMubm9kZXM7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycsXHJcblx0XHQpICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ICAgID0gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKTtcclxuXHRcdFx0Y3VycmVudC5yb290Tm9kZSA9IHJvdztcclxuXHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudC5wdXNoKCBjdXJyZW50ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRjdXJyZW50RWxlbWVudC5vYnNlcnZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRjdXJyZW50RWxlbWVudC5pbml0Q2FsYygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiByZW1vdmVCdXR0b25zICkge1xyXG5cdFx0XHRjb25zdCByb3cgPSB0aGlzLmNsb3Nlc3RSb3coIGJ1dHRvbiApO1xyXG5cclxuXHRcdFx0aWYgKCAhcm93ICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4gcm93LnJlbW92ZU1hbnVhbGx5KCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMuaXNNYW51YWxDb3VudCApIHtcclxuXHRcdFx0aWYgKCAhIHRoaXMuYWRkRXZlbnRBdHRhY2hlZCAmJiAhIHRoaXMuYnV0dG9uTm9kZS5oYXNMaXN0ZW5lcikge1xyXG5cdFx0XHRcdHRoaXMuYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB0aGlzLmFkZE5ldygpICk7XHJcblx0XHRcdFx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuaGFzTGlzdGVuZXIgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucm9vdC5nZXRJbnB1dCggdGhpcy5pdGVtc0ZpZWxkICk7XHJcblxyXG5cdFx0aWYgKCAhaW5wdXQgKSB7XHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdFx0YEpldEZvcm1CdWlsZGVyIGVycm9yOiB1bmRlZmluZWQgaW5wdXQgYnkgbmFtZSBbJHsgdGhpcy5pdGVtc0ZpZWxkIH1dYCxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dC53YXRjaCggKCkgPT4gdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCBpbnB1dCApICk7XHJcblx0XHR0aGlzLnJlY2FsY3VsYXRlSXRlbXMoIGlucHV0ICk7XHJcblx0fTtcclxuXHR0aGlzLnNldE5vZGUgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHJcblx0XHR0aGlzLm5vZGVzICAgICA9IFsgbm9kZSBdO1xyXG5cdFx0dGhpcy5uYW1lICAgICAgPSBub2RlLmRhdGFzZXQuZmllbGROYW1lO1xyXG5cdFx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5hbWU7XHJcblx0XHR0aGlzLmlucHV0VHlwZSA9ICdyZXBlYXRlcic7XHJcblxyXG5cdFx0dGhpcy5tYW5hZ2VJdGVtcyA9IG5vZGUuZGF0YXNldD8ubWFuYWdlSXRlbXMgfHwgJ21hbnVhbGx5JztcclxuXHRcdHRoaXMuY2FsY1R5cGUgICAgPSBub2RlLmRhdGFzZXQ/LmNhbGNUeXBlIHx8ICdkZWZhdWx0JztcclxuXHRcdHRoaXMuaXRlbXNGaWVsZCAgPSBub2RlLmRhdGFzZXQ/Lml0ZW1zRmllbGQ7XHJcblxyXG5cdFx0dGhpcy5pc01hbnVhbENvdW50ID0gKFxyXG5cdFx0XHQhdGhpcy5pdGVtc0ZpZWxkIHx8ICdtYW51YWxseScgPT09IHRoaXMubWFuYWdlSXRlbXNcclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gY2FuIGJlIG51bGxcclxuXHRcdHRoaXMuYnV0dG9uTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19uZXcnLFxyXG5cdFx0KTtcclxuXHRcdHRoaXMudGVtcGxhdGUgICA9IG5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pbml0aWFsJyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNvbnRhaW5lciAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoICF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlucHV0cyA9IFtdO1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCByb3dzICAgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XHJcblx0XHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHJvdy5nZXRJbnB1dHMoKSApIHtcclxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXHJcblx0XHRcdFx0aWYgKCAhaW5wdXQucmVwb3J0aW5nPy5yZXN0cmljdGlvbnM/Lmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbnB1dHMucHVzaCggaW5wdXQgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcclxuXHRcdFx0cm93LnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IHJlcGVhdGVyUm93cyA9IHRoaXMudmFsdWUuY3VycmVudFxyXG5cclxuXHRcdHJlcGVhdGVyUm93cy5mb3JFYWNoKCByb3cgPT4ge1xyXG5cdFx0XHRyb3cuZ2V0SW5wdXRzKCkuZm9yRWFjaCggaW5wdXQgPT4ge1xyXG5cdFx0XHRcdGlucHV0LnNldFZhbHVlKCk7XHJcblx0XHRcdFx0aW5wdXQuaW5pdE5vdGlmeVZhbHVlKCk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKVxyXG5cdH1cclxufVxyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYnV0dG9uTm9kZSA9IG51bGw7XHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgICA9IG51bGw7XHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuY29udGFpbmVyICA9IG51bGw7XHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuaXRlbXNGaWVsZCA9IGZhbHNlO1xyXG4vKipcclxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG4gKi9cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5sYXN0T2JzZXJ2ZWQgPSBudWxsO1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5hZGROZXcgPSBmdW5jdGlvbiAoIGNvdW50ID0gMSApIHtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXHJcblx0XHQuLi50aGlzLnZhbHVlPy5jdXJyZW50ID8/IFtdLFxyXG5cdFx0Li4uKFxyXG5cdFx0XHRuZXcgQXJyYXkoIGNvdW50IClcclxuXHRcdCkuZmlsbCggbnVsbCApLm1hcChcclxuXHRcdFx0KCkgPT4gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKSxcclxuXHRcdCksXHJcblx0XTtcclxufTtcclxuXHJcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlUm93ICkge1xyXG5cdGlmICggIUFycmF5LmlzQXJyYXkoIHRoaXMudmFsdWUuY3VycmVudCApICkge1xyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH1cclxuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50LmZpbmRJbmRleChcclxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCA9PT0gb2JzZXJ2YWJsZVJvdyxcclxuXHQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZSB7RWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbnxPYnNlcnZhYmxlUm93fVxyXG4gKi9cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5jbG9zZXN0Um93ID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdGNvbnN0IHJvd05vZGUgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApO1xyXG5cclxuXHRpZiAoICFyb3dOb2RlICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHQgKi9cclxuXHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcclxuXHRcdGlmICggcm93LnJvb3ROb2RlID09PSByb3dOb2RlICkge1xyXG5cdFx0XHRyZXR1cm4gcm93O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIG9ic2VydmFibGVSb3cgKSB7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LmZpbHRlcihcclxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCAhPT0gb2JzZXJ2YWJsZVJvdyxcclxuXHQpO1xyXG59O1xyXG5cclxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZWNhbGN1bGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xyXG5cclxuXHQvLyBpZiBpdCA8IDAgPT0+IHdlIHNob3VsZCBhZGQge2RpZmZ9IG5ldyByZXBlYXRlciBpdGVtc1xyXG5cdC8vIGlmIGl0ID4gMCA9PT4gd2Ugc2hvdWxkIHJlbW92ZSBsYXN0IHtkaWZmfSBpdGVtc1xyXG5cdGNvbnN0IGRpZmYgPSBjdXJyZW50Q291bnQgLSBpbnB1dC5jYWxjVmFsdWU7XHJcblxyXG5cdGlmICggMCA9PT0gZGlmZiApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggZGlmZiA8IDAgKSB7XHJcblx0XHR0aGlzLmFkZE5ldyggLTEgKiBkaWZmICk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LnNsaWNlKCAwLCAtMSAqIGRpZmYgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyRGF0YTtcclxuIiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5mdW5jdGlvbiBiaW5kUmVwZWF0ZXJOb3RpZnlPbmNlKCBub2RlICkge1xyXG5cdGlmICggbm9kZS5fX2pmYk1hY3Jvc1JlcGVhdGVyQm91bmQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRub2RlLl9famZiTWFjcm9zUmVwZWF0ZXJCb3VuZCA9IHRydWU7XHJcblxyXG5cdGNvbnN0IGZvcm0gICA9IG5vZGUuY2xvc2VzdCggJ2Zvcm0uamV0LWZvcm0tYnVpbGRlcicgKTtcclxuXHRjb25zdCBmb3JtSWQgPSBmb3JtPy5kYXRhc2V0Py5mb3JtSWQ7XHJcblx0Y29uc3Qgc3RvcmUgID0gd2luZG93LkpldEZvcm1CdWlsZGVyPy5bIGZvcm1JZCBdO1xyXG5cclxuXHRjb25zdCByZXBlYXRlcklucHV0ID0gc3RvcmU/LmdldElucHV0Py4oIG5vZGUuZGF0YXNldC5maWVsZE5hbWUgKTtcclxuXHJcblx0Y29uc3Qgbm90aWZ5ID0gKCkgPT4ge1xyXG5cdFx0cmVwZWF0ZXJJbnB1dD8udmFsdWU/Lm5vdGlmeT8uKCk7XHJcblx0fTtcclxuXHJcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBub3RpZnksIHRydWUgKTtcclxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBub3RpZnksIHRydWUgKTtcclxuXHJcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2NsaWNrJyxcclxuXHRcdCggZSApID0+IHtcclxuXHRcdFx0Y29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQuY2xvc2VzdD8uKCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3Jvdy1yZW1vdmUnICk7XHJcblx0XHRcdGlmICggIXJlbW92ZUJ0biB8fCAhbm9kZS5jb250YWlucyggcmVtb3ZlQnRuICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggbm90aWZ5ICk7XHJcblx0XHR9LFxyXG5cdFx0dHJ1ZVxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoIGVsICkge1xyXG5cdGlmICggZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgZWwubXVsdGlwbGUgKSB7XHJcblx0XHRjb25zdCB2YWx1ZXMgPSBBcnJheS5mcm9tKCBlbC5zZWxlY3RlZE9wdGlvbnMgfHwgW10gKVxyXG5cdFx0XHQubWFwKCAoIG9wdCApID0+IFN0cmluZyggb3B0LnZhbHVlID8/ICcnICkudHJpbSgpIClcclxuXHRcdFx0LmZpbHRlciggQm9vbGVhbiApO1xyXG5cclxuXHRcdHJldHVybiB2YWx1ZXMuam9pbiggJywgJyApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFN0cmluZyggZWwudmFsdWUgPz8gJycgKS50cmltKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlcGVhdGVyRmllbGRWYWx1ZSggZWwsIHJvd0VsLCByb3dSZXBlYXRlckZpZWxkICkge1xyXG5cdGNvbnN0IGN1cnJlbnQgPSBnZXRGaWVsZFZhbHVlKCBlbCApO1xyXG5cclxuXHRyZXR1cm4gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0J2pldC5mYi5tYWNyby5pbnNpZGUucmVwZWF0ZXIuZmllbGQudmFsdWUnLFxyXG5cdFx0Y3VycmVudCxcclxuXHRcdGVsLFxyXG5cdFx0cm93RWwsXHJcblx0XHRyb3dSZXBlYXRlckZpZWxkXHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdFJvd1ZhbHVlcyggcm93RWwgKSB7XHJcblx0Y29uc3QgdmFsdWVzQnlOYW1lID0gT2JqZWN0LmNyZWF0ZSggbnVsbCApO1xyXG5cclxuXHRjb25zdCByb3dSZXBlYXRlckZpZWxkID0gcm93RWwuY2xvc2VzdCggJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyApO1xyXG5cdGNvbnN0IGZpZWxkcyA9IHJvd0VsLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScgKTtcclxuXHJcblx0ZmllbGRzLmZvckVhY2goICggZWwgKSA9PiB7XHJcblx0XHQvLyBpZ25vcmUgbmVzdGVkIHJlcGVhdGVyLWluLXJlcGVhdGVyXHJcblx0XHRpZiAoIGVsLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcgKSAhPT0gcm93UmVwZWF0ZXJGaWVsZCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZWwuZGlzYWJsZWQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZ25vcmUgaGlkZGVuICh1c3VhbGx5IHN0b3JlcyBpbnRlcm5hbC9zZXJ2aWNlIHZhbHVlcylcclxuXHRcdGlmICggZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlbC50eXBlID09PSAnaGlkZGVuJyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggKCBlbC50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsLnR5cGUgPT09ICdyYWRpbycgKSAmJiAhZWwuY2hlY2tlZCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG5hbWUgPSBlbC5kYXRhc2V0Py5maWVsZE5hbWUgfHwgZWwubmFtZSB8fCAnJztcclxuXHRcdGlmICggIW5hbWUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB2YWx1ZSA9IGdldFJlcGVhdGVyRmllbGRWYWx1ZSggZWwsIHJvd0VsLCByb3dSZXBlYXRlckZpZWxkICk7XHJcblx0XHRpZiAoIHZhbHVlID09PSAnJyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdmFsdWVzQnlOYW1lWyBuYW1lIF0gKSB7XHJcblx0XHRcdHZhbHVlc0J5TmFtZVsgbmFtZSBdICs9IGAsICR7IHZhbHVlIH1gO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFsdWVzQnlOYW1lWyBuYW1lIF0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiB2YWx1ZXNCeU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzRnJvbVRlbXBsYXRlKCBmaWVsZE5vZGUsIHRlbXBsYXRlSHRtbCApIHtcclxuXHRjb25zdCBpdGVtcyA9IGZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyApO1xyXG5cdGlmICggIWl0ZW1zICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xyXG5cdHRwbC5pbm5lckhUTUwgPSBTdHJpbmcoIHRlbXBsYXRlSHRtbCA/PyAnJyApO1xyXG5cclxuXHRjb25zdCByb3dzICA9IGl0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1yZXBlYXRlci1yb3ddJyApO1xyXG5cdGNvbnN0IGxpbmVzID0gW107XHJcblxyXG5cdHJvd3MuZm9yRWFjaCggKCByb3dFbCApID0+IHtcclxuXHRcdGNvbnN0IGZyYWdtZW50ID0gdHBsLmNvbnRlbnQuY2xvbmVOb2RlKCB0cnVlICk7XHJcblx0XHRjb25zdCBtYWNyb05vZGVzID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWpmYi1tYWNyb10nICk7XHJcblxyXG5cdFx0Y29uc3QgdmFsdWVzQnlOYW1lID0gY29sbGVjdFJvd1ZhbHVlcyggcm93RWwgKTtcclxuXHJcblx0XHRtYWNyb05vZGVzLmZvckVhY2goICggbm9kZSApID0+IHtcclxuXHRcdFx0Y29uc3QgbWFjcm9OYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWpmYi1tYWNybycgKSB8fCAnJztcclxuXHRcdFx0aWYgKCAhbWFjcm9OYW1lICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoIHZhbHVlc0J5TmFtZVsgbWFjcm9OYW1lIF0gPz8gJycgKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG5cdFx0dG1wLmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xyXG5cdFx0bGluZXMucHVzaCggdG1wLmlubmVySFRNTCApO1xyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIGxpbmVzLmpvaW4oICcnICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzUGxhaW4oIGZpZWxkTm9kZSwgbWFjcm9zICkge1xyXG5cdGNvbnN0IGl0ZW1zID0gZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnICk7XHJcblx0aWYgKCAhaXRlbXMgKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtYWNyb3NTZXQgPSBBcnJheS5pc0FycmF5KCBtYWNyb3MgKSAmJiBtYWNyb3MubGVuZ3RoXHJcblx0XHQ/IG5ldyBTZXQoIG1hY3JvcyApXHJcblx0XHQ6IG51bGw7XHJcblxyXG5cdGNvbnN0IHJvd3MgID0gaXRlbXMucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLXJlcGVhdGVyLXJvd10nICk7XHJcblx0Y29uc3QgbGluZXMgPSBbXTtcclxuXHJcblx0cm93cy5mb3JFYWNoKCAoIHJvd0VsICkgPT4ge1xyXG5cdFx0Y29uc3Qgcm93UmVwZWF0ZXJGaWVsZCA9IHJvd0VsLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcgKTtcclxuXHRcdGNvbnN0IGZpZWxkcyA9IHJvd0VsLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScgKTtcclxuXHJcblx0XHRmaWVsZHMuZm9yRWFjaCggKCBlbCApID0+IHtcclxuXHRcdFx0aWYgKCBlbC5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnICkgIT09IHJvd1JlcGVhdGVyRmllbGQgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggZWwuZGlzYWJsZWQgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlbC50eXBlID09PSAnaGlkZGVuJyApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCAoIGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJyApICYmICFlbC5jaGVja2VkICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgbmFtZSA9IGVsLmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCBlbC5uYW1lIHx8ICcnO1xyXG5cdFx0XHRpZiAoICFuYW1lICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBtYWNyb3NTZXQgJiYgIW1hY3Jvc1NldC5oYXMoIG5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0UmVwZWF0ZXJGaWVsZFZhbHVlKCBlbCwgcm93RWwsIHJvd1JlcGVhdGVyRmllbGQgKTtcclxuXHRcdFx0bGluZXMucHVzaCggYCR7IG5hbWUgfTogJHsgdmFsdWUgfWAgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBsaW5lcy5qb2luKCAnPGJyLz4nICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVwZWF0ZXJNYWNyb3NWYWx1ZSggY3VycmVudCwgJGZpZWxkTm9kZSwgJG1hY3JvSG9zdCA9IGZhbHNlICkge1xyXG5cdGNvbnN0IGZpZWxkTm9kZSA9ICRmaWVsZE5vZGU/LlsgMCBdO1xyXG5cdGlmICggIWZpZWxkTm9kZSB8fCBmaWVsZE5vZGUuZGF0YXNldD8ucmVwZWF0ZXIgIT09ICcxJyApIHtcclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxuXHJcblx0YmluZFJlcGVhdGVyTm90aWZ5T25jZSggZmllbGROb2RlICk7XHJcblxyXG5cdGNvbnN0IGhvc3QgPSAkbWFjcm9Ib3N0Py5bIDAgXTtcclxuXHRjb25zdCBzb3VyY2UgPSBob3N0Py5fX2pmYk1hY3JvVGVtcGxhdGU7XHJcblxyXG5cdGlmICggIWhvc3QgfHwgIXNvdXJjZSApIHtcclxuXHRcdHJldHVybiBjb2xsZWN0UmVwZWF0ZXJMaW5lc1BsYWluKCBmaWVsZE5vZGUsIG51bGwgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjb2xsZWN0UmVwZWF0ZXJMaW5lc0Zyb21UZW1wbGF0ZSggZmllbGROb2RlLCBzb3VyY2UgKTtcclxufSIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxubGV0IHtcclxuXHQgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcclxuXHQgICAgUmVzdHJpY3Rpb24sXHJcbiAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbkFkdmFuY2VkUmVzdHJpY3Rpb24gPSBBZHZhbmNlZFJlc3RyaWN0aW9uIHx8IFJlc3RyaWN0aW9uO1xyXG5cclxuZnVuY3Rpb24gUmVwZWF0ZXJSZXN0cmljdGlvbigpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9O1xyXG59XHJcblxyXG5SZXBlYXRlclJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclJlc3RyaWN0aW9uOyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQmFzZVNpZ25hbCxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7UmVwZWF0ZXJEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBTaWduYWxSZXBlYXRlcigpIHtcclxuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgPSBbXSApIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudCB9ICAgICA9IHRoaXMuaW5wdXQudmFsdWU7XHJcblx0XHRjb25zdCBoYXNEZWxldGVkSXRlbXMgPSAoXHJcblx0XHRcdHByZXZWYWx1ZT8ubGVuZ3RoICYmIHByZXZWYWx1ZS5sZW5ndGggPiBjdXJyZW50Lmxlbmd0aFxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoIGhhc0RlbGV0ZWRJdGVtcyApIHtcclxuXHRcdFx0dGhpcy5yZW1vdmVQcmV2SXRlbXMoIHByZXZWYWx1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IGluZGV4IG9mIE9iamVjdC5rZXlzKCBjdXJyZW50ICkgKSB7XHJcblx0XHRcdGlmICggIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5ydW5JdGVtKCAraW5kZXgsIGhhc0RlbGV0ZWRJdGVtcyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBjYWxjVmFsdWUgPSAwO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKCBjdXJyZW50ICkgKSB7XHJcblx0XHRcdHJvdy5pbml0Q2FsYygpO1xyXG5cdFx0XHRjYWxjVmFsdWUgKz0gcm93LmNhbGM7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSBjYWxjVmFsdWU7XHJcblx0fTtcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gY3VycmVudEluZGV4ICAgIHtOdW1iZXJ9XHJcblx0ICogQHBhcmFtIHNob3VsZFJlT2JzZXJ2ZVxyXG5cdCAqL1xyXG5cdHRoaXMucnVuSXRlbSA9IGZ1bmN0aW9uICggY3VycmVudEluZGV4LCBzaG91bGRSZU9ic2VydmUgPSBmYWxzZSApIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3d9XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IG9ic2VydmFibGUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnRbIGN1cnJlbnRJbmRleCBdO1xyXG5cclxuXHRcdGlmICggb2JzZXJ2YWJsZS5pc09ic2VydmVkICkge1xyXG5cdFx0XHRpZiAoICFzaG91bGRSZU9ic2VydmUgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvYnNlcnZhYmxlLnJvb3ROb2RlLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcclxuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuaW5wdXQudGVtcGxhdGUuaW5uZXJIVE1MLnRyaW0oKTtcclxuXHJcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUwucmVwbGFjZShcclxuXHRcdFx0L19faV9fL2csXHJcblx0XHRcdGN1cnJlbnRJbmRleCxcclxuXHRcdCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXNldCBpbnB1dCB2YWx1ZXMgZm9yIGEgbmV3IHJvd1xyXG5cdFx0ICpcclxuXHRcdCAqIEBzaW5jZSAzLjQuN1xyXG5cdFx0ICovXHJcblx0XHRjb25zdCBuZXdSb3cgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0Y29uc3QgaW5wdXRzID0gbmV3Um93LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIG91dHB1dFwiICk7XHJcblxyXG5cdFx0aW5wdXRzLmZvckVhY2goICggaW5wdXQgKSA9PiB7XHJcblx0XHRcdHN3aXRjaCAoIGlucHV0LnR5cGUgKSB7XHJcblx0XHRcdFx0Y2FzZSBcImNoZWNrYm94XCI6XHJcblx0XHRcdFx0Y2FzZSBcInJhZGlvXCI6XHJcblx0XHRcdFx0XHQvLyBQcmVzZXJ2ZSBkZWZhdWx0IGNoZWNrZWQgc3RhdGUgZm9yIGNoZWNrYm94L3JhZGlvIGZpZWxkc1xyXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGlucHV0IGhhcyBkZWZhdWx0Q2hlY2tlZCBhdHRyaWJ1dGUgKGZyb20gSFRNTClcclxuXHRcdFx0XHRcdGlucHV0LmNoZWNrZWQgPSBpbnB1dC5kZWZhdWx0Q2hlY2tlZCB8fCBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJzZWxlY3Qtb25lXCI6XHJcblx0XHRcdFx0Y2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxyXG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9ucyA9IGlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoICdvcHRpb24nICk7XHJcblx0XHRcdFx0XHRvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XHJcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi5kZWZhdWx0U2VsZWN0ZWQgfHwgZmFsc2U7XHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiZmlsZVwiOlxyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcInJhbmdlXCI6XHJcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LmRlZmF1bHRWYWx1ZSB8fCBcIlwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQuZGVmYXVsdFZhbHVlIHx8IFwiXCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZC5kYXRhc2V0LmluZGV4ID0gJycgKyBjdXJyZW50SW5kZXg7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5jb250YWluZXIuYXBwZW5kKCBuZXdSb3cgKTtcclxuXHJcblx0XHRjb25zdCBhcHBlbmRlZCA9IHRoaXMuaW5wdXQuY29udGFpbmVyLmxhc3RDaGlsZDtcclxuXHJcblx0XHRpZiAoIHRoaXMuaW5wdXQuaXNNYW51YWxDb3VudCApIHtcclxuXHRcdFx0YXBwZW5kZWQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXHJcblx0XHRcdCkuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0XHQnY2xpY2snLFxyXG5cdFx0XHRcdCgpID0+IG9ic2VydmFibGUucmVtb3ZlTWFudWFsbHkoKSxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcclxuXHRcdFx0b2JzZXJ2YWJsZS5yZU9ic2VydmUoIGFwcGVuZGVkICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRvYnNlcnZhYmxlLm9ic2VydmUoIGFwcGVuZGVkICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5yZW1vdmVQcmV2SXRlbXMgPSBmdW5jdGlvbiAoIHByZXZSb3dzICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHByZXZSb3cgb2YgcHJldlJvd3MgKSB7XHJcblx0XHRcdGlmICggIWN1cnJlbnQuaW5jbHVkZXMoIHByZXZSb3cgKSApIHtcclxuXHRcdFx0XHRwcmV2Um93LnJlbW92ZU1hbnVhbGx5KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxSZXBlYXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVwZWF0ZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmVwZWF0ZXJEYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsUmVwZWF0ZXIgZnJvbSAnLi9zaWduYWwnO1xyXG5pbXBvcnQgUmVwZWF0ZXJSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZXBlYXRlclJlc3RyaWN0aW9uJztcclxuaW1wb3J0IHsgcmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUgfSBmcm9tICcuL3JlcGVhdGVyLW1hY3Jvcyc7XHJcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcblx0ICAgICAgYWRkQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBSZXBlYXRlckRhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxSZXBlYXRlciwgLi4uc2lnbmFscyBdO1xyXG5cclxuXHRcdHJldHVybiBzaWduYWxzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5jb25zdCBhZGRSZXN0cmljdGlvbiA9ICggcmVzdHJpY3Rpb25zICkgPT4ge1xyXG5cdHJlc3RyaWN0aW9ucy5wdXNoKFxyXG5cdFx0UmVwZWF0ZXJSZXN0cmljdGlvbixcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xyXG59O1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zLmRlZmF1bHQnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcclxuXHRhZGRSZXN0cmljdGlvbixcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxyXG5cdGFkZFJlc3RyaWN0aW9uLFxyXG4pO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIubXVsdGlzdGVwLnBhZ2Uub2JzZXJ2ZWQuaW5wdXQnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF8UmVwZWF0ZXJEYXRhfVxyXG5cdCAqIEBwYXJhbSBwYWdlU3RhdGUge1BhZ2VTdGF0ZX1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiAoIGlucHV0LCBwYWdlU3RhdGUgKSB7XHJcblx0XHRpZiAoICdyZXBlYXRlcicgIT09IGlucHV0LmlucHV0VHlwZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IGlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW107XHJcblxyXG5cdFx0aW5wdXQud2F0Y2goICgpID0+IHBhZ2VTdGF0ZS51cGRhdGVTdGF0ZSgpICk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAcGFyYW0gY3VycmVudElucHV0IHtJbnB1dERhdGF9XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIG9ic2VydmVJbm5lcklucHV0KCBjdXJyZW50SW5wdXQgKSB7XHJcblx0XHRcdHBhZ2VTdGF0ZS5oYW5kbGVJbnB1dEVudGVyKCBjdXJyZW50SW5wdXQgKTtcclxuXHJcblx0XHRcdGlmICggIWN1cnJlbnRJbnB1dC5yZXBvcnRpbmc/LnJlc3RyaWN0aW9ucz8ubGVuZ3RoICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y3VycmVudElucHV0LndhdGNoVmFsaWRpdHkoICgpID0+IHBhZ2VTdGF0ZS51cGRhdGVTdGF0ZSgpICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgb2JzZXJ2YWJsZVJvdyBvZiBjdXJyZW50ICkge1xyXG5cdFx0XHRvYnNlcnZhYmxlUm93LmdldElucHV0cygpLmZvckVhY2goIG9ic2VydmVJbm5lcklucHV0ICk7XHJcblx0XHR9XHJcblx0XHRpbnB1dC5sYXN0T2JzZXJ2ZWQud2F0Y2goICgpID0+IHtcclxuXHRcdFx0aW5wdXQubGFzdE9ic2VydmVkLmN1cnJlbnQuZ2V0SW5wdXRzKCkuZm9yRWFjaCggb2JzZXJ2ZUlubmVySW5wdXQgKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcclxuXHQoIGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgKSA9PlxyXG5cdFx0cmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUoIGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgKSxcclxuKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=