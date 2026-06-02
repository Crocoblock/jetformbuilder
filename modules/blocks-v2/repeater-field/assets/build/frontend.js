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
    if (hasWysiwyg) {
      const currentRows = renderedRows.map(row => {
        row.remove();
        return new _ObservableRow__WEBPACK_IMPORTED_MODULE_1__["default"](this);
      });
      this.value.current = currentRows;
    } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwUkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7O0FDOUlBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQU1BO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL09ic2VydmFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL2lucHV0LmpzIiwid2VicGFjazovL2pmYi1yZXBlYXRlci1maWVsZC8uL2Zyb250ZW5kL3JlcGVhdGVyLW1hY3Jvcy5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9yZXN0cmljdGlvbnMvUmVwZWF0ZXJSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkLy4vZnJvbnRlbmQvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXJlcGVhdGVyLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItcmVwZWF0ZXItZmllbGQvLi9mcm9udGVuZC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG5cdCAgICAgIE9ic2VydmFibGUsXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIGNsb25lT2JzZXJ2ZWRWYWx1ZSggdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gWyAuLi52YWx1ZSBdO1xuXHR9XG5cblx0aWYgKCB2YWx1ZSAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiB7IC4uLnZhbHVlIH07XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzTmF0aXZlRGF0ZUxpa2VJbnB1dCggaW5wdXQgKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQ/Lm5vZGVzID8/IFtdO1xuXG5cdHJldHVybiBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGU/LnR5cGUgKTtcbn1cblxuZnVuY3Rpb24gc3RhbXBPYnNlcnZlZElucHV0cyggcm93ICkge1xuXHRyb3cuX29ic2VydmVWZXJzaW9uID0gKCByb3cuX29ic2VydmVWZXJzaW9uIHx8IDAgKSArIDE7XG5cblx0Zm9yICggY29uc3QgaW5wdXQgb2Ygcm93LmdldElucHV0cygpICkge1xuXHRcdGlucHV0Ll9vYnNlcnZlVmVyc2lvbiA9IHJvdy5fb2JzZXJ2ZVZlcnNpb247XG5cdH1cbn1cblxuZnVuY3Rpb24gT2JzZXJ2YWJsZVJvdyggcGFyZW50ICkge1xuXHRPYnNlcnZhYmxlLmNhbGwoIHRoaXMsIHBhcmVudCApO1xuXG5cdC8vIEJ5IGRlZmF1bHQgd2UgcmV0dXJuIHRoZSBudW1iZXIgb2YgcmVwZWF0ZXIgcm93c1xuXHR0aGlzLmNhbGMgICAgICAgPSAxO1xuXHR0aGlzLmluaXRlZENhbGMgPSBmYWxzZTtcbn1cblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUgICAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoIE9ic2VydmFibGUucHJvdG90eXBlICk7XG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5jYWxjICAgICAgID0gMTtcbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmluaXRlZENhbGMgPSBmYWxzZTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUucmVPYnNlcnZlID0gZnVuY3Rpb24gKCByb290ICkge1xuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcblx0Y29uc3QgcHJldlZhbHVlcyA9IHt9O1xuXHRjb25zdCBwcmV2Tm9kZVZhbHVlcyA9IHt9O1xuXG5cdGZvciAoIGNvbnN0IFsgZmllbGROYW1lLCB2YWx1ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCB0aGlzLnZhbHVlPy5jdXJyZW50IHx8IHt9ICkgKSB7XG5cdFx0cHJldlZhbHVlc1sgZmllbGROYW1lIF0gPSBjbG9uZU9ic2VydmVkVmFsdWUoIHZhbHVlICk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdGNvbnN0IGZpZWxkTmFtZSA9IGlucHV0LmdldE5hbWUoKTtcblxuXHRcdHByZXZWYWx1ZXNbIGlucHV0LmdldE5hbWUoKSBdID0gY2xvbmVPYnNlcnZlZFZhbHVlKCBpbnB1dC5nZXRWYWx1ZSgpICk7XG5cblx0XHRpZiAoIGlzTmF0aXZlRGF0ZUxpa2VJbnB1dCggaW5wdXQgKSApIHtcblx0XHRcdHByZXZOb2RlVmFsdWVzWyBmaWVsZE5hbWUgXSA9IGlucHV0Lm5vZGVzPy5bIDAgXT8udmFsdWUgPz8gJyc7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5kYXRhSW5wdXRzICA9IHt9O1xuXHRPYnNlcnZhYmxlLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMsIHJvb3QgKTtcblx0c3RhbXBPYnNlcnZlZElucHV0cyggdGhpcyApO1xuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0Y29uc3QgZmllbGROYW1lID0gaW5wdXQuZ2V0TmFtZSgpO1xuXG5cdFx0aWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBwcmV2VmFsdWVzLCBmaWVsZE5hbWUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICggaXNOYXRpdmVEYXRlTGlrZUlucHV0KCBpbnB1dCApICkge1xuXHRcdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdFx0aWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIHByZXZOb2RlVmFsdWVzLCBmaWVsZE5hbWUgKSAmJiBub2RlICkge1xuXHRcdFx0XHRub2RlLnZhbHVlID0gcHJldk5vZGVWYWx1ZXNbIGZpZWxkTmFtZSBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpbnB1dC5yZVF1ZXJ5VmFsdWUoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlucHV0LnNpbGVuY2VTZXQoIGNsb25lT2JzZXJ2ZWRWYWx1ZSggcHJldlZhbHVlc1sgZmllbGROYW1lIF0gKSApO1xuXHR9XG5cblx0dGhpcy5wYXJlbnQubGFzdE9ic2VydmVkLmN1cnJlbnQgPSB0aGlzO1xufTtcblxuT2JzZXJ2YWJsZVJvdy5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICggcm9vdCApIHtcblx0T2JzZXJ2YWJsZS5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzLCByb290ICk7XG5cdHN0YW1wT2JzZXJ2ZWRJbnB1dHMoIHRoaXMgKTtcblxuXHR0aGlzLnBhcmVudC5sYXN0T2JzZXJ2ZWQuY3VycmVudCA9IHRoaXM7XG59O1xuXG5PYnNlcnZhYmxlUm93LnByb3RvdHlwZS5yZW1vdmVNYW51YWxseSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLl9pc1JlbW92aW5nICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuX2lzUmVtb3ZpbmcgPSB0cnVlO1xuXG5cdGNvbnN0IG90aGVyUm93cyA9IHRoaXMucGFyZW50LnZhbHVlLmN1cnJlbnQuZmlsdGVyKCByb3cgPT4gcm93ICE9PSB0aGlzICYmICFyb3cuX2lzUmVtb3ZpbmcgKTtcblxuXHRjb25zdCBvdGhlclZhbHVlcyA9IG90aGVyUm93cy5tYXAoIHJvdyA9PiB7XG5cdFx0Ly8gVHJ5IHRvIGdldCB2YWx1ZXMgZnJvbSBkYXRhSW5wdXRzIGlmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHlcblx0XHRjb25zdCBkZWVwQ29weVZhbHVlcyA9IHt9O1xuXG5cdFx0Ly8gRmlyc3QsIHRyeSBmcm9tIHZhbHVlLmN1cnJlbnRcblx0XHRmb3IgKCBjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIHJvdy52YWx1ZS5jdXJyZW50IHx8IHt9ICkgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdGRlZXBDb3B5VmFsdWVzW2tleV0gPSBbLi4udmFsdWVdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVlcENvcHlWYWx1ZXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIHZhbHVlLmN1cnJlbnQgaXMgZW1wdHksIHRyeSB0byBnZXQgZnJvbSBkYXRhSW5wdXRzXG5cdFx0aWYgKCAwID09PSBPYmplY3Qua2V5cyggZGVlcENvcHlWYWx1ZXMgKS5sZW5ndGggJiYgcm93LmRhdGFJbnB1dHMgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBba2V5LCBpbnB1dF0gb2YgT2JqZWN0LmVudHJpZXMoIHJvdy5kYXRhSW5wdXRzICkgKSB7XG5cdFx0XHRcdGlmICggaW5wdXQgJiYgaW5wdXQuZ2V0VmFsdWUgKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBpbnB1dFZhbHVlICkgKSB7XG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gWy4uLmlucHV0VmFsdWVdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZWVwQ29weVZhbHVlc1trZXldID0gaW5wdXRWYWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bm9kZTogcm93LnJvb3ROb2RlLFxuXHRcdFx0dmFsdWVzOiBkZWVwQ29weVZhbHVlc1xuXHRcdH07XG5cdH0gKTtcblxuXHRvdGhlclJvd3MuZm9yRWFjaCggKCByb3csIGluZGV4ICkgPT4ge1xuXHRcdGlmICggb3RoZXJWYWx1ZXNbaW5kZXhdICkge1xuXHRcdFx0Y29uc3QgdmFsdWVzVG9SZXN0b3JlID0gb3RoZXJWYWx1ZXNbaW5kZXhdLnZhbHVlcztcblxuXHRcdFx0Zm9yICggY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZXNUb1Jlc3RvcmUgKSApIHtcblx0XHRcdFx0cm93LnZhbHVlLmN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlucHV0cyA9IHJvdy5nZXRJbnB1dHMoKTtcblxuXHRcdFx0XHRpbnB1dHMuZm9yRWFjaCggaW5wdXQgPT4ge1xuXHRcdFx0XHRcdGlmICggaW5wdXQudXBkYXRlUHJldmlld3MgJiYgdHlwZW9mIGlucHV0LnVwZGF0ZVByZXZpZXdzID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdFx0aW5wdXQudXBkYXRlUHJldmlld3MoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQvLyBSZWluaXRpYWxpemUgcm93IGZvcm11bGEgYWZ0ZXIgcmVpbmRleGluZ1xuXHRcdFx0XHRyb3cuaW5pdGVkQ2FsYyA9IGZhbHNlOyAvLyBSZXNldCB0aGUgZmxhZyB0byBhbGxvdyByZS1pbml0aWFsaXphdGlvblxuXHRcdFx0XHRyb3cuaW5pdENhbGMoKTsgLy8gUmUtaW5pdGlhbGl6ZSB0aGUgZm9ybXVsYSB3aXRoIG5ldyBmaWVsZCBuYW1lc1xuXHRcdFx0fSwgNTAgKTtcblx0XHR9XG5cdH0gKTtcblxuXHR0aGlzLnJlbW92ZSgpO1xuXHR0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcblx0dGhpcy5yb290Tm9kZS5yZW1vdmUoKTtcbn07XG5cbk9ic2VydmFibGVSb3cucHJvdG90eXBlLmluaXRDYWxjID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuaW5pdGVkQ2FsYyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmluaXRlZENhbGMgICAgID0gdHJ1ZTtcblx0Y29uc3QgWyBub2RlIF0gICAgICA9IHRoaXMucGFyZW50Lm5vZGVzO1xuXHRjb25zdCBmb3JtdWxhU3RyaW5nID0gbm9kZS5kYXRhc2V0Py5mb3JtdWxhO1xuXG5cdGlmICggIWZvcm11bGFTdHJpbmcgfHwgJ2RlZmF1bHQnID09PSB0aGlzLnBhcmVudC5jYWxjVHlwZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzICk7XG5cblx0Zm9ybXVsYS5vYnNlcnZlKCBmb3JtdWxhU3RyaW5nICk7XG5cdGZvcm11bGEuc2V0UmVzdWx0ICAgICAgID0gKCkgPT4ge1xuXHRcdHRoaXMuY2FsYyA9IGZvcm11bGEuY2FsY3VsYXRlKCk7XG5cdFx0dGhpcy5wYXJlbnQudmFsdWUubm90aWZ5KCk7XG5cdH07XG5cdGZvcm11bGEucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuY2FsY1ZhbHVlO1xuXHR9O1xuXHRmb3JtdWxhLmVtcHR5VmFsdWUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gMDtcblx0fTtcblxuXHR0aGlzLmNhbGMgPSBmb3JtdWxhLmNhbGN1bGF0ZSgpO1xuXHR0aGlzLnBhcmVudC5zaWxlbmNlTm90aWZ5KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlUm93O1xuIiwiLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNSZXBlYXRlciggbm9kZSApIHtcblx0cmV0dXJuIDEgPT09ICtub2RlLmRhdGFzZXQucmVwZWF0ZXI7XG59XG5cbmV4cG9ydCB7IGlzUmVwZWF0ZXIgfTsiLCJpbXBvcnQgeyBpc1JlcGVhdGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IE9ic2VydmFibGVSb3cgZnJvbSAnLi9PYnNlcnZhYmxlUm93JztcblxuY29uc3Qge1xuXHQgICAgICBJbnB1dERhdGEsXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBSZXBlYXRlckRhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5idXR0b25Ob2RlICAgPSBmYWxzZTtcblx0dGhpcy50ZW1wbGF0ZSAgICAgPSBudWxsO1xuXHR0aGlzLmNvbnRhaW5lciAgICA9IG51bGw7XG5cdHRoaXMubGFzdE9ic2VydmVkID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMubGFzdE9ic2VydmVkLm1ha2UoKTtcblxuXHR0aGlzLmFkZEV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VJbnZhbGlkID0gKCkgPT4ge307XG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcblx0fTtcblxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgW25vZGVdID0gdGhpcy5ub2Rlcztcblx0XHRjb25zdCByZW5kZXJlZFJvd3MgPSBbXG5cdFx0XHQuLi5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcm93Jyxcblx0XHRcdCksXG5cdFx0XTtcblxuXHRcdGNvbnN0IGhhc1d5c2l3eWcgPSByZW5kZXJlZFJvd3Muc29tZShcblx0XHRcdHJvdyA9PiByb3cucXVlcnlTZWxlY3RvcignLnd5c2l3eWctZmllbGQnKSxcblx0XHQpO1xuXG5cdFx0aWYgKGhhc1d5c2l3eWcpIHtcblx0XHRcdGNvbnN0IGN1cnJlbnRSb3dzID0gcmVuZGVyZWRSb3dzLm1hcChyb3cgPT4ge1xuXHRcdFx0XHRyb3cucmVtb3ZlKCk7XG5cdFx0XHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZVJvdyh0aGlzKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBjdXJyZW50Um93cztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XG5cblx0XHRcdGZvciAoY29uc3Qgcm93IG9mIHJlbmRlcmVkUm93cykge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IE9ic2VydmFibGVSb3codGhpcyk7XG5cdFx0XHRcdGN1cnJlbnQucm9vdE5vZGUgPSByb3c7XG5cblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50LnB1c2goY3VycmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGNvbnN0IGN1cnJlbnRFbGVtZW50IG9mIHRoaXMudmFsdWUuY3VycmVudCkge1xuXHRcdFx0XHRjdXJyZW50RWxlbWVudC5vYnNlcnZlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBjdXJyZW50RWxlbWVudCBvZiB0aGlzLnZhbHVlLmN1cnJlbnQpIHtcblx0XHRcdGN1cnJlbnRFbGVtZW50LmluaXRDYWxjKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVtb3ZlQnV0dG9ucyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JlbW92ZScsXG5cdFx0KTtcblxuXHRcdGZvciAoY29uc3QgYnV0dG9uIG9mIHJlbW92ZUJ1dHRvbnMpIHtcblx0XHRcdGNvbnN0IHJvdyA9IHRoaXMuY2xvc2VzdFJvdyhidXR0b24pO1xuXG5cdFx0XHRpZiAoICFyb3cgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3cucmVtb3ZlTWFudWFsbHkoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNNYW51YWxDb3VudCkge1xuXHRcdFx0aWYgKCF0aGlzLmFkZEV2ZW50QXR0YWNoZWQgJiYgIXRoaXMuYnV0dG9uTm9kZS5oYXNMaXN0ZW5lcikge1xuXHRcdFx0XHR0aGlzLmJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFkZE5ldygpKTtcblx0XHRcdFx0dGhpcy5hZGRFdmVudEF0dGFjaGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5idXR0b25Ob2RlLmhhc0xpc3RlbmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucm9vdC5nZXRJbnB1dCh0aGlzLml0ZW1zRmllbGQpO1xuXG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdGBKZXRGb3JtQnVpbGRlciBlcnJvcjogdW5kZWZpbmVkIGlucHV0IGJ5IG5hbWUgWyR7dGhpcy5pdGVtc0ZpZWxkfV1gLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlucHV0LndhdGNoKCgpID0+IHRoaXMucmVjYWxjdWxhdGVJdGVtcyhpbnB1dCkpO1xuXHRcdHRoaXMucmVjYWxjdWxhdGVJdGVtcyhpbnB1dCk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblxuXHRcdHRoaXMubm9kZXMgICAgID0gWyBub2RlIF07XG5cdFx0dGhpcy5uYW1lICAgICAgPSBub2RlLmRhdGFzZXQuZmllbGROYW1lO1xuXHRcdHRoaXMucmF3TmFtZSAgID0gdGhpcy5uYW1lO1xuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ3JlcGVhdGVyJztcblxuXHRcdHRoaXMubWFuYWdlSXRlbXMgPSBub2RlLmRhdGFzZXQ/Lm1hbmFnZUl0ZW1zIHx8ICdtYW51YWxseSc7XG5cdFx0dGhpcy5jYWxjVHlwZSAgICA9IG5vZGUuZGF0YXNldD8uY2FsY1R5cGUgfHwgJ2RlZmF1bHQnO1xuXHRcdHRoaXMuaXRlbXNGaWVsZCAgPSBub2RlLmRhdGFzZXQ/Lml0ZW1zRmllbGQ7XG5cblx0XHR0aGlzLmlzTWFudWFsQ291bnQgPSAoXG5cdFx0XHQhdGhpcy5pdGVtc0ZpZWxkIHx8ICdtYW51YWxseScgPT09IHRoaXMubWFuYWdlSXRlbXNcblx0XHQpO1xuXG5cdFx0Ly8gY2FuIGJlIG51bGxcblx0XHR0aGlzLmJ1dHRvbk5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX25ldycsXG5cdFx0KTtcblx0XHR0aGlzLnRlbXBsYXRlICAgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2luaXRpYWwnLFxuXHRcdCk7XG5cdFx0dGhpcy5jb250YWluZXIgID0gbm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtcycsXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW107XG5cdH07XG5cblx0dGhpcy5wb3B1bGF0ZUlubmVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICggIXRoaXMudmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0cyA9IFtdO1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3Qgcm93cyAgID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiByb3cuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdFx0aWYgKCAhaW5wdXQucmVwb3J0aW5nPy5yZXN0cmljdGlvbnM/Lmxlbmd0aCApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dHMucHVzaCggaW5wdXQgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9O1xuXG5cdHRoaXMub25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCByb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yICggY29uc3Qgcm93IG9mIHJvd3MgKSB7XG5cdFx0XHRyb3cucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICggIXRoaXMudmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtPYnNlcnZhYmxlUm93W119XG5cdFx0ICovXG5cdFx0Y29uc3QgcmVwZWF0ZXJSb3dzID0gdGhpcy52YWx1ZS5jdXJyZW50XG5cblx0XHRyZXBlYXRlclJvd3MuZm9yRWFjaCggcm93ID0+IHtcblx0XHRcdHJvdy5nZXRJbnB1dHMoKS5mb3JFYWNoKCBpbnB1dCA9PiB7XG5cdFx0XHRcdGlucHV0LnNldFZhbHVlKCk7XG5cdFx0XHRcdGlucHV0LmluaXROb3RpZnlWYWx1ZSgpO1xuXHRcdFx0fSApO1xuXHRcdH0gKVxuXHR9XG59XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuYnV0dG9uTm9kZSA9IG51bGw7XG5SZXBlYXRlckRhdGEucHJvdG90eXBlLnRlbXBsYXRlICAgPSBudWxsO1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5jb250YWluZXIgID0gbnVsbDtcblJlcGVhdGVyRGF0YS5wcm90b3R5cGUuaXRlbXNGaWVsZCA9IGZhbHNlO1xuLyoqXG4gKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG4gKi9cblJlcGVhdGVyRGF0YS5wcm90b3R5cGUubGFzdE9ic2VydmVkID0gbnVsbDtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5hZGROZXcgPSBmdW5jdGlvbiAoIGNvdW50ID0gMSApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gW1xuXHRcdC4uLnRoaXMudmFsdWU/LmN1cnJlbnQgPz8gW10sXG5cdFx0Li4uKFxuXHRcdFx0bmV3IEFycmF5KCBjb3VudCApXG5cdFx0KS5maWxsKCBudWxsICkubWFwKFxuXHRcdFx0KCkgPT4gbmV3IE9ic2VydmFibGVSb3coIHRoaXMgKSxcblx0XHQpLFxuXHRdO1xufTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5maW5kSW5kZXggPSBmdW5jdGlvbiAoIG9ic2VydmFibGVSb3cgKSB7XG5cdGlmICggIUFycmF5LmlzQXJyYXkoIHRoaXMudmFsdWUuY3VycmVudCApICkge1xuXHRcdHJldHVybiAtMTtcblx0fVxuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50LmZpbmRJbmRleChcblx0XHRjdXJyZW50ID0+IGN1cnJlbnQgPT09IG9ic2VydmFibGVSb3csXG5cdCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7RWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW58T2JzZXJ2YWJsZVJvd31cbiAqL1xuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5jbG9zZXN0Um93ID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRjb25zdCByb3dOb2RlID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX3JvdycgKTtcblxuXHRpZiAoICFyb3dOb2RlICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd1tdfVxuXHQgKi9cblx0Y29uc3Qgcm93cyA9IHRoaXMudmFsdWUuY3VycmVudDtcblxuXHRmb3IgKCBjb25zdCByb3cgb2Ygcm93cyApIHtcblx0XHRpZiAoIHJvdy5yb290Tm9kZSA9PT0gcm93Tm9kZSApIHtcblx0XHRcdHJldHVybiByb3c7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIG9ic2VydmFibGVSb3cgKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMudmFsdWUuY3VycmVudC5maWx0ZXIoXG5cdFx0Y3VycmVudCA9PiBjdXJyZW50ICE9PSBvYnNlcnZhYmxlUm93LFxuXHQpO1xufTtcblxuUmVwZWF0ZXJEYXRhLnByb3RvdHlwZS5yZWNhbGN1bGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0Y29uc3QgY3VycmVudENvdW50ID0gdGhpcy52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHQvLyBpZiBpdCA8IDAgPT0+IHdlIHNob3VsZCBhZGQge2RpZmZ9IG5ldyByZXBlYXRlciBpdGVtc1xuXHQvLyBpZiBpdCA+IDAgPT0+IHdlIHNob3VsZCByZW1vdmUgbGFzdCB7ZGlmZn0gaXRlbXNcblx0Y29uc3QgZGlmZiA9IGN1cnJlbnRDb3VudCAtIGlucHV0LmNhbGNWYWx1ZTtcblxuXHRpZiAoIDAgPT09IGRpZmYgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCBkaWZmIDwgMCApIHtcblx0XHR0aGlzLmFkZE5ldyggLTEgKiBkaWZmICk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuc2xpY2UoIDAsIC0xICogZGlmZiApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwZWF0ZXJEYXRhO1xuIiwiY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmZ1bmN0aW9uIGJpbmRSZXBlYXRlck5vdGlmeU9uY2UoIG5vZGUgKSB7XG5cdGlmICggbm9kZS5fX2pmYk1hY3Jvc1JlcGVhdGVyQm91bmQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZS5fX2pmYk1hY3Jvc1JlcGVhdGVyQm91bmQgPSB0cnVlO1xuXG5cdGNvbnN0IGZvcm0gICA9IG5vZGUuY2xvc2VzdCggJ2Zvcm0uamV0LWZvcm0tYnVpbGRlcicgKTtcblx0Y29uc3QgZm9ybUlkID0gZm9ybT8uZGF0YXNldD8uZm9ybUlkO1xuXHRjb25zdCBzdG9yZSAgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXI/LlsgZm9ybUlkIF07XG5cblx0Y29uc3QgcmVwZWF0ZXJJbnB1dCA9IHN0b3JlPy5nZXRJbnB1dD8uKCBub2RlLmRhdGFzZXQuZmllbGROYW1lICk7XG5cblx0Y29uc3Qgbm90aWZ5ID0gKCkgPT4ge1xuXHRcdHJlcGVhdGVySW5wdXQ/LnZhbHVlPy5ub3RpZnk/LigpO1xuXHR9O1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0Jywgbm90aWZ5LCB0cnVlICk7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIG5vdGlmeSwgdHJ1ZSApO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnY2xpY2snLFxuXHRcdCggZSApID0+IHtcblx0XHRcdGNvbnN0IHJlbW92ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3Q/LiggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19yb3ctcmVtb3ZlJyApO1xuXHRcdFx0aWYgKCAhcmVtb3ZlQnRuIHx8ICFub2RlLmNvbnRhaW5zKCByZW1vdmVCdG4gKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBub3RpZnkgKTtcblx0XHR9LFxuXHRcdHRydWVcblx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZSggZWwgKSB7XG5cdGlmICggZWwudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgZWwubXVsdGlwbGUgKSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gQXJyYXkuZnJvbSggZWwuc2VsZWN0ZWRPcHRpb25zIHx8IFtdIClcblx0XHRcdC5tYXAoICggb3B0ICkgPT4gU3RyaW5nKCBvcHQudmFsdWUgPz8gJycgKS50cmltKCkgKVxuXHRcdFx0LmZpbHRlciggQm9vbGVhbiApO1xuXG5cdFx0cmV0dXJuIHZhbHVlcy5qb2luKCAnLCAnICk7XG5cdH1cblxuXHRyZXR1cm4gU3RyaW5nKCBlbC52YWx1ZSA/PyAnJyApLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVwZWF0ZXJGaWVsZFZhbHVlKCBlbCwgcm93RWwsIHJvd1JlcGVhdGVyRmllbGQgKSB7XG5cdGNvbnN0IGN1cnJlbnQgPSBnZXRGaWVsZFZhbHVlKCBlbCApO1xuXG5cdHJldHVybiBhcHBseUZpbHRlcnMoXG5cdFx0J2pldC5mYi5tYWNyby5pbnNpZGUucmVwZWF0ZXIuZmllbGQudmFsdWUnLFxuXHRcdGN1cnJlbnQsXG5cdFx0ZWwsXG5cdFx0cm93RWwsXG5cdFx0cm93UmVwZWF0ZXJGaWVsZFxuXHQpO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0Um93VmFsdWVzKCByb3dFbCApIHtcblx0Y29uc3QgdmFsdWVzQnlOYW1lID0gT2JqZWN0LmNyZWF0ZSggbnVsbCApO1xuXG5cdGNvbnN0IHJvd1JlcGVhdGVyRmllbGQgPSByb3dFbC5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnICk7XG5cdGNvbnN0IGZpZWxkcyA9IHJvd0VsLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScgKTtcblxuXHRmaWVsZHMuZm9yRWFjaCggKCBlbCApID0+IHtcblx0XHQvLyBpZ25vcmUgbmVzdGVkIHJlcGVhdGVyLWluLXJlcGVhdGVyXG5cdFx0aWYgKCBlbC5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtcmVwZWF0ZXItZmllbGQnICkgIT09IHJvd1JlcGVhdGVyRmllbGQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBlbC5kaXNhYmxlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBpZ25vcmUgaGlkZGVuICh1c3VhbGx5IHN0b3JlcyBpbnRlcm5hbC9zZXJ2aWNlIHZhbHVlcylcblx0XHRpZiAoIGVsLnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZWwudHlwZSA9PT0gJ2hpZGRlbicgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAoIGVsLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWwudHlwZSA9PT0gJ3JhZGlvJyApICYmICFlbC5jaGVja2VkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5hbWUgPSBlbC5kYXRhc2V0Py5maWVsZE5hbWUgfHwgZWwubmFtZSB8fCAnJztcblx0XHRpZiAoICFuYW1lICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlID0gZ2V0UmVwZWF0ZXJGaWVsZFZhbHVlKCBlbCwgcm93RWwsIHJvd1JlcGVhdGVyRmllbGQgKTtcblx0XHRpZiAoIHZhbHVlID09PSAnJyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlc0J5TmFtZVsgbmFtZSBdICkge1xuXHRcdFx0dmFsdWVzQnlOYW1lWyBuYW1lIF0gKz0gYCwgJHsgdmFsdWUgfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlc0J5TmFtZVsgbmFtZSBdID0gdmFsdWU7XG5cdFx0fVxuXHR9ICk7XG5cblx0cmV0dXJuIHZhbHVlc0J5TmFtZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdFJlcGVhdGVyTGluZXNGcm9tVGVtcGxhdGUoIGZpZWxkTm9kZSwgdGVtcGxhdGVIdG1sICkge1xuXHRjb25zdCBpdGVtcyA9IGZpZWxkTm9kZS5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX2l0ZW1zJyApO1xuXHRpZiAoICFpdGVtcyApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHRwbC5pbm5lckhUTUwgPSBTdHJpbmcoIHRlbXBsYXRlSHRtbCA/PyAnJyApO1xuXG5cdGNvbnN0IHJvd3MgID0gaXRlbXMucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLXJlcGVhdGVyLXJvd10nICk7XG5cdGNvbnN0IGxpbmVzID0gW107XG5cblx0cm93cy5mb3JFYWNoKCAoIHJvd0VsICkgPT4ge1xuXHRcdGNvbnN0IGZyYWdtZW50ID0gdHBsLmNvbnRlbnQuY2xvbmVOb2RlKCB0cnVlICk7XG5cdFx0Y29uc3QgbWFjcm9Ob2RlcyA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItbWFjcm9dJyApO1xuXG5cdFx0Y29uc3QgdmFsdWVzQnlOYW1lID0gY29sbGVjdFJvd1ZhbHVlcyggcm93RWwgKTtcblxuXHRcdG1hY3JvTm9kZXMuZm9yRWFjaCggKCBub2RlICkgPT4ge1xuXHRcdFx0Y29uc3QgbWFjcm9OYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWpmYi1tYWNybycgKSB8fCAnJztcblx0XHRcdGlmICggIW1hY3JvTmFtZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlLmlubmVySFRNTCA9IFN0cmluZyggdmFsdWVzQnlOYW1lWyBtYWNyb05hbWUgXSA/PyAnJyApO1xuXHRcdH0gKTtcblxuXHRcdGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0dG1wLmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xuXHRcdGxpbmVzLnB1c2goIHRtcC5pbm5lckhUTUwgKTtcblx0fSApO1xuXG5cdHJldHVybiBsaW5lcy5qb2luKCAnJyApO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0UmVwZWF0ZXJMaW5lc1BsYWluKCBmaWVsZE5vZGUsIG1hY3JvcyApIHtcblx0Y29uc3QgaXRlbXMgPSBmaWVsZE5vZGUucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pdGVtcycgKTtcblx0aWYgKCAhaXRlbXMgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgbWFjcm9zU2V0ID0gQXJyYXkuaXNBcnJheSggbWFjcm9zICkgJiYgbWFjcm9zLmxlbmd0aFxuXHRcdD8gbmV3IFNldCggbWFjcm9zIClcblx0XHQ6IG51bGw7XG5cblx0Y29uc3Qgcm93cyAgPSBpdGVtcy5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtcmVwZWF0ZXItcm93XScgKTtcblx0Y29uc3QgbGluZXMgPSBbXTtcblxuXHRyb3dzLmZvckVhY2goICggcm93RWwgKSA9PiB7XG5cdFx0Y29uc3Qgcm93UmVwZWF0ZXJGaWVsZCA9IHJvd0VsLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1yZXBlYXRlci1maWVsZCcgKTtcblx0XHRjb25zdCBmaWVsZHMgPSByb3dFbC5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnICk7XG5cblx0XHRmaWVsZHMuZm9yRWFjaCggKCBlbCApID0+IHtcblx0XHRcdGlmICggZWwuY2xvc2VzdCggJy5maWVsZC10eXBlLXJlcGVhdGVyLWZpZWxkJyApICE9PSByb3dSZXBlYXRlckZpZWxkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGVsLmRpc2FibGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGVsLnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZWwudHlwZSA9PT0gJ2hpZGRlbicgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICggKCBlbC50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsLnR5cGUgPT09ICdyYWRpbycgKSAmJiAhZWwuY2hlY2tlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBuYW1lID0gZWwuZGF0YXNldD8uZmllbGROYW1lIHx8IGVsLm5hbWUgfHwgJyc7XG5cdFx0XHRpZiAoICFuYW1lICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWFjcm9zU2V0ICYmICFtYWNyb3NTZXQuaGFzKCBuYW1lICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRSZXBlYXRlckZpZWxkVmFsdWUoIGVsLCByb3dFbCwgcm93UmVwZWF0ZXJGaWVsZCApO1xuXHRcdFx0bGluZXMucHVzaCggYCR7IG5hbWUgfTogJHsgdmFsdWUgfWAgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRyZXR1cm4gbGluZXMuam9pbiggJzxici8+JyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVJlcGVhdGVyTWFjcm9zVmFsdWUoIGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgPSBmYWxzZSApIHtcblx0Y29uc3QgZmllbGROb2RlID0gJGZpZWxkTm9kZT8uWyAwIF07XG5cdGlmICggIWZpZWxkTm9kZSB8fCBmaWVsZE5vZGUuZGF0YXNldD8ucmVwZWF0ZXIgIT09ICcxJyApIHtcblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdGJpbmRSZXBlYXRlck5vdGlmeU9uY2UoIGZpZWxkTm9kZSApO1xuXG5cdGNvbnN0IGhvc3QgPSAkbWFjcm9Ib3N0Py5bIDAgXTtcblx0Y29uc3Qgc291cmNlID0gaG9zdD8uX19qZmJNYWNyb1RlbXBsYXRlO1xuXG5cdGlmICggIWhvc3QgfHwgIXNvdXJjZSApIHtcblx0XHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXNQbGFpbiggZmllbGROb2RlLCBudWxsICk7XG5cdH1cblxuXHRyZXR1cm4gY29sbGVjdFJlcGVhdGVyTGluZXNGcm9tVGVtcGxhdGUoIGZpZWxkTm9kZSwgc291cmNlICk7XG59IiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmxldCB7XG5cdCAgICBBZHZhbmNlZFJlc3RyaWN0aW9uLFxuXHQgICAgUmVzdHJpY3Rpb24sXG4gICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbkFkdmFuY2VkUmVzdHJpY3Rpb24gPSBBZHZhbmNlZFJlc3RyaWN0aW9uIHx8IFJlc3RyaWN0aW9uO1xuXG5mdW5jdGlvbiBSZXBlYXRlclJlc3RyaWN0aW9uKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JlcGVhdGVyKCBub2RlICk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xufVxuXG5SZXBlYXRlclJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGVyUmVzdHJpY3Rpb247IiwiaW1wb3J0IHsgaXNSZXBlYXRlciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBCYXNlU2lnbmFsLFxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVwZWF0ZXJEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBTaWduYWxSZXBlYXRlcigpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSZXBlYXRlciggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgPSBbXSApIHtcblx0XHRjb25zdCB7IGN1cnJlbnQgfSAgICAgPSB0aGlzLmlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IGhhc0RlbGV0ZWRJdGVtcyA9IChcblx0XHRcdHByZXZWYWx1ZT8ubGVuZ3RoICYmIHByZXZWYWx1ZS5sZW5ndGggPiBjdXJyZW50Lmxlbmd0aFxuXHRcdCk7XG5cblx0XHRpZiAoIGhhc0RlbGV0ZWRJdGVtcyApIHtcblx0XHRcdHRoaXMucmVtb3ZlUHJldkl0ZW1zKCBwcmV2VmFsdWUgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBpbmRleCBvZiBPYmplY3Qua2V5cyggY3VycmVudCApICkge1xuXHRcdFx0aWYgKCAhY3VycmVudC5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJ1bkl0ZW0oICtpbmRleCwgaGFzRGVsZXRlZEl0ZW1zICk7XG5cdFx0fVxuXG5cdFx0bGV0IGNhbGNWYWx1ZSA9IDA7XG5cblx0XHRmb3IgKCBjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyggY3VycmVudCApICkge1xuXHRcdFx0cm93LmluaXRDYWxjKCk7XG5cdFx0XHRjYWxjVmFsdWUgKz0gcm93LmNhbGM7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dC5jYWxjVmFsdWUgPSBjYWxjVmFsdWU7XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0gY3VycmVudEluZGV4ICAgIHtOdW1iZXJ9XG5cdCAqIEBwYXJhbSBzaG91bGRSZU9ic2VydmVcblx0ICovXG5cdHRoaXMucnVuSXRlbSA9IGZ1bmN0aW9uICggY3VycmVudEluZGV4LCBzaG91bGRSZU9ic2VydmUgPSBmYWxzZSApIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVJvd31cblx0XHQgKi9cblx0XHRjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50WyBjdXJyZW50SW5kZXggXTtcblxuXHRcdGlmICggb2JzZXJ2YWJsZS5pc09ic2VydmVkICkge1xuXHRcdFx0aWYgKCAhc2hvdWxkUmVPYnNlcnZlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG9ic2VydmFibGUucm9vdE5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuaW5wdXQudGVtcGxhdGUuaW5uZXJIVE1MLnRyaW0oKTtcblxuXHRcdHRlbXBsYXRlLmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTC5yZXBsYWNlKFxuXHRcdFx0L19faV9fL2csXG5cdFx0XHRjdXJyZW50SW5kZXgsXG5cdFx0KTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlc2V0IGlucHV0IHZhbHVlcyBmb3IgYSBuZXcgcm93XG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMy40Ljdcblx0XHQgKi9cblx0XHRjb25zdCBuZXdSb3cgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdGNvbnN0IGlucHV0cyA9IG5ld1Jvdy5xdWVyeVNlbGVjdG9yQWxsKCBcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBvdXRwdXRcIiApO1xuXG5cdFx0aW5wdXRzLmZvckVhY2goICggaW5wdXQgKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKCBpbnB1dC50eXBlICkge1xuXHRcdFx0XHRjYXNlIFwiY2hlY2tib3hcIjpcblx0XHRcdFx0Y2FzZSBcInJhZGlvXCI6XG5cdFx0XHRcdFx0Ly8gUHJlc2VydmUgZGVmYXVsdCBjaGVja2VkIHN0YXRlIGZvciBjaGVja2JveC9yYWRpbyBmaWVsZHNcblx0XHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgaW5wdXQgaGFzIGRlZmF1bHRDaGVja2VkIGF0dHJpYnV0ZSAoZnJvbSBIVE1MKVxuXHRcdFx0XHRcdGlucHV0LmNoZWNrZWQgPSBpbnB1dC5kZWZhdWx0Q2hlY2tlZCB8fCBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInNlbGVjdC1vbmVcIjpcblx0XHRcdFx0Y2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbnMgPSBpbnB1dC5xdWVyeVNlbGVjdG9yQWxsKCAnb3B0aW9uJyApO1xuXHRcdFx0XHRcdG9wdGlvbnMuZm9yRWFjaCggb3B0aW9uID0+IHtcblx0XHRcdFx0XHRcdG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi5kZWZhdWx0U2VsZWN0ZWQgfHwgZmFsc2U7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZmlsZVwiOlxuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gXCJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJhbmdlXCI6XG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBpbnB1dC5kZWZhdWx0VmFsdWUgfHwgXCJcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IGlucHV0LmRlZmF1bHRWYWx1ZSB8fCBcIlwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZC5kYXRhc2V0LmluZGV4ID0gJycgKyBjdXJyZW50SW5kZXg7XG5cblx0XHR0aGlzLmlucHV0LmNvbnRhaW5lci5hcHBlbmQoIG5ld1JvdyApO1xuXG5cdFx0Y29uc3QgYXBwZW5kZWQgPSB0aGlzLmlucHV0LmNvbnRhaW5lci5sYXN0Q2hpbGQ7XG5cblx0XHRpZiAoIHRoaXMuaW5wdXQuaXNNYW51YWxDb3VudCApIHtcblx0XHRcdGFwcGVuZGVkLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyxcblx0XHRcdCkuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0KCkgPT4gb2JzZXJ2YWJsZS5yZW1vdmVNYW51YWxseSgpLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoIG9ic2VydmFibGUuaXNPYnNlcnZlZCApIHtcblx0XHRcdG9ic2VydmFibGUucmVPYnNlcnZlKCBhcHBlbmRlZCApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdG9ic2VydmFibGUub2JzZXJ2ZSggYXBwZW5kZWQgKTtcblx0fTtcblxuXHR0aGlzLnJlbW92ZVByZXZJdGVtcyA9IGZ1bmN0aW9uICggcHJldlJvd3MgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge09ic2VydmFibGVSb3dbXX1cblx0XHQgKi9cblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0Zm9yICggY29uc3QgcHJldlJvdyBvZiBwcmV2Um93cyApIHtcblx0XHRcdGlmICggIWN1cnJlbnQuaW5jbHVkZXMoIHByZXZSb3cgKSApIHtcblx0XHRcdFx0cHJldlJvdy5yZW1vdmVNYW51YWxseSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuU2lnbmFsUmVwZWF0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVwZWF0ZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFJlcGVhdGVyRGF0YSBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTaWduYWxSZXBlYXRlciBmcm9tICcuL3NpZ25hbCc7XG5pbXBvcnQgUmVwZWF0ZXJSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZXBlYXRlclJlc3RyaWN0aW9uJztcbmltcG9ydCB7IHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlIH0gZnJvbSAnLi9yZXBlYXRlci1tYWNyb3MnO1xuaW1wb3J0ICcuL2luZGV4LnBjc3MnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcblx0ICAgICAgYWRkQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9yZXBlYXRlci1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgUmVwZWF0ZXJEYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbFJlcGVhdGVyLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7XG5cbmNvbnN0IGFkZFJlc3RyaWN0aW9uID0gKCByZXN0cmljdGlvbnMgKSA9PiB7XG5cdHJlc3RyaWN0aW9ucy5wdXNoKFxuXHRcdFJlcGVhdGVyUmVzdHJpY3Rpb24sXG5cdCk7XG5cblx0cmV0dXJuIHJlc3RyaWN0aW9ucztcbn07XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0YWRkUmVzdHJpY3Rpb24sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHRhZGRSZXN0cmljdGlvbixcbik7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5tdWx0aXN0ZXAucGFnZS5vYnNlcnZlZC5pbnB1dCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3JlcGVhdGVyLWZpZWxkJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YXxSZXBlYXRlckRhdGF9XG5cdCAqIEBwYXJhbSBwYWdlU3RhdGUge1BhZ2VTdGF0ZX1cblx0ICovXG5cdGZ1bmN0aW9uICggaW5wdXQsIHBhZ2VTdGF0ZSApIHtcblx0XHRpZiAoICdyZXBlYXRlcicgIT09IGlucHV0LmlucHV0VHlwZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBnZXRDdXJyZW50SW5wdXRzID0gKCkgPT4gKFxuXHRcdFx0KCBpbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdICkuZmxhdE1hcChcblx0XHRcdFx0b2JzZXJ2YWJsZVJvdyA9PiBvYnNlcnZhYmxlUm93LmdldElucHV0cygpLFxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0gY3VycmVudElucHV0IHtJbnB1dERhdGF9XG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gb2JzZXJ2ZUlubmVySW5wdXQoIGN1cnJlbnRJbnB1dCApIHtcblx0XHRcdHBhZ2VTdGF0ZS5yZWdpc3RlcklucHV0KFxuXHRcdFx0XHRjdXJyZW50SW5wdXQsXG5cdFx0XHRcdHsgaW5jbHVkZUluVmFsaWRhdGlvbjogZmFsc2UgfSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gc3luY0N1cnJlbnRJbnB1dHMoKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50SW5wdXRzID0gZ2V0Q3VycmVudElucHV0cygpO1xuXHRcdFx0Y29uc3QgY3VycmVudFNldCA9IG5ldyBTZXQoIGN1cnJlbnRJbnB1dHMgKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRSb3dzID0gbmV3IFNldCggaW5wdXQudmFsdWUuY3VycmVudCB8fCBbXSApO1xuXHRcdFx0Y29uc3QgcmVwZWF0ZXJUcmFja2VkSW5wdXRzID0gcGFnZVN0YXRlLmdldFRyYWNrZWRJbnB1dHMoKS5maWx0ZXIoXG5cdFx0XHRcdGN1cnJlbnRJbnB1dCA9PiBjdXJyZW50SW5wdXQucm9vdD8ucGFyZW50ID09PSBpbnB1dCxcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBzdGFsZVRyYWNrZWRJbnB1dHMgPSByZXBlYXRlclRyYWNrZWRJbnB1dHMuZmlsdGVyKFxuXHRcdFx0XHRjdXJyZW50SW5wdXQgPT4gKFxuXHRcdFx0XHRcdCFjdXJyZW50Um93cy5oYXMoIGN1cnJlbnRJbnB1dC5yb290ICkgfHxcblx0XHRcdFx0XHRjdXJyZW50SW5wdXQuX29ic2VydmVWZXJzaW9uICE9PVxuXHRcdFx0XHRcdFx0Y3VycmVudElucHV0LnJvb3Q/Ll9vYnNlcnZlVmVyc2lvblxuXHRcdFx0XHQpICYmICFjdXJyZW50U2V0LmhhcyggY3VycmVudElucHV0ICksXG5cdFx0XHQpO1xuXG5cdFx0XHRzdGFsZVRyYWNrZWRJbnB1dHMuZm9yRWFjaChcblx0XHRcdFx0Y3VycmVudElucHV0ID0+IHBhZ2VTdGF0ZS51bnJlZ2lzdGVySW5wdXQoIGN1cnJlbnRJbnB1dCApLFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRJbnB1dHMuZm9yRWFjaCggb2JzZXJ2ZUlubmVySW5wdXQgKTtcblx0XHRcdHBhZ2VTdGF0ZS51cGRhdGVTdGF0ZSgpO1xuXHRcdH1cblxuXHRcdHN5bmNDdXJyZW50SW5wdXRzKCk7XG5cdFx0aW5wdXQud2F0Y2goIHN5bmNDdXJyZW50SW5wdXRzICk7XG5cdFx0aW5wdXQubGFzdE9ic2VydmVkLndhdGNoKCBzeW5jQ3VycmVudElucHV0cyApO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvcmVwZWF0ZXItZmllbGQnLFxuXHQoIGN1cnJlbnQsICRmaWVsZE5vZGUsICRtYWNyb0hvc3QgKSA9PlxuXHRcdHJlc29sdmVSZXBlYXRlck1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ICksXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9