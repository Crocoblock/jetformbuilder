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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL09BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7OztBQ3ZDQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvQWR2YW5jZWRSZXBvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL0FkdmFuY2VkUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9DdXN0b21CYXNlUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9DdXN0b21SdWxlc1Jlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTWF0Y2hSZWdleHAuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0Q29udGFpbkNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0RXF1YWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ob3RDb21wbGV0ZUlucHV0bWFzay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVtYWlsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW1wdHlSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdEVub3VnaENoYXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90RW5vdWdoTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05vdE1hdGNoUmVnZXhwLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvTm90VXJsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdENoYXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVhY2hMaW1pdE51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9TZXJ2ZXJTaWRlQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvYWR2YW5jZWQucmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9Ub29FYXJseVRpbWVzdGFtcC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9hZHZhbmNlZC5yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Rvb0xhdGVUaW1lc3RhbXAuanMiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYXBpRmV0Y2hcIl0iLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL2FkdmFuY2VkLnJlcG9ydGluZy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGdldEVycm9yTm9kZSxcblx0Z2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlLFxuXHRnZXROb2RlVmFsaWRhdGlvblR5cGUsXG5cdGdldFZhbGlkYXRpb25NZXNzYWdlcyxcblx0Z2V0V3JhcHBlcixcblx0c2V0UmVzdHJpY3Rpb25zLFxufSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgUmVwb3J0aW5nSW50ZXJmYWNlLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHtcblx0ICAgICAgYWxsUmVqZWN0ZWQsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbi8qKlxuICogQHByb3BlcnR5IHtBZHZhbmNlZFJlc3RyaWN0aW9ufSByZXN0cmljdGlvbnMgTGlzdCBvZiBhZHZhbmNlZCByZXN0cmljdGlvbnNcbiAqXG4gKiBAdGhpcyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIEFkdmFuY2VkUmVwb3J0aW5nKCkge1xuXHRSZXBvcnRpbmdJbnRlcmZhY2UuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMudHlwZSAgICAgICAgICAgPSAnaW5oZXJpdCc7XG5cdHRoaXMubWVzc2FnZXMgICAgICAgPSB7fTtcblx0dGhpcy5za2lwU2VydmVyU2lkZSA9IHRydWU7XG5cblx0LyoqXG5cdCAqIENvbXB1dGVkIHByb3BlcnR5IHdoaWNoIGNvbnRhaW4gYWxsIGF0dHJzXG5cdCAqIGZvciBhbGwgc3VwcG9ydGVkIHJlc3RyaWN0aW9uc1xuXHQgKlxuXHQgKiBAc2VlIEFkdmFuY2VkUmVzdHJpY3Rpb24ub25SZWFkeVxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nW119XG5cdCAqL1xuXHR0aGlzLndhdGNoQXR0cnMgPSBbXTtcblxuXHR0aGlzLnF1ZXVlID0gW107XG59XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUgKTtcblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnNraXBTZXJ2ZXJTaWRlID0gdHJ1ZTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5oYXNTZXJ2ZXJTaWRlICA9IGZhbHNlO1xuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmlzUHJvY2VzcyAgICAgID0gbnVsbDtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5xdWV1ZSAgICAgICAgICA9IFtdO1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuc2V0UmVzdHJpY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuXHRzZXRSZXN0cmljdGlvbnMoIHRoaXMgKTtcbn07XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXQgKSB7XG5cdHRoaXMudHlwZSA9IGdldE5vZGVWYWxpZGF0aW9uVHlwZSggbm9kZSApO1xuXG5cdGNvbnN0IGluaGVyaXQgPSAnaW5oZXJpdCcgPT09IHRoaXMudHlwZVxuXHQgICAgICAgICAgICAgICAgPyBnZXRJbmhlcml0VmFsaWRhdGlvblR5cGUoIGlucHV0IClcblx0ICAgICAgICAgICAgICAgIDogdGhpcy50eXBlO1xuXG5cdHJldHVybiAhIWluaGVyaXQ/Lmxlbmd0aDtcbn07XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5nZXRFcnJvcnNSYXcgPSBhc3luYyBmdW5jdGlvbiAoIHByb21pc2VzLCBzaWduYWwgPSBudWxsICkge1xuXHRpZiAoIHRoaXMuaGFzU2VydmVyU2lkZSApIHtcblx0XHR0aGlzLmlucHV0LmxvYWRpbmcuc3RhcnQoKTtcblx0fVxuXG5cdGxldCBlcnJvcnMgPSBhd2FpdCBhbGxSZWplY3RlZCggcHJvbWlzZXMgKTtcblxuXHR0aGlzLnZhbHVlUHJldiA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcblxuXHRpZiAoIHRoaXMuaGFzU2VydmVyU2lkZSApIHtcblx0XHR0aGlzLmlucHV0LmxvYWRpbmcuZW5kKCk7XG5cdH1cblxuXHRpZiAoIHNpZ25hbD8uYWJvcnRlZCApIHtcblx0XHRlcnJvcnMgPSBbXTtcblx0fVxuXG5cdHJldHVybiBlcnJvcnM7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB2YWxpZGF0aW9uRXJyb3JzIHtBZHZhbmNlZFJlc3RyaWN0aW9uW118UmVzdHJpY3Rpb25bXX1cbiAqL1xuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnJlcG9ydFJhdyA9IGZ1bmN0aW9uICggdmFsaWRhdGlvbkVycm9ycyApIHtcblx0bGV0IG1lc3NhZ2UgPSAnJztcblxuXHRmb3IgKCBjb25zdCB2YWxpZGF0aW9uRXJyb3Igb2YgdmFsaWRhdGlvbkVycm9ycyApIHtcblx0XHRtZXNzYWdlID0gdmFsaWRhdGlvbkVycm9yLmdldE1lc3NhZ2UoKTtcblxuXHRcdGlmICggbWVzc2FnZT8ubGVuZ3RoICkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhbWVzc2FnZSApIHtcblx0XHR0aGlzLmNsZWFyUmVwb3J0KCk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmluc2VydEVycm9yKCBtZXNzYWdlICk7XG59O1xuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0dGhpcy5tZXNzYWdlcyA9IGdldFZhbGlkYXRpb25NZXNzYWdlcyggaW5wdXQubm9kZXNbIDAgXSApO1xuXG5cdFJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcbn07XG4vKipcbiAqIEBzaW5jZSAzLjAuNSBJbnRyb2R1Y2VkXG4gKi9cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5vYnNlcnZlQXR0cnMgPSBmdW5jdGlvbiAoKSB7XG5cdGZvciAoIGNvbnN0IHdhdGNoQXR0ciBvZiB0aGlzLndhdGNoQXR0cnMgKSB7XG5cdFx0aWYgKCAhdGhpcy5pbnB1dC5hdHRycy5oYXNPd25Qcm9wZXJ0eSggd2F0Y2hBdHRyICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0Jhc2VIdG1sQXR0cn1cblx0XHQgKi9cblx0XHRjb25zdCBhdHRyID0gdGhpcy5pbnB1dC5hdHRyc1sgd2F0Y2hBdHRyIF07XG5cblx0XHRhdHRyLnZhbHVlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlUHJldiA9IG51bGw7XG5cdFx0XHR0aGlzLnZhbGlkYXRlT25CbHVyKCk7XG5cdFx0fSApO1xuXHR9XG59O1xuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNsZWFyUmVwb3J0ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBpbm5lciA9ICgpID0+IHtcblx0XHRjb25zdCBub2RlID0gZ2V0V3JhcHBlciggdGhpcy5nZXROb2RlKCkgKTtcblxuXHRcdGlmICggIW5vZGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnZmllbGQtaGFzLWVycm9yJyApO1xuXG5cdFx0Y29uc3QgZXJyb3IgPSBnZXRFcnJvck5vZGUoIG5vZGUgKTtcblxuXHRcdGlmICggIWVycm9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVycm9yLnJlbW92ZSgpO1xuXHR9O1xuXHRpbm5lcigpO1xuXHR0aGlzLm1ha2VWYWxpZCgpO1xufTtcbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5pbnNlcnRFcnJvciA9IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcblx0Y29uc3QgaW5uZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSAgPSBnZXRXcmFwcGVyKCB0aGlzLmdldE5vZGUoKSApO1xuXHRcdGNvbnN0IGVycm9yID0gdGhpcy5jcmVhdGVFcnJvciggbm9kZSwgbWVzc2FnZSApO1xuXG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKCAnZmllbGQtaGFzLWVycm9yJyApO1xuXG5cdFx0aWYgKCBlcnJvci5pc0Nvbm5lY3RlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBpdCBjYW4gYmUgb24gZmllbGRzX2xheW91dCA9PT0gJ3Jvdydcblx0XHRjb25zdCBjb2xFbmQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlci1jb2xfX2VuZCcgKTtcblxuXHRcdGlmICggY29sRW5kICkge1xuXHRcdFx0Y29sRW5kLmFwcGVuZENoaWxkKCBlcnJvciApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoIGVycm9yICk7XG5cdFx0fVxuXHR9O1xuXHRpbm5lcigpO1xuXHR0aGlzLm1ha2VJbnZhbGlkKCk7XG59O1xuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNyZWF0ZUVycm9yID0gZnVuY3Rpb24gKFxuXHRub2RlLCBtZXNzYWdlICkge1xuXHRjb25zdCBlcnJvciA9IGdldEVycm9yTm9kZSggbm9kZSApO1xuXG5cdGlmICggZXJyb3IgKSB7XG5cdFx0ZXJyb3IuaW5uZXJIVE1MID0gbWVzc2FnZTtcblxuXHRcdHJldHVybiBlcnJvcjtcblx0fVxuXG5cdGNvbnN0IGlucHV0Tm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xuXHRjb25zdCBkaXYgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXG5cdGRpdi5jbGFzc0xpc3QuYWRkKCAnZXJyb3ItbWVzc2FnZScgKTtcblx0ZGl2LmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdGRpdi5pZCAgICAgICAgPSBpbnB1dE5vZGUuaWQgKyAnX19lcnJvcic7XG5cblx0cmV0dXJuIGRpdjtcbn07XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5tYWtlSW52YWxpZCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgd3JhcHBlciAgID0gZ2V0V3JhcHBlciggdGhpcy5nZXROb2RlKCkgKTtcblx0Y29uc3QgZXJyb3JOb2RlID0gZ2V0RXJyb3JOb2RlKCB3cmFwcGVyICk7XG5cblx0dGhpcy5nZXROb2RlKCkuc2V0QXR0cmlidXRlKCAnYXJpYS1pbnZhbGlkJywgJ3RydWUnICk7XG5cdHRoaXMuZ2V0Tm9kZSgpLnNldEF0dHJpYnV0ZShcblx0XHQnYXJpYS1kZXNjcmliZWRieScsXG5cdFx0ZXJyb3JOb2RlPy5pZCA/PyBmYWxzZSxcblx0KTtcbn07XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS5tYWtlVmFsaWQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuZ2V0Tm9kZSgpLnJlbW92ZUF0dHJpYnV0ZSggJ2FyaWEtaW52YWxpZCcgKTtcblx0dGhpcy5nZXROb2RlKCkucmVtb3ZlQXR0cmlidXRlKCAnYXJpYS1kZXNjcmliZWRieScgKTtcbn07XG5cbkFkdmFuY2VkUmVwb3J0aW5nLnByb3RvdHlwZS52YWxpZGF0ZU9uQ2hhbmdlID0gZnVuY3Rpb24gKCBhZGRUb1F1ZXVlID0gZmFsc2UgKSB7XG5cblx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoIHRydWUgKTtcblxuXHRjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0XHR0aGlzLmlucHV0LmdldENvbnRleHQoKS5zZXRTaWxlbmNlKCBmYWxzZSApO1xuXG5cdFx0dGhpcy52YWxpZGF0ZSgpLlxuXHRcdFx0dGhlbiggKCkgPT4ge30gKS5cblx0XHRcdGNhdGNoKCAoKSA9PiB7fSApLlxuXHRcdFx0ZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmlzUHJvY2VzcyA9IG51bGw7XG5cblx0XHRcdFx0Y29uc3QgcXVldWUgPSBbIC4uLnRoaXMucXVldWUgXTtcblx0XHRcdFx0dGhpcy5xdWV1ZSAgPSBbXTtcblxuXHRcdFx0XHRpZiAoICFxdWV1ZS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnZhbHVlUHJldiA9IG51bGw7XG5cdFx0XHRcdHF1ZXVlLmZvckVhY2goIGN1cnJlbnQgPT4gY3VycmVudCgpICk7XG5cblx0XHRcdFx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoKTtcblx0XHRcdH0gKTtcblx0fTtcblxuXHQvKipcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTc2NlxuXHQgKi9cblx0aWYgKCBhZGRUb1F1ZXVlICYmIHRoaXMuaXNQcm9jZXNzICkge1xuXHRcdHRoaXMucXVldWUgPSBbIGNhbGxiYWNrIF07XG5cdH1cblxuXHRpZiAoIHRoaXMuaXNQcm9jZXNzICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuaXNQcm9jZXNzID0gdHJ1ZTtcblxuXHRjYWxsYmFjaygpO1xufTtcblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLnZhbGlkYXRlT25CbHVyID0gZnVuY3Rpb24gKCBzaWduYWwgPSBudWxsICkge1xuXHQvKipcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTc2NlxuXHQgKi9cblx0aWYgKCB0aGlzLmlzUHJvY2VzcyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmlzUHJvY2VzcyAgICAgID0gdHJ1ZTtcblx0dGhpcy5za2lwU2VydmVyU2lkZSA9IGZhbHNlO1xuXG5cdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XG5cdHRoaXMuY2FuU3VibWl0Rm9ybSggZmFsc2UgKTtcblx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQoIGZhbHNlICk7XG5cblx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2V0U2lsZW5jZSggZmFsc2UgKTtcblxuXHR0aGlzLnZhbGlkYXRlKCBzaWduYWwgKS5cblx0XHR0aGVuKCAoKSA9PiB7fSApLlxuXHRcdGNhdGNoKCAoKSA9PiB7fSApLlxuXHRcdGZpbmFsbHkoICgpID0+IHtcblx0XHRcdHRoaXMuc2tpcFNlcnZlclNpZGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5oYXNTZXJ2ZXJTaWRlICA9IGZhbHNlO1xuXHRcdFx0dGhpcy5pc1Byb2Nlc3MgICAgICA9IG51bGw7XG5cblx0XHRcdHRoaXMuaW5wdXQubm9kZXNbMF0ucmVhZE9ubHkgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCAhc2lnbmFsPy5hYm9ydGVkICkge1xuXHRcdFx0XHR0aGlzLnN3aXRjaEJ1dHRvbnNTdGF0ZSgpO1xuXHRcdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0oKTtcblxuXHRcdFx0XHRpZiAoIHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0XHRcdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG59O1xuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUuc3dpdGNoQnV0dG9uc1N0YXRlID0gZnVuY3Rpb24oIGZvcmNlID0gZmFsc2UgKSB7XG5cdGNvbnN0IHBhcmVudFBhZ2UgPSB0aGlzLmlucHV0Lm5vZGVzWzBdLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1wYWdlJyApO1xuXG5cdGlmICggcGFyZW50UGFnZSAmJiAhdGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2lsZW5jZSApIHtcblx0XHRjb25zdCBzd2l0Y2hCdXR0b25zID0gcGFyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19uZXh0LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19hY3Rpb24tYnV0dG9uJ1xuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBzd2l0Y2hCdXR0b24gb2Ygc3dpdGNoQnV0dG9ucyApIHtcblxuXHRcdFx0aWYgKCAhc3dpdGNoQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXJfX3N1Ym1pdCcgKSAmJiAhdGhpcy5pc05vZGVCZWxvbmdUaGlzKCBzd2l0Y2hCdXR0b24gKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2pldC1mb3JtLWJ1aWxkZXJfX3ByZXYtcGFnZScpICkge1xuXHRcdFx0XHRzd2l0Y2hCdXR0b24uZGlzYWJsZWQgPSBmb3JjZSA9PT0gdHJ1ZSB8fCAhdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2hCdXR0b24uZGlzYWJsZWQgPSBmb3JjZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IGZ1bmN0aW9uKCBjYW5UcmlnZ2VyID0gdHJ1ZSApIHtcblx0Y29uc3QgZm9ybSA9IHRoaXMuaW5wdXQucm9vdC5mb3JtO1xuXG5cdGlmICggZm9ybSApIHtcblx0XHRmb3JtLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IGNhblRyaWdnZXI7XG5cdH1cbn1cblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNhblN1Ym1pdEZvcm0gPSBmdW5jdGlvbiggY2FuU3VibWl0ID0gdHJ1ZSApIHtcblx0Y29uc3QgZm9ybSA9IHRoaXMuaW5wdXQucm9vdC5mb3JtO1xuXG5cdGlmICggZm9ybSApIHtcblx0XHRmb3JtLmNhblN1Ym1pdEZvcm0gPSBjYW5TdWJtaXQ7XG5cdH1cbn1cblxuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmlzTm9kZUJlbG9uZ1RoaXMgPSBmdW5jdGlvbiggbm9kZSApIHtcblx0Y29uc3QgcGFyZW50UGFnZSA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXBhZ2UnICk7XG5cblx0cmV0dXJuIHBhcmVudFBhZ2UgPyAhcGFyZW50UGFnZS5jbGFzc0xpc3QuY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyLXBhZ2UtLWhpZGRlbicgKSA6IGZhbHNlO1xufVxuXG5BZHZhbmNlZFJlcG9ydGluZy5wcm90b3R5cGUudmFsaWRhdGVPbkNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuaXNQcm9jZXNzICkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHRoaXMuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XG5cdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0KCBmYWxzZSApO1xuXG5cdGlmICggdGhpcy5pbnB1dC5tYXNrVmFsaWRhdGlvbiApIHtcblx0XHR0aGlzLmlucHV0LmNoYW5nZVN0YXRlTWFza1ZhbGlkYXRpb24oKTtcblx0fVxuXG5cdHRoaXMuaXNQcm9jZXNzICAgICAgPSB0cnVlO1xuXHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gZmFsc2U7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHR0aGlzLnZhbGlkYXRlKCkudGhlbiggcmVzb2x2ZSApLmNhdGNoKCByZWplY3QgKS5maW5hbGx5KFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNraXBTZXJ2ZXJTaWRlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5oYXNTZXJ2ZXJTaWRlICA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmlzUHJvY2VzcyAgICAgID0gbnVsbDtcblxuXHRcdFx0XHR0aGlzLmlucHV0Lm5vZGVzWzBdLnJlYWRPbmx5ID0gZmFsc2U7XG5cblx0XHRcdFx0dGhpcy5zd2l0Y2hCdXR0b25zU3RhdGUoKTtcblx0XHRcdFx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQoKTtcblx0XHRcdH0sXG5cdFx0KTtcblx0fSApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIHJlc3RyaWN0aW9uIHtBZHZhbmNlZFJlc3RyaWN0aW9ufFJlc3RyaWN0aW9ufVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmNhblByb2Nlc3NSZXN0cmljdGlvbiA9IGZ1bmN0aW9uICggcmVzdHJpY3Rpb24gKSB7XG5cdHJldHVybiAoXG5cdFx0Ly8gYWxsb3cgYWxsXG5cdFx0IXRoaXMuc2tpcFNlcnZlclNpZGUgfHxcblx0XHQvLyBvciBvbmx5IG5vdC1TZXJ2ZXJTaWRlXG5cdFx0IXJlc3RyaWN0aW9uLmlzU2VydmVyU2lkZSgpXG5cdCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSByZXN0cmljdGlvbiB7QWR2YW5jZWRSZXN0cmljdGlvbnxSZXN0cmljdGlvbn1cbiAqL1xuQWR2YW5jZWRSZXBvcnRpbmcucHJvdG90eXBlLmJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiA9IGZ1bmN0aW9uICggcmVzdHJpY3Rpb24gKSB7XG5cdHRoaXMuaGFzU2VydmVyU2lkZSA9IHJlc3RyaWN0aW9uLmlzU2VydmVyU2lkZSgpID8gdHJ1ZSA6IHRoaXMuaGFzU2VydmVyU2lkZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkUmVwb3J0aW5nO1xuIiwiaW1wb3J0IFJlYWNoTGltaXROdW1iZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlYWNoTGltaXROdW1iZXJzJztcbmltcG9ydCBOb3RFbm91Z2hOdW1iZXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVub3VnaE51bWJlcnMnO1xuaW1wb3J0IE5vdFVybCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RVcmwnO1xuaW1wb3J0IE5vdEVtYWlsIGZyb20gJy4vcmVzdHJpY3Rpb25zL05vdEVtYWlsJztcbmltcG9ydCBOb3RFbm91Z2hDaGFycyBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbm91Z2hDaGFycyc7XG5pbXBvcnQgUmVhY2hMaW1pdENoYXJzIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlYWNoTGltaXRDaGFycyc7XG5pbXBvcnQgTm90RW1wdHlSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbXB0eVJlc3RyaWN0aW9uJztcbmltcG9ydCBOb3RDb21wbGV0ZUlucHV0bWFzayBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RDb21wbGV0ZUlucHV0bWFzayc7XG5pbXBvcnQgQ3VzdG9tUnVsZXNSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9DdXN0b21SdWxlc1Jlc3RyaWN0aW9uJztcbmltcG9ydCBNdXN0Q29udGFpbkNoYXJhY3RlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTXVzdENvbnRhaW5DaGFyYWN0ZXJzJztcbmltcG9ydCBNdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMgZnJvbSAnLi9yZXN0cmljdGlvbnMvTXVzdE5vdENvbnRhaW5DaGFyYWN0ZXJzJztcbmltcG9ydCBNYXRjaFJlZ2V4cCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NYXRjaFJlZ2V4cCc7XG5pbXBvcnQgTm90TWF0Y2hSZWdleHAgZnJvbSAnLi9yZXN0cmljdGlvbnMvTm90TWF0Y2hSZWdleHAnO1xuaW1wb3J0IFNlcnZlclNpZGVDYWxsYmFjayBmcm9tICcuL3Jlc3RyaWN0aW9ucy9TZXJ2ZXJTaWRlQ2FsbGJhY2snO1xuaW1wb3J0IE11c3RFcXVhbCBmcm9tICcuL3Jlc3RyaWN0aW9ucy9NdXN0RXF1YWwnO1xuaW1wb3J0IFRvb0Vhcmx5VGltZXN0YW1wIGZyb20gJy4vcmVzdHJpY3Rpb25zL1Rvb0Vhcmx5VGltZXN0YW1wJztcbmltcG9ydCBUb29MYXRlVGltZXN0YW1wIGZyb20gJy4vcmVzdHJpY3Rpb25zL1Rvb0xhdGVUaW1lc3RhbXAnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIGlzRW1wdHksXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmNvbnN0IGdldEFkdmFuY2VkUnVsZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuYWR2YW5jZWQucnVsZXMnLFxuXHRbXG5cdFx0TXVzdENvbnRhaW5DaGFyYWN0ZXJzLFxuXHRcdE11c3ROb3RDb250YWluQ2hhcmFjdGVycyxcblx0XHRNYXRjaFJlZ2V4cCxcblx0XHROb3RNYXRjaFJlZ2V4cCxcblx0XHRTZXJ2ZXJTaWRlQ2FsbGJhY2ssXG5cdFx0TXVzdEVxdWFsLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7QXJyYXk8Q3VzdG9tQmFzZVJlc3RyaWN0aW9uPn1cbiAqL1xubGV0IGFkdmFuY2VkUnVsZXMgPSBbXTtcblxuY29uc3QgZ2V0UmVzdHJpY3Rpb25zID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXG5cdFtcblx0XHRUb29FYXJseVRpbWVzdGFtcCxcblx0XHRUb29MYXRlVGltZXN0YW1wLFxuXHRcdFJlYWNoTGltaXROdW1iZXJzLFxuXHRcdE5vdEVub3VnaE51bWJlcnMsXG5cdFx0Tm90VXJsLFxuXHRcdE5vdEVtYWlsLFxuXHRcdE5vdENvbXBsZXRlSW5wdXRtYXNrLFxuXHRcdE5vdEVub3VnaENoYXJzLFxuXHRcdFJlYWNoTGltaXRDaGFycyxcblx0XHROb3RFbXB0eVJlc3RyaWN0aW9uLFxuXHRcdEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24sXG5cdF0sXG4pO1xuXG4vKipcbiAqIEB0eXBlIHtSZXN0cmljdGlvbltdfVxuICovXG5sZXQgcmVzdHJpY3Rpb25zID0gW107XG5cbmZ1bmN0aW9uIGdldFByZXBhcmVkUnVsZXMoIHJ1bGVzLCByZXBvcnRpbmcgKSB7XG5cdGNvbnN0IHJlc3BvbnNlID0gW107XG5cblx0aWYgKCAhYWR2YW5jZWRSdWxlcy5sZW5ndGggKSB7XG5cdFx0YWR2YW5jZWRSdWxlcyA9IGdldEFkdmFuY2VkUnVsZXMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIHJ1bGUgXSBvZiBPYmplY3QuZW50cmllcyggcnVsZXMgKSApIHtcblx0XHRmb3IgKCBjb25zdCBhZHZhbmNlZFJ1bGUgb2YgYWR2YW5jZWRSdWxlcyApIHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgYWR2YW5jZWRSdWxlKCk7XG5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdGlmICggcnVsZS50eXBlICE9PSBjdXJyZW50LmdldFNsdWcoKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgcnVsZS50eXBlO1xuXG5cdFx0XHRjdXJyZW50LnNldFJlcG9ydGluZyggcmVwb3J0aW5nICk7XG5cdFx0XHRjdXJyZW50LnNldEF0dHJzKCB7IC4uLnJ1bGUsIGluZGV4IH0gKTtcblx0XHRcdGN1cnJlbnQub25SZWFkeSgpO1xuXG5cdFx0XHRyZXNwb25zZS5wdXNoKCBjdXJyZW50ICk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXRXcmFwcGVyKCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZVZhbGlkYXRpb25UeXBlKCBub2RlICkge1xuXHRjb25zdCB3cmFwcGVyICAgICAgICAgICAgICAgICA9IGdldFdyYXBwZXIoIG5vZGUgKTtcblx0Y29uc3QgeyB2YWxpZGF0aW9uVHlwZSA9ICcnIH0gPSB3cmFwcGVyPy5kYXRhc2V0ID8/IHt9O1xuXG5cdHJldHVybiB2YWxpZGF0aW9uVHlwZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cbiAqL1xuZnVuY3Rpb24gZ2V0SW5oZXJpdFZhbGlkYXRpb25UeXBlKCBpbnB1dCApIHtcblx0Y29uc3QgYWxsRm9ybXMgPSB3aW5kb3c/LkpldEZvcm1zVmFsaWRhdGlvbiA/PyBmYWxzZTtcblxuXHRpZiAoIGZhbHNlID09PSBhbGxGb3JtcyApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBmb3JtSWQgICAgICAgID0gaW5wdXQuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XG5cdGNvbnN0IHsgdHlwZSA9ICcnIH0gPSBhbGxGb3Jtc1sgZm9ybUlkIF0gPz8ge307XG5cblx0cmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXNzYWdlcyggbm9kZSApIHtcblx0Y29uc3Qgd3JhcHBlciAgICAgICAgICAgICAgICAgICAgICAgPSBnZXRXcmFwcGVyKCBub2RlICk7XG5cdGNvbnN0IHsgdmFsaWRhdGlvbk1lc3NhZ2VzID0gJ3t9JyB9ID0gd3JhcHBlcj8uZGF0YXNldCA/PyB7fTtcblxuXHRyZXR1cm4gSlNPTi5wYXJzZSggdmFsaWRhdGlvbk1lc3NhZ2VzICk7XG59XG5cbi8qKlxuICogQHBhcmFtICByZXN0cmljdGlvbiB7UmVzdHJpY3Rpb259XG4gKiBAcGFyYW0gIHNsdWcgICAgICAgIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE1lc3NhZ2VCeVNsdWcoIHJlc3RyaWN0aW9uLCBzbHVnICkge1xuXHRjb25zdCB7IHJlcG9ydGluZyB9ID0gcmVzdHJpY3Rpb247XG5cdGNvbnN0IG1lc3NhZ2UgICAgICAgPSByZXBvcnRpbmcubWVzc2FnZXNbIHNsdWcgXSA/PyAnJztcblxuXHRpZiAoIG1lc3NhZ2UgKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH1cblxuXHRjb25zdCBhbGxNZXNzYWdlcyA9IHdpbmRvdz8uSmV0Rm9ybXNWYWxpZGF0aW9uID8/IGZhbHNlO1xuXG5cdGlmICggZmFsc2UgPT09IGFsbE1lc3NhZ2VzICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IGZvcm0gICAgICAgICA9IHJlcG9ydGluZy5pbnB1dC5nZXRTdWJtaXQoKTtcblx0Y29uc3QgeyBtZXNzYWdlcyB9ID0gYWxsTWVzc2FnZXNbIGZvcm0uZ2V0Rm9ybUlkKCkgXSA/PyB7fTtcblxuXHRyZXR1cm4gbWVzc2FnZXNbIHNsdWcgXSA/PyAnJztcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q3VzdG9tQmFzZVJlc3RyaWN0aW9ufVxuICovXG5mdW5jdGlvbiBvYnNlcnZlRmllbGRSZXN0cmljdGlvbigpIHtcblx0aWYgKCAhdGhpcy5hdHRycz8uZmllbGQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHsgcm9vdCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQ7XG5cdGNvbnN0IGlucHV0ICAgID0gcm9vdC5nZXRJbnB1dCggdGhpcy5hdHRycy5maWVsZCApO1xuXG5cdGlucHV0LndhdGNoKCAoKSA9PiB7XG5cdFx0dGhpcy5hdHRycy52YWx1ZSA9IGlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHQvKipcblx0XHQgKiBIZXJlIHdlIG5lZWQgdG8gcmVzZXQgdGhlIGB2YWx1ZVByZXZgIHByb3BlcnR5LFxuXHRcdCAqIGJlY2F1c2UgcmVwb3J0aW5nIGxvZ2ljIHJlbWVtYmVyIHByZXZpb3VzIHZhbHVlLCB3aGljaCBpdCBjaGVjay5cblx0XHQgKlxuXHRcdCAqIEFuZCBpZiAudmFsdWVQcmV2ID09PSAuY3VycmVudC52YWx1ZSAtPiByZXBvcnRpbmcgd2lsbCBiZSBza2lwcGVkXG5cdFx0ICpcblx0XHQgKiBAc2VlIEFkdmFuY2VkUmVwb3J0aW5nLmdldEVycm9yc1xuXHRcdCAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLmhhc0NoYW5nZWRWYWx1ZVxuXHRcdCAqIEB0eXBlIHtudWxsfVxuXHRcdCAqL1xuXHRcdHRoaXMucmVwb3J0aW5nLnZhbHVlUHJldiA9IG51bGw7XG5cdFx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZSgpO1xuXHR9ICk7XG5cblx0aWYgKCAhaXNFbXB0eSggaW5wdXQudmFsdWUuY3VycmVudCApICkge1xuXHRcdHRoaXMuYXR0cnMudmFsdWUgPSBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHJlcG9ydGluZyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuICovXG5mdW5jdGlvbiBzZXRSZXN0cmljdGlvbnMoIHJlcG9ydGluZyApIHtcblx0aWYgKCAhcmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcblx0XHRyZXN0cmljdGlvbnMgPSBnZXRSZXN0cmljdGlvbnMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHJlc3RyaWN0aW9ucyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlc3RyaWN0aW9uKCk7XG5cblx0XHRpZiAoXG5cdFx0XHQhY3VycmVudC5pc1N1cHBvcnRlZCggcmVwb3J0aW5nLmdldE5vZGUoKSwgcmVwb3J0aW5nIClcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjdXJyZW50LnNldFJlcG9ydGluZyggcmVwb3J0aW5nICk7XG5cdFx0Y3VycmVudC5vblJlYWR5KCk7XG5cblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLnB1c2goIGN1cnJlbnQgKTtcblx0fVxufVxuXG4vKipcbiAqIFlvdSBjYW5ub3QgdXNlIG5vZGUucXVlcnlTZWxlY3RvciBpbiB0aGlzIGZ1bmN0aW9uLFxuICogYmVjYXVzZSB0aGUgUmVwZWF0ZXIgRmllbGQgdmFsaWRhdGlvbiB3aWxsIHJldHVyblxuICogYW4gZXJyb3IgZWxlbWVudCBmcm9tIHRoZSBpbnRlcm5hbCBmaWVsZC5cbiAqXG4gKiBAcGFyYW0gIHdyYXBwZXIge0VsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldEVycm9yTm9kZSggd3JhcHBlciApIHtcblx0Zm9yICggY29uc3QgY2hpbGQgb2Ygd3JhcHBlci5jaGlsZHJlbiApIHtcblx0XHRpZiAoICFjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoICdlcnJvci1tZXNzYWdlJyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJldHVybiBjaGlsZDtcblx0fVxuXG5cdGNvbnN0IGNvbEVuZE5vZGUgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWNvbF9fZW5kJyxcblx0KTtcblxuXHRpZiAoICFjb2xFbmROb2RlICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBnZXRFcnJvck5vZGUoIGNvbEVuZE5vZGUgKTtcbn1cblxuZXhwb3J0IHtcblx0Z2V0Tm9kZVZhbGlkYXRpb25UeXBlLFxuXHRnZXRJbmhlcml0VmFsaWRhdGlvblR5cGUsXG5cdGdldE1lc3NhZ2VCeVNsdWcsXG5cdGdldFZhbGlkYXRpb25NZXNzYWdlcyxcblx0Z2V0UHJlcGFyZWRSdWxlcyxcblx0c2V0UmVzdHJpY3Rpb25zLFxuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbixcblx0Z2V0V3JhcHBlcixcblx0Z2V0RXJyb3JOb2RlLFxufTsiLCJpbXBvcnQgeyBnZXRNZXNzYWdlQnlTbHVnIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBSZXN0cmljdGlvbixcblx0ICAgICAgQ2FsY3VsYXRlZEZvcm11bGEsXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIEFkdmFuY2VkUmVzdHJpY3Rpb24oKSB7XG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLm1lc3NhZ2UgICAgICA9ICcnO1xuXHR0aGlzLmZvcm11bGEgICAgICA9IG51bGw7XG5cdHRoaXMud2F0Y2hlZEF0dHJzID0gW107XG59XG5cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcbi8qKlxuICogQHR5cGUge0NhbGN1bGF0ZWRGb3JtdWxhfVxuICovXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5mb3JtdWxhID0gbnVsbDtcbi8qKlxuICogQHR5cGUge0FycmF5fVxuICovXG5BZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS53YXRjaGVkQXR0cnMgPSBbXTtcblxuLyoqXG4gKiBJZiByZXR1cm5zIHRydWUgLT4gdmFsaWRhdGlvbiB3aWxsIGJlXG4gKiBzdGFydGVkIHdpdGggMTAwMCBtcyBkZWxheVxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU2VydmVyU2lkZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubWVzc2FnZTtcbn07XG4vKipcbiAqIEhlcmUgeW91IG5lZWQgdG8gcmV0dXJuIGEgcHJlcGFyZWQgbWVzc2FnZSxcbiAqIHdpdGggcHJvY2Vzc2VkIG1hY3Jvc1xuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuICdFcnJvcic7XG59O1xuQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0TWVzc2FnZUJ5U2x1ZyA9IGZ1bmN0aW9uICggc2x1ZyApIHtcblx0cmV0dXJuIGdldE1lc3NhZ2VCeVNsdWcoIHRoaXMsIHNsdWcgKTtcbn07XG5cbkFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLm9uUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkRm9ybXVsYSggdGhpcy5yZXBvcnRpbmcuaW5wdXQgKTtcblxuXHR0aGlzLmZvcm11bGEub2JzZXJ2ZSggdGhpcy5nZXRSYXdNZXNzYWdlKCkgKTtcblx0dGhpcy5mb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLmZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XG5cdH07XG5cdHRoaXMuZm9ybXVsYS5zZXRSZXN1bHQoKTtcblxuXHRpZiAoICF0aGlzLndhdGNoZWRBdHRycy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5yZXBvcnRpbmcud2F0Y2hBdHRycyA9IFtcblx0XHQuLi5uZXcgU2V0KCBbXG5cdFx0XHQuLi50aGlzLnJlcG9ydGluZy53YXRjaEF0dHJzLFxuXHRcdFx0Li4udGhpcy53YXRjaGVkQXR0cnMsXG5cdFx0XSApLFxuXHRdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRSZXN0cmljdGlvbjtcblxuXG4iLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBDdXN0b21CYXNlUmVzdHJpY3Rpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0cnMgPSB7fTtcbn1cblxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLFxuKTtcblxuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5hdHRycyAgICAgICAgID0ge307XG5DdXN0b21CYXNlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEF0dHJzICAgICAgPSBmdW5jdGlvbiAoIGF0dHJzICkge1xuXHR0aGlzLmF0dHJzID0gYXR0cnM7XG59O1xuQ3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5nZXRTbHVnICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoICd5b3UgbmVlZCB0byByZXR1cm4gc2x1ZyBvZiBydWxlJyApO1xufTtcbkN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuYXR0cnM/Lm1lc3NhZ2UgPz8gJyc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21CYXNlUmVzdHJpY3Rpb247IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuaW1wb3J0IHsgZ2V0UHJlcGFyZWRSdWxlcyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCByb290ICA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcblx0XHRjb25zdCBydWxlcyA9IEpTT04ucGFyc2UoIHJvb3QuZGF0YXNldD8udmFsaWRhdGlvblJ1bGVzID8/ICdbXScgKTtcblxuXHRcdGlmICggIUJvb2xlYW4oIHJ1bGVzLmxlbmd0aCApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJlcG9ydGluZy5yZXN0cmljdGlvbnMgPSBbXG5cdFx0XHQuLi5yZXBvcnRpbmcucmVzdHJpY3Rpb25zLFxuXHRcdFx0Li4uZ2V0UHJlcGFyZWRSdWxlcyggcnVsZXMsIHJlcG9ydGluZyApLFxuXHRcdF07XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbkN1c3RvbVJ1bGVzUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SdWxlc1Jlc3RyaWN0aW9uOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgb2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24gfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBNYXRjaFJlZ2V4cCgpIHtcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdyZWdleHAnO1xuXHR9O1xuXG59XG5cbk1hdGNoUmVnZXhwLnByb3RvdHlwZSAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUsXG4pO1xuTWF0Y2hSZWdleHAucHJvdG90eXBlLnNldEF0dHJzID0gZnVuY3Rpb24gKCBhdHRycyApIHtcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRBdHRycy5jYWxsKCB0aGlzLCBhdHRycyApO1xuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG59O1xuTWF0Y2hSZWdleHAucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRpZiAoICF2YWx1ZSApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKCB0aGlzLmF0dHJzLnZhbHVlLCAnZycgKTtcblxuXHRyZXR1cm4gcmVnZXhwLnRlc3QoIHZhbHVlICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRjaFJlZ2V4cDsiLCJpbXBvcnQgQ3VzdG9tQmFzZVJlc3RyaWN0aW9uIGZyb20gJy4vQ3VzdG9tQmFzZVJlc3RyaWN0aW9uJztcbmltcG9ydCB7IG9ic2VydmVGaWVsZFJlc3RyaWN0aW9uIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gTXVzdENvbnRhaW5DaGFyYWN0ZXJzKCkge1xuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdjb250YWluJztcblx0fTtcblxufVxuXG5NdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZShcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5NdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnNldEF0dHJzID0gZnVuY3Rpb24gKCBhdHRycyApIHtcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRBdHRycy5jYWxsKCB0aGlzLCBhdHRycyApO1xuXHRvYnNlcnZlRmllbGRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG59O1xuXG5NdXN0Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlLmluY2x1ZGVzKCB0aGlzLmF0dHJzLnZhbHVlICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdXN0Q29udGFpbkNoYXJhY3RlcnM7IiwiaW1wb3J0IEN1c3RvbUJhc2VSZXN0cmljdGlvbiBmcm9tICcuL0N1c3RvbUJhc2VSZXN0cmljdGlvbic7XG5pbXBvcnQgeyBvYnNlcnZlRmllbGRSZXN0cmljdGlvbiB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIE11c3RFcXVhbCgpIHtcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnZXF1YWwnO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCB2YWx1ZSA9PT0gdGhpcy5hdHRycy52YWx1ZTtcblx0fTtcbn1cblxuTXVzdEVxdWFsLnByb3RvdHlwZSAgICAgICAgICA9IE9iamVjdC5jcmVhdGUoXG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUsXG4pO1xuTXVzdEVxdWFsLnByb3RvdHlwZS5zZXRBdHRycyA9IGZ1bmN0aW9uICggYXR0cnMgKSB7XG5cdEN1c3RvbUJhc2VSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0QXR0cnMuY2FsbCggdGhpcywgYXR0cnMgKTtcblx0b2JzZXJ2ZUZpZWxkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVzdEVxdWFsOyIsImltcG9ydCBNdXN0Q29udGFpbkNoYXJhY3RlcnMgZnJvbSAnLi9NdXN0Q29udGFpbkNoYXJhY3RlcnMnO1xuXG5mdW5jdGlvbiBNdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMoKSB7XG5cdE11c3RDb250YWluQ2hhcmFjdGVycy5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnICA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2NvbnRhaW5fbm90Jztcblx0fTtcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgIU11c3RDb250YWluQ2hhcmFjdGVycy5wcm90b3R5cGUudmFsaWRhdGUuY2FsbCggdGhpcyApO1xuXHR9O1xufVxuXG5NdXN0Tm90Q29udGFpbkNoYXJhY3RlcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0TXVzdENvbnRhaW5DaGFyYWN0ZXJzLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IE11c3ROb3RDb250YWluQ2hhcmFjdGVyczsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBOb3RDb21wbGV0ZUlucHV0bWFzaygpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRub2RlLmNsYXNzTGlzdC5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXJfX21hc2tlZC1maWVsZCcgKSAmJlxuXHRcdFx0alF1ZXJ5LmZuLmlucHV0bWFza1xuXHRcdCk7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRjb25zdCBub2RlICA9IHRoaXMucmVwb3J0aW5nLmdldE5vZGUoKTtcblxuXHRcdHJldHVybiAhdmFsdWUgfHwgbm9kZS5pbnB1dG1hc2suaXNDb21wbGV0ZSgpO1xuXHR9O1xuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2lucHV0bWFzaycgKTtcblx0fTtcbn1cblxuTm90Q29tcGxldGVJbnB1dG1hc2sucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Q29tcGxldGVJbnB1dG1hc2s7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gTm90RW1haWwoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gJ2VtYWlsJyA9PT0gbm9kZS50eXBlO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8IC9eW1xcdy1cXC5cXCtdK0AoW1xcdy1dK1xcLikrW1xcdy1dezEsNn0kLy50ZXN0KCB2YWx1ZSApO1xuXHR9O1xuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2VtYWlsJyApO1xuXHR9O1xufVxuXG5Ob3RFbWFpbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RFbWFpbDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIGlzRW1wdHksXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIE5vdEVtcHR5UmVzdHJpY3Rpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMudHlwZSA9ICdyZXF1aXJlZCc7XG59XG5cbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuTm90RW1wdHlSZXN0cmljdGlvbi5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgICA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRyZXR1cm4gcmVwb3J0aW5nLmlucHV0LmlzUmVxdWlyZWQ7XG59O1xuTm90RW1wdHlSZXN0cmljdGlvbi5wcm90b3R5cGUudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0cmV0dXJuICFpc0VtcHR5KCB2YWx1ZSApO1xufTtcbk5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdlbXB0eScgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEVtcHR5UmVzdHJpY3Rpb247IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gTm90RW5vdWdoQ2hhcnMoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtaW5MZW5ndGgnICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHsgbWluTGVuZ3RoID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiBmYWxzZSAhPT0gbWluTGVuZ3RoO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbGVuZ3RoICAgICAgICA9IHRoaXMuZ2V0VmFsdWUoKT8ubGVuZ3RoO1xuXHRcdGNvbnN0IHsgbWluTGVuZ3RoIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiAhbGVuZ3RoIHx8IGxlbmd0aCA+PSArbWluTGVuZ3RoLnZhbHVlLmN1cnJlbnQ7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdjaGFyX21pbicgKTtcblx0fTtcbn1cblxuTm90RW5vdWdoQ2hhcnMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90RW5vdWdoQ2hhcnM7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gTm90RW5vdWdoTnVtYmVycygpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21pbicgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1pbiA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gZmFsc2UgIT09IG1pbiAmJiBbICdudW1iZXInLCAncmFuZ2UnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgICA9IHRoaXMuZ2V0VmFsdWUoKTtcblx0XHRjb25zdCB7IG1pbiB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8ICt2YWx1ZSA+PSArbWluLnZhbHVlLmN1cnJlbnQ7XG5cdH07XG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnbnVtYmVyX21pbicgKTtcblx0fTtcbn1cblxuTm90RW5vdWdoTnVtYmVycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RFbm91Z2hOdW1iZXJzOyIsImltcG9ydCBNYXRjaFJlZ2V4cCBmcm9tICcuL01hdGNoUmVnZXhwJztcblxuZnVuY3Rpb24gTm90TWF0Y2hSZWdleHAoKSB7XG5cdE1hdGNoUmVnZXhwLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAncmVnZXhwX25vdCc7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0XHRyZXR1cm4gIXZhbHVlIHx8ICFNYXRjaFJlZ2V4cC5wcm90b3R5cGUudmFsaWRhdGUuY2FsbCggdGhpcyApO1xuXHR9O1xufVxuXG5Ob3RNYXRjaFJlZ2V4cC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXRjaFJlZ2V4cC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90TWF0Y2hSZWdleHA7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gTm90VXJsKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuICd1cmwnID09PSBub2RlLnR5cGU7XG5cdH07XG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQhdmFsdWUgfHwgLygobWFpbHRvXFw6fChuZXdzfChodHxmKXRwKHM/KSlcXDpcXC9cXC8pXFxTKykvLnRlc3QoIHZhbHVlIClcblx0XHQpO1xuXHR9O1xuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ3VybCcgKTtcblx0fTtcbn1cblxuTm90VXJsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdFVybDsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBSZWFjaExpbWl0Q2hhcnMoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXhMZW5ndGgnICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiBmYWxzZSAhPT0gbWF4TGVuZ3RoO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSAgICAgICAgID0gdGhpcy5nZXRWYWx1ZSgpPy5sZW5ndGg7XG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCB2YWx1ZSA8PSArbWF4TGVuZ3RoLnZhbHVlLmN1cnJlbnQ7XG5cdH07XG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnY2hhcl9tYXgnICk7XG5cdH07XG59XG5cblJlYWNoTGltaXRDaGFycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjaExpbWl0Q2hhcnM7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gUmVhY2hMaW1pdE51bWJlcnMoKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXgnICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0Y29uc3QgeyBtYXggPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBtYXggJiYgWyAnbnVtYmVyJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcblx0fTtcblx0dGhpcy52YWxpZGF0ZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHZhbHVlICAgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0Y29uc3QgeyBtYXggfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuICF2YWx1ZSB8fCArdmFsdWUgPD0gK21heC52YWx1ZS5jdXJyZW50O1xuXHR9O1xuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ251bWJlcl9tYXgnICk7XG5cdH07XG59XG5cblJlYWNoTGltaXROdW1iZXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWNoTGltaXROdW1iZXJzOyIsImltcG9ydCBDdXN0b21CYXNlUmVzdHJpY3Rpb24gZnJvbSAnLi9DdXN0b21CYXNlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcblxuZnVuY3Rpb24gU2VydmVyU2lkZUNhbGxiYWNrKCkge1xuXHRDdXN0b21CYXNlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyAgICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3NyJztcblx0fTtcblx0dGhpcy5pc1NlcnZlclNpZGUgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdHRoaXMudmFsaWRhdGVQcm9taXNlID0gYXN5bmMgZnVuY3Rpb24gKCBzaWduYWwgPSBudWxsICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFZhbHVlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGJvZHkgPSB0aGlzLmdldEZvcm1EYXRhKCk7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuZ2V0Um9vdCgpO1xuXHRcdGNvbnN0IHNzclZhbGlkYXRpb25NZXRob2QgPSByb290Tm9kZS5nZXRBdHRyaWJ1dGUoJ3Nzcl92YWxpZGF0aW9uX21ldGhvZCcpIHx8ICdyZXN0JztcblxuXHRcdHN3aXRjaCAoc3NyVmFsaWRhdGlvbk1ldGhvZCkge1xuXHRcdFx0Y2FzZSAnYWRtaW5fYWpheCc6XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlVmlhQWRtaW5BamF4KGJvZHksIHNpZ25hbCk7XG5cblx0XHRcdGNhc2UgJ3NlbGYnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZVZpYVNlbGZSZXF1ZXN0KGJvZHksIHNpZ25hbCk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlVmlhUmVzdChib2R5LCBzaWduYWwpO1xuXHRcdH1cblxuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGVWaWFSZXN0ID0gYXN5bmMgZnVuY3Rpb24gKGJvZHksIHNpZ25hbCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUZldGNoKHtcblx0XHRcdFx0cGF0aDogJy9qZXQtZm9ybS1idWlsZGVyL3YxL3ZhbGlkYXRlLWZpZWxkJyxcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGJvZHksXG5cdFx0XHRcdHNpZ25hbFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXNwb25zZT8ucmVzdWx0ID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdCgpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZVZpYUFkbWluQWpheCA9IGFzeW5jIGZ1bmN0aW9uIChib2R5LCBzaWduYWwpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncy5hZG1pbmFqYXh1cmwsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG5cdFx0XHRcdGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ2pldF9mYl9zc3JfdmFsaWRhdGlvbl9hamF4Jyxcblx0XHRcdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShPYmplY3QuZnJvbUVudHJpZXMoYm9keSkpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0c2lnbmFsLFxuXHRcdFx0fSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cblx0XHRcdHJldHVybiByZXNwb25zZT8ucmVzdWx0ID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlamVjdCgpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZVZpYVNlbGZSZXF1ZXN0ID0gYXN5bmMgZnVuY3Rpb24gKGJvZHksIHNpZ25hbCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuc2V0KCdqZXRfZmJfc3NyX3NlbGZfdmFsaWRhdGlvbicsICcxJyk7XG5cblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGJvZHkuZW50cmllcygpKSB7XG5cdFx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybC50b1N0cmluZygpLCB7XG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdHNpZ25hbCxcblx0XHRcdH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U/LnJlc3VsdCA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZWplY3QoKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBpbnB1dCB9ICAgID0gdGhpcy5yZXBvcnRpbmc7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gaW5wdXQuZ2V0Um9vdCgpO1xuXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoIHJvb3ROb2RlICk7XG5cdFx0Zm9ybURhdGEuZGVsZXRlKCAnX3dwbm9uY2UnICk7XG5cdFx0Zm9ybURhdGEuc2V0KCAnX2pmYl92YWxpZGF0aW9uX3J1bGVfaW5kZXgnLCB0aGlzLmF0dHJzLmluZGV4ICk7XG5cdFx0Zm9yICggY29uc3QgcGF0aEVsZW1lbnQgb2YgaW5wdXQucGF0aCApIHtcblx0XHRcdGZvcm1EYXRhLmFwcGVuZCggJ19qZmJfdmFsaWRhdGlvbl9wYXRoW10nLCBwYXRoRWxlbWVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3JtRGF0YTtcblx0fTtcblxufVxuXG5TZXJ2ZXJTaWRlQ2FsbGJhY2sucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0Q3VzdG9tQmFzZVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclNpZGVDYWxsYmFjazsiLCJpbXBvcnQgQWR2YW5jZWRSZXN0cmljdGlvbiBmcm9tICcuL0FkdmFuY2VkUmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7IGdldFRpbWVzdGFtcCB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmZ1bmN0aW9uIFRvb0Vhcmx5VGltZXN0YW1wKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWluJyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1pbiA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0ZmFsc2UgIT09IG1pbiAmJlxuXHRcdFx0WyAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKVxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtaW4gfSAgICAgICAgICAgPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblx0XHRjb25zdCB7IHRpbWUgfSAgICAgICAgICA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCB7IHRpbWU6IG1pblRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWluLnZhbHVlLmN1cnJlbnQgKTtcblxuXHRcdHJldHVybiB0aW1lID49IG1pblRpbWU7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21pbicgKTtcblx0fTtcbn1cblxuVG9vRWFybHlUaW1lc3RhbXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vRWFybHlUaW1lc3RhbXA7IiwiaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9BZHZhbmNlZFJlc3RyaWN0aW9uJztcblxuY29uc3QgeyBnZXRUaW1lc3RhbXAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBUb29MYXRlVGltZXN0YW1wKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4JyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IG1heCA9IGZhbHNlIH0gPSByZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0ZmFsc2UgIT09IG1heCAmJlxuXHRcdFx0WyAndGltZScsICdkYXRlJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKVxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyBtYXggfSAgICAgICAgICAgPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblx0XHRjb25zdCB7IHRpbWUgfSAgICAgICAgICA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCB7IHRpbWU6IG1heFRpbWUgfSA9IGdldFRpbWVzdGFtcCggbWF4LnZhbHVlLmN1cnJlbnQgKTtcblxuXHRcdHJldHVybiB0aW1lIDw9IG1heFRpbWU7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdkYXRlX21heCcgKTtcblx0fTtcbn1cblxuVG9vTGF0ZVRpbWVzdGFtcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb29MYXRlVGltZXN0YW1wOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFkdmFuY2VkUmVwb3J0aW5nIGZyb20gJy4vQWR2YW5jZWRSZXBvcnRpbmcnO1xuaW1wb3J0IEFkdmFuY2VkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvQWR2YW5jZWRSZXN0cmljdGlvbic7XG5pbXBvcnQgTm90RW1wdHlSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9Ob3RFbXB0eVJlc3RyaWN0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRGaWx0ZXIsXG5cdCAgICAgIGFkZEFjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXG5cdCdqZXQtZm9ybS1idWlsZGVyL29ic2VydmUtZHluYW1pYy1hdHRycycsXG5cdC8qKlxuXHQgKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcblx0XHRvYnNlcnZhYmxlLmdldElucHV0cygpLmZvckVhY2goIGlucHV0ID0+IHtcblx0XHRcdGlmICggIShcblx0XHRcdFx0aW5wdXQucmVwb3J0aW5nIGluc3RhbmNlb2YgQWR2YW5jZWRSZXBvcnRpbmdcblx0XHRcdCkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlucHV0LnJlcG9ydGluZy5vYnNlcnZlQXR0cnMoKTtcblx0XHR9ICk7XG5cdH0sXG5cdDExLFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlcG9ydGluZycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2FkdmFuY2VkLXJlcG9ydGluZycsXG5cdGZ1bmN0aW9uICggcmVwb3J0aW5nICkge1xuXHRcdHJlcG9ydGluZyA9IFsgQWR2YW5jZWRSZXBvcnRpbmcsIC4uLnJlcG9ydGluZyBdO1xuXG5cdFx0cmV0dXJuIHJlcG9ydGluZztcblx0fSxcbik7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cblx0KSxcblx0QWR2YW5jZWRSZXN0cmljdGlvbixcblx0Tm90RW1wdHlSZXN0cmljdGlvbixcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9