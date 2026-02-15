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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzVkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9DYWxjdWxhdGVkRmllbGRDaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uRmllbGRJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbmFsQmxvY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uc0Jsb2NrTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svTXVsdGlwbGVDb25kaXRpb25DaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL09yT3BlcmF0b3JJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5cbmZ1bmN0aW9uIENhbGN1bGF0ZWRGaWVsZENoZWNrZXIoKSB7XG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiAnY2FsY3VsYXRlZCcgPT09IGlucHV0LmlucHV0VHlwZTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgID0gaW5wdXQuY2FsY1ZhbHVlO1xuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlID0gY29uZGl0aW9uLnZhbHVlO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcblx0fTtcbn1cblxuQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRGaWVsZENoZWNrZXI7IiwiY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBDb25kaXRpb25DaGVja2VyKCkge1xuXHR0aGlzLm9wZXJhdG9ycyA9IHRoaXMuZ2V0T3BlcmF0b3JzKCk7XG59XG5cbkNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxuXHRvcGVyYXRvcnM6IHt9LFxuXHRnZXRPcGVyYXRvcnMgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlcXVhbDogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IGN1cnJlbnQgPT09XG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF0sXG5cdFx0XHRlbXB0eTogKCBjdXJyZW50ICkgPT4gaXNFbXB0eSggY3VycmVudCApLFxuXHRcdFx0Z3JlYXRlcjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdCkgPiArKFxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXG5cdFx0XHQpLFxuXHRcdFx0Z3JlYXRlcl9vcl9lcTogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdCkgPj0gKyhcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxuXHRcdFx0KSxcblx0XHRcdGxlc3M6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxuXHRcdFx0XHRjdXJyZW50XG5cdFx0XHQpIDwgKyhcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxuXHRcdFx0KSxcblx0XHRcdGxlc3Nfb3JfZXE6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxuXHRcdFx0XHRjdXJyZW50XG5cdFx0XHQpIDw9ICsoXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cblx0XHRcdCksXG5cdFx0XHRiZXR3ZWVuOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xuXHRcdFx0XHRpZiAoICFjb25kaXRpb25WYWx1ZT8ubGVuZ3RoIHx8IG51bGwgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdIDw9ICtjdXJyZW50ICYmXG5cdFx0XHRcdFx0K2N1cnJlbnQgPD0gY29uZGl0aW9uVmFsdWVbIDEgXVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdG9uZV9vZjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcblx0XHRcdFx0aWYgKCAhY29uZGl0aW9uVmFsdWU/Lmxlbmd0aCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gMCA8PSBjb25kaXRpb25WYWx1ZS5pbmRleE9mKCBjdXJyZW50ICk7XG5cdFx0XHR9LFxuXHRcdFx0Y29udGFpbjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcblx0XHRcdFx0aWYgKCAhY3VycmVudCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIDAgPD0gY3VycmVudC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZVsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdH07XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cblx0ICovXG5cdGNoZWNrICggY29uZGl0aW9uLCBpbnB1dCApIHtcblx0XHRjb25zdCBjdXJyZW50ICAgICAgICA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgPSBjb25kaXRpb24udmFsdWU7XG5cblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xuXHR9LFxuXHRjaGVja1JhdyAoIG9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApIHtcblx0XHRpZiAoIHRoaXMub3BlcmF0b3JzLmhhc093blByb3BlcnR5KCBvcGVyYXRvciApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3BlcmF0b3JzWyBvcGVyYXRvciBdKFxuXHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCAwICE9PSBvcGVyYXRvci5pbmRleE9mKCAnbm90XycgKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBvcGVyYXRvck5hbWUgPSBvcGVyYXRvci5zbGljZSggNCApO1xuXG5cdFx0aWYgKCAhdGhpcy5vcGVyYXRvcnMuaGFzT3duUHJvcGVydHkoIG9wZXJhdG9yTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhdGhpcy5vcGVyYXRvcnNbIG9wZXJhdG9yTmFtZSBdKFxuXHRcdFx0Y3VycmVudCxcblx0XHRcdGNvbmRpdGlvblZhbHVlLFxuXHRcdCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XG5cbmNvbnN0IHsgQ2FsY3VsYXRlZEZvcm11bGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIENvbmRpdGlvbkZpZWxkSXRlbSgpIHtcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHRyZXR1cm4gISFvcHRpb25zPy5maWVsZD8ubGVuZ3RoO1xuXHR9O1xuXHR0aGlzLm9ic2VydmUgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGlucHV0ICAgICAgID0gdGhpcy5nZXRJbnB1dCgpO1xuXHRcdHRoaXMubGlzdC5fZmllbGRzID0gdGhpcy5saXN0Ll9maWVsZHMgPz8gW107XG5cblx0XHRpZiAoICFpbnB1dCB8fCB0aGlzLmxpc3QuX2ZpZWxkcy5pbmNsdWRlcyggdGhpcy5maWVsZCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGlzdC5fZmllbGRzLnB1c2goIHRoaXMuZmllbGQgKTtcblx0XHRpbnB1dC53YXRjaCggKCkgPT4gdGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XG5cdH07XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtJbnB1dERhdGF8Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuZ2V0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdC5yb290LmdldElucHV0KCB0aGlzLmZpZWxkICk7XG5cdH07XG5cdHRoaXMuaXNQYXNzZWQgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuXHRcdGlmICggIWlucHV0ICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dC5jaGVja2VyLmNoZWNrKCB0aGlzLCBpbnB1dCApO1xuXHR9O1xuXHR0aGlzLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5maWVsZCAgICAgICAgPSBvcHRpb25zLmZpZWxkO1xuXHRcdHRoaXMub3BlcmF0b3IgICAgID0gb3B0aW9ucy5vcGVyYXRvcjtcblx0XHR0aGlzLnJlbmRlcl9zdGF0ZSA9IG9wdGlvbnMucmVuZGVyX3N0YXRlO1xuXHRcdHRoaXMudXNlX3ByZXNldCAgID0gb3B0aW9ucy51c2VfcHJlc2V0O1xuXHRcdGxldCB2YWx1ZSAgICAgICAgID0gb3B0aW9ucz8udmFsdWU7XG5cblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCggJywnICkubWFwKCBpdGVtID0+IGl0ZW0udHJpbSgpICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLnVzZV9wcmVzZXQgKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0ge307XG5cblx0XHRmb3IgKCBjb25zdCBbIGluZGV4LCBmb3JtdWxhIF0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlICkgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLmxpc3Qucm9vdCApO1xuXG5cdFx0XHRjdXJyZW50Lm9ic2VydmUoIGZvcm11bGEgKTtcblx0XHRcdGN1cnJlbnQuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlWyBpbmRleCBdID0gJycgKyBjdXJyZW50LmNhbGN1bGF0ZSgpO1xuXHRcdFx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y3VycmVudC5zZXRSZXN1bHQoKTtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gT2JqZWN0LnZhbHVlcyggdGhpcy52YWx1ZSApO1xuXHR9O1xufVxuXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcblxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS5maWVsZCA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS52YWx1ZSA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHsnZXF1YWwnfCdncmVhdGVyJ3wnbGVzcyd8J2JldHdlZW4nfCdvbmVfb2YnfCdjb250YWluJ31cbiAqL1xuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS5vcGVyYXRvciA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLnVzZV9wcmVzZXQgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25GaWVsZEl0ZW07IiwiLyoqXG4gKiBAcHJvcGVydHkge0NvbmRpdGlvbnNMaXN0fENvbmRpdGlvbnNCbG9ja0xpc3R9IGxpc3QgUmVsYXRlZCBsaXN0XG4gKi9cbmZ1bmN0aW9uIENvbmRpdGlvbkl0ZW0oKSB7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5vYnNlcnZlICAgICA9IGZ1bmN0aW9uICgpIHtcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLnNldE9wdGlvbnMgID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xufTtcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLmlzUGFzc2VkICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0J1lvdSBtdXN0IHByb3ZpZGUgQ29uZGl0aW9uSXRlbTo6aXNQYXNzZWQgZnVuY3Rpb24nLFxuXHQpO1xufTtcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLnNldExpc3QgICAgID0gZnVuY3Rpb24gKCBsaXN0ICkge1xuXHR0aGlzLmxpc3QgPSBsaXN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xuXG5mdW5jdGlvbiBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0oKSB7XG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0cmV0dXJuICdyZW5kZXJfc3RhdGUnID09PSBvcHRpb25zPy5vcGVyYXRvcjtcblx0fTtcblxuXHQvKipcblx0ICogQHJldHVybiB7SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5nZXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0LnJvb3QuZ2V0SW5wdXQoICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlcycgKTtcblx0fTtcblxuXHR0aGlzLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5nZXRJbnB1dCgpLndhdGNoKCAoKSA9PiB0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcblx0fTtcblxuXHR0aGlzLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5yZW5kZXJfc3RhdGUgPSBvcHRpb25zLnJlbmRlcl9zdGF0ZSA/PyBbXTtcblx0fTtcblxuXHR0aGlzLmlzUGFzc2VkID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuXHRcdGlmICggIXZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJfc3RhdGUuc29tZSggY3VycmVudCA9PiB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuY3VycmVudC5pbmNsdWRlcyggY3VycmVudCApO1xuXHRcdH0gKTtcblx0fTtcbn1cblxuQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XG5cbkNvbmRpdGlvblJlbmRlclN0YXRlSXRlbS5wcm90b3R5cGUucmVuZGVyX3N0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvblJlbmRlclN0YXRlSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uc0Jsb2NrTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNCbG9ja0xpc3QnO1xuXG5jb25zdCB7XG5cdCAgICAgIGRvQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5jb25zdCB7XG5cdCAgICAgIFJlYWN0aXZlVmFyLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5jb25zdCB7XG5cdCAgICAgIHZhbGlkYXRlSW5wdXRzQWxsLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5jb25zdCBfX3JlSW5pdGVkID0gbmV3IFdlYWtTZXQoKTtcblxuZnVuY3Rpb24gQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgb2JzZXJ2YWJsZSApIHtcblx0dGhpcy5ub2RlICAgICAgICAgICA9IG5vZGU7XG5cdG5vZGUuamZiQ29uZGl0aW9uYWwgPSB0aGlzO1xuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLnJvb3QgPSBvYnNlcnZhYmxlO1xuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHR5cGUge0NvbmRpdGlvbnNCbG9ja0xpc3R9XG5cdCAqL1xuXHR0aGlzLmxpc3QgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7c3RyaW5nIHwgT2JqZWN0fVxuXHQgKi9cblx0dGhpcy5mdW5jdGlvbiA9IG51bGw7XG5cdHRoaXMuc2V0dGluZ3MgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UGFnZVN0YXRlfVxuXHQgKi9cblx0dGhpcy5wYWdlID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge011bHRpU3RlcFN0YXRlfVxuXHQgKi9cblx0dGhpcy5tdWx0aXN0ZXAgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Tm9kZX1cblx0ICovXG5cdHRoaXMuY29tbWVudCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGFbXX1cblx0ICovXG5cdHRoaXMuaW5wdXRzID0gW107XG5cblx0dGhpcy5pc1JpZ2h0ID0gbmV3IFJlYWN0aXZlVmFyKCBudWxsICk7XG5cdHRoaXMuaXNSaWdodC5tYWtlKCk7XG5cblx0dGhpcy5zZXRDb25kaXRpb25zKCk7XG5cdHRoaXMuc2V0SW5wdXRzKCk7XG5cdHRoaXMuc2V0RnVuY3Rpb24oKTtcblxuXHRpZiAoICF3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmRldm1vZGUgKSB7XG5cdFx0ZGVsZXRlIHRoaXMubm9kZS5kYXRhc2V0LmpmYkNvbmRpdGlvbmFsO1xuXHRcdGRlbGV0ZSB0aGlzLm5vZGUuZGF0YXNldC5qZmJGdW5jO1xuXHR9XG5cblx0ZG9BY3Rpb24oICdqZXQuZmIuY29uZGl0aW9uYWwuaW5pdCcsIHRoaXMgKTtcbn1cblxuQ29uZGl0aW9uYWxCbG9jay5wcm90b3R5cGUgPSB7XG5cdHNldENvbmRpdGlvbnMoKSB7XG5cdFx0Y29uc3QgeyBqZmJDb25kaXRpb25hbCB9ID0gdGhpcy5ub2RlLmRhdGFzZXQ7XG5cblx0XHR0aGlzLmxpc3QgICAgICAgPSBuZXcgQ29uZGl0aW9uc0Jsb2NrTGlzdCggamZiQ29uZGl0aW9uYWwsIHRoaXMucm9vdCApO1xuXHRcdHRoaXMubGlzdC5ibG9jayA9IHRoaXM7XG5cblx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5pc1JpZ2h0LmN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0UmVzdWx0KCk7XG5cdFx0fTtcblx0fSxcblx0c2V0SW5wdXRzKCkge1xuXHRcdHRoaXMuaW5wdXRzID0gQXJyYXkuZnJvbShcblx0XHRcdHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLXN5bmNdJyApLFxuXHRcdCkubWFwKFxuXHRcdFx0aXRlbSA9PiBpdGVtLmpmYlN5bmMsXG5cdFx0KS5maWx0ZXIoXG5cdFx0XHRpdGVtID0+IGl0ZW0sXG5cdFx0KTtcblx0fSxcblx0aW5zZXJ0Q29tbWVudCgpIHtcblx0XHRpZiAoICF0aGlzLnNldHRpbmdzPy5kb20gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggJycgKTtcblxuXHRcdC8vIGluc2VydCBjb21tZW50IGFmdGVyIGNvbmRpdGlvbmFsIGJsb2NrXG5cdFx0dGhpcy5ub2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0dGhpcy5jb21tZW50LFxuXHRcdFx0dGhpcy5ub2RlLm5leHRTaWJsaW5nLFxuXHRcdCk7XG5cdH0sXG5cdG9ic2VydmUoKSB7XG5cdFx0aWYgKCB0aGlzLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaXNPYnNlcnZlZCA9IHRydWU7XG5cdFx0dGhpcy5pbnNlcnRDb21tZW50KCk7XG5cblx0XHR0aGlzLmlzUmlnaHQud2F0Y2goICgpID0+IHRoaXMucnVuRnVuY3Rpb24oKSApO1xuXHRcdHRoaXMuaXNSaWdodC53YXRjaCggKCkgPT4gdGhpcy52YWxpZGF0ZUlucHV0cygpICk7XG5cdFx0dGhpcy5saXN0Lm9ic2VydmUoKTtcblx0fSxcblx0cnVuRnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5pc1JpZ2h0LmN1cnJlbnQ7XG5cblx0XHRzd2l0Y2ggKCB0aGlzLmZ1bmN0aW9uICkge1xuXHRcdFx0Y2FzZSAnc2hvdyc6XG5cdFx0XHRcdHRoaXMuc2hvd0Jsb2NrKCByZXN1bHQgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRlJzpcblx0XHRcdFx0dGhpcy5zaG93QmxvY2soICFyZXN1bHQgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXNhYmxlJzpcblx0XHRcdFx0dGhpcy5kaXNhYmxlQmxvY2soIHJlc3VsdCApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGRvQWN0aW9uKFxuXHRcdFx0XHRcdCdqZXQuZmIuY29uZGl0aW9uYWwuYmxvY2sucnVuRnVuY3Rpb24nLFxuXHRcdFx0XHRcdHRoaXMuZnVuY3Rpb24sXG5cdFx0XHRcdFx0cmVzdWx0LFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXHR9LFxuXHQvKipcblx0ICogQ29tcGF0aWJpbGl0eSB3aXRoIFNhdmUgUHJvZ3Jlc3Ncblx0ICogQHNpbmNlIDMuMC4xIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNDgwXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE1NTNcblx0ICovXG5cdHZhbGlkYXRlSW5wdXRzKCkge1xuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcblx0XHRcdHZhbGlkYXRlSW5wdXRzQWxsKCB0aGlzLmlucHV0cywgdHJ1ZSApLlxuXHRcdFx0XHR0aGVuKCAoKSA9PiB7fSApLlxuXHRcdFx0XHRjYXRjaCggKCkgPT4ge30gKTtcblx0XHR9ICk7XG5cdH0sXG5cdHNob3dCbG9jayggcmVzdWx0ICkge1xuXHRcdHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnamV0LWZvcm0tYnVpbGRlci0taGlkZGVuJyApO1xuXG5cdFx0aWYgKCB0aGlzLnNldHRpbmdzPy5kb20gKSB7XG5cdFx0XHR0aGlzLnNob3dCbG9ja0RvbSggcmVzdWx0ICk7XG5cdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlaW5pdENoaWxkcmVuKCkpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2svYmxvY2stdG9nZ2xlLWhpZGRlbi1kb20nLCB7XG5cdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdGJsb2NrOiB0aGlzLm5vZGUsXG5cdFx0XHRcdFx0cmVzdWx0OiByZXN1bHRcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5ub2RlLnN0eWxlLmRpc3BsYXkgPSByZXN1bHQgPyAnYmxvY2snIDogJ25vbmUnO1xuXG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucmVpbml0Q2hpbGRyZW4oKSk7XG5cdFx0fVxuXHR9LFxuXHRzaG93QmxvY2tEb20oIHJlc3VsdCApIHtcblx0XHRjb25zdCBpbnB1dHNMaXN0ID0gdGhpcy5yb290LmRhdGFJbnB1dHM7XG5cblx0XHRpZiAoICFyZXN1bHQgKSB7XG5cdFx0XHR0aGlzLm5vZGUucmVtb3ZlKCk7XG5cblx0XHRcdHRoaXMucmVDYWxjdWxhdGVGaWVsZHMoIGlucHV0c0xpc3QgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmNvbW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoIHRoaXMubm9kZSwgdGhpcy5jb21tZW50ICk7XG5cblx0XHR0aGlzLnJlQ2FsY3VsYXRlRmllbGRzKCBpbnB1dHNMaXN0ICk7XG5cdH0sXG5cdGRpc2FibGVCbG9jayggcmVzdWx0ICkge1xuXHRcdHRoaXMubm9kZS5kaXNhYmxlZCA9IHJlc3VsdDtcblx0fSxcblx0c2V0RnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5mdW5jdGlvbiA9IHRoaXMubm9kZS5kYXRhc2V0LmpmYkZ1bmM7XG5cblx0XHRsZXQgcGFyc2VkO1xuXHRcdHRyeSB7XG5cdFx0XHRwYXJzZWQgPSBKU09OLnBhcnNlKCB0aGlzLmZ1bmN0aW9uICk7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFsgWyBuYW1lLCBzZXR0aW5ncyBdIF0gPSBPYmplY3QuZW50cmllcyggcGFyc2VkICk7XG5cblx0XHR0aGlzLmZ1bmN0aW9uID0gbmFtZTtcblx0XHR0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cdH0sXG5cdHJlaW5pdENoaWxkcmVuKCkge1xuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnJvb3Q7XG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzLm5vZGU7XG5cblx0XHRjb25zdCBub2RlcyA9IHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpmYi1jb25kaXRpb25hbF1bZGF0YS1qZmItZnVuY10nKTtcblx0XHRub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRpZiAobm9kZS5qZmJDb25kaXRpb25hbCB8fCBfX3JlSW5pdGVkLmhhcyhub2RlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBjaGlsZCA9IG5ldyBDb25kaXRpb25hbEJsb2NrKG5vZGUsIHJvb3QpO1xuXHRcdFx0XHRjaGlsZC5vYnNlcnZlKCk7XG5cdFx0XHRcdGNoaWxkLmlzUmlnaHQuY3VycmVudCA9IGNoaWxkLmxpc3QuZ2V0UmVzdWx0KCk7XG5cdFx0XHRcdF9fcmVJbml0ZWQuYWRkKG5vZGUpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ3JlaW5pdENoaWxkcmVuOiBpbml0IGZhaWxlZCcsIGUsIG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBSZWNhbGN1bGF0aW9uIG9mIGZvcm11bGFzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpbnB1dHNMaXN0IC0gTGlzdCBvZiBmaWVsZHNcblx0ICovXG5cdHJlQ2FsY3VsYXRlRmllbGRzKCBpbnB1dHNMaXN0ICkge1xuXHRcdC8vIEdldCBvbmx5IGZpZWxkcyB0aGF0IGFyZSBpbiB0aGUgY3VycmVudCBibG9ja1xuXHRcdGNvbnN0IGFmZmVjdGVkRmllbGRzID0gdGhpcy5nZXRBZmZlY3RlZEZpZWxkcyggaW5wdXRzTGlzdCApO1xuXG5cdFx0Ly8gQ2FjaGUgZm9yIHZpc2liaWxpdHkgY2hlY2tzXG5cdFx0Y29uc3QgdmlzaWJpbGl0eUNhY2hlID0gbmV3IE1hcCgpO1xuXG5cdFx0YWZmZWN0ZWRGaWVsZHMuZm9yRWFjaCgga2V5ID0+IHtcblx0XHRcdGlmICggaW5wdXRzTGlzdFtrZXldICYmIGlucHV0c0xpc3Rba2V5XS5mb3JtdWxhICkge1xuXHRcdFx0XHRjb25zdCBmaWVsZE5vZGUgPSBpbnB1dHNMaXN0W2tleV0ubm9kZXM/LlswXTtcblxuXHRcdFx0XHQvLyBVc2UgY2FjaGUgZm9yIHZpc2liaWxpdHkgY2hlY2tzXG5cdFx0XHRcdGxldCBzaG91bGRSZWNhbGN1bGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoIGZpZWxkTm9kZSApIHtcblx0XHRcdFx0XHRjb25zdCBjYWNoZUtleSA9IGZpZWxkTm9kZTtcblx0XHRcdFx0XHRpZiAoICF2aXNpYmlsaXR5Q2FjaGUuaGFzKCBjYWNoZUtleSApICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaXNWaXNpYmxlID0gdGhpcy5pc0ZpZWxkVmlzaWJsZSggZmllbGROb2RlICk7XG5cdFx0XHRcdFx0XHRjb25zdCBpc0luRE9NICAgPSBkb2N1bWVudC5jb250YWlucyggZmllbGROb2RlICk7XG5cdFx0XHRcdFx0XHR2aXNpYmlsaXR5Q2FjaGUuc2V0KCBjYWNoZUtleSwgaXNWaXNpYmxlIHx8IGlzSW5ET00gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2hvdWxkUmVjYWxjdWxhdGUgPSB2aXNpYmlsaXR5Q2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBzaG91bGRSZWNhbGN1bGF0ZSApIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0aW5wdXRzTGlzdFtrZXldLnJlQ2FsY3VsYXRlRm9ybXVsYSgpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggYEVycm9yIHJlY2FsY3VsYXRpbmcgZm9ybXVsYSBmb3IgZmllbGQgJHtrZXl9OmAsIGVycm9yICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGZpZWxkIGlzIHZpc2libGUgb24gdGhlIHBhZ2Vcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZmllbGROb2RlIC0gRE9NIGVsZW1lbnQgb2YgdGhlIGZpZWxkXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgZmllbGQgaXMgdmlzaWJsZVxuXHQgKi9cblx0aXNGaWVsZFZpc2libGUoIGZpZWxkTm9kZSApIHtcblx0XHRpZiAoICEgZmllbGROb2RlICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgZWxlbWVudCBpcyBpbiBET01cblx0XHRpZiAoICEgZG9jdW1lbnQuY29udGFpbnMoIGZpZWxkTm9kZSApICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0Ly8gQ2hlY2sgdmlzaWJpbGl0eSBzdHlsZXNcblx0XHRjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGZpZWxkTm9kZSApO1xuXG5cdFx0aWYgKCAnbm9uZScgPT09IGNvbXB1dGVkU3R5bGUuZGlzcGxheSB8fCAnaGlkZGVuJyA9PT0gY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgbm90IGhpZGRlbiBieSBwYXJlbnQgZWxlbWVudHNcblx0XHRsZXQgcGFyZW50ID0gZmllbGROb2RlLnBhcmVudEVsZW1lbnQ7XG5cblx0XHR3aGlsZSAoIHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50LmJvZHkgKSB7XG5cdFx0XHRjb25zdCBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBwYXJlbnQgKTtcblx0XHRcdGlmICggJ25vbmUnID09PSBwYXJlbnRTdHlsZS5kaXNwbGF5IHx8ICdoaWRkZW4nID09PSBwYXJlbnRTdHlsZS52aXNpYmlsaXR5ICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0LyoqXG5cdCAqIEdldHMgbGlzdCBvZiBmaWVsZHMgYWZmZWN0ZWQgYnkgY3VycmVudCBjb25kaXRpb25hbCBibG9ja1xuXHQgKiBAcGFyYW0ge09iamVjdH0gaW5wdXRzTGlzdCAtIExpc3Qgb2YgYWxsIGZpZWxkc1xuXHQgKiBAcmV0dXJucyB7QXJyYXl9IC0gQXJyYXkgb2YgYWZmZWN0ZWQgZmllbGQga2V5c1xuXHQgKi9cblx0Z2V0QWZmZWN0ZWRGaWVsZHMoIGlucHV0c0xpc3QgKSB7XG5cdFx0Y29uc3QgYWZmZWN0ZWRGaWVsZHMgPSBbXTtcblxuXHRcdC8vIEdldCBhbGwgZmllbGRzIGluc2lkZSBjdXJyZW50IGJsb2NrXG5cdFx0Y29uc3QgYmxvY2tGaWVsZHMgICAgID0gQXJyYXkuZnJvbSggdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItc3luY10nICkgKTtcblx0XHRjb25zdCBibG9ja0ZpZWxkTmFtZXMgPSBuZXcgU2V0KCk7XG5cblx0XHQvLyBDb2xsZWN0IGZpZWxkIG5hbWVzIGluc2lkZSBibG9ja1xuXHRcdGJsb2NrRmllbGRzLmZvckVhY2goIGZpZWxkTm9kZSA9PiB7XG5cdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBmaWVsZE5vZGUuZ2V0QXR0cmlidXRlKCAnbmFtZScgKTtcblxuXHRcdFx0aWYgKCBmaWVsZE5hbWUgKSB7XG5cdFx0XHRcdGJsb2NrRmllbGROYW1lcy5hZGQoIGZpZWxkTmFtZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdE9iamVjdC5rZXlzKCBpbnB1dHNMaXN0ICkuZm9yRWFjaCgga2V5ID0+IHtcblx0XHRcdGNvbnN0IGZpZWxkID0gaW5wdXRzTGlzdFtrZXldO1xuXG5cdFx0XHRpZiAoICEgZmllbGQgfHwgISBmaWVsZC5mb3JtdWxhICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBmaWVsZE5vZGUgPSBmaWVsZC5ub2Rlcz8uWzBdO1xuXHRcdFx0bGV0IHNob3VsZFJlY2FsY3VsYXRlID0gZmFsc2U7XG5cblx0XHRcdC8vIDEuIEZpZWxkIGlzIGluc2lkZSB0aGUgYmxvY2tcblx0XHRcdGlmICggZmllbGROb2RlICYmIGJsb2NrRmllbGRzLmluY2x1ZGVzKCBmaWVsZE5vZGUgKSApIHtcblx0XHRcdFx0c2hvdWxkUmVjYWxjdWxhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAyLiBGaWVsZCBkZXBlbmRzIG9uIGZpZWxkcyBpbnNpZGUgYmxvY2sgKGNoZWNrIGZvcm11bGEpXG5cdFx0XHRpZiAoICEgc2hvdWxkUmVjYWxjdWxhdGUgJiYgZmllbGQuZm9ybXVsYSApIHtcblx0XHRcdFx0YmxvY2tGaWVsZE5hbWVzLmZvckVhY2goIGJsb2NrRmllbGROYW1lID0+IHtcblx0XHRcdFx0XHRpZiAoIGZpZWxkLmZvcm11bGEuaW5jbHVkZXMoIGAlJHtibG9ja0ZpZWxkTmFtZX0lYCApICkge1xuXHRcdFx0XHRcdFx0c2hvdWxkUmVjYWxjdWxhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHNob3VsZFJlY2FsY3VsYXRlICkge1xuXHRcdFx0XHRhZmZlY3RlZEZpZWxkcy5wdXNoKCBrZXkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gYWZmZWN0ZWRGaWVsZHM7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25hbEJsb2NrOyIsImltcG9ydCBDb25kaXRpb25zTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNMaXN0JztcblxuZnVuY3Rpb24gQ29uZGl0aW9uc0Jsb2NrTGlzdCggY29uZGl0aW9ucywgcm9vdCApIHtcblx0Q29uZGl0aW9uc0xpc3QuY2FsbCggdGhpcywgY29uZGl0aW9ucywgcm9vdCApO1xufVxuXG5Db25kaXRpb25zQmxvY2tMaXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbnNMaXN0LnByb3RvdHlwZSApO1xuLyoqXG4gKiBAdHlwZSB7Q29uZGl0aW9uYWxCbG9ja31cbiAqL1xuQ29uZGl0aW9uc0Jsb2NrTGlzdC5wcm90b3R5cGUuYmxvY2sgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zQmxvY2tMaXN0OyIsImltcG9ydCB7IGNyZWF0ZUNvbmRpdGlvbkl0ZW0gfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgT3JPcGVyYXRvckl0ZW0gZnJvbSAnLi9Pck9wZXJhdG9ySXRlbSc7XG5cbmZ1bmN0aW9uIENvbmRpdGlvbnNMaXN0KCBjb25kaXRpb25zLCByb290ICkge1xuXHR0aGlzLnJvb3QgPSByb290O1xuXHR0aGlzLnNldENvbmRpdGlvbnMoIGNvbmRpdGlvbnMgKTtcbn1cblxuQ29uZGl0aW9uc0xpc3QucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHRyb290OiBudWxsLFxuXHRjb25kaXRpb25zOiBbXSxcblx0aW52YWxpZDogW10sXG5cdGdyb3VwczogW10sXG5cdC8qKlxuXHQgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgY2FsbGJhY2suXG5cdCAqIEl0IHVzZWQgaW4gQ29uZGl0aW9uRmllbGRJdGVtLlxuXHQgKlxuXHQgKiBSdW5zIGV2ZXJ5IHRpbWUsIHdoZW4gY29uZGl0aW9ucyBpcyBtYXRjaFxuXHQgKi9cblx0b25DaGFuZ2VSZWxhdGVkKCkge1xuXHRcdGlmICggIXRoaXMuZ2V0UmVzdWx0KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMub25NYXRjaENvbmRpdGlvbnMoKTtcblx0fSxcblx0b25NYXRjaENvbmRpdGlvbnMoKSB7fSxcblx0b2JzZXJ2ZSgpIHtcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgdGhpcy5nZXRDb25kaXRpb25zKCkgKSB7XG5cdFx0XHRjb25kaXRpb24ub2JzZXJ2ZSgpO1xuXHRcdH1cblx0fSxcblx0c2V0Q29uZGl0aW9ucyggY29uZGl0aW9ucyApIHtcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgY29uZGl0aW9ucyApIHtcblx0XHRcdGNvbmRpdGlvbnMgPSBKU09OLnBhcnNlKCBjb25kaXRpb25zICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb25kaXRpb25zID0gY29uZGl0aW9ucy5tYXAoXG5cdFx0XHRpdGVtID0+IGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIGl0ZW0sIHRoaXMgKSxcblx0XHQpLmZpbHRlciggaXRlbSA9PiBpdGVtICk7XG5cblx0XHRjb25zdCBncm91cHMgICA9IHt9O1xuXHRcdGxldCBncm91cEluZGV4ID0gMDtcblxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmdldENvbmRpdGlvbnMoKSApIHtcblx0XHRcdGlmICggY29uZGl0aW9uIGluc3RhbmNlb2YgT3JPcGVyYXRvckl0ZW0gKSB7XG5cdFx0XHRcdGdyb3VwSW5kZXgrKztcblxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdID0gZ3JvdXBzWyBncm91cEluZGV4IF0gPz8gW107XG5cdFx0XHRncm91cHNbIGdyb3VwSW5kZXggXS5wdXNoKCBjb25kaXRpb24gKTtcblx0XHR9XG5cblx0XHR0aGlzLmdyb3VwcyA9IE9iamVjdC52YWx1ZXMoIGdyb3VwcyApO1xuXHR9LFxuXHRnZXRSZXN1bHQoKSB7XG5cdFx0dGhpcy5pbnZhbGlkID0gW107XG5cblx0XHRpZiAoICF0aGlzLmdyb3Vwcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBncm91cCBvZiB0aGlzLmdyb3VwcyApIHtcblx0XHRcdGlmICggdGhpcy5pc1ZhbGlkR3JvdXAoIGdyb3VwICkgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0aXNWYWxpZEdyb3VwKCBjb25kaXRpb25zR3JvdXAgKSB7XG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIGNvbmRpdGlvbnNHcm91cCApIHtcblx0XHRcdGlmICggY29uZGl0aW9uLmlzUGFzc2VkKCkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbnZhbGlkLnB1c2goIGNvbmRpdGlvbiApO1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBcnJheTxDb25kaXRpb25GaWVsZEl0ZW0gfCBDb25kaXRpb25QYWdlU3RhdGVJdGVtPn1cblx0ICovXG5cdGdldENvbmRpdGlvbnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZGl0aW9ucztcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbnNMaXN0OyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5cbmNvbnN0IHtcblx0ICAgICAgZ2V0VGltZXN0YW1wLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuY29uc3Qge1xuXHQgICAgICBNaW5fSW5fU2VjLFxuXHQgICAgICBNaWxsaV9Jbl9TZWMsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJDb25zdDtcblxuY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG5mdW5jdGlvbiBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIoKSB7XG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gWyAnZGF0ZScsICd0aW1lJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xuXHRcdGNvbnN0IHsgdGltZTogY3VycmVudCB9ID0gZ2V0VGltZXN0YW1wKCBpbnB1dC52YWx1ZS5jdXJyZW50ICk7XG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgICAgICA9IGNvbmRpdGlvbi52YWx1ZS5tYXAoIHZhbHVlID0+IHtcblx0XHRcdGNvbnN0IHsgdGltZSwgdHlwZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXG5cdFx0XHRpZiAoICdudW1iZXInID09PSB0eXBlICYmIGNvbmRpdGlvbi51c2VfcHJlc2V0ICkge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHRcdHJldHVybiB0aW1lICogTWlsbGlfSW5fU2VjICsgb2Zmc2V0ICogTWluX0luX1NlYztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcblx0fTtcbn1cblxuRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5cbmZ1bmN0aW9uIE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcigpIHtcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5vcGVyYXRvcnMub25lX29mID0gKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZXMgKSA9PiB7XG5cdFx0aWYgKCAhY29uZGl0aW9uVmFsdWVzPy5sZW5ndGggfHwgIWN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcblx0XHRcdHZhbCA9PiAtMSAhPT0gY29uZGl0aW9uVmFsdWVzLmluZGV4T2YoIHZhbCApLFxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5vcGVyYXRvcnMuY29udGFpbiA9ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWVzICkgPT4ge1xuXHRcdGlmICggIWN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcblx0XHRcdHZhbCA9PiB2YWwuaW5kZXhPZiggY29uZGl0aW9uVmFsdWVzWyAwIF0gKSAhPT0gLTEsXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuaXNBcnJheSgpO1xuXHR9O1xufVxuXG5NdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0Q29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXI7XG4iLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xuXG5mdW5jdGlvbiBPck9wZXJhdG9ySXRlbSgpIHtcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0b3B0aW9ucy5vcl9vcGVyYXRvciA/PyBmYWxzZVxuXHRcdCk7XG5cdH07XG59XG5cbk9yT3BlcmF0b3JJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE9yT3BlcmF0b3JJdGVtOyIsImltcG9ydCBDb25kaXRpb25GaWVsZEl0ZW0gZnJvbSAnLi9Db25kaXRpb25GaWVsZEl0ZW0nO1xuaW1wb3J0IENvbmRpdGlvbmFsQmxvY2sgZnJvbSAnLi9Db25kaXRpb25hbEJsb2NrJztcbmltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5pbXBvcnQgTXVsdGlwbGVDb25kaXRpb25DaGVja2VyIGZyb20gJy4vTXVsdGlwbGVDb25kaXRpb25DaGVja2VyJztcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcbmltcG9ydCBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXInO1xuaW1wb3J0IENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSBmcm9tICcuL0NvbmRpdGlvblJlbmRlclN0YXRlSXRlbSc7XG5pbXBvcnQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlciBmcm9tICcuL0NhbGN1bGF0ZWRGaWVsZENoZWNrZXInO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0SXRlbVR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLnR5cGVzJyxcblx0W1xuXHRcdENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSxcblx0XHRPck9wZXJhdG9ySXRlbSxcblx0XHRDb25kaXRpb25GaWVsZEl0ZW0sXG5cdF0sXG4pO1xuLyoqXG4gKiBAdHlwZSB7Q29uZGl0aW9uSXRlbVtdfVxuICovXG5sZXQgaXRlbVR5cGVzICAgICAgPSBbXTtcblxuY29uc3QgZ2V0Q2hlY2tlcnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwuY2hlY2tlcnMnLFxuXHRbXG5cdFx0TXVsdGlwbGVDb25kaXRpb25DaGVja2VyLFxuXHRcdERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcixcblx0XHRDYWxjdWxhdGVkRmllbGRDaGVja2VyLFxuXHRcdENvbmRpdGlvbkNoZWNrZXIsXG5cdF0sXG4pO1xuXG5sZXQgY2hlY2tlcnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIG9wdGlvbnMge3t9fVxuICogQHBhcmFtICBsaXN0ICAgIHtDb25kaXRpb25zTGlzdH1cbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIG9wdGlvbnMsIGxpc3QgKSB7XG5cdGlmICggIWl0ZW1UeXBlcy5sZW5ndGggKSB7XG5cdFx0aXRlbVR5cGVzID0gZ2V0SXRlbVR5cGVzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBkYXRhVHlwZSBvZiBpdGVtVHlwZXMgKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0NvbmRpdGlvbkl0ZW19XG5cdFx0ICovXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBkYXRhVHlwZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggb3B0aW9ucyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGN1cnJlbnQuc2V0TGlzdCggbGlzdCApO1xuXHRcdGN1cnJlbnQuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGVcbiAqIEBwYXJhbSAgcm9vdFxuICogQHJldHVybiB7Q29uZGl0aW9uYWxCbG9ja31cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgcm9vdCApIHtcblx0aWYgKCBub2RlLmhhc093blByb3BlcnR5KCAnamZiQ29uZGl0aW9uYWwnICkgKSB7XG5cdFx0cmV0dXJuIG5vZGUuamZiQ29uZGl0aW9uYWw7XG5cdH1cblx0Y29uc3QgYmxvY2sgPSBuZXcgQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgcm9vdCApO1xuXG5cdGJsb2NrLm9ic2VydmUoKTtcblx0YmxvY2subGlzdC5vbkNoYW5nZVJlbGF0ZWQoKTtcblxuXHRyZXR1cm4gYmxvY2s7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrZXIoIGlucHV0ICkge1xuXHRpZiAoICFjaGVja2Vycy5sZW5ndGggKSB7XG5cdFx0Y2hlY2tlcnMgPSBnZXRDaGVja2VycygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgY2hlY2tlciBvZiBjaGVja2VycyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGNoZWNrZXIoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVDb25kaXRpb25JdGVtLFxuXHRjcmVhdGVDb25kaXRpb25hbEJsb2NrLFxuXHRjcmVhdGVDaGVja2VyLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUNoZWNrZXIsIGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2sgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uZGl0aW9uYWxCbG9jayBmcm9tICcuL0NvbmRpdGlvbmFsQmxvY2snO1xuaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcbmltcG9ydCBDb25kaXRpb25zTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNMaXN0JztcblxuY29uc3QgeyBhZGRBY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxuXHRmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBvYnNlcnZhYmxlLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRgW2RhdGEtamZiLWNvbmRpdGlvbmFsXWAsXG5cdFx0KSApIHtcblx0XHRcdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2soIG5vZGUsIG9ic2VydmFibGUgKTtcblx0XHR9XG5cdH0sXG5cdDIwLFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLmlucHV0Lm1ha2VSZWFjdGl2ZScsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrJyxcblx0ZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRpbnB1dC5jaGVja2VyID0gY3JlYXRlQ2hlY2tlciggaW5wdXQgKTtcblx0fSxcbik7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5jb25kaXRpb25hbC5ibG9jay5ydW5GdW5jdGlvbicsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBmdW5jTmFtZVxuXHQgKiBAcGFyYW0gcmVzdWx0XG5cdCAqIEBwYXJhbSBjb25kaXRpb25hbEJsb2NrIHtDb25kaXRpb25hbEJsb2NrfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBmdW5jTmFtZSwgcmVzdWx0LCBjb25kaXRpb25hbEJsb2NrICkge1xuXHRcdGlmIChcblx0XHRcdCdzZXRDc3NDbGFzcycgIT09IGZ1bmNOYW1lIHx8XG5cdFx0XHQhY29uZGl0aW9uYWxCbG9jay5zZXR0aW5ncz8uY2xhc3NOYW1lXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uZGl0aW9uYWxCbG9jay5ub2RlLmNsYXNzTGlzdC50b2dnbGUoXG5cdFx0XHRjb25kaXRpb25hbEJsb2NrLnNldHRpbmdzLmNsYXNzTmFtZSxcblx0XHRcdHJlc3VsdCxcblx0XHQpO1xuXHR9LFxuKTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxuXHQpLFxuXHRDb25kaXRpb25JdGVtLFxuXHRDb25kaXRpb25hbEJsb2NrLFxuXHRjcmVhdGVDb25kaXRpb25hbEJsb2NrLFxuXHRjcmVhdGVDaGVja2VyLFxuXHRDb25kaXRpb25zTGlzdCxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=