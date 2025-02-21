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
  this.switchButtonsState(true);
  const callback = () => {
    this.input.getContext().setSilence(false);
    this.validate().then(() => {}).catch(() => {}).finally(() => {
      this.isProcess = null;
      const queue = [...this.queue];
      this.queue = [];
      if (!queue.length) {
        this.switchButtonsState();
        return;
      }
      this.valuePrev = null;
      queue.forEach(current => current());
      this.switchButtonsState();
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
  this.switchButtonsState(true);
  this.canSubmitForm(false);
  this.canTriggerEnterSubmit(false);
  this.input.getContext().setSilence(false);
  this.validate(signal).then(() => {}).catch(() => {}).finally(() => {
    this.skipServerSide = true;
    this.hasServerSide = false;
    this.isProcess = null;
    this.input.nodes[0].readOnly = false;
    if (!signal?.aborted) {
      this.switchButtonsState();
      this.canSubmitForm();
      if (this.validityState.current) {
        this.canTriggerEnterSubmit();
      }
    }
  });
};
AdvancedReporting.prototype.switchButtonsState = function (force = false) {
  const parentPage = this.input.nodes[0].closest('.jet-form-builder-page');
  if (parentPage && !this.input.getContext().silence) {
    const switchButtons = parentPage.querySelectorAll('.jet-form-builder__next-page, .jet-form-builder__prev-page, .jet-form-builder__action-button');
    for (const switchButton of switchButtons) {
      if (!switchButton.classList.contains('jet-form-builder__submit') && !this.isNodeBelongThis(switchButton)) {
        continue;
      }
      if (!switchButton.classList.contains('jet-form-builder__prev-page')) {
        switchButton.disabled = force === true || !this.validityState.current;
      } else {
        switchButton.disabled = force;
      }
    }
  }
};
AdvancedReporting.prototype.canTriggerEnterSubmit = function (canTrigger = true) {
  const form = this.input.root.form;
  if (form) {
    form.canTriggerEnterSubmit = canTrigger;
  }
};
AdvancedReporting.prototype.canSubmitForm = function (canSubmit = true) {
  const form = this.input.root.form;
  if (form) {
    form.canSubmitForm = canSubmit;
  }
};
AdvancedReporting.prototype.isNodeBelongThis = function (node) {
  const parentPage = node.closest('.jet-form-builder-page');
  return parentPage ? !parentPage.classList.contains('jet-form-builder-page--hidden') : false;
};
AdvancedReporting.prototype.validateOnChangeState = function () {
  if (this.isProcess) {
    return Promise.resolve();
  }
  this.switchButtonsState(true);
  this.canTriggerEnterSubmit(false);
  if (this.input.maskValidation) {
    this.input.changeStateMaskValidation();
  }
  this.isProcess = true;
  this.skipServerSide = false;
  return new Promise((resolve, reject) => {
    this.validate().then(resolve).catch(reject).finally(() => {
      this.skipServerSide = true;
      this.hasServerSide = false;
      this.isProcess = null;
      this.input.nodes[0].readOnly = false;
      this.switchButtonsState();
      this.canTriggerEnterSubmit();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL09BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL0FkdmFuY2VkUmVwb3J0aW5nLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9BZHZhbmNlZFJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvQ3VzdG9tUnVsZXNSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL01hdGNoUmVnZXhwLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTXVzdENvbnRhaW5DaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTXVzdEVxdWFsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90Q29tcGxldGVJbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RFbWFpbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVtcHR5UmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RFbm91Z2hDaGFycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVub3VnaE51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RNYXRjaFJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdFVybC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlYWNoTGltaXRDaGFycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlYWNoTGltaXROdW1iZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvU2VydmVyU2lkZUNhbGxiYWNrLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvVG9vRWFybHlUaW1lc3RhbXAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ub29MYXRlVGltZXN0YW1wLmpzIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImFwaUZldGNoXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRnZXRFcnJvck5vZGUsXG5cdGdldEluaGVyaXRWYWxpZGF0aW9uVHlwZSxcblx0Z2V0Tm9kZVZhbGlkYXRpb25UeXBlLFxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZXMsXG5cdGdldFdyYXBwZXIsXG5cdHNldFJlc3RyaWN0aW9ucyxcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIFJlcG9ydGluZ0ludGVyZmFjZSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIGFsbFJlamVjdGVkLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7QWR2YW5jZWRSZXN0cmljdGlvbn0gcmVzdHJpY3Rpb25zIExpc3Qgb2YgYWR2YW5jZWQgcmVzdHJpY3Rpb25zXG4gKlxuICogQHRoaXMge1JlcG9ydGluZ0ludGVyZmFjZX1cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBBZHZhbmNlZFJlcG9ydGluZygpIHtcblx0UmVwb3J0aW5nSW50ZXJmYWNlLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLnR5cGUgICAgICAgICAgID0gJ2luaGVyaXQnO1xuXHR0aGlzLm1lc3NhZ2VzICAgICAgID0ge307XG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBDb21wdXRlZCBwcm9wZXJ0eSB3aGljaCBjb250YWluIGFsbCBhdHRyc1xuXHQgKiBmb3IgYWxsIHN1cHBvcnRlZCByZXN0cmljdGlvbnNcblx0ICpcblx0ICogQHNlZSBBZHZhbmNlZFJlc3RyaWN0aW9uLm9uUmVhZHlcblx0ICpcblx0ICogQHR5cGUge3N0cmluZ1tdfVxuXHQgKi9cblx0dGhpcy53YXRjaEF0dHJzID0gW107XG5cblx0dGhpcy5xdWV1ZSA9IFtdO1xufVxuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlICk7XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5za2lwU2VydmVyU2lkZSA9IHRydWU7XG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pc1Byb2Nlc3MgICAgICA9IG51bGw7XG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUucXVldWUgICAgICAgICAgPSBbXTtcblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnNldFJlc3RyaWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0c2V0UmVzdHJpY3Rpb25zKCB0aGlzICk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0ICkge1xuXHR0aGlzLnR5cGUgPSBnZXROb2RlVmFsaWRhdGlvblR5cGUoIG5vZGUgKTtcblxuXHRjb25zdCBpbmhlcml0ID0gJ2luaGVyaXQnID09PSB0aGlzLnR5cGVcblx0ICAgICAgICAgICAgICAgID8gZ2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlKCBpbnB1dCApXG5cdCAgICAgICAgICAgICAgICA6IHRoaXMudHlwZTtcblxuXHRyZXR1cm4gISFpbmhlcml0Py5sZW5ndGg7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcywgc2lnbmFsID0gbnVsbCApIHtcblx0aWYgKCB0aGlzLmhhc1NlcnZlclNpZGUgKSB7XG5cdFx0dGhpcy5pbnB1dC5sb2FkaW5nLnN0YXJ0KCk7XG5cdH1cblxuXHRsZXQgZXJyb3JzID0gYXdhaXQgYWxsUmVqZWN0ZWQoIHByb21pc2VzICk7XG5cblx0dGhpcy52YWx1ZVByZXYgPSB0aGlzLmlucHV0LmdldFZhbHVlKCk7XG5cblx0aWYgKCB0aGlzLmhhc1NlcnZlclNpZGUgKSB7XG5cdFx0dGhpcy5pbnB1dC5sb2FkaW5nLmVuZCgpO1xuXHR9XG5cblx0aWYgKCBzaWduYWw/LmFib3J0ZWQgKSB7XG5cdFx0ZXJyb3JzID0gW107XG5cdH1cblxuXHRyZXR1cm4gZXJyb3JzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gdmFsaWRhdGlvbkVycm9ycyB7QWR2YW5jZWRSZXN0cmljdGlvbltdfFJlc3RyaWN0aW9uW119XG4gKi9cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5yZXBvcnRSYXcgPSBmdW5jdGlvbiAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdGxldCBtZXNzYWdlID0gJyc7XG5cblx0Zm9yICggY29uc3QgdmFsaWRhdGlvbkVycm9yIG9mIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0bWVzc2FnZSA9IHZhbGlkYXRpb25FcnJvci5nZXRNZXNzYWdlKCk7XG5cblx0XHRpZiAoIG1lc3NhZ2U/Lmxlbmd0aCApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIW1lc3NhZ2UgKSB7XG5cdFx0dGhpcy5jbGVhclJlcG9ydCgpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5pbnNlcnRFcnJvciggbWVzc2FnZSApO1xufTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdHRoaXMubWVzc2FnZXMgPSBnZXRWYWxpZGF0aW9uTWVzc2FnZXMoIGlucHV0Lm5vZGVzWyAwIF0gKTtcblxuXHRSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG59O1xuLyoqXG4gKiBAc2luY2UgMy4wLjUgSW50cm9kdWNlZFxuICovXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUub2JzZXJ2ZUF0dHJzID0gZnVuY3Rpb24gKCkge1xuXHRmb3IgKCBjb25zdCB3YXRjaEF0dHIgb2YgdGhpcy53YXRjaEF0dHJzICkge1xuXHRcdGlmICggIXRoaXMuaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoIHdhdGNoQXR0ciApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtCYXNlSHRtbEF0dHJ9XG5cdFx0ICovXG5cdFx0Y29uc3QgYXR0ciA9IHRoaXMuaW5wdXQuYXR0cnNbIHdhdGNoQXR0ciBdO1xuXG5cdFx0YXR0ci52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZVByZXYgPSBudWxsO1xuXHRcdFx0dGhpcy52YWxpZGF0ZU9uQmx1cigpO1xuXHRcdH0gKTtcblx0fVxufTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jbGVhclJlcG9ydCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgaW5uZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XG5cblx0XHRpZiAoICFub2RlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2ZpZWxkLWhhcy1lcnJvcicgKTtcblxuXHRcdGNvbnN0IGVycm9yID0gZ2V0RXJyb3JOb2RlKCBub2RlICk7XG5cblx0XHRpZiAoICFlcnJvciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlcnJvci5yZW1vdmUoKTtcblx0fTtcblx0aW5uZXIoKTtcblx0dGhpcy5tYWtlVmFsaWQoKTtcbn07XG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaW5zZXJ0RXJyb3IgPSBmdW5jdGlvbiAoIG1lc3NhZ2UgKSB7XG5cdGNvbnN0IGlubmVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5vZGUgID0gZ2V0V3JhcHBlciggdGhpcy5nZXROb2RlKCkgKTtcblx0XHRjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoIG5vZGUsIG1lc3NhZ2UgKTtcblxuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggJ2ZpZWxkLWhhcy1lcnJvcicgKTtcblxuXHRcdGlmICggZXJyb3IuaXNDb25uZWN0ZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gaXQgY2FuIGJlIG9uIGZpZWxkc19sYXlvdXQgPT09ICdyb3cnXG5cdFx0Y29uc3QgY29sRW5kID0gbm9kZS5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItY29sX19lbmQnICk7XG5cblx0XHRpZiAoIGNvbEVuZCApIHtcblx0XHRcdGNvbEVuZC5hcHBlbmRDaGlsZCggZXJyb3IgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRub2RlLmFwcGVuZENoaWxkKCBlcnJvciApO1xuXHRcdH1cblx0fTtcblx0aW5uZXIoKTtcblx0dGhpcy5tYWtlSW52YWxpZCgpO1xufTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jcmVhdGVFcnJvciA9IGZ1bmN0aW9uIChcblx0bm9kZSwgbWVzc2FnZSApIHtcblx0Y29uc3QgZXJyb3IgPSBnZXRFcnJvck5vZGUoIG5vZGUgKTtcblxuXHRpZiAoIGVycm9yICkge1xuXHRcdGVycm9yLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cblx0XHRyZXR1cm4gZXJyb3I7XG5cdH1cblxuXHRjb25zdCBpbnB1dE5vZGUgPSB0aGlzLmdldE5vZGUoKTtcblx0Y29uc3QgZGl2ICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXHRkaXYuY2xhc3NMaXN0LmFkZCggJ2Vycm9yLW1lc3NhZ2UnICk7XG5cdGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRkaXYuaWQgICAgICAgID0gaW5wdXROb2RlLmlkICsgJ19fZXJyb3InO1xuXG5cdHJldHVybiBkaXY7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUubWFrZUludmFsaWQgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHdyYXBwZXIgICA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XG5cdGNvbnN0IGVycm9yTm9kZSA9IGdldEVycm9yTm9kZSggd3JhcHBlciApO1xuXG5cdHRoaXMuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZSggJ2FyaWEtaW52YWxpZCcsICd0cnVlJyApO1xuXHR0aGlzLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXG5cdFx0J2FyaWEtZGVzY3JpYmVkYnknLFxuXHRcdGVycm9yTm9kZT8uaWQgPz8gZmFsc2UsXG5cdCk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUubWFrZVZhbGlkID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmdldE5vZGUoKS5yZW1vdmVBdHRyaWJ1dGUoICdhcmlhLWludmFsaWQnICk7XG5cdHRoaXMuZ2V0Tm9kZSgpLnJlbW92ZUF0dHJpYnV0ZSggJ2FyaWEtZGVzY3JpYmVkYnknICk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICggYWRkVG9RdWV1ZSA9IGZhbHNlICkge1xuXG5cdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XG5cblx0Y29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2V0U2lsZW5jZSggZmFsc2UgKTtcblxuXHRcdHRoaXMudmFsaWRhdGUoKS5cblx0XHRcdHRoZW4oICgpID0+IHt9ICkuXG5cdFx0XHRjYXRjaCggKCkgPT4ge30gKS5cblx0XHRcdGZpbmFsbHkoICgpID0+IHtcblx0XHRcdFx0dGhpcy5pc1Byb2Nlc3MgPSBudWxsO1xuXG5cdFx0XHRcdGNvbnN0IHF1ZXVlID0gWyAuLi50aGlzLnF1ZXVlIF07XG5cdFx0XHRcdHRoaXMucXVldWUgID0gW107XG5cblx0XHRcdFx0aWYgKCAhcXVldWUubGVuZ3RoICkge1xuXHRcdFx0XHRcdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy52YWx1ZVByZXYgPSBudWxsO1xuXHRcdFx0XHRxdWV1ZS5mb3JFYWNoKCBjdXJyZW50ID0+IGN1cnJlbnQoKSApO1xuXG5cdFx0XHRcdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCk7XG5cdFx0XHR9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE3NjZcblx0ICovXG5cdGlmICggYWRkVG9RdWV1ZSAmJiB0aGlzLmlzUHJvY2VzcyApIHtcblx0XHR0aGlzLnF1ZXVlID0gWyBjYWxsYmFjayBdO1xuXHR9XG5cblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmlzUHJvY2VzcyA9IHRydWU7XG5cblx0Y2FsbGJhY2soKTtcbn07XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS52YWxpZGF0ZU9uQmx1ciA9IGZ1bmN0aW9uICggc2lnbmFsID0gbnVsbCApIHtcblx0LyoqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE3NjZcblx0ICovXG5cdGlmICggdGhpcy5pc1Byb2Nlc3MgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IHRydWU7XG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSBmYWxzZTtcblxuXHR0aGlzLnN3aXRjaEJ1dHRvbnNTdGF0ZSggdHJ1ZSApO1xuXHR0aGlzLmNhblN1Ym1pdEZvcm0oIGZhbHNlICk7XG5cdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0KCBmYWxzZSApO1xuXG5cdHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNldFNpbGVuY2UoIGZhbHNlICk7XG5cblx0dGhpcy52YWxpZGF0ZSggc2lnbmFsICkuXG5cdFx0dGhlbiggKCkgPT4ge30gKS5cblx0XHRjYXRjaCggKCkgPT4ge30gKS5cblx0XHRmaW5hbGx5KCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gdHJ1ZTtcblx0XHRcdHRoaXMuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcblx0XHRcdHRoaXMuaXNQcm9jZXNzICAgICAgPSBudWxsO1xuXG5cdFx0XHR0aGlzLmlucHV0Lm5vZGVzWzBdLnJlYWRPbmx5ID0gZmFsc2U7XG5cblx0XHRcdGlmICggIXNpZ25hbD8uYWJvcnRlZCApIHtcblx0XHRcdFx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoKTtcblx0XHRcdFx0dGhpcy5jYW5TdWJtaXRGb3JtKCk7XG5cblx0XHRcdFx0aWYgKCB0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcblx0XHRcdFx0XHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xufTtcblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnN3aXRjaEJ1dHRvbnNTdGF0ZSA9IGZ1bmN0aW9uKCBmb3JjZSA9IGZhbHNlICkge1xuXHRjb25zdCBwYXJlbnRQYWdlID0gdGhpcy5pbnB1dC5ub2Rlc1swXS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcGFnZScgKTtcblxuXHRpZiAoIHBhcmVudFBhZ2UgJiYgIXRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNpbGVuY2UgKSB7XG5cdFx0Y29uc3Qgc3dpdGNoQnV0dG9ucyA9IHBhcmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fbmV4dC1wYWdlLCAuamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlLCAuamV0LWZvcm0tYnVpbGRlcl9fYWN0aW9uLWJ1dHRvbidcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3Qgc3dpdGNoQnV0dG9uIG9mIHN3aXRjaEJ1dHRvbnMgKSB7XG5cblx0XHRcdGlmICggIXN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyX19zdWJtaXQnICkgJiYgIXRoaXMuaXNOb2RlQmVsb25nVGhpcyggc3dpdGNoQnV0dG9uICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICFzd2l0Y2hCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdqZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UnKSApIHtcblx0XHRcdFx0c3dpdGNoQnV0dG9uLmRpc2FibGVkID0gZm9yY2UgPT09IHRydWUgfHwgIXRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3dpdGNoQnV0dG9uLmRpc2FibGVkID0gZm9yY2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSBmdW5jdGlvbiggY2FuVHJpZ2dlciA9IHRydWUgKSB7XG5cdGNvbnN0IGZvcm0gPSB0aGlzLmlucHV0LnJvb3QuZm9ybTtcblxuXHRpZiAoIGZvcm0gKSB7XG5cdFx0Zm9ybS5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSBjYW5UcmlnZ2VyO1xuXHR9XG59XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jYW5TdWJtaXRGb3JtID0gZnVuY3Rpb24oIGNhblN1Ym1pdCA9IHRydWUgKSB7XG5cdGNvbnN0IGZvcm0gPSB0aGlzLmlucHV0LnJvb3QuZm9ybTtcblxuXHRpZiAoIGZvcm0gKSB7XG5cdFx0Zm9ybS5jYW5TdWJtaXRGb3JtID0gY2FuU3VibWl0O1xuXHR9XG59XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pc05vZGVCZWxvbmdUaGlzID0gZnVuY3Rpb24oIG5vZGUgKSB7XG5cdGNvbnN0IHBhcmVudFBhZ2UgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1wYWdlJyApO1xuXG5cdHJldHVybiBwYXJlbnRQYWdlID8gIXBhcmVudFBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICkgOiBmYWxzZTtcbn1cblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHR0aGlzLnN3aXRjaEJ1dHRvbnNTdGF0ZSggdHJ1ZSApO1xuXHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCggZmFsc2UgKTtcblxuXHRpZiAoIHRoaXMuaW5wdXQubWFza1ZhbGlkYXRpb24gKSB7XG5cdFx0dGhpcy5pbnB1dC5jaGFuZ2VTdGF0ZU1hc2tWYWxpZGF0aW9uKCk7XG5cdH1cblxuXHR0aGlzLmlzUHJvY2VzcyAgICAgID0gdHJ1ZTtcblx0dGhpcy5za2lwU2VydmVyU2lkZSA9IGZhbHNlO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0dGhpcy52YWxpZGF0ZSgpLnRoZW4oIHJlc29sdmUgKS5jYXRjaCggcmVqZWN0ICkuZmluYWxseShcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0dGhpcy5za2lwU2VydmVyU2lkZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IG51bGw7XG5cblx0XHRcdFx0dGhpcy5pbnB1dC5ub2Rlc1swXS5yZWFkT25seSA9IGZhbHNlO1xuXG5cdFx0XHRcdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCk7XG5cdFx0XHRcdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0KCk7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH0gKTtcbn07XG5cbi8qKlxuICogQHBhcmFtICByZXN0cmljdGlvbiB7QWR2YW5jZWRSZXN0cmljdGlvbnxSZXN0cmljdGlvbn1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jYW5Qcm9jZXNzUmVzdHJpY3Rpb24gPSBmdW5jdGlvbiAoIHJlc3RyaWN0aW9uICkge1xuXHRyZXR1cm4gKFxuXHRcdC8vIGFsbG93IGFsbFxuXHRcdCF0aGlzLnNraXBTZXJ2ZXJTaWRlIHx8XG5cdFx0Ly8gb3Igb25seSBub3QtU2VydmVyU2lkZVxuXHRcdCFyZXN0cmljdGlvbi5pc1NlcnZlclNpZGUoKVxuXHQpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gcmVzdHJpY3Rpb24ge0FkdmFuY2VkUmVzdHJpY3Rpb258UmVzdHJpY3Rpb259XG4gKi9cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5iZWZvcmVQcm9jZXNzUmVzdHJpY3Rpb24gPSBmdW5jdGlvbiAoIHJlc3RyaWN0aW9uICkge1xuXHR0aGlzLmhhc1NlcnZlclNpZGUgPSByZXN0cmljdGlvbi5pc1NlcnZlclNpZGUoKSA/IHRydWUgOiB0aGlzLmhhc1NlcnZlclNpZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJlcG9ydGluZztcbiIsImltcG9ydCBSZWFjaExpbWl0TnVtYmVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZWFjaExpbWl0TnVtYmVycyc7XG5pbXBvcnQgTm90RW5vdWdoTnVtYmVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbm91Z2hOdW1iZXJzJztcbmltcG9ydCBOb3RVcmwgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90VXJsJztcbmltcG9ydCBOb3RFbWFpbCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbWFpbCc7XG5pbXBvcnQgTm90RW5vdWdoQ2hhcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW5vdWdoQ2hhcnMnO1xuaW1wb3J0IFJlYWNoTGltaXRDaGFycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZWFjaExpbWl0Q2hhcnMnO1xuaW1wb3J0IE5vdEVtcHR5UmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW1wdHlSZXN0cmljdGlvbic7XG5pbXBvcnQgTm90Q29tcGxldGVJbnB1dG1hc2sgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90Q29tcGxldGVJbnB1dG1hc2snO1xuaW1wb3J0IEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvQ3VzdG9tUnVsZXNSZXN0cmljdGlvbic7XG5pbXBvcnQgTXVzdENvbnRhaW5DaGFyYWN0ZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL011c3RDb250YWluQ2hhcmFjdGVycyc7XG5pbXBvcnQgTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL011c3ROb3RDb250YWluQ2hhcmFjdGVycyc7XG5pbXBvcnQgTWF0Y2hSZWdleHAgZnJvbSAnLi9yZXN0cmljdGlvbnMvTWF0Y2hSZWdleHAnO1xuaW1wb3J0IE5vdE1hdGNoUmVnZXhwIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdE1hdGNoUmVnZXhwJztcbmltcG9ydCBTZXJ2ZXJTaWRlQ2FsbGJhY2sgZnJvbSAnLi9yZXN0cmljdGlvbnMvU2VydmVyU2lkZUNhbGxiYWNrJztcbmltcG9ydCBNdXN0RXF1YWwgZnJvbSAnLi9yZXN0cmljdGlvbnMvTXVzdEVxdWFsJztcbmltcG9ydCBUb29FYXJseVRpbWVzdGFtcCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ub29FYXJseVRpbWVzdGFtcCc7XG5pbXBvcnQgVG9vTGF0ZVRpbWVzdGFtcCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ub29MYXRlVGltZXN0YW1wJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5jb25zdCBnZXRBZHZhbmNlZFJ1bGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmFkdmFuY2VkLnJ1bGVzJyxcblx0W1xuXHRcdE11c3RDb250YWluQ2hhcmFjdGVycyxcblx0XHRNdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMsXG5cdFx0TWF0Y2hSZWdleHAsXG5cdFx0Tm90TWF0Y2hSZWdleHAsXG5cdFx0U2VydmVyU2lkZUNhbGxiYWNrLFxuXHRcdE11c3RFcXVhbCxcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUge0FycmF5PEN1c3RvbUJhc2VSZXN0cmljdGlvbj59XG4gKi9cbmxldCBhZHZhbmNlZFJ1bGVzID0gW107XG5cbmNvbnN0IGdldFJlc3RyaWN0aW9ucyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxuXHRbXG5cdFx0VG9vRWFybHlUaW1lc3RhbXAsXG5cdFx0VG9vTGF0ZVRpbWVzdGFtcCxcblx0XHRSZWFjaExpbWl0TnVtYmVycyxcblx0XHROb3RFbm91Z2hOdW1iZXJzLFxuXHRcdE5vdFVybCxcblx0XHROb3RFbWFpbCxcblx0XHROb3RDb21wbGV0ZUlucHV0bWFzayxcblx0XHROb3RFbm91Z2hDaGFycyxcblx0XHRSZWFjaExpbWl0Q2hhcnMsXG5cdFx0Tm90RW1wdHlSZXN0cmljdGlvbixcblx0XHRDdXN0b21SdWxlc1Jlc3RyaWN0aW9uLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7UmVzdHJpY3Rpb25bXX1cbiAqL1xubGV0IHJlc3RyaWN0aW9ucyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQcmVwYXJlZFJ1bGVzKCBydWxlcywgcmVwb3J0aW5nICkge1xuXHRjb25zdCByZXNwb25zZSA9IFtdO1xuXG5cdGlmICggIWFkdmFuY2VkUnVsZXMubGVuZ3RoICkge1xuXHRcdGFkdmFuY2VkUnVsZXMgPSBnZXRBZHZhbmNlZFJ1bGVzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBbIGluZGV4LCBydWxlIF0gb2YgT2JqZWN0LmVudHJpZXMoIHJ1bGVzICkgKSB7XG5cdFx0Zm9yICggY29uc3QgYWR2YW5jZWRSdWxlIG9mIGFkdmFuY2VkUnVsZXMgKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGFkdmFuY2VkUnVsZSgpO1xuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRpZiAoIHJ1bGUudHlwZSAhPT0gY3VycmVudC5nZXRTbHVnKCkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHJ1bGUudHlwZTtcblxuXHRcdFx0Y3VycmVudC5zZXRSZXBvcnRpbmcoIHJlcG9ydGluZyApO1xuXHRcdFx0Y3VycmVudC5zZXRBdHRycyggeyAuLi5ydWxlLCBpbmRleCB9ICk7XG5cdFx0XHRjdXJyZW50Lm9uUmVhZHkoKTtcblxuXHRcdFx0cmVzcG9uc2UucHVzaCggY3VycmVudCApO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZ2V0V3JhcHBlciggbm9kZSApIHtcblx0cmV0dXJuIG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVWYWxpZGF0aW9uVHlwZSggbm9kZSApIHtcblx0Y29uc3Qgd3JhcHBlciAgICAgICAgICAgICAgICAgPSBnZXRXcmFwcGVyKCBub2RlICk7XG5cdGNvbnN0IHsgdmFsaWRhdGlvblR5cGUgPSAnJyB9ID0gd3JhcHBlcj8uZGF0YXNldCA/PyB7fTtcblxuXHRyZXR1cm4gdmFsaWRhdGlvblR5cGU7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG4gKi9cbmZ1bmN0aW9uIGdldEluaGVyaXRWYWxpZGF0aW9uVHlwZSggaW5wdXQgKSB7XG5cdGNvbnN0IGFsbEZvcm1zID0gd2luZG93Py5KZXRGb3Jtc1ZhbGlkYXRpb24gPz8gZmFsc2U7XG5cblx0aWYgKCBmYWxzZSA9PT0gYWxsRm9ybXMgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgZm9ybUlkICAgICAgICA9IGlucHV0LmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xuXHRjb25zdCB7IHR5cGUgPSAnJyB9ID0gYWxsRm9ybXNbIGZvcm1JZCBdID8/IHt9O1xuXG5cdHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWVzc2FnZXMoIG5vZGUgKSB7XG5cdGNvbnN0IHdyYXBwZXIgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0V3JhcHBlciggbm9kZSApO1xuXHRjb25zdCB7IHZhbGlkYXRpb25NZXNzYWdlcyA9ICd7fScgfSA9IHdyYXBwZXI/LmRhdGFzZXQgPz8ge307XG5cblx0cmV0dXJuIEpTT04ucGFyc2UoIHZhbGlkYXRpb25NZXNzYWdlcyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxuICogQHBhcmFtICBzbHVnICAgICAgICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRNZXNzYWdlQnlTbHVnKCByZXN0cmljdGlvbiwgc2x1ZyApIHtcblx0Y29uc3QgeyByZXBvcnRpbmcgfSA9IHJlc3RyaWN0aW9uO1xuXHRjb25zdCBtZXNzYWdlICAgICAgID0gcmVwb3J0aW5nLm1lc3NhZ2VzWyBzbHVnIF0gPz8gJyc7XG5cblx0aWYgKCBtZXNzYWdlICkge1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9XG5cblx0Y29uc3QgYWxsTWVzc2FnZXMgPSB3aW5kb3c/LkpldEZvcm1zVmFsaWRhdGlvbiA/PyBmYWxzZTtcblxuXHRpZiAoIGZhbHNlID09PSBhbGxNZXNzYWdlcyApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBmb3JtICAgICAgICAgPSByZXBvcnRpbmcuaW5wdXQuZ2V0U3VibWl0KCk7XG5cdGNvbnN0IHsgbWVzc2FnZXMgfSA9IGFsbE1lc3NhZ2VzWyBmb3JtLmdldEZvcm1JZCgpIF0gPz8ge307XG5cblx0cmV0dXJuIG1lc3NhZ2VzWyBzbHVnIF0gPz8gJyc7XG59XG5cbi8qKlxuICogQHRoaXMge0N1c3RvbUJhc2VSZXN0cmljdGlvbn1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24oKSB7XG5cdGlmICggIXRoaXMuYXR0cnM/LmZpZWxkICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCB7IHJvb3QgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0O1xuXHRjb25zdCBpbnB1dCAgICA9IHJvb3QuZ2V0SW5wdXQoIHRoaXMuYXR0cnMuZmllbGQgKTtcblxuXHRpbnB1dC53YXRjaCggKCkgPT4ge1xuXHRcdHRoaXMuYXR0cnMudmFsdWUgPSBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogSGVyZSB3ZSBuZWVkIHRvIHJlc2V0IHRoZSBgdmFsdWVQcmV2YCBwcm9wZXJ0eSxcblx0XHQgKiBiZWNhdXNlIHJlcG9ydGluZyBsb2dpYyByZW1lbWJlciBwcmV2aW91cyB2YWx1ZSwgd2hpY2ggaXQgY2hlY2suXG5cdFx0ICpcblx0XHQgKiBBbmQgaWYgLnZhbHVlUHJldiA9PT0gLmN1cnJlbnQudmFsdWUgLT4gcmVwb3J0aW5nIHdpbGwgYmUgc2tpcHBlZFxuXHRcdCAqXG5cdFx0ICogQHNlZSBBZHZhbmNlZFJlcG9ydGluZy5nZXRFcnJvcnNcblx0XHQgKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5oYXNDaGFuZ2VkVmFsdWVcblx0XHQgKiBAdHlwZSB7bnVsbH1cblx0XHQgKi9cblx0XHR0aGlzLnJlcG9ydGluZy52YWx1ZVByZXYgPSBudWxsO1xuXHRcdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2UoKTtcblx0fSApO1xuXG5cdGlmICggIWlzRW1wdHkoIGlucHV0LnZhbHVlLmN1cnJlbnQgKSApIHtcblx0XHR0aGlzLmF0dHJzLnZhbHVlID0gaW5wdXQudmFsdWUuY3VycmVudDtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cbiAqL1xuZnVuY3Rpb24gc2V0UmVzdHJpY3Rpb25zKCByZXBvcnRpbmcgKSB7XG5cdGlmICggIXJlc3RyaWN0aW9ucy5sZW5ndGggKSB7XG5cdFx0cmVzdHJpY3Rpb25zID0gZ2V0UmVzdHJpY3Rpb25zKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCByZXN0cmljdGlvbiBvZiByZXN0cmljdGlvbnMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXN0cmljdGlvbigpO1xuXG5cdFx0aWYgKFxuXHRcdFx0IWN1cnJlbnQuaXNTdXBwb3J0ZWQoIHJlcG9ydGluZy5nZXROb2RlKCksIHJlcG9ydGluZyApXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y3VycmVudC5zZXRSZXBvcnRpbmcoIHJlcG9ydGluZyApO1xuXHRcdGN1cnJlbnQub25SZWFkeSgpO1xuXG5cdFx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5wdXNoKCBjdXJyZW50ICk7XG5cdH1cbn1cblxuLyoqXG4gKiBZb3UgY2Fubm90IHVzZSBub2RlLnF1ZXJ5U2VsZWN0b3IgaW4gdGhpcyBmdW5jdGlvbixcbiAqIGJlY2F1c2UgdGhlIFJlcGVhdGVyIEZpZWxkIHZhbGlkYXRpb24gd2lsbCByZXR1cm5cbiAqIGFuIGVycm9yIGVsZW1lbnQgZnJvbSB0aGUgaW50ZXJuYWwgZmllbGQuXG4gKlxuICogQHBhcmFtICB3cmFwcGVyIHtFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXRFcnJvck5vZGUoIHdyYXBwZXIgKSB7XG5cdGZvciAoIGNvbnN0IGNoaWxkIG9mIHdyYXBwZXIuY2hpbGRyZW4gKSB7XG5cdFx0aWYgKCAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZXJyb3ItbWVzc2FnZScgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH1cblxuXHRjb25zdCBjb2xFbmROb2RlID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1jb2xfX2VuZCcsXG5cdCk7XG5cblx0aWYgKCAhY29sRW5kTm9kZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gZ2V0RXJyb3JOb2RlKCBjb2xFbmROb2RlICk7XG59XG5cbmV4cG9ydCB7XG5cdGdldE5vZGVWYWxpZGF0aW9uVHlwZSxcblx0Z2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlLFxuXHRnZXRNZXNzYWdlQnlTbHVnLFxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZXMsXG5cdGdldFByZXBhcmVkUnVsZXMsXG5cdHNldFJlc3RyaWN0aW9ucyxcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24sXG5cdGdldFdyYXBwZXIsXG5cdGdldEVycm9yTm9kZSxcbn07IiwiaW1wb3J0IHsgZ2V0TWVzc2FnZUJ5U2x1ZyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgUmVzdHJpY3Rpb24sXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBBZHZhbmNlZFJlc3RyaWN0aW9uKCkge1xuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5tZXNzYWdlICAgICAgPSAnJztcblx0dGhpcy5mb3JtdWxhICAgICAgPSBudWxsO1xuXHR0aGlzLndhdGNoZWRBdHRycyA9IFtdO1xufVxuXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5tZXNzYWdlID0gJyc7XG4vKipcbiAqIEB0eXBlIHtDYWxjdWxhdGVkRm9ybXVsYX1cbiAqL1xuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZm9ybXVsYSA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUud2F0Y2hlZEF0dHJzID0gW107XG5cbi8qKlxuICogSWYgcmV0dXJucyB0cnVlIC0+IHZhbGlkYXRpb24gd2lsbCBiZVxuICogc3RhcnRlZCB3aXRoIDEwMDAgbXMgZGVsYXlcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1NlcnZlclNpZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm1lc3NhZ2U7XG59O1xuLyoqXG4gKiBIZXJlIHlvdSBuZWVkIHRvIHJldHVybiBhIHByZXBhcmVkIG1lc3NhZ2UsXG4gKiB3aXRoIHByb2Nlc3NlZCBtYWNyb3NcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAnRXJyb3InO1xufTtcbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldE1lc3NhZ2VCeVNsdWcgPSBmdW5jdGlvbiAoIHNsdWcgKSB7XG5cdHJldHVybiBnZXRNZXNzYWdlQnlTbHVnKCB0aGlzLCBzbHVnICk7XG59O1xuXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMucmVwb3J0aW5nLmlucHV0ICk7XG5cblx0dGhpcy5mb3JtdWxhLm9ic2VydmUoIHRoaXMuZ2V0UmF3TWVzc2FnZSgpICk7XG5cdHRoaXMuZm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5mb3JtdWxhLmNhbGN1bGF0ZVN0cmluZygpO1xuXHR9O1xuXHR0aGlzLmZvcm11bGEuc2V0UmVzdWx0KCk7XG5cblx0aWYgKCAhdGhpcy53YXRjaGVkQXR0cnMubGVuZ3RoICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMucmVwb3J0aW5nLndhdGNoQXR0cnMgPSBbXG5cdFx0Li4ubmV3IFNldCggW1xuXHRcdFx0Li4udGhpcy5yZXBvcnRpbmcud2F0Y2hBdHRycyxcblx0XHRcdC4uLnRoaXMud2F0Y2hlZEF0dHJzLFxuXHRcdF0gKSxcblx0XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUmVzdHJpY3Rpb247XG5cblxuIiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gQ3VzdG9tQmFzZVJlc3RyaWN0aW9uKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJzID0ge307XG59XG5cbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5cbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuYXR0cnMgICAgICAgICA9IHt9O1xuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRBdHRycyAgICAgID0gZnVuY3Rpb24gKCBhdHRycyApIHtcblx0dGhpcy5hdHRycyA9IGF0dHJzO1xufTtcbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0U2x1ZyAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCAneW91IG5lZWQgdG8gcmV0dXJuIHNsdWcgb2YgcnVsZScgKTtcbn07XG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmF0dHJzPy5tZXNzYWdlID8/ICcnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmltcG9ydCB7IGdldFByZXBhcmVkUnVsZXMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBDdXN0b21SdWxlc1Jlc3RyaWN0aW9uKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0Y29uc3Qgcm9vdCAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XG5cdFx0Y29uc3QgcnVsZXMgPSBKU09OLnBhcnNlKCByb290LmRhdGFzZXQ/LnZhbGlkYXRpb25SdWxlcyA/PyAnW10nICk7XG5cblx0XHRpZiAoICFCb29sZWFuKCBydWxlcy5sZW5ndGggKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zID0gW1xuXHRcdFx0Li4ucmVwb3J0aW5nLnJlc3RyaWN0aW9ucyxcblx0XHRcdC4uLmdldFByZXBhcmVkUnVsZXMoIHJ1bGVzLCByZXBvcnRpbmcgKSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5DdXN0b21SdWxlc1Jlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUnVsZXNSZXN0cmljdGlvbjsiLCJpbXBvcnQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uIGZyb20gJy4vQ3VzdG9tQmFzZVJlc3RyaWN0aW9uJztcbmltcG9ydCB7IG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gTWF0Y2hSZWdleHAoKSB7XG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAncmVnZXhwJztcblx0fTtcblxufVxuXG5NYXRjaFJlZ2V4cC5wcm90b3R5cGUgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcbk1hdGNoUmVnZXhwLnByb3RvdHlwZS5zZXRBdHRycyA9IGZ1bmN0aW9uICggYXR0cnMgKSB7XG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMuY2FsbCggdGhpcywgYXR0cnMgKTtcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xufTtcbk1hdGNoUmVnZXhwLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0Y29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCggdGhpcy5hdHRycy52YWx1ZSwgJ2cnICk7XG5cblx0cmV0dXJuIHJlZ2V4cC50ZXN0KCB2YWx1ZSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hSZWdleHA7IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XG5pbXBvcnQgeyBvYnNlcnZlRmllbGRSZXN0cmljdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIE11c3RDb250YWluQ2hhcmFjdGVycygpIHtcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnY29udGFpbic7XG5cdH07XG5cbn1cblxuTXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZSAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUsXG4pO1xuTXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZS5zZXRBdHRycyA9IGZ1bmN0aW9uICggYXR0cnMgKSB7XG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMuY2FsbCggdGhpcywgYXR0cnMgKTtcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xufTtcblxuTXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0cmV0dXJuICF2YWx1ZSB8fCB2YWx1ZS5pbmNsdWRlcyggdGhpcy5hdHRycy52YWx1ZSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVzdENvbnRhaW5DaGFyYWN0ZXJzOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgb2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBNdXN0RXF1YWwoKSB7XG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2VxdWFsJztcblx0fTtcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPT09IHRoaXMuYXR0cnMudmFsdWU7XG5cdH07XG59XG5cbk11c3RFcXVhbC5wcm90b3R5cGUgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcbk11c3RFcXVhbC5wcm90b3R5cGUuc2V0QXR0cnMgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzLmNhbGwoIHRoaXMsIGF0dHJzICk7XG5cdG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE11c3RFcXVhbDsiLCJpbXBvcnQgTXVzdENvbnRhaW5DaGFyYWN0ZXJzIGZyb20gJy4vTXVzdENvbnRhaW5DaGFyYWN0ZXJzJztcblxuZnVuY3Rpb24gTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzKCkge1xuXHRNdXN0Q29udGFpbkNoYXJhY3RlcnMuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdjb250YWluX25vdCc7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8ICFNdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwoIHRoaXMgKTtcblx0fTtcbn1cblxuTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdE11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNdXN0Tm90Q29udGFpbkNoYXJhY3RlcnM7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gTm90Q29tcGxldGVJbnB1dG1hc2soKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0bm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyX19tYXNrZWQtZmllbGQnICkgJiZcblx0XHRcdGpRdWVyeS5mbi5pbnB1dG1hc2tcblx0XHQpO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0Y29uc3Qgbm9kZSAgPSB0aGlzLnJlcG9ydGluZy5nZXROb2RlKCk7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8IG5vZGUuaW5wdXRtYXNrLmlzQ29tcGxldGUoKTtcblx0fTtcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdpbnB1dG1hc2snICk7XG5cdH07XG59XG5cbk5vdENvbXBsZXRlSW5wdXRtYXNrLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdENvbXBsZXRlSW5wdXRtYXNrOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIE5vdEVtYWlsKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuICdlbWFpbCcgPT09IG5vZGUudHlwZTtcblx0fTtcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCAvXltcXHctXFwuXFwrXStAKFtcXHctXStcXC4pK1tcXHctXXsxLDZ9JC8udGVzdCggdmFsdWUgKTtcblx0fTtcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdlbWFpbCcgKTtcblx0fTtcbn1cblxuTm90RW1haWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90RW1haWw7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBOb3RFbXB0eVJlc3RyaWN0aW9uKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLnR5cGUgPSAncmVxdWlyZWQnO1xufVxuXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0cmV0dXJuIHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkO1xufTtcbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdHJldHVybiAhaXNFbXB0eSggdmFsdWUgKTtcbn07XG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZW1wdHknICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RFbXB0eVJlc3RyaWN0aW9uOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIE5vdEVub3VnaENoYXJzKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWluTGVuZ3RoJyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1pbkxlbmd0aCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gZmFsc2UgIT09IG1pbkxlbmd0aDtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGxlbmd0aCAgICAgICAgPSB0aGlzLmdldFZhbHVlKCk/Lmxlbmd0aDtcblx0XHRjb25zdCB7IG1pbkxlbmd0aCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gIWxlbmd0aCB8fCBsZW5ndGggPj0gK21pbkxlbmd0aC52YWx1ZS5jdXJyZW50O1xuXHR9O1xuXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnY2hhcl9taW4nICk7XG5cdH07XG59XG5cbk5vdEVub3VnaENoYXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEVub3VnaENoYXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIE5vdEVub3VnaE51bWJlcnMoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtaW4nICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0Y29uc3QgeyBtaW4gPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtaW4gJiYgWyAnbnVtYmVyJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcblx0fTtcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlICAgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0Y29uc3QgeyBtaW4gfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCArdmFsdWUgPj0gK21pbi52YWx1ZS5jdXJyZW50O1xuXHR9O1xuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ251bWJlcl9taW4nICk7XG5cdH07XG59XG5cbk5vdEVub3VnaE51bWJlcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90RW5vdWdoTnVtYmVyczsiLCJpbXBvcnQgTWF0Y2hSZWdleHAgZnJvbSAnLi9NYXRjaFJlZ2V4cCc7XG5cbmZ1bmN0aW9uIE5vdE1hdGNoUmVnZXhwKCkge1xuXHRNYXRjaFJlZ2V4cC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3JlZ2V4cF9ub3QnO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCAhTWF0Y2hSZWdleHAucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwoIHRoaXMgKTtcblx0fTtcbn1cblxuTm90TWF0Y2hSZWdleHAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF0Y2hSZWdleHAucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdE1hdGNoUmVnZXhwOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIE5vdFVybCgpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAndXJsJyA9PT0gbm9kZS50eXBlO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0IXZhbHVlIHx8IC8oKG1haWx0b1xcOnwobmV3c3woaHR8Zil0cChzPykpXFw6XFwvXFwvKVxcUyspLy50ZXN0KCB2YWx1ZSApXG5cdFx0KTtcblx0fTtcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICd1cmwnICk7XG5cdH07XG59XG5cbk5vdFVybC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RVcmw7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gUmVhY2hMaW1pdENoYXJzKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4TGVuZ3RoJyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1heExlbmd0aCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gZmFsc2UgIT09IG1heExlbmd0aDtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgICAgICAgICA9IHRoaXMuZ2V0VmFsdWUoKT8ubGVuZ3RoO1xuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPD0gK21heExlbmd0aC52YWx1ZS5jdXJyZW50O1xuXHR9O1xuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2NoYXJfbWF4JyApO1xuXHR9O1xufVxuXG5SZWFjaExpbWl0Q2hhcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY2hMaW1pdENoYXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIFJlYWNoTGltaXROdW1iZXJzKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4JyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHsgbWF4ID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiBmYWxzZSAhPT0gbWF4ICYmIFsgJ251bWJlcicsICdyYW5nZScgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSAgID0gdGhpcy5nZXRWYWx1ZSgpO1xuXHRcdGNvbnN0IHsgbWF4IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgK3ZhbHVlIDw9ICttYXgudmFsdWUuY3VycmVudDtcblx0fTtcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdudW1iZXJfbWF4JyApO1xuXHR9O1xufVxuXG5SZWFjaExpbWl0TnVtYmVycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjaExpbWl0TnVtYmVyczsiLCJpbXBvcnQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uIGZyb20gJy4vQ3VzdG9tQmFzZVJlc3RyaWN0aW9uJztcbmltcG9ydCBhcGlGZXRjaCBmcm9tICdAd29yZHByZXNzL2FwaS1mZXRjaCc7XG5cbmZ1bmN0aW9uIFNlcnZlclNpZGVDYWxsYmFjaygpIHtcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgICAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3Nzcic7XG5cdH07XG5cdHRoaXMuaXNTZXJ2ZXJTaWRlICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlUHJvbWlzZSA9IGFzeW5jIGZ1bmN0aW9uICggc2lnbmFsID0gbnVsbCApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudCApIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cblx0XHRjb25zdCBib2R5ID0gdGhpcy5nZXRGb3JtRGF0YSgpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpRmV0Y2goIHtcblx0XHRcdFx0cGF0aDogJy9qZXQtZm9ybS1idWlsZGVyL3YxL3ZhbGlkYXRlLWZpZWxkJyxcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGJvZHksXG5cdFx0XHRcdHNpZ25hbFxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U/LnJlc3VsdCA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcblx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5nZXRGb3JtRGF0YSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IGlucHV0IH0gICAgPSB0aGlzLnJlcG9ydGluZztcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSBpbnB1dC5nZXRSb290KCk7XG5cblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSggcm9vdE5vZGUgKTtcblx0XHRmb3JtRGF0YS5kZWxldGUoICdfd3Bub25jZScgKTtcblx0XHRmb3JtRGF0YS5zZXQoICdfamZiX3ZhbGlkYXRpb25fcnVsZV9pbmRleCcsIHRoaXMuYXR0cnMuaW5kZXggKTtcblx0XHRmb3IgKCBjb25zdCBwYXRoRWxlbWVudCBvZiBpbnB1dC5wYXRoICkge1xuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCAnX2pmYl92YWxpZGF0aW9uX3BhdGhbXScsIHBhdGhFbGVtZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvcm1EYXRhO1xuXHR9O1xuXG59XG5cblNlcnZlclNpZGVDYWxsYmFjay5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyU2lkZUNhbGxiYWNrOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XG5cbmNvbnN0IHsgZ2V0VGltZXN0YW1wIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuZnVuY3Rpb24gVG9vRWFybHlUaW1lc3RhbXAoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtaW4nICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHsgbWluID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiAoXG5cdFx0XHRmYWxzZSAhPT0gbWluICYmXG5cdFx0XHRbICd0aW1lJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7IG1pbiB9ICAgICAgICAgICA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXHRcdGNvbnN0IHsgdGltZSB9ICAgICAgICAgID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IHsgdGltZTogbWluVGltZSB9ID0gZ2V0VGltZXN0YW1wKCBtaW4udmFsdWUuY3VycmVudCApO1xuXG5cdFx0cmV0dXJuIHRpbWUgPj0gbWluVGltZTtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2RhdGVfbWluJyApO1xuXHR9O1xufVxuXG5Ub29FYXJseVRpbWVzdGFtcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb29FYXJseVRpbWVzdGFtcDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7IGdldFRpbWVzdGFtcCB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIFRvb0xhdGVUaW1lc3RhbXAoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXgnICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHsgbWF4ID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiAoXG5cdFx0XHRmYWxzZSAhPT0gbWF4ICYmXG5cdFx0XHRbICd0aW1lJywgJ2RhdGUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7IG1heCB9ICAgICAgICAgICA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXHRcdGNvbnN0IHsgdGltZSB9ICAgICAgICAgID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IHsgdGltZTogbWF4VGltZSB9ID0gZ2V0VGltZXN0YW1wKCBtYXgudmFsdWUuY3VycmVudCApO1xuXG5cdFx0cmV0dXJuIHRpbWUgPD0gbWF4VGltZTtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2RhdGVfbWF4JyApO1xuXHR9O1xufVxuXG5Ub29MYXRlVGltZXN0YW1wLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb0xhdGVUaW1lc3RhbXA7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImFwaUZldGNoXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQWR2YW5jZWRSZXBvcnRpbmcgZnJvbSAnLi9BZHZhbmNlZFJlcG9ydGluZyc7XG5pbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9BZHZhbmNlZFJlc3RyaWN0aW9uJztcbmltcG9ydCBOb3RFbXB0eVJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVtcHR5UmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEZpbHRlcixcblx0ICAgICAgYWRkQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvb2JzZXJ2ZS1keW5hbWljLWF0dHJzJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHRcdG9ic2VydmFibGUuZ2V0SW5wdXRzKCkuZm9yRWFjaCggaW5wdXQgPT4ge1xuXHRcdFx0aWYgKCAhKFxuXHRcdFx0XHRpbnB1dC5yZXBvcnRpbmcgaW5zdGFuY2VvZiBBZHZhbmNlZFJlcG9ydGluZ1xuXHRcdFx0KSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aW5wdXQucmVwb3J0aW5nLm9ic2VydmVBdHRycygpO1xuXHRcdH0gKTtcblx0fSxcblx0MTEsXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIucmVwb3J0aW5nJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvYWR2YW5jZWQtcmVwb3J0aW5nJyxcblx0ZnVuY3Rpb24gKCByZXBvcnRpbmcgKSB7XG5cdFx0cmVwb3J0aW5nID0gWyBBZHZhbmNlZFJlcG9ydGluZywgLi4ucmVwb3J0aW5nIF07XG5cblx0XHRyZXR1cm4gcmVwb3J0aW5nO1xuXHR9LFxuKTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxuXHQpLFxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLFxuXHROb3RFbXB0eVJlc3RyaWN0aW9uLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=