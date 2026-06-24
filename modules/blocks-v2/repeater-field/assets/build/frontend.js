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
const MACRO_FORMAT_OPTION_LABEL = 'option-label';
function getFieldOptionLabel(el) {
  if (!el) {
    return '';
  }
  if (el.tagName === 'SELECT') {
    const selectedOptions = Array.from(el.selectedOptions || []);
    return selectedOptions.map(option => String(option.label || option.textContent || option.value || '').trim()).filter(Boolean).join(', ');
  }
  if (el.type === 'checkbox' || el.type === 'radio') {
    const label = el.closest('label');
    if (!label) {
      return '';
    }
    const textNode = label.querySelector('span');
    return String(textNode?.textContent || label.textContent || el.value || '').trim();
  }
  return '';
}
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
function getRepeaterFieldValue(el, rowEl, rowRepeaterField, macroFormat = '') {
  const current = MACRO_FORMAT_OPTION_LABEL === macroFormat ? getFieldOptionLabel(el) || getFieldValue(el) : getFieldValue(el);
  return applyFilters('jet.fb.macro.inside.repeater.field.value', current, el, rowEl, rowRepeaterField, macroFormat);
}
function collectRowValues(rowEl, macroFormat = '') {
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
    const value = getRepeaterFieldValue(el, rowEl, rowRepeaterField, macroFormat);
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
    const valuesByFormat = Object.create(null);
    macroNodes.forEach(node => {
      var _valuesByFormat$macro;
      const macroName = node.getAttribute('data-jfb-macro') || '';
      if (!macroName) {
        return;
      }
      const macroFormat = node.dataset?.jfbMacroFormat || '';
      if (!valuesByFormat[macroFormat]) {
        valuesByFormat[macroFormat] = collectRowValues(rowEl, macroFormat);
      }
      node.innerHTML = String((_valuesByFormat$macro = valuesByFormat[macroFormat][macroName]) !== null && _valuesByFormat$macro !== void 0 ? _valuesByFormat$macro : '');
    });
    const tmp = document.createElement('div');
    tmp.appendChild(fragment);
    lines.push(tmp.innerHTML);
  });
  return lines.join('');
}
function collectRepeaterLinesPlain(fieldNode, macros, macroFormat = '') {
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
      const value = getRepeaterFieldValue(el, rowEl, rowRepeaterField, macroFormat);
      lines.push(`${name}: ${value}`);
    });
  });
  return lines.join('<br/>');
}
function resolveRepeaterMacrosValue(current, $fieldNode, $macroHost = false, macroFormat = '') {
  const fieldNode = $fieldNode?.[0];
  if (!fieldNode || fieldNode.dataset?.repeater !== '1') {
    return current;
  }
  bindRepeaterNotifyOnce(fieldNode);
  const host = $macroHost?.[0];
  const source = host?.__jfbMacroTemplate;
  if (!host || !source) {
    return collectRepeaterLinesPlain(fieldNode, null, macroFormat);
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
addFilter('jet.fb.macro.field.value', 'jet-form-builder/repeater-field', (current, $fieldNode, $macroHost, macroFormat) => (0,_repeater_macros__WEBPACK_IMPORTED_MODULE_3__.resolveRepeaterMacrosValue)(current, $fieldNode, $macroHost, macroFormat));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDblFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFNQTtBQUlBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbFJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUM5SUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBTUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvT2JzZXJ2YWJsZVJvdy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvcmVwZWF0ZXItbWFjcm9zLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3Jlc3RyaWN0aW9ucy9SZXBlYXRlclJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcblx0ICAgICAgT2JzZXJ2YWJsZSxcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gY2xvbmVPYnNlcnZlZFZhbHVlKCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiBbIC4uLnZhbHVlIF07XG5cdH1cblxuXHRpZiAoIHZhbHVlICYmICdvYmplY3QnID09PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHsgLi4udmFsdWUgfTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVEYXRlTGlrZUlucHV0KCBpbnB1dCApIHtcblx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dD8ubm9kZXMgPz8gW107XG5cblx0cmV0dXJuIFsgJ2RhdGUnLCAndGltZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZT8udHlwZSApO1xufVxuXG5mdW5jdGlvbiBzdGFtcE9ic2VydmVkSW5wdXRzKCByb3cgKSB7XG5cdHJvdy5fb2JzZXJ2ZVZlcnNpb24gPSAoIHJvdy5fb2JzZXJ2ZVZlcnNpb24gfHwgMCApICsgMTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiByb3cuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0aW5wdXQuX29ic2VydmVWZXJzaW9uID0gcm93Ll9vYnNlcnZlVmVyc2lvbjtcblx0fVxufVxuXG5mdW5jdGlvbiBPYnNlcnZhYmxlUm93KCBwYXJlbnQgKSB7XG5cdE9ic2VydmFibGUuY2FsbCggdGhpcywgcGFyZW50ICk7XG5cblx0Ly8gQnkgZGVmYXVsdCB3ZSByZXR1cm4gdGhlIG51bWJlciBvZiByZXBlYXRlciByb3dzXG5cdHRoaXMuY2FsYyAgICAgICA9IDE7XG5cdHRoaXMuaW5pdGVkQ2FsYyA9IGZhbHNlO1xufVxuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZSAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZSggT2JzZXJ2YWJsZS5wcm90b3R5cGUgKTtcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmNhbGMgICAgICAgPSAxO1xuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdGVkQ2FsYyA9IGZhbHNlO1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZU9ic2VydmUgPSBmdW5jdGlvbiAoIHJvb3QgKSB7XG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xuXHRjb25zdCBwcmV2VmFsdWVzID0ge307XG5cdGNvbnN0IHByZXZOb2RlVmFsdWVzID0ge307XG5cblx0Zm9yICggY29uc3QgWyBmaWVsZE5hbWUsIHZhbHVlIF0gb2YgT2JqZWN0LmVudHJpZXMoIHRoaXMudmFsdWU/LmN1cnJlbnQgfHwge30gKSApIHtcblx0XHRwcmV2VmFsdWVzWyBmaWVsZE5hbWUgXSA9IGNsb25lT2JzZXJ2ZWRWYWx1ZSggdmFsdWUgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0Y29uc3QgZmllbGROYW1lID0gaW5wdXQuZ2V0TmFtZSgpO1xuXG5cdFx0cHJldlZhbHVlc1sgaW5wdXQuZ2V0TmFtZSgpIF0gPSBjbG9uZU9ic2VydmVkVmFsdWUoIGlucHV0LmdldFZhbHVlKCkgKTtcblxuXHRcdGlmICggaXNOYXRpdmVEYXRlTGlrZUlucHV0KCBpbnB1dCApICkge1xuXHRcdFx0cHJldk5vZGVWYWx1ZXNbIGZpZWxkTmFtZSBdID0gaW5wdXQubm9kZXM/LlsgMCBdPy52YWx1ZSA/PyAnJztcblx0XHR9XG5cdH1cblxuXHR0aGlzLmRhdGFJbnB1dHMgID0ge307XG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xuXHRzdGFtcE9ic2VydmVkSW5wdXRzKCB0aGlzICk7XG5cblx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRjb25zdCBmaWVsZE5hbWUgPSBpbnB1dC5nZXROYW1lKCk7XG5cblx0XHRpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIHByZXZWYWx1ZXMsIGZpZWxkTmFtZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc05hdGl2ZURhdGVMaWtlSW5wdXQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0XHRpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggcHJldk5vZGVWYWx1ZXMsIGZpZWxkTmFtZSApICYmIG5vZGUgKSB7XG5cdFx0XHRcdG5vZGUudmFsdWUgPSBwcmV2Tm9kZVZhbHVlc1sgZmllbGROYW1lIF07XG5cdFx0XHR9XG5cblx0XHRcdGlucHV0LnJlUXVlcnlWYWx1ZSgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aW5wdXQuc2lsZW5jZVNldCggY2xvbmVPYnNlcnZlZFZhbHVlKCBwcmV2VmFsdWVzWyBmaWVsZE5hbWUgXSApICk7XG5cdH1cblxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xuXHRPYnNlcnZhYmxlLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMsIHJvb3QgKTtcblx0c3RhbXBPYnNlcnZlZElucHV0cyggdGhpcyApO1xuXG5cdHRoaXMucGFyZW50Lmxhc3RPYnNlcnZlZC5jdXJyZW50ID0gdGhpcztcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLnJlbW92ZU1hbnVhbGx5ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuX2lzUmVtb3ZpbmcgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5faXNSZW1vdmluZyA9IHRydWU7XG5cblx0Y29uc3Qgb3RoZXJSb3dzID0gdGhpcy5wYXJlbnQudmFsdWUuY3VycmVudC5maWx0ZXIoIHJvdyA9PiByb3cgIT09IHRoaXMgJiYgIXJvdy5faXNSZW1vdmluZyApO1xuXG5cdGNvbnN0IG90aGVyVmFsdWVzID0gb3RoZXJSb3dzLm1hcCggcm93ID0+IHtcblx0XHQvLyBUcnkgdG8gZ2V0IHZhbHVlcyBmcm9tIGRhdGFJbnB1dHMgaWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eVxuXHRcdGNvbnN0IGRlZXBDb3B5VmFsdWVzID0ge307XG5cblx0XHQvLyBGaXJzdCwgdHJ5IGZyb20gdmFsdWUuY3VycmVudFxuXHRcdGZvciAoIGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyggcm93LnZhbHVlLmN1cnJlbnQgfHwge30gKSApIHtcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IFsuLi52YWx1ZV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eSwgdHJ5IHRvIGdldCBmcm9tIGRhdGFJbnB1dHNcblx0XHRpZiAoIDAgPT09IE9iamVjdC5rZXlzKCBkZWVwQ29weVZhbHVlcyApLmxlbmd0aCAmJiByb3cuZGF0YUlucHV0cyApIHtcblx0XHRcdGZvciAoIGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyggcm93LmRhdGFJbnB1dHMgKSApIHtcblx0XHRcdFx0aWYgKCBpbnB1dCAmJiBpbnB1dC5nZXRWYWx1ZSApIHtcblx0XHRcdFx0XHRjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQuZ2V0VmFsdWUoKTtcblx0XHRcdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGlucHV0VmFsdWUgKSApIHtcblx0XHRcdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4uaW5wdXRWYWx1ZV07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBpbnB1dFZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRub2RlOiByb3cucm9vdE5vZGUsXG5cdFx0XHR2YWx1ZXM6IGRlZXBDb3B5VmFsdWVzXG5cdFx0fTtcblx0fSApO1xuXG5cdG90aGVyUm93cy5mb3JFYWNoKCAoIHJvdywgaW5kZXggKSA9PiB7XG5cdFx0aWYgKCBvdGhlclZhbHVlc1tpbmRleF0gKSB7XG5cdFx0XHRjb25zdCB2YWx1ZXNUb1Jlc3RvcmUgPSBvdGhlclZhbHVlc1tpbmRleF0udmFsdWVzO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlc1RvUmVzdG9yZSApICkge1xuXHRcdFx0XHRyb3cudmFsdWUuY3VycmVudFtrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0Y29uc3QgaW5wdXRzID0gcm93LmdldElucHV0cygpO1xuXG5cdFx0XHRcdGlucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XG5cdFx0XHRcdFx0aWYgKCBpbnB1dC51cGRhdGVQcmV2aWV3cyAmJiB0eXBlb2YgaW5wdXQudXBkYXRlUHJldmlld3MgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHRpbnB1dC51cGRhdGVQcmV2aWV3cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFJlaW5pdGlhbGl6ZSByb3cgZm9ybXVsYSBhZnRlciByZWluZGV4aW5nXG5cdFx0XHRcdHJvdy5pbml0ZWRDYWxjID0gZmFsc2U7IC8vIFJlc2V0IHRoZSBmbGFnIHRvIGFsbG93IHJlLWluaXRpYWxpemF0aW9uXG5cdFx0XHRcdHJvdy5pbml0Q2FsYygpOyAvLyBSZS1pbml0aWFsaXplIHRoZSBmb3JtdWxhIHdpdGggbmV3IGZpZWxkIG5hbWVzXG5cdFx0XHR9LCA1MCApO1xuXHRcdH1cblx0fSApO1xuXG5cdHRoaXMucmVtb3ZlKCk7XG5cdHRoaXMucGFyZW50LnJlbW92ZSggdGhpcyApO1xuXHR0aGlzLnJvb3ROb2RlLnJlbW92ZSgpO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdENhbGMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggdGhpcy5pbml0ZWRDYWxjICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuaW5pdGVkQ2FsYyAgICAgPSB0cnVlO1xuXHRjb25zdCBbIG5vZGUgXSAgICAgID0gdGhpcy5wYXJlbnQubm9kZXM7XG5cdGNvbnN0IGZvcm11bGFTdHJpbmcgPSBub2RlLmRhdGFzZXQ/LmZvcm11bGE7XG5cblx0aWYgKCAhZm9ybXVsYVN0cmluZyB8fCAnZGVmYXVsdCcgPT09IHRoaXMucGFyZW50LmNhbGNUeXBlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMgKTtcblxuXHRmb3JtdWxhLm9ic2VydmUoIGZvcm11bGFTdHJpbmcgKTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoKSA9PiB7XG5cdFx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHR0aGlzLnBhcmVudC52YWx1ZS5ub3RpZnkoKTtcblx0fTtcblx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiBpbnB1dC5jYWxjVmFsdWU7XG5cdH07XG5cdGZvcm11bGEuZW1wdHlWYWx1ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAwO1xuXHR9O1xuXG5cdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdHRoaXMucGFyZW50LnNpbGVuY2VOb3RpZnkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGVSb3c7XG4iLCIvKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1JlcGVhdGVyKCBub2RlICkge1xuXHRyZXR1cm4gMSA9PT0gK25vZGUuZGF0YXNldC5yZXBlYXRlcjtcbn1cblxuZXhwb3J0IHsgaXNSZXBlYXRlciB9OyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgT2JzZXJ2YWJsZVJvdyBmcm9tICcuL09ic2VydmFibGVSb3cnO1xuXG5jb25zdCB7XG5cdElucHV0RGF0YSxcblx0UmVhY3RpdmVWYXIsXG59ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFJlcGVhdGVyRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwodGhpcyk7XG5cblx0dGhpcy5idXR0b25Ob2RlID0gZmFsc2U7XG5cdHRoaXMudGVtcGxhdGUgPSBudWxsO1xuXHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdHRoaXMubGFzdE9ic2VydmVkID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMubGFzdE9ic2VydmVkLm1ha2UoKTtcblxuXHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlcihub2RlKTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gZGlzYWJsZSBhcmlhIGF0dHJpYnV0ZXNcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlSW52YWxpZCA9ICgpID0+IHsgfTtcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlVmFsaWQgPSAoKSA9PiB7IH07XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFtub2RlXSA9IHRoaXMubm9kZXM7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XG5cblx0XHRmb3IgKGNvbnN0IHJvdyBvZiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycsXG5cdFx0KSkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IG5ldyBPYnNlcnZhYmxlUm93KHRoaXMpO1xuXHRcdFx0Y3VycmVudC5yb290Tm9kZSA9IHJvdztcblxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50LnB1c2goY3VycmVudCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjdXJyZW50RWxlbWVudCBvZiB0aGlzLnZhbHVlLmN1cnJlbnQpIHtcblx0XHRcdGN1cnJlbnRFbGVtZW50Lm9ic2VydmUoKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCkge1xuXHRcdFx0Y3VycmVudEVsZW1lbnQuaW5pdENhbGMoKTtcblx0XHR9XG5cblx0XHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyxcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBidXR0b24gb2YgcmVtb3ZlQnV0dG9ucykge1xuXHRcdFx0Y29uc3Qgcm93ID0gdGhpcy5jbG9zZXN0Um93KGJ1dHRvbik7XG5cblx0XHRcdGlmICghcm93KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3cucmVtb3ZlTWFudWFsbHkoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNNYW51YWxDb3VudCkge1xuXHRcdFx0aWYgKCF0aGlzLmFkZEV2ZW50QXR0YWNoZWQgJiYgIXRoaXMuYnV0dG9uTm9kZS5oYXNMaXN0ZW5lcikge1xuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFkZE5ldygpKTtcblx0XHRcdFx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucm9vdC5nZXRJbnB1dCh0aGlzLml0ZW1zRmllbGQpO1xuXG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdGBKZXRGb3JtQnVpbGRlciBlcnJvcjogdW5kZWZpbmVkIGlucHV0IGJ5IG5hbWUgWyR7dGhpcy5pdGVtc0ZpZWxkfV1gLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlucHV0LndhdGNoKCgpID0+IHRoaXMucmVjYWxjdWxhdGVJdGVtcyhpbnB1dCkpO1xuXHRcdHRoaXMucmVjYWxjdWxhdGVJdGVtcyhpbnB1dCk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwodGhpcywgbm9kZSk7XG5cblx0XHR0aGlzLm5vZGVzID0gW25vZGVdO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUuZGF0YXNldC5maWVsZE5hbWU7XG5cdFx0dGhpcy5yYXdOYW1lID0gdGhpcy5uYW1lO1xuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ3JlcGVhdGVyJztcblxuXHRcdHRoaXMubWFuYWdlSXRlbXMgPSBub2RlLmRhdGFzZXQ/Lm1hbmFnZUl0ZW1zIHx8ICdtYW51YWxseSc7XG5cdFx0dGhpcy5jYWxjVHlwZSA9IG5vZGUuZGF0YXNldD8uY2FsY1R5cGUgfHwgJ2RlZmF1bHQnO1xuXHRcdHRoaXMuaXRlbXNGaWVsZCA9IG5vZGUuZGF0YXNldD8uaXRlbXNGaWVsZDtcblxuXHRcdHRoaXMuaXNNYW51YWxDb3VudCA9IChcblx0XHRcdCF0aGlzLml0ZW1zRmllbGQgfHwgJ21hbnVhbGx5JyA9PT0gdGhpcy5tYW5hZ2VJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBjYW4gYmUgbnVsbFxuXHRcdHRoaXMuYnV0dG9uTm9kZSA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fbmV3Jyxcblx0XHQpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2luaXRpYWwnLFxuXHRcdCk7XG5cdFx0dGhpcy5jb250YWluZXIgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcblx0fTtcblxuXHR0aGlzLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0cyA9IFtdO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcblx0XHRcdGZvciAoY29uc3QgaW5wdXQgb2Ygcm93LmdldElucHV0cygpKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0aWYgKCFpbnB1dC5yZXBvcnRpbmc/LnJlc3RyaWN0aW9ucz8ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5wdXRzLnB1c2goaW5wdXQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH07XG5cblx0dGhpcy5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG5cdFx0XHRyb3cucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJlcGVhdGVyUm93cyA9IHRoaXMudmFsdWUuY3VycmVudFxuXG5cdFx0cmVwZWF0ZXJSb3dzLmZvckVhY2gocm93ID0+IHtcblx0XHRcdHJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKGlucHV0ID0+IHtcblx0XHRcdFx0aW5wdXQuc2V0VmFsdWUoKTtcblx0XHRcdFx0aW5wdXQuaW5pdE5vdGlmeVZhbHVlKCk7XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG59XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKElucHV0RGF0YS5wcm90b3R5cGUpO1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmJ1dHRvbk5vZGUgPSBudWxsO1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS50ZW1wbGF0ZSA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNvbnRhaW5lciA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLml0ZW1zRmllbGQgPSBmYWxzZTtcbi8qKlxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxuICovXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmxhc3RPYnNlcnZlZCA9IG51bGw7XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYWRkTmV3ID0gZnVuY3Rpb24gKGNvdW50ID0gMSkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXG5cdFx0Li4udGhpcy52YWx1ZT8uY3VycmVudCA/PyBbXSxcblx0XHQuLi4oXG5cdFx0XHRuZXcgQXJyYXkoY291bnQpXG5cdFx0KS5maWxsKG51bGwpLm1hcChcblx0XHRcdCgpID0+IG5ldyBPYnNlcnZhYmxlUm93KHRoaXMpLFxuXHRcdCksXG5cdF07XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlUm93KSB7XG5cdGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlLmN1cnJlbnQpKSB7XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdHJldHVybiB0aGlzLnZhbHVlLmN1cnJlbnQuZmluZEluZGV4KFxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCA9PT0gb2JzZXJ2YWJsZVJvdyxcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbnxPYnNlcnZhYmxlUm93fVxuICovXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNsb3Nlc3RSb3cgPSBmdW5jdGlvbiAobm9kZSkge1xuXHRjb25zdCByb3dOb2RlID0gbm9kZS5jbG9zZXN0KCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93Jyk7XG5cblx0aWYgKCFyb3dOb2RlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdCAqL1xuXHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcblx0XHRpZiAocm93LnJvb3ROb2RlID09PSByb3dOb2RlKSB7XG5cdFx0XHRyZXR1cm4gcm93O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9ic2VydmFibGVSb3cpIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LmZpbHRlcihcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgIT09IG9ic2VydmFibGVSb3csXG5cdCk7XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnJlY2FsY3VsYXRlSXRlbXMgPSBmdW5jdGlvbiAoaW5wdXQpIHtcblx0Y29uc3QgY3VycmVudENvdW50ID0gdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHQvLyBpZiBpdCA8IDAgPT0+IHdlIHNob3VsZCBhZGQge2RpZmZ9IG5ldyByZXBlYXRlciBpdGVtc1xuXHQvLyBpZiBpdCA+IDAgPT0+IHdlIHNob3VsZCByZW1vdmUgbGFzdCB7ZGlmZn0gaXRlbXNcblx0Y29uc3QgZGlmZiA9IGN1cnJlbnRDb3VudCAtIGlucHV0LmNhbGNWYWx1ZTtcblxuXHRpZiAoMCA9PT0gZGlmZikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChkaWZmIDwgMCkge1xuXHRcdHRoaXMuYWRkTmV3KC0xICogZGlmZik7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuc2xpY2UoMCwgLTEgKiBkaWZmKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyRGF0YTsiLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9ICdvcHRpb24tbGFiZWwnO1xuXG5mdW5jdGlvbiBnZXRGaWVsZE9wdGlvbkxhYmVsKGVsKSB7XG5cdGlmICghZWwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBBcnJheS5mcm9tKGVsLnNlbGVjdGVkT3B0aW9ucyB8fCBbXSk7XG5cblx0XHRyZXR1cm4gc2VsZWN0ZWRPcHRpb25zXG5cdFx0XHQubWFwKChvcHRpb24pID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblxuXHRpZiAoZWwudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBlbC5jbG9zZXN0KCdsYWJlbCcpO1xuXG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRleHROb2RlID0gbGFiZWwucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXG5cdFx0cmV0dXJuIFN0cmluZyhcblx0XHRcdHRleHROb2RlPy50ZXh0Q29udGVudCB8fCBsYWJlbC50ZXh0Q29udGVudCB8fCBlbC52YWx1ZSB8fCAnJ1xuXHRcdCkudHJpbSgpO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBiaW5kUmVwZWF0ZXJOb3RpZnlPbmNlKG5vZGUpIHtcblx0aWYgKG5vZGUuX19qZmJNYWNyb3NSZXBlYXRlckJvdW5kKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZS5fX2pmYk1hY3Jvc1JlcGVhdGVyQm91bmQgPSB0cnVlO1xuXG5cdGNvbnN0IGZvcm0gPSBub2RlLmNsb3Nlc3QoJ2Zvcm0uamV0LWZvcm0tYnVpbGRlcicpO1xuXHRjb25zdCBmb3JtSWQgPSBmb3JtPy5kYXRhc2V0Py5mb3JtSWQ7XG5cdGNvbnN0IHN0b3JlID0gd2luZG93LkpldEZvcm1CdWlsZGVyPy5bZm9ybUlkXTtcblxuXHRjb25zdCByZXBlYXRlcklucHV0ID0gc3RvcmU/LmdldElucHV0Py4obm9kZS5kYXRhc2V0LmZpZWxkTmFtZSk7XG5cblx0Y29uc3Qgbm90aWZ5ID0gKCkgPT4ge1xuXHRcdHJlcGVhdGVySW5wdXQ/LnZhbHVlPy5ub3RpZnk/LigpO1xuXHR9O1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBub3RpZnksIHRydWUpO1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG5vdGlmeSwgdHJ1ZSk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdjbGljaycsXG5cdFx0KGUpID0+IHtcblx0XHRcdGNvbnN0IHJlbW92ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3Q/LignLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3Jvdy1yZW1vdmUnKTtcblx0XHRcdGlmICghcmVtb3ZlQnRuIHx8ICFub2RlLmNvbnRhaW5zKHJlbW92ZUJ0bikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKG5vdGlmeSk7XG5cdFx0fSxcblx0XHR0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoZWwpIHtcblx0aWYgKGVsLnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGVsLm11bHRpcGxlKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gQXJyYXkuZnJvbShlbC5zZWxlY3RlZE9wdGlvbnMgfHwgW10pXG5cdFx0XHQubWFwKChvcHQpID0+IFN0cmluZyhvcHQudmFsdWUgPz8gJycpLnRyaW0oKSlcblx0XHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0XHRyZXR1cm4gdmFsdWVzLmpvaW4oJywgJyk7XG5cdH1cblxuXHRyZXR1cm4gU3RyaW5nKGVsLnZhbHVlID8/ICcnKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGdldFJlcGVhdGVyRmllbGRWYWx1ZShcblx0ZWwsXG5cdHJvd0VsLFxuXHRyb3dSZXBlYXRlckZpZWxkLFxuXHRtYWNyb0Zvcm1hdCA9ICcnLFxuKSB7XG5cdGNvbnN0IGN1cnJlbnQgPSBNQUNST19GT1JNQVRfT1BUSU9OX0xBQkVMID09PSBtYWNyb0Zvcm1hdFxuXHRcdD8gZ2V0RmllbGRPcHRpb25MYWJlbChlbCkgfHwgZ2V0RmllbGRWYWx1ZShlbClcblx0XHQ6IGdldEZpZWxkVmFsdWUoZWwpO1xuXG5cdHJldHVybiBhcHBseUZpbHRlcnMoXG5cdFx0J2pldC5mYi5tYWNyby5pbnNpZGUucmVwZWF0ZXIuZmllbGQudmFsdWUnLFxuXHRcdGN1cnJlbnQsXG5cdFx0ZWwsXG5cdFx0cm93RWwsXG5cdFx0cm93UmVwZWF0ZXJGaWVsZCxcblx0XHRtYWNyb0Zvcm1hdFxuXHQpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0Um93VmFsdWVzKHJvd0VsLCBtYWNyb0Zvcm1hdCA9ICcnKSB7XG5cdGNvbnN0IHZhbHVlc0J5TmFtZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0Y29uc3Qgcm93UmVwZWF0ZXJGaWVsZCA9IHJvd0VsLmNsb3Nlc3QoJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyk7XG5cdGNvbnN0IGZpZWxkcyA9IHJvd0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cblx0ZmllbGRzLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0Ly8gaWdub3JlIG5lc3RlZCByZXBlYXRlci1pbi1yZXBlYXRlclxuXHRcdGlmIChlbC5jbG9zZXN0KCcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcpICE9PSByb3dSZXBlYXRlckZpZWxkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGVsLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gaWdub3JlIGhpZGRlbiAodXN1YWxseSBzdG9yZXMgaW50ZXJuYWwvc2VydmljZSB2YWx1ZXMpXG5cdFx0aWYgKGVsLnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZWwudHlwZSA9PT0gJ2hpZGRlbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoKGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJykgJiYgIWVsLmNoZWNrZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBuYW1lID0gZWwuZGF0YXNldD8uZmllbGROYW1lIHx8IGVsLm5hbWUgfHwgJyc7XG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWUgPSBnZXRSZXBlYXRlckZpZWxkVmFsdWUoXG5cdFx0XHRlbCxcblx0XHRcdHJvd0VsLFxuXHRcdFx0cm93UmVwZWF0ZXJGaWVsZCxcblx0XHRcdG1hY3JvRm9ybWF0XG5cdFx0KTtcblxuXHRcdGlmICh2YWx1ZSA9PT0gJycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAodmFsdWVzQnlOYW1lW25hbWVdKSB7XG5cdFx0XHR2YWx1ZXNCeU5hbWVbbmFtZV0gKz0gYCwgJHt2YWx1ZX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZXNCeU5hbWVbbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB2YWx1ZXNCeU5hbWU7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzRnJvbVRlbXBsYXRlKGZpZWxkTm9kZSwgdGVtcGxhdGVIdG1sKSB7XG5cdGNvbnN0IGl0ZW1zID0gZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtcycpO1xuXHRpZiAoIWl0ZW1zKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0dHBsLmlubmVySFRNTCA9IFN0cmluZyh0ZW1wbGF0ZUh0bWwgPz8gJycpO1xuXG5cdGNvbnN0IHJvd3MgPSBpdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXBlYXRlci1yb3ddJyk7XG5cdGNvbnN0IGxpbmVzID0gW107XG5cblx0cm93cy5mb3JFYWNoKChyb3dFbCkgPT4ge1xuXHRcdGNvbnN0IGZyYWdtZW50ID0gdHBsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGNvbnN0IG1hY3JvTm9kZXMgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qZmItbWFjcm9dJyk7XG5cblx0XHRjb25zdCB2YWx1ZXNCeUZvcm1hdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRtYWNyb05vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdGNvbnN0IG1hY3JvTmFtZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWpmYi1tYWNybycpIHx8ICcnO1xuXHRcdFx0aWYgKCFtYWNyb05hbWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBtYWNyb0Zvcm1hdCA9IG5vZGUuZGF0YXNldD8uamZiTWFjcm9Gb3JtYXQgfHwgJyc7XG5cblx0XHRcdGlmICghdmFsdWVzQnlGb3JtYXRbbWFjcm9Gb3JtYXRdKSB7XG5cdFx0XHRcdHZhbHVlc0J5Rm9ybWF0W21hY3JvRm9ybWF0XSA9IGNvbGxlY3RSb3dWYWx1ZXMoXG5cdFx0XHRcdFx0cm93RWwsXG5cdFx0XHRcdFx0bWFjcm9Gb3JtYXRcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0bm9kZS5pbm5lckhUTUwgPSBTdHJpbmcoXG5cdFx0XHRcdHZhbHVlc0J5Rm9ybWF0W21hY3JvRm9ybWF0XVttYWNyb05hbWVdID8/ICcnXG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dG1wLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcblx0XHRsaW5lcy5wdXNoKHRtcC5pbm5lckhUTUwpO1xuXHR9KTtcblxuXHRyZXR1cm4gbGluZXMuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzUGxhaW4oZmllbGROb2RlLCBtYWNyb3MsIG1hY3JvRm9ybWF0ID0gJycpIHtcblx0Y29uc3QgaXRlbXMgPSBmaWVsZE5vZGUucXVlcnlTZWxlY3RvcignLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyk7XG5cdGlmICghaXRlbXMpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBtYWNyb3NTZXQgPSBBcnJheS5pc0FycmF5KG1hY3JvcykgJiYgbWFjcm9zLmxlbmd0aFxuXHRcdD8gbmV3IFNldChtYWNyb3MpXG5cdFx0OiBudWxsO1xuXG5cdGNvbnN0IHJvd3MgPSBpdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZXBlYXRlci1yb3ddJyk7XG5cdGNvbnN0IGxpbmVzID0gW107XG5cblx0cm93cy5mb3JFYWNoKChyb3dFbCkgPT4ge1xuXHRcdGNvbnN0IHJvd1JlcGVhdGVyRmllbGQgPSByb3dFbC5jbG9zZXN0KCcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcpO1xuXHRcdGNvbnN0IGZpZWxkcyA9IHJvd0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cblx0XHRmaWVsZHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGlmIChlbC5jbG9zZXN0KCcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcpICE9PSByb3dSZXBlYXRlckZpZWxkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChlbC5kaXNhYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlbC50eXBlID09PSAnaGlkZGVuJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoKGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJykgJiYgIWVsLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBuYW1lID0gZWwuZGF0YXNldD8uZmllbGROYW1lIHx8IGVsLm5hbWUgfHwgJyc7XG5cdFx0XHRpZiAoIW5hbWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWFjcm9zU2V0ICYmICFtYWNyb3NTZXQuaGFzKG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRSZXBlYXRlckZpZWxkVmFsdWUoXG5cdFx0XHRcdGVsLFxuXHRcdFx0XHRyb3dFbCxcblx0XHRcdFx0cm93UmVwZWF0ZXJGaWVsZCxcblx0XHRcdFx0bWFjcm9Gb3JtYXRcblx0XHRcdCk7XG5cblx0XHRcdGxpbmVzLnB1c2goYCR7bmFtZX06ICR7dmFsdWV9YCk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBsaW5lcy5qb2luKCc8YnIvPicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUoXG5cdGN1cnJlbnQsXG5cdCRmaWVsZE5vZGUsXG5cdCRtYWNyb0hvc3QgPSBmYWxzZSxcblx0bWFjcm9Gb3JtYXQgPSAnJyxcbikge1xuXHRjb25zdCBmaWVsZE5vZGUgPSAkZmllbGROb2RlPy5bMF07XG5cdGlmICghZmllbGROb2RlIHx8IGZpZWxkTm9kZS5kYXRhc2V0Py5yZXBlYXRlciAhPT0gJzEnKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRiaW5kUmVwZWF0ZXJOb3RpZnlPbmNlKGZpZWxkTm9kZSk7XG5cblx0Y29uc3QgaG9zdCA9ICRtYWNyb0hvc3Q/LlswXTtcblx0Y29uc3Qgc291cmNlID0gaG9zdD8uX19qZmJNYWNyb1RlbXBsYXRlO1xuXG5cdGlmICghaG9zdCB8fCAhc291cmNlKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3RSZXBlYXRlckxpbmVzUGxhaW4oZmllbGROb2RlLCBudWxsLCBtYWNyb0Zvcm1hdCk7XG5cdH1cblxuXHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXNGcm9tVGVtcGxhdGUoZmllbGROb2RlLCBzb3VyY2UpO1xufSIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5sZXQge1xuXHQgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcblx0ICAgIFJlc3RyaWN0aW9uLFxuICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5BZHZhbmNlZFJlc3RyaWN0aW9uID0gQWR2YW5jZWRSZXN0cmljdGlvbiB8fCBSZXN0cmljdGlvbjtcblxuZnVuY3Rpb24gUmVwZWF0ZXJSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnJztcblx0fTtcbn1cblxuUmVwZWF0ZXJSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlclJlc3RyaWN0aW9uOyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlcGVhdGVyRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gU2lnbmFsUmVwZWF0ZXIoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICggcHJldlZhbHVlID0gW10gKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gICAgID0gdGhpcy5pbnB1dC52YWx1ZTtcblx0XHRjb25zdCBoYXNEZWxldGVkSXRlbXMgPSAoXG5cdFx0XHRwcmV2VmFsdWU/Lmxlbmd0aCAmJiBwcmV2VmFsdWUubGVuZ3RoID4gY3VycmVudC5sZW5ndGhcblx0XHQpO1xuXG5cdFx0aWYgKCBoYXNEZWxldGVkSXRlbXMgKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVByZXZJdGVtcyggcHJldlZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgaW5kZXggb2YgT2JqZWN0LmtleXMoIGN1cnJlbnQgKSApIHtcblx0XHRcdGlmICggIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ydW5JdGVtKCAraW5kZXgsIGhhc0RlbGV0ZWRJdGVtcyApO1xuXHRcdH1cblxuXHRcdGxldCBjYWxjVmFsdWUgPSAwO1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoIGN1cnJlbnQgKSApIHtcblx0XHRcdHJvdy5pbml0Q2FsYygpO1xuXHRcdFx0Y2FsY1ZhbHVlICs9IHJvdy5jYWxjO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXQuY2FsY1ZhbHVlID0gY2FsY1ZhbHVlO1xuXHR9O1xuXHQvKipcblx0ICogQHBhcmFtIGN1cnJlbnRJbmRleCAgICB7TnVtYmVyfVxuXHQgKiBAcGFyYW0gc2hvdWxkUmVPYnNlcnZlXG5cdCAqL1xuXHR0aGlzLnJ1bkl0ZW0gPSBmdW5jdGlvbiAoIGN1cnJlbnRJbmRleCwgc2hvdWxkUmVPYnNlcnZlID0gZmFsc2UgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3d9XG5cdFx0ICovXG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudFsgY3VycmVudEluZGV4IF07XG5cblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcblx0XHRcdGlmICggIXNob3VsZFJlT2JzZXJ2ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRvYnNlcnZhYmxlLnJvb3ROb2RlLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnRlbXBsYXRlLmlubmVySFRNTC50cmltKCk7XG5cblx0XHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUwucmVwbGFjZShcblx0XHRcdC9fX2lfXy9nLFxuXHRcdFx0Y3VycmVudEluZGV4LFxuXHRcdCk7XG5cblx0XHQvKipcblx0XHQgKiBSZXNldCBpbnB1dCB2YWx1ZXMgZm9yIGEgbmV3IHJvd1xuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDMuNC43XG5cdFx0ICovXG5cdFx0Y29uc3QgbmV3Um93ID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRjb25zdCBpbnB1dHMgPSBuZXdSb3cucXVlcnlTZWxlY3RvckFsbCggXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgb3V0cHV0XCIgKTtcblxuXHRcdGlucHV0cy5mb3JFYWNoKCAoIGlucHV0ICkgPT4ge1xuXHRcdFx0c3dpdGNoICggaW5wdXQudHlwZSApIHtcblx0XHRcdFx0Y2FzZSBcImNoZWNrYm94XCI6XG5cdFx0XHRcdGNhc2UgXCJyYWRpb1wiOlxuXHRcdFx0XHRcdC8vIFByZXNlcnZlIGRlZmF1bHQgY2hlY2tlZCBzdGF0ZSBmb3IgY2hlY2tib3gvcmFkaW8gZmllbGRzXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGlucHV0IGhhcyBkZWZhdWx0Q2hlY2tlZCBhdHRyaWJ1dGUgKGZyb20gSFRNTClcblx0XHRcdFx0XHRpbnB1dC5jaGVja2VkID0gaW5wdXQuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJzZWxlY3Qtb25lXCI6XG5cdFx0XHRcdGNhc2UgXCJzZWxlY3QtbXVsdGlwbGVcIjpcblx0XHRcdFx0XHRjb25zdCBvcHRpb25zID0gaW5wdXQucXVlcnlTZWxlY3RvckFsbCggJ29wdGlvbicgKTtcblx0XHRcdFx0XHRvcHRpb25zLmZvckVhY2goIG9wdGlvbiA9PiB7XG5cdFx0XHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24uZGVmYXVsdFNlbGVjdGVkIHx8IGZhbHNlO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImZpbGVcIjpcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyYW5nZVwiOlxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQuZGVmYXVsdFZhbHVlIHx8IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC5kZWZhdWx0VmFsdWUgfHwgXCJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHR0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuZGF0YXNldC5pbmRleCA9ICcnICsgY3VycmVudEluZGV4O1xuXG5cdFx0dGhpcy5pbnB1dC5jb250YWluZXIuYXBwZW5kKCBuZXdSb3cgKTtcblxuXHRcdGNvbnN0IGFwcGVuZGVkID0gdGhpcy5pbnB1dC5jb250YWluZXIubGFzdENoaWxkO1xuXG5cdFx0aWYgKCB0aGlzLmlucHV0LmlzTWFudWFsQ291bnQgKSB7XG5cdFx0XHRhcHBlbmRlZC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXG5cdFx0XHQpLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdCgpID0+IG9ic2VydmFibGUucmVtb3ZlTWFudWFsbHkoKSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRvYnNlcnZhYmxlLnJlT2JzZXJ2ZSggYXBwZW5kZWQgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRvYnNlcnZhYmxlLm9ic2VydmUoIGFwcGVuZGVkICk7XG5cdH07XG5cblx0dGhpcy5yZW1vdmVQcmV2SXRlbXMgPSBmdW5jdGlvbiAoIHByZXZSb3dzICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoIGNvbnN0IHByZXZSb3cgb2YgcHJldlJvd3MgKSB7XG5cdFx0XHRpZiAoICFjdXJyZW50LmluY2x1ZGVzKCBwcmV2Um93ICkgKSB7XG5cdFx0XHRcdHByZXZSb3cucmVtb3ZlTWFudWFsbHkoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cblNpZ25hbFJlcGVhdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlcGVhdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBSZXBlYXRlckRhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsUmVwZWF0ZXIgZnJvbSAnLi9zaWduYWwnO1xuaW1wb3J0IFJlcGVhdGVyUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbic7XG5pbXBvcnQgeyByZXNvbHZlUmVwZWF0ZXJNYWNyb3NWYWx1ZSB9IGZyb20gJy4vcmVwZWF0ZXItbWFjcm9zJztcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIFJlcGVhdGVyRGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxSZXBlYXRlciwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pO1xuXG5jb25zdCBhZGRSZXN0cmljdGlvbiA9ICggcmVzdHJpY3Rpb25zICkgPT4ge1xuXHRyZXN0cmljdGlvbnMucHVzaChcblx0XHRSZXBlYXRlclJlc3RyaWN0aW9uLFxuXHQpO1xuXG5cdHJldHVybiByZXN0cmljdGlvbnM7XG59O1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zLmRlZmF1bHQnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGFkZFJlc3RyaWN0aW9uLFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0YWRkUmVzdHJpY3Rpb24sXG4pO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIubXVsdGlzdGVwLnBhZ2Uub2JzZXJ2ZWQuaW5wdXQnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF8UmVwZWF0ZXJEYXRhfVxuXHQgKiBAcGFyYW0gcGFnZVN0YXRlIHtQYWdlU3RhdGV9XG5cdCAqL1xuXHRmdW5jdGlvbiAoIGlucHV0LCBwYWdlU3RhdGUgKSB7XG5cdFx0aWYgKCAncmVwZWF0ZXInICE9PSBpbnB1dC5pbnB1dFR5cGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZ2V0Q3VycmVudElucHV0cyA9ICgpID0+IChcblx0XHRcdCggaW5wdXQudmFsdWUuY3VycmVudCB8fCBbXSApLmZsYXRNYXAoXG5cdFx0XHRcdG9ic2VydmFibGVSb3cgPT4gb2JzZXJ2YWJsZVJvdy5nZXRJbnB1dHMoKSxcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIGN1cnJlbnRJbnB1dCB7SW5wdXREYXRhfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG9ic2VydmVJbm5lcklucHV0KCBjdXJyZW50SW5wdXQgKSB7XG5cdFx0XHRwYWdlU3RhdGUucmVnaXN0ZXJJbnB1dChcblx0XHRcdFx0Y3VycmVudElucHV0LFxuXHRcdFx0XHR7IGluY2x1ZGVJblZhbGlkYXRpb246IGZhbHNlIH0sXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHN5bmNDdXJyZW50SW5wdXRzKCkge1xuXHRcdFx0Y29uc3QgY3VycmVudElucHV0cyA9IGdldEN1cnJlbnRJbnB1dHMoKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRTZXQgPSBuZXcgU2V0KCBjdXJyZW50SW5wdXRzICk7XG5cdFx0XHRjb25zdCBjdXJyZW50Um93cyA9IG5ldyBTZXQoIGlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW10gKTtcblx0XHRcdGNvbnN0IHJlcGVhdGVyVHJhY2tlZElucHV0cyA9IHBhZ2VTdGF0ZS5nZXRUcmFja2VkSW5wdXRzKCkuZmlsdGVyKFxuXHRcdFx0XHRjdXJyZW50SW5wdXQgPT4gY3VycmVudElucHV0LnJvb3Q/LnBhcmVudCA9PT0gaW5wdXQsXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3Qgc3RhbGVUcmFja2VkSW5wdXRzID0gcmVwZWF0ZXJUcmFja2VkSW5wdXRzLmZpbHRlcihcblx0XHRcdFx0Y3VycmVudElucHV0ID0+IChcblx0XHRcdFx0XHQhY3VycmVudFJvd3MuaGFzKCBjdXJyZW50SW5wdXQucm9vdCApIHx8XG5cdFx0XHRcdFx0Y3VycmVudElucHV0Ll9vYnNlcnZlVmVyc2lvbiAhPT1cblx0XHRcdFx0XHRcdGN1cnJlbnRJbnB1dC5yb290Py5fb2JzZXJ2ZVZlcnNpb25cblx0XHRcdFx0KSAmJiAhY3VycmVudFNldC5oYXMoIGN1cnJlbnRJbnB1dCApLFxuXHRcdFx0KTtcblxuXHRcdFx0c3RhbGVUcmFja2VkSW5wdXRzLmZvckVhY2goXG5cdFx0XHRcdGN1cnJlbnRJbnB1dCA9PiBwYWdlU3RhdGUudW5yZWdpc3RlcklucHV0KCBjdXJyZW50SW5wdXQgKSxcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50SW5wdXRzLmZvckVhY2goIG9ic2VydmVJbm5lcklucHV0ICk7XG5cdFx0XHRwYWdlU3RhdGUudXBkYXRlU3RhdGUoKTtcblx0XHR9XG5cblx0XHRzeW5jQ3VycmVudElucHV0cygpO1xuXHRcdGlucHV0LndhdGNoKCBzeW5jQ3VycmVudElucHV0cyApO1xuXHRcdGlucHV0Lmxhc3RPYnNlcnZlZC53YXRjaCggc3luY0N1cnJlbnRJbnB1dHMgKTtcblx0fSxcbik7XG5cbmFkZEZpbHRlciggXG5cdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdChjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0LCBtYWNyb0Zvcm1hdCApID0+XG5cdFx0cmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUoY3VycmVudCwgJGZpZWxkTm9kZSwgJG1hY3JvSG9zdCwgbWFjcm9Gb3JtYXQgKSxcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=