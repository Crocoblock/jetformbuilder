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
  },
  showBlockDom(result) {
    const inputsList = this.root.dataInputs;
    if (!result) {
      this.node.remove();
      Object.keys(inputsList).forEach(key => {
        inputsList[key].reCalculateFormula();
      });
      return;
    }
    this.comment.parentElement.insertBefore(this.node, this.comment);
    Object.keys(inputsList).forEach(key => {
      inputsList[key].reCalculateFormula();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM01BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBSUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25DaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkZpZWxkSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25JdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvblJlbmRlclN0YXRlSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25hbEJsb2NrLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbnNCbG9ja0xpc3QuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uc0xpc3QuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL011bHRpcGxlQ29uZGl0aW9uQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Pck9wZXJhdG9ySXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0NvbmRpdGlvbkNoZWNrZXInO1xyXG5cclxuZnVuY3Rpb24gQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlcigpIHtcclxuXHRDb25kaXRpb25DaGVja2VyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gJ2NhbGN1bGF0ZWQnID09PSBpbnB1dC5pbnB1dFR5cGU7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxyXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCAgICAgICAgPSBpbnB1dC5jYWxjVmFsdWU7XHJcblx0XHRjb25zdCBjb25kaXRpb25WYWx1ZSA9IGNvbmRpdGlvbi52YWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkNhbGN1bGF0ZWRGaWVsZENoZWNrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRGaWVsZENoZWNrZXI7IiwiY29uc3Qge1xyXG5cdCAgICAgIGlzRW1wdHksXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbkNoZWNrZXIoKSB7XHJcblx0dGhpcy5vcGVyYXRvcnMgPSB0aGlzLmdldE9wZXJhdG9ycygpO1xyXG59XHJcblxyXG5Db25kaXRpb25DaGVja2VyLnByb3RvdHlwZSA9IHtcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxyXG5cdG9wZXJhdG9yczoge30sXHJcblx0Z2V0T3BlcmF0b3JzICgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGVxdWFsOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gY3VycmVudCA9PT1cclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdLFxyXG5cdFx0XHRlbXB0eTogKCBjdXJyZW50ICkgPT4gaXNFbXB0eSggY3VycmVudCApLFxyXG5cdFx0XHRncmVhdGVyOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPiArKFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cclxuXHRcdFx0KSxcclxuXHRcdFx0Z3JlYXRlcl9vcl9lcTogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXHJcblx0XHRcdFx0Y3VycmVudFxyXG5cdFx0XHQpID49ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRsZXNzOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPCArKFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cclxuXHRcdFx0KSxcclxuXHRcdFx0bGVzc19vcl9lcTogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXHJcblx0XHRcdFx0Y3VycmVudFxyXG5cdFx0XHQpIDw9ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRiZXR3ZWVuOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdGlmICggIWNvbmRpdGlvblZhbHVlPy5sZW5ndGggfHwgbnVsbCA9PT0gY3VycmVudCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdIDw9ICtjdXJyZW50ICYmXHJcblx0XHRcdFx0XHQrY3VycmVudCA8PSBjb25kaXRpb25WYWx1ZVsgMSBdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25lX29mOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdGlmICggIWNvbmRpdGlvblZhbHVlPy5sZW5ndGggKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gMCA8PSBjb25kaXRpb25WYWx1ZS5pbmRleE9mKCBjdXJyZW50ICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRhaW46ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0aWYgKCAhY3VycmVudCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIDAgPD0gY3VycmVudC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZVsgMCBdICk7XHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxyXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRjaGVjayAoIGNvbmRpdGlvbiwgaW5wdXQgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ICAgICAgICA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0XHRjb25zdCBjb25kaXRpb25WYWx1ZSA9IGNvbmRpdGlvbi52YWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xyXG5cdH0sXHJcblx0Y2hlY2tSYXcgKCBvcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSB7XHJcblx0XHRpZiAoIHRoaXMub3BlcmF0b3JzLmhhc093blByb3BlcnR5KCBvcGVyYXRvciApICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcGVyYXRvcnNbIG9wZXJhdG9yIF0oXHJcblx0XHRcdFx0Y3VycmVudCxcclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZSxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIDAgIT09IG9wZXJhdG9yLmluZGV4T2YoICdub3RfJyApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgb3BlcmF0b3JOYW1lID0gb3BlcmF0b3Iuc2xpY2UoIDQgKTtcclxuXHJcblx0XHRpZiAoICF0aGlzLm9wZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eSggb3BlcmF0b3JOYW1lICkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gIXRoaXMub3BlcmF0b3JzWyBvcGVyYXRvck5hbWUgXShcclxuXHRcdFx0Y3VycmVudCxcclxuXHRcdFx0Y29uZGl0aW9uVmFsdWUsXHJcblx0XHQpO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XHJcblxyXG5jb25zdCB7IENhbGN1bGF0ZWRGb3JtdWxhIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uRmllbGRJdGVtKCkge1xyXG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuICEhb3B0aW9ucz8uZmllbGQ/Lmxlbmd0aDtcclxuXHR9O1xyXG5cdHRoaXMub2JzZXJ2ZSAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBpbnB1dCAgICAgICA9IHRoaXMuZ2V0SW5wdXQoKTtcclxuXHRcdHRoaXMubGlzdC5fZmllbGRzID0gdGhpcy5saXN0Ll9maWVsZHMgPz8gW107XHJcblxyXG5cdFx0aWYgKCAhaW5wdXQgfHwgdGhpcy5saXN0Ll9maWVsZHMuaW5jbHVkZXMoIHRoaXMuZmllbGQgKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubGlzdC5fZmllbGRzLnB1c2goIHRoaXMuZmllbGQgKTtcclxuXHRcdGlucHV0LndhdGNoKCAoKSA9PiB0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0lucHV0RGF0YXxib29sZWFufVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5saXN0LnJvb3QuZ2V0SW5wdXQoIHRoaXMuZmllbGQgKTtcclxuXHR9O1xyXG5cdHRoaXMuaXNQYXNzZWQgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xyXG5cclxuXHRcdGlmICggIWlucHV0ICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0LmNoZWNrZXIuY2hlY2soIHRoaXMsIGlucHV0ICk7XHJcblx0fTtcclxuXHR0aGlzLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHR0aGlzLmZpZWxkICAgICAgICA9IG9wdGlvbnMuZmllbGQ7XHJcblx0XHR0aGlzLm9wZXJhdG9yICAgICA9IG9wdGlvbnMub3BlcmF0b3I7XHJcblx0XHR0aGlzLnJlbmRlcl9zdGF0ZSA9IG9wdGlvbnMucmVuZGVyX3N0YXRlO1xyXG5cdFx0dGhpcy51c2VfcHJlc2V0ICAgPSBvcHRpb25zLnVzZV9wcmVzZXQ7XHJcblx0XHRsZXQgdmFsdWUgICAgICAgICA9IG9wdGlvbnM/LnZhbHVlO1xyXG5cclxuXHRcdGlmICggIUFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcblx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQoICcsJyApLm1hcCggaXRlbSA9PiBpdGVtLnRyaW0oKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdGhpcy51c2VfcHJlc2V0ICkge1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy52YWx1ZSA9IHt9O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IFsgaW5kZXgsIGZvcm11bGEgXSBvZiBPYmplY3QuZW50cmllcyggdmFsdWUgKSApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcy5saXN0LnJvb3QgKTtcclxuXHJcblx0XHRcdGN1cnJlbnQub2JzZXJ2ZSggZm9ybXVsYSApO1xyXG5cdFx0XHRjdXJyZW50LnNldFJlc3VsdCA9ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlWyBpbmRleCBdID0gJycgKyBjdXJyZW50LmNhbGN1bGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQoKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Y3VycmVudC5zZXRSZXN1bHQoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZhbHVlID0gT2JqZWN0LnZhbHVlcyggdGhpcy52YWx1ZSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xyXG5cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS5maWVsZCA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7QXJyYXl9XHJcbiAqL1xyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLnZhbHVlID0gbnVsbDtcclxuLyoqXHJcbiAqIEB0eXBlIHsnZXF1YWwnfCdncmVhdGVyJ3wnbGVzcyd8J2JldHdlZW4nfCdvbmVfb2YnfCdjb250YWluJ31cclxuICovXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUub3BlcmF0b3IgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge2Jvb2xlYW59XHJcbiAqL1xyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLnVzZV9wcmVzZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uRmllbGRJdGVtOyIsIi8qKlxyXG4gKiBAcHJvcGVydHkge0NvbmRpdGlvbnNMaXN0fENvbmRpdGlvbnNCbG9ja0xpc3R9IGxpc3QgUmVsYXRlZCBsaXN0XHJcbiAqL1xyXG5mdW5jdGlvbiBDb25kaXRpb25JdGVtKCkge1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5vYnNlcnZlICAgICA9IGZ1bmN0aW9uICgpIHtcclxufTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLnNldE9wdGlvbnMgID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG59O1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5pc1Bhc3NlZCAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHQnWW91IG11c3QgcHJvdmlkZSBDb25kaXRpb25JdGVtOjppc1Bhc3NlZCBmdW5jdGlvbicsXHJcblx0KTtcclxufTtcclxuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuc2V0TGlzdCAgICAgPSBmdW5jdGlvbiAoIGxpc3QgKSB7XHJcblx0dGhpcy5saXN0ID0gbGlzdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkl0ZW07IiwiaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSgpIHtcclxuXHRDb25kaXRpb25JdGVtLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHJldHVybiAncmVuZGVyX3N0YXRlJyA9PT0gb3B0aW9ucz8ub3BlcmF0b3I7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5saXN0LnJvb3QuZ2V0SW5wdXQoICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlcycgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdldElucHV0KCkud2F0Y2goICgpID0+IHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQoKSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHRoaXMucmVuZGVyX3N0YXRlID0gb3B0aW9ucy5yZW5kZXJfc3RhdGUgPz8gW107XHJcblx0fTtcclxuXHJcblx0dGhpcy5pc1Bhc3NlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZ2V0SW5wdXQoKTtcclxuXHJcblx0XHRpZiAoICF2YWx1ZS5jdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJfc3RhdGUuc29tZSggY3VycmVudCA9PiB7XHJcblx0XHRcdHJldHVybiB2YWx1ZS5jdXJyZW50LmluY2x1ZGVzKCBjdXJyZW50ICk7XHJcblx0XHR9ICk7XHJcblx0fTtcclxufVxyXG5cclxuQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XHJcblxyXG5Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0ucHJvdG90eXBlLnJlbmRlcl9zdGF0ZSA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtOyIsImltcG9ydCBDb25kaXRpb25zQmxvY2tMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0Jsb2NrTGlzdCc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgZG9BY3Rpb24sXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5jb25zdCB7XHJcblx0ICAgICAgUmVhY3RpdmVWYXIsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5jb25zdCB7XHJcblx0ICAgICAgdmFsaWRhdGVJbnB1dHNBbGwsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbmFsQmxvY2soIG5vZGUsIG9ic2VydmFibGUgKSB7XHJcblx0dGhpcy5ub2RlICAgICAgICAgICA9IG5vZGU7XHJcblx0bm9kZS5qZmJDb25kaXRpb25hbCA9IHRoaXM7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0dGhpcy5yb290ID0gb2JzZXJ2YWJsZTtcclxuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0NvbmRpdGlvbnNCbG9ja0xpc3R9XHJcblx0ICovXHJcblx0dGhpcy5saXN0ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge3N0cmluZyB8IE9iamVjdH1cclxuXHQgKi9cclxuXHR0aGlzLmZ1bmN0aW9uID0gbnVsbDtcclxuXHR0aGlzLnNldHRpbmdzID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1BhZ2VTdGF0ZX1cclxuXHQgKi9cclxuXHR0aGlzLnBhZ2UgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7TXVsdGlTdGVwU3RhdGV9XHJcblx0ICovXHJcblx0dGhpcy5tdWx0aXN0ZXAgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7Tm9kZX1cclxuXHQgKi9cclxuXHR0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SW5wdXREYXRhW119XHJcblx0ICovXHJcblx0dGhpcy5pbnB1dHMgPSBbXTtcclxuXHJcblx0dGhpcy5pc1JpZ2h0ID0gbmV3IFJlYWN0aXZlVmFyKCBudWxsICk7XHJcblx0dGhpcy5pc1JpZ2h0Lm1ha2UoKTtcclxuXHJcblx0dGhpcy5zZXRDb25kaXRpb25zKCk7XHJcblx0dGhpcy5zZXRJbnB1dHMoKTtcclxuXHR0aGlzLnNldEZ1bmN0aW9uKCk7XHJcblxyXG5cdGlmICggIXdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uZGV2bW9kZSApIHtcclxuXHRcdGRlbGV0ZSB0aGlzLm5vZGUuZGF0YXNldC5qZmJDb25kaXRpb25hbDtcclxuXHRcdGRlbGV0ZSB0aGlzLm5vZGUuZGF0YXNldC5qZmJGdW5jO1xyXG5cdH1cclxuXHJcblx0ZG9BY3Rpb24oICdqZXQuZmIuY29uZGl0aW9uYWwuaW5pdCcsIHRoaXMgKTtcclxufVxyXG5cclxuQ29uZGl0aW9uYWxCbG9jay5wcm90b3R5cGUgPSB7XHJcblx0c2V0Q29uZGl0aW9ucygpIHtcclxuXHRcdGNvbnN0IHsgamZiQ29uZGl0aW9uYWwgfSA9IHRoaXMubm9kZS5kYXRhc2V0O1xyXG5cclxuXHRcdHRoaXMubGlzdCAgICAgICA9IG5ldyBDb25kaXRpb25zQmxvY2tMaXN0KCBqZmJDb25kaXRpb25hbCwgdGhpcy5yb290ICk7XHJcblx0XHR0aGlzLmxpc3QuYmxvY2sgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuaXNSaWdodC5jdXJyZW50ID0gdGhpcy5saXN0LmdldFJlc3VsdCgpO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHNldElucHV0cygpIHtcclxuXHRcdHRoaXMuaW5wdXRzID0gQXJyYXkuZnJvbShcclxuXHRcdFx0dGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItc3luY10nICksXHJcblx0XHQpLm1hcChcclxuXHRcdFx0aXRlbSA9PiBpdGVtLmpmYlN5bmMsXHJcblx0XHQpLmZpbHRlcihcclxuXHRcdFx0aXRlbSA9PiBpdGVtLFxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdGluc2VydENvbW1lbnQoKSB7XHJcblx0XHRpZiAoICF0aGlzLnNldHRpbmdzPy5kb20gKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCAnJyApO1xyXG5cclxuXHRcdC8vIGluc2VydCBjb21tZW50IGFmdGVyIGNvbmRpdGlvbmFsIGJsb2NrXHJcblx0XHR0aGlzLm5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoXHJcblx0XHRcdHRoaXMuY29tbWVudCxcclxuXHRcdFx0dGhpcy5ub2RlLm5leHRTaWJsaW5nLFxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdG9ic2VydmUoKSB7XHJcblx0XHRpZiAoIHRoaXMuaXNPYnNlcnZlZCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pc09ic2VydmVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuaW5zZXJ0Q29tbWVudCgpO1xyXG5cclxuXHRcdHRoaXMuaXNSaWdodC53YXRjaCggKCkgPT4gdGhpcy5ydW5GdW5jdGlvbigpICk7XHJcblx0XHR0aGlzLmlzUmlnaHQud2F0Y2goICgpID0+IHRoaXMudmFsaWRhdGVJbnB1dHMoKSApO1xyXG5cdFx0dGhpcy5saXN0Lm9ic2VydmUoKTtcclxuXHR9LFxyXG5cdHJ1bkZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5pc1JpZ2h0LmN1cnJlbnQ7XHJcblxyXG5cdFx0c3dpdGNoICggdGhpcy5mdW5jdGlvbiApIHtcclxuXHRcdFx0Y2FzZSAnc2hvdyc6XHJcblx0XHRcdFx0dGhpcy5zaG93QmxvY2soIHJlc3VsdCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdoaWRlJzpcclxuXHRcdFx0XHR0aGlzLnNob3dCbG9jayggIXJlc3VsdCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkaXNhYmxlJzpcclxuXHRcdFx0XHR0aGlzLmRpc2FibGVCbG9jayggcmVzdWx0ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0ZG9BY3Rpb24oXHJcblx0XHRcdFx0XHQnamV0LmZiLmNvbmRpdGlvbmFsLmJsb2NrLnJ1bkZ1bmN0aW9uJyxcclxuXHRcdFx0XHRcdHRoaXMuZnVuY3Rpb24sXHJcblx0XHRcdFx0XHRyZXN1bHQsXHJcblx0XHRcdFx0XHR0aGlzLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQ29tcGF0aWJpbGl0eSB3aXRoIFNhdmUgUHJvZ3Jlc3NcclxuXHQgKiBAc2luY2UgMy4wLjEgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzI0ODBcclxuXHQgKlxyXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE1NTNcclxuXHQgKi9cclxuXHR2YWxpZGF0ZUlucHV0cygpIHtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0dmFsaWRhdGVJbnB1dHNBbGwoIHRoaXMuaW5wdXRzLCB0cnVlICkuXHJcblx0XHRcdFx0dGhlbiggKCkgPT4ge30gKS5cclxuXHRcdFx0XHRjYXRjaCggKCkgPT4ge30gKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG5cdHNob3dCbG9jayggcmVzdWx0ICkge1xyXG5cdFx0dGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdqZXQtZm9ybS1idWlsZGVyLS1oaWRkZW4nICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLnNldHRpbmdzPy5kb20gKSB7XHJcblx0XHRcdHRoaXMuc2hvd0Jsb2NrRG9tKCByZXN1bHQgKTtcclxuXHRcdFx0Y29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2svYmxvY2stdG9nZ2xlLWhpZGRlbi1kb20nLCB7XHJcblx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRibG9jazogdGhpcy5ub2RlLFxyXG5cdFx0XHRcdFx0cmVzdWx0OiByZXN1bHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLm5vZGUuc3R5bGUuZGlzcGxheSA9IHJlc3VsdCA/ICdibG9jaycgOiAnbm9uZSc7XHJcblx0fSxcclxuXHRzaG93QmxvY2tEb20oIHJlc3VsdCApIHtcclxuXHRcdGNvbnN0IGlucHV0c0xpc3QgPSB0aGlzLnJvb3QuZGF0YUlucHV0cztcclxuXHJcblx0XHRpZiAoICFyZXN1bHQgKSB7XHJcblx0XHRcdHRoaXMubm9kZS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdE9iamVjdC5rZXlzKCBpbnB1dHNMaXN0ICkuZm9yRWFjaCgga2V5ID0+IHtcclxuXHRcdFx0XHRpbnB1dHNMaXN0W2tleV0ucmVDYWxjdWxhdGVGb3JtdWxhKCk7XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuY29tbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSggdGhpcy5ub2RlLCB0aGlzLmNvbW1lbnQgKTtcclxuXHJcblx0XHRPYmplY3Qua2V5cyggaW5wdXRzTGlzdCApLmZvckVhY2goIGtleSA9PiB7XHJcblx0XHRcdGlucHV0c0xpc3Rba2V5XS5yZUNhbGN1bGF0ZUZvcm11bGEoKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG5cdGRpc2FibGVCbG9jayggcmVzdWx0ICkge1xyXG5cdFx0dGhpcy5ub2RlLmRpc2FibGVkID0gcmVzdWx0O1xyXG5cdH0sXHJcblx0c2V0RnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmZ1bmN0aW9uID0gdGhpcy5ub2RlLmRhdGFzZXQuamZiRnVuYztcclxuXHJcblx0XHRsZXQgcGFyc2VkO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cGFyc2VkID0gSlNPTi5wYXJzZSggdGhpcy5mdW5jdGlvbiApO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKCBlcnJvciApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgWyBbIG5hbWUsIHNldHRpbmdzIF0gXSA9IE9iamVjdC5lbnRyaWVzKCBwYXJzZWQgKTtcclxuXHJcblx0XHR0aGlzLmZ1bmN0aW9uID0gbmFtZTtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uYWxCbG9jazsiLCJpbXBvcnQgQ29uZGl0aW9uc0xpc3QgZnJvbSAnLi9Db25kaXRpb25zTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25zQmxvY2tMaXN0KCBjb25kaXRpb25zLCByb290ICkge1xyXG5cdENvbmRpdGlvbnNMaXN0LmNhbGwoIHRoaXMsIGNvbmRpdGlvbnMsIHJvb3QgKTtcclxufVxyXG5cclxuQ29uZGl0aW9uc0Jsb2NrTGlzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25zTGlzdC5wcm90b3R5cGUgKTtcclxuLyoqXHJcbiAqIEB0eXBlIHtDb25kaXRpb25hbEJsb2NrfVxyXG4gKi9cclxuQ29uZGl0aW9uc0Jsb2NrTGlzdC5wcm90b3R5cGUuYmxvY2sgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uc0Jsb2NrTGlzdDsiLCJpbXBvcnQgeyBjcmVhdGVDb25kaXRpb25JdGVtIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgT3JPcGVyYXRvckl0ZW0gZnJvbSAnLi9Pck9wZXJhdG9ySXRlbSc7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25zTGlzdCggY29uZGl0aW9ucywgcm9vdCApIHtcclxuXHR0aGlzLnJvb3QgPSByb290O1xyXG5cdHRoaXMuc2V0Q29uZGl0aW9ucyggY29uZGl0aW9ucyApO1xyXG59XHJcblxyXG5Db25kaXRpb25zTGlzdC5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0cm9vdDogbnVsbCxcclxuXHRjb25kaXRpb25zOiBbXSxcclxuXHRpbnZhbGlkOiBbXSxcclxuXHRncm91cHM6IFtdLFxyXG5cdC8qKlxyXG5cdCAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBjYWxsYmFjay5cclxuXHQgKiBJdCB1c2VkIGluIENvbmRpdGlvbkZpZWxkSXRlbS5cclxuXHQgKlxyXG5cdCAqIFJ1bnMgZXZlcnkgdGltZSwgd2hlbiBjb25kaXRpb25zIGlzIG1hdGNoXHJcblx0ICovXHJcblx0b25DaGFuZ2VSZWxhdGVkKCkge1xyXG5cdFx0aWYgKCAhdGhpcy5nZXRSZXN1bHQoKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5vbk1hdGNoQ29uZGl0aW9ucygpO1xyXG5cdH0sXHJcblx0b25NYXRjaENvbmRpdGlvbnMoKSB7fSxcclxuXHRvYnNlcnZlKCkge1xyXG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIHRoaXMuZ2V0Q29uZGl0aW9ucygpICkge1xyXG5cdFx0XHRjb25kaXRpb24ub2JzZXJ2ZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2V0Q29uZGl0aW9ucyggY29uZGl0aW9ucyApIHtcclxuXHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBjb25kaXRpb25zICkge1xyXG5cdFx0XHRjb25kaXRpb25zID0gSlNPTi5wYXJzZSggY29uZGl0aW9ucyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnMubWFwKFxyXG5cdFx0XHRpdGVtID0+IGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIGl0ZW0sIHRoaXMgKSxcclxuXHRcdCkuZmlsdGVyKCBpdGVtID0+IGl0ZW0gKTtcclxuXHJcblx0XHRjb25zdCBncm91cHMgICA9IHt9O1xyXG5cdFx0bGV0IGdyb3VwSW5kZXggPSAwO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmdldENvbmRpdGlvbnMoKSApIHtcclxuXHRcdFx0aWYgKCBjb25kaXRpb24gaW5zdGFuY2VvZiBPck9wZXJhdG9ySXRlbSApIHtcclxuXHRcdFx0XHRncm91cEluZGV4Kys7XHJcblxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdID0gZ3JvdXBzWyBncm91cEluZGV4IF0gPz8gW107XHJcblx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdLnB1c2goIGNvbmRpdGlvbiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ3JvdXBzID0gT2JqZWN0LnZhbHVlcyggZ3JvdXBzICk7XHJcblx0fSxcclxuXHRnZXRSZXN1bHQoKSB7XHJcblx0XHR0aGlzLmludmFsaWQgPSBbXTtcclxuXHJcblx0XHRpZiAoICF0aGlzLmdyb3Vwcy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IGdyb3VwIG9mIHRoaXMuZ3JvdXBzICkge1xyXG5cdFx0XHRpZiAoIHRoaXMuaXNWYWxpZEdyb3VwKCBncm91cCApICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0aXNWYWxpZEdyb3VwKCBjb25kaXRpb25zR3JvdXAgKSB7XHJcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgY29uZGl0aW9uc0dyb3VwICkge1xyXG5cdFx0XHRpZiAoIGNvbmRpdGlvbi5pc1Bhc3NlZCgpICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuaW52YWxpZC5wdXNoKCBjb25kaXRpb24gKTtcclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0FycmF5PENvbmRpdGlvbkZpZWxkSXRlbSB8IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0+fVxyXG5cdCAqL1xyXG5cdGdldENvbmRpdGlvbnMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25kaXRpb25zO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zTGlzdDsiLCJpbXBvcnQgQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0NvbmRpdGlvbkNoZWNrZXInO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGdldFRpbWVzdGFtcCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5jb25zdCB7XHJcblx0ICAgICAgTWluX0luX1NlYyxcclxuXHQgICAgICBNaWxsaV9Jbl9TZWMsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckNvbnN0O1xyXG5cclxuY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cclxuZnVuY3Rpb24gRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyKCkge1xyXG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0cmV0dXJuIFsgJ2RhdGUnLCAndGltZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxyXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lOiBjdXJyZW50IH0gPSBnZXRUaW1lc3RhbXAoIGlucHV0LnZhbHVlLmN1cnJlbnQgKTtcclxuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlICAgICAgPSBjb25kaXRpb24udmFsdWUubWFwKCB2YWx1ZSA9PiB7XHJcblx0XHRcdGNvbnN0IHsgdGltZSwgdHlwZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cclxuXHRcdFx0aWYgKCAnbnVtYmVyJyA9PT0gdHlwZSAmJiBjb25kaXRpb24udXNlX3ByZXNldCApIHtcclxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXHJcblx0XHRcdFx0cmV0dXJuIHRpbWUgKiBNaWxsaV9Jbl9TZWMgKyBvZmZzZXQgKiBNaW5fSW5fU2VjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGltZTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkRhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcblxyXG5mdW5jdGlvbiBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIoKSB7XHJcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMub3BlcmF0b3JzLm9uZV9vZiA9ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWVzICkgPT4ge1xyXG5cdFx0aWYgKCAhY29uZGl0aW9uVmFsdWVzPy5sZW5ndGggfHwgIWN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcclxuXHRcdFx0dmFsID0+IC0xICE9PSBjb25kaXRpb25WYWx1ZXMuaW5kZXhPZiggdmFsICksXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub3BlcmF0b3JzLmNvbnRhaW4gPSAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlcyApID0+IHtcclxuXHRcdGlmICggIWN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcclxuXHRcdFx0dmFsID0+IHZhbC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZXNbIDAgXSApICE9PSAtMSxcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gaW5wdXQuaXNBcnJheSgpO1xyXG5cdH07XHJcbn1cclxuXHJcbk11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVDb25kaXRpb25DaGVja2VyO1xyXG4iLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gT3JPcGVyYXRvckl0ZW0oKSB7XHJcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRvcHRpb25zLm9yX29wZXJhdG9yID8/IGZhbHNlXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbk9yT3BlcmF0b3JJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPck9wZXJhdG9ySXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uRmllbGRJdGVtIGZyb20gJy4vQ29uZGl0aW9uRmllbGRJdGVtJztcclxuaW1wb3J0IENvbmRpdGlvbmFsQmxvY2sgZnJvbSAnLi9Db25kaXRpb25hbEJsb2NrJztcclxuaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcclxuaW1wb3J0IE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL011bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcic7XHJcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcclxuaW1wb3J0IERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0RhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcic7XHJcbmltcG9ydCBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0nO1xyXG5pbXBvcnQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlciBmcm9tICcuL0NhbGN1bGF0ZWRGaWVsZENoZWNrZXInO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCBnZXRJdGVtVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC50eXBlcycsXHJcblx0W1xyXG5cdFx0Q29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLFxyXG5cdFx0T3JPcGVyYXRvckl0ZW0sXHJcblx0XHRDb25kaXRpb25GaWVsZEl0ZW0sXHJcblx0XSxcclxuKTtcclxuLyoqXHJcbiAqIEB0eXBlIHtDb25kaXRpb25JdGVtW119XHJcbiAqL1xyXG5sZXQgaXRlbVR5cGVzICAgICAgPSBbXTtcclxuXHJcbmNvbnN0IGdldENoZWNrZXJzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwuY2hlY2tlcnMnLFxyXG5cdFtcclxuXHRcdE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcixcclxuXHRcdERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcixcclxuXHRcdENhbGN1bGF0ZWRGaWVsZENoZWNrZXIsXHJcblx0XHRDb25kaXRpb25DaGVja2VyLFxyXG5cdF0sXHJcbik7XHJcblxyXG5sZXQgY2hlY2tlcnMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG9wdGlvbnMge3t9fVxyXG4gKiBAcGFyYW0gIGxpc3QgICAge0NvbmRpdGlvbnNMaXN0fVxyXG4gKiBAcmV0dXJuIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ29uZGl0aW9uSXRlbSggb3B0aW9ucywgbGlzdCApIHtcclxuXHRpZiAoICFpdGVtVHlwZXMubGVuZ3RoICkge1xyXG5cdFx0aXRlbVR5cGVzID0gZ2V0SXRlbVR5cGVzKCk7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBjb25zdCBkYXRhVHlwZSBvZiBpdGVtVHlwZXMgKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtDb25kaXRpb25JdGVtfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGRhdGFUeXBlKCk7XHJcblxyXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggb3B0aW9ucyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGN1cnJlbnQuc2V0TGlzdCggbGlzdCApO1xyXG5cdFx0Y3VycmVudC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBub2RlXHJcbiAqIEBwYXJhbSAgcm9vdFxyXG4gKiBAcmV0dXJuIHtDb25kaXRpb25hbEJsb2NrfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgcm9vdCApIHtcclxuXHRpZiAoIG5vZGUuaGFzT3duUHJvcGVydHkoICdqZmJDb25kaXRpb25hbCcgKSApIHtcclxuXHRcdHJldHVybiBub2RlLmpmYkNvbmRpdGlvbmFsO1xyXG5cdH1cclxuXHRjb25zdCBibG9jayA9IG5ldyBDb25kaXRpb25hbEJsb2NrKCBub2RlLCByb290ICk7XHJcblxyXG5cdGJsb2NrLm9ic2VydmUoKTtcclxuXHRibG9jay5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpO1xyXG5cclxuXHRyZXR1cm4gYmxvY2s7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrZXIoIGlucHV0ICkge1xyXG5cdGlmICggIWNoZWNrZXJzLmxlbmd0aCApIHtcclxuXHRcdGNoZWNrZXJzID0gZ2V0Q2hlY2tlcnMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IGNoZWNrZXIgb2YgY2hlY2tlcnMgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGNoZWNrZXIoKTtcclxuXHJcblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBpbnB1dCApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY3VycmVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGNyZWF0ZUNvbmRpdGlvbkl0ZW0sXHJcblx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcclxuXHRjcmVhdGVDaGVja2VyLFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ2hlY2tlciwgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuaW1wb3J0IENvbmRpdGlvbmFsQmxvY2sgZnJvbSAnLi9Db25kaXRpb25hbEJsb2NrJztcclxuaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcclxuaW1wb3J0IENvbmRpdGlvbnNMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0xpc3QnO1xyXG5cclxuY29uc3QgeyBhZGRBY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXHJcblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xyXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBvYnNlcnZhYmxlLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdGBbZGF0YS1qZmItY29uZGl0aW9uYWxdYCxcclxuXHRcdCkgKSB7XHJcblx0XHRcdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2soIG5vZGUsIG9ic2VydmFibGUgKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdDIwLFxyXG4pO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGlucHV0LmNoZWNrZXIgPSBjcmVhdGVDaGVja2VyKCBpbnB1dCApO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC5ibG9jay5ydW5GdW5jdGlvbicsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBmdW5jTmFtZVxyXG5cdCAqIEBwYXJhbSByZXN1bHRcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uYWxCbG9jayB7Q29uZGl0aW9uYWxCbG9ja31cclxuXHQgKi9cclxuXHRmdW5jdGlvbiAoIGZ1bmNOYW1lLCByZXN1bHQsIGNvbmRpdGlvbmFsQmxvY2sgKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdCdzZXRDc3NDbGFzcycgIT09IGZ1bmNOYW1lIHx8XHJcblx0XHRcdCFjb25kaXRpb25hbEJsb2NrLnNldHRpbmdzPy5jbGFzc05hbWVcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uZGl0aW9uYWxCbG9jay5ub2RlLmNsYXNzTGlzdC50b2dnbGUoXHJcblx0XHRcdGNvbmRpdGlvbmFsQmxvY2suc2V0dGluZ3MuY2xhc3NOYW1lLFxyXG5cdFx0XHRyZXN1bHQsXHJcblx0XHQpO1xyXG5cdH0sXHJcbik7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxyXG5cdCksXHJcblx0Q29uZGl0aW9uSXRlbSxcclxuXHRDb25kaXRpb25hbEJsb2NrLFxyXG5cdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2ssXHJcblx0Y3JlYXRlQ2hlY2tlcixcclxuXHRDb25kaXRpb25zTGlzdCxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9