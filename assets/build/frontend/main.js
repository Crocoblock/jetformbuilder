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
      return fieldValue;
    }
    if (MACRO_FORMAT_OPTION_LABEL === this.macroFormat) {
      return getInputOptionLabels(input) || input.value.current;
    }
    return input.value.current;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQU1BO0FBS0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNsaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWdDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFFQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBS0E7QUFFQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BpQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDOVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBS0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9CYXNlSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9GaWxlRXh0ZW5zaW9uSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvTWF4RmlsZXNIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL1JlbWFpbmluZ0NhbGNBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hcHBseUZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hdHRhY2hDb25zdE5hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9CYXNlSW50ZXJuYWxNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9DdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9EYXlfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0hvdXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL01pbl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvTW9udGhfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL1llYXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGREYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0ZhbGxCYWNrRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0xlbmd0aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF0ZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXlJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub0hvdXJJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub01pbnV0ZUluTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvTW9udGhJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub1RpbWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvV2Vla0luTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvWWVhckluTXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9nZXRGaWx0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvbWFpbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9DYWxjdWxhdGVkSHRtbFN0cmluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vaXRlcmF0ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlTm9kZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2luaXQvaW5pdEVsZW1lbnRvci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2luaXQvaW5pdEZvcm0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvQ2hhbmdlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9JbnB1dERhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvTm9MaXN0ZW5EYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL1JhbmdlRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9SZW5kZXJTdGF0ZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVIb29rLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVTZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZVZhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9Ccm93c2VyUmVwb3J0aW5nLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1JlcG9ydGluZ0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVwb3J0aW5nSW50ZXJmYWNlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1Jlc3RyaWN0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9OYXRpdmVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL0Jhc2VTaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbEhpZGRlbkFycmF5LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxSYW5nZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsUmVuZGVyU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9BamF4U3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0Jhc2VTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9SZWxvYWRTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VwcG9ydHMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9tYWluLnBjc3MiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUlucHV0LCBwb3B1bGF0ZUlucHV0cyB9IGZyb20gJy4vaW5wdXRzL2Z1bmN0aW9ucyc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuL3N1Ym1pdC9Gb3JtU3VibWl0JztcbmltcG9ydCBxdWVyeUJ5QXR0clZhbHVlIGZyb20gJy4vaHRtbC5tYWNyby9xdWVyeUJ5QXR0clZhbHVlJztcbmltcG9ydCBpdGVyYXRlSmZiQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVKZmJDb21tZW50cyc7XG5pbXBvcnQgb2JzZXJ2ZUNvbW1lbnQgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50JztcbmltcG9ydCBvYnNlcnZlTWFjcm9BdHRyIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyJztcbmltcG9ydCBvYnNlcnZlTm9kZSBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU5vZGUnO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dHNBbGwgfSBmcm9tICcuL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xuaW1wb3J0IFJlcG9ydGluZ0NvbnRleHQgZnJvbSAnLi9yZXBvcnRpbmcvUmVwb3J0aW5nQ29udGV4dCc7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmNvbnN0IHtcblx0ICAgICAgZG9BY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuZnVuY3Rpb24gT2JzZXJ2YWJsZSggcGFyZW50ID0gbnVsbCApIHtcblx0dGhpcy5wYXJlbnQgICAgID0gcGFyZW50O1xuXHR0aGlzLmRhdGFJbnB1dHMgPSB7fTtcblx0dGhpcy5mb3JtICAgICAgID0gbnVsbDtcblx0dGhpcy5tdWx0aXN0ZXAgID0gbnVsbDtcblx0dGhpcy5yb290Tm9kZSAgID0gbnVsbDtcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKlxuXHQgKiBAdHlwZSB7UmVwb3J0aW5nQ29udGV4dH1cblx0ICovXG5cdHRoaXMuY29udGV4dCA9IHRoaXMucGFyZW50ID8gbnVsbCA6IG5ldyBSZXBvcnRpbmdDb250ZXh0KCB0aGlzICk7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge1JlcGVhdGVyRGF0YXxudWxsfVxuXHQgKi9cblx0cGFyZW50OiBudWxsLFxuXHQvKipcblx0ICoge1xuXHQgKiAgICAgW2ZpZWxkX25hbWVdOiB7SW5wdXREYXRhfVxuXHQgKiB9XG5cdCAqL1xuXHRkYXRhSW5wdXRzOiB7fSxcblxuXHQvKipcblx0ICogQHR5cGUge0Zvcm1TdWJtaXR9XG5cdCAqL1xuXHRmb3JtOiBudWxsLFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7TXVsdGlTdGVwU3RhdGV9XG5cdCAqL1xuXHRtdWx0aXN0ZXA6IG51bGwsXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MRm9ybUVsZW1lbnR9XG5cdCAqL1xuXHRyb290Tm9kZTogbnVsbCxcblx0aXNPYnNlcnZlZDogZmFsc2UsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR2YWx1ZTogbnVsbCxcblx0b2JzZXJ2ZSAoIHJvb3QgPSBudWxsICkge1xuXHRcdGlmICggdGhpcy5pc09ic2VydmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIG51bGwgIT09IHJvb3QgKSB7XG5cdFx0XHR0aGlzLnJvb3ROb2RlID0gcm9vdDtcblx0XHR9XG5cdFx0dGhpcy5pc09ic2VydmVkID0gdHJ1ZTtcblxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuYmVmb3JlJywgdGhpcyApO1xuXG5cdFx0dGhpcy5pbml0U3VibWl0SGFuZGxlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSBkYXRhSW5wdXRzIHdpdGggZmllbGRzLlxuXHRcdCAqIFdpdGhvdXQgdmFsdWVzXG5cdFx0ICovXG5cdFx0dGhpcy5pbml0RmllbGRzKCk7XG5cblx0XHQvKipcblx0XHQgKiBTZXR1cCBmaWVsZHMgdmFsdWVzIGFuZCBtYWtlIHRoZW0gcmVhY3RpdmVcblx0XHQgKi9cblx0XHR0aGlzLm1ha2VSZWFjdGl2ZVByb3h5KCk7XG5cblx0XHR0aGlzLmluaXRNYWNyb3MoKTtcblxuXHRcdHRoaXMuaW5pdEFjdGlvbkJ1dHRvbnMoKTtcblxuXHRcdHRoaXMuaW5pdFZhbHVlKCk7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmFmdGVyJywgdGhpcyApO1xuXHR9LFxuXG5cdGluaXRGaWVsZHMgKCkge1xuXHRcdGZvciAoIGNvbnN0IGZvcm1FbGVtZW50IG9mIHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCdbZGF0YS1qZmItc3luY10nLFxuXHRcdCkgKSB7XG5cdFx0XHR0aGlzLnB1c2hJbnB1dCggZm9ybUVsZW1lbnQgKTtcblx0XHR9XG5cdH0sXG5cblx0aW5pdE1hY3JvcyAoKSB7XG5cdFx0Ly8gbWFjcm9zIGFzIGh0bWwtY29tbWVudHNcblx0XHRmb3IgKFxuXHRcdFx0Y29uc3QgY29tbWVudCBvZiBpdGVyYXRlSmZiQ29tbWVudHMoIHRoaXMucm9vdE5vZGUgKVxuXHRcdFx0KSB7XG5cdFx0XHRvYnNlcnZlQ29tbWVudCggY29tbWVudCwgdGhpcyApO1xuXHRcdH1cblxuXHRcdC8vIG1hY3JvcyBpbiBkZWZhdWx0IGF0dHJpYnV0ZXNcblx0XHRjb25zdCBub2Rlc1dpdGhBdHRycyA9IHF1ZXJ5QnlBdHRyVmFsdWUoIHRoaXMucm9vdE5vZGUsICdKRkJfRklFTEQ6OicgKTtcblxuXHRcdGNvbnN0IHsgcmVwbGFjZUF0dHJzID0gW10gfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZVdpdGhBdHRyIG9mIG5vZGVzV2l0aEF0dHJzICkge1xuXHRcdFx0Zm9yICggY29uc3QgcmVwbGFjZUF0dHIgb2YgcmVwbGFjZUF0dHJzICkge1xuXHRcdFx0XHRvYnNlcnZlTWFjcm9BdHRyKCBub2RlV2l0aEF0dHIsIHJlcGxhY2VBdHRyLCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gbWFjcm9zIGluIGRhdGEtamZiLW1hY3JvIGF0dHJpYnV0ZVxuXHRcdC8vIHJlc3VsdCB3aWxsIHBsYWNlZCBpbnNpZGUgcmVsYXRpdmUgbm9kZVxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J1tkYXRhLWpmYi1tYWNyb106bm90KFtkYXRhLWpmYi1vYnNlcnZlZF0pJyxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBub2RlcyApIHtcblx0XHRcdG9ic2VydmVOb2RlKCBub2RlLCB0aGlzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGluaXRTdWJtaXRIYW5kbGVyICgpIHtcblx0XHQvLyBjaGVjayBpcyBjdXJyZW50IG9iamVjdCByZWxhdGVkIGZvciBnbG9iYWwgZm9ybSBlbGVtZW50XG5cdFx0aWYgKCB0aGlzLnBhcmVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybVN1Ym1pdCggdGhpcyApO1xuXHR9LFxuXG5cdGluaXRBY3Rpb25CdXR0b25zICgpIHtcblx0XHRpZiAoIHRoaXMucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKCBjb25zdCBidXR0b24gb2YgdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19idXR0b24tc3dpdGNoLXN0YXRlJyxcblx0XHQpICkge1xuXHRcdFx0bGV0IHN0YXRlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHN0YXRlcyA9IEpTT04ucGFyc2UoIGJ1dHRvbi5kYXRhc2V0LnN3aXRjaE9uICk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5nZXRTdGF0ZSgpLnZhbHVlLmN1cnJlbnQgPSBzdGF0ZXM7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFByb21pc2U8bmV2ZXI+fFByb21pc2U8dm9pZD4+fVxuXHQgKi9cblx0YXN5bmMgaW5wdXRzQXJlVmFsaWQgKCkge1xuXHRcdGNvbnN0IGludmFsaWQgPSBhd2FpdCB2YWxpZGF0ZUlucHV0c0FsbChcblx0XHRcdHBvcHVsYXRlSW5wdXRzKCB0aGlzLmdldElucHV0cygpICksXG5cdFx0KTtcblxuXHRcdHJldHVybiBCb29sZWFuKCBpbnZhbGlkLmxlbmd0aCApXG5cdFx0ICAgICAgID8gUHJvbWlzZS5yZWplY3QoIGludmFsaWQgKVxuXHRcdCAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuXHR9LFxuXG5cdHdhdGNoICggZmllbGROYW1lLCBjYWxsYWJsZSApIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoIGZpZWxkTmFtZSApO1xuXG5cdFx0aWYgKCBpbnB1dCApIHtcblx0XHRcdHJldHVybiBpbnB1dC53YXRjaCggY2FsbGFibGUgKTtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRgZGF0YUlucHV0cyBpbiBPYnNlcnZhYmxlIGRvblxcJ3QgaGF2ZSAkeyBmaWVsZE5hbWUgfSBmaWVsZGAsXG5cdFx0KTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIG5vZGUgICAge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSByZXBsYWNlIHtCb29sZWFufVxuXHQgKi9cblx0b2JzZXJ2ZUlucHV0ICggbm9kZSwgcmVwbGFjZSA9IGZhbHNlICkge1xuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5wdXNoSW5wdXQoIG5vZGUsIHJlcGxhY2UgKTtcblxuXHRcdGlucHV0Lm1ha2VSZWFjdGl2ZSgpO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5pbnB1dC5tYW51YWwnLCBpbnB1dCApO1xuXHR9LFxuXG5cdG1ha2VSZWFjdGl2ZVByb3h5ICgpIHtcblx0XHRmb3IgKCBjb25zdCBjdXJyZW50IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRjdXJyZW50Lm1ha2VSZWFjdGl2ZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIG5vZGUgICAge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSByZXBsYWNlIHtCb29sZWFufVxuXHQgKi9cblx0cHVzaElucHV0ICggbm9kZSwgcmVwbGFjZSA9IGZhbHNlICkge1xuXHRcdC8vIHByZXZlbnQgc2F2aW5nIGlucHV0cyBmcm9tIHByZXNldCByZXBlYXRlciBpdGVtcyBpbiByb290IG9iamVjdFxuXHRcdC8vIHRob3NlIGlucHV0cyB3b3VsZCBzYXZlZCBpbiBPYnNlcnZhYmxlUm93IG9iamVjdFxuXG5cdFx0aWYgKCAhdGhpcy5wYXJlbnQgJiZcblx0XHRcdG5vZGUucGFyZW50RWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dERhdGEgPSBjcmVhdGVJbnB1dCggbm9kZSwgdGhpcyApO1xuXHRcdGNvbnN0IGZpbmRJbnB1dCA9IHRoaXMuZGF0YUlucHV0c1sgaW5wdXREYXRhLmdldE5hbWUoKSBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCBmYWxzZSA9PT0gZmluZElucHV0IHx8IHJlcGxhY2UgKSB7XG5cdFx0XHR0aGlzLmRhdGFJbnB1dHNbIGlucHV0RGF0YS5nZXROYW1lKCkgXSA9IGlucHV0RGF0YTtcblxuXHRcdFx0cmV0dXJuIGlucHV0RGF0YTtcblx0XHR9XG5cblx0XHRmaW5kSW5wdXQubWVyZ2UoIGlucHV0RGF0YSApO1xuXG5cdFx0cmV0dXJuIGZpbmRJbnB1dDtcblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7QXJyYXk8SW5wdXREYXRhPn1cblx0ICovXG5cdGdldElucHV0cyAoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoIHRoaXMuZGF0YUlucHV0cyApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtudWxsfFJlbmRlclN0YXRlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHRnZXRTdGF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SW5wdXQoICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlcycgKTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtICBmaWVsZE5hbWVcblx0ICogQHJldHVybiB7bnVsbHxJbnB1dERhdGF9XG5cdCAqL1xuXHRnZXRJbnB1dCAoIGZpZWxkTmFtZSApIHtcblx0XHRpZiAoIHRoaXMuZGF0YUlucHV0cy5oYXNPd25Qcm9wZXJ0eSggZmllbGROYW1lICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhSW5wdXRzWyBmaWVsZE5hbWUgXTtcblx0XHR9XG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucGFyZW50Py5yb290ID8/IG51bGw7XG5cblx0XHRpZiAoICFyb290ICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCByb290LmRhdGFJbnB1dHMuaGFzT3duUHJvcGVydHkoIGZpZWxkTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIHJvb3QuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdGdldFN1Ym1pdCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybSA/IHRoaXMuZm9ybSA6IHRoaXMucGFyZW50LnJvb3QuZm9ybTtcblx0fSxcblx0Z2V0Q29udGV4dCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dCA/PyB0aGlzLnBhcmVudC5yb290LmNvbnRleHQ7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNzExXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjAuOFxuXHQgKi9cblx0cmVtb3ZlICgpIHtcblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0aW5wdXQub25SZW1vdmUoKTtcblx0XHR9XG5cdH0sXG5cdC8qKlxuXHQgKiBSdW5zIG9ubHkgb25jZSBvbiB3aW5kb3cgXCJsb2FkXCIgZXZlbnRcblx0ICovXG5cdHJlUXVlcnlWYWx1ZXMgKCkge1xuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRpbnB1dC5yZVF1ZXJ5VmFsdWUoKTtcblx0XHR9XG5cdH0sXG5cdGluaXRWYWx1ZSgpIHtcblx0XHR0aGlzLnZhbHVlID0gbmV3IFJlYWN0aXZlVmFyKCB7fSApO1xuXG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0Y29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQsXG5cdFx0XHQpO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBbIGZpZWxkTmFtZSwgdmFsdWUgXSBvZiBlbnRyaWVzICkge1xuXHRcdFx0XHR0aGlzLmdldElucHV0KCBmaWVsZE5hbWUgKS5yZXZlcnRWYWx1ZSggdmFsdWUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0aW5wdXQud2F0Y2goICgpID0+IHtcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50WyBpbnB1dC5nZXROYW1lKCkgXSA9IGlucHV0LmdldFZhbHVlKCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZS5tYWtlKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlOyIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIEJhc2VIdG1sQXR0cigpIHtcblx0dGhpcy5hdHRyTmFtZSAgID0gJyc7XG5cdHRoaXMuaW5pdGlhbCAgICA9IG51bGw7XG5cdHRoaXMuaXNGcm9tRGF0YSA9IGZhbHNlO1xuXHR0aGlzLnZhbHVlICAgICAgPSBudWxsO1xufVxuXG5CYXNlSHRtbEF0dHIucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogTmFtZSBvZiBkYXRhIGF0dHJpYnV0ZVxuXHQgKi9cblx0YXR0ck5hbWU6ICcnLFxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGlucHV0OiBudWxsLFxuXHRpbml0aWFsOiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dmFsdWU6IG51bGwsXG5cdG9ic2VydmUoKSB7XG5cdFx0dGhpcy52YWx1ZSA9IG5ldyBSZWFjdGl2ZVZhciggdGhpcy5pbml0aWFsICk7XG5cdFx0dGhpcy52YWx1ZS5tYWtlKCk7XG5cblx0XHR0aGlzLmFkZFdhdGNoZXJBdHRyKCk7XG5cdH0sXG5cdG5vZGVTaWduYWwoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0bm9kZVsgdGhpcy5hdHRyTmFtZSBdID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXHR9LFxuXHRhZGRXYXRjaGVyQXR0cigpIHtcblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLm5vZGVTaWduYWwoKSApO1xuXHR9LFxuXHQvKipcblx0ICogSWYgeW91IG5lZWQgc3BlY2lmaWMgY2hlY2ssXG5cdCAqIHlvdSBjYW4gcmV3cml0ZSB0aGlzIGZ1bmN0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGlzU3VwcG9ydGVkKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0Y29uc3QgaGFzSW5Sb290ICAgID0gLTEgIT09IG5vZGVbIHRoaXMuYXR0ck5hbWUgXSA/PyAtMTtcblx0XHRjb25zdCBoYXNJbkRhdGFTZXQgPSBub2RlLmRhdGFzZXQuaGFzT3duUHJvcGVydHkoIHRoaXMuYXR0ck5hbWUgKTtcblxuXHRcdGlmICggIWhhc0luRGF0YVNldCAmJiAhaGFzSW5Sb290ICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhbCA9IHRoaXMuZ2V0SW5pdGlhbCggaW5wdXQgKTtcblxuXHRcdHJldHVybiBCb29sZWFuKCB0aGlzLmluaXRpYWwgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Knxib29sZWFufVxuXHQgKi9cblx0Z2V0SW5pdGlhbCggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHJldHVybiBub2RlLmRhdGFzZXRbIHRoaXMuYXR0ck5hbWUgXSB8fCBub2RlWyB0aGlzLmF0dHJOYW1lIF0gfHwgZmFsc2U7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKi9cblx0c2V0SW5wdXQoIGlucHV0ICkge1xuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VIdG1sQXR0cjsiLCJpbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL01heEZpbGVzSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBGaWxlRXh0ZW5zaW9uSHRtbEF0dHIoKSB7XG5cdE1heEZpbGVzSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAnZmlsZV9leHQnO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gJ2ZpbGUnID09PSBub2RlLnR5cGUgJiYgQm9vbGVhbiggbm9kZS5hY2NlcHQgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHR0aGlzLmluaXRpYWwgPSBub2RlLmFjY2VwdC5zcGxpdCggJywnICk7XG5cdH07XG5cblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRub2RlLmFjY2VwdCA9IHRoaXMudmFsdWUuY3VycmVudC5qb2luKCAnLCcgKTtcblx0XHR9ICk7XG5cdH07XG59XG5cbkZpbGVFeHRlbnNpb25IdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRXh0ZW5zaW9uSHRtbEF0dHI7IiwiaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9NYXhGaWxlc0h0bWxBdHRyJztcblxuZnVuY3Rpb24gTWF4RmlsZVNpemVIdG1sQXR0cigpIHtcblx0TWF4RmlsZXNIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdtYXhfc2l6ZSc7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0TWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblxuXHRcdGNvbnN0IHsgbWF4X3NpemU6IG1heFNpemUgPSAxIH0gPSBKU09OLnBhcnNlKFxuXHRcdFx0aW5wdXQucHJldmlld3NDb250YWluZXIuZGF0YXNldC5hcmdzLFxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXRpYWwgPSArbWF4U2l6ZTtcblx0fTtcbn1cblxuTWF4RmlsZVNpemVIdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNYXhGaWxlU2l6ZUh0bWxBdHRyOyIsImltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9CYXNlSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBNYXhGaWxlc0h0bWxBdHRyKCkge1xuXHRCYXNlSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAnbWF4X2ZpbGVzJztcblxuXHQvKipcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cblx0XHRjb25zdCB7IG1heF9maWxlczogbWF4RmlsZXMgPSAxIH0gPSBKU09OLnBhcnNlKFxuXHRcdFx0aW5wdXQucHJldmlld3NDb250YWluZXIuZGF0YXNldC5hcmdzLFxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXRpYWwgPSArbWF4RmlsZXM7XG5cdH07XG5cblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9ICgpID0+IHt9O1xufVxuXG5NYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZXNIdG1sQXR0cjsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vQmFzZUh0bWxBdHRyJztcblxuZnVuY3Rpb24gUmVtYWluaW5nQ2FsY0F0dHIoKSB7XG5cdEJhc2VIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdyZW1haW5pbmcnO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiBpbnB1dC5hdHRycy5oYXNPd25Qcm9wZXJ0eSggJ21heExlbmd0aCcgKTtcblx0fTtcblxuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IGlucHV0LmF0dHJzO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBpbnB1dC52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHRcdHRoaXMuaW5pdGlhbCA9IG1heExlbmd0aC52YWx1ZS5jdXJyZW50IC0gY3VycmVudDtcblx0fTtcblxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gKCkgPT4ge307XG5cblx0dGhpcy5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzICk7XG5cblx0XHR0aGlzLmlucHV0LnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUF0dHIoKSApO1xuXHRcdHRoaXMuaW5wdXQuYXR0cnMubWF4TGVuZ3RoLnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUF0dHIoKSApO1xuXHR9O1xuXG5cdHRoaXMudXBkYXRlQXR0ciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IG1heExlbmd0aCB9ID0gdGhpcy5pbnB1dC5hdHRycztcblx0XHRjb25zdCBjdXJyZW50ICAgICAgID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG1heExlbmd0aC52YWx1ZS5jdXJyZW50IC0gY3VycmVudDtcblx0fTtcbn1cblxuUmVtYWluaW5nQ2FsY0F0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUh0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZW1haW5pbmdDYWxjQXR0cjsiLCIvKipcbiAqIEBwYXJhbSBmb3JtdWxhXG4gKiBAcGFyYW0gcm9vdCAgICB7T2JzZXJ2YWJsZX1cbiAqIEBjbGFzc1xuICovXG5pbXBvcnQgYXBwbHlGaWx0ZXJzIGZyb20gJy4vYXBwbHlGaWx0ZXJzJztcbmltcG9ydCBnZXRGaWx0ZXJzIGZyb20gJy4vZ2V0RmlsdGVycyc7XG5pbXBvcnQgYXR0YWNoQ29uc3ROYW1lc3BhY2UgZnJvbSAnLi9hdHRhY2hDb25zdE5hbWVzcGFjZSc7XG5pbXBvcnQgSW5wdXREYXRhIGZyb20gJy4uL2lucHV0cy9JbnB1dERhdGEnO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVyczogd3BGaWx0ZXJzLFxuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmN1c3RvbS5mb3JtdWxhLm1hY3JvJyxcblx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRhdHRhY2hDb25zdE5hbWVzcGFjZSxcbik7XG5cbmZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsRnJvbU5vZGUobm9kZSkge1xuXHRpZiAoIW5vZGUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShub2RlLnNlbGVjdGVkT3B0aW9ucyB8fCBbXSlcblx0XHRcdC5tYXAob3B0aW9uID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblx0aWYgKFxuXHRcdChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSAmJlxuXHRcdCFub2RlLmNoZWNrZWRcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmIChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBub2RlLmNsb3Nlc3QoJ2xhYmVsJyk7XG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblx0XHRyZXR1cm4gU3RyaW5nKFxuXHRcdFx0dGV4dE5vZGU/LnRleHRDb250ZW50IHx8IGxhYmVsLnRleHRDb250ZW50IHx8IG5vZGUudmFsdWUgfHwgJydcblx0XHQpLnRyaW0oKTtcblx0fVxuXHRyZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0ZWRJbnB1dE9wdGlvbkxhYmVsKHJlbGF0ZWRJbnB1dCkge1xuXHRjb25zdCBsYWJlbHMgPSBBcnJheS5mcm9tKHJlbGF0ZWRJbnB1dC5ub2RlcyB8fCBbXSlcblx0XHQubWFwKGdldE9wdGlvbkxhYmVsRnJvbU5vZGUpXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblx0cmV0dXJuIGxhYmVscy5sZW5ndGhcblx0XHQ/IGxhYmVscy5qb2luKCcsICcpXG5cdFx0OiByZWxhdGVkSW5wdXQudmFsdWUuY3VycmVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gcm9vdCAgICB7SW5wdXREYXRhfE9ic2VydmFibGV9XG4gKiBAcGFyYW0gb3B0aW9ucyB7e2ZvcmNlRnVuY3Rpb246IGJvb2xlYW59fVxuICovXG5mdW5jdGlvbiBDYWxjdWxhdGVkRm9ybXVsYShcblx0cm9vdCxcblx0b3B0aW9ucyA9IHt9LFxuKSB7XG5cdHRoaXMucGFydHMgICAgICAgID0gW107XG5cdHRoaXMucmVsYXRlZCAgICAgID0gW107XG5cdHRoaXMucmVsYXRlZEF0dHJzID0gW107XG5cdHRoaXMucmVnZXhwICAgICAgID0gLyUoW1xcd1xcLV0uKj9cXFM/KSUvZztcblx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcblxuXHRjb25zdCB7IGZvcmNlRnVuY3Rpb24gPSBmYWxzZSB9ID0gb3B0aW9ucztcblxuXHR0aGlzLmZvcmNlRnVuY3Rpb24gPSBmb3JjZUZ1bmN0aW9uO1xuXG5cdGlmICggcm9vdCBpbnN0YW5jZW9mIElucHV0RGF0YSApIHtcblx0XHR0aGlzLmlucHV0ID0gcm9vdDtcblx0fVxuXG5cdHRoaXMucm9vdCA9IHRoaXMuaW5wdXQ/LnJvb3QgPz8gcm9vdDtcbn1cblxuQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlID0ge1xuXHQvLyByYXcgdmFsdWVcblx0Zm9ybXVsYTogbnVsbCxcblx0cGFydHM6IFtdLFxuXHRyZWxhdGVkOiBbXSxcblx0cmVsYXRlZEF0dHJzOiBbXSxcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRpbnB1dDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfE9ic2VydmFibGVSb3d9XG5cdCAqL1xuXHRyb290OiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlZ0V4cH1cblx0ICovXG5cdHJlZ2V4cDogbnVsbCxcblx0Zm9yY2VGdW5jdGlvbjogZmFsc2UsXG5cdC8qKlxuXHQgKiBAdHlwZSB7RnVuY3Rpb259XG5cdCAqL1xuXHRzZXRSZXN1bHQ6ICgpID0+IHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdDYWxjdWxhdGVkRm9ybXVsYS5zZXRSZXN1bHQgaXMgbm90IHNldCEnICk7XG5cdH0sXG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gIHJlbGF0ZWRJbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHsqfVxuXHQgKi9cblx0cmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSB7XG5cdFx0cmV0dXJuIHJlbGF0ZWRJbnB1dC52YWx1ZS5jdXJyZW50O1xuXHR9LFxuXHRyZWxhdGVkTGFiZWxDYWxsYmFjayhyZWxhdGVkSW5wdXQpIHtcblx0XHRyZXR1cm4gZ2V0UmVsYXRlZElucHV0T3B0aW9uTGFiZWwocmVsYXRlZElucHV0KTtcblx0fSxcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKi9cblx0b2JzZXJ2ZSggdmFsdWUgKSB7XG5cblx0XHR0aGlzLmZvcm11bGEgPSB2YWx1ZTtcblxuXHRcdGlmICggIUFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCB2YWx1ZSApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFsdWUuZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0XHR0aGlzLm9ic2VydmVJdGVtKCBpdGVtICk7XG5cdFx0fSApO1xuXHR9LFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHZhbHVlIHtTdHJpbmd9XG5cdCAqL1xuXHRvYnNlcnZlSXRlbSggdmFsdWUgKSB7XG5cblx0XHRsZXQgbWF0Y2g7XG5cdFx0bGV0IHByZXZJbmRleCA9IDA7XG5cblx0XHR2YWx1ZSArPSAnJztcblxuXHRcdHdoaWxlICggKFxuXHRcdFx0bWF0Y2ggPSB0aGlzLnJlZ2V4cC5leGVjKCB2YWx1ZSApXG5cdFx0KSAhPT0gbnVsbCApIHtcblx0XHRcdGNvbnN0IHBhcnQgPSB0aGlzLm9ic2VydmVNYWNybyggbWF0Y2hbIDEgXSApO1xuXG5cdFx0XHRpZiAoIDAgIT09IG1hdGNoLmluZGV4ICkge1xuXHRcdFx0XHR0aGlzLnBhcnRzLnB1c2goIHZhbHVlLnNsaWNlKCBwcmV2SW5kZXgsIG1hdGNoLmluZGV4ICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cHJldkluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsgMCBdLmxlbmd0aDtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gcGFydCApIHtcblx0XHRcdFx0dGhpcy5vbk1pc3NpbmdQYXJ0KCBtYXRjaFsgMCBdICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5wYXJ0cy5wdXNoKCBwYXJ0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gc2F2ZSBsYXN0IHBhcnRcblx0XHRpZiAoIHByZXZJbmRleCA9PT0gdmFsdWUubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucGFydHMucHVzaCggdmFsdWUuc2xpY2UoIHByZXZJbmRleCApICk7XG5cblx0XHRpZiAoIDEgPT09IHRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5wYXJ0cyA9IFtdO1xuXHRcdH1cblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dE1hdGNoIHtTdHJpbmd9XG5cdCAqL1xuXHRvbk1pc3NpbmdQYXJ0KCBpbnB1dE1hdGNoICkge1xuXHRcdHRoaXMucGFydHMucHVzaCggaW5wdXRNYXRjaCApO1xuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIGZpZWxkTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0aXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApIHtcblxuXHRcdGNvbnN0IGlzRmllbGROb2RlID0gdGhpcy5yb290LmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xuXG5cdFx0aWYgKCB1bmRlZmluZWQgPT09IGlzRmllbGROb2RlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgbm9kZSBleGlzdHMgaW4gdGhlIHJvb3ROb2RlLlxuXHRcdCAqIElmIHRoZSBub2RlIGRvZXMgbm90IGV4aXN0LCBhbmFseXplIHRoZSBmb3JtdWxhIHRvIGRldGVybWluZSBhbiBhZGp1c3RlZCB2YWx1ZVxuXHRcdCAqIGJhc2VkIG9uIHRoZSBvcGVyYXRvcnMgc3Vycm91bmRpbmcgdGhlIHBsYWNlaG9sZGVyLlxuXHRcdCAqIEBzaW5jZSAzLjQuNVxuXHRcdCAqXG5cdFx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTE3ODZcblx0XHQgKi9cblx0XHRsZXQgZXhpc3ROb2RlID1cblx0XHRcdHRoaXMucm9vdC5yb290Tm9kZVsgZmllbGROYW1lIF1cblx0XHRcdHx8IHRoaXMucm9vdC5yb290Tm9kZVsgZmllbGROYW1lICsgJ1tdJyBdXG5cdFx0XHR8fCB0aGlzLnJvb3Qucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWZpZWxkLW5hbWU9XCInICsgZmllbGROYW1lICsgJ1wiXScgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZW4gd2UgY2FsbCBxdWVyeVNlbGVjdG9yQWxsIGl0IHJldHVybnMgZW1wdHkgTm9kZUxpc3QgYXJyYXkgaWYgdGhlIGVsZW1lbnQgbm90IGZvdW5kLCBzbyB3ZSBuZWVkIHRvIHJlc2V0IGl0XG5cdFx0ICovXG5cdFx0aWYgKCBleGlzdE5vZGUgJiYgMCA9PT0gZXhpc3ROb2RlLmxlbmd0aCApIHtcblx0XHRcdGV4aXN0Tm9kZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xNDU0NFxuXHRcdCAqL1xuXHRcdGlmICggdW5kZWZpbmVkID09PSBleGlzdE5vZGUgKSB7XG5cdFx0XHRjb25zdCBlc2MgPSBzID0+IHMucmVwbGFjZSgvKFtcXFxcXiQqKz8uKCl8e31cXFtcXF1dKS9nLCAnXFxcXCQxJyk7XG5cdFx0XHRjb25zdCBmID0gZXNjKCBmaWVsZE5hbWUgKTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0b3IgPVxuXHRcdFx0XHRgW25hbWUkPVwiWyR7Zn1dXCJdLGAgK1xuXHRcdFx0XHRgW25hbWUkPVwiWyR7Zn1dW11cIl0sYCArXG5cdFx0XHRcdGBbbmFtZSo9XCJbJHtmfV1bXCJdYDtcblxuXHRcdFx0Y29uc3QgZm91bmQgPSB0aGlzLnJvb3Qucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcblx0XHRcdGlmICggZm91bmQgJiYgZm91bmQubGVuZ3RoICkge1xuXHRcdFx0XHRleGlzdE5vZGUgPSBmb3VuZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAc2VlICAgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEzNzMwXG5cdFx0ICogQHNpbmNlIDMuNC41LjFcblx0XHQgKi9cblx0XHRleGlzdE5vZGUgPSB3cEZpbHRlcnMoXG5cdFx0XHQnamV0LmZiLmZvcm11bGEubm9kZS5leGlzdHMnLFxuXHRcdFx0ZXhpc3ROb2RlLFxuXHRcdFx0ZmllbGROYW1lLCBcblx0XHRcdHRoaXNcblx0XHQpO1xuXG5cdFx0cmV0dXJuIGV4aXN0Tm9kZTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIGN1cnJlbnQge1N0cmluZ31cblx0ICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICopfCp9XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRvYnNlcnZlTWFjcm8oIGN1cnJlbnQgKSB7XG5cdFx0aWYgKCBudWxsID09PSB0aGlzLmZvcm11bGEgKSB7XG5cdFx0XHR0aGlzLmZvcm11bGEgPSBjdXJyZW50O1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLXVudXNlZC12YXJzLWJlZm9yZS1yZXR1cm5cblx0XHRjb25zdCBbIG5hbWUsIC4uLmZpbHRlcnMgXSA9IGN1cnJlbnQuc3BsaXQoICd8JyApO1xuXHRcdGNvbnN0IHBhcnNlZE5hbWUgICAgICAgICAgID0gbmFtZS5tYXRjaCggL1tcXHdcXC06XSsvZyApO1xuXG5cblxuXHRcdGlmICggIXBhcnNlZE5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0bGV0IFsgZmllbGROYW1lLCAuLi5wYXJhbXMgXSA9IHBhcnNlZE5hbWU7XG5cblx0XHRpZiAobmFtZS5pbmNsdWRlcygnOjonKSkge1xuXHRcdFx0Y29uc3QgW3Bvc3NpYmxlRmllbGROYW1lLCAuLi5wb3NzaWJsZVBhcmFtc10gPSBuYW1lLnNwbGl0KCc6OicpO1xuXHRcdFx0aWYgKHRoaXMucm9vdC5nZXRJbnB1dChwb3NzaWJsZUZpZWxkTmFtZSkpIHtcblx0XHRcdFx0ZmllbGROYW1lID0gcG9zc2libGVGaWVsZE5hbWU7XG5cdFx0XHRcdHBhcmFtcyA9IHBvc3NpYmxlUGFyYW1zO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBzZWUgICBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTM3MzBcblx0XHQgKiBAc2luY2UgMy40LjUuMSAobW92ZWQgdG8gYSBtZXRob2QgYW5kIGFkZGVkIGFkZGl0aW9uYWwgY2hlY2tzKVxuXHRcdCAqL1xuXHRcdGNvbnN0IGV4aXN0Tm9kZSA9IHRoaXMuaXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApO1xuXG5cblx0XHRpZiAoIGV4aXN0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoIGAlJHtmaWVsZE5hbWV9JWAsICdnJyApO1xuXG5cdFx0XHRsZXQgYWRqdXN0ZWRWYWx1ZSAgID0gMDtcblx0XHRcdGxldCBhZGp1c3RlZEZvcm11bGEgPSB0aGlzLmZvcm11bGE7XG5cdFx0XHRsZXQgbWF0Y2g7XG5cblx0XHRcdHdoaWxlICggbnVsbCAhPT0gKCBtYXRjaCA9IHJlZ2V4LmV4ZWMoIHRoaXMuZm9ybXVsYSApICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYmVmb3JlID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCAtIDEgXTtcblx0XHRcdFx0Y29uc3QgYWZ0ZXIgID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCBdO1xuXG5cdFx0XHRcdGlmICggJyonID09PSBiZWZvcmUgfHwgJy8nID09PSBiZWZvcmUgfHwgJyonID09PSBhZnRlciB8fCAnLycgPT09IGFmdGVyICkge1xuXHRcdFx0XHRcdGlmICggJy8nID09PSBiZWZvcmUgfHwgKCAnKicgPT09IGJlZm9yZSAmJiAnKicgPT09IGFmdGVyICkgKSB7XG5cdFx0XHRcdFx0XHRhZGp1c3RlZFZhbHVlID0gMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhZGp1c3RlZEZvcm11bGEgPSBhZGp1c3RlZEZvcm11bGEucmVwbGFjZSggbWF0Y2hbMF0sIGFkanVzdGVkVmFsdWUgKTtcblxuXHRcdFx0dGhpcy5mb3JtdWxhID0gYWRqdXN0ZWRGb3JtdWxhO1xuXG5cdFx0XHRyZXR1cm4gYWRqdXN0ZWRWYWx1ZTtcblx0XHR9XG5cblx0XHRjb25zdCByZWxhdGVkSW5wdXQgPSBmaWVsZE5hbWUgIT09ICd0aGlzJ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yb290LmdldElucHV0KCBmaWVsZE5hbWUgKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dDtcblxuXHRcdGlmICggIXJlbGF0ZWRJbnB1dCAmJiAhZmllbGROYW1lLmluY2x1ZGVzKCAnOjonICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tdW51c2VkLXZhcnMtYmVmb3JlLXJldHVyblxuXHRcdGNvbnN0IGZpbHRlcnNMaXN0ID0gZ2V0RmlsdGVycyggZmlsdGVycyApO1xuXG5cdFx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRcdGNvbnN0IGN1c3RvbVZhbHVlID0gd3BGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmN1c3RvbS5mb3JtdWxhLm1hY3JvJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdGZpZWxkTmFtZSxcblx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlKCksIGZpbHRlcnNMaXN0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlLCBmaWx0ZXJzTGlzdCApO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMucmVsYXRlZC5pbmNsdWRlcyggcmVsYXRlZElucHV0Lm5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xuXG5cdFx0XHR0aGlzLndhdGNoZXJzLnB1c2goXG5cdFx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoICFwYXJhbXM/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdFx0XHRcdHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSxcblx0XHRcdFx0ZmlsdGVyc0xpc3QsXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFsgYXR0ck5hbWUgXSA9IHBhcmFtcztcblxuXHRcdGlmICgnbGFiZWwnID09PSBhdHRyTmFtZSkge1xuXHRcdFx0cmV0dXJuICgpID0+IGFwcGx5RmlsdGVycyhcblx0XHRcdFx0dGhpcy5yZWxhdGVkTGFiZWxDYWxsYmFjayhyZWxhdGVkSW5wdXQpLFxuXHRcdFx0XHRmaWx0ZXJzTGlzdCxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhcmVsYXRlZElucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCBhdHRyTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7QmFzZUh0bWxBdHRyfVxuXHRcdCAqL1xuXHRcdGNvbnN0IGh0bWxBdHRyID0gcmVsYXRlZElucHV0LmF0dHJzWyBhdHRyTmFtZSBdO1xuXG5cdFx0aWYgKCAhdGhpcy5yZWxhdGVkQXR0cnMuaW5jbHVkZXMoIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZEF0dHJzLnB1c2goIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKTtcblxuXHRcdFx0dGhpcy53YXRjaGVycy5wdXNoKFxuXHRcdFx0XHRodG1sQXR0ci52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKCBodG1sQXR0ci52YWx1ZS5jdXJyZW50LCBmaWx0ZXJzTGlzdCApO1xuXHR9LFxuXHRjYWxjdWxhdGVTdHJpbmcoKSB7XG5cdFx0aWYgKCAhdGhpcy5wYXJ0cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtcblx0XHRcdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxuXHRcdCAgICAgIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyTWFpbj8uZmlsdGVycyA/PyB7fTtcblxuXHRcdHJldHVybiB0aGlzLnBhcnRzLm1hcCggY3VycmVudCA9PiB7XG5cdFx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjdXJyZW50ICkge1xuXG5cdFx0XHRcdGlmICggIXRoaXMuaW5wdXQ/Lm5vZGVzXG5cdFx0XHRcdFx0fHwgZmFsc2UgPT09IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnNcblx0XHRcdFx0XHR8fCAnc3RyaW5nJyAhPT0gdHlwZW9mIGN1cnJlbnRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjdXJyZW50ID0gd3BGaWx0ZXJzKFxuXHRcdFx0XHRcdCdqZXQuZmIub25DYWxjdWxhdGUucGFydCcsXG5cdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybiBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzKFxuXHRcdFx0XHRcdCdmb3Jtcy9jYWxjdWxhdGVkLWZvcm11bGEtYmVmb3JlLXZhbHVlJyxcblx0XHRcdFx0XHRjdXJyZW50LFxuXHRcdFx0XHRcdGpRdWVyeSggdGhpcy5pbnB1dC5ub2Rlc1sgMCBdICksXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHQgPSBjdXJyZW50KCk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCAgICAgICBudWxsID09PSByZXN1bHQgfHxcblx0XHRcdFx0ICAgICAgICcnID09PSByZXN1bHQgfHxcblx0XHRcdFx0ICAgICAgIE51bWJlci5pc05hTiggcmVzdWx0IClcblx0XHRcdCAgICAgICApID8gdGhpcy5lbXB0eVZhbHVlKCkgOiByZXN1bHQ7XG5cdFx0fSApLmpvaW4oICcnICk7XG5cdH0sXG5cdGVtcHR5VmFsdWUoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9LFxuXHRjYWxjdWxhdGUoKSB7XG5cdFx0aWYgKCAhdGhpcy5wYXJ0cy5sZW5ndGggJiYgIXRoaXMuZm9yY2VGdW5jdGlvbiApIHtcblx0XHRcdHJldHVybiB0aGlzLmZvcm11bGE7XG5cdFx0fVxuXG5cdFx0bGV0IGZvcm11bGEgPSB0aGlzLmNhbGN1bGF0ZVN0cmluZygpO1xuXG5cdFx0aWYgKCdzdHJpbmcnID09PSB0eXBlb2YgZm9ybXVsYSkge1xuXHRcdFx0Zm9ybXVsYSA9IGZvcm11bGEucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJyk7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5ldyBGdW5jdGlvbiggJ3JldHVybiAnICsgZm9ybXVsYSApXG5cdFx0XHQpKCk7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHQvL2NvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHR0aGlzLnNob3dFcnJvciggZm9ybXVsYSApO1xuXHRcdH1cblxuXHR9LFxuXHRjbGVhcldhdGNoZXJzKCkge1xuXHRcdHRoaXMud2F0Y2hlcnMuZm9yRWFjaChcblx0XHRcdGN1cnJlbnQgPT4gJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnQgJiYgY3VycmVudCgpLFxuXHRcdCk7XG5cdFx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcblx0XHR0aGlzLnJlbGF0ZWRBdHRycyA9IFtdO1xuXHRcdHRoaXMucmVsYXRlZCAgICAgID0gW107XG5cdH0sXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0c2hvd0Vycm9yKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZ3JvdXAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J0pldEZvcm1CdWlsZGVyOiBZb3UgaGF2ZSBpbnZhbGlkIGNhbGN1bGF0ZWQgZm9ybXVsYScsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdHRoaXMuc2hvd0Vycm9yRGV0YWlscyggZm9ybXVsYSApO1xuXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHR9LFxuXHRzaG93RXJyb3JEZXRhaWxzKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBpbml0aWFsIGZvcm11bGFcblx0XHRcdFx0X18oICdJbml0aWFsOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHR0aGlzLmZvcm11bGEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGNvbXB1dGVkIGZvcm11bGFcblx0XHRcdFx0X18oICdDb21wdXRlZDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0Zm9ybXVsYSxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdGlmICggIXRoaXMuaW5wdXQgJiYgIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5pbnB1dCApIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdHNwcmludGYoXG5cdFx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gZmlsZWQgbmFtZVxuXHRcdFx0XHRcdF9fKCAnRmllbGQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdFx0dGhpcy5pbnB1dC5wYXRoLmpvaW4oICcuJyApLFxuXHRcdFx0XHQpLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5yb290LnBhcmVudC5maW5kSW5kZXgoIHRoaXMucm9vdCApO1xuXG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIHBhdGggdG8gY3VycmVudCBmaWVsZFxuXHRcdFx0XHRfXyggJ1Njb3BlOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0Li4udGhpcy5yb290LnBhcmVudC5wYXRoLFxuXHRcdFx0XHRcdC0xID09PSBpbmRleCA/ICcnIDogaW5kZXgsXG5cdFx0XHRcdF0uZmlsdGVyKCBCb29sZWFuICkuam9pbiggJy4nICksXG5cdFx0XHQpLFxuXHRcdCk7XG5cdH0sXG5cdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEZvcm11bGE7XG4iLCJmdW5jdGlvbiBhcHBseUZpbHRlcnMoIHZhbHVlLCBmaWx0ZXJzICkge1xuXHRpZiAoIG51bGwgPT09IGZpbHRlcnMgfHwgIWZpbHRlcnM/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0Zm9yICggY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMgKSB7XG5cdFx0dmFsdWUgPSBmaWx0ZXIuYXBwbHlXaXRoUHJvcHMoIHZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGx5RmlsdGVyczsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBDdXJyZW50RGF0ZSBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9DdXJyZW50RGF0ZSc7XG5pbXBvcnQgTWluX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9NaW5fSW5fU2VjJztcbmltcG9ydCBNb250aF9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvTW9udGhfSW5fU2VjJztcbmltcG9ydCBIb3VyX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9Ib3VyX0luX1NlYyc7XG5pbXBvcnQgRGF5X0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9EYXlfSW5fU2VjJztcbmltcG9ydCBZZWFyX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9ZZWFyX0luX1NlYyc7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzOiB3cEFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0U3RhdGljRnVuY3Rpb25zID0gKCkgPT4gd3BBcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuc3RhdGljLmZ1bmN0aW9ucycsXG5cdFtcblx0XHRDdXJyZW50RGF0ZSxcblx0XHRNaW5fSW5fU2VjLFxuXHRcdE1vbnRoX0luX1NlYyxcblx0XHRIb3VyX0luX1NlYyxcblx0XHREYXlfSW5fU2VjLFxuXHRcdFllYXJfSW5fU2VjLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7QmFzZUludGVybmFsTWFjcm9bXX1cbiAqL1xubGV0IHN0YXRpY0Z1bmN0aW9ucyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgc2x1Z1xuICogQHJldHVybiB7Ym9vbGVhbnxCYXNlSW50ZXJuYWxNYWNyb31cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY3Rpb24oIHNsdWcgKSB7XG5cdGlmICggIXN0YXRpY0Z1bmN0aW9ucy5sZW5ndGggKSB7XG5cdFx0c3RhdGljRnVuY3Rpb25zID0gZ2V0U3RhdGljRnVuY3Rpb25zKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBzdGF0aWNGdW5jdGlvbiBvZiBzdGF0aWNGdW5jdGlvbnMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBzdGF0aWNGdW5jdGlvbigpO1xuXG5cdFx0aWYgKCBjdXJyZW50LmdldElkKCkgIT09IHNsdWcgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtICByZXN1bHQgICAge1N0cmluZ31cbiAqIEBwYXJhbSAgZmllbGROYW1lIHtTdHJpbmd9XG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBhdHRhY2hDb25zdE5hbWVzcGFjZShcblx0cmVzdWx0LFxuXHRmaWVsZE5hbWUsXG4pIHtcblx0aWYgKCAhZmllbGROYW1lLmluY2x1ZGVzKCAnQ1Q6OicgKSApIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGZpZWxkTmFtZSA9IGZpZWxkTmFtZS5yZXBsYWNlKCAnQ1Q6OicsICcnICk7XG5cblx0Y29uc3Qgc3RhdGljRnVuYyA9IGdldEZ1bmN0aW9uKCBmaWVsZE5hbWUgKTtcblxuXHRpZiAoIGZhbHNlID09PSBzdGF0aWNGdW5jICkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGljRnVuYy5nZXRSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXR0YWNoQ29uc3ROYW1lc3BhY2U7IiwiZnVuY3Rpb24gQmFzZUludGVybmFsTWFjcm8oKSB7XG59XG5cbkJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSA9IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuXHQvKipcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0SWQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJld3JpdGUgdGhpcyBtZXRob2QnICk7XG5cdH0sXG5cdGdldFJlc3VsdCAoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnWW91IG5lZWQgdG8gcmV3cml0ZSB0aGlzIG1ldGhvZCcgKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VJbnRlcm5hbE1hY3JvOyIsImltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcblxuZnVuY3Rpb24gQ3VycmVudERhdGUoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkICAgICA9ICgpID0+ICdDdXJyZW50RGF0ZSc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5cbkN1cnJlbnREYXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50RGF0ZTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gRGF5X0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgPSAoKSA9PiAnRGF5X0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG59XG5cbkRheV9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IERheV9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIEhvdXJfSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCA9ICgpID0+ICdIb3VyX0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLkhvdXJfSW5fU2VjO1xufVxuXG5Ib3VyX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgSG91cl9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIE1pbl9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkID0gKCkgPT4gJ01pbl9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5NaW5fSW5fU2VjO1xufVxuXG5NaW5fSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNaW5fSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBNb250aF9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkICAgICA9ICgpID0+ICdNb250aF9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5Nb250aF9Jbl9TZWM7XG59XG5cbk1vbnRoX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBZZWFyX0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ1llYXJfSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuWWVhcl9Jbl9TZWM7XG59XG5cblllYXJfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBZZWFyX0luX1NlYzsiLCJjb25zdCBDb25zdGFudHMgPSB7XG5cdE1pbGxpX0luX1NlYzogMTAwMCxcblx0U2VjX0luX01pbjogNjAsXG5cdE1pbl9Jbl9Ib3VyOiA2MCxcblx0SG91cl9Jbl9EYXk6IDI0LFxuXHREYXlfSW5fTW9udGg6IDMwLFxuXHRZZWFyX0luX0RheTogMzY1LFxuXHRLYl9Jbl9CeXRlczogMTAyNCxcbn07XG5cbkNvbnN0YW50cy5NaW5fSW5fU2VjICAgPSBDb25zdGFudHMuU2VjX0luX01pbiAqIENvbnN0YW50cy5NaWxsaV9Jbl9TZWM7XG5Db25zdGFudHMuSG91cl9Jbl9TZWMgID0gQ29uc3RhbnRzLk1pbl9Jbl9Ib3VyICogQ29uc3RhbnRzLk1pbl9Jbl9TZWM7XG5Db25zdGFudHMuRGF5X0luX1NlYyAgID0gQ29uc3RhbnRzLkhvdXJfSW5fRGF5ICogQ29uc3RhbnRzLkhvdXJfSW5fU2VjO1xuQ29uc3RhbnRzLk1vbnRoX0luX1NlYyA9IENvbnN0YW50cy5EYXlfSW5fTW9udGggKiBDb25zdGFudHMuRGF5X0luX1NlYztcbkNvbnN0YW50cy5ZZWFyX0luX1NlYyAgPSBDb25zdGFudHMuWWVhcl9Jbl9EYXkgKiBDb25zdGFudHMuRGF5X0luX1NlYztcbkNvbnN0YW50cy5NYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuS2JfSW5fQnl0ZXMgKiAxMDI0O1xuQ29uc3RhbnRzLkdiX0luX0J5dGVzICA9IENvbnN0YW50cy5NYl9Jbl9CeXRlcyAqIDEwMjQ7XG5Db25zdGFudHMuVGJfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLkdiX0luX0J5dGVzICogMTAyNDtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkRGF5RmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZERheSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGRheXMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0ZGF5cyA9IGRheXMgPyArKFxuXHRcdFx0ZGF5cy50cmltKClcblx0XHQpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldERhdGUoIGN1cnJlbnQuZ2V0RGF0ZSgpICsgZGF5cyApO1xuXHR9O1xufVxuXG5BZGREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGREYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBBZGRIb3VyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZEhvdXInO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBob3VycyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdGhvdXJzID0gaG91cnMgPyArKFxuXHRcdFx0aG91cnMudHJpbSgpXG5cdFx0KSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRIb3VycyggY3VycmVudC5nZXRIb3VycygpICsgaG91cnMgKTtcblx0fTtcbn1cblxuQWRkSG91ckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEhvdXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBBZGRNaW5GaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkTWluJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWludXRlcyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdG1pbnV0ZXMgPSBtaW51dGVzID8gKyhcblx0XHRcdG1pbnV0ZXMudHJpbSgpXG5cdFx0KSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBjdXJyZW50LmdldE1pbnV0ZXMoKSArIG1pbnV0ZXMgKTtcblx0fTtcbn1cblxuQWRkTWluRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTWluRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkRGF5RmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZE1vbnRoJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGhzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdG1vbnRocyA9IG1vbnRocyA/ICttb250aHMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldE1vbnRoKCBjdXJyZW50LmdldE1vbnRoKCkgKyBtb250aHMgKTtcblx0fTtcbn1cblxuQWRkRGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkWWVhckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRZZWFyJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgeWVhcnMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0eWVhcnMgPSB5ZWFycyA/ICt5ZWFycy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIGN1cnJlbnQuZ2V0RnVsbFllYXIoKSArIHllYXJzICk7XG5cdH07XG59XG5cbkFkZFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRZZWFyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEZhbGxCYWNrRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2lmRW1wdHknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBmYWxsYmFjayApIHtcblx0XHRyZXR1cm4gKCBpc0VtcHR5KHZhbHVlKSB8fCBOdW1iZXIuaXNOYU4odmFsdWUpICkgPyBmYWxsYmFjayA6IHZhbHVlO1xuXHR9O1xufVxuXG5GYWxsQmFja0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEZhbGxCYWNrRmlsdGVyOyIsImZ1bmN0aW9uIEZpbHRlcigpIHtcblx0dGhpcy5wcm9wcyA9IFtdO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1yZXR1cm5zLWNoZWNrXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRmlsdGVyLnByb3RvdHlwZS5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoICdnZXRTbHVnIGlzIGVtcHR5JyApO1xufTtcbkZpbHRlci5wcm90b3R5cGUuc2V0UHJvcHMgICAgICAgPSBmdW5jdGlvbiAoIHByb3BzICkge1xuXHR0aGlzLnByb3BzLnB1c2goIC4uLnByb3BzICk7XG59O1xuRmlsdGVyLnByb3RvdHlwZS5hcHBseVdpdGhQcm9wcyA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdHJldHVybiB0aGlzLmFwcGx5KCB2YWx1ZSwgLi4udGhpcy5wcm9wcyApO1xufTtcbi8qKlxuICogQHBhcmFtICB2YWx1ZVxuICogQHBhcmFtICBwcm9wc1xuICogQHJldHVybiB7Kn1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5GaWx0ZXIucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKCB2YWx1ZSwgLi4ucHJvcHMgKSB7XG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcblxuZnVuY3Rpb24gTGVuZ3RoRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2xlbmd0aCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHZhbHVlPy5sZW5ndGggPz8gMDtcblx0fTtcbn1cblxuTGVuZ3RoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTGVuZ3RoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0RGF5RmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldERheSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGRheSApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRkYXkgPSBkYXkgPyArZGF5LnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBkYXkgKTtcblx0fTtcbn1cblxuU2V0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0RGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0SG91ckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXRIb3VyJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91ciApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aG91ciA9IGhvdXIgPyAraG91ci50cmltKCkgOiAwO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0SG91cnMoIGhvdXIgKTtcblx0fTtcbn1cblxuU2V0SG91ckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldEhvdXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXRNaW5GaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0TWluJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWluICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRtaW4gPSBtaW4gPyArbWluLnRyaW0oKSA6IDA7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBtaW4gKTtcblx0fTtcbn1cblxuU2V0TWluRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0TWluRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0TW9udGhGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0TW9udGgnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBtb250aCApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRtb250aCA9IG1vbnRoID8gK21vbnRoLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggbW9udGggKTtcblx0fTtcbn1cblxuU2V0TW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXRNb250aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldFllYXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0WWVhcic7XG5cdH07XG5cblx0dGhpcy5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXIgKSB7XG5cdFx0eWVhciA9IHllYXIgPyAreWVhci50cmltKCkgOiBmYWxzZTtcblxuXHRcdGlmICggIXllYXIgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRGdWxsWWVhciggeWVhciApO1xuXHR9O1xufVxuXG5TZXRZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0WWVhckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0RGF5RmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1YkRheSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGRheXMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRkYXlzID0gZGF5cyA/ICtkYXlzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBjdXJyZW50LmdldERhdGUoKSAtIGRheXMgKTtcblx0fTtcbn1cblxuU3VidHJhY3REYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0SG91ckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJIb3VyJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91ciApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRob3VyID0gaG91ciA/ICtob3VyLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRIb3VycyggY3VycmVudC5nZXRIb3VycygpIC0gaG91ciApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdEhvdXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdEhvdXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdE1pbkZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJNaW4nO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBtaW51dGVzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdG1pbnV0ZXMgPSBtaW51dGVzID8gK21pbnV0ZXMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldE1pbnV0ZXMoIGN1cnJlbnQuZ2V0TWludXRlcygpIC0gbWludXRlcyApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdE1pbkZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0TWluRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RNb250aEZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJNb250aCc7XG5cdH07XG5cblx0dGhpcy5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIG1vbnRocyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdG1vbnRocyA9IG1vbnRocyA/ICttb250aHMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldE1vbnRoKCBjdXJyZW50LmdldE1vbnRoKCkgLSBtb250aHMgKTtcblx0fTtcbn1cblxuU3VidHJhY3RNb250aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdFllYXJGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViWWVhcic7XG5cdH07XG5cblx0dGhpcy5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXJzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0eWVhcnMgPSB5ZWFycyA/ICt5ZWFycy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIGN1cnJlbnQuZ2V0RnVsbFllYXIoKSAtIHllYXJzICk7XG5cdH07XG59XG5cblN1YnRyYWN0WWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0WWVhckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFRpbWVzdGFtcEZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdUJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRpZiAoICF2YWx1ZSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aW1lO1xuXHR9O1xufVxuXG5UaW1lc3RhbXBGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lc3RhbXBGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUb0RhdGVGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9EYXRlJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaXNVVEMgPSB0cnVlICkge1xuXHRcdC8vIENvbnZlcnQgc3RyaW5nICd0cnVlJy8nZmFsc2UnIHRvIGJvb2xlYW5cblx0XHRpZiAoIHR5cGVvZiBpc1VUQyA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHQvLyBSZW1vdmUgcXVvdGVzIGFuZCB0cmltXG5cdFx0XHRjb25zdCBjbGVhbmVkID0gaXNVVEMudHJpbSgpLnJlcGxhY2UoIC9eWydcIl18WydcIl0kL2csICcnICk7XG5cdFx0XHRjb25zdCBsb3dlciAgID0gY2xlYW5lZC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpc1VUQyA9IGxvd2VyICE9PSAnZmFsc2UnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpc1VUQyA9IEJvb2xlYW4oIGlzVVRDICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvRGF0ZSggbmV3IERhdGUoIHZhbHVlICksIGlzVVRDICk7XG5cdH07XG59XG5cblRvRGF0ZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRGF0ZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IHRvRGF0ZVRpbWUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUb0RhdGVUaW1lRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvRGF0ZVRpbWUnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBpc1VUQyA9IGZhbHNlICkge1xuXHRcdC8vIENvbnZlcnQgc3RyaW5nICd0cnVlJy8nZmFsc2UnIHRvIGJvb2xlYW5cblx0XHRpZiAoIHR5cGVvZiBpc1VUQyA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHQvLyBSZW1vdmUgcXVvdGVzIGFuZCB0cmltXG5cdFx0XHRjb25zdCBjbGVhbmVkID0gaXNVVEMudHJpbSgpLnJlcGxhY2UoIC9eWydcIl18WydcIl0kL2csICcnICk7XG5cdFx0XHRjb25zdCBsb3dlciAgID0gY2xlYW5lZC50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpc1VUQyA9ICcnID09PSBsb3dlciA/IGZhbHNlIDogbG93ZXIgIT09ICdmYWxzZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzVVRDID0gQm9vbGVhbiggaXNVVEMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9EYXRlVGltZSggbmV3IERhdGUoIHZhbHVlICksIGlzVVRDICk7XG5cdH07XG59XG5cblRvRGF0ZVRpbWVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RhdGVUaW1lRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb0RheUluTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9EYXlJbk1zJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRjb25zdCBPTkVfREFZX01TID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfREFZX01TO1xuXHR9O1xufVxuXG5Ub0RheUluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb0RheUluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvSG91ckluTXNGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndG9Ib3VySW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX0hPVVJfTVMgPSA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfSE9VUl9NUztcblx0fTtcbn1cblxuVG9Ib3VySW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvSG91ckluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5cbmZ1bmN0aW9uIFRvTWludXRlSW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b01pbnV0ZUluTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9NSU5VVEVfTVMgPSA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX01JTlVURV9NUztcblx0fTtcbn1cblxuVG9NaW51dGVJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9NaW51dGVJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb01vbnRoSW5Nc0ZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b01vbnRoSW5Ncyc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0Y29uc3QgT05FX01PTlRIX01TID0gMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9NT05USF9NUztcblx0fTtcbn1cblxuVG9Nb250aEluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb01vbnRoSW5Nc0ZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IHRvVGltZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFRvVGltZUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b1RpbWUnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBpc1VUQyA9IHRydWUgKSB7XG5cdFx0Ly8gQ29udmVydCBzdHJpbmcgJ3RydWUnLydmYWxzZScgdG8gYm9vbGVhblxuXHRcdGlmICggdHlwZW9mIGlzVVRDID09PSAnc3RyaW5nJyApIHtcblx0XHRcdC8vIFJlbW92ZSBxdW90ZXMgYW5kIHRyaW1cblx0XHRcdGNvbnN0IGNsZWFuZWQgPSBpc1VUQy50cmltKCkucmVwbGFjZSggL15bJ1wiXXxbJ1wiXSQvZywgJycgKTtcblx0XHRcdGNvbnN0IGxvd2VyICAgPSBjbGVhbmVkLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlzVVRDID0gbG93ZXIgIT09ICdmYWxzZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlzVVRDID0gQm9vbGVhbiggaXNVVEMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9UaW1lKCBuZXcgRGF0ZSggdmFsdWUgKSwgaXNVVEMgKTtcblx0fTtcbn1cblxuVG9UaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9UaW1lRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb1dlZWtJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvV2Vla0luTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9XRUVLX01TID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIHZhbHVlICogT05FX1dFRUtfTVM7XG5cdH07XG59XG5cblRvV2Vla0luTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBUb1dlZWtJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBUb1llYXJJbk1zRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvWWVhckluTXMnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGNvbnN0IE9ORV9ZRUFSX01TID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfWUVBUl9NUztcblx0fTtcbn1cblxuVG9ZZWFySW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvWWVhckluTXNGaWx0ZXI7IiwiZnVuY3Rpb24gemVyb2ZpbGwoIG51bWJlciwgY291bnQgKSB7XG5cdG51bWJlciA9ICcnICsgbnVtYmVyO1xuXG5cdGlmICggbnVtYmVyLmxlbmd0aCA+PSBjb3VudCApIHtcblx0XHRyZXR1cm4gbnVtYmVyO1xuXHR9XG5cblx0Y29uc3QgemVyb3MgPSBuZXcgQXJyYXkoIGNvdW50IC0gbnVtYmVyLmxlbmd0aCApLmZpbGwoIDAgKTtcblxuXHRyZXR1cm4gemVyb3MgKyBudW1iZXI7XG59XG5cbi8qKlxuICogQHBhcmFtIGRhdGUgIHtEYXRlfVxuICogQHBhcmFtIGlzVXRjXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoIGRhdGUsIGlzVXRjID0gdHJ1ZSApIHtcblx0Y29uc3QgbW9udGggPSBpc1V0YyA/IGRhdGUuZ2V0VVRDTW9udGgoKSA6IGRhdGUuZ2V0TW9udGgoKTtcblx0Y29uc3QgZGF5ICAgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDRGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XG5cdGNvbnN0IHllYXIgID0gaXNVdGMgPyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cblx0cmV0dXJuIFtcblx0XHR5ZWFyLFxuXHRcdHplcm9maWxsKCBtb250aCArIDEsIDIgKSxcblx0XHR6ZXJvZmlsbCggZGF5LCAyICksXG5cdF0uam9pbiggJy0nICk7XG59XG5cbi8qKlxuICogQHBhcmFtIGRhdGUgIHtEYXRlfVxuICogQHBhcmFtIGlzVXRjXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1RpbWUoIGRhdGUsIGlzVXRjID0gdHJ1ZSApIHtcblx0Y29uc3QgaG91cnMgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDSG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKTtcblx0Y29uc3QgbWlucyAgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDTWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCk7XG5cblx0cmV0dXJuIFtcblx0XHR6ZXJvZmlsbCggaG91cnMsIDIgKSxcblx0XHR6ZXJvZmlsbCggbWlucywgMiApLFxuXHRdLmpvaW4oICc6JyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlVGltZSggZGF0ZSwgaXNVdGMgPSBmYWxzZSApIHtcblx0cmV0dXJuIHRvRGF0ZSggZGF0ZSwgaXNVdGMgKSArICdUJyArIHRvVGltZSggZGF0ZSwgaXNVdGMgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHRpbWVPckRhdGUge1N0cmluZ3xOdW1iZXJ9XG4gKiBAcmV0dXJuIHt7dGltZTogbnVtYmVyLCB0eXBlOiBzdHJpbmd9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCB0aW1lT3JEYXRlICkge1xuXHRpZiAoICFOdW1iZXIuaXNOYU4oICt0aW1lT3JEYXRlICkgKSB7XG5cdFx0cmV0dXJuIHsgdGltZTogK3RpbWVPckRhdGUsIHR5cGU6ICdudW1iZXInIH07XG5cdH1cblxuXHR0aW1lT3JEYXRlID0gdGltZU9yRGF0ZS50b1N0cmluZygpO1xuXG5cdGNvbnN0IGRhdGVQYXJ0cyA9IHRpbWVPckRhdGUuc3BsaXQoICctJyApO1xuXG5cdGlmICggZGF0ZVBhcnRzLmxlbmd0aCA+IDEgKSB7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCB0aW1lT3JEYXRlICk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGltZTogZGF0ZS5nZXRUaW1lKCksXG5cdFx0XHR0eXBlOiAnZGF0ZScsXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IHRpbWVQYXJ0cyA9IHRpbWVPckRhdGUuc3BsaXQoICc6JyApO1xuXHRjb25zdCBjYWxsYmFja3MgPSBbXG5cdFx0RGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsXG5cdFx0RGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcyxcblx0XHREYXRlLnByb3RvdHlwZS5zZXRTZWNvbmRzLFxuXHRdO1xuXG5cdGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuXG5cdGZvciAoIGNvbnN0IGluZGV4IGluIHRpbWVQYXJ0cyApIHtcblx0XHRpZiAoXG5cdFx0XHQhdGltZVBhcnRzLmhhc093blByb3BlcnR5KCBpbmRleCApIHx8XG5cdFx0XHQhY2FsbGJhY2tzLmhhc093blByb3BlcnR5KCBpbmRleCApXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjYWxsYmFja3NbIGluZGV4IF0uY2FsbCggdGltZSwgdGltZVBhcnRzWyBpbmRleCBdICk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHRpbWU6IHRpbWUuZ2V0VGltZSgpLFxuXHRcdHR5cGU6ICd0aW1lJyxcblx0fTtcbn1cbiIsImltcG9ydCBMZW5ndGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0xlbmd0aEZpbHRlcic7XG5pbXBvcnQgRmFsbEJhY2tGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0ZhbGxCYWNrRmlsdGVyJztcbmltcG9ydCBUb0RhdGVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvRGF0ZUZpbHRlcic7XG5pbXBvcnQgVG9UaW1lRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub1RpbWVGaWx0ZXInO1xuaW1wb3J0IFRvRGF0ZVRpbWVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvRGF0ZVRpbWVGaWx0ZXInO1xuaW1wb3J0IEFkZFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZFllYXJGaWx0ZXInO1xuaW1wb3J0IEFkZE1vbnRoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRNb250aEZpbHRlcic7XG5pbXBvcnQgQWRkRGF5RmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGREYXlGaWx0ZXInO1xuaW1wb3J0IEFkZEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZEhvdXJGaWx0ZXInO1xuaW1wb3J0IEFkZE1pbkZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkTWluRmlsdGVyJztcbmltcG9ydCBUaW1lc3RhbXBGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RpbWVzdGFtcEZpbHRlcic7XG5pbXBvcnQgU2V0SG91ckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0SG91ckZpbHRlcic7XG5pbXBvcnQgU2V0TWluRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRNaW5GaWx0ZXInO1xuaW1wb3J0IFNldERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0RGF5RmlsdGVyJztcbmltcG9ydCBTZXRZZWFyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRZZWFyRmlsdGVyJztcbmltcG9ydCBTZXRNb250aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0TW9udGhGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0SG91ckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RIb3VyRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3REYXlGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0TWluRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdE1pbkZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RNb250aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3RNb250aEZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RZZWFyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdFllYXJGaWx0ZXInO1xuaW1wb3J0IFRvRGF5SW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9EYXlJbk1zRmlsdGVyJztcbmltcG9ydCBUb01vbnRoSW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9Nb250aEluTXNGaWx0ZXInO1xuaW1wb3J0IFRvWWVhckluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvWWVhckluTXNGaWx0ZXInO1xuaW1wb3J0IFRvSG91ckluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvSG91ckluTXNGaWx0ZXInO1xuaW1wb3J0IFRvTWludXRlSW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9NaW51dGVJbk1zRmlsdGVyJztcbmltcG9ydCBUb1dlZWtJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub1dlZWtJbk1zRmlsdGVyJztcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEB0eXBlIHtBcnJheTxGaWx0ZXI+fVxuICovXG5sZXQgZmlsdGVycyA9IFtdO1xuXG5jb25zdCBnZXRGaWx0ZXJJdGVtcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5maWx0ZXJzJyxcblx0W1xuXHRcdFNldFllYXJGaWx0ZXIsXG5cdFx0U2V0TW9udGhGaWx0ZXIsXG5cdFx0U2V0RGF5RmlsdGVyLFxuXHRcdFNldEhvdXJGaWx0ZXIsXG5cdFx0U2V0TWluRmlsdGVyLFxuXHRcdFN1YnRyYWN0WWVhckZpbHRlcixcblx0XHRTdWJ0cmFjdE1vbnRoRmlsdGVyLFxuXHRcdFN1YnRyYWN0RGF5RmlsdGVyLFxuXHRcdFN1YnRyYWN0SG91ckZpbHRlcixcblx0XHRTdWJ0cmFjdE1pbkZpbHRlcixcblx0XHRBZGRZZWFyRmlsdGVyLFxuXHRcdEFkZE1vbnRoRmlsdGVyLFxuXHRcdEFkZERheUZpbHRlcixcblx0XHRBZGRIb3VyRmlsdGVyLFxuXHRcdEFkZE1pbkZpbHRlcixcblx0XHRMZW5ndGhGaWx0ZXIsXG5cdFx0RmFsbEJhY2tGaWx0ZXIsXG5cdFx0VG9EYXRlRmlsdGVyLFxuXHRcdFRvVGltZUZpbHRlcixcblx0XHRUb0RhdGVUaW1lRmlsdGVyLFxuXHRcdFRpbWVzdGFtcEZpbHRlcixcblx0XHRUb0RheUluTXNGaWx0ZXIsXG5cdFx0VG9Nb250aEluTXNGaWx0ZXIsXG5cdFx0VG9ZZWFySW5Nc0ZpbHRlcixcblx0XHRUb0hvdXJJbk1zRmlsdGVyLFxuXHRcdFRvTWludXRlSW5Nc0ZpbHRlcixcblx0XHRUb1dlZWtJbk1zRmlsdGVyLFxuXHRdLFxuKTtcbmxldCByZXNwb25zZSAgICAgICAgID0gW107XG5cbmZ1bmN0aW9uIHB1c2hGaWx0ZXIoIG5hbWUsIHByb3BzID0gJycgKSB7XG5cdGlmICggIWZpbHRlcnMubGVuZ3RoICkge1xuXHRcdGZpbHRlcnMgPSBnZXRGaWx0ZXJJdGVtcygpO1xuXHR9XG5cblx0bGV0IGZpbHRlcjtcblxuXHRmb3IgKCBsZXQgY3VycmVudCBvZiBmaWx0ZXJzICkge1xuXHRcdGN1cnJlbnQgPSBuZXcgY3VycmVudCgpO1xuXG5cdFx0aWYgKCBuYW1lID09PSBjdXJyZW50LmdldFNsdWcoKSApIHtcblx0XHRcdGZpbHRlciA9IGN1cnJlbnQ7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIWZpbHRlciApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0cHJvcHMgPSBwcm9wcy5zcGxpdCggJywnICkubWFwKFxuXHRcdGl0ZW0gPT4gaXRlbS50cmltKCksXG5cdCk7XG5cblx0ZmlsdGVyLnNldFByb3BzKCBwcm9wcyApO1xuXHRyZXNwb25zZS5wdXNoKCBmaWx0ZXIgKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsdGVycyggZmlsdGVyc0xpc3QgKSB7XG5cdGlmICggbnVsbCA9PT0gZmlsdGVyc0xpc3QgfHwgIWZpbHRlcnNMaXN0Py5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBmaWx0ZXJOYW1lIG9mIGZpbHRlcnNMaXN0ICkge1xuXHRcdGNvbnN0IG1hdGNoZXMgPSBmaWx0ZXJOYW1lLm1hdGNoKCAvXihcXHcrKVxcKChbXigpXSspXFwpLyApO1xuXG5cdFx0aWYgKCBudWxsID09PSBtYXRjaGVzICkge1xuXHRcdFx0cHVzaEZpbHRlciggZmlsdGVyTmFtZSApO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwdXNoRmlsdGVyKCBtYXRjaGVzWyAxIF0sIG1hdGNoZXNbIDIgXSApO1xuXHR9XG5cblx0Y29uc3QgdGVtcFJlc3BvbnNlID0gWyAuLi5yZXNwb25zZSBdO1xuXHRyZXNwb25zZSAgICAgICAgICAgPSBbXTtcblxuXHRyZXR1cm4gdGVtcFJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGaWx0ZXJzOyIsImltcG9ydCBDYWxjdWxhdGVkRm9ybXVsYSBmcm9tICcuL0NhbGN1bGF0ZWRGb3JtdWxhJztcbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgZ2V0RmlsdGVycyBmcm9tICcuL2dldEZpbHRlcnMnO1xuaW1wb3J0IGFwcGx5RmlsdGVycyBmcm9tICcuL2FwcGx5RmlsdGVycyc7XG5pbXBvcnQgeyB0b0RhdGUsIHRvRGF0ZVRpbWUsIHRvVGltZSwgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVycy9GaWx0ZXInO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XG5cdCksXG5cdEZpbHRlcixcblx0Q2FsY3VsYXRlZEZvcm11bGEsXG5cdEJhc2VJbnRlcm5hbE1hY3JvLFxufTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID8/IHt9XG5cdCksXG5cdGdldEZpbHRlcnMsXG5cdGFwcGx5RmlsdGVycyxcblx0dG9EYXRlLFxuXHR0b0RhdGVUaW1lLFxuXHR0b1RpbWUsXG5cdGdldFRpbWVzdGFtcCxcbn07XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckNvbnN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQ29uc3QgPz8ge31cblx0KSxcblx0Li4uQ29uc3RhbnRzLFxufTsiLCIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85ODQ3NTgwL2hvdy10by1kZXRlY3Qtc2FmYXJpLWNocm9tZS1pZS1maXJlZm94LWFuZC1vcGVyYS1icm93c2VyXG5cbmNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbi8vIFNhZmFyaSAzLjArIFwiW29iamVjdCBIVE1MRWxlbWVudENvbnN0cnVjdG9yXVwiXG5jb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoIHVzZXJBZ2VudCApIHx8XG5cdC9jb25zdHJ1Y3Rvci9pLnRlc3QoIHdpbmRvdy5IVE1MRWxlbWVudCApIHx8XG5cdChcblx0XHQoIHAgKSA9PiB7XG5cdFx0XHRyZXR1cm4gJ1tvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXScgPT09IHAudG9TdHJpbmcoKTtcblx0XHR9XG5cdCkoICF3aW5kb3cuc2FmYXJpIHx8IChcblx0XHR0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc2FmYXJpLnB1c2hOb3RpZmljYXRpb25cblx0KSApO1xuXG5jb25zdCBlbnZpcm9ubWVudCA9IHtcblx0c2FmYXJpOiBpc1NhZmFyaSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50OyIsImltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9CYXNlSHRtbEF0dHInO1xuaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlc0h0bWxBdHRyJztcbmltcG9ydCBNYXhGaWxlU2l6ZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvTWF4RmlsZVNpemVIdG1sQXR0cic7XG5pbXBvcnQgUmVtYWluaW5nQ2FsY0F0dHIgZnJvbSAnLi9hdHRycy9SZW1haW5pbmdDYWxjQXR0cic7XG5pbXBvcnQgRmlsZUV4dGVuc2lvbkh0bWxBdHRyIGZyb20gJy4vYXR0cnMvRmlsZUV4dGVuc2lvbkh0bWxBdHRyJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHBhcmFtICBjYWxsYmFja3Mge0Z1bmN0aW9uW119XG4gKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxuICovXG5hc3luYyBmdW5jdGlvbiBhbGxSZWplY3RlZCggY2FsbGJhY2tzICkge1xuXHRjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFxuXHRcdGNhbGxiYWNrcy5tYXAoIGN1cnJlbnQgPT4gbmV3IFByb21pc2UoIGN1cnJlbnQgKSApLFxuXHQpO1xuXG5cdGlmICggd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5kZXZtb2RlICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKCAnYWxsUmVqZWN0ZWQnICk7XG5cdFx0Y29uc29sZS5pbmZvKCAuLi5yZXN1bHRzICk7XG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXHR9XG5cblx0Y29uc3QgaW52YWxpZCA9IHJlc3VsdHMuZmlsdGVyKFxuXHRcdCggZXJyb3IgKSA9PiAncmVqZWN0ZWQnID09PSBlcnJvci5zdGF0dXMsXG5cdCk7XG5cblx0cmV0dXJuIGludmFsaWQubWFwKCAoIHsgcmVhc29uLCB2YWx1ZSB9ICkgPT4ge1xuXHRcdHJldHVybiByZWFzb24/Lmxlbmd0aCA/IHJlYXNvblsgMCBdIDogKFxuXHRcdFx0cmVhc29uID8/IHZhbHVlXG5cdFx0KTtcblx0fSApO1xufVxuXG5mdW5jdGlvbiBnZXRMYW5ndWFnZSgpIHtcblx0Y29uc3QgbGFuZyA9IHdpbmRvdz8ubmF2aWdhdG9yPy5sYW5ndWFnZXM/Lmxlbmd0aFxuXHQgICAgICAgICAgICAgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1sgMCBdXG5cdCAgICAgICAgICAgICA6IHdpbmRvdz8ubmF2aWdhdG9yPy5sYW5ndWFnZTtcblxuXHRyZXR1cm4gbGFuZyA/PyAnZW4tVVMnO1xufVxuXG5jb25zdCBnZXRJbnB1dEh0bWxBdHRyID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmlucHV0Lmh0bWwuYXR0cnMnLFxuXHRbXG5cdFx0J21pbicsXG5cdFx0J21heCcsXG5cdFx0J21pbkxlbmd0aCcsXG5cdFx0J21heExlbmd0aCcsXG5cdFx0TWF4RmlsZXNIdG1sQXR0cixcblx0XHRNYXhGaWxlU2l6ZUh0bWxBdHRyLFxuXHRcdFJlbWFpbmluZ0NhbGNBdHRyLFxuXHRcdEZpbGVFeHRlbnNpb25IdG1sQXR0cixcblx0XSxcbik7XG5cbi8qKlxuICogQHR5cGUge0Jhc2VIdG1sQXR0cltdfVxuICovXG5sZXQgaW5wdXRIdG1sQXR0cnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gbmFtZSB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXREZWZhdWx0QXR0ckJ5TmFtZSggbmFtZSApIHtcblx0Y29uc3QgYXR0ciAgICA9IG5ldyBCYXNlSHRtbEF0dHIoKTtcblx0YXR0ci5hdHRyTmFtZSA9IG5hbWU7XG5cblx0cmV0dXJuIGF0dHI7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF9XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHJzKCBpbnB1dCApIHtcblx0aWYgKCAhaW5wdXRIdG1sQXR0cnMubGVuZ3RoICkge1xuXHRcdGlucHV0SHRtbEF0dHJzID0gZ2V0SW5wdXRIdG1sQXR0cigpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgaW5wdXRIdG1sQXR0ciBvZiBpbnB1dEh0bWxBdHRycyApIHtcblx0XHRsZXQgY3VycmVudDtcblx0XHRpZiAoICdzdHJpbmcnID09PSB0eXBlb2YgaW5wdXRIdG1sQXR0ciApIHtcblx0XHRcdGN1cnJlbnQgPSBnZXREZWZhdWx0QXR0ckJ5TmFtZSggaW5wdXRIdG1sQXR0ciApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGN1cnJlbnQgPSBuZXcgaW5wdXRIdG1sQXR0cigpO1xuXHRcdH1cblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aW5wdXQuYXR0cnNbIGN1cnJlbnQuYXR0ck5hbWUgXSA9IGN1cnJlbnQ7XG5cblx0XHRjdXJyZW50LnNldElucHV0KCBpbnB1dCApO1xuXHRcdGN1cnJlbnQub2JzZXJ2ZSgpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRvSFRNTCggdGV4dCApIHtcblx0Y29uc3QgdGVtcGxhdGUgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZXh0LnRyaW0oKTtcblxuXHRyZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSggdmFsdWUgKSB7XG5cdGlmICggJ2Jvb2xlYW4nID09PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuICF2YWx1ZTtcblx0fVxuXG5cdGlmICggbnVsbCA9PT0gdmFsdWUgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiB2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gIU9iamVjdC5rZXlzKCB2YWx1ZSApPy5sZW5ndGg7XG5cdH1cblxuXHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIDAgPT09IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuICF2YWx1ZT8ubGVuZ3RoO1xufVxuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaXNWaXNpYmxlKCBub2RlICkge1xuXHRyZXR1cm4gKFxuXHRcdG5vZGU/LmlzQ29ubmVjdGVkICYmIG51bGwgIT09IG5vZGU/Lm9mZnNldFBhcmVudFxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXRUb3AoIG5vZGUgKSB7XG5cdGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdGNvbnN0IG1heWJlV2luZG93ID0gZ2V0U2Nyb2xsUGFyZW50KCBub2RlICk7XG5cblx0cmV0dXJuIHJlY3Q/LnRvcCArIChcblx0XHRtYXliZVdpbmRvdz8uc2Nyb2xsWSA/PyAwXG5cdCk7XG59XG5cbmNvbnN0IGdldE5vZGUgPSBjdXJyZW50ID0+IChcblx0Y3VycmVudC5zY3JvbGxIZWlnaHQgPiBjdXJyZW50LmNsaWVudEhlaWdodCA/IGN1cnJlbnQgOiBmYWxzZVxuKTtcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KCBub2RlICkge1xuXG5cdC8vIGpldC1wb3B1cCBjb21wYXRpYmlsaXR5XG5cdGxldCBjb250YWluZXIgPSBub2RlLmNsb3Nlc3QoICcuamV0LXBvcHVwX19jb250YWluZXItaW5uZXInICk7XG5cblx0aWYgKCBjb250YWluZXIgKSB7XG5cdFx0cmV0dXJuIGdldE5vZGUoIGNvbnRhaW5lciApO1xuXHR9XG5cblx0Ly8gZWxlbWVudG9yLXBybyBwb3B1cCBjb21wYXRpYmlsaXR5XG5cdGNvbnRhaW5lciA9IG5vZGUuY2xvc2VzdCggJy5lbGVtZW50b3ItcG9wdXAtbW9kYWwgLmRpYWxvZy1tZXNzYWdlJyApO1xuXG5cdGlmICggY29udGFpbmVyICkge1xuXHRcdHJldHVybiBnZXROb2RlKCBjb250YWluZXIgKTtcblx0fVxuXG5cdHJldHVybiB3aW5kb3c7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0cyB7SW5wdXREYXRhW119XG4gKi9cbmZ1bmN0aW9uIGZvY3VzT25JbnZhbGlkSW5wdXQoIGlucHV0cyApIHtcblx0Zm9yICggY29uc3QgaW5wdXQgb2YgaW5wdXRzICkge1xuXHRcdGlmICggaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IWlucHV0LnJlcG9ydGluZy5oYXNBdXRvU2Nyb2xsKCkgJiYgaW5wdXQub25Gb2N1cygpO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VXNlckFnZW50cygpIHtcblx0Zm9yICggY29uc3QgWyBuYW1lLCBpc0FjdGl2ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBlbnZpcm9ubWVudCApICkge1xuXHRcdGlmICggIWlzQWN0aXZlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggYGpldC0tdWEtJHsgbmFtZSB9YCApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGlzVUEoIGJyb3dzZXIgKSB7XG5cdHJldHVybiBlbnZpcm9ubWVudD8uWyBicm93c2VyIF07XG59XG5cbmV4cG9ydCB7XG5cdGFsbFJlamVjdGVkLFxuXHRnZXRMYW5ndWFnZSxcblx0c2V0QXR0cnMsXG5cdHRvSFRNTCxcblx0aXNFbXB0eSxcblx0Z2V0T2Zmc2V0VG9wLFxuXHRmb2N1c09uSW52YWxpZElucHV0LFxuXHRpc1Zpc2libGUsXG5cdGdldFNjcm9sbFBhcmVudCxcblx0aXNVQSxcblx0YXBwbHlVc2VyQWdlbnRzLFxufTsiLCJpbXBvcnQgQ2FsY3VsYXRlZEZvcm11bGEgZnJvbSAnLi4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEnO1xuXG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9ICdvcHRpb24tbGFiZWwnO1xuXG5mdW5jdGlvbiBnZXRJbnB1dE9wdGlvbkxhYmVsKG5vZGUpIHtcblxuXHRpZiAoIW5vZGUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcblx0XHRjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBBcnJheS5mcm9tKG5vZGUuc2VsZWN0ZWRPcHRpb25zIHx8IFtdKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRPcHRpb25zXG5cdFx0XHQubWFwKChvcHRpb24pID0+IFN0cmluZyhcblx0XHRcdFx0b3B0aW9uLmxhYmVsIHx8IG9wdGlvbi50ZXh0Q29udGVudCB8fCBvcHRpb24udmFsdWUgfHwgJydcblx0XHRcdCkudHJpbSgpKVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJywgJyk7XG5cdH1cblx0aWYgKFxuXHRcdChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSAmJlxuXHRcdCFub2RlLmNoZWNrZWRcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmIChub2RlLnR5cGUgPT09ICdjaGVja2JveCcgfHwgbm9kZS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0Y29uc3QgbGFiZWwgPSBub2RlLmNsb3Nlc3QoJ2xhYmVsJyk7XG5cdFx0aWYgKCFsYWJlbCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCB0ZXh0Tm9kZSA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblx0XHRyZXR1cm4gU3RyaW5nKFxuXHRcdFx0dGV4dE5vZGU/LnRleHRDb250ZW50IHx8IGxhYmVsLnRleHRDb250ZW50IHx8IG5vZGUudmFsdWUgfHwgJydcblx0XHQpLnRyaW0oKTtcblx0fVxuXHRyZXR1cm4gJyc7XG5cbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRPcHRpb25MYWJlbHMoaW5wdXQpIHtcblxuXHRjb25zdCBub2RlcyA9IEFycmF5LmZyb20oaW5wdXQubm9kZXMgfHwgW10pO1xuXHRyZXR1cm4gbm9kZXNcblx0XHQubWFwKGdldElucHV0T3B0aW9uTGFiZWwpXG5cdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdC5qb2luKCcsICcpO1xuXG59XG5cbmZ1bmN0aW9uIENhbGN1bGF0ZWRIdG1sU3RyaW5nKFxuXHRyb290LFxuXHR7IFxuXHRcdHdpdGhQcmVmaXggPSB0cnVlLCBcblx0XHRtYWNyb0hvc3QgPSBmYWxzZSwgXG5cdFx0bWFjcm9Gb3JtYXQgPSAnJyxcblx0XHQuLi5vcHRpb25zIFxuXHR9ID0ge30sXG4pIHtcblx0Q2FsY3VsYXRlZEZvcm11bGEuY2FsbCggdGhpcywgcm9vdCwgb3B0aW9ucyApO1xuXG5cdGlmICggd2l0aFByZWZpeCApIHtcblx0XHR0aGlzLnJlZ2V4cCA9IC9KRkJfRklFTEQ6OiguKykvZ2k7XG5cdH1cblxuXHR0aGlzLm1hY3JvSG9zdCA9IG1hY3JvSG9zdCB8fCBmYWxzZTtcblx0dGhpcy5tYWNyb0Zvcm1hdCA9IG1hY3JvRm9ybWF0IHx8ICcnO1xuXG5cdHRoaXMucmVsYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRjb25zdCAkZmllbGROb2RlID0galF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICk7XG5cdFx0Y29uc3QgJG1hY3JvSG9zdCA9IHRoaXMubWFjcm9Ib3N0ID8galF1ZXJ5KCB0aGlzLm1hY3JvSG9zdCApIDogZmFsc2U7XG5cblx0XHRsZXQgZmllbGRWYWx1ZSA9IGFwcGx5RmlsdGVycyhcblx0XHRcdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHQkZmllbGROb2RlLFxuXHRcdFx0JG1hY3JvSG9zdCxcblx0XHRcdHRoaXMubWFjcm9Gb3JtYXQsXG5cdFx0KTtcblxuXHRcdGZpZWxkVmFsdWUgPSB3cD8uaG9va3M/LmFwcGx5RmlsdGVyc1xuXHRcdFx0PyB3cC5ob29rcy5hcHBseUZpbHRlcnMoXG5cdFx0XHRcdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxuXHRcdFx0XHRmaWVsZFZhbHVlLFxuXHRcdFx0XHQkZmllbGROb2RlLFxuXHRcdFx0XHQkbWFjcm9Ib3N0LFxuXHRcdFx0XHR0aGlzLm1hY3JvRm9ybWF0LFxuXHRcdFx0KVxuXHRcdFx0OiBmaWVsZFZhbHVlO1xuXG5cdFx0aWYgKGZhbHNlICE9PSBmaWVsZFZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gZmllbGRWYWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9PT0gdGhpcy5tYWNyb0Zvcm1hdCkge1xuXHRcdFx0cmV0dXJuIGdldElucHV0T3B0aW9uTGFiZWxzKGlucHV0KSB8fCBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dC52YWx1ZS5jdXJyZW50O1xuXHR9LmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLm9uTWlzc2luZ1BhcnQgPSBmdW5jdGlvbiAoKSB7fTtcbn1cblxuQ2FsY3VsYXRlZEh0bWxTdHJpbmcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlICk7XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZS5jYWxjdWxhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdHJldHVybiB0aGlzLmZvcm11bGE7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5wYXJ0c1xuXHRcdC5tYXAoICggY3VycmVudCApID0+IHtcblx0XHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGN1cnJlbnQgKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBjdXJyZW50KCk7XG5cblx0XHRcdHJldHVybiAoIG51bGwgPT09IHJlc3VsdCB8fCAnJyA9PT0gcmVzdWx0ICkgPyAnJyA6IHJlc3VsdDtcblx0XHR9IClcblx0XHQuam9pbiggJycgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRIdG1sU3RyaW5nO1xuIiwiZnVuY3Rpb24qIGl0ZXJhdGVDb21tZW50cyhcblx0cm9vdE5vZGUsIGFjY2VwdENhbGxiYWNrID0gKCkgPT4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUICkge1xuXHQvLyBGb3VydGggYXJndW1lbnQsIHdoaWNoIGlzIGFjdHVhbGx5IG9ic29sZXRlIGFjY29yZGluZyB0byB0aGVcblx0Ly8gRE9NNCBzdGFuZGFyZCwgaXMgcmVxdWlyZWQgaW4gSUUgMTFcblx0Y29uc3QgaXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoXG5cdFx0cm9vdE5vZGUsXG5cdFx0Tm9kZUZpbHRlci5TSE9XX0NPTU1FTlQsXG5cdFx0e1xuXHRcdFx0YWNjZXB0Tm9kZTogYWNjZXB0Q2FsbGJhY2ssXG5cdFx0fSxcblx0KTtcblx0bGV0IGN1ck5vZGU7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG5cdHdoaWxlICggY3VyTm9kZSA9IGl0ZXJhdG9yLm5leHROb2RlKCkgKSB7XG5cdFx0Y3VyTm9kZS5ub2RlVmFsdWUgPSBjdXJOb2RlLm5vZGVWYWx1ZS50cmltKCk7XG5cblx0XHR5aWVsZCBjdXJOb2RlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdGVDb21tZW50czsiLCJpbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaXRlcmF0ZUNvbW1lbnRzJztcblxuZnVuY3Rpb24qIGl0ZXJhdGVKZmJDb21tZW50cyggcm9vdE5vZGUgKSB7XG5cdGNvbnN0IGFjY2VwdENhbGxiYWNrID0gbm9kZSA9PiB7XG5cdFx0cmV0dXJuIG5vZGUudGV4dENvbnRlbnQuaW5jbHVkZXMoICdKRkJfRklFTEQ6OicgKTtcblx0fTtcblxuXHR5aWVsZCogaXRlcmF0ZUNvbW1lbnRzKCByb290Tm9kZSwgYWNjZXB0Q2FsbGJhY2sgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXRlcmF0ZUpmYkNvbW1lbnRzOyIsImltcG9ydCBDYWxjdWxhdGVkSHRtbFN0cmluZyBmcm9tICcuL0NhbGN1bGF0ZWRIdG1sU3RyaW5nJztcblxuY29uc3Qge1xuXHQgICAgICBfXyxcblx0ICAgICAgc3ByaW50ZixcbiAgICAgIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEBwYXJhbSBjb21tZW50XG4gKiBAcGFyYW0gcm9vdCAgICB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZUNvbW1lbnQoIGNvbW1lbnQsIHJvb3QgKSB7XG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBjb21tZW50LnRleHRDb250ZW50ICk7XG5cblx0aWYgKCAhZm9ybXVsYS5wYXJ0cz8ubGVuZ3RoICkge1xuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0XHRjb25zb2xlLmdyb3VwKFxuXHRcdFx0X18oXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBodG1sIG1hY3JvJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBjb21tZW50IHRleHRcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRjb21tZW50LnRleHRDb250ZW50LFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xuXG5cdGNvbnN0IHByZXZTaWJsaW5nID0gY29tbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcblx0XHR3cmFwcGVyLFxuXHRcdGNvbW1lbnQsXG5cdCk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0cHJldlNpYmxpbmcuaW5uZXJIVE1MID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcblx0Y29tbWVudC5qZmJPYnNlcnZlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVDb21tZW50OyIsImltcG9ydCBDYWxjdWxhdGVkSHRtbFN0cmluZyBmcm9tICcuL0NhbGN1bGF0ZWRIdG1sU3RyaW5nJztcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSAgICAge05vZGV9XG4gKiBAcGFyYW0gYXR0ck5hbWUge3N0cmluZ31cbiAqIEBwYXJhbSByb290ICAgICB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZU1hY3JvQXR0ciggbm9kZSwgYXR0ck5hbWUsIHJvb3QgKSB7XG5cdGNvbnN0IG5vZGVWYWx1ZSA9IG5vZGVbIGF0dHJOYW1lIF0gPz8gJyc7XG5cblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIG5vZGVWYWx1ZSApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QgKTtcblx0Zm9ybXVsYS5vYnNlcnZlKCBub2RlVmFsdWUgKTtcblxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRub2RlWyBhdHRyTmFtZSBdID0gZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKTtcblx0fTtcblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZU1hY3JvQXR0cjsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZX1cbiAqIEBwYXJhbSByb290IHtPYnNlcnZhYmxlfVxuICovXG5mdW5jdGlvbiBvYnNlcnZlTm9kZSggbm9kZSwgcm9vdCApIHtcblx0aWYgKCAhbm9kZS5fX2pmYk1hY3JvVGVtcGxhdGUgKSB7XG5cdFx0bm9kZS5fX2pmYk1hY3JvVGVtcGxhdGUgPSBub2RlLmlubmVySFRNTDtcblx0fVxuXG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QsIHtcblx0XHR3aXRoUHJlZml4OiBmYWxzZSxcblx0XHRtYWNyb0hvc3Q6IG5vZGUsXG5cdFx0bWFjcm9Gb3JtYXQ6IG5vZGUuZGF0YXNldC5qZmJNYWNyb0Zvcm1hdCB8fCAnJyxcblx0fSApO1xuXHRmb3JtdWxhLm9ic2VydmUoIGAlJHsgbm9kZS5kYXRhc2V0LmpmYk1hY3JvIH0lYCApO1xuXG5cdGlmICggIWZvcm11bGEucGFydHM/Lmxlbmd0aCApIHtcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdFx0Y29uc29sZS5ncm91cChcblx0XHRcdF9fKFxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gbWFjcm9cblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRub2RlLmRhdGFzZXQuamZiTWFjcm8sXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZS5kYXRhc2V0LmpmYk9ic2VydmVkID0gMTtcblxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRsZXQgaHRtbCA9IFN0cmluZyggZm9ybXVsYS5jYWxjdWxhdGVTdHJpbmcoKSApO1xuXG5cdFx0Y29uc3QgaGFzVGV4dGFyZWEgPSBub2RlLnF1ZXJ5U2VsZWN0b3I/LiggJ3RleHRhcmVhJyApO1xuXG5cdFx0aWYgKCBoYXNUZXh0YXJlYSApIHtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoIC9cXHJcXG58XFxyfFxcbi9nLCAnPGJyPicgKTtcblx0XHR9XG5cblx0XHRub2RlLmlubmVySFRNTCA9IGh0bWw7XG5cdH07XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZU5vZGU7XG4iLCJmdW5jdGlvbiBxdWVyeUJ5QXR0clZhbHVlKCByb290Tm9kZSwgdmFsdWUgKSB7XG5cdGNvbnN0IHsgcmVwbGFjZUF0dHJzID0gW10gfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG5cdGNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSBbXTtcblxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXBsYWNlQXR0cnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0cXVlcnlTZWxlY3Rvci5wdXNoKCBgWyR7IHJlcGxhY2VBdHRyc1sgaSBdIH0qPVwiJHsgdmFsdWUgfVwiXWAgKTtcblx0fVxuXG5cdHJldHVybiByb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCBxdWVyeVNlbGVjdG9yLmpvaW4oICcsICcgKSApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUJ5QXR0clZhbHVlOyIsImltcG9ydCBpbml0Rm9ybSBmcm9tICcuL2luaXRGb3JtJztcblxuZnVuY3Rpb24gaW5pdEVsZW1lbnRvcigpIHtcblx0aWYgKCAhIHdpbmRvdy5lbGVtZW50b3JGcm9udGVuZCApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3Qgd2lkZ2V0cyA9IHtcblx0XHQnamV0LWVuZ2luZS1ib29raW5nLWZvcm0uZGVmYXVsdCc6IGluaXRGb3JtLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyLWZvcm0uZGVmYXVsdCc6IGluaXRGb3JtLFxuXHR9O1xuXG5cdGpRdWVyeS5lYWNoKCB3aWRnZXRzLCBmdW5jdGlvbiggd2lkZ2V0LCBjYWxsYmFjayApIHtcblx0XHR3aW5kb3cuZWxlbWVudG9yRnJvbnRlbmQuaG9va3MuYWRkQWN0aW9uKCAnZnJvbnRlbmQvZWxlbWVudF9yZWFkeS8nICsgd2lkZ2V0LCBjYWxsYmFjayApO1xuXHR9ICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRFbGVtZW50b3I7IiwiaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlciA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlciA/PyB7fTtcblxuZnVuY3Rpb24gaW5pdEZvcm0oICRzY29wZSApIHtcblx0Y29uc3QgZm9ybSA9ICRzY29wZVsgMCBdLnF1ZXJ5U2VsZWN0b3IoICdmb3JtLmpldC1mb3JtLWJ1aWxkZXInICk7XG5cblx0aWYgKCAhZm9ybSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcblxuXHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJbIGZvcm0uZGF0YXNldC5mb3JtSWQgXSA9IG9ic2VydmFibGU7XG5cblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvaW5pdCcsXG5cdFx0WyAkc2NvcGUsIG9ic2VydmFibGUgXSxcblx0KTtcblxuXHRvYnNlcnZhYmxlLm9ic2VydmUoIGZvcm0gKTtcblxuXHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHQnamV0LWZvcm0tYnVpbGRlci9hZnRlci1pbml0Jyxcblx0XHRbICRzY29wZSwgb2JzZXJ2YWJsZSBdLFxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Rm9ybTsiLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcbmltcG9ydCB7IGlzQ2hhbmdlVHlwZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcbmltcG9ydCBSZWFjdGl2ZUhvb2sgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcbmltcG9ydCB7IFNUUklDVF9NT0RFIH0gZnJvbSAnLi4vc2lnbmFscy9CYXNlU2lnbmFsJztcblxuZnVuY3Rpb24gQ2hhbmdlRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNDaGFuZ2VUeXBlKCBub2RlICk7XG5cdH07XG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR9ICk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0IVNUUklDVF9NT0RFICYmIGpRdWVyeSggbm9kZSApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0aWYgKCB0aGlzLnZhbHVlLmN1cnJlbnQgPT0gZXZlbnQudGFyZ2V0LnZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhbGxhYmxlLmxvY2tUcmlnZ2VyKCk7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLmNhbGxhYmxlLnVubG9ja1RyaWdnZXIoKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmVudGVyS2V5ID0gbmV3IFJlYWN0aXZlSG9vaygpO1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSApO1xuXHR9O1xuXG5cdHRoaXMub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnNpbGVuY2VTZXQoICcnICk7XG5cdH07XG59XG5cbkNoYW5nZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VEYXRhOyIsImltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XG5pbXBvcnQgeyBnZXRTaWduYWwgfSBmcm9tICcuLi9zaWduYWxzL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVSZXBvcnQgfSBmcm9tICcuLi9yZXBvcnRpbmcvZnVuY3Rpb25zJztcbmltcG9ydCB7IGdldFBhcnNlZE5hbWUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRPZmZzZXRUb3AsIGlzVmlzaWJsZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBTVFJJQ1RfTU9ERSB9IGZyb20gJy4uL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5cbmNvbnN0IHsgZG9BY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHR5cGVkZWYge0lucHV0RGF0YX1cbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWUgICAgTmFtZSBvZiBodG1sIGZpZWxkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkaW5nIHNwZWNpYWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgICAgICAgUHJlcGFyZWQgbmFtZSBvZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaWVsZFxuICogQHByb3BlcnR5IHtIVE1MSW5wdXRFbGVtZW50fCpbXX0gICAgICAgICAgICAgICBub2RlcyAgICAgIFJlbGF0ZWQgbm9kZXNcbiAqIEBwcm9wZXJ0eSB7UmVhY3RpdmVWYXJ9ICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgICBSZWFjdGl2ZSB2YWx1ZVxuICogQHByb3BlcnR5IHtDb25kaXRpb25DaGVja2VyfG51bGx9ICAgICAgICAgICAgICBjaGVja2VyICAgIENvbmRpdGlvbiBjaGVja2VyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBieVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmRpdGlvbmFsIEJsb2NrXG4gKiBAcHJvcGVydHkgeyp9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNWYWx1ZSAgQ2FsY3VsYXRlZCB2YWx1ZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgYnkgQ2FsY3VsYXRlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpZWxkXG4gKiBAcHJvcGVydHkge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9IHJlcG9ydGluZyAgUmVwb3J0aW5nIG9iamVjdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB2YWxpZGF0aW9uIGFuZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dpbmcgZXJyb3JzXG4gKiBAcHJvcGVydHkge09ic2VydmFibGV9ICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QgICAgICAgTmVhcmVzdCBvYnNlcnZhYmxlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UsIGNvdWxkIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93IG9mIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGVyXG4gKiBAcHJvcGVydHkge1BhZ2VTdGF0ZX0gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UgICAgICAgUmVsYXRlZCBwYWdlIGluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlzdGVwIGZvcm1cbiAqIEBwcm9wZXJ0eSB7TG9hZGluZ1JlYWN0aXZlVmFyfSAgICAgICAgICAgICAgICAgbG9hZGluZyAgICBSZWFjdGl2ZSB2YXIgdG9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2UgdmlzdWFsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgb2YgdGhlIGZpZWxkXG4gKiBAcHJvcGVydHkge09iamVjdDxSZWFjdGl2ZVZhcj59ICAgICAgICAgICAgICAgIGF0dHJzICAgICAgT2JqZWN0IHdpdGhcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdGl2ZSBhdHRyaWJ1dGVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQgSXMgcmVxdWlyZWQgZmllbGRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBub3RcbiAqIEBwcm9wZXJ0eSB7bnVsbHxSZWFjdGl2ZUhvb2t9ICAgICAgICAgICAgICAgICAgZW50ZXJLZXkgICBVc2VkIGZvciBoYW5kbGluZ1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyIGhvb2tzIG9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc3MgRW50ZXIgYnV0dG9uXG4gKiBAcHJvcGVydHkge251bGx8c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZSAgVHlwZSBpZGVudGlmaWVyIG9mXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIElucHV0RGF0YSgpIHtcblx0dGhpcy5yYXdOYW1lID0gJyc7XG5cdHRoaXMubmFtZSAgICA9ICcnO1xuXHR0aGlzLmNvbW1lbnQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfEhUTUxJbnB1dEVsZW1lbnRbXX1cblx0ICovXG5cdHRoaXMubm9kZXMgPSBbXTtcblx0dGhpcy5hdHRycyAgICAgICAgID0ge307XG5cdHRoaXMuZW50ZXJLZXkgICAgICA9IG51bGw7XG5cdHRoaXMuaW5wdXRUeXBlICAgICA9IG51bGw7XG5cdHRoaXMub2Zmc2V0T25Gb2N1cyA9IDc1O1xuXG5cdC8qKlxuXHQgKiBQYXRoIGZyb20gdG9wIG9mIGZvcm0gdG8gY3VycmVudCBmaWVsZCBuYW1lXG5cdCAqIEV4LjogWyAncmVwZWF0ZXJfbmFtZScsIDAsICd0ZXh0X2ZpZWxkJyBdXG5cdCAqIFdoZXJlOlxuXHQgKiAgLSAncmVwZWF0ZXJfbmFtZSc6IG5hbWUgb2YgcmVwZWF0ZXIsIHdoZXJlIGN1cnJlbnQgZmllbGQgaXMgcGxhY2VkXG5cdCAqICAtIDA6IGluZGV4IG9mIHJlcGVhdGVyIHJvdywgd2hlcmUgY3VycmVudCBmaWVsZCBpcyBwbGFjZWRcblx0ICogIC0gJ3RleHRfZmllbGQnOiBuYW1lIG9mIGN1cnJlbnQgZmllbGQgbmFtZVxuXHQgKiBAdHlwZSB7QXJyYXk8c3RyaW5nIHwgbnVtYmVyPn1cblx0ICovXG5cdHRoaXMucGF0aCA9IFtdO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR0aGlzLnZhbHVlID0gdGhpcy5nZXRSZWFjdGl2ZSgpO1xuXHR0aGlzLnZhbHVlLndhdGNoKCB0aGlzLm9uQ2hhbmdlLmJpbmQoIHRoaXMgKSApO1xuXG5cdHRoaXMuaXNSZXF1aXJlZCA9IGZhbHNlO1xuXHR0aGlzLmNhbGNWYWx1ZSAgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QWR2YW5jZWRSZXBvcnRpbmd8QnJvd3NlclJlcG9ydGluZ31cblx0ICovXG5cdHRoaXMucmVwb3J0aW5nID0gbnVsbDtcblxuXHR0aGlzLmNoZWNrZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMucm9vdCA9IG51bGw7XG5cblx0dGhpcy5sb2FkaW5nID0gbmV3IExvYWRpbmdSZWFjdGl2ZVZhciggZmFsc2UgKTtcblx0dGhpcy5sb2FkaW5nLm1ha2UoKTtcblxuXHQvKipcblx0ICogSW4gQ2hlY2tib3hEYXRhIGNhc2Ugd2UgaGF2ZSBqdXN0IG1haW4gc2FuaXRpemVyLCB3aXRob3V0IGNhbGxhYmxlLlxuXHQgKiBTbyB3ZSBzZXQgLmNhbGNWYWx1ZSBpbnNpZGUgY2FsbGFibGUucnVuU2lnbmFsKClcblx0ICpcblx0ICogQW5kIHRvIHByZXZlbnQgcmVzZXR0aW5nIC5jYWxjVmFsdWUgYnkgb25DaGFuZ2Vcblx0ICogc2V0IHRoaXMgcHJvcGVydHkgdG8gRkFMU0UuXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0dGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlID0gdHJ1ZTtcblx0dGhpcy52YWxpZGF0ZVRpbWVyICAgID0gZmFsc2U7XG5cdHRoaXMuc3RvcFZhbGlkYXRpb24gICA9IGZhbHNlO1xuXHR0aGlzLmFib3J0Q29udHJvbGxlciAgPSBudWxsO1xufVxuXG5JbnB1dERhdGEucHJvdG90eXBlLmF0dHJzID0ge307XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuSW5wdXREYXRhLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCBldmVudCA9PiB7XG5cdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHR9ICk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsICgpID0+IHt9ICk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCAoKSA9PiB7XG5cdFx0aWYgKCB0aGlzLnJlcG9ydGluZyAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5yZXBvcnRpbmcuc3dpdGNoQnV0dG9uc1N0YXRlICkge1xuXHRcdFx0dGhpcy5yZXBvcnRpbmcuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5kZWJvdW5jZWRSZXBvcnQoKTtcblx0fSApO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0IVNUUklDVF9NT0RFICYmIGpRdWVyeSggbm9kZSApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRpZiAoIHRoaXMudmFsdWUuY3VycmVudCA9PSBldmVudC50YXJnZXQudmFsdWUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5jYWxsYWJsZS51bmxvY2tUcmlnZ2VyKCk7XG5cdH0gKTtcblxuXHRpZiAoICdpbnB1dCcgIT09IHRoaXMuaW5wdXRUeXBlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVudGVyS2V5LmJpbmQoIHRoaXMgKSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUubWFrZVJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLm9uT2JzZXJ2ZSgpO1xuXHR0aGlzLmFkZExpc3RlbmVycygpO1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG5cblx0dGhpcy52YWx1ZS5tYWtlKCk7XG5cblx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQubWFrZVJlYWN0aXZlJywgdGhpcyApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUub25DaGFuZ2UgICAgID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XG5cdGlmICggdGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlICkge1xuXHRcdHRoaXMuY2FsY1ZhbHVlID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXHR9XG5cblx0Ly8gYXBwbHkgY2hhbmdlcyBpbiBET01cblx0dGhpcz8uY2FsbGFibGU/LnJ1biggcHJldlZhbHVlICk7XG5cblx0Ly8gc2hvdyBlcnJvcnNcblx0dGhpcy5yZXBvcnQoKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLnJlcG9ydCAgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5yZXBvcnRpbmcudmFsaWRhdGVPbkNoYW5nZSgpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUucmVwb3J0T25CbHVyID0gZnVuY3Rpb24gKCBzaWduYWwgPSBudWxsICkge1xuXHR0aGlzLnJlcG9ydGluZy52YWxpZGF0ZU9uQmx1ciggc2lnbmFsICk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5kZWJvdW5jZWRSZXBvcnQgPSBmdW5jdGlvbigpIHtcblx0aWYgKCB0aGlzLnZhbGlkYXRlVGltZXIgKSB7XG5cdFx0dGhpcy5zdG9wVmFsaWRhdGlvbiA9IHRydWU7XG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLnZhbGlkYXRlVGltZXIgKTtcblxuXHRcdGlmICggdGhpcy5hYm9ydENvbnRyb2xsZXIgKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICB9XG5cdH1cblxuXHR0aGlzLmFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGxldCBzaWduYWwgPSB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWw7XG5cblx0dGhpcy52YWxpZGF0ZVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xuXHRcdHRoaXMucmVwb3J0T25CbHVyKCBzaWduYWwgKTtcblx0fSwgNDUwICk7XG59XG4vKipcbiAqIEBwYXJhbSAgY2FsbGFibGVcbiAqIEByZXR1cm4geyhmdW5jdGlvbigpOiAqfCpbXSl8Kn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdHJldHVybiB0aGlzLnZhbHVlLndhdGNoKCBjYWxsYWJsZSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUud2F0Y2hWYWxpZGl0eSA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdHJldHVybiB0aGlzLnJlcG9ydGluZy52YWxpZGl0eVN0YXRlLndhdGNoKCBjYWxsYWJsZSApO1xufTtcbi8qKlxuICogQHBhcmFtICBjYWxsYWJsZVxuICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICp8KltdKXwqfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnNhbml0aXplID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0cmV0dXJuIHRoaXMudmFsdWUuc2FuaXRpemUoIGNhbGxhYmxlICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gaW5wdXREYXRhIHtJbnB1dERhdGF9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoIGlucHV0RGF0YSApIHtcblx0dGhpcy5ub2RlcyA9IFsgLi4uaW5wdXREYXRhLmdldE5vZGUoKSBdO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBmaWVsZFZhbHVlO1xuXHRpZiAoIHRoaXMuaXNBcnJheSgpICkge1xuXHRcdGZpZWxkVmFsdWUgPSBBcnJheS5mcm9tKCB0aGlzLm5vZGVzICkuXG5cdFx0XHRtYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcblx0fVxuXHRlbHNlIHtcblx0XHRmaWVsZFZhbHVlID0gdGhpcy5ub2Rlc1sgMCBdPy52YWx1ZTtcblx0fVxuXHR0aGlzLmNhbGNWYWx1ZSAgICAgPSBmaWVsZFZhbHVlO1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBmaWVsZFZhbHVlO1xufTtcbi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0dGhpcy5ub2RlcyAgID0gWyBub2RlIF07XG5cdHRoaXMucmF3TmFtZSA9IG5vZGUubmFtZSA/PyAnJztcblx0dGhpcy5uYW1lICAgID0gZ2V0UGFyc2VkTmFtZSggdGhpcy5yYXdOYW1lICk7XG5cblx0dGhpcy5pbnB1dFR5cGUgPSBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG59O1xuLyoqXG4gKiBSdW5zIG9uY2UgaW4gbGlmZWN5Y2xlLlxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLm9uT2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdC8qKlxuXHQgKiBTYXZlIGxpbmsgdG8gdGhpcyBvYmplY3Rcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdG5vZGUuamZiU3luYyA9IHRoaXM7XG5cblx0dGhpcy5pc1JlcXVpcmVkID0gdGhpcy5jaGVja0lzUmVxdWlyZWQoKTtcblxuXHR0aGlzLmNhbGxhYmxlID0gZ2V0U2lnbmFsKCBub2RlLCB0aGlzICk7XG5cdHRoaXMuY2FsbGFibGUuc2V0SW5wdXQoIHRoaXMgKTtcblxuXHR0aGlzLnJlcG9ydGluZyA9IGNyZWF0ZVJlcG9ydCggdGhpcyApO1xuXG5cdHRoaXMubG9hZGluZy53YXRjaCggKCkgPT4gdGhpcy5vbkNoYW5nZUxvYWRpbmcoKSApO1xuXG5cdHRoaXMucGF0aCA9IFsgLi4udGhpcy5nZXRQYXJlbnRQYXRoKCksIHRoaXMubmFtZSBdO1xuXG5cdGlmIChcblx0XHQvLyBpcyBhamF4XG5cdFx0IXRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApIHx8XG5cdFx0dGhpcy5oYXNQYXJlbnQoKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci53YXRjaFJlc2V0KCAoKSA9PiB0aGlzLm9uQ2xlYXIoKSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUub25DaGFuZ2VMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuXG5cdHRoaXMuZ2V0U3VibWl0KCkubG9ja1N0YXRlLmN1cnJlbnQgPSB0aGlzLmxvYWRpbmcuY3VycmVudDtcblxuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cdGNvbnN0IHdyYXBwZXIgID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xuXG5cdHdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWxvYWRpbmcnLCB0aGlzLmxvYWRpbmcuY3VycmVudCApO1xufTtcbi8qKlxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuc2V0Um9vdCA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcblx0dGhpcy5yb290ID0gb2JzZXJ2YWJsZTtcbn07XG4vKipcbiAqIEJ5IGRlZmF1bHQgaXQgcnVucyBvbmx5IGlmIHJlcGVhdGVyIGl0ZW0gd2FzIHJlbW92ZWRcbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbn07XG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5uYW1lO1xufTtcbi8qKlxuICogQHJldHVybiB7QXJyYXkgfCBzdHJpbmcgfCBib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50O1xufTtcbi8qKlxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubm9kZXM7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmlzQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnJhd05hbWUuaW5jbHVkZXMoICdbXScgKTtcbn07XG4vKipcbiAqIEBwYXJhbSBjYWxsYWJsZSAgICAge0Z1bmN0aW9ufG1peGVkfVxuICogQHBhcmFtIGlucHV0Q29udGV4dCB7SW5wdXREYXRhfEJvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuYmVmb3JlU3VibWl0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSwgaW5wdXRDb250ZXh0ID0gZmFsc2UgKSB7XG5cdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLnByb21pc2UoIGNhbGxhYmxlLCBpbnB1dENvbnRleHQgKTtcbn07XG4vKipcbiAqIEByZXR1cm4ge0Zvcm1TdWJtaXR9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0U3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRSb290KCkuZm9ybTtcbn07XG4vKipcbiAqIEByZXR1cm4ge09ic2VydmFibGV9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5yb290Py5wYXJlbnQgKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdDtcblx0fVxuXHRyZXR1cm4gdGhpcy5yb290LnBhcmVudC5nZXRSb290KCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcblxuXHRyZXR1cm4gaXNWaXNpYmxlKCB3cmFwcGVyICk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2lsZW5jZVNldCggbnVsbCApO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRSZWFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIG5ldyBSZWFjdGl2ZVZhcigpO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5jaGVja0lzUmVxdWlyZWQgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRyZXR1cm4gbm9kZS5yZXF1aXJlZCA/PyAhIW5vZGUuZGF0YXNldC5yZXF1aXJlZD8ubGVuZ3RoO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5zaWxlbmNlU2V0ID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0LyoqXG5cdCAqIFJlbGF0ZWQgdG8gaXNzdWVcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTI2MSNpc3N1ZWNvbW1lbnQtMTI5MzI5MDI5MVxuXHQgKi9cblx0Y29uc3QgdGVtcFJlcG9ydCA9IHRoaXMucmVwb3J0LmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLnJlcG9ydCA9ICgpID0+IHt9O1xuXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHZhbHVlO1xuXG5cdHRoaXMucmVwb3J0ID0gdGVtcFJlcG9ydDtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuc2lsZW5jZU5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgdGVtcFJlcG9ydCA9IHRoaXMucmVwb3J0LmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLnJlcG9ydCA9ICgpID0+IHt9O1xuXG5cdHRoaXMudmFsdWUubm90aWZ5KCk7XG5cblx0dGhpcy5yZXBvcnQgPSB0ZW1wUmVwb3J0O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmhhc1BhcmVudCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuICEhdGhpcy5yb290Py5wYXJlbnQ7XG59O1xuXG4vKipcbiAqIEZvciBpbnNlcnQgZXJyb3JzIGluIGFkdmFuY2VkIHZhbGlkYXRpb24gbW9kZVxuICogQHJldHVybiB7Kn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRXcmFwcGVyTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubm9kZXNbIDAgXS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5oYW5kbGVFbnRlcktleSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdGlmICggZXZlbnQua2V5ICE9PSAnRW50ZXInIHx8IC8vIG5vdCBlbnRlciBrZXlcblx0XHQhdGhpcy5lbnRlcktleSB8fCAvLyBoYW5kbGluZyBlbnRlciBrZXkgaXMgZGlzYWJsZWRcblx0XHRldmVudC5zaGlmdEtleSB8fCAvLyB0aGUgc2hpZnQga2V5IHdhcyBwcmVzc2VkXG5cdFx0ZXZlbnQuaXNDb21wb3NpbmcgLy8gaWYgdGhlIGV2ZW50IGlzIGZpcmVkIHdpdGhpbiBhIGNvbXBvc2l0aW9uIHNlc3Npb25cblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR0aGlzLm9uRW50ZXJLZXkoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUub25FbnRlcktleSA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY2FuU3VibWl0ID0gdGhpcy5lbnRlcktleS5hcHBseUZpbHRlcnMoIHRydWUgKTtcblxuXHRpZiAoIGNhblN1Ym1pdCApIHtcblx0XHRjb25zdCBjYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSB0aGlzLmdldFN1Ym1pdCgpLmNhblRyaWdnZXJFbnRlclN1Ym1pdDtcblxuXHRcdGlmICggdHJ1ZSA9PT0gY2FuVHJpZ2dlckVudGVyU3VibWl0ICkge1xuXHRcdFx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXQoKTtcblx0XHR9XG5cdH1cbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuaW5pdE5vdGlmeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNpbGVuY2VOb3RpZnkoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUub25Gb2N1cyAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2Nyb2xsVG8oKTtcblx0dGhpcy5mb2N1c1JhdygpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuZm9jdXNSYXcgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHQvKipcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjI2NSNpc3N1ZWNvbW1lbnQtMTQ0Nzk4ODcxOFxuXHQgKi9cblx0aWYgKCBbICdkYXRlJywgJ3RpbWUnLCAnZGF0ZXRpbWUtbG9jYWwnIF0uaW5jbHVkZXMoIG5vZGUudHlwZSApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGU/LmZvY3VzKCB7IHByZXZlbnRTY3JvbGw6IHRydWUgfSApO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XG5cblx0d2luZG93LnNjcm9sbFRvKCB7XG5cdFx0dG9wOiBnZXRPZmZzZXRUb3AoIHdyYXBwZXIgKSAtIHRoaXMub2Zmc2V0T25Gb2N1cyxcblx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdH0gKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7UmVwb3J0aW5nQ29udGV4dH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5yb290LmdldENvbnRleHQoKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7Ym9vbGVhbnxJbnB1dERhdGFbXX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5wb3B1bGF0ZUlubmVyID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEV4ZWN1dGVkIHdpdGggZGVmYXVsdCBicm93c2VyIHZhbGlkYXRpb25cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxFbGVtZW50fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJlcG9ydGluZ05vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5vZGVzWyAwIF07XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFBhcmVudFBhdGggPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7QXJyYXl8T2JqZWN0fVxuXHQgKi9cblx0Y29uc3QgdmFsdWUgPSB0aGlzLnJvb3QucGFyZW50LnZhbHVlLmN1cnJlbnQ7XG5cblx0aWYgKCAnb2JqZWN0JyAhPT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIHJvdyBdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZSApICkge1xuXHRcdGlmICggcm93ICE9PSB0aGlzLnJvb3QgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLnRoaXMucm9vdC5wYXJlbnQuZ2V0UGFyZW50UGF0aCgpLFxuXHRcdFx0dGhpcy5yb290LnBhcmVudC5uYW1lLFxuXHRcdFx0aW5kZXgsXG5cdFx0XTtcblx0fVxuXG5cdHJldHVybiBbXTtcbn07XG5cbi8qKlxuICogUnVucyBvbmx5IG9uY2Ugb24gd2luZG93IFwibG9hZFwiIGV2ZW50XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmVRdWVyeVZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnNldFZhbHVlKCk7XG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XG59O1xuXG4vKipcbiAqIFJ1bnMgb24gc2V0IE9ic2VydmFibGUudmFsdWUuY3VycmVudFxuICogQHBhcmFtIHZhbHVlXG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmV2ZXJ0VmFsdWUgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcbn07XG5cbi8qKlxuICogUmVjYWxjdWxhdGUgdGhlIGZvcm11bGEgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5wdXQgZGF0YS5cbiAqIEBzaW5jZSAzLjQuNVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzExNzg2XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUucmVDYWxjdWxhdGVGb3JtdWxhID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuc2V0VmFsdWUoKTtcblx0dGhpcy5pbml0Tm90aWZ5VmFsdWUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RGF0YTtcbiIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xuaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIE5vTGlzdGVuRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblx0LyoqXG5cdCAqIEB0eXBlIHtOb2RlfVxuXHQgKi9cblx0dGhpcy5jb21tZW50ID0gbnVsbDtcblxuXHR0aGlzLmlzU3VwcG9ydGVkICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNIaWRkZW4oIG5vZGUgKTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gc2lsZW5jZSBpcyBnb2xkZW5cblx0fTtcblx0dGhpcy5vbk9ic2VydmUgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5vbk9ic2VydmUuY2FsbCggdGhpcyApO1xuXG5cdFx0aWYgKCAhdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRDb21tZW50KCk7XG5cdH07XG5cdHRoaXMuc2V0Q29tbWVudCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY29tbWVudCAgID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCggdGhpcy5uYW1lICk7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0bm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSggdGhpcy5jb21tZW50LCBub2RlICk7XG5cdH07XG5cblx0dGhpcy5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHRoaXMubWVyZ2UgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHRoaXMubm9kZXMucHVzaCggLi4uaW5wdXQuZ2V0Tm9kZSgpICk7XG5cdH07XG59XG5cbk5vTGlzdGVuRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vTGlzdGVuRGF0YTsiLCJpbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vSW5wdXREYXRhJztcbmltcG9ydCB7IGlzUmFuZ2UgfSBmcm9tICcuLi9zdXBwb3J0cyc7XG5cbmZ1bmN0aW9uIFJhbmdlRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5udW1iZXJOb2RlID0gbnVsbDtcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSYW5nZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnNldE5vZGUgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cblx0XHR0aGlzLm51bWJlck5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtbnVtYmVyJyxcblx0XHQpO1xuXHR9O1xufVxuXG5SYW5nZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZURhdGE7IiwiaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XG5pbXBvcnQgUmVhY3RpdmVTZXQgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVTZXQnO1xuXG5jb25zdCB7IGJ1aWx0SW5TdGF0ZXMgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVhY3RpdmVTZXR9IHZhbHVlIFJlYWN0aXZlIHZhbHVlXG4gKlxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFJlbmRlclN0YXRlRGF0YSgpIHtcblx0Tm9MaXN0ZW5EYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQnaGlkZGVuJyA9PT0gbm9kZT8udHlwZSAmJlxuXHRcdFx0J19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzW10nID09PSBub2RlLm5hbWVcblx0XHQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XG5cdCAqL1xuXHR0aGlzLmFkZCA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHRcdHRoaXMudmFsdWUuYWRkKCBzdGF0ZU5hbWUgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHN0YXRlTmFtZSB7U3RyaW5nfVxuXHQgKi9cblx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0XHR0aGlzLnZhbHVlLnJlbW92ZSggc3RhdGVOYW1lICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cblx0ICogQHBhcmFtIGZvcmNlICAgICB7bnVsbHxCb29sZWFufVxuXHQgKi9cblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSwgZm9yY2UgPSBudWxsICkge1xuXHRcdHRoaXMudmFsdWUudG9nZ2xlKCBzdGF0ZU5hbWUsIGZvcmNlICk7XG5cdH07XG5cblx0dGhpcy5pc0N1c3RvbSA9IGZ1bmN0aW9uICgga2V5ICkge1xuXHRcdHJldHVybiAhYnVpbHRJblN0YXRlcy5pbmNsdWRlcygga2V5ICk7XG5cdH07XG59XG5cblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBOb0xpc3RlbkRhdGEucHJvdG90eXBlICk7XG5cblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUuZ2V0UmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBuZXcgUmVhY3RpdmVTZXQoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN0YXRlRGF0YTsiLCJpbXBvcnQgQ2hhbmdlRGF0YSBmcm9tICcuL0NoYW5nZURhdGEnO1xuaW1wb3J0IFJhbmdlRGF0YSBmcm9tICcuL1JhbmdlRGF0YSc7XG5pbXBvcnQgTm9MaXN0ZW5EYXRhIGZyb20gJy4vTm9MaXN0ZW5EYXRhJztcbmltcG9ydCBSZW5kZXJTdGF0ZURhdGEgZnJvbSAnLi9SZW5kZXJTdGF0ZURhdGEnO1xuaW1wb3J0IHsgc2V0QXR0cnMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcblx0ICAgICAgZG9BY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAdHlwZSB7ZnVuY3Rpb24oKTogKn1cbiAqL1xuY29uc3QgZ2V0RGF0YVR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdFtcblx0XHRSZW5kZXJTdGF0ZURhdGEsXG5cdFx0UmFuZ2VEYXRhLFxuXHRcdENoYW5nZURhdGEsXG5cdFx0Tm9MaXN0ZW5EYXRhLFxuXHRdLFxuKTtcblxubGV0IGRhdGFUeXBlcyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZVxuICogQHBhcmFtICBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXQoIG5vZGUsIG9ic2VydmFibGUgKSB7XG5cdGlmICggIWRhdGFUeXBlcy5sZW5ndGggKSB7XG5cdFx0ZGF0YVR5cGVzID0gZ2V0RGF0YVR5cGVzKCk7XG5cdH1cblx0Zm9yICggY29uc3QgZGF0YVR5cGUgb2YgZGF0YVR5cGVzICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgZGF0YVR5cGUoKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjdXJyZW50LnNldFJvb3QoIG9ic2VydmFibGUgKTtcblx0XHRjdXJyZW50LnNldE5vZGUoIG5vZGUgKTtcblx0XHRzZXRBdHRycyggY3VycmVudCApO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQuY3JlYXRlZCcsIGN1cnJlbnQgKTtcblxuXHRcdHJldHVybiBjdXJyZW50O1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnICk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlZE5hbWUoIG5hbWUgKSB7XG5cdGNvbnN0IHJlZ2V4cHMgPSBbXG5cdFx0Ly8gbXVsdGlwbGUgZmllbGRzIChjaGVja2JveFtdKVxuXHRcdC9eKFtcXHdcXC1dKylcXFtcXF0kLyxcblx0XHQvLyBmaWVsZHMgaW5zaWRlIHJlcGVhdGVyIChyZXBfbmFtZVsxXVtjb250ZW50X2ZpZWxkXSlcblx0XHQvXltcXHdcXC1dK1xcW1xcZCtcXF1cXFsoW1xcd1xcLV0rKVxcXVxcWz9cXF0/JC8sXG5cdF07XG5cblx0Zm9yICggY29uc3QgcmVnRXhwIG9mIHJlZ2V4cHMgKSB7XG5cdFx0aWYgKCAhcmVnRXhwLnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBtYXRjaGVzID0gbmFtZS5tYXRjaCggcmVnRXhwICk7XG5cblx0XHRyZXR1cm4gbWF0Y2hlc1sgMSBdO1xuXHR9XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbi8qKlxuICogQHBhcmFtIGlucHV0cyB7SW5wdXREYXRhW119XG4gKi9cbmZ1bmN0aW9uIHBvcHVsYXRlSW5wdXRzKCBpbnB1dHMgKSB7XG5cdGNvbnN0IGxpc3QgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0Y29uc3QgaW5uZXIgPSBpbnB1dC5wb3B1bGF0ZUlubmVyKCk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0aW5uZXI/Lmxlbmd0aCAmJiBsaXN0LnB1c2goIC4uLmlubmVyICk7XG5cblx0XHRsaXN0LnB1c2goIGlucHV0ICk7XG5cdH1cblxuXHRyZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IHsgZ2V0UGFyc2VkTmFtZSwgY3JlYXRlSW5wdXQsIHBvcHVsYXRlSW5wdXRzIH07IiwiLyoqXG4gKiBAdGhpcyB7UmVhY3RpdmVWYXJ9XG4gKlxuICogQGNsYXNzXG4gKi9cbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gTG9hZGluZ1JlYWN0aXZlVmFyKCkge1xuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCBmYWxzZSApO1xuXG5cdHRoaXMuc3RhcnQgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudCA9IHRydWU7XG5cdH07XG5cdHRoaXMuZW5kICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudCA9IGZhbHNlO1xuXHR9O1xuXHR0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmN1cnJlbnQgPSAhdGhpcy5jdXJyZW50O1xuXHR9O1xufVxuXG5Mb2FkaW5nUmVhY3RpdmVWYXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVhY3RpdmVWYXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSZWFjdGl2ZVZhcjsiLCJmdW5jdGlvbiBSZWFjdGl2ZUhvb2soKSB7XG5cdHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuUmVhY3RpdmVIb29rLnByb3RvdHlwZSA9IHtcblx0YWRkRmlsdGVyKCBjYWxsYWJsZSApIHtcblx0XHR0aGlzLmhhbmRsZXJzLnB1c2goIGNhbGxhYmxlICk7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcblxuXHRcdHJldHVybiAoKSA9PiB0aGlzLmhhbmRsZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0YXBwbHlGaWx0ZXJzKCAuLi5wYXJhbXMgKSB7XG5cdFx0bGV0IGN1cnJlbnQgICAgID0gcGFyYW1zWyAwIF07XG5cdFx0Y29uc3QgbmV3UGFyYW1zID0gcGFyYW1zLnNsaWNlKCAxICk7XG5cblx0XHRmb3IgKCBjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMgKSB7XG5cdFx0XHRjdXJyZW50ID0gaGFuZGxlciggY3VycmVudCwgLi4ubmV3UGFyYW1zICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZUhvb2s7XG4iLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIFJlYWN0aXZlU2V0KCB2YWx1ZSApIHtcblx0UmVhY3RpdmVWYXIuY2FsbCggdGhpcywgdmFsdWUgKTtcbn1cblxuUmVhY3RpdmVTZXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVhY3RpdmVWYXIucHJvdG90eXBlICk7XG5cblJlYWN0aXZlU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcblx0Ly8gYWRkIHVuaXF1ZSB2YWx1ZVxuXHR0aGlzLmN1cnJlbnQgPSBbXG5cdFx0Li4ubmV3IFNldCggW1xuXHRcdFx0Li4uKFxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPz8gW11cblx0XHRcdCksXG5cdFx0XHRzdGF0ZU5hbWUsXG5cdFx0XSApLFxuXHRdO1xufTtcblxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHR0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZmlsdGVyKFxuXHRcdGl0ZW0gPT4gaXRlbSAhPT0gc3RhdGVOYW1lLFxuXHQpO1xufTtcblxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lLCBmb3JjZSA9IG51bGwgKSB7XG5cdGlmICggbnVsbCAhPT0gZm9yY2UgKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdGZvcmNlID8gdGhpcy5hZGQoIHN0YXRlTmFtZSApIDogdGhpcy5yZW1vdmUoIHN0YXRlTmFtZSApO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCB0aGlzLmN1cnJlbnQuaW5jbHVkZXMoIHN0YXRlTmFtZSApICkge1xuXHRcdHRoaXMucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcblx0fVxuXHRlbHNlIHtcblx0XHR0aGlzLmFkZCggc3RhdGVOYW1lICk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlU2V0OyIsImltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBSZWFjdGl2ZVZhciggdmFsdWUgPSBudWxsICkge1xuXHR0aGlzLmN1cnJlbnQgICAgPSB2YWx1ZTtcblx0dGhpcy5zaWduYWxzICAgID0gW107XG5cdHRoaXMuc2FuaXRpemVycyA9IFtdO1xuXHR0aGlzLmlzRGVidWcgICAgPSBmYWxzZTtcblx0dGhpcy5pc1NpbGVuY2UgID0gZmFsc2U7XG5cdHRoaXMuaXNNYWtlZCAgICA9IGZhbHNlO1xufVxuXG5SZWFjdGl2ZVZhci5wcm90b3R5cGUgPSB7XG5cdHdhdGNoT25jZSAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBjbGVhcldhdGNoZXIgPSB0aGlzLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRjbGVhcldhdGNoZXIoKTtcblx0XHRcdGNhbGxhYmxlKCk7XG5cdFx0fSApO1xuXHR9LFxuXHR3YXRjaCAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5zaWduYWxzLnNvbWUoICggeyBzaWduYWwgfSApID0+IHNpZ25hbCA9PT0gY2FsbGFibGUgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2lnbmFscy5wdXNoKCB7XG5cdFx0XHRzaWduYWw6IGNhbGxhYmxlLFxuXHRcdFx0dHJhY2U6IG5ldyBFcnJvcigpLnN0YWNrLFxuXHRcdH0gKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zaWduYWxzLmxlbmd0aCAtIDE7XG5cblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zaWduYWxzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0fSxcblx0c2FuaXRpemUgKCBjYWxsYWJsZSApIHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIC0xICE9PSB0aGlzLnNhbml0aXplcnMuaW5kZXhPZiggY2FsbGFibGUgKSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2FuaXRpemVycy5wdXNoKCBjYWxsYWJsZSApO1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNhbml0aXplcnMubGVuZ3RoIC0gMTtcblxuXHRcdHJldHVybiAoKSA9PiB0aGlzLnNhbml0aXplcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHR9LFxuXHRtYWtlICgpIHtcblx0XHRpZiAoIHRoaXMuaXNNYWtlZCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5pc01ha2VkICA9IHRydWU7XG5cdFx0bGV0IGN1cnJlbnQgICA9IHRoaXMuY3VycmVudDtcblx0XHRsZXQgcHJldlZhbHVlID0gbnVsbDtcblx0XHRjb25zdCBzZWxmICAgID0gdGhpcztcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgJ2N1cnJlbnQnLCB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0fSxcblx0XHRcdHNldCggbmV3VmFsICkge1xuXHRcdFx0XHRpZiAoIGN1cnJlbnQgPT09IG5ld1ZhbCApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJldlZhbHVlID0gY3VycmVudDtcblx0XHRcdFx0aWYgKCBzZWxmLmlzRGVidWcgKSB7XG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSwgbm8tZGVidWdnZXIgKi9cblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwKCAnUmVhY3RpdmVWYXIgaGFzIGNoYW5nZWQnICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICdjdXJyZW50OicsIGN1cnJlbnQgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ25ld1ZhbDonLCBuZXdWYWwgKTtcblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0XHRcdFx0ZGVidWdnZXI7XG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlLCBuby1kZWJ1Z2dlciAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN1cnJlbnQgPSBzZWxmLmFwcGx5U2FuaXRpemVycyggbmV3VmFsICk7XG5cblx0XHRcdFx0aWYgKCBzZWxmLmlzU2lsZW5jZSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5ub3RpZnkoIHByZXZWYWx1ZSApO1xuXHRcdFx0fSxcblx0XHR9ICk7XG5cdH0sXG5cdG5vdGlmeSAoIHByZXZWYWx1ZSA9IG51bGwgKSB7XG5cdFx0dGhpcy5zaWduYWxzLmZvckVhY2goXG5cdFx0XHQoIHsgc2lnbmFsIH0gKSA9PiBzaWduYWwuY2FsbCggdGhpcywgcHJldlZhbHVlICkgKTtcblx0fSxcblx0YXBwbHlTYW5pdGl6ZXJzICggdmFsdWUgKSB7XG5cdFx0Zm9yICggY29uc3Qgc2FuaXRpemVyIG9mIHRoaXMuc2FuaXRpemVycyApIHtcblx0XHRcdHZhbHVlID0gc2FuaXRpemVyLmNhbGwoIHRoaXMsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRzZXRJZkVtcHR5KCBuZXdWYWx1ZSApIHtcblx0XHRpZiAoICFpc0VtcHR5KCB0aGlzLmN1cnJlbnQgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmN1cnJlbnQgPSBuZXdWYWx1ZTtcblx0fSxcblx0ZGVidWcoKSB7XG5cdFx0dGhpcy5pc0RlYnVnID0gIXRoaXMuaXNEZWJ1Zztcblx0fSxcblx0c2lsZW5jZSgpIHtcblx0XHR0aGlzLmlzU2lsZW5jZSA9ICF0aGlzLmlzU2lsZW5jZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlVmFyOyIsImltcG9ydCBSZXBvcnRpbmdJbnRlcmZhY2UgZnJvbSAnLi9SZXBvcnRpbmdJbnRlcmZhY2UnO1xuaW1wb3J0IHsgYWxsUmVqZWN0ZWQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQnJvd3NlclJlcG9ydGluZygpIHtcblx0UmVwb3J0aW5nSW50ZXJmYWNlLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdHRoaXMucmVwb3J0UmF3ICAgPSBmdW5jdGlvbiAoKSB7XG5cdH07XG5cdHRoaXMucmVwb3J0Rmlyc3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xuXG5cdFx0bm9kZS5yZXBvcnRWYWxpZGl0eSgpO1xuXHR9O1xuXG5cdHRoaXMuc2V0UmVzdHJpY3Rpb25zICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHRjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zKCB0aGlzLCBub2RlICk7XG5cdH07XG5cdHRoaXMuY2xlYXJSZXBvcnQgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBicm93c2VyIGF1dG9tYXRpY2FsbHkgaGlkZSB0b29sdGlwIG1lc3NhZ2VzXG5cdH07XG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbGlkYXRlKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcblx0fTtcblxuXHR0aGlzLmdldEVycm9yc1JhdyA9IGFzeW5jIGZ1bmN0aW9uICggcHJvbWlzZXMgKSB7XG5cdFx0Y29uc3QgZXJyb3JzICAgPSBhd2FpdCBhbGxSZWplY3RlZCggcHJvbWlzZXMgKTtcblx0XHR0aGlzLnZhbHVlUHJldiA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcblxuXHRcdHJldHVybiBlcnJvcnM7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcblx0fTtcblxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQuaGFzQXV0b1Njcm9sbCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5nZXROb2RlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmlucHV0LmdldFJlcG9ydGluZ05vZGUoKTtcblx0fTtcbn1cblxuQnJvd3NlclJlcG9ydGluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEJyb3dzZXJSZXBvcnRpbmc7IiwiZnVuY3Rpb24gUmVwb3J0aW5nQ29udGV4dCggcm9vdCApIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0dGhpcy5yb290ID0gcm9vdDtcblxuXHR0aGlzLnJlcG9ydGVkRmlyc3QgPSBmYWxzZTtcblx0dGhpcy5zaWxlbmNlICAgICAgID0gdHJ1ZTtcblxufVxuXG5SZXBvcnRpbmdDb250ZXh0LnByb3RvdHlwZSA9IHtcblx0cmVzZXQoIHByb3BzID0ge30gKSB7XG5cdFx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gZmFsc2U7XG5cdFx0dGhpcy5zZXRTaWxlbmNlKCBwcm9wcz8uc2lsZW5jZSA/PyB0cnVlICk7XG5cdH0sXG5cdHJlcG9ydEZpcnN0KCkge1xuXHRcdHRoaXMucmVwb3J0ZWRGaXJzdCA9IHRydWU7XG5cdH0sXG5cdHNldFNpbGVuY2UoIHZhbHVlICkge1xuXHRcdHRoaXMuc2lsZW5jZSA9ICEhdmFsdWU7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRpbmdDb250ZXh0O1xuXG4iLCIvKipcbiAqIFZhbGlkYXRpb24gbG9naWM6IG9uIGNoYW5nZSBpbnB1dCB2YWx1ZSB3ZSBydW5cbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLnZhbGlkYXRlT25DaGFuZ2VcbiAqXG4gKiBJbiB0aGF0IGZ1bmN0aW9uIHdlIGNsZWFyIHN0b3JlZCBlcnJvcnNcbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLmVycm9yc1xuICogY2hlY2sgYWxsIHJlc3RyaWN0aW9ucyBhZ2FpbiBhbmQgc2F2ZSBlcnJvcnNcbiAqIHRvIHRoZSBzYW1lIHByb3BlcnR5LlxuICpcbiAqIFdoZW4gdXNlciB0cmllcyB0byBzdWJtaXQgZm9ybSB3ZSBydW5cbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLnZhbGlkYXRlXG4gKiBJZiB0aGVyZSB3YXMgc3RvcmVkIGVycm9ycyAtIGl0IHdpbGwgcmV0dXJuIHRoZW0uXG4gKiBPdGhlcndpc2Ugd2UgY2hlY2sgYWxsIGFuZCBzYXZlIGVycm9ycy5cbiAqXG4gKiBJbiB0aGUgY2FzZSB3aGVuIHdlIHJ1biB0aGUgdmFsaWRhdGlvbiB0aHJvdWdoIHRoZVxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UuaXNWYWxpZFxuICogV2UgXCJibG9jayB0aGUgZm9ybVwiIHRocm91Z2ggdGhlIFwidGVzdFwiIHByb3BlcnR5LlxuICogVGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgYW5kIHdoZW4gaXQgY2hhbmdlcyxcbiAqIHRoZSBzdGF0ZSBvZiB0aGUgYnV0dG9uIGZvciBzdWJtaXR0aW5nIHRoZSBmb3JtXG4gKiBhbmQgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBiZXR3ZWVuIHBhZ2VzIGNoYW5nZXMuXG4gKi9cbmltcG9ydCBSZXN0cmljdGlvbkVycm9yIGZyb20gJy4vUmVzdHJpY3Rpb25FcnJvcic7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5mdW5jdGlvbiBSZXBvcnRpbmdJbnRlcmZhY2UoKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5pbnB1dCA9IG51bGw7XG5cdHRoaXMuaXNSZXF1aXJlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogQHR5cGUge0FycmF5IHwgbnVsbH1cblx0ICovXG5cdHRoaXMuZXJyb3JzID0gbnVsbDtcblx0dGhpcy5yZXN0cmljdGlvbnMgPSBbXTtcblxuXHR0aGlzLnZhbHVlUHJldiAgICAgPSBudWxsO1xuXHR0aGlzLnZhbGlkaXR5U3RhdGUgPSBudWxsO1xuXHR0aGlzLnByb21pc2VzQ291bnQgPSAwO1xufVxuXG5SZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge1Jlc3RyaWN0aW9uW119XG5cdCAqL1xuXHRyZXN0cmljdGlvbnM6IFtdLFxuXHR2YWx1ZVByZXY6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR2YWxpZGl0eVN0YXRlOiBudWxsLFxuXHRwcm9taXNlc0NvdW50OiAwLFxuXHQvKipcblx0ICogUnVucyBvbiBjaGFuZ2luZyB2YWx1ZSBpbiB0aGUgZmllbGRcblx0ICogQHNlZSBJbnB1dERhdGEub25DaGFuZ2Vcblx0ICovXG5cdHZhbGlkYXRlT25DaGFuZ2UgKCkge1xuXHR9LFxuXHR2YWxpZGF0ZU9uQmx1ciAoKSB7XG5cdH0sXG5cdC8qKlxuXHQgKiBSdW5zIG9uIHRyeWluZyB0byBzdWJtaXQgZm9ybVxuXHQgKiBAc2VlIE9ic2VydmFibGUuaW5wdXRzQXJlVmFsaWRcblx0ICpcblx0ICogUnVucyBvbiBjaGFuZ2luZyB2YWx1ZSwgaWYgdGhpcyBmaWVsZCBpbnNpZGUgcGFnZVxuXHQgKiBAc2VlIElucHV0RGF0YS5zZXRQYWdlXG5cdCAqIEBzZWUgUGFnZVN0YXRlLnVwZGF0ZVN0YXRlXG5cdCAqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG5cdCAqL1xuXHRhc3luYyB2YWxpZGF0ZSAoIHNpZ25hbCA9IG51bGwgKSB7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IGF3YWl0IHRoaXMuZ2V0RXJyb3JzKCBzaWduYWwgKTtcblxuXHRcdHRoaXMudmFsaWRpdHlTdGF0ZS5jdXJyZW50ID0gIUJvb2xlYW4oIGVycm9ycy5sZW5ndGggKTtcblxuXHRcdGlmICggIWVycm9ycy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLmNsZWFyUmVwb3J0KCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhdGhpcy5pbnB1dC5yb290LmdldENvbnRleHQoKS5zaWxlbmNlICYmIHRoaXMucmVwb3J0KCBlcnJvcnMgKTtcblxuXHRcdHRocm93IG5ldyBSZXN0cmljdGlvbkVycm9yKCBlcnJvcnNbIDAgXS5uYW1lICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gIHByb21pc2VzIHtGdW5jdGlvbltdfVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5IHwgbnVsbD59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0YXN5bmMgZ2V0RXJyb3JzUmF3ICggcHJvbWlzZXMgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0RXJyb3IgbXVzdCByZXR1cm4gYSBQcm9taXNlJyApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5IHwgKltdIHwgbnVsbD59XG5cdCAqL1xuXHRhc3luYyBnZXRFcnJvcnMgKCBzaWduYWwgPSBudWxsICkge1xuXHRcdGlmIChcblx0XHRcdHRoaXMuaW5wdXQubG9hZGluZy5jdXJyZW50IHx8XG5cdFx0XHR0aGlzLmlucHV0Py5jYWxsYWJsZT8ubG9jaz8uY3VycmVudCB8fFxuXHRcdFx0IXRoaXMuaW5wdXQuaXNWaXNpYmxlKClcblx0XHQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuZ2V0UHJvbWlzZXMoIHNpZ25hbCApO1xuXG5cdFx0aWYgKFxuXHRcdFx0IXRoaXMuaGFzQ2hhbmdlZFZhbHVlKCkgJiZcblx0XHRcdHRoaXMucHJvbWlzZXNDb3VudCA9PT0gcHJvbWlzZXMubGVuZ3RoICYmXG5cdFx0XHQhdGhpcy5pbnB1dC5zdG9wVmFsaWRhdGlvbiAmJlxuXHRcdFx0Ly8gUmVmcmVzaCBhbGwgc2VsZWN0cyBiZWNhdXNlIHRoZWlyIHN0YXRlIG1pZ2h0IGhhdmUgY2hhbmdlZFxuXHRcdFx0dGhpcy5pbnB1dC5pbnB1dFR5cGUgIT09ICdoci1zZWxlY3QtbGV2ZWwnXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvcnMgPz8gW107XG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9taXNlc0NvdW50ID0gcHJvbWlzZXMubGVuZ3RoO1xuXHRcdHRoaXMuZXJyb3JzICAgICAgICA9IFtdO1xuXG5cdFx0aWYgKCAhcHJvbWlzZXMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JzO1xuXHRcdH1cblxuXHRcdHRoaXMuZXJyb3JzID0gYXdhaXQgdGhpcy5nZXRFcnJvcnNSYXcoIHByb21pc2VzLCBzaWduYWwgKTtcblx0XHRyZXR1cm4gdGhpcy5lcnJvcnM7XG5cdH0sXG5cdHJlcG9ydCAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cblx0XHRpZiAoIHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnJlcG9ydGVkRmlyc3QgKSB7XG5cdFx0XHR0aGlzLnJlcG9ydFJhdyggdmFsaWRhdGlvbkVycm9ycyApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkucmVwb3J0Rmlyc3QoKTtcblxuXHRcdHRoaXMucmVwb3J0Rmlyc3QoIHZhbGlkYXRpb25FcnJvcnMgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSB2YWxpZGF0aW9uRXJyb3JzIHtSZXN0cmljdGlvbltdfVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdHJlcG9ydFJhdyAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAncmVwb3J0IGlzIGVtcHR5JyApO1xuXHR9LFxuXHRyZXBvcnRGaXJzdCAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0dGhpcy5yZXBvcnQoIHZhbGlkYXRpb25FcnJvcnMgKTtcblx0fSxcblx0Y2xlYXJSZXBvcnQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ2NsZWFyUmVwb3J0IGlzIGVtcHR5JyApO1xuXHR9LFxuXHRnZXRQcm9taXNlcyAoIHNpZ25hbCA9IG51bGwpIHtcblx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgdGhpcy5yZXN0cmljdGlvbnMgKSB7XG5cdFx0XHRpZiAoICF0aGlzLmNhblByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKTtcblxuXHRcdFx0cHJvbWlzZXMucHVzaCggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRcdHJlc3RyaWN0aW9uLnZhbGlkYXRlUHJvbWlzZSggc2lnbmFsICkuXG5cdFx0XHRcdFx0dGhlbiggKCkgPT4gcmVzb2x2ZSggcmVzdHJpY3Rpb24gKSApLlxuXHRcdFx0XHRcdGNhdGNoKCBlcnJvciA9PiByZWplY3QoIFsgcmVzdHJpY3Rpb24sIGVycm9yIF0gKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGNhblByb2Nlc3NSZXN0cmljdGlvbiAoIHJlc3RyaWN0aW9uICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiAoIHJlc3RyaWN0aW9uICkge1xuXHR9LFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1yZXR1cm5zLWNoZWNrXG5cdC8qKlxuXHQgKiBAcGFyYW0gIG5vZGUgIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0aXNTdXBwb3J0ZWQgKCBub2RlLCBpbnB1dCApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdpc1N1cHBvcnRlZCBpcyBlbXB0eScgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKi9cblx0c2V0SW5wdXQgKCBpbnB1dCApIHtcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUubWFrZSgpO1xuXG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0O1xuXHRcdHRoaXMuc2V0UmVzdHJpY3Rpb25zKCk7XG5cdFx0dGhpcy5maWx0ZXJSZXN0cmljdGlvbnMoKTtcblx0fSxcblx0c2V0UmVzdHJpY3Rpb25zICgpIHtcblx0fSxcblx0LyoqXG5cdCAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRnZXROb2RlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5ub2Rlc1sgMCBdO1xuXHR9LFxuXG5cdGhhc0NoYW5nZWRWYWx1ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVQcmV2ICE9PSB0aGlzLmlucHV0LmdldFZhbHVlKCk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxuXHQgKi9cblx0Y2hlY2tWYWxpZGl0eSAoKSB7XG5cdFx0Y29uc3QgaXNTaWxlbmNlID0gdGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2lsZW5jZTtcblxuXHRcdGlmICggbnVsbCA9PT0gdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzU2lsZW5jZSApIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhaXNTaWxlbmNlICYmIHRoaXMucmVwb3J0KCB0aGlzLmVycm9ycyB8fCBbXSApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc0F1dG9TY3JvbGwgKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0LyoqXG5cdCAqIFdpdGggdGhlIGhlbHAgb2YgZmlsdGVycyB0aGF0IGFkZCBuZXcgcmVzdHJpY3Rpb25zLFxuXHQgKiB5b3UgY2FuIG92ZXJ3cml0ZSBhIHBhcnRpY3VsYXIgcmVzdHJpY3Rpb25cblx0ICogaWYgdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIGRlZmluZWQgaW4gaXRcblx0ICovXG5cdGZpbHRlclJlc3RyaWN0aW9ucyAoKSB7XG5cdFx0Y29uc3QgbWFwID0ge307XG5cblx0XHRmb3IgKCBsZXQgWyBpbmRleCwgcmVzdHJpY3Rpb24gXSBvZiBPYmplY3QuZW50cmllcyhcblx0XHRcdHRoaXMucmVzdHJpY3Rpb25zICkgKSB7XG5cdFx0XHRpbmRleCA9IHJlc3RyaWN0aW9uLmdldFR5cGUoKSA/IHJlc3RyaWN0aW9uLmdldFR5cGUoKSA6IGluZGV4O1xuXG5cdFx0XHRtYXBbIGluZGV4IF0gPSByZXN0cmljdGlvbjtcblx0XHR9XG5cblx0XHR0aGlzLnJlc3RyaWN0aW9ucyA9IE9iamVjdC52YWx1ZXMoIG1hcCApO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0aW5nSW50ZXJmYWNlOyIsImZ1bmN0aW9uIFJlc3RyaWN0aW9uRXJyb3IoIG1lc3NhZ2UgKSB7XG5cdEVycm9yLmNhbGwoIHRoaXMsIG1lc3NhZ2UgKTtcblxuXHRpZiAoIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlICkge1xuXHRcdEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKCB0aGlzLCBSZXN0cmljdGlvbkVycm9yICk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5zdGFjayA9IChcblx0XHRcdG5ldyBFcnJvcigpXG5cdFx0KS5zdGFjaztcblx0fVxufVxuXG5SZXN0cmljdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEVycm9yLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXN0cmljdGlvbkVycm9yOyIsIi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5pbXBvcnQgQnJvd3NlclJlcG9ydGluZyBmcm9tICcuL0Jyb3dzZXJSZXBvcnRpbmcnO1xuaW1wb3J0IHsgYWxsUmVqZWN0ZWQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCBOYXRpdmVSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9OYXRpdmVSZXN0cmljdGlvbic7XG5pbXBvcnQgUmVxdWlyZWRSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZXF1aXJlZFJlc3RyaWN0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0UmVwb3J0VHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIucmVwb3J0aW5nJyxcblx0W1xuXHRcdEJyb3dzZXJSZXBvcnRpbmcsXG5cdF0sXG4pO1xuXG5sZXQgcmVwb3J0VHlwZXMgPSBbXTtcblxuY29uc3QgZ2V0RGVmYXVsdFJlc3RyaWN0aW9ucyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXG5cdFtcblx0XHROYXRpdmVSZXN0cmljdGlvbixcblx0XHRSZXF1aXJlZFJlc3RyaWN0aW9uLFxuXHRdLFxuKTtcblxubGV0IGRlZmF1bHRSZXN0cmljdGlvbnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIHJlcG9ydGluZyB7QnJvd3NlclJlcG9ydGluZ31cbiAqIEBwYXJhbSAgbm9kZVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyggcmVwb3J0aW5nLCBub2RlICkge1xuXHRpZiAoICFkZWZhdWx0UmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcblx0XHRkZWZhdWx0UmVzdHJpY3Rpb25zID0gZ2V0RGVmYXVsdFJlc3RyaWN0aW9ucygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgZGVmYXVsdFJlc3RyaWN0aW9ucyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlc3RyaWN0aW9uKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBub2RlLCByZXBvcnRpbmcgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJlcG9ydGluZy5yZXN0cmljdGlvbnMucHVzaCggY3VycmVudCApO1xuXHR9XG5cblx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5mb3JFYWNoKCBpdGVtID0+IGl0ZW0uc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKSApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cbiAqIEByZXR1cm4ge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlcG9ydCggaW5wdXQgKSB7XG5cdGlmICggIXJlcG9ydFR5cGVzLmxlbmd0aCApIHtcblx0XHRyZXBvcnRUeXBlcyA9IGdldFJlcG9ydFR5cGVzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCByZXBvcnRUeXBlIG9mIHJlcG9ydFR5cGVzICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVwb3J0VHlwZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggaW5wdXQubm9kZXNbIDAgXSwgaW5wdXQgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjdXJyZW50LnNldElucHV0KCBpbnB1dCApO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoICdTb21ldGhpbmcgd2VudCB3cm9uZycgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIGlucHV0cyAge0lucHV0RGF0YVtdfVxuICogQHBhcmFtICBzaWxlbmNlIHtCb29sZWFufVxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9uW119XG4gKi9cbmZ1bmN0aW9uIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcblx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cblx0aW5wdXRzPy5bIDAgXT8uZ2V0Q29udGV4dCgpPy5yZXNldCggeyBzaWxlbmNlIH0gKTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0aWYgKCAhKFxuXHRcdFx0aW5wdXQgaW5zdGFuY2VvZiBJbnB1dERhdGFcblx0XHQpICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnSW5wdXQgaXMgbm90IGluc3RhbmNlIG9mIElucHV0RGF0YScgKTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tzLnB1c2goXG5cdFx0XHQoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdFx0aW5wdXQucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSgpLlxuXHRcdFx0XHRcdHRoZW4oIHJlc29sdmUgKS5cblx0XHRcdFx0XHRjYXRjaCggcmVqZWN0ICk7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gY2FsbGJhY2tzO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gIHNpbGVuY2Uge0Jvb2xlYW59XG4gKiBAcmV0dXJuIHtQcm9taXNlPHVua25vd25bXT59XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRzKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcblx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgKS5tYXAoXG5cdFx0XHRjdXJyZW50ID0+IG5ldyBQcm9taXNlKCBjdXJyZW50ICksXG5cdFx0KSxcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gc2lsZW5jZSB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dHNBbGwoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xuXHRyZXR1cm4gYWxsUmVqZWN0ZWQoIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgKSApO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVSZXBvcnQsXG5cdHZhbGlkYXRlSW5wdXRzLFxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcblx0Y3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyxcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXG59OyIsImltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL1Jlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gTmF0aXZlUmVzdHJpY3Rpb24oKSB7XG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAhIW5vZGUuY2hlY2tWYWxpZGl0eTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgbm9kZXMgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0O1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBub2RlcyApIHtcblx0XHRcdGlmICggbm9kZS5jaGVja1ZhbGlkaXR5KCkgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcbn1cblxuTmF0aXZlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZVJlc3RyaWN0aW9uOyIsImltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL1Jlc3RyaWN0aW9uJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBSZXF1aXJlZFJlc3RyaWN0aW9uKCkge1xuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy50eXBlID0gJ3JlcXVpcmVkJztcbn1cblxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0cmV0dXJuIHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkO1xufTtcblxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWU7XG5cblx0cmV0dXJuICFpc0VtcHR5KCBjdXJyZW50ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1aXJlZFJlc3RyaWN0aW9uOyIsImZ1bmN0aW9uIFJlc3RyaWN0aW9uKCkge1xuXHQvKipcblx0ICogQHR5cGUge1JlcG9ydGluZ0ludGVyZmFjZX1cblx0ICovXG5cdHRoaXMucmVwb3J0aW5nID0gbnVsbDtcblx0LyoqXG5cdCAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBwcm9wZXJ0eVxuXHQgKiBpZiB5b3Ugd2FudCB0byBtYWtlIHRoaXMgUmVzdHJpY3Rpb24gb3ZlcnJpZGFibGVcblx0ICpcblx0ICogQHNpbmNlIDMuMS4wXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHR0aGlzLnR5cGUgPSAnJztcbn1cblxuUmVzdHJpY3Rpb24ucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHBhcmFtIG5vZGUgICAgICB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cblx0ICogQHBhcmFtIHJlcG9ydGluZyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMS4wXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdldFR5cGUgKCkge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gcmVwb3J0aW5nIHtSZXBvcnRpbmdJbnRlcmZhY2V9XG5cdCAqL1xuXHRzZXRSZXBvcnRpbmcgKCByZXBvcnRpbmcgKSB7XG5cdFx0dGhpcy5yZXBvcnRpbmcgPSByZXBvcnRpbmc7XG5cdH0sXG5cdGdldFZhbHVlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWUuY3VycmVudDtcblx0fSxcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuXHQvKipcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHZhbGlkYXRlICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICd2YWxpZGF0ZSBpcyB3cm9uZycgKTtcblx0fSxcblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Kj59XG5cdCAqL1xuXHRhc3luYyB2YWxpZGF0ZVByb21pc2UgKCkge1xuXHRcdGxldCB2YWxpZGF0aW9uUmVzdWx0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhbGlkYXRpb25SZXN1bHQgPSBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoIGVycm9yPy5tZXNzYWdlID8/IGVycm9yICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbGlkYXRpb25SZXN1bHRcblx0XHQgICAgICAgPyBQcm9taXNlLnJlc29sdmUoKVxuXHRcdCAgICAgICA6IFByb21pc2UucmVqZWN0KCAndmFsaWRhdGUgaXMgd3JvbmcnICk7XG5cdH0sXG5cdG9uUmVhZHkoKSB7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN0cmljdGlvbjsiLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5jb25zdCB7IHN0cmljdF9tb2RlID0gZmFsc2UgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuY29uc3QgU1RSSUNUX01PREUgPSBCb29sZWFuKCBzdHJpY3RfbW9kZSApO1xuXG5mdW5jdGlvbiBCYXNlU2lnbmFsKCkge1xuXHR0aGlzLmlucHV0ID0gbnVsbDtcblx0dGhpcy5sb2NrICA9IG5ldyBSZWFjdGl2ZVZhcigpO1xuXHR0aGlzLmxvY2subWFrZSgpO1xuXG5cdHRoaXMudHJpZ2dlcmpRdWVyeSA9ICFTVFJJQ1RfTU9ERTtcbn1cblxuQmFzZVNpZ25hbC5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0aW5wdXQ6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHRsb2NrOiBudWxsLFxuXHQvKipcblx0ICogQHBhcmFtICBub2RlICAgICAge0hUTUxFbGVtZW50fVxuXHQgKiBAcGFyYW0gIGlucHV0RGF0YSB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkICggbm9kZSwgaW5wdXREYXRhICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0c2V0SW5wdXQgKCBpbnB1dCApIHtcblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XG5cdH0sXG5cdHJ1biAoIHByZXZWYWx1ZSApIHtcblx0XHRpZiAoICF0aGlzLmxvY2suY3VycmVudCApIHtcblx0XHRcdHRoaXMucnVuU2lnbmFsKCBwcmV2VmFsdWUgKTtcblx0XHRcdHRoaXMudW5sb2NrVHJpZ2dlcigpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5sb2NrLnNpZ25hbHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5sb2NrLndhdGNoT25jZSggKCkgPT4gdGhpcy5ydW5TaWduYWwoIHByZXZWYWx1ZSApICk7XG5cdFx0fVxuXHR9LFxuXHR0cmlnZ2VySlF1ZXJ5KCBub2RlICkge1xuXHRcdGlmICggIXRoaXMudHJpZ2dlcmpRdWVyeSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0alF1ZXJ5KCBub2RlICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBwcmV2VmFsdWVcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdHJ1blNpZ25hbCAoIHByZXZWYWx1ZSApIHtcblx0XHQvLyB5b3VyIGNvZGVcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKi9cblx0bG9ja1RyaWdnZXIgKCkge1xuXHRcdHRoaXMudHJpZ2dlcmpRdWVyeSA9IGZhbHNlO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqL1xuXHR1bmxvY2tUcmlnZ2VyICgpIHtcblx0XHRpZiAoIFNUUklDVF9NT0RFICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXJqUXVlcnkgPSB0cnVlO1xuXHR9LFxufTtcblxuZXhwb3J0IHsgU1RSSUNUX01PREUgfTtcbmV4cG9ydCBkZWZhdWx0IEJhc2VTaWduYWw7IiwiaW1wb3J0IEJhc2VTaWduYWwgZnJvbSAnLi9CYXNlU2lnbmFsJztcbmltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG5mdW5jdGlvbiBTaWduYWxIaWRkZW5BcnJheSgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG59XG5cblNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cblNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXREYXRhICkge1xuXHRyZXR1cm4gaXNIaWRkZW4oIG5vZGUgKSAmJiBpbnB1dERhdGEuaXNBcnJheSgpO1xufTtcblNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZS5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmlucHV0LnZhbHVlO1xuXG5cdGlmICggIWN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMuaW5wdXQubm9kZXMgKSB7XG5cdFx0XHRub2RlLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXQubm9kZXMuc3BsaWNlKCAwLCB0aGlzLmlucHV0Lm5vZGVzLmxlbmd0aCApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNhdmVOb2RlcyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IHZhbHVlIG9mIGN1cnJlbnQgKSB7XG5cdFx0Y29uc3QgaGFzTm9kZVdpdGhTYW1lVmFsdWUgPSB0aGlzLmlucHV0Lm5vZGVzLnNvbWUoXG5cdFx0XHQoIG5vZGUsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRpZiAoIG5vZGUudmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzYXZlTm9kZXMucHVzaCggaW5kZXggKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ICk7XG5cblx0XHRpZiAoIGhhc05vZGVXaXRoU2FtZVZhbHVlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcblx0XHRuZXdFbGVtZW50LnR5cGUgID0gJ2hpZGRlbic7XG5cdFx0bmV3RWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuXHRcdG5ld0VsZW1lbnQubmFtZSAgPSB0aGlzLmlucHV0LnJhd05hbWU7XG5cblx0XHR0aGlzLmlucHV0Lm5vZGVzLnB1c2goIG5ld0VsZW1lbnQgKTtcblx0XHRzYXZlTm9kZXMucHVzaCggdGhpcy5pbnB1dC5ub2Rlcy5sZW5ndGggLSAxICk7XG5cblx0XHR0aGlzLmlucHV0LmNvbW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRuZXdFbGVtZW50LFxuXHRcdFx0dGhpcy5pbnB1dC5jb21tZW50Lm5leHRFbGVtZW50U2libGluZyxcblx0XHQpO1xuXHR9XG5cblx0dGhpcy5pbnB1dC5ub2RlcyA9IHRoaXMuaW5wdXQubm9kZXMuZmlsdGVyKCAoIG5vZGUsIGluZGV4ICkgPT4ge1xuXHRcdGlmICggc2F2ZU5vZGVzLmluY2x1ZGVzKCBpbmRleCApICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxIaWRkZW5BcnJheTsiLCJpbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL0Jhc2VTaWduYWwnO1xuaW1wb3J0IHsgaXNSYW5nZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JhbmdlRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICovXG5mdW5jdGlvbiBTaWduYWxSYW5nZSgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSYW5nZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2Rlcztcblx0XHRub2RlLnZhbHVlICAgICA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdHRoaXMuaW5wdXQubnVtYmVyTm9kZS50ZXh0Q29udGVudCA9IG5vZGUudmFsdWU7XG5cblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcblx0fTtcbn1cblxuU2lnbmFsUmFuZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmFuZ2U7IiwiaW1wb3J0IFNpZ25hbEhpZGRlbkFycmF5IGZyb20gJy4vU2lnbmFsSGlkZGVuQXJyYXknO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVuZGVyU3RhdGVEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gU2lnbmFsUmVuZGVyU3RhdGUoKSB7XG5cdFNpZ25hbEhpZGRlbkFycmF5LmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXNbXScgPT09IG5vZGUubmFtZTtcblx0fTtcblxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICggcHJldlZhbHVlICkge1xuXHRcdFNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZS5ydW5TaWduYWwuY2FsbCggdGhpcywgcHJldlZhbHVlICk7XG5cblx0XHRjb25zdCB1cmwgICAgID0gbmV3IFVSTCggd2luZG93LmxvY2F0aW9uICk7XG5cdFx0Y29uc3QgZm9ybUlkICA9IHRoaXMuaW5wdXQuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCB8fCBbXTtcblx0XHRjb25zdCBwYXJhbSAgID0gYGpmYlskeyBmb3JtSWQgfV1bc3RhdGVdYDtcblx0XHRjb25zdCBzdGF0ZXMgID0gW107XG5cblx0XHRmb3IgKCBjb25zdCBzdGF0ZVNsdWcgb2YgY3VycmVudCApIHtcblx0XHRcdGlmICggIXRoaXMuaW5wdXQuaXNDdXN0b20oIHN0YXRlU2x1ZyApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGVzLnB1c2goIHN0YXRlU2x1ZyApO1xuXHRcdH1cblxuXHRcdGlmICggIXN0YXRlcy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoICF1cmwuc2VhcmNoUGFyYW1zLmhhcyggcGFyYW0gKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSggcGFyYW0gKTtcblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgge30sICcnLCB1cmwudG9TdHJpbmcoKSApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyYW1WYWx1ZSA9IHN0YXRlcy5qb2luKCAnLCcgKTtcblx0XHRpZiAoIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCBwYXJhbSApID09PSBwYXJhbVZhbHVlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHVybC5zZWFyY2hQYXJhbXMuc2V0KCBwYXJhbSwgcGFyYW1WYWx1ZSApO1xuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgge30sICcnLCB1cmwudG9TdHJpbmcoKSApO1xuXHR9O1xufVxuXG5TaWduYWxSZW5kZXJTdGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVuZGVyU3RhdGU7IiwiaW1wb3J0IFNpZ25hbEhpZGRlbkFycmF5IGZyb20gJy4vU2lnbmFsSGlkZGVuQXJyYXknO1xuaW1wb3J0IFNpZ25hbFJhbmdlIGZyb20gJy4vU2lnbmFsUmFuZ2UnO1xuaW1wb3J0IFNpZ25hbFJlbmRlclN0YXRlIGZyb20gJy4vU2lnbmFsUmVuZGVyU3RhdGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRTaWduYWxUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5zaWduYWxzJyxcblx0W1xuXHRcdFNpZ25hbFJhbmdlLFxuXHRcdFNpZ25hbFJlbmRlclN0YXRlLFxuXHRcdFNpZ25hbEhpZGRlbkFycmF5LFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7KEJhc2VTaWduYWwpW119XG4gKi9cbmxldCBzaWduYWxUeXBlcyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSAge0hUTUxFbGVtZW50fVxuICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuICogQHJldHVybiB7QmFzZVNpZ25hbH1cbiAqL1xuZnVuY3Rpb24gZ2V0U2lnbmFsKCBub2RlLCBpbnB1dCApIHtcblx0aWYgKCAhc2lnbmFsVHlwZXMubGVuZ3RoICkge1xuXHRcdHNpZ25hbFR5cGVzID0gZ2V0U2lnbmFsVHlwZXMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHNpZ25hbFR5cGUgb2Ygc2lnbmFsVHlwZXMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBzaWduYWxUeXBlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBub2RlLCBpbnB1dCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IHsgZ2V0U2lnbmFsIH07IiwiaW1wb3J0IEJhc2VTdWJtaXQgZnJvbSAnLi9CYXNlU3VibWl0JztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5pbXBvcnQgeyBpc1N1Y2Nlc3NTdGF0dXMgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBBamF4U3VibWl0KCBmb3JtICkge1xuXHRCYXNlU3VibWl0LmNhbGwoIHRoaXMsIGZvcm0gKTtcblxuXHR0aGlzLnN0YXR1cyA9IG5ldyBSZWFjdGl2ZVZhcigpO1xuXHR0aGlzLnN0YXR1cy5tYWtlKCk7XG5cblx0dGhpcy5zdWJtaXQgICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0ICRmb3JtICAgICAgICAgICAgPSBqUXVlcnkoIHRoaXMuZm9ybS5vYnNlcnZhYmxlLnJvb3ROb2RlICk7XG5cdFx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cblx0XHRQcm9taXNlLmFsbChcblx0XHRcdGFwcGx5RmlsdGVycyhcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQuYWpheC5wcm9taXNlcycsXG5cdFx0XHRcdHRoaXMuZ2V0UHJvbWlzZXMoKSxcblx0XHRcdFx0JGZvcm0sXG5cdFx0XHQpLFxuXHRcdCkudGhlbihcblx0XHRcdGNhbGxiYWNrcyA9PiB0aGlzLnJ1blN1Ym1pdCggY2FsbGJhY2tzICksXG5cdFx0KS5jYXRjaChcblx0XHRcdCgpID0+IHRoaXMuZm9ybS50b2dnbGUoKSxcblx0XHQpO1xuXHR9O1xuXHR0aGlzLnJ1blN1Ym1pdCAgICAgPSBmdW5jdGlvbiAoIGNhbGxiYWNrcyApIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCByb290Tm9kZSApO1xuXHRcdGZvcm1EYXRhLmFwcGVuZChcblx0XHRcdCdfamV0X2VuZ2luZV9ib29raW5nX2Zvcm1faWQnLFxuXHRcdFx0dGhpcy5mb3JtLmdldEZvcm1JZCgpLFxuXHRcdCk7XG5cblx0XHQvLyBkaXNhYmxlIHdhdGNoZXJzXG5cdFx0dGhpcy5zdGF0dXMuc2lsZW5jZSgpO1xuXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IG51bGw7XG5cblx0XHQvLyBlbmFibGUgd2F0Y2hlcnNcblx0XHR0aGlzLnN0YXR1cy5zaWxlbmNlKCk7XG5cblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiBKZXRGb3JtQnVpbGRlclNldHRpbmdzLmFqYXh1cmwsXG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0ZGF0YTogZm9ybURhdGEsXG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0XHRjb250ZW50VHlwZTogZmFsc2UsXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0fSApLmRvbmUoXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHRoaXMub25TdWNjZXNzKCByZXNwb25zZSApO1xuXHRcdFx0XHRjb25zdCAkZm9ybSA9IGpRdWVyeSggcm9vdE5vZGUgKTtcblxuXHRcdFx0XHRjYWxsYmFja3MuZm9yRWFjaCggY2IgPT4ge1xuXHRcdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNiICkge1xuXHRcdFx0XHRcdFx0Y2IuY2FsbCggJGZvcm0sIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdCkuZmFpbChcblx0XHRcdHRoaXMub25GYWlsLmJpbmQoIHRoaXMgKSxcblx0XHQpO1xuXHR9O1xuXHR0aGlzLm9uU3VjY2VzcyAgICAgPSBmdW5jdGlvbiAoIHJlc3BvbnNlICkge1xuXHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblxuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdFx0dGhpcy5sYXN0UmVzcG9uc2UgPSByZXNwb25zZTtcblx0XHRjb25zdCAkZm9ybSAgICAgICA9IGpRdWVyeSggcm9vdE5vZGUgKTtcblxuXHRcdHN3aXRjaCAoIHJlc3BvbnNlLnN0YXR1cyApIHtcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci9hamF4L29uLXN1Y2Nlc3MnLFxuXHRcdFx0XHRcdFsgcmVzcG9uc2UsICRmb3JtIF0sXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWpheC9wcm9jZXNzaW5nLWVycm9yJyxcblx0XHRcdFx0XHRbIHJlc3BvbnNlLCAkZm9ybSBdXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW4gc3RhdHVzIHdhdGNoZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IHJlc3BvbnNlLnN0YXR1cztcblxuXHRcdGlmICggcmVzcG9uc2UucmVkaXJlY3QgKSB7XG5cdFx0XHRpZiAoIHJlc3BvbnNlLm9wZW5faW5fbmV3X3RhYiApIHtcblx0XHRcdFx0d2luZG93Lm9wZW4oIHJlc3BvbnNlLnJlZGlyZWN0LCAnX2JsYW5rJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UucmVkaXJlY3Q7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCByZXNwb25zZS5yZWxvYWQgKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnNlcnRNZXNzYWdlKCByZXNwb25zZS5tZXNzYWdlICk7XG5cdH07XG5cdHRoaXMub25GYWlsICAgICAgICA9IGZ1bmN0aW9uICgganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xuXHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gZmFsc2U7XG5cblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblx0XHRjb25zdCAkZm9ybSAgICAgICAgPSBqUXVlcnkoIHJvb3ROb2RlICk7XG5cblx0XHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2FqYXgvb24tZmFpbCcsXG5cdFx0XHRbIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biwgJGZvcm0gXVxuXHRcdCk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUuZXJyb3IoIGpxWEhSLnJlc3BvbnNlVGV4dCwgZXJyb3JUaHJvd24gKTtcblx0fTtcblx0dGhpcy5pbnNlcnRNZXNzYWdlID0gZnVuY3Rpb24gKCBtZXNzYWdlICkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKCAnamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyApO1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZTtcblxuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKCBub2RlICk7XG5cdH07XG59XG5cbkFqYXhTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcbi8qKlxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxuICovXG5BamF4U3VibWl0LnByb3RvdHlwZS5zdGF0dXMgPSBudWxsO1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaFJlc2V0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cblx0aWYgKCAhcm9vdE5vZGUuZGF0YXNldD8uY2xlYXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy53YXRjaFN1Y2Nlc3MoIGNhbGxhYmxlICk7XG59O1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaFN1Y2Nlc3MgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcblxuXHRzdGF0dXMud2F0Y2goICgpID0+IHtcblx0XHRpZiAoIGlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzLmN1cnJlbnQgKSApIHtcblx0XHRcdGNhbGxhYmxlKCk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaEZhaWwgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcblxuXHRzdGF0dXMud2F0Y2goICgpID0+IHtcblx0XHRpZiAoICFpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cy5jdXJyZW50ICkgKSB7XG5cdFx0XHRjYWxsYWJsZSgpO1xuXHRcdH1cblx0fSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWpheFN1Ym1pdDsiLCIvKipcbiAqIEBwYXJhbSBmb3JtIHtGb3JtU3VibWl0fVxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIEJhc2VTdWJtaXQoIGZvcm0gKSB7XG5cdHRoaXMuZm9ybSAgICAgICAgID0gZm9ybTtcblx0dGhpcy5sYXN0UmVzcG9uc2UgPSB7fTtcblx0dGhpcy5wcm9taXNlcyAgICAgPSBbXTtcbn1cblxuQmFzZVN1Ym1pdC5wcm90b3R5cGUuc3VibWl0ICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJlcGxhY2UgdGhpcyBjYWxsYmFjaycgKTtcbn07XG5CYXNlU3VibWl0LnByb3RvdHlwZS5nZXRQcm9taXNlcyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucHJvbWlzZXMubWFwKCAoIHsgY2FsbGFibGUgfSApID0+IG5ldyBQcm9taXNlKCBjYWxsYWJsZSApICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gY2FsbGFibGUgICAgIHtGdW5jdGlvbn1cbiAqIEBwYXJhbSBpbnB1dENvbnRleHQge0lucHV0RGF0YXxCb29sZWFufVxuICovXG5CYXNlU3VibWl0LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCBjYWxsYWJsZSwgaW5wdXRDb250ZXh0ID0gZmFsc2UgKSB7XG5cdGNvbnN0IHBhdGhTdHIgPSBpbnB1dENvbnRleHQgPyBpbnB1dENvbnRleHQucGF0aC5qb2luKCAnLicgKSA6ICcnO1xuXG5cdHRoaXMucHJvbWlzZXMgPSB0aGlzLnByb21pc2VzLmZpbHRlcihcblx0XHQoIHsgaWRQYXRoIH0gKSA9PiAhaWRQYXRoIHx8IGlkUGF0aCAhPT0gcGF0aFN0cixcblx0KTtcblxuXHR0aGlzLnByb21pc2VzLnB1c2goIHtcblx0XHRjYWxsYWJsZSxcblx0XHRpZFBhdGg6IGlucHV0Q29udGV4dCA/IGlucHV0Q29udGV4dC5wYXRoLmpvaW4oICcuJyApIDogJycsXG5cdH0gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VTdWJtaXQ7IiwiaW1wb3J0IExvYWRpbmdSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xuaW1wb3J0IEFqYXhTdWJtaXQgZnJvbSAnLi9BamF4U3VibWl0JztcbmltcG9ydCBSZWxvYWRTdWJtaXQgZnJvbSAnLi9SZWxvYWRTdWJtaXQnO1xuaW1wb3J0IHsgZm9jdXNPbkludmFsaWRJbnB1dCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBwb3B1bGF0ZUlucHV0cyB9IGZyb20gJy4uL2lucHV0cy9mdW5jdGlvbnMnO1xuXG4vKipcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICogQGNsYXNzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBGb3JtU3VibWl0KCBvYnNlcnZhYmxlICkge1xuXG5cdHRoaXMub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XG5cdHRoaXMubG9ja1N0YXRlICA9IG5ldyBMb2FkaW5nUmVhY3RpdmVWYXIoIGZhbHNlICk7XG5cdHRoaXMubG9ja1N0YXRlLm1ha2UoKTtcblx0dGhpcy5hdXRvRm9jdXMgICAgICAgICAgICAgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uYXV0b19mb2N1cztcblx0dGhpcy5jYW5TdWJtaXRGb3JtICAgICAgICAgPSB0cnVlO1xuXHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IHRydWU7XG5cdC8qKlxuXHQgKiBAcGFyYW0gZXZlbnQge0V2ZW50fVxuXHQgKi9cblx0dGhpcy5vblN1Ym1pdCA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRoaXMuc3VibWl0KCk7XG5cdH07XG5cblx0dGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCB0cnVlID09PSB0aGlzLmNhblN1Ym1pdEZvcm0gKSB7XG5cdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gICAgICAgICA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5vYnNlcnZhYmxlLmlucHV0c0FyZVZhbGlkKCkudGhlbiggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNsZWFyRXJyb3JzKCk7XG5cdFx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0dGVyLnN1Ym1pdCgpO1xuXHRcdFx0fSApLmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdFx0dGhpcy5hdXRvRm9jdXMgJiYgZm9jdXNPbkludmFsaWRJbnB1dChcblx0XHRcdFx0XHRwb3B1bGF0ZUlucHV0cyggdGhpcy5vYnNlcnZhYmxlLmdldElucHV0cygpICksXG5cdFx0XHRcdCk7XG5cdFx0XHR9ICkuZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuY2FuU3VibWl0Rm9ybSAgICAgICAgID0gdHJ1ZTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5jbGVhckVycm9ycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtZXNzYWdlcyA9IHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLW1lc3NhZ2VzLXdyYXAnLFxuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzICkge1xuXHRcdFx0bWVzc2FnZS5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5sb2NrU3RhdGUudG9nZ2xlKCk7XG5cdFx0dGhpcy50b2dnbGVMb2FkaW5nKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLmhhbmRsZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge05vZGVMaXN0T2Y8RWxlbWVudD59XG5cdFx0ICovXG5cdFx0Y29uc3QgYnV0dG9ucyA9IHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19zdWJtaXQnLFxuXHRcdCk7XG5cblx0XHR0aGlzLmxvY2tTdGF0ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0Zm9yICggY29uc3QgYnV0dG9uIG9mIGJ1dHRvbnMgKSB7XG5cdFx0XHRcdGJ1dHRvbi5kaXNhYmxlZCA9IHRoaXMubG9ja1N0YXRlLmN1cnJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZmFsc2UgPT09IHRoaXMubG9ja1N0YXRlLmN1cnJlbnQgKSB7XG5cdFx0XHRcdHRoaXMuY2FuU3VibWl0Rm9ybSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdHRoaXMudG9nZ2xlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLm9ic2VydmFibGUucm9vdE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWxvYWRpbmcnICk7XG5cdH07XG5cblx0dGhpcy5jcmVhdGVTdWJtaXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBjbGFzc0xpc3QgfSA9IHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZTtcblx0XHRjb25zdCBpc0FqYXggICAgICAgID0gY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3VibWl0LXR5cGUtYWpheCcgKTtcblxuXHRcdHJldHVybiBpc0FqYXggPyBuZXcgQWpheFN1Ym1pdCggdGhpcyApIDogbmV3IFJlbG9hZFN1Ym1pdCggdGhpcyApO1xuXHR9O1xuXG5cdHRoaXMuZ2V0Rm9ybUlkID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMub2JzZXJ2YWJsZTtcblxuXHRcdHJldHVybiArcm9vdE5vZGUuZGF0YXNldC5mb3JtSWQ7XG5cdH07XG5cblx0dGhpcy5vbkVuZFN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdHRoaXMuc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApXG5cdFx0PyB0aGlzLnN1Ym1pdHRlci5zdGF0dXMud2F0Y2goIGNhbGxhYmxlIClcblx0XHQ6IHRoaXMuc3VibWl0dGVyLm9uRmFpbFN1Ym1pdCggY2FsbGFibGUgKTtcblx0fTtcblxuXHR0aGlzLm9ic2VydmFibGUucm9vdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnc3VibWl0Jyxcblx0XHQoIGV2ZW50ICkgPT4gdGhpcy5vblN1Ym1pdCggZXZlbnQgKSxcblx0KTtcblxuXHQvKipcblx0ICogQHR5cGUge0FqYXhTdWJtaXR8UmVsb2FkU3VibWl0fVxuXHQgKi9cblx0dGhpcy5zdWJtaXR0ZXIgPSB0aGlzLmNyZWF0ZVN1Ym1pdHRlcigpO1xuXG5cdHRoaXMuaGFuZGxlQnV0dG9ucygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtU3VibWl0OyIsImltcG9ydCBCYXNlU3VibWl0IGZyb20gJy4vQmFzZVN1Ym1pdCc7XG5cbmZ1bmN0aW9uIFJlbG9hZFN1Ym1pdCggZm9ybSApIHtcblx0QmFzZVN1Ym1pdC5jYWxsKCB0aGlzLCBmb3JtICk7XG5cblx0dGhpcy5mYWlsUHJvbWlzZXMgPSBbXTtcblxuXHR0aGlzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gICAgID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cdFx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cblx0XHRQcm9taXNlLmFsbChcblx0XHRcdGFwcGx5RmlsdGVycyhcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQucmVsb2FkLnByb21pc2VzJyxcblx0XHRcdFx0dGhpcy5nZXRQcm9taXNlcygpLFxuXHRcdFx0XHR7IHRhcmdldDogcm9vdE5vZGUgfSxcblx0XHRcdCksXG5cdFx0KS50aGVuKFxuXHRcdFx0KCkgPT4gcm9vdE5vZGUuc3VibWl0KCksXG5cdFx0KS5jYXRjaCggKCkgPT4ge1xuXHRcdFx0dGhpcy5mYWlsUHJvbWlzZXMuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50KCkgKTtcblxuXHRcdFx0dGhpcy5mb3JtLnRvZ2dsZSgpO1xuXHRcdH0gKTtcblx0fTtcblxuXHR0aGlzLm9uRmFpbFN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuZmFpbFByb21pc2VzLnB1c2goIGNhbGxhYmxlICk7XG5cdH07XG59XG5cblJlbG9hZFN1Ym1pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU3VibWl0LnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxvYWRTdWJtaXQ7IiwiZnVuY3Rpb24gaXNTdWNjZXNzU3RhdHVzKCBzdGF0dXMgKSB7XG5cdHJldHVybiAnc3VjY2VzcycgPT09IHN0YXR1cyB8fCBzdGF0dXM/LmluY2x1ZGVzKCAnZHN1Y2Nlc3N8JyApO1xufVxuXG5leHBvcnQgeyBpc1N1Y2Nlc3NTdGF0dXMgfTsiLCIvKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYW5nZVR5cGUoIG5vZGUgKSB7XG5cdHJldHVybiBbICdzZWxlY3Qtb25lJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNIaWRkZW4oIG5vZGUgKSB7XG5cdHJldHVybiAnaGlkZGVuJyA9PT0gbm9kZS50eXBlO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1JhbmdlKCBub2RlICkge1xuXHRyZXR1cm4gJ3JhbmdlJyA9PT0gbm9kZS50eXBlO1xufVxuXG5leHBvcnQge1xuXHRpc0hpZGRlbixcblx0aXNSYW5nZSxcblx0aXNDaGFuZ2VUeXBlLFxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdHlsZXNcbmltcG9ydCAnLi9tYWluLnBjc3MnXG5cbmltcG9ydCBpbml0RWxlbWVudG9yIGZyb20gJy4vaW5pdC9pbml0RWxlbWVudG9yJztcbmltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vc2lnbmFscy9CYXNlU2lnbmFsJztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcbmltcG9ydCBSZWFjdGl2ZUhvb2sgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2snO1xuaW1wb3J0IFJlYWN0aXZlU2V0IGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVTZXQnO1xuaW1wb3J0IExvYWRpbmdSZWFjdGl2ZVZhciBmcm9tICcuL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhcic7XG5pbXBvcnQgSW5wdXREYXRhIGZyb20gJy4vaW5wdXRzL0lucHV0RGF0YSc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IFJlcG9ydGluZ0ludGVyZmFjZSBmcm9tICcuL3JlcG9ydGluZy9SZXBvcnRpbmdJbnRlcmZhY2UnO1xuaW1wb3J0IHtcblx0YWxsUmVqZWN0ZWQsXG5cdGdldExhbmd1YWdlLFxuXHR0b0hUTUwsXG5cdGlzRW1wdHksXG5cdGdldE9mZnNldFRvcCxcblx0Zm9jdXNPbkludmFsaWRJbnB1dCxcblx0aXNWaXNpYmxlLCBnZXRTY3JvbGxQYXJlbnQsIGFwcGx5VXNlckFnZW50cywgaXNVQSxcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IFJlc3RyaWN0aW9uIGZyb20gJy4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9SZXN0cmljdGlvbic7XG5pbXBvcnQgUmVzdHJpY3Rpb25FcnJvciBmcm9tICcuL3JlcG9ydGluZy9SZXN0cmljdGlvbkVycm9yJztcbmltcG9ydCB7XG5cdHZhbGlkYXRlSW5wdXRzLFxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXG59IGZyb20gJy4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XG5cbmltcG9ydCAnLi9jYWxjLm1vZHVsZS9tYWluJztcbmltcG9ydCB7XG5cdGdldFBhcnNlZE5hbWUsXG5cdHBvcHVsYXRlSW5wdXRzLFxufSBmcm9tICcuL2lucHV0cy9mdW5jdGlvbnMnO1xuaW1wb3J0IGluaXRGb3JtIGZyb20gJy4vaW5pdC9pbml0Rm9ybSc7XG5pbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvQmFzZUh0bWxBdHRyJztcbmltcG9ydCBxdWVyeUJ5QXR0clZhbHVlIGZyb20gJy4vaHRtbC5tYWNyby9xdWVyeUJ5QXR0clZhbHVlJztcbmltcG9ydCBpdGVyYXRlQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVDb21tZW50cyc7XG5pbXBvcnQgaXRlcmF0ZUpmYkNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMnO1xuaW1wb3J0IG9ic2VydmVDb21tZW50IGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudCc7XG5pbXBvcnQgb2JzZXJ2ZU1hY3JvQXR0ciBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0cic7XG5pbXBvcnQgUmVxdWlyZWRSZXN0cmljdGlvbiBmcm9tICcuL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbic7XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cblx0KSxcblx0SW5wdXREYXRhLFxuXHRCYXNlU2lnbmFsLFxuXHRSZWFjdGl2ZVZhcixcblx0UmVhY3RpdmVIb29rLFxuXHRMb2FkaW5nUmVhY3RpdmVWYXIsXG5cdE9ic2VydmFibGUsXG5cdFJlcG9ydGluZ0ludGVyZmFjZSxcblx0UmVzdHJpY3Rpb24sXG5cdFJlc3RyaWN0aW9uRXJyb3IsXG5cdEJhc2VIdG1sQXR0cixcblx0UmVhY3RpdmVTZXQsXG5cdFJlcXVpcmVkUmVzdHJpY3Rpb24sXG59O1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPz8ge31cblx0KSxcblx0YWxsUmVqZWN0ZWQsXG5cdGdldExhbmd1YWdlLFxuXHR0b0hUTUwsXG5cdHZhbGlkYXRlSW5wdXRzLFxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcblx0Z2V0UGFyc2VkTmFtZSxcblx0aXNFbXB0eSxcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXG5cdGdldE9mZnNldFRvcCxcblx0Zm9jdXNPbkludmFsaWRJbnB1dCxcblx0cG9wdWxhdGVJbnB1dHMsXG5cdGlzVmlzaWJsZSxcblx0cXVlcnlCeUF0dHJWYWx1ZSxcblx0aXRlcmF0ZUNvbW1lbnRzLFxuXHRvYnNlcnZlTWFjcm9BdHRyLFxuXHRvYnNlcnZlQ29tbWVudCxcblx0aXRlcmF0ZUpmYkNvbW1lbnRzLFxuXHRnZXRTY3JvbGxQYXJlbnQsXG5cdGlzVUEsXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGFwcGx5VXNlckFnZW50cyApO1xuXG5qUXVlcnkoICgpID0+IEpldFBsdWdpbnMuaW5pdCgpICk7XG5cbkpldFBsdWdpbnMuYnVsa0Jsb2Nrc0luaXQoIFtcblx0e1xuXHRcdGJsb2NrOiAnamV0LWZvcm1zLmZvcm0tYmxvY2snLFxuXHRcdGNhbGxiYWNrOiBpbml0Rm9ybSxcblx0XHRjb25kaXRpb246ICgpID0+ICdsb2FkaW5nJyAhPT0gZG9jdW1lbnQucmVhZHlTdGF0ZSxcblx0fSxcbl0gKTtcblxualF1ZXJ5KCB3aW5kb3cgKS5vbiggJ2VsZW1lbnRvci9mcm9udGVuZC9pbml0JywgaW5pdEVsZW1lbnRvciApO1xuXG5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsICgpID0+IHtcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlW119XG5cdCAqL1xuXHRjb25zdCBmb3JtcyA9IE9iamVjdC52YWx1ZXMoIHdpbmRvdy5KZXRGb3JtQnVpbGRlciApO1xuXG5cdGZvciAoIGNvbnN0IHJvb3Qgb2YgZm9ybXMgKSB7XG5cdFx0aWYgKCAhKCByb290IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHJvb3QucmVRdWVyeVZhbHVlcygpO1xuXHR9XG59ICk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==