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
  node.addEventListener('input', notify, false);
  node.addEventListener('change', notify, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDblFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFNQTtBQUlBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbFJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUM5SUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBTUE7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvT2JzZXJ2YWJsZVJvdy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvcmVwZWF0ZXItbWFjcm9zLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3Jlc3RyaWN0aW9ucy9SZXBlYXRlclJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbmRleC5wY3NzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcblx0ICAgICAgT2JzZXJ2YWJsZSxcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gY2xvbmVPYnNlcnZlZFZhbHVlKCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiBbIC4uLnZhbHVlIF07XG5cdH1cblxuXHRpZiAoIHZhbHVlICYmICdvYmplY3QnID09PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHsgLi4udmFsdWUgfTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVEYXRlTGlrZUlucHV0KCBpbnB1dCApIHtcblx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dD8ubm9kZXMgPz8gW107XG5cblx0cmV0dXJuIFsgJ2RhdGUnLCAndGltZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZT8udHlwZSApO1xufVxuXG5mdW5jdGlvbiBzdGFtcE9ic2VydmVkSW5wdXRzKCByb3cgKSB7XG5cdHJvdy5fb2JzZXJ2ZVZlcnNpb24gPSAoIHJvdy5fb2JzZXJ2ZVZlcnNpb24gfHwgMCApICsgMTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiByb3cuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0aW5wdXQuX29ic2VydmVWZXJzaW9uID0gcm93Ll9vYnNlcnZlVmVyc2lvbjtcblx0fVxufVxuXG5mdW5jdGlvbiBPYnNlcnZhYmxlUm93KCBwYXJlbnQgKSB7XG5cdE9ic2VydmFibGUuY2FsbCggdGhpcywgcGFyZW50ICk7XG5cblx0Ly8gQnkgZGVmYXVsdCB3ZSByZXR1cm4gdGhlIG51bWJlciBvZiByZXBlYXRlciByb3dzXG5cdHRoaXMuY2FsYyAgICAgICA9IDE7XG5cdHRoaXMuaW5pdGVkQ2FsYyA9IGZhbHNlO1xufVxuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZSAgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZSggT2JzZXJ2YWJsZS5wcm90b3R5cGUgKTtcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmNhbGMgICAgICAgPSAxO1xuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdGVkQ2FsYyA9IGZhbHNlO1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZU9ic2VydmUgPSBmdW5jdGlvbiAoIHJvb3QgKSB7XG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xuXHRjb25zdCBwcmV2VmFsdWVzID0ge307XG5cdGNvbnN0IHByZXZOb2RlVmFsdWVzID0ge307XG5cblx0Zm9yICggY29uc3QgWyBmaWVsZE5hbWUsIHZhbHVlIF0gb2YgT2JqZWN0LmVudHJpZXMoIHRoaXMudmFsdWU/LmN1cnJlbnQgfHwge30gKSApIHtcblx0XHRwcmV2VmFsdWVzWyBmaWVsZE5hbWUgXSA9IGNsb25lT2JzZXJ2ZWRWYWx1ZSggdmFsdWUgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0Y29uc3QgZmllbGROYW1lID0gaW5wdXQuZ2V0TmFtZSgpO1xuXG5cdFx0cHJldlZhbHVlc1sgaW5wdXQuZ2V0TmFtZSgpIF0gPSBjbG9uZU9ic2VydmVkVmFsdWUoIGlucHV0LmdldFZhbHVlKCkgKTtcblxuXHRcdGlmICggaXNOYXRpdmVEYXRlTGlrZUlucHV0KCBpbnB1dCApICkge1xuXHRcdFx0cHJldk5vZGVWYWx1ZXNbIGZpZWxkTmFtZSBdID0gaW5wdXQubm9kZXM/LlsgMCBdPy52YWx1ZSA/PyAnJztcblx0XHR9XG5cdH1cblxuXHR0aGlzLmRhdGFJbnB1dHMgID0ge307XG5cdE9ic2VydmFibGUucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcywgcm9vdCApO1xuXHRzdGFtcE9ic2VydmVkSW5wdXRzKCB0aGlzICk7XG5cblx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRjb25zdCBmaWVsZE5hbWUgPSBpbnB1dC5nZXROYW1lKCk7XG5cblx0XHRpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIHByZXZWYWx1ZXMsIGZpZWxkTmFtZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc05hdGl2ZURhdGVMaWtlSW5wdXQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0XHRpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggcHJldk5vZGVWYWx1ZXMsIGZpZWxkTmFtZSApICYmIG5vZGUgKSB7XG5cdFx0XHRcdG5vZGUudmFsdWUgPSBwcmV2Tm9kZVZhbHVlc1sgZmllbGROYW1lIF07XG5cdFx0XHR9XG5cblx0XHRcdGlucHV0LnJlUXVlcnlWYWx1ZSgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aW5wdXQuc2lsZW5jZVNldCggY2xvbmVPYnNlcnZlZFZhbHVlKCBwcmV2VmFsdWVzWyBmaWVsZE5hbWUgXSApICk7XG5cdH1cblxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xuXHRPYnNlcnZhYmxlLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMsIHJvb3QgKTtcblx0c3RhbXBPYnNlcnZlZElucHV0cyggdGhpcyApO1xuXG5cdHRoaXMucGFyZW50Lmxhc3RPYnNlcnZlZC5jdXJyZW50ID0gdGhpcztcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLnJlbW92ZU1hbnVhbGx5ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuX2lzUmVtb3ZpbmcgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5faXNSZW1vdmluZyA9IHRydWU7XG5cblx0Y29uc3Qgb3RoZXJSb3dzID0gdGhpcy5wYXJlbnQudmFsdWUuY3VycmVudC5maWx0ZXIoIHJvdyA9PiByb3cgIT09IHRoaXMgJiYgIXJvdy5faXNSZW1vdmluZyApO1xuXG5cdGNvbnN0IG90aGVyVmFsdWVzID0gb3RoZXJSb3dzLm1hcCggcm93ID0+IHtcblx0XHQvLyBUcnkgdG8gZ2V0IHZhbHVlcyBmcm9tIGRhdGFJbnB1dHMgaWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eVxuXHRcdGNvbnN0IGRlZXBDb3B5VmFsdWVzID0ge307XG5cblx0XHQvLyBGaXJzdCwgdHJ5IGZyb20gdmFsdWUuY3VycmVudFxuXHRcdGZvciAoIGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyggcm93LnZhbHVlLmN1cnJlbnQgfHwge30gKSApIHtcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IFsuLi52YWx1ZV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdmFsdWUuY3VycmVudCBpcyBlbXB0eSwgdHJ5IHRvIGdldCBmcm9tIGRhdGFJbnB1dHNcblx0XHRpZiAoIDAgPT09IE9iamVjdC5rZXlzKCBkZWVwQ29weVZhbHVlcyApLmxlbmd0aCAmJiByb3cuZGF0YUlucHV0cyApIHtcblx0XHRcdGZvciAoIGNvbnN0IFtrZXksIGlucHV0XSBvZiBPYmplY3QuZW50cmllcyggcm93LmRhdGFJbnB1dHMgKSApIHtcblx0XHRcdFx0aWYgKCBpbnB1dCAmJiBpbnB1dC5nZXRWYWx1ZSApIHtcblx0XHRcdFx0XHRjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQuZ2V0VmFsdWUoKTtcblx0XHRcdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGlucHV0VmFsdWUgKSApIHtcblx0XHRcdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4uaW5wdXRWYWx1ZV07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBpbnB1dFZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRub2RlOiByb3cucm9vdE5vZGUsXG5cdFx0XHR2YWx1ZXM6IGRlZXBDb3B5VmFsdWVzXG5cdFx0fTtcblx0fSApO1xuXG5cdG90aGVyUm93cy5mb3JFYWNoKCAoIHJvdywgaW5kZXggKSA9PiB7XG5cdFx0aWYgKCBvdGhlclZhbHVlc1tpbmRleF0gKSB7XG5cdFx0XHRjb25zdCB2YWx1ZXNUb1Jlc3RvcmUgPSBvdGhlclZhbHVlc1tpbmRleF0udmFsdWVzO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlc1RvUmVzdG9yZSApICkge1xuXHRcdFx0XHRyb3cudmFsdWUuY3VycmVudFtrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdFx0Y29uc3QgaW5wdXRzID0gcm93LmdldElucHV0cygpO1xuXG5cdFx0XHRcdGlucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XG5cdFx0XHRcdFx0aWYgKCBpbnB1dC51cGRhdGVQcmV2aWV3cyAmJiB0eXBlb2YgaW5wdXQudXBkYXRlUHJldmlld3MgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHRpbnB1dC51cGRhdGVQcmV2aWV3cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFJlaW5pdGlhbGl6ZSByb3cgZm9ybXVsYSBhZnRlciByZWluZGV4aW5nXG5cdFx0XHRcdHJvdy5pbml0ZWRDYWxjID0gZmFsc2U7IC8vIFJlc2V0IHRoZSBmbGFnIHRvIGFsbG93IHJlLWluaXRpYWxpemF0aW9uXG5cdFx0XHRcdHJvdy5pbml0Q2FsYygpOyAvLyBSZS1pbml0aWFsaXplIHRoZSBmb3JtdWxhIHdpdGggbmV3IGZpZWxkIG5hbWVzXG5cdFx0XHR9LCA1MCApO1xuXHRcdH1cblx0fSApO1xuXG5cdHRoaXMucmVtb3ZlKCk7XG5cdHRoaXMucGFyZW50LnJlbW92ZSggdGhpcyApO1xuXHR0aGlzLnJvb3ROb2RlLnJlbW92ZSgpO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUuaW5pdENhbGMgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggdGhpcy5pbml0ZWRDYWxjICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuaW5pdGVkQ2FsYyAgICAgPSB0cnVlO1xuXHRjb25zdCBbIG5vZGUgXSAgICAgID0gdGhpcy5wYXJlbnQubm9kZXM7XG5cdGNvbnN0IGZvcm11bGFTdHJpbmcgPSBub2RlLmRhdGFzZXQ/LmZvcm11bGE7XG5cblx0aWYgKCAhZm9ybXVsYVN0cmluZyB8fCAnZGVmYXVsdCcgPT09IHRoaXMucGFyZW50LmNhbGNUeXBlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMgKTtcblxuXHRmb3JtdWxhLm9ic2VydmUoIGZvcm11bGFTdHJpbmcgKTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQgICAgICAgPSAoKSA9PiB7XG5cdFx0dGhpcy5jYWxjID0gZm9ybXVsYS5jYWxjdWxhdGUoKTtcblx0XHR0aGlzLnBhcmVudC52YWx1ZS5ub3RpZnkoKTtcblx0fTtcblx0Zm9ybXVsYS5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiBpbnB1dC5jYWxjVmFsdWU7XG5cdH07XG5cdGZvcm11bGEuZW1wdHlWYWx1ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAwO1xuXHR9O1xuXG5cdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdHRoaXMucGFyZW50LnNpbGVuY2VOb3RpZnkoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGVSb3c7XG4iLCIvKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1JlcGVhdGVyKCBub2RlICkge1xuXHRyZXR1cm4gMSA9PT0gK25vZGUuZGF0YXNldC5yZXBlYXRlcjtcbn1cblxuZXhwb3J0IHsgaXNSZXBlYXRlciB9OyIsImltcG9ydCB7IGlzUmVwZWF0ZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgT2JzZXJ2YWJsZVJvdyBmcm9tICcuL09ic2VydmFibGVSb3cnO1xuXG5jb25zdCB7XG5cdElucHV0RGF0YSxcblx0UmVhY3RpdmVWYXIsXG59ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFJlcGVhdGVyRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwodGhpcyk7XG5cblx0dGhpcy5idXR0b25Ob2RlID0gZmFsc2U7XG5cdHRoaXMudGVtcGxhdGUgPSBudWxsO1xuXHR0aGlzLmNvbnRhaW5lciA9IG51bGw7XG5cdHRoaXMubGFzdE9ic2VydmVkID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMubGFzdE9ic2VydmVkLm1ha2UoKTtcblxuXHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlcihub2RlKTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gZGlzYWJsZSBhcmlhIGF0dHJpYnV0ZXNcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlSW52YWxpZCA9ICgpID0+IHsgfTtcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlVmFsaWQgPSAoKSA9PiB7IH07XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFtub2RlXSA9IHRoaXMubm9kZXM7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XG5cblx0XHRmb3IgKGNvbnN0IHJvdyBvZiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycsXG5cdFx0KSkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IG5ldyBPYnNlcnZhYmxlUm93KHRoaXMpO1xuXHRcdFx0Y3VycmVudC5yb290Tm9kZSA9IHJvdztcblxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50LnB1c2goY3VycmVudCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjdXJyZW50RWxlbWVudCBvZiB0aGlzLnZhbHVlLmN1cnJlbnQpIHtcblx0XHRcdGN1cnJlbnRFbGVtZW50Lm9ic2VydmUoKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCkge1xuXHRcdFx0Y3VycmVudEVsZW1lbnQuaW5pdENhbGMoKTtcblx0XHR9XG5cblx0XHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyxcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBidXR0b24gb2YgcmVtb3ZlQnV0dG9ucykge1xuXHRcdFx0Y29uc3Qgcm93ID0gdGhpcy5jbG9zZXN0Um93KGJ1dHRvbik7XG5cblx0XHRcdGlmICghcm93KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3cucmVtb3ZlTWFudWFsbHkoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNNYW51YWxDb3VudCkge1xuXHRcdFx0aWYgKCF0aGlzLmFkZEV2ZW50QXR0YWNoZWQgJiYgIXRoaXMuYnV0dG9uTm9kZS5oYXNMaXN0ZW5lcikge1xuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFkZE5ldygpKTtcblx0XHRcdFx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucm9vdC5nZXRJbnB1dCh0aGlzLml0ZW1zRmllbGQpO1xuXG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdGBKZXRGb3JtQnVpbGRlciBlcnJvcjogdW5kZWZpbmVkIGlucHV0IGJ5IG5hbWUgWyR7dGhpcy5pdGVtc0ZpZWxkfV1gLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlucHV0LndhdGNoKCgpID0+IHRoaXMucmVjYWxjdWxhdGVJdGVtcyhpbnB1dCkpO1xuXHRcdHRoaXMucmVjYWxjdWxhdGVJdGVtcyhpbnB1dCk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwodGhpcywgbm9kZSk7XG5cblx0XHR0aGlzLm5vZGVzID0gW25vZGVdO1xuXHRcdHRoaXMubmFtZSA9IG5vZGUuZGF0YXNldC5maWVsZE5hbWU7XG5cdFx0dGhpcy5yYXdOYW1lID0gdGhpcy5uYW1lO1xuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ3JlcGVhdGVyJztcblxuXHRcdHRoaXMubWFuYWdlSXRlbXMgPSBub2RlLmRhdGFzZXQ/Lm1hbmFnZUl0ZW1zIHx8ICdtYW51YWxseSc7XG5cdFx0dGhpcy5jYWxjVHlwZSA9IG5vZGUuZGF0YXNldD8uY2FsY1R5cGUgfHwgJ2RlZmF1bHQnO1xuXHRcdHRoaXMuaXRlbXNGaWVsZCA9IG5vZGUuZGF0YXNldD8uaXRlbXNGaWVsZDtcblxuXHRcdHRoaXMuaXNNYW51YWxDb3VudCA9IChcblx0XHRcdCF0aGlzLml0ZW1zRmllbGQgfHwgJ21hbnVhbGx5JyA9PT0gdGhpcy5tYW5hZ2VJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBjYW4gYmUgbnVsbFxuXHRcdHRoaXMuYnV0dG9uTm9kZSA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fbmV3Jyxcblx0XHQpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2luaXRpYWwnLFxuXHRcdCk7XG5cdFx0dGhpcy5jb250YWluZXIgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcblx0fTtcblxuXHR0aGlzLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0cyA9IFtdO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRcdGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcblx0XHRcdGZvciAoY29uc3QgaW5wdXQgb2Ygcm93LmdldElucHV0cygpKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0aWYgKCFpbnB1dC5yZXBvcnRpbmc/LnJlc3RyaWN0aW9ucz8ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5wdXRzLnB1c2goaW5wdXQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH07XG5cblx0dGhpcy5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XG5cdFx0XHRyb3cucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJlcGVhdGVyUm93cyA9IHRoaXMudmFsdWUuY3VycmVudFxuXG5cdFx0cmVwZWF0ZXJSb3dzLmZvckVhY2gocm93ID0+IHtcblx0XHRcdHJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKGlucHV0ID0+IHtcblx0XHRcdFx0aW5wdXQuc2V0VmFsdWUoKTtcblx0XHRcdFx0aW5wdXQuaW5pdE5vdGlmeVZhbHVlKCk7XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG59XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKElucHV0RGF0YS5wcm90b3R5cGUpO1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmJ1dHRvbk5vZGUgPSBudWxsO1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS50ZW1wbGF0ZSA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNvbnRhaW5lciA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLml0ZW1zRmllbGQgPSBmYWxzZTtcbi8qKlxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxuICovXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmxhc3RPYnNlcnZlZCA9IG51bGw7XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYWRkTmV3ID0gZnVuY3Rpb24gKGNvdW50ID0gMSkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXG5cdFx0Li4udGhpcy52YWx1ZT8uY3VycmVudCA/PyBbXSxcblx0XHQuLi4oXG5cdFx0XHRuZXcgQXJyYXkoY291bnQpXG5cdFx0KS5maWxsKG51bGwpLm1hcChcblx0XHRcdCgpID0+IG5ldyBPYnNlcnZhYmxlUm93KHRoaXMpLFxuXHRcdCksXG5cdF07XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhYmxlUm93KSB7XG5cdGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlLmN1cnJlbnQpKSB7XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdHJldHVybiB0aGlzLnZhbHVlLmN1cnJlbnQuZmluZEluZGV4KFxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCA9PT0gb2JzZXJ2YWJsZVJvdyxcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbnxPYnNlcnZhYmxlUm93fVxuICovXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNsb3Nlc3RSb3cgPSBmdW5jdGlvbiAobm9kZSkge1xuXHRjb25zdCByb3dOb2RlID0gbm9kZS5jbG9zZXN0KCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93Jyk7XG5cblx0aWYgKCFyb3dOb2RlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdCAqL1xuXHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcblx0XHRpZiAocm93LnJvb3ROb2RlID09PSByb3dOb2RlKSB7XG5cdFx0XHRyZXR1cm4gcm93O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9ic2VydmFibGVSb3cpIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LmZpbHRlcihcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgIT09IG9ic2VydmFibGVSb3csXG5cdCk7XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnJlY2FsY3VsYXRlSXRlbXMgPSBmdW5jdGlvbiAoaW5wdXQpIHtcblx0Y29uc3QgY3VycmVudENvdW50ID0gdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHQvLyBpZiBpdCA8IDAgPT0+IHdlIHNob3VsZCBhZGQge2RpZmZ9IG5ldyByZXBlYXRlciBpdGVtc1xuXHQvLyBpZiBpdCA+IDAgPT0+IHdlIHNob3VsZCByZW1vdmUgbGFzdCB7ZGlmZn0gaXRlbXNcblx0Y29uc3QgZGlmZiA9IGN1cnJlbnRDb3VudCAtIGlucHV0LmNhbGNWYWx1ZTtcblxuXHRpZiAoMCA9PT0gZGlmZikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChkaWZmIDwgMCkge1xuXHRcdHRoaXMuYWRkTmV3KC0xICogZGlmZik7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuc2xpY2UoMCwgLTEgKiBkaWZmKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyRGF0YTsiLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9ICdvcHRpb24tbGFiZWwnO1xuXG5mdW5jdGlvbiBnZXRGaWVsZE9wdGlvbkxhYmVsKGVsKSB7XG5cdGlmICghZWwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBBcnJheS5mcm9tKGVsLnNlbGVjdGVkT3B0aW9ucyB8fCBbXSk7XG5cblx0XHRyZXR1cm4gc2VsZWN0ZWRPcHRpb25zXG5cdFx0XHQubWFwKChvcHRpb24pID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblxuXHRpZiAoZWwudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBlbC5jbG9zZXN0KCdsYWJlbCcpO1xuXG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRleHROb2RlID0gbGFiZWwucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXG5cdFx0cmV0dXJuIFN0cmluZyhcblx0XHRcdHRleHROb2RlPy50ZXh0Q29udGVudCB8fCBsYWJlbC50ZXh0Q29udGVudCB8fCBlbC52YWx1ZSB8fCAnJ1xuXHRcdCkudHJpbSgpO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBiaW5kUmVwZWF0ZXJOb3RpZnlPbmNlKG5vZGUpIHtcblx0aWYgKG5vZGUuX19qZmJNYWNyb3NSZXBlYXRlckJvdW5kKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZS5fX2pmYk1hY3Jvc1JlcGVhdGVyQm91bmQgPSB0cnVlO1xuXG5cdGNvbnN0IGZvcm0gPSBub2RlLmNsb3Nlc3QoJ2Zvcm0uamV0LWZvcm0tYnVpbGRlcicpO1xuXHRjb25zdCBmb3JtSWQgPSBmb3JtPy5kYXRhc2V0Py5mb3JtSWQ7XG5cdGNvbnN0IHN0b3JlID0gd2luZG93LkpldEZvcm1CdWlsZGVyPy5bZm9ybUlkXTtcblxuXHRjb25zdCByZXBlYXRlcklucHV0ID0gc3RvcmU/LmdldElucHV0Py4obm9kZS5kYXRhc2V0LmZpZWxkTmFtZSk7XG5cblx0Y29uc3Qgbm90aWZ5ID0gKCkgPT4ge1xuXHRcdHJlcGVhdGVySW5wdXQ/LnZhbHVlPy5ub3RpZnk/LigpO1xuXHR9O1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBub3RpZnksIGZhbHNlKTtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBub3RpZnksIGZhbHNlKTtcblx0XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnY2xpY2snLFxuXHRcdChlKSA9PiB7XG5cdFx0XHRjb25zdCByZW1vdmVCdG4gPSBlLnRhcmdldC5jbG9zZXN0Py4oJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3ctcmVtb3ZlJyk7XG5cdFx0XHRpZiAoIXJlbW92ZUJ0biB8fCAhbm9kZS5jb250YWlucyhyZW1vdmVCdG4pKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShub3RpZnkpO1xuXHRcdH0sXG5cdFx0dHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGVsKSB7XG5cdGlmIChlbC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBlbC5tdWx0aXBsZSkge1xuXHRcdGNvbnN0IHZhbHVlcyA9IEFycmF5LmZyb20oZWwuc2VsZWN0ZWRPcHRpb25zIHx8IFtdKVxuXHRcdFx0Lm1hcCgob3B0KSA9PiBTdHJpbmcob3B0LnZhbHVlID8/ICcnKS50cmltKCkpXG5cdFx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdFx0cmV0dXJuIHZhbHVlcy5qb2luKCcsICcpO1xuXHR9XG5cblx0cmV0dXJuIFN0cmluZyhlbC52YWx1ZSA/PyAnJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXRSZXBlYXRlckZpZWxkVmFsdWUoXG5cdGVsLFxuXHRyb3dFbCxcblx0cm93UmVwZWF0ZXJGaWVsZCxcblx0bWFjcm9Gb3JtYXQgPSAnJyxcbikge1xuXHRjb25zdCBjdXJyZW50ID0gTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9PT0gbWFjcm9Gb3JtYXRcblx0XHQ/IGdldEZpZWxkT3B0aW9uTGFiZWwoZWwpIHx8IGdldEZpZWxkVmFsdWUoZWwpXG5cdFx0OiBnZXRGaWVsZFZhbHVlKGVsKTtcblxuXHRyZXR1cm4gYXBwbHlGaWx0ZXJzKFxuXHRcdCdqZXQuZmIubWFjcm8uaW5zaWRlLnJlcGVhdGVyLmZpZWxkLnZhbHVlJyxcblx0XHRjdXJyZW50LFxuXHRcdGVsLFxuXHRcdHJvd0VsLFxuXHRcdHJvd1JlcGVhdGVyRmllbGQsXG5cdFx0bWFjcm9Gb3JtYXRcblx0KTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdFJvd1ZhbHVlcyhyb3dFbCwgbWFjcm9Gb3JtYXQgPSAnJykge1xuXHRjb25zdCB2YWx1ZXNCeU5hbWUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGNvbnN0IHJvd1JlcGVhdGVyRmllbGQgPSByb3dFbC5jbG9zZXN0KCcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcpO1xuXHRjb25zdCBmaWVsZHMgPSByb3dFbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXG5cdGZpZWxkcy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdC8vIGlnbm9yZSBuZXN0ZWQgcmVwZWF0ZXItaW4tcmVwZWF0ZXJcblx0XHRpZiAoZWwuY2xvc2VzdCgnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnKSAhPT0gcm93UmVwZWF0ZXJGaWVsZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChlbC5kaXNhYmxlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGlnbm9yZSBoaWRkZW4gKHVzdWFsbHkgc3RvcmVzIGludGVybmFsL3NlcnZpY2UgdmFsdWVzKVxuXHRcdGlmIChlbC50YWdOYW1lID09PSAnSU5QVVQnICYmIGVsLnR5cGUgPT09ICdoaWRkZW4nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKChlbC50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsLnR5cGUgPT09ICdyYWRpbycpICYmICFlbC5jaGVja2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmFtZSA9IGVsLmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCBlbC5uYW1lIHx8ICcnO1xuXHRcdGlmICghbmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlID0gZ2V0UmVwZWF0ZXJGaWVsZFZhbHVlKFxuXHRcdFx0ZWwsXG5cdFx0XHRyb3dFbCxcblx0XHRcdHJvd1JlcGVhdGVyRmllbGQsXG5cdFx0XHRtYWNyb0Zvcm1hdFxuXHRcdCk7XG5cblx0XHRpZiAodmFsdWUgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlc0J5TmFtZVtuYW1lXSkge1xuXHRcdFx0dmFsdWVzQnlOYW1lW25hbWVdICs9IGAsICR7dmFsdWV9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWVzQnlOYW1lW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gdmFsdWVzQnlOYW1lO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVwZWF0ZXJMaW5lc0Zyb21UZW1wbGF0ZShmaWVsZE5vZGUsIHRlbXBsYXRlSHRtbCkge1xuXHRjb25zdCBpdGVtcyA9IGZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yKCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnKTtcblx0aWYgKCFpdGVtcykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHRwbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cdHRwbC5pbm5lckhUTUwgPSBTdHJpbmcodGVtcGxhdGVIdG1sID8/ICcnKTtcblxuXHRjb25zdCByb3dzID0gaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmVwZWF0ZXItcm93XScpO1xuXHRjb25zdCBsaW5lcyA9IFtdO1xuXG5cdHJvd3MuZm9yRWFjaCgocm93RWwpID0+IHtcblx0XHRjb25zdCBmcmFnbWVudCA9IHRwbC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRjb25zdCBtYWNyb05vZGVzID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtamZiLW1hY3JvXScpO1xuXG5cdFx0Y29uc3QgdmFsdWVzQnlGb3JtYXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0bWFjcm9Ob2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRjb25zdCBtYWNyb05hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1qZmItbWFjcm8nKSB8fCAnJztcblx0XHRcdGlmICghbWFjcm9OYW1lKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbWFjcm9Gb3JtYXQgPSBub2RlLmRhdGFzZXQ/LmpmYk1hY3JvRm9ybWF0IHx8ICcnO1xuXG5cdFx0XHRpZiAoIXZhbHVlc0J5Rm9ybWF0W21hY3JvRm9ybWF0XSkge1xuXHRcdFx0XHR2YWx1ZXNCeUZvcm1hdFttYWNyb0Zvcm1hdF0gPSBjb2xsZWN0Um93VmFsdWVzKFxuXHRcdFx0XHRcdHJvd0VsLFxuXHRcdFx0XHRcdG1hY3JvRm9ybWF0XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKFxuXHRcdFx0XHR2YWx1ZXNCeUZvcm1hdFttYWNyb0Zvcm1hdF1bbWFjcm9OYW1lXSA/PyAnJ1xuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRtcC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG5cdFx0bGluZXMucHVzaCh0bXAuaW5uZXJIVE1MKTtcblx0fSk7XG5cblx0cmV0dXJuIGxpbmVzLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVwZWF0ZXJMaW5lc1BsYWluKGZpZWxkTm9kZSwgbWFjcm9zLCBtYWNyb0Zvcm1hdCA9ICcnKSB7XG5cdGNvbnN0IGl0ZW1zID0gZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtcycpO1xuXHRpZiAoIWl0ZW1zKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgbWFjcm9zU2V0ID0gQXJyYXkuaXNBcnJheShtYWNyb3MpICYmIG1hY3Jvcy5sZW5ndGhcblx0XHQ/IG5ldyBTZXQobWFjcm9zKVxuXHRcdDogbnVsbDtcblxuXHRjb25zdCByb3dzID0gaXRlbXMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmVwZWF0ZXItcm93XScpO1xuXHRjb25zdCBsaW5lcyA9IFtdO1xuXG5cdHJvd3MuZm9yRWFjaCgocm93RWwpID0+IHtcblx0XHRjb25zdCByb3dSZXBlYXRlckZpZWxkID0gcm93RWwuY2xvc2VzdCgnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnKTtcblx0XHRjb25zdCBmaWVsZHMgPSByb3dFbC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXG5cdFx0ZmllbGRzLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRpZiAoZWwuY2xvc2VzdCgnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnKSAhPT0gcm93UmVwZWF0ZXJGaWVsZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWwuZGlzYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsLnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZWwudHlwZSA9PT0gJ2hpZGRlbicpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChlbC50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsLnR5cGUgPT09ICdyYWRpbycpICYmICFlbC5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbmFtZSA9IGVsLmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCBlbC5uYW1lIHx8ICcnO1xuXHRcdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1hY3Jvc1NldCAmJiAhbWFjcm9zU2V0LmhhcyhuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0UmVwZWF0ZXJGaWVsZFZhbHVlKFxuXHRcdFx0XHRlbCxcblx0XHRcdFx0cm93RWwsXG5cdFx0XHRcdHJvd1JlcGVhdGVyRmllbGQsXG5cdFx0XHRcdG1hY3JvRm9ybWF0XG5cdFx0XHQpO1xuXG5cdFx0XHRsaW5lcy5wdXNoKGAke25hbWV9OiAke3ZhbHVlfWApO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRyZXR1cm4gbGluZXMuam9pbignPGJyLz4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKFxuXHRjdXJyZW50LFxuXHQkZmllbGROb2RlLFxuXHQkbWFjcm9Ib3N0ID0gZmFsc2UsXG5cdG1hY3JvRm9ybWF0ID0gJycsXG4pIHtcblx0Y29uc3QgZmllbGROb2RlID0gJGZpZWxkTm9kZT8uWzBdO1xuXHRpZiAoIWZpZWxkTm9kZSB8fCBmaWVsZE5vZGUuZGF0YXNldD8ucmVwZWF0ZXIgIT09ICcxJykge1xuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0YmluZFJlcGVhdGVyTm90aWZ5T25jZShmaWVsZE5vZGUpO1xuXG5cdGNvbnN0IGhvc3QgPSAkbWFjcm9Ib3N0Py5bMF07XG5cdGNvbnN0IHNvdXJjZSA9IGhvc3Q/Ll9famZiTWFjcm9UZW1wbGF0ZTtcblxuXHRpZiAoIWhvc3QgfHwgIXNvdXJjZSkge1xuXHRcdHJldHVybiBjb2xsZWN0UmVwZWF0ZXJMaW5lc1BsYWluKGZpZWxkTm9kZSwgbnVsbCwgbWFjcm9Gb3JtYXQpO1xuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3RSZXBlYXRlckxpbmVzRnJvbVRlbXBsYXRlKGZpZWxkTm9kZSwgc291cmNlKTtcbn0iLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxubGV0IHtcblx0ICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXG5cdCAgICBSZXN0cmljdGlvbixcbiAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuQWR2YW5jZWRSZXN0cmljdGlvbiA9IEFkdmFuY2VkUmVzdHJpY3Rpb24gfHwgUmVzdHJpY3Rpb247XG5cbmZ1bmN0aW9uIFJlcGVhdGVyUmVzdHJpY3Rpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH07XG59XG5cblJlcGVhdGVyUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZXBlYXRlckRhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFNpZ25hbFJlcGVhdGVyKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XG5cdH07XG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSA9IFtdICkge1xuXHRcdGNvbnN0IHsgY3VycmVudCB9ICAgICA9IHRoaXMuaW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgaGFzRGVsZXRlZEl0ZW1zID0gKFxuXHRcdFx0cHJldlZhbHVlPy5sZW5ndGggJiYgcHJldlZhbHVlLmxlbmd0aCA+IGN1cnJlbnQubGVuZ3RoXG5cdFx0KTtcblxuXHRcdGlmICggaGFzRGVsZXRlZEl0ZW1zICkge1xuXHRcdFx0dGhpcy5yZW1vdmVQcmV2SXRlbXMoIHByZXZWYWx1ZSApO1xuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGluZGV4IG9mIE9iamVjdC5rZXlzKCBjdXJyZW50ICkgKSB7XG5cdFx0XHRpZiAoICFjdXJyZW50Lmhhc093blByb3BlcnR5KCBpbmRleCApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSXRlbSggK2luZGV4LCBoYXNEZWxldGVkSXRlbXMgKTtcblx0XHR9XG5cblx0XHRsZXQgY2FsY1ZhbHVlID0gMDtcblxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKCBjdXJyZW50ICkgKSB7XG5cdFx0XHRyb3cuaW5pdENhbGMoKTtcblx0XHRcdGNhbGNWYWx1ZSArPSByb3cuY2FsYztcblx0XHR9XG5cblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGNhbGNWYWx1ZTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSBjdXJyZW50SW5kZXggICAge051bWJlcn1cblx0ICogQHBhcmFtIHNob3VsZFJlT2JzZXJ2ZVxuXHQgKi9cblx0dGhpcy5ydW5JdGVtID0gZnVuY3Rpb24gKCBjdXJyZW50SW5kZXgsIHNob3VsZFJlT2JzZXJ2ZSA9IGZhbHNlICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93fVxuXHRcdCAqL1xuXHRcdGNvbnN0IG9ic2VydmFibGUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnRbIGN1cnJlbnRJbmRleCBdO1xuXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRpZiAoICFzaG91bGRSZU9ic2VydmUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0b2JzZXJ2YWJsZS5yb290Tm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5pbnB1dC50ZW1wbGF0ZS5pbm5lckhUTUwudHJpbSgpO1xuXG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MLnJlcGxhY2UoXG5cdFx0XHQvX19pX18vZyxcblx0XHRcdGN1cnJlbnRJbmRleCxcblx0XHQpO1xuXG5cdFx0LyoqXG5cdFx0ICogUmVzZXQgaW5wdXQgdmFsdWVzIGZvciBhIG5ldyByb3dcblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAzLjQuN1xuXHRcdCAqL1xuXHRcdGNvbnN0IG5ld1JvdyA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0Y29uc3QgaW5wdXRzID0gbmV3Um93LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIG91dHB1dFwiICk7XG5cblx0XHRpbnB1dHMuZm9yRWFjaCggKCBpbnB1dCApID0+IHtcblx0XHRcdHN3aXRjaCAoIGlucHV0LnR5cGUgKSB7XG5cdFx0XHRcdGNhc2UgXCJjaGVja2JveFwiOlxuXHRcdFx0XHRjYXNlIFwicmFkaW9cIjpcblx0XHRcdFx0XHQvLyBQcmVzZXJ2ZSBkZWZhdWx0IGNoZWNrZWQgc3RhdGUgZm9yIGNoZWNrYm94L3JhZGlvIGZpZWxkc1xuXHRcdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBpbnB1dCBoYXMgZGVmYXVsdENoZWNrZWQgYXR0cmlidXRlIChmcm9tIEhUTUwpXG5cdFx0XHRcdFx0aW5wdXQuY2hlY2tlZCA9IGlucHV0LmRlZmF1bHRDaGVja2VkIHx8IGZhbHNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwic2VsZWN0LW9uZVwiOlxuXHRcdFx0XHRjYXNlIFwic2VsZWN0LW11bHRpcGxlXCI6XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9ucyA9IGlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoICdvcHRpb24nICk7XG5cdFx0XHRcdFx0b3B0aW9ucy5mb3JFYWNoKCBvcHRpb24gPT4ge1xuXHRcdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLmRlZmF1bHRTZWxlY3RlZCB8fCBmYWxzZTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmaWxlXCI6XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmFuZ2VcIjpcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LmRlZmF1bHRWYWx1ZSB8fCBcIlwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQuZGVmYXVsdFZhbHVlIHx8IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0dGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLmRhdGFzZXQuaW5kZXggPSAnJyArIGN1cnJlbnRJbmRleDtcblxuXHRcdHRoaXMuaW5wdXQuY29udGFpbmVyLmFwcGVuZCggbmV3Um93ICk7XG5cblx0XHRjb25zdCBhcHBlbmRlZCA9IHRoaXMuaW5wdXQuY29udGFpbmVyLmxhc3RDaGlsZDtcblxuXHRcdGlmICggdGhpcy5pbnB1dC5pc01hbnVhbENvdW50ICkge1xuXHRcdFx0YXBwZW5kZWQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnLFxuXHRcdFx0KS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHQoKSA9PiBvYnNlcnZhYmxlLnJlbW92ZU1hbnVhbGx5KCksXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICggb2JzZXJ2YWJsZS5pc09ic2VydmVkICkge1xuXHRcdFx0b2JzZXJ2YWJsZS5yZU9ic2VydmUoIGFwcGVuZGVkICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBhcHBlbmRlZCApO1xuXHR9O1xuXG5cdHRoaXMucmVtb3ZlUHJldkl0ZW1zID0gZnVuY3Rpb24gKCBwcmV2Um93cyApIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKCBjb25zdCBwcmV2Um93IG9mIHByZXZSb3dzICkge1xuXHRcdFx0aWYgKCAhY3VycmVudC5pbmNsdWRlcyggcHJldlJvdyApICkge1xuXHRcdFx0XHRwcmV2Um93LnJlbW92ZU1hbnVhbGx5KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5TaWduYWxSZXBlYXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSZXBlYXRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmVwZWF0ZXJEYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbFJlcGVhdGVyIGZyb20gJy4vc2lnbmFsJztcbmltcG9ydCBSZXBlYXRlclJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlcGVhdGVyUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgcmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUgfSBmcm9tICcuL3JlcGVhdGVyLW1hY3Jvcyc7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuXHQgICAgICBhZGRBY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBSZXBlYXRlckRhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmVwZWF0ZXIsIC4uLnNpZ25hbHMgXTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuKTtcblxuY29uc3QgYWRkUmVzdHJpY3Rpb24gPSAoIHJlc3RyaWN0aW9ucyApID0+IHtcblx0cmVzdHJpY3Rpb25zLnB1c2goXG5cdFx0UmVwZWF0ZXJSZXN0cmljdGlvbixcblx0KTtcblxuXHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xufTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRhZGRSZXN0cmljdGlvbixcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGFkZFJlc3RyaWN0aW9uLFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm11bHRpc3RlcC5wYWdlLm9ic2VydmVkLmlucHV0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfFJlcGVhdGVyRGF0YX1cblx0ICogQHBhcmFtIHBhZ2VTdGF0ZSB7UGFnZVN0YXRlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBpbnB1dCwgcGFnZVN0YXRlICkge1xuXHRcdGlmICggJ3JlcGVhdGVyJyAhPT0gaW5wdXQuaW5wdXRUeXBlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGdldEN1cnJlbnRJbnB1dHMgPSAoKSA9PiAoXG5cdFx0XHQoIGlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW10gKS5mbGF0TWFwKFxuXHRcdFx0XHRvYnNlcnZhYmxlUm93ID0+IG9ic2VydmFibGVSb3cuZ2V0SW5wdXRzKCksXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSBjdXJyZW50SW5wdXQge0lucHV0RGF0YX1cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBvYnNlcnZlSW5uZXJJbnB1dCggY3VycmVudElucHV0ICkge1xuXHRcdFx0cGFnZVN0YXRlLnJlZ2lzdGVySW5wdXQoXG5cdFx0XHRcdGN1cnJlbnRJbnB1dCxcblx0XHRcdFx0eyBpbmNsdWRlSW5WYWxpZGF0aW9uOiBmYWxzZSB9LFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzeW5jQ3VycmVudElucHV0cygpIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRJbnB1dHMgPSBnZXRDdXJyZW50SW5wdXRzKCk7XG5cdFx0XHRjb25zdCBjdXJyZW50U2V0ID0gbmV3IFNldCggY3VycmVudElucHV0cyApO1xuXHRcdFx0Y29uc3QgY3VycmVudFJvd3MgPSBuZXcgU2V0KCBpbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdICk7XG5cdFx0XHRjb25zdCByZXBlYXRlclRyYWNrZWRJbnB1dHMgPSBwYWdlU3RhdGUuZ2V0VHJhY2tlZElucHV0cygpLmZpbHRlcihcblx0XHRcdFx0Y3VycmVudElucHV0ID0+IGN1cnJlbnRJbnB1dC5yb290Py5wYXJlbnQgPT09IGlucHV0LFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHN0YWxlVHJhY2tlZElucHV0cyA9IHJlcGVhdGVyVHJhY2tlZElucHV0cy5maWx0ZXIoXG5cdFx0XHRcdGN1cnJlbnRJbnB1dCA9PiAoXG5cdFx0XHRcdFx0IWN1cnJlbnRSb3dzLmhhcyggY3VycmVudElucHV0LnJvb3QgKSB8fFxuXHRcdFx0XHRcdGN1cnJlbnRJbnB1dC5fb2JzZXJ2ZVZlcnNpb24gIT09XG5cdFx0XHRcdFx0XHRjdXJyZW50SW5wdXQucm9vdD8uX29ic2VydmVWZXJzaW9uXG5cdFx0XHRcdCkgJiYgIWN1cnJlbnRTZXQuaGFzKCBjdXJyZW50SW5wdXQgKSxcblx0XHRcdCk7XG5cblx0XHRcdHN0YWxlVHJhY2tlZElucHV0cy5mb3JFYWNoKFxuXHRcdFx0XHRjdXJyZW50SW5wdXQgPT4gcGFnZVN0YXRlLnVucmVnaXN0ZXJJbnB1dCggY3VycmVudElucHV0ICksXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudElucHV0cy5mb3JFYWNoKCBvYnNlcnZlSW5uZXJJbnB1dCApO1xuXHRcdFx0cGFnZVN0YXRlLnVwZGF0ZVN0YXRlKCk7XG5cdFx0fVxuXG5cdFx0c3luY0N1cnJlbnRJbnB1dHMoKTtcblx0XHRpbnB1dC53YXRjaCggc3luY0N1cnJlbnRJbnB1dHMgKTtcblx0XHRpbnB1dC5sYXN0T2JzZXJ2ZWQud2F0Y2goIHN5bmNDdXJyZW50SW5wdXRzICk7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoIFxuXHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHQoY3VycmVudCwgJGZpZWxkTm9kZSwgJG1hY3JvSG9zdCwgbWFjcm9Gb3JtYXQgKSA9PlxuXHRcdHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QsIG1hY3JvRm9ybWF0ICksXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9