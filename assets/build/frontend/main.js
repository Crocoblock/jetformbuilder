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
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getTimestamp)(value);
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
 * @return {{time: number, type: string}}
 */
function getTimestamp(timeOrDate) {
  if (!Number.isNaN(+timeOrDate)) {
    return {
      time: +timeOrDate,
      type: 'number'
    };
  }
  timeOrDate = timeOrDate.toString();
  const dateParts = timeOrDate.split('-');
  if (dateParts.length > 1) {
    const date = new Date(timeOrDate);
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
  const macroValue = 'placeholder' === attrName && /^<!--(JFB_FIELD::.+)-->$/.test(nodeValue) ? nodeValue.slice(4, -3) : nodeValue;
  const formula = new _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__["default"](root);
  formula.observe(macroValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFNQTtBQUtBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNocUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBOztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUE4QkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUE7QUFDQTtBQU9BO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFjQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMvS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDOVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUVBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUtBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvQmFzZUh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvRmlsZUV4dGVuc2lvbkh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvTWF4RmlsZVNpemVIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL01heEZpbGVzSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9SZW1haW5pbmdDYWxjQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL0NhbGN1bGF0ZWRGb3JtdWxhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvYXBwbHlGaWx0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvYXR0YWNoQ29uc3ROYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvQmFzZUludGVybmFsTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvQ3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvRGF5X0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9Ib3VyX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9NaW5fSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL01vbnRoX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9ZZWFyX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkRGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9GYWxsQmFja0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9MZW5ndGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0SG91ckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0TWluRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0WWVhckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3REYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0SG91ckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0WWVhckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVGltZXN0YW1wRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub0RhdGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF0ZVRpbWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF5SW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9Ib3VySW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9NaW51dGVJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub01vbnRoSW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9UaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub1dlZWtJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub1llYXJJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZ2V0RmlsdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL21haW4uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vQ2FsY3VsYXRlZEh0bWxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL2VzY2FwZUh0bWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL2l0ZXJhdGVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU5vZGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL3Nhbml0aXplSHRtbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2luaXQvaW5pdEVsZW1lbnRvci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2luaXQvaW5pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvQ2hhbmdlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9JbnB1dERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvTm9MaXN0ZW5EYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL1JhbmdlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9SZW5kZXJTdGF0ZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVIb29rLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVTZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZVZhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9Ccm93c2VyUmVwb3J0aW5nLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1JlcG9ydGluZ0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVwb3J0aW5nSW50ZXJmYWNlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1Jlc3RyaWN0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9OYXRpdmVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL0Jhc2VTaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbEhpZGRlbkFycmF5LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxSYW5nZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsUmVuZGVyU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9BamF4U3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0Jhc2VTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9SZWxvYWRTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VwcG9ydHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9tYWluLnBjc3M/NzYwZCIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSW5wdXQsIHBvcHVsYXRlSW5wdXRzIH0gZnJvbSAnLi9pbnB1dHMvZnVuY3Rpb25zJztcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4vc3VibWl0L0Zvcm1TdWJtaXQnO1xuaW1wb3J0IHF1ZXJ5QnlBdHRyVmFsdWUgZnJvbSAnLi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUnO1xuaW1wb3J0IGl0ZXJhdGVKZmJDb21tZW50cyBmcm9tICcuL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzJztcbmltcG9ydCBvYnNlcnZlQ29tbWVudCBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZUNvbW1lbnQnO1xuaW1wb3J0IG9ic2VydmVNYWNyb0F0dHIgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVNYWNyb0F0dHInO1xuaW1wb3J0IG9ic2VydmVOb2RlIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTm9kZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0c0FsbCB9IGZyb20gJy4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XG5pbXBvcnQgUmVwb3J0aW5nQ29udGV4dCBmcm9tICcuL3JlcG9ydGluZy9SZXBvcnRpbmdDb250ZXh0JztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuY29uc3Qge1xuXHQgICAgICBkb0FjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5mdW5jdGlvbiBPYnNlcnZhYmxlKCBwYXJlbnQgPSBudWxsICkge1xuXHR0aGlzLnBhcmVudCAgICAgPSBwYXJlbnQ7XG5cdHRoaXMuZGF0YUlucHV0cyA9IHt9O1xuXHR0aGlzLmZvcm0gICAgICAgPSBudWxsO1xuXHR0aGlzLm11bHRpc3RlcCAgPSBudWxsO1xuXHR0aGlzLnJvb3ROb2RlICAgPSBudWxsO1xuXHR0aGlzLmlzT2JzZXJ2ZWQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqXG5cdCAqIEB0eXBlIHtSZXBvcnRpbmdDb250ZXh0fVxuXHQgKi9cblx0dGhpcy5jb250ZXh0ID0gdGhpcy5wYXJlbnQgPyBudWxsIDogbmV3IFJlcG9ydGluZ0NvbnRleHQoIHRoaXMgKTtcbn1cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVwZWF0ZXJEYXRhfG51bGx9XG5cdCAqL1xuXHRwYXJlbnQ6IG51bGwsXG5cdC8qKlxuXHQgKiB7XG5cdCAqICAgICBbZmllbGRfbmFtZV06IHtJbnB1dERhdGF9XG5cdCAqIH1cblx0ICovXG5cdGRhdGFJbnB1dHM6IHt9LFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Rm9ybVN1Ym1pdH1cblx0ICovXG5cdGZvcm06IG51bGwsXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtNdWx0aVN0ZXBTdGF0ZX1cblx0ICovXG5cdG11bHRpc3RlcDogbnVsbCxcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fEhUTUxGb3JtRWxlbWVudH1cblx0ICovXG5cdHJvb3ROb2RlOiBudWxsLFxuXHRpc09ic2VydmVkOiBmYWxzZSxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHZhbHVlOiBudWxsLFxuXHRvYnNlcnZlICggcm9vdCA9IG51bGwgKSB7XG5cdFx0aWYgKCB0aGlzLmlzT2JzZXJ2ZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICggbnVsbCAhPT0gcm9vdCApIHtcblx0XHRcdHRoaXMucm9vdE5vZGUgPSByb290O1xuXHRcdH1cblx0XHR0aGlzLmlzT2JzZXJ2ZWQgPSB0cnVlO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5iZWZvcmUnLCB0aGlzICk7XG5cblx0XHR0aGlzLmluaXRTdWJtaXRIYW5kbGVyKCk7XG5cblx0XHQvKipcblx0XHQgKiBJbml0aWFsaXplIGRhdGFJbnB1dHMgd2l0aCBmaWVsZHMuXG5cdFx0ICogV2l0aG91dCB2YWx1ZXNcblx0XHQgKi9cblx0XHR0aGlzLmluaXRGaWVsZHMoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFNldHVwIGZpZWxkcyB2YWx1ZXMgYW5kIG1ha2UgdGhlbSByZWFjdGl2ZVxuXHRcdCAqL1xuXHRcdHRoaXMubWFrZVJlYWN0aXZlUHJveHkoKTtcblxuXHRcdHRoaXMuaW5pdE1hY3JvcygpO1xuXG5cdFx0dGhpcy5pbml0QWN0aW9uQnV0dG9ucygpO1xuXG5cdFx0dGhpcy5pbml0VmFsdWUoKTtcblxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuYWZ0ZXInLCB0aGlzICk7XG5cdH0sXG5cblx0aW5pdEZpZWxkcyAoKSB7XG5cdFx0Zm9yICggY29uc3QgZm9ybUVsZW1lbnQgb2YgdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J1tkYXRhLWpmYi1zeW5jXScsXG5cdFx0KSApIHtcblx0XHRcdHRoaXMucHVzaElucHV0KCBmb3JtRWxlbWVudCApO1xuXHRcdH1cblx0fSxcblxuXHRpbml0TWFjcm9zICgpIHtcblx0XHQvLyBtYWNyb3MgYXMgaHRtbC1jb21tZW50c1xuXHRcdGZvciAoXG5cdFx0XHRjb25zdCBjb21tZW50IG9mIGl0ZXJhdGVKZmJDb21tZW50cyggdGhpcy5yb290Tm9kZSApXG5cdFx0XHQpIHtcblx0XHRcdG9ic2VydmVDb21tZW50KCBjb21tZW50LCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gbWFjcm9zIGluIGRlZmF1bHQgYXR0cmlidXRlc1xuXHRcdGNvbnN0IG5vZGVzV2l0aEF0dHJzID0gcXVlcnlCeUF0dHJWYWx1ZSggdGhpcy5yb290Tm9kZSwgJ0pGQl9GSUVMRDo6JyApO1xuXG5cdFx0Y29uc3QgeyByZXBsYWNlQXR0cnMgPSBbXSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlV2l0aEF0dHIgb2Ygbm9kZXNXaXRoQXR0cnMgKSB7XG5cdFx0XHRmb3IgKCBjb25zdCByZXBsYWNlQXR0ciBvZiByZXBsYWNlQXR0cnMgKSB7XG5cdFx0XHRcdG9ic2VydmVNYWNyb0F0dHIoIG5vZGVXaXRoQXR0ciwgcmVwbGFjZUF0dHIsIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBtYWNyb3MgaW4gZGF0YS1qZmItbWFjcm8gYXR0cmlidXRlXG5cdFx0Ly8gcmVzdWx0IHdpbGwgcGxhY2VkIGluc2lkZSByZWxhdGl2ZSBub2RlXG5cdFx0Y29uc3Qgbm9kZXMgPSB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnW2RhdGEtamZiLW1hY3JvXTpub3QoW2RhdGEtamZiLW9ic2VydmVkXSknLFxuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG5vZGVzICkge1xuXHRcdFx0b2JzZXJ2ZU5vZGUoIG5vZGUsIHRoaXMgKTtcblx0XHR9XG5cdH0sXG5cblx0aW5pdFN1Ym1pdEhhbmRsZXIgKCkge1xuXHRcdC8vIGNoZWNrIGlzIGN1cnJlbnQgb2JqZWN0IHJlbGF0ZWQgZm9yIGdsb2JhbCBmb3JtIGVsZW1lbnRcblx0XHRpZiAoIHRoaXMucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtU3VibWl0KCB0aGlzICk7XG5cdH0sXG5cblx0aW5pdEFjdGlvbkJ1dHRvbnMgKCkge1xuXHRcdGlmICggdGhpcy5wYXJlbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2J1dHRvbi1zd2l0Y2gtc3RhdGUnLFxuXHRcdCkgKSB7XG5cdFx0XHRsZXQgc3RhdGVzO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c3RhdGVzID0gSlNPTi5wYXJzZSggYnV0dG9uLmRhdGFzZXQuc3dpdGNoT24gKTtcblx0XHRcdH1cblx0XHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdldFN0YXRlKCkudmFsdWUuY3VycmVudCA9IHN0YXRlcztcblx0XHRcdH0gKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8UHJvbWlzZTxuZXZlcj58UHJvbWlzZTx2b2lkPj59XG5cdCAqL1xuXHRhc3luYyBpbnB1dHNBcmVWYWxpZCAoKSB7XG5cdFx0Y29uc3QgaW52YWxpZCA9IGF3YWl0IHZhbGlkYXRlSW5wdXRzQWxsKFxuXHRcdFx0cG9wdWxhdGVJbnB1dHMoIHRoaXMuZ2V0SW5wdXRzKCkgKSxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oIGludmFsaWQubGVuZ3RoIClcblx0XHQgICAgICAgPyBQcm9taXNlLnJlamVjdCggaW52YWxpZCApXG5cdFx0ICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH0sXG5cblx0d2F0Y2ggKCBmaWVsZE5hbWUsIGNhbGxhYmxlICkge1xuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5nZXRJbnB1dCggZmllbGROYW1lICk7XG5cblx0XHRpZiAoIGlucHV0ICkge1xuXHRcdFx0cmV0dXJuIGlucHV0LndhdGNoKCBjYWxsYWJsZSApO1xuXHRcdH1cblxuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdGBkYXRhSW5wdXRzIGluIE9ic2VydmFibGUgZG9uXFwndCBoYXZlICR7IGZpZWxkTmFtZSB9IGZpZWxkYCxcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAgICB7RWxlbWVudH1cblx0ICogQHBhcmFtIHJlcGxhY2Uge0Jvb2xlYW59XG5cdCAqL1xuXHRvYnNlcnZlSW5wdXQgKCBub2RlLCByZXBsYWNlID0gZmFsc2UgKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLnB1c2hJbnB1dCggbm9kZSwgcmVwbGFjZSApO1xuXG5cdFx0aW5wdXQubWFrZVJlYWN0aXZlKCk7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmlucHV0Lm1hbnVhbCcsIGlucHV0ICk7XG5cdH0sXG5cblx0bWFrZVJlYWN0aXZlUHJveHkgKCkge1xuXHRcdGZvciAoIGNvbnN0IGN1cnJlbnQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGN1cnJlbnQubWFrZVJlYWN0aXZlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAgICB7RWxlbWVudH1cblx0ICogQHBhcmFtIHJlcGxhY2Uge0Jvb2xlYW59XG5cdCAqL1xuXHRwdXNoSW5wdXQgKCBub2RlLCByZXBsYWNlID0gZmFsc2UgKSB7XG5cdFx0Ly8gcHJldmVudCBzYXZpbmcgaW5wdXRzIGZyb20gcHJlc2V0IHJlcGVhdGVyIGl0ZW1zIGluIHJvb3Qgb2JqZWN0XG5cdFx0Ly8gdGhvc2UgaW5wdXRzIHdvdWxkIHNhdmVkIGluIE9ic2VydmFibGVSb3cgb2JqZWN0XG5cblx0XHRpZiAoICF0aGlzLnBhcmVudCAmJlxuXHRcdFx0bm9kZS5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicgKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlucHV0RGF0YSA9IGNyZWF0ZUlucHV0KCBub2RlLCB0aGlzICk7XG5cdFx0Y29uc3QgZmluZElucHV0ID0gdGhpcy5kYXRhSW5wdXRzWyBpbnB1dERhdGEuZ2V0TmFtZSgpIF0gPz8gZmFsc2U7XG5cblx0XHRpZiAoIGZhbHNlID09PSBmaW5kSW5wdXQgfHwgcmVwbGFjZSApIHtcblx0XHRcdHRoaXMuZGF0YUlucHV0c1sgaW5wdXREYXRhLmdldE5hbWUoKSBdID0gaW5wdXREYXRhO1xuXG5cdFx0XHRyZXR1cm4gaW5wdXREYXRhO1xuXHRcdH1cblxuXHRcdGZpbmRJbnB1dC5tZXJnZSggaW5wdXREYXRhICk7XG5cblx0XHRyZXR1cm4gZmluZElucHV0O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBcnJheTxJbnB1dERhdGE+fVxuXHQgKi9cblx0Z2V0SW5wdXRzICgpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyggdGhpcy5kYXRhSW5wdXRzICk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge251bGx8UmVuZGVyU3RhdGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdGdldFN0YXRlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRJbnB1dCggJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzJyApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGZpZWxkTmFtZVxuXHQgKiBAcmV0dXJuIHtudWxsfElucHV0RGF0YX1cblx0ICovXG5cdGdldElucHV0ICggZmllbGROYW1lICkge1xuXHRcdGlmICggdGhpcy5kYXRhSW5wdXRzLmhhc093blByb3BlcnR5KCBmaWVsZE5hbWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xuXHRcdH1cblx0XHRjb25zdCByb290ID0gdGhpcy5wYXJlbnQ/LnJvb3QgPz8gbnVsbDtcblxuXHRcdGlmICggIXJvb3QgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRpZiAoIHJvb3QuZGF0YUlucHV0cy5oYXNPd25Qcm9wZXJ0eSggZmllbGROYW1lICkgKSB7XG5cdFx0XHRyZXR1cm4gcm9vdC5kYXRhSW5wdXRzWyBmaWVsZE5hbWUgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblx0Z2V0U3VibWl0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtIDogdGhpcy5wYXJlbnQucm9vdC5mb3JtO1xuXHR9LFxuXHRnZXRDb250ZXh0ICgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0ID8/IHRoaXMucGFyZW50LnJvb3QuY29udGV4dDtcblx0fSxcblx0LyoqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzI3MTFcblx0ICpcblx0ICogQHNpbmNlIDMuMC44XG5cdCAqL1xuXHRyZW1vdmUgKCkge1xuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRpbnB1dC5vblJlbW92ZSgpO1xuXHRcdH1cblx0fSxcblx0LyoqXG5cdCAqIFJ1bnMgb25seSBvbmNlIG9uIHdpbmRvdyBcImxvYWRcIiBldmVudFxuXHQgKi9cblx0cmVRdWVyeVZhbHVlcyAoKSB7XG5cdFx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGlucHV0LnJlUXVlcnlWYWx1ZSgpO1xuXHRcdH1cblx0fSxcblx0aW5pdFZhbHVlKCkge1xuXHRcdHRoaXMudmFsdWUgPSBuZXcgUmVhY3RpdmVWYXIoIHt9ICk7XG5cblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoXG5cdFx0XHRcdHRoaXMudmFsdWUuY3VycmVudCxcblx0XHRcdCk7XG5cblx0XHRcdGZvciAoIGNvbnN0IFsgZmllbGROYW1lLCB2YWx1ZSBdIG9mIGVudHJpZXMgKSB7XG5cdFx0XHRcdHRoaXMuZ2V0SW5wdXQoIGZpZWxkTmFtZSApLnJldmVydFZhbHVlKCB2YWx1ZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRpbnB1dC53YXRjaCggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnRbIGlucHV0LmdldE5hbWUoKSBdID0gaW5wdXQuZ2V0VmFsdWUoKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHR0aGlzLnZhbHVlLm1ha2UoKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7IiwiaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gQmFzZUh0bWxBdHRyKCkge1xuXHR0aGlzLmF0dHJOYW1lICAgPSAnJztcblx0dGhpcy5pbml0aWFsICAgID0gbnVsbDtcblx0dGhpcy5pc0Zyb21EYXRhID0gZmFsc2U7XG5cdHRoaXMudmFsdWUgICAgICA9IG51bGw7XG59XG5cbkJhc2VIdG1sQXR0ci5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBOYW1lIG9mIGRhdGEgYXR0cmlidXRlXG5cdCAqL1xuXHRhdHRyTmFtZTogJycsXG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0aW5wdXQ6IG51bGwsXG5cdGluaXRpYWw6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR2YWx1ZTogbnVsbCxcblx0b2JzZXJ2ZSgpIHtcblx0XHR0aGlzLnZhbHVlID0gbmV3IFJlYWN0aXZlVmFyKCB0aGlzLmluaXRpYWwgKTtcblx0XHR0aGlzLnZhbHVlLm1ha2UoKTtcblxuXHRcdHRoaXMuYWRkV2F0Y2hlckF0dHIoKTtcblx0fSxcblx0bm9kZVNpZ25hbCgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRub2RlWyB0aGlzLmF0dHJOYW1lIF0gPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cdH0sXG5cdGFkZFdhdGNoZXJBdHRyKCkge1xuXHRcdHRoaXMudmFsdWUud2F0Y2goICgpID0+IHRoaXMubm9kZVNpZ25hbCgpICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBJZiB5b3UgbmVlZCBzcGVjaWZpYyBjaGVjayxcblx0ICogeW91IGNhbiByZXdyaXRlIHRoaXMgZnVuY3Rpb25cblx0ICpcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aXNTdXBwb3J0ZWQoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRjb25zdCBoYXNJblJvb3QgICAgPSAtMSAhPT0gbm9kZVsgdGhpcy5hdHRyTmFtZSBdID8/IC0xO1xuXHRcdGNvbnN0IGhhc0luRGF0YVNldCA9IG5vZGUuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSggdGhpcy5hdHRyTmFtZSApO1xuXG5cdFx0aWYgKCAhaGFzSW5EYXRhU2V0ICYmICFoYXNJblJvb3QgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0aWFsID0gdGhpcy5nZXRJbml0aWFsKCBpbnB1dCApO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oIHRoaXMuaW5pdGlhbCApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHsqfGJvb2xlYW59XG5cdCAqL1xuXHRnZXRJbml0aWFsKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0cmV0dXJuIG5vZGUuZGF0YXNldFsgdGhpcy5hdHRyTmFtZSBdIHx8IG5vZGVbIHRoaXMuYXR0ck5hbWUgXSB8fCBmYWxzZTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqL1xuXHRzZXRJbnB1dCggaW5wdXQgKSB7XG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0O1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUh0bWxBdHRyOyIsImltcG9ydCBNYXhGaWxlc0h0bWxBdHRyIGZyb20gJy4vTWF4RmlsZXNIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIEZpbGVFeHRlbnNpb25IdG1sQXR0cigpIHtcblx0TWF4RmlsZXNIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdmaWxlX2V4dCc7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZSAmJiBCb29sZWFuKCBub2RlLmFjY2VwdCApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0ZpbGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHRoaXMuaW5pdGlhbCA9IG5vZGUuYWNjZXB0LnNwbGl0KCAnLCcgKTtcblx0fTtcblxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdHRoaXMudmFsdWUud2F0Y2goICgpID0+IHtcblx0XHRcdG5vZGUuYWNjZXB0ID0gdGhpcy52YWx1ZS5jdXJyZW50LmpvaW4oICcsJyApO1xuXHRcdH0gKTtcblx0fTtcbn1cblxuRmlsZUV4dGVuc2lvbkh0bWxBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVFeHRlbnNpb25IdG1sQXR0cjsiLCJpbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL01heEZpbGVzSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBNYXhGaWxlU2l6ZUh0bWxBdHRyKCkge1xuXHRNYXhGaWxlc0h0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ21heF9zaXplJztcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXG5cdFx0Y29uc3QgeyBtYXhfc2l6ZTogbWF4U2l6ZSA9IDEgfSA9IEpTT04ucGFyc2UoXG5cdFx0XHRpbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5kYXRhc2V0LmFyZ3MsXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdGlhbCA9ICttYXhTaXplO1xuXHR9O1xufVxuXG5NYXhGaWxlU2l6ZUh0bWxBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1heEZpbGVTaXplSHRtbEF0dHI7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL0Jhc2VIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIE1heEZpbGVzSHRtbEF0dHIoKSB7XG5cdEJhc2VIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdtYXhfZmlsZXMnO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0ZpbGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblxuXHRcdGNvbnN0IHsgbWF4X2ZpbGVzOiBtYXhGaWxlcyA9IDEgfSA9IEpTT04ucGFyc2UoXG5cdFx0XHRpbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5kYXRhc2V0LmFyZ3MsXG5cdFx0KTtcblxuXHRcdHRoaXMuaW5pdGlhbCA9ICttYXhGaWxlcztcblx0fTtcblxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gKCkgPT4ge307XG59XG5cbk1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUh0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNYXhGaWxlc0h0bWxBdHRyOyIsImltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9CYXNlSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBSZW1haW5pbmdDYWxjQXR0cigpIHtcblx0QmFzZUh0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ3JlbWFpbmluZyc7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0cmV0dXJuIGlucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCAnbWF4TGVuZ3RoJyApO1xuXHR9O1xuXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblx0XHRjb25zdCB7IG1heExlbmd0aCB9ID0gaW5wdXQuYXR0cnM7XG5cdFx0Y29uc3QgY3VycmVudCA9IGlucHV0LnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gbWF4TGVuZ3RoLnZhbHVlLmN1cnJlbnQgLSBjdXJyZW50O1xuXHR9O1xuXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSAoKSA9PiB7fTtcblxuXHR0aGlzLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMgKTtcblxuXHRcdHRoaXMuaW5wdXQudmFsdWUud2F0Y2goICgpID0+IHRoaXMudXBkYXRlQXR0cigpICk7XG5cdFx0dGhpcy5pbnB1dC5hdHRycy5tYXhMZW5ndGgudmFsdWUud2F0Y2goICgpID0+IHRoaXMudXBkYXRlQXR0cigpICk7XG5cdH07XG5cblx0dGhpcy51cGRhdGVBdHRyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoIH0gPSB0aGlzLmlucHV0LmF0dHJzO1xuXHRcdGNvbnN0IGN1cnJlbnQgICAgICAgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xuXG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbWF4TGVuZ3RoLnZhbHVlLmN1cnJlbnQgLSBjdXJyZW50O1xuXHR9O1xufVxuXG5SZW1haW5pbmdDYWxjQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWFpbmluZ0NhbGNBdHRyOyIsIi8qKlxuICogQHBhcmFtIGZvcm11bGFcbiAqIEBwYXJhbSByb290ICAgIHtPYnNlcnZhYmxlfVxuICogQGNsYXNzXG4gKi9cbmltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xuaW1wb3J0IGdldEZpbHRlcnMgZnJvbSAnLi9nZXRGaWx0ZXJzJztcbmltcG9ydCB7IGVzY2FwZUh0bWwgfSBmcm9tICcuLi9odG1sLm1hY3JvL2VzY2FwZUh0bWwnO1xuaW1wb3J0IGF0dGFjaENvbnN0TmFtZXNwYWNlIGZyb20gJy4vYXR0YWNoQ29uc3ROYW1lc3BhY2UnO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnM6IHdwRmlsdGVycyxcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5jdXN0b20uZm9ybXVsYS5tYWNybycsXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0YXR0YWNoQ29uc3ROYW1lc3BhY2UsXG4pO1xuXG4vLyBNYXRjaGVzIGEgc3RyaW5nIHRoYXQgaXMgKmVudGlyZWx5KiBjb25zdW1lZCBieSBhIHNpbmdsZSBudW1lcmljIGxpdGVyYWxcbi8vIChvcHRpb25hbGx5IHNpZ25lZCwgb3B0aW9uYWxseSBkZWNpbWFsLCBvcHRpb25hbGx5IHNjaWVudGlmaWMgbm90YXRpb24pIC1cbi8vIG5vIGxlZnRvdmVyIGNoYXJhY3RlcnMgYWxsb3dlZC4gVXNlZCBieSBjYWxjdWxhdGVFdmFsU3RyaW5nKCkgdG8gZGVjaWRlXG4vLyB3aGV0aGVyIGEgc3Vic3RpdHV0ZWQgdmFsdWUgbWF5IGJlIGVtaXR0ZWQgYXMgYSBiYXJlIG51bWVyaWMgbGl0ZXJhbFxuLy8gaW5zdGVhZCBvZiBhIEpTT04tcXVvdGVkIHN0cmluZy5cbmNvbnN0IE5VTUVSSUNfTElURVJBTF9SRSA9IC9eWystXT8oXFxkK1xcLj9cXGQqfFxcLlxcZCspKFtlRV1bKy1dP1xcZCspPyQvO1xuXG5jb25zdCBSRUdFWF9QUkVDRURJTkdfS0VZV09SRFMgPSBbXG5cdCdhd2FpdCcsXG5cdCdicmVhaycsXG5cdCdjYXNlJyxcblx0J2NvbnRpbnVlJyxcblx0J2RlYnVnZ2VyJyxcblx0J2RlbGV0ZScsXG5cdCdkbycsXG5cdCdlbHNlJyxcblx0J2luJyxcblx0J2luc3RhbmNlb2YnLFxuXHQnbmV3Jyxcblx0J29mJyxcblx0J3JldHVybicsXG5cdCd0aHJvdycsXG5cdCd0eXBlb2YnLFxuXHQndm9pZCcsXG5cdCd5aWVsZCcsXG5dO1xuXG4vLyBDb250cm9sLXN0YXRlbWVudCBoZWFkZXJzIHdob3NlIHBhcmVudGhlc2l6ZWQgY29uZGl0aW9uL2V4cHJlc3Npb24gaXNcbi8vIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGEgc3RhdGVtZW50IC0gZS5nLiBgaWYgKC4uLikvcmUvLnRlc3QoeClgLiBBIGApYFxuLy8gdGhhdCBjbG9zZXMgb25lIG9mIHRoZXNlIGlzIGEgc3RhdGVtZW50IGJvdW5kYXJ5LCBub3QgdGhlIGVuZCBvZiBhIGNhbGxcbi8vIG9yIGdyb3VwaW5nIGV4cHJlc3Npb24sIHNvIGAvYCByaWdodCBhZnRlciBpdCBzdGlsbCBzdGFydHMgYSByZWdleFxuLy8gbGl0ZXJhbCByYXRoZXIgdGhhbiBiZWluZyBwYXJzZWQgYXMgZGl2aXNpb24uXG5jb25zdCBSRUdFWF9QUkVDRURJTkdfUEFSRU5fS0VZV09SRFMgPSBbXG5cdCdpZicsXG5cdCd3aGlsZScsXG5cdCdmb3InLFxuXHQnc3dpdGNoJyxcblx0J2NhdGNoJyxcblx0J3dpdGgnLFxuXTtcblxuLy8gTWFya3MgYW4gaWRlbnRpZmllciB0aGF0IHdhcyBpbW1lZGlhdGVseSBwcmVjZWRlZCBieSBgLmAgKGEgbWVtYmVyXG4vLyBuYW1lLCBlLmcuIHRoZSBgcmV0dXJuYCBpbiBgZm9vLnJldHVybmApIHNvIGNhblN0YXJ0UmVnZXhMaXRlcmFsKCkgY2FuXG4vLyB0ZWxsIGl0IGFwYXJ0IGZyb20gdGhlIGByZXR1cm5gICprZXl3b3JkKi4gVGhpcyB1c2VzIGEgY29udHJvbCBjaGFyYWN0ZXJcbi8vIChuZXZlciBwcm9kdWNlZCBieSBjb25zdW1pbmcgb3JkaW5hcnkgZm9ybXVsYSBwdW5jdHVhdGlvbi9pZGVudGlmaWVycykgYXNcbi8vIHRoZSBwcmVmaXgsIHJhdGhlciB0aGFuIGAuYCBpdHNlbGY6IGEgYmFyZSBgLmAgaXMgaXRzZWxmIGEgdmFsaWQsXG4vLyBjb21wbGV0ZSBwcmV2aW91c1NpZ25pZmljYW50IHZhbHVlIChlLmcuIHRoZSBsYXN0IGAuYCBvZiB0aGUgc3ByZWFkXG4vLyBvcGVyYXRvciBgLi4uYCwgb3IgYSBkYW5nbGluZyBgLmAgYmVmb3JlIHdoaXRlc3BhY2UpLCBhbmQgcHJlZml4aW5nIHdpdGhcbi8vIGAuYCB3b3VsZCBtYWtlIHRoYXQgYmFyZSB0b2tlbiBpbmRpc3Rpbmd1aXNoYWJsZSBmcm9tIFwibWVtYmVyIGFjY2VzcyBpblxuLy8gcHJvZ3Jlc3NcIiwgd3JvbmdseSByb3V0aW5nIGAvYCBhZnRlciBgLi4uYCB0aHJvdWdoIHRoZSBtZW1iZXItYWNjZXNzXG4vLyAoZGl2aXNpb24pIGJyYW5jaCBpbnN0ZWFkIG9mIHJlY29nbml6aW5nIGl0IGFzIGEgcmVnZXggb3BlbmVyLlxuY29uc3QgTUVNQkVSX05BTUVfUFJFRklYID0gJ1xcdTAwMDAnO1xuXG5mdW5jdGlvbiBjYW5TdGFydFJlZ2V4TGl0ZXJhbCggcHJldmlvdXNTaWduaWZpY2FudCwgcHJlY2VkaW5nUGFyZW5LZXl3b3JkICkge1xuXHRpZiAoIHByZXZpb3VzU2lnbmlmaWNhbnQuc3RhcnRzV2l0aCggTUVNQkVSX05BTUVfUFJFRklYICkgKSB7XG5cdFx0Ly8gQSBtZW1iZXIgbmFtZSAoYGZvby5yZXR1cm5gLCBgZm9vLm5ld2AsIC4uLikgcmVhZHMgbGlrZSBhIHJlZ2V4LVxuXHRcdC8vIHByZWNlZGluZyBrZXl3b3JkIGJ5IHNwZWxsaW5nIGFsb25lLCBidXQgaXQncyBhIHByb3BlcnR5IGFjY2Vzc1xuXHRcdC8vIHJlc3VsdCwgc28gYC9gIGFmdGVyIGl0IGRpdmlkZXMgLSBzYW1lIGFzIGFmdGVyIGFueSBvdGhlciB2YWx1ZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoICcpJyA9PT0gcHJldmlvdXNTaWduaWZpY2FudCApIHtcblx0XHRyZXR1cm4gUkVHRVhfUFJFQ0VESU5HX1BBUkVOX0tFWVdPUkRTLmluY2x1ZGVzKCBwcmVjZWRpbmdQYXJlbktleXdvcmQgKTtcblx0fVxuXG5cdC8vIGArK2AvYC0tYCBhcmUgcG9zdGZpeCBvcGVyYXRvcnM6IGB4KysgLzJgIGRpdmlkZXMsIGl0IGRvZXNuJ3Qgb3BlbiBhXG5cdC8vIHJlZ2V4LCBldmVuIHRob3VnaCB0aGUgdHJhaWxpbmcgYCtgL2AtYCBhbG9uZSB3b3VsZCBub3JtYWxseSBzaWduYWxcblx0Ly8gdGhlIHN0YXJ0IG9mIGFuIGV4cHJlc3Npb24uXG5cdGlmICggJysrJyA9PT0gcHJldmlvdXNTaWduaWZpY2FudCB8fCAnLS0nID09PSBwcmV2aW91c1NpZ25pZmljYW50ICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIGAuLi5gIChzcHJlYWQvcmVzdCkgYWx3YXlzIGV4cGVjdHMgYW4gZXhwcmVzc2lvbiBuZXh0LCBzbyBgL2Bcblx0Ly8gaW1tZWRpYXRlbHkgYWZ0ZXIgaXQgdW5hbWJpZ3VvdXNseSBvcGVucyBhIHJlZ2V4IGxpdGVyYWwgLSB1bmxpa2UgYVxuXHQvLyBiYXJlLCBpbmNvbXBsZXRlIGAuYCwgd2hpY2ggaXMgaGFuZGxlZCBieSB0aGUgZmFsbHRocm91Z2ggYmVsb3cuXG5cdGlmICggJy4uLicgPT09IHByZXZpb3VzU2lnbmlmaWNhbnQgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBgfWAgaXMgYW1iaWd1b3VzIGluIGdlbmVyYWwgSlMgZ3JhbW1hciAoaXQgY2FuIGNsb3NlIGEgYmxvY2tcblx0Ly8gc3RhdGVtZW50LCB3aGVyZSBgL2Agc3RhcnRzIGEgcmVnZXgsIG9yIGFuIG9iamVjdCBsaXRlcmFsIC9cblx0Ly8gZGVzdHJ1Y3R1cmluZyBwYXR0ZXJuLCB3aGVyZSBgL2AgZGl2aWRlcyksIGFuZCBhIHJlYWwgcGFyc2VyIHdvdWxkXG5cdC8vIGJlIG5lZWRlZCB0byBmdWxseSBkaXNhbWJpZ3VhdGUgaXQuIFNpbmNlIHRoaXMgaGV1cmlzdGljIG9ubHkgZXhpc3RzXG5cdC8vIHRvIGRlY2lkZSBob3cgdW50cnVzdGVkIG1hY3JvIHZhbHVlcyBnZXQgZXNjYXBlZCBiZWZvcmUgcmVhY2hpbmdcblx0Ly8gYG5ldyBGdW5jdGlvbigpYCwgdGhlIHNhZmUgZGVmYXVsdCBvbiB0aGF0IGFtYmlndWl0eSBpcyB0byB0cmVhdCBgL2Bcblx0Ly8gYXMgb3BlbmluZyBhIHJlZ2V4OiBvdmVyLWVzY2FwaW5nIGEgdmFsdWUgYXMgcmVnZXggY29udGVudCB3aGVuIHRoZVxuXHQvLyBhdXRob3IgYWN0dWFsbHkgbWVhbnQgZGl2aXNpb24gZmFpbHMgYSBmb3JtdWxhIGxvdWRseSAoY2F1Z2h0IGJ5XG5cdC8vIGNhbGN1bGF0ZSgpJ3MgdHJ5L2NhdGNoKSwgd2hlcmVhcyB1bmRlci1lc2NhcGluZyBpdCBhcyBhIHN0cmluZ1xuXHQvLyBsZWF2ZXMgYSBjb2RlLWluamVjdGlvbiBwYXRoIG9wZW4uXG5cdHJldHVybiAhcHJldmlvdXNTaWduaWZpY2FudFxuXHRcdHx8IFJFR0VYX1BSRUNFRElOR19LRVlXT1JEUy5pbmNsdWRlcyggcHJldmlvdXNTaWduaWZpY2FudCApXG5cdFx0fHwgL1soW3s6Oyw9IT8mfCtcXC0qJX5ePD59XS8udGVzdCggcHJldmlvdXNTaWduaWZpY2FudCApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcmV2aW91c1NpZ25pZmljYW50KCBwcmV2aW91c1NpZ25pZmljYW50LCBjdXJyZW50LCBzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlICkge1xuXHRpZiAoIC9bXFx3JF0vLnRlc3QoIGN1cnJlbnQgKSApIHtcblx0XHRpZiAoICFzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudFxuXHRcdFx0JiYgL15bQS1aYS16XyRdW1xcdyRdKiQvLnRlc3QoIHByZXZpb3VzU2lnbmlmaWNhbnQgKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHByZXZpb3VzU2lnbmlmaWNhbnQgKyBjdXJyZW50O1xuXHRcdH1cblxuXHRcdGlmICggJy4nID09PSBwcmV2aW91c1NpZ25pZmljYW50ICkge1xuXHRcdFx0cmV0dXJuIE1FTUJFUl9OQU1FX1BSRUZJWCArIGN1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBwcmV2aW91c1NpZ25pZmljYW50LnN0YXJ0c1dpdGgoIE1FTUJFUl9OQU1FX1BSRUZJWCApXG5cdFx0XHQmJiAvXltcXHckXSokLy50ZXN0KCBwcmV2aW91c1NpZ25pZmljYW50LnNsaWNlKCAxICkgKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHByZXZpb3VzU2lnbmlmaWNhbnQgKyBjdXJyZW50O1xuXHRcdH1cblx0fVxuXG5cdC8vIFRyYWNrIGArK2AvYC0tYCBhcyBhIHBhaXIgc28gY2FuU3RhcnRSZWdleExpdGVyYWwoKSBjYW4gdGVsbCB0aGVcblx0Ly8gcG9zdGZpeC1pbmNyZW1lbnQvZGVjcmVtZW50IG9wZXJhdG9yIGFwYXJ0IGZyb20gYSBzaW5nbGUgdW5hcnlcblx0Ly8gYCtgL2AtYCwgd2hpY2ggYWZmZWN0cyB3aGV0aGVyIGEgZm9sbG93aW5nIGAvYCBkaXZpZGVzIG9yIG9wZW5zIGFcblx0Ly8gcmVnZXggbGl0ZXJhbC4gR2F0ZWQgb24gbm8gd2hpdGVzcGFjZS9jb21tZW50IGluIGJldHdlZW46IGAxKyArL3JlL2Bcblx0Ly8gb3IgYDErLypjKi8rL3JlL2AgYXJlIHR3byBTRVBBUkFURSBgK2AgdG9rZW5zICh1bmFyeSBwbHVzIG9mIGEgcmVnZXgtXG5cdC8vIGRlcml2ZWQgZXhwcmVzc2lvbiksIG5vdCBhIHBvc3RmaXggYCsrYCAtIG1lcmdpbmcgdGhlbSBhbnl3YXkgd291bGRcblx0Ly8gbWlzY2xhc3NpZnkgdGhlIGZvbGxvd2luZyBgL2AgYXMgZGl2aXNpb24gaW5zdGVhZCBvZiBhIHJlZ2V4IG9wZW5lci5cblx0aWYgKCAoICcrJyA9PT0gY3VycmVudCB8fCAnLScgPT09IGN1cnJlbnQgKVxuXHRcdCYmIGN1cnJlbnQgPT09IHByZXZpb3VzU2lnbmlmaWNhbnRcblx0XHQmJiAhc2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnRcblx0KSB7XG5cdFx0cmV0dXJuIGN1cnJlbnQgKyBjdXJyZW50O1xuXHR9XG5cblx0Ly8gVHJhY2sgdGhlIHNwcmVhZC9yZXN0IG9wZXJhdG9yIGAuLi5gIGFzIGEgc2luZ2xlIGFjY3VtdWxhdGVkIHRva2VuLFxuXHQvLyBzYW1lIGFzIGArK2AvYC0tYCBhYm92ZTogYSBiYXJlIGAuYCBhbG9uZSBpcyBhbWJpZ3VvdXMgKGl0IGNvdWxkIGJlXG5cdC8vIHRoZSBzdGFydCBvZiBhIG5vdC15ZXQtdHlwZWQgbWVtYmVyIGFjY2VzcyksIGJ1dCBgLi4uYCBpcyBhIGNvbXBsZXRlLFxuXHQvLyB1bmFtYmlndW91cyBFbGxpcHNpcyBwdW5jdHVhdG9yIC0gdGhlIGAvYCBpbW1lZGlhdGVseSBhZnRlciBpdCBhbHdheXNcblx0Ly8gb3BlbnMgYSByZWdleCBsaXRlcmFsIChhIHNwcmVhZCBhbHdheXMgZXhwZWN0cyBhbiBleHByZXNzaW9uIG5leHQpLFxuXHQvLyBuZXZlciBkaXZpc2lvbi5cblx0aWYgKCAnLicgPT09IGN1cnJlbnRcblx0XHQmJiAoICcuJyA9PT0gcHJldmlvdXNTaWduaWZpY2FudCB8fCAnLi4nID09PSBwcmV2aW91c1NpZ25pZmljYW50IClcblx0KSB7XG5cdFx0cmV0dXJuIHByZXZpb3VzU2lnbmlmaWNhbnQgKyBjdXJyZW50O1xuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnQ7XG59XG5cbi8qKlxuICogVHJhY2tzIHRoZSBsZXhpY2FsIGNvbnRleHQgb2YgdGhlIHRydXN0ZWQgZm9ybXVsYSB0ZXh0IHN1cnJvdW5kaW5nIGEgbWFjcm8uXG4gKiBNYWNybyB2YWx1ZXMgbmVlZCBhIGRpZmZlcmVudCByZXByZXNlbnRhdGlvbiBpbnNpZGUgYSBzdHJpbmcgbGl0ZXJhbCB0aGFuXG4gKiB0aGV5IGRvIGluIEphdmFTY3JpcHQgY29kZTogaW5zZXJ0aW5nIGEgY29tcGxldGUgSlNPTiBsaXRlcmFsIGludG9cbiAqIGAnJWZpZWxkJSdgIHdvdWxkIGluc2VydCBpdHMgcXVvdGVzIGludG8gdGhlIGFscmVhZHktb3BlbiBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaW50ZW50aW9uYWxseSBvbmx5IGZvbGxvd3MgbGl0ZXJhbCBib3VuZGFyaWVzLiBGb3JtdWxhIHN5bnRheCBpdHNlbGZcbiAqIHJlbWFpbnMgYXV0aG9yLXByb3ZpZGVkIGNvZGU7IHRoaXMgaXMgc29sZWx5IHVzZWQgdG8gZW5jb2RlIHVudHJ1c3RlZCBtYWNyb1xuICogdmFsdWVzIGJlZm9yZSB0aGV5IHJlYWNoIGBuZXcgRnVuY3Rpb24oKWAuXG4gKlxuICogQHJldHVybiB7eyBjb25zdW1lOiAoZnVuY3Rpb24oc3RyaW5nKTogc3RyaW5nKSwgZ2V0U3RhdGU6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBpc0VzY2FwZWQ6IChmdW5jdGlvbigpOiBib29sZWFuKSB9fVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtZGVwdGgsIG1heC1saW5lcy1wZXItZnVuY3Rpb24gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZvcm11bGFMZXhpY2FsQ29udGV4dCgpIHtcblx0bGV0IHN0YXRlID0gJ2NvZGUnO1xuXHRsZXQgZXNjYXBlZCA9IGZhbHNlO1xuXHRsZXQgbGl0ZXJhbFJldHVyblN0YXRlID0gJ2NvZGUnO1xuXHRsZXQgY29tbWVudFJldHVyblN0YXRlID0gJ2NvZGUnO1xuXHRjb25zdCB0ZW1wbGF0ZUV4cHJlc3Npb25EZXB0aHMgPSBbXTtcblx0Y29uc3QgdGVtcGxhdGVSZXR1cm5TdGF0ZXMgPSBbXTtcblx0bGV0IHJlZ2V4Q2hhcmFjdGVyQ2xhc3MgPSBmYWxzZTtcblx0bGV0IHJlZ2V4UmV0dXJuU3RhdGUgPSAnY29kZSc7XG5cdGxldCBwcmV2aW91c1NpZ25pZmljYW50ID0gJyc7XG5cdC8vIFRoZSBzaWduaWZpY2FudCB0b2tlbiAqYmVmb3JlKiBwcmV2aW91c1NpZ25pZmljYW50IC0gb25seSBuZWVkZWQgdG9cblx0Ly8gcmVjb2duaXplIHRoZSB0d28td29yZCBgZm9yIGF3YWl0IChgIGhlYWRlciAoYXN5bmMgaXRlcmF0aW9uKSwgd2hlcmVcblx0Ly8gdGhlIHdvcmQgaW1tZWRpYXRlbHkgYmVmb3JlIGAoYCBpcyBgYXdhaXRgLCBub3QgYGZvcmAuXG5cdGxldCB3b3JkQmVmb3JlUHJldmlvdXMgPSAnJztcblx0Ly8gVHJhY2tzIHdoZXRoZXIgd2hpdGVzcGFjZSB3YXMgc2VlbiBzaW5jZSBwcmV2aW91c1NpZ25pZmljYW50IHdhcyBsYXN0XG5cdC8vIHNldCwgc28gYSBuZXcgaWRlbnRpZmllciBzdGFydGluZyByaWdodCBhZnRlciB3aGl0ZXNwYWNlIGNhbiBiZSB0b2xkXG5cdC8vIGFwYXJ0IGZyb20gb25lIGNvbnRpbnVpbmcgc3RyYWlnaHQgb2ZmIHB1bmN0dWF0aW9uIChlLmcuIGAuZm9vYCkuXG5cdGxldCBzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHQvLyBTdGFjayBvZiBgKGAgZ3JvdXBpbmdzIGluIGNvZGUvdGVtcGxhdGUtZXhwcmVzc2lvbiBjb250ZXh0cywgdHJhY2tpbmdcblx0Ly8gd2hpY2gga2V5d29yZCAoaWYgYW55KSBwcmVjZWRlZCBlYWNoIG9uZSAtIHNvIHRoYXQgd2hlbiB0aGUgbWF0Y2hpbmdcblx0Ly8gYClgIGlzIHJlYWNoZWQsIGNhblN0YXJ0UmVnZXhMaXRlcmFsKCkgY2FuIHRlbGwgYSBjb250cm9sLXN0YXRlbWVudFxuXHQvLyBoZWFkZXIgYXBhcnQgZnJvbSBhIGNhbGwgb3IgZ3JvdXBpbmcgZXhwcmVzc2lvbi5cblx0Y29uc3QgcGFyZW5LZXl3b3JkU3RhY2sgPSBbXTtcblx0bGV0IHByZWNlZGluZ1BhcmVuS2V5d29yZCA9ICcnO1xuXG5cdHJldHVybiB7XG5cdFx0Y29uc3VtZSggdmFsdWUgKSB7XG5cdFx0XHR2YWx1ZSA9IFN0cmluZyggdmFsdWUgKTtcblx0XHRcdGxldCBub3JtYWxpemVkID0gJyc7XG5cblx0XHRcdGZvciAoIGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWUubGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdGNvbnN0IG5leHQgICAgPSB2YWx1ZVsgaW5kZXggKyAxIF07XG5cblx0XHRcdFx0aWYgKCAhZXNjYXBlZFxuXHRcdFx0XHRcdCYmIFsgJ3NpbmdsZScsICdkb3VibGUnLCAndGVtcGxhdGUnIF0uaW5jbHVkZXMoIHN0YXRlIClcblx0XHRcdFx0XHQmJiAoICdcXHInID09PSBjdXJyZW50IHx8ICdcXG4nID09PSBjdXJyZW50IClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0bm9ybWFsaXplZCArPSAnXFxcXG4nO1xuXG5cdFx0XHRcdFx0aWYgKCAnXFxyJyA9PT0gY3VycmVudCAmJiAnXFxuJyA9PT0gbmV4dCApIHtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bm9ybWFsaXplZCArPSBjdXJyZW50O1xuXG5cdFx0XHRcdGlmICggZXNjYXBlZCApIHtcblx0XHRcdFx0XHRlc2NhcGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICdsaW5lLWNvbW1lbnQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0XHRpZiAoICdcXHInID09PSBjdXJyZW50IHx8ICdcXG4nID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBjb21tZW50UmV0dXJuU3RhdGU7XG5cdFx0XHRcdFx0XHQvLyBBIGNvbW1lbnQgc2VwYXJhdGVzIHRva2VucyBleGFjdGx5IGxpa2Ugd2hpdGVzcGFjZVxuXHRcdFx0XHRcdFx0Ly8gZG9lczogYDErLypjKi8rL3JlL2AgaXMgdHdvIGRpc3RpbmN0IGArYCB0b2tlbnMsXG5cdFx0XHRcdFx0XHQvLyBub3QgYSBwb3N0Zml4IGArK2AsIHNvIHRoZSBvcGVyYXRvci9pZGVudGlmaWVyXG5cdFx0XHRcdFx0XHQvLyBhY2N1bXVsYXRpb24gaW4gdXBkYXRlUHJldmlvdXNTaWduaWZpY2FudCgpIG11c3Rcblx0XHRcdFx0XHRcdC8vIG5vdCBicmlkZ2UgYWNyb3NzIGl0LlxuXHRcdFx0XHRcdFx0c2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggJ2Jsb2NrLWNvbW1lbnQnID09PSBzdGF0ZSApIHtcblx0XHRcdFx0XHRpZiAoICcqJyA9PT0gY3VycmVudCAmJiAnLycgPT09IG5leHQgKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9IGNvbW1lbnRSZXR1cm5TdGF0ZTtcblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWQgKz0gbmV4dDtcblx0XHRcdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBbICdzaW5nbGUnLCAnZG91YmxlJywgJ3RlbXBsYXRlJyBdLmluY2x1ZGVzKCBzdGF0ZSApXG5cdFx0XHRcdFx0JiYgJ1xcXFwnID09PSBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGVzY2FwZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAnc2luZ2xlJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0aWYgKCAnXFwnJyA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0XHRcdHN0YXRlID0gbGl0ZXJhbFJldHVyblN0YXRlO1xuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9ICd2YWx1ZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAnZG91YmxlJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0aWYgKCAnXCInID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSBsaXRlcmFsUmV0dXJuU3RhdGU7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50ID0gJ3ZhbHVlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICd0ZW1wbGF0ZScgPT09IHN0YXRlICkge1xuXHRcdFx0XHRcdGlmICggJ2AnID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSB0ZW1wbGF0ZVJldHVyblN0YXRlcy5wb3AoKSA/PyAnY29kZSc7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50ID0gJ3ZhbHVlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoICckJyA9PT0gY3VycmVudCAmJiAneycgPT09IG5leHQgKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZSA9ICd0ZW1wbGF0ZS1leHByZXNzaW9uJztcblx0XHRcdFx0XHRcdHRlbXBsYXRlRXhwcmVzc2lvbkRlcHRocy5wdXNoKCAxICk7XG5cdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50ID0gJyc7XG5cdFx0XHRcdFx0XHRub3JtYWxpemVkICs9IG5leHQ7XG5cdFx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggJ3JlZ2V4JyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0aWYgKCAnXFxcXCcgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0XHRlc2NhcGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoICdbJyA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0XHRcdHJlZ2V4Q2hhcmFjdGVyQ2xhc3MgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJ10nID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0cmVnZXhDaGFyYWN0ZXJDbGFzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJy8nID09PSBjdXJyZW50ICYmICFyZWdleENoYXJhY3RlckNsYXNzICkge1xuXHRcdFx0XHRcdFx0c3RhdGUgPSByZWdleFJldHVyblN0YXRlO1xuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9ICd2YWx1ZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBbICdjb2RlJywgJ3RlbXBsYXRlLWV4cHJlc3Npb24nIF0uaW5jbHVkZXMoIHN0YXRlIClcblx0XHRcdFx0XHQmJiAnLycgPT09IGN1cnJlbnRcblx0XHRcdFx0XHQmJiBbICcvJywgJyonIF0uaW5jbHVkZXMoIG5leHQgKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb21tZW50UmV0dXJuU3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0XHRzdGF0ZSA9ICcvJyA9PT0gbmV4dCA/ICdsaW5lLWNvbW1lbnQnIDogJ2Jsb2NrLWNvbW1lbnQnO1xuXHRcdFx0XHRcdG5vcm1hbGl6ZWQgKz0gbmV4dDtcblx0XHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBbICdjb2RlJywgJ3RlbXBsYXRlLWV4cHJlc3Npb24nIF0uaW5jbHVkZXMoIHN0YXRlIClcblx0XHRcdFx0XHQmJiAnLycgPT09IGN1cnJlbnRcblx0XHRcdFx0XHQmJiBjYW5TdGFydFJlZ2V4TGl0ZXJhbCggcHJldmlvdXNTaWduaWZpY2FudCwgcHJlY2VkaW5nUGFyZW5LZXl3b3JkIClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmVnZXhSZXR1cm5TdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcdHJlZ2V4Q2hhcmFjdGVyQ2xhc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRzdGF0ZSA9ICdyZWdleCc7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIFsgJ2NvZGUnLCAndGVtcGxhdGUtZXhwcmVzc2lvbicgXS5pbmNsdWRlcyggc3RhdGUgKVxuXHRcdFx0XHRcdCYmICcoJyA9PT0gY3VycmVudFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBgZm9yIGF3YWl0IChgIChhc3luYyBpdGVyYXRpb24pIGhhcyBgYXdhaXRgIC0gbm90XG5cdFx0XHRcdFx0Ly8gYGZvcmAgLSBhcyB0aGUgd29yZCBpbW1lZGlhdGVseSBiZWZvcmUgYChgOyBsb29rIG9uZVxuXHRcdFx0XHRcdC8vIHdvcmQgZnVydGhlciBiYWNrIHNvIGl0cyBgKWAgaXMgc3RpbGwgcmVjb2duaXplZCBhc1xuXHRcdFx0XHRcdC8vIGEgY29udHJvbC1zdGF0ZW1lbnQgYm91bmRhcnksIHNhbWUgYXMgcGxhaW4gYGZvciAoYC5cblx0XHRcdFx0XHRjb25zdCBpc0ZvckF3YWl0ID0gJ2F3YWl0JyA9PT0gcHJldmlvdXNTaWduaWZpY2FudFxuXHRcdFx0XHRcdFx0JiYgJ2ZvcicgPT09IHdvcmRCZWZvcmVQcmV2aW91cztcblxuXHRcdFx0XHRcdHBhcmVuS2V5d29yZFN0YWNrLnB1c2goXG5cdFx0XHRcdFx0XHRpc0ZvckF3YWl0XG5cdFx0XHRcdFx0XHRcdD8gJ2Zvcidcblx0XHRcdFx0XHRcdFx0OiAoIFJFR0VYX1BSRUNFRElOR19QQVJFTl9LRVlXT1JEUy5pbmNsdWRlcyggcHJldmlvdXNTaWduaWZpY2FudCApXG5cdFx0XHRcdFx0XHRcdFx0PyBwcmV2aW91c1NpZ25pZmljYW50XG5cdFx0XHRcdFx0XHRcdFx0OiAnJyApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggWyAnY29kZScsICd0ZW1wbGF0ZS1leHByZXNzaW9uJyBdLmluY2x1ZGVzKCBzdGF0ZSApXG5cdFx0XHRcdFx0JiYgJyknID09PSBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHByZWNlZGluZ1BhcmVuS2V5d29yZCA9IHBhcmVuS2V5d29yZFN0YWNrLnBvcCgpID8/ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAndGVtcGxhdGUtZXhwcmVzc2lvbicgPT09IHN0YXRlICkge1xuXHRcdFx0XHRcdGlmICggJ1xcJycgPT09IGN1cnJlbnQgfHwgJ1wiJyA9PT0gY3VycmVudCApIHtcblx0XHRcdFx0XHRcdGxpdGVyYWxSZXR1cm5TdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSAnXFwnJyA9PT0gY3VycmVudCA/ICdzaW5nbGUnIDogJ2RvdWJsZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCAnYCcgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZVJldHVyblN0YXRlcy5wdXNoKCBzdGF0ZSApO1xuXHRcdFx0XHRcdFx0c3RhdGUgPSAndGVtcGxhdGUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJ3snID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGVFeHByZXNzaW9uRGVwdGhzW1xuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZUV4cHJlc3Npb25EZXB0aHMubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XSsrO1xuXG5cdFx0XHRcdFx0XHQvLyBge2AgaXMgaXRzZWxmIGEgc2lnbmlmaWNhbnQgdG9rZW4gKGUuZy4gaXQgY2FuXG5cdFx0XHRcdFx0XHQvLyBvcGVuIGEgbmVzdGVkIGJsb2NrL2Z1bmN0aW9uIGJvZHkgaW5zaWRlIGAkey4uLn1gLFxuXHRcdFx0XHRcdFx0Ly8gbm90IGp1c3QgaW5jcmVhc2UgaW50ZXJwb2xhdGlvbiBkZXB0aCkgLSB0cmFjayBpdFxuXHRcdFx0XHRcdFx0Ly8gbGlrZSBhbnkgb3RoZXIgcHVuY3R1YXRpb24gc28gYSBgL2AgcmlnaHQgYWZ0ZXIgYVxuXHRcdFx0XHRcdFx0Ly8gbmVzdGVkIGB9YCBjbG9zaW5nIHRoYXQgYmxvY2sgaXMgc3RpbGwgY29ycmVjdGx5XG5cdFx0XHRcdFx0XHQvLyBjbGFzc2lmaWVkIHJlbGF0aXZlIHRvIGl0LCBpbnN0ZWFkIG9mIHN0YWxlIHN0YXRlXG5cdFx0XHRcdFx0XHQvLyBsZWZ0IG92ZXIgZnJvbSBiZWZvcmUgdGhpcyBge2AuXG5cdFx0XHRcdFx0XHRpZiAoIHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ICkge1xuXHRcdFx0XHRcdFx0XHR3b3JkQmVmb3JlUHJldmlvdXMgPSBwcmV2aW91c1NpZ25pZmljYW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggJ30nID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgZGVwdGhJbmRleCA9IHRlbXBsYXRlRXhwcmVzc2lvbkRlcHRocy5sZW5ndGggLSAxO1xuXG5cdFx0XHRcdFx0XHRpZiAoIDAgPT09IC0tdGVtcGxhdGVFeHByZXNzaW9uRGVwdGhzWyBkZXB0aEluZGV4IF0gKSB7XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlRXhwcmVzc2lvbkRlcHRocy5wb3AoKTtcblx0XHRcdFx0XHRcdFx0c3RhdGUgPSAndGVtcGxhdGUnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAoIHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ICkge1xuXHRcdFx0XHRcdFx0XHR3b3JkQmVmb3JlUHJldmlvdXMgPSBwcmV2aW91c1NpZ25pZmljYW50O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBTYW1lIGFzIGB7YCBhYm92ZTogYSBuZXN0ZWQgYH1gIChjbG9zaW5nIGEgYmxvY2svXG5cdFx0XHRcdFx0XHQvLyBmdW5jdGlvbiBib2R5IGluc2lkZSBgJHsuLi59YCwgbm90IHRoZSBgJHsuLi59YFxuXHRcdFx0XHRcdFx0Ly8gaXRzZWxmKSBpcyBhIHJlYWwgdG9rZW4gdGhhdCB0aGUgcmVnZXgtdnMtZGl2aXNpb25cblx0XHRcdFx0XHRcdC8vIGhldXJpc3RpYyBtdXN0IHNlZSwgc28gYSBtYWNyby1hZGphY2VudCBgL2AgcmlnaHRcblx0XHRcdFx0XHRcdC8vIGFmdGVyIGl0IGlzIGVzY2FwZWQgYXMgcmVnZXggY29udGVudCByYXRoZXIgdGhhblxuXHRcdFx0XHRcdFx0Ly8gZmFsbGluZyBiYWNrIHRvIHN0YWxlIHByZS1ge2Agc3RhdGUuXG5cdFx0XHRcdFx0XHRpZiAoICd0ZW1wbGF0ZS1leHByZXNzaW9uJyA9PT0gc3RhdGUgKSB7XG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzU2lnbmlmaWNhbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICggIS9cXHMvLnRlc3QoIGN1cnJlbnQgKSApIHtcblx0XHRcdFx0XHRcdGlmICggc2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnRcblx0XHRcdFx0XHRcdFx0JiYgL1tBLVphLXpfJF0vLnRlc3QoIGN1cnJlbnQgKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHdvcmRCZWZvcmVQcmV2aW91cyA9IHByZXZpb3VzU2lnbmlmaWNhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHByZXZpb3VzU2lnbmlmaWNhbnQgPSB1cGRhdGVQcmV2aW91c1NpZ25pZmljYW50KFxuXHRcdFx0XHRcdFx0XHRwcmV2aW91c1NpZ25pZmljYW50LFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCxcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoICdcXCcnID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdGxpdGVyYWxSZXR1cm5TdGF0ZSA9IHN0YXRlO1xuXHRcdFx0XHRcdHN0YXRlID0gJ3NpbmdsZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoICdcIicgPT09IGN1cnJlbnQgKSB7XG5cdFx0XHRcdFx0bGl0ZXJhbFJldHVyblN0YXRlID0gc3RhdGU7XG5cdFx0XHRcdFx0c3RhdGUgPSAnZG91YmxlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggJ2AnID09PSBjdXJyZW50ICkge1xuXHRcdFx0XHRcdHRlbXBsYXRlUmV0dXJuU3RhdGVzLnB1c2goIHN0YXRlICk7XG5cdFx0XHRcdFx0c3RhdGUgPSAndGVtcGxhdGUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKCAhL1xccy8udGVzdCggY3VycmVudCApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBzYXdXaGl0ZXNwYWNlU2luY2VTaWduaWZpY2FudFxuXHRcdFx0XHRcdFx0XHQmJiAvW0EtWmEtel8kXS8udGVzdCggY3VycmVudCApXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0d29yZEJlZm9yZVByZXZpb3VzID0gcHJldmlvdXNTaWduaWZpY2FudDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cHJldmlvdXNTaWduaWZpY2FudCA9IHVwZGF0ZVByZXZpb3VzU2lnbmlmaWNhbnQoXG5cdFx0XHRcdFx0XHRcdHByZXZpb3VzU2lnbmlmaWNhbnQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50LFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHNhd1doaXRlc3BhY2VTaW5jZVNpZ25pZmljYW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0c2F3V2hpdGVzcGFjZVNpbmNlU2lnbmlmaWNhbnQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBub3JtYWxpemVkO1xuXHRcdFx0fSxcblx0XHRcdGdldFN0YXRlKCkge1xuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHR9LFxuXHRcdFx0aXNFc2NhcGVkKCkge1xuXHRcdFx0XHRyZXR1cm4gZXNjYXBlZDtcblx0XHRcdH0sXG5cdFx0XHRpc0luUmVnZXhDaGFyYWN0ZXJDbGFzcygpIHtcblx0XHRcdFx0cmV0dXJuIHJlZ2V4Q2hhcmFjdGVyQ2xhc3M7XG5cdFx0XHR9LFxuXHRcdH07XG59XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1kZXB0aCwgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVNYWNyb0ZvclN0cmluZ0xpdGVyYWwoIHJlc3VsdCwgc3RhdGUsIGhhc1BlbmRpbmdFc2NhcGUgPSBmYWxzZSApIHtcblx0Y29uc3Qgc3RyaW5nUmVzdWx0ID0gU3RyaW5nKCByZXN1bHQgKTtcblxuXHRpZiAoIGhhc1BlbmRpbmdFc2NhcGUgKSB7XG5cdFx0aWYgKCAhc3RyaW5nUmVzdWx0Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAnXFxuJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ3UnICsgc3RyaW5nUmVzdWx0LmNoYXJDb2RlQXQoIDAgKS50b1N0cmluZyggMTYgKS5wYWRTdGFydCggNCwgJzAnIClcblx0XHRcdCsgZXNjYXBlTWFjcm9Gb3JTdHJpbmdMaXRlcmFsKCBzdHJpbmdSZXN1bHQuc2xpY2UoIDEgKSwgc3RhdGUgKTtcblx0fVxuXG5cdGxldCBlc2NhcGVkID0gSlNPTi5zdHJpbmdpZnkoIHN0cmluZ1Jlc3VsdCApLnNsaWNlKCAxLCAtMSApO1xuXG5cdGlmICggJ3NpbmdsZScgPT09IHN0YXRlICkge1xuXHRcdGVzY2FwZWQgPSBlc2NhcGVkLnJlcGxhY2UoIC8nL2csIFwiXFxcXCdcIiApO1xuXHR9XG5cblx0aWYgKCAndGVtcGxhdGUnID09PSBzdGF0ZSApIHtcblx0XHQvLyBFc2NhcGUgZXZlcnkgYCRgLCBub3QganVzdCBgJHtgIHBhaXJzIGZvdW5kIGluc2lkZSB0aGlzIG9uZSBtYWNyb1xuXHRcdC8vIHZhbHVlOiBhIHZhbHVlIGVuZGluZyBpbiBgJGAgd291bGQgb3RoZXJ3aXNlIHJlY29tYmluZSB3aXRoIGFcblx0XHQvLyBge2AgZnJvbSB0aGUgaW1tZWRpYXRlbHkgZm9sbG93aW5nICpzdGF0aWMqIGZvcm11bGEgdGV4dCBpbnRvIGFcblx0XHQvLyBsaXZlIHRlbXBsYXRlLWV4cHJlc3Npb24gb3BlbmVyLlxuXHRcdGVzY2FwZWQgPSBlc2NhcGVkXG5cdFx0XHQucmVwbGFjZSggL2AvZywgJ1xcXFxgJyApXG5cdFx0XHQucmVwbGFjZSggL1xcJC9nLCAnXFxcXCQnICk7XG5cdH1cblxuXHRyZXR1cm4gZXNjYXBlZDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlTWFjcm9Gb3JIdG1sKCByZXN1bHQgKSB7XG5cdHJldHVybiBlc2NhcGVIdG1sKCByZXN1bHQgKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlTWFjcm9Gb3JSZWdleExpdGVyYWwoIHJlc3VsdCwgaGFzUGVuZGluZ0VzY2FwZSA9IGZhbHNlLCBpbkNoYXJhY3RlckNsYXNzID0gZmFsc2UgKSB7XG5cdGNvbnN0IHN0cmluZ1Jlc3VsdCA9IFN0cmluZyggcmVzdWx0ICk7XG5cblx0aWYgKCBoYXNQZW5kaW5nRXNjYXBlICkge1xuXHRcdGlmICggIXN0cmluZ1Jlc3VsdC5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gJ3UwMDAwJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJ3UnICsgc3RyaW5nUmVzdWx0LmNoYXJDb2RlQXQoIDAgKS50b1N0cmluZyggMTYgKS5wYWRTdGFydCggNCwgJzAnIClcblx0XHRcdCsgZXNjYXBlTWFjcm9Gb3JSZWdleExpdGVyYWwoIHN0cmluZ1Jlc3VsdC5zbGljZSggMSApLCBmYWxzZSwgaW5DaGFyYWN0ZXJDbGFzcyApO1xuXHR9XG5cblx0Ly8gSW5zaWRlIGEgY2hhcmFjdGVyIGNsYXNzIChgWy4uLl1gKSwgYC1gIGRlbm90ZXMgYSByYW5nZSAoZS5nLiBgYS16YClcblx0Ly8gcmF0aGVyIHRoYW4gYSBsaXRlcmFsIGNoYXJhY3RlciwgYW5kIGBdYC9gXmAgY2FycnkgY2xhc3Mtc3BlY2lmaWNcblx0Ly8gbWVhbmluZyB0aGF0IHRoZSBvdXRzaWRlLWNsYXNzIGVzY2FwZSBzZXQgYmVsb3cgZG9lc24ndCBjb3Zlci5cblx0Y29uc3QgZXNjYXBlZCA9IGluQ2hhcmFjdGVyQ2xhc3Ncblx0XHQ/IHN0cmluZ1Jlc3VsdC5yZXBsYWNlKCAvW1xcXFxeXFxdLV0vZywgJ1xcXFwkJicgKVxuXHRcdDogc3RyaW5nUmVzdWx0LnJlcGxhY2UoIC9bXFxcXF4kLiorPygpW1xcXXt9fC9dL2csICdcXFxcJCYnICk7XG5cblx0cmV0dXJuIGVzY2FwZWRcblx0XHQucmVwbGFjZSggL1xcci9nLCAnXFxcXHInIClcblx0XHQucmVwbGFjZSggL1xcbi9nLCAnXFxcXG4nIClcblx0XHQucmVwbGFjZSggL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcgKVxuXHRcdC5yZXBsYWNlKCAvXFx1MjAyOS9nLCAnXFxcXHUyMDI5JyApO1xufVxuXG5cbmZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsRnJvbU5vZGUobm9kZSkge1xuXHRpZiAoIW5vZGUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShub2RlLnNlbGVjdGVkT3B0aW9ucyB8fCBbXSlcblx0XHRcdC5tYXAob3B0aW9uID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblx0aWYgKFxuXHRcdChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSAmJlxuXHRcdCFub2RlLmNoZWNrZWRcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmIChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBub2RlLmNsb3Nlc3QoJ2xhYmVsJyk7XG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblx0XHRyZXR1cm4gU3RyaW5nKFxuXHRcdFx0dGV4dE5vZGU/LnRleHRDb250ZW50IHx8IGxhYmVsLnRleHRDb250ZW50IHx8IG5vZGUudmFsdWUgfHwgJydcblx0XHQpLnRyaW0oKTtcblx0fVxuXHRyZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0ZWRJbnB1dE9wdGlvbkxhYmVsKHJlbGF0ZWRJbnB1dCkge1xuXHRjb25zdCBsYWJlbHMgPSBBcnJheS5mcm9tKHJlbGF0ZWRJbnB1dC5ub2RlcyB8fCBbXSlcblx0XHQubWFwKGdldE9wdGlvbkxhYmVsRnJvbU5vZGUpXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblx0cmV0dXJuIGxhYmVscy5sZW5ndGhcblx0XHQ/IGxhYmVscy5qb2luKCcsICcpXG5cdFx0OiByZWxhdGVkSW5wdXQudmFsdWUuY3VycmVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gcm9vdCAgICB7SW5wdXREYXRhfE9ic2VydmFibGV9XG4gKiBAcGFyYW0gb3B0aW9ucyB7e2ZvcmNlRnVuY3Rpb246IGJvb2xlYW59fVxuICovXG5mdW5jdGlvbiBDYWxjdWxhdGVkRm9ybXVsYShcblx0cm9vdCxcblx0b3B0aW9ucyA9IHt9LFxuKSB7XG5cdHRoaXMucGFydHMgICAgICAgID0gW107XG5cdHRoaXMucmVsYXRlZCAgICAgID0gW107XG5cdHRoaXMucmVsYXRlZEF0dHJzID0gW107XG5cdHRoaXMucmVnZXhwICAgICAgID0gLyUoW1xcd1xcLV0uKj9cXFM/KSUvZztcblx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcblxuXHRjb25zdCB7IGZvcmNlRnVuY3Rpb24gPSBmYWxzZSB9ID0gb3B0aW9ucztcblxuXHR0aGlzLmZvcmNlRnVuY3Rpb24gPSBmb3JjZUZ1bmN0aW9uO1xuXG5cdGlmICggcm9vdCBpbnN0YW5jZW9mIElucHV0RGF0YSApIHtcblx0XHR0aGlzLmlucHV0ID0gcm9vdDtcblx0fVxuXG5cdHRoaXMucm9vdCA9IHRoaXMuaW5wdXQ/LnJvb3QgPz8gcm9vdDtcbn1cblxuQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlID0ge1xuXHQvLyByYXcgdmFsdWVcblx0Zm9ybXVsYTogbnVsbCxcblx0cGFydHM6IFtdLFxuXHRyZWxhdGVkOiBbXSxcblx0cmVsYXRlZEF0dHJzOiBbXSxcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRpbnB1dDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfE9ic2VydmFibGVSb3d9XG5cdCAqL1xuXHRyb290OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlZ0V4cH1cblx0ICovXG5cdHJlZ2V4cDogbnVsbCxcblx0Zm9yY2VGdW5jdGlvbjogZmFsc2UsXG5cdC8qKlxuXHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdCAqL1xuXHRzZXRSZXN1bHQ6ICgpID0+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdDYWxjdWxhdGVkRm9ybXVsYS5zZXRSZXN1bHQgaXMgbm90IHNldCEnICk7XG5cdH0sXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gIHJlbGF0ZWRJbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0cmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSB7XG5cdFx0cmV0dXJuIHJlbGF0ZWRJbnB1dC52YWx1ZS5jdXJyZW50O1xuXHR9LFxuXHRyZWxhdGVkTGFiZWxDYWxsYmFjayhyZWxhdGVkSW5wdXQpIHtcblx0XHRyZXR1cm4gZ2V0UmVsYXRlZElucHV0T3B0aW9uTGFiZWwocmVsYXRlZElucHV0KTtcblx0fSxcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKi9cblx0b2JzZXJ2ZSggdmFsdWUgKSB7XG5cblx0XHR0aGlzLmZvcm11bGEgPSB2YWx1ZTtcblxuXHRcdGlmICggIUFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCB2YWx1ZSApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFsdWUuZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCBpdGVtICk7XG5cdFx0fSApO1xuXHR9LFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHZhbHVlIHtTdHJpbmd9XG5cdCAqL1xuXHRvYnNlcnZlSXRlbSggdmFsdWUgKSB7XG5cblx0XHRsZXQgbWF0Y2g7XG5cdFx0bGV0IHByZXZJbmRleCA9IDA7XG5cblx0XHR2YWx1ZSArPSAnJztcblxuXHRcdHdoaWxlICggKFxuXHRcdFx0bWF0Y2ggPSB0aGlzLnJlZ2V4cC5leGVjKCB2YWx1ZSApXG5cdFx0KSAhPT0gbnVsbCApIHtcblx0XHRcdGNvbnN0IHBhcnQgPSB0aGlzLm9ic2VydmVNYWNybyggbWF0Y2hbIDEgXSApO1xuXG5cdFx0XHRpZiAoIDAgIT09IG1hdGNoLmluZGV4ICkge1xuXHRcdFx0XHR0aGlzLnBhcnRzLnB1c2goIHZhbHVlLnNsaWNlKCBwcmV2SW5kZXgsIG1hdGNoLmluZGV4ICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cHJldkluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsgMCBdLmxlbmd0aDtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gcGFydCApIHtcblx0XHRcdFx0dGhpcy5vbk1pc3NpbmdQYXJ0KCBtYXRjaFsgMCBdICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5wYXJ0cy5wdXNoKCBwYXJ0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gc2F2ZSBsYXN0IHBhcnRcblx0XHRpZiAoIHByZXZJbmRleCA9PT0gdmFsdWUubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFydHMucHVzaCggdmFsdWUuc2xpY2UoIHByZXZJbmRleCApICk7XG5cblx0XHRpZiAoIDEgPT09IHRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5wYXJ0cyA9IFtdO1xuXHRcdH1cblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dE1hdGNoIHtTdHJpbmd9XG5cdCAqL1xuXHRvbk1pc3NpbmdQYXJ0KCBpbnB1dE1hdGNoICkge1xuXHRcdHRoaXMucGFydHMucHVzaCggaW5wdXRNYXRjaCApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIGZpZWxkTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0aXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApIHtcblxuXHRcdGNvbnN0IGlzRmllbGROb2RlID0gdGhpcy5yb290LmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xuXG5cdFx0aWYgKCB1bmRlZmluZWQgPT09IGlzRmllbGROb2RlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgbm9kZSBleGlzdHMgaW4gdGhlIHJvb3ROb2RlLlxuXHRcdCAqIElmIHRoZSBub2RlIGRvZXMgbm90IGV4aXN0LCBhbmFseXplIHRoZSBmb3JtdWxhIHRvIGRldGVybWluZSBhbiBhZGp1c3RlZCB2YWx1ZVxuXHRcdCAqIGJhc2VkIG9uIHRoZSBvcGVyYXRvcnMgc3Vycm91bmRpbmcgdGhlIHBsYWNlaG9sZGVyLlxuXHRcdCAqIEBzaW5jZSAzLjQuNVxuXHRcdCAqXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTE3ODZcblx0XHQgKi9cblx0XHRsZXQgZXhpc3ROb2RlID1cblx0XHRcdHRoaXMucm9vdC5yb290Tm9kZVsgZmllbGROYW1lIF1cblx0XHRcdHx8IHRoaXMucm9vdC5yb290Tm9kZVsgZmllbGROYW1lICsgJ1tdJyBdXG5cdFx0XHR8fCB0aGlzLnJvb3Qucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWZpZWxkLW5hbWU9XCInICsgZmllbGROYW1lICsgJ1wiXScgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZW4gd2UgY2FsbCBxdWVyeVNlbGVjdG9yQWxsIGl0IHJldHVybnMgZW1wdHkgTm9kZUxpc3QgYXJyYXkgaWYgdGhlIGVsZW1lbnQgbm90IGZvdW5kLCBzbyB3ZSBuZWVkIHRvIHJlc2V0IGl0XG5cdFx0ICovXG5cdFx0aWYgKCBleGlzdE5vZGUgJiYgMCA9PT0gZXhpc3ROb2RlLmxlbmd0aCApIHtcblx0XHRcdGV4aXN0Tm9kZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNDU0NFxuXHRcdCAqL1xuXHRcdGlmICggdW5kZWZpbmVkID09PSBleGlzdE5vZGUgKSB7XG5cdFx0XHRjb25zdCBlc2MgPSBzID0+IHMucmVwbGFjZSgvKFtcXFxcXiQqKz8uKCl8e31cXFtcXF1dKS9nLCAnXFxcXCQxJyk7XG5cdFx0XHRjb25zdCBmID0gZXNjKCBmaWVsZE5hbWUgKTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0b3IgPVxuXHRcdFx0XHRgW25hbWUkPVwiWyR7Zn1dXCJdLGAgK1xuXHRcdFx0XHRgW25hbWUkPVwiWyR7Zn1dW11cIl0sYCArXG5cdFx0XHRcdGBbbmFtZSo9XCJbJHtmfV1bXCJdYDtcblxuXHRcdFx0Y29uc3QgZm91bmQgPSB0aGlzLnJvb3Qucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcblx0XHRcdGlmICggZm91bmQgJiYgZm91bmQubGVuZ3RoICkge1xuXHRcdFx0XHRleGlzdE5vZGUgPSBmb3VuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAc2VlICAgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEzNzMwXG5cdFx0ICogQHNpbmNlIDMuNC41LjFcblx0XHQgKi9cblx0XHRleGlzdE5vZGUgPSB3cEZpbHRlcnMoXG5cdFx0XHQnamV0LmZiLmZvcm11bGEubm9kZS5leGlzdHMnLFxuXHRcdFx0ZXhpc3ROb2RlLFxuXHRcdFx0ZmllbGROYW1lLCBcblx0XHRcdHRoaXNcblx0XHQpO1xuXG5cdFx0cmV0dXJuIGV4aXN0Tm9kZTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGN1cnJlbnQge1N0cmluZ31cblx0ICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICopfCp9XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRvYnNlcnZlTWFjcm8oIGN1cnJlbnQgKSB7XG5cdFx0aWYgKCBudWxsID09PSB0aGlzLmZvcm11bGEgKSB7XG5cdFx0XHR0aGlzLmZvcm11bGEgPSBjdXJyZW50O1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLXVudXNlZC12YXJzLWJlZm9yZS1yZXR1cm5cblx0XHRjb25zdCBbIG5hbWUsIC4uLmZpbHRlcnMgXSA9IGN1cnJlbnQuc3BsaXQoICd8JyApO1xuXHRcdGNvbnN0IHBhcnNlZE5hbWUgICAgICAgICAgID0gbmFtZS5tYXRjaCggL1tcXHdcXC06XSsvZyApO1xuXG5cblxuXHRcdGlmICggIXBhcnNlZE5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0bGV0IFsgZmllbGROYW1lLCAuLi5wYXJhbXMgXSA9IHBhcnNlZE5hbWU7XG5cblx0XHRpZiAobmFtZS5pbmNsdWRlcygnOjonKSkge1xuXHRcdFx0Y29uc3QgW3Bvc3NpYmxlRmllbGROYW1lLCAuLi5wb3NzaWJsZVBhcmFtc10gPSBuYW1lLnNwbGl0KCc6OicpO1xuXHRcdFx0aWYgKHRoaXMucm9vdC5nZXRJbnB1dChwb3NzaWJsZUZpZWxkTmFtZSkpIHtcblx0XHRcdFx0ZmllbGROYW1lID0gcG9zc2libGVGaWVsZE5hbWU7XG5cdFx0XHRcdHBhcmFtcyA9IHBvc3NpYmxlUGFyYW1zO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBzZWUgICBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTM3MzBcblx0XHQgKiBAc2luY2UgMy40LjUuMSAobW92ZWQgdG8gYSBtZXRob2QgYW5kIGFkZGVkIGFkZGl0aW9uYWwgY2hlY2tzKVxuXHRcdCAqL1xuXHRcdGNvbnN0IGV4aXN0Tm9kZSA9IHRoaXMuaXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApO1xuXG5cblx0XHRpZiAoIGV4aXN0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoIGAlJHtmaWVsZE5hbWV9JWAsICdnJyApO1xuXG5cdFx0XHRsZXQgYWRqdXN0ZWRWYWx1ZSAgID0gMDtcblx0XHRcdGxldCBhZGp1c3RlZEZvcm11bGEgPSB0aGlzLmZvcm11bGE7XG5cdFx0XHRsZXQgbWF0Y2g7XG5cblx0XHRcdHdoaWxlICggbnVsbCAhPT0gKCBtYXRjaCA9IHJlZ2V4LmV4ZWMoIHRoaXMuZm9ybXVsYSApICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYmVmb3JlID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCAtIDEgXTtcblx0XHRcdFx0Y29uc3QgYWZ0ZXIgID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCBdO1xuXG5cdFx0XHRcdGlmICggJyonID09PSBiZWZvcmUgfHwgJy8nID09PSBiZWZvcmUgfHwgJyonID09PSBhZnRlciB8fCAnLycgPT09IGFmdGVyICkge1xuXHRcdFx0XHRcdGlmICggJy8nID09PSBiZWZvcmUgfHwgKCAnKicgPT09IGJlZm9yZSAmJiAnKicgPT09IGFmdGVyICkgKSB7XG5cdFx0XHRcdFx0XHRhZGp1c3RlZFZhbHVlID0gMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhZGp1c3RlZEZvcm11bGEgPSBhZGp1c3RlZEZvcm11bGEucmVwbGFjZSggbWF0Y2hbMF0sIGFkanVzdGVkVmFsdWUgKTtcblxuXHRcdFx0dGhpcy5mb3JtdWxhID0gYWRqdXN0ZWRGb3JtdWxhO1xuXG5cdFx0XHRyZXR1cm4gYWRqdXN0ZWRWYWx1ZTtcblx0XHR9XG5cblx0XHRjb25zdCByZWxhdGVkSW5wdXQgPSBmaWVsZE5hbWUgIT09ICd0aGlzJ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yb290LmdldElucHV0KCBmaWVsZE5hbWUgKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dDtcblxuXHRcdGlmICggIXJlbGF0ZWRJbnB1dCAmJiAhZmllbGROYW1lLmluY2x1ZGVzKCAnOjonICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tdW51c2VkLXZhcnMtYmVmb3JlLXJldHVyblxuXHRcdGNvbnN0IGZpbHRlcnNMaXN0ID0gZ2V0RmlsdGVycyggZmlsdGVycyApO1xuXG5cdFx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRcdGNvbnN0IGN1c3RvbVZhbHVlID0gd3BGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmN1c3RvbS5mb3JtdWxhLm1hY3JvJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdGZpZWxkTmFtZSxcblx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlKCksIGZpbHRlcnNMaXN0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlLCBmaWx0ZXJzTGlzdCApO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMucmVsYXRlZC5pbmNsdWRlcyggcmVsYXRlZElucHV0Lm5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xuXG5cdFx0XHR0aGlzLndhdGNoZXJzLnB1c2goXG5cdFx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoICFwYXJhbXM/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdFx0XHRcdHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSxcblx0XHRcdFx0ZmlsdGVyc0xpc3QsXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFsgYXR0ck5hbWUgXSA9IHBhcmFtcztcblxuXHRcdGlmICgnbGFiZWwnID09PSBhdHRyTmFtZSkge1xuXHRcdFx0cmV0dXJuICgpID0+IGFwcGx5RmlsdGVycyhcblx0XHRcdFx0dGhpcy5yZWxhdGVkTGFiZWxDYWxsYmFjayhyZWxhdGVkSW5wdXQpLFxuXHRcdFx0XHRmaWx0ZXJzTGlzdCxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhcmVsYXRlZElucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCBhdHRyTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7QmFzZUh0bWxBdHRyfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGh0bWxBdHRyID0gcmVsYXRlZElucHV0LmF0dHJzWyBhdHRyTmFtZSBdO1xuXG5cdFx0aWYgKCAhdGhpcy5yZWxhdGVkQXR0cnMuaW5jbHVkZXMoIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZEF0dHJzLnB1c2goIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKTtcblxuXHRcdFx0dGhpcy53YXRjaGVycy5wdXNoKFxuXHRcdFx0XHRodG1sQXR0ci52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKCBodG1sQXR0ci52YWx1ZS5jdXJyZW50LCBmaWx0ZXJzTGlzdCApO1xuXHR9LFxuXHQvKipcblx0ICogTWFwcyBgdGhpcy5wYXJ0c2AgaW50byB0aGUgam9pbmVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGVcblx0ICogZm9ybXVsYS4gU2hhcmVkIGJ5IGNhbGxlcnMgdGhhdCBvbmx5IG5lZWQgdGhlIHN1YnN0aXR1dGVkIHRleHRcblx0ICogKGUuZy4gSFRNTCBtYWNyb3MsIHJlc3RyaWN0aW9uIG1lc3NhZ2VzKSBhbmQgYnkgY2FsY3VsYXRlKCksIHdoaWNoXG5cdCAqIGFkZGl0aW9uYWxseSBoYXMgdG8gbWFrZSB0aGUgcmVzdWx0IHNhZmUgdG8gcnVuIHRocm91Z2hcblx0ICogYG5ldyBGdW5jdGlvbigpYCAtIHNlZSBjYWxjdWxhdGVFdmFsU3RyaW5nKCkgZm9yIHRoYXQgY29uY2Vybi5cblx0ICpcblx0ICogYG1hcFJlc3VsdGAgbWFwcyBhIHNpbmdsZSBzdWJzdGl0dXRlZCAoZnVuY3Rpb24tZGVyaXZlZCkgcGFydCdzXG5cdCAqIHJlc3VsdCBiZWZvcmUgaXQgaXMgam9pbmVkIGludG8gdGhlIHN0cmluZy4gYG1hcFN0YXRpY2AgcmVjZWl2ZXMgdGhlXG5cdCAqIHRydXN0ZWQgZm9ybXVsYSB0ZXh0IGJldHdlZW4gbWFjcm9zLlxuXHQgKlxuXHQgKiBAcGFyYW0gIG1hcFJlc3VsdCB7RnVuY3Rpb259XG5cdCAqIEBwYXJhbSAgbWFwU3RhdGljIHtGdW5jdGlvbn1cblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0bWFwUGFydHMoIG1hcFJlc3VsdCwgbWFwU3RhdGljID0gY3VycmVudCA9PiBjdXJyZW50ICkge1xuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybXVsYTtcblx0XHR9XG5cblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBhcHBseUZpbHRlcnM6IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgPSBmYWxzZSxcblx0XHQgICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XG5cblx0XHRyZXR1cm4gdGhpcy5wYXJ0cy5tYXAoIGN1cnJlbnQgPT4ge1xuXHRcdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY3VycmVudCApIHtcblxuXHRcdFx0XHRpZiAoICF0aGlzLmlucHV0Py5ub2Rlc1xuXHRcdFx0XHRcdHx8IGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzXG5cdFx0XHRcdFx0fHwgJ3N0cmluZycgIT09IHR5cGVvZiBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBtYXBTdGF0aWMoIGN1cnJlbnQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN1cnJlbnQgPSB3cEZpbHRlcnMoXG5cdFx0XHRcdFx0J2pldC5mYi5vbkNhbGN1bGF0ZS5wYXJ0Jyxcblx0XHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0cmV0dXJuIG1hcFN0YXRpYyggZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcblx0XHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1mb3JtdWxhLWJlZm9yZS12YWx1ZScsXG5cdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMuaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdFx0XHQpICk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHQgPSBjdXJyZW50KCk7XG5cblx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRSZXN1bHQgPSAoXG5cdFx0XHRcdCAgICAgICBudWxsID09PSByZXN1bHQgfHxcblx0XHRcdFx0ICAgICAgIHVuZGVmaW5lZCA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICAnJyA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICBOdW1iZXIuaXNOYU4oIHJlc3VsdCApXG5cdFx0XHQgICAgICAgKSA/IHRoaXMuZW1wdHlWYWx1ZSgpIDogcmVzdWx0O1xuXG5cdFx0XHRyZXR1cm4gbWFwUmVzdWx0KCBub3JtYWxpemVkUmVzdWx0ICk7XG5cdFx0fSApLmpvaW4oICcnICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBVc2VkIGZvciByZXN0cmljdGlvbi92YWxpZGF0aW9uIG1lc3NhZ2VzIHRoYXQgYXJlIHJlbmRlcmVkIHZpYVxuXHQgKiBgaW5uZXJIVE1MYCAoc2VlIEFkdmFuY2VkUmVzdHJpY3Rpb24uanMpLiBTdWJzdGl0dXRlZCBtYWNybyB2YWx1ZXNcblx0ICogYXJlIEhUTUwtZXNjYXBlZCBzbyBhIG1hbGljaW91cyBmaWVsZCB2YWx1ZSByZWZlcmVuY2VkIGluIGFcblx0ICogdmFsaWRhdGlvbiBtZXNzYWdlIGNhbid0IGluamVjdCBsaXZlIG1hcmt1cDsgdGhlIHRydXN0ZWQgc3RhdGljXG5cdCAqIG1lc3NhZ2UgdGV4dCAoYXV0aG9yLWF1dGhvcmVkLCBtYXkgY29udGFpbiBpbnRlbnRpb25hbCBtYXJrdXApIGlzXG5cdCAqIGxlZnQgdW50b3VjaGVkLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyIChSZWZsZWN0ZWQgWFNTIHZpYSBDYWxjdWxhdGVkIEZpZWxkKVxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRjYWxjdWxhdGVTdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwUGFydHMoIHJlc3VsdCA9PiBlc2NhcGVNYWNyb0Zvckh0bWwoIHJlc3VsdCApICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBCdWlsZHMgdGhlIHN0cmluZyB0aGF0IGlzIGhhbmRlZCB0byBgbmV3IEZ1bmN0aW9uKClgIGluIGNhbGN1bGF0ZSgpLlxuXHQgKiBFdmVyeSBzdWJzdGl0dXRlZCBmaWVsZCB2YWx1ZSAodGhlIGBmdW5jdGlvbmAtYnJhbmNoIHJlc3VsdHMgaW5cblx0ICogbWFwUGFydHMoKSkgbXVzdCBuZXZlciBiZSBhYmxlIHRvIGluamVjdCByYXcgSlMgc3ludGF4IGludG8gdGhhdFxuXHQgKiBzdHJpbmcuXG5cdCAqXG5cdCAqIEEgdmFsdWUgdGhhdCByZXByZXNlbnRzIGEgZmluaXRlIG51bWJlciAoZWl0aGVyIGFscmVhZHkgYSBudW1iZXIsXG5cdCAqIG9yIGEgbnVtZXJpYyBzdHJpbmcgc3VjaCBhcyBhIHJlbGF0ZWQgdGV4dCBmaWVsZCdzIHJhdyB2YWx1ZSkgaXNcblx0ICogZW1pdHRlZCBhcyBhIGJhcmUgbnVtZXJpYyBsaXRlcmFsLCBzbyBleGlzdGluZyBudW1lcmljIGZvcm11bGFzXG5cdCAqIChgJWElICsgJWIlYCwgYCVhJSAqICViJWAsIOKApikga2VlcCBkb2luZyByZWFsIGFyaXRobWV0aWMgZXhhY3RseSBhc1xuXHQgKiBiZWZvcmUuIEFueXRoaW5nIGVsc2UgKGUuZy4gb3B0aW9uIGxhYmVscyBpbiBcImFzIFN0cmluZ1wiIG1vZGUsIG9yXG5cdCAqIGFyYml0cmFyeSB0ZXh0IGNvbWluZyBmcm9tIGFuIHVuc2FuaXRpemVkIHByZXNldCkgaXMgZW1pdHRlZCBhcyBhXG5cdCAqIEpTT04tcXVvdGVkIHN0cmluZyBsaXRlcmFsLCBzbyBpdCBjYW4gb25seSBldmVyIGJlIGV2YWx1YXRlZCBhc1xuXHQgKiBpbmVydCBzdHJpbmcgZGF0YSAtIG5ldmVyIGFzIGV4ZWN1dGFibGUgSlMgLSByZWdhcmRsZXNzIG9mIGl0c1xuXHQgKiBjb250ZW50cy5cblx0ICpcblx0ICogU3RhdGljIGZvcm11bGEgdGV4dCBpcyBwcmVzZXJ2ZWQgZXhjZXB0IGZvciBwaHlzaWNhbCBsaW5lIGJyZWFrcyBpbnNpZGVcblx0ICogcXVvdGVkIGxpdGVyYWxzLCB3aGljaCBhcmUgbm9ybWFsaXplZCB0byBlc2NhcGVkIGxpbmUgYnJlYWtzIGJlZm9yZSB0aGVcblx0ICogZm9ybXVsYSBpcyBldmFsdWF0ZWQuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIgKFJlZmxlY3RlZCBYU1MgdmlhIENhbGN1bGF0ZWQgRmllbGQpXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGNhbGN1bGF0ZUV2YWxTdHJpbmcoKSB7XG5cdFx0Y29uc3QgbGV4aWNhbENvbnRleHQgPSBjcmVhdGVGb3JtdWxhTGV4aWNhbENvbnRleHQoKTtcblxuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIGxleGljYWxDb250ZXh0LmNvbnN1bWUoIHRoaXMuZm9ybXVsYSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLm1hcFBhcnRzKCByZXN1bHQgPT4ge1xuXHRcdFx0Y29uc3Qgc3RhdGUgPSBsZXhpY2FsQ29udGV4dC5nZXRTdGF0ZSgpO1xuXHRcdFx0Y29uc3QgaGFzUGVuZGluZ0VzY2FwZSA9IGxleGljYWxDb250ZXh0LmlzRXNjYXBlZCgpO1xuXHRcdFx0bGV0IHJlcGxhY2VtZW50O1xuXG5cdFx0XHRpZiAoIFsgJ3NpbmdsZScsICdkb3VibGUnLCAndGVtcGxhdGUnIF0uaW5jbHVkZXMoIHN0YXRlICkgKSB7XG5cdFx0XHRcdHJlcGxhY2VtZW50ID0gZXNjYXBlTWFjcm9Gb3JTdHJpbmdMaXRlcmFsKFxuXHRcdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0XHRzdGF0ZSxcblx0XHRcdFx0XHRoYXNQZW5kaW5nRXNjYXBlLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICdyZWdleCcgPT09IHN0YXRlICkge1xuXHRcdFx0XHRyZXBsYWNlbWVudCA9IGVzY2FwZU1hY3JvRm9yUmVnZXhMaXRlcmFsKFxuXHRcdFx0XHRcdHJlc3VsdCxcblx0XHRcdFx0XHRoYXNQZW5kaW5nRXNjYXBlLFxuXHRcdFx0XHRcdGxleGljYWxDb250ZXh0LmlzSW5SZWdleENoYXJhY3RlckNsYXNzKCksXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggWyAnbGluZS1jb21tZW50JywgJ2Jsb2NrLWNvbW1lbnQnIF0uaW5jbHVkZXMoIHN0YXRlICkgKSB7XG5cdFx0XHRcdHJlcGxhY2VtZW50ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggJ2Jvb2xlYW4nID09PSB0eXBlb2YgcmVzdWx0ICkge1xuXHRcdFx0XHQvLyB0cnVlL2ZhbHNlIGFyZSBmaXhlZCBKUyBrZXl3b3JkcyB3aXRoIG5vIGF0dGFja2VyLWNvbnRyb2xsZWRcblx0XHRcdFx0Ly8gY29udGVudCwgc28gZW1pdHRpbmcgdGhlbSBiYXJlIGlzIGFsd2F5cyBzYWZlIC0gYW5kXG5cdFx0XHRcdC8vIG5lY2Vzc2FyeTogSlNPTi1xdW90aW5nIGEgYm9vbGVhbiByZXN1bHQgKGUuZy4gZnJvbSBhXG5cdFx0XHRcdC8vIGN1c3RvbSBmb3JtdWxhIG1hY3JvKSBhcyBcImZhbHNlXCIgd291bGQgbWFrZSBpdCBhXG5cdFx0XHRcdC8vIG5vbi1lbXB0eSwgdHJ1dGh5ICpzdHJpbmcqIGluIHRoZSBnZW5lcmF0ZWQgY29kZSwgZmxpcHBpbmdcblx0XHRcdFx0Ly8gdGhlIHJlc3VsdCBvZiBgJW1hY3JvJSA/IGEgOiBiYC5cblx0XHRcdFx0cmVwbGFjZW1lbnQgPSBTdHJpbmcoIHJlc3VsdCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoICdudW1iZXInID09PSB0eXBlb2YgcmVzdWx0ICkge1xuXHRcdFx0XHRyZXBsYWNlbWVudCA9IE51bWJlci5pc0Zpbml0ZSggcmVzdWx0IClcblx0XHRcdFx0XHQvLyBPYmplY3QuaXMgZGlzdGluZ3Vpc2hlcyAtMCBmcm9tIDA7IFN0cmluZygtMCkgaXMgXCIwXCIsXG5cdFx0XHRcdFx0Ly8gc28gbmVnYXRpdmUgemVybyBuZWVkcyBhbiBleHBsaWNpdCBsaXRlcmFsIHRvIGF2b2lkXG5cdFx0XHRcdFx0Ly8gc2lsZW50bHkgZmxpcHBpbmcgdGhlIHNpZ24gb2YgdGhlIGZvcm11bGEncyByZXN1bHQuXG5cdFx0XHRcdFx0PyAoIE9iamVjdC5pcyggcmVzdWx0LCAtMCApID8gJy0wJyA6IFN0cmluZyggcmVzdWx0ICkgKVxuXHRcdFx0XHRcdC8vIEluZmluaXR5Ly1JbmZpbml0eS9OYU4gYXJlIHJlYWwgSlMgZ2xvYmFsIGlkZW50aWZpZXJzLFxuXHRcdFx0XHRcdC8vIG5vdCBzdHJpbmcgbGl0ZXJhbHMgLSBlbWl0dGluZyB0aGVtIEpTT04tcXVvdGVkIHdvdWxkXG5cdFx0XHRcdFx0Ly8gdHVybiBhcml0aG1ldGljIChgMSArIEluZmluaXR5YCkgaW50byBzdHJpbmdcblx0XHRcdFx0XHQvLyBjb25jYXRlbmF0aW9uIChgMSArIFwiSW5maW5pdHlcImApLlxuXHRcdFx0XHRcdDogU3RyaW5nKCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0cmltbWVkUmVzdWx0ID0gU3RyaW5nKCByZXN1bHQgKS50cmltKCk7XG5cblx0XHRcdFx0Ly8gUmVqZWN0IGEgbGVhZGluZy16ZXJvIGRlY2ltYWwgc3RyaW5nIChlLmcuIFwiMDEyM1wiKTogYXMgYVxuXHRcdFx0XHQvLyBiYXJlIHRva2VuIGl0IHdvdWxkIGJlIHBhcnNlZCBieSBuZXcgRnVuY3Rpb24oKSBhcyBhXG5cdFx0XHRcdC8vIGxlZ2FjeSBvY3RhbCBsaXRlcmFsICgwMTIzID09PSA4MyksIHNpbGVudGx5IGNvcnJ1cHRpbmdcblx0XHRcdFx0Ly8gdGhlIHZhbHVlIGluc3RlYWQgb2YgcHJlc2VydmluZyBpdC5cblx0XHRcdFx0Y29uc3QgaGFzTGVhZGluZ1plcm8gPSAvXlsrLV0/MFxcZC8udGVzdCggdHJpbW1lZFJlc3VsdCApO1xuXG5cdFx0XHRcdGNvbnN0IGlzTnVtZXJpY0xpdGVyYWwgPSAhaGFzTGVhZGluZ1plcm9cblx0XHRcdFx0XHQmJiBOVU1FUklDX0xJVEVSQUxfUkUudGVzdCggdHJpbW1lZFJlc3VsdCApXG5cdFx0XHRcdFx0JiYgTnVtYmVyLmlzRmluaXRlKCBwYXJzZUZsb2F0KCB0cmltbWVkUmVzdWx0ICkgKTtcblxuXHRcdFx0XHRpZiAoIGlzTnVtZXJpY0xpdGVyYWwgKSB7XG5cdFx0XHRcdFx0Ly8gRW1pdCB0aGUgYWxyZWFkeS12YWxpZGF0ZWQgbGl0ZXJhbCBhcy1pcyByYXRoZXIgdGhhblxuXHRcdFx0XHRcdC8vIGNhbm9uaWNhbGl6aW5nIGl0IHRocm91Z2ggTnVtYmVyKCkvcGFyc2VGbG9hdCgpOiB0aGF0XG5cdFx0XHRcdFx0Ly8gd291bGQgY29sbGFwc2UgYSBzaWduZWQgemVybyAoZS5nLiBcIi0wXCIpIHRvIFwiMFwiIGFuZFxuXHRcdFx0XHRcdC8vIGNoYW5nZSB0aGUgZm9ybXVsYSdzIGFyaXRobWV0aWMgcmVzdWx0LlxuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gdHJpbW1lZFJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmICggJ3RydWUnID09PSB0cmltbWVkUmVzdWx0IHx8ICdmYWxzZScgPT09IHRyaW1tZWRSZXN1bHQgKSB7XG5cdFx0XHRcdFx0Ly8gQSBmaWVsZCB3aG9zZSByYXcgdmFsdWUgaXMgbGl0ZXJhbGx5IHRoZSB0ZXh0IFwidHJ1ZVwiL1xuXHRcdFx0XHRcdC8vIFwiZmFsc2VcIiAoZS5nLiBhIHNlbGVjdC9yYWRpby9jaGVja2JveCBvcHRpb24sIG9yIGFcblx0XHRcdFx0XHQvLyBwcmVzZXQtcG9wdWxhdGVkIHRleHQgZmllbGQgbWlycm9yaW5nIGEgYm9vbGVhbikgbmVlZHNcblx0XHRcdFx0XHQvLyB0byBrZWVwIGJlaGF2aW5nIGxpa2UgdGhlIGJvb2xlYW4gaXQgcmVwcmVzZW50cyBpblxuXHRcdFx0XHRcdC8vIGNvZGUgcG9zaXRpb24gKGAlZmllbGQlID8gYSA6IGJgKSwgc2FtZSBhcyBhbiBhY3R1YWxcblx0XHRcdFx0XHQvLyBib29sZWFuIG1hY3JvIHJlc3VsdCBqdXN0IGFib3ZlLiBFbWl0dGluZyBpdFxuXHRcdFx0XHRcdC8vIEpTT04tcXVvdGVkIHdvdWxkIG1ha2UgaXQgYSBub24tZW1wdHksIGFsd2F5cy10cnV0aHlcblx0XHRcdFx0XHQvLyAqc3RyaW5nKiBpbnN0ZWFkLCBzaWxlbnRseSBmbGlwcGluZyBldmVyeSBzdWNoXG5cdFx0XHRcdFx0Ly8gY29uZGl0aW9uLiBgdHJpbW1lZFJlc3VsdGAgaXMgb25lIG9mIGV4YWN0bHkgdHdvIGZpeGVkXG5cdFx0XHRcdFx0Ly8gbGl0ZXJhbCB3b3JkcyBoZXJlLCBzbyB0aGlzIGlzIGFsd2F5cyBzYWZlIHRvIGVtaXRcblx0XHRcdFx0XHQvLyBiYXJlIC0gaXQgY2FuIG5ldmVyIGNhcnJ5IGF0dGFja2VyLWNvbnRyb2xsZWQgc3ludGF4LlxuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gdHJpbW1lZFJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXBsYWNlbWVudCA9IEpTT04uc3RyaW5naWZ5KCBTdHJpbmcoIHJlc3VsdCApICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV4aWNhbENvbnRleHQuY29uc3VtZSggcmVwbGFjZW1lbnQgKTtcblxuXHRcdFx0cmV0dXJuIHJlcGxhY2VtZW50O1xuXHRcdH0sIGN1cnJlbnQgPT4gbGV4aWNhbENvbnRleHQuY29uc3VtZSggY3VycmVudCApICk7XG5cdH0sXG5cdGVtcHR5VmFsdWUoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9LFxuXHRjYWxjdWxhdGUoKSB7XG5cdFx0aWYgKCAhdGhpcy5wYXJ0cy5sZW5ndGggJiYgIXRoaXMuZm9yY2VGdW5jdGlvbiApIHtcblx0XHRcdHJldHVybiB0aGlzLmZvcm11bGE7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZm9ybXVsYSA9IHRoaXMuY2FsY3VsYXRlRXZhbFN0cmluZygpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5ldyBGdW5jdGlvbiggJ3JldHVybiAnICsgZm9ybXVsYSApXG5cdFx0XHQpKCk7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHQvL2NvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHR0aGlzLnNob3dFcnJvciggZm9ybXVsYSApO1xuXHRcdH1cblxuXHR9LFxuXHRjbGVhcldhdGNoZXJzKCkge1xuXHRcdHRoaXMud2F0Y2hlcnMuZm9yRWFjaChcblx0XHRcdGN1cnJlbnQgPT4gJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnQgJiYgY3VycmVudCgpLFxuXHRcdCk7XG5cdFx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcblx0XHR0aGlzLnJlbGF0ZWRBdHRycyA9IFtdO1xuXHRcdHRoaXMucmVsYXRlZCAgICAgID0gW107XG5cdH0sXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0c2hvd0Vycm9yKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZ3JvdXAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J0pldEZvcm1CdWlsZGVyOiBZb3UgaGF2ZSBpbnZhbGlkIGNhbGN1bGF0ZWQgZm9ybXVsYScsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdHRoaXMuc2hvd0Vycm9yRGV0YWlscyggZm9ybXVsYSApO1xuXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHR9LFxuXHRzaG93RXJyb3JEZXRhaWxzKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBpbml0aWFsIGZvcm11bGFcblx0XHRcdFx0X18oICdJbml0aWFsOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHR0aGlzLmZvcm11bGEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGNvbXB1dGVkIGZvcm11bGFcblx0XHRcdFx0X18oICdDb21wdXRlZDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0Zm9ybXVsYSxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdGlmICggIXRoaXMuaW5wdXQgJiYgIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5pbnB1dCApIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdHNwcmludGYoXG5cdFx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gZmlsZWQgbmFtZVxuXHRcdFx0XHRcdF9fKCAnRmllbGQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdFx0dGhpcy5pbnB1dC5wYXRoLmpvaW4oICcuJyApLFxuXHRcdFx0XHQpLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5yb290LnBhcmVudC5maW5kSW5kZXgoIHRoaXMucm9vdCApO1xuXG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIHBhdGggdG8gY3VycmVudCBmaWVsZFxuXHRcdFx0XHRfXyggJ1Njb3BlOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0Li4udGhpcy5yb290LnBhcmVudC5wYXRoLFxuXHRcdFx0XHRcdC0xID09PSBpbmRleCA/ICcnIDogaW5kZXgsXG5cdFx0XHRcdF0uZmlsdGVyKCBCb29sZWFuICkuam9pbiggJy4nICksXG5cdFx0XHQpLFxuXHRcdCk7XG5cdH0sXG5cdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEZvcm11bGE7XG4iLCJmdW5jdGlvbiBhcHBseUZpbHRlcnMoIHZhbHVlLCBmaWx0ZXJzLCBjb250ZXh0ID0ge30gKSB7XG5cdGlmICggbnVsbCA9PT0gZmlsdGVycyB8fCAhZmlsdGVycz8ubGVuZ3RoICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGxldCBjYW5Vc2VSYXdSZXBlYXRlclZhbHVlID0gQm9vbGVhbiggY29udGV4dD8ucmF3UmVwZWF0ZXJWYWx1ZSApO1xuXG5cdGZvciAoIGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzICkge1xuXHRcdGNvbnN0IHNob3VsZFVzZVJhd1JlcGVhdGVyVmFsdWUgPSAoXG5cdFx0XHRjYW5Vc2VSYXdSZXBlYXRlclZhbHVlICYmXG5cdFx0XHRmYWxzZSA9PT0gZmlsdGVyPy5pc0NvcmVGaWx0ZXJcblx0XHQpO1xuXG5cdFx0dmFsdWUgPSBmaWx0ZXIuYXBwbHlXaXRoUHJvcHMoXG5cdFx0XHRzaG91bGRVc2VSYXdSZXBlYXRlclZhbHVlXG5cdFx0XHRcdD8gY29udGV4dC5yYXdSZXBlYXRlclZhbHVlXG5cdFx0XHRcdDogdmFsdWVcblx0XHQpO1xuXHRcdGNhblVzZVJhd1JlcGVhdGVyVmFsdWUgPSBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlGaWx0ZXJzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ3VycmVudERhdGUgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvQ3VycmVudERhdGUnO1xuaW1wb3J0IE1pbl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvTWluX0luX1NlYyc7XG5pbXBvcnQgTW9udGhfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL01vbnRoX0luX1NlYyc7XG5pbXBvcnQgSG91cl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvSG91cl9Jbl9TZWMnO1xuaW1wb3J0IERheV9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvRGF5X0luX1NlYyc7XG5pbXBvcnQgWWVhcl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvWWVhcl9Jbl9TZWMnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVyczogd3BBcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFN0YXRpY0Z1bmN0aW9ucyA9ICgpID0+IHdwQXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnN0YXRpYy5mdW5jdGlvbnMnLFxuXHRbXG5cdFx0Q3VycmVudERhdGUsXG5cdFx0TWluX0luX1NlYyxcblx0XHRNb250aF9Jbl9TZWMsXG5cdFx0SG91cl9Jbl9TZWMsXG5cdFx0RGF5X0luX1NlYyxcblx0XHRZZWFyX0luX1NlYyxcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUge0Jhc2VJbnRlcm5hbE1hY3JvW119XG4gKi9cbmxldCBzdGF0aWNGdW5jdGlvbnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIHNsdWdcbiAqIEByZXR1cm4ge2Jvb2xlYW58QmFzZUludGVybmFsTWFjcm99XG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uKCBzbHVnICkge1xuXHRpZiAoICFzdGF0aWNGdW5jdGlvbnMubGVuZ3RoICkge1xuXHRcdHN0YXRpY0Z1bmN0aW9ucyA9IGdldFN0YXRpY0Z1bmN0aW9ucygpO1xuXHR9XG5cblx0Zm9yICggY29uc3Qgc3RhdGljRnVuY3Rpb24gb2Ygc3RhdGljRnVuY3Rpb25zICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgc3RhdGljRnVuY3Rpb24oKTtcblxuXHRcdGlmICggY3VycmVudC5nZXRJZCgpICE9PSBzbHVnICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgcmVzdWx0ICAgIHtTdHJpbmd9XG4gKiBAcGFyYW0gIGZpZWxkTmFtZSB7U3RyaW5nfVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoQ29uc3ROYW1lc3BhY2UoXG5cdHJlc3VsdCxcblx0ZmllbGROYW1lLFxuKSB7XG5cdGlmICggIWZpZWxkTmFtZS5pbmNsdWRlcyggJ0NUOjonICkgKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRmaWVsZE5hbWUgPSBmaWVsZE5hbWUucmVwbGFjZSggJ0NUOjonLCAnJyApO1xuXG5cdGNvbnN0IHN0YXRpY0Z1bmMgPSBnZXRGdW5jdGlvbiggZmllbGROYW1lICk7XG5cblx0aWYgKCBmYWxzZSA9PT0gc3RhdGljRnVuYyApIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIHN0YXRpY0Z1bmMuZ2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF0dGFjaENvbnN0TmFtZXNwYWNlOyIsImZ1bmN0aW9uIEJhc2VJbnRlcm5hbE1hY3JvKCkge1xufVxuXG5CYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgPSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcblx0LyoqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdldElkICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXdyaXRlIHRoaXMgbWV0aG9kJyApO1xuXHR9LFxuXHRnZXRSZXN1bHQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJld3JpdGUgdGhpcyBtZXRob2QnICk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlSW50ZXJuYWxNYWNybzsiLCJpbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5cbmZ1bmN0aW9uIEN1cnJlbnREYXRlKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnQ3VycmVudERhdGUnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG5DdXJyZW50RGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudERhdGU7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIERheV9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkID0gKCkgPT4gJ0RheV9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5EYXlfSW5fU2VjO1xufVxuXG5EYXlfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBEYXlfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBIb3VyX0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgPSAoKSA9PiAnSG91cl9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5Ib3VyX0luX1NlYztcbn1cblxuSG91cl9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBNaW5fSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCA9ICgpID0+ICdNaW5fSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTWluX0luX1NlYztcbn1cblxuTWluX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWluX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gTW9udGhfSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnTW9udGhfSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTW9udGhfSW5fU2VjO1xufVxuXG5Nb250aF9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRoX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gWWVhcl9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkICAgICA9ICgpID0+ICdZZWFyX0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLlllYXJfSW5fU2VjO1xufVxuXG5ZZWFyX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhcl9Jbl9TZWM7IiwiY29uc3QgQ29uc3RhbnRzID0ge1xuXHRNaWxsaV9Jbl9TZWM6IDEwMDAsXG5cdFNlY19Jbl9NaW46IDYwLFxuXHRNaW5fSW5fSG91cjogNjAsXG5cdEhvdXJfSW5fRGF5OiAyNCxcblx0RGF5X0luX01vbnRoOiAzMCxcblx0WWVhcl9Jbl9EYXk6IDM2NSxcblx0S2JfSW5fQnl0ZXM6IDEwMjQsXG59O1xuXG5Db25zdGFudHMuTWluX0luX1NlYyAgID0gQ29uc3RhbnRzLlNlY19Jbl9NaW4gKiBDb25zdGFudHMuTWlsbGlfSW5fU2VjO1xuQ29uc3RhbnRzLkhvdXJfSW5fU2VjICA9IENvbnN0YW50cy5NaW5fSW5fSG91ciAqIENvbnN0YW50cy5NaW5fSW5fU2VjO1xuQ29uc3RhbnRzLkRheV9Jbl9TZWMgICA9IENvbnN0YW50cy5Ib3VyX0luX0RheSAqIENvbnN0YW50cy5Ib3VyX0luX1NlYztcbkNvbnN0YW50cy5Nb250aF9Jbl9TZWMgPSBDb25zdGFudHMuRGF5X0luX01vbnRoICogQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG5Db25zdGFudHMuWWVhcl9Jbl9TZWMgID0gQ29uc3RhbnRzLlllYXJfSW5fRGF5ICogQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG5Db25zdGFudHMuTWJfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLktiX0luX0J5dGVzICogMTAyNDtcbkNvbnN0YW50cy5HYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuTWJfSW5fQnl0ZXMgKiAxMDI0O1xuQ29uc3RhbnRzLlRiX0luX0J5dGVzICA9IENvbnN0YW50cy5HYl9Jbl9CeXRlcyAqIDEwMjQ7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50czsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGREYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdGRheXMgPSBkYXlzID8gKyhcblx0XHRcdGRheXMudHJpbSgpXG5cdFx0KSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBjdXJyZW50LmdldERhdGUoKSArIGRheXMgKTtcblx0fTtcbn1cblxuQWRkRGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkSG91ckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRIb3VyJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91cnMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRob3VycyA9IGhvdXJzID8gKyhcblx0XHRcdGhvdXJzLnRyaW0oKVxuXHRcdCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSArIGhvdXJzICk7XG5cdH07XG59XG5cbkFkZEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkTWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZE1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbnV0ZXMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRtaW51dGVzID0gbWludXRlcyA/ICsoXG5cdFx0XHRtaW51dGVzLnRyaW0oKVxuXHRcdCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggY3VycmVudC5nZXRNaW51dGVzKCkgKyBtaW51dGVzICk7XG5cdH07XG59XG5cbkFkZE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRNb250aCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1vbnRocyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtb250aHMgPSBtb250aHMgPyArbW9udGhzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpICsgbW9udGhzICk7XG5cdH07XG59XG5cbkFkZERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZFllYXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkWWVhcic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXJzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgKyB5ZWFycyApO1xuXHR9O1xufVxuXG5BZGRZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkWWVhckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBGYWxsQmFja0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdpZkVtcHR5Jztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZmFsbGJhY2sgKSB7XG5cdFx0cmV0dXJuICggaXNFbXB0eSh2YWx1ZSkgfHwgTnVtYmVyLmlzTmFOKHZhbHVlKSApID8gZmFsbGJhY2sgOiB2YWx1ZTtcblx0fTtcbn1cblxuRmFsbEJhY2tGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGYWxsQmFja0ZpbHRlcjsiLCJmdW5jdGlvbiBGaWx0ZXIoKSB7XG5cdHRoaXMucHJvcHMgPSBbXTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkZpbHRlci5wcm90b3R5cGUuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0U2x1ZyBpcyBlbXB0eScgKTtcbn07XG5GaWx0ZXIucHJvdG90eXBlLnNldFByb3BzICAgICAgID0gZnVuY3Rpb24gKCBwcm9wcyApIHtcblx0dGhpcy5wcm9wcy5wdXNoKCAuLi5wcm9wcyApO1xufTtcbkZpbHRlci5wcm90b3R5cGUuYXBwbHlXaXRoUHJvcHMgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRyZXR1cm4gdGhpcy5hcHBseSggdmFsdWUsIC4uLnRoaXMucHJvcHMgKTtcbn07XG4vKipcbiAqIEBwYXJhbSAgdmFsdWVcbiAqIEBwYXJhbSAgcHJvcHNcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuRmlsdGVyLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIC4uLnByb3BzICkge1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIExlbmd0aEZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdsZW5ndGgnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHJldHVybiB2YWx1ZT8ubGVuZ3RoID8/IDA7XG5cdH07XG59XG5cbkxlbmd0aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXREYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXkgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0ZGF5ID0gZGF5ID8gK2RheS50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggZGF5ICk7XG5cdH07XG59XG5cblNldERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0SG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGhvdXIgPSBob3VyID8gK2hvdXIudHJpbSgpIDogMDtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBob3VyICk7XG5cdH07XG59XG5cblNldEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0TWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbiApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0bWluID0gbWluID8gK21pbi50cmltKCkgOiAwO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggbWluICk7XG5cdH07XG59XG5cblNldE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldE1vbnRoRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1vbnRoJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGggKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0bW9udGggPSBtb250aCA/ICttb250aC50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TW9udGgoIG1vbnRoICk7XG5cdH07XG59XG5cblNldE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXRZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldFllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFyICkge1xuXHRcdHllYXIgPSB5ZWFyID8gK3llYXIudHJpbSgpIDogZmFsc2U7XG5cblx0XHRpZiAoICF5ZWFyICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIHllYXIgKTtcblx0fTtcbn1cblxuU2V0WWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJEYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0ZGF5cyA9IGRheXMgPyArZGF5cy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgLSBkYXlzICk7XG5cdH07XG59XG5cblN1YnRyYWN0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3REYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViSG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0aG91ciA9IGhvdXIgPyAraG91ci50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSAtIGhvdXIgKTtcblx0fTtcbn1cblxuU3VidHJhY3RIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RNaW5GaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTWluJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWludXRlcyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtaW51dGVzID0gbWludXRlcyA/ICttaW51dGVzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBjdXJyZW50LmdldE1pbnV0ZXMoKSAtIG1pbnV0ZXMgKTtcblx0fTtcbn1cblxuU3VidHJhY3RNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0TW9udGhGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTW9udGgnO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aHMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRtb250aHMgPSBtb250aHMgPyArbW9udGhzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpIC0gbW9udGhzICk7XG5cdH07XG59XG5cblN1YnRyYWN0TW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1vbnRoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1YlllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFycyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgLSB5ZWFycyApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUaW1lc3RhbXBGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnVCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGltZTtcblx0fTtcbn1cblxuVGltZXN0YW1wRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXN0YW1wRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVG9EYXRlRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvRGF0ZSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGlzVVRDID0gdHJ1ZSApIHtcblx0XHQvLyBDb252ZXJ0IHN0cmluZyAndHJ1ZScvJ2ZhbHNlJyB0byBib29sZWFuXG5cdFx0aWYgKCB0eXBlb2YgaXNVVEMgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0Ly8gUmVtb3ZlIHF1b3RlcyBhbmQgdHJpbVxuXHRcdFx0Y29uc3QgY2xlYW5lZCA9IGlzVVRDLnRyaW0oKS5yZXBsYWNlKCAvXlsnXCJdfFsnXCJdJC9nLCAnJyApO1xuXHRcdFx0Y29uc3QgbG93ZXIgICA9IGNsZWFuZWQudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aXNVVEMgPSBsb3dlciAhPT0gJ2ZhbHNlJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNVVEMgPSBCb29sZWFuKCBpc1VUQyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b0RhdGUoIG5ldyBEYXRlKCB2YWx1ZSApLCBpc1VUQyApO1xuXHR9O1xufVxuXG5Ub0RhdGVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyB0b0RhdGVUaW1lIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVG9EYXRlVGltZUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b0RhdGVUaW1lJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaXNVVEMgPSBmYWxzZSApIHtcblx0XHQvLyBDb252ZXJ0IHN0cmluZyAndHJ1ZScvJ2ZhbHNlJyB0byBib29sZWFuXG5cdFx0aWYgKCB0eXBlb2YgaXNVVEMgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0Ly8gUmVtb3ZlIHF1b3RlcyBhbmQgdHJpbVxuXHRcdFx0Y29uc3QgY2xlYW5lZCA9IGlzVVRDLnRyaW0oKS5yZXBsYWNlKCAvXlsnXCJdfFsnXCJdJC9nLCAnJyApO1xuXHRcdFx0Y29uc3QgbG93ZXIgICA9IGNsZWFuZWQudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aXNVVEMgPSAnJyA9PT0gbG93ZXIgPyBmYWxzZSA6IGxvd2VyICE9PSAnZmFsc2UnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc1VUQyA9IEJvb2xlYW4oIGlzVVRDICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvRGF0ZVRpbWUoIG5ldyBEYXRlKCB2YWx1ZSApLCBpc1VUQyApO1xuXHR9O1xufVxuXG5Ub0RhdGVUaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EYXRlVGltZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuZnVuY3Rpb24gVG9EYXlJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvRGF5SW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX0RBWV9NUyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX0RBWV9NUztcblx0fTtcbn1cblxuVG9EYXlJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EYXlJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb0hvdXJJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvSG91ckluTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9IT1VSX01TID0gNjAgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX0hPVVJfTVM7XG5cdH07XG59XG5cblRvSG91ckluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0hvdXJJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb01pbnV0ZUluTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9NaW51dGVJbk1zJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRjb25zdCBPTkVfTUlOVVRFX01TID0gNjAgKiAxMDAwO1xuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9NSU5VVEVfTVM7XG5cdH07XG59XG5cblRvTWludXRlSW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvTWludXRlSW5Nc0ZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuZnVuY3Rpb24gVG9Nb250aEluTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9Nb250aEluTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9NT05USF9NUyA9IDMwICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfTU9OVEhfTVM7XG5cdH07XG59XG5cblRvTW9udGhJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9Nb250aEluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyB0b1RpbWUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUb1RpbWVGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9UaW1lJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaXNVVEMgPSB0cnVlICkge1xuXHRcdC8vIENvbnZlcnQgc3RyaW5nICd0cnVlJy8nZmFsc2UnIHRvIGJvb2xlYW5cblx0XHRpZiAoIHR5cGVvZiBpc1VUQyA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHQvLyBSZW1vdmUgcXVvdGVzIGFuZCB0cmltXG5cdFx0XHRjb25zdCBjbGVhbmVkID0gaXNVVEMudHJpbSgpLnJlcGxhY2UoIC9eWydcIl18WydcIl0kL2csICcnICk7XG5cdFx0XHRjb25zdCBsb3dlciAgID0gY2xlYW5lZC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpc1VUQyA9IGxvd2VyICE9PSAnZmFsc2UnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc1VUQyA9IEJvb2xlYW4oIGlzVVRDICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvVGltZSggbmV3IERhdGUoIHZhbHVlICksIGlzVVRDICk7XG5cdH07XG59XG5cblRvVGltZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvVGltZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuZnVuY3Rpb24gVG9XZWVrSW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b1dlZWtJbk1zJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRjb25zdCBPTkVfV0VFS19NUyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9XRUVLX01TO1xuXHR9O1xufVxuXG5Ub1dlZWtJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9XZWVrSW5Nc0ZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuZnVuY3Rpb24gVG9ZZWFySW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b1llYXJJbk1zJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRjb25zdCBPTkVfWUVBUl9NUyA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX1lFQVJfTVM7XG5cdH07XG59XG5cblRvWWVhckluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb1llYXJJbk1zRmlsdGVyOyIsImZ1bmN0aW9uIHplcm9maWxsKCBudW1iZXIsIGNvdW50ICkge1xuXHRudW1iZXIgPSAnJyArIG51bWJlcjtcblxuXHRpZiAoIG51bWJlci5sZW5ndGggPj0gY291bnQgKSB7XG5cdFx0cmV0dXJuIG51bWJlcjtcblx0fVxuXG5cdGNvbnN0IHplcm9zID0gbmV3IEFycmF5KCBjb3VudCAtIG51bWJlci5sZW5ndGggKS5maWxsKCAwICk7XG5cblx0cmV0dXJuIHplcm9zICsgbnVtYmVyO1xufVxuXG4vKipcbiAqIEBwYXJhbSBkYXRlICB7RGF0ZX1cbiAqIEBwYXJhbSBpc1V0Y1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKCBkYXRlLCBpc1V0YyA9IHRydWUgKSB7XG5cdGNvbnN0IG1vbnRoID0gaXNVdGMgPyBkYXRlLmdldFVUQ01vbnRoKCkgOiBkYXRlLmdldE1vbnRoKCk7XG5cdGNvbnN0IGRheSAgID0gaXNVdGMgPyBkYXRlLmdldFVUQ0RhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpO1xuXHRjb25zdCB5ZWFyICA9IGlzVXRjID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cdHJldHVybiBbXG5cdFx0eWVhcixcblx0XHR6ZXJvZmlsbCggbW9udGggKyAxLCAyICksXG5cdFx0emVyb2ZpbGwoIGRheSwgMiApLFxuXHRdLmpvaW4oICctJyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSBkYXRlICB7RGF0ZX1cbiAqIEBwYXJhbSBpc1V0Y1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9UaW1lKCBkYXRlLCBpc1V0YyA9IHRydWUgKSB7XG5cdGNvbnN0IGhvdXJzID0gaXNVdGMgPyBkYXRlLmdldFVUQ0hvdXJzKCkgOiBkYXRlLmdldEhvdXJzKCk7XG5cdGNvbnN0IG1pbnMgID0gaXNVdGMgPyBkYXRlLmdldFVUQ01pbnV0ZXMoKSA6IGRhdGUuZ2V0TWludXRlcygpO1xuXG5cdHJldHVybiBbXG5cdFx0emVyb2ZpbGwoIGhvdXJzLCAyICksXG5cdFx0emVyb2ZpbGwoIG1pbnMsIDIgKSxcblx0XS5qb2luKCAnOicgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZVRpbWUoIGRhdGUsIGlzVXRjID0gZmFsc2UgKSB7XG5cdHJldHVybiB0b0RhdGUoIGRhdGUsIGlzVXRjICkgKyAnVCcgKyB0b1RpbWUoIGRhdGUsIGlzVXRjICk7XG59XG5cbi8qKlxuICogQHBhcmFtICB0aW1lT3JEYXRlIHtTdHJpbmd8TnVtYmVyfVxuICogQHJldHVybiB7e3RpbWU6IG51bWJlciwgdHlwZTogc3RyaW5nfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVzdGFtcCggdGltZU9yRGF0ZSApIHtcblx0aWYgKCAhTnVtYmVyLmlzTmFOKCArdGltZU9yRGF0ZSApICkge1xuXHRcdHJldHVybiB7IHRpbWU6ICt0aW1lT3JEYXRlLCB0eXBlOiAnbnVtYmVyJyB9O1xuXHR9XG5cblx0dGltZU9yRGF0ZSA9IHRpbWVPckRhdGUudG9TdHJpbmcoKTtcblxuXHRjb25zdCBkYXRlUGFydHMgPSB0aW1lT3JEYXRlLnNwbGl0KCAnLScgKTtcblxuXHRpZiAoIGRhdGVQYXJ0cy5sZW5ndGggPiAxICkge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggdGltZU9yRGF0ZSApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpbWU6IGRhdGUuZ2V0VGltZSgpLFxuXHRcdFx0dHlwZTogJ2RhdGUnLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdCB0aW1lUGFydHMgPSB0aW1lT3JEYXRlLnNwbGl0KCAnOicgKTtcblx0Y29uc3QgY2FsbGJhY2tzID0gW1xuXHRcdERhdGUucHJvdG90eXBlLnNldEhvdXJzLFxuXHRcdERhdGUucHJvdG90eXBlLnNldE1pbnV0ZXMsXG5cdFx0RGF0ZS5wcm90b3R5cGUuc2V0U2Vjb25kcyxcblx0XTtcblxuXHRjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcblxuXHRmb3IgKCBjb25zdCBpbmRleCBpbiB0aW1lUGFydHMgKSB7XG5cdFx0aWYgKFxuXHRcdFx0IXRpbWVQYXJ0cy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSB8fFxuXHRcdFx0IWNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2FsbGJhY2tzWyBpbmRleCBdLmNhbGwoIHRpbWUsIHRpbWVQYXJ0c1sgaW5kZXggXSApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0aW1lOiB0aW1lLmdldFRpbWUoKSxcblx0XHR0eXBlOiAndGltZScsXG5cdH07XG59XG4iLCJpbXBvcnQgTGVuZ3RoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9MZW5ndGhGaWx0ZXInO1xuaW1wb3J0IEZhbGxCYWNrRmlsdGVyIGZyb20gJy4vZmlsdGVycy9GYWxsQmFja0ZpbHRlcic7XG5pbXBvcnQgVG9EYXRlRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RhdGVGaWx0ZXInO1xuaW1wb3J0IFRvVGltZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9UaW1lRmlsdGVyJztcbmltcG9ydCBUb0RhdGVUaW1lRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyJztcbmltcG9ydCBBZGRZZWFyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRZZWFyRmlsdGVyJztcbmltcG9ydCBBZGRNb250aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXInO1xuaW1wb3J0IEFkZERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkRGF5RmlsdGVyJztcbmltcG9ydCBBZGRIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRIb3VyRmlsdGVyJztcbmltcG9ydCBBZGRNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZE1pbkZpbHRlcic7XG5pbXBvcnQgVGltZXN0YW1wRmlsdGVyIGZyb20gJy4vZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXInO1xuaW1wb3J0IFNldEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldEhvdXJGaWx0ZXInO1xuaW1wb3J0IFNldE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0TWluRmlsdGVyJztcbmltcG9ydCBTZXREYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldERheUZpbHRlcic7XG5pbXBvcnQgU2V0WWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0WWVhckZpbHRlcic7XG5pbXBvcnQgU2V0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldE1vbnRoRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0SG91ckZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3REYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RNaW5GaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0WWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyJztcbmltcG9ydCBUb0RheUluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvRGF5SW5Nc0ZpbHRlcic7XG5pbXBvcnQgVG9Nb250aEluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvTW9udGhJbk1zRmlsdGVyJztcbmltcG9ydCBUb1llYXJJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub1llYXJJbk1zRmlsdGVyJztcbmltcG9ydCBUb0hvdXJJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0hvdXJJbk1zRmlsdGVyJztcbmltcG9ydCBUb01pbnV0ZUluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvTWludXRlSW5Nc0ZpbHRlcic7XG5pbXBvcnQgVG9XZWVrSW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9XZWVrSW5Nc0ZpbHRlcic7XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAdHlwZSB7QXJyYXk8RmlsdGVyPn1cbiAqL1xubGV0IGZpbHRlcnMgPSBbXTtcblxuY29uc3QgY29yZUZpbHRlckl0ZW1zID0gW1xuXHRTZXRZZWFyRmlsdGVyLFxuXHRTZXRNb250aEZpbHRlcixcblx0U2V0RGF5RmlsdGVyLFxuXHRTZXRIb3VyRmlsdGVyLFxuXHRTZXRNaW5GaWx0ZXIsXG5cdFN1YnRyYWN0WWVhckZpbHRlcixcblx0U3VidHJhY3RNb250aEZpbHRlcixcblx0U3VidHJhY3REYXlGaWx0ZXIsXG5cdFN1YnRyYWN0SG91ckZpbHRlcixcblx0U3VidHJhY3RNaW5GaWx0ZXIsXG5cdEFkZFllYXJGaWx0ZXIsXG5cdEFkZE1vbnRoRmlsdGVyLFxuXHRBZGREYXlGaWx0ZXIsXG5cdEFkZEhvdXJGaWx0ZXIsXG5cdEFkZE1pbkZpbHRlcixcblx0TGVuZ3RoRmlsdGVyLFxuXHRGYWxsQmFja0ZpbHRlcixcblx0VG9EYXRlRmlsdGVyLFxuXHRUb1RpbWVGaWx0ZXIsXG5cdFRvRGF0ZVRpbWVGaWx0ZXIsXG5cdFRpbWVzdGFtcEZpbHRlcixcblx0VG9EYXlJbk1zRmlsdGVyLFxuXHRUb01vbnRoSW5Nc0ZpbHRlcixcblx0VG9ZZWFySW5Nc0ZpbHRlcixcblx0VG9Ib3VySW5Nc0ZpbHRlcixcblx0VG9NaW51dGVJbk1zRmlsdGVyLFxuXHRUb1dlZWtJbk1zRmlsdGVyLFxuXTtcblxuY29uc3QgZ2V0RmlsdGVySXRlbXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuZmlsdGVycycsXG5cdFsgLi4uY29yZUZpbHRlckl0ZW1zIF0sXG4pO1xubGV0IHJlc3BvbnNlICAgICAgICAgPSBbXTtcblxuZnVuY3Rpb24gcHVzaEZpbHRlciggbmFtZSwgcHJvcHMgPSAnJyApIHtcblx0aWYgKCAhZmlsdGVycy5sZW5ndGggKSB7XG5cdFx0ZmlsdGVycyA9IGdldEZpbHRlckl0ZW1zKCk7XG5cdH1cblxuXHRsZXQgZmlsdGVyO1xuXG5cdGZvciAoIGxldCBjdXJyZW50IG9mIGZpbHRlcnMgKSB7XG5cdFx0Y29uc3QgRmlsdGVySXRlbSA9IGN1cnJlbnQ7XG5cdFx0Y3VycmVudCAgICAgICAgICA9IG5ldyBGaWx0ZXJJdGVtKCk7XG5cblx0XHRpZiAoIG5hbWUgPT09IGN1cnJlbnQuZ2V0U2x1ZygpICkge1xuXHRcdFx0Y3VycmVudC5pc0NvcmVGaWx0ZXIgPSBjb3JlRmlsdGVySXRlbXMuaW5jbHVkZXMoIEZpbHRlckl0ZW0gKTtcblx0XHRcdGZpbHRlciA9IGN1cnJlbnQ7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIWZpbHRlciApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0cHJvcHMgPSBwcm9wcy5zcGxpdCggJywnICkubWFwKFxuXHRcdGl0ZW0gPT4gaXRlbS50cmltKCksXG5cdCk7XG5cblx0ZmlsdGVyLnNldFByb3BzKCBwcm9wcyApO1xuXHRyZXNwb25zZS5wdXNoKCBmaWx0ZXIgKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsdGVycyggZmlsdGVyc0xpc3QgKSB7XG5cdGlmICggbnVsbCA9PT0gZmlsdGVyc0xpc3QgfHwgIWZpbHRlcnNMaXN0Py5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBmaWx0ZXJOYW1lIG9mIGZpbHRlcnNMaXN0ICkge1xuXHRcdGNvbnN0IG1hdGNoZXMgPSBmaWx0ZXJOYW1lLm1hdGNoKCAvXihcXHcrKVxcKChbXigpXSspXFwpLyApO1xuXG5cdFx0aWYgKCBudWxsID09PSBtYXRjaGVzICkge1xuXHRcdFx0cHVzaEZpbHRlciggZmlsdGVyTmFtZSApO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwdXNoRmlsdGVyKCBtYXRjaGVzWyAxIF0sIG1hdGNoZXNbIDIgXSApO1xuXHR9XG5cblx0Y29uc3QgdGVtcFJlc3BvbnNlID0gWyAuLi5yZXNwb25zZSBdO1xuXHRyZXNwb25zZSAgICAgICAgICAgPSBbXTtcblxuXHRyZXR1cm4gdGVtcFJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGaWx0ZXJzO1xuIiwiaW1wb3J0IENhbGN1bGF0ZWRGb3JtdWxhIGZyb20gJy4vQ2FsY3VsYXRlZEZvcm11bGEnO1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBnZXRGaWx0ZXJzIGZyb20gJy4vZ2V0RmlsdGVycyc7XG5pbXBvcnQgYXBwbHlGaWx0ZXJzIGZyb20gJy4vYXBwbHlGaWx0ZXJzJztcbmltcG9ydCB7IHRvRGF0ZSwgdG9EYXRlVGltZSwgdG9UaW1lLCBnZXRUaW1lc3RhbXAgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0ZpbHRlcic7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cblx0KSxcblx0RmlsdGVyLFxuXHRDYWxjdWxhdGVkRm9ybXVsYSxcblx0QmFzZUludGVybmFsTWFjcm8sXG59O1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPz8ge31cblx0KSxcblx0Z2V0RmlsdGVycyxcblx0YXBwbHlGaWx0ZXJzLFxuXHR0b0RhdGUsXG5cdHRvRGF0ZVRpbWUsXG5cdHRvVGltZSxcblx0Z2V0VGltZXN0YW1wLFxufTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyQ29uc3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25zdCA/PyB7fVxuXHQpLFxuXHQuLi5Db25zdGFudHMsXG59OyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NDc1ODAvaG93LXRvLWRldGVjdC1zYWZhcmktY2hyb21lLWllLWZpcmVmb3gtYW5kLW9wZXJhLWJyb3dzZXJcblxuY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCJcbmNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdCggdXNlckFnZW50ICkgfHxcblx0L2NvbnN0cnVjdG9yL2kudGVzdCggd2luZG93LkhUTUxFbGVtZW50ICkgfHxcblx0KFxuXHRcdCggcCApID0+IHtcblx0XHRcdHJldHVybiAnW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dJyA9PT0gcC50b1N0cmluZygpO1xuXHRcdH1cblx0KSggIXdpbmRvdy5zYWZhcmkgfHwgKFxuXHRcdHR5cGVvZiBzYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvblxuXHQpICk7XG5cbmNvbnN0IGVudmlyb25tZW50ID0ge1xuXHRzYWZhcmk6IGlzU2FmYXJpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL2F0dHJzL0Jhc2VIdG1sQXR0cic7XG5pbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL2F0dHJzL01heEZpbGVzSHRtbEF0dHInO1xuaW1wb3J0IE1heEZpbGVTaXplSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyJztcbmltcG9ydCBSZW1haW5pbmdDYWxjQXR0ciBmcm9tICcuL2F0dHJzL1JlbWFpbmluZ0NhbGNBdHRyJztcbmltcG9ydCBGaWxlRXh0ZW5zaW9uSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9GaWxlRXh0ZW5zaW9uSHRtbEF0dHInO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAcGFyYW0gIGNhbGxiYWNrcyB7RnVuY3Rpb25bXX1cbiAqIEByZXR1cm4ge1Byb21pc2U8Kj59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFsbFJlamVjdGVkKCBjYWxsYmFja3MgKSB7XG5cdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoXG5cdFx0Y2FsbGJhY2tzLm1hcCggY3VycmVudCA9PiBuZXcgUHJvbWlzZSggY3VycmVudCApICksXG5cdCk7XG5cblx0aWYgKCB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmRldm1vZGUgKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXHRcdGNvbnNvbGUuZ3JvdXAoICdhbGxSZWplY3RlZCcgKTtcblx0XHRjb25zb2xlLmluZm8oIC4uLnJlc3VsdHMgKTtcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cdH1cblxuXHRjb25zdCBpbnZhbGlkID0gcmVzdWx0cy5maWx0ZXIoXG5cdFx0KCBlcnJvciApID0+ICdyZWplY3RlZCcgPT09IGVycm9yLnN0YXR1cyxcblx0KTtcblxuXHRyZXR1cm4gaW52YWxpZC5tYXAoICggeyByZWFzb24sIHZhbHVlIH0gKSA9PiB7XG5cdFx0cmV0dXJuIHJlYXNvbj8ubGVuZ3RoID8gcmVhc29uWyAwIF0gOiAoXG5cdFx0XHRyZWFzb24gPz8gdmFsdWVcblx0XHQpO1xuXHR9ICk7XG59XG5cbmZ1bmN0aW9uIGdldExhbmd1YWdlKCkge1xuXHRjb25zdCBsYW5nID0gd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlcz8ubGVuZ3RoXG5cdCAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWyAwIF1cblx0ICAgICAgICAgICAgIDogd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlO1xuXG5cdHJldHVybiBsYW5nID8/ICdlbi1VUyc7XG59XG5cbmNvbnN0IGdldElucHV0SHRtbEF0dHIgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuaW5wdXQuaHRtbC5hdHRycycsXG5cdFtcblx0XHQnbWluJyxcblx0XHQnbWF4Jyxcblx0XHQnbWluTGVuZ3RoJyxcblx0XHQnbWF4TGVuZ3RoJyxcblx0XHRNYXhGaWxlc0h0bWxBdHRyLFxuXHRcdE1heEZpbGVTaXplSHRtbEF0dHIsXG5cdFx0UmVtYWluaW5nQ2FsY0F0dHIsXG5cdFx0RmlsZUV4dGVuc2lvbkh0bWxBdHRyLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7QmFzZUh0bWxBdHRyW119XG4gKi9cbmxldCBpbnB1dEh0bWxBdHRycyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQcmVwYXJlZElucHV0SHRtbEF0dHJzKCkge1xuXHRpZiAoICFpbnB1dEh0bWxBdHRycy5sZW5ndGggKSB7XG5cdFx0aW5wdXRIdG1sQXR0cnMgPSBnZXRJbnB1dEh0bWxBdHRyKCk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5pbnB1dEh0bWxBdHRycyBdO1xufVxuXG4vKipcbiAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERlZmF1bHRBdHRyQnlOYW1lKCBuYW1lICkge1xuXHRjb25zdCBhdHRyICAgID0gbmV3IEJhc2VIdG1sQXR0cigpO1xuXHRhdHRyLmF0dHJOYW1lID0gbmFtZTtcblxuXHRyZXR1cm4gYXR0cjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cbiAqL1xuZnVuY3Rpb24gc2V0QXR0cnMoIGlucHV0ICkge1xuXHRmb3IgKCBjb25zdCBpbnB1dEh0bWxBdHRyIG9mIGdldFByZXBhcmVkSW5wdXRIdG1sQXR0cnMoKSApIHtcblx0XHRsZXQgY3VycmVudDtcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgaW5wdXRIdG1sQXR0ciApIHtcblx0XHRcdGN1cnJlbnQgPSBnZXREZWZhdWx0QXR0ckJ5TmFtZSggaW5wdXRIdG1sQXR0ciApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBuZXcgaW5wdXRIdG1sQXR0cigpO1xuXHRcdH1cblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aW5wdXQuYXR0cnNbIGN1cnJlbnQuYXR0ck5hbWUgXSA9IGN1cnJlbnQ7XG5cblx0XHRjdXJyZW50LnNldElucHV0KCBpbnB1dCApO1xuXHRcdGN1cnJlbnQub2JzZXJ2ZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlc2V0SW5wdXRIdG1sQXR0cnNSZWdpc3RyeSgpIHtcblx0aW5wdXRIdG1sQXR0cnMgPSBbXTtcbn1cblxuZnVuY3Rpb24gdG9IVE1MKCB0ZXh0ICkge1xuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHRleHQudHJpbSgpO1xuXG5cdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KCB2YWx1ZSApIHtcblx0aWYgKCAnYm9vbGVhbicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gIXZhbHVlO1xuXHR9XG5cblx0aWYgKCBudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICYmICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiAhT2JqZWN0LmtleXMoIHZhbHVlICk/Lmxlbmd0aDtcblx0fVxuXG5cdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gMCA9PT0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gIXZhbHVlPy5sZW5ndGg7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBpc1Zpc2libGUoIG5vZGUgKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZT8uaXNDb25uZWN0ZWQgJiYgbnVsbCAhPT0gbm9kZT8ub2Zmc2V0UGFyZW50XG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFRvcCggbm9kZSApIHtcblx0Y29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0Y29uc3QgbWF5YmVXaW5kb3cgPSBnZXRTY3JvbGxQYXJlbnQoIG5vZGUgKTtcblxuXHRyZXR1cm4gcmVjdD8udG9wICsgKFxuXHRcdG1heWJlV2luZG93Py5zY3JvbGxZID8/IDBcblx0KTtcbn1cblxuY29uc3QgZ2V0Tm9kZSA9IGN1cnJlbnQgPT4gKFxuXHRjdXJyZW50LnNjcm9sbEhlaWdodCA+IGN1cnJlbnQuY2xpZW50SGVpZ2h0ID8gY3VycmVudCA6IGZhbHNlXG4pO1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoIG5vZGUgKSB7XG5cblx0Ly8gamV0LXBvcHVwIGNvbXBhdGliaWxpdHlcblx0bGV0IGNvbnRhaW5lciA9IG5vZGUuY2xvc2VzdCggJy5qZXQtcG9wdXBfX2NvbnRhaW5lci1pbm5lcicgKTtcblxuXHRpZiAoIGNvbnRhaW5lciApIHtcblx0XHRyZXR1cm4gZ2V0Tm9kZSggY29udGFpbmVyICk7XG5cdH1cblxuXHQvLyBlbGVtZW50b3ItcHJvIHBvcHVwIGNvbXBhdGliaWxpdHlcblx0Y29udGFpbmVyID0gbm9kZS5jbG9zZXN0KCAnLmVsZW1lbnRvci1wb3B1cC1tb2RhbCAuZGlhbG9nLW1lc3NhZ2UnICk7XG5cblx0aWYgKCBjb250YWluZXIgKSB7XG5cdFx0cmV0dXJuIGdldE5vZGUoIGNvbnRhaW5lciApO1xuXHR9XG5cblx0cmV0dXJuIHdpbmRvdztcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzIHtJbnB1dERhdGFbXX1cbiAqL1xuZnVuY3Rpb24gZm9jdXNPbkludmFsaWRJbnB1dCggaW5wdXRzICkge1xuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0aWYgKCBpbnB1dC5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhaW5wdXQucmVwb3J0aW5nLmhhc0F1dG9TY3JvbGwoKSAmJiBpbnB1dC5vbkZvY3VzKCk7XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlVc2VyQWdlbnRzKCkge1xuXHRmb3IgKCBjb25zdCBbIG5hbWUsIGlzQWN0aXZlIF0gb2YgT2JqZWN0LmVudHJpZXMoIGVudmlyb25tZW50ICkgKSB7XG5cdFx0aWYgKCAhaXNBY3RpdmUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCBgamV0LS11YS0keyBuYW1lIH1gICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNVQSggYnJvd3NlciApIHtcblx0cmV0dXJuIGVudmlyb25tZW50Py5bIGJyb3dzZXIgXTtcbn1cblxuZXhwb3J0IHtcblx0YWxsUmVqZWN0ZWQsXG5cdGdldExhbmd1YWdlLFxuXHRzZXRBdHRycyxcblx0dG9IVE1MLFxuXHRpc0VtcHR5LFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdGlzVmlzaWJsZSxcblx0Z2V0U2Nyb2xsUGFyZW50LFxuXHRpc1VBLFxuXHRhcHBseVVzZXJBZ2VudHMsXG5cdHJlc2V0SW5wdXRIdG1sQXR0cnNSZWdpc3RyeSxcbn07XG4iLCJpbXBvcnQgQ2FsY3VsYXRlZEZvcm11bGEgZnJvbSAnLi4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEnO1xuaW1wb3J0IGdldEZpbHRlcnMgZnJvbSAnLi4vY2FsYy5tb2R1bGUvZ2V0RmlsdGVycyc7XG5pbXBvcnQgYXBwbHlWYWx1ZUZpbHRlcnMgZnJvbSAnLi4vY2FsYy5tb2R1bGUvYXBwbHlGaWx0ZXJzJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi9lc2NhcGVIdG1sJztcbmltcG9ydCBzYW5pdGl6ZUh0bWwgZnJvbSAnLi9zYW5pdGl6ZUh0bWwnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9ICdvcHRpb24tbGFiZWwnO1xuXG5mdW5jdGlvbiBnZXRJbnB1dE9wdGlvbkxhYmVsKG5vZGUpIHtcblxuXHRpZiAoIW5vZGUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBBcnJheS5mcm9tKG5vZGUuc2VsZWN0ZWRPcHRpb25zIHx8IFtdKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRPcHRpb25zXG5cdFx0XHQubWFwKChvcHRpb24pID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblx0aWYgKFxuXHRcdChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSAmJlxuXHRcdCFub2RlLmNoZWNrZWRcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmIChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBub2RlLmNsb3Nlc3QoJ2xhYmVsJyk7XG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblx0XHRyZXR1cm4gU3RyaW5nKFxuXHRcdFx0dGV4dE5vZGU/LnRleHRDb250ZW50IHx8IGxhYmVsLnRleHRDb250ZW50IHx8IG5vZGUudmFsdWUgfHwgJydcblx0XHQpLnRyaW0oKTtcblx0fVxuXHRyZXR1cm4gJyc7XG5cbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRPcHRpb25MYWJlbHMoaW5wdXQpIHtcblxuXHRjb25zdCBub2RlcyA9IEFycmF5LmZyb20oaW5wdXQubm9kZXMgfHwgW10pO1xuXHRyZXR1cm4gbm9kZXNcblx0XHQubWFwKGdldElucHV0T3B0aW9uTGFiZWwpXG5cdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdC5qb2luKCcsICcpO1xuXG59XG5cbmZ1bmN0aW9uIHVud3JhcFNhZmVIdG1sKCB2YWx1ZSApIHtcblx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgU2FmZUh0bWwgPyB2YWx1ZS50b1N0cmluZygpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIENhbGN1bGF0ZWRIdG1sU3RyaW5nKFxuXHRyb290LFxuXHR7IFxuXHRcdHdpdGhQcmVmaXggPSB0cnVlLCBcblx0XHRtYWNyb0hvc3QgPSBmYWxzZSwgXG5cdFx0bWFjcm9Gb3JtYXQgPSAnJyxcblx0XHQuLi5vcHRpb25zIFxuXHR9ID0ge30sXG4pIHtcblx0Q2FsY3VsYXRlZEZvcm11bGEuY2FsbCggdGhpcywgcm9vdCwgb3B0aW9ucyApO1xuXG5cdGlmICggd2l0aFByZWZpeCApIHtcblx0XHR0aGlzLnJlZ2V4cCA9IC9KRkJfRklFTEQ6OiguKykvZ2k7XG5cdH1cblxuXHR0aGlzLm1hY3JvSG9zdCA9IG1hY3JvSG9zdCB8fCBmYWxzZTtcblx0dGhpcy5tYWNyb0Zvcm1hdCA9IG1hY3JvRm9ybWF0IHx8ICcnO1xuXG5cdHRoaXMucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCAkZmllbGROb2RlID0galF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICk7XG5cdFx0Y29uc3QgJG1hY3JvSG9zdCA9IHRoaXMubWFjcm9Ib3N0ID8galF1ZXJ5KCB0aGlzLm1hY3JvSG9zdCApIDogZmFsc2U7XG5cblx0XHRsZXQgZmllbGRWYWx1ZSA9IGFwcGx5RmlsdGVycyhcblx0XHRcdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHQkZmllbGROb2RlLFxuXHRcdFx0JG1hY3JvSG9zdCxcblx0XHRcdHRoaXMubWFjcm9Gb3JtYXQsXG5cdFx0KTtcblxuXHRcdGZpZWxkVmFsdWUgPSB3cD8uaG9va3M/LmFwcGx5RmlsdGVyc1xuXHRcdFx0PyB3cC5ob29rcy5hcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHRcdFx0XHRmaWVsZFZhbHVlLFxuXHRcdFx0XHQkZmllbGROb2RlLFxuXHRcdFx0XHQkbWFjcm9Ib3N0LFxuXHRcdFx0XHR0aGlzLm1hY3JvRm9ybWF0LFxuXHRcdFx0KVxuXHRcdFx0OiBmaWVsZFZhbHVlO1xuXG5cdFx0aWYgKGZhbHNlICE9PSBmaWVsZFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFNhZmVIdG1sKCBmaWVsZFZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKE1BQ1JPX0ZPUk1BVF9PUFRJT05fTEFCRUwgPT09IHRoaXMubWFjcm9Gb3JtYXQpIHtcblx0XHRcdHJldHVybiBnZXRJbnB1dE9wdGlvbkxhYmVscyhpbnB1dCkgfHwgaW5wdXQudmFsdWUuY3VycmVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQudmFsdWUuY3VycmVudDtcblx0fS5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5vbk1pc3NpbmdQYXJ0ID0gZnVuY3Rpb24gKCkge307XG59XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENhbGN1bGF0ZWRGb3JtdWxhLnByb3RvdHlwZSApO1xuXG5DYWxjdWxhdGVkSHRtbFN0cmluZy5wcm90b3R5cGUub2JzZXJ2ZU1hY3JvID0gZnVuY3Rpb24gKCBjdXJyZW50ICkge1xuXHRpZiAoIG51bGwgPT09IHRoaXMuZm9ybXVsYSApIHtcblx0XHR0aGlzLmZvcm11bGEgPSBjdXJyZW50O1xuXHR9XG5cblx0Y29uc3QgWyBuYW1lLCAuLi5maWx0ZXJzIF0gPSBjdXJyZW50LnNwbGl0KCAnfCcgKTtcblx0Y29uc3QgcGFyc2VkTmFtZSAgICAgICAgICAgPSBuYW1lLm1hdGNoKCAvW1xcd1xcLTpdKy9nICk7XG5cblx0aWYgKCAhIHBhcnNlZE5hbWUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgWyBmaWVsZE5hbWUsIC4uLnBhcmFtcyBdID0gcGFyc2VkTmFtZTtcblx0Y29uc3QgZXhpc3ROb2RlICAgICAgICAgICAgICAgID0gdGhpcy5pc0ZpZWxkTm9kZUV4aXN0cyggZmllbGROYW1lICk7XG5cblx0aWYgKCB1bmRlZmluZWQgPT09IGV4aXN0Tm9kZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCByZWxhdGVkSW5wdXQgPSBmaWVsZE5hbWUgIT09ICd0aGlzJ1xuXHRcdD8gdGhpcy5yb290LmdldElucHV0KCBmaWVsZE5hbWUgKVxuXHRcdDogdGhpcy5pbnB1dDtcblxuXHRpZiAoICEgcmVsYXRlZElucHV0ICYmICEgZmllbGROYW1lLmluY2x1ZGVzKCAnOjonICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgZmlsdGVyc0xpc3QgPSBnZXRGaWx0ZXJzKCBmaWx0ZXJzICk7XG5cblx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRyZXR1cm4gQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlLm9ic2VydmVNYWNyby5jYWxsKCB0aGlzLCBjdXJyZW50ICk7XG5cdH1cblxuXHRpZiAoICEgdGhpcy5yZWxhdGVkLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSApICkge1xuXHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xuXHRcdHRoaXMud2F0Y2hlcnMucHVzaChcblx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdCk7XG5cdH1cblxuXHRpZiAoICEgcGFyYW1zPy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGlmICggJ3JlcGVhdGVyJyA9PT0gcmVsYXRlZElucHV0LmlucHV0VHlwZSAmJiBmaWx0ZXJzTGlzdD8ubGVuZ3RoICkge1xuXHRcdFx0XHQvLyBQcmVzZXJ2ZSByZXBlYXRlciBtYWNybyBzaWRlIGVmZmVjdHMgbGlrZSBpbm5lciBpbnB1dCBjaGFuZ2UgYmluZGluZy5cblx0XHRcdFx0Y29uc3QgcmVsYXRlZFZhbHVlID0gdW53cmFwU2FmZUh0bWwoIHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSApO1xuXHRcdFx0XHRyZWxhdGVkSW5wdXQucmVRdWVyeVZhbHVlPy4oKTtcblxuXHRcdFx0XHRyZXR1cm4gYXBwbHlWYWx1ZUZpbHRlcnMoXG5cdFx0XHRcdFx0cmVsYXRlZFZhbHVlLFxuXHRcdFx0XHRcdGZpbHRlcnNMaXN0LFxuXHRcdFx0XHRcdHsgcmF3UmVwZWF0ZXJWYWx1ZTogcmVsYXRlZElucHV0LnZhbHVlLmN1cnJlbnQgfSxcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnJlbGF0ZWRDYWxsYmFjayggcmVsYXRlZElucHV0ICk7XG5cblx0XHRcdGlmICggdmFsdWUgaW5zdGFuY2VvZiBTYWZlSHRtbCAmJiAhIGZpbHRlcnNMaXN0Py5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZmlsdGVycyBnZXQgdGhlIG9yaWdpbmFsIHZhbHVlIHR5cGUgKG51bGwsIGZhbHNlLCBhcnJheS4uLiksIG9ubHkgdGhlXG5cdFx0XHQvLyBTYWZlSHRtbCBtYXJrZXIgaXMgZHJvcHBlZFxuXHRcdFx0cmV0dXJuIGFwcGx5VmFsdWVGaWx0ZXJzKCB1bndyYXBTYWZlSHRtbCggdmFsdWUgKSwgZmlsdGVyc0xpc3QgKTtcblx0XHR9O1xuXHR9XG5cblx0Y29uc3QgWyBhdHRyTmFtZSBdID0gcGFyYW1zO1xuXG5cdGlmICggISByZWxhdGVkSW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoIGF0dHJOYW1lICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y29uc3QgaHRtbEF0dHIgPSByZWxhdGVkSW5wdXQuYXR0cnNbIGF0dHJOYW1lIF07XG5cblx0aWYgKCAhIHRoaXMucmVsYXRlZEF0dHJzLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICkgKSB7XG5cdFx0dGhpcy5yZWxhdGVkQXR0cnMucHVzaCggcmVsYXRlZElucHV0Lm5hbWUgKyBhdHRyTmFtZSApO1xuXHRcdHRoaXMud2F0Y2hlcnMucHVzaChcblx0XHRcdGh0bWxBdHRyLnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnNldFJlc3VsdCgpICksXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoKSA9PiBhcHBseVZhbHVlRmlsdGVycyggaHRtbEF0dHIudmFsdWUuY3VycmVudCwgZmlsdGVyc0xpc3QgKTtcbn07XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5tYXBQYXJ0cyA9IGZ1bmN0aW9uICggbWFwVmFsdWUgKSB7XG5cdGlmICggISB0aGlzLnBhcnRzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMucGFydHNcblx0XHQubWFwKCAoIGN1cnJlbnQgKSA9PiB7XG5cdFx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjdXJyZW50ICkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gY3VycmVudCgpO1xuXG5cdFx0XHRpZiAoIG51bGwgPT09IHJlc3VsdCB8fCB1bmRlZmluZWQgPT09IHJlc3VsdCB8fCAnJyA9PT0gcmVzdWx0ICkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtYXBWYWx1ZSggcmVzdWx0ICk7XG5cdFx0fSApXG5cdFx0LmpvaW4oICcnICk7XG59O1xuXG4vKipcbiAqIFBsYWluIHN0cmluZywgZm9yIGFzc2lnbmluZyB0byBlbGVtZW50IHByb3BlcnRpZXMgKGhyZWYsIHZhbHVlLCB0aXRsZS4uLiksXG4gKiB3aGVyZSBub3RoaW5nIGlzIHBhcnNlZCBhcyBIVE1MLlxuICovXG5DYWxjdWxhdGVkSHRtbFN0cmluZy5wcm90b3R5cGUuY2FsY3VsYXRlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5tYXBQYXJ0cyggKCByZXN1bHQgKSA9PiBTdHJpbmcoIHJlc3VsdCApICk7XG59O1xuXG4vKipcbiAqIEZvciBgaW5uZXJIVE1MYCBzaW5rcy4gRmllbGQgdmFsdWVzIGFyZSB1c2VyLWNvbnRyb2xsZWQgKHR5cGVkIHRleHQsXG4gKiBxdWVyeV92YXIgcHJlc2V0cywgLi4uKSwgc28gdGhleSBhcmUgc2FuaXRpemVkOyBtYXJrdXAgYWxyZWFkeSBidWlsdCBieVxuICogdHJ1c3RlZCBtYWNybyBoYW5kbGVycyAoU2FmZUh0bWwpIGFuZCB0aGUgYXV0aG9yJ3Mgc3RhdGljIHRleHQgYXJlIGtlcHQuXG4gKi9cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5jYWxjdWxhdGVIdG1sID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5tYXBQYXJ0cyhcblx0XHQoIHJlc3VsdCApID0+IHJlc3VsdCBpbnN0YW5jZW9mIFNhZmVIdG1sXG5cdFx0XHQ/IHJlc3VsdC50b1N0cmluZygpXG5cdFx0XHQ6IHNhbml0aXplSHRtbCggcmVzdWx0ICksXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkSHRtbFN0cmluZztcbiIsImNvbnN0IEhUTUxfRVNDQVBFX01BUCA9IHtcblx0JyYnOiAnJmFtcDsnLFxuXHQnPCc6ICcmbHQ7Jyxcblx0Jz4nOiAnJmd0OycsXG5cdCdcIic6ICcmcXVvdDsnLFxuXHQnXFwnJzogJyYjMDM5OycsXG59O1xuXG4vKipcbiAqIE1hcmtzIGEgc3RyaW5nIHRoYXQgd2FzIGFscmVhZHkgYnVpbHQgZnJvbSB0cnVzdGVkIG1hcmt1cCB3aXRoIGl0c1xuICogZHluYW1pYyBwYXJ0cyBlc2NhcGVkIChlLmcuIHRoZSByZXBlYXRlciBtYWNybyksIHNvIGl0IG11c3Qgbm90IGJlXG4gKiBlc2NhcGVkIGEgc2Vjb25kIHRpbWUuXG4gKi9cbmNsYXNzIFNhZmVIdG1sIHtcblx0Y29uc3RydWN0b3IoIGh0bWwgKSB7XG5cdFx0dGhpcy5odG1sID0gU3RyaW5nKCBodG1sICk7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5odG1sO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoIHZhbHVlICkge1xuXHRyZXR1cm4gU3RyaW5nKCB2YWx1ZSApLnJlcGxhY2UoIC9bJjw+XCInXS9nLCBjaGFyID0+IEhUTUxfRVNDQVBFX01BUFsgY2hhciBdICk7XG59XG5cbmV4cG9ydCB7IFNhZmVIdG1sLCBlc2NhcGVIdG1sIH07XG4iLCJmdW5jdGlvbiogaXRlcmF0ZUNvbW1lbnRzKFxuXHRyb290Tm9kZSwgYWNjZXB0Q2FsbGJhY2sgPSAoKSA9PiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgKSB7XG5cdC8vIEZvdXJ0aCBhcmd1bWVudCwgd2hpY2ggaXMgYWN0dWFsbHkgb2Jzb2xldGUgYWNjb3JkaW5nIHRvIHRoZVxuXHQvLyBET000IHN0YW5kYXJkLCBpcyByZXF1aXJlZCBpbiBJRSAxMVxuXHRjb25zdCBpdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihcblx0XHRyb290Tm9kZSxcblx0XHROb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCxcblx0XHR7XG5cdFx0XHRhY2NlcHROb2RlOiBhY2NlcHRDYWxsYmFjayxcblx0XHR9LFxuXHQpO1xuXHRsZXQgY3VyTm9kZTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cblx0d2hpbGUgKCBjdXJOb2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSApIHtcblx0XHRjdXJOb2RlLm5vZGVWYWx1ZSA9IGN1ck5vZGUubm9kZVZhbHVlLnRyaW0oKTtcblxuXHRcdHlpZWxkIGN1ck5vZGU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0ZUNvbW1lbnRzOyIsImltcG9ydCBpdGVyYXRlQ29tbWVudHMgZnJvbSAnLi9pdGVyYXRlQ29tbWVudHMnO1xuXG5mdW5jdGlvbiogaXRlcmF0ZUpmYkNvbW1lbnRzKCByb290Tm9kZSApIHtcblx0Y29uc3QgYWNjZXB0Q2FsbGJhY2sgPSBub2RlID0+IHtcblx0XHRyZXR1cm4gIW5vZGUuamZiT2JzZXJ2ZWQgJiYgbm9kZS50ZXh0Q29udGVudC5pbmNsdWRlcyggJ0pGQl9GSUVMRDo6JyApO1xuXHR9O1xuXG5cdHlpZWxkKiBpdGVyYXRlQ29tbWVudHMoIHJvb3ROb2RlLCBhY2NlcHRDYWxsYmFjayApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRlSmZiQ29tbWVudHM7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xuXG5jb25zdCB7XG5cdCAgICAgIF9fLFxuXHQgICAgICBzcHJpbnRmLFxuICAgICAgfSA9IHdwLmkxOG47XG5cbi8qKlxuICogQHBhcmFtIGNvbW1lbnRcbiAqIEBwYXJhbSByb290ICAgIHtPYnNlcnZhYmxlfVxuICovXG5mdW5jdGlvbiBvYnNlcnZlQ29tbWVudCggY29tbWVudCwgcm9vdCApIHtcblx0aWYgKCBjb21tZW50LmpmYk9ic2VydmVkICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBjb21tZW50LnRleHRDb250ZW50ICk7XG5cblx0aWYgKCAhZm9ybXVsYS5wYXJ0cz8ubGVuZ3RoICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBodG1sIG1hY3JvJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBjb21tZW50IHRleHRcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRjb21tZW50LnRleHRDb250ZW50LFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXG5cdGNvbnN0IHByZXZTaWJsaW5nID0gY29tbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcblx0XHR3cmFwcGVyLFxuXHRcdGNvbW1lbnQsXG5cdCk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0cHJldlNpYmxpbmcuaW5uZXJIVE1MID0gZm9ybXVsYS5jYWxjdWxhdGVIdG1sKCk7XG5cdH07XG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdGNvbW1lbnQuamZiT2JzZXJ2ZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlQ29tbWVudDsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbi8qKlxuICogQHBhcmFtIG5vZGUgICAgIHtOb2RlfVxuICogQHBhcmFtIGF0dHJOYW1lIHtzdHJpbmd9XG4gKiBAcGFyYW0gcm9vdCAgICAge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIG9ic2VydmVNYWNyb0F0dHIoIG5vZGUsIGF0dHJOYW1lLCByb290ICkge1xuXHRjb25zdCBub2RlVmFsdWUgPSBub2RlWyBhdHRyTmFtZSBdID8/ICcnO1xuXG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiBub2RlVmFsdWUgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBtYWNyb1ZhbHVlID0gJ3BsYWNlaG9sZGVyJyA9PT0gYXR0ck5hbWUgJiYgL148IS0tKEpGQl9GSUVMRDo6LispLS0+JC8udGVzdCggbm9kZVZhbHVlIClcblx0XHQ/IG5vZGVWYWx1ZS5zbGljZSggNCwgLTMgKVxuXHRcdDogbm9kZVZhbHVlO1xuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBtYWNyb1ZhbHVlICk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0bm9kZVsgYXR0ck5hbWUgXSA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XG5cdH07XG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVNYWNyb0F0dHI7XG4iLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZX1cbiAqIEBwYXJhbSByb290IHtPYnNlcnZhYmxlfVxuICovXG5mdW5jdGlvbiBvYnNlcnZlTm9kZSggbm9kZSwgcm9vdCApIHtcblx0aWYgKCAhbm9kZS5fX2pmYk1hY3JvVGVtcGxhdGUgKSB7XG5cdFx0bm9kZS5fX2pmYk1hY3JvVGVtcGxhdGUgPSBub2RlLmlubmVySFRNTDtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QsIHtcblx0XHR3aXRoUHJlZml4OiBmYWxzZSxcblx0XHRtYWNyb0hvc3Q6IG5vZGUsXG5cdFx0bWFjcm9Gb3JtYXQ6IG5vZGUuZGF0YXNldC5qZmJNYWNyb0Zvcm1hdCB8fCAnJyxcblx0fSApO1xuXHRmb3JtdWxhLm9ic2VydmUoIGAlJHsgbm9kZS5kYXRhc2V0LmpmYk1hY3JvIH0lYCApO1xuXG5cdGlmICggIWZvcm11bGEucGFydHM/Lmxlbmd0aCApIHtcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdFx0Y29uc29sZS5ncm91cChcblx0XHRcdF9fKFxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gbWFjcm9cblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRub2RlLmRhdGFzZXQuamZiTWFjcm8sXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZS5kYXRhc2V0LmpmYk9ic2VydmVkID0gMTtcblxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRsZXQgaHRtbCA9IFN0cmluZyggZm9ybXVsYS5jYWxjdWxhdGVIdG1sKCkgKTtcblxuXHRcdGNvbnN0IGhhc1RleHRhcmVhID0gbm9kZS5xdWVyeVNlbGVjdG9yPy4oICd0ZXh0YXJlYScgKTtcblxuXHRcdGlmICggaGFzVGV4dGFyZWEgKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKCAvXFxyXFxufFxccnxcXG4vZywgJzxicj4nICk7XG5cdFx0fVxuXG5cdFx0bm9kZS5pbm5lckhUTUwgPSBodG1sO1xuXHR9O1xuXG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVOb2RlO1xuIiwiZnVuY3Rpb24gcXVlcnlCeUF0dHJWYWx1ZSggcm9vdE5vZGUsIHZhbHVlICkge1xuXHRjb25zdCB7IHJlcGxhY2VBdHRycyA9IFtdIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuXHRjb25zdCBxdWVyeVNlbGVjdG9yID0gW107XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcmVwbGFjZUF0dHJzLmxlbmd0aDsgaSsrICkge1xuXHRcdHF1ZXJ5U2VsZWN0b3IucHVzaCggYFskeyByZXBsYWNlQXR0cnNbIGkgXSB9Kj1cIiR7IHZhbHVlIH1cIl1gICk7XG5cdH1cblxuXHRyZXR1cm4gcm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggcXVlcnlTZWxlY3Rvci5qb2luKCAnLCAnICkgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlCeUF0dHJWYWx1ZTsiLCIvKipcbiAqIEFsbG93bGlzdCBIVE1MIHNhbml0aXplciBmb3IgdmFsdWVzIHN1YnN0aXR1dGVkIGludG8gYGlubmVySFRNTGAgYnlcbiAqIEhUTUwgbWFjcm9zLiBVbmxpa2UgcGxhaW4gZXNjYXBpbmcgaXQga2VlcHMgaGFybWxlc3MgbWFya3VwIChXWVNJV1lHXG4gKiBmaWVsZCBjb250ZW50LCA8YnI+LCA8Yj4sIGxpbmtzLCAuLi4pIHJlbmRlcmVkIGFzIGJlZm9yZSwgYnV0IGRyb3BzXG4gKiBzY3JpcHRzLCBldmVudCBoYW5kbGVycyBhbmQgc2NyaXB0IFVSTHMuXG4gKlxuICogUGFyc2luZyBnb2VzIHRocm91Z2ggRE9NUGFyc2VyLCBzbyBub3RoaW5nIGlzIGV4ZWN1dGVkIG9yIGxvYWRlZCB3aGlsZVxuICogdGhlIHZhbHVlIGlzIGluc3BlY3RlZC5cbiAqL1xuY29uc3QgQUxMT1dFRF9UQUdTID0gbmV3IFNldCggW1xuXHQnYScsICdhYmJyJywgJ2InLCAnYmxvY2txdW90ZScsICdicicsICdjYXB0aW9uJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJyxcblx0J2RkJywgJ2RlbCcsICdkaXYnLCAnZGwnLCAnZHQnLCAnZW0nLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnaDEnLCAnaDInLFxuXHQnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaHInLCAnaScsICdpbWcnLCAnaW5zJywgJ2xpJywgJ21hcmsnLCAnb2wnLCAncCcsXG5cdCdwcmUnLCAncScsICdzJywgJ3NtYWxsJywgJ3NwYW4nLCAnc3RyaWtlJywgJ3N0cm9uZycsICdzdWInLCAnc3VwJywgJ3RhYmxlJyxcblx0J3Rib2R5JywgJ3RkJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RyJywgJ3UnLCAndWwnLFxuXSApO1xuXG4vLyBSZW1vdmVkIHRvZ2V0aGVyIHdpdGggdGhlaXIgY29udGVudCAobmV2ZXIgdW53cmFwcGVkKS5cbmNvbnN0IERST1BfV0lUSF9DT05URU5UID0gbmV3IFNldCggW1xuXHQnc2NyaXB0JywgJ3N0eWxlJywgJ2lmcmFtZScsICdmcmFtZScsICdmcmFtZXNldCcsICdvYmplY3QnLCAnZW1iZWQnLFxuXHQnYXBwbGV0JywgJ3RlbXBsYXRlJywgJ25vc2NyaXB0JywgJ3N2ZycsICdtYXRoJywgJ2Zvcm0nLCAnaW5wdXQnLCAnYnV0dG9uJyxcblx0J3RleHRhcmVhJywgJ3NlbGVjdCcsICdvcHRpb24nLCAnbGluaycsICdtZXRhJywgJ2Jhc2UnLCAndGl0bGUnLCAnaGVhZCcsXG5cdCdhdWRpbycsICd2aWRlbycsICdzb3VyY2UnLCAndHJhY2snLCAnY2FudmFzJywgJ2RpYWxvZycsICd4bXAnLCAncGxhaW50ZXh0Jyxcbl0gKTtcblxuY29uc3QgQUxMT1dFRF9BVFRSUyA9IG5ldyBTZXQoIFtcblx0J2hyZWYnLCAnc3JjJywgJ2FsdCcsICd0aXRsZScsICdjbGFzcycsICdzdHlsZScsICd0YXJnZXQnLCAncmVsJywgJ3dpZHRoJyxcblx0J2hlaWdodCcsICdjb2xzcGFuJywgJ3Jvd3NwYW4nLCAnYWxpZ24nLCAnZGlyJywgJ2xhbmcnLFxuXSApO1xuXG5jb25zdCBVUkxfQVRUUlMgPSBuZXcgU2V0KCBbICdocmVmJywgJ3NyYycgXSApO1xuXG5mdW5jdGlvbiBpc1NhZmVVcmwoIHZhbHVlICkge1xuXHQvLyBicm93c2VycyBpZ25vcmUgdGFicy9uZXdsaW5lcy9jb250cm9sIGNoYXJzIGluc2lkZSB0aGUgc2NoZW1lXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5cdGNvbnN0IHVybCA9IFN0cmluZyggdmFsdWUgKS5yZXBsYWNlKCAvW1xcdTAwMDAtIFxcdTAwN2YtXFx1MDA5Zl0vZywgJycgKTtcblx0Y29uc3QgbWF0Y2ggPSB1cmwubWF0Y2goIC9eKFthLXpdW2EtejAtOSsuLV0qKTovaSApO1xuXG5cdGlmICggISBtYXRjaCApIHtcblx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVsYXRpdmUgdXJsXG5cdH1cblxuXHRyZXR1cm4gWyAnaHR0cCcsICdodHRwcycsICdtYWlsdG8nLCAndGVsJyBdLmluY2x1ZGVzKFxuXHRcdG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKSxcblx0KTtcbn1cblxuLy8gT25seSBwbGFpbiBwcmVzZW50YXRpb25hbCBwcm9wZXJ0aWVzIHN1cnZpdmU7IGV2ZXJ5dGhpbmcgZWxzZSAocG9zaXRpb24sXG4vLyBjb250ZW50LCBiZWhhdmlvciwgQC1ydWxlcy4uLikgaXMgZHJvcHBlZC4gVmFsdWVzIGNhbm5vdCBjb250YWluIHVybCgpIG9yIGFueVxuLy8gb3RoZXIgZnVuY3Rpb24gKHNlZSBTQUZFX1NUWUxFX1ZBTFVFKSwgc28gZXZlbiBgYmFja2dyb3VuZGAgY2Fubm90IGxvYWQgYSByZXNvdXJjZS5cbmNvbnN0IEFMTE9XRURfU1RZTEVfUFJPUFMgPSBuZXcgU2V0KCBbXG5cdCdjb2xvcicsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ2ZvbnQtd2VpZ2h0JywgJ2ZvbnQtc3R5bGUnLCAnZm9udC1zaXplJyxcblx0J2ZvbnQtZmFtaWx5JywgJ3RleHQtYWxpZ24nLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtaW5kZW50Jyxcblx0J3RleHQtdHJhbnNmb3JtJywgJ2xpbmUtaGVpZ2h0JywgJ2xldHRlci1zcGFjaW5nJywgJ3ZlcnRpY2FsLWFsaWduJyxcblx0J2xpc3Qtc3R5bGUtdHlwZScsICd3aGl0ZS1zcGFjZScsICd3aWR0aCcsICdoZWlnaHQnLCAnbWF4LXdpZHRoJyxcblx0J21hcmdpbicsICdtYXJnaW4tdG9wJywgJ21hcmdpbi1yaWdodCcsICdtYXJnaW4tYm90dG9tJywgJ21hcmdpbi1sZWZ0Jyxcblx0J3BhZGRpbmcnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1yaWdodCcsICdwYWRkaW5nLWJvdHRvbScsICdwYWRkaW5nLWxlZnQnLFxuXHQnZGlzcGxheScsICdmbG9hdCcsICdvcGFjaXR5JywgJ2JveC1zaXppbmcnLCAnb2JqZWN0LWZpdCcsICd3b3JkLWJyZWFrJyxcblx0J292ZXJmbG93LXdyYXAnLCAnbGlzdC1zdHlsZScsICdtaW4td2lkdGgnLCAnbWluLWhlaWdodCcsICdtYXgtaGVpZ2h0Jyxcblx0J2JhY2tncm91bmQnLCAnYm9yZGVyJywgJ2JvcmRlci10b3AnLCAnYm9yZGVyLXJpZ2h0JywgJ2JvcmRlci1ib3R0b20nLFxuXHQnYm9yZGVyLWxlZnQnLCAnYm9yZGVyLWNvbG9yJywgJ2JvcmRlci1zdHlsZScsICdib3JkZXItd2lkdGgnLFxuXHQnYm9yZGVyLXJhZGl1cycsXG5dICk7XG5cbi8vIFBsYWluIHRva2VucyBvbmx5OiBubyBiYWNrc2xhc2ggZXNjYXBlcyAodGhleSBjYW4gc3BlbGwgYHVybChgKSwgbm8gY29tbWVudHMsXG4vLyBubyBxdW90ZXMsIGFuZCBubyBmdW5jdGlvbiBvdGhlciB0aGFuIHRoZSBjb2xvdXIgb25lcy5cbmNvbnN0IFNBRkVfU1RZTEVfVkFMVUUgPSAvXlthLXowLTkjJS4sXFxzKy1dKig/Oig/OnJnYnxyZ2JhfGhzbHxoc2xhKVxcKFswLTkuLCVcXHMvKy1dKlxcKVthLXowLTkjJS4sXFxzKy1dKikqJC9pO1xuXG4vKipcbiAqIFJlYnVpbGRzIHRoZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSB2YWxpZGF0ZWQgZGVjbGFyYXRpb25zIGluc3RlYWQgb2ZcbiAqIHBhdHRlcm4tbWF0Y2hpbmcgYSBzdHJpbmcgdGhlIGJyb3dzZXIgd2lsbCBpbnRlcnByZXQgZGlmZmVyZW50bHkuXG4gKi9cbmZ1bmN0aW9uIGNsZWFuU3R5bGUoIHZhbHVlICkge1xuXHRyZXR1cm4gU3RyaW5nKCB2YWx1ZSApXG5cdFx0LnNwbGl0KCAnOycgKVxuXHRcdC5tYXAoICggZGVjbGFyYXRpb24gKSA9PiB7XG5cdFx0XHRjb25zdCBpbmRleCA9IGRlY2xhcmF0aW9uLmluZGV4T2YoICc6JyApO1xuXG5cdFx0XHRpZiAoIGluZGV4IDwgMSApIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwcm9wID0gZGVjbGFyYXRpb24uc2xpY2UoIDAsIGluZGV4ICkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCB2YWwgID0gZGVjbGFyYXRpb24uc2xpY2UoIGluZGV4ICsgMSApLnRyaW0oKTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0QUxMT1dFRF9TVFlMRV9QUk9QUy5oYXMoIHByb3AgKSAmJlxuXHRcdFx0XHR2YWwgJiZcblx0XHRcdFx0U0FGRV9TVFlMRV9WQUxVRS50ZXN0KCB2YWwgKVxuXHRcdFx0KSA/IGAkeyBwcm9wIH06ICR7IHZhbCB9YCA6ICcnO1xuXHRcdH0gKVxuXHRcdC5maWx0ZXIoIEJvb2xlYW4gKVxuXHRcdC5qb2luKCAnOyAnICk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuTm9kZSggbm9kZSApIHtcblx0QXJyYXkuZnJvbSggbm9kZS5jaGlsZE5vZGVzICkuZm9yRWFjaCggKCBjaGlsZCApID0+IHtcblx0XHRpZiAoIDEgIT09IGNoaWxkLm5vZGVUeXBlICkge1xuXHRcdFx0Ly8ga2VlcCB0ZXh0LCBkcm9wIGNvbW1lbnRzL3Byb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25zL2V0Yy5cblx0XHRcdGlmICggMyAhPT0gY2hpbGQubm9kZVR5cGUgKSB7XG5cdFx0XHRcdG5vZGUucmVtb3ZlQ2hpbGQoIGNoaWxkICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB0YWcgPSBjaGlsZC5sb2NhbE5hbWU7XG5cblx0XHRpZiAoIERST1BfV0lUSF9DT05URU5ULmhhcyggdGFnICkgKSB7XG5cdFx0XHRub2RlLnJlbW92ZUNoaWxkKCBjaGlsZCApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y2xlYW5Ob2RlKCBjaGlsZCApO1xuXG5cdFx0aWYgKCAhIEFMTE9XRURfVEFHUy5oYXMoIHRhZyApICkge1xuXHRcdFx0Ly8gdW5rbm93biBlbGVtZW50OiBrZWVwIGl0cyAoYWxyZWFkeSBjbGVhbmVkKSBjb250ZW50IG9ubHlcblx0XHRcdHdoaWxlICggY2hpbGQuZmlyc3RDaGlsZCApIHtcblx0XHRcdFx0bm9kZS5pbnNlcnRCZWZvcmUoIGNoaWxkLmZpcnN0Q2hpbGQsIGNoaWxkICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnJlbW92ZUNoaWxkKCBjaGlsZCApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0QXJyYXkuZnJvbSggY2hpbGQuYXR0cmlidXRlcyApLmZvckVhY2goICggYXR0ciApID0+IHtcblx0XHRcdGNvbnN0IG5hbWUgPSBhdHRyLm5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQhIEFMTE9XRURfQVRUUlMuaGFzKCBuYW1lICkgfHxcblx0XHRcdFx0KCBVUkxfQVRUUlMuaGFzKCBuYW1lICkgJiYgISBpc1NhZmVVcmwoIGF0dHIudmFsdWUgKSApXG5cdFx0XHQpIHtcblx0XHRcdFx0Y2hpbGQucmVtb3ZlQXR0cmlidXRlKCBhdHRyLm5hbWUgKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggJ3N0eWxlJyA9PT0gbmFtZSApIHtcblx0XHRcdFx0Y29uc3Qgc3R5bGUgPSBjbGVhblN0eWxlKCBhdHRyLnZhbHVlICk7XG5cblx0XHRcdFx0aWYgKCBzdHlsZSApIHtcblx0XHRcdFx0XHRjaGlsZC5zZXRBdHRyaWJ1dGUoICdzdHlsZScsIHN0eWxlICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVtb3ZlQXR0cmlidXRlKCAnc3R5bGUnICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBicm93c2luZy1jb250ZXh0IG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBhbnkgbmFtZWQgdGFyZ2V0IGtlZXBzXG5cdFx0Ly8gd2luZG93Lm9wZW5lciwgc28gZXZlcnkgdGFyZ2V0IGdldHMgbm9vcGVuZXIgKHJlcGxhY2luZyBhIHN1cHBsaWVkIHJlbClcblx0XHRpZiAoIGNoaWxkLmhhc0F0dHJpYnV0ZSggJ3RhcmdldCcgKSApIHtcblx0XHRcdGNoaWxkLnNldEF0dHJpYnV0ZSggJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyApO1xuXHRcdH1cblx0fSApO1xufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZUh0bWwoIHZhbHVlICkge1xuXHRjb25zdCBodG1sID0gU3RyaW5nKCB2YWx1ZSA/PyAnJyApO1xuXG5cdC8vIGZhc3QgcGF0aDogbm8gbWFya3VwIGFuZCBubyBlbnRpdGllcywgbm90aGluZyB0byBzYW5pdGl6ZVxuXHRpZiAoICEgL1s8Jl0vLnRlc3QoIGh0bWwgKSApIHtcblx0XHRyZXR1cm4gaHRtbDtcblx0fVxuXG5cdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoXG5cdFx0YDwhZG9jdHlwZSBodG1sPjxib2R5PiR7IGh0bWwgfWAsXG5cdFx0J3RleHQvaHRtbCcsXG5cdCk7XG5cblx0Y2xlYW5Ob2RlKCBkb2MuYm9keSApO1xuXG5cdHJldHVybiBkb2MuYm9keS5pbm5lckhUTUw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplSHRtbDtcbiIsImltcG9ydCBpbml0Rm9ybSBmcm9tICcuL2luaXRGb3JtJztcblxuZnVuY3Rpb24gaW5pdEVsZW1lbnRvcigpIHtcblx0aWYgKCAhIHdpbmRvdy5lbGVtZW50b3JGcm9udGVuZCApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3Qgd2lkZ2V0cyA9IHtcblx0XHQnamV0LWVuZ2luZS1ib29raW5nLWZvcm0uZGVmYXVsdCc6IGluaXRGb3JtLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyLWZvcm0uZGVmYXVsdCc6IGluaXRGb3JtLFxuXHR9O1xuXG5cdGpRdWVyeS5lYWNoKCB3aWRnZXRzLCBmdW5jdGlvbiggd2lkZ2V0LCBjYWxsYmFjayApIHtcblx0XHR3aW5kb3cuZWxlbWVudG9yRnJvbnRlbmQuaG9va3MuYWRkQWN0aW9uKCAnZnJvbnRlbmQvZWxlbWVudF9yZWFkeS8nICsgd2lkZ2V0LCBjYWxsYmFjayApO1xuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRFbGVtZW50b3I7IiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlciA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlciA/PyB7fTtcblxuZnVuY3Rpb24gaW5pdEZvcm0oICRzY29wZSApIHtcblx0Y29uc3QgZm9ybSA9ICRzY29wZVsgMCBdLnF1ZXJ5U2VsZWN0b3IoICdmb3JtLmpldC1mb3JtLWJ1aWxkZXInICk7XG5cblx0aWYgKCAhZm9ybSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcblxuXHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJbIGZvcm0uZGF0YXNldC5mb3JtSWQgXSA9IG9ic2VydmFibGU7XG5cblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvaW5pdCcsXG5cdFx0WyAkc2NvcGUsIG9ic2VydmFibGUgXSxcblx0KTtcblxuXHRvYnNlcnZhYmxlLm9ic2VydmUoIGZvcm0gKTtcblxuXHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHQnamV0LWZvcm0tYnVpbGRlci9hZnRlci1pbml0Jyxcblx0XHRbICRzY29wZSwgb2JzZXJ2YWJsZSBdLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Rm9ybTsiLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcbmltcG9ydCB7IGlzQ2hhbmdlVHlwZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcbmltcG9ydCBSZWFjdGl2ZUhvb2sgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcbmltcG9ydCB7IFNUUklDVF9NT0RFIH0gZnJvbSAnLi4vc2lnbmFscy9CYXNlU2lnbmFsJztcblxuZnVuY3Rpb24gQ2hhbmdlRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNDaGFuZ2VUeXBlKCBub2RlICk7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR9ICk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IVNUUklDVF9NT0RFICYmIGpRdWVyeSggbm9kZSApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0aWYgKCB0aGlzLnZhbHVlLmN1cnJlbnQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhbGxhYmxlLmxvY2tUcmlnZ2VyKCk7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLmNhbGxhYmxlLnVubG9ja1RyaWdnZXIoKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSApO1xuXHR9O1xuXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnNpbGVuY2VTZXQoICcnICk7XG5cdH07XG59XG5cbkNoYW5nZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VEYXRhOyIsImltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XG5pbXBvcnQgeyBnZXRTaWduYWwgfSBmcm9tICcuLi9zaWduYWxzL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVSZXBvcnQgfSBmcm9tICcuLi9yZXBvcnRpbmcvZnVuY3Rpb25zJztcbmltcG9ydCB7IGdldFBhcnNlZE5hbWUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRUb3AsIGlzVmlzaWJsZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBTVFJJQ1RfTU9ERSB9IGZyb20gJy4uL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5cbmNvbnN0IHsgZG9BY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHR5cGVkZWYge0lucHV0RGF0YX1cbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWUgICAgTmFtZSBvZiBodG1sIGZpZWxkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkaW5nIHNwZWNpYWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgICAgICAgUHJlcGFyZWQgbmFtZSBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaWVsZFxuICogQHByb3BlcnR5IHtIVE1MSW5wdXRFbGVtZW50fCpbXX0gICAgICAgICAgICAgICBub2RlcyAgICAgIFJlbGF0ZWQgbm9kZXNcbiAqIEBwcm9wZXJ0eSB7UmVhY3RpdmVWYXJ9ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgICBSZWFjdGl2ZSB2YWx1ZVxuICogQHByb3BlcnR5IHtDb25kaXRpb25DaGVja2VyfG51bGx9ICAgICAgICAgICAgICBjaGVja2VyICAgIENvbmRpdGlvbiBjaGVja2VyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBieVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmRpdGlvbmFsIEJsb2NrXG4gKiBAcHJvcGVydHkgeyp9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNWYWx1ZSAgQ2FsY3VsYXRlZCB2YWx1ZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgYnkgQ2FsY3VsYXRlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpZWxkXG4gKiBAcHJvcGVydHkge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9IHJlcG9ydGluZyAgUmVwb3J0aW5nIG9iamVjdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB2YWxpZGF0aW9uIGFuZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dpbmcgZXJyb3JzXG4gKiBAcHJvcGVydHkge09ic2VydmFibGV9ICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QgICAgICAgTmVhcmVzdCBvYnNlcnZhYmxlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UsIGNvdWxkIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93IG9mIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGVyXG4gKiBAcHJvcGVydHkge1BhZ2VTdGF0ZX0gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgICAgICAgUmVsYXRlZCBwYWdlIGluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlzdGVwIGZvcm1cbiAqIEBwcm9wZXJ0eSB7TG9hZGluZ1JlYWN0aXZlVmFyfSAgICAgICAgICAgICAgICAgbG9hZGluZyAgICBSZWFjdGl2ZSB2YXIgdG9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2UgdmlzdWFsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgb2YgdGhlIGZpZWxkXG4gKiBAcHJvcGVydHkge09iamVjdDxSZWFjdGl2ZVZhcj59ICAgICAgICAgICAgICAgIGF0dHJzICAgICAgT2JqZWN0IHdpdGhcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZSBhdHRyaWJ1dGVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQgSXMgcmVxdWlyZWQgZmllbGRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBub3RcbiAqIEBwcm9wZXJ0eSB7bnVsbHxSZWFjdGl2ZUhvb2t9ICAgICAgICAgICAgICAgICAgZW50ZXJLZXkgICBVc2VkIGZvciBoYW5kbGluZ1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyIGhvb2tzIG9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc3MgRW50ZXIgYnV0dG9uXG4gKiBAcHJvcGVydHkge251bGx8c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZSAgVHlwZSBpZGVudGlmaWVyIG9mXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIElucHV0RGF0YSgpIHtcblx0dGhpcy5yYXdOYW1lID0gJyc7XG5cdHRoaXMubmFtZSAgICA9ICcnO1xuXHR0aGlzLmNvbW1lbnQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfEhUTUxJbnB1dEVsZW1lbnRbXX1cblx0ICovXG5cdHRoaXMubm9kZXMgPSBbXTtcblx0dGhpcy5hdHRycyAgICAgICAgID0ge307XG5cdHRoaXMuZW50ZXJLZXkgICAgICA9IG51bGw7XG5cdHRoaXMuaW5wdXRUeXBlICAgICA9IG51bGw7XG5cdHRoaXMub2Zmc2V0T25Gb2N1cyA9IDc1O1xuXG5cdC8qKlxuXHQgKiBQYXRoIGZyb20gdG9wIG9mIGZvcm0gdG8gY3VycmVudCBmaWVsZCBuYW1lXG5cdCAqIEV4LjogWyAncmVwZWF0ZXJfbmFtZScsIDAsICd0ZXh0X2ZpZWxkJyBdXG5cdCAqIFdoZXJlOlxuXHQgKiAgLSAncmVwZWF0ZXJfbmFtZSc6IG5hbWUgb2YgcmVwZWF0ZXIsIHdoZXJlIGN1cnJlbnQgZmllbGQgaXMgcGxhY2VkXG5cdCAqICAtIDA6IGluZGV4IG9mIHJlcGVhdGVyIHJvdywgd2hlcmUgY3VycmVudCBmaWVsZCBpcyBwbGFjZWRcblx0ICogIC0gJ3RleHRfZmllbGQnOiBuYW1lIG9mIGN1cnJlbnQgZmllbGQgbmFtZVxuXHQgKiBAdHlwZSB7QXJyYXk8c3RyaW5nIHwgbnVtYmVyPn1cblx0ICovXG5cdHRoaXMucGF0aCA9IFtdO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR0aGlzLnZhbHVlID0gdGhpcy5nZXRSZWFjdGl2ZSgpO1xuXHR0aGlzLnZhbHVlLndhdGNoKCB0aGlzLm9uQ2hhbmdlLmJpbmQoIHRoaXMgKSApO1xuXG5cdHRoaXMuaXNSZXF1aXJlZCA9IGZhbHNlO1xuXHR0aGlzLmNhbGNWYWx1ZSAgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QWR2YW5jZWRSZXBvcnRpbmd8QnJvd3NlclJlcG9ydGluZ31cblx0ICovXG5cdHRoaXMucmVwb3J0aW5nID0gbnVsbDtcblxuXHR0aGlzLmNoZWNrZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMucm9vdCA9IG51bGw7XG5cblx0dGhpcy5sb2FkaW5nID0gbmV3IExvYWRpbmdSZWFjdGl2ZVZhciggZmFsc2UgKTtcblx0dGhpcy5sb2FkaW5nLm1ha2UoKTtcblxuXHQvKipcblx0ICogSW4gQ2hlY2tib3hEYXRhIGNhc2Ugd2UgaGF2ZSBqdXN0IG1haW4gc2FuaXRpemVyLCB3aXRob3V0IGNhbGxhYmxlLlxuXHQgKiBTbyB3ZSBzZXQgLmNhbGNWYWx1ZSBpbnNpZGUgY2FsbGFibGUucnVuU2lnbmFsKClcblx0ICpcblx0ICogQW5kIHRvIHByZXZlbnQgcmVzZXR0aW5nIC5jYWxjVmFsdWUgYnkgb25DaGFuZ2Vcblx0ICogc2V0IHRoaXMgcHJvcGVydHkgdG8gRkFMU0UuXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0dGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlID0gdHJ1ZTtcblx0dGhpcy52YWxpZGF0ZVRpbWVyICAgID0gZmFsc2U7XG5cdHRoaXMuc3RvcFZhbGlkYXRpb24gICA9IGZhbHNlO1xuXHR0aGlzLmFib3J0Q29udHJvbGxlciAgPSBudWxsO1xufVxuXG5JbnB1dERhdGEucHJvdG90eXBlLmF0dHJzID0ge307XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuSW5wdXREYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBldmVudCA9PiB7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHR9ICk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsICgpID0+IHt9ICk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCAoKSA9PiB7XG5cdFx0aWYgKCB0aGlzLnJlcG9ydGluZyAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5yZXBvcnRpbmcuc3dpdGNoQnV0dG9uc1N0YXRlICkge1xuXHRcdFx0dGhpcy5yZXBvcnRpbmcuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5kZWJvdW5jZWRSZXBvcnQoKTtcblx0fSApO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0IVNUUklDVF9NT0RFICYmIGpRdWVyeSggbm9kZSApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRpZiAoIHRoaXMudmFsdWUuY3VycmVudCA9PSBldmVudC50YXJnZXQudmFsdWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XG5cdH0gKTtcblxuXHRpZiAoICdpbnB1dCcgIT09IHRoaXMuaW5wdXRUeXBlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUubWFrZVJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLm9uT2JzZXJ2ZSgpO1xuXHR0aGlzLmFkZExpc3RlbmVycygpO1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG5cblx0dGhpcy52YWx1ZS5tYWtlKCk7XG5cblx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJywgdGhpcyApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUub25DaGFuZ2UgICAgID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XG5cdGlmICggdGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlICkge1xuXHRcdHRoaXMuY2FsY1ZhbHVlID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXHR9XG5cblx0Ly8gYXBwbHkgY2hhbmdlcyBpbiBET01cblx0dGhpcz8uY2FsbGFibGU/LnJ1biggcHJldlZhbHVlICk7XG5cblx0Ly8gc2hvdyBlcnJvcnNcblx0dGhpcy5yZXBvcnQoKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnJlcG9ydCAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZSgpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUucmVwb3J0T25CbHVyID0gZnVuY3Rpb24gKCBzaWduYWwgPSBudWxsICkge1xuXHR0aGlzLnJlcG9ydGluZy52YWxpZGF0ZU9uQmx1ciggc2lnbmFsICk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5kZWJvdW5jZWRSZXBvcnQgPSBmdW5jdGlvbigpIHtcblx0aWYgKCB0aGlzLnZhbGlkYXRlVGltZXIgKSB7XG5cdFx0dGhpcy5zdG9wVmFsaWRhdGlvbiA9IHRydWU7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLnZhbGlkYXRlVGltZXIgKTtcblxuXHRcdGlmICggdGhpcy5hYm9ydENvbnRyb2xsZXIgKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB9XG5cdH1cblxuXHR0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGxldCBzaWduYWwgPSB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWw7XG5cblx0dGhpcy52YWxpZGF0ZVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xuXHRcdHRoaXMucmVwb3J0T25CbHVyKCBzaWduYWwgKTtcblx0fSwgNDUwICk7XG59XG4vKipcbiAqIEBwYXJhbSAgY2FsbGFibGVcbiAqIEByZXR1cm4geyhmdW5jdGlvbigpOiAqfCpbXSl8Kn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdHJldHVybiB0aGlzLnZhbHVlLndhdGNoKCBjYWxsYWJsZSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUud2F0Y2hWYWxpZGl0eSA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdHJldHVybiB0aGlzLnJlcG9ydGluZy52YWxpZGl0eVN0YXRlLndhdGNoKCBjYWxsYWJsZSApO1xufTtcbi8qKlxuICogQHBhcmFtICBjYWxsYWJsZVxuICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICp8KltdKXwqfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnNhbml0aXplID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0cmV0dXJuIHRoaXMudmFsdWUuc2FuaXRpemUoIGNhbGxhYmxlICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gaW5wdXREYXRhIHtJbnB1dERhdGF9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoIGlucHV0RGF0YSApIHtcblx0dGhpcy5ub2RlcyA9IFsgLi4uaW5wdXREYXRhLmdldE5vZGUoKSBdO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBmaWVsZFZhbHVlO1xuXHRpZiAoIHRoaXMuaXNBcnJheSgpICkge1xuXHRcdGZpZWxkVmFsdWUgPSBBcnJheS5mcm9tKCB0aGlzLm5vZGVzICkuXG5cdFx0XHRtYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcblx0fVxuXHRlbHNlIHtcblx0XHRmaWVsZFZhbHVlID0gdGhpcy5ub2Rlc1sgMCBdPy52YWx1ZTtcblx0fVxuXHR0aGlzLmNhbGNWYWx1ZSAgICAgPSBmaWVsZFZhbHVlO1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBmaWVsZFZhbHVlO1xufTtcbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0dGhpcy5ub2RlcyAgID0gWyBub2RlIF07XG5cdHRoaXMucmF3TmFtZSA9IG5vZGUubmFtZSA/PyAnJztcblx0dGhpcy5uYW1lICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XG5cblx0dGhpcy5pbnB1dFR5cGUgPSBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG59O1xuLyoqXG4gKiBSdW5zIG9uY2UgaW4gbGlmZWN5Y2xlLlxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLm9uT2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdC8qKlxuXHQgKiBTYXZlIGxpbmsgdG8gdGhpcyBvYmplY3Rcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdG5vZGUuamZiU3luYyA9IHRoaXM7XG5cblx0dGhpcy5pc1JlcXVpcmVkID0gdGhpcy5jaGVja0lzUmVxdWlyZWQoKTtcblxuXHR0aGlzLmNhbGxhYmxlID0gZ2V0U2lnbmFsKCBub2RlLCB0aGlzICk7XG5cdHRoaXMuY2FsbGFibGUuc2V0SW5wdXQoIHRoaXMgKTtcblxuXHR0aGlzLnJlcG9ydGluZyA9IGNyZWF0ZVJlcG9ydCggdGhpcyApO1xuXG5cdHRoaXMubG9hZGluZy53YXRjaCggKCkgPT4gdGhpcy5vbkNoYW5nZUxvYWRpbmcoKSApO1xuXG5cdHRoaXMucGF0aCA9IFsgLi4udGhpcy5nZXRQYXJlbnRQYXRoKCksIHRoaXMubmFtZSBdO1xuXG5cdGlmIChcblx0XHQvLyBpcyBhamF4XG5cdFx0IXRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApIHx8XG5cdFx0dGhpcy5oYXNQYXJlbnQoKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci53YXRjaFJlc2V0KCAoKSA9PiB0aGlzLm9uQ2xlYXIoKSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUub25DaGFuZ2VMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuXG5cdHRoaXMuZ2V0U3VibWl0KCkubG9ja1N0YXRlLmN1cnJlbnQgPSB0aGlzLmxvYWRpbmcuY3VycmVudDtcblxuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cdGNvbnN0IHdyYXBwZXIgID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xuXG5cdHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWxvYWRpbmcnLCB0aGlzLmxvYWRpbmcuY3VycmVudCApO1xufTtcbi8qKlxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuc2V0Um9vdCA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcblx0dGhpcy5yb290ID0gb2JzZXJ2YWJsZTtcbn07XG4vKipcbiAqIEJ5IGRlZmF1bHQgaXQgcnVucyBvbmx5IGlmIHJlcGVhdGVyIGl0ZW0gd2FzIHJlbW92ZWRcbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbn07XG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5uYW1lO1xufTtcbi8qKlxuICogQHJldHVybiB7QXJyYXkgfCBzdHJpbmcgfCBib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50O1xufTtcbi8qKlxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubm9kZXM7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmlzQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnJhd05hbWUuaW5jbHVkZXMoICdbXScgKTtcbn07XG4vKipcbiAqIEBwYXJhbSBjYWxsYWJsZSAgICAge0Z1bmN0aW9ufG1peGVkfVxuICogQHBhcmFtIGlucHV0Q29udGV4dCB7SW5wdXREYXRhfEJvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuYmVmb3JlU3VibWl0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSwgaW5wdXRDb250ZXh0ID0gZmFsc2UgKSB7XG5cdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLnByb21pc2UoIGNhbGxhYmxlLCBpbnB1dENvbnRleHQgKTtcbn07XG4vKipcbiAqIEByZXR1cm4ge0Zvcm1TdWJtaXR9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0U3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRSb290KCkuZm9ybTtcbn07XG4vKipcbiAqIEByZXR1cm4ge09ic2VydmFibGV9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5yb290Py5wYXJlbnQgKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdDtcblx0fVxuXHRyZXR1cm4gdGhpcy5yb290LnBhcmVudC5nZXRSb290KCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcblxuXHRyZXR1cm4gaXNWaXNpYmxlKCB3cmFwcGVyICk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2lsZW5jZVNldCggbnVsbCApO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRSZWFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIG5ldyBSZWFjdGl2ZVZhcigpO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5jaGVja0lzUmVxdWlyZWQgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRyZXR1cm4gbm9kZS5yZXF1aXJlZCA/PyAhIW5vZGUuZGF0YXNldC5yZXF1aXJlZD8ubGVuZ3RoO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5zaWxlbmNlU2V0ID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0LyoqXG5cdCAqIFJlbGF0ZWQgdG8gaXNzdWVcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTI2MSNpc3N1ZWNvbW1lbnQtMTI5MzI5MDI5MVxuXHQgKi9cblx0Y29uc3QgdGVtcFJlcG9ydCA9IHRoaXMucmVwb3J0LmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLnJlcG9ydCA9ICgpID0+IHt9O1xuXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHZhbHVlO1xuXG5cdHRoaXMucmVwb3J0ID0gdGVtcFJlcG9ydDtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuc2lsZW5jZU5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdGVtcFJlcG9ydCA9IHRoaXMucmVwb3J0LmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLnJlcG9ydCA9ICgpID0+IHt9O1xuXG5cdHRoaXMudmFsdWUubm90aWZ5KCk7XG5cblx0dGhpcy5yZXBvcnQgPSB0ZW1wUmVwb3J0O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmhhc1BhcmVudCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuICEhdGhpcy5yb290Py5wYXJlbnQ7XG59O1xuXG4vKipcbiAqIEZvciBpbnNlcnQgZXJyb3JzIGluIGFkdmFuY2VkIHZhbGlkYXRpb24gbW9kZVxuICogQHJldHVybiB7Kn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRXcmFwcGVyTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubm9kZXNbIDAgXS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5oYW5kbGVFbnRlcktleSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdGlmICggZXZlbnQua2V5ICE9PSAnRW50ZXInIHx8IC8vIG5vdCBlbnRlciBrZXlcblx0XHQhdGhpcy5lbnRlcktleSB8fCAvLyBoYW5kbGluZyBlbnRlciBrZXkgaXMgZGlzYWJsZWRcblx0XHRldmVudC5zaGlmdEtleSB8fCAvLyB0aGUgc2hpZnQga2V5IHdhcyBwcmVzc2VkXG5cdFx0ZXZlbnQuaXNDb21wb3NpbmcgLy8gaWYgdGhlIGV2ZW50IGlzIGZpcmVkIHdpdGhpbiBhIGNvbXBvc2l0aW9uIHNlc3Npb25cblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR0aGlzLm9uRW50ZXJLZXkoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUub25FbnRlcktleSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY2FuU3VibWl0ID0gdGhpcy5lbnRlcktleS5hcHBseUZpbHRlcnMoIHRydWUgKTtcblxuXHRpZiAoIGNhblN1Ym1pdCApIHtcblx0XHRjb25zdCBjYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSB0aGlzLmdldFN1Ym1pdCgpLmNhblRyaWdnZXJFbnRlclN1Ym1pdDtcblxuXHRcdGlmICggdHJ1ZSA9PT0gY2FuVHJpZ2dlckVudGVyU3VibWl0ICkge1xuXHRcdFx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXQoKTtcblx0XHR9XG5cdH1cbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuaW5pdE5vdGlmeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNpbGVuY2VOb3RpZnkoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUub25Gb2N1cyAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2Nyb2xsVG8oKTtcblx0dGhpcy5mb2N1c1JhdygpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuZm9jdXNSYXcgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHQvKipcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjI2NSNpc3N1ZWNvbW1lbnQtMTQ0Nzk4ODcxOFxuXHQgKi9cblx0aWYgKCBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGU/LmZvY3VzKCB7IHByZXZlbnRTY3JvbGw6IHRydWUgfSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG5cblx0d2luZG93LnNjcm9sbFRvKCB7XG5cdFx0dG9wOiBnZXRPZmZzZXRUb3AoIHdyYXBwZXIgKSAtIHRoaXMub2Zmc2V0T25Gb2N1cyxcblx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdH0gKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7UmVwb3J0aW5nQ29udGV4dH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5yb290LmdldENvbnRleHQoKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbnxJbnB1dERhdGFbXX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5wb3B1bGF0ZUlubmVyID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEV4ZWN1dGVkIHdpdGggZGVmYXVsdCBicm93c2VyIHZhbGlkYXRpb25cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxFbGVtZW50fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJlcG9ydGluZ05vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzWyAwIF07XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFBhcmVudFBhdGggPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QXJyYXl8T2JqZWN0fVxuXHQgKi9cblx0Y29uc3QgdmFsdWUgPSB0aGlzLnJvb3QucGFyZW50LnZhbHVlLmN1cnJlbnQ7XG5cblx0aWYgKCAnb2JqZWN0JyAhPT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIHJvdyBdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZSApICkge1xuXHRcdGlmICggcm93ICE9PSB0aGlzLnJvb3QgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLnRoaXMucm9vdC5wYXJlbnQuZ2V0UGFyZW50UGF0aCgpLFxuXHRcdFx0dGhpcy5yb290LnBhcmVudC5uYW1lLFxuXHRcdFx0aW5kZXgsXG5cdFx0XTtcblx0fVxuXG5cdHJldHVybiBbXTtcbn07XG5cbi8qKlxuICogUnVucyBvbmx5IG9uY2Ugb24gd2luZG93IFwibG9hZFwiIGV2ZW50XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG59O1xuXG4vKipcbiAqIFJ1bnMgb24gc2V0IE9ic2VydmFibGUudmFsdWUuY3VycmVudFxuICogQHBhcmFtIHZhbHVlXG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmV2ZXJ0VmFsdWUgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogUmVjYWxjdWxhdGUgdGhlIGZvcm11bGEgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5wdXQgZGF0YS5cbiAqIEBzaW5jZSAzLjQuNVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzExNzg2XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmVDYWxjdWxhdGVGb3JtdWxhID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuc2V0VmFsdWUoKTtcblx0dGhpcy5pbml0Tm90aWZ5VmFsdWUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RGF0YTtcbiIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xuaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIE5vTGlzdGVuRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlfVxuXHQgKi9cblx0dGhpcy5jb21tZW50ID0gbnVsbDtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNIaWRkZW4oIG5vZGUgKTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gc2lsZW5jZSBpcyBnb2xkZW5cblx0fTtcblx0dGhpcy5vbk9ic2VydmUgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5vbk9ic2VydmUuY2FsbCggdGhpcyApO1xuXG5cdFx0aWYgKCAhdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRDb21tZW50KCk7XG5cdH07XG5cdHRoaXMuc2V0Q29tbWVudCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY29tbWVudCAgID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggdGhpcy5uYW1lICk7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0bm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSggdGhpcy5jb21tZW50LCBub2RlICk7XG5cdH07XG5cblx0dGhpcy5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHRoaXMubWVyZ2UgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHRoaXMubm9kZXMucHVzaCggLi4uaW5wdXQuZ2V0Tm9kZSgpICk7XG5cdH07XG59XG5cbk5vTGlzdGVuRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vTGlzdGVuRGF0YTsiLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcbmltcG9ydCB7IGlzUmFuZ2UgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIFJhbmdlRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5udW1iZXJOb2RlID0gbnVsbDtcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSYW5nZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnNldE5vZGUgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cblx0XHR0aGlzLm51bWJlck5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtbnVtYmVyJyxcblx0XHQpO1xuXHR9O1xufVxuXG5SYW5nZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZURhdGE7IiwiaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XG5pbXBvcnQgUmVhY3RpdmVTZXQgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVTZXQnO1xuXG5jb25zdCB7IGJ1aWx0SW5TdGF0ZXMgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVhY3RpdmVTZXR9IHZhbHVlIFJlYWN0aXZlIHZhbHVlXG4gKlxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFJlbmRlclN0YXRlRGF0YSgpIHtcblx0Tm9MaXN0ZW5EYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQnaGlkZGVuJyA9PT0gbm9kZT8udHlwZSAmJlxuXHRcdFx0J19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzW10nID09PSBub2RlLm5hbWVcblx0XHQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XG5cdCAqL1xuXHR0aGlzLmFkZCA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHRcdHRoaXMudmFsdWUuYWRkKCBzdGF0ZU5hbWUgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHN0YXRlTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0XHR0aGlzLnZhbHVlLnJlbW92ZSggc3RhdGVOYW1lICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cblx0ICogQHBhcmFtIGZvcmNlICAgICB7bnVsbHxCb29sZWFufVxuXHQgKi9cblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSwgZm9yY2UgPSBudWxsICkge1xuXHRcdHRoaXMudmFsdWUudG9nZ2xlKCBzdGF0ZU5hbWUsIGZvcmNlICk7XG5cdH07XG5cblx0dGhpcy5pc0N1c3RvbSA9IGZ1bmN0aW9uICgga2V5ICkge1xuXHRcdHJldHVybiAhYnVpbHRJblN0YXRlcy5pbmNsdWRlcygga2V5ICk7XG5cdH07XG59XG5cblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBOb0xpc3RlbkRhdGEucHJvdG90eXBlICk7XG5cblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUuZ2V0UmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBuZXcgUmVhY3RpdmVTZXQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN0YXRlRGF0YTsiLCJpbXBvcnQgQ2hhbmdlRGF0YSBmcm9tICcuL0NoYW5nZURhdGEnO1xuaW1wb3J0IFJhbmdlRGF0YSBmcm9tICcuL1JhbmdlRGF0YSc7XG5pbXBvcnQgTm9MaXN0ZW5EYXRhIGZyb20gJy4vTm9MaXN0ZW5EYXRhJztcbmltcG9ydCBSZW5kZXJTdGF0ZURhdGEgZnJvbSAnLi9SZW5kZXJTdGF0ZURhdGEnO1xuaW1wb3J0IHsgc2V0QXR0cnMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcblx0ICAgICAgZG9BY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb24oKTogKn1cbiAqL1xuY29uc3QgZ2V0RGF0YVR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdFtcblx0XHRSZW5kZXJTdGF0ZURhdGEsXG5cdFx0UmFuZ2VEYXRhLFxuXHRcdENoYW5nZURhdGEsXG5cdFx0Tm9MaXN0ZW5EYXRhLFxuXHRdLFxuKTtcblxubGV0IGRhdGFUeXBlcyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQcmVwYXJlZERhdGFUeXBlcygpIHtcblx0aWYgKCAhZGF0YVR5cGVzLmxlbmd0aCApIHtcblx0XHRkYXRhVHlwZXMgPSBnZXREYXRhVHlwZXMoKTtcblx0fVxuXG5cdHJldHVybiBbIC4uLmRhdGFUeXBlcyBdO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZVxuICogQHBhcmFtICBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXQoIG5vZGUsIG9ic2VydmFibGUgKSB7XG5cdGZvciAoIGNvbnN0IGRhdGFUeXBlIG9mIGdldFByZXBhcmVkRGF0YVR5cGVzKCkgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBkYXRhVHlwZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggbm9kZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGN1cnJlbnQuc2V0Um9vdCggb2JzZXJ2YWJsZSApO1xuXHRcdGN1cnJlbnQuc2V0Tm9kZSggbm9kZSApO1xuXHRcdHNldEF0dHJzKCBjdXJyZW50ICk7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5pbnB1dC5jcmVhdGVkJywgY3VycmVudCApO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoICdTb21ldGhpbmcgd2VudCB3cm9uZycgKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRJbnB1dFJlZ2lzdHJ5KCkge1xuXHRkYXRhVHlwZXMgPSBbXTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VkTmFtZSggbmFtZSApIHtcblx0Y29uc3QgcmVnZXhwcyA9IFtcblx0XHQvLyBtdWx0aXBsZSBmaWVsZHMgKGNoZWNrYm94W10pXG5cdFx0L14oW1xcd1xcLV0rKVxcW1xcXSQvLFxuXHRcdC8vIGZpZWxkcyBpbnNpZGUgcmVwZWF0ZXIgKHJlcF9uYW1lWzFdW2NvbnRlbnRfZmllbGRdKVxuXHRcdC9eW1xcd1xcLV0rXFxbXFxkK1xcXVxcWyhbXFx3XFwtXSspXFxdXFxbP1xcXT8kLyxcblx0XTtcblxuXHRmb3IgKCBjb25zdCByZWdFeHAgb2YgcmVnZXhwcyApIHtcblx0XHRpZiAoICFyZWdFeHAudGVzdCggbmFtZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IG1hdGNoZXMgPSBuYW1lLm1hdGNoKCByZWdFeHAgKTtcblxuXHRcdHJldHVybiBtYXRjaGVzWyAxIF07XG5cdH1cblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzIHtJbnB1dERhdGFbXX1cbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVJbnB1dHMoIGlucHV0cyApIHtcblx0Y29uc3QgbGlzdCA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcblx0XHRjb25zdCBpbm5lciA9IGlucHV0LnBvcHVsYXRlSW5uZXIoKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRpbm5lcj8ubGVuZ3RoICYmIGxpc3QucHVzaCggLi4uaW5uZXIgKTtcblxuXHRcdGxpc3QucHVzaCggaW5wdXQgKTtcblx0fVxuXG5cdHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgeyBnZXRQYXJzZWROYW1lLCBjcmVhdGVJbnB1dCwgcG9wdWxhdGVJbnB1dHMsIHJlc2V0SW5wdXRSZWdpc3RyeSB9O1xuIiwiLyoqXG4gKiBAdGhpcyB7UmVhY3RpdmVWYXJ9XG4gKlxuICogQGNsYXNzXG4gKi9cbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gTG9hZGluZ1JlYWN0aXZlVmFyKCkge1xuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCBmYWxzZSApO1xuXG5cdHRoaXMuc3RhcnQgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudCA9IHRydWU7XG5cdH07XG5cdHRoaXMuZW5kICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudCA9IGZhbHNlO1xuXHR9O1xuXHR0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnQgPSAhdGhpcy5jdXJyZW50O1xuXHR9O1xufVxuXG5Mb2FkaW5nUmVhY3RpdmVWYXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVhY3RpdmVWYXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSZWFjdGl2ZVZhcjsiLCJmdW5jdGlvbiBSZWFjdGl2ZUhvb2soKSB7XG5cdHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuUmVhY3RpdmVIb29rLnByb3RvdHlwZSA9IHtcblx0YWRkRmlsdGVyKCBjYWxsYWJsZSApIHtcblx0XHR0aGlzLmhhbmRsZXJzLnB1c2goIGNhbGxhYmxlICk7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcblxuXHRcdHJldHVybiAoKSA9PiB0aGlzLmhhbmRsZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0YXBwbHlGaWx0ZXJzKCAuLi5wYXJhbXMgKSB7XG5cdFx0bGV0IGN1cnJlbnQgICAgID0gcGFyYW1zWyAwIF07XG5cdFx0Y29uc3QgbmV3UGFyYW1zID0gcGFyYW1zLnNsaWNlKCAxICk7XG5cblx0XHRmb3IgKCBjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMgKSB7XG5cdFx0XHRjdXJyZW50ID0gaGFuZGxlciggY3VycmVudCwgLi4ubmV3UGFyYW1zICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZUhvb2s7XG4iLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIFJlYWN0aXZlU2V0KCB2YWx1ZSApIHtcblx0UmVhY3RpdmVWYXIuY2FsbCggdGhpcywgdmFsdWUgKTtcbn1cblxuUmVhY3RpdmVTZXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVhY3RpdmVWYXIucHJvdG90eXBlICk7XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0Ly8gYWRkIHVuaXF1ZSB2YWx1ZVxuXHR0aGlzLmN1cnJlbnQgPSBbXG5cdFx0Li4ubmV3IFNldCggW1xuXHRcdFx0Li4uKFxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPz8gW11cblx0XHRcdCksXG5cdFx0XHRzdGF0ZU5hbWUsXG5cdFx0XSApLFxuXHRdO1xufTtcblxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHR0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZmlsdGVyKFxuXHRcdGl0ZW0gPT4gaXRlbSAhPT0gc3RhdGVOYW1lLFxuXHQpO1xufTtcblxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lLCBmb3JjZSA9IG51bGwgKSB7XG5cdGlmICggbnVsbCAhPT0gZm9yY2UgKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdGZvcmNlID8gdGhpcy5hZGQoIHN0YXRlTmFtZSApIDogdGhpcy5yZW1vdmUoIHN0YXRlTmFtZSApO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCB0aGlzLmN1cnJlbnQuaW5jbHVkZXMoIHN0YXRlTmFtZSApICkge1xuXHRcdHRoaXMucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLmFkZCggc3RhdGVOYW1lICk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlU2V0OyIsImltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBSZWFjdGl2ZVZhciggdmFsdWUgPSBudWxsICkge1xuXHR0aGlzLmN1cnJlbnQgICAgPSB2YWx1ZTtcblx0dGhpcy5zaWduYWxzICAgID0gW107XG5cdHRoaXMuc2FuaXRpemVycyA9IFtdO1xuXHR0aGlzLmlzRGVidWcgICAgPSBmYWxzZTtcblx0dGhpcy5pc1NpbGVuY2UgID0gZmFsc2U7XG5cdHRoaXMuaXNNYWtlZCAgICA9IGZhbHNlO1xufVxuXG5SZWFjdGl2ZVZhci5wcm90b3R5cGUgPSB7XG5cdHdhdGNoT25jZSAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBjbGVhcldhdGNoZXIgPSB0aGlzLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRjbGVhcldhdGNoZXIoKTtcblx0XHRcdGNhbGxhYmxlKCk7XG5cdFx0fSApO1xuXHR9LFxuXHR3YXRjaCAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5zaWduYWxzLnNvbWUoICggeyBzaWduYWwgfSApID0+IHNpZ25hbCA9PT0gY2FsbGFibGUgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2lnbmFscy5wdXNoKCB7XG5cdFx0XHRzaWduYWw6IGNhbGxhYmxlLFxuXHRcdFx0dHJhY2U6IG5ldyBFcnJvcigpLnN0YWNrLFxuXHRcdH0gKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zaWduYWxzLmxlbmd0aCAtIDE7XG5cblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zaWduYWxzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0c2FuaXRpemUgKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIC0xICE9PSB0aGlzLnNhbml0aXplcnMuaW5kZXhPZiggY2FsbGFibGUgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2FuaXRpemVycy5wdXNoKCBjYWxsYWJsZSApO1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNhbml0aXplcnMubGVuZ3RoIC0gMTtcblxuXHRcdHJldHVybiAoKSA9PiB0aGlzLnNhbml0aXplcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHR9LFxuXHRtYWtlICgpIHtcblx0XHRpZiAoIHRoaXMuaXNNYWtlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5pc01ha2VkICA9IHRydWU7XG5cdFx0bGV0IGN1cnJlbnQgICA9IHRoaXMuY3VycmVudDtcblx0XHRsZXQgcHJldlZhbHVlID0gbnVsbDtcblx0XHRjb25zdCBzZWxmICAgID0gdGhpcztcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgJ2N1cnJlbnQnLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0fSxcblx0XHRcdHNldCggbmV3VmFsICkge1xuXHRcdFx0XHRpZiAoIGN1cnJlbnQgPT09IG5ld1ZhbCApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJldlZhbHVlID0gY3VycmVudDtcblx0XHRcdFx0aWYgKCBzZWxmLmlzRGVidWcgKSB7XG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSwgbm8tZGVidWdnZXIgKi9cblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwKCAnUmVhY3RpdmVWYXIgaGFzIGNoYW5nZWQnICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICdjdXJyZW50OicsIGN1cnJlbnQgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ25ld1ZhbDonLCBuZXdWYWwgKTtcblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0XHRcdFx0ZGVidWdnZXI7XG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlLCBuby1kZWJ1Z2dlciAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnQgPSBzZWxmLmFwcGx5U2FuaXRpemVycyggbmV3VmFsICk7XG5cblx0XHRcdFx0aWYgKCBzZWxmLmlzU2lsZW5jZSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5ub3RpZnkoIHByZXZWYWx1ZSApO1xuXHRcdFx0fSxcblx0XHR9ICk7XG5cdH0sXG5cdG5vdGlmeSAoIHByZXZWYWx1ZSA9IG51bGwgKSB7XG5cdFx0dGhpcy5zaWduYWxzLmZvckVhY2goXG5cdFx0XHQoIHsgc2lnbmFsIH0gKSA9PiBzaWduYWwuY2FsbCggdGhpcywgcHJldlZhbHVlICkgKTtcblx0fSxcblx0YXBwbHlTYW5pdGl6ZXJzICggdmFsdWUgKSB7XG5cdFx0Zm9yICggY29uc3Qgc2FuaXRpemVyIG9mIHRoaXMuc2FuaXRpemVycyApIHtcblx0XHRcdHZhbHVlID0gc2FuaXRpemVyLmNhbGwoIHRoaXMsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRzZXRJZkVtcHR5KCBuZXdWYWx1ZSApIHtcblx0XHRpZiAoICFpc0VtcHR5KCB0aGlzLmN1cnJlbnQgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmN1cnJlbnQgPSBuZXdWYWx1ZTtcblx0fSxcblx0ZGVidWcoKSB7XG5cdFx0dGhpcy5pc0RlYnVnID0gIXRoaXMuaXNEZWJ1Zztcblx0fSxcblx0c2lsZW5jZSgpIHtcblx0XHR0aGlzLmlzU2lsZW5jZSA9ICF0aGlzLmlzU2lsZW5jZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlVmFyOyIsImltcG9ydCBSZXBvcnRpbmdJbnRlcmZhY2UgZnJvbSAnLi9SZXBvcnRpbmdJbnRlcmZhY2UnO1xuaW1wb3J0IHsgYWxsUmVqZWN0ZWQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQnJvd3NlclJlcG9ydGluZygpIHtcblx0UmVwb3J0aW5nSW50ZXJmYWNlLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHRoaXMucmVwb3J0UmF3ICAgPSBmdW5jdGlvbiAoKSB7XG5cdH07XG5cdHRoaXMucmVwb3J0Rmlyc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xuXG5cdFx0bm9kZS5yZXBvcnRWYWxpZGl0eSgpO1xuXHR9O1xuXG5cdHRoaXMuc2V0UmVzdHJpY3Rpb25zICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zKCB0aGlzLCBub2RlICk7XG5cdH07XG5cdHRoaXMuY2xlYXJSZXBvcnQgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBicm93c2VyIGF1dG9tYXRpY2FsbHkgaGlkZSB0b29sdGlwIG1lc3NhZ2VzXG5cdH07XG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmdldEVycm9ycygpLnRoZW4oIGVycm9ycyA9PiB7XG5cdFx0XHR0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCA9ICFCb29sZWFuKCBlcnJvcnMubGVuZ3RoICk7XG5cblx0XHRcdGlmICggIWVycm9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHRoaXMuY2xlYXJSZXBvcnQoKTtcblx0XHRcdH1cblx0XHR9ICkuY2F0Y2goICgpID0+IHt9ICk7XG5cdH07XG5cblx0dGhpcy5nZXRFcnJvcnNSYXcgPSBhc3luYyBmdW5jdGlvbiAoIHByb21pc2VzICkge1xuXHRcdGNvbnN0IGVycm9ycyAgID0gYXdhaXQgYWxsUmVqZWN0ZWQoIHByb21pc2VzICk7XG5cdFx0dGhpcy52YWx1ZVByZXYgPSB0aGlzLmlucHV0LmdldFZhbHVlKCk7XG5cblx0XHRyZXR1cm4gZXJyb3JzO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0Lmhhc0F1dG9TY3JvbGwoKTtcblx0fTtcblxuXHQvKipcblx0ICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudHxIVE1MRWxlbWVudH1cblx0ICovXG5cdHRoaXMuZ2V0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5nZXRSZXBvcnRpbmdOb2RlKCk7XG5cdH07XG59XG5cbkJyb3dzZXJSZXBvcnRpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVwb3J0aW5nSW50ZXJmYWNlLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyUmVwb3J0aW5nOyIsImZ1bmN0aW9uIFJlcG9ydGluZ0NvbnRleHQoIHJvb3QgKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMucm9vdCA9IHJvb3Q7XG5cblx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gZmFsc2U7XG5cdHRoaXMuc2lsZW5jZSAgICAgICA9IHRydWU7XG5cbn1cblxuUmVwb3J0aW5nQ29udGV4dC5wcm90b3R5cGUgPSB7XG5cdHJlc2V0KCBwcm9wcyA9IHt9ICkge1xuXHRcdHRoaXMucmVwb3J0ZWRGaXJzdCA9IGZhbHNlO1xuXHRcdHRoaXMuc2V0U2lsZW5jZSggcHJvcHM/LnNpbGVuY2UgPz8gdHJ1ZSApO1xuXHR9LFxuXHRyZXBvcnRGaXJzdCgpIHtcblx0XHR0aGlzLnJlcG9ydGVkRmlyc3QgPSB0cnVlO1xuXHR9LFxuXHRzZXRTaWxlbmNlKCB2YWx1ZSApIHtcblx0XHR0aGlzLnNpbGVuY2UgPSAhIXZhbHVlO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0aW5nQ29udGV4dDtcblxuIiwiLyoqXG4gKiBWYWxpZGF0aW9uIGxvZ2ljOiBvbiBjaGFuZ2UgaW5wdXQgdmFsdWUgd2UgcnVuXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS52YWxpZGF0ZU9uQ2hhbmdlXG4gKlxuICogSW4gdGhhdCBmdW5jdGlvbiB3ZSBjbGVhciBzdG9yZWQgZXJyb3JzXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5lcnJvcnNcbiAqIGNoZWNrIGFsbCByZXN0cmljdGlvbnMgYWdhaW4gYW5kIHNhdmUgZXJyb3JzXG4gKiB0byB0aGUgc2FtZSBwcm9wZXJ0eS5cbiAqXG4gKiBXaGVuIHVzZXIgdHJpZXMgdG8gc3VibWl0IGZvcm0gd2UgcnVuXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS52YWxpZGF0ZVxuICogSWYgdGhlcmUgd2FzIHN0b3JlZCBlcnJvcnMgLSBpdCB3aWxsIHJldHVybiB0aGVtLlxuICogT3RoZXJ3aXNlIHdlIGNoZWNrIGFsbCBhbmQgc2F2ZSBlcnJvcnMuXG4gKlxuICogSW4gdGhlIGNhc2Ugd2hlbiB3ZSBydW4gdGhlIHZhbGlkYXRpb24gdGhyb3VnaCB0aGVcbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLmlzVmFsaWRcbiAqIFdlIFwiYmxvY2sgdGhlIGZvcm1cIiB0aHJvdWdoIHRoZSBcInRlc3RcIiBwcm9wZXJ0eS5cbiAqIFRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsIGFuZCB3aGVuIGl0IGNoYW5nZXMsXG4gKiB0aGUgc3RhdGUgb2YgdGhlIGJ1dHRvbiBmb3Igc3VibWl0dGluZyB0aGUgZm9ybVxuICogYW5kIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYmV0d2VlbiBwYWdlcyBjaGFuZ2VzLlxuICovXG5pbXBvcnQgUmVzdHJpY3Rpb25FcnJvciBmcm9tICcuL1Jlc3RyaWN0aW9uRXJyb3InO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gUmVwb3J0aW5nSW50ZXJmYWNlKCkge1xuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuaW5wdXQgPSBudWxsO1xuXHR0aGlzLmlzUmVxdWlyZWQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEB0eXBlIHtBcnJheSB8IG51bGx9XG5cdCAqL1xuXHR0aGlzLmVycm9ycyA9IG51bGw7XG5cdHRoaXMucmVzdHJpY3Rpb25zID0gW107XG5cblx0dGhpcy52YWx1ZVByZXYgICAgID0gbnVsbDtcblx0dGhpcy52YWxpZGl0eVN0YXRlID0gbnVsbDtcblx0dGhpcy5wcm9taXNlc0NvdW50ID0gMDtcbn1cblxuUmVwb3J0aW5nSW50ZXJmYWNlLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtSZXN0cmljdGlvbltdfVxuXHQgKi9cblx0cmVzdHJpY3Rpb25zOiBbXSxcblx0dmFsdWVQcmV2OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dmFsaWRpdHlTdGF0ZTogbnVsbCxcblx0cHJvbWlzZXNDb3VudDogMCxcblx0LyoqXG5cdCAqIFJ1bnMgb24gY2hhbmdpbmcgdmFsdWUgaW4gdGhlIGZpZWxkXG5cdCAqIEBzZWUgSW5wdXREYXRhLm9uQ2hhbmdlXG5cdCAqL1xuXHR2YWxpZGF0ZU9uQ2hhbmdlICgpIHtcblx0fSxcblx0dmFsaWRhdGVPbkJsdXIgKCkge1xuXHR9LFxuXHQvKipcblx0ICogUnVucyBvbiB0cnlpbmcgdG8gc3VibWl0IGZvcm1cblx0ICogQHNlZSBPYnNlcnZhYmxlLmlucHV0c0FyZVZhbGlkXG5cdCAqXG5cdCAqIFJ1bnMgb24gY2hhbmdpbmcgdmFsdWUsIGlmIHRoaXMgZmllbGQgaW5zaWRlIHBhZ2Vcblx0ICogQHNlZSBJbnB1dERhdGEuc2V0UGFnZVxuXHQgKiBAc2VlIFBhZ2VTdGF0ZS51cGRhdGVTdGF0ZVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuXHQgKi9cblx0YXN5bmMgdmFsaWRhdGUgKCBzaWduYWwgPSBudWxsICkge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSBhd2FpdCB0aGlzLmdldEVycm9ycyggc2lnbmFsICk7XG5cblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCA9ICFCb29sZWFuKCBlcnJvcnMubGVuZ3RoICk7XG5cblx0XHRpZiAoICFlcnJvcnMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5jbGVhclJlcG9ydCgpO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IXRoaXMuaW5wdXQucm9vdC5nZXRDb250ZXh0KCkuc2lsZW5jZSAmJiB0aGlzLnJlcG9ydCggZXJyb3JzICk7XG5cblx0XHR0aHJvdyBuZXcgUmVzdHJpY3Rpb25FcnJvciggZXJyb3JzWyAwIF0ubmFtZSApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICBwcm9taXNlcyB7RnVuY3Rpb25bXX1cblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheSB8IG51bGw+fVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGFzeW5jIGdldEVycm9yc1JhdyAoIHByb21pc2VzICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ2dldEVycm9yIG11c3QgcmV0dXJuIGEgUHJvbWlzZScgKTtcblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheSB8ICpbXSB8IG51bGw+fVxuXHQgKi9cblx0YXN5bmMgZ2V0RXJyb3JzICggc2lnbmFsID0gbnVsbCApIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmlucHV0LmxvYWRpbmcuY3VycmVudCB8fFxuXHRcdFx0dGhpcy5pbnB1dD8uY2FsbGFibGU/LmxvY2s/LmN1cnJlbnQgfHxcblx0XHRcdCF0aGlzLmlucHV0LmlzVmlzaWJsZSgpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmdldFByb21pc2VzKCBzaWduYWwgKTtcblxuXHRcdGlmIChcblx0XHRcdCF0aGlzLmhhc0NoYW5nZWRWYWx1ZSgpICYmXG5cdFx0XHR0aGlzLnByb21pc2VzQ291bnQgPT09IHByb21pc2VzLmxlbmd0aCAmJlxuXHRcdFx0IXRoaXMuaW5wdXQuc3RvcFZhbGlkYXRpb24gJiZcblx0XHRcdC8vIFJlZnJlc2ggYWxsIHNlbGVjdHMgYmVjYXVzZSB0aGVpciBzdGF0ZSBtaWdodCBoYXZlIGNoYW5nZWRcblx0XHRcdHRoaXMuaW5wdXQuaW5wdXRUeXBlICE9PSAnaHItc2VsZWN0LWxldmVsJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JzID8/IFtdO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvbWlzZXNDb3VudCA9IHByb21pc2VzLmxlbmd0aDtcblx0XHR0aGlzLmVycm9ycyAgICAgICAgPSBbXTtcblxuXHRcdGlmICggIXByb21pc2VzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9ycztcblx0XHR9XG5cblx0XHR0aGlzLmVycm9ycyA9IGF3YWl0IHRoaXMuZ2V0RXJyb3JzUmF3KCBwcm9taXNlcywgc2lnbmFsICk7XG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JzO1xuXHR9LFxuXHRyZXBvcnQgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xuXG5cdFx0aWYgKCB0aGlzLmlucHV0LmdldENvbnRleHQoKS5yZXBvcnRlZEZpcnN0ICkge1xuXHRcdFx0dGhpcy5yZXBvcnRSYXcoIHZhbGlkYXRpb25FcnJvcnMgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnJlcG9ydEZpcnN0KCk7XG5cblx0XHR0aGlzLnJlcG9ydEZpcnN0KCB2YWxpZGF0aW9uRXJyb3JzICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gdmFsaWRhdGlvbkVycm9ycyB7UmVzdHJpY3Rpb25bXX1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRyZXBvcnRSYXcgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ3JlcG9ydCBpcyBlbXB0eScgKTtcblx0fSxcblx0cmVwb3J0Rmlyc3QgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xuXHRcdHRoaXMucmVwb3J0KCB2YWxpZGF0aW9uRXJyb3JzICk7XG5cdH0sXG5cdGNsZWFyUmVwb3J0ICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdjbGVhclJlcG9ydCBpcyBlbXB0eScgKTtcblx0fSxcblx0Z2V0UHJvbWlzZXMgKCBzaWduYWwgPSBudWxsKSB7XG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHRoaXMucmVzdHJpY3Rpb25zICkge1xuXHRcdFx0aWYgKCAhdGhpcy5jYW5Qcm9jZXNzUmVzdHJpY3Rpb24oIHJlc3RyaWN0aW9uICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5iZWZvcmVQcm9jZXNzUmVzdHJpY3Rpb24oIHJlc3RyaWN0aW9uICk7XG5cblx0XHRcdHByb21pc2VzLnB1c2goICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0XHRyZXN0cmljdGlvbi52YWxpZGF0ZVByb21pc2UoIHNpZ25hbCApLlxuXHRcdFx0XHRcdHRoZW4oICgpID0+IHJlc29sdmUoIHJlc3RyaWN0aW9uICkgKS5cblx0XHRcdFx0XHRjYXRjaCggZXJyb3IgPT4gcmVqZWN0KCBbIHJlc3RyaWN0aW9uLCBlcnJvciBdICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gIHJlc3RyaWN0aW9uIHtSZXN0cmljdGlvbn1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRjYW5Qcm9jZXNzUmVzdHJpY3Rpb24gKCByZXN0cmljdGlvbiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIHJlc3RyaWN0aW9uIHtSZXN0cmljdGlvbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRiZWZvcmVQcm9jZXNzUmVzdHJpY3Rpb24gKCByZXN0cmljdGlvbiApIHtcblx0fSxcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuXHQvKipcblx0ICogQHBhcmFtICBub2RlICB7RWxlbWVudH1cblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkICggbm9kZSwgaW5wdXQgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnaXNTdXBwb3J0ZWQgaXMgZW1wdHknICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cblx0ICovXG5cdHNldElucHV0ICggaW5wdXQgKSB7XG5cdFx0dGhpcy52YWxpZGl0eVN0YXRlID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdFx0dGhpcy52YWxpZGl0eVN0YXRlLm1ha2UoKTtcblxuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0XHR0aGlzLnNldFJlc3RyaWN0aW9ucygpO1xuXHRcdHRoaXMuZmlsdGVyUmVzdHJpY3Rpb25zKCk7XG5cdH0sXG5cdHNldFJlc3RyaWN0aW9ucyAoKSB7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxFbGVtZW50fVxuXHQgKi9cblx0Z2V0Tm9kZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQubm9kZXNbIDAgXTtcblx0fSxcblxuXHRoYXNDaGFuZ2VkVmFsdWUgKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlUHJldiAhPT0gdGhpcy5pbnB1dC5nZXRWYWx1ZSgpO1xuXHR9LFxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTwqPn1cblx0ICovXG5cdGNoZWNrVmFsaWRpdHkgKCkge1xuXHRcdGNvbnN0IGlzU2lsZW5jZSA9IHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNpbGVuY2U7XG5cblx0XHRpZiAoIG51bGwgPT09IHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWRhdGVPbkNoYW5nZVN0YXRlKCk7XG5cdFx0fVxuXHRcdGlmICggdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc1NpbGVuY2UgKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcblx0XHR9XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IWlzU2lsZW5jZSAmJiB0aGlzLnJlcG9ydCggdGhpcy5lcnJvcnMgfHwgW10gKTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNBdXRvU2Nyb2xsICgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdC8qKlxuXHQgKiBXaXRoIHRoZSBoZWxwIG9mIGZpbHRlcnMgdGhhdCBhZGQgbmV3IHJlc3RyaWN0aW9ucyxcblx0ICogeW91IGNhbiBvdmVyd3JpdGUgYSBwYXJ0aWN1bGFyIHJlc3RyaWN0aW9uXG5cdCAqIGlmIHRoZSBcInR5cGVcIiBwcm9wZXJ0eSBpcyBkZWZpbmVkIGluIGl0XG5cdCAqL1xuXHRmaWx0ZXJSZXN0cmljdGlvbnMgKCkge1xuXHRcdGNvbnN0IG1hcCA9IHt9O1xuXG5cdFx0Zm9yICggbGV0IFsgaW5kZXgsIHJlc3RyaWN0aW9uIF0gb2YgT2JqZWN0LmVudHJpZXMoXG5cdFx0XHR0aGlzLnJlc3RyaWN0aW9ucyApICkge1xuXHRcdFx0aW5kZXggPSByZXN0cmljdGlvbi5nZXRUeXBlKCkgPyByZXN0cmljdGlvbi5nZXRUeXBlKCkgOiBpbmRleDtcblxuXHRcdFx0bWFwWyBpbmRleCBdID0gcmVzdHJpY3Rpb247XG5cdFx0fVxuXG5cdFx0dGhpcy5yZXN0cmljdGlvbnMgPSBPYmplY3QudmFsdWVzKCBtYXAgKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGluZ0ludGVyZmFjZTsiLCJmdW5jdGlvbiBSZXN0cmljdGlvbkVycm9yKCBtZXNzYWdlICkge1xuXHRFcnJvci5jYWxsKCB0aGlzLCBtZXNzYWdlICk7XG5cblx0aWYgKCBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSApIHtcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSggdGhpcywgUmVzdHJpY3Rpb25FcnJvciApO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHRoaXMuc3RhY2sgPSAoXG5cdFx0XHRuZXcgRXJyb3IoKVxuXHRcdCkuc3RhY2s7XG5cdH1cbn1cblxuUmVzdHJpY3Rpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFcnJvci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdHJpY3Rpb25FcnJvcjsiLCIvKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuaW1wb3J0IEJyb3dzZXJSZXBvcnRpbmcgZnJvbSAnLi9Ccm93c2VyUmVwb3J0aW5nJztcbmltcG9ydCB7IGFsbFJlamVjdGVkIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi4vaW5wdXRzL0lucHV0RGF0YSc7XG5pbXBvcnQgTmF0aXZlUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvTmF0aXZlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IFJlcXVpcmVkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbic7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFJlcG9ydFR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnJlcG9ydGluZycsXG5cdFtcblx0XHRCcm93c2VyUmVwb3J0aW5nLFxuXHRdLFxuKTtcblxubGV0IHJlcG9ydFR5cGVzID0gW107XG5cbmNvbnN0IGdldERlZmF1bHRSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zLmRlZmF1bHQnLFxuXHRbXG5cdFx0TmF0aXZlUmVzdHJpY3Rpb24sXG5cdFx0UmVxdWlyZWRSZXN0cmljdGlvbixcblx0XSxcbik7XG5cbmxldCBkZWZhdWx0UmVzdHJpY3Rpb25zID0gW107XG5cbmZ1bmN0aW9uIGdldFByZXBhcmVkUmVwb3J0VHlwZXMoKSB7XG5cdGlmICggIXJlcG9ydFR5cGVzLmxlbmd0aCApIHtcblx0XHRyZXBvcnRUeXBlcyA9IGdldFJlcG9ydFR5cGVzKCk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5yZXBvcnRUeXBlcyBdO1xufVxuXG5mdW5jdGlvbiBnZXRQcmVwYXJlZERlZmF1bHRSZXN0cmljdGlvbnMoKSB7XG5cdGlmICggIWRlZmF1bHRSZXN0cmljdGlvbnMubGVuZ3RoICkge1xuXHRcdGRlZmF1bHRSZXN0cmljdGlvbnMgPSBnZXREZWZhdWx0UmVzdHJpY3Rpb25zKCk7XG5cdH1cblxuXHRyZXR1cm4gWyAuLi5kZWZhdWx0UmVzdHJpY3Rpb25zIF07XG59XG5cbi8qKlxuICogQHBhcmFtICByZXBvcnRpbmcge0Jyb3dzZXJSZXBvcnRpbmd9XG4gKiBAcGFyYW0gIG5vZGVcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMoIHJlcG9ydGluZywgbm9kZSApIHtcblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgZ2V0UHJlcGFyZWREZWZhdWx0UmVzdHJpY3Rpb25zKCkgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXN0cmljdGlvbigpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggbm9kZSwgcmVwb3J0aW5nICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLnB1c2goIGN1cnJlbnQgKTtcblx0fVxuXG5cdHJlcG9ydGluZy5yZXN0cmljdGlvbnMuZm9yRWFjaCggaXRlbSA9PiBpdGVtLnNldFJlcG9ydGluZyggcmVwb3J0aW5nICkgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG4gKiBAcmV0dXJuIHtBZHZhbmNlZFJlcG9ydGluZ3xCcm93c2VyUmVwb3J0aW5nfVxuICovXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnQoIGlucHV0ICkge1xuXHRmb3IgKCBjb25zdCByZXBvcnRUeXBlIG9mIGdldFByZXBhcmVkUmVwb3J0VHlwZXMoKSApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlcG9ydFR5cGUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0Lm5vZGVzWyAwIF0sIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y3VycmVudC5zZXRJbnB1dCggaW5wdXQgKTtcblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnICk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UmVwb3J0aW5nUmVnaXN0cnkoKSB7XG5cdHJlcG9ydFR5cGVzICAgICAgICAgPSBbXTtcblx0ZGVmYXVsdFJlc3RyaWN0aW9ucyA9IFtdO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gIHNpbGVuY2Uge0Jvb2xlYW59XG4gKlxuICogQHJldHVybiB7RnVuY3Rpb25bXX1cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xuXHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblxuXHRpbnB1dHM/LlsgMCBdPy5nZXRDb250ZXh0KCk/LnJlc2V0KCB7IHNpbGVuY2UgfSApO1xuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcblx0XHRpZiAoICEoXG5cdFx0XHRpbnB1dCBpbnN0YW5jZW9mIElucHV0RGF0YVxuXHRcdCkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdJbnB1dCBpcyBub3QgaW5zdGFuY2Ugb2YgSW5wdXREYXRhJyApO1xuXHRcdH1cblx0XHRjYWxsYmFja3MucHVzaChcblx0XHRcdCggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0XHRpbnB1dC5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZVN0YXRlKCkuXG5cdFx0XHRcdFx0dGhlbiggcmVzb2x2ZSApLlxuXHRcdFx0XHRcdGNhdGNoKCByZWplY3QgKTtcblx0XHRcdH0sXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiBjYWxsYmFja3M7XG59XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dHMgIHtJbnB1dERhdGFbXX1cbiAqIEBwYXJhbSAgc2lsZW5jZSB7Qm9vbGVhbn1cbiAqIEByZXR1cm4ge1Byb21pc2U8dW5rbm93bltdPn1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dHMoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0Z2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSApLm1hcChcblx0XHRcdGN1cnJlbnQgPT4gbmV3IFByb21pc2UoIGN1cnJlbnQgKSxcblx0XHQpLFxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbnB1dHMgIHtJbnB1dERhdGFbXX1cbiAqIEBwYXJhbSBzaWxlbmNlIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0c0FsbCggaW5wdXRzLCBzaWxlbmNlID0gZmFsc2UgKSB7XG5cdHJldHVybiBhbGxSZWplY3RlZCggZ2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSApICk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVJlcG9ydCxcblx0dmFsaWRhdGVJbnB1dHMsXG5cdHZhbGlkYXRlSW5wdXRzQWxsLFxuXHRjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zLFxuXHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyxcblx0cmVzZXRSZXBvcnRpbmdSZWdpc3RyeSxcbn07XG4iLCJpbXBvcnQgUmVzdHJpY3Rpb24gZnJvbSAnLi9SZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIE5hdGl2ZVJlc3RyaWN0aW9uKCkge1xuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gISFub2RlLmNoZWNrVmFsaWRpdHk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IG5vZGVzIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dDtcblxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygbm9kZXMgKSB7XG5cdFx0XHRpZiAoIG5vZGUuY2hlY2tWYWxpZGl0eSgpICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbk5hdGl2ZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOYXRpdmVSZXN0cmljdGlvbjsiLCJpbXBvcnQgUmVzdHJpY3Rpb24gZnJvbSAnLi9SZXN0cmljdGlvbic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gUmVxdWlyZWRSZXN0cmljdGlvbigpIHtcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMudHlwZSA9ICdyZXF1aXJlZCc7XG59XG5cblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdHJldHVybiByZXBvcnRpbmcuaW5wdXQuaXNSZXF1aXJlZDtcbn07XG5cblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LnZhbHVlO1xuXG5cdHJldHVybiAhaXNFbXB0eSggY3VycmVudCApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWlyZWRSZXN0cmljdGlvbjsiLCJmdW5jdGlvbiBSZXN0cmljdGlvbigpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtSZXBvcnRpbmdJbnRlcmZhY2V9XG5cdCAqL1xuXHR0aGlzLnJlcG9ydGluZyA9IG51bGw7XG5cdC8qKlxuXHQgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgcHJvcGVydHlcblx0ICogaWYgeW91IHdhbnQgdG8gbWFrZSB0aGlzIFJlc3RyaWN0aW9uIG92ZXJyaWRhYmxlXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjEuMFxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0dGhpcy50eXBlID0gJyc7XG59XG5cblJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEBwYXJhbSBub2RlICAgICAge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XG5cdCAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjEuMFxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXRUeXBlICgpIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIHJlcG9ydGluZyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuXHQgKi9cblx0c2V0UmVwb3J0aW5nICggcmVwb3J0aW5nICkge1xuXHRcdHRoaXMucmVwb3J0aW5nID0gcmVwb3J0aW5nO1xuXHR9LFxuXHRnZXRWYWx1ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVwb3J0aW5nLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdH0sXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcblx0LyoqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHR2YWxpZGF0ZSAoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAndmFsaWRhdGUgaXMgd3JvbmcnICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxuXHQgKi9cblx0YXN5bmMgdmFsaWRhdGVQcm9taXNlICgpIHtcblx0XHRsZXQgdmFsaWRhdGlvblJlc3VsdDtcblxuXHRcdHRyeSB7XG5cdFx0XHR2YWxpZGF0aW9uUmVzdWx0ID0gYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuXHRcdH1cblx0XHRjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCBlcnJvcj8ubWVzc2FnZSA/PyBlcnJvciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWxpZGF0aW9uUmVzdWx0XG5cdFx0ICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQgICAgICAgOiBQcm9taXNlLnJlamVjdCggJ3ZhbGlkYXRlIGlzIHdyb25nJyApO1xuXHR9LFxuXHRvblJlYWR5KCkge1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdHJpY3Rpb247IiwiaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuY29uc3QgeyBzdHJpY3RfbW9kZSA9IGZhbHNlIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cbmNvbnN0IFNUUklDVF9NT0RFID0gQm9vbGVhbiggc3RyaWN0X21vZGUgKTtcblxuZnVuY3Rpb24gQmFzZVNpZ25hbCgpIHtcblx0dGhpcy5pbnB1dCA9IG51bGw7XG5cdHRoaXMubG9jayAgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0dGhpcy5sb2NrLm1ha2UoKTtcblxuXHR0aGlzLnRyaWdnZXJqUXVlcnkgPSAhU1RSSUNUX01PREU7XG59XG5cbkJhc2VTaWduYWwucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGlucHV0OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0bG9jazogbnVsbCxcblx0LyoqXG5cdCAqIEBwYXJhbSAgbm9kZSAgICAgIHtIVE1MRWxlbWVudH1cblx0ICogQHBhcmFtICBpbnB1dERhdGEge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHNldElucHV0ICggaW5wdXQgKSB7XG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0O1xuXHR9LFxuXHRydW4gKCBwcmV2VmFsdWUgKSB7XG5cdFx0aWYgKCAhdGhpcy5sb2NrLmN1cnJlbnQgKSB7XG5cdFx0XHR0aGlzLnJ1blNpZ25hbCggcHJldlZhbHVlICk7XG5cdFx0XHR0aGlzLnVubG9ja1RyaWdnZXIoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMubG9jay5zaWduYWxzLmxlbmd0aCApIHtcblx0XHRcdHRoaXMubG9jay53YXRjaE9uY2UoICgpID0+IHRoaXMucnVuU2lnbmFsKCBwcmV2VmFsdWUgKSApO1xuXHRcdH1cblx0fSxcblx0dHJpZ2dlckpRdWVyeSggbm9kZSApIHtcblx0XHRpZiAoICF0aGlzLnRyaWdnZXJqUXVlcnkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGpRdWVyeSggbm9kZSApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gcHJldlZhbHVlXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRydW5TaWduYWwgKCBwcmV2VmFsdWUgKSB7XG5cdFx0Ly8geW91ciBjb2RlXG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdGxvY2tUcmlnZ2VyICgpIHtcblx0XHR0aGlzLnRyaWdnZXJqUXVlcnkgPSBmYWxzZTtcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKi9cblx0dW5sb2NrVHJpZ2dlciAoKSB7XG5cdFx0aWYgKCBTVFJJQ1RfTU9ERSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gdHJ1ZTtcblx0fSxcbn07XG5cbmV4cG9ydCB7IFNUUklDVF9NT0RFIH07XG5leHBvcnQgZGVmYXVsdCBCYXNlU2lnbmFsOyIsImltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vQmFzZVNpZ25hbCc7XG5pbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3N1cHBvcnRzJztcblxuZnVuY3Rpb24gU2lnbmFsSGlkZGVuQXJyYXkoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xufVxuXG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0cmV0dXJuIGlzSGlkZGVuKCBub2RlICkgJiYgaW5wdXREYXRhLmlzQXJyYXkoKTtcbn07XG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuXHRpZiAoICFjdXJyZW50Py5sZW5ndGggKSB7XG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLmlucHV0Lm5vZGVzICkge1xuXHRcdFx0bm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLmlucHV0Lm5vZGVzLnNwbGljZSggMCwgdGhpcy5pbnB1dC5ub2Rlcy5sZW5ndGggKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzYXZlTm9kZXMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCB2YWx1ZSBvZiBjdXJyZW50ICkge1xuXHRcdGNvbnN0IGhhc05vZGVXaXRoU2FtZVZhbHVlID0gdGhpcy5pbnB1dC5ub2Rlcy5zb21lKFxuXHRcdFx0KCBub2RlLCBpbmRleCApID0+IHtcblx0XHRcdFx0aWYgKCBub2RlLnZhbHVlICE9PSB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2F2ZU5vZGVzLnB1c2goIGluZGV4ICk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSApO1xuXG5cdFx0aWYgKCBoYXNOb2RlV2l0aFNhbWVWYWx1ZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnICk7XG5cdFx0bmV3RWxlbWVudC50eXBlICA9ICdoaWRkZW4nO1xuXHRcdG5ld0VsZW1lbnQudmFsdWUgPSB2YWx1ZTtcblx0XHRuZXdFbGVtZW50Lm5hbWUgID0gdGhpcy5pbnB1dC5yYXdOYW1lO1xuXG5cdFx0dGhpcy5pbnB1dC5ub2Rlcy5wdXNoKCBuZXdFbGVtZW50ICk7XG5cdFx0c2F2ZU5vZGVzLnB1c2goIHRoaXMuaW5wdXQubm9kZXMubGVuZ3RoIC0gMSApO1xuXG5cdFx0dGhpcy5pbnB1dC5jb21tZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0bmV3RWxlbWVudCxcblx0XHRcdHRoaXMuaW5wdXQuY29tbWVudC5uZXh0RWxlbWVudFNpYmxpbmcsXG5cdFx0KTtcblx0fVxuXG5cdHRoaXMuaW5wdXQubm9kZXMgPSB0aGlzLmlucHV0Lm5vZGVzLmZpbHRlciggKCBub2RlLCBpbmRleCApID0+IHtcblx0XHRpZiAoIHNhdmVOb2Rlcy5pbmNsdWRlcyggaW5kZXggKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRub2RlLnJlbW92ZSgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsSGlkZGVuQXJyYXk7IiwiaW1wb3J0IEJhc2VTaWduYWwgZnJvbSAnLi9CYXNlU2lnbmFsJztcbmltcG9ydCB7IGlzUmFuZ2UgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSYW5nZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqL1xuZnVuY3Rpb24gU2lnbmFsUmFuZ2UoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmFuZ2UoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cdFx0bm9kZS52YWx1ZSAgICAgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHR0aGlzLmlucHV0Lm51bWJlck5vZGUudGV4dENvbnRlbnQgPSBub2RlLnZhbHVlO1xuXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdH07XG59XG5cblNpZ25hbFJhbmdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJhbmdlOyIsImltcG9ydCBTaWduYWxIaWRkZW5BcnJheSBmcm9tICcuL1NpZ25hbEhpZGRlbkFycmF5JztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlbmRlclN0YXRlRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFNpZ25hbFJlbmRlclN0YXRlKCkge1xuXHRTaWduYWxIaWRkZW5BcnJheS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzW10nID09PSBub2RlLm5hbWU7XG5cdH07XG5cblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSApIHtcblx0XHRTaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUucnVuU2lnbmFsLmNhbGwoIHRoaXMsIHByZXZWYWx1ZSApO1xuXG5cdFx0Y29uc3QgdXJsICAgICA9IG5ldyBVUkwoIHdpbmRvdy5sb2NhdGlvbiApO1xuXHRcdGNvbnN0IGZvcm1JZCAgPSB0aGlzLmlucHV0LmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW107XG5cdFx0Y29uc3QgcGFyYW0gICA9IGBqZmJbJHsgZm9ybUlkIH1dW3N0YXRlXWA7XG5cdFx0Y29uc3Qgc3RhdGVzICA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3Qgc3RhdGVTbHVnIG9mIGN1cnJlbnQgKSB7XG5cdFx0XHRpZiAoICF0aGlzLmlucHV0LmlzQ3VzdG9tKCBzdGF0ZVNsdWcgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRlcy5wdXNoKCBzdGF0ZVNsdWcgKTtcblx0XHR9XG5cblx0XHRpZiAoICFzdGF0ZXMubGVuZ3RoICkge1xuXHRcdFx0aWYgKCAhdXJsLnNlYXJjaFBhcmFtcy5oYXMoIHBhcmFtICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoIHBhcmFtICk7XG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoIHt9LCAnJywgdXJsLnRvU3RyaW5nKCkgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmFtVmFsdWUgPSBzdGF0ZXMuam9pbiggJywnICk7XG5cdFx0aWYgKCB1cmwuc2VhcmNoUGFyYW1zLmdldCggcGFyYW0gKSA9PT0gcGFyYW1WYWx1ZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR1cmwuc2VhcmNoUGFyYW1zLnNldCggcGFyYW0sIHBhcmFtVmFsdWUgKTtcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoIHt9LCAnJywgdXJsLnRvU3RyaW5nKCkgKTtcblx0fTtcbn1cblxuU2lnbmFsUmVuZGVyU3RhdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlbmRlclN0YXRlOyIsImltcG9ydCBTaWduYWxIaWRkZW5BcnJheSBmcm9tICcuL1NpZ25hbEhpZGRlbkFycmF5JztcbmltcG9ydCBTaWduYWxSYW5nZSBmcm9tICcuL1NpZ25hbFJhbmdlJztcbmltcG9ydCBTaWduYWxSZW5kZXJTdGF0ZSBmcm9tICcuL1NpZ25hbFJlbmRlclN0YXRlJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0U2lnbmFsVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdFtcblx0XHRTaWduYWxSYW5nZSxcblx0XHRTaWduYWxSZW5kZXJTdGF0ZSxcblx0XHRTaWduYWxIaWRkZW5BcnJheSxcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUgeyhCYXNlU2lnbmFsKVtdfVxuICovXG5sZXQgc2lnbmFsVHlwZXMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0UHJlcGFyZWRTaWduYWxUeXBlcygpIHtcblx0aWYgKCAhc2lnbmFsVHlwZXMubGVuZ3RoICkge1xuXHRcdHNpZ25hbFR5cGVzID0gZ2V0U2lnbmFsVHlwZXMoKTtcblx0fVxuXG5cdHJldHVybiBbIC4uLnNpZ25hbFR5cGVzIF07XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlICB7SFRNTEVsZW1lbnR9XG4gKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG4gKiBAcmV0dXJuIHtCYXNlU2lnbmFsfVxuICovXG5mdW5jdGlvbiBnZXRTaWduYWwoIG5vZGUsIGlucHV0ICkge1xuXHRmb3IgKCBjb25zdCBzaWduYWxUeXBlIG9mIGdldFByZXBhcmVkU2lnbmFsVHlwZXMoKSApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHNpZ25hbFR5cGUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUsIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZXNldFNpZ25hbFJlZ2lzdHJ5KCkge1xuXHRzaWduYWxUeXBlcyA9IFtdO1xufVxuXG5leHBvcnQgeyBnZXRTaWduYWwsIHJlc2V0U2lnbmFsUmVnaXN0cnkgfTtcbiIsImltcG9ydCBCYXNlU3VibWl0IGZyb20gJy4vQmFzZVN1Ym1pdCc7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuaW1wb3J0IHsgaXNTdWNjZXNzU3RhdHVzIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gQWpheFN1Ym1pdCggZm9ybSApIHtcblx0QmFzZVN1Ym1pdC5jYWxsKCB0aGlzLCBmb3JtICk7XG5cblx0dGhpcy5zdGF0dXMgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0dGhpcy5zdGF0dXMubWFrZSgpO1xuXG5cdHRoaXMuc3VibWl0ICAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCAkZm9ybSAgICAgICAgICAgID0galF1ZXJ5KCB0aGlzLmZvcm0ub2JzZXJ2YWJsZS5yb290Tm9kZSApO1xuXHRcdGNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5cdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRhcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LmFqYXgucHJvbWlzZXMnLFxuXHRcdFx0XHR0aGlzLmdldFByb21pc2VzKCksXG5cdFx0XHRcdCRmb3JtLFxuXHRcdFx0KSxcblx0XHQpLnRoZW4oXG5cdFx0XHRjYWxsYmFja3MgPT4gdGhpcy5ydW5TdWJtaXQoIGNhbGxiYWNrcyApLFxuXHRcdCkuY2F0Y2goXG5cdFx0XHQoKSA9PiB0aGlzLmZvcm0udG9nZ2xlKCksXG5cdFx0KTtcblx0fTtcblx0dGhpcy5ydW5TdWJtaXQgICAgID0gZnVuY3Rpb24gKCBjYWxsYmFja3MgKSB7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSggcm9vdE5vZGUgKTtcblx0XHRmb3JtRGF0YS5hcHBlbmQoXG5cdFx0XHQnX2pldF9lbmdpbmVfYm9va2luZ19mb3JtX2lkJyxcblx0XHRcdHRoaXMuZm9ybS5nZXRGb3JtSWQoKSxcblx0XHQpO1xuXG5cdFx0Ly8gZGlzYWJsZSB3YXRjaGVyc1xuXHRcdHRoaXMuc3RhdHVzLnNpbGVuY2UoKTtcblxuXHRcdHRoaXMuc3RhdHVzLmN1cnJlbnQgPSBudWxsO1xuXG5cdFx0Ly8gZW5hYmxlIHdhdGNoZXJzXG5cdFx0dGhpcy5zdGF0dXMuc2lsZW5jZSgpO1xuXG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncy5hamF4dXJsLFxuXHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdGRhdGE6IGZvcm1EYXRhLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0Y29udGVudFR5cGU6IGZhbHNlLFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdH0gKS5kb25lKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHR0aGlzLm9uU3VjY2VzcyggcmVzcG9uc2UgKTtcblx0XHRcdFx0Y29uc3QgJGZvcm0gPSBqUXVlcnkoIHJvb3ROb2RlICk7XG5cblx0XHRcdFx0Y2FsbGJhY2tzLmZvckVhY2goIGNiID0+IHtcblx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjYiApIHtcblx0XHRcdFx0XHRcdGNiLmNhbGwoICRmb3JtLCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHQpLmZhaWwoXG5cdFx0XHR0aGlzLm9uRmFpbC5iaW5kKCB0aGlzICksXG5cdFx0KTtcblx0fTtcblx0dGhpcy5vblN1Y2Nlc3MgICAgID0gZnVuY3Rpb24gKCByZXNwb25zZSApIHtcblx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XG5cblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRcdHRoaXMubGFzdFJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0Y29uc3QgJGZvcm0gICAgICAgPSBqUXVlcnkoIHJvb3ROb2RlICk7XG5cdFx0Y29uc3QgY3NyZlRva2VuICAgPSByZXNwb25zZT8uX2pmYl9jc3JmX3Rva2VuO1xuXG5cdFx0aWYgKCBjc3JmVG9rZW4gKSB7XG5cdFx0XHR0aGlzLnJlZnJlc2hDc3JmVG9rZW4oIGNzcmZUb2tlbiApO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoIHJlc3BvbnNlLnN0YXR1cyApIHtcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci9hamF4L29uLXN1Y2Nlc3MnLFxuXHRcdFx0XHRcdFsgcmVzcG9uc2UsICRmb3JtIF0sXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWpheC9wcm9jZXNzaW5nLWVycm9yJyxcblx0XHRcdFx0XHRbIHJlc3BvbnNlLCAkZm9ybSBdXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW4gc3RhdHVzIHdhdGNoZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IHJlc3BvbnNlLnN0YXR1cztcblxuXHRcdGlmICggcmVzcG9uc2UucmVkaXJlY3QgKSB7XG5cdFx0XHRpZiAoIHJlc3BvbnNlLm9wZW5faW5fbmV3X3RhYiApIHtcblx0XHRcdFx0d2luZG93Lm9wZW4oIHJlc3BvbnNlLnJlZGlyZWN0LCAnX2JsYW5rJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UucmVkaXJlY3Q7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCByZXNwb25zZS5yZWxvYWQgKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnNlcnRNZXNzYWdlKCByZXNwb25zZS5tZXNzYWdlICk7XG5cdH07XG5cdHRoaXMub25GYWlsICAgICAgICA9IGZ1bmN0aW9uICgganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xuXHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gZmFsc2U7XG5cblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblx0XHRjb25zdCAkZm9ybSAgICAgICAgPSBqUXVlcnkoIHJvb3ROb2RlICk7XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2FqYXgvb24tZmFpbCcsXG5cdFx0XHRbIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biwgJGZvcm0gXVxuXHRcdCk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUuZXJyb3IoIGpxWEhSLnJlc3BvbnNlVGV4dCwgZXJyb3JUaHJvd24gKTtcblx0fTtcblx0dGhpcy5pbnNlcnRNZXNzYWdlID0gZnVuY3Rpb24gKCBtZXNzYWdlICkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKCAnamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyApO1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZTtcblxuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKCBub2RlICk7XG5cdH07XG5cdHRoaXMucmVmcmVzaENzcmZUb2tlbiA9IGZ1bmN0aW9uICggY3NyZlRva2VuICkge1xuXHRcdGNvbnN0IGZvcm1JZCA9IHRoaXMuZm9ybS5nZXRGb3JtSWQoKTtcblx0XHRjb25zdCBmb3JtcyAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J2Zvcm0uamV0LWZvcm0tYnVpbGRlcltkYXRhLWZvcm0taWRdJyxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3QgZm9ybU5vZGUgb2YgZm9ybXMgKSB7XG5cdFx0XHRpZiAoICtmb3JtTm9kZS5kYXRhc2V0LmZvcm1JZCAhPT0gZm9ybUlkICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY3NyZkZpZWxkcyA9IGZvcm1Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdCdpbnB1dFtuYW1lPVwiX2pmYl9jc3JmX3Rva2VuXCJdJyxcblx0XHRcdCk7XG5cblx0XHRcdGZvciAoIGNvbnN0IGZpZWxkIG9mIGNzcmZGaWVsZHMgKSB7XG5cdFx0XHRcdGZpZWxkLnZhbHVlID0gY3NyZlRva2VuO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuQWpheFN1Ym1pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU3VibWl0LnByb3RvdHlwZSApO1xuLyoqXG4gKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG4gKi9cbkFqYXhTdWJtaXQucHJvdG90eXBlLnN0YXR1cyA9IG51bGw7XG5cbkFqYXhTdWJtaXQucHJvdG90eXBlLndhdGNoUmVzZXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRpZiAoICFyb290Tm9kZS5kYXRhc2V0Py5jbGVhciApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLndhdGNoU3VjY2VzcyggY2FsbGFibGUgKTtcbn07XG5cbkFqYXhTdWJtaXQucHJvdG90eXBlLndhdGNoU3VjY2VzcyA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuXG5cdHN0YXR1cy53YXRjaCggKCkgPT4ge1xuXHRcdGlmICggaXNTdWNjZXNzU3RhdHVzKCBzdGF0dXMuY3VycmVudCApICkge1xuXHRcdFx0Y2FsbGFibGUoKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cbkFqYXhTdWJtaXQucHJvdG90eXBlLndhdGNoRmFpbCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuXG5cdHN0YXR1cy53YXRjaCggKCkgPT4ge1xuXHRcdGlmICggIWlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzLmN1cnJlbnQgKSApIHtcblx0XHRcdGNhbGxhYmxlKCk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBamF4U3VibWl0O1xuIiwiLyoqXG4gKiBAcGFyYW0gZm9ybSB7Rm9ybVN1Ym1pdH1cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBCYXNlU3VibWl0KCBmb3JtICkge1xuXHR0aGlzLmZvcm0gICAgICAgICA9IGZvcm07XG5cdHRoaXMubGFzdFJlc3BvbnNlID0ge307XG5cdHRoaXMucHJvbWlzZXMgICAgID0gW107XG59XG5cbkJhc2VTdWJtaXQucHJvdG90eXBlLnN1Ym1pdCAgICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXBsYWNlIHRoaXMgY2FsbGJhY2snICk7XG59O1xuQmFzZVN1Ym1pdC5wcm90b3R5cGUuZ2V0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnByb21pc2VzLm1hcCggKCB7IGNhbGxhYmxlIH0gKSA9PiBuZXcgUHJvbWlzZSggY2FsbGFibGUgKSApO1xufTtcbi8qKlxuICogQHBhcmFtIGNhbGxhYmxlICAgICB7RnVuY3Rpb259XG4gKiBAcGFyYW0gaW5wdXRDb250ZXh0IHtJbnB1dERhdGF8Qm9vbGVhbn1cbiAqL1xuQmFzZVN1Ym1pdC5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uICggY2FsbGFibGUsIGlucHV0Q29udGV4dCA9IGZhbHNlICkge1xuXHRjb25zdCBwYXRoU3RyID0gaW5wdXRDb250ZXh0ID8gaW5wdXRDb250ZXh0LnBhdGguam9pbiggJy4nICkgOiAnJztcblxuXHR0aGlzLnByb21pc2VzID0gdGhpcy5wcm9taXNlcy5maWx0ZXIoXG5cdFx0KCB7IGlkUGF0aCB9ICkgPT4gIWlkUGF0aCB8fCBpZFBhdGggIT09IHBhdGhTdHIsXG5cdCk7XG5cblx0dGhpcy5wcm9taXNlcy5wdXNoKCB7XG5cdFx0Y2FsbGFibGUsXG5cdFx0aWRQYXRoOiBpbnB1dENvbnRleHQgPyBpbnB1dENvbnRleHQucGF0aC5qb2luKCAnLicgKSA6ICcnLFxuXHR9ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlU3VibWl0OyIsImltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcbmltcG9ydCBBamF4U3VibWl0IGZyb20gJy4vQWpheFN1Ym1pdCc7XG5pbXBvcnQgUmVsb2FkU3VibWl0IGZyb20gJy4vUmVsb2FkU3VibWl0JztcbmltcG9ydCB7IGZvY3VzT25JbnZhbGlkSW5wdXQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgcG9wdWxhdGVJbnB1dHMgfSBmcm9tICcuLi9pbnB1dHMvZnVuY3Rpb25zJztcblxuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqIEBjbGFzc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRm9ybVN1Ym1pdCggb2JzZXJ2YWJsZSApIHtcblxuXHR0aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuXHR0aGlzLmxvY2tTdGF0ZSAgPSBuZXcgTG9hZGluZ1JlYWN0aXZlVmFyKCBmYWxzZSApO1xuXHR0aGlzLmxvY2tTdGF0ZS5tYWtlKCk7XG5cdHRoaXMuYXV0b0ZvY3VzICAgICAgICAgICAgID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmF1dG9fZm9jdXM7XG5cdHRoaXMuY2FuU3VibWl0Rm9ybSAgICAgICAgID0gdHJ1ZTtcblx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSB0cnVlO1xuXHQvKipcblx0ICogQHBhcmFtIGV2ZW50IHtFdmVudH1cblx0ICovXG5cdHRoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR0aGlzLnN1Ym1pdCgpO1xuXHR9O1xuXG5cdHRoaXMuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICggdHJ1ZSA9PT0gdGhpcy5jYW5TdWJtaXRGb3JtICkge1xuXHRcdFx0dGhpcy5jYW5TdWJtaXRGb3JtICAgICAgICAgPSBmYWxzZTtcblx0XHRcdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gZmFsc2U7XG5cblx0XHRcdHRoaXMub2JzZXJ2YWJsZS5pbnB1dHNBcmVWYWxpZCgpLnRoZW4oICgpID0+IHtcblx0XHRcdFx0dGhpcy5jbGVhckVycm9ycygpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdHRlci5zdWJtaXQoKTtcblx0XHRcdH0gKS5jYXRjaCggKCkgPT4ge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0XHRcdHRoaXMuYXV0b0ZvY3VzICYmIGZvY3VzT25JbnZhbGlkSW5wdXQoXG5cdFx0XHRcdFx0cG9wdWxhdGVJbnB1dHMoIHRoaXMub2JzZXJ2YWJsZS5nZXRJbnB1dHMoKSApLFxuXHRcdFx0XHQpO1xuXHRcdFx0fSApLmZpbmFsbHkoICgpID0+IHtcblx0XHRcdFx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gICAgICAgICA9IHRydWU7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcyApIHtcblx0XHRcdG1lc3NhZ2UucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubG9ja1N0YXRlLnRvZ2dsZSgpO1xuXHRcdHRoaXMudG9nZ2xlTG9hZGluZygpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5oYW5kbGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fVxuXHRcdCAqL1xuXHRcdGNvbnN0IGJ1dHRvbnMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fc3VibWl0Jyxcblx0XHQpO1xuXG5cdFx0dGhpcy5sb2NrU3RhdGUud2F0Y2goICgpID0+IHtcblx0XHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zICkge1xuXHRcdFx0XHRidXR0b24uZGlzYWJsZWQgPSB0aGlzLmxvY2tTdGF0ZS5jdXJyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGZhbHNlID09PSB0aGlzLmxvY2tTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHR0aGlzLnRvZ2dsZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLmNsYXNzTGlzdC50b2dnbGUoICdpcy1sb2FkaW5nJyApO1xuXHR9O1xuXG5cdHRoaXMuY3JlYXRlU3VibWl0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgY2xhc3NMaXN0IH0gPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGU7XG5cdFx0Y29uc3QgaXNBamF4ICAgICAgICA9IGNsYXNzTGlzdC5jb250YWlucyggJ3N1Ym1pdC10eXBlLWFqYXgnICk7XG5cblx0XHRyZXR1cm4gaXNBamF4ID8gbmV3IEFqYXhTdWJtaXQoIHRoaXMgKSA6IG5ldyBSZWxvYWRTdWJtaXQoIHRoaXMgKTtcblx0fTtcblxuXHR0aGlzLmdldEZvcm1JZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLm9ic2VydmFibGU7XG5cblx0XHRyZXR1cm4gK3Jvb3ROb2RlLmRhdGFzZXQuZm9ybUlkO1xuXHR9O1xuXG5cdHRoaXMub25FbmRTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHR0aGlzLnN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKVxuXHRcdD8gdGhpcy5zdWJtaXR0ZXIuc3RhdHVzLndhdGNoKCBjYWxsYWJsZSApXG5cdFx0OiB0aGlzLnN1Ym1pdHRlci5vbkZhaWxTdWJtaXQoIGNhbGxhYmxlICk7XG5cdH07XG5cblx0dGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J3N1Ym1pdCcsXG5cdFx0KCBldmVudCApID0+IHRoaXMub25TdWJtaXQoIGV2ZW50ICksXG5cdCk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtBamF4U3VibWl0fFJlbG9hZFN1Ym1pdH1cblx0ICovXG5cdHRoaXMuc3VibWl0dGVyID0gdGhpcy5jcmVhdGVTdWJtaXR0ZXIoKTtcblxuXHR0aGlzLmhhbmRsZUJ1dHRvbnMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVN1Ym1pdDsiLCJpbXBvcnQgQmFzZVN1Ym1pdCBmcm9tICcuL0Jhc2VTdWJtaXQnO1xuXG5mdW5jdGlvbiBSZWxvYWRTdWJtaXQoIGZvcm0gKSB7XG5cdEJhc2VTdWJtaXQuY2FsbCggdGhpcywgZm9ybSApO1xuXG5cdHRoaXMuZmFpbFByb21pc2VzID0gW107XG5cblx0dGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ICAgICA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXHRcdGNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5cdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRhcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LnJlbG9hZC5wcm9taXNlcycsXG5cdFx0XHRcdHRoaXMuZ2V0UHJvbWlzZXMoKSxcblx0XHRcdFx0eyB0YXJnZXQ6IHJvb3ROb2RlIH0sXG5cdFx0XHQpLFxuXHRcdCkudGhlbihcblx0XHRcdCgpID0+IHJvb3ROb2RlLnN1Ym1pdCgpLFxuXHRcdCkuY2F0Y2goICgpID0+IHtcblx0XHRcdHRoaXMuZmFpbFByb21pc2VzLmZvckVhY2goIGN1cnJlbnQgPT4gY3VycmVudCgpICk7XG5cblx0XHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblx0XHR9ICk7XG5cdH07XG5cblx0dGhpcy5vbkZhaWxTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmZhaWxQcm9taXNlcy5wdXNoKCBjYWxsYWJsZSApO1xuXHR9O1xufVxuXG5SZWxvYWRTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsb2FkU3VibWl0OyIsImZ1bmN0aW9uIGlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzICkge1xuXHRyZXR1cm4gJ3N1Y2Nlc3MnID09PSBzdGF0dXMgfHwgc3RhdHVzPy5pbmNsdWRlcyggJ2RzdWNjZXNzfCcgKTtcbn1cblxuZXhwb3J0IHsgaXNTdWNjZXNzU3RhdHVzIH07IiwiLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFuZ2VUeXBlKCBub2RlICkge1xuXHRyZXR1cm4gWyAnc2VsZWN0LW9uZScsICdyYW5nZScgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzSGlkZGVuKCBub2RlICkge1xuXHRyZXR1cm4gJ2hpZGRlbicgPT09IG5vZGUudHlwZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNSYW5nZSggbm9kZSApIHtcblx0cmV0dXJuICdyYW5nZScgPT09IG5vZGUudHlwZTtcbn1cblxuZXhwb3J0IHtcblx0aXNIaWRkZW4sXG5cdGlzUmFuZ2UsXG5cdGlzQ2hhbmdlVHlwZSxcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3R5bGVzXG5pbXBvcnQgJy4vbWFpbi5wY3NzJ1xuXG5pbXBvcnQgaW5pdEVsZW1lbnRvciBmcm9tICcuL2luaXQvaW5pdEVsZW1lbnRvcic7XG5pbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcbmltcG9ydCBSZWFjdGl2ZVNldCBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlU2V0JztcbmltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL2lucHV0cy9JbnB1dERhdGEnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCBSZXBvcnRpbmdJbnRlcmZhY2UgZnJvbSAnLi9yZXBvcnRpbmcvUmVwb3J0aW5nSW50ZXJmYWNlJztcbmltcG9ydCB7XG5cdGFsbFJlamVjdGVkLFxuXHRnZXRMYW5ndWFnZSxcblx0dG9IVE1MLFxuXHRpc0VtcHR5LFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdGlzVmlzaWJsZSwgZ2V0U2Nyb2xsUGFyZW50LCBhcHBseVVzZXJBZ2VudHMsIGlzVUEsIHJlc2V0SW5wdXRIdG1sQXR0cnNSZWdpc3RyeSxcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IFJlc3RyaWN0aW9uIGZyb20gJy4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXN0cmljdGlvbic7XG5pbXBvcnQgUmVzdHJpY3Rpb25FcnJvciBmcm9tICcuL3JlcG9ydGluZy9SZXN0cmljdGlvbkVycm9yJztcbmltcG9ydCB7XG5cdHZhbGlkYXRlSW5wdXRzLFxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXG5cdHJlc2V0UmVwb3J0aW5nUmVnaXN0cnksXG59IGZyb20gJy4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XG5cbmltcG9ydCAnLi9jYWxjLm1vZHVsZS9tYWluJztcbmltcG9ydCB7XG5cdGdldFBhcnNlZE5hbWUsXG5cdHBvcHVsYXRlSW5wdXRzLFxuXHRyZXNldElucHV0UmVnaXN0cnksXG59IGZyb20gJy4vaW5wdXRzL2Z1bmN0aW9ucyc7XG5pbXBvcnQgaW5pdEZvcm0gZnJvbSAnLi9pbml0L2luaXRGb3JtJztcbmltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9CYXNlSHRtbEF0dHInO1xuaW1wb3J0IHF1ZXJ5QnlBdHRyVmFsdWUgZnJvbSAnLi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUnO1xuaW1wb3J0IGl0ZXJhdGVDb21tZW50cyBmcm9tICcuL2h0bWwubWFjcm8vaXRlcmF0ZUNvbW1lbnRzJztcbmltcG9ydCBpdGVyYXRlSmZiQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVKZmJDb21tZW50cyc7XG5pbXBvcnQgb2JzZXJ2ZUNvbW1lbnQgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50JztcbmltcG9ydCBvYnNlcnZlTWFjcm9BdHRyIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyJztcbmltcG9ydCBSZXF1aXJlZFJlc3RyaWN0aW9uIGZyb20gJy4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXF1aXJlZFJlc3RyaWN0aW9uJztcbmltcG9ydCB7IHJlc2V0U2lnbmFsUmVnaXN0cnkgfSBmcm9tICcuL3NpZ25hbHMvZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gcmVzZXRSdW50aW1lUmVnaXN0cmllcygpIHtcblx0cmVzZXRJbnB1dEh0bWxBdHRyc1JlZ2lzdHJ5KCk7XG5cdHJlc2V0SW5wdXRSZWdpc3RyeSgpO1xuXHRyZXNldFNpZ25hbFJlZ2lzdHJ5KCk7XG5cdHJlc2V0UmVwb3J0aW5nUmVnaXN0cnkoKTtcbn1cblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxuXHQpLFxuXHRJbnB1dERhdGEsXG5cdEJhc2VTaWduYWwsXG5cdFJlYWN0aXZlVmFyLFxuXHRSZWFjdGl2ZUhvb2ssXG5cdExvYWRpbmdSZWFjdGl2ZVZhcixcblx0T2JzZXJ2YWJsZSxcblx0UmVwb3J0aW5nSW50ZXJmYWNlLFxuXHRSZXN0cmljdGlvbixcblx0UmVzdHJpY3Rpb25FcnJvcixcblx0QmFzZUh0bWxBdHRyLFxuXHRSZWFjdGl2ZVNldCxcblx0UmVxdWlyZWRSZXN0cmljdGlvbixcbn07XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA/PyB7fVxuXHQpLFxuXHRhbGxSZWplY3RlZCxcblx0Z2V0TGFuZ3VhZ2UsXG5cdHRvSFRNTCxcblx0dmFsaWRhdGVJbnB1dHMsXG5cdHZhbGlkYXRlSW5wdXRzQWxsLFxuXHRnZXRQYXJzZWROYW1lLFxuXHRpc0VtcHR5LFxuXHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyxcblx0Z2V0T2Zmc2V0VG9wLFxuXHRmb2N1c09uSW52YWxpZElucHV0LFxuXHRwb3B1bGF0ZUlucHV0cyxcblx0aXNWaXNpYmxlLFxuXHRxdWVyeUJ5QXR0clZhbHVlLFxuXHRpdGVyYXRlQ29tbWVudHMsXG5cdG9ic2VydmVNYWNyb0F0dHIsXG5cdG9ic2VydmVDb21tZW50LFxuXHRpdGVyYXRlSmZiQ29tbWVudHMsXG5cdGdldFNjcm9sbFBhcmVudCxcblx0aXNVQSxcblx0cmVzZXRSdW50aW1lUmVnaXN0cmllcyxcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgYXBwbHlVc2VyQWdlbnRzICk7XG5cbmpRdWVyeSggKCkgPT4gSmV0UGx1Z2lucy5pbml0KCkgKTtcblxuSmV0UGx1Z2lucy5idWxrQmxvY2tzSW5pdCggW1xuXHR7XG5cdFx0YmxvY2s6ICdqZXQtZm9ybXMuZm9ybS1ibG9jaycsXG5cdFx0Y2FsbGJhY2s6IGluaXRGb3JtLFxuXHRcdGNvbmRpdGlvbjogKCkgPT4gJ2xvYWRpbmcnICE9PSBkb2N1bWVudC5yZWFkeVN0YXRlLFxuXHR9LFxuXSApO1xuXG5qUXVlcnkoIHdpbmRvdyApLm9uKCAnZWxlbWVudG9yL2Zyb250ZW5kL2luaXQnLCBpbml0RWxlbWVudG9yICk7XG5cbmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgKCkgPT4ge1xuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGVbXX1cblx0ICovXG5cdGNvbnN0IGZvcm1zID0gT2JqZWN0LnZhbHVlcyggd2luZG93LkpldEZvcm1CdWlsZGVyICk7XG5cblx0Zm9yICggY29uc3Qgcm9vdCBvZiBmb3JtcyApIHtcblx0XHRpZiAoICEoIHJvb3QgaW5zdGFuY2VvZiBPYnNlcnZhYmxlICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cm9vdC5yZVF1ZXJ5VmFsdWVzKCk7XG5cdH1cbn0gKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==