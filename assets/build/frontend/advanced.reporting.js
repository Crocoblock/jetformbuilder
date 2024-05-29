/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/advanced.reporting/AdvancedReporting.js":
/*!**********************************************************!*\
  !*** ./frontend/advanced.reporting/AdvancedReporting.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/advanced.reporting/functions.js");

const {
  ReportingInterface
} = JetFormBuilderAbstract;
const {
  allRejected
} = JetFormBuilderFunctions;

/**
 * @property {AdvancedRestriction} restrictions
 *
 * @this {ReportingInterface}
 * @constructor
 */
function AdvancedReporting() {
  ReportingInterface.call(this);
  this.type = 'inherit';
  this.messages = {};
  this.skipServerSide = true;

  /**
   * Computed property which contain all attrs
   * for all supported restrictions
   *
   * @see AdvancedRestriction.onReady
   *
   * @type {String[]}
   */
  this.watchAttrs = [];
  this.queue = [];
}
AdvancedReporting.prototype = Object.create(ReportingInterface.prototype);
AdvancedReporting.prototype.skipServerSide = true;
AdvancedReporting.prototype.hasServerSide = false;
AdvancedReporting.prototype.isProcess = null;
AdvancedReporting.prototype.queue = [];
AdvancedReporting.prototype.setRestrictions = function () {
  (0,_functions__WEBPACK_IMPORTED_MODULE_0__.setRestrictions)(this);
};
AdvancedReporting.prototype.isSupported = function (node, input) {
  this.type = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getNodeValidationType)(node);
  const inherit = 'inherit' === this.type ? (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getInheritValidationType)(input) : this.type;
  return !!inherit?.length;
};
AdvancedReporting.prototype.getErrorsRaw = async function (promises) {
  if (this.hasServerSide) {
    this.input.loading.start();
  }
  const errors = await allRejected(promises);
  this.valuePrev = this.input.getValue();
  if (this.hasServerSide) {
    this.input.loading.end();
  }
  return errors;
};

/**
 * @param validationErrors {AdvancedRestriction[]|Restriction[]}
 */
AdvancedReporting.prototype.reportRaw = function (validationErrors) {
  let message = '';
  for (const validationError of validationErrors) {
    message = validationError.getMessage();
    if (message?.length) {
      break;
    }
  }
  if (!message) {
    this.clearReport();
    return;
  }
  this.insertError(message);
};
AdvancedReporting.prototype.setInput = function (input) {
  this.messages = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getValidationMessages)(input.nodes[0]);
  ReportingInterface.prototype.setInput.call(this, input);
};
/**
 * @since 3.0.5 Introduced
 */
AdvancedReporting.prototype.observeAttrs = function () {
  for (const watchAttr of this.watchAttrs) {
    if (!this.input.attrs.hasOwnProperty(watchAttr)) {
      continue;
    }
    /**
     * @type {BaseHtmlAttr}
     */
    const attr = this.input.attrs[watchAttr];
    attr.value.watch(() => {
      this.valuePrev = null;
      this.validateOnBlur();
    });
  }
};
AdvancedReporting.prototype.clearReport = function () {
  const inner = () => {
    const node = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(this.getNode());
    if (!node) {
      return;
    }
    node.classList.remove('field-has-error');
    const error = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getErrorNode)(node);
    if (!error) {
      return;
    }
    error.remove();
  };
  inner();
  this.makeValid();
};
AdvancedReporting.prototype.insertError = function (message) {
  const inner = () => {
    const node = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(this.getNode());
    const error = this.createError(node, message);
    node.classList.add('field-has-error');
    if (error.isConnected) {
      return;
    }

    // it can be on fields_layout === 'row'
    const colEnd = node.querySelector('.jet-form-builder-col__end');
    if (colEnd) {
      colEnd.appendChild(error);
    } else {
      node.appendChild(error);
    }
  };
  inner();
  this.makeInvalid();
};
AdvancedReporting.prototype.createError = function (node, message) {
  const error = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getErrorNode)(node);
  const inputNode = this.getNode();
  if (error) {
    error.innerHTML = message;
    return error;
  }
  const div = document.createElement('div');
  div.classList.add('error-message');
  div.innerHTML = message;
  div.id = inputNode.id + '__error';
  return div;
};
AdvancedReporting.prototype.makeInvalid = function () {
  var _errorNode$id;
  const wrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getWrapper)(this.getNode());
  const errorNode = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getErrorNode)(wrapper);
  this.getNode().setAttribute('aria-invalid', 'true');
  this.getNode().setAttribute('aria-describedby', (_errorNode$id = errorNode?.id) !== null && _errorNode$id !== void 0 ? _errorNode$id : false);
};
AdvancedReporting.prototype.makeValid = function () {
  this.getNode().removeAttribute('aria-invalid');
  this.getNode().removeAttribute('aria-describedby');
};
AdvancedReporting.prototype.validateOnChange = function (addToQueue = false) {
  const callback = () => {
    this.input.getContext().setSilence(false);
    this.validate().then(() => {}).catch(() => {}).finally(() => {
      this.isProcess = null;
      const queue = [...this.queue];
      this.queue = [];
      if (!queue.length) {
        return;
      }
      this.valuePrev = null;
      queue.forEach(current => current());
    });
  };

  /**
   * @link https://github.com/Crocoblock/issues-tracker/issues/1766
   */
  if (addToQueue && this.isProcess) {
    this.queue = [callback];
  }
  if (this.isProcess) {
    return;
  }
  this.isProcess = true;
  callback();
};
AdvancedReporting.prototype.validateOnBlur = function () {
  /**
   * @link https://github.com/Crocoblock/issues-tracker/issues/1766
   */
  if (this.isProcess) {
    return;
  }
  this.isProcess = true;
  this.skipServerSide = false;
  this.input.getContext().setSilence(false);
  this.validate().then(() => {}).catch(() => {}).finally(() => {
    this.skipServerSide = true;
    this.hasServerSide = false;
    this.isProcess = null;
  });
};
AdvancedReporting.prototype.validateOnChangeState = function () {
  if (this.isProcess) {
    return Promise.resolve();
  }
  this.isProcess = true;
  this.skipServerSide = false;
  return new Promise((resolve, reject) => {
    this.validate().then(resolve).catch(reject).finally(() => {
      this.skipServerSide = true;
      this.hasServerSide = false;
      this.isProcess = null;
    });
  });
};

/**
 * @param restriction {AdvancedRestriction|Restriction}
 * @return {boolean}
 */
AdvancedReporting.prototype.canProcessRestriction = function (restriction) {
  return (
    // allow all
    !this.skipServerSide ||
    // or only not-ServerSide
    !restriction.isServerSide()
  );
};

/**
 * @param restriction {AdvancedRestriction|Restriction}
 */
AdvancedReporting.prototype.beforeProcessRestriction = function (restriction) {
  this.hasServerSide = restriction.isServerSide() ? true : this.hasServerSide;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedReporting);

/***/ }),

/***/ "./frontend/advanced.reporting/functions.js":
/*!**************************************************!*\
  !*** ./frontend/advanced.reporting/functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getErrorNode: () => (/* binding */ getErrorNode),
/* harmony export */   getInheritValidationType: () => (/* binding */ getInheritValidationType),
/* harmony export */   getMessageBySlug: () => (/* binding */ getMessageBySlug),
/* harmony export */   getNodeValidationType: () => (/* binding */ getNodeValidationType),
/* harmony export */   getPreparedRules: () => (/* binding */ getPreparedRules),
/* harmony export */   getValidationMessages: () => (/* binding */ getValidationMessages),
/* harmony export */   getWrapper: () => (/* binding */ getWrapper),
/* harmony export */   observeFieldRestriction: () => (/* binding */ observeFieldRestriction),
/* harmony export */   setRestrictions: () => (/* binding */ setRestrictions)
/* harmony export */ });
/* harmony import */ var _restrictions_ReachLimitNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restrictions/ReachLimitNumbers */ "./frontend/advanced.reporting/restrictions/ReachLimitNumbers.js");
/* harmony import */ var _restrictions_NotEnoughNumbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restrictions/NotEnoughNumbers */ "./frontend/advanced.reporting/restrictions/NotEnoughNumbers.js");
/* harmony import */ var _restrictions_NotUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restrictions/NotUrl */ "./frontend/advanced.reporting/restrictions/NotUrl.js");
/* harmony import */ var _restrictions_NotEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restrictions/NotEmail */ "./frontend/advanced.reporting/restrictions/NotEmail.js");
/* harmony import */ var _restrictions_NotEnoughChars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restrictions/NotEnoughChars */ "./frontend/advanced.reporting/restrictions/NotEnoughChars.js");
/* harmony import */ var _restrictions_ReachLimitChars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restrictions/ReachLimitChars */ "./frontend/advanced.reporting/restrictions/ReachLimitChars.js");
/* harmony import */ var _restrictions_NotEmptyRestriction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restrictions/NotEmptyRestriction */ "./frontend/advanced.reporting/restrictions/NotEmptyRestriction.js");
/* harmony import */ var _restrictions_NotCompleteInputmask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restrictions/NotCompleteInputmask */ "./frontend/advanced.reporting/restrictions/NotCompleteInputmask.js");
/* harmony import */ var _restrictions_CustomRulesRestriction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./restrictions/CustomRulesRestriction */ "./frontend/advanced.reporting/restrictions/CustomRulesRestriction.js");
/* harmony import */ var _restrictions_MustContainCharacters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restrictions/MustContainCharacters */ "./frontend/advanced.reporting/restrictions/MustContainCharacters.js");
/* harmony import */ var _restrictions_MustNotContainCharacters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restrictions/MustNotContainCharacters */ "./frontend/advanced.reporting/restrictions/MustNotContainCharacters.js");
/* harmony import */ var _restrictions_MatchRegexp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restrictions/MatchRegexp */ "./frontend/advanced.reporting/restrictions/MatchRegexp.js");
/* harmony import */ var _restrictions_NotMatchRegexp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restrictions/NotMatchRegexp */ "./frontend/advanced.reporting/restrictions/NotMatchRegexp.js");
/* harmony import */ var _restrictions_ServerSideCallback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./restrictions/ServerSideCallback */ "./frontend/advanced.reporting/restrictions/ServerSideCallback.js");
/* harmony import */ var _restrictions_MustEqual__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restrictions/MustEqual */ "./frontend/advanced.reporting/restrictions/MustEqual.js");
/* harmony import */ var _restrictions_TooEarlyTimestamp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./restrictions/TooEarlyTimestamp */ "./frontend/advanced.reporting/restrictions/TooEarlyTimestamp.js");
/* harmony import */ var _restrictions_TooLateTimestamp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./restrictions/TooLateTimestamp */ "./frontend/advanced.reporting/restrictions/TooLateTimestamp.js");

















