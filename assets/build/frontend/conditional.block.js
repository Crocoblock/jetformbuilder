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
   * @param input {InputData}
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
   * @param input {InputData}
   * @return {boolean}
   */
  isSupported: input => true,
  operators: {},
  getOperators: function () {
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
   * @param input {InputData}
   */
  check: function (condition, input) {
    const current = input.value.current;
    const conditionValue = condition.value;
    return this.checkRaw(condition.operator, current, conditionValue);
  },
  checkRaw: function (operator, current, conditionValue) {
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

/**
 * @property  operator
 *
 * @constructor
 */
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
   * @returns {InputData|boolean}
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
 * @type {Boolean}
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
 * @property {ConditionsList|ConditionsBlockList} list
 */
function ConditionItem() {}
ConditionItem.prototype.isSupported = function (options) {
  return false;
};
ConditionItem.prototype.observe = function () {};
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
   * @type {String|Object}
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
   * @link https://github.com/Crocoblock/issues-tracker/issues/1553
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
      return;
    }
    this.node.style.display = result ? 'block' : 'none';
  },
  showBlockDom(result) {
    if (!result) {
      this.node.remove();
      return;
    }
    this.comment.parentElement.insertBefore(this.node, this.comment);
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
   * @returns {array<ConditionFieldItem|ConditionPageStateItem>}
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
   * @param input {InputData}
   */
  this.check = function (condition, input) {
    const {
      time: current
    } = getTimestamp(input.value.current);
    let conditionValue = condition.value.map(value => {
      const {
        time,
        type
      } = getTimestamp(value);
      if ('number' === type && condition.use_preset) {
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
 * @param options {{}}
 * @param list {ConditionsList}
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
 * @param node
 * @param root
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFLQTtBQUtBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNMQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9DYWxjdWxhdGVkRmllbGRDaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uRmllbGRJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbmFsQmxvY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uc0Jsb2NrTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svTXVsdGlwbGVDb25kaXRpb25DaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL09yT3BlcmF0b3JJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRmllbGRDaGVja2VyKCkge1xyXG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHJldHVybiAnY2FsY3VsYXRlZCcgPT09IGlucHV0LmlucHV0VHlwZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XHJcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5jaGVjayA9IGZ1bmN0aW9uICggY29uZGl0aW9uLCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgID0gaW5wdXQuY2FsY1ZhbHVlO1xyXG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgPSBjb25kaXRpb24udmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkRmllbGRDaGVja2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRmllbGRDaGVja2VyOyIsImNvbnN0IHtcclxuXHQgICAgICBpc0VtcHR5LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25DaGVja2VyKCkge1xyXG5cdHRoaXMub3BlcmF0b3JzID0gdGhpcy5nZXRPcGVyYXRvcnMoKTtcclxufVxyXG5cclxuQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc1N1cHBvcnRlZDogKCBpbnB1dCApID0+IHRydWUsXHJcblx0b3BlcmF0b3JzOiB7fSxcclxuXHRnZXRPcGVyYXRvcnM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGVxdWFsOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gY3VycmVudCA9PT1cclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdLFxyXG5cdFx0XHRlbXB0eTogKCBjdXJyZW50ICkgPT4gaXNFbXB0eSggY3VycmVudCApLFxyXG5cdFx0XHRncmVhdGVyOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPiArKFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cclxuXHRcdFx0KSxcclxuXHRcdFx0Z3JlYXRlcl9vcl9lcTogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXHJcblx0XHRcdFx0Y3VycmVudFxyXG5cdFx0XHQpID49ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRsZXNzOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPCArKFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cclxuXHRcdFx0KSxcclxuXHRcdFx0bGVzc19vcl9lcTogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXHJcblx0XHRcdFx0Y3VycmVudFxyXG5cdFx0XHQpIDw9ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRiZXR3ZWVuOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdGlmICggIWNvbmRpdGlvblZhbHVlPy5sZW5ndGggfHwgbnVsbCA9PT0gY3VycmVudCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdIDw9ICtjdXJyZW50ICYmXHJcblx0XHRcdFx0XHQrY3VycmVudCA8PSBjb25kaXRpb25WYWx1ZVsgMSBdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25lX29mOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdGlmICggIWNvbmRpdGlvblZhbHVlPy5sZW5ndGggKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gMCA8PSBjb25kaXRpb25WYWx1ZS5pbmRleE9mKCBjdXJyZW50ICk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRhaW46ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0aWYgKCAhY3VycmVudCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIDAgPD0gY3VycmVudC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZVsgMCBdICk7XHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxyXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGNoZWNrOiBmdW5jdGlvbiAoIGNvbmRpdGlvbiwgaW5wdXQgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ICAgICAgICA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0XHRjb25zdCBjb25kaXRpb25WYWx1ZSA9IGNvbmRpdGlvbi52YWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xyXG5cdH0sXHJcblx0Y2hlY2tSYXc6IGZ1bmN0aW9uICggb3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkge1xyXG5cdFx0aWYgKCB0aGlzLm9wZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eSggb3BlcmF0b3IgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3BlcmF0b3JzWyBvcGVyYXRvciBdKFxyXG5cdFx0XHRcdGN1cnJlbnQsXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWUsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAwICE9PSBvcGVyYXRvci5pbmRleE9mKCAnbm90XycgKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9wZXJhdG9yTmFtZSA9IG9wZXJhdG9yLnNsaWNlKCA0ICk7XHJcblxyXG5cdFx0aWYgKCAhdGhpcy5vcGVyYXRvcnMuaGFzT3duUHJvcGVydHkoIG9wZXJhdG9yTmFtZSApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICF0aGlzLm9wZXJhdG9yc1sgb3BlcmF0b3JOYW1lIF0oXHJcblx0XHRcdGN1cnJlbnQsXHJcblx0XHRcdGNvbmRpdGlvblZhbHVlLFxyXG5cdFx0KTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uQ2hlY2tlcjsiLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5cclxuY29uc3QgeyBDYWxjdWxhdGVkRm9ybXVsYSB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkgIG9wZXJhdG9yXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gQ29uZGl0aW9uRmllbGRJdGVtKCkge1xyXG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuICEhb3B0aW9ucz8uZmllbGQ/Lmxlbmd0aDtcclxuXHR9O1xyXG5cdHRoaXMub2JzZXJ2ZSAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBpbnB1dCAgICAgICA9IHRoaXMuZ2V0SW5wdXQoKTtcclxuXHRcdHRoaXMubGlzdC5fZmllbGRzID0gdGhpcy5saXN0Ll9maWVsZHMgPz8gW107XHJcblxyXG5cdFx0aWYgKCAhaW5wdXQgfHwgdGhpcy5saXN0Ll9maWVsZHMuaW5jbHVkZXMoIHRoaXMuZmllbGQgKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubGlzdC5fZmllbGRzLnB1c2goIHRoaXMuZmllbGQgKTtcclxuXHRcdGlucHV0LndhdGNoKCAoKSA9PiB0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm5zIHtJbnB1dERhdGF8Ym9vbGVhbn1cclxuXHQgKi9cclxuXHR0aGlzLmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGlzdC5yb290LmdldElucHV0KCB0aGlzLmZpZWxkICk7XHJcblx0fTtcclxuXHR0aGlzLmlzUGFzc2VkICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcclxuXHJcblx0XHRpZiAoICFpbnB1dCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpbnB1dC5jaGVja2VyLmNoZWNrKCB0aGlzLCBpbnB1dCApO1xyXG5cdH07XHJcblx0dGhpcy5zZXRPcHRpb25zID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0dGhpcy5maWVsZCAgICAgICAgPSBvcHRpb25zLmZpZWxkO1xyXG5cdFx0dGhpcy5vcGVyYXRvciAgICAgPSBvcHRpb25zLm9wZXJhdG9yO1xyXG5cdFx0dGhpcy5yZW5kZXJfc3RhdGUgPSBvcHRpb25zLnJlbmRlcl9zdGF0ZTtcclxuXHRcdHRoaXMudXNlX3ByZXNldCAgID0gb3B0aW9ucy51c2VfcHJlc2V0O1xyXG5cdFx0bGV0IHZhbHVlICAgICAgICAgPSBvcHRpb25zPy52YWx1ZTtcclxuXHJcblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KCAnLCcgKS5tYXAoIGl0ZW0gPT4gaXRlbS50cmltKCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMudXNlX3ByZXNldCApIHtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmFsdWUgPSB7fTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBbIGluZGV4LCBmb3JtdWxhIF0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlICkgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMubGlzdC5yb290ICk7XHJcblxyXG5cdFx0XHRjdXJyZW50Lm9ic2VydmUoIGZvcm11bGEgKTtcclxuXHRcdFx0Y3VycmVudC5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZVsgaW5kZXggXSA9ICcnICsgY3VycmVudC5jYWxjdWxhdGUoKTtcclxuXHRcdFx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGN1cnJlbnQuc2V0UmVzdWx0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy52YWx1ZSA9IE9iamVjdC52YWx1ZXMoIHRoaXMudmFsdWUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcclxuXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUuZmllbGQgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge0FycmF5fVxyXG4gKi9cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS52YWx1ZSA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7J2VxdWFsJ3wnZ3JlYXRlcid8J2xlc3MnfCdiZXR3ZWVuJ3wnb25lX29mJ3wnY29udGFpbid9XHJcbiAqL1xyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLm9wZXJhdG9yID0gbnVsbDtcclxuLyoqXHJcbiAqIEB0eXBlIHtCb29sZWFufVxyXG4gKi9cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS51c2VfcHJlc2V0ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkZpZWxkSXRlbTsiLCIvKipcclxuICogQHByb3BlcnR5IHtDb25kaXRpb25zTGlzdHxDb25kaXRpb25zQmxvY2tMaXN0fSBsaXN0XHJcbiAqL1xyXG5mdW5jdGlvbiBDb25kaXRpb25JdGVtKCkge1xyXG59XHJcblxyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLm9ic2VydmUgICAgID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5zZXRPcHRpb25zICA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxufTtcclxuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuaXNQYXNzZWQgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0J1lvdSBtdXN0IHByb3ZpZGUgQ29uZGl0aW9uSXRlbTo6aXNQYXNzZWQgZnVuY3Rpb24nLFxyXG5cdCk7XHJcbn07XHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLnNldExpc3QgICAgID0gZnVuY3Rpb24gKCBsaXN0ICkge1xyXG5cdHRoaXMubGlzdCA9IGxpc3Q7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25JdGVtOyIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0oKSB7XHJcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gJ3JlbmRlcl9zdGF0ZScgPT09IG9wdGlvbnM/Lm9wZXJhdG9yO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGlzdC5yb290LmdldElucHV0KCAnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXMnICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZXRJbnB1dCgpLndhdGNoKCAoKSA9PiB0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHR0aGlzLnJlbmRlcl9zdGF0ZSA9IG9wdGlvbnMucmVuZGVyX3N0YXRlID8/IFtdO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaXNQYXNzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmdldElucHV0KCk7XHJcblxyXG5cdFx0aWYgKCAhdmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyX3N0YXRlLnNvbWUoIGN1cnJlbnQgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWUuY3VycmVudC5pbmNsdWRlcyggY3VycmVudCApO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkNvbmRpdGlvblJlbmRlclN0YXRlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xyXG5cclxuQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLnByb3RvdHlwZS5yZW5kZXJfc3RhdGUgPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvblJlbmRlclN0YXRlSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uc0Jsb2NrTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNCbG9ja0xpc3QnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGRvQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuY29uc3Qge1xyXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuY29uc3Qge1xyXG5cdCAgICAgIHZhbGlkYXRlSW5wdXRzQWxsLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25hbEJsb2NrKCBub2RlLCBvYnNlcnZhYmxlICkge1xyXG5cdHRoaXMubm9kZSAgICAgICAgICAgPSBub2RlO1xyXG5cdG5vZGUuamZiQ29uZGl0aW9uYWwgPSB0aGlzO1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XHJcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtDb25kaXRpb25zQmxvY2tMaXN0fVxyXG5cdCAqL1xyXG5cdHRoaXMubGlzdCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtTdHJpbmd8T2JqZWN0fVxyXG5cdCAqL1xyXG5cdHRoaXMuZnVuY3Rpb24gPSBudWxsO1xyXG5cdHRoaXMuc2V0dGluZ3MgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7UGFnZVN0YXRlfVxyXG5cdCAqL1xyXG5cdHRoaXMucGFnZSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtNdWx0aVN0ZXBTdGF0ZX1cclxuXHQgKi9cclxuXHR0aGlzLm11bHRpc3RlcCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOb2RlfVxyXG5cdCAqL1xyXG5cdHRoaXMuY29tbWVudCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtJbnB1dERhdGFbXX1cclxuXHQgKi9cclxuXHR0aGlzLmlucHV0cyA9IFtdO1xyXG5cclxuXHR0aGlzLmlzUmlnaHQgPSBuZXcgUmVhY3RpdmVWYXIoIG51bGwgKTtcclxuXHR0aGlzLmlzUmlnaHQubWFrZSgpO1xyXG5cclxuXHR0aGlzLnNldENvbmRpdGlvbnMoKTtcclxuXHR0aGlzLnNldElucHV0cygpO1xyXG5cdHRoaXMuc2V0RnVuY3Rpb24oKTtcclxuXHJcblx0aWYgKCAhd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5kZXZtb2RlICkge1xyXG5cdFx0ZGVsZXRlIHRoaXMubm9kZS5kYXRhc2V0LmpmYkNvbmRpdGlvbmFsO1xyXG5cdFx0ZGVsZXRlIHRoaXMubm9kZS5kYXRhc2V0LmpmYkZ1bmM7XHJcblx0fVxyXG5cclxuXHRkb0FjdGlvbiggJ2pldC5mYi5jb25kaXRpb25hbC5pbml0JywgdGhpcyApO1xyXG59XHJcblxyXG5Db25kaXRpb25hbEJsb2NrLnByb3RvdHlwZSA9IHtcclxuXHRzZXRDb25kaXRpb25zKCkge1xyXG5cdFx0Y29uc3QgeyBqZmJDb25kaXRpb25hbCB9ID0gdGhpcy5ub2RlLmRhdGFzZXQ7XHJcblxyXG5cdFx0dGhpcy5saXN0ICAgICAgID0gbmV3IENvbmRpdGlvbnNCbG9ja0xpc3QoIGpmYkNvbmRpdGlvbmFsLCB0aGlzLnJvb3QgKTtcclxuXHRcdHRoaXMubGlzdC5ibG9jayA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5pc1JpZ2h0LmN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0UmVzdWx0KCk7XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0c2V0SW5wdXRzKCkge1xyXG5cdFx0dGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKFxyXG5cdFx0XHR0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWpmYi1zeW5jXScgKSxcclxuXHRcdCkubWFwKFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0uamZiU3luYyxcclxuXHRcdCkuZmlsdGVyKFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0sXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0aW5zZXJ0Q29tbWVudCgpIHtcclxuXHRcdGlmICggIXRoaXMuc2V0dGluZ3M/LmRvbSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoICcnICk7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IGNvbW1lbnQgYWZ0ZXIgY29uZGl0aW9uYWwgYmxvY2tcclxuXHRcdHRoaXMubm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcclxuXHRcdFx0dGhpcy5jb21tZW50LFxyXG5cdFx0XHR0aGlzLm5vZGUubmV4dFNpYmxpbmcsXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0b2JzZXJ2ZSgpIHtcclxuXHRcdGlmICggdGhpcy5pc09ic2VydmVkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzT2JzZXJ2ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5pbnNlcnRDb21tZW50KCk7XHJcblxyXG5cdFx0dGhpcy5pc1JpZ2h0LndhdGNoKCAoKSA9PiB0aGlzLnJ1bkZ1bmN0aW9uKCkgKTtcclxuXHRcdHRoaXMuaXNSaWdodC53YXRjaCggKCkgPT4gdGhpcy52YWxpZGF0ZUlucHV0cygpICk7XHJcblx0XHR0aGlzLmxpc3Qub2JzZXJ2ZSgpO1xyXG5cdH0sXHJcblx0cnVuRnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmlzUmlnaHQuY3VycmVudDtcclxuXHJcblx0XHRzd2l0Y2ggKCB0aGlzLmZ1bmN0aW9uICkge1xyXG5cdFx0XHRjYXNlICdzaG93JzpcclxuXHRcdFx0XHR0aGlzLnNob3dCbG9jayggcmVzdWx0ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2hpZGUnOlxyXG5cdFx0XHRcdHRoaXMuc2hvd0Jsb2NrKCAhcmVzdWx0ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Rpc2FibGUnOlxyXG5cdFx0XHRcdHRoaXMuZGlzYWJsZUJsb2NrKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRkb0FjdGlvbihcclxuXHRcdFx0XHRcdCdqZXQuZmIuY29uZGl0aW9uYWwuYmxvY2sucnVuRnVuY3Rpb24nLFxyXG5cdFx0XHRcdFx0dGhpcy5mdW5jdGlvbixcclxuXHRcdFx0XHRcdHJlc3VsdCxcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBDb21wYXRpYmlsaXR5IHdpdGggU2F2ZSBQcm9ncmVzc1xyXG5cdCAqIEBzaW5jZSAzLjAuMSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjQ4MFxyXG5cdCAqXHJcblx0ICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE1NTNcclxuXHQgKi9cclxuXHR2YWxpZGF0ZUlucHV0cygpIHtcclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdFx0dmFsaWRhdGVJbnB1dHNBbGwoIHRoaXMuaW5wdXRzLCB0cnVlICkuXHJcblx0XHRcdFx0dGhlbiggKCkgPT4ge30gKS5cclxuXHRcdFx0XHRjYXRjaCggKCkgPT4ge30gKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG5cdHNob3dCbG9jayggcmVzdWx0ICkge1xyXG5cdFx0dGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdqZXQtZm9ybS1idWlsZGVyLS1oaWRkZW4nICk7XHJcblxyXG5cdFx0aWYgKCB0aGlzLnNldHRpbmdzPy5kb20gKSB7XHJcblx0XHRcdHRoaXMuc2hvd0Jsb2NrRG9tKCByZXN1bHQgKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZS5zdHlsZS5kaXNwbGF5ID0gcmVzdWx0ID8gJ2Jsb2NrJyA6ICdub25lJztcclxuXHR9LFxyXG5cdHNob3dCbG9ja0RvbSggcmVzdWx0ICkge1xyXG5cdFx0aWYgKCAhcmVzdWx0ICkge1xyXG5cdFx0XHR0aGlzLm5vZGUucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb21tZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKCB0aGlzLm5vZGUsIHRoaXMuY29tbWVudCApO1xyXG5cdH0sXHJcblx0ZGlzYWJsZUJsb2NrKCByZXN1bHQgKSB7XHJcblx0XHR0aGlzLm5vZGUuZGlzYWJsZWQgPSByZXN1bHQ7XHJcblx0fSxcclxuXHRzZXRGdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuZnVuY3Rpb24gPSB0aGlzLm5vZGUuZGF0YXNldC5qZmJGdW5jO1xyXG5cclxuXHRcdGxldCBwYXJzZWQ7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRwYXJzZWQgPSBKU09OLnBhcnNlKCB0aGlzLmZ1bmN0aW9uICk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBbIFsgbmFtZSwgc2V0dGluZ3MgXSBdID0gT2JqZWN0LmVudHJpZXMoIHBhcnNlZCApO1xyXG5cclxuXHRcdHRoaXMuZnVuY3Rpb24gPSBuYW1lO1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25hbEJsb2NrOyIsImltcG9ydCBDb25kaXRpb25zTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNMaXN0JztcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbnNCbG9ja0xpc3QoIGNvbmRpdGlvbnMsIHJvb3QgKSB7XHJcblx0Q29uZGl0aW9uc0xpc3QuY2FsbCggdGhpcywgY29uZGl0aW9ucywgcm9vdCApO1xyXG59XHJcblxyXG5Db25kaXRpb25zQmxvY2tMaXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbnNMaXN0LnByb3RvdHlwZSApO1xyXG4vKipcclxuICogQHR5cGUge0NvbmRpdGlvbmFsQmxvY2t9XHJcbiAqL1xyXG5Db25kaXRpb25zQmxvY2tMaXN0LnByb3RvdHlwZS5ibG9jayA9IG51bGw7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zQmxvY2tMaXN0OyIsImltcG9ydCB7IGNyZWF0ZUNvbmRpdGlvbkl0ZW0gfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbnNMaXN0KCBjb25kaXRpb25zLCByb290ICkge1xyXG5cdHRoaXMucm9vdCA9IHJvb3Q7XHJcblx0dGhpcy5zZXRDb25kaXRpb25zKCBjb25kaXRpb25zICk7XHJcbn1cclxuXHJcbkNvbmRpdGlvbnNMaXN0LnByb3RvdHlwZSA9IHtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cclxuXHQgKi9cclxuXHRyb290OiBudWxsLFxyXG5cdGNvbmRpdGlvbnM6IFtdLFxyXG5cdGludmFsaWQ6IFtdLFxyXG5cdGdyb3VwczogW10sXHJcblx0LyoqXHJcblx0ICogWW91IGNhbiBvdmVycmlkZSB0aGlzIGNhbGxiYWNrLlxyXG5cdCAqIEl0IHVzZWQgaW4gQ29uZGl0aW9uRmllbGRJdGVtLlxyXG5cdCAqXHJcblx0ICogUnVucyBldmVyeSB0aW1lLCB3aGVuIGNvbmRpdGlvbnMgaXMgbWF0Y2hcclxuXHQgKi9cclxuXHRvbkNoYW5nZVJlbGF0ZWQoKSB7XHJcblx0XHRpZiAoICF0aGlzLmdldFJlc3VsdCgpICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLm9uTWF0Y2hDb25kaXRpb25zKCk7XHJcblx0fSxcclxuXHRvbk1hdGNoQ29uZGl0aW9ucygpIHt9LFxyXG5cdG9ic2VydmUoKSB7XHJcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgdGhpcy5nZXRDb25kaXRpb25zKCkgKSB7XHJcblx0XHRcdGNvbmRpdGlvbi5vYnNlcnZlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzZXRDb25kaXRpb25zKCBjb25kaXRpb25zICkge1xyXG5cdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGNvbmRpdGlvbnMgKSB7XHJcblx0XHRcdGNvbmRpdGlvbnMgPSBKU09OLnBhcnNlKCBjb25kaXRpb25zICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb25kaXRpb25zID0gY29uZGl0aW9ucy5tYXAoXHJcblx0XHRcdGl0ZW0gPT4gY3JlYXRlQ29uZGl0aW9uSXRlbSggaXRlbSwgdGhpcyApLFxyXG5cdFx0KS5maWx0ZXIoIGl0ZW0gPT4gaXRlbSApO1xyXG5cclxuXHRcdGNvbnN0IGdyb3VwcyAgID0ge307XHJcblx0XHRsZXQgZ3JvdXBJbmRleCA9IDA7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIHRoaXMuZ2V0Q29uZGl0aW9ucygpICkge1xyXG5cdFx0XHRpZiAoIGNvbmRpdGlvbiBpbnN0YW5jZW9mIE9yT3BlcmF0b3JJdGVtICkge1xyXG5cdFx0XHRcdGdyb3VwSW5kZXgrKztcclxuXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Z3JvdXBzWyBncm91cEluZGV4IF0gPSBncm91cHNbIGdyb3VwSW5kZXggXSA/PyBbXTtcclxuXHRcdFx0Z3JvdXBzWyBncm91cEluZGV4IF0ucHVzaCggY29uZGl0aW9uICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ncm91cHMgPSBPYmplY3QudmFsdWVzKCBncm91cHMgKTtcclxuXHR9LFxyXG5cdGdldFJlc3VsdCgpIHtcclxuXHRcdHRoaXMuaW52YWxpZCA9IFtdO1xyXG5cclxuXHRcdGlmICggIXRoaXMuZ3JvdXBzLmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgZ3JvdXAgb2YgdGhpcy5ncm91cHMgKSB7XHJcblx0XHRcdGlmICggdGhpcy5pc1ZhbGlkR3JvdXAoIGdyb3VwICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRpc1ZhbGlkR3JvdXAoIGNvbmRpdGlvbnNHcm91cCApIHtcclxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiBjb25kaXRpb25zR3JvdXAgKSB7XHJcblx0XHRcdGlmICggY29uZGl0aW9uLmlzUGFzc2VkKCkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5pbnZhbGlkLnB1c2goIGNvbmRpdGlvbiApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge2FycmF5PENvbmRpdGlvbkZpZWxkSXRlbXxDb25kaXRpb25QYWdlU3RhdGVJdGVtPn1cclxuXHQgKi9cclxuXHRnZXRDb25kaXRpb25zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZGl0aW9ucztcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uc0xpc3Q7IiwiaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBnZXRUaW1lc3RhbXAsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuY29uc3Qge1xyXG5cdCAgICAgIE1pbl9Jbl9TZWMsXHJcblx0ICAgICAgTWlsbGlfSW5fU2VjLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJDb25zdDtcclxuXHJcbmNvbnN0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuXHJcbmZ1bmN0aW9uIERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcigpIHtcclxuXHRDb25kaXRpb25DaGVja2VyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdHJldHVybiBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBjb25kaXRpb24ge0NvbmRpdGlvbkZpZWxkSXRlbX1cclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lOiBjdXJyZW50IH0gPSBnZXRUaW1lc3RhbXAoIGlucHV0LnZhbHVlLmN1cnJlbnQgKTtcclxuXHRcdGxldCBjb25kaXRpb25WYWx1ZSAgICAgID0gY29uZGl0aW9uLnZhbHVlLm1hcCggdmFsdWUgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHRpbWUsIHR5cGUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHJcblx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGUgJiYgY29uZGl0aW9uLnVzZV9wcmVzZXQgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRpbWUgKiBNaWxsaV9Jbl9TZWMgKyBvZmZzZXQgKiBNaW5fSW5fU2VjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGltZTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkRhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcblxyXG5mdW5jdGlvbiBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIoKSB7XHJcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMub3BlcmF0b3JzLm9uZV9vZiA9ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWVzICkgPT4ge1xyXG5cdFx0aWYgKCAhY29uZGl0aW9uVmFsdWVzPy5sZW5ndGggfHwgIWN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcclxuXHRcdFx0dmFsID0+IC0xICE9PSBjb25kaXRpb25WYWx1ZXMuaW5kZXhPZiggdmFsICksXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub3BlcmF0b3JzLmNvbnRhaW4gPSAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlcyApID0+IHtcclxuXHRcdGlmICggIWN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcclxuXHRcdFx0dmFsID0+IHZhbC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZXNbIDAgXSApICE9PSAtMSxcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gaW5wdXQuaXNBcnJheSgpO1xyXG5cdH07XHJcbn1cclxuXHJcbk11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVDb25kaXRpb25DaGVja2VyO1xyXG4iLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gT3JPcGVyYXRvckl0ZW0oKSB7XHJcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRvcHRpb25zLm9yX29wZXJhdG9yID8/IGZhbHNlXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbk9yT3BlcmF0b3JJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPck9wZXJhdG9ySXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uRmllbGRJdGVtIGZyb20gJy4vQ29uZGl0aW9uRmllbGRJdGVtJztcclxuaW1wb3J0IENvbmRpdGlvbmFsQmxvY2sgZnJvbSAnLi9Db25kaXRpb25hbEJsb2NrJztcclxuaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcclxuaW1wb3J0IE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL011bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcic7XHJcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcclxuaW1wb3J0IERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0RhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcic7XHJcbmltcG9ydCBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0nO1xyXG5pbXBvcnQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlciBmcm9tICcuL0NhbGN1bGF0ZWRGaWVsZENoZWNrZXInO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCBnZXRJdGVtVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC50eXBlcycsXHJcblx0W1xyXG5cdFx0Q29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLFxyXG5cdFx0T3JPcGVyYXRvckl0ZW0sXHJcblx0XHRDb25kaXRpb25GaWVsZEl0ZW0sXHJcblx0XSxcclxuKTtcclxuLyoqXHJcbiAqIEB0eXBlIHtDb25kaXRpb25JdGVtW119XHJcbiAqL1xyXG5sZXQgaXRlbVR5cGVzICAgICAgPSBbXTtcclxuXHJcbmNvbnN0IGdldENoZWNrZXJzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwuY2hlY2tlcnMnLFxyXG5cdFtcclxuXHRcdE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcixcclxuXHRcdERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcixcclxuXHRcdENhbGN1bGF0ZWRGaWVsZENoZWNrZXIsXHJcblx0XHRDb25kaXRpb25DaGVja2VyLFxyXG5cdF0sXHJcbik7XHJcblxyXG5sZXQgY2hlY2tlcnMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gb3B0aW9ucyB7e319XHJcbiAqIEBwYXJhbSBsaXN0IHtDb25kaXRpb25zTGlzdH1cclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIG9wdGlvbnMsIGxpc3QgKSB7XHJcblx0aWYgKCAhaXRlbVR5cGVzLmxlbmd0aCApIHtcclxuXHRcdGl0ZW1UeXBlcyA9IGdldEl0ZW1UeXBlcygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgZGF0YVR5cGUgb2YgaXRlbVR5cGVzICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7Q29uZGl0aW9uSXRlbX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBkYXRhVHlwZSgpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG9wdGlvbnMgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjdXJyZW50LnNldExpc3QoIGxpc3QgKTtcclxuXHRcdGN1cnJlbnQuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqIEBwYXJhbSByb290XHJcbiAqIEByZXR1cm4ge0NvbmRpdGlvbmFsQmxvY2t9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDb25kaXRpb25hbEJsb2NrKCBub2RlLCByb290ICkge1xyXG5cdGlmICggbm9kZS5oYXNPd25Qcm9wZXJ0eSggJ2pmYkNvbmRpdGlvbmFsJyApICkge1xyXG5cdFx0cmV0dXJuIG5vZGUuamZiQ29uZGl0aW9uYWw7XHJcblx0fVxyXG5cdGNvbnN0IGJsb2NrID0gbmV3IENvbmRpdGlvbmFsQmxvY2soIG5vZGUsIHJvb3QgKTtcclxuXHJcblx0YmxvY2sub2JzZXJ2ZSgpO1xyXG5cdGJsb2NrLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XHJcblxyXG5cdHJldHVybiBibG9jaztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tlciggaW5wdXQgKSB7XHJcblx0aWYgKCAhY2hlY2tlcnMubGVuZ3RoICkge1xyXG5cdFx0Y2hlY2tlcnMgPSBnZXRDaGVja2VycygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgY2hlY2tlciBvZiBjaGVja2VycyApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgY2hlY2tlcigpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0Y3JlYXRlQ29uZGl0aW9uSXRlbSxcclxuXHRjcmVhdGVDb25kaXRpb25hbEJsb2NrLFxyXG5cdGNyZWF0ZUNoZWNrZXIsXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVDaGVja2VyLCBjcmVhdGVDb25kaXRpb25hbEJsb2NrIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQ29uZGl0aW9uYWxCbG9jayBmcm9tICcuL0NvbmRpdGlvbmFsQmxvY2snO1xyXG5pbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5pbXBvcnQgQ29uZGl0aW9uc0xpc3QgZnJvbSAnLi9Db25kaXRpb25zTGlzdCc7XHJcblxyXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrJyxcclxuXHRmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XHJcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0YFtkYXRhLWpmYi1jb25kaXRpb25hbF1gLFxyXG5cdFx0KSApIHtcclxuXHRcdFx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgb2JzZXJ2YWJsZSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0MjAsXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5pbnB1dC5tYWtlUmVhY3RpdmUnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0aW5wdXQuY2hlY2tlciA9IGNyZWF0ZUNoZWNrZXIoIGlucHV0ICk7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLmJsb2NrLnJ1bkZ1bmN0aW9uJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGZ1bmNOYW1lXHJcblx0ICogQHBhcmFtIHJlc3VsdFxyXG5cdCAqIEBwYXJhbSBjb25kaXRpb25hbEJsb2NrIHtDb25kaXRpb25hbEJsb2NrfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggZnVuY05hbWUsIHJlc3VsdCwgY29uZGl0aW9uYWxCbG9jayApIHtcclxuXHRcdGlmIChcclxuXHRcdFx0J3NldENzc0NsYXNzJyAhPT0gZnVuY05hbWUgfHxcclxuXHRcdFx0IWNvbmRpdGlvbmFsQmxvY2suc2V0dGluZ3M/LmNsYXNzTmFtZVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25kaXRpb25hbEJsb2NrLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcclxuXHRcdFx0Y29uZGl0aW9uYWxCbG9jay5zZXR0aW5ncy5jbGFzc05hbWUsXHJcblx0XHRcdHJlc3VsdCxcclxuXHRcdCk7XHJcblx0fSxcclxuKTtcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XHJcblx0KSxcclxuXHRDb25kaXRpb25JdGVtLFxyXG5cdENvbmRpdGlvbmFsQmxvY2ssXHJcblx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcclxuXHRjcmVhdGVDaGVja2VyLFxyXG5cdENvbmRpdGlvbnNMaXN0LFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==