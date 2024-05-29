/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/main/Observable.js":
/*!*************************************!*\
  !*** ./frontend/main/Observable.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  observe: function (root = null) {
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
    doAction('jet.fb.observe.after', this);
  },
  initFields: function () {
    for (const formElement of this.rootNode.querySelectorAll('[data-jfb-sync]')) {
      this.pushInput(formElement);
    }
  },
  initMacros: function () {
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
  initSubmitHandler: function () {
    // check is current object related for global form element
    if (this.parent) {
      return;
    }
    this.form = new _submit_FormSubmit__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  },
  initActionButtons: function () {
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
  inputsAreValid: async function () {
    const invalid = await (0,_reporting_functions__WEBPACK_IMPORTED_MODULE_7__.validateInputsAll)((0,_inputs_functions__WEBPACK_IMPORTED_MODULE_0__.populateInputs)(this.getInputs()));
    return Boolean(invalid.length) ? Promise.reject(invalid) : Promise.resolve();
  },
  watch: function (fieldName, callable) {
    const input = this.getInput(fieldName);
    if (input) {
      return input.watch(callable);
    }
    throw new Error(`dataInputs in Observable don\'t have ${fieldName} field`);
  },
  /**
   * @param node {Element}
   * @param replace {Boolean}
   */
  observeInput: function (node, replace = false) {
    const input = this.pushInput(node, replace);
    input.makeReactive();
    doAction('jet.fb.observe.input.manual', input);
  },
  makeReactiveProxy: function () {
    for (const current of this.getInputs()) {
      current.makeReactive();
    }
  },
  /**
   * @param node {Element}
   * @param replace {Boolean}
   */
  pushInput: function (node, replace = false) {
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
   * @returns {array<InputData>}
   */
  getInputs: function () {
    return Object.values(this.dataInputs);
  },
  /**
   * @returns {null|RenderStateData|InputData}
   */
  getState: function () {
    return this.getInput('_jfb_current_render_states');
  },
  /**
   * @param fieldName
   * @returns {null|InputData}
   */
  getInput: function (fieldName) {
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
  getSubmit: function () {
    return this.form ? this.form : this.parent.root.form;
  },
  getContext: function () {
    var _this$context;
    return (_this$context = this.context) !== null && _this$context !== void 0 ? _this$context : this.parent.root.context;
  },
  /**
   * @see https://github.com/Crocoblock/issues-tracker/issues/2711
   *
   * @since 3.0.8
   */
  remove: function () {
    for (const input of this.getInputs()) {
      input.onRemove();
    }
  },
  /**
   * Runs only once on window "load" event
   */
  reQueryValues: function () {
    for (const input of this.getInputs()) {
      input.reQueryValue();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);

/***/ }),

/***/ "./frontend/main/attrs/BaseHtmlAttr.js":
/*!*********************************************!*\
  !*** ./frontend/main/attrs/BaseHtmlAttr.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
   * @param input {InputData}
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
   * @param input {InputData}
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

/***/ }),

/***/ "./frontend/main/attrs/FileExtensionHtmlAttr.js":
/*!******************************************************!*\
  !*** ./frontend/main/attrs/FileExtensionHtmlAttr.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/attrs/MaxFileSizeHtmlAttr.js":
/*!****************************************************!*\
  !*** ./frontend/main/attrs/MaxFileSizeHtmlAttr.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      max_size = 1
    } = JSON.parse(input.previewsContainer.dataset.args);
    this.initial = +max_size;
  };
}
MaxFileSizeHtmlAttr.prototype = Object.create(_MaxFilesHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxFileSizeHtmlAttr);

/***/ }),

/***/ "./frontend/main/attrs/MaxFilesHtmlAttr.js":
/*!*************************************************!*\
  !*** ./frontend/main/attrs/MaxFilesHtmlAttr.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHtmlAttr */ "./frontend/main/attrs/BaseHtmlAttr.js");

function MaxFilesHtmlAttr() {
  _BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.attrName = 'max_files';

  /**
   * @param input {InputData}
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
      max_files = 1
    } = JSON.parse(input.previewsContainer.dataset.args);
    this.initial = +max_files;
  };
  this.addWatcherAttr = () => {};
}
MaxFilesHtmlAttr.prototype = Object.create(_BaseHtmlAttr__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxFilesHtmlAttr);

/***/ }),

/***/ "./frontend/main/attrs/RemainingCalcAttr.js":
/*!**************************************************!*\
  !*** ./frontend/main/attrs/RemainingCalcAttr.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/CalculatedFormula.js":
/*!********************************************************!*\
  !*** ./frontend/main/calc.module/CalculatedFormula.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _applyFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyFilters */ "./frontend/main/calc.module/applyFilters.js");
/* harmony import */ var _getFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFilters */ "./frontend/main/calc.module/getFilters.js");
/* harmony import */ var _attachConstNamespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachConstNamespace */ "./frontend/main/calc.module/attachConstNamespace.js");
/* harmony import */ var _inputs_InputData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputs/InputData */ "./frontend/main/inputs/InputData.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @param formula
 * @param root {Observable}
 * @constructor
 */





const {
  applyFilters: wpFilters,
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.custom.formula.macro', 'jet-form-builder', _attachConstNamespace__WEBPACK_IMPORTED_MODULE_2__["default"]);

/**
 * @param root {InputData|Observable}
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
  if (root instanceof _inputs_InputData__WEBPACK_IMPORTED_MODULE_3__["default"]) {
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
   * @param relatedInput {InputData}
   * @return {*}
   */
  relatedCallback(relatedInput) {
    return relatedInput.value.current;
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
  onMissingPart: function (inputMatch) {
    this.parts.push(inputMatch);
  },
  /**
   * @param current {String}
   * @return {(function(): *)|*}
   */
  observeMacro(current) {
    if (null === this.formula) {
      this.formula = current;
    }
    const [name, ...filters] = current.split('|');
    const parsedName = name.match(/[\w\-:]+/g);
    if (!parsedName) {
      return false;
    }
    const [fieldName, ...params] = parsedName;
    const relatedInput = fieldName !== 'this' ? this.root.getInput(fieldName) : this.input;
    if (!relatedInput && !fieldName.includes('::')) {
      return false;
    }
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
  calculateString() {
    var _window$JetFormBuilde;
    if (!this.parts.length) {
      return this.formula;
    }
    const {
      applyFilters: deprecatedApplyFilters = false
    } = (_window$JetFormBuilde = window?.JetFormBuilderMain?.filters) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {};
    return this.parts.map(current => {
      if ('function' !== typeof current) {
        if (!this.input?.nodes || false === deprecatedApplyFilters) {
          return current;
        }
        current = wpFilters('jet.fb.onCalculate.part', current, this);
        return deprecatedApplyFilters('forms/calculated-formula-before-value', current, jQuery(this.input.nodes[0]));
      }
      const result = current();
      return null === result || '' === result || Number.isNaN(result) ? this.emptyValue() : result;
    }).join('');
  },
  emptyValue() {
    return '';
  },
  calculate() {
    if (!this.parts.length && !this.forceFunction) {
      return this.formula;
    }
    const formula = this.calculateString();
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
  showError(formula) {
    console.group((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('JetFormBuilder: You have invalid calculated formula', 'jet-form-builder'));
    this.showErrorDetails(formula);
    console.groupEnd();
  },
  showErrorDetails(formula) {
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Initial: %s', 'jet-form-builder'), this.formula));
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Computed: %s', 'jet-form-builder'), formula));
    if (!this.input && !this.root?.parent) {
      return;
    }
    if (this.input) {
      console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Field: %s', 'jet-form-builder'), this.input.path.join('.')));
      return;
    }
    const index = this.root.parent.findIndex(this.root);
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scope: %s', 'jet-form-builder'), [...this.root.parent.path, -1 === index ? '' : index].filter(Boolean).join('.')));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedFormula);

/***/ }),

/***/ "./frontend/main/calc.module/applyFilters.js":
/*!***************************************************!*\
  !*** ./frontend/main/calc.module/applyFilters.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function applyFilters(value, filters) {
  if (null === filters || !filters?.length) {
    return value;
  }
  for (const filter of filters) {
    value = filter.applyWithProps(value);
  }
  return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyFilters);

/***/ }),

/***/ "./frontend/main/calc.module/attachConstNamespace.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/attachConstNamespace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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






const {
  applyFilters: wpApplyFilters
} = JetPlugins.hooks;
const getStaticFunctions = () => wpApplyFilters('jet.fb.static.functions', [_const_namespace_CurrentDate__WEBPACK_IMPORTED_MODULE_0__["default"], _const_namespace_Min_In_Sec__WEBPACK_IMPORTED_MODULE_1__["default"], _const_namespace_Month_In_Sec__WEBPACK_IMPORTED_MODULE_2__["default"], _const_namespace_Hour_In_Sec__WEBPACK_IMPORTED_MODULE_3__["default"], _const_namespace_Day_In_Sec__WEBPACK_IMPORTED_MODULE_4__["default"], _const_namespace_Year_In_Sec__WEBPACK_IMPORTED_MODULE_5__["default"]]);

/**
 * @type {BaseInternalMacro[]}
 */
let staticFunctions = [];

/**
 * @param slug
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
 * @param result {String}
 * @param fieldName {String}
 * @param params {String[]}
 * @return {*}
 */
function attachConstNamespace(result, fieldName, params) {
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

/***/ }),

/***/ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js":
/*!************************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/BaseInternalMacro.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function BaseInternalMacro() {}
BaseInternalMacro.prototype = {
  /**
   * @return {String}
   */
  getId: function () {
    throw new Error('You need to rewrite this method');
  },
  getResult: function () {
    throw new Error('You need to rewrite this method');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseInternalMacro);

/***/ }),

/***/ "./frontend/main/calc.module/const.namespace/CurrentDate.js":
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/CurrentDate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/const.namespace/Day_In_Sec.js":
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Day_In_Sec.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");


function Day_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Day_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Day_In_Sec;
}
Day_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day_In_Sec);

/***/ }),

/***/ "./frontend/main/calc.module/const.namespace/Hour_In_Sec.js":
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Hour_In_Sec.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");


function Hour_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Hour_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Hour_In_Sec;
}
Hour_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hour_In_Sec);

/***/ }),

/***/ "./frontend/main/calc.module/const.namespace/Min_In_Sec.js":
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Min_In_Sec.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");


function Min_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Min_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Min_In_Sec;
}
Min_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Min_In_Sec);

/***/ }),

/***/ "./frontend/main/calc.module/const.namespace/Month_In_Sec.js":
/*!*******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Month_In_Sec.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");


function Month_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Month_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Month_In_Sec;
}
Month_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Month_In_Sec);

/***/ }),

/***/ "./frontend/main/calc.module/const.namespace/Year_In_Sec.js":
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/const.namespace/Year_In_Sec.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInternalMacro */ "./frontend/main/calc.module/const.namespace/BaseInternalMacro.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./frontend/main/calc.module/constants.js");


function Year_In_Sec() {
  _BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.getId = () => 'Year_In_Sec';
  this.getResult = () => _constants__WEBPACK_IMPORTED_MODULE_1__["default"].Year_In_Sec;
}
Year_In_Sec.prototype = Object.create(_BaseInternalMacro__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Year_In_Sec);

/***/ }),

/***/ "./frontend/main/calc.module/constants.js":
/*!************************************************!*\
  !*** ./frontend/main/calc.module/constants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let Constants = {
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

/***/ }),

/***/ "./frontend/main/calc.module/filters/AddDayFilter.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddDayFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/AddHourFilter.js":
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddHourFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/AddMinFilter.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddMinFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/AddMonthFilter.js":
/*!*************************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddMonthFilter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/AddYearFilter.js":
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/AddYearFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/FallBackFilter.js":
/*!*************************************************************!*\
  !*** ./frontend/main/calc.module/filters/FallBackFilter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(value) ? value : fallback;
  };
}
FallBackFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallBackFilter);

/***/ }),

/***/ "./frontend/main/calc.module/filters/Filter.js":
/*!*****************************************************!*\
  !*** ./frontend/main/calc.module/filters/Filter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Filter() {
  this.props = [];
}

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
 * @param value
 * @param props
 * @return {*}
 */
Filter.prototype.apply = function (value, ...props) {
  return value;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./frontend/main/calc.module/filters/LengthFilter.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/LengthFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SetDayFilter.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetDayFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SetHourFilter.js":
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetHourFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SetMinFilter.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetMinFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SetMonthFilter.js":
/*!*************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetMonthFilter.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SetYearFilter.js":
/*!************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SetYearFilter.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SubtractDayFilter.js":
/*!****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractDayFilter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SubtractHourFilter.js":
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractHourFilter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SubtractMinFilter.js":
/*!****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractMinFilter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SubtractMonthFilter.js":
/*!******************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractMonthFilter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/SubtractYearFilter.js":
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/SubtractYearFilter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/TimestampFilter.js":
/*!**************************************************************!*\
  !*** ./frontend/main/calc.module/filters/TimestampFilter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/ToDateFilter.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToDateFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  this.apply = function (value) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toDate)(new Date(value));
  };
}
ToDateFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateFilter);

/***/ }),

/***/ "./frontend/main/calc.module/filters/ToDateTimeFilter.js":
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToDateTimeFilter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  this.apply = function (value) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toDateTime)(new Date(value));
  };
}
ToDateTimeFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDateTimeFilter);

/***/ }),

/***/ "./frontend/main/calc.module/filters/ToTimeFilter.js":
/*!***********************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToTimeFilter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  this.apply = function (value) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.toTime)(new Date(value));
  };
}
ToTimeFilter.prototype = Object.create(_Filter__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToTimeFilter);

/***/ }),

/***/ "./frontend/main/calc.module/functions.js":
/*!************************************************!*\
  !*** ./frontend/main/calc.module/functions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
 * @param date {Date}
 */
function toDate(date) {
  return [date.getFullYear(), zerofill(date.getMonth() + 1, 2), zerofill(date.getDate(), 2)].join('-');
}

/**
 * @param date {Date}
 */
function toTime(date) {
  return [zerofill(date.getHours(), 2), zerofill(date.getMinutes(), 2)].join(':');
}
function toDateTime(date) {
  return toDate(date) + 'T' + toTime(date);
}

/**
 * @param timeOrDate {String|Number}
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
    if (!timeOrDate.includes('T')) {
      date.setHours(0, 0, 0);
    }
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


/***/ }),

/***/ "./frontend/main/calc.module/getFilters.js":
/*!*************************************************!*\
  !*** ./frontend/main/calc.module/getFilters.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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





















const {
  applyFilters
} = JetPlugins.hooks;

/**
 * @type {array<Filter>}
 */
let filters = [];
const getFilterItems = () => applyFilters('jet.fb.filters', [_filters_SetYearFilter__WEBPACK_IMPORTED_MODULE_14__["default"], _filters_SetMonthFilter__WEBPACK_IMPORTED_MODULE_15__["default"], _filters_SetDayFilter__WEBPACK_IMPORTED_MODULE_13__["default"], _filters_SetHourFilter__WEBPACK_IMPORTED_MODULE_11__["default"], _filters_SetMinFilter__WEBPACK_IMPORTED_MODULE_12__["default"], _filters_SubtractYearFilter__WEBPACK_IMPORTED_MODULE_20__["default"], _filters_SubtractMonthFilter__WEBPACK_IMPORTED_MODULE_19__["default"], _filters_SubtractDayFilter__WEBPACK_IMPORTED_MODULE_17__["default"], _filters_SubtractHourFilter__WEBPACK_IMPORTED_MODULE_16__["default"], _filters_SubtractMinFilter__WEBPACK_IMPORTED_MODULE_18__["default"], _filters_AddYearFilter__WEBPACK_IMPORTED_MODULE_5__["default"], _filters_AddMonthFilter__WEBPACK_IMPORTED_MODULE_6__["default"], _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_7__["default"], _filters_AddHourFilter__WEBPACK_IMPORTED_MODULE_8__["default"], _filters_AddMinFilter__WEBPACK_IMPORTED_MODULE_9__["default"], _filters_LengthFilter__WEBPACK_IMPORTED_MODULE_0__["default"], _filters_FallBackFilter__WEBPACK_IMPORTED_MODULE_1__["default"], _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_2__["default"], _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_3__["default"], _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_4__["default"], _filters_TimestampFilter__WEBPACK_IMPORTED_MODULE_10__["default"]]);
let response = [];
function pushFilter(name, props = '') {
  if (!filters.length) {
    filters = getFilterItems();
  }
  let filter;
  for (let current of filters) {
    current = new current();
    if (name === current.getSlug()) {
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
  for (let filterName of filtersList) {
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

/***/ }),

/***/ "./frontend/main/calc.module/main.js":
/*!*******************************************!*\
  !*** ./frontend/main/calc.module/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/environment.js":
/*!**************************************!*\
  !*** ./frontend/main/environment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

const userAgent = navigator.userAgent;

// Safari 3.0+ "[object HTMLElementConstructor]"
const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || (p => {
  return '[object SafariRemoteNotification]' === p.toString();
})(!window.safari || typeof safari !== 'undefined' && safari.pushNotification);
const environment = {
  safari: isSafari
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environment);

/***/ }),

/***/ "./frontend/main/functions.js":
/*!************************************!*\
  !*** ./frontend/main/functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
 * @param callbacks {Function[]}
 * @return {Promise<*>}
 */
async function allRejected(callbacks) {
  const results = await Promise.allSettled(callbacks.map(current => new Promise(current)));
  if (window?.JetFormBuilderSettings?.devmode) {
    console.group('allRejected');
    console.info(...results);
    console.groupEnd();
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
  if (!inputHtmlAttrs.length) {
    inputHtmlAttrs = getInputHtmlAttr();
  }
  for (let inputHtmlAttr of inputHtmlAttrs) {
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


/***/ }),

/***/ "./frontend/main/html.macro/CalculatedHtmlString.js":
/*!**********************************************************!*\
  !*** ./frontend/main/html.macro/CalculatedHtmlString.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calc.module/CalculatedFormula */ "./frontend/main/calc.module/CalculatedFormula.js");

const {
  applyFilters
} = JetPlugins.hooks;
function CalculatedHtmlString(root, {
  withPrefix = true,
  ...options
} = {}) {
  _calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, root, options);
  if (withPrefix) {
    this.regexp = /JFB_FIELD::(.+)/gi;
  }
  this.relatedCallback = function (input) {
    let fieldValue = applyFilters('jet.fb.macro.field.value', false, jQuery(input.nodes[0]));
    fieldValue = wp?.hooks?.applyFilters ? wp.hooks.applyFilters('jet.fb.macro.field.value', fieldValue, jQuery(input.nodes[0])) : fieldValue;
    return false === fieldValue ? input.value.current : fieldValue;
  };
  this.onMissingPart = function (inputMatch) {};
}
CalculatedHtmlString.prototype = Object.create(_calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
CalculatedHtmlString.prototype.calculateString = function () {
  if (!this.parts.length) {
    return this.formula;
  }
  return this.parts.map(current => {
    if ('function' !== typeof current) {
      return current;
    }
    const result = current();
    return null === result || '' === result ? '' : result;
  }).join('');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatedHtmlString);

/***/ }),

/***/ "./frontend/main/html.macro/iterateComments.js":
/*!*****************************************************!*\
  !*** ./frontend/main/html.macro/iterateComments.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function* iterateComments(rootNode, acceptCallback = node => NodeFilter.FILTER_ACCEPT) {
  // Fourth argument, which is actually obsolete according to the
  // DOM4 standard, is required in IE 11
  const iterator = document.createNodeIterator(rootNode, NodeFilter.SHOW_COMMENT, {
    acceptNode: acceptCallback
  });
  let curNode;
  while (curNode = iterator.nextNode()) {
    curNode.nodeValue = curNode.nodeValue.trim();
    yield curNode;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iterateComments);

/***/ }),

/***/ "./frontend/main/html.macro/iterateJfbComments.js":
/*!********************************************************!*\
  !*** ./frontend/main/html.macro/iterateJfbComments.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iterateComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterateComments */ "./frontend/main/html.macro/iterateComments.js");

function* iterateJfbComments(rootNode) {
  const acceptCallback = node => {
    return node.textContent.includes('JFB_FIELD::');
  };
  yield* (0,_iterateComments__WEBPACK_IMPORTED_MODULE_0__["default"])(rootNode, acceptCallback);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iterateJfbComments);

/***/ }),

/***/ "./frontend/main/html.macro/observeComment.js":
/*!****************************************************!*\
  !*** ./frontend/main/html.macro/observeComment.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
 * @param root {Observable}
 */
function observeComment(comment, root) {
  const formula = new _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__["default"](root);
  formula.observe(comment.textContent);
  if (!formula.parts?.length) {
    console.group(__('JetFormBuilder: You have invalid html macro', 'jet-form-builder'));
    console.error(sprintf(__('Content: %s', 'jet-form-builder'), comment.textContent));
    console.groupEnd();
    formula.clearWatchers();
    return;
  }
  const wrapper = document.createElement('span');
  let prevSibling = comment.parentNode.insertBefore(wrapper, comment);
  formula.setResult = () => {
    prevSibling.innerHTML = formula.calculateString();
  };
  formula.setResult();
  comment.jfbObserved = true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeComment);

/***/ }),

/***/ "./frontend/main/html.macro/observeMacroAttr.js":
/*!******************************************************!*\
  !*** ./frontend/main/html.macro/observeMacroAttr.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedHtmlString */ "./frontend/main/html.macro/CalculatedHtmlString.js");


/**
 * @param node {Node}
 * @param attrName {string}
 * @param root {Observable}
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

/***/ }),

/***/ "./frontend/main/html.macro/observeNode.js":
/*!*************************************************!*\
  !*** ./frontend/main/html.macro/observeNode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatedHtmlString */ "./frontend/main/html.macro/CalculatedHtmlString.js");

const {
  __
} = wp.i18n;

/**
 * @param node {Node}
 * @param root {Observable}
 */
function observeNode(node, root) {
  const formula = new _CalculatedHtmlString__WEBPACK_IMPORTED_MODULE_0__["default"](root, {
    withPrefix: false
  });
  formula.observe(`%${node.dataset.jfbMacro}%`);
  if (!formula.parts?.length) {
    console.group(__('JetFormBuilder: You have invalid html macro', 'jet-form-builder'));
    console.error(sprintf(__('Content: %s', 'jet-form-builder'), node.dataset.jfbMacro));
    console.groupEnd();
    formula.clearWatchers();
    return;
  }
  node.dataset.jfbObserved = 1;
  formula.setResult = () => {
    node.innerHTML = formula.calculateString();
  };
  formula.setResult();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observeNode);

/***/ }),

/***/ "./frontend/main/html.macro/queryByAttrValue.js":
/*!******************************************************!*\
  !*** ./frontend/main/html.macro/queryByAttrValue.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/init/initElementor.js":
/*!*********************************************!*\
  !*** ./frontend/main/init/initElementor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/init/initForm.js":
/*!****************************************!*\
  !*** ./frontend/main/init/initForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  JetFormBuilder[form.dataset.formId] = observable;
  jQuery(document).trigger('jet-form-builder/init', [$scope, observable]);
  observable.observe(form);
  jQuery(document).trigger('jet-form-builder/after-init', [$scope, observable]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initForm);

/***/ }),

/***/ "./frontend/main/inputs/ChangeData.js":
/*!********************************************!*\
  !*** ./frontend/main/inputs/ChangeData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    !_signals_BaseSignal__WEBPACK_IMPORTED_MODULE_3__.STRICT_MODE && jQuery(node).on('change', event => {
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

/***/ }),

/***/ "./frontend/main/inputs/InputData.js":
/*!*******************************************!*\
  !*** ./frontend/main/inputs/InputData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
 * @property {string} rawName
 * @property {string} name
 * @property {Node|boolean} comment
 * @property {HTMLInputElement|*[]} nodes
 * @property {ReactiveVar} value
 * @property {ConditionChecker|null} checker
 * @property {*} calcValue
 * @property {AdvancedReporting|BrowserReporting} reporting
 * @property {Observable} root
 * @property {PageState} page
 * @property {LoadingReactiveVar} loading
 * @property {Object<ReactiveVar>} attrs
 * @property {boolean} isRequired
 * @property {null|ReactiveHook} enterKey
 * @property {null|string} inputType
 *
 * @constructor
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
   * @type {Array<String|Number>}
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
}
InputData.prototype.attrs = {};

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
InputData.prototype.isSupported = function (node) {
  return false;
};
InputData.prototype.addListeners = function () {
  const [node] = this.nodes;
  node.addEventListener('input', event => {
    this.value.current = event.target.value;
  });
  node.addEventListener('blur', event => {
    this.reportOnBlur();
  });

  /**
   * @since 3.0.1
   */
  !_signals_BaseSignal__WEBPACK_IMPORTED_MODULE_7__.STRICT_MODE && jQuery(node).on('change', event => {
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
InputData.prototype.reportOnBlur = function () {
  this.reporting.validateOnBlur();
};
/**
 * @param callable
 * @returns {(function(): *|*[])|*}
 */
InputData.prototype.watch = function (callable) {
  return this.value.watch(callable);
};
InputData.prototype.watchValidity = function (callable) {
  return this.reporting.validityState.watch(callable);
};
/**
 * @param callable
 * @returns {(function(): *|*[])|*}
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
  let value;
  if (this.isArray()) {
    value = Array.from(this.nodes).map(({
      value
    }) => value);
  } else {
    value = this.nodes[0]?.value;
  }
  this.calcValue = value;
  this.value.current = value;
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
  node.readOnly = this.loading.current;
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
 * @returns {string}
 */
InputData.prototype.getName = function () {
  return this.name;
};
/**
 * @returns {array|string|boolean}
 */
InputData.prototype.getValue = function () {
  return this.value.current;
};
/**
 * @returns {array}
 */
InputData.prototype.getNode = function () {
  return this.nodes;
};
/**
 * @returns {boolean}
 */
InputData.prototype.isArray = function () {
  return this.rawName.includes('[]');
};
/**
 * @param callable {Function|mixed}
 * @param inputContext {InputData|Boolean}
 */
InputData.prototype.beforeSubmit = function (callable, inputContext = false) {
  this.getSubmit().submitter.promise(callable, inputContext);
};
/**
 * @returns {FormSubmit}
 */
InputData.prototype.getSubmit = function () {
  return this.getRoot().form;
};
/**
 * @returns {Observable}
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
   * @link https://github.com/Crocoblock/issues-tracker/issues/1261#issuecomment-1293290291
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
 * @returns {*}
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
    this.getSubmit().submit();
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
 * @returns {boolean}
 */
InputData.prototype.hasAutoScroll = function () {
  return true;
};

/**
 * @returns {HTMLInputElement|HTMLElement}
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputData);

/***/ }),

/***/ "./frontend/main/inputs/NoListenData.js":
/*!**********************************************!*\
  !*** ./frontend/main/inputs/NoListenData.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/inputs/RangeData.js":
/*!*******************************************!*\
  !*** ./frontend/main/inputs/RangeData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/inputs/RenderStateData.js":
/*!*************************************************!*\
  !*** ./frontend/main/inputs/RenderStateData.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
 * @property {ReactiveSet} value
 *
 * @constructor
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
   * @param force {null|Boolean}
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

/***/ }),

/***/ "./frontend/main/inputs/functions.js":
/*!*******************************************!*\
  !*** ./frontend/main/inputs/functions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   getParsedName: () => (/* binding */ getParsedName),
/* harmony export */   populateInputs: () => (/* binding */ populateInputs)
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

/**
 * @param node
 * @param observable {Observable}
 * @returns {*}
 */
function createInput(node, observable) {
  if (!dataTypes.length) {
    dataTypes = getDataTypes();
  }
  for (const dataType of dataTypes) {
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
  console.error('Something went wrong', node);
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
    inner?.length && list.push(...inner);
    list.push(input);
  }
  return list;
}


/***/ }),

/***/ "./frontend/main/reactive/LoadingReactiveVar.js":
/*!******************************************************!*\
  !*** ./frontend/main/reactive/LoadingReactiveVar.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReactiveVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");
/**
 * @this {ReactiveVar}
 *
 * @constructor
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

/***/ }),