const {
  applyFilters
} = JetPlugins.hooks;
const {
  isEmpty
} = JetFormBuilderFunctions;
const getAdvancedRules = () => applyFilters('jet.fb.advanced.rules', [_restrictions_MustContainCharacters__WEBPACK_IMPORTED_MODULE_9__["default"], _restrictions_MustNotContainCharacters__WEBPACK_IMPORTED_MODULE_10__["default"], _restrictions_MatchRegexp__WEBPACK_IMPORTED_MODULE_11__["default"], _restrictions_NotMatchRegexp__WEBPACK_IMPORTED_MODULE_12__["default"], _restrictions_ServerSideCallback__WEBPACK_IMPORTED_MODULE_13__["default"], _restrictions_MustEqual__WEBPACK_IMPORTED_MODULE_14__["default"]]);

/**
 * @type {array<CustomBaseRestriction>}
 */
let advancedRules = [];
const getRestrictions = () => applyFilters('jet.fb.restrictions', [_restrictions_TooEarlyTimestamp__WEBPACK_IMPORTED_MODULE_15__["default"], _restrictions_TooLateTimestamp__WEBPACK_IMPORTED_MODULE_16__["default"], _restrictions_ReachLimitNumbers__WEBPACK_IMPORTED_MODULE_0__["default"], _restrictions_NotEnoughNumbers__WEBPACK_IMPORTED_MODULE_1__["default"], _restrictions_NotUrl__WEBPACK_IMPORTED_MODULE_2__["default"], _restrictions_NotEmail__WEBPACK_IMPORTED_MODULE_3__["default"], _restrictions_NotCompleteInputmask__WEBPACK_IMPORTED_MODULE_7__["default"], _restrictions_NotEnoughChars__WEBPACK_IMPORTED_MODULE_4__["default"], _restrictions_ReachLimitChars__WEBPACK_IMPORTED_MODULE_5__["default"], _restrictions_NotEmptyRestriction__WEBPACK_IMPORTED_MODULE_6__["default"], _restrictions_CustomRulesRestriction__WEBPACK_IMPORTED_MODULE_8__["default"]]);

/**
 * @type {Restriction[]}
 */
let restrictions = [];
function getPreparedRules(rules, reporting) {
  const response = [];
  if (!advancedRules.length) {
    advancedRules = getAdvancedRules();
  }
  for (const [index, rule] of Object.entries(rules)) {
    for (const advancedRule of advancedRules) {
      const current = new advancedRule();
      if (rule.type !== current.getSlug()) {
        continue;
      }
      delete rule.type;
      current.setReporting(reporting);
      current.setAttrs({
        ...rule,
        index
      });
      current.onReady();
      response.push(current);
      break;
    }
  }
  return response;
}

/**
 * @param node {HTMLElement}
 */
function getWrapper(node) {
  return node.closest('.jet-form-builder-row');
}

/**
 * @param node {HTMLElement}
 */
function getNodeValidationType(node) {
  var _wrapper$dataset;
  const wrapper = getWrapper(node);
  const {
    validationType = ''
  } = (_wrapper$dataset = wrapper?.dataset) !== null && _wrapper$dataset !== void 0 ? _wrapper$dataset : {};
  return validationType;
}

/**
 * @param input {InputData}
 */
function getInheritValidationType(input) {
  var _window$JetFormsValid, _allForms$formId;
  const formId = input.getSubmit().getFormId();
  const allForms = (_window$JetFormsValid = window?.JetFormsValidation) !== null && _window$JetFormsValid !== void 0 ? _window$JetFormsValid : false;
  if (false === allForms) {
    return '';
  }
  const {
    type = ''
  } = (_allForms$formId = allForms[formId]) !== null && _allForms$formId !== void 0 ? _allForms$formId : {};
  return type;
}
function getValidationMessages(node) {
  var _wrapper$dataset2;
  const wrapper = getWrapper(node);
  const {
    validationMessages = '{}'
  } = (_wrapper$dataset2 = wrapper?.dataset) !== null && _wrapper$dataset2 !== void 0 ? _wrapper$dataset2 : {};
  return JSON.parse(validationMessages);
}

/**
 * @param restriction {Restriction}
 * @param slug {string}
 * @return {string}
 */
function getMessageBySlug(restriction, slug) {
  var _reporting$messages$s, _window$JetFormsValid2, _allMessages$form$get, _messages$slug;
  const {
    reporting
  } = restriction;
  const message = (_reporting$messages$s = reporting.messages[slug]) !== null && _reporting$messages$s !== void 0 ? _reporting$messages$s : '';
  if (message) {
    return message;
  }
  const form = reporting.input.getSubmit();
  const allMessages = (_window$JetFormsValid2 = window?.JetFormsValidation) !== null && _window$JetFormsValid2 !== void 0 ? _window$JetFormsValid2 : false;
  if (false === allMessages) {
    return '';
  }
  const {
    messages
  } = (_allMessages$form$get = allMessages[form.getFormId()]) !== null && _allMessages$form$get !== void 0 ? _allMessages$form$get : {};
  return (_messages$slug = messages[slug]) !== null && _messages$slug !== void 0 ? _messages$slug : '';
}

/**
 * @this {CustomBaseRestriction}
 */
function observeFieldRestriction() {
  if (!this.attrs?.field) {
    return;
  }
  const {
    root
  } = this.reporting.input;
  const input = root.getInput(this.attrs.field);
  input.watch(() => {
    this.attrs.value = input.value.current;

    /**
     * Here we need to reset the `valuePrev` property,
     * because reporting logic remember previous value, which it check.
     *
     * And if .valuePrev === .current.value -> reporting will be skipped
     *
     * @see AdvancedReporting.getErrors
     * @see ReportingInterface.hasChangedValue
     * @type {null}
     */
    this.reporting.valuePrev = null;
    this.reporting.validateOnChange();
  });
  if (!isEmpty(input.value.current)) {
    this.attrs.value = input.value.current;
  }
}

/**
 * @param reporting {ReportingInterface}
 */
function setRestrictions(reporting) {
  if (!restrictions.length) {
    restrictions = getRestrictions();
  }
  for (const restriction of restrictions) {
    const current = new restriction();
    if (!current.isSupported(reporting.getNode(), reporting)) {
      continue;
    }
    current.setReporting(reporting);
    current.onReady();
    reporting.restrictions.push(current);
  }
}

/**
 * You cannot use node.querySelector in this function,
 * because the Repeater Field validation will return
 * an error element from the internal field.
 *
 * @param wrapper {Element}
 * @returns {boolean|Element}
 */
function getErrorNode(wrapper) {
  for (const child of wrapper.children) {
    if (!child.classList.contains('error-message')) {
      continue;
    }
    return child;
  }
  const colEndNode = wrapper.querySelector('.jet-form-builder-col__end');
  if (!colEndNode) {
    return false;
  }
  return getErrorNode(colEndNode);
}


/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js":
/*!*************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/AdvancedRestriction.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./frontend/advanced.reporting/functions.js");

const {
  Restriction,
  CalculatedFormula
} = window.JetFormBuilderAbstract;
function AdvancedRestriction() {
  Restriction.call(this);
  this.message = '';
  this.formula = null;
  this.watchedAttrs = [];
}
AdvancedRestriction.prototype = Object.create(Restriction.prototype);
AdvancedRestriction.prototype.message = '';
/**
 * @type {CalculatedFormula}
 */
AdvancedRestriction.prototype.formula = null;
/**
 * @type {Array}
 */
AdvancedRestriction.prototype.watchedAttrs = [];

/**
 * If returns true -> validation will be
 * started with 1000 ms delay
 *
 * @return {boolean}
 */
AdvancedRestriction.prototype.isServerSide = function () {
  return false;
};
AdvancedRestriction.prototype.getMessage = function () {
  return this.message;
};
/**
 * Here you need to return a prepared message,
 * with processed macros
 *
 * @return {string}
 */
AdvancedRestriction.prototype.getRawMessage = function () {
  return 'Error';
};
AdvancedRestriction.prototype.getMessageBySlug = function (slug) {
  return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getMessageBySlug)(this, slug);
};
AdvancedRestriction.prototype.onReady = function () {
  this.formula = new CalculatedFormula(this.reporting.input);
  this.formula.observe(this.getRawMessage());
  this.formula.setResult = () => {
    this.message = this.formula.calculateString();
  };
  this.formula.setResult();
  if (!this.watchedAttrs.length) {
    return;
  }
  this.reporting.watchAttrs = [...new Set([...this.reporting.watchAttrs, ...this.watchedAttrs])];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedRestriction);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/CustomBaseRestriction.js":
