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
      const event = new CustomEvent('jet-form-builder/conditional-block/block-toggle', {
        detail: {
          block: this.node,
          result
        }
      });
      document.dispatchEvent(event);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2xNQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NhbGN1bGF0ZWRGaWVsZENoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25GaWVsZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uYWxCbG9jay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25zQmxvY2tMaXN0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbnNMaXN0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0RhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9NdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svT3JPcGVyYXRvckl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcclxuXHJcbmZ1bmN0aW9uIENhbGN1bGF0ZWRGaWVsZENoZWNrZXIoKSB7XHJcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuICdjYWxjdWxhdGVkJyA9PT0gaW5wdXQuaW5wdXRUeXBlO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBjb25kaXRpb24ge0NvbmRpdGlvbkZpZWxkSXRlbX1cclxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5jaGVjayA9IGZ1bmN0aW9uICggY29uZGl0aW9uLCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgID0gaW5wdXQuY2FsY1ZhbHVlO1xyXG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgPSBjb25kaXRpb24udmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkRmllbGRDaGVja2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRmllbGRDaGVja2VyOyIsImNvbnN0IHtcclxuXHQgICAgICBpc0VtcHR5LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25DaGVja2VyKCkge1xyXG5cdHRoaXMub3BlcmF0b3JzID0gdGhpcy5nZXRPcGVyYXRvcnMoKTtcclxufVxyXG5cclxuQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc1N1cHBvcnRlZDogKCkgPT4gdHJ1ZSxcclxuXHRvcGVyYXRvcnM6IHt9LFxyXG5cdGdldE9wZXJhdG9ycyAoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRlcXVhbDogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IGN1cnJlbnQgPT09XHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXSxcclxuXHRcdFx0ZW1wdHk6ICggY3VycmVudCApID0+IGlzRW1wdHkoIGN1cnJlbnQgKSxcclxuXHRcdFx0Z3JlYXRlcjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXHJcblx0XHRcdFx0Y3VycmVudFxyXG5cdFx0XHQpID4gKyhcclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXHJcblx0XHRcdCksXHJcblx0XHRcdGdyZWF0ZXJfb3JfZXE6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxyXG5cdFx0XHRcdGN1cnJlbnRcclxuXHRcdFx0KSA+PSArKFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cclxuXHRcdFx0KSxcclxuXHRcdFx0bGVzczogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXHJcblx0XHRcdFx0Y3VycmVudFxyXG5cdFx0XHQpIDwgKyhcclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXHJcblx0XHRcdCksXHJcblx0XHRcdGxlc3Nfb3JfZXE6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxyXG5cdFx0XHRcdGN1cnJlbnRcclxuXHRcdFx0KSA8PSArKFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cclxuXHRcdFx0KSxcclxuXHRcdFx0YmV0d2VlbjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcclxuXHRcdFx0XHRpZiAoICFjb25kaXRpb25WYWx1ZT8ubGVuZ3RoIHx8IG51bGwgPT09IGN1cnJlbnQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXSA8PSArY3VycmVudCAmJlxyXG5cdFx0XHRcdFx0K2N1cnJlbnQgPD0gY29uZGl0aW9uVmFsdWVbIDEgXVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uZV9vZjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcclxuXHRcdFx0XHRpZiAoICFjb25kaXRpb25WYWx1ZT8ubGVuZ3RoICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIDAgPD0gY29uZGl0aW9uVmFsdWUuaW5kZXhPZiggY3VycmVudCApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250YWluOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdGlmICggIWN1cnJlbnQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAwIDw9IGN1cnJlbnQuaW5kZXhPZiggY29uZGl0aW9uVmFsdWVbIDAgXSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBjb25kaXRpb24ge0NvbmRpdGlvbkZpZWxkSXRlbX1cclxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0Y2hlY2sgKCBjb25kaXRpb24sIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCAgICAgICAgPSBpbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgPSBjb25kaXRpb24udmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcclxuXHR9LFxyXG5cdGNoZWNrUmF3ICggb3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkge1xyXG5cdFx0aWYgKCB0aGlzLm9wZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eSggb3BlcmF0b3IgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3BlcmF0b3JzWyBvcGVyYXRvciBdKFxyXG5cdFx0XHRcdGN1cnJlbnQsXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWUsXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAwICE9PSBvcGVyYXRvci5pbmRleE9mKCAnbm90XycgKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG9wZXJhdG9yTmFtZSA9IG9wZXJhdG9yLnNsaWNlKCA0ICk7XHJcblxyXG5cdFx0aWYgKCAhdGhpcy5vcGVyYXRvcnMuaGFzT3duUHJvcGVydHkoIG9wZXJhdG9yTmFtZSApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICF0aGlzLm9wZXJhdG9yc1sgb3BlcmF0b3JOYW1lIF0oXHJcblx0XHRcdGN1cnJlbnQsXHJcblx0XHRcdGNvbmRpdGlvblZhbHVlLFxyXG5cdFx0KTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uQ2hlY2tlcjsiLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5cclxuY29uc3QgeyBDYWxjdWxhdGVkRm9ybXVsYSB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbkZpZWxkSXRlbSgpIHtcclxuXHRDb25kaXRpb25JdGVtLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHJldHVybiAhIW9wdGlvbnM/LmZpZWxkPy5sZW5ndGg7XHJcblx0fTtcclxuXHR0aGlzLm9ic2VydmUgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgaW5wdXQgICAgICAgPSB0aGlzLmdldElucHV0KCk7XHJcblx0XHR0aGlzLmxpc3QuX2ZpZWxkcyA9IHRoaXMubGlzdC5fZmllbGRzID8/IFtdO1xyXG5cclxuXHRcdGlmICggIWlucHV0IHx8IHRoaXMubGlzdC5fZmllbGRzLmluY2x1ZGVzKCB0aGlzLmZpZWxkICkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmxpc3QuX2ZpZWxkcy5wdXNoKCB0aGlzLmZpZWxkICk7XHJcblx0XHRpbnB1dC53YXRjaCggKCkgPT4gdGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XHJcblx0fTtcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtJbnB1dERhdGF8Ym9vbGVhbn1cclxuXHQgKi9cclxuXHR0aGlzLmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGlzdC5yb290LmdldElucHV0KCB0aGlzLmZpZWxkICk7XHJcblx0fTtcclxuXHR0aGlzLmlzUGFzc2VkICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcclxuXHJcblx0XHRpZiAoICFpbnB1dCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpbnB1dC5jaGVja2VyLmNoZWNrKCB0aGlzLCBpbnB1dCApO1xyXG5cdH07XHJcblx0dGhpcy5zZXRPcHRpb25zID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0dGhpcy5maWVsZCAgICAgICAgPSBvcHRpb25zLmZpZWxkO1xyXG5cdFx0dGhpcy5vcGVyYXRvciAgICAgPSBvcHRpb25zLm9wZXJhdG9yO1xyXG5cdFx0dGhpcy5yZW5kZXJfc3RhdGUgPSBvcHRpb25zLnJlbmRlcl9zdGF0ZTtcclxuXHRcdHRoaXMudXNlX3ByZXNldCAgID0gb3B0aW9ucy51c2VfcHJlc2V0O1xyXG5cdFx0bGV0IHZhbHVlICAgICAgICAgPSBvcHRpb25zPy52YWx1ZTtcclxuXHJcblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KCAnLCcgKS5tYXAoIGl0ZW0gPT4gaXRlbS50cmltKCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMudXNlX3ByZXNldCApIHtcclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmFsdWUgPSB7fTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBbIGluZGV4LCBmb3JtdWxhIF0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlICkgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMubGlzdC5yb290ICk7XHJcblxyXG5cdFx0XHRjdXJyZW50Lm9ic2VydmUoIGZvcm11bGEgKTtcclxuXHRcdFx0Y3VycmVudC5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZVsgaW5kZXggXSA9ICcnICsgY3VycmVudC5jYWxjdWxhdGUoKTtcclxuXHRcdFx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGN1cnJlbnQuc2V0UmVzdWx0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy52YWx1ZSA9IE9iamVjdC52YWx1ZXMoIHRoaXMudmFsdWUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcclxuXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUuZmllbGQgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge0FycmF5fVxyXG4gKi9cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS52YWx1ZSA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7J2VxdWFsJ3wnZ3JlYXRlcid8J2xlc3MnfCdiZXR3ZWVuJ3wnb25lX29mJ3wnY29udGFpbid9XHJcbiAqL1xyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLm9wZXJhdG9yID0gbnVsbDtcclxuLyoqXHJcbiAqIEB0eXBlIHtib29sZWFufVxyXG4gKi9cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS51c2VfcHJlc2V0ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkZpZWxkSXRlbTsiLCIvKipcclxuICogQHByb3BlcnR5IHtDb25kaXRpb25zTGlzdHxDb25kaXRpb25zQmxvY2tMaXN0fSBsaXN0IFJlbGF0ZWQgbGlzdFxyXG4gKi9cclxuZnVuY3Rpb24gQ29uZGl0aW9uSXRlbSgpIHtcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUub2JzZXJ2ZSAgICAgPSBmdW5jdGlvbiAoKSB7XHJcbn07XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5zZXRPcHRpb25zICA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxufTtcclxuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuaXNQYXNzZWQgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0J1lvdSBtdXN0IHByb3ZpZGUgQ29uZGl0aW9uSXRlbTo6aXNQYXNzZWQgZnVuY3Rpb24nLFxyXG5cdCk7XHJcbn07XHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLnNldExpc3QgICAgID0gZnVuY3Rpb24gKCBsaXN0ICkge1xyXG5cdHRoaXMubGlzdCA9IGxpc3Q7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25JdGVtOyIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0oKSB7XHJcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gJ3JlbmRlcl9zdGF0ZScgPT09IG9wdGlvbnM/Lm9wZXJhdG9yO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLmdldElucHV0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGlzdC5yb290LmdldElucHV0KCAnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXMnICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZXRJbnB1dCgpLndhdGNoKCAoKSA9PiB0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHR0aGlzLnJlbmRlcl9zdGF0ZSA9IG9wdGlvbnMucmVuZGVyX3N0YXRlID8/IFtdO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaXNQYXNzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmdldElucHV0KCk7XHJcblxyXG5cdFx0aWYgKCAhdmFsdWUuY3VycmVudD8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyX3N0YXRlLnNvbWUoIGN1cnJlbnQgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWUuY3VycmVudC5pbmNsdWRlcyggY3VycmVudCApO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkNvbmRpdGlvblJlbmRlclN0YXRlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xyXG5cclxuQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLnByb3RvdHlwZS5yZW5kZXJfc3RhdGUgPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvblJlbmRlclN0YXRlSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uc0Jsb2NrTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNCbG9ja0xpc3QnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGRvQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuY29uc3Qge1xyXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuY29uc3Qge1xyXG5cdCAgICAgIHZhbGlkYXRlSW5wdXRzQWxsLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25hbEJsb2NrKCBub2RlLCBvYnNlcnZhYmxlICkge1xyXG5cdHRoaXMubm9kZSAgICAgICAgICAgPSBub2RlO1xyXG5cdG5vZGUuamZiQ29uZGl0aW9uYWwgPSB0aGlzO1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XHJcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtDb25kaXRpb25zQmxvY2tMaXN0fVxyXG5cdCAqL1xyXG5cdHRoaXMubGlzdCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtzdHJpbmcgfCBPYmplY3R9XHJcblx0ICovXHJcblx0dGhpcy5mdW5jdGlvbiA9IG51bGw7XHJcblx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtQYWdlU3RhdGV9XHJcblx0ICovXHJcblx0dGhpcy5wYWdlID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge011bHRpU3RlcFN0YXRlfVxyXG5cdCAqL1xyXG5cdHRoaXMubXVsdGlzdGVwID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge05vZGV9XHJcblx0ICovXHJcblx0dGhpcy5jb21tZW50ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YVtdfVxyXG5cdCAqL1xyXG5cdHRoaXMuaW5wdXRzID0gW107XHJcblxyXG5cdHRoaXMuaXNSaWdodCA9IG5ldyBSZWFjdGl2ZVZhciggbnVsbCApO1xyXG5cdHRoaXMuaXNSaWdodC5tYWtlKCk7XHJcblxyXG5cdHRoaXMuc2V0Q29uZGl0aW9ucygpO1xyXG5cdHRoaXMuc2V0SW5wdXRzKCk7XHJcblx0dGhpcy5zZXRGdW5jdGlvbigpO1xyXG5cclxuXHRpZiAoICF3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmRldm1vZGUgKSB7XHJcblx0XHRkZWxldGUgdGhpcy5ub2RlLmRhdGFzZXQuamZiQ29uZGl0aW9uYWw7XHJcblx0XHRkZWxldGUgdGhpcy5ub2RlLmRhdGFzZXQuamZiRnVuYztcclxuXHR9XHJcblxyXG5cdGRvQWN0aW9uKCAnamV0LmZiLmNvbmRpdGlvbmFsLmluaXQnLCB0aGlzICk7XHJcbn1cclxuXHJcbkNvbmRpdGlvbmFsQmxvY2sucHJvdG90eXBlID0ge1xyXG5cdHNldENvbmRpdGlvbnMoKSB7XHJcblx0XHRjb25zdCB7IGpmYkNvbmRpdGlvbmFsIH0gPSB0aGlzLm5vZGUuZGF0YXNldDtcclxuXHJcblx0XHR0aGlzLmxpc3QgICAgICAgPSBuZXcgQ29uZGl0aW9uc0Jsb2NrTGlzdCggamZiQ29uZGl0aW9uYWwsIHRoaXMucm9vdCApO1xyXG5cdFx0dGhpcy5saXN0LmJsb2NrID0gdGhpcztcclxuXHJcblx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmlzUmlnaHQuY3VycmVudCA9IHRoaXMubGlzdC5nZXRSZXN1bHQoKTtcclxuXHRcdH07XHJcblx0fSxcclxuXHRzZXRJbnB1dHMoKSB7XHJcblx0XHR0aGlzLmlucHV0cyA9IEFycmF5LmZyb20oXHJcblx0XHRcdHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLXN5bmNdJyApLFxyXG5cdFx0KS5tYXAoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5qZmJTeW5jLFxyXG5cdFx0KS5maWx0ZXIoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbSxcclxuXHRcdCk7XHJcblx0fSxcclxuXHRpbnNlcnRDb21tZW50KCkge1xyXG5cdFx0aWYgKCAhdGhpcy5zZXR0aW5ncz8uZG9tICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggJycgKTtcclxuXHJcblx0XHQvLyBpbnNlcnQgY29tbWVudCBhZnRlciBjb25kaXRpb25hbCBibG9ja1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxyXG5cdFx0XHR0aGlzLmNvbW1lbnQsXHJcblx0XHRcdHRoaXMubm9kZS5uZXh0U2libGluZyxcclxuXHRcdCk7XHJcblx0fSxcclxuXHRvYnNlcnZlKCkge1xyXG5cdFx0aWYgKCB0aGlzLmlzT2JzZXJ2ZWQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuaXNPYnNlcnZlZCA9IHRydWU7XHJcblx0XHR0aGlzLmluc2VydENvbW1lbnQoKTtcclxuXHJcblx0XHR0aGlzLmlzUmlnaHQud2F0Y2goICgpID0+IHRoaXMucnVuRnVuY3Rpb24oKSApO1xyXG5cdFx0dGhpcy5pc1JpZ2h0LndhdGNoKCAoKSA9PiB0aGlzLnZhbGlkYXRlSW5wdXRzKCkgKTtcclxuXHRcdHRoaXMubGlzdC5vYnNlcnZlKCk7XHJcblx0fSxcclxuXHRydW5GdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNSaWdodC5jdXJyZW50O1xyXG5cclxuXHRcdHN3aXRjaCAoIHRoaXMuZnVuY3Rpb24gKSB7XHJcblx0XHRcdGNhc2UgJ3Nob3cnOlxyXG5cdFx0XHRcdHRoaXMuc2hvd0Jsb2NrKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnaGlkZSc6XHJcblx0XHRcdFx0dGhpcy5zaG93QmxvY2soICFyZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZGlzYWJsZSc6XHJcblx0XHRcdFx0dGhpcy5kaXNhYmxlQmxvY2soIHJlc3VsdCApO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGRvQWN0aW9uKFxyXG5cdFx0XHRcdFx0J2pldC5mYi5jb25kaXRpb25hbC5ibG9jay5ydW5GdW5jdGlvbicsXHJcblx0XHRcdFx0XHR0aGlzLmZ1bmN0aW9uLFxyXG5cdFx0XHRcdFx0cmVzdWx0LFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIENvbXBhdGliaWxpdHkgd2l0aCBTYXZlIFByb2dyZXNzXHJcblx0ICogQHNpbmNlIDMuMC4xIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNDgwXHJcblx0ICpcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNTUzXHJcblx0ICovXHJcblx0dmFsaWRhdGVJbnB1dHMoKSB7XHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRcdHZhbGlkYXRlSW5wdXRzQWxsKCB0aGlzLmlucHV0cywgdHJ1ZSApLlxyXG5cdFx0XHRcdHRoZW4oICgpID0+IHt9ICkuXHJcblx0XHRcdFx0Y2F0Y2goICgpID0+IHt9ICk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHRzaG93QmxvY2soIHJlc3VsdCApIHtcclxuXHRcdHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnamV0LWZvcm0tYnVpbGRlci0taGlkZGVuJyApO1xyXG5cclxuXHRcdGlmICggdGhpcy5zZXR0aW5ncz8uZG9tICkge1xyXG5cdFx0XHR0aGlzLnNob3dCbG9ja0RvbSggcmVzdWx0ICk7XHJcblxyXG5cdFx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jay9ibG9jay10b2dnbGUnLCB7XHJcblx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRibG9jazogdGhpcy5ub2RlLFxyXG5cdFx0XHRcdFx0cmVzdWx0XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ub2RlLnN0eWxlLmRpc3BsYXkgPSByZXN1bHQgPyAnYmxvY2snIDogJ25vbmUnO1xyXG5cdH0sXHJcblx0c2hvd0Jsb2NrRG9tKCByZXN1bHQgKSB7XHJcblx0XHRpZiAoICFyZXN1bHQgKSB7XHJcblx0XHRcdHRoaXMubm9kZS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuY29tbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSggdGhpcy5ub2RlLCB0aGlzLmNvbW1lbnQgKTtcclxuXHR9LFxyXG5cdGRpc2FibGVCbG9jayggcmVzdWx0ICkge1xyXG5cdFx0dGhpcy5ub2RlLmRpc2FibGVkID0gcmVzdWx0O1xyXG5cdH0sXHJcblx0c2V0RnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmZ1bmN0aW9uID0gdGhpcy5ub2RlLmRhdGFzZXQuamZiRnVuYztcclxuXHJcblx0XHRsZXQgcGFyc2VkO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cGFyc2VkID0gSlNPTi5wYXJzZSggdGhpcy5mdW5jdGlvbiApO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKCBlcnJvciApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgWyBbIG5hbWUsIHNldHRpbmdzIF0gXSA9IE9iamVjdC5lbnRyaWVzKCBwYXJzZWQgKTtcclxuXHJcblx0XHR0aGlzLmZ1bmN0aW9uID0gbmFtZTtcclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uYWxCbG9jazsiLCJpbXBvcnQgQ29uZGl0aW9uc0xpc3QgZnJvbSAnLi9Db25kaXRpb25zTGlzdCc7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25zQmxvY2tMaXN0KCBjb25kaXRpb25zLCByb290ICkge1xyXG5cdENvbmRpdGlvbnNMaXN0LmNhbGwoIHRoaXMsIGNvbmRpdGlvbnMsIHJvb3QgKTtcclxufVxyXG5cclxuQ29uZGl0aW9uc0Jsb2NrTGlzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25zTGlzdC5wcm90b3R5cGUgKTtcclxuLyoqXHJcbiAqIEB0eXBlIHtDb25kaXRpb25hbEJsb2NrfVxyXG4gKi9cclxuQ29uZGl0aW9uc0Jsb2NrTGlzdC5wcm90b3R5cGUuYmxvY2sgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uc0Jsb2NrTGlzdDsiLCJpbXBvcnQgeyBjcmVhdGVDb25kaXRpb25JdGVtIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgT3JPcGVyYXRvckl0ZW0gZnJvbSAnLi9Pck9wZXJhdG9ySXRlbSc7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25zTGlzdCggY29uZGl0aW9ucywgcm9vdCApIHtcclxuXHR0aGlzLnJvb3QgPSByb290O1xyXG5cdHRoaXMuc2V0Q29uZGl0aW9ucyggY29uZGl0aW9ucyApO1xyXG59XHJcblxyXG5Db25kaXRpb25zTGlzdC5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0cm9vdDogbnVsbCxcclxuXHRjb25kaXRpb25zOiBbXSxcclxuXHRpbnZhbGlkOiBbXSxcclxuXHRncm91cHM6IFtdLFxyXG5cdC8qKlxyXG5cdCAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBjYWxsYmFjay5cclxuXHQgKiBJdCB1c2VkIGluIENvbmRpdGlvbkZpZWxkSXRlbS5cclxuXHQgKlxyXG5cdCAqIFJ1bnMgZXZlcnkgdGltZSwgd2hlbiBjb25kaXRpb25zIGlzIG1hdGNoXHJcblx0ICovXHJcblx0b25DaGFuZ2VSZWxhdGVkKCkge1xyXG5cdFx0aWYgKCAhdGhpcy5nZXRSZXN1bHQoKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5vbk1hdGNoQ29uZGl0aW9ucygpO1xyXG5cdH0sXHJcblx0b25NYXRjaENvbmRpdGlvbnMoKSB7fSxcclxuXHRvYnNlcnZlKCkge1xyXG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIHRoaXMuZ2V0Q29uZGl0aW9ucygpICkge1xyXG5cdFx0XHRjb25kaXRpb24ub2JzZXJ2ZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2V0Q29uZGl0aW9ucyggY29uZGl0aW9ucyApIHtcclxuXHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBjb25kaXRpb25zICkge1xyXG5cdFx0XHRjb25kaXRpb25zID0gSlNPTi5wYXJzZSggY29uZGl0aW9ucyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY29uZGl0aW9ucyA9IGNvbmRpdGlvbnMubWFwKFxyXG5cdFx0XHRpdGVtID0+IGNyZWF0ZUNvbmRpdGlvbkl0ZW0oIGl0ZW0sIHRoaXMgKSxcclxuXHRcdCkuZmlsdGVyKCBpdGVtID0+IGl0ZW0gKTtcclxuXHJcblx0XHRjb25zdCBncm91cHMgICA9IHt9O1xyXG5cdFx0bGV0IGdyb3VwSW5kZXggPSAwO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmdldENvbmRpdGlvbnMoKSApIHtcclxuXHRcdFx0aWYgKCBjb25kaXRpb24gaW5zdGFuY2VvZiBPck9wZXJhdG9ySXRlbSApIHtcclxuXHRcdFx0XHRncm91cEluZGV4Kys7XHJcblxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdID0gZ3JvdXBzWyBncm91cEluZGV4IF0gPz8gW107XHJcblx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdLnB1c2goIGNvbmRpdGlvbiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ3JvdXBzID0gT2JqZWN0LnZhbHVlcyggZ3JvdXBzICk7XHJcblx0fSxcclxuXHRnZXRSZXN1bHQoKSB7XHJcblx0XHR0aGlzLmludmFsaWQgPSBbXTtcclxuXHJcblx0XHRpZiAoICF0aGlzLmdyb3Vwcy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IGdyb3VwIG9mIHRoaXMuZ3JvdXBzICkge1xyXG5cdFx0XHRpZiAoIHRoaXMuaXNWYWxpZEdyb3VwKCBncm91cCApICkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0aXNWYWxpZEdyb3VwKCBjb25kaXRpb25zR3JvdXAgKSB7XHJcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgY29uZGl0aW9uc0dyb3VwICkge1xyXG5cdFx0XHRpZiAoIGNvbmRpdGlvbi5pc1Bhc3NlZCgpICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuaW52YWxpZC5wdXNoKCBjb25kaXRpb24gKTtcclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0FycmF5PENvbmRpdGlvbkZpZWxkSXRlbSB8IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0+fVxyXG5cdCAqL1xyXG5cdGdldENvbmRpdGlvbnMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25kaXRpb25zO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zTGlzdDsiLCJpbXBvcnQgQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0NvbmRpdGlvbkNoZWNrZXInO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGdldFRpbWVzdGFtcCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5jb25zdCB7XHJcblx0ICAgICAgTWluX0luX1NlYyxcclxuXHQgICAgICBNaWxsaV9Jbl9TZWMsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckNvbnN0O1xyXG5cclxuY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cclxuZnVuY3Rpb24gRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyKCkge1xyXG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0cmV0dXJuIFsgJ2RhdGUnLCAndGltZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxyXG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lOiBjdXJyZW50IH0gPSBnZXRUaW1lc3RhbXAoIGlucHV0LnZhbHVlLmN1cnJlbnQgKTtcclxuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlICAgICAgPSBjb25kaXRpb24udmFsdWUubWFwKCB2YWx1ZSA9PiB7XHJcblx0XHRcdGNvbnN0IHsgdGltZSwgdHlwZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cclxuXHRcdFx0aWYgKCAnbnVtYmVyJyA9PT0gdHlwZSAmJiBjb25kaXRpb24udXNlX3ByZXNldCApIHtcclxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXHJcblx0XHRcdFx0cmV0dXJuIHRpbWUgKiBNaWxsaV9Jbl9TZWMgKyBvZmZzZXQgKiBNaW5fSW5fU2VjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGltZTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkRhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcblxyXG5mdW5jdGlvbiBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIoKSB7XHJcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMub3BlcmF0b3JzLm9uZV9vZiA9ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWVzICkgPT4ge1xyXG5cdFx0aWYgKCAhY29uZGl0aW9uVmFsdWVzPy5sZW5ndGggfHwgIWN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcclxuXHRcdFx0dmFsID0+IC0xICE9PSBjb25kaXRpb25WYWx1ZXMuaW5kZXhPZiggdmFsICksXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub3BlcmF0b3JzLmNvbnRhaW4gPSAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlcyApID0+IHtcclxuXHRcdGlmICggIWN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc29tZShcclxuXHRcdFx0dmFsID0+IHZhbC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZXNbIDAgXSApICE9PSAtMSxcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gaW5wdXQuaXNBcnJheSgpO1xyXG5cdH07XHJcbn1cclxuXHJcbk11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVsdGlwbGVDb25kaXRpb25DaGVja2VyO1xyXG4iLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gT3JPcGVyYXRvckl0ZW0oKSB7XHJcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRvcHRpb25zLm9yX29wZXJhdG9yID8/IGZhbHNlXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbk9yT3BlcmF0b3JJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPck9wZXJhdG9ySXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uRmllbGRJdGVtIGZyb20gJy4vQ29uZGl0aW9uRmllbGRJdGVtJztcclxuaW1wb3J0IENvbmRpdGlvbmFsQmxvY2sgZnJvbSAnLi9Db25kaXRpb25hbEJsb2NrJztcclxuaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcclxuaW1wb3J0IE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL011bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcic7XHJcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcclxuaW1wb3J0IERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0RhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcic7XHJcbmltcG9ydCBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0nO1xyXG5pbXBvcnQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlciBmcm9tICcuL0NhbGN1bGF0ZWRGaWVsZENoZWNrZXInO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCBnZXRJdGVtVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC50eXBlcycsXHJcblx0W1xyXG5cdFx0Q29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLFxyXG5cdFx0T3JPcGVyYXRvckl0ZW0sXHJcblx0XHRDb25kaXRpb25GaWVsZEl0ZW0sXHJcblx0XSxcclxuKTtcclxuLyoqXHJcbiAqIEB0eXBlIHtDb25kaXRpb25JdGVtW119XHJcbiAqL1xyXG5sZXQgaXRlbVR5cGVzICAgICAgPSBbXTtcclxuXHJcbmNvbnN0IGdldENoZWNrZXJzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwuY2hlY2tlcnMnLFxyXG5cdFtcclxuXHRcdE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcixcclxuXHRcdERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcixcclxuXHRcdENhbGN1bGF0ZWRGaWVsZENoZWNrZXIsXHJcblx0XHRDb25kaXRpb25DaGVja2VyLFxyXG5cdF0sXHJcbik7XHJcblxyXG5sZXQgY2hlY2tlcnMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG9wdGlvbnMge3t9fVxyXG4gKiBAcGFyYW0gIGxpc3QgICAge0NvbmRpdGlvbnNMaXN0fVxyXG4gKiBAcmV0dXJuIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ29uZGl0aW9uSXRlbSggb3B0aW9ucywgbGlzdCApIHtcclxuXHRpZiAoICFpdGVtVHlwZXMubGVuZ3RoICkge1xyXG5cdFx0aXRlbVR5cGVzID0gZ2V0SXRlbVR5cGVzKCk7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBjb25zdCBkYXRhVHlwZSBvZiBpdGVtVHlwZXMgKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtDb25kaXRpb25JdGVtfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGRhdGFUeXBlKCk7XHJcblxyXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggb3B0aW9ucyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGN1cnJlbnQuc2V0TGlzdCggbGlzdCApO1xyXG5cdFx0Y3VycmVudC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBub2RlXHJcbiAqIEBwYXJhbSAgcm9vdFxyXG4gKiBAcmV0dXJuIHtDb25kaXRpb25hbEJsb2NrfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgcm9vdCApIHtcclxuXHRpZiAoIG5vZGUuaGFzT3duUHJvcGVydHkoICdqZmJDb25kaXRpb25hbCcgKSApIHtcclxuXHRcdHJldHVybiBub2RlLmpmYkNvbmRpdGlvbmFsO1xyXG5cdH1cclxuXHRjb25zdCBibG9jayA9IG5ldyBDb25kaXRpb25hbEJsb2NrKCBub2RlLCByb290ICk7XHJcblxyXG5cdGJsb2NrLm9ic2VydmUoKTtcclxuXHRibG9jay5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpO1xyXG5cclxuXHRyZXR1cm4gYmxvY2s7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrZXIoIGlucHV0ICkge1xyXG5cdGlmICggIWNoZWNrZXJzLmxlbmd0aCApIHtcclxuXHRcdGNoZWNrZXJzID0gZ2V0Q2hlY2tlcnMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IGNoZWNrZXIgb2YgY2hlY2tlcnMgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGNoZWNrZXIoKTtcclxuXHJcblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBpbnB1dCApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY3VycmVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGNyZWF0ZUNvbmRpdGlvbkl0ZW0sXHJcblx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcclxuXHRjcmVhdGVDaGVja2VyLFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ2hlY2tlciwgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuaW1wb3J0IENvbmRpdGlvbmFsQmxvY2sgZnJvbSAnLi9Db25kaXRpb25hbEJsb2NrJztcclxuaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcclxuaW1wb3J0IENvbmRpdGlvbnNMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0xpc3QnO1xyXG5cclxuY29uc3QgeyBhZGRBY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXHJcblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xyXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBvYnNlcnZhYmxlLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdGBbZGF0YS1qZmItY29uZGl0aW9uYWxdYCxcclxuXHRcdCkgKSB7XHJcblx0XHRcdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2soIG5vZGUsIG9ic2VydmFibGUgKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdDIwLFxyXG4pO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGlucHV0LmNoZWNrZXIgPSBjcmVhdGVDaGVja2VyKCBpbnB1dCApO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC5ibG9jay5ydW5GdW5jdGlvbicsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBmdW5jTmFtZVxyXG5cdCAqIEBwYXJhbSByZXN1bHRcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uYWxCbG9jayB7Q29uZGl0aW9uYWxCbG9ja31cclxuXHQgKi9cclxuXHRmdW5jdGlvbiAoIGZ1bmNOYW1lLCByZXN1bHQsIGNvbmRpdGlvbmFsQmxvY2sgKSB7XHJcblx0XHRpZiAoXHJcblx0XHRcdCdzZXRDc3NDbGFzcycgIT09IGZ1bmNOYW1lIHx8XHJcblx0XHRcdCFjb25kaXRpb25hbEJsb2NrLnNldHRpbmdzPy5jbGFzc05hbWVcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uZGl0aW9uYWxCbG9jay5ub2RlLmNsYXNzTGlzdC50b2dnbGUoXHJcblx0XHRcdGNvbmRpdGlvbmFsQmxvY2suc2V0dGluZ3MuY2xhc3NOYW1lLFxyXG5cdFx0XHRyZXN1bHQsXHJcblx0XHQpO1xyXG5cdH0sXHJcbik7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxyXG5cdCksXHJcblx0Q29uZGl0aW9uSXRlbSxcclxuXHRDb25kaXRpb25hbEJsb2NrLFxyXG5cdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2ssXHJcblx0Y3JlYXRlQ2hlY2tlcixcclxuXHRDb25kaXRpb25zTGlzdCxcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=