/***/ "./frontend/main/reactive/ReactiveHook.js":
/*!************************************************!*\
  !*** ./frontend/main/reactive/ReactiveHook.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/reactive/ReactiveSet.js":
/*!***********************************************!*\
  !*** ./frontend/main/reactive/ReactiveSet.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/reactive/ReactiveVar.js":
/*!***********************************************!*\
  !*** ./frontend/main/reactive/ReactiveVar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  watchOnce: function (callable) {
    if ('function' !== typeof callable) {
      return;
    }
    const clearWatcher = this.watch(() => {
      clearWatcher();
      callable();
    });
  },
  watch: function (callable) {
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
  sanitize: function (callable) {
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
  make: function () {
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
          console.group('ReactiveVar has changed');
          console.log('current:', current);
          console.log('newVal:', newVal);
          console.groupEnd();
          debugger;
        }
        current = self.applySanitizers(newVal);
        if (self.isSilence) {
          return;
        }
        self.notify(prevValue);
      }
    });
  },
  notify: function (prevValue = null) {
    this.signals.forEach(({
      signal
    }) => signal.call(this, prevValue));
  },
  applySanitizers: function (value) {
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

/***/ }),

/***/ "./frontend/main/reporting/BrowserReporting.js":
/*!*****************************************************!*\
  !*** ./frontend/main/reporting/BrowserReporting.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportingInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportingInterface */ "./frontend/main/reporting/ReportingInterface.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./frontend/main/functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./frontend/main/reporting/functions.js");



function BrowserReporting() {
  _ReportingInterface__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, input) {
    return true;
  };
  this.reportRaw = function (validationErrors) {};
  this.reportFirst = function (validationErrors) {
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
    this.validate().then(() => {}).catch(() => {});
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
   * @returns {HTMLInputElement|HTMLElement}
   */
  this.getNode = function () {
    return this.input.getReportingNode();
  };
}
BrowserReporting.prototype = Object.create(_ReportingInterface__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowserReporting);

/***/ }),

/***/ "./frontend/main/reporting/ReportingContext.js":
/*!*****************************************************!*\
  !*** ./frontend/main/reporting/ReportingContext.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/reporting/ReportingInterface.js":
/*!*******************************************************!*\
  !*** ./frontend/main/reporting/ReportingInterface.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
 *
 */


function ReportingInterface() {
  /**
   * @type {InputData}
   */
  this.input = null;
  this.isRequired = false;
  /**
   * @type {array|null}
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
  validateOnChange: function () {},
  validateOnBlur: function () {},
  /**
   * Runs on trying to submit form
   * @see Observable.inputsAreValid
   *
   * Runs on changing value, if this field inside page
   * @see InputData.setPage
   * @see PageState.updateState
   *
   * @returns {Promise<boolean>}
   */
  validate: async function () {
    const errors = await this.getErrors();
    this.validityState.current = !Boolean(errors.length);
    if (!errors.length) {
      this.clearReport();
      return true;
    }
    !this.input.root.getContext().silence && this.report(errors);
    throw new _RestrictionError__WEBPACK_IMPORTED_MODULE_0__["default"](errors[0].name);
  },
  /**
   * @param promises {Function[]}
   * @return {Promise<array|null>}
   */
  getErrorsRaw: async function (promises) {
    throw new Error('getError must return a Promise');
  },
  /**
   * @return {Promise<array|*[]|null>}
   */
  getErrors: async function () {
    if (this.input.loading.current || this.input?.callable?.lock?.current || !this.input.isVisible()) {
      return [];
    }
    const promises = this.getPromises();
    if (!this.hasChangedValue() && this.promisesCount === promises.length) {
      var _this$errors;
      return (_this$errors = this.errors) !== null && _this$errors !== void 0 ? _this$errors : [];
    }
    this.promisesCount = promises.length;
    this.errors = [];
    if (!promises.length) {
      return this.errors;
    }
    this.errors = await this.getErrorsRaw(promises);
    return this.errors;
  },
  report: function (validationErrors) {
    if (this.input.getContext().reportedFirst) {
      this.reportRaw(validationErrors);
      return;
    }
    this.input.getContext().reportFirst();
    this.reportFirst(validationErrors);
  },
  /**
   * @param validationErrors {Restriction[]}
   * @return void
   */
  reportRaw: function (validationErrors) {
    throw new Error('report is empty');
  },
  reportFirst: function (validationErrors) {
    this.report(validationErrors);
  },
  clearReport: function () {
    throw new Error('clearReport is empty');
  },
  getPromises: function () {
    const promises = [];
    for (const restriction of this.restrictions) {
      if (!this.canProcessRestriction(restriction)) {
        continue;
      }
      this.beforeProcessRestriction(restriction);
      promises.push((resolve, reject) => {
        restriction.validatePromise().then(() => resolve(restriction)).catch(error => reject([restriction, error]));
      });
    }
    return promises;
  },
  /**
   * @param restriction {Restriction}
   * @return {Boolean}
   */
  canProcessRestriction: function (restriction) {
    return true;
  },
  /**
   * @param restriction {Restriction}
   */
  beforeProcessRestriction: function (restriction) {},
  /**
   * @param node
   * @param input
   *
   * @return {boolean}
   */
  isSupported: function (node, input) {
    throw new Error('isSupported is empty');
  },
  /**
   * @param input {InputData}
   */
  setInput: function (input) {
    this.validityState = new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.validityState.make();
    this.input = input;
    this.setRestrictions();
    this.filterRestrictions();
  },
  setRestrictions: function () {},
  /**
   * @return {HTMLInputElement|HTMLElement}
   */
  getNode: function () {
    return this.input.nodes[0];
  },
  hasChangedValue: function () {
    return this.valuePrev !== this.input.getValue();
  },
  /**
   * @returns {Promise<*>}
   */
  checkValidity: function () {
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
    !isSilence && this.report(this.errors || []);
    return Promise.reject();
  },
  /**
   * @since 3.0.1
   *
   * @return {boolean}
   */
  hasAutoScroll: function () {
    return false;
  },
  /**
   * With the help of filters that add new restrictions,
   * you can overwrite a particular restriction
   * if the "type" property is defined in it
   */
  filterRestrictions: function () {
    const map = {};
    for (let [index, restriction] of Object.entries(this.restrictions)) {
      index = restriction.getType() ? restriction.getType() : index;
      map[index] = restriction;
    }
    this.restrictions = Object.values(map);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportingInterface);

/***/ }),

/***/ "./frontend/main/reporting/RestrictionError.js":
/*!*****************************************************!*\
  !*** ./frontend/main/reporting/RestrictionError.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/reporting/functions.js":
/*!**********************************************!*\
  !*** ./frontend/main/reporting/functions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultRestrictions: () => (/* binding */ createDefaultRestrictions),
/* harmony export */   createReport: () => (/* binding */ createReport),
/* harmony export */   getValidateCallbacks: () => (/* binding */ getValidateCallbacks),
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

/**
 * @param reporting {BrowserReporting}
 * @param node
 * @returns {*}
 */
function createDefaultRestrictions(reporting, node) {
  if (!defaultRestrictions.length) {
    defaultRestrictions = getDefaultRestrictions();
  }
  for (const restriction of defaultRestrictions) {
    const current = new restriction();
    if (!current.isSupported(node, reporting)) {
      continue;
    }
    reporting.restrictions.push(current);
  }
  reporting.restrictions.forEach(item => item.setReporting(reporting));
}

/**
 * @param input {InputData}
 * @return {AdvancedReporting|BrowserReporting}
 */
function createReport(input) {
  if (!reportTypes.length) {
    reportTypes = getReportTypes();
  }
  for (const reportType of reportTypes) {
    const current = new reportType();
    if (!current.isSupported(input.nodes[0], input)) {
      continue;
    }
    current.setInput(input);
    return current;
  }
  throw new Error('Something went wrong');
}

/**
 * @param inputs {InputData[]}
 * @param silence {Boolean}
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
      console.group('Input is not instance of InputData');
      console.error(input);
      console.groupEnd();
      continue;
    }
    callbacks.push((resolve, reject) => {
      input.reporting.validateOnChangeState().then(resolve).catch(reject);
    });
  }
  return callbacks;
}

/**
 * @param inputs {InputData[]}
 * @param silence {Boolean}
 * @return {Promise<unknown[]>}
 */
function validateInputs(inputs, silence = false) {
  return Promise.all(getValidateCallbacks(inputs, silence).map(current => new Promise(current)));
}

/**
 * @param inputs {InputData[]}
 * @param silence {Boolean}
 */
function validateInputsAll(inputs, silence = false) {
  return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.allRejected)(getValidateCallbacks(inputs, silence));
}


/***/ }),

/***/ "./frontend/main/reporting/restrictions/NativeRestriction.js":
/*!*******************************************************************!*\
  !*** ./frontend/main/reporting/restrictions/NativeRestriction.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Restriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Restriction */ "./frontend/main/reporting/restrictions/Restriction.js");

function NativeRestriction() {
  _Restriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, reporting) {
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

/***/ }),

/***/ "./frontend/main/reporting/restrictions/RequiredRestriction.js":
/*!*********************************************************************!*\
  !*** ./frontend/main/reporting/restrictions/RequiredRestriction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/reporting/restrictions/Restriction.js":
/*!*************************************************************!*\
  !*** ./frontend/main/reporting/restrictions/Restriction.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
   * @param node {HTMLElement|HTMLInputElement}
   * @param reporting {ReportingInterface}
   */
  isSupported: function (node, reporting) {
    return true;
  },
  /**
   * @since 3.1.0
   * @returns {string}
   */
  getType: function () {
    return this.type;
  },
  /**
   * @param reporting {ReportingInterface}
   */
  setReporting: function (reporting) {
    this.reporting = reporting;
  },
  getValue: function () {
    return this.reporting.input.value.current;
  },
  /**
   * @returns {boolean}
   */
  validate: function () {
    throw new Error('validate is wrong');
  },
  /**
   * @return {Promise<*>}
   */
  validatePromise: async function () {
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

/***/ }),

/***/ "./frontend/main/signals/BaseSignal.js":
/*!*********************************************!*\
  !*** ./frontend/main/signals/BaseSignal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
   * @param node {HTMLElement}
   * @param inputData {InputData}
   * @returns {boolean}
   */
  isSupported: function (node, inputData) {
    return false;
  },
  setInput: function (input) {
    this.input = input;
  },
  run: function (prevValue) {
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
   * @protected
   */
  runSignal: function (prevValue) {
    // your code
  },
  /**
   * @since 3.0.1
   */
  lockTrigger: function () {
    this.triggerjQuery = false;
  },
  /**
   * @since 3.0.1
   */
  unlockTrigger: function () {
    if (STRICT_MODE) {
      return;
    }
    this.triggerjQuery = true;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseSignal);

/***/ }),

/***/ "./frontend/main/signals/SignalHiddenArray.js":
/*!****************************************************!*\
  !*** ./frontend/main/signals/SignalHiddenArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/signals/SignalRange.js":
/*!**********************************************!*\
  !*** ./frontend/main/signals/SignalRange.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseSignal */ "./frontend/main/signals/BaseSignal.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supports */ "./frontend/main/supports.js");



/**
 * @property {RangeData} input
 */
function SignalRange() {
  _BaseSignal__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, inputData) {
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

/***/ }),

/***/ "./frontend/main/signals/SignalRenderState.js":
/*!****************************************************!*\
  !*** ./frontend/main/signals/SignalRenderState.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignalHiddenArray */ "./frontend/main/signals/SignalHiddenArray.js");


/**
 * @property {RenderStateData} input
 * @constructor
 */
function SignalRenderState() {
  _SignalHiddenArray__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.isSupported = function (node, input) {
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

/***/ }),

/***/ "./frontend/main/signals/functions.js":
/*!********************************************!*\
  !*** ./frontend/main/signals/functions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSignal: () => (/* binding */ getSignal)
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

/**
 * @param node {HTMLElement}
 * @param input {InputData}
 * @return {BaseSignal}
 */
function getSignal(node, input) {
  if (!signalTypes.length) {
    signalTypes = getSignalTypes();
  }
  for (const signalType of signalTypes) {
    const current = new signalType();
    if (!current.isSupported(node, input)) {
      continue;
    }
    return current;
  }
  return null;
}


/***/ }),

/***/ "./frontend/main/submit/AjaxSubmit.js":
/*!********************************************!*\
  !*** ./frontend/main/submit/AjaxSubmit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseSubmit */ "./frontend/main/submit/BaseSubmit.js");
/* harmony import */ var _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactive/ReactiveVar */ "./frontend/main/reactive/ReactiveVar.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./frontend/main/submit/functions.js");



function AjaxSubmit(form) {
  _BaseSubmit__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, form);
  this.status = new _reactive_ReactiveVar__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.status.make();
  this.submit = function () {
    const $form = jQuery(this.form.observable.rootNode);
    const {
      applyFilters
    } = JetPlugins.hooks;
    Promise.all(applyFilters('jet.fb.submit.ajax.promises', this.getPromises(), $form)).then(callbacks => this.runSubmit(callbacks)).catch(errors => this.form.toggle());
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
    switch (response.status) {
      case 'success':
        jQuery(document).trigger('jet-form-builder/ajax/on-success', [response, $form]);
        break;
    }
    /**
     * Run status watchers
     */
    this.status.current = response.status;
    if (response.redirect) {
      window.location = response.redirect;
    } else if (response.reload) {
      window.location.reload();
    }
    this.insertMessage(response.message);
  };
  this.onFail = function (jqXHR, textStatus, errorThrown) {
    this.form.toggle();
    this.status.current = false;
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

/***/ }),

/***/ "./frontend/main/submit/BaseSubmit.js":
/*!********************************************!*\
  !*** ./frontend/main/submit/BaseSubmit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param form {FormSubmit}
 * @constructor
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
 * @param callable {Function}
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

/***/ }),

/***/ "./frontend/main/submit/FormSubmit.js":
/*!********************************************!*\
  !*** ./frontend/main/submit/FormSubmit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
 * @constructor
 */
function FormSubmit(observable) {
  this.observable = observable;
  this.lockState = new _reactive_LoadingReactiveVar__WEBPACK_IMPORTED_MODULE_0__["default"](false);
  this.lockState.make();
  this.autoFocus = window.JetFormBuilderSettings?.auto_focus;

  /**
   * @param event {Event}
   */
  this.onSubmit = function (event) {
    event.preventDefault();
    this.submit();
  };
  this.submit = function () {
    this.observable.inputsAreValid().then(() => {
      this.clearErrors();
      this.toggle();
      this.submitter.submit();
    }).catch(() => {
      this.autoFocus && (0,_functions__WEBPACK_IMPORTED_MODULE_3__.focusOnInvalidInput)((0,_inputs_functions__WEBPACK_IMPORTED_MODULE_4__.populateInputs)(this.observable.getInputs()));
    });
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

/***/ }),

/***/ "./frontend/main/submit/ReloadSubmit.js":
/*!**********************************************!*\
  !*** ./frontend/main/submit/ReloadSubmit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/submit/functions.js":
/*!*******************************************!*\
  !*** ./frontend/main/submit/functions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSuccessStatus: () => (/* binding */ isSuccessStatus)
/* harmony export */ });
function isSuccessStatus(status) {
  return 'success' === status || status?.includes('dsuccess|');
}


/***/ }),

/***/ "./frontend/main/supports.js":
/*!***********************************!*\
  !*** ./frontend/main/supports.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isChangeType: () => (/* binding */ isChangeType),
/* harmony export */   isHidden: () => (/* binding */ isHidden),
/* harmony export */   isRange: () => (/* binding */ isRange)
/* harmony export */ });
/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isChangeType(node) {
  return ['select-one', 'range'].includes(node.type);
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isHidden(node) {
  return 'hidden' === node.type;
}

/**
 * @param node {HTMLElement}
 * @returns {boolean}
 */
function isRange(node) {
  return 'range' === node.type;
}


/***/ }),

/***/ "./frontend/main/main.pcss":
/*!*********************************!*\
  !*** ./frontend/main/main.pcss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
var _window$JetFormBuilde, _window$JetFormBuilde2;
// styles
























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
  isUA: _functions__WEBPACK_IMPORTED_MODULE_10__.isUA
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
  const forms = Object.values(JetFormBuilder);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDL1JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUVBO0FBU0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBT0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNkQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUtBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL0Jhc2VIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL0ZpbGVFeHRlbnNpb25IdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL01heEZpbGVTaXplSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9NYXhGaWxlc0h0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvUmVtYWluaW5nQ2FsY0F0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9DYWxjdWxhdGVkRm9ybXVsYS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2FwcGx5RmlsdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2F0dGFjaENvbnN0TmFtZXNwYWNlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0Jhc2VJbnRlcm5hbE1hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0N1cnJlbnREYXRlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0RheV9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvSG91cl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvTWluX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9Nb250aF9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvWWVhcl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkSG91ckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkTWluRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkWWVhckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvRmFsbEJhY2tGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXREYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0TW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0TWluRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RpbWVzdGFtcEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXRlRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub1RpbWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9nZXRGaWx0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvbWFpbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9DYWxjdWxhdGVkSHRtbFN0cmluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vaXRlcmF0ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlTm9kZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2luaXQvaW5pdEVsZW1lbnRvci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2luaXQvaW5pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvQ2hhbmdlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9JbnB1dERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvTm9MaXN0ZW5EYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL1JhbmdlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9SZW5kZXJTdGF0ZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVIb29rLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVTZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZVZhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9Ccm93c2VyUmVwb3J0aW5nLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1JlcG9ydGluZ0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVwb3J0aW5nSW50ZXJmYWNlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1Jlc3RyaWN0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9OYXRpdmVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL0Jhc2VTaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbEhpZGRlbkFycmF5LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxSYW5nZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsUmVuZGVyU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9BamF4U3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0Jhc2VTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9SZWxvYWRTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VwcG9ydHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9tYWluLnBjc3M/NzYwZCIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSW5wdXQsIHBvcHVsYXRlSW5wdXRzIH0gZnJvbSAnLi9pbnB1dHMvZnVuY3Rpb25zJztcclxuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi9zdWJtaXQvRm9ybVN1Ym1pdCc7XHJcbmltcG9ydCBxdWVyeUJ5QXR0clZhbHVlIGZyb20gJy4vaHRtbC5tYWNyby9xdWVyeUJ5QXR0clZhbHVlJztcclxuaW1wb3J0IGl0ZXJhdGVKZmJDb21tZW50cyBmcm9tICcuL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzJztcclxuaW1wb3J0IG9ic2VydmVDb21tZW50IGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudCc7XHJcbmltcG9ydCBvYnNlcnZlTWFjcm9BdHRyIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyJztcclxuaW1wb3J0IG9ic2VydmVOb2RlIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTm9kZSc7XHJcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXRzQWxsIH0gZnJvbSAnLi9yZXBvcnRpbmcvZnVuY3Rpb25zJztcclxuaW1wb3J0IFJlcG9ydGluZ0NvbnRleHQgZnJvbSAnLi9yZXBvcnRpbmcvUmVwb3J0aW5nQ29udGV4dCc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgZG9BY3Rpb24sXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuZnVuY3Rpb24gT2JzZXJ2YWJsZSggcGFyZW50ID0gbnVsbCApIHtcclxuXHR0aGlzLnBhcmVudCAgICAgPSBwYXJlbnQ7XHJcblx0dGhpcy5kYXRhSW5wdXRzID0ge307XHJcblx0dGhpcy5mb3JtICAgICAgID0gbnVsbDtcclxuXHR0aGlzLm11bHRpc3RlcCAgPSBudWxsO1xyXG5cdHRoaXMucm9vdE5vZGUgICA9IG51bGw7XHJcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuMVxyXG5cdCAqXHJcblx0ICogQHR5cGUge1JlcG9ydGluZ0NvbnRleHR9XHJcblx0ICovXHJcblx0dGhpcy5jb250ZXh0ID0gdGhpcy5wYXJlbnQgPyBudWxsIDogbmV3IFJlcG9ydGluZ0NvbnRleHQoIHRoaXMgKTtcclxufVxyXG5cclxuT2JzZXJ2YWJsZS5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlcGVhdGVyRGF0YXxudWxsfVxyXG5cdCAqL1xyXG5cdHBhcmVudDogbnVsbCxcclxuXHQvKipcclxuXHQgKiB7XHJcblx0ICogICAgIFtmaWVsZF9uYW1lXToge0lucHV0RGF0YX1cclxuXHQgKiB9XHJcblx0ICovXHJcblx0ZGF0YUlucHV0czoge30sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtGb3JtU3VibWl0fVxyXG5cdCAqL1xyXG5cdGZvcm06IG51bGwsXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtNdWx0aVN0ZXBTdGF0ZX1cclxuXHQgKi9cclxuXHRtdWx0aXN0ZXA6IG51bGwsXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MRm9ybUVsZW1lbnR9XHJcblx0ICovXHJcblx0cm9vdE5vZGU6IG51bGwsXHJcblx0aXNPYnNlcnZlZDogZmFsc2UsXHJcblx0b2JzZXJ2ZTogZnVuY3Rpb24gKCByb290ID0gbnVsbCApIHtcclxuXHRcdGlmICggdGhpcy5pc09ic2VydmVkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoIG51bGwgIT09IHJvb3QgKSB7XHJcblx0XHRcdHRoaXMucm9vdE5vZGUgPSByb290O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pc09ic2VydmVkID0gdHJ1ZTtcclxuXHJcblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmJlZm9yZScsIHRoaXMgKTtcclxuXHJcblx0XHR0aGlzLmluaXRTdWJtaXRIYW5kbGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbml0aWFsaXplIGRhdGFJbnB1dHMgd2l0aCBmaWVsZHMuXHJcblx0XHQgKiBXaXRob3V0IHZhbHVlc1xyXG5cdFx0ICovXHJcblx0XHR0aGlzLmluaXRGaWVsZHMoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldHVwIGZpZWxkcyB2YWx1ZXMgYW5kIG1ha2UgdGhlbSByZWFjdGl2ZVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm1ha2VSZWFjdGl2ZVByb3h5KCk7XHJcblxyXG5cdFx0dGhpcy5pbml0TWFjcm9zKCk7XHJcblxyXG5cdFx0dGhpcy5pbml0QWN0aW9uQnV0dG9ucygpO1xyXG5cclxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuYWZ0ZXInLCB0aGlzICk7XHJcblx0fSxcclxuXHJcblx0aW5pdEZpZWxkczogZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICggY29uc3QgZm9ybUVsZW1lbnQgb2YgdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnW2RhdGEtamZiLXN5bmNdJyxcclxuXHRcdCkgKSB7XHJcblx0XHRcdHRoaXMucHVzaElucHV0KCBmb3JtRWxlbWVudCApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGluaXRNYWNyb3M6IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIG1hY3JvcyBhcyBodG1sLWNvbW1lbnRzXHJcblx0XHRmb3IgKFxyXG5cdFx0XHRjb25zdCBjb21tZW50IG9mIGl0ZXJhdGVKZmJDb21tZW50cyggdGhpcy5yb290Tm9kZSApXHJcblx0XHRcdCkge1xyXG5cdFx0XHRvYnNlcnZlQ29tbWVudCggY29tbWVudCwgdGhpcyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1hY3JvcyBpbiBkZWZhdWx0IGF0dHJpYnV0ZXNcclxuXHRcdGNvbnN0IG5vZGVzV2l0aEF0dHJzID0gcXVlcnlCeUF0dHJWYWx1ZSggdGhpcy5yb290Tm9kZSwgJ0pGQl9GSUVMRDo6JyApO1xyXG5cclxuXHRcdGNvbnN0IHsgcmVwbGFjZUF0dHJzID0gW10gfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGVXaXRoQXR0ciBvZiBub2Rlc1dpdGhBdHRycyApIHtcclxuXHRcdFx0Zm9yICggY29uc3QgcmVwbGFjZUF0dHIgb2YgcmVwbGFjZUF0dHJzICkge1xyXG5cdFx0XHRcdG9ic2VydmVNYWNyb0F0dHIoIG5vZGVXaXRoQXR0ciwgcmVwbGFjZUF0dHIsIHRoaXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1hY3JvcyBpbiBkYXRhLWpmYi1tYWNybyBhdHRyaWJ1dGVcclxuXHRcdC8vIHJlc3VsdCB3aWxsIHBsYWNlZCBpbnNpZGUgcmVsYXRpdmUgbm9kZVxyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdCdbZGF0YS1qZmItbWFjcm9dOm5vdChbZGF0YS1qZmItb2JzZXJ2ZWRdKScsXHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygbm9kZXMgKSB7XHJcblx0XHRcdG9ic2VydmVOb2RlKCBub2RlLCB0aGlzICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0aW5pdFN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIGNoZWNrIGlzIGN1cnJlbnQgb2JqZWN0IHJlbGF0ZWQgZm9yIGdsb2JhbCBmb3JtIGVsZW1lbnRcclxuXHRcdGlmICggdGhpcy5wYXJlbnQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybVN1Ym1pdCggdGhpcyApO1xyXG5cdH0sXHJcblxyXG5cdGluaXRBY3Rpb25CdXR0b25zOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIHRoaXMucGFyZW50ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRmb3IgKCBjb25zdCBidXR0b24gb2YgdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2J1dHRvbi1zd2l0Y2gtc3RhdGUnLFxyXG5cdFx0KSApIHtcclxuXHRcdFx0bGV0IHN0YXRlcztcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRzdGF0ZXMgPSBKU09OLnBhcnNlKCBidXR0b24uZGF0YXNldC5zd2l0Y2hPbiApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5nZXRTdGF0ZSgpLnZhbHVlLmN1cnJlbnQgPSBzdGF0ZXM7XHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFByb21pc2U8bmV2ZXI+fFByb21pc2U8dm9pZD4+fVxyXG5cdCAqL1xyXG5cdGlucHV0c0FyZVZhbGlkOiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBpbnZhbGlkID0gYXdhaXQgdmFsaWRhdGVJbnB1dHNBbGwoXHJcblx0XHRcdHBvcHVsYXRlSW5wdXRzKCB0aGlzLmdldElucHV0cygpICksXHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiBCb29sZWFuKCBpbnZhbGlkLmxlbmd0aCApXHJcblx0XHQgICAgICAgPyBQcm9taXNlLnJlamVjdCggaW52YWxpZCApXHJcblx0XHQgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHR9LFxyXG5cclxuXHR3YXRjaDogZnVuY3Rpb24gKCBmaWVsZE5hbWUsIGNhbGxhYmxlICkge1xyXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCBmaWVsZE5hbWUgKTtcclxuXHJcblx0XHRpZiAoIGlucHV0ICkge1xyXG5cdFx0XHRyZXR1cm4gaW5wdXQud2F0Y2goIGNhbGxhYmxlICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRgZGF0YUlucHV0cyBpbiBPYnNlcnZhYmxlIGRvblxcJ3QgaGF2ZSAkeyBmaWVsZE5hbWUgfSBmaWVsZGAsXHJcblx0XHQpO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxyXG5cdCAqIEBwYXJhbSByZXBsYWNlIHtCb29sZWFufVxyXG5cdCAqL1xyXG5cdG9ic2VydmVJbnB1dDogZnVuY3Rpb24gKCBub2RlLCByZXBsYWNlID0gZmFsc2UgKSB7XHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucHVzaElucHV0KCBub2RlLCByZXBsYWNlICk7XHJcblxyXG5cdFx0aW5wdXQubWFrZVJlYWN0aXZlKCk7XHJcblxyXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5pbnB1dC5tYW51YWwnLCBpbnB1dCApO1xyXG5cdH0sXHJcblxyXG5cdG1ha2VSZWFjdGl2ZVByb3h5OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKCBjb25zdCBjdXJyZW50IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XHJcblx0XHRcdGN1cnJlbnQubWFrZVJlYWN0aXZlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XHJcblx0ICogQHBhcmFtIHJlcGxhY2Uge0Jvb2xlYW59XHJcblx0ICovXHJcblx0cHVzaElucHV0OiBmdW5jdGlvbiAoIG5vZGUsIHJlcGxhY2UgPSBmYWxzZSApIHtcclxuXHRcdC8vIHByZXZlbnQgc2F2aW5nIGlucHV0cyBmcm9tIHByZXNldCByZXBlYXRlciBpdGVtcyBpbiByb290IG9iamVjdFxyXG5cdFx0Ly8gdGhvc2UgaW5wdXRzIHdvdWxkIHNhdmVkIGluIE9ic2VydmFibGVSb3cgb2JqZWN0XHJcblxyXG5cdFx0aWYgKCAhdGhpcy5wYXJlbnQgJiZcclxuXHRcdFx0bm9kZS5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicgKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnB1dERhdGEgPSBjcmVhdGVJbnB1dCggbm9kZSwgdGhpcyApO1xyXG5cdFx0Y29uc3QgZmluZElucHV0ID0gdGhpcy5kYXRhSW5wdXRzWyBpbnB1dERhdGEuZ2V0TmFtZSgpIF0gPz8gZmFsc2U7XHJcblxyXG5cdFx0aWYgKCBmYWxzZSA9PT0gZmluZElucHV0IHx8IHJlcGxhY2UgKSB7XHJcblx0XHRcdHRoaXMuZGF0YUlucHV0c1sgaW5wdXREYXRhLmdldE5hbWUoKSBdID0gaW5wdXREYXRhO1xyXG5cclxuXHRcdFx0cmV0dXJuIGlucHV0RGF0YTtcclxuXHRcdH1cclxuXHJcblx0XHRmaW5kSW5wdXQubWVyZ2UoIGlucHV0RGF0YSApO1xyXG5cclxuXHRcdHJldHVybiBmaW5kSW5wdXQ7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge2FycmF5PElucHV0RGF0YT59XHJcblx0ICovXHJcblx0Z2V0SW5wdXRzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyggdGhpcy5kYXRhSW5wdXRzICk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge251bGx8UmVuZGVyU3RhdGVEYXRhfElucHV0RGF0YX1cclxuXHQgKi9cclxuXHRnZXRTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0SW5wdXQoICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlcycgKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gZmllbGROYW1lXHJcblx0ICogQHJldHVybnMge251bGx8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGdldElucHV0OiBmdW5jdGlvbiAoIGZpZWxkTmFtZSApIHtcclxuXHRcdGlmICggdGhpcy5kYXRhSW5wdXRzLmhhc093blByb3BlcnR5KCBmaWVsZE5hbWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XHJcblx0XHR9XHJcblx0XHRjb25zdCByb290ID0gdGhpcy5wYXJlbnQ/LnJvb3QgPz8gbnVsbDtcclxuXHJcblx0XHRpZiAoICFyb290ICkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHJvb3QuZGF0YUlucHV0cy5oYXNPd25Qcm9wZXJ0eSggZmllbGROYW1lICkgKSB7XHJcblx0XHRcdHJldHVybiByb290LmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH0sXHJcblx0Z2V0U3VibWl0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtID8gdGhpcy5mb3JtIDogdGhpcy5wYXJlbnQucm9vdC5mb3JtO1xyXG5cdH0sXHJcblx0Z2V0Q29udGV4dDogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dCA/PyB0aGlzLnBhcmVudC5yb290LmNvbnRleHQ7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNzExXHJcblx0ICpcclxuXHQgKiBAc2luY2UgMy4wLjhcclxuXHQgKi9cclxuXHRyZW1vdmU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XHJcblx0XHRcdGlucHV0Lm9uUmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBSdW5zIG9ubHkgb25jZSBvbiB3aW5kb3cgXCJsb2FkXCIgZXZlbnRcclxuXHQgKi9cclxuXHRyZVF1ZXJ5VmFsdWVzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xyXG5cdFx0XHRpbnB1dC5yZVF1ZXJ5VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlOyIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XHJcblxyXG5mdW5jdGlvbiBCYXNlSHRtbEF0dHIoKSB7XHJcblx0dGhpcy5hdHRyTmFtZSAgID0gJyc7XHJcblx0dGhpcy5pbml0aWFsICAgID0gbnVsbDtcclxuXHR0aGlzLmlzRnJvbURhdGEgPSBmYWxzZTtcclxuXHR0aGlzLnZhbHVlICAgICAgPSBudWxsO1xyXG59XHJcblxyXG5CYXNlSHRtbEF0dHIucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIE5hbWUgb2YgZGF0YSBhdHRyaWJ1dGVcclxuXHQgKi9cclxuXHRhdHRyTmFtZTogJycsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRpbnB1dDogbnVsbCxcclxuXHRpbml0aWFsOiBudWxsLFxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cclxuXHQgKi9cclxuXHR2YWx1ZTogbnVsbCxcclxuXHRvYnNlcnZlKCkge1xyXG5cdFx0dGhpcy52YWx1ZSA9IG5ldyBSZWFjdGl2ZVZhciggdGhpcy5pbml0aWFsICk7XHJcblx0XHR0aGlzLnZhbHVlLm1ha2UoKTtcclxuXHJcblx0XHR0aGlzLmFkZFdhdGNoZXJBdHRyKCk7XHJcblx0fSxcclxuXHRub2RlU2lnbmFsKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdG5vZGVbIHRoaXMuYXR0ck5hbWUgXSA9IHRoaXMudmFsdWUuY3VycmVudDtcclxuXHR9LFxyXG5cdGFkZFdhdGNoZXJBdHRyKCkge1xyXG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5ub2RlU2lnbmFsKCkgKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIElmIHlvdSBuZWVkIHNwZWNpZmljIGNoZWNrLFxyXG5cdCAqIHlvdSBjYW4gcmV3cml0ZSB0aGlzIGZ1bmN0aW9uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGlzU3VwcG9ydGVkKCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0Y29uc3QgaGFzSW5Sb290ICAgID0gLTEgIT09IG5vZGVbIHRoaXMuYXR0ck5hbWUgXSA/PyAtMTtcclxuXHRcdGNvbnN0IGhhc0luRGF0YVNldCA9IG5vZGUuZGF0YXNldC5oYXNPd25Qcm9wZXJ0eSggdGhpcy5hdHRyTmFtZSApO1xyXG5cclxuXHRcdGlmICggIWhhc0luRGF0YVNldCAmJiAhaGFzSW5Sb290ICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbml0aWFsID0gdGhpcy5nZXRJbml0aWFsKCBpbnB1dCApO1xyXG5cclxuXHRcdHJldHVybiBCb29sZWFuKCB0aGlzLmluaXRpYWwgKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqIEByZXR1cm4geyp8Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRnZXRJbml0aWFsKCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0cmV0dXJuIG5vZGUuZGF0YXNldFsgdGhpcy5hdHRyTmFtZSBdIHx8IG5vZGVbIHRoaXMuYXR0ck5hbWUgXSB8fCBmYWxzZTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRzZXRJbnB1dCggaW5wdXQgKSB7XHJcblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VIdG1sQXR0cjsiLCJpbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL01heEZpbGVzSHRtbEF0dHInO1xyXG5cclxuZnVuY3Rpb24gRmlsZUV4dGVuc2lvbkh0bWxBdHRyKCkge1xyXG5cdE1heEZpbGVzSHRtbEF0dHIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmF0dHJOYW1lID0gJ2ZpbGVfZXh0JztcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZSAmJiBCb29sZWFuKCBub2RlLmFjY2VwdCApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0TWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0dGhpcy5pbml0aWFsID0gbm9kZS5hY2NlcHQuc3BsaXQoICcsJyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHRub2RlLmFjY2VwdCA9IHRoaXMudmFsdWUuY3VycmVudC5qb2luKCAnLCcgKTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG59XHJcblxyXG5GaWxlRXh0ZW5zaW9uSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVFeHRlbnNpb25IdG1sQXR0cjsiLCJpbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL01heEZpbGVzSHRtbEF0dHInO1xyXG5cclxuZnVuY3Rpb24gTWF4RmlsZVNpemVIdG1sQXR0cigpIHtcclxuXHRNYXhGaWxlc0h0bWxBdHRyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5hdHRyTmFtZSA9ICdtYXhfc2l6ZSc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0TWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcclxuXHJcblx0XHRjb25zdCB7IG1heF9zaXplID0gMSB9ID0gSlNPTi5wYXJzZShcclxuXHRcdFx0aW5wdXQucHJldmlld3NDb250YWluZXIuZGF0YXNldC5hcmdzLFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmluaXRpYWwgPSArbWF4X3NpemU7XHJcblx0fTtcclxufVxyXG5cclxuTWF4RmlsZVNpemVIdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZVNpemVIdG1sQXR0cjsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vQmFzZUh0bWxBdHRyJztcclxuXHJcbmZ1bmN0aW9uIE1heEZpbGVzSHRtbEF0dHIoKSB7XHJcblx0QmFzZUh0bWxBdHRyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5hdHRyTmFtZSA9ICdtYXhfZmlsZXMnO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcclxuXHJcblx0XHRyZXR1cm4gJ2ZpbGUnID09PSBub2RlLnR5cGU7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XHJcblxyXG5cdFx0Y29uc3QgeyBtYXhfZmlsZXMgPSAxIH0gPSBKU09OLnBhcnNlKFxyXG5cdFx0XHRpbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5kYXRhc2V0LmFyZ3MsXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuaW5pdGlhbCA9ICttYXhfZmlsZXM7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9ICgpID0+IHt9O1xyXG59XHJcblxyXG5NYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VIdG1sQXR0ci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1heEZpbGVzSHRtbEF0dHI7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL0Jhc2VIdG1sQXR0cic7XHJcblxyXG5mdW5jdGlvbiBSZW1haW5pbmdDYWxjQXR0cigpIHtcclxuXHRCYXNlSHRtbEF0dHIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmF0dHJOYW1lID0gJ3JlbWFpbmluZyc7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuIGlucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCAnbWF4TGVuZ3RoJyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xyXG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IGlucHV0LmF0dHJzO1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IGlucHV0LnZhbHVlLmN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xyXG5cclxuXHRcdHRoaXMuaW5pdGlhbCA9IG1heExlbmd0aC52YWx1ZS5jdXJyZW50IC0gY3VycmVudDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gKCkgPT4ge307XHJcblxyXG5cdHRoaXMub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy51cGRhdGVBdHRyKCkgKTtcclxuXHRcdHRoaXMuaW5wdXQuYXR0cnMubWF4TGVuZ3RoLnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUF0dHIoKSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudXBkYXRlQXR0ciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoIH0gPSB0aGlzLmlucHV0LmF0dHJzO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgICAgICA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudD8ubGVuZ3RoID8/IDA7XHJcblxyXG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gbWF4TGVuZ3RoLnZhbHVlLmN1cnJlbnQgLSBjdXJyZW50O1xyXG5cdH07XHJcbn1cclxuXHJcblJlbWFpbmluZ0NhbGNBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VIdG1sQXR0ci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbWFpbmluZ0NhbGNBdHRyOyIsIi8qKlxyXG4gKiBAcGFyYW0gZm9ybXVsYVxyXG4gKiBAcGFyYW0gcm9vdCB7T2JzZXJ2YWJsZX1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5pbXBvcnQgYXBwbHlGaWx0ZXJzIGZyb20gJy4vYXBwbHlGaWx0ZXJzJztcclxuaW1wb3J0IGdldEZpbHRlcnMgZnJvbSAnLi9nZXRGaWx0ZXJzJztcclxuaW1wb3J0IGF0dGFjaENvbnN0TmFtZXNwYWNlIGZyb20gJy4vYXR0YWNoQ29uc3ROYW1lc3BhY2UnO1xyXG5pbXBvcnQgSW5wdXREYXRhIGZyb20gJy4uL2lucHV0cy9JbnB1dERhdGEnO1xyXG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnM6IHdwRmlsdGVycyxcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuY3VzdG9tLmZvcm11bGEubWFjcm8nLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRhdHRhY2hDb25zdE5hbWVzcGFjZSxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gcm9vdCB7SW5wdXREYXRhfE9ic2VydmFibGV9XHJcbiAqIEBwYXJhbSBvcHRpb25zIHt7Zm9yY2VGdW5jdGlvbjogYm9vbGVhbn19XHJcbiAqL1xyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRm9ybXVsYShcclxuXHRyb290LFxyXG5cdG9wdGlvbnMgPSB7fSxcclxuKSB7XHJcblx0dGhpcy5wYXJ0cyAgICAgICAgPSBbXTtcclxuXHR0aGlzLnJlbGF0ZWQgICAgICA9IFtdO1xyXG5cdHRoaXMucmVsYXRlZEF0dHJzID0gW107XHJcblx0dGhpcy5yZWdleHAgICAgICAgPSAvJShbXFx3XFwtXS4qP1xcUz8pJS9nO1xyXG5cdHRoaXMud2F0Y2hlcnMgICAgID0gW107XHJcblxyXG5cdGNvbnN0IHsgZm9yY2VGdW5jdGlvbiA9IGZhbHNlIH0gPSBvcHRpb25zO1xyXG5cclxuXHR0aGlzLmZvcmNlRnVuY3Rpb24gPSBmb3JjZUZ1bmN0aW9uO1xyXG5cclxuXHRpZiAoIHJvb3QgaW5zdGFuY2VvZiBJbnB1dERhdGEgKSB7XHJcblx0XHR0aGlzLmlucHV0ID0gcm9vdDtcclxuXHR9XHJcblxyXG5cdHRoaXMucm9vdCA9IHRoaXMuaW5wdXQ/LnJvb3QgPz8gcm9vdDtcclxufVxyXG5cclxuQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlID0ge1xyXG5cdC8vIHJhdyB2YWx1ZVxyXG5cdGZvcm11bGE6IG51bGwsXHJcblx0cGFydHM6IFtdLFxyXG5cdHJlbGF0ZWQ6IFtdLFxyXG5cdHJlbGF0ZWRBdHRyczogW10sXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRpbnB1dDogbnVsbCxcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZXxPYnNlcnZhYmxlUm93fVxyXG5cdCAqL1xyXG5cdHJvb3Q6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlZ0V4cH1cclxuXHQgKi9cclxuXHRyZWdleHA6IG51bGwsXHJcblx0Zm9yY2VGdW5jdGlvbjogZmFsc2UsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0Z1bmN0aW9ufVxyXG5cdCAqL1xyXG5cdHNldFJlc3VsdDogKCkgPT4ge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnQ2FsY3VsYXRlZEZvcm11bGEuc2V0UmVzdWx0IGlzIG5vdCBzZXQhJyApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gcmVsYXRlZElucHV0IHtJbnB1dERhdGF9XHJcblx0ICogQHJldHVybiB7Kn1cclxuXHQgKi9cclxuXHRyZWxhdGVkQ2FsbGJhY2soIHJlbGF0ZWRJbnB1dCApIHtcclxuXHRcdHJldHVybiByZWxhdGVkSW5wdXQudmFsdWUuY3VycmVudDtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHZhbHVlXHJcblx0ICovXHJcblx0b2JzZXJ2ZSggdmFsdWUgKSB7XHJcblx0XHR0aGlzLmZvcm11bGEgPSB2YWx1ZTtcclxuXHJcblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCB2YWx1ZSApO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhbHVlLmZvckVhY2goIGl0ZW0gPT4ge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCBpdGVtICk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSB2YWx1ZSB7U3RyaW5nfVxyXG5cdCAqL1xyXG5cdG9ic2VydmVJdGVtKCB2YWx1ZSApIHtcclxuXHRcdGxldCBtYXRjaDtcclxuXHRcdGxldCBwcmV2SW5kZXggPSAwO1xyXG5cclxuXHRcdHZhbHVlICs9ICcnO1xyXG5cclxuXHRcdHdoaWxlICggKFxyXG5cdFx0XHRtYXRjaCA9IHRoaXMucmVnZXhwLmV4ZWMoIHZhbHVlIClcclxuXHRcdCkgIT09IG51bGwgKSB7XHJcblx0XHRcdGNvbnN0IHBhcnQgPSB0aGlzLm9ic2VydmVNYWNybyggbWF0Y2hbIDEgXSApO1xyXG5cclxuXHRcdFx0aWYgKCAwICE9PSBtYXRjaC5pbmRleCApIHtcclxuXHRcdFx0XHR0aGlzLnBhcnRzLnB1c2goIHZhbHVlLnNsaWNlKCBwcmV2SW5kZXgsIG1hdGNoLmluZGV4ICkgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cHJldkluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsgMCBdLmxlbmd0aDtcclxuXHJcblx0XHRcdGlmICggZmFsc2UgPT09IHBhcnQgKSB7XHJcblx0XHRcdFx0dGhpcy5vbk1pc3NpbmdQYXJ0KCBtYXRjaFsgMCBdICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5wYXJ0cy5wdXNoKCBwYXJ0ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBzYXZlIGxhc3QgcGFydFxyXG5cdFx0aWYgKCBwcmV2SW5kZXggPT09IHZhbHVlLmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFydHMucHVzaCggdmFsdWUuc2xpY2UoIHByZXZJbmRleCApICk7XHJcblxyXG5cdFx0aWYgKCAxID09PSB0aGlzLnBhcnRzLmxlbmd0aCApIHtcclxuXHRcdFx0dGhpcy5wYXJ0cyA9IFtdO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0TWF0Y2gge1N0cmluZ31cclxuXHQgKi9cclxuXHRvbk1pc3NpbmdQYXJ0OiBmdW5jdGlvbiAoIGlucHV0TWF0Y2ggKSB7XHJcblx0XHR0aGlzLnBhcnRzLnB1c2goIGlucHV0TWF0Y2ggKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBjdXJyZW50IHtTdHJpbmd9XHJcblx0ICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICopfCp9XHJcblx0ICovXHJcblx0b2JzZXJ2ZU1hY3JvKCBjdXJyZW50ICkge1xyXG5cdFx0aWYgKCBudWxsID09PSB0aGlzLmZvcm11bGEgKSB7XHJcblx0XHRcdHRoaXMuZm9ybXVsYSA9IGN1cnJlbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgWyBuYW1lLCAuLi5maWx0ZXJzIF0gPSBjdXJyZW50LnNwbGl0KCAnfCcgKTtcclxuXHRcdGNvbnN0IHBhcnNlZE5hbWUgICAgICAgICAgID0gbmFtZS5tYXRjaCggL1tcXHdcXC06XSsvZyApO1xyXG5cclxuXHRcdGlmICggIXBhcnNlZE5hbWUgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBbIGZpZWxkTmFtZSwgLi4ucGFyYW1zIF0gPSBwYXJzZWROYW1lO1xyXG5cclxuXHRcdGNvbnN0IHJlbGF0ZWRJbnB1dCA9IGZpZWxkTmFtZSAhPT0gJ3RoaXMnXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucm9vdC5nZXRJbnB1dCggZmllbGROYW1lIClcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dDtcclxuXHJcblx0XHRpZiAoICFyZWxhdGVkSW5wdXQgJiYgIWZpZWxkTmFtZS5pbmNsdWRlcyggJzo6JyApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZmlsdGVyc0xpc3QgPSBnZXRGaWx0ZXJzKCBmaWx0ZXJzICk7XHJcblxyXG5cdFx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcclxuXHRcdFx0Y29uc3QgY3VzdG9tVmFsdWUgPSB3cEZpbHRlcnMoXHJcblx0XHRcdFx0J2pldC5mYi5jdXN0b20uZm9ybXVsYS5tYWNybycsXHJcblx0XHRcdFx0ZmFsc2UsXHJcblx0XHRcdFx0ZmllbGROYW1lLFxyXG5cdFx0XHRcdHBhcmFtcyxcclxuXHRcdFx0XHR0aGlzLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VzdG9tVmFsdWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21WYWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKCBjdXN0b21WYWx1ZSgpLCBmaWx0ZXJzTGlzdCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCBjdXN0b21WYWx1ZSwgZmlsdGVyc0xpc3QgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICF0aGlzLnJlbGF0ZWQuaW5jbHVkZXMoIHJlbGF0ZWRJbnB1dC5uYW1lICkgKSB7XHJcblx0XHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xyXG5cclxuXHRcdFx0dGhpcy53YXRjaGVycy5wdXNoKFxyXG5cdFx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggIXBhcmFtcz8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSxcclxuXHRcdFx0XHRmaWx0ZXJzTGlzdCxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBbIGF0dHJOYW1lIF0gPSBwYXJhbXM7XHJcblxyXG5cdFx0aWYgKCAhcmVsYXRlZElucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCBhdHRyTmFtZSApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtCYXNlSHRtbEF0dHJ9XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGh0bWxBdHRyID0gcmVsYXRlZElucHV0LmF0dHJzWyBhdHRyTmFtZSBdO1xyXG5cclxuXHRcdGlmICggIXRoaXMucmVsYXRlZEF0dHJzLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICkgKSB7XHJcblx0XHRcdHRoaXMucmVsYXRlZEF0dHJzLnB1c2goIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKTtcclxuXHJcblx0XHRcdHRoaXMud2F0Y2hlcnMucHVzaChcclxuXHRcdFx0XHRodG1sQXR0ci52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoIGh0bWxBdHRyLnZhbHVlLmN1cnJlbnQsIGZpbHRlcnNMaXN0ICk7XHJcblx0fSxcclxuXHRjYWxjdWxhdGVTdHJpbmcoKSB7XHJcblx0XHRpZiAoICF0aGlzLnBhcnRzLmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybXVsYTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxyXG5cdFx0ICAgICAgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJNYWluPy5maWx0ZXJzID8/IHt9O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnBhcnRzLm1hcCggY3VycmVudCA9PiB7XHJcblx0XHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGN1cnJlbnQgKSB7XHJcblx0XHRcdFx0aWYgKCAhdGhpcy5pbnB1dD8ubm9kZXMgfHwgZmFsc2UgPT09IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3VycmVudCA9IHdwRmlsdGVycyhcclxuXHRcdFx0XHRcdCdqZXQuZmIub25DYWxjdWxhdGUucGFydCcsXHJcblx0XHRcdFx0XHRjdXJyZW50LFxyXG5cdFx0XHRcdFx0dGhpcyxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHJldHVybiBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdFx0J2Zvcm1zL2NhbGN1bGF0ZWQtZm9ybXVsYS1iZWZvcmUtdmFsdWUnLFxyXG5cdFx0XHRcdFx0Y3VycmVudCxcclxuXHRcdFx0XHRcdGpRdWVyeSggdGhpcy5pbnB1dC5ub2Rlc1sgMCBdICksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBjdXJyZW50KCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdCAgICAgICBudWxsID09PSByZXN1bHQgfHxcclxuXHRcdFx0XHQgICAgICAgJycgPT09IHJlc3VsdCB8fFxyXG5cdFx0XHRcdCAgICAgICBOdW1iZXIuaXNOYU4oIHJlc3VsdCApXHJcblx0XHRcdCAgICAgICApID8gdGhpcy5lbXB0eVZhbHVlKCkgOiByZXN1bHQ7XHJcblx0XHR9ICkuam9pbiggJycgKTtcclxuXHR9LFxyXG5cdGVtcHR5VmFsdWUoKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fSxcclxuXHRjYWxjdWxhdGUoKSB7XHJcblx0XHRpZiAoICF0aGlzLnBhcnRzLmxlbmd0aCAmJiAhdGhpcy5mb3JjZUZ1bmN0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZm9ybXVsYSA9IHRoaXMuY2FsY3VsYXRlU3RyaW5nKCk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRuZXcgRnVuY3Rpb24oICdyZXR1cm4gJyArIGZvcm11bGEgKVxyXG5cdFx0XHQpKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHQvL2NvbnNvbGUuZXJyb3IoIGVycm9yICk7XHJcblx0XHRcdHRoaXMuc2hvd0Vycm9yKCBmb3JtdWxhICk7XHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0Y2xlYXJXYXRjaGVycygpIHtcclxuXHRcdHRoaXMud2F0Y2hlcnMuZm9yRWFjaChcclxuXHRcdFx0Y3VycmVudCA9PiAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VycmVudCAmJiBjdXJyZW50KCksXHJcblx0XHQpO1xyXG5cdFx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcclxuXHRcdHRoaXMucmVsYXRlZEF0dHJzID0gW107XHJcblx0XHR0aGlzLnJlbGF0ZWQgICAgICA9IFtdO1xyXG5cdH0sXHJcblx0c2hvd0Vycm9yKCBmb3JtdWxhICkge1xyXG5cdFx0Y29uc29sZS5ncm91cChcclxuXHRcdFx0X18oXHJcblx0XHRcdFx0J0pldEZvcm1CdWlsZGVyOiBZb3UgaGF2ZSBpbnZhbGlkIGNhbGN1bGF0ZWQgZm9ybXVsYScsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLnNob3dFcnJvckRldGFpbHMoIGZvcm11bGEgKTtcclxuXHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fSxcclxuXHRzaG93RXJyb3JEZXRhaWxzKCBmb3JtdWxhICkge1xyXG5cdFx0Y29uc29sZS5lcnJvcihcclxuXHRcdFx0c3ByaW50ZihcclxuXHRcdFx0XHRfXyggJ0luaXRpYWw6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdFx0dGhpcy5mb3JtdWxhLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0X18oICdDb21wdXRlZDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRmb3JtdWxhLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoICF0aGlzLmlucHV0ICYmICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdGhpcy5pbnB1dCApIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcclxuXHRcdFx0XHRzcHJpbnRmKFxyXG5cdFx0XHRcdFx0X18oICdGaWVsZDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRcdHRoaXMuaW5wdXQucGF0aC5qb2luKCAnLicgKSxcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5yb290LnBhcmVudC5maW5kSW5kZXgoIHRoaXMucm9vdCApO1xyXG5cclxuXHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0X18oICdTY29wZTogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQuLi50aGlzLnJvb3QucGFyZW50LnBhdGgsXHJcblx0XHRcdFx0XHQtMSA9PT0gaW5kZXggPyAnJyA6IGluZGV4LFxyXG5cdFx0XHRcdF0uZmlsdGVyKCBCb29sZWFuICkuam9pbiggJy4nICksXHJcblx0XHRcdCksXHJcblx0XHQpO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdGVkRm9ybXVsYTsiLCJmdW5jdGlvbiBhcHBseUZpbHRlcnMoIHZhbHVlLCBmaWx0ZXJzICkge1xyXG5cdGlmICggbnVsbCA9PT0gZmlsdGVycyB8fCAhZmlsdGVycz8ubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHRmb3IgKCBjb25zdCBmaWx0ZXIgb2YgZmlsdGVycyApIHtcclxuXHRcdHZhbHVlID0gZmlsdGVyLmFwcGx5V2l0aFByb3BzKCB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBseUZpbHRlcnM7IiwiaW1wb3J0IEN1cnJlbnREYXRlIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0N1cnJlbnREYXRlJztcclxuaW1wb3J0IE1pbl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvTWluX0luX1NlYyc7XHJcbmltcG9ydCBNb250aF9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvTW9udGhfSW5fU2VjJztcclxuaW1wb3J0IEhvdXJfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0hvdXJfSW5fU2VjJztcclxuaW1wb3J0IERheV9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvRGF5X0luX1NlYyc7XHJcbmltcG9ydCBZZWFyX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9ZZWFyX0luX1NlYyc7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVyczogd3BBcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCBnZXRTdGF0aWNGdW5jdGlvbnMgPSAoKSA9PiB3cEFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLnN0YXRpYy5mdW5jdGlvbnMnLFxyXG5cdFtcclxuXHRcdEN1cnJlbnREYXRlLFxyXG5cdFx0TWluX0luX1NlYyxcclxuXHRcdE1vbnRoX0luX1NlYyxcclxuXHRcdEhvdXJfSW5fU2VjLFxyXG5cdFx0RGF5X0luX1NlYyxcclxuXHRcdFllYXJfSW5fU2VjLFxyXG5cdF0sXHJcbik7XHJcblxyXG4vKipcclxuICogQHR5cGUge0Jhc2VJbnRlcm5hbE1hY3JvW119XHJcbiAqL1xyXG5sZXQgc3RhdGljRnVuY3Rpb25zID0gW107XHJcblxyXG4vKipcclxuICogQHBhcmFtIHNsdWdcclxuICogQHJldHVybiB7Ym9vbGVhbnxCYXNlSW50ZXJuYWxNYWNyb31cclxuICovXHJcbmZ1bmN0aW9uIGdldEZ1bmN0aW9uKCBzbHVnICkge1xyXG5cdGlmICggIXN0YXRpY0Z1bmN0aW9ucy5sZW5ndGggKSB7XHJcblx0XHRzdGF0aWNGdW5jdGlvbnMgPSBnZXRTdGF0aWNGdW5jdGlvbnMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IHN0YXRpY0Z1bmN0aW9uIG9mIHN0YXRpY0Z1bmN0aW9ucyApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgc3RhdGljRnVuY3Rpb24oKTtcclxuXHJcblx0XHRpZiAoIGN1cnJlbnQuZ2V0SWQoKSAhPT0gc2x1ZyApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY3VycmVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSByZXN1bHQge1N0cmluZ31cclxuICogQHBhcmFtIGZpZWxkTmFtZSB7U3RyaW5nfVxyXG4gKiBAcGFyYW0gcGFyYW1zIHtTdHJpbmdbXX1cclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGF0dGFjaENvbnN0TmFtZXNwYWNlKFxyXG5cdHJlc3VsdCxcclxuXHRmaWVsZE5hbWUsXHJcblx0cGFyYW1zLFxyXG4pIHtcclxuXHRpZiAoICFmaWVsZE5hbWUuaW5jbHVkZXMoICdDVDo6JyApICkge1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblx0ZmllbGROYW1lID0gZmllbGROYW1lLnJlcGxhY2UoICdDVDo6JywgJycgKTtcclxuXHJcblx0Y29uc3Qgc3RhdGljRnVuYyA9IGdldEZ1bmN0aW9uKCBmaWVsZE5hbWUgKTtcclxuXHJcblx0aWYgKCBmYWxzZSA9PT0gc3RhdGljRnVuYyApIHtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RhdGljRnVuYy5nZXRSZXN1bHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXR0YWNoQ29uc3ROYW1lc3BhY2U7IiwiZnVuY3Rpb24gQmFzZUludGVybmFsTWFjcm8oKSB7XHJcbn1cclxuXHJcbkJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSA9IHtcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0SWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJld3JpdGUgdGhpcyBtZXRob2QnICk7XHJcblx0fSxcclxuXHRnZXRSZXN1bHQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJld3JpdGUgdGhpcyBtZXRob2QnICk7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VJbnRlcm5hbE1hY3JvOyIsImltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcclxuXHJcbmZ1bmN0aW9uIEN1cnJlbnREYXRlKCkge1xyXG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnQ3VycmVudERhdGUnO1xyXG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbn1cclxuXHJcbkN1cnJlbnREYXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudERhdGU7IiwiaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBEYXlfSW5fU2VjKCkge1xyXG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRJZCA9ICgpID0+ICdEYXlfSW5fU2VjJztcclxuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5EYXlfSW5fU2VjO1xyXG59XHJcblxyXG5EYXlfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF5X0luX1NlYzsiLCJpbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIEhvdXJfSW5fU2VjKCkge1xyXG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRJZCA9ICgpID0+ICdIb3VyX0luX1NlYyc7XHJcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuSG91cl9Jbl9TZWM7XHJcbn1cclxuXHJcbkhvdXJfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG91cl9Jbl9TZWM7IiwiaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBNaW5fSW5fU2VjKCkge1xyXG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRJZCA9ICgpID0+ICdNaW5fSW5fU2VjJztcclxuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5NaW5fSW5fU2VjO1xyXG59XHJcblxyXG5NaW5fSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluX0luX1NlYzsiLCJpbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIE1vbnRoX0luX1NlYygpIHtcclxuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ01vbnRoX0luX1NlYyc7XHJcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTW9udGhfSW5fU2VjO1xyXG59XHJcblxyXG5Nb250aF9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb250aF9Jbl9TZWM7IiwiaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBZZWFyX0luX1NlYygpIHtcclxuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ1llYXJfSW5fU2VjJztcclxuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5ZZWFyX0luX1NlYztcclxufVxyXG5cclxuWWVhcl9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZZWFyX0luX1NlYzsiLCJsZXQgQ29uc3RhbnRzID0ge1xyXG5cdE1pbGxpX0luX1NlYzogMTAwMCxcclxuXHRTZWNfSW5fTWluOiA2MCxcclxuXHRNaW5fSW5fSG91cjogNjAsXHJcblx0SG91cl9Jbl9EYXk6IDI0LFxyXG5cdERheV9Jbl9Nb250aDogMzAsXHJcblx0WWVhcl9Jbl9EYXk6IDM2NSxcclxuXHRLYl9Jbl9CeXRlczogMTAyNCxcclxufTtcclxuXHJcbkNvbnN0YW50cy5NaW5fSW5fU2VjICAgPSBDb25zdGFudHMuU2VjX0luX01pbiAqIENvbnN0YW50cy5NaWxsaV9Jbl9TZWM7XHJcbkNvbnN0YW50cy5Ib3VyX0luX1NlYyAgPSBDb25zdGFudHMuTWluX0luX0hvdXIgKiBDb25zdGFudHMuTWluX0luX1NlYztcclxuQ29uc3RhbnRzLkRheV9Jbl9TZWMgICA9IENvbnN0YW50cy5Ib3VyX0luX0RheSAqIENvbnN0YW50cy5Ib3VyX0luX1NlYztcclxuQ29uc3RhbnRzLk1vbnRoX0luX1NlYyA9IENvbnN0YW50cy5EYXlfSW5fTW9udGggKiBDb25zdGFudHMuRGF5X0luX1NlYztcclxuQ29uc3RhbnRzLlllYXJfSW5fU2VjICA9IENvbnN0YW50cy5ZZWFyX0luX0RheSAqIENvbnN0YW50cy5EYXlfSW5fU2VjO1xyXG5Db25zdGFudHMuTWJfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLktiX0luX0J5dGVzICogMTAyNDtcclxuQ29uc3RhbnRzLkdiX0luX0J5dGVzICA9IENvbnN0YW50cy5NYl9Jbl9CeXRlcyAqIDEwMjQ7XHJcbkNvbnN0YW50cy5UYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuR2JfSW5fQnl0ZXMgKiAxMDI0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQWRkRGF5RmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnYWRkRGF5JztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGRheXMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRkYXlzID0gZGF5cyA/ICsoXHJcblx0XHRcdGRheXMudHJpbSgpXHJcblx0XHQpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBjdXJyZW50LmdldERhdGUoKSArIGRheXMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5BZGREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQWRkSG91ckZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2FkZEhvdXInO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91cnMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aG91cnMgPSBob3VycyA/ICsoXHJcblx0XHRcdGhvdXJzLnRyaW0oKVxyXG5cdFx0KSA6IDE7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSArIGhvdXJzICk7XHJcblx0fTtcclxufVxyXG5cclxuQWRkSG91ckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQWRkTWluRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnYWRkTWluJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbnV0ZXMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0bWludXRlcyA9IG1pbnV0ZXMgPyArKFxyXG5cdFx0XHRtaW51dGVzLnRyaW0oKVxyXG5cdFx0KSA6IDE7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggY3VycmVudC5nZXRNaW51dGVzKCkgKyBtaW51dGVzICk7XHJcblx0fTtcclxufVxyXG5cclxuQWRkTWluRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2FkZE1vbnRoJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1vbnRocyApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdG1vbnRocyA9IG1vbnRocyA/ICttb250aHMudHJpbSgpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpICsgbW9udGhzICk7XHJcblx0fTtcclxufVxyXG5cclxuQWRkRGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEFkZFllYXJGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdhZGRZZWFyJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXJzICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0eWVhcnMgPSB5ZWFycyA/ICt5ZWFycy50cmltKCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgKyB5ZWFycyApO1xyXG5cdH07XHJcbn1cclxuXHJcbkFkZFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkWWVhckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBGYWxsQmFja0ZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2lmRW1wdHknO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZmFsbGJhY2sgKSB7XHJcblx0XHRyZXR1cm4gaXNFbXB0eSggdmFsdWUgKSA/IHZhbHVlIDogZmFsbGJhY2s7XHJcblx0fTtcclxufVxyXG5cclxuRmFsbEJhY2tGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFsbEJhY2tGaWx0ZXI7IiwiZnVuY3Rpb24gRmlsdGVyKCkge1xyXG5cdHRoaXMucHJvcHMgPSBbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbkZpbHRlci5wcm90b3R5cGUuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoICdnZXRTbHVnIGlzIGVtcHR5JyApO1xyXG59O1xyXG5GaWx0ZXIucHJvdG90eXBlLnNldFByb3BzICAgICAgID0gZnVuY3Rpb24gKCBwcm9wcyApIHtcclxuXHR0aGlzLnByb3BzLnB1c2goIC4uLnByb3BzICk7XHJcbn07XHJcbkZpbHRlci5wcm90b3R5cGUuYXBwbHlXaXRoUHJvcHMgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xyXG5cdHJldHVybiB0aGlzLmFwcGx5KCB2YWx1ZSwgLi4udGhpcy5wcm9wcyApO1xyXG59O1xyXG4vKipcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSBwcm9wc1xyXG4gKiBAcmV0dXJuIHsqfVxyXG4gKi9cclxuRmlsdGVyLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIC4uLnByb3BzICkge1xyXG5cdHJldHVybiB2YWx1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuXHJcbmZ1bmN0aW9uIExlbmd0aEZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2xlbmd0aCc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIHZhbHVlPy5sZW5ndGggPz8gMDtcclxuXHR9O1xyXG59XHJcblxyXG5MZW5ndGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVuZ3RoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU2V0RGF5RmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc2V0RGF5JztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGRheSApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdGRheSA9IGRheSA/ICtkYXkudHJpbSgpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBkYXkgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TZXREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0RGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU2V0SG91ckZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3NldEhvdXInO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91ciApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblx0XHRob3VyID0gaG91ciA/ICtob3VyLnRyaW0oKSA6IDA7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGhvdXIgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TZXRIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldEhvdXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBTZXRNaW5GaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdzZXRNaW4nO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWluICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH1cclxuXHRcdG1pbiA9IG1pbiA/ICttaW4udHJpbSgpIDogMDtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBtaW4gKTtcclxuXHR9O1xyXG59XHJcblxyXG5TZXRNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0TWluRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU2V0TW9udGhGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdzZXRNb250aCc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aCApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdG1vbnRoID0gbW9udGggPyArbW9udGgudHJpbSgpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggbW9udGggKTtcclxuXHR9O1xyXG59XHJcblxyXG5TZXRNb250aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXRNb250aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFNldFllYXJGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdzZXRZZWFyJztcclxuXHR9O1xyXG5cclxuXHR0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKCB2YWx1ZSwgeWVhciApIHtcclxuXHRcdHllYXIgPSB5ZWFyID8gK3llYXIudHJpbSgpIDogZmFsc2U7XHJcblxyXG5cdFx0aWYgKCAheWVhciApIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRGdWxsWWVhciggeWVhciApO1xyXG5cdH07XHJcbn1cclxuXHJcblNldFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0WWVhckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFN1YnRyYWN0RGF5RmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc3ViRGF5JztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGRheXMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGF5cyA9IGRheXMgPyArZGF5cy50cmltKCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldERhdGUoIGN1cnJlbnQuZ2V0RGF0ZSgpIC0gZGF5cyApO1xyXG5cdH07XHJcbn1cclxuXHJcblN1YnRyYWN0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0RGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU3VidHJhY3RIb3VyRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc3ViSG91cic7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBob3VyICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0aG91ciA9IGhvdXIgPyAraG91ci50cmltKCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBjdXJyZW50LmdldEhvdXJzKCkgLSBob3VyICk7XHJcblx0fTtcclxufVxyXG5cclxuU3VidHJhY3RIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0SG91ckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFN1YnRyYWN0TWluRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc3ViTWluJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbnV0ZXMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRtaW51dGVzID0gbWludXRlcyA/ICttaW51dGVzLnRyaW0oKSA6IDE7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggY3VycmVudC5nZXRNaW51dGVzKCkgLSBtaW51dGVzICk7XHJcblx0fTtcclxufVxyXG5cclxuU3VidHJhY3RNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RNaW5GaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBTdWJ0cmFjdE1vbnRoRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc3ViTW9udGgnO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aHMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0bW9udGhzID0gbW9udGhzID8gK21vbnRocy50cmltKCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldE1vbnRoKCBjdXJyZW50LmdldE1vbnRoKCkgLSBtb250aHMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TdWJ0cmFjdE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBTdWJ0cmFjdFllYXJGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdzdWJZZWFyJztcclxuXHR9O1xyXG5cclxuXHR0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKCB2YWx1ZSwgeWVhcnMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0eWVhcnMgPSB5ZWFycyA/ICt5ZWFycy50cmltKCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgLSB5ZWFycyApO1xyXG5cdH07XHJcbn1cclxuXHJcblN1YnRyYWN0WWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBUaW1lc3RhbXBGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdUJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XHJcblx0XHRpZiAoICF2YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHJcblx0XHRyZXR1cm4gdGltZTtcclxuXHR9O1xyXG59XHJcblxyXG5UaW1lc3RhbXBGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZXN0YW1wRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gVG9EYXRlRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAndG9EYXRlJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gdG9EYXRlKCBuZXcgRGF0ZSggdmFsdWUgKSApO1xyXG5cdH07XHJcbn1cclxuXHJcblRvRGF0ZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IHRvRGF0ZVRpbWUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gVG9EYXRlVGltZUZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3RvRGF0ZVRpbWUnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdHJldHVybiB0b0RhdGVUaW1lKCBuZXcgRGF0ZSggdmFsdWUgKSApO1xyXG5cdH07XHJcbn1cclxuXHJcblRvRGF0ZVRpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EYXRlVGltZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgdG9UaW1lIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFRvVGltZUZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3RvVGltZSc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIHRvVGltZSggbmV3IERhdGUoIHZhbHVlICkgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ub1RpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9UaW1lRmlsdGVyOyIsImZ1bmN0aW9uIHplcm9maWxsKCBudW1iZXIsIGNvdW50ICkge1xyXG5cdG51bWJlciA9ICcnICsgbnVtYmVyO1xyXG5cclxuXHRpZiAoIG51bWJlci5sZW5ndGggPj0gY291bnQgKSB7XHJcblx0XHRyZXR1cm4gbnVtYmVyO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgemVyb3MgPSBuZXcgQXJyYXkoIGNvdW50IC0gbnVtYmVyLmxlbmd0aCApLmZpbGwoIDAgKTtcclxuXHJcblx0cmV0dXJuIHplcm9zICsgbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGRhdGUge0RhdGV9XHJcbiAqL1xyXG5mdW5jdGlvbiB0b0RhdGUoIGRhdGUgKSB7XHJcblx0cmV0dXJuIFtcclxuXHRcdGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdHplcm9maWxsKCBkYXRlLmdldE1vbnRoKCkgKyAxLCAyICksXHJcblx0XHR6ZXJvZmlsbCggZGF0ZS5nZXREYXRlKCksIDIgKSxcclxuXHRdLmpvaW4oICctJyApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGRhdGUge0RhdGV9XHJcbiAqL1xyXG5mdW5jdGlvbiB0b1RpbWUoIGRhdGUgKSB7XHJcblx0cmV0dXJuIFtcclxuXHRcdHplcm9maWxsKCBkYXRlLmdldEhvdXJzKCksIDIgKSxcclxuXHRcdHplcm9maWxsKCBkYXRlLmdldE1pbnV0ZXMoKSwgMiApLFxyXG5cdF0uam9pbiggJzonICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRGF0ZVRpbWUoIGRhdGUgKSB7XHJcblx0cmV0dXJuIHRvRGF0ZSggZGF0ZSApICsgJ1QnICsgdG9UaW1lKCBkYXRlICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdGltZU9yRGF0ZSB7U3RyaW5nfE51bWJlcn1cclxuICogQHJldHVybiB7e3RpbWU6IG51bWJlciwgdHlwZTogc3RyaW5nfX1cclxuICovXHJcbmZ1bmN0aW9uIGdldFRpbWVzdGFtcCggdGltZU9yRGF0ZSApIHtcclxuXHRpZiAoICFOdW1iZXIuaXNOYU4oICt0aW1lT3JEYXRlICkgKSB7XHJcblx0XHRyZXR1cm4geyB0aW1lOiArdGltZU9yRGF0ZSwgdHlwZTogJ251bWJlcicgfTtcclxuXHR9XHJcblxyXG5cdHRpbWVPckRhdGUgPSB0aW1lT3JEYXRlLnRvU3RyaW5nKCk7XHJcblxyXG5cdGNvbnN0IGRhdGVQYXJ0cyA9IHRpbWVPckRhdGUuc3BsaXQoICctJyApO1xyXG5cclxuXHRpZiAoIGRhdGVQYXJ0cy5sZW5ndGggPiAxICkge1xyXG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCB0aW1lT3JEYXRlICk7XHJcblxyXG5cdFx0aWYgKCAhdGltZU9yRGF0ZS5pbmNsdWRlcyggJ1QnICkgKSB7XHJcblx0XHRcdGRhdGUuc2V0SG91cnMoIDAsIDAsIDAgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0aW1lOiBkYXRlLmdldFRpbWUoKSxcclxuXHRcdFx0dHlwZTogJ2RhdGUnLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRpbWVQYXJ0cyA9IHRpbWVPckRhdGUuc3BsaXQoICc6JyApO1xyXG5cdGNvbnN0IGNhbGxiYWNrcyA9IFtcclxuXHRcdERhdGUucHJvdG90eXBlLnNldEhvdXJzLFxyXG5cdFx0RGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcyxcclxuXHRcdERhdGUucHJvdG90eXBlLnNldFNlY29uZHMsXHJcblx0XTtcclxuXHJcblx0Y29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IGluZGV4IGluIHRpbWVQYXJ0cyApIHtcclxuXHRcdGlmIChcclxuXHRcdFx0IXRpbWVQYXJ0cy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSB8fFxyXG5cdFx0XHQhY2FsbGJhY2tzLmhhc093blByb3BlcnR5KCBpbmRleCApXHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FsbGJhY2tzWyBpbmRleCBdLmNhbGwoIHRpbWUsIHRpbWVQYXJ0c1sgaW5kZXggXSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHRpbWU6IHRpbWUuZ2V0VGltZSgpLFxyXG5cdFx0dHlwZTogJ3RpbWUnLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRvRGF0ZSwgdG9UaW1lLCB0b0RhdGVUaW1lLCBnZXRUaW1lc3RhbXAgfTsiLCJpbXBvcnQgTGVuZ3RoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9MZW5ndGhGaWx0ZXInO1xyXG5pbXBvcnQgRmFsbEJhY2tGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0ZhbGxCYWNrRmlsdGVyJztcclxuaW1wb3J0IFRvRGF0ZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9EYXRlRmlsdGVyJztcclxuaW1wb3J0IFRvVGltZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9UaW1lRmlsdGVyJztcclxuaW1wb3J0IFRvRGF0ZVRpbWVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvRGF0ZVRpbWVGaWx0ZXInO1xyXG5pbXBvcnQgQWRkWWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkWWVhckZpbHRlcic7XHJcbmltcG9ydCBBZGRNb250aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXInO1xyXG5pbXBvcnQgQWRkRGF5RmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGREYXlGaWx0ZXInO1xyXG5pbXBvcnQgQWRkSG91ckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkSG91ckZpbHRlcic7XHJcbmltcG9ydCBBZGRNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZE1pbkZpbHRlcic7XHJcbmltcG9ydCBUaW1lc3RhbXBGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RpbWVzdGFtcEZpbHRlcic7XHJcbmltcG9ydCBTZXRIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRIb3VyRmlsdGVyJztcclxuaW1wb3J0IFNldE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0TWluRmlsdGVyJztcclxuaW1wb3J0IFNldERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0RGF5RmlsdGVyJztcclxuaW1wb3J0IFNldFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldFllYXJGaWx0ZXInO1xyXG5pbXBvcnQgU2V0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldE1vbnRoRmlsdGVyJztcclxuaW1wb3J0IFN1YnRyYWN0SG91ckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RIb3VyRmlsdGVyJztcclxuaW1wb3J0IFN1YnRyYWN0RGF5RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlcic7XHJcbmltcG9ydCBTdWJ0cmFjdE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RNaW5GaWx0ZXInO1xyXG5pbXBvcnQgU3VidHJhY3RNb250aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RNb250aEZpbHRlcic7XHJcbmltcG9ydCBTdWJ0cmFjdFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0WWVhckZpbHRlcic7XHJcblxyXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7YXJyYXk8RmlsdGVyPn1cclxuICovXHJcbmxldCBmaWx0ZXJzID0gW107XHJcblxyXG5jb25zdCBnZXRGaWx0ZXJJdGVtcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmZpbHRlcnMnLFxyXG5cdFtcclxuXHRcdFNldFllYXJGaWx0ZXIsXHJcblx0XHRTZXRNb250aEZpbHRlcixcclxuXHRcdFNldERheUZpbHRlcixcclxuXHRcdFNldEhvdXJGaWx0ZXIsXHJcblx0XHRTZXRNaW5GaWx0ZXIsXHJcblx0XHRTdWJ0cmFjdFllYXJGaWx0ZXIsXHJcblx0XHRTdWJ0cmFjdE1vbnRoRmlsdGVyLFxyXG5cdFx0U3VidHJhY3REYXlGaWx0ZXIsXHJcblx0XHRTdWJ0cmFjdEhvdXJGaWx0ZXIsXHJcblx0XHRTdWJ0cmFjdE1pbkZpbHRlcixcclxuXHRcdEFkZFllYXJGaWx0ZXIsXHJcblx0XHRBZGRNb250aEZpbHRlcixcclxuXHRcdEFkZERheUZpbHRlcixcclxuXHRcdEFkZEhvdXJGaWx0ZXIsXHJcblx0XHRBZGRNaW5GaWx0ZXIsXHJcblx0XHRMZW5ndGhGaWx0ZXIsXHJcblx0XHRGYWxsQmFja0ZpbHRlcixcclxuXHRcdFRvRGF0ZUZpbHRlcixcclxuXHRcdFRvVGltZUZpbHRlcixcclxuXHRcdFRvRGF0ZVRpbWVGaWx0ZXIsXHJcblx0XHRUaW1lc3RhbXBGaWx0ZXIsXHJcblx0XSxcclxuKTtcclxubGV0IHJlc3BvbnNlICAgICAgICAgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHB1c2hGaWx0ZXIoIG5hbWUsIHByb3BzID0gJycgKSB7XHJcblx0aWYgKCAhZmlsdGVycy5sZW5ndGggKSB7XHJcblx0XHRmaWx0ZXJzID0gZ2V0RmlsdGVySXRlbXMoKTtcclxuXHR9XHJcblxyXG5cdGxldCBmaWx0ZXI7XHJcblxyXG5cdGZvciAoIGxldCBjdXJyZW50IG9mIGZpbHRlcnMgKSB7XHJcblx0XHRjdXJyZW50ID0gbmV3IGN1cnJlbnQoKTtcclxuXHJcblx0XHRpZiAoIG5hbWUgPT09IGN1cnJlbnQuZ2V0U2x1ZygpICkge1xyXG5cdFx0XHRmaWx0ZXIgPSBjdXJyZW50O1xyXG5cclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoICFmaWx0ZXIgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHByb3BzID0gcHJvcHMuc3BsaXQoICcsJyApLm1hcChcclxuXHRcdGl0ZW0gPT4gaXRlbS50cmltKCksXHJcblx0KTtcclxuXHJcblx0ZmlsdGVyLnNldFByb3BzKCBwcm9wcyApO1xyXG5cdHJlc3BvbnNlLnB1c2goIGZpbHRlciApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaWx0ZXJzKCBmaWx0ZXJzTGlzdCApIHtcclxuXHRpZiAoIG51bGwgPT09IGZpbHRlcnNMaXN0IHx8ICFmaWx0ZXJzTGlzdD8ubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBsZXQgZmlsdGVyTmFtZSBvZiBmaWx0ZXJzTGlzdCApIHtcclxuXHRcdGNvbnN0IG1hdGNoZXMgPSBmaWx0ZXJOYW1lLm1hdGNoKCAvXihcXHcrKVxcKChbXigpXSspXFwpLyApO1xyXG5cclxuXHRcdGlmICggbnVsbCA9PT0gbWF0Y2hlcyApIHtcclxuXHRcdFx0cHVzaEZpbHRlciggZmlsdGVyTmFtZSApO1xyXG5cclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVzaEZpbHRlciggbWF0Y2hlc1sgMSBdLCBtYXRjaGVzWyAyIF0gKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRlbXBSZXNwb25zZSA9IFsgLi4ucmVzcG9uc2UgXTtcclxuXHRyZXNwb25zZSAgICAgICAgICAgPSBbXTtcclxuXHJcblx0cmV0dXJuIHRlbXBSZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RmlsdGVyczsiLCJpbXBvcnQgQ2FsY3VsYXRlZEZvcm11bGEgZnJvbSAnLi9DYWxjdWxhdGVkRm9ybXVsYSc7XHJcbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9CYXNlSW50ZXJuYWxNYWNybyc7XHJcbmltcG9ydCBnZXRGaWx0ZXJzIGZyb20gJy4vZ2V0RmlsdGVycyc7XHJcbmltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xyXG5pbXBvcnQgeyB0b0RhdGUsIHRvRGF0ZVRpbWUsIHRvVGltZSwgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvRmlsdGVyJztcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XHJcblx0KSxcclxuXHRGaWx0ZXIsXHJcblx0Q2FsY3VsYXRlZEZvcm11bGEsXHJcblx0QmFzZUludGVybmFsTWFjcm8sXHJcbn07XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPSB7XHJcblx0Li4uKFxyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID8/IHt9XHJcblx0KSxcclxuXHRnZXRGaWx0ZXJzLFxyXG5cdGFwcGx5RmlsdGVycyxcclxuXHR0b0RhdGUsXHJcblx0dG9EYXRlVGltZSxcclxuXHR0b1RpbWUsXHJcblx0Z2V0VGltZXN0YW1wLFxyXG59O1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyQ29uc3QgPSB7XHJcblx0Li4uKFxyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uc3QgPz8ge31cclxuXHQpLFxyXG5cdC4uLkNvbnN0YW50cyxcclxufTsiLCIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85ODQ3NTgwL2hvdy10by1kZXRlY3Qtc2FmYXJpLWNocm9tZS1pZS1maXJlZm94LWFuZC1vcGVyYS1icm93c2VyXHJcblxyXG5jb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCJcclxuY29uc3QgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KCB1c2VyQWdlbnQgKSB8fFxyXG5cdC9jb25zdHJ1Y3Rvci9pLnRlc3QoIHdpbmRvdy5IVE1MRWxlbWVudCApIHx8XHJcblx0KFxyXG5cdFx0KCBwICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gJ1tvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXScgPT09IHAudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHQpKCAhd2luZG93LnNhZmFyaSB8fCAoXHJcblx0XHR0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvblxyXG5cdCkgKTtcclxuXHJcbmNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cdHNhZmFyaTogaXNTYWZhcmksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvQmFzZUh0bWxBdHRyJztcclxuaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlc0h0bWxBdHRyJztcclxuaW1wb3J0IE1heEZpbGVTaXplSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyJztcclxuaW1wb3J0IFJlbWFpbmluZ0NhbGNBdHRyIGZyb20gJy4vYXR0cnMvUmVtYWluaW5nQ2FsY0F0dHInO1xyXG5pbXBvcnQgRmlsZUV4dGVuc2lvbkh0bWxBdHRyIGZyb20gJy4vYXR0cnMvRmlsZUV4dGVuc2lvbkh0bWxBdHRyJztcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtIGNhbGxiYWNrcyB7RnVuY3Rpb25bXX1cclxuICogQHJldHVybiB7UHJvbWlzZTwqPn1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGFsbFJlamVjdGVkKCBjYWxsYmFja3MgKSB7XHJcblx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChcclxuXHRcdGNhbGxiYWNrcy5tYXAoIGN1cnJlbnQgPT4gbmV3IFByb21pc2UoIGN1cnJlbnQgKSApLFxyXG5cdCk7XHJcblxyXG5cdGlmICggd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5kZXZtb2RlICkge1xyXG5cdFx0Y29uc29sZS5ncm91cCggJ2FsbFJlamVjdGVkJyApO1xyXG5cdFx0Y29uc29sZS5pbmZvKCAuLi5yZXN1bHRzICk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnZhbGlkID0gcmVzdWx0cy5maWx0ZXIoXHJcblx0XHQoIGVycm9yICkgPT4gJ3JlamVjdGVkJyA9PT0gZXJyb3Iuc3RhdHVzLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiBpbnZhbGlkLm1hcCggKCB7IHJlYXNvbiwgdmFsdWUgfSApID0+IHtcclxuXHRcdHJldHVybiByZWFzb24/Lmxlbmd0aCA/IHJlYXNvblsgMCBdIDogKFxyXG5cdFx0XHRyZWFzb24gPz8gdmFsdWVcclxuXHRcdCk7XHJcblx0fSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZSgpIHtcclxuXHRjb25zdCBsYW5nID0gd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlcz8ubGVuZ3RoXHJcblx0ICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbIDAgXVxyXG5cdCAgICAgICAgICAgICA6IHdpbmRvdz8ubmF2aWdhdG9yPy5sYW5ndWFnZTtcclxuXHJcblx0cmV0dXJuIGxhbmcgPz8gJ2VuLVVTJztcclxufVxyXG5cclxuY29uc3QgZ2V0SW5wdXRIdG1sQXR0ciA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmlucHV0Lmh0bWwuYXR0cnMnLFxyXG5cdFtcclxuXHRcdCdtaW4nLFxyXG5cdFx0J21heCcsXHJcblx0XHQnbWluTGVuZ3RoJyxcclxuXHRcdCdtYXhMZW5ndGgnLFxyXG5cdFx0TWF4RmlsZXNIdG1sQXR0cixcclxuXHRcdE1heEZpbGVTaXplSHRtbEF0dHIsXHJcblx0XHRSZW1haW5pbmdDYWxjQXR0cixcclxuXHRcdEZpbGVFeHRlbnNpb25IdG1sQXR0cixcclxuXHRdLFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtCYXNlSHRtbEF0dHJbXX1cclxuICovXHJcbmxldCBpbnB1dEh0bWxBdHRycyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXREZWZhdWx0QXR0ckJ5TmFtZSggbmFtZSApIHtcclxuXHRjb25zdCBhdHRyICAgID0gbmV3IEJhc2VIdG1sQXR0cigpO1xyXG5cdGF0dHIuYXR0ck5hbWUgPSBuYW1lO1xyXG5cclxuXHRyZXR1cm4gYXR0cjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0QXR0cnMoIGlucHV0ICkge1xyXG5cdGlmICggIWlucHV0SHRtbEF0dHJzLmxlbmd0aCApIHtcclxuXHRcdGlucHV0SHRtbEF0dHJzID0gZ2V0SW5wdXRIdG1sQXR0cigpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggbGV0IGlucHV0SHRtbEF0dHIgb2YgaW5wdXRIdG1sQXR0cnMgKSB7XHJcblx0XHRsZXQgY3VycmVudDtcclxuXHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBpbnB1dEh0bWxBdHRyICkge1xyXG5cdFx0XHRjdXJyZW50ID0gZ2V0RGVmYXVsdEF0dHJCeU5hbWUoIGlucHV0SHRtbEF0dHIgKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjdXJyZW50ID0gbmV3IGlucHV0SHRtbEF0dHIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBpbnB1dCApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGlucHV0LmF0dHJzWyBjdXJyZW50LmF0dHJOYW1lIF0gPSBjdXJyZW50O1xyXG5cclxuXHRcdGN1cnJlbnQuc2V0SW5wdXQoIGlucHV0ICk7XHJcblx0XHRjdXJyZW50Lm9ic2VydmUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvSFRNTCggdGV4dCApIHtcclxuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XHJcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGV4dC50cmltKCk7XHJcblxyXG5cdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5KCB2YWx1ZSApIHtcclxuXHRpZiAoICdib29sZWFuJyA9PT0gdHlwZW9mIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuICF2YWx1ZTtcclxuXHR9XHJcblxyXG5cdGlmICggbnVsbCA9PT0gdmFsdWUgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSApIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICYmICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xyXG5cdFx0cmV0dXJuICFPYmplY3Qua2V5cyggdmFsdWUgKT8ubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0aWYgKCAnbnVtYmVyJyA9PT0gdHlwZW9mIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIDAgPT09IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuICF2YWx1ZT8ubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gaXNWaXNpYmxlKCBub2RlICkge1xyXG5cdHJldHVybiAoXHJcblx0XHRub2RlPy5pc0Nvbm5lY3RlZCAmJiBudWxsICE9PSBub2RlPy5vZmZzZXRQYXJlbnRcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRPZmZzZXRUb3AoIG5vZGUgKSB7XHJcblx0Y29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdGNvbnN0IG1heWJlV2luZG93ID0gZ2V0U2Nyb2xsUGFyZW50KCBub2RlICk7XHJcblxyXG5cdHJldHVybiByZWN0Py50b3AgKyAoXHJcblx0XHRtYXliZVdpbmRvdz8uc2Nyb2xsWSA/PyAwXHJcblx0KTtcclxufVxyXG5cclxuY29uc3QgZ2V0Tm9kZSA9IGN1cnJlbnQgPT4gKFxyXG5cdGN1cnJlbnQuc2Nyb2xsSGVpZ2h0ID4gY3VycmVudC5jbGllbnRIZWlnaHQgPyBjdXJyZW50IDogZmFsc2VcclxuKTtcclxuXHJcbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudCggbm9kZSApIHtcclxuXHJcblx0Ly8gamV0LXBvcHVwIGNvbXBhdGliaWxpdHlcclxuXHRsZXQgY29udGFpbmVyID0gbm9kZS5jbG9zZXN0KCAnLmpldC1wb3B1cF9fY29udGFpbmVyLWlubmVyJyApO1xyXG5cclxuXHRpZiAoIGNvbnRhaW5lciApIHtcclxuXHRcdHJldHVybiBnZXROb2RlKCBjb250YWluZXIgKTtcclxuXHR9XHJcblxyXG5cdC8vIGVsZW1lbnRvci1wcm8gcG9wdXAgY29tcGF0aWJpbGl0eVxyXG5cdGNvbnRhaW5lciA9IG5vZGUuY2xvc2VzdCggJy5lbGVtZW50b3ItcG9wdXAtbW9kYWwgLmRpYWxvZy1tZXNzYWdlJyApO1xyXG5cclxuXHRpZiAoIGNvbnRhaW5lciApIHtcclxuXHRcdHJldHVybiBnZXROb2RlKCBjb250YWluZXIgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB3aW5kb3c7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXRzIHtJbnB1dERhdGFbXX1cclxuICovXHJcbmZ1bmN0aW9uIGZvY3VzT25JbnZhbGlkSW5wdXQoIGlucHV0cyApIHtcclxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XHJcblx0XHRpZiAoIGlucHV0LnJlcG9ydGluZy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0IWlucHV0LnJlcG9ydGluZy5oYXNBdXRvU2Nyb2xsKCkgJiYgaW5wdXQub25Gb2N1cygpO1xyXG5cdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVVzZXJBZ2VudHMoKSB7XHJcblx0Zm9yICggY29uc3QgWyBuYW1lLCBpc0FjdGl2ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBlbnZpcm9ubWVudCApICkge1xyXG5cdFx0aWYgKCAhaXNBY3RpdmUgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCBgamV0LS11YS0keyBuYW1lIH1gICk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VBKCBicm93c2VyICkge1xyXG5cdHJldHVybiBlbnZpcm9ubWVudD8uWyBicm93c2VyIF07XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0YWxsUmVqZWN0ZWQsXHJcblx0Z2V0TGFuZ3VhZ2UsXHJcblx0c2V0QXR0cnMsXHJcblx0dG9IVE1MLFxyXG5cdGlzRW1wdHksXHJcblx0Z2V0T2Zmc2V0VG9wLFxyXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXHJcblx0aXNWaXNpYmxlLFxyXG5cdGdldFNjcm9sbFBhcmVudCxcclxuXHRpc1VBLFxyXG5cdGFwcGx5VXNlckFnZW50cyxcclxufTsiLCJpbXBvcnQgQ2FsY3VsYXRlZEZvcm11bGEgZnJvbSAnLi4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVycyxcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdGVkSHRtbFN0cmluZyhcclxuXHRyb290LFxyXG5cdHsgd2l0aFByZWZpeCA9IHRydWUsIC4uLm9wdGlvbnMgfSA9IHt9LFxyXG4pIHtcclxuXHRDYWxjdWxhdGVkRm9ybXVsYS5jYWxsKCB0aGlzLCByb290LCBvcHRpb25zICk7XHJcblxyXG5cdGlmICggd2l0aFByZWZpeCApIHtcclxuXHRcdHRoaXMucmVnZXhwID0gL0pGQl9GSUVMRDo6KC4rKS9naTtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGxldCBmaWVsZFZhbHVlID0gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcclxuXHRcdFx0ZmFsc2UsXHJcblx0XHRcdGpRdWVyeSggaW5wdXQubm9kZXNbIDAgXSApLFxyXG5cdFx0KTtcclxuXHJcblx0XHRmaWVsZFZhbHVlID0gd3A/Lmhvb2tzPy5hcHBseUZpbHRlcnMgP1xyXG5cdFx0ICAgICAgICAgICAgIHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcclxuXHRcdFx0ICAgICAgICAgICAgICdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxyXG5cdFx0XHQgICAgICAgICAgICAgZmllbGRWYWx1ZSxcclxuXHRcdFx0ICAgICAgICAgICAgIGpRdWVyeSggaW5wdXQubm9kZXNbIDAgXSApLFxyXG5cdFx0ICAgICAgICAgICAgICkgOiBmaWVsZFZhbHVlO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZSA9PT0gZmllbGRWYWx1ZSA/IGlucHV0LnZhbHVlLmN1cnJlbnQgOiBmaWVsZFZhbHVlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub25NaXNzaW5nUGFydCA9IGZ1bmN0aW9uICggaW5wdXRNYXRjaCApIHtcclxuXHR9O1xyXG59XHJcblxyXG5DYWxjdWxhdGVkSHRtbFN0cmluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDYWxjdWxhdGVkRm9ybXVsYS5wcm90b3R5cGUgKTtcclxuXHJcbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5jYWxjdWxhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCAhdGhpcy5wYXJ0cy5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXMucGFydHMubWFwKCBjdXJyZW50ID0+IHtcclxuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGN1cnJlbnQgKSB7XHJcblx0XHRcdHJldHVybiBjdXJyZW50O1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmVzdWx0ID0gY3VycmVudCgpO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdCAgICAgICBudWxsID09PSByZXN1bHQgfHwgJycgPT09IHJlc3VsdFxyXG5cdFx0ICAgICAgICkgPyAnJyA6IHJlc3VsdDtcclxuXHR9ICkuam9pbiggJycgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRIdG1sU3RyaW5nOyIsImZ1bmN0aW9uKiBpdGVyYXRlQ29tbWVudHMoXHJcblx0cm9vdE5vZGUsIGFjY2VwdENhbGxiYWNrID0gbm9kZSA9PiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgKSB7XHJcblx0Ly8gRm91cnRoIGFyZ3VtZW50LCB3aGljaCBpcyBhY3R1YWxseSBvYnNvbGV0ZSBhY2NvcmRpbmcgdG8gdGhlXHJcblx0Ly8gRE9NNCBzdGFuZGFyZCwgaXMgcmVxdWlyZWQgaW4gSUUgMTFcclxuXHRjb25zdCBpdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihcclxuXHRcdHJvb3ROb2RlLFxyXG5cdFx0Tm9kZUZpbHRlci5TSE9XX0NPTU1FTlQsXHJcblx0XHR7XHJcblx0XHRcdGFjY2VwdE5vZGU6IGFjY2VwdENhbGxiYWNrLFxyXG5cdFx0fSxcclxuXHQpO1xyXG5cdGxldCBjdXJOb2RlO1xyXG5cclxuXHR3aGlsZSAoIGN1ck5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpICkge1xyXG5cdFx0Y3VyTm9kZS5ub2RlVmFsdWUgPSBjdXJOb2RlLm5vZGVWYWx1ZS50cmltKCk7XHJcblxyXG5cdFx0eWllbGQgY3VyTm9kZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdGVDb21tZW50czsiLCJpbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaXRlcmF0ZUNvbW1lbnRzJztcclxuXHJcbmZ1bmN0aW9uKiBpdGVyYXRlSmZiQ29tbWVudHMoIHJvb3ROb2RlICkge1xyXG5cdGNvbnN0IGFjY2VwdENhbGxiYWNrID0gbm9kZSA9PiB7XHJcblx0XHRyZXR1cm4gbm9kZS50ZXh0Q29udGVudC5pbmNsdWRlcyggJ0pGQl9GSUVMRDo6JyApO1xyXG5cdH07XHJcblxyXG5cdHlpZWxkKiBpdGVyYXRlQ29tbWVudHMoIHJvb3ROb2RlLCBhY2NlcHRDYWxsYmFjayApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRlSmZiQ29tbWVudHM7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG5cdCAgICAgIHNwcmludGYsXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBjb21tZW50XHJcbiAqIEBwYXJhbSByb290IHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2ZUNvbW1lbnQoIGNvbW1lbnQsIHJvb3QgKSB7XHJcblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkSHRtbFN0cmluZyggcm9vdCApO1xyXG5cdGZvcm11bGEub2JzZXJ2ZSggY29tbWVudC50ZXh0Q29udGVudCApO1xyXG5cclxuXHRpZiAoICFmb3JtdWxhLnBhcnRzPy5sZW5ndGggKSB7XHJcblx0XHRjb25zb2xlLmdyb3VwKFxyXG5cdFx0XHRfXyhcclxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdGNvbW1lbnQudGV4dENvbnRlbnQsXHJcblx0XHRcdCksXHJcblx0XHQpO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdFx0Zm9ybXVsYS5jbGVhcldhdGNoZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xyXG5cclxuXHRsZXQgcHJldlNpYmxpbmcgPSBjb21tZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxyXG5cdFx0d3JhcHBlcixcclxuXHRcdGNvbW1lbnQsXHJcblx0KTtcclxuXHJcblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRwcmV2U2libGluZy5pbm5lckhUTUwgPSBmb3JtdWxhLmNhbGN1bGF0ZVN0cmluZygpO1xyXG5cdH07XHJcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcclxuXHRjb21tZW50LmpmYk9ic2VydmVkID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZUNvbW1lbnQ7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtOb2RlfVxyXG4gKiBAcGFyYW0gYXR0ck5hbWUge3N0cmluZ31cclxuICogQHBhcmFtIHJvb3Qge09ic2VydmFibGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZlTWFjcm9BdHRyKCBub2RlLCBhdHRyTmFtZSwgcm9vdCApIHtcclxuXHRjb25zdCBub2RlVmFsdWUgPSBub2RlWyBhdHRyTmFtZSBdID8/ICcnO1xyXG5cclxuXHRpZiAoICdzdHJpbmcnICE9PSB0eXBlb2Ygbm9kZVZhbHVlICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRIdG1sU3RyaW5nKCByb290ICk7XHJcblx0Zm9ybXVsYS5vYnNlcnZlKCBub2RlVmFsdWUgKTtcclxuXHJcblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRub2RlWyBhdHRyTmFtZSBdID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcclxuXHR9O1xyXG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVNYWNyb0F0dHI7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZX1cclxuICogQHBhcmFtIHJvb3Qge09ic2VydmFibGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZlTm9kZSggbm9kZSwgcm9vdCApIHtcclxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRIdG1sU3RyaW5nKCByb290LCB7IHdpdGhQcmVmaXg6IGZhbHNlIH0gKTtcclxuXHRmb3JtdWxhLm9ic2VydmUoIGAlJHsgbm9kZS5kYXRhc2V0LmpmYk1hY3JvIH0lYCApO1xyXG5cclxuXHRpZiAoICFmb3JtdWxhLnBhcnRzPy5sZW5ndGggKSB7XHJcblx0XHRjb25zb2xlLmdyb3VwKFxyXG5cdFx0XHRfXyhcclxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdG5vZGUuZGF0YXNldC5qZmJNYWNybyxcclxuXHRcdFx0KSxcclxuXHRcdCk7XHJcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0XHRmb3JtdWxhLmNsZWFyV2F0Y2hlcnMoKTtcclxuXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRub2RlLmRhdGFzZXQuamZiT2JzZXJ2ZWQgPSAxO1xyXG5cclxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcclxuXHRcdG5vZGUuaW5uZXJIVE1MID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcclxuXHR9O1xyXG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVOb2RlOyIsImZ1bmN0aW9uIHF1ZXJ5QnlBdHRyVmFsdWUoIHJvb3ROb2RlLCB2YWx1ZSApIHtcclxuXHRjb25zdCB7IHJlcGxhY2VBdHRycyA9IFtdIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcclxuXHJcblx0Y29uc3QgcXVlcnlTZWxlY3RvciA9IFtdO1xyXG5cclxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXBsYWNlQXR0cnMubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRxdWVyeVNlbGVjdG9yLnB1c2goIGBbJHsgcmVwbGFjZUF0dHJzWyBpIF0gfSo9XCIkeyB2YWx1ZSB9XCJdYCApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoIHF1ZXJ5U2VsZWN0b3Iuam9pbiggJywgJyApICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QnlBdHRyVmFsdWU7IiwiaW1wb3J0IGluaXRGb3JtIGZyb20gJy4vaW5pdEZvcm0nO1xyXG5cclxuZnVuY3Rpb24gaW5pdEVsZW1lbnRvcigpIHtcclxuXHRpZiAoICEgd2luZG93LmVsZW1lbnRvckZyb250ZW5kICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRjb25zdCB3aWRnZXRzID0ge1xyXG5cdFx0J2pldC1lbmdpbmUtYm9va2luZy1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyLWZvcm0uZGVmYXVsdCc6IGluaXRGb3JtLFxyXG5cdH07XHJcblxyXG5cdGpRdWVyeS5lYWNoKCB3aWRnZXRzLCBmdW5jdGlvbiggd2lkZ2V0LCBjYWxsYmFjayApIHtcclxuXHRcdHdpbmRvdy5lbGVtZW50b3JGcm9udGVuZC5ob29rcy5hZGRBY3Rpb24oICdmcm9udGVuZC9lbGVtZW50X3JlYWR5LycgKyB3aWRnZXQsIGNhbGxiYWNrICk7XHJcblx0fSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0RWxlbWVudG9yOyIsImltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL09ic2VydmFibGUnO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyID0gd2luZG93LkpldEZvcm1CdWlsZGVyID8/IHt9O1xyXG5cclxuZnVuY3Rpb24gaW5pdEZvcm0oICRzY29wZSApIHtcclxuXHRjb25zdCBmb3JtID0gJHNjb3BlWyAwIF0ucXVlcnlTZWxlY3RvciggJ2Zvcm0uamV0LWZvcm0tYnVpbGRlcicgKTtcclxuXHJcblx0aWYgKCAhZm9ybSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG5cclxuXHRKZXRGb3JtQnVpbGRlclsgZm9ybS5kYXRhc2V0LmZvcm1JZCBdID0gb2JzZXJ2YWJsZTtcclxuXHJcblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci9pbml0JyxcclxuXHRcdFsgJHNjb3BlLCBvYnNlcnZhYmxlIF0sXHJcblx0KTtcclxuXHJcblx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBmb3JtICk7XHJcblxyXG5cdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWZ0ZXItaW5pdCcsXHJcblx0XHRbICRzY29wZSwgb2JzZXJ2YWJsZSBdLFxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRGb3JtOyIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xyXG5pbXBvcnQgeyBpc0NoYW5nZVR5cGUgfSBmcm9tICcuLi9zdXBwb3J0cyc7XHJcbmltcG9ydCBSZWFjdGl2ZUhvb2sgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcclxuaW1wb3J0IHsgU1RSSUNUX01PREUgfSBmcm9tICcuLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xyXG5cclxuZnVuY3Rpb24gQ2hhbmdlRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc0NoYW5nZVR5cGUoIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKCB0aGlzLnZhbHVlLmN1cnJlbnQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNhbGxhYmxlLmxvY2tUcmlnZ2VyKCk7XHJcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuc2lsZW5jZVNldCggJycgKTtcclxuXHR9O1xyXG59XHJcblxyXG5DaGFuZ2VEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW5nZURhdGE7IiwiaW1wb3J0IExvYWRpbmdSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xyXG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xyXG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XHJcbmltcG9ydCB7IGdldFNpZ25hbCB9IGZyb20gJy4uL3NpZ25hbHMvZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlUmVwb3J0IH0gZnJvbSAnLi4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGdldFBhcnNlZE5hbWUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGdldE9mZnNldFRvcCwgaXNWaXNpYmxlIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgU1RSSUNUX01PREUgfSBmcm9tICcuLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xyXG5cclxuY29uc3QgeyBkb0FjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmF3TmFtZVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZVxyXG4gKiBAcHJvcGVydHkge05vZGV8Ym9vbGVhbn0gY29tbWVudFxyXG4gKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR8KltdfSBub2Rlc1xyXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlVmFyfSB2YWx1ZVxyXG4gKiBAcHJvcGVydHkge0NvbmRpdGlvbkNoZWNrZXJ8bnVsbH0gY2hlY2tlclxyXG4gKiBAcHJvcGVydHkgeyp9IGNhbGNWYWx1ZVxyXG4gKiBAcHJvcGVydHkge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9IHJlcG9ydGluZ1xyXG4gKiBAcHJvcGVydHkge09ic2VydmFibGV9IHJvb3RcclxuICogQHByb3BlcnR5IHtQYWdlU3RhdGV9IHBhZ2VcclxuICogQHByb3BlcnR5IHtMb2FkaW5nUmVhY3RpdmVWYXJ9IGxvYWRpbmdcclxuICogQHByb3BlcnR5IHtPYmplY3Q8UmVhY3RpdmVWYXI+fSBhdHRyc1xyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzUmVxdWlyZWRcclxuICogQHByb3BlcnR5IHtudWxsfFJlYWN0aXZlSG9va30gZW50ZXJLZXlcclxuICogQHByb3BlcnR5IHtudWxsfHN0cmluZ30gaW5wdXRUeXBlXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gSW5wdXREYXRhKCkge1xyXG5cdHRoaXMucmF3TmFtZSA9ICcnO1xyXG5cdHRoaXMubmFtZSAgICA9ICcnO1xyXG5cdHRoaXMuY29tbWVudCA9IGZhbHNlO1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfEhUTUxJbnB1dEVsZW1lbnRbXX1cclxuXHQgKi9cclxuXHR0aGlzLm5vZGVzID0gW107XHJcblx0dGhpcy5hdHRycyAgICAgICAgID0ge307XHJcblx0dGhpcy5lbnRlcktleSAgICAgID0gbnVsbDtcclxuXHR0aGlzLmlucHV0VHlwZSAgICAgPSBudWxsO1xyXG5cdHRoaXMub2Zmc2V0T25Gb2N1cyA9IDc1O1xyXG5cclxuXHQvKipcclxuXHQgKiBQYXRoIGZyb20gdG9wIG9mIGZvcm0gdG8gY3VycmVudCBmaWVsZCBuYW1lXHJcblx0ICogRXguOiBbICdyZXBlYXRlcl9uYW1lJywgMCwgJ3RleHRfZmllbGQnIF1cclxuXHQgKiBXaGVyZTpcclxuXHQgKiAgLSAncmVwZWF0ZXJfbmFtZSc6IG5hbWUgb2YgcmVwZWF0ZXIsIHdoZXJlIGN1cnJlbnQgZmllbGQgaXMgcGxhY2VkXHJcblx0ICogIC0gMDogaW5kZXggb2YgcmVwZWF0ZXIgcm93LCB3aGVyZSBjdXJyZW50IGZpZWxkIGlzIHBsYWNlZFxyXG5cdCAqICAtICd0ZXh0X2ZpZWxkJzogbmFtZSBvZiBjdXJyZW50IGZpZWxkIG5hbWVcclxuXHQgKiBAdHlwZSB7QXJyYXk8U3RyaW5nfE51bWJlcj59XHJcblx0ICovXHJcblx0dGhpcy5wYXRoID0gW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cclxuXHQgKi9cclxuXHR0aGlzLnZhbHVlID0gdGhpcy5nZXRSZWFjdGl2ZSgpO1xyXG5cdHRoaXMudmFsdWUud2F0Y2goIHRoaXMub25DaGFuZ2UuYmluZCggdGhpcyApICk7XHJcblxyXG5cdHRoaXMuaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG5cdHRoaXMuY2FsY1ZhbHVlICA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtBZHZhbmNlZFJlcG9ydGluZ3xCcm93c2VyUmVwb3J0aW5nfVxyXG5cdCAqL1xyXG5cdHRoaXMucmVwb3J0aW5nID0gbnVsbDtcclxuXHJcblx0dGhpcy5jaGVja2VyID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0dGhpcy5yb290ID0gbnVsbDtcclxuXHJcblx0dGhpcy5sb2FkaW5nID0gbmV3IExvYWRpbmdSZWFjdGl2ZVZhciggZmFsc2UgKTtcclxuXHR0aGlzLmxvYWRpbmcubWFrZSgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbiBDaGVja2JveERhdGEgY2FzZSB3ZSBoYXZlIGp1c3QgbWFpbiBzYW5pdGl6ZXIsIHdpdGhvdXQgY2FsbGFibGUuXHJcblx0ICogU28gd2Ugc2V0IC5jYWxjVmFsdWUgaW5zaWRlIGNhbGxhYmxlLnJ1blNpZ25hbCgpXHJcblx0ICpcclxuXHQgKiBBbmQgdG8gcHJldmVudCByZXNldHRpbmcgLmNhbGNWYWx1ZSBieSBvbkNoYW5nZVxyXG5cdCAqIHNldCB0aGlzIHByb3BlcnR5IHRvIEZBTFNFLlxyXG5cdCAqIEB0eXBlIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IHRydWU7XHJcbn1cclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUuYXR0cnMgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcclxuXHJcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBldmVudCA9PiB7XHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0fSApO1xyXG5cclxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgZXZlbnQgPT4ge1xyXG5cdFx0dGhpcy5yZXBvcnRPbkJsdXIoKTtcclxuXHR9ICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuMVxyXG5cdCAqL1xyXG5cdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHRcdGlmICggdGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xyXG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XHJcblx0fSApO1xyXG5cclxuXHRpZiAoICdpbnB1dCcgIT09IHRoaXMuaW5wdXRUeXBlICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcclxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5tYWtlUmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5vbk9ic2VydmUoKTtcclxuXHR0aGlzLmFkZExpc3RlbmVycygpO1xyXG5cdHRoaXMuc2V0VmFsdWUoKTtcclxuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSgpO1xyXG5cclxuXHR0aGlzLnZhbHVlLm1ha2UoKTtcclxuXHJcblx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJywgdGhpcyApO1xyXG59O1xyXG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2hhbmdlICAgICA9IGZ1bmN0aW9uICggcHJldlZhbHVlICkge1xyXG5cdGlmICggdGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlICkge1xyXG5cdFx0dGhpcy5jYWxjVmFsdWUgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XHJcblx0fVxyXG5cclxuXHQvLyBhcHBseSBjaGFuZ2VzIGluIERPTVxyXG5cdHRoaXM/LmNhbGxhYmxlPy5ydW4oIHByZXZWYWx1ZSApO1xyXG5cclxuXHQvLyBzaG93IGVycm9yc1xyXG5cdHRoaXMucmVwb3J0KCk7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUucmVwb3J0ICAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2UoKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5yZXBvcnRPbkJsdXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkJsdXIoKTtcclxufTtcclxuLyoqXHJcbiAqIEBwYXJhbSBjYWxsYWJsZVxyXG4gKiBAcmV0dXJucyB7KGZ1bmN0aW9uKCk6ICp8KltdKXwqfVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XHJcblx0cmV0dXJuIHRoaXMudmFsdWUud2F0Y2goIGNhbGxhYmxlICk7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUud2F0Y2hWYWxpZGl0eSA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XHJcblx0cmV0dXJuIHRoaXMucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUud2F0Y2goIGNhbGxhYmxlICk7XHJcbn07XHJcbi8qKlxyXG4gKiBAcGFyYW0gY2FsbGFibGVcclxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiAqfCpbXSl8Kn1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuc2FuaXRpemUgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xyXG5cdHJldHVybiB0aGlzLnZhbHVlLnNhbml0aXplKCBjYWxsYWJsZSApO1xyXG59O1xyXG4vKipcclxuICogQHBhcmFtIGlucHV0RGF0YSB7SW5wdXREYXRhfVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICggaW5wdXREYXRhICkge1xyXG5cdHRoaXMubm9kZXMgPSBbIC4uLmlucHV0RGF0YS5nZXROb2RlKCkgXTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRsZXQgdmFsdWU7XHJcblx0aWYgKCB0aGlzLmlzQXJyYXkoKSApIHtcclxuXHRcdHZhbHVlID0gQXJyYXkuZnJvbSggdGhpcy5ub2RlcyApLlxyXG5cdFx0XHRtYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR2YWx1ZSA9IHRoaXMubm9kZXNbIDAgXT8udmFsdWU7XHJcblx0fVxyXG5cdHRoaXMuY2FsY1ZhbHVlID0gdmFsdWU7XHJcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdmFsdWU7XHJcbn07XHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHR0aGlzLm5vZGVzICAgPSBbIG5vZGUgXTtcclxuXHR0aGlzLnJhd05hbWUgPSBub2RlLm5hbWUgPz8gJyc7XHJcblx0dGhpcy5uYW1lICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XHJcblxyXG5cdHRoaXMuaW5wdXRUeXBlID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG59O1xyXG4vKipcclxuICogUnVucyBvbmNlIGluIGxpZmVjeWNsZS5cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUub25PYnNlcnZlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcclxuXHJcblx0LyoqXHJcblx0ICogU2F2ZSBsaW5rIHRvIHRoaXMgb2JqZWN0XHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xyXG5cclxuXHR0aGlzLmlzUmVxdWlyZWQgPSB0aGlzLmNoZWNrSXNSZXF1aXJlZCgpO1xyXG5cclxuXHR0aGlzLmNhbGxhYmxlID0gZ2V0U2lnbmFsKCBub2RlLCB0aGlzICk7XHJcblx0dGhpcy5jYWxsYWJsZS5zZXRJbnB1dCggdGhpcyApO1xyXG5cclxuXHR0aGlzLnJlcG9ydGluZyA9IGNyZWF0ZVJlcG9ydCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmxvYWRpbmcud2F0Y2goICgpID0+IHRoaXMub25DaGFuZ2VMb2FkaW5nKCkgKTtcclxuXHJcblx0dGhpcy5wYXRoID0gWyAuLi50aGlzLmdldFBhcmVudFBhdGgoKSwgdGhpcy5uYW1lIF07XHJcblxyXG5cdGlmIChcclxuXHRcdC8vIGlzIGFqYXhcclxuXHRcdCF0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKSB8fFxyXG5cdFx0dGhpcy5oYXNQYXJlbnQoKVxyXG5cdCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIud2F0Y2hSZXNldCggKCkgPT4gdGhpcy5vbkNsZWFyKCkgKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5vbkNoYW5nZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5nZXRTdWJtaXQoKS5sb2NrU3RhdGUuY3VycmVudCA9IHRoaXMubG9hZGluZy5jdXJyZW50O1xyXG5cclxuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XHJcblx0Y29uc3Qgd3JhcHBlciAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XHJcblxyXG5cdG5vZGUucmVhZE9ubHkgPSB0aGlzLmxvYWRpbmcuY3VycmVudDtcclxuXHR3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoICdpcy1sb2FkaW5nJywgdGhpcy5sb2FkaW5nLmN1cnJlbnQgKTtcclxufTtcclxuLyoqXHJcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5zZXRSb290ID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xyXG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XHJcbn07XHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0IGl0IHJ1bnMgb25seSBpZiByZXBlYXRlciBpdGVtIHdhcyByZW1vdmVkXHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG4vKipcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5uYW1lO1xyXG59O1xyXG4vKipcclxuICogQHJldHVybnMge2FycmF5fHN0cmluZ3xib29sZWFufVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG59O1xyXG4vKipcclxuICogQHJldHVybnMge2FycmF5fVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXROb2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLm5vZGVzO1xyXG59O1xyXG4vKipcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmlzQXJyYXkgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMucmF3TmFtZS5pbmNsdWRlcyggJ1tdJyApO1xyXG59O1xyXG4vKipcclxuICogQHBhcmFtIGNhbGxhYmxlIHtGdW5jdGlvbnxtaXhlZH1cclxuICogQHBhcmFtIGlucHV0Q29udGV4dCB7SW5wdXREYXRhfEJvb2xlYW59XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmJlZm9yZVN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUsIGlucHV0Q29udGV4dCA9IGZhbHNlICkge1xyXG5cdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLnByb21pc2UoIGNhbGxhYmxlLCBpbnB1dENvbnRleHQgKTtcclxufTtcclxuLyoqXHJcbiAqIEByZXR1cm5zIHtGb3JtU3VibWl0fVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0Um9vdCgpLmZvcm07XHJcbn07XHJcbi8qKlxyXG4gKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcclxuXHRcdHJldHVybiB0aGlzLnJvb3Q7XHJcblx0fVxyXG5cdHJldHVybiB0aGlzLnJvb3QucGFyZW50LmdldFJvb3QoKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XHJcblxyXG5cdHJldHVybiBpc1Zpc2libGUoIHdyYXBwZXIgKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnNpbGVuY2VTZXQoIG51bGwgKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIG5ldyBSZWFjdGl2ZVZhcigpO1xyXG59O1xyXG5cclxuSW5wdXREYXRhLnByb3RvdHlwZS5jaGVja0lzUmVxdWlyZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRyZXR1cm4gbm9kZS5yZXF1aXJlZCA/PyAhIW5vZGUuZGF0YXNldC5yZXF1aXJlZD8ubGVuZ3RoO1xyXG59O1xyXG5cclxuSW5wdXREYXRhLnByb3RvdHlwZS5zaWxlbmNlU2V0ID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHQvKipcclxuXHQgKiBSZWxhdGVkIHRvIGlzc3VlXHJcblx0ICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEyNjEjaXNzdWVjb21tZW50LTEyOTMyOTAyOTFcclxuXHQgKi9cclxuXHRjb25zdCB0ZW1wUmVwb3J0ID0gdGhpcy5yZXBvcnQuYmluZCggdGhpcyApO1xyXG5cclxuXHR0aGlzLnJlcG9ydCA9ICgpID0+IHt9O1xyXG5cclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcclxuXHJcblx0dGhpcy5yZXBvcnQgPSB0ZW1wUmVwb3J0O1xyXG59O1xyXG5cclxuSW5wdXREYXRhLnByb3RvdHlwZS5zaWxlbmNlTm90aWZ5ID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHRlbXBSZXBvcnQgPSB0aGlzLnJlcG9ydC5iaW5kKCB0aGlzICk7XHJcblxyXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XHJcblxyXG5cdHRoaXMudmFsdWUubm90aWZ5KCk7XHJcblxyXG5cdHRoaXMucmVwb3J0ID0gdGVtcFJlcG9ydDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5oYXNQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuICEhdGhpcy5yb290Py5wYXJlbnQ7XHJcbn07XHJcblxyXG4vKipcclxuICogRm9yIGluc2VydCBlcnJvcnMgaW4gYWR2YW5jZWQgdmFsaWRhdGlvbiBtb2RlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRXcmFwcGVyTm9kZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5ub2Rlc1sgMCBdLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XHJcbn07XHJcblxyXG5JbnB1dERhdGEucHJvdG90eXBlLmhhbmRsZUVudGVyS2V5ID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRpZiAoIGV2ZW50LmtleSAhPT0gJ0VudGVyJyB8fCAvLyBub3QgZW50ZXIga2V5XHJcblx0XHQhdGhpcy5lbnRlcktleSB8fCAvLyBoYW5kbGluZyBlbnRlciBrZXkgaXMgZGlzYWJsZWRcclxuXHRcdGV2ZW50LnNoaWZ0S2V5IHx8IC8vIHRoZSBzaGlmdCBrZXkgd2FzIHByZXNzZWRcclxuXHRcdGV2ZW50LmlzQ29tcG9zaW5nIC8vIGlmIHRoZSBldmVudCBpcyBmaXJlZCB3aXRoaW4gYSBjb21wb3NpdGlvbiBzZXNzaW9uXHJcblx0KSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHR0aGlzLm9uRW50ZXJLZXkoKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUub25FbnRlcktleSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBjYW5TdWJtaXQgPSB0aGlzLmVudGVyS2V5LmFwcGx5RmlsdGVycyggdHJ1ZSApO1xyXG5cclxuXHRpZiAoIGNhblN1Ym1pdCApIHtcclxuXHRcdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuSW5wdXREYXRhLnByb3RvdHlwZS5pbml0Tm90aWZ5VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5zaWxlbmNlTm90aWZ5KCk7XHJcbn07XHJcblxyXG5JbnB1dERhdGEucHJvdG90eXBlLm9uRm9jdXMgID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuc2Nyb2xsVG8oKTtcclxuXHR0aGlzLmZvY3VzUmF3KCk7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUuZm9jdXNSYXcgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHQvKipcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yMjY1I2lzc3VlY29tbWVudC0xNDQ3OTg4NzE4XHJcblx0ICovXHJcblx0aWYgKCBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0bm9kZT8uZm9jdXMoIHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9ICk7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcclxuXHJcblx0d2luZG93LnNjcm9sbFRvKCB7XHJcblx0XHR0b3A6IGdldE9mZnNldFRvcCggd3JhcHBlciApIC0gdGhpcy5vZmZzZXRPbkZvY3VzLFxyXG5cdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxyXG5cdH0gKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtSZXBvcnRpbmdDb250ZXh0fVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLnJvb3QuZ2V0Q29udGV4dCgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW58SW5wdXREYXRhW119XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVkIHdpdGggZGVmYXVsdCBicm93c2VyIHZhbGlkYXRpb25cclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJlcG9ydGluZ05vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMubm9kZXNbIDAgXTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UGFyZW50UGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtBcnJheXxPYmplY3R9XHJcblx0ICovXHJcblx0Y29uc3QgdmFsdWUgPSB0aGlzLnJvb3QucGFyZW50LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiB2YWx1ZSApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIHJvdyBdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZSApICkge1xyXG5cdFx0aWYgKCByb3cgIT09IHRoaXMucm9vdCApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHQuLi50aGlzLnJvb3QucGFyZW50LmdldFBhcmVudFBhdGgoKSxcclxuXHRcdFx0dGhpcy5yb290LnBhcmVudC5uYW1lLFxyXG5cdFx0XHRpbmRleCxcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW107XHJcbn07XHJcblxyXG4vKipcclxuICogUnVucyBvbmx5IG9uY2Ugb24gd2luZG93IFwibG9hZFwiIGV2ZW50XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLnJlUXVlcnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnNldFZhbHVlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0RGF0YTsiLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcclxuaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi9zdXBwb3J0cyc7XHJcblxyXG5mdW5jdGlvbiBOb0xpc3RlbkRhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7Tm9kZX1cclxuXHQgKi9cclxuXHR0aGlzLmNvbW1lbnQgPSBudWxsO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc0hpZGRlbiggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxyXG5cdH07XHJcblx0dGhpcy5vbk9ic2VydmUgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLm9uT2JzZXJ2ZS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdFx0aWYgKCAhdGhpcy5pc0FycmF5KCkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldENvbW1lbnQoKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0Q29tbWVudCAgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5jb21tZW50ICAgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCB0aGlzLm5hbWUgKTtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcclxuXHJcblx0XHRub2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKCB0aGlzLmNvbW1lbnQsIG5vZGUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmlzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm1lcmdlID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHRoaXMubm9kZXMucHVzaCggLi4uaW5wdXQuZ2V0Tm9kZSgpICk7XHJcblx0fTtcclxufVxyXG5cclxuTm9MaXN0ZW5EYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vTGlzdGVuRGF0YTsiLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcclxuaW1wb3J0IHsgaXNSYW5nZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcclxuXHJcbmZ1bmN0aW9uIFJhbmdlRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5udW1iZXJOb2RlID0gbnVsbDtcclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzUmFuZ2UoIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0Tm9kZSAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cclxuXHRcdHRoaXMubnVtYmVyTm9kZSA9IG5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlLW51bWJlcicsXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcblJhbmdlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5nZURhdGE7IiwiaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XHJcbmltcG9ydCBSZWFjdGl2ZVNldCBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVNldCc7XHJcblxyXG5jb25zdCB7IGJ1aWx0SW5TdGF0ZXMgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7UmVhY3RpdmVTZXR9IHZhbHVlXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gUmVuZGVyU3RhdGVEYXRhKCkge1xyXG5cdE5vTGlzdGVuRGF0YS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQnaGlkZGVuJyA9PT0gbm9kZT8udHlwZSAmJlxyXG5cdFx0XHQnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXNbXScgPT09IG5vZGUubmFtZVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XHJcblx0ICovXHJcblx0dGhpcy5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcclxuXHRcdHRoaXMudmFsdWUuYWRkKCBzdGF0ZU5hbWUgKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XHJcblx0ICovXHJcblx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcclxuXHRcdHRoaXMudmFsdWUucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XHJcblx0ICogQHBhcmFtIGZvcmNlIHtudWxsfEJvb2xlYW59XHJcblx0ICovXHJcblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSwgZm9yY2UgPSBudWxsICkge1xyXG5cdFx0dGhpcy52YWx1ZS50b2dnbGUoIHN0YXRlTmFtZSwgZm9yY2UgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmlzQ3VzdG9tID0gZnVuY3Rpb24gKCBrZXkgKSB7XHJcblx0XHRyZXR1cm4gIWJ1aWx0SW5TdGF0ZXMuaW5jbHVkZXMoIGtleSApO1xyXG5cdH07XHJcbn1cclxuXHJcblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBOb0xpc3RlbkRhdGEucHJvdG90eXBlICk7XHJcblxyXG5SZW5kZXJTdGF0ZURhdGEucHJvdG90eXBlLmdldFJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBuZXcgUmVhY3RpdmVTZXQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN0YXRlRGF0YTsiLCJpbXBvcnQgQ2hhbmdlRGF0YSBmcm9tICcuL0NoYW5nZURhdGEnO1xyXG5pbXBvcnQgUmFuZ2VEYXRhIGZyb20gJy4vUmFuZ2VEYXRhJztcclxuaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XHJcbmltcG9ydCBSZW5kZXJTdGF0ZURhdGEgZnJvbSAnLi9SZW5kZXJTdGF0ZURhdGEnO1xyXG5pbXBvcnQgeyBzZXRBdHRycyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG5cdCAgICAgIGRvQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7ZnVuY3Rpb24oKTogKn1cclxuICovXHJcbmNvbnN0IGdldERhdGFUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0W1xyXG5cdFx0UmVuZGVyU3RhdGVEYXRhLFxyXG5cdFx0UmFuZ2VEYXRhLFxyXG5cdFx0Q2hhbmdlRGF0YSxcclxuXHRcdE5vTGlzdGVuRGF0YSxcclxuXHRdLFxyXG4pO1xyXG5cclxubGV0IGRhdGFUeXBlcyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KCBub2RlLCBvYnNlcnZhYmxlICkge1xyXG5cdGlmICggIWRhdGFUeXBlcy5sZW5ndGggKSB7XHJcblx0XHRkYXRhVHlwZXMgPSBnZXREYXRhVHlwZXMoKTtcclxuXHR9XHJcblx0Zm9yICggY29uc3QgZGF0YVR5cGUgb2YgZGF0YVR5cGVzICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBkYXRhVHlwZSgpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjdXJyZW50LnNldFJvb3QoIG9ic2VydmFibGUgKTtcclxuXHRcdGN1cnJlbnQuc2V0Tm9kZSggbm9kZSApO1xyXG5cdFx0c2V0QXR0cnMoIGN1cnJlbnQgKTtcclxuXHJcblx0XHRkb0FjdGlvbiggJ2pldC5mYi5pbnB1dC5jcmVhdGVkJywgY3VycmVudCApO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxuXHJcblx0Y29uc29sZS5lcnJvciggJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgbm9kZSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJzZWROYW1lKCBuYW1lICkge1xyXG5cdGNvbnN0IHJlZ2V4cHMgPSBbXHJcblx0XHQvLyBtdWx0aXBsZSBmaWVsZHMgKGNoZWNrYm94W10pXHJcblx0XHQvXihbXFx3XFwtXSspXFxbXFxdJC8sXHJcblx0XHQvLyBmaWVsZHMgaW5zaWRlIHJlcGVhdGVyIChyZXBfbmFtZVsxXVtjb250ZW50X2ZpZWxkXSlcclxuXHRcdC9eW1xcd1xcLV0rXFxbXFxkK1xcXVxcWyhbXFx3XFwtXSspXFxdXFxbP1xcXT8kLyxcclxuXHRdO1xyXG5cclxuXHRmb3IgKCBjb25zdCByZWdFeHAgb2YgcmVnZXhwcyApIHtcclxuXHRcdGlmICggIXJlZ0V4cC50ZXN0KCBuYW1lICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgbWF0Y2hlcyA9IG5hbWUubWF0Y2goIHJlZ0V4cCApO1xyXG5cclxuXHRcdHJldHVybiBtYXRjaGVzWyAxIF07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmFtZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dHMge0lucHV0RGF0YVtdfVxyXG4gKi9cclxuZnVuY3Rpb24gcG9wdWxhdGVJbnB1dHMoIGlucHV0cyApIHtcclxuXHRjb25zdCBsaXN0ID0gW107XHJcblxyXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcclxuXHRcdGNvbnN0IGlubmVyID0gaW5wdXQucG9wdWxhdGVJbm5lcigpO1xyXG5cclxuXHRcdGlubmVyPy5sZW5ndGggJiYgbGlzdC5wdXNoKCAuLi5pbm5lciApO1xyXG5cclxuXHRcdGxpc3QucHVzaCggaW5wdXQgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRQYXJzZWROYW1lLCBjcmVhdGVJbnB1dCwgcG9wdWxhdGVJbnB1dHMgfTsiLCIvKipcclxuICogQHRoaXMge1JlYWN0aXZlVmFyfVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdSZWFjdGl2ZVZhcigpIHtcclxuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCBmYWxzZSApO1xyXG5cclxuXHR0aGlzLnN0YXJ0ICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuY3VycmVudCA9IHRydWU7XHJcblx0fTtcclxuXHR0aGlzLmVuZCAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuY3VycmVudCA9IGZhbHNlO1xyXG5cdH07XHJcblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmN1cnJlbnQgPSAhdGhpcy5jdXJyZW50O1xyXG5cdH07XHJcbn1cclxuXHJcbkxvYWRpbmdSZWFjdGl2ZVZhci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZWFjdGl2ZVZhci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSZWFjdGl2ZVZhcjsiLCJmdW5jdGlvbiBSZWFjdGl2ZUhvb2soKSB7XHJcblx0dGhpcy5oYW5kbGVycyA9IFtdO1xyXG59XHJcblxyXG5SZWFjdGl2ZUhvb2sucHJvdG90eXBlID0ge1xyXG5cdGFkZEZpbHRlciggY2FsbGFibGUgKSB7XHJcblx0XHR0aGlzLmhhbmRsZXJzLnB1c2goIGNhbGxhYmxlICk7XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuaGFuZGxlcnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdH0sXHJcblx0YXBwbHlGaWx0ZXJzKCAuLi5wYXJhbXMgKSB7XHJcblx0XHRsZXQgY3VycmVudCAgICAgPSBwYXJhbXNbIDAgXTtcclxuXHRcdGNvbnN0IG5ld1BhcmFtcyA9IHBhcmFtcy5zbGljZSggMSApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycyApIHtcclxuXHRcdFx0Y3VycmVudCA9IGhhbmRsZXIoIGN1cnJlbnQsIC4uLm5ld1BhcmFtcyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZUhvb2s7XHJcbiIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcclxuXHJcbmZ1bmN0aW9uIFJlYWN0aXZlU2V0KCB2YWx1ZSApIHtcclxuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCB2YWx1ZSApO1xyXG59XHJcblxyXG5SZWFjdGl2ZVNldC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZWFjdGl2ZVZhci5wcm90b3R5cGUgKTtcclxuXHJcblJlYWN0aXZlU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcclxuXHQvLyBhZGQgdW5pcXVlIHZhbHVlXHJcblx0dGhpcy5jdXJyZW50ID0gW1xyXG5cdFx0Li4ubmV3IFNldCggW1xyXG5cdFx0XHQuLi4oXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID8/IFtdXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlTmFtZSxcclxuXHRcdF0gKSxcclxuXHRdO1xyXG59O1xyXG5cclxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xyXG5cdHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5maWx0ZXIoXHJcblx0XHRpdGVtID0+IGl0ZW0gIT09IHN0YXRlTmFtZSxcclxuXHQpO1xyXG59O1xyXG5cclxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lLCBmb3JjZSA9IG51bGwgKSB7XHJcblx0aWYgKCBudWxsICE9PSBmb3JjZSApIHtcclxuXHRcdGZvcmNlID8gdGhpcy5hZGQoIHN0YXRlTmFtZSApIDogdGhpcy5yZW1vdmUoIHN0YXRlTmFtZSApO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggdGhpcy5jdXJyZW50LmluY2x1ZGVzKCBzdGF0ZU5hbWUgKSApIHtcclxuXHRcdHRoaXMucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aGlzLmFkZCggc3RhdGVOYW1lICk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVTZXQ7IiwiaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBSZWFjdGl2ZVZhciggdmFsdWUgPSBudWxsICkge1xyXG5cdHRoaXMuY3VycmVudCAgICA9IHZhbHVlO1xyXG5cdHRoaXMuc2lnbmFscyAgICA9IFtdO1xyXG5cdHRoaXMuc2FuaXRpemVycyA9IFtdO1xyXG5cdHRoaXMuaXNEZWJ1ZyAgICA9IGZhbHNlO1xyXG5cdHRoaXMuaXNTaWxlbmNlICA9IGZhbHNlO1xyXG5cdHRoaXMuaXNNYWtlZCAgICA9IGZhbHNlO1xyXG59XHJcblxyXG5SZWFjdGl2ZVZhci5wcm90b3R5cGUgPSB7XHJcblx0d2F0Y2hPbmNlOiBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xyXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNsZWFyV2F0Y2hlciA9IHRoaXMud2F0Y2goICgpID0+IHtcclxuXHRcdFx0Y2xlYXJXYXRjaGVyKCk7XHJcblx0XHRcdGNhbGxhYmxlKCk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHR3YXRjaDogZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcclxuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLnNpZ25hbHMuc29tZSggKCB7IHNpZ25hbCB9ICkgPT4gc2lnbmFsID09PSBjYWxsYWJsZSApICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNpZ25hbHMucHVzaCgge1xyXG5cdFx0XHRzaWduYWw6IGNhbGxhYmxlLFxyXG5cdFx0XHR0cmFjZTogbmV3IEVycm9yKCkuc3RhY2ssXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNpZ25hbHMubGVuZ3RoIC0gMTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zaWduYWxzLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHR9LFxyXG5cdHNhbml0aXplOiBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xyXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIC0xICE9PSB0aGlzLnNhbml0aXplcnMuaW5kZXhPZiggY2FsbGFibGUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zYW5pdGl6ZXJzLnB1c2goIGNhbGxhYmxlICk7XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNhbml0aXplcnMubGVuZ3RoIC0gMTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zYW5pdGl6ZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHR9LFxyXG5cdG1ha2U6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggdGhpcy5pc01ha2VkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzTWFrZWQgID0gdHJ1ZTtcclxuXHRcdGxldCBjdXJyZW50ICAgPSB0aGlzLmN1cnJlbnQ7XHJcblx0XHRsZXQgcHJldlZhbHVlID0gbnVsbDtcclxuXHRcdGNvbnN0IHNlbGYgICAgPSB0aGlzO1xyXG5cclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgJ2N1cnJlbnQnLCB7XHJcblx0XHRcdGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gY3VycmVudDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0KCBuZXdWYWwgKSB7XHJcblx0XHRcdFx0aWYgKCBjdXJyZW50ID09PSBuZXdWYWwgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHByZXZWYWx1ZSA9IGN1cnJlbnQ7XHJcblx0XHRcdFx0aWYgKCBzZWxmLmlzRGVidWcgKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwKCAnUmVhY3RpdmVWYXIgaGFzIGNoYW5nZWQnICk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ2N1cnJlbnQ6JywgY3VycmVudCApO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICduZXdWYWw6JywgbmV3VmFsICk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3VycmVudCA9IHNlbGYuYXBwbHlTYW5pdGl6ZXJzKCBuZXdWYWwgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBzZWxmLmlzU2lsZW5jZSApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2VsZi5ub3RpZnkoIHByZXZWYWx1ZSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0bm90aWZ5OiBmdW5jdGlvbiAoIHByZXZWYWx1ZSA9IG51bGwgKSB7XHJcblx0XHR0aGlzLnNpZ25hbHMuZm9yRWFjaChcclxuXHRcdFx0KCB7IHNpZ25hbCB9ICkgPT4gc2lnbmFsLmNhbGwoIHRoaXMsIHByZXZWYWx1ZSApICk7XHJcblx0fSxcclxuXHRhcHBseVNhbml0aXplcnM6IGZ1bmN0aW9uICggdmFsdWUgKSB7XHJcblx0XHRmb3IgKCBjb25zdCBzYW5pdGl6ZXIgb2YgdGhpcy5zYW5pdGl6ZXJzICkge1xyXG5cdFx0XHR2YWx1ZSA9IHNhbml0aXplci5jYWxsKCB0aGlzLCB2YWx1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9LFxyXG5cdHNldElmRW1wdHkoIG5ld1ZhbHVlICkge1xyXG5cdFx0aWYgKCAhaXNFbXB0eSggdGhpcy5jdXJyZW50ICkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnQgPSBuZXdWYWx1ZTtcclxuXHR9LFxyXG5cdGRlYnVnKCkge1xyXG5cdFx0dGhpcy5pc0RlYnVnID0gIXRoaXMuaXNEZWJ1ZztcclxuXHR9LFxyXG5cdHNpbGVuY2UoKSB7XHJcblx0XHR0aGlzLmlzU2lsZW5jZSA9ICF0aGlzLmlzU2lsZW5jZTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVWYXI7IiwiaW1wb3J0IFJlcG9ydGluZ0ludGVyZmFjZSBmcm9tICcuL1JlcG9ydGluZ0ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGFsbFJlamVjdGVkIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEJyb3dzZXJSZXBvcnRpbmcoKSB7XHJcblx0UmVwb3J0aW5nSW50ZXJmYWNlLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJlcG9ydFJhdyAgID0gZnVuY3Rpb24gKCB2YWxpZGF0aW9uRXJyb3JzICkge1xyXG5cdH07XHJcblx0dGhpcy5yZXBvcnRGaXJzdCA9IGZ1bmN0aW9uICggdmFsaWRhdGlvbkVycm9ycyApIHtcclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKTtcclxuXHJcblx0XHRub2RlLnJlcG9ydFZhbGlkaXR5KCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRSZXN0cmljdGlvbnMgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMoIHRoaXMsIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMuY2xlYXJSZXBvcnQgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIGJyb3dzZXIgYXV0b21hdGljYWxseSBoaWRlIHRvb2x0aXAgbWVzc2FnZXNcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMudmFsaWRhdGUoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcyApIHtcclxuXHRcdGNvbnN0IGVycm9ycyAgID0gYXdhaXQgYWxsUmVqZWN0ZWQoIHByb21pc2VzICk7XHJcblx0XHR0aGlzLnZhbHVlUHJldiA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHJcblx0XHRyZXR1cm4gZXJyb3JzO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5oYXNBdXRvU2Nyb2xsKCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5nZXROb2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQuZ2V0UmVwb3J0aW5nTm9kZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcbkJyb3dzZXJSZXBvcnRpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVwb3J0aW5nSW50ZXJmYWNlLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlclJlcG9ydGluZzsiLCJmdW5jdGlvbiBSZXBvcnRpbmdDb250ZXh0KCByb290ICkge1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxyXG5cdCAqL1xyXG5cdHRoaXMucm9vdCA9IHJvb3Q7XHJcblxyXG5cdHRoaXMucmVwb3J0ZWRGaXJzdCA9IGZhbHNlO1xyXG5cdHRoaXMuc2lsZW5jZSAgICAgICA9IHRydWU7XHJcblxyXG59XHJcblxyXG5SZXBvcnRpbmdDb250ZXh0LnByb3RvdHlwZSA9IHtcclxuXHRyZXNldCggcHJvcHMgPSB7fSApIHtcclxuXHRcdHRoaXMucmVwb3J0ZWRGaXJzdCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zZXRTaWxlbmNlKCBwcm9wcz8uc2lsZW5jZSA/PyB0cnVlICk7XHJcblx0fSxcclxuXHRyZXBvcnRGaXJzdCgpIHtcclxuXHRcdHRoaXMucmVwb3J0ZWRGaXJzdCA9IHRydWU7XHJcblx0fSxcclxuXHRzZXRTaWxlbmNlKCB2YWx1ZSApIHtcclxuXHRcdHRoaXMuc2lsZW5jZSA9ICEhdmFsdWU7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGluZ0NvbnRleHQ7XHJcblxyXG4iLCIvKipcclxuICogVmFsaWRhdGlvbiBsb2dpYzogb24gY2hhbmdlIGlucHV0IHZhbHVlIHdlIHJ1blxyXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS52YWxpZGF0ZU9uQ2hhbmdlXHJcbiAqXHJcbiAqIEluIHRoYXQgZnVuY3Rpb24gd2UgY2xlYXIgc3RvcmVkIGVycm9yc1xyXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5lcnJvcnNcclxuICogY2hlY2sgYWxsIHJlc3RyaWN0aW9ucyBhZ2FpbiBhbmQgc2F2ZSBlcnJvcnNcclxuICogdG8gdGhlIHNhbWUgcHJvcGVydHkuXHJcbiAqXHJcbiAqIFdoZW4gdXNlciB0cmllcyB0byBzdWJtaXQgZm9ybSB3ZSBydW5cclxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UudmFsaWRhdGVcclxuICogSWYgdGhlcmUgd2FzIHN0b3JlZCBlcnJvcnMgLSBpdCB3aWxsIHJldHVybiB0aGVtLlxyXG4gKiBPdGhlcndpc2Ugd2UgY2hlY2sgYWxsIGFuZCBzYXZlIGVycm9ycy5cclxuICpcclxuICogSW4gdGhlIGNhc2Ugd2hlbiB3ZSBydW4gdGhlIHZhbGlkYXRpb24gdGhyb3VnaCB0aGVcclxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UuaXNWYWxpZFxyXG4gKiBXZSBcImJsb2NrIHRoZSBmb3JtXCIgdGhyb3VnaCB0aGUgXCJ0ZXN0XCIgcHJvcGVydHkuXHJcbiAqIFRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsIGFuZCB3aGVuIGl0IGNoYW5nZXMsXHJcbiAqIHRoZSBzdGF0ZSBvZiB0aGUgYnV0dG9uIGZvciBzdWJtaXR0aW5nIHRoZSBmb3JtXHJcbiAqIGFuZCB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGJldHdlZW4gcGFnZXMgY2hhbmdlcy5cclxuICpcclxuICovXHJcbmltcG9ydCBSZXN0cmljdGlvbkVycm9yIGZyb20gJy4vUmVzdHJpY3Rpb25FcnJvcic7XHJcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XHJcblxyXG5mdW5jdGlvbiBSZXBvcnRpbmdJbnRlcmZhY2UoKSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLmlucHV0ID0gbnVsbDtcclxuXHR0aGlzLmlzUmVxdWlyZWQgPSBmYWxzZTtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7YXJyYXl8bnVsbH1cclxuXHQgKi9cclxuXHR0aGlzLmVycm9ycyA9IG51bGw7XHJcblx0dGhpcy5yZXN0cmljdGlvbnMgPSBbXTtcclxuXHJcblx0dGhpcy52YWx1ZVByZXYgICAgID0gbnVsbDtcclxuXHR0aGlzLnZhbGlkaXR5U3RhdGUgPSBudWxsO1xyXG5cdHRoaXMucHJvbWlzZXNDb3VudCA9IDA7XHJcbn1cclxuXHJcblJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge1Jlc3RyaWN0aW9uW119XHJcblx0ICovXHJcblx0cmVzdHJpY3Rpb25zOiBbXSxcclxuXHR2YWx1ZVByZXY6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG5cdCAqL1xyXG5cdHZhbGlkaXR5U3RhdGU6IG51bGwsXHJcblx0cHJvbWlzZXNDb3VudDogMCxcclxuXHQvKipcclxuXHQgKiBSdW5zIG9uIGNoYW5naW5nIHZhbHVlIGluIHRoZSBmaWVsZFxyXG5cdCAqIEBzZWUgSW5wdXREYXRhLm9uQ2hhbmdlXHJcblx0ICovXHJcblx0dmFsaWRhdGVPbkNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG5cdH0sXHJcblx0dmFsaWRhdGVPbkJsdXI6IGZ1bmN0aW9uICgpIHtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIFJ1bnMgb24gdHJ5aW5nIHRvIHN1Ym1pdCBmb3JtXHJcblx0ICogQHNlZSBPYnNlcnZhYmxlLmlucHV0c0FyZVZhbGlkXHJcblx0ICpcclxuXHQgKiBSdW5zIG9uIGNoYW5naW5nIHZhbHVlLCBpZiB0aGlzIGZpZWxkIGluc2lkZSBwYWdlXHJcblx0ICogQHNlZSBJbnB1dERhdGEuc2V0UGFnZVxyXG5cdCAqIEBzZWUgUGFnZVN0YXRlLnVwZGF0ZVN0YXRlXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuXHQgKi9cclxuXHR2YWxpZGF0ZTogYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgZXJyb3JzID0gYXdhaXQgdGhpcy5nZXRFcnJvcnMoKTtcclxuXHJcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCA9ICFCb29sZWFuKCBlcnJvcnMubGVuZ3RoICk7XHJcblxyXG5cdFx0aWYgKCAhZXJyb3JzLmxlbmd0aCApIHtcclxuXHRcdFx0dGhpcy5jbGVhclJlcG9ydCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0IXRoaXMuaW5wdXQucm9vdC5nZXRDb250ZXh0KCkuc2lsZW5jZSAmJiB0aGlzLnJlcG9ydCggZXJyb3JzICk7XHJcblxyXG5cdFx0dGhyb3cgbmV3IFJlc3RyaWN0aW9uRXJyb3IoIGVycm9yc1sgMCBdLm5hbWUgKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBwcm9taXNlcyB7RnVuY3Rpb25bXX1cclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGFycmF5fG51bGw+fVxyXG5cdCAqL1xyXG5cdGdldEVycm9yc1JhdzogYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcyApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvciggJ2dldEVycm9yIG11c3QgcmV0dXJuIGEgUHJvbWlzZScgKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGFycmF5fCpbXXxudWxsPn1cclxuXHQgKi9cclxuXHRnZXRFcnJvcnM6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5pbnB1dC5sb2FkaW5nLmN1cnJlbnQgfHxcclxuXHRcdFx0dGhpcy5pbnB1dD8uY2FsbGFibGU/LmxvY2s/LmN1cnJlbnQgfHxcclxuXHRcdFx0IXRoaXMuaW5wdXQuaXNWaXNpYmxlKClcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmdldFByb21pc2VzKCk7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQhdGhpcy5oYXNDaGFuZ2VkVmFsdWUoKSAmJlxyXG5cdFx0XHR0aGlzLnByb21pc2VzQ291bnQgPT09IHByb21pc2VzLmxlbmd0aFxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9ycyA/PyBbXTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnByb21pc2VzQ291bnQgPSBwcm9taXNlcy5sZW5ndGg7XHJcblx0XHR0aGlzLmVycm9ycyAgICAgICAgPSBbXTtcclxuXHJcblx0XHRpZiAoICFwcm9taXNlcy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9ycztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmVycm9ycyA9IGF3YWl0IHRoaXMuZ2V0RXJyb3JzUmF3KCBwcm9taXNlcyApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmVycm9ycztcclxuXHR9LFxyXG5cdHJlcG9ydDogZnVuY3Rpb24gKCB2YWxpZGF0aW9uRXJyb3JzICkge1xyXG5cdFx0aWYgKCB0aGlzLmlucHV0LmdldENvbnRleHQoKS5yZXBvcnRlZEZpcnN0ICkge1xyXG5cdFx0XHR0aGlzLnJlcG9ydFJhdyggdmFsaWRhdGlvbkVycm9ycyApO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnJlcG9ydEZpcnN0KCk7XHJcblxyXG5cdFx0dGhpcy5yZXBvcnRGaXJzdCggdmFsaWRhdGlvbkVycm9ycyApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHZhbGlkYXRpb25FcnJvcnMge1Jlc3RyaWN0aW9uW119XHJcblx0ICogQHJldHVybiB2b2lkXHJcblx0ICovXHJcblx0cmVwb3J0UmF3OiBmdW5jdGlvbiAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdyZXBvcnQgaXMgZW1wdHknICk7XHJcblx0fSxcclxuXHRyZXBvcnRGaXJzdDogZnVuY3Rpb24gKCB2YWxpZGF0aW9uRXJyb3JzICkge1xyXG5cdFx0dGhpcy5yZXBvcnQoIHZhbGlkYXRpb25FcnJvcnMgKTtcclxuXHR9LFxyXG5cdGNsZWFyUmVwb3J0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdjbGVhclJlcG9ydCBpcyBlbXB0eScgKTtcclxuXHR9LFxyXG5cdGdldFByb21pc2VzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHRoaXMucmVzdHJpY3Rpb25zICkge1xyXG5cdFx0XHRpZiAoICF0aGlzLmNhblByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKTtcclxuXHJcblx0XHRcdHByb21pc2VzLnB1c2goICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0aW9uLnZhbGlkYXRlUHJvbWlzZSgpLlxyXG5cdFx0XHRcdFx0dGhlbiggKCkgPT4gcmVzb2x2ZSggcmVzdHJpY3Rpb24gKSApLlxyXG5cdFx0XHRcdFx0Y2F0Y2goIGVycm9yID0+IHJlamVjdCggWyByZXN0cmljdGlvbiwgZXJyb3IgXSApICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcHJvbWlzZXM7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxyXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59XHJcblx0ICovXHJcblx0Y2FuUHJvY2Vzc1Jlc3RyaWN0aW9uOiBmdW5jdGlvbiAoIHJlc3RyaWN0aW9uICkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHJlc3RyaWN0aW9uIHtSZXN0cmljdGlvbn1cclxuXHQgKi9cclxuXHRiZWZvcmVQcm9jZXNzUmVzdHJpY3Rpb246IGZ1bmN0aW9uICggcmVzdHJpY3Rpb24gKSB7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gbm9kZVxyXG5cdCAqIEBwYXJhbSBpbnB1dFxyXG5cdCAqXHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCBub2RlLCBpbnB1dCApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvciggJ2lzU3VwcG9ydGVkIGlzIGVtcHR5JyApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0c2V0SW5wdXQ6IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUgPSBuZXcgUmVhY3RpdmVWYXIoKTtcclxuXHRcdHRoaXMudmFsaWRpdHlTdGF0ZS5tYWtlKCk7XHJcblxyXG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0O1xyXG5cdFx0dGhpcy5zZXRSZXN0cmljdGlvbnMoKTtcclxuXHRcdHRoaXMuZmlsdGVyUmVzdHJpY3Rpb25zKCk7XHJcblx0fSxcclxuXHRzZXRSZXN0cmljdGlvbnM6IGZ1bmN0aW9uICgpIHtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0Z2V0Tm9kZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQubm9kZXNbIDAgXTtcclxuXHR9LFxyXG5cclxuXHRoYXNDaGFuZ2VkVmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnZhbHVlUHJldiAhPT0gdGhpcy5pbnB1dC5nZXRWYWx1ZSgpO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge1Byb21pc2U8Kj59XHJcblx0ICovXHJcblx0Y2hlY2tWYWxpZGl0eTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgaXNTaWxlbmNlID0gdGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2lsZW5jZTtcclxuXHJcblx0XHRpZiAoIG51bGwgPT09IHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUoKTtcclxuXHRcdH1cclxuXHRcdGlmICggdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGlzU2lsZW5jZSApIHtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0IWlzU2lsZW5jZSAmJiB0aGlzLnJlcG9ydCggdGhpcy5lcnJvcnMgfHwgW10gKTtcclxuXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuMVxyXG5cdCAqXHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRoYXNBdXRvU2Nyb2xsOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBXaXRoIHRoZSBoZWxwIG9mIGZpbHRlcnMgdGhhdCBhZGQgbmV3IHJlc3RyaWN0aW9ucyxcclxuXHQgKiB5b3UgY2FuIG92ZXJ3cml0ZSBhIHBhcnRpY3VsYXIgcmVzdHJpY3Rpb25cclxuXHQgKiBpZiB0aGUgXCJ0eXBlXCIgcHJvcGVydHkgaXMgZGVmaW5lZCBpbiBpdFxyXG5cdCAqL1xyXG5cdGZpbHRlclJlc3RyaWN0aW9uczogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgbWFwID0ge307XHJcblxyXG5cdFx0Zm9yICggbGV0IFsgaW5kZXgsIHJlc3RyaWN0aW9uIF0gb2YgT2JqZWN0LmVudHJpZXMoXHJcblx0XHRcdHRoaXMucmVzdHJpY3Rpb25zICkgKSB7XHJcblx0XHRcdGluZGV4ID0gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpID8gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpIDogaW5kZXg7XHJcblxyXG5cdFx0XHRtYXBbIGluZGV4IF0gPSByZXN0cmljdGlvbjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlc3RyaWN0aW9ucyA9IE9iamVjdC52YWx1ZXMoIG1hcCApO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRpbmdJbnRlcmZhY2U7IiwiZnVuY3Rpb24gUmVzdHJpY3Rpb25FcnJvciggbWVzc2FnZSApIHtcclxuXHRFcnJvci5jYWxsKCB0aGlzLCBtZXNzYWdlICk7XHJcblxyXG5cdGlmICggRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgKSB7XHJcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSggdGhpcywgUmVzdHJpY3Rpb25FcnJvciApO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuc3RhY2sgPSAoXHJcblx0XHRcdG5ldyBFcnJvcigpXHJcblx0XHQpLnN0YWNrO1xyXG5cdH1cclxufVxyXG5cclxuUmVzdHJpY3Rpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFcnJvci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RyaWN0aW9uRXJyb3I7IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmltcG9ydCBCcm93c2VyUmVwb3J0aW5nIGZyb20gJy4vQnJvd3NlclJlcG9ydGluZyc7XHJcbmltcG9ydCB7IGFsbFJlamVjdGVkIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcclxuaW1wb3J0IE5hdGl2ZVJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL05hdGl2ZVJlc3RyaWN0aW9uJztcclxuaW1wb3J0IFJlcXVpcmVkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IGdldFJlcG9ydFR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIucmVwb3J0aW5nJyxcclxuXHRbXHJcblx0XHRCcm93c2VyUmVwb3J0aW5nLFxyXG5cdF0sXHJcbik7XHJcblxyXG5sZXQgcmVwb3J0VHlwZXMgPSBbXTtcclxuXHJcbmNvbnN0IGdldERlZmF1bHRSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXHJcblx0W1xyXG5cdFx0TmF0aXZlUmVzdHJpY3Rpb24sXHJcblx0XHRSZXF1aXJlZFJlc3RyaWN0aW9uLFxyXG5cdF0sXHJcbik7XHJcblxyXG5sZXQgZGVmYXVsdFJlc3RyaWN0aW9ucyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSByZXBvcnRpbmcge0Jyb3dzZXJSZXBvcnRpbmd9XHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyggcmVwb3J0aW5nLCBub2RlICkge1xyXG5cdGlmICggIWRlZmF1bHRSZXN0cmljdGlvbnMubGVuZ3RoICkge1xyXG5cdFx0ZGVmYXVsdFJlc3RyaWN0aW9ucyA9IGdldERlZmF1bHRSZXN0cmljdGlvbnMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIGRlZmF1bHRSZXN0cmljdGlvbnMgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlc3RyaWN0aW9uKCk7XHJcblxyXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggbm9kZSwgcmVwb3J0aW5nICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlcG9ydGluZy5yZXN0cmljdGlvbnMucHVzaCggY3VycmVudCApO1xyXG5cdH1cclxuXHJcblx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5mb3JFYWNoKCBpdGVtID0+IGl0ZW0uc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKSApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XHJcbiAqIEByZXR1cm4ge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnQoIGlucHV0ICkge1xyXG5cdGlmICggIXJlcG9ydFR5cGVzLmxlbmd0aCApIHtcclxuXHRcdHJlcG9ydFR5cGVzID0gZ2V0UmVwb3J0VHlwZXMoKTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IHJlcG9ydFR5cGUgb2YgcmVwb3J0VHlwZXMgKSB7XHJcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlcG9ydFR5cGUoKTtcclxuXHJcblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBpbnB1dC5ub2Rlc1sgMCBdLCBpbnB1dCApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGN1cnJlbnQuc2V0SW5wdXQoIGlucHV0ICk7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG5cclxuXHR0aHJvdyBuZXcgRXJyb3IoICdTb21ldGhpbmcgd2VudCB3cm9uZycgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dHMge0lucHV0RGF0YVtdfVxyXG4gKiBAcGFyYW0gc2lsZW5jZSB7Qm9vbGVhbn1cclxuICpcclxuICogQHJldHVybiB7RnVuY3Rpb25bXX1cclxuICovXHJcbmZ1bmN0aW9uIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcclxuXHRjb25zdCBjYWxsYmFja3MgPSBbXTtcclxuXHJcblx0aW5wdXRzPy5bIDAgXT8uZ2V0Q29udGV4dCgpPy5yZXNldCggeyBzaWxlbmNlIH0gKTtcclxuXHJcblx0Zm9yICggY29uc3QgaW5wdXQgb2YgaW5wdXRzICkge1xyXG5cdFx0aWYgKCAhKFxyXG5cdFx0XHRpbnB1dCBpbnN0YW5jZW9mIElucHV0RGF0YVxyXG5cdFx0KSApIHtcclxuXHRcdFx0Y29uc29sZS5ncm91cCggJ0lucHV0IGlzIG5vdCBpbnN0YW5jZSBvZiBJbnB1dERhdGEnICk7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGlucHV0ICk7XHJcblx0XHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y2FsbGJhY2tzLnB1c2goXHJcblx0XHRcdCggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0XHRcdGlucHV0LnJlcG9ydGluZy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUoKS5cclxuXHRcdFx0XHRcdHRoZW4oIHJlc29sdmUgKS5cclxuXHRcdFx0XHRcdGNhdGNoKCByZWplY3QgKTtcclxuXHRcdFx0fSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2FsbGJhY2tzO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0cyB7SW5wdXREYXRhW119XHJcbiAqIEBwYXJhbSBzaWxlbmNlIHtCb29sZWFufVxyXG4gKiBAcmV0dXJuIHtQcm9taXNlPHVua25vd25bXT59XHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0cyggaW5wdXRzLCBzaWxlbmNlID0gZmFsc2UgKSB7XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKFxyXG5cdFx0Z2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSApLm1hcChcclxuXHRcdFx0Y3VycmVudCA9PiBuZXcgUHJvbWlzZSggY3VycmVudCApLFxyXG5cdFx0KSxcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0cyB7SW5wdXREYXRhW119XHJcbiAqIEBwYXJhbSBzaWxlbmNlIHtCb29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dHNBbGwoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xyXG5cdHJldHVybiBhbGxSZWplY3RlZCggZ2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSApICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0Y3JlYXRlUmVwb3J0LFxyXG5cdHZhbGlkYXRlSW5wdXRzLFxyXG5cdHZhbGlkYXRlSW5wdXRzQWxsLFxyXG5cdGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMsXHJcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXHJcbn07IiwiaW1wb3J0IFJlc3RyaWN0aW9uIGZyb20gJy4vUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gTmF0aXZlUmVzdHJpY3Rpb24oKSB7XHJcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRyZXR1cm4gISFub2RlLmNoZWNrVmFsaWRpdHk7XHJcblx0fTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgbm9kZXMgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygbm9kZXMgKSB7XHJcblx0XHRcdGlmICggbm9kZS5jaGVja1ZhbGlkaXR5KCkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxufVxyXG5cclxuTmF0aXZlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXRpdmVSZXN0cmljdGlvbjsiLCJpbXBvcnQgUmVzdHJpY3Rpb24gZnJvbSAnLi9SZXN0cmljdGlvbic7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gUmVxdWlyZWRSZXN0cmljdGlvbigpIHtcclxuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMudHlwZSA9ICdyZXF1aXJlZCc7XHJcbn1cclxuXHJcblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5SZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdHJldHVybiByZXBvcnRpbmcuaW5wdXQuaXNSZXF1aXJlZDtcclxufTtcclxuXHJcblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWU7XHJcblxyXG5cdHJldHVybiAhaXNFbXB0eSggY3VycmVudCApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWlyZWRSZXN0cmljdGlvbjsiLCJmdW5jdGlvbiBSZXN0cmljdGlvbigpIHtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7UmVwb3J0aW5nSW50ZXJmYWNlfVxyXG5cdCAqL1xyXG5cdHRoaXMucmVwb3J0aW5nID0gbnVsbDtcclxuXHQvKipcclxuXHQgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgcHJvcGVydHlcclxuXHQgKiBpZiB5b3Ugd2FudCB0byBtYWtlIHRoaXMgUmVzdHJpY3Rpb24gb3ZlcnJpZGFibGVcclxuXHQgKlxyXG5cdCAqIEBzaW5jZSAzLjEuMFxyXG5cdCAqXHJcblx0ICogQHR5cGUge3N0cmluZ31cclxuXHQgKi9cclxuXHR0aGlzLnR5cGUgPSAnJztcclxufVxyXG5cclxuUmVzdHJpY3Rpb24ucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxyXG5cdCAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cclxuXHQgKi9cclxuXHRpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjEuMFxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0VHlwZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cclxuXHQgKi9cclxuXHRzZXRSZXBvcnRpbmc6IGZ1bmN0aW9uICggcmVwb3J0aW5nICkge1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcgPSByZXBvcnRpbmc7XHJcblx0fSxcclxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVwb3J0aW5nLmlucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHR2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAndmFsaWRhdGUgaXMgd3JvbmcnICk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxyXG5cdCAqL1xyXG5cdHZhbGlkYXRlUHJvbWlzZTogYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IHZhbGlkYXRpb25SZXN1bHQ7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggZXJyb3I/Lm1lc3NhZ2UgPz8gZXJyb3IgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdmFsaWRhdGlvblJlc3VsdFxyXG5cdFx0ICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcclxuXHRcdCAgICAgICA6IFByb21pc2UucmVqZWN0KCAndmFsaWRhdGUgaXMgd3JvbmcnICk7XHJcblx0fSxcclxuXHRvblJlYWR5KCkge1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0cmljdGlvbjsiLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xyXG5cclxuY29uc3QgeyBzdHJpY3RfbW9kZSA9IGZhbHNlIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XHJcblxyXG5jb25zdCBTVFJJQ1RfTU9ERSA9IEJvb2xlYW4oIHN0cmljdF9tb2RlICk7XHJcblxyXG5mdW5jdGlvbiBCYXNlU2lnbmFsKCkge1xyXG5cdHRoaXMuaW5wdXQgPSBudWxsO1xyXG5cdHRoaXMubG9jayAgPSBuZXcgUmVhY3RpdmVWYXIoKTtcclxuXHR0aGlzLmxvY2subWFrZSgpO1xyXG5cclxuXHR0aGlzLnRyaWdnZXJqUXVlcnkgPSAhU1RSSUNUX01PREU7XHJcbn1cclxuXHJcbkJhc2VTaWduYWwucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0aW5wdXQ6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG5cdCAqL1xyXG5cdGxvY2s6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxyXG5cdCAqIEBwYXJhbSBpbnB1dERhdGEge0lucHV0RGF0YX1cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRzZXRJbnB1dDogZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuXHR9LFxyXG5cdHJ1bjogZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XHJcblx0XHRpZiAoICF0aGlzLmxvY2suY3VycmVudCApIHtcclxuXHRcdFx0dGhpcy5ydW5TaWduYWwoIHByZXZWYWx1ZSApO1xyXG5cdFx0XHR0aGlzLnVubG9ja1RyaWdnZXIoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICF0aGlzLmxvY2suc2lnbmFscy5sZW5ndGggKSB7XHJcblx0XHRcdHRoaXMubG9jay53YXRjaE9uY2UoICgpID0+IHRoaXMucnVuU2lnbmFsKCBwcmV2VmFsdWUgKSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dHJpZ2dlckpRdWVyeSggbm9kZSApIHtcclxuXHRcdGlmICggIXRoaXMudHJpZ2dlcmpRdWVyeSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0alF1ZXJ5KCBub2RlICkudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRydW5TaWduYWw6IGZ1bmN0aW9uICggcHJldlZhbHVlICkge1xyXG5cdFx0Ly8geW91ciBjb2RlXHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAc2luY2UgMy4wLjFcclxuXHQgKi9cclxuXHRsb2NrVHJpZ2dlcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gZmFsc2U7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAc2luY2UgMy4wLjFcclxuXHQgKi9cclxuXHR1bmxvY2tUcmlnZ2VyOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIFNUUklDVF9NT0RFICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnRyaWdnZXJqUXVlcnkgPSB0cnVlO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBTVFJJQ1RfTU9ERSB9O1xyXG5leHBvcnQgZGVmYXVsdCBCYXNlU2lnbmFsOyIsImltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vQmFzZVNpZ25hbCc7XHJcbmltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xyXG5cclxuZnVuY3Rpb24gU2lnbmFsSGlkZGVuQXJyYXkoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcbn1cclxuXHJcblNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcclxuXHRyZXR1cm4gaXNIaWRkZW4oIG5vZGUgKSAmJiBpbnB1dERhdGEuaXNBcnJheSgpO1xyXG59O1xyXG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmlucHV0LnZhbHVlO1xyXG5cclxuXHRpZiAoICFjdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMuaW5wdXQubm9kZXMgKSB7XHJcblx0XHRcdG5vZGUucmVtb3ZlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5ub2Rlcy5zcGxpY2UoIDAsIHRoaXMuaW5wdXQubm9kZXMubGVuZ3RoICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBzYXZlTm9kZXMgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgdmFsdWUgb2YgY3VycmVudCApIHtcclxuXHRcdGNvbnN0IGhhc05vZGVXaXRoU2FtZVZhbHVlID0gdGhpcy5pbnB1dC5ub2Rlcy5zb21lKFxyXG5cdFx0XHQoIG5vZGUsIGluZGV4ICkgPT4ge1xyXG5cdFx0XHRcdGlmICggbm9kZS52YWx1ZSAhPT0gdmFsdWUgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNhdmVOb2Rlcy5wdXNoKCBpbmRleCApO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0aWYgKCBoYXNOb2RlV2l0aFNhbWVWYWx1ZSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcclxuXHRcdG5ld0VsZW1lbnQudHlwZSAgPSAnaGlkZGVuJztcclxuXHRcdG5ld0VsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuXHRcdG5ld0VsZW1lbnQubmFtZSAgPSB0aGlzLmlucHV0LnJhd05hbWU7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5ub2Rlcy5wdXNoKCBuZXdFbGVtZW50ICk7XHJcblx0XHRzYXZlTm9kZXMucHVzaCggdGhpcy5pbnB1dC5ub2Rlcy5sZW5ndGggLSAxICk7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5jb21tZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxyXG5cdFx0XHRuZXdFbGVtZW50LFxyXG5cdFx0XHR0aGlzLmlucHV0LmNvbW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuaW5wdXQubm9kZXMgPSB0aGlzLmlucHV0Lm5vZGVzLmZpbHRlciggKCBub2RlLCBpbmRleCApID0+IHtcclxuXHRcdGlmICggc2F2ZU5vZGVzLmluY2x1ZGVzKCBpbmRleCApICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdG5vZGUucmVtb3ZlKCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsSGlkZGVuQXJyYXk7IiwiaW1wb3J0IEJhc2VTaWduYWwgZnJvbSAnLi9CYXNlU2lnbmFsJztcclxuaW1wb3J0IHsgaXNSYW5nZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1JhbmdlRGF0YX0gaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbFJhbmdlKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XHJcblx0XHRyZXR1cm4gaXNSYW5nZSggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHRcdG5vZGUudmFsdWUgICAgID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xyXG5cclxuXHRcdHRoaXMuaW5wdXQubnVtYmVyTm9kZS50ZXh0Q29udGVudCA9IG5vZGUudmFsdWU7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsUmFuZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJhbmdlOyIsImltcG9ydCBTaWduYWxIaWRkZW5BcnJheSBmcm9tICcuL1NpZ25hbEhpZGRlbkFycmF5JztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1JlbmRlclN0YXRlRGF0YX0gaW5wdXRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBTaWduYWxSZW5kZXJTdGF0ZSgpIHtcclxuXHRTaWduYWxIaWRkZW5BcnJheS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0ICkge1xyXG5cdFx0cmV0dXJuICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlc1tdJyA9PT0gbm9kZS5uYW1lO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XHJcblx0XHRTaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUucnVuU2lnbmFsLmNhbGwoIHRoaXMsIHByZXZWYWx1ZSApO1xyXG5cclxuXHRcdGNvbnN0IHVybCAgICAgPSBuZXcgVVJMKCB3aW5kb3cubG9jYXRpb24gKTtcclxuXHRcdGNvbnN0IGZvcm1JZCAgPSB0aGlzLmlucHV0LmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCB8fCBbXTtcclxuXHRcdGNvbnN0IHBhcmFtICAgPSBgamZiWyR7IGZvcm1JZCB9XVtzdGF0ZV1gO1xyXG5cdFx0Y29uc3Qgc3RhdGVzICA9IFtdO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHN0YXRlU2x1ZyBvZiBjdXJyZW50ICkge1xyXG5cdFx0XHRpZiAoICF0aGlzLmlucHV0LmlzQ3VzdG9tKCBzdGF0ZVNsdWcgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3RhdGVzLnB1c2goIHN0YXRlU2x1ZyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggIXN0YXRlcy5sZW5ndGggKSB7XHJcblx0XHRcdGlmICggIXVybC5zZWFyY2hQYXJhbXMuaGFzKCBwYXJhbSApICkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoIHBhcmFtICk7XHJcblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgge30sICcnLCB1cmwudG9TdHJpbmcoKSApO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHBhcmFtVmFsdWUgPSBzdGF0ZXMuam9pbiggJywnICk7XHJcblx0XHRpZiAoIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCBwYXJhbSApID09PSBwYXJhbVZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoIHBhcmFtLCBwYXJhbVZhbHVlICk7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoIHt9LCAnJywgdXJsLnRvU3RyaW5nKCkgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxSZW5kZXJTdGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlbmRlclN0YXRlOyIsImltcG9ydCBTaWduYWxIaWRkZW5BcnJheSBmcm9tICcuL1NpZ25hbEhpZGRlbkFycmF5JztcclxuaW1wb3J0IFNpZ25hbFJhbmdlIGZyb20gJy4vU2lnbmFsUmFuZ2UnO1xyXG5pbXBvcnQgU2lnbmFsUmVuZGVyU3RhdGUgZnJvbSAnLi9TaWduYWxSZW5kZXJTdGF0ZSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IGdldFNpZ25hbFR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0W1xyXG5cdFx0U2lnbmFsUmFuZ2UsXHJcblx0XHRTaWduYWxSZW5kZXJTdGF0ZSxcclxuXHRcdFNpZ25hbEhpZGRlbkFycmF5LFxyXG5cdF0sXHJcbik7XHJcblxyXG4vKipcclxuICogQHR5cGUgeyhCYXNlU2lnbmFsKVtdfVxyXG4gKi9cclxubGV0IHNpZ25hbFR5cGVzID0gW107XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuICogQHJldHVybiB7QmFzZVNpZ25hbH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNpZ25hbCggbm9kZSwgaW5wdXQgKSB7XHJcblx0aWYgKCAhc2lnbmFsVHlwZXMubGVuZ3RoICkge1xyXG5cdFx0c2lnbmFsVHlwZXMgPSBnZXRTaWduYWxUeXBlcygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3Qgc2lnbmFsVHlwZSBvZiBzaWduYWxUeXBlcyApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgc2lnbmFsVHlwZSgpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUsIGlucHV0ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFNpZ25hbCB9OyIsImltcG9ydCBCYXNlU3VibWl0IGZyb20gJy4vQmFzZVN1Ym1pdCc7XHJcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XHJcbmltcG9ydCB7IGlzU3VjY2Vzc1N0YXR1cyB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEFqYXhTdWJtaXQoIGZvcm0gKSB7XHJcblx0QmFzZVN1Ym1pdC5jYWxsKCB0aGlzLCBmb3JtICk7XHJcblxyXG5cdHRoaXMuc3RhdHVzID0gbmV3IFJlYWN0aXZlVmFyKCk7XHJcblx0dGhpcy5zdGF0dXMubWFrZSgpO1xyXG5cclxuXHR0aGlzLnN1Ym1pdCAgICAgICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCAkZm9ybSAgICAgICAgICAgID0galF1ZXJ5KCB0aGlzLmZvcm0ub2JzZXJ2YWJsZS5yb290Tm9kZSApO1xyXG5cdFx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5cdFx0UHJvbWlzZS5hbGwoXHJcblx0XHRcdGFwcGx5RmlsdGVycyhcclxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5hamF4LnByb21pc2VzJyxcclxuXHRcdFx0XHR0aGlzLmdldFByb21pc2VzKCksXHJcblx0XHRcdFx0JGZvcm0sXHJcblx0XHRcdCksXHJcblx0XHQpLnRoZW4oXHJcblx0XHRcdGNhbGxiYWNrcyA9PiB0aGlzLnJ1blN1Ym1pdCggY2FsbGJhY2tzICksXHJcblx0XHQpLmNhdGNoKFxyXG5cdFx0XHRlcnJvcnMgPT4gdGhpcy5mb3JtLnRvZ2dsZSgpLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHRoaXMucnVuU3VibWl0ICAgICA9IGZ1bmN0aW9uICggY2FsbGJhY2tzICkge1xyXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XHJcblxyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoIHJvb3ROb2RlICk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoXHJcblx0XHRcdCdfamV0X2VuZ2luZV9ib29raW5nX2Zvcm1faWQnLFxyXG5cdFx0XHR0aGlzLmZvcm0uZ2V0Rm9ybUlkKCksXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIGRpc2FibGUgd2F0Y2hlcnNcclxuXHRcdHRoaXMuc3RhdHVzLnNpbGVuY2UoKTtcclxuXHJcblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gbnVsbDtcclxuXHJcblx0XHQvLyBlbmFibGUgd2F0Y2hlcnNcclxuXHRcdHRoaXMuc3RhdHVzLnNpbGVuY2UoKTtcclxuXHJcblx0XHRqUXVlcnkuYWpheCgge1xyXG5cdFx0XHR1cmw6IEpldEZvcm1CdWlsZGVyU2V0dGluZ3MuYWpheHVybCxcclxuXHRcdFx0dHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRkYXRhOiBmb3JtRGF0YSxcclxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxyXG5cdFx0XHRjb250ZW50VHlwZTogZmFsc2UsXHJcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuXHRcdH0gKS5kb25lKFxyXG5cdFx0XHRyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MoIHJlc3BvbnNlICk7XHJcblx0XHRcdFx0Y29uc3QgJGZvcm0gPSBqUXVlcnkoIHJvb3ROb2RlICk7XHJcblxyXG5cdFx0XHRcdGNhbGxiYWNrcy5mb3JFYWNoKCBjYiA9PiB7XHJcblx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjYiApIHtcclxuXHRcdFx0XHRcdFx0Y2IuY2FsbCggJGZvcm0sIHJlc3BvbnNlICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0KS5mYWlsKFxyXG5cdFx0XHR0aGlzLm9uRmFpbC5iaW5kKCB0aGlzICksXHJcblx0XHQpO1xyXG5cdH07XHJcblx0dGhpcy5vblN1Y2Nlc3MgICAgID0gZnVuY3Rpb24gKCByZXNwb25zZSApIHtcclxuXHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcclxuXHJcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcclxuXHJcblx0XHR0aGlzLmxhc3RSZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cdFx0Y29uc3QgJGZvcm0gICAgICAgPSBqUXVlcnkoIHJvb3ROb2RlICk7XHJcblxyXG5cdFx0c3dpdGNoICggcmVzcG9uc2Uuc3RhdHVzICkge1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2FqYXgvb24tc3VjY2VzcycsXHJcblx0XHRcdFx0XHRbIHJlc3BvbnNlLCAkZm9ybSBdLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHQvKipcclxuXHRcdCAqIFJ1biBzdGF0dXMgd2F0Y2hlcnNcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IHJlc3BvbnNlLnN0YXR1cztcclxuXHJcblx0XHRpZiAoIHJlc3BvbnNlLnJlZGlyZWN0ICkge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSByZXNwb25zZS5yZWRpcmVjdDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCByZXNwb25zZS5yZWxvYWQgKSB7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmluc2VydE1lc3NhZ2UoIHJlc3BvbnNlLm1lc3NhZ2UgKTtcclxuXHR9O1xyXG5cdHRoaXMub25GYWlsICAgICAgICA9IGZ1bmN0aW9uICgganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xyXG5cdFx0dGhpcy5mb3JtLnRvZ2dsZSgpO1xyXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnNvbGUuZXJyb3IoIGpxWEhSLnJlc3BvbnNlVGV4dCwgZXJyb3JUaHJvd24gKTtcclxuXHR9O1xyXG5cdHRoaXMuaW5zZXJ0TWVzc2FnZSA9IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcclxuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xyXG5cclxuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKCAnamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyApO1xyXG5cdFx0bm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG5cclxuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKCBub2RlICk7XHJcblx0fTtcclxufVxyXG5cclxuQWpheFN1Ym1pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU3VibWl0LnByb3RvdHlwZSApO1xyXG4vKipcclxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG4gKi9cclxuQWpheFN1Ym1pdC5wcm90b3R5cGUuc3RhdHVzID0gbnVsbDtcclxuXHJcbkFqYXhTdWJtaXQucHJvdG90eXBlLndhdGNoUmVzZXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xyXG5cdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xyXG5cclxuXHRpZiAoICFyb290Tm9kZS5kYXRhc2V0Py5jbGVhciApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMud2F0Y2hTdWNjZXNzKCBjYWxsYWJsZSApO1xyXG59O1xyXG5cclxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hTdWNjZXNzID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcclxuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuXHJcblx0c3RhdHVzLndhdGNoKCAoKSA9PiB7XHJcblx0XHRpZiAoIGlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzLmN1cnJlbnQgKSApIHtcclxuXHRcdFx0Y2FsbGFibGUoKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn07XHJcblxyXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaEZhaWwgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xyXG5cdGNvbnN0IHN0YXR1cyA9IHRoaXMuc3RhdHVzO1xyXG5cclxuXHRzdGF0dXMud2F0Y2goICgpID0+IHtcclxuXHRcdGlmICggIWlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzLmN1cnJlbnQgKSApIHtcclxuXHRcdFx0Y2FsbGFibGUoKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBamF4U3VibWl0OyIsIi8qKlxyXG4gKiBAcGFyYW0gZm9ybSB7Rm9ybVN1Ym1pdH1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBCYXNlU3VibWl0KCBmb3JtICkge1xyXG5cdHRoaXMuZm9ybSAgICAgICAgID0gZm9ybTtcclxuXHR0aGlzLmxhc3RSZXNwb25zZSA9IHt9O1xyXG5cdHRoaXMucHJvbWlzZXMgICAgID0gW107XHJcbn1cclxuXHJcbkJhc2VTdWJtaXQucHJvdG90eXBlLnN1Ym1pdCAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJlcGxhY2UgdGhpcyBjYWxsYmFjaycgKTtcclxufTtcclxuQmFzZVN1Ym1pdC5wcm90b3R5cGUuZ2V0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMucHJvbWlzZXMubWFwKCAoIHsgY2FsbGFibGUgfSApID0+IG5ldyBQcm9taXNlKCBjYWxsYWJsZSApICk7XHJcbn07XHJcbi8qKlxyXG4gKiBAcGFyYW0gY2FsbGFibGUge0Z1bmN0aW9ufVxyXG4gKiBAcGFyYW0gaW5wdXRDb250ZXh0IHtJbnB1dERhdGF8Qm9vbGVhbn1cclxuICovXHJcbkJhc2VTdWJtaXQucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiAoIGNhbGxhYmxlLCBpbnB1dENvbnRleHQgPSBmYWxzZSApIHtcclxuXHRjb25zdCBwYXRoU3RyID0gaW5wdXRDb250ZXh0ID8gaW5wdXRDb250ZXh0LnBhdGguam9pbiggJy4nICkgOiAnJztcclxuXHJcblx0dGhpcy5wcm9taXNlcyA9IHRoaXMucHJvbWlzZXMuZmlsdGVyKFxyXG5cdFx0KCB7IGlkUGF0aCB9ICkgPT4gIWlkUGF0aCB8fCBpZFBhdGggIT09IHBhdGhTdHIsXHJcblx0KTtcclxuXHJcblx0dGhpcy5wcm9taXNlcy5wdXNoKCB7XHJcblx0XHRjYWxsYWJsZSxcclxuXHRcdGlkUGF0aDogaW5wdXRDb250ZXh0ID8gaW5wdXRDb250ZXh0LnBhdGguam9pbiggJy4nICkgOiAnJyxcclxuXHR9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU3VibWl0OyIsImltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcclxuaW1wb3J0IEFqYXhTdWJtaXQgZnJvbSAnLi9BamF4U3VibWl0JztcclxuaW1wb3J0IFJlbG9hZFN1Ym1pdCBmcm9tICcuL1JlbG9hZFN1Ym1pdCc7XHJcbmltcG9ydCB7IGZvY3VzT25JbnZhbGlkSW5wdXQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZUlucHV0cyB9IGZyb20gJy4uL2lucHV0cy9mdW5jdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEZvcm1TdWJtaXQoIG9ic2VydmFibGUgKSB7XHJcblxyXG5cdHRoaXMub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XHJcblx0dGhpcy5sb2NrU3RhdGUgID0gbmV3IExvYWRpbmdSZWFjdGl2ZVZhciggZmFsc2UgKTtcclxuXHR0aGlzLmxvY2tTdGF0ZS5tYWtlKCk7XHJcblx0dGhpcy5hdXRvRm9jdXMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uYXV0b19mb2N1cztcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGV2ZW50IHtFdmVudH1cclxuXHQgKi9cclxuXHR0aGlzLm9uU3VibWl0ID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0dGhpcy5zdWJtaXQoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMub2JzZXJ2YWJsZS5pbnB1dHNBcmVWYWxpZCgpLnRoZW4oICgpID0+IHtcclxuXHRcdFx0dGhpcy5jbGVhckVycm9ycygpO1xyXG5cdFx0XHR0aGlzLnRvZ2dsZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5zdWJtaXR0ZXIuc3VibWl0KCk7XHJcblx0XHR9ICkuY2F0Y2goICgpID0+IHtcclxuXHRcdFx0dGhpcy5hdXRvRm9jdXMgJiYgZm9jdXNPbkludmFsaWRJbnB1dChcclxuXHRcdFx0XHRwb3B1bGF0ZUlucHV0cyggdGhpcy5vYnNlcnZhYmxlLmdldElucHV0cygpICksXHJcblx0XHRcdCk7XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jbGVhckVycm9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyxcclxuXHRcdCk7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcyApIHtcclxuXHRcdFx0bWVzc2FnZS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMubG9ja1N0YXRlLnRvZ2dsZSgpO1xyXG5cdFx0dGhpcy50b2dnbGVMb2FkaW5nKCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR0aGlzLmhhbmRsZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fVxyXG5cdFx0ICovXHJcblx0XHRjb25zdCBidXR0b25zID0gdGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fc3VibWl0JyxcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5sb2NrU3RhdGUud2F0Y2goICgpID0+IHtcclxuXHRcdFx0Zm9yICggY29uc3QgYnV0dG9uIG9mIGJ1dHRvbnMgKSB7XHJcblx0XHRcdFx0YnV0dG9uLmRpc2FibGVkID0gdGhpcy5sb2NrU3RhdGUuY3VycmVudDtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudG9nZ2xlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtbG9hZGluZycgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmNyZWF0ZVN1Ym1pdHRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgY2xhc3NMaXN0IH0gPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGU7XHJcblx0XHRjb25zdCBpc0FqYXggICAgICAgID0gY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3VibWl0LXR5cGUtYWpheCcgKTtcclxuXHJcblx0XHRyZXR1cm4gaXNBamF4ID8gbmV3IEFqYXhTdWJtaXQoIHRoaXMgKSA6IG5ldyBSZWxvYWRTdWJtaXQoIHRoaXMgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldEZvcm1JZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMub2JzZXJ2YWJsZTtcclxuXHJcblx0XHRyZXR1cm4gK3Jvb3ROb2RlLmRhdGFzZXQuZm9ybUlkO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub25FbmRTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xyXG5cdFx0dGhpcy5zdWJtaXR0ZXIuaGFzT3duUHJvcGVydHkoICdzdGF0dXMnIClcclxuXHRcdD8gdGhpcy5zdWJtaXR0ZXIuc3RhdHVzLndhdGNoKCBjYWxsYWJsZSApXHJcblx0XHQ6IHRoaXMuc3VibWl0dGVyLm9uRmFpbFN1Ym1pdCggY2FsbGFibGUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9ic2VydmFibGUucm9vdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCdzdWJtaXQnLFxyXG5cdFx0KCBldmVudCApID0+IHRoaXMub25TdWJtaXQoIGV2ZW50ICksXHJcblx0KTtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0FqYXhTdWJtaXR8UmVsb2FkU3VibWl0fVxyXG5cdCAqL1xyXG5cdHRoaXMuc3VibWl0dGVyID0gdGhpcy5jcmVhdGVTdWJtaXR0ZXIoKTtcclxuXHJcblx0dGhpcy5oYW5kbGVCdXR0b25zKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1TdWJtaXQ7IiwiaW1wb3J0IEJhc2VTdWJtaXQgZnJvbSAnLi9CYXNlU3VibWl0JztcclxuXHJcbmZ1bmN0aW9uIFJlbG9hZFN1Ym1pdCggZm9ybSApIHtcclxuXHRCYXNlU3VibWl0LmNhbGwoIHRoaXMsIGZvcm0gKTtcclxuXHJcblx0dGhpcy5mYWlsUHJvbWlzZXMgPSBbXTtcclxuXHJcblx0dGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gICAgID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XHJcblx0XHRjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcblx0XHRQcm9taXNlLmFsbChcclxuXHRcdFx0YXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LnJlbG9hZC5wcm9taXNlcycsXHJcblx0XHRcdFx0dGhpcy5nZXRQcm9taXNlcygpLFxyXG5cdFx0XHRcdHsgdGFyZ2V0OiByb290Tm9kZSB9LFxyXG5cdFx0XHQpLFxyXG5cdFx0KS50aGVuKFxyXG5cdFx0XHQoKSA9PiByb290Tm9kZS5zdWJtaXQoKSxcclxuXHRcdCkuY2F0Y2goICgpID0+IHtcclxuXHRcdFx0dGhpcy5mYWlsUHJvbWlzZXMuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50KCkgKTtcclxuXHJcblx0XHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uRmFpbFN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XHJcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5mYWlsUHJvbWlzZXMucHVzaCggY2FsbGFibGUgKTtcclxuXHR9O1xyXG59XHJcblxyXG5SZWxvYWRTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbG9hZFN1Ym1pdDsiLCJmdW5jdGlvbiBpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cyApIHtcclxuXHRyZXR1cm4gJ3N1Y2Nlc3MnID09PSBzdGF0dXMgfHwgc3RhdHVzPy5pbmNsdWRlcyggJ2RzdWNjZXNzfCcgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNTdWNjZXNzU3RhdHVzIH07IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NoYW5nZVR5cGUoIG5vZGUgKSB7XHJcblx0cmV0dXJuIFsgJ3NlbGVjdC1vbmUnLCAncmFuZ2UnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzSGlkZGVuKCBub2RlICkge1xyXG5cdHJldHVybiAnaGlkZGVuJyA9PT0gbm9kZS50eXBlO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzUmFuZ2UoIG5vZGUgKSB7XHJcblx0cmV0dXJuICdyYW5nZScgPT09IG5vZGUudHlwZTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRpc0hpZGRlbixcclxuXHRpc1JhbmdlLFxyXG5cdGlzQ2hhbmdlVHlwZSxcclxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3R5bGVzXHJcbmltcG9ydCAnLi9tYWluLnBjc3MnXHJcblxyXG5pbXBvcnQgaW5pdEVsZW1lbnRvciBmcm9tICcuL2luaXQvaW5pdEVsZW1lbnRvcic7XHJcbmltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vc2lnbmFscy9CYXNlU2lnbmFsJztcclxuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xyXG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcclxuaW1wb3J0IFJlYWN0aXZlU2V0IGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVTZXQnO1xyXG5pbXBvcnQgTG9hZGluZ1JlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcclxuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL2lucHV0cy9JbnB1dERhdGEnO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL09ic2VydmFibGUnO1xyXG5pbXBvcnQgUmVwb3J0aW5nSW50ZXJmYWNlIGZyb20gJy4vcmVwb3J0aW5nL1JlcG9ydGluZ0ludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcblx0YWxsUmVqZWN0ZWQsXHJcblx0Z2V0TGFuZ3VhZ2UsXHJcblx0dG9IVE1MLFxyXG5cdGlzRW1wdHksXHJcblx0Z2V0T2Zmc2V0VG9wLFxyXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXHJcblx0aXNWaXNpYmxlLCBnZXRTY3JvbGxQYXJlbnQsIGFwcGx5VXNlckFnZW50cywgaXNVQSxcclxufSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgUmVzdHJpY3Rpb25FcnJvciBmcm9tICcuL3JlcG9ydGluZy9SZXN0cmljdGlvbkVycm9yJztcclxuaW1wb3J0IHtcclxuXHR2YWxpZGF0ZUlucHV0cyxcclxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcclxuXHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyxcclxufSBmcm9tICcuL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xyXG5cclxuaW1wb3J0ICcuL2NhbGMubW9kdWxlL21haW4nO1xyXG5pbXBvcnQge1xyXG5cdGdldFBhcnNlZE5hbWUsXHJcblx0cG9wdWxhdGVJbnB1dHMsXHJcbn0gZnJvbSAnLi9pbnB1dHMvZnVuY3Rpb25zJztcclxuaW1wb3J0IGluaXRGb3JtIGZyb20gJy4vaW5pdC9pbml0Rm9ybSc7XHJcbmltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9CYXNlSHRtbEF0dHInO1xyXG5pbXBvcnQgcXVlcnlCeUF0dHJWYWx1ZSBmcm9tICcuL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZSc7XHJcbmltcG9ydCBpdGVyYXRlQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVDb21tZW50cyc7XHJcbmltcG9ydCBpdGVyYXRlSmZiQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVKZmJDb21tZW50cyc7XHJcbmltcG9ydCBvYnNlcnZlQ29tbWVudCBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZUNvbW1lbnQnO1xyXG5pbXBvcnQgb2JzZXJ2ZU1hY3JvQXR0ciBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0cic7XHJcbmltcG9ydCBSZXF1aXJlZFJlc3RyaWN0aW9uIGZyb20gJy4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXF1aXJlZFJlc3RyaWN0aW9uJztcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XHJcblx0KSxcclxuXHRJbnB1dERhdGEsXHJcblx0QmFzZVNpZ25hbCxcclxuXHRSZWFjdGl2ZVZhcixcclxuXHRSZWFjdGl2ZUhvb2ssXHJcblx0TG9hZGluZ1JlYWN0aXZlVmFyLFxyXG5cdE9ic2VydmFibGUsXHJcblx0UmVwb3J0aW5nSW50ZXJmYWNlLFxyXG5cdFJlc3RyaWN0aW9uLFxyXG5cdFJlc3RyaWN0aW9uRXJyb3IsXHJcblx0QmFzZUh0bWxBdHRyLFxyXG5cdFJlYWN0aXZlU2V0LFxyXG5cdFJlcXVpcmVkUmVzdHJpY3Rpb24sXHJcbn07XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPSB7XHJcblx0Li4uKFxyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID8/IHt9XHJcblx0KSxcclxuXHRhbGxSZWplY3RlZCxcclxuXHRnZXRMYW5ndWFnZSxcclxuXHR0b0hUTUwsXHJcblx0dmFsaWRhdGVJbnB1dHMsXHJcblx0dmFsaWRhdGVJbnB1dHNBbGwsXHJcblx0Z2V0UGFyc2VkTmFtZSxcclxuXHRpc0VtcHR5LFxyXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxyXG5cdGdldE9mZnNldFRvcCxcclxuXHRmb2N1c09uSW52YWxpZElucHV0LFxyXG5cdHBvcHVsYXRlSW5wdXRzLFxyXG5cdGlzVmlzaWJsZSxcclxuXHRxdWVyeUJ5QXR0clZhbHVlLFxyXG5cdGl0ZXJhdGVDb21tZW50cyxcclxuXHRvYnNlcnZlTWFjcm9BdHRyLFxyXG5cdG9ic2VydmVDb21tZW50LFxyXG5cdGl0ZXJhdGVKZmJDb21tZW50cyxcclxuXHRnZXRTY3JvbGxQYXJlbnQsXHJcblx0aXNVQSxcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgYXBwbHlVc2VyQWdlbnRzICk7XHJcblxyXG5qUXVlcnkoICgpID0+IEpldFBsdWdpbnMuaW5pdCgpICk7XHJcblxyXG5KZXRQbHVnaW5zLmJ1bGtCbG9ja3NJbml0KCBbXHJcblx0e1xyXG5cdFx0YmxvY2s6ICdqZXQtZm9ybXMuZm9ybS1ibG9jaycsXHJcblx0XHRjYWxsYmFjazogaW5pdEZvcm0sXHJcblx0XHRjb25kaXRpb246ICgpID0+ICdsb2FkaW5nJyAhPT0gZG9jdW1lbnQucmVhZHlTdGF0ZSxcclxuXHR9LFxyXG5dICk7XHJcblxyXG5qUXVlcnkoIHdpbmRvdyApLm9uKCAnZWxlbWVudG9yL2Zyb250ZW5kL2luaXQnLCBpbml0RWxlbWVudG9yICk7XHJcblxyXG5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsICgpID0+IHtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVtdfVxyXG5cdCAqL1xyXG5cdGNvbnN0IGZvcm1zID0gT2JqZWN0LnZhbHVlcyggSmV0Rm9ybUJ1aWxkZXIgKTtcclxuXHJcblx0Zm9yICggY29uc3Qgcm9vdCBvZiBmb3JtcyApIHtcclxuXHRcdGlmICggISggcm9vdCBpbnN0YW5jZW9mIE9ic2VydmFibGUgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRyb290LnJlUXVlcnlWYWx1ZXMoKTtcclxuXHR9XHJcbn0gKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==