/*!***************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/CustomBaseRestriction.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function CustomBaseRestriction() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.attrs = {};
}
CustomBaseRestriction.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
CustomBaseRestriction.prototype.attrs = {};
CustomBaseRestriction.prototype.setAttrs = function (attrs) {
  this.attrs = attrs;
};
CustomBaseRestriction.prototype.getSlug = function () {
  throw new Error('you need to return slug of rule');
};
CustomBaseRestriction.prototype.getRawMessage = function () {
  var _this$attrs$message;
  return (_this$attrs$message = this.attrs?.message) !== null && _this$attrs$message !== void 0 ? _this$attrs$message : '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomBaseRestriction);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/CustomRulesRestriction.js":
/*!****************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/CustomRulesRestriction.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/advanced.reporting/functions.js");


function CustomRulesRestriction() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, reporting) {
    var _root$dataset$validat;
    const root = node.closest('.jet-form-builder-row');
    const rules = JSON.parse((_root$dataset$validat = root.dataset?.validationRules) !== null && _root$dataset$validat !== void 0 ? _root$dataset$validat : '[]');
    if (!Boolean(rules.length)) {
      return false;
    }
    reporting.restrictions = [...reporting.restrictions, ...(0,_functions__WEBPACK_IMPORTED_MODULE_1__.getPreparedRules)(rules, reporting)];
    return false;
  };
}
CustomRulesRestriction.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomRulesRestriction);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/MatchRegexp.js":
/*!*****************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/MatchRegexp.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomBaseRestriction */ "./frontend/advanced.reporting/restrictions/CustomBaseRestriction.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/advanced.reporting/functions.js");


function MatchRegexp() {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'regexp';
  };
}
MatchRegexp.prototype = Object.create(_CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MatchRegexp.prototype.setAttrs = function (attrs) {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttrs.call(this, attrs);
  _functions__WEBPACK_IMPORTED_MODULE_1__.observeFieldRestriction.call(this);
};
MatchRegexp.prototype.validate = function () {
  const value = this.getValue();
  if (!value) {
    return true;
  }
  const regexp = new RegExp(this.attrs.value, 'g');
  return regexp.test(value);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MatchRegexp);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/MustContainCharacters.js":
/*!***************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/MustContainCharacters.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomBaseRestriction */ "./frontend/advanced.reporting/restrictions/CustomBaseRestriction.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/advanced.reporting/functions.js");


function MustContainCharacters() {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'contain';
  };
}
MustContainCharacters.prototype = Object.create(_CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MustContainCharacters.prototype.setAttrs = function (attrs) {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttrs.call(this, attrs);
  _functions__WEBPACK_IMPORTED_MODULE_1__.observeFieldRestriction.call(this);
};
MustContainCharacters.prototype.validate = function () {
  const value = this.getValue();
  return !value || value.includes(this.attrs.value);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MustContainCharacters);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/MustEqual.js":
/*!***************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/MustEqual.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomBaseRestriction */ "./frontend/advanced.reporting/restrictions/CustomBaseRestriction.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/advanced.reporting/functions.js");


function MustEqual() {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'equal';
  };
  this.validate = function () {
    const value = this.getValue();
    return !value || value === this.attrs.value;
  };
}
MustEqual.prototype = Object.create(_CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MustEqual.prototype.setAttrs = function (attrs) {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttrs.call(this, attrs);
  _functions__WEBPACK_IMPORTED_MODULE_1__.observeFieldRestriction.call(this);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MustEqual);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/MustNotContainCharacters.js":
/*!******************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/MustNotContainCharacters.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MustContainCharacters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MustContainCharacters */ "./frontend/advanced.reporting/restrictions/MustContainCharacters.js");

function MustNotContainCharacters() {
  _MustContainCharacters__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'contain_not';
  };
  this.validate = function () {
    const value = this.getValue();
    return !value || !_MustContainCharacters__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.validate.call(this);
  };
}
MustNotContainCharacters.prototype = Object.create(_MustContainCharacters__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MustNotContainCharacters);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/NotCompleteInputmask.js":
/*!**************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/NotCompleteInputmask.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function NotCompleteInputmask() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, reporting) {
    return node.classList.contains('jet-form-builder__masked-field') && jQuery.fn.inputmask;
  };
  this.validate = function () {
    const value = this.getValue();
    const node = this.reporting.getNode();
    return !value || node.inputmask.isComplete();
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('inputmask');
  };
}
NotCompleteInputmask.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotCompleteInputmask);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/NotEmail.js":
/*!**************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/NotEmail.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function NotEmail() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, reporting) {
    return 'email' === node.type;
  };
  this.validate = function () {
    const value = this.getValue();
    return !value || /^[\w-\.\+]+@([\w-]+\.)+[\w-]{1,6}$/.test(value);
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('email');
  };
}
NotEmail.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEmail);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/NotEmptyRestriction.js":
/*!*************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/NotEmptyRestriction.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

const {
  isEmpty
} = JetFormBuilderFunctions;
function NotEmptyRestriction() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.type = 'required';
}
NotEmptyRestriction.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
NotEmptyRestriction.prototype.isSupported = function (node, reporting) {
  return reporting.input.isRequired;
};
NotEmptyRestriction.prototype.validate = function () {
  const value = this.getValue();
  return !isEmpty(value);
};
NotEmptyRestriction.prototype.getRawMessage = function () {
  return this.getMessageBySlug('empty');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEmptyRestriction);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/NotEnoughChars.js":
/*!********************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/NotEnoughChars.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function NotEnoughChars() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('minLength');
  this.isSupported = function (node, reporting) {
    const {
      minLength = false
    } = reporting.input.attrs;
    return false !== minLength;
  };
  this.validate = function () {
    const length = this.getValue()?.length;
    const {
      minLength
    } = this.reporting.input.attrs;
    return !length || length >= +minLength.value.current;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('char_min');
  };
}
NotEnoughChars.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEnoughChars);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/NotEnoughNumbers.js":
/*!**********************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/NotEnoughNumbers.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function NotEnoughNumbers() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('min');
  this.isSupported = function (node, reporting) {
    const {
      min = false
    } = reporting.input.attrs;
    return false !== min && ['number', 'range'].includes(node.type);
  };
  this.validate = function () {
    const value = this.getValue();
    const {
      min
    } = this.reporting.input.attrs;
    return !value || +value >= +min.value.current;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('number_min');
  };
}
NotEnoughNumbers.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEnoughNumbers);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/NotMatchRegexp.js":
/*!********************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/NotMatchRegexp.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatchRegexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatchRegexp */ "./frontend/advanced.reporting/restrictions/MatchRegexp.js");

function NotMatchRegexp() {
  _MatchRegexp__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'regexp_not';
  };
  this.validate = function () {
    const value = this.getValue();
    return !value || !_MatchRegexp__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.validate.call(this);
  };
}
NotMatchRegexp.prototype = Object.create(_MatchRegexp__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotMatchRegexp);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/NotUrl.js":
/*!************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/NotUrl.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function NotUrl() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, reporting) {
    return 'url' === node.type;
  };
  this.validate = function () {
    const value = this.getValue();
    return !value || /((mailto\:|(news|(ht|f)tp(s?))\:\/\/)\S+)/.test(value);
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('url');
  };
}
NotUrl.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotUrl);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/ReachLimitChars.js":
/*!*********************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/ReachLimitChars.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function ReachLimitChars() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('maxLength');
  this.isSupported = function (node, reporting) {
    const {
      maxLength = false
    } = reporting.input.attrs;
    return false !== maxLength;
  };
  this.validate = function () {
    const value = this.getValue()?.length;
    const {
      maxLength
    } = this.reporting.input.attrs;
    return !value || value <= +maxLength.value.current;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('char_max');
  };
}
ReachLimitChars.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReachLimitChars);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/ReachLimitNumbers.js":
/*!***********************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/ReachLimitNumbers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

function ReachLimitNumbers() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('max');
  this.isSupported = function (node, reporting) {
    const {
      max = false
    } = reporting.input.attrs;
    return false !== max && ['number', 'range'].includes(node.type);
  };
  this.validate = function () {
    const value = this.getValue();
    const {
      max
    } = this.reporting.input.attrs;
    return !value || +value <= +max.value.current;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('number_max');
  };
}
ReachLimitNumbers.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReachLimitNumbers);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/ServerSideCallback.js":
/*!************************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/ServerSideCallback.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomBaseRestriction */ "./frontend/advanced.reporting/restrictions/CustomBaseRestriction.js");

