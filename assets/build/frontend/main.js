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
    const [fieldName, ...params] = parsedName;

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
        if (!this.input?.nodes || false === deprecatedApplyFilters || 'string' !== typeof current) {
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
    let formula = this.calculateString();
    if ('string' === typeof formula) {
      formula = formula.replace(/\r\n|\r|\n/g, '\\n');
    }
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
      isUTC = lower !== 'false';
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
const getFilterItems = () => applyFilters('jet.fb.filters', [_filters_SetYearFilter__WEBPACK_IMPORTED_MODULE_14__["default"], _filters_SetMonthFilter__WEBPACK_IMPORTED_MODULE_15__["default"], _filters_SetDayFilter__WEBPACK_IMPORTED_MODULE_13__["default"], _filters_SetHourFilter__WEBPACK_IMPORTED_MODULE_11__["default"], _filters_SetMinFilter__WEBPACK_IMPORTED_MODULE_12__["default"], _filters_SubtractYearFilter__WEBPACK_IMPORTED_MODULE_20__["default"], _filters_SubtractMonthFilter__WEBPACK_IMPORTED_MODULE_19__["default"], _filters_SubtractDayFilter__WEBPACK_IMPORTED_MODULE_17__["default"], _filters_SubtractHourFilter__WEBPACK_IMPORTED_MODULE_16__["default"], _filters_SubtractMinFilter__WEBPACK_IMPORTED_MODULE_18__["default"], _filters_AddYearFilter__WEBPACK_IMPORTED_MODULE_5__["default"], _filters_AddMonthFilter__WEBPACK_IMPORTED_MODULE_6__["default"], _filters_AddDayFilter__WEBPACK_IMPORTED_MODULE_7__["default"], _filters_AddHourFilter__WEBPACK_IMPORTED_MODULE_8__["default"], _filters_AddMinFilter__WEBPACK_IMPORTED_MODULE_9__["default"], _filters_LengthFilter__WEBPACK_IMPORTED_MODULE_0__["default"], _filters_FallBackFilter__WEBPACK_IMPORTED_MODULE_1__["default"], _filters_ToDateFilter__WEBPACK_IMPORTED_MODULE_2__["default"], _filters_ToTimeFilter__WEBPACK_IMPORTED_MODULE_3__["default"], _filters_ToDateTimeFilter__WEBPACK_IMPORTED_MODULE_4__["default"], _filters_TimestampFilter__WEBPACK_IMPORTED_MODULE_10__["default"], _filters_ToDayInMsFilter__WEBPACK_IMPORTED_MODULE_21__["default"], _filters_ToMonthInMsFilter__WEBPACK_IMPORTED_MODULE_22__["default"], _filters_ToYearInMsFilter__WEBPACK_IMPORTED_MODULE_23__["default"], _filters_ToHourInMsFilter__WEBPACK_IMPORTED_MODULE_24__["default"], _filters_ToMinuteInMsFilter__WEBPACK_IMPORTED_MODULE_25__["default"], _filters_ToWeekInMsFilter__WEBPACK_IMPORTED_MODULE_26__["default"]]);
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

const {
  applyFilters
} = JetPlugins.hooks;
function CalculatedHtmlString(root, {
  withPrefix = true,
  macroHost = false,
  ...options
} = {}) {
  _calc_module_CalculatedFormula__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, root, options);
  if (withPrefix) {
    this.regexp = /JFB_FIELD::(.+)/gi;
  }
  this.macroHost = macroHost || false;
  this.relatedCallback = function (input) {
    const $fieldNode = jQuery(input.nodes[0]);
    const $macroHost = this.macroHost ? jQuery(this.macroHost) : false;
    let fieldValue = applyFilters('jet.fb.macro.field.value', false, $fieldNode, $macroHost);
    fieldValue = wp?.hooks?.applyFilters ? wp.hooks.applyFilters('jet.fb.macro.field.value', fieldValue, $fieldNode, $macroHost) : fieldValue;
    return false === fieldValue ? input.value.current : fieldValue;
  }.bind(this);
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
    return node.textContent.includes('JFB_FIELD::');
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
    macroHost: node
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
    let html = String(formula.calculateString());
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFNQTtBQUtBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDemRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWdDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFFQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFLQTtBQUVBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcGlCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFLQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL0Jhc2VIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL0ZpbGVFeHRlbnNpb25IdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL01heEZpbGVTaXplSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9NYXhGaWxlc0h0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvUmVtYWluaW5nQ2FsY0F0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9DYWxjdWxhdGVkRm9ybXVsYS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2FwcGx5RmlsdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2F0dGFjaENvbnN0TmFtZXNwYWNlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0Jhc2VJbnRlcm5hbE1hY3JvLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0N1cnJlbnREYXRlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0RheV9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvSG91cl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvTWluX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9Nb250aF9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvWWVhcl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkSG91ckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkTWluRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkWWVhckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvRmFsbEJhY2tGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXREYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0TW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0TWluRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RpbWVzdGFtcEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXRlRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub0RheUluTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvSG91ckluTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvTWludXRlSW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9Nb250aEluTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9XZWVrSW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9ZZWFySW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2dldEZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9tYWluLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL0NhbGN1bGF0ZWRIdG1sU3RyaW5nLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9pdGVyYXRlQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL2l0ZXJhdGVKZmJDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZUNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL29ic2VydmVNYWNyb0F0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL29ic2VydmVOb2RlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9xdWVyeUJ5QXR0clZhbHVlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5pdC9pbml0RWxlbWVudG9yLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5pdC9pbml0Rm9ybS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9DaGFuZ2VEYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL0lucHV0RGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9Ob0xpc3RlbkRhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvUmFuZ2VEYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL1JlbmRlclN0YXRlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2suanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZVNldC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL1JlYWN0aXZlVmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL0Jyb3dzZXJSZXBvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVwb3J0aW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9SZXBvcnRpbmdJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVzdHJpY3Rpb25FcnJvci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL05hdGl2ZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXF1aXJlZFJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvQmFzZVNpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsSGlkZGVuQXJyYXkuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbFJhbmdlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxSZW5kZXJTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0FqYXhTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvQmFzZVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9Gb3JtU3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L1JlbG9hZFN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdXBwb3J0cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL21haW4ucGNzcz83NjBkIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVJbnB1dCwgcG9wdWxhdGVJbnB1dHMgfSBmcm9tICcuL2lucHV0cy9mdW5jdGlvbnMnO1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi9zdWJtaXQvRm9ybVN1Ym1pdCc7XG5pbXBvcnQgcXVlcnlCeUF0dHJWYWx1ZSBmcm9tICcuL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZSc7XG5pbXBvcnQgaXRlcmF0ZUpmYkNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMnO1xuaW1wb3J0IG9ic2VydmVDb21tZW50IGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudCc7XG5pbXBvcnQgb2JzZXJ2ZU1hY3JvQXR0ciBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0cic7XG5pbXBvcnQgb2JzZXJ2ZU5vZGUgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVOb2RlJztcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXRzQWxsIH0gZnJvbSAnLi9yZXBvcnRpbmcvZnVuY3Rpb25zJztcbmltcG9ydCBSZXBvcnRpbmdDb250ZXh0IGZyb20gJy4vcmVwb3J0aW5nL1JlcG9ydGluZ0NvbnRleHQnO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5jb25zdCB7XG5cdCAgICAgIGRvQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmZ1bmN0aW9uIE9ic2VydmFibGUoIHBhcmVudCA9IG51bGwgKSB7XG5cdHRoaXMucGFyZW50ICAgICA9IHBhcmVudDtcblx0dGhpcy5kYXRhSW5wdXRzID0ge307XG5cdHRoaXMuZm9ybSAgICAgICA9IG51bGw7XG5cdHRoaXMubXVsdGlzdGVwICA9IG51bGw7XG5cdHRoaXMucm9vdE5vZGUgICA9IG51bGw7XG5cdHRoaXMuaXNPYnNlcnZlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICpcblx0ICogQHR5cGUge1JlcG9ydGluZ0NvbnRleHR9XG5cdCAqL1xuXHR0aGlzLmNvbnRleHQgPSB0aGlzLnBhcmVudCA/IG51bGwgOiBuZXcgUmVwb3J0aW5nQ29udGV4dCggdGhpcyApO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtSZXBlYXRlckRhdGF8bnVsbH1cblx0ICovXG5cdHBhcmVudDogbnVsbCxcblx0LyoqXG5cdCAqIHtcblx0ICogICAgIFtmaWVsZF9uYW1lXToge0lucHV0RGF0YX1cblx0ICogfVxuXHQgKi9cblx0ZGF0YUlucHV0czoge30sXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtGb3JtU3VibWl0fVxuXHQgKi9cblx0Zm9ybTogbnVsbCxcblxuXHQvKipcblx0ICogQHR5cGUge011bHRpU3RlcFN0YXRlfVxuXHQgKi9cblx0bXVsdGlzdGVwOiBudWxsLFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR8SFRNTEZvcm1FbGVtZW50fVxuXHQgKi9cblx0cm9vdE5vZGU6IG51bGwsXG5cdGlzT2JzZXJ2ZWQ6IGZhbHNlLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dmFsdWU6IG51bGwsXG5cdG9ic2VydmUgKCByb290ID0gbnVsbCApIHtcblx0XHRpZiAoIHRoaXMuaXNPYnNlcnZlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCBudWxsICE9PSByb290ICkge1xuXHRcdFx0dGhpcy5yb290Tm9kZSA9IHJvb3Q7XG5cdFx0fVxuXHRcdHRoaXMuaXNPYnNlcnZlZCA9IHRydWU7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmJlZm9yZScsIHRoaXMgKTtcblxuXHRcdHRoaXMuaW5pdFN1Ym1pdEhhbmRsZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemUgZGF0YUlucHV0cyB3aXRoIGZpZWxkcy5cblx0XHQgKiBXaXRob3V0IHZhbHVlc1xuXHRcdCAqL1xuXHRcdHRoaXMuaW5pdEZpZWxkcygpO1xuXG5cdFx0LyoqXG5cdFx0ICogU2V0dXAgZmllbGRzIHZhbHVlcyBhbmQgbWFrZSB0aGVtIHJlYWN0aXZlXG5cdFx0ICovXG5cdFx0dGhpcy5tYWtlUmVhY3RpdmVQcm94eSgpO1xuXG5cdFx0dGhpcy5pbml0TWFjcm9zKCk7XG5cblx0XHR0aGlzLmluaXRBY3Rpb25CdXR0b25zKCk7XG5cblx0XHR0aGlzLmluaXRWYWx1ZSgpO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsIHRoaXMgKTtcblx0fSxcblxuXHRpbml0RmllbGRzICgpIHtcblx0XHRmb3IgKCBjb25zdCBmb3JtRWxlbWVudCBvZiB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHQnW2RhdGEtamZiLXN5bmNdJyxcblx0XHQpICkge1xuXHRcdFx0dGhpcy5wdXNoSW5wdXQoIGZvcm1FbGVtZW50ICk7XG5cdFx0fVxuXHR9LFxuXG5cdGluaXRNYWNyb3MgKCkge1xuXHRcdC8vIG1hY3JvcyBhcyBodG1sLWNvbW1lbnRzXG5cdFx0Zm9yIChcblx0XHRcdGNvbnN0IGNvbW1lbnQgb2YgaXRlcmF0ZUpmYkNvbW1lbnRzKCB0aGlzLnJvb3ROb2RlIClcblx0XHRcdCkge1xuXHRcdFx0b2JzZXJ2ZUNvbW1lbnQoIGNvbW1lbnQsIHRoaXMgKTtcblx0XHR9XG5cblx0XHQvLyBtYWNyb3MgaW4gZGVmYXVsdCBhdHRyaWJ1dGVzXG5cdFx0Y29uc3Qgbm9kZXNXaXRoQXR0cnMgPSBxdWVyeUJ5QXR0clZhbHVlKCB0aGlzLnJvb3ROb2RlLCAnSkZCX0ZJRUxEOjonICk7XG5cblx0XHRjb25zdCB7IHJlcGxhY2VBdHRycyA9IFtdIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuXHRcdGZvciAoIGNvbnN0IG5vZGVXaXRoQXR0ciBvZiBub2Rlc1dpdGhBdHRycyApIHtcblx0XHRcdGZvciAoIGNvbnN0IHJlcGxhY2VBdHRyIG9mIHJlcGxhY2VBdHRycyApIHtcblx0XHRcdFx0b2JzZXJ2ZU1hY3JvQXR0ciggbm9kZVdpdGhBdHRyLCByZXBsYWNlQXR0ciwgdGhpcyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIG1hY3JvcyBpbiBkYXRhLWpmYi1tYWNybyBhdHRyaWJ1dGVcblx0XHQvLyByZXN1bHQgd2lsbCBwbGFjZWQgaW5zaWRlIHJlbGF0aXZlIG5vZGVcblx0XHRjb25zdCBub2RlcyA9IHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCdbZGF0YS1qZmItbWFjcm9dOm5vdChbZGF0YS1qZmItb2JzZXJ2ZWRdKScsXG5cdFx0KTtcblxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygbm9kZXMgKSB7XG5cdFx0XHRvYnNlcnZlTm9kZSggbm9kZSwgdGhpcyApO1xuXHRcdH1cblx0fSxcblxuXHRpbml0U3VibWl0SGFuZGxlciAoKSB7XG5cdFx0Ly8gY2hlY2sgaXMgY3VycmVudCBvYmplY3QgcmVsYXRlZCBmb3IgZ2xvYmFsIGZvcm0gZWxlbWVudFxuXHRcdGlmICggdGhpcy5wYXJlbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5mb3JtID0gbmV3IEZvcm1TdWJtaXQoIHRoaXMgKTtcblx0fSxcblxuXHRpbml0QWN0aW9uQnV0dG9ucyAoKSB7XG5cdFx0aWYgKCB0aGlzLnBhcmVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yICggY29uc3QgYnV0dG9uIG9mIHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fYnV0dG9uLXN3aXRjaC1zdGF0ZScsXG5cdFx0KSApIHtcblx0XHRcdGxldCBzdGF0ZXM7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzdGF0ZXMgPSBKU09OLnBhcnNlKCBidXR0b24uZGF0YXNldC5zd2l0Y2hPbiApO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2V0U3RhdGUoKS52YWx1ZS5jdXJyZW50ID0gc3RhdGVzO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTxQcm9taXNlPG5ldmVyPnxQcm9taXNlPHZvaWQ+Pn1cblx0ICovXG5cdGFzeW5jIGlucHV0c0FyZVZhbGlkICgpIHtcblx0XHRjb25zdCBpbnZhbGlkID0gYXdhaXQgdmFsaWRhdGVJbnB1dHNBbGwoXG5cdFx0XHRwb3B1bGF0ZUlucHV0cyggdGhpcy5nZXRJbnB1dHMoKSApLFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbiggaW52YWxpZC5sZW5ndGggKVxuXHRcdCAgICAgICA/IFByb21pc2UucmVqZWN0KCBpbnZhbGlkIClcblx0XHQgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcblx0fSxcblxuXHR3YXRjaCAoIGZpZWxkTmFtZSwgY2FsbGFibGUgKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmdldElucHV0KCBmaWVsZE5hbWUgKTtcblxuXHRcdGlmICggaW5wdXQgKSB7XG5cdFx0XHRyZXR1cm4gaW5wdXQud2F0Y2goIGNhbGxhYmxlICk7XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YGRhdGFJbnB1dHMgaW4gT2JzZXJ2YWJsZSBkb25cXCd0IGhhdmUgJHsgZmllbGROYW1lIH0gZmllbGRgLFxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSBub2RlICAgIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gcmVwbGFjZSB7Qm9vbGVhbn1cblx0ICovXG5cdG9ic2VydmVJbnB1dCAoIG5vZGUsIHJlcGxhY2UgPSBmYWxzZSApIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMucHVzaElucHV0KCBub2RlLCByZXBsYWNlICk7XG5cblx0XHRpbnB1dC5tYWtlUmVhY3RpdmUoKTtcblxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuaW5wdXQubWFudWFsJywgaW5wdXQgKTtcblx0fSxcblxuXHRtYWtlUmVhY3RpdmVQcm94eSAoKSB7XG5cdFx0Zm9yICggY29uc3QgY3VycmVudCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0Y3VycmVudC5tYWtlUmVhY3RpdmUoKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSBub2RlICAgIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gcmVwbGFjZSB7Qm9vbGVhbn1cblx0ICovXG5cdHB1c2hJbnB1dCAoIG5vZGUsIHJlcGxhY2UgPSBmYWxzZSApIHtcblx0XHQvLyBwcmV2ZW50IHNhdmluZyBpbnB1dHMgZnJvbSBwcmVzZXQgcmVwZWF0ZXIgaXRlbXMgaW4gcm9vdCBvYmplY3Rcblx0XHQvLyB0aG9zZSBpbnB1dHMgd291bGQgc2F2ZWQgaW4gT2JzZXJ2YWJsZVJvdyBvYmplY3RcblxuXHRcdGlmICggIXRoaXMucGFyZW50ICYmXG5cdFx0XHRub2RlLnBhcmVudEVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5wdXREYXRhID0gY3JlYXRlSW5wdXQoIG5vZGUsIHRoaXMgKTtcblx0XHRjb25zdCBmaW5kSW5wdXQgPSB0aGlzLmRhdGFJbnB1dHNbIGlucHV0RGF0YS5nZXROYW1lKCkgXSA/PyBmYWxzZTtcblxuXHRcdGlmICggZmFsc2UgPT09IGZpbmRJbnB1dCB8fCByZXBsYWNlICkge1xuXHRcdFx0dGhpcy5kYXRhSW5wdXRzWyBpbnB1dERhdGEuZ2V0TmFtZSgpIF0gPSBpbnB1dERhdGE7XG5cblx0XHRcdHJldHVybiBpbnB1dERhdGE7XG5cdFx0fVxuXG5cdFx0ZmluZElucHV0Lm1lcmdlKCBpbnB1dERhdGEgKTtcblxuXHRcdHJldHVybiBmaW5kSW5wdXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0FycmF5PElucHV0RGF0YT59XG5cdCAqL1xuXHRnZXRJbnB1dHMgKCkge1xuXHRcdHJldHVybiBPYmplY3QudmFsdWVzKCB0aGlzLmRhdGFJbnB1dHMgKTtcblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7bnVsbHxSZW5kZXJTdGF0ZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0Z2V0U3RhdGUgKCkge1xuXHRcdHJldHVybiB0aGlzLmdldElucHV0KCAnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXMnICk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSAgZmllbGROYW1lXG5cdCAqIEByZXR1cm4ge251bGx8SW5wdXREYXRhfVxuXHQgKi9cblx0Z2V0SW5wdXQgKCBmaWVsZE5hbWUgKSB7XG5cdFx0aWYgKCB0aGlzLmRhdGFJbnB1dHMuaGFzT3duUHJvcGVydHkoIGZpZWxkTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XG5cdFx0fVxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnBhcmVudD8ucm9vdCA/PyBudWxsO1xuXG5cdFx0aWYgKCAhcm9vdCApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICggcm9vdC5kYXRhSW5wdXRzLmhhc093blByb3BlcnR5KCBmaWVsZE5hbWUgKSApIHtcblx0XHRcdHJldHVybiByb290LmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRnZXRTdWJtaXQgKCkge1xuXHRcdHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0gOiB0aGlzLnBhcmVudC5yb290LmZvcm07XG5cdH0sXG5cdGdldENvbnRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQgPz8gdGhpcy5wYXJlbnQucm9vdC5jb250ZXh0O1xuXHR9LFxuXHQvKipcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjcxMVxuXHQgKlxuXHQgKiBAc2luY2UgMy4wLjhcblx0ICovXG5cdHJlbW92ZSAoKSB7XG5cdFx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGlucHV0Lm9uUmVtb3ZlKCk7XG5cdFx0fVxuXHR9LFxuXHQvKipcblx0ICogUnVucyBvbmx5IG9uY2Ugb24gd2luZG93IFwibG9hZFwiIGV2ZW50XG5cdCAqL1xuXHRyZVF1ZXJ5VmFsdWVzICgpIHtcblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0aW5wdXQucmVRdWVyeVZhbHVlKCk7XG5cdFx0fVxuXHR9LFxuXHRpbml0VmFsdWUoKSB7XG5cdFx0dGhpcy52YWx1ZSA9IG5ldyBSZWFjdGl2ZVZhcigge30gKTtcblxuXHRcdHRoaXMudmFsdWUud2F0Y2goICgpID0+IHtcblx0XHRcdGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50LFxuXHRcdFx0KTtcblxuXHRcdFx0Zm9yICggY29uc3QgWyBmaWVsZE5hbWUsIHZhbHVlIF0gb2YgZW50cmllcyApIHtcblx0XHRcdFx0dGhpcy5nZXRJbnB1dCggZmllbGROYW1lICkucmV2ZXJ0VmFsdWUoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRcdGlucHV0LndhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWUuY3VycmVudFsgaW5wdXQuZ2V0TmFtZSgpIF0gPSBpbnB1dC5nZXRWYWx1ZSgpO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHRoaXMudmFsdWUubWFrZSgpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZTsiLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5mdW5jdGlvbiBCYXNlSHRtbEF0dHIoKSB7XG5cdHRoaXMuYXR0ck5hbWUgICA9ICcnO1xuXHR0aGlzLmluaXRpYWwgICAgPSBudWxsO1xuXHR0aGlzLmlzRnJvbURhdGEgPSBmYWxzZTtcblx0dGhpcy52YWx1ZSAgICAgID0gbnVsbDtcbn1cblxuQmFzZUh0bWxBdHRyLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIE5hbWUgb2YgZGF0YSBhdHRyaWJ1dGVcblx0ICovXG5cdGF0dHJOYW1lOiAnJyxcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRpbnB1dDogbnVsbCxcblx0aW5pdGlhbDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHZhbHVlOiBudWxsLFxuXHRvYnNlcnZlKCkge1xuXHRcdHRoaXMudmFsdWUgPSBuZXcgUmVhY3RpdmVWYXIoIHRoaXMuaW5pdGlhbCApO1xuXHRcdHRoaXMudmFsdWUubWFrZSgpO1xuXG5cdFx0dGhpcy5hZGRXYXRjaGVyQXR0cigpO1xuXHR9LFxuXHRub2RlU2lnbmFsKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdG5vZGVbIHRoaXMuYXR0ck5hbWUgXSA9IHRoaXMudmFsdWUuY3VycmVudDtcblx0fSxcblx0YWRkV2F0Y2hlckF0dHIoKSB7XG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5ub2RlU2lnbmFsKCkgKTtcblx0fSxcblx0LyoqXG5cdCAqIElmIHlvdSBuZWVkIHNwZWNpZmljIGNoZWNrLFxuXHQgKiB5b3UgY2FuIHJld3JpdGUgdGhpcyBmdW5jdGlvblxuXHQgKlxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRpc1N1cHBvcnRlZCggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdGNvbnN0IGhhc0luUm9vdCAgICA9IC0xICE9PSBub2RlWyB0aGlzLmF0dHJOYW1lIF0gPz8gLTE7XG5cdFx0Y29uc3QgaGFzSW5EYXRhU2V0ID0gbm9kZS5kYXRhc2V0Lmhhc093blByb3BlcnR5KCB0aGlzLmF0dHJOYW1lICk7XG5cblx0XHRpZiAoICFoYXNJbkRhdGFTZXQgJiYgIWhhc0luUm9vdCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYWwgPSB0aGlzLmdldEluaXRpYWwoIGlucHV0ICk7XG5cblx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5pbml0aWFsICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4geyp8Ym9vbGVhbn1cblx0ICovXG5cdGdldEluaXRpYWwoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gbm9kZS5kYXRhc2V0WyB0aGlzLmF0dHJOYW1lIF0gfHwgbm9kZVsgdGhpcy5hdHRyTmFtZSBdIHx8IGZhbHNlO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cblx0ICovXG5cdHNldElucHV0KCBpbnB1dCApIHtcblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlSHRtbEF0dHI7IiwiaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9NYXhGaWxlc0h0bWxBdHRyJztcblxuZnVuY3Rpb24gRmlsZUV4dGVuc2lvbkh0bWxBdHRyKCkge1xuXHRNYXhGaWxlc0h0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ2ZpbGVfZXh0JztcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlICYmIEJvb2xlYW4oIG5vZGUuYWNjZXB0ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0TWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gbm9kZS5hY2NlcHQuc3BsaXQoICcsJyApO1xuXHR9O1xuXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0bm9kZS5hY2NlcHQgPSB0aGlzLnZhbHVlLmN1cnJlbnQuam9pbiggJywnICk7XG5cdFx0fSApO1xuXHR9O1xufVxuXG5GaWxlRXh0ZW5zaW9uSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUV4dGVuc2lvbkh0bWxBdHRyOyIsImltcG9ydCBNYXhGaWxlc0h0bWxBdHRyIGZyb20gJy4vTWF4RmlsZXNIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIE1heEZpbGVTaXplSHRtbEF0dHIoKSB7XG5cdE1heEZpbGVzSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAnbWF4X3NpemUnO1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0ZpbGVEYXRhfElucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuc2V0SW5wdXQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdE1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cblx0XHRjb25zdCB7IG1heF9zaXplOiBtYXhTaXplID0gMSB9ID0gSlNPTi5wYXJzZShcblx0XHRcdGlucHV0LnByZXZpZXdzQ29udGFpbmVyLmRhdGFzZXQuYXJncyxcblx0XHQpO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gK21heFNpemU7XG5cdH07XG59XG5cbk1heEZpbGVTaXplSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZVNpemVIdG1sQXR0cjsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vQmFzZUh0bWxBdHRyJztcblxuZnVuY3Rpb24gTWF4RmlsZXNIdG1sQXR0cigpIHtcblx0QmFzZUh0bWxBdHRyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmF0dHJOYW1lID0gJ21heF9maWxlcyc7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gJ2ZpbGUnID09PSBub2RlLnR5cGU7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXG5cdFx0Y29uc3QgeyBtYXhfZmlsZXM6IG1heEZpbGVzID0gMSB9ID0gSlNPTi5wYXJzZShcblx0XHRcdGlucHV0LnByZXZpZXdzQ29udGFpbmVyLmRhdGFzZXQuYXJncyxcblx0XHQpO1xuXG5cdFx0dGhpcy5pbml0aWFsID0gK21heEZpbGVzO1xuXHR9O1xuXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSAoKSA9PiB7fTtcbn1cblxuTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSHRtbEF0dHIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1heEZpbGVzSHRtbEF0dHI7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL0Jhc2VIdG1sQXR0cic7XG5cbmZ1bmN0aW9uIFJlbWFpbmluZ0NhbGNBdHRyKCkge1xuXHRCYXNlSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAncmVtYWluaW5nJztcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoICdtYXhMZW5ndGgnICk7XG5cdH07XG5cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXHRcdGNvbnN0IHsgbWF4TGVuZ3RoIH0gPSBpbnB1dC5hdHRycztcblx0XHRjb25zdCBjdXJyZW50ID0gaW5wdXQudmFsdWUuY3VycmVudD8ubGVuZ3RoID8/IDA7XG5cblx0XHR0aGlzLmluaXRpYWwgPSBtYXhMZW5ndGgudmFsdWUuY3VycmVudCAtIGN1cnJlbnQ7XG5cdH07XG5cblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9ICgpID0+IHt9O1xuXG5cdHRoaXMub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLm9ic2VydmUuY2FsbCggdGhpcyApO1xuXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy51cGRhdGVBdHRyKCkgKTtcblx0XHR0aGlzLmlucHV0LmF0dHJzLm1heExlbmd0aC52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy51cGRhdGVBdHRyKCkgKTtcblx0fTtcblxuXHR0aGlzLnVwZGF0ZUF0dHIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IHRoaXMuaW5wdXQuYXR0cnM7XG5cdFx0Y29uc3QgY3VycmVudCAgICAgICA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudD8ubGVuZ3RoID8/IDA7XG5cblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBtYXhMZW5ndGgudmFsdWUuY3VycmVudCAtIGN1cnJlbnQ7XG5cdH07XG59XG5cblJlbWFpbmluZ0NhbGNBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVtYWluaW5nQ2FsY0F0dHI7IiwiLyoqXG4gKiBAcGFyYW0gZm9ybXVsYVxuICogQHBhcmFtIHJvb3QgICAge09ic2VydmFibGV9XG4gKiBAY2xhc3NcbiAqL1xuaW1wb3J0IGFwcGx5RmlsdGVycyBmcm9tICcuL2FwcGx5RmlsdGVycyc7XG5pbXBvcnQgZ2V0RmlsdGVycyBmcm9tICcuL2dldEZpbHRlcnMnO1xuaW1wb3J0IGF0dGFjaENvbnN0TmFtZXNwYWNlIGZyb20gJy4vYXR0YWNoQ29uc3ROYW1lc3BhY2UnO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnM6IHdwRmlsdGVycyxcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5jdXN0b20uZm9ybXVsYS5tYWNybycsXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0YXR0YWNoQ29uc3ROYW1lc3BhY2UsXG4pO1xuXG4vKipcbiAqIEBwYXJhbSByb290ICAgIHtJbnB1dERhdGF8T2JzZXJ2YWJsZX1cbiAqIEBwYXJhbSBvcHRpb25zIHt7Zm9yY2VGdW5jdGlvbjogYm9vbGVhbn19XG4gKi9cbmZ1bmN0aW9uIENhbGN1bGF0ZWRGb3JtdWxhKFxuXHRyb290LFxuXHRvcHRpb25zID0ge30sXG4pIHtcblx0dGhpcy5wYXJ0cyAgICAgICAgPSBbXTtcblx0dGhpcy5yZWxhdGVkICAgICAgPSBbXTtcblx0dGhpcy5yZWxhdGVkQXR0cnMgPSBbXTtcblx0dGhpcy5yZWdleHAgICAgICAgPSAvJShbXFx3XFwtXS4qP1xcUz8pJS9nO1xuXHR0aGlzLndhdGNoZXJzICAgICA9IFtdO1xuXG5cdGNvbnN0IHsgZm9yY2VGdW5jdGlvbiA9IGZhbHNlIH0gPSBvcHRpb25zO1xuXG5cdHRoaXMuZm9yY2VGdW5jdGlvbiA9IGZvcmNlRnVuY3Rpb247XG5cblx0aWYgKCByb290IGluc3RhbmNlb2YgSW5wdXREYXRhICkge1xuXHRcdHRoaXMuaW5wdXQgPSByb290O1xuXHR9XG5cblx0dGhpcy5yb290ID0gdGhpcy5pbnB1dD8ucm9vdCA/PyByb290O1xufVxuXG5DYWxjdWxhdGVkRm9ybXVsYS5wcm90b3R5cGUgPSB7XG5cdC8vIHJhdyB2YWx1ZVxuXHRmb3JtdWxhOiBudWxsLFxuXHRwYXJ0czogW10sXG5cdHJlbGF0ZWQ6IFtdLFxuXHRyZWxhdGVkQXR0cnM6IFtdLFxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGlucHV0OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV8T2JzZXJ2YWJsZVJvd31cblx0ICovXG5cdHJvb3Q6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVnRXhwfVxuXHQgKi9cblx0cmVnZXhwOiBudWxsLFxuXHRmb3JjZUZ1bmN0aW9uOiBmYWxzZSxcblx0LyoqXG5cdCAqIEB0eXBlIHtGdW5jdGlvbn1cblx0ICovXG5cdHNldFJlc3VsdDogKCkgPT4ge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ0NhbGN1bGF0ZWRGb3JtdWxhLnNldFJlc3VsdCBpcyBub3Qgc2V0IScgKTtcblx0fSxcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAgcmVsYXRlZElucHV0IHtJbnB1dERhdGF9XG5cdCAqIEByZXR1cm4geyp9XG5cdCAqL1xuXHRyZWxhdGVkQ2FsbGJhY2soIHJlbGF0ZWRJbnB1dCApIHtcblx0XHRyZXR1cm4gcmVsYXRlZElucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdH0sXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICovXG5cdG9ic2VydmUoIHZhbHVlICkge1xuXG5cdFx0dGhpcy5mb3JtdWxhID0gdmFsdWU7XG5cblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0dGhpcy5vYnNlcnZlSXRlbSggdmFsdWUgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy5vYnNlcnZlSXRlbSggaXRlbSApO1xuXHRcdH0gKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB2YWx1ZSB7U3RyaW5nfVxuXHQgKi9cblx0b2JzZXJ2ZUl0ZW0oIHZhbHVlICkge1xuXG5cdFx0bGV0IG1hdGNoO1xuXHRcdGxldCBwcmV2SW5kZXggPSAwO1xuXG5cdFx0dmFsdWUgKz0gJyc7XG5cblx0XHR3aGlsZSAoIChcblx0XHRcdG1hdGNoID0gdGhpcy5yZWdleHAuZXhlYyggdmFsdWUgKVxuXHRcdCkgIT09IG51bGwgKSB7XG5cdFx0XHRjb25zdCBwYXJ0ID0gdGhpcy5vYnNlcnZlTWFjcm8oIG1hdGNoWyAxIF0gKTtcblxuXHRcdFx0aWYgKCAwICE9PSBtYXRjaC5pbmRleCApIHtcblx0XHRcdFx0dGhpcy5wYXJ0cy5wdXNoKCB2YWx1ZS5zbGljZSggcHJldkluZGV4LCBtYXRjaC5pbmRleCApICk7XG5cdFx0XHR9XG5cblx0XHRcdHByZXZJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbIDAgXS5sZW5ndGg7XG5cblx0XHRcdGlmICggZmFsc2UgPT09IHBhcnQgKSB7XG5cdFx0XHRcdHRoaXMub25NaXNzaW5nUGFydCggbWF0Y2hbIDAgXSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMucGFydHMucHVzaCggcGFydCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHNhdmUgbGFzdCBwYXJ0XG5cdFx0aWYgKCBwcmV2SW5kZXggPT09IHZhbHVlLmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnBhcnRzLnB1c2goIHZhbHVlLnNsaWNlKCBwcmV2SW5kZXggKSApO1xuXG5cdFx0aWYgKCAxID09PSB0aGlzLnBhcnRzLmxlbmd0aCApIHtcblx0XHRcdHRoaXMucGFydHMgPSBbXTtcblx0XHR9XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXRNYXRjaCB7U3RyaW5nfVxuXHQgKi9cblx0b25NaXNzaW5nUGFydCggaW5wdXRNYXRjaCApIHtcblx0XHR0aGlzLnBhcnRzLnB1c2goIGlucHV0TWF0Y2ggKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBmaWVsZE5hbWUge1N0cmluZ31cblx0ICovXG5cdGlzRmllbGROb2RlRXhpc3RzKCBmaWVsZE5hbWUgKSB7XG5cblx0XHRjb25zdCBpc0ZpZWxkTm9kZSA9IHRoaXMucm9vdC5kYXRhSW5wdXRzWyBmaWVsZE5hbWUgXTtcblxuXHRcdGlmICggdW5kZWZpbmVkID09PSBpc0ZpZWxkTm9kZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIG5vZGUgZXhpc3RzIGluIHRoZSByb290Tm9kZS5cblx0XHQgKiBJZiB0aGUgbm9kZSBkb2VzIG5vdCBleGlzdCwgYW5hbHl6ZSB0aGUgZm9ybXVsYSB0byBkZXRlcm1pbmUgYW4gYWRqdXN0ZWQgdmFsdWVcblx0XHQgKiBiYXNlZCBvbiB0aGUgb3BlcmF0b3JzIHN1cnJvdW5kaW5nIHRoZSBwbGFjZWhvbGRlci5cblx0XHQgKiBAc2luY2UgMy40LjVcblx0XHQgKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzExNzg2XG5cdFx0ICovXG5cdFx0bGV0IGV4aXN0Tm9kZSA9XG5cdFx0XHR0aGlzLnJvb3Qucm9vdE5vZGVbIGZpZWxkTmFtZSBdXG5cdFx0XHR8fCB0aGlzLnJvb3Qucm9vdE5vZGVbIGZpZWxkTmFtZSArICdbXScgXVxuXHRcdFx0fHwgdGhpcy5yb290LnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1maWVsZC1uYW1lPVwiJyArIGZpZWxkTmFtZSArICdcIl0nICk7XG5cblx0XHQvKipcblx0XHQgKiBXaGVuIHdlIGNhbGwgcXVlcnlTZWxlY3RvckFsbCBpdCByZXR1cm5zIGVtcHR5IE5vZGVMaXN0IGFycmF5IGlmIHRoZSBlbGVtZW50IG5vdCBmb3VuZCwgc28gd2UgbmVlZCB0byByZXNldCBpdFxuXHRcdCAqL1xuXHRcdGlmICggZXhpc3ROb2RlICYmIDAgPT09IGV4aXN0Tm9kZS5sZW5ndGggKSB7XG5cdFx0XHRleGlzdE5vZGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTQ1NDRcblx0XHQgKi9cblx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gZXhpc3ROb2RlICkge1xuXHRcdFx0Y29uc3QgZXNjID0gcyA9PiBzLnJlcGxhY2UoLyhbXFxcXF4kKis/LigpfHt9XFxbXFxdXSkvZywgJ1xcXFwkMScpO1xuXHRcdFx0Y29uc3QgZiA9IGVzYyggZmllbGROYW1lICk7XG5cblx0XHRcdGNvbnN0IHNlbGVjdG9yID1cblx0XHRcdFx0YFtuYW1lJD1cIlske2Z9XVwiXSxgICtcblx0XHRcdFx0YFtuYW1lJD1cIlske2Z9XVtdXCJdLGAgK1xuXHRcdFx0XHRgW25hbWUqPVwiWyR7Zn1dW1wiXWA7XG5cblx0XHRcdGNvbnN0IGZvdW5kID0gdGhpcy5yb290LnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG5cdFx0XHRpZiAoIGZvdW5kICYmIGZvdW5kLmxlbmd0aCApIHtcblx0XHRcdFx0ZXhpc3ROb2RlID0gZm91bmQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQHNlZSAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMzczMFxuXHRcdCAqIEBzaW5jZSAzLjQuNS4xXG5cdFx0ICovXG5cdFx0ZXhpc3ROb2RlID0gd3BGaWx0ZXJzKFxuXHRcdFx0J2pldC5mYi5mb3JtdWxhLm5vZGUuZXhpc3RzJyxcblx0XHRcdGV4aXN0Tm9kZSxcblx0XHRcdGZpZWxkTmFtZSwgXG5cdFx0XHR0aGlzXG5cdFx0KTtcblxuXHRcdHJldHVybiBleGlzdE5vZGU7XG5cdH0sXG5cblxuXHQvKipcblx0ICogQHBhcmFtICBjdXJyZW50IHtTdHJpbmd9XG5cdCAqIEByZXR1cm4geyhmdW5jdGlvbigpOiAqKXwqfVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblx0b2JzZXJ2ZU1hY3JvKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBudWxsID09PSB0aGlzLmZvcm11bGEgKSB7XG5cdFx0XHR0aGlzLmZvcm11bGEgPSBjdXJyZW50O1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLXVudXNlZC12YXJzLWJlZm9yZS1yZXR1cm5cblx0XHRjb25zdCBbIG5hbWUsIC4uLmZpbHRlcnMgXSA9IGN1cnJlbnQuc3BsaXQoICd8JyApO1xuXHRcdGNvbnN0IHBhcnNlZE5hbWUgICAgICAgICAgID0gbmFtZS5tYXRjaCggL1tcXHdcXC06XSsvZyApO1xuXG5cblxuXHRcdGlmICggIXBhcnNlZE5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgWyBmaWVsZE5hbWUsIC4uLnBhcmFtcyBdID0gcGFyc2VkTmFtZTtcblxuXHRcdC8qKlxuXHRcdCAqIEBzZWUgICBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTM3MzBcblx0XHQgKiBAc2luY2UgMy40LjUuMSAobW92ZWQgdG8gYSBtZXRob2QgYW5kIGFkZGVkIGFkZGl0aW9uYWwgY2hlY2tzKVxuXHRcdCAqL1xuXHRcdGNvbnN0IGV4aXN0Tm9kZSA9IHRoaXMuaXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApO1xuXG5cblx0XHRpZiAoIGV4aXN0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoIGAlJHtmaWVsZE5hbWV9JWAsICdnJyApO1xuXG5cdFx0XHRsZXQgYWRqdXN0ZWRWYWx1ZSAgID0gMDtcblx0XHRcdGxldCBhZGp1c3RlZEZvcm11bGEgPSB0aGlzLmZvcm11bGE7XG5cdFx0XHRsZXQgbWF0Y2g7XG5cblx0XHRcdHdoaWxlICggbnVsbCAhPT0gKCBtYXRjaCA9IHJlZ2V4LmV4ZWMoIHRoaXMuZm9ybXVsYSApICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYmVmb3JlID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCAtIDEgXTtcblx0XHRcdFx0Y29uc3QgYWZ0ZXIgID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCBdO1xuXG5cdFx0XHRcdGlmICggJyonID09PSBiZWZvcmUgfHwgJy8nID09PSBiZWZvcmUgfHwgJyonID09PSBhZnRlciB8fCAnLycgPT09IGFmdGVyICkge1xuXHRcdFx0XHRcdGlmICggJy8nID09PSBiZWZvcmUgfHwgKCAnKicgPT09IGJlZm9yZSAmJiAnKicgPT09IGFmdGVyICkgKSB7XG5cdFx0XHRcdFx0XHRhZGp1c3RlZFZhbHVlID0gMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhZGp1c3RlZEZvcm11bGEgPSBhZGp1c3RlZEZvcm11bGEucmVwbGFjZSggbWF0Y2hbMF0sIGFkanVzdGVkVmFsdWUgKTtcblxuXHRcdFx0dGhpcy5mb3JtdWxhID0gYWRqdXN0ZWRGb3JtdWxhO1xuXG5cdFx0XHRyZXR1cm4gYWRqdXN0ZWRWYWx1ZTtcblx0XHR9XG5cblx0XHRjb25zdCByZWxhdGVkSW5wdXQgPSBmaWVsZE5hbWUgIT09ICd0aGlzJ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yb290LmdldElucHV0KCBmaWVsZE5hbWUgKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dDtcblxuXHRcdGlmICggIXJlbGF0ZWRJbnB1dCAmJiAhZmllbGROYW1lLmluY2x1ZGVzKCAnOjonICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tdW51c2VkLXZhcnMtYmVmb3JlLXJldHVyblxuXHRcdGNvbnN0IGZpbHRlcnNMaXN0ID0gZ2V0RmlsdGVycyggZmlsdGVycyApO1xuXG5cdFx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRcdGNvbnN0IGN1c3RvbVZhbHVlID0gd3BGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmN1c3RvbS5mb3JtdWxhLm1hY3JvJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdGZpZWxkTmFtZSxcblx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlKCksIGZpbHRlcnNMaXN0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlLCBmaWx0ZXJzTGlzdCApO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMucmVsYXRlZC5pbmNsdWRlcyggcmVsYXRlZElucHV0Lm5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xuXG5cdFx0XHR0aGlzLndhdGNoZXJzLnB1c2goXG5cdFx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoICFwYXJhbXM/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdFx0XHRcdHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSxcblx0XHRcdFx0ZmlsdGVyc0xpc3QsXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFsgYXR0ck5hbWUgXSA9IHBhcmFtcztcblxuXHRcdGlmICggIXJlbGF0ZWRJbnB1dC5hdHRycy5oYXNPd25Qcm9wZXJ0eSggYXR0ck5hbWUgKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0Jhc2VIdG1sQXR0cn1cblx0XHQgKi9cblx0XHRjb25zdCBodG1sQXR0ciA9IHJlbGF0ZWRJbnB1dC5hdHRyc1sgYXR0ck5hbWUgXTtcblxuXHRcdGlmICggIXRoaXMucmVsYXRlZEF0dHJzLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICkgKSB7XG5cdFx0XHR0aGlzLnJlbGF0ZWRBdHRycy5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICk7XG5cblx0XHRcdHRoaXMud2F0Y2hlcnMucHVzaChcblx0XHRcdFx0aHRtbEF0dHIudmFsdWUud2F0Y2goICgpID0+IHRoaXMuc2V0UmVzdWx0KCkgKSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICgpID0+IGFwcGx5RmlsdGVycyggaHRtbEF0dHIudmFsdWUuY3VycmVudCwgZmlsdGVyc0xpc3QgKTtcblx0fSxcblx0Y2FsY3VsYXRlU3RyaW5nKCkge1xuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybXVsYTtcblx0XHR9XG5cblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBhcHBseUZpbHRlcnM6IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgPSBmYWxzZSxcblx0XHQgICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XG5cblx0XHRyZXR1cm4gdGhpcy5wYXJ0cy5tYXAoIGN1cnJlbnQgPT4ge1xuXHRcdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY3VycmVudCApIHtcblxuXHRcdFx0XHRpZiAoICF0aGlzLmlucHV0Py5ub2Rlc1xuXHRcdFx0XHRcdHx8IGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzXG5cdFx0XHRcdFx0fHwgJ3N0cmluZycgIT09IHR5cGVvZiBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y3VycmVudCA9IHdwRmlsdGVycyhcblx0XHRcdFx0XHQnamV0LmZiLm9uQ2FsY3VsYXRlLnBhcnQnLFxuXHRcdFx0XHRcdGN1cnJlbnQsXG5cdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRyZXR1cm4gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcblx0XHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1mb3JtdWxhLWJlZm9yZS12YWx1ZScsXG5cdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMuaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gY3VycmVudCgpO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQgICAgICAgbnVsbCA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICAnJyA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICBOdW1iZXIuaXNOYU4oIHJlc3VsdCApXG5cdFx0XHQgICAgICAgKSA/IHRoaXMuZW1wdHlWYWx1ZSgpIDogcmVzdWx0O1xuXHRcdH0gKS5qb2luKCAnJyApO1xuXHR9LFxuXHRlbXB0eVZhbHVlKCkge1xuXHRcdHJldHVybiAnJztcblx0fSxcblx0Y2FsY3VsYXRlKCkge1xuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICYmICF0aGlzLmZvcmNlRnVuY3Rpb24gKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHRcdH1cblxuXHRcdGxldCBmb3JtdWxhID0gdGhpcy5jYWxjdWxhdGVTdHJpbmcoKTtcblxuXHRcdGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGZvcm11bGEpIHtcblx0XHRcdGZvcm11bGEgPSBmb3JtdWxhLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRuZXcgRnVuY3Rpb24oICdyZXR1cm4gJyArIGZvcm11bGEgKVxuXHRcdFx0KSgpO1xuXHRcdH1cblx0XHRjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0Ly9jb25zb2xlLmVycm9yKCBlcnJvciApO1xuXHRcdFx0dGhpcy5zaG93RXJyb3IoIGZvcm11bGEgKTtcblx0XHR9XG5cblx0fSxcblx0Y2xlYXJXYXRjaGVycygpIHtcblx0XHR0aGlzLndhdGNoZXJzLmZvckVhY2goXG5cdFx0XHRjdXJyZW50ID0+ICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXJyZW50ICYmIGN1cnJlbnQoKSxcblx0XHQpO1xuXHRcdHRoaXMud2F0Y2hlcnMgICAgID0gW107XG5cdFx0dGhpcy5yZWxhdGVkQXR0cnMgPSBbXTtcblx0XHR0aGlzLnJlbGF0ZWQgICAgICA9IFtdO1xuXHR9LFxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdHNob3dFcnJvciggZm9ybXVsYSApIHtcblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBjYWxjdWxhdGVkIGZvcm11bGEnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpLFxuXHRcdCk7XG5cblx0XHR0aGlzLnNob3dFcnJvckRldGFpbHMoIGZvcm11bGEgKTtcblxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0fSxcblx0c2hvd0Vycm9yRGV0YWlscyggZm9ybXVsYSApIHtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gaW5pdGlhbCBmb3JtdWxhXG5cdFx0XHRcdF9fKCAnSW5pdGlhbDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0dGhpcy5mb3JtdWxhLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBjb21wdXRlZCBmb3JtdWxhXG5cdFx0XHRcdF9fKCAnQ29tcHV0ZWQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdGZvcm11bGEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cblx0XHRpZiAoICF0aGlzLmlucHV0ICYmICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuaW5wdXQgKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGZpbGVkIG5hbWVcblx0XHRcdFx0XHRfXyggJ0ZpZWxkOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRcdHRoaXMuaW5wdXQucGF0aC5qb2luKCAnLicgKSxcblx0XHRcdFx0KSxcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMucm9vdC5wYXJlbnQuZmluZEluZGV4KCB0aGlzLnJvb3QgKTtcblxuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBwYXRoIHRvIGN1cnJlbnQgZmllbGRcblx0XHRcdFx0X18oICdTY29wZTogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdC4uLnRoaXMucm9vdC5wYXJlbnQucGF0aCxcblx0XHRcdFx0XHQtMSA9PT0gaW5kZXggPyAnJyA6IGluZGV4LFxuXHRcdFx0XHRdLmZpbHRlciggQm9vbGVhbiApLmpvaW4oICcuJyApLFxuXHRcdFx0KSxcblx0XHQpO1xuXHR9LFxuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRGb3JtdWxhO1xuIiwiZnVuY3Rpb24gYXBwbHlGaWx0ZXJzKCB2YWx1ZSwgZmlsdGVycyApIHtcblx0aWYgKCBudWxsID09PSBmaWx0ZXJzIHx8ICFmaWx0ZXJzPy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdGZvciAoIGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzICkge1xuXHRcdHZhbHVlID0gZmlsdGVyLmFwcGx5V2l0aFByb3BzKCB2YWx1ZSApO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBseUZpbHRlcnM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ3VycmVudERhdGUgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvQ3VycmVudERhdGUnO1xuaW1wb3J0IE1pbl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvTWluX0luX1NlYyc7XG5pbXBvcnQgTW9udGhfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL01vbnRoX0luX1NlYyc7XG5pbXBvcnQgSG91cl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvSG91cl9Jbl9TZWMnO1xuaW1wb3J0IERheV9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvRGF5X0luX1NlYyc7XG5pbXBvcnQgWWVhcl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvWWVhcl9Jbl9TZWMnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVyczogd3BBcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFN0YXRpY0Z1bmN0aW9ucyA9ICgpID0+IHdwQXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnN0YXRpYy5mdW5jdGlvbnMnLFxuXHRbXG5cdFx0Q3VycmVudERhdGUsXG5cdFx0TWluX0luX1NlYyxcblx0XHRNb250aF9Jbl9TZWMsXG5cdFx0SG91cl9Jbl9TZWMsXG5cdFx0RGF5X0luX1NlYyxcblx0XHRZZWFyX0luX1NlYyxcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUge0Jhc2VJbnRlcm5hbE1hY3JvW119XG4gKi9cbmxldCBzdGF0aWNGdW5jdGlvbnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIHNsdWdcbiAqIEByZXR1cm4ge2Jvb2xlYW58QmFzZUludGVybmFsTWFjcm99XG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uKCBzbHVnICkge1xuXHRpZiAoICFzdGF0aWNGdW5jdGlvbnMubGVuZ3RoICkge1xuXHRcdHN0YXRpY0Z1bmN0aW9ucyA9IGdldFN0YXRpY0Z1bmN0aW9ucygpO1xuXHR9XG5cblx0Zm9yICggY29uc3Qgc3RhdGljRnVuY3Rpb24gb2Ygc3RhdGljRnVuY3Rpb25zICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgc3RhdGljRnVuY3Rpb24oKTtcblxuXHRcdGlmICggY3VycmVudC5nZXRJZCgpICE9PSBzbHVnICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgcmVzdWx0ICAgIHtTdHJpbmd9XG4gKiBAcGFyYW0gIGZpZWxkTmFtZSB7U3RyaW5nfVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoQ29uc3ROYW1lc3BhY2UoXG5cdHJlc3VsdCxcblx0ZmllbGROYW1lLFxuKSB7XG5cdGlmICggIWZpZWxkTmFtZS5pbmNsdWRlcyggJ0NUOjonICkgKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRmaWVsZE5hbWUgPSBmaWVsZE5hbWUucmVwbGFjZSggJ0NUOjonLCAnJyApO1xuXG5cdGNvbnN0IHN0YXRpY0Z1bmMgPSBnZXRGdW5jdGlvbiggZmllbGROYW1lICk7XG5cblx0aWYgKCBmYWxzZSA9PT0gc3RhdGljRnVuYyApIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0cmV0dXJuIHN0YXRpY0Z1bmMuZ2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF0dGFjaENvbnN0TmFtZXNwYWNlOyIsImZ1bmN0aW9uIEJhc2VJbnRlcm5hbE1hY3JvKCkge1xufVxuXG5CYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgPSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcblx0LyoqXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdldElkICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXdyaXRlIHRoaXMgbWV0aG9kJyApO1xuXHR9LFxuXHRnZXRSZXN1bHQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJld3JpdGUgdGhpcyBtZXRob2QnICk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlSW50ZXJuYWxNYWNybzsiLCJpbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5cbmZ1bmN0aW9uIEN1cnJlbnREYXRlKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnQ3VycmVudERhdGUnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG5DdXJyZW50RGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudERhdGU7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIERheV9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkID0gKCkgPT4gJ0RheV9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5EYXlfSW5fU2VjO1xufVxuXG5EYXlfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBEYXlfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBIb3VyX0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgPSAoKSA9PiAnSG91cl9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5Ib3VyX0luX1NlYztcbn1cblxuSG91cl9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBNaW5fSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCA9ICgpID0+ICdNaW5fSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTWluX0luX1NlYztcbn1cblxuTWluX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWluX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gTW9udGhfSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnTW9udGhfSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTW9udGhfSW5fU2VjO1xufVxuXG5Nb250aF9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vbnRoX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gWWVhcl9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkICAgICA9ICgpID0+ICdZZWFyX0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLlllYXJfSW5fU2VjO1xufVxuXG5ZZWFyX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgWWVhcl9Jbl9TZWM7IiwiY29uc3QgQ29uc3RhbnRzID0ge1xuXHRNaWxsaV9Jbl9TZWM6IDEwMDAsXG5cdFNlY19Jbl9NaW46IDYwLFxuXHRNaW5fSW5fSG91cjogNjAsXG5cdEhvdXJfSW5fRGF5OiAyNCxcblx0RGF5X0luX01vbnRoOiAzMCxcblx0WWVhcl9Jbl9EYXk6IDM2NSxcblx0S2JfSW5fQnl0ZXM6IDEwMjQsXG59O1xuXG5Db25zdGFudHMuTWluX0luX1NlYyAgID0gQ29uc3RhbnRzLlNlY19Jbl9NaW4gKiBDb25zdGFudHMuTWlsbGlfSW5fU2VjO1xuQ29uc3RhbnRzLkhvdXJfSW5fU2VjICA9IENvbnN0YW50cy5NaW5fSW5fSG91ciAqIENvbnN0YW50cy5NaW5fSW5fU2VjO1xuQ29uc3RhbnRzLkRheV9Jbl9TZWMgICA9IENvbnN0YW50cy5Ib3VyX0luX0RheSAqIENvbnN0YW50cy5Ib3VyX0luX1NlYztcbkNvbnN0YW50cy5Nb250aF9Jbl9TZWMgPSBDb25zdGFudHMuRGF5X0luX01vbnRoICogQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG5Db25zdGFudHMuWWVhcl9Jbl9TZWMgID0gQ29uc3RhbnRzLlllYXJfSW5fRGF5ICogQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG5Db25zdGFudHMuTWJfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLktiX0luX0J5dGVzICogMTAyNDtcbkNvbnN0YW50cy5HYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuTWJfSW5fQnl0ZXMgKiAxMDI0O1xuQ29uc3RhbnRzLlRiX0luX0J5dGVzICA9IENvbnN0YW50cy5HYl9Jbl9CeXRlcyAqIDEwMjQ7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50czsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGREYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdGRheXMgPSBkYXlzID8gKyhcblx0XHRcdGRheXMudHJpbSgpXG5cdFx0KSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBjdXJyZW50LmdldERhdGUoKSArIGRheXMgKTtcblx0fTtcbn1cblxuQWRkRGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkSG91ckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRIb3VyJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91cnMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRob3VycyA9IGhvdXJzID8gKyhcblx0XHRcdGhvdXJzLnRyaW0oKVxuXHRcdCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSArIGhvdXJzICk7XG5cdH07XG59XG5cbkFkZEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkTWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZE1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbnV0ZXMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRtaW51dGVzID0gbWludXRlcyA/ICsoXG5cdFx0XHRtaW51dGVzLnRyaW0oKVxuXHRcdCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggY3VycmVudC5nZXRNaW51dGVzKCkgKyBtaW51dGVzICk7XG5cdH07XG59XG5cbkFkZE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRNb250aCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1vbnRocyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtb250aHMgPSBtb250aHMgPyArbW9udGhzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpICsgbW9udGhzICk7XG5cdH07XG59XG5cbkFkZERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEFkZFllYXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkWWVhcic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXJzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgKyB5ZWFycyApO1xuXHR9O1xufVxuXG5BZGRZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkWWVhckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBGYWxsQmFja0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdpZkVtcHR5Jztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZmFsbGJhY2sgKSB7XG5cdFx0cmV0dXJuICggaXNFbXB0eSh2YWx1ZSkgfHwgTnVtYmVyLmlzTmFOKHZhbHVlKSApID8gZmFsbGJhY2sgOiB2YWx1ZTtcblx0fTtcbn1cblxuRmFsbEJhY2tGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGYWxsQmFja0ZpbHRlcjsiLCJmdW5jdGlvbiBGaWx0ZXIoKSB7XG5cdHRoaXMucHJvcHMgPSBbXTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkZpbHRlci5wcm90b3R5cGUuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0U2x1ZyBpcyBlbXB0eScgKTtcbn07XG5GaWx0ZXIucHJvdG90eXBlLnNldFByb3BzICAgICAgID0gZnVuY3Rpb24gKCBwcm9wcyApIHtcblx0dGhpcy5wcm9wcy5wdXNoKCAuLi5wcm9wcyApO1xufTtcbkZpbHRlci5wcm90b3R5cGUuYXBwbHlXaXRoUHJvcHMgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRyZXR1cm4gdGhpcy5hcHBseSggdmFsdWUsIC4uLnRoaXMucHJvcHMgKTtcbn07XG4vKipcbiAqIEBwYXJhbSAgdmFsdWVcbiAqIEBwYXJhbSAgcHJvcHNcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuRmlsdGVyLnByb3RvdHlwZS5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIC4uLnByb3BzICkge1xuXHRyZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIExlbmd0aEZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdsZW5ndGgnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHJldHVybiB2YWx1ZT8ubGVuZ3RoID8/IDA7XG5cdH07XG59XG5cbkxlbmd0aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXREYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXkgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0ZGF5ID0gZGF5ID8gK2RheS50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggZGF5ICk7XG5cdH07XG59XG5cblNldERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0SG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdGhvdXIgPSBob3VyID8gK2hvdXIudHJpbSgpIDogMDtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBob3VyICk7XG5cdH07XG59XG5cblNldEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0TWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbiApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0bWluID0gbWluID8gK21pbi50cmltKCkgOiAwO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggbWluICk7XG5cdH07XG59XG5cblNldE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldE1vbnRoRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldE1vbnRoJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGggKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0bW9udGggPSBtb250aCA/ICttb250aC50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TW9udGgoIG1vbnRoICk7XG5cdH07XG59XG5cblNldE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXRZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldFllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFyICkge1xuXHRcdHllYXIgPSB5ZWFyID8gK3llYXIudHJpbSgpIDogZmFsc2U7XG5cblx0XHRpZiAoICF5ZWFyICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIHllYXIgKTtcblx0fTtcbn1cblxuU2V0WWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdERheUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJEYXknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0ZGF5cyA9IGRheXMgPyArZGF5cy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggY3VycmVudC5nZXREYXRlKCkgLSBkYXlzICk7XG5cdH07XG59XG5cblN1YnRyYWN0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3REYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdEhvdXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViSG91cic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0aG91ciA9IGhvdXIgPyAraG91ci50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGN1cnJlbnQuZ2V0SG91cnMoKSAtIGhvdXIgKTtcblx0fTtcbn1cblxuU3VidHJhY3RIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RNaW5GaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTWluJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWludXRlcyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtaW51dGVzID0gbWludXRlcyA/ICttaW51dGVzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBjdXJyZW50LmdldE1pbnV0ZXMoKSAtIG1pbnV0ZXMgKTtcblx0fTtcbn1cblxuU3VidHJhY3RNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0TW9udGhGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViTW9udGgnO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aHMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRtb250aHMgPSBtb250aHMgPyArbW9udGhzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpIC0gbW9udGhzICk7XG5cdH07XG59XG5cblN1YnRyYWN0TW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1vbnRoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RZZWFyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1YlllYXInO1xuXHR9O1xuXG5cdHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCB5ZWFycyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCBjdXJyZW50LmdldEZ1bGxZZWFyKCkgLSB5ZWFycyApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUaW1lc3RhbXBGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnVCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGltZTtcblx0fTtcbn1cblxuVGltZXN0YW1wRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXN0YW1wRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVG9EYXRlRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvRGF0ZSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGlzVVRDID0gdHJ1ZSApIHtcblx0XHQvLyBDb252ZXJ0IHN0cmluZyAndHJ1ZScvJ2ZhbHNlJyB0byBib29sZWFuXG5cdFx0aWYgKCB0eXBlb2YgaXNVVEMgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0Ly8gUmVtb3ZlIHF1b3RlcyBhbmQgdHJpbVxuXHRcdFx0Y29uc3QgY2xlYW5lZCA9IGlzVVRDLnRyaW0oKS5yZXBsYWNlKCAvXlsnXCJdfFsnXCJdJC9nLCAnJyApO1xuXHRcdFx0Y29uc3QgbG93ZXIgICA9IGNsZWFuZWQudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aXNVVEMgPSBsb3dlciAhPT0gJ2ZhbHNlJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNVVEMgPSBCb29sZWFuKCBpc1VUQyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b0RhdGUoIG5ldyBEYXRlKCB2YWx1ZSApLCBpc1VUQyApO1xuXHR9O1xufVxuXG5Ub0RhdGVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyB0b0RhdGVUaW1lIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVG9EYXRlVGltZUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b0RhdGVUaW1lJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaXNVVEMgPSBmYWxzZSApIHtcblx0XHQvLyBDb252ZXJ0IHN0cmluZyAndHJ1ZScvJ2ZhbHNlJyB0byBib29sZWFuXG5cdFx0aWYgKCB0eXBlb2YgaXNVVEMgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0Ly8gUmVtb3ZlIHF1b3RlcyBhbmQgdHJpbVxuXHRcdFx0Y29uc3QgY2xlYW5lZCA9IGlzVVRDLnRyaW0oKS5yZXBsYWNlKCAvXlsnXCJdfFsnXCJdJC9nLCAnJyApO1xuXHRcdFx0Y29uc3QgbG93ZXIgICA9IGNsZWFuZWQudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aXNVVEMgPSBsb3dlciAhPT0gJ2ZhbHNlJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNVVEMgPSBCb29sZWFuKCBpc1VUQyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b0RhdGVUaW1lKCBuZXcgRGF0ZSggdmFsdWUgKSwgaXNVVEMgKTtcblx0fTtcbn1cblxuVG9EYXRlVGltZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRGF0ZVRpbWVGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvRGF5SW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b0RheUluTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9EQVlfTVMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9EQVlfTVM7XG5cdH07XG59XG5cblRvRGF5SW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRGF5SW5Nc0ZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuZnVuY3Rpb24gVG9Ib3VySW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b0hvdXJJbk1zJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRjb25zdCBPTkVfSE9VUl9NUyA9IDYwICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9IT1VSX01TO1xuXHR9O1xufVxuXG5Ub0hvdXJJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9Ib3VySW5Nc0ZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuZnVuY3Rpb24gVG9NaW51dGVJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvTWludXRlSW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX01JTlVURV9NUyA9IDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfTUlOVVRFX01TO1xuXHR9O1xufVxuXG5Ub01pbnV0ZUluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb01pbnV0ZUluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvTW9udGhJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvTW9udGhJbk1zJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRjb25zdCBPTkVfTU9OVEhfTVMgPSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX01PTlRIX01TO1xuXHR9O1xufVxuXG5Ub01vbnRoSW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvTW9udGhJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgdG9UaW1lIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVG9UaW1lRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvVGltZSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGlzVVRDID0gdHJ1ZSApIHtcblx0XHQvLyBDb252ZXJ0IHN0cmluZyAndHJ1ZScvJ2ZhbHNlJyB0byBib29sZWFuXG5cdFx0aWYgKCB0eXBlb2YgaXNVVEMgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0Ly8gUmVtb3ZlIHF1b3RlcyBhbmQgdHJpbVxuXHRcdFx0Y29uc3QgY2xlYW5lZCA9IGlzVVRDLnRyaW0oKS5yZXBsYWNlKCAvXlsnXCJdfFsnXCJdJC9nLCAnJyApO1xuXHRcdFx0Y29uc3QgbG93ZXIgICA9IGNsZWFuZWQudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aXNVVEMgPSBsb3dlciAhPT0gJ2ZhbHNlJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXNVVEMgPSBCb29sZWFuKCBpc1VUQyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b1RpbWUoIG5ldyBEYXRlKCB2YWx1ZSApLCBpc1VUQyApO1xuXHR9O1xufVxuXG5Ub1RpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb1RpbWVGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvV2Vla0luTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9XZWVrSW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX1dFRUtfTVMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfV0VFS19NUztcblx0fTtcbn1cblxuVG9XZWVrSW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvV2Vla0luTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvWWVhckluTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9ZZWFySW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX1lFQVJfTVMgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9ZRUFSX01TO1xuXHR9O1xufVxuXG5Ub1llYXJJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9ZZWFySW5Nc0ZpbHRlcjsiLCJmdW5jdGlvbiB6ZXJvZmlsbCggbnVtYmVyLCBjb3VudCApIHtcblx0bnVtYmVyID0gJycgKyBudW1iZXI7XG5cblx0aWYgKCBudW1iZXIubGVuZ3RoID49IGNvdW50ICkge1xuXHRcdHJldHVybiBudW1iZXI7XG5cdH1cblxuXHRjb25zdCB6ZXJvcyA9IG5ldyBBcnJheSggY291bnQgLSBudW1iZXIubGVuZ3RoICkuZmlsbCggMCApO1xuXG5cdHJldHVybiB6ZXJvcyArIG51bWJlcjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZGF0ZSAge0RhdGV9XG4gKiBAcGFyYW0gaXNVdGNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZSggZGF0ZSwgaXNVdGMgPSB0cnVlICkge1xuXHRjb25zdCBtb250aCA9IGlzVXRjID8gZGF0ZS5nZXRVVENNb250aCgpIDogZGF0ZS5nZXRNb250aCgpO1xuXHRjb25zdCBkYXkgICA9IGlzVXRjID8gZGF0ZS5nZXRVVENEYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcblx0Y29uc3QgeWVhciAgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuXHRyZXR1cm4gW1xuXHRcdHllYXIsXG5cdFx0emVyb2ZpbGwoIG1vbnRoICsgMSwgMiApLFxuXHRcdHplcm9maWxsKCBkYXksIDIgKSxcblx0XS5qb2luKCAnLScgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZGF0ZSAge0RhdGV9XG4gKiBAcGFyYW0gaXNVdGNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZSggZGF0ZSwgaXNVdGMgPSB0cnVlICkge1xuXHRjb25zdCBob3VycyA9IGlzVXRjID8gZGF0ZS5nZXRVVENIb3VycygpIDogZGF0ZS5nZXRIb3VycygpO1xuXHRjb25zdCBtaW5zICA9IGlzVXRjID8gZGF0ZS5nZXRVVENNaW51dGVzKCkgOiBkYXRlLmdldE1pbnV0ZXMoKTtcblxuXHRyZXR1cm4gW1xuXHRcdHplcm9maWxsKCBob3VycywgMiApLFxuXHRcdHplcm9maWxsKCBtaW5zLCAyICksXG5cdF0uam9pbiggJzonICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGVUaW1lKCBkYXRlLCBpc1V0YyA9IGZhbHNlICkge1xuXHRyZXR1cm4gdG9EYXRlKCBkYXRlLCBpc1V0YyApICsgJ1QnICsgdG9UaW1lKCBkYXRlLCBpc1V0YyApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgdGltZU9yRGF0ZSB7U3RyaW5nfE51bWJlcn1cbiAqIEByZXR1cm4ge3t0aW1lOiBudW1iZXIsIHR5cGU6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoIHRpbWVPckRhdGUgKSB7XG5cdGlmICggIU51bWJlci5pc05hTiggK3RpbWVPckRhdGUgKSApIHtcblx0XHRyZXR1cm4geyB0aW1lOiArdGltZU9yRGF0ZSwgdHlwZTogJ251bWJlcicgfTtcblx0fVxuXG5cdHRpbWVPckRhdGUgPSB0aW1lT3JEYXRlLnRvU3RyaW5nKCk7XG5cblx0Y29uc3QgZGF0ZVBhcnRzID0gdGltZU9yRGF0ZS5zcGxpdCggJy0nICk7XG5cblx0aWYgKCBkYXRlUGFydHMubGVuZ3RoID4gMSApIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoIHRpbWVPckRhdGUgKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0aW1lOiBkYXRlLmdldFRpbWUoKSxcblx0XHRcdHR5cGU6ICdkYXRlJyxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3QgdGltZVBhcnRzID0gdGltZU9yRGF0ZS5zcGxpdCggJzonICk7XG5cdGNvbnN0IGNhbGxiYWNrcyA9IFtcblx0XHREYXRlLnByb3RvdHlwZS5zZXRIb3Vycyxcblx0XHREYXRlLnByb3RvdHlwZS5zZXRNaW51dGVzLFxuXHRcdERhdGUucHJvdG90eXBlLnNldFNlY29uZHMsXG5cdF07XG5cblx0Y29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XG5cblx0Zm9yICggY29uc3QgaW5kZXggaW4gdGltZVBhcnRzICkge1xuXHRcdGlmIChcblx0XHRcdCF0aW1lUGFydHMuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgfHxcblx0XHRcdCFjYWxsYmFja3MuaGFzT3duUHJvcGVydHkoIGluZGV4IClcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNhbGxiYWNrc1sgaW5kZXggXS5jYWxsKCB0aW1lLCB0aW1lUGFydHNbIGluZGV4IF0gKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dGltZTogdGltZS5nZXRUaW1lKCksXG5cdFx0dHlwZTogJ3RpbWUnLFxuXHR9O1xufVxuIiwiaW1wb3J0IExlbmd0aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyJztcbmltcG9ydCBGYWxsQmFja0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvRmFsbEJhY2tGaWx0ZXInO1xuaW1wb3J0IFRvRGF0ZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9EYXRlRmlsdGVyJztcbmltcG9ydCBUb1RpbWVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvVGltZUZpbHRlcic7XG5pbXBvcnQgVG9EYXRlVGltZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlcic7XG5pbXBvcnQgQWRkWWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkWWVhckZpbHRlcic7XG5pbXBvcnQgQWRkTW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyJztcbmltcG9ydCBBZGREYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZERheUZpbHRlcic7XG5pbXBvcnQgQWRkSG91ckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkSG91ckZpbHRlcic7XG5pbXBvcnQgQWRkTWluRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRNaW5GaWx0ZXInO1xuaW1wb3J0IFRpbWVzdGFtcEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVGltZXN0YW1wRmlsdGVyJztcbmltcG9ydCBTZXRIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRIb3VyRmlsdGVyJztcbmltcG9ydCBTZXRNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldE1pbkZpbHRlcic7XG5pbXBvcnQgU2V0RGF5RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXREYXlGaWx0ZXInO1xuaW1wb3J0IFNldFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldFllYXJGaWx0ZXInO1xuaW1wb3J0IFNldE1vbnRoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRNb250aEZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdEhvdXJGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0RGF5RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0TWluRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdE1vbnRoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdE1vbnRoRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0WWVhckZpbHRlcic7XG5pbXBvcnQgVG9EYXlJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RheUluTXNGaWx0ZXInO1xuaW1wb3J0IFRvTW9udGhJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub01vbnRoSW5Nc0ZpbHRlcic7XG5pbXBvcnQgVG9ZZWFySW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9ZZWFySW5Nc0ZpbHRlcic7XG5pbXBvcnQgVG9Ib3VySW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9Ib3VySW5Nc0ZpbHRlcic7XG5pbXBvcnQgVG9NaW51dGVJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub01pbnV0ZUluTXNGaWx0ZXInO1xuaW1wb3J0IFRvV2Vla0luTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvV2Vla0luTXNGaWx0ZXInO1xuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHR5cGUge0FycmF5PEZpbHRlcj59XG4gKi9cbmxldCBmaWx0ZXJzID0gW107XG5cbmNvbnN0IGdldEZpbHRlckl0ZW1zID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmZpbHRlcnMnLFxuXHRbXG5cdFx0U2V0WWVhckZpbHRlcixcblx0XHRTZXRNb250aEZpbHRlcixcblx0XHRTZXREYXlGaWx0ZXIsXG5cdFx0U2V0SG91ckZpbHRlcixcblx0XHRTZXRNaW5GaWx0ZXIsXG5cdFx0U3VidHJhY3RZZWFyRmlsdGVyLFxuXHRcdFN1YnRyYWN0TW9udGhGaWx0ZXIsXG5cdFx0U3VidHJhY3REYXlGaWx0ZXIsXG5cdFx0U3VidHJhY3RIb3VyRmlsdGVyLFxuXHRcdFN1YnRyYWN0TWluRmlsdGVyLFxuXHRcdEFkZFllYXJGaWx0ZXIsXG5cdFx0QWRkTW9udGhGaWx0ZXIsXG5cdFx0QWRkRGF5RmlsdGVyLFxuXHRcdEFkZEhvdXJGaWx0ZXIsXG5cdFx0QWRkTWluRmlsdGVyLFxuXHRcdExlbmd0aEZpbHRlcixcblx0XHRGYWxsQmFja0ZpbHRlcixcblx0XHRUb0RhdGVGaWx0ZXIsXG5cdFx0VG9UaW1lRmlsdGVyLFxuXHRcdFRvRGF0ZVRpbWVGaWx0ZXIsXG5cdFx0VGltZXN0YW1wRmlsdGVyLFxuXHRcdFRvRGF5SW5Nc0ZpbHRlcixcblx0XHRUb01vbnRoSW5Nc0ZpbHRlcixcblx0XHRUb1llYXJJbk1zRmlsdGVyLFxuXHRcdFRvSG91ckluTXNGaWx0ZXIsXG5cdFx0VG9NaW51dGVJbk1zRmlsdGVyLFxuXHRcdFRvV2Vla0luTXNGaWx0ZXIsXG5cdF0sXG4pO1xubGV0IHJlc3BvbnNlICAgICAgICAgPSBbXTtcblxuZnVuY3Rpb24gcHVzaEZpbHRlciggbmFtZSwgcHJvcHMgPSAnJyApIHtcblx0aWYgKCAhZmlsdGVycy5sZW5ndGggKSB7XG5cdFx0ZmlsdGVycyA9IGdldEZpbHRlckl0ZW1zKCk7XG5cdH1cblxuXHRsZXQgZmlsdGVyO1xuXG5cdGZvciAoIGxldCBjdXJyZW50IG9mIGZpbHRlcnMgKSB7XG5cdFx0Y3VycmVudCA9IG5ldyBjdXJyZW50KCk7XG5cblx0XHRpZiAoIG5hbWUgPT09IGN1cnJlbnQuZ2V0U2x1ZygpICkge1xuXHRcdFx0ZmlsdGVyID0gY3VycmVudDtcblxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhZmlsdGVyICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRwcm9wcyA9IHByb3BzLnNwbGl0KCAnLCcgKS5tYXAoXG5cdFx0aXRlbSA9PiBpdGVtLnRyaW0oKSxcblx0KTtcblxuXHRmaWx0ZXIuc2V0UHJvcHMoIHByb3BzICk7XG5cdHJlc3BvbnNlLnB1c2goIGZpbHRlciApO1xufVxuXG5mdW5jdGlvbiBnZXRGaWx0ZXJzKCBmaWx0ZXJzTGlzdCApIHtcblx0aWYgKCBudWxsID09PSBmaWx0ZXJzTGlzdCB8fCAhZmlsdGVyc0xpc3Q/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGZpbHRlck5hbWUgb2YgZmlsdGVyc0xpc3QgKSB7XG5cdFx0Y29uc3QgbWF0Y2hlcyA9IGZpbHRlck5hbWUubWF0Y2goIC9eKFxcdyspXFwoKFteKCldKylcXCkvICk7XG5cblx0XHRpZiAoIG51bGwgPT09IG1hdGNoZXMgKSB7XG5cdFx0XHRwdXNoRmlsdGVyKCBmaWx0ZXJOYW1lICk7XG5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHB1c2hGaWx0ZXIoIG1hdGNoZXNbIDEgXSwgbWF0Y2hlc1sgMiBdICk7XG5cdH1cblxuXHRjb25zdCB0ZW1wUmVzcG9uc2UgPSBbIC4uLnJlc3BvbnNlIF07XG5cdHJlc3BvbnNlICAgICAgICAgICA9IFtdO1xuXG5cdHJldHVybiB0ZW1wUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpbHRlcnM7IiwiaW1wb3J0IENhbGN1bGF0ZWRGb3JtdWxhIGZyb20gJy4vQ2FsY3VsYXRlZEZvcm11bGEnO1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBnZXRGaWx0ZXJzIGZyb20gJy4vZ2V0RmlsdGVycyc7XG5pbXBvcnQgYXBwbHlGaWx0ZXJzIGZyb20gJy4vYXBwbHlGaWx0ZXJzJztcbmltcG9ydCB7IHRvRGF0ZSwgdG9EYXRlVGltZSwgdG9UaW1lLCBnZXRUaW1lc3RhbXAgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0ZpbHRlcic7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cblx0KSxcblx0RmlsdGVyLFxuXHRDYWxjdWxhdGVkRm9ybXVsYSxcblx0QmFzZUludGVybmFsTWFjcm8sXG59O1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPz8ge31cblx0KSxcblx0Z2V0RmlsdGVycyxcblx0YXBwbHlGaWx0ZXJzLFxuXHR0b0RhdGUsXG5cdHRvRGF0ZVRpbWUsXG5cdHRvVGltZSxcblx0Z2V0VGltZXN0YW1wLFxufTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyQ29uc3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25zdCA/PyB7fVxuXHQpLFxuXHQuLi5Db25zdGFudHMsXG59OyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NDc1ODAvaG93LXRvLWRldGVjdC1zYWZhcmktY2hyb21lLWllLWZpcmVmb3gtYW5kLW9wZXJhLWJyb3dzZXJcblxuY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCJcbmNvbnN0IGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdCggdXNlckFnZW50ICkgfHxcblx0L2NvbnN0cnVjdG9yL2kudGVzdCggd2luZG93LkhUTUxFbGVtZW50ICkgfHxcblx0KFxuXHRcdCggcCApID0+IHtcblx0XHRcdHJldHVybiAnW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dJyA9PT0gcC50b1N0cmluZygpO1xuXHRcdH1cblx0KSggIXdpbmRvdy5zYWZhcmkgfHwgKFxuXHRcdHR5cGVvZiBzYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvblxuXHQpICk7XG5cbmNvbnN0IGVudmlyb25tZW50ID0ge1xuXHRzYWZhcmk6IGlzU2FmYXJpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL2F0dHJzL0Jhc2VIdG1sQXR0cic7XG5pbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL2F0dHJzL01heEZpbGVzSHRtbEF0dHInO1xuaW1wb3J0IE1heEZpbGVTaXplSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyJztcbmltcG9ydCBSZW1haW5pbmdDYWxjQXR0ciBmcm9tICcuL2F0dHJzL1JlbWFpbmluZ0NhbGNBdHRyJztcbmltcG9ydCBGaWxlRXh0ZW5zaW9uSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9GaWxlRXh0ZW5zaW9uSHRtbEF0dHInO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAcGFyYW0gIGNhbGxiYWNrcyB7RnVuY3Rpb25bXX1cbiAqIEByZXR1cm4ge1Byb21pc2U8Kj59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFsbFJlamVjdGVkKCBjYWxsYmFja3MgKSB7XG5cdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoXG5cdFx0Y2FsbGJhY2tzLm1hcCggY3VycmVudCA9PiBuZXcgUHJvbWlzZSggY3VycmVudCApICksXG5cdCk7XG5cblx0aWYgKCB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmRldm1vZGUgKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXHRcdGNvbnNvbGUuZ3JvdXAoICdhbGxSZWplY3RlZCcgKTtcblx0XHRjb25zb2xlLmluZm8oIC4uLnJlc3VsdHMgKTtcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cdH1cblxuXHRjb25zdCBpbnZhbGlkID0gcmVzdWx0cy5maWx0ZXIoXG5cdFx0KCBlcnJvciApID0+ICdyZWplY3RlZCcgPT09IGVycm9yLnN0YXR1cyxcblx0KTtcblxuXHRyZXR1cm4gaW52YWxpZC5tYXAoICggeyByZWFzb24sIHZhbHVlIH0gKSA9PiB7XG5cdFx0cmV0dXJuIHJlYXNvbj8ubGVuZ3RoID8gcmVhc29uWyAwIF0gOiAoXG5cdFx0XHRyZWFzb24gPz8gdmFsdWVcblx0XHQpO1xuXHR9ICk7XG59XG5cbmZ1bmN0aW9uIGdldExhbmd1YWdlKCkge1xuXHRjb25zdCBsYW5nID0gd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlcz8ubGVuZ3RoXG5cdCAgICAgICAgICAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWyAwIF1cblx0ICAgICAgICAgICAgIDogd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlO1xuXG5cdHJldHVybiBsYW5nID8/ICdlbi1VUyc7XG59XG5cbmNvbnN0IGdldElucHV0SHRtbEF0dHIgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuaW5wdXQuaHRtbC5hdHRycycsXG5cdFtcblx0XHQnbWluJyxcblx0XHQnbWF4Jyxcblx0XHQnbWluTGVuZ3RoJyxcblx0XHQnbWF4TGVuZ3RoJyxcblx0XHRNYXhGaWxlc0h0bWxBdHRyLFxuXHRcdE1heEZpbGVTaXplSHRtbEF0dHIsXG5cdFx0UmVtYWluaW5nQ2FsY0F0dHIsXG5cdFx0RmlsZUV4dGVuc2lvbkh0bWxBdHRyLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7QmFzZUh0bWxBdHRyW119XG4gKi9cbmxldCBpbnB1dEh0bWxBdHRycyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldERlZmF1bHRBdHRyQnlOYW1lKCBuYW1lICkge1xuXHRjb25zdCBhdHRyICAgID0gbmV3IEJhc2VIdG1sQXR0cigpO1xuXHRhdHRyLmF0dHJOYW1lID0gbmFtZTtcblxuXHRyZXR1cm4gYXR0cjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cbiAqL1xuZnVuY3Rpb24gc2V0QXR0cnMoIGlucHV0ICkge1xuXHRpZiAoICFpbnB1dEh0bWxBdHRycy5sZW5ndGggKSB7XG5cdFx0aW5wdXRIdG1sQXR0cnMgPSBnZXRJbnB1dEh0bWxBdHRyKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBpbnB1dEh0bWxBdHRyIG9mIGlucHV0SHRtbEF0dHJzICkge1xuXHRcdGxldCBjdXJyZW50O1xuXHRcdGlmICggJ3N0cmluZycgPT09IHR5cGVvZiBpbnB1dEh0bWxBdHRyICkge1xuXHRcdFx0Y3VycmVudCA9IGdldERlZmF1bHRBdHRyQnlOYW1lKCBpbnB1dEh0bWxBdHRyICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y3VycmVudCA9IG5ldyBpbnB1dEh0bWxBdHRyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggaW5wdXQgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpbnB1dC5hdHRyc1sgY3VycmVudC5hdHRyTmFtZSBdID0gY3VycmVudDtcblxuXHRcdGN1cnJlbnQuc2V0SW5wdXQoIGlucHV0ICk7XG5cdFx0Y3VycmVudC5vYnNlcnZlKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdG9IVE1MKCB0ZXh0ICkge1xuXHRjb25zdCB0ZW1wbGF0ZSAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHRlbXBsYXRlLmlubmVySFRNTCA9IHRleHQudHJpbSgpO1xuXG5cdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50O1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KCB2YWx1ZSApIHtcblx0aWYgKCAnYm9vbGVhbicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gIXZhbHVlO1xuXHR9XG5cblx0aWYgKCBudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKCAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICYmICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiAhT2JqZWN0LmtleXMoIHZhbHVlICk/Lmxlbmd0aDtcblx0fVxuXG5cdGlmICggJ251bWJlcicgPT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gMCA9PT0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gIXZhbHVlPy5sZW5ndGg7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBpc1Zpc2libGUoIG5vZGUgKSB7XG5cdHJldHVybiAoXG5cdFx0bm9kZT8uaXNDb25uZWN0ZWQgJiYgbnVsbCAhPT0gbm9kZT8ub2Zmc2V0UGFyZW50XG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFRvcCggbm9kZSApIHtcblx0Y29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0Y29uc3QgbWF5YmVXaW5kb3cgPSBnZXRTY3JvbGxQYXJlbnQoIG5vZGUgKTtcblxuXHRyZXR1cm4gcmVjdD8udG9wICsgKFxuXHRcdG1heWJlV2luZG93Py5zY3JvbGxZID8/IDBcblx0KTtcbn1cblxuY29uc3QgZ2V0Tm9kZSA9IGN1cnJlbnQgPT4gKFxuXHRjdXJyZW50LnNjcm9sbEhlaWdodCA+IGN1cnJlbnQuY2xpZW50SGVpZ2h0ID8gY3VycmVudCA6IGZhbHNlXG4pO1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoIG5vZGUgKSB7XG5cblx0Ly8gamV0LXBvcHVwIGNvbXBhdGliaWxpdHlcblx0bGV0IGNvbnRhaW5lciA9IG5vZGUuY2xvc2VzdCggJy5qZXQtcG9wdXBfX2NvbnRhaW5lci1pbm5lcicgKTtcblxuXHRpZiAoIGNvbnRhaW5lciApIHtcblx0XHRyZXR1cm4gZ2V0Tm9kZSggY29udGFpbmVyICk7XG5cdH1cblxuXHQvLyBlbGVtZW50b3ItcHJvIHBvcHVwIGNvbXBhdGliaWxpdHlcblx0Y29udGFpbmVyID0gbm9kZS5jbG9zZXN0KCAnLmVsZW1lbnRvci1wb3B1cC1tb2RhbCAuZGlhbG9nLW1lc3NhZ2UnICk7XG5cblx0aWYgKCBjb250YWluZXIgKSB7XG5cdFx0cmV0dXJuIGdldE5vZGUoIGNvbnRhaW5lciApO1xuXHR9XG5cblx0cmV0dXJuIHdpbmRvdztcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzIHtJbnB1dERhdGFbXX1cbiAqL1xuZnVuY3Rpb24gZm9jdXNPbkludmFsaWRJbnB1dCggaW5wdXRzICkge1xuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0aWYgKCBpbnB1dC5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhaW5wdXQucmVwb3J0aW5nLmhhc0F1dG9TY3JvbGwoKSAmJiBpbnB1dC5vbkZvY3VzKCk7XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlVc2VyQWdlbnRzKCkge1xuXHRmb3IgKCBjb25zdCBbIG5hbWUsIGlzQWN0aXZlIF0gb2YgT2JqZWN0LmVudHJpZXMoIGVudmlyb25tZW50ICkgKSB7XG5cdFx0aWYgKCAhaXNBY3RpdmUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCBgamV0LS11YS0keyBuYW1lIH1gICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaXNVQSggYnJvd3NlciApIHtcblx0cmV0dXJuIGVudmlyb25tZW50Py5bIGJyb3dzZXIgXTtcbn1cblxuZXhwb3J0IHtcblx0YWxsUmVqZWN0ZWQsXG5cdGdldExhbmd1YWdlLFxuXHRzZXRBdHRycyxcblx0dG9IVE1MLFxuXHRpc0VtcHR5LFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdGlzVmlzaWJsZSxcblx0Z2V0U2Nyb2xsUGFyZW50LFxuXHRpc1VBLFxuXHRhcHBseVVzZXJBZ2VudHMsXG59OyIsImltcG9ydCBDYWxjdWxhdGVkRm9ybXVsYSBmcm9tICcuLi9jYWxjLm1vZHVsZS9DYWxjdWxhdGVkRm9ybXVsYSc7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5mdW5jdGlvbiBDYWxjdWxhdGVkSHRtbFN0cmluZyhcblx0cm9vdCxcblx0eyB3aXRoUHJlZml4ID0gdHJ1ZSwgbWFjcm9Ib3N0ID0gZmFsc2UsIC4uLm9wdGlvbnMgfSA9IHt9LFxuKSB7XG5cdENhbGN1bGF0ZWRGb3JtdWxhLmNhbGwoIHRoaXMsIHJvb3QsIG9wdGlvbnMgKTtcblxuXHRpZiAoIHdpdGhQcmVmaXggKSB7XG5cdFx0dGhpcy5yZWdleHAgPSAvSkZCX0ZJRUxEOjooLispL2dpO1xuXHR9XG5cblx0dGhpcy5tYWNyb0hvc3QgPSBtYWNyb0hvc3QgfHwgZmFsc2U7XG5cblx0dGhpcy5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0ICRmaWVsZE5vZGUgPSBqUXVlcnkoIGlucHV0Lm5vZGVzWyAwIF0gKTtcblx0XHRjb25zdCAkbWFjcm9Ib3N0ID0gdGhpcy5tYWNyb0hvc3QgPyBqUXVlcnkoIHRoaXMubWFjcm9Ib3N0ICkgOiBmYWxzZTtcblxuXHRcdGxldCBmaWVsZFZhbHVlID0gYXBwbHlGaWx0ZXJzKFxuXHRcdFx0J2pldC5mYi5tYWNyby5maWVsZC52YWx1ZScsXG5cdFx0XHRmYWxzZSxcblx0XHRcdCRmaWVsZE5vZGUsXG5cdFx0XHQkbWFjcm9Ib3N0LFxuXHRcdCk7XG5cblx0XHRmaWVsZFZhbHVlID0gd3A/Lmhvb2tzPy5hcHBseUZpbHRlcnNcblx0XHRcdD8gd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcblx0XHRcdFx0ZmllbGRWYWx1ZSxcblx0XHRcdFx0JGZpZWxkTm9kZSxcblx0XHRcdFx0JG1hY3JvSG9zdCxcblx0XHRcdClcblx0XHRcdDogZmllbGRWYWx1ZTtcblxuXHRcdHJldHVybiBmYWxzZSA9PT0gZmllbGRWYWx1ZSA/IGlucHV0LnZhbHVlLmN1cnJlbnQgOiBmaWVsZFZhbHVlO1xuXHR9LmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLm9uTWlzc2luZ1BhcnQgPSBmdW5jdGlvbiAoKSB7fTtcbn1cblxuQ2FsY3VsYXRlZEh0bWxTdHJpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlICk7XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5jYWxjdWxhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdHJldHVybiB0aGlzLmZvcm11bGE7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5wYXJ0c1xuXHRcdC5tYXAoICggY3VycmVudCApID0+IHtcblx0XHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGN1cnJlbnQgKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBjdXJyZW50KCk7XG5cblx0XHRcdHJldHVybiAoIG51bGwgPT09IHJlc3VsdCB8fCAnJyA9PT0gcmVzdWx0ICkgPyAnJyA6IHJlc3VsdDtcblx0XHR9IClcblx0XHQuam9pbiggJycgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRIdG1sU3RyaW5nO1xuIiwiZnVuY3Rpb24qIGl0ZXJhdGVDb21tZW50cyhcblx0cm9vdE5vZGUsIGFjY2VwdENhbGxiYWNrID0gKCkgPT4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUICkge1xuXHQvLyBGb3VydGggYXJndW1lbnQsIHdoaWNoIGlzIGFjdHVhbGx5IG9ic29sZXRlIGFjY29yZGluZyB0byB0aGVcblx0Ly8gRE9NNCBzdGFuZGFyZCwgaXMgcmVxdWlyZWQgaW4gSUUgMTFcblx0Y29uc3QgaXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoXG5cdFx0cm9vdE5vZGUsXG5cdFx0Tm9kZUZpbHRlci5TSE9XX0NPTU1FTlQsXG5cdFx0e1xuXHRcdFx0YWNjZXB0Tm9kZTogYWNjZXB0Q2FsbGJhY2ssXG5cdFx0fSxcblx0KTtcblx0bGV0IGN1ck5vZGU7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG5cdHdoaWxlICggY3VyTm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkgKSB7XG5cdFx0Y3VyTm9kZS5ub2RlVmFsdWUgPSBjdXJOb2RlLm5vZGVWYWx1ZS50cmltKCk7XG5cblx0XHR5aWVsZCBjdXJOb2RlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdGVDb21tZW50czsiLCJpbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaXRlcmF0ZUNvbW1lbnRzJztcblxuZnVuY3Rpb24qIGl0ZXJhdGVKZmJDb21tZW50cyggcm9vdE5vZGUgKSB7XG5cdGNvbnN0IGFjY2VwdENhbGxiYWNrID0gbm9kZSA9PiB7XG5cdFx0cmV0dXJuIG5vZGUudGV4dENvbnRlbnQuaW5jbHVkZXMoICdKRkJfRklFTEQ6OicgKTtcblx0fTtcblxuXHR5aWVsZCogaXRlcmF0ZUNvbW1lbnRzKCByb290Tm9kZSwgYWNjZXB0Q2FsbGJhY2sgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0ZUpmYkNvbW1lbnRzOyIsImltcG9ydCBDYWxjdWxhdGVkSHRtbFN0cmluZyBmcm9tICcuL0NhbGN1bGF0ZWRIdG1sU3RyaW5nJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcblx0ICAgICAgc3ByaW50ZixcbiAgICAgIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEBwYXJhbSBjb21tZW50XG4gKiBAcGFyYW0gcm9vdCAgICB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZUNvbW1lbnQoIGNvbW1lbnQsIHJvb3QgKSB7XG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBjb21tZW50LnRleHRDb250ZW50ICk7XG5cblx0aWYgKCAhZm9ybXVsYS5wYXJ0cz8ubGVuZ3RoICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBodG1sIG1hY3JvJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBjb21tZW50IHRleHRcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRjb21tZW50LnRleHRDb250ZW50LFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXG5cdGNvbnN0IHByZXZTaWJsaW5nID0gY29tbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcblx0XHR3cmFwcGVyLFxuXHRcdGNvbW1lbnQsXG5cdCk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0cHJldlNpYmxpbmcuaW5uZXJIVE1MID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0Y29tbWVudC5qZmJPYnNlcnZlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVDb21tZW50OyIsImltcG9ydCBDYWxjdWxhdGVkSHRtbFN0cmluZyBmcm9tICcuL0NhbGN1bGF0ZWRIdG1sU3RyaW5nJztcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSAgICAge05vZGV9XG4gKiBAcGFyYW0gYXR0ck5hbWUge3N0cmluZ31cbiAqIEBwYXJhbSByb290ICAgICB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZU1hY3JvQXR0ciggbm9kZSwgYXR0ck5hbWUsIHJvb3QgKSB7XG5cdGNvbnN0IG5vZGVWYWx1ZSA9IG5vZGVbIGF0dHJOYW1lIF0gPz8gJyc7XG5cblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIG5vZGVWYWx1ZSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBub2RlVmFsdWUgKTtcblxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRub2RlWyBhdHRyTmFtZSBdID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZU1hY3JvQXR0cjsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZX1cbiAqIEBwYXJhbSByb290IHtPYnNlcnZhYmxlfVxuICovXG5mdW5jdGlvbiBvYnNlcnZlTm9kZSggbm9kZSwgcm9vdCApIHtcblx0aWYgKCAhbm9kZS5fX2pmYk1hY3JvVGVtcGxhdGUgKSB7XG5cdFx0bm9kZS5fX2pmYk1hY3JvVGVtcGxhdGUgPSBub2RlLmlubmVySFRNTDtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QsIHtcblx0XHR3aXRoUHJlZml4OiBmYWxzZSxcblx0XHRtYWNyb0hvc3Q6IG5vZGUsXG5cdH0gKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBgJSR7IG5vZGUuZGF0YXNldC5qZmJNYWNybyB9JWAgKTtcblxuXHRpZiAoICFmb3JtdWxhLnBhcnRzPy5sZW5ndGggKSB7XG5cdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXHRcdGNvbnNvbGUuZ3JvdXAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J0pldEZvcm1CdWlsZGVyOiBZb3UgaGF2ZSBpbnZhbGlkIGh0bWwgbWFjcm8nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIG1hY3JvXG5cdFx0XHRcdF9fKCAnQ29udGVudDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0bm9kZS5kYXRhc2V0LmpmYk1hY3JvLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRmb3JtdWxhLmNsZWFyV2F0Y2hlcnMoKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGUuZGF0YXNldC5qZmJPYnNlcnZlZCA9IDE7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0bGV0IGh0bWwgPSBTdHJpbmcoIGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCkgKTtcblxuXHRcdGNvbnN0IGhhc1RleHRhcmVhID0gbm9kZS5xdWVyeVNlbGVjdG9yPy4oICd0ZXh0YXJlYScgKTtcblxuXHRcdGlmICggaGFzVGV4dGFyZWEgKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKCAvXFxyXFxufFxccnxcXG4vZywgJzxicj4nICk7XG5cdFx0fVxuXG5cdFx0bm9kZS5pbm5lckhUTUwgPSBodG1sO1xuXHR9O1xuXG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVOb2RlO1xuIiwiZnVuY3Rpb24gcXVlcnlCeUF0dHJWYWx1ZSggcm9vdE5vZGUsIHZhbHVlICkge1xuXHRjb25zdCB7IHJlcGxhY2VBdHRycyA9IFtdIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuXHRjb25zdCBxdWVyeVNlbGVjdG9yID0gW107XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcmVwbGFjZUF0dHJzLmxlbmd0aDsgaSsrICkge1xuXHRcdHF1ZXJ5U2VsZWN0b3IucHVzaCggYFskeyByZXBsYWNlQXR0cnNbIGkgXSB9Kj1cIiR7IHZhbHVlIH1cIl1gICk7XG5cdH1cblxuXHRyZXR1cm4gcm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggcXVlcnlTZWxlY3Rvci5qb2luKCAnLCAnICkgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlCeUF0dHJWYWx1ZTsiLCJpbXBvcnQgaW5pdEZvcm0gZnJvbSAnLi9pbml0Rm9ybSc7XG5cbmZ1bmN0aW9uIGluaXRFbGVtZW50b3IoKSB7XG5cdGlmICggISB3aW5kb3cuZWxlbWVudG9yRnJvbnRlbmQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHdpZGdldHMgPSB7XG5cdFx0J2pldC1lbmdpbmUtYm9va2luZy1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcblx0XHQnamV0LWZvcm0tYnVpbGRlci1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcblx0fTtcblxuXHRqUXVlcnkuZWFjaCggd2lkZ2V0cywgZnVuY3Rpb24oIHdpZGdldCwgY2FsbGJhY2sgKSB7XG5cdFx0d2luZG93LmVsZW1lbnRvckZyb250ZW5kLmhvb2tzLmFkZEFjdGlvbiggJ2Zyb250ZW5kL2VsZW1lbnRfcmVhZHkvJyArIHdpZGdldCwgY2FsbGJhY2sgKTtcblx0fSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0RWxlbWVudG9yOyIsImltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL09ic2VydmFibGUnO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgPz8ge307XG5cbmZ1bmN0aW9uIGluaXRGb3JtKCAkc2NvcGUgKSB7XG5cdGNvbnN0IGZvcm0gPSAkc2NvcGVbIDAgXS5xdWVyeVNlbGVjdG9yKCAnZm9ybS5qZXQtZm9ybS1idWlsZGVyJyApO1xuXG5cdGlmICggIWZvcm0gKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cblx0d2luZG93LkpldEZvcm1CdWlsZGVyWyBmb3JtLmRhdGFzZXQuZm9ybUlkIF0gPSBvYnNlcnZhYmxlO1xuXG5cdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2luaXQnLFxuXHRcdFsgJHNjb3BlLCBvYnNlcnZhYmxlIF0sXG5cdCk7XG5cblx0b2JzZXJ2YWJsZS5vYnNlcnZlKCBmb3JtICk7XG5cblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWZ0ZXItaW5pdCcsXG5cdFx0WyAkc2NvcGUsIG9ic2VydmFibGUgXSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEZvcm07IiwiaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL0lucHV0RGF0YSc7XG5pbXBvcnQgeyBpc0NoYW5nZVR5cGUgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XG5pbXBvcnQgeyBTVFJJQ1RfTU9ERSB9IGZyb20gJy4uL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5cbmZ1bmN0aW9uIENoYW5nZURhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzQ2hhbmdlVHlwZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0fSApO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdGlmICggdGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcblx0fTtcblxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5zaWxlbmNlU2V0KCAnJyApO1xuXHR9O1xufVxuXG5DaGFuZ2VEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlRGF0YTsiLCJpbXBvcnQgTG9hZGluZ1JlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2snO1xuaW1wb3J0IHsgZ2V0U2lnbmFsIH0gZnJvbSAnLi4vc2lnbmFscy9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVwb3J0IH0gZnJvbSAnLi4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRQYXJzZWROYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBpc1Zpc2libGUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgU1RSSUNUX01PREUgfSBmcm9tICcuLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xuXG5jb25zdCB7IGRvQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJbnB1dERhdGF9XG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lICAgIE5hbWUgb2YgaHRtbCBmaWVsZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGluZyBzcGVjaWFsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyc1xuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICAgICAgIFByZXBhcmVkIG5hbWUgb2ZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmllbGRcbiAqIEBwcm9wZXJ0eSB7SFRNTElucHV0RWxlbWVudHwqW119ICAgICAgICAgICAgICAgbm9kZXMgICAgICBSZWxhdGVkIG5vZGVzXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlVmFyfSAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICAgUmVhY3RpdmUgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7Q29uZGl0aW9uQ2hlY2tlcnxudWxsfSAgICAgICAgICAgICAgY2hlY2tlciAgICBDb25kaXRpb24gY2hlY2tlclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgYnlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25kaXRpb25hbCBCbG9ja1xuICogQHByb3BlcnR5IHsqfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjVmFsdWUgIENhbGN1bGF0ZWQgdmFsdWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIGJ5IENhbGN1bGF0ZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWVsZFxuICogQHByb3BlcnR5IHtBZHZhbmNlZFJlcG9ydGluZ3xCcm93c2VyUmVwb3J0aW5nfSByZXBvcnRpbmcgIFJlcG9ydGluZyBvYmplY3RcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdmFsaWRhdGlvbiBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93aW5nIGVycm9yc1xuICogQHByb3BlcnR5IHtPYnNlcnZhYmxlfSAgICAgICAgICAgICAgICAgICAgICAgICByb290ICAgICAgIE5lYXJlc3Qgb2JzZXJ2YWJsZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLCBjb3VsZCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyBvZiB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRlclxuICogQHByb3BlcnR5IHtQYWdlU3RhdGV9ICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlICAgICAgIFJlbGF0ZWQgcGFnZSBpblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc3RlcCBmb3JtXG4gKiBAcHJvcGVydHkge0xvYWRpbmdSZWFjdGl2ZVZhcn0gICAgICAgICAgICAgICAgIGxvYWRpbmcgICAgUmVhY3RpdmUgdmFyIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlIHZpc3VhbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlIG9mIHRoZSBmaWVsZFxuICogQHByb3BlcnR5IHtPYmplY3Q8UmVhY3RpdmVWYXI+fSAgICAgICAgICAgICAgICBhdHRycyAgICAgIE9iamVjdCB3aXRoXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RpdmUgYXR0cmlidXRlc1xuICogQHByb3BlcnR5IHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkIElzIHJlcXVpcmVkIGZpZWxkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Igbm90XG4gKiBAcHJvcGVydHkge251bGx8UmVhY3RpdmVIb29rfSAgICAgICAgICAgICAgICAgIGVudGVyS2V5ICAgVXNlZCBmb3IgaGFuZGxpbmdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lciBob29rcyBvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNzIEVudGVyIGJ1dHRvblxuICogQHByb3BlcnR5IHtudWxsfHN0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGUgIFR5cGUgaWRlbnRpZmllciBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaWVsZFxuICovXG5mdW5jdGlvbiBJbnB1dERhdGEoKSB7XG5cdHRoaXMucmF3TmFtZSA9ICcnO1xuXHR0aGlzLm5hbWUgICAgPSAnJztcblx0dGhpcy5jb21tZW50ID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXXxIVE1MSW5wdXRFbGVtZW50W119XG5cdCAqL1xuXHR0aGlzLm5vZGVzID0gW107XG5cdHRoaXMuYXR0cnMgICAgICAgICA9IHt9O1xuXHR0aGlzLmVudGVyS2V5ICAgICAgPSBudWxsO1xuXHR0aGlzLmlucHV0VHlwZSAgICAgPSBudWxsO1xuXHR0aGlzLm9mZnNldE9uRm9jdXMgPSA3NTtcblxuXHQvKipcblx0ICogUGF0aCBmcm9tIHRvcCBvZiBmb3JtIHRvIGN1cnJlbnQgZmllbGQgbmFtZVxuXHQgKiBFeC46IFsgJ3JlcGVhdGVyX25hbWUnLCAwLCAndGV4dF9maWVsZCcgXVxuXHQgKiBXaGVyZTpcblx0ICogIC0gJ3JlcGVhdGVyX25hbWUnOiBuYW1lIG9mIHJlcGVhdGVyLCB3aGVyZSBjdXJyZW50IGZpZWxkIGlzIHBsYWNlZFxuXHQgKiAgLSAwOiBpbmRleCBvZiByZXBlYXRlciByb3csIHdoZXJlIGN1cnJlbnQgZmllbGQgaXMgcGxhY2VkXG5cdCAqICAtICd0ZXh0X2ZpZWxkJzogbmFtZSBvZiBjdXJyZW50IGZpZWxkIG5hbWVcblx0ICogQHR5cGUge0FycmF5PHN0cmluZyB8IG51bWJlcj59XG5cdCAqL1xuXHR0aGlzLnBhdGggPSBbXTtcblxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dGhpcy52YWx1ZSA9IHRoaXMuZ2V0UmVhY3RpdmUoKTtcblx0dGhpcy52YWx1ZS53YXRjaCggdGhpcy5vbkNoYW5nZS5iaW5kKCB0aGlzICkgKTtcblxuXHR0aGlzLmlzUmVxdWlyZWQgPSBmYWxzZTtcblx0dGhpcy5jYWxjVmFsdWUgID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9XG5cdCAqL1xuXHR0aGlzLnJlcG9ydGluZyA9IG51bGw7XG5cblx0dGhpcy5jaGVja2VyID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLnJvb3QgPSBudWxsO1xuXG5cdHRoaXMubG9hZGluZyA9IG5ldyBMb2FkaW5nUmVhY3RpdmVWYXIoIGZhbHNlICk7XG5cdHRoaXMubG9hZGluZy5tYWtlKCk7XG5cblx0LyoqXG5cdCAqIEluIENoZWNrYm94RGF0YSBjYXNlIHdlIGhhdmUganVzdCBtYWluIHNhbml0aXplciwgd2l0aG91dCBjYWxsYWJsZS5cblx0ICogU28gd2Ugc2V0IC5jYWxjVmFsdWUgaW5zaWRlIGNhbGxhYmxlLnJ1blNpZ25hbCgpXG5cdCAqXG5cdCAqIEFuZCB0byBwcmV2ZW50IHJlc2V0dGluZyAuY2FsY1ZhbHVlIGJ5IG9uQ2hhbmdlXG5cdCAqIHNldCB0aGlzIHByb3BlcnR5IHRvIEZBTFNFLlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaXNSZXNldENhbGNWYWx1ZSA9IHRydWU7XG5cdHRoaXMudmFsaWRhdGVUaW1lciAgICA9IGZhbHNlO1xuXHR0aGlzLnN0b3BWYWxpZGF0aW9uICAgPSBmYWxzZTtcblx0dGhpcy5hYm9ydENvbnRyb2xsZXIgID0gbnVsbDtcbn1cblxuSW5wdXREYXRhLnByb3RvdHlwZS5hdHRycyA9IHt9O1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbklucHV0RGF0YS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgZXZlbnQgPT4ge1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0fSApO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2JsdXInLCAoKSA9PiB7fSApO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2lucHV0JywgKCkgPT4ge1xuXHRcdGlmICggdGhpcy5yZXBvcnRpbmcgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMucmVwb3J0aW5nLnN3aXRjaEJ1dHRvbnNTdGF0ZSApIHtcblx0XHRcdHRoaXMucmVwb3J0aW5nLnN3aXRjaEJ1dHRvbnNTdGF0ZSggdHJ1ZSApO1xuXHRcdH1cblxuXHRcdHRoaXMuZGVib3VuY2VkUmVwb3J0KCk7XG5cdH0gKTtcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdCFTVFJJQ1RfTU9ERSAmJiBqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0aWYgKCB0aGlzLnZhbHVlLmN1cnJlbnQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmNhbGxhYmxlLmxvY2tUcmlnZ2VyKCk7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xuXHR9ICk7XG5cblx0aWYgKCAnaW5wdXQnICE9PSB0aGlzLmlucHV0VHlwZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLm1ha2VSZWFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5vbk9ic2VydmUoKTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMoKTtcblx0dGhpcy5zZXRWYWx1ZSgpO1xuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSgpO1xuXG5cdHRoaXMudmFsdWUubWFrZSgpO1xuXG5cdGRvQWN0aW9uKCAnamV0LmZiLmlucHV0Lm1ha2VSZWFjdGl2ZScsIHRoaXMgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2hhbmdlICAgICA9IGZ1bmN0aW9uICggcHJldlZhbHVlICkge1xuXHRpZiAoIHRoaXMuaXNSZXNldENhbGNWYWx1ZSApIHtcblx0XHR0aGlzLmNhbGNWYWx1ZSA9IHRoaXMudmFsdWUuY3VycmVudDtcblx0fVxuXG5cdC8vIGFwcGx5IGNoYW5nZXMgaW4gRE9NXG5cdHRoaXM/LmNhbGxhYmxlPy5ydW4oIHByZXZWYWx1ZSApO1xuXG5cdC8vIHNob3cgZXJyb3JzXG5cdHRoaXMucmVwb3J0KCk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5yZXBvcnQgICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2UoKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnJlcG9ydE9uQmx1ciA9IGZ1bmN0aW9uICggc2lnbmFsID0gbnVsbCApIHtcblx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkJsdXIoIHNpZ25hbCApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuZGVib3VuY2VkUmVwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggdGhpcy52YWxpZGF0ZVRpbWVyICkge1xuXHRcdHRoaXMuc3RvcFZhbGlkYXRpb24gPSB0cnVlO1xuXHRcdGNsZWFyVGltZW91dCggdGhpcy52YWxpZGF0ZVRpbWVyICk7XG5cblx0XHRpZiAoIHRoaXMuYWJvcnRDb250cm9sbGVyICkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgfVxuXHR9XG5cblx0dGhpcy5hYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBsZXQgc2lnbmFsID0gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuXG5cdHRoaXMudmFsaWRhdGVUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcblx0XHR0aGlzLnJlcG9ydE9uQmx1ciggc2lnbmFsICk7XG5cdH0sIDQ1MCApO1xufVxuLyoqXG4gKiBAcGFyYW0gIGNhbGxhYmxlXG4gKiBAcmV0dXJuIHsoZnVuY3Rpb24oKTogKnwqW10pfCp9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRyZXR1cm4gdGhpcy52YWx1ZS53YXRjaCggY2FsbGFibGUgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLndhdGNoVmFsaWRpdHkgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRyZXR1cm4gdGhpcy5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS53YXRjaCggY2FsbGFibGUgKTtcbn07XG4vKipcbiAqIEBwYXJhbSAgY2FsbGFibGVcbiAqIEByZXR1cm4geyhmdW5jdGlvbigpOiAqfCpbXSl8Kn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5zYW5pdGl6ZSA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdHJldHVybiB0aGlzLnZhbHVlLnNhbml0aXplKCBjYWxsYWJsZSApO1xufTtcbi8qKlxuICogQHBhcmFtIGlucHV0RGF0YSB7SW5wdXREYXRhfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKCBpbnB1dERhdGEgKSB7XG5cdHRoaXMubm9kZXMgPSBbIC4uLmlucHV0RGF0YS5nZXROb2RlKCkgXTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgZmllbGRWYWx1ZTtcblx0aWYgKCB0aGlzLmlzQXJyYXkoKSApIHtcblx0XHRmaWVsZFZhbHVlID0gQXJyYXkuZnJvbSggdGhpcy5ub2RlcyApLlxuXHRcdFx0bWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0ZmllbGRWYWx1ZSA9IHRoaXMubm9kZXNbIDAgXT8udmFsdWU7XG5cdH1cblx0dGhpcy5jYWxjVmFsdWUgICAgID0gZmllbGRWYWx1ZTtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZmllbGRWYWx1ZTtcbn07XG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdHRoaXMubm9kZXMgICA9IFsgbm9kZSBdO1xuXHR0aGlzLnJhd05hbWUgPSBub2RlLm5hbWUgPz8gJyc7XG5cdHRoaXMubmFtZSAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xuXG5cdHRoaXMuaW5wdXRUeXBlID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xufTtcbi8qKlxuICogUnVucyBvbmNlIGluIGxpZmVjeWNsZS5cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5vbk9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHQvKipcblx0ICogU2F2ZSBsaW5rIHRvIHRoaXMgb2JqZWN0XG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRub2RlLmpmYlN5bmMgPSB0aGlzO1xuXG5cdHRoaXMuaXNSZXF1aXJlZCA9IHRoaXMuY2hlY2tJc1JlcXVpcmVkKCk7XG5cblx0dGhpcy5jYWxsYWJsZSA9IGdldFNpZ25hbCggbm9kZSwgdGhpcyApO1xuXHR0aGlzLmNhbGxhYmxlLnNldElucHV0KCB0aGlzICk7XG5cblx0dGhpcy5yZXBvcnRpbmcgPSBjcmVhdGVSZXBvcnQoIHRoaXMgKTtcblxuXHR0aGlzLmxvYWRpbmcud2F0Y2goICgpID0+IHRoaXMub25DaGFuZ2VMb2FkaW5nKCkgKTtcblxuXHR0aGlzLnBhdGggPSBbIC4uLnRoaXMuZ2V0UGFyZW50UGF0aCgpLCB0aGlzLm5hbWUgXTtcblxuXHRpZiAoXG5cdFx0Ly8gaXMgYWpheFxuXHRcdCF0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKSB8fFxuXHRcdHRoaXMuaGFzUGFyZW50KClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIud2F0Y2hSZXNldCggKCkgPT4gdGhpcy5vbkNsZWFyKCkgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2hhbmdlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcblxuXHR0aGlzLmdldFN1Ym1pdCgpLmxvY2tTdGF0ZS5jdXJyZW50ID0gdGhpcy5sb2FkaW5nLmN1cnJlbnQ7XG5cblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXHRjb25zdCB3cmFwcGVyICA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcblxuXHR3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoICdpcy1sb2FkaW5nJywgdGhpcy5sb2FkaW5nLmN1cnJlbnQgKTtcbn07XG4vKipcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnNldFJvb3QgPSBmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XG5cdHRoaXMucm9vdCA9IG9ic2VydmFibGU7XG59O1xuLyoqXG4gKiBCeSBkZWZhdWx0IGl0IHJ1bnMgb25seSBpZiByZXBlYXRlciBpdGVtIHdhcyByZW1vdmVkXG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubmFtZTtcbn07XG4vKipcbiAqIEByZXR1cm4ge0FycmF5IHwgc3RyaW5nIHwgYm9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMudmFsdWUuY3VycmVudDtcbn07XG4vKipcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzO1xufTtcbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5yYXdOYW1lLmluY2x1ZGVzKCAnW10nICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gY2FsbGFibGUgICAgIHtGdW5jdGlvbnxtaXhlZH1cbiAqIEBwYXJhbSBpbnB1dENvbnRleHQge0lucHV0RGF0YXxCb29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmJlZm9yZVN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUsIGlucHV0Q29udGV4dCA9IGZhbHNlICkge1xuXHR0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5wcm9taXNlKCBjYWxsYWJsZSwgaW5wdXRDb250ZXh0ICk7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtGb3JtU3VibWl0fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuZ2V0Um9vdCgpLmZvcm07XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdHJldHVybiB0aGlzLnJvb3Q7XG5cdH1cblx0cmV0dXJuIHRoaXMucm9vdC5wYXJlbnQuZ2V0Um9vdCgpO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG5cblx0cmV0dXJuIGlzVmlzaWJsZSggd3JhcHBlciApO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNpbGVuY2VTZXQoIG51bGwgKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBuZXcgUmVhY3RpdmVWYXIoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuY2hlY2tJc1JlcXVpcmVkID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0cmV0dXJuIG5vZGUucmVxdWlyZWQgPz8gISFub2RlLmRhdGFzZXQucmVxdWlyZWQ/Lmxlbmd0aDtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuc2lsZW5jZVNldCA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdC8qKlxuXHQgKiBSZWxhdGVkIHRvIGlzc3VlXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEyNjEjaXNzdWVjb21tZW50LTEyOTMyOTAyOTFcblx0ICovXG5cdGNvbnN0IHRlbXBSZXBvcnQgPSB0aGlzLnJlcG9ydC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcblxuXHR0aGlzLnJlcG9ydCA9IHRlbXBSZXBvcnQ7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLnNpbGVuY2VOb3RpZnkgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHRlbXBSZXBvcnQgPSB0aGlzLnJlcG9ydC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnZhbHVlLm5vdGlmeSgpO1xuXG5cdHRoaXMucmVwb3J0ID0gdGVtcFJlcG9ydDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5oYXNQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAhIXRoaXMucm9vdD8ucGFyZW50O1xufTtcblxuLyoqXG4gKiBGb3IgaW5zZXJ0IGVycm9ycyBpbiBhZHZhbmNlZCB2YWxpZGF0aW9uIG1vZGVcbiAqIEByZXR1cm4geyp9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0V3JhcHBlck5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzWyAwIF0uY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuaGFuZGxlRW50ZXJLZXkgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRpZiAoIGV2ZW50LmtleSAhPT0gJ0VudGVyJyB8fCAvLyBub3QgZW50ZXIga2V5XG5cdFx0IXRoaXMuZW50ZXJLZXkgfHwgLy8gaGFuZGxpbmcgZW50ZXIga2V5IGlzIGRpc2FibGVkXG5cdFx0ZXZlbnQuc2hpZnRLZXkgfHwgLy8gdGhlIHNoaWZ0IGtleSB3YXMgcHJlc3NlZFxuXHRcdGV2ZW50LmlzQ29tcG9zaW5nIC8vIGlmIHRoZSBldmVudCBpcyBmaXJlZCB3aXRoaW4gYSBjb21wb3NpdGlvbiBzZXNzaW9uXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0dGhpcy5vbkVudGVyS2V5KCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLm9uRW50ZXJLZXkgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGNhblN1Ym1pdCA9IHRoaXMuZW50ZXJLZXkuYXBwbHlGaWx0ZXJzKCB0cnVlICk7XG5cblx0aWYgKCBjYW5TdWJtaXQgKSB7XG5cdFx0Y29uc3QgY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gdGhpcy5nZXRTdWJtaXQoKS5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQ7XG5cblx0XHRpZiAoIHRydWUgPT09IGNhblRyaWdnZXJFbnRlclN1Ym1pdCApIHtcblx0XHRcdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0KCk7XG5cdFx0fVxuXHR9XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmluaXROb3RpZnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zaWxlbmNlTm90aWZ5KCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLm9uRm9jdXMgID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNjcm9sbFRvKCk7XG5cdHRoaXMuZm9jdXNSYXcoKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLmZvY3VzUmF3ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0LyoqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzIyNjUjaXNzdWVjb21tZW50LTE0NDc5ODg3MThcblx0ICovXG5cdGlmICggWyAnZGF0ZScsICd0aW1lJywgJ2RhdGV0aW1lLWxvY2FsJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRub2RlPy5mb2N1cyggeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0gKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuXG5cdHdpbmRvdy5zY3JvbGxUbygge1xuXHRcdHRvcDogZ2V0T2Zmc2V0VG9wKCB3cmFwcGVyICkgLSB0aGlzLm9mZnNldE9uRm9jdXMsXG5cdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHR9ICk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge1JlcG9ydGluZ0NvbnRleHR9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucm9vdC5nZXRDb250ZXh0KCk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW58SW5wdXREYXRhW119XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucG9wdWxhdGVJbm5lciA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBFeGVjdXRlZCB3aXRoIGRlZmF1bHQgYnJvd3NlciB2YWxpZGF0aW9uXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudHxIVE1MRWxlbWVudH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRSZXBvcnRpbmdOb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5ub2Rlc1sgMCBdO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRQYXJlbnRQYXRoID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge0FycmF5fE9iamVjdH1cblx0ICovXG5cdGNvbnN0IHZhbHVlID0gdGhpcy5yb290LnBhcmVudC52YWx1ZS5jdXJyZW50O1xuXG5cdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiB2YWx1ZSApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRmb3IgKCBjb25zdCBbIGluZGV4LCByb3cgXSBvZiBPYmplY3QuZW50cmllcyggdmFsdWUgKSApIHtcblx0XHRpZiAoIHJvdyAhPT0gdGhpcy5yb290ICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJldHVybiBbXG5cdFx0XHQuLi50aGlzLnJvb3QucGFyZW50LmdldFBhcmVudFBhdGgoKSxcblx0XHRcdHRoaXMucm9vdC5wYXJlbnQubmFtZSxcblx0XHRcdGluZGV4LFxuXHRcdF07XG5cdH1cblxuXHRyZXR1cm4gW107XG59O1xuXG4vKipcbiAqIFJ1bnMgb25seSBvbmNlIG9uIHdpbmRvdyBcImxvYWRcIiBldmVudFxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnJlUXVlcnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zZXRWYWx1ZSgpO1xuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSgpO1xufTtcblxuLyoqXG4gKiBSdW5zIG9uIHNldCBPYnNlcnZhYmxlLnZhbHVlLmN1cnJlbnRcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnJldmVydFZhbHVlID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdmFsdWU7XG59O1xuXG4vKipcbiAqIFJlY2FsY3VsYXRlIHRoZSBmb3JtdWxhIGJhc2VkIG9uIHRoZSBjdXJyZW50IGlucHV0IGRhdGEuXG4gKiBAc2luY2UgMy40LjVcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMTc4NlxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnJlQ2FsY3VsYXRlRm9ybXVsYSA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dERhdGE7XG4iLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcbmltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG5mdW5jdGlvbiBOb0xpc3RlbkRhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cdC8qKlxuXHQgKiBAdHlwZSB7Tm9kZX1cblx0ICovXG5cdHRoaXMuY29tbWVudCA9IG51bGw7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzSGlkZGVuKCBub2RlICk7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIHNpbGVuY2UgaXMgZ29sZGVuXG5cdH07XG5cdHRoaXMub25PYnNlcnZlICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUub25PYnNlcnZlLmNhbGwoIHRoaXMgKTtcblxuXHRcdGlmICggIXRoaXMuaXNBcnJheSgpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0Q29tbWVudCgpO1xuXHR9O1xuXHR0aGlzLnNldENvbW1lbnQgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNvbW1lbnQgICA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoIHRoaXMubmFtZSApO1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdG5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoIHRoaXMuY29tbWVudCwgbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR0aGlzLm1lcmdlID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHR0aGlzLm5vZGVzLnB1c2goIC4uLmlucHV0LmdldE5vZGUoKSApO1xuXHR9O1xufVxuXG5Ob0xpc3RlbkRhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOb0xpc3RlbkRhdGE7IiwiaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL0lucHV0RGF0YSc7XG5pbXBvcnQgeyBpc1JhbmdlIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG5mdW5jdGlvbiBSYW5nZURhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdHRoaXMubnVtYmVyTm9kZSA9IG51bGw7XG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmFuZ2UoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5zZXROb2RlICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5udW1iZXJOb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlLW51bWJlcicsXG5cdFx0KTtcblx0fTtcbn1cblxuUmFuZ2VEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2VEYXRhOyIsImltcG9ydCBOb0xpc3RlbkRhdGEgZnJvbSAnLi9Ob0xpc3RlbkRhdGEnO1xuaW1wb3J0IFJlYWN0aXZlU2V0IGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlU2V0JztcblxuY29uc3QgeyBidWlsdEluU3RhdGVzIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlU2V0fSB2YWx1ZSBSZWFjdGl2ZSB2YWx1ZVxuICpcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBSZW5kZXJTdGF0ZURhdGEoKSB7XG5cdE5vTGlzdGVuRGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0J2hpZGRlbicgPT09IG5vZGU/LnR5cGUgJiZcblx0XHRcdCdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlc1tdJyA9PT0gbm9kZS5uYW1lXG5cdFx0KTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHN0YXRlTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0dGhpcy5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0XHR0aGlzLnZhbHVlLmFkZCggc3RhdGVOYW1lICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cblx0ICovXG5cdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUgKSB7XG5cdFx0dGhpcy52YWx1ZS5yZW1vdmUoIHN0YXRlTmFtZSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XG5cdCAqIEBwYXJhbSBmb3JjZSAgICAge251bGx8Qm9vbGVhbn1cblx0ICovXG5cdHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUsIGZvcmNlID0gbnVsbCApIHtcblx0XHR0aGlzLnZhbHVlLnRvZ2dsZSggc3RhdGVOYW1lLCBmb3JjZSApO1xuXHR9O1xuXG5cdHRoaXMuaXNDdXN0b20gPSBmdW5jdGlvbiAoIGtleSApIHtcblx0XHRyZXR1cm4gIWJ1aWx0SW5TdGF0ZXMuaW5jbHVkZXMoIGtleSApO1xuXHR9O1xufVxuXG5SZW5kZXJTdGF0ZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTm9MaXN0ZW5EYXRhLnByb3RvdHlwZSApO1xuXG5SZW5kZXJTdGF0ZURhdGEucHJvdG90eXBlLmdldFJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gbmV3IFJlYWN0aXZlU2V0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJTdGF0ZURhdGE7IiwiaW1wb3J0IENoYW5nZURhdGEgZnJvbSAnLi9DaGFuZ2VEYXRhJztcbmltcG9ydCBSYW5nZURhdGEgZnJvbSAnLi9SYW5nZURhdGEnO1xuaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XG5pbXBvcnQgUmVuZGVyU3RhdGVEYXRhIGZyb20gJy4vUmVuZGVyU3RhdGVEYXRhJztcbmltcG9ydCB7IHNldEF0dHJzIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG5cdCAgICAgIGRvQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHR5cGUge2Z1bmN0aW9uKCk6ICp9XG4gKi9cbmNvbnN0IGdldERhdGFUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5pbnB1dHMnLFxuXHRbXG5cdFx0UmVuZGVyU3RhdGVEYXRhLFxuXHRcdFJhbmdlRGF0YSxcblx0XHRDaGFuZ2VEYXRhLFxuXHRcdE5vTGlzdGVuRGF0YSxcblx0XSxcbik7XG5cbmxldCBkYXRhVHlwZXMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIG5vZGVcbiAqIEBwYXJhbSAgb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KCBub2RlLCBvYnNlcnZhYmxlICkge1xuXHRpZiAoICFkYXRhVHlwZXMubGVuZ3RoICkge1xuXHRcdGRhdGFUeXBlcyA9IGdldERhdGFUeXBlcygpO1xuXHR9XG5cdGZvciAoIGNvbnN0IGRhdGFUeXBlIG9mIGRhdGFUeXBlcyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IGRhdGFUeXBlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBub2RlICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y3VycmVudC5zZXRSb290KCBvYnNlcnZhYmxlICk7XG5cdFx0Y3VycmVudC5zZXROb2RlKCBub2RlICk7XG5cdFx0c2V0QXR0cnMoIGN1cnJlbnQgKTtcblxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLmlucHV0LmNyZWF0ZWQnLCBjdXJyZW50ICk7XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvciggJ1NvbWV0aGluZyB3ZW50IHdyb25nJyApO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJzZWROYW1lKCBuYW1lICkge1xuXHRjb25zdCByZWdleHBzID0gW1xuXHRcdC8vIG11bHRpcGxlIGZpZWxkcyAoY2hlY2tib3hbXSlcblx0XHQvXihbXFx3XFwtXSspXFxbXFxdJC8sXG5cdFx0Ly8gZmllbGRzIGluc2lkZSByZXBlYXRlciAocmVwX25hbWVbMV1bY29udGVudF9maWVsZF0pXG5cdFx0L15bXFx3XFwtXStcXFtcXGQrXFxdXFxbKFtcXHdcXC1dKylcXF1cXFs/XFxdPyQvLFxuXHRdO1xuXG5cdGZvciAoIGNvbnN0IHJlZ0V4cCBvZiByZWdleHBzICkge1xuXHRcdGlmICggIXJlZ0V4cC50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgbWF0Y2hlcyA9IG5hbWUubWF0Y2goIHJlZ0V4cCApO1xuXG5cdFx0cmV0dXJuIG1hdGNoZXNbIDEgXTtcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbnB1dHMge0lucHV0RGF0YVtdfVxuICovXG5mdW5jdGlvbiBwb3B1bGF0ZUlucHV0cyggaW5wdXRzICkge1xuXHRjb25zdCBsaXN0ID0gW107XG5cblx0Zm9yICggY29uc3QgaW5wdXQgb2YgaW5wdXRzICkge1xuXHRcdGNvbnN0IGlubmVyID0gaW5wdXQucG9wdWxhdGVJbm5lcigpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdGlubmVyPy5sZW5ndGggJiYgbGlzdC5wdXNoKCAuLi5pbm5lciApO1xuXG5cdFx0bGlzdC5wdXNoKCBpbnB1dCApO1xuXHR9XG5cblx0cmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCB7IGdldFBhcnNlZE5hbWUsIGNyZWF0ZUlucHV0LCBwb3B1bGF0ZUlucHV0cyB9OyIsIi8qKlxuICogQHRoaXMge1JlYWN0aXZlVmFyfVxuICpcbiAqIEBjbGFzc1xuICovXG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIExvYWRpbmdSZWFjdGl2ZVZhcigpIHtcblx0UmVhY3RpdmVWYXIuY2FsbCggdGhpcywgZmFsc2UgKTtcblxuXHR0aGlzLnN0YXJ0ICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnQgPSB0cnVlO1xuXHR9O1xuXHR0aGlzLmVuZCAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnQgPSBmYWxzZTtcblx0fTtcblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jdXJyZW50ID0gIXRoaXMuY3VycmVudDtcblx0fTtcbn1cblxuTG9hZGluZ1JlYWN0aXZlVmFyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlYWN0aXZlVmFyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nUmVhY3RpdmVWYXI7IiwiZnVuY3Rpb24gUmVhY3RpdmVIb29rKCkge1xuXHR0aGlzLmhhbmRsZXJzID0gW107XG59XG5cblJlYWN0aXZlSG9vay5wcm90b3R5cGUgPSB7XG5cdGFkZEZpbHRlciggY2FsbGFibGUgKSB7XG5cdFx0dGhpcy5oYW5kbGVycy5wdXNoKCBjYWxsYWJsZSApO1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG5cblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5oYW5kbGVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdH0sXG5cdGFwcGx5RmlsdGVycyggLi4ucGFyYW1zICkge1xuXHRcdGxldCBjdXJyZW50ICAgICA9IHBhcmFtc1sgMCBdO1xuXHRcdGNvbnN0IG5ld1BhcmFtcyA9IHBhcmFtcy5zbGljZSggMSApO1xuXG5cdFx0Zm9yICggY29uc3QgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzICkge1xuXHRcdFx0Y3VycmVudCA9IGhhbmRsZXIoIGN1cnJlbnQsIC4uLm5ld1BhcmFtcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVIb29rO1xuIiwiaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vUmVhY3RpdmVWYXInO1xuXG5mdW5jdGlvbiBSZWFjdGl2ZVNldCggdmFsdWUgKSB7XG5cdFJlYWN0aXZlVmFyLmNhbGwoIHRoaXMsIHZhbHVlICk7XG59XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlYWN0aXZlVmFyLnByb3RvdHlwZSApO1xuXG5SZWFjdGl2ZVNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUgKSB7XG5cdC8vIGFkZCB1bmlxdWUgdmFsdWVcblx0dGhpcy5jdXJyZW50ID0gW1xuXHRcdC4uLm5ldyBTZXQoIFtcblx0XHRcdC4uLihcblx0XHRcdFx0dGhpcy5jdXJyZW50ID8/IFtdXG5cdFx0XHQpLFxuXHRcdFx0c3RhdGVOYW1lLFxuXHRcdF0gKSxcblx0XTtcbn07XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0dGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LmZpbHRlcihcblx0XHRpdGVtID0+IGl0ZW0gIT09IHN0YXRlTmFtZSxcblx0KTtcbn07XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSwgZm9yY2UgPSBudWxsICkge1xuXHRpZiAoIG51bGwgIT09IGZvcmNlICkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRmb3JjZSA/IHRoaXMuYWRkKCBzdGF0ZU5hbWUgKSA6IHRoaXMucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggdGhpcy5jdXJyZW50LmluY2x1ZGVzKCBzdGF0ZU5hbWUgKSApIHtcblx0XHR0aGlzLnJlbW92ZSggc3RhdGVOYW1lICk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5hZGQoIHN0YXRlTmFtZSApO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZVNldDsiLCJpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gUmVhY3RpdmVWYXIoIHZhbHVlID0gbnVsbCApIHtcblx0dGhpcy5jdXJyZW50ICAgID0gdmFsdWU7XG5cdHRoaXMuc2lnbmFscyAgICA9IFtdO1xuXHR0aGlzLnNhbml0aXplcnMgPSBbXTtcblx0dGhpcy5pc0RlYnVnICAgID0gZmFsc2U7XG5cdHRoaXMuaXNTaWxlbmNlICA9IGZhbHNlO1xuXHR0aGlzLmlzTWFrZWQgICAgPSBmYWxzZTtcbn1cblxuUmVhY3RpdmVWYXIucHJvdG90eXBlID0ge1xuXHR3YXRjaE9uY2UgKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgY2xlYXJXYXRjaGVyID0gdGhpcy53YXRjaCggKCkgPT4ge1xuXHRcdFx0Y2xlYXJXYXRjaGVyKCk7XG5cdFx0XHRjYWxsYWJsZSgpO1xuXHRcdH0gKTtcblx0fSxcblx0d2F0Y2ggKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuc2lnbmFscy5zb21lKCAoIHsgc2lnbmFsIH0gKSA9PiBzaWduYWwgPT09IGNhbGxhYmxlICkgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNpZ25hbHMucHVzaCgge1xuXHRcdFx0c2lnbmFsOiBjYWxsYWJsZSxcblx0XHRcdHRyYWNlOiBuZXcgRXJyb3IoKS5zdGFjayxcblx0XHR9ICk7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuc2lnbmFscy5sZW5ndGggLSAxO1xuXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuc2lnbmFscy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdH0sXG5cdHNhbml0aXplICggY2FsbGFibGUgKSB7XG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCAtMSAhPT0gdGhpcy5zYW5pdGl6ZXJzLmluZGV4T2YoIGNhbGxhYmxlICkgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNhbml0aXplcnMucHVzaCggY2FsbGFibGUgKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zYW5pdGl6ZXJzLmxlbmd0aCAtIDE7XG5cblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zYW5pdGl6ZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0bWFrZSAoKSB7XG5cdFx0aWYgKCB0aGlzLmlzTWFrZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaXNNYWtlZCAgPSB0cnVlO1xuXHRcdGxldCBjdXJyZW50ICAgPSB0aGlzLmN1cnJlbnQ7XG5cdFx0bGV0IHByZXZWYWx1ZSA9IG51bGw7XG5cdFx0Y29uc3Qgc2VsZiAgICA9IHRoaXM7XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMsICdjdXJyZW50Jywge1xuXHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHRcdH0sXG5cdFx0XHRzZXQoIG5ld1ZhbCApIHtcblx0XHRcdFx0aWYgKCBjdXJyZW50ID09PSBuZXdWYWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByZXZWYWx1ZSA9IGN1cnJlbnQ7XG5cdFx0XHRcdGlmICggc2VsZi5pc0RlYnVnICkge1xuXHRcdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIG5vLWRlYnVnZ2VyICovXG5cdFx0XHRcdFx0Y29uc29sZS5ncm91cCggJ1JlYWN0aXZlVmFyIGhhcyBjaGFuZ2VkJyApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAnY3VycmVudDonLCBjdXJyZW50ICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICduZXdWYWw6JywgbmV3VmFsICk7XG5cdFx0XHRcdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdFx0XHRcdGRlYnVnZ2VyO1xuXHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSwgbm8tZGVidWdnZXIgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50ID0gc2VsZi5hcHBseVNhbml0aXplcnMoIG5ld1ZhbCApO1xuXG5cdFx0XHRcdGlmICggc2VsZi5pc1NpbGVuY2UgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYubm90aWZ5KCBwcmV2VmFsdWUgKTtcblx0XHRcdH0sXG5cdFx0fSApO1xuXHR9LFxuXHRub3RpZnkgKCBwcmV2VmFsdWUgPSBudWxsICkge1xuXHRcdHRoaXMuc2lnbmFscy5mb3JFYWNoKFxuXHRcdFx0KCB7IHNpZ25hbCB9ICkgPT4gc2lnbmFsLmNhbGwoIHRoaXMsIHByZXZWYWx1ZSApICk7XG5cdH0sXG5cdGFwcGx5U2FuaXRpemVycyAoIHZhbHVlICkge1xuXHRcdGZvciAoIGNvbnN0IHNhbml0aXplciBvZiB0aGlzLnNhbml0aXplcnMgKSB7XG5cdFx0XHR2YWx1ZSA9IHNhbml0aXplci5jYWxsKCB0aGlzLCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0SWZFbXB0eSggbmV3VmFsdWUgKSB7XG5cdFx0aWYgKCAhaXNFbXB0eSggdGhpcy5jdXJyZW50ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XG5cdH0sXG5cdGRlYnVnKCkge1xuXHRcdHRoaXMuaXNEZWJ1ZyA9ICF0aGlzLmlzRGVidWc7XG5cdH0sXG5cdHNpbGVuY2UoKSB7XG5cdFx0dGhpcy5pc1NpbGVuY2UgPSAhdGhpcy5pc1NpbGVuY2U7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZVZhcjsiLCJpbXBvcnQgUmVwb3J0aW5nSW50ZXJmYWNlIGZyb20gJy4vUmVwb3J0aW5nSW50ZXJmYWNlJztcbmltcG9ydCB7IGFsbFJlamVjdGVkIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEJyb3dzZXJSZXBvcnRpbmcoKSB7XG5cdFJlcG9ydGluZ0ludGVyZmFjZS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHR0aGlzLnJlcG9ydFJhdyAgID0gZnVuY3Rpb24gKCkge1xuXHR9O1xuXHR0aGlzLnJlcG9ydEZpcnN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKTtcblxuXHRcdG5vZGUucmVwb3J0VmFsaWRpdHkoKTtcblx0fTtcblxuXHR0aGlzLnNldFJlc3RyaWN0aW9ucyAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0Y3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyggdGhpcywgbm9kZSApO1xuXHR9O1xuXHR0aGlzLmNsZWFyUmVwb3J0ICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gYnJvd3NlciBhdXRvbWF0aWNhbGx5IGhpZGUgdG9vbHRpcCBtZXNzYWdlc1xuXHR9O1xuXHR0aGlzLnZhbGlkYXRlT25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy52YWxpZGF0ZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG5cdH07XG5cblx0dGhpcy5nZXRFcnJvcnNSYXcgPSBhc3luYyBmdW5jdGlvbiAoIHByb21pc2VzICkge1xuXHRcdGNvbnN0IGVycm9ycyAgID0gYXdhaXQgYWxsUmVqZWN0ZWQoIHByb21pc2VzICk7XG5cdFx0dGhpcy52YWx1ZVByZXYgPSB0aGlzLmlucHV0LmdldFZhbHVlKCk7XG5cblx0XHRyZXR1cm4gZXJyb3JzO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0Lmhhc0F1dG9TY3JvbGwoKTtcblx0fTtcblxuXHQvKipcblx0ICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudHxIVE1MRWxlbWVudH1cblx0ICovXG5cdHRoaXMuZ2V0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5nZXRSZXBvcnRpbmdOb2RlKCk7XG5cdH07XG59XG5cbkJyb3dzZXJSZXBvcnRpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVwb3J0aW5nSW50ZXJmYWNlLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyUmVwb3J0aW5nOyIsImZ1bmN0aW9uIFJlcG9ydGluZ0NvbnRleHQoIHJvb3QgKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMucm9vdCA9IHJvb3Q7XG5cblx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gZmFsc2U7XG5cdHRoaXMuc2lsZW5jZSAgICAgICA9IHRydWU7XG5cbn1cblxuUmVwb3J0aW5nQ29udGV4dC5wcm90b3R5cGUgPSB7XG5cdHJlc2V0KCBwcm9wcyA9IHt9ICkge1xuXHRcdHRoaXMucmVwb3J0ZWRGaXJzdCA9IGZhbHNlO1xuXHRcdHRoaXMuc2V0U2lsZW5jZSggcHJvcHM/LnNpbGVuY2UgPz8gdHJ1ZSApO1xuXHR9LFxuXHRyZXBvcnRGaXJzdCgpIHtcblx0XHR0aGlzLnJlcG9ydGVkRmlyc3QgPSB0cnVlO1xuXHR9LFxuXHRzZXRTaWxlbmNlKCB2YWx1ZSApIHtcblx0XHR0aGlzLnNpbGVuY2UgPSAhIXZhbHVlO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0aW5nQ29udGV4dDtcblxuIiwiLyoqXG4gKiBWYWxpZGF0aW9uIGxvZ2ljOiBvbiBjaGFuZ2UgaW5wdXQgdmFsdWUgd2UgcnVuXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS52YWxpZGF0ZU9uQ2hhbmdlXG4gKlxuICogSW4gdGhhdCBmdW5jdGlvbiB3ZSBjbGVhciBzdG9yZWQgZXJyb3JzXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5lcnJvcnNcbiAqIGNoZWNrIGFsbCByZXN0cmljdGlvbnMgYWdhaW4gYW5kIHNhdmUgZXJyb3JzXG4gKiB0byB0aGUgc2FtZSBwcm9wZXJ0eS5cbiAqXG4gKiBXaGVuIHVzZXIgdHJpZXMgdG8gc3VibWl0IGZvcm0gd2UgcnVuXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS52YWxpZGF0ZVxuICogSWYgdGhlcmUgd2FzIHN0b3JlZCBlcnJvcnMgLSBpdCB3aWxsIHJldHVybiB0aGVtLlxuICogT3RoZXJ3aXNlIHdlIGNoZWNrIGFsbCBhbmQgc2F2ZSBlcnJvcnMuXG4gKlxuICogSW4gdGhlIGNhc2Ugd2hlbiB3ZSBydW4gdGhlIHZhbGlkYXRpb24gdGhyb3VnaCB0aGVcbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLmlzVmFsaWRcbiAqIFdlIFwiYmxvY2sgdGhlIGZvcm1cIiB0aHJvdWdoIHRoZSBcInRlc3RcIiBwcm9wZXJ0eS5cbiAqIFRoaXMgcHJvcGVydHkgaXMgcmVhY3RpdmUsIGFuZCB3aGVuIGl0IGNoYW5nZXMsXG4gKiB0aGUgc3RhdGUgb2YgdGhlIGJ1dHRvbiBmb3Igc3VibWl0dGluZyB0aGUgZm9ybVxuICogYW5kIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYmV0d2VlbiBwYWdlcyBjaGFuZ2VzLlxuICovXG5pbXBvcnQgUmVzdHJpY3Rpb25FcnJvciBmcm9tICcuL1Jlc3RyaWN0aW9uRXJyb3InO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gUmVwb3J0aW5nSW50ZXJmYWNlKCkge1xuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdHRoaXMuaW5wdXQgPSBudWxsO1xuXHR0aGlzLmlzUmVxdWlyZWQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEB0eXBlIHtBcnJheSB8IG51bGx9XG5cdCAqL1xuXHR0aGlzLmVycm9ycyA9IG51bGw7XG5cdHRoaXMucmVzdHJpY3Rpb25zID0gW107XG5cblx0dGhpcy52YWx1ZVByZXYgICAgID0gbnVsbDtcblx0dGhpcy52YWxpZGl0eVN0YXRlID0gbnVsbDtcblx0dGhpcy5wcm9taXNlc0NvdW50ID0gMDtcbn1cblxuUmVwb3J0aW5nSW50ZXJmYWNlLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtSZXN0cmljdGlvbltdfVxuXHQgKi9cblx0cmVzdHJpY3Rpb25zOiBbXSxcblx0dmFsdWVQcmV2OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dmFsaWRpdHlTdGF0ZTogbnVsbCxcblx0cHJvbWlzZXNDb3VudDogMCxcblx0LyoqXG5cdCAqIFJ1bnMgb24gY2hhbmdpbmcgdmFsdWUgaW4gdGhlIGZpZWxkXG5cdCAqIEBzZWUgSW5wdXREYXRhLm9uQ2hhbmdlXG5cdCAqL1xuXHR2YWxpZGF0ZU9uQ2hhbmdlICgpIHtcblx0fSxcblx0dmFsaWRhdGVPbkJsdXIgKCkge1xuXHR9LFxuXHQvKipcblx0ICogUnVucyBvbiB0cnlpbmcgdG8gc3VibWl0IGZvcm1cblx0ICogQHNlZSBPYnNlcnZhYmxlLmlucHV0c0FyZVZhbGlkXG5cdCAqXG5cdCAqIFJ1bnMgb24gY2hhbmdpbmcgdmFsdWUsIGlmIHRoaXMgZmllbGQgaW5zaWRlIHBhZ2Vcblx0ICogQHNlZSBJbnB1dERhdGEuc2V0UGFnZVxuXHQgKiBAc2VlIFBhZ2VTdGF0ZS51cGRhdGVTdGF0ZVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuXHQgKi9cblx0YXN5bmMgdmFsaWRhdGUgKCBzaWduYWwgPSBudWxsICkge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSBhd2FpdCB0aGlzLmdldEVycm9ycyggc2lnbmFsICk7XG5cblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCA9ICFCb29sZWFuKCBlcnJvcnMubGVuZ3RoICk7XG5cblx0XHRpZiAoICFlcnJvcnMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5jbGVhclJlcG9ydCgpO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IXRoaXMuaW5wdXQucm9vdC5nZXRDb250ZXh0KCkuc2lsZW5jZSAmJiB0aGlzLnJlcG9ydCggZXJyb3JzICk7XG5cblx0XHR0aHJvdyBuZXcgUmVzdHJpY3Rpb25FcnJvciggZXJyb3JzWyAwIF0ubmFtZSApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtICBwcm9taXNlcyB7RnVuY3Rpb25bXX1cblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheSB8IG51bGw+fVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGFzeW5jIGdldEVycm9yc1JhdyAoIHByb21pc2VzICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ2dldEVycm9yIG11c3QgcmV0dXJuIGEgUHJvbWlzZScgKTtcblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheSB8ICpbXSB8IG51bGw+fVxuXHQgKi9cblx0YXN5bmMgZ2V0RXJyb3JzICggc2lnbmFsID0gbnVsbCApIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmlucHV0LmxvYWRpbmcuY3VycmVudCB8fFxuXHRcdFx0dGhpcy5pbnB1dD8uY2FsbGFibGU/LmxvY2s/LmN1cnJlbnQgfHxcblx0XHRcdCF0aGlzLmlucHV0LmlzVmlzaWJsZSgpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmdldFByb21pc2VzKCBzaWduYWwgKTtcblxuXHRcdGlmIChcblx0XHRcdCF0aGlzLmhhc0NoYW5nZWRWYWx1ZSgpICYmXG5cdFx0XHR0aGlzLnByb21pc2VzQ291bnQgPT09IHByb21pc2VzLmxlbmd0aCAmJlxuXHRcdFx0IXRoaXMuaW5wdXQuc3RvcFZhbGlkYXRpb24gJiZcblx0XHRcdC8vIFJlZnJlc2ggYWxsIHNlbGVjdHMgYmVjYXVzZSB0aGVpciBzdGF0ZSBtaWdodCBoYXZlIGNoYW5nZWRcblx0XHRcdHRoaXMuaW5wdXQuaW5wdXRUeXBlICE9PSAnaHItc2VsZWN0LWxldmVsJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JzID8/IFtdO1xuXHRcdH1cblxuXHRcdHRoaXMucHJvbWlzZXNDb3VudCA9IHByb21pc2VzLmxlbmd0aDtcblx0XHR0aGlzLmVycm9ycyAgICAgICAgPSBbXTtcblxuXHRcdGlmICggIXByb21pc2VzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9ycztcblx0XHR9XG5cblx0XHR0aGlzLmVycm9ycyA9IGF3YWl0IHRoaXMuZ2V0RXJyb3JzUmF3KCBwcm9taXNlcywgc2lnbmFsICk7XG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JzO1xuXHR9LFxuXHRyZXBvcnQgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xuXG5cdFx0aWYgKCB0aGlzLmlucHV0LmdldENvbnRleHQoKS5yZXBvcnRlZEZpcnN0ICkge1xuXHRcdFx0dGhpcy5yZXBvcnRSYXcoIHZhbGlkYXRpb25FcnJvcnMgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnJlcG9ydEZpcnN0KCk7XG5cblx0XHR0aGlzLnJlcG9ydEZpcnN0KCB2YWxpZGF0aW9uRXJyb3JzICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gdmFsaWRhdGlvbkVycm9ycyB7UmVzdHJpY3Rpb25bXX1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRyZXBvcnRSYXcgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ3JlcG9ydCBpcyBlbXB0eScgKTtcblx0fSxcblx0cmVwb3J0Rmlyc3QgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xuXHRcdHRoaXMucmVwb3J0KCB2YWxpZGF0aW9uRXJyb3JzICk7XG5cdH0sXG5cdGNsZWFyUmVwb3J0ICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdjbGVhclJlcG9ydCBpcyBlbXB0eScgKTtcblx0fSxcblx0Z2V0UHJvbWlzZXMgKCBzaWduYWwgPSBudWxsKSB7XG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHRoaXMucmVzdHJpY3Rpb25zICkge1xuXHRcdFx0aWYgKCAhdGhpcy5jYW5Qcm9jZXNzUmVzdHJpY3Rpb24oIHJlc3RyaWN0aW9uICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5iZWZvcmVQcm9jZXNzUmVzdHJpY3Rpb24oIHJlc3RyaWN0aW9uICk7XG5cblx0XHRcdHByb21pc2VzLnB1c2goICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0XHRyZXN0cmljdGlvbi52YWxpZGF0ZVByb21pc2UoIHNpZ25hbCApLlxuXHRcdFx0XHRcdHRoZW4oICgpID0+IHJlc29sdmUoIHJlc3RyaWN0aW9uICkgKS5cblx0XHRcdFx0XHRjYXRjaCggZXJyb3IgPT4gcmVqZWN0KCBbIHJlc3RyaWN0aW9uLCBlcnJvciBdICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gIHJlc3RyaWN0aW9uIHtSZXN0cmljdGlvbn1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRjYW5Qcm9jZXNzUmVzdHJpY3Rpb24gKCByZXN0cmljdGlvbiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIHJlc3RyaWN0aW9uIHtSZXN0cmljdGlvbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRiZWZvcmVQcm9jZXNzUmVzdHJpY3Rpb24gKCByZXN0cmljdGlvbiApIHtcblx0fSxcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuXHQvKipcblx0ICogQHBhcmFtICBub2RlICB7RWxlbWVudH1cblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkICggbm9kZSwgaW5wdXQgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnaXNTdXBwb3J0ZWQgaXMgZW1wdHknICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cblx0ICovXG5cdHNldElucHV0ICggaW5wdXQgKSB7XG5cdFx0dGhpcy52YWxpZGl0eVN0YXRlID0gbmV3IFJlYWN0aXZlVmFyKCk7XG5cdFx0dGhpcy52YWxpZGl0eVN0YXRlLm1ha2UoKTtcblxuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0XHR0aGlzLnNldFJlc3RyaWN0aW9ucygpO1xuXHRcdHRoaXMuZmlsdGVyUmVzdHJpY3Rpb25zKCk7XG5cdH0sXG5cdHNldFJlc3RyaWN0aW9ucyAoKSB7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxFbGVtZW50fVxuXHQgKi9cblx0Z2V0Tm9kZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQubm9kZXNbIDAgXTtcblx0fSxcblxuXHRoYXNDaGFuZ2VkVmFsdWUgKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlUHJldiAhPT0gdGhpcy5pbnB1dC5nZXRWYWx1ZSgpO1xuXHR9LFxuXHQvKipcblx0ICogQHJldHVybiB7UHJvbWlzZTwqPn1cblx0ICovXG5cdGNoZWNrVmFsaWRpdHkgKCkge1xuXHRcdGNvbnN0IGlzU2lsZW5jZSA9IHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnNpbGVuY2U7XG5cblx0XHRpZiAoIG51bGwgPT09IHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWRhdGVPbkNoYW5nZVN0YXRlKCk7XG5cdFx0fVxuXHRcdGlmICggdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc1NpbGVuY2UgKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcblx0XHR9XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IWlzU2lsZW5jZSAmJiB0aGlzLnJlcG9ydCggdGhpcy5lcnJvcnMgfHwgW10gKTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHRoYXNBdXRvU2Nyb2xsICgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdC8qKlxuXHQgKiBXaXRoIHRoZSBoZWxwIG9mIGZpbHRlcnMgdGhhdCBhZGQgbmV3IHJlc3RyaWN0aW9ucyxcblx0ICogeW91IGNhbiBvdmVyd3JpdGUgYSBwYXJ0aWN1bGFyIHJlc3RyaWN0aW9uXG5cdCAqIGlmIHRoZSBcInR5cGVcIiBwcm9wZXJ0eSBpcyBkZWZpbmVkIGluIGl0XG5cdCAqL1xuXHRmaWx0ZXJSZXN0cmljdGlvbnMgKCkge1xuXHRcdGNvbnN0IG1hcCA9IHt9O1xuXG5cdFx0Zm9yICggbGV0IFsgaW5kZXgsIHJlc3RyaWN0aW9uIF0gb2YgT2JqZWN0LmVudHJpZXMoXG5cdFx0XHR0aGlzLnJlc3RyaWN0aW9ucyApICkge1xuXHRcdFx0aW5kZXggPSByZXN0cmljdGlvbi5nZXRUeXBlKCkgPyByZXN0cmljdGlvbi5nZXRUeXBlKCkgOiBpbmRleDtcblxuXHRcdFx0bWFwWyBpbmRleCBdID0gcmVzdHJpY3Rpb247XG5cdFx0fVxuXG5cdFx0dGhpcy5yZXN0cmljdGlvbnMgPSBPYmplY3QudmFsdWVzKCBtYXAgKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGluZ0ludGVyZmFjZTsiLCJmdW5jdGlvbiBSZXN0cmljdGlvbkVycm9yKCBtZXNzYWdlICkge1xuXHRFcnJvci5jYWxsKCB0aGlzLCBtZXNzYWdlICk7XG5cblx0aWYgKCBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSApIHtcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSggdGhpcywgUmVzdHJpY3Rpb25FcnJvciApO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHRoaXMuc3RhY2sgPSAoXG5cdFx0XHRuZXcgRXJyb3IoKVxuXHRcdCkuc3RhY2s7XG5cdH1cbn1cblxuUmVzdHJpY3Rpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFcnJvci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdHJpY3Rpb25FcnJvcjsiLCIvKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuaW1wb3J0IEJyb3dzZXJSZXBvcnRpbmcgZnJvbSAnLi9Ccm93c2VyUmVwb3J0aW5nJztcbmltcG9ydCB7IGFsbFJlamVjdGVkIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi4vaW5wdXRzL0lucHV0RGF0YSc7XG5pbXBvcnQgTmF0aXZlUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvTmF0aXZlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IFJlcXVpcmVkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbic7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFJlcG9ydFR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnJlcG9ydGluZycsXG5cdFtcblx0XHRCcm93c2VyUmVwb3J0aW5nLFxuXHRdLFxuKTtcblxubGV0IHJlcG9ydFR5cGVzID0gW107XG5cbmNvbnN0IGdldERlZmF1bHRSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zLmRlZmF1bHQnLFxuXHRbXG5cdFx0TmF0aXZlUmVzdHJpY3Rpb24sXG5cdFx0UmVxdWlyZWRSZXN0cmljdGlvbixcblx0XSxcbik7XG5cbmxldCBkZWZhdWx0UmVzdHJpY3Rpb25zID0gW107XG5cbi8qKlxuICogQHBhcmFtICByZXBvcnRpbmcge0Jyb3dzZXJSZXBvcnRpbmd9XG4gKiBAcGFyYW0gIG5vZGVcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMoIHJlcG9ydGluZywgbm9kZSApIHtcblx0aWYgKCAhZGVmYXVsdFJlc3RyaWN0aW9ucy5sZW5ndGggKSB7XG5cdFx0ZGVmYXVsdFJlc3RyaWN0aW9ucyA9IGdldERlZmF1bHRSZXN0cmljdGlvbnMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIGRlZmF1bHRSZXN0cmljdGlvbnMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXN0cmljdGlvbigpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggbm9kZSwgcmVwb3J0aW5nICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLnB1c2goIGN1cnJlbnQgKTtcblx0fVxuXG5cdHJlcG9ydGluZy5yZXN0cmljdGlvbnMuZm9yRWFjaCggaXRlbSA9PiBpdGVtLnNldFJlcG9ydGluZyggcmVwb3J0aW5nICkgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG4gKiBAcmV0dXJuIHtBZHZhbmNlZFJlcG9ydGluZ3xCcm93c2VyUmVwb3J0aW5nfVxuICovXG5mdW5jdGlvbiBjcmVhdGVSZXBvcnQoIGlucHV0ICkge1xuXHRpZiAoICFyZXBvcnRUeXBlcy5sZW5ndGggKSB7XG5cdFx0cmVwb3J0VHlwZXMgPSBnZXRSZXBvcnRUeXBlcygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgcmVwb3J0VHlwZSBvZiByZXBvcnRUeXBlcyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlcG9ydFR5cGUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0Lm5vZGVzWyAwIF0sIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y3VycmVudC5zZXRJbnB1dCggaW5wdXQgKTtcblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dHMgIHtJbnB1dERhdGFbXX1cbiAqIEBwYXJhbSAgc2lsZW5jZSB7Qm9vbGVhbn1cbiAqXG4gKiBAcmV0dXJuIHtGdW5jdGlvbltdfVxuICovXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZUNhbGxiYWNrcyggaW5wdXRzLCBzaWxlbmNlID0gZmFsc2UgKSB7XG5cdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuXG5cdGlucHV0cz8uWyAwIF0/LmdldENvbnRleHQoKT8ucmVzZXQoIHsgc2lsZW5jZSB9ICk7XG5cblx0Zm9yICggY29uc3QgaW5wdXQgb2YgaW5wdXRzICkge1xuXHRcdGlmICggIShcblx0XHRcdGlucHV0IGluc3RhbmNlb2YgSW5wdXREYXRhXG5cdFx0KSApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ0lucHV0IGlzIG5vdCBpbnN0YW5jZSBvZiBJbnB1dERhdGEnICk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrcy5wdXNoKFxuXHRcdFx0KCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRcdGlucHV0LnJlcG9ydGluZy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUoKS5cblx0XHRcdFx0XHR0aGVuKCByZXNvbHZlICkuXG5cdFx0XHRcdFx0Y2F0Y2goIHJlamVjdCApO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIGNhbGxiYWNrcztcbn1cblxuLyoqXG4gKiBAcGFyYW0gIGlucHV0cyAge0lucHV0RGF0YVtdfVxuICogQHBhcmFtICBzaWxlbmNlIHtCb29sZWFufVxuICogQHJldHVybiB7UHJvbWlzZTx1bmtub3duW10+fVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0cyggaW5wdXRzLCBzaWxlbmNlID0gZmFsc2UgKSB7XG5cdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyggaW5wdXRzLCBzaWxlbmNlICkubWFwKFxuXHRcdFx0Y3VycmVudCA9PiBuZXcgUHJvbWlzZSggY3VycmVudCApLFxuXHRcdCksXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0cyAge0lucHV0RGF0YVtdfVxuICogQHBhcmFtIHNpbGVuY2Uge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRzQWxsKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcblx0cmV0dXJuIGFsbFJlamVjdGVkKCBnZXRWYWxpZGF0ZUNhbGxiYWNrcyggaW5wdXRzLCBzaWxlbmNlICkgKTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlUmVwb3J0LFxuXHR2YWxpZGF0ZUlucHV0cyxcblx0dmFsaWRhdGVJbnB1dHNBbGwsXG5cdGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMsXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxufTsiLCJpbXBvcnQgUmVzdHJpY3Rpb24gZnJvbSAnLi9SZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIE5hdGl2ZVJlc3RyaWN0aW9uKCkge1xuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gISFub2RlLmNoZWNrVmFsaWRpdHk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IG5vZGVzIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dDtcblxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygbm9kZXMgKSB7XG5cdFx0XHRpZiAoIG5vZGUuY2hlY2tWYWxpZGl0eSgpICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbk5hdGl2ZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBOYXRpdmVSZXN0cmljdGlvbjsiLCJpbXBvcnQgUmVzdHJpY3Rpb24gZnJvbSAnLi9SZXN0cmljdGlvbic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gUmVxdWlyZWRSZXN0cmljdGlvbigpIHtcblx0UmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMudHlwZSA9ICdyZXF1aXJlZCc7XG59XG5cblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdHJldHVybiByZXBvcnRpbmcuaW5wdXQuaXNSZXF1aXJlZDtcbn07XG5cblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LnZhbHVlO1xuXG5cdHJldHVybiAhaXNFbXB0eSggY3VycmVudCApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWlyZWRSZXN0cmljdGlvbjsiLCJmdW5jdGlvbiBSZXN0cmljdGlvbigpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtSZXBvcnRpbmdJbnRlcmZhY2V9XG5cdCAqL1xuXHR0aGlzLnJlcG9ydGluZyA9IG51bGw7XG5cdC8qKlxuXHQgKiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgcHJvcGVydHlcblx0ICogaWYgeW91IHdhbnQgdG8gbWFrZSB0aGlzIFJlc3RyaWN0aW9uIG92ZXJyaWRhYmxlXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjEuMFxuXHQgKlxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0dGhpcy50eXBlID0gJyc7XG59XG5cblJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIEBwYXJhbSBub2RlICAgICAge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XG5cdCAqIEBwYXJhbSByZXBvcnRpbmcge1JlcG9ydGluZ0ludGVyZmFjZX1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjEuMFxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXRUeXBlICgpIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIHJlcG9ydGluZyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuXHQgKi9cblx0c2V0UmVwb3J0aW5nICggcmVwb3J0aW5nICkge1xuXHRcdHRoaXMucmVwb3J0aW5nID0gcmVwb3J0aW5nO1xuXHR9LFxuXHRnZXRWYWx1ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVwb3J0aW5nLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cdH0sXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcblx0LyoqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHR2YWxpZGF0ZSAoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAndmFsaWRhdGUgaXMgd3JvbmcnICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxuXHQgKi9cblx0YXN5bmMgdmFsaWRhdGVQcm9taXNlICgpIHtcblx0XHRsZXQgdmFsaWRhdGlvblJlc3VsdDtcblxuXHRcdHRyeSB7XG5cdFx0XHR2YWxpZGF0aW9uUmVzdWx0ID0gYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuXHRcdH1cblx0XHRjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCBlcnJvcj8ubWVzc2FnZSA/PyBlcnJvciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWxpZGF0aW9uUmVzdWx0XG5cdFx0ICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcblx0XHQgICAgICAgOiBQcm9taXNlLnJlamVjdCggJ3ZhbGlkYXRlIGlzIHdyb25nJyApO1xuXHR9LFxuXHRvblJlYWR5KCkge1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdHJpY3Rpb247IiwiaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcblxuY29uc3QgeyBzdHJpY3RfbW9kZSA9IGZhbHNlIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cbmNvbnN0IFNUUklDVF9NT0RFID0gQm9vbGVhbiggc3RyaWN0X21vZGUgKTtcblxuZnVuY3Rpb24gQmFzZVNpZ25hbCgpIHtcblx0dGhpcy5pbnB1dCA9IG51bGw7XG5cdHRoaXMubG9jayAgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0dGhpcy5sb2NrLm1ha2UoKTtcblxuXHR0aGlzLnRyaWdnZXJqUXVlcnkgPSAhU1RSSUNUX01PREU7XG59XG5cbkJhc2VTaWduYWwucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGlucHV0OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0bG9jazogbnVsbCxcblx0LyoqXG5cdCAqIEBwYXJhbSAgbm9kZSAgICAgIHtIVE1MRWxlbWVudH1cblx0ICogQHBhcmFtICBpbnB1dERhdGEge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHNldElucHV0ICggaW5wdXQgKSB7XG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0O1xuXHR9LFxuXHRydW4gKCBwcmV2VmFsdWUgKSB7XG5cdFx0aWYgKCAhdGhpcy5sb2NrLmN1cnJlbnQgKSB7XG5cdFx0XHR0aGlzLnJ1blNpZ25hbCggcHJldlZhbHVlICk7XG5cdFx0XHR0aGlzLnVubG9ja1RyaWdnZXIoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMubG9jay5zaWduYWxzLmxlbmd0aCApIHtcblx0XHRcdHRoaXMubG9jay53YXRjaE9uY2UoICgpID0+IHRoaXMucnVuU2lnbmFsKCBwcmV2VmFsdWUgKSApO1xuXHRcdH1cblx0fSxcblx0dHJpZ2dlckpRdWVyeSggbm9kZSApIHtcblx0XHRpZiAoICF0aGlzLnRyaWdnZXJqUXVlcnkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGpRdWVyeSggbm9kZSApLnRyaWdnZXIoICdjaGFuZ2UnICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gcHJldlZhbHVlXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRydW5TaWduYWwgKCBwcmV2VmFsdWUgKSB7XG5cdFx0Ly8geW91ciBjb2RlXG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdGxvY2tUcmlnZ2VyICgpIHtcblx0XHR0aGlzLnRyaWdnZXJqUXVlcnkgPSBmYWxzZTtcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKi9cblx0dW5sb2NrVHJpZ2dlciAoKSB7XG5cdFx0aWYgKCBTVFJJQ1RfTU9ERSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gdHJ1ZTtcblx0fSxcbn07XG5cbmV4cG9ydCB7IFNUUklDVF9NT0RFIH07XG5leHBvcnQgZGVmYXVsdCBCYXNlU2lnbmFsOyIsImltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vQmFzZVNpZ25hbCc7XG5pbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3N1cHBvcnRzJztcblxuZnVuY3Rpb24gU2lnbmFsSGlkZGVuQXJyYXkoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xufVxuXG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0cmV0dXJuIGlzSGlkZGVuKCBub2RlICkgJiYgaW5wdXREYXRhLmlzQXJyYXkoKTtcbn07XG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuXHRpZiAoICFjdXJyZW50Py5sZW5ndGggKSB7XG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLmlucHV0Lm5vZGVzICkge1xuXHRcdFx0bm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLmlucHV0Lm5vZGVzLnNwbGljZSggMCwgdGhpcy5pbnB1dC5ub2Rlcy5sZW5ndGggKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzYXZlTm9kZXMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCB2YWx1ZSBvZiBjdXJyZW50ICkge1xuXHRcdGNvbnN0IGhhc05vZGVXaXRoU2FtZVZhbHVlID0gdGhpcy5pbnB1dC5ub2Rlcy5zb21lKFxuXHRcdFx0KCBub2RlLCBpbmRleCApID0+IHtcblx0XHRcdFx0aWYgKCBub2RlLnZhbHVlICE9PSB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2F2ZU5vZGVzLnB1c2goIGluZGV4ICk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSApO1xuXG5cdFx0aWYgKCBoYXNOb2RlV2l0aFNhbWVWYWx1ZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnICk7XG5cdFx0bmV3RWxlbWVudC50eXBlICA9ICdoaWRkZW4nO1xuXHRcdG5ld0VsZW1lbnQudmFsdWUgPSB2YWx1ZTtcblx0XHRuZXdFbGVtZW50Lm5hbWUgID0gdGhpcy5pbnB1dC5yYXdOYW1lO1xuXG5cdFx0dGhpcy5pbnB1dC5ub2Rlcy5wdXNoKCBuZXdFbGVtZW50ICk7XG5cdFx0c2F2ZU5vZGVzLnB1c2goIHRoaXMuaW5wdXQubm9kZXMubGVuZ3RoIC0gMSApO1xuXG5cdFx0dGhpcy5pbnB1dC5jb21tZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0bmV3RWxlbWVudCxcblx0XHRcdHRoaXMuaW5wdXQuY29tbWVudC5uZXh0RWxlbWVudFNpYmxpbmcsXG5cdFx0KTtcblx0fVxuXG5cdHRoaXMuaW5wdXQubm9kZXMgPSB0aGlzLmlucHV0Lm5vZGVzLmZpbHRlciggKCBub2RlLCBpbmRleCApID0+IHtcblx0XHRpZiAoIHNhdmVOb2Rlcy5pbmNsdWRlcyggaW5kZXggKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRub2RlLnJlbW92ZSgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsSGlkZGVuQXJyYXk7IiwiaW1wb3J0IEJhc2VTaWduYWwgZnJvbSAnLi9CYXNlU2lnbmFsJztcbmltcG9ydCB7IGlzUmFuZ2UgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSYW5nZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqL1xuZnVuY3Rpb24gU2lnbmFsUmFuZ2UoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzUmFuZ2UoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cdFx0bm9kZS52YWx1ZSAgICAgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQ7XG5cblx0XHR0aGlzLmlucHV0Lm51bWJlck5vZGUudGV4dENvbnRlbnQgPSBub2RlLnZhbHVlO1xuXG5cdFx0dGhpcy50cmlnZ2VySlF1ZXJ5KCBub2RlICk7XG5cdH07XG59XG5cblNpZ25hbFJhbmdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJhbmdlOyIsImltcG9ydCBTaWduYWxIaWRkZW5BcnJheSBmcm9tICcuL1NpZ25hbEhpZGRlbkFycmF5JztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlbmRlclN0YXRlRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFNpZ25hbFJlbmRlclN0YXRlKCkge1xuXHRTaWduYWxIaWRkZW5BcnJheS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzW10nID09PSBub2RlLm5hbWU7XG5cdH07XG5cblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSApIHtcblx0XHRTaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUucnVuU2lnbmFsLmNhbGwoIHRoaXMsIHByZXZWYWx1ZSApO1xuXG5cdFx0Y29uc3QgdXJsICAgICA9IG5ldyBVUkwoIHdpbmRvdy5sb2NhdGlvbiApO1xuXHRcdGNvbnN0IGZvcm1JZCAgPSB0aGlzLmlucHV0LmdldFN1Ym1pdCgpLmdldEZvcm1JZCgpO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgfHwgW107XG5cdFx0Y29uc3QgcGFyYW0gICA9IGBqZmJbJHsgZm9ybUlkIH1dW3N0YXRlXWA7XG5cdFx0Y29uc3Qgc3RhdGVzICA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3Qgc3RhdGVTbHVnIG9mIGN1cnJlbnQgKSB7XG5cdFx0XHRpZiAoICF0aGlzLmlucHV0LmlzQ3VzdG9tKCBzdGF0ZVNsdWcgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXRlcy5wdXNoKCBzdGF0ZVNsdWcgKTtcblx0XHR9XG5cblx0XHRpZiAoICFzdGF0ZXMubGVuZ3RoICkge1xuXHRcdFx0aWYgKCAhdXJsLnNlYXJjaFBhcmFtcy5oYXMoIHBhcmFtICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoIHBhcmFtICk7XG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoIHt9LCAnJywgdXJsLnRvU3RyaW5nKCkgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmFtVmFsdWUgPSBzdGF0ZXMuam9pbiggJywnICk7XG5cdFx0aWYgKCB1cmwuc2VhcmNoUGFyYW1zLmdldCggcGFyYW0gKSA9PT0gcGFyYW1WYWx1ZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR1cmwuc2VhcmNoUGFyYW1zLnNldCggcGFyYW0sIHBhcmFtVmFsdWUgKTtcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoIHt9LCAnJywgdXJsLnRvU3RyaW5nKCkgKTtcblx0fTtcbn1cblxuU2lnbmFsUmVuZGVyU3RhdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFJlbmRlclN0YXRlOyIsImltcG9ydCBTaWduYWxIaWRkZW5BcnJheSBmcm9tICcuL1NpZ25hbEhpZGRlbkFycmF5JztcbmltcG9ydCBTaWduYWxSYW5nZSBmcm9tICcuL1NpZ25hbFJhbmdlJztcbmltcG9ydCBTaWduYWxSZW5kZXJTdGF0ZSBmcm9tICcuL1NpZ25hbFJlbmRlclN0YXRlJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0U2lnbmFsVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdFtcblx0XHRTaWduYWxSYW5nZSxcblx0XHRTaWduYWxSZW5kZXJTdGF0ZSxcblx0XHRTaWduYWxIaWRkZW5BcnJheSxcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUgeyhCYXNlU2lnbmFsKVtdfVxuICovXG5sZXQgc2lnbmFsVHlwZXMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUgIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cbiAqIEByZXR1cm4ge0Jhc2VTaWduYWx9XG4gKi9cbmZ1bmN0aW9uIGdldFNpZ25hbCggbm9kZSwgaW5wdXQgKSB7XG5cdGlmICggIXNpZ25hbFR5cGVzLmxlbmd0aCApIHtcblx0XHRzaWduYWxUeXBlcyA9IGdldFNpZ25hbFR5cGVzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBzaWduYWxUeXBlIG9mIHNpZ25hbFR5cGVzICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgc2lnbmFsVHlwZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggbm9kZSwgaW5wdXQgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7IGdldFNpZ25hbCB9OyIsImltcG9ydCBCYXNlU3VibWl0IGZyb20gJy4vQmFzZVN1Ym1pdCc7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuaW1wb3J0IHsgaXNTdWNjZXNzU3RhdHVzIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gQWpheFN1Ym1pdCggZm9ybSApIHtcblx0QmFzZVN1Ym1pdC5jYWxsKCB0aGlzLCBmb3JtICk7XG5cblx0dGhpcy5zdGF0dXMgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0dGhpcy5zdGF0dXMubWFrZSgpO1xuXG5cdHRoaXMuc3VibWl0ICAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCAkZm9ybSAgICAgICAgICAgID0galF1ZXJ5KCB0aGlzLmZvcm0ub2JzZXJ2YWJsZS5yb290Tm9kZSApO1xuXHRcdGNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5cdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRhcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LmFqYXgucHJvbWlzZXMnLFxuXHRcdFx0XHR0aGlzLmdldFByb21pc2VzKCksXG5cdFx0XHRcdCRmb3JtLFxuXHRcdFx0KSxcblx0XHQpLnRoZW4oXG5cdFx0XHRjYWxsYmFja3MgPT4gdGhpcy5ydW5TdWJtaXQoIGNhbGxiYWNrcyApLFxuXHRcdCkuY2F0Y2goXG5cdFx0XHQoKSA9PiB0aGlzLmZvcm0udG9nZ2xlKCksXG5cdFx0KTtcblx0fTtcblx0dGhpcy5ydW5TdWJtaXQgICAgID0gZnVuY3Rpb24gKCBjYWxsYmFja3MgKSB7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSggcm9vdE5vZGUgKTtcblx0XHRmb3JtRGF0YS5hcHBlbmQoXG5cdFx0XHQnX2pldF9lbmdpbmVfYm9va2luZ19mb3JtX2lkJyxcblx0XHRcdHRoaXMuZm9ybS5nZXRGb3JtSWQoKSxcblx0XHQpO1xuXG5cdFx0Ly8gZGlzYWJsZSB3YXRjaGVyc1xuXHRcdHRoaXMuc3RhdHVzLnNpbGVuY2UoKTtcblxuXHRcdHRoaXMuc3RhdHVzLmN1cnJlbnQgPSBudWxsO1xuXG5cdFx0Ly8gZW5hYmxlIHdhdGNoZXJzXG5cdFx0dGhpcy5zdGF0dXMuc2lsZW5jZSgpO1xuXG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncy5hamF4dXJsLFxuXHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdGRhdGE6IGZvcm1EYXRhLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0Y29udGVudFR5cGU6IGZhbHNlLFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdH0gKS5kb25lKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHR0aGlzLm9uU3VjY2VzcyggcmVzcG9uc2UgKTtcblx0XHRcdFx0Y29uc3QgJGZvcm0gPSBqUXVlcnkoIHJvb3ROb2RlICk7XG5cblx0XHRcdFx0Y2FsbGJhY2tzLmZvckVhY2goIGNiID0+IHtcblx0XHRcdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjYiApIHtcblx0XHRcdFx0XHRcdGNiLmNhbGwoICRmb3JtLCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fSxcblx0XHQpLmZhaWwoXG5cdFx0XHR0aGlzLm9uRmFpbC5iaW5kKCB0aGlzICksXG5cdFx0KTtcblx0fTtcblx0dGhpcy5vblN1Y2Nlc3MgICAgID0gZnVuY3Rpb24gKCByZXNwb25zZSApIHtcblx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XG5cblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRcdHRoaXMubGFzdFJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0Y29uc3QgJGZvcm0gICAgICAgPSBqUXVlcnkoIHJvb3ROb2RlICk7XG5cblx0XHRzd2l0Y2ggKCByZXNwb25zZS5zdGF0dXMgKSB7XG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcblx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWpheC9vbi1zdWNjZXNzJyxcblx0XHRcdFx0XHRbIHJlc3BvbnNlLCAkZm9ybSBdLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2FqYXgvcHJvY2Vzc2luZy1lcnJvcicsXG5cdFx0XHRcdFx0WyByZXNwb25zZSwgJGZvcm0gXVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVuIHN0YXR1cyB3YXRjaGVyc1xuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdHVzLmN1cnJlbnQgPSByZXNwb25zZS5zdGF0dXM7XG5cblx0XHRpZiAoIHJlc3BvbnNlLnJlZGlyZWN0ICkge1xuXHRcdFx0aWYgKCByZXNwb25zZS5vcGVuX2luX25ld190YWIgKSB7XG5cdFx0XHRcdHdpbmRvdy5vcGVuKCByZXNwb25zZS5yZWRpcmVjdCwgJ19ibGFuaycgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHJlc3BvbnNlLnJlZGlyZWN0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmICggcmVzcG9uc2UucmVsb2FkICkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5zZXJ0TWVzc2FnZSggcmVzcG9uc2UubWVzc2FnZSApO1xuXHR9O1xuXHR0aGlzLm9uRmFpbCAgICAgICAgPSBmdW5jdGlvbiAoIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHtcblx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IGZhbHNlO1xuXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cdFx0Y29uc3QgJGZvcm0gICAgICAgID0galF1ZXJ5KCByb290Tm9kZSApO1xuXG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlci9hamF4L29uLWZhaWwnLFxuXHRcdFx0WyBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24sICRmb3JtIF1cblx0XHQpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLmVycm9yKCBqcVhIUi5yZXNwb25zZVRleHQsIGVycm9yVGhyb3duICk7XG5cdH07XG5cdHRoaXMuaW5zZXJ0TWVzc2FnZSA9IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggJ2pldC1mb3JtLWJ1aWxkZXItbWVzc2FnZXMtd3JhcCcgKTtcblx0XHRub2RlLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cblx0XHRyb290Tm9kZS5hcHBlbmRDaGlsZCggbm9kZSApO1xuXHR9O1xufVxuXG5BamF4U3VibWl0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTdWJtaXQucHJvdG90eXBlICk7XG4vKipcbiAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cbiAqL1xuQWpheFN1Ym1pdC5wcm90b3R5cGUuc3RhdHVzID0gbnVsbDtcblxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hSZXNldCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdGlmICggIXJvb3ROb2RlLmRhdGFzZXQ/LmNsZWFyICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMud2F0Y2hTdWNjZXNzKCBjYWxsYWJsZSApO1xufTtcblxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hTdWNjZXNzID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0Y29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXM7XG5cblx0c3RhdHVzLndhdGNoKCAoKSA9PiB7XG5cdFx0aWYgKCBpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cy5jdXJyZW50ICkgKSB7XG5cdFx0XHRjYWxsYWJsZSgpO1xuXHRcdH1cblx0fSApO1xufTtcblxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hGYWlsID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0Y29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXM7XG5cblx0c3RhdHVzLndhdGNoKCAoKSA9PiB7XG5cdFx0aWYgKCAhaXNTdWNjZXNzU3RhdHVzKCBzdGF0dXMuY3VycmVudCApICkge1xuXHRcdFx0Y2FsbGFibGUoKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFqYXhTdWJtaXQ7IiwiLyoqXG4gKiBAcGFyYW0gZm9ybSB7Rm9ybVN1Ym1pdH1cbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBCYXNlU3VibWl0KCBmb3JtICkge1xuXHR0aGlzLmZvcm0gICAgICAgICA9IGZvcm07XG5cdHRoaXMubGFzdFJlc3BvbnNlID0ge307XG5cdHRoaXMucHJvbWlzZXMgICAgID0gW107XG59XG5cbkJhc2VTdWJtaXQucHJvdG90eXBlLnN1Ym1pdCAgICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXBsYWNlIHRoaXMgY2FsbGJhY2snICk7XG59O1xuQmFzZVN1Ym1pdC5wcm90b3R5cGUuZ2V0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnByb21pc2VzLm1hcCggKCB7IGNhbGxhYmxlIH0gKSA9PiBuZXcgUHJvbWlzZSggY2FsbGFibGUgKSApO1xufTtcbi8qKlxuICogQHBhcmFtIGNhbGxhYmxlICAgICB7RnVuY3Rpb259XG4gKiBAcGFyYW0gaW5wdXRDb250ZXh0IHtJbnB1dERhdGF8Qm9vbGVhbn1cbiAqL1xuQmFzZVN1Ym1pdC5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uICggY2FsbGFibGUsIGlucHV0Q29udGV4dCA9IGZhbHNlICkge1xuXHRjb25zdCBwYXRoU3RyID0gaW5wdXRDb250ZXh0ID8gaW5wdXRDb250ZXh0LnBhdGguam9pbiggJy4nICkgOiAnJztcblxuXHR0aGlzLnByb21pc2VzID0gdGhpcy5wcm9taXNlcy5maWx0ZXIoXG5cdFx0KCB7IGlkUGF0aCB9ICkgPT4gIWlkUGF0aCB8fCBpZFBhdGggIT09IHBhdGhTdHIsXG5cdCk7XG5cblx0dGhpcy5wcm9taXNlcy5wdXNoKCB7XG5cdFx0Y2FsbGFibGUsXG5cdFx0aWRQYXRoOiBpbnB1dENvbnRleHQgPyBpbnB1dENvbnRleHQucGF0aC5qb2luKCAnLicgKSA6ICcnLFxuXHR9ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlU3VibWl0OyIsImltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcbmltcG9ydCBBamF4U3VibWl0IGZyb20gJy4vQWpheFN1Ym1pdCc7XG5pbXBvcnQgUmVsb2FkU3VibWl0IGZyb20gJy4vUmVsb2FkU3VibWl0JztcbmltcG9ydCB7IGZvY3VzT25JbnZhbGlkSW5wdXQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgcG9wdWxhdGVJbnB1dHMgfSBmcm9tICcuLi9pbnB1dHMvZnVuY3Rpb25zJztcblxuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqIEBjbGFzc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gRm9ybVN1Ym1pdCggb2JzZXJ2YWJsZSApIHtcblxuXHR0aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuXHR0aGlzLmxvY2tTdGF0ZSAgPSBuZXcgTG9hZGluZ1JlYWN0aXZlVmFyKCBmYWxzZSApO1xuXHR0aGlzLmxvY2tTdGF0ZS5tYWtlKCk7XG5cdHRoaXMuYXV0b0ZvY3VzICAgICAgICAgICAgID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmF1dG9fZm9jdXM7XG5cdHRoaXMuY2FuU3VibWl0Rm9ybSAgICAgICAgID0gdHJ1ZTtcblx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSB0cnVlO1xuXHQvKipcblx0ICogQHBhcmFtIGV2ZW50IHtFdmVudH1cblx0ICovXG5cdHRoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR0aGlzLnN1Ym1pdCgpO1xuXHR9O1xuXG5cdHRoaXMuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICggdHJ1ZSA9PT0gdGhpcy5jYW5TdWJtaXRGb3JtICkge1xuXHRcdFx0dGhpcy5jYW5TdWJtaXRGb3JtICAgICAgICAgPSBmYWxzZTtcblx0XHRcdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gZmFsc2U7XG5cblx0XHRcdHRoaXMub2JzZXJ2YWJsZS5pbnB1dHNBcmVWYWxpZCgpLnRoZW4oICgpID0+IHtcblx0XHRcdFx0dGhpcy5jbGVhckVycm9ycygpO1xuXHRcdFx0XHR0aGlzLnRvZ2dsZSgpO1xuXHRcdFx0XHR0aGlzLnN1Ym1pdHRlci5zdWJtaXQoKTtcblx0XHRcdH0gKS5jYXRjaCggKCkgPT4ge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0XHRcdHRoaXMuYXV0b0ZvY3VzICYmIGZvY3VzT25JbnZhbGlkSW5wdXQoXG5cdFx0XHRcdFx0cG9wdWxhdGVJbnB1dHMoIHRoaXMub2JzZXJ2YWJsZS5nZXRJbnB1dHMoKSApLFxuXHRcdFx0XHQpO1xuXHRcdFx0fSApLmZpbmFsbHkoICgpID0+IHtcblx0XHRcdFx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gICAgICAgICA9IHRydWU7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuY2xlYXJFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcyApIHtcblx0XHRcdG1lc3NhZ2UucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMubG9ja1N0YXRlLnRvZ2dsZSgpO1xuXHRcdHRoaXMudG9nZ2xlTG9hZGluZygpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0dGhpcy5oYW5kbGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fVxuXHRcdCAqL1xuXHRcdGNvbnN0IGJ1dHRvbnMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fc3VibWl0Jyxcblx0XHQpO1xuXG5cdFx0dGhpcy5sb2NrU3RhdGUud2F0Y2goICgpID0+IHtcblx0XHRcdGZvciAoIGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zICkge1xuXHRcdFx0XHRidXR0b24uZGlzYWJsZWQgPSB0aGlzLmxvY2tTdGF0ZS5jdXJyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGZhbHNlID09PSB0aGlzLmxvY2tTdGF0ZS5jdXJyZW50ICkge1xuXHRcdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fTtcblxuXHR0aGlzLnRvZ2dsZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLmNsYXNzTGlzdC50b2dnbGUoICdpcy1sb2FkaW5nJyApO1xuXHR9O1xuXG5cdHRoaXMuY3JlYXRlU3VibWl0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgY2xhc3NMaXN0IH0gPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGU7XG5cdFx0Y29uc3QgaXNBamF4ICAgICAgICA9IGNsYXNzTGlzdC5jb250YWlucyggJ3N1Ym1pdC10eXBlLWFqYXgnICk7XG5cblx0XHRyZXR1cm4gaXNBamF4ID8gbmV3IEFqYXhTdWJtaXQoIHRoaXMgKSA6IG5ldyBSZWxvYWRTdWJtaXQoIHRoaXMgKTtcblx0fTtcblxuXHR0aGlzLmdldEZvcm1JZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLm9ic2VydmFibGU7XG5cblx0XHRyZXR1cm4gK3Jvb3ROb2RlLmRhdGFzZXQuZm9ybUlkO1xuXHR9O1xuXG5cdHRoaXMub25FbmRTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHR0aGlzLnN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKVxuXHRcdD8gdGhpcy5zdWJtaXR0ZXIuc3RhdHVzLndhdGNoKCBjYWxsYWJsZSApXG5cdFx0OiB0aGlzLnN1Ym1pdHRlci5vbkZhaWxTdWJtaXQoIGNhbGxhYmxlICk7XG5cdH07XG5cblx0dGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J3N1Ym1pdCcsXG5cdFx0KCBldmVudCApID0+IHRoaXMub25TdWJtaXQoIGV2ZW50ICksXG5cdCk7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtBamF4U3VibWl0fFJlbG9hZFN1Ym1pdH1cblx0ICovXG5cdHRoaXMuc3VibWl0dGVyID0gdGhpcy5jcmVhdGVTdWJtaXR0ZXIoKTtcblxuXHR0aGlzLmhhbmRsZUJ1dHRvbnMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVN1Ym1pdDsiLCJpbXBvcnQgQmFzZVN1Ym1pdCBmcm9tICcuL0Jhc2VTdWJtaXQnO1xuXG5mdW5jdGlvbiBSZWxvYWRTdWJtaXQoIGZvcm0gKSB7XG5cdEJhc2VTdWJtaXQuY2FsbCggdGhpcywgZm9ybSApO1xuXG5cdHRoaXMuZmFpbFByb21pc2VzID0gW107XG5cblx0dGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ICAgICA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXHRcdGNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5cdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRhcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LnJlbG9hZC5wcm9taXNlcycsXG5cdFx0XHRcdHRoaXMuZ2V0UHJvbWlzZXMoKSxcblx0XHRcdFx0eyB0YXJnZXQ6IHJvb3ROb2RlIH0sXG5cdFx0XHQpLFxuXHRcdCkudGhlbihcblx0XHRcdCgpID0+IHJvb3ROb2RlLnN1Ym1pdCgpLFxuXHRcdCkuY2F0Y2goICgpID0+IHtcblx0XHRcdHRoaXMuZmFpbFByb21pc2VzLmZvckVhY2goIGN1cnJlbnQgPT4gY3VycmVudCgpICk7XG5cblx0XHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblx0XHR9ICk7XG5cdH07XG5cblx0dGhpcy5vbkZhaWxTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmZhaWxQcm9taXNlcy5wdXNoKCBjYWxsYWJsZSApO1xuXHR9O1xufVxuXG5SZWxvYWRTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsb2FkU3VibWl0OyIsImZ1bmN0aW9uIGlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzICkge1xuXHRyZXR1cm4gJ3N1Y2Nlc3MnID09PSBzdGF0dXMgfHwgc3RhdHVzPy5pbmNsdWRlcyggJ2RzdWNjZXNzfCcgKTtcbn1cblxuZXhwb3J0IHsgaXNTdWNjZXNzU3RhdHVzIH07IiwiLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNDaGFuZ2VUeXBlKCBub2RlICkge1xuXHRyZXR1cm4gWyAnc2VsZWN0LW9uZScsICdyYW5nZScgXS5pbmNsdWRlcyggbm9kZS50eXBlICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzSGlkZGVuKCBub2RlICkge1xuXHRyZXR1cm4gJ2hpZGRlbicgPT09IG5vZGUudHlwZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNSYW5nZSggbm9kZSApIHtcblx0cmV0dXJuICdyYW5nZScgPT09IG5vZGUudHlwZTtcbn1cblxuZXhwb3J0IHtcblx0aXNIaWRkZW4sXG5cdGlzUmFuZ2UsXG5cdGlzQ2hhbmdlVHlwZSxcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3R5bGVzXG5pbXBvcnQgJy4vbWFpbi5wY3NzJ1xuXG5pbXBvcnQgaW5pdEVsZW1lbnRvciBmcm9tICcuL2luaXQvaW5pdEVsZW1lbnRvcic7XG5pbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcbmltcG9ydCBSZWFjdGl2ZVNldCBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlU2V0JztcbmltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL2lucHV0cy9JbnB1dERhdGEnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCBSZXBvcnRpbmdJbnRlcmZhY2UgZnJvbSAnLi9yZXBvcnRpbmcvUmVwb3J0aW5nSW50ZXJmYWNlJztcbmltcG9ydCB7XG5cdGFsbFJlamVjdGVkLFxuXHRnZXRMYW5ndWFnZSxcblx0dG9IVE1MLFxuXHRpc0VtcHR5LFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdGlzVmlzaWJsZSwgZ2V0U2Nyb2xsUGFyZW50LCBhcHBseVVzZXJBZ2VudHMsIGlzVUEsXG59IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24nO1xuaW1wb3J0IFJlc3RyaWN0aW9uRXJyb3IgZnJvbSAnLi9yZXBvcnRpbmcvUmVzdHJpY3Rpb25FcnJvcic7XG5pbXBvcnQge1xuXHR2YWxpZGF0ZUlucHV0cyxcblx0dmFsaWRhdGVJbnB1dHNBbGwsXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxufSBmcm9tICcuL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xuXG5pbXBvcnQgJy4vY2FsYy5tb2R1bGUvbWFpbic7XG5pbXBvcnQge1xuXHRnZXRQYXJzZWROYW1lLFxuXHRwb3B1bGF0ZUlucHV0cyxcbn0gZnJvbSAnLi9pbnB1dHMvZnVuY3Rpb25zJztcbmltcG9ydCBpbml0Rm9ybSBmcm9tICcuL2luaXQvaW5pdEZvcm0nO1xuaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL2F0dHJzL0Jhc2VIdG1sQXR0cic7XG5pbXBvcnQgcXVlcnlCeUF0dHJWYWx1ZSBmcm9tICcuL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZSc7XG5pbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlQ29tbWVudHMnO1xuaW1wb3J0IGl0ZXJhdGVKZmJDb21tZW50cyBmcm9tICcuL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzJztcbmltcG9ydCBvYnNlcnZlQ29tbWVudCBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZUNvbW1lbnQnO1xuaW1wb3J0IG9ic2VydmVNYWNyb0F0dHIgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVNYWNyb0F0dHInO1xuaW1wb3J0IFJlcXVpcmVkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlcXVpcmVkUmVzdHJpY3Rpb24nO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XG5cdCksXG5cdElucHV0RGF0YSxcblx0QmFzZVNpZ25hbCxcblx0UmVhY3RpdmVWYXIsXG5cdFJlYWN0aXZlSG9vayxcblx0TG9hZGluZ1JlYWN0aXZlVmFyLFxuXHRPYnNlcnZhYmxlLFxuXHRSZXBvcnRpbmdJbnRlcmZhY2UsXG5cdFJlc3RyaWN0aW9uLFxuXHRSZXN0cmljdGlvbkVycm9yLFxuXHRCYXNlSHRtbEF0dHIsXG5cdFJlYWN0aXZlU2V0LFxuXHRSZXF1aXJlZFJlc3RyaWN0aW9uLFxufTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID8/IHt9XG5cdCksXG5cdGFsbFJlamVjdGVkLFxuXHRnZXRMYW5ndWFnZSxcblx0dG9IVE1MLFxuXHR2YWxpZGF0ZUlucHV0cyxcblx0dmFsaWRhdGVJbnB1dHNBbGwsXG5cdGdldFBhcnNlZE5hbWUsXG5cdGlzRW1wdHksXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdHBvcHVsYXRlSW5wdXRzLFxuXHRpc1Zpc2libGUsXG5cdHF1ZXJ5QnlBdHRyVmFsdWUsXG5cdGl0ZXJhdGVDb21tZW50cyxcblx0b2JzZXJ2ZU1hY3JvQXR0cixcblx0b2JzZXJ2ZUNvbW1lbnQsXG5cdGl0ZXJhdGVKZmJDb21tZW50cyxcblx0Z2V0U2Nyb2xsUGFyZW50LFxuXHRpc1VBLFxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHBseVVzZXJBZ2VudHMgKTtcblxualF1ZXJ5KCAoKSA9PiBKZXRQbHVnaW5zLmluaXQoKSApO1xuXG5KZXRQbHVnaW5zLmJ1bGtCbG9ja3NJbml0KCBbXG5cdHtcblx0XHRibG9jazogJ2pldC1mb3Jtcy5mb3JtLWJsb2NrJyxcblx0XHRjYWxsYmFjazogaW5pdEZvcm0sXG5cdFx0Y29uZGl0aW9uOiAoKSA9PiAnbG9hZGluZycgIT09IGRvY3VtZW50LnJlYWR5U3RhdGUsXG5cdH0sXG5dICk7XG5cbmpRdWVyeSggd2luZG93ICkub24oICdlbGVtZW50b3IvZnJvbnRlbmQvaW5pdCcsIGluaXRFbGVtZW50b3IgKTtcblxuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoKSA9PiB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVtdfVxuXHQgKi9cblx0Y29uc3QgZm9ybXMgPSBPYmplY3QudmFsdWVzKCB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgKTtcblxuXHRmb3IgKCBjb25zdCByb290IG9mIGZvcm1zICkge1xuXHRcdGlmICggISggcm9vdCBpbnN0YW5jZW9mIE9ic2VydmFibGUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyb290LnJlUXVlcnlWYWx1ZXMoKTtcblx0fVxufSApO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=