/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/conditional.block/CalculatedFieldChecker.js"
/*!**************************************************************!*\
  !*** ./frontend/conditional.block/CalculatedFieldChecker.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionChecker */ "./frontend/conditional.block/ConditionChecker.js");

function CalculatedFieldChecker() {
  _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (input) {
    return 'calculated' === input.inputType;
  };

  /**
   * @param condition {ConditionFieldItem}
   * @param input     {InputData}
   */
  this.check = function (condition, input) {
    const current = input.calcValue;
    const conditionValue = condition.value;
    return this.checkRaw(condition.operator, current, conditionValue);
  };
}
CalculatedFieldChecker.prototype = Object.create(_ConditionChecker__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedFieldChecker);

/***/ },

/***/ "./frontend/conditional.block/ConditionChecker.js"
/*!********************************************************!*\
  !*** ./frontend/conditional.block/ConditionChecker.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  isEmpty
} = JetFormBuilderFunctions;
function ConditionChecker() {
  this.operators = this.getOperators();
}
ConditionChecker.prototype = {
  /**
   * @return {boolean}
   */
  isSupported: () => true,
  operators: {},
  getOperators() {
    return {
      equal: (current, conditionValue) => current === conditionValue[0],
      empty: current => isEmpty(current),
      greater: (current, conditionValue) => +current > +conditionValue[0],
      greater_or_eq: (current, conditionValue) => +current >= +conditionValue[0],
      less: (current, conditionValue) => +current < +conditionValue[0],
      less_or_eq: (current, conditionValue) => +current <= +conditionValue[0],
      between: (current, conditionValue) => {
        if (!conditionValue?.length || null === current) {
          return false;
        }
        return conditionValue[0] <= +current && +current <= conditionValue[1];
      },
      one_of: (current, conditionValue) => {
        if (!conditionValue?.length) {
          return false;
        }
        return 0 <= conditionValue.indexOf(current);
      },
      contain: (current, conditionValue) => {
        if (!current) {
          return false;
        }
        return 0 <= current.indexOf(conditionValue[0]);
      }
    };
  },
  /**
   * @param condition {ConditionFieldItem}
   * @param input     {InputData}
   */
  check(condition, input) {
    const current = input.value.current;
    const conditionValue = condition.value;
    return this.checkRaw(condition.operator, current, conditionValue);
  },
  checkRaw(operator, current, conditionValue) {
    if (this.operators.hasOwnProperty(operator)) {
      return this.operators[operator](current, conditionValue);
    }
    if (0 !== operator.indexOf('not_')) {
      return false;
    }
    const operatorName = operator.slice(4);
    if (!this.operators.hasOwnProperty(operatorName)) {
      return false;
    }
    return !this.operators[operatorName](current, conditionValue);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionChecker);

/***/ },

/***/ "./frontend/conditional.block/ConditionFieldItem.js"
/*!**********************************************************!*\
  !*** ./frontend/conditional.block/ConditionFieldItem.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionItem */ "./frontend/conditional.block/ConditionItem.js");

const {
  CalculatedFormula
} = JetFormBuilderAbstract;
function ConditionFieldItem() {
  _ConditionItem__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (options) {
    return !!options?.field?.length;
  };
  this.observe = function () {
    var _this$list$_fields;
    const input = this.getInput();
    this.list._fields = (_this$list$_fields = this.list._fields) !== null && _this$list$_fields !== void 0 ? _this$list$_fields : [];
    if (!input || this.list._fields.includes(this.field)) {
      return;
    }
    this.list._fields.push(this.field);
    input.watch(() => this.list.onChangeRelated());
  };
  /**
   * @return {InputData|boolean}
   */
  this.getInput = function () {
    return this.list.root.getInput(this.field);
  };
  this.isPassed = function () {
    const input = this.getInput();
    if (!input) {
      return false;
    }
    return input.checker.check(this, input);
  };
  this.setOptions = function (options) {
    this.field = options.field;
    this.operator = options.operator;
    this.render_state = options.render_state;
    this.use_preset = options.use_preset;
    let value = options?.value;
    if (!Array.isArray(value)) {
      value = value.split(',').map(item => item.trim());
    }
    if (this.use_preset) {
      this.value = value;
      return;
    }
    this.value = {};
    for (const [index, formula] of Object.entries(value)) {
      const current = new CalculatedFormula(this.list.root);
      current.observe(formula);
      current.setResult = () => {
        this.value[index] = '' + current.calculate();
        this.list.onChangeRelated();
      };
      current.setResult();
    }
    this.value = Object.values(this.value);
  };
}
ConditionFieldItem.prototype = Object.create(_ConditionItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
ConditionFieldItem.prototype.field = null;
/**
 * @type {Array}
 */
ConditionFieldItem.prototype.value = null;
/**
 * @type {'equal'|'greater'|'less'|'between'|'one_of'|'contain'}
 */
ConditionFieldItem.prototype.operator = null;
/**
 * @type {boolean}
 */
ConditionFieldItem.prototype.use_preset = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionFieldItem);

/***/ },

/***/ "./frontend/conditional.block/ConditionItem.js"
/*!*****************************************************!*\
  !*** ./frontend/conditional.block/ConditionItem.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @property {ConditionsList|ConditionsBlockList} list Related list
 */
function ConditionItem() {}

// eslint-disable-next-line no-unused-vars
ConditionItem.prototype.isSupported = function (options) {
  return false;
};
ConditionItem.prototype.observe = function () {};
// eslint-disable-next-line no-unused-vars
ConditionItem.prototype.setOptions = function (options) {};
ConditionItem.prototype.isPassed = function () {
  throw new Error('You must provide ConditionItem::isPassed function');
};
ConditionItem.prototype.setList = function (list) {
  this.list = list;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionItem);

/***/ },

/***/ "./frontend/conditional.block/ConditionRenderStateItem.js"
/*!****************************************************************!*\
  !*** ./frontend/conditional.block/ConditionRenderStateItem.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionItem */ "./frontend/conditional.block/ConditionItem.js");

function ConditionRenderStateItem() {
  _ConditionItem__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (options) {
    return 'render_state' === options?.operator;
  };

  /**
   * @return {InputData}
   */
  this.getInput = function () {
    return this.list.root.getInput('_jfb_current_render_states');
  };
  this.observe = function () {
    this.getInput().watch(() => this.list.onChangeRelated());
  };
  this.setOptions = function (options) {
    var _options$render_state;
    this.render_state = (_options$render_state = options.render_state) !== null && _options$render_state !== void 0 ? _options$render_state : [];
  };
  this.isPassed = function () {
    const {
      value
    } = this.getInput();
    if (!value.current?.length) {
      return false;
    }
    return this.render_state.some(current => {
      return value.current.includes(current);
    });
  };
}
ConditionRenderStateItem.prototype = Object.create(_ConditionItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
ConditionRenderStateItem.prototype.render_state = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionRenderStateItem);

/***/ },

/***/ "./frontend/conditional.block/ConditionalBlock.js"
/*!********************************************************!*\
  !*** ./frontend/conditional.block/ConditionalBlock.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionsBlockList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionsBlockList */ "./frontend/conditional.block/ConditionsBlockList.js");

