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
    const renderedRows = [...node.querySelectorAll('.jet-form-builder-repeater__row')];
    const hasWysiwyg = renderedRows.some(row => row.querySelector('.wysiwyg-field'));

    // WYSIWYG inside initially rendered repeater rows needs the same init path
    // as rows added via Add New. Add New goes through SignalRepeater.runItem(),
    // which rebuilds the row from template and includes the editor-related CSS.
    if (hasWysiwyg) {
      const currentRows = renderedRows.map(row => {
        row.remove();
        return new _ObservableRow__WEBPACK_IMPORTED_MODULE_1__["default"](this);
      });
      this.value.current = currentRows;
    } else {
      // Old behavior for repeaters without WYSIWYG.
      this.value.current = [];
      for (const row of renderedRows) {
        const current = new _ObservableRow__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        current.rootNode = row;
        this.value.current.push(current);
      }
      for (const currentElement of this.value.current) {
        currentElement.observe();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4UkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7O0FDOUlBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQU1BO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL09ic2VydmFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2lucHV0LmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3JlcGVhdGVyLW1hY3Jvcy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG5cdCAgICAgIE9ic2VydmFibGUsXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIGNsb25lT2JzZXJ2ZWRWYWx1ZSggdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gWyAuLi52YWx1ZSBdO1xuXHR9XG5cblx0aWYgKCB2YWx1ZSAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiB7IC4uLnZhbHVlIH07XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzTmF0aXZlRGF0ZUxpa2VJbnB1dCggaW5wdXQgKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQ/Lm5vZGVzID8/IFtdO1xuXG5cdHJldHVybiBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGU/LnR5cGUgKTtcbn1cblxuZnVuY3Rpb24gc3RhbXBPYnNlcnZlZElucHV0cyggcm93ICkge1xuXHRyb3cuX29ic2VydmVWZXJzaW9uID0gKCByb3cuX29ic2VydmVWZXJzaW9uIHx8IDAgKSArIDE7XG5cblx0Zm9yICggY29uc3QgaW5wdXQgb2Ygcm93LmdldElucHV0cygpICkge1xuXHRcdGlucHV0Ll9vYnNlcnZlVmVyc2lvbiA9IHJvdy5fb2JzZXJ2ZVZlcnNpb247XG5cdH1cbn1cblxuZnVuY3Rpb24gT2JzZXJ2YWJsZVJvdyggcGFyZW50ICkge1xuXHRPYnNlcnZhYmxlLmNhbGwoIHRoaXMsIHBhcmVudCApO1xuXG5cdC8vIEJ5IGRlZmF1bHQgd2UgcmV0dXJuIHRoZSBudW1iZXIgb2YgcmVwZWF0ZXIgcm93c1xuXHR0aGlzLmNhbGMgICAgICAgPSAxO1xuXHR0aGlzLmluaXRlZENhbGMgPSBmYWxzZTtcbn1cblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoIE9ic2VydmFibGUucHJvdG90eXBlICk7XG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5jYWxjICAgICAgID0gMTtcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmluaXRlZENhbGMgPSBmYWxzZTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVPYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcblx0Y29uc3QgcHJldlZhbHVlcyA9IHt9O1xuXHRjb25zdCBwcmV2Tm9kZVZhbHVlcyA9IHt9O1xuXG5cdGZvciAoIGNvbnN0IFsgZmllbGROYW1lLCB2YWx1ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCB0aGlzLnZhbHVlPy5jdXJyZW50IHx8IHt9ICkgKSB7XG5cdFx0cHJldlZhbHVlc1sgZmllbGROYW1lIF0gPSBjbG9uZU9ic2VydmVkVmFsdWUoIHZhbHVlICk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdGNvbnN0IGZpZWxkTmFtZSA9IGlucHV0LmdldE5hbWUoKTtcblxuXHRcdHByZXZWYWx1ZXNbIGlucHV0LmdldE5hbWUoKSBdID0gY2xvbmVPYnNlcnZlZFZhbHVlKCBpbnB1dC5nZXRWYWx1ZSgpICk7XG5cblx0XHRpZiAoIGlzTmF0aXZlRGF0ZUxpa2VJbnB1dCggaW5wdXQgKSApIHtcblx0XHRcdHByZXZOb2RlVmFsdWVzWyBmaWVsZE5hbWUgXSA9IGlucHV0Lm5vZGVzPy5bIDAgXT8udmFsdWUgPz8gJyc7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5kYXRhSW5wdXRzICA9IHt9O1xuXHRPYnNlcnZhYmxlLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMsIHJvb3QgKTtcblx0c3RhbXBPYnNlcnZlZElucHV0cyggdGhpcyApO1xuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0Y29uc3QgZmllbGROYW1lID0gaW5wdXQuZ2V0TmFtZSgpO1xuXG5cdFx0aWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBwcmV2VmFsdWVzLCBmaWVsZE5hbWUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICggaXNOYXRpdmVEYXRlTGlrZUlucHV0KCBpbnB1dCApICkge1xuXHRcdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdFx0aWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIHByZXZOb2RlVmFsdWVzLCBmaWVsZE5hbWUgKSAmJiBub2RlICkge1xuXHRcdFx0XHRub2RlLnZhbHVlID0gcHJldk5vZGVWYWx1ZXNbIGZpZWxkTmFtZSBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpbnB1dC5yZVF1ZXJ5VmFsdWUoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlucHV0LnNpbGVuY2VTZXQoIGNsb25lT2JzZXJ2ZWRWYWx1ZSggcHJldlZhbHVlc1sgZmllbGROYW1lIF0gKSApO1xuXHR9XG5cblx0dGhpcy5wYXJlbnQubGFzdE9ic2VydmVkLmN1cnJlbnQgPSB0aGlzO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICggcm9vdCApIHtcblx0T2JzZXJ2YWJsZS5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzLCByb290ICk7XG5cdHN0YW1wT2JzZXJ2ZWRJbnB1dHMoIHRoaXMgKTtcblxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZW1vdmVNYW51YWxseSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLl9pc1JlbW92aW5nICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuX2lzUmVtb3ZpbmcgPSB0cnVlO1xuXG5cdGNvbnN0IG90aGVyUm93cyA9IHRoaXMucGFyZW50LnZhbHVlLmN1cnJlbnQuZmlsdGVyKCByb3cgPT4gcm93ICE9PSB0aGlzICYmICFyb3cuX2lzUmVtb3ZpbmcgKTtcblxuXHRjb25zdCBvdGhlclZhbHVlcyA9IG90aGVyUm93cy5tYXAoIHJvdyA9PiB7XG5cdFx0Ly8gVHJ5IHRvIGdldCB2YWx1ZXMgZnJvbSBkYXRhSW5wdXRzIGlmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHlcblx0XHRjb25zdCBkZWVwQ29weVZhbHVlcyA9IHt9O1xuXG5cdFx0Ly8gRmlyc3QsIHRyeSBmcm9tIHZhbHVlLmN1cnJlbnRcblx0XHRmb3IgKCBjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHJvdy52YWx1ZS5jdXJyZW50IHx8IHt9ICkgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4udmFsdWVdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHksIHRyeSB0byBnZXQgZnJvbSBkYXRhSW5wdXRzXG5cdFx0aWYgKCAwID09PSBPYmplY3Qua2V5cyggZGVlcENvcHlWYWx1ZXMgKS5sZW5ndGggJiYgcm93LmRhdGFJbnB1dHMgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCBpbnB1dF0gb2YgT2JqZWN0LmVudHJpZXMoIHJvdy5kYXRhSW5wdXRzICkgKSB7XG5cdFx0XHRcdGlmICggaW5wdXQgJiYgaW5wdXQuZ2V0VmFsdWUgKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpbnB1dFZhbHVlICkgKSB7XG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gWy4uLmlucHV0VmFsdWVdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gaW5wdXRWYWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bm9kZTogcm93LnJvb3ROb2RlLFxuXHRcdFx0dmFsdWVzOiBkZWVwQ29weVZhbHVlc1xuXHRcdH07XG5cdH0gKTtcblxuXHRvdGhlclJvd3MuZm9yRWFjaCggKCByb3csIGluZGV4ICkgPT4ge1xuXHRcdGlmICggb3RoZXJWYWx1ZXNbaW5kZXhdICkge1xuXHRcdFx0Y29uc3QgdmFsdWVzVG9SZXN0b3JlID0gb3RoZXJWYWx1ZXNbaW5kZXhdLnZhbHVlcztcblxuXHRcdFx0Zm9yICggY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZXNUb1Jlc3RvcmUgKSApIHtcblx0XHRcdFx0cm93LnZhbHVlLmN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlucHV0cyA9IHJvdy5nZXRJbnB1dHMoKTtcblxuXHRcdFx0XHRpbnB1dHMuZm9yRWFjaCggaW5wdXQgPT4ge1xuXHRcdFx0XHRcdGlmICggaW5wdXQudXBkYXRlUHJldmlld3MgJiYgdHlwZW9mIGlucHV0LnVwZGF0ZVByZXZpZXdzID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdFx0aW5wdXQudXBkYXRlUHJldmlld3MoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvLyBSZWluaXRpYWxpemUgcm93IGZvcm11bGEgYWZ0ZXIgcmVpbmRleGluZ1xuXHRcdFx0XHRyb3cuaW5pdGVkQ2FsYyA9IGZhbHNlOyAvLyBSZXNldCB0aGUgZmxhZyB0byBhbGxvdyByZS1pbml0aWFsaXphdGlvblxuXHRcdFx0XHRyb3cuaW5pdENhbGMoKTsgLy8gUmUtaW5pdGlhbGl6ZSB0aGUgZm9ybXVsYSB3aXRoIG5ldyBmaWVsZCBuYW1lc1xuXHRcdFx0fSwgNTAgKTtcblx0XHR9XG5cdH0gKTtcblxuXHR0aGlzLnJlbW92ZSgpO1xuXHR0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcblx0dGhpcy5yb290Tm9kZS5yZW1vdmUoKTtcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmluaXRDYWxjID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuaW5pdGVkQ2FsYyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmluaXRlZENhbGMgICAgID0gdHJ1ZTtcblx0Y29uc3QgWyBub2RlIF0gICAgICA9IHRoaXMucGFyZW50Lm5vZGVzO1xuXHRjb25zdCBmb3JtdWxhU3RyaW5nID0gbm9kZS5kYXRhc2V0Py5mb3JtdWxhO1xuXG5cdGlmICggIWZvcm11bGFTdHJpbmcgfHwgJ2RlZmF1bHQnID09PSB0aGlzLnBhcmVudC5jYWxjVHlwZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzICk7XG5cblx0Zm9ybXVsYS5vYnNlcnZlKCBmb3JtdWxhU3RyaW5nICk7XG5cdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xuXHRcdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdFx0dGhpcy5wYXJlbnQudmFsdWUubm90aWZ5KCk7XG5cdH07XG5cdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuY2FsY1ZhbHVlO1xuXHR9O1xuXHRmb3JtdWxhLmVtcHR5VmFsdWUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR0aGlzLmNhbGMgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHR0aGlzLnBhcmVudC5zaWxlbmNlTm90aWZ5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlUm93O1xuIiwiLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNSZXBlYXRlciggbm9kZSApIHtcblx0cmV0dXJuIDEgPT09ICtub2RlLmRhdGFzZXQucmVwZWF0ZXI7XG59XG5cbmV4cG9ydCB7IGlzUmVwZWF0ZXIgfTsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IE9ic2VydmFibGVSb3cgZnJvbSAnLi9PYnNlcnZhYmxlUm93JztcblxuY29uc3Qge1xuXHQgICAgICBJbnB1dERhdGEsXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBSZXBlYXRlckRhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5idXR0b25Ob2RlICAgPSBmYWxzZTtcblx0dGhpcy50ZW1wbGF0ZSAgICAgPSBudWxsO1xuXHR0aGlzLmNvbnRhaW5lciAgICA9IG51bGw7XG5cdHRoaXMubGFzdE9ic2VydmVkID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMubGFzdE9ic2VydmVkLm1ha2UoKTtcblxuXHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VJbnZhbGlkID0gKCkgPT4ge307XG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcblx0fTtcblxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgW25vZGVdID0gdGhpcy5ub2Rlcztcblx0XHRjb25zdCByZW5kZXJlZFJvd3MgPSBbXG5cdFx0XHQuLi5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93Jyxcblx0XHRcdCksXG5cdFx0XTtcblxuXHRcdGNvbnN0IGhhc1d5c2l3eWcgPSByZW5kZXJlZFJvd3Muc29tZShcblx0XHRcdHJvdyA9PiByb3cucXVlcnlTZWxlY3RvcignLnd5c2l3eWctZmllbGQnKSxcblx0XHQpO1xuXG5cdFx0Ly8gV1lTSVdZRyBpbnNpZGUgaW5pdGlhbGx5IHJlbmRlcmVkIHJlcGVhdGVyIHJvd3MgbmVlZHMgdGhlIHNhbWUgaW5pdCBwYXRoXG5cdFx0Ly8gYXMgcm93cyBhZGRlZCB2aWEgQWRkIE5ldy4gQWRkIE5ldyBnb2VzIHRocm91Z2ggU2lnbmFsUmVwZWF0ZXIucnVuSXRlbSgpLFxuXHRcdC8vIHdoaWNoIHJlYnVpbGRzIHRoZSByb3cgZnJvbSB0ZW1wbGF0ZSBhbmQgaW5jbHVkZXMgdGhlIGVkaXRvci1yZWxhdGVkIENTUy5cblx0XHRpZiAoaGFzV3lzaXd5Zykge1xuXHRcdFx0Y29uc3QgY3VycmVudFJvd3MgPSByZW5kZXJlZFJvd3MubWFwKHJvdyA9PiB7XG5cdFx0XHRcdHJvdy5yZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlUm93KHRoaXMpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGN1cnJlbnRSb3dzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBPbGQgYmVoYXZpb3IgZm9yIHJlcGVhdGVycyB3aXRob3V0IFdZU0lXWUcuXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcblxuXHRcdFx0Zm9yIChjb25zdCByb3cgb2YgcmVuZGVyZWRSb3dzKSB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgT2JzZXJ2YWJsZVJvdyh0aGlzKTtcblx0XHRcdFx0Y3VycmVudC5yb290Tm9kZSA9IHJvdztcblxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQucHVzaChjdXJyZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICggY29uc3QgY3VycmVudEVsZW1lbnQgb2YgdGhpcy52YWx1ZS5jdXJyZW50KSB7XG5cdFx0XHRcdGN1cnJlbnRFbGVtZW50Lm9ic2VydmUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCkge1xuXHRcdFx0Y3VycmVudEVsZW1lbnQuaW5pdENhbGMoKTtcblx0XHR9XG5cblx0XHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyxcblx0XHQpO1xuXG5cdFx0Zm9yIChjb25zdCBidXR0b24gb2YgcmVtb3ZlQnV0dG9ucykge1xuXHRcdFx0Y29uc3Qgcm93ID0gdGhpcy5jbG9zZXN0Um93KGJ1dHRvbik7XG5cblx0XHRcdGlmICggIXJvdyApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdy5yZW1vdmVNYW51YWxseSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc01hbnVhbENvdW50KSB7XG5cdFx0XHRpZiAoIXRoaXMuYWRkRXZlbnRBdHRhY2hlZCAmJiAhdGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyKSB7XG5cdFx0XHRcdHRoaXMuYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYWRkTmV3KCkpO1xuXHRcdFx0XHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuaGFzTGlzdGVuZXIgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5yb290LmdldElucHV0KHRoaXMuaXRlbXNGaWVsZCk7XG5cblx0XHRpZiAoIWlucHV0KSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdFx0YEpldEZvcm1CdWlsZGVyIGVycm9yOiB1bmRlZmluZWQgaW5wdXQgYnkgbmFtZSBbJHt0aGlzLml0ZW1zRmllbGR9XWAsXG5cdFx0XHQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW5wdXQud2F0Y2goKCkgPT4gdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKGlucHV0KSk7XG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKGlucHV0KTtcblx0fTtcblx0dGhpcy5zZXROb2RlICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5ub2RlcyAgICAgPSBbIG5vZGUgXTtcblx0XHR0aGlzLm5hbWUgICAgICA9IG5vZGUuZGF0YXNldC5maWVsZE5hbWU7XG5cdFx0dGhpcy5yYXdOYW1lICAgPSB0aGlzLm5hbWU7XG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAncmVwZWF0ZXInO1xuXG5cdFx0dGhpcy5tYW5hZ2VJdGVtcyA9IG5vZGUuZGF0YXNldD8ubWFuYWdlSXRlbXMgfHwgJ21hbnVhbGx5Jztcblx0XHR0aGlzLmNhbGNUeXBlICAgID0gbm9kZS5kYXRhc2V0Py5jYWxjVHlwZSB8fCAnZGVmYXVsdCc7XG5cdFx0dGhpcy5pdGVtc0ZpZWxkICA9IG5vZGUuZGF0YXNldD8uaXRlbXNGaWVsZDtcblxuXHRcdHRoaXMuaXNNYW51YWxDb3VudCA9IChcblx0XHRcdCF0aGlzLml0ZW1zRmllbGQgfHwgJ21hbnVhbGx5JyA9PT0gdGhpcy5tYW5hZ2VJdGVtc1xuXHRcdCk7XG5cblx0XHQvLyBjYW4gYmUgbnVsbFxuXHRcdHRoaXMuYnV0dG9uTm9kZSA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fbmV3Jyxcblx0XHQpO1xuXHRcdHRoaXMudGVtcGxhdGUgICA9IG5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faW5pdGlhbCcsXG5cdFx0KTtcblx0XHR0aGlzLmNvbnRhaW5lciAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXTtcblx0fTtcblxuXHR0aGlzLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXRzID0gW107XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCByb3dzICAgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcblx0XHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHJvdy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0XHRpZiAoICFpbnB1dC5yZXBvcnRpbmc/LnJlc3RyaWN0aW9ucz8ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlucHV0cy5wdXNoKCBpbnB1dCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH07XG5cblx0dGhpcy5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcblx0XHRcdHJvdy5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCAhdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCByZXBlYXRlclJvd3MgPSB0aGlzLnZhbHVlLmN1cnJlbnRcblxuXHRcdHJlcGVhdGVyUm93cy5mb3JFYWNoKCByb3cgPT4ge1xuXHRcdFx0cm93LmdldElucHV0cygpLmZvckVhY2goIGlucHV0ID0+IHtcblx0XHRcdFx0aW5wdXQuc2V0VmFsdWUoKTtcblx0XHRcdFx0aW5wdXQuaW5pdE5vdGlmeVZhbHVlKCk7XG5cdFx0XHR9ICk7XG5cdFx0fSApXG5cdH1cbn1cblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5idXR0b25Ob2RlID0gbnVsbDtcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgICA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNvbnRhaW5lciAgPSBudWxsO1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5pdGVtc0ZpZWxkID0gZmFsc2U7XG4vKipcbiAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cbiAqL1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5sYXN0T2JzZXJ2ZWQgPSBudWxsO1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmFkZE5ldyA9IGZ1bmN0aW9uICggY291bnQgPSAxICkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBbXG5cdFx0Li4udGhpcy52YWx1ZT8uY3VycmVudCA/PyBbXSxcblx0XHQuLi4oXG5cdFx0XHRuZXcgQXJyYXkoIGNvdW50IClcblx0XHQpLmZpbGwoIG51bGwgKS5tYXAoXG5cdFx0XHQoKSA9PiBuZXcgT2JzZXJ2YWJsZVJvdyggdGhpcyApLFxuXHRcdCksXG5cdF07XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZVJvdyApIHtcblx0aWYgKCAhQXJyYXkuaXNBcnJheSggdGhpcy52YWx1ZS5jdXJyZW50ICkgKSB7XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdHJldHVybiB0aGlzLnZhbHVlLmN1cnJlbnQuZmluZEluZGV4KFxuXHRcdGN1cnJlbnQgPT4gY3VycmVudCA9PT0gb2JzZXJ2YWJsZVJvdyxcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbnxPYnNlcnZhYmxlUm93fVxuICovXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLmNsb3Nlc3RSb3cgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdGNvbnN0IHJvd05vZGUgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93JyApO1xuXG5cdGlmICggIXJvd05vZGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdCAqL1xuXHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdGZvciAoIGNvbnN0IHJvdyBvZiByb3dzICkge1xuXHRcdGlmICggcm93LnJvb3ROb2RlID09PSByb3dOb2RlICkge1xuXHRcdFx0cmV0dXJuIHJvdztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZVJvdyApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy52YWx1ZS5jdXJyZW50LmZpbHRlcihcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgIT09IG9ic2VydmFibGVSb3csXG5cdCk7XG59O1xuXG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnJlY2FsY3VsYXRlSXRlbXMgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xuXG5cdC8vIGlmIGl0IDwgMCA9PT4gd2Ugc2hvdWxkIGFkZCB7ZGlmZn0gbmV3IHJlcGVhdGVyIGl0ZW1zXG5cdC8vIGlmIGl0ID4gMCA9PT4gd2Ugc2hvdWxkIHJlbW92ZSBsYXN0IHtkaWZmfSBpdGVtc1xuXHRjb25zdCBkaWZmID0gY3VycmVudENvdW50IC0gaW5wdXQuY2FsY1ZhbHVlO1xuXG5cdGlmICggMCA9PT0gZGlmZiApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIGRpZmYgPCAwICkge1xuXHRcdHRoaXMuYWRkTmV3KCAtMSAqIGRpZmYgKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuY3VycmVudC5zbGljZSggMCwgLTEgKiBkaWZmICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBlYXRlckRhdGE7XG4iLCJjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuZnVuY3Rpb24gYmluZFJlcGVhdGVyTm90aWZ5T25jZSggbm9kZSApIHtcblx0aWYgKCBub2RlLl9famZiTWFjcm9zUmVwZWF0ZXJCb3VuZCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRub2RlLl9famZiTWFjcm9zUmVwZWF0ZXJCb3VuZCA9IHRydWU7XG5cblx0Y29uc3QgZm9ybSAgID0gbm9kZS5jbG9zZXN0KCAnZm9ybS5qZXQtZm9ybS1idWlsZGVyJyApO1xuXHRjb25zdCBmb3JtSWQgPSBmb3JtPy5kYXRhc2V0Py5mb3JtSWQ7XG5cdGNvbnN0IHN0b3JlICA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlcj8uWyBmb3JtSWQgXTtcblxuXHRjb25zdCByZXBlYXRlcklucHV0ID0gc3RvcmU/LmdldElucHV0Py4oIG5vZGUuZGF0YXNldC5maWVsZE5hbWUgKTtcblxuXHRjb25zdCBub3RpZnkgPSAoKSA9PiB7XG5cdFx0cmVwZWF0ZXJJbnB1dD8udmFsdWU/Lm5vdGlmeT8uKCk7XG5cdH07XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBub3RpZnksIHRydWUgKTtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgbm90aWZ5LCB0cnVlICk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdjbGljaycsXG5cdFx0KCBlICkgPT4ge1xuXHRcdFx0Y29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQuY2xvc2VzdD8uKCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3Jvdy1yZW1vdmUnICk7XG5cdFx0XHRpZiAoICFyZW1vdmVCdG4gfHwgIW5vZGUuY29udGFpbnMoIHJlbW92ZUJ0biApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIG5vdGlmeSApO1xuXHRcdH0sXG5cdFx0dHJ1ZVxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKCBlbCApIHtcblx0aWYgKCBlbC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBlbC5tdWx0aXBsZSApIHtcblx0XHRjb25zdCB2YWx1ZXMgPSBBcnJheS5mcm9tKCBlbC5zZWxlY3RlZE9wdGlvbnMgfHwgW10gKVxuXHRcdFx0Lm1hcCggKCBvcHQgKSA9PiBTdHJpbmcoIG9wdC52YWx1ZSA/PyAnJyApLnRyaW0oKSApXG5cdFx0XHQuZmlsdGVyKCBCb29sZWFuICk7XG5cblx0XHRyZXR1cm4gdmFsdWVzLmpvaW4oICcsICcgKTtcblx0fVxuXG5cdHJldHVybiBTdHJpbmcoIGVsLnZhbHVlID8/ICcnICkudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXRSZXBlYXRlckZpZWxkVmFsdWUoIGVsLCByb3dFbCwgcm93UmVwZWF0ZXJGaWVsZCApIHtcblx0Y29uc3QgY3VycmVudCA9IGdldEZpZWxkVmFsdWUoIGVsICk7XG5cblx0cmV0dXJuIGFwcGx5RmlsdGVycyhcblx0XHQnamV0LmZiLm1hY3JvLmluc2lkZS5yZXBlYXRlci5maWVsZC52YWx1ZScsXG5cdFx0Y3VycmVudCxcblx0XHRlbCxcblx0XHRyb3dFbCxcblx0XHRyb3dSZXBlYXRlckZpZWxkXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSb3dWYWx1ZXMoIHJvd0VsICkge1xuXHRjb25zdCB2YWx1ZXNCeU5hbWUgPSBPYmplY3QuY3JlYXRlKCBudWxsICk7XG5cblx0Y29uc3Qgcm93UmVwZWF0ZXJGaWVsZCA9IHJvd0VsLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcgKTtcblx0Y29uc3QgZmllbGRzID0gcm93RWwucXVlcnlTZWxlY3RvckFsbCggJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyApO1xuXG5cdGZpZWxkcy5mb3JFYWNoKCAoIGVsICkgPT4ge1xuXHRcdC8vIGlnbm9yZSBuZXN0ZWQgcmVwZWF0ZXItaW4tcmVwZWF0ZXJcblx0XHRpZiAoIGVsLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcgKSAhPT0gcm93UmVwZWF0ZXJGaWVsZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGVsLmRpc2FibGVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGlnbm9yZSBoaWRkZW4gKHVzdWFsbHkgc3RvcmVzIGludGVybmFsL3NlcnZpY2UgdmFsdWVzKVxuXHRcdGlmICggZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlbC50eXBlID09PSAnaGlkZGVuJyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICggZWwudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBlbC50eXBlID09PSAncmFkaW8nICkgJiYgIWVsLmNoZWNrZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmFtZSA9IGVsLmRhdGFzZXQ/LmZpZWxkTmFtZSB8fCBlbC5uYW1lIHx8ICcnO1xuXHRcdGlmICggIW5hbWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWUgPSBnZXRSZXBlYXRlckZpZWxkVmFsdWUoIGVsLCByb3dFbCwgcm93UmVwZWF0ZXJGaWVsZCApO1xuXHRcdGlmICggdmFsdWUgPT09ICcnICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWVzQnlOYW1lWyBuYW1lIF0gKSB7XG5cdFx0XHR2YWx1ZXNCeU5hbWVbIG5hbWUgXSArPSBgLCAkeyB2YWx1ZSB9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWVzQnlOYW1lWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHR9XG5cdH0gKTtcblxuXHRyZXR1cm4gdmFsdWVzQnlOYW1lO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVwZWF0ZXJMaW5lc0Zyb21UZW1wbGF0ZSggZmllbGROb2RlLCB0ZW1wbGF0ZUh0bWwgKSB7XG5cdGNvbnN0IGl0ZW1zID0gZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faXRlbXMnICk7XG5cdGlmICggIWl0ZW1zICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHRwbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcblx0dHBsLmlubmVySFRNTCA9IFN0cmluZyggdGVtcGxhdGVIdG1sID8/ICcnICk7XG5cblx0Y29uc3Qgcm93cyAgPSBpdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtcmVwZWF0ZXItcm93XScgKTtcblx0Y29uc3QgbGluZXMgPSBbXTtcblxuXHRyb3dzLmZvckVhY2goICggcm93RWwgKSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSB0cGwuY29udGVudC5jbG9uZU5vZGUoIHRydWUgKTtcblx0XHRjb25zdCBtYWNyb05vZGVzID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWpmYi1tYWNyb10nICk7XG5cblx0XHRjb25zdCB2YWx1ZXNCeU5hbWUgPSBjb2xsZWN0Um93VmFsdWVzKCByb3dFbCApO1xuXG5cdFx0bWFjcm9Ob2Rlcy5mb3JFYWNoKCAoIG5vZGUgKSA9PiB7XG5cdFx0XHRjb25zdCBtYWNyb05hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSggJ2RhdGEtamZiLW1hY3JvJyApIHx8ICcnO1xuXHRcdFx0aWYgKCAhbWFjcm9OYW1lICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG5vZGUuaW5uZXJIVE1MID0gU3RyaW5nKCB2YWx1ZXNCeU5hbWVbIG1hY3JvTmFtZSBdID8/ICcnICk7XG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHR0bXAuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG5cdFx0bGluZXMucHVzaCggdG1wLmlubmVySFRNTCApO1xuXHR9ICk7XG5cblx0cmV0dXJuIGxpbmVzLmpvaW4oICcnICk7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RSZXBlYXRlckxpbmVzUGxhaW4oIGZpZWxkTm9kZSwgbWFjcm9zICkge1xuXHRjb25zdCBpdGVtcyA9IGZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyApO1xuXHRpZiAoICFpdGVtcyApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBtYWNyb3NTZXQgPSBBcnJheS5pc0FycmF5KCBtYWNyb3MgKSAmJiBtYWNyb3MubGVuZ3RoXG5cdFx0PyBuZXcgU2V0KCBtYWNyb3MgKVxuXHRcdDogbnVsbDtcblxuXHRjb25zdCByb3dzICA9IGl0ZW1zLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1yZXBlYXRlci1yb3ddJyApO1xuXHRjb25zdCBsaW5lcyA9IFtdO1xuXG5cdHJvd3MuZm9yRWFjaCggKCByb3dFbCApID0+IHtcblx0XHRjb25zdCByb3dSZXBlYXRlckZpZWxkID0gcm93RWwuY2xvc2VzdCggJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyApO1xuXHRcdGNvbnN0IGZpZWxkcyA9IHJvd0VsLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScgKTtcblxuXHRcdGZpZWxkcy5mb3JFYWNoKCAoIGVsICkgPT4ge1xuXHRcdFx0aWYgKCBlbC5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnICkgIT09IHJvd1JlcGVhdGVyRmllbGQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICggZWwuZGlzYWJsZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICggZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlbC50eXBlID09PSAnaGlkZGVuJyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAoIGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJyApICYmICFlbC5jaGVja2VkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBlbC5kYXRhc2V0Py5maWVsZE5hbWUgfHwgZWwubmFtZSB8fCAnJztcblx0XHRcdGlmICggIW5hbWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtYWNyb3NTZXQgJiYgIW1hY3Jvc1NldC5oYXMoIG5hbWUgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldFJlcGVhdGVyRmllbGRWYWx1ZSggZWwsIHJvd0VsLCByb3dSZXBlYXRlckZpZWxkICk7XG5cdFx0XHRsaW5lcy5wdXNoKCBgJHsgbmFtZSB9OiAkeyB2YWx1ZSB9YCApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHJldHVybiBsaW5lcy5qb2luKCAnPGJyLz4nICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVwZWF0ZXJNYWNyb3NWYWx1ZSggY3VycmVudCwgJGZpZWxkTm9kZSwgJG1hY3JvSG9zdCA9IGZhbHNlICkge1xuXHRjb25zdCBmaWVsZE5vZGUgPSAkZmllbGROb2RlPy5bIDAgXTtcblx0aWYgKCAhZmllbGROb2RlIHx8IGZpZWxkTm9kZS5kYXRhc2V0Py5yZXBlYXRlciAhPT0gJzEnICkge1xuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0YmluZFJlcGVhdGVyTm90aWZ5T25jZSggZmllbGROb2RlICk7XG5cblx0Y29uc3QgaG9zdCA9ICRtYWNyb0hvc3Q/LlsgMCBdO1xuXHRjb25zdCBzb3VyY2UgPSBob3N0Py5fX2pmYk1hY3JvVGVtcGxhdGU7XG5cblx0aWYgKCAhaG9zdCB8fCAhc291cmNlICkge1xuXHRcdHJldHVybiBjb2xsZWN0UmVwZWF0ZXJMaW5lc1BsYWluKCBmaWVsZE5vZGUsIG51bGwgKTtcblx0fVxuXG5cdHJldHVybiBjb2xsZWN0UmVwZWF0ZXJMaW5lc0Zyb21UZW1wbGF0ZSggZmllbGROb2RlLCBzb3VyY2UgKTtcbn0iLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxubGV0IHtcblx0ICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXG5cdCAgICBSZXN0cmljdGlvbixcbiAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuQWR2YW5jZWRSZXN0cmljdGlvbiA9IEFkdmFuY2VkUmVzdHJpY3Rpb24gfHwgUmVzdHJpY3Rpb247XG5cbmZ1bmN0aW9uIFJlcGVhdGVyUmVzdHJpY3Rpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmVwZWF0ZXIoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH07XG59XG5cblJlcGVhdGVyUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZXBlYXRlckRhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIFNpZ25hbFJlcGVhdGVyKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XG5cdH07XG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSA9IFtdICkge1xuXHRcdGNvbnN0IHsgY3VycmVudCB9ICAgICA9IHRoaXMuaW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgaGFzRGVsZXRlZEl0ZW1zID0gKFxuXHRcdFx0cHJldlZhbHVlPy5sZW5ndGggJiYgcHJldlZhbHVlLmxlbmd0aCA+IGN1cnJlbnQubGVuZ3RoXG5cdFx0KTtcblxuXHRcdGlmICggaGFzRGVsZXRlZEl0ZW1zICkge1xuXHRcdFx0dGhpcy5yZW1vdmVQcmV2SXRlbXMoIHByZXZWYWx1ZSApO1xuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGluZGV4IG9mIE9iamVjdC5rZXlzKCBjdXJyZW50ICkgKSB7XG5cdFx0XHRpZiAoICFjdXJyZW50Lmhhc093blByb3BlcnR5KCBpbmRleCApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSXRlbSggK2luZGV4LCBoYXNEZWxldGVkSXRlbXMgKTtcblx0XHR9XG5cblx0XHRsZXQgY2FsY1ZhbHVlID0gMDtcblxuXHRcdGZvciAoIGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKCBjdXJyZW50ICkgKSB7XG5cdFx0XHRyb3cuaW5pdENhbGMoKTtcblx0XHRcdGNhbGNWYWx1ZSArPSByb3cuY2FsYztcblx0XHR9XG5cblx0XHR0aGlzLmlucHV0LmNhbGNWYWx1ZSA9IGNhbGNWYWx1ZTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSBjdXJyZW50SW5kZXggICAge051bWJlcn1cblx0ICogQHBhcmFtIHNob3VsZFJlT2JzZXJ2ZVxuXHQgKi9cblx0dGhpcy5ydW5JdGVtID0gZnVuY3Rpb24gKCBjdXJyZW50SW5kZXgsIHNob3VsZFJlT2JzZXJ2ZSA9IGZhbHNlICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93fVxuXHRcdCAqL1xuXHRcdGNvbnN0IG9ic2VydmFibGUgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnRbIGN1cnJlbnRJbmRleCBdO1xuXG5cdFx0aWYgKCBvYnNlcnZhYmxlLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRpZiAoICFzaG91bGRSZU9ic2VydmUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0b2JzZXJ2YWJsZS5yb290Tm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5pbnB1dC50ZW1wbGF0ZS5pbm5lckhUTUwudHJpbSgpO1xuXG5cdFx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MLnJlcGxhY2UoXG5cdFx0XHQvX19pX18vZyxcblx0XHRcdGN1cnJlbnRJbmRleCxcblx0XHQpO1xuXG5cdFx0LyoqXG5cdFx0ICogUmVzZXQgaW5wdXQgdmFsdWVzIGZvciBhIG5ldyByb3dcblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAzLjQuN1xuXHRcdCAqL1xuXHRcdGNvbnN0IG5ld1JvdyA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0Y29uc3QgaW5wdXRzID0gbmV3Um93LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIG91dHB1dFwiICk7XG5cblx0XHRpbnB1dHMuZm9yRWFjaCggKCBpbnB1dCApID0+IHtcblx0XHRcdHN3aXRjaCAoIGlucHV0LnR5cGUgKSB7XG5cdFx0XHRcdGNhc2UgXCJjaGVja2JveFwiOlxuXHRcdFx0XHRjYXNlIFwicmFkaW9cIjpcblx0XHRcdFx0XHQvLyBQcmVzZXJ2ZSBkZWZhdWx0IGNoZWNrZWQgc3RhdGUgZm9yIGNoZWNrYm94L3JhZGlvIGZpZWxkc1xuXHRcdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBpbnB1dCBoYXMgZGVmYXVsdENoZWNrZWQgYXR0cmlidXRlIChmcm9tIEhUTUwpXG5cdFx0XHRcdFx0aW5wdXQuY2hlY2tlZCA9IGlucHV0LmRlZmF1bHRDaGVja2VkIHx8IGZhbHNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwic2VsZWN0LW9uZVwiOlxuXHRcdFx0XHRjYXNlIFwic2VsZWN0LW11bHRpcGxlXCI6XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9ucyA9IGlucHV0LnF1ZXJ5U2VsZWN0b3JBbGwoICdvcHRpb24nICk7XG5cdFx0XHRcdFx0b3B0aW9ucy5mb3JFYWNoKCBvcHRpb24gPT4ge1xuXHRcdFx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLmRlZmF1bHRTZWxlY3RlZCB8fCBmYWxzZTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJmaWxlXCI6XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmFuZ2VcIjpcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LmRlZmF1bHRWYWx1ZSB8fCBcIlwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gaW5wdXQuZGVmYXVsdFZhbHVlIHx8IFwiXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0dGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLmRhdGFzZXQuaW5kZXggPSAnJyArIGN1cnJlbnRJbmRleDtcblxuXHRcdHRoaXMuaW5wdXQuY29udGFpbmVyLmFwcGVuZCggbmV3Um93ICk7XG5cblx0XHRjb25zdCBhcHBlbmRlZCA9IHRoaXMuaW5wdXQuY29udGFpbmVyLmxhc3RDaGlsZDtcblxuXHRcdGlmICggdGhpcy5pbnB1dC5pc01hbnVhbENvdW50ICkge1xuXHRcdFx0YXBwZW5kZWQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yZW1vdmUnLFxuXHRcdFx0KS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHQoKSA9PiBvYnNlcnZhYmxlLnJlbW92ZU1hbnVhbGx5KCksXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICggb2JzZXJ2YWJsZS5pc09ic2VydmVkICkge1xuXHRcdFx0b2JzZXJ2YWJsZS5yZU9ic2VydmUoIGFwcGVuZGVkICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBhcHBlbmRlZCApO1xuXHR9O1xuXG5cdHRoaXMucmVtb3ZlUHJldkl0ZW1zID0gZnVuY3Rpb24gKCBwcmV2Um93cyApIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHRmb3IgKCBjb25zdCBwcmV2Um93IG9mIHByZXZSb3dzICkge1xuXHRcdFx0aWYgKCAhY3VycmVudC5pbmNsdWRlcyggcHJldlJvdyApICkge1xuXHRcdFx0XHRwcmV2Um93LnJlbW92ZU1hbnVhbGx5KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5TaWduYWxSZXBlYXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSZXBlYXRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmVwZWF0ZXJEYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbFJlcGVhdGVyIGZyb20gJy4vc2lnbmFsJztcbmltcG9ydCBSZXBlYXRlclJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlcGVhdGVyUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgcmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUgfSBmcm9tICcuL3JlcGVhdGVyLW1hY3Jvcyc7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkRmlsdGVyLFxuXHQgICAgICBhZGRBY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBSZXBlYXRlckRhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsUmVwZWF0ZXIsIC4uLnNpZ25hbHMgXTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuKTtcblxuY29uc3QgYWRkUmVzdHJpY3Rpb24gPSAoIHJlc3RyaWN0aW9ucyApID0+IHtcblx0cmVzdHJpY3Rpb25zLnB1c2goXG5cdFx0UmVwZWF0ZXJSZXN0cmljdGlvbixcblx0KTtcblxuXHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xufTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRhZGRSZXN0cmljdGlvbixcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGFkZFJlc3RyaWN0aW9uLFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm11bHRpc3RlcC5wYWdlLm9ic2VydmVkLmlucHV0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfFJlcGVhdGVyRGF0YX1cblx0ICogQHBhcmFtIHBhZ2VTdGF0ZSB7UGFnZVN0YXRlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBpbnB1dCwgcGFnZVN0YXRlICkge1xuXHRcdGlmICggJ3JlcGVhdGVyJyAhPT0gaW5wdXQuaW5wdXRUeXBlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGdldEN1cnJlbnRJbnB1dHMgPSAoKSA9PiAoXG5cdFx0XHQoIGlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW10gKS5mbGF0TWFwKFxuXHRcdFx0XHRvYnNlcnZhYmxlUm93ID0+IG9ic2VydmFibGVSb3cuZ2V0SW5wdXRzKCksXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSBjdXJyZW50SW5wdXQge0lucHV0RGF0YX1cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBvYnNlcnZlSW5uZXJJbnB1dCggY3VycmVudElucHV0ICkge1xuXHRcdFx0cGFnZVN0YXRlLnJlZ2lzdGVySW5wdXQoXG5cdFx0XHRcdGN1cnJlbnRJbnB1dCxcblx0XHRcdFx0eyBpbmNsdWRlSW5WYWxpZGF0aW9uOiBmYWxzZSB9LFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzeW5jQ3VycmVudElucHV0cygpIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRJbnB1dHMgPSBnZXRDdXJyZW50SW5wdXRzKCk7XG5cdFx0XHRjb25zdCBjdXJyZW50U2V0ID0gbmV3IFNldCggY3VycmVudElucHV0cyApO1xuXHRcdFx0Y29uc3QgY3VycmVudFJvd3MgPSBuZXcgU2V0KCBpbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdICk7XG5cdFx0XHRjb25zdCByZXBlYXRlclRyYWNrZWRJbnB1dHMgPSBwYWdlU3RhdGUuZ2V0VHJhY2tlZElucHV0cygpLmZpbHRlcihcblx0XHRcdFx0Y3VycmVudElucHV0ID0+IGN1cnJlbnRJbnB1dC5yb290Py5wYXJlbnQgPT09IGlucHV0LFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHN0YWxlVHJhY2tlZElucHV0cyA9IHJlcGVhdGVyVHJhY2tlZElucHV0cy5maWx0ZXIoXG5cdFx0XHRcdGN1cnJlbnRJbnB1dCA9PiAoXG5cdFx0XHRcdFx0IWN1cnJlbnRSb3dzLmhhcyggY3VycmVudElucHV0LnJvb3QgKSB8fFxuXHRcdFx0XHRcdGN1cnJlbnRJbnB1dC5fb2JzZXJ2ZVZlcnNpb24gIT09XG5cdFx0XHRcdFx0XHRjdXJyZW50SW5wdXQucm9vdD8uX29ic2VydmVWZXJzaW9uXG5cdFx0XHRcdCkgJiYgIWN1cnJlbnRTZXQuaGFzKCBjdXJyZW50SW5wdXQgKSxcblx0XHRcdCk7XG5cblx0XHRcdHN0YWxlVHJhY2tlZElucHV0cy5mb3JFYWNoKFxuXHRcdFx0XHRjdXJyZW50SW5wdXQgPT4gcGFnZVN0YXRlLnVucmVnaXN0ZXJJbnB1dCggY3VycmVudElucHV0ICksXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudElucHV0cy5mb3JFYWNoKCBvYnNlcnZlSW5uZXJJbnB1dCApO1xuXHRcdFx0cGFnZVN0YXRlLnVwZGF0ZVN0YXRlKCk7XG5cdFx0fVxuXG5cdFx0c3luY0N1cnJlbnRJbnB1dHMoKTtcblx0XHRpbnB1dC53YXRjaCggc3luY0N1cnJlbnRJbnB1dHMgKTtcblx0XHRpbnB1dC5sYXN0T2JzZXJ2ZWQud2F0Y2goIHN5bmNDdXJyZW50SW5wdXRzICk7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdCggY3VycmVudCwgJGZpZWxkTm9kZSwgJG1hY3JvSG9zdCApID0+XG5cdFx0cmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUoIGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgKSxcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=