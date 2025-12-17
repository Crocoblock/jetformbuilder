/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/conditional.block/CalculatedFieldChecker.js":
/*!**************************************************************!*\
  !*** ./frontend/conditional.block/CalculatedFieldChecker.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/ConditionChecker.js":
/*!********************************************************!*\
  !*** ./frontend/conditional.block/ConditionChecker.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/ConditionFieldItem.js":
/*!**********************************************************!*\
  !*** ./frontend/conditional.block/ConditionFieldItem.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/ConditionItem.js":
/*!*****************************************************!*\
  !*** ./frontend/conditional.block/ConditionItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/ConditionRenderStateItem.js":
/*!****************************************************************!*\
  !*** ./frontend/conditional.block/ConditionRenderStateItem.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/ConditionalBlock.js":
/*!********************************************************!*\
  !*** ./frontend/conditional.block/ConditionalBlock.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  showBlockDom(result) {
    const inputsList = this.root.dataInputs;
    if (!result) {
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
      const fieldName = fieldNode.getAttribute('name');
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

/***/ }),

/***/ "./frontend/conditional.block/ConditionsBlockList.js":
/*!***********************************************************!*\
  !*** ./frontend/conditional.block/ConditionsBlockList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/ConditionsList.js":
/*!******************************************************!*\
  !*** ./frontend/conditional.block/ConditionsList.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/DateTimeConditionChecker.js":
/*!****************************************************************!*\
  !*** ./frontend/conditional.block/DateTimeConditionChecker.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/MultipleConditionChecker.js":
/*!****************************************************************!*\
  !*** ./frontend/conditional.block/MultipleConditionChecker.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/OrOperatorItem.js":
/*!******************************************************!*\
  !*** ./frontend/conditional.block/OrOperatorItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/conditional.block/functions.js":
/*!*************************************************!*\
  !*** ./frontend/conditional.block/functions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzVkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9DYWxjdWxhdGVkRmllbGRDaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uRmllbGRJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbmFsQmxvY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uc0Jsb2NrTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svTXVsdGlwbGVDb25kaXRpb25DaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL09yT3BlcmF0b3JJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRmllbGRDaGVja2VyKCkge1xyXG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHJldHVybiAnY2FsY3VsYXRlZCcgPT09IGlucHV0LmlucHV0VHlwZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XHJcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHRoaXMuY2hlY2sgPSBmdW5jdGlvbiAoIGNvbmRpdGlvbiwgaW5wdXQgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ICAgICAgICA9IGlucHV0LmNhbGNWYWx1ZTtcclxuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlID0gY29uZGl0aW9uLnZhbHVlO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNoZWNrUmF3KCBjb25kaXRpb24ub3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICk7XHJcblx0fTtcclxufVxyXG5cclxuQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlcjsiLCJjb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uQ2hlY2tlcigpIHtcclxuXHR0aGlzLm9wZXJhdG9ycyA9IHRoaXMuZ2V0T3BlcmF0b3JzKCk7XHJcbn1cclxuXHJcbkNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNTdXBwb3J0ZWQ6ICgpID0+IHRydWUsXHJcblx0b3BlcmF0b3JzOiB7fSxcclxuXHRnZXRPcGVyYXRvcnMgKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZXF1YWw6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiBjdXJyZW50ID09PVxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF0sXHJcblx0XHRcdGVtcHR5OiAoIGN1cnJlbnQgKSA9PiBpc0VtcHR5KCBjdXJyZW50ICksXHJcblx0XHRcdGdyZWF0ZXI6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxyXG5cdFx0XHRcdGN1cnJlbnRcclxuXHRcdFx0KSA+ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRncmVhdGVyX29yX2VxOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPj0gKyhcclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXHJcblx0XHRcdCksXHJcblx0XHRcdGxlc3M6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxyXG5cdFx0XHRcdGN1cnJlbnRcclxuXHRcdFx0KSA8ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRsZXNzX29yX2VxOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPD0gKyhcclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXHJcblx0XHRcdCksXHJcblx0XHRcdGJldHdlZW46ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0aWYgKCAhY29uZGl0aW9uVmFsdWU/Lmxlbmd0aCB8fCBudWxsID09PSBjdXJyZW50ICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF0gPD0gK2N1cnJlbnQgJiZcclxuXHRcdFx0XHRcdCtjdXJyZW50IDw9IGNvbmRpdGlvblZhbHVlWyAxIF1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmVfb2Y6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0aWYgKCAhY29uZGl0aW9uVmFsdWU/Lmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiAwIDw9IGNvbmRpdGlvblZhbHVlLmluZGV4T2YoIGN1cnJlbnQgKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGFpbjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcclxuXHRcdFx0XHRpZiAoICFjdXJyZW50ICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gMCA8PSBjdXJyZW50LmluZGV4T2YoIGNvbmRpdGlvblZhbHVlWyAwIF0gKTtcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XHJcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGNoZWNrICggY29uZGl0aW9uLCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgID0gaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlID0gY29uZGl0aW9uLnZhbHVlO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNoZWNrUmF3KCBjb25kaXRpb24ub3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICk7XHJcblx0fSxcclxuXHRjaGVja1JhdyAoIG9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApIHtcclxuXHRcdGlmICggdGhpcy5vcGVyYXRvcnMuaGFzT3duUHJvcGVydHkoIG9wZXJhdG9yICkgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wZXJhdG9yc1sgb3BlcmF0b3IgXShcclxuXHRcdFx0XHRjdXJyZW50LFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggMCAhPT0gb3BlcmF0b3IuaW5kZXhPZiggJ25vdF8nICkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvcGVyYXRvck5hbWUgPSBvcGVyYXRvci5zbGljZSggNCApO1xyXG5cclxuXHRcdGlmICggIXRoaXMub3BlcmF0b3JzLmhhc093blByb3BlcnR5KCBvcGVyYXRvck5hbWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAhdGhpcy5vcGVyYXRvcnNbIG9wZXJhdG9yTmFtZSBdKFxyXG5cdFx0XHRjdXJyZW50LFxyXG5cdFx0XHRjb25kaXRpb25WYWx1ZSxcclxuXHRcdCk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkNoZWNrZXI7IiwiaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcclxuXHJcbmNvbnN0IHsgQ2FsY3VsYXRlZEZvcm11bGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25GaWVsZEl0ZW0oKSB7XHJcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gISFvcHRpb25zPy5maWVsZD8ubGVuZ3RoO1xyXG5cdH07XHJcblx0dGhpcy5vYnNlcnZlICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGlucHV0ICAgICAgID0gdGhpcy5nZXRJbnB1dCgpO1xyXG5cdFx0dGhpcy5saXN0Ll9maWVsZHMgPSB0aGlzLmxpc3QuX2ZpZWxkcyA/PyBbXTtcclxuXHJcblx0XHRpZiAoICFpbnB1dCB8fCB0aGlzLmxpc3QuX2ZpZWxkcy5pbmNsdWRlcyggdGhpcy5maWVsZCApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5saXN0Ll9maWVsZHMucHVzaCggdGhpcy5maWVsZCApO1xyXG5cdFx0aW5wdXQud2F0Y2goICgpID0+IHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQoKSApO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7SW5wdXREYXRhfGJvb2xlYW59XHJcblx0ICovXHJcblx0dGhpcy5nZXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxpc3Qucm9vdC5nZXRJbnB1dCggdGhpcy5maWVsZCApO1xyXG5cdH07XHJcblx0dGhpcy5pc1Bhc3NlZCAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XHJcblxyXG5cdFx0aWYgKCAhaW5wdXQgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaW5wdXQuY2hlY2tlci5jaGVjayggdGhpcywgaW5wdXQgKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHRoaXMuZmllbGQgICAgICAgID0gb3B0aW9ucy5maWVsZDtcclxuXHRcdHRoaXMub3BlcmF0b3IgICAgID0gb3B0aW9ucy5vcGVyYXRvcjtcclxuXHRcdHRoaXMucmVuZGVyX3N0YXRlID0gb3B0aW9ucy5yZW5kZXJfc3RhdGU7XHJcblx0XHR0aGlzLnVzZV9wcmVzZXQgICA9IG9wdGlvbnMudXNlX3ByZXNldDtcclxuXHRcdGxldCB2YWx1ZSAgICAgICAgID0gb3B0aW9ucz8udmFsdWU7XHJcblxyXG5cdFx0aWYgKCAhQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCggJywnICkubWFwKCBpdGVtID0+IGl0ZW0udHJpbSgpICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLnVzZV9wcmVzZXQgKSB7XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZhbHVlID0ge307XHJcblxyXG5cdFx0Zm9yICggY29uc3QgWyBpbmRleCwgZm9ybXVsYSBdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZSApICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLmxpc3Qucm9vdCApO1xyXG5cclxuXHRcdFx0Y3VycmVudC5vYnNlcnZlKCBmb3JtdWxhICk7XHJcblx0XHRcdGN1cnJlbnQuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudmFsdWVbIGluZGV4IF0gPSAnJyArIGN1cnJlbnQuY2FsY3VsYXRlKCk7XHJcblx0XHRcdFx0dGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjdXJyZW50LnNldFJlc3VsdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmFsdWUgPSBPYmplY3QudmFsdWVzKCB0aGlzLnZhbHVlICk7XHJcblx0fTtcclxufVxyXG5cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XHJcblxyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLmZpZWxkID0gbnVsbDtcclxuLyoqXHJcbiAqIEB0eXBlIHtBcnJheX1cclxuICovXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUudmFsdWUgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUgeydlcXVhbCd8J2dyZWF0ZXInfCdsZXNzJ3wnYmV0d2Vlbid8J29uZV9vZid8J2NvbnRhaW4nfVxyXG4gKi9cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS5vcGVyYXRvciA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cclxuICovXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUudXNlX3ByZXNldCA9IG51bGw7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25GaWVsZEl0ZW07IiwiLyoqXHJcbiAqIEBwcm9wZXJ0eSB7Q29uZGl0aW9uc0xpc3R8Q29uZGl0aW9uc0Jsb2NrTGlzdH0gbGlzdCBSZWxhdGVkIGxpc3RcclxuICovXHJcbmZ1bmN0aW9uIENvbmRpdGlvbkl0ZW0oKSB7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLm9ic2VydmUgICAgID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuc2V0T3B0aW9ucyAgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcbn07XHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLmlzUGFzc2VkICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdHRocm93IG5ldyBFcnJvcihcclxuXHRcdCdZb3UgbXVzdCBwcm92aWRlIENvbmRpdGlvbkl0ZW06OmlzUGFzc2VkIGZ1bmN0aW9uJyxcclxuXHQpO1xyXG59O1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5zZXRMaXN0ICAgICA9IGZ1bmN0aW9uICggbGlzdCApIHtcclxuXHR0aGlzLmxpc3QgPSBsaXN0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtKCkge1xyXG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuICdyZW5kZXJfc3RhdGUnID09PSBvcHRpb25zPy5vcGVyYXRvcjtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5nZXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxpc3Qucm9vdC5nZXRJbnB1dCggJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzJyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2V0SW5wdXQoKS53YXRjaCggKCkgPT4gdGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRPcHRpb25zID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0dGhpcy5yZW5kZXJfc3RhdGUgPSBvcHRpb25zLnJlbmRlcl9zdGF0ZSA/PyBbXTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmlzUGFzc2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5nZXRJbnB1dCgpO1xyXG5cclxuXHRcdGlmICggIXZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLnJlbmRlcl9zdGF0ZS5zb21lKCBjdXJyZW50ID0+IHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlLmN1cnJlbnQuaW5jbHVkZXMoIGN1cnJlbnQgKTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG59XHJcblxyXG5Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcclxuXHJcbkNvbmRpdGlvblJlbmRlclN0YXRlSXRlbS5wcm90b3R5cGUucmVuZGVyX3N0YXRlID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW07IiwiaW1wb3J0IENvbmRpdGlvbnNCbG9ja0xpc3QgZnJvbSAnLi9Db25kaXRpb25zQmxvY2tMaXN0JztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBkb0FjdGlvbixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcbmNvbnN0IHtcclxuXHQgICAgICBSZWFjdGl2ZVZhcixcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcbmNvbnN0IHtcclxuXHQgICAgICB2YWxpZGF0ZUlucHV0c0FsbCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuY29uc3QgX19yZUluaXRlZCA9IG5ldyBXZWFrU2V0KCk7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25hbEJsb2NrKCBub2RlLCBvYnNlcnZhYmxlICkge1xyXG5cdHRoaXMubm9kZSAgICAgICAgICAgPSBub2RlO1xyXG5cdG5vZGUuamZiQ29uZGl0aW9uYWwgPSB0aGlzO1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XHJcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtDb25kaXRpb25zQmxvY2tMaXN0fVxyXG5cdCAqL1xyXG5cdHRoaXMubGlzdCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtzdHJpbmcgfCBPYmplY3R9XHJcblx0ICovXHJcblx0dGhpcy5mdW5jdGlvbiA9IG51bGw7XHJcblx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtQYWdlU3RhdGV9XHJcblx0ICovXHJcblx0dGhpcy5wYWdlID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge011bHRpU3RlcFN0YXRlfVxyXG5cdCAqL1xyXG5cdHRoaXMubXVsdGlzdGVwID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge05vZGV9XHJcblx0ICovXHJcblx0dGhpcy5jb21tZW50ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YVtdfVxyXG5cdCAqL1xyXG5cdHRoaXMuaW5wdXRzID0gW107XHJcblxyXG5cdHRoaXMuaXNSaWdodCA9IG5ldyBSZWFjdGl2ZVZhciggbnVsbCApO1xyXG5cdHRoaXMuaXNSaWdodC5tYWtlKCk7XHJcblxyXG5cdHRoaXMuc2V0Q29uZGl0aW9ucygpO1xyXG5cdHRoaXMuc2V0SW5wdXRzKCk7XHJcblx0dGhpcy5zZXRGdW5jdGlvbigpO1xyXG5cclxuXHRpZiAoICF3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmRldm1vZGUgKSB7XHJcblx0XHRkZWxldGUgdGhpcy5ub2RlLmRhdGFzZXQuamZiQ29uZGl0aW9uYWw7XHJcblx0XHRkZWxldGUgdGhpcy5ub2RlLmRhdGFzZXQuamZiRnVuYztcclxuXHR9XHJcblxyXG5cdGRvQWN0aW9uKCAnamV0LmZiLmNvbmRpdGlvbmFsLmluaXQnLCB0aGlzICk7XHJcbn1cclxuXHJcbkNvbmRpdGlvbmFsQmxvY2sucHJvdG90eXBlID0ge1xyXG5cdHNldENvbmRpdGlvbnMoKSB7XHJcblx0XHRjb25zdCB7IGpmYkNvbmRpdGlvbmFsIH0gPSB0aGlzLm5vZGUuZGF0YXNldDtcclxuXHJcblx0XHR0aGlzLmxpc3QgICAgICAgPSBuZXcgQ29uZGl0aW9uc0Jsb2NrTGlzdCggamZiQ29uZGl0aW9uYWwsIHRoaXMucm9vdCApO1xyXG5cdFx0dGhpcy5saXN0LmJsb2NrID0gdGhpcztcclxuXHJcblx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmlzUmlnaHQuY3VycmVudCA9IHRoaXMubGlzdC5nZXRSZXN1bHQoKTtcclxuXHRcdH07XHJcblx0fSxcclxuXHRzZXRJbnB1dHMoKSB7XHJcblx0XHR0aGlzLmlucHV0cyA9IEFycmF5LmZyb20oXHJcblx0XHRcdHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLXN5bmNdJyApLFxyXG5cdFx0KS5tYXAoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5qZmJTeW5jLFxyXG5cdFx0KS5maWx0ZXIoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbSxcclxuXHRcdCk7XHJcblx0fSxcclxuXHRpbnNlcnRDb21tZW50KCkge1xyXG5cdFx0aWYgKCAhdGhpcy5zZXR0aW5ncz8uZG9tICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggJycgKTtcclxuXHJcblx0XHQvLyBpbnNlcnQgY29tbWVudCBhZnRlciBjb25kaXRpb25hbCBibG9ja1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxyXG5cdFx0XHR0aGlzLmNvbW1lbnQsXHJcblx0XHRcdHRoaXMubm9kZS5uZXh0U2libGluZyxcclxuXHRcdCk7XHJcblx0fSxcclxuXHRvYnNlcnZlKCkge1xyXG5cdFx0aWYgKCB0aGlzLmlzT2JzZXJ2ZWQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuaXNPYnNlcnZlZCA9IHRydWU7XHJcblx0XHR0aGlzLmluc2VydENvbW1lbnQoKTtcclxuXHJcblx0XHR0aGlzLmlzUmlnaHQud2F0Y2goICgpID0+IHRoaXMucnVuRnVuY3Rpb24oKSApO1xyXG5cdFx0dGhpcy5pc1JpZ2h0LndhdGNoKCAoKSA9PiB0aGlzLnZhbGlkYXRlSW5wdXRzKCkgKTtcclxuXHRcdHRoaXMubGlzdC5vYnNlcnZlKCk7XHJcblx0fSxcclxuXHRydW5GdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNSaWdodC5jdXJyZW50O1xyXG5cclxuXHRcdHN3aXRjaCAoIHRoaXMuZnVuY3Rpb24gKSB7XHJcblx0XHRcdGNhc2UgJ3Nob3cnOlxyXG5cdFx0XHRcdHRoaXMuc2hvd0Jsb2NrKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnaGlkZSc6XHJcblx0XHRcdFx0dGhpcy5zaG93QmxvY2soICFyZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZGlzYWJsZSc6XHJcblx0XHRcdFx0dGhpcy5kaXNhYmxlQmxvY2soIHJlc3VsdCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGRvQWN0aW9uKFxyXG5cdFx0XHRcdFx0J2pldC5mYi5jb25kaXRpb25hbC5ibG9jay5ydW5GdW5jdGlvbicsXHJcblx0XHRcdFx0XHR0aGlzLmZ1bmN0aW9uLFxyXG5cdFx0XHRcdFx0cmVzdWx0LFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIENvbXBhdGliaWxpdHkgd2l0aCBTYXZlIFByb2dyZXNzXHJcblx0ICogQHNpbmNlIDMuMC4xIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNDgwXHJcblx0ICpcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNTUzXHJcblx0ICovXHJcblx0dmFsaWRhdGVJbnB1dHMoKSB7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHZhbGlkYXRlSW5wdXRzQWxsKCB0aGlzLmlucHV0cywgdHJ1ZSApLlxyXG5cdFx0XHRcdHRoZW4oICgpID0+IHt9ICkuXHJcblx0XHRcdFx0Y2F0Y2goICgpID0+IHt9ICk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHRzaG93QmxvY2soIHJlc3VsdCApIHtcclxuXHRcdHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnamV0LWZvcm0tYnVpbGRlci0taGlkZGVuJyApO1xyXG5cclxuXHRcdGlmICggdGhpcy5zZXR0aW5ncz8uZG9tICkge1xyXG5cdFx0XHR0aGlzLnNob3dCbG9ja0RvbSggcmVzdWx0ICk7XHJcblx0XHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZWluaXRDaGlsZHJlbigpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jay9ibG9jay10b2dnbGUtaGlkZGVuLWRvbScsIHtcclxuXHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdGJsb2NrOiB0aGlzLm5vZGUsXHJcblx0XHRcdFx0XHRyZXN1bHQ6IHJlc3VsdFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZS5zdHlsZS5kaXNwbGF5ID0gcmVzdWx0ID8gJ2Jsb2NrJyA6ICdub25lJztcclxuXHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlaW5pdENoaWxkcmVuKCkpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2hvd0Jsb2NrRG9tKCByZXN1bHQgKSB7XHJcblx0XHRjb25zdCBpbnB1dHNMaXN0ID0gdGhpcy5yb290LmRhdGFJbnB1dHM7XHJcblxyXG5cdFx0aWYgKCAhcmVzdWx0ICkge1xyXG5cdFx0XHR0aGlzLm5vZGUucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLnJlQ2FsY3VsYXRlRmllbGRzKCBpbnB1dHNMaXN0ICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmNvbW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoIHRoaXMubm9kZSwgdGhpcy5jb21tZW50ICk7XHJcblxyXG5cdFx0dGhpcy5yZUNhbGN1bGF0ZUZpZWxkcyggaW5wdXRzTGlzdCApO1xyXG5cdH0sXHJcblx0ZGlzYWJsZUJsb2NrKCByZXN1bHQgKSB7XHJcblx0XHR0aGlzLm5vZGUuZGlzYWJsZWQgPSByZXN1bHQ7XHJcblx0fSxcclxuXHRzZXRGdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuZnVuY3Rpb24gPSB0aGlzLm5vZGUuZGF0YXNldC5qZmJGdW5jO1xyXG5cclxuXHRcdGxldCBwYXJzZWQ7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRwYXJzZWQgPSBKU09OLnBhcnNlKCB0aGlzLmZ1bmN0aW9uICk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBbIFsgbmFtZSwgc2V0dGluZ3MgXSBdID0gT2JqZWN0LmVudHJpZXMoIHBhcnNlZCApO1xyXG5cclxuXHRcdHRoaXMuZnVuY3Rpb24gPSBuYW1lO1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG5cdH0sXHJcblx0cmVpbml0Q2hpbGRyZW4oKSB7XHJcblx0XHRjb25zdCByb290ID0gdGhpcy5yb290O1xyXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzLm5vZGU7XHJcblxyXG5cdFx0Y29uc3Qgbm9kZXMgPSBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qZmItY29uZGl0aW9uYWxdW2RhdGEtamZiLWZ1bmNdJyk7XHJcblx0XHRub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XHJcblx0XHRcdGlmIChub2RlLmpmYkNvbmRpdGlvbmFsIHx8IF9fcmVJbml0ZWQuaGFzKG5vZGUpKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgY2hpbGQgPSBuZXcgQ29uZGl0aW9uYWxCbG9jayhub2RlLCByb290KTtcclxuXHRcdFx0XHRjaGlsZC5vYnNlcnZlKCk7XHJcblx0XHRcdFx0Y2hpbGQuaXNSaWdodC5jdXJyZW50ID0gY2hpbGQubGlzdC5nZXRSZXN1bHQoKTtcclxuXHRcdFx0XHRfX3JlSW5pdGVkLmFkZChub2RlKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGlmIChjb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdyZWluaXRDaGlsZHJlbjogaW5pdCBmYWlsZWQnLCBlLCBub2RlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogUmVjYWxjdWxhdGlvbiBvZiBmb3JtdWxhc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpbnB1dHNMaXN0IC0gTGlzdCBvZiBmaWVsZHNcclxuXHQgKi9cclxuXHRyZUNhbGN1bGF0ZUZpZWxkcyggaW5wdXRzTGlzdCApIHtcclxuXHRcdC8vIEdldCBvbmx5IGZpZWxkcyB0aGF0IGFyZSBpbiB0aGUgY3VycmVudCBibG9ja1xyXG5cdFx0Y29uc3QgYWZmZWN0ZWRGaWVsZHMgPSB0aGlzLmdldEFmZmVjdGVkRmllbGRzKCBpbnB1dHNMaXN0ICk7XHJcblxyXG5cdFx0Ly8gQ2FjaGUgZm9yIHZpc2liaWxpdHkgY2hlY2tzXHJcblx0XHRjb25zdCB2aXNpYmlsaXR5Q2FjaGUgPSBuZXcgTWFwKCk7XHJcblxyXG5cdFx0YWZmZWN0ZWRGaWVsZHMuZm9yRWFjaCgga2V5ID0+IHtcclxuXHRcdFx0aWYgKCBpbnB1dHNMaXN0W2tleV0gJiYgaW5wdXRzTGlzdFtrZXldLmZvcm11bGEgKSB7XHJcblx0XHRcdFx0Y29uc3QgZmllbGROb2RlID0gaW5wdXRzTGlzdFtrZXldLm5vZGVzPy5bMF07XHJcblxyXG5cdFx0XHRcdC8vIFVzZSBjYWNoZSBmb3IgdmlzaWJpbGl0eSBjaGVja3NcclxuXHRcdFx0XHRsZXQgc2hvdWxkUmVjYWxjdWxhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHRpZiAoIGZpZWxkTm9kZSApIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gZmllbGROb2RlO1xyXG5cdFx0XHRcdFx0aWYgKCAhdmlzaWJpbGl0eUNhY2hlLmhhcyggY2FjaGVLZXkgKSApIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgaXNWaXNpYmxlID0gdGhpcy5pc0ZpZWxkVmlzaWJsZSggZmllbGROb2RlICk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGlzSW5ET00gICA9IGRvY3VtZW50LmNvbnRhaW5zKCBmaWVsZE5vZGUgKTtcclxuXHRcdFx0XHRcdFx0dmlzaWJpbGl0eUNhY2hlLnNldCggY2FjaGVLZXksIGlzVmlzaWJsZSB8fCBpc0luRE9NICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzaG91bGRSZWNhbGN1bGF0ZSA9IHZpc2liaWxpdHlDYWNoZS5nZXQoIGNhY2hlS2V5ICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHNob3VsZFJlY2FsY3VsYXRlICkge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0aW5wdXRzTGlzdFtrZXldLnJlQ2FsY3VsYXRlRm9ybXVsYSgpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oIGBFcnJvciByZWNhbGN1bGF0aW5nIGZvcm11bGEgZm9yIGZpZWxkICR7a2V5fTpgLCBlcnJvciApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIGlmIGZpZWxkIGlzIHZpc2libGUgb24gdGhlIHBhZ2VcclxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmaWVsZE5vZGUgLSBET00gZWxlbWVudCBvZiB0aGUgZmllbGRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSB0cnVlIGlmIGZpZWxkIGlzIHZpc2libGVcclxuXHQgKi9cclxuXHRpc0ZpZWxkVmlzaWJsZSggZmllbGROb2RlICkge1xyXG5cdFx0aWYgKCAhIGZpZWxkTm9kZSApIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHQvLyBDaGVjayBpZiBlbGVtZW50IGlzIGluIERPTVxyXG5cdFx0aWYgKCAhIGRvY3VtZW50LmNvbnRhaW5zKCBmaWVsZE5vZGUgKSApIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHQvLyBDaGVjayB2aXNpYmlsaXR5IHN0eWxlc1xyXG5cdFx0Y29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBmaWVsZE5vZGUgKTtcclxuXHJcblx0XHRpZiAoICdub25lJyA9PT0gY29tcHV0ZWRTdHlsZS5kaXNwbGF5IHx8ICdoaWRkZW4nID09PSBjb21wdXRlZFN0eWxlLnZpc2liaWxpdHkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDaGVjayBpZiBlbGVtZW50IGlzIG5vdCBoaWRkZW4gYnkgcGFyZW50IGVsZW1lbnRzXHJcblx0XHRsZXQgcGFyZW50ID0gZmllbGROb2RlLnBhcmVudEVsZW1lbnQ7XHJcblxyXG5cdFx0d2hpbGUgKCBwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudC5ib2R5ICkge1xyXG5cdFx0XHRjb25zdCBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBwYXJlbnQgKTtcclxuXHRcdFx0aWYgKCAnbm9uZScgPT09IHBhcmVudFN0eWxlLmRpc3BsYXkgfHwgJ2hpZGRlbicgPT09IHBhcmVudFN0eWxlLnZpc2liaWxpdHkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogR2V0cyBsaXN0IG9mIGZpZWxkcyBhZmZlY3RlZCBieSBjdXJyZW50IGNvbmRpdGlvbmFsIGJsb2NrXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGlucHV0c0xpc3QgLSBMaXN0IG9mIGFsbCBmaWVsZHNcclxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IC0gQXJyYXkgb2YgYWZmZWN0ZWQgZmllbGQga2V5c1xyXG5cdCAqL1xyXG5cdGdldEFmZmVjdGVkRmllbGRzKCBpbnB1dHNMaXN0ICkge1xyXG5cdFx0Y29uc3QgYWZmZWN0ZWRGaWVsZHMgPSBbXTtcclxuXHJcblx0XHQvLyBHZXQgYWxsIGZpZWxkcyBpbnNpZGUgY3VycmVudCBibG9ja1xyXG5cdFx0Y29uc3QgYmxvY2tGaWVsZHMgICAgID0gQXJyYXkuZnJvbSggdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItc3luY10nICkgKTtcclxuXHRcdGNvbnN0IGJsb2NrRmllbGROYW1lcyA9IG5ldyBTZXQoKTtcclxuXHJcblx0XHQvLyBDb2xsZWN0IGZpZWxkIG5hbWVzIGluc2lkZSBibG9ja1xyXG5cdFx0YmxvY2tGaWVsZHMuZm9yRWFjaCggZmllbGROb2RlID0+IHtcclxuXHRcdFx0Y29uc3QgZmllbGROYW1lID0gZmllbGROb2RlLmdldEF0dHJpYnV0ZSggJ25hbWUnICk7XHJcblxyXG5cdFx0XHRpZiAoIGZpZWxkTmFtZSApIHtcclxuXHRcdFx0XHRibG9ja0ZpZWxkTmFtZXMuYWRkKCBmaWVsZE5hbWUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdE9iamVjdC5rZXlzKCBpbnB1dHNMaXN0ICkuZm9yRWFjaCgga2V5ID0+IHtcclxuXHRcdFx0Y29uc3QgZmllbGQgPSBpbnB1dHNMaXN0W2tleV07XHJcblxyXG5cdFx0XHRpZiAoICEgZmllbGQgfHwgISBmaWVsZC5mb3JtdWxhICkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Y29uc3QgZmllbGROb2RlID0gZmllbGQubm9kZXM/LlswXTtcclxuXHRcdFx0bGV0IHNob3VsZFJlY2FsY3VsYXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyAxLiBGaWVsZCBpcyBpbnNpZGUgdGhlIGJsb2NrXHJcblx0XHRcdGlmICggZmllbGROb2RlICYmIGJsb2NrRmllbGRzLmluY2x1ZGVzKCBmaWVsZE5vZGUgKSApIHtcclxuXHRcdFx0XHRzaG91bGRSZWNhbGN1bGF0ZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIDIuIEZpZWxkIGRlcGVuZHMgb24gZmllbGRzIGluc2lkZSBibG9jayAoY2hlY2sgZm9ybXVsYSlcclxuXHRcdFx0aWYgKCAhIHNob3VsZFJlY2FsY3VsYXRlICYmIGZpZWxkLmZvcm11bGEgKSB7XHJcblx0XHRcdFx0YmxvY2tGaWVsZE5hbWVzLmZvckVhY2goIGJsb2NrRmllbGROYW1lID0+IHtcclxuXHRcdFx0XHRcdGlmICggZmllbGQuZm9ybXVsYS5pbmNsdWRlcyggYCUke2Jsb2NrRmllbGROYW1lfSVgICkgKSB7XHJcblx0XHRcdFx0XHRcdHNob3VsZFJlY2FsY3VsYXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggc2hvdWxkUmVjYWxjdWxhdGUgKSB7XHJcblx0XHRcdFx0YWZmZWN0ZWRGaWVsZHMucHVzaCgga2V5ICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gYWZmZWN0ZWRGaWVsZHM7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbmFsQmxvY2s7IiwiaW1wb3J0IENvbmRpdGlvbnNMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0xpc3QnO1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uc0Jsb2NrTGlzdCggY29uZGl0aW9ucywgcm9vdCApIHtcclxuXHRDb25kaXRpb25zTGlzdC5jYWxsKCB0aGlzLCBjb25kaXRpb25zLCByb290ICk7XHJcbn1cclxuXHJcbkNvbmRpdGlvbnNCbG9ja0xpc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uc0xpc3QucHJvdG90eXBlICk7XHJcbi8qKlxyXG4gKiBAdHlwZSB7Q29uZGl0aW9uYWxCbG9ja31cclxuICovXHJcbkNvbmRpdGlvbnNCbG9ja0xpc3QucHJvdG90eXBlLmJsb2NrID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbnNCbG9ja0xpc3Q7IiwiaW1wb3J0IHsgY3JlYXRlQ29uZGl0aW9uSXRlbSB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuaW1wb3J0IE9yT3BlcmF0b3JJdGVtIGZyb20gJy4vT3JPcGVyYXRvckl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uc0xpc3QoIGNvbmRpdGlvbnMsIHJvb3QgKSB7XHJcblx0dGhpcy5yb290ID0gcm9vdDtcclxuXHR0aGlzLnNldENvbmRpdGlvbnMoIGNvbmRpdGlvbnMgKTtcclxufVxyXG5cclxuQ29uZGl0aW9uc0xpc3QucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdHJvb3Q6IG51bGwsXHJcblx0Y29uZGl0aW9uczogW10sXHJcblx0aW52YWxpZDogW10sXHJcblx0Z3JvdXBzOiBbXSxcclxuXHQvKipcclxuXHQgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgY2FsbGJhY2suXHJcblx0ICogSXQgdXNlZCBpbiBDb25kaXRpb25GaWVsZEl0ZW0uXHJcblx0ICpcclxuXHQgKiBSdW5zIGV2ZXJ5IHRpbWUsIHdoZW4gY29uZGl0aW9ucyBpcyBtYXRjaFxyXG5cdCAqL1xyXG5cdG9uQ2hhbmdlUmVsYXRlZCgpIHtcclxuXHRcdGlmICggIXRoaXMuZ2V0UmVzdWx0KCkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMub25NYXRjaENvbmRpdGlvbnMoKTtcclxuXHR9LFxyXG5cdG9uTWF0Y2hDb25kaXRpb25zKCkge30sXHJcblx0b2JzZXJ2ZSgpIHtcclxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmdldENvbmRpdGlvbnMoKSApIHtcclxuXHRcdFx0Y29uZGl0aW9uLm9ic2VydmUoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNldENvbmRpdGlvbnMoIGNvbmRpdGlvbnMgKSB7XHJcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgY29uZGl0aW9ucyApIHtcclxuXHRcdFx0Y29uZGl0aW9ucyA9IEpTT04ucGFyc2UoIGNvbmRpdGlvbnMgKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbmRpdGlvbnMgPSBjb25kaXRpb25zLm1hcChcclxuXHRcdFx0aXRlbSA9PiBjcmVhdGVDb25kaXRpb25JdGVtKCBpdGVtLCB0aGlzICksXHJcblx0XHQpLmZpbHRlciggaXRlbSA9PiBpdGVtICk7XHJcblxyXG5cdFx0Y29uc3QgZ3JvdXBzICAgPSB7fTtcclxuXHRcdGxldCBncm91cEluZGV4ID0gMDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgdGhpcy5nZXRDb25kaXRpb25zKCkgKSB7XHJcblx0XHRcdGlmICggY29uZGl0aW9uIGluc3RhbmNlb2YgT3JPcGVyYXRvckl0ZW0gKSB7XHJcblx0XHRcdFx0Z3JvdXBJbmRleCsrO1xyXG5cclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRncm91cHNbIGdyb3VwSW5kZXggXSA9IGdyb3Vwc1sgZ3JvdXBJbmRleCBdID8/IFtdO1xyXG5cdFx0XHRncm91cHNbIGdyb3VwSW5kZXggXS5wdXNoKCBjb25kaXRpb24gKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdyb3VwcyA9IE9iamVjdC52YWx1ZXMoIGdyb3VwcyApO1xyXG5cdH0sXHJcblx0Z2V0UmVzdWx0KCkge1xyXG5cdFx0dGhpcy5pbnZhbGlkID0gW107XHJcblxyXG5cdFx0aWYgKCAhdGhpcy5ncm91cHMubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCBjb25zdCBncm91cCBvZiB0aGlzLmdyb3VwcyApIHtcclxuXHRcdFx0aWYgKCB0aGlzLmlzVmFsaWRHcm91cCggZ3JvdXAgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGlzVmFsaWRHcm91cCggY29uZGl0aW9uc0dyb3VwICkge1xyXG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIGNvbmRpdGlvbnNHcm91cCApIHtcclxuXHRcdFx0aWYgKCBjb25kaXRpb24uaXNQYXNzZWQoKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmludmFsaWQucHVzaCggY29uZGl0aW9uICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtBcnJheTxDb25kaXRpb25GaWVsZEl0ZW0gfCBDb25kaXRpb25QYWdlU3RhdGVJdGVtPn1cclxuXHQgKi9cclxuXHRnZXRDb25kaXRpb25zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZGl0aW9ucztcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uc0xpc3Q7IiwiaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBnZXRUaW1lc3RhbXAsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuY29uc3Qge1xyXG5cdCAgICAgIE1pbl9Jbl9TZWMsXHJcblx0ICAgICAgTWlsbGlfSW5fU2VjLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJDb25zdDtcclxuXHJcbmNvbnN0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuXHJcbmZ1bmN0aW9uIERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcigpIHtcclxuXHRDb25kaXRpb25DaGVja2VyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdHJldHVybiBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBjb25kaXRpb24ge0NvbmRpdGlvbkZpZWxkSXRlbX1cclxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5jaGVjayA9IGZ1bmN0aW9uICggY29uZGl0aW9uLCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IHsgdGltZTogY3VycmVudCB9ID0gZ2V0VGltZXN0YW1wKCBpbnB1dC52YWx1ZS5jdXJyZW50ICk7XHJcblx0XHRjb25zdCBjb25kaXRpb25WYWx1ZSAgICAgID0gY29uZGl0aW9uLnZhbHVlLm1hcCggdmFsdWUgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHRpbWUsIHR5cGUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHJcblx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGUgJiYgY29uZGl0aW9uLnVzZV9wcmVzZXQgKSB7XHJcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG5cdFx0XHRcdHJldHVybiB0aW1lICogTWlsbGlfSW5fU2VjICsgb2Zmc2V0ICogTWluX0luX1NlYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRpbWU7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcjsiLCJpbXBvcnQgQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0NvbmRpdGlvbkNoZWNrZXInO1xyXG5cclxuZnVuY3Rpb24gTXVsdGlwbGVDb25kaXRpb25DaGVja2VyKCkge1xyXG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLm9wZXJhdG9ycy5vbmVfb2YgPSAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlcyApID0+IHtcclxuXHRcdGlmICggIWNvbmRpdGlvblZhbHVlcz8ubGVuZ3RoIHx8ICFjdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjdXJyZW50LnNvbWUoXHJcblx0XHRcdHZhbCA9PiAtMSAhPT0gY29uZGl0aW9uVmFsdWVzLmluZGV4T2YoIHZhbCApLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9wZXJhdG9ycy5jb250YWluID0gKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZXMgKSA9PiB7XHJcblx0XHRpZiAoICFjdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjdXJyZW50LnNvbWUoXHJcblx0XHRcdHZhbCA9PiB2YWwuaW5kZXhPZiggY29uZGl0aW9uVmFsdWVzWyAwIF0gKSAhPT0gLTEsXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuIGlucHV0LmlzQXJyYXkoKTtcclxuXHR9O1xyXG59XHJcblxyXG5NdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcjtcclxuIiwiaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcclxuXHJcbmZ1bmN0aW9uIE9yT3BlcmF0b3JJdGVtKCkge1xyXG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0b3B0aW9ucy5vcl9vcGVyYXRvciA/PyBmYWxzZVxyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcblxyXG5Pck9wZXJhdG9ySXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JPcGVyYXRvckl0ZW07IiwiaW1wb3J0IENvbmRpdGlvbkZpZWxkSXRlbSBmcm9tICcuL0NvbmRpdGlvbkZpZWxkSXRlbSc7XHJcbmltcG9ydCBDb25kaXRpb25hbEJsb2NrIGZyb20gJy4vQ29uZGl0aW9uYWxCbG9jayc7XHJcbmltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcbmltcG9ydCBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9NdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXInO1xyXG5pbXBvcnQgT3JPcGVyYXRvckl0ZW0gZnJvbSAnLi9Pck9wZXJhdG9ySXRlbSc7XHJcbmltcG9ydCBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXInO1xyXG5pbXBvcnQgQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtIGZyb20gJy4vQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtJztcclxuaW1wb3J0IENhbGN1bGF0ZWRGaWVsZENoZWNrZXIgZnJvbSAnLi9DYWxjdWxhdGVkRmllbGRDaGVja2VyJztcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3QgZ2V0SXRlbVR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwudHlwZXMnLFxyXG5cdFtcclxuXHRcdENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSxcclxuXHRcdE9yT3BlcmF0b3JJdGVtLFxyXG5cdFx0Q29uZGl0aW9uRmllbGRJdGVtLFxyXG5cdF0sXHJcbik7XHJcbi8qKlxyXG4gKiBAdHlwZSB7Q29uZGl0aW9uSXRlbVtdfVxyXG4gKi9cclxubGV0IGl0ZW1UeXBlcyAgICAgID0gW107XHJcblxyXG5jb25zdCBnZXRDaGVja2VycyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLmNoZWNrZXJzJyxcclxuXHRbXHJcblx0XHRNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIsXHJcblx0XHREYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIsXHJcblx0XHRDYWxjdWxhdGVkRmllbGRDaGVja2VyLFxyXG5cdFx0Q29uZGl0aW9uQ2hlY2tlcixcclxuXHRdLFxyXG4pO1xyXG5cclxubGV0IGNoZWNrZXJzID0gW107XHJcblxyXG4vKipcclxuICogQHBhcmFtICBvcHRpb25zIHt7fX1cclxuICogQHBhcmFtICBsaXN0ICAgIHtDb25kaXRpb25zTGlzdH1cclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIG9wdGlvbnMsIGxpc3QgKSB7XHJcblx0aWYgKCAhaXRlbVR5cGVzLmxlbmd0aCApIHtcclxuXHRcdGl0ZW1UeXBlcyA9IGdldEl0ZW1UeXBlcygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgZGF0YVR5cGUgb2YgaXRlbVR5cGVzICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7Q29uZGl0aW9uSXRlbX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBkYXRhVHlwZSgpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG9wdGlvbnMgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjdXJyZW50LnNldExpc3QoIGxpc3QgKTtcclxuXHRcdGN1cnJlbnQuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZVxyXG4gKiBAcGFyYW0gIHJvb3RcclxuICogQHJldHVybiB7Q29uZGl0aW9uYWxCbG9ja31cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2soIG5vZGUsIHJvb3QgKSB7XHJcblx0aWYgKCBub2RlLmhhc093blByb3BlcnR5KCAnamZiQ29uZGl0aW9uYWwnICkgKSB7XHJcblx0XHRyZXR1cm4gbm9kZS5qZmJDb25kaXRpb25hbDtcclxuXHR9XHJcblx0Y29uc3QgYmxvY2sgPSBuZXcgQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgcm9vdCApO1xyXG5cclxuXHRibG9jay5vYnNlcnZlKCk7XHJcblx0YmxvY2subGlzdC5vbkNoYW5nZVJlbGF0ZWQoKTtcclxuXHJcblx0cmV0dXJuIGJsb2NrO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDaGVja2VyKCBpbnB1dCApIHtcclxuXHRpZiAoICFjaGVja2Vycy5sZW5ndGggKSB7XHJcblx0XHRjaGVja2VycyA9IGdldENoZWNrZXJzKCk7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBjb25zdCBjaGVja2VyIG9mIGNoZWNrZXJzICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBjaGVja2VyKCk7XHJcblxyXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggaW5wdXQgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRjcmVhdGVDb25kaXRpb25JdGVtLFxyXG5cdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2ssXHJcblx0Y3JlYXRlQ2hlY2tlcixcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUNoZWNrZXIsIGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2sgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBDb25kaXRpb25hbEJsb2NrIGZyb20gJy4vQ29uZGl0aW9uYWxCbG9jayc7XHJcbmltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XHJcbmltcG9ydCBDb25kaXRpb25zTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNMaXN0JztcclxuXHJcbmNvbnN0IHsgYWRkQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxyXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcclxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygb2JzZXJ2YWJsZS5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRgW2RhdGEtamZiLWNvbmRpdGlvbmFsXWAsXHJcblx0XHQpICkge1xyXG5cdFx0XHRjcmVhdGVDb25kaXRpb25hbEJsb2NrKCBub2RlLCBvYnNlcnZhYmxlICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQyMCxcclxuKTtcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLmlucHV0Lm1ha2VSZWFjdGl2ZScsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxyXG5cdGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRpbnB1dC5jaGVja2VyID0gY3JlYXRlQ2hlY2tlciggaW5wdXQgKTtcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwuYmxvY2sucnVuRnVuY3Rpb24nLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrJyxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gZnVuY05hbWVcclxuXHQgKiBAcGFyYW0gcmVzdWx0XHJcblx0ICogQHBhcmFtIGNvbmRpdGlvbmFsQmxvY2sge0NvbmRpdGlvbmFsQmxvY2t9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gKCBmdW5jTmFtZSwgcmVzdWx0LCBjb25kaXRpb25hbEJsb2NrICkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHQnc2V0Q3NzQ2xhc3MnICE9PSBmdW5jTmFtZSB8fFxyXG5cdFx0XHQhY29uZGl0aW9uYWxCbG9jay5zZXR0aW5ncz8uY2xhc3NOYW1lXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbmRpdGlvbmFsQmxvY2subm9kZS5jbGFzc0xpc3QudG9nZ2xlKFxyXG5cdFx0XHRjb25kaXRpb25hbEJsb2NrLnNldHRpbmdzLmNsYXNzTmFtZSxcclxuXHRcdFx0cmVzdWx0LFxyXG5cdFx0KTtcclxuXHR9LFxyXG4pO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XHJcblx0Li4uKFxyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cclxuXHQpLFxyXG5cdENvbmRpdGlvbkl0ZW0sXHJcblx0Q29uZGl0aW9uYWxCbG9jayxcclxuXHRjcmVhdGVDb25kaXRpb25hbEJsb2NrLFxyXG5cdGNyZWF0ZUNoZWNrZXIsXHJcblx0Q29uZGl0aW9uc0xpc3QsXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==