const {
  doAction
} = JetPlugins.hooks;
const {
  ReactiveVar
} = JetFormBuilderAbstract;
const {
  validateInputsAll
} = JetFormBuilderFunctions;
const __reInited = new WeakSet();
function ConditionalBlock(node, observable) {
  this.node = node;
  node.jfbConditional = this;
  /**
   * @type {Observable}
   */
  this.root = observable;
  this.isObserved = false;

  /**
   * @type {ConditionsBlockList}
   */
  this.list = null;

  /**
   * @type {string | Object}
   */
  this.function = null;
  this.settings = null;

  /**
   * @type {PageState}
   */
  this.page = null;

  /**
   * @type {MultiStepState}
   */
  this.multistep = null;

  /**
   * @type {Node}
   */
  this.comment = null;

  /**
   * @type {InputData[]}
   */
  this.inputs = [];
  this.isRight = new ReactiveVar(null);
  this.isRight.make();
  this.setConditions();
  this.setInputs();
  this.setFunction();
  if (!window?.JetFormBuilderSettings?.devmode) {
    delete this.node.dataset.jfbConditional;
    delete this.node.dataset.jfbFunc;
  }
  doAction('jet.fb.conditional.init', this);
}
ConditionalBlock.prototype = {
  setConditions() {
    const {
      jfbConditional
    } = this.node.dataset;
    this.list = new _ConditionsBlockList__WEBPACK_IMPORTED_MODULE_0__["default"](jfbConditional, this.root);
    this.list.block = this;
    this.list.onChangeRelated = () => {
      this.isRight.current = this.list.getResult();
    };
  },
  setInputs() {
    this.inputs = Array.from(this.node.querySelectorAll('[data-jfb-sync]')).map(item => item.jfbSync).filter(item => item);
  },
  insertComment() {
    if (!this.settings?.dom) {
      return;
    }
    this.comment = document.createComment('');

    // insert comment after conditional block
    this.node.parentElement.insertBefore(this.comment, this.node.nextSibling);
  },
  observe() {
    if (this.isObserved) {
      return;
    }
    this.isObserved = true;
    this.insertComment();
    this.isRight.watch(() => this.runFunction());
    this.isRight.watch(() => this.validateInputs());
    this.list.observe();
  },
  runFunction() {
    const result = this.isRight.current;
    switch (this.function) {
      case 'show':
        this.showBlock(result);
        break;
      case 'hide':
        this.showBlock(!result);
        break;
      case 'disable':
        this.disableBlock(result);
        break;
      default:
        doAction('jet.fb.conditional.block.runFunction', this.function, result, this);
        break;
    }
  },
  /**
   * Compatibility with Save Progress
   * @since 3.0.1 https://github.com/Crocoblock/issues-tracker/issues/2480
   *
   * @see https://github.com/Crocoblock/issues-tracker/issues/1553
   */
  validateInputs() {
    setTimeout(() => {
      validateInputsAll(this.inputs, true).then(() => {}).catch(() => {});
    });
  },
  showBlock(result) {
    this.node.classList.remove('jet-form-builder--hidden');
    if (this.settings?.dom) {
      this.showBlockDom(result);
      if (result) {
        requestAnimationFrame(() => this.reinitChildren());
      }
      const event = new CustomEvent('jet-form-builder/conditional-block/block-toggle-hidden-dom', {
        detail: {
          block: this.node,
          result: result
        }
      });
      document.dispatchEvent(event);
      return;
    }
    this.node.style.display = result ? 'block' : 'none';
    if (result) {
      requestAnimationFrame(() => this.reinitChildren());
    }
  },
  clearInputs() {
    this.inputs.forEach(input => {
      input.onClear();
    });
  },
  showBlockDom(result) {
    const inputsList = this.root.dataInputs;
    if (!result) {
      this.clearInputs();
      this.node.remove();
      this.reCalculateFields(inputsList);
      return;
    }
    this.comment.parentElement.insertBefore(this.node, this.comment);
    this.reCalculateFields(inputsList);
  },
  disableBlock(result) {
    this.node.disabled = result;
  },
  setFunction() {
    this.function = this.node.dataset.jfbFunc;
    let parsed;
    try {
      parsed = JSON.parse(this.function);
    } catch (error) {
      return;
    }
    const [[name, settings]] = Object.entries(parsed);
    this.function = name;
    this.settings = settings;
  },
  reinitChildren() {
    const root = this.root;
    const scope = this.node;
    const nodes = scope.querySelectorAll('[data-jfb-conditional][data-jfb-func]');
    nodes.forEach(node => {
      if (node.jfbConditional || __reInited.has(node)) {
        return;
      }
      try {
        const child = new ConditionalBlock(node, root);
        child.observe();
        child.isRight.current = child.list.getResult();
        __reInited.add(node);
      } catch (e) {
        if (console && console.warn) {
          console.warn('reinitChildren: init failed', e, node);
        }
      }
    });
  },
  /**
   * Recalculation of formulas
   * @param {Object} inputsList - List of fields
   */
  reCalculateFields(inputsList) {
    // Get only fields that are in the current block
    const affectedFields = this.getAffectedFields(inputsList);

    // Cache for visibility checks
    const visibilityCache = new Map();
    affectedFields.forEach(key => {
      if (inputsList[key] && inputsList[key].formula) {
        const fieldNode = inputsList[key].nodes?.[0];

        // Use cache for visibility checks
        let shouldRecalculate = false;
        if (fieldNode) {
          const cacheKey = fieldNode;
          if (!visibilityCache.has(cacheKey)) {
            const isVisible = this.isFieldVisible(fieldNode);
            const isInDOM = document.contains(fieldNode);
            visibilityCache.set(cacheKey, isVisible || isInDOM);
          }
          shouldRecalculate = visibilityCache.get(cacheKey);
        }
        if (shouldRecalculate) {
          try {
            inputsList[key].reCalculateFormula();
          } catch (error) {
            console.warn(`Error recalculating formula for field ${key}:`, error);
          }
        }
      }
    });
  },
  /**
   * Checks if field is visible on the page
   * @param {HTMLElement} fieldNode - DOM element of the field
   * @returns {boolean} - true if field is visible
   */
  isFieldVisible(fieldNode) {
    if (!fieldNode) return false;

    // Check if element is in DOM
    if (!document.contains(fieldNode)) return false;

    // Check visibility styles
    const computedStyle = window.getComputedStyle(fieldNode);
    if ('none' === computedStyle.display || 'hidden' === computedStyle.visibility) {
      return false;
    }

    // Check if element is not hidden by parent elements
    let parent = fieldNode.parentElement;
    while (parent && parent !== document.body) {
      const parentStyle = window.getComputedStyle(parent);
      if ('none' === parentStyle.display || 'hidden' === parentStyle.visibility) {
        return false;
      }
      parent = parent.parentElement;
    }
    return true;
  },
  /**
   * Gets list of fields affected by current conditional block
   * @param {Object} inputsList - List of all fields
   * @returns {Array} - Array of affected field keys
   */
  getAffectedFields(inputsList) {
    const affectedFields = [];

    // Get all fields inside current block
    const blockFields = Array.from(this.node.querySelectorAll('[data-jfb-sync]'));
    const blockFieldNames = new Set();

    // Collect field names inside block
    blockFields.forEach(fieldNode => {
      var _ref, _fieldNode$jfbSync$na;
      const fieldName = (_ref = (_fieldNode$jfbSync$na = fieldNode.jfbSync?.name) !== null && _fieldNode$jfbSync$na !== void 0 ? _fieldNode$jfbSync$na : fieldNode.getAttribute('name')) !== null && _ref !== void 0 ? _ref : fieldNode.querySelector('[name]')?.getAttribute('name');
      if (fieldName) {
        blockFieldNames.add(fieldName);
      }
    });
    Object.keys(inputsList).forEach(key => {
      const field = inputsList[key];
      if (!field || !field.formula) return;
      const fieldNode = field.nodes?.[0];
      let shouldRecalculate = false;

      // 1. Field is inside the block
      if (fieldNode && blockFields.includes(fieldNode)) {
        shouldRecalculate = true;
      }

      // 2. Field depends on fields inside block (check formula)
      if (!shouldRecalculate && field.formula) {
        blockFieldNames.forEach(blockFieldName => {
          if (field.formula.includes(`%${blockFieldName}%`)) {
            shouldRecalculate = true;
          }
        });
      }
      if (shouldRecalculate) {
        affectedFields.push(key);
      }
    });
    return affectedFields;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionalBlock);

/***/ },

/***/ "./frontend/conditional.block/ConditionsBlockList.js"
/*!***********************************************************!*\
  !*** ./frontend/conditional.block/ConditionsBlockList.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionsList */ "./frontend/conditional.block/ConditionsList.js");

function ConditionsBlockList(conditions, root) {
  _ConditionsList__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, conditions, root);
}
ConditionsBlockList.prototype = Object.create(_ConditionsList__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/**
 * @type {ConditionalBlock}
 */
ConditionsBlockList.prototype.block = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionsBlockList);

/***/ },

/***/ "./frontend/conditional.block/ConditionsList.js"
/*!******************************************************!*\
  !*** ./frontend/conditional.block/ConditionsList.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/conditional.block/functions.js");
/* harmony import */ var _OrOperatorItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrOperatorItem */ "./frontend/conditional.block/OrOperatorItem.js");


function ConditionsList(conditions, root) {
  this.root = root;
  this.setConditions(conditions);
}
ConditionsList.prototype = {
  /**
   * @type {Observable}
   */
  root: null,
  conditions: [],
  invalid: [],
  groups: [],
  /**
   * You can override this callback.
   * It used in ConditionFieldItem.
   *
   * Runs every time, when conditions is match
   */
  onChangeRelated() {
    if (!this.getResult()) {
      return;
    }
    this.onMatchConditions();
  },
  onMatchConditions() {},
  observe() {
    for (const condition of this.getConditions()) {
      condition.observe();
    }
  },
  setConditions(conditions) {
    if ('string' === typeof conditions) {
      conditions = JSON.parse(conditions);
    }
    this.conditions = conditions.map(item => (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createConditionItem)(item, this)).filter(item => item);
    const groups = {};
    let groupIndex = 0;
    for (const condition of this.getConditions()) {
      var _groups$groupIndex;
      if (condition instanceof _OrOperatorItem__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        groupIndex++;
        continue;
      }
      groups[groupIndex] = (_groups$groupIndex = groups[groupIndex]) !== null && _groups$groupIndex !== void 0 ? _groups$groupIndex : [];
      groups[groupIndex].push(condition);
    }
    this.groups = Object.values(groups);
  },
  getResult() {
    this.invalid = [];
    if (!this.groups.length) {
      return true;
    }
    for (const group of this.groups) {
      if (this.isValidGroup(group)) {
        return true;
      }
    }
    return false;
  },
  isValidGroup(conditionsGroup) {
    for (const condition of conditionsGroup) {
      if (condition.isPassed()) {
        continue;
      }
      this.invalid.push(condition);
      return false;
    }
    return true;
  },
  /**
   * @return {Array<ConditionFieldItem | ConditionPageStateItem>}
   */
  getConditions() {
    return this.conditions;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionsList);

/***/ },

