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
  // Don't validate on initial load if field is empty
  const currentValue = this.input.getValue();
  if (!currentValue || currentValue === '') {
    // Only skip validation if this is the initial load (valuePrev is null)
    // and the field is empty AND we're in silence mode (not form submission)
    if (this.valuePrev === null && this.input.getContext().silence) {
      return;
    }
  }
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

  // Don't validate on initial load if field is empty
  const currentValue = this.input.getValue();
  if (!currentValue || currentValue === '') {
    // Only skip validation if this is the initial load (valuePrev is null)
    // and the field is empty AND we're in silence mode (not form submission)
    if (this.valuePrev === null && this.input.getContext().silence) {
      return;
    }
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

  // Don't validate on initial load if field is empty
  const currentValue = this.input.getValue();
  if (!currentValue || currentValue === '') {
    // Only skip validation if this is the initial load (valuePrev is null)
    // and the field is empty AND we're in silence mode (not form submission)
    if (this.valuePrev === null && this.input.getContext().silence) {
      return Promise.resolve();
    }
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
    const {
      rootNode
    } = this.reporting.input.getRoot();
    const ssrValidationMethod = rootNode.getAttribute('ssr_validation_method') || 'rest';
    switch (ssrValidationMethod) {
      case 'admin_ajax':
        return this.validateViaAdminAjax(body, signal);
      case 'self':
        return this.validateViaSelfRequest(body, signal);
      default:
        return this.validateViaRest(body, signal);
    }
  };
  this.validateViaRest = async function (body, signal) {
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
  this.validateViaAdminAjax = async function (body, signal) {
    try {
      const response = await fetch(window.JetFormBuilderSettings.adminajaxurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          action: 'jet_fb_ssr_validation_ajax',
          data: JSON.stringify(Object.fromEntries(body))
        }),
        signal
      }).then(res => res.json());
      return response?.result ? Promise.resolve() : Promise.reject();
    } catch (error) {
      throw error;
    }
  };
  this.validateViaSelfRequest = async function (body, signal) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('jet_fb_ssr_self_validation', '1');
      for (const [key, value] of body.entries()) {
        url.searchParams.append(key, value);
      }
      const response = await fetch(url.toString(), {
        method: 'GET',
        signal
      }).then(res => res.json());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7O0FDdkNBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9BZHZhbmNlZFJlcG9ydGluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvQWR2YW5jZWRSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL0N1c3RvbUJhc2VSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL0N1c3RvbVJ1bGVzUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NYXRjaFJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL011c3RDb250YWluQ2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL011c3RFcXVhbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL011c3ROb3RDb250YWluQ2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdENvbXBsZXRlSW5wdXRtYXNrLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW1haWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RFbXB0eVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW5vdWdoQ2hhcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RFbm91Z2hOdW1iZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90TWF0Y2hSZWdleHAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RVcmwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZWFjaExpbWl0Q2hhcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZWFjaExpbWl0TnVtYmVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1NlcnZlclNpZGVDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Rvb0Vhcmx5VGltZXN0YW1wLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvVG9vTGF0ZVRpbWVzdGFtcC5qcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJhcGlGZXRjaFwiXSIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRnZXRFcnJvck5vZGUsXHJcblx0Z2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlLFxyXG5cdGdldE5vZGVWYWxpZGF0aW9uVHlwZSxcclxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZXMsXHJcblx0Z2V0V3JhcHBlcixcclxuXHRzZXRSZXN0cmljdGlvbnMsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFJlcG9ydGluZ0ludGVyZmFjZSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWxsUmVqZWN0ZWQsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0FkdmFuY2VkUmVzdHJpY3Rpb259IHJlc3RyaWN0aW9ucyBMaXN0IG9mIGFkdmFuY2VkIHJlc3RyaWN0aW9uc1xyXG4gKlxyXG4gKiBAdGhpcyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxyXG4gKiBAY2xhc3NcclxuICovXHJcbmZ1bmN0aW9uIEFkdmFuY2VkUmVwb3J0aW5nKCkge1xyXG5cdFJlcG9ydGluZ0ludGVyZmFjZS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMudHlwZSAgICAgICAgICAgPSAnaW5oZXJpdCc7XHJcblx0dGhpcy5tZXNzYWdlcyAgICAgICA9IHt9O1xyXG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xyXG5cclxuXHQvKipcclxuXHQgKiBDb21wdXRlZCBwcm9wZXJ0eSB3aGljaCBjb250YWluIGFsbCBhdHRyc1xyXG5cdCAqIGZvciBhbGwgc3VwcG9ydGVkIHJlc3RyaWN0aW9uc1xyXG5cdCAqXHJcblx0ICogQHNlZSBBZHZhbmNlZFJlc3RyaWN0aW9uLm9uUmVhZHlcclxuXHQgKlxyXG5cdCAqIEB0eXBlIHtzdHJpbmdbXX1cclxuXHQgKi9cclxuXHR0aGlzLndhdGNoQXR0cnMgPSBbXTtcclxuXHJcblx0dGhpcy5xdWV1ZSA9IFtdO1xyXG59XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlICk7XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmlzUHJvY2VzcyAgICAgID0gbnVsbDtcclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnF1ZXVlICAgICAgICAgID0gW107XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuc2V0UmVzdHJpY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdHNldFJlc3RyaWN0aW9ucyggdGhpcyApO1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dCApIHtcclxuXHR0aGlzLnR5cGUgPSBnZXROb2RlVmFsaWRhdGlvblR5cGUoIG5vZGUgKTtcclxuXHJcblx0Y29uc3QgaW5oZXJpdCA9ICdpbmhlcml0JyA9PT0gdGhpcy50eXBlXHJcblx0ICAgICAgICAgICAgICAgID8gZ2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlKCBpbnB1dCApXHJcblx0ICAgICAgICAgICAgICAgIDogdGhpcy50eXBlO1xyXG5cclxuXHRyZXR1cm4gISFpbmhlcml0Py5sZW5ndGg7XHJcbn07XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcywgc2lnbmFsID0gbnVsbCApIHtcclxuXHRpZiAoIHRoaXMuaGFzU2VydmVyU2lkZSApIHtcclxuXHRcdHRoaXMuaW5wdXQubG9hZGluZy5zdGFydCgpO1xyXG5cdH1cclxuXHJcblx0bGV0IGVycm9ycyA9IGF3YWl0IGFsbFJlamVjdGVkKCBwcm9taXNlcyApO1xyXG5cclxuXHR0aGlzLnZhbHVlUHJldiA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHJcblx0aWYgKCB0aGlzLmhhc1NlcnZlclNpZGUgKSB7XHJcblx0XHR0aGlzLmlucHV0LmxvYWRpbmcuZW5kKCk7XHJcblx0fVxyXG5cclxuXHRpZiAoIHNpZ25hbD8uYWJvcnRlZCApIHtcclxuXHRcdGVycm9ycyA9IFtdO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGVycm9ycztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdmFsaWRhdGlvbkVycm9ycyB7QWR2YW5jZWRSZXN0cmljdGlvbltdfFJlc3RyaWN0aW9uW119XHJcbiAqL1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUucmVwb3J0UmF3ID0gZnVuY3Rpb24gKCB2YWxpZGF0aW9uRXJyb3JzICkge1xyXG5cdGxldCBtZXNzYWdlID0gJyc7XHJcblxyXG5cdGZvciAoIGNvbnN0IHZhbGlkYXRpb25FcnJvciBvZiB2YWxpZGF0aW9uRXJyb3JzICkge1xyXG5cdFx0bWVzc2FnZSA9IHZhbGlkYXRpb25FcnJvci5nZXRNZXNzYWdlKCk7XHJcblxyXG5cdFx0aWYgKCBtZXNzYWdlPy5sZW5ndGggKSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKCAhbWVzc2FnZSApIHtcclxuXHRcdHRoaXMuY2xlYXJSZXBvcnQoKTtcclxuXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLmluc2VydEVycm9yKCBtZXNzYWdlICk7XHJcbn07XHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0dGhpcy5tZXNzYWdlcyA9IGdldFZhbGlkYXRpb25NZXNzYWdlcyggaW5wdXQubm9kZXNbIDAgXSApO1xyXG5cclxuXHRSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XHJcbn07XHJcbi8qKlxyXG4gKiBAc2luY2UgMy4wLjUgSW50cm9kdWNlZFxyXG4gKi9cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLm9ic2VydmVBdHRycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRmb3IgKCBjb25zdCB3YXRjaEF0dHIgb2YgdGhpcy53YXRjaEF0dHJzICkge1xyXG5cdFx0aWYgKCAhdGhpcy5pbnB1dC5hdHRycy5oYXNPd25Qcm9wZXJ0eSggd2F0Y2hBdHRyICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7QmFzZUh0bWxBdHRyfVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBhdHRyID0gdGhpcy5pbnB1dC5hdHRyc1sgd2F0Y2hBdHRyIF07XHJcblxyXG5cdFx0YXR0ci52YWx1ZS53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlUHJldiA9IG51bGw7XHJcblx0XHRcdHRoaXMudmFsaWRhdGVPbkJsdXIoKTtcclxuXHRcdH0gKTtcclxuXHR9XHJcbn07XHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jbGVhclJlcG9ydCA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBpbm5lciA9ICgpID0+IHtcclxuXHRcdGNvbnN0IG5vZGUgPSBnZXRXcmFwcGVyKCB0aGlzLmdldE5vZGUoKSApO1xyXG5cclxuXHRcdGlmICggIW5vZGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdmaWVsZC1oYXMtZXJyb3InICk7XHJcblxyXG5cdFx0Y29uc3QgZXJyb3IgPSBnZXRFcnJvck5vZGUoIG5vZGUgKTtcclxuXHJcblx0XHRpZiAoICFlcnJvciApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVycm9yLnJlbW92ZSgpO1xyXG5cdH07XHJcblx0aW5uZXIoKTtcclxuXHR0aGlzLm1ha2VWYWxpZCgpO1xyXG59O1xyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaW5zZXJ0RXJyb3IgPSBmdW5jdGlvbiAoIG1lc3NhZ2UgKSB7XHJcblx0Y29uc3QgaW5uZXIgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBub2RlICA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XHJcblx0XHRjb25zdCBlcnJvciA9IHRoaXMuY3JlYXRlRXJyb3IoIG5vZGUsIG1lc3NhZ2UgKTtcclxuXHJcblx0XHRub2RlLmNsYXNzTGlzdC5hZGQoICdmaWVsZC1oYXMtZXJyb3InICk7XHJcblxyXG5cdFx0aWYgKCBlcnJvci5pc0Nvbm5lY3RlZCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGl0IGNhbiBiZSBvbiBmaWVsZHNfbGF5b3V0ID09PSAncm93J1xyXG5cdFx0Y29uc3QgY29sRW5kID0gbm9kZS5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItY29sX19lbmQnICk7XHJcblxyXG5cdFx0aWYgKCBjb2xFbmQgKSB7XHJcblx0XHRcdGNvbEVuZC5hcHBlbmRDaGlsZCggZXJyb3IgKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRub2RlLmFwcGVuZENoaWxkKCBlcnJvciApO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0aW5uZXIoKTtcclxuXHR0aGlzLm1ha2VJbnZhbGlkKCk7XHJcbn07XHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jcmVhdGVFcnJvciA9IGZ1bmN0aW9uIChcclxuXHRub2RlLCBtZXNzYWdlICkge1xyXG5cdGNvbnN0IGVycm9yID0gZ2V0RXJyb3JOb2RlKCBub2RlICk7XHJcblxyXG5cdGlmICggZXJyb3IgKSB7XHJcblx0XHRlcnJvci5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG5cclxuXHRcdHJldHVybiBlcnJvcjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlucHV0Tm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xyXG5cdGNvbnN0IGRpdiAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcblxyXG5cdGRpdi5jbGFzc0xpc3QuYWRkKCAnZXJyb3ItbWVzc2FnZScgKTtcclxuXHRkaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuXHRkaXYuaWQgICAgICAgID0gaW5wdXROb2RlLmlkICsgJ19fZXJyb3InO1xyXG5cclxuXHRyZXR1cm4gZGl2O1xyXG59O1xyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLm1ha2VJbnZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHdyYXBwZXIgICA9IGdldFdyYXBwZXIoIHRoaXMuZ2V0Tm9kZSgpICk7XHJcblx0Y29uc3QgZXJyb3JOb2RlID0gZ2V0RXJyb3JOb2RlKCB3cmFwcGVyICk7XHJcblxyXG5cdHRoaXMuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZSggJ2FyaWEtaW52YWxpZCcsICd0cnVlJyApO1xyXG5cdHRoaXMuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZShcclxuXHRcdCdhcmlhLWRlc2NyaWJlZGJ5JyxcclxuXHRcdGVycm9yTm9kZT8uaWQgPz8gZmFsc2UsXHJcblx0KTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5tYWtlVmFsaWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5nZXROb2RlKCkucmVtb3ZlQXR0cmlidXRlKCAnYXJpYS1pbnZhbGlkJyApO1xyXG5cdHRoaXMuZ2V0Tm9kZSgpLnJlbW92ZUF0dHJpYnV0ZSggJ2FyaWEtZGVzY3JpYmVkYnknICk7XHJcbn07XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICggYWRkVG9RdWV1ZSA9IGZhbHNlICkge1xyXG5cdC8vIERvbid0IHZhbGlkYXRlIG9uIGluaXRpYWwgbG9hZCBpZiBmaWVsZCBpcyBlbXB0eVxyXG5cdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHRcclxuXHRpZiAoICFjdXJyZW50VmFsdWUgfHwgY3VycmVudFZhbHVlID09PSAnJyApIHtcclxuXHRcdC8vIE9ubHkgc2tpcCB2YWxpZGF0aW9uIGlmIHRoaXMgaXMgdGhlIGluaXRpYWwgbG9hZCAodmFsdWVQcmV2IGlzIG51bGwpXHJcblx0XHQvLyBhbmQgdGhlIGZpZWxkIGlzIGVtcHR5IEFORCB3ZSdyZSBpbiBzaWxlbmNlIG1vZGUgKG5vdCBmb3JtIHN1Ym1pc3Npb24pXHJcblx0XHRpZiAoIHRoaXMudmFsdWVQcmV2ID09PSBudWxsICYmIHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNpbGVuY2UgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XHJcblxyXG5cdGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2V0U2lsZW5jZSggZmFsc2UgKTtcclxuXHJcblx0XHR0aGlzLnZhbGlkYXRlKCkuXHJcblx0XHRcdHRoZW4oICgpID0+IHt9ICkuXHJcblx0XHRcdGNhdGNoKCAoKSA9PiB7fSApLlxyXG5cdFx0XHRmaW5hbGx5KCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pc1Byb2Nlc3MgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRjb25zdCBxdWV1ZSA9IFsgLi4udGhpcy5xdWV1ZSBdO1xyXG5cdFx0XHRcdHRoaXMucXVldWUgID0gW107XHJcblxyXG5cdFx0XHRcdGlmICggIXF1ZXVlLmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLnZhbHVlUHJldiA9IG51bGw7XHJcblx0XHRcdFx0cXVldWUuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50KCkgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoKTtcclxuXHRcdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzE3NjZcclxuXHQgKi9cclxuXHRpZiAoIGFkZFRvUXVldWUgJiYgdGhpcy5pc1Byb2Nlc3MgKSB7XHJcblx0XHR0aGlzLnF1ZXVlID0gWyBjYWxsYmFjayBdO1xyXG5cdH1cclxuXHJcblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNQcm9jZXNzID0gdHJ1ZTtcclxuXHJcblx0Y2FsbGJhY2soKTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS52YWxpZGF0ZU9uQmx1ciA9IGZ1bmN0aW9uICggc2lnbmFsID0gbnVsbCApIHtcclxuXHQvKipcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNzY2XHJcblx0ICovXHJcblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdC8vIERvbid0IHZhbGlkYXRlIG9uIGluaXRpYWwgbG9hZCBpZiBmaWVsZCBpcyBlbXB0eVxyXG5cdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHRcclxuXHRpZiAoICFjdXJyZW50VmFsdWUgfHwgY3VycmVudFZhbHVlID09PSAnJyApIHtcclxuXHRcdC8vIE9ubHkgc2tpcCB2YWxpZGF0aW9uIGlmIHRoaXMgaXMgdGhlIGluaXRpYWwgbG9hZCAodmFsdWVQcmV2IGlzIG51bGwpXHJcblx0XHQvLyBhbmQgdGhlIGZpZWxkIGlzIGVtcHR5IEFORCB3ZSdyZSBpbiBzaWxlbmNlIG1vZGUgKG5vdCBmb3JtIHN1Ym1pc3Npb24pXHJcblx0XHRpZiAoIHRoaXMudmFsdWVQcmV2ID09PSBudWxsICYmIHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNpbGVuY2UgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuaXNQcm9jZXNzICAgICAgPSB0cnVlO1xyXG5cdHRoaXMuc2tpcFNlcnZlclNpZGUgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoIHRydWUgKTtcclxuXHR0aGlzLmNhblN1Ym1pdEZvcm0oIGZhbHNlICk7XHJcblx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQoIGZhbHNlICk7XHJcblxyXG5cdHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNldFNpbGVuY2UoIGZhbHNlICk7XHJcblxyXG5cdHRoaXMudmFsaWRhdGUoIHNpZ25hbCApLlxyXG5cdFx0dGhlbiggKCkgPT4ge30gKS5cclxuXHRcdGNhdGNoKCAoKSA9PiB7fSApLlxyXG5cdFx0ZmluYWxseSggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5oYXNTZXJ2ZXJTaWRlICA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlzUHJvY2VzcyAgICAgID0gbnVsbDtcclxuXHJcblx0XHRcdHRoaXMuaW5wdXQubm9kZXNbMF0ucmVhZE9ubHkgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmICggIXNpZ25hbD8uYWJvcnRlZCApIHtcclxuXHRcdFx0XHR0aGlzLnN3aXRjaEJ1dHRvbnNTdGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMuY2FuU3VibWl0Rm9ybSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5zd2l0Y2hCdXR0b25zU3RhdGUgPSBmdW5jdGlvbiggZm9yY2UgPSBmYWxzZSApIHtcclxuXHRjb25zdCBwYXJlbnRQYWdlID0gdGhpcy5pbnB1dC5ub2Rlc1swXS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcGFnZScgKTtcclxuXHJcblx0aWYgKCBwYXJlbnRQYWdlICYmICF0aGlzLmlucHV0LmdldENvbnRleHQoKS5zaWxlbmNlICkge1xyXG5cdFx0Y29uc3Qgc3dpdGNoQnV0dG9ucyA9IHBhcmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19uZXh0LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19hY3Rpb24tYnV0dG9uJ1xyXG5cdFx0KTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBzd2l0Y2hCdXR0b24gb2Ygc3dpdGNoQnV0dG9ucyApIHtcclxuXHJcblx0XHRcdGlmICggIXN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyX19zdWJtaXQnICkgJiYgIXRoaXMuaXNOb2RlQmVsb25nVGhpcyggc3dpdGNoQnV0dG9uICkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggIXN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2pldC1mb3JtLWJ1aWxkZXJfX3ByZXYtcGFnZScpICkge1xyXG5cdFx0XHRcdHN3aXRjaEJ1dHRvbi5kaXNhYmxlZCA9IGZvcmNlID09PSB0cnVlIHx8ICF0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzd2l0Y2hCdXR0b24uZGlzYWJsZWQgPSBmb3JjZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IGZ1bmN0aW9uKCBjYW5UcmlnZ2VyID0gdHJ1ZSApIHtcclxuXHRjb25zdCBmb3JtID0gdGhpcy5pbnB1dC5yb290LmZvcm07XHJcblxyXG5cdGlmICggZm9ybSApIHtcclxuXHRcdGZvcm0uY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gY2FuVHJpZ2dlcjtcclxuXHR9XHJcbn1cclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5jYW5TdWJtaXRGb3JtID0gZnVuY3Rpb24oIGNhblN1Ym1pdCA9IHRydWUgKSB7XHJcblx0Y29uc3QgZm9ybSA9IHRoaXMuaW5wdXQucm9vdC5mb3JtO1xyXG5cclxuXHRpZiAoIGZvcm0gKSB7XHJcblx0XHRmb3JtLmNhblN1Ym1pdEZvcm0gPSBjYW5TdWJtaXQ7XHJcblx0fVxyXG59XHJcblxyXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuaXNOb2RlQmVsb25nVGhpcyA9IGZ1bmN0aW9uKCBub2RlICkge1xyXG5cdGNvbnN0IHBhcmVudFBhZ2UgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1wYWdlJyApO1xyXG5cclxuXHRyZXR1cm4gcGFyZW50UGFnZSA/ICFwYXJlbnRQYWdlLmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXItcGFnZS0taGlkZGVuJyApIDogZmFsc2U7XHJcbn1cclxuXHJcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHR9XHJcblxyXG5cdC8vIERvbid0IHZhbGlkYXRlIG9uIGluaXRpYWwgbG9hZCBpZiBmaWVsZCBpcyBlbXB0eVxyXG5cdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHRcclxuXHRpZiAoICFjdXJyZW50VmFsdWUgfHwgY3VycmVudFZhbHVlID09PSAnJyApIHtcclxuXHRcdC8vIE9ubHkgc2tpcCB2YWxpZGF0aW9uIGlmIHRoaXMgaXMgdGhlIGluaXRpYWwgbG9hZCAodmFsdWVQcmV2IGlzIG51bGwpXHJcblx0XHQvLyBhbmQgdGhlIGZpZWxkIGlzIGVtcHR5IEFORCB3ZSdyZSBpbiBzaWxlbmNlIG1vZGUgKG5vdCBmb3JtIHN1Ym1pc3Npb24pXHJcblx0XHRpZiAoIHRoaXMudmFsdWVQcmV2ID09PSBudWxsICYmIHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNpbGVuY2UgKSB7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XHJcblx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQoIGZhbHNlICk7XHJcblxyXG5cdGlmICggdGhpcy5pbnB1dC5tYXNrVmFsaWRhdGlvbiApIHtcclxuXHRcdHRoaXMuaW5wdXQuY2hhbmdlU3RhdGVNYXNrVmFsaWRhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IHRydWU7XHJcblx0dGhpcy5za2lwU2VydmVyU2lkZSA9IGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0dGhpcy52YWxpZGF0ZSgpLnRoZW4oIHJlc29sdmUgKS5jYXRjaCggcmVqZWN0ICkuZmluYWxseShcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuaGFzU2VydmVyU2lkZSAgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmlzUHJvY2VzcyAgICAgID0gbnVsbDtcclxuXHJcblx0XHRcdFx0dGhpcy5pbnB1dC5ub2Rlc1swXS5yZWFkT25seSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN3aXRjaEJ1dHRvbnNTdGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0KCk7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHJlc3RyaWN0aW9uIHtBZHZhbmNlZFJlc3RyaWN0aW9ufFJlc3RyaWN0aW9ufVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNhblByb2Nlc3NSZXN0cmljdGlvbiA9IGZ1bmN0aW9uICggcmVzdHJpY3Rpb24gKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdC8vIGFsbG93IGFsbFxyXG5cdFx0IXRoaXMuc2tpcFNlcnZlclNpZGUgfHxcclxuXHRcdC8vIG9yIG9ubHkgbm90LVNlcnZlclNpZGVcclxuXHRcdCFyZXN0cmljdGlvbi5pc1NlcnZlclNpZGUoKVxyXG5cdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIHJlc3RyaWN0aW9uIHtBZHZhbmNlZFJlc3RyaWN0aW9ufFJlc3RyaWN0aW9ufVxyXG4gKi9cclxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiA9IGZ1bmN0aW9uICggcmVzdHJpY3Rpb24gKSB7XHJcblx0dGhpcy5oYXNTZXJ2ZXJTaWRlID0gcmVzdHJpY3Rpb24uaXNTZXJ2ZXJTaWRlKCkgPyB0cnVlIDogdGhpcy5oYXNTZXJ2ZXJTaWRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSZXBvcnRpbmc7XHJcbiIsImltcG9ydCBSZWFjaExpbWl0TnVtYmVycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZWFjaExpbWl0TnVtYmVycyc7XHJcbmltcG9ydCBOb3RFbm91Z2hOdW1iZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVub3VnaE51bWJlcnMnO1xyXG5pbXBvcnQgTm90VXJsIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdFVybCc7XHJcbmltcG9ydCBOb3RFbWFpbCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbWFpbCc7XHJcbmltcG9ydCBOb3RFbm91Z2hDaGFycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbm91Z2hDaGFycyc7XHJcbmltcG9ydCBSZWFjaExpbWl0Q2hhcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdENoYXJzJztcclxuaW1wb3J0IE5vdEVtcHR5UmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW1wdHlSZXN0cmljdGlvbic7XHJcbmltcG9ydCBOb3RDb21wbGV0ZUlucHV0bWFzayBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RDb21wbGV0ZUlucHV0bWFzayc7XHJcbmltcG9ydCBDdXN0b21SdWxlc1Jlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL0N1c3RvbVJ1bGVzUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgTXVzdENvbnRhaW5DaGFyYWN0ZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL011c3RDb250YWluQ2hhcmFjdGVycyc7XHJcbmltcG9ydCBNdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzJztcclxuaW1wb3J0IE1hdGNoUmVnZXhwIGZyb20gJy4vcmVzdHJpY3Rpb25zL01hdGNoUmVnZXhwJztcclxuaW1wb3J0IE5vdE1hdGNoUmVnZXhwIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdE1hdGNoUmVnZXhwJztcclxuaW1wb3J0IFNlcnZlclNpZGVDYWxsYmFjayBmcm9tICcuL3Jlc3RyaWN0aW9ucy9TZXJ2ZXJTaWRlQ2FsbGJhY2snO1xyXG5pbXBvcnQgTXVzdEVxdWFsIGZyb20gJy4vcmVzdHJpY3Rpb25zL011c3RFcXVhbCc7XHJcbmltcG9ydCBUb29FYXJseVRpbWVzdGFtcCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ub29FYXJseVRpbWVzdGFtcCc7XHJcbmltcG9ydCBUb29MYXRlVGltZXN0YW1wIGZyb20gJy4vcmVzdHJpY3Rpb25zL1Rvb0xhdGVUaW1lc3RhbXAnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVycyxcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuY29uc3QgZ2V0QWR2YW5jZWRSdWxlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmFkdmFuY2VkLnJ1bGVzJyxcclxuXHRbXHJcblx0XHRNdXN0Q29udGFpbkNoYXJhY3RlcnMsXHJcblx0XHRNdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMsXHJcblx0XHRNYXRjaFJlZ2V4cCxcclxuXHRcdE5vdE1hdGNoUmVnZXhwLFxyXG5cdFx0U2VydmVyU2lkZUNhbGxiYWNrLFxyXG5cdFx0TXVzdEVxdWFsLFxyXG5cdF0sXHJcbik7XHJcblxyXG4vKipcclxuICogQHR5cGUge0FycmF5PEN1c3RvbUJhc2VSZXN0cmljdGlvbj59XHJcbiAqL1xyXG5sZXQgYWR2YW5jZWRSdWxlcyA9IFtdO1xyXG5cclxuY29uc3QgZ2V0UmVzdHJpY3Rpb25zID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcclxuXHRbXHJcblx0XHRUb29FYXJseVRpbWVzdGFtcCxcclxuXHRcdFRvb0xhdGVUaW1lc3RhbXAsXHJcblx0XHRSZWFjaExpbWl0TnVtYmVycyxcclxuXHRcdE5vdEVub3VnaE51bWJlcnMsXHJcblx0XHROb3RVcmwsXHJcblx0XHROb3RFbWFpbCxcclxuXHRcdE5vdENvbXBsZXRlSW5wdXRtYXNrLFxyXG5cdFx0Tm90RW5vdWdoQ2hhcnMsXHJcblx0XHRSZWFjaExpbWl0Q2hhcnMsXHJcblx0XHROb3RFbXB0eVJlc3RyaWN0aW9uLFxyXG5cdFx0Q3VzdG9tUnVsZXNSZXN0cmljdGlvbixcclxuXHRdLFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtSZXN0cmljdGlvbltdfVxyXG4gKi9cclxubGV0IHJlc3RyaWN0aW9ucyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJlcGFyZWRSdWxlcyggcnVsZXMsIHJlcG9ydGluZyApIHtcclxuXHRjb25zdCByZXNwb25zZSA9IFtdO1xyXG5cclxuXHRpZiAoICFhZHZhbmNlZFJ1bGVzLmxlbmd0aCApIHtcclxuXHRcdGFkdmFuY2VkUnVsZXMgPSBnZXRBZHZhbmNlZFJ1bGVzKCk7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBjb25zdCBbIGluZGV4LCBydWxlIF0gb2YgT2JqZWN0LmVudHJpZXMoIHJ1bGVzICkgKSB7XHJcblx0XHRmb3IgKCBjb25zdCBhZHZhbmNlZFJ1bGUgb2YgYWR2YW5jZWRSdWxlcyApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudCA9IG5ldyBhZHZhbmNlZFJ1bGUoKTtcclxuXHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcclxuXHRcdFx0aWYgKCBydWxlLnR5cGUgIT09IGN1cnJlbnQuZ2V0U2x1ZygpICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlbGV0ZSBydWxlLnR5cGU7XHJcblxyXG5cdFx0XHRjdXJyZW50LnNldFJlcG9ydGluZyggcmVwb3J0aW5nICk7XHJcblx0XHRcdGN1cnJlbnQuc2V0QXR0cnMoIHsgLi4ucnVsZSwgaW5kZXggfSApO1xyXG5cdFx0XHRjdXJyZW50Lm9uUmVhZHkoKTtcclxuXHJcblx0XHRcdHJlc3BvbnNlLnB1c2goIGN1cnJlbnQgKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRXcmFwcGVyKCBub2RlICkge1xyXG5cdHJldHVybiBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXROb2RlVmFsaWRhdGlvblR5cGUoIG5vZGUgKSB7XHJcblx0Y29uc3Qgd3JhcHBlciAgICAgICAgICAgICAgICAgPSBnZXRXcmFwcGVyKCBub2RlICk7XHJcblx0Y29uc3QgeyB2YWxpZGF0aW9uVHlwZSA9ICcnIH0gPSB3cmFwcGVyPy5kYXRhc2V0ID8/IHt9O1xyXG5cclxuXHRyZXR1cm4gdmFsaWRhdGlvblR5cGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIGdldEluaGVyaXRWYWxpZGF0aW9uVHlwZSggaW5wdXQgKSB7XHJcblx0Y29uc3QgYWxsRm9ybXMgPSB3aW5kb3c/LkpldEZvcm1zVmFsaWRhdGlvbiA/PyBmYWxzZTtcclxuXHJcblx0aWYgKCBmYWxzZSA9PT0gYWxsRm9ybXMgKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtSWQgICAgICAgID0gaW5wdXQuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XHJcblx0Y29uc3QgeyB0eXBlID0gJycgfSA9IGFsbEZvcm1zWyBmb3JtSWQgXSA/PyB7fTtcclxuXHJcblx0cmV0dXJuIHR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXNzYWdlcyggbm9kZSApIHtcclxuXHRjb25zdCB3cmFwcGVyICAgICAgICAgICAgICAgICAgICAgICA9IGdldFdyYXBwZXIoIG5vZGUgKTtcclxuXHRjb25zdCB7IHZhbGlkYXRpb25NZXNzYWdlcyA9ICd7fScgfSA9IHdyYXBwZXI/LmRhdGFzZXQgPz8ge307XHJcblxyXG5cdHJldHVybiBKU09OLnBhcnNlKCB2YWxpZGF0aW9uTWVzc2FnZXMgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxyXG4gKiBAcGFyYW0gIHNsdWcgICAgICAgIHtzdHJpbmd9XHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldE1lc3NhZ2VCeVNsdWcoIHJlc3RyaWN0aW9uLCBzbHVnICkge1xyXG5cdGNvbnN0IHsgcmVwb3J0aW5nIH0gPSByZXN0cmljdGlvbjtcclxuXHRjb25zdCBtZXNzYWdlICAgICAgID0gcmVwb3J0aW5nLm1lc3NhZ2VzWyBzbHVnIF0gPz8gJyc7XHJcblxyXG5cdGlmICggbWVzc2FnZSApIHtcclxuXHRcdHJldHVybiBtZXNzYWdlO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgYWxsTWVzc2FnZXMgPSB3aW5kb3c/LkpldEZvcm1zVmFsaWRhdGlvbiA/PyBmYWxzZTtcclxuXHJcblx0aWYgKCBmYWxzZSA9PT0gYWxsTWVzc2FnZXMgKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtICAgICAgICAgPSByZXBvcnRpbmcuaW5wdXQuZ2V0U3VibWl0KCk7XHJcblx0Y29uc3QgeyBtZXNzYWdlcyB9ID0gYWxsTWVzc2FnZXNbIGZvcm0uZ2V0Rm9ybUlkKCkgXSA/PyB7fTtcclxuXHJcblx0cmV0dXJuIG1lc3NhZ2VzWyBzbHVnIF0gPz8gJyc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGhpcyB7Q3VzdG9tQmFzZVJlc3RyaWN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24oKSB7XHJcblx0aWYgKCAhdGhpcy5hdHRycz8uZmllbGQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQ7XHJcblx0Y29uc3QgaW5wdXQgICAgPSByb290LmdldElucHV0KCB0aGlzLmF0dHJzLmZpZWxkICk7XHJcblxyXG5cdGlucHV0LndhdGNoKCAoKSA9PiB7XHJcblx0XHR0aGlzLmF0dHJzLnZhbHVlID0gaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhlcmUgd2UgbmVlZCB0byByZXNldCB0aGUgYHZhbHVlUHJldmAgcHJvcGVydHksXHJcblx0XHQgKiBiZWNhdXNlIHJlcG9ydGluZyBsb2dpYyByZW1lbWJlciBwcmV2aW91cyB2YWx1ZSwgd2hpY2ggaXQgY2hlY2suXHJcblx0XHQgKlxyXG5cdFx0ICogQW5kIGlmIC52YWx1ZVByZXYgPT09IC5jdXJyZW50LnZhbHVlIC0+IHJlcG9ydGluZyB3aWxsIGJlIHNraXBwZWRcclxuXHRcdCAqXHJcblx0XHQgKiBAc2VlIEFkdmFuY2VkUmVwb3J0aW5nLmdldEVycm9yc1xyXG5cdFx0ICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UuaGFzQ2hhbmdlZFZhbHVlXHJcblx0XHQgKiBAdHlwZSB7bnVsbH1cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcudmFsdWVQcmV2ID0gbnVsbDtcclxuXHRcdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2UoKTtcclxuXHR9ICk7XHJcblxyXG5cdGlmICggIWlzRW1wdHkoIGlucHV0LnZhbHVlLmN1cnJlbnQgKSApIHtcclxuXHRcdHRoaXMuYXR0cnMudmFsdWUgPSBpbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cclxuICovXHJcbmZ1bmN0aW9uIHNldFJlc3RyaWN0aW9ucyggcmVwb3J0aW5nICkge1xyXG5cdGlmICggIXJlc3RyaWN0aW9ucy5sZW5ndGggKSB7XHJcblx0XHRyZXN0cmljdGlvbnMgPSBnZXRSZXN0cmljdGlvbnMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHJlc3RyaWN0aW9ucyApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVzdHJpY3Rpb24oKTtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCFjdXJyZW50LmlzU3VwcG9ydGVkKCByZXBvcnRpbmcuZ2V0Tm9kZSgpLCByZXBvcnRpbmcgKVxyXG5cdFx0KSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y3VycmVudC5zZXRSZXBvcnRpbmcoIHJlcG9ydGluZyApO1xyXG5cdFx0Y3VycmVudC5vblJlYWR5KCk7XHJcblxyXG5cdFx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5wdXNoKCBjdXJyZW50ICk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogWW91IGNhbm5vdCB1c2Ugbm9kZS5xdWVyeVNlbGVjdG9yIGluIHRoaXMgZnVuY3Rpb24sXHJcbiAqIGJlY2F1c2UgdGhlIFJlcGVhdGVyIEZpZWxkIHZhbGlkYXRpb24gd2lsbCByZXR1cm5cclxuICogYW4gZXJyb3IgZWxlbWVudCBmcm9tIHRoZSBpbnRlcm5hbCBmaWVsZC5cclxuICpcclxuICogQHBhcmFtICB3cmFwcGVyIHtFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFcnJvck5vZGUoIHdyYXBwZXIgKSB7XHJcblx0Zm9yICggY29uc3QgY2hpbGQgb2Ygd3JhcHBlci5jaGlsZHJlbiApIHtcclxuXHRcdGlmICggIWNoaWxkLmNsYXNzTGlzdC5jb250YWlucyggJ2Vycm9yLW1lc3NhZ2UnICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNoaWxkO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY29sRW5kTm9kZSA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcihcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1jb2xfX2VuZCcsXHJcblx0KTtcclxuXHJcblx0aWYgKCAhY29sRW5kTm9kZSApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBnZXRFcnJvck5vZGUoIGNvbEVuZE5vZGUgKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRnZXROb2RlVmFsaWRhdGlvblR5cGUsXHJcblx0Z2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlLFxyXG5cdGdldE1lc3NhZ2VCeVNsdWcsXHJcblx0Z2V0VmFsaWRhdGlvbk1lc3NhZ2VzLFxyXG5cdGdldFByZXBhcmVkUnVsZXMsXHJcblx0c2V0UmVzdHJpY3Rpb25zLFxyXG5cdG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uLFxyXG5cdGdldFdyYXBwZXIsXHJcblx0Z2V0RXJyb3JOb2RlLFxyXG59OyIsImltcG9ydCB7IGdldE1lc3NhZ2VCeVNsdWcgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFJlc3RyaWN0aW9uLFxyXG5cdCAgICAgIENhbGN1bGF0ZWRGb3JtdWxhLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBBZHZhbmNlZFJlc3RyaWN0aW9uKCkge1xyXG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5tZXNzYWdlICAgICAgPSAnJztcclxuXHR0aGlzLmZvcm11bGEgICAgICA9IG51bGw7XHJcblx0dGhpcy53YXRjaGVkQXR0cnMgPSBbXTtcclxufVxyXG5cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcclxuLyoqXHJcbiAqIEB0eXBlIHtDYWxjdWxhdGVkRm9ybXVsYX1cclxuICovXHJcbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmZvcm11bGEgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge0FycmF5fVxyXG4gKi9cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUud2F0Y2hlZEF0dHJzID0gW107XHJcblxyXG4vKipcclxuICogSWYgcmV0dXJucyB0cnVlIC0+IHZhbGlkYXRpb24gd2lsbCBiZVxyXG4gKiBzdGFydGVkIHdpdGggMTAwMCBtcyBkZWxheVxyXG4gKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuaXNTZXJ2ZXJTaWRlID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMubWVzc2FnZTtcclxufTtcclxuLyoqXHJcbiAqIEhlcmUgeW91IG5lZWQgdG8gcmV0dXJuIGEgcHJlcGFyZWQgbWVzc2FnZSxcclxuICogd2l0aCBwcm9jZXNzZWQgbWFjcm9zXHJcbiAqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuICdFcnJvcic7XHJcbn07XHJcbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldE1lc3NhZ2VCeVNsdWcgPSBmdW5jdGlvbiAoIHNsdWcgKSB7XHJcblx0cmV0dXJuIGdldE1lc3NhZ2VCeVNsdWcoIHRoaXMsIHNsdWcgKTtcclxufTtcclxuXHJcbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLm9uUmVhZHkgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5mb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRGb3JtdWxhKCB0aGlzLnJlcG9ydGluZy5pbnB1dCApO1xyXG5cclxuXHR0aGlzLmZvcm11bGEub2JzZXJ2ZSggdGhpcy5nZXRSYXdNZXNzYWdlKCkgKTtcclxuXHR0aGlzLmZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5mb3JtdWxhLmNhbGN1bGF0ZVN0cmluZygpO1xyXG5cdH07XHJcblx0dGhpcy5mb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cclxuXHRpZiAoICF0aGlzLndhdGNoZWRBdHRycy5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLnJlcG9ydGluZy53YXRjaEF0dHJzID0gW1xyXG5cdFx0Li4ubmV3IFNldCggW1xyXG5cdFx0XHQuLi50aGlzLnJlcG9ydGluZy53YXRjaEF0dHJzLFxyXG5cdFx0XHQuLi50aGlzLndhdGNoZWRBdHRycyxcclxuXHRcdF0gKSxcclxuXHRdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSZXN0cmljdGlvbjtcclxuXHJcblxyXG4iLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gQ3VzdG9tQmFzZVJlc3RyaWN0aW9uKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmF0dHJzID0ge307XHJcbn1cclxuXHJcbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5hdHRycyAgICAgICAgID0ge307XHJcbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMgICAgICA9IGZ1bmN0aW9uICggYXR0cnMgKSB7XHJcblx0dGhpcy5hdHRycyA9IGF0dHJzO1xyXG59O1xyXG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFNsdWcgICAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKCAneW91IG5lZWQgdG8gcmV0dXJuIHNsdWcgb2YgcnVsZScgKTtcclxufTtcclxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLmF0dHJzPy5tZXNzYWdlID8/ICcnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uOyIsImltcG9ydCBBZHZhbmNlZFJlc3RyaWN0aW9uIGZyb20gJy4vQWR2YW5jZWRSZXN0cmljdGlvbic7XHJcblxyXG5pbXBvcnQgeyBnZXRQcmVwYXJlZFJ1bGVzIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24oKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHJvb3QgID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xyXG5cdFx0Y29uc3QgcnVsZXMgPSBKU09OLnBhcnNlKCByb290LmRhdGFzZXQ/LnZhbGlkYXRpb25SdWxlcyA/PyAnW10nICk7XHJcblxyXG5cdFx0aWYgKCAhQm9vbGVhbiggcnVsZXMubGVuZ3RoICkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zID0gW1xyXG5cdFx0XHQuLi5yZXBvcnRpbmcucmVzdHJpY3Rpb25zLFxyXG5cdFx0XHQuLi5nZXRQcmVwYXJlZFJ1bGVzKCBydWxlcywgcmVwb3J0aW5nICksXHJcblx0XHRdO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG59XHJcblxyXG5DdXN0b21SdWxlc1Jlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUsXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SdWxlc1Jlc3RyaWN0aW9uOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgeyBvYnNlcnZlRmllbGRSZXN0cmljdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBNYXRjaFJlZ2V4cCgpIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3JlZ2V4cCc7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcbk1hdGNoUmVnZXhwLnByb3RvdHlwZSAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuTWF0Y2hSZWdleHAucHJvdG90eXBlLnNldEF0dHJzID0gZnVuY3Rpb24gKCBhdHRycyApIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzLmNhbGwoIHRoaXMsIGF0dHJzICk7XHJcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG59O1xyXG5NYXRjaFJlZ2V4cC5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdGlmICggIXZhbHVlICkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoIHRoaXMuYXR0cnMudmFsdWUsICdnJyApO1xyXG5cclxuXHRyZXR1cm4gcmVnZXhwLnRlc3QoIHZhbHVlICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaFJlZ2V4cDsiLCJpbXBvcnQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uIGZyb20gJy4vQ3VzdG9tQmFzZVJlc3RyaWN0aW9uJztcclxuaW1wb3J0IHsgb2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gTXVzdENvbnRhaW5DaGFyYWN0ZXJzKCkge1xyXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2NvbnRhaW4nO1xyXG5cdH07XHJcblxyXG59XHJcblxyXG5NdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5NdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnNldEF0dHJzID0gZnVuY3Rpb24gKCBhdHRycyApIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzLmNhbGwoIHRoaXMsIGF0dHJzICk7XHJcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG59O1xyXG5cclxuTXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHJcblx0cmV0dXJuICF2YWx1ZSB8fCB2YWx1ZS5pbmNsdWRlcyggdGhpcy5hdHRycy52YWx1ZSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXVzdENvbnRhaW5DaGFyYWN0ZXJzOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgeyBvYnNlcnZlRmllbGRSZXN0cmljdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBNdXN0RXF1YWwoKSB7XHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnZXF1YWwnO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPT09IHRoaXMuYXR0cnMudmFsdWU7XHJcblx0fTtcclxufVxyXG5cclxuTXVzdEVxdWFsLnByb3RvdHlwZSAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuTXVzdEVxdWFsLnByb3RvdHlwZS5zZXRBdHRycyA9IGZ1bmN0aW9uICggYXR0cnMgKSB7XHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRBdHRycy5jYWxsKCB0aGlzLCBhdHRycyApO1xyXG5cdG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11c3RFcXVhbDsiLCJpbXBvcnQgTXVzdENvbnRhaW5DaGFyYWN0ZXJzIGZyb20gJy4vTXVzdENvbnRhaW5DaGFyYWN0ZXJzJztcclxuXHJcbmZ1bmN0aW9uIE11c3ROb3RDb250YWluQ2hhcmFjdGVycygpIHtcclxuXHRNdXN0Q29udGFpbkNoYXJhY3RlcnMuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdjb250YWluX25vdCc7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCAhTXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZS52YWxpZGF0ZS5jYWxsKCB0aGlzICk7XHJcblx0fTtcclxufVxyXG5cclxuTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0TXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11c3ROb3RDb250YWluQ2hhcmFjdGVyczsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90Q29tcGxldGVJbnB1dG1hc2soKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlcl9fbWFza2VkLWZpZWxkJyApICYmXHJcblx0XHRcdGpRdWVyeS5mbi5pbnB1dG1hc2tcclxuXHRcdCk7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuXHRcdGNvbnN0IG5vZGUgID0gdGhpcy5yZXBvcnRpbmcuZ2V0Tm9kZSgpO1xyXG5cclxuXHRcdHJldHVybiAhdmFsdWUgfHwgbm9kZS5pbnB1dG1hc2suaXNDb21wbGV0ZSgpO1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2lucHV0bWFzaycgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob3RDb21wbGV0ZUlucHV0bWFzay5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90Q29tcGxldGVJbnB1dG1hc2s7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIE5vdEVtYWlsKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gJ2VtYWlsJyA9PT0gbm9kZS50eXBlO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCAvXltcXHctXFwuXFwrXStAKFtcXHctXStcXC4pK1tcXHctXXsxLDZ9JC8udGVzdCggdmFsdWUgKTtcclxuXHR9O1xyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdlbWFpbCcgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob3RFbWFpbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90RW1haWw7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBpc0VtcHR5LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBOb3RFbXB0eVJlc3RyaWN0aW9uKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLnR5cGUgPSAncmVxdWlyZWQnO1xyXG59XHJcblxyXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0cmV0dXJuIHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkO1xyXG59O1xyXG5Ob3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRyZXR1cm4gIWlzRW1wdHkoIHZhbHVlICk7XHJcbn07XHJcbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2VtcHR5JyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90RW1wdHlSZXN0cmljdGlvbjsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90RW5vdWdoQ2hhcnMoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtaW5MZW5ndGgnICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgbWluTGVuZ3RoID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gZmFsc2UgIT09IG1pbkxlbmd0aDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgbGVuZ3RoICAgICAgICA9IHRoaXMuZ2V0VmFsdWUoKT8ubGVuZ3RoO1xyXG5cdFx0Y29uc3QgeyBtaW5MZW5ndGggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiAhbGVuZ3RoIHx8IGxlbmd0aCA+PSArbWluTGVuZ3RoLnZhbHVlLmN1cnJlbnQ7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2NoYXJfbWluJyApO1xyXG5cdH07XHJcbn1cclxuXHJcbk5vdEVub3VnaENoYXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RFbm91Z2hDaGFyczsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90RW5vdWdoTnVtYmVycygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21pbicgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRjb25zdCB7IG1pbiA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtaW4gJiYgWyAnbnVtYmVyJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlICAgPSB0aGlzLmdldFZhbHVlKCk7XHJcblx0XHRjb25zdCB7IG1pbiB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCArdmFsdWUgPj0gK21pbi52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ251bWJlcl9taW4nICk7XHJcblx0fTtcclxufVxyXG5cclxuTm90RW5vdWdoTnVtYmVycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90RW5vdWdoTnVtYmVyczsiLCJpbXBvcnQgTWF0Y2hSZWdleHAgZnJvbSAnLi9NYXRjaFJlZ2V4cCc7XHJcblxyXG5mdW5jdGlvbiBOb3RNYXRjaFJlZ2V4cCgpIHtcclxuXHRNYXRjaFJlZ2V4cC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3JlZ2V4cF9ub3QnO1xyXG5cdH07XHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdHJldHVybiAhdmFsdWUgfHwgIU1hdGNoUmVnZXhwLnByb3RvdHlwZS52YWxpZGF0ZS5jYWxsKCB0aGlzICk7XHJcblx0fTtcclxufVxyXG5cclxuTm90TWF0Y2hSZWdleHAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF0Y2hSZWdleHAucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RNYXRjaFJlZ2V4cDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTm90VXJsKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gJ3VybCcgPT09IG5vZGUudHlwZTtcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdCF2YWx1ZSB8fCAvKChtYWlsdG9cXDp8KG5ld3N8KGh0fGYpdHAocz8pKVxcOlxcL1xcLylcXFMrKS8udGVzdCggdmFsdWUgKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICd1cmwnICk7XHJcblx0fTtcclxufVxyXG5cclxuTm90VXJsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RVcmw7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIFJlYWNoTGltaXRDaGFycygpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heExlbmd0aCcgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZSAhPT0gbWF4TGVuZ3RoO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlICAgICAgICAgPSB0aGlzLmdldFZhbHVlKCk/Lmxlbmd0aDtcclxuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlIDw9ICttYXhMZW5ndGgudmFsdWUuY3VycmVudDtcclxuXHR9O1xyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdjaGFyX21heCcgKTtcclxuXHR9O1xyXG59XHJcblxyXG5SZWFjaExpbWl0Q2hhcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWNoTGltaXRDaGFyczsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gUmVhY2hMaW1pdE51bWJlcnMoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXgnICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0Y29uc3QgeyBtYXggPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZSAhPT0gbWF4ICYmIFsgJ251bWJlcicsICdyYW5nZScgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB2YWx1ZSAgID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3QgeyBtYXggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiAhdmFsdWUgfHwgK3ZhbHVlIDw9ICttYXgudmFsdWUuY3VycmVudDtcclxuXHR9O1xyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdudW1iZXJfbWF4JyApO1xyXG5cdH07XHJcbn1cclxuXHJcblJlYWNoTGltaXROdW1iZXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjaExpbWl0TnVtYmVyczsiLCJpbXBvcnQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uIGZyb20gJy4vQ3VzdG9tQmFzZVJlc3RyaWN0aW9uJztcclxuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcclxuXHJcbmZ1bmN0aW9uIFNlcnZlclNpZGVDYWxsYmFjaygpIHtcclxuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgICAgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc3NyJztcclxuXHR9O1xyXG5cdHRoaXMuaXNTZXJ2ZXJTaWRlICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHR0aGlzLnZhbGlkYXRlUHJvbWlzZSA9IGFzeW5jIGZ1bmN0aW9uICggc2lnbmFsID0gbnVsbCApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFZhbHVlKCk7XHJcblxyXG5cdFx0aWYgKCAhY3VycmVudCApIHtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmdldEZvcm1EYXRhKCk7XHJcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5nZXRSb290KCk7XHJcblx0XHRjb25zdCBzc3JWYWxpZGF0aW9uTWV0aG9kID0gcm9vdE5vZGUuZ2V0QXR0cmlidXRlKCdzc3JfdmFsaWRhdGlvbl9tZXRob2QnKSB8fCAncmVzdCc7XHJcblxyXG5cdFx0c3dpdGNoIChzc3JWYWxpZGF0aW9uTWV0aG9kKSB7XHJcblx0XHRcdGNhc2UgJ2FkbWluX2FqYXgnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlVmlhQWRtaW5BamF4KGJvZHksIHNpZ25hbCk7XHJcblxyXG5cdFx0XHRjYXNlICdzZWxmJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZVZpYVNlbGZSZXF1ZXN0KGJvZHksIHNpZ25hbCk7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlVmlhUmVzdChib2R5LCBzaWduYWwpO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlVmlhUmVzdCA9IGFzeW5jIGZ1bmN0aW9uIChib2R5LCBzaWduYWwpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpRmV0Y2goe1xyXG5cdFx0XHRcdHBhdGg6ICcvamV0LWZvcm0tYnVpbGRlci92MS92YWxpZGF0ZS1maWVsZCcsXHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keSxcclxuXHRcdFx0XHRzaWduYWxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U/LnJlc3VsdCA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGVWaWFBZG1pbkFqYXggPSBhc3luYyBmdW5jdGlvbiAoYm9keSwgc2lnbmFsKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzLmFkbWluYWpheHVybCwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcblx0XHRcdFx0Ym9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcblx0XHRcdFx0XHRhY3Rpb246ICdqZXRfZmJfc3NyX3ZhbGlkYXRpb25fYWpheCcsXHJcblx0XHRcdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShPYmplY3QuZnJvbUVudHJpZXMoYm9keSkpLFxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdHNpZ25hbCxcclxuXHRcdFx0fSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U/LnJlc3VsdCA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGVWaWFTZWxmUmVxdWVzdCA9IGFzeW5jIGZ1bmN0aW9uIChib2R5LCBzaWduYWwpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLnNldCgnamV0X2ZiX3Nzcl9zZWxmX3ZhbGlkYXRpb24nLCAnMScpO1xyXG5cclxuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgYm9keS5lbnRyaWVzKCkpIHtcclxuXHRcdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0c2lnbmFsLFxyXG5cdFx0XHR9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcblx0XHRcdHJldHVybiByZXNwb25zZT8ucmVzdWx0ID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdCgpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRGb3JtRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgaW5wdXQgfSAgICA9IHRoaXMucmVwb3J0aW5nO1xyXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gaW5wdXQuZ2V0Um9vdCgpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCByb290Tm9kZSApO1xyXG5cdFx0Zm9ybURhdGEuZGVsZXRlKCAnX3dwbm9uY2UnICk7XHJcblx0XHRmb3JtRGF0YS5zZXQoICdfamZiX3ZhbGlkYXRpb25fcnVsZV9pbmRleCcsIHRoaXMuYXR0cnMuaW5kZXggKTtcclxuXHRcdGZvciAoIGNvbnN0IHBhdGhFbGVtZW50IG9mIGlucHV0LnBhdGggKSB7XHJcblx0XHRcdGZvcm1EYXRhLmFwcGVuZCggJ19qZmJfdmFsaWRhdGlvbl9wYXRoW10nLCBwYXRoRWxlbWVudCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmb3JtRGF0YTtcclxuXHR9O1xyXG5cclxufVxyXG5cclxuU2VydmVyU2lkZUNhbGxiYWNrLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVDYWxsYmFjazsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xyXG5cclxuY29uc3QgeyBnZXRUaW1lc3RhbXAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gVG9vRWFybHlUaW1lc3RhbXAoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtaW4nICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgbWluID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRmYWxzZSAhPT0gbWluICYmXHJcblx0XHRcdFsgJ3RpbWUnLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlIClcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdGlmICggIXZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IG1pbiB9ICAgICAgICAgICA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gICAgICAgICAgPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCB7IHRpbWU6IG1pblRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWluLnZhbHVlLmN1cnJlbnQgKTtcclxuXHJcblx0XHRyZXR1cm4gdGltZSA+PSBtaW5UaW1lO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21pbicgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ub29FYXJseVRpbWVzdGFtcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vRWFybHlUaW1lc3RhbXA7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuXHJcbmNvbnN0IHsgZ2V0VGltZXN0YW1wIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIFRvb0xhdGVUaW1lc3RhbXAoKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXgnICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgbWF4ID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRmYWxzZSAhPT0gbWF4ICYmXHJcblx0XHRcdFsgJ3RpbWUnLCAnZGF0ZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlIClcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG5cclxuXHRcdGlmICggIXZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IG1heCB9ICAgICAgICAgICA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gICAgICAgICAgPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCB7IHRpbWU6IG1heFRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWF4LnZhbHVlLmN1cnJlbnQgKTtcclxuXHJcblx0XHRyZXR1cm4gdGltZSA8PSBtYXhUaW1lO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21heCcgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ub29MYXRlVGltZXN0YW1wLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29MYXRlVGltZXN0YW1wOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFkdmFuY2VkUmVwb3J0aW5nIGZyb20gJy4vQWR2YW5jZWRSZXBvcnRpbmcnO1xyXG5pbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9BZHZhbmNlZFJlc3RyaWN0aW9uJztcclxuaW1wb3J0IE5vdEVtcHR5UmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90RW1wdHlSZXN0cmljdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9vYnNlcnZlLWR5bmFtaWMtYXR0cnMnLFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcclxuXHRcdG9ic2VydmFibGUuZ2V0SW5wdXRzKCkuZm9yRWFjaCggaW5wdXQgPT4ge1xyXG5cdFx0XHRpZiAoICEoXHJcblx0XHRcdFx0aW5wdXQucmVwb3J0aW5nIGluc3RhbmNlb2YgQWR2YW5jZWRSZXBvcnRpbmdcclxuXHRcdFx0KSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aW5wdXQucmVwb3J0aW5nLm9ic2VydmVBdHRycygpO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0MTEsXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZXBvcnRpbmcnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2FkdmFuY2VkLXJlcG9ydGluZycsXHJcblx0ZnVuY3Rpb24gKCByZXBvcnRpbmcgKSB7XHJcblx0XHRyZXBvcnRpbmcgPSBbIEFkdmFuY2VkUmVwb3J0aW5nLCAuLi5yZXBvcnRpbmcgXTtcclxuXHJcblx0XHRyZXR1cm4gcmVwb3J0aW5nO1xyXG5cdH0sXHJcbik7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxyXG5cdCksXHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbixcclxuXHROb3RFbXB0eVJlc3RyaWN0aW9uLFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==