function ServerSideCallback() {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  const {
    apiFetch
  } = wp;
  this.getSlug = function () {
    return 'ssr';
  };
  this.isServerSide = function () {
    return true;
  };
  this.validatePromise = async function () {
    const current = this.getValue();
    if (!current) {
      return Promise.resolve();
    }
    const body = this.getFormData();
    const response = await apiFetch({
      path: '/jet-form-builder/v1/validate-field',
      method: 'POST',
      body
    });
    return response?.result ? Promise.resolve() : Promise.reject();
  };
  this.getFormData = function () {
    const {
      input
    } = this.reporting;
    const {
      rootNode
    } = input.getRoot();
    const formData = new FormData(rootNode);
    formData.delete('_wpnonce');
    formData.set('_jfb_validation_rule_index', this.attrs.index);
    for (const pathElement of input.path) {
      formData.append('_jfb_validation_path[]', pathElement);
    }
    return formData;
  };
}
ServerSideCallback.prototype = Object.create(_CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerSideCallback);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/TooEarlyTimestamp.js":
/*!***********************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/TooEarlyTimestamp.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

const {
  getTimestamp
} = JetFormBuilderFunctions;
function TooEarlyTimestamp() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('min');
  this.isSupported = function (node, reporting) {
    const {
      min = false
    } = reporting.input.attrs;
    return false !== min && ['time', 'date', 'datetime-local'].includes(node.type);
  };
  this.validate = function () {
    const value = this.getValue();
    if (!value) {
      return true;
    }
    const {
      min
    } = this.reporting.input.attrs;
    const {
      time
    } = getTimestamp(value);
    const {
      time: minTime
    } = getTimestamp(min.value.current);
    return time >= minTime;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('date_min');
  };
}
TooEarlyTimestamp.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooEarlyTimestamp);

/***/ }),

/***/ "./frontend/advanced.reporting/restrictions/TooLateTimestamp.js":
/*!**********************************************************************!*\
  !*** ./frontend/advanced.reporting/restrictions/TooLateTimestamp.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");

const {
  getTimestamp
} = JetFormBuilderFunctions;
function TooLateTimestamp() {
  _AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('max');
  this.isSupported = function (node, reporting) {
    const {
      max = false
    } = reporting.input.attrs;
    return false !== max && ['time', 'date', 'datetime-local'].includes(node.type);
  };
  this.validate = function () {
    const value = this.getValue();
    if (!value) {
      return true;
    }
    const {
      max
    } = this.reporting.input.attrs;
    const {
      time
    } = getTimestamp(value);
    const {
      time: maxTime
    } = getTimestamp(max.value.current);
    return time <= maxTime;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('date_max');
  };
}
TooLateTimestamp.prototype = Object.create(_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooLateTimestamp);

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
/*!*********************************************!*\
  !*** ./frontend/advanced.reporting/main.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdvancedReporting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedReporting */ "./frontend/advanced.reporting/AdvancedReporting.js");
/* harmony import */ var _restrictions_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restrictions/AdvancedRestriction */ "./frontend/advanced.reporting/restrictions/AdvancedRestriction.js");
/* harmony import */ var _restrictions_NotEmptyRestriction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restrictions/NotEmptyRestriction */ "./frontend/advanced.reporting/restrictions/NotEmptyRestriction.js");
var _window$JetFormBuilde;



