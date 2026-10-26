/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/main/Observable.js"
/*!*************************************!*\
  !*** ./frontend/main/Observable.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inputs_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs/functions */ "./frontend/main/inputs/functions.js");
/* harmony import */ var _submit_FormSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit/FormSubmit */ "./frontend/main/submit/FormSubmit.js");
/* harmony import */ var _html_macro_queryByAttrValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html.macro/queryByAttrValue */ "./frontend/main/html.macro/queryByAttrValue.js");
/* harmony import */ var _html_macro_iterateJfbComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html.macro/iterateJfbComments */ "./frontend/main/html.macro/iterateJfbComments.js");
/* harmony import */ var _html_macro_observeComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html.macro/observeComment */ "./frontend/main/html.macro/observeComment.js");
/* harmony import */ var _html_macro_observeMacroAttr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html.macro/observeMacroAttr */ "./frontend/main/html.macro/observeMacroAttr.js");
/* harmony import */ var _html_macro_observeNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html.macro/observeNode */ "./frontend/main/html.macro/observeNode.js");
/* harmony import */ var _reporting_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reporting/functions */ "./frontend/main/reporting/functions.js");
/* harmony import */ var _reporting_ReportingContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reporting/ReportingContext */ "./frontend/main/reporting/ReportingContext.js");
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");










const {
  doAction
} = JetPlugins.hooks;
function Observable(parent = null) {
  this.parent = parent;
  this.dataInputs = {};
  this.form = null;
  this.multistep = null;
  this.rootNode = null;
  this.isObserved = false;

  /**
   * @since 3.0.1
   *
   * @type {ReportingContext}
   */
  this.context = this.parent ? null : new _reporting_ReportingContext__WEBPACK_IMPORTED_MODULE_8__["default"](this);
}
Observable.prototype = {
  /**
   * @type {RepeaterData|null}
   */
  parent: null,
  /**
   * {
   *     [field_name]: {InputData}
   * }
   */
  dataInputs: {},
  /**
   * @type {FormSubmit}
   */
  form: null,
  /**
   * @type {MultiStepState}
   */
  multistep: null,
  /**
   * @type {HTMLElement|HTMLFormElement}
   */
  rootNode: null,
  isObserved: false,
  /**
   * @type {ReactiveVar}
   */
  value: null,
  observe(root = null) {
    if (this.isObserved) {
      return;
    }
    if (null !== root) {
      this.rootNode = root;
    }
    this.isObserved = true;
    doAction('jet.fb.observe.before', this);
    this.initSubmitHandler();

    /**
     * Initialize dataInputs with fields.
     * Without values
     */
    this.initFields();

    /**
     * Setup fields values and make them reactive
     */
    this.makeReactiveProxy();
    this.initMacros();
    this.initActionButtons();
    this.initValue();
    doAction('jet.fb.observe.after', this);
  },
  initFields() {
    for (const formElement of this.rootNode.querySelectorAll('[data-jfb-sync]')) {
      this.pushInput(formElement);
    }
  },
  initMacros() {
    // macros as html-comments
    for (const comment of (0,_html_macro_iterateJfbComments__WEBPACK_IMPORTED_MODULE_3__["default"])(this.rootNode)) {
      (0,_html_macro_observeComment__WEBPACK_IMPORTED_MODULE_4__["default"])(comment, this);
    }

    // macros in default attributes
    const nodesWithAttrs = (0,_html_macro_queryByAttrValue__WEBPACK_IMPORTED_MODULE_2__["default"])(this.rootNode, 'JFB_FIELD::');
    const {
      replaceAttrs = []
    } = window.JetFormBuilderSettings;
    for (const nodeWithAttr of nodesWithAttrs) {
      for (const replaceAttr of replaceAttrs) {
        (0,_html_macro_observeMacroAttr__WEBPACK_IMPORTED_MODULE_5__["default"])(nodeWithAttr, replaceAttr, this);
      }
    }

    // macros in data-jfb-macro attribute
    // result will placed inside relative node
    const nodes = this.rootNode.querySelectorAll('[data-jfb-macro]:not([data-jfb-observed])');
    for (const node of nodes) {
      (0,_html_macro_observeNode__WEBPACK_IMPORTED_MODULE_6__["default"])(node, this);
    }
  },
  initSubmitHandler() {
    // check is current object related for global form element
    if (this.parent) {
      return;
    }
    this.form = new _submit_FormSubmit__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  },
  initActionButtons() {
    if (this.parent) {
      return;
    }
    for (const button of this.rootNode.querySelectorAll('.jet-form-builder__button-switch-state')) {
      let states;
      try {
        states = JSON.parse(button.dataset.switchOn);
      } catch (error) {
        continue;
      }
      button.addEventListener('click', () => {
        this.getState().value.current = states;
      });
    }
  },
  /**
   * @return {Promise<Promise<never>|Promise<void>>}
   */
  async inputsAreValid() {
    const invalid = await (0,_reporting_functions__WEBPACK_IMPORTED_MODULE_7__.validateInputsAll)((0,_inputs_functions__WEBPACK_IMPORTED_MODULE_0__.populateInputs)(this.getInputs()));
    return Boolean(invalid.length) ? Promise.reject(invalid) : Promise.resolve();
  },
  watch(fieldName, callable) {
    const input = this.getInput(fieldName);
    if (input) {
      return input.watch(callable);
    }
    throw new Error(`dataInputs in Observable don\'t have ${fieldName} field`);
  },
  /**
   * @param node    {Element}
   * @param replace {Boolean}
   */
  observeInput(node, replace = false) {
    const input = this.pushInput(node, replace);
    input.makeReactive();
    doAction('jet.fb.observe.input.manual', input);
  },
  makeReactiveProxy() {
    for (const current of this.getInputs()) {
      current.makeReactive();
    }
  },
  /**
   * @param node    {Element}
   * @param replace {Boolean}
   */
  pushInput(node, replace = false) {
    var _this$dataInputs$inpu;
    // prevent saving inputs from preset repeater items in root object
    // those inputs would saved in ObservableRow object

    if (!this.parent && node.parentElement.closest('.jet-form-builder-repeater')) {
      return;
    }
    const inputData = (0,_inputs_functions__WEBPACK_IMPORTED_MODULE_0__.createInput)(node, this);
    const findInput = (_this$dataInputs$inpu = this.dataInputs[inputData.getName()]) !== null && _this$dataInputs$inpu !== void 0 ? _this$dataInputs$inpu : false;
    if (false === findInput || replace) {
      this.dataInputs[inputData.getName()] = inputData;
      return inputData;
    }
    findInput.merge(inputData);
    return findInput;
  },
  /**
   * @return {Array<InputData>}
   */
  getInputs() {
    return Object.values(this.dataInputs);
  },
  /**
   * @return {null|RenderStateData|InputData}
   */
  getState() {
    return this.getInput('_jfb_current_render_states');
  },
  /**
   * @param  fieldName
   * @return {null|InputData}
   */
  getInput(fieldName) {
    var _this$parent$root;
    if (this.dataInputs.hasOwnProperty(fieldName)) {
      return this.dataInputs[fieldName];
    }
    const root = (_this$parent$root = this.parent?.root) !== null && _this$parent$root !== void 0 ? _this$parent$root : null;
    if (!root) {
      return null;
    }
    if (root.dataInputs.hasOwnProperty(fieldName)) {
      return root.dataInputs[fieldName];
    }
    return null;
  },
  getSubmit() {
    return this.form ? this.form : this.parent.root.form;
  },
  getContext() {
    var _this$context;
    return (_this$context = this.context) !== null && _this$context !== void 0 ? _this$context : this.parent.root.context;
  },
  /**
   * @see https://github.com/Crocoblock/issues-tracker/issues/2711
   *
   * @since 3.0.8
   */
  remove() {
    for (const input of this.getInputs()) {
      input.onRemove();
    }
  },
  /**
   * Runs only once on window "load" event
   */
  reQueryValues() {
    for (const input of this.getInputs()) {
      input.reQueryValue();
    }
  },
  initValue() {
    this.value = new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_9__["default"]({});
    this.value.watch(() => {
      const entries = Object.entries(this.value.current);
      for (const [fieldName, value] of entries) {
        this.getInput(fieldName).revertValue(value);
      }
    });
    for (const input of this.getInputs()) {
      input.watch(() => {
        this.value.current[input.getName()] = input.getValue();
      });
    }
    this.value.make();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);

/***/ },

/***/ "./frontend/main/attrs/BaseHtmlAttr.js"
/*!*********************************************!*\
  !*** ./frontend/main/attrs/BaseHtmlAttr.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");

function BaseHtmlAttr() {
  this.attrName = '';
  this.initial = null;
  this.isFromData = false;
  this.value = null;
}
BaseHtmlAttr.prototype = {
  /**
   * Name of data attribute
   */
  attrName: '',
  /**
   * @type {InputData}
   */
  input: null,
  initial: null,
  /**
   * @type {ReactiveVar}
   */
  value: null,
  observe() {
    this.value = new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"](this.initial);
    this.value.make();
    this.addWatcherAttr();
  },
  nodeSignal() {
    const [node] = this.input.nodes;
    node[this.attrName] = this.value.current;
  },
  addWatcherAttr() {
    this.value.watch(() => this.nodeSignal());
  },
  /**
   * If you need specific check,
   * you can rewrite this function
   *
   * @param  input {InputData}
   * @return {boolean}
   */
  isSupported(input) {
    var _ref;
    const [node] = input.nodes;
    const hasInRoot = (_ref = -1 !== node[this.attrName]) !== null && _ref !== void 0 ? _ref : -1;
    const hasInDataSet = node.dataset.hasOwnProperty(this.attrName);
    if (!hasInDataSet && !hasInRoot) {
      return false;
    }
    this.initial = this.getInitial(input);
    return Boolean(this.initial);
  },
  /**
   * @param  input {InputData}
   * @return {*|boolean}
   */
  getInitial(input) {
    const [node] = input.nodes;
    return node.dataset[this.attrName] || node[this.attrName] || false;
  },
  /**
   * @param input {InputData}
   */
  setInput(input) {
    this.input = input;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseHtmlAttr);

/***/ },

/***/ "./frontend/main/attrs/FileExtensionHtmlAttr.js"
/*!******************************************************!*\
  !*** ./frontend/main/attrs/FileExtensionHtmlAttr.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaxFilesHtmlAttr */ "./frontend/main/attrs/MaxFilesHtmlAttr.js");

function FileExtensionHtmlAttr() {
  _MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.attrName = 'file_ext';
  this.isSupported = function (input) {
    const [node] = input.nodes;
    return 'file' === node.type && Boolean(node.accept);
  };

  /**
   * @param input {FileData|InputData}
   */
  this.setInput = function (input) {
    _MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setInput.call(this, input);
    const [node] = input.nodes;
    this.initial = node.accept.split(',');
  };
  this.addWatcherAttr = function () {
    const [node] = this.input.nodes;
    this.value.watch(() => {
      node.accept = this.value.current.join(',');
    });
  };
}
FileExtensionHtmlAttr.prototype = Object.create(_MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileExtensionHtmlAttr);

/***/ },

/***/ "./frontend/main/attrs/MaxFileSizeHtmlAttr.js"
/*!****************************************************!*\
  !*** ./frontend/main/attrs/MaxFileSizeHtmlAttr.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaxFilesHtmlAttr */ "./frontend/main/attrs/MaxFilesHtmlAttr.js");

function MaxFileSizeHtmlAttr() {
  _MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.attrName = 'max_size';

  /**
   * @param input {FileData|InputData}
   */
  this.setInput = function (input) {
    _MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setInput.call(this, input);
    const {
      max_size: maxSize = 1
    } = JSON.parse(input.previewsContainer.dataset.args);
    this.initial = +maxSize;
  };
}
MaxFileSizeHtmlAttr.prototype = Object.create(_MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxFileSizeHtmlAttr);

/***/ },

/***/ "./frontend/main/attrs/MaxFilesHtmlAttr.js"
/*!*************************************************!*\
  !*** ./frontend/main/attrs/MaxFilesHtmlAttr.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHtmlAttr */ "./frontend/main/attrs/BaseHtmlAttr.js");

function MaxFilesHtmlAttr() {
  _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.attrName = 'max_files';

  /**
   * @param  input {InputData}
   * @return {boolean}
   */
  this.isSupported = function (input) {
    const [node] = input.nodes;
    return 'file' === node.type;
  };

  /**
   * @param input {FileData|InputData}
   */
  this.setInput = function (input) {
    _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setInput.call(this, input);
    const {
      max_files: maxFiles = 1
    } = JSON.parse(input.previewsContainer.dataset.args);
    this.initial = +maxFiles;
  };
  this.addWatcherAttr = () => {};
}
MaxFilesHtmlAttr.prototype = Object.create(_BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxFilesHtmlAttr);

/***/ },

/***/ "./frontend/main/attrs/RemainingCalcAttr.js"
/*!**************************************************!*\
  !*** ./frontend/main/attrs/RemainingCalcAttr.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHtmlAttr */ "./frontend/main/attrs/BaseHtmlAttr.js");

function RemainingCalcAttr() {
  _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.attrName = 'remaining';
  this.isSupported = function (input) {
    return input.attrs.hasOwnProperty('maxLength');
  };
  this.setInput = function (input) {
    var _input$value$current$;
    _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setInput.call(this, input);
    const {
      maxLength
    } = input.attrs;
    const current = (_input$value$current$ = input.value.current?.length) !== null && _input$value$current$ !== void 0 ? _input$value$current$ : 0;
    this.initial = maxLength.value.current - current;
  };
  this.addWatcherAttr = () => {};
  this.observe = function () {
    _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.observe.call(this);
    this.input.value.watch(() => this.updateAttr());
    this.input.attrs.maxLength.value.watch(() => this.updateAttr());
  };
  this.updateAttr = function () {
    var _this$input$value$cur;
    const {
      maxLength
    } = this.input.attrs;
    const current = (_this$input$value$cur = this.input.value.current?.length) !== null && _this$input$value$cur !== void 0 ? _this$input$value$cur : 0;
    this.value.current = maxLength.value.current - current;
  };
}
RemainingCalcAttr.prototype = Object.create(_BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemainingCalcAttr);

/***/ },

/***/ "./frontend/main/calc.module/CalculatedFormula.js"
/*!********************************************************!*\
  !*** ./frontend/main/calc.module/CalculatedFormula.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _applyFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyFilters */ "./frontend/main/calc.module/applyFilters.js");
/* harmony import */ var _getFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFilters */ "./frontend/main/calc.module/getFilters.js");
/* harmony import */ var _html_macro_escapeHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html.macro/escapeHtml */ "./frontend/main/html.macro/escapeHtml.js");
/* harmony import */ var _attachConstNamespace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attachConstNamespace */ "./frontend/main/calc.module/attachConstNamespace.js");
/* harmony import */ var _inputs_InputData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputs/InputData */ "./frontend/main/inputs/InputData.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @param formula
 * @param root    {Observable}
 * @class
 */






const {
  applyFilters: wpFilters,
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.custom.formula.macro', 'jet-form-builder', _attachConstNamespace__WEBPACK_IMPORTED_MODULE_3__["default"]);

// Matches a string that is *entirely* consumed by a single numeric literal
// (optionally signed, optionally decimal, optionally scientific notation) -
// no leftover characters allowed. Used by calculateEvalString() to decide
// whether a substituted value may be emitted as a bare numeric literal
// instead of a JSON-quoted string.
const NUMERIC_LITERAL_RE = /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/;
const REGEX_PRECEDING_KEYWORDS = ['await', 'break', 'case', 'continue', 'debugger', 'delete', 'do', 'else', 'in', 'instanceof', 'new', 'of', 'return', 'throw', 'typeof', 'void', 'yield'];

// Control-statement headers whose parenthesized condition/expression is
// immediately followed by a statement - e.g. `if (...)/re/.test(x)`. A `)`
// that closes one of these is a statement boundary, not the end of a call
// or grouping expression, so `/` right after it still starts a regex
// literal rather than being parsed as division.
const REGEX_PRECEDING_PAREN_KEYWORDS = ['if', 'while', 'for', 'switch', 'catch', 'with'];

// Marks an identifier that was immediately preceded by `.` (a member
// name, e.g. the `return` in `foo.return`) so canStartRegexLiteral() can
// tell it apart from the `return` *keyword*. This uses a control character
// (never produced by consuming ordinary formula punctuation/identifiers) as
// the prefix, rather than `.` itself: a bare `.` is itself a valid,
// complete previousSignificant value (e.g. the last `.` of the spread
// operator `...`, or a dangling `.` before whitespace), and prefixing with
// `.` would make that bare token indistinguishable from "member access in
// progress", wrongly routing `/` after `...` through the member-access
// (division) branch instead of recognizing it as a regex opener.
const MEMBER_NAME_PREFIX = '\u0000';
function canStartRegexLiteral(previousSignificant, precedingParenKeyword) {
  if (previousSignificant.startsWith(MEMBER_NAME_PREFIX)) {
    // A member name (`foo.return`, `foo.new`, ...) reads like a regex-
    // preceding keyword by spelling alone, but it's a property access
    // result, so `/` after it divides - same as after any other value.
    return false;
  }
  if (')' === previousSignificant) {
    return REGEX_PRECEDING_PAREN_KEYWORDS.includes(precedingParenKeyword);
  }

  // `++`/`--` are postfix operators: `x++ /2` divides, it doesn't open a
  // regex, even though the trailing `+`/`-` alone would normally signal
  // the start of an expression.
  if ('++' === previousSignificant || '--' === previousSignificant) {
    return false;
  }

  // `...` (spread/rest) always expects an expression next, so `/`
  // immediately after it unambiguously opens a regex literal - unlike a
  // bare, incomplete `.`, which is handled by the fallthrough below.
  if ('...' === previousSignificant) {
    return true;
  }

  // `}` is ambiguous in general JS grammar (it can close a block
  // statement, where `/` starts a regex, or an object literal /
  // destructuring pattern, where `/` divides), and a real parser would
  // be needed to fully disambiguate it. Since this heuristic only exists
  // to decide how untrusted macro values get escaped before reaching
  // `new Function()`, the safe default on that ambiguity is to treat `/`
  // as opening a regex: over-escaping a value as regex content when the
  // author actually meant division fails a formula loudly (caught by
  // calculate()'s try/catch), whereas under-escaping it as a string
  // leaves a code-injection path open.
  return !previousSignificant || REGEX_PRECEDING_KEYWORDS.includes(previousSignificant) || /[([{:;,=!?&|+\-*%~^<>}]/.test(previousSignificant);
}
function updatePreviousSignificant(previousSignificant, current, sawWhitespaceSinceSignificant = false) {
  if (/[\w$]/.test(current)) {
    if (!sawWhitespaceSinceSignificant && /^[A-Za-z_$][\w$]*$/.test(previousSignificant)) {
      return previousSignificant + current;
    }
    if ('.' === previousSignificant) {
      return MEMBER_NAME_PREFIX + current;
    }
    if (previousSignificant.startsWith(MEMBER_NAME_PREFIX) && /^[\w$]*$/.test(previousSignificant.slice(1))) {
      return previousSignificant + current;
    }
  }

  // Track `++`/`--` as a pair so canStartRegexLiteral() can tell the
  // postfix-increment/decrement operator apart from a single unary
  // `+`/`-`, which affects whether a following `/` divides or opens a
  // regex literal. Gated on no whitespace/comment in between: `1+ +/re/`
  // or `1+/*c*/+/re/` are two SEPARATE `+` tokens (unary plus of a regex-
  // derived expression), not a postfix `++` - merging them anyway would
  // misclassify the following `/` as division instead of a regex opener.
  if (('+' === current || '-' === current) && current === previousSignificant && !sawWhitespaceSinceSignificant) {
    return current + current;
  }

  // Track the spread/rest operator `...` as a single accumulated token,
  // same as `++`/`--` above: a bare `.` alone is ambiguous (it could be
  // the start of a not-yet-typed member access), but `...` is a complete,
  // unambiguous Ellipsis punctuator - the `/` immediately after it always
  // opens a regex literal (a spread always expects an expression next),
  // never division.
  if ('.' === current && ('.' === previousSignificant || '..' === previousSignificant)) {
    return previousSignificant + current;
  }
  return current;
}

/**
 * Tracks the lexical context of the trusted formula text surrounding a macro.
 * Macro values need a different representation inside a string literal than
 * they do in JavaScript code: inserting a complete JSON literal into
 * `'%field%'` would insert its quotes into the already-open literal.
 *
 * This intentionally only follows literal boundaries. Formula syntax itself
 * remains author-provided code; this is solely used to encode untrusted macro
 * values before they reach `new Function()`.
 *
 * @return {{ consume: (function(string): string), getState: (function(): string), isEscaped: (function(): boolean) }}
 */
/* eslint-disable max-depth, max-lines-per-function */
function createFormulaLexicalContext() {
  let state = 'code';
  let escaped = false;
  let literalReturnState = 'code';
  let commentReturnState = 'code';
  const templateExpressionDepths = [];
  const templateReturnStates = [];
  let regexCharacterClass = false;
  let regexReturnState = 'code';
  let previousSignificant = '';
  // The significant token *before* previousSignificant - only needed to
  // recognize the two-word `for await (` header (async iteration), where
  // the word immediately before `(` is `await`, not `for`.
  let wordBeforePrevious = '';
  // Tracks whether whitespace was seen since previousSignificant was last
  // set, so a new identifier starting right after whitespace can be told
  // apart from one continuing straight off punctuation (e.g. `.foo`).
  let sawWhitespaceSinceSignificant = false;
  // Stack of `(` groupings in code/template-expression contexts, tracking
  // which keyword (if any) preceded each one - so that when the matching
  // `)` is reached, canStartRegexLiteral() can tell a control-statement
  // header apart from a call or grouping expression.
  const parenKeywordStack = [];
  let precedingParenKeyword = '';
  return {
    consume(value) {
      value = String(value);
      let normalized = '';
      for (let index = 0; index < value.length; index++) {
        const current = value[index];
        const next = value[index + 1];
        if (!escaped && ['single', 'double', 'template'].includes(state) && ('\r' === current || '\n' === current)) {
          normalized += '\\n';
          if ('\r' === current && '\n' === next) {
            index++;
          }
          continue;
        }
        normalized += current;
        if (escaped) {
          escaped = false;
          continue;
        }
        if ('line-comment' === state) {
          if ('\r' === current || '\n' === current) {
            state = commentReturnState;
            // A comment separates tokens exactly like whitespace
            // does: `1+/*c*/+/re/` is two distinct `+` tokens,
            // not a postfix `++`, so the operator/identifier
            // accumulation in updatePreviousSignificant() must
            // not bridge across it.
            sawWhitespaceSinceSignificant = true;
          }
          continue;
        }
        if ('block-comment' === state) {
          if ('*' === current && '/' === next) {
            state = commentReturnState;
            normalized += next;
            index++;
            sawWhitespaceSinceSignificant = true;
          }
          continue;
        }
        if (['single', 'double', 'template'].includes(state) && '\\' === current) {
          escaped = true;
          continue;
        }
        if ('single' === state) {
          if ('\'' === current) {
            state = literalReturnState;
            previousSignificant = 'value';
          }
          continue;
        }
        if ('double' === state) {
          if ('"' === current) {
            state = literalReturnState;
            previousSignificant = 'value';
          }
          continue;
        }
        if ('template' === state) {
          if ('`' === current) {
            var _templateReturnStates;
            state = (_templateReturnStates = templateReturnStates.pop()) !== null && _templateReturnStates !== void 0 ? _templateReturnStates : 'code';
            previousSignificant = 'value';
          } else if ('$' === current && '{' === next) {
            state = 'template-expression';
            templateExpressionDepths.push(1);
            previousSignificant = '';
            normalized += next;
            index++;
          }
          continue;
        }
        if ('regex' === state) {
          if ('\\' === current) {
            escaped = true;
          } else if ('[' === current) {
            regexCharacterClass = true;
          } else if (']' === current) {
            regexCharacterClass = false;
          } else if ('/' === current && !regexCharacterClass) {
            state = regexReturnState;
            previousSignificant = 'value';
          }
          continue;
        }
        if (['code', 'template-expression'].includes(state) && '/' === current && ['/', '*'].includes(next)) {
          commentReturnState = state;
          state = '/' === next ? 'line-comment' : 'block-comment';
          normalized += next;
          index++;
          continue;
        }
        if (['code', 'template-expression'].includes(state) && '/' === current && canStartRegexLiteral(previousSignificant, precedingParenKeyword)) {
          regexReturnState = state;
          regexCharacterClass = false;
          state = 'regex';
          continue;
        }
        if (['code', 'template-expression'].includes(state) && '(' === current) {
          // `for await (` (async iteration) has `await` - not
          // `for` - as the word immediately before `(`; look one
          // word further back so its `)` is still recognized as
          // a control-statement boundary, same as plain `for (`.
          const isForAwait = 'await' === previousSignificant && 'for' === wordBeforePrevious;
          parenKeywordStack.push(isForAwait ? 'for' : REGEX_PRECEDING_PAREN_KEYWORDS.includes(previousSignificant) ? previousSignificant : '');
        } else if (['code', 'template-expression'].includes(state) && ')' === current) {
          var _parenKeywordStack$po;
          precedingParenKeyword = (_parenKeywordStack$po = parenKeywordStack.pop()) !== null && _parenKeywordStack$po !== void 0 ? _parenKeywordStack$po : '';
        }
        if ('template-expression' === state) {
          if ('\'' === current || '"' === current) {
            literalReturnState = state;
            state = '\'' === current ? 'single' : 'double';
          } else if ('`' === current) {
            templateReturnStates.push(state);
            state = 'template';
          } else if ('{' === current) {
            templateExpressionDepths[templateExpressionDepths.length - 1]++;

            // `{` is itself a significant token (e.g. it can
            // open a nested block/function body inside `${...}`,
            // not just increase interpolation depth) - track it
            // like any other punctuation so a `/` right after a
            // nested `}` closing that block is still correctly
            // classified relative to it, instead of stale state
            // left over from before this `{`.
            if (sawWhitespaceSinceSignificant) {
              wordBeforePrevious = previousSignificant;
            }
            previousSignificant = current;
            sawWhitespaceSinceSignificant = false;
          } else if ('}' === current) {
            const depthIndex = templateExpressionDepths.length - 1;
            if (0 === --templateExpressionDepths[depthIndex]) {
              templateExpressionDepths.pop();
              state = 'template';
            } else if (sawWhitespaceSinceSignificant) {
              wordBeforePrevious = previousSignificant;
            }

            // Same as `{` above: a nested `}` (closing a block/
            // function body inside `${...}`, not the `${...}`
            // itself) is a real token that the regex-vs-division
            // heuristic must see, so a macro-adjacent `/` right
            // after it is escaped as regex content rather than
            // falling back to stale pre-`{` state.
            if ('template-expression' === state) {
              previousSignificant = current;
              sawWhitespaceSinceSignificant = false;
            }
          } else if (!/\s/.test(current)) {
            if (sawWhitespaceSinceSignificant && /[A-Za-z_$]/.test(current)) {
              wordBeforePrevious = previousSignificant;
            }
            previousSignificant = updatePreviousSignificant(previousSignificant, current, sawWhitespaceSinceSignificant);
            sawWhitespaceSinceSignificant = false;
          } else {
            sawWhitespaceSinceSignificant = true;
          }
          continue;
        }
        if ('\'' === current) {
          literalReturnState = state;
          state = 'single';
        } else if ('"' === current) {
          literalReturnState = state;
          state = 'double';
        } else if ('`' === current) {
          templateReturnStates.push(state);
          state = 'template';
        } else if (!/\s/.test(current)) {
          if (sawWhitespaceSinceSignificant && /[A-Za-z_$]/.test(current)) {
            wordBeforePrevious = previousSignificant;
          }
          previousSignificant = updatePreviousSignificant(previousSignificant, current, sawWhitespaceSinceSignificant);
          sawWhitespaceSinceSignificant = false;
        } else {
          sawWhitespaceSinceSignificant = true;
        }
      }
      return normalized;
    },
    getState() {
      return state;
    },
    isEscaped() {
      return escaped;
    },
    isInRegexCharacterClass() {
      return regexCharacterClass;
    }
  };
}
/* eslint-enable max-depth, max-lines-per-function */

function escapeMacroForStringLiteral(result, state, hasPendingEscape = false) {
  const stringResult = String(result);
  if (hasPendingEscape) {
    if (!stringResult.length) {
      return '\n';
    }
    return 'u' + stringResult.charCodeAt(0).toString(16).padStart(4, '0') + escapeMacroForStringLiteral(stringResult.slice(1), state);
  }
  let escaped = JSON.stringify(stringResult).slice(1, -1);
  if ('single' === state) {
    escaped = escaped.replace(/'/g, "\\'");
  }
  if ('template' === state) {
    // Escape every `$`, not just `${` pairs found inside this one macro
    // value: a value ending in `$` would otherwise recombine with a
    // `{` from the immediately following *static* formula text into a
    // live template-expression opener.
    escaped = escaped.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  }
  return escaped;
}
function escapeMacroForHtml(result) {
  return (0,_html_macro_escapeHtml__WEBPACK_IMPORTED_MODULE_2__.escapeHtml)(result);
}
function escapeMacroForRegexLiteral(result, hasPendingEscape = false, inCharacterClass = false) {
  const stringResult = String(result);
  if (hasPendingEscape) {
    if (!stringResult.length) {
      return 'u0000';
    }
    return 'u' + stringResult.charCodeAt(0).toString(16).padStart(4, '0') + escapeMacroForRegexLiteral(stringResult.slice(1), false, inCharacterClass);
  }

  // Inside a character class (`[...]`), `-` denotes a range (e.g. `a-z`)
  // rather than a literal character, and `]`/`^` carry class-specific
  // meaning that the outside-class escape set below doesn't cover.
  const escaped = inCharacterClass ? stringResult.replace(/[\\^\]-]/g, '\\$&') : stringResult.replace(/[\\^$.*+?()[\]{}|/]/g, '\\$&');
  return escaped.replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}
function getOptionLabelFromNode(node) {
  if (!node) {
    return '';
  }
  if (node.tagName === 'SELECT') {
    return Array.from(node.selectedOptions || []).map(option => String(option.label || option.textContent || option.value || '').trim()).filter(Boolean).join(', ');
  }
  if ((node.type === 'checkbox' || node.type === 'radio') && !node.checked) {
    return '';
  }
  if (node.type === 'checkbox' || node.type === 'radio') {
    const label = node.closest('label');
    if (!label) {
      return '';
    }
    const textNode = label.querySelector('span');
    return String(textNode?.textContent || label.textContent || node.value || '').trim();
  }
  return '';
}
function getRelatedInputOptionLabel(relatedInput) {
  const labels = Array.from(relatedInput.nodes || []).map(getOptionLabelFromNode).filter(Boolean);
  return labels.length ? labels.join(', ') : relatedInput.value.current;
}

/**
 * @param root    {InputData|Observable}
 * @param options {{forceFunction: boolean}}
 */
function CalculatedFormula(root, options = {}) {
  var _this$input$root;
  this.parts = [];
  this.related = [];
  this.relatedAttrs = [];
  this.regexp = /%([\w\-].*?\S?)%/g;
  this.watchers = [];
  const {
    forceFunction = false
  } = options;
  this.forceFunction = forceFunction;
  if (root instanceof _inputs_InputData__WEBPACK_IMPORTED_MODULE_4__["default"]) {
    this.input = root;
  }
  this.root = (_this$input$root = this.input?.root) !== null && _this$input$root !== void 0 ? _this$input$root : root;
}
CalculatedFormula.prototype = {
  // raw value
  formula: null,
  parts: [],
  related: [],
  relatedAttrs: [],
  /**
   * @type {InputData}
   */
  input: null,
  /**
   * @type {Observable|ObservableRow}
   */
  root: null,
  /**
   * @type {RegExp}
   */
  regexp: null,
  forceFunction: false,
  /**
   * @type {Function}
   */
  setResult: () => {
    throw new Error('CalculatedFormula.setResult is not set!');
  },
  /**
   *
   * @param  relatedInput {InputData}
   * @return {*}
   */
  relatedCallback(relatedInput) {
    return relatedInput.value.current;
  },
  relatedLabelCallback(relatedInput) {
    return getRelatedInputOptionLabel(relatedInput);
  },
  /**
   *
   * @param value
   */
  observe(value) {
    this.formula = value;
    if (!Array.isArray(value)) {
      this.observeItem(value);
      return;
    }
    value.forEach(item => {
      this.observeItem(item);
    });
  },
  /**
   * @private
   * @param value {String}
   */
  observeItem(value) {
    let match;
    let prevIndex = 0;
    value += '';
    while ((match = this.regexp.exec(value)) !== null) {
      const part = this.observeMacro(match[1]);
      if (0 !== match.index) {
        this.parts.push(value.slice(prevIndex, match.index));
      }
      prevIndex = match.index + match[0].length;
      if (false === part) {
        this.onMissingPart(match[0]);
      } else {
        this.parts.push(part);
      }
    }

    // save last part
    if (prevIndex === value.length) {
      return;
    }
    this.parts.push(value.slice(prevIndex));
    if (1 === this.parts.length) {
      this.parts = [];
    }
  },
  /**
   * @param inputMatch {String}
   */
  onMissingPart(inputMatch) {
    this.parts.push(inputMatch);
  },
  /**
   * @param fieldName {String}
   */
  isFieldNodeExists(fieldName) {
    const isFieldNode = this.root.dataInputs[fieldName];
    if (undefined === isFieldNode) {
      return false;
    }

    /**
     * Check if the specified node exists in the rootNode.
     * If the node does not exist, analyze the formula to determine an adjusted value
     * based on the operators surrounding the placeholder.
     * @since 3.4.5
     *
     * @see https://github.com/Crocoblock/issues-tracker/issues/11786
     */
    let existNode = this.root.rootNode[fieldName] || this.root.rootNode[fieldName + '[]'] || this.root.rootNode.querySelectorAll('[data-field-name="' + fieldName + '"]');

    /**
     * When we call querySelectorAll it returns empty NodeList array if the element not found, so we need to reset it
     */
    if (existNode && 0 === existNode.length) {
      existNode = undefined;
    }

    /**
     * @see https://github.com/Crocoblock/issues-tracker/issues/14544
     */
    if (undefined === existNode) {
      const esc = s => s.replace(/([\\^$*+?.()|{}\[\]])/g, '\\$1');
      const f = esc(fieldName);
      const selector = `[name$="[${f}]"],` + `[name$="[${f}][]"],` + `[name*="[${f}]["]`;
      const found = this.root.rootNode.querySelectorAll(selector);
      if (found && found.length) {
        existNode = found;
      }
    }

    /**
     * @see   https://github.com/Crocoblock/issues-tracker/issues/13730
     * @since 3.4.5.1
     */
    existNode = wpFilters('jet.fb.formula.node.exists', existNode, fieldName, this);
    return existNode;
  },
  /**
   * @param  current {String}
   * @return {(function(): *)|*}
   */
  // eslint-disable-next-line max-lines-per-function
  observeMacro(current) {
    if (null === this.formula) {
      this.formula = current;
    }

    // eslint-disable-next-line @wordpress/no-unused-vars-before-return
    const [name, ...filters] = current.split('|');
    const parsedName = name.match(/[\w\-:]+/g);
    if (!parsedName) {
      return false;
    }
    let [fieldName, ...params] = parsedName;
    if (name.includes('::')) {
      const [possibleFieldName, ...possibleParams] = name.split('::');
      if (this.root.getInput(possibleFieldName)) {
        fieldName = possibleFieldName;
        params = possibleParams;
      }
    }

    /**
     * @see   https://github.com/Crocoblock/issues-tracker/issues/13730
     * @since 3.4.5.1 (moved to a method and added additional checks)
     */
    const existNode = this.isFieldNodeExists(fieldName);
    if (existNode === undefined) {
      const regex = new RegExp(`%${fieldName}%`, 'g');
      let adjustedValue = 0;
      let adjustedFormula = this.formula;
      let match;
      while (null !== (match = regex.exec(this.formula))) {
        const before = this.formula[match.index - 1];
        const after = this.formula[match.index + match[0].length];
        if ('*' === before || '/' === before || '*' === after || '/' === after) {
          if ('/' === before || '*' === before && '*' === after) {
            adjustedValue = 1;
          } else {
            adjustedValue = 0;
          }
          break;
        } else {
          adjustedValue = 0;
          break;
        }
      }
      adjustedFormula = adjustedFormula.replace(match[0], adjustedValue);
      this.formula = adjustedFormula;
      return adjustedValue;
    }
    const relatedInput = fieldName !== 'this' ? this.root.getInput(fieldName) : this.input;
    if (!relatedInput && !fieldName.includes('::')) {
      return false;
    }

    // eslint-disable-next-line @wordpress/no-unused-vars-before-return
    const filtersList = (0,_getFilters__WEBPACK_IMPORTED_MODULE_1__["default"])(filters);
    if (fieldName.includes('::')) {
      const customValue = wpFilters('jet.fb.custom.formula.macro', false, fieldName, params, this);
      if (false === customValue) {
        return false;
      }
      if ('function' === typeof customValue) {
        return () => (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__["default"])(customValue(), filtersList);
      }
      return (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__["default"])(customValue, filtersList);
    }
    if (!this.related.includes(relatedInput.name)) {
      this.related.push(relatedInput.name);
      this.watchers.push(relatedInput.watch(() => this.setResult()));
    }
    if (!params?.length) {
      return () => (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__["default"])(this.relatedCallback(relatedInput), filtersList);
    }
    const [attrName] = params;
    if ('label' === attrName) {
      return () => (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__["default"])(this.relatedLabelCallback(relatedInput), filtersList);
    }
    if (!relatedInput.attrs.hasOwnProperty(attrName)) {
      return false;
    }
    /**
     * @type {BaseHtmlAttr}
     */
    const htmlAttr = relatedInput.attrs[attrName];
    if (!this.relatedAttrs.includes(relatedInput.name + attrName)) {
      this.relatedAttrs.push(relatedInput.name + attrName);
      this.watchers.push(htmlAttr.value.watch(() => this.setResult()));
    }
    return () => (0,_applyFilters__WEBPACK_IMPORTED_MODULE_0__["default"])(htmlAttr.value.current, filtersList);
  },
  /**
   * Maps `this.parts` into the joined string representation of the
   * formula. Shared by callers that only need the substituted text
   * (e.g. HTML macros, restriction messages) and by calculate(), which
   * additionally has to make the result safe to run through
   * `new Function()` - see calculateEvalString() for that concern.
   *
   * `mapResult` maps a single substituted (function-derived) part's
   * result before it is joined into the string. `mapStatic` receives the
   * trusted formula text between macros.
   *
   * @param  mapResult {Function}
   * @param  mapStatic {Function}
   * @return {string}
   */
  mapParts(mapResult, mapStatic = current => current) {
    var _window$JetFormBuilde;
    if (!this.parts.length) {
      return this.formula;
    }
    const {
      applyFilters: deprecatedApplyFilters = false
    } = (_window$JetFormBuilde = window?.JetFormBuilderMain?.filters) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {};
    return this.parts.map(current => {
      if ('function' !== typeof current) {
        if (!this.input?.nodes || false === deprecatedApplyFilters || 'string' !== typeof current) {
          return mapStatic(current);
        }
        current = wpFilters('jet.fb.onCalculate.part', current, this);
        return mapStatic(deprecatedApplyFilters('forms/calculated-formula-before-value', current, jQuery(this.input.nodes[0])));
      }
      const result = current();
      const normalizedResult = null === result || undefined === result || '' === result || Number.isNaN(result) ? this.emptyValue() : result;
      return mapResult(normalizedResult);
    }).join('');
  },
  /**
   * Used for restriction/validation messages that are rendered via
   * `innerHTML` (see AdvancedRestriction.js). Substituted macro values
   * are HTML-escaped so a malicious field value referenced in a
   * validation message can't inject live markup; the trusted static
   * message text (author-authored, may contain intentional markup) is
   * left untouched.
   *
   * @see https://github.com/Crocoblock/issues-tracker (Reflected XSS via Calculated Field)
   * @return {string}
   */
  calculateString() {
    return this.mapParts(result => escapeMacroForHtml(result));
  },
  /**
   * Builds the string that is handed to `new Function()` in calculate().
   * Every substituted field value (the `function`-branch results in
   * mapParts()) must never be able to inject raw JS syntax into that
   * string.
   *
   * A value that represents a finite number (either already a number,
   * or a numeric string such as a related text field's raw value) is
   * emitted as a bare numeric literal, so existing numeric formulas
   * (`%a% + %b%`, `%a% * %b%`, …) keep doing real arithmetic exactly as
   * before. Anything else (e.g. option labels in "as String" mode, or
   * arbitrary text coming from an unsanitized preset) is emitted as a
   * JSON-quoted string literal, so it can only ever be evaluated as
   * inert string data - never as executable JS - regardless of its
   * contents.
   *
   * Static formula text is preserved except for physical line breaks inside
   * quoted literals, which are normalized to escaped line breaks before the
   * formula is evaluated.
   *
   * @see https://github.com/Crocoblock/issues-tracker (Reflected XSS via Calculated Field)
   * @return {string}
   */
  calculateEvalString() {
    const lexicalContext = createFormulaLexicalContext();
    if (!this.parts.length) {
      return lexicalContext.consume(this.formula);
    }
    return this.mapParts(result => {
      const state = lexicalContext.getState();
      const hasPendingEscape = lexicalContext.isEscaped();
      let replacement;
      if (['single', 'double', 'template'].includes(state)) {
        replacement = escapeMacroForStringLiteral(result, state, hasPendingEscape);
      } else if ('regex' === state) {
        replacement = escapeMacroForRegexLiteral(result, hasPendingEscape, lexicalContext.isInRegexCharacterClass());
      } else if (['line-comment', 'block-comment'].includes(state)) {
        replacement = '';
      } else if ('boolean' === typeof result) {
        // true/false are fixed JS keywords with no attacker-controlled
        // content, so emitting them bare is always safe - and
        // necessary: JSON-quoting a boolean result (e.g. from a
        // custom formula macro) as "false" would make it a
        // non-empty, truthy *string* in the generated code, flipping
        // the result of `%macro% ? a : b`.
        replacement = String(result);
      } else if ('number' === typeof result) {
        replacement = Number.isFinite(result)
        // Object.is distinguishes -0 from 0; String(-0) is "0",
        // so negative zero needs an explicit literal to avoid
        // silently flipping the sign of the formula's result.
        ? Object.is(result, -0) ? '-0' : String(result)
        // Infinity/-Infinity/NaN are real JS global identifiers,
        // not string literals - emitting them JSON-quoted would
        // turn arithmetic (`1 + Infinity`) into string
        // concatenation (`1 + "Infinity"`).
        : String(result);
      } else {
        const trimmedResult = String(result).trim();

        // Reject a leading-zero decimal string (e.g. "0123"): as a
        // bare token it would be parsed by new Function() as a
        // legacy octal literal (0123 === 83), silently corrupting
        // the value instead of preserving it.
        const hasLeadingZero = /^[+-]?0\d/.test(trimmedResult);
        const isNumericLiteral = !hasLeadingZero && NUMERIC_LITERAL_RE.test(trimmedResult) && Number.isFinite(parseFloat(trimmedResult));
        if (isNumericLiteral) {
          // Emit the already-validated literal as-is rather than
          // canonicalizing it through Number()/parseFloat(): that
          // would collapse a signed zero (e.g. "-0") to "0" and
          // change the formula's arithmetic result.
          replacement = trimmedResult;
        } else if ('true' === trimmedResult || 'false' === trimmedResult) {
          // A field whose raw value is literally the text "true"/
          // "false" (e.g. a select/radio/checkbox option, or a
          // preset-populated text field mirroring a boolean) needs
          // to keep behaving like the boolean it represents in
          // code position (`%field% ? a : b`), same as an actual
          // boolean macro result just above. Emitting it
          // JSON-quoted would make it a non-empty, always-truthy
          // *string* instead, silently flipping every such
          // condition. `trimmedResult` is one of exactly two fixed
          // literal words here, so this is always safe to emit
          // bare - it can never carry attacker-controlled syntax.
          replacement = trimmedResult;
        } else {
          replacement = JSON.stringify(String(result));
        }
      }
      lexicalContext.consume(replacement);
      return replacement;
    }, current => lexicalContext.consume(current));
  },
  emptyValue() {
    return '';
  },
  calculate() {
    if (!this.parts.length && !this.forceFunction) {
      return this.formula;
    }
    const formula = this.calculateEvalString();
    try {
      return new Function('return ' + formula)();
    } catch (error) {
      //console.error( error );
      this.showError(formula);
    }
  },
  clearWatchers() {
    this.watchers.forEach(current => 'function' === typeof current && current());
    this.watchers = [];
    this.relatedAttrs = [];
    this.related = [];
  },
  /* eslint-disable no-console */
  showError(formula) {
    console.group((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('JetFormBuilder: You have invalid calculated formula', 'jet-form-builder'));
    this.showErrorDetails(formula);
    console.groupEnd();
  },
  showErrorDetails(formula) {
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)(
    // translators: %s - initial formula
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Initial: %s', 'jet-form-builder'), this.formula));
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)(
    // translators: %s - computed formula
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Computed: %s', 'jet-form-builder'), formula));
    if (!this.input && !this.root?.parent) {
      return;
    }
    if (this.input) {
      console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)(
      // translators: %s - filed name
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Field: %s', 'jet-form-builder'), this.input.path.join('.')));
      return;
    }
    const index = this.root.parent.findIndex(this.root);
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)(
    // translators: %s - path to current field
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Scope: %s', 'jet-form-builder'), [...this.root.parent.path, -1 === index ? '' : index].filter(Boolean).join('.')));
  }
  /* eslint-enable no-console */
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedFormula);

/***/ },

/***/ "./frontend/main/calc.module/applyFilters.js"
/*!***************************************************!*\
  !*** ./frontend/main/calc.module/applyFilters.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function applyFilters(value, filters, context = {}) {
  if (null === filters || !filters?.length) {
    return value;
  }
  let canUseRawRepeaterValue = Boolean(context?.rawRepeaterValue);
  for (const filter of filters) {
    const shouldUseRawRepeaterValue = canUseRawRepeaterValue && false === filter?.isCoreFilter;
    value = filter.applyWithProps(shouldUseRawRepeaterValue ? context.rawRepeaterValue : value);
    canUseRawRepeaterValue = false;
  }
  return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyFilters);

/***/ },

/***/ "./frontend/main/calc.module/attachConstNamespace.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/attachConstNamespace.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const_namespace_CurrentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.namespace/CurrentDate */ "./frontend/main/calc.module/const.namespace/CurrentDate.js");
/* harmony import */ var _const_namespace_Min_In_Sec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.namespace/Min_In_Sec */ "./frontend/main/calc.module/const.namespace/Min_In_Sec.js");
/* harmony import */ var _const_namespace_Month_In_Sec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.namespace/Month_In_Sec */ "./frontend/main/calc.module/const.namespace/Month_In_Sec.js");
/* harmony import */ var _const_namespace_Hour_In_Sec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const.namespace/Hour_In_Sec */ "./frontend/main/calc.module/const.namespace/Hour_In_Sec.js");
/* harmony import */ var _const_namespace_Day_In_Sec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const.namespace/Day_In_Sec */ "./frontend/main/calc.module/const.namespace/Day_In_Sec.js");
/* harmony import */ var _const_namespace_Year_In_Sec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./const.namespace/Year_In_Sec */ "./frontend/main/calc.module/const.namespace/Year_In_Sec.js");
/* eslint-disable camelcase */






const {
  applyFilters: wpApplyFilters
} = JetPlugins.hooks;
const getStaticFunctions = () => wpApplyFilters('jet.fb.static.functions', [_const_namespace_CurrentDate__WEBPACK_IMPORTED_MODULE_0__["default"], _const_namespace_Min_In_Sec__WEBPACK_IMPORTED_MODULE_1__["default"], _const_namespace_Month_In_Sec__WEBPACK_IMPORTED_MODULE_2__["default"], _const_namespace_Hour_In_Sec__WEBPACK_IMPORTED_MODULE_3__["default"], _const_namespace_Day_In_Sec__WEBPACK_IMPORTED_MODULE_4__["default"], _const_namespace_Year_In_Sec__WEBPACK_IMPORTED_MODULE_5__["default"]]);

/**
 * @type {BaseInternalMacro[]}
 */
let staticFunctions = [];

/**
 * @param  slug
 * @return {boolean|BaseInternalMacro}
 */
function getFunction(slug) {
  if (!staticFunctions.length) {
    staticFunctions = getStaticFunctions();
  }
  for (const staticFunction of staticFunctions) {
    const current = new staticFunction();
    if (current.getId() !== slug) {
      continue;
    }
    return current;
  }
  return false;
}

/**
 * @param  result    {String}
 * @param  fieldName {String}
 * @return {*}
 */
function attachConstNamespace(result, fieldName) {
  if (!fieldName.includes('CT::')) {
    return result;
  }
  fieldName = fieldName.replace('CT::', '');
  const staticFunc = getFunction(fieldName);
  if (false === staticFunc) {
    return result;
  }
  return staticFunc.getResult();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attachConstNamespace);

/***/ },

/***/ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js"
/*!************************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/BaseInternalMacro.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function BaseInternalMacro() {}
BaseInternalMacro.prototype = {
  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * @return {string}
   */
  getId() {
    throw new Error('You need to rewrite this method');
  },
  getResult() {
    throw new Error('You need to rewrite this method');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseInternalMacro);

/***/ },

/***/ "./frontend/main/calc.module/const.namespace/CurrentDate.js"
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/CurrentDate.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");

function CurrentDate() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'CurrentDate';
  this.getResult = () => new Date().getTime();
}
CurrentDate.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentDate);

/***/ },

/***/ "./frontend/main/calc.module/const.namespace/Day_In_Sec.js"
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Day_In_Sec.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");
/* eslint-disable camelcase */


function Day_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Day_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Day_In_Sec;
}
Day_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day_In_Sec);

/***/ },

/***/ "./frontend/main/calc.module/const.namespace/Hour_In_Sec.js"
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Hour_In_Sec.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");
/* eslint-disable camelcase */


function Hour_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Hour_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Hour_In_Sec;
}
Hour_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hour_In_Sec);

/***/ },

/***/ "./frontend/main/calc.module/const.namespace/Min_In_Sec.js"
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Min_In_Sec.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");
/* eslint-disable camelcase */


function Min_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Min_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Min_In_Sec;
}
Min_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Min_In_Sec);

/***/ },

/***/ "./frontend/main/calc.module/const.namespace/Month_In_Sec.js"
/*!*******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Month_In_Sec.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");
/* eslint-disable camelcase */


function Month_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Month_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Month_In_Sec;
}
Month_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Month_In_Sec);

/***/ },

/***/ "./frontend/main/calc.module/const.namespace/Year_In_Sec.js"
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Year_In_Sec.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");
/* eslint-disable camelcase */


function Year_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Year_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Year_In_Sec;
}
Year_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Year_In_Sec);

/***/ },

/***/ "./frontend/main/calc.module/constants.js"
/*!************************************************!*\
  !*** ./frontend/main/calc.module/constants.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Constants = {
  Milli_In_Sec: 1000,
  Sec_In_Min: 60,
  Min_In_Hour: 60,
  Hour_In_Day: 24,
  Day_In_Month: 30,
  Year_In_Day: 365,
  Kb_In_Bytes: 1024
};
Constants.Min_In_Sec = Constants.Sec_In_Min * Constants.Milli_In_Sec;
Constants.Hour_In_Sec = Constants.Min_In_Hour * Constants.Min_In_Sec;
Constants.Day_In_Sec = Constants.Hour_In_Day * Constants.Hour_In_Sec;
Constants.Month_In_Sec = Constants.Day_In_Month * Constants.Day_In_Sec;
Constants.Year_In_Sec = Constants.Year_In_Day * Constants.Day_In_Sec;
Constants.Mb_In_Bytes = Constants.Kb_In_Bytes * 1024;
Constants.Gb_In_Bytes = Constants.Mb_In_Bytes * 1024;
Constants.Tb_In_Bytes = Constants.Gb_In_Bytes * 1024;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Constants);

/***/ },

/***/ "./frontend/main/calc.module/filters/AddDayFilter.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddDayFilter.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function AddDayFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'addDay';
  };
  this.apply = function (value, days) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    days = days ? +days.trim() : 1;
    return current.setDate(current.getDate() + days);
  };
}
AddDayFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddDayFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/AddHourFilter.js"
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddHourFilter.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function AddHourFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'addHour';
  };
  this.apply = function (value, hours) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    hours = hours ? +hours.trim() : 1;
    return current.setHours(current.getHours() + hours);
  };
}
AddHourFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddHourFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/AddMinFilter.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddMinFilter.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function AddMinFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'addMin';
  };
  this.apply = function (value, minutes) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    minutes = minutes ? +minutes.trim() : 1;
    return current.setMinutes(current.getMinutes() + minutes);
  };
}
AddMinFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddMinFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/AddMonthFilter.js"
/*!*************************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddMonthFilter.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function AddDayFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'addMonth';
  };
  this.apply = function (value, months) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    months = months ? +months.trim() : 1;
    return current.setMonth(current.getMonth() + months);
  };
}
AddDayFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddDayFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/AddYearFilter.js"
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddYearFilter.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function AddYearFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'addYear';
  };
  this.apply = function (value, years) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    years = years ? +years.trim() : 1;
    return current.setFullYear(current.getFullYear() + years);
  };
}
AddYearFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddYearFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/FallBackFilter.js"
/*!*************************************************************!*\
  !*** ./frontend/main/calc.module/filters/FallBackFilter.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./frontend/main/functions.js");


function FallBackFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'ifEmpty';
  };
  this.apply = function (value, fallback) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(value) || Number.isNaN(value) ? fallback : value;
  };
}
FallBackFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallBackFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/Filter.js"
/*!*****************************************************!*\
  !*** ./frontend/main/calc.module/filters/Filter.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Filter() {
  this.props = [];
}

// eslint-disable-next-line jsdoc/require-returns-check
/**
 * @return {string}
 */
Filter.prototype.getSlug = function () {
  throw new Error('getSlug is empty');
};
Filter.prototype.setProps = function (props) {
  this.props.push(...props);
};
Filter.prototype.applyWithProps = function (value) {
  return this.apply(value, ...this.props);
};
/**
 * @param  value
 * @param  props
 * @return {*}
 */
// eslint-disable-next-line no-unused-vars
Filter.prototype.apply = function (value, ...props) {
  return value;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ },

/***/ "./frontend/main/calc.module/filters/LengthFilter.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/LengthFilter.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");

function LengthFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'length';
  };
  this.apply = function (value) {
    var _value$length;
    return (_value$length = value?.length) !== null && _value$length !== void 0 ? _value$length : 0;
  };
}
LengthFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LengthFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SetDayFilter.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetDayFilter.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SetDayFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'setDay';
  };
  this.apply = function (value, day) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    day = day ? +day.trim() : 1;
    return current.setDate(day);
  };
}
SetDayFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetDayFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SetHourFilter.js"
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetHourFilter.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SetHourFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'setHour';
  };
  this.apply = function (value, hour) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return value;
    }
    hour = hour ? +hour.trim() : 0;
    return current.setHours(hour);
  };
}
SetHourFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetHourFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SetMinFilter.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetMinFilter.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SetMinFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'setMin';
  };
  this.apply = function (value, min) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return value;
    }
    min = min ? +min.trim() : 0;
    return current.setMinutes(min);
  };
}
SetMinFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetMinFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SetMonthFilter.js"
/*!*************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetMonthFilter.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SetMonthFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'setMonth';
  };
  this.apply = function (value, month) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    month = month ? +month.trim() : 1;
    return current.setMonth(month);
  };
}
SetMonthFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetMonthFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SetYearFilter.js"
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetYearFilter.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SetYearFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'setYear';
  };
  this.apply = function (value, year) {
    year = year ? +year.trim() : false;
    if (!year) {
      return value;
    }
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    return current.setFullYear(year);
  };
}
SetYearFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetYearFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SubtractDayFilter.js"
/*!****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractDayFilter.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SubtractDayFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'subDay';
  };
  this.apply = function (value, days) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    days = days ? +days.trim() : 1;
    return current.setDate(current.getDate() - days);
  };
}
SubtractDayFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractDayFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SubtractHourFilter.js"
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractHourFilter.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SubtractHourFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'subHour';
  };
  this.apply = function (value, hour) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    hour = hour ? +hour.trim() : 1;
    return current.setHours(current.getHours() - hour);
  };
}
SubtractHourFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractHourFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SubtractMinFilter.js"
/*!****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractMinFilter.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SubtractMinFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'subMin';
  };
  this.apply = function (value, minutes) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    minutes = minutes ? +minutes.trim() : 1;
    return current.setMinutes(current.getMinutes() - minutes);
  };
}
SubtractMinFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractMinFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SubtractMonthFilter.js"
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractMonthFilter.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SubtractMonthFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'subMonth';
  };
  this.apply = function (value, months) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    months = months ? +months.trim() : 1;
    return current.setMonth(current.getMonth() - months);
  };
}
SubtractMonthFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractMonthFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/SubtractYearFilter.js"
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractYearFilter.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function SubtractYearFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'subYear';
  };
  this.apply = function (value, years) {
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
    const current = new Date(time);
    if (Number.isNaN(current.getTime())) {
      return 0;
    }
    years = years ? +years.trim() : 1;
    return current.setFullYear(current.getFullYear() - years);
  };
}
SubtractYearFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubtractYearFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/TimestampFilter.js"
/*!**************************************************************!*\
  !*** ./frontend/main/calc.module/filters/TimestampFilter.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function TimestampFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'T';
  };
  this.apply = function (value) {
    if (!value) {
      return 0;
    }
    const {
      time
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value, true);
    return time;
  };
}
TimestampFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimestampFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToDateFilter.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToDateFilter.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function ToDateFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toDate';
  };
  this.apply = function (value, isUTC = true) {
    // Convert string 'true'/'false' to boolean
    if (typeof isUTC === 'string') {
      // Remove quotes and trim
      const cleaned = isUTC.trim().replace(/^['"]|['"]$/g, '');
      const lower = cleaned.toLowerCase();
      isUTC = lower !== 'false';
    } else {
      isUTC = Boolean(isUTC);
    }
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toDate)(new Date(value), isUTC);
  };
}
ToDateFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToDateTimeFilter.js"
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToDateTimeFilter.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function ToDateTimeFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toDateTime';
  };
  this.apply = function (value, isUTC = false) {
    // Convert string 'true'/'false' to boolean
    if (typeof isUTC === 'string') {
      // Remove quotes and trim
      const cleaned = isUTC.trim().replace(/^['"]|['"]$/g, '');
      const lower = cleaned.toLowerCase();
      isUTC = '' === lower ? false : lower !== 'false';
    } else {
      isUTC = Boolean(isUTC);
    }
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toDateTime)(new Date(value), isUTC);
  };
}
ToDateTimeFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateTimeFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToDayInMsFilter.js"
/*!**************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToDayInMsFilter.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");

function ToDayInMsFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toDayInMs';
  };
  this.apply = function (value) {
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    return value * ONE_DAY_MS;
  };
}
ToDayInMsFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDayInMsFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToHourInMsFilter.js"
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToHourInMsFilter.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");

function ToHourInMsFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toHourInMs';
  };
  this.apply = function (value) {
    const ONE_HOUR_MS = 60 * 60 * 1000;
    return value * ONE_HOUR_MS;
  };
}
ToHourInMsFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToHourInMsFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToMinuteInMsFilter.js"
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToMinuteInMsFilter.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");

function ToMinuteInMsFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toMinuteInMs';
  };
  this.apply = function (value) {
    const ONE_MINUTE_MS = 60 * 1000;
    return value * ONE_MINUTE_MS;
  };
}
ToMinuteInMsFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToMinuteInMsFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToMonthInMsFilter.js"
/*!****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToMonthInMsFilter.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");

function ToMonthInMsFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toMonthInMs';
  };
  this.apply = function (value) {
    const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
    return value * ONE_MONTH_MS;
  };
}
ToMonthInMsFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToMonthInMsFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToTimeFilter.js"
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToTimeFilter.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/calc.module/functions.js");


function ToTimeFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toTime';
  };
  this.apply = function (value, isUTC = true) {
    // Convert string 'true'/'false' to boolean
    if (typeof isUTC === 'string') {
      // Remove quotes and trim
      const cleaned = isUTC.trim().replace(/^['"]|['"]$/g, '');
      const lower = cleaned.toLowerCase();
      isUTC = lower !== 'false';
    } else {
      isUTC = Boolean(isUTC);
    }
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toTime)(new Date(value), isUTC);
  };
}
ToTimeFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToTimeFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToWeekInMsFilter.js"
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToWeekInMsFilter.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");

function ToWeekInMsFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toWeekInMs';
  };
  this.apply = function (value) {
    const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
    return value * ONE_WEEK_MS;
  };
}
ToWeekInMsFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToWeekInMsFilter);

/***/ },

/***/ "./frontend/main/calc.module/filters/ToYearInMsFilter.js"
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToYearInMsFilter.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./frontend/main/calc.module/filters/Filter.js");

function ToYearInMsFilter() {
  _Filter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getSlug = function () {
    return 'toYearInMs';
  };
  this.apply = function (value) {
    const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
    return value * ONE_YEAR_MS;
  };
}
ToYearInMsFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToYearInMsFilter);

/***/ },

/***/ "./frontend/main/calc.module/functions.js"
/*!************************************************!*\
  !*** ./frontend/main/calc.module/functions.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimestamp: () => (/* binding */ getTimestamp),
/* harmony export */   toDate: () => (/* binding */ toDate),
/* harmony export */   toDateTime: () => (/* binding */ toDateTime),
/* harmony export */   toTime: () => (/* binding */ toTime)
/* harmony export */ });
function zerofill(number, count) {
  number = '' + number;
  if (number.length >= count) {
    return number;
  }
  const zeros = new Array(count - number.length).fill(0);
  return zeros + number;
}

/**
 * @param date  {Date}
 * @param isUtc
 */
function toDate(date, isUtc = true) {
  const month = isUtc ? date.getUTCMonth() : date.getMonth();
  const day = isUtc ? date.getUTCDate() : date.getDate();
  const year = isUtc ? date.getUTCFullYear() : date.getFullYear();
  return [year, zerofill(month + 1, 2), zerofill(day, 2)].join('-');
}

/**
 * @param date  {Date}
 * @param isUtc
 */
function toTime(date, isUtc = true) {
  const hours = isUtc ? date.getUTCHours() : date.getHours();
  const mins = isUtc ? date.getUTCMinutes() : date.getMinutes();
  return [zerofill(hours, 2), zerofill(mins, 2)].join(':');
}
function toDateTime(date, isUtc = false) {
  return toDate(date, isUtc) + 'T' + toTime(date, isUtc);
}

/**
 * @param  timeOrDate {String|Number}
 * @param  localDateOnly {boolean} Parse YYYY-MM-DD as local midnight
 * @return {{time: number, type: string}}
 */
function getTimestamp(timeOrDate, localDateOnly = false) {
  if (!Number.isNaN(+timeOrDate)) {
    return {
      time: +timeOrDate,
      type: 'number'
    };
  }
  timeOrDate = timeOrDate.toString();
  const dateParts = timeOrDate.split('-');
  if (dateParts.length > 1) {
    const dateOnly = localDateOnly ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(timeOrDate) : null;
    const date = dateOnly ? new Date(+dateOnly[1], +dateOnly[2] - 1, +dateOnly[3]) : new Date(timeOrDate);
    return {
      time: date.getTime(),
      type: 'date'
    };
  }
  const timeParts = timeOrDate.split(':');
  const callbacks = [Date.prototype.setHours, Date.prototype.setMinutes, Date.prototype.setSeconds];
  const time = new Date();
  for (const index in timeParts) {
    if (!timeParts.hasOwnProperty(index) || !callbacks.hasOwnProperty(index)) {
      continue;
    }
    callbacks[index].call(time, timeParts[index]);
  }
  return {
    time: time.getTime(),
    type: 'time'
  };
}

/***/ },

/***/ "./frontend/main/calc.module/getFilters.js"
/*!*************************************************!*\
  !*** ./frontend/main/calc.module/getFilters.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _filters_LengthFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters/LengthFilter */ "./frontend/main/calc.module/filters/LengthFilter.js");
/* harmony import */ var _filters_FallBackFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/FallBackFilter */ "./frontend/main/calc.module/filters/FallBackFilter.js");
/* harmony import */ var _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/ToDateFilter */ "./frontend/main/calc.module/filters/ToDateFilter.js");
/* harmony import */ var _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/ToTimeFilter */ "./frontend/main/calc.module/filters/ToTimeFilter.js");
/* harmony import */ var _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/ToDateTimeFilter */ "./frontend/main/calc.module/filters/ToDateTimeFilter.js");
/* harmony import */ var _filters_AddYearFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/AddYearFilter */ "./frontend/main/calc.module/filters/AddYearFilter.js");
/* harmony import */ var _filters_AddMonthFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/AddMonthFilter */ "./frontend/main/calc.module/filters/AddMonthFilter.js");
/* harmony import */ var _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/AddDayFilter */ "./frontend/main/calc.module/filters/AddDayFilter.js");
/* harmony import */ var _filters_AddHourFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/AddHourFilter */ "./frontend/main/calc.module/filters/AddHourFilter.js");
/* harmony import */ var _filters_AddMinFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/AddMinFilter */ "./frontend/main/calc.module/filters/AddMinFilter.js");
/* harmony import */ var _filters_TimestampFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/TimestampFilter */ "./frontend/main/calc.module/filters/TimestampFilter.js");
/* harmony import */ var _filters_SetHourFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/SetHourFilter */ "./frontend/main/calc.module/filters/SetHourFilter.js");
/* harmony import */ var _filters_SetMinFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/SetMinFilter */ "./frontend/main/calc.module/filters/SetMinFilter.js");
/* harmony import */ var _filters_SetDayFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filters/SetDayFilter */ "./frontend/main/calc.module/filters/SetDayFilter.js");
/* harmony import */ var _filters_SetYearFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filters/SetYearFilter */ "./frontend/main/calc.module/filters/SetYearFilter.js");
/* harmony import */ var _filters_SetMonthFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filters/SetMonthFilter */ "./frontend/main/calc.module/filters/SetMonthFilter.js");
/* harmony import */ var _filters_SubtractHourFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filters/SubtractHourFilter */ "./frontend/main/calc.module/filters/SubtractHourFilter.js");
/* harmony import */ var _filters_SubtractDayFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filters/SubtractDayFilter */ "./frontend/main/calc.module/filters/SubtractDayFilter.js");
/* harmony import */ var _filters_SubtractMinFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./filters/SubtractMinFilter */ "./frontend/main/calc.module/filters/SubtractMinFilter.js");
/* harmony import */ var _filters_SubtractMonthFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./filters/SubtractMonthFilter */ "./frontend/main/calc.module/filters/SubtractMonthFilter.js");
/* harmony import */ var _filters_SubtractYearFilter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./filters/SubtractYearFilter */ "./frontend/main/calc.module/filters/SubtractYearFilter.js");
/* harmony import */ var _filters_ToDayInMsFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./filters/ToDayInMsFilter */ "./frontend/main/calc.module/filters/ToDayInMsFilter.js");
/* harmony import */ var _filters_ToMonthInMsFilter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./filters/ToMonthInMsFilter */ "./frontend/main/calc.module/filters/ToMonthInMsFilter.js");
/* harmony import */ var _filters_ToYearInMsFilter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./filters/ToYearInMsFilter */ "./frontend/main/calc.module/filters/ToYearInMsFilter.js");
/* harmony import */ var _filters_ToHourInMsFilter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filters/ToHourInMsFilter */ "./frontend/main/calc.module/filters/ToHourInMsFilter.js");
/* harmony import */ var _filters_ToMinuteInMsFilter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./filters/ToMinuteInMsFilter */ "./frontend/main/calc.module/filters/ToMinuteInMsFilter.js");
/* harmony import */ var _filters_ToWeekInMsFilter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./filters/ToWeekInMsFilter */ "./frontend/main/calc.module/filters/ToWeekInMsFilter.js");



























const {
  applyFilters
} = JetPlugins.hooks;

/**
 * @type {Array<Filter>}
 */
let filters = [];
const coreFilterItems = [_filters_SetYearFilter__WEBPACK_IMPORTED_MODULE_14__["default"], _filters_SetMonthFilter__WEBPACK_IMPORTED_MODULE_15__["default"], _filters_SetDayFilter__WEBPACK_IMPORTED_MODULE_13__["default"], _filters_SetHourFilter__WEBPACK_IMPORTED_MODULE_11__["default"], _filters_SetMinFilter__WEBPACK_IMPORTED_MODULE_12__["default"], _filters_SubtractYearFilter__WEBPACK_IMPORTED_MODULE_20__["default"], _filters_SubtractMonthFilter__WEBPACK_IMPORTED_MODULE_19__["default"], _filters_SubtractDayFilter__WEBPACK_IMPORTED_MODULE_17__["default"], _filters_SubtractHourFilter__WEBPACK_IMPORTED_MODULE_16__["default"], _filters_SubtractMinFilter__WEBPACK_IMPORTED_MODULE_18__["default"], _filters_AddYearFilter__WEBPACK_IMPORTED_MODULE_5__["default"], _filters_AddMonthFilter__WEBPACK_IMPORTED_MODULE_6__["default"], _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_7__["default"], _filters_AddHourFilter__WEBPACK_IMPORTED_MODULE_8__["default"], _filters_AddMinFilter__WEBPACK_IMPORTED_MODULE_9__["default"], _filters_LengthFilter__WEBPACK_IMPORTED_MODULE_0__["default"], _filters_FallBackFilter__WEBPACK_IMPORTED_MODULE_1__["default"], _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_2__["default"], _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_3__["default"], _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_4__["default"], _filters_TimestampFilter__WEBPACK_IMPORTED_MODULE_10__["default"], _filters_ToDayInMsFilter__WEBPACK_IMPORTED_MODULE_21__["default"], _filters_ToMonthInMsFilter__WEBPACK_IMPORTED_MODULE_22__["default"], _filters_ToYearInMsFilter__WEBPACK_IMPORTED_MODULE_23__["default"], _filters_ToHourInMsFilter__WEBPACK_IMPORTED_MODULE_24__["default"], _filters_ToMinuteInMsFilter__WEBPACK_IMPORTED_MODULE_25__["default"], _filters_ToWeekInMsFilter__WEBPACK_IMPORTED_MODULE_26__["default"]];
const getFilterItems = () => applyFilters('jet.fb.filters', [...coreFilterItems]);
let response = [];
function pushFilter(name, props = '') {
  if (!filters.length) {
    filters = getFilterItems();
  }
  let filter;
  for (let current of filters) {
    const FilterItem = current;
    current = new FilterItem();
    if (name === current.getSlug()) {
      current.isCoreFilter = coreFilterItems.includes(FilterItem);
      filter = current;
      break;
    }
  }
  if (!filter) {
    return;
  }
  props = props.split(',').map(item => item.trim());
  filter.setProps(props);
  response.push(filter);
}
function getFilters(filtersList) {
  if (null === filtersList || !filtersList?.length) {
    return null;
  }
  for (const filterName of filtersList) {
    const matches = filterName.match(/^(\w+)\(([^()]+)\)/);
    if (null === matches) {
      pushFilter(filterName);
      continue;
    }
    pushFilter(matches[1], matches[2]);
  }
  const tempResponse = [...response];
  response = [];
  return tempResponse;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFilters);

/***/ },

/***/ "./frontend/main/calc.module/main.js"
/*!*******************************************!*\
  !*** ./frontend/main/calc.module/main.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedFormula */ "./frontend/main/calc.module/CalculatedFormula.js");
/* harmony import */ var _const_namespace_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.namespace/BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _getFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFilters */ "./frontend/main/calc.module/getFilters.js");
/* harmony import */ var _applyFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyFilters */ "./frontend/main/calc.module/applyFilters.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ "./frontend/main/calc.module/functions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./frontend/main/calc.module/constants.js");
/* harmony import */ var _filters_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/Filter */ "./frontend/main/calc.module/filters/Filter.js");
var _window$JetFormBuilde, _window$JetFormBuilde2, _window$JetFormBuilde3;







window.JetFormBuilderAbstract = {
  ...((_window$JetFormBuilde = window.JetFormBuilderAbstract) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}),
  Filter: _filters_Filter__WEBPACK_IMPORTED_MODULE_6__["default"],
  CalculatedFormula: _CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__["default"],
  BaseInternalMacro: _const_namespace_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_1__["default"]
};
window.JetFormBuilderFunctions = {
  ...((_window$JetFormBuilde2 = window.JetFormBuilderFunctions) !== null && _window$JetFormBuilde2 !== void 0 ? _window$JetFormBuilde2 : {}),
  getFilters: _getFilters__WEBPACK_IMPORTED_MODULE_2__["default"],
  applyFilters: _applyFilters__WEBPACK_IMPORTED_MODULE_3__["default"],
  toDate: _functions__WEBPACK_IMPORTED_MODULE_4__.toDate,
  toDateTime: _functions__WEBPACK_IMPORTED_MODULE_4__.toDateTime,
  toTime: _functions__WEBPACK_IMPORTED_MODULE_4__.toTime,
  getTimestamp: _functions__WEBPACK_IMPORTED_MODULE_4__.getTimestamp
};
window.JetFormBuilderConst = {
  ...((_window$JetFormBuilde3 = window.JetFormBuilderConst) !== null && _window$JetFormBuilde3 !== void 0 ? _window$JetFormBuilde3 : {}),
  ..._constants__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ },

/***/ "./frontend/main/environment.js"
/*!**************************************!*\
  !*** ./frontend/main/environment.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

const userAgent = navigator.userAgent;

// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || (p => {
  return '[object SafariRemoteNotification]' === p.toString();
})(!window.safari || typeof safari !== 'undefined' && window.safari.pushNotification);
const environment = {
  safari: isSafari
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environment);

/***/ },

/***/ "./frontend/main/functions.js"
/*!************************************!*\
  !*** ./frontend/main/functions.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allRejected: () => (/* binding */ allRejected),
/* harmony export */   applyUserAgents: () => (/* binding */ applyUserAgents),
/* harmony export */   focusOnInvalidInput: () => (/* binding */ focusOnInvalidInput),
/* harmony export */   getLanguage: () => (/* binding */ getLanguage),
/* harmony export */   getOffsetTop: () => (/* binding */ getOffsetTop),
/* harmony export */   getScrollParent: () => (/* binding */ getScrollParent),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isUA: () => (/* binding */ isUA),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   resetInputHtmlAttrsRegistry: () => (/* binding */ resetInputHtmlAttrsRegistry),
/* harmony export */   setAttrs: () => (/* binding */ setAttrs),
/* harmony export */   toHTML: () => (/* binding */ toHTML)
/* harmony export */ });
/* harmony import */ var _attrs_BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attrs/BaseHtmlAttr */ "./frontend/main/attrs/BaseHtmlAttr.js");
/* harmony import */ var _attrs_MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attrs/MaxFilesHtmlAttr */ "./frontend/main/attrs/MaxFilesHtmlAttr.js");
/* harmony import */ var _attrs_MaxFileSizeHtmlAttr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrs/MaxFileSizeHtmlAttr */ "./frontend/main/attrs/MaxFileSizeHtmlAttr.js");
/* harmony import */ var _attrs_RemainingCalcAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attrs/RemainingCalcAttr */ "./frontend/main/attrs/RemainingCalcAttr.js");
/* harmony import */ var _attrs_FileExtensionHtmlAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attrs/FileExtensionHtmlAttr */ "./frontend/main/attrs/FileExtensionHtmlAttr.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environment */ "./frontend/main/environment.js");






const {
  applyFilters
} = JetPlugins.hooks;

/**
 * @param  callbacks {Function[]}
 * @return {Promise<*>}
 */
async function allRejected(callbacks) {
  const results = await Promise.allSettled(callbacks.map(current => new Promise(current)));
  if (window?.JetFormBuilderSettings?.devmode) {
    /* eslint-disable no-console */
    console.group('allRejected');
    console.info(...results);
    console.groupEnd();
    /* eslint-enable no-console */
  }
  const invalid = results.filter(error => 'rejected' === error.status);
  return invalid.map(({
    reason,
    value
  }) => {
    return reason?.length ? reason[0] : reason !== null && reason !== void 0 ? reason : value;
  });
}
function getLanguage() {
  const lang = window?.navigator?.languages?.length ? window.navigator.languages[0] : window?.navigator?.language;
  return lang !== null && lang !== void 0 ? lang : 'en-US';
}
const getInputHtmlAttr = () => applyFilters('jet.fb.input.html.attrs', ['min', 'max', 'minLength', 'maxLength', _attrs_MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_1__["default"], _attrs_MaxFileSizeHtmlAttr__WEBPACK_IMPORTED_MODULE_2__["default"], _attrs_RemainingCalcAttr__WEBPACK_IMPORTED_MODULE_3__["default"], _attrs_FileExtensionHtmlAttr__WEBPACK_IMPORTED_MODULE_4__["default"]]);

/**
 * @type {BaseHtmlAttr[]}
 */
let inputHtmlAttrs = [];
function getPreparedInputHtmlAttrs() {
  if (!inputHtmlAttrs.length) {
    inputHtmlAttrs = getInputHtmlAttr();
  }
  return [...inputHtmlAttrs];
}

/**
 * @param name {String}
 */
function getDefaultAttrByName(name) {
  const attr = new _attrs_BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"]();
  attr.attrName = name;
  return attr;
}

/**
 * @param input {InputData}
 */
function setAttrs(input) {
  for (const inputHtmlAttr of getPreparedInputHtmlAttrs()) {
    let current;
    if ('string' === typeof inputHtmlAttr) {
      current = getDefaultAttrByName(inputHtmlAttr);
    } else {
      current = new inputHtmlAttr();
    }
    if (!current.isSupported(input)) {
      continue;
    }
    input.attrs[current.attrName] = current;
    current.setInput(input);
    current.observe();
  }
}
function resetInputHtmlAttrsRegistry() {
  inputHtmlAttrs = [];
}
function toHTML(text) {
  const template = document.createElement('template');
  template.innerHTML = text.trim();
  return template.content;
}
function isEmpty(value) {
  if ('boolean' === typeof value) {
    return !value;
  }
  if (null === value || undefined === value) {
    return true;
  }
  if ('object' === typeof value && !Array.isArray(value)) {
    return !Object.keys(value)?.length;
  }
  if ('number' === typeof value) {
    return 0 === value;
  }
  return !value?.length;
}

/**
 * @param node {HTMLElement}
 */
function isVisible(node) {
  return node?.isConnected && null !== node?.offsetParent;
}

/**
 * @param node {Element}
 */
function getOffsetTop(node) {
  var _maybeWindow$scrollY;
  const rect = node.getBoundingClientRect();
  const maybeWindow = getScrollParent(node);
  return rect?.top + ((_maybeWindow$scrollY = maybeWindow?.scrollY) !== null && _maybeWindow$scrollY !== void 0 ? _maybeWindow$scrollY : 0);
}
const getNode = current => current.scrollHeight > current.clientHeight ? current : false;
function getScrollParent(node) {
  // jet-popup compatibility
  let container = node.closest('.jet-popup__container-inner');
  if (container) {
    return getNode(container);
  }

  // elementor-pro popup compatibility
  container = node.closest('.elementor-popup-modal .dialog-message');
  if (container) {
    return getNode(container);
  }
  return window;
}

/**
 * @param inputs {InputData[]}
 */
function focusOnInvalidInput(inputs) {
  for (const input of inputs) {
    if (input.reporting.validityState.current) {
      continue;
    }
    // eslint-disable-next-line no-unused-expressions
    !input.reporting.hasAutoScroll() && input.onFocus();
    break;
  }
}
function applyUserAgents() {
  for (const [name, isActive] of Object.entries(_environment__WEBPACK_IMPORTED_MODULE_5__["default"])) {
    if (!isActive) {
      continue;
    }
    document.body.classList.add(`jet--ua-${name}`);
  }
}
function isUA(browser) {
  return _environment__WEBPACK_IMPORTED_MODULE_5__["default"]?.[browser];
}


/***/ },

/***/ "./frontend/main/html.macro/CalculatedHtmlString.js"
/*!**********************************************************!*\
  !*** ./frontend/main/html.macro/CalculatedHtmlString.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calc.module/CalculatedFormula */ "./frontend/main/calc.module/CalculatedFormula.js");
/* harmony import */ var _calc_module_getFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calc.module/getFilters */ "./frontend/main/calc.module/getFilters.js");
/* harmony import */ var _calc_module_applyFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calc.module/applyFilters */ "./frontend/main/calc.module/applyFilters.js");
/* harmony import */ var _escapeHtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./escapeHtml */ "./frontend/main/html.macro/escapeHtml.js");
/* harmony import */ var _sanitizeHtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sanitizeHtml */ "./frontend/main/html.macro/sanitizeHtml.js");





const {
  applyFilters
} = JetPlugins.hooks;
const MACRO_FORMAT_OPTION_LABEL = 'option-label';
function getInputOptionLabel(node) {
  if (!node) {
    return '';
  }
  if (node.tagName === 'SELECT') {
    const selectedOptions = Array.from(node.selectedOptions || []);
    return selectedOptions.map(option => String(option.label || option.textContent || option.value || '').trim()).filter(Boolean).join(', ');
  }
  if ((node.type === 'checkbox' || node.type === 'radio') && !node.checked) {
    return '';
  }
  if (node.type === 'checkbox' || node.type === 'radio') {
    const label = node.closest('label');
    if (!label) {
      return '';
    }
    const textNode = label.querySelector('span');
    return String(textNode?.textContent || label.textContent || node.value || '').trim();
  }
  return '';
}
function getInputOptionLabels(input) {
  const nodes = Array.from(input.nodes || []);
  return nodes.map(getInputOptionLabel).filter(Boolean).join(', ');
}
function unwrapSafeHtml(value) {
  return value instanceof _escapeHtml__WEBPACK_IMPORTED_MODULE_3__.SafeHtml ? value.toString() : value;
}
function CalculatedHtmlString(root, {
  withPrefix = true,
  macroHost = false,
  macroFormat = '',
  ...options
} = {}) {
  _calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, root, options);
  if (withPrefix) {
    this.regexp = /JFB_FIELD::(.+)/gi;
  }
  this.macroHost = macroHost || false;
  this.macroFormat = macroFormat || '';
  this.relatedCallback = function (input) {
    const $fieldNode = jQuery(input.nodes[0]);
    const $macroHost = this.macroHost ? jQuery(this.macroHost) : false;
    let fieldValue = applyFilters('jet.fb.macro.field.value', false, $fieldNode, $macroHost, this.macroFormat);
    fieldValue = wp?.hooks?.applyFilters ? wp.hooks.applyFilters('jet.fb.macro.field.value', fieldValue, $fieldNode, $macroHost, this.macroFormat) : fieldValue;
    if (false !== fieldValue) {
      return new _escapeHtml__WEBPACK_IMPORTED_MODULE_3__.SafeHtml(fieldValue);
    }
    if (MACRO_FORMAT_OPTION_LABEL === this.macroFormat) {
      return getInputOptionLabels(input) || input.value.current;
    }
    return input.value.current;
  }.bind(this);
  this.onMissingPart = function () {};
}
CalculatedHtmlString.prototype = Object.create(_calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
CalculatedHtmlString.prototype.observeMacro = function (current) {
  if (null === this.formula) {
    this.formula = current;
  }
  const [name, ...filters] = current.split('|');
  const parsedName = name.match(/[\w\-:]+/g);
  if (!parsedName) {
    return false;
  }
  const [fieldName, ...params] = parsedName;
  const existNode = this.isFieldNodeExists(fieldName);
  if (undefined === existNode) {
    return false;
  }
  const relatedInput = fieldName !== 'this' ? this.root.getInput(fieldName) : this.input;
  if (!relatedInput && !fieldName.includes('::')) {
    return false;
  }
  const filtersList = (0,_calc_module_getFilters__WEBPACK_IMPORTED_MODULE_1__["default"])(filters);
  if (fieldName.includes('::')) {
    return _calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.observeMacro.call(this, current);
  }
  if (!this.related.includes(relatedInput.name)) {
    this.related.push(relatedInput.name);
    this.watchers.push(relatedInput.watch(() => this.setResult()));
  }
  if (!params?.length) {
    return () => {
      if ('repeater' === relatedInput.inputType && filtersList?.length) {
        // Preserve repeater macro side effects like inner input change binding.
        const relatedValue = unwrapSafeHtml(this.relatedCallback(relatedInput));
        relatedInput.reQueryValue?.();
        return (0,_calc_module_applyFilters__WEBPACK_IMPORTED_MODULE_2__["default"])(relatedValue, filtersList, {
          rawRepeaterValue: relatedInput.value.current
        });
      }
      const value = this.relatedCallback(relatedInput);
      if (value instanceof _escapeHtml__WEBPACK_IMPORTED_MODULE_3__.SafeHtml && !filtersList?.length) {
        return value;
      }

      // filters get the original value type (null, false, array...), only the
      // SafeHtml marker is dropped
      return (0,_calc_module_applyFilters__WEBPACK_IMPORTED_MODULE_2__["default"])(unwrapSafeHtml(value), filtersList);
    };
  }
  const [attrName] = params;
  if (!relatedInput.attrs.hasOwnProperty(attrName)) {
    return false;
  }
  const htmlAttr = relatedInput.attrs[attrName];
  if (!this.relatedAttrs.includes(relatedInput.name + attrName)) {
    this.relatedAttrs.push(relatedInput.name + attrName);
    this.watchers.push(htmlAttr.value.watch(() => this.setResult()));
  }
  return () => (0,_calc_module_applyFilters__WEBPACK_IMPORTED_MODULE_2__["default"])(htmlAttr.value.current, filtersList);
};
CalculatedHtmlString.prototype.mapParts = function (mapValue) {
  if (!this.parts.length) {
    return this.formula;
  }
  return this.parts.map(current => {
    if ('function' !== typeof current) {
      return current;
    }
    const result = current();
    if (null === result || undefined === result || '' === result) {
      return '';
    }
    return mapValue(result);
  }).join('');
};

/**
 * Plain string, for assigning to element properties (href, value, title...),
 * where nothing is parsed as HTML.
 */
CalculatedHtmlString.prototype.calculateString = function () {
  return this.mapParts(result => String(result));
};

/**
 * For `innerHTML` sinks. Field values are user-controlled (typed text,
 * query_var presets, ...), so they are sanitized; markup already built by
 * trusted macro handlers (SafeHtml) and the author's static text are kept.
 */
CalculatedHtmlString.prototype.calculateHtml = function () {
  return this.mapParts(result => result instanceof _escapeHtml__WEBPACK_IMPORTED_MODULE_3__.SafeHtml ? result.toString() : (0,_sanitizeHtml__WEBPACK_IMPORTED_MODULE_4__["default"])(result));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedHtmlString);

/***/ },

/***/ "./frontend/main/html.macro/escapeHtml.js"
/*!************************************************!*\
  !*** ./frontend/main/html.macro/escapeHtml.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtml: () => (/* binding */ SafeHtml),
/* harmony export */   escapeHtml: () => (/* binding */ escapeHtml)
/* harmony export */ });
const HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#039;'
};

/**
 * Marks a string that was already built from trusted markup with its
 * dynamic parts escaped (e.g. the repeater macro), so it must not be
 * escaped a second time.
 */
class SafeHtml {
  constructor(html) {
    this.html = String(html);
  }
  toString() {
    return this.html;
  }
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => HTML_ESCAPE_MAP[char]);
}


/***/ },

/***/ "./frontend/main/html.macro/iterateComments.js"
/*!*****************************************************!*\
  !*** ./frontend/main/html.macro/iterateComments.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function* iterateComments(rootNode, acceptCallback = () => NodeFilter.FILTER_ACCEPT) {
  // Fourth argument, which is actually obsolete according to the
  // DOM4 standard, is required in IE 11
  const iterator = document.createNodeIterator(rootNode, NodeFilter.SHOW_COMMENT, {
    acceptNode: acceptCallback
  });
  let curNode;

  // eslint-disable-next-line no-cond-assign
  while (curNode = iterator.nextNode()) {
    curNode.nodeValue = curNode.nodeValue.trim();
    yield curNode;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iterateComments);

/***/ },

/***/ "./frontend/main/html.macro/iterateJfbComments.js"
/*!********************************************************!*\
  !*** ./frontend/main/html.macro/iterateJfbComments.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iterateComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterateComments */ "./frontend/main/html.macro/iterateComments.js");

function* iterateJfbComments(rootNode) {
  const acceptCallback = node => {
    return !node.jfbObserved && node.textContent.includes('JFB_FIELD::');
  };
  yield* (0,_iterateComments__WEBPACK_IMPORTED_MODULE_0__["default"])(rootNode, acceptCallback);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iterateJfbComments);

/***/ },

/***/ "./frontend/main/html.macro/observeComment.js"
/*!****************************************************!*\
  !*** ./frontend/main/html.macro/observeComment.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedHtmlString */ "./frontend/main/html.macro/CalculatedHtmlString.js");

const {
  __,
  sprintf
} = wp.i18n;

/**
 * @param comment
 * @param root    {Observable}
 */
function observeComment(comment, root) {
  if (comment.jfbObserved) {
    return;
  }
  const formula = new _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__["default"](root);
  formula.observe(comment.textContent);
  if (!formula.parts?.length) {
    /* eslint-disable no-console */
    console.group(__('JetFormBuilder: You have invalid html macro', 'jet-form-builder'));
    console.error(sprintf(
    // translators: %s - comment text
    __('Content: %s', 'jet-form-builder'), comment.textContent));
    console.groupEnd();
    /* eslint-enable no-console */

    formula.clearWatchers();
    return;
  }
  const wrapper = document.createElement('span');
  const prevSibling = comment.parentNode.insertBefore(wrapper, comment);
  formula.setResult = () => {
    prevSibling.innerHTML = formula.calculateHtml();
  };
  formula.setResult();
  comment.jfbObserved = true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeComment);

/***/ },

/***/ "./frontend/main/html.macro/observeMacroAttr.js"
/*!******************************************************!*\
  !*** ./frontend/main/html.macro/observeMacroAttr.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedHtmlString */ "./frontend/main/html.macro/CalculatedHtmlString.js");


/**
 * @param node     {Node}
 * @param attrName {string}
 * @param root     {Observable}
 */
function observeMacroAttr(node, attrName, root) {
  var _node$attrName;
  const nodeValue = (_node$attrName = node[attrName]) !== null && _node$attrName !== void 0 ? _node$attrName : '';
  if ('string' !== typeof nodeValue) {
    return null;
  }
  const formula = new _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__["default"](root);
  formula.observe(nodeValue);
  formula.setResult = () => {
    node[attrName] = formula.calculateString();
  };
  formula.setResult();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeMacroAttr);

/***/ },

/***/ "./frontend/main/html.macro/observeNode.js"
/*!*************************************************!*\
  !*** ./frontend/main/html.macro/observeNode.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedHtmlString */ "./frontend/main/html.macro/CalculatedHtmlString.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @param node {Node}
 * @param root {Observable}
 */
function observeNode(node, root) {
  if (!node.__jfbMacroTemplate) {
    node.__jfbMacroTemplate = node.innerHTML;
  }
  const formula = new _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__["default"](root, {
    withPrefix: false,
    macroHost: node,
    macroFormat: node.dataset.jfbMacroFormat || ''
  });
  formula.observe(`%${node.dataset.jfbMacro}%`);
  if (!formula.parts?.length) {
    /* eslint-disable no-console */
    console.group((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('JetFormBuilder: You have invalid html macro', 'jet-form-builder'));
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    // translators: %s - macro
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content: %s', 'jet-form-builder'), node.dataset.jfbMacro));
    console.groupEnd();
    /* eslint-enable no-console */
    formula.clearWatchers();
    return;
  }
  node.dataset.jfbObserved = 1;
  formula.setResult = () => {
    let html = String(formula.calculateHtml());
    const hasTextarea = node.querySelector?.('textarea');
    if (hasTextarea) {
      html = html.replace(/\r\n|\r|\n/g, '<br>');
    }
    node.innerHTML = html;
  };
  formula.setResult();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeNode);

/***/ },

/***/ "./frontend/main/html.macro/queryByAttrValue.js"
/*!******************************************************!*\
  !*** ./frontend/main/html.macro/queryByAttrValue.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function queryByAttrValue(rootNode, value) {
  const {
    replaceAttrs = []
  } = window.JetFormBuilderSettings;
  const querySelector = [];
  for (let i = 0; i < replaceAttrs.length; i++) {
    querySelector.push(`[${replaceAttrs[i]}*="${value}"]`);
  }
  return rootNode.querySelectorAll(querySelector.join(', '));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryByAttrValue);

/***/ },

/***/ "./frontend/main/html.macro/sanitizeHtml.js"
/*!**************************************************!*\
  !*** ./frontend/main/html.macro/sanitizeHtml.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Allowlist HTML sanitizer for values substituted into `innerHTML` by
 * HTML macros. Unlike plain escaping it keeps harmless markup (WYSIWYG
 * field content, <br>, <b>, links, ...) rendered as before, but drops
 * scripts, event handlers and script URLs.
 *
 * Parsing goes through DOMParser, so nothing is executed or loaded while
 * the value is inspected.
 */
const ALLOWED_TAGS = new Set(['a', 'abbr', 'b', 'blockquote', 'br', 'caption', 'code', 'col', 'colgroup', 'dd', 'del', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'ins', 'li', 'mark', 'ol', 'p', 'pre', 'q', 's', 'small', 'span', 'strike', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u', 'ul']);

// Removed together with their content (never unwrapped).
const DROP_WITH_CONTENT = new Set(['script', 'style', 'iframe', 'frame', 'frameset', 'object', 'embed', 'applet', 'template', 'noscript', 'svg', 'math', 'form', 'input', 'button', 'textarea', 'select', 'option', 'link', 'meta', 'base', 'title', 'head', 'audio', 'video', 'source', 'track', 'canvas', 'dialog', 'xmp', 'plaintext']);
const ALLOWED_ATTRS = new Set(['href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel', 'width', 'height', 'colspan', 'rowspan', 'align', 'dir', 'lang']);
const URL_ATTRS = new Set(['href', 'src']);
function isSafeUrl(value) {
  // browsers ignore tabs/newlines/control chars inside the scheme
  // eslint-disable-next-line no-control-regex
  const url = String(value).replace(/[\u0000- \u007f-\u009f]/g, '');
  const match = url.match(/^([a-z][a-z0-9+.-]*):/i);
  if (!match) {
    return true; // relative url
  }
  return ['http', 'https', 'mailto', 'tel'].includes(match[1].toLowerCase());
}

// Only plain presentational properties survive; everything else (position,
// content, behavior, @-rules...) is dropped. Values cannot contain url() or any
// other function (see SAFE_STYLE_VALUE), so even `background` cannot load a resource.
const ALLOWED_STYLE_PROPS = new Set(['color', 'background-color', 'font-weight', 'font-style', 'font-size', 'font-family', 'text-align', 'text-decoration', 'text-indent', 'text-transform', 'line-height', 'letter-spacing', 'vertical-align', 'list-style-type', 'white-space', 'width', 'height', 'max-width', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'display', 'float', 'opacity', 'box-sizing', 'object-fit', 'word-break', 'overflow-wrap', 'list-style', 'min-width', 'min-height', 'max-height', 'background', 'border', 'border-top', 'border-right', 'border-bottom', 'border-left', 'border-color', 'border-style', 'border-width', 'border-radius']);

// Plain tokens only: no backslash escapes (they can spell `url(`), no comments,
// no quotes, and no function other than the colour ones.
const SAFE_STYLE_VALUE = /^[a-z0-9#%.,\s+-]*(?:(?:rgb|rgba|hsl|hsla)\([0-9.,%\s/+-]*\)[a-z0-9#%.,\s+-]*)*$/i;

/**
 * Rebuilds the style attribute from validated declarations instead of
 * pattern-matching a string the browser will interpret differently.
 */
function cleanStyle(value) {
  return String(value).split(';').map(declaration => {
    const index = declaration.indexOf(':');
    if (index < 1) {
      return '';
    }
    const prop = declaration.slice(0, index).trim().toLowerCase();
    const val = declaration.slice(index + 1).trim();
    return ALLOWED_STYLE_PROPS.has(prop) && val && SAFE_STYLE_VALUE.test(val) ? `${prop}: ${val}` : '';
  }).filter(Boolean).join('; ');
}
function cleanNode(node) {
  Array.from(node.childNodes).forEach(child => {
    if (1 !== child.nodeType) {
      // keep text, drop comments/processing instructions/etc.
      if (3 !== child.nodeType) {
        node.removeChild(child);
      }
      return;
    }
    const tag = child.localName;
    if (DROP_WITH_CONTENT.has(tag)) {
      node.removeChild(child);
      return;
    }
    cleanNode(child);
    if (!ALLOWED_TAGS.has(tag)) {
      // unknown element: keep its (already cleaned) content only
      while (child.firstChild) {
        node.insertBefore(child.firstChild, child);
      }
      node.removeChild(child);
      return;
    }
    Array.from(child.attributes).forEach(attr => {
      const name = attr.name.toLowerCase();
      if (!ALLOWED_ATTRS.has(name) || URL_ATTRS.has(name) && !isSafeUrl(attr.value)) {
        child.removeAttribute(attr.name);
        return;
      }
      if ('style' === name) {
        const style = cleanStyle(attr.value);
        if (style) {
          child.setAttribute('style', style);
        } else {
          child.removeAttribute('style');
        }
      }
    });

    // browsing-context names are case-insensitive and any named target keeps
    // window.opener, so every target gets noopener (replacing a supplied rel)
    if (child.hasAttribute('target')) {
      child.setAttribute('rel', 'noopener noreferrer');
    }
  });
}
function sanitizeHtml(value) {
  const html = String(value !== null && value !== void 0 ? value : '');

  // fast path: no markup and no entities, nothing to sanitize
  if (!/[<&]/.test(html)) {
    return html;
  }
  const doc = new DOMParser().parseFromString(`<!doctype html><body>${html}`, 'text/html');
  cleanNode(doc.body);
  return doc.body.innerHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sanitizeHtml);

/***/ },

/***/ "./frontend/main/init/initElementor.js"
/*!*********************************************!*\
  !*** ./frontend/main/init/initElementor.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initForm */ "./frontend/main/init/initForm.js");

function initElementor() {
  if (!window.elementorFrontend) {
    return;
  }
  const widgets = {
    'jet-engine-booking-form.default': _initForm__WEBPACK_IMPORTED_MODULE_0__["default"],
    'jet-form-builder-form.default': _initForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  jQuery.each(widgets, function (widget, callback) {
    window.elementorFrontend.hooks.addAction('frontend/element_ready/' + widget, callback);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initElementor);

/***/ },

/***/ "./frontend/main/init/initForm.js"
/*!****************************************!*\
  !*** ./frontend/main/init/initForm.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./frontend/main/Observable.js");
var _window$JetFormBuilde;

window.JetFormBuilder = (_window$JetFormBuilde = window.JetFormBuilder) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {};
function initForm($scope) {
  const form = $scope[0].querySelector('form.jet-form-builder');
  if (!form) {
    return;
  }
  const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__["default"]();
  window.JetFormBuilder[form.dataset.formId] = observable;
  jQuery(document).trigger('jet-form-builder/init', [$scope, observable]);
  observable.observe(form);
  jQuery(document).trigger('jet-form-builder/after-init', [$scope, observable]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initForm);

/***/ },

/***/ "./frontend/main/inputs/ChangeData.js"
/*!********************************************!*\
  !*** ./frontend/main/inputs/ChangeData.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputData */ "./frontend/main/inputs/InputData.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports */ "./frontend/main/supports.js");
/* harmony import */ var _reactive_ReactiveHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactive/ReactiveHook */ "./frontend/main/reactive/ReactiveHook.js");
/* harmony import */ var _signals_BaseSignal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signals/BaseSignal */ "./frontend/main/signals/BaseSignal.js");




function ChangeData() {
  _InputData__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node) {
    return (0,_supports__WEBPACK_IMPORTED_MODULE_1__.isChangeType)(node);
  };
  this.addListeners = function () {
    const [node] = this.nodes;
    node.addEventListener('change', event => {
      this.value.current = event.target.value;
    });

    // eslint-disable-next-line no-unused-expressions
    !_signals_BaseSignal__WEBPACK_IMPORTED_MODULE_3__.STRICT_MODE && jQuery(node).on('change', event => {
      // eslint-disable-next-line eqeqeq
      if (this.value.current == event.target.value) {
        return;
      }
      this.callable.lockTrigger();
      this.value.current = event.target.value;
      this.callable.unlockTrigger();
    });
    this.enterKey = new _reactive_ReactiveHook__WEBPACK_IMPORTED_MODULE_2__["default"]();
    node.addEventListener('keydown', this.handleEnterKey.bind(this));
  };
  this.onClear = function () {
    this.silenceSet('');
  };
}
ChangeData.prototype = Object.create(_InputData__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeData);

/***/ },

/***/ "./frontend/main/inputs/InputData.js"
/*!*******************************************!*\
  !*** ./frontend/main/inputs/InputData.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reactive_LoadingReactiveVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive/LoadingReactiveVar */ "./frontend/main/reactive/LoadingReactiveVar.js");
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");
/* harmony import */ var _reactive_ReactiveHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactive/ReactiveHook */ "./frontend/main/reactive/ReactiveHook.js");
/* harmony import */ var _signals_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signals/functions */ "./frontend/main/signals/functions.js");
/* harmony import */ var _reporting_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reporting/functions */ "./frontend/main/reporting/functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions */ "./frontend/main/inputs/functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions */ "./frontend/main/functions.js");
/* harmony import */ var _signals_BaseSignal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signals/BaseSignal */ "./frontend/main/signals/BaseSignal.js");








const {
  doAction
} = JetPlugins.hooks;

/**
 * @typedef {InputData}
 *
 * @property {string}                             rawName    Name of html field
 *                                                           including special
 *                                                           characters
 * @property {string}                             name       Prepared name of
 *                                                           the field
 * @property {HTMLInputElement|*[]}               nodes      Related nodes
 * @property {ReactiveVar}                        value      Reactive value
 * @property {ConditionChecker|null}              checker    Condition checker
 *                                                           used by
 *                                                           Conditional Block
 * @property {*}                                  calcValue  Calculated value
 *                                                           used by Calculated
 *                                                           Field
 * @property {AdvancedReporting|BrowserReporting} reporting  Reporting object
 *                                                           for validation and
 *                                                           showing errors
 * @property {Observable}                         root       Nearest observable
 *                                                           instance, could be
 *                                                           row of the
 *                                                           repeater
 * @property {PageState}                          page       Related page in
 *                                                           multistep form
 * @property {LoadingReactiveVar}                 loading    Reactive var to
 *                                                           manage visual
 *                                                           state of the field
 * @property {Object<ReactiveVar>}                attrs      Object with
 *                                                           reactive attributes
 * @property {boolean}                            isRequired Is required field
 *                                                           or not
 * @property {null|ReactiveHook}                  enterKey   Used for handling
 *                                                           inner hooks on
 *                                                           press Enter button
 * @property {null|string}                        inputType  Type identifier of
 *                                                           the field
 */
function InputData() {
  this.rawName = '';
  this.name = '';
  this.comment = false;
  /**
   * @type {HTMLElement[]|HTMLInputElement[]}
   */
  this.nodes = [];
  this.attrs = {};
  this.enterKey = null;
  this.inputType = null;
  this.offsetOnFocus = 75;

  /**
   * Path from top of form to current field name
   * Ex.: [ 'repeater_name', 0, 'text_field' ]
   * Where:
   *  - 'repeater_name': name of repeater, where current field is placed
   *  - 0: index of repeater row, where current field is placed
   *  - 'text_field': name of current field name
   * @type {Array<string | number>}
   */
  this.path = [];

  /**
   * @type {ReactiveVar}
   */
  this.value = this.getReactive();
  this.value.watch(this.onChange.bind(this));
  this.isRequired = false;
  this.calcValue = null;

  /**
   * @type {AdvancedReporting|BrowserReporting}
   */
  this.reporting = null;
  this.checker = null;

  /**
   * @type {Observable}
   */
  this.root = null;
  this.loading = new _reactive_LoadingReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"](false);
  this.loading.make();

  /**
   * In CheckboxData case we have just main sanitizer, without callable.
   * So we set .calcValue inside callable.runSignal()
   *
   * And to prevent resetting .calcValue by onChange
   * set this property to FALSE.
   * @type {boolean}
   */
  this.isResetCalcValue = true;
  this.validateTimer = false;
  this.stopValidation = false;
  this.abortController = null;
}
InputData.prototype.attrs = {};

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
InputData.prototype.isSupported = function (node) {
  return false;
};
InputData.prototype.addListeners = function () {
  const [node] = this.nodes;
  node.addEventListener('input', event => {
    this.value.current = event.target.value;
  });
  node.addEventListener('blur', () => {});
  node.addEventListener('input', () => {
    if (this.reporting && 'function' === typeof this.reporting.switchButtonsState) {
      this.reporting.switchButtonsState(true);
    }
    this.debouncedReport();
  });

  /**
   * @since 3.0.1
   */
  // eslint-disable-next-line no-unused-expressions
  !_signals_BaseSignal__WEBPACK_IMPORTED_MODULE_7__.STRICT_MODE && jQuery(node).on('change', event => {
    // eslint-disable-next-line eqeqeq
    if (this.value.current == event.target.value) {
      return;
    }
    this.callable.lockTrigger();
    this.value.current = event.target.value;
    this.callable.unlockTrigger();
  });
  if ('input' !== this.inputType) {
    return;
  }
  this.enterKey = new _reactive_ReactiveHook__WEBPACK_IMPORTED_MODULE_2__["default"]();
  node.addEventListener('keydown', this.handleEnterKey.bind(this));
};
InputData.prototype.makeReactive = function () {
  this.onObserve();
  this.addListeners();
  this.setValue();
  this.initNotifyValue();
  this.value.make();
  doAction('jet.fb.input.makeReactive', this);
};
InputData.prototype.onChange = function (prevValue) {
  if (this.isResetCalcValue) {
    this.calcValue = this.value.current;
  }

  // apply changes in DOM
  this?.callable?.run(prevValue);

  // show errors
  this.report();
};
InputData.prototype.report = function () {
  this.reporting.validateOnChange();
};
InputData.prototype.reportOnBlur = function (signal = null) {
  this.reporting.validateOnBlur(signal);
};
InputData.prototype.debouncedReport = function () {
  if (this.validateTimer) {
    this.stopValidation = true;
    clearTimeout(this.validateTimer);
    if (this.abortController) {
      this.abortController.abort();
    }
  }
  this.abortController = new AbortController();
  let signal = this.abortController.signal;
  this.validateTimer = setTimeout(() => {
    this.reportOnBlur(signal);
  }, 450);
};
/**
 * @param  callable
 * @return {(function(): *|*[])|*}
 */
InputData.prototype.watch = function (callable) {
  return this.value.watch(callable);
};
InputData.prototype.watchValidity = function (callable) {
  return this.reporting.validityState.watch(callable);
};
/**
 * @param  callable
 * @return {(function(): *|*[])|*}
 */
InputData.prototype.sanitize = function (callable) {
  return this.value.sanitize(callable);
};
/**
 * @param inputData {InputData}
 */
InputData.prototype.merge = function (inputData) {
  this.nodes = [...inputData.getNode()];
};
InputData.prototype.setValue = function () {
  let fieldValue;
  if (this.isArray()) {
    fieldValue = Array.from(this.nodes).map(({
      value
    }) => value);
  } else {
    fieldValue = this.nodes[0]?.value;
  }
  this.calcValue = fieldValue;
  this.value.current = fieldValue;
};
/**
 * @param node {HTMLElement|HTMLInputElement}
 */
InputData.prototype.setNode = function (node) {
  var _node$name;
  this.nodes = [node];
  this.rawName = (_node$name = node.name) !== null && _node$name !== void 0 ? _node$name : '';
  this.name = (0,_functions__WEBPACK_IMPORTED_MODULE_5__.getParsedName)(this.rawName);
  this.inputType = node.nodeName.toLowerCase();
};
/**
 * Runs once in lifecycle.
 */
InputData.prototype.onObserve = function () {
  const [node] = this.nodes;

  /**
   * Save link to this object
   * @type {InputData}
   */
  node.jfbSync = this;
  this.isRequired = this.checkIsRequired();
  this.callable = (0,_signals_functions__WEBPACK_IMPORTED_MODULE_3__.getSignal)(node, this);
  this.callable.setInput(this);
  this.reporting = (0,_reporting_functions__WEBPACK_IMPORTED_MODULE_4__.createReport)(this);
  this.loading.watch(() => this.onChangeLoading());
  this.path = [...this.getParentPath(), this.name];
  if (
  // is ajax
  !this.getSubmit().submitter.hasOwnProperty('status') || this.hasParent()) {
    return;
  }
  this.getSubmit().submitter.watchReset(() => this.onClear());
};
InputData.prototype.onChangeLoading = function () {
  this.getSubmit().lockState.current = this.loading.current;
  const [node] = this.nodes;
  const wrapper = node.closest('.jet-form-builder-row');
  wrapper.classList.toggle('is-loading', this.loading.current);
};
/**
 * @param observable {Observable}
 */
InputData.prototype.setRoot = function (observable) {
  this.root = observable;
};
/**
 * By default it runs only if repeater item was removed
 */
InputData.prototype.onRemove = function () {};
/**
 * @return {string}
 */
InputData.prototype.getName = function () {
  return this.name;
};
/**
 * @return {Array | string | boolean}
 */
InputData.prototype.getValue = function () {
  return this.value.current;
};
/**
 * @return {Array}
 */
InputData.prototype.getNode = function () {
  return this.nodes;
};
/**
 * @return {boolean}
 */
InputData.prototype.isArray = function () {
  return this.rawName.includes('[]');
};
/**
 * @param callable     {Function|mixed}
 * @param inputContext {InputData|Boolean}
 */
InputData.prototype.beforeSubmit = function (callable, inputContext = false) {
  this.getSubmit().submitter.promise(callable, inputContext);
};
/**
 * @return {FormSubmit}
 */
InputData.prototype.getSubmit = function () {
  return this.getRoot().form;
};
/**
 * @return {Observable}
 */
InputData.prototype.getRoot = function () {
  if (!this.root?.parent) {
    return this.root;
  }
  return this.root.parent.getRoot();
};
InputData.prototype.isVisible = function () {
  const wrapper = this.getWrapperNode();
  return (0,_functions__WEBPACK_IMPORTED_MODULE_6__.isVisible)(wrapper);
};
InputData.prototype.onClear = function () {
  this.silenceSet(null);
};
InputData.prototype.getReactive = function () {
  return new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__["default"]();
};
InputData.prototype.checkIsRequired = function () {
  var _node$required;
  const [node] = this.nodes;
  return (_node$required = node.required) !== null && _node$required !== void 0 ? _node$required : !!node.dataset.required?.length;
};
InputData.prototype.silenceSet = function (value) {
  /**
   * Related to issue
   * @see https://github.com/Crocoblock/issues-tracker/issues/1261#issuecomment-1293290291
   */
  const tempReport = this.report.bind(this);
  this.report = () => {};
  this.value.current = value;
  this.report = tempReport;
};
InputData.prototype.silenceNotify = function () {
  const tempReport = this.report.bind(this);
  this.report = () => {};
  this.value.notify();
  this.report = tempReport;
};

/**
 * @return {boolean}
 */
InputData.prototype.hasParent = function () {
  return !!this.root?.parent;
};

/**
 * For insert errors in advanced validation mode
 * @return {*}
 */
InputData.prototype.getWrapperNode = function () {
  return this.nodes[0].closest('.jet-form-builder-row');
};
InputData.prototype.handleEnterKey = function (event) {
  if (event.key !== 'Enter' ||
  // not enter key
  !this.enterKey ||
  // handling enter key is disabled
  event.shiftKey ||
  // the shift key was pressed
  event.isComposing // if the event is fired within a composition session
  ) {
    return;
  }
  event.preventDefault();
  this.onEnterKey();
};
InputData.prototype.onEnterKey = function () {
  const canSubmit = this.enterKey.applyFilters(true);
  if (canSubmit) {
    const canTriggerEnterSubmit = this.getSubmit().canTriggerEnterSubmit;
    if (true === canTriggerEnterSubmit) {
      this.getSubmit().submit();
    }
  }
};
InputData.prototype.initNotifyValue = function () {
  this.silenceNotify();
};
InputData.prototype.onFocus = function () {
  this.scrollTo();
  this.focusRaw();
};
InputData.prototype.focusRaw = function () {
  const [node] = this.nodes;

  /**
   * @see https://github.com/Crocoblock/issues-tracker/issues/2265#issuecomment-1447988718
   */
  if (['date', 'time', 'datetime-local'].includes(node.type)) {
    return;
  }
  node?.focus({
    preventScroll: true
  });
};
InputData.prototype.scrollTo = function () {
  const wrapper = this.getWrapperNode();
  window.scrollTo({
    top: (0,_functions__WEBPACK_IMPORTED_MODULE_6__.getOffsetTop)(wrapper) - this.offsetOnFocus,
    behavior: 'smooth'
  });
};

/**
 * @return {ReportingContext}
 */
InputData.prototype.getContext = function () {
  return this.root.getContext();
};

/**
 * @return {boolean|InputData[]}
 */
InputData.prototype.populateInner = function () {
  return false;
};

/**
 * Executed with default browser validation
 *
 * @return {boolean}
 */
InputData.prototype.hasAutoScroll = function () {
  return true;
};

/**
 * @return {HTMLInputElement|HTMLElement}
 */
InputData.prototype.getReportingNode = function () {
  return this.nodes[0];
};
InputData.prototype.getParentPath = function () {
  if (!this.root?.parent) {
    return [];
  }

  /**
   * @type {Array|Object}
   */
  const value = this.root.parent.value.current;
  if ('object' !== typeof value) {
    return [];
  }
  for (const [index, row] of Object.entries(value)) {
    if (row !== this.root) {
      continue;
    }
    return [...this.root.parent.getParentPath(), this.root.parent.name, index];
  }
  return [];
};

/**
 * Runs only once on window "load" event
 */
InputData.prototype.reQueryValue = function () {
  this.setValue();
  this.initNotifyValue();
};

/**
 * Runs on set Observable.value.current
 * @param value
 */
InputData.prototype.revertValue = function (value) {
  this.value.current = value;
};

/**
 * Recalculate the formula based on the current input data.
 * @since 3.4.5
 *
 * @see https://github.com/Crocoblock/issues-tracker/issues/11786
 */
InputData.prototype.reCalculateFormula = function () {
  this.setValue();
  this.initNotifyValue();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputData);

/***/ },

/***/ "./frontend/main/inputs/NoListenData.js"
/*!**********************************************!*\
  !*** ./frontend/main/inputs/NoListenData.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputData */ "./frontend/main/inputs/InputData.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports */ "./frontend/main/supports.js");


function NoListenData() {
  _InputData__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  /**
   * @type {Node}
   */
  this.comment = null;
  this.isSupported = function (node) {
    return (0,_supports__WEBPACK_IMPORTED_MODULE_1__.isHidden)(node);
  };
  this.addListeners = function () {
    // silence is golden
  };
  this.onObserve = function () {
    _InputData__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onObserve.call(this);
    if (!this.isArray()) {
      return;
    }
    this.setComment();
  };
  this.setComment = function () {
    this.comment = document.createComment(this.name);
    const [node] = this.nodes;
    node.parentElement.insertBefore(this.comment, node);
  };
  this.isVisible = function () {
    return false;
  };
  this.merge = function (input) {
    this.nodes.push(...input.getNode());
  };
}
NoListenData.prototype = Object.create(_InputData__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoListenData);

/***/ },

/***/ "./frontend/main/inputs/RangeData.js"
/*!*******************************************!*\
  !*** ./frontend/main/inputs/RangeData.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputData */ "./frontend/main/inputs/InputData.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports */ "./frontend/main/supports.js");


function RangeData() {
  _InputData__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);

  /**
   * @type {HTMLElement}
   */
  this.numberNode = null;
  this.isSupported = function (node) {
    return (0,_supports__WEBPACK_IMPORTED_MODULE_1__.isRange)(node);
  };
  this.setNode = function (node) {
    _InputData__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setNode.call(this, node);
    this.numberNode = node.parentElement.querySelector('.jet-form-builder__field-value-number');
  };
}
RangeData.prototype = Object.create(_InputData__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeData);

/***/ },

/***/ "./frontend/main/inputs/RenderStateData.js"
/*!*************************************************!*\
  !*** ./frontend/main/inputs/RenderStateData.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoListenData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoListenData */ "./frontend/main/inputs/NoListenData.js");
/* harmony import */ var _reactive_ReactiveSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactive/ReactiveSet */ "./frontend/main/reactive/ReactiveSet.js");


const {
  builtInStates
} = window.JetFormBuilderSettings;

/**
 * @property {ReactiveSet} value Reactive value
 *
 * @class
 */
function RenderStateData() {
  _NoListenData__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node) {
    return 'hidden' === node?.type && '_jfb_current_render_states[]' === node.name;
  };

  /**
   * @param stateName {String}
   */
  this.add = function (stateName) {
    this.value.add(stateName);
  };

  /**
   * @param stateName {String}
   */
  this.remove = function (stateName) {
    this.value.remove(stateName);
  };

  /**
   * @param stateName {String}
   * @param force     {null|Boolean}
   */
  this.toggle = function (stateName, force = null) {
    this.value.toggle(stateName, force);
  };
  this.isCustom = function (key) {
    return !builtInStates.includes(key);
  };
}
RenderStateData.prototype = Object.create(_NoListenData__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
RenderStateData.prototype.getReactive = function () {
  return new _reactive_ReactiveSet__WEBPACK_IMPORTED_MODULE_1__["default"]();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderStateData);

/***/ },

/***/ "./frontend/main/inputs/functions.js"
/*!*******************************************!*\
  !*** ./frontend/main/inputs/functions.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   getParsedName: () => (/* binding */ getParsedName),
/* harmony export */   populateInputs: () => (/* binding */ populateInputs),
/* harmony export */   resetInputRegistry: () => (/* binding */ resetInputRegistry)
/* harmony export */ });
/* harmony import */ var _ChangeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeData */ "./frontend/main/inputs/ChangeData.js");
/* harmony import */ var _RangeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeData */ "./frontend/main/inputs/RangeData.js");
/* harmony import */ var _NoListenData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoListenData */ "./frontend/main/inputs/NoListenData.js");
/* harmony import */ var _RenderStateData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderStateData */ "./frontend/main/inputs/RenderStateData.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions */ "./frontend/main/functions.js");





const {
  applyFilters,
  doAction
} = JetPlugins.hooks;

/**
 * @type {function(): *}
 */
const getDataTypes = () => applyFilters('jet.fb.inputs', [_RenderStateData__WEBPACK_IMPORTED_MODULE_3__["default"], _RangeData__WEBPACK_IMPORTED_MODULE_1__["default"], _ChangeData__WEBPACK_IMPORTED_MODULE_0__["default"], _NoListenData__WEBPACK_IMPORTED_MODULE_2__["default"]]);
let dataTypes = [];
function getPreparedDataTypes() {
  if (!dataTypes.length) {
    dataTypes = getDataTypes();
  }
  return [...dataTypes];
}

/**
 * @param  node
 * @param  observable {Observable}
 * @return {*}
 */
function createInput(node, observable) {
  for (const dataType of getPreparedDataTypes()) {
    const current = new dataType();
    if (!current.isSupported(node)) {
      continue;
    }
    current.setRoot(observable);
    current.setNode(node);
    (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setAttrs)(current);
    doAction('jet.fb.input.created', current);
    return current;
  }
  throw new Error('Something went wrong');
}
function resetInputRegistry() {
  dataTypes = [];
}
function getParsedName(name) {
  const regexps = [
  // multiple fields (checkbox[])
  /^([\w\-]+)\[\]$/,
  // fields inside repeater (rep_name[1][content_field])
  /^[\w\-]+\[\d+\]\[([\w\-]+)\]\[?\]?$/];
  for (const regExp of regexps) {
    if (!regExp.test(name)) {
      continue;
    }
    const matches = name.match(regExp);
    return matches[1];
  }
  return name;
}

/**
 * @param inputs {InputData[]}
 */
function populateInputs(inputs) {
  const list = [];
  for (const input of inputs) {
    const inner = input.populateInner();

    // eslint-disable-next-line no-unused-expressions
    inner?.length && list.push(...inner);
    list.push(input);
  }
  return list;
}


/***/ },

/***/ "./frontend/main/reactive/LoadingReactiveVar.js"
/*!******************************************************!*\
  !*** ./frontend/main/reactive/LoadingReactiveVar.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReactiveVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");
/**
 * @this {ReactiveVar}
 *
 * @class
 */

function LoadingReactiveVar() {
  _ReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, false);
  this.start = function () {
    this.current = true;
  };
  this.end = function () {
    this.current = false;
  };
  this.toggle = function () {
    this.current = !this.current;
  };
}
LoadingReactiveVar.prototype = Object.create(_ReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingReactiveVar);

/***/ },

/***/ "./frontend/main/reactive/ReactiveHook.js"
/*!************************************************!*\
  !*** ./frontend/main/reactive/ReactiveHook.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ReactiveHook() {
  this.handlers = [];
}
ReactiveHook.prototype = {
  addFilter(callable) {
    this.handlers.push(callable);
    const index = this.handlers.length - 1;
    return () => this.handlers.splice(index, 1);
  },
  applyFilters(...params) {
    let current = params[0];
    const newParams = params.slice(1);
    for (const handler of this.handlers) {
      current = handler(current, ...newParams);
    }
    return current;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactiveHook);

/***/ },

/***/ "./frontend/main/reactive/ReactiveSet.js"
/*!***********************************************!*\
  !*** ./frontend/main/reactive/ReactiveSet.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReactiveVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");

function ReactiveSet(value) {
  _ReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, value);
}
ReactiveSet.prototype = Object.create(_ReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
ReactiveSet.prototype.add = function (stateName) {
  var _this$current;
  // add unique value
  this.current = [...new Set([...((_this$current = this.current) !== null && _this$current !== void 0 ? _this$current : []), stateName])];
};
ReactiveSet.prototype.remove = function (stateName) {
  this.current = this.current.filter(item => item !== stateName);
};
ReactiveSet.prototype.toggle = function (stateName, force = null) {
  if (null !== force) {
    // eslint-disable-next-line no-unused-expressions
    force ? this.add(stateName) : this.remove(stateName);
    return;
  }
  if (this.current.includes(stateName)) {
    this.remove(stateName);
  } else {
    this.add(stateName);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactiveSet);

/***/ },

/***/ "./frontend/main/reactive/ReactiveVar.js"
/*!***********************************************!*\
  !*** ./frontend/main/reactive/ReactiveVar.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./frontend/main/functions.js");

function ReactiveVar(value = null) {
  this.current = value;
  this.signals = [];
  this.sanitizers = [];
  this.isDebug = false;
  this.isSilence = false;
  this.isMaked = false;
}
ReactiveVar.prototype = {
  watchOnce(callable) {
    if ('function' !== typeof callable) {
      return;
    }
    const clearWatcher = this.watch(() => {
      clearWatcher();
      callable();
    });
  },
  watch(callable) {
    if ('function' !== typeof callable) {
      return false;
    }
    if (this.signals.some(({
      signal
    }) => signal === callable)) {
      return true;
    }
    this.signals.push({
      signal: callable,
      trace: new Error().stack
    });
    const index = this.signals.length - 1;
    return () => this.signals.splice(index, 1);
  },
  sanitize(callable) {
    if ('function' !== typeof callable) {
      return false;
    }
    if (-1 !== this.sanitizers.indexOf(callable)) {
      return true;
    }
    this.sanitizers.push(callable);
    const index = this.sanitizers.length - 1;
    return () => this.sanitizers.splice(index, 1);
  },
  make() {
    if (this.isMaked) {
      return;
    }
    this.isMaked = true;
    let current = this.current;
    let prevValue = null;
    const self = this;
    Object.defineProperty(this, 'current', {
      get() {
        return current;
      },
      set(newVal) {
        if (current === newVal) {
          return;
        }
        prevValue = current;
        if (self.isDebug) {
          /* eslint-disable no-console, no-debugger */
          console.group('ReactiveVar has changed');
          console.log('current:', current);
          console.log('newVal:', newVal);
          console.groupEnd();
          debugger;
          /* eslint-enable no-console, no-debugger */
        }
        current = self.applySanitizers(newVal);
        if (self.isSilence) {
          return;
        }
        self.notify(prevValue);
      }
    });
  },
  notify(prevValue = null) {
    this.signals.forEach(({
      signal
    }) => signal.call(this, prevValue));
  },
  applySanitizers(value) {
    for (const sanitizer of this.sanitizers) {
      value = sanitizer.call(this, value);
    }
    return value;
  },
  setIfEmpty(newValue) {
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this.current)) {
      return;
    }
    this.current = newValue;
  },
  debug() {
    this.isDebug = !this.isDebug;
  },
  silence() {
    this.isSilence = !this.isSilence;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactiveVar);

/***/ },

/***/ "./frontend/main/reporting/BrowserReporting.js"
/*!*****************************************************!*\
  !*** ./frontend/main/reporting/BrowserReporting.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportingInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportingInterface */ "./frontend/main/reporting/ReportingInterface.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./frontend/main/reporting/functions.js");



function BrowserReporting() {
  _ReportingInterface__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function () {
    return true;
  };
  this.reportRaw = function () {};
  this.reportFirst = function () {
    const node = this.getNode();
    node.reportValidity();
  };
  this.setRestrictions = function () {
    const [node] = this.input.nodes;
    (0,_functions__WEBPACK_IMPORTED_MODULE_2__.createDefaultRestrictions)(this, node);
  };
  this.clearReport = function () {
    // browser automatically hide tooltip messages
  };
  this.validateOnChange = function () {
    this.getErrors().then(errors => {
      this.validityState.current = !Boolean(errors.length);
      if (!errors.length) {
        this.clearReport();
      }
    }).catch(() => {});
  };
  this.getErrorsRaw = async function (promises) {
    const errors = await (0,_functions__WEBPACK_IMPORTED_MODULE_1__.allRejected)(promises);
    this.valuePrev = this.input.getValue();
    return errors;
  };
  this.validateOnChangeState = function () {
    return this.validate();
  };
  this.hasAutoScroll = function () {
    return this.input.hasAutoScroll();
  };

  /**
   * @return {HTMLInputElement|HTMLElement}
   */
  this.getNode = function () {
    return this.input.getReportingNode();
  };
}
BrowserReporting.prototype = Object.create(_ReportingInterface__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowserReporting);

/***/ },

/***/ "./frontend/main/reporting/ReportingContext.js"
/*!*****************************************************!*\
  !*** ./frontend/main/reporting/ReportingContext.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ReportingContext(root) {
  /**
   * @type {Observable}
   */
  this.root = root;
  this.reportedFirst = false;
  this.silence = true;
}
ReportingContext.prototype = {
  reset(props = {}) {
    var _props$silence;
    this.reportedFirst = false;
    this.setSilence((_props$silence = props?.silence) !== null && _props$silence !== void 0 ? _props$silence : true);
  },
  reportFirst() {
    this.reportedFirst = true;
  },
  setSilence(value) {
    this.silence = !!value;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportingContext);

/***/ },

/***/ "./frontend/main/reporting/ReportingInterface.js"
/*!*******************************************************!*\
  !*** ./frontend/main/reporting/ReportingInterface.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RestrictionError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestrictionError */ "./frontend/main/reporting/RestrictionError.js");
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");
/**
 * Validation logic: on change input value we run
 * @see ReportingInterface.validateOnChange
 *
 * In that function we clear stored errors
 * @see ReportingInterface.errors
 * check all restrictions again and save errors
 * to the same property.
 *
 * When user tries to submit form we run
 * @see ReportingInterface.validate
 * If there was stored errors - it will return them.
 * Otherwise we check all and save errors.
 *
 * In the case when we run the validation through the
 * @see ReportingInterface.isValid
 * We "block the form" through the "test" property.
 * This property is reactive, and when it changes,
 * the state of the button for submitting the form
 * and the navigation buttons between pages changes.
 */


function ReportingInterface() {
  /**
   * @type {InputData}
   */
  this.input = null;
  this.isRequired = false;
  /**
   * @type {Array | null}
   */
  this.errors = null;
  this.restrictions = [];
  this.valuePrev = null;
  this.validityState = null;
  this.promisesCount = 0;
}
ReportingInterface.prototype = {
  /**
   * @type {Restriction[]}
   */
  restrictions: [],
  valuePrev: null,
  /**
   * @type {ReactiveVar}
   */
  validityState: null,
  promisesCount: 0,
  /**
   * Runs on changing value in the field
   * @see InputData.onChange
   */
  validateOnChange() {},
  validateOnBlur() {},
  /**
   * Runs on trying to submit form
   * @see Observable.inputsAreValid
   *
   * Runs on changing value, if this field inside page
   * @see InputData.setPage
   * @see PageState.updateState
   *
   * @return {Promise<boolean>}
   */
  async validate(signal = null) {
    const errors = await this.getErrors(signal);
    this.validityState.current = !Boolean(errors.length);
    if (!errors.length) {
      this.clearReport();
      return true;
    }

    // eslint-disable-next-line no-unused-expressions
    !this.input.root.getContext().silence && this.report(errors);
    throw new _RestrictionError__WEBPACK_IMPORTED_MODULE_0__["default"](errors[0].name);
  },
  /**
   * @param  promises {Function[]}
   * @return {Promise<Array | null>}
   */
  // eslint-disable-next-line no-unused-vars
  async getErrorsRaw(promises) {
    throw new Error('getError must return a Promise');
  },
  /**
   * @return {Promise<Array | *[] | null>}
   */
  async getErrors(signal = null) {
    if (this.input.loading.current || this.input?.callable?.lock?.current || !this.input.isVisible()) {
      return [];
    }
    const promises = this.getPromises(signal);
    if (!this.hasChangedValue() && this.promisesCount === promises.length && !this.input.stopValidation &&
    // Refresh all selects because their state might have changed
    this.input.inputType !== 'hr-select-level') {
      var _this$errors;
      return (_this$errors = this.errors) !== null && _this$errors !== void 0 ? _this$errors : [];
    }
    this.promisesCount = promises.length;
    this.errors = [];
    if (!promises.length) {
      return this.errors;
    }
    this.errors = await this.getErrorsRaw(promises, signal);
    return this.errors;
  },
  report(validationErrors) {
    if (this.input.getContext().reportedFirst) {
      this.reportRaw(validationErrors);
      return;
    }
    this.input.getContext().reportFirst();
    this.reportFirst(validationErrors);
  },
  /**
   * @param validationErrors {Restriction[]}
   */
  // eslint-disable-next-line no-unused-vars
  reportRaw(validationErrors) {
    throw new Error('report is empty');
  },
  reportFirst(validationErrors) {
    this.report(validationErrors);
  },
  clearReport() {
    throw new Error('clearReport is empty');
  },
  getPromises(signal = null) {
    const promises = [];
    for (const restriction of this.restrictions) {
      if (!this.canProcessRestriction(restriction)) {
        continue;
      }
      this.beforeProcessRestriction(restriction);
      promises.push((resolve, reject) => {
        restriction.validatePromise(signal).then(() => resolve(restriction)).catch(error => reject([restriction, error]));
      });
    }
    return promises;
  },
  /**
   * @param  restriction {Restriction}
   * @return {boolean}
   */
  // eslint-disable-next-line no-unused-vars
  canProcessRestriction(restriction) {
    return true;
  },
  /**
   * @param restriction {Restriction}
   */
  // eslint-disable-next-line no-unused-vars
  beforeProcessRestriction(restriction) {},
  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * @param  node  {Element}
   * @param  input {InputData}
   *
   * @return {boolean}
   */
  // eslint-disable-next-line no-unused-vars
  isSupported(node, input) {
    throw new Error('isSupported is empty');
  },
  /**
   * @param input {InputData}
   */
  setInput(input) {
    this.validityState = new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.validityState.make();
    this.input = input;
    this.setRestrictions();
    this.filterRestrictions();
  },
  setRestrictions() {},
  /**
   * @return {HTMLInputElement|HTMLElement}
   */
  getNode() {
    return this.input.nodes[0];
  },
  hasChangedValue() {
    return this.valuePrev !== this.input.getValue();
  },
  /**
   * @return {Promise<*>}
   */
  checkValidity() {
    const isSilence = this.input.getContext().silence;
    if (null === this.validityState.current) {
      return this.validateOnChangeState();
    }
    if (this.validityState.current) {
      return Promise.resolve();
    }
    if (isSilence) {
      return Promise.reject();
    }

    // eslint-disable-next-line no-unused-expressions
    !isSilence && this.report(this.errors || []);
    return Promise.reject();
  },
  /**
   * @since 3.0.1
   *
   * @return {boolean}
   */
  hasAutoScroll() {
    return false;
  },
  /**
   * With the help of filters that add new restrictions,
   * you can overwrite a particular restriction
   * if the "type" property is defined in it
   */
  filterRestrictions() {
    const map = {};
    for (let [index, restriction] of Object.entries(this.restrictions)) {
      index = restriction.getType() ? restriction.getType() : index;
      map[index] = restriction;
    }
    this.restrictions = Object.values(map);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportingInterface);

/***/ },

/***/ "./frontend/main/reporting/RestrictionError.js"
/*!*****************************************************!*\
  !*** ./frontend/main/reporting/RestrictionError.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function RestrictionError(message) {
  Error.call(this, message);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, RestrictionError);
  } else {
    this.stack = new Error().stack;
  }
}
RestrictionError.prototype = Object.create(Error.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestrictionError);

/***/ },

/***/ "./frontend/main/reporting/functions.js"
/*!**********************************************!*\
  !*** ./frontend/main/reporting/functions.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultRestrictions: () => (/* binding */ createDefaultRestrictions),
/* harmony export */   createReport: () => (/* binding */ createReport),
/* harmony export */   getValidateCallbacks: () => (/* binding */ getValidateCallbacks),
/* harmony export */   resetReportingRegistry: () => (/* binding */ resetReportingRegistry),
/* harmony export */   validateInputs: () => (/* binding */ validateInputs),
/* harmony export */   validateInputsAll: () => (/* binding */ validateInputsAll)
/* harmony export */ });
/* harmony import */ var _BrowserReporting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserReporting */ "./frontend/main/reporting/BrowserReporting.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/functions.js");
/* harmony import */ var _inputs_InputData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputs/InputData */ "./frontend/main/inputs/InputData.js");
/* harmony import */ var _restrictions_NativeRestriction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restrictions/NativeRestriction */ "./frontend/main/reporting/restrictions/NativeRestriction.js");
/* harmony import */ var _restrictions_RequiredRestriction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restrictions/RequiredRestriction */ "./frontend/main/reporting/restrictions/RequiredRestriction.js");
/**
 * @param node {HTMLElement}
 */





const {
  applyFilters
} = JetPlugins.hooks;
const getReportTypes = () => applyFilters('jet.fb.reporting', [_BrowserReporting__WEBPACK_IMPORTED_MODULE_0__["default"]]);
let reportTypes = [];
const getDefaultRestrictions = () => applyFilters('jet.fb.restrictions.default', [_restrictions_NativeRestriction__WEBPACK_IMPORTED_MODULE_3__["default"], _restrictions_RequiredRestriction__WEBPACK_IMPORTED_MODULE_4__["default"]]);
let defaultRestrictions = [];
function getPreparedReportTypes() {
  if (!reportTypes.length) {
    reportTypes = getReportTypes();
  }
  return [...reportTypes];
}
function getPreparedDefaultRestrictions() {
  if (!defaultRestrictions.length) {
    defaultRestrictions = getDefaultRestrictions();
  }
  return [...defaultRestrictions];
}

/**
 * @param  reporting {BrowserReporting}
 * @param  node
 * @return {*}
 */
function createDefaultRestrictions(reporting, node) {
  for (const restriction of getPreparedDefaultRestrictions()) {
    const current = new restriction();
    if (!current.isSupported(node, reporting)) {
      continue;
    }
    reporting.restrictions.push(current);
  }
  reporting.restrictions.forEach(item => item.setReporting(reporting));
}

/**
 * @param  input {InputData}
 * @return {AdvancedReporting|BrowserReporting}
 */
function createReport(input) {
  for (const reportType of getPreparedReportTypes()) {
    const current = new reportType();
    if (!current.isSupported(input.nodes[0], input)) {
      continue;
    }
    current.setInput(input);
    return current;
  }
  throw new Error('Something went wrong');
}
function resetReportingRegistry() {
  reportTypes = [];
  defaultRestrictions = [];
}

/**
 * @param  inputs  {InputData[]}
 * @param  silence {Boolean}
 *
 * @return {Function[]}
 */
function getValidateCallbacks(inputs, silence = false) {
  const callbacks = [];
  inputs?.[0]?.getContext()?.reset({
    silence
  });
  for (const input of inputs) {
    if (!(input instanceof _inputs_InputData__WEBPACK_IMPORTED_MODULE_2__["default"])) {
      throw new Error('Input is not instance of InputData');
    }
    callbacks.push((resolve, reject) => {
      input.reporting.validateOnChangeState().then(resolve).catch(reject);
    });
  }
  return callbacks;
}

/**
 * @param  inputs  {InputData[]}
 * @param  silence {Boolean}
 * @return {Promise<unknown[]>}
 */
function validateInputs(inputs, silence = false) {
  return Promise.all(getValidateCallbacks(inputs, silence).map(current => new Promise(current)));
}

/**
 * @param inputs  {InputData[]}
 * @param silence {Boolean}
 */
function validateInputsAll(inputs, silence = false) {
  return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.allRejected)(getValidateCallbacks(inputs, silence));
}


/***/ },

/***/ "./frontend/main/reporting/restrictions/NativeRestriction.js"
/*!*******************************************************************!*\
  !*** ./frontend/main/reporting/restrictions/NativeRestriction.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Restriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Restriction */ "./frontend/main/reporting/restrictions/Restriction.js");

function NativeRestriction() {
  _Restriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node) {
    return !!node.checkValidity;
  };
  this.validate = function () {
    const {
      nodes
    } = this.reporting.input;
    for (const node of nodes) {
      if (node.checkValidity()) {
        return true;
      }
    }
    return false;
  };
}
NativeRestriction.prototype = Object.create(_Restriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NativeRestriction);

/***/ },

/***/ "./frontend/main/reporting/restrictions/RequiredRestriction.js"
/*!*********************************************************************!*\
  !*** ./frontend/main/reporting/restrictions/RequiredRestriction.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Restriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Restriction */ "./frontend/main/reporting/restrictions/Restriction.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions */ "./frontend/main/functions.js");


function RequiredRestriction() {
  _Restriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.type = 'required';
}
RequiredRestriction.prototype = Object.create(_Restriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
RequiredRestriction.prototype.isSupported = function (node, reporting) {
  return reporting.input.isRequired;
};
RequiredRestriction.prototype.validate = function () {
  const {
    current
  } = this.reporting.input.value;
  return !(0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(current);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequiredRestriction);

/***/ },

/***/ "./frontend/main/reporting/restrictions/Restriction.js"
/*!*************************************************************!*\
  !*** ./frontend/main/reporting/restrictions/Restriction.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Restriction() {
  /**
   * @type {ReportingInterface}
   */
  this.reporting = null;
  /**
   * You can override this property
   * if you want to make this Restriction overridable
   *
   * @since 3.1.0
   *
   * @type {string}
   */
  this.type = '';
}
Restriction.prototype = {
  /**
   * @param node      {HTMLElement|HTMLInputElement}
   * @param reporting {ReportingInterface}
   */
  // eslint-disable-next-line no-unused-vars
  isSupported(node, reporting) {
    return true;
  },
  /**
   * @since 3.1.0
   * @return {string}
   */
  getType() {
    return this.type;
  },
  /**
   * @param reporting {ReportingInterface}
   */
  setReporting(reporting) {
    this.reporting = reporting;
  },
  getValue() {
    return this.reporting.input.value.current;
  },
  // eslint-disable-next-line jsdoc/require-returns-check
  /**
   * @return {boolean}
   */
  validate() {
    throw new Error('validate is wrong');
  },
  /**
   * @return {Promise<*>}
   */
  async validatePromise() {
    let validationResult;
    try {
      validationResult = await this.validate();
    } catch (error) {
      var _error$message;
      return Promise.reject((_error$message = error?.message) !== null && _error$message !== void 0 ? _error$message : error);
    }
    return validationResult ? Promise.resolve() : Promise.reject('validate is wrong');
  },
  onReady() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Restriction);

/***/ },

/***/ "./frontend/main/signals/BaseSignal.js"
/*!*********************************************!*\
  !*** ./frontend/main/signals/BaseSignal.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STRICT_MODE: () => (/* binding */ STRICT_MODE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");

const {
  strict_mode = false
} = window?.JetFormBuilderSettings;
const STRICT_MODE = Boolean(strict_mode);
function BaseSignal() {
  this.input = null;
  this.lock = new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.lock.make();
  this.triggerjQuery = !STRICT_MODE;
}
BaseSignal.prototype = {
  /**
   * @type {InputData}
   */
  input: null,
  /**
   * @type {ReactiveVar}
   */
  lock: null,
  /**
   * @param  node      {HTMLElement}
   * @param  inputData {InputData}
   * @return {boolean}
   */
  // eslint-disable-next-line no-unused-vars
  isSupported(node, inputData) {
    return false;
  },
  setInput(input) {
    this.input = input;
  },
  run(prevValue) {
    if (!this.lock.current) {
      this.runSignal(prevValue);
      this.unlockTrigger();
      return;
    }
    if (!this.lock.signals.length) {
      this.lock.watchOnce(() => this.runSignal(prevValue));
    }
  },
  triggerJQuery(node) {
    if (!this.triggerjQuery) {
      return;
    }
    jQuery(node).trigger('change');
  },
  /**
   * @param prevValue
   * @protected
   */
  // eslint-disable-next-line no-unused-vars
  runSignal(prevValue) {
    // your code
  },
  /**
   * @since 3.0.1
   */
  lockTrigger() {
    this.triggerjQuery = false;
  },
  /**
   * @since 3.0.1
   */
  unlockTrigger() {
    if (STRICT_MODE) {
      return;
    }
    this.triggerjQuery = true;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseSignal);

/***/ },

/***/ "./frontend/main/signals/SignalHiddenArray.js"
/*!****************************************************!*\
  !*** ./frontend/main/signals/SignalHiddenArray.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseSignal */ "./frontend/main/signals/BaseSignal.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports */ "./frontend/main/supports.js");


function SignalHiddenArray() {
  _BaseSignal__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
}
SignalHiddenArray.prototype = Object.create(_BaseSignal__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
SignalHiddenArray.prototype.isSupported = function (node, inputData) {
  return (0,_supports__WEBPACK_IMPORTED_MODULE_1__.isHidden)(node) && inputData.isArray();
};
SignalHiddenArray.prototype.runSignal = function () {
  const {
    current
  } = this.input.value;
  if (!current?.length) {
    for (const node of this.input.nodes) {
      node.remove();
    }
    this.input.nodes.splice(0, this.input.nodes.length);
    return;
  }
  const saveNodes = [];
  for (const value of current) {
    const hasNodeWithSameValue = this.input.nodes.some((node, index) => {
      if (node.value !== value) {
        return false;
      }
      saveNodes.push(index);
      return true;
    });
    if (hasNodeWithSameValue) {
      continue;
    }
    const newElement = document.createElement('input');
    newElement.type = 'hidden';
    newElement.value = value;
    newElement.name = this.input.rawName;
    this.input.nodes.push(newElement);
    saveNodes.push(this.input.nodes.length - 1);
    this.input.comment.parentElement.insertBefore(newElement, this.input.comment.nextElementSibling);
  }
  this.input.nodes = this.input.nodes.filter((node, index) => {
    if (saveNodes.includes(index)) {
      return true;
    }
    node.remove();
    return false;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalHiddenArray);

/***/ },

/***/ "./frontend/main/signals/SignalRange.js"
/*!**********************************************!*\
  !*** ./frontend/main/signals/SignalRange.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseSignal */ "./frontend/main/signals/BaseSignal.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports */ "./frontend/main/supports.js");



/**
 * @property {RangeData} input Related input
 */
function SignalRange() {
  _BaseSignal__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node) {
    return (0,_supports__WEBPACK_IMPORTED_MODULE_1__.isRange)(node);
  };
  this.runSignal = function () {
    const [node] = this.input.nodes;
    node.value = this.input.value.current;
    this.input.numberNode.textContent = node.value;
    this.triggerJQuery(node);
  };
}
SignalRange.prototype = Object.create(_BaseSignal__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalRange);

/***/ },

/***/ "./frontend/main/signals/SignalRenderState.js"
/*!****************************************************!*\
  !*** ./frontend/main/signals/SignalRenderState.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignalHiddenArray */ "./frontend/main/signals/SignalHiddenArray.js");


/**
 * @property {RenderStateData} input Related input
 * @class
 */
function SignalRenderState() {
  _SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node) {
    return '_jfb_current_render_states[]' === node.name;
  };
  this.runSignal = function (prevValue) {
    _SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.runSignal.call(this, prevValue);
    const url = new URL(window.location);
    const formId = this.input.getSubmit().getFormId();
    const current = this.input.value.current || [];
    const param = `jfb[${formId}][state]`;
    const states = [];
    for (const stateSlug of current) {
      if (!this.input.isCustom(stateSlug)) {
        continue;
      }
      states.push(stateSlug);
    }
    if (!states.length) {
      if (!url.searchParams.has(param)) {
        return;
      }
      url.searchParams.delete(param);
      window.history.pushState({}, '', url.toString());
      return;
    }
    const paramValue = states.join(',');
    if (url.searchParams.get(param) === paramValue) {
      return;
    }
    url.searchParams.set(param, paramValue);
    window.history.pushState({}, '', url.toString());
  };
}
SignalRenderState.prototype = Object.create(_SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalRenderState);

/***/ },

/***/ "./frontend/main/signals/functions.js"
/*!********************************************!*\
  !*** ./frontend/main/signals/functions.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSignal: () => (/* binding */ getSignal),
/* harmony export */   resetSignalRegistry: () => (/* binding */ resetSignalRegistry)
/* harmony export */ });
/* harmony import */ var _SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignalHiddenArray */ "./frontend/main/signals/SignalHiddenArray.js");
/* harmony import */ var _SignalRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignalRange */ "./frontend/main/signals/SignalRange.js");
/* harmony import */ var _SignalRenderState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignalRenderState */ "./frontend/main/signals/SignalRenderState.js");



const {
  applyFilters
} = JetPlugins.hooks;
const getSignalTypes = () => applyFilters('jet.fb.signals', [_SignalRange__WEBPACK_IMPORTED_MODULE_1__["default"], _SignalRenderState__WEBPACK_IMPORTED_MODULE_2__["default"], _SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__["default"]]);

/**
 * @type {(BaseSignal)[]}
 */
let signalTypes = [];
function getPreparedSignalTypes() {
  if (!signalTypes.length) {
    signalTypes = getSignalTypes();
  }
  return [...signalTypes];
}

/**
 * @param  node  {HTMLElement}
 * @param  input {InputData}
 * @return {BaseSignal}
 */
function getSignal(node, input) {
  for (const signalType of getPreparedSignalTypes()) {
    const current = new signalType();
    if (!current.isSupported(node, input)) {
      continue;
    }
    return current;
  }
  return null;
}
function resetSignalRegistry() {
  signalTypes = [];
}


/***/ },

/***/ "./frontend/main/submit/AjaxSubmit.js"
/*!********************************************!*\
  !*** ./frontend/main/submit/AjaxSubmit.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseSubmit */ "./frontend/main/submit/BaseSubmit.js");
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./frontend/main/submit/functions.js");




// eslint-disable-next-line max-lines-per-function
function AjaxSubmit(form) {
  _BaseSubmit__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, form);
  this.status = new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.status.make();
  this.submit = function () {
    const $form = jQuery(this.form.observable.rootNode);
    const {
      applyFilters
    } = JetPlugins.hooks;
    Promise.all(applyFilters('jet.fb.submit.ajax.promises', this.getPromises(), $form)).then(callbacks => this.runSubmit(callbacks)).catch(() => this.form.toggle());
  };
  this.runSubmit = function (callbacks) {
    const {
      rootNode
    } = this.form.observable;
    const formData = new FormData(rootNode);
    formData.append('_jet_engine_booking_form_id', this.form.getFormId());

    // disable watchers
    this.status.silence();
    this.status.current = null;

    // enable watchers
    this.status.silence();
    jQuery.ajax({
      url: JetFormBuilderSettings.ajaxurl,
      type: 'POST',
      dataType: 'json',
      data: formData,
      cache: false,
      contentType: false,
      processData: false
    }).done(response => {
      this.onSuccess(response);
      const $form = jQuery(rootNode);
      callbacks.forEach(cb => {
        if ('function' === typeof cb) {
          cb.call($form, response);
        }
      });
    }).fail(this.onFail.bind(this));
  };
  this.onSuccess = function (response) {
    this.form.toggle();
    const {
      rootNode
    } = this.form.observable;
    this.lastResponse = response;
    const $form = jQuery(rootNode);
    const csrfToken = response?._jfb_csrf_token;
    if (csrfToken) {
      this.refreshCsrfToken(csrfToken);
    }
    switch (response.status) {
      case 'success':
        jQuery(document).trigger('jet-form-builder/ajax/on-success', [response, $form]);
        break;
      default:
        jQuery(document).trigger('jet-form-builder/ajax/processing-error', [response, $form]);
        break;
    }
    /**
     * Run status watchers
     */
    this.status.current = response.status;
    if (response.redirect) {
      if (response.open_in_new_tab) {
        window.open(response.redirect, '_blank');
      } else {
        window.location = response.redirect;
      }
    } else if (response.reload) {
      window.location.reload();
    }
    this.insertMessage(response.message);
  };
  this.onFail = function (jqXHR, textStatus, errorThrown) {
    this.form.toggle();
    this.status.current = false;
    const {
      rootNode
    } = this.form.observable;
    const $form = jQuery(rootNode);
    jQuery(document).trigger('jet-form-builder/ajax/on-fail', [jqXHR, textStatus, errorThrown, $form]);

    // eslint-disable-next-line no-console
    console.error(jqXHR.responseText, errorThrown);
  };
  this.insertMessage = function (message) {
    const {
      rootNode
    } = this.form.observable;
    const node = document.createElement('div');
    node.classList.add('jet-form-builder-messages-wrap');
    node.innerHTML = message;
    rootNode.appendChild(node);
  };
  this.refreshCsrfToken = function (csrfToken) {
    const formId = this.form.getFormId();
    const forms = document.querySelectorAll('form.jet-form-builder[data-form-id]');
    for (const formNode of forms) {
      if (+formNode.dataset.formId !== formId) {
        continue;
      }
      const csrfFields = formNode.querySelectorAll('input[name="_jfb_csrf_token"]');
      for (const field of csrfFields) {
        field.value = csrfToken;
      }
    }
  };
}
AjaxSubmit.prototype = Object.create(_BaseSubmit__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/**
 * @type {ReactiveVar}
 */
AjaxSubmit.prototype.status = null;
AjaxSubmit.prototype.watchReset = function (callable) {
  const {
    rootNode
  } = this.form.observable;
  if (!rootNode.dataset?.clear) {
    return;
  }
  this.watchSuccess(callable);
};
AjaxSubmit.prototype.watchSuccess = function (callable) {
  const status = this.status;
  status.watch(() => {
    if ((0,_functions__WEBPACK_IMPORTED_MODULE_2__.isSuccessStatus)(status.current)) {
      callable();
    }
  });
};
AjaxSubmit.prototype.watchFail = function (callable) {
  const status = this.status;
  status.watch(() => {
    if (!(0,_functions__WEBPACK_IMPORTED_MODULE_2__.isSuccessStatus)(status.current)) {
      callable();
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AjaxSubmit);

/***/ },

/***/ "./frontend/main/submit/BaseSubmit.js"
/*!********************************************!*\
  !*** ./frontend/main/submit/BaseSubmit.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param form {FormSubmit}
 * @class
 */
function BaseSubmit(form) {
  this.form = form;
  this.lastResponse = {};
  this.promises = [];
}
BaseSubmit.prototype.submit = function () {
  throw new Error('You need to replace this callback');
};
BaseSubmit.prototype.getPromises = function () {
  return this.promises.map(({
    callable
  }) => new Promise(callable));
};
/**
 * @param callable     {Function}
 * @param inputContext {InputData|Boolean}
 */
BaseSubmit.prototype.promise = function (callable, inputContext = false) {
  const pathStr = inputContext ? inputContext.path.join('.') : '';
  this.promises = this.promises.filter(({
    idPath
  }) => !idPath || idPath !== pathStr);
  this.promises.push({
    callable,
    idPath: inputContext ? inputContext.path.join('.') : ''
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseSubmit);

/***/ },

/***/ "./frontend/main/submit/FormSubmit.js"
/*!********************************************!*\
  !*** ./frontend/main/submit/FormSubmit.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reactive_LoadingReactiveVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive/LoadingReactiveVar */ "./frontend/main/reactive/LoadingReactiveVar.js");
/* harmony import */ var _AjaxSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjaxSubmit */ "./frontend/main/submit/AjaxSubmit.js");
/* harmony import */ var _ReloadSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReloadSubmit */ "./frontend/main/submit/ReloadSubmit.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions */ "./frontend/main/functions.js");
/* harmony import */ var _inputs_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputs/functions */ "./frontend/main/inputs/functions.js");






/**
 * @param observable {Observable}
 * @class
 */
// eslint-disable-next-line max-lines-per-function
function FormSubmit(observable) {
  this.observable = observable;
  this.lockState = new _reactive_LoadingReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"](false);
  this.lockState.make();
  this.autoFocus = window.JetFormBuilderSettings?.auto_focus;
  this.canSubmitForm = true;
  this.canTriggerEnterSubmit = true;
  /**
   * @param event {Event}
   */
  this.onSubmit = function (event) {
    event.preventDefault();
    this.submit();
  };
  this.submit = function () {
    if (true === this.canSubmitForm) {
      this.canSubmitForm = false;
      this.canTriggerEnterSubmit = false;
      this.observable.inputsAreValid().then(() => {
        this.clearErrors();
        this.toggle();
        this.submitter.submit();
      }).catch(() => {
        // eslint-disable-next-line no-unused-expressions
        this.autoFocus && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.focusOnInvalidInput)((0,_inputs_functions__WEBPACK_IMPORTED_MODULE_4__.populateInputs)(this.observable.getInputs()));
      }).finally(() => {
        this.canTriggerEnterSubmit = true;
        this.canSubmitForm = true;
      });
    }
  };
  this.clearErrors = function () {
    const messages = this.observable.rootNode.querySelectorAll('.jet-form-builder-messages-wrap');
    for (const message of messages) {
      message.remove();
    }
  };
  this.toggle = function () {
    this.lockState.toggle();
    this.toggleLoading();
  };

  /**
   * @private
   */
  this.handleButtons = function () {
    /**
     * @type {NodeListOf<Element>}
     */
    const buttons = this.observable.rootNode.querySelectorAll('.jet-form-builder__submit');
    this.lockState.watch(() => {
      for (const button of buttons) {
        button.disabled = this.lockState.current;
      }
      if (false === this.lockState.current) {
        this.canSubmitForm = true;
      }
    });
  };
  this.toggleLoading = function () {
    this.observable.rootNode.classList.toggle('is-loading');
  };
  this.createSubmitter = function () {
    const {
      classList
    } = this.observable.rootNode;
    const isAjax = classList.contains('submit-type-ajax');
    return isAjax ? new _AjaxSubmit__WEBPACK_IMPORTED_MODULE_1__["default"](this) : new _ReloadSubmit__WEBPACK_IMPORTED_MODULE_2__["default"](this);
  };
  this.getFormId = function () {
    const {
      rootNode
    } = this.observable;
    return +rootNode.dataset.formId;
  };
  this.onEndSubmit = function (callable) {
    // eslint-disable-next-line no-unused-expressions
    this.submitter.hasOwnProperty('status') ? this.submitter.status.watch(callable) : this.submitter.onFailSubmit(callable);
  };
  this.observable.rootNode.addEventListener('submit', event => this.onSubmit(event));

  /**
   * @type {AjaxSubmit|ReloadSubmit}
   */
  this.submitter = this.createSubmitter();
  this.handleButtons();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSubmit);

/***/ },

/***/ "./frontend/main/submit/ReloadSubmit.js"
/*!**********************************************!*\
  !*** ./frontend/main/submit/ReloadSubmit.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseSubmit */ "./frontend/main/submit/BaseSubmit.js");

function ReloadSubmit(form) {
  _BaseSubmit__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, form);
  this.failPromises = [];
  this.submit = function () {
    const {
      rootNode
    } = this.form.observable;
    const {
      applyFilters
    } = JetPlugins.hooks;
    Promise.all(applyFilters('jet.fb.submit.reload.promises', this.getPromises(), {
      target: rootNode
    })).then(() => rootNode.submit()).catch(() => {
      this.failPromises.forEach(current => current());
      this.form.toggle();
    });
  };
  this.onFailSubmit = function (callable) {
    if ('function' !== typeof callable) {
      return;
    }
    this.failPromises.push(callable);
  };
}
ReloadSubmit.prototype = Object.create(_BaseSubmit__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReloadSubmit);

/***/ },

/***/ "./frontend/main/submit/functions.js"
/*!*******************************************!*\
  !*** ./frontend/main/submit/functions.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSuccessStatus: () => (/* binding */ isSuccessStatus)
/* harmony export */ });
function isSuccessStatus(status) {
  return 'success' === status || status?.includes('dsuccess|');
}


/***/ },

/***/ "./frontend/main/supports.js"
/*!***********************************!*\
  !*** ./frontend/main/supports.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isChangeType: () => (/* binding */ isChangeType),
/* harmony export */   isHidden: () => (/* binding */ isHidden),
/* harmony export */   isRange: () => (/* binding */ isRange)
/* harmony export */ });
/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isChangeType(node) {
  return ['select-one', 'range'].includes(node.type);
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isHidden(node) {
  return 'hidden' === node.type;
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isRange(node) {
  return 'range' === node.type;
}


/***/ },

/***/ "./frontend/main/main.pcss"
/*!*********************************!*\
  !*** ./frontend/main/main.pcss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/*!*******************************!*\
  !*** ./frontend/main/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.pcss */ "./frontend/main/main.pcss");
/* harmony import */ var _init_initElementor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init/initElementor */ "./frontend/main/init/initElementor.js");
/* harmony import */ var _signals_BaseSignal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signals/BaseSignal */ "./frontend/main/signals/BaseSignal.js");
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");
/* harmony import */ var _reactive_ReactiveHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactive/ReactiveHook */ "./frontend/main/reactive/ReactiveHook.js");
/* harmony import */ var _reactive_ReactiveSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactive/ReactiveSet */ "./frontend/main/reactive/ReactiveSet.js");
/* harmony import */ var _reactive_LoadingReactiveVar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactive/LoadingReactiveVar */ "./frontend/main/reactive/LoadingReactiveVar.js");
/* harmony import */ var _inputs_InputData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputs/InputData */ "./frontend/main/inputs/InputData.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Observable */ "./frontend/main/Observable.js");
/* harmony import */ var _reporting_ReportingInterface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reporting/ReportingInterface */ "./frontend/main/reporting/ReportingInterface.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions */ "./frontend/main/functions.js");
/* harmony import */ var _reporting_restrictions_Restriction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reporting/restrictions/Restriction */ "./frontend/main/reporting/restrictions/Restriction.js");
/* harmony import */ var _reporting_RestrictionError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reporting/RestrictionError */ "./frontend/main/reporting/RestrictionError.js");
/* harmony import */ var _reporting_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reporting/functions */ "./frontend/main/reporting/functions.js");
/* harmony import */ var _calc_module_main__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calc.module/main */ "./frontend/main/calc.module/main.js");
/* harmony import */ var _inputs_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inputs/functions */ "./frontend/main/inputs/functions.js");
/* harmony import */ var _init_initForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./init/initForm */ "./frontend/main/init/initForm.js");
/* harmony import */ var _attrs_BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./attrs/BaseHtmlAttr */ "./frontend/main/attrs/BaseHtmlAttr.js");
/* harmony import */ var _html_macro_queryByAttrValue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./html.macro/queryByAttrValue */ "./frontend/main/html.macro/queryByAttrValue.js");
/* harmony import */ var _html_macro_iterateComments__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./html.macro/iterateComments */ "./frontend/main/html.macro/iterateComments.js");
/* harmony import */ var _html_macro_iterateJfbComments__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./html.macro/iterateJfbComments */ "./frontend/main/html.macro/iterateJfbComments.js");
/* harmony import */ var _html_macro_observeComment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./html.macro/observeComment */ "./frontend/main/html.macro/observeComment.js");
/* harmony import */ var _html_macro_observeMacroAttr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./html.macro/observeMacroAttr */ "./frontend/main/html.macro/observeMacroAttr.js");
/* harmony import */ var _reporting_restrictions_RequiredRestriction__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reporting/restrictions/RequiredRestriction */ "./frontend/main/reporting/restrictions/RequiredRestriction.js");
/* harmony import */ var _signals_functions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./signals/functions */ "./frontend/main/signals/functions.js");
var _window$JetFormBuilde, _window$JetFormBuilde2;
// styles

























function resetRuntimeRegistries() {
  (0,_functions__WEBPACK_IMPORTED_MODULE_10__.resetInputHtmlAttrsRegistry)();
  (0,_inputs_functions__WEBPACK_IMPORTED_MODULE_15__.resetInputRegistry)();
  (0,_signals_functions__WEBPACK_IMPORTED_MODULE_24__.resetSignalRegistry)();
  (0,_reporting_functions__WEBPACK_IMPORTED_MODULE_13__.resetReportingRegistry)();
}
window.JetFormBuilderAbstract = {
  ...((_window$JetFormBuilde = window.JetFormBuilderAbstract) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}),
  InputData: _inputs_InputData__WEBPACK_IMPORTED_MODULE_7__["default"],
  BaseSignal: _signals_BaseSignal__WEBPACK_IMPORTED_MODULE_2__["default"],
  ReactiveVar: _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_3__["default"],
  ReactiveHook: _reactive_ReactiveHook__WEBPACK_IMPORTED_MODULE_4__["default"],
  LoadingReactiveVar: _reactive_LoadingReactiveVar__WEBPACK_IMPORTED_MODULE_6__["default"],
  Observable: _Observable__WEBPACK_IMPORTED_MODULE_8__["default"],
  ReportingInterface: _reporting_ReportingInterface__WEBPACK_IMPORTED_MODULE_9__["default"],
  Restriction: _reporting_restrictions_Restriction__WEBPACK_IMPORTED_MODULE_11__["default"],
  RestrictionError: _reporting_RestrictionError__WEBPACK_IMPORTED_MODULE_12__["default"],
  BaseHtmlAttr: _attrs_BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_17__["default"],
  ReactiveSet: _reactive_ReactiveSet__WEBPACK_IMPORTED_MODULE_5__["default"],
  RequiredRestriction: _reporting_restrictions_RequiredRestriction__WEBPACK_IMPORTED_MODULE_23__["default"]
};
window.JetFormBuilderFunctions = {
  ...((_window$JetFormBuilde2 = window.JetFormBuilderFunctions) !== null && _window$JetFormBuilde2 !== void 0 ? _window$JetFormBuilde2 : {}),
  allRejected: _functions__WEBPACK_IMPORTED_MODULE_10__.allRejected,
  getLanguage: _functions__WEBPACK_IMPORTED_MODULE_10__.getLanguage,
  toHTML: _functions__WEBPACK_IMPORTED_MODULE_10__.toHTML,
  validateInputs: _reporting_functions__WEBPACK_IMPORTED_MODULE_13__.validateInputs,
  validateInputsAll: _reporting_functions__WEBPACK_IMPORTED_MODULE_13__.validateInputsAll,
  getParsedName: _inputs_functions__WEBPACK_IMPORTED_MODULE_15__.getParsedName,
  isEmpty: _functions__WEBPACK_IMPORTED_MODULE_10__.isEmpty,
  getValidateCallbacks: _reporting_functions__WEBPACK_IMPORTED_MODULE_13__.getValidateCallbacks,
  getOffsetTop: _functions__WEBPACK_IMPORTED_MODULE_10__.getOffsetTop,
  focusOnInvalidInput: _functions__WEBPACK_IMPORTED_MODULE_10__.focusOnInvalidInput,
  populateInputs: _inputs_functions__WEBPACK_IMPORTED_MODULE_15__.populateInputs,
  isVisible: _functions__WEBPACK_IMPORTED_MODULE_10__.isVisible,
  queryByAttrValue: _html_macro_queryByAttrValue__WEBPACK_IMPORTED_MODULE_18__["default"],
  iterateComments: _html_macro_iterateComments__WEBPACK_IMPORTED_MODULE_19__["default"],
  observeMacroAttr: _html_macro_observeMacroAttr__WEBPACK_IMPORTED_MODULE_22__["default"],
  observeComment: _html_macro_observeComment__WEBPACK_IMPORTED_MODULE_21__["default"],
  iterateJfbComments: _html_macro_iterateJfbComments__WEBPACK_IMPORTED_MODULE_20__["default"],
  getScrollParent: _functions__WEBPACK_IMPORTED_MODULE_10__.getScrollParent,
  isUA: _functions__WEBPACK_IMPORTED_MODULE_10__.isUA,
  resetRuntimeRegistries
};
document.addEventListener('DOMContentLoaded', _functions__WEBPACK_IMPORTED_MODULE_10__.applyUserAgents);
jQuery(() => JetPlugins.init());
JetPlugins.bulkBlocksInit([{
  block: 'jet-forms.form-block',
  callback: _init_initForm__WEBPACK_IMPORTED_MODULE_16__["default"],
  condition: () => 'loading' !== document.readyState
}]);
jQuery(window).on('elementor/frontend/init', _init_initElementor__WEBPACK_IMPORTED_MODULE_1__["default"]);
addEventListener('load', () => {
  /**
   * @type {Observable[]}
   */
  const forms = Object.values(window.JetFormBuilder);
  for (const root of forms) {
    if (!(root instanceof _Observable__WEBPACK_IMPORTED_MODULE_8__["default"])) {
      continue;
    }
    root.reQueryValues();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFNQTtBQUtBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNocUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBOztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBOEJBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENBOztBQUVBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQTtBQUNBO0FBT0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9LQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBS0E7QUFFQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BpQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBS0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9CYXNlSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9GaWxlRXh0ZW5zaW9uSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvTWF4RmlsZXNIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL1JlbWFpbmluZ0NhbGNBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hcHBseUZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hdHRhY2hDb25zdE5hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9CYXNlSW50ZXJuYWxNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9DdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9EYXlfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0hvdXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL01pbl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvTW9udGhfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL1llYXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGREYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0ZhbGxCYWNrRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0xlbmd0aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF0ZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXlJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub0hvdXJJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub01pbnV0ZUluTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvTW9udGhJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub1RpbWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvV2Vla0luTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvWWVhckluTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9nZXRGaWx0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvbWFpbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9DYWxjdWxhdGVkSHRtbFN0cmluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vZXNjYXBlSHRtbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vaXRlcmF0ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlTm9kZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vc2FuaXRpemVIdG1sLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5pdC9pbml0RWxlbWVudG9yLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5pdC9pbml0Rm9ybS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9DaGFuZ2VEYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL0lucHV0RGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9Ob0xpc3RlbkRhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvUmFuZ2VEYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL1JlbmRlclN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZVNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL1JlYWN0aXZlVmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL0Jyb3dzZXJSZXBvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVwb3J0aW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9SZXBvcnRpbmdJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVzdHJpY3Rpb25FcnJvci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05hdGl2ZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXF1aXJlZFJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvQmFzZVNpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsSGlkZGVuQXJyYXkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbFJhbmdlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxSZW5kZXJTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0FqYXhTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvQmFzZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9Gb3JtU3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L1JlbG9hZFN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdXBwb3J0cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL21haW4ucGNzcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSW5wdXQsIHBvcHVsYXRlSW5wdXRzIH0gZnJvbSAnLi9pbnB1dHMvZnVuY3Rpb25zJztcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4vc3VibWl0L0Zvcm1TdWJtaXQnO1xuaW1wb3J0IHF1ZXJ5QnlBdHRyVmFsdWUgZnJvbSAnLi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUnO1xuaW1wb3J0IGl0ZXJhdGVKZmJDb21tZW50cyBmcm9tICcuL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzJztcbmltcG9ydCBvYnNlcnZlQ29tbWVudCBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZUNvbW1lbnQnO1xuaW1wb3J0IG9ic2VydmVNYWNyb0F0dHIgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVNYWNyb0F0dHInO1xuaW1wb3J0IG9ic2VydmVOb2RlIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTm9kZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0c0FsbCB9IGZyb20gJy4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XG5pbXBvcnQgUmVwb3J0aW5nQ29udGV4dCBmcm9tICcuL3JlcG9ydGluZy9SZXBvcnRpbmdDb250ZXh0JztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuY29uc3Qge1xuXHQgICAgICBkb0FjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKCBwYXJlbnQgPSBudWxsICkge1xuXHR0aGlzLnBhcmVudCAgICAgPSBwYXJlbnQ7XG5cdHRoaXMuZGF0YUlucHV0cyA9IHt9O1xuXHR0aGlzLmZvcm0gICAgICAgPSBudWxsO1xuXHR0aGlzLm11bHRpc3RlcCAgPSBudWxsO1xuXHR0aGlzLnJvb3ROb2RlICAgPSBudWxsO1xuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqXG5cdCAqIEB0eXBlIHtSZXBvcnRpbmdDb250ZXh0fVxuXHQgKi9cblx0dGhpcy5jb250ZXh0ID0gdGhpcy5wYXJlbnQgPyBudWxsIDogbmV3IFJlcG9ydGluZ0NvbnRleHQoIHRoaXMgKTtcbn1cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVwZWF0ZXJEYXRhfG51bGx9XG5cdCAqL1xuXHRwYXJlbnQ6IG51bGwsXG5cdC8qKlxuXHQgKiB7XG5cdCAqICAgICBbZmllbGRfbmFtZV06IHtJbnB1dERhdGF9XG5cdCAqIH1cblx0ICovXG5cdGRhdGFJbnB1dHM6IHt9LFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Rm9ybVN1Ym1pdH1cblx0ICovXG5cdGZvcm06IG51bGwsXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtNdWx0aVN0ZXBTdGF0ZX1cblx0ICovXG5cdG11bHRpc3RlcDogbnVsbCxcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fEhUTUxGb3JtRWxlbWVudH1cblx0ICovXG5cdHJvb3ROb2RlOiBudWxsLFxuXHRpc09ic2VydmVkOiBmYWxzZSxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHZhbHVlOiBudWxsLFxuXHRvYnNlcnZlICggcm9vdCA9IG51bGwgKSB7XG5cdFx0aWYgKCB0aGlzLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICggbnVsbCAhPT0gcm9vdCApIHtcblx0XHRcdHRoaXMucm9vdE5vZGUgPSByb290O1xuXHRcdH1cblx0XHR0aGlzLmlzT2JzZXJ2ZWQgPSB0cnVlO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5iZWZvcmUnLCB0aGlzICk7XG5cblx0XHR0aGlzLmluaXRTdWJtaXRIYW5kbGVyKCk7XG5cblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplIGRhdGFJbnB1dHMgd2l0aCBmaWVsZHMuXG5cdFx0ICogV2l0aG91dCB2YWx1ZXNcblx0XHQgKi9cblx0XHR0aGlzLmluaXRGaWVsZHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFNldHVwIGZpZWxkcyB2YWx1ZXMgYW5kIG1ha2UgdGhlbSByZWFjdGl2ZVxuXHRcdCAqL1xuXHRcdHRoaXMubWFrZVJlYWN0aXZlUHJveHkoKTtcblxuXHRcdHRoaXMuaW5pdE1hY3JvcygpO1xuXG5cdFx0dGhpcy5pbml0QWN0aW9uQnV0dG9ucygpO1xuXG5cdFx0dGhpcy5pbml0VmFsdWUoKTtcblxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuYWZ0ZXInLCB0aGlzICk7XG5cdH0sXG5cblx0aW5pdEZpZWxkcyAoKSB7XG5cdFx0Zm9yICggY29uc3QgZm9ybUVsZW1lbnQgb2YgdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J1tkYXRhLWpmYi1zeW5jXScsXG5cdFx0KSApIHtcblx0XHRcdHRoaXMucHVzaElucHV0KCBmb3JtRWxlbWVudCApO1xuXHRcdH1cblx0fSxcblxuXHRpbml0TWFjcm9zICgpIHtcblx0XHQvLyBtYWNyb3MgYXMgaHRtbC1jb21tZW50c1xuXHRcdGZvciAoXG5cdFx0XHRjb25zdCBjb21tZW50IG9mIGl0ZXJhdGVKZmJDb21tZW50cyggdGhpcy5yb290Tm9kZSApXG5cdFx0XHQpIHtcblx0XHRcdG9ic2VydmVDb21tZW50KCBjb21tZW50LCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gbWFjcm9zIGluIGRlZmF1bHQgYXR0cmlidXRlc1xuXHRcdGNvbnN0IG5vZGVzV2l0aEF0dHJzID0gcXVlcnlCeUF0dHJWYWx1ZSggdGhpcy5yb290Tm9kZSwgJ0pGQl9GSUVMRDo6JyApO1xuXG5cdFx0Y29uc3QgeyByZXBsYWNlQXR0cnMgPSBbXSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlV2l0aEF0dHIgb2Ygbm9kZXNXaXRoQXR0cnMgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCByZXBsYWNlQXR0ciBvZiByZXBsYWNlQXR0cnMgKSB7XG5cdFx0XHRcdG9ic2VydmVNYWNyb0F0dHIoIG5vZGVXaXRoQXR0ciwgcmVwbGFjZUF0dHIsIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBtYWNyb3MgaW4gZGF0YS1qZmItbWFjcm8gYXR0cmlidXRlXG5cdFx0Ly8gcmVzdWx0IHdpbGwgcGxhY2VkIGluc2lkZSByZWxhdGl2ZSBub2RlXG5cdFx0Y29uc3Qgbm9kZXMgPSB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnW2RhdGEtamZiLW1hY3JvXTpub3QoW2RhdGEtamZiLW9ic2VydmVkXSknLFxuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG5vZGVzICkge1xuXHRcdFx0b2JzZXJ2ZU5vZGUoIG5vZGUsIHRoaXMgKTtcblx0XHR9XG5cdH0sXG5cblx0aW5pdFN1Ym1pdEhhbmRsZXIgKCkge1xuXHRcdC8vIGNoZWNrIGlzIGN1cnJlbnQgb2JqZWN0IHJlbGF0ZWQgZm9yIGdsb2JhbCBmb3JtIGVsZW1lbnRcblx0XHRpZiAoIHRoaXMucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtU3VibWl0KCB0aGlzICk7XG5cdH0sXG5cblx0aW5pdEFjdGlvbkJ1dHRvbnMgKCkge1xuXHRcdGlmICggdGhpcy5wYXJlbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2J1dHRvbi1zd2l0Y2gtc3RhdGUnLFxuXHRcdCkgKSB7XG5cdFx0XHRsZXQgc3RhdGVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c3RhdGVzID0gSlNPTi5wYXJzZSggYnV0dG9uLmRhdGFzZXQuc3dpdGNoT24gKTtcblx0XHRcdH1cblx0XHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdldFN0YXRlKCkudmFsdWUuY3VycmVudCA9IHN0YXRlcztcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8UHJvbWlzZTxuZXZlcj58UHJvbWlzZTx2b2lkPj59XG5cdCAqL1xuXHRhc3luYyBpbnB1dHNBcmVWYWxpZCAoKSB7XG5cdFx0Y29uc3QgaW52YWxpZCA9IGF3YWl0IHZhbGlkYXRlSW5wdXRzQWxsKFxuXHRcdFx0cG9wdWxhdGVJbnB1dHMoIHRoaXMuZ2V0SW5wdXRzKCkgKSxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oIGludmFsaWQubGVuZ3RoIClcblx0XHQgICAgICAgPyBQcm9taXNlLnJlamVjdCggaW52YWxpZCApXG5cdFx0ICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH0sXG5cblx0d2F0Y2ggKCBmaWVsZE5hbWUsIGNhbGxhYmxlICkge1xuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5nZXRJbnB1dCggZmllbGROYW1lICk7XG5cblx0XHRpZiAoIGlucHV0ICkge1xuXHRcdFx0cmV0dXJuIGlucHV0LndhdGNoKCBjYWxsYWJsZSApO1xuXHRcdH1cblxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdGBkYXRhSW5wdXRzIGluIE9ic2VydmFibGUgZG9uXFwndCBoYXZlICR7IGZpZWxkTmFtZSB9IGZpZWxkYCxcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAgICB7RWxlbWVudH1cblx0ICogQHBhcmFtIHJlcGxhY2Uge0Jvb2xlYW59XG5cdCAqL1xuXHRvYnNlcnZlSW5wdXQgKCBub2RlLCByZXBsYWNlID0gZmFsc2UgKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLnB1c2hJbnB1dCggbm9kZSwgcmVwbGFjZSApO1xuXG5cdFx0aW5wdXQubWFrZVJlYWN0aXZlKCk7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmlucHV0Lm1hbnVhbCcsIGlucHV0ICk7XG5cdH0sXG5cblx0bWFrZVJlYWN0aXZlUHJveHkgKCkge1xuXHRcdGZvciAoIGNvbnN0IGN1cnJlbnQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGN1cnJlbnQubWFrZVJlYWN0aXZlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAgICB7RWxlbWVudH1cblx0ICogQHBhcmFtIHJlcGxhY2Uge0Jvb2xlYW59XG5cdCAqL1xuXHRwdXNoSW5wdXQgKCBub2RlLCByZXBsYWNlID0gZmFsc2UgKSB7XG5cdFx0Ly8gcHJldmVudCBzYXZpbmcgaW5wdXRzIGZyb20gcHJlc2V0IHJlcGVhdGVyIGl0ZW1zIGluIHJvb3Qgb2JqZWN0XG5cdFx0Ly8gdGhvc2UgaW5wdXRzIHdvdWxkIHNhdmVkIGluIE9ic2VydmFibGVSb3cgb2JqZWN0XG5cblx0XHRpZiAoICF0aGlzLnBhcmVudCAmJlxuXHRcdFx0bm9kZS5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicgKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0RGF0YSA9IGNyZWF0ZUlucHV0KCBub2RlLCB0aGlzICk7XG5cdFx0Y29uc3QgZmluZElucHV0ID0gdGhpcy5kYXRhSW5wdXRzWyBpbnB1dERhdGEuZ2V0TmFtZSgpIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoIGZhbHNlID09PSBmaW5kSW5wdXQgfHwgcmVwbGFjZSApIHtcblx0XHRcdHRoaXMuZGF0YUlucHV0c1sgaW5wdXREYXRhLmdldE5hbWUoKSBdID0gaW5wdXREYXRhO1xuXG5cdFx0XHRyZXR1cm4gaW5wdXREYXRhO1xuXHRcdH1cblxuXHRcdGZpbmRJbnB1dC5tZXJnZSggaW5wdXREYXRhICk7XG5cblx0XHRyZXR1cm4gZmluZElucHV0O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBcnJheTxJbnB1dERhdGE+fVxuXHQgKi9cblx0Z2V0SW5wdXRzICgpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyggdGhpcy5kYXRhSW5wdXRzICk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge251bGx8UmVuZGVyU3RhdGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdGdldFN0YXRlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRJbnB1dCggJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzJyApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGZpZWxkTmFtZVxuXHQgKiBAcmV0dXJuIHtudWxsfElucHV0RGF0YX1cblx0ICovXG5cdGdldElucHV0ICggZmllbGROYW1lICkge1xuXHRcdGlmICggdGhpcy5kYXRhSW5wdXRzLmhhc093blByb3BlcnR5KCBmaWVsZE5hbWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xuXHRcdH1cblx0XHRjb25zdCByb290ID0gdGhpcy5wYXJlbnQ/LnJvb3QgPz8gbnVsbDtcblxuXHRcdGlmICggIXJvb3QgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoIHJvb3QuZGF0YUlucHV0cy5oYXNPd25Qcm9wZXJ0eSggZmllbGROYW1lICkgKSB7XG5cdFx0XHRyZXR1cm4gcm9vdC5kYXRhSW5wdXRzWyBmaWVsZE5hbWUgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0Z2V0U3VibWl0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtIDogdGhpcy5wYXJlbnQucm9vdC5mb3JtO1xuXHR9LFxuXHRnZXRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0ID8/IHRoaXMucGFyZW50LnJvb3QuY29udGV4dDtcblx0fSxcblx0LyoqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzI3MTFcblx0ICpcblx0ICogQHNpbmNlIDMuMC44XG5cdCAqL1xuXHRyZW1vdmUgKCkge1xuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRpbnB1dC5vblJlbW92ZSgpO1xuXHRcdH1cblx0fSxcblx0LyoqXG5cdCAqIFJ1bnMgb25seSBvbmNlIG9uIHdpbmRvdyBcImxvYWRcIiBldmVudFxuXHQgKi9cblx0cmVRdWVyeVZhbHVlcyAoKSB7XG5cdFx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGlucHV0LnJlUXVlcnlWYWx1ZSgpO1xuXHRcdH1cblx0fSxcblx0aW5pdFZhbHVlKCkge1xuXHRcdHRoaXMudmFsdWUgPSBuZXcgUmVhY3RpdmVWYXIoIHt9ICk7XG5cblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoXG5cdFx0XHRcdHRoaXMudmFsdWUuY3VycmVudCxcblx0XHRcdCk7XG5cblx0XHRcdGZvciAoIGNvbnN0IFsgZmllbGROYW1lLCB2YWx1ZSBdIG9mIGVudHJpZXMgKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SW5wdXQoIGZpZWxkTmFtZSApLnJldmVydFZhbHVlKCB2YWx1ZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRpbnB1dC53YXRjaCggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnRbIGlucHV0LmdldE5hbWUoKSBdID0gaW5wdXQuZ2V0VmFsdWUoKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlLm1ha2UoKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7IiwiaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gQmFzZUh0bWxBdHRyKCkge1xuXHR0aGlzLmF0dHJOYW1lICAgPSAnJztcblx0dGhpcy5pbml0aWFsICAgID0gbnVsbDtcblx0dGhpcy5pc0Zyb21EYXRhID0gZmFsc2U7XG5cdHRoaXMudmFsdWUgICAgICA9IG51bGw7XG59XG5cbkJhc2VIdG1sQXR0ci5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBOYW1lIG9mIGRhdGEgYXR0cmlidXRlXG5cdCAqL1xuXHRhdHRyTmFtZTogJycsXG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0aW5wdXQ6IG51bGwsXG5cdGluaXRpYWw6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR2YWx1ZTogbnVsbCxcblx0b2JzZXJ2ZSgpIHtcblx0XHR0aGlzLnZhbHVlID0gbmV3IFJlYWN0aXZlVmFyKCB0aGlzLmluaXRpYWwgKTtcblx0XHR0aGlzLnZhbHVlLm1ha2UoKTtcblxuXHRcdHRoaXMuYWRkV2F0Y2hlckF0dHIoKTtcblx0fSxcblx0bm9kZVNpZ25hbCgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRub2RlWyB0aGlzLmF0dHJOYW1lIF0gPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cdH0sXG5cdGFkZFdhdGNoZXJBdHRyKCkge1xuXHRcdHRoaXMudmFsdWUud2F0Y2goICgpID0+IHRoaXMubm9kZVNpZ25hbCgpICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBJZiB5b3UgbmVlZCBzcGVjaWZpYyBjaGVjayxcblx0ICogeW91IGNhbiByZXdyaXRlIHRoaXMgZnVuY3Rpb25cblx0ICpcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aXNTdXBwb3J0ZWQoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRjb25zdCBoYXNJblJvb3QgICAgPSAtMSAhPT0gbm9kZVsgdGhpcy5hdHRyTmFtZSBdID8/IC0xO1xuXHRcdGNvbnN0IGhhc0luRGF0YVNldCA9IG5vZGUuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSggdGhpcy5hdHRyTmFtZSApO1xuXG5cdFx0aWYgKCAhaGFzSW5EYXRhU2V0ICYmICFoYXNJblJvb3QgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0aWFsID0gdGhpcy5nZXRJbml0aWFsKCBpbnB1dCApO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oIHRoaXMuaW5pdGlhbCApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHsqfGJvb2xlYW59XG5cdCAqL1xuXHRnZXRJbml0aWFsKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0cmV0dXJuIG5vZGUuZGF0YXNldFsgdGhpcy5hdHRyTmFtZSBdIHx8IG5vZGVbIHRoaXMuYXR0ck5hbWUgXSB8fCBmYWxzZTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqL1xuXHRzZXRJbnB1dCggaW5wdXQgKSB7XG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0O1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUh0bWxBdHRyOyIsImltcG9ydCBNYXhGaWxlc0h0bWxBdHRyIGZyb20gJy4vTWF4RmlsZXNIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIEZpbGVFeHRlbnNpb25IdG1sQXR0cigpIHtcblx0TWF4RmlsZXNIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdmaWxlX2V4dCc7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZSAmJiBCb29sZWFuKCBub2RlLmFjY2VwdCApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0ZpbGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHRoaXMuaW5pdGlhbCA9IG5vZGUuYWNjZXB0LnNwbGl0KCAnLCcgKTtcblx0fTtcblxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdHRoaXMudmFsdWUud2F0Y2goICgpID0+IHtcblx0XHRcdG5vZGUuYWNjZXB0ID0gdGhpcy52YWx1ZS5jdXJyZW50LmpvaW4oICcsJyApO1xuXHRcdH0gKTtcblx0fTtcbn1cblxuRmlsZUV4dGVuc2lvbkh0bWxBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVFeHRlbnNpb25IdG1sQXR0cjsiLCJpbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL01heEZpbGVzSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBNYXhGaWxlU2l6ZUh0bWxBdHRyKCkge1xuXHRNYXhGaWxlc0h0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ21heF9zaXplJztcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXG5cdFx0Y29uc3QgeyBtYXhfc2l6ZTogbWF4U2l6ZSA9IDEgfSA9IEpTT04ucGFyc2UoXG5cdFx0XHRpbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5kYXRhc2V0LmFyZ3MsXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdGlhbCA9ICttYXhTaXplO1xuXHR9O1xufVxuXG5NYXhGaWxlU2l6ZUh0bWxBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1heEZpbGVTaXplSHRtbEF0dHI7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL0Jhc2VIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIE1heEZpbGVzSHRtbEF0dHIoKSB7XG5cdEJhc2VIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdtYXhfZmlsZXMnO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0ZpbGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblxuXHRcdGNvbnN0IHsgbWF4X2ZpbGVzOiBtYXhGaWxlcyA9IDEgfSA9IEpTT04ucGFyc2UoXG5cdFx0XHRpbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5kYXRhc2V0LmFyZ3MsXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdGlhbCA9ICttYXhGaWxlcztcblx0fTtcblxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gKCkgPT4ge307XG59XG5cbk1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUh0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNYXhGaWxlc0h0bWxBdHRyOyIsImltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9CYXNlSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBSZW1haW5pbmdDYWxjQXR0cigpIHtcblx0QmFzZUh0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ3JlbWFpbmluZyc7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0cmV0dXJuIGlucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCAnbWF4TGVuZ3RoJyApO1xuXHR9O1xuXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblx0XHRjb25zdCB7IG1heExlbmd0aCB9ID0gaW5wdXQuYXR0cnM7XG5cdFx0Y29uc3QgY3VycmVudCA9IGlucHV0LnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gbWF4TGVuZ3RoLnZhbHVlLmN1cnJlbnQgLSBjdXJyZW50O1xuXHR9O1xuXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSAoKSA9PiB7fTtcblxuXHR0aGlzLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMgKTtcblxuXHRcdHRoaXMuaW5wdXQudmFsdWUud2F0Y2goICgpID0+IHRoaXMudXBkYXRlQXR0cigpICk7XG5cdFx0dGhpcy5pbnB1dC5hdHRycy5tYXhMZW5ndGgudmFsdWUud2F0Y2goICgpID0+IHRoaXMudXBkYXRlQXR0cigpICk7XG5cdH07XG5cblx0dGhpcy51cGRhdGVBdHRyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoIH0gPSB0aGlzLmlucHV0LmF0dHJzO1xuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xuXG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbWF4TGVuZ3RoLnZhbHVlLmN1cnJlbnQgLSBjdXJyZW50O1xuXHR9O1xufVxuXG5SZW1haW5pbmdDYWxjQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWFpbmluZ0NhbGNBdHRyOyIsIi8qKlxuICogQHBhcmFtIGZvcm11bGFcbiAqIEBwYXJhbSByb290ICAgIHtPYnNlcnZhYmxlfVxuICogQGNsYXNzXG4gKi9cbmltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xuaW1wb3J0IGdldEZpbHRlcnMgZnJvbSAnLi9nZXRGaWx0ZXJzJztcbmltcG9ydCB7IGVzY2FwZUh0bWwgfSBmcm9tICcuLi9odG1sLm1hY3JvL2VzY2FwZUh0bWwnO1xuaW1wb3J0IGF0dGFjaENvbnN0TmFtZXNwYWNlIGZyb20gJy4vYXR0YWNoQ29uc3ROYW1lc3BhY2UnO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnM6IHdwRmlsdGVycyxcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5jdXN0b20uZm9ybXVsYS5tYWNybycsXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0YXR0YWNoQ29uc3ROYW1lc3BhY2UsXG4pO1xuXG4vLyBNYXRjaGVzIGEgc3RyaW5nIHRoYXQgaXMgKmVudGlyZWx5KiBjb25zdW1lZCBieSBhIHNpbmdsZSBudW1lcmljIGxpdGVyYWxcbi8vIChvcHRpb25hbGx5IHNpZ25lZCwgb3B0aW9uYWxseSBkZWNpbWFsLCBvcHRpb25hbGx5IHNjaWVudGlmaWMgbm90YXRpb24pIC1cbi8vIG5vIGxlZnRvdmVyIGNoYXJhY3RlcnMgYWxsb3dlZC4gVXNlZCBieSBjYWxjdWxhdGVFdmFsU3RyaW5nKCkgdG8gZGVjaWRlXG4vLyB3aGV0aGVyIGEgc3Vic3RpdHV0ZWQgdmFsdWUgbWF5IGJlIGVtaXR0ZWQgYXMgYSBiYXJlIG51bWVyaWMgbGl0ZXJhbFxuLy8gaW5zdGVhZCBvZiBhIEpTT04tcXVvdGVkIHN0cmluZy5cbmNvbnN0IE5VTUVSSUNfTElURVJBTF9SRSA9IC9eWystXT8oXFxkK1xcLj9cXGQqfFxcLlxcZCspKFtlRV1bKy1dP1xcZCspPyQvO1xuXG5jb25zdCBSRUdFWF9QUkVDRURJTkdfS0VZV09SRFMgPSBbXG5cdCdhd2FpdCcsXG5cdCdicmVhaycsXG5cdCdjYXNlJyxcblx0J2NvbnRpbnVlJyxcblx0J2RlYnVnZ2VyJyxcblx0J2RlbGV0ZScsXG5cdCdkbycsXG5cdCdlbHNlJyxcblx0J2luJyxcblx0J2luc3RhbmNlb2YnLFxuXHQnbmV3Jyxcblx0J29mJyxcblx0J3JldHVybicsXG5cdCd0aHJvdycsXG5cdCd0eXBlb2YnLFxuXHQndm9pZCcsXG5cdCd5aWVsZCcsXG5dO1xuXG4vLyBDb250cm9sLXN0YXRlbWVudCBoZWFkZXJzIHdob3NlIHBhcmVudGhlc2l6ZWQgY29uZGl0aW9uL2V4cHJlc3Npb24gaXNcbi8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGEgc3RhdGVtZW50IC0gZS5nLiBgaWYgKC4uLikvcmUvLnRlc3QoeClgLiBBIGApYFxuLy8gdGhhdCBjbG9zZXMgb25lIG9mIHRoZXNlIGlzIGEgc3RhdGVtZW50IGJvdW5kYXJ5LCBub3QgdGhlIGVuZCBvZiBhIGNhbGxcbi8vIG9yIGdyb3VwaW5nIGV4cHJlc3Npb24sIHNvIGAvYCByaWdodCBhZnRlciBpdCBzdGlsbCBzdGFydHMgYSByZWdleFxuLy8gbGl0ZXJhbCByYXRoZXIgdGhhbiBiZWluZyBwYXJzZWQgYXMgZGl2aXNpb24uXG5jb25zdCBSRUdFWF9QUkVDRURJTkdfUEFSRU5fS0VZV09SRFMgPSBbXG5cdCdpZicsXG5cdCd3aGlsZScsXG5cdCdmb3InLFxuXHQnc3dpdGNoJyxcblx0J2NhdGNoJyxcblx0J3dpdGgnLFxuXTtcblxuLy8gTWFya3MgYW4gaWRlbnRpZmllciB0aGF0IHdhcyBpbW1lZGlhdGVseSBwcmVjZWRlZCBieSBgLmAgKGEgbWVtYmVyXG4vLyBuYW1lLCBlLmcuIHRoZSBgcmV0dXJuYCBpbiBgZm9vLnJldHVybmApIHNvIGNhblN0YXJ0UmVnZXhMaXRlcmFsKCkgY2FuXG4vLyB0ZWxsIGl0IGFwYXJ0IGZyb20gdGhlIGByZXR1cm5gICprZXl3b3JkKi4gVGhpcyB1c2VzIGEgY29udHJvbCBjaGFyYWN0ZXJcbi8vIChuZXZlciBwcm9kdWNlZCBieSBjb25zdW1pbmcgb3JkaW5hcnkgZm9ybXVsYSBwdW5jdHVhdGlvbi9pZGVudGlmaWVycykgYXNcbi8vIHRoZSBwcmVmaXgsIHJhdGhlciB0aGFuIGAuYCBpdHNlbGY6IGEgYmFyZSBgLmAgaXMgaXRzZWxmIGEgdmFsaWQsXG4vLyBjb21wbGV0ZSBwcmV2aW91c1NpZ25pZmljYW50IHZhbHVlIChlLmcuIHRoZSBsYXN0IGAuYCBvZiB0aGUgc3ByZWFkXG4vLyBvcGVyYXRvciBgLi4uYCwgb3IgYSBkYW5nbGluZyBgLmAgYmVmb3JlIHdoaXRlc3BhY2UpLCBhbmQgcHJlZml4aW5nIHdpdGhcbi8vIGAuYCB3b3VsZCBtYWtlIHRoYXQgYmFyZSB0b2tlbiBpbmRpc3Rpbmd1aXNoYWJsZSBmcm9tIFwibWVtYmVyIGFjY2VzcyBpblxuLy8gcHJvZ3Jlc3NcIiwgd3JvbmdseSByb3V0aW5nIGAvYCBhZnRlciBgLi4uYCB0aHJvdWdoIHRoZSBtZW1iZXItYWNjZXNzXG4vLyAoZGl2aXNpb24pIGJyYW5jaCBpbnN0ZWFkIG9mIHJlY29nbml6aW5nIGl0IGFzIGEgcmVnZXggb3BlbmVyLlxuY29uc3QgTUVNQkVSX05BTUVfUFJFRklYID0gJ1xcdTAwMDAnO1xuXG5mdW5jdGlvbiBjYW5TdGFydFJlZ2V4TGl0ZXJhbCggcHJldmlvdXNTaWduaWZpY2FudCwgcHJlY2VkaW5nUGFyZW5LZXl3b3JkICkge1xuXHRpZiAoIHByZXZpb3VzU2lnbmlmaWNhbnQuc3RhcnRzV2l0aCggTUVNQkVSX05BTUVfUFJFRklYICkgKSB7XG5cdFx0Ly8gQSBtZW1iZXIgbmFtZSAoYGZvby5yZXR1cm5gLCBgZm9vLm5ld2AsIC4uLikgcmVhZHMgbGlrZSBhIHJlZ2V4LVxuXHRcdC8vIHByZWNlZGluZyBrZXl3b3JkIGJ5IHNwZWxsaW5nIGFsb25lLCBidXQgaXQncyBhIHByb3BlcnR5IGFjY2Vzc1xuXHRcdC8vIHJlc3VsdCwgc28gYC9gIGFmdGVyIGl0IGRpdmlkZXMgLSBzYW1lIGFzIGFmdGVyIGFueSBvdGhlciB2YWx1ZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoICcpJyA9PT0gcHJldmlvdXNTaWduaWZpY2FudCApIHtcblx0XHRyZXR1cm4gUkVHRVhfUFJFQ0VESU5HX1BBUkVOX0tFWVdPUkRTLmluY2x1ZGVzKCBwcmVjZWRpbmdQYXJlbktleXdvcmQgKTtcblx0fVxuXG5cdC8vIGArK2AvYC0tYCBhcmUgcG9zdGZpeCBvcGVyYXRvcnM6IGB4KysgLzJgIGRpdmlkZXMsIGl0IGRvZXNuJ3Qgb3BlbiBhXG5cdC8vIHJlZ2V4LCBldmVuIHRob3VnaCB0aGUgdHJhaWxpbmcgYCtgL2AtYCBhbG9uZSB3b3VsZCBub3JtYWxseSBzaWduYWxcblx0Ly8gdGhlIHN0YXJ0IG9mIGFuIGV4cHJlc3Npb24uXG5cdGlmICggJysrJyA9PT0gcHJldmlvdXNTaWduaWZpY2FudCB8fCAnLS0nID09PSBwcmV2aW91c1NpZ25pZmljYW50ICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIGAuLi5gIChzcHJlYWQvcmVzdCkgYWx3YXlzIGV4cGVjdHMgYW4gZXhwcmVzc2lvbiBuZXh0LCBzbyBgL2Bcblx0Ly8gaW1tZWRpYXRlbHkgYWZ0ZXIgaXQgdW5hbWJpZ3VvdXNseSBvcGVucyBhIHJlZ2V4IGxpdGVyYWwgLSB1bmxpa2UgYVxuXHQvLyBiYXJlLCBpbmNvbXBsZXRlIGAuYCwgd2hpY2ggaXMgaGFuZGxlZCBieSB0aGUgZmFsbHRocm91Z2ggYmVsb3cuXG5cdGlmICggJy4uLicgPT09IHByZXZpb3VzU2lnbmlmaWNhbnQgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBgfWAgaXMgYW1iaWd1b3VzIGluIGdlbmVyYWwgSlMgZ3JhbW1hciAoaXQgY2FuIGNsb3NlIGEgYmxvY2tcblx0Ly8gc3RhdGVtZW50LCB3aGVyZSBgL2Agc3RhcnRzIGEgcmVnZXgsIG9yIGFuIG9iamVjdCBsaXRlcmFsIC9cblx0Ly8gZGVzdHJ1Y3R1cmluZyBwYXR0ZXJuLCB3aGVyZSBgL2AgZGl2aWRlcyksIGFuZCBhIHJlYWwgcGFyc2VyIHdvdWxkXG5cdC8vIGJlIG5lZWRlZCB0byBmdWxseSBkaXNhbWJpZ3VhdGUgaXQuIFNpbmNlIHRoaXMgaGV1cmlzdGljIG9ubHkgZXhpc3RzXG5cdC8vIHRvIGRlY2lkZSBob3cgdW50cnVzdGVkIG1hY3JvIHZhbHVlcyBnZXQgZXNjYXBlZCBiZWZvcmUgcmVhY2hpbmdcblx0Ly8gYG5ldyBGdW5jdGlvbigpYCwgdGhlIHNhZmUgZGVmYXVsdCBvbiB0aGF0IGFtYmlndWl0eSBpcyB0byB0cmVhdCBgL2Bcblx0Ly8gYXMgb3BlbmluZyBhIHJlZ2V4OiBvdmVyLWVzY2FwaW5nIGEgdmFsdWUgYXMgcmVnZXggY29udGVudCB3aGVuIHRoZVxuXHQvLyBhdXRob3IgYWN0dWFsbHkgbWVhbnQgZGl2aXNpb24gZmFpbHMgYSBmb3JtdWxhIGxvdWRseSAoY2F1Z2h0IGJ5XG5cdC8vIGNhbGN1bGF0ZSgpJ3MgdHJ5L2NhdGNoKSwgd2hlcmVhcyB1bmRlci1lc2NhcGluZyBpdCBhcyBhIHN0cmluZ1xuXHQvLyBsZWF2ZXMgYSBjb2RlLWluamVjdGlvbiBwYXRoIG9wZW4uXG5cdHJldHVybiAhcHJldmlvdXNTaWduaWZpY2FudFxuXHRcdHx8IFJFR0VYX1BSRUNFRElOR19LRVlXT1JEUy5pbmNsdWRlcyggcHJldmlvdXNTaWduaWZpY2FudCApXG5cdFx0fHwgL1soW3s6Oyw9IT8mfCtcXC0qJX5ePD59XS8udGVzdCggcHJldmlvdXNTaWduaWZpY2FudCApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcmV2aW91c1NpZ25pZmljYW50KCBwcmV2aW91c1NpZ25pZmljYW50LCBjdXJyZW50LCBzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlICkge1xuXHRpZiAoIC9bXFx3JF0vLnRlc3QoIGN1cnJlbnQgKSApIHtcblx0XHRpZiAoICFzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudFxuXHRcdFx0JiYgL15bQS1aYS16XyRdW1xcdyRdKiQvLnRlc3QoIHByZXZpb3VzU2lnbmlmaWNhbnQgKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHByZXZpb3VzU2lnbmlmaWNhbnQgKyBjdXJyZW50O1xuXHRcdH1cblxuXHRcdGlmICggJy4nID09PSBwcmV2aW91c1NpZ25pZmljYW50ICkge1xuXHRcdFx0cmV0dXJuIE1FTUJFUl9OQU1FX1BSRUZJWCArIGN1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBwcmV2aW91c1NpZ25pZmljYW50LnN0YXJ0c1dpdGgoIE1FTUJFUl9OQU1FX1BSRUZJWCApXG5cdFx0XHQmJiAvXltcXHckXSokLy50ZXN0KCBwcmV2aW91c1NpZ25pZmljYW50LnNsaWNlKCAxICkgKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHByZXZpb3VzU2lnbmlmaWNhbnQgKyBjdXJyZW50O1xuXHRcdH1cblx0fVxuXG5cdC8vIFRyYWNrIGArK2AvYC0tYCBhcyBhIHBhaXIgc28gY2FuU3RhcnRSZWdleExpdGVyYWwoKSBjYW4gdGVsbCB0aGVcblx0Ly8gcG9zdGZpeC1pbmNyZW1lbnQvZGVjcmVtZW50IG9wZXJhdG9yIGFwYXJ0IGZyb20gYSBzaW5nbGUgdW5hcnlcblx0Ly8gYCtgL2AtYCwgd2hpY2ggYWZmZWN0cyB3aGV0aGVyIGEgZm9sbG93aW5nIGAvYCBkaXZpZGVzIG9yIG9wZW5zIGFcblx0Ly8gcmVnZXggbGl0ZXJhbC4gR2F0ZWQgb24gbm8gd2hpdGVzcGFjZS9jb21tZW50IGluIGJldHdlZW46IGAxKyArL3JlL2Bcblx0Ly8gb3IgYDErLypjKi8rL3JlL2AgYXJlIHR3byBTRVBBUkFURSBgK2AgdG9rZW5zICh1bmFyeSBwbHVzIG9mIGEgcmVnZXgtXG5cdC8vIGRlcml2ZWQgZXhwcmVzc2lvbiksIG5vdCBhIHBvc3RmaXggYCsrYCAtIG1lcmdpbmcgdGhlbSBhbnl3YXkgd291bGRcblx0Ly8gbWlzY2xhc3NpZnkgdGhlIGZvbGxvd2luZyBgL2AgYXMgZGl2aXNpb24gaW5zdGVhZCBvZiBhIHJlZ2V4IG9wZW5lci5cblx0aWYgKCAoICcrJyA9PT0gY3VycmVudCB8fCAnLScgPT09IGN1cnJlbnQgKVxuXHRcdCYmIGN1cnJlbnQgPT09IHByZXZpb3VzU2lnbmlmaWNhbnRcblx0XHQmJiAhc2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnRcblx0KSB7XG5cdFx0cmV0dXJuIGN1cnJlbnQgKyBjdXJyZW50O1xuXHR9XG5cblx0Ly8gVHJhY2sgdGhlIHNwcmVhZC9yZXN0IG9wZXJhdG9yIGAuLi5gIGFzIGEgc2luZ2xlIGFjY3VtdWxhdGVkIHRva2VuLFxuXHQvLyBzYW1lIGFzIGArK2AvYC0tYCBhYm92ZTogYSBiYXJlIGAuYCBhbG9uZSBpcyBhbWJpZ3VvdXMgKGl0IGNvdWxkIGJlXG5cdC8vIHRoZSBzdGFydCBvZiBhIG5vdC15ZXQtdHlwZWQgbWVtYmVyIGFjY2VzcyksIGJ1dCBgLi4uYCBpcyBhIGNvbXBsZXRlLFxuXHQvLyB1bmFtYmlndW91cyBFbGxpcHNpcyBwdW5jdHVhdG9yIC0gdGhlIGAvYCBpbW1lZGlhdGVseSBhZnRlciBpdCBhbHdheXNcblx0Ly8gb3BlbnMgYSByZWdleCBsaXRlcmFsIChhIHNwcmVhZCBhbHdheXMgZXhwZWN0cyBhbiBleHByZXNzaW9uIG5leHQpLFxuXHQvLyBuZXZlciBkaXZpc2lvbi5cblx0aWYgKCAnLicgPT09IGN1cnJlbnRcblx0XHQmJiAoICcuJyA9PT0gcHJldmlvdXNTaWduaWZpY2FudCB8fCAnLi4nID09PSBwcmV2aW91c1NpZ25pZmljYW50IClcblx0KSB7XG5cdFx0cmV0dXJuIHByZXZpb3VzU2lnbmlmaWNhbnQgKyBjdXJyZW50O1xuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICogVHJhY2tzIHRoZSBsZXhpY2FsIGNvbnRleHQgb2YgdGhlIHRydXN0ZWQgZm9ybXVsYSB0ZXh0IHN1cnJvdW5kaW5nIGEgbWFjcm8uXG4gKiBNYWNybyB2YWx1ZXMgbmVlZCBhIGRpZmZlcmVudCByZXByZXNlbnRhdGlvbiBpbnNpZGUgYSBzdHJpbmcgbGl0ZXJhbCB0aGFuXG4gKiB0aGV5IGRvIGluIEphdmFTY3JpcHQgY29kZTogaW5zZXJ0aW5nIGEgY29tcGxldGUgSlNPTiBsaXRlcmFsIGludG9cbiAqIGAnJWZpZWxkJSdgIHdvdWxkIGluc2VydCBpdHMgcXVvdGVzIGludG8gdGhlIGFscmVhZHktb3BlbiBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaW50ZW50aW9uYWxseSBvbmx5IGZvbGxvd3MgbGl0ZXJhbCBib3VuZGFyaWVzLiBGb3JtdWxhIHN5bnRheCBpdHNlbGZcbiAqIHJlbWFpbnMgYXV0aG9yLXByb3ZpZGVkIGNvZGU7IHRoaXMgaXMgc29sZWx5IHVzZWQgdG8gZW5jb2RlIHVudHJ1c3RlZCBtYWNyb1xuICogdmFsdWVzIGJlZm9yZSB0aGV5IHJlYWNoIGBuZXcgRnVuY3Rpb24oKWAuXG4gKlxuICogQHJldHVybiB7eyBjb25zdW1lOiAoZnVuY3Rpb24oc3RyaW5nKTogc3RyaW5nKSwgZ2V0U3RhdGU6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBpc0VzY2FwZWQ6IChmdW5jdGlvbigpOiBib29sZWFuKSB9fVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtZGVwdGgsIG1heC1saW5lcy1wZXItZnVuY3Rpb24gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZvcm11bGFMZXhpY2FsQ29udGV4dCgpIHtcblx0bGV0IHN0YXRlID0gJ2NvZGUnO1xuXHRsZXQgZXNjYXBlZCA9IGZhbHNlO1xuXHRsZXQgbGl0ZXJhbFJldHVyblN0YXRlID0gJ2NvZGUnO1xuXHRsZXQgY29tbWVudFJldHVyblN0YXRlID0gJ2NvZGUnO1xuXHRjb25zdCB0ZW1wbGF0ZUV4cHJlc3Npb25EZXB0aHMgPSBbXTtcblx0Y29uc3QgdGVtcGxhdGVSZXR1cm5TdGF0ZXMgPSBbXTtcblx0bGV0IHJlZ2V4Q2hhcmFjdGVyQ2xhc3MgPSBmYWxzZTtcblx0bGV0IHJlZ2V4UmV0dXJuU3RhdGUgPSAnY29kZSc7XG5cdGxldCBwcmV2aW91c1NpZ25pZmljYW50ID0gJyc7XG5cdC8vIFRoZSBzaWduaWZpY2FudCB0b2tlbiAqYmVmb3JlKiBwcmV2aW91c1NpZ25pZmljYW50IC0gb25seSBuZWVkZWQgdG9cblx0Ly8gcmVjb2duaXplIHRoZSB0d28td29yZCBgZm9yIGF3YWl0IChgIGhlYWRlciAoYXN5bmMgaXRlcmF0aW9uKSwgd2hlcmVcblx0Ly8gdGhlIHdvcmQgaW1tZWRpYXRlbHkgYmVmb3JlIGAoYCBpcyBgYXdhaXRgLCBub3QgYGZvcmAuXG5cdGxldCB3b3JkQmVmb3JlUHJldmlvdXMgPSAnJztcblx0Ly8gVHJhY2tzIHdoZXRoZXIgd2hpdGVzcGFjZSB3YXMgc2VlbiBzaW5jZSBwcmV2aW91c1NpZ25pZmljYW50IHdhcyBsYXN0XG5cdC8vIHNldCwgc28gYSBuZXcgaWRlbnRpZmllciBzdGFydGluZyByaWdodCBhZnRlciB3aGl0ZXNwYWNlIGNhbiBiZSB0b2xkXG5cdC8vIGFwYXJ0IGZyb20gb25lIGNvbnRpbnVpbmcgc3RyYWlnaHQgb2ZmIHB1bmN0dWF0aW9uIChlLmcuIGAuZm9vYCkuXG5cdGxldCBzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHQvLyBTdGFjayBvZiBgKGAgZ3JvdXBpbmdzIGluIGNvZGUvdGVtcGxhdGUtZXhwcmVzc2lvbiBjb250ZXh0cywgdHJhY2tpbmdcblx0Ly8gd2hpY2gga2V5d29yZCAoaWYgYW55KSBwcmVjZWRlZCBlYWNoIG9uZSAtIHNvIHRoYXQgd2hlbiB0aGUgbWF0Y2hpbmdcblx0Ly8gYClgIGlzIHJlYWNoZWQsIGNhblN0YXJ0UmVnZXhMaXRlcmFsKCkgY2FuIHRlbGwgYSBjb250cm9sLXN0YXRlbWVudFxuXHQvLyBoZWFkZXIgYXBhcnQgZnJvbSBhIGNhbGwgb3IgZ3JvdXBpbmcgZXhwcmVzc2lvbi5cblx0Y29uc3QgcGFyZW5LZXl3b3JkU3RhY2sgPSBbXTtcblx0bGV0IHByZWNlZGluZ1BhcmVuS2V5d29yZCA9ICcnO1xuXG5cdHJldHVybiB7XG5cdFx0Y29uc3VtZSggdmFsdWUgKSB7XG5cdFx0XHR2YWx1ZSA9IFN0cmluZyggdmFsdWUgKTtcblx0XHRcdGxldCBub3JtYWxpemVkID0gJyc7XG5cblx0XHRcdGZvciAoIGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWUubGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdGNvbnN0IG5leHQgICAgPSB2YWx1ZVsgaW5kZXggKyAxIF07XG5cblx0XHRcdFx0aWYgKCAhZXNjYXBlZFxuXHRcdFx0XHRcdCYmIFsgJ3NpbmdsZScsICdkb3VibGUnLCAndGVtcGxhdGUnIF0uaW5jbHVkZXMoIHN0YXRlIClcblx0XHRcdFx0XHQmJiAoICdcXHInID09PSBjdXJyZW50IHx8ICdcXG4nID09PSBjdXJyZW50IClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0bm9ybWFsaXplZCArPSAnXFxcXG4nO1xuXG5cdFx0XHRcdFx0aWYgKCAnXFxyJyA9PT0gY3VycmVudCAmJiAnXFxuJyA9PT0gbmV4dCApIHtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bm9ybWFsaXplZCArPSBjdXJyZW50O1xuXG5cdFx0XHRcdGlmICggZXNjYXBlZCApIHtcblx0XHRcdFx0XHRlc2NhcGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICdsaW5lLWNvbW1lbnQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0XHRpZiAoICdcXHInID09PSBjdXJyZW50IHx8ICdcXG4nID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBjb21tZW50UmV0dXJuU3RhdGU7XG5cdFx0XHRcdFx0XHQvLyBBIGNvbW1lbnQgc2VwYXJhdGVzIHRva2VucyBleGFjdGx5IGxpa2Ugd2hpdGVzcGFjZVxuXHRcdFx0XHRcdFx0Ly8gZG9lczogYDErLypjKi8rL3JlL2AgaXMgdHdvIGRpc3RpbmN0IGArYCB0b2tlbnMsXG5cdFx0XHRcdFx0XHQvLyBub3QgYSBwb3N0Zml4IGArK2AsIHNvIHRoZSBvcGVyYXRvci9pZGVudGlmaWVyXG5cdFx0XHRcdFx0XHQvLyBhY2N1bXVsYXRpb24gaW4gdXBkYXRlUHJldmlvdXNTaWduaWZpY2FudCgpIG11c3Rcblx0XHRcdFx0XHRcdC8vIG5vdCBicmlkZ2UgYWNyb3NzIGl0LlxuXHRcdFx0XHRcdFx0c2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggJ2Jsb2NrLWNvbW1lbnQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0XHRpZiAoICcqJyA9PT0gY3VycmVudCAmJiAnLycgPT09IG5leHQgKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IGNvbW1lbnRSZXR1cm5TdGF0ZTtcblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWQgKz0gbmV4dDtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBbICdzaW5nbGUnLCAnZG91YmxlJywgJ3RlbXBsYXRlJyBdLmluY2x1ZGVzKCBzdGF0ZSApXG5cdFx0XHRcdFx0JiYgJ1xcXFwnID09PSBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGVzY2FwZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAnc2luZ2xlJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0aWYgKCAnXFwnJyA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gbGl0ZXJhbFJldHVyblN0YXRlO1xuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9ICd2YWx1ZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAnZG91YmxlJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0aWYgKCAnXCInID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBsaXRlcmFsUmV0dXJuU3RhdGU7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50ID0gJ3ZhbHVlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICd0ZW1wbGF0ZScgPT09IHN0YXRlICkge1xuXHRcdFx0XHRcdGlmICggJ2AnID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSB0ZW1wbGF0ZVJldHVyblN0YXRlcy5wb3AoKSA/PyAnY29kZSc7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50ID0gJ3ZhbHVlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoICckJyA9PT0gY3VycmVudCAmJiAneycgPT09IG5leHQgKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9ICd0ZW1wbGF0ZS1leHByZXNzaW9uJztcblx0XHRcdFx0XHRcdHRlbXBsYXRlRXhwcmVzc2lvbkRlcHRocy5wdXNoKCAxICk7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50ID0gJyc7XG5cdFx0XHRcdFx0XHRub3JtYWxpemVkICs9IG5leHQ7XG5cdFx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggJ3JlZ2V4JyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0aWYgKCAnXFxcXCcgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0XHRlc2NhcGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoICdbJyA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0XHRcdHJlZ2V4Q2hhcmFjdGVyQ2xhc3MgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJ10nID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0cmVnZXhDaGFyYWN0ZXJDbGFzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJy8nID09PSBjdXJyZW50ICYmICFyZWdleENoYXJhY3RlckNsYXNzICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSByZWdleFJldHVyblN0YXRlO1xuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9ICd2YWx1ZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBbICdjb2RlJywgJ3RlbXBsYXRlLWV4cHJlc3Npb24nIF0uaW5jbHVkZXMoIHN0YXRlIClcblx0XHRcdFx0XHQmJiAnLycgPT09IGN1cnJlbnRcblx0XHRcdFx0XHQmJiBbICcvJywgJyonIF0uaW5jbHVkZXMoIG5leHQgKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb21tZW50UmV0dXJuU3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XHRzdGF0ZSA9ICcvJyA9PT0gbmV4dCA/ICdsaW5lLWNvbW1lbnQnIDogJ2Jsb2NrLWNvbW1lbnQnO1xuXHRcdFx0XHRcdG5vcm1hbGl6ZWQgKz0gbmV4dDtcblx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBbICdjb2RlJywgJ3RlbXBsYXRlLWV4cHJlc3Npb24nIF0uaW5jbHVkZXMoIHN0YXRlIClcblx0XHRcdFx0XHQmJiAnLycgPT09IGN1cnJlbnRcblx0XHRcdFx0XHQmJiBjYW5TdGFydFJlZ2V4TGl0ZXJhbCggcHJldmlvdXNTaWduaWZpY2FudCwgcHJlY2VkaW5nUGFyZW5LZXl3b3JkIClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmVnZXhSZXR1cm5TdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcdHJlZ2V4Q2hhcmFjdGVyQ2xhc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRzdGF0ZSA9ICdyZWdleCc7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIFsgJ2NvZGUnLCAndGVtcGxhdGUtZXhwcmVzc2lvbicgXS5pbmNsdWRlcyggc3RhdGUgKVxuXHRcdFx0XHRcdCYmICcoJyA9PT0gY3VycmVudFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBgZm9yIGF3YWl0IChgIChhc3luYyBpdGVyYXRpb24pIGhhcyBgYXdhaXRgIC0gbm90XG5cdFx0XHRcdFx0Ly8gYGZvcmAgLSBhcyB0aGUgd29yZCBpbW1lZGlhdGVseSBiZWZvcmUgYChgOyBsb29rIG9uZVxuXHRcdFx0XHRcdC8vIHdvcmQgZnVydGhlciBiYWNrIHNvIGl0cyBgKWAgaXMgc3RpbGwgcmVjb2duaXplZCBhc1xuXHRcdFx0XHRcdC8vIGEgY29udHJvbC1zdGF0ZW1lbnQgYm91bmRhcnksIHNhbWUgYXMgcGxhaW4gYGZvciAoYC5cblx0XHRcdFx0XHRjb25zdCBpc0ZvckF3YWl0ID0gJ2F3YWl0JyA9PT0gcHJldmlvdXNTaWduaWZpY2FudFxuXHRcdFx0XHRcdFx0JiYgJ2ZvcicgPT09IHdvcmRCZWZvcmVQcmV2aW91cztcblxuXHRcdFx0XHRcdHBhcmVuS2V5d29yZFN0YWNrLnB1c2goXG5cdFx0XHRcdFx0XHRpc0ZvckF3YWl0XG5cdFx0XHRcdFx0XHRcdD8gJ2Zvcidcblx0XHRcdFx0XHRcdFx0OiAoIFJFR0VYX1BSRUNFRElOR19QQVJFTl9LRVlXT1JEUy5pbmNsdWRlcyggcHJldmlvdXNTaWduaWZpY2FudCApXG5cdFx0XHRcdFx0XHRcdFx0PyBwcmV2aW91c1NpZ25pZmljYW50XG5cdFx0XHRcdFx0XHRcdFx0OiAnJyApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggWyAnY29kZScsICd0ZW1wbGF0ZS1leHByZXNzaW9uJyBdLmluY2x1ZGVzKCBzdGF0ZSApXG5cdFx0XHRcdFx0JiYgJyknID09PSBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHByZWNlZGluZ1BhcmVuS2V5d29yZCA9IHBhcmVuS2V5d29yZFN0YWNrLnBvcCgpID8/ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAndGVtcGxhdGUtZXhwcmVzc2lvbicgPT09IHN0YXRlICkge1xuXHRcdFx0XHRcdGlmICggJ1xcJycgPT09IGN1cnJlbnQgfHwgJ1wiJyA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0XHRcdGxpdGVyYWxSZXR1cm5TdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSAnXFwnJyA9PT0gY3VycmVudCA/ICdzaW5nbGUnIDogJ2RvdWJsZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCAnYCcgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVJldHVyblN0YXRlcy5wdXNoKCBzdGF0ZSApO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSAndGVtcGxhdGUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJ3snID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGVFeHByZXNzaW9uRGVwdGhzW1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUV4cHJlc3Npb25EZXB0aHMubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XSsrO1xuXG5cdFx0XHRcdFx0XHQvLyBge2AgaXMgaXRzZWxmIGEgc2lnbmlmaWNhbnQgdG9rZW4gKGUuZy4gaXQgY2FuXG5cdFx0XHRcdFx0XHQvLyBvcGVuIGEgbmVzdGVkIGJsb2NrL2Z1bmN0aW9uIGJvZHkgaW5zaWRlIGAkey4uLn1gLFxuXHRcdFx0XHRcdFx0Ly8gbm90IGp1c3QgaW5jcmVhc2UgaW50ZXJwb2xhdGlvbiBkZXB0aCkgLSB0cmFjayBpdFxuXHRcdFx0XHRcdFx0Ly8gbGlrZSBhbnkgb3RoZXIgcHVuY3R1YXRpb24gc28gYSBgL2AgcmlnaHQgYWZ0ZXIgYVxuXHRcdFx0XHRcdFx0Ly8gbmVzdGVkIGB9YCBjbG9zaW5nIHRoYXQgYmxvY2sgaXMgc3RpbGwgY29ycmVjdGx5XG5cdFx0XHRcdFx0XHQvLyBjbGFzc2lmaWVkIHJlbGF0aXZlIHRvIGl0LCBpbnN0ZWFkIG9mIHN0YWxlIHN0YXRlXG5cdFx0XHRcdFx0XHQvLyBsZWZ0IG92ZXIgZnJvbSBiZWZvcmUgdGhpcyBge2AuXG5cdFx0XHRcdFx0XHRpZiAoIHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ICkge1xuXHRcdFx0XHRcdFx0XHR3b3JkQmVmb3JlUHJldmlvdXMgPSBwcmV2aW91c1NpZ25pZmljYW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJ30nID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGVwdGhJbmRleCA9IHRlbXBsYXRlRXhwcmVzc2lvbkRlcHRocy5sZW5ndGggLSAxO1xuXG5cdFx0XHRcdFx0XHRpZiAoIDAgPT09IC0tdGVtcGxhdGVFeHByZXNzaW9uRGVwdGhzWyBkZXB0aEluZGV4IF0gKSB7XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlRXhwcmVzc2lvbkRlcHRocy5wb3AoKTtcblx0XHRcdFx0XHRcdFx0c3RhdGUgPSAndGVtcGxhdGUnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoIHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ICkge1xuXHRcdFx0XHRcdFx0XHR3b3JkQmVmb3JlUHJldmlvdXMgPSBwcmV2aW91c1NpZ25pZmljYW50O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBTYW1lIGFzIGB7YCBhYm92ZTogYSBuZXN0ZWQgYH1gIChjbG9zaW5nIGEgYmxvY2svXG5cdFx0XHRcdFx0XHQvLyBmdW5jdGlvbiBib2R5IGluc2lkZSBgJHsuLi59YCwgbm90IHRoZSBgJHsuLi59YFxuXHRcdFx0XHRcdFx0Ly8gaXRzZWxmKSBpcyBhIHJlYWwgdG9rZW4gdGhhdCB0aGUgcmVnZXgtdnMtZGl2aXNpb25cblx0XHRcdFx0XHRcdC8vIGhldXJpc3RpYyBtdXN0IHNlZSwgc28gYSBtYWNyby1hZGphY2VudCBgL2AgcmlnaHRcblx0XHRcdFx0XHRcdC8vIGFmdGVyIGl0IGlzIGVzY2FwZWQgYXMgcmVnZXggY29udGVudCByYXRoZXIgdGhhblxuXHRcdFx0XHRcdFx0Ly8gZmFsbGluZyBiYWNrIHRvIHN0YWxlIHByZS1ge2Agc3RhdGUuXG5cdFx0XHRcdFx0XHRpZiAoICd0ZW1wbGF0ZS1leHByZXNzaW9uJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzU2lnbmlmaWNhbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggIS9cXHMvLnRlc3QoIGN1cnJlbnQgKSApIHtcblx0XHRcdFx0XHRcdGlmICggc2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnRcblx0XHRcdFx0XHRcdFx0JiYgL1tBLVphLXpfJF0vLnRlc3QoIGN1cnJlbnQgKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHdvcmRCZWZvcmVQcmV2aW91cyA9IHByZXZpb3VzU2lnbmlmaWNhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHByZXZpb3VzU2lnbmlmaWNhbnQgPSB1cGRhdGVQcmV2aW91c1NpZ25pZmljYW50KFxuXHRcdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50LFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICdcXCcnID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdGxpdGVyYWxSZXR1cm5TdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcdHN0YXRlID0gJ3NpbmdsZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoICdcIicgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0bGl0ZXJhbFJldHVyblN0YXRlID0gc3RhdGU7XG5cdFx0XHRcdFx0c3RhdGUgPSAnZG91YmxlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggJ2AnID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdHRlbXBsYXRlUmV0dXJuU3RhdGVzLnB1c2goIHN0YXRlICk7XG5cdFx0XHRcdFx0c3RhdGUgPSAndGVtcGxhdGUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhL1xccy8udGVzdCggY3VycmVudCApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudFxuXHRcdFx0XHRcdFx0XHQmJiAvW0EtWmEtel8kXS8udGVzdCggY3VycmVudCApXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0d29yZEJlZm9yZVByZXZpb3VzID0gcHJldmlvdXNTaWduaWZpY2FudDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9IHVwZGF0ZVByZXZpb3VzU2lnbmlmaWNhbnQoXG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzU2lnbmlmaWNhbnQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50LFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0c2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBub3JtYWxpemVkO1xuXHRcdFx0fSxcblx0XHRcdGdldFN0YXRlKCkge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9LFxuXHRcdFx0aXNFc2NhcGVkKCkge1xuXHRcdFx0XHRyZXR1cm4gZXNjYXBlZDtcblx0XHRcdH0sXG5cdFx0XHRpc0luUmVnZXhDaGFyYWN0ZXJDbGFzcygpIHtcblx0XHRcdFx0cmV0dXJuIHJlZ2V4Q2hhcmFjdGVyQ2xhc3M7XG5cdFx0XHR9LFxuXHRcdH07XG59XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1kZXB0aCwgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVNYWNyb0ZvclN0cmluZ0xpdGVyYWwoIHJlc3VsdCwgc3RhdGUsIGhhc1BlbmRpbmdFc2NhcGUgPSBmYWxzZSApIHtcblx0Y29uc3Qgc3RyaW5nUmVzdWx0ID0gU3RyaW5nKCByZXN1bHQgKTtcblxuXHRpZiAoIGhhc1BlbmRpbmdFc2NhcGUgKSB7XG5cdFx0aWYgKCAhc3RyaW5nUmVzdWx0Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAnXFxuJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ3UnICsgc3RyaW5nUmVzdWx0LmNoYXJDb2RlQXQoIDAgKS50b1N0cmluZyggMTYgKS5wYWRTdGFydCggNCwgJzAnIClcblx0XHRcdCsgZXNjYXBlTWFjcm9Gb3JTdHJpbmdMaXRlcmFsKCBzdHJpbmdSZXN1bHQuc2xpY2UoIDEgKSwgc3RhdGUgKTtcblx0fVxuXG5cdGxldCBlc2NhcGVkID0gSlNPTi5zdHJpbmdpZnkoIHN0cmluZ1Jlc3VsdCApLnNsaWNlKCAxLCAtMSApO1xuXG5cdGlmICggJ3NpbmdsZScgPT09IHN0YXRlICkge1xuXHRcdGVzY2FwZWQgPSBlc2NhcGVkLnJlcGxhY2UoIC8nL2csIFwiXFxcXCdcIiApO1xuXHR9XG5cblx0aWYgKCAndGVtcGxhdGUnID09PSBzdGF0ZSApIHtcblx0XHQvLyBFc2NhcGUgZXZlcnkgYCRgLCBub3QganVzdCBgJHtgIHBhaXJzIGZvdW5kIGluc2lkZSB0aGlzIG9uZSBtYWNyb1xuXHRcdC8vIHZhbHVlOiBhIHZhbHVlIGVuZGluZyBpbiBgJGAgd291bGQgb3RoZXJ3aXNlIHJlY29tYmluZSB3aXRoIGFcblx0XHQvLyBge2AgZnJvbSB0aGUgaW1tZWRpYXRlbHkgZm9sbG93aW5nICpzdGF0aWMqIGZvcm11bGEgdGV4dCBpbnRvIGFcblx0XHQvLyBsaXZlIHRlbXBsYXRlLWV4cHJlc3Npb24gb3BlbmVyLlxuXHRcdGVzY2FwZWQgPSBlc2NhcGVkXG5cdFx0XHQucmVwbGFjZSggL2AvZywgJ1xcXFxgJyApXG5cdFx0XHQucmVwbGFjZSggL1xcJC9nLCAnXFxcXCQnICk7XG5cdH1cblxuXHRyZXR1cm4gZXNjYXBlZDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlTWFjcm9Gb3JIdG1sKCByZXN1bHQgKSB7XG5cdHJldHVybiBlc2NhcGVIdG1sKCByZXN1bHQgKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlTWFjcm9Gb3JSZWdleExpdGVyYWwoIHJlc3VsdCwgaGFzUGVuZGluZ0VzY2FwZSA9IGZhbHNlLCBpbkNoYXJhY3RlckNsYXNzID0gZmFsc2UgKSB7XG5cdGNvbnN0IHN0cmluZ1Jlc3VsdCA9IFN0cmluZyggcmVzdWx0ICk7XG5cblx0aWYgKCBoYXNQZW5kaW5nRXNjYXBlICkge1xuXHRcdGlmICggIXN0cmluZ1Jlc3VsdC5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gJ3UwMDAwJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ3UnICsgc3RyaW5nUmVzdWx0LmNoYXJDb2RlQXQoIDAgKS50b1N0cmluZyggMTYgKS5wYWRTdGFydCggNCwgJzAnIClcblx0XHRcdCsgZXNjYXBlTWFjcm9Gb3JSZWdleExpdGVyYWwoIHN0cmluZ1Jlc3VsdC5zbGljZSggMSApLCBmYWxzZSwgaW5DaGFyYWN0ZXJDbGFzcyApO1xuXHR9XG5cblx0Ly8gSW5zaWRlIGEgY2hhcmFjdGVyIGNsYXNzIChgWy4uLl1gKSwgYC1gIGRlbm90ZXMgYSByYW5nZSAoZS5nLiBgYS16YClcblx0Ly8gcmF0aGVyIHRoYW4gYSBsaXRlcmFsIGNoYXJhY3RlciwgYW5kIGBdYC9gXmAgY2FycnkgY2xhc3Mtc3BlY2lmaWNcblx0Ly8gbWVhbmluZyB0aGF0IHRoZSBvdXRzaWRlLWNsYXNzIGVzY2FwZSBzZXQgYmVsb3cgZG9lc24ndCBjb3Zlci5cblx0Y29uc3QgZXNjYXBlZCA9IGluQ2hhcmFjdGVyQ2xhc3Ncblx0XHQ/IHN0cmluZ1Jlc3VsdC5yZXBsYWNlKCAvW1xcXFxeXFxdLV0vZywgJ1xcXFwkJicgKVxuXHRcdDogc3RyaW5nUmVzdWx0LnJlcGxhY2UoIC9bXFxcXF4kLiorPygpW1xcXXt9fC9dL2csICdcXFxcJCYnICk7XG5cblx0cmV0dXJuIGVzY2FwZWRcblx0XHQucmVwbGFjZSggL1xcci9nLCAnXFxcXHInIClcblx0XHQucmVwbGFjZSggL1xcbi9nLCAnXFxcXG4nIClcblx0XHQucmVwbGFjZSggL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcgKVxuXHRcdC5yZXBsYWNlKCAvXFx1MjAyOS9nLCAnXFxcXHUyMDI5JyApO1xufVxuXG5cbmZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsRnJvbU5vZGUobm9kZSkge1xuXHRpZiAoIW5vZGUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShub2RlLnNlbGVjdGVkT3B0aW9ucyB8fCBbXSlcblx0XHRcdC5tYXAob3B0aW9uID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblx0aWYgKFxuXHRcdChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSAmJlxuXHRcdCFub2RlLmNoZWNrZWRcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmIChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBub2RlLmNsb3Nlc3QoJ2xhYmVsJyk7XG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblx0XHRyZXR1cm4gU3RyaW5nKFxuXHRcdFx0dGV4dE5vZGU/LnRleHRDb250ZW50IHx8IGxhYmVsLnRleHRDb250ZW50IHx8IG5vZGUudmFsdWUgfHwgJydcblx0XHQpLnRyaW0oKTtcblx0fVxuXHRyZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0ZWRJbnB1dE9wdGlvbkxhYmVsKHJlbGF0ZWRJbnB1dCkge1xuXHRjb25zdCBsYWJlbHMgPSBBcnJheS5mcm9tKHJlbGF0ZWRJbnB1dC5ub2RlcyB8fCBbXSlcblx0XHQubWFwKGdldE9wdGlvbkxhYmVsRnJvbU5vZGUpXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblx0cmV0dXJuIGxhYmVscy5sZW5ndGhcblx0XHQ/IGxhYmVscy5qb2luKCcsICcpXG5cdFx0OiByZWxhdGVkSW5wdXQudmFsdWUuY3VycmVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gcm9vdCAgICB7SW5wdXREYXRhfE9ic2VydmFibGV9XG4gKiBAcGFyYW0gb3B0aW9ucyB7e2ZvcmNlRnVuY3Rpb246IGJvb2xlYW59fVxuICovXG5mdW5jdGlvbiBDYWxjdWxhdGVkRm9ybXVsYShcblx0cm9vdCxcblx0b3B0aW9ucyA9IHt9LFxuKSB7XG5cdHRoaXMucGFydHMgICAgICAgID0gW107XG5cdHRoaXMucmVsYXRlZCAgICAgID0gW107XG5cdHRoaXMucmVsYXRlZEF0dHJzID0gW107XG5cdHRoaXMucmVnZXhwICAgICAgID0gLyUoW1xcd1xcLV0uKj9cXFM/KSUvZztcblx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcblxuXHRjb25zdCB7IGZvcmNlRnVuY3Rpb24gPSBmYWxzZSB9ID0gb3B0aW9ucztcblxuXHR0aGlzLmZvcmNlRnVuY3Rpb24gPSBmb3JjZUZ1bmN0aW9uO1xuXG5cdGlmICggcm9vdCBpbnN0YW5jZW9mIElucHV0RGF0YSApIHtcblx0XHR0aGlzLmlucHV0ID0gcm9vdDtcblx0fVxuXG5cdHRoaXMucm9vdCA9IHRoaXMuaW5wdXQ/LnJvb3QgPz8gcm9vdDtcbn1cblxuQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlID0ge1xuXHQvLyByYXcgdmFsdWVcblx0Zm9ybXVsYTogbnVsbCxcblx0cGFydHM6IFtdLFxuXHRyZWxhdGVkOiBbXSxcblx0cmVsYXRlZEF0dHJzOiBbXSxcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRpbnB1dDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfE9ic2VydmFibGVSb3d9XG5cdCAqL1xuXHRyb290OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlZ0V4cH1cblx0ICovXG5cdHJlZ2V4cDogbnVsbCxcblx0Zm9yY2VGdW5jdGlvbjogZmFsc2UsXG5cdC8qKlxuXHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdCAqL1xuXHRzZXRSZXN1bHQ6ICgpID0+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdDYWxjdWxhdGVkRm9ybXVsYS5zZXRSZXN1bHQgaXMgbm90IHNldCEnICk7XG5cdH0sXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gIHJlbGF0ZWRJbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0cmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSB7XG5cdFx0cmV0dXJuIHJlbGF0ZWRJbnB1dC52YWx1ZS5jdXJyZW50O1xuXHR9LFxuXHRyZWxhdGVkTGFiZWxDYWxsYmFjayhyZWxhdGVkSW5wdXQpIHtcblx0XHRyZXR1cm4gZ2V0UmVsYXRlZElucHV0T3B0aW9uTGFiZWwocmVsYXRlZElucHV0KTtcblx0fSxcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKi9cblx0b2JzZXJ2ZSggdmFsdWUgKSB7XG5cblx0XHR0aGlzLmZvcm11bGEgPSB2YWx1ZTtcblxuXHRcdGlmICggIUFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCB2YWx1ZSApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFsdWUuZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCBpdGVtICk7XG5cdFx0fSApO1xuXHR9LFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHZhbHVlIHtTdHJpbmd9XG5cdCAqL1xuXHRvYnNlcnZlSXRlbSggdmFsdWUgKSB7XG5cblx0XHRsZXQgbWF0Y2g7XG5cdFx0bGV0IHByZXZJbmRleCA9IDA7XG5cblx0XHR2YWx1ZSArPSAnJztcblxuXHRcdHdoaWxlICggKFxuXHRcdFx0bWF0Y2ggPSB0aGlzLnJlZ2V4cC5leGVjKCB2YWx1ZSApXG5cdFx0KSAhPT0gbnVsbCApIHtcblx0XHRcdGNvbnN0IHBhcnQgPSB0aGlzLm9ic2VydmVNYWNybyggbWF0Y2hbIDEgXSApO1xuXG5cdFx0XHRpZiAoIDAgIT09IG1hdGNoLmluZGV4ICkge1xuXHRcdFx0XHR0aGlzLnBhcnRzLnB1c2goIHZhbHVlLnNsaWNlKCBwcmV2SW5kZXgsIG1hdGNoLmluZGV4ICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cHJldkluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsgMCBdLmxlbmd0aDtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gcGFydCApIHtcblx0XHRcdFx0dGhpcy5vbk1pc3NpbmdQYXJ0KCBtYXRjaFsgMCBdICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5wYXJ0cy5wdXNoKCBwYXJ0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gc2F2ZSBsYXN0IHBhcnRcblx0XHRpZiAoIHByZXZJbmRleCA9PT0gdmFsdWUubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFydHMucHVzaCggdmFsdWUuc2xpY2UoIHByZXZJbmRleCApICk7XG5cblx0XHRpZiAoIDEgPT09IHRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5wYXJ0cyA9IFtdO1xuXHRcdH1cblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dE1hdGNoIHtTdHJpbmd9XG5cdCAqL1xuXHRvbk1pc3NpbmdQYXJ0KCBpbnB1dE1hdGNoICkge1xuXHRcdHRoaXMucGFydHMucHVzaCggaW5wdXRNYXRjaCApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIGZpZWxkTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0aXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApIHtcblxuXHRcdGNvbnN0IGlzRmllbGROb2RlID0gdGhpcy5yb290LmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xuXG5cdFx0aWYgKCB1bmRlZmluZWQgPT09IGlzRmllbGROb2RlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgbm9kZSBleGlzdHMgaW4gdGhlIHJvb3ROb2RlLlxuXHRcdCAqIElmIHRoZSBub2RlIGRvZXMgbm90IGV4aXN0LCBhbmFseXplIHRoZSBmb3JtdWxhIHRvIGRldGVybWluZSBhbiBhZGp1c3RlZCB2YWx1ZVxuXHRcdCAqIGJhc2VkIG9uIHRoZSBvcGVyYXRvcnMgc3Vycm91bmRpbmcgdGhlIHBsYWNlaG9sZGVyLlxuXHRcdCAqIEBzaW5jZSAzLjQuNVxuXHRcdCAqXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTE3ODZcblx0XHQgKi9cblx0XHRsZXQgZXhpc3ROb2RlID1cblx0XHRcdHRoaXMucm9vdC5yb290Tm9kZVsgZmllbGROYW1lIF1cblx0XHRcdHx8IHRoaXMucm9vdC5yb290Tm9kZVsgZmllbGROYW1lICsgJ1tdJyBdXG5cdFx0XHR8fCB0aGlzLnJvb3Qucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWZpZWxkLW5hbWU9XCInICsgZmllbGROYW1lICsgJ1wiXScgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZW4gd2UgY2FsbCBxdWVyeVNlbGVjdG9yQWxsIGl0IHJldHVybnMgZW1wdHkgTm9kZUxpc3QgYXJyYXkgaWYgdGhlIGVsZW1lbnQgbm90IGZvdW5kLCBzbyB3ZSBuZWVkIHRvIHJlc2V0IGl0XG5cdFx0ICovXG5cdFx0aWYgKCBleGlzdE5vZGUgJiYgMCA9PT0gZXhpc3ROb2RlLmxlbmd0aCApIHtcblx0XHRcdGV4aXN0Tm9kZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNDU0NFxuXHRcdCAqL1xuXHRcdGlmICggdW5kZWZpbmVkID09PSBleGlzdE5vZGUgKSB7XG5cdFx0XHRjb25zdCBlc2MgPSBzID0+IHMucmVwbGFjZSgvKFtcXFxcXiQqKz8uKCl8e31cXFtcXF1dKS9nLCAnXFxcXCQxJyk7XG5cdFx0XHRjb25zdCBmID0gZXNjKCBmaWVsZE5hbWUgKTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0b3IgPVxuXHRcdFx0XHRgW25hbWUkPVwiWyR7Zn1dXCJdLGAgK1xuXHRcdFx0XHRgW25hbWUkPVwiWyR7Zn1dW11cIl0sYCArXG5cdFx0XHRcdGBbbmFtZSo9XCJbJHtmfV1bXCJdYDtcblxuXHRcdFx0Y29uc3QgZm91bmQgPSB0aGlzLnJvb3Qucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcblx0XHRcdGlmICggZm91bmQgJiYgZm91bmQubGVuZ3RoICkge1xuXHRcdFx0XHRleGlzdE5vZGUgPSBmb3VuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAc2VlICAgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEzNzMwXG5cdFx0ICogQHNpbmNlIDMuNC41LjFcblx0XHQgKi9cblx0XHRleGlzdE5vZGUgPSB3cEZpbHRlcnMoXG5cdFx0XHQnamV0LmZiLmZvcm11bGEubm9kZS5leGlzdHMnLFxuXHRcdFx0ZXhpc3ROb2RlLFxuXHRcdFx0ZmllbGROYW1lLCBcblx0XHRcdHRoaXNcblx0XHQpO1xuXG5cdFx0cmV0dXJuIGV4aXN0Tm9kZTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGN1cnJlbnQge1N0cmluZ31cblx0ICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICopfCp9XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRvYnNlcnZlTWFjcm8oIGN1cnJlbnQgKSB7XG5cdFx0aWYgKCBudWxsID09PSB0aGlzLmZvcm11bGEgKSB7XG5cdFx0XHR0aGlzLmZvcm11bGEgPSBjdXJyZW50O1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLXVudXNlZC12YXJzLWJlZm9yZS1yZXR1cm5cblx0XHRjb25zdCBbIG5hbWUsIC4uLmZpbHRlcnMgXSA9IGN1cnJlbnQuc3BsaXQoICd8JyApO1xuXHRcdGNvbnN0IHBhcnNlZE5hbWUgICAgICAgICAgID0gbmFtZS5tYXRjaCggL1tcXHdcXC06XSsvZyApO1xuXG5cblxuXHRcdGlmICggIXBhcnNlZE5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0bGV0IFsgZmllbGROYW1lLCAuLi5wYXJhbXMgXSA9IHBhcnNlZE5hbWU7XG5cblx0XHRpZiAobmFtZS5pbmNsdWRlcygnOjonKSkge1xuXHRcdFx0Y29uc3QgW3Bvc3NpYmxlRmllbGROYW1lLCAuLi5wb3NzaWJsZVBhcmFtc10gPSBuYW1lLnNwbGl0KCc6OicpO1xuXHRcdFx0aWYgKHRoaXMucm9vdC5nZXRJbnB1dChwb3NzaWJsZUZpZWxkTmFtZSkpIHtcblx0XHRcdFx0ZmllbGROYW1lID0gcG9zc2libGVGaWVsZE5hbWU7XG5cdFx0XHRcdHBhcmFtcyA9IHBvc3NpYmxlUGFyYW1zO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBzZWUgICBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTM3MzBcblx0XHQgKiBAc2luY2UgMy40LjUuMSAobW92ZWQgdG8gYSBtZXRob2QgYW5kIGFkZGVkIGFkZGl0aW9uYWwgY2hlY2tzKVxuXHRcdCAqL1xuXHRcdGNvbnN0IGV4aXN0Tm9kZSA9IHRoaXMuaXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApO1xuXG5cblx0XHRpZiAoIGV4aXN0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoIGAlJHtmaWVsZE5hbWV9JWAsICdnJyApO1xuXG5cdFx0XHRsZXQgYWRqdXN0ZWRWYWx1ZSAgID0gMDtcblx0XHRcdGxldCBhZGp1c3RlZEZvcm11bGEgPSB0aGlzLmZvcm11bGE7XG5cdFx0XHRsZXQgbWF0Y2g7XG5cblx0XHRcdHdoaWxlICggbnVsbCAhPT0gKCBtYXRjaCA9IHJlZ2V4LmV4ZWMoIHRoaXMuZm9ybXVsYSApICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYmVmb3JlID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCAtIDEgXTtcblx0XHRcdFx0Y29uc3QgYWZ0ZXIgID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCBdO1xuXG5cdFx0XHRcdGlmICggJyonID09PSBiZWZvcmUgfHwgJy8nID09PSBiZWZvcmUgfHwgJyonID09PSBhZnRlciB8fCAnLycgPT09IGFmdGVyICkge1xuXHRcdFx0XHRcdGlmICggJy8nID09PSBiZWZvcmUgfHwgKCAnKicgPT09IGJlZm9yZSAmJiAnKicgPT09IGFmdGVyICkgKSB7XG5cdFx0XHRcdFx0XHRhZGp1c3RlZFZhbHVlID0gMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhZGp1c3RlZEZvcm11bGEgPSBhZGp1c3RlZEZvcm11bGEucmVwbGFjZSggbWF0Y2hbMF0sIGFkanVzdGVkVmFsdWUgKTtcblxuXHRcdFx0dGhpcy5mb3JtdWxhID0gYWRqdXN0ZWRGb3JtdWxhO1xuXG5cdFx0XHRyZXR1cm4gYWRqdXN0ZWRWYWx1ZTtcblx0XHR9XG5cblx0XHRjb25zdCByZWxhdGVkSW5wdXQgPSBmaWVsZE5hbWUgIT09ICd0aGlzJ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yb290LmdldElucHV0KCBmaWVsZE5hbWUgKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dDtcblxuXHRcdGlmICggIXJlbGF0ZWRJbnB1dCAmJiAhZmllbGROYW1lLmluY2x1ZGVzKCAnOjonICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tdW51c2VkLXZhcnMtYmVmb3JlLXJldHVyblxuXHRcdGNvbnN0IGZpbHRlcnNMaXN0ID0gZ2V0RmlsdGVycyggZmlsdGVycyApO1xuXG5cdFx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRcdGNvbnN0IGN1c3RvbVZhbHVlID0gd3BGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmN1c3RvbS5mb3JtdWxhLm1hY3JvJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdGZpZWxkTmFtZSxcblx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlKCksIGZpbHRlcnNMaXN0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlLCBmaWx0ZXJzTGlzdCApO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMucmVsYXRlZC5pbmNsdWRlcyggcmVsYXRlZElucHV0Lm5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xuXG5cdFx0XHR0aGlzLndhdGNoZXJzLnB1c2goXG5cdFx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoICFwYXJhbXM/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdFx0XHRcdHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSxcblx0XHRcdFx0ZmlsdGVyc0xpc3QsXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFsgYXR0ck5hbWUgXSA9IHBhcmFtcztcblxuXHRcdGlmICgnbGFiZWwnID09PSBhdHRyTmFtZSkge1xuXHRcdFx0cmV0dXJuICgpID0+IGFwcGx5RmlsdGVycyhcblx0XHRcdFx0dGhpcy5yZWxhdGVkTGFiZWxDYWxsYmFjayhyZWxhdGVkSW5wdXQpLFxuXHRcdFx0XHRmaWx0ZXJzTGlzdCxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhcmVsYXRlZElucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCBhdHRyTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7QmFzZUh0bWxBdHRyfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGh0bWxBdHRyID0gcmVsYXRlZElucHV0LmF0dHJzWyBhdHRyTmFtZSBdO1xuXG5cdFx0aWYgKCAhdGhpcy5yZWxhdGVkQXR0cnMuaW5jbHVkZXMoIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZEF0dHJzLnB1c2goIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKTtcblxuXHRcdFx0dGhpcy53YXRjaGVycy5wdXNoKFxuXHRcdFx0XHRodG1sQXR0ci52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKCBodG1sQXR0ci52YWx1ZS5jdXJyZW50LCBmaWx0ZXJzTGlzdCApO1xuXHR9LFxuXHQvKipcblx0ICogTWFwcyBgdGhpcy5wYXJ0c2AgaW50byB0aGUgam9pbmVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGVcblx0ICogZm9ybXVsYS4gU2hhcmVkIGJ5IGNhbGxlcnMgdGhhdCBvbmx5IG5lZWQgdGhlIHN1YnN0aXR1dGVkIHRleHRcblx0ICogKGUuZy4gSFRNTCBtYWNyb3MsIHJlc3RyaWN0aW9uIG1lc3NhZ2VzKSBhbmQgYnkgY2FsY3VsYXRlKCksIHdoaWNoXG5cdCAqIGFkZGl0aW9uYWxseSBoYXMgdG8gbWFrZSB0aGUgcmVzdWx0IHNhZmUgdG8gcnVuIHRocm91Z2hcblx0ICogYG5ldyBGdW5jdGlvbigpYCAtIHNlZSBjYWxjdWxhdGVFdmFsU3RyaW5nKCkgZm9yIHRoYXQgY29uY2Vybi5cblx0ICpcblx0ICogYG1hcFJlc3VsdGAgbWFwcyBhIHNpbmdsZSBzdWJzdGl0dXRlZCAoZnVuY3Rpb24tZGVyaXZlZCkgcGFydCdzXG5cdCAqIHJlc3VsdCBiZWZvcmUgaXQgaXMgam9pbmVkIGludG8gdGhlIHN0cmluZy4gYG1hcFN0YXRpY2AgcmVjZWl2ZXMgdGhlXG5cdCAqIHRydXN0ZWQgZm9ybXVsYSB0ZXh0IGJldHdlZW4gbWFjcm9zLlxuXHQgKlxuXHQgKiBAcGFyYW0gIG1hcFJlc3VsdCB7RnVuY3Rpb259XG5cdCAqIEBwYXJhbSAgbWFwU3RhdGljIHtGdW5jdGlvbn1cblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0bWFwUGFydHMoIG1hcFJlc3VsdCwgbWFwU3RhdGljID0gY3VycmVudCA9PiBjdXJyZW50ICkge1xuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybXVsYTtcblx0XHR9XG5cblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBhcHBseUZpbHRlcnM6IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgPSBmYWxzZSxcblx0XHQgICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XG5cblx0XHRyZXR1cm4gdGhpcy5wYXJ0cy5tYXAoIGN1cnJlbnQgPT4ge1xuXHRcdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY3VycmVudCApIHtcblxuXHRcdFx0XHRpZiAoICF0aGlzLmlucHV0Py5ub2Rlc1xuXHRcdFx0XHRcdHx8IGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzXG5cdFx0XHRcdFx0fHwgJ3N0cmluZycgIT09IHR5cGVvZiBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBtYXBTdGF0aWMoIGN1cnJlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN1cnJlbnQgPSB3cEZpbHRlcnMoXG5cdFx0XHRcdFx0J2pldC5mYi5vbkNhbGN1bGF0ZS5wYXJ0Jyxcblx0XHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0cmV0dXJuIG1hcFN0YXRpYyggZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcblx0XHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1mb3JtdWxhLWJlZm9yZS12YWx1ZScsXG5cdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMuaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdFx0XHQpICk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHQgPSBjdXJyZW50KCk7XG5cblx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRSZXN1bHQgPSAoXG5cdFx0XHRcdCAgICAgICBudWxsID09PSByZXN1bHQgfHxcblx0XHRcdFx0ICAgICAgIHVuZGVmaW5lZCA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICAnJyA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICBOdW1iZXIuaXNOYU4oIHJlc3VsdCApXG5cdFx0XHQgICAgICAgKSA/IHRoaXMuZW1wdHlWYWx1ZSgpIDogcmVzdWx0O1xuXG5cdFx0XHRyZXR1cm4gbWFwUmVzdWx0KCBub3JtYWxpemVkUmVzdWx0ICk7XG5cdFx0fSApLmpvaW4oICcnICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBVc2VkIGZvciByZXN0cmljdGlvbi92YWxpZGF0aW9uIG1lc3NhZ2VzIHRoYXQgYXJlIHJlbmRlcmVkIHZpYVxuXHQgKiBgaW5uZXJIVE1MYCAoc2VlIEFkdmFuY2VkUmVzdHJpY3Rpb24uanMpLiBTdWJzdGl0dXRlZCBtYWNybyB2YWx1ZXNcblx0ICogYXJlIEhUTUwtZXNjYXBlZCBzbyBhIG1hbGljaW91cyBmaWVsZCB2YWx1ZSByZWZlcmVuY2VkIGluIGFcblx0ICogdmFsaWRhdGlvbiBtZXNzYWdlIGNhbid0IGluamVjdCBsaXZlIG1hcmt1cDsgdGhlIHRydXN0ZWQgc3RhdGljXG5cdCAqIG1lc3NhZ2UgdGV4dCAoYXV0aG9yLWF1dGhvcmVkLCBtYXkgY29udGFpbiBpbnRlbnRpb25hbCBtYXJrdXApIGlzXG5cdCAqIGxlZnQgdW50b3VjaGVkLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyIChSZWZsZWN0ZWQgWFNTIHZpYSBDYWxjdWxhdGVkIEZpZWxkKVxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRjYWxjdWxhdGVTdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwUGFydHMoIHJlc3VsdCA9PiBlc2NhcGVNYWNyb0Zvckh0bWwoIHJlc3VsdCApICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBCdWlsZHMgdGhlIHN0cmluZyB0aGF0IGlzIGhhbmRlZCB0byBgbmV3IEZ1bmN0aW9uKClgIGluIGNhbGN1bGF0ZSgpLlxuXHQgKiBFdmVyeSBzdWJzdGl0dXRlZCBmaWVsZCB2YWx1ZSAodGhlIGBmdW5jdGlvbmAtYnJhbmNoIHJlc3VsdHMgaW5cblx0ICogbWFwUGFydHMoKSkgbXVzdCBuZXZlciBiZSBhYmxlIHRvIGluamVjdCByYXcgSlMgc3ludGF4IGludG8gdGhhdFxuXHQgKiBzdHJpbmcuXG5cdCAqXG5cdCAqIEEgdmFsdWUgdGhhdCByZXByZXNlbnRzIGEgZmluaXRlIG51bWJlciAoZWl0aGVyIGFscmVhZHkgYSBudW1iZXIsXG5cdCAqIG9yIGEgbnVtZXJpYyBzdHJpbmcgc3VjaCBhcyBhIHJlbGF0ZWQgdGV4dCBmaWVsZCdzIHJhdyB2YWx1ZSkgaXNcblx0ICogZW1pdHRlZCBhcyBhIGJhcmUgbnVtZXJpYyBsaXRlcmFsLCBzbyBleGlzdGluZyBudW1lcmljIGZvcm11bGFzXG5cdCAqIChgJWElICsgJWIlYCwgYCVhJSAqICViJWAsIOKApikga2VlcCBkb2luZyByZWFsIGFyaXRobWV0aWMgZXhhY3RseSBhc1xuXHQgKiBiZWZvcmUuIEFueXRoaW5nIGVsc2UgKGUuZy4gb3B0aW9uIGxhYmVscyBpbiBcImFzIFN0cmluZ1wiIG1vZGUsIG9yXG5cdCAqIGFyYml0cmFyeSB0ZXh0IGNvbWluZyBmcm9tIGFuIHVuc2FuaXRpemVkIHByZXNldCkgaXMgZW1pdHRlZCBhcyBhXG5cdCAqIEpTT04tcXVvdGVkIHN0cmluZyBsaXRlcmFsLCBzbyBpdCBjYW4gb25seSBldmVyIGJlIGV2YWx1YXRlZCBhc1xuXHQgKiBpbmVydCBzdHJpbmcgZGF0YSAtIG5ldmVyIGFzIGV4ZWN1dGFibGUgSlMgLSByZWdhcmRsZXNzIG9mIGl0c1xuXHQgKiBjb250ZW50cy5cblx0ICpcblx0ICogU3RhdGljIGZvcm11bGEgdGV4dCBpcyBwcmVzZXJ2ZWQgZXhjZXB0IGZvciBwaHlzaWNhbCBsaW5lIGJyZWFrcyBpbnNpZGVcblx0ICogcXVvdGVkIGxpdGVyYWxzLCB3aGljaCBhcmUgbm9ybWFsaXplZCB0byBlc2NhcGVkIGxpbmUgYnJlYWtzIGJlZm9yZSB0aGVcblx0ICogZm9ybXVsYSBpcyBldmFsdWF0ZWQuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIgKFJlZmxlY3RlZCBYU1MgdmlhIENhbGN1bGF0ZWQgRmllbGQpXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGNhbGN1bGF0ZUV2YWxTdHJpbmcoKSB7XG5cdFx0Y29uc3QgbGV4aWNhbENvbnRleHQgPSBjcmVhdGVGb3JtdWxhTGV4aWNhbENvbnRleHQoKTtcblxuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGxleGljYWxDb250ZXh0LmNvbnN1bWUoIHRoaXMuZm9ybXVsYSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm1hcFBhcnRzKCByZXN1bHQgPT4ge1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSBsZXhpY2FsQ29udGV4dC5nZXRTdGF0ZSgpO1xuXHRcdFx0Y29uc3QgaGFzUGVuZGluZ0VzY2FwZSA9IGxleGljYWxDb250ZXh0LmlzRXNjYXBlZCgpO1xuXHRcdFx0bGV0IHJlcGxhY2VtZW50O1xuXG5cdFx0XHRpZiAoIFsgJ3NpbmdsZScsICdkb3VibGUnLCAndGVtcGxhdGUnIF0uaW5jbHVkZXMoIHN0YXRlICkgKSB7XG5cdFx0XHRcdHJlcGxhY2VtZW50ID0gZXNjYXBlTWFjcm9Gb3JTdHJpbmdMaXRlcmFsKFxuXHRcdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRoYXNQZW5kaW5nRXNjYXBlLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICdyZWdleCcgPT09IHN0YXRlICkge1xuXHRcdFx0XHRyZXBsYWNlbWVudCA9IGVzY2FwZU1hY3JvRm9yUmVnZXhMaXRlcmFsKFxuXHRcdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0XHRoYXNQZW5kaW5nRXNjYXBlLFxuXHRcdFx0XHRcdGxleGljYWxDb250ZXh0LmlzSW5SZWdleENoYXJhY3RlckNsYXNzKCksXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggWyAnbGluZS1jb21tZW50JywgJ2Jsb2NrLWNvbW1lbnQnIF0uaW5jbHVkZXMoIHN0YXRlICkgKSB7XG5cdFx0XHRcdHJlcGxhY2VtZW50ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggJ2Jvb2xlYW4nID09PSB0eXBlb2YgcmVzdWx0ICkge1xuXHRcdFx0XHQvLyB0cnVlL2ZhbHNlIGFyZSBmaXhlZCBKUyBrZXl3b3JkcyB3aXRoIG5vIGF0dGFja2VyLWNvbnRyb2xsZWRcblx0XHRcdFx0Ly8gY29udGVudCwgc28gZW1pdHRpbmcgdGhlbSBiYXJlIGlzIGFsd2F5cyBzYWZlIC0gYW5kXG5cdFx0XHRcdC8vIG5lY2Vzc2FyeTogSlNPTi1xdW90aW5nIGEgYm9vbGVhbiByZXN1bHQgKGUuZy4gZnJvbSBhXG5cdFx0XHRcdC8vIGN1c3RvbSBmb3JtdWxhIG1hY3JvKSBhcyBcImZhbHNlXCIgd291bGQgbWFrZSBpdCBhXG5cdFx0XHRcdC8vIG5vbi1lbXB0eSwgdHJ1dGh5ICpzdHJpbmcqIGluIHRoZSBnZW5lcmF0ZWQgY29kZSwgZmxpcHBpbmdcblx0XHRcdFx0Ly8gdGhlIHJlc3VsdCBvZiBgJW1hY3JvJSA/IGEgOiBiYC5cblx0XHRcdFx0cmVwbGFjZW1lbnQgPSBTdHJpbmcoIHJlc3VsdCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICdudW1iZXInID09PSB0eXBlb2YgcmVzdWx0ICkge1xuXHRcdFx0XHRyZXBsYWNlbWVudCA9IE51bWJlci5pc0Zpbml0ZSggcmVzdWx0IClcblx0XHRcdFx0XHQvLyBPYmplY3QuaXMgZGlzdGluZ3Vpc2hlcyAtMCBmcm9tIDA7IFN0cmluZygtMCkgaXMgXCIwXCIsXG5cdFx0XHRcdFx0Ly8gc28gbmVnYXRpdmUgemVybyBuZWVkcyBhbiBleHBsaWNpdCBsaXRlcmFsIHRvIGF2b2lkXG5cdFx0XHRcdFx0Ly8gc2lsZW50bHkgZmxpcHBpbmcgdGhlIHNpZ24gb2YgdGhlIGZvcm11bGEncyByZXN1bHQuXG5cdFx0XHRcdFx0PyAoIE9iamVjdC5pcyggcmVzdWx0LCAtMCApID8gJy0wJyA6IFN0cmluZyggcmVzdWx0ICkgKVxuXHRcdFx0XHRcdC8vIEluZmluaXR5Ly1JbmZpbml0eS9OYU4gYXJlIHJlYWwgSlMgZ2xvYmFsIGlkZW50aWZpZXJzLFxuXHRcdFx0XHRcdC8vIG5vdCBzdHJpbmcgbGl0ZXJhbHMgLSBlbWl0dGluZyB0aGVtIEpTT04tcXVvdGVkIHdvdWxkXG5cdFx0XHRcdFx0Ly8gdHVybiBhcml0aG1ldGljIChgMSArIEluZmluaXR5YCkgaW50byBzdHJpbmdcblx0XHRcdFx0XHQvLyBjb25jYXRlbmF0aW9uIChgMSArIFwiSW5maW5pdHlcImApLlxuXHRcdFx0XHRcdDogU3RyaW5nKCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0cmltbWVkUmVzdWx0ID0gU3RyaW5nKCByZXN1bHQgKS50cmltKCk7XG5cblx0XHRcdFx0Ly8gUmVqZWN0IGEgbGVhZGluZy16ZXJvIGRlY2ltYWwgc3RyaW5nIChlLmcuIFwiMDEyM1wiKTogYXMgYVxuXHRcdFx0XHQvLyBiYXJlIHRva2VuIGl0IHdvdWxkIGJlIHBhcnNlZCBieSBuZXcgRnVuY3Rpb24oKSBhcyBhXG5cdFx0XHRcdC8vIGxlZ2FjeSBvY3RhbCBsaXRlcmFsICgwMTIzID09PSA4MyksIHNpbGVudGx5IGNvcnJ1cHRpbmdcblx0XHRcdFx0Ly8gdGhlIHZhbHVlIGluc3RlYWQgb2YgcHJlc2VydmluZyBpdC5cblx0XHRcdFx0Y29uc3QgaGFzTGVhZGluZ1plcm8gPSAvXlsrLV0/MFxcZC8udGVzdCggdHJpbW1lZFJlc3VsdCApO1xuXG5cdFx0XHRcdGNvbnN0IGlzTnVtZXJpY0xpdGVyYWwgPSAhaGFzTGVhZGluZ1plcm9cblx0XHRcdFx0XHQmJiBOVU1FUklDX0xJVEVSQUxfUkUudGVzdCggdHJpbW1lZFJlc3VsdCApXG5cdFx0XHRcdFx0JiYgTnVtYmVyLmlzRmluaXRlKCBwYXJzZUZsb2F0KCB0cmltbWVkUmVzdWx0ICkgKTtcblxuXHRcdFx0XHRpZiAoIGlzTnVtZXJpY0xpdGVyYWwgKSB7XG5cdFx0XHRcdFx0Ly8gRW1pdCB0aGUgYWxyZWFkeS12YWxpZGF0ZWQgbGl0ZXJhbCBhcy1pcyByYXRoZXIgdGhhblxuXHRcdFx0XHRcdC8vIGNhbm9uaWNhbGl6aW5nIGl0IHRocm91Z2ggTnVtYmVyKCkvcGFyc2VGbG9hdCgpOiB0aGF0XG5cdFx0XHRcdFx0Ly8gd291bGQgY29sbGFwc2UgYSBzaWduZWQgemVybyAoZS5nLiBcIi0wXCIpIHRvIFwiMFwiIGFuZFxuXHRcdFx0XHRcdC8vIGNoYW5nZSB0aGUgZm9ybXVsYSdzIGFyaXRobWV0aWMgcmVzdWx0LlxuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gdHJpbW1lZFJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggJ3RydWUnID09PSB0cmltbWVkUmVzdWx0IHx8ICdmYWxzZScgPT09IHRyaW1tZWRSZXN1bHQgKSB7XG5cdFx0XHRcdFx0Ly8gQSBmaWVsZCB3aG9zZSByYXcgdmFsdWUgaXMgbGl0ZXJhbGx5IHRoZSB0ZXh0IFwidHJ1ZVwiL1xuXHRcdFx0XHRcdC8vIFwiZmFsc2VcIiAoZS5nLiBhIHNlbGVjdC9yYWRpby9jaGVja2JveCBvcHRpb24sIG9yIGFcblx0XHRcdFx0XHQvLyBwcmVzZXQtcG9wdWxhdGVkIHRleHQgZmllbGQgbWlycm9yaW5nIGEgYm9vbGVhbikgbmVlZHNcblx0XHRcdFx0XHQvLyB0byBrZWVwIGJlaGF2aW5nIGxpa2UgdGhlIGJvb2xlYW4gaXQgcmVwcmVzZW50cyBpblxuXHRcdFx0XHRcdC8vIGNvZGUgcG9zaXRpb24gKGAlZmllbGQlID8gYSA6IGJgKSwgc2FtZSBhcyBhbiBhY3R1YWxcblx0XHRcdFx0XHQvLyBib29sZWFuIG1hY3JvIHJlc3VsdCBqdXN0IGFib3ZlLiBFbWl0dGluZyBpdFxuXHRcdFx0XHRcdC8vIEpTT04tcXVvdGVkIHdvdWxkIG1ha2UgaXQgYSBub24tZW1wdHksIGFsd2F5cy10cnV0aHlcblx0XHRcdFx0XHQvLyAqc3RyaW5nKiBpbnN0ZWFkLCBzaWxlbnRseSBmbGlwcGluZyBldmVyeSBzdWNoXG5cdFx0XHRcdFx0Ly8gY29uZGl0aW9uLiBgdHJpbW1lZFJlc3VsdGAgaXMgb25lIG9mIGV4YWN0bHkgdHdvIGZpeGVkXG5cdFx0XHRcdFx0Ly8gbGl0ZXJhbCB3b3JkcyBoZXJlLCBzbyB0aGlzIGlzIGFsd2F5cyBzYWZlIHRvIGVtaXRcblx0XHRcdFx0XHQvLyBiYXJlIC0gaXQgY2FuIG5ldmVyIGNhcnJ5IGF0dGFja2VyLWNvbnRyb2xsZWQgc3ludGF4LlxuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gdHJpbW1lZFJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXBsYWNlbWVudCA9IEpTT04uc3RyaW5naWZ5KCBTdHJpbmcoIHJlc3VsdCApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV4aWNhbENvbnRleHQuY29uc3VtZSggcmVwbGFjZW1lbnQgKTtcblxuXHRcdFx0cmV0dXJuIHJlcGxhY2VtZW50O1xuXHRcdH0sIGN1cnJlbnQgPT4gbGV4aWNhbENvbnRleHQuY29uc3VtZSggY3VycmVudCApICk7XG5cdH0sXG5cdGVtcHR5VmFsdWUoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9LFxuXHRjYWxjdWxhdGUoKSB7XG5cdFx0aWYgKCAhdGhpcy5wYXJ0cy5sZW5ndGggJiYgIXRoaXMuZm9yY2VGdW5jdGlvbiApIHtcblx0XHRcdHJldHVybiB0aGlzLmZvcm11bGE7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZm9ybXVsYSA9IHRoaXMuY2FsY3VsYXRlRXZhbFN0cmluZygpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5ldyBGdW5jdGlvbiggJ3JldHVybiAnICsgZm9ybXVsYSApXG5cdFx0XHQpKCk7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHQvL2NvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHR0aGlzLnNob3dFcnJvciggZm9ybXVsYSApO1xuXHRcdH1cblxuXHR9LFxuXHRjbGVhcldhdGNoZXJzKCkge1xuXHRcdHRoaXMud2F0Y2hlcnMuZm9yRWFjaChcblx0XHRcdGN1cnJlbnQgPT4gJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnQgJiYgY3VycmVudCgpLFxuXHRcdCk7XG5cdFx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcblx0XHR0aGlzLnJlbGF0ZWRBdHRycyA9IFtdO1xuXHRcdHRoaXMucmVsYXRlZCAgICAgID0gW107XG5cdH0sXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0c2hvd0Vycm9yKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZ3JvdXAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J0pldEZvcm1CdWlsZGVyOiBZb3UgaGF2ZSBpbnZhbGlkIGNhbGN1bGF0ZWQgZm9ybXVsYScsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdHRoaXMuc2hvd0Vycm9yRGV0YWlscyggZm9ybXVsYSApO1xuXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHR9LFxuXHRzaG93RXJyb3JEZXRhaWxzKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBpbml0aWFsIGZvcm11bGFcblx0XHRcdFx0X18oICdJbml0aWFsOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHR0aGlzLmZvcm11bGEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGNvbXB1dGVkIGZvcm11bGFcblx0XHRcdFx0X18oICdDb21wdXRlZDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0Zm9ybXVsYSxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdGlmICggIXRoaXMuaW5wdXQgJiYgIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5pbnB1dCApIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdHNwcmludGYoXG5cdFx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gZmlsZWQgbmFtZVxuXHRcdFx0XHRcdF9fKCAnRmllbGQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdFx0dGhpcy5pbnB1dC5wYXRoLmpvaW4oICcuJyApLFxuXHRcdFx0XHQpLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5yb290LnBhcmVudC5maW5kSW5kZXgoIHRoaXMucm9vdCApO1xuXG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIHBhdGggdG8gY3VycmVudCBmaWVsZFxuXHRcdFx0XHRfXyggJ1Njb3BlOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0Li4udGhpcy5yb290LnBhcmVudC5wYXRoLFxuXHRcdFx0XHRcdC0xID09PSBpbmRleCA/ICcnIDogaW5kZXgsXG5cdFx0XHRcdF0uZmlsdGVyKCBCb29sZWFuICkuam9pbiggJy4nICksXG5cdFx0XHQpLFxuXHRcdCk7XG5cdH0sXG5cdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEZvcm11bGE7XG4iLCJmdW5jdGlvbiBhcHBseUZpbHRlcnMoIHZhbHVlLCBmaWx0ZXJzLCBjb250ZXh0ID0ge30gKSB7XG5cdGlmICggbnVsbCA9PT0gZmlsdGVycyB8fCAhZmlsdGVycz8ubGVuZ3RoICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGxldCBjYW5Vc2VSYXdSZXBlYXRlclZhbHVlID0gQm9vbGVhbiggY29udGV4dD8ucmF3UmVwZWF0ZXJWYWx1ZSApO1xuXG5cdGZvciAoIGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzICkge1xuXHRcdGNvbnN0IHNob3VsZFVzZVJhd1JlcGVhdGVyVmFsdWUgPSAoXG5cdFx0XHRjYW5Vc2VSYXdSZXBlYXRlclZhbHVlICYmXG5cdFx0XHRmYWxzZSA9PT0gZmlsdGVyPy5pc0NvcmVGaWx0ZXJcblx0XHQpO1xuXG5cdFx0dmFsdWUgPSBmaWx0ZXIuYXBwbHlXaXRoUHJvcHMoXG5cdFx0XHRzaG91bGRVc2VSYXdSZXBlYXRlclZhbHVlXG5cdFx0XHRcdD8gY29udGV4dC5yYXdSZXBlYXRlclZhbHVlXG5cdFx0XHRcdDogdmFsdWVcblx0XHQpO1xuXHRcdGNhblVzZVJhd1JlcGVhdGVyVmFsdWUgPSBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlGaWx0ZXJzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ3VycmVudERhdGUgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvQ3VycmVudERhdGUnO1xuaW1wb3J0IE1pbl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvTWluX0luX1NlYyc7XG5pbXBvcnQgTW9udGhfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL01vbnRoX0luX1NlYyc7XG5pbXBvcnQgSG91cl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvSG91cl9Jbl9TZWMnO1xuaW1wb3J0IERheV9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvRGF5X0luX1NlYyc7XG5pbXBvcnQgWWVhcl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvWWVhcl9Jbl9TZWMnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVyczogd3BBcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFN0YXRpY0Z1bmN0aW9ucyA9ICgpID0+IHdwQXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnN0YXRpYy5mdW5jdGlvbnMnLFxuXHRbXG5cdFx0Q3VycmVudERhdGUsXG5cdFx0TWluX0luX1NlYyxcblx0XHRNb250aF9Jbl9TZWMsXG5cdFx0SG91cl9Jbl9TZWMsXG5cdFx0RGF5X0luX1NlYyxcblx0XHRZZWFyX0luX1NlYyxcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUge0Jhc2VJbnRlcm5hbE1hY3JvW119XG4gKi9cbmxldCBzdGF0aWNGdW5jdGlvbnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIHNsdWdcbiAqIEByZXR1cm4ge2Jvb2xlYW58QmFzZUludGVybmFsTWFjcm99XG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uKCBzbHVnICkge1xuXHRpZiAoICFzdGF0aWNGdW5jdGlvbnMubGVuZ3RoICkge1xuXHRcdHN0YXRpY0Z1bmN0aW9ucyA9IGdldFN0YXRpY0Z1bmN0aW9ucygpO1xuXHR9XG5cblx0Zm9yICggY29uc3Qgc3RhdGljRnVuY3Rpb24gb2Ygc3RhdGljRnVuY3Rpb25zICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgc3RhdGljRnVuY3Rpb24oKTtcblxuXHRcdGlmICggY3VycmVudC5nZXRJZCgpICE9PSBzbHVnICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgcmVzdWx0ICAgIHtTdHJpbmd9XG4gKiBAcGFyYW0gIGZpZWxkTmFtZSB7U3RyaW5nfVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoQ29uc3ROYW1lc3BhY2UoXG5cdHJlc3VsdCxcblx0ZmllbGROYW1lLFxuKSB7XG5cdGlmICggIWZpZWxkTmFtZS5pbmNsdWRlcyggJ0NUOjonICkgKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRmaWVsZE5hbWUgPSBmaWVsZE5hbWUucmVwbGFjZSggJ0NUOjonLCAnJyApO1xuXG5cdGNvbnN0IHN0YXRpY0Z1bmMgPSBnZXRGdW5jdGlvbiggZmllbGROYW1lICk7XG5cblx0aWYgKCBmYWxzZSA9PT0gc3RhdGljRnVuYyApIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIHN0YXRpY0Z1bmMuZ2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF0dGFjaENvbnN0TmFtZXNwYWNlOyIsImZ1bmN0aW9uIEJhc2VJbnRlcm5hbE1hY3JvKCkge1xufVxuXG5CYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgPSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcblx0LyoqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdldElkICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXdyaXRlIHRoaXMgbWV0aG9kJyApO1xuXHR9LFxuXHRnZXRSZXN1bHQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJld3JpdGUgdGhpcyBtZXRob2QnICk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlSW50ZXJuYWxNYWNybzsiLCJpbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5cbmZ1bmN0aW9uIEN1cnJlbnREYXRlKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnQ3VycmVudERhdGUnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG5DdXJyZW50RGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudERhdGU7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIERheV9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkID0gKCkgPT4gJ0RheV9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5EYXlfSW5fU2VjO1xufVxuXG5EYXlfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBEYXlfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBIb3VyX0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgPSAoKSA9PiAnSG91cl9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5Ib3VyX0luX1NlYztcbn1cblxuSG91cl9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBNaW5fSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCA9ICgpID0+ICdNaW5fSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTWluX0luX1NlYztcbn1cblxuTWluX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWluX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gTW9udGhfSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnTW9udGhfSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTW9udGhfSW5fU2VjO1xufVxuXG5Nb250aF9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRoX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gWWVhcl9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkICAgICA9ICgpID0+ICdZZWFyX0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLlllYXJfSW5fU2VjO1xufVxuXG5ZZWFyX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhcl9Jbl9TZWM7IiwiY29uc3QgQ29uc3RhbnRzID0ge1xuXHRNaWxsaV9Jbl9TZWM6IDEwMDAsXG5cdFNlY19Jbl9NaW46IDYwLFxuXHRNaW5fSW5fSG91cjogNjAsXG5cdEhvdXJfSW5fRGF5OiAyNCxcblx0RGF5X0luX01vbnRoOiAzMCxcblx0WWVhcl9Jbl9EYXk6IDM2NSxcblx0S2JfSW5fQnl0ZXM6IDEwMjQsXG59O1xuXG5Db25zdGFudHMuTWluX0luX1NlYyAgID0gQ29uc3RhbnRzLlNlY19Jbl9NaW4gKiBDb25zdGFudHMuTWlsbGlfSW5fU2VjO1xuQ29uc3RhbnRzLkhvdXJfSW5fU2VjICA9IENvbnN0YW50cy5NaW5fSW5fSG91ciAqIENvbnN0YW50cy5NaW5fSW5fU2VjO1xuQ29uc3RhbnRzLkRheV9Jbl9TZWMgICA9IENvbnN0YW50cy5Ib3VyX0luX0RheSAqIENvbnN0YW50cy5Ib3VyX0luX1NlYztcbkNvbnN0YW50cy5Nb250aF9Jbl9TZWMgPSBDb25zdGFudHMuRGF5X0luX01vbnRoICogQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG5Db25zdGFudHMuWWVhcl9Jbl9TZWMgID0gQ29uc3RhbnRzLlllYXJfSW5fRGF5ICogQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG5Db25zdGFudHMuTWJfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLktiX0luX0J5dGVzICogMTAyNDtcbkNvbnN0YW50cy5HYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuTWJfSW5fQnl0ZXMgKiAxMDI0O1xuQ29uc3RhbnRzLlRiX0luX0J5dGVzICA9IENvbnN0YW50cy5HYl9Jbl9CeXRlcyAqIDEwMjQ7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50czsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGREYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdGRheXMgPSBkYXlzID8gKyhcblx0XHRcdGRheXMudHJpbSgpXG5cdFx0KSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBjdXJyZW50LmdldERhdGUoKSArIGRheXMgKTtcblx0fTtcbn1cblxuQWRkRGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkSG91ckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRIb3VyJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91cnMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRob3VycyA9IGhvdXJzID8gKyhcblx0XHRcdGhvdXJzLnRyaW0oKVxuXHRcdCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSArIGhvdXJzICk7XG5cdH07XG59XG5cbkFkZEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkTWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZE1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbnV0ZXMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRtaW51dGVzID0gbWludXRlcyA/ICsoXG5cdFx0XHRtaW51dGVzLnRyaW0oKVxuXHRcdCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggY3VycmVudC5nZXRNaW51dGVzKCkgKyBtaW51dGVzICk7XG5cdH07XG59XG5cbkFkZE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRNb250aCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1vbnRocyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtb250aHMgPSBtb250aHMgPyArbW9udGhzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpICsgbW9udGhzICk7XG5cdH07XG59XG5cbkFkZERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZFllYXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkWWVhcic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXJzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgKyB5ZWFycyApO1xuXHR9O1xufVxuXG5BZGRZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkWWVhckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBGYWxsQmFja0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdpZkVtcHR5Jztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZmFsbGJhY2sgKSB7XG5cdFx0cmV0dXJuICggaXNFbXB0eSh2YWx1ZSkgfHwgTnVtYmVyLmlzTmFOKHZhbHVlKSApID8gZmFsbGJhY2sgOiB2YWx1ZTtcblx0fTtcbn1cblxuRmFsbEJhY2tGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGYWxsQmFja0ZpbHRlcjsiLCJmdW5jdGlvbiBGaWx0ZXIoKSB7XG5cdHRoaXMucHJvcHMgPSBbXTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkZpbHRlci5wcm90b3R5cGUuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0U2x1ZyBpcyBlbXB0eScgKTtcbn07XG5GaWx0ZXIucHJvdG90eXBlLnNldFByb3BzICAgICAgID0gZnVuY3Rpb24gKCBwcm9wcyApIHtcblx0dGhpcy5wcm9wcy5wdXNoKCAuLi5wcm9wcyApO1xufTtcbkZpbHRlci5wcm90b3R5cGUuYXBwbHlXaXRoUHJvcHMgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRyZXR1cm4gdGhpcy5hcHBseSggdmFsdWUsIC4uLnRoaXMucHJvcHMgKTtcbn07XG4vKipcbiAqIEBwYXJhbSAgdmFsdWVcbiAqIEBwYXJhbSAgcHJvcHNcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuRmlsdGVyLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIC4uLnByb3BzICkge1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIExlbmd0aEZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdsZW5ndGgnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHJldHVybiB2YWx1ZT8ubGVuZ3RoID8/IDA7XG5cdH07XG59XG5cbkxlbmd0aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXREYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXkgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0ZGF5ID0gZGF5ID8gK2RheS50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggZGF5ICk7XG5cdH07XG59XG5cblNldERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0SG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGhvdXIgPSBob3VyID8gK2hvdXIudHJpbSgpIDogMDtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBob3VyICk7XG5cdH07XG59XG5cblNldEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0TWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbiApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0bWluID0gbWluID8gK21pbi50cmltKCkgOiAwO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggbWluICk7XG5cdH07XG59XG5cblNldE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldE1vbnRoRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1vbnRoJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGggKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0bW9udGggPSBtb250aCA/ICttb250aC50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TW9udGgoIG1vbnRoICk7XG5cdH07XG59XG5cblNldE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXRZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldFllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFyICkge1xuXHRcdHllYXIgPSB5ZWFyID8gK3llYXIudHJpbSgpIDogZmFsc2U7XG5cblx0XHRpZiAoICF5ZWFyICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIHllYXIgKTtcblx0fTtcbn1cblxuU2V0WWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJEYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0ZGF5cyA9IGRheXMgPyArZGF5cy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgLSBkYXlzICk7XG5cdH07XG59XG5cblN1YnRyYWN0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3REYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViSG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0aG91ciA9IGhvdXIgPyAraG91ci50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSAtIGhvdXIgKTtcblx0fTtcbn1cblxuU3VidHJhY3RIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RNaW5GaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTWluJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWludXRlcyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtaW51dGVzID0gbWludXRlcyA/ICttaW51dGVzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBjdXJyZW50LmdldE1pbnV0ZXMoKSAtIG1pbnV0ZXMgKTtcblx0fTtcbn1cblxuU3VidHJhY3RNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0TW9udGhGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTW9udGgnO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aHMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRtb250aHMgPSBtb250aHMgPyArbW9udGhzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpIC0gbW9udGhzICk7XG5cdH07XG59XG5cblN1YnRyYWN0TW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1vbnRoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1YlllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFycyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgLSB5ZWFycyApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUaW1lc3RhbXBGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnVCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlLCB0cnVlICk7XG5cblx0XHRyZXR1cm4gdGltZTtcblx0fTtcbn1cblxuVGltZXN0YW1wRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXN0YW1wRmlsdGVyO1xuIiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUb0RhdGVGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9EYXRlJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaXNVVEMgPSB0cnVlICkge1xuXHRcdC8vIENvbnZlcnQgc3RyaW5nICd0cnVlJy8nZmFsc2UnIHRvIGJvb2xlYW5cblx0XHRpZiAoIHR5cGVvZiBpc1VUQyA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHQvLyBSZW1vdmUgcXVvdGVzIGFuZCB0cmltXG5cdFx0XHRjb25zdCBjbGVhbmVkID0gaXNVVEMudHJpbSgpLnJlcGxhY2UoIC9eWydcIl18WydcIl0kL2csICcnICk7XG5cdFx0XHRjb25zdCBsb3dlciAgID0gY2xlYW5lZC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpc1VUQyA9IGxvd2VyICE9PSAnZmFsc2UnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc1VUQyA9IEJvb2xlYW4oIGlzVVRDICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvRGF0ZSggbmV3IERhdGUoIHZhbHVlICksIGlzVVRDICk7XG5cdH07XG59XG5cblRvRGF0ZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRGF0ZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IHRvRGF0ZVRpbWUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUb0RhdGVUaW1lRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvRGF0ZVRpbWUnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBpc1VUQyA9IGZhbHNlICkge1xuXHRcdC8vIENvbnZlcnQgc3RyaW5nICd0cnVlJy8nZmFsc2UnIHRvIGJvb2xlYW5cblx0XHRpZiAoIHR5cGVvZiBpc1VUQyA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHQvLyBSZW1vdmUgcXVvdGVzIGFuZCB0cmltXG5cdFx0XHRjb25zdCBjbGVhbmVkID0gaXNVVEMudHJpbSgpLnJlcGxhY2UoIC9eWydcIl18WydcIl0kL2csICcnICk7XG5cdFx0XHRjb25zdCBsb3dlciAgID0gY2xlYW5lZC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpc1VUQyA9ICcnID09PSBsb3dlciA/IGZhbHNlIDogbG93ZXIgIT09ICdmYWxzZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzVVRDID0gQm9vbGVhbiggaXNVVEMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9EYXRlVGltZSggbmV3IERhdGUoIHZhbHVlICksIGlzVVRDICk7XG5cdH07XG59XG5cblRvRGF0ZVRpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVUaW1lRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb0RheUluTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9EYXlJbk1zJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRjb25zdCBPTkVfREFZX01TID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfREFZX01TO1xuXHR9O1xufVxuXG5Ub0RheUluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RheUluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvSG91ckluTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9Ib3VySW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX0hPVVJfTVMgPSA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfSE9VUl9NUztcblx0fTtcbn1cblxuVG9Ib3VySW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvSG91ckluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvTWludXRlSW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b01pbnV0ZUluTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9NSU5VVEVfTVMgPSA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX01JTlVURV9NUztcblx0fTtcbn1cblxuVG9NaW51dGVJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9NaW51dGVJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb01vbnRoSW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b01vbnRoSW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX01PTlRIX01TID0gMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9NT05USF9NUztcblx0fTtcbn1cblxuVG9Nb250aEluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb01vbnRoSW5Nc0ZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IHRvVGltZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFRvVGltZUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b1RpbWUnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBpc1VUQyA9IHRydWUgKSB7XG5cdFx0Ly8gQ29udmVydCBzdHJpbmcgJ3RydWUnLydmYWxzZScgdG8gYm9vbGVhblxuXHRcdGlmICggdHlwZW9mIGlzVVRDID09PSAnc3RyaW5nJyApIHtcblx0XHRcdC8vIFJlbW92ZSBxdW90ZXMgYW5kIHRyaW1cblx0XHRcdGNvbnN0IGNsZWFuZWQgPSBpc1VUQy50cmltKCkucmVwbGFjZSggL15bJ1wiXXxbJ1wiXSQvZywgJycgKTtcblx0XHRcdGNvbnN0IGxvd2VyICAgPSBjbGVhbmVkLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlzVVRDID0gbG93ZXIgIT09ICdmYWxzZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzVVRDID0gQm9vbGVhbiggaXNVVEMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9UaW1lKCBuZXcgRGF0ZSggdmFsdWUgKSwgaXNVVEMgKTtcblx0fTtcbn1cblxuVG9UaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9UaW1lRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb1dlZWtJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvV2Vla0luTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9XRUVLX01TID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX1dFRUtfTVM7XG5cdH07XG59XG5cblRvV2Vla0luTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb1dlZWtJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb1llYXJJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvWWVhckluTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9ZRUFSX01TID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfWUVBUl9NUztcblx0fTtcbn1cblxuVG9ZZWFySW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvWWVhckluTXNGaWx0ZXI7IiwiZnVuY3Rpb24gemVyb2ZpbGwoIG51bWJlciwgY291bnQgKSB7XG5cdG51bWJlciA9ICcnICsgbnVtYmVyO1xuXG5cdGlmICggbnVtYmVyLmxlbmd0aCA+PSBjb3VudCApIHtcblx0XHRyZXR1cm4gbnVtYmVyO1xuXHR9XG5cblx0Y29uc3QgemVyb3MgPSBuZXcgQXJyYXkoIGNvdW50IC0gbnVtYmVyLmxlbmd0aCApLmZpbGwoIDAgKTtcblxuXHRyZXR1cm4gemVyb3MgKyBudW1iZXI7XG59XG5cbi8qKlxuICogQHBhcmFtIGRhdGUgIHtEYXRlfVxuICogQHBhcmFtIGlzVXRjXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoIGRhdGUsIGlzVXRjID0gdHJ1ZSApIHtcblx0Y29uc3QgbW9udGggPSBpc1V0YyA/IGRhdGUuZ2V0VVRDTW9udGgoKSA6IGRhdGUuZ2V0TW9udGgoKTtcblx0Y29uc3QgZGF5ICAgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDRGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XG5cdGNvbnN0IHllYXIgID0gaXNVdGMgPyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cblx0cmV0dXJuIFtcblx0XHR5ZWFyLFxuXHRcdHplcm9maWxsKCBtb250aCArIDEsIDIgKSxcblx0XHR6ZXJvZmlsbCggZGF5LCAyICksXG5cdF0uam9pbiggJy0nICk7XG59XG5cbi8qKlxuICogQHBhcmFtIGRhdGUgIHtEYXRlfVxuICogQHBhcmFtIGlzVXRjXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1RpbWUoIGRhdGUsIGlzVXRjID0gdHJ1ZSApIHtcblx0Y29uc3QgaG91cnMgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDSG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKTtcblx0Y29uc3QgbWlucyAgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDTWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCk7XG5cblx0cmV0dXJuIFtcblx0XHR6ZXJvZmlsbCggaG91cnMsIDIgKSxcblx0XHR6ZXJvZmlsbCggbWlucywgMiApLFxuXHRdLmpvaW4oICc6JyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlVGltZSggZGF0ZSwgaXNVdGMgPSBmYWxzZSApIHtcblx0cmV0dXJuIHRvRGF0ZSggZGF0ZSwgaXNVdGMgKSArICdUJyArIHRvVGltZSggZGF0ZSwgaXNVdGMgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHRpbWVPckRhdGUge1N0cmluZ3xOdW1iZXJ9XG4gKiBAcGFyYW0gIGxvY2FsRGF0ZU9ubHkge2Jvb2xlYW59IFBhcnNlIFlZWVktTU0tREQgYXMgbG9jYWwgbWlkbmlnaHRcbiAqIEByZXR1cm4ge3t0aW1lOiBudW1iZXIsIHR5cGU6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoIHRpbWVPckRhdGUsIGxvY2FsRGF0ZU9ubHkgPSBmYWxzZSApIHtcblx0aWYgKCAhTnVtYmVyLmlzTmFOKCArdGltZU9yRGF0ZSApICkge1xuXHRcdHJldHVybiB7IHRpbWU6ICt0aW1lT3JEYXRlLCB0eXBlOiAnbnVtYmVyJyB9O1xuXHR9XG5cblx0dGltZU9yRGF0ZSA9IHRpbWVPckRhdGUudG9TdHJpbmcoKTtcblxuXHRjb25zdCBkYXRlUGFydHMgPSB0aW1lT3JEYXRlLnNwbGl0KCAnLScgKTtcblxuXHRpZiAoIGRhdGVQYXJ0cy5sZW5ndGggPiAxICkge1xuXHRcdGNvbnN0IGRhdGVPbmx5ID0gbG9jYWxEYXRlT25seVxuXHRcdCAgICAgICAgICAgICAgICAgPyAvXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pJC8uZXhlYyggdGltZU9yRGF0ZSApXG5cdFx0ICAgICAgICAgICAgICAgICA6IG51bGw7XG5cdFx0Y29uc3QgZGF0ZSA9IGRhdGVPbmx5XG5cdFx0ICAgICAgICAgICAgID8gbmV3IERhdGUoICtkYXRlT25seVsgMSBdLCArZGF0ZU9ubHlbIDIgXSAtIDEsICtkYXRlT25seVsgMyBdIClcblx0XHQgICAgICAgICAgICAgOiBuZXcgRGF0ZSggdGltZU9yRGF0ZSApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpbWU6IGRhdGUuZ2V0VGltZSgpLFxuXHRcdFx0dHlwZTogJ2RhdGUnLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdCB0aW1lUGFydHMgPSB0aW1lT3JEYXRlLnNwbGl0KCAnOicgKTtcblx0Y29uc3QgY2FsbGJhY2tzID0gW1xuXHRcdERhdGUucHJvdG90eXBlLnNldEhvdXJzLFxuXHRcdERhdGUucHJvdG90eXBlLnNldE1pbnV0ZXMsXG5cdFx0RGF0ZS5wcm90b3R5cGUuc2V0U2Vjb25kcyxcblx0XTtcblxuXHRjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcblxuXHRmb3IgKCBjb25zdCBpbmRleCBpbiB0aW1lUGFydHMgKSB7XG5cdFx0aWYgKFxuXHRcdFx0IXRpbWVQYXJ0cy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSB8fFxuXHRcdFx0IWNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2FsbGJhY2tzWyBpbmRleCBdLmNhbGwoIHRpbWUsIHRpbWVQYXJ0c1sgaW5kZXggXSApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0aW1lOiB0aW1lLmdldFRpbWUoKSxcblx0XHR0eXBlOiAndGltZScsXG5cdH07XG59XG4iLCJpbXBvcnQgTGVuZ3RoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9MZW5ndGhGaWx0ZXInO1xuaW1wb3J0IEZhbGxCYWNrRmlsdGVyIGZyb20gJy4vZmlsdGVycy9GYWxsQmFja0ZpbHRlcic7XG5pbXBvcnQgVG9EYXRlRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RhdGVGaWx0ZXInO1xuaW1wb3J0IFRvVGltZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9UaW1lRmlsdGVyJztcbmltcG9ydCBUb0RhdGVUaW1lRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyJztcbmltcG9ydCBBZGRZZWFyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRZZWFyRmlsdGVyJztcbmltcG9ydCBBZGRNb250aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXInO1xuaW1wb3J0IEFkZERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkRGF5RmlsdGVyJztcbmltcG9ydCBBZGRIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRIb3VyRmlsdGVyJztcbmltcG9ydCBBZGRNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZE1pbkZpbHRlcic7XG5pbXBvcnQgVGltZXN0YW1wRmlsdGVyIGZyb20gJy4vZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXInO1xuaW1wb3J0IFNldEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldEhvdXJGaWx0ZXInO1xuaW1wb3J0IFNldE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0TWluRmlsdGVyJztcbmltcG9ydCBTZXREYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldERheUZpbHRlcic7XG5pbXBvcnQgU2V0WWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0WWVhckZpbHRlcic7XG5pbXBvcnQgU2V0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldE1vbnRoRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0SG91ckZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3REYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RNaW5GaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0WWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyJztcbmltcG9ydCBUb0RheUluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvRGF5SW5Nc0ZpbHRlcic7XG5pbXBvcnQgVG9Nb250aEluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvTW9udGhJbk1zRmlsdGVyJztcbmltcG9ydCBUb1llYXJJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub1llYXJJbk1zRmlsdGVyJztcbmltcG9ydCBUb0hvdXJJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0hvdXJJbk1zRmlsdGVyJztcbmltcG9ydCBUb01pbnV0ZUluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvTWludXRlSW5Nc0ZpbHRlcic7XG5pbXBvcnQgVG9XZWVrSW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9XZWVrSW5Nc0ZpbHRlcic7XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAdHlwZSB7QXJyYXk8RmlsdGVyPn1cbiAqL1xubGV0IGZpbHRlcnMgPSBbXTtcblxuY29uc3QgY29yZUZpbHRlckl0ZW1zID0gW1xuXHRTZXRZZWFyRmlsdGVyLFxuXHRTZXRNb250aEZpbHRlcixcblx0U2V0RGF5RmlsdGVyLFxuXHRTZXRIb3VyRmlsdGVyLFxuXHRTZXRNaW5GaWx0ZXIsXG5cdFN1YnRyYWN0WWVhckZpbHRlcixcblx0U3VidHJhY3RNb250aEZpbHRlcixcblx0U3VidHJhY3REYXlGaWx0ZXIsXG5cdFN1YnRyYWN0SG91ckZpbHRlcixcblx0U3VidHJhY3RNaW5GaWx0ZXIsXG5cdEFkZFllYXJGaWx0ZXIsXG5cdEFkZE1vbnRoRmlsdGVyLFxuXHRBZGREYXlGaWx0ZXIsXG5cdEFkZEhvdXJGaWx0ZXIsXG5cdEFkZE1pbkZpbHRlcixcblx0TGVuZ3RoRmlsdGVyLFxuXHRGYWxsQmFja0ZpbHRlcixcblx0VG9EYXRlRmlsdGVyLFxuXHRUb1RpbWVGaWx0ZXIsXG5cdFRvRGF0ZVRpbWVGaWx0ZXIsXG5cdFRpbWVzdGFtcEZpbHRlcixcblx0VG9EYXlJbk1zRmlsdGVyLFxuXHRUb01vbnRoSW5Nc0ZpbHRlcixcblx0VG9ZZWFySW5Nc0ZpbHRlcixcblx0VG9Ib3VySW5Nc0ZpbHRlcixcblx0VG9NaW51dGVJbk1zRmlsdGVyLFxuXHRUb1dlZWtJbk1zRmlsdGVyLFxuXTtcblxuY29uc3QgZ2V0RmlsdGVySXRlbXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuZmlsdGVycycsXG5cdFsgLi4uY29yZUZpbHRlckl0ZW1zIF0sXG4pO1xubGV0IHJlc3BvbnNlICAgICAgICAgPSBbXTtcblxuZnVuY3Rpb24gcHVzaEZpbHRlciggbmFtZSwgcHJvcHMgPSAnJyApIHtcblx0aWYgKCAhZmlsdGVycy5sZW5ndGggKSB7XG5cdFx0ZmlsdGVycyA9IGdldEZpbHRlckl0ZW1zKCk7XG5cdH1cblxuXHRsZXQgZmlsdGVyO1xuXG5cdGZvciAoIGxldCBjdXJyZW50IG9mIGZpbHRlcnMgKSB7XG5cdFx0Y29uc3QgRmlsdGVySXRlbSA9IGN1cnJlbnQ7XG5cdFx0Y3VycmVudCAgICAgICAgICA9IG5ldyBGaWx0ZXJJdGVtKCk7XG5cblx0XHRpZiAoIG5hbWUgPT09IGN1cnJlbnQuZ2V0U2x1ZygpICkge1xuXHRcdFx0Y3VycmVudC5pc0NvcmVGaWx0ZXIgPSBjb3JlRmlsdGVySXRlbXMuaW5jbHVkZXMoIEZpbHRlckl0ZW0gKTtcblx0XHRcdGZpbHRlciA9IGN1cnJlbnQ7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIWZpbHRlciApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0cHJvcHMgPSBwcm9wcy5zcGxpdCggJywnICkubWFwKFxuXHRcdGl0ZW0gPT4gaXRlbS50cmltKCksXG5cdCk7XG5cblx0ZmlsdGVyLnNldFByb3BzKCBwcm9wcyApO1xuXHRyZXNwb25zZS5wdXNoKCBmaWx0ZXIgKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsdGVycyggZmlsdGVyc0xpc3QgKSB7XG5cdGlmICggbnVsbCA9PT0gZmlsdGVyc0xpc3QgfHwgIWZpbHRlcnNMaXN0Py5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBmaWx0ZXJOYW1lIG9mIGZpbHRlcnNMaXN0ICkge1xuXHRcdGNvbnN0IG1hdGNoZXMgPSBmaWx0ZXJOYW1lLm1hdGNoKCAvXihcXHcrKVxcKChbXigpXSspXFwpLyApO1xuXG5cdFx0aWYgKCBudWxsID09PSBtYXRjaGVzICkge1xuXHRcdFx0cHVzaEZpbHRlciggZmlsdGVyTmFtZSApO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwdXNoRmlsdGVyKCBtYXRjaGVzWyAxIF0sIG1hdGNoZXNbIDIgXSApO1xuXHR9XG5cblx0Y29uc3QgdGVtcFJlc3BvbnNlID0gWyAuLi5yZXNwb25zZSBdO1xuXHRyZXNwb25zZSAgICAgICAgICAgPSBbXTtcblxuXHRyZXR1cm4gdGVtcFJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGaWx0ZXJzO1xuIiwiaW1wb3J0IENhbGN1bGF0ZWRGb3JtdWxhIGZyb20gJy4vQ2FsY3VsYXRlZEZvcm11bGEnO1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBnZXRGaWx0ZXJzIGZyb20gJy4vZ2V0RmlsdGVycyc7XG5pbXBvcnQgYXBwbHlGaWx0ZXJzIGZyb20gJy4vYXBwbHlGaWx0ZXJzJztcbmltcG9ydCB7IHRvRGF0ZSwgdG9EYXRlVGltZSwgdG9UaW1lLCBnZXRUaW1lc3RhbXAgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0ZpbHRlcic7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cblx0KSxcblx0RmlsdGVyLFxuXHRDYWxjdWxhdGVkRm9ybXVsYSxcblx0QmFzZUludGVybmFsTWFjcm8sXG59O1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPz8ge31cblx0KSxcblx0Z2V0RmlsdGVycyxcblx0YXBwbHlGaWx0ZXJzLFxuXHR0b0RhdGUsXG5cdHRvRGF0ZVRpbWUsXG5cdHRvVGltZSxcblx0Z2V0VGltZXN0YW1wLFxufTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyQ29uc3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25zdCA/PyB7fVxuXHQpLFxuXHQuLi5Db25zdGFudHMsXG59OyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NDc1ODAvaG93LXRvLWRldGVjdC1zYWZhcmktY2hyb21lLWllLWZpcmVmb3gtYW5kLW9wZXJhLWJyb3dzZXJcblxuY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCJcbmNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdCggdXNlckFnZW50ICkgfHxcblx0L2NvbnN0cnVjdG9yL2kudGVzdCggd2luZG93LkhUTUxFbGVtZW50ICkgfHxcblx0KFxuXHRcdCggcCApID0+IHtcblx0XHRcdHJldHVybiAnW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dJyA9PT0gcC50b1N0cmluZygpO1xuXHRcdH1cblx0KSggIXdpbmRvdy5zYWZhcmkgfHwgKFxuXHRcdHR5cGVvZiBzYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvblxuXHQpICk7XG5cbmNvbnN0IGVudmlyb25tZW50ID0ge1xuXHRzYWZhcmk6IGlzU2FmYXJpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL2F0dHJzL0Jhc2VIdG1sQXR0cic7XG5pbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL2F0dHJzL01heEZpbGVzSHRtbEF0dHInO1xuaW1wb3J0IE1heEZpbGVTaXplSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyJztcbmltcG9ydCBSZW1haW5pbmdDYWxjQXR0ciBmcm9tICcuL2F0dHJzL1JlbWFpbmluZ0NhbGNBdHRyJztcbmltcG9ydCBGaWxlRXh0ZW5zaW9uSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9GaWxlRXh0ZW5zaW9uSHRtbEF0dHInO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAcGFyYW0gIGNhbGxiYWNrcyB7RnVuY3Rpb25bXX1cbiAqIEByZXR1cm4ge1Byb21pc2U8Kj59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFsbFJlamVjdGVkKCBjYWxsYmFja3MgKSB7XG5cdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoXG5cdFx0Y2FsbGJhY2tzLm1hcCggY3VycmVudCA9PiBuZXcgUHJvbWlzZSggY3VycmVudCApICksXG5cdCk7XG5cblx0aWYgKCB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmRldm1vZGUgKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXHRcdGNvbnNvbGUuZ3JvdXAoICdhbGxSZWplY3RlZCcgKTtcblx0XHRjb25zb2xlLmluZm8oIC4uLnJlc3VsdHMgKTtcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cdH1cblxuXHRjb25zdCBpbnZhbGlkID0gcmVzdWx0cy5maWx0ZXIoXG5cdFx0KCBlcnJvciApID0+ICdyZWplY3RlZCcgPT09IGVycm9yLnN0YXR1cyxcblx0KTtcblxuXHRyZXR1cm4gaW52YWxpZC5tYXAoICggeyByZWFzb24sIHZhbHVlIH0gKSA9PiB7XG5cdFx0cmV0dXJuIHJlYXNvbj8ubGVuZ3RoID8gcmVhc29uWyAwIF0gOiAoXG5cdFx0XHRyZWFzb24gPz8gdmFsdWVcblx0XHQpO1xuXHR9ICk7XG59XG5cbmZ1bmN0aW9uIGdldExhbmd1YWdlKCkge1xuXHRjb25zdCBsYW5nID0gd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlcz8ubGVuZ3RoXG5cdCAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWyAwIF1cblx0ICAgICAgICAgICAgIDogd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlO1xuXG5cdHJldHVybiBsYW5nID8/ICdlbi1VUyc7XG59XG5cbmNvbnN0IGdldElucHV0SHRtbEF0dHIgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuaW5wdXQuaHRtbC5hdHRycycsXG5cdFtcblx0XHQnbWluJyxcblx0XHQnbWF4Jyxcblx0XHQnbWluTGVuZ3RoJyxcblx0XHQnbWF4TGVuZ3RoJyxcblx0XHRNYXhGaWxlc0h0bWxBdHRyLFxuXHRcdE1heEZpbGVTaXplSHRtbEF0dHIsXG5cdFx0UmVtYWluaW5nQ2FsY0F0dHIsXG5cdFx0RmlsZUV4dGVuc2lvbkh0bWxBdHRyLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7QmFzZUh0bWxBdHRyW119XG4gKi9cbmxldCBpbnB1dEh0bWxBdHRycyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQcmVwYXJlZElucHV0SHRtbEF0dHJzKCkge1xuXHRpZiAoICFpbnB1dEh0bWxBdHRycy5sZW5ndGggKSB7XG5cdFx0aW5wdXRIdG1sQXR0cnMgPSBnZXRJbnB1dEh0bWxBdHRyKCk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5pbnB1dEh0bWxBdHRycyBdO1xufVxuXG4vKipcbiAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERlZmF1bHRBdHRyQnlOYW1lKCBuYW1lICkge1xuXHRjb25zdCBhdHRyICAgID0gbmV3IEJhc2VIdG1sQXR0cigpO1xuXHRhdHRyLmF0dHJOYW1lID0gbmFtZTtcblxuXHRyZXR1cm4gYXR0cjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cbiAqL1xuZnVuY3Rpb24gc2V0QXR0cnMoIGlucHV0ICkge1xuXHRmb3IgKCBjb25zdCBpbnB1dEh0bWxBdHRyIG9mIGdldFByZXBhcmVkSW5wdXRIdG1sQXR0cnMoKSApIHtcblx0XHRsZXQgY3VycmVudDtcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgaW5wdXRIdG1sQXR0ciApIHtcblx0XHRcdGN1cnJlbnQgPSBnZXREZWZhdWx0QXR0ckJ5TmFtZSggaW5wdXRIdG1sQXR0ciApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBuZXcgaW5wdXRIdG1sQXR0cigpO1xuXHRcdH1cblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aW5wdXQuYXR0cnNbIGN1cnJlbnQuYXR0ck5hbWUgXSA9IGN1cnJlbnQ7XG5cblx0XHRjdXJyZW50LnNldElucHV0KCBpbnB1dCApO1xuXHRcdGN1cnJlbnQub2JzZXJ2ZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlc2V0SW5wdXRIdG1sQXR0cnNSZWdpc3RyeSgpIHtcblx0aW5wdXRIdG1sQXR0cnMgPSBbXTtcbn1cblxuZnVuY3Rpb24gdG9IVE1MKCB0ZXh0ICkge1xuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHRleHQudHJpbSgpO1xuXG5cdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KCB2YWx1ZSApIHtcblx0aWYgKCAnYm9vbGVhbicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gIXZhbHVlO1xuXHR9XG5cblx0aWYgKCBudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICYmICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiAhT2JqZWN0LmtleXMoIHZhbHVlICk/Lmxlbmd0aDtcblx0fVxuXG5cdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gMCA9PT0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gIXZhbHVlPy5sZW5ndGg7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBpc1Zpc2libGUoIG5vZGUgKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZT8uaXNDb25uZWN0ZWQgJiYgbnVsbCAhPT0gbm9kZT8ub2Zmc2V0UGFyZW50XG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFRvcCggbm9kZSApIHtcblx0Y29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0Y29uc3QgbWF5YmVXaW5kb3cgPSBnZXRTY3JvbGxQYXJlbnQoIG5vZGUgKTtcblxuXHRyZXR1cm4gcmVjdD8udG9wICsgKFxuXHRcdG1heWJlV2luZG93Py5zY3JvbGxZID8/IDBcblx0KTtcbn1cblxuY29uc3QgZ2V0Tm9kZSA9IGN1cnJlbnQgPT4gKFxuXHRjdXJyZW50LnNjcm9sbEhlaWdodCA+IGN1cnJlbnQuY2xpZW50SGVpZ2h0ID8gY3VycmVudCA6IGZhbHNlXG4pO1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoIG5vZGUgKSB7XG5cblx0Ly8gamV0LXBvcHVwIGNvbXBhdGliaWxpdHlcblx0bGV0IGNvbnRhaW5lciA9IG5vZGUuY2xvc2VzdCggJy5qZXQtcG9wdXBfX2NvbnRhaW5lci1pbm5lcicgKTtcblxuXHRpZiAoIGNvbnRhaW5lciApIHtcblx0XHRyZXR1cm4gZ2V0Tm9kZSggY29udGFpbmVyICk7XG5cdH1cblxuXHQvLyBlbGVtZW50b3ItcHJvIHBvcHVwIGNvbXBhdGliaWxpdHlcblx0Y29udGFpbmVyID0gbm9kZS5jbG9zZXN0KCAnLmVsZW1lbnRvci1wb3B1cC1tb2RhbCAuZGlhbG9nLW1lc3NhZ2UnICk7XG5cblx0aWYgKCBjb250YWluZXIgKSB7XG5cdFx0cmV0dXJuIGdldE5vZGUoIGNvbnRhaW5lciApO1xuXHR9XG5cblx0cmV0dXJuIHdpbmRvdztcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzIHtJbnB1dERhdGFbXX1cbiAqL1xuZnVuY3Rpb24gZm9jdXNPbkludmFsaWRJbnB1dCggaW5wdXRzICkge1xuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0aWYgKCBpbnB1dC5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhaW5wdXQucmVwb3J0aW5nLmhhc0F1dG9TY3JvbGwoKSAmJiBpbnB1dC5vbkZvY3VzKCk7XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlVc2VyQWdlbnRzKCkge1xuXHRmb3IgKCBjb25zdCBbIG5hbWUsIGlzQWN0aXZlIF0gb2YgT2JqZWN0LmVudHJpZXMoIGVudmlyb25tZW50ICkgKSB7XG5cdFx0aWYgKCAhaXNBY3RpdmUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCBgamV0LS11YS0keyBuYW1lIH1gICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNVQSggYnJvd3NlciApIHtcblx0cmV0dXJuIGVudmlyb25tZW50Py5bIGJyb3dzZXIgXTtcbn1cblxuZXhwb3J0IHtcblx0YWxsUmVqZWN0ZWQsXG5cdGdldExhbmd1YWdlLFxuXHRzZXRBdHRycyxcblx0dG9IVE1MLFxuXHRpc0VtcHR5LFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdGlzVmlzaWJsZSxcblx0Z2V0U2Nyb2xsUGFyZW50LFxuXHRpc1VBLFxuXHRhcHBseVVzZXJBZ2VudHMsXG5cdHJlc2V0SW5wdXRIdG1sQXR0cnNSZWdpc3RyeSxcbn07XG4iLCJpbXBvcnQgQ2FsY3VsYXRlZEZvcm11bGEgZnJvbSAnLi4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEnO1xuaW1wb3J0IGdldEZpbHRlcnMgZnJvbSAnLi4vY2FsYy5tb2R1bGUvZ2V0RmlsdGVycyc7XG5pbXBvcnQgYXBwbHlWYWx1ZUZpbHRlcnMgZnJvbSAnLi4vY2FsYy5tb2R1bGUvYXBwbHlGaWx0ZXJzJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi9lc2NhcGVIdG1sJztcbmltcG9ydCBzYW5pdGl6ZUh0bWwgZnJvbSAnLi9zYW5pdGl6ZUh0bWwnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9ICdvcHRpb24tbGFiZWwnO1xuXG5mdW5jdGlvbiBnZXRJbnB1dE9wdGlvbkxhYmVsKG5vZGUpIHtcblxuXHRpZiAoIW5vZGUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBBcnJheS5mcm9tKG5vZGUuc2VsZWN0ZWRPcHRpb25zIHx8IFtdKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRPcHRpb25zXG5cdFx0XHQubWFwKChvcHRpb24pID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblx0aWYgKFxuXHRcdChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSAmJlxuXHRcdCFub2RlLmNoZWNrZWRcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmIChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBub2RlLmNsb3Nlc3QoJ2xhYmVsJyk7XG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblx0XHRyZXR1cm4gU3RyaW5nKFxuXHRcdFx0dGV4dE5vZGU/LnRleHRDb250ZW50IHx8IGxhYmVsLnRleHRDb250ZW50IHx8IG5vZGUudmFsdWUgfHwgJydcblx0XHQpLnRyaW0oKTtcblx0fVxuXHRyZXR1cm4gJyc7XG5cbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRPcHRpb25MYWJlbHMoaW5wdXQpIHtcblxuXHRjb25zdCBub2RlcyA9IEFycmF5LmZyb20oaW5wdXQubm9kZXMgfHwgW10pO1xuXHRyZXR1cm4gbm9kZXNcblx0XHQubWFwKGdldElucHV0T3B0aW9uTGFiZWwpXG5cdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdC5qb2luKCcsICcpO1xuXG59XG5cbmZ1bmN0aW9uIHVud3JhcFNhZmVIdG1sKCB2YWx1ZSApIHtcblx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgU2FmZUh0bWwgPyB2YWx1ZS50b1N0cmluZygpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIENhbGN1bGF0ZWRIdG1sU3RyaW5nKFxuXHRyb290LFxuXHR7IFxuXHRcdHdpdGhQcmVmaXggPSB0cnVlLCBcblx0XHRtYWNyb0hvc3QgPSBmYWxzZSwgXG5cdFx0bWFjcm9Gb3JtYXQgPSAnJyxcblx0XHQuLi5vcHRpb25zIFxuXHR9ID0ge30sXG4pIHtcblx0Q2FsY3VsYXRlZEZvcm11bGEuY2FsbCggdGhpcywgcm9vdCwgb3B0aW9ucyApO1xuXG5cdGlmICggd2l0aFByZWZpeCApIHtcblx0XHR0aGlzLnJlZ2V4cCA9IC9KRkJfRklFTEQ6OiguKykvZ2k7XG5cdH1cblxuXHR0aGlzLm1hY3JvSG9zdCA9IG1hY3JvSG9zdCB8fCBmYWxzZTtcblx0dGhpcy5tYWNyb0Zvcm1hdCA9IG1hY3JvRm9ybWF0IHx8ICcnO1xuXG5cdHRoaXMucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCAkZmllbGROb2RlID0galF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICk7XG5cdFx0Y29uc3QgJG1hY3JvSG9zdCA9IHRoaXMubWFjcm9Ib3N0ID8galF1ZXJ5KCB0aGlzLm1hY3JvSG9zdCApIDogZmFsc2U7XG5cblx0XHRsZXQgZmllbGRWYWx1ZSA9IGFwcGx5RmlsdGVycyhcblx0XHRcdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHQkZmllbGROb2RlLFxuXHRcdFx0JG1hY3JvSG9zdCxcblx0XHRcdHRoaXMubWFjcm9Gb3JtYXQsXG5cdFx0KTtcblxuXHRcdGZpZWxkVmFsdWUgPSB3cD8uaG9va3M/LmFwcGx5RmlsdGVyc1xuXHRcdFx0PyB3cC5ob29rcy5hcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHRcdFx0XHRmaWVsZFZhbHVlLFxuXHRcdFx0XHQkZmllbGROb2RlLFxuXHRcdFx0XHQkbWFjcm9Ib3N0LFxuXHRcdFx0XHR0aGlzLm1hY3JvRm9ybWF0LFxuXHRcdFx0KVxuXHRcdFx0OiBmaWVsZFZhbHVlO1xuXG5cdFx0aWYgKGZhbHNlICE9PSBmaWVsZFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFNhZmVIdG1sKCBmaWVsZFZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKE1BQ1JPX0ZPUk1BVF9PUFRJT05fTEFCRUwgPT09IHRoaXMubWFjcm9Gb3JtYXQpIHtcblx0XHRcdHJldHVybiBnZXRJbnB1dE9wdGlvbkxhYmVscyhpbnB1dCkgfHwgaW5wdXQudmFsdWUuY3VycmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQudmFsdWUuY3VycmVudDtcblx0fS5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5vbk1pc3NpbmdQYXJ0ID0gZnVuY3Rpb24gKCkge307XG59XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENhbGN1bGF0ZWRGb3JtdWxhLnByb3RvdHlwZSApO1xuXG5DYWxjdWxhdGVkSHRtbFN0cmluZy5wcm90b3R5cGUub2JzZXJ2ZU1hY3JvID0gZnVuY3Rpb24gKCBjdXJyZW50ICkge1xuXHRpZiAoIG51bGwgPT09IHRoaXMuZm9ybXVsYSApIHtcblx0XHR0aGlzLmZvcm11bGEgPSBjdXJyZW50O1xuXHR9XG5cblx0Y29uc3QgWyBuYW1lLCAuLi5maWx0ZXJzIF0gPSBjdXJyZW50LnNwbGl0KCAnfCcgKTtcblx0Y29uc3QgcGFyc2VkTmFtZSAgICAgICAgICAgPSBuYW1lLm1hdGNoKCAvW1xcd1xcLTpdKy9nICk7XG5cblx0aWYgKCAhIHBhcnNlZE5hbWUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgWyBmaWVsZE5hbWUsIC4uLnBhcmFtcyBdID0gcGFyc2VkTmFtZTtcblx0Y29uc3QgZXhpc3ROb2RlICAgICAgICAgICAgICAgID0gdGhpcy5pc0ZpZWxkTm9kZUV4aXN0cyggZmllbGROYW1lICk7XG5cblx0aWYgKCB1bmRlZmluZWQgPT09IGV4aXN0Tm9kZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCByZWxhdGVkSW5wdXQgPSBmaWVsZE5hbWUgIT09ICd0aGlzJ1xuXHRcdD8gdGhpcy5yb290LmdldElucHV0KCBmaWVsZE5hbWUgKVxuXHRcdDogdGhpcy5pbnB1dDtcblxuXHRpZiAoICEgcmVsYXRlZElucHV0ICYmICEgZmllbGROYW1lLmluY2x1ZGVzKCAnOjonICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgZmlsdGVyc0xpc3QgPSBnZXRGaWx0ZXJzKCBmaWx0ZXJzICk7XG5cblx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRyZXR1cm4gQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlLm9ic2VydmVNYWNyby5jYWxsKCB0aGlzLCBjdXJyZW50ICk7XG5cdH1cblxuXHRpZiAoICEgdGhpcy5yZWxhdGVkLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSApICkge1xuXHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xuXHRcdHRoaXMud2F0Y2hlcnMucHVzaChcblx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdCk7XG5cdH1cblxuXHRpZiAoICEgcGFyYW1zPy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGlmICggJ3JlcGVhdGVyJyA9PT0gcmVsYXRlZElucHV0LmlucHV0VHlwZSAmJiBmaWx0ZXJzTGlzdD8ubGVuZ3RoICkge1xuXHRcdFx0XHQvLyBQcmVzZXJ2ZSByZXBlYXRlciBtYWNybyBzaWRlIGVmZmVjdHMgbGlrZSBpbm5lciBpbnB1dCBjaGFuZ2UgYmluZGluZy5cblx0XHRcdFx0Y29uc3QgcmVsYXRlZFZhbHVlID0gdW53cmFwU2FmZUh0bWwoIHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSApO1xuXHRcdFx0XHRyZWxhdGVkSW5wdXQucmVRdWVyeVZhbHVlPy4oKTtcblxuXHRcdFx0XHRyZXR1cm4gYXBwbHlWYWx1ZUZpbHRlcnMoXG5cdFx0XHRcdFx0cmVsYXRlZFZhbHVlLFxuXHRcdFx0XHRcdGZpbHRlcnNMaXN0LFxuXHRcdFx0XHRcdHsgcmF3UmVwZWF0ZXJWYWx1ZTogcmVsYXRlZElucHV0LnZhbHVlLmN1cnJlbnQgfSxcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnJlbGF0ZWRDYWxsYmFjayggcmVsYXRlZElucHV0ICk7XG5cblx0XHRcdGlmICggdmFsdWUgaW5zdGFuY2VvZiBTYWZlSHRtbCAmJiAhIGZpbHRlcnNMaXN0Py5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZmlsdGVycyBnZXQgdGhlIG9yaWdpbmFsIHZhbHVlIHR5cGUgKG51bGwsIGZhbHNlLCBhcnJheS4uLiksIG9ubHkgdGhlXG5cdFx0XHQvLyBTYWZlSHRtbCBtYXJrZXIgaXMgZHJvcHBlZFxuXHRcdFx0cmV0dXJuIGFwcGx5VmFsdWVGaWx0ZXJzKCB1bndyYXBTYWZlSHRtbCggdmFsdWUgKSwgZmlsdGVyc0xpc3QgKTtcblx0XHR9O1xuXHR9XG5cblx0Y29uc3QgWyBhdHRyTmFtZSBdID0gcGFyYW1zO1xuXG5cdGlmICggISByZWxhdGVkSW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoIGF0dHJOYW1lICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgaHRtbEF0dHIgPSByZWxhdGVkSW5wdXQuYXR0cnNbIGF0dHJOYW1lIF07XG5cblx0aWYgKCAhIHRoaXMucmVsYXRlZEF0dHJzLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICkgKSB7XG5cdFx0dGhpcy5yZWxhdGVkQXR0cnMucHVzaCggcmVsYXRlZElucHV0Lm5hbWUgKyBhdHRyTmFtZSApO1xuXHRcdHRoaXMud2F0Y2hlcnMucHVzaChcblx0XHRcdGh0bWxBdHRyLnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnNldFJlc3VsdCgpICksXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoKSA9PiBhcHBseVZhbHVlRmlsdGVycyggaHRtbEF0dHIudmFsdWUuY3VycmVudCwgZmlsdGVyc0xpc3QgKTtcbn07XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5tYXBQYXJ0cyA9IGZ1bmN0aW9uICggbWFwVmFsdWUgKSB7XG5cdGlmICggISB0aGlzLnBhcnRzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMucGFydHNcblx0XHQubWFwKCAoIGN1cnJlbnQgKSA9PiB7XG5cdFx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjdXJyZW50ICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gY3VycmVudCgpO1xuXG5cdFx0XHRpZiAoIG51bGwgPT09IHJlc3VsdCB8fCB1bmRlZmluZWQgPT09IHJlc3VsdCB8fCAnJyA9PT0gcmVzdWx0ICkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtYXBWYWx1ZSggcmVzdWx0ICk7XG5cdFx0fSApXG5cdFx0LmpvaW4oICcnICk7XG59O1xuXG4vKipcbiAqIFBsYWluIHN0cmluZywgZm9yIGFzc2lnbmluZyB0byBlbGVtZW50IHByb3BlcnRpZXMgKGhyZWYsIHZhbHVlLCB0aXRsZS4uLiksXG4gKiB3aGVyZSBub3RoaW5nIGlzIHBhcnNlZCBhcyBIVE1MLlxuICovXG5DYWxjdWxhdGVkSHRtbFN0cmluZy5wcm90b3R5cGUuY2FsY3VsYXRlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5tYXBQYXJ0cyggKCByZXN1bHQgKSA9PiBTdHJpbmcoIHJlc3VsdCApICk7XG59O1xuXG4vKipcbiAqIEZvciBgaW5uZXJIVE1MYCBzaW5rcy4gRmllbGQgdmFsdWVzIGFyZSB1c2VyLWNvbnRyb2xsZWQgKHR5cGVkIHRleHQsXG4gKiBxdWVyeV92YXIgcHJlc2V0cywgLi4uKSwgc28gdGhleSBhcmUgc2FuaXRpemVkOyBtYXJrdXAgYWxyZWFkeSBidWlsdCBieVxuICogdHJ1c3RlZCBtYWNybyBoYW5kbGVycyAoU2FmZUh0bWwpIGFuZCB0aGUgYXV0aG9yJ3Mgc3RhdGljIHRleHQgYXJlIGtlcHQuXG4gKi9cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5jYWxjdWxhdGVIdG1sID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5tYXBQYXJ0cyhcblx0XHQoIHJlc3VsdCApID0+IHJlc3VsdCBpbnN0YW5jZW9mIFNhZmVIdG1sXG5cdFx0XHQ/IHJlc3VsdC50b1N0cmluZygpXG5cdFx0XHQ6IHNhbml0aXplSHRtbCggcmVzdWx0ICksXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkSHRtbFN0cmluZztcbiIsImNvbnN0IEhUTUxfRVNDQVBFX01BUCA9IHtcblx0JyYnOiAnJmFtcDsnLFxuXHQnPCc6ICcmbHQ7Jyxcblx0Jz4nOiAnJmd0OycsXG5cdCdcIic6ICcmcXVvdDsnLFxuXHQnXFwnJzogJyYjMDM5OycsXG59O1xuXG4vKipcbiAqIE1hcmtzIGEgc3RyaW5nIHRoYXQgd2FzIGFscmVhZHkgYnVpbHQgZnJvbSB0cnVzdGVkIG1hcmt1cCB3aXRoIGl0c1xuICogZHluYW1pYyBwYXJ0cyBlc2NhcGVkIChlLmcuIHRoZSByZXBlYXRlciBtYWNybyksIHNvIGl0IG11c3Qgbm90IGJlXG4gKiBlc2NhcGVkIGEgc2Vjb25kIHRpbWUuXG4gKi9cbmNsYXNzIFNhZmVIdG1sIHtcblx0Y29uc3RydWN0b3IoIGh0bWwgKSB7XG5cdFx0dGhpcy5odG1sID0gU3RyaW5nKCBodG1sICk7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5odG1sO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoIHZhbHVlICkge1xuXHRyZXR1cm4gU3RyaW5nKCB2YWx1ZSApLnJlcGxhY2UoIC9bJjw+XCInXS9nLCBjaGFyID0+IEhUTUxfRVNDQVBFX01BUFsgY2hhciBdICk7XG59XG5cbmV4cG9ydCB7IFNhZmVIdG1sLCBlc2NhcGVIdG1sIH07XG4iLCJmdW5jdGlvbiogaXRlcmF0ZUNvbW1lbnRzKFxuXHRyb290Tm9kZSwgYWNjZXB0Q2FsbGJhY2sgPSAoKSA9PiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgKSB7XG5cdC8vIEZvdXJ0aCBhcmd1bWVudCwgd2hpY2ggaXMgYWN0dWFsbHkgb2Jzb2xldGUgYWNjb3JkaW5nIHRvIHRoZVxuXHQvLyBET000IHN0YW5kYXJkLCBpcyByZXF1aXJlZCBpbiBJRSAxMVxuXHRjb25zdCBpdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihcblx0XHRyb290Tm9kZSxcblx0XHROb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCxcblx0XHR7XG5cdFx0XHRhY2NlcHROb2RlOiBhY2NlcHRDYWxsYmFjayxcblx0XHR9LFxuXHQpO1xuXHRsZXQgY3VyTm9kZTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cblx0d2hpbGUgKCBjdXJOb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSApIHtcblx0XHRjdXJOb2RlLm5vZGVWYWx1ZSA9IGN1ck5vZGUubm9kZVZhbHVlLnRyaW0oKTtcblxuXHRcdHlpZWxkIGN1ck5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0ZUNvbW1lbnRzOyIsImltcG9ydCBpdGVyYXRlQ29tbWVudHMgZnJvbSAnLi9pdGVyYXRlQ29tbWVudHMnO1xuXG5mdW5jdGlvbiogaXRlcmF0ZUpmYkNvbW1lbnRzKCByb290Tm9kZSApIHtcblx0Y29uc3QgYWNjZXB0Q2FsbGJhY2sgPSBub2RlID0+IHtcblx0XHRyZXR1cm4gIW5vZGUuamZiT2JzZXJ2ZWQgJiYgbm9kZS50ZXh0Q29udGVudC5pbmNsdWRlcyggJ0pGQl9GSUVMRDo6JyApO1xuXHR9O1xuXG5cdHlpZWxkKiBpdGVyYXRlQ29tbWVudHMoIHJvb3ROb2RlLCBhY2NlcHRDYWxsYmFjayApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRlSmZiQ29tbWVudHM7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuXHQgICAgICBzcHJpbnRmLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbi8qKlxuICogQHBhcmFtIGNvbW1lbnRcbiAqIEBwYXJhbSByb290ICAgIHtPYnNlcnZhYmxlfVxuICovXG5mdW5jdGlvbiBvYnNlcnZlQ29tbWVudCggY29tbWVudCwgcm9vdCApIHtcblx0aWYgKCBjb21tZW50LmpmYk9ic2VydmVkICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBjb21tZW50LnRleHRDb250ZW50ICk7XG5cblx0aWYgKCAhZm9ybXVsYS5wYXJ0cz8ubGVuZ3RoICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBodG1sIG1hY3JvJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBjb21tZW50IHRleHRcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRjb21tZW50LnRleHRDb250ZW50LFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXG5cdGNvbnN0IHByZXZTaWJsaW5nID0gY29tbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcblx0XHR3cmFwcGVyLFxuXHRcdGNvbW1lbnQsXG5cdCk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0cHJldlNpYmxpbmcuaW5uZXJIVE1MID0gZm9ybXVsYS5jYWxjdWxhdGVIdG1sKCk7XG5cdH07XG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdGNvbW1lbnQuamZiT2JzZXJ2ZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlQ29tbWVudDsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbi8qKlxuICogQHBhcmFtIG5vZGUgICAgIHtOb2RlfVxuICogQHBhcmFtIGF0dHJOYW1lIHtzdHJpbmd9XG4gKiBAcGFyYW0gcm9vdCAgICAge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIG9ic2VydmVNYWNyb0F0dHIoIG5vZGUsIGF0dHJOYW1lLCByb290ICkge1xuXHRjb25zdCBub2RlVmFsdWUgPSBub2RlWyBhdHRyTmFtZSBdID8/ICcnO1xuXG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiBub2RlVmFsdWUgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRIdG1sU3RyaW5nKCByb290ICk7XG5cdGZvcm11bGEub2JzZXJ2ZSggbm9kZVZhbHVlICk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0bm9kZVsgYXR0ck5hbWUgXSA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XG5cdH07XG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVNYWNyb0F0dHI7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xuXG5pbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge05vZGV9XG4gKiBAcGFyYW0gcm9vdCB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZU5vZGUoIG5vZGUsIHJvb3QgKSB7XG5cdGlmICggIW5vZGUuX19qZmJNYWNyb1RlbXBsYXRlICkge1xuXHRcdG5vZGUuX19qZmJNYWNyb1RlbXBsYXRlID0gbm9kZS5pbm5lckhUTUw7XG5cdH1cblxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRIdG1sU3RyaW5nKCByb290LCB7XG5cdFx0d2l0aFByZWZpeDogZmFsc2UsXG5cdFx0bWFjcm9Ib3N0OiBub2RlLFxuXHRcdG1hY3JvRm9ybWF0OiBub2RlLmRhdGFzZXQuamZiTWFjcm9Gb3JtYXQgfHwgJycsXG5cdH0gKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBgJSR7IG5vZGUuZGF0YXNldC5qZmJNYWNybyB9JWAgKTtcblxuXHRpZiAoICFmb3JtdWxhLnBhcnRzPy5sZW5ndGggKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXHRcdGNvbnNvbGUuZ3JvdXAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J0pldEZvcm1CdWlsZGVyOiBZb3UgaGF2ZSBpbnZhbGlkIGh0bWwgbWFjcm8nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIG1hY3JvXG5cdFx0XHRcdF9fKCAnQ29udGVudDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0bm9kZS5kYXRhc2V0LmpmYk1hY3JvLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRmb3JtdWxhLmNsZWFyV2F0Y2hlcnMoKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGUuZGF0YXNldC5qZmJPYnNlcnZlZCA9IDE7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0bGV0IGh0bWwgPSBTdHJpbmcoIGZvcm11bGEuY2FsY3VsYXRlSHRtbCgpICk7XG5cblx0XHRjb25zdCBoYXNUZXh0YXJlYSA9IG5vZGUucXVlcnlTZWxlY3Rvcj8uKCAndGV4dGFyZWEnICk7XG5cblx0XHRpZiAoIGhhc1RleHRhcmVhICkge1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSggL1xcclxcbnxcXHJ8XFxuL2csICc8YnI+JyApO1xuXHRcdH1cblxuXHRcdG5vZGUuaW5uZXJIVE1MID0gaHRtbDtcblx0fTtcblxuXHRmb3JtdWxhLnNldFJlc3VsdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlTm9kZTtcbiIsImZ1bmN0aW9uIHF1ZXJ5QnlBdHRyVmFsdWUoIHJvb3ROb2RlLCB2YWx1ZSApIHtcblx0Y29uc3QgeyByZXBsYWNlQXR0cnMgPSBbXSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cblx0Y29uc3QgcXVlcnlTZWxlY3RvciA9IFtdO1xuXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IHJlcGxhY2VBdHRycy5sZW5ndGg7IGkrKyApIHtcblx0XHRxdWVyeVNlbGVjdG9yLnB1c2goIGBbJHsgcmVwbGFjZUF0dHJzWyBpIF0gfSo9XCIkeyB2YWx1ZSB9XCJdYCApO1xuXHR9XG5cblx0cmV0dXJuIHJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoIHF1ZXJ5U2VsZWN0b3Iuam9pbiggJywgJyApICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QnlBdHRyVmFsdWU7IiwiLyoqXG4gKiBBbGxvd2xpc3QgSFRNTCBzYW5pdGl6ZXIgZm9yIHZhbHVlcyBzdWJzdGl0dXRlZCBpbnRvIGBpbm5lckhUTUxgIGJ5XG4gKiBIVE1MIG1hY3Jvcy4gVW5saWtlIHBsYWluIGVzY2FwaW5nIGl0IGtlZXBzIGhhcm1sZXNzIG1hcmt1cCAoV1lTSVdZR1xuICogZmllbGQgY29udGVudCwgPGJyPiwgPGI+LCBsaW5rcywgLi4uKSByZW5kZXJlZCBhcyBiZWZvcmUsIGJ1dCBkcm9wc1xuICogc2NyaXB0cywgZXZlbnQgaGFuZGxlcnMgYW5kIHNjcmlwdCBVUkxzLlxuICpcbiAqIFBhcnNpbmcgZ29lcyB0aHJvdWdoIERPTVBhcnNlciwgc28gbm90aGluZyBpcyBleGVjdXRlZCBvciBsb2FkZWQgd2hpbGVcbiAqIHRoZSB2YWx1ZSBpcyBpbnNwZWN0ZWQuXG4gKi9cbmNvbnN0IEFMTE9XRURfVEFHUyA9IG5ldyBTZXQoIFtcblx0J2EnLCAnYWJicicsICdiJywgJ2Jsb2NrcXVvdGUnLCAnYnInLCAnY2FwdGlvbicsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsXG5cdCdkZCcsICdkZWwnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2gxJywgJ2gyJyxcblx0J2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hyJywgJ2knLCAnaW1nJywgJ2lucycsICdsaScsICdtYXJrJywgJ29sJywgJ3AnLFxuXHQncHJlJywgJ3EnLCAncycsICdzbWFsbCcsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3ViJywgJ3N1cCcsICd0YWJsZScsXG5cdCd0Ym9keScsICd0ZCcsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0cicsICd1JywgJ3VsJyxcbl0gKTtcblxuLy8gUmVtb3ZlZCB0b2dldGhlciB3aXRoIHRoZWlyIGNvbnRlbnQgKG5ldmVyIHVud3JhcHBlZCkuXG5jb25zdCBEUk9QX1dJVEhfQ09OVEVOVCA9IG5ldyBTZXQoIFtcblx0J3NjcmlwdCcsICdzdHlsZScsICdpZnJhbWUnLCAnZnJhbWUnLCAnZnJhbWVzZXQnLCAnb2JqZWN0JywgJ2VtYmVkJyxcblx0J2FwcGxldCcsICd0ZW1wbGF0ZScsICdub3NjcmlwdCcsICdzdmcnLCAnbWF0aCcsICdmb3JtJywgJ2lucHV0JywgJ2J1dHRvbicsXG5cdCd0ZXh0YXJlYScsICdzZWxlY3QnLCAnb3B0aW9uJywgJ2xpbmsnLCAnbWV0YScsICdiYXNlJywgJ3RpdGxlJywgJ2hlYWQnLFxuXHQnYXVkaW8nLCAndmlkZW8nLCAnc291cmNlJywgJ3RyYWNrJywgJ2NhbnZhcycsICdkaWFsb2cnLCAneG1wJywgJ3BsYWludGV4dCcsXG5dICk7XG5cbmNvbnN0IEFMTE9XRURfQVRUUlMgPSBuZXcgU2V0KCBbXG5cdCdocmVmJywgJ3NyYycsICdhbHQnLCAndGl0bGUnLCAnY2xhc3MnLCAnc3R5bGUnLCAndGFyZ2V0JywgJ3JlbCcsICd3aWR0aCcsXG5cdCdoZWlnaHQnLCAnY29sc3BhbicsICdyb3dzcGFuJywgJ2FsaWduJywgJ2RpcicsICdsYW5nJyxcbl0gKTtcblxuY29uc3QgVVJMX0FUVFJTID0gbmV3IFNldCggWyAnaHJlZicsICdzcmMnIF0gKTtcblxuZnVuY3Rpb24gaXNTYWZlVXJsKCB2YWx1ZSApIHtcblx0Ly8gYnJvd3NlcnMgaWdub3JlIHRhYnMvbmV3bGluZXMvY29udHJvbCBjaGFycyBpbnNpZGUgdGhlIHNjaGVtZVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuXHRjb25zdCB1cmwgPSBTdHJpbmcoIHZhbHVlICkucmVwbGFjZSggL1tcXHUwMDAwLSBcXHUwMDdmLVxcdTAwOWZdL2csICcnICk7XG5cdGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKCAvXihbYS16XVthLXowLTkrLi1dKik6L2kgKTtcblxuXHRpZiAoICEgbWF0Y2ggKSB7XG5cdFx0cmV0dXJuIHRydWU7IC8vIHJlbGF0aXZlIHVybFxuXHR9XG5cblx0cmV0dXJuIFsgJ2h0dHAnLCAnaHR0cHMnLCAnbWFpbHRvJywgJ3RlbCcgXS5pbmNsdWRlcyhcblx0XHRtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCksXG5cdCk7XG59XG5cbi8vIE9ubHkgcGxhaW4gcHJlc2VudGF0aW9uYWwgcHJvcGVydGllcyBzdXJ2aXZlOyBldmVyeXRoaW5nIGVsc2UgKHBvc2l0aW9uLFxuLy8gY29udGVudCwgYmVoYXZpb3IsIEAtcnVsZXMuLi4pIGlzIGRyb3BwZWQuIFZhbHVlcyBjYW5ub3QgY29udGFpbiB1cmwoKSBvciBhbnlcbi8vIG90aGVyIGZ1bmN0aW9uIChzZWUgU0FGRV9TVFlMRV9WQUxVRSksIHNvIGV2ZW4gYGJhY2tncm91bmRgIGNhbm5vdCBsb2FkIGEgcmVzb3VyY2UuXG5jb25zdCBBTExPV0VEX1NUWUxFX1BST1BTID0gbmV3IFNldCggW1xuXHQnY29sb3InLCAnYmFja2dyb3VuZC1jb2xvcicsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ2ZvbnQtc2l6ZScsXG5cdCdmb250LWZhbWlseScsICd0ZXh0LWFsaWduJywgJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0LWluZGVudCcsXG5cdCd0ZXh0LXRyYW5zZm9ybScsICdsaW5lLWhlaWdodCcsICdsZXR0ZXItc3BhY2luZycsICd2ZXJ0aWNhbC1hbGlnbicsXG5cdCdsaXN0LXN0eWxlLXR5cGUnLCAnd2hpdGUtc3BhY2UnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ21heC13aWR0aCcsXG5cdCdtYXJnaW4nLCAnbWFyZ2luLXRvcCcsICdtYXJnaW4tcmlnaHQnLCAnbWFyZ2luLWJvdHRvbScsICdtYXJnaW4tbGVmdCcsXG5cdCdwYWRkaW5nJywgJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctcmlnaHQnLCAncGFkZGluZy1ib3R0b20nLCAncGFkZGluZy1sZWZ0Jyxcblx0J2Rpc3BsYXknLCAnZmxvYXQnLCAnb3BhY2l0eScsICdib3gtc2l6aW5nJywgJ29iamVjdC1maXQnLCAnd29yZC1icmVhaycsXG5cdCdvdmVyZmxvdy13cmFwJywgJ2xpc3Qtc3R5bGUnLCAnbWluLXdpZHRoJywgJ21pbi1oZWlnaHQnLCAnbWF4LWhlaWdodCcsXG5cdCdiYWNrZ3JvdW5kJywgJ2JvcmRlcicsICdib3JkZXItdG9wJywgJ2JvcmRlci1yaWdodCcsICdib3JkZXItYm90dG9tJyxcblx0J2JvcmRlci1sZWZ0JywgJ2JvcmRlci1jb2xvcicsICdib3JkZXItc3R5bGUnLCAnYm9yZGVyLXdpZHRoJyxcblx0J2JvcmRlci1yYWRpdXMnLFxuXSApO1xuXG4vLyBQbGFpbiB0b2tlbnMgb25seTogbm8gYmFja3NsYXNoIGVzY2FwZXMgKHRoZXkgY2FuIHNwZWxsIGB1cmwoYCksIG5vIGNvbW1lbnRzLFxuLy8gbm8gcXVvdGVzLCBhbmQgbm8gZnVuY3Rpb24gb3RoZXIgdGhhbiB0aGUgY29sb3VyIG9uZXMuXG5jb25zdCBTQUZFX1NUWUxFX1ZBTFVFID0gL15bYS16MC05IyUuLFxccystXSooPzooPzpyZ2J8cmdiYXxoc2x8aHNsYSlcXChbMC05LiwlXFxzLystXSpcXClbYS16MC05IyUuLFxccystXSopKiQvaTtcblxuLyoqXG4gKiBSZWJ1aWxkcyB0aGUgc3R5bGUgYXR0cmlidXRlIGZyb20gdmFsaWRhdGVkIGRlY2xhcmF0aW9ucyBpbnN0ZWFkIG9mXG4gKiBwYXR0ZXJuLW1hdGNoaW5nIGEgc3RyaW5nIHRoZSBicm93c2VyIHdpbGwgaW50ZXJwcmV0IGRpZmZlcmVudGx5LlxuICovXG5mdW5jdGlvbiBjbGVhblN0eWxlKCB2YWx1ZSApIHtcblx0cmV0dXJuIFN0cmluZyggdmFsdWUgKVxuXHRcdC5zcGxpdCggJzsnIClcblx0XHQubWFwKCAoIGRlY2xhcmF0aW9uICkgPT4ge1xuXHRcdFx0Y29uc3QgaW5kZXggPSBkZWNsYXJhdGlvbi5pbmRleE9mKCAnOicgKTtcblxuXHRcdFx0aWYgKCBpbmRleCA8IDEgKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcHJvcCA9IGRlY2xhcmF0aW9uLnNsaWNlKCAwLCBpbmRleCApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgdmFsICA9IGRlY2xhcmF0aW9uLnNsaWNlKCBpbmRleCArIDEgKS50cmltKCk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdEFMTE9XRURfU1RZTEVfUFJPUFMuaGFzKCBwcm9wICkgJiZcblx0XHRcdFx0dmFsICYmXG5cdFx0XHRcdFNBRkVfU1RZTEVfVkFMVUUudGVzdCggdmFsIClcblx0XHRcdCkgPyBgJHsgcHJvcCB9OiAkeyB2YWwgfWAgOiAnJztcblx0XHR9IClcblx0XHQuZmlsdGVyKCBCb29sZWFuIClcblx0XHQuam9pbiggJzsgJyApO1xufVxuXG5mdW5jdGlvbiBjbGVhbk5vZGUoIG5vZGUgKSB7XG5cdEFycmF5LmZyb20oIG5vZGUuY2hpbGROb2RlcyApLmZvckVhY2goICggY2hpbGQgKSA9PiB7XG5cdFx0aWYgKCAxICE9PSBjaGlsZC5ub2RlVHlwZSApIHtcblx0XHRcdC8vIGtlZXAgdGV4dCwgZHJvcCBjb21tZW50cy9wcm9jZXNzaW5nIGluc3RydWN0aW9ucy9ldGMuXG5cdFx0XHRpZiAoIDMgIT09IGNoaWxkLm5vZGVUeXBlICkge1xuXHRcdFx0XHRub2RlLnJlbW92ZUNoaWxkKCBjaGlsZCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGFnID0gY2hpbGQubG9jYWxOYW1lO1xuXG5cdFx0aWYgKCBEUk9QX1dJVEhfQ09OVEVOVC5oYXMoIHRhZyApICkge1xuXHRcdFx0bm9kZS5yZW1vdmVDaGlsZCggY2hpbGQgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNsZWFuTm9kZSggY2hpbGQgKTtcblxuXHRcdGlmICggISBBTExPV0VEX1RBR1MuaGFzKCB0YWcgKSApIHtcblx0XHRcdC8vIHVua25vd24gZWxlbWVudDoga2VlcCBpdHMgKGFscmVhZHkgY2xlYW5lZCkgY29udGVudCBvbmx5XG5cdFx0XHR3aGlsZSAoIGNoaWxkLmZpcnN0Q2hpbGQgKSB7XG5cdFx0XHRcdG5vZGUuaW5zZXJ0QmVmb3JlKCBjaGlsZC5maXJzdENoaWxkLCBjaGlsZCApO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5yZW1vdmVDaGlsZCggY2hpbGQgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdEFycmF5LmZyb20oIGNoaWxkLmF0dHJpYnV0ZXMgKS5mb3JFYWNoKCAoIGF0dHIgKSA9PiB7XG5cdFx0XHRjb25zdCBuYW1lID0gYXR0ci5uYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0ISBBTExPV0VEX0FUVFJTLmhhcyggbmFtZSApIHx8XG5cdFx0XHRcdCggVVJMX0FUVFJTLmhhcyggbmFtZSApICYmICEgaXNTYWZlVXJsKCBhdHRyLnZhbHVlICkgKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSggYXR0ci5uYW1lICk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdzdHlsZScgPT09IG5hbWUgKSB7XG5cdFx0XHRcdGNvbnN0IHN0eWxlID0gY2xlYW5TdHlsZSggYXR0ci52YWx1ZSApO1xuXG5cdFx0XHRcdGlmICggc3R5bGUgKSB7XG5cdFx0XHRcdFx0Y2hpbGQuc2V0QXR0cmlidXRlKCAnc3R5bGUnLCBzdHlsZSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnJlbW92ZUF0dHJpYnV0ZSggJ3N0eWxlJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gYnJvd3NpbmctY29udGV4dCBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgYW55IG5hbWVkIHRhcmdldCBrZWVwc1xuXHRcdC8vIHdpbmRvdy5vcGVuZXIsIHNvIGV2ZXJ5IHRhcmdldCBnZXRzIG5vb3BlbmVyIChyZXBsYWNpbmcgYSBzdXBwbGllZCByZWwpXG5cdFx0aWYgKCBjaGlsZC5oYXNBdHRyaWJ1dGUoICd0YXJnZXQnICkgKSB7XG5cdFx0XHRjaGlsZC5zZXRBdHRyaWJ1dGUoICdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicgKTtcblx0XHR9XG5cdH0gKTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVIdG1sKCB2YWx1ZSApIHtcblx0Y29uc3QgaHRtbCA9IFN0cmluZyggdmFsdWUgPz8gJycgKTtcblxuXHQvLyBmYXN0IHBhdGg6IG5vIG1hcmt1cCBhbmQgbm8gZW50aXRpZXMsIG5vdGhpbmcgdG8gc2FuaXRpemVcblx0aWYgKCAhIC9bPCZdLy50ZXN0KCBodG1sICkgKSB7XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH1cblxuXHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKFxuXHRcdGA8IWRvY3R5cGUgaHRtbD48Ym9keT4keyBodG1sIH1gLFxuXHRcdCd0ZXh0L2h0bWwnLFxuXHQpO1xuXG5cdGNsZWFuTm9kZSggZG9jLmJvZHkgKTtcblxuXHRyZXR1cm4gZG9jLmJvZHkuaW5uZXJIVE1MO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzYW5pdGl6ZUh0bWw7XG4iLCJpbXBvcnQgaW5pdEZvcm0gZnJvbSAnLi9pbml0Rm9ybSc7XG5cbmZ1bmN0aW9uIGluaXRFbGVtZW50b3IoKSB7XG5cdGlmICggISB3aW5kb3cuZWxlbWVudG9yRnJvbnRlbmQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHdpZGdldHMgPSB7XG5cdFx0J2pldC1lbmdpbmUtYm9va2luZy1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcblx0XHQnamV0LWZvcm0tYnVpbGRlci1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcblx0fTtcblxuXHRqUXVlcnkuZWFjaCggd2lkZ2V0cywgZnVuY3Rpb24oIHdpZGdldCwgY2FsbGJhY2sgKSB7XG5cdFx0d2luZG93LmVsZW1lbnRvckZyb250ZW5kLmhvb2tzLmFkZEFjdGlvbiggJ2Zyb250ZW5kL2VsZW1lbnRfcmVhZHkvJyArIHdpZGdldCwgY2FsbGJhY2sgKTtcblx0fSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0RWxlbWVudG9yOyIsImltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL09ic2VydmFibGUnO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgPz8ge307XG5cbmZ1bmN0aW9uIGluaXRGb3JtKCAkc2NvcGUgKSB7XG5cdGNvbnN0IGZvcm0gPSAkc2NvcGVbIDAgXS5xdWVyeVNlbGVjdG9yKCAnZm9ybS5qZXQtZm9ybS1idWlsZGVyJyApO1xuXG5cdGlmICggIWZvcm0gKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cblx0d2luZG93LkpldEZvcm1CdWlsZGVyWyBmb3JtLmRhdGFzZXQuZm9ybUlkIF0gPSBvYnNlcnZhYmxlO1xuXG5cdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2luaXQnLFxuXHRcdFsgJHNjb3BlLCBvYnNlcnZhYmxlIF0sXG5cdCk7XG5cblx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBmb3JtICk7XG5cblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWZ0ZXItaW5pdCcsXG5cdFx0WyAkc2NvcGUsIG9ic2VydmFibGUgXSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEZvcm07IiwiaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL0lucHV0RGF0YSc7XG5pbXBvcnQgeyBpc0NoYW5nZVR5cGUgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XG5pbXBvcnQgeyBTVFJJQ1RfTU9ERSB9IGZyb20gJy4uL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5cbmZ1bmN0aW9uIENoYW5nZURhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzQ2hhbmdlVHlwZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0fSApO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdGlmICggdGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcblx0fTtcblxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5zaWxlbmNlU2V0KCAnJyApO1xuXHR9O1xufVxuXG5DaGFuZ2VEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlRGF0YTsiLCJpbXBvcnQgTG9hZGluZ1JlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2snO1xuaW1wb3J0IHsgZ2V0U2lnbmFsIH0gZnJvbSAnLi4vc2lnbmFscy9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVwb3J0IH0gZnJvbSAnLi4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQYXJzZWROYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBpc1Zpc2libGUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgU1RSSUNUX01PREUgfSBmcm9tICcuLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xuXG5jb25zdCB7IGRvQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJbnB1dERhdGF9XG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lICAgIE5hbWUgb2YgaHRtbCBmaWVsZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGluZyBzcGVjaWFsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyc1xuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICAgICAgIFByZXBhcmVkIG5hbWUgb2ZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmllbGRcbiAqIEBwcm9wZXJ0eSB7SFRNTElucHV0RWxlbWVudHwqW119ICAgICAgICAgICAgICAgbm9kZXMgICAgICBSZWxhdGVkIG5vZGVzXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlVmFyfSAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICAgUmVhY3RpdmUgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7Q29uZGl0aW9uQ2hlY2tlcnxudWxsfSAgICAgICAgICAgICAgY2hlY2tlciAgICBDb25kaXRpb24gY2hlY2tlclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgYnlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25kaXRpb25hbCBCbG9ja1xuICogQHByb3BlcnR5IHsqfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjVmFsdWUgIENhbGN1bGF0ZWQgdmFsdWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIGJ5IENhbGN1bGF0ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWVsZFxuICogQHByb3BlcnR5IHtBZHZhbmNlZFJlcG9ydGluZ3xCcm93c2VyUmVwb3J0aW5nfSByZXBvcnRpbmcgIFJlcG9ydGluZyBvYmplY3RcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdmFsaWRhdGlvbiBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93aW5nIGVycm9yc1xuICogQHByb3BlcnR5IHtPYnNlcnZhYmxlfSAgICAgICAgICAgICAgICAgICAgICAgICByb290ICAgICAgIE5lYXJlc3Qgb2JzZXJ2YWJsZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLCBjb3VsZCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyBvZiB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRlclxuICogQHByb3BlcnR5IHtQYWdlU3RhdGV9ICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlICAgICAgIFJlbGF0ZWQgcGFnZSBpblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc3RlcCBmb3JtXG4gKiBAcHJvcGVydHkge0xvYWRpbmdSZWFjdGl2ZVZhcn0gICAgICAgICAgICAgICAgIGxvYWRpbmcgICAgUmVhY3RpdmUgdmFyIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlIHZpc3VhbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlIG9mIHRoZSBmaWVsZFxuICogQHByb3BlcnR5IHtPYmplY3Q8UmVhY3RpdmVWYXI+fSAgICAgICAgICAgICAgICBhdHRycyAgICAgIE9iamVjdCB3aXRoXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmUgYXR0cmlidXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkIElzIHJlcXVpcmVkIGZpZWxkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Igbm90XG4gKiBAcHJvcGVydHkge251bGx8UmVhY3RpdmVIb29rfSAgICAgICAgICAgICAgICAgIGVudGVyS2V5ICAgVXNlZCBmb3IgaGFuZGxpbmdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lciBob29rcyBvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNzIEVudGVyIGJ1dHRvblxuICogQHByb3BlcnR5IHtudWxsfHN0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGUgIFR5cGUgaWRlbnRpZmllciBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaWVsZFxuICovXG5mdW5jdGlvbiBJbnB1dERhdGEoKSB7XG5cdHRoaXMucmF3TmFtZSA9ICcnO1xuXHR0aGlzLm5hbWUgICAgPSAnJztcblx0dGhpcy5jb21tZW50ID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXXxIVE1MSW5wdXRFbGVtZW50W119XG5cdCAqL1xuXHR0aGlzLm5vZGVzID0gW107XG5cdHRoaXMuYXR0cnMgICAgICAgICA9IHt9O1xuXHR0aGlzLmVudGVyS2V5ICAgICAgPSBudWxsO1xuXHR0aGlzLmlucHV0VHlwZSAgICAgPSBudWxsO1xuXHR0aGlzLm9mZnNldE9uRm9jdXMgPSA3NTtcblxuXHQvKipcblx0ICogUGF0aCBmcm9tIHRvcCBvZiBmb3JtIHRvIGN1cnJlbnQgZmllbGQgbmFtZVxuXHQgKiBFeC46IFsgJ3JlcGVhdGVyX25hbWUnLCAwLCAndGV4dF9maWVsZCcgXVxuXHQgKiBXaGVyZTpcblx0ICogIC0gJ3JlcGVhdGVyX25hbWUnOiBuYW1lIG9mIHJlcGVhdGVyLCB3aGVyZSBjdXJyZW50IGZpZWxkIGlzIHBsYWNlZFxuXHQgKiAgLSAwOiBpbmRleCBvZiByZXBlYXRlciByb3csIHdoZXJlIGN1cnJlbnQgZmllbGQgaXMgcGxhY2VkXG5cdCAqICAtICd0ZXh0X2ZpZWxkJzogbmFtZSBvZiBjdXJyZW50IGZpZWxkIG5hbWVcblx0ICogQHR5cGUge0FycmF5PHN0cmluZyB8IG51bWJlcj59XG5cdCAqL1xuXHR0aGlzLnBhdGggPSBbXTtcblxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dGhpcy52YWx1ZSA9IHRoaXMuZ2V0UmVhY3RpdmUoKTtcblx0dGhpcy52YWx1ZS53YXRjaCggdGhpcy5vbkNoYW5nZS5iaW5kKCB0aGlzICkgKTtcblxuXHR0aGlzLmlzUmVxdWlyZWQgPSBmYWxzZTtcblx0dGhpcy5jYWxjVmFsdWUgID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9XG5cdCAqL1xuXHR0aGlzLnJlcG9ydGluZyA9IG51bGw7XG5cblx0dGhpcy5jaGVja2VyID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLnJvb3QgPSBudWxsO1xuXG5cdHRoaXMubG9hZGluZyA9IG5ldyBMb2FkaW5nUmVhY3RpdmVWYXIoIGZhbHNlICk7XG5cdHRoaXMubG9hZGluZy5tYWtlKCk7XG5cblx0LyoqXG5cdCAqIEluIENoZWNrYm94RGF0YSBjYXNlIHdlIGhhdmUganVzdCBtYWluIHNhbml0aXplciwgd2l0aG91dCBjYWxsYWJsZS5cblx0ICogU28gd2Ugc2V0IC5jYWxjVmFsdWUgaW5zaWRlIGNhbGxhYmxlLnJ1blNpZ25hbCgpXG5cdCAqXG5cdCAqIEFuZCB0byBwcmV2ZW50IHJlc2V0dGluZyAuY2FsY1ZhbHVlIGJ5IG9uQ2hhbmdlXG5cdCAqIHNldCB0aGlzIHByb3BlcnR5IHRvIEZBTFNFLlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IHRydWU7XG5cdHRoaXMudmFsaWRhdGVUaW1lciAgICA9IGZhbHNlO1xuXHR0aGlzLnN0b3BWYWxpZGF0aW9uICAgPSBmYWxzZTtcblx0dGhpcy5hYm9ydENvbnRyb2xsZXIgID0gbnVsbDtcbn1cblxuSW5wdXREYXRhLnByb3RvdHlwZS5hdHRycyA9IHt9O1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbklucHV0RGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgZXZlbnQgPT4ge1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0fSApO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2JsdXInLCAoKSA9PiB7fSApO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgKCkgPT4ge1xuXHRcdGlmICggdGhpcy5yZXBvcnRpbmcgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMucmVwb3J0aW5nLnN3aXRjaEJ1dHRvbnNTdGF0ZSApIHtcblx0XHRcdHRoaXMucmVwb3J0aW5nLnN3aXRjaEJ1dHRvbnNTdGF0ZSggdHJ1ZSApO1xuXHRcdH1cblxuXHRcdHRoaXMuZGVib3VuY2VkUmVwb3J0KCk7XG5cdH0gKTtcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0aWYgKCB0aGlzLnZhbHVlLmN1cnJlbnQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmNhbGxhYmxlLmxvY2tUcmlnZ2VyKCk7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xuXHR9ICk7XG5cblx0aWYgKCAnaW5wdXQnICE9PSB0aGlzLmlucHV0VHlwZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLm1ha2VSZWFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5vbk9ic2VydmUoKTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMoKTtcblx0dGhpcy5zZXRWYWx1ZSgpO1xuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSgpO1xuXG5cdHRoaXMudmFsdWUubWFrZSgpO1xuXG5cdGRvQWN0aW9uKCAnamV0LmZiLmlucHV0Lm1ha2VSZWFjdGl2ZScsIHRoaXMgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2hhbmdlICAgICA9IGZ1bmN0aW9uICggcHJldlZhbHVlICkge1xuXHRpZiAoIHRoaXMuaXNSZXNldENhbGNWYWx1ZSApIHtcblx0XHR0aGlzLmNhbGNWYWx1ZSA9IHRoaXMudmFsdWUuY3VycmVudDtcblx0fVxuXG5cdC8vIGFwcGx5IGNoYW5nZXMgaW4gRE9NXG5cdHRoaXM/LmNhbGxhYmxlPy5ydW4oIHByZXZWYWx1ZSApO1xuXG5cdC8vIHNob3cgZXJyb3JzXG5cdHRoaXMucmVwb3J0KCk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5yZXBvcnQgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2UoKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnJlcG9ydE9uQmx1ciA9IGZ1bmN0aW9uICggc2lnbmFsID0gbnVsbCApIHtcblx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkJsdXIoIHNpZ25hbCApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuZGVib3VuY2VkUmVwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggdGhpcy52YWxpZGF0ZVRpbWVyICkge1xuXHRcdHRoaXMuc3RvcFZhbGlkYXRpb24gPSB0cnVlO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy52YWxpZGF0ZVRpbWVyICk7XG5cblx0XHRpZiAoIHRoaXMuYWJvcnRDb250cm9sbGVyICkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgfVxuXHR9XG5cblx0dGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBsZXQgc2lnbmFsID0gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuXG5cdHRoaXMudmFsaWRhdGVUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcblx0XHR0aGlzLnJlcG9ydE9uQmx1ciggc2lnbmFsICk7XG5cdH0sIDQ1MCApO1xufVxuLyoqXG4gKiBAcGFyYW0gIGNhbGxhYmxlXG4gKiBAcmV0dXJuIHsoZnVuY3Rpb24oKTogKnwqW10pfCp9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRyZXR1cm4gdGhpcy52YWx1ZS53YXRjaCggY2FsbGFibGUgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLndhdGNoVmFsaWRpdHkgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRyZXR1cm4gdGhpcy5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS53YXRjaCggY2FsbGFibGUgKTtcbn07XG4vKipcbiAqIEBwYXJhbSAgY2FsbGFibGVcbiAqIEByZXR1cm4geyhmdW5jdGlvbigpOiAqfCpbXSl8Kn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5zYW5pdGl6ZSA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdHJldHVybiB0aGlzLnZhbHVlLnNhbml0aXplKCBjYWxsYWJsZSApO1xufTtcbi8qKlxuICogQHBhcmFtIGlucHV0RGF0YSB7SW5wdXREYXRhfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKCBpbnB1dERhdGEgKSB7XG5cdHRoaXMubm9kZXMgPSBbIC4uLmlucHV0RGF0YS5nZXROb2RlKCkgXTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgZmllbGRWYWx1ZTtcblx0aWYgKCB0aGlzLmlzQXJyYXkoKSApIHtcblx0XHRmaWVsZFZhbHVlID0gQXJyYXkuZnJvbSggdGhpcy5ub2RlcyApLlxuXHRcdFx0bWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0ZmllbGRWYWx1ZSA9IHRoaXMubm9kZXNbIDAgXT8udmFsdWU7XG5cdH1cblx0dGhpcy5jYWxjVmFsdWUgICAgID0gZmllbGRWYWx1ZTtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZmllbGRWYWx1ZTtcbn07XG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdHRoaXMubm9kZXMgICA9IFsgbm9kZSBdO1xuXHR0aGlzLnJhd05hbWUgPSBub2RlLm5hbWUgPz8gJyc7XG5cdHRoaXMubmFtZSAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xuXG5cdHRoaXMuaW5wdXRUeXBlID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xufTtcbi8qKlxuICogUnVucyBvbmNlIGluIGxpZmVjeWNsZS5cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5vbk9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHQvKipcblx0ICogU2F2ZSBsaW5rIHRvIHRoaXMgb2JqZWN0XG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xuXG5cdHRoaXMuaXNSZXF1aXJlZCA9IHRoaXMuY2hlY2tJc1JlcXVpcmVkKCk7XG5cblx0dGhpcy5jYWxsYWJsZSA9IGdldFNpZ25hbCggbm9kZSwgdGhpcyApO1xuXHR0aGlzLmNhbGxhYmxlLnNldElucHV0KCB0aGlzICk7XG5cblx0dGhpcy5yZXBvcnRpbmcgPSBjcmVhdGVSZXBvcnQoIHRoaXMgKTtcblxuXHR0aGlzLmxvYWRpbmcud2F0Y2goICgpID0+IHRoaXMub25DaGFuZ2VMb2FkaW5nKCkgKTtcblxuXHR0aGlzLnBhdGggPSBbIC4uLnRoaXMuZ2V0UGFyZW50UGF0aCgpLCB0aGlzLm5hbWUgXTtcblxuXHRpZiAoXG5cdFx0Ly8gaXMgYWpheFxuXHRcdCF0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKSB8fFxuXHRcdHRoaXMuaGFzUGFyZW50KClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIud2F0Y2hSZXNldCggKCkgPT4gdGhpcy5vbkNsZWFyKCkgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2hhbmdlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcblxuXHR0aGlzLmdldFN1Ym1pdCgpLmxvY2tTdGF0ZS5jdXJyZW50ID0gdGhpcy5sb2FkaW5nLmN1cnJlbnQ7XG5cblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXHRjb25zdCB3cmFwcGVyICA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcblxuXHR3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoICdpcy1sb2FkaW5nJywgdGhpcy5sb2FkaW5nLmN1cnJlbnQgKTtcbn07XG4vKipcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnNldFJvb3QgPSBmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XG59O1xuLyoqXG4gKiBCeSBkZWZhdWx0IGl0IHJ1bnMgb25seSBpZiByZXBlYXRlciBpdGVtIHdhcyByZW1vdmVkXG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubmFtZTtcbn07XG4vKipcbiAqIEByZXR1cm4ge0FycmF5IHwgc3RyaW5nIHwgYm9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMudmFsdWUuY3VycmVudDtcbn07XG4vKipcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzO1xufTtcbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5yYXdOYW1lLmluY2x1ZGVzKCAnW10nICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gY2FsbGFibGUgICAgIHtGdW5jdGlvbnxtaXhlZH1cbiAqIEBwYXJhbSBpbnB1dENvbnRleHQge0lucHV0RGF0YXxCb29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmJlZm9yZVN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUsIGlucHV0Q29udGV4dCA9IGZhbHNlICkge1xuXHR0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5wcm9taXNlKCBjYWxsYWJsZSwgaW5wdXRDb250ZXh0ICk7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtGb3JtU3VibWl0fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuZ2V0Um9vdCgpLmZvcm07XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdHJldHVybiB0aGlzLnJvb3Q7XG5cdH1cblx0cmV0dXJuIHRoaXMucm9vdC5wYXJlbnQuZ2V0Um9vdCgpO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG5cblx0cmV0dXJuIGlzVmlzaWJsZSggd3JhcHBlciApO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNpbGVuY2VTZXQoIG51bGwgKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBuZXcgUmVhY3RpdmVWYXIoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuY2hlY2tJc1JlcXVpcmVkID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0cmV0dXJuIG5vZGUucmVxdWlyZWQgPz8gISFub2RlLmRhdGFzZXQucmVxdWlyZWQ/Lmxlbmd0aDtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuc2lsZW5jZVNldCA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdC8qKlxuXHQgKiBSZWxhdGVkIHRvIGlzc3VlXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEyNjEjaXNzdWVjb21tZW50LTEyOTMyOTAyOTFcblx0ICovXG5cdGNvbnN0IHRlbXBSZXBvcnQgPSB0aGlzLnJlcG9ydC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcblxuXHR0aGlzLnJlcG9ydCA9IHRlbXBSZXBvcnQ7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLnNpbGVuY2VOb3RpZnkgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHRlbXBSZXBvcnQgPSB0aGlzLnJlcG9ydC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnZhbHVlLm5vdGlmeSgpO1xuXG5cdHRoaXMucmVwb3J0ID0gdGVtcFJlcG9ydDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5oYXNQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAhIXRoaXMucm9vdD8ucGFyZW50O1xufTtcblxuLyoqXG4gKiBGb3IgaW5zZXJ0IGVycm9ycyBpbiBhZHZhbmNlZCB2YWxpZGF0aW9uIG1vZGVcbiAqIEByZXR1cm4geyp9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0V3JhcHBlck5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzWyAwIF0uY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuaGFuZGxlRW50ZXJLZXkgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRpZiAoIGV2ZW50LmtleSAhPT0gJ0VudGVyJyB8fCAvLyBub3QgZW50ZXIga2V5XG5cdFx0IXRoaXMuZW50ZXJLZXkgfHwgLy8gaGFuZGxpbmcgZW50ZXIga2V5IGlzIGRpc2FibGVkXG5cdFx0ZXZlbnQuc2hpZnRLZXkgfHwgLy8gdGhlIHNoaWZ0IGtleSB3YXMgcHJlc3NlZFxuXHRcdGV2ZW50LmlzQ29tcG9zaW5nIC8vIGlmIHRoZSBldmVudCBpcyBmaXJlZCB3aXRoaW4gYSBjb21wb3NpdGlvbiBzZXNzaW9uXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0dGhpcy5vbkVudGVyS2V5KCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLm9uRW50ZXJLZXkgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGNhblN1Ym1pdCA9IHRoaXMuZW50ZXJLZXkuYXBwbHlGaWx0ZXJzKCB0cnVlICk7XG5cblx0aWYgKCBjYW5TdWJtaXQgKSB7XG5cdFx0Y29uc3QgY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gdGhpcy5nZXRTdWJtaXQoKS5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQ7XG5cblx0XHRpZiAoIHRydWUgPT09IGNhblRyaWdnZXJFbnRlclN1Ym1pdCApIHtcblx0XHRcdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0KCk7XG5cdFx0fVxuXHR9XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmluaXROb3RpZnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zaWxlbmNlTm90aWZ5KCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLm9uRm9jdXMgID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNjcm9sbFRvKCk7XG5cdHRoaXMuZm9jdXNSYXcoKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLmZvY3VzUmF3ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0LyoqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzIyNjUjaXNzdWVjb21tZW50LTE0NDc5ODg3MThcblx0ICovXG5cdGlmICggWyAnZGF0ZScsICd0aW1lJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRub2RlPy5mb2N1cyggeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0gKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuXG5cdHdpbmRvdy5zY3JvbGxUbygge1xuXHRcdHRvcDogZ2V0T2Zmc2V0VG9wKCB3cmFwcGVyICkgLSB0aGlzLm9mZnNldE9uRm9jdXMsXG5cdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHR9ICk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge1JlcG9ydGluZ0NvbnRleHR9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucm9vdC5nZXRDb250ZXh0KCk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW58SW5wdXREYXRhW119XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucG9wdWxhdGVJbm5lciA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBFeGVjdXRlZCB3aXRoIGRlZmF1bHQgYnJvd3NlciB2YWxpZGF0aW9uXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudHxIVE1MRWxlbWVudH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRSZXBvcnRpbmdOb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5ub2Rlc1sgMCBdO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRQYXJlbnRQYXRoID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge0FycmF5fE9iamVjdH1cblx0ICovXG5cdGNvbnN0IHZhbHVlID0gdGhpcy5yb290LnBhcmVudC52YWx1ZS5jdXJyZW50O1xuXG5cdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRmb3IgKCBjb25zdCBbIGluZGV4LCByb3cgXSBvZiBPYmplY3QuZW50cmllcyggdmFsdWUgKSApIHtcblx0XHRpZiAoIHJvdyAhPT0gdGhpcy5yb290ICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJldHVybiBbXG5cdFx0XHQuLi50aGlzLnJvb3QucGFyZW50LmdldFBhcmVudFBhdGgoKSxcblx0XHRcdHRoaXMucm9vdC5wYXJlbnQubmFtZSxcblx0XHRcdGluZGV4LFxuXHRcdF07XG5cdH1cblxuXHRyZXR1cm4gW107XG59O1xuXG4vKipcbiAqIFJ1bnMgb25seSBvbmNlIG9uIHdpbmRvdyBcImxvYWRcIiBldmVudFxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnJlUXVlcnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zZXRWYWx1ZSgpO1xuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSgpO1xufTtcblxuLyoqXG4gKiBSdW5zIG9uIHNldCBPYnNlcnZhYmxlLnZhbHVlLmN1cnJlbnRcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnJldmVydFZhbHVlID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdmFsdWU7XG59O1xuXG4vKipcbiAqIFJlY2FsY3VsYXRlIHRoZSBmb3JtdWxhIGJhc2VkIG9uIHRoZSBjdXJyZW50IGlucHV0IGRhdGEuXG4gKiBAc2luY2UgMy40LjVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMTc4NlxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnJlQ2FsY3VsYXRlRm9ybXVsYSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dERhdGE7XG4iLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcbmltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG5mdW5jdGlvbiBOb0xpc3RlbkRhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cdC8qKlxuXHQgKiBAdHlwZSB7Tm9kZX1cblx0ICovXG5cdHRoaXMuY29tbWVudCA9IG51bGw7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzSGlkZGVuKCBub2RlICk7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIHNpbGVuY2UgaXMgZ29sZGVuXG5cdH07XG5cdHRoaXMub25PYnNlcnZlICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUub25PYnNlcnZlLmNhbGwoIHRoaXMgKTtcblxuXHRcdGlmICggIXRoaXMuaXNBcnJheSgpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0Q29tbWVudCgpO1xuXHR9O1xuXHR0aGlzLnNldENvbW1lbnQgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNvbW1lbnQgICA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoIHRoaXMubmFtZSApO1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdG5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoIHRoaXMuY29tbWVudCwgbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR0aGlzLm1lcmdlID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHR0aGlzLm5vZGVzLnB1c2goIC4uLmlucHV0LmdldE5vZGUoKSApO1xuXHR9O1xufVxuXG5Ob0xpc3RlbkRhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb0xpc3RlbkRhdGE7IiwiaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL0lucHV0RGF0YSc7XG5pbXBvcnQgeyBpc1JhbmdlIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG5mdW5jdGlvbiBSYW5nZURhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdHRoaXMubnVtYmVyTm9kZSA9IG51bGw7XG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmFuZ2UoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5zZXROb2RlICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5udW1iZXJOb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlLW51bWJlcicsXG5cdFx0KTtcblx0fTtcbn1cblxuUmFuZ2VEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VEYXRhOyIsImltcG9ydCBOb0xpc3RlbkRhdGEgZnJvbSAnLi9Ob0xpc3RlbkRhdGEnO1xuaW1wb3J0IFJlYWN0aXZlU2V0IGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlU2V0JztcblxuY29uc3QgeyBidWlsdEluU3RhdGVzIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlU2V0fSB2YWx1ZSBSZWFjdGl2ZSB2YWx1ZVxuICpcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBSZW5kZXJTdGF0ZURhdGEoKSB7XG5cdE5vTGlzdGVuRGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0J2hpZGRlbicgPT09IG5vZGU/LnR5cGUgJiZcblx0XHRcdCdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlc1tdJyA9PT0gbm9kZS5uYW1lXG5cdFx0KTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHN0YXRlTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0dGhpcy5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0XHR0aGlzLnZhbHVlLmFkZCggc3RhdGVOYW1lICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cblx0ICovXG5cdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUgKSB7XG5cdFx0dGhpcy52YWx1ZS5yZW1vdmUoIHN0YXRlTmFtZSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XG5cdCAqIEBwYXJhbSBmb3JjZSAgICAge251bGx8Qm9vbGVhbn1cblx0ICovXG5cdHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUsIGZvcmNlID0gbnVsbCApIHtcblx0XHR0aGlzLnZhbHVlLnRvZ2dsZSggc3RhdGVOYW1lLCBmb3JjZSApO1xuXHR9O1xuXG5cdHRoaXMuaXNDdXN0b20gPSBmdW5jdGlvbiAoIGtleSApIHtcblx0XHRyZXR1cm4gIWJ1aWx0SW5TdGF0ZXMuaW5jbHVkZXMoIGtleSApO1xuXHR9O1xufVxuXG5SZW5kZXJTdGF0ZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTm9MaXN0ZW5EYXRhLnByb3RvdHlwZSApO1xuXG5SZW5kZXJTdGF0ZURhdGEucHJvdG90eXBlLmdldFJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gbmV3IFJlYWN0aXZlU2V0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJTdGF0ZURhdGE7IiwiaW1wb3J0IENoYW5nZURhdGEgZnJvbSAnLi9DaGFuZ2VEYXRhJztcbmltcG9ydCBSYW5nZURhdGEgZnJvbSAnLi9SYW5nZURhdGEnO1xuaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XG5pbXBvcnQgUmVuZGVyU3RhdGVEYXRhIGZyb20gJy4vUmVuZGVyU3RhdGVEYXRhJztcbmltcG9ydCB7IHNldEF0dHJzIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG5cdCAgICAgIGRvQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHR5cGUge2Z1bmN0aW9uKCk6ICp9XG4gKi9cbmNvbnN0IGdldERhdGFUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5pbnB1dHMnLFxuXHRbXG5cdFx0UmVuZGVyU3RhdGVEYXRhLFxuXHRcdFJhbmdlRGF0YSxcblx0XHRDaGFuZ2VEYXRhLFxuXHRcdE5vTGlzdGVuRGF0YSxcblx0XSxcbik7XG5cbmxldCBkYXRhVHlwZXMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0UHJlcGFyZWREYXRhVHlwZXMoKSB7XG5cdGlmICggIWRhdGFUeXBlcy5sZW5ndGggKSB7XG5cdFx0ZGF0YVR5cGVzID0gZ2V0RGF0YVR5cGVzKCk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5kYXRhVHlwZXMgXTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGVcbiAqIEBwYXJhbSAgb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KCBub2RlLCBvYnNlcnZhYmxlICkge1xuXHRmb3IgKCBjb25zdCBkYXRhVHlwZSBvZiBnZXRQcmVwYXJlZERhdGFUeXBlcygpICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgZGF0YVR5cGUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjdXJyZW50LnNldFJvb3QoIG9ic2VydmFibGUgKTtcblx0XHRjdXJyZW50LnNldE5vZGUoIG5vZGUgKTtcblx0XHRzZXRBdHRycyggY3VycmVudCApO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQuY3JlYXRlZCcsIGN1cnJlbnQgKTtcblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnICk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0SW5wdXRSZWdpc3RyeSgpIHtcblx0ZGF0YVR5cGVzID0gW107XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlZE5hbWUoIG5hbWUgKSB7XG5cdGNvbnN0IHJlZ2V4cHMgPSBbXG5cdFx0Ly8gbXVsdGlwbGUgZmllbGRzIChjaGVja2JveFtdKVxuXHRcdC9eKFtcXHdcXC1dKylcXFtcXF0kLyxcblx0XHQvLyBmaWVsZHMgaW5zaWRlIHJlcGVhdGVyIChyZXBfbmFtZVsxXVtjb250ZW50X2ZpZWxkXSlcblx0XHQvXltcXHdcXC1dK1xcW1xcZCtcXF1cXFsoW1xcd1xcLV0rKVxcXVxcWz9cXF0/JC8sXG5cdF07XG5cblx0Zm9yICggY29uc3QgcmVnRXhwIG9mIHJlZ2V4cHMgKSB7XG5cdFx0aWYgKCAhcmVnRXhwLnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBtYXRjaGVzID0gbmFtZS5tYXRjaCggcmVnRXhwICk7XG5cblx0XHRyZXR1cm4gbWF0Y2hlc1sgMSBdO1xuXHR9XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0cyB7SW5wdXREYXRhW119XG4gKi9cbmZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRzKCBpbnB1dHMgKSB7XG5cdGNvbnN0IGxpc3QgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0Y29uc3QgaW5uZXIgPSBpbnB1dC5wb3B1bGF0ZUlubmVyKCk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0aW5uZXI/Lmxlbmd0aCAmJiBsaXN0LnB1c2goIC4uLmlubmVyICk7XG5cblx0XHRsaXN0LnB1c2goIGlucHV0ICk7XG5cdH1cblxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IHsgZ2V0UGFyc2VkTmFtZSwgY3JlYXRlSW5wdXQsIHBvcHVsYXRlSW5wdXRzLCByZXNldElucHV0UmVnaXN0cnkgfTtcbiIsIi8qKlxuICogQHRoaXMge1JlYWN0aXZlVmFyfVxuICpcbiAqIEBjbGFzc1xuICovXG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIExvYWRpbmdSZWFjdGl2ZVZhcigpIHtcblx0UmVhY3RpdmVWYXIuY2FsbCggdGhpcywgZmFsc2UgKTtcblxuXHR0aGlzLnN0YXJ0ICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnQgPSB0cnVlO1xuXHR9O1xuXHR0aGlzLmVuZCAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnQgPSBmYWxzZTtcblx0fTtcblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jdXJyZW50ID0gIXRoaXMuY3VycmVudDtcblx0fTtcbn1cblxuTG9hZGluZ1JlYWN0aXZlVmFyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlYWN0aXZlVmFyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUmVhY3RpdmVWYXI7IiwiZnVuY3Rpb24gUmVhY3RpdmVIb29rKCkge1xuXHR0aGlzLmhhbmRsZXJzID0gW107XG59XG5cblJlYWN0aXZlSG9vay5wcm90b3R5cGUgPSB7XG5cdGFkZEZpbHRlciggY2FsbGFibGUgKSB7XG5cdFx0dGhpcy5oYW5kbGVycy5wdXNoKCBjYWxsYWJsZSApO1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG5cblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5oYW5kbGVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdH0sXG5cdGFwcGx5RmlsdGVycyggLi4ucGFyYW1zICkge1xuXHRcdGxldCBjdXJyZW50ICAgICA9IHBhcmFtc1sgMCBdO1xuXHRcdGNvbnN0IG5ld1BhcmFtcyA9IHBhcmFtcy5zbGljZSggMSApO1xuXG5cdFx0Zm9yICggY29uc3QgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzICkge1xuXHRcdFx0Y3VycmVudCA9IGhhbmRsZXIoIGN1cnJlbnQsIC4uLm5ld1BhcmFtcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVIb29rO1xuIiwiaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vUmVhY3RpdmVWYXInO1xuXG5mdW5jdGlvbiBSZWFjdGl2ZVNldCggdmFsdWUgKSB7XG5cdFJlYWN0aXZlVmFyLmNhbGwoIHRoaXMsIHZhbHVlICk7XG59XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlYWN0aXZlVmFyLnByb3RvdHlwZSApO1xuXG5SZWFjdGl2ZVNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUgKSB7XG5cdC8vIGFkZCB1bmlxdWUgdmFsdWVcblx0dGhpcy5jdXJyZW50ID0gW1xuXHRcdC4uLm5ldyBTZXQoIFtcblx0XHRcdC4uLihcblx0XHRcdFx0dGhpcy5jdXJyZW50ID8/IFtdXG5cdFx0XHQpLFxuXHRcdFx0c3RhdGVOYW1lLFxuXHRcdF0gKSxcblx0XTtcbn07XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0dGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LmZpbHRlcihcblx0XHRpdGVtID0+IGl0ZW0gIT09IHN0YXRlTmFtZSxcblx0KTtcbn07XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSwgZm9yY2UgPSBudWxsICkge1xuXHRpZiAoIG51bGwgIT09IGZvcmNlICkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRmb3JjZSA/IHRoaXMuYWRkKCBzdGF0ZU5hbWUgKSA6IHRoaXMucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggdGhpcy5jdXJyZW50LmluY2x1ZGVzKCBzdGF0ZU5hbWUgKSApIHtcblx0XHR0aGlzLnJlbW92ZSggc3RhdGVOYW1lICk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5hZGQoIHN0YXRlTmFtZSApO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZVNldDsiLCJpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gUmVhY3RpdmVWYXIoIHZhbHVlID0gbnVsbCApIHtcblx0dGhpcy5jdXJyZW50ICAgID0gdmFsdWU7XG5cdHRoaXMuc2lnbmFscyAgICA9IFtdO1xuXHR0aGlzLnNhbml0aXplcnMgPSBbXTtcblx0dGhpcy5pc0RlYnVnICAgID0gZmFsc2U7XG5cdHRoaXMuaXNTaWxlbmNlICA9IGZhbHNlO1xuXHR0aGlzLmlzTWFrZWQgICAgPSBmYWxzZTtcbn1cblxuUmVhY3RpdmVWYXIucHJvdG90eXBlID0ge1xuXHR3YXRjaE9uY2UgKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgY2xlYXJXYXRjaGVyID0gdGhpcy53YXRjaCggKCkgPT4ge1xuXHRcdFx0Y2xlYXJXYXRjaGVyKCk7XG5cdFx0XHRjYWxsYWJsZSgpO1xuXHRcdH0gKTtcblx0fSxcblx0d2F0Y2ggKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuc2lnbmFscy5zb21lKCAoIHsgc2lnbmFsIH0gKSA9PiBzaWduYWwgPT09IGNhbGxhYmxlICkgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNpZ25hbHMucHVzaCgge1xuXHRcdFx0c2lnbmFsOiBjYWxsYWJsZSxcblx0XHRcdHRyYWNlOiBuZXcgRXJyb3IoKS5zdGFjayxcblx0XHR9ICk7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuc2lnbmFscy5sZW5ndGggLSAxO1xuXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuc2lnbmFscy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdH0sXG5cdHNhbml0aXplICggY2FsbGFibGUgKSB7XG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCAtMSAhPT0gdGhpcy5zYW5pdGl6ZXJzLmluZGV4T2YoIGNhbGxhYmxlICkgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNhbml0aXplcnMucHVzaCggY2FsbGFibGUgKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zYW5pdGl6ZXJzLmxlbmd0aCAtIDE7XG5cblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zYW5pdGl6ZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0bWFrZSAoKSB7XG5cdFx0aWYgKCB0aGlzLmlzTWFrZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaXNNYWtlZCAgPSB0cnVlO1xuXHRcdGxldCBjdXJyZW50ICAgPSB0aGlzLmN1cnJlbnQ7XG5cdFx0bGV0IHByZXZWYWx1ZSA9IG51bGw7XG5cdFx0Y29uc3Qgc2VsZiAgICA9IHRoaXM7XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMsICdjdXJyZW50Jywge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdH0sXG5cdFx0XHRzZXQoIG5ld1ZhbCApIHtcblx0XHRcdFx0aWYgKCBjdXJyZW50ID09PSBuZXdWYWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByZXZWYWx1ZSA9IGN1cnJlbnQ7XG5cdFx0XHRcdGlmICggc2VsZi5pc0RlYnVnICkge1xuXHRcdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIG5vLWRlYnVnZ2VyICovXG5cdFx0XHRcdFx0Y29uc29sZS5ncm91cCggJ1JlYWN0aXZlVmFyIGhhcyBjaGFuZ2VkJyApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAnY3VycmVudDonLCBjdXJyZW50ICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICduZXdWYWw6JywgbmV3VmFsICk7XG5cdFx0XHRcdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdFx0XHRcdGRlYnVnZ2VyO1xuXHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSwgbm8tZGVidWdnZXIgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50ID0gc2VsZi5hcHBseVNhbml0aXplcnMoIG5ld1ZhbCApO1xuXG5cdFx0XHRcdGlmICggc2VsZi5pc1NpbGVuY2UgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYubm90aWZ5KCBwcmV2VmFsdWUgKTtcblx0XHRcdH0sXG5cdFx0fSApO1xuXHR9LFxuXHRub3RpZnkgKCBwcmV2VmFsdWUgPSBudWxsICkge1xuXHRcdHRoaXMuc2lnbmFscy5mb3JFYWNoKFxuXHRcdFx0KCB7IHNpZ25hbCB9ICkgPT4gc2lnbmFsLmNhbGwoIHRoaXMsIHByZXZWYWx1ZSApICk7XG5cdH0sXG5cdGFwcGx5U2FuaXRpemVycyAoIHZhbHVlICkge1xuXHRcdGZvciAoIGNvbnN0IHNhbml0aXplciBvZiB0aGlzLnNhbml0aXplcnMgKSB7XG5cdFx0XHR2YWx1ZSA9IHNhbml0aXplci5jYWxsKCB0aGlzLCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0SWZFbXB0eSggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCAhaXNFbXB0eSggdGhpcy5jdXJyZW50ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG5cdH0sXG5cdGRlYnVnKCkge1xuXHRcdHRoaXMuaXNEZWJ1ZyA9ICF0aGlzLmlzRGVidWc7XG5cdH0sXG5cdHNpbGVuY2UoKSB7XG5cdFx0dGhpcy5pc1NpbGVuY2UgPSAhdGhpcy5pc1NpbGVuY2U7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZVZhcjsiLCJpbXBvcnQgUmVwb3J0aW5nSW50ZXJmYWNlIGZyb20gJy4vUmVwb3J0aW5nSW50ZXJmYWNlJztcbmltcG9ydCB7IGFsbFJlamVjdGVkIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEJyb3dzZXJSZXBvcnRpbmcoKSB7XG5cdFJlcG9ydGluZ0ludGVyZmFjZS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHR0aGlzLnJlcG9ydFJhdyAgID0gZnVuY3Rpb24gKCkge1xuXHR9O1xuXHR0aGlzLnJlcG9ydEZpcnN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKTtcblxuXHRcdG5vZGUucmVwb3J0VmFsaWRpdHkoKTtcblx0fTtcblxuXHR0aGlzLnNldFJlc3RyaWN0aW9ucyAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0Y3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyggdGhpcywgbm9kZSApO1xuXHR9O1xuXHR0aGlzLmNsZWFyUmVwb3J0ICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gYnJvd3NlciBhdXRvbWF0aWNhbGx5IGhpZGUgdG9vbHRpcCBtZXNzYWdlc1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlT25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5nZXRFcnJvcnMoKS50aGVuKCBlcnJvcnMgPT4ge1xuXHRcdFx0dGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgPSAhQm9vbGVhbiggZXJyb3JzLmxlbmd0aCApO1xuXG5cdFx0XHRpZiAoICFlcnJvcnMubGVuZ3RoICkge1xuXHRcdFx0XHR0aGlzLmNsZWFyUmVwb3J0KCk7XG5cdFx0XHR9XG5cdFx0fSApLmNhdGNoKCAoKSA9PiB7fSApO1xuXHR9O1xuXG5cdHRoaXMuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcyApIHtcblx0XHRjb25zdCBlcnJvcnMgICA9IGF3YWl0IGFsbFJlamVjdGVkKCBwcm9taXNlcyApO1xuXHRcdHRoaXMudmFsdWVQcmV2ID0gdGhpcy5pbnB1dC5nZXRWYWx1ZSgpO1xuXG5cdFx0cmV0dXJuIGVycm9ycztcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xuXHR9O1xuXG5cdHRoaXMuaGFzQXV0b1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5oYXNBdXRvU2Nyb2xsKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLmdldE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQuZ2V0UmVwb3J0aW5nTm9kZSgpO1xuXHR9O1xufVxuXG5Ccm93c2VyUmVwb3J0aW5nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlclJlcG9ydGluZzsiLCJmdW5jdGlvbiBSZXBvcnRpbmdDb250ZXh0KCByb290ICkge1xuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLnJvb3QgPSByb290O1xuXG5cdHRoaXMucmVwb3J0ZWRGaXJzdCA9IGZhbHNlO1xuXHR0aGlzLnNpbGVuY2UgICAgICAgPSB0cnVlO1xuXG59XG5cblJlcG9ydGluZ0NvbnRleHQucHJvdG90eXBlID0ge1xuXHRyZXNldCggcHJvcHMgPSB7fSApIHtcblx0XHR0aGlzLnJlcG9ydGVkRmlyc3QgPSBmYWxzZTtcblx0XHR0aGlzLnNldFNpbGVuY2UoIHByb3BzPy5zaWxlbmNlID8/IHRydWUgKTtcblx0fSxcblx0cmVwb3J0Rmlyc3QoKSB7XG5cdFx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gdHJ1ZTtcblx0fSxcblx0c2V0U2lsZW5jZSggdmFsdWUgKSB7XG5cdFx0dGhpcy5zaWxlbmNlID0gISF2YWx1ZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGluZ0NvbnRleHQ7XG5cbiIsIi8qKlxuICogVmFsaWRhdGlvbiBsb2dpYzogb24gY2hhbmdlIGlucHV0IHZhbHVlIHdlIHJ1blxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UudmFsaWRhdGVPbkNoYW5nZVxuICpcbiAqIEluIHRoYXQgZnVuY3Rpb24gd2UgY2xlYXIgc3RvcmVkIGVycm9yc1xuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UuZXJyb3JzXG4gKiBjaGVjayBhbGwgcmVzdHJpY3Rpb25zIGFnYWluIGFuZCBzYXZlIGVycm9yc1xuICogdG8gdGhlIHNhbWUgcHJvcGVydHkuXG4gKlxuICogV2hlbiB1c2VyIHRyaWVzIHRvIHN1Ym1pdCBmb3JtIHdlIHJ1blxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UudmFsaWRhdGVcbiAqIElmIHRoZXJlIHdhcyBzdG9yZWQgZXJyb3JzIC0gaXQgd2lsbCByZXR1cm4gdGhlbS5cbiAqIE90aGVyd2lzZSB3ZSBjaGVjayBhbGwgYW5kIHNhdmUgZXJyb3JzLlxuICpcbiAqIEluIHRoZSBjYXNlIHdoZW4gd2UgcnVuIHRoZSB2YWxpZGF0aW9uIHRocm91Z2ggdGhlXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5pc1ZhbGlkXG4gKiBXZSBcImJsb2NrIHRoZSBmb3JtXCIgdGhyb3VnaCB0aGUgXCJ0ZXN0XCIgcHJvcGVydHkuXG4gKiBUaGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCBhbmQgd2hlbiBpdCBjaGFuZ2VzLFxuICogdGhlIHN0YXRlIG9mIHRoZSBidXR0b24gZm9yIHN1Ym1pdHRpbmcgdGhlIGZvcm1cbiAqIGFuZCB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGJldHdlZW4gcGFnZXMgY2hhbmdlcy5cbiAqL1xuaW1wb3J0IFJlc3RyaWN0aW9uRXJyb3IgZnJvbSAnLi9SZXN0cmljdGlvbkVycm9yJztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIFJlcG9ydGluZ0ludGVyZmFjZSgpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLmlucHV0ID0gbnVsbDtcblx0dGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBAdHlwZSB7QXJyYXkgfCBudWxsfVxuXHQgKi9cblx0dGhpcy5lcnJvcnMgPSBudWxsO1xuXHR0aGlzLnJlc3RyaWN0aW9ucyA9IFtdO1xuXG5cdHRoaXMudmFsdWVQcmV2ICAgICA9IG51bGw7XG5cdHRoaXMudmFsaWRpdHlTdGF0ZSA9IG51bGw7XG5cdHRoaXMucHJvbWlzZXNDb3VudCA9IDA7XG59XG5cblJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVzdHJpY3Rpb25bXX1cblx0ICovXG5cdHJlc3RyaWN0aW9uczogW10sXG5cdHZhbHVlUHJldjogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHZhbGlkaXR5U3RhdGU6IG51bGwsXG5cdHByb21pc2VzQ291bnQ6IDAsXG5cdC8qKlxuXHQgKiBSdW5zIG9uIGNoYW5naW5nIHZhbHVlIGluIHRoZSBmaWVsZFxuXHQgKiBAc2VlIElucHV0RGF0YS5vbkNoYW5nZVxuXHQgKi9cblx0dmFsaWRhdGVPbkNoYW5nZSAoKSB7XG5cdH0sXG5cdHZhbGlkYXRlT25CbHVyICgpIHtcblx0fSxcblx0LyoqXG5cdCAqIFJ1bnMgb24gdHJ5aW5nIHRvIHN1Ym1pdCBmb3JtXG5cdCAqIEBzZWUgT2JzZXJ2YWJsZS5pbnB1dHNBcmVWYWxpZFxuXHQgKlxuXHQgKiBSdW5zIG9uIGNoYW5naW5nIHZhbHVlLCBpZiB0aGlzIGZpZWxkIGluc2lkZSBwYWdlXG5cdCAqIEBzZWUgSW5wdXREYXRhLnNldFBhZ2Vcblx0ICogQHNlZSBQYWdlU3RhdGUudXBkYXRlU3RhdGVcblx0ICpcblx0ICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cblx0ICovXG5cdGFzeW5jIHZhbGlkYXRlICggc2lnbmFsID0gbnVsbCApIHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0gYXdhaXQgdGhpcy5nZXRFcnJvcnMoIHNpZ25hbCApO1xuXG5cdFx0dGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgPSAhQm9vbGVhbiggZXJyb3JzLmxlbmd0aCApO1xuXG5cdFx0aWYgKCAhZXJyb3JzLmxlbmd0aCApIHtcblx0XHRcdHRoaXMuY2xlYXJSZXBvcnQoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCF0aGlzLmlucHV0LnJvb3QuZ2V0Q29udGV4dCgpLnNpbGVuY2UgJiYgdGhpcy5yZXBvcnQoIGVycm9ycyApO1xuXG5cdFx0dGhyb3cgbmV3IFJlc3RyaWN0aW9uRXJyb3IoIGVycm9yc1sgMCBdLm5hbWUgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgcHJvbWlzZXMge0Z1bmN0aW9uW119XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXkgfCBudWxsPn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRhc3luYyBnZXRFcnJvcnNSYXcgKCBwcm9taXNlcyApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdnZXRFcnJvciBtdXN0IHJldHVybiBhIFByb21pc2UnICk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXkgfCAqW10gfCBudWxsPn1cblx0ICovXG5cdGFzeW5jIGdldEVycm9ycyAoIHNpZ25hbCA9IG51bGwgKSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5pbnB1dC5sb2FkaW5nLmN1cnJlbnQgfHxcblx0XHRcdHRoaXMuaW5wdXQ/LmNhbGxhYmxlPy5sb2NrPy5jdXJyZW50IHx8XG5cdFx0XHQhdGhpcy5pbnB1dC5pc1Zpc2libGUoKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5nZXRQcm9taXNlcyggc2lnbmFsICk7XG5cblx0XHRpZiAoXG5cdFx0XHQhdGhpcy5oYXNDaGFuZ2VkVmFsdWUoKSAmJlxuXHRcdFx0dGhpcy5wcm9taXNlc0NvdW50ID09PSBwcm9taXNlcy5sZW5ndGggJiZcblx0XHRcdCF0aGlzLmlucHV0LnN0b3BWYWxpZGF0aW9uICYmXG5cdFx0XHQvLyBSZWZyZXNoIGFsbCBzZWxlY3RzIGJlY2F1c2UgdGhlaXIgc3RhdGUgbWlnaHQgaGF2ZSBjaGFuZ2VkXG5cdFx0XHR0aGlzLmlucHV0LmlucHV0VHlwZSAhPT0gJ2hyLXNlbGVjdC1sZXZlbCdcblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9ycyA/PyBbXTtcblx0XHR9XG5cblx0XHR0aGlzLnByb21pc2VzQ291bnQgPSBwcm9taXNlcy5sZW5ndGg7XG5cdFx0dGhpcy5lcnJvcnMgICAgICAgID0gW107XG5cblx0XHRpZiAoICFwcm9taXNlcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvcnM7XG5cdFx0fVxuXG5cdFx0dGhpcy5lcnJvcnMgPSBhd2FpdCB0aGlzLmdldEVycm9yc1JhdyggcHJvbWlzZXMsIHNpZ25hbCApO1xuXHRcdHJldHVybiB0aGlzLmVycm9ycztcblx0fSxcblx0cmVwb3J0ICggdmFsaWRhdGlvbkVycm9ycyApIHtcblxuXHRcdGlmICggdGhpcy5pbnB1dC5nZXRDb250ZXh0KCkucmVwb3J0ZWRGaXJzdCApIHtcblx0XHRcdHRoaXMucmVwb3J0UmF3KCB2YWxpZGF0aW9uRXJyb3JzICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmlucHV0LmdldENvbnRleHQoKS5yZXBvcnRGaXJzdCgpO1xuXG5cdFx0dGhpcy5yZXBvcnRGaXJzdCggdmFsaWRhdGlvbkVycm9ycyApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIHZhbGlkYXRpb25FcnJvcnMge1Jlc3RyaWN0aW9uW119XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0cmVwb3J0UmF3ICggdmFsaWRhdGlvbkVycm9ycyApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdyZXBvcnQgaXMgZW1wdHknICk7XG5cdH0sXG5cdHJlcG9ydEZpcnN0ICggdmFsaWRhdGlvbkVycm9ycyApIHtcblx0XHR0aGlzLnJlcG9ydCggdmFsaWRhdGlvbkVycm9ycyApO1xuXHR9LFxuXHRjbGVhclJlcG9ydCAoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnY2xlYXJSZXBvcnQgaXMgZW1wdHknICk7XG5cdH0sXG5cdGdldFByb21pc2VzICggc2lnbmFsID0gbnVsbCkge1xuXHRcdGNvbnN0IHByb21pc2VzID0gW107XG5cblx0XHRmb3IgKCBjb25zdCByZXN0cmljdGlvbiBvZiB0aGlzLnJlc3RyaWN0aW9ucyApIHtcblx0XHRcdGlmICggIXRoaXMuY2FuUHJvY2Vzc1Jlc3RyaWN0aW9uKCByZXN0cmljdGlvbiApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYmVmb3JlUHJvY2Vzc1Jlc3RyaWN0aW9uKCByZXN0cmljdGlvbiApO1xuXG5cdFx0XHRwcm9taXNlcy5wdXNoKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdFx0cmVzdHJpY3Rpb24udmFsaWRhdGVQcm9taXNlKCBzaWduYWwgKS5cblx0XHRcdFx0XHR0aGVuKCAoKSA9PiByZXNvbHZlKCByZXN0cmljdGlvbiApICkuXG5cdFx0XHRcdFx0Y2F0Y2goIGVycm9yID0+IHJlamVjdCggWyByZXN0cmljdGlvbiwgZXJyb3IgXSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICByZXN0cmljdGlvbiB7UmVzdHJpY3Rpb259XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0Y2FuUHJvY2Vzc1Jlc3RyaWN0aW9uICggcmVzdHJpY3Rpb24gKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSByZXN0cmljdGlvbiB7UmVzdHJpY3Rpb259XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0YmVmb3JlUHJvY2Vzc1Jlc3RyaWN0aW9uICggcmVzdHJpY3Rpb24gKSB7XG5cdH0sXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcblx0LyoqXG5cdCAqIEBwYXJhbSAgbm9kZSAge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIGlucHV0ICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ2lzU3VwcG9ydGVkIGlzIGVtcHR5JyApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqL1xuXHRzZXRJbnB1dCAoIGlucHV0ICkge1xuXHRcdHRoaXMudmFsaWRpdHlTdGF0ZSA9IG5ldyBSZWFjdGl2ZVZhcigpO1xuXHRcdHRoaXMudmFsaWRpdHlTdGF0ZS5tYWtlKCk7XG5cblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XG5cdFx0dGhpcy5zZXRSZXN0cmljdGlvbnMoKTtcblx0XHR0aGlzLmZpbHRlclJlc3RyaWN0aW9ucygpO1xuXHR9LFxuXHRzZXRSZXN0cmljdGlvbnMgKCkge1xuXHR9LFxuXHQvKipcblx0ICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudHxIVE1MRWxlbWVudH1cblx0ICovXG5cdGdldE5vZGUgKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0Lm5vZGVzWyAwIF07XG5cdH0sXG5cblx0aGFzQ2hhbmdlZFZhbHVlICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVByZXYgIT09IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcblx0fSxcblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Kj59XG5cdCAqL1xuXHRjaGVja1ZhbGlkaXR5ICgpIHtcblx0XHRjb25zdCBpc1NpbGVuY2UgPSB0aGlzLmlucHV0LmdldENvbnRleHQoKS5zaWxlbmNlO1xuXG5cdFx0aWYgKCBudWxsID09PSB0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSgpO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblxuXHRcdGlmICggaXNTaWxlbmNlICkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCFpc1NpbGVuY2UgJiYgdGhpcy5yZXBvcnQoIHRoaXMuZXJyb3JzIHx8IFtdICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aGFzQXV0b1Njcm9sbCAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHQvKipcblx0ICogV2l0aCB0aGUgaGVscCBvZiBmaWx0ZXJzIHRoYXQgYWRkIG5ldyByZXN0cmljdGlvbnMsXG5cdCAqIHlvdSBjYW4gb3ZlcndyaXRlIGEgcGFydGljdWxhciByZXN0cmljdGlvblxuXHQgKiBpZiB0aGUgXCJ0eXBlXCIgcHJvcGVydHkgaXMgZGVmaW5lZCBpbiBpdFxuXHQgKi9cblx0ZmlsdGVyUmVzdHJpY3Rpb25zICgpIHtcblx0XHRjb25zdCBtYXAgPSB7fTtcblxuXHRcdGZvciAoIGxldCBbIGluZGV4LCByZXN0cmljdGlvbiBdIG9mIE9iamVjdC5lbnRyaWVzKFxuXHRcdFx0dGhpcy5yZXN0cmljdGlvbnMgKSApIHtcblx0XHRcdGluZGV4ID0gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpID8gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpIDogaW5kZXg7XG5cblx0XHRcdG1hcFsgaW5kZXggXSA9IHJlc3RyaWN0aW9uO1xuXHRcdH1cblxuXHRcdHRoaXMucmVzdHJpY3Rpb25zID0gT2JqZWN0LnZhbHVlcyggbWFwICk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRpbmdJbnRlcmZhY2U7IiwiZnVuY3Rpb24gUmVzdHJpY3Rpb25FcnJvciggbWVzc2FnZSApIHtcblx0RXJyb3IuY2FsbCggdGhpcywgbWVzc2FnZSApO1xuXG5cdGlmICggRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgKSB7XG5cdFx0RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoIHRoaXMsIFJlc3RyaWN0aW9uRXJyb3IgKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLnN0YWNrID0gKFxuXHRcdFx0bmV3IEVycm9yKClcblx0XHQpLnN0YWNrO1xuXHR9XG59XG5cblJlc3RyaWN0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXJyb3IucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RyaWN0aW9uRXJyb3I7IiwiLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKi9cbmltcG9ydCBCcm93c2VyUmVwb3J0aW5nIGZyb20gJy4vQnJvd3NlclJlcG9ydGluZyc7XG5pbXBvcnQgeyBhbGxSZWplY3RlZCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgSW5wdXREYXRhIGZyb20gJy4uL2lucHV0cy9JbnB1dERhdGEnO1xuaW1wb3J0IE5hdGl2ZVJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL05hdGl2ZVJlc3RyaWN0aW9uJztcbmltcG9ydCBSZXF1aXJlZFJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlcXVpcmVkUmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRSZXBvcnRUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5yZXBvcnRpbmcnLFxuXHRbXG5cdFx0QnJvd3NlclJlcG9ydGluZyxcblx0XSxcbik7XG5cbmxldCByZXBvcnRUeXBlcyA9IFtdO1xuXG5jb25zdCBnZXREZWZhdWx0UmVzdHJpY3Rpb25zID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0Jyxcblx0W1xuXHRcdE5hdGl2ZVJlc3RyaWN0aW9uLFxuXHRcdFJlcXVpcmVkUmVzdHJpY3Rpb24sXG5cdF0sXG4pO1xuXG5sZXQgZGVmYXVsdFJlc3RyaWN0aW9ucyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQcmVwYXJlZFJlcG9ydFR5cGVzKCkge1xuXHRpZiAoICFyZXBvcnRUeXBlcy5sZW5ndGggKSB7XG5cdFx0cmVwb3J0VHlwZXMgPSBnZXRSZXBvcnRUeXBlcygpO1xuXHR9XG5cblx0cmV0dXJuIFsgLi4ucmVwb3J0VHlwZXMgXTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlcGFyZWREZWZhdWx0UmVzdHJpY3Rpb25zKCkge1xuXHRpZiAoICFkZWZhdWx0UmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcblx0XHRkZWZhdWx0UmVzdHJpY3Rpb25zID0gZ2V0RGVmYXVsdFJlc3RyaWN0aW9ucygpO1xuXHR9XG5cblx0cmV0dXJuIFsgLi4uZGVmYXVsdFJlc3RyaWN0aW9ucyBdO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgcmVwb3J0aW5nIHtCcm93c2VyUmVwb3J0aW5nfVxuICogQHBhcmFtICBub2RlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zKCByZXBvcnRpbmcsIG5vZGUgKSB7XG5cdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIGdldFByZXBhcmVkRGVmYXVsdFJlc3RyaWN0aW9ucygpICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVzdHJpY3Rpb24oKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUsIHJlcG9ydGluZyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5wdXNoKCBjdXJyZW50ICk7XG5cdH1cblxuXHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLmZvckVhY2goIGl0ZW0gPT4gaXRlbS5zZXRSZXBvcnRpbmcoIHJlcG9ydGluZyApICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuICogQHJldHVybiB7QWR2YW5jZWRSZXBvcnRpbmd8QnJvd3NlclJlcG9ydGluZ31cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVwb3J0KCBpbnB1dCApIHtcblx0Zm9yICggY29uc3QgcmVwb3J0VHlwZSBvZiBnZXRQcmVwYXJlZFJlcG9ydFR5cGVzKCkgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXBvcnRUeXBlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBpbnB1dC5ub2Rlc1sgMCBdLCBpbnB1dCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGN1cnJlbnQuc2V0SW5wdXQoIGlucHV0ICk7XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvciggJ1NvbWV0aGluZyB3ZW50IHdyb25nJyApO1xufVxuXG5mdW5jdGlvbiByZXNldFJlcG9ydGluZ1JlZ2lzdHJ5KCkge1xuXHRyZXBvcnRUeXBlcyAgICAgICAgID0gW107XG5cdGRlZmF1bHRSZXN0cmljdGlvbnMgPSBbXTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIGlucHV0cyAge0lucHV0RGF0YVtdfVxuICogQHBhcmFtICBzaWxlbmNlIHtCb29sZWFufVxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9uW119XG4gKi9cbmZ1bmN0aW9uIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcblx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cblx0aW5wdXRzPy5bIDAgXT8uZ2V0Q29udGV4dCgpPy5yZXNldCggeyBzaWxlbmNlIH0gKTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0aWYgKCAhKFxuXHRcdFx0aW5wdXQgaW5zdGFuY2VvZiBJbnB1dERhdGFcblx0XHQpICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnSW5wdXQgaXMgbm90IGluc3RhbmNlIG9mIElucHV0RGF0YScgKTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tzLnB1c2goXG5cdFx0XHQoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdFx0aW5wdXQucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSgpLlxuXHRcdFx0XHRcdHRoZW4oIHJlc29sdmUgKS5cblx0XHRcdFx0XHRjYXRjaCggcmVqZWN0ICk7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gY2FsbGJhY2tzO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gIHNpbGVuY2Uge0Jvb2xlYW59XG4gKiBAcmV0dXJuIHtQcm9taXNlPHVua25vd25bXT59XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRzKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcblx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgKS5tYXAoXG5cdFx0XHRjdXJyZW50ID0+IG5ldyBQcm9taXNlKCBjdXJyZW50ICksXG5cdFx0KSxcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gc2lsZW5jZSB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dHNBbGwoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xuXHRyZXR1cm4gYWxsUmVqZWN0ZWQoIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgKSApO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVSZXBvcnQsXG5cdHZhbGlkYXRlSW5wdXRzLFxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcblx0Y3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyxcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXG5cdHJlc2V0UmVwb3J0aW5nUmVnaXN0cnksXG59O1xuIiwiaW1wb3J0IFJlc3RyaWN0aW9uIGZyb20gJy4vUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBOYXRpdmVSZXN0cmljdGlvbigpIHtcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuICEhbm9kZS5jaGVja1ZhbGlkaXR5O1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBub2RlcyB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQ7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG5vZGVzICkge1xuXHRcdFx0aWYgKCBub2RlLmNoZWNrVmFsaWRpdHkoKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5OYXRpdmVSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF0aXZlUmVzdHJpY3Rpb247IiwiaW1wb3J0IFJlc3RyaWN0aW9uIGZyb20gJy4vUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFJlcXVpcmVkUmVzdHJpY3Rpb24oKSB7XG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLnR5cGUgPSAncmVxdWlyZWQnO1xufVxuXG5SZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5SZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRyZXR1cm4gcmVwb3J0aW5nLmlucHV0LmlzUmVxdWlyZWQ7XG59O1xuXG5SZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZTtcblxuXHRyZXR1cm4gIWlzRW1wdHkoIGN1cnJlbnQgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkUmVzdHJpY3Rpb247IiwiZnVuY3Rpb24gUmVzdHJpY3Rpb24oKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuXHQgKi9cblx0dGhpcy5yZXBvcnRpbmcgPSBudWxsO1xuXHQvKipcblx0ICogWW91IGNhbiBvdmVycmlkZSB0aGlzIHByb3BlcnR5XG5cdCAqIGlmIHlvdSB3YW50IHRvIG1ha2UgdGhpcyBSZXN0cmljdGlvbiBvdmVycmlkYWJsZVxuXHQgKlxuXHQgKiBAc2luY2UgMy4xLjBcblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHRoaXMudHlwZSA9ICcnO1xufVxuXG5SZXN0cmljdGlvbi5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAgICAgIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxuXHQgKiBAcGFyYW0gcmVwb3J0aW5nIHtSZXBvcnRpbmdJbnRlcmZhY2V9XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0aXNTdXBwb3J0ZWQgKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4xLjBcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0VHlwZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cblx0ICovXG5cdHNldFJlcG9ydGluZyAoIHJlcG9ydGluZyApIHtcblx0XHR0aGlzLnJlcG9ydGluZyA9IHJlcG9ydGluZztcblx0fSxcblx0Z2V0VmFsdWUgKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXHR9LFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1yZXR1cm5zLWNoZWNrXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0dmFsaWRhdGUgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ3ZhbGlkYXRlIGlzIHdyb25nJyApO1xuXHR9LFxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTwqPn1cblx0ICovXG5cdGFzeW5jIHZhbGlkYXRlUHJvbWlzZSAoKSB7XG5cdFx0bGV0IHZhbGlkYXRpb25SZXN1bHQ7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggZXJyb3I/Lm1lc3NhZ2UgPz8gZXJyb3IgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsaWRhdGlvblJlc3VsdFxuXHRcdCAgICAgICA/IFByb21pc2UucmVzb2x2ZSgpXG5cdFx0ICAgICAgIDogUHJvbWlzZS5yZWplY3QoICd2YWxpZGF0ZSBpcyB3cm9uZycgKTtcblx0fSxcblx0b25SZWFkeSgpIHtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RyaWN0aW9uOyIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmNvbnN0IHsgc3RyaWN0X21vZGUgPSBmYWxzZSB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG5jb25zdCBTVFJJQ1RfTU9ERSA9IEJvb2xlYW4oIHN0cmljdF9tb2RlICk7XG5cbmZ1bmN0aW9uIEJhc2VTaWduYWwoKSB7XG5cdHRoaXMuaW5wdXQgPSBudWxsO1xuXHR0aGlzLmxvY2sgID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMubG9jay5tYWtlKCk7XG5cblx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gIVNUUklDVF9NT0RFO1xufVxuXG5CYXNlU2lnbmFsLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRpbnB1dDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdGxvY2s6IG51bGwsXG5cdC8qKlxuXHQgKiBAcGFyYW0gIG5vZGUgICAgICB7SFRNTEVsZW1lbnR9XG5cdCAqIEBwYXJhbSAgaW5wdXREYXRhIHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0aXNTdXBwb3J0ZWQgKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRzZXRJbnB1dCAoIGlucHV0ICkge1xuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0fSxcblx0cnVuICggcHJldlZhbHVlICkge1xuXHRcdGlmICggIXRoaXMubG9jay5jdXJyZW50ICkge1xuXHRcdFx0dGhpcy5ydW5TaWduYWwoIHByZXZWYWx1ZSApO1xuXHRcdFx0dGhpcy51bmxvY2tUcmlnZ2VyKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmxvY2suc2lnbmFscy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLmxvY2sud2F0Y2hPbmNlKCAoKSA9PiB0aGlzLnJ1blNpZ25hbCggcHJldlZhbHVlICkgKTtcblx0XHR9XG5cdH0sXG5cdHRyaWdnZXJKUXVlcnkoIG5vZGUgKSB7XG5cdFx0aWYgKCAhdGhpcy50cmlnZ2VyalF1ZXJ5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRqUXVlcnkoIG5vZGUgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIHByZXZWYWx1ZVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0cnVuU2lnbmFsICggcHJldlZhbHVlICkge1xuXHRcdC8vIHlvdXIgY29kZVxuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqL1xuXHRsb2NrVHJpZ2dlciAoKSB7XG5cdFx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gZmFsc2U7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdHVubG9ja1RyaWdnZXIgKCkge1xuXHRcdGlmICggU1RSSUNUX01PREUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcmpRdWVyeSA9IHRydWU7XG5cdH0sXG59O1xuXG5leHBvcnQgeyBTVFJJQ1RfTU9ERSB9O1xuZXhwb3J0IGRlZmF1bHQgQmFzZVNpZ25hbDsiLCJpbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL0Jhc2VTaWduYWwnO1xuaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIFNpZ25hbEhpZGRlbkFycmF5KCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcbn1cblxuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdHJldHVybiBpc0hpZGRlbiggbm9kZSApICYmIGlucHV0RGF0YS5pc0FycmF5KCk7XG59O1xuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cblx0aWYgKCAhY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5pbnB1dC5ub2RlcyApIHtcblx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dC5ub2Rlcy5zcGxpY2UoIDAsIHRoaXMuaW5wdXQubm9kZXMubGVuZ3RoICk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2F2ZU5vZGVzID0gW107XG5cblx0Zm9yICggY29uc3QgdmFsdWUgb2YgY3VycmVudCApIHtcblx0XHRjb25zdCBoYXNOb2RlV2l0aFNhbWVWYWx1ZSA9IHRoaXMuaW5wdXQubm9kZXMuc29tZShcblx0XHRcdCggbm9kZSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdGlmICggbm9kZS52YWx1ZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNhdmVOb2Rlcy5wdXNoKCBpbmRleCApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gKTtcblxuXHRcdGlmICggaGFzTm9kZVdpdGhTYW1lVmFsdWUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2lucHV0JyApO1xuXHRcdG5ld0VsZW1lbnQudHlwZSAgPSAnaGlkZGVuJztcblx0XHRuZXdFbGVtZW50LnZhbHVlID0gdmFsdWU7XG5cdFx0bmV3RWxlbWVudC5uYW1lICA9IHRoaXMuaW5wdXQucmF3TmFtZTtcblxuXHRcdHRoaXMuaW5wdXQubm9kZXMucHVzaCggbmV3RWxlbWVudCApO1xuXHRcdHNhdmVOb2Rlcy5wdXNoKCB0aGlzLmlucHV0Lm5vZGVzLmxlbmd0aCAtIDEgKTtcblxuXHRcdHRoaXMuaW5wdXQuY29tbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcblx0XHRcdG5ld0VsZW1lbnQsXG5cdFx0XHR0aGlzLmlucHV0LmNvbW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLFxuXHRcdCk7XG5cdH1cblxuXHR0aGlzLmlucHV0Lm5vZGVzID0gdGhpcy5pbnB1dC5ub2Rlcy5maWx0ZXIoICggbm9kZSwgaW5kZXggKSA9PiB7XG5cdFx0aWYgKCBzYXZlTm9kZXMuaW5jbHVkZXMoIGluZGV4ICkgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0bm9kZS5yZW1vdmUoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbEhpZGRlbkFycmF5OyIsImltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vQmFzZVNpZ25hbCc7XG5pbXBvcnQgeyBpc1JhbmdlIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmFuZ2VEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKi9cbmZ1bmN0aW9uIFNpZ25hbFJhbmdlKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JhbmdlKCBub2RlICk7XG5cdH07XG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXHRcdG5vZGUudmFsdWUgICAgID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0dGhpcy5pbnB1dC5udW1iZXJOb2RlLnRleHRDb250ZW50ID0gbm9kZS52YWx1ZTtcblxuXHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xuXHR9O1xufVxuXG5TaWduYWxSYW5nZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSYW5nZTsiLCJpbXBvcnQgU2lnbmFsSGlkZGVuQXJyYXkgZnJvbSAnLi9TaWduYWxIaWRkZW5BcnJheSc7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZW5kZXJTdGF0ZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBTaWduYWxSZW5kZXJTdGF0ZSgpIHtcblx0U2lnbmFsSGlkZGVuQXJyYXkuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlc1tdJyA9PT0gbm9kZS5uYW1lO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XG5cdFx0U2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLnJ1blNpZ25hbC5jYWxsKCB0aGlzLCBwcmV2VmFsdWUgKTtcblxuXHRcdGNvbnN0IHVybCAgICAgPSBuZXcgVVJMKCB3aW5kb3cubG9jYXRpb24gKTtcblx0XHRjb25zdCBmb3JtSWQgID0gdGhpcy5pbnB1dC5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdO1xuXHRcdGNvbnN0IHBhcmFtICAgPSBgamZiWyR7IGZvcm1JZCB9XVtzdGF0ZV1gO1xuXHRcdGNvbnN0IHN0YXRlcyAgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IHN0YXRlU2x1ZyBvZiBjdXJyZW50ICkge1xuXHRcdFx0aWYgKCAhdGhpcy5pbnB1dC5pc0N1c3RvbSggc3RhdGVTbHVnICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0ZXMucHVzaCggc3RhdGVTbHVnICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhc3RhdGVzLmxlbmd0aCApIHtcblx0XHRcdGlmICggIXVybC5zZWFyY2hQYXJhbXMuaGFzKCBwYXJhbSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCBwYXJhbSApO1xuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7fSwgJycsIHVybC50b1N0cmluZygpICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJhbVZhbHVlID0gc3RhdGVzLmpvaW4oICcsJyApO1xuXHRcdGlmICggdXJsLnNlYXJjaFBhcmFtcy5nZXQoIHBhcmFtICkgPT09IHBhcmFtVmFsdWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoIHBhcmFtLCBwYXJhbVZhbHVlICk7XG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7fSwgJycsIHVybC50b1N0cmluZygpICk7XG5cdH07XG59XG5cblNpZ25hbFJlbmRlclN0YXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSZW5kZXJTdGF0ZTsiLCJpbXBvcnQgU2lnbmFsSGlkZGVuQXJyYXkgZnJvbSAnLi9TaWduYWxIaWRkZW5BcnJheSc7XG5pbXBvcnQgU2lnbmFsUmFuZ2UgZnJvbSAnLi9TaWduYWxSYW5nZSc7XG5pbXBvcnQgU2lnbmFsUmVuZGVyU3RhdGUgZnJvbSAnLi9TaWduYWxSZW5kZXJTdGF0ZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFNpZ25hbFR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHRbXG5cdFx0U2lnbmFsUmFuZ2UsXG5cdFx0U2lnbmFsUmVuZGVyU3RhdGUsXG5cdFx0U2lnbmFsSGlkZGVuQXJyYXksXG5cdF0sXG4pO1xuXG4vKipcbiAqIEB0eXBlIHsoQmFzZVNpZ25hbClbXX1cbiAqL1xubGV0IHNpZ25hbFR5cGVzID0gW107XG5cbmZ1bmN0aW9uIGdldFByZXBhcmVkU2lnbmFsVHlwZXMoKSB7XG5cdGlmICggIXNpZ25hbFR5cGVzLmxlbmd0aCApIHtcblx0XHRzaWduYWxUeXBlcyA9IGdldFNpZ25hbFR5cGVzKCk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5zaWduYWxUeXBlcyBdO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSAge0hUTUxFbGVtZW50fVxuICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuICogQHJldHVybiB7QmFzZVNpZ25hbH1cbiAqL1xuZnVuY3Rpb24gZ2V0U2lnbmFsKCBub2RlLCBpbnB1dCApIHtcblx0Zm9yICggY29uc3Qgc2lnbmFsVHlwZSBvZiBnZXRQcmVwYXJlZFNpZ25hbFR5cGVzKCkgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBzaWduYWxUeXBlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBub2RlLCBpbnB1dCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVzZXRTaWduYWxSZWdpc3RyeSgpIHtcblx0c2lnbmFsVHlwZXMgPSBbXTtcbn1cblxuZXhwb3J0IHsgZ2V0U2lnbmFsLCByZXNldFNpZ25hbFJlZ2lzdHJ5IH07XG4iLCJpbXBvcnQgQmFzZVN1Ym1pdCBmcm9tICcuL0Jhc2VTdWJtaXQnO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcbmltcG9ydCB7IGlzU3VjY2Vzc1N0YXR1cyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEFqYXhTdWJtaXQoIGZvcm0gKSB7XG5cdEJhc2VTdWJtaXQuY2FsbCggdGhpcywgZm9ybSApO1xuXG5cdHRoaXMuc3RhdHVzID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMuc3RhdHVzLm1ha2UoKTtcblxuXHR0aGlzLnN1Ym1pdCAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgJGZvcm0gICAgICAgICAgICA9IGpRdWVyeSggdGhpcy5mb3JtLm9ic2VydmFibGUucm9vdE5vZGUgKTtcblx0XHRjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuXHRcdFByb21pc2UuYWxsKFxuXHRcdFx0YXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5hamF4LnByb21pc2VzJyxcblx0XHRcdFx0dGhpcy5nZXRQcm9taXNlcygpLFxuXHRcdFx0XHQkZm9ybSxcblx0XHRcdCksXG5cdFx0KS50aGVuKFxuXHRcdFx0Y2FsbGJhY2tzID0+IHRoaXMucnVuU3VibWl0KCBjYWxsYmFja3MgKSxcblx0XHQpLmNhdGNoKFxuXHRcdFx0KCkgPT4gdGhpcy5mb3JtLnRvZ2dsZSgpLFxuXHRcdCk7XG5cdH07XG5cdHRoaXMucnVuU3VibWl0ICAgICA9IGZ1bmN0aW9uICggY2FsbGJhY2tzICkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoIHJvb3ROb2RlICk7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKFxuXHRcdFx0J19qZXRfZW5naW5lX2Jvb2tpbmdfZm9ybV9pZCcsXG5cdFx0XHR0aGlzLmZvcm0uZ2V0Rm9ybUlkKCksXG5cdFx0KTtcblxuXHRcdC8vIGRpc2FibGUgd2F0Y2hlcnNcblx0XHR0aGlzLnN0YXR1cy5zaWxlbmNlKCk7XG5cblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gbnVsbDtcblxuXHRcdC8vIGVuYWJsZSB3YXRjaGVyc1xuXHRcdHRoaXMuc3RhdHVzLnNpbGVuY2UoKTtcblxuXHRcdGpRdWVyeS5hamF4KCB7XG5cdFx0XHR1cmw6IEpldEZvcm1CdWlsZGVyU2V0dGluZ3MuYWpheHVybCxcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRkYXRhOiBmb3JtRGF0YSxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHRcdGNvbnRlbnRUeXBlOiBmYWxzZSxcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcblx0XHR9ICkuZG9uZShcblx0XHRcdHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MoIHJlc3BvbnNlICk7XG5cdFx0XHRcdGNvbnN0ICRmb3JtID0galF1ZXJ5KCByb290Tm9kZSApO1xuXG5cdFx0XHRcdGNhbGxiYWNrcy5mb3JFYWNoKCBjYiA9PiB7XG5cdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2IgKSB7XG5cdFx0XHRcdFx0XHRjYi5jYWxsKCAkZm9ybSwgcmVzcG9uc2UgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0KS5mYWlsKFxuXHRcdFx0dGhpcy5vbkZhaWwuYmluZCggdGhpcyApLFxuXHRcdCk7XG5cdH07XG5cdHRoaXMub25TdWNjZXNzICAgICA9IGZ1bmN0aW9uICggcmVzcG9uc2UgKSB7XG5cdFx0dGhpcy5mb3JtLnRvZ2dsZSgpO1xuXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cblx0XHR0aGlzLmxhc3RSZXNwb25zZSA9IHJlc3BvbnNlO1xuXHRcdGNvbnN0ICRmb3JtICAgICAgID0galF1ZXJ5KCByb290Tm9kZSApO1xuXHRcdGNvbnN0IGNzcmZUb2tlbiAgID0gcmVzcG9uc2U/Ll9qZmJfY3NyZl90b2tlbjtcblxuXHRcdGlmICggY3NyZlRva2VuICkge1xuXHRcdFx0dGhpcy5yZWZyZXNoQ3NyZlRva2VuKCBjc3JmVG9rZW4gKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKCByZXNwb25zZS5zdGF0dXMgKSB7XG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcblx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWpheC9vbi1zdWNjZXNzJyxcblx0XHRcdFx0XHRbIHJlc3BvbnNlLCAkZm9ybSBdLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2FqYXgvcHJvY2Vzc2luZy1lcnJvcicsXG5cdFx0XHRcdFx0WyByZXNwb25zZSwgJGZvcm0gXVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVuIHN0YXR1cyB3YXRjaGVyc1xuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzLmN1cnJlbnQgPSByZXNwb25zZS5zdGF0dXM7XG5cblx0XHRpZiAoIHJlc3BvbnNlLnJlZGlyZWN0ICkge1xuXHRcdFx0aWYgKCByZXNwb25zZS5vcGVuX2luX25ld190YWIgKSB7XG5cdFx0XHRcdHdpbmRvdy5vcGVuKCByZXNwb25zZS5yZWRpcmVjdCwgJ19ibGFuaycgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHJlc3BvbnNlLnJlZGlyZWN0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmICggcmVzcG9uc2UucmVsb2FkICkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5zZXJ0TWVzc2FnZSggcmVzcG9uc2UubWVzc2FnZSApO1xuXHR9O1xuXHR0aGlzLm9uRmFpbCAgICAgICAgPSBmdW5jdGlvbiAoIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHtcblx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IGZhbHNlO1xuXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cdFx0Y29uc3QgJGZvcm0gICAgICAgID0galF1ZXJ5KCByb290Tm9kZSApO1xuXG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlci9hamF4L29uLWZhaWwnLFxuXHRcdFx0WyBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24sICRmb3JtIF1cblx0XHQpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmVycm9yKCBqcVhIUi5yZXNwb25zZVRleHQsIGVycm9yVGhyb3duICk7XG5cdH07XG5cdHRoaXMuaW5zZXJ0TWVzc2FnZSA9IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggJ2pldC1mb3JtLWJ1aWxkZXItbWVzc2FnZXMtd3JhcCcgKTtcblx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cblx0XHRyb290Tm9kZS5hcHBlbmRDaGlsZCggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnJlZnJlc2hDc3JmVG9rZW4gPSBmdW5jdGlvbiAoIGNzcmZUb2tlbiApIHtcblx0XHRjb25zdCBmb3JtSWQgPSB0aGlzLmZvcm0uZ2V0Rm9ybUlkKCk7XG5cdFx0Y29uc3QgZm9ybXMgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCdmb3JtLmpldC1mb3JtLWJ1aWxkZXJbZGF0YS1mb3JtLWlkXScsXG5cdFx0KTtcblxuXHRcdGZvciAoIGNvbnN0IGZvcm1Ob2RlIG9mIGZvcm1zICkge1xuXHRcdFx0aWYgKCArZm9ybU5vZGUuZGF0YXNldC5mb3JtSWQgIT09IGZvcm1JZCApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNzcmZGaWVsZHMgPSBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHQnaW5wdXRbbmFtZT1cIl9qZmJfY3NyZl90b2tlblwiXScsXG5cdFx0XHQpO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBmaWVsZCBvZiBjc3JmRmllbGRzICkge1xuXHRcdFx0XHRmaWVsZC52YWx1ZSA9IGNzcmZUb2tlbjtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbkFqYXhTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcbi8qKlxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxuICovXG5BamF4U3VibWl0LnByb3RvdHlwZS5zdGF0dXMgPSBudWxsO1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaFJlc2V0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cblx0aWYgKCAhcm9vdE5vZGUuZGF0YXNldD8uY2xlYXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy53YXRjaFN1Y2Nlc3MoIGNhbGxhYmxlICk7XG59O1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaFN1Y2Nlc3MgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcblxuXHRzdGF0dXMud2F0Y2goICgpID0+IHtcblx0XHRpZiAoIGlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzLmN1cnJlbnQgKSApIHtcblx0XHRcdGNhbGxhYmxlKCk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaEZhaWwgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcblxuXHRzdGF0dXMud2F0Y2goICgpID0+IHtcblx0XHRpZiAoICFpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cy5jdXJyZW50ICkgKSB7XG5cdFx0XHRjYWxsYWJsZSgpO1xuXHRcdH1cblx0fSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWpheFN1Ym1pdDtcbiIsIi8qKlxuICogQHBhcmFtIGZvcm0ge0Zvcm1TdWJtaXR9XG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gQmFzZVN1Ym1pdCggZm9ybSApIHtcblx0dGhpcy5mb3JtICAgICAgICAgPSBmb3JtO1xuXHR0aGlzLmxhc3RSZXNwb25zZSA9IHt9O1xuXHR0aGlzLnByb21pc2VzICAgICA9IFtdO1xufVxuXG5CYXNlU3VibWl0LnByb3RvdHlwZS5zdWJtaXQgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCAnWW91IG5lZWQgdG8gcmVwbGFjZSB0aGlzIGNhbGxiYWNrJyApO1xufTtcbkJhc2VTdWJtaXQucHJvdG90eXBlLmdldFByb21pc2VzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5wcm9taXNlcy5tYXAoICggeyBjYWxsYWJsZSB9ICkgPT4gbmV3IFByb21pc2UoIGNhbGxhYmxlICkgKTtcbn07XG4vKipcbiAqIEBwYXJhbSBjYWxsYWJsZSAgICAge0Z1bmN0aW9ufVxuICogQHBhcmFtIGlucHV0Q29udGV4dCB7SW5wdXREYXRhfEJvb2xlYW59XG4gKi9cbkJhc2VTdWJtaXQucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiAoIGNhbGxhYmxlLCBpbnB1dENvbnRleHQgPSBmYWxzZSApIHtcblx0Y29uc3QgcGF0aFN0ciA9IGlucHV0Q29udGV4dCA/IGlucHV0Q29udGV4dC5wYXRoLmpvaW4oICcuJyApIDogJyc7XG5cblx0dGhpcy5wcm9taXNlcyA9IHRoaXMucHJvbWlzZXMuZmlsdGVyKFxuXHRcdCggeyBpZFBhdGggfSApID0+ICFpZFBhdGggfHwgaWRQYXRoICE9PSBwYXRoU3RyLFxuXHQpO1xuXG5cdHRoaXMucHJvbWlzZXMucHVzaCgge1xuXHRcdGNhbGxhYmxlLFxuXHRcdGlkUGF0aDogaW5wdXRDb250ZXh0ID8gaW5wdXRDb250ZXh0LnBhdGguam9pbiggJy4nICkgOiAnJyxcblx0fSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZVN1Ym1pdDsiLCJpbXBvcnQgTG9hZGluZ1JlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhcic7XG5pbXBvcnQgQWpheFN1Ym1pdCBmcm9tICcuL0FqYXhTdWJtaXQnO1xuaW1wb3J0IFJlbG9hZFN1Ym1pdCBmcm9tICcuL1JlbG9hZFN1Ym1pdCc7XG5pbXBvcnQgeyBmb2N1c09uSW52YWxpZElucHV0IH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IHBvcHVsYXRlSW5wdXRzIH0gZnJvbSAnLi4vaW5wdXRzL2Z1bmN0aW9ucyc7XG5cbi8qKlxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XG4gKiBAY2xhc3NcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEZvcm1TdWJtaXQoIG9ic2VydmFibGUgKSB7XG5cblx0dGhpcy5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcblx0dGhpcy5sb2NrU3RhdGUgID0gbmV3IExvYWRpbmdSZWFjdGl2ZVZhciggZmFsc2UgKTtcblx0dGhpcy5sb2NrU3RhdGUubWFrZSgpO1xuXHR0aGlzLmF1dG9Gb2N1cyAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5hdXRvX2ZvY3VzO1xuXHR0aGlzLmNhblN1Ym1pdEZvcm0gICAgICAgICA9IHRydWU7XG5cdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gdHJ1ZTtcblx0LyoqXG5cdCAqIEBwYXJhbSBldmVudCB7RXZlbnR9XG5cdCAqL1xuXHR0aGlzLm9uU3VibWl0ID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dGhpcy5zdWJtaXQoKTtcblx0fTtcblxuXHR0aGlzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIHRydWUgPT09IHRoaXMuY2FuU3VibWl0Rm9ybSApIHtcblx0XHRcdHRoaXMuY2FuU3VibWl0Rm9ybSAgICAgICAgID0gZmFsc2U7XG5cdFx0XHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IGZhbHNlO1xuXG5cdFx0XHR0aGlzLm9ic2VydmFibGUuaW5wdXRzQXJlVmFsaWQoKS50aGVuKCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2xlYXJFcnJvcnMoKTtcblx0XHRcdFx0dGhpcy50b2dnbGUoKTtcblx0XHRcdFx0dGhpcy5zdWJtaXR0ZXIuc3VibWl0KCk7XG5cdFx0XHR9ICkuY2F0Y2goICgpID0+IHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdFx0XHR0aGlzLmF1dG9Gb2N1cyAmJiBmb2N1c09uSW52YWxpZElucHV0KFxuXHRcdFx0XHRcdHBvcHVsYXRlSW5wdXRzKCB0aGlzLm9ic2VydmFibGUuZ2V0SW5wdXRzKCkgKSxcblx0XHRcdFx0KTtcblx0XHRcdH0gKS5maW5hbGx5KCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5jYW5TdWJtaXRGb3JtICAgICAgICAgPSB0cnVlO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLmNsZWFyRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItbWVzc2FnZXMtd3JhcCcsXG5cdFx0KTtcblxuXHRcdGZvciAoIGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMgKSB7XG5cdFx0XHRtZXNzYWdlLnJlbW92ZSgpO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmxvY2tTdGF0ZS50b2dnbGUoKTtcblx0XHR0aGlzLnRvZ2dsZUxvYWRpbmcoKTtcblx0fTtcblxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHRoaXMuaGFuZGxlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7Tm9kZUxpc3RPZjxFbGVtZW50Pn1cblx0XHQgKi9cblx0XHRjb25zdCBidXR0b25zID0gdGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX3N1Ym1pdCcsXG5cdFx0KTtcblxuXHRcdHRoaXMubG9ja1N0YXRlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRmb3IgKCBjb25zdCBidXR0b24gb2YgYnV0dG9ucyApIHtcblx0XHRcdFx0YnV0dG9uLmRpc2FibGVkID0gdGhpcy5sb2NrU3RhdGUuY3VycmVudDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gdGhpcy5sb2NrU3RhdGUuY3VycmVudCApIHtcblx0XHRcdFx0dGhpcy5jYW5TdWJtaXRGb3JtID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH07XG5cblx0dGhpcy50b2dnbGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtbG9hZGluZycgKTtcblx0fTtcblxuXHR0aGlzLmNyZWF0ZVN1Ym1pdHRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IGNsYXNzTGlzdCB9ID0gdGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlO1xuXHRcdGNvbnN0IGlzQWpheCAgICAgICAgPSBjbGFzc0xpc3QuY29udGFpbnMoICdzdWJtaXQtdHlwZS1hamF4JyApO1xuXG5cdFx0cmV0dXJuIGlzQWpheCA/IG5ldyBBamF4U3VibWl0KCB0aGlzICkgOiBuZXcgUmVsb2FkU3VibWl0KCB0aGlzICk7XG5cdH07XG5cblx0dGhpcy5nZXRGb3JtSWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5vYnNlcnZhYmxlO1xuXG5cdFx0cmV0dXJuICtyb290Tm9kZS5kYXRhc2V0LmZvcm1JZDtcblx0fTtcblxuXHR0aGlzLm9uRW5kU3VibWl0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0dGhpcy5zdWJtaXR0ZXIuaGFzT3duUHJvcGVydHkoICdzdGF0dXMnIClcblx0XHQ/IHRoaXMuc3VibWl0dGVyLnN0YXR1cy53YXRjaCggY2FsbGFibGUgKVxuXHRcdDogdGhpcy5zdWJtaXR0ZXIub25GYWlsU3VibWl0KCBjYWxsYWJsZSApO1xuXHR9O1xuXG5cdHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdzdWJtaXQnLFxuXHRcdCggZXZlbnQgKSA9PiB0aGlzLm9uU3VibWl0KCBldmVudCApLFxuXHQpO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QWpheFN1Ym1pdHxSZWxvYWRTdWJtaXR9XG5cdCAqL1xuXHR0aGlzLnN1Ym1pdHRlciA9IHRoaXMuY3JlYXRlU3VibWl0dGVyKCk7XG5cblx0dGhpcy5oYW5kbGVCdXR0b25zKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TdWJtaXQ7IiwiaW1wb3J0IEJhc2VTdWJtaXQgZnJvbSAnLi9CYXNlU3VibWl0JztcblxuZnVuY3Rpb24gUmVsb2FkU3VibWl0KCBmb3JtICkge1xuXHRCYXNlU3VibWl0LmNhbGwoIHRoaXMsIGZvcm0gKTtcblxuXHR0aGlzLmZhaWxQcm9taXNlcyA9IFtdO1xuXG5cdHRoaXMuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSAgICAgPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblx0XHRjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuXHRcdFByb21pc2UuYWxsKFxuXHRcdFx0YXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5yZWxvYWQucHJvbWlzZXMnLFxuXHRcdFx0XHR0aGlzLmdldFByb21pc2VzKCksXG5cdFx0XHRcdHsgdGFyZ2V0OiByb290Tm9kZSB9LFxuXHRcdFx0KSxcblx0XHQpLnRoZW4oXG5cdFx0XHQoKSA9PiByb290Tm9kZS5zdWJtaXQoKSxcblx0XHQpLmNhdGNoKCAoKSA9PiB7XG5cdFx0XHR0aGlzLmZhaWxQcm9taXNlcy5mb3JFYWNoKCBjdXJyZW50ID0+IGN1cnJlbnQoKSApO1xuXG5cdFx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdHRoaXMub25GYWlsU3VibWl0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5mYWlsUHJvbWlzZXMucHVzaCggY2FsbGFibGUgKTtcblx0fTtcbn1cblxuUmVsb2FkU3VibWl0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTdWJtaXQucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbG9hZFN1Ym1pdDsiLCJmdW5jdGlvbiBpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cyApIHtcblx0cmV0dXJuICdzdWNjZXNzJyA9PT0gc3RhdHVzIHx8IHN0YXR1cz8uaW5jbHVkZXMoICdkc3VjY2Vzc3wnICk7XG59XG5cbmV4cG9ydCB7IGlzU3VjY2Vzc1N0YXR1cyB9OyIsIi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2hhbmdlVHlwZSggbm9kZSApIHtcblx0cmV0dXJuIFsgJ3NlbGVjdC1vbmUnLCAncmFuZ2UnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0hpZGRlbiggbm9kZSApIHtcblx0cmV0dXJuICdoaWRkZW4nID09PSBub2RlLnR5cGU7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzUmFuZ2UoIG5vZGUgKSB7XG5cdHJldHVybiAncmFuZ2UnID09PSBub2RlLnR5cGU7XG59XG5cbmV4cG9ydCB7XG5cdGlzSGlkZGVuLFxuXHRpc1JhbmdlLFxuXHRpc0NoYW5nZVR5cGUsXG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0eWxlc1xuaW1wb3J0ICcuL21haW4ucGNzcydcblxuaW1wb3J0IGluaXRFbGVtZW50b3IgZnJvbSAnLi9pbml0L2luaXRFbGVtZW50b3InO1xuaW1wb3J0IEJhc2VTaWduYWwgZnJvbSAnLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XG5pbXBvcnQgUmVhY3RpdmVTZXQgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVNldCc7XG5pbXBvcnQgTG9hZGluZ1JlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcbmltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgUmVwb3J0aW5nSW50ZXJmYWNlIGZyb20gJy4vcmVwb3J0aW5nL1JlcG9ydGluZ0ludGVyZmFjZSc7XG5pbXBvcnQge1xuXHRhbGxSZWplY3RlZCxcblx0Z2V0TGFuZ3VhZ2UsXG5cdHRvSFRNTCxcblx0aXNFbXB0eSxcblx0Z2V0T2Zmc2V0VG9wLFxuXHRmb2N1c09uSW52YWxpZElucHV0LFxuXHRpc1Zpc2libGUsIGdldFNjcm9sbFBhcmVudCwgYXBwbHlVc2VyQWdlbnRzLCBpc1VBLCByZXNldElucHV0SHRtbEF0dHJzUmVnaXN0cnksXG59IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24nO1xuaW1wb3J0IFJlc3RyaWN0aW9uRXJyb3IgZnJvbSAnLi9yZXBvcnRpbmcvUmVzdHJpY3Rpb25FcnJvcic7XG5pbXBvcnQge1xuXHR2YWxpZGF0ZUlucHV0cyxcblx0dmFsaWRhdGVJbnB1dHNBbGwsXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxuXHRyZXNldFJlcG9ydGluZ1JlZ2lzdHJ5LFxufSBmcm9tICcuL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xuXG5pbXBvcnQgJy4vY2FsYy5tb2R1bGUvbWFpbic7XG5pbXBvcnQge1xuXHRnZXRQYXJzZWROYW1lLFxuXHRwb3B1bGF0ZUlucHV0cyxcblx0cmVzZXRJbnB1dFJlZ2lzdHJ5LFxufSBmcm9tICcuL2lucHV0cy9mdW5jdGlvbnMnO1xuaW1wb3J0IGluaXRGb3JtIGZyb20gJy4vaW5pdC9pbml0Rm9ybSc7XG5pbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvQmFzZUh0bWxBdHRyJztcbmltcG9ydCBxdWVyeUJ5QXR0clZhbHVlIGZyb20gJy4vaHRtbC5tYWNyby9xdWVyeUJ5QXR0clZhbHVlJztcbmltcG9ydCBpdGVyYXRlQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVDb21tZW50cyc7XG5pbXBvcnQgaXRlcmF0ZUpmYkNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMnO1xuaW1wb3J0IG9ic2VydmVDb21tZW50IGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudCc7XG5pbXBvcnQgb2JzZXJ2ZU1hY3JvQXR0ciBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0cic7XG5pbXBvcnQgUmVxdWlyZWRSZXN0cmljdGlvbiBmcm9tICcuL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbic7XG5pbXBvcnQgeyByZXNldFNpZ25hbFJlZ2lzdHJ5IH0gZnJvbSAnLi9zaWduYWxzL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIHJlc2V0UnVudGltZVJlZ2lzdHJpZXMoKSB7XG5cdHJlc2V0SW5wdXRIdG1sQXR0cnNSZWdpc3RyeSgpO1xuXHRyZXNldElucHV0UmVnaXN0cnkoKTtcblx0cmVzZXRTaWduYWxSZWdpc3RyeSgpO1xuXHRyZXNldFJlcG9ydGluZ1JlZ2lzdHJ5KCk7XG59XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cblx0KSxcblx0SW5wdXREYXRhLFxuXHRCYXNlU2lnbmFsLFxuXHRSZWFjdGl2ZVZhcixcblx0UmVhY3RpdmVIb29rLFxuXHRMb2FkaW5nUmVhY3RpdmVWYXIsXG5cdE9ic2VydmFibGUsXG5cdFJlcG9ydGluZ0ludGVyZmFjZSxcblx0UmVzdHJpY3Rpb24sXG5cdFJlc3RyaWN0aW9uRXJyb3IsXG5cdEJhc2VIdG1sQXR0cixcblx0UmVhY3RpdmVTZXQsXG5cdFJlcXVpcmVkUmVzdHJpY3Rpb24sXG59O1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPz8ge31cblx0KSxcblx0YWxsUmVqZWN0ZWQsXG5cdGdldExhbmd1YWdlLFxuXHR0b0hUTUwsXG5cdHZhbGlkYXRlSW5wdXRzLFxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcblx0Z2V0UGFyc2VkTmFtZSxcblx0aXNFbXB0eSxcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXG5cdGdldE9mZnNldFRvcCxcblx0Zm9jdXNPbkludmFsaWRJbnB1dCxcblx0cG9wdWxhdGVJbnB1dHMsXG5cdGlzVmlzaWJsZSxcblx0cXVlcnlCeUF0dHJWYWx1ZSxcblx0aXRlcmF0ZUNvbW1lbnRzLFxuXHRvYnNlcnZlTWFjcm9BdHRyLFxuXHRvYnNlcnZlQ29tbWVudCxcblx0aXRlcmF0ZUpmYkNvbW1lbnRzLFxuXHRnZXRTY3JvbGxQYXJlbnQsXG5cdGlzVUEsXG5cdHJlc2V0UnVudGltZVJlZ2lzdHJpZXMsXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGFwcGx5VXNlckFnZW50cyApO1xuXG5qUXVlcnkoICgpID0+IEpldFBsdWdpbnMuaW5pdCgpICk7XG5cbkpldFBsdWdpbnMuYnVsa0Jsb2Nrc0luaXQoIFtcblx0e1xuXHRcdGJsb2NrOiAnamV0LWZvcm1zLmZvcm0tYmxvY2snLFxuXHRcdGNhbGxiYWNrOiBpbml0Rm9ybSxcblx0XHRjb25kaXRpb246ICgpID0+ICdsb2FkaW5nJyAhPT0gZG9jdW1lbnQucmVhZHlTdGF0ZSxcblx0fSxcbl0gKTtcblxualF1ZXJ5KCB3aW5kb3cgKS5vbiggJ2VsZW1lbnRvci9mcm9udGVuZC9pbml0JywgaW5pdEVsZW1lbnRvciApO1xuXG5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsICgpID0+IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlW119XG5cdCAqL1xuXHRjb25zdCBmb3JtcyA9IE9iamVjdC52YWx1ZXMoIHdpbmRvdy5KZXRGb3JtQnVpbGRlciApO1xuXG5cdGZvciAoIGNvbnN0IHJvb3Qgb2YgZm9ybXMgKSB7XG5cdFx0aWYgKCAhKCByb290IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJvb3QucmVRdWVyeVZhbHVlcygpO1xuXHR9XG59ICk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