/***/ "./frontend/conditional.block/DateTimeConditionChecker.js"
/*!****************************************************************!*\
  !*** ./frontend/conditional.block/DateTimeConditionChecker.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionChecker */ "./frontend/conditional.block/ConditionChecker.js");

const {
  getTimestamp
} = JetFormBuilderFunctions;
const {
  Min_In_Sec,
  Milli_In_Sec
} = JetFormBuilderConst;
const offset = new Date().getTimezoneOffset();
function DateTimeConditionChecker() {
  _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (input) {
    const [node] = input.nodes;
    return ['date', 'time', 'datetime-local'].includes(node.type);
  };

  /**
   * @param condition {ConditionFieldItem}
   * @param input     {InputData}
   */
  this.check = function (condition, input) {
    const {
      time: current
    } = getTimestamp(input.value.current);
    const conditionValue = condition.value.map(value => {
      const {
        time,
        type
      } = getTimestamp(value);
      if ('number' === type && condition.use_preset) {
        // eslint-disable-next-line camelcase
        return time * Milli_In_Sec + offset * Min_In_Sec;
      }
      return time;
    });
    return this.checkRaw(condition.operator, current, conditionValue);
  };
}
DateTimeConditionChecker.prototype = Object.create(_ConditionChecker__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTimeConditionChecker);

/***/ },

/***/ "./frontend/conditional.block/MultipleConditionChecker.js"
/*!****************************************************************!*\
  !*** ./frontend/conditional.block/MultipleConditionChecker.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionChecker */ "./frontend/conditional.block/ConditionChecker.js");

function MultipleConditionChecker() {
  _ConditionChecker__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.operators.one_of = (current, conditionValues) => {
    if (!conditionValues?.length || !current?.length) {
      return false;
    }
    return current.some(val => -1 !== conditionValues.indexOf(val));
  };
  this.operators.contain = (current, conditionValues) => {
    if (!current?.length) {
      return false;
    }
    return current.some(val => val.indexOf(conditionValues[0]) !== -1);
  };
  this.isSupported = function (input) {
    return input.isArray();
  };
}
MultipleConditionChecker.prototype = Object.create(_ConditionChecker__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleConditionChecker);

/***/ },

/***/ "./frontend/conditional.block/OrOperatorItem.js"
/*!******************************************************!*\
  !*** ./frontend/conditional.block/OrOperatorItem.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionItem */ "./frontend/conditional.block/ConditionItem.js");

function OrOperatorItem() {
  _ConditionItem__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (options) {
    var _options$or_operator;
    return (_options$or_operator = options.or_operator) !== null && _options$or_operator !== void 0 ? _options$or_operator : false;
  };
}
OrOperatorItem.prototype = Object.create(_ConditionItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrOperatorItem);

/***/ },

/***/ "./frontend/conditional.block/functions.js"
/*!*************************************************!*\
  !*** ./frontend/conditional.block/functions.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChecker: () => (/* binding */ createChecker),
/* harmony export */   createConditionItem: () => (/* binding */ createConditionItem),
/* harmony export */   createConditionalBlock: () => (/* binding */ createConditionalBlock)
/* harmony export */ });
/* harmony import */ var _ConditionFieldItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionFieldItem */ "./frontend/conditional.block/ConditionFieldItem.js");
/* harmony import */ var _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionalBlock */ "./frontend/conditional.block/ConditionalBlock.js");
/* harmony import */ var _ConditionChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionChecker */ "./frontend/conditional.block/ConditionChecker.js");
/* harmony import */ var _MultipleConditionChecker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultipleConditionChecker */ "./frontend/conditional.block/MultipleConditionChecker.js");
/* harmony import */ var _OrOperatorItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrOperatorItem */ "./frontend/conditional.block/OrOperatorItem.js");
/* harmony import */ var _DateTimeConditionChecker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateTimeConditionChecker */ "./frontend/conditional.block/DateTimeConditionChecker.js");
/* harmony import */ var _ConditionRenderStateItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConditionRenderStateItem */ "./frontend/conditional.block/ConditionRenderStateItem.js");
/* harmony import */ var _CalculatedFieldChecker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CalculatedFieldChecker */ "./frontend/conditional.block/CalculatedFieldChecker.js");








const {
  applyFilters
} = JetPlugins.hooks;
const getItemTypes = () => applyFilters('jet.fb.conditional.types', [_ConditionRenderStateItem__WEBPACK_IMPORTED_MODULE_6__["default"], _OrOperatorItem__WEBPACK_IMPORTED_MODULE_4__["default"], _ConditionFieldItem__WEBPACK_IMPORTED_MODULE_0__["default"]]);
/**
 * @type {ConditionItem[]}
 */
let itemTypes = [];
const getCheckers = () => applyFilters('jet.fb.conditional.checkers', [_MultipleConditionChecker__WEBPACK_IMPORTED_MODULE_3__["default"], _DateTimeConditionChecker__WEBPACK_IMPORTED_MODULE_5__["default"], _CalculatedFieldChecker__WEBPACK_IMPORTED_MODULE_7__["default"], _ConditionChecker__WEBPACK_IMPORTED_MODULE_2__["default"]]);
let checkers = [];

/**
 * @param  options {{}}
 * @param  list    {ConditionsList}
 * @return {*}
 */
function createConditionItem(options, list) {
  if (!itemTypes.length) {
    itemTypes = getItemTypes();
  }
  for (const dataType of itemTypes) {
    /**
     * @type {ConditionItem}
     */
    const current = new dataType();
    if (!current.isSupported(options)) {
      continue;
    }
    current.setList(list);
    current.setOptions(options);
    return current;
  }
}

/**
 * @param  node
 * @param  root
 * @return {ConditionalBlock}
 */
function createConditionalBlock(node, root) {
  if (node.hasOwnProperty('jfbConditional')) {
    return node.jfbConditional;
  }
  const block = new _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__["default"](node, root);
  block.observe();
  block.list.onChangeRelated();
  return block;
}

/**
 * @param input {InputData}
 */
function createChecker(input) {
  if (!checkers.length) {
    checkers = getCheckers();
  }
  for (const checker of checkers) {
    const current = new checker();
    if (!current.isSupported(input)) {
      continue;
    }
    return current;
  }
  return null;
}


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
/*!********************************************!*\
  !*** ./frontend/conditional.block/main.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/conditional.block/functions.js");
/* harmony import */ var _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionalBlock */ "./frontend/conditional.block/ConditionalBlock.js");
/* harmony import */ var _ConditionItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionItem */ "./frontend/conditional.block/ConditionItem.js");
/* harmony import */ var _ConditionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConditionsList */ "./frontend/conditional.block/ConditionsList.js");
var _window$JetFormBuilde;




const {
  addAction
} = JetPlugins.hooks;
addAction('jet.fb.observe.after', 'jet-form-builder/conditional-block', function (observable) {
  for (const node of observable.rootNode.querySelectorAll(`[data-jfb-conditional]`)) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createConditionalBlock)(node, observable);
  }
}, 20);
addAction('jet.fb.input.makeReactive', 'jet-form-builder/conditional-block', function (input) {
  input.checker = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createChecker)(input);
});
addAction('jet.fb.conditional.block.runFunction', 'jet-form-builder/conditional-block',
/**
 * @param funcName
 * @param result
 * @param conditionalBlock {ConditionalBlock}
 */
function (funcName, result, conditionalBlock) {
  if ('setCssClass' !== funcName || !conditionalBlock.settings?.className) {
    return;
  }
  conditionalBlock.node.classList.toggle(conditionalBlock.settings.className, result);
});
window.JetFormBuilderAbstract = {
  ...((_window$JetFormBuilde = window.JetFormBuilderAbstract) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}),
  ConditionItem: _ConditionItem__WEBPACK_IMPORTED_MODULE_2__["default"],
  ConditionalBlock: _ConditionalBlock__WEBPACK_IMPORTED_MODULE_1__["default"],
  createConditionalBlock: _functions__WEBPACK_IMPORTED_MODULE_0__.createConditionalBlock,
  createChecker: _functions__WEBPACK_IMPORTED_MODULE_0__.createChecker,
  ConditionsList: _ConditionsList__WEBPACK_IMPORTED_MODULE_3__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzlWQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NhbGN1bGF0ZWRGaWVsZENoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25GaWVsZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uYWxCbG9jay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25zQmxvY2tMaXN0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbnNMaXN0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0RhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9NdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svT3JPcGVyYXRvckl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcblxuZnVuY3Rpb24gQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlcigpIHtcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0cmV0dXJuICdjYWxjdWxhdGVkJyA9PT0gaW5wdXQuaW5wdXRUeXBlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuY2hlY2sgPSBmdW5jdGlvbiAoIGNvbmRpdGlvbiwgaW5wdXQgKSB7XG5cdFx0Y29uc3QgY3VycmVudCAgICAgICAgPSBpbnB1dC5jYWxjVmFsdWU7XG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgPSBjb25kaXRpb24udmFsdWU7XG5cblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xuXHR9O1xufVxuXG5DYWxjdWxhdGVkRmllbGRDaGVja2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlcjsiLCJjb25zdCB7XG5cdCAgICAgIGlzRW1wdHksXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIENvbmRpdGlvbkNoZWNrZXIoKSB7XG5cdHRoaXMub3BlcmF0b3JzID0gdGhpcy5nZXRPcGVyYXRvcnMoKTtcbn1cblxuQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aXNTdXBwb3J0ZWQ6ICgpID0+IHRydWUsXG5cdG9wZXJhdG9yczoge30sXG5cdGdldE9wZXJhdG9ycyAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGVxdWFsOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gY3VycmVudCA9PT1cblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXSxcblx0XHRcdGVtcHR5OiAoIGN1cnJlbnQgKSA9PiBpc0VtcHR5KCBjdXJyZW50ICksXG5cdFx0XHRncmVhdGVyOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcblx0XHRcdFx0Y3VycmVudFxuXHRcdFx0KSA+ICsoXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cblx0XHRcdCksXG5cdFx0XHRncmVhdGVyX29yX2VxOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcblx0XHRcdFx0Y3VycmVudFxuXHRcdFx0KSA+PSArKFxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXG5cdFx0XHQpLFxuXHRcdFx0bGVzczogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdCkgPCArKFxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXG5cdFx0XHQpLFxuXHRcdFx0bGVzc19vcl9lcTogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdCkgPD0gKyhcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxuXHRcdFx0KSxcblx0XHRcdGJldHdlZW46ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiB7XG5cdFx0XHRcdGlmICggIWNvbmRpdGlvblZhbHVlPy5sZW5ndGggfHwgbnVsbCA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF0gPD0gK2N1cnJlbnQgJiZcblx0XHRcdFx0XHQrY3VycmVudCA8PSBjb25kaXRpb25WYWx1ZVsgMSBdXG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0b25lX29mOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xuXHRcdFx0XHRpZiAoICFjb25kaXRpb25WYWx1ZT8ubGVuZ3RoICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAwIDw9IGNvbmRpdGlvblZhbHVlLmluZGV4T2YoIGN1cnJlbnQgKTtcblx0XHRcdH0sXG5cdFx0XHRjb250YWluOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xuXHRcdFx0XHRpZiAoICFjdXJyZW50ICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gMCA8PSBjdXJyZW50LmluZGV4T2YoIGNvbmRpdGlvblZhbHVlWyAwIF0gKTtcblx0XHRcdH0sXG5cdFx0fTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBjb25kaXRpb24ge0NvbmRpdGlvbkZpZWxkSXRlbX1cblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfVxuXHQgKi9cblx0Y2hlY2sgKCBjb25kaXRpb24sIGlucHV0ICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgID0gaW5wdXQudmFsdWUuY3VycmVudDtcblx0XHRjb25zdCBjb25kaXRpb25WYWx1ZSA9IGNvbmRpdGlvbi52YWx1ZTtcblxuXHRcdHJldHVybiB0aGlzLmNoZWNrUmF3KCBjb25kaXRpb24ub3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICk7XG5cdH0sXG5cdGNoZWNrUmF3ICggb3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkge1xuXHRcdGlmICggdGhpcy5vcGVyYXRvcnMuaGFzT3duUHJvcGVydHkoIG9wZXJhdG9yICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcGVyYXRvcnNbIG9wZXJhdG9yIF0oXG5cdFx0XHRcdGN1cnJlbnQsXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoIDAgIT09IG9wZXJhdG9yLmluZGV4T2YoICdub3RfJyApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZXJhdG9yTmFtZSA9IG9wZXJhdG9yLnNsaWNlKCA0ICk7XG5cblx0XHRpZiAoICF0aGlzLm9wZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eSggb3BlcmF0b3JOYW1lICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICF0aGlzLm9wZXJhdG9yc1sgb3BlcmF0b3JOYW1lIF0oXG5cdFx0XHRjdXJyZW50LFxuXHRcdFx0Y29uZGl0aW9uVmFsdWUsXG5cdFx0KTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkNoZWNrZXI7IiwiaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcblxuY29uc3QgeyBDYWxjdWxhdGVkRm9ybXVsYSB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gQ29uZGl0aW9uRmllbGRJdGVtKCkge1xuXHRDb25kaXRpb25JdGVtLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xuXHRcdHJldHVybiAhIW9wdGlvbnM/LmZpZWxkPy5sZW5ndGg7XG5cdH07XG5cdHRoaXMub2JzZXJ2ZSAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgaW5wdXQgICAgICAgPSB0aGlzLmdldElucHV0KCk7XG5cdFx0dGhpcy5saXN0Ll9maWVsZHMgPSB0aGlzLmxpc3QuX2ZpZWxkcyA/PyBbXTtcblxuXHRcdGlmICggIWlucHV0IHx8IHRoaXMubGlzdC5fZmllbGRzLmluY2x1ZGVzKCB0aGlzLmZpZWxkICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5saXN0Ll9maWVsZHMucHVzaCggdGhpcy5maWVsZCApO1xuXHRcdGlucHV0LndhdGNoKCAoKSA9PiB0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcblx0fTtcblx0LyoqXG5cdCAqIEByZXR1cm4ge0lucHV0RGF0YXxib29sZWFufVxuXHQgKi9cblx0dGhpcy5nZXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0LnJvb3QuZ2V0SW5wdXQoIHRoaXMuZmllbGQgKTtcblx0fTtcblx0dGhpcy5pc1Bhc3NlZCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG5cdFx0aWYgKCAhaW5wdXQgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0LmNoZWNrZXIuY2hlY2soIHRoaXMsIGlucHV0ICk7XG5cdH07XG5cdHRoaXMuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHR0aGlzLmZpZWxkICAgICAgICA9IG9wdGlvbnMuZmllbGQ7XG5cdFx0dGhpcy5vcGVyYXRvciAgICAgPSBvcHRpb25zLm9wZXJhdG9yO1xuXHRcdHRoaXMucmVuZGVyX3N0YXRlID0gb3B0aW9ucy5yZW5kZXJfc3RhdGU7XG5cdFx0dGhpcy51c2VfcHJlc2V0ICAgPSBvcHRpb25zLnVzZV9wcmVzZXQ7XG5cdFx0bGV0IHZhbHVlICAgICAgICAgPSBvcHRpb25zPy52YWx1ZTtcblxuXHRcdGlmICggIUFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KCAnLCcgKS5tYXAoIGl0ZW0gPT4gaXRlbS50cmltKCkgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMudXNlX3ByZXNldCApIHtcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudmFsdWUgPSB7fTtcblxuXHRcdGZvciAoIGNvbnN0IFsgaW5kZXgsIGZvcm11bGEgXSBvZiBPYmplY3QuZW50cmllcyggdmFsdWUgKSApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMubGlzdC5yb290ICk7XG5cblx0XHRcdGN1cnJlbnQub2JzZXJ2ZSggZm9ybXVsYSApO1xuXHRcdFx0Y3VycmVudC5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWVbIGluZGV4IF0gPSAnJyArIGN1cnJlbnQuY2FsY3VsYXRlKCk7XG5cdFx0XHRcdHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQoKTtcblx0XHRcdH07XG5cdFx0XHRjdXJyZW50LnNldFJlc3VsdCgpO1xuXHRcdH1cblxuXHRcdHRoaXMudmFsdWUgPSBPYmplY3QudmFsdWVzKCB0aGlzLnZhbHVlICk7XG5cdH07XG59XG5cbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xuXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLmZpZWxkID0gbnVsbDtcbi8qKlxuICogQHR5cGUge0FycmF5fVxuICovXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLnZhbHVlID0gbnVsbDtcbi8qKlxuICogQHR5cGUgeydlcXVhbCd8J2dyZWF0ZXInfCdsZXNzJ3wnYmV0d2Vlbid8J29uZV9vZid8J2NvbnRhaW4nfVxuICovXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLm9wZXJhdG9yID0gbnVsbDtcbi8qKlxuICogQHR5cGUge2Jvb2xlYW59XG4gKi9cbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUudXNlX3ByZXNldCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkZpZWxkSXRlbTsiLCIvKipcbiAqIEBwcm9wZXJ0eSB7Q29uZGl0aW9uc0xpc3R8Q29uZGl0aW9uc0Jsb2NrTGlzdH0gbGlzdCBSZWxhdGVkIGxpc3RcbiAqL1xuZnVuY3Rpb24gQ29uZGl0aW9uSXRlbSgpIHtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLm9ic2VydmUgICAgID0gZnVuY3Rpb24gKCkge1xufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuc2V0T3B0aW9ucyAgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG59O1xuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuaXNQYXNzZWQgICAgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvcihcblx0XHQnWW91IG11c3QgcHJvdmlkZSBDb25kaXRpb25JdGVtOjppc1Bhc3NlZCBmdW5jdGlvbicsXG5cdCk7XG59O1xuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuc2V0TGlzdCAgICAgPSBmdW5jdGlvbiAoIGxpc3QgKSB7XG5cdHRoaXMubGlzdCA9IGxpc3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25JdGVtOyIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XG5cbmZ1bmN0aW9uIENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSgpIHtcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHRyZXR1cm4gJ3JlbmRlcl9zdGF0ZScgPT09IG9wdGlvbnM/Lm9wZXJhdG9yO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmxpc3Qucm9vdC5nZXRJbnB1dCggJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzJyApO1xuXHR9O1xuXG5cdHRoaXMub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmdldElucHV0KCkud2F0Y2goICgpID0+IHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQoKSApO1xuXHR9O1xuXG5cdHRoaXMuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHR0aGlzLnJlbmRlcl9zdGF0ZSA9IG9wdGlvbnMucmVuZGVyX3N0YXRlID8/IFtdO1xuXHR9O1xuXG5cdHRoaXMuaXNQYXNzZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG5cdFx0aWYgKCAhdmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnJlbmRlcl9zdGF0ZS5zb21lKCBjdXJyZW50ID0+IHtcblx0XHRcdHJldHVybiB2YWx1ZS5jdXJyZW50LmluY2x1ZGVzKCBjdXJyZW50ICk7XG5cdFx0fSApO1xuXHR9O1xufVxuXG5Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcblxuQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLnByb3RvdHlwZS5yZW5kZXJfc3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtOyIsImltcG9ydCBDb25kaXRpb25zQmxvY2tMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0Jsb2NrTGlzdCc7XG5cbmNvbnN0IHtcblx0ZG9BY3Rpb24sXG59ID0gSmV0UGx1Z2lucy5ob29rcztcbmNvbnN0IHtcblx0UmVhY3RpdmVWYXIsXG59ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcbmNvbnN0IHtcblx0dmFsaWRhdGVJbnB1dHNBbGwsXG59ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmNvbnN0IF9fcmVJbml0ZWQgPSBuZXcgV2Vha1NldCgpO1xuXG5mdW5jdGlvbiBDb25kaXRpb25hbEJsb2NrKG5vZGUsIG9ic2VydmFibGUpIHtcblx0dGhpcy5ub2RlID0gbm9kZTtcblx0bm9kZS5qZmJDb25kaXRpb25hbCA9IHRoaXM7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Q29uZGl0aW9uc0Jsb2NrTGlzdH1cblx0ICovXG5cdHRoaXMubGlzdCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtzdHJpbmcgfCBPYmplY3R9XG5cdCAqL1xuXHR0aGlzLmZ1bmN0aW9uID0gbnVsbDtcblx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQYWdlU3RhdGV9XG5cdCAqL1xuXHR0aGlzLnBhZ2UgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7TXVsdGlTdGVwU3RhdGV9XG5cdCAqL1xuXHR0aGlzLm11bHRpc3RlcCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlfVxuXHQgKi9cblx0dGhpcy5jb21tZW50ID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YVtdfVxuXHQgKi9cblx0dGhpcy5pbnB1dHMgPSBbXTtcblxuXHR0aGlzLmlzUmlnaHQgPSBuZXcgUmVhY3RpdmVWYXIobnVsbCk7XG5cdHRoaXMuaXNSaWdodC5tYWtlKCk7XG5cblx0dGhpcy5zZXRDb25kaXRpb25zKCk7XG5cdHRoaXMuc2V0SW5wdXRzKCk7XG5cdHRoaXMuc2V0RnVuY3Rpb24oKTtcblxuXHRpZiAoIXdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uZGV2bW9kZSkge1xuXHRcdGRlbGV0ZSB0aGlzLm5vZGUuZGF0YXNldC5qZmJDb25kaXRpb25hbDtcblx0XHRkZWxldGUgdGhpcy5ub2RlLmRhdGFzZXQuamZiRnVuYztcblx0fVxuXG5cdGRvQWN0aW9uKCdqZXQuZmIuY29uZGl0aW9uYWwuaW5pdCcsIHRoaXMpO1xufVxuXG5Db25kaXRpb25hbEJsb2NrLnByb3RvdHlwZSA9IHtcblx0c2V0Q29uZGl0aW9ucygpIHtcblx0XHRjb25zdCB7IGpmYkNvbmRpdGlvbmFsIH0gPSB0aGlzLm5vZGUuZGF0YXNldDtcblxuXHRcdHRoaXMubGlzdCA9IG5ldyBDb25kaXRpb25zQmxvY2tMaXN0KGpmYkNvbmRpdGlvbmFsLCB0aGlzLnJvb3QpO1xuXHRcdHRoaXMubGlzdC5ibG9jayA9IHRoaXM7XG5cblx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5pc1JpZ2h0LmN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0UmVzdWx0KCk7XG5cdFx0fTtcblx0fSxcblx0c2V0SW5wdXRzKCkge1xuXHRcdHRoaXMuaW5wdXRzID0gQXJyYXkuZnJvbShcblx0XHRcdHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qZmItc3luY10nKSxcblx0XHQpLm1hcChcblx0XHRcdGl0ZW0gPT4gaXRlbS5qZmJTeW5jLFxuXHRcdCkuZmlsdGVyKFxuXHRcdFx0aXRlbSA9PiBpdGVtLFxuXHRcdCk7XG5cdH0sXG5cdGluc2VydENvbW1lbnQoKSB7XG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzPy5kb20pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuXHRcdC8vIGluc2VydCBjb21tZW50IGFmdGVyIGNvbmRpdGlvbmFsIGJsb2NrXG5cdFx0dGhpcy5ub2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0dGhpcy5jb21tZW50LFxuXHRcdFx0dGhpcy5ub2RlLm5leHRTaWJsaW5nLFxuXHRcdCk7XG5cdH0sXG5cdG9ic2VydmUoKSB7XG5cdFx0aWYgKHRoaXMuaXNPYnNlcnZlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmlzT2JzZXJ2ZWQgPSB0cnVlO1xuXHRcdHRoaXMuaW5zZXJ0Q29tbWVudCgpO1xuXG5cdFx0dGhpcy5pc1JpZ2h0LndhdGNoKCgpID0+IHRoaXMucnVuRnVuY3Rpb24oKSk7XG5cdFx0dGhpcy5pc1JpZ2h0LndhdGNoKCgpID0+IHRoaXMudmFsaWRhdGVJbnB1dHMoKSk7XG5cdFx0dGhpcy5saXN0Lm9ic2VydmUoKTtcblx0fSxcblx0cnVuRnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5pc1JpZ2h0LmN1cnJlbnQ7XG5cblx0XHRzd2l0Y2ggKHRoaXMuZnVuY3Rpb24pIHtcblx0XHRcdGNhc2UgJ3Nob3cnOlxuXHRcdFx0XHR0aGlzLnNob3dCbG9jayhyZXN1bHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hpZGUnOlxuXHRcdFx0XHR0aGlzLnNob3dCbG9jayghcmVzdWx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXNhYmxlJzpcblx0XHRcdFx0dGhpcy5kaXNhYmxlQmxvY2socmVzdWx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRkb0FjdGlvbihcblx0XHRcdFx0XHQnamV0LmZiLmNvbmRpdGlvbmFsLmJsb2NrLnJ1bkZ1bmN0aW9uJyxcblx0XHRcdFx0XHR0aGlzLmZ1bmN0aW9uLFxuXHRcdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblx0fSxcblx0LyoqXG5cdCAqIENvbXBhdGliaWxpdHkgd2l0aCBTYXZlIFByb2dyZXNzXG5cdCAqIEBzaW5jZSAzLjAuMSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjQ4MFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNTUzXG5cdCAqL1xuXHR2YWxpZGF0ZUlucHV0cygpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHZhbGlkYXRlSW5wdXRzQWxsKHRoaXMuaW5wdXRzLCB0cnVlKS5cblx0XHRcdFx0dGhlbigoKSA9PiB7IH0pLlxuXHRcdFx0XHRjYXRjaCgoKSA9PiB7IH0pO1xuXHRcdH0pO1xuXHR9LFxuXHRzaG93QmxvY2socmVzdWx0KSB7XG5cdFx0dGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2pldC1mb3JtLWJ1aWxkZXItLWhpZGRlbicpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3M/LmRvbSkge1xuXHRcdFx0dGhpcy5zaG93QmxvY2tEb20ocmVzdWx0KTtcblx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucmVpbml0Q2hpbGRyZW4oKSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jay9ibG9jay10b2dnbGUtaGlkZGVuLWRvbScsIHtcblx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0YmxvY2s6IHRoaXMubm9kZSxcblx0XHRcdFx0XHRyZXN1bHQ6IHJlc3VsdFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLm5vZGUuc3R5bGUuZGlzcGxheSA9IHJlc3VsdCA/ICdibG9jaycgOiAnbm9uZSc7XG5cblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZWluaXRDaGlsZHJlbigpKTtcblx0XHR9XG5cdH0sXG5cdGNsZWFySW5wdXRzKCkgeyBcblx0XHR0aGlzLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcblx0XHRcdGlucHV0Lm9uQ2xlYXIoKTtcblx0XHR9KTtcblx0fSxcblx0c2hvd0Jsb2NrRG9tKHJlc3VsdCkge1xuXHRcdGNvbnN0IGlucHV0c0xpc3QgPSB0aGlzLnJvb3QuZGF0YUlucHV0cztcblx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0dGhpcy5jbGVhcklucHV0cygpO1xuXHRcdFx0dGhpcy5ub2RlLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5yZUNhbGN1bGF0ZUZpZWxkcyhpbnB1dHNMaXN0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jb21tZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMubm9kZSwgdGhpcy5jb21tZW50KTtcblx0XHR0aGlzLnJlQ2FsY3VsYXRlRmllbGRzKGlucHV0c0xpc3QpO1xuXHR9LFxuXHRkaXNhYmxlQmxvY2socmVzdWx0KSB7XG5cdFx0dGhpcy5ub2RlLmRpc2FibGVkID0gcmVzdWx0O1xuXHR9LFxuXHRzZXRGdW5jdGlvbigpIHtcblx0XHR0aGlzLmZ1bmN0aW9uID0gdGhpcy5ub2RlLmRhdGFzZXQuamZiRnVuYztcblxuXHRcdGxldCBwYXJzZWQ7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcnNlZCA9IEpTT04ucGFyc2UodGhpcy5mdW5jdGlvbik7XG5cdFx0fVxuXHRcdGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBbW25hbWUsIHNldHRpbmdzXV0gPSBPYmplY3QuZW50cmllcyhwYXJzZWQpO1xuXG5cdFx0dGhpcy5mdW5jdGlvbiA9IG5hbWU7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXHR9LFxuXHRyZWluaXRDaGlsZHJlbigpIHtcblx0XHRjb25zdCByb290ID0gdGhpcy5yb290O1xuXHRcdGNvbnN0IHNjb3BlID0gdGhpcy5ub2RlO1xuXG5cdFx0Y29uc3Qgbm9kZXMgPSBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qZmItY29uZGl0aW9uYWxdW2RhdGEtamZiLWZ1bmNdJyk7XG5cdFx0bm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuXHRcdFx0aWYgKG5vZGUuamZiQ29uZGl0aW9uYWwgfHwgX19yZUluaXRlZC5oYXMobm9kZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgY2hpbGQgPSBuZXcgQ29uZGl0aW9uYWxCbG9jayhub2RlLCByb290KTtcblx0XHRcdFx0Y2hpbGQub2JzZXJ2ZSgpO1xuXHRcdFx0XHRjaGlsZC5pc1JpZ2h0LmN1cnJlbnQgPSBjaGlsZC5saXN0LmdldFJlc3VsdCgpO1xuXHRcdFx0XHRfX3JlSW5pdGVkLmFkZChub2RlKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdyZWluaXRDaGlsZHJlbjogaW5pdCBmYWlsZWQnLCBlLCBub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHQvKipcblx0ICogUmVjYWxjdWxhdGlvbiBvZiBmb3JtdWxhc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gaW5wdXRzTGlzdCAtIExpc3Qgb2YgZmllbGRzXG5cdCAqL1xuXHRyZUNhbGN1bGF0ZUZpZWxkcyhpbnB1dHNMaXN0KSB7XG5cdFx0Ly8gR2V0IG9ubHkgZmllbGRzIHRoYXQgYXJlIGluIHRoZSBjdXJyZW50IGJsb2NrXG5cdFx0Y29uc3QgYWZmZWN0ZWRGaWVsZHMgPSB0aGlzLmdldEFmZmVjdGVkRmllbGRzKGlucHV0c0xpc3QpO1xuXG5cdFx0Ly8gQ2FjaGUgZm9yIHZpc2liaWxpdHkgY2hlY2tzXG5cdFx0Y29uc3QgdmlzaWJpbGl0eUNhY2hlID0gbmV3IE1hcCgpO1xuXG5cdFx0YWZmZWN0ZWRGaWVsZHMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0aWYgKGlucHV0c0xpc3Rba2V5XSAmJiBpbnB1dHNMaXN0W2tleV0uZm9ybXVsYSkge1xuXHRcdFx0XHRjb25zdCBmaWVsZE5vZGUgPSBpbnB1dHNMaXN0W2tleV0ubm9kZXM/LlswXTtcblxuXHRcdFx0XHQvLyBVc2UgY2FjaGUgZm9yIHZpc2liaWxpdHkgY2hlY2tzXG5cdFx0XHRcdGxldCBzaG91bGRSZWNhbGN1bGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoZmllbGROb2RlKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2FjaGVLZXkgPSBmaWVsZE5vZGU7XG5cdFx0XHRcdFx0aWYgKCF2aXNpYmlsaXR5Q2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaXNWaXNpYmxlID0gdGhpcy5pc0ZpZWxkVmlzaWJsZShmaWVsZE5vZGUpO1xuXHRcdFx0XHRcdFx0Y29uc3QgaXNJbkRPTSA9IGRvY3VtZW50LmNvbnRhaW5zKGZpZWxkTm9kZSk7XG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5Q2FjaGUuc2V0KGNhY2hlS2V5LCBpc1Zpc2libGUgfHwgaXNJbkRPTSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNob3VsZFJlY2FsY3VsYXRlID0gdmlzaWJpbGl0eUNhY2hlLmdldChjYWNoZUtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc2hvdWxkUmVjYWxjdWxhdGUpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0aW5wdXRzTGlzdFtrZXldLnJlQ2FsY3VsYXRlRm9ybXVsYSgpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oYEVycm9yIHJlY2FsY3VsYXRpbmcgZm9ybXVsYSBmb3IgZmllbGQgJHtrZXl9OmAsIGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0LyoqXG5cdCAqIENoZWNrcyBpZiBmaWVsZCBpcyB2aXNpYmxlIG9uIHRoZSBwYWdlXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZpZWxkTm9kZSAtIERPTSBlbGVtZW50IG9mIHRoZSBmaWVsZFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIGZpZWxkIGlzIHZpc2libGVcblx0ICovXG5cdGlzRmllbGRWaXNpYmxlKGZpZWxkTm9kZSkge1xuXHRcdGlmICghZmllbGROb2RlKSByZXR1cm4gZmFsc2U7XG5cblx0XHQvLyBDaGVjayBpZiBlbGVtZW50IGlzIGluIERPTVxuXHRcdGlmICghZG9jdW1lbnQuY29udGFpbnMoZmllbGROb2RlKSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Ly8gQ2hlY2sgdmlzaWJpbGl0eSBzdHlsZXNcblx0XHRjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZmllbGROb2RlKTtcblxuXHRcdGlmICgnbm9uZScgPT09IGNvbXB1dGVkU3R5bGUuZGlzcGxheSB8fCAnaGlkZGVuJyA9PT0gY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgZWxlbWVudCBpcyBub3QgaGlkZGVuIGJ5IHBhcmVudCBlbGVtZW50c1xuXHRcdGxldCBwYXJlbnQgPSBmaWVsZE5vZGUucGFyZW50RWxlbWVudDtcblxuXHRcdHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG5cdFx0XHRjb25zdCBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG5cdFx0XHRpZiAoJ25vbmUnID09PSBwYXJlbnRTdHlsZS5kaXNwbGF5IHx8ICdoaWRkZW4nID09PSBwYXJlbnRTdHlsZS52aXNpYmlsaXR5KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHQvKipcblx0ICogR2V0cyBsaXN0IG9mIGZpZWxkcyBhZmZlY3RlZCBieSBjdXJyZW50IGNvbmRpdGlvbmFsIGJsb2NrXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpbnB1dHNMaXN0IC0gTGlzdCBvZiBhbGwgZmllbGRzXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gLSBBcnJheSBvZiBhZmZlY3RlZCBmaWVsZCBrZXlzXG5cdCAqL1xuXHRnZXRBZmZlY3RlZEZpZWxkcyhpbnB1dHNMaXN0KSB7XG5cdFx0Y29uc3QgYWZmZWN0ZWRGaWVsZHMgPSBbXTtcblxuXHRcdC8vIEdldCBhbGwgZmllbGRzIGluc2lkZSBjdXJyZW50IGJsb2NrXG5cdFx0Y29uc3QgYmxvY2tGaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qZmItc3luY10nKSk7XG5cdFx0Y29uc3QgYmxvY2tGaWVsZE5hbWVzID0gbmV3IFNldCgpO1xuXG5cdFx0Ly8gQ29sbGVjdCBmaWVsZCBuYW1lcyBpbnNpZGUgYmxvY2tcblx0XHRibG9ja0ZpZWxkcy5mb3JFYWNoKGZpZWxkTm9kZSA9PiB7XG5cdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBmaWVsZE5vZGUuamZiU3luYz8ubmFtZVxuXHRcdFx0XHQ/PyBmaWVsZE5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJylcblx0XHRcdFx0Pz8gZmllbGROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lXScpPy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0XHRcdGlmIChmaWVsZE5hbWUpIHtcblx0XHRcdFx0YmxvY2tGaWVsZE5hbWVzLmFkZChmaWVsZE5hbWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0T2JqZWN0LmtleXMoaW5wdXRzTGlzdCkuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0Y29uc3QgZmllbGQgPSBpbnB1dHNMaXN0W2tleV07XG5cblx0XHRcdGlmICghZmllbGQgfHwgIWZpZWxkLmZvcm11bGEpIHJldHVybjtcblxuXHRcdFx0Y29uc3QgZmllbGROb2RlID0gZmllbGQubm9kZXM/LlswXTtcblx0XHRcdGxldCBzaG91bGRSZWNhbGN1bGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHQvLyAxLiBGaWVsZCBpcyBpbnNpZGUgdGhlIGJsb2NrXG5cdFx0XHRpZiAoZmllbGROb2RlICYmIGJsb2NrRmllbGRzLmluY2x1ZGVzKGZpZWxkTm9kZSkpIHtcblx0XHRcdFx0c2hvdWxkUmVjYWxjdWxhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAyLiBGaWVsZCBkZXBlbmRzIG9uIGZpZWxkcyBpbnNpZGUgYmxvY2sgKGNoZWNrIGZvcm11bGEpXG5cdFx0XHRpZiAoIXNob3VsZFJlY2FsY3VsYXRlICYmIGZpZWxkLmZvcm11bGEpIHtcblx0XHRcdFx0YmxvY2tGaWVsZE5hbWVzLmZvckVhY2goYmxvY2tGaWVsZE5hbWUgPT4ge1xuXHRcdFx0XHRcdGlmIChmaWVsZC5mb3JtdWxhLmluY2x1ZGVzKGAlJHtibG9ja0ZpZWxkTmFtZX0lYCkpIHtcblx0XHRcdFx0XHRcdHNob3VsZFJlY2FsY3VsYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2hvdWxkUmVjYWxjdWxhdGUpIHtcblx0XHRcdFx0YWZmZWN0ZWRGaWVsZHMucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFmZmVjdGVkRmllbGRzO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uYWxCbG9jaztcbiIsImltcG9ydCBDb25kaXRpb25zTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNMaXN0JztcblxuZnVuY3Rpb24gQ29uZGl0aW9uc0Jsb2NrTGlzdCggY29uZGl0aW9ucywgcm9vdCApIHtcblx0Q29uZGl0aW9uc0xpc3QuY2FsbCggdGhpcywgY29uZGl0aW9ucywgcm9vdCApO1xufVxuXG5Db25kaXRpb25zQmxvY2tMaXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbnNMaXN0LnByb3RvdHlwZSApO1xuLyoqXG4gKiBAdHlwZSB7Q29uZGl0aW9uYWxCbG9ja31cbiAqL1xuQ29uZGl0aW9uc0Jsb2NrTGlzdC5wcm90b3R5cGUuYmxvY2sgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zQmxvY2tMaXN0OyIsImltcG9ydCB7IGNyZWF0ZUNvbmRpdGlvbkl0ZW0gfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgT3JPcGVyYXRvckl0ZW0gZnJvbSAnLi9Pck9wZXJhdG9ySXRlbSc7XG5cbmZ1bmN0aW9uIENvbmRpdGlvbnNMaXN0KCBjb25kaXRpb25zLCByb290ICkge1xuXHR0aGlzLnJvb3QgPSByb290O1xuXHR0aGlzLnNldENvbmRpdGlvbnMoIGNvbmRpdGlvbnMgKTtcbn1cblxuQ29uZGl0aW9uc0xpc3QucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHRyb290OiBudWxsLFxuXHRjb25kaXRpb25zOiBbXSxcblx0aW52YWxpZDogW10sXG5cdGdyb3VwczogW10sXG5cdC8qKlxuXHQgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgY2FsbGJhY2suXG5cdCAqIEl0IHVzZWQgaW4gQ29uZGl0aW9uRmllbGRJdGVtLlxuXHQgKlxuXHQgKiBSdW5zIGV2ZXJ5IHRpbWUsIHdoZW4gY29uZGl0aW9ucyBpcyBtYXRjaFxuXHQgKi9cblx0b25DaGFuZ2VSZWxhdGVkKCkge1xuXHRcdGlmICggIXRoaXMuZ2V0UmVzdWx0KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMub25NYXRjaENvbmRpdGlvbnMoKTtcblx0fSxcblx0b25NYXRjaENvbmRpdGlvbnMoKSB7fSxcblx0b2JzZXJ2ZSgpIHtcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgdGhpcy5nZXRDb25kaXRpb25zKCkgKSB7XG5cdFx0XHRjb25kaXRpb24ub2JzZXJ2ZSgpO1xuXHRcdH1cblx0fSxcblx0c2V0Q29uZGl0aW9ucyggY29uZGl0aW9ucyApIHtcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgY29uZGl0aW9ucyApIHtcblx0XHRcdGNvbmRpdGlvbnMgPSBKU09OLnBhcnNlKCBjb25kaXRpb25zICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb25kaXRpb25zID0gY29uZGl0aW9ucy5tYXAoXG5cdFx0XHRpdGVtID0+IGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIGl0ZW0sIHRoaXMgKSxcblx0XHQpLmZpbHRlciggaXRlbSA9PiBpdGVtICk7XG5cblx0XHRjb25zdCBncm91cHMgICA9IHt9O1xuXHRcdGxldCBncm91cEluZGV4ID0gMDtcblxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmdldENvbmRpdGlvbnMoKSApIHtcblx0XHRcdGlmICggY29uZGl0aW9uIGluc3RhbmNlb2YgT3JPcGVyYXRvckl0ZW0gKSB7XG5cdFx0XHRcdGdyb3VwSW5kZXgrKztcblxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdID0gZ3JvdXBzWyBncm91cEluZGV4IF0gPz8gW107XG5cdFx0XHRncm91cHNbIGdyb3VwSW5kZXggXS5wdXNoKCBjb25kaXRpb24gKTtcblx0XHR9XG5cblx0XHR0aGlzLmdyb3VwcyA9IE9iamVjdC52YWx1ZXMoIGdyb3VwcyApO1xuXHR9LFxuXHRnZXRSZXN1bHQoKSB7XG5cdFx0dGhpcy5pbnZhbGlkID0gW107XG5cblx0XHRpZiAoICF0aGlzLmdyb3Vwcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBncm91cCBvZiB0aGlzLmdyb3VwcyApIHtcblx0XHRcdGlmICggdGhpcy5pc1ZhbGlkR3JvdXAoIGdyb3VwICkgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0aXNWYWxpZEdyb3VwKCBjb25kaXRpb25zR3JvdXAgKSB7XG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIGNvbmRpdGlvbnNHcm91cCApIHtcblx0XHRcdGlmICggY29uZGl0aW9uLmlzUGFzc2VkKCkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbnZhbGlkLnB1c2goIGNvbmRpdGlvbiApO1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBcnJheTxDb25kaXRpb25GaWVsZEl0ZW0gfCBDb25kaXRpb25QYWdlU3RhdGVJdGVtPn1cblx0ICovXG5cdGdldENvbmRpdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZGl0aW9ucztcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbnNMaXN0OyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgZ2V0VGltZXN0YW1wLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuY29uc3Qge1xuXHQgICAgICBNaW5fSW5fU2VjLFxuXHQgICAgICBNaWxsaV9Jbl9TZWMsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJDb25zdDtcblxuY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG5mdW5jdGlvbiBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIoKSB7XG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gWyAnZGF0ZScsICd0aW1lJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xuXHRcdGNvbnN0IHsgdGltZTogY3VycmVudCB9ID0gZ2V0VGltZXN0YW1wKCBpbnB1dC52YWx1ZS5jdXJyZW50ICk7XG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgICAgICA9IGNvbmRpdGlvbi52YWx1ZS5tYXAoIHZhbHVlID0+IHtcblx0XHRcdGNvbnN0IHsgdGltZSwgdHlwZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXG5cdFx0XHRpZiAoICdudW1iZXInID09PSB0eXBlICYmIGNvbmRpdGlvbi51c2VfcHJlc2V0ICkge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHRcdHJldHVybiB0aW1lICogTWlsbGlfSW5fU2VjICsgb2Zmc2V0ICogTWluX0luX1NlYztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcblx0fTtcbn1cblxuRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5cbmZ1bmN0aW9uIE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcigpIHtcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5vcGVyYXRvcnMub25lX29mID0gKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZXMgKSA9PiB7XG5cdFx0aWYgKCAhY29uZGl0aW9uVmFsdWVzPy5sZW5ndGggfHwgIWN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcblx0XHRcdHZhbCA9PiAtMSAhPT0gY29uZGl0aW9uVmFsdWVzLmluZGV4T2YoIHZhbCApLFxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5vcGVyYXRvcnMuY29udGFpbiA9ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWVzICkgPT4ge1xuXHRcdGlmICggIWN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcblx0XHRcdHZhbCA9PiB2YWwuaW5kZXhPZiggY29uZGl0aW9uVmFsdWVzWyAwIF0gKSAhPT0gLTEsXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuaXNBcnJheSgpO1xuXHR9O1xufVxuXG5NdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0Q29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXI7XG4iLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xuXG5mdW5jdGlvbiBPck9wZXJhdG9ySXRlbSgpIHtcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0b3B0aW9ucy5vcl9vcGVyYXRvciA/PyBmYWxzZVxuXHRcdCk7XG5cdH07XG59XG5cbk9yT3BlcmF0b3JJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE9yT3BlcmF0b3JJdGVtOyIsImltcG9ydCBDb25kaXRpb25GaWVsZEl0ZW0gZnJvbSAnLi9Db25kaXRpb25GaWVsZEl0ZW0nO1xuaW1wb3J0IENvbmRpdGlvbmFsQmxvY2sgZnJvbSAnLi9Db25kaXRpb25hbEJsb2NrJztcbmltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5pbXBvcnQgTXVsdGlwbGVDb25kaXRpb25DaGVja2VyIGZyb20gJy4vTXVsdGlwbGVDb25kaXRpb25DaGVja2VyJztcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcbmltcG9ydCBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXInO1xuaW1wb3J0IENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSBmcm9tICcuL0NvbmRpdGlvblJlbmRlclN0YXRlSXRlbSc7XG5pbXBvcnQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlciBmcm9tICcuL0NhbGN1bGF0ZWRGaWVsZENoZWNrZXInO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0SXRlbVR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLnR5cGVzJyxcblx0W1xuXHRcdENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSxcblx0XHRPck9wZXJhdG9ySXRlbSxcblx0XHRDb25kaXRpb25GaWVsZEl0ZW0sXG5cdF0sXG4pO1xuLyoqXG4gKiBAdHlwZSB7Q29uZGl0aW9uSXRlbVtdfVxuICovXG5sZXQgaXRlbVR5cGVzICAgICAgPSBbXTtcblxuY29uc3QgZ2V0Q2hlY2tlcnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwuY2hlY2tlcnMnLFxuXHRbXG5cdFx0TXVsdGlwbGVDb25kaXRpb25DaGVja2VyLFxuXHRcdERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcixcblx0XHRDYWxjdWxhdGVkRmllbGRDaGVja2VyLFxuXHRcdENvbmRpdGlvbkNoZWNrZXIsXG5cdF0sXG4pO1xuXG5sZXQgY2hlY2tlcnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIG9wdGlvbnMge3t9fVxuICogQHBhcmFtICBsaXN0ICAgIHtDb25kaXRpb25zTGlzdH1cbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIG9wdGlvbnMsIGxpc3QgKSB7XG5cdGlmICggIWl0ZW1UeXBlcy5sZW5ndGggKSB7XG5cdFx0aXRlbVR5cGVzID0gZ2V0SXRlbVR5cGVzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBkYXRhVHlwZSBvZiBpdGVtVHlwZXMgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0NvbmRpdGlvbkl0ZW19XG5cdFx0ICovXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBkYXRhVHlwZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggb3B0aW9ucyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGN1cnJlbnQuc2V0TGlzdCggbGlzdCApO1xuXHRcdGN1cnJlbnQuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGVcbiAqIEBwYXJhbSAgcm9vdFxuICogQHJldHVybiB7Q29uZGl0aW9uYWxCbG9ja31cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgcm9vdCApIHtcblx0aWYgKCBub2RlLmhhc093blByb3BlcnR5KCAnamZiQ29uZGl0aW9uYWwnICkgKSB7XG5cdFx0cmV0dXJuIG5vZGUuamZiQ29uZGl0aW9uYWw7XG5cdH1cblx0Y29uc3QgYmxvY2sgPSBuZXcgQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgcm9vdCApO1xuXG5cdGJsb2NrLm9ic2VydmUoKTtcblx0YmxvY2subGlzdC5vbkNoYW5nZVJlbGF0ZWQoKTtcblxuXHRyZXR1cm4gYmxvY2s7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrZXIoIGlucHV0ICkge1xuXHRpZiAoICFjaGVja2Vycy5sZW5ndGggKSB7XG5cdFx0Y2hlY2tlcnMgPSBnZXRDaGVja2VycygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgY2hlY2tlciBvZiBjaGVja2VycyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGNoZWNrZXIoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVDb25kaXRpb25JdGVtLFxuXHRjcmVhdGVDb25kaXRpb25hbEJsb2NrLFxuXHRjcmVhdGVDaGVja2VyLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ2hlY2tlciwgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBDb25kaXRpb25hbEJsb2NrIGZyb20gJy4vQ29uZGl0aW9uYWxCbG9jayc7XG5pbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xuaW1wb3J0IENvbmRpdGlvbnNMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0xpc3QnO1xuXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdGBbZGF0YS1qZmItY29uZGl0aW9uYWxdYCxcblx0XHQpICkge1xuXHRcdFx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgb2JzZXJ2YWJsZSApO1xuXHRcdH1cblx0fSxcblx0MjAsXG4pO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxuXHRmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGlucHV0LmNoZWNrZXIgPSBjcmVhdGVDaGVja2VyKCBpbnB1dCApO1xuXHR9LFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLmJsb2NrLnJ1bkZ1bmN0aW9uJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxuXHQvKipcblx0ICogQHBhcmFtIGZ1bmNOYW1lXG5cdCAqIEBwYXJhbSByZXN1bHRcblx0ICogQHBhcmFtIGNvbmRpdGlvbmFsQmxvY2sge0NvbmRpdGlvbmFsQmxvY2t9XG5cdCAqL1xuXHRmdW5jdGlvbiAoIGZ1bmNOYW1lLCByZXN1bHQsIGNvbmRpdGlvbmFsQmxvY2sgKSB7XG5cdFx0aWYgKFxuXHRcdFx0J3NldENzc0NsYXNzJyAhPT0gZnVuY05hbWUgfHxcblx0XHRcdCFjb25kaXRpb25hbEJsb2NrLnNldHRpbmdzPy5jbGFzc05hbWVcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25kaXRpb25hbEJsb2NrLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcblx0XHRcdGNvbmRpdGlvbmFsQmxvY2suc2V0dGluZ3MuY2xhc3NOYW1lLFxuXHRcdFx0cmVzdWx0LFxuXHRcdCk7XG5cdH0sXG4pO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XG5cdCksXG5cdENvbmRpdGlvbkl0ZW0sXG5cdENvbmRpdGlvbmFsQmxvY2ssXG5cdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2ssXG5cdGNyZWF0ZUNoZWNrZXIsXG5cdENvbmRpdGlvbnNMaXN0LFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==