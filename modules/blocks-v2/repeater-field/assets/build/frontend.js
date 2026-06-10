/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/ObservableRow.js"
/*!***********************************!*\
  !*** ./frontend/ObservableRow.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  Observable,
  CalculatedFormula
} = JetFormBuilderAbstract;
function cloneObservedValue(value) {
  if (Array.isArray(value)) {
    return [...value];
  }
  if (value && 'object' === typeof value) {
    return {
      ...value
    };
  }
  return value;
}
function isNativeDateLikeInput(input) {
  var _input$nodes;
  const [node] = (_input$nodes = input?.nodes) !== null && _input$nodes !== void 0 ? _input$nodes : [];
  return ['date', 'time', 'datetime-local'].includes(node?.type);
}
function stampObservedInputs(row) {
  row._observeVersion = (row._observeVersion || 0) + 1;
  for (const input of row.getInputs()) {
    input._observeVersion = row._observeVersion;
  }
}
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
  const prevValues = {};
  const prevNodeValues = {};
  for (const [fieldName, value] of Object.entries(this.value?.current || {})) {
    prevValues[fieldName] = cloneObservedValue(value);
  }
  for (const input of this.getInputs()) {
    const fieldName = input.getName();
    prevValues[input.getName()] = cloneObservedValue(input.getValue());
    if (isNativeDateLikeInput(input)) {
      var _input$nodes$0$value;
      prevNodeValues[fieldName] = (_input$nodes$0$value = input.nodes?.[0]?.value) !== null && _input$nodes$0$value !== void 0 ? _input$nodes$0$value : '';
    }
  }
  this.dataInputs = {};
  Observable.prototype.observe.call(this, root);
  stampObservedInputs(this);
  for (const input of this.getInputs()) {
    const fieldName = input.getName();
    if (!Object.prototype.hasOwnProperty.call(prevValues, fieldName)) {
      continue;
    }
    if (isNativeDateLikeInput(input)) {
      const [node] = input.nodes;
      if (Object.prototype.hasOwnProperty.call(prevNodeValues, fieldName) && node) {
        node.value = prevNodeValues[fieldName];
      }
      input.reQueryValue();
      continue;
    }
    input.silenceSet(cloneObservedValue(prevValues[fieldName]));
  }
  this.parent.lastObserved.current = this;
};
ObservableRow.prototype.observe = function (root) {
  Observable.prototype.observe.call(this, root);
  stampObservedInputs(this);
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

/***/ },

/***/ "./frontend/functions.js"
/*!*******************************!*\
  !*** ./frontend/functions.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./frontend/input.js"
/*!***************************!*\
  !*** ./frontend/input.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./frontend/repeater-macros.js"
/*!*************************************!*\
  !*** ./frontend/repeater-macros.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./frontend/restrictions/RepeaterRestriction.js"
/*!******************************************************!*\
  !*** ./frontend/restrictions/RepeaterRestriction.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./frontend/signal.js"
/*!****************************!*\
  !*** ./frontend/signal.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./frontend/index.pcss"
/*!*****************************!*\
  !*** ./frontend/index.pcss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
  const getCurrentInputs = () => (input.value.current || []).flatMap(observableRow => observableRow.getInputs());

  /**
   * @param currentInput {InputData}
   */
  function observeInnerInput(currentInput) {
    pageState.registerInput(currentInput, {
      includeInValidation: false
    });
  }
  function syncCurrentInputs() {
    const currentInputs = getCurrentInputs();
    const currentSet = new Set(currentInputs);
    const currentRows = new Set(input.value.current || []);
    const repeaterTrackedInputs = pageState.getTrackedInputs().filter(currentInput => currentInput.root?.parent === input);
    const staleTrackedInputs = repeaterTrackedInputs.filter(currentInput => (!currentRows.has(currentInput.root) || currentInput._observeVersion !== currentInput.root?._observeVersion) && !currentSet.has(currentInput));
    staleTrackedInputs.forEach(currentInput => pageState.unregisterInput(currentInput));
    currentInputs.forEach(observeInnerInput);
    pageState.updateState();
  }
  syncCurrentInputs();
  input.watch(syncCurrentInputs);
  input.lastObserved.watch(syncCurrentInputs);
});
addFilter('jet.fb.macro.field.value', 'jet-form-builder/repeater-field', (current, $fieldNode, $macroHost) => (0,_repeater_macros__WEBPACK_IMPORTED_MODULE_3__.resolveRepeaterMacrosValue)(current, $fieldNode, $macroHost));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDblFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7OztBQzlJQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFNQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFRQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9PYnNlcnZhYmxlUm93LmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXBlYXRlci1tYWNyb3MuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvcmVzdHJpY3Rpb25zL1JlcGVhdGVyUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2luZGV4LnBjc3MiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuXHQgICAgICBPYnNlcnZhYmxlLFxuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBjbG9uZU9ic2VydmVkVmFsdWUoIHZhbHVlICkge1xuXHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0cmV0dXJuIFsgLi4udmFsdWUgXTtcblx0fVxuXG5cdGlmICggdmFsdWUgJiYgJ29iamVjdCcgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4geyAuLi52YWx1ZSB9O1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZURhdGVMaWtlSW5wdXQoIGlucHV0ICkge1xuXHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Py5ub2RlcyA/PyBbXTtcblxuXHRyZXR1cm4gWyAnZGF0ZScsICd0aW1lJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlPy50eXBlICk7XG59XG5cbmZ1bmN0aW9uIHN0YW1wT2JzZXJ2ZWRJbnB1dHMoIHJvdyApIHtcblx0cm93Ll9vYnNlcnZlVmVyc2lvbiA9ICggcm93Ll9vYnNlcnZlVmVyc2lvbiB8fCAwICkgKyAxO1xuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIHJvdy5nZXRJbnB1dHMoKSApIHtcblx0XHRpbnB1dC5fb2JzZXJ2ZVZlcnNpb24gPSByb3cuX29ic2VydmVWZXJzaW9uO1xuXHR9XG59XG5cbmZ1bmN0aW9uIE9ic2VydmFibGVSb3coIHBhcmVudCApIHtcblx0T2JzZXJ2YWJsZS5jYWxsKCB0aGlzLCBwYXJlbnQgKTtcblxuXHQvLyBCeSBkZWZhdWx0IHdlIHJldHVybiB0aGUgbnVtYmVyIG9mIHJlcGVhdGVyIHJvd3Ncblx0dGhpcy5jYWxjICAgICAgID0gMTtcblx0dGhpcy5pbml0ZWRDYWxjID0gZmFsc2U7XG59XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlICAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKCBPYnNlcnZhYmxlLnByb3RvdHlwZSApO1xuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuY2FsYyAgICAgICA9IDE7XG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5pbml0ZWRDYWxjID0gZmFsc2U7XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLnJlT2JzZXJ2ZSA9IGZ1bmN0aW9uICggcm9vdCApIHtcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XG5cdGNvbnN0IHByZXZWYWx1ZXMgPSB7fTtcblx0Y29uc3QgcHJldk5vZGVWYWx1ZXMgPSB7fTtcblxuXHRmb3IgKCBjb25zdCBbIGZpZWxkTmFtZSwgdmFsdWUgXSBvZiBPYmplY3QuZW50cmllcyggdGhpcy52YWx1ZT8uY3VycmVudCB8fCB7fSApICkge1xuXHRcdHByZXZWYWx1ZXNbIGZpZWxkTmFtZSBdID0gY2xvbmVPYnNlcnZlZFZhbHVlKCB2YWx1ZSApO1xuXHR9XG5cblx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRjb25zdCBmaWVsZE5hbWUgPSBpbnB1dC5nZXROYW1lKCk7XG5cblx0XHRwcmV2VmFsdWVzWyBpbnB1dC5nZXROYW1lKCkgXSA9IGNsb25lT2JzZXJ2ZWRWYWx1ZSggaW5wdXQuZ2V0VmFsdWUoKSApO1xuXG5cdFx0aWYgKCBpc05hdGl2ZURhdGVMaWtlSW5wdXQoIGlucHV0ICkgKSB7XG5cdFx0XHRwcmV2Tm9kZVZhbHVlc1sgZmllbGROYW1lIF0gPSBpbnB1dC5ub2Rlcz8uWyAwIF0/LnZhbHVlID8/ICcnO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuZGF0YUlucHV0cyAgPSB7fTtcblx0T2JzZXJ2YWJsZS5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzLCByb290ICk7XG5cdHN0YW1wT2JzZXJ2ZWRJbnB1dHMoIHRoaXMgKTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdGNvbnN0IGZpZWxkTmFtZSA9IGlucHV0LmdldE5hbWUoKTtcblxuXHRcdGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggcHJldlZhbHVlcywgZmllbGROYW1lICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIGlzTmF0aXZlRGF0ZUxpa2VJbnB1dCggaW5wdXQgKSApIHtcblx0XHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRcdGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBwcmV2Tm9kZVZhbHVlcywgZmllbGROYW1lICkgJiYgbm9kZSApIHtcblx0XHRcdFx0bm9kZS52YWx1ZSA9IHByZXZOb2RlVmFsdWVzWyBmaWVsZE5hbWUgXTtcblx0XHRcdH1cblxuXHRcdFx0aW5wdXQucmVRdWVyeVZhbHVlKCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpbnB1dC5zaWxlbmNlU2V0KCBjbG9uZU9ic2VydmVkVmFsdWUoIHByZXZWYWx1ZXNbIGZpZWxkTmFtZSBdICkgKTtcblx0fVxuXG5cdHRoaXMucGFyZW50Lmxhc3RPYnNlcnZlZC5jdXJyZW50ID0gdGhpcztcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoIHJvb3QgKSB7XG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xuXHRzdGFtcE9ic2VydmVkSW5wdXRzKCB0aGlzICk7XG5cblx0dGhpcy5wYXJlbnQubGFzdE9ic2VydmVkLmN1cnJlbnQgPSB0aGlzO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVtb3ZlTWFudWFsbHkgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggdGhpcy5faXNSZW1vdmluZyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLl9pc1JlbW92aW5nID0gdHJ1ZTtcblxuXHRjb25zdCBvdGhlclJvd3MgPSB0aGlzLnBhcmVudC52YWx1ZS5jdXJyZW50LmZpbHRlciggcm93ID0+IHJvdyAhPT0gdGhpcyAmJiAhcm93Ll9pc1JlbW92aW5nICk7XG5cblx0Y29uc3Qgb3RoZXJWYWx1ZXMgPSBvdGhlclJvd3MubWFwKCByb3cgPT4ge1xuXHRcdC8vIFRyeSB0byBnZXQgdmFsdWVzIGZyb20gZGF0YUlucHV0cyBpZiB2YWx1ZS5jdXJyZW50IGlzIGVtcHR5XG5cdFx0Y29uc3QgZGVlcENvcHlWYWx1ZXMgPSB7fTtcblxuXHRcdC8vIEZpcnN0LCB0cnkgZnJvbSB2YWx1ZS5jdXJyZW50XG5cdFx0Zm9yICggY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKCByb3cudmFsdWUuY3VycmVudCB8fCB7fSApICkge1xuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gWy4uLnZhbHVlXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB2YWx1ZS5jdXJyZW50IGlzIGVtcHR5LCB0cnkgdG8gZ2V0IGZyb20gZGF0YUlucHV0c1xuXHRcdGlmICggMCA9PT0gT2JqZWN0LmtleXMoIGRlZXBDb3B5VmFsdWVzICkubGVuZ3RoICYmIHJvdy5kYXRhSW5wdXRzICkge1xuXHRcdFx0Zm9yICggY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKCByb3cuZGF0YUlucHV0cyApICkge1xuXHRcdFx0XHRpZiAoIGlucHV0ICYmIGlucHV0LmdldFZhbHVlICkge1xuXHRcdFx0XHRcdGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dC5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggaW5wdXRWYWx1ZSApICkge1xuXHRcdFx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IFsuLi5pbnB1dFZhbHVlXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IGlucHV0VmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5vZGU6IHJvdy5yb290Tm9kZSxcblx0XHRcdHZhbHVlczogZGVlcENvcHlWYWx1ZXNcblx0XHR9O1xuXHR9ICk7XG5cblx0b3RoZXJSb3dzLmZvckVhY2goICggcm93LCBpbmRleCApID0+IHtcblx0XHRpZiAoIG90aGVyVmFsdWVzW2luZGV4XSApIHtcblx0XHRcdGNvbnN0IHZhbHVlc1RvUmVzdG9yZSA9IG90aGVyVmFsdWVzW2luZGV4XS52YWx1ZXM7XG5cblx0XHRcdGZvciAoIGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyggdmFsdWVzVG9SZXN0b3JlICkgKSB7XG5cdFx0XHRcdHJvdy52YWx1ZS5jdXJyZW50W2tleV0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBpbnB1dHMgPSByb3cuZ2V0SW5wdXRzKCk7XG5cblx0XHRcdFx0aW5wdXRzLmZvckVhY2goIGlucHV0ID0+IHtcblx0XHRcdFx0XHRpZiAoIGlucHV0LnVwZGF0ZVByZXZpZXdzICYmIHR5cGVvZiBpbnB1dC51cGRhdGVQcmV2aWV3cyA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRcdGlucHV0LnVwZGF0ZVByZXZpZXdzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gUmVpbml0aWFsaXplIHJvdyBmb3JtdWxhIGFmdGVyIHJlaW5kZXhpbmdcblx0XHRcdFx0cm93LmluaXRlZENhbGMgPSBmYWxzZTsgLy8gUmVzZXQgdGhlIGZsYWcgdG8gYWxsb3cgcmUtaW5pdGlhbGl6YXRpb25cblx0XHRcdFx0cm93LmluaXRDYWxjKCk7IC8vIFJlLWluaXRpYWxpemUgdGhlIGZvcm11bGEgd2l0aCBuZXcgZmllbGQgbmFtZXNcblx0XHRcdH0sIDUwICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0dGhpcy5yZW1vdmUoKTtcblx0dGhpcy5wYXJlbnQucmVtb3ZlKCB0aGlzICk7XG5cdHRoaXMucm9vdE5vZGUucmVtb3ZlKCk7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5pbml0Q2FsYyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLmluaXRlZENhbGMgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5pbml0ZWRDYWxjICAgICA9IHRydWU7XG5cdGNvbnN0IFsgbm9kZSBdICAgICAgPSB0aGlzLnBhcmVudC5ub2Rlcztcblx0Y29uc3QgZm9ybXVsYVN0cmluZyA9IG5vZGUuZGF0YXNldD8uZm9ybXVsYTtcblxuXHRpZiAoICFmb3JtdWxhU3RyaW5nIHx8ICdkZWZhdWx0JyA9PT0gdGhpcy5wYXJlbnQuY2FsY1R5cGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcyApO1xuXG5cdGZvcm11bGEub2JzZXJ2ZSggZm9ybXVsYVN0cmluZyApO1xuXHRmb3JtdWxhLnNldFJlc3VsdCAgICAgICA9ICgpID0+IHtcblx0XHR0aGlzLmNhbGMgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHRcdHRoaXMucGFyZW50LnZhbHVlLm5vdGlmeSgpO1xuXHR9O1xuXHRmb3JtdWxhLnJlbGF0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0cmV0dXJuIGlucHV0LmNhbGNWYWx1ZTtcblx0fTtcblx0Zm9ybXVsYS5lbXB0eVZhbHVlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cblx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0dGhpcy5wYXJlbnQuc2lsZW5jZU5vdGlmeSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZVJvdztcbiIsIi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzUmVwZWF0ZXIoIG5vZGUgKSB7XG5cdHJldHVybiAxID09PSArbm9kZS5kYXRhc2V0LnJlcGVhdGVyO1xufVxuXG5leHBvcnQgeyBpc1JlcGVhdGVyIH07IiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBPYnNlcnZhYmxlUm93IGZyb20gJy4vT2JzZXJ2YWJsZVJvdyc7XG5cbmNvbnN0IHtcblx0SW5wdXREYXRhLFxuXHRSZWFjdGl2ZVZhcixcbn0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gUmVwZWF0ZXJEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCh0aGlzKTtcblxuXHR0aGlzLmJ1dHRvbk5vZGUgPSBmYWxzZTtcblx0dGhpcy50ZW1wbGF0ZSA9IG51bGw7XG5cdHRoaXMuY29udGFpbmVyID0gbnVsbDtcblx0dGhpcy5sYXN0T2JzZXJ2ZWQgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0dGhpcy5sYXN0T2JzZXJ2ZWQubWFrZSgpO1xuXG5cdHRoaXMuYWRkRXZlbnRBdHRhY2hlZCA9IGZhbHNlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuXHRcdHJldHVybiBpc1JlcGVhdGVyKG5vZGUpO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VJbnZhbGlkID0gKCkgPT4geyB9O1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VWYWxpZCA9ICgpID0+IHsgfTtcblx0fTtcblxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgW25vZGVdID0gdGhpcy5ub2Rlcztcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcblxuXHRcdGZvciAoY29uc3Qgcm93IG9mIG5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93Jyxcblx0XHQpKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IE9ic2VydmFibGVSb3codGhpcyk7XG5cdFx0XHRjdXJyZW50LnJvb3ROb2RlID0gcm93O1xuXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQucHVzaChjdXJyZW50KTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCkge1xuXHRcdFx0Y3VycmVudEVsZW1lbnQub2JzZXJ2ZSgpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50KSB7XG5cdFx0XHRjdXJyZW50RWxlbWVudC5pbml0Q2FsYygpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnLFxuXHRcdCk7XG5cblx0XHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiByZW1vdmVCdXR0b25zKSB7XG5cdFx0XHRjb25zdCByb3cgPSB0aGlzLmNsb3Nlc3RSb3coYnV0dG9uKTtcblxuXHRcdFx0aWYgKCFyb3cpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdy5yZW1vdmVNYW51YWxseSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc01hbnVhbENvdW50KSB7XG5cdFx0XHRpZiAoIXRoaXMuYWRkRXZlbnRBdHRhY2hlZCAmJiAhdGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYWRkTmV3KCkpO1xuXHRcdFx0XHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuaGFzTGlzdGVuZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5yb290LmdldElucHV0KHRoaXMuaXRlbXNGaWVsZCk7XG5cblx0XHRpZiAoIWlucHV0KSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdFx0YEpldEZvcm1CdWlsZGVyIGVycm9yOiB1bmRlZmluZWQgaW5wdXQgYnkgbmFtZSBbJHt0aGlzLml0ZW1zRmllbGR9XWAsXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW5wdXQud2F0Y2goKCkgPT4gdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKGlucHV0KSk7XG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKGlucHV0KTtcblx0fTtcblx0dGhpcy5zZXROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCh0aGlzLCBub2RlKTtcblxuXHRcdHRoaXMubm9kZXMgPSBbbm9kZV07XG5cdFx0dGhpcy5uYW1lID0gbm9kZS5kYXRhc2V0LmZpZWxkTmFtZTtcblx0XHR0aGlzLnJhd05hbWUgPSB0aGlzLm5hbWU7XG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAncmVwZWF0ZXInO1xuXG5cdFx0dGhpcy5tYW5hZ2VJdGVtcyA9IG5vZGUuZGF0YXNldD8ubWFuYWdlSXRlbXMgfHwgJ21hbnVhbGx5Jztcblx0XHR0aGlzLmNhbGNUeXBlID0gbm9kZS5kYXRhc2V0Py5jYWxjVHlwZSB8fCAnZGVmYXVsdCc7XG5cdFx0dGhpcy5pdGVtc0ZpZWxkID0gbm9kZS5kYXRhc2V0Py5pdGVtc0ZpZWxkO1xuXG5cdFx0dGhpcy5pc01hbnVhbENvdW50ID0gKFxuXHRcdFx0IXRoaXMuaXRlbXNGaWVsZCB8fCAnbWFudWFsbHknID09PSB0aGlzLm1hbmFnZUl0ZW1zXG5cdFx0KTtcblxuXHRcdC8vIGNhbiBiZSBudWxsXG5cdFx0dGhpcy5idXR0b25Ob2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19uZXcnLFxuXHRcdCk7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faW5pdGlhbCcsXG5cdFx0KTtcblx0XHR0aGlzLmNvbnRhaW5lciA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnLFxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IFtdO1xuXHR9O1xuXG5cdHRoaXMucG9wdWxhdGVJbm5lciA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXRoaXMudmFsdWUuY3VycmVudD8ubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXRzID0gW107XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuXHRcdFx0Zm9yIChjb25zdCBpbnB1dCBvZiByb3cuZ2V0SW5wdXRzKCkpIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRpZiAoIWlucHV0LnJlcG9ydGluZz8ucmVzdHJpY3Rpb25zPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dHMucHVzaChpbnB1dCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fTtcblxuXHR0aGlzLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcblx0XHRcdHJvdy5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3QgcmVwZWF0ZXJSb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50XG5cblx0XHRyZXBlYXRlclJvd3MuZm9yRWFjaChyb3cgPT4ge1xuXHRcdFx0cm93LmdldElucHV0cygpLmZvckVhY2goaW5wdXQgPT4ge1xuXHRcdFx0XHRpbnB1dC5zZXRWYWx1ZSgpO1xuXHRcdFx0XHRpbnB1dC5pbml0Tm90aWZ5VmFsdWUoKTtcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cbn1cblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW5wdXREYXRhLnByb3RvdHlwZSk7XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYnV0dG9uTm9kZSA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnRlbXBsYXRlID0gbnVsbDtcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuY29udGFpbmVyID0gbnVsbDtcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuaXRlbXNGaWVsZCA9IGZhbHNlO1xuLyoqXG4gKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG4gKi9cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUubGFzdE9ic2VydmVkID0gbnVsbDtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5hZGROZXcgPSBmdW5jdGlvbiAoY291bnQgPSAxKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IFtcblx0XHQuLi50aGlzLnZhbHVlPy5jdXJyZW50ID8/IFtdLFxuXHRcdC4uLihcblx0XHRcdG5ldyBBcnJheShjb3VudClcblx0XHQpLmZpbGwobnVsbCkubWFwKFxuXHRcdFx0KCkgPT4gbmV3IE9ic2VydmFibGVSb3codGhpcyksXG5cdFx0KSxcblx0XTtcbn07XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24gKG9ic2VydmFibGVSb3cpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUuY3VycmVudCkpIHtcblx0XHRyZXR1cm4gLTE7XG5cdH1cblx0cmV0dXJuIHRoaXMudmFsdWUuY3VycmVudC5maW5kSW5kZXgoXG5cdFx0Y3VycmVudCA9PiBjdXJyZW50ID09PSBvYnNlcnZhYmxlUm93LFxuXHQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0VsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufE9ic2VydmFibGVSb3d9XG4gKi9cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuY2xvc2VzdFJvdyA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdGNvbnN0IHJvd05vZGUgPSBub2RlLmNsb3Nlc3QoJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3cnKTtcblxuXHRpZiAoIXJvd05vZGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0ICovXG5cdGNvbnN0IHJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0Zm9yIChjb25zdCByb3cgb2Ygcm93cykge1xuXHRcdGlmIChyb3cucm9vdE5vZGUgPT09IHJvd05vZGUpIHtcblx0XHRcdHJldHVybiByb3c7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZVJvdykge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuZmlsdGVyKFxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCAhPT0gb2JzZXJ2YWJsZVJvdyxcblx0KTtcbn07XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUucmVjYWxjdWxhdGVJdGVtcyA9IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xuXG5cdC8vIGlmIGl0IDwgMCA9PT4gd2Ugc2hvdWxkIGFkZCB7ZGlmZn0gbmV3IHJlcGVhdGVyIGl0ZW1zXG5cdC8vIGlmIGl0ID4gMCA9PT4gd2Ugc2hvdWxkIHJlbW92ZSBsYXN0IHtkaWZmfSBpdGVtc1xuXHRjb25zdCBkaWZmID0gY3VycmVudENvdW50IC0gaW5wdXQuY2FsY1ZhbHVlO1xuXG5cdGlmICgwID09PSBkaWZmKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRpZmYgPCAwKSB7XG5cdFx0dGhpcy5hZGROZXcoLTEgKiBkaWZmKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuY3VycmVudC5zbGljZSgwLCAtMSAqIGRpZmYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJEYXRhOyIsImNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5mdW5jdGlvbiBiaW5kUmVwZWF0ZXJOb3RpZnlPbmNlKCBub2RlICkge1xuXHRpZiAoIG5vZGUuX19qZmJNYWNyb3NSZXBlYXRlckJvdW5kICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGUuX19qZmJNYWNyb3NSZXBlYXRlckJvdW5kID0gdHJ1ZTtcblxuXHRjb25zdCBmb3JtICAgPSBub2RlLmNsb3Nlc3QoICdmb3JtLmpldC1mb3JtLWJ1aWxkZXInICk7XG5cdGNvbnN0IGZvcm1JZCA9IGZvcm0/LmRhdGFzZXQ/LmZvcm1JZDtcblx0Y29uc3Qgc3RvcmUgID0gd2luZG93LkpldEZvcm1CdWlsZGVyPy5bIGZvcm1JZCBdO1xuXG5cdGNvbnN0IHJlcGVhdGVySW5wdXQgPSBzdG9yZT8uZ2V0SW5wdXQ/Liggbm9kZS5kYXRhc2V0LmZpZWxkTmFtZSApO1xuXG5cdGNvbnN0IG5vdGlmeSA9ICgpID0+IHtcblx0XHRyZXBlYXRlcklucHV0Py52YWx1ZT8ubm90aWZ5Py4oKTtcblx0fTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsIG5vdGlmeSwgdHJ1ZSApO1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBub3RpZnksIHRydWUgKTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHQoIGUgKSA9PiB7XG5cdFx0XHRjb25zdCByZW1vdmVCdG4gPSBlLnRhcmdldC5jbG9zZXN0Py4oICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93LXJlbW92ZScgKTtcblx0XHRcdGlmICggIXJlbW92ZUJ0biB8fCAhbm9kZS5jb250YWlucyggcmVtb3ZlQnRuICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSggbm90aWZ5ICk7XG5cdFx0fSxcblx0XHR0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoIGVsICkge1xuXHRpZiAoIGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGVsLm11bHRpcGxlICkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IEFycmF5LmZyb20oIGVsLnNlbGVjdGVkT3B0aW9ucyB8fCBbXSApXG5cdFx0XHQubWFwKCAoIG9wdCApID0+IFN0cmluZyggb3B0LnZhbHVlID8/ICcnICkudHJpbSgpIClcblx0XHRcdC5maWx0ZXIoIEJvb2xlYW4gKTtcblxuXHRcdHJldHVybiB2YWx1ZXMuam9pbiggJywgJyApO1xuXHR9XG5cblx0cmV0dXJuIFN0cmluZyggZWwudmFsdWUgPz8gJycgKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGdldFJlcGVhdGVyRmllbGRWYWx1ZSggZWwsIHJvd0VsLCByb3dSZXBlYXRlckZpZWxkICkge1xuXHRjb25zdCBjdXJyZW50ID0gZ2V0RmllbGRWYWx1ZSggZWwgKTtcblxuXHRyZXR1cm4gYXBwbHlGaWx0ZXJzKFxuXHRcdCdqZXQuZmIubWFjcm8uaW5zaWRlLnJlcGVhdGVyLmZpZWxkLnZhbHVlJyxcblx0XHRjdXJyZW50LFxuXHRcdGVsLFxuXHRcdHJvd0VsLFxuXHRcdHJvd1JlcGVhdGVyRmllbGRcblx0KTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdFJvd1ZhbHVlcyggcm93RWwgKSB7XG5cdGNvbnN0IHZhbHVlc0J5TmFtZSA9IE9iamVjdC5jcmVhdGUoIG51bGwgKTtcblxuXHRjb25zdCByb3dSZXBlYXRlckZpZWxkID0gcm93RWwuY2xvc2VzdCggJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyApO1xuXHRjb25zdCBmaWVsZHMgPSByb3dFbC5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnICk7XG5cblx0ZmllbGRzLmZvckVhY2goICggZWwgKSA9PiB7XG5cdFx0Ly8gaWdub3JlIG5lc3RlZCByZXBlYXRlci1pbi1yZXBlYXRlclxuXHRcdGlmICggZWwuY2xvc2VzdCggJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyApICE9PSByb3dSZXBlYXRlckZpZWxkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggZWwuZGlzYWJsZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gaWdub3JlIGhpZGRlbiAodXN1YWxseSBzdG9yZXMgaW50ZXJuYWwvc2VydmljZSB2YWx1ZXMpXG5cdFx0aWYgKCBlbC50YWdOYW1lID09PSAnSU5QVVQnICYmIGVsLnR5cGUgPT09ICdoaWRkZW4nICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggKCBlbC50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsLnR5cGUgPT09ICdyYWRpbycgKSAmJiAhZWwuY2hlY2tlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBuYW1lID0gZWwuZGF0YXNldD8uZmllbGROYW1lIHx8IGVsLm5hbWUgfHwgJyc7XG5cdFx0aWYgKCAhbmFtZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZSA9IGdldFJlcGVhdGVyRmllbGRWYWx1ZSggZWwsIHJvd0VsLCByb3dSZXBlYXRlckZpZWxkICk7XG5cdFx0aWYgKCB2YWx1ZSA9PT0gJycgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZXNCeU5hbWVbIG5hbWUgXSApIHtcblx0XHRcdHZhbHVlc0J5TmFtZVsgbmFtZSBdICs9IGAsICR7IHZhbHVlIH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZXNCeU5hbWVbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdH1cblx0fSApO1xuXG5cdHJldHVybiB2YWx1ZXNCeU5hbWU7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzRnJvbVRlbXBsYXRlKCBmaWVsZE5vZGUsIHRlbXBsYXRlSHRtbCApIHtcblx0Y29uc3QgaXRlbXMgPSBmaWVsZE5vZGUucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtcycgKTtcblx0aWYgKCAhaXRlbXMgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xuXHR0cGwuaW5uZXJIVE1MID0gU3RyaW5nKCB0ZW1wbGF0ZUh0bWwgPz8gJycgKTtcblxuXHRjb25zdCByb3dzICA9IGl0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1yZXBlYXRlci1yb3ddJyApO1xuXHRjb25zdCBsaW5lcyA9IFtdO1xuXG5cdHJvd3MuZm9yRWFjaCggKCByb3dFbCApID0+IHtcblx0XHRjb25zdCBmcmFnbWVudCA9IHRwbC5jb250ZW50LmNsb25lTm9kZSggdHJ1ZSApO1xuXHRcdGNvbnN0IG1hY3JvTm9kZXMgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLW1hY3JvXScgKTtcblxuXHRcdGNvbnN0IHZhbHVlc0J5TmFtZSA9IGNvbGxlY3RSb3dWYWx1ZXMoIHJvd0VsICk7XG5cblx0XHRtYWNyb05vZGVzLmZvckVhY2goICggbm9kZSApID0+IHtcblx0XHRcdGNvbnN0IG1hY3JvTmFtZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1qZmItbWFjcm8nICkgfHwgJyc7XG5cdFx0XHRpZiAoICFtYWNyb05hbWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoIHZhbHVlc0J5TmFtZVsgbWFjcm9OYW1lIF0gPz8gJycgKTtcblx0XHR9ICk7XG5cblx0XHRjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdHRtcC5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcblx0XHRsaW5lcy5wdXNoKCB0bXAuaW5uZXJIVE1MICk7XG5cdH0gKTtcblxuXHRyZXR1cm4gbGluZXMuam9pbiggJycgKTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdFJlcGVhdGVyTGluZXNQbGFpbiggZmllbGROb2RlLCBtYWNyb3MgKSB7XG5cdGNvbnN0IGl0ZW1zID0gZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnICk7XG5cdGlmICggIWl0ZW1zICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IG1hY3Jvc1NldCA9IEFycmF5LmlzQXJyYXkoIG1hY3JvcyApICYmIG1hY3Jvcy5sZW5ndGhcblx0XHQ/IG5ldyBTZXQoIG1hY3JvcyApXG5cdFx0OiBudWxsO1xuXG5cdGNvbnN0IHJvd3MgID0gaXRlbXMucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLXJlcGVhdGVyLXJvd10nICk7XG5cdGNvbnN0IGxpbmVzID0gW107XG5cblx0cm93cy5mb3JFYWNoKCAoIHJvd0VsICkgPT4ge1xuXHRcdGNvbnN0IHJvd1JlcGVhdGVyRmllbGQgPSByb3dFbC5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnICk7XG5cdFx0Y29uc3QgZmllbGRzID0gcm93RWwucXVlcnlTZWxlY3RvckFsbCggJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyApO1xuXG5cdFx0ZmllbGRzLmZvckVhY2goICggZWwgKSA9PiB7XG5cdFx0XHRpZiAoIGVsLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcgKSAhPT0gcm93UmVwZWF0ZXJGaWVsZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbC5kaXNhYmxlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbC50YWdOYW1lID09PSAnSU5QVVQnICYmIGVsLnR5cGUgPT09ICdoaWRkZW4nICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoICggZWwudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbC50eXBlID09PSAncmFkaW8nICkgJiYgIWVsLmNoZWNrZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbmFtZSA9IGVsLmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCBlbC5uYW1lIHx8ICcnO1xuXHRcdFx0aWYgKCAhbmFtZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1hY3Jvc1NldCAmJiAhbWFjcm9zU2V0LmhhcyggbmFtZSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0UmVwZWF0ZXJGaWVsZFZhbHVlKCBlbCwgcm93RWwsIHJvd1JlcGVhdGVyRmllbGQgKTtcblx0XHRcdGxpbmVzLnB1c2goIGAkeyBuYW1lIH06ICR7IHZhbHVlIH1gICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0cmV0dXJuIGxpbmVzLmpvaW4oICc8YnIvPicgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ID0gZmFsc2UgKSB7XG5cdGNvbnN0IGZpZWxkTm9kZSA9ICRmaWVsZE5vZGU/LlsgMCBdO1xuXHRpZiAoICFmaWVsZE5vZGUgfHwgZmllbGROb2RlLmRhdGFzZXQ/LnJlcGVhdGVyICE9PSAnMScgKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRiaW5kUmVwZWF0ZXJOb3RpZnlPbmNlKCBmaWVsZE5vZGUgKTtcblxuXHRjb25zdCBob3N0ID0gJG1hY3JvSG9zdD8uWyAwIF07XG5cdGNvbnN0IHNvdXJjZSA9IGhvc3Q/Ll9famZiTWFjcm9UZW1wbGF0ZTtcblxuXHRpZiAoICFob3N0IHx8ICFzb3VyY2UgKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3RSZXBlYXRlckxpbmVzUGxhaW4oIGZpZWxkTm9kZSwgbnVsbCApO1xuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3RSZXBlYXRlckxpbmVzRnJvbVRlbXBsYXRlKCBmaWVsZE5vZGUsIHNvdXJjZSApO1xufSIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5sZXQge1xuXHQgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcblx0ICAgIFJlc3RyaWN0aW9uLFxuICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5BZHZhbmNlZFJlc3RyaWN0aW9uID0gQWR2YW5jZWRSZXN0cmljdGlvbiB8fCBSZXN0cmljdGlvbjtcblxuZnVuY3Rpb24gUmVwZWF0ZXJSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnJztcblx0fTtcbn1cblxuUmVwZWF0ZXJSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclJlc3RyaWN0aW9uOyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlcGVhdGVyRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gU2lnbmFsUmVwZWF0ZXIoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICggcHJldlZhbHVlID0gW10gKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gICAgID0gdGhpcy5pbnB1dC52YWx1ZTtcblx0XHRjb25zdCBoYXNEZWxldGVkSXRlbXMgPSAoXG5cdFx0XHRwcmV2VmFsdWU/Lmxlbmd0aCAmJiBwcmV2VmFsdWUubGVuZ3RoID4gY3VycmVudC5sZW5ndGhcblx0XHQpO1xuXG5cdFx0aWYgKCBoYXNEZWxldGVkSXRlbXMgKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVByZXZJdGVtcyggcHJldlZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgaW5kZXggb2YgT2JqZWN0LmtleXMoIGN1cnJlbnQgKSApIHtcblx0XHRcdGlmICggIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ydW5JdGVtKCAraW5kZXgsIGhhc0RlbGV0ZWRJdGVtcyApO1xuXHRcdH1cblxuXHRcdGxldCBjYWxjVmFsdWUgPSAwO1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoIGN1cnJlbnQgKSApIHtcblx0XHRcdHJvdy5pbml0Q2FsYygpO1xuXHRcdFx0Y2FsY1ZhbHVlICs9IHJvdy5jYWxjO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gY2FsY1ZhbHVlO1xuXHR9O1xuXHQvKipcblx0ICogQHBhcmFtIGN1cnJlbnRJbmRleCAgICB7TnVtYmVyfVxuXHQgKiBAcGFyYW0gc2hvdWxkUmVPYnNlcnZlXG5cdCAqL1xuXHR0aGlzLnJ1bkl0ZW0gPSBmdW5jdGlvbiAoIGN1cnJlbnRJbmRleCwgc2hvdWxkUmVPYnNlcnZlID0gZmFsc2UgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3d9XG5cdFx0ICovXG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudFsgY3VycmVudEluZGV4IF07XG5cblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcblx0XHRcdGlmICggIXNob3VsZFJlT2JzZXJ2ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRvYnNlcnZhYmxlLnJvb3ROb2RlLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnRlbXBsYXRlLmlubmVySFRNTC50cmltKCk7XG5cblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUwucmVwbGFjZShcblx0XHRcdC9fX2lfXy9nLFxuXHRcdFx0Y3VycmVudEluZGV4LFxuXHRcdCk7XG5cblx0XHQvKipcblx0XHQgKiBSZXNldCBpbnB1dCB2YWx1ZXMgZm9yIGEgbmV3IHJvd1xuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDMuNC43XG5cdFx0ICovXG5cdFx0Y29uc3QgbmV3Um93ID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRjb25zdCBpbnB1dHMgPSBuZXdSb3cucXVlcnlTZWxlY3RvckFsbCggXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgb3V0cHV0XCIgKTtcblxuXHRcdGlucHV0cy5mb3JFYWNoKCAoIGlucHV0ICkgPT4ge1xuXHRcdFx0c3dpdGNoICggaW5wdXQudHlwZSApIHtcblx0XHRcdFx0Y2FzZSBcImNoZWNrYm94XCI6XG5cdFx0XHRcdGNhc2UgXCJyYWRpb1wiOlxuXHRcdFx0XHRcdC8vIFByZXNlcnZlIGRlZmF1bHQgY2hlY2tlZCBzdGF0ZSBmb3IgY2hlY2tib3gvcmFkaW8gZmllbGRzXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGlucHV0IGhhcyBkZWZhdWx0Q2hlY2tlZCBhdHRyaWJ1dGUgKGZyb20gSFRNTClcblx0XHRcdFx0XHRpbnB1dC5jaGVja2VkID0gaW5wdXQuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJzZWxlY3Qtb25lXCI6XG5cdFx0XHRcdGNhc2UgXCJzZWxlY3QtbXVsdGlwbGVcIjpcblx0XHRcdFx0XHRjb25zdCBvcHRpb25zID0gaW5wdXQucXVlcnlTZWxlY3RvckFsbCggJ29wdGlvbicgKTtcblx0XHRcdFx0XHRvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24uZGVmYXVsdFNlbGVjdGVkIHx8IGZhbHNlO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZpbGVcIjpcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyYW5nZVwiOlxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQuZGVmYXVsdFZhbHVlIHx8IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC5kZWZhdWx0VmFsdWUgfHwgXCJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHR0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuZGF0YXNldC5pbmRleCA9ICcnICsgY3VycmVudEluZGV4O1xuXG5cdFx0dGhpcy5pbnB1dC5jb250YWluZXIuYXBwZW5kKCBuZXdSb3cgKTtcblxuXHRcdGNvbnN0IGFwcGVuZGVkID0gdGhpcy5pbnB1dC5jb250YWluZXIubGFzdENoaWxkO1xuXG5cdFx0aWYgKCB0aGlzLmlucHV0LmlzTWFudWFsQ291bnQgKSB7XG5cdFx0XHRhcHBlbmRlZC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXG5cdFx0XHQpLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdCgpID0+IG9ic2VydmFibGUucmVtb3ZlTWFudWFsbHkoKSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRvYnNlcnZhYmxlLnJlT2JzZXJ2ZSggYXBwZW5kZWQgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRvYnNlcnZhYmxlLm9ic2VydmUoIGFwcGVuZGVkICk7XG5cdH07XG5cblx0dGhpcy5yZW1vdmVQcmV2SXRlbXMgPSBmdW5jdGlvbiAoIHByZXZSb3dzICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoIGNvbnN0IHByZXZSb3cgb2YgcHJldlJvd3MgKSB7XG5cdFx0XHRpZiAoICFjdXJyZW50LmluY2x1ZGVzKCBwcmV2Um93ICkgKSB7XG5cdFx0XHRcdHByZXZSb3cucmVtb3ZlTWFudWFsbHkoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cblNpZ25hbFJlcGVhdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlcGVhdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBSZXBlYXRlckRhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsUmVwZWF0ZXIgZnJvbSAnLi9zaWduYWwnO1xuaW1wb3J0IFJlcGVhdGVyUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbic7XG5pbXBvcnQgeyByZXNvbHZlUmVwZWF0ZXJNYWNyb3NWYWx1ZSB9IGZyb20gJy4vcmVwZWF0ZXItbWFjcm9zJztcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIFJlcGVhdGVyRGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxSZXBlYXRlciwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pO1xuXG5jb25zdCBhZGRSZXN0cmljdGlvbiA9ICggcmVzdHJpY3Rpb25zICkgPT4ge1xuXHRyZXN0cmljdGlvbnMucHVzaChcblx0XHRSZXBlYXRlclJlc3RyaWN0aW9uLFxuXHQpO1xuXG5cdHJldHVybiByZXN0cmljdGlvbnM7XG59O1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zLmRlZmF1bHQnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGFkZFJlc3RyaWN0aW9uLFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0YWRkUmVzdHJpY3Rpb24sXG4pO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIubXVsdGlzdGVwLnBhZ2Uub2JzZXJ2ZWQuaW5wdXQnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF8UmVwZWF0ZXJEYXRhfVxuXHQgKiBAcGFyYW0gcGFnZVN0YXRlIHtQYWdlU3RhdGV9XG5cdCAqL1xuXHRmdW5jdGlvbiAoIGlucHV0LCBwYWdlU3RhdGUgKSB7XG5cdFx0aWYgKCAncmVwZWF0ZXInICE9PSBpbnB1dC5pbnB1dFR5cGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2V0Q3VycmVudElucHV0cyA9ICgpID0+IChcblx0XHRcdCggaW5wdXQudmFsdWUuY3VycmVudCB8fCBbXSApLmZsYXRNYXAoXG5cdFx0XHRcdG9ic2VydmFibGVSb3cgPT4gb2JzZXJ2YWJsZVJvdy5nZXRJbnB1dHMoKSxcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIGN1cnJlbnRJbnB1dCB7SW5wdXREYXRhfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG9ic2VydmVJbm5lcklucHV0KCBjdXJyZW50SW5wdXQgKSB7XG5cdFx0XHRwYWdlU3RhdGUucmVnaXN0ZXJJbnB1dChcblx0XHRcdFx0Y3VycmVudElucHV0LFxuXHRcdFx0XHR7IGluY2x1ZGVJblZhbGlkYXRpb246IGZhbHNlIH0sXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHN5bmNDdXJyZW50SW5wdXRzKCkge1xuXHRcdFx0Y29uc3QgY3VycmVudElucHV0cyA9IGdldEN1cnJlbnRJbnB1dHMoKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRTZXQgPSBuZXcgU2V0KCBjdXJyZW50SW5wdXRzICk7XG5cdFx0XHRjb25zdCBjdXJyZW50Um93cyA9IG5ldyBTZXQoIGlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW10gKTtcblx0XHRcdGNvbnN0IHJlcGVhdGVyVHJhY2tlZElucHV0cyA9IHBhZ2VTdGF0ZS5nZXRUcmFja2VkSW5wdXRzKCkuZmlsdGVyKFxuXHRcdFx0XHRjdXJyZW50SW5wdXQgPT4gY3VycmVudElucHV0LnJvb3Q/LnBhcmVudCA9PT0gaW5wdXQsXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3Qgc3RhbGVUcmFja2VkSW5wdXRzID0gcmVwZWF0ZXJUcmFja2VkSW5wdXRzLmZpbHRlcihcblx0XHRcdFx0Y3VycmVudElucHV0ID0+IChcblx0XHRcdFx0XHQhY3VycmVudFJvd3MuaGFzKCBjdXJyZW50SW5wdXQucm9vdCApIHx8XG5cdFx0XHRcdFx0Y3VycmVudElucHV0Ll9vYnNlcnZlVmVyc2lvbiAhPT1cblx0XHRcdFx0XHRcdGN1cnJlbnRJbnB1dC5yb290Py5fb2JzZXJ2ZVZlcnNpb25cblx0XHRcdFx0KSAmJiAhY3VycmVudFNldC5oYXMoIGN1cnJlbnRJbnB1dCApLFxuXHRcdFx0KTtcblxuXHRcdFx0c3RhbGVUcmFja2VkSW5wdXRzLmZvckVhY2goXG5cdFx0XHRcdGN1cnJlbnRJbnB1dCA9PiBwYWdlU3RhdGUudW5yZWdpc3RlcklucHV0KCBjdXJyZW50SW5wdXQgKSxcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50SW5wdXRzLmZvckVhY2goIG9ic2VydmVJbm5lcklucHV0ICk7XG5cdFx0XHRwYWdlU3RhdGUudXBkYXRlU3RhdGUoKTtcblx0XHR9XG5cblx0XHRzeW5jQ3VycmVudElucHV0cygpO1xuXHRcdGlucHV0LndhdGNoKCBzeW5jQ3VycmVudElucHV0cyApO1xuXHRcdGlucHV0Lmxhc3RPYnNlcnZlZC53YXRjaCggc3luY0N1cnJlbnRJbnB1dHMgKTtcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5tYWNyby5maWVsZC52YWx1ZScsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0KCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ICkgPT5cblx0XHRyZXNvbHZlUmVwZWF0ZXJNYWNyb3NWYWx1ZSggY3VycmVudCwgJGZpZWxkTm9kZSwgJG1hY3JvSG9zdCApLFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==