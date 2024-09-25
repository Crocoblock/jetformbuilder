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
 * @property {AdvancedRestriction} restrictions List of advanced restrictions
 *
 * @this {ReportingInterface}
 * @class
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
   * @type {string[]}
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
AdvancedReporting.prototype.getErrorsRaw = async function (promises, signal = null) {
  if (this.hasServerSide) {
    this.input.loading.start();
  }
  let errors = await allRejected(promises);
  this.valuePrev = this.input.getValue();
  if (this.hasServerSide) {
    this.input.loading.end();
  }
  if (signal?.aborted) {
    errors = [];
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
  if (error) {
    error.innerHTML = message;
    return error;
  }
  const inputNode = this.getNode();
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
   * @see https://github.com/Crocoblock/issues-tracker/issues/1766
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
AdvancedReporting.prototype.validateOnBlur = function (signal = null) {
  /**
   * @see https://github.com/Crocoblock/issues-tracker/issues/1766
   */
  if (this.isProcess) {
    return;
  }
  this.isProcess = true;
  this.skipServerSide = false;
  this.input.getContext().setSilence(false);
  this.validate(signal).then(() => {}).catch(() => {}).finally(() => {
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
 * @param  restriction {AdvancedRestriction|Restriction}
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
 * @type {Array<CustomBaseRestriction>}
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

      // eslint-disable-next-line max-depth
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
  const allForms = (_window$JetFormsValid = window?.JetFormsValidation) !== null && _window$JetFormsValid !== void 0 ? _window$JetFormsValid : false;
  if (false === allForms) {
    return '';
  }
  const formId = input.getSubmit().getFormId();
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
 * @param  restriction {Restriction}
 * @param  slug        {string}
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
  const allMessages = (_window$JetFormsValid2 = window?.JetFormsValidation) !== null && _window$JetFormsValid2 !== void 0 ? _window$JetFormsValid2 : false;
  if (false === allMessages) {
    return '';
  }
  const form = reporting.input.getSubmit();
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
 * @param  wrapper {Element}
 * @return {boolean|Element}
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
  this.isSupported = function (node) {
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
  this.isSupported = function (node) {
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
  this.isSupported = function (node) {
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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);


function ServerSideCallback() {
  _CustomBaseRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'ssr';
  };
  this.isServerSide = function () {
    return true;
  };
  this.validatePromise = async function (signal = null) {
    const current = this.getValue();
    if (!current) {
      return Promise.resolve();
    }
    const body = this.getFormData();
    try {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: '/jet-form-builder/v1/validate-field',
        method: 'POST',
        body,
        signal
      });
      return response?.result ? Promise.resolve() : Promise.reject();
    } catch (error) {
      throw error;
    }
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

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL09BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL0FkdmFuY2VkUmVwb3J0aW5nLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9BZHZhbmNlZFJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvQ3VzdG9tUnVsZXNSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL01hdGNoUmVnZXhwLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTXVzdENvbnRhaW5DaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTXVzdEVxdWFsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90Q29tcGxldGVJbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RFbWFpbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVtcHR5UmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RFbm91Z2hDaGFycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVub3VnaE51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RNYXRjaFJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdFVybC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlYWNoTGltaXRDaGFycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlYWNoTGltaXROdW1iZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvU2VydmVyU2lkZUNhbGxiYWNrLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvVG9vRWFybHlUaW1lc3RhbXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ub29MYXRlVGltZXN0YW1wLmpzIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImFwaUZldGNoXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRnZXRFcnJvck5vZGUsXG5cdGdldEluaGVyaXRWYWxpZGF0aW9uVHlwZSxcblx0Z2V0Tm9kZVZhbGlkYXRpb25UeXBlLFxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZXMsXG5cdGdldFdyYXBwZXIsXG5cdHNldFJlc3RyaWN0aW9ucyxcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIFJlcG9ydGluZ0ludGVyZmFjZSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIGFsbFJlamVjdGVkLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7QWR2YW5jZWRSZXN0cmljdGlvbn0gcmVzdHJpY3Rpb25zIExpc3Qgb2YgYWR2YW5jZWQgcmVzdHJpY3Rpb25zXG4gKlxuICogQHRoaXMge1JlcG9ydGluZ0ludGVyZmFjZX1cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBBZHZhbmNlZFJlcG9ydGluZygpIHtcblx0UmVwb3J0aW5nSW50ZXJmYWNlLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLnR5cGUgICAgICAgICAgID0gJ2luaGVyaXQnO1xuXHR0aGlzLm1lc3NhZ2VzICAgICAgID0ge307XG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBDb21wdXRlZCBwcm9wZXJ0eSB3aGljaCBjb250YWluIGFsbCBhdHRyc1xuXHQgKiBmb3IgYWxsIHN1cHBvcnRlZCByZXN0cmljdGlvbnNcblx0ICpcblx0ICogQHNlZSBBZHZhbmNlZFJlc3RyaWN0aW9uLm9uUmVhZHlcblx0ICpcblx0ICogQHR5cGUge3N0cmluZ1tdfVxuXHQgKi9cblx0dGhpcy53YXRjaEF0dHJzID0gW107XG5cblx0dGhpcy5xdWV1ZSA9IFtdO1xufVxuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlICk7XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5za2lwU2VydmVyU2lkZSA9IHRydWU7XG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pc1Byb2Nlc3MgICAgICA9IG51bGw7XG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUucXVldWUgICAgICAgICAgPSBbXTtcblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnNldFJlc3RyaWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0c2V0UmVzdHJpY3Rpb25zKCB0aGlzICk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0ICkge1xuXHR0aGlzLnR5cGUgPSBnZXROb2RlVmFsaWRhdGlvblR5cGUoIG5vZGUgKTtcblxuXHRjb25zdCBpbmhlcml0ID0gJ2luaGVyaXQnID09PSB0aGlzLnR5cGVcblx0ICAgICAgICAgICAgICAgID8gZ2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlKCBpbnB1dCApXG5cdCAgICAgICAgICAgICAgICA6IHRoaXMudHlwZTtcblxuXHRyZXR1cm4gISFpbmhlcml0Py5sZW5ndGg7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcywgc2lnbmFsID0gbnVsbCApIHtcblx0aWYgKCB0aGlzLmhhc1NlcnZlclNpZGUgKSB7XG5cdFx0dGhpcy5pbnB1dC5sb2FkaW5nLnN0YXJ0KCk7XG5cdH1cblxuXHRsZXQgZXJyb3JzID0gYXdhaXQgYWxsUmVqZWN0ZWQoIHByb21pc2VzICk7XG5cblx0dGhpcy52YWx1ZVByZXYgPSB0aGlzLmlucHV0LmdldFZhbHVlKCk7XG5cblx0aWYgKCB0aGlzLmhhc1NlcnZlclNpZGUgKSB7XG5cdFx0dGhpcy5pbnB1dC5sb2FkaW5nLmVuZCgpO1xuXHR9XG5cblx0aWYgKCBzaWduYWw/LmFib3J0ZWQgKSB7XG5cdFx0ZXJyb3JzID0gW107XG5cdH1cblxuXHRyZXR1cm4gZXJyb3JzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gdmFsaWRhdGlvbkVycm9ycyB7QWR2YW5jZWRSZXN0cmljdGlvbltdfFJlc3RyaWN0aW9uW119XG4gKi9cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5yZXBvcnRSYXcgPSBmdW5jdGlvbiAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdGxldCBtZXNzYWdlID0gJyc7XG5cblx0Zm9yICggY29uc3QgdmFsaWRhdGlvbkVycm9yIG9mIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0bWVzc2FnZSA9IHZhbGlkYXRpb25FcnJvci5nZXRNZXNzYWdlKCk7XG5cblx0XHRpZiAoIG1lc3NhZ2U/Lmxlbmd0aCApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIW1lc3NhZ2UgKSB7XG5cdFx0dGhpcy5jbGVhclJlcG9ydCgpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5pbnNlcnRFcnJvciggbWVzc2FnZSApO1xufTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdHRoaXMubWVzc2FnZXMgPSBnZXRWYWxpZGF0aW9uTWVzc2FnZXMoIGlucHV0Lm5vZGVzWyAwIF0gKTtcblxuXHRSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG59O1xuLyoqXG4gKiBAc2luY2UgMy4wLjUgSW50cm9kdWNlZFxuICovXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUub2JzZXJ2ZUF0dHJzID0gZnVuY3Rpb24gKCkge1xuXHRmb3IgKCBjb25zdCB3YXRjaEF0dHIgb2YgdGhpcy53YXRjaEF0dHJzICkge1xuXHRcdGlmICggIXRoaXMuaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoIHdhdGNoQXR0ciApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtCYXNlSHRtbEF0dHJ9XG5cdFx0ICovXG5cdFx0Y29uc3QgYXR0ciA9IHRoaXMuaW5wdXQuYXR0cnNbIHdhdGNoQXR0ciBdO1xuXG5cdFx0YXR0ci52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZVByZXYgPSBudWxsO1xuXHRcdFx0dGhpcy52YWxpZGF0ZU9uQmx1cigpO1xuXHRcdH0gKTtcblx0fVxufTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jbGVhclJlcG9ydCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgaW5uZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XG5cblx0XHRpZiAoICFub2RlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpZWxkLWhhcy1lcnJvcicgKTtcblxuXHRcdGNvbnN0IGVycm9yID0gZ2V0RXJyb3JOb2RlKCBub2RlICk7XG5cblx0XHRpZiAoICFlcnJvciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlcnJvci5yZW1vdmUoKTtcblx0fTtcblx0aW5uZXIoKTtcblx0dGhpcy5tYWtlVmFsaWQoKTtcbn07XG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaW5zZXJ0RXJyb3IgPSBmdW5jdGlvbiAoIG1lc3NhZ2UgKSB7XG5cdGNvbnN0IGlubmVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5vZGUgID0gZ2V0V3JhcHBlciggdGhpcy5nZXROb2RlKCkgKTtcblx0XHRjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoIG5vZGUsIG1lc3NhZ2UgKTtcblxuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggJ2ZpZWxkLWhhcy1lcnJvcicgKTtcblxuXHRcdGlmICggZXJyb3IuaXNDb25uZWN0ZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gaXQgY2FuIGJlIG9uIGZpZWxkc19sYXlvdXQgPT09ICdyb3cnXG5cdFx0Y29uc3QgY29sRW5kID0gbm9kZS5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItY29sX19lbmQnICk7XG5cblx0XHRpZiAoIGNvbEVuZCApIHtcblx0XHRcdGNvbEVuZC5hcHBlbmRDaGlsZCggZXJyb3IgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRub2RlLmFwcGVuZENoaWxkKCBlcnJvciApO1xuXHRcdH1cblx0fTtcblx0aW5uZXIoKTtcblx0dGhpcy5tYWtlSW52YWxpZCgpO1xufTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jcmVhdGVFcnJvciA9IGZ1bmN0aW9uIChcblx0bm9kZSwgbWVzc2FnZSApIHtcblx0Y29uc3QgZXJyb3IgPSBnZXRFcnJvck5vZGUoIG5vZGUgKTtcblxuXHRpZiAoIGVycm9yICkge1xuXHRcdGVycm9yLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cblx0XHRyZXR1cm4gZXJyb3I7XG5cdH1cblxuXHRjb25zdCBpbnB1dE5vZGUgPSB0aGlzLmdldE5vZGUoKTtcblx0Y29uc3QgZGl2ICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXHRkaXYuY2xhc3NMaXN0LmFkZCggJ2Vycm9yLW1lc3NhZ2UnICk7XG5cdGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRkaXYuaWQgICAgICAgID0gaW5wdXROb2RlLmlkICsgJ19fZXJyb3InO1xuXG5cdHJldHVybiBkaXY7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUubWFrZUludmFsaWQgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHdyYXBwZXIgICA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XG5cdGNvbnN0IGVycm9yTm9kZSA9IGdldEVycm9yTm9kZSggd3JhcHBlciApO1xuXG5cdHRoaXMuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZSggJ2FyaWEtaW52YWxpZCcsICd0cnVlJyApO1xuXHR0aGlzLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXG5cdFx0J2FyaWEtZGVzY3JpYmVkYnknLFxuXHRcdGVycm9yTm9kZT8uaWQgPz8gZmFsc2UsXG5cdCk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUubWFrZVZhbGlkID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmdldE5vZGUoKS5yZW1vdmVBdHRyaWJ1dGUoICdhcmlhLWludmFsaWQnICk7XG5cdHRoaXMuZ2V0Tm9kZSgpLnJlbW92ZUF0dHJpYnV0ZSggJ2FyaWEtZGVzY3JpYmVkYnknICk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICggYWRkVG9RdWV1ZSA9IGZhbHNlICkge1xuXHRjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0XHR0aGlzLmlucHV0LmdldENvbnRleHQoKS5zZXRTaWxlbmNlKCBmYWxzZSApO1xuXG5cdFx0dGhpcy52YWxpZGF0ZSgpLlxuXHRcdFx0dGhlbiggKCkgPT4ge30gKS5cblx0XHRcdGNhdGNoKCAoKSA9PiB7fSApLlxuXHRcdFx0ZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmlzUHJvY2VzcyA9IG51bGw7XG5cblx0XHRcdFx0Y29uc3QgcXVldWUgPSBbIC4uLnRoaXMucXVldWUgXTtcblx0XHRcdFx0dGhpcy5xdWV1ZSAgPSBbXTtcblxuXHRcdFx0XHRpZiAoICFxdWV1ZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy52YWx1ZVByZXYgPSBudWxsO1xuXHRcdFx0XHRxdWV1ZS5mb3JFYWNoKCBjdXJyZW50ID0+IGN1cnJlbnQoKSApO1xuXHRcdFx0fSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNzY2XG5cdCAqL1xuXHRpZiAoIGFkZFRvUXVldWUgJiYgdGhpcy5pc1Byb2Nlc3MgKSB7XG5cdFx0dGhpcy5xdWV1ZSA9IFsgY2FsbGJhY2sgXTtcblx0fVxuXG5cdGlmICggdGhpcy5pc1Byb2Nlc3MgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5pc1Byb2Nlc3MgPSB0cnVlO1xuXG5cdGNhbGxiYWNrKCk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUudmFsaWRhdGVPbkJsdXIgPSBmdW5jdGlvbiAoIHNpZ25hbCA9IG51bGwgKSB7XG5cdC8qKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNzY2XG5cdCAqL1xuXHRpZiAoIHRoaXMuaXNQcm9jZXNzICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuaXNQcm9jZXNzICAgICAgPSB0cnVlO1xuXHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gZmFsc2U7XG5cblx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2V0U2lsZW5jZSggZmFsc2UgKTtcblxuXHR0aGlzLnZhbGlkYXRlKCBzaWduYWwgKS5cblx0XHR0aGVuKCAoKSA9PiB7fSApLlxuXHRcdGNhdGNoKCAoKSA9PiB7fSApLlxuXHRcdGZpbmFsbHkoICgpID0+IHtcblx0XHRcdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5oYXNTZXJ2ZXJTaWRlICA9IGZhbHNlO1xuXHRcdFx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IG51bGw7XG5cdFx0fSApO1xufTtcblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IHRydWU7XG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSBmYWxzZTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdHRoaXMudmFsaWRhdGUoKS50aGVuKCByZXNvbHZlICkuY2F0Y2goIHJlamVjdCApLmZpbmFsbHkoXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmhhc1NlcnZlclNpZGUgID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuaXNQcm9jZXNzICAgICAgPSBudWxsO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9ICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAgcmVzdHJpY3Rpb24ge0FkdmFuY2VkUmVzdHJpY3Rpb258UmVzdHJpY3Rpb259XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuY2FuUHJvY2Vzc1Jlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCByZXN0cmljdGlvbiApIHtcblx0cmV0dXJuIChcblx0XHQvLyBhbGxvdyBhbGxcblx0XHQhdGhpcy5za2lwU2VydmVyU2lkZSB8fFxuXHRcdC8vIG9yIG9ubHkgbm90LVNlcnZlclNpZGVcblx0XHQhcmVzdHJpY3Rpb24uaXNTZXJ2ZXJTaWRlKClcblx0KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHJlc3RyaWN0aW9uIHtBZHZhbmNlZFJlc3RyaWN0aW9ufFJlc3RyaWN0aW9ufVxuICovXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuYmVmb3JlUHJvY2Vzc1Jlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCByZXN0cmljdGlvbiApIHtcblx0dGhpcy5oYXNTZXJ2ZXJTaWRlID0gcmVzdHJpY3Rpb24uaXNTZXJ2ZXJTaWRlKCkgPyB0cnVlIDogdGhpcy5oYXNTZXJ2ZXJTaWRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSZXBvcnRpbmc7XG4iLCJpbXBvcnQgUmVhY2hMaW1pdE51bWJlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdE51bWJlcnMnO1xuaW1wb3J0IE5vdEVub3VnaE51bWJlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW5vdWdoTnVtYmVycyc7XG5pbXBvcnQgTm90VXJsIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdFVybCc7XG5pbXBvcnQgTm90RW1haWwgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW1haWwnO1xuaW1wb3J0IE5vdEVub3VnaENoYXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVub3VnaENoYXJzJztcbmltcG9ydCBSZWFjaExpbWl0Q2hhcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdENoYXJzJztcbmltcG9ydCBOb3RFbXB0eVJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVtcHR5UmVzdHJpY3Rpb24nO1xuaW1wb3J0IE5vdENvbXBsZXRlSW5wdXRtYXNrIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdENvbXBsZXRlSW5wdXRtYXNrJztcbmltcG9ydCBDdXN0b21SdWxlc1Jlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL0N1c3RvbVJ1bGVzUmVzdHJpY3Rpb24nO1xuaW1wb3J0IE11c3RDb250YWluQ2hhcmFjdGVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NdXN0Q29udGFpbkNoYXJhY3RlcnMnO1xuaW1wb3J0IE11c3ROb3RDb250YWluQ2hhcmFjdGVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMnO1xuaW1wb3J0IE1hdGNoUmVnZXhwIGZyb20gJy4vcmVzdHJpY3Rpb25zL01hdGNoUmVnZXhwJztcbmltcG9ydCBOb3RNYXRjaFJlZ2V4cCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RNYXRjaFJlZ2V4cCc7XG5pbXBvcnQgU2VydmVyU2lkZUNhbGxiYWNrIGZyb20gJy4vcmVzdHJpY3Rpb25zL1NlcnZlclNpZGVDYWxsYmFjayc7XG5pbXBvcnQgTXVzdEVxdWFsIGZyb20gJy4vcmVzdHJpY3Rpb25zL011c3RFcXVhbCc7XG5pbXBvcnQgVG9vRWFybHlUaW1lc3RhbXAgZnJvbSAnLi9yZXN0cmljdGlvbnMvVG9vRWFybHlUaW1lc3RhbXAnO1xuaW1wb3J0IFRvb0xhdGVUaW1lc3RhbXAgZnJvbSAnLi9yZXN0cmljdGlvbnMvVG9vTGF0ZVRpbWVzdGFtcCc7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IHtcblx0ICAgICAgaXNFbXB0eSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuY29uc3QgZ2V0QWR2YW5jZWRSdWxlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5hZHZhbmNlZC5ydWxlcycsXG5cdFtcblx0XHRNdXN0Q29udGFpbkNoYXJhY3RlcnMsXG5cdFx0TXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzLFxuXHRcdE1hdGNoUmVnZXhwLFxuXHRcdE5vdE1hdGNoUmVnZXhwLFxuXHRcdFNlcnZlclNpZGVDYWxsYmFjayxcblx0XHRNdXN0RXF1YWwsXG5cdF0sXG4pO1xuXG4vKipcbiAqIEB0eXBlIHtBcnJheTxDdXN0b21CYXNlUmVzdHJpY3Rpb24+fVxuICovXG5sZXQgYWR2YW5jZWRSdWxlcyA9IFtdO1xuXG5jb25zdCBnZXRSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcblx0W1xuXHRcdFRvb0Vhcmx5VGltZXN0YW1wLFxuXHRcdFRvb0xhdGVUaW1lc3RhbXAsXG5cdFx0UmVhY2hMaW1pdE51bWJlcnMsXG5cdFx0Tm90RW5vdWdoTnVtYmVycyxcblx0XHROb3RVcmwsXG5cdFx0Tm90RW1haWwsXG5cdFx0Tm90Q29tcGxldGVJbnB1dG1hc2ssXG5cdFx0Tm90RW5vdWdoQ2hhcnMsXG5cdFx0UmVhY2hMaW1pdENoYXJzLFxuXHRcdE5vdEVtcHR5UmVzdHJpY3Rpb24sXG5cdFx0Q3VzdG9tUnVsZXNSZXN0cmljdGlvbixcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUge1Jlc3RyaWN0aW9uW119XG4gKi9cbmxldCByZXN0cmljdGlvbnMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0UHJlcGFyZWRSdWxlcyggcnVsZXMsIHJlcG9ydGluZyApIHtcblx0Y29uc3QgcmVzcG9uc2UgPSBbXTtcblxuXHRpZiAoICFhZHZhbmNlZFJ1bGVzLmxlbmd0aCApIHtcblx0XHRhZHZhbmNlZFJ1bGVzID0gZ2V0QWR2YW5jZWRSdWxlcygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgWyBpbmRleCwgcnVsZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBydWxlcyApICkge1xuXHRcdGZvciAoIGNvbnN0IGFkdmFuY2VkUnVsZSBvZiBhZHZhbmNlZFJ1bGVzICkge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IG5ldyBhZHZhbmNlZFJ1bGUoKTtcblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0aWYgKCBydWxlLnR5cGUgIT09IGN1cnJlbnQuZ2V0U2x1ZygpICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBydWxlLnR5cGU7XG5cblx0XHRcdGN1cnJlbnQuc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKTtcblx0XHRcdGN1cnJlbnQuc2V0QXR0cnMoIHsgLi4ucnVsZSwgaW5kZXggfSApO1xuXHRcdFx0Y3VycmVudC5vblJlYWR5KCk7XG5cblx0XHRcdHJlc3BvbnNlLnB1c2goIGN1cnJlbnQgKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXNwb25zZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldFdyYXBwZXIoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXROb2RlVmFsaWRhdGlvblR5cGUoIG5vZGUgKSB7XG5cdGNvbnN0IHdyYXBwZXIgICAgICAgICAgICAgICAgID0gZ2V0V3JhcHBlciggbm9kZSApO1xuXHRjb25zdCB7IHZhbGlkYXRpb25UeXBlID0gJycgfSA9IHdyYXBwZXI/LmRhdGFzZXQgPz8ge307XG5cblx0cmV0dXJuIHZhbGlkYXRpb25UeXBlO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxuICovXG5mdW5jdGlvbiBnZXRJbmhlcml0VmFsaWRhdGlvblR5cGUoIGlucHV0ICkge1xuXHRjb25zdCBhbGxGb3JtcyA9IHdpbmRvdz8uSmV0Rm9ybXNWYWxpZGF0aW9uID8/IGZhbHNlO1xuXG5cdGlmICggZmFsc2UgPT09IGFsbEZvcm1zICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IGZvcm1JZCAgICAgICAgPSBpbnB1dC5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcblx0Y29uc3QgeyB0eXBlID0gJycgfSA9IGFsbEZvcm1zWyBmb3JtSWQgXSA/PyB7fTtcblxuXHRyZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKCBub2RlICkge1xuXHRjb25zdCB3cmFwcGVyICAgICAgICAgICAgICAgICAgICAgICA9IGdldFdyYXBwZXIoIG5vZGUgKTtcblx0Y29uc3QgeyB2YWxpZGF0aW9uTWVzc2FnZXMgPSAne30nIH0gPSB3cmFwcGVyPy5kYXRhc2V0ID8/IHt9O1xuXG5cdHJldHVybiBKU09OLnBhcnNlKCB2YWxpZGF0aW9uTWVzc2FnZXMgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHJlc3RyaWN0aW9uIHtSZXN0cmljdGlvbn1cbiAqIEBwYXJhbSAgc2x1ZyAgICAgICAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0TWVzc2FnZUJ5U2x1ZyggcmVzdHJpY3Rpb24sIHNsdWcgKSB7XG5cdGNvbnN0IHsgcmVwb3J0aW5nIH0gPSByZXN0cmljdGlvbjtcblx0Y29uc3QgbWVzc2FnZSAgICAgICA9IHJlcG9ydGluZy5tZXNzYWdlc1sgc2x1ZyBdID8/ICcnO1xuXG5cdGlmICggbWVzc2FnZSApIHtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fVxuXG5cdGNvbnN0IGFsbE1lc3NhZ2VzID0gd2luZG93Py5KZXRGb3Jtc1ZhbGlkYXRpb24gPz8gZmFsc2U7XG5cblx0aWYgKCBmYWxzZSA9PT0gYWxsTWVzc2FnZXMgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgZm9ybSAgICAgICAgID0gcmVwb3J0aW5nLmlucHV0LmdldFN1Ym1pdCgpO1xuXHRjb25zdCB7IG1lc3NhZ2VzIH0gPSBhbGxNZXNzYWdlc1sgZm9ybS5nZXRGb3JtSWQoKSBdID8/IHt9O1xuXG5cdHJldHVybiBtZXNzYWdlc1sgc2x1ZyBdID8/ICcnO1xufVxuXG4vKipcbiAqIEB0aGlzIHtDdXN0b21CYXNlUmVzdHJpY3Rpb259XG4gKi9cbmZ1bmN0aW9uIG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uKCkge1xuXHRpZiAoICF0aGlzLmF0dHJzPy5maWVsZCApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgeyByb290IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dDtcblx0Y29uc3QgaW5wdXQgICAgPSByb290LmdldElucHV0KCB0aGlzLmF0dHJzLmZpZWxkICk7XG5cblx0aW5wdXQud2F0Y2goICgpID0+IHtcblx0XHR0aGlzLmF0dHJzLnZhbHVlID0gaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdC8qKlxuXHRcdCAqIEhlcmUgd2UgbmVlZCB0byByZXNldCB0aGUgYHZhbHVlUHJldmAgcHJvcGVydHksXG5cdFx0ICogYmVjYXVzZSByZXBvcnRpbmcgbG9naWMgcmVtZW1iZXIgcHJldmlvdXMgdmFsdWUsIHdoaWNoIGl0IGNoZWNrLlxuXHRcdCAqXG5cdFx0ICogQW5kIGlmIC52YWx1ZVByZXYgPT09IC5jdXJyZW50LnZhbHVlIC0+IHJlcG9ydGluZyB3aWxsIGJlIHNraXBwZWRcblx0XHQgKlxuXHRcdCAqIEBzZWUgQWR2YW5jZWRSZXBvcnRpbmcuZ2V0RXJyb3JzXG5cdFx0ICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UuaGFzQ2hhbmdlZFZhbHVlXG5cdFx0ICogQHR5cGUge251bGx9XG5cdFx0ICovXG5cdFx0dGhpcy5yZXBvcnRpbmcudmFsdWVQcmV2ID0gbnVsbDtcblx0XHR0aGlzLnJlcG9ydGluZy52YWxpZGF0ZU9uQ2hhbmdlKCk7XG5cdH0gKTtcblxuXHRpZiAoICFpc0VtcHR5KCBpbnB1dC52YWx1ZS5jdXJyZW50ICkgKSB7XG5cdFx0dGhpcy5hdHRycy52YWx1ZSA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gcmVwb3J0aW5nIHtSZXBvcnRpbmdJbnRlcmZhY2V9XG4gKi9cbmZ1bmN0aW9uIHNldFJlc3RyaWN0aW9ucyggcmVwb3J0aW5nICkge1xuXHRpZiAoICFyZXN0cmljdGlvbnMubGVuZ3RoICkge1xuXHRcdHJlc3RyaWN0aW9ucyA9IGdldFJlc3RyaWN0aW9ucygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgcmVzdHJpY3Rpb25zICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVzdHJpY3Rpb24oKTtcblxuXHRcdGlmIChcblx0XHRcdCFjdXJyZW50LmlzU3VwcG9ydGVkKCByZXBvcnRpbmcuZ2V0Tm9kZSgpLCByZXBvcnRpbmcgKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGN1cnJlbnQuc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKTtcblx0XHRjdXJyZW50Lm9uUmVhZHkoKTtcblxuXHRcdHJlcG9ydGluZy5yZXN0cmljdGlvbnMucHVzaCggY3VycmVudCApO1xuXHR9XG59XG5cbi8qKlxuICogWW91IGNhbm5vdCB1c2Ugbm9kZS5xdWVyeVNlbGVjdG9yIGluIHRoaXMgZnVuY3Rpb24sXG4gKiBiZWNhdXNlIHRoZSBSZXBlYXRlciBGaWVsZCB2YWxpZGF0aW9uIHdpbGwgcmV0dXJuXG4gKiBhbiBlcnJvciBlbGVtZW50IGZyb20gdGhlIGludGVybmFsIGZpZWxkLlxuICpcbiAqIEBwYXJhbSAgd3JhcHBlciB7RWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZ2V0RXJyb3JOb2RlKCB3cmFwcGVyICkge1xuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiB3cmFwcGVyLmNoaWxkcmVuICkge1xuXHRcdGlmICggIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucyggJ2Vycm9yLW1lc3NhZ2UnICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9XG5cblx0Y29uc3QgY29sRW5kTm9kZSA9IHdyYXBwZXIucXVlcnlTZWxlY3Rvcihcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItY29sX19lbmQnLFxuXHQpO1xuXG5cdGlmICggIWNvbEVuZE5vZGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGdldEVycm9yTm9kZSggY29sRW5kTm9kZSApO1xufVxuXG5leHBvcnQge1xuXHRnZXROb2RlVmFsaWRhdGlvblR5cGUsXG5cdGdldEluaGVyaXRWYWxpZGF0aW9uVHlwZSxcblx0Z2V0TWVzc2FnZUJ5U2x1Zyxcblx0Z2V0VmFsaWRhdGlvbk1lc3NhZ2VzLFxuXHRnZXRQcmVwYXJlZFJ1bGVzLFxuXHRzZXRSZXN0cmljdGlvbnMsXG5cdG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uLFxuXHRnZXRXcmFwcGVyLFxuXHRnZXRFcnJvck5vZGUsXG59OyIsImltcG9ydCB7IGdldE1lc3NhZ2VCeVNsdWcgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIFJlc3RyaWN0aW9uLFxuXHQgICAgICBDYWxjdWxhdGVkRm9ybXVsYSxcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gQWR2YW5jZWRSZXN0cmljdGlvbigpIHtcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSAgICAgID0gJyc7XG5cdHRoaXMuZm9ybXVsYSAgICAgID0gbnVsbDtcblx0dGhpcy53YXRjaGVkQXR0cnMgPSBbXTtcbn1cblxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUubWVzc2FnZSA9ICcnO1xuLyoqXG4gKiBAdHlwZSB7Q2FsY3VsYXRlZEZvcm11bGF9XG4gKi9cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmZvcm11bGEgPSBudWxsO1xuLyoqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLndhdGNoZWRBdHRycyA9IFtdO1xuXG4vKipcbiAqIElmIHJldHVybnMgdHJ1ZSAtPiB2YWxpZGF0aW9uIHdpbGwgYmVcbiAqIHN0YXJ0ZWQgd2l0aCAxMDAwIG1zIGRlbGF5XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuaXNTZXJ2ZXJTaWRlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5tZXNzYWdlO1xufTtcbi8qKlxuICogSGVyZSB5b3UgbmVlZCB0byByZXR1cm4gYSBwcmVwYXJlZCBtZXNzYWdlLFxuICogd2l0aCBwcm9jZXNzZWQgbWFjcm9zXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gJ0Vycm9yJztcbn07XG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5nZXRNZXNzYWdlQnlTbHVnID0gZnVuY3Rpb24gKCBzbHVnICkge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZUJ5U2x1ZyggdGhpcywgc2x1ZyApO1xufTtcblxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUub25SZWFkeSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5mb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLnJlcG9ydGluZy5pbnB1dCApO1xuXG5cdHRoaXMuZm9ybXVsYS5vYnNlcnZlKCB0aGlzLmdldFJhd01lc3NhZ2UoKSApO1xuXHR0aGlzLmZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdHRoaXMubWVzc2FnZSA9IHRoaXMuZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0dGhpcy5mb3JtdWxhLnNldFJlc3VsdCgpO1xuXG5cdGlmICggIXRoaXMud2F0Y2hlZEF0dHJzLmxlbmd0aCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLnJlcG9ydGluZy53YXRjaEF0dHJzID0gW1xuXHRcdC4uLm5ldyBTZXQoIFtcblx0XHRcdC4uLnRoaXMucmVwb3J0aW5nLndhdGNoQXR0cnMsXG5cdFx0XHQuLi50aGlzLndhdGNoZWRBdHRycyxcblx0XHRdICksXG5cdF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJlc3RyaWN0aW9uO1xuXG5cbiIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIEN1c3RvbUJhc2VSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRycyA9IHt9O1xufVxuXG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUsXG4pO1xuXG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmF0dHJzICAgICAgICAgPSB7fTtcbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMgICAgICA9IGZ1bmN0aW9uICggYXR0cnMgKSB7XG5cdHRoaXMuYXR0cnMgPSBhdHRycztcbn07XG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFNsdWcgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvciggJ3lvdSBuZWVkIHRvIHJldHVybiBzbHVnIG9mIHJ1bGUnICk7XG59O1xuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5hdHRycz8ubWVzc2FnZSA/PyAnJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUJhc2VSZXN0cmljdGlvbjsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5pbXBvcnQgeyBnZXRQcmVwYXJlZFJ1bGVzIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQ3VzdG9tUnVsZXNSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHJvb3QgID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xuXHRcdGNvbnN0IHJ1bGVzID0gSlNPTi5wYXJzZSggcm9vdC5kYXRhc2V0Py52YWxpZGF0aW9uUnVsZXMgPz8gJ1tdJyApO1xuXG5cdFx0aWYgKCAhQm9vbGVhbiggcnVsZXMubGVuZ3RoICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucyA9IFtcblx0XHRcdC4uLnJlcG9ydGluZy5yZXN0cmljdGlvbnMsXG5cdFx0XHQuLi5nZXRQcmVwYXJlZFJ1bGVzKCBydWxlcywgcmVwb3J0aW5nICksXG5cdFx0XTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcbn1cblxuQ3VzdG9tUnVsZXNSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb247IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XG5pbXBvcnQgeyBvYnNlcnZlRmllbGRSZXN0cmljdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIE1hdGNoUmVnZXhwKCkge1xuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3JlZ2V4cCc7XG5cdH07XG5cbn1cblxuTWF0Y2hSZWdleHAucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5NYXRjaFJlZ2V4cC5wcm90b3R5cGUuc2V0QXR0cnMgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzLmNhbGwoIHRoaXMsIGF0dHJzICk7XG5cdG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcbn07XG5NYXRjaFJlZ2V4cC5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdGlmICggIXZhbHVlICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoIHRoaXMuYXR0cnMudmFsdWUsICdnJyApO1xuXG5cdHJldHVybiByZWdleHAudGVzdCggdmFsdWUgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGNoUmVnZXhwOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgb2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBNdXN0Q29udGFpbkNoYXJhY3RlcnMoKSB7XG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2NvbnRhaW4nO1xuXHR9O1xuXG59XG5cbk11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcbk11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUuc2V0QXR0cnMgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzLmNhbGwoIHRoaXMsIGF0dHJzICk7XG5cdG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcbn07XG5cbk11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdHJldHVybiAhdmFsdWUgfHwgdmFsdWUuaW5jbHVkZXMoIHRoaXMuYXR0cnMudmFsdWUgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE11c3RDb250YWluQ2hhcmFjdGVyczsiLCJpbXBvcnQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uIGZyb20gJy4vQ3VzdG9tQmFzZVJlc3RyaWN0aW9uJztcbmltcG9ydCB7IG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gTXVzdEVxdWFsKCkge1xuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdlcXVhbCc7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlID09PSB0aGlzLmF0dHJzLnZhbHVlO1xuXHR9O1xufVxuXG5NdXN0RXF1YWwucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5NdXN0RXF1YWwucHJvdG90eXBlLnNldEF0dHJzID0gZnVuY3Rpb24gKCBhdHRycyApIHtcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRBdHRycy5jYWxsKCB0aGlzLCBhdHRycyApO1xuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdXN0RXF1YWw7IiwiaW1wb3J0IE11c3RDb250YWluQ2hhcmFjdGVycyBmcm9tICcuL011c3RDb250YWluQ2hhcmFjdGVycyc7XG5cbmZ1bmN0aW9uIE11c3ROb3RDb250YWluQ2hhcmFjdGVycygpIHtcblx0TXVzdENvbnRhaW5DaGFyYWN0ZXJzLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnY29udGFpbl9ub3QnO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCAhTXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZS52YWxpZGF0ZS5jYWxsKCB0aGlzICk7XG5cdH07XG59XG5cbk11c3ROb3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRNdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIE5vdENvbXBsZXRlSW5wdXRtYXNrKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlcl9fbWFza2VkLWZpZWxkJyApICYmXG5cdFx0XHRqUXVlcnkuZm4uaW5wdXRtYXNrXG5cdFx0KTtcblx0fTtcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXHRcdGNvbnN0IG5vZGUgID0gdGhpcy5yZXBvcnRpbmcuZ2V0Tm9kZSgpO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCBub2RlLmlucHV0bWFzay5pc0NvbXBsZXRlKCk7XG5cdH07XG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnaW5wdXRtYXNrJyApO1xuXHR9O1xufVxuXG5Ob3RDb21wbGV0ZUlucHV0bWFzay5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RDb21wbGV0ZUlucHV0bWFzazsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBOb3RFbWFpbCgpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAnZW1haWwnID09PSBub2RlLnR5cGU7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgL15bXFx3LVxcLlxcK10rQChbXFx3LV0rXFwuKStbXFx3LV17MSw2fSQvLnRlc3QoIHZhbHVlICk7XG5cdH07XG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZW1haWwnICk7XG5cdH07XG59XG5cbk5vdEVtYWlsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEVtYWlsOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmNvbnN0IHtcblx0ICAgICAgaXNFbXB0eSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuZnVuY3Rpb24gTm90RW1wdHlSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy50eXBlID0gJ3JlcXVpcmVkJztcbn1cblxuTm90RW1wdHlSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdHJldHVybiByZXBvcnRpbmcuaW5wdXQuaXNSZXF1aXJlZDtcbn07XG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRyZXR1cm4gIWlzRW1wdHkoIHZhbHVlICk7XG59O1xuTm90RW1wdHlSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2VtcHR5JyApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90RW1wdHlSZXN0cmljdGlvbjsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBOb3RFbm91Z2hDaGFycygpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21pbkxlbmd0aCcgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0Y29uc3QgeyBtaW5MZW5ndGggPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtaW5MZW5ndGg7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBsZW5ndGggICAgICAgID0gdGhpcy5nZXRWYWx1ZSgpPy5sZW5ndGg7XG5cdFx0Y29uc3QgeyBtaW5MZW5ndGggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuICFsZW5ndGggfHwgbGVuZ3RoID49ICttaW5MZW5ndGgudmFsdWUuY3VycmVudDtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2NoYXJfbWluJyApO1xuXHR9O1xufVxuXG5Ob3RFbm91Z2hDaGFycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RFbm91Z2hDaGFyczsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBOb3RFbm91Z2hOdW1iZXJzKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWluJyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHsgbWluID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiBmYWxzZSAhPT0gbWluICYmIFsgJ251bWJlcicsICdyYW5nZScgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSAgID0gdGhpcy5nZXRWYWx1ZSgpO1xuXHRcdGNvbnN0IHsgbWluIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgK3ZhbHVlID49ICttaW4udmFsdWUuY3VycmVudDtcblx0fTtcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdudW1iZXJfbWluJyApO1xuXHR9O1xufVxuXG5Ob3RFbm91Z2hOdW1iZXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEVub3VnaE51bWJlcnM7IiwiaW1wb3J0IE1hdGNoUmVnZXhwIGZyb20gJy4vTWF0Y2hSZWdleHAnO1xuXG5mdW5jdGlvbiBOb3RNYXRjaFJlZ2V4cCgpIHtcblx0TWF0Y2hSZWdleHAuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdyZWdleHBfbm90Jztcblx0fTtcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgIU1hdGNoUmVnZXhwLnByb3RvdHlwZS52YWxpZGF0ZS5jYWxsKCB0aGlzICk7XG5cdH07XG59XG5cbk5vdE1hdGNoUmVnZXhwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE1hdGNoUmVnZXhwLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RNYXRjaFJlZ2V4cDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBOb3RVcmwoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gJ3VybCcgPT09IG5vZGUudHlwZTtcblx0fTtcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdCF2YWx1ZSB8fCAvKChtYWlsdG9cXDp8KG5ld3N8KGh0fGYpdHAocz8pKVxcOlxcL1xcLylcXFMrKS8udGVzdCggdmFsdWUgKVxuXHRcdCk7XG5cdH07XG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAndXJsJyApO1xuXHR9O1xufVxuXG5Ob3RVcmwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90VXJsOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIFJlYWNoTGltaXRDaGFycygpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heExlbmd0aCcgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtYXhMZW5ndGg7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlICAgICAgICAgPSB0aGlzLmdldFZhbHVlKCk/Lmxlbmd0aDtcblx0XHRjb25zdCB7IG1heExlbmd0aCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlIDw9ICttYXhMZW5ndGgudmFsdWUuY3VycmVudDtcblx0fTtcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdjaGFyX21heCcgKTtcblx0fTtcbn1cblxuUmVhY2hMaW1pdENoYXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWNoTGltaXRDaGFyczsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBSZWFjaExpbWl0TnVtYmVycygpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heCcgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1heCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gZmFsc2UgIT09IG1heCAmJiBbICdudW1iZXInLCAncmFuZ2UnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgICA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRjb25zdCB7IG1heCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8ICt2YWx1ZSA8PSArbWF4LnZhbHVlLmN1cnJlbnQ7XG5cdH07XG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnbnVtYmVyX21heCcgKTtcblx0fTtcbn1cblxuUmVhY2hMaW1pdE51bWJlcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY2hMaW1pdE51bWJlcnM7IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xuXG5mdW5jdGlvbiBTZXJ2ZXJTaWRlQ2FsbGJhY2soKSB7XG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnICAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzc3InO1xuXHR9O1xuXHR0aGlzLmlzU2VydmVyU2lkZSAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0dGhpcy52YWxpZGF0ZVByb21pc2UgPSBhc3luYyBmdW5jdGlvbiAoIHNpZ25hbCA9IG51bGwgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQgKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuZ2V0Rm9ybURhdGEoKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUZldGNoKCB7XG5cdFx0XHRcdHBhdGg6ICcvamV0LWZvcm0tYnVpbGRlci92MS92YWxpZGF0ZS1maWVsZCcsXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHRzaWduYWxcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlPy5yZXN1bHQgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVqZWN0KCk7XG5cdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBpbnB1dCB9ICAgID0gdGhpcy5yZXBvcnRpbmc7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gaW5wdXQuZ2V0Um9vdCgpO1xuXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoIHJvb3ROb2RlICk7XG5cdFx0Zm9ybURhdGEuZGVsZXRlKCAnX3dwbm9uY2UnICk7XG5cdFx0Zm9ybURhdGEuc2V0KCAnX2pmYl92YWxpZGF0aW9uX3J1bGVfaW5kZXgnLCB0aGlzLmF0dHJzLmluZGV4ICk7XG5cdFx0Zm9yICggY29uc3QgcGF0aEVsZW1lbnQgb2YgaW5wdXQucGF0aCApIHtcblx0XHRcdGZvcm1EYXRhLmFwcGVuZCggJ19qZmJfdmFsaWRhdGlvbl9wYXRoW10nLCBwYXRoRWxlbWVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3JtRGF0YTtcblx0fTtcblxufVxuXG5TZXJ2ZXJTaWRlQ2FsbGJhY2sucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVDYWxsYmFjazsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7IGdldFRpbWVzdGFtcCB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIFRvb0Vhcmx5VGltZXN0YW1wKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWluJyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1pbiA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0ZmFsc2UgIT09IG1pbiAmJlxuXHRcdFx0WyAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKVxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtaW4gfSAgICAgICAgICAgPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblx0XHRjb25zdCB7IHRpbWUgfSAgICAgICAgICA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCB7IHRpbWU6IG1pblRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWluLnZhbHVlLmN1cnJlbnQgKTtcblxuXHRcdHJldHVybiB0aW1lID49IG1pblRpbWU7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21pbicgKTtcblx0fTtcbn1cblxuVG9vRWFybHlUaW1lc3RhbXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vRWFybHlUaW1lc3RhbXA7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuY29uc3QgeyBnZXRUaW1lc3RhbXAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBUb29MYXRlVGltZXN0YW1wKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4JyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1heCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0ZmFsc2UgIT09IG1heCAmJlxuXHRcdFx0WyAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKVxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtYXggfSAgICAgICAgICAgPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblx0XHRjb25zdCB7IHRpbWUgfSAgICAgICAgICA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCB7IHRpbWU6IG1heFRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWF4LnZhbHVlLmN1cnJlbnQgKTtcblxuXHRcdHJldHVybiB0aW1lIDw9IG1heFRpbWU7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21heCcgKTtcblx0fTtcbn1cblxuVG9vTGF0ZVRpbWVzdGFtcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb29MYXRlVGltZXN0YW1wOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFkdmFuY2VkUmVwb3J0aW5nIGZyb20gJy4vQWR2YW5jZWRSZXBvcnRpbmcnO1xuaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvQWR2YW5jZWRSZXN0cmljdGlvbic7XG5pbXBvcnQgTm90RW1wdHlSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbXB0eVJlc3RyaWN0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXG5cdCdqZXQtZm9ybS1idWlsZGVyL29ic2VydmUtZHluYW1pYy1hdHRycycsXG5cdC8qKlxuXHQgKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcblx0XHRvYnNlcnZhYmxlLmdldElucHV0cygpLmZvckVhY2goIGlucHV0ID0+IHtcblx0XHRcdGlmICggIShcblx0XHRcdFx0aW5wdXQucmVwb3J0aW5nIGluc3RhbmNlb2YgQWR2YW5jZWRSZXBvcnRpbmdcblx0XHRcdCkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlucHV0LnJlcG9ydGluZy5vYnNlcnZlQXR0cnMoKTtcblx0XHR9ICk7XG5cdH0sXG5cdDExLFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlcG9ydGluZycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2FkdmFuY2VkLXJlcG9ydGluZycsXG5cdGZ1bmN0aW9uICggcmVwb3J0aW5nICkge1xuXHRcdHJlcG9ydGluZyA9IFsgQWR2YW5jZWRSZXBvcnRpbmcsIC4uLnJlcG9ydGluZyBdO1xuXG5cdFx0cmV0dXJuIHJlcG9ydGluZztcblx0fSxcbik7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cblx0KSxcblx0QWR2YW5jZWRSZXN0cmljdGlvbixcblx0Tm90RW1wdHlSZXN0cmljdGlvbixcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9