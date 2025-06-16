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
        if (inputsList[key].formula) {
          inputsList[key].reCalculateFormula();
        }
      });
      return;
    }
    this.comment.parentElement.insertBefore(this.node, this.comment);
    Object.keys(inputsList).forEach(key => {
      if (inputsList[key].formula) {
        inputsList[key].reCalculateFormula();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9DYWxjdWxhdGVkRmllbGRDaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uRmllbGRJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbmFsQmxvY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uc0Jsb2NrTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svTXVsdGlwbGVDb25kaXRpb25DaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL09yT3BlcmF0b3JJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XG5cbmZ1bmN0aW9uIENhbGN1bGF0ZWRGaWVsZENoZWNrZXIoKSB7XG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiAnY2FsY3VsYXRlZCcgPT09IGlucHV0LmlucHV0VHlwZTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGNvbmRpdGlvbiB7Q29uZGl0aW9uRmllbGRJdGVtfVxuXHQgKiBAcGFyYW0gaW5wdXQgICAgIHtJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLmNoZWNrID0gZnVuY3Rpb24gKCBjb25kaXRpb24sIGlucHV0ICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgID0gaW5wdXQuY2FsY1ZhbHVlO1xuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlID0gY29uZGl0aW9uLnZhbHVlO1xuXG5cdFx0cmV0dXJuIHRoaXMuY2hlY2tSYXcoIGNvbmRpdGlvbi5vcGVyYXRvciwgY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKTtcblx0fTtcbn1cblxuQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRGaWVsZENoZWNrZXI7IiwiY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBDb25kaXRpb25DaGVja2VyKCkge1xuXHR0aGlzLm9wZXJhdG9ycyA9IHRoaXMuZ2V0T3BlcmF0b3JzKCk7XG59XG5cbkNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGlzU3VwcG9ydGVkOiAoKSA9PiB0cnVlLFxuXHRvcGVyYXRvcnM6IHt9LFxuXHRnZXRPcGVyYXRvcnMgKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlcXVhbDogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IGN1cnJlbnQgPT09XG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF0sXG5cdFx0XHRlbXB0eTogKCBjdXJyZW50ICkgPT4gaXNFbXB0eSggY3VycmVudCApLFxuXHRcdFx0Z3JlYXRlcjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdCkgPiArKFxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXG5cdFx0XHQpLFxuXHRcdFx0Z3JlYXRlcl9vcl9lcTogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+ICsoXG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdCkgPj0gKyhcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxuXHRcdFx0KSxcblx0XHRcdGxlc3M6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxuXHRcdFx0XHRjdXJyZW50XG5cdFx0XHQpIDwgKyhcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxuXHRcdFx0KSxcblx0XHRcdGxlc3Nfb3JfZXE6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxuXHRcdFx0XHRjdXJyZW50XG5cdFx0XHQpIDw9ICsoXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF1cblx0XHRcdCksXG5cdFx0XHRiZXR3ZWVuOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4ge1xuXHRcdFx0XHRpZiAoICFjb25kaXRpb25WYWx1ZT8ubGVuZ3RoIHx8IG51bGwgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdIDw9ICtjdXJyZW50ICYmXG5cdFx0XHRcdFx0K2N1cnJlbnQgPD0gY29uZGl0aW9uVmFsdWVbIDEgXVxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHRcdG9uZV9vZjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcblx0XHRcdFx0aWYgKCAhY29uZGl0aW9uVmFsdWU/Lmxlbmd0aCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gMCA8PSBjb25kaXRpb25WYWx1ZS5pbmRleE9mKCBjdXJyZW50ICk7XG5cdFx0XHR9LFxuXHRcdFx0Y29udGFpbjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcblx0XHRcdFx0aWYgKCAhY3VycmVudCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIDAgPD0gY3VycmVudC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZVsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdH07XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cblx0ICovXG5cdGNoZWNrICggY29uZGl0aW9uLCBpbnB1dCApIHtcblx0XHRjb25zdCBjdXJyZW50ICAgICAgICA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgPSBjb25kaXRpb24udmFsdWU7XG5cblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xuXHR9LFxuXHRjaGVja1JhdyAoIG9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApIHtcblx0XHRpZiAoIHRoaXMub3BlcmF0b3JzLmhhc093blByb3BlcnR5KCBvcGVyYXRvciApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3BlcmF0b3JzWyBvcGVyYXRvciBdKFxuXHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCAwICE9PSBvcGVyYXRvci5pbmRleE9mKCAnbm90XycgKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBvcGVyYXRvck5hbWUgPSBvcGVyYXRvci5zbGljZSggNCApO1xuXG5cdFx0aWYgKCAhdGhpcy5vcGVyYXRvcnMuaGFzT3duUHJvcGVydHkoIG9wZXJhdG9yTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhdGhpcy5vcGVyYXRvcnNbIG9wZXJhdG9yTmFtZSBdKFxuXHRcdFx0Y3VycmVudCxcblx0XHRcdGNvbmRpdGlvblZhbHVlLFxuXHRcdCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25DaGVja2VyOyIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XG5cbmNvbnN0IHsgQ2FsY3VsYXRlZEZvcm11bGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIENvbmRpdGlvbkZpZWxkSXRlbSgpIHtcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHRyZXR1cm4gISFvcHRpb25zPy5maWVsZD8ubGVuZ3RoO1xuXHR9O1xuXHR0aGlzLm9ic2VydmUgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGlucHV0ICAgICAgID0gdGhpcy5nZXRJbnB1dCgpO1xuXHRcdHRoaXMubGlzdC5fZmllbGRzID0gdGhpcy5saXN0Ll9maWVsZHMgPz8gW107XG5cblx0XHRpZiAoICFpbnB1dCB8fCB0aGlzLmxpc3QuX2ZpZWxkcy5pbmNsdWRlcyggdGhpcy5maWVsZCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGlzdC5fZmllbGRzLnB1c2goIHRoaXMuZmllbGQgKTtcblx0XHRpbnB1dC53YXRjaCggKCkgPT4gdGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XG5cdH07XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtJbnB1dERhdGF8Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuZ2V0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdC5yb290LmdldElucHV0KCB0aGlzLmZpZWxkICk7XG5cdH07XG5cdHRoaXMuaXNQYXNzZWQgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuXHRcdGlmICggIWlucHV0ICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dC5jaGVja2VyLmNoZWNrKCB0aGlzLCBpbnB1dCApO1xuXHR9O1xuXHR0aGlzLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5maWVsZCAgICAgICAgPSBvcHRpb25zLmZpZWxkO1xuXHRcdHRoaXMub3BlcmF0b3IgICAgID0gb3B0aW9ucy5vcGVyYXRvcjtcblx0XHR0aGlzLnJlbmRlcl9zdGF0ZSA9IG9wdGlvbnMucmVuZGVyX3N0YXRlO1xuXHRcdHRoaXMudXNlX3ByZXNldCAgID0gb3B0aW9ucy51c2VfcHJlc2V0O1xuXHRcdGxldCB2YWx1ZSAgICAgICAgID0gb3B0aW9ucz8udmFsdWU7XG5cblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCggJywnICkubWFwKCBpdGVtID0+IGl0ZW0udHJpbSgpICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLnVzZV9wcmVzZXQgKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0ge307XG5cblx0XHRmb3IgKCBjb25zdCBbIGluZGV4LCBmb3JtdWxhIF0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlICkgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLmxpc3Qucm9vdCApO1xuXG5cdFx0XHRjdXJyZW50Lm9ic2VydmUoIGZvcm11bGEgKTtcblx0XHRcdGN1cnJlbnQuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlWyBpbmRleCBdID0gJycgKyBjdXJyZW50LmNhbGN1bGF0ZSgpO1xuXHRcdFx0XHR0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y3VycmVudC5zZXRSZXN1bHQoKTtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlID0gT2JqZWN0LnZhbHVlcyggdGhpcy52YWx1ZSApO1xuXHR9O1xufVxuXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcblxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS5maWVsZCA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS52YWx1ZSA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHsnZXF1YWwnfCdncmVhdGVyJ3wnbGVzcyd8J2JldHdlZW4nfCdvbmVfb2YnfCdjb250YWluJ31cbiAqL1xuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS5vcGVyYXRvciA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLnVzZV9wcmVzZXQgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25GaWVsZEl0ZW07IiwiLyoqXG4gKiBAcHJvcGVydHkge0NvbmRpdGlvbnNMaXN0fENvbmRpdGlvbnNCbG9ja0xpc3R9IGxpc3QgUmVsYXRlZCBsaXN0XG4gKi9cbmZ1bmN0aW9uIENvbmRpdGlvbkl0ZW0oKSB7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5vYnNlcnZlICAgICA9IGZ1bmN0aW9uICgpIHtcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLnNldE9wdGlvbnMgID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xufTtcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLmlzUGFzc2VkICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0J1lvdSBtdXN0IHByb3ZpZGUgQ29uZGl0aW9uSXRlbTo6aXNQYXNzZWQgZnVuY3Rpb24nLFxuXHQpO1xufTtcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLnNldExpc3QgICAgID0gZnVuY3Rpb24gKCBsaXN0ICkge1xuXHR0aGlzLmxpc3QgPSBsaXN0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xuXG5mdW5jdGlvbiBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0oKSB7XG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0cmV0dXJuICdyZW5kZXJfc3RhdGUnID09PSBvcHRpb25zPy5vcGVyYXRvcjtcblx0fTtcblxuXHQvKipcblx0ICogQHJldHVybiB7SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5nZXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5saXN0LnJvb3QuZ2V0SW5wdXQoICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlcycgKTtcblx0fTtcblxuXHR0aGlzLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5nZXRJbnB1dCgpLndhdGNoKCAoKSA9PiB0aGlzLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcblx0fTtcblxuXHR0aGlzLnNldE9wdGlvbnMgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0dGhpcy5yZW5kZXJfc3RhdGUgPSBvcHRpb25zLnJlbmRlcl9zdGF0ZSA/PyBbXTtcblx0fTtcblxuXHR0aGlzLmlzUGFzc2VkID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuXHRcdGlmICggIXZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJfc3RhdGUuc29tZSggY3VycmVudCA9PiB7XG5cdFx0XHRyZXR1cm4gdmFsdWUuY3VycmVudC5pbmNsdWRlcyggY3VycmVudCApO1xuXHRcdH0gKTtcblx0fTtcbn1cblxuQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XG5cbkNvbmRpdGlvblJlbmRlclN0YXRlSXRlbS5wcm90b3R5cGUucmVuZGVyX3N0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvblJlbmRlclN0YXRlSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uc0Jsb2NrTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNCbG9ja0xpc3QnO1xuXG5jb25zdCB7XG5cdCAgICAgIGRvQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5jb25zdCB7XG5cdCAgICAgIFJlYWN0aXZlVmFyLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5jb25zdCB7XG5cdCAgICAgIHZhbGlkYXRlSW5wdXRzQWxsLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBDb25kaXRpb25hbEJsb2NrKCBub2RlLCBvYnNlcnZhYmxlICkge1xuXHR0aGlzLm5vZGUgICAgICAgICAgID0gbm9kZTtcblx0bm9kZS5qZmJDb25kaXRpb25hbCA9IHRoaXM7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Q29uZGl0aW9uc0Jsb2NrTGlzdH1cblx0ICovXG5cdHRoaXMubGlzdCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtzdHJpbmcgfCBPYmplY3R9XG5cdCAqL1xuXHR0aGlzLmZ1bmN0aW9uID0gbnVsbDtcblx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtQYWdlU3RhdGV9XG5cdCAqL1xuXHR0aGlzLnBhZ2UgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7TXVsdGlTdGVwU3RhdGV9XG5cdCAqL1xuXHR0aGlzLm11bHRpc3RlcCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlfVxuXHQgKi9cblx0dGhpcy5jb21tZW50ID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YVtdfVxuXHQgKi9cblx0dGhpcy5pbnB1dHMgPSBbXTtcblxuXHR0aGlzLmlzUmlnaHQgPSBuZXcgUmVhY3RpdmVWYXIoIG51bGwgKTtcblx0dGhpcy5pc1JpZ2h0Lm1ha2UoKTtcblxuXHR0aGlzLnNldENvbmRpdGlvbnMoKTtcblx0dGhpcy5zZXRJbnB1dHMoKTtcblx0dGhpcy5zZXRGdW5jdGlvbigpO1xuXG5cdGlmICggIXdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uZGV2bW9kZSApIHtcblx0XHRkZWxldGUgdGhpcy5ub2RlLmRhdGFzZXQuamZiQ29uZGl0aW9uYWw7XG5cdFx0ZGVsZXRlIHRoaXMubm9kZS5kYXRhc2V0LmpmYkZ1bmM7XG5cdH1cblxuXHRkb0FjdGlvbiggJ2pldC5mYi5jb25kaXRpb25hbC5pbml0JywgdGhpcyApO1xufVxuXG5Db25kaXRpb25hbEJsb2NrLnByb3RvdHlwZSA9IHtcblx0c2V0Q29uZGl0aW9ucygpIHtcblx0XHRjb25zdCB7IGpmYkNvbmRpdGlvbmFsIH0gPSB0aGlzLm5vZGUuZGF0YXNldDtcblxuXHRcdHRoaXMubGlzdCAgICAgICA9IG5ldyBDb25kaXRpb25zQmxvY2tMaXN0KCBqZmJDb25kaXRpb25hbCwgdGhpcy5yb290ICk7XG5cdFx0dGhpcy5saXN0LmJsb2NrID0gdGhpcztcblxuXHRcdHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmlzUmlnaHQuY3VycmVudCA9IHRoaXMubGlzdC5nZXRSZXN1bHQoKTtcblx0XHR9O1xuXHR9LFxuXHRzZXRJbnB1dHMoKSB7XG5cdFx0dGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKFxuXHRcdFx0dGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItc3luY10nICksXG5cdFx0KS5tYXAoXG5cdFx0XHRpdGVtID0+IGl0ZW0uamZiU3luYyxcblx0XHQpLmZpbHRlcihcblx0XHRcdGl0ZW0gPT4gaXRlbSxcblx0XHQpO1xuXHR9LFxuXHRpbnNlcnRDb21tZW50KCkge1xuXHRcdGlmICggIXRoaXMuc2V0dGluZ3M/LmRvbSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCAnJyApO1xuXG5cdFx0Ly8gaW5zZXJ0IGNvbW1lbnQgYWZ0ZXIgY29uZGl0aW9uYWwgYmxvY2tcblx0XHR0aGlzLm5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHR0aGlzLmNvbW1lbnQsXG5cdFx0XHR0aGlzLm5vZGUubmV4dFNpYmxpbmcsXG5cdFx0KTtcblx0fSxcblx0b2JzZXJ2ZSgpIHtcblx0XHRpZiAoIHRoaXMuaXNPYnNlcnZlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5pc09ic2VydmVkID0gdHJ1ZTtcblx0XHR0aGlzLmluc2VydENvbW1lbnQoKTtcblxuXHRcdHRoaXMuaXNSaWdodC53YXRjaCggKCkgPT4gdGhpcy5ydW5GdW5jdGlvbigpICk7XG5cdFx0dGhpcy5pc1JpZ2h0LndhdGNoKCAoKSA9PiB0aGlzLnZhbGlkYXRlSW5wdXRzKCkgKTtcblx0XHR0aGlzLmxpc3Qub2JzZXJ2ZSgpO1xuXHR9LFxuXHRydW5GdW5jdGlvbigpIHtcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmlzUmlnaHQuY3VycmVudDtcblxuXHRcdHN3aXRjaCAoIHRoaXMuZnVuY3Rpb24gKSB7XG5cdFx0XHRjYXNlICdzaG93Jzpcblx0XHRcdFx0dGhpcy5zaG93QmxvY2soIHJlc3VsdCApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hpZGUnOlxuXHRcdFx0XHR0aGlzLnNob3dCbG9jayggIXJlc3VsdCApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Rpc2FibGUnOlxuXHRcdFx0XHR0aGlzLmRpc2FibGVCbG9jayggcmVzdWx0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZG9BY3Rpb24oXG5cdFx0XHRcdFx0J2pldC5mYi5jb25kaXRpb25hbC5ibG9jay5ydW5GdW5jdGlvbicsXG5cdFx0XHRcdFx0dGhpcy5mdW5jdGlvbixcblx0XHRcdFx0XHRyZXN1bHQsXG5cdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdH0sXG5cdC8qKlxuXHQgKiBDb21wYXRpYmlsaXR5IHdpdGggU2F2ZSBQcm9ncmVzc1xuXHQgKiBAc2luY2UgMy4wLjEgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzI0ODBcblx0ICpcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTU1M1xuXHQgKi9cblx0dmFsaWRhdGVJbnB1dHMoKSB7XG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dmFsaWRhdGVJbnB1dHNBbGwoIHRoaXMuaW5wdXRzLCB0cnVlICkuXG5cdFx0XHRcdHRoZW4oICgpID0+IHt9ICkuXG5cdFx0XHRcdGNhdGNoKCAoKSA9PiB7fSApO1xuXHRcdH0gKTtcblx0fSxcblx0c2hvd0Jsb2NrKCByZXN1bHQgKSB7XG5cdFx0dGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdqZXQtZm9ybS1idWlsZGVyLS1oaWRkZW4nICk7XG5cblx0XHRpZiAoIHRoaXMuc2V0dGluZ3M/LmRvbSApIHtcblx0XHRcdHRoaXMuc2hvd0Jsb2NrRG9tKCByZXN1bHQgKTtcblx0XHRcdGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrL2Jsb2NrLXRvZ2dsZS1oaWRkZW4tZG9tJywge1xuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRibG9jazogdGhpcy5ub2RlLFxuXHRcdFx0XHRcdHJlc3VsdDogcmVzdWx0XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMubm9kZS5zdHlsZS5kaXNwbGF5ID0gcmVzdWx0ID8gJ2Jsb2NrJyA6ICdub25lJztcblx0fSxcblx0c2hvd0Jsb2NrRG9tKCByZXN1bHQgKSB7XG5cdFx0Y29uc3QgaW5wdXRzTGlzdCA9IHRoaXMucm9vdC5kYXRhSW5wdXRzO1xuXG5cdFx0aWYgKCAhcmVzdWx0ICkge1xuXHRcdFx0dGhpcy5ub2RlLnJlbW92ZSgpO1xuXG5cdFx0XHRPYmplY3Qua2V5cyggaW5wdXRzTGlzdCApLmZvckVhY2goIGtleSA9PiB7XG5cdFx0XHRcdGlmICggaW5wdXRzTGlzdFtrZXldLmZvcm11bGEgKSB7XG5cdFx0XHRcdFx0aW5wdXRzTGlzdFtrZXldLnJlQ2FsY3VsYXRlRm9ybXVsYSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jb21tZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKCB0aGlzLm5vZGUsIHRoaXMuY29tbWVudCApO1xuXG5cdFx0T2JqZWN0LmtleXMoIGlucHV0c0xpc3QgKS5mb3JFYWNoKCBrZXkgPT4ge1xuXHRcdFx0aWYgKCBpbnB1dHNMaXN0W2tleV0uZm9ybXVsYSApIHtcblx0XHRcdFx0aW5wdXRzTGlzdFtrZXldLnJlQ2FsY3VsYXRlRm9ybXVsYSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblx0ZGlzYWJsZUJsb2NrKCByZXN1bHQgKSB7XG5cdFx0dGhpcy5ub2RlLmRpc2FibGVkID0gcmVzdWx0O1xuXHR9LFxuXHRzZXRGdW5jdGlvbigpIHtcblx0XHR0aGlzLmZ1bmN0aW9uID0gdGhpcy5ub2RlLmRhdGFzZXQuamZiRnVuYztcblxuXHRcdGxldCBwYXJzZWQ7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcnNlZCA9IEpTT04ucGFyc2UoIHRoaXMuZnVuY3Rpb24gKTtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgWyBbIG5hbWUsIHNldHRpbmdzIF0gXSA9IE9iamVjdC5lbnRyaWVzKCBwYXJzZWQgKTtcblxuXHRcdHRoaXMuZnVuY3Rpb24gPSBuYW1lO1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbmFsQmxvY2s7IiwiaW1wb3J0IENvbmRpdGlvbnNMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0xpc3QnO1xuXG5mdW5jdGlvbiBDb25kaXRpb25zQmxvY2tMaXN0KCBjb25kaXRpb25zLCByb290ICkge1xuXHRDb25kaXRpb25zTGlzdC5jYWxsKCB0aGlzLCBjb25kaXRpb25zLCByb290ICk7XG59XG5cbkNvbmRpdGlvbnNCbG9ja0xpc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uc0xpc3QucHJvdG90eXBlICk7XG4vKipcbiAqIEB0eXBlIHtDb25kaXRpb25hbEJsb2NrfVxuICovXG5Db25kaXRpb25zQmxvY2tMaXN0LnByb3RvdHlwZS5ibG9jayA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbnNCbG9ja0xpc3Q7IiwiaW1wb3J0IHsgY3JlYXRlQ29uZGl0aW9uSXRlbSB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcblxuZnVuY3Rpb24gQ29uZGl0aW9uc0xpc3QoIGNvbmRpdGlvbnMsIHJvb3QgKSB7XG5cdHRoaXMucm9vdCA9IHJvb3Q7XG5cdHRoaXMuc2V0Q29uZGl0aW9ucyggY29uZGl0aW9ucyApO1xufVxuXG5Db25kaXRpb25zTGlzdC5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHJvb3Q6IG51bGwsXG5cdGNvbmRpdGlvbnM6IFtdLFxuXHRpbnZhbGlkOiBbXSxcblx0Z3JvdXBzOiBbXSxcblx0LyoqXG5cdCAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBjYWxsYmFjay5cblx0ICogSXQgdXNlZCBpbiBDb25kaXRpb25GaWVsZEl0ZW0uXG5cdCAqXG5cdCAqIFJ1bnMgZXZlcnkgdGltZSwgd2hlbiBjb25kaXRpb25zIGlzIG1hdGNoXG5cdCAqL1xuXHRvbkNoYW5nZVJlbGF0ZWQoKSB7XG5cdFx0aWYgKCAhdGhpcy5nZXRSZXN1bHQoKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5vbk1hdGNoQ29uZGl0aW9ucygpO1xuXHR9LFxuXHRvbk1hdGNoQ29uZGl0aW9ucygpIHt9LFxuXHRvYnNlcnZlKCkge1xuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmdldENvbmRpdGlvbnMoKSApIHtcblx0XHRcdGNvbmRpdGlvbi5vYnNlcnZlKCk7XG5cdFx0fVxuXHR9LFxuXHRzZXRDb25kaXRpb25zKCBjb25kaXRpb25zICkge1xuXHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBjb25kaXRpb25zICkge1xuXHRcdFx0Y29uZGl0aW9ucyA9IEpTT04ucGFyc2UoIGNvbmRpdGlvbnMgKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbmRpdGlvbnMgPSBjb25kaXRpb25zLm1hcChcblx0XHRcdGl0ZW0gPT4gY3JlYXRlQ29uZGl0aW9uSXRlbSggaXRlbSwgdGhpcyApLFxuXHRcdCkuZmlsdGVyKCBpdGVtID0+IGl0ZW0gKTtcblxuXHRcdGNvbnN0IGdyb3VwcyAgID0ge307XG5cdFx0bGV0IGdyb3VwSW5kZXggPSAwO1xuXG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIHRoaXMuZ2V0Q29uZGl0aW9ucygpICkge1xuXHRcdFx0aWYgKCBjb25kaXRpb24gaW5zdGFuY2VvZiBPck9wZXJhdG9ySXRlbSApIHtcblx0XHRcdFx0Z3JvdXBJbmRleCsrO1xuXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzWyBncm91cEluZGV4IF0gPSBncm91cHNbIGdyb3VwSW5kZXggXSA/PyBbXTtcblx0XHRcdGdyb3Vwc1sgZ3JvdXBJbmRleCBdLnB1c2goIGNvbmRpdGlvbiApO1xuXHRcdH1cblxuXHRcdHRoaXMuZ3JvdXBzID0gT2JqZWN0LnZhbHVlcyggZ3JvdXBzICk7XG5cdH0sXG5cdGdldFJlc3VsdCgpIHtcblx0XHR0aGlzLmludmFsaWQgPSBbXTtcblxuXHRcdGlmICggIXRoaXMuZ3JvdXBzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGdyb3VwIG9mIHRoaXMuZ3JvdXBzICkge1xuXHRcdFx0aWYgKCB0aGlzLmlzVmFsaWRHcm91cCggZ3JvdXAgKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRpc1ZhbGlkR3JvdXAoIGNvbmRpdGlvbnNHcm91cCApIHtcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgY29uZGl0aW9uc0dyb3VwICkge1xuXHRcdFx0aWYgKCBjb25kaXRpb24uaXNQYXNzZWQoKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmludmFsaWQucHVzaCggY29uZGl0aW9uICk7XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0LyoqXG5cdCAqIEByZXR1cm4ge0FycmF5PENvbmRpdGlvbkZpZWxkSXRlbSB8IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0+fVxuXHQgKi9cblx0Z2V0Q29uZGl0aW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25kaXRpb25zO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uc0xpc3Q7IiwiaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcblxuY29uc3Qge1xuXHQgICAgICBnZXRUaW1lc3RhbXAsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5jb25zdCB7XG5cdCAgICAgIE1pbl9Jbl9TZWMsXG5cdCAgICAgIE1pbGxpX0luX1NlYyxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckNvbnN0O1xuXG5jb25zdCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbmZ1bmN0aW9uIERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcigpIHtcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHJldHVybiBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XG5cdCAqIEBwYXJhbSBpbnB1dCAgICAge0lucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuY2hlY2sgPSBmdW5jdGlvbiAoIGNvbmRpdGlvbiwgaW5wdXQgKSB7XG5cdFx0Y29uc3QgeyB0aW1lOiBjdXJyZW50IH0gPSBnZXRUaW1lc3RhbXAoIGlucHV0LnZhbHVlLmN1cnJlbnQgKTtcblx0XHRjb25zdCBjb25kaXRpb25WYWx1ZSAgICAgID0gY29uZGl0aW9uLnZhbHVlLm1hcCggdmFsdWUgPT4ge1xuXHRcdFx0Y29uc3QgeyB0aW1lLCB0eXBlIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cblx0XHRcdGlmICggJ251bWJlcicgPT09IHR5cGUgJiYgY29uZGl0aW9uLnVzZV9wcmVzZXQgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2Vcblx0XHRcdFx0cmV0dXJuIHRpbWUgKiBNaWxsaV9Jbl9TZWMgKyBvZmZzZXQgKiBNaW5fSW5fU2VjO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcy5jaGVja1JhdyggY29uZGl0aW9uLm9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApO1xuXHR9O1xufVxuXG5EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0Q29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXI7IiwiaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcblxuZnVuY3Rpb24gTXVsdGlwbGVDb25kaXRpb25DaGVja2VyKCkge1xuXHRDb25kaXRpb25DaGVja2VyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLm9wZXJhdG9ycy5vbmVfb2YgPSAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlcyApID0+IHtcblx0XHRpZiAoICFjb25kaXRpb25WYWx1ZXM/Lmxlbmd0aCB8fCAhY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudC5zb21lKFxuXHRcdFx0dmFsID0+IC0xICE9PSBjb25kaXRpb25WYWx1ZXMuaW5kZXhPZiggdmFsICksXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLm9wZXJhdG9ycy5jb250YWluID0gKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZXMgKSA9PiB7XG5cdFx0aWYgKCAhY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudC5zb21lKFxuXHRcdFx0dmFsID0+IHZhbC5pbmRleE9mKCBjb25kaXRpb25WYWx1ZXNbIDAgXSApICE9PSAtMSxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiBpbnB1dC5pc0FycmF5KCk7XG5cdH07XG59XG5cbk11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcjtcbiIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XG5cbmZ1bmN0aW9uIE9yT3BlcmF0b3JJdGVtKCkge1xuXHRDb25kaXRpb25JdGVtLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRvcHRpb25zLm9yX29wZXJhdG9yID8/IGZhbHNlXG5cdFx0KTtcblx0fTtcbn1cblxuT3JPcGVyYXRvckl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgT3JPcGVyYXRvckl0ZW07IiwiaW1wb3J0IENvbmRpdGlvbkZpZWxkSXRlbSBmcm9tICcuL0NvbmRpdGlvbkZpZWxkSXRlbSc7XG5pbXBvcnQgQ29uZGl0aW9uYWxCbG9jayBmcm9tICcuL0NvbmRpdGlvbmFsQmxvY2snO1xuaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcbmltcG9ydCBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9NdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXInO1xuaW1wb3J0IE9yT3BlcmF0b3JJdGVtIGZyb20gJy4vT3JPcGVyYXRvckl0ZW0nO1xuaW1wb3J0IERhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0RhdGVUaW1lQ29uZGl0aW9uQ2hlY2tlcic7XG5pbXBvcnQgQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtIGZyb20gJy4vQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtJztcbmltcG9ydCBDYWxjdWxhdGVkRmllbGRDaGVja2VyIGZyb20gJy4vQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlcic7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRJdGVtVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwudHlwZXMnLFxuXHRbXG5cdFx0Q29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLFxuXHRcdE9yT3BlcmF0b3JJdGVtLFxuXHRcdENvbmRpdGlvbkZpZWxkSXRlbSxcblx0XSxcbik7XG4vKipcbiAqIEB0eXBlIHtDb25kaXRpb25JdGVtW119XG4gKi9cbmxldCBpdGVtVHlwZXMgICAgICA9IFtdO1xuXG5jb25zdCBnZXRDaGVja2VycyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5jb25kaXRpb25hbC5jaGVja2VycycsXG5cdFtcblx0XHRNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXIsXG5cdFx0RGF0ZVRpbWVDb25kaXRpb25DaGVja2VyLFxuXHRcdENhbGN1bGF0ZWRGaWVsZENoZWNrZXIsXG5cdFx0Q29uZGl0aW9uQ2hlY2tlcixcblx0XSxcbik7XG5cbmxldCBjaGVja2VycyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgb3B0aW9ucyB7e319XG4gKiBAcGFyYW0gIGxpc3QgICAge0NvbmRpdGlvbnNMaXN0fVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29uZGl0aW9uSXRlbSggb3B0aW9ucywgbGlzdCApIHtcblx0aWYgKCAhaXRlbVR5cGVzLmxlbmd0aCApIHtcblx0XHRpdGVtVHlwZXMgPSBnZXRJdGVtVHlwZXMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGRhdGFUeXBlIG9mIGl0ZW1UeXBlcyApIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7Q29uZGl0aW9uSXRlbX1cblx0XHQgKi9cblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGRhdGFUeXBlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBvcHRpb25zICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y3VycmVudC5zZXRMaXN0KCBsaXN0ICk7XG5cdFx0Y3VycmVudC5zZXRPcHRpb25zKCBvcHRpb25zICk7XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZVxuICogQHBhcmFtICByb290XG4gKiBAcmV0dXJuIHtDb25kaXRpb25hbEJsb2NrfVxuICovXG5mdW5jdGlvbiBjcmVhdGVDb25kaXRpb25hbEJsb2NrKCBub2RlLCByb290ICkge1xuXHRpZiAoIG5vZGUuaGFzT3duUHJvcGVydHkoICdqZmJDb25kaXRpb25hbCcgKSApIHtcblx0XHRyZXR1cm4gbm9kZS5qZmJDb25kaXRpb25hbDtcblx0fVxuXHRjb25zdCBibG9jayA9IG5ldyBDb25kaXRpb25hbEJsb2NrKCBub2RlLCByb290ICk7XG5cblx0YmxvY2sub2JzZXJ2ZSgpO1xuXHRibG9jay5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpO1xuXG5cdHJldHVybiBibG9jaztcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hlY2tlciggaW5wdXQgKSB7XG5cdGlmICggIWNoZWNrZXJzLmxlbmd0aCApIHtcblx0XHRjaGVja2VycyA9IGdldENoZWNrZXJzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBjaGVja2VyIG9mIGNoZWNrZXJzICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgY2hlY2tlcigpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggaW5wdXQgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZUNvbmRpdGlvbkl0ZW0sXG5cdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2ssXG5cdGNyZWF0ZUNoZWNrZXIsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ2hlY2tlciwgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBDb25kaXRpb25hbEJsb2NrIGZyb20gJy4vQ29uZGl0aW9uYWxCbG9jayc7XG5pbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xuaW1wb3J0IENvbmRpdGlvbnNMaXN0IGZyb20gJy4vQ29uZGl0aW9uc0xpc3QnO1xuXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdGBbZGF0YS1qZmItY29uZGl0aW9uYWxdYCxcblx0XHQpICkge1xuXHRcdFx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgb2JzZXJ2YWJsZSApO1xuXHRcdH1cblx0fSxcblx0MjAsXG4pO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxuXHRmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGlucHV0LmNoZWNrZXIgPSBjcmVhdGVDaGVja2VyKCBpbnB1dCApO1xuXHR9LFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLmJsb2NrLnJ1bkZ1bmN0aW9uJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2snLFxuXHQvKipcblx0ICogQHBhcmFtIGZ1bmNOYW1lXG5cdCAqIEBwYXJhbSByZXN1bHRcblx0ICogQHBhcmFtIGNvbmRpdGlvbmFsQmxvY2sge0NvbmRpdGlvbmFsQmxvY2t9XG5cdCAqL1xuXHRmdW5jdGlvbiAoIGZ1bmNOYW1lLCByZXN1bHQsIGNvbmRpdGlvbmFsQmxvY2sgKSB7XG5cdFx0aWYgKFxuXHRcdFx0J3NldENzc0NsYXNzJyAhPT0gZnVuY05hbWUgfHxcblx0XHRcdCFjb25kaXRpb25hbEJsb2NrLnNldHRpbmdzPy5jbGFzc05hbWVcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25kaXRpb25hbEJsb2NrLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcblx0XHRcdGNvbmRpdGlvbmFsQmxvY2suc2V0dGluZ3MuY2xhc3NOYW1lLFxuXHRcdFx0cmVzdWx0LFxuXHRcdCk7XG5cdH0sXG4pO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XG5cdCksXG5cdENvbmRpdGlvbkl0ZW0sXG5cdENvbmRpdGlvbmFsQmxvY2ssXG5cdGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2ssXG5cdGNyZWF0ZUNoZWNrZXIsXG5cdENvbmRpdGlvbnNMaXN0LFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==