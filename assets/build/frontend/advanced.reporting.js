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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL09BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvQWR2YW5jZWRSZXBvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL0FkdmFuY2VkUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9DdXN0b21CYXNlUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9DdXN0b21SdWxlc1Jlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTWF0Y2hSZWdleHAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0Q29udGFpbkNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0RXF1YWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RDb21wbGV0ZUlucHV0bWFzay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVtYWlsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW1wdHlSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVub3VnaENoYXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW5vdWdoTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdE1hdGNoUmVnZXhwLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90VXJsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdENoYXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdE51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9TZXJ2ZXJTaWRlQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ub29FYXJseVRpbWVzdGFtcC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Rvb0xhdGVUaW1lc3RhbXAuanMiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYXBpRmV0Y2hcIl0iLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Z2V0RXJyb3JOb2RlLFxyXG5cdGdldEluaGVyaXRWYWxpZGF0aW9uVHlwZSxcclxuXHRnZXROb2RlVmFsaWRhdGlvblR5cGUsXHJcblx0Z2V0VmFsaWRhdGlvbk1lc3NhZ2VzLFxyXG5cdGdldFdyYXBwZXIsXHJcblx0c2V0UmVzdHJpY3Rpb25zLFxyXG59IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBSZXBvcnRpbmdJbnRlcmZhY2UsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFsbFJlamVjdGVkLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtBZHZhbmNlZFJlc3RyaWN0aW9ufSByZXN0cmljdGlvbnMgTGlzdCBvZiBhZHZhbmNlZCByZXN0cmljdGlvbnNcclxuICpcclxuICogQHRoaXMge1JlcG9ydGluZ0ludGVyZmFjZX1cclxuICogQGNsYXNzXHJcbiAqL1xyXG5mdW5jdGlvbiBBZHZhbmNlZFJlcG9ydGluZygpIHtcclxuXHRSZXBvcnRpbmdJbnRlcmZhY2UuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLnR5cGUgICAgICAgICAgID0gJ2luaGVyaXQnO1xyXG5cdHRoaXMubWVzc2FnZXMgICAgICAgPSB7fTtcclxuXHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gdHJ1ZTtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcHV0ZWQgcHJvcGVydHkgd2hpY2ggY29udGFpbiBhbGwgYXR0cnNcclxuXHQgKiBmb3IgYWxsIHN1cHBvcnRlZCByZXN0cmljdGlvbnNcclxuXHQgKlxyXG5cdCAqIEBzZWUgQWR2YW5jZWRSZXN0cmljdGlvbi5vblJlYWR5XHJcblx0ICpcclxuXHQgKiBAdHlwZSB7c3RyaW5nW119XHJcblx0ICovXHJcblx0dGhpcy53YXRjaEF0dHJzID0gW107XHJcblxyXG5cdHRoaXMucXVldWUgPSBbXTtcclxufVxyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVwb3J0aW5nSW50ZXJmYWNlLnByb3RvdHlwZSApO1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnNraXBTZXJ2ZXJTaWRlID0gdHJ1ZTtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmhhc1NlcnZlclNpZGUgID0gZmFsc2U7XHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pc1Byb2Nlc3MgICAgICA9IG51bGw7XHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5xdWV1ZSAgICAgICAgICA9IFtdO1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnNldFJlc3RyaWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRzZXRSZXN0cmljdGlvbnMoIHRoaXMgKTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXQgKSB7XHJcblx0dGhpcy50eXBlID0gZ2V0Tm9kZVZhbGlkYXRpb25UeXBlKCBub2RlICk7XHJcblxyXG5cdGNvbnN0IGluaGVyaXQgPSAnaW5oZXJpdCcgPT09IHRoaXMudHlwZVxyXG5cdCAgICAgICAgICAgICAgICA/IGdldEluaGVyaXRWYWxpZGF0aW9uVHlwZSggaW5wdXQgKVxyXG5cdCAgICAgICAgICAgICAgICA6IHRoaXMudHlwZTtcclxuXHJcblx0cmV0dXJuICEhaW5oZXJpdD8ubGVuZ3RoO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmdldEVycm9yc1JhdyA9IGFzeW5jIGZ1bmN0aW9uICggcHJvbWlzZXMsIHNpZ25hbCA9IG51bGwgKSB7XHJcblx0aWYgKCB0aGlzLmhhc1NlcnZlclNpZGUgKSB7XHJcblx0XHR0aGlzLmlucHV0LmxvYWRpbmcuc3RhcnQoKTtcclxuXHR9XHJcblxyXG5cdGxldCBlcnJvcnMgPSBhd2FpdCBhbGxSZWplY3RlZCggcHJvbWlzZXMgKTtcclxuXHJcblx0dGhpcy52YWx1ZVByZXYgPSB0aGlzLmlucHV0LmdldFZhbHVlKCk7XHJcblxyXG5cdGlmICggdGhpcy5oYXNTZXJ2ZXJTaWRlICkge1xyXG5cdFx0dGhpcy5pbnB1dC5sb2FkaW5nLmVuZCgpO1xyXG5cdH1cclxuXHJcblx0aWYgKCBzaWduYWw/LmFib3J0ZWQgKSB7XHJcblx0XHRlcnJvcnMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBlcnJvcnM7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHZhbGlkYXRpb25FcnJvcnMge0FkdmFuY2VkUmVzdHJpY3Rpb25bXXxSZXN0cmljdGlvbltdfVxyXG4gKi9cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnJlcG9ydFJhdyA9IGZ1bmN0aW9uICggdmFsaWRhdGlvbkVycm9ycyApIHtcclxuXHRsZXQgbWVzc2FnZSA9ICcnO1xyXG5cclxuXHRmb3IgKCBjb25zdCB2YWxpZGF0aW9uRXJyb3Igb2YgdmFsaWRhdGlvbkVycm9ycyApIHtcclxuXHRcdG1lc3NhZ2UgPSB2YWxpZGF0aW9uRXJyb3IuZ2V0TWVzc2FnZSgpO1xyXG5cclxuXHRcdGlmICggbWVzc2FnZT8ubGVuZ3RoICkge1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICggIW1lc3NhZ2UgKSB7XHJcblx0XHR0aGlzLmNsZWFyUmVwb3J0KCk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pbnNlcnRFcnJvciggbWVzc2FnZSApO1xyXG59O1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdHRoaXMubWVzc2FnZXMgPSBnZXRWYWxpZGF0aW9uTWVzc2FnZXMoIGlucHV0Lm5vZGVzWyAwIF0gKTtcclxuXHJcblx0UmVwb3J0aW5nSW50ZXJmYWNlLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xyXG59O1xyXG4vKipcclxuICogQHNpbmNlIDMuMC41IEludHJvZHVjZWRcclxuICovXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5vYnNlcnZlQXR0cnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Zm9yICggY29uc3Qgd2F0Y2hBdHRyIG9mIHRoaXMud2F0Y2hBdHRycyApIHtcclxuXHRcdGlmICggIXRoaXMuaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoIHdhdGNoQXR0ciApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge0Jhc2VIdG1sQXR0cn1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgYXR0ciA9IHRoaXMuaW5wdXQuYXR0cnNbIHdhdGNoQXR0ciBdO1xyXG5cclxuXHRcdGF0dHIudmFsdWUud2F0Y2goICgpID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZVByZXYgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnZhbGlkYXRlT25CbHVyKCk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG59O1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuY2xlYXJSZXBvcnQgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgaW5uZXIgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBub2RlID0gZ2V0V3JhcHBlciggdGhpcy5nZXROb2RlKCkgKTtcclxuXHJcblx0XHRpZiAoICFub2RlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnZmllbGQtaGFzLWVycm9yJyApO1xyXG5cclxuXHRcdGNvbnN0IGVycm9yID0gZ2V0RXJyb3JOb2RlKCBub2RlICk7XHJcblxyXG5cdFx0aWYgKCAhZXJyb3IgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRlcnJvci5yZW1vdmUoKTtcclxuXHR9O1xyXG5cdGlubmVyKCk7XHJcblx0dGhpcy5tYWtlVmFsaWQoKTtcclxufTtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmluc2VydEVycm9yID0gZnVuY3Rpb24gKCBtZXNzYWdlICkge1xyXG5cdGNvbnN0IGlubmVyID0gKCkgPT4ge1xyXG5cdFx0Y29uc3Qgbm9kZSAgPSBnZXRXcmFwcGVyKCB0aGlzLmdldE5vZGUoKSApO1xyXG5cdFx0Y29uc3QgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKCBub2RlLCBtZXNzYWdlICk7XHJcblxyXG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKCAnZmllbGQtaGFzLWVycm9yJyApO1xyXG5cclxuXHRcdGlmICggZXJyb3IuaXNDb25uZWN0ZWQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpdCBjYW4gYmUgb24gZmllbGRzX2xheW91dCA9PT0gJ3JvdydcclxuXHRcdGNvbnN0IGNvbEVuZCA9IG5vZGUucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLWNvbF9fZW5kJyApO1xyXG5cclxuXHRcdGlmICggY29sRW5kICkge1xyXG5cdFx0XHRjb2xFbmQuYXBwZW5kQ2hpbGQoIGVycm9yICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0bm9kZS5hcHBlbmRDaGlsZCggZXJyb3IgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdGlubmVyKCk7XHJcblx0dGhpcy5tYWtlSW52YWxpZCgpO1xyXG59O1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAoXHJcblx0bm9kZSwgbWVzc2FnZSApIHtcclxuXHRjb25zdCBlcnJvciA9IGdldEVycm9yTm9kZSggbm9kZSApO1xyXG5cclxuXHRpZiAoIGVycm9yICkge1xyXG5cdFx0ZXJyb3IuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuXHJcblx0XHRyZXR1cm4gZXJyb3I7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnB1dE5vZGUgPSB0aGlzLmdldE5vZGUoKTtcclxuXHRjb25zdCBkaXYgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG5cclxuXHRkaXYuY2xhc3NMaXN0LmFkZCggJ2Vycm9yLW1lc3NhZ2UnICk7XHJcblx0ZGl2LmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcblx0ZGl2LmlkICAgICAgICA9IGlucHV0Tm9kZS5pZCArICdfX2Vycm9yJztcclxuXHJcblx0cmV0dXJuIGRpdjtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5tYWtlSW52YWxpZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB3cmFwcGVyICAgPSBnZXRXcmFwcGVyKCB0aGlzLmdldE5vZGUoKSApO1xyXG5cdGNvbnN0IGVycm9yTm9kZSA9IGdldEVycm9yTm9kZSggd3JhcHBlciApO1xyXG5cclxuXHR0aGlzLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoICdhcmlhLWludmFsaWQnLCAndHJ1ZScgKTtcclxuXHR0aGlzLmdldE5vZGUoKS5zZXRBdHRyaWJ1dGUoXHJcblx0XHQnYXJpYS1kZXNjcmliZWRieScsXHJcblx0XHRlcnJvck5vZGU/LmlkID8/IGZhbHNlLFxyXG5cdCk7XHJcbn07XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUubWFrZVZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZ2V0Tm9kZSgpLnJlbW92ZUF0dHJpYnV0ZSggJ2FyaWEtaW52YWxpZCcgKTtcclxuXHR0aGlzLmdldE5vZGUoKS5yZW1vdmVBdHRyaWJ1dGUoICdhcmlhLWRlc2NyaWJlZGJ5JyApO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnZhbGlkYXRlT25DaGFuZ2UgPSBmdW5jdGlvbiAoIGFkZFRvUXVldWUgPSBmYWxzZSApIHtcclxuXHJcblx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoIHRydWUgKTtcclxuXHJcblx0Y29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XHJcblx0XHR0aGlzLmlucHV0LmdldENvbnRleHQoKS5zZXRTaWxlbmNlKCBmYWxzZSApO1xyXG5cclxuXHRcdHRoaXMudmFsaWRhdGUoKS5cclxuXHRcdFx0dGhlbiggKCkgPT4ge30gKS5cclxuXHRcdFx0Y2F0Y2goICgpID0+IHt9ICkuXHJcblx0XHRcdGZpbmFsbHkoICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmlzUHJvY2VzcyA9IG51bGw7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHF1ZXVlID0gWyAuLi50aGlzLnF1ZXVlIF07XHJcblx0XHRcdFx0dGhpcy5xdWV1ZSAgPSBbXTtcclxuXHJcblx0XHRcdFx0aWYgKCAhcXVldWUubGVuZ3RoICkge1xyXG5cdFx0XHRcdFx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMudmFsdWVQcmV2ID0gbnVsbDtcclxuXHRcdFx0XHRxdWV1ZS5mb3JFYWNoKCBjdXJyZW50ID0+IGN1cnJlbnQoKSApO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN3aXRjaEJ1dHRvbnNTdGF0ZSgpO1xyXG5cdFx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTc2NlxyXG5cdCAqL1xyXG5cdGlmICggYWRkVG9RdWV1ZSAmJiB0aGlzLmlzUHJvY2VzcyApIHtcclxuXHRcdHRoaXMucXVldWUgPSBbIGNhbGxiYWNrIF07XHJcblx0fVxyXG5cclxuXHRpZiAoIHRoaXMuaXNQcm9jZXNzICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pc1Byb2Nlc3MgPSB0cnVlO1xyXG5cclxuXHRjYWxsYmFjaygpO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnZhbGlkYXRlT25CbHVyID0gZnVuY3Rpb24gKCBzaWduYWwgPSBudWxsICkge1xyXG5cdC8qKlxyXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE3NjZcclxuXHQgKi9cclxuXHRpZiAoIHRoaXMuaXNQcm9jZXNzICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IHRydWU7XHJcblx0dGhpcy5za2lwU2VydmVyU2lkZSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLnN3aXRjaEJ1dHRvbnNTdGF0ZSggdHJ1ZSApO1xyXG5cdHRoaXMuY2FuU3VibWl0Rm9ybSggZmFsc2UgKTtcclxuXHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCggZmFsc2UgKTtcclxuXHJcblx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2V0U2lsZW5jZSggZmFsc2UgKTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSggc2lnbmFsICkuXHJcblx0XHR0aGVuKCAoKSA9PiB7fSApLlxyXG5cdFx0Y2F0Y2goICgpID0+IHt9ICkuXHJcblx0XHRmaW5hbGx5KCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmhhc1NlcnZlclNpZGUgID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaXNQcm9jZXNzICAgICAgPSBudWxsO1xyXG5cclxuXHRcdFx0dGhpcy5pbnB1dC5ub2Rlc1swXS5yZWFkT25seSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKCAhc2lnbmFsPy5hYm9ydGVkICkge1xyXG5cdFx0XHRcdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCk7XHJcblx0XHRcdFx0dGhpcy5jYW5TdWJtaXRGb3JtKCk7XHJcblxyXG5cdFx0XHRcdGlmICggdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnN3aXRjaEJ1dHRvbnNTdGF0ZSA9IGZ1bmN0aW9uKCBmb3JjZSA9IGZhbHNlICkge1xyXG5cdGNvbnN0IHBhcmVudFBhZ2UgPSB0aGlzLmlucHV0Lm5vZGVzWzBdLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1wYWdlJyApO1xyXG5cclxuXHRpZiAoIHBhcmVudFBhZ2UgJiYgIXRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNpbGVuY2UgKSB7XHJcblx0XHRjb25zdCBzd2l0Y2hCdXR0b25zID0gcGFyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX25leHQtcGFnZSwgLmpldC1mb3JtLWJ1aWxkZXJfX3ByZXYtcGFnZSwgLmpldC1mb3JtLWJ1aWxkZXJfX2FjdGlvbi1idXR0b24nXHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHN3aXRjaEJ1dHRvbiBvZiBzd2l0Y2hCdXR0b25zICkge1xyXG5cclxuXHRcdFx0aWYgKCAhc3dpdGNoQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXJfX3N1Ym1pdCcgKSAmJiAhdGhpcy5pc05vZGVCZWxvbmdUaGlzKCBzd2l0Y2hCdXR0b24gKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAhc3dpdGNoQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlJykgKSB7XHJcblx0XHRcdFx0c3dpdGNoQnV0dG9uLmRpc2FibGVkID0gZm9yY2UgPT09IHRydWUgfHwgIXRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHN3aXRjaEJ1dHRvbi5kaXNhYmxlZCA9IGZvcmNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gZnVuY3Rpb24oIGNhblRyaWdnZXIgPSB0cnVlICkge1xyXG5cdGNvbnN0IGZvcm0gPSB0aGlzLmlucHV0LnJvb3QuZm9ybTtcclxuXHJcblx0aWYgKCBmb3JtICkge1xyXG5cdFx0Zm9ybS5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSBjYW5UcmlnZ2VyO1xyXG5cdH1cclxufVxyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNhblN1Ym1pdEZvcm0gPSBmdW5jdGlvbiggY2FuU3VibWl0ID0gdHJ1ZSApIHtcclxuXHRjb25zdCBmb3JtID0gdGhpcy5pbnB1dC5yb290LmZvcm07XHJcblxyXG5cdGlmICggZm9ybSApIHtcclxuXHRcdGZvcm0uY2FuU3VibWl0Rm9ybSA9IGNhblN1Ym1pdDtcclxuXHR9XHJcbn1cclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pc05vZGVCZWxvbmdUaGlzID0gZnVuY3Rpb24oIG5vZGUgKSB7XHJcblx0Y29uc3QgcGFyZW50UGFnZSA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXBhZ2UnICk7XHJcblxyXG5cdHJldHVybiBwYXJlbnRQYWdlID8gIXBhcmVudFBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICkgOiBmYWxzZTtcclxufVxyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoIHRoaXMuaXNQcm9jZXNzICkge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoIHRydWUgKTtcclxuXHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCggZmFsc2UgKTtcclxuXHJcblx0aWYgKCB0aGlzLmlucHV0Lm1hc2tWYWxpZGF0aW9uICkge1xyXG5cdFx0dGhpcy5pbnB1dC5jaGFuZ2VTdGF0ZU1hc2tWYWxpZGF0aW9uKCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmlzUHJvY2VzcyAgICAgID0gdHJ1ZTtcclxuXHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gZmFsc2U7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcblx0XHR0aGlzLnZhbGlkYXRlKCkudGhlbiggcmVzb2x2ZSApLmNhdGNoKCByZWplY3QgKS5maW5hbGx5KFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5za2lwU2VydmVyU2lkZSA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5oYXNTZXJ2ZXJTaWRlICA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaXNQcm9jZXNzICAgICAgPSBudWxsO1xyXG5cclxuXHRcdFx0XHR0aGlzLmlucHV0Lm5vZGVzWzBdLnJlYWRPbmx5ID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCk7XHJcblx0XHRcdFx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQoKTtcclxuXHRcdFx0fSxcclxuXHRcdCk7XHJcblx0fSApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgcmVzdHJpY3Rpb24ge0FkdmFuY2VkUmVzdHJpY3Rpb258UmVzdHJpY3Rpb259XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuY2FuUHJvY2Vzc1Jlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCByZXN0cmljdGlvbiApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Ly8gYWxsb3cgYWxsXHJcblx0XHQhdGhpcy5za2lwU2VydmVyU2lkZSB8fFxyXG5cdFx0Ly8gb3Igb25seSBub3QtU2VydmVyU2lkZVxyXG5cdFx0IXJlc3RyaWN0aW9uLmlzU2VydmVyU2lkZSgpXHJcblx0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gcmVzdHJpY3Rpb24ge0FkdmFuY2VkUmVzdHJpY3Rpb258UmVzdHJpY3Rpb259XHJcbiAqL1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuYmVmb3JlUHJvY2Vzc1Jlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCByZXN0cmljdGlvbiApIHtcclxuXHR0aGlzLmhhc1NlcnZlclNpZGUgPSByZXN0cmljdGlvbi5pc1NlcnZlclNpZGUoKSA/IHRydWUgOiB0aGlzLmhhc1NlcnZlclNpZGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJlcG9ydGluZztcclxuIiwiaW1wb3J0IFJlYWNoTGltaXROdW1iZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlYWNoTGltaXROdW1iZXJzJztcclxuaW1wb3J0IE5vdEVub3VnaE51bWJlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW5vdWdoTnVtYmVycyc7XHJcbmltcG9ydCBOb3RVcmwgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90VXJsJztcclxuaW1wb3J0IE5vdEVtYWlsIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVtYWlsJztcclxuaW1wb3J0IE5vdEVub3VnaENoYXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVub3VnaENoYXJzJztcclxuaW1wb3J0IFJlYWNoTGltaXRDaGFycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZWFjaExpbWl0Q2hhcnMnO1xyXG5pbXBvcnQgTm90RW1wdHlSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbXB0eVJlc3RyaWN0aW9uJztcclxuaW1wb3J0IE5vdENvbXBsZXRlSW5wdXRtYXNrIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdENvbXBsZXRlSW5wdXRtYXNrJztcclxuaW1wb3J0IEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvQ3VzdG9tUnVsZXNSZXN0cmljdGlvbic7XHJcbmltcG9ydCBNdXN0Q29udGFpbkNoYXJhY3RlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTXVzdENvbnRhaW5DaGFyYWN0ZXJzJztcclxuaW1wb3J0IE11c3ROb3RDb250YWluQ2hhcmFjdGVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMnO1xyXG5pbXBvcnQgTWF0Y2hSZWdleHAgZnJvbSAnLi9yZXN0cmljdGlvbnMvTWF0Y2hSZWdleHAnO1xyXG5pbXBvcnQgTm90TWF0Y2hSZWdleHAgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90TWF0Y2hSZWdleHAnO1xyXG5pbXBvcnQgU2VydmVyU2lkZUNhbGxiYWNrIGZyb20gJy4vcmVzdHJpY3Rpb25zL1NlcnZlclNpZGVDYWxsYmFjayc7XHJcbmltcG9ydCBNdXN0RXF1YWwgZnJvbSAnLi9yZXN0cmljdGlvbnMvTXVzdEVxdWFsJztcclxuaW1wb3J0IFRvb0Vhcmx5VGltZXN0YW1wIGZyb20gJy4vcmVzdHJpY3Rpb25zL1Rvb0Vhcmx5VGltZXN0YW1wJztcclxuaW1wb3J0IFRvb0xhdGVUaW1lc3RhbXAgZnJvbSAnLi9yZXN0cmljdGlvbnMvVG9vTGF0ZVRpbWVzdGFtcCc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBpc0VtcHR5LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5jb25zdCBnZXRBZHZhbmNlZFJ1bGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIuYWR2YW5jZWQucnVsZXMnLFxyXG5cdFtcclxuXHRcdE11c3RDb250YWluQ2hhcmFjdGVycyxcclxuXHRcdE11c3ROb3RDb250YWluQ2hhcmFjdGVycyxcclxuXHRcdE1hdGNoUmVnZXhwLFxyXG5cdFx0Tm90TWF0Y2hSZWdleHAsXHJcblx0XHRTZXJ2ZXJTaWRlQ2FsbGJhY2ssXHJcblx0XHRNdXN0RXF1YWwsXHJcblx0XSxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7QXJyYXk8Q3VzdG9tQmFzZVJlc3RyaWN0aW9uPn1cclxuICovXHJcbmxldCBhZHZhbmNlZFJ1bGVzID0gW107XHJcblxyXG5jb25zdCBnZXRSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxyXG5cdFtcclxuXHRcdFRvb0Vhcmx5VGltZXN0YW1wLFxyXG5cdFx0VG9vTGF0ZVRpbWVzdGFtcCxcclxuXHRcdFJlYWNoTGltaXROdW1iZXJzLFxyXG5cdFx0Tm90RW5vdWdoTnVtYmVycyxcclxuXHRcdE5vdFVybCxcclxuXHRcdE5vdEVtYWlsLFxyXG5cdFx0Tm90Q29tcGxldGVJbnB1dG1hc2ssXHJcblx0XHROb3RFbm91Z2hDaGFycyxcclxuXHRcdFJlYWNoTGltaXRDaGFycyxcclxuXHRcdE5vdEVtcHR5UmVzdHJpY3Rpb24sXHJcblx0XHRDdXN0b21SdWxlc1Jlc3RyaWN0aW9uLFxyXG5cdF0sXHJcbik7XHJcblxyXG4vKipcclxuICogQHR5cGUge1Jlc3RyaWN0aW9uW119XHJcbiAqL1xyXG5sZXQgcmVzdHJpY3Rpb25zID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRQcmVwYXJlZFJ1bGVzKCBydWxlcywgcmVwb3J0aW5nICkge1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gW107XHJcblxyXG5cdGlmICggIWFkdmFuY2VkUnVsZXMubGVuZ3RoICkge1xyXG5cdFx0YWR2YW5jZWRSdWxlcyA9IGdldEFkdmFuY2VkUnVsZXMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIHJ1bGUgXSBvZiBPYmplY3QuZW50cmllcyggcnVsZXMgKSApIHtcclxuXHRcdGZvciAoIGNvbnN0IGFkdmFuY2VkUnVsZSBvZiBhZHZhbmNlZFJ1bGVzICkge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGFkdmFuY2VkUnVsZSgpO1xyXG5cclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxyXG5cdFx0XHRpZiAoIHJ1bGUudHlwZSAhPT0gY3VycmVudC5nZXRTbHVnKCkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVsZXRlIHJ1bGUudHlwZTtcclxuXHJcblx0XHRcdGN1cnJlbnQuc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKTtcclxuXHRcdFx0Y3VycmVudC5zZXRBdHRycyggeyAuLi5ydWxlLCBpbmRleCB9ICk7XHJcblx0XHRcdGN1cnJlbnQub25SZWFkeSgpO1xyXG5cclxuXHRcdFx0cmVzcG9uc2UucHVzaCggY3VycmVudCApO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFdyYXBwZXIoIG5vZGUgKSB7XHJcblx0cmV0dXJuIG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldE5vZGVWYWxpZGF0aW9uVHlwZSggbm9kZSApIHtcclxuXHRjb25zdCB3cmFwcGVyICAgICAgICAgICAgICAgICA9IGdldFdyYXBwZXIoIG5vZGUgKTtcclxuXHRjb25zdCB7IHZhbGlkYXRpb25UeXBlID0gJycgfSA9IHdyYXBwZXI/LmRhdGFzZXQgPz8ge307XHJcblxyXG5cdHJldHVybiB2YWxpZGF0aW9uVHlwZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlKCBpbnB1dCApIHtcclxuXHRjb25zdCBhbGxGb3JtcyA9IHdpbmRvdz8uSmV0Rm9ybXNWYWxpZGF0aW9uID8/IGZhbHNlO1xyXG5cclxuXHRpZiAoIGZhbHNlID09PSBhbGxGb3JtcyApIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGNvbnN0IGZvcm1JZCAgICAgICAgPSBpbnB1dC5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcclxuXHRjb25zdCB7IHR5cGUgPSAnJyB9ID0gYWxsRm9ybXNbIGZvcm1JZCBdID8/IHt9O1xyXG5cclxuXHRyZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk1lc3NhZ2VzKCBub2RlICkge1xyXG5cdGNvbnN0IHdyYXBwZXIgICAgICAgICAgICAgICAgICAgICAgID0gZ2V0V3JhcHBlciggbm9kZSApO1xyXG5cdGNvbnN0IHsgdmFsaWRhdGlvbk1lc3NhZ2VzID0gJ3t9JyB9ID0gd3JhcHBlcj8uZGF0YXNldCA/PyB7fTtcclxuXHJcblx0cmV0dXJuIEpTT04ucGFyc2UoIHZhbGlkYXRpb25NZXNzYWdlcyApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICByZXN0cmljdGlvbiB7UmVzdHJpY3Rpb259XHJcbiAqIEBwYXJhbSAgc2x1ZyAgICAgICAge3N0cmluZ31cclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TWVzc2FnZUJ5U2x1ZyggcmVzdHJpY3Rpb24sIHNsdWcgKSB7XHJcblx0Y29uc3QgeyByZXBvcnRpbmcgfSA9IHJlc3RyaWN0aW9uO1xyXG5cdGNvbnN0IG1lc3NhZ2UgICAgICAgPSByZXBvcnRpbmcubWVzc2FnZXNbIHNsdWcgXSA/PyAnJztcclxuXHJcblx0aWYgKCBtZXNzYWdlICkge1xyXG5cdFx0cmV0dXJuIG1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBhbGxNZXNzYWdlcyA9IHdpbmRvdz8uSmV0Rm9ybXNWYWxpZGF0aW9uID8/IGZhbHNlO1xyXG5cclxuXHRpZiAoIGZhbHNlID09PSBhbGxNZXNzYWdlcyApIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGNvbnN0IGZvcm0gICAgICAgICA9IHJlcG9ydGluZy5pbnB1dC5nZXRTdWJtaXQoKTtcclxuXHRjb25zdCB7IG1lc3NhZ2VzIH0gPSBhbGxNZXNzYWdlc1sgZm9ybS5nZXRGb3JtSWQoKSBdID8/IHt9O1xyXG5cclxuXHRyZXR1cm4gbWVzc2FnZXNbIHNsdWcgXSA/PyAnJztcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aGlzIHtDdXN0b21CYXNlUmVzdHJpY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZlRmllbGRSZXN0cmljdGlvbigpIHtcclxuXHRpZiAoICF0aGlzLmF0dHJzPy5maWVsZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3QgeyByb290IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dDtcclxuXHRjb25zdCBpbnB1dCAgICA9IHJvb3QuZ2V0SW5wdXQoIHRoaXMuYXR0cnMuZmllbGQgKTtcclxuXHJcblx0aW5wdXQud2F0Y2goICgpID0+IHtcclxuXHRcdHRoaXMuYXR0cnMudmFsdWUgPSBpbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSGVyZSB3ZSBuZWVkIHRvIHJlc2V0IHRoZSBgdmFsdWVQcmV2YCBwcm9wZXJ0eSxcclxuXHRcdCAqIGJlY2F1c2UgcmVwb3J0aW5nIGxvZ2ljIHJlbWVtYmVyIHByZXZpb3VzIHZhbHVlLCB3aGljaCBpdCBjaGVjay5cclxuXHRcdCAqXHJcblx0XHQgKiBBbmQgaWYgLnZhbHVlUHJldiA9PT0gLmN1cnJlbnQudmFsdWUgLT4gcmVwb3J0aW5nIHdpbGwgYmUgc2tpcHBlZFxyXG5cdFx0ICpcclxuXHRcdCAqIEBzZWUgQWR2YW5jZWRSZXBvcnRpbmcuZ2V0RXJyb3JzXHJcblx0XHQgKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5oYXNDaGFuZ2VkVmFsdWVcclxuXHRcdCAqIEB0eXBlIHtudWxsfVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnJlcG9ydGluZy52YWx1ZVByZXYgPSBudWxsO1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZSgpO1xyXG5cdH0gKTtcclxuXHJcblx0aWYgKCAhaXNFbXB0eSggaW5wdXQudmFsdWUuY3VycmVudCApICkge1xyXG5cdFx0dGhpcy5hdHRycy52YWx1ZSA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHJlcG9ydGluZyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0UmVzdHJpY3Rpb25zKCByZXBvcnRpbmcgKSB7XHJcblx0aWYgKCAhcmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdHJlc3RyaWN0aW9ucyA9IGdldFJlc3RyaWN0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgcmVzdHJpY3Rpb25zICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXN0cmljdGlvbigpO1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0IWN1cnJlbnQuaXNTdXBwb3J0ZWQoIHJlcG9ydGluZy5nZXROb2RlKCksIHJlcG9ydGluZyApXHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjdXJyZW50LnNldFJlcG9ydGluZyggcmVwb3J0aW5nICk7XHJcblx0XHRjdXJyZW50Lm9uUmVhZHkoKTtcclxuXHJcblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLnB1c2goIGN1cnJlbnQgKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBZb3UgY2Fubm90IHVzZSBub2RlLnF1ZXJ5U2VsZWN0b3IgaW4gdGhpcyBmdW5jdGlvbixcclxuICogYmVjYXVzZSB0aGUgUmVwZWF0ZXIgRmllbGQgdmFsaWRhdGlvbiB3aWxsIHJldHVyblxyXG4gKiBhbiBlcnJvciBlbGVtZW50IGZyb20gdGhlIGludGVybmFsIGZpZWxkLlxyXG4gKlxyXG4gKiBAcGFyYW0gIHdyYXBwZXIge0VsZW1lbnR9XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW58RWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEVycm9yTm9kZSggd3JhcHBlciApIHtcclxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiB3cmFwcGVyLmNoaWxkcmVuICkge1xyXG5cdFx0aWYgKCAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZXJyb3ItbWVzc2FnZScgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2hpbGQ7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb2xFbmROb2RlID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWNvbF9fZW5kJyxcclxuXHQpO1xyXG5cclxuXHRpZiAoICFjb2xFbmROb2RlICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdldEVycm9yTm9kZSggY29sRW5kTm9kZSApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGdldE5vZGVWYWxpZGF0aW9uVHlwZSxcclxuXHRnZXRJbmhlcml0VmFsaWRhdGlvblR5cGUsXHJcblx0Z2V0TWVzc2FnZUJ5U2x1ZyxcclxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZXMsXHJcblx0Z2V0UHJlcGFyZWRSdWxlcyxcclxuXHRzZXRSZXN0cmljdGlvbnMsXHJcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24sXHJcblx0Z2V0V3JhcHBlcixcclxuXHRnZXRFcnJvck5vZGUsXHJcbn07IiwiaW1wb3J0IHsgZ2V0TWVzc2FnZUJ5U2x1ZyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUmVzdHJpY3Rpb24sXHJcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXHJcbiAgICAgIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIEFkdmFuY2VkUmVzdHJpY3Rpb24oKSB7XHJcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLm1lc3NhZ2UgICAgICA9ICcnO1xyXG5cdHRoaXMuZm9ybXVsYSAgICAgID0gbnVsbDtcclxuXHR0aGlzLndhdGNoZWRBdHRycyA9IFtdO1xyXG59XHJcblxyXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUubWVzc2FnZSA9ICcnO1xyXG4vKipcclxuICogQHR5cGUge0NhbGN1bGF0ZWRGb3JtdWxhfVxyXG4gKi9cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZm9ybXVsYSA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7QXJyYXl9XHJcbiAqL1xyXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS53YXRjaGVkQXR0cnMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBJZiByZXR1cm5zIHRydWUgLT4gdmFsaWRhdGlvbiB3aWxsIGJlXHJcbiAqIHN0YXJ0ZWQgd2l0aCAxMDAwIG1zIGRlbGF5XHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1NlcnZlclNpZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5tZXNzYWdlO1xyXG59O1xyXG4vKipcclxuICogSGVyZSB5b3UgbmVlZCB0byByZXR1cm4gYSBwcmVwYXJlZCBtZXNzYWdlLFxyXG4gKiB3aXRoIHByb2Nlc3NlZCBtYWNyb3NcclxuICpcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gJ0Vycm9yJztcclxufTtcclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0TWVzc2FnZUJ5U2x1ZyA9IGZ1bmN0aW9uICggc2x1ZyApIHtcclxuXHRyZXR1cm4gZ2V0TWVzc2FnZUJ5U2x1ZyggdGhpcywgc2x1ZyApO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUub25SZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEZvcm11bGEoIHRoaXMucmVwb3J0aW5nLmlucHV0ICk7XHJcblxyXG5cdHRoaXMuZm9ybXVsYS5vYnNlcnZlKCB0aGlzLmdldFJhd01lc3NhZ2UoKSApO1xyXG5cdHRoaXMuZm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLmZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XHJcblx0fTtcclxuXHR0aGlzLmZvcm11bGEuc2V0UmVzdWx0KCk7XHJcblxyXG5cdGlmICggIXRoaXMud2F0Y2hlZEF0dHJzLmxlbmd0aCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVwb3J0aW5nLndhdGNoQXR0cnMgPSBbXHJcblx0XHQuLi5uZXcgU2V0KCBbXHJcblx0XHRcdC4uLnRoaXMucmVwb3J0aW5nLndhdGNoQXR0cnMsXHJcblx0XHRcdC4uLnRoaXMud2F0Y2hlZEF0dHJzLFxyXG5cdFx0XSApLFxyXG5cdF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZFJlc3RyaWN0aW9uO1xyXG5cclxuXHJcbiIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBDdXN0b21CYXNlUmVzdHJpY3Rpb24oKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuYXR0cnMgPSB7fTtcclxufVxyXG5cclxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmF0dHJzICAgICAgICAgPSB7fTtcclxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRBdHRycyAgICAgID0gZnVuY3Rpb24gKCBhdHRycyApIHtcclxuXHR0aGlzLmF0dHJzID0gYXR0cnM7XHJcbn07XHJcbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0U2x1ZyAgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoICd5b3UgbmVlZCB0byByZXR1cm4gc2x1ZyBvZiBydWxlJyApO1xyXG59O1xyXG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuYXR0cnM/Lm1lc3NhZ2UgPz8gJyc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21CYXNlUmVzdHJpY3Rpb247IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmltcG9ydCB7IGdldFByZXBhcmVkUnVsZXMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQ3VzdG9tUnVsZXNSZXN0cmljdGlvbigpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0Y29uc3Qgcm9vdCAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XHJcblx0XHRjb25zdCBydWxlcyA9IEpTT04ucGFyc2UoIHJvb3QuZGF0YXNldD8udmFsaWRhdGlvblJ1bGVzID8/ICdbXScgKTtcclxuXHJcblx0XHRpZiAoICFCb29sZWFuKCBydWxlcy5sZW5ndGggKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlcG9ydGluZy5yZXN0cmljdGlvbnMgPSBbXHJcblx0XHRcdC4uLnJlcG9ydGluZy5yZXN0cmljdGlvbnMsXHJcblx0XHRcdC4uLmdldFByZXBhcmVkUnVsZXMoIHJ1bGVzLCByZXBvcnRpbmcgKSxcclxuXHRcdF07XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcbn1cclxuXHJcbkN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb247IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XHJcbmltcG9ydCB7IG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIE1hdGNoUmVnZXhwKCkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAncmVnZXhwJztcclxuXHR9O1xyXG5cclxufVxyXG5cclxuTWF0Y2hSZWdleHAucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5NYXRjaFJlZ2V4cC5wcm90b3R5cGUuc2V0QXR0cnMgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMuY2FsbCggdGhpcywgYXR0cnMgKTtcclxuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcbn07XHJcbk1hdGNoUmVnZXhwLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcblx0aWYgKCAhdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Y29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCggdGhpcy5hdHRycy52YWx1ZSwgJ2cnICk7XHJcblxyXG5cdHJldHVybiByZWdleHAudGVzdCggdmFsdWUgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdGNoUmVnZXhwOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgeyBvYnNlcnZlRmllbGRSZXN0cmljdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBNdXN0Q29udGFpbkNoYXJhY3RlcnMoKSB7XHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnY29udGFpbic7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcbk11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUgICAgICAgICAgPSBPYmplY3QuY3JlYXRlKFxyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUsXHJcbik7XHJcbk11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUuc2V0QXR0cnMgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMuY2FsbCggdGhpcywgYXR0cnMgKTtcclxuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcbn07XHJcblxyXG5NdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlLmluY2x1ZGVzKCB0aGlzLmF0dHJzLnZhbHVlICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdXN0Q29udGFpbkNoYXJhY3RlcnM7IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XHJcbmltcG9ydCB7IG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIE11c3RFcXVhbCgpIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdlcXVhbCc7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCB2YWx1ZSA9PT0gdGhpcy5hdHRycy52YWx1ZTtcclxuXHR9O1xyXG59XHJcblxyXG5NdXN0RXF1YWwucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5NdXN0RXF1YWwucHJvdG90eXBlLnNldEF0dHJzID0gZnVuY3Rpb24gKCBhdHRycyApIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzLmNhbGwoIHRoaXMsIGF0dHJzICk7XHJcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVzdEVxdWFsOyIsImltcG9ydCBNdXN0Q29udGFpbkNoYXJhY3RlcnMgZnJvbSAnLi9NdXN0Q29udGFpbkNoYXJhY3RlcnMnO1xyXG5cclxuZnVuY3Rpb24gTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzKCkge1xyXG5cdE11c3RDb250YWluQ2hhcmFjdGVycy5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2NvbnRhaW5fbm90JztcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcblx0XHRyZXR1cm4gIXZhbHVlIHx8ICFNdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwoIHRoaXMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRNdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBOb3RDb21wbGV0ZUlucHV0bWFzaygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0bm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyX19tYXNrZWQtZmllbGQnICkgJiZcclxuXHRcdFx0alF1ZXJ5LmZuLmlucHV0bWFza1xyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3Qgbm9kZSAgPSB0aGlzLnJlcG9ydGluZy5nZXROb2RlKCk7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCBub2RlLmlucHV0bWFzay5pc0NvbXBsZXRlKCk7XHJcblx0fTtcclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnaW5wdXRtYXNrJyApO1xyXG5cdH07XHJcbn1cclxuXHJcbk5vdENvbXBsZXRlSW5wdXRtYXNrLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RDb21wbGV0ZUlucHV0bWFzazsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90RW1haWwoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiAnZW1haWwnID09PSBub2RlLnR5cGU7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcblx0XHRyZXR1cm4gIXZhbHVlIHx8IC9eW1xcdy1cXC5cXCtdK0AoW1xcdy1dK1xcLikrW1xcdy1dezEsNn0kLy50ZXN0KCB2YWx1ZSApO1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2VtYWlsJyApO1xyXG5cdH07XHJcbn1cclxuXHJcbk5vdEVtYWlsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RFbWFpbDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGlzRW1wdHksXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIE5vdEVtcHR5UmVzdHJpY3Rpb24oKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMudHlwZSA9ICdyZXF1aXJlZCc7XHJcbn1cclxuXHJcbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRyZXR1cm4gcmVwb3J0aW5nLmlucHV0LmlzUmVxdWlyZWQ7XHJcbn07XHJcbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdHJldHVybiAhaXNFbXB0eSggdmFsdWUgKTtcclxufTtcclxuTm90RW1wdHlSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZW1wdHknICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RFbXB0eVJlc3RyaWN0aW9uOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBOb3RFbm91Z2hDaGFycygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21pbkxlbmd0aCcgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0Y29uc3QgeyBtaW5MZW5ndGggPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZSAhPT0gbWluTGVuZ3RoO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBsZW5ndGggICAgICAgID0gdGhpcy5nZXRWYWx1ZSgpPy5sZW5ndGg7XHJcblx0XHRjb25zdCB7IG1pbkxlbmd0aCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuICFsZW5ndGggfHwgbGVuZ3RoID49ICttaW5MZW5ndGgudmFsdWUuY3VycmVudDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnY2hhcl9taW4nICk7XHJcblx0fTtcclxufVxyXG5cclxuTm90RW5vdWdoQ2hhcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEVub3VnaENoYXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBOb3RFbm91Z2hOdW1iZXJzKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWluJyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgbWluID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gZmFsc2UgIT09IG1pbiAmJiBbICdudW1iZXInLCAncmFuZ2UnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgICA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHRcdGNvbnN0IHsgbWluIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gIXZhbHVlIHx8ICt2YWx1ZSA+PSArbWluLnZhbHVlLmN1cnJlbnQ7XHJcblx0fTtcclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnbnVtYmVyX21pbicgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob3RFbm91Z2hOdW1iZXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RFbm91Z2hOdW1iZXJzOyIsImltcG9ydCBNYXRjaFJlZ2V4cCBmcm9tICcuL01hdGNoUmVnZXhwJztcclxuXHJcbmZ1bmN0aW9uIE5vdE1hdGNoUmVnZXhwKCkge1xyXG5cdE1hdGNoUmVnZXhwLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAncmVnZXhwX25vdCc7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCAhTWF0Y2hSZWdleHAucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwoIHRoaXMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob3RNYXRjaFJlZ2V4cC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXRjaFJlZ2V4cC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdE1hdGNoUmVnZXhwOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBOb3RVcmwoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiAndXJsJyA9PT0gbm9kZS50eXBlO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0IXZhbHVlIHx8IC8oKG1haWx0b1xcOnwobmV3c3woaHR8Zil0cChzPykpXFw6XFwvXFwvKVxcUyspLy50ZXN0KCB2YWx1ZSApXHJcblx0XHQpO1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ3VybCcgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob3RVcmwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdFVybDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gUmVhY2hMaW1pdENoYXJzKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4TGVuZ3RoJyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRjb25zdCB7IG1heExlbmd0aCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtYXhMZW5ndGg7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgICAgICAgICA9IHRoaXMuZ2V0VmFsdWUoKT8ubGVuZ3RoO1xyXG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPD0gK21heExlbmd0aC52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2NoYXJfbWF4JyApO1xyXG5cdH07XHJcbn1cclxuXHJcblJlYWNoTGltaXRDaGFycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY2hMaW1pdENoYXJzOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5mdW5jdGlvbiBSZWFjaExpbWl0TnVtYmVycygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heCcgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRjb25zdCB7IG1heCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtYXggJiYgWyAnbnVtYmVyJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlICAgPSB0aGlzLmdldFZhbHVlKCk7XHJcblx0XHRjb25zdCB7IG1heCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCArdmFsdWUgPD0gK21heC52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ251bWJlcl9tYXgnICk7XHJcblx0fTtcclxufVxyXG5cclxuUmVhY2hMaW1pdE51bWJlcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWNoTGltaXROdW1iZXJzOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xyXG5cclxuZnVuY3Rpb24gU2VydmVyU2lkZUNhbGxiYWNrKCkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyAgICAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdzc3InO1xyXG5cdH07XHJcblx0dGhpcy5pc1NlcnZlclNpZGUgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGVQcm9taXNlID0gYXN5bmMgZnVuY3Rpb24gKCBzaWduYWwgPSBudWxsICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcblx0XHRpZiAoICFjdXJyZW50ICkge1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYm9keSA9IHRoaXMuZ2V0Rm9ybURhdGEoKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUZldGNoKCB7XHJcblx0XHRcdFx0cGF0aDogJy9qZXQtZm9ybS1idWlsZGVyL3YxL3ZhbGlkYXRlLWZpZWxkJyxcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5LFxyXG5cdFx0XHRcdHNpZ25hbFxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U/LnJlc3VsdCA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcclxuXHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRGb3JtRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgaW5wdXQgfSAgICA9IHRoaXMucmVwb3J0aW5nO1xyXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gaW5wdXQuZ2V0Um9vdCgpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCByb290Tm9kZSApO1xyXG5cdFx0Zm9ybURhdGEuZGVsZXRlKCAnX3dwbm9uY2UnICk7XHJcblx0XHRmb3JtRGF0YS5zZXQoICdfamZiX3ZhbGlkYXRpb25fcnVsZV9pbmRleCcsIHRoaXMuYXR0cnMuaW5kZXggKTtcclxuXHRcdGZvciAoIGNvbnN0IHBhdGhFbGVtZW50IG9mIGlucHV0LnBhdGggKSB7XHJcblx0XHRcdGZvcm1EYXRhLmFwcGVuZCggJ19qZmJfdmFsaWRhdGlvbl9wYXRoW10nLCBwYXRoRWxlbWVudCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmb3JtRGF0YTtcclxuXHR9O1xyXG5cclxufVxyXG5cclxuU2VydmVyU2lkZUNhbGxiYWNrLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVDYWxsYmFjazsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuY29uc3QgeyBnZXRUaW1lc3RhbXAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gVG9vRWFybHlUaW1lc3RhbXAoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtaW4nICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgbWluID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRmYWxzZSAhPT0gbWluICYmXHJcblx0XHRcdFsgJ3RpbWUnLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlIClcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdGlmICggIXZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IG1pbiB9ICAgICAgICAgICA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gICAgICAgICAgPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCB7IHRpbWU6IG1pblRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWluLnZhbHVlLmN1cnJlbnQgKTtcclxuXHJcblx0XHRyZXR1cm4gdGltZSA+PSBtaW5UaW1lO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21pbicgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ub29FYXJseVRpbWVzdGFtcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vRWFybHlUaW1lc3RhbXA7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmNvbnN0IHsgZ2V0VGltZXN0YW1wIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIFRvb0xhdGVUaW1lc3RhbXAoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXgnICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgbWF4ID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRmYWxzZSAhPT0gbWF4ICYmXHJcblx0XHRcdFsgJ3RpbWUnLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlIClcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdGlmICggIXZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IG1heCB9ICAgICAgICAgICA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gICAgICAgICAgPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCB7IHRpbWU6IG1heFRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWF4LnZhbHVlLmN1cnJlbnQgKTtcclxuXHJcblx0XHRyZXR1cm4gdGltZSA8PSBtYXhUaW1lO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21heCcgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ub29MYXRlVGltZXN0YW1wLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29MYXRlVGltZXN0YW1wOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFkdmFuY2VkUmVwb3J0aW5nIGZyb20gJy4vQWR2YW5jZWRSZXBvcnRpbmcnO1xyXG5pbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuaW1wb3J0IE5vdEVtcHR5UmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW1wdHlSZXN0cmljdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9vYnNlcnZlLWR5bmFtaWMtYXR0cnMnLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcclxuXHRcdG9ic2VydmFibGUuZ2V0SW5wdXRzKCkuZm9yRWFjaCggaW5wdXQgPT4ge1xyXG5cdFx0XHRpZiAoICEoXHJcblx0XHRcdFx0aW5wdXQucmVwb3J0aW5nIGluc3RhbmNlb2YgQWR2YW5jZWRSZXBvcnRpbmdcclxuXHRcdFx0KSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aW5wdXQucmVwb3J0aW5nLm9ic2VydmVBdHRycygpO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0MTEsXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZXBvcnRpbmcnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2FkdmFuY2VkLXJlcG9ydGluZycsXHJcblx0ZnVuY3Rpb24gKCByZXBvcnRpbmcgKSB7XHJcblx0XHRyZXBvcnRpbmcgPSBbIEFkdmFuY2VkUmVwb3J0aW5nLCAuLi5yZXBvcnRpbmcgXTtcclxuXHJcblx0XHRyZXR1cm4gcmVwb3J0aW5nO1xyXG5cdH0sXHJcbik7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxyXG5cdCksXHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbixcclxuXHROb3RFbXB0eVJlc3RyaWN0aW9uLFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==