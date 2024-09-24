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
      max_size: maxSize = 1
    } = JSON.parse(input.previewsContainer.dataset.args);
    this.initial = +maxSize;
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
 * @param root    {Observable}
 * @class
 */





const {
  applyFilters: wpFilters,
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.custom.formula.macro', 'jet-form-builder', _attachConstNamespace__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
   * @param  relatedInput {InputData}
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
  onMissingPart(inputMatch) {
    this.parts.push(inputMatch);
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
    const [fieldName, ...params] = parsedName;
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
  /* eslint-disable no-console */
  showError(formula) {
    console.group((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('JetFormBuilder: You have invalid calculated formula', 'jet-form-builder'));
    this.showErrorDetails(formula);
    console.groupEnd();
  },
  showErrorDetails(formula) {
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    // translators: %s - initial formula
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Initial: %s', 'jet-form-builder'), this.formula));
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    // translators: %s - computed formula
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Computed: %s', 'jet-form-builder'), formula));
    if (!this.input && !this.root?.parent) {
      return;
    }
    if (this.input) {
      console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
      // translators: %s - filed name
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Field: %s', 'jet-form-builder'), this.input.path.join('.')));
      return;
    }
    const index = this.root.parent.findIndex(this.root);
    console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)(
    // translators: %s - path to current field
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Scope: %s', 'jet-form-builder'), [...this.root.parent.path, -1 === index ? '' : index].filter(Boolean).join('.')));
  }
  /* eslint-enable no-console */
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
/* eslint-disable camelcase */


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
/* eslint-disable camelcase */


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
/* eslint-disable camelcase */


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
/* eslint-disable camelcase */


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
/* eslint-disable camelcase */


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
function toDateTime(date) {
  return toDate(date, false) + 'T' + toTime(date, false);
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
 * @type {Array<Filter>}
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
})(!window.safari || typeof safari !== 'undefined' && window.safari.pushNotification);
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
  for (const inputHtmlAttr of inputHtmlAttrs) {
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
  this.onMissingPart = function () {};
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
 * @param root    {Observable}
 */
function observeComment(comment, root) {
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



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
  window.JetFormBuilder[form.dataset.formId] = observable;
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
InputData.prototype.reportOnBlur = function () {
  this.reporting.validateOnBlur();
};
InputData.prototype.debouncedReport = function () {
  this.stopValidation = false;
  if (this.validateTimer) {
    this.stopValidation = true;
    clearTimeout(this.validateTimer);
  }
  this.validateTimer = setTimeout(() => {
    this.reportOnBlur();
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

  /* eslint-disable @wordpress/no-global-active-element */
  // Prevent setting readOnly for currently active element to avoid user distractions.
  if (node !== document.activeElement) {
    node.readOnly = this.loading.current;
  }
  /* eslint-enable */

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
 * @param  node
 * @param  observable {Observable}
 * @return {*}
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
  throw new Error('Something went wrong');
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
   * @return {HTMLInputElement|HTMLElement}
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
  async validate() {
    const errors = await this.getErrors();
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
  async getErrors() {
    if (this.input.loading.current || this.input?.callable?.lock?.current || !this.input.isVisible()) {
      return [];
    }
    const promises = this.getPromises();
    if (!this.hasChangedValue() && this.promisesCount === promises.length && !this.input.stopValidation) {
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
  getPromises() {
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
 * @param  reporting {BrowserReporting}
 * @param  node
 * @return {*}
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
 * @param  input {InputData}
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
 * @param  node  {HTMLElement}
 * @param  input {InputData}
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
 * @class
 */
// eslint-disable-next-line max-lines-per-function
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
      // eslint-disable-next-line no-unused-expressions
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
  const forms = Object.values(window.JetFormBuilder);
  for (const root of forms) {
    if (!(root instanceof _Observable__WEBPACK_IMPORTED_MODULE_8__["default"])) {
      continue;
    }
    root.reQueryValues();
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQTBCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFFQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBS0E7QUFFQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaGhCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzVRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUVBO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUtBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9CYXNlSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9GaWxlRXh0ZW5zaW9uSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvTWF4RmlsZXNIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL1JlbWFpbmluZ0NhbGNBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hcHBseUZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hdHRhY2hDb25zdE5hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9CYXNlSW50ZXJuYWxNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9DdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9EYXlfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0hvdXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL01pbl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvTW9udGhfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL1llYXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGREYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0ZhbGxCYWNrRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0xlbmd0aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF0ZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9UaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZ2V0RmlsdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL21haW4uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vQ2FsY3VsYXRlZEh0bWxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL2l0ZXJhdGVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU5vZGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbml0L2luaXRFbGVtZW50b3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbml0L2luaXRGb3JtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL0NoYW5nZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvSW5wdXREYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL05vTGlzdGVuRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9SYW5nZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvUmVuZGVyU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL1JlYWN0aXZlSG9vay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL1JlYWN0aXZlU2V0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVWYXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvQnJvd3NlclJlcG9ydGluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9SZXBvcnRpbmdDb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1JlcG9ydGluZ0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9SZXN0cmljdGlvbkVycm9yLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvTmF0aXZlUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlcXVpcmVkUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Jlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9CYXNlU2lnbmFsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxIaWRkZW5BcnJheS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbFJlbmRlclN0YXRlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvQWpheFN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9CYXNlU3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0Zvcm1TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvUmVsb2FkU3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1cHBvcnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vbWFpbi5wY3NzIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVJbnB1dCwgcG9wdWxhdGVJbnB1dHMgfSBmcm9tICcuL2lucHV0cy9mdW5jdGlvbnMnO1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi9zdWJtaXQvRm9ybVN1Ym1pdCc7XG5pbXBvcnQgcXVlcnlCeUF0dHJWYWx1ZSBmcm9tICcuL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZSc7XG5pbXBvcnQgaXRlcmF0ZUpmYkNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMnO1xuaW1wb3J0IG9ic2VydmVDb21tZW50IGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudCc7XG5pbXBvcnQgb2JzZXJ2ZU1hY3JvQXR0ciBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0cic7XG5pbXBvcnQgb2JzZXJ2ZU5vZGUgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVOb2RlJztcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXRzQWxsIH0gZnJvbSAnLi9yZXBvcnRpbmcvZnVuY3Rpb25zJztcbmltcG9ydCBSZXBvcnRpbmdDb250ZXh0IGZyb20gJy4vcmVwb3J0aW5nL1JlcG9ydGluZ0NvbnRleHQnO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5jb25zdCB7XG5cdCAgICAgIGRvQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmZ1bmN0aW9uIE9ic2VydmFibGUoIHBhcmVudCA9IG51bGwgKSB7XG5cdHRoaXMucGFyZW50ICAgICA9IHBhcmVudDtcblx0dGhpcy5kYXRhSW5wdXRzID0ge307XG5cdHRoaXMuZm9ybSAgICAgICA9IG51bGw7XG5cdHRoaXMubXVsdGlzdGVwICA9IG51bGw7XG5cdHRoaXMucm9vdE5vZGUgICA9IG51bGw7XG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICpcblx0ICogQHR5cGUge1JlcG9ydGluZ0NvbnRleHR9XG5cdCAqL1xuXHR0aGlzLmNvbnRleHQgPSB0aGlzLnBhcmVudCA/IG51bGwgOiBuZXcgUmVwb3J0aW5nQ29udGV4dCggdGhpcyApO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtSZXBlYXRlckRhdGF8bnVsbH1cblx0ICovXG5cdHBhcmVudDogbnVsbCxcblx0LyoqXG5cdCAqIHtcblx0ICogICAgIFtmaWVsZF9uYW1lXToge0lucHV0RGF0YX1cblx0ICogfVxuXHQgKi9cblx0ZGF0YUlucHV0czoge30sXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtGb3JtU3VibWl0fVxuXHQgKi9cblx0Zm9ybTogbnVsbCxcblxuXHQvKipcblx0ICogQHR5cGUge011bHRpU3RlcFN0YXRlfVxuXHQgKi9cblx0bXVsdGlzdGVwOiBudWxsLFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR8SFRNTEZvcm1FbGVtZW50fVxuXHQgKi9cblx0cm9vdE5vZGU6IG51bGwsXG5cdGlzT2JzZXJ2ZWQ6IGZhbHNlLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dmFsdWU6IG51bGwsXG5cdG9ic2VydmUgKCByb290ID0gbnVsbCApIHtcblx0XHRpZiAoIHRoaXMuaXNPYnNlcnZlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCBudWxsICE9PSByb290ICkge1xuXHRcdFx0dGhpcy5yb290Tm9kZSA9IHJvb3Q7XG5cdFx0fVxuXHRcdHRoaXMuaXNPYnNlcnZlZCA9IHRydWU7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmJlZm9yZScsIHRoaXMgKTtcblxuXHRcdHRoaXMuaW5pdFN1Ym1pdEhhbmRsZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgZGF0YUlucHV0cyB3aXRoIGZpZWxkcy5cblx0XHQgKiBXaXRob3V0IHZhbHVlc1xuXHRcdCAqL1xuXHRcdHRoaXMuaW5pdEZpZWxkcygpO1xuXG5cdFx0LyoqXG5cdFx0ICogU2V0dXAgZmllbGRzIHZhbHVlcyBhbmQgbWFrZSB0aGVtIHJlYWN0aXZlXG5cdFx0ICovXG5cdFx0dGhpcy5tYWtlUmVhY3RpdmVQcm94eSgpO1xuXG5cdFx0dGhpcy5pbml0TWFjcm9zKCk7XG5cblx0XHR0aGlzLmluaXRBY3Rpb25CdXR0b25zKCk7XG5cblx0XHR0aGlzLmluaXRWYWx1ZSgpO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsIHRoaXMgKTtcblx0fSxcblxuXHRpbml0RmllbGRzICgpIHtcblx0XHRmb3IgKCBjb25zdCBmb3JtRWxlbWVudCBvZiB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnW2RhdGEtamZiLXN5bmNdJyxcblx0XHQpICkge1xuXHRcdFx0dGhpcy5wdXNoSW5wdXQoIGZvcm1FbGVtZW50ICk7XG5cdFx0fVxuXHR9LFxuXG5cdGluaXRNYWNyb3MgKCkge1xuXHRcdC8vIG1hY3JvcyBhcyBodG1sLWNvbW1lbnRzXG5cdFx0Zm9yIChcblx0XHRcdGNvbnN0IGNvbW1lbnQgb2YgaXRlcmF0ZUpmYkNvbW1lbnRzKCB0aGlzLnJvb3ROb2RlIClcblx0XHRcdCkge1xuXHRcdFx0b2JzZXJ2ZUNvbW1lbnQoIGNvbW1lbnQsIHRoaXMgKTtcblx0XHR9XG5cblx0XHQvLyBtYWNyb3MgaW4gZGVmYXVsdCBhdHRyaWJ1dGVzXG5cdFx0Y29uc3Qgbm9kZXNXaXRoQXR0cnMgPSBxdWVyeUJ5QXR0clZhbHVlKCB0aGlzLnJvb3ROb2RlLCAnSkZCX0ZJRUxEOjonICk7XG5cblx0XHRjb25zdCB7IHJlcGxhY2VBdHRycyA9IFtdIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuXHRcdGZvciAoIGNvbnN0IG5vZGVXaXRoQXR0ciBvZiBub2Rlc1dpdGhBdHRycyApIHtcblx0XHRcdGZvciAoIGNvbnN0IHJlcGxhY2VBdHRyIG9mIHJlcGxhY2VBdHRycyApIHtcblx0XHRcdFx0b2JzZXJ2ZU1hY3JvQXR0ciggbm9kZVdpdGhBdHRyLCByZXBsYWNlQXR0ciwgdGhpcyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIG1hY3JvcyBpbiBkYXRhLWpmYi1tYWNybyBhdHRyaWJ1dGVcblx0XHQvLyByZXN1bHQgd2lsbCBwbGFjZWQgaW5zaWRlIHJlbGF0aXZlIG5vZGVcblx0XHRjb25zdCBub2RlcyA9IHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCdbZGF0YS1qZmItbWFjcm9dOm5vdChbZGF0YS1qZmItb2JzZXJ2ZWRdKScsXG5cdFx0KTtcblxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygbm9kZXMgKSB7XG5cdFx0XHRvYnNlcnZlTm9kZSggbm9kZSwgdGhpcyApO1xuXHRcdH1cblx0fSxcblxuXHRpbml0U3VibWl0SGFuZGxlciAoKSB7XG5cdFx0Ly8gY2hlY2sgaXMgY3VycmVudCBvYmplY3QgcmVsYXRlZCBmb3IgZ2xvYmFsIGZvcm0gZWxlbWVudFxuXHRcdGlmICggdGhpcy5wYXJlbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5mb3JtID0gbmV3IEZvcm1TdWJtaXQoIHRoaXMgKTtcblx0fSxcblxuXHRpbml0QWN0aW9uQnV0dG9ucyAoKSB7XG5cdFx0aWYgKCB0aGlzLnBhcmVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yICggY29uc3QgYnV0dG9uIG9mIHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fYnV0dG9uLXN3aXRjaC1zdGF0ZScsXG5cdFx0KSApIHtcblx0XHRcdGxldCBzdGF0ZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzdGF0ZXMgPSBKU09OLnBhcnNlKCBidXR0b24uZGF0YXNldC5zd2l0Y2hPbiApO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2V0U3RhdGUoKS52YWx1ZS5jdXJyZW50ID0gc3RhdGVzO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTxQcm9taXNlPG5ldmVyPnxQcm9taXNlPHZvaWQ+Pn1cblx0ICovXG5cdGFzeW5jIGlucHV0c0FyZVZhbGlkICgpIHtcblx0XHRjb25zdCBpbnZhbGlkID0gYXdhaXQgdmFsaWRhdGVJbnB1dHNBbGwoXG5cdFx0XHRwb3B1bGF0ZUlucHV0cyggdGhpcy5nZXRJbnB1dHMoKSApLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbiggaW52YWxpZC5sZW5ndGggKVxuXHRcdCAgICAgICA/IFByb21pc2UucmVqZWN0KCBpbnZhbGlkIClcblx0XHQgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcblx0fSxcblxuXHR3YXRjaCAoIGZpZWxkTmFtZSwgY2FsbGFibGUgKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCBmaWVsZE5hbWUgKTtcblxuXHRcdGlmICggaW5wdXQgKSB7XG5cdFx0XHRyZXR1cm4gaW5wdXQud2F0Y2goIGNhbGxhYmxlICk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YGRhdGFJbnB1dHMgaW4gT2JzZXJ2YWJsZSBkb25cXCd0IGhhdmUgJHsgZmllbGROYW1lIH0gZmllbGRgLFxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSBub2RlICAgIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gcmVwbGFjZSB7Qm9vbGVhbn1cblx0ICovXG5cdG9ic2VydmVJbnB1dCAoIG5vZGUsIHJlcGxhY2UgPSBmYWxzZSApIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucHVzaElucHV0KCBub2RlLCByZXBsYWNlICk7XG5cblx0XHRpbnB1dC5tYWtlUmVhY3RpdmUoKTtcblxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuaW5wdXQubWFudWFsJywgaW5wdXQgKTtcblx0fSxcblxuXHRtYWtlUmVhY3RpdmVQcm94eSAoKSB7XG5cdFx0Zm9yICggY29uc3QgY3VycmVudCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0Y3VycmVudC5tYWtlUmVhY3RpdmUoKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSBub2RlICAgIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gcmVwbGFjZSB7Qm9vbGVhbn1cblx0ICovXG5cdHB1c2hJbnB1dCAoIG5vZGUsIHJlcGxhY2UgPSBmYWxzZSApIHtcblx0XHQvLyBwcmV2ZW50IHNhdmluZyBpbnB1dHMgZnJvbSBwcmVzZXQgcmVwZWF0ZXIgaXRlbXMgaW4gcm9vdCBvYmplY3Rcblx0XHQvLyB0aG9zZSBpbnB1dHMgd291bGQgc2F2ZWQgaW4gT2JzZXJ2YWJsZVJvdyBvYmplY3RcblxuXHRcdGlmICggIXRoaXMucGFyZW50ICYmXG5cdFx0XHRub2RlLnBhcmVudEVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXREYXRhID0gY3JlYXRlSW5wdXQoIG5vZGUsIHRoaXMgKTtcblx0XHRjb25zdCBmaW5kSW5wdXQgPSB0aGlzLmRhdGFJbnB1dHNbIGlucHV0RGF0YS5nZXROYW1lKCkgXSA/PyBmYWxzZTtcblxuXHRcdGlmICggZmFsc2UgPT09IGZpbmRJbnB1dCB8fCByZXBsYWNlICkge1xuXHRcdFx0dGhpcy5kYXRhSW5wdXRzWyBpbnB1dERhdGEuZ2V0TmFtZSgpIF0gPSBpbnB1dERhdGE7XG5cblx0XHRcdHJldHVybiBpbnB1dERhdGE7XG5cdFx0fVxuXG5cdFx0ZmluZElucHV0Lm1lcmdlKCBpbnB1dERhdGEgKTtcblxuXHRcdHJldHVybiBmaW5kSW5wdXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0FycmF5PElucHV0RGF0YT59XG5cdCAqL1xuXHRnZXRJbnB1dHMgKCkge1xuXHRcdHJldHVybiBPYmplY3QudmFsdWVzKCB0aGlzLmRhdGFJbnB1dHMgKTtcblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7bnVsbHxSZW5kZXJTdGF0ZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0Z2V0U3RhdGUgKCkge1xuXHRcdHJldHVybiB0aGlzLmdldElucHV0KCAnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXMnICk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSAgZmllbGROYW1lXG5cdCAqIEByZXR1cm4ge251bGx8SW5wdXREYXRhfVxuXHQgKi9cblx0Z2V0SW5wdXQgKCBmaWVsZE5hbWUgKSB7XG5cdFx0aWYgKCB0aGlzLmRhdGFJbnB1dHMuaGFzT3duUHJvcGVydHkoIGZpZWxkTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XG5cdFx0fVxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnBhcmVudD8ucm9vdCA/PyBudWxsO1xuXG5cdFx0aWYgKCAhcm9vdCApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICggcm9vdC5kYXRhSW5wdXRzLmhhc093blByb3BlcnR5KCBmaWVsZE5hbWUgKSApIHtcblx0XHRcdHJldHVybiByb290LmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRnZXRTdWJtaXQgKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0gOiB0aGlzLnBhcmVudC5yb290LmZvcm07XG5cdH0sXG5cdGdldENvbnRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQgPz8gdGhpcy5wYXJlbnQucm9vdC5jb250ZXh0O1xuXHR9LFxuXHQvKipcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjcxMVxuXHQgKlxuXHQgKiBAc2luY2UgMy4wLjhcblx0ICovXG5cdHJlbW92ZSAoKSB7XG5cdFx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGlucHV0Lm9uUmVtb3ZlKCk7XG5cdFx0fVxuXHR9LFxuXHQvKipcblx0ICogUnVucyBvbmx5IG9uY2Ugb24gd2luZG93IFwibG9hZFwiIGV2ZW50XG5cdCAqL1xuXHRyZVF1ZXJ5VmFsdWVzICgpIHtcblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0aW5wdXQucmVRdWVyeVZhbHVlKCk7XG5cdFx0fVxuXHR9LFxuXHRpbml0VmFsdWUoKSB7XG5cdFx0dGhpcy52YWx1ZSA9IG5ldyBSZWFjdGl2ZVZhcigge30gKTtcblxuXHRcdHRoaXMudmFsdWUud2F0Y2goICgpID0+IHtcblx0XHRcdGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50LFxuXHRcdFx0KTtcblxuXHRcdFx0Zm9yICggY29uc3QgWyBmaWVsZE5hbWUsIHZhbHVlIF0gb2YgZW50cmllcyApIHtcblx0XHRcdFx0dGhpcy5nZXRJbnB1dCggZmllbGROYW1lICkucmV2ZXJ0VmFsdWUoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGlucHV0LndhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWUuY3VycmVudFsgaW5wdXQuZ2V0TmFtZSgpIF0gPSBpbnB1dC5nZXRWYWx1ZSgpO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHRoaXMudmFsdWUubWFrZSgpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZTsiLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5mdW5jdGlvbiBCYXNlSHRtbEF0dHIoKSB7XG5cdHRoaXMuYXR0ck5hbWUgICA9ICcnO1xuXHR0aGlzLmluaXRpYWwgICAgPSBudWxsO1xuXHR0aGlzLmlzRnJvbURhdGEgPSBmYWxzZTtcblx0dGhpcy52YWx1ZSAgICAgID0gbnVsbDtcbn1cblxuQmFzZUh0bWxBdHRyLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIE5hbWUgb2YgZGF0YSBhdHRyaWJ1dGVcblx0ICovXG5cdGF0dHJOYW1lOiAnJyxcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRpbnB1dDogbnVsbCxcblx0aW5pdGlhbDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHZhbHVlOiBudWxsLFxuXHRvYnNlcnZlKCkge1xuXHRcdHRoaXMudmFsdWUgPSBuZXcgUmVhY3RpdmVWYXIoIHRoaXMuaW5pdGlhbCApO1xuXHRcdHRoaXMudmFsdWUubWFrZSgpO1xuXG5cdFx0dGhpcy5hZGRXYXRjaGVyQXR0cigpO1xuXHR9LFxuXHRub2RlU2lnbmFsKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdG5vZGVbIHRoaXMuYXR0ck5hbWUgXSA9IHRoaXMudmFsdWUuY3VycmVudDtcblx0fSxcblx0YWRkV2F0Y2hlckF0dHIoKSB7XG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5ub2RlU2lnbmFsKCkgKTtcblx0fSxcblx0LyoqXG5cdCAqIElmIHlvdSBuZWVkIHNwZWNpZmljIGNoZWNrLFxuXHQgKiB5b3UgY2FuIHJld3JpdGUgdGhpcyBmdW5jdGlvblxuXHQgKlxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRpc1N1cHBvcnRlZCggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdGNvbnN0IGhhc0luUm9vdCAgICA9IC0xICE9PSBub2RlWyB0aGlzLmF0dHJOYW1lIF0gPz8gLTE7XG5cdFx0Y29uc3QgaGFzSW5EYXRhU2V0ID0gbm9kZS5kYXRhc2V0Lmhhc093blByb3BlcnR5KCB0aGlzLmF0dHJOYW1lICk7XG5cblx0XHRpZiAoICFoYXNJbkRhdGFTZXQgJiYgIWhhc0luUm9vdCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYWwgPSB0aGlzLmdldEluaXRpYWwoIGlucHV0ICk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5pbml0aWFsICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4geyp8Ym9vbGVhbn1cblx0ICovXG5cdGdldEluaXRpYWwoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gbm9kZS5kYXRhc2V0WyB0aGlzLmF0dHJOYW1lIF0gfHwgbm9kZVsgdGhpcy5hdHRyTmFtZSBdIHx8IGZhbHNlO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cblx0ICovXG5cdHNldElucHV0KCBpbnB1dCApIHtcblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlSHRtbEF0dHI7IiwiaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9NYXhGaWxlc0h0bWxBdHRyJztcblxuZnVuY3Rpb24gRmlsZUV4dGVuc2lvbkh0bWxBdHRyKCkge1xuXHRNYXhGaWxlc0h0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ2ZpbGVfZXh0JztcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlICYmIEJvb2xlYW4oIG5vZGUuYWNjZXB0ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0TWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gbm9kZS5hY2NlcHQuc3BsaXQoICcsJyApO1xuXHR9O1xuXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0bm9kZS5hY2NlcHQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuam9pbiggJywnICk7XG5cdFx0fSApO1xuXHR9O1xufVxuXG5GaWxlRXh0ZW5zaW9uSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUV4dGVuc2lvbkh0bWxBdHRyOyIsImltcG9ydCBNYXhGaWxlc0h0bWxBdHRyIGZyb20gJy4vTWF4RmlsZXNIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIE1heEZpbGVTaXplSHRtbEF0dHIoKSB7XG5cdE1heEZpbGVzSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAnbWF4X3NpemUnO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0ZpbGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cblx0XHRjb25zdCB7IG1heF9zaXplOiBtYXhTaXplID0gMSB9ID0gSlNPTi5wYXJzZShcblx0XHRcdGlucHV0LnByZXZpZXdzQ29udGFpbmVyLmRhdGFzZXQuYXJncyxcblx0XHQpO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gK21heFNpemU7XG5cdH07XG59XG5cbk1heEZpbGVTaXplSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZVNpemVIdG1sQXR0cjsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vQmFzZUh0bWxBdHRyJztcblxuZnVuY3Rpb24gTWF4RmlsZXNIdG1sQXR0cigpIHtcblx0QmFzZUh0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ21heF9maWxlcyc7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gJ2ZpbGUnID09PSBub2RlLnR5cGU7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXG5cdFx0Y29uc3QgeyBtYXhfZmlsZXM6IG1heEZpbGVzID0gMSB9ID0gSlNPTi5wYXJzZShcblx0XHRcdGlucHV0LnByZXZpZXdzQ29udGFpbmVyLmRhdGFzZXQuYXJncyxcblx0XHQpO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gK21heEZpbGVzO1xuXHR9O1xuXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSAoKSA9PiB7fTtcbn1cblxuTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1heEZpbGVzSHRtbEF0dHI7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL0Jhc2VIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIFJlbWFpbmluZ0NhbGNBdHRyKCkge1xuXHRCYXNlSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAncmVtYWluaW5nJztcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoICdtYXhMZW5ndGgnICk7XG5cdH07XG5cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoIH0gPSBpbnB1dC5hdHRycztcblx0XHRjb25zdCBjdXJyZW50ID0gaW5wdXQudmFsdWUuY3VycmVudD8ubGVuZ3RoID8/IDA7XG5cblx0XHR0aGlzLmluaXRpYWwgPSBtYXhMZW5ndGgudmFsdWUuY3VycmVudCAtIGN1cnJlbnQ7XG5cdH07XG5cblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9ICgpID0+IHt9O1xuXG5cdHRoaXMub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcyApO1xuXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy51cGRhdGVBdHRyKCkgKTtcblx0XHR0aGlzLmlucHV0LmF0dHJzLm1heExlbmd0aC52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy51cGRhdGVBdHRyKCkgKTtcblx0fTtcblxuXHR0aGlzLnVwZGF0ZUF0dHIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IHRoaXMuaW5wdXQuYXR0cnM7XG5cdFx0Y29uc3QgY3VycmVudCAgICAgICA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudD8ubGVuZ3RoID8/IDA7XG5cblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBtYXhMZW5ndGgudmFsdWUuY3VycmVudCAtIGN1cnJlbnQ7XG5cdH07XG59XG5cblJlbWFpbmluZ0NhbGNBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVtYWluaW5nQ2FsY0F0dHI7IiwiLyoqXG4gKiBAcGFyYW0gZm9ybXVsYVxuICogQHBhcmFtIHJvb3QgICAge09ic2VydmFibGV9XG4gKiBAY2xhc3NcbiAqL1xuaW1wb3J0IGFwcGx5RmlsdGVycyBmcm9tICcuL2FwcGx5RmlsdGVycyc7XG5pbXBvcnQgZ2V0RmlsdGVycyBmcm9tICcuL2dldEZpbHRlcnMnO1xuaW1wb3J0IGF0dGFjaENvbnN0TmFtZXNwYWNlIGZyb20gJy4vYXR0YWNoQ29uc3ROYW1lc3BhY2UnO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnM6IHdwRmlsdGVycyxcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5jdXN0b20uZm9ybXVsYS5tYWNybycsXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0YXR0YWNoQ29uc3ROYW1lc3BhY2UsXG4pO1xuXG4vKipcbiAqIEBwYXJhbSByb290ICAgIHtJbnB1dERhdGF8T2JzZXJ2YWJsZX1cbiAqIEBwYXJhbSBvcHRpb25zIHt7Zm9yY2VGdW5jdGlvbjogYm9vbGVhbn19XG4gKi9cbmZ1bmN0aW9uIENhbGN1bGF0ZWRGb3JtdWxhKFxuXHRyb290LFxuXHRvcHRpb25zID0ge30sXG4pIHtcblx0dGhpcy5wYXJ0cyAgICAgICAgPSBbXTtcblx0dGhpcy5yZWxhdGVkICAgICAgPSBbXTtcblx0dGhpcy5yZWxhdGVkQXR0cnMgPSBbXTtcblx0dGhpcy5yZWdleHAgICAgICAgPSAvJShbXFx3XFwtXS4qP1xcUz8pJS9nO1xuXHR0aGlzLndhdGNoZXJzICAgICA9IFtdO1xuXG5cdGNvbnN0IHsgZm9yY2VGdW5jdGlvbiA9IGZhbHNlIH0gPSBvcHRpb25zO1xuXG5cdHRoaXMuZm9yY2VGdW5jdGlvbiA9IGZvcmNlRnVuY3Rpb247XG5cblx0aWYgKCByb290IGluc3RhbmNlb2YgSW5wdXREYXRhICkge1xuXHRcdHRoaXMuaW5wdXQgPSByb290O1xuXHR9XG5cblx0dGhpcy5yb290ID0gdGhpcy5pbnB1dD8ucm9vdCA/PyByb290O1xufVxuXG5DYWxjdWxhdGVkRm9ybXVsYS5wcm90b3R5cGUgPSB7XG5cdC8vIHJhdyB2YWx1ZVxuXHRmb3JtdWxhOiBudWxsLFxuXHRwYXJ0czogW10sXG5cdHJlbGF0ZWQ6IFtdLFxuXHRyZWxhdGVkQXR0cnM6IFtdLFxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGlucHV0OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV8T2JzZXJ2YWJsZVJvd31cblx0ICovXG5cdHJvb3Q6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVnRXhwfVxuXHQgKi9cblx0cmVnZXhwOiBudWxsLFxuXHRmb3JjZUZ1bmN0aW9uOiBmYWxzZSxcblx0LyoqXG5cdCAqIEB0eXBlIHtGdW5jdGlvbn1cblx0ICovXG5cdHNldFJlc3VsdDogKCkgPT4ge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ0NhbGN1bGF0ZWRGb3JtdWxhLnNldFJlc3VsdCBpcyBub3Qgc2V0IScgKTtcblx0fSxcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAgcmVsYXRlZElucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4geyp9XG5cdCAqL1xuXHRyZWxhdGVkQ2FsbGJhY2soIHJlbGF0ZWRJbnB1dCApIHtcblx0XHRyZXR1cm4gcmVsYXRlZElucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdH0sXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICovXG5cdG9ic2VydmUoIHZhbHVlICkge1xuXHRcdHRoaXMuZm9ybXVsYSA9IHZhbHVlO1xuXG5cdFx0aWYgKCAhQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdHRoaXMub2JzZXJ2ZUl0ZW0oIHZhbHVlICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YWx1ZS5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdHRoaXMub2JzZXJ2ZUl0ZW0oIGl0ZW0gKTtcblx0XHR9ICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0gdmFsdWUge1N0cmluZ31cblx0ICovXG5cdG9ic2VydmVJdGVtKCB2YWx1ZSApIHtcblx0XHRsZXQgbWF0Y2g7XG5cdFx0bGV0IHByZXZJbmRleCA9IDA7XG5cblx0XHR2YWx1ZSArPSAnJztcblxuXHRcdHdoaWxlICggKFxuXHRcdFx0bWF0Y2ggPSB0aGlzLnJlZ2V4cC5leGVjKCB2YWx1ZSApXG5cdFx0KSAhPT0gbnVsbCApIHtcblx0XHRcdGNvbnN0IHBhcnQgPSB0aGlzLm9ic2VydmVNYWNybyggbWF0Y2hbIDEgXSApO1xuXG5cdFx0XHRpZiAoIDAgIT09IG1hdGNoLmluZGV4ICkge1xuXHRcdFx0XHR0aGlzLnBhcnRzLnB1c2goIHZhbHVlLnNsaWNlKCBwcmV2SW5kZXgsIG1hdGNoLmluZGV4ICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cHJldkluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsgMCBdLmxlbmd0aDtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gcGFydCApIHtcblx0XHRcdFx0dGhpcy5vbk1pc3NpbmdQYXJ0KCBtYXRjaFsgMCBdICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5wYXJ0cy5wdXNoKCBwYXJ0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gc2F2ZSBsYXN0IHBhcnRcblx0XHRpZiAoIHByZXZJbmRleCA9PT0gdmFsdWUubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFydHMucHVzaCggdmFsdWUuc2xpY2UoIHByZXZJbmRleCApICk7XG5cblx0XHRpZiAoIDEgPT09IHRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5wYXJ0cyA9IFtdO1xuXHRcdH1cblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dE1hdGNoIHtTdHJpbmd9XG5cdCAqL1xuXHRvbk1pc3NpbmdQYXJ0KCBpbnB1dE1hdGNoICkge1xuXHRcdHRoaXMucGFydHMucHVzaCggaW5wdXRNYXRjaCApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICBjdXJyZW50IHtTdHJpbmd9XG5cdCAqIEByZXR1cm4geyhmdW5jdGlvbigpOiAqKXwqfVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0b2JzZXJ2ZU1hY3JvKCBjdXJyZW50ICkge1xuXHRcdGlmICggbnVsbCA9PT0gdGhpcy5mb3JtdWxhICkge1xuXHRcdFx0dGhpcy5mb3JtdWxhID0gY3VycmVudDtcblx0XHR9XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHdvcmRwcmVzcy9uby11bnVzZWQtdmFycy1iZWZvcmUtcmV0dXJuXG5cdFx0Y29uc3QgWyBuYW1lLCAuLi5maWx0ZXJzIF0gPSBjdXJyZW50LnNwbGl0KCAnfCcgKTtcblx0XHRjb25zdCBwYXJzZWROYW1lICAgICAgICAgICA9IG5hbWUubWF0Y2goIC9bXFx3XFwtOl0rL2cgKTtcblxuXHRcdGlmICggIXBhcnNlZE5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgWyBmaWVsZE5hbWUsIC4uLnBhcmFtcyBdID0gcGFyc2VkTmFtZTtcblxuXHRcdGNvbnN0IHJlbGF0ZWRJbnB1dCA9IGZpZWxkTmFtZSAhPT0gJ3RoaXMnXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJvb3QuZ2V0SW5wdXQoIGZpZWxkTmFtZSApXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0O1xuXG5cdFx0aWYgKCAhcmVsYXRlZElucHV0ICYmICFmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHdvcmRwcmVzcy9uby11bnVzZWQtdmFycy1iZWZvcmUtcmV0dXJuXG5cdFx0Y29uc3QgZmlsdGVyc0xpc3QgPSBnZXRGaWx0ZXJzKCBmaWx0ZXJzICk7XG5cblx0XHRpZiAoIGZpZWxkTmFtZS5pbmNsdWRlcyggJzo6JyApICkge1xuXHRcdFx0Y29uc3QgY3VzdG9tVmFsdWUgPSB3cEZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIuY3VzdG9tLmZvcm11bGEubWFjcm8nLFxuXHRcdFx0XHRmYWxzZSxcblx0XHRcdFx0ZmllbGROYW1lLFxuXHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdHRoaXMsXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGZhbHNlID09PSBjdXN0b21WYWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21WYWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuICgpID0+IGFwcGx5RmlsdGVycyggY3VzdG9tVmFsdWUoKSwgZmlsdGVyc0xpc3QgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFwcGx5RmlsdGVycyggY3VzdG9tVmFsdWUsIGZpbHRlcnNMaXN0ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5yZWxhdGVkLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSApICkge1xuXHRcdFx0dGhpcy5yZWxhdGVkLnB1c2goIHJlbGF0ZWRJbnB1dC5uYW1lICk7XG5cblx0XHRcdHRoaXMud2F0Y2hlcnMucHVzaChcblx0XHRcdFx0cmVsYXRlZElucHV0LndhdGNoKCAoKSA9PiB0aGlzLnNldFJlc3VsdCgpICksXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICggIXBhcmFtcz8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuICgpID0+IGFwcGx5RmlsdGVycyhcblx0XHRcdFx0dGhpcy5yZWxhdGVkQ2FsbGJhY2soIHJlbGF0ZWRJbnB1dCApLFxuXHRcdFx0XHRmaWx0ZXJzTGlzdCxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgWyBhdHRyTmFtZSBdID0gcGFyYW1zO1xuXG5cdFx0aWYgKCAhcmVsYXRlZElucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCBhdHRyTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7QmFzZUh0bWxBdHRyfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGh0bWxBdHRyID0gcmVsYXRlZElucHV0LmF0dHJzWyBhdHRyTmFtZSBdO1xuXG5cdFx0aWYgKCAhdGhpcy5yZWxhdGVkQXR0cnMuaW5jbHVkZXMoIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZEF0dHJzLnB1c2goIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKTtcblxuXHRcdFx0dGhpcy53YXRjaGVycy5wdXNoKFxuXHRcdFx0XHRodG1sQXR0ci52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKCBodG1sQXR0ci52YWx1ZS5jdXJyZW50LCBmaWx0ZXJzTGlzdCApO1xuXHR9LFxuXHRjYWxjdWxhdGVTdHJpbmcoKSB7XG5cdFx0aWYgKCAhdGhpcy5wYXJ0cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtcblx0XHRcdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxuXHRcdCAgICAgIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyTWFpbj8uZmlsdGVycyA/PyB7fTtcblxuXHRcdHJldHVybiB0aGlzLnBhcnRzLm1hcCggY3VycmVudCA9PiB7XG5cdFx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjdXJyZW50ICkge1xuXHRcdFx0XHRpZiAoICF0aGlzLmlucHV0Py5ub2RlcyB8fCBmYWxzZSA9PT0gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyApIHtcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50ID0gd3BGaWx0ZXJzKFxuXHRcdFx0XHRcdCdqZXQuZmIub25DYWxjdWxhdGUucGFydCcsXG5cdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcblx0XHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1mb3JtdWxhLWJlZm9yZS12YWx1ZScsXG5cdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMuaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gY3VycmVudCgpO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQgICAgICAgbnVsbCA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICAnJyA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICBOdW1iZXIuaXNOYU4oIHJlc3VsdCApXG5cdFx0XHQgICAgICAgKSA/IHRoaXMuZW1wdHlWYWx1ZSgpIDogcmVzdWx0O1xuXHRcdH0gKS5qb2luKCAnJyApO1xuXHR9LFxuXHRlbXB0eVZhbHVlKCkge1xuXHRcdHJldHVybiAnJztcblx0fSxcblx0Y2FsY3VsYXRlKCkge1xuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICYmICF0aGlzLmZvcmNlRnVuY3Rpb24gKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHRcdH1cblx0XHRjb25zdCBmb3JtdWxhID0gdGhpcy5jYWxjdWxhdGVTdHJpbmcoKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRuZXcgRnVuY3Rpb24oICdyZXR1cm4gJyArIGZvcm11bGEgKVxuXHRcdFx0KSgpO1xuXHRcdH1cblx0XHRjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0Ly9jb25zb2xlLmVycm9yKCBlcnJvciApO1xuXHRcdFx0dGhpcy5zaG93RXJyb3IoIGZvcm11bGEgKTtcblx0XHR9XG5cblx0fSxcblx0Y2xlYXJXYXRjaGVycygpIHtcblx0XHR0aGlzLndhdGNoZXJzLmZvckVhY2goXG5cdFx0XHRjdXJyZW50ID0+ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50ICYmIGN1cnJlbnQoKSxcblx0XHQpO1xuXHRcdHRoaXMud2F0Y2hlcnMgICAgID0gW107XG5cdFx0dGhpcy5yZWxhdGVkQXR0cnMgPSBbXTtcblx0XHR0aGlzLnJlbGF0ZWQgICAgICA9IFtdO1xuXHR9LFxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdHNob3dFcnJvciggZm9ybXVsYSApIHtcblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBjYWxjdWxhdGVkIGZvcm11bGEnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpLFxuXHRcdCk7XG5cblx0XHR0aGlzLnNob3dFcnJvckRldGFpbHMoIGZvcm11bGEgKTtcblxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0fSxcblx0c2hvd0Vycm9yRGV0YWlscyggZm9ybXVsYSApIHtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gaW5pdGlhbCBmb3JtdWxhXG5cdFx0XHRcdF9fKCAnSW5pdGlhbDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0dGhpcy5mb3JtdWxhLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBjb21wdXRlZCBmb3JtdWxhXG5cdFx0XHRcdF9fKCAnQ29tcHV0ZWQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdGZvcm11bGEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cblx0XHRpZiAoICF0aGlzLmlucHV0ICYmICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuaW5wdXQgKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGZpbGVkIG5hbWVcblx0XHRcdFx0XHRfXyggJ0ZpZWxkOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRcdHRoaXMuaW5wdXQucGF0aC5qb2luKCAnLicgKSxcblx0XHRcdFx0KSxcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMucm9vdC5wYXJlbnQuZmluZEluZGV4KCB0aGlzLnJvb3QgKTtcblxuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBwYXRoIHRvIGN1cnJlbnQgZmllbGRcblx0XHRcdFx0X18oICdTY29wZTogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdC4uLnRoaXMucm9vdC5wYXJlbnQucGF0aCxcblx0XHRcdFx0XHQtMSA9PT0gaW5kZXggPyAnJyA6IGluZGV4LFxuXHRcdFx0XHRdLmZpbHRlciggQm9vbGVhbiApLmpvaW4oICcuJyApLFxuXHRcdFx0KSxcblx0XHQpO1xuXHR9LFxuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRGb3JtdWxhOyIsImZ1bmN0aW9uIGFwcGx5RmlsdGVycyggdmFsdWUsIGZpbHRlcnMgKSB7XG5cdGlmICggbnVsbCA9PT0gZmlsdGVycyB8fCAhZmlsdGVycz8ubGVuZ3RoICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRmb3IgKCBjb25zdCBmaWx0ZXIgb2YgZmlsdGVycyApIHtcblx0XHR2YWx1ZSA9IGZpbHRlci5hcHBseVdpdGhQcm9wcyggdmFsdWUgKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlGaWx0ZXJzOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEN1cnJlbnREYXRlIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0N1cnJlbnREYXRlJztcbmltcG9ydCBNaW5fSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL01pbl9Jbl9TZWMnO1xuaW1wb3J0IE1vbnRoX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9Nb250aF9Jbl9TZWMnO1xuaW1wb3J0IEhvdXJfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0hvdXJfSW5fU2VjJztcbmltcG9ydCBEYXlfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0RheV9Jbl9TZWMnO1xuaW1wb3J0IFllYXJfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL1llYXJfSW5fU2VjJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnM6IHdwQXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRTdGF0aWNGdW5jdGlvbnMgPSAoKSA9PiB3cEFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5zdGF0aWMuZnVuY3Rpb25zJyxcblx0W1xuXHRcdEN1cnJlbnREYXRlLFxuXHRcdE1pbl9Jbl9TZWMsXG5cdFx0TW9udGhfSW5fU2VjLFxuXHRcdEhvdXJfSW5fU2VjLFxuXHRcdERheV9Jbl9TZWMsXG5cdFx0WWVhcl9Jbl9TZWMsXG5cdF0sXG4pO1xuXG4vKipcbiAqIEB0eXBlIHtCYXNlSW50ZXJuYWxNYWNyb1tdfVxuICovXG5sZXQgc3RhdGljRnVuY3Rpb25zID0gW107XG5cbi8qKlxuICogQHBhcmFtICBzbHVnXG4gKiBAcmV0dXJuIHtib29sZWFufEJhc2VJbnRlcm5hbE1hY3JvfVxuICovXG5mdW5jdGlvbiBnZXRGdW5jdGlvbiggc2x1ZyApIHtcblx0aWYgKCAhc3RhdGljRnVuY3Rpb25zLmxlbmd0aCApIHtcblx0XHRzdGF0aWNGdW5jdGlvbnMgPSBnZXRTdGF0aWNGdW5jdGlvbnMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHN0YXRpY0Z1bmN0aW9uIG9mIHN0YXRpY0Z1bmN0aW9ucyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHN0YXRpY0Z1bmN0aW9uKCk7XG5cblx0XHRpZiAoIGN1cnJlbnQuZ2V0SWQoKSAhPT0gc2x1ZyApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHJlc3VsdCAgICB7U3RyaW5nfVxuICogQHBhcmFtICBmaWVsZE5hbWUge1N0cmluZ31cbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaENvbnN0TmFtZXNwYWNlKFxuXHRyZXN1bHQsXG5cdGZpZWxkTmFtZSxcbikge1xuXHRpZiAoICFmaWVsZE5hbWUuaW5jbHVkZXMoICdDVDo6JyApICkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZmllbGROYW1lID0gZmllbGROYW1lLnJlcGxhY2UoICdDVDo6JywgJycgKTtcblxuXHRjb25zdCBzdGF0aWNGdW5jID0gZ2V0RnVuY3Rpb24oIGZpZWxkTmFtZSApO1xuXG5cdGlmICggZmFsc2UgPT09IHN0YXRpY0Z1bmMgKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHJldHVybiBzdGF0aWNGdW5jLmdldFJlc3VsdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhdHRhY2hDb25zdE5hbWVzcGFjZTsiLCJmdW5jdGlvbiBCYXNlSW50ZXJuYWxNYWNybygpIHtcbn1cblxuQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlID0ge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1yZXR1cm5zLWNoZWNrXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXRJZCAoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnWW91IG5lZWQgdG8gcmV3cml0ZSB0aGlzIG1ldGhvZCcgKTtcblx0fSxcblx0Z2V0UmVzdWx0ICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXdyaXRlIHRoaXMgbWV0aG9kJyApO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUludGVybmFsTWFjcm87IiwiaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuXG5mdW5jdGlvbiBDdXJyZW50RGF0ZSgpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ0N1cnJlbnREYXRlJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cblxuQ3VycmVudERhdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnREYXRlOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBEYXlfSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCA9ICgpID0+ICdEYXlfSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuRGF5X0luX1NlYztcbn1cblxuRGF5X0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF5X0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gSG91cl9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkID0gKCkgPT4gJ0hvdXJfSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuSG91cl9Jbl9TZWM7XG59XG5cbkhvdXJfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBIb3VyX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gTWluX0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgPSAoKSA9PiAnTWluX0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLk1pbl9Jbl9TZWM7XG59XG5cbk1pbl9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1pbl9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIE1vbnRoX0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ01vbnRoX0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLk1vbnRoX0luX1NlYztcbn1cblxuTW9udGhfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNb250aF9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIFllYXJfSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnWWVhcl9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5ZZWFyX0luX1NlYztcbn1cblxuWWVhcl9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFllYXJfSW5fU2VjOyIsImNvbnN0IENvbnN0YW50cyA9IHtcblx0TWlsbGlfSW5fU2VjOiAxMDAwLFxuXHRTZWNfSW5fTWluOiA2MCxcblx0TWluX0luX0hvdXI6IDYwLFxuXHRIb3VyX0luX0RheTogMjQsXG5cdERheV9Jbl9Nb250aDogMzAsXG5cdFllYXJfSW5fRGF5OiAzNjUsXG5cdEtiX0luX0J5dGVzOiAxMDI0LFxufTtcblxuQ29uc3RhbnRzLk1pbl9Jbl9TZWMgICA9IENvbnN0YW50cy5TZWNfSW5fTWluICogQ29uc3RhbnRzLk1pbGxpX0luX1NlYztcbkNvbnN0YW50cy5Ib3VyX0luX1NlYyAgPSBDb25zdGFudHMuTWluX0luX0hvdXIgKiBDb25zdGFudHMuTWluX0luX1NlYztcbkNvbnN0YW50cy5EYXlfSW5fU2VjICAgPSBDb25zdGFudHMuSG91cl9Jbl9EYXkgKiBDb25zdGFudHMuSG91cl9Jbl9TZWM7XG5Db25zdGFudHMuTW9udGhfSW5fU2VjID0gQ29uc3RhbnRzLkRheV9Jbl9Nb250aCAqIENvbnN0YW50cy5EYXlfSW5fU2VjO1xuQ29uc3RhbnRzLlllYXJfSW5fU2VjICA9IENvbnN0YW50cy5ZZWFyX0luX0RheSAqIENvbnN0YW50cy5EYXlfSW5fU2VjO1xuQ29uc3RhbnRzLk1iX0luX0J5dGVzICA9IENvbnN0YW50cy5LYl9Jbl9CeXRlcyAqIDEwMjQ7XG5Db25zdGFudHMuR2JfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLk1iX0luX0J5dGVzICogMTAyNDtcbkNvbnN0YW50cy5UYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuR2JfSW5fQnl0ZXMgKiAxMDI0O1xuXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHM7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBBZGREYXlGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkRGF5Jztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZGF5cyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRkYXlzID0gZGF5cyA/ICsoXG5cdFx0XHRkYXlzLnRyaW0oKVxuXHRcdCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgKyBkYXlzICk7XG5cdH07XG59XG5cbkFkZERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkSG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXJzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0aG91cnMgPSBob3VycyA/ICsoXG5cdFx0XHRob3Vycy50cmltKClcblx0XHQpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBjdXJyZW50LmdldEhvdXJzKCkgKyBob3VycyApO1xuXHR9O1xufVxuXG5BZGRIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkSG91ckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZE1pbkZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRNaW4nO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBtaW51dGVzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0bWludXRlcyA9IG1pbnV0ZXMgPyArKFxuXHRcdFx0bWludXRlcy50cmltKClcblx0XHQpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldE1pbnV0ZXMoIGN1cnJlbnQuZ2V0TWludXRlcygpICsgbWludXRlcyApO1xuXHR9O1xufVxuXG5BZGRNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRNaW5GaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBBZGREYXlGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkTW9udGgnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aHMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0bW9udGhzID0gbW9udGhzID8gK21vbnRocy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TW9udGgoIGN1cnJlbnQuZ2V0TW9udGgoKSArIG1vbnRocyApO1xuXHR9O1xufVxuXG5BZGREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGREYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBBZGRZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZFllYXInO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFycyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHR5ZWFycyA9IHllYXJzID8gK3llYXJzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRGdWxsWWVhciggY3VycmVudC5nZXRGdWxsWWVhcigpICsgeWVhcnMgKTtcblx0fTtcbn1cblxuQWRkWWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gRmFsbEJhY2tGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnaWZFbXB0eSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGZhbGxiYWNrICkge1xuXHRcdHJldHVybiBpc0VtcHR5KCB2YWx1ZSApID8gdmFsdWUgOiBmYWxsYmFjaztcblx0fTtcbn1cblxuRmFsbEJhY2tGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGYWxsQmFja0ZpbHRlcjsiLCJmdW5jdGlvbiBGaWx0ZXIoKSB7XG5cdHRoaXMucHJvcHMgPSBbXTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkZpbHRlci5wcm90b3R5cGUuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0U2x1ZyBpcyBlbXB0eScgKTtcbn07XG5GaWx0ZXIucHJvdG90eXBlLnNldFByb3BzICAgICAgID0gZnVuY3Rpb24gKCBwcm9wcyApIHtcblx0dGhpcy5wcm9wcy5wdXNoKCAuLi5wcm9wcyApO1xufTtcbkZpbHRlci5wcm90b3R5cGUuYXBwbHlXaXRoUHJvcHMgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRyZXR1cm4gdGhpcy5hcHBseSggdmFsdWUsIC4uLnRoaXMucHJvcHMgKTtcbn07XG4vKipcbiAqIEBwYXJhbSAgdmFsdWVcbiAqIEBwYXJhbSAgcHJvcHNcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuRmlsdGVyLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIC4uLnByb3BzICkge1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIExlbmd0aEZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdsZW5ndGgnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHJldHVybiB2YWx1ZT8ubGVuZ3RoID8/IDA7XG5cdH07XG59XG5cbkxlbmd0aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXREYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXkgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0ZGF5ID0gZGF5ID8gK2RheS50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggZGF5ICk7XG5cdH07XG59XG5cblNldERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0SG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGhvdXIgPSBob3VyID8gK2hvdXIudHJpbSgpIDogMDtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBob3VyICk7XG5cdH07XG59XG5cblNldEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0TWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbiApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0bWluID0gbWluID8gK21pbi50cmltKCkgOiAwO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggbWluICk7XG5cdH07XG59XG5cblNldE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldE1vbnRoRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1vbnRoJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGggKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0bW9udGggPSBtb250aCA/ICttb250aC50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TW9udGgoIG1vbnRoICk7XG5cdH07XG59XG5cblNldE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXRZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldFllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFyICkge1xuXHRcdHllYXIgPSB5ZWFyID8gK3llYXIudHJpbSgpIDogZmFsc2U7XG5cblx0XHRpZiAoICF5ZWFyICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIHllYXIgKTtcblx0fTtcbn1cblxuU2V0WWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJEYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0ZGF5cyA9IGRheXMgPyArZGF5cy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgLSBkYXlzICk7XG5cdH07XG59XG5cblN1YnRyYWN0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3REYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViSG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0aG91ciA9IGhvdXIgPyAraG91ci50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSAtIGhvdXIgKTtcblx0fTtcbn1cblxuU3VidHJhY3RIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RNaW5GaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTWluJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWludXRlcyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtaW51dGVzID0gbWludXRlcyA/ICttaW51dGVzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBjdXJyZW50LmdldE1pbnV0ZXMoKSAtIG1pbnV0ZXMgKTtcblx0fTtcbn1cblxuU3VidHJhY3RNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0TW9udGhGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTW9udGgnO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aHMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRtb250aHMgPSBtb250aHMgPyArbW9udGhzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpIC0gbW9udGhzICk7XG5cdH07XG59XG5cblN1YnRyYWN0TW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1vbnRoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1YlllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFycyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgLSB5ZWFycyApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUaW1lc3RhbXBGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnVCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGltZTtcblx0fTtcbn1cblxuVGltZXN0YW1wRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXN0YW1wRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVG9EYXRlRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvRGF0ZSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHRvRGF0ZSggbmV3IERhdGUoIHZhbHVlICkgKTtcblx0fTtcbn1cblxuVG9EYXRlRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EYXRlRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgdG9EYXRlVGltZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFRvRGF0ZVRpbWVGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9EYXRlVGltZSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHRvRGF0ZVRpbWUoIG5ldyBEYXRlKCB2YWx1ZSApICk7XG5cdH07XG59XG5cblRvRGF0ZVRpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVUaW1lRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgdG9UaW1lIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVG9UaW1lRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvVGltZSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHRvVGltZSggbmV3IERhdGUoIHZhbHVlICkgKTtcblx0fTtcbn1cblxuVG9UaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9UaW1lRmlsdGVyOyIsImZ1bmN0aW9uIHplcm9maWxsKCBudW1iZXIsIGNvdW50ICkge1xuXHRudW1iZXIgPSAnJyArIG51bWJlcjtcblxuXHRpZiAoIG51bWJlci5sZW5ndGggPj0gY291bnQgKSB7XG5cdFx0cmV0dXJuIG51bWJlcjtcblx0fVxuXG5cdGNvbnN0IHplcm9zID0gbmV3IEFycmF5KCBjb3VudCAtIG51bWJlci5sZW5ndGggKS5maWxsKCAwICk7XG5cblx0cmV0dXJuIHplcm9zICsgbnVtYmVyO1xufVxuXG4vKipcbiAqIEBwYXJhbSBkYXRlICB7RGF0ZX1cbiAqIEBwYXJhbSBpc1V0Y1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKCBkYXRlLCBpc1V0YyA9IHRydWUgKSB7XG5cdGNvbnN0IG1vbnRoID0gaXNVdGMgPyBkYXRlLmdldFVUQ01vbnRoKCkgOiBkYXRlLmdldE1vbnRoKCk7XG5cdGNvbnN0IGRheSAgID0gaXNVdGMgPyBkYXRlLmdldFVUQ0RhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpO1xuXHRjb25zdCB5ZWFyICA9IGlzVXRjID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cdHJldHVybiBbXG5cdFx0eWVhcixcblx0XHR6ZXJvZmlsbCggbW9udGggKyAxLCAyICksXG5cdFx0emVyb2ZpbGwoIGRheSwgMiApLFxuXHRdLmpvaW4oICctJyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSBkYXRlICB7RGF0ZX1cbiAqIEBwYXJhbSBpc1V0Y1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9UaW1lKCBkYXRlLCBpc1V0YyA9IHRydWUgKSB7XG5cdGNvbnN0IGhvdXJzID0gaXNVdGMgPyBkYXRlLmdldFVUQ0hvdXJzKCkgOiBkYXRlLmdldEhvdXJzKCk7XG5cdGNvbnN0IG1pbnMgID0gaXNVdGMgPyBkYXRlLmdldFVUQ01pbnV0ZXMoKSA6IGRhdGUuZ2V0TWludXRlcygpO1xuXG5cdHJldHVybiBbXG5cdFx0emVyb2ZpbGwoIGhvdXJzLCAyICksXG5cdFx0emVyb2ZpbGwoIG1pbnMsIDIgKSxcblx0XS5qb2luKCAnOicgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZVRpbWUoIGRhdGUgKSB7XG5cdHJldHVybiB0b0RhdGUoIGRhdGUsIGZhbHNlICkgKyAnVCcgKyB0b1RpbWUoIGRhdGUsIGZhbHNlICk7XG59XG5cbi8qKlxuICogQHBhcmFtICB0aW1lT3JEYXRlIHtTdHJpbmd8TnVtYmVyfVxuICogQHJldHVybiB7e3RpbWU6IG51bWJlciwgdHlwZTogc3RyaW5nfX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVzdGFtcCggdGltZU9yRGF0ZSApIHtcblx0aWYgKCAhTnVtYmVyLmlzTmFOKCArdGltZU9yRGF0ZSApICkge1xuXHRcdHJldHVybiB7IHRpbWU6ICt0aW1lT3JEYXRlLCB0eXBlOiAnbnVtYmVyJyB9O1xuXHR9XG5cblx0dGltZU9yRGF0ZSA9IHRpbWVPckRhdGUudG9TdHJpbmcoKTtcblxuXHRjb25zdCBkYXRlUGFydHMgPSB0aW1lT3JEYXRlLnNwbGl0KCAnLScgKTtcblxuXHRpZiAoIGRhdGVQYXJ0cy5sZW5ndGggPiAxICkge1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSggdGltZU9yRGF0ZSApO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpbWU6IGRhdGUuZ2V0VGltZSgpLFxuXHRcdFx0dHlwZTogJ2RhdGUnLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdCB0aW1lUGFydHMgPSB0aW1lT3JEYXRlLnNwbGl0KCAnOicgKTtcblx0Y29uc3QgY2FsbGJhY2tzID0gW1xuXHRcdERhdGUucHJvdG90eXBlLnNldEhvdXJzLFxuXHRcdERhdGUucHJvdG90eXBlLnNldE1pbnV0ZXMsXG5cdFx0RGF0ZS5wcm90b3R5cGUuc2V0U2Vjb25kcyxcblx0XTtcblxuXHRjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcblxuXHRmb3IgKCBjb25zdCBpbmRleCBpbiB0aW1lUGFydHMgKSB7XG5cdFx0aWYgKFxuXHRcdFx0IXRpbWVQYXJ0cy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSB8fFxuXHRcdFx0IWNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2FsbGJhY2tzWyBpbmRleCBdLmNhbGwoIHRpbWUsIHRpbWVQYXJ0c1sgaW5kZXggXSApO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0aW1lOiB0aW1lLmdldFRpbWUoKSxcblx0XHR0eXBlOiAndGltZScsXG5cdH07XG59XG4iLCJpbXBvcnQgTGVuZ3RoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9MZW5ndGhGaWx0ZXInO1xuaW1wb3J0IEZhbGxCYWNrRmlsdGVyIGZyb20gJy4vZmlsdGVycy9GYWxsQmFja0ZpbHRlcic7XG5pbXBvcnQgVG9EYXRlRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RhdGVGaWx0ZXInO1xuaW1wb3J0IFRvVGltZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9UaW1lRmlsdGVyJztcbmltcG9ydCBUb0RhdGVUaW1lRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyJztcbmltcG9ydCBBZGRZZWFyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRZZWFyRmlsdGVyJztcbmltcG9ydCBBZGRNb250aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXInO1xuaW1wb3J0IEFkZERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkRGF5RmlsdGVyJztcbmltcG9ydCBBZGRIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRIb3VyRmlsdGVyJztcbmltcG9ydCBBZGRNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZE1pbkZpbHRlcic7XG5pbXBvcnQgVGltZXN0YW1wRmlsdGVyIGZyb20gJy4vZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXInO1xuaW1wb3J0IFNldEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldEhvdXJGaWx0ZXInO1xuaW1wb3J0IFNldE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0TWluRmlsdGVyJztcbmltcG9ydCBTZXREYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldERheUZpbHRlcic7XG5pbXBvcnQgU2V0WWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0WWVhckZpbHRlcic7XG5pbXBvcnQgU2V0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldE1vbnRoRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0SG91ckZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3REYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RNaW5GaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0WWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyJztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHR5cGUge0FycmF5PEZpbHRlcj59XG4gKi9cbmxldCBmaWx0ZXJzID0gW107XG5cbmNvbnN0IGdldEZpbHRlckl0ZW1zID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmZpbHRlcnMnLFxuXHRbXG5cdFx0U2V0WWVhckZpbHRlcixcblx0XHRTZXRNb250aEZpbHRlcixcblx0XHRTZXREYXlGaWx0ZXIsXG5cdFx0U2V0SG91ckZpbHRlcixcblx0XHRTZXRNaW5GaWx0ZXIsXG5cdFx0U3VidHJhY3RZZWFyRmlsdGVyLFxuXHRcdFN1YnRyYWN0TW9udGhGaWx0ZXIsXG5cdFx0U3VidHJhY3REYXlGaWx0ZXIsXG5cdFx0U3VidHJhY3RIb3VyRmlsdGVyLFxuXHRcdFN1YnRyYWN0TWluRmlsdGVyLFxuXHRcdEFkZFllYXJGaWx0ZXIsXG5cdFx0QWRkTW9udGhGaWx0ZXIsXG5cdFx0QWRkRGF5RmlsdGVyLFxuXHRcdEFkZEhvdXJGaWx0ZXIsXG5cdFx0QWRkTWluRmlsdGVyLFxuXHRcdExlbmd0aEZpbHRlcixcblx0XHRGYWxsQmFja0ZpbHRlcixcblx0XHRUb0RhdGVGaWx0ZXIsXG5cdFx0VG9UaW1lRmlsdGVyLFxuXHRcdFRvRGF0ZVRpbWVGaWx0ZXIsXG5cdFx0VGltZXN0YW1wRmlsdGVyLFxuXHRdLFxuKTtcbmxldCByZXNwb25zZSAgICAgICAgID0gW107XG5cbmZ1bmN0aW9uIHB1c2hGaWx0ZXIoIG5hbWUsIHByb3BzID0gJycgKSB7XG5cdGlmICggIWZpbHRlcnMubGVuZ3RoICkge1xuXHRcdGZpbHRlcnMgPSBnZXRGaWx0ZXJJdGVtcygpO1xuXHR9XG5cblx0bGV0IGZpbHRlcjtcblxuXHRmb3IgKCBsZXQgY3VycmVudCBvZiBmaWx0ZXJzICkge1xuXHRcdGN1cnJlbnQgPSBuZXcgY3VycmVudCgpO1xuXG5cdFx0aWYgKCBuYW1lID09PSBjdXJyZW50LmdldFNsdWcoKSApIHtcblx0XHRcdGZpbHRlciA9IGN1cnJlbnQ7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIWZpbHRlciApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0cHJvcHMgPSBwcm9wcy5zcGxpdCggJywnICkubWFwKFxuXHRcdGl0ZW0gPT4gaXRlbS50cmltKCksXG5cdCk7XG5cblx0ZmlsdGVyLnNldFByb3BzKCBwcm9wcyApO1xuXHRyZXNwb25zZS5wdXNoKCBmaWx0ZXIgKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsdGVycyggZmlsdGVyc0xpc3QgKSB7XG5cdGlmICggbnVsbCA9PT0gZmlsdGVyc0xpc3QgfHwgIWZpbHRlcnNMaXN0Py5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBmaWx0ZXJOYW1lIG9mIGZpbHRlcnNMaXN0ICkge1xuXHRcdGNvbnN0IG1hdGNoZXMgPSBmaWx0ZXJOYW1lLm1hdGNoKCAvXihcXHcrKVxcKChbXigpXSspXFwpLyApO1xuXG5cdFx0aWYgKCBudWxsID09PSBtYXRjaGVzICkge1xuXHRcdFx0cHVzaEZpbHRlciggZmlsdGVyTmFtZSApO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwdXNoRmlsdGVyKCBtYXRjaGVzWyAxIF0sIG1hdGNoZXNbIDIgXSApO1xuXHR9XG5cblx0Y29uc3QgdGVtcFJlc3BvbnNlID0gWyAuLi5yZXNwb25zZSBdO1xuXHRyZXNwb25zZSAgICAgICAgICAgPSBbXTtcblxuXHRyZXR1cm4gdGVtcFJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGaWx0ZXJzOyIsImltcG9ydCBDYWxjdWxhdGVkRm9ybXVsYSBmcm9tICcuL0NhbGN1bGF0ZWRGb3JtdWxhJztcbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgZ2V0RmlsdGVycyBmcm9tICcuL2dldEZpbHRlcnMnO1xuaW1wb3J0IGFwcGx5RmlsdGVycyBmcm9tICcuL2FwcGx5RmlsdGVycyc7XG5pbXBvcnQgeyB0b0RhdGUsIHRvRGF0ZVRpbWUsIHRvVGltZSwgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVycy9GaWx0ZXInO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XG5cdCksXG5cdEZpbHRlcixcblx0Q2FsY3VsYXRlZEZvcm11bGEsXG5cdEJhc2VJbnRlcm5hbE1hY3JvLFxufTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID8/IHt9XG5cdCksXG5cdGdldEZpbHRlcnMsXG5cdGFwcGx5RmlsdGVycyxcblx0dG9EYXRlLFxuXHR0b0RhdGVUaW1lLFxuXHR0b1RpbWUsXG5cdGdldFRpbWVzdGFtcCxcbn07XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckNvbnN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uc3QgPz8ge31cblx0KSxcblx0Li4uQ29uc3RhbnRzLFxufTsiLCIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85ODQ3NTgwL2hvdy10by1kZXRlY3Qtc2FmYXJpLWNocm9tZS1pZS1maXJlZm94LWFuZC1vcGVyYS1icm93c2VyXG5cbmNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbi8vIFNhZmFyaSAzLjArIFwiW29iamVjdCBIVE1MRWxlbWVudENvbnN0cnVjdG9yXVwiXG5jb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoIHVzZXJBZ2VudCApIHx8XG5cdC9jb25zdHJ1Y3Rvci9pLnRlc3QoIHdpbmRvdy5IVE1MRWxlbWVudCApIHx8XG5cdChcblx0XHQoIHAgKSA9PiB7XG5cdFx0XHRyZXR1cm4gJ1tvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXScgPT09IHAudG9TdHJpbmcoKTtcblx0XHR9XG5cdCkoICF3aW5kb3cuc2FmYXJpIHx8IChcblx0XHR0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc2FmYXJpLnB1c2hOb3RpZmljYXRpb25cblx0KSApO1xuXG5jb25zdCBlbnZpcm9ubWVudCA9IHtcblx0c2FmYXJpOiBpc1NhZmFyaSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50OyIsImltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9CYXNlSHRtbEF0dHInO1xuaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlc0h0bWxBdHRyJztcbmltcG9ydCBNYXhGaWxlU2l6ZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvTWF4RmlsZVNpemVIdG1sQXR0cic7XG5pbXBvcnQgUmVtYWluaW5nQ2FsY0F0dHIgZnJvbSAnLi9hdHRycy9SZW1haW5pbmdDYWxjQXR0cic7XG5pbXBvcnQgRmlsZUV4dGVuc2lvbkh0bWxBdHRyIGZyb20gJy4vYXR0cnMvRmlsZUV4dGVuc2lvbkh0bWxBdHRyJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHBhcmFtICBjYWxsYmFja3Mge0Z1bmN0aW9uW119XG4gKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxuICovXG5hc3luYyBmdW5jdGlvbiBhbGxSZWplY3RlZCggY2FsbGJhY2tzICkge1xuXHRjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuXHRcdGNhbGxiYWNrcy5tYXAoIGN1cnJlbnQgPT4gbmV3IFByb21pc2UoIGN1cnJlbnQgKSApLFxuXHQpO1xuXG5cdGlmICggd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5kZXZtb2RlICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKCAnYWxsUmVqZWN0ZWQnICk7XG5cdFx0Y29uc29sZS5pbmZvKCAuLi5yZXN1bHRzICk7XG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXHR9XG5cblx0Y29uc3QgaW52YWxpZCA9IHJlc3VsdHMuZmlsdGVyKFxuXHRcdCggZXJyb3IgKSA9PiAncmVqZWN0ZWQnID09PSBlcnJvci5zdGF0dXMsXG5cdCk7XG5cblx0cmV0dXJuIGludmFsaWQubWFwKCAoIHsgcmVhc29uLCB2YWx1ZSB9ICkgPT4ge1xuXHRcdHJldHVybiByZWFzb24/Lmxlbmd0aCA/IHJlYXNvblsgMCBdIDogKFxuXHRcdFx0cmVhc29uID8/IHZhbHVlXG5cdFx0KTtcblx0fSApO1xufVxuXG5mdW5jdGlvbiBnZXRMYW5ndWFnZSgpIHtcblx0Y29uc3QgbGFuZyA9IHdpbmRvdz8ubmF2aWdhdG9yPy5sYW5ndWFnZXM/Lmxlbmd0aFxuXHQgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1sgMCBdXG5cdCAgICAgICAgICAgICA6IHdpbmRvdz8ubmF2aWdhdG9yPy5sYW5ndWFnZTtcblxuXHRyZXR1cm4gbGFuZyA/PyAnZW4tVVMnO1xufVxuXG5jb25zdCBnZXRJbnB1dEh0bWxBdHRyID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmlucHV0Lmh0bWwuYXR0cnMnLFxuXHRbXG5cdFx0J21pbicsXG5cdFx0J21heCcsXG5cdFx0J21pbkxlbmd0aCcsXG5cdFx0J21heExlbmd0aCcsXG5cdFx0TWF4RmlsZXNIdG1sQXR0cixcblx0XHRNYXhGaWxlU2l6ZUh0bWxBdHRyLFxuXHRcdFJlbWFpbmluZ0NhbGNBdHRyLFxuXHRcdEZpbGVFeHRlbnNpb25IdG1sQXR0cixcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUge0Jhc2VIdG1sQXR0cltdfVxuICovXG5sZXQgaW5wdXRIdG1sQXR0cnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gbmFtZSB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXREZWZhdWx0QXR0ckJ5TmFtZSggbmFtZSApIHtcblx0Y29uc3QgYXR0ciAgICA9IG5ldyBCYXNlSHRtbEF0dHIoKTtcblx0YXR0ci5hdHRyTmFtZSA9IG5hbWU7XG5cblx0cmV0dXJuIGF0dHI7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHJzKCBpbnB1dCApIHtcblx0aWYgKCAhaW5wdXRIdG1sQXR0cnMubGVuZ3RoICkge1xuXHRcdGlucHV0SHRtbEF0dHJzID0gZ2V0SW5wdXRIdG1sQXR0cigpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgaW5wdXRIdG1sQXR0ciBvZiBpbnB1dEh0bWxBdHRycyApIHtcblx0XHRsZXQgY3VycmVudDtcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgaW5wdXRIdG1sQXR0ciApIHtcblx0XHRcdGN1cnJlbnQgPSBnZXREZWZhdWx0QXR0ckJ5TmFtZSggaW5wdXRIdG1sQXR0ciApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBuZXcgaW5wdXRIdG1sQXR0cigpO1xuXHRcdH1cblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aW5wdXQuYXR0cnNbIGN1cnJlbnQuYXR0ck5hbWUgXSA9IGN1cnJlbnQ7XG5cblx0XHRjdXJyZW50LnNldElucHV0KCBpbnB1dCApO1xuXHRcdGN1cnJlbnQub2JzZXJ2ZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRvSFRNTCggdGV4dCApIHtcblx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZXh0LnRyaW0oKTtcblxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSggdmFsdWUgKSB7XG5cdGlmICggJ2Jvb2xlYW4nID09PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuICF2YWx1ZTtcblx0fVxuXG5cdGlmICggbnVsbCA9PT0gdmFsdWUgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiB2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gIU9iamVjdC5rZXlzKCB2YWx1ZSApPy5sZW5ndGg7XG5cdH1cblxuXHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIDAgPT09IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuICF2YWx1ZT8ubGVuZ3RoO1xufVxuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaXNWaXNpYmxlKCBub2RlICkge1xuXHRyZXR1cm4gKFxuXHRcdG5vZGU/LmlzQ29ubmVjdGVkICYmIG51bGwgIT09IG5vZGU/Lm9mZnNldFBhcmVudFxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXRUb3AoIG5vZGUgKSB7XG5cdGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdGNvbnN0IG1heWJlV2luZG93ID0gZ2V0U2Nyb2xsUGFyZW50KCBub2RlICk7XG5cblx0cmV0dXJuIHJlY3Q/LnRvcCArIChcblx0XHRtYXliZVdpbmRvdz8uc2Nyb2xsWSA/PyAwXG5cdCk7XG59XG5cbmNvbnN0IGdldE5vZGUgPSBjdXJyZW50ID0+IChcblx0Y3VycmVudC5zY3JvbGxIZWlnaHQgPiBjdXJyZW50LmNsaWVudEhlaWdodCA/IGN1cnJlbnQgOiBmYWxzZVxuKTtcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KCBub2RlICkge1xuXG5cdC8vIGpldC1wb3B1cCBjb21wYXRpYmlsaXR5XG5cdGxldCBjb250YWluZXIgPSBub2RlLmNsb3Nlc3QoICcuamV0LXBvcHVwX19jb250YWluZXItaW5uZXInICk7XG5cblx0aWYgKCBjb250YWluZXIgKSB7XG5cdFx0cmV0dXJuIGdldE5vZGUoIGNvbnRhaW5lciApO1xuXHR9XG5cblx0Ly8gZWxlbWVudG9yLXBybyBwb3B1cCBjb21wYXRpYmlsaXR5XG5cdGNvbnRhaW5lciA9IG5vZGUuY2xvc2VzdCggJy5lbGVtZW50b3ItcG9wdXAtbW9kYWwgLmRpYWxvZy1tZXNzYWdlJyApO1xuXG5cdGlmICggY29udGFpbmVyICkge1xuXHRcdHJldHVybiBnZXROb2RlKCBjb250YWluZXIgKTtcblx0fVxuXG5cdHJldHVybiB3aW5kb3c7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0cyB7SW5wdXREYXRhW119XG4gKi9cbmZ1bmN0aW9uIGZvY3VzT25JbnZhbGlkSW5wdXQoIGlucHV0cyApIHtcblx0Zm9yICggY29uc3QgaW5wdXQgb2YgaW5wdXRzICkge1xuXHRcdGlmICggaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IWlucHV0LnJlcG9ydGluZy5oYXNBdXRvU2Nyb2xsKCkgJiYgaW5wdXQub25Gb2N1cygpO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VXNlckFnZW50cygpIHtcblx0Zm9yICggY29uc3QgWyBuYW1lLCBpc0FjdGl2ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBlbnZpcm9ubWVudCApICkge1xuXHRcdGlmICggIWlzQWN0aXZlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggYGpldC0tdWEtJHsgbmFtZSB9YCApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGlzVUEoIGJyb3dzZXIgKSB7XG5cdHJldHVybiBlbnZpcm9ubWVudD8uWyBicm93c2VyIF07XG59XG5cbmV4cG9ydCB7XG5cdGFsbFJlamVjdGVkLFxuXHRnZXRMYW5ndWFnZSxcblx0c2V0QXR0cnMsXG5cdHRvSFRNTCxcblx0aXNFbXB0eSxcblx0Z2V0T2Zmc2V0VG9wLFxuXHRmb2N1c09uSW52YWxpZElucHV0LFxuXHRpc1Zpc2libGUsXG5cdGdldFNjcm9sbFBhcmVudCxcblx0aXNVQSxcblx0YXBwbHlVc2VyQWdlbnRzLFxufTsiLCJpbXBvcnQgQ2FsY3VsYXRlZEZvcm11bGEgZnJvbSAnLi4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5mdW5jdGlvbiBDYWxjdWxhdGVkSHRtbFN0cmluZyhcblx0cm9vdCxcblx0eyB3aXRoUHJlZml4ID0gdHJ1ZSwgLi4ub3B0aW9ucyB9ID0ge30sXG4pIHtcblx0Q2FsY3VsYXRlZEZvcm11bGEuY2FsbCggdGhpcywgcm9vdCwgb3B0aW9ucyApO1xuXG5cdGlmICggd2l0aFByZWZpeCApIHtcblx0XHR0aGlzLnJlZ2V4cCA9IC9KRkJfRklFTEQ6OiguKykvZ2k7XG5cdH1cblxuXHR0aGlzLnJlbGF0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0bGV0IGZpZWxkVmFsdWUgPSBhcHBseUZpbHRlcnMoXG5cdFx0XHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXG5cdFx0KTtcblxuXHRcdGZpZWxkVmFsdWUgPSB3cD8uaG9va3M/LmFwcGx5RmlsdGVycyA/XG5cdFx0ICAgICAgICAgICAgIHdwLmhvb2tzLmFwcGx5RmlsdGVycyhcblx0XHRcdCAgICAgICAgICAgICAnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcblx0XHRcdCAgICAgICAgICAgICBmaWVsZFZhbHVlLFxuXHRcdFx0ICAgICAgICAgICAgIGpRdWVyeSggaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdCAgICAgICAgICAgICApIDogZmllbGRWYWx1ZTtcblxuXHRcdHJldHVybiBmYWxzZSA9PT0gZmllbGRWYWx1ZSA/IGlucHV0LnZhbHVlLmN1cnJlbnQgOiBmaWVsZFZhbHVlO1xuXHR9O1xuXG5cdHRoaXMub25NaXNzaW5nUGFydCA9IGZ1bmN0aW9uICgpIHtcblx0fTtcbn1cblxuQ2FsY3VsYXRlZEh0bWxTdHJpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlICk7XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5jYWxjdWxhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdHJldHVybiB0aGlzLmZvcm11bGE7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5wYXJ0cy5tYXAoIGN1cnJlbnQgPT4ge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGN1cnJlbnQgKSB7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzdWx0ID0gY3VycmVudCgpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdCAgICAgICBudWxsID09PSByZXN1bHQgfHwgJycgPT09IHJlc3VsdFxuXHRcdCAgICAgICApID8gJycgOiByZXN1bHQ7XG5cdH0gKS5qb2luKCAnJyApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEh0bWxTdHJpbmc7IiwiZnVuY3Rpb24qIGl0ZXJhdGVDb21tZW50cyhcblx0cm9vdE5vZGUsIGFjY2VwdENhbGxiYWNrID0gKCkgPT4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUICkge1xuXHQvLyBGb3VydGggYXJndW1lbnQsIHdoaWNoIGlzIGFjdHVhbGx5IG9ic29sZXRlIGFjY29yZGluZyB0byB0aGVcblx0Ly8gRE9NNCBzdGFuZGFyZCwgaXMgcmVxdWlyZWQgaW4gSUUgMTFcblx0Y29uc3QgaXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoXG5cdFx0cm9vdE5vZGUsXG5cdFx0Tm9kZUZpbHRlci5TSE9XX0NPTU1FTlQsXG5cdFx0e1xuXHRcdFx0YWNjZXB0Tm9kZTogYWNjZXB0Q2FsbGJhY2ssXG5cdFx0fSxcblx0KTtcblx0bGV0IGN1ck5vZGU7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG5cdHdoaWxlICggY3VyTm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkgKSB7XG5cdFx0Y3VyTm9kZS5ub2RlVmFsdWUgPSBjdXJOb2RlLm5vZGVWYWx1ZS50cmltKCk7XG5cblx0XHR5aWVsZCBjdXJOb2RlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdGVDb21tZW50czsiLCJpbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaXRlcmF0ZUNvbW1lbnRzJztcblxuZnVuY3Rpb24qIGl0ZXJhdGVKZmJDb21tZW50cyggcm9vdE5vZGUgKSB7XG5cdGNvbnN0IGFjY2VwdENhbGxiYWNrID0gbm9kZSA9PiB7XG5cdFx0cmV0dXJuIG5vZGUudGV4dENvbnRlbnQuaW5jbHVkZXMoICdKRkJfRklFTEQ6OicgKTtcblx0fTtcblxuXHR5aWVsZCogaXRlcmF0ZUNvbW1lbnRzKCByb290Tm9kZSwgYWNjZXB0Q2FsbGJhY2sgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0ZUpmYkNvbW1lbnRzOyIsImltcG9ydCBDYWxjdWxhdGVkSHRtbFN0cmluZyBmcm9tICcuL0NhbGN1bGF0ZWRIdG1sU3RyaW5nJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcblx0ICAgICAgc3ByaW50ZixcbiAgICAgIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEBwYXJhbSBjb21tZW50XG4gKiBAcGFyYW0gcm9vdCAgICB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZUNvbW1lbnQoIGNvbW1lbnQsIHJvb3QgKSB7XG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBjb21tZW50LnRleHRDb250ZW50ICk7XG5cblx0aWYgKCAhZm9ybXVsYS5wYXJ0cz8ubGVuZ3RoICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBodG1sIG1hY3JvJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBjb21tZW50IHRleHRcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRjb21tZW50LnRleHRDb250ZW50LFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXG5cdGNvbnN0IHByZXZTaWJsaW5nID0gY29tbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcblx0XHR3cmFwcGVyLFxuXHRcdGNvbW1lbnQsXG5cdCk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0cHJldlNpYmxpbmcuaW5uZXJIVE1MID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0Y29tbWVudC5qZmJPYnNlcnZlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVDb21tZW50OyIsImltcG9ydCBDYWxjdWxhdGVkSHRtbFN0cmluZyBmcm9tICcuL0NhbGN1bGF0ZWRIdG1sU3RyaW5nJztcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSAgICAge05vZGV9XG4gKiBAcGFyYW0gYXR0ck5hbWUge3N0cmluZ31cbiAqIEBwYXJhbSByb290ICAgICB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZU1hY3JvQXR0ciggbm9kZSwgYXR0ck5hbWUsIHJvb3QgKSB7XG5cdGNvbnN0IG5vZGVWYWx1ZSA9IG5vZGVbIGF0dHJOYW1lIF0gPz8gJyc7XG5cblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIG5vZGVWYWx1ZSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBub2RlVmFsdWUgKTtcblxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRub2RlWyBhdHRyTmFtZSBdID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZU1hY3JvQXR0cjsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZX1cbiAqIEBwYXJhbSByb290IHtPYnNlcnZhYmxlfVxuICovXG5mdW5jdGlvbiBvYnNlcnZlTm9kZSggbm9kZSwgcm9vdCApIHtcblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkSHRtbFN0cmluZyggcm9vdCwgeyB3aXRoUHJlZml4OiBmYWxzZSB9ICk7XG5cdGZvcm11bGEub2JzZXJ2ZSggYCUkeyBub2RlLmRhdGFzZXQuamZiTWFjcm8gfSVgICk7XG5cblx0aWYgKCAhZm9ybXVsYS5wYXJ0cz8ubGVuZ3RoICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBodG1sIG1hY3JvJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBtYWNyb1xuXHRcdFx0XHRfXyggJ0NvbnRlbnQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdG5vZGUuZGF0YXNldC5qZmJNYWNybyxcblx0XHRcdCksXG5cdFx0KTtcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cdFx0Zm9ybXVsYS5jbGVhcldhdGNoZXJzKCk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRub2RlLmRhdGFzZXQuamZiT2JzZXJ2ZWQgPSAxO1xuXG5cdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZU5vZGU7IiwiZnVuY3Rpb24gcXVlcnlCeUF0dHJWYWx1ZSggcm9vdE5vZGUsIHZhbHVlICkge1xuXHRjb25zdCB7IHJlcGxhY2VBdHRycyA9IFtdIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuXHRjb25zdCBxdWVyeVNlbGVjdG9yID0gW107XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcmVwbGFjZUF0dHJzLmxlbmd0aDsgaSsrICkge1xuXHRcdHF1ZXJ5U2VsZWN0b3IucHVzaCggYFskeyByZXBsYWNlQXR0cnNbIGkgXSB9Kj1cIiR7IHZhbHVlIH1cIl1gICk7XG5cdH1cblxuXHRyZXR1cm4gcm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggcXVlcnlTZWxlY3Rvci5qb2luKCAnLCAnICkgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlCeUF0dHJWYWx1ZTsiLCJpbXBvcnQgaW5pdEZvcm0gZnJvbSAnLi9pbml0Rm9ybSc7XG5cbmZ1bmN0aW9uIGluaXRFbGVtZW50b3IoKSB7XG5cdGlmICggISB3aW5kb3cuZWxlbWVudG9yRnJvbnRlbmQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHdpZGdldHMgPSB7XG5cdFx0J2pldC1lbmdpbmUtYm9va2luZy1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcblx0XHQnamV0LWZvcm0tYnVpbGRlci1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcblx0fTtcblxuXHRqUXVlcnkuZWFjaCggd2lkZ2V0cywgZnVuY3Rpb24oIHdpZGdldCwgY2FsbGJhY2sgKSB7XG5cdFx0d2luZG93LmVsZW1lbnRvckZyb250ZW5kLmhvb2tzLmFkZEFjdGlvbiggJ2Zyb250ZW5kL2VsZW1lbnRfcmVhZHkvJyArIHdpZGdldCwgY2FsbGJhY2sgKTtcblx0fSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0RWxlbWVudG9yOyIsImltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL09ic2VydmFibGUnO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgPz8ge307XG5cbmZ1bmN0aW9uIGluaXRGb3JtKCAkc2NvcGUgKSB7XG5cdGNvbnN0IGZvcm0gPSAkc2NvcGVbIDAgXS5xdWVyeVNlbGVjdG9yKCAnZm9ybS5qZXQtZm9ybS1idWlsZGVyJyApO1xuXG5cdGlmICggIWZvcm0gKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cblx0d2luZG93LkpldEZvcm1CdWlsZGVyWyBmb3JtLmRhdGFzZXQuZm9ybUlkIF0gPSBvYnNlcnZhYmxlO1xuXG5cdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2luaXQnLFxuXHRcdFsgJHNjb3BlLCBvYnNlcnZhYmxlIF0sXG5cdCk7XG5cblx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBmb3JtICk7XG5cblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWZ0ZXItaW5pdCcsXG5cdFx0WyAkc2NvcGUsIG9ic2VydmFibGUgXSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEZvcm07IiwiaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL0lucHV0RGF0YSc7XG5pbXBvcnQgeyBpc0NoYW5nZVR5cGUgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XG5pbXBvcnQgeyBTVFJJQ1RfTU9ERSB9IGZyb20gJy4uL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5cbmZ1bmN0aW9uIENoYW5nZURhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzQ2hhbmdlVHlwZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0fSApO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdGlmICggdGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcblx0fTtcblxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5zaWxlbmNlU2V0KCAnJyApO1xuXHR9O1xufVxuXG5DaGFuZ2VEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlRGF0YTsiLCJpbXBvcnQgTG9hZGluZ1JlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2snO1xuaW1wb3J0IHsgZ2V0U2lnbmFsIH0gZnJvbSAnLi4vc2lnbmFscy9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVwb3J0IH0gZnJvbSAnLi4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQYXJzZWROYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBpc1Zpc2libGUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgU1RSSUNUX01PREUgfSBmcm9tICcuLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xuXG5jb25zdCB7IGRvQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJbnB1dERhdGF9XG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lICAgIE5hbWUgb2YgaHRtbCBmaWVsZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGluZyBzcGVjaWFsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyc1xuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICAgICAgIFByZXBhcmVkIG5hbWUgb2ZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmllbGRcbiAqIEBwcm9wZXJ0eSB7SFRNTElucHV0RWxlbWVudHwqW119ICAgICAgICAgICAgICAgbm9kZXMgICAgICBSZWxhdGVkIG5vZGVzXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlVmFyfSAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICAgUmVhY3RpdmUgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7Q29uZGl0aW9uQ2hlY2tlcnxudWxsfSAgICAgICAgICAgICAgY2hlY2tlciAgICBDb25kaXRpb24gY2hlY2tlclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgYnlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25kaXRpb25hbCBCbG9ja1xuICogQHByb3BlcnR5IHsqfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjVmFsdWUgIENhbGN1bGF0ZWQgdmFsdWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIGJ5IENhbGN1bGF0ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWVsZFxuICogQHByb3BlcnR5IHtBZHZhbmNlZFJlcG9ydGluZ3xCcm93c2VyUmVwb3J0aW5nfSByZXBvcnRpbmcgIFJlcG9ydGluZyBvYmplY3RcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdmFsaWRhdGlvbiBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93aW5nIGVycm9yc1xuICogQHByb3BlcnR5IHtPYnNlcnZhYmxlfSAgICAgICAgICAgICAgICAgICAgICAgICByb290ICAgICAgIE5lYXJlc3Qgb2JzZXJ2YWJsZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLCBjb3VsZCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyBvZiB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRlclxuICogQHByb3BlcnR5IHtQYWdlU3RhdGV9ICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlICAgICAgIFJlbGF0ZWQgcGFnZSBpblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc3RlcCBmb3JtXG4gKiBAcHJvcGVydHkge0xvYWRpbmdSZWFjdGl2ZVZhcn0gICAgICAgICAgICAgICAgIGxvYWRpbmcgICAgUmVhY3RpdmUgdmFyIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlIHZpc3VhbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlIG9mIHRoZSBmaWVsZFxuICogQHByb3BlcnR5IHtPYmplY3Q8UmVhY3RpdmVWYXI+fSAgICAgICAgICAgICAgICBhdHRycyAgICAgIE9iamVjdCB3aXRoXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmUgYXR0cmlidXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkIElzIHJlcXVpcmVkIGZpZWxkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Igbm90XG4gKiBAcHJvcGVydHkge251bGx8UmVhY3RpdmVIb29rfSAgICAgICAgICAgICAgICAgIGVudGVyS2V5ICAgVXNlZCBmb3IgaGFuZGxpbmdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lciBob29rcyBvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNzIEVudGVyIGJ1dHRvblxuICogQHByb3BlcnR5IHtudWxsfHN0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGUgIFR5cGUgaWRlbnRpZmllciBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaWVsZFxuICovXG5mdW5jdGlvbiBJbnB1dERhdGEoKSB7XG5cdHRoaXMucmF3TmFtZSA9ICcnO1xuXHR0aGlzLm5hbWUgICAgPSAnJztcblx0dGhpcy5jb21tZW50ID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXXxIVE1MSW5wdXRFbGVtZW50W119XG5cdCAqL1xuXHR0aGlzLm5vZGVzID0gW107XG5cdHRoaXMuYXR0cnMgICAgICAgICA9IHt9O1xuXHR0aGlzLmVudGVyS2V5ICAgICAgPSBudWxsO1xuXHR0aGlzLmlucHV0VHlwZSAgICAgPSBudWxsO1xuXHR0aGlzLm9mZnNldE9uRm9jdXMgPSA3NTtcblxuXHQvKipcblx0ICogUGF0aCBmcm9tIHRvcCBvZiBmb3JtIHRvIGN1cnJlbnQgZmllbGQgbmFtZVxuXHQgKiBFeC46IFsgJ3JlcGVhdGVyX25hbWUnLCAwLCAndGV4dF9maWVsZCcgXVxuXHQgKiBXaGVyZTpcblx0ICogIC0gJ3JlcGVhdGVyX25hbWUnOiBuYW1lIG9mIHJlcGVhdGVyLCB3aGVyZSBjdXJyZW50IGZpZWxkIGlzIHBsYWNlZFxuXHQgKiAgLSAwOiBpbmRleCBvZiByZXBlYXRlciByb3csIHdoZXJlIGN1cnJlbnQgZmllbGQgaXMgcGxhY2VkXG5cdCAqICAtICd0ZXh0X2ZpZWxkJzogbmFtZSBvZiBjdXJyZW50IGZpZWxkIG5hbWVcblx0ICogQHR5cGUge0FycmF5PHN0cmluZyB8IG51bWJlcj59XG5cdCAqL1xuXHR0aGlzLnBhdGggPSBbXTtcblxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dGhpcy52YWx1ZSA9IHRoaXMuZ2V0UmVhY3RpdmUoKTtcblx0dGhpcy52YWx1ZS53YXRjaCggdGhpcy5vbkNoYW5nZS5iaW5kKCB0aGlzICkgKTtcblxuXHR0aGlzLmlzUmVxdWlyZWQgPSBmYWxzZTtcblx0dGhpcy5jYWxjVmFsdWUgID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9XG5cdCAqL1xuXHR0aGlzLnJlcG9ydGluZyA9IG51bGw7XG5cblx0dGhpcy5jaGVja2VyID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLnJvb3QgPSBudWxsO1xuXG5cdHRoaXMubG9hZGluZyA9IG5ldyBMb2FkaW5nUmVhY3RpdmVWYXIoIGZhbHNlICk7XG5cdHRoaXMubG9hZGluZy5tYWtlKCk7XG5cblx0LyoqXG5cdCAqIEluIENoZWNrYm94RGF0YSBjYXNlIHdlIGhhdmUganVzdCBtYWluIHNhbml0aXplciwgd2l0aG91dCBjYWxsYWJsZS5cblx0ICogU28gd2Ugc2V0IC5jYWxjVmFsdWUgaW5zaWRlIGNhbGxhYmxlLnJ1blNpZ25hbCgpXG5cdCAqXG5cdCAqIEFuZCB0byBwcmV2ZW50IHJlc2V0dGluZyAuY2FsY1ZhbHVlIGJ5IG9uQ2hhbmdlXG5cdCAqIHNldCB0aGlzIHByb3BlcnR5IHRvIEZBTFNFLlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IHRydWU7XG5cdHRoaXMudmFsaWRhdGVUaW1lciA9IGZhbHNlO1xufVxuXG5JbnB1dERhdGEucHJvdG90eXBlLmF0dHJzID0ge307XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuSW5wdXREYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBldmVudCA9PiB7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHR9ICk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsICgpID0+IHt9ICk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCAoKSA9PiB7XG5cdFx0dGhpcy5kZWJvdW5jZWRSZXBvcnQoKTtcblx0fSApO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0IVNUUklDVF9NT0RFICYmIGpRdWVyeSggbm9kZSApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRpZiAoIHRoaXMudmFsdWUuY3VycmVudCA9PSBldmVudC50YXJnZXQudmFsdWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XG5cdH0gKTtcblxuXHRpZiAoICdpbnB1dCcgIT09IHRoaXMuaW5wdXRUeXBlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUubWFrZVJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLm9uT2JzZXJ2ZSgpO1xuXHR0aGlzLmFkZExpc3RlbmVycygpO1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG5cblx0dGhpcy52YWx1ZS5tYWtlKCk7XG5cblx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJywgdGhpcyApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUub25DaGFuZ2UgICAgID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XG5cdGlmICggdGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlICkge1xuXHRcdHRoaXMuY2FsY1ZhbHVlID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXHR9XG5cblx0Ly8gYXBwbHkgY2hhbmdlcyBpbiBET01cblx0dGhpcz8uY2FsbGFibGU/LnJ1biggcHJldlZhbHVlICk7XG5cblx0Ly8gc2hvdyBlcnJvcnNcblx0dGhpcy5yZXBvcnQoKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnJlcG9ydCAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZSgpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUucmVwb3J0T25CbHVyID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnJlcG9ydGluZy52YWxpZGF0ZU9uQmx1cigpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuZGVib3VuY2VkUmVwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuc3RvcFZhbGlkYXRpb24gPSBmYWxzZTtcblxuXHRpZiAoIHRoaXMudmFsaWRhdGVUaW1lciApIHtcblx0XHR0aGlzLnN0b3BWYWxpZGF0aW9uID0gdHJ1ZTtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMudmFsaWRhdGVUaW1lciApO1xuXHR9XG5cblx0dGhpcy52YWxpZGF0ZVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xuXHRcdHRoaXMucmVwb3J0T25CbHVyKCk7XG5cdH0sIDQ1MCApO1xufVxuLyoqXG4gKiBAcGFyYW0gIGNhbGxhYmxlXG4gKiBAcmV0dXJuIHsoZnVuY3Rpb24oKTogKnwqW10pfCp9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRyZXR1cm4gdGhpcy52YWx1ZS53YXRjaCggY2FsbGFibGUgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLndhdGNoVmFsaWRpdHkgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRyZXR1cm4gdGhpcy5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS53YXRjaCggY2FsbGFibGUgKTtcbn07XG4vKipcbiAqIEBwYXJhbSAgY2FsbGFibGVcbiAqIEByZXR1cm4geyhmdW5jdGlvbigpOiAqfCpbXSl8Kn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5zYW5pdGl6ZSA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdHJldHVybiB0aGlzLnZhbHVlLnNhbml0aXplKCBjYWxsYWJsZSApO1xufTtcbi8qKlxuICogQHBhcmFtIGlucHV0RGF0YSB7SW5wdXREYXRhfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKCBpbnB1dERhdGEgKSB7XG5cdHRoaXMubm9kZXMgPSBbIC4uLmlucHV0RGF0YS5nZXROb2RlKCkgXTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgZmllbGRWYWx1ZTtcblx0aWYgKCB0aGlzLmlzQXJyYXkoKSApIHtcblx0XHRmaWVsZFZhbHVlID0gQXJyYXkuZnJvbSggdGhpcy5ub2RlcyApLlxuXHRcdFx0bWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0ZmllbGRWYWx1ZSA9IHRoaXMubm9kZXNbIDAgXT8udmFsdWU7XG5cdH1cblx0dGhpcy5jYWxjVmFsdWUgICAgID0gZmllbGRWYWx1ZTtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZmllbGRWYWx1ZTtcbn07XG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdHRoaXMubm9kZXMgICA9IFsgbm9kZSBdO1xuXHR0aGlzLnJhd05hbWUgPSBub2RlLm5hbWUgPz8gJyc7XG5cdHRoaXMubmFtZSAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xuXG5cdHRoaXMuaW5wdXRUeXBlID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xufTtcbi8qKlxuICogUnVucyBvbmNlIGluIGxpZmVjeWNsZS5cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5vbk9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHQvKipcblx0ICogU2F2ZSBsaW5rIHRvIHRoaXMgb2JqZWN0XG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xuXG5cdHRoaXMuaXNSZXF1aXJlZCA9IHRoaXMuY2hlY2tJc1JlcXVpcmVkKCk7XG5cblx0dGhpcy5jYWxsYWJsZSA9IGdldFNpZ25hbCggbm9kZSwgdGhpcyApO1xuXHR0aGlzLmNhbGxhYmxlLnNldElucHV0KCB0aGlzICk7XG5cblx0dGhpcy5yZXBvcnRpbmcgPSBjcmVhdGVSZXBvcnQoIHRoaXMgKTtcblxuXHR0aGlzLmxvYWRpbmcud2F0Y2goICgpID0+IHRoaXMub25DaGFuZ2VMb2FkaW5nKCkgKTtcblxuXHR0aGlzLnBhdGggPSBbIC4uLnRoaXMuZ2V0UGFyZW50UGF0aCgpLCB0aGlzLm5hbWUgXTtcblxuXHRpZiAoXG5cdFx0Ly8gaXMgYWpheFxuXHRcdCF0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKSB8fFxuXHRcdHRoaXMuaGFzUGFyZW50KClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIud2F0Y2hSZXNldCggKCkgPT4gdGhpcy5vbkNsZWFyKCkgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2hhbmdlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcblxuXHR0aGlzLmdldFN1Ym1pdCgpLmxvY2tTdGF0ZS5jdXJyZW50ID0gdGhpcy5sb2FkaW5nLmN1cnJlbnQ7XG5cblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXHRjb25zdCB3cmFwcGVyICA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBAd29yZHByZXNzL25vLWdsb2JhbC1hY3RpdmUtZWxlbWVudCAqL1xuXHQvLyBQcmV2ZW50IHNldHRpbmcgcmVhZE9ubHkgZm9yIGN1cnJlbnRseSBhY3RpdmUgZWxlbWVudCB0byBhdm9pZCB1c2VyIGRpc3RyYWN0aW9ucy5cblx0aWYgKCBub2RlICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICkge1xuXHRcdG5vZGUucmVhZE9ubHkgPSB0aGlzLmxvYWRpbmcuY3VycmVudDtcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlICovXG5cblx0d3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtbG9hZGluZycsIHRoaXMubG9hZGluZy5jdXJyZW50ICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5zZXRSb290ID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHR0aGlzLnJvb3QgPSBvYnNlcnZhYmxlO1xufTtcbi8qKlxuICogQnkgZGVmYXVsdCBpdCBydW5zIG9ubHkgaWYgcmVwZWF0ZXIgaXRlbSB3YXMgcmVtb3ZlZFxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xufTtcbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5hbWU7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtBcnJheSB8IHN0cmluZyB8IGJvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnZhbHVlLmN1cnJlbnQ7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXROb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5ub2Rlcztcbn07XG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuaXNBcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucmF3TmFtZS5pbmNsdWRlcyggJ1tdJyApO1xufTtcbi8qKlxuICogQHBhcmFtIGNhbGxhYmxlICAgICB7RnVuY3Rpb258bWl4ZWR9XG4gKiBAcGFyYW0gaW5wdXRDb250ZXh0IHtJbnB1dERhdGF8Qm9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5iZWZvcmVTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlLCBpbnB1dENvbnRleHQgPSBmYWxzZSApIHtcblx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIucHJvbWlzZSggY2FsbGFibGUsIGlucHV0Q29udGV4dCApO1xufTtcbi8qKlxuICogQHJldHVybiB7Rm9ybVN1Ym1pdH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmdldFJvb3QoKS5mb3JtO1xufTtcbi8qKlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cdHJldHVybiB0aGlzLnJvb3QucGFyZW50LmdldFJvb3QoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuXG5cdHJldHVybiBpc1Zpc2libGUoIHdyYXBwZXIgKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zaWxlbmNlU2V0KCBudWxsICk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gbmV3IFJlYWN0aXZlVmFyKCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmNoZWNrSXNSZXF1aXJlZCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdHJldHVybiBub2RlLnJlcXVpcmVkID8/ICEhbm9kZS5kYXRhc2V0LnJlcXVpcmVkPy5sZW5ndGg7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLnNpbGVuY2VTZXQgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHQvKipcblx0ICogUmVsYXRlZCB0byBpc3N1ZVxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMjYxI2lzc3VlY29tbWVudC0xMjkzMjkwMjkxXG5cdCAqL1xuXHRjb25zdCB0ZW1wUmVwb3J0ID0gdGhpcy5yZXBvcnQuYmluZCggdGhpcyApO1xuXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XG5cblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdmFsdWU7XG5cblx0dGhpcy5yZXBvcnQgPSB0ZW1wUmVwb3J0O1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5zaWxlbmNlTm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB0ZW1wUmVwb3J0ID0gdGhpcy5yZXBvcnQuYmluZCggdGhpcyApO1xuXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XG5cblx0dGhpcy52YWx1ZS5ub3RpZnkoKTtcblxuXHR0aGlzLnJlcG9ydCA9IHRlbXBSZXBvcnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuaGFzUGFyZW50ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gISF0aGlzLnJvb3Q/LnBhcmVudDtcbn07XG5cbi8qKlxuICogRm9yIGluc2VydCBlcnJvcnMgaW4gYWR2YW5jZWQgdmFsaWRhdGlvbiBtb2RlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFdyYXBwZXJOb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5ub2Rlc1sgMCBdLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmhhbmRsZUVudGVyS2V5ID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0aWYgKCBldmVudC5rZXkgIT09ICdFbnRlcicgfHwgLy8gbm90IGVudGVyIGtleVxuXHRcdCF0aGlzLmVudGVyS2V5IHx8IC8vIGhhbmRsaW5nIGVudGVyIGtleSBpcyBkaXNhYmxlZFxuXHRcdGV2ZW50LnNoaWZ0S2V5IHx8IC8vIHRoZSBzaGlmdCBrZXkgd2FzIHByZXNzZWRcblx0XHRldmVudC5pc0NvbXBvc2luZyAvLyBpZiB0aGUgZXZlbnQgaXMgZmlyZWQgd2l0aGluIGEgY29tcG9zaXRpb24gc2Vzc2lvblxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdHRoaXMub25FbnRlcktleSgpO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5vbkVudGVyS2V5ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjYW5TdWJtaXQgPSB0aGlzLmVudGVyS2V5LmFwcGx5RmlsdGVycyggdHJ1ZSApO1xuXG5cdGlmICggY2FuU3VibWl0ICkge1xuXHRcdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0KCk7XG5cdH1cbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuaW5pdE5vdGlmeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNpbGVuY2VOb3RpZnkoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUub25Gb2N1cyAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2Nyb2xsVG8oKTtcblx0dGhpcy5mb2N1c1JhdygpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuZm9jdXNSYXcgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHQvKipcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjI2NSNpc3N1ZWNvbW1lbnQtMTQ0Nzk4ODcxOFxuXHQgKi9cblx0aWYgKCBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGU/LmZvY3VzKCB7IHByZXZlbnRTY3JvbGw6IHRydWUgfSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG5cblx0d2luZG93LnNjcm9sbFRvKCB7XG5cdFx0dG9wOiBnZXRPZmZzZXRUb3AoIHdyYXBwZXIgKSAtIHRoaXMub2Zmc2V0T25Gb2N1cyxcblx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdH0gKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7UmVwb3J0aW5nQ29udGV4dH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5yb290LmdldENvbnRleHQoKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbnxJbnB1dERhdGFbXX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5wb3B1bGF0ZUlubmVyID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEV4ZWN1dGVkIHdpdGggZGVmYXVsdCBicm93c2VyIHZhbGlkYXRpb25cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxFbGVtZW50fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJlcG9ydGluZ05vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzWyAwIF07XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFBhcmVudFBhdGggPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QXJyYXl8T2JqZWN0fVxuXHQgKi9cblx0Y29uc3QgdmFsdWUgPSB0aGlzLnJvb3QucGFyZW50LnZhbHVlLmN1cnJlbnQ7XG5cblx0aWYgKCAnb2JqZWN0JyAhPT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIHJvdyBdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZSApICkge1xuXHRcdGlmICggcm93ICE9PSB0aGlzLnJvb3QgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLnRoaXMucm9vdC5wYXJlbnQuZ2V0UGFyZW50UGF0aCgpLFxuXHRcdFx0dGhpcy5yb290LnBhcmVudC5uYW1lLFxuXHRcdFx0aW5kZXgsXG5cdFx0XTtcblx0fVxuXG5cdHJldHVybiBbXTtcbn07XG5cbi8qKlxuICogUnVucyBvbmx5IG9uY2Ugb24gd2luZG93IFwibG9hZFwiIGV2ZW50XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG59O1xuXG4vKipcbiAqIFJ1bnMgb24gc2V0IE9ic2VydmFibGUudmFsdWUuY3VycmVudFxuICogQHBhcmFtIHZhbHVlXG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmV2ZXJ0VmFsdWUgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RGF0YTtcbiIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xuaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIE5vTGlzdGVuRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlfVxuXHQgKi9cblx0dGhpcy5jb21tZW50ID0gbnVsbDtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNIaWRkZW4oIG5vZGUgKTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gc2lsZW5jZSBpcyBnb2xkZW5cblx0fTtcblx0dGhpcy5vbk9ic2VydmUgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5vbk9ic2VydmUuY2FsbCggdGhpcyApO1xuXG5cdFx0aWYgKCAhdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRDb21tZW50KCk7XG5cdH07XG5cdHRoaXMuc2V0Q29tbWVudCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY29tbWVudCAgID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggdGhpcy5uYW1lICk7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0bm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSggdGhpcy5jb21tZW50LCBub2RlICk7XG5cdH07XG5cblx0dGhpcy5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHRoaXMubWVyZ2UgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHRoaXMubm9kZXMucHVzaCggLi4uaW5wdXQuZ2V0Tm9kZSgpICk7XG5cdH07XG59XG5cbk5vTGlzdGVuRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vTGlzdGVuRGF0YTsiLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcbmltcG9ydCB7IGlzUmFuZ2UgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIFJhbmdlRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5udW1iZXJOb2RlID0gbnVsbDtcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSYW5nZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnNldE5vZGUgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cblx0XHR0aGlzLm51bWJlck5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtbnVtYmVyJyxcblx0XHQpO1xuXHR9O1xufVxuXG5SYW5nZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZURhdGE7IiwiaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XG5pbXBvcnQgUmVhY3RpdmVTZXQgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVTZXQnO1xuXG5jb25zdCB7IGJ1aWx0SW5TdGF0ZXMgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVhY3RpdmVTZXR9IHZhbHVlIFJlYWN0aXZlIHZhbHVlXG4gKlxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFJlbmRlclN0YXRlRGF0YSgpIHtcblx0Tm9MaXN0ZW5EYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQnaGlkZGVuJyA9PT0gbm9kZT8udHlwZSAmJlxuXHRcdFx0J19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzW10nID09PSBub2RlLm5hbWVcblx0XHQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XG5cdCAqL1xuXHR0aGlzLmFkZCA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHRcdHRoaXMudmFsdWUuYWRkKCBzdGF0ZU5hbWUgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHN0YXRlTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0XHR0aGlzLnZhbHVlLnJlbW92ZSggc3RhdGVOYW1lICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cblx0ICogQHBhcmFtIGZvcmNlICAgICB7bnVsbHxCb29sZWFufVxuXHQgKi9cblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSwgZm9yY2UgPSBudWxsICkge1xuXHRcdHRoaXMudmFsdWUudG9nZ2xlKCBzdGF0ZU5hbWUsIGZvcmNlICk7XG5cdH07XG5cblx0dGhpcy5pc0N1c3RvbSA9IGZ1bmN0aW9uICgga2V5ICkge1xuXHRcdHJldHVybiAhYnVpbHRJblN0YXRlcy5pbmNsdWRlcygga2V5ICk7XG5cdH07XG59XG5cblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBOb0xpc3RlbkRhdGEucHJvdG90eXBlICk7XG5cblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUuZ2V0UmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBuZXcgUmVhY3RpdmVTZXQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN0YXRlRGF0YTsiLCJpbXBvcnQgQ2hhbmdlRGF0YSBmcm9tICcuL0NoYW5nZURhdGEnO1xuaW1wb3J0IFJhbmdlRGF0YSBmcm9tICcuL1JhbmdlRGF0YSc7XG5pbXBvcnQgTm9MaXN0ZW5EYXRhIGZyb20gJy4vTm9MaXN0ZW5EYXRhJztcbmltcG9ydCBSZW5kZXJTdGF0ZURhdGEgZnJvbSAnLi9SZW5kZXJTdGF0ZURhdGEnO1xuaW1wb3J0IHsgc2V0QXR0cnMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcblx0ICAgICAgZG9BY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb24oKTogKn1cbiAqL1xuY29uc3QgZ2V0RGF0YVR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdFtcblx0XHRSZW5kZXJTdGF0ZURhdGEsXG5cdFx0UmFuZ2VEYXRhLFxuXHRcdENoYW5nZURhdGEsXG5cdFx0Tm9MaXN0ZW5EYXRhLFxuXHRdLFxuKTtcblxubGV0IGRhdGFUeXBlcyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZVxuICogQHBhcmFtICBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXQoIG5vZGUsIG9ic2VydmFibGUgKSB7XG5cdGlmICggIWRhdGFUeXBlcy5sZW5ndGggKSB7XG5cdFx0ZGF0YVR5cGVzID0gZ2V0RGF0YVR5cGVzKCk7XG5cdH1cblx0Zm9yICggY29uc3QgZGF0YVR5cGUgb2YgZGF0YVR5cGVzICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgZGF0YVR5cGUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjdXJyZW50LnNldFJvb3QoIG9ic2VydmFibGUgKTtcblx0XHRjdXJyZW50LnNldE5vZGUoIG5vZGUgKTtcblx0XHRzZXRBdHRycyggY3VycmVudCApO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQuY3JlYXRlZCcsIGN1cnJlbnQgKTtcblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnICk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlZE5hbWUoIG5hbWUgKSB7XG5cdGNvbnN0IHJlZ2V4cHMgPSBbXG5cdFx0Ly8gbXVsdGlwbGUgZmllbGRzIChjaGVja2JveFtdKVxuXHRcdC9eKFtcXHdcXC1dKylcXFtcXF0kLyxcblx0XHQvLyBmaWVsZHMgaW5zaWRlIHJlcGVhdGVyIChyZXBfbmFtZVsxXVtjb250ZW50X2ZpZWxkXSlcblx0XHQvXltcXHdcXC1dK1xcW1xcZCtcXF1cXFsoW1xcd1xcLV0rKVxcXVxcWz9cXF0/JC8sXG5cdF07XG5cblx0Zm9yICggY29uc3QgcmVnRXhwIG9mIHJlZ2V4cHMgKSB7XG5cdFx0aWYgKCAhcmVnRXhwLnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBtYXRjaGVzID0gbmFtZS5tYXRjaCggcmVnRXhwICk7XG5cblx0XHRyZXR1cm4gbWF0Y2hlc1sgMSBdO1xuXHR9XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0cyB7SW5wdXREYXRhW119XG4gKi9cbmZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRzKCBpbnB1dHMgKSB7XG5cdGNvbnN0IGxpc3QgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0Y29uc3QgaW5uZXIgPSBpbnB1dC5wb3B1bGF0ZUlubmVyKCk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0aW5uZXI/Lmxlbmd0aCAmJiBsaXN0LnB1c2goIC4uLmlubmVyICk7XG5cblx0XHRsaXN0LnB1c2goIGlucHV0ICk7XG5cdH1cblxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IHsgZ2V0UGFyc2VkTmFtZSwgY3JlYXRlSW5wdXQsIHBvcHVsYXRlSW5wdXRzIH07IiwiLyoqXG4gKiBAdGhpcyB7UmVhY3RpdmVWYXJ9XG4gKlxuICogQGNsYXNzXG4gKi9cbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gTG9hZGluZ1JlYWN0aXZlVmFyKCkge1xuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCBmYWxzZSApO1xuXG5cdHRoaXMuc3RhcnQgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudCA9IHRydWU7XG5cdH07XG5cdHRoaXMuZW5kICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudCA9IGZhbHNlO1xuXHR9O1xuXHR0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnQgPSAhdGhpcy5jdXJyZW50O1xuXHR9O1xufVxuXG5Mb2FkaW5nUmVhY3RpdmVWYXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVhY3RpdmVWYXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSZWFjdGl2ZVZhcjsiLCJmdW5jdGlvbiBSZWFjdGl2ZUhvb2soKSB7XG5cdHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuUmVhY3RpdmVIb29rLnByb3RvdHlwZSA9IHtcblx0YWRkRmlsdGVyKCBjYWxsYWJsZSApIHtcblx0XHR0aGlzLmhhbmRsZXJzLnB1c2goIGNhbGxhYmxlICk7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcblxuXHRcdHJldHVybiAoKSA9PiB0aGlzLmhhbmRsZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0YXBwbHlGaWx0ZXJzKCAuLi5wYXJhbXMgKSB7XG5cdFx0bGV0IGN1cnJlbnQgICAgID0gcGFyYW1zWyAwIF07XG5cdFx0Y29uc3QgbmV3UGFyYW1zID0gcGFyYW1zLnNsaWNlKCAxICk7XG5cblx0XHRmb3IgKCBjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMgKSB7XG5cdFx0XHRjdXJyZW50ID0gaGFuZGxlciggY3VycmVudCwgLi4ubmV3UGFyYW1zICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZUhvb2s7XG4iLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIFJlYWN0aXZlU2V0KCB2YWx1ZSApIHtcblx0UmVhY3RpdmVWYXIuY2FsbCggdGhpcywgdmFsdWUgKTtcbn1cblxuUmVhY3RpdmVTZXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVhY3RpdmVWYXIucHJvdG90eXBlICk7XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0Ly8gYWRkIHVuaXF1ZSB2YWx1ZVxuXHR0aGlzLmN1cnJlbnQgPSBbXG5cdFx0Li4ubmV3IFNldCggW1xuXHRcdFx0Li4uKFxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPz8gW11cblx0XHRcdCksXG5cdFx0XHRzdGF0ZU5hbWUsXG5cdFx0XSApLFxuXHRdO1xufTtcblxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHR0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZmlsdGVyKFxuXHRcdGl0ZW0gPT4gaXRlbSAhPT0gc3RhdGVOYW1lLFxuXHQpO1xufTtcblxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lLCBmb3JjZSA9IG51bGwgKSB7XG5cdGlmICggbnVsbCAhPT0gZm9yY2UgKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdGZvcmNlID8gdGhpcy5hZGQoIHN0YXRlTmFtZSApIDogdGhpcy5yZW1vdmUoIHN0YXRlTmFtZSApO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCB0aGlzLmN1cnJlbnQuaW5jbHVkZXMoIHN0YXRlTmFtZSApICkge1xuXHRcdHRoaXMucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLmFkZCggc3RhdGVOYW1lICk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlU2V0OyIsImltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBSZWFjdGl2ZVZhciggdmFsdWUgPSBudWxsICkge1xuXHR0aGlzLmN1cnJlbnQgICAgPSB2YWx1ZTtcblx0dGhpcy5zaWduYWxzICAgID0gW107XG5cdHRoaXMuc2FuaXRpemVycyA9IFtdO1xuXHR0aGlzLmlzRGVidWcgICAgPSBmYWxzZTtcblx0dGhpcy5pc1NpbGVuY2UgID0gZmFsc2U7XG5cdHRoaXMuaXNNYWtlZCAgICA9IGZhbHNlO1xufVxuXG5SZWFjdGl2ZVZhci5wcm90b3R5cGUgPSB7XG5cdHdhdGNoT25jZSAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBjbGVhcldhdGNoZXIgPSB0aGlzLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRjbGVhcldhdGNoZXIoKTtcblx0XHRcdGNhbGxhYmxlKCk7XG5cdFx0fSApO1xuXHR9LFxuXHR3YXRjaCAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5zaWduYWxzLnNvbWUoICggeyBzaWduYWwgfSApID0+IHNpZ25hbCA9PT0gY2FsbGFibGUgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2lnbmFscy5wdXNoKCB7XG5cdFx0XHRzaWduYWw6IGNhbGxhYmxlLFxuXHRcdFx0dHJhY2U6IG5ldyBFcnJvcigpLnN0YWNrLFxuXHRcdH0gKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zaWduYWxzLmxlbmd0aCAtIDE7XG5cblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zaWduYWxzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0c2FuaXRpemUgKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIC0xICE9PSB0aGlzLnNhbml0aXplcnMuaW5kZXhPZiggY2FsbGFibGUgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2FuaXRpemVycy5wdXNoKCBjYWxsYWJsZSApO1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNhbml0aXplcnMubGVuZ3RoIC0gMTtcblxuXHRcdHJldHVybiAoKSA9PiB0aGlzLnNhbml0aXplcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHR9LFxuXHRtYWtlICgpIHtcblx0XHRpZiAoIHRoaXMuaXNNYWtlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5pc01ha2VkICA9IHRydWU7XG5cdFx0bGV0IGN1cnJlbnQgICA9IHRoaXMuY3VycmVudDtcblx0XHRsZXQgcHJldlZhbHVlID0gbnVsbDtcblx0XHRjb25zdCBzZWxmICAgID0gdGhpcztcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgJ2N1cnJlbnQnLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0fSxcblx0XHRcdHNldCggbmV3VmFsICkge1xuXHRcdFx0XHRpZiAoIGN1cnJlbnQgPT09IG5ld1ZhbCApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJldlZhbHVlID0gY3VycmVudDtcblx0XHRcdFx0aWYgKCBzZWxmLmlzRGVidWcgKSB7XG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSwgbm8tZGVidWdnZXIgKi9cblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwKCAnUmVhY3RpdmVWYXIgaGFzIGNoYW5nZWQnICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICdjdXJyZW50OicsIGN1cnJlbnQgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ25ld1ZhbDonLCBuZXdWYWwgKTtcblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0XHRcdFx0ZGVidWdnZXI7XG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlLCBuby1kZWJ1Z2dlciAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnQgPSBzZWxmLmFwcGx5U2FuaXRpemVycyggbmV3VmFsICk7XG5cblx0XHRcdFx0aWYgKCBzZWxmLmlzU2lsZW5jZSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5ub3RpZnkoIHByZXZWYWx1ZSApO1xuXHRcdFx0fSxcblx0XHR9ICk7XG5cdH0sXG5cdG5vdGlmeSAoIHByZXZWYWx1ZSA9IG51bGwgKSB7XG5cdFx0dGhpcy5zaWduYWxzLmZvckVhY2goXG5cdFx0XHQoIHsgc2lnbmFsIH0gKSA9PiBzaWduYWwuY2FsbCggdGhpcywgcHJldlZhbHVlICkgKTtcblx0fSxcblx0YXBwbHlTYW5pdGl6ZXJzICggdmFsdWUgKSB7XG5cdFx0Zm9yICggY29uc3Qgc2FuaXRpemVyIG9mIHRoaXMuc2FuaXRpemVycyApIHtcblx0XHRcdHZhbHVlID0gc2FuaXRpemVyLmNhbGwoIHRoaXMsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRzZXRJZkVtcHR5KCBuZXdWYWx1ZSApIHtcblx0XHRpZiAoICFpc0VtcHR5KCB0aGlzLmN1cnJlbnQgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmN1cnJlbnQgPSBuZXdWYWx1ZTtcblx0fSxcblx0ZGVidWcoKSB7XG5cdFx0dGhpcy5pc0RlYnVnID0gIXRoaXMuaXNEZWJ1Zztcblx0fSxcblx0c2lsZW5jZSgpIHtcblx0XHR0aGlzLmlzU2lsZW5jZSA9ICF0aGlzLmlzU2lsZW5jZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlVmFyOyIsImltcG9ydCBSZXBvcnRpbmdJbnRlcmZhY2UgZnJvbSAnLi9SZXBvcnRpbmdJbnRlcmZhY2UnO1xuaW1wb3J0IHsgYWxsUmVqZWN0ZWQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQnJvd3NlclJlcG9ydGluZygpIHtcblx0UmVwb3J0aW5nSW50ZXJmYWNlLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHRoaXMucmVwb3J0UmF3ICAgPSBmdW5jdGlvbiAoKSB7XG5cdH07XG5cdHRoaXMucmVwb3J0Rmlyc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xuXG5cdFx0bm9kZS5yZXBvcnRWYWxpZGl0eSgpO1xuXHR9O1xuXG5cdHRoaXMuc2V0UmVzdHJpY3Rpb25zICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zKCB0aGlzLCBub2RlICk7XG5cdH07XG5cdHRoaXMuY2xlYXJSZXBvcnQgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBicm93c2VyIGF1dG9tYXRpY2FsbHkgaGlkZSB0b29sdGlwIG1lc3NhZ2VzXG5cdH07XG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbGlkYXRlKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcblx0fTtcblxuXHR0aGlzLmdldEVycm9yc1JhdyA9IGFzeW5jIGZ1bmN0aW9uICggcHJvbWlzZXMgKSB7XG5cdFx0Y29uc3QgZXJyb3JzICAgPSBhd2FpdCBhbGxSZWplY3RlZCggcHJvbWlzZXMgKTtcblx0XHR0aGlzLnZhbHVlUHJldiA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcblxuXHRcdHJldHVybiBlcnJvcnM7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcblx0fTtcblxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQuaGFzQXV0b1Njcm9sbCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5nZXROb2RlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0LmdldFJlcG9ydGluZ05vZGUoKTtcblx0fTtcbn1cblxuQnJvd3NlclJlcG9ydGluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEJyb3dzZXJSZXBvcnRpbmc7IiwiZnVuY3Rpb24gUmVwb3J0aW5nQ29udGV4dCggcm9vdCApIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0dGhpcy5yb290ID0gcm9vdDtcblxuXHR0aGlzLnJlcG9ydGVkRmlyc3QgPSBmYWxzZTtcblx0dGhpcy5zaWxlbmNlICAgICAgID0gdHJ1ZTtcblxufVxuXG5SZXBvcnRpbmdDb250ZXh0LnByb3RvdHlwZSA9IHtcblx0cmVzZXQoIHByb3BzID0ge30gKSB7XG5cdFx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gZmFsc2U7XG5cdFx0dGhpcy5zZXRTaWxlbmNlKCBwcm9wcz8uc2lsZW5jZSA/PyB0cnVlICk7XG5cdH0sXG5cdHJlcG9ydEZpcnN0KCkge1xuXHRcdHRoaXMucmVwb3J0ZWRGaXJzdCA9IHRydWU7XG5cdH0sXG5cdHNldFNpbGVuY2UoIHZhbHVlICkge1xuXHRcdHRoaXMuc2lsZW5jZSA9ICEhdmFsdWU7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRpbmdDb250ZXh0O1xuXG4iLCIvKipcbiAqIFZhbGlkYXRpb24gbG9naWM6IG9uIGNoYW5nZSBpbnB1dCB2YWx1ZSB3ZSBydW5cbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLnZhbGlkYXRlT25DaGFuZ2VcbiAqXG4gKiBJbiB0aGF0IGZ1bmN0aW9uIHdlIGNsZWFyIHN0b3JlZCBlcnJvcnNcbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLmVycm9yc1xuICogY2hlY2sgYWxsIHJlc3RyaWN0aW9ucyBhZ2FpbiBhbmQgc2F2ZSBlcnJvcnNcbiAqIHRvIHRoZSBzYW1lIHByb3BlcnR5LlxuICpcbiAqIFdoZW4gdXNlciB0cmllcyB0byBzdWJtaXQgZm9ybSB3ZSBydW5cbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLnZhbGlkYXRlXG4gKiBJZiB0aGVyZSB3YXMgc3RvcmVkIGVycm9ycyAtIGl0IHdpbGwgcmV0dXJuIHRoZW0uXG4gKiBPdGhlcndpc2Ugd2UgY2hlY2sgYWxsIGFuZCBzYXZlIGVycm9ycy5cbiAqXG4gKiBJbiB0aGUgY2FzZSB3aGVuIHdlIHJ1biB0aGUgdmFsaWRhdGlvbiB0aHJvdWdoIHRoZVxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UuaXNWYWxpZFxuICogV2UgXCJibG9jayB0aGUgZm9ybVwiIHRocm91Z2ggdGhlIFwidGVzdFwiIHByb3BlcnR5LlxuICogVGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgYW5kIHdoZW4gaXQgY2hhbmdlcyxcbiAqIHRoZSBzdGF0ZSBvZiB0aGUgYnV0dG9uIGZvciBzdWJtaXR0aW5nIHRoZSBmb3JtXG4gKiBhbmQgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBiZXR3ZWVuIHBhZ2VzIGNoYW5nZXMuXG4gKi9cbmltcG9ydCBSZXN0cmljdGlvbkVycm9yIGZyb20gJy4vUmVzdHJpY3Rpb25FcnJvcic7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5mdW5jdGlvbiBSZXBvcnRpbmdJbnRlcmZhY2UoKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5pbnB1dCA9IG51bGw7XG5cdHRoaXMuaXNSZXF1aXJlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogQHR5cGUge0FycmF5IHwgbnVsbH1cblx0ICovXG5cdHRoaXMuZXJyb3JzID0gbnVsbDtcblx0dGhpcy5yZXN0cmljdGlvbnMgPSBbXTtcblxuXHR0aGlzLnZhbHVlUHJldiAgICAgPSBudWxsO1xuXHR0aGlzLnZhbGlkaXR5U3RhdGUgPSBudWxsO1xuXHR0aGlzLnByb21pc2VzQ291bnQgPSAwO1xufVxuXG5SZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge1Jlc3RyaWN0aW9uW119XG5cdCAqL1xuXHRyZXN0cmljdGlvbnM6IFtdLFxuXHR2YWx1ZVByZXY6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR2YWxpZGl0eVN0YXRlOiBudWxsLFxuXHRwcm9taXNlc0NvdW50OiAwLFxuXHQvKipcblx0ICogUnVucyBvbiBjaGFuZ2luZyB2YWx1ZSBpbiB0aGUgZmllbGRcblx0ICogQHNlZSBJbnB1dERhdGEub25DaGFuZ2Vcblx0ICovXG5cdHZhbGlkYXRlT25DaGFuZ2UgKCkge1xuXHR9LFxuXHR2YWxpZGF0ZU9uQmx1ciAoKSB7XG5cdH0sXG5cdC8qKlxuXHQgKiBSdW5zIG9uIHRyeWluZyB0byBzdWJtaXQgZm9ybVxuXHQgKiBAc2VlIE9ic2VydmFibGUuaW5wdXRzQXJlVmFsaWRcblx0ICpcblx0ICogUnVucyBvbiBjaGFuZ2luZyB2YWx1ZSwgaWYgdGhpcyBmaWVsZCBpbnNpZGUgcGFnZVxuXHQgKiBAc2VlIElucHV0RGF0YS5zZXRQYWdlXG5cdCAqIEBzZWUgUGFnZVN0YXRlLnVwZGF0ZVN0YXRlXG5cdCAqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG5cdCAqL1xuXHRhc3luYyB2YWxpZGF0ZSAoKSB7XG5cdFx0Y29uc3QgZXJyb3JzID0gYXdhaXQgdGhpcy5nZXRFcnJvcnMoKTtcblxuXHRcdHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ID0gIUJvb2xlYW4oIGVycm9ycy5sZW5ndGggKTtcblxuXHRcdGlmICggIWVycm9ycy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLmNsZWFyUmVwb3J0KCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhdGhpcy5pbnB1dC5yb290LmdldENvbnRleHQoKS5zaWxlbmNlICYmIHRoaXMucmVwb3J0KCBlcnJvcnMgKTtcblxuXHRcdHRocm93IG5ldyBSZXN0cmljdGlvbkVycm9yKCBlcnJvcnNbIDAgXS5uYW1lICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gIHByb21pc2VzIHtGdW5jdGlvbltdfVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5IHwgbnVsbD59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0YXN5bmMgZ2V0RXJyb3JzUmF3ICggcHJvbWlzZXMgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0RXJyb3IgbXVzdCByZXR1cm4gYSBQcm9taXNlJyApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5IHwgKltdIHwgbnVsbD59XG5cdCAqL1xuXHRhc3luYyBnZXRFcnJvcnMgKCkge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuaW5wdXQubG9hZGluZy5jdXJyZW50IHx8XG5cdFx0XHR0aGlzLmlucHV0Py5jYWxsYWJsZT8ubG9jaz8uY3VycmVudCB8fFxuXHRcdFx0IXRoaXMuaW5wdXQuaXNWaXNpYmxlKClcblx0XHQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuZ2V0UHJvbWlzZXMoKTtcblxuXHRcdGlmIChcblx0XHRcdCF0aGlzLmhhc0NoYW5nZWRWYWx1ZSgpICYmXG5cdFx0XHR0aGlzLnByb21pc2VzQ291bnQgPT09IHByb21pc2VzLmxlbmd0aCAmJlxuXHRcdFx0IXRoaXMuaW5wdXQuc3RvcFZhbGlkYXRpb25cblx0XHQpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9ycyA/PyBbXTtcblx0XHR9XG5cblx0XHR0aGlzLnByb21pc2VzQ291bnQgPSBwcm9taXNlcy5sZW5ndGg7XG5cdFx0dGhpcy5lcnJvcnMgICAgICAgID0gW107XG5cblx0XHRpZiAoICFwcm9taXNlcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvcnM7XG5cdFx0fVxuXG5cdFx0dGhpcy5lcnJvcnMgPSBhd2FpdCB0aGlzLmdldEVycm9yc1JhdyggcHJvbWlzZXMgKTtcblxuXHRcdHJldHVybiB0aGlzLmVycm9ycztcblx0fSxcblx0cmVwb3J0ICggdmFsaWRhdGlvbkVycm9ycyApIHtcblx0XHRpZiAoIHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnJlcG9ydGVkRmlyc3QgKSB7XG5cdFx0XHR0aGlzLnJlcG9ydFJhdyggdmFsaWRhdGlvbkVycm9ycyApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkucmVwb3J0Rmlyc3QoKTtcblxuXHRcdHRoaXMucmVwb3J0Rmlyc3QoIHZhbGlkYXRpb25FcnJvcnMgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSB2YWxpZGF0aW9uRXJyb3JzIHtSZXN0cmljdGlvbltdfVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdHJlcG9ydFJhdyAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAncmVwb3J0IGlzIGVtcHR5JyApO1xuXHR9LFxuXHRyZXBvcnRGaXJzdCAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0dGhpcy5yZXBvcnQoIHZhbGlkYXRpb25FcnJvcnMgKTtcblx0fSxcblx0Y2xlYXJSZXBvcnQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ2NsZWFyUmVwb3J0IGlzIGVtcHR5JyApO1xuXHR9LFxuXHRnZXRQcm9taXNlcyAoKSB7XG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHRoaXMucmVzdHJpY3Rpb25zICkge1xuXHRcdFx0aWYgKCAhdGhpcy5jYW5Qcm9jZXNzUmVzdHJpY3Rpb24oIHJlc3RyaWN0aW9uICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5iZWZvcmVQcm9jZXNzUmVzdHJpY3Rpb24oIHJlc3RyaWN0aW9uICk7XG5cblx0XHRcdHByb21pc2VzLnB1c2goICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0XHRyZXN0cmljdGlvbi52YWxpZGF0ZVByb21pc2UoKS5cblx0XHRcdFx0XHR0aGVuKCAoKSA9PiByZXNvbHZlKCByZXN0cmljdGlvbiApICkuXG5cdFx0XHRcdFx0Y2F0Y2goIGVycm9yID0+IHJlamVjdCggWyByZXN0cmljdGlvbiwgZXJyb3IgXSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICByZXN0cmljdGlvbiB7UmVzdHJpY3Rpb259XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0Y2FuUHJvY2Vzc1Jlc3RyaWN0aW9uICggcmVzdHJpY3Rpb24gKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSByZXN0cmljdGlvbiB7UmVzdHJpY3Rpb259XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0YmVmb3JlUHJvY2Vzc1Jlc3RyaWN0aW9uICggcmVzdHJpY3Rpb24gKSB7XG5cdH0sXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcblx0LyoqXG5cdCAqIEBwYXJhbSAgbm9kZSAge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIGlucHV0ICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ2lzU3VwcG9ydGVkIGlzIGVtcHR5JyApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqL1xuXHRzZXRJbnB1dCAoIGlucHV0ICkge1xuXHRcdHRoaXMudmFsaWRpdHlTdGF0ZSA9IG5ldyBSZWFjdGl2ZVZhcigpO1xuXHRcdHRoaXMudmFsaWRpdHlTdGF0ZS5tYWtlKCk7XG5cblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XG5cdFx0dGhpcy5zZXRSZXN0cmljdGlvbnMoKTtcblx0XHR0aGlzLmZpbHRlclJlc3RyaWN0aW9ucygpO1xuXHR9LFxuXHRzZXRSZXN0cmljdGlvbnMgKCkge1xuXHR9LFxuXHQvKipcblx0ICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudHxIVE1MRWxlbWVudH1cblx0ICovXG5cdGdldE5vZGUgKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0Lm5vZGVzWyAwIF07XG5cdH0sXG5cblx0aGFzQ2hhbmdlZFZhbHVlICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVByZXYgIT09IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcblx0fSxcblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Kj59XG5cdCAqL1xuXHRjaGVja1ZhbGlkaXR5ICgpIHtcblx0XHRjb25zdCBpc1NpbGVuY2UgPSB0aGlzLmlucHV0LmdldENvbnRleHQoKS5zaWxlbmNlO1xuXG5cdFx0aWYgKCBudWxsID09PSB0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSgpO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblxuXHRcdGlmICggaXNTaWxlbmNlICkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCFpc1NpbGVuY2UgJiYgdGhpcy5yZXBvcnQoIHRoaXMuZXJyb3JzIHx8IFtdICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aGFzQXV0b1Njcm9sbCAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHQvKipcblx0ICogV2l0aCB0aGUgaGVscCBvZiBmaWx0ZXJzIHRoYXQgYWRkIG5ldyByZXN0cmljdGlvbnMsXG5cdCAqIHlvdSBjYW4gb3ZlcndyaXRlIGEgcGFydGljdWxhciByZXN0cmljdGlvblxuXHQgKiBpZiB0aGUgXCJ0eXBlXCIgcHJvcGVydHkgaXMgZGVmaW5lZCBpbiBpdFxuXHQgKi9cblx0ZmlsdGVyUmVzdHJpY3Rpb25zICgpIHtcblx0XHRjb25zdCBtYXAgPSB7fTtcblxuXHRcdGZvciAoIGxldCBbIGluZGV4LCByZXN0cmljdGlvbiBdIG9mIE9iamVjdC5lbnRyaWVzKFxuXHRcdFx0dGhpcy5yZXN0cmljdGlvbnMgKSApIHtcblx0XHRcdGluZGV4ID0gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpID8gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpIDogaW5kZXg7XG5cblx0XHRcdG1hcFsgaW5kZXggXSA9IHJlc3RyaWN0aW9uO1xuXHRcdH1cblxuXHRcdHRoaXMucmVzdHJpY3Rpb25zID0gT2JqZWN0LnZhbHVlcyggbWFwICk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRpbmdJbnRlcmZhY2U7IiwiZnVuY3Rpb24gUmVzdHJpY3Rpb25FcnJvciggbWVzc2FnZSApIHtcblx0RXJyb3IuY2FsbCggdGhpcywgbWVzc2FnZSApO1xuXG5cdGlmICggRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgKSB7XG5cdFx0RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoIHRoaXMsIFJlc3RyaWN0aW9uRXJyb3IgKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLnN0YWNrID0gKFxuXHRcdFx0bmV3IEVycm9yKClcblx0XHQpLnN0YWNrO1xuXHR9XG59XG5cblJlc3RyaWN0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXJyb3IucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RyaWN0aW9uRXJyb3I7IiwiLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKi9cbmltcG9ydCBCcm93c2VyUmVwb3J0aW5nIGZyb20gJy4vQnJvd3NlclJlcG9ydGluZyc7XG5pbXBvcnQgeyBhbGxSZWplY3RlZCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgSW5wdXREYXRhIGZyb20gJy4uL2lucHV0cy9JbnB1dERhdGEnO1xuaW1wb3J0IE5hdGl2ZVJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL05hdGl2ZVJlc3RyaWN0aW9uJztcbmltcG9ydCBSZXF1aXJlZFJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL1JlcXVpcmVkUmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRSZXBvcnRUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5yZXBvcnRpbmcnLFxuXHRbXG5cdFx0QnJvd3NlclJlcG9ydGluZyxcblx0XSxcbik7XG5cbmxldCByZXBvcnRUeXBlcyA9IFtdO1xuXG5jb25zdCBnZXREZWZhdWx0UmVzdHJpY3Rpb25zID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5kZWZhdWx0Jyxcblx0W1xuXHRcdE5hdGl2ZVJlc3RyaWN0aW9uLFxuXHRcdFJlcXVpcmVkUmVzdHJpY3Rpb24sXG5cdF0sXG4pO1xuXG5sZXQgZGVmYXVsdFJlc3RyaWN0aW9ucyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgcmVwb3J0aW5nIHtCcm93c2VyUmVwb3J0aW5nfVxuICogQHBhcmFtICBub2RlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zKCByZXBvcnRpbmcsIG5vZGUgKSB7XG5cdGlmICggIWRlZmF1bHRSZXN0cmljdGlvbnMubGVuZ3RoICkge1xuXHRcdGRlZmF1bHRSZXN0cmljdGlvbnMgPSBnZXREZWZhdWx0UmVzdHJpY3Rpb25zKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCByZXN0cmljdGlvbiBvZiBkZWZhdWx0UmVzdHJpY3Rpb25zICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVzdHJpY3Rpb24oKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUsIHJlcG9ydGluZyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5wdXNoKCBjdXJyZW50ICk7XG5cdH1cblxuXHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLmZvckVhY2goIGl0ZW0gPT4gaXRlbS5zZXRSZXBvcnRpbmcoIHJlcG9ydGluZyApICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuICogQHJldHVybiB7QWR2YW5jZWRSZXBvcnRpbmd8QnJvd3NlclJlcG9ydGluZ31cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVwb3J0KCBpbnB1dCApIHtcblx0aWYgKCAhcmVwb3J0VHlwZXMubGVuZ3RoICkge1xuXHRcdHJlcG9ydFR5cGVzID0gZ2V0UmVwb3J0VHlwZXMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHJlcG9ydFR5cGUgb2YgcmVwb3J0VHlwZXMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXBvcnRUeXBlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBpbnB1dC5ub2Rlc1sgMCBdLCBpbnB1dCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGN1cnJlbnQuc2V0SW5wdXQoIGlucHV0ICk7XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvciggJ1NvbWV0aGluZyB3ZW50IHdyb25nJyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gIHNpbGVuY2Uge0Jvb2xlYW59XG4gKlxuICogQHJldHVybiB7RnVuY3Rpb25bXX1cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xuXHRjb25zdCBjYWxsYmFja3MgPSBbXTtcblxuXHRpbnB1dHM/LlsgMCBdPy5nZXRDb250ZXh0KCk/LnJlc2V0KCB7IHNpbGVuY2UgfSApO1xuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcblx0XHRpZiAoICEoXG5cdFx0XHRpbnB1dCBpbnN0YW5jZW9mIElucHV0RGF0YVxuXHRcdCkgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdJbnB1dCBpcyBub3QgaW5zdGFuY2Ugb2YgSW5wdXREYXRhJyApO1xuXHRcdH1cblx0XHRjYWxsYmFja3MucHVzaChcblx0XHRcdCggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0XHRpbnB1dC5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZVN0YXRlKCkuXG5cdFx0XHRcdFx0dGhlbiggcmVzb2x2ZSApLlxuXHRcdFx0XHRcdGNhdGNoKCByZWplY3QgKTtcblx0XHRcdH0sXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiBjYWxsYmFja3M7XG59XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dHMgIHtJbnB1dERhdGFbXX1cbiAqIEBwYXJhbSAgc2lsZW5jZSB7Qm9vbGVhbn1cbiAqIEByZXR1cm4ge1Byb21pc2U8dW5rbm93bltdPn1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dHMoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0Z2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSApLm1hcChcblx0XHRcdGN1cnJlbnQgPT4gbmV3IFByb21pc2UoIGN1cnJlbnQgKSxcblx0XHQpLFxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbnB1dHMgIHtJbnB1dERhdGFbXX1cbiAqIEBwYXJhbSBzaWxlbmNlIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0c0FsbCggaW5wdXRzLCBzaWxlbmNlID0gZmFsc2UgKSB7XG5cdHJldHVybiBhbGxSZWplY3RlZCggZ2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSApICk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVJlcG9ydCxcblx0dmFsaWRhdGVJbnB1dHMsXG5cdHZhbGlkYXRlSW5wdXRzQWxsLFxuXHRjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zLFxuXHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyxcbn07IiwiaW1wb3J0IFJlc3RyaWN0aW9uIGZyb20gJy4vUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBOYXRpdmVSZXN0cmljdGlvbigpIHtcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuICEhbm9kZS5jaGVja1ZhbGlkaXR5O1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBub2RlcyB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQ7XG5cblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIG5vZGVzICkge1xuXHRcdFx0aWYgKCBub2RlLmNoZWNrVmFsaWRpdHkoKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5OYXRpdmVSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF0aXZlUmVzdHJpY3Rpb247IiwiaW1wb3J0IFJlc3RyaWN0aW9uIGZyb20gJy4vUmVzdHJpY3Rpb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFJlcXVpcmVkUmVzdHJpY3Rpb24oKSB7XG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLnR5cGUgPSAncmVxdWlyZWQnO1xufVxuXG5SZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5SZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRyZXR1cm4gcmVwb3J0aW5nLmlucHV0LmlzUmVxdWlyZWQ7XG59O1xuXG5SZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZTtcblxuXHRyZXR1cm4gIWlzRW1wdHkoIGN1cnJlbnQgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkUmVzdHJpY3Rpb247IiwiZnVuY3Rpb24gUmVzdHJpY3Rpb24oKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuXHQgKi9cblx0dGhpcy5yZXBvcnRpbmcgPSBudWxsO1xuXHQvKipcblx0ICogWW91IGNhbiBvdmVycmlkZSB0aGlzIHByb3BlcnR5XG5cdCAqIGlmIHlvdSB3YW50IHRvIG1ha2UgdGhpcyBSZXN0cmljdGlvbiBvdmVycmlkYWJsZVxuXHQgKlxuXHQgKiBAc2luY2UgMy4xLjBcblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdHRoaXMudHlwZSA9ICcnO1xufVxuXG5SZXN0cmljdGlvbi5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAgICAgIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxuXHQgKiBAcGFyYW0gcmVwb3J0aW5nIHtSZXBvcnRpbmdJbnRlcmZhY2V9XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0aXNTdXBwb3J0ZWQgKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4xLjBcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0VHlwZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cblx0ICovXG5cdHNldFJlcG9ydGluZyAoIHJlcG9ydGluZyApIHtcblx0XHR0aGlzLnJlcG9ydGluZyA9IHJlcG9ydGluZztcblx0fSxcblx0Z2V0VmFsdWUgKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXHR9LFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1yZXR1cm5zLWNoZWNrXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0dmFsaWRhdGUgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ3ZhbGlkYXRlIGlzIHdyb25nJyApO1xuXHR9LFxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTwqPn1cblx0ICovXG5cdGFzeW5jIHZhbGlkYXRlUHJvbWlzZSAoKSB7XG5cdFx0bGV0IHZhbGlkYXRpb25SZXN1bHQ7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcblx0XHR9XG5cdFx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggZXJyb3I/Lm1lc3NhZ2UgPz8gZXJyb3IgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsaWRhdGlvblJlc3VsdFxuXHRcdCAgICAgICA/IFByb21pc2UucmVzb2x2ZSgpXG5cdFx0ICAgICAgIDogUHJvbWlzZS5yZWplY3QoICd2YWxpZGF0ZSBpcyB3cm9uZycgKTtcblx0fSxcblx0b25SZWFkeSgpIHtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RyaWN0aW9uOyIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmNvbnN0IHsgc3RyaWN0X21vZGUgPSBmYWxzZSB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG5jb25zdCBTVFJJQ1RfTU9ERSA9IEJvb2xlYW4oIHN0cmljdF9tb2RlICk7XG5cbmZ1bmN0aW9uIEJhc2VTaWduYWwoKSB7XG5cdHRoaXMuaW5wdXQgPSBudWxsO1xuXHR0aGlzLmxvY2sgID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMubG9jay5tYWtlKCk7XG5cblx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gIVNUUklDVF9NT0RFO1xufVxuXG5CYXNlU2lnbmFsLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRpbnB1dDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdGxvY2s6IG51bGwsXG5cdC8qKlxuXHQgKiBAcGFyYW0gIG5vZGUgICAgICB7SFRNTEVsZW1lbnR9XG5cdCAqIEBwYXJhbSAgaW5wdXREYXRhIHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0aXNTdXBwb3J0ZWQgKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRzZXRJbnB1dCAoIGlucHV0ICkge1xuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0fSxcblx0cnVuICggcHJldlZhbHVlICkge1xuXHRcdGlmICggIXRoaXMubG9jay5jdXJyZW50ICkge1xuXHRcdFx0dGhpcy5ydW5TaWduYWwoIHByZXZWYWx1ZSApO1xuXHRcdFx0dGhpcy51bmxvY2tUcmlnZ2VyKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICF0aGlzLmxvY2suc2lnbmFscy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLmxvY2sud2F0Y2hPbmNlKCAoKSA9PiB0aGlzLnJ1blNpZ25hbCggcHJldlZhbHVlICkgKTtcblx0XHR9XG5cdH0sXG5cdHRyaWdnZXJKUXVlcnkoIG5vZGUgKSB7XG5cdFx0aWYgKCAhdGhpcy50cmlnZ2VyalF1ZXJ5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRqUXVlcnkoIG5vZGUgKS50cmlnZ2VyKCAnY2hhbmdlJyApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIHByZXZWYWx1ZVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0cnVuU2lnbmFsICggcHJldlZhbHVlICkge1xuXHRcdC8vIHlvdXIgY29kZVxuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqL1xuXHRsb2NrVHJpZ2dlciAoKSB7XG5cdFx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gZmFsc2U7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdHVubG9ja1RyaWdnZXIgKCkge1xuXHRcdGlmICggU1RSSUNUX01PREUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcmpRdWVyeSA9IHRydWU7XG5cdH0sXG59O1xuXG5leHBvcnQgeyBTVFJJQ1RfTU9ERSB9O1xuZXhwb3J0IGRlZmF1bHQgQmFzZVNpZ25hbDsiLCJpbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL0Jhc2VTaWduYWwnO1xuaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIFNpZ25hbEhpZGRlbkFycmF5KCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcbn1cblxuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdHJldHVybiBpc0hpZGRlbiggbm9kZSApICYmIGlucHV0RGF0YS5pc0FycmF5KCk7XG59O1xuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cblx0aWYgKCAhY3VycmVudD8ubGVuZ3RoICkge1xuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5pbnB1dC5ub2RlcyApIHtcblx0XHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dC5ub2Rlcy5zcGxpY2UoIDAsIHRoaXMuaW5wdXQubm9kZXMubGVuZ3RoICk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2F2ZU5vZGVzID0gW107XG5cblx0Zm9yICggY29uc3QgdmFsdWUgb2YgY3VycmVudCApIHtcblx0XHRjb25zdCBoYXNOb2RlV2l0aFNhbWVWYWx1ZSA9IHRoaXMuaW5wdXQubm9kZXMuc29tZShcblx0XHRcdCggbm9kZSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdGlmICggbm9kZS52YWx1ZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNhdmVOb2Rlcy5wdXNoKCBpbmRleCApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gKTtcblxuXHRcdGlmICggaGFzTm9kZVdpdGhTYW1lVmFsdWUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2lucHV0JyApO1xuXHRcdG5ld0VsZW1lbnQudHlwZSAgPSAnaGlkZGVuJztcblx0XHRuZXdFbGVtZW50LnZhbHVlID0gdmFsdWU7XG5cdFx0bmV3RWxlbWVudC5uYW1lICA9IHRoaXMuaW5wdXQucmF3TmFtZTtcblxuXHRcdHRoaXMuaW5wdXQubm9kZXMucHVzaCggbmV3RWxlbWVudCApO1xuXHRcdHNhdmVOb2Rlcy5wdXNoKCB0aGlzLmlucHV0Lm5vZGVzLmxlbmd0aCAtIDEgKTtcblxuXHRcdHRoaXMuaW5wdXQuY29tbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcblx0XHRcdG5ld0VsZW1lbnQsXG5cdFx0XHR0aGlzLmlucHV0LmNvbW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLFxuXHRcdCk7XG5cdH1cblxuXHR0aGlzLmlucHV0Lm5vZGVzID0gdGhpcy5pbnB1dC5ub2Rlcy5maWx0ZXIoICggbm9kZSwgaW5kZXggKSA9PiB7XG5cdFx0aWYgKCBzYXZlTm9kZXMuaW5jbHVkZXMoIGluZGV4ICkgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0bm9kZS5yZW1vdmUoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbEhpZGRlbkFycmF5OyIsImltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vQmFzZVNpZ25hbCc7XG5pbXBvcnQgeyBpc1JhbmdlIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmFuZ2VEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKi9cbmZ1bmN0aW9uIFNpZ25hbFJhbmdlKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JhbmdlKCBub2RlICk7XG5cdH07XG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXHRcdG5vZGUudmFsdWUgICAgID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50O1xuXG5cdFx0dGhpcy5pbnB1dC5udW1iZXJOb2RlLnRleHRDb250ZW50ID0gbm9kZS52YWx1ZTtcblxuXHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xuXHR9O1xufVxuXG5TaWduYWxSYW5nZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSYW5nZTsiLCJpbXBvcnQgU2lnbmFsSGlkZGVuQXJyYXkgZnJvbSAnLi9TaWduYWxIaWRkZW5BcnJheSc7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZW5kZXJTdGF0ZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBTaWduYWxSZW5kZXJTdGF0ZSgpIHtcblx0U2lnbmFsSGlkZGVuQXJyYXkuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlc1tdJyA9PT0gbm9kZS5uYW1lO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XG5cdFx0U2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLnJ1blNpZ25hbC5jYWxsKCB0aGlzLCBwcmV2VmFsdWUgKTtcblxuXHRcdGNvbnN0IHVybCAgICAgPSBuZXcgVVJMKCB3aW5kb3cubG9jYXRpb24gKTtcblx0XHRjb25zdCBmb3JtSWQgID0gdGhpcy5pbnB1dC5nZXRTdWJtaXQoKS5nZXRGb3JtSWQoKTtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdO1xuXHRcdGNvbnN0IHBhcmFtICAgPSBgamZiWyR7IGZvcm1JZCB9XVtzdGF0ZV1gO1xuXHRcdGNvbnN0IHN0YXRlcyAgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IHN0YXRlU2x1ZyBvZiBjdXJyZW50ICkge1xuXHRcdFx0aWYgKCAhdGhpcy5pbnB1dC5pc0N1c3RvbSggc3RhdGVTbHVnICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGF0ZXMucHVzaCggc3RhdGVTbHVnICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhc3RhdGVzLmxlbmd0aCApIHtcblx0XHRcdGlmICggIXVybC5zZWFyY2hQYXJhbXMuaGFzKCBwYXJhbSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCBwYXJhbSApO1xuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7fSwgJycsIHVybC50b1N0cmluZygpICk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJhbVZhbHVlID0gc3RhdGVzLmpvaW4oICcsJyApO1xuXHRcdGlmICggdXJsLnNlYXJjaFBhcmFtcy5nZXQoIHBhcmFtICkgPT09IHBhcmFtVmFsdWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoIHBhcmFtLCBwYXJhbVZhbHVlICk7XG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7fSwgJycsIHVybC50b1N0cmluZygpICk7XG5cdH07XG59XG5cblNpZ25hbFJlbmRlclN0YXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSZW5kZXJTdGF0ZTsiLCJpbXBvcnQgU2lnbmFsSGlkZGVuQXJyYXkgZnJvbSAnLi9TaWduYWxIaWRkZW5BcnJheSc7XG5pbXBvcnQgU2lnbmFsUmFuZ2UgZnJvbSAnLi9TaWduYWxSYW5nZSc7XG5pbXBvcnQgU2lnbmFsUmVuZGVyU3RhdGUgZnJvbSAnLi9TaWduYWxSZW5kZXJTdGF0ZSc7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFNpZ25hbFR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHRbXG5cdFx0U2lnbmFsUmFuZ2UsXG5cdFx0U2lnbmFsUmVuZGVyU3RhdGUsXG5cdFx0U2lnbmFsSGlkZGVuQXJyYXksXG5cdF0sXG4pO1xuXG4vKipcbiAqIEB0eXBlIHsoQmFzZVNpZ25hbClbXX1cbiAqL1xubGV0IHNpZ25hbFR5cGVzID0gW107XG5cbi8qKlxuICogQHBhcmFtICBub2RlICB7SFRNTEVsZW1lbnR9XG4gKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG4gKiBAcmV0dXJuIHtCYXNlU2lnbmFsfVxuICovXG5mdW5jdGlvbiBnZXRTaWduYWwoIG5vZGUsIGlucHV0ICkge1xuXHRpZiAoICFzaWduYWxUeXBlcy5sZW5ndGggKSB7XG5cdFx0c2lnbmFsVHlwZXMgPSBnZXRTaWduYWxUeXBlcygpO1xuXHR9XG5cblx0Zm9yICggY29uc3Qgc2lnbmFsVHlwZSBvZiBzaWduYWxUeXBlcyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHNpZ25hbFR5cGUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUsIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgeyBnZXRTaWduYWwgfTsiLCJpbXBvcnQgQmFzZVN1Ym1pdCBmcm9tICcuL0Jhc2VTdWJtaXQnO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcbmltcG9ydCB7IGlzU3VjY2Vzc1N0YXR1cyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIEFqYXhTdWJtaXQoIGZvcm0gKSB7XG5cdEJhc2VTdWJtaXQuY2FsbCggdGhpcywgZm9ybSApO1xuXG5cdHRoaXMuc3RhdHVzID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdHRoaXMuc3RhdHVzLm1ha2UoKTtcblxuXHR0aGlzLnN1Ym1pdCAgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgJGZvcm0gICAgICAgICAgICA9IGpRdWVyeSggdGhpcy5mb3JtLm9ic2VydmFibGUucm9vdE5vZGUgKTtcblx0XHRjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuXHRcdFByb21pc2UuYWxsKFxuXHRcdFx0YXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5hamF4LnByb21pc2VzJyxcblx0XHRcdFx0dGhpcy5nZXRQcm9taXNlcygpLFxuXHRcdFx0XHQkZm9ybSxcblx0XHRcdCksXG5cdFx0KS50aGVuKFxuXHRcdFx0Y2FsbGJhY2tzID0+IHRoaXMucnVuU3VibWl0KCBjYWxsYmFja3MgKSxcblx0XHQpLmNhdGNoKFxuXHRcdFx0KCkgPT4gdGhpcy5mb3JtLnRvZ2dsZSgpLFxuXHRcdCk7XG5cdH07XG5cdHRoaXMucnVuU3VibWl0ICAgICA9IGZ1bmN0aW9uICggY2FsbGJhY2tzICkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoIHJvb3ROb2RlICk7XG5cdFx0Zm9ybURhdGEuYXBwZW5kKFxuXHRcdFx0J19qZXRfZW5naW5lX2Jvb2tpbmdfZm9ybV9pZCcsXG5cdFx0XHR0aGlzLmZvcm0uZ2V0Rm9ybUlkKCksXG5cdFx0KTtcblxuXHRcdC8vIGRpc2FibGUgd2F0Y2hlcnNcblx0XHR0aGlzLnN0YXR1cy5zaWxlbmNlKCk7XG5cblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gbnVsbDtcblxuXHRcdC8vIGVuYWJsZSB3YXRjaGVyc1xuXHRcdHRoaXMuc3RhdHVzLnNpbGVuY2UoKTtcblxuXHRcdGpRdWVyeS5hamF4KCB7XG5cdFx0XHR1cmw6IEpldEZvcm1CdWlsZGVyU2V0dGluZ3MuYWpheHVybCxcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRkYXRhOiBmb3JtRGF0YSxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHRcdGNvbnRlbnRUeXBlOiBmYWxzZSxcblx0XHRcdHByb2Nlc3NEYXRhOiBmYWxzZSxcblx0XHR9ICkuZG9uZShcblx0XHRcdHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MoIHJlc3BvbnNlICk7XG5cdFx0XHRcdGNvbnN0ICRmb3JtID0galF1ZXJ5KCByb290Tm9kZSApO1xuXG5cdFx0XHRcdGNhbGxiYWNrcy5mb3JFYWNoKCBjYiA9PiB7XG5cdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2IgKSB7XG5cdFx0XHRcdFx0XHRjYi5jYWxsKCAkZm9ybSwgcmVzcG9uc2UgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0sXG5cdFx0KS5mYWlsKFxuXHRcdFx0dGhpcy5vbkZhaWwuYmluZCggdGhpcyApLFxuXHRcdCk7XG5cdH07XG5cdHRoaXMub25TdWNjZXNzICAgICA9IGZ1bmN0aW9uICggcmVzcG9uc2UgKSB7XG5cdFx0dGhpcy5mb3JtLnRvZ2dsZSgpO1xuXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cblx0XHR0aGlzLmxhc3RSZXNwb25zZSA9IHJlc3BvbnNlO1xuXHRcdGNvbnN0ICRmb3JtICAgICAgID0galF1ZXJ5KCByb290Tm9kZSApO1xuXG5cdFx0c3dpdGNoICggcmVzcG9uc2Uuc3RhdHVzICkge1xuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XG5cdFx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2FqYXgvb24tc3VjY2VzcycsXG5cdFx0XHRcdFx0WyByZXNwb25zZSwgJGZvcm0gXSxcblx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJ1biBzdGF0dXMgd2F0Y2hlcnNcblx0XHQgKi9cblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gcmVzcG9uc2Uuc3RhdHVzO1xuXG5cdFx0aWYgKCByZXNwb25zZS5yZWRpcmVjdCApIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHJlc3BvbnNlLnJlZGlyZWN0O1xuXHRcdH1cblx0XHRlbHNlIGlmICggcmVzcG9uc2UucmVsb2FkICkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5zZXJ0TWVzc2FnZSggcmVzcG9uc2UubWVzc2FnZSApO1xuXHR9O1xuXHR0aGlzLm9uRmFpbCAgICAgICAgPSBmdW5jdGlvbiAoIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHtcblx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IGZhbHNlO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmVycm9yKCBqcVhIUi5yZXNwb25zZVRleHQsIGVycm9yVGhyb3duICk7XG5cdH07XG5cdHRoaXMuaW5zZXJ0TWVzc2FnZSA9IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggJ2pldC1mb3JtLWJ1aWxkZXItbWVzc2FnZXMtd3JhcCcgKTtcblx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cblx0XHRyb290Tm9kZS5hcHBlbmRDaGlsZCggbm9kZSApO1xuXHR9O1xufVxuXG5BamF4U3VibWl0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTdWJtaXQucHJvdG90eXBlICk7XG4vKipcbiAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cbiAqL1xuQWpheFN1Ym1pdC5wcm90b3R5cGUuc3RhdHVzID0gbnVsbDtcblxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hSZXNldCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdGlmICggIXJvb3ROb2RlLmRhdGFzZXQ/LmNsZWFyICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMud2F0Y2hTdWNjZXNzKCBjYWxsYWJsZSApO1xufTtcblxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hTdWNjZXNzID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0Y29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXM7XG5cblx0c3RhdHVzLndhdGNoKCAoKSA9PiB7XG5cdFx0aWYgKCBpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cy5jdXJyZW50ICkgKSB7XG5cdFx0XHRjYWxsYWJsZSgpO1xuXHRcdH1cblx0fSApO1xufTtcblxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hGYWlsID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0Y29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXM7XG5cblx0c3RhdHVzLndhdGNoKCAoKSA9PiB7XG5cdFx0aWYgKCAhaXNTdWNjZXNzU3RhdHVzKCBzdGF0dXMuY3VycmVudCApICkge1xuXHRcdFx0Y2FsbGFibGUoKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFqYXhTdWJtaXQ7IiwiLyoqXG4gKiBAcGFyYW0gZm9ybSB7Rm9ybVN1Ym1pdH1cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBCYXNlU3VibWl0KCBmb3JtICkge1xuXHR0aGlzLmZvcm0gICAgICAgICA9IGZvcm07XG5cdHRoaXMubGFzdFJlc3BvbnNlID0ge307XG5cdHRoaXMucHJvbWlzZXMgICAgID0gW107XG59XG5cbkJhc2VTdWJtaXQucHJvdG90eXBlLnN1Ym1pdCAgICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXBsYWNlIHRoaXMgY2FsbGJhY2snICk7XG59O1xuQmFzZVN1Ym1pdC5wcm90b3R5cGUuZ2V0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnByb21pc2VzLm1hcCggKCB7IGNhbGxhYmxlIH0gKSA9PiBuZXcgUHJvbWlzZSggY2FsbGFibGUgKSApO1xufTtcbi8qKlxuICogQHBhcmFtIGNhbGxhYmxlICAgICB7RnVuY3Rpb259XG4gKiBAcGFyYW0gaW5wdXRDb250ZXh0IHtJbnB1dERhdGF8Qm9vbGVhbn1cbiAqL1xuQmFzZVN1Ym1pdC5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uICggY2FsbGFibGUsIGlucHV0Q29udGV4dCA9IGZhbHNlICkge1xuXHRjb25zdCBwYXRoU3RyID0gaW5wdXRDb250ZXh0ID8gaW5wdXRDb250ZXh0LnBhdGguam9pbiggJy4nICkgOiAnJztcblxuXHR0aGlzLnByb21pc2VzID0gdGhpcy5wcm9taXNlcy5maWx0ZXIoXG5cdFx0KCB7IGlkUGF0aCB9ICkgPT4gIWlkUGF0aCB8fCBpZFBhdGggIT09IHBhdGhTdHIsXG5cdCk7XG5cblx0dGhpcy5wcm9taXNlcy5wdXNoKCB7XG5cdFx0Y2FsbGFibGUsXG5cdFx0aWRQYXRoOiBpbnB1dENvbnRleHQgPyBpbnB1dENvbnRleHQucGF0aC5qb2luKCAnLicgKSA6ICcnLFxuXHR9ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlU3VibWl0OyIsImltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcbmltcG9ydCBBamF4U3VibWl0IGZyb20gJy4vQWpheFN1Ym1pdCc7XG5pbXBvcnQgUmVsb2FkU3VibWl0IGZyb20gJy4vUmVsb2FkU3VibWl0JztcbmltcG9ydCB7IGZvY3VzT25JbnZhbGlkSW5wdXQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgcG9wdWxhdGVJbnB1dHMgfSBmcm9tICcuLi9pbnB1dHMvZnVuY3Rpb25zJztcblxuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqIEBjbGFzc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRm9ybVN1Ym1pdCggb2JzZXJ2YWJsZSApIHtcblxuXHR0aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuXHR0aGlzLmxvY2tTdGF0ZSAgPSBuZXcgTG9hZGluZ1JlYWN0aXZlVmFyKCBmYWxzZSApO1xuXHR0aGlzLmxvY2tTdGF0ZS5tYWtlKCk7XG5cdHRoaXMuYXV0b0ZvY3VzID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmF1dG9fZm9jdXM7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBldmVudCB7RXZlbnR9XG5cdCAqL1xuXHR0aGlzLm9uU3VibWl0ID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dGhpcy5zdWJtaXQoKTtcblx0fTtcblxuXHR0aGlzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLm9ic2VydmFibGUuaW5wdXRzQXJlVmFsaWQoKS50aGVuKCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNsZWFyRXJyb3JzKCk7XG5cdFx0XHR0aGlzLnRvZ2dsZSgpO1xuXG5cdFx0XHR0aGlzLnN1Ym1pdHRlci5zdWJtaXQoKTtcblx0XHR9ICkuY2F0Y2goICgpID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdHRoaXMuYXV0b0ZvY3VzICYmIGZvY3VzT25JbnZhbGlkSW5wdXQoXG5cdFx0XHRcdHBvcHVsYXRlSW5wdXRzKCB0aGlzLm9ic2VydmFibGUuZ2V0SW5wdXRzKCkgKSxcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdHRoaXMuY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcyApIHtcblx0XHRcdG1lc3NhZ2UucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubG9ja1N0YXRlLnRvZ2dsZSgpO1xuXHRcdHRoaXMudG9nZ2xlTG9hZGluZygpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5oYW5kbGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fVxuXHRcdCAqL1xuXHRcdGNvbnN0IGJ1dHRvbnMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fc3VibWl0Jyxcblx0XHQpO1xuXG5cdFx0dGhpcy5sb2NrU3RhdGUud2F0Y2goICgpID0+IHtcblx0XHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zICkge1xuXHRcdFx0XHRidXR0b24uZGlzYWJsZWQgPSB0aGlzLmxvY2tTdGF0ZS5jdXJyZW50O1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHR0aGlzLnRvZ2dsZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLmNsYXNzTGlzdC50b2dnbGUoICdpcy1sb2FkaW5nJyApO1xuXHR9O1xuXG5cdHRoaXMuY3JlYXRlU3VibWl0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgY2xhc3NMaXN0IH0gPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGU7XG5cdFx0Y29uc3QgaXNBamF4ICAgICAgICA9IGNsYXNzTGlzdC5jb250YWlucyggJ3N1Ym1pdC10eXBlLWFqYXgnICk7XG5cblx0XHRyZXR1cm4gaXNBamF4ID8gbmV3IEFqYXhTdWJtaXQoIHRoaXMgKSA6IG5ldyBSZWxvYWRTdWJtaXQoIHRoaXMgKTtcblx0fTtcblxuXHR0aGlzLmdldEZvcm1JZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLm9ic2VydmFibGU7XG5cblx0XHRyZXR1cm4gK3Jvb3ROb2RlLmRhdGFzZXQuZm9ybUlkO1xuXHR9O1xuXG5cdHRoaXMub25FbmRTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHR0aGlzLnN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKVxuXHRcdD8gdGhpcy5zdWJtaXR0ZXIuc3RhdHVzLndhdGNoKCBjYWxsYWJsZSApXG5cdFx0OiB0aGlzLnN1Ym1pdHRlci5vbkZhaWxTdWJtaXQoIGNhbGxhYmxlICk7XG5cdH07XG5cblx0dGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J3N1Ym1pdCcsXG5cdFx0KCBldmVudCApID0+IHRoaXMub25TdWJtaXQoIGV2ZW50ICksXG5cdCk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtBamF4U3VibWl0fFJlbG9hZFN1Ym1pdH1cblx0ICovXG5cdHRoaXMuc3VibWl0dGVyID0gdGhpcy5jcmVhdGVTdWJtaXR0ZXIoKTtcblxuXHR0aGlzLmhhbmRsZUJ1dHRvbnMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVN1Ym1pdDsiLCJpbXBvcnQgQmFzZVN1Ym1pdCBmcm9tICcuL0Jhc2VTdWJtaXQnO1xuXG5mdW5jdGlvbiBSZWxvYWRTdWJtaXQoIGZvcm0gKSB7XG5cdEJhc2VTdWJtaXQuY2FsbCggdGhpcywgZm9ybSApO1xuXG5cdHRoaXMuZmFpbFByb21pc2VzID0gW107XG5cblx0dGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ICAgICA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXHRcdGNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5cdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRhcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LnJlbG9hZC5wcm9taXNlcycsXG5cdFx0XHRcdHRoaXMuZ2V0UHJvbWlzZXMoKSxcblx0XHRcdFx0eyB0YXJnZXQ6IHJvb3ROb2RlIH0sXG5cdFx0XHQpLFxuXHRcdCkudGhlbihcblx0XHRcdCgpID0+IHJvb3ROb2RlLnN1Ym1pdCgpLFxuXHRcdCkuY2F0Y2goICgpID0+IHtcblx0XHRcdHRoaXMuZmFpbFByb21pc2VzLmZvckVhY2goIGN1cnJlbnQgPT4gY3VycmVudCgpICk7XG5cblx0XHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblx0XHR9ICk7XG5cdH07XG5cblx0dGhpcy5vbkZhaWxTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmZhaWxQcm9taXNlcy5wdXNoKCBjYWxsYWJsZSApO1xuXHR9O1xufVxuXG5SZWxvYWRTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsb2FkU3VibWl0OyIsImZ1bmN0aW9uIGlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzICkge1xuXHRyZXR1cm4gJ3N1Y2Nlc3MnID09PSBzdGF0dXMgfHwgc3RhdHVzPy5pbmNsdWRlcyggJ2RzdWNjZXNzfCcgKTtcbn1cblxuZXhwb3J0IHsgaXNTdWNjZXNzU3RhdHVzIH07IiwiLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFuZ2VUeXBlKCBub2RlICkge1xuXHRyZXR1cm4gWyAnc2VsZWN0LW9uZScsICdyYW5nZScgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzSGlkZGVuKCBub2RlICkge1xuXHRyZXR1cm4gJ2hpZGRlbicgPT09IG5vZGUudHlwZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNSYW5nZSggbm9kZSApIHtcblx0cmV0dXJuICdyYW5nZScgPT09IG5vZGUudHlwZTtcbn1cblxuZXhwb3J0IHtcblx0aXNIaWRkZW4sXG5cdGlzUmFuZ2UsXG5cdGlzQ2hhbmdlVHlwZSxcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0eWxlc1xuaW1wb3J0ICcuL21haW4ucGNzcydcblxuaW1wb3J0IGluaXRFbGVtZW50b3IgZnJvbSAnLi9pbml0L2luaXRFbGVtZW50b3InO1xuaW1wb3J0IEJhc2VTaWduYWwgZnJvbSAnLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XG5pbXBvcnQgUmVhY3RpdmVTZXQgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVNldCc7XG5pbXBvcnQgTG9hZGluZ1JlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcbmltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgUmVwb3J0aW5nSW50ZXJmYWNlIGZyb20gJy4vcmVwb3J0aW5nL1JlcG9ydGluZ0ludGVyZmFjZSc7XG5pbXBvcnQge1xuXHRhbGxSZWplY3RlZCxcblx0Z2V0TGFuZ3VhZ2UsXG5cdHRvSFRNTCxcblx0aXNFbXB0eSxcblx0Z2V0T2Zmc2V0VG9wLFxuXHRmb2N1c09uSW52YWxpZElucHV0LFxuXHRpc1Zpc2libGUsIGdldFNjcm9sbFBhcmVudCwgYXBwbHlVc2VyQWdlbnRzLCBpc1VBLFxufSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Jlc3RyaWN0aW9uJztcbmltcG9ydCBSZXN0cmljdGlvbkVycm9yIGZyb20gJy4vcmVwb3J0aW5nL1Jlc3RyaWN0aW9uRXJyb3InO1xuaW1wb3J0IHtcblx0dmFsaWRhdGVJbnB1dHMsXG5cdHZhbGlkYXRlSW5wdXRzQWxsLFxuXHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyxcbn0gZnJvbSAnLi9yZXBvcnRpbmcvZnVuY3Rpb25zJztcblxuaW1wb3J0ICcuL2NhbGMubW9kdWxlL21haW4nO1xuaW1wb3J0IHtcblx0Z2V0UGFyc2VkTmFtZSxcblx0cG9wdWxhdGVJbnB1dHMsXG59IGZyb20gJy4vaW5wdXRzL2Z1bmN0aW9ucyc7XG5pbXBvcnQgaW5pdEZvcm0gZnJvbSAnLi9pbml0L2luaXRGb3JtJztcbmltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9CYXNlSHRtbEF0dHInO1xuaW1wb3J0IHF1ZXJ5QnlBdHRyVmFsdWUgZnJvbSAnLi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUnO1xuaW1wb3J0IGl0ZXJhdGVDb21tZW50cyBmcm9tICcuL2h0bWwubWFjcm8vaXRlcmF0ZUNvbW1lbnRzJztcbmltcG9ydCBpdGVyYXRlSmZiQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVKZmJDb21tZW50cyc7XG5pbXBvcnQgb2JzZXJ2ZUNvbW1lbnQgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50JztcbmltcG9ydCBvYnNlcnZlTWFjcm9BdHRyIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyJztcbmltcG9ydCBSZXF1aXJlZFJlc3RyaWN0aW9uIGZyb20gJy4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXF1aXJlZFJlc3RyaWN0aW9uJztcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxuXHQpLFxuXHRJbnB1dERhdGEsXG5cdEJhc2VTaWduYWwsXG5cdFJlYWN0aXZlVmFyLFxuXHRSZWFjdGl2ZUhvb2ssXG5cdExvYWRpbmdSZWFjdGl2ZVZhcixcblx0T2JzZXJ2YWJsZSxcblx0UmVwb3J0aW5nSW50ZXJmYWNlLFxuXHRSZXN0cmljdGlvbixcblx0UmVzdHJpY3Rpb25FcnJvcixcblx0QmFzZUh0bWxBdHRyLFxuXHRSZWFjdGl2ZVNldCxcblx0UmVxdWlyZWRSZXN0cmljdGlvbixcbn07XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA/PyB7fVxuXHQpLFxuXHRhbGxSZWplY3RlZCxcblx0Z2V0TGFuZ3VhZ2UsXG5cdHRvSFRNTCxcblx0dmFsaWRhdGVJbnB1dHMsXG5cdHZhbGlkYXRlSW5wdXRzQWxsLFxuXHRnZXRQYXJzZWROYW1lLFxuXHRpc0VtcHR5LFxuXHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyxcblx0Z2V0T2Zmc2V0VG9wLFxuXHRmb2N1c09uSW52YWxpZElucHV0LFxuXHRwb3B1bGF0ZUlucHV0cyxcblx0aXNWaXNpYmxlLFxuXHRxdWVyeUJ5QXR0clZhbHVlLFxuXHRpdGVyYXRlQ29tbWVudHMsXG5cdG9ic2VydmVNYWNyb0F0dHIsXG5cdG9ic2VydmVDb21tZW50LFxuXHRpdGVyYXRlSmZiQ29tbWVudHMsXG5cdGdldFNjcm9sbFBhcmVudCxcblx0aXNVQSxcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgYXBwbHlVc2VyQWdlbnRzICk7XG5cbmpRdWVyeSggKCkgPT4gSmV0UGx1Z2lucy5pbml0KCkgKTtcblxuSmV0UGx1Z2lucy5idWxrQmxvY2tzSW5pdCggW1xuXHR7XG5cdFx0YmxvY2s6ICdqZXQtZm9ybXMuZm9ybS1ibG9jaycsXG5cdFx0Y2FsbGJhY2s6IGluaXRGb3JtLFxuXHRcdGNvbmRpdGlvbjogKCkgPT4gJ2xvYWRpbmcnICE9PSBkb2N1bWVudC5yZWFkeVN0YXRlLFxuXHR9LFxuXSApO1xuXG5qUXVlcnkoIHdpbmRvdyApLm9uKCAnZWxlbWVudG9yL2Zyb250ZW5kL2luaXQnLCBpbml0RWxlbWVudG9yICk7XG5cbmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgKCkgPT4ge1xuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGVbXX1cblx0ICovXG5cdGNvbnN0IGZvcm1zID0gT2JqZWN0LnZhbHVlcyggd2luZG93LkpldEZvcm1CdWlsZGVyICk7XG5cblx0Zm9yICggY29uc3Qgcm9vdCBvZiBmb3JtcyApIHtcblx0XHRpZiAoICEoIHJvb3QgaW5zdGFuY2VvZiBPYnNlcnZhYmxlICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cm9vdC5yZVF1ZXJ5VmFsdWVzKCk7XG5cdH1cbn0gKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9