const {
  addFilter,
  addAction
} = JetPlugins.hooks;
addAction('jet.fb.observe.after', 'jet-form-builder/observe-dynamic-attrs',
/**
 * @param observable {Observable}
 */
function (observable) {
  observable.getInputs().forEach(input => {
    if (!(input.reporting instanceof _AdvancedReporting__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      return;
    }
    input.reporting.observeAttrs();
  });
}, 11);
addFilter('jet.fb.reporting', 'jet-form-builder/advanced-reporting', function (reporting) {
  reporting = [_AdvancedReporting__WEBPACK_IMPORTED_MODULE_0__["default"], ...reporting];
  return reporting;
});
window.JetFormBuilderAbstract = {
  ...((_window$JetFormBuilde = window.JetFormBuilderAbstract) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}),
  AdvancedRestriction: _restrictions_AdvancedRestriction__WEBPACK_IMPORTED_MODULE_1__["default"],
  NotEmptyRestriction: _restrictions_NotEmptyRestriction__WEBPACK_IMPORTED_MODULE_2__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvQWR2YW5jZWRSZXBvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL0FkdmFuY2VkUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9DdXN0b21CYXNlUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9DdXN0b21SdWxlc1Jlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTWF0Y2hSZWdleHAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0Q29udGFpbkNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0RXF1YWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RDb21wbGV0ZUlucHV0bWFzay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVtYWlsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW1wdHlSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVub3VnaENoYXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW5vdWdoTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdE1hdGNoUmVnZXhwLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90VXJsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdENoYXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdE51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9TZXJ2ZXJTaWRlQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ub29FYXJseVRpbWVzdGFtcC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Rvb0xhdGVUaW1lc3RhbXAuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRnZXRFcnJvck5vZGUsXHJcblx0Z2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlLFxyXG5cdGdldE5vZGVWYWxpZGF0aW9uVHlwZSxcclxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZXMsXHJcblx0Z2V0V3JhcHBlcixcclxuXHRzZXRSZXN0cmljdGlvbnMsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFJlcG9ydGluZ0ludGVyZmFjZSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWxsUmVqZWN0ZWQsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0FkdmFuY2VkUmVzdHJpY3Rpb259IHJlc3RyaWN0aW9uc1xyXG4gKlxyXG4gKiBAdGhpcyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEFkdmFuY2VkUmVwb3J0aW5nKCkge1xyXG5cdFJlcG9ydGluZ0ludGVyZmFjZS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMudHlwZSAgICAgICAgICAgPSAnaW5oZXJpdCc7XHJcblx0dGhpcy5tZXNzYWdlcyAgICAgICA9IHt9O1xyXG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xyXG5cclxuXHQvKipcclxuXHQgKiBDb21wdXRlZCBwcm9wZXJ0eSB3aGljaCBjb250YWluIGFsbCBhdHRyc1xyXG5cdCAqIGZvciBhbGwgc3VwcG9ydGVkIHJlc3RyaWN0aW9uc1xyXG5cdCAqXHJcblx0ICogQHNlZSBBZHZhbmNlZFJlc3RyaWN0aW9uLm9uUmVhZHlcclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtTdHJpbmdbXX1cclxuXHQgKi9cclxuXHR0aGlzLndhdGNoQXR0cnMgPSBbXTtcclxuXHJcblx0dGhpcy5xdWV1ZSA9IFtdO1xyXG59XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlICk7XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmlzUHJvY2VzcyAgICAgID0gbnVsbDtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnF1ZXVlICAgICAgICAgID0gW107XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuc2V0UmVzdHJpY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdHNldFJlc3RyaWN0aW9ucyggdGhpcyApO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dCApIHtcclxuXHR0aGlzLnR5cGUgPSBnZXROb2RlVmFsaWRhdGlvblR5cGUoIG5vZGUgKTtcclxuXHJcblx0Y29uc3QgaW5oZXJpdCA9ICdpbmhlcml0JyA9PT0gdGhpcy50eXBlXHJcblx0ICAgICAgICAgICAgICAgID8gZ2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlKCBpbnB1dCApXHJcblx0ICAgICAgICAgICAgICAgIDogdGhpcy50eXBlO1xyXG5cclxuXHRyZXR1cm4gISFpbmhlcml0Py5sZW5ndGg7XHJcbn07XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcyApIHtcclxuXHRpZiAoIHRoaXMuaGFzU2VydmVyU2lkZSApIHtcclxuXHRcdHRoaXMuaW5wdXQubG9hZGluZy5zdGFydCgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZXJyb3JzICAgPSBhd2FpdCBhbGxSZWplY3RlZCggcHJvbWlzZXMgKTtcclxuXHR0aGlzLnZhbHVlUHJldiA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHJcblx0aWYgKCB0aGlzLmhhc1NlcnZlclNpZGUgKSB7XHJcblx0XHR0aGlzLmlucHV0LmxvYWRpbmcuZW5kKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZXJyb3JzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB2YWxpZGF0aW9uRXJyb3JzIHtBZHZhbmNlZFJlc3RyaWN0aW9uW118UmVzdHJpY3Rpb25bXX1cclxuICovXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5yZXBvcnRSYXcgPSBmdW5jdGlvbiAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XHJcblx0bGV0IG1lc3NhZ2UgPSAnJztcclxuXHJcblx0Zm9yICggY29uc3QgdmFsaWRhdGlvbkVycm9yIG9mIHZhbGlkYXRpb25FcnJvcnMgKSB7XHJcblx0XHRtZXNzYWdlID0gdmFsaWRhdGlvbkVycm9yLmdldE1lc3NhZ2UoKTtcclxuXHJcblx0XHRpZiAoIG1lc3NhZ2U/Lmxlbmd0aCApIHtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoICFtZXNzYWdlICkge1xyXG5cdFx0dGhpcy5jbGVhclJlcG9ydCgpO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMuaW5zZXJ0RXJyb3IoIG1lc3NhZ2UgKTtcclxufTtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHR0aGlzLm1lc3NhZ2VzID0gZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKCBpbnB1dC5ub2Rlc1sgMCBdICk7XHJcblxyXG5cdFJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcclxufTtcclxuLyoqXHJcbiAqIEBzaW5jZSAzLjAuNSBJbnRyb2R1Y2VkXHJcbiAqL1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUub2JzZXJ2ZUF0dHJzID0gZnVuY3Rpb24gKCkge1xyXG5cdGZvciAoIGNvbnN0IHdhdGNoQXR0ciBvZiB0aGlzLndhdGNoQXR0cnMgKSB7XHJcblx0XHRpZiAoICF0aGlzLmlucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCB3YXRjaEF0dHIgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtCYXNlSHRtbEF0dHJ9XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGF0dHIgPSB0aGlzLmlucHV0LmF0dHJzWyB3YXRjaEF0dHIgXTtcclxuXHJcblx0XHRhdHRyLnZhbHVlLndhdGNoKCAoKSA9PiB7XHJcblx0XHRcdHRoaXMudmFsdWVQcmV2ID0gbnVsbDtcclxuXHRcdFx0dGhpcy52YWxpZGF0ZU9uQmx1cigpO1xyXG5cdFx0fSApO1xyXG5cdH1cclxufTtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNsZWFyUmVwb3J0ID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGlubmVyID0gKCkgPT4ge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XHJcblxyXG5cdFx0aWYgKCAhbm9kZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpZWxkLWhhcy1lcnJvcicgKTtcclxuXHJcblx0XHRjb25zdCBlcnJvciA9IGdldEVycm9yTm9kZSggbm9kZSApO1xyXG5cclxuXHRcdGlmICggIWVycm9yICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0ZXJyb3IucmVtb3ZlKCk7XHJcblx0fTtcclxuXHRpbm5lcigpO1xyXG5cdHRoaXMubWFrZVZhbGlkKCk7XHJcbn07XHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pbnNlcnRFcnJvciA9IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcclxuXHRjb25zdCBpbm5lciA9ICgpID0+IHtcclxuXHRcdGNvbnN0IG5vZGUgID0gZ2V0V3JhcHBlciggdGhpcy5nZXROb2RlKCkgKTtcclxuXHRcdGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvciggbm9kZSwgbWVzc2FnZSApO1xyXG5cclxuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggJ2ZpZWxkLWhhcy1lcnJvcicgKTtcclxuXHJcblx0XHRpZiAoIGVycm9yLmlzQ29ubmVjdGVkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaXQgY2FuIGJlIG9uIGZpZWxkc19sYXlvdXQgPT09ICdyb3cnXHJcblx0XHRjb25zdCBjb2xFbmQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlci1jb2xfX2VuZCcgKTtcclxuXHJcblx0XHRpZiAoIGNvbEVuZCApIHtcclxuXHRcdFx0Y29sRW5kLmFwcGVuZENoaWxkKCBlcnJvciApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoIGVycm9yICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRpbm5lcigpO1xyXG5cdHRoaXMubWFrZUludmFsaWQoKTtcclxufTtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKFxyXG5cdG5vZGUsIG1lc3NhZ2UgKSB7XHJcblx0Y29uc3QgZXJyb3IgICAgID0gZ2V0RXJyb3JOb2RlKCBub2RlICk7XHJcblx0Y29uc3QgaW5wdXROb2RlID0gdGhpcy5nZXROb2RlKCk7XHJcblxyXG5cdGlmICggZXJyb3IgKSB7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG5cclxuXHRcdHJldHVybiBlcnJvcjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcblxyXG5cdGRpdi5jbGFzc0xpc3QuYWRkKCAnZXJyb3ItbWVzc2FnZScgKTtcclxuXHRkaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuXHRkaXYuaWQgICAgICAgID0gaW5wdXROb2RlLmlkICsgJ19fZXJyb3InO1xyXG5cclxuXHRyZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLm1ha2VJbnZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHdyYXBwZXIgICA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XHJcblx0Y29uc3QgZXJyb3JOb2RlID0gZ2V0RXJyb3JOb2RlKCB3cmFwcGVyICk7XHJcblxyXG5cdHRoaXMuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZSggJ2FyaWEtaW52YWxpZCcsICd0cnVlJyApO1xyXG5cdHRoaXMuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZShcclxuXHRcdCdhcmlhLWRlc2NyaWJlZGJ5JyxcclxuXHRcdGVycm9yTm9kZT8uaWQgPz8gZmFsc2UsXHJcblx0KTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5tYWtlVmFsaWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5nZXROb2RlKCkucmVtb3ZlQXR0cmlidXRlKCAnYXJpYS1pbnZhbGlkJyApO1xyXG5cdHRoaXMuZ2V0Tm9kZSgpLnJlbW92ZUF0dHJpYnV0ZSggJ2FyaWEtZGVzY3JpYmVkYnknICk7XHJcbn07XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICggYWRkVG9RdWV1ZSA9IGZhbHNlICkge1xyXG5cdGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2V0U2lsZW5jZSggZmFsc2UgKTtcclxuXHJcblx0XHR0aGlzLnZhbGlkYXRlKCkuXHJcblx0XHRcdHRoZW4oICgpID0+IHt9ICkuXHJcblx0XHRcdGNhdGNoKCAoKSA9PiB7fSApLlxyXG5cdFx0XHRmaW5hbGx5KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc1Byb2Nlc3MgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRjb25zdCBxdWV1ZSA9IFsgLi4udGhpcy5xdWV1ZSBdO1xyXG5cdFx0XHRcdHRoaXMucXVldWUgID0gW107XHJcblxyXG5cdFx0XHRcdGlmICggIXF1ZXVlLmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMudmFsdWVQcmV2ID0gbnVsbDtcclxuXHRcdFx0XHRxdWV1ZS5mb3JFYWNoKCBjdXJyZW50ID0+IGN1cnJlbnQoKSApO1xyXG5cdFx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE3NjZcclxuXHQgKi9cclxuXHRpZiAoIGFkZFRvUXVldWUgJiYgdGhpcy5pc1Byb2Nlc3MgKSB7XHJcblx0XHR0aGlzLnF1ZXVlID0gWyBjYWxsYmFjayBdO1xyXG5cdH1cclxuXHJcblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNQcm9jZXNzID0gdHJ1ZTtcclxuXHJcblx0Y2FsbGJhY2soKTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS52YWxpZGF0ZU9uQmx1ciA9IGZ1bmN0aW9uICgpIHtcclxuXHQvKipcclxuXHQgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTc2NlxyXG5cdCAqL1xyXG5cdGlmICggdGhpcy5pc1Byb2Nlc3MgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLmlzUHJvY2VzcyAgICAgID0gdHJ1ZTtcclxuXHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNldFNpbGVuY2UoIGZhbHNlICk7XHJcblxyXG5cdHRoaXMudmFsaWRhdGUoKS5cclxuXHRcdHRoZW4oICgpID0+IHt9ICkuXHJcblx0XHRjYXRjaCggKCkgPT4ge30gKS5cclxuXHRcdGZpbmFsbHkoICgpID0+IHtcclxuXHRcdFx0dGhpcy5za2lwU2VydmVyU2lkZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IG51bGw7XHJcblx0XHR9ICk7XHJcbn07XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUudmFsaWRhdGVPbkNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGlmICggdGhpcy5pc1Byb2Nlc3MgKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblx0fVxyXG5cdHRoaXMuaXNQcm9jZXNzICAgICAgPSB0cnVlO1xyXG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSBmYWxzZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuXHRcdHRoaXMudmFsaWRhdGUoKS50aGVuKCByZXNvbHZlICkuY2F0Y2goIHJlamVjdCApLmZpbmFsbHkoXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmhhc1NlcnZlclNpZGUgID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IG51bGw7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gcmVzdHJpY3Rpb24ge0FkdmFuY2VkUmVzdHJpY3Rpb258UmVzdHJpY3Rpb259XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuY2FuUHJvY2Vzc1Jlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCByZXN0cmljdGlvbiApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Ly8gYWxsb3cgYWxsXHJcblx0XHQhdGhpcy5za2lwU2VydmVyU2lkZSB8fFxyXG5cdFx0Ly8gb3Igb25seSBub3QtU2VydmVyU2lkZVxyXG5cdFx0IXJlc3RyaWN0aW9uLmlzU2VydmVyU2lkZSgpXHJcblx0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gcmVzdHJpY3Rpb24ge0FkdmFuY2VkUmVzdHJpY3Rpb258UmVzdHJpY3Rpb259XHJcbiAqL1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuYmVmb3JlUHJvY2Vzc1Jlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCByZXN0cmljdGlvbiApIHtcclxuXHR0aGlzLmhhc1NlcnZlclNpZGUgPSByZXN0cmljdGlvbi5pc1NlcnZlclNpZGUoKSA/IHRydWUgOiB0aGlzLmhhc1NlcnZlclNpZGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJlcG9ydGluZzsiLCJpbXBvcnQgUmVhY2hMaW1pdE51bWJlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdE51bWJlcnMnO1xyXG5pbXBvcnQgTm90RW5vdWdoTnVtYmVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbm91Z2hOdW1iZXJzJztcclxuaW1wb3J0IE5vdFVybCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RVcmwnO1xyXG5pbXBvcnQgTm90RW1haWwgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW1haWwnO1xyXG5pbXBvcnQgTm90RW5vdWdoQ2hhcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW5vdWdoQ2hhcnMnO1xyXG5pbXBvcnQgUmVhY2hMaW1pdENoYXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlYWNoTGltaXRDaGFycyc7XHJcbmltcG9ydCBOb3RFbXB0eVJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVtcHR5UmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgTm90Q29tcGxldGVJbnB1dG1hc2sgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90Q29tcGxldGVJbnB1dG1hc2snO1xyXG5pbXBvcnQgQ3VzdG9tUnVsZXNSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9DdXN0b21SdWxlc1Jlc3RyaWN0aW9uJztcclxuaW1wb3J0IE11c3RDb250YWluQ2hhcmFjdGVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NdXN0Q29udGFpbkNoYXJhY3RlcnMnO1xyXG5pbXBvcnQgTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL011c3ROb3RDb250YWluQ2hhcmFjdGVycyc7XHJcbmltcG9ydCBNYXRjaFJlZ2V4cCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NYXRjaFJlZ2V4cCc7XHJcbmltcG9ydCBOb3RNYXRjaFJlZ2V4cCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RNYXRjaFJlZ2V4cCc7XHJcbmltcG9ydCBTZXJ2ZXJTaWRlQ2FsbGJhY2sgZnJvbSAnLi9yZXN0cmljdGlvbnMvU2VydmVyU2lkZUNhbGxiYWNrJztcclxuaW1wb3J0IE11c3RFcXVhbCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NdXN0RXF1YWwnO1xyXG5pbXBvcnQgVG9vRWFybHlUaW1lc3RhbXAgZnJvbSAnLi9yZXN0cmljdGlvbnMvVG9vRWFybHlUaW1lc3RhbXAnO1xyXG5pbXBvcnQgVG9vTGF0ZVRpbWVzdGFtcCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ub29MYXRlVGltZXN0YW1wJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnMsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGlzRW1wdHksXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmNvbnN0IGdldEFkdmFuY2VkUnVsZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5hZHZhbmNlZC5ydWxlcycsXHJcblx0W1xyXG5cdFx0TXVzdENvbnRhaW5DaGFyYWN0ZXJzLFxyXG5cdFx0TXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzLFxyXG5cdFx0TWF0Y2hSZWdleHAsXHJcblx0XHROb3RNYXRjaFJlZ2V4cCxcclxuXHRcdFNlcnZlclNpZGVDYWxsYmFjayxcclxuXHRcdE11c3RFcXVhbCxcclxuXHRdLFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHthcnJheTxDdXN0b21CYXNlUmVzdHJpY3Rpb24+fVxyXG4gKi9cclxubGV0IGFkdmFuY2VkUnVsZXMgPSBbXTtcclxuXHJcbmNvbnN0IGdldFJlc3RyaWN0aW9ucyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXHJcblx0W1xyXG5cdFx0VG9vRWFybHlUaW1lc3RhbXAsXHJcblx0XHRUb29MYXRlVGltZXN0YW1wLFxyXG5cdFx0UmVhY2hMaW1pdE51bWJlcnMsXHJcblx0XHROb3RFbm91Z2hOdW1iZXJzLFxyXG5cdFx0Tm90VXJsLFxyXG5cdFx0Tm90RW1haWwsXHJcblx0XHROb3RDb21wbGV0ZUlucHV0bWFzayxcclxuXHRcdE5vdEVub3VnaENoYXJzLFxyXG5cdFx0UmVhY2hMaW1pdENoYXJzLFxyXG5cdFx0Tm90RW1wdHlSZXN0cmljdGlvbixcclxuXHRcdEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24sXHJcblx0XSxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7UmVzdHJpY3Rpb25bXX1cclxuICovXHJcbmxldCByZXN0cmljdGlvbnMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldFByZXBhcmVkUnVsZXMoIHJ1bGVzLCByZXBvcnRpbmcgKSB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBbXTtcclxuXHJcblx0aWYgKCAhYWR2YW5jZWRSdWxlcy5sZW5ndGggKSB7XHJcblx0XHRhZHZhbmNlZFJ1bGVzID0gZ2V0QWR2YW5jZWRSdWxlcygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgWyBpbmRleCwgcnVsZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBydWxlcyApICkge1xyXG5cdFx0Zm9yICggY29uc3QgYWR2YW5jZWRSdWxlIG9mIGFkdmFuY2VkUnVsZXMgKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgYWR2YW5jZWRSdWxlKCk7XHJcblxyXG5cdFx0XHRpZiAoIHJ1bGUudHlwZSAhPT0gY3VycmVudC5nZXRTbHVnKCkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVsZXRlIHJ1bGUudHlwZTtcclxuXHJcblx0XHRcdGN1cnJlbnQuc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKTtcclxuXHRcdFx0Y3VycmVudC5zZXRBdHRycyggeyAuLi5ydWxlLCBpbmRleCB9ICk7XHJcblx0XHRcdGN1cnJlbnQub25SZWFkeSgpO1xyXG5cclxuXHRcdFx0cmVzcG9uc2UucHVzaCggY3VycmVudCApO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFdyYXBwZXIoIG5vZGUgKSB7XHJcblx0cmV0dXJuIG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldE5vZGVWYWxpZGF0aW9uVHlwZSggbm9kZSApIHtcclxuXHRjb25zdCB3cmFwcGVyICAgICAgICAgICAgICAgICA9IGdldFdyYXBwZXIoIG5vZGUgKTtcclxuXHRjb25zdCB7IHZhbGlkYXRpb25UeXBlID0gJycgfSA9IHdyYXBwZXI/LmRhdGFzZXQgPz8ge307XHJcblxyXG5cdHJldHVybiB2YWxpZGF0aW9uVHlwZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlKCBpbnB1dCApIHtcclxuXHRjb25zdCBmb3JtSWQgICA9IGlucHV0LmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xyXG5cdGNvbnN0IGFsbEZvcm1zID0gd2luZG93Py5KZXRGb3Jtc1ZhbGlkYXRpb24gPz8gZmFsc2U7XHJcblxyXG5cdGlmICggZmFsc2UgPT09IGFsbEZvcm1zICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgeyB0eXBlID0gJycgfSA9IGFsbEZvcm1zWyBmb3JtSWQgXSA/PyB7fTtcclxuXHJcblx0cmV0dXJuIHR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXNzYWdlcyggbm9kZSApIHtcclxuXHRjb25zdCB3cmFwcGVyICAgICAgICAgICAgICAgICAgICAgICA9IGdldFdyYXBwZXIoIG5vZGUgKTtcclxuXHRjb25zdCB7IHZhbGlkYXRpb25NZXNzYWdlcyA9ICd7fScgfSA9IHdyYXBwZXI/LmRhdGFzZXQgPz8ge307XHJcblxyXG5cdHJldHVybiBKU09OLnBhcnNlKCB2YWxpZGF0aW9uTWVzc2FnZXMgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSByZXN0cmljdGlvbiB7UmVzdHJpY3Rpb259XHJcbiAqIEBwYXJhbSBzbHVnIHtzdHJpbmd9XHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldE1lc3NhZ2VCeVNsdWcoIHJlc3RyaWN0aW9uLCBzbHVnICkge1xyXG5cdGNvbnN0IHsgcmVwb3J0aW5nIH0gPSByZXN0cmljdGlvbjtcclxuXHRjb25zdCBtZXNzYWdlICAgICAgID0gcmVwb3J0aW5nLm1lc3NhZ2VzWyBzbHVnIF0gPz8gJyc7XHJcblxyXG5cdGlmICggbWVzc2FnZSApIHtcclxuXHRcdHJldHVybiBtZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZm9ybSAgICAgICAgPSByZXBvcnRpbmcuaW5wdXQuZ2V0U3VibWl0KCk7XHJcblx0Y29uc3QgYWxsTWVzc2FnZXMgPSB3aW5kb3c/LkpldEZvcm1zVmFsaWRhdGlvbiA/PyBmYWxzZTtcclxuXHJcblx0aWYgKCBmYWxzZSA9PT0gYWxsTWVzc2FnZXMgKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRjb25zdCB7IG1lc3NhZ2VzIH0gPSBhbGxNZXNzYWdlc1sgZm9ybS5nZXRGb3JtSWQoKSBdID8/IHt9O1xyXG5cclxuXHRyZXR1cm4gbWVzc2FnZXNbIHNsdWcgXSA/PyAnJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aGlzIHtDdXN0b21CYXNlUmVzdHJpY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZlRmllbGRSZXN0cmljdGlvbigpIHtcclxuXHRpZiAoICF0aGlzLmF0dHJzPy5maWVsZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3QgeyByb290IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dDtcclxuXHRjb25zdCBpbnB1dCAgICA9IHJvb3QuZ2V0SW5wdXQoIHRoaXMuYXR0cnMuZmllbGQgKTtcclxuXHJcblx0aW5wdXQud2F0Y2goICgpID0+IHtcclxuXHRcdHRoaXMuYXR0cnMudmFsdWUgPSBpbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGVyZSB3ZSBuZWVkIHRvIHJlc2V0IHRoZSBgdmFsdWVQcmV2YCBwcm9wZXJ0eSxcclxuXHRcdCAqIGJlY2F1c2UgcmVwb3J0aW5nIGxvZ2ljIHJlbWVtYmVyIHByZXZpb3VzIHZhbHVlLCB3aGljaCBpdCBjaGVjay5cclxuXHRcdCAqXHJcblx0XHQgKiBBbmQgaWYgLnZhbHVlUHJldiA9PT0gLmN1cnJlbnQudmFsdWUgLT4gcmVwb3J0aW5nIHdpbGwgYmUgc2tpcHBlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBzZWUgQWR2YW5jZWRSZXBvcnRpbmcuZ2V0RXJyb3JzXHJcblx0XHQgKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5oYXNDaGFuZ2VkVmFsdWVcclxuXHRcdCAqIEB0eXBlIHtudWxsfVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlcG9ydGluZy52YWx1ZVByZXYgPSBudWxsO1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZSgpO1xyXG5cdH0gKTtcclxuXHJcblx0aWYgKCAhaXNFbXB0eSggaW5wdXQudmFsdWUuY3VycmVudCApICkge1xyXG5cdFx0dGhpcy5hdHRycy52YWx1ZSA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHJlcG9ydGluZyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0UmVzdHJpY3Rpb25zKCByZXBvcnRpbmcgKSB7XHJcblx0aWYgKCAhcmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdHJlc3RyaWN0aW9ucyA9IGdldFJlc3RyaWN0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgcmVzdHJpY3Rpb25zICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXN0cmljdGlvbigpO1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0IWN1cnJlbnQuaXNTdXBwb3J0ZWQoIHJlcG9ydGluZy5nZXROb2RlKCksIHJlcG9ydGluZyApXHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjdXJyZW50LnNldFJlcG9ydGluZyggcmVwb3J0aW5nICk7XHJcblx0XHRjdXJyZW50Lm9uUmVhZHkoKTtcclxuXHJcblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLnB1c2goIGN1cnJlbnQgKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZb3UgY2Fubm90IHVzZSBub2RlLnF1ZXJ5U2VsZWN0b3IgaW4gdGhpcyBmdW5jdGlvbixcclxuICogYmVjYXVzZSB0aGUgUmVwZWF0ZXIgRmllbGQgdmFsaWRhdGlvbiB3aWxsIHJldHVyblxyXG4gKiBhbiBlcnJvciBlbGVtZW50IGZyb20gdGhlIGludGVybmFsIGZpZWxkLlxyXG4gKlxyXG4gKiBAcGFyYW0gd3JhcHBlciB7RWxlbWVudH1cclxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEVycm9yTm9kZSggd3JhcHBlciApIHtcclxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiB3cmFwcGVyLmNoaWxkcmVuICkge1xyXG5cdFx0aWYgKCAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZXJyb3ItbWVzc2FnZScgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2hpbGQ7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb2xFbmROb2RlID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWNvbF9fZW5kJyxcclxuXHQpO1xyXG5cclxuXHRpZiAoICFjb2xFbmROb2RlICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdldEVycm9yTm9kZSggY29sRW5kTm9kZSApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGdldE5vZGVWYWxpZGF0aW9uVHlwZSxcclxuXHRnZXRJbmhlcml0VmFsaWRhdGlvblR5cGUsXHJcblx0Z2V0TWVzc2FnZUJ5U2x1ZyxcclxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZXMsXHJcblx0Z2V0UHJlcGFyZWRSdWxlcyxcclxuXHRzZXRSZXN0cmljdGlvbnMsXHJcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24sXHJcblx0Z2V0V3JhcHBlcixcclxuXHRnZXRFcnJvck5vZGUsXHJcbn07IiwiaW1wb3J0IHsgZ2V0TWVzc2FnZUJ5U2x1ZyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUmVzdHJpY3Rpb24sXHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIEFkdmFuY2VkUmVzdHJpY3Rpb24oKSB7XHJcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLm1lc3NhZ2UgICAgICA9ICcnO1xyXG5cdHRoaXMuZm9ybXVsYSAgICAgID0gbnVsbDtcclxuXHR0aGlzLndhdGNoZWRBdHRycyA9IFtdO1xyXG59XHJcblxyXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUubWVzc2FnZSA9ICcnO1xyXG4vKipcclxuICogQHR5cGUge0NhbGN1bGF0ZWRGb3JtdWxhfVxyXG4gKi9cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZm9ybXVsYSA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7QXJyYXl9XHJcbiAqL1xyXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS53YXRjaGVkQXR0cnMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBJZiByZXR1cm5zIHRydWUgLT4gdmFsaWRhdGlvbiB3aWxsIGJlXHJcbiAqIHN0YXJ0ZWQgd2l0aCAxMDAwIG1zIGRlbGF5XHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1NlcnZlclNpZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5tZXNzYWdlO1xyXG59O1xyXG4vKipcclxuICogSGVyZSB5b3UgbmVlZCB0byByZXR1cm4gYSBwcmVwYXJlZCBtZXNzYWdlLFxyXG4gKiB3aXRoIHByb2Nlc3NlZCBtYWNyb3NcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gJ0Vycm9yJztcclxufTtcclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0TWVzc2FnZUJ5U2x1ZyA9IGZ1bmN0aW9uICggc2x1ZyApIHtcclxuXHRyZXR1cm4gZ2V0TWVzc2FnZUJ5U2x1ZyggdGhpcywgc2x1ZyApO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUub25SZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMucmVwb3J0aW5nLmlucHV0ICk7XHJcblxyXG5cdHRoaXMuZm9ybXVsYS5vYnNlcnZlKCB0aGlzLmdldFJhd01lc3NhZ2UoKSApO1xyXG5cdHRoaXMuZm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLmZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XHJcblx0fTtcclxuXHR0aGlzLmZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblxyXG5cdGlmICggIXRoaXMud2F0Y2hlZEF0dHJzLmxlbmd0aCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVwb3J0aW5nLndhdGNoQXR0cnMgPSBbXHJcblx0XHQuLi5uZXcgU2V0KCBbXHJcblx0XHRcdC4uLnRoaXMucmVwb3J0aW5nLndhdGNoQXR0cnMsXHJcblx0XHRcdC4uLnRoaXMud2F0Y2hlZEF0dHJzLFxyXG5cdFx0XSApLFxyXG5cdF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJlc3RyaWN0aW9uO1xyXG5cclxuXHJcbiIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBDdXN0b21CYXNlUmVzdHJpY3Rpb24oKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuYXR0cnMgPSB7fTtcclxufVxyXG5cclxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmF0dHJzICAgICAgICAgPSB7fTtcclxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRBdHRycyAgICAgID0gZnVuY3Rpb24gKCBhdHRycyApIHtcclxuXHR0aGlzLmF0dHJzID0gYXR0cnM7XHJcbn07XHJcbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0U2x1ZyAgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoICd5b3UgbmVlZCB0byByZXR1cm4gc2x1ZyBvZiBydWxlJyApO1xyXG59O1xyXG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuYXR0cnM/Lm1lc3NhZ2UgPz8gJyc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21CYXNlUmVzdHJpY3Rpb247IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmltcG9ydCB7IGdldFByZXBhcmVkUnVsZXMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQ3VzdG9tUnVsZXNSZXN0cmljdGlvbigpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0Y29uc3Qgcm9vdCAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XHJcblx0XHRjb25zdCBydWxlcyA9IEpTT04ucGFyc2UoIHJvb3QuZGF0YXNldD8udmFsaWRhdGlvblJ1bGVzID8/ICdbXScgKTtcclxuXHJcblx0XHRpZiAoICFCb29sZWFuKCBydWxlcy5sZW5ndGggKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlcG9ydGluZy5yZXN0cmljdGlvbnMgPSBbXHJcblx0XHRcdC4uLnJlcG9ydGluZy5yZXN0cmljdGlvbnMsXHJcblx0XHRcdC4uLmdldFByZXBhcmVkUnVsZXMoIHJ1bGVzLCByZXBvcnRpbmcgKSxcclxuXHRcdF07XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcbn1cclxuXHJcbkN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb247IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XHJcbmltcG9ydCB7IG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIE1hdGNoUmVnZXhwKCkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAncmVnZXhwJztcclxuXHR9O1xyXG5cclxufVxyXG5cclxuTWF0Y2hSZWdleHAucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5NYXRjaFJlZ2V4cC5wcm90b3R5cGUuc2V0QXR0cnMgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMuY2FsbCggdGhpcywgYXR0cnMgKTtcclxuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcbn07XHJcbk1hdGNoUmVnZXhwLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcblx0aWYgKCAhdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Y29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCggdGhpcy5hdHRycy52YWx1ZSwgJ2cnICk7XHJcblxyXG5cdHJldHVybiByZWdleHAudGVzdCggdmFsdWUgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGNoUmVnZXhwOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgeyBvYnNlcnZlRmllbGRSZXN0cmljdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBNdXN0Q29udGFpbkNoYXJhY3RlcnMoKSB7XHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnY29udGFpbic7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcbk11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFxyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUsXHJcbik7XHJcbk11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUuc2V0QXR0cnMgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMuY2FsbCggdGhpcywgYXR0cnMgKTtcclxuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcbn07XHJcblxyXG5NdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlLmluY2x1ZGVzKCB0aGlzLmF0dHJzLnZhbHVlICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdXN0Q29udGFpbkNoYXJhY3RlcnM7IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XHJcbmltcG9ydCB7IG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIE11c3RFcXVhbCgpIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdlcXVhbCc7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCB2YWx1ZSA9PT0gdGhpcy5hdHRycy52YWx1ZTtcclxuXHR9O1xyXG59XHJcblxyXG5NdXN0RXF1YWwucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5NdXN0RXF1YWwucHJvdG90eXBlLnNldEF0dHJzID0gZnVuY3Rpb24gKCBhdHRycyApIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzLmNhbGwoIHRoaXMsIGF0dHJzICk7XHJcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVzdEVxdWFsOyIsImltcG9ydCBNdXN0Q29udGFpbkNoYXJhY3RlcnMgZnJvbSAnLi9NdXN0Q29udGFpbkNoYXJhY3RlcnMnO1xyXG5cclxuZnVuY3Rpb24gTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzKCkge1xyXG5cdE11c3RDb250YWluQ2hhcmFjdGVycy5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2NvbnRhaW5fbm90JztcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcblx0XHRyZXR1cm4gIXZhbHVlIHx8ICFNdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwoIHRoaXMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRNdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBOb3RDb21wbGV0ZUlucHV0bWFzaygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXJfX21hc2tlZC1maWVsZCcgKSAmJlxyXG5cdFx0XHRqUXVlcnkuZm4uaW5wdXRtYXNrXHJcblx0XHQpO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblx0XHRjb25zdCBub2RlICA9IHRoaXMucmVwb3J0aW5nLmdldE5vZGUoKTtcclxuXHJcblx0XHRyZXR1cm4gIXZhbHVlIHx8IG5vZGUuaW5wdXRtYXNrLmlzQ29tcGxldGUoKTtcclxuXHR9O1xyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdpbnB1dG1hc2snICk7XHJcblx0fTtcclxufVxyXG5cclxuTm90Q29tcGxldGVJbnB1dG1hc2sucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdENvbXBsZXRlSW5wdXRtYXNrOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBOb3RFbWFpbCgpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRyZXR1cm4gJ2VtYWlsJyA9PT0gbm9kZS50eXBlO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCAvXltcXHctXFwuXFwrXStAKFtcXHctXStcXC4pK1tcXHctXXsxLDZ9JC8udGVzdCggdmFsdWUgKTtcclxuXHR9O1xyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdlbWFpbCcgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob3RFbWFpbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90RW1haWw7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBpc0VtcHR5LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBOb3RFbXB0eVJlc3RyaWN0aW9uKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLnR5cGUgPSAncmVxdWlyZWQnO1xyXG59XHJcblxyXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0cmV0dXJuIHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkO1xyXG59O1xyXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRyZXR1cm4gIWlzRW1wdHkoIHZhbHVlICk7XHJcbn07XHJcbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2VtcHR5JyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90RW1wdHlSZXN0cmljdGlvbjsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90RW5vdWdoQ2hhcnMoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtaW5MZW5ndGgnICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgbWluTGVuZ3RoID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gZmFsc2UgIT09IG1pbkxlbmd0aDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgbGVuZ3RoICAgICAgICA9IHRoaXMuZ2V0VmFsdWUoKT8ubGVuZ3RoO1xyXG5cdFx0Y29uc3QgeyBtaW5MZW5ndGggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiAhbGVuZ3RoIHx8IGxlbmd0aCA+PSArbWluTGVuZ3RoLnZhbHVlLmN1cnJlbnQ7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2NoYXJfbWluJyApO1xyXG5cdH07XHJcbn1cclxuXHJcbk5vdEVub3VnaENoYXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RFbm91Z2hDaGFyczsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90RW5vdWdoTnVtYmVycygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21pbicgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRjb25zdCB7IG1pbiA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtaW4gJiYgWyAnbnVtYmVyJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlICAgPSB0aGlzLmdldFZhbHVlKCk7XHJcblx0XHRjb25zdCB7IG1pbiB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCArdmFsdWUgPj0gK21pbi52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ251bWJlcl9taW4nICk7XHJcblx0fTtcclxufVxyXG5cclxuTm90RW5vdWdoTnVtYmVycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90RW5vdWdoTnVtYmVyczsiLCJpbXBvcnQgTWF0Y2hSZWdleHAgZnJvbSAnLi9NYXRjaFJlZ2V4cCc7XHJcblxyXG5mdW5jdGlvbiBOb3RNYXRjaFJlZ2V4cCgpIHtcclxuXHRNYXRjaFJlZ2V4cC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3JlZ2V4cF9ub3QnO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdHJldHVybiAhdmFsdWUgfHwgIU1hdGNoUmVnZXhwLnByb3RvdHlwZS52YWxpZGF0ZS5jYWxsKCB0aGlzICk7XHJcblx0fTtcclxufVxyXG5cclxuTm90TWF0Y2hSZWdleHAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF0Y2hSZWdleHAucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RNYXRjaFJlZ2V4cDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90VXJsKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdHJldHVybiAndXJsJyA9PT0gbm9kZS50eXBlO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0IXZhbHVlIHx8IC8oKG1haWx0b1xcOnwobmV3c3woaHR8Zil0cChzPykpXFw6XFwvXFwvKVxcUyspLy50ZXN0KCB2YWx1ZSApXHJcblx0XHQpO1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ3VybCcgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob3RVcmwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdFVybDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gUmVhY2hMaW1pdENoYXJzKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4TGVuZ3RoJyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRjb25zdCB7IG1heExlbmd0aCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtYXhMZW5ndGg7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgICAgICAgICA9IHRoaXMuZ2V0VmFsdWUoKT8ubGVuZ3RoO1xyXG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPD0gK21heExlbmd0aC52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2NoYXJfbWF4JyApO1xyXG5cdH07XHJcbn1cclxuXHJcblJlYWNoTGltaXRDaGFycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY2hMaW1pdENoYXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBSZWFjaExpbWl0TnVtYmVycygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heCcgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRjb25zdCB7IG1heCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtYXggJiYgWyAnbnVtYmVyJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlICAgPSB0aGlzLmdldFZhbHVlKCk7XHJcblx0XHRjb25zdCB7IG1heCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCArdmFsdWUgPD0gK21heC52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ251bWJlcl9tYXgnICk7XHJcblx0fTtcclxufVxyXG5cclxuUmVhY2hMaW1pdE51bWJlcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWNoTGltaXROdW1iZXJzOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gU2VydmVyU2lkZUNhbGxiYWNrKCkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdGNvbnN0IHsgYXBpRmV0Y2ggfSA9IHdwO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgICAgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc3NyJztcclxuXHR9O1xyXG5cdHRoaXMuaXNTZXJ2ZXJTaWRlICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlUHJvbWlzZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0aWYgKCAhY3VycmVudCApIHtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmdldEZvcm1EYXRhKCk7XHJcblxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlGZXRjaCgge1xyXG5cdFx0XHRwYXRoOiAnL2pldC1mb3JtLWJ1aWxkZXIvdjEvdmFsaWRhdGUtZmllbGQnLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keSxcclxuXHRcdH0gKTtcclxuXHJcblx0XHRyZXR1cm4gcmVzcG9uc2U/LnJlc3VsdCA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyBpbnB1dCB9ICAgID0gdGhpcy5yZXBvcnRpbmc7XHJcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSBpbnB1dC5nZXRSb290KCk7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoIHJvb3ROb2RlICk7XHJcblx0XHRmb3JtRGF0YS5kZWxldGUoICdfd3Bub25jZScgKTtcclxuXHRcdGZvcm1EYXRhLnNldCggJ19qZmJfdmFsaWRhdGlvbl9ydWxlX2luZGV4JywgdGhpcy5hdHRycy5pbmRleCApO1xyXG5cdFx0Zm9yICggY29uc3QgcGF0aEVsZW1lbnQgb2YgaW5wdXQucGF0aCApIHtcclxuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCAnX2pmYl92YWxpZGF0aW9uX3BhdGhbXScsIHBhdGhFbGVtZW50ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZvcm1EYXRhO1xyXG5cdH07XHJcblxyXG59XHJcblxyXG5TZXJ2ZXJTaWRlQ2FsbGJhY2sucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU2lkZUNhbGxiYWNrOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5jb25zdCB7IGdldFRpbWVzdGFtcCB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBUb29FYXJseVRpbWVzdGFtcCgpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21pbicgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0Y29uc3QgeyBtaW4gPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGZhbHNlICE9PSBtaW4gJiZcclxuXHRcdFx0WyAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0aWYgKCAhdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHsgbWluIH0gICAgICAgICAgID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblx0XHRjb25zdCB7IHRpbWUgfSAgICAgICAgICA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IHsgdGltZTogbWluVGltZSB9ID0gZ2V0VGltZXN0YW1wKCBtaW4udmFsdWUuY3VycmVudCApO1xyXG5cclxuXHRcdHJldHVybiB0aW1lID49IG1pblRpbWU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2RhdGVfbWluJyApO1xyXG5cdH07XHJcbn1cclxuXHJcblRvb0Vhcmx5VGltZXN0YW1wLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29FYXJseVRpbWVzdGFtcDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuY29uc3QgeyBnZXRUaW1lc3RhbXAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gVG9vTGF0ZVRpbWVzdGFtcCgpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heCcgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0Y29uc3QgeyBtYXggPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdGZhbHNlICE9PSBtYXggJiZcclxuXHRcdFx0WyAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0aWYgKCAhdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHsgbWF4IH0gICAgICAgICAgID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblx0XHRjb25zdCB7IHRpbWUgfSAgICAgICAgICA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IHsgdGltZTogbWF4VGltZSB9ID0gZ2V0VGltZXN0YW1wKCBtYXgudmFsdWUuY3VycmVudCApO1xyXG5cclxuXHRcdHJldHVybiB0aW1lIDw9IG1heFRpbWU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2RhdGVfbWF4JyApO1xyXG5cdH07XHJcbn1cclxuXHJcblRvb0xhdGVUaW1lc3RhbXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb0xhdGVUaW1lc3RhbXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWR2YW5jZWRSZXBvcnRpbmcgZnJvbSAnLi9BZHZhbmNlZFJlcG9ydGluZyc7XHJcbmltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgTm90RW1wdHlSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbXB0eVJlc3RyaWN0aW9uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcblx0ICAgICAgYWRkQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL29ic2VydmUtZHluYW1pYy1hdHRycycsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xyXG5cdFx0b2JzZXJ2YWJsZS5nZXRJbnB1dHMoKS5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcblx0XHRcdGlmICggIShcclxuXHRcdFx0XHRpbnB1dC5yZXBvcnRpbmcgaW5zdGFuY2VvZiBBZHZhbmNlZFJlcG9ydGluZ1xyXG5cdFx0XHQpICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpbnB1dC5yZXBvcnRpbmcub2JzZXJ2ZUF0dHJzKCk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHQxMSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlcG9ydGluZycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvYWR2YW5jZWQtcmVwb3J0aW5nJyxcclxuXHRmdW5jdGlvbiAoIHJlcG9ydGluZyApIHtcclxuXHRcdHJlcG9ydGluZyA9IFsgQWR2YW5jZWRSZXBvcnRpbmcsIC4uLnJlcG9ydGluZyBdO1xyXG5cclxuXHRcdHJldHVybiByZXBvcnRpbmc7XHJcblx0fSxcclxuKTtcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XHJcblx0KSxcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLFxyXG5cdE5vdEVtcHR5UmVzdHJpY3Rpb24sXHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9