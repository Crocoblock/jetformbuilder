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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9DYWxjdWxhdGVkRmllbGRDaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uRmllbGRJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL0NvbmRpdGlvbmFsQmxvY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svQ29uZGl0aW9uc0Jsb2NrTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9Db25kaXRpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9EYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvY29uZGl0aW9uYWwuYmxvY2svTXVsdGlwbGVDb25kaXRpb25DaGVja2VyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL09yT3BlcmF0b3JJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2NvbmRpdGlvbmFsLmJsb2NrL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9jb25kaXRpb25hbC5ibG9jay9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRmllbGRDaGVja2VyKCkge1xyXG5cdENvbmRpdGlvbkNoZWNrZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHJldHVybiAnY2FsY3VsYXRlZCcgPT09IGlucHV0LmlucHV0VHlwZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XHJcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHRoaXMuY2hlY2sgPSBmdW5jdGlvbiAoIGNvbmRpdGlvbiwgaW5wdXQgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ICAgICAgICA9IGlucHV0LmNhbGNWYWx1ZTtcclxuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlID0gY29uZGl0aW9uLnZhbHVlO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNoZWNrUmF3KCBjb25kaXRpb24ub3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICk7XHJcblx0fTtcclxufVxyXG5cclxuQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdENvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlcjsiLCJjb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uQ2hlY2tlcigpIHtcclxuXHR0aGlzLm9wZXJhdG9ycyA9IHRoaXMuZ2V0T3BlcmF0b3JzKCk7XHJcbn1cclxuXHJcbkNvbmRpdGlvbkNoZWNrZXIucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XHJcblx0ICovXHJcblx0aXNTdXBwb3J0ZWQ6ICgpID0+IHRydWUsXHJcblx0b3BlcmF0b3JzOiB7fSxcclxuXHRnZXRPcGVyYXRvcnMgKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZXF1YWw6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiBjdXJyZW50ID09PVxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF0sXHJcblx0XHRcdGVtcHR5OiAoIGN1cnJlbnQgKSA9PiBpc0VtcHR5KCBjdXJyZW50ICksXHJcblx0XHRcdGdyZWF0ZXI6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxyXG5cdFx0XHRcdGN1cnJlbnRcclxuXHRcdFx0KSA+ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRncmVhdGVyX29yX2VxOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPj0gKyhcclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXHJcblx0XHRcdCksXHJcblx0XHRcdGxlc3M6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiArKFxyXG5cdFx0XHRcdGN1cnJlbnRcclxuXHRcdFx0KSA8ICsoXHJcblx0XHRcdFx0Y29uZGl0aW9uVmFsdWVbIDAgXVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRsZXNzX29yX2VxOiAoIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICkgPT4gKyhcclxuXHRcdFx0XHRjdXJyZW50XHJcblx0XHRcdCkgPD0gKyhcclxuXHRcdFx0XHRjb25kaXRpb25WYWx1ZVsgMCBdXHJcblx0XHRcdCksXHJcblx0XHRcdGJldHdlZW46ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0aWYgKCAhY29uZGl0aW9uVmFsdWU/Lmxlbmd0aCB8fCBudWxsID09PSBjdXJyZW50ICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdGNvbmRpdGlvblZhbHVlWyAwIF0gPD0gK2N1cnJlbnQgJiZcclxuXHRcdFx0XHRcdCtjdXJyZW50IDw9IGNvbmRpdGlvblZhbHVlWyAxIF1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmVfb2Y6ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWUgKSA9PiB7XHJcblx0XHRcdFx0aWYgKCAhY29uZGl0aW9uVmFsdWU/Lmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiAwIDw9IGNvbmRpdGlvblZhbHVlLmluZGV4T2YoIGN1cnJlbnQgKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGFpbjogKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApID0+IHtcclxuXHRcdFx0XHRpZiAoICFjdXJyZW50ICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gMCA8PSBjdXJyZW50LmluZGV4T2YoIGNvbmRpdGlvblZhbHVlWyAwIF0gKTtcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XHJcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGNoZWNrICggY29uZGl0aW9uLCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgID0gaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHRcdGNvbnN0IGNvbmRpdGlvblZhbHVlID0gY29uZGl0aW9uLnZhbHVlO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNoZWNrUmF3KCBjb25kaXRpb24ub3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICk7XHJcblx0fSxcclxuXHRjaGVja1JhdyAoIG9wZXJhdG9yLCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZSApIHtcclxuXHRcdGlmICggdGhpcy5vcGVyYXRvcnMuaGFzT3duUHJvcGVydHkoIG9wZXJhdG9yICkgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wZXJhdG9yc1sgb3BlcmF0b3IgXShcclxuXHRcdFx0XHRjdXJyZW50LFxyXG5cdFx0XHRcdGNvbmRpdGlvblZhbHVlLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggMCAhPT0gb3BlcmF0b3IuaW5kZXhPZiggJ25vdF8nICkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBvcGVyYXRvck5hbWUgPSBvcGVyYXRvci5zbGljZSggNCApO1xyXG5cclxuXHRcdGlmICggIXRoaXMub3BlcmF0b3JzLmhhc093blByb3BlcnR5KCBvcGVyYXRvck5hbWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAhdGhpcy5vcGVyYXRvcnNbIG9wZXJhdG9yTmFtZSBdKFxyXG5cdFx0XHRjdXJyZW50LFxyXG5cdFx0XHRjb25kaXRpb25WYWx1ZSxcclxuXHRcdCk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbkNoZWNrZXI7IiwiaW1wb3J0IENvbmRpdGlvbkl0ZW0gZnJvbSAnLi9Db25kaXRpb25JdGVtJztcclxuXHJcbmNvbnN0IHsgQ2FsY3VsYXRlZEZvcm11bGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25GaWVsZEl0ZW0oKSB7XHJcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gISFvcHRpb25zPy5maWVsZD8ubGVuZ3RoO1xyXG5cdH07XHJcblx0dGhpcy5vYnNlcnZlICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGlucHV0ICAgICAgID0gdGhpcy5nZXRJbnB1dCgpO1xyXG5cdFx0dGhpcy5saXN0Ll9maWVsZHMgPSB0aGlzLmxpc3QuX2ZpZWxkcyA/PyBbXTtcclxuXHJcblx0XHRpZiAoICFpbnB1dCB8fCB0aGlzLmxpc3QuX2ZpZWxkcy5pbmNsdWRlcyggdGhpcy5maWVsZCApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5saXN0Ll9maWVsZHMucHVzaCggdGhpcy5maWVsZCApO1xyXG5cdFx0aW5wdXQud2F0Y2goICgpID0+IHRoaXMubGlzdC5vbkNoYW5nZVJlbGF0ZWQoKSApO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7SW5wdXREYXRhfGJvb2xlYW59XHJcblx0ICovXHJcblx0dGhpcy5nZXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxpc3Qucm9vdC5nZXRJbnB1dCggdGhpcy5maWVsZCApO1xyXG5cdH07XHJcblx0dGhpcy5pc1Bhc3NlZCAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XHJcblxyXG5cdFx0aWYgKCAhaW5wdXQgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaW5wdXQuY2hlY2tlci5jaGVjayggdGhpcywgaW5wdXQgKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHRoaXMuZmllbGQgICAgICAgID0gb3B0aW9ucy5maWVsZDtcclxuXHRcdHRoaXMub3BlcmF0b3IgICAgID0gb3B0aW9ucy5vcGVyYXRvcjtcclxuXHRcdHRoaXMucmVuZGVyX3N0YXRlID0gb3B0aW9ucy5yZW5kZXJfc3RhdGU7XHJcblx0XHR0aGlzLnVzZV9wcmVzZXQgICA9IG9wdGlvbnMudXNlX3ByZXNldDtcclxuXHRcdGxldCB2YWx1ZSAgICAgICAgID0gb3B0aW9ucz8udmFsdWU7XHJcblxyXG5cdFx0aWYgKCAhQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCggJywnICkubWFwKCBpdGVtID0+IGl0ZW0udHJpbSgpICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLnVzZV9wcmVzZXQgKSB7XHJcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZhbHVlID0ge307XHJcblxyXG5cdFx0Zm9yICggY29uc3QgWyBpbmRleCwgZm9ybXVsYSBdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZSApICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLmxpc3Qucm9vdCApO1xyXG5cclxuXHRcdFx0Y3VycmVudC5vYnNlcnZlKCBmb3JtdWxhICk7XHJcblx0XHRcdGN1cnJlbnQuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudmFsdWVbIGluZGV4IF0gPSAnJyArIGN1cnJlbnQuY2FsY3VsYXRlKCk7XHJcblx0XHRcdFx0dGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjdXJyZW50LnNldFJlc3VsdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmFsdWUgPSBPYmplY3QudmFsdWVzKCB0aGlzLnZhbHVlICk7XHJcblx0fTtcclxufVxyXG5cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XHJcblxyXG5Db25kaXRpb25GaWVsZEl0ZW0ucHJvdG90eXBlLmZpZWxkID0gbnVsbDtcclxuLyoqXHJcbiAqIEB0eXBlIHtBcnJheX1cclxuICovXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUudmFsdWUgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUgeydlcXVhbCd8J2dyZWF0ZXInfCdsZXNzJ3wnYmV0d2Vlbid8J29uZV9vZid8J2NvbnRhaW4nfVxyXG4gKi9cclxuQ29uZGl0aW9uRmllbGRJdGVtLnByb3RvdHlwZS5vcGVyYXRvciA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7Ym9vbGVhbn1cclxuICovXHJcbkNvbmRpdGlvbkZpZWxkSXRlbS5wcm90b3R5cGUudXNlX3ByZXNldCA9IG51bGw7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25GaWVsZEl0ZW07IiwiLyoqXHJcbiAqIEBwcm9wZXJ0eSB7Q29uZGl0aW9uc0xpc3R8Q29uZGl0aW9uc0Jsb2NrTGlzdH0gbGlzdCBSZWxhdGVkIGxpc3RcclxuICovXHJcbmZ1bmN0aW9uIENvbmRpdGlvbkl0ZW0oKSB7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLm9ic2VydmUgICAgID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUuc2V0T3B0aW9ucyAgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcbn07XHJcbkNvbmRpdGlvbkl0ZW0ucHJvdG90eXBlLmlzUGFzc2VkICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdHRocm93IG5ldyBFcnJvcihcclxuXHRcdCdZb3UgbXVzdCBwcm92aWRlIENvbmRpdGlvbkl0ZW06OmlzUGFzc2VkIGZ1bmN0aW9uJyxcclxuXHQpO1xyXG59O1xyXG5Db25kaXRpb25JdGVtLnByb3RvdHlwZS5zZXRMaXN0ICAgICA9IGZ1bmN0aW9uICggbGlzdCApIHtcclxuXHR0aGlzLmxpc3QgPSBsaXN0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uSXRlbTsiLCJpbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uUmVuZGVyU3RhdGVJdGVtKCkge1xyXG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuICdyZW5kZXJfc3RhdGUnID09PSBvcHRpb25zPy5vcGVyYXRvcjtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5nZXRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxpc3Qucm9vdC5nZXRJbnB1dCggJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzJyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2V0SW5wdXQoKS53YXRjaCggKCkgPT4gdGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRPcHRpb25zID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0dGhpcy5yZW5kZXJfc3RhdGUgPSBvcHRpb25zLnJlbmRlcl9zdGF0ZSA/PyBbXTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmlzUGFzc2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5nZXRJbnB1dCgpO1xyXG5cclxuXHRcdGlmICggIXZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLnJlbmRlcl9zdGF0ZS5zb21lKCBjdXJyZW50ID0+IHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlLmN1cnJlbnQuaW5jbHVkZXMoIGN1cnJlbnQgKTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG59XHJcblxyXG5Db25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcclxuXHJcbkNvbmRpdGlvblJlbmRlclN0YXRlSXRlbS5wcm90b3R5cGUucmVuZGVyX3N0YXRlID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW07IiwiaW1wb3J0IENvbmRpdGlvbnNCbG9ja0xpc3QgZnJvbSAnLi9Db25kaXRpb25zQmxvY2tMaXN0JztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBkb0FjdGlvbixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcbmNvbnN0IHtcclxuXHQgICAgICBSZWFjdGl2ZVZhcixcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcbmNvbnN0IHtcclxuXHQgICAgICB2YWxpZGF0ZUlucHV0c0FsbCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgb2JzZXJ2YWJsZSApIHtcclxuXHR0aGlzLm5vZGUgICAgICAgICAgID0gbm9kZTtcclxuXHRub2RlLmpmYkNvbmRpdGlvbmFsID0gdGhpcztcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cclxuXHQgKi9cclxuXHR0aGlzLnJvb3QgPSBvYnNlcnZhYmxlO1xyXG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7Q29uZGl0aW9uc0Jsb2NrTGlzdH1cclxuXHQgKi9cclxuXHR0aGlzLmxpc3QgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7c3RyaW5nIHwgT2JqZWN0fVxyXG5cdCAqL1xyXG5cdHRoaXMuZnVuY3Rpb24gPSBudWxsO1xyXG5cdHRoaXMuc2V0dGluZ3MgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7UGFnZVN0YXRlfVxyXG5cdCAqL1xyXG5cdHRoaXMucGFnZSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtNdWx0aVN0ZXBTdGF0ZX1cclxuXHQgKi9cclxuXHR0aGlzLm11bHRpc3RlcCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOb2RlfVxyXG5cdCAqL1xyXG5cdHRoaXMuY29tbWVudCA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtJbnB1dERhdGFbXX1cclxuXHQgKi9cclxuXHR0aGlzLmlucHV0cyA9IFtdO1xyXG5cclxuXHR0aGlzLmlzUmlnaHQgPSBuZXcgUmVhY3RpdmVWYXIoIG51bGwgKTtcclxuXHR0aGlzLmlzUmlnaHQubWFrZSgpO1xyXG5cclxuXHR0aGlzLnNldENvbmRpdGlvbnMoKTtcclxuXHR0aGlzLnNldElucHV0cygpO1xyXG5cdHRoaXMuc2V0RnVuY3Rpb24oKTtcclxuXHJcblx0aWYgKCAhd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5kZXZtb2RlICkge1xyXG5cdFx0ZGVsZXRlIHRoaXMubm9kZS5kYXRhc2V0LmpmYkNvbmRpdGlvbmFsO1xyXG5cdFx0ZGVsZXRlIHRoaXMubm9kZS5kYXRhc2V0LmpmYkZ1bmM7XHJcblx0fVxyXG5cclxuXHRkb0FjdGlvbiggJ2pldC5mYi5jb25kaXRpb25hbC5pbml0JywgdGhpcyApO1xyXG59XHJcblxyXG5Db25kaXRpb25hbEJsb2NrLnByb3RvdHlwZSA9IHtcclxuXHRzZXRDb25kaXRpb25zKCkge1xyXG5cdFx0Y29uc3QgeyBqZmJDb25kaXRpb25hbCB9ID0gdGhpcy5ub2RlLmRhdGFzZXQ7XHJcblxyXG5cdFx0dGhpcy5saXN0ICAgICAgID0gbmV3IENvbmRpdGlvbnNCbG9ja0xpc3QoIGpmYkNvbmRpdGlvbmFsLCB0aGlzLnJvb3QgKTtcclxuXHRcdHRoaXMubGlzdC5ibG9jayA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5saXN0Lm9uQ2hhbmdlUmVsYXRlZCA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5pc1JpZ2h0LmN1cnJlbnQgPSB0aGlzLmxpc3QuZ2V0UmVzdWx0KCk7XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0c2V0SW5wdXRzKCkge1xyXG5cdFx0dGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKFxyXG5cdFx0XHR0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWpmYi1zeW5jXScgKSxcclxuXHRcdCkubWFwKFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0uamZiU3luYyxcclxuXHRcdCkuZmlsdGVyKFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0sXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0aW5zZXJ0Q29tbWVudCgpIHtcclxuXHRcdGlmICggIXRoaXMuc2V0dGluZ3M/LmRvbSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoICcnICk7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IGNvbW1lbnQgYWZ0ZXIgY29uZGl0aW9uYWwgYmxvY2tcclxuXHRcdHRoaXMubm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcclxuXHRcdFx0dGhpcy5jb21tZW50LFxyXG5cdFx0XHR0aGlzLm5vZGUubmV4dFNpYmxpbmcsXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0b2JzZXJ2ZSgpIHtcclxuXHRcdGlmICggdGhpcy5pc09ic2VydmVkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzT2JzZXJ2ZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5pbnNlcnRDb21tZW50KCk7XHJcblxyXG5cdFx0dGhpcy5pc1JpZ2h0LndhdGNoKCAoKSA9PiB0aGlzLnJ1bkZ1bmN0aW9uKCkgKTtcclxuXHRcdHRoaXMuaXNSaWdodC53YXRjaCggKCkgPT4gdGhpcy52YWxpZGF0ZUlucHV0cygpICk7XHJcblx0XHR0aGlzLmxpc3Qub2JzZXJ2ZSgpO1xyXG5cdH0sXHJcblx0cnVuRnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmlzUmlnaHQuY3VycmVudDtcclxuXHJcblx0XHRzd2l0Y2ggKCB0aGlzLmZ1bmN0aW9uICkge1xyXG5cdFx0XHRjYXNlICdzaG93JzpcclxuXHRcdFx0XHR0aGlzLnNob3dCbG9jayggcmVzdWx0ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2hpZGUnOlxyXG5cdFx0XHRcdHRoaXMuc2hvd0Jsb2NrKCAhcmVzdWx0ICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2Rpc2FibGUnOlxyXG5cdFx0XHRcdHRoaXMuZGlzYWJsZUJsb2NrKCByZXN1bHQgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRkb0FjdGlvbihcclxuXHRcdFx0XHRcdCdqZXQuZmIuY29uZGl0aW9uYWwuYmxvY2sucnVuRnVuY3Rpb24nLFxyXG5cdFx0XHRcdFx0dGhpcy5mdW5jdGlvbixcclxuXHRcdFx0XHRcdHJlc3VsdCxcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBDb21wYXRpYmlsaXR5IHdpdGggU2F2ZSBQcm9ncmVzc1xyXG5cdCAqIEBzaW5jZSAzLjAuMSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjQ4MFxyXG5cdCAqXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTU1M1xyXG5cdCAqL1xyXG5cdHZhbGlkYXRlSW5wdXRzKCkge1xyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR2YWxpZGF0ZUlucHV0c0FsbCggdGhpcy5pbnB1dHMsIHRydWUgKS5cclxuXHRcdFx0XHR0aGVuKCAoKSA9PiB7fSApLlxyXG5cdFx0XHRcdGNhdGNoKCAoKSA9PiB7fSApO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0c2hvd0Jsb2NrKCByZXN1bHQgKSB7XHJcblx0XHR0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2pldC1mb3JtLWJ1aWxkZXItLWhpZGRlbicgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMuc2V0dGluZ3M/LmRvbSApIHtcclxuXHRcdFx0dGhpcy5zaG93QmxvY2tEb20oIHJlc3VsdCApO1xyXG5cdFx0XHRjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jay9ibG9jay10b2dnbGUtaGlkZGVuLWRvbScsIHtcclxuXHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdGJsb2NrOiB0aGlzLm5vZGUsXHJcblx0XHRcdFx0XHRyZXN1bHQ6IHJlc3VsdFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMubm9kZS5zdHlsZS5kaXNwbGF5ID0gcmVzdWx0ID8gJ2Jsb2NrJyA6ICdub25lJztcclxuXHR9LFxyXG5cdHNob3dCbG9ja0RvbSggcmVzdWx0ICkge1xyXG5cdFx0Y29uc3QgaW5wdXRzTGlzdCA9IHRoaXMucm9vdC5kYXRhSW5wdXRzO1xyXG5cclxuXHRcdGlmICggIXJlc3VsdCApIHtcclxuXHRcdFx0dGhpcy5ub2RlLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0T2JqZWN0LmtleXMoIGlucHV0c0xpc3QgKS5mb3JFYWNoKCBrZXkgPT4ge1xyXG5cdFx0XHRcdGlmICggaW5wdXRzTGlzdFtrZXldLmZvcm11bGEgKSB7XHJcblx0XHRcdFx0XHRpbnB1dHNMaXN0W2tleV0ucmVDYWxjdWxhdGVGb3JtdWxhKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmNvbW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoIHRoaXMubm9kZSwgdGhpcy5jb21tZW50ICk7XHJcblxyXG5cdFx0T2JqZWN0LmtleXMoIGlucHV0c0xpc3QgKS5mb3JFYWNoKCBrZXkgPT4ge1xyXG5cdFx0XHRpZiAoIGlucHV0c0xpc3Rba2V5XS5mb3JtdWxhICkge1xyXG5cdFx0XHRcdGlucHV0c0xpc3Rba2V5XS5yZUNhbGN1bGF0ZUZvcm11bGEoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0ZGlzYWJsZUJsb2NrKCByZXN1bHQgKSB7XHJcblx0XHR0aGlzLm5vZGUuZGlzYWJsZWQgPSByZXN1bHQ7XHJcblx0fSxcclxuXHRzZXRGdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuZnVuY3Rpb24gPSB0aGlzLm5vZGUuZGF0YXNldC5qZmJGdW5jO1xyXG5cclxuXHRcdGxldCBwYXJzZWQ7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRwYXJzZWQgPSBKU09OLnBhcnNlKCB0aGlzLmZ1bmN0aW9uICk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBbIFsgbmFtZSwgc2V0dGluZ3MgXSBdID0gT2JqZWN0LmVudHJpZXMoIHBhcnNlZCApO1xyXG5cclxuXHRcdHRoaXMuZnVuY3Rpb24gPSBuYW1lO1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25hbEJsb2NrOyIsImltcG9ydCBDb25kaXRpb25zTGlzdCBmcm9tICcuL0NvbmRpdGlvbnNMaXN0JztcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbnNCbG9ja0xpc3QoIGNvbmRpdGlvbnMsIHJvb3QgKSB7XHJcblx0Q29uZGl0aW9uc0xpc3QuY2FsbCggdGhpcywgY29uZGl0aW9ucywgcm9vdCApO1xyXG59XHJcblxyXG5Db25kaXRpb25zQmxvY2tMaXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbnNMaXN0LnByb3RvdHlwZSApO1xyXG4vKipcclxuICogQHR5cGUge0NvbmRpdGlvbmFsQmxvY2t9XHJcbiAqL1xyXG5Db25kaXRpb25zQmxvY2tMaXN0LnByb3RvdHlwZS5ibG9jayA9IG51bGw7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zQmxvY2tMaXN0OyIsImltcG9ydCB7IGNyZWF0ZUNvbmRpdGlvbkl0ZW0gfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBPck9wZXJhdG9ySXRlbSBmcm9tICcuL09yT3BlcmF0b3JJdGVtJztcclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbnNMaXN0KCBjb25kaXRpb25zLCByb290ICkge1xyXG5cdHRoaXMucm9vdCA9IHJvb3Q7XHJcblx0dGhpcy5zZXRDb25kaXRpb25zKCBjb25kaXRpb25zICk7XHJcbn1cclxuXHJcbkNvbmRpdGlvbnNMaXN0LnByb3RvdHlwZSA9IHtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cclxuXHQgKi9cclxuXHRyb290OiBudWxsLFxyXG5cdGNvbmRpdGlvbnM6IFtdLFxyXG5cdGludmFsaWQ6IFtdLFxyXG5cdGdyb3VwczogW10sXHJcblx0LyoqXHJcblx0ICogWW91IGNhbiBvdmVycmlkZSB0aGlzIGNhbGxiYWNrLlxyXG5cdCAqIEl0IHVzZWQgaW4gQ29uZGl0aW9uRmllbGRJdGVtLlxyXG5cdCAqXHJcblx0ICogUnVucyBldmVyeSB0aW1lLCB3aGVuIGNvbmRpdGlvbnMgaXMgbWF0Y2hcclxuXHQgKi9cclxuXHRvbkNoYW5nZVJlbGF0ZWQoKSB7XHJcblx0XHRpZiAoICF0aGlzLmdldFJlc3VsdCgpICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLm9uTWF0Y2hDb25kaXRpb25zKCk7XHJcblx0fSxcclxuXHRvbk1hdGNoQ29uZGl0aW9ucygpIHt9LFxyXG5cdG9ic2VydmUoKSB7XHJcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgdGhpcy5nZXRDb25kaXRpb25zKCkgKSB7XHJcblx0XHRcdGNvbmRpdGlvbi5vYnNlcnZlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzZXRDb25kaXRpb25zKCBjb25kaXRpb25zICkge1xyXG5cdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGNvbmRpdGlvbnMgKSB7XHJcblx0XHRcdGNvbmRpdGlvbnMgPSBKU09OLnBhcnNlKCBjb25kaXRpb25zICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb25kaXRpb25zID0gY29uZGl0aW9ucy5tYXAoXHJcblx0XHRcdGl0ZW0gPT4gY3JlYXRlQ29uZGl0aW9uSXRlbSggaXRlbSwgdGhpcyApLFxyXG5cdFx0KS5maWx0ZXIoIGl0ZW0gPT4gaXRlbSApO1xyXG5cclxuXHRcdGNvbnN0IGdyb3VwcyAgID0ge307XHJcblx0XHRsZXQgZ3JvdXBJbmRleCA9IDA7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIHRoaXMuZ2V0Q29uZGl0aW9ucygpICkge1xyXG5cdFx0XHRpZiAoIGNvbmRpdGlvbiBpbnN0YW5jZW9mIE9yT3BlcmF0b3JJdGVtICkge1xyXG5cdFx0XHRcdGdyb3VwSW5kZXgrKztcclxuXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Z3JvdXBzWyBncm91cEluZGV4IF0gPSBncm91cHNbIGdyb3VwSW5kZXggXSA/PyBbXTtcclxuXHRcdFx0Z3JvdXBzWyBncm91cEluZGV4IF0ucHVzaCggY29uZGl0aW9uICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ncm91cHMgPSBPYmplY3QudmFsdWVzKCBncm91cHMgKTtcclxuXHR9LFxyXG5cdGdldFJlc3VsdCgpIHtcclxuXHRcdHRoaXMuaW52YWxpZCA9IFtdO1xyXG5cclxuXHRcdGlmICggIXRoaXMuZ3JvdXBzLmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgZ3JvdXAgb2YgdGhpcy5ncm91cHMgKSB7XHJcblx0XHRcdGlmICggdGhpcy5pc1ZhbGlkR3JvdXAoIGdyb3VwICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRpc1ZhbGlkR3JvdXAoIGNvbmRpdGlvbnNHcm91cCApIHtcclxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiBjb25kaXRpb25zR3JvdXAgKSB7XHJcblx0XHRcdGlmICggY29uZGl0aW9uLmlzUGFzc2VkKCkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5pbnZhbGlkLnB1c2goIGNvbmRpdGlvbiApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7QXJyYXk8Q29uZGl0aW9uRmllbGRJdGVtIHwgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbT59XHJcblx0ICovXHJcblx0Z2V0Q29uZGl0aW9ucygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmRpdGlvbnM7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbnNMaXN0OyIsImltcG9ydCBDb25kaXRpb25DaGVja2VyIGZyb20gJy4vQ29uZGl0aW9uQ2hlY2tlcic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgZ2V0VGltZXN0YW1wLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcbmNvbnN0IHtcclxuXHQgICAgICBNaW5fSW5fU2VjLFxyXG5cdCAgICAgIE1pbGxpX0luX1NlYyxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQ29uc3Q7XHJcblxyXG5jb25zdCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblxyXG5mdW5jdGlvbiBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXIoKSB7XHJcblx0Q29uZGl0aW9uQ2hlY2tlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcclxuXHJcblx0XHRyZXR1cm4gWyAnZGF0ZScsICd0aW1lJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gY29uZGl0aW9uIHtDb25kaXRpb25GaWVsZEl0ZW19XHJcblx0ICogQHBhcmFtIGlucHV0ICAgICB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHRoaXMuY2hlY2sgPSBmdW5jdGlvbiAoIGNvbmRpdGlvbiwgaW5wdXQgKSB7XHJcblx0XHRjb25zdCB7IHRpbWU6IGN1cnJlbnQgfSA9IGdldFRpbWVzdGFtcCggaW5wdXQudmFsdWUuY3VycmVudCApO1xyXG5cdFx0Y29uc3QgY29uZGl0aW9uVmFsdWUgICAgICA9IGNvbmRpdGlvbi52YWx1ZS5tYXAoIHZhbHVlID0+IHtcclxuXHRcdFx0Y29uc3QgeyB0aW1lLCB0eXBlIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblxyXG5cdFx0XHRpZiAoICdudW1iZXInID09PSB0eXBlICYmIGNvbmRpdGlvbi51c2VfcHJlc2V0ICkge1xyXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuXHRcdFx0XHRyZXR1cm4gdGltZSAqIE1pbGxpX0luX1NlYyArIG9mZnNldCAqIE1pbl9Jbl9TZWM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aW1lO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmNoZWNrUmF3KCBjb25kaXRpb24ub3BlcmF0b3IsIGN1cnJlbnQsIGNvbmRpdGlvblZhbHVlICk7XHJcblx0fTtcclxufVxyXG5cclxuRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZUNvbmRpdGlvbkNoZWNrZXI7IiwiaW1wb3J0IENvbmRpdGlvbkNoZWNrZXIgZnJvbSAnLi9Db25kaXRpb25DaGVja2VyJztcclxuXHJcbmZ1bmN0aW9uIE11bHRpcGxlQ29uZGl0aW9uQ2hlY2tlcigpIHtcclxuXHRDb25kaXRpb25DaGVja2VyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5vcGVyYXRvcnMub25lX29mID0gKCBjdXJyZW50LCBjb25kaXRpb25WYWx1ZXMgKSA9PiB7XHJcblx0XHRpZiAoICFjb25kaXRpb25WYWx1ZXM/Lmxlbmd0aCB8fCAhY3VycmVudD8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY3VycmVudC5zb21lKFxyXG5cdFx0XHR2YWwgPT4gLTEgIT09IGNvbmRpdGlvblZhbHVlcy5pbmRleE9mKCB2YWwgKSxcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vcGVyYXRvcnMuY29udGFpbiA9ICggY3VycmVudCwgY29uZGl0aW9uVmFsdWVzICkgPT4ge1xyXG5cdFx0aWYgKCAhY3VycmVudD8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY3VycmVudC5zb21lKFxyXG5cdFx0XHR2YWwgPT4gdmFsLmluZGV4T2YoIGNvbmRpdGlvblZhbHVlc1sgMCBdICkgIT09IC0xLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHJldHVybiBpbnB1dC5pc0FycmF5KCk7XHJcblx0fTtcclxufVxyXG5cclxuTXVsdGlwbGVDb25kaXRpb25DaGVja2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q29uZGl0aW9uQ2hlY2tlci5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdWx0aXBsZUNvbmRpdGlvbkNoZWNrZXI7XHJcbiIsImltcG9ydCBDb25kaXRpb25JdGVtIGZyb20gJy4vQ29uZGl0aW9uSXRlbSc7XHJcblxyXG5mdW5jdGlvbiBPck9wZXJhdG9ySXRlbSgpIHtcclxuXHRDb25kaXRpb25JdGVtLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdG9wdGlvbnMub3Jfb3BlcmF0b3IgPz8gZmFsc2VcclxuXHRcdCk7XHJcblx0fTtcclxufVxyXG5cclxuT3JPcGVyYXRvckl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yT3BlcmF0b3JJdGVtOyIsImltcG9ydCBDb25kaXRpb25GaWVsZEl0ZW0gZnJvbSAnLi9Db25kaXRpb25GaWVsZEl0ZW0nO1xyXG5pbXBvcnQgQ29uZGl0aW9uYWxCbG9jayBmcm9tICcuL0NvbmRpdGlvbmFsQmxvY2snO1xyXG5pbXBvcnQgQ29uZGl0aW9uQ2hlY2tlciBmcm9tICcuL0NvbmRpdGlvbkNoZWNrZXInO1xyXG5pbXBvcnQgTXVsdGlwbGVDb25kaXRpb25DaGVja2VyIGZyb20gJy4vTXVsdGlwbGVDb25kaXRpb25DaGVja2VyJztcclxuaW1wb3J0IE9yT3BlcmF0b3JJdGVtIGZyb20gJy4vT3JPcGVyYXRvckl0ZW0nO1xyXG5pbXBvcnQgRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyIGZyb20gJy4vRGF0ZVRpbWVDb25kaXRpb25DaGVja2VyJztcclxuaW1wb3J0IENvbmRpdGlvblJlbmRlclN0YXRlSXRlbSBmcm9tICcuL0NvbmRpdGlvblJlbmRlclN0YXRlSXRlbSc7XHJcbmltcG9ydCBDYWxjdWxhdGVkRmllbGRDaGVja2VyIGZyb20gJy4vQ2FsY3VsYXRlZEZpZWxkQ2hlY2tlcic7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IGdldEl0ZW1UeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLnR5cGVzJyxcclxuXHRbXHJcblx0XHRDb25kaXRpb25SZW5kZXJTdGF0ZUl0ZW0sXHJcblx0XHRPck9wZXJhdG9ySXRlbSxcclxuXHRcdENvbmRpdGlvbkZpZWxkSXRlbSxcclxuXHRdLFxyXG4pO1xyXG4vKipcclxuICogQHR5cGUge0NvbmRpdGlvbkl0ZW1bXX1cclxuICovXHJcbmxldCBpdGVtVHlwZXMgICAgICA9IFtdO1xyXG5cclxuY29uc3QgZ2V0Q2hlY2tlcnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC5jaGVja2VycycsXHJcblx0W1xyXG5cdFx0TXVsdGlwbGVDb25kaXRpb25DaGVja2VyLFxyXG5cdFx0RGF0ZVRpbWVDb25kaXRpb25DaGVja2VyLFxyXG5cdFx0Q2FsY3VsYXRlZEZpZWxkQ2hlY2tlcixcclxuXHRcdENvbmRpdGlvbkNoZWNrZXIsXHJcblx0XSxcclxuKTtcclxuXHJcbmxldCBjaGVja2VycyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgb3B0aW9ucyB7e319XHJcbiAqIEBwYXJhbSAgbGlzdCAgICB7Q29uZGl0aW9uc0xpc3R9XHJcbiAqIEByZXR1cm4geyp9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDb25kaXRpb25JdGVtKCBvcHRpb25zLCBsaXN0ICkge1xyXG5cdGlmICggIWl0ZW1UeXBlcy5sZW5ndGggKSB7XHJcblx0XHRpdGVtVHlwZXMgPSBnZXRJdGVtVHlwZXMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IGRhdGFUeXBlIG9mIGl0ZW1UeXBlcyApIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge0NvbmRpdGlvbkl0ZW19XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgZGF0YVR5cGUoKTtcclxuXHJcblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBvcHRpb25zICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y3VycmVudC5zZXRMaXN0KCBsaXN0ICk7XHJcblx0XHRjdXJyZW50LnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudDtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG5vZGVcclxuICogQHBhcmFtICByb290XHJcbiAqIEByZXR1cm4ge0NvbmRpdGlvbmFsQmxvY2t9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDb25kaXRpb25hbEJsb2NrKCBub2RlLCByb290ICkge1xyXG5cdGlmICggbm9kZS5oYXNPd25Qcm9wZXJ0eSggJ2pmYkNvbmRpdGlvbmFsJyApICkge1xyXG5cdFx0cmV0dXJuIG5vZGUuamZiQ29uZGl0aW9uYWw7XHJcblx0fVxyXG5cdGNvbnN0IGJsb2NrID0gbmV3IENvbmRpdGlvbmFsQmxvY2soIG5vZGUsIHJvb3QgKTtcclxuXHJcblx0YmxvY2sub2JzZXJ2ZSgpO1xyXG5cdGJsb2NrLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XHJcblxyXG5cdHJldHVybiBibG9jaztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tlciggaW5wdXQgKSB7XHJcblx0aWYgKCAhY2hlY2tlcnMubGVuZ3RoICkge1xyXG5cdFx0Y2hlY2tlcnMgPSBnZXRDaGVja2VycygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgY2hlY2tlciBvZiBjaGVja2VycyApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgY2hlY2tlcigpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0Y3JlYXRlQ29uZGl0aW9uSXRlbSxcclxuXHRjcmVhdGVDb25kaXRpb25hbEJsb2NrLFxyXG5cdGNyZWF0ZUNoZWNrZXIsXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVDaGVja2VyLCBjcmVhdGVDb25kaXRpb25hbEJsb2NrIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQ29uZGl0aW9uYWxCbG9jayBmcm9tICcuL0NvbmRpdGlvbmFsQmxvY2snO1xyXG5pbXBvcnQgQ29uZGl0aW9uSXRlbSBmcm9tICcuL0NvbmRpdGlvbkl0ZW0nO1xyXG5pbXBvcnQgQ29uZGl0aW9uc0xpc3QgZnJvbSAnLi9Db25kaXRpb25zTGlzdCc7XHJcblxyXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrJyxcclxuXHRmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XHJcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0YFtkYXRhLWpmYi1jb25kaXRpb25hbF1gLFxyXG5cdFx0KSApIHtcclxuXHRcdFx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayggbm9kZSwgb2JzZXJ2YWJsZSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0MjAsXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5pbnB1dC5tYWtlUmVhY3RpdmUnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0aW5wdXQuY2hlY2tlciA9IGNyZWF0ZUNoZWNrZXIoIGlucHV0ICk7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLmJsb2NrLnJ1bkZ1bmN0aW9uJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jaycsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGZ1bmNOYW1lXHJcblx0ICogQHBhcmFtIHJlc3VsdFxyXG5cdCAqIEBwYXJhbSBjb25kaXRpb25hbEJsb2NrIHtDb25kaXRpb25hbEJsb2NrfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggZnVuY05hbWUsIHJlc3VsdCwgY29uZGl0aW9uYWxCbG9jayApIHtcclxuXHRcdGlmIChcclxuXHRcdFx0J3NldENzc0NsYXNzJyAhPT0gZnVuY05hbWUgfHxcclxuXHRcdFx0IWNvbmRpdGlvbmFsQmxvY2suc2V0dGluZ3M/LmNsYXNzTmFtZVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25kaXRpb25hbEJsb2NrLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcclxuXHRcdFx0Y29uZGl0aW9uYWxCbG9jay5zZXR0aW5ncy5jbGFzc05hbWUsXHJcblx0XHRcdHJlc3VsdCxcclxuXHRcdCk7XHJcblx0fSxcclxuKTtcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XHJcblx0KSxcclxuXHRDb25kaXRpb25JdGVtLFxyXG5cdENvbmRpdGlvbmFsQmxvY2ssXHJcblx0Y3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcclxuXHRjcmVhdGVDaGVja2VyLFxyXG5cdENvbmRpdGlvbnNMaXN0LFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=