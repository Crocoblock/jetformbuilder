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
    if (undefined === existNode) {
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
    if (!this.hasChangedValue() && this.promisesCount === promises.length && !this.input.stopValidation) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBTUE7QUFLQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBOztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBOztBQWNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBT0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBS0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9CYXNlSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9GaWxlRXh0ZW5zaW9uSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvTWF4RmlsZXNIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL1JlbWFpbmluZ0NhbGNBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvQ2FsY3VsYXRlZEZvcm11bGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hcHBseUZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9hdHRhY2hDb25zdE5hbWVzcGFjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9CYXNlSW50ZXJuYWxNYWNyby5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9DdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9EYXlfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL0hvdXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL01pbl9Jbl9TZWMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvTW9udGhfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL1llYXJfSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGREYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZEhvdXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkTW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZFllYXJGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0ZhbGxCYWNrRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0xlbmd0aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0RGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TdWJ0cmFjdE1pbkZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF0ZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9UaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZ2V0RmlsdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL21haW4uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vQ2FsY3VsYXRlZEh0bWxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL2l0ZXJhdGVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU5vZGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbml0L2luaXRFbGVtZW50b3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbml0L2luaXRGb3JtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL0NoYW5nZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvSW5wdXREYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL05vTGlzdGVuRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9SYW5nZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvUmVuZGVyU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL1JlYWN0aXZlSG9vay5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlYWN0aXZlL1JlYWN0aXZlU2V0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVWYXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvQnJvd3NlclJlcG9ydGluZy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9SZXBvcnRpbmdDb250ZXh0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1JlcG9ydGluZ0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9SZXN0cmljdGlvbkVycm9yLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvTmF0aXZlUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlcXVpcmVkUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Jlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9CYXNlU2lnbmFsLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxIaWRkZW5BcnJheS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbFJlbmRlclN0YXRlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvQWpheFN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9CYXNlU3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0Zvcm1TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvUmVsb2FkU3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1cHBvcnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vbWFpbi5wY3NzPzc2MGQiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUlucHV0LCBwb3B1bGF0ZUlucHV0cyB9IGZyb20gJy4vaW5wdXRzL2Z1bmN0aW9ucyc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuL3N1Ym1pdC9Gb3JtU3VibWl0JztcbmltcG9ydCBxdWVyeUJ5QXR0clZhbHVlIGZyb20gJy4vaHRtbC5tYWNyby9xdWVyeUJ5QXR0clZhbHVlJztcbmltcG9ydCBpdGVyYXRlSmZiQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVKZmJDb21tZW50cyc7XG5pbXBvcnQgb2JzZXJ2ZUNvbW1lbnQgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50JztcbmltcG9ydCBvYnNlcnZlTWFjcm9BdHRyIGZyb20gJy4vaHRtbC5tYWNyby9vYnNlcnZlTWFjcm9BdHRyJztcbmltcG9ydCBvYnNlcnZlTm9kZSBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU5vZGUnO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dHNBbGwgfSBmcm9tICcuL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xuaW1wb3J0IFJlcG9ydGluZ0NvbnRleHQgZnJvbSAnLi9yZXBvcnRpbmcvUmVwb3J0aW5nQ29udGV4dCc7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmNvbnN0IHtcblx0ICAgICAgZG9BY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuZnVuY3Rpb24gT2JzZXJ2YWJsZSggcGFyZW50ID0gbnVsbCApIHtcblx0dGhpcy5wYXJlbnQgICAgID0gcGFyZW50O1xuXHR0aGlzLmRhdGFJbnB1dHMgPSB7fTtcblx0dGhpcy5mb3JtICAgICAgID0gbnVsbDtcblx0dGhpcy5tdWx0aXN0ZXAgID0gbnVsbDtcblx0dGhpcy5yb290Tm9kZSAgID0gbnVsbDtcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKlxuXHQgKiBAdHlwZSB7UmVwb3J0aW5nQ29udGV4dH1cblx0ICovXG5cdHRoaXMuY29udGV4dCA9IHRoaXMucGFyZW50ID8gbnVsbCA6IG5ldyBSZXBvcnRpbmdDb250ZXh0KCB0aGlzICk7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHR5cGUge1JlcGVhdGVyRGF0YXxudWxsfVxuXHQgKi9cblx0cGFyZW50OiBudWxsLFxuXHQvKipcblx0ICoge1xuXHQgKiAgICAgW2ZpZWxkX25hbWVdOiB7SW5wdXREYXRhfVxuXHQgKiB9XG5cdCAqL1xuXHRkYXRhSW5wdXRzOiB7fSxcblxuXHQvKipcblx0ICogQHR5cGUge0Zvcm1TdWJtaXR9XG5cdCAqL1xuXHRmb3JtOiBudWxsLFxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7TXVsdGlTdGVwU3RhdGV9XG5cdCAqL1xuXHRtdWx0aXN0ZXA6IG51bGwsXG5cblx0LyoqXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MRm9ybUVsZW1lbnR9XG5cdCAqL1xuXHRyb290Tm9kZTogbnVsbCxcblx0aXNPYnNlcnZlZDogZmFsc2UsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR2YWx1ZTogbnVsbCxcblx0b2JzZXJ2ZSAoIHJvb3QgPSBudWxsICkge1xuXHRcdGlmICggdGhpcy5pc09ic2VydmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIG51bGwgIT09IHJvb3QgKSB7XG5cdFx0XHR0aGlzLnJvb3ROb2RlID0gcm9vdDtcblx0XHR9XG5cdFx0dGhpcy5pc09ic2VydmVkID0gdHJ1ZTtcblxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuYmVmb3JlJywgdGhpcyApO1xuXG5cdFx0dGhpcy5pbml0U3VibWl0SGFuZGxlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSBkYXRhSW5wdXRzIHdpdGggZmllbGRzLlxuXHRcdCAqIFdpdGhvdXQgdmFsdWVzXG5cdFx0ICovXG5cdFx0dGhpcy5pbml0RmllbGRzKCk7XG5cblx0XHQvKipcblx0XHQgKiBTZXR1cCBmaWVsZHMgdmFsdWVzIGFuZCBtYWtlIHRoZW0gcmVhY3RpdmVcblx0XHQgKi9cblx0XHR0aGlzLm1ha2VSZWFjdGl2ZVByb3h5KCk7XG5cblx0XHR0aGlzLmluaXRNYWNyb3MoKTtcblxuXHRcdHRoaXMuaW5pdEFjdGlvbkJ1dHRvbnMoKTtcblxuXHRcdHRoaXMuaW5pdFZhbHVlKCk7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmFmdGVyJywgdGhpcyApO1xuXHR9LFxuXG5cdGluaXRGaWVsZHMgKCkge1xuXHRcdGZvciAoIGNvbnN0IGZvcm1FbGVtZW50IG9mIHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCdbZGF0YS1qZmItc3luY10nLFxuXHRcdCkgKSB7XG5cdFx0XHR0aGlzLnB1c2hJbnB1dCggZm9ybUVsZW1lbnQgKTtcblx0XHR9XG5cdH0sXG5cblx0aW5pdE1hY3JvcyAoKSB7XG5cdFx0Ly8gbWFjcm9zIGFzIGh0bWwtY29tbWVudHNcblx0XHRmb3IgKFxuXHRcdFx0Y29uc3QgY29tbWVudCBvZiBpdGVyYXRlSmZiQ29tbWVudHMoIHRoaXMucm9vdE5vZGUgKVxuXHRcdFx0KSB7XG5cdFx0XHRvYnNlcnZlQ29tbWVudCggY29tbWVudCwgdGhpcyApO1xuXHRcdH1cblxuXHRcdC8vIG1hY3JvcyBpbiBkZWZhdWx0IGF0dHJpYnV0ZXNcblx0XHRjb25zdCBub2Rlc1dpdGhBdHRycyA9IHF1ZXJ5QnlBdHRyVmFsdWUoIHRoaXMucm9vdE5vZGUsICdKRkJfRklFTEQ6OicgKTtcblxuXHRcdGNvbnN0IHsgcmVwbGFjZUF0dHJzID0gW10gfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZVdpdGhBdHRyIG9mIG5vZGVzV2l0aEF0dHJzICkge1xuXHRcdFx0Zm9yICggY29uc3QgcmVwbGFjZUF0dHIgb2YgcmVwbGFjZUF0dHJzICkge1xuXHRcdFx0XHRvYnNlcnZlTWFjcm9BdHRyKCBub2RlV2l0aEF0dHIsIHJlcGxhY2VBdHRyLCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gbWFjcm9zIGluIGRhdGEtamZiLW1hY3JvIGF0dHJpYnV0ZVxuXHRcdC8vIHJlc3VsdCB3aWxsIHBsYWNlZCBpbnNpZGUgcmVsYXRpdmUgbm9kZVxuXHRcdGNvbnN0IG5vZGVzID0gdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J1tkYXRhLWpmYi1tYWNyb106bm90KFtkYXRhLWpmYi1vYnNlcnZlZF0pJyxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBub2RlcyApIHtcblx0XHRcdG9ic2VydmVOb2RlKCBub2RlLCB0aGlzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGluaXRTdWJtaXRIYW5kbGVyICgpIHtcblx0XHQvLyBjaGVjayBpcyBjdXJyZW50IG9iamVjdCByZWxhdGVkIGZvciBnbG9iYWwgZm9ybSBlbGVtZW50XG5cdFx0aWYgKCB0aGlzLnBhcmVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmZvcm0gPSBuZXcgRm9ybVN1Ym1pdCggdGhpcyApO1xuXHR9LFxuXG5cdGluaXRBY3Rpb25CdXR0b25zICgpIHtcblx0XHRpZiAoIHRoaXMucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKCBjb25zdCBidXR0b24gb2YgdGhpcy5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19idXR0b24tc3dpdGNoLXN0YXRlJyxcblx0XHQpICkge1xuXHRcdFx0bGV0IHN0YXRlcztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHN0YXRlcyA9IEpTT04ucGFyc2UoIGJ1dHRvbi5kYXRhc2V0LnN3aXRjaE9uICk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5nZXRTdGF0ZSgpLnZhbHVlLmN1cnJlbnQgPSBzdGF0ZXM7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFByb21pc2U8bmV2ZXI+fFByb21pc2U8dm9pZD4+fVxuXHQgKi9cblx0YXN5bmMgaW5wdXRzQXJlVmFsaWQgKCkge1xuXHRcdGNvbnN0IGludmFsaWQgPSBhd2FpdCB2YWxpZGF0ZUlucHV0c0FsbChcblx0XHRcdHBvcHVsYXRlSW5wdXRzKCB0aGlzLmdldElucHV0cygpICksXG5cdFx0KTtcblxuXHRcdHJldHVybiBCb29sZWFuKCBpbnZhbGlkLmxlbmd0aCApXG5cdFx0ICAgICAgID8gUHJvbWlzZS5yZWplY3QoIGludmFsaWQgKVxuXHRcdCAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xuXHR9LFxuXG5cdHdhdGNoICggZmllbGROYW1lLCBjYWxsYWJsZSApIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoIGZpZWxkTmFtZSApO1xuXG5cdFx0aWYgKCBpbnB1dCApIHtcblx0XHRcdHJldHVybiBpbnB1dC53YXRjaCggY2FsbGFibGUgKTtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRgZGF0YUlucHV0cyBpbiBPYnNlcnZhYmxlIGRvblxcJ3QgaGF2ZSAkeyBmaWVsZE5hbWUgfSBmaWVsZGAsXG5cdFx0KTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIG5vZGUgICAge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSByZXBsYWNlIHtCb29sZWFufVxuXHQgKi9cblx0b2JzZXJ2ZUlucHV0ICggbm9kZSwgcmVwbGFjZSA9IGZhbHNlICkge1xuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5wdXNoSW5wdXQoIG5vZGUsIHJlcGxhY2UgKTtcblxuXHRcdGlucHV0Lm1ha2VSZWFjdGl2ZSgpO1xuXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5pbnB1dC5tYW51YWwnLCBpbnB1dCApO1xuXHR9LFxuXG5cdG1ha2VSZWFjdGl2ZVByb3h5ICgpIHtcblx0XHRmb3IgKCBjb25zdCBjdXJyZW50IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRjdXJyZW50Lm1ha2VSZWFjdGl2ZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtIG5vZGUgICAge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSByZXBsYWNlIHtCb29sZWFufVxuXHQgKi9cblx0cHVzaElucHV0ICggbm9kZSwgcmVwbGFjZSA9IGZhbHNlICkge1xuXHRcdC8vIHByZXZlbnQgc2F2aW5nIGlucHV0cyBmcm9tIHByZXNldCByZXBlYXRlciBpdGVtcyBpbiByb290IG9iamVjdFxuXHRcdC8vIHRob3NlIGlucHV0cyB3b3VsZCBzYXZlZCBpbiBPYnNlcnZhYmxlUm93IG9iamVjdFxuXG5cdFx0aWYgKCAhdGhpcy5wYXJlbnQgJiZcblx0XHRcdG5vZGUucGFyZW50RWxlbWVudC5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInIClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbnB1dERhdGEgPSBjcmVhdGVJbnB1dCggbm9kZSwgdGhpcyApO1xuXHRcdGNvbnN0IGZpbmRJbnB1dCA9IHRoaXMuZGF0YUlucHV0c1sgaW5wdXREYXRhLmdldE5hbWUoKSBdID8/IGZhbHNlO1xuXG5cdFx0aWYgKCBmYWxzZSA9PT0gZmluZElucHV0IHx8IHJlcGxhY2UgKSB7XG5cdFx0XHR0aGlzLmRhdGFJbnB1dHNbIGlucHV0RGF0YS5nZXROYW1lKCkgXSA9IGlucHV0RGF0YTtcblxuXHRcdFx0cmV0dXJuIGlucHV0RGF0YTtcblx0XHR9XG5cblx0XHRmaW5kSW5wdXQubWVyZ2UoIGlucHV0RGF0YSApO1xuXG5cdFx0cmV0dXJuIGZpbmRJbnB1dDtcblx0fSxcblxuXHQvKipcblx0ICogQHJldHVybiB7QXJyYXk8SW5wdXREYXRhPn1cblx0ICovXG5cdGdldElucHV0cyAoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoIHRoaXMuZGF0YUlucHV0cyApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtudWxsfFJlbmRlclN0YXRlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHRnZXRTdGF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SW5wdXQoICdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlcycgKTtcblx0fSxcblxuXHQvKipcblx0ICogQHBhcmFtICBmaWVsZE5hbWVcblx0ICogQHJldHVybiB7bnVsbHxJbnB1dERhdGF9XG5cdCAqL1xuXHRnZXRJbnB1dCAoIGZpZWxkTmFtZSApIHtcblx0XHRpZiAoIHRoaXMuZGF0YUlucHV0cy5oYXNPd25Qcm9wZXJ0eSggZmllbGROYW1lICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRhSW5wdXRzWyBmaWVsZE5hbWUgXTtcblx0XHR9XG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMucGFyZW50Py5yb290ID8/IG51bGw7XG5cblx0XHRpZiAoICFyb290ICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCByb290LmRhdGFJbnB1dHMuaGFzT3duUHJvcGVydHkoIGZpZWxkTmFtZSApICkge1xuXHRcdFx0cmV0dXJuIHJvb3QuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdGdldFN1Ym1pdCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybSA/IHRoaXMuZm9ybSA6IHRoaXMucGFyZW50LnJvb3QuZm9ybTtcblx0fSxcblx0Z2V0Q29udGV4dCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dCA/PyB0aGlzLnBhcmVudC5yb290LmNvbnRleHQ7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNzExXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjAuOFxuXHQgKi9cblx0cmVtb3ZlICgpIHtcblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0aW5wdXQub25SZW1vdmUoKTtcblx0XHR9XG5cdH0sXG5cdC8qKlxuXHQgKiBSdW5zIG9ubHkgb25jZSBvbiB3aW5kb3cgXCJsb2FkXCIgZXZlbnRcblx0ICovXG5cdHJlUXVlcnlWYWx1ZXMgKCkge1xuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0XHRpbnB1dC5yZVF1ZXJ5VmFsdWUoKTtcblx0XHR9XG5cdH0sXG5cdGluaXRWYWx1ZSgpIHtcblx0XHR0aGlzLnZhbHVlID0gbmV3IFJlYWN0aXZlVmFyKCB7fSApO1xuXG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0Y29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQsXG5cdFx0XHQpO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBbIGZpZWxkTmFtZSwgdmFsdWUgXSBvZiBlbnRyaWVzICkge1xuXHRcdFx0XHR0aGlzLmdldElucHV0KCBmaWVsZE5hbWUgKS5yZXZlcnRWYWx1ZSggdmFsdWUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdFx0aW5wdXQud2F0Y2goICgpID0+IHtcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50WyBpbnB1dC5nZXROYW1lKCkgXSA9IGlucHV0LmdldFZhbHVlKCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy52YWx1ZS5tYWtlKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlOyIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIEJhc2VIdG1sQXR0cigpIHtcblx0dGhpcy5hdHRyTmFtZSAgID0gJyc7XG5cdHRoaXMuaW5pdGlhbCAgICA9IG51bGw7XG5cdHRoaXMuaXNGcm9tRGF0YSA9IGZhbHNlO1xuXHR0aGlzLnZhbHVlICAgICAgPSBudWxsO1xufVxuXG5CYXNlSHRtbEF0dHIucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogTmFtZSBvZiBkYXRhIGF0dHJpYnV0ZVxuXHQgKi9cblx0YXR0ck5hbWU6ICcnLFxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGlucHV0OiBudWxsLFxuXHRpbml0aWFsOiBudWxsLFxuXHQvKipcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dmFsdWU6IG51bGwsXG5cdG9ic2VydmUoKSB7XG5cdFx0dGhpcy52YWx1ZSA9IG5ldyBSZWFjdGl2ZVZhciggdGhpcy5pbml0aWFsICk7XG5cdFx0dGhpcy52YWx1ZS5tYWtlKCk7XG5cblx0XHR0aGlzLmFkZFdhdGNoZXJBdHRyKCk7XG5cdH0sXG5cdG5vZGVTaWduYWwoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0bm9kZVsgdGhpcy5hdHRyTmFtZSBdID0gdGhpcy52YWx1ZS5jdXJyZW50O1xuXHR9LFxuXHRhZGRXYXRjaGVyQXR0cigpIHtcblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLm5vZGVTaWduYWwoKSApO1xuXHR9LFxuXHQvKipcblx0ICogSWYgeW91IG5lZWQgc3BlY2lmaWMgY2hlY2ssXG5cdCAqIHlvdSBjYW4gcmV3cml0ZSB0aGlzIGZ1bmN0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGlzU3VwcG9ydGVkKCBpbnB1dCApIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xuXG5cdFx0Y29uc3QgaGFzSW5Sb290ICAgID0gLTEgIT09IG5vZGVbIHRoaXMuYXR0ck5hbWUgXSA/PyAtMTtcblx0XHRjb25zdCBoYXNJbkRhdGFTZXQgPSBub2RlLmRhdGFzZXQuaGFzT3duUHJvcGVydHkoIHRoaXMuYXR0ck5hbWUgKTtcblxuXHRcdGlmICggIWhhc0luRGF0YVNldCAmJiAhaGFzSW5Sb290ICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhbCA9IHRoaXMuZ2V0SW5pdGlhbCggaW5wdXQgKTtcblxuXHRcdHJldHVybiBCb29sZWFuKCB0aGlzLmluaXRpYWwgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Knxib29sZWFufVxuXHQgKi9cblx0Z2V0SW5pdGlhbCggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHJldHVybiBub2RlLmRhdGFzZXRbIHRoaXMuYXR0ck5hbWUgXSB8fCBub2RlWyB0aGlzLmF0dHJOYW1lIF0gfHwgZmFsc2U7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKi9cblx0c2V0SW5wdXQoIGlucHV0ICkge1xuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VIdG1sQXR0cjsiLCJpbXBvcnQgTWF4RmlsZXNIdG1sQXR0ciBmcm9tICcuL01heEZpbGVzSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBGaWxlRXh0ZW5zaW9uSHRtbEF0dHIoKSB7XG5cdE1heEZpbGVzSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAnZmlsZV9leHQnO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHRyZXR1cm4gJ2ZpbGUnID09PSBub2RlLnR5cGUgJiYgQm9vbGVhbiggbm9kZS5hY2NlcHQgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XG5cblx0XHR0aGlzLmluaXRpYWwgPSBub2RlLmFjY2VwdC5zcGxpdCggJywnICk7XG5cdH07XG5cblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB7XG5cdFx0XHRub2RlLmFjY2VwdCA9IHRoaXMudmFsdWUuY3VycmVudC5qb2luKCAnLCcgKTtcblx0XHR9ICk7XG5cdH07XG59XG5cbkZpbGVFeHRlbnNpb25IdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRXh0ZW5zaW9uSHRtbEF0dHI7IiwiaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9NYXhGaWxlc0h0bWxBdHRyJztcblxuZnVuY3Rpb24gTWF4RmlsZVNpemVIdG1sQXR0cigpIHtcblx0TWF4RmlsZXNIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdtYXhfc2l6ZSc7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7RmlsZURhdGF8SW5wdXREYXRhfVxuXHQgKi9cblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0TWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcblxuXHRcdGNvbnN0IHsgbWF4X3NpemU6IG1heFNpemUgPSAxIH0gPSBKU09OLnBhcnNlKFxuXHRcdFx0aW5wdXQucHJldmlld3NDb250YWluZXIuZGF0YXNldC5hcmdzLFxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXRpYWwgPSArbWF4U2l6ZTtcblx0fTtcbn1cblxuTWF4RmlsZVNpemVIdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNYXhGaWxlU2l6ZUh0bWxBdHRyOyIsImltcG9ydCBCYXNlSHRtbEF0dHIgZnJvbSAnLi9CYXNlSHRtbEF0dHInO1xuXG5mdW5jdGlvbiBNYXhGaWxlc0h0bWxBdHRyKCkge1xuXHRCYXNlSHRtbEF0dHIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuYXR0ck5hbWUgPSAnbWF4X2ZpbGVzJztcblxuXHQvKipcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcblxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cblx0XHRjb25zdCB7IG1heF9maWxlczogbWF4RmlsZXMgPSAxIH0gPSBKU09OLnBhcnNlKFxuXHRcdFx0aW5wdXQucHJldmlld3NDb250YWluZXIuZGF0YXNldC5hcmdzLFxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXRpYWwgPSArbWF4RmlsZXM7XG5cdH07XG5cblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9ICgpID0+IHt9O1xufVxuXG5NYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VIdG1sQXR0ci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZXNIdG1sQXR0cjsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vQmFzZUh0bWxBdHRyJztcblxuZnVuY3Rpb24gUmVtYWluaW5nQ2FsY0F0dHIoKSB7XG5cdEJhc2VIdG1sQXR0ci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5hdHRyTmFtZSA9ICdyZW1haW5pbmcnO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdHJldHVybiBpbnB1dC5hdHRycy5oYXNPd25Qcm9wZXJ0eSggJ21heExlbmd0aCcgKTtcblx0fTtcblxuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IGlucHV0LmF0dHJzO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBpbnB1dC52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHRcdHRoaXMuaW5pdGlhbCA9IG1heExlbmd0aC52YWx1ZS5jdXJyZW50IC0gY3VycmVudDtcblx0fTtcblxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gKCkgPT4ge307XG5cblx0dGhpcy5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUub2JzZXJ2ZS5jYWxsKCB0aGlzICk7XG5cblx0XHR0aGlzLmlucHV0LnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUF0dHIoKSApO1xuXHRcdHRoaXMuaW5wdXQuYXR0cnMubWF4TGVuZ3RoLnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUF0dHIoKSApO1xuXHR9O1xuXG5cdHRoaXMudXBkYXRlQXR0ciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IG1heExlbmd0aCB9ID0gdGhpcy5pbnB1dC5hdHRycztcblx0XHRjb25zdCBjdXJyZW50ICAgICAgID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IG1heExlbmd0aC52YWx1ZS5jdXJyZW50IC0gY3VycmVudDtcblx0fTtcbn1cblxuUmVtYWluaW5nQ2FsY0F0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUh0bWxBdHRyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZW1haW5pbmdDYWxjQXR0cjsiLCIvKipcbiAqIEBwYXJhbSBmb3JtdWxhXG4gKiBAcGFyYW0gcm9vdCAgICB7T2JzZXJ2YWJsZX1cbiAqIEBjbGFzc1xuICovXG5pbXBvcnQgYXBwbHlGaWx0ZXJzIGZyb20gJy4vYXBwbHlGaWx0ZXJzJztcbmltcG9ydCBnZXRGaWx0ZXJzIGZyb20gJy4vZ2V0RmlsdGVycyc7XG5pbXBvcnQgYXR0YWNoQ29uc3ROYW1lc3BhY2UgZnJvbSAnLi9hdHRhY2hDb25zdE5hbWVzcGFjZSc7XG5pbXBvcnQgSW5wdXREYXRhIGZyb20gJy4uL2lucHV0cy9JbnB1dERhdGEnO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVyczogd3BGaWx0ZXJzLFxuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmN1c3RvbS5mb3JtdWxhLm1hY3JvJyxcblx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRhdHRhY2hDb25zdE5hbWVzcGFjZSxcbik7XG5cbi8qKlxuICogQHBhcmFtIHJvb3QgICAge0lucHV0RGF0YXxPYnNlcnZhYmxlfVxuICogQHBhcmFtIG9wdGlvbnMge3tmb3JjZUZ1bmN0aW9uOiBib29sZWFufX1cbiAqL1xuZnVuY3Rpb24gQ2FsY3VsYXRlZEZvcm11bGEoXG5cdHJvb3QsXG5cdG9wdGlvbnMgPSB7fSxcbikge1xuXHR0aGlzLnBhcnRzICAgICAgICA9IFtdO1xuXHR0aGlzLnJlbGF0ZWQgICAgICA9IFtdO1xuXHR0aGlzLnJlbGF0ZWRBdHRycyA9IFtdO1xuXHR0aGlzLnJlZ2V4cCAgICAgICA9IC8lKFtcXHdcXC1dLio/XFxTPyklL2c7XG5cdHRoaXMud2F0Y2hlcnMgICAgID0gW107XG5cblx0Y29uc3QgeyBmb3JjZUZ1bmN0aW9uID0gZmFsc2UgfSA9IG9wdGlvbnM7XG5cblx0dGhpcy5mb3JjZUZ1bmN0aW9uID0gZm9yY2VGdW5jdGlvbjtcblxuXHRpZiAoIHJvb3QgaW5zdGFuY2VvZiBJbnB1dERhdGEgKSB7XG5cdFx0dGhpcy5pbnB1dCA9IHJvb3Q7XG5cdH1cblxuXHR0aGlzLnJvb3QgPSB0aGlzLmlucHV0Py5yb290ID8/IHJvb3Q7XG59XG5cbkNhbGN1bGF0ZWRGb3JtdWxhLnByb3RvdHlwZSA9IHtcblx0Ly8gcmF3IHZhbHVlXG5cdGZvcm11bGE6IG51bGwsXG5cdHBhcnRzOiBbXSxcblx0cmVsYXRlZDogW10sXG5cdHJlbGF0ZWRBdHRyczogW10sXG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0aW5wdXQ6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZXxPYnNlcnZhYmxlUm93fVxuXHQgKi9cblx0cm9vdDogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWdFeHB9XG5cdCAqL1xuXHRyZWdleHA6IG51bGwsXG5cdGZvcmNlRnVuY3Rpb246IGZhbHNlLFxuXHQvKipcblx0ICogQHR5cGUge0Z1bmN0aW9ufVxuXHQgKi9cblx0c2V0UmVzdWx0OiAoKSA9PiB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnQ2FsY3VsYXRlZEZvcm11bGEuc2V0UmVzdWx0IGlzIG5vdCBzZXQhJyApO1xuXHR9LFxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICByZWxhdGVkSW5wdXQge0lucHV0RGF0YX1cblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdHJlbGF0ZWRDYWxsYmFjayggcmVsYXRlZElucHV0ICkge1xuXHRcdHJldHVybiByZWxhdGVkSW5wdXQudmFsdWUuY3VycmVudDtcblx0fSxcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKi9cblx0b2JzZXJ2ZSggdmFsdWUgKSB7XG5cdFx0dGhpcy5mb3JtdWxhID0gdmFsdWU7XG5cblx0XHRpZiAoICFBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0dGhpcy5vYnNlcnZlSXRlbSggdmFsdWUgKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0dGhpcy5vYnNlcnZlSXRlbSggaXRlbSApO1xuXHRcdH0gKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB2YWx1ZSB7U3RyaW5nfVxuXHQgKi9cblx0b2JzZXJ2ZUl0ZW0oIHZhbHVlICkge1xuXHRcdGxldCBtYXRjaDtcblx0XHRsZXQgcHJldkluZGV4ID0gMDtcblxuXHRcdHZhbHVlICs9ICcnO1xuXG5cdFx0d2hpbGUgKCAoXG5cdFx0XHRtYXRjaCA9IHRoaXMucmVnZXhwLmV4ZWMoIHZhbHVlIClcblx0XHQpICE9PSBudWxsICkge1xuXHRcdFx0Y29uc3QgcGFydCA9IHRoaXMub2JzZXJ2ZU1hY3JvKCBtYXRjaFsgMSBdICk7XG5cblx0XHRcdGlmICggMCAhPT0gbWF0Y2guaW5kZXggKSB7XG5cdFx0XHRcdHRoaXMucGFydHMucHVzaCggdmFsdWUuc2xpY2UoIHByZXZJbmRleCwgbWF0Y2guaW5kZXggKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmV2SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWyAwIF0ubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIGZhbHNlID09PSBwYXJ0ICkge1xuXHRcdFx0XHR0aGlzLm9uTWlzc2luZ1BhcnQoIG1hdGNoWyAwIF0gKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBhcnRzLnB1c2goIHBhcnQgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBzYXZlIGxhc3QgcGFydFxuXHRcdGlmICggcHJldkluZGV4ID09PSB2YWx1ZS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5wYXJ0cy5wdXNoKCB2YWx1ZS5zbGljZSggcHJldkluZGV4ICkgKTtcblxuXHRcdGlmICggMSA9PT0gdGhpcy5wYXJ0cy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLnBhcnRzID0gW107XG5cdFx0fVxuXHR9LFxuXHQvKipcblx0ICogQHBhcmFtIGlucHV0TWF0Y2gge1N0cmluZ31cblx0ICovXG5cdG9uTWlzc2luZ1BhcnQoIGlucHV0TWF0Y2ggKSB7XG5cdFx0dGhpcy5wYXJ0cy5wdXNoKCBpbnB1dE1hdGNoICk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gZmllbGROYW1lIHtTdHJpbmd9XG5cdCAqL1xuXHRpc0ZpZWxkTm9kZUV4aXN0cyggZmllbGROYW1lICkge1xuXG5cdFx0Y29uc3QgaXNGaWVsZE5vZGUgPSB0aGlzLnJvb3QuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XG5cblx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gaXNGaWVsZE5vZGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCBub2RlIGV4aXN0cyBpbiB0aGUgcm9vdE5vZGUuXG5cdFx0ICogSWYgdGhlIG5vZGUgZG9lcyBub3QgZXhpc3QsIGFuYWx5emUgdGhlIGZvcm11bGEgdG8gZGV0ZXJtaW5lIGFuIGFkanVzdGVkIHZhbHVlXG5cdFx0ICogYmFzZWQgb24gdGhlIG9wZXJhdG9ycyBzdXJyb3VuZGluZyB0aGUgcGxhY2Vob2xkZXIuXG5cdFx0ICogQHNpbmNlIDMuNC41XG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMTc4NlxuXHRcdCAqL1xuXHRcdGxldCBleGlzdE5vZGUgPSB0aGlzLnJvb3Qucm9vdE5vZGVbIGZpZWxkTmFtZSBdXG5cdFx0XHRcdFx0XHR8fCB0aGlzLnJvb3Qucm9vdE5vZGVbIGZpZWxkTmFtZSArICdbXScgXVxuXHRcdFx0XHRcdFx0fHwgdGhpcy5yb290LnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1maWVsZC1uYW1lPVwiJyArIGZpZWxkTmFtZSArICdcIl0nKTtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZW4gd2UgY2FsbCBxdWVyeVNlbGVjdG9yQWxsIGl0IHJldHVybnMgZW1wdHkgTm9kZUxpc3QgYXJyYXkgaWYgdGhlIGVsZW1lbnQgbm90IGZvdW5kLCBzbyB3ZSBuZWVkIHRvIHJlc2V0IGl0XG5cdFx0ICovXG5cdFx0aWYgKCBleGlzdE5vZGUgJiYgMCA9PT0gZXhpc3ROb2RlLmxlbmd0aCApIHtcblx0XHRcdGV4aXN0Tm9kZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHNlZSAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMzczMFxuXHRcdCAqIEBzaW5jZSAzLjQuNS4xXG5cdFx0ICovXG5cdFx0ZXhpc3ROb2RlID0gd3BGaWx0ZXJzKFxuXHRcdFx0J2pldC5mYi5mb3JtdWxhLm5vZGUuZXhpc3RzJyxcblx0XHRcdGV4aXN0Tm9kZSxcblx0XHRcdGZpZWxkTmFtZSxcblx0XHRcdHRoaXNcblx0XHQpO1xuXG5cdFx0cmV0dXJuIGV4aXN0Tm9kZTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgY3VycmVudCB7U3RyaW5nfVxuXHQgKiBAcmV0dXJuIHsoZnVuY3Rpb24oKTogKil8Kn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5cdG9ic2VydmVNYWNybyggY3VycmVudCApIHtcblx0XHRpZiAoIG51bGwgPT09IHRoaXMuZm9ybXVsYSApIHtcblx0XHRcdHRoaXMuZm9ybXVsYSA9IGN1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tdW51c2VkLXZhcnMtYmVmb3JlLXJldHVyblxuXHRcdGNvbnN0IFsgbmFtZSwgLi4uZmlsdGVycyBdID0gY3VycmVudC5zcGxpdCggJ3wnICk7XG5cdFx0Y29uc3QgcGFyc2VkTmFtZSAgICAgICAgICAgPSBuYW1lLm1hdGNoKCAvW1xcd1xcLTpdKy9nICk7XG5cblx0XHRpZiAoICFwYXJzZWROYW1lICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IFsgZmllbGROYW1lLCAuLi5wYXJhbXMgXSA9IHBhcnNlZE5hbWU7XG5cblx0XHQvKipcblx0XHQgKiBAc2VlICAgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEzNzMwXG5cdFx0ICogQHNpbmNlIDMuNC41LjEgKG1vdmVkIHRvIGEgbWV0aG9kIGFuZCBhZGRlZCBhZGRpdGlvbmFsIGNoZWNrcylcblx0XHQgKi9cblx0XHRjb25zdCBleGlzdE5vZGUgPSB0aGlzLmlzRmllbGROb2RlRXhpc3RzKCBmaWVsZE5hbWUgKTtcblxuXHRcdGlmICggdW5kZWZpbmVkID09PSBleGlzdE5vZGUgKSB7XG5cdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoIGAlJHtmaWVsZE5hbWV9JWAsICdnJyApO1xuXG5cdFx0XHRsZXQgYWRqdXN0ZWRWYWx1ZSAgID0gMDtcblx0XHRcdGxldCBhZGp1c3RlZEZvcm11bGEgPSB0aGlzLmZvcm11bGE7XG5cdFx0XHRsZXQgbWF0Y2g7XG5cblx0XHRcdHdoaWxlICggbnVsbCAhPT0gKCBtYXRjaCA9IHJlZ2V4LmV4ZWMoIHRoaXMuZm9ybXVsYSApICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYmVmb3JlID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCAtIDEgXTtcblx0XHRcdFx0Y29uc3QgYWZ0ZXIgID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCBdO1xuXG5cdFx0XHRcdGlmICggJyonID09PSBiZWZvcmUgfHwgJy8nID09PSBiZWZvcmUgfHwgJyonID09PSBhZnRlciB8fCAnLycgPT09IGFmdGVyICkge1xuXHRcdFx0XHRcdGlmICggJy8nID09PSBiZWZvcmUgfHwgKCAnKicgPT09IGJlZm9yZSAmJiAnKicgPT09IGFmdGVyICkgKSB7XG5cdFx0XHRcdFx0XHRhZGp1c3RlZFZhbHVlID0gMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhZGp1c3RlZEZvcm11bGEgPSBhZGp1c3RlZEZvcm11bGEucmVwbGFjZSggbWF0Y2hbMF0sIGFkanVzdGVkVmFsdWUgKTtcblxuXHRcdFx0dGhpcy5mb3JtdWxhID0gYWRqdXN0ZWRGb3JtdWxhO1xuXG5cdFx0XHRyZXR1cm4gYWRqdXN0ZWRWYWx1ZTtcblx0XHR9XG5cblx0XHRjb25zdCByZWxhdGVkSW5wdXQgPSBmaWVsZE5hbWUgIT09ICd0aGlzJ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5yb290LmdldElucHV0KCBmaWVsZE5hbWUgKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dDtcblxuXHRcdGlmICggIXJlbGF0ZWRJbnB1dCAmJiAhZmllbGROYW1lLmluY2x1ZGVzKCAnOjonICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tdW51c2VkLXZhcnMtYmVmb3JlLXJldHVyblxuXHRcdGNvbnN0IGZpbHRlcnNMaXN0ID0gZ2V0RmlsdGVycyggZmlsdGVycyApO1xuXG5cdFx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcblx0XHRcdGNvbnN0IGN1c3RvbVZhbHVlID0gd3BGaWx0ZXJzKFxuXHRcdFx0XHQnamV0LmZiLmN1c3RvbS5mb3JtdWxhLm1hY3JvJyxcblx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdGZpZWxkTmFtZSxcblx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VzdG9tVmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlKCksIGZpbHRlcnNMaXN0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoIGN1c3RvbVZhbHVlLCBmaWx0ZXJzTGlzdCApO1xuXHRcdH1cblxuXHRcdGlmICggIXRoaXMucmVsYXRlZC5pbmNsdWRlcyggcmVsYXRlZElucHV0Lm5hbWUgKSApIHtcblx0XHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xuXG5cdFx0XHR0aGlzLndhdGNoZXJzLnB1c2goXG5cdFx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoICFwYXJhbXM/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdFx0XHRcdHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSxcblx0XHRcdFx0ZmlsdGVyc0xpc3QsXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IFsgYXR0ck5hbWUgXSA9IHBhcmFtcztcblxuXHRcdGlmICggIXJlbGF0ZWRJbnB1dC5hdHRycy5oYXNPd25Qcm9wZXJ0eSggYXR0ck5hbWUgKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0Jhc2VIdG1sQXR0cn1cblx0XHQgKi9cblx0XHRjb25zdCBodG1sQXR0ciA9IHJlbGF0ZWRJbnB1dC5hdHRyc1sgYXR0ck5hbWUgXTtcblxuXHRcdGlmICggIXRoaXMucmVsYXRlZEF0dHJzLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICkgKSB7XG5cdFx0XHR0aGlzLnJlbGF0ZWRBdHRycy5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICk7XG5cblx0XHRcdHRoaXMud2F0Y2hlcnMucHVzaChcblx0XHRcdFx0aHRtbEF0dHIudmFsdWUud2F0Y2goICgpID0+IHRoaXMuc2V0UmVzdWx0KCkgKSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICgpID0+IGFwcGx5RmlsdGVycyggaHRtbEF0dHIudmFsdWUuY3VycmVudCwgZmlsdGVyc0xpc3QgKTtcblx0fSxcblx0Y2FsY3VsYXRlU3RyaW5nKCkge1xuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybXVsYTtcblx0XHR9XG5cblx0XHRjb25zdCB7XG5cdFx0XHQgICAgICBhcHBseUZpbHRlcnM6IGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMgPSBmYWxzZSxcblx0XHQgICAgICB9ID0gd2luZG93Py5KZXRGb3JtQnVpbGRlck1haW4/LmZpbHRlcnMgPz8ge307XG5cblx0XHRyZXR1cm4gdGhpcy5wYXJ0cy5tYXAoIGN1cnJlbnQgPT4ge1xuXHRcdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY3VycmVudCApIHtcblxuXHRcdFx0XHRpZiAoICF0aGlzLmlucHV0Py5ub2Rlc1xuXHRcdFx0XHRcdHx8IGZhbHNlID09PSBkZXByZWNhdGVkQXBwbHlGaWx0ZXJzXG5cdFx0XHRcdFx0fHwgJ3N0cmluZycgIT09IHR5cGVvZiBjdXJyZW50XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y3VycmVudCA9IHdwRmlsdGVycyhcblx0XHRcdFx0XHQnamV0LmZiLm9uQ2FsY3VsYXRlLnBhcnQnLFxuXHRcdFx0XHRcdGN1cnJlbnQsXG5cdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRyZXR1cm4gZGVwcmVjYXRlZEFwcGx5RmlsdGVycyhcblx0XHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1mb3JtdWxhLWJlZm9yZS12YWx1ZScsXG5cdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHRqUXVlcnkoIHRoaXMuaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gY3VycmVudCgpO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQgICAgICAgbnVsbCA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICAnJyA9PT0gcmVzdWx0IHx8XG5cdFx0XHRcdCAgICAgICBOdW1iZXIuaXNOYU4oIHJlc3VsdCApXG5cdFx0XHQgICAgICAgKSA/IHRoaXMuZW1wdHlWYWx1ZSgpIDogcmVzdWx0O1xuXHRcdH0gKS5qb2luKCAnJyApO1xuXHR9LFxuXHRlbXB0eVZhbHVlKCkge1xuXHRcdHJldHVybiAnJztcblx0fSxcblx0Y2FsY3VsYXRlKCkge1xuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICYmICF0aGlzLmZvcmNlRnVuY3Rpb24gKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHRcdH1cblxuXHRcdGNvbnN0IGZvcm11bGEgPSB0aGlzLmNhbGN1bGF0ZVN0cmluZygpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5ldyBGdW5jdGlvbiggJ3JldHVybiAnICsgZm9ybXVsYSApXG5cdFx0XHQpKCk7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHQvL2NvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHR0aGlzLnNob3dFcnJvciggZm9ybXVsYSApO1xuXHRcdH1cblxuXHR9LFxuXHRjbGVhcldhdGNoZXJzKCkge1xuXHRcdHRoaXMud2F0Y2hlcnMuZm9yRWFjaChcblx0XHRcdGN1cnJlbnQgPT4gJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGN1cnJlbnQgJiYgY3VycmVudCgpLFxuXHRcdCk7XG5cdFx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcblx0XHR0aGlzLnJlbGF0ZWRBdHRycyA9IFtdO1xuXHRcdHRoaXMucmVsYXRlZCAgICAgID0gW107XG5cdH0sXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblx0c2hvd0Vycm9yKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZ3JvdXAoXG5cdFx0XHRfXyhcblx0XHRcdFx0J0pldEZvcm1CdWlsZGVyOiBZb3UgaGF2ZSBpbnZhbGlkIGNhbGN1bGF0ZWQgZm9ybXVsYScsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdHRoaXMuc2hvd0Vycm9yRGV0YWlscyggZm9ybXVsYSApO1xuXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHR9LFxuXHRzaG93RXJyb3JEZXRhaWxzKCBmb3JtdWxhICkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBpbml0aWFsIGZvcm11bGFcblx0XHRcdFx0X18oICdJbml0aWFsOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHR0aGlzLmZvcm11bGEsXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGNvbXB1dGVkIGZvcm11bGFcblx0XHRcdFx0X18oICdDb21wdXRlZDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0Zm9ybXVsYSxcblx0XHRcdCksXG5cdFx0KTtcblxuXHRcdGlmICggIXRoaXMuaW5wdXQgJiYgIXRoaXMucm9vdD8ucGFyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5pbnB1dCApIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdHNwcmludGYoXG5cdFx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gZmlsZWQgbmFtZVxuXHRcdFx0XHRcdF9fKCAnRmllbGQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdFx0dGhpcy5pbnB1dC5wYXRoLmpvaW4oICcuJyApLFxuXHRcdFx0XHQpLFxuXHRcdFx0KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5yb290LnBhcmVudC5maW5kSW5kZXgoIHRoaXMucm9vdCApO1xuXG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdHNwcmludGYoXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIHBhdGggdG8gY3VycmVudCBmaWVsZFxuXHRcdFx0XHRfXyggJ1Njb3BlOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0Li4udGhpcy5yb290LnBhcmVudC5wYXRoLFxuXHRcdFx0XHRcdC0xID09PSBpbmRleCA/ICcnIDogaW5kZXgsXG5cdFx0XHRcdF0uZmlsdGVyKCBCb29sZWFuICkuam9pbiggJy4nICksXG5cdFx0XHQpLFxuXHRcdCk7XG5cdH0sXG5cdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEZvcm11bGE7XG4iLCJmdW5jdGlvbiBhcHBseUZpbHRlcnMoIHZhbHVlLCBmaWx0ZXJzICkge1xuXHRpZiAoIG51bGwgPT09IGZpbHRlcnMgfHwgIWZpbHRlcnM/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0Zm9yICggY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMgKSB7XG5cdFx0dmFsdWUgPSBmaWx0ZXIuYXBwbHlXaXRoUHJvcHMoIHZhbHVlICk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGx5RmlsdGVyczsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBDdXJyZW50RGF0ZSBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9DdXJyZW50RGF0ZSc7XG5pbXBvcnQgTWluX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9NaW5fSW5fU2VjJztcbmltcG9ydCBNb250aF9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvTW9udGhfSW5fU2VjJztcbmltcG9ydCBIb3VyX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9Ib3VyX0luX1NlYyc7XG5pbXBvcnQgRGF5X0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9EYXlfSW5fU2VjJztcbmltcG9ydCBZZWFyX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9ZZWFyX0luX1NlYyc7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzOiB3cEFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0U3RhdGljRnVuY3Rpb25zID0gKCkgPT4gd3BBcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuc3RhdGljLmZ1bmN0aW9ucycsXG5cdFtcblx0XHRDdXJyZW50RGF0ZSxcblx0XHRNaW5fSW5fU2VjLFxuXHRcdE1vbnRoX0luX1NlYyxcblx0XHRIb3VyX0luX1NlYyxcblx0XHREYXlfSW5fU2VjLFxuXHRcdFllYXJfSW5fU2VjLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7QmFzZUludGVybmFsTWFjcm9bXX1cbiAqL1xubGV0IHN0YXRpY0Z1bmN0aW9ucyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgc2x1Z1xuICogQHJldHVybiB7Ym9vbGVhbnxCYXNlSW50ZXJuYWxNYWNyb31cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY3Rpb24oIHNsdWcgKSB7XG5cdGlmICggIXN0YXRpY0Z1bmN0aW9ucy5sZW5ndGggKSB7XG5cdFx0c3RhdGljRnVuY3Rpb25zID0gZ2V0U3RhdGljRnVuY3Rpb25zKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBzdGF0aWNGdW5jdGlvbiBvZiBzdGF0aWNGdW5jdGlvbnMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBzdGF0aWNGdW5jdGlvbigpO1xuXG5cdFx0aWYgKCBjdXJyZW50LmdldElkKCkgIT09IHNsdWcgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtICByZXN1bHQgICAge1N0cmluZ31cbiAqIEBwYXJhbSAgZmllbGROYW1lIHtTdHJpbmd9XG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBhdHRhY2hDb25zdE5hbWVzcGFjZShcblx0cmVzdWx0LFxuXHRmaWVsZE5hbWUsXG4pIHtcblx0aWYgKCAhZmllbGROYW1lLmluY2x1ZGVzKCAnQ1Q6OicgKSApIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGZpZWxkTmFtZSA9IGZpZWxkTmFtZS5yZXBsYWNlKCAnQ1Q6OicsICcnICk7XG5cblx0Y29uc3Qgc3RhdGljRnVuYyA9IGdldEZ1bmN0aW9uKCBmaWVsZE5hbWUgKTtcblxuXHRpZiAoIGZhbHNlID09PSBzdGF0aWNGdW5jICkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGljRnVuYy5nZXRSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXR0YWNoQ29uc3ROYW1lc3BhY2U7IiwiZnVuY3Rpb24gQmFzZUludGVybmFsTWFjcm8oKSB7XG59XG5cbkJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSA9IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuXHQvKipcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0SWQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJld3JpdGUgdGhpcyBtZXRob2QnICk7XG5cdH0sXG5cdGdldFJlc3VsdCAoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnWW91IG5lZWQgdG8gcmV3cml0ZSB0aGlzIG1ldGhvZCcgKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VJbnRlcm5hbE1hY3JvOyIsImltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcblxuZnVuY3Rpb24gQ3VycmVudERhdGUoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkICAgICA9ICgpID0+ICdDdXJyZW50RGF0ZSc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5cbkN1cnJlbnREYXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50RGF0ZTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gRGF5X0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgPSAoKSA9PiAnRGF5X0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLkRheV9Jbl9TZWM7XG59XG5cbkRheV9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IERheV9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIEhvdXJfSW5fU2VjKCkge1xuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRJZCA9ICgpID0+ICdIb3VyX0luX1NlYyc7XG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLkhvdXJfSW5fU2VjO1xufVxuXG5Ib3VyX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgSG91cl9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIE1pbl9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkID0gKCkgPT4gJ01pbl9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5NaW5fSW5fU2VjO1xufVxuXG5NaW5fSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBNaW5fSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBNb250aF9Jbl9TZWMoKSB7XG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldElkICAgICA9ICgpID0+ICdNb250aF9Jbl9TZWMnO1xuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5Nb250aF9Jbl9TZWM7XG59XG5cbk1vbnRoX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBZZWFyX0luX1NlYygpIHtcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ1llYXJfSW5fU2VjJztcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuWWVhcl9Jbl9TZWM7XG59XG5cblllYXJfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBZZWFyX0luX1NlYzsiLCJjb25zdCBDb25zdGFudHMgPSB7XG5cdE1pbGxpX0luX1NlYzogMTAwMCxcblx0U2VjX0luX01pbjogNjAsXG5cdE1pbl9Jbl9Ib3VyOiA2MCxcblx0SG91cl9Jbl9EYXk6IDI0LFxuXHREYXlfSW5fTW9udGg6IDMwLFxuXHRZZWFyX0luX0RheTogMzY1LFxuXHRLYl9Jbl9CeXRlczogMTAyNCxcbn07XG5cbkNvbnN0YW50cy5NaW5fSW5fU2VjICAgPSBDb25zdGFudHMuU2VjX0luX01pbiAqIENvbnN0YW50cy5NaWxsaV9Jbl9TZWM7XG5Db25zdGFudHMuSG91cl9Jbl9TZWMgID0gQ29uc3RhbnRzLk1pbl9Jbl9Ib3VyICogQ29uc3RhbnRzLk1pbl9Jbl9TZWM7XG5Db25zdGFudHMuRGF5X0luX1NlYyAgID0gQ29uc3RhbnRzLkhvdXJfSW5fRGF5ICogQ29uc3RhbnRzLkhvdXJfSW5fU2VjO1xuQ29uc3RhbnRzLk1vbnRoX0luX1NlYyA9IENvbnN0YW50cy5EYXlfSW5fTW9udGggKiBDb25zdGFudHMuRGF5X0luX1NlYztcbkNvbnN0YW50cy5ZZWFyX0luX1NlYyAgPSBDb25zdGFudHMuWWVhcl9Jbl9EYXkgKiBDb25zdGFudHMuRGF5X0luX1NlYztcbkNvbnN0YW50cy5NYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuS2JfSW5fQnl0ZXMgKiAxMDI0O1xuQ29uc3RhbnRzLkdiX0luX0J5dGVzICA9IENvbnN0YW50cy5NYl9Jbl9CeXRlcyAqIDEwMjQ7XG5Db25zdGFudHMuVGJfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLkdiX0luX0J5dGVzICogMTAyNDtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkRGF5RmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZERheSc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGRheXMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0ZGF5cyA9IGRheXMgPyArKFxuXHRcdFx0ZGF5cy50cmltKClcblx0XHQpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldERhdGUoIGN1cnJlbnQuZ2V0RGF0ZSgpICsgZGF5cyApO1xuXHR9O1xufVxuXG5BZGREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGREYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBBZGRIb3VyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZEhvdXInO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBob3VycyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdGhvdXJzID0gaG91cnMgPyArKFxuXHRcdFx0aG91cnMudHJpbSgpXG5cdFx0KSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRIb3VycyggY3VycmVudC5nZXRIb3VycygpICsgaG91cnMgKTtcblx0fTtcbn1cblxuQWRkSG91ckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEhvdXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBBZGRNaW5GaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnYWRkTWluJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWludXRlcyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdG1pbnV0ZXMgPSBtaW51dGVzID8gKyhcblx0XHRcdG1pbnV0ZXMudHJpbSgpXG5cdFx0KSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBjdXJyZW50LmdldE1pbnV0ZXMoKSArIG1pbnV0ZXMgKTtcblx0fTtcbn1cblxuQWRkTWluRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTWluRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkRGF5RmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2FkZE1vbnRoJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGhzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdG1vbnRocyA9IG1vbnRocyA/ICttb250aHMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldE1vbnRoKCBjdXJyZW50LmdldE1vbnRoKCkgKyBtb250aHMgKTtcblx0fTtcbn1cblxuQWRkRGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gQWRkWWVhckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdhZGRZZWFyJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgeWVhcnMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0eWVhcnMgPSB5ZWFycyA/ICt5ZWFycy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIGN1cnJlbnQuZ2V0RnVsbFllYXIoKSArIHllYXJzICk7XG5cdH07XG59XG5cbkFkZFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBBZGRZZWFyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIEZhbGxCYWNrRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2lmRW1wdHknO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBmYWxsYmFjayApIHtcblx0XHRyZXR1cm4gaXNFbXB0eSggdmFsdWUgKSA/IHZhbHVlIDogZmFsbGJhY2s7XG5cdH07XG59XG5cbkZhbGxCYWNrRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRmFsbEJhY2tGaWx0ZXI7IiwiZnVuY3Rpb24gRmlsdGVyKCkge1xuXHR0aGlzLnByb3BzID0gW107XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5GaWx0ZXIucHJvdG90eXBlLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvciggJ2dldFNsdWcgaXMgZW1wdHknICk7XG59O1xuRmlsdGVyLnByb3RvdHlwZS5zZXRQcm9wcyAgICAgICA9IGZ1bmN0aW9uICggcHJvcHMgKSB7XG5cdHRoaXMucHJvcHMucHVzaCggLi4ucHJvcHMgKTtcbn07XG5GaWx0ZXIucHJvdG90eXBlLmFwcGx5V2l0aFByb3BzID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0cmV0dXJuIHRoaXMuYXBwbHkoIHZhbHVlLCAuLi50aGlzLnByb3BzICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gIHZhbHVlXG4gKiBAcGFyYW0gIHByb3BzXG4gKiBAcmV0dXJuIHsqfVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbkZpbHRlci5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCAuLi5wcm9wcyApIHtcblx0cmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuXG5mdW5jdGlvbiBMZW5ndGhGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnbGVuZ3RoJztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gdmFsdWU/Lmxlbmd0aCA/PyAwO1xuXHR9O1xufVxuXG5MZW5ndGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBMZW5ndGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXREYXlGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2V0RGF5Jztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZGF5ICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdGRheSA9IGRheSA/ICtkYXkudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldERhdGUoIGRheSApO1xuXHR9O1xufVxuXG5TZXREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXREYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXRIb3VyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NldEhvdXInO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBob3VyICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRob3VyID0gaG91ciA/ICtob3VyLnRyaW0oKSA6IDA7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRIb3VycyggaG91ciApO1xuXHR9O1xufVxuXG5TZXRIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0SG91ckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFNldE1pbkZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXRNaW4nO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBtaW4gKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcdG1pbiA9IG1pbiA/ICttaW4udHJpbSgpIDogMDtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldE1pbnV0ZXMoIG1pbiApO1xuXHR9O1xufVxuXG5TZXRNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXRNaW5GaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTZXRNb250aEZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXRNb250aCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1vbnRoICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdG1vbnRoID0gbW9udGggPyArbW9udGgudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldE1vbnRoKCBtb250aCApO1xuXHR9O1xufVxuXG5TZXRNb250aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldE1vbnRoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU2V0WWVhckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzZXRZZWFyJztcblx0fTtcblxuXHR0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKCB2YWx1ZSwgeWVhciApIHtcblx0XHR5ZWFyID0geWVhciA/ICt5ZWFyLnRyaW0oKSA6IGZhbHNlO1xuXG5cdFx0aWYgKCAheWVhciApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdXJyZW50LnNldEZ1bGxZZWFyKCB5ZWFyICk7XG5cdH07XG59XG5cblNldFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTZXRZZWFyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3REYXlGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc3ViRGF5Jztcblx0fTtcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZGF5cyApIHtcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdGRheXMgPSBkYXlzID8gK2RheXMudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldERhdGUoIGN1cnJlbnQuZ2V0RGF0ZSgpIC0gZGF5cyApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0RGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gU3VidHJhY3RIb3VyRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1YkhvdXInO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBob3VyICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdGhvdXIgPSBob3VyID8gK2hvdXIudHJpbSgpIDogMTtcblxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBjdXJyZW50LmdldEhvdXJzKCkgLSBob3VyICk7XG5cdH07XG59XG5cblN1YnRyYWN0SG91ckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0SG91ckZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0TWluRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1Yk1pbic7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbnV0ZXMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cdFx0bWludXRlcyA9IG1pbnV0ZXMgPyArbWludXRlcy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggY3VycmVudC5nZXRNaW51dGVzKCkgLSBtaW51dGVzICk7XG5cdH07XG59XG5cblN1YnRyYWN0TWluRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RNaW5GaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBTdWJ0cmFjdE1vbnRoRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3N1Yk1vbnRoJztcblx0fTtcblxuXHR0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGhzICkge1xuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcblxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0bW9udGhzID0gbW9udGhzID8gK21vbnRocy50cmltKCkgOiAxO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TW9udGgoIGN1cnJlbnQuZ2V0TW9udGgoKSAtIG1vbnRocyApO1xuXHR9O1xufVxuXG5TdWJ0cmFjdE1vbnRoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RNb250aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFN1YnRyYWN0WWVhckZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICdzdWJZZWFyJztcblx0fTtcblxuXHR0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKCB2YWx1ZSwgeWVhcnMgKSB7XG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHR5ZWFycyA9IHllYXJzID8gK3llYXJzLnRyaW0oKSA6IDE7XG5cblx0XHRyZXR1cm4gY3VycmVudC5zZXRGdWxsWWVhciggY3VycmVudC5nZXRGdWxsWWVhcigpIC0geWVhcnMgKTtcblx0fTtcbn1cblxuU3VidHJhY3RZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RZZWFyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcblxuZnVuY3Rpb24gVGltZXN0YW1wRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ1QnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xuXG5cdFx0cmV0dXJuIHRpbWU7XG5cdH07XG59XG5cblRpbWVzdGFtcEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVzdGFtcEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFRvRGF0ZUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b0RhdGUnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHJldHVybiB0b0RhdGUoIG5ldyBEYXRlKCB2YWx1ZSApICk7XG5cdH07XG59XG5cblRvRGF0ZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvRGF0ZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IHRvRGF0ZVRpbWUgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBUb0RhdGVUaW1lRmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3RvRGF0ZVRpbWUnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHJldHVybiB0b0RhdGVUaW1lKCBuZXcgRGF0ZSggdmFsdWUgKSApO1xuXHR9O1xufVxuXG5Ub0RhdGVUaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EYXRlVGltZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCB7IHRvVGltZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFRvVGltZUZpbHRlcigpIHtcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd0b1RpbWUnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHJldHVybiB0b1RpbWUoIG5ldyBEYXRlKCB2YWx1ZSApICk7XG5cdH07XG59XG5cblRvVGltZUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFRvVGltZUZpbHRlcjsiLCJmdW5jdGlvbiB6ZXJvZmlsbCggbnVtYmVyLCBjb3VudCApIHtcblx0bnVtYmVyID0gJycgKyBudW1iZXI7XG5cblx0aWYgKCBudW1iZXIubGVuZ3RoID49IGNvdW50ICkge1xuXHRcdHJldHVybiBudW1iZXI7XG5cdH1cblxuXHRjb25zdCB6ZXJvcyA9IG5ldyBBcnJheSggY291bnQgLSBudW1iZXIubGVuZ3RoICkuZmlsbCggMCApO1xuXG5cdHJldHVybiB6ZXJvcyArIG51bWJlcjtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZGF0ZSAge0RhdGV9XG4gKiBAcGFyYW0gaXNVdGNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZSggZGF0ZSwgaXNVdGMgPSB0cnVlICkge1xuXHRjb25zdCBtb250aCA9IGlzVXRjID8gZGF0ZS5nZXRVVENNb250aCgpIDogZGF0ZS5nZXRNb250aCgpO1xuXHRjb25zdCBkYXkgICA9IGlzVXRjID8gZGF0ZS5nZXRVVENEYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcblx0Y29uc3QgeWVhciAgPSBpc1V0YyA/IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuXHRyZXR1cm4gW1xuXHRcdHllYXIsXG5cdFx0emVyb2ZpbGwoIG1vbnRoICsgMSwgMiApLFxuXHRcdHplcm9maWxsKCBkYXksIDIgKSxcblx0XS5qb2luKCAnLScgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gZGF0ZSAge0RhdGV9XG4gKiBAcGFyYW0gaXNVdGNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZSggZGF0ZSwgaXNVdGMgPSB0cnVlICkge1xuXHRjb25zdCBob3VycyA9IGlzVXRjID8gZGF0ZS5nZXRVVENIb3VycygpIDogZGF0ZS5nZXRIb3VycygpO1xuXHRjb25zdCBtaW5zICA9IGlzVXRjID8gZGF0ZS5nZXRVVENNaW51dGVzKCkgOiBkYXRlLmdldE1pbnV0ZXMoKTtcblxuXHRyZXR1cm4gW1xuXHRcdHplcm9maWxsKCBob3VycywgMiApLFxuXHRcdHplcm9maWxsKCBtaW5zLCAyICksXG5cdF0uam9pbiggJzonICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGVUaW1lKCBkYXRlICkge1xuXHRyZXR1cm4gdG9EYXRlKCBkYXRlLCBmYWxzZSApICsgJ1QnICsgdG9UaW1lKCBkYXRlLCBmYWxzZSApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgdGltZU9yRGF0ZSB7U3RyaW5nfE51bWJlcn1cbiAqIEByZXR1cm4ge3t0aW1lOiBudW1iZXIsIHR5cGU6IHN0cmluZ319XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoIHRpbWVPckRhdGUgKSB7XG5cdGlmICggIU51bWJlci5pc05hTiggK3RpbWVPckRhdGUgKSApIHtcblx0XHRyZXR1cm4geyB0aW1lOiArdGltZU9yRGF0ZSwgdHlwZTogJ251bWJlcicgfTtcblx0fVxuXG5cdHRpbWVPckRhdGUgPSB0aW1lT3JEYXRlLnRvU3RyaW5nKCk7XG5cblx0Y29uc3QgZGF0ZVBhcnRzID0gdGltZU9yRGF0ZS5zcGxpdCggJy0nICk7XG5cblx0aWYgKCBkYXRlUGFydHMubGVuZ3RoID4gMSApIHtcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoIHRpbWVPckRhdGUgKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0aW1lOiBkYXRlLmdldFRpbWUoKSxcblx0XHRcdHR5cGU6ICdkYXRlJyxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3QgdGltZVBhcnRzID0gdGltZU9yRGF0ZS5zcGxpdCggJzonICk7XG5cdGNvbnN0IGNhbGxiYWNrcyA9IFtcblx0XHREYXRlLnByb3RvdHlwZS5zZXRIb3Vycyxcblx0XHREYXRlLnByb3RvdHlwZS5zZXRNaW51dGVzLFxuXHRcdERhdGUucHJvdG90eXBlLnNldFNlY29uZHMsXG5cdF07XG5cblx0Y29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XG5cblx0Zm9yICggY29uc3QgaW5kZXggaW4gdGltZVBhcnRzICkge1xuXHRcdGlmIChcblx0XHRcdCF0aW1lUGFydHMuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgfHxcblx0XHRcdCFjYWxsYmFja3MuaGFzT3duUHJvcGVydHkoIGluZGV4IClcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNhbGxiYWNrc1sgaW5kZXggXS5jYWxsKCB0aW1lLCB0aW1lUGFydHNbIGluZGV4IF0gKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dGltZTogdGltZS5nZXRUaW1lKCksXG5cdFx0dHlwZTogJ3RpbWUnLFxuXHR9O1xufVxuIiwiaW1wb3J0IExlbmd0aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyJztcbmltcG9ydCBGYWxsQmFja0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvRmFsbEJhY2tGaWx0ZXInO1xuaW1wb3J0IFRvRGF0ZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9EYXRlRmlsdGVyJztcbmltcG9ydCBUb1RpbWVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvVGltZUZpbHRlcic7XG5pbXBvcnQgVG9EYXRlVGltZUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9EYXRlVGltZUZpbHRlcic7XG5pbXBvcnQgQWRkWWVhckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkWWVhckZpbHRlcic7XG5pbXBvcnQgQWRkTW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyJztcbmltcG9ydCBBZGREYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZERheUZpbHRlcic7XG5pbXBvcnQgQWRkSG91ckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkSG91ckZpbHRlcic7XG5pbXBvcnQgQWRkTWluRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRNaW5GaWx0ZXInO1xuaW1wb3J0IFRpbWVzdGFtcEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVGltZXN0YW1wRmlsdGVyJztcbmltcG9ydCBTZXRIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRIb3VyRmlsdGVyJztcbmltcG9ydCBTZXRNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldE1pbkZpbHRlcic7XG5pbXBvcnQgU2V0RGF5RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXREYXlGaWx0ZXInO1xuaW1wb3J0IFNldFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldFllYXJGaWx0ZXInO1xuaW1wb3J0IFNldE1vbnRoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRNb250aEZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RIb3VyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdEhvdXJGaWx0ZXInO1xuaW1wb3J0IFN1YnRyYWN0RGF5RmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdERheUZpbHRlcic7XG5pbXBvcnQgU3VidHJhY3RNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0TWluRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdE1vbnRoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdE1vbnRoRmlsdGVyJztcbmltcG9ydCBTdWJ0cmFjdFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0WWVhckZpbHRlcic7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEB0eXBlIHtBcnJheTxGaWx0ZXI+fVxuICovXG5sZXQgZmlsdGVycyA9IFtdO1xuXG5jb25zdCBnZXRGaWx0ZXJJdGVtcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5maWx0ZXJzJyxcblx0W1xuXHRcdFNldFllYXJGaWx0ZXIsXG5cdFx0U2V0TW9udGhGaWx0ZXIsXG5cdFx0U2V0RGF5RmlsdGVyLFxuXHRcdFNldEhvdXJGaWx0ZXIsXG5cdFx0U2V0TWluRmlsdGVyLFxuXHRcdFN1YnRyYWN0WWVhckZpbHRlcixcblx0XHRTdWJ0cmFjdE1vbnRoRmlsdGVyLFxuXHRcdFN1YnRyYWN0RGF5RmlsdGVyLFxuXHRcdFN1YnRyYWN0SG91ckZpbHRlcixcblx0XHRTdWJ0cmFjdE1pbkZpbHRlcixcblx0XHRBZGRZZWFyRmlsdGVyLFxuXHRcdEFkZE1vbnRoRmlsdGVyLFxuXHRcdEFkZERheUZpbHRlcixcblx0XHRBZGRIb3VyRmlsdGVyLFxuXHRcdEFkZE1pbkZpbHRlcixcblx0XHRMZW5ndGhGaWx0ZXIsXG5cdFx0RmFsbEJhY2tGaWx0ZXIsXG5cdFx0VG9EYXRlRmlsdGVyLFxuXHRcdFRvVGltZUZpbHRlcixcblx0XHRUb0RhdGVUaW1lRmlsdGVyLFxuXHRcdFRpbWVzdGFtcEZpbHRlcixcblx0XSxcbik7XG5sZXQgcmVzcG9uc2UgICAgICAgICA9IFtdO1xuXG5mdW5jdGlvbiBwdXNoRmlsdGVyKCBuYW1lLCBwcm9wcyA9ICcnICkge1xuXHRpZiAoICFmaWx0ZXJzLmxlbmd0aCApIHtcblx0XHRmaWx0ZXJzID0gZ2V0RmlsdGVySXRlbXMoKTtcblx0fVxuXG5cdGxldCBmaWx0ZXI7XG5cblx0Zm9yICggbGV0IGN1cnJlbnQgb2YgZmlsdGVycyApIHtcblx0XHRjdXJyZW50ID0gbmV3IGN1cnJlbnQoKTtcblxuXHRcdGlmICggbmFtZSA9PT0gY3VycmVudC5nZXRTbHVnKCkgKSB7XG5cdFx0XHRmaWx0ZXIgPSBjdXJyZW50O1xuXG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZiAoICFmaWx0ZXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHByb3BzID0gcHJvcHMuc3BsaXQoICcsJyApLm1hcChcblx0XHRpdGVtID0+IGl0ZW0udHJpbSgpLFxuXHQpO1xuXG5cdGZpbHRlci5zZXRQcm9wcyggcHJvcHMgKTtcblx0cmVzcG9uc2UucHVzaCggZmlsdGVyICk7XG59XG5cbmZ1bmN0aW9uIGdldEZpbHRlcnMoIGZpbHRlcnNMaXN0ICkge1xuXHRpZiAoIG51bGwgPT09IGZpbHRlcnNMaXN0IHx8ICFmaWx0ZXJzTGlzdD8ubGVuZ3RoICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yICggY29uc3QgZmlsdGVyTmFtZSBvZiBmaWx0ZXJzTGlzdCApIHtcblx0XHRjb25zdCBtYXRjaGVzID0gZmlsdGVyTmFtZS5tYXRjaCggL14oXFx3KylcXCgoW14oKV0rKVxcKS8gKTtcblxuXHRcdGlmICggbnVsbCA9PT0gbWF0Y2hlcyApIHtcblx0XHRcdHB1c2hGaWx0ZXIoIGZpbHRlck5hbWUgKTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHVzaEZpbHRlciggbWF0Y2hlc1sgMSBdLCBtYXRjaGVzWyAyIF0gKTtcblx0fVxuXG5cdGNvbnN0IHRlbXBSZXNwb25zZSA9IFsgLi4ucmVzcG9uc2UgXTtcblx0cmVzcG9uc2UgICAgICAgICAgID0gW107XG5cblx0cmV0dXJuIHRlbXBSZXNwb25zZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RmlsdGVyczsiLCJpbXBvcnQgQ2FsY3VsYXRlZEZvcm11bGEgZnJvbSAnLi9DYWxjdWxhdGVkRm9ybXVsYSc7XG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvQmFzZUludGVybmFsTWFjcm8nO1xuaW1wb3J0IGdldEZpbHRlcnMgZnJvbSAnLi9nZXRGaWx0ZXJzJztcbmltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xuaW1wb3J0IHsgdG9EYXRlLCB0b0RhdGVUaW1lLCB0b1RpbWUsIGdldFRpbWVzdGFtcCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvRmlsdGVyJztcblxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XG5cdC4uLihcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxuXHQpLFxuXHRGaWx0ZXIsXG5cdENhbGN1bGF0ZWRGb3JtdWxhLFxuXHRCYXNlSW50ZXJuYWxNYWNybyxcbn07XG5cbndpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA/PyB7fVxuXHQpLFxuXHRnZXRGaWx0ZXJzLFxuXHRhcHBseUZpbHRlcnMsXG5cdHRvRGF0ZSxcblx0dG9EYXRlVGltZSxcblx0dG9UaW1lLFxuXHRnZXRUaW1lc3RhbXAsXG59O1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25zdCA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckNvbnN0ID8/IHt9XG5cdCksXG5cdC4uLkNvbnN0YW50cyxcbn07IiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTg0NzU4MC9ob3ctdG8tZGV0ZWN0LXNhZmFyaS1jaHJvbWUtaWUtZmlyZWZveC1hbmQtb3BlcmEtYnJvd3NlclxuXG5jb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4vLyBTYWZhcmkgMy4wKyBcIltvYmplY3QgSFRNTEVsZW1lbnRDb25zdHJ1Y3Rvcl1cIlxuY29uc3QgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KCB1c2VyQWdlbnQgKSB8fFxuXHQvY29uc3RydWN0b3IvaS50ZXN0KCB3aW5kb3cuSFRNTEVsZW1lbnQgKSB8fFxuXHQoXG5cdFx0KCBwICkgPT4ge1xuXHRcdFx0cmV0dXJuICdbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl0nID09PSBwLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHQpKCAhd2luZG93LnNhZmFyaSB8fCAoXG5cdFx0dHlwZW9mIHNhZmFyaSAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnNhZmFyaS5wdXNoTm90aWZpY2F0aW9uXG5cdCkgKTtcblxuY29uc3QgZW52aXJvbm1lbnQgPSB7XG5cdHNhZmFyaTogaXNTYWZhcmksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvQmFzZUh0bWxBdHRyJztcbmltcG9ydCBNYXhGaWxlc0h0bWxBdHRyIGZyb20gJy4vYXR0cnMvTWF4RmlsZXNIdG1sQXR0cic7XG5pbXBvcnQgTWF4RmlsZVNpemVIdG1sQXR0ciBmcm9tICcuL2F0dHJzL01heEZpbGVTaXplSHRtbEF0dHInO1xuaW1wb3J0IFJlbWFpbmluZ0NhbGNBdHRyIGZyb20gJy4vYXR0cnMvUmVtYWluaW5nQ2FsY0F0dHInO1xuaW1wb3J0IEZpbGVFeHRlbnNpb25IdG1sQXR0ciBmcm9tICcuL2F0dHJzL0ZpbGVFeHRlbnNpb25IdG1sQXR0cic7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEBwYXJhbSAgY2FsbGJhY2tzIHtGdW5jdGlvbltdfVxuICogQHJldHVybiB7UHJvbWlzZTwqPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYWxsUmVqZWN0ZWQoIGNhbGxiYWNrcyApIHtcblx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChcblx0XHRjYWxsYmFja3MubWFwKCBjdXJyZW50ID0+IG5ldyBQcm9taXNlKCBjdXJyZW50ICkgKSxcblx0KTtcblxuXHRpZiAoIHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uZGV2bW9kZSApIHtcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdFx0Y29uc29sZS5ncm91cCggJ2FsbFJlamVjdGVkJyApO1xuXHRcdGNvbnNvbGUuaW5mbyggLi4ucmVzdWx0cyApO1xuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblx0fVxuXG5cdGNvbnN0IGludmFsaWQgPSByZXN1bHRzLmZpbHRlcihcblx0XHQoIGVycm9yICkgPT4gJ3JlamVjdGVkJyA9PT0gZXJyb3Iuc3RhdHVzLFxuXHQpO1xuXG5cdHJldHVybiBpbnZhbGlkLm1hcCggKCB7IHJlYXNvbiwgdmFsdWUgfSApID0+IHtcblx0XHRyZXR1cm4gcmVhc29uPy5sZW5ndGggPyByZWFzb25bIDAgXSA6IChcblx0XHRcdHJlYXNvbiA/PyB2YWx1ZVxuXHRcdCk7XG5cdH0gKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UoKSB7XG5cdGNvbnN0IGxhbmcgPSB3aW5kb3c/Lm5hdmlnYXRvcj8ubGFuZ3VhZ2VzPy5sZW5ndGhcblx0ICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbIDAgXVxuXHQgICAgICAgICAgICAgOiB3aW5kb3c/Lm5hdmlnYXRvcj8ubGFuZ3VhZ2U7XG5cblx0cmV0dXJuIGxhbmcgPz8gJ2VuLVVTJztcbn1cblxuY29uc3QgZ2V0SW5wdXRIdG1sQXR0ciA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5pbnB1dC5odG1sLmF0dHJzJyxcblx0W1xuXHRcdCdtaW4nLFxuXHRcdCdtYXgnLFxuXHRcdCdtaW5MZW5ndGgnLFxuXHRcdCdtYXhMZW5ndGgnLFxuXHRcdE1heEZpbGVzSHRtbEF0dHIsXG5cdFx0TWF4RmlsZVNpemVIdG1sQXR0cixcblx0XHRSZW1haW5pbmdDYWxjQXR0cixcblx0XHRGaWxlRXh0ZW5zaW9uSHRtbEF0dHIsXG5cdF0sXG4pO1xuXG4vKipcbiAqIEB0eXBlIHtCYXNlSHRtbEF0dHJbXX1cbiAqL1xubGV0IGlucHV0SHRtbEF0dHJzID0gW107XG5cbi8qKlxuICogQHBhcmFtIG5hbWUge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RGVmYXVsdEF0dHJCeU5hbWUoIG5hbWUgKSB7XG5cdGNvbnN0IGF0dHIgICAgPSBuZXcgQmFzZUh0bWxBdHRyKCk7XG5cdGF0dHIuYXR0ck5hbWUgPSBuYW1lO1xuXG5cdHJldHVybiBhdHRyO1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxuICovXG5mdW5jdGlvbiBzZXRBdHRycyggaW5wdXQgKSB7XG5cdGlmICggIWlucHV0SHRtbEF0dHJzLmxlbmd0aCApIHtcblx0XHRpbnB1dEh0bWxBdHRycyA9IGdldElucHV0SHRtbEF0dHIoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGlucHV0SHRtbEF0dHIgb2YgaW5wdXRIdG1sQXR0cnMgKSB7XG5cdFx0bGV0IGN1cnJlbnQ7XG5cdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGlucHV0SHRtbEF0dHIgKSB7XG5cdFx0XHRjdXJyZW50ID0gZ2V0RGVmYXVsdEF0dHJCeU5hbWUoIGlucHV0SHRtbEF0dHIgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRjdXJyZW50ID0gbmV3IGlucHV0SHRtbEF0dHIoKTtcblx0XHR9XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBpbnB1dCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlucHV0LmF0dHJzWyBjdXJyZW50LmF0dHJOYW1lIF0gPSBjdXJyZW50O1xuXG5cdFx0Y3VycmVudC5zZXRJbnB1dCggaW5wdXQgKTtcblx0XHRjdXJyZW50Lm9ic2VydmUoKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0b0hUTUwoIHRleHQgKSB7XG5cdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gdGV4dC50cmltKCk7XG5cblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkoIHZhbHVlICkge1xuXHRpZiAoICdib29sZWFuJyA9PT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiAhdmFsdWU7XG5cdH1cblxuXHRpZiAoIG51bGwgPT09IHZhbHVlIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgdmFsdWUgJiYgIUFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0cmV0dXJuICFPYmplY3Qua2V5cyggdmFsdWUgKT8ubGVuZ3RoO1xuXHR9XG5cblx0aWYgKCAnbnVtYmVyJyA9PT0gdHlwZW9mIHZhbHVlICkge1xuXHRcdHJldHVybiAwID09PSB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiAhdmFsdWU/Lmxlbmd0aDtcbn1cblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGlzVmlzaWJsZSggbm9kZSApIHtcblx0cmV0dXJuIChcblx0XHRub2RlPy5pc0Nvbm5lY3RlZCAmJiBudWxsICE9PSBub2RlPy5vZmZzZXRQYXJlbnRcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZ2V0T2Zmc2V0VG9wKCBub2RlICkge1xuXHRjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRjb25zdCBtYXliZVdpbmRvdyA9IGdldFNjcm9sbFBhcmVudCggbm9kZSApO1xuXG5cdHJldHVybiByZWN0Py50b3AgKyAoXG5cdFx0bWF5YmVXaW5kb3c/LnNjcm9sbFkgPz8gMFxuXHQpO1xufVxuXG5jb25zdCBnZXROb2RlID0gY3VycmVudCA9PiAoXG5cdGN1cnJlbnQuc2Nyb2xsSGVpZ2h0ID4gY3VycmVudC5jbGllbnRIZWlnaHQgPyBjdXJyZW50IDogZmFsc2Vcbik7XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudCggbm9kZSApIHtcblxuXHQvLyBqZXQtcG9wdXAgY29tcGF0aWJpbGl0eVxuXHRsZXQgY29udGFpbmVyID0gbm9kZS5jbG9zZXN0KCAnLmpldC1wb3B1cF9fY29udGFpbmVyLWlubmVyJyApO1xuXG5cdGlmICggY29udGFpbmVyICkge1xuXHRcdHJldHVybiBnZXROb2RlKCBjb250YWluZXIgKTtcblx0fVxuXG5cdC8vIGVsZW1lbnRvci1wcm8gcG9wdXAgY29tcGF0aWJpbGl0eVxuXHRjb250YWluZXIgPSBub2RlLmNsb3Nlc3QoICcuZWxlbWVudG9yLXBvcHVwLW1vZGFsIC5kaWFsb2ctbWVzc2FnZScgKTtcblxuXHRpZiAoIGNvbnRhaW5lciApIHtcblx0XHRyZXR1cm4gZ2V0Tm9kZSggY29udGFpbmVyICk7XG5cdH1cblxuXHRyZXR1cm4gd2luZG93O1xufVxuXG4vKipcbiAqIEBwYXJhbSBpbnB1dHMge0lucHV0RGF0YVtdfVxuICovXG5mdW5jdGlvbiBmb2N1c09uSW52YWxpZElucHV0KCBpbnB1dHMgKSB7XG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcblx0XHRpZiAoIGlucHV0LnJlcG9ydGluZy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCFpbnB1dC5yZXBvcnRpbmcuaGFzQXV0b1Njcm9sbCgpICYmIGlucHV0Lm9uRm9jdXMoKTtcblx0XHRicmVhaztcblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVVzZXJBZ2VudHMoKSB7XG5cdGZvciAoIGNvbnN0IFsgbmFtZSwgaXNBY3RpdmUgXSBvZiBPYmplY3QuZW50cmllcyggZW52aXJvbm1lbnQgKSApIHtcblx0XHRpZiAoICFpc0FjdGl2ZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoIGBqZXQtLXVhLSR7IG5hbWUgfWAgKTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1VBKCBicm93c2VyICkge1xuXHRyZXR1cm4gZW52aXJvbm1lbnQ/LlsgYnJvd3NlciBdO1xufVxuXG5leHBvcnQge1xuXHRhbGxSZWplY3RlZCxcblx0Z2V0TGFuZ3VhZ2UsXG5cdHNldEF0dHJzLFxuXHR0b0hUTUwsXG5cdGlzRW1wdHksXG5cdGdldE9mZnNldFRvcCxcblx0Zm9jdXNPbkludmFsaWRJbnB1dCxcblx0aXNWaXNpYmxlLFxuXHRnZXRTY3JvbGxQYXJlbnQsXG5cdGlzVUEsXG5cdGFwcGx5VXNlckFnZW50cyxcbn07IiwiaW1wb3J0IENhbGN1bGF0ZWRGb3JtdWxhIGZyb20gJy4uL2NhbGMubW9kdWxlL0NhbGN1bGF0ZWRGb3JtdWxhJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuZnVuY3Rpb24gQ2FsY3VsYXRlZEh0bWxTdHJpbmcoXG5cdHJvb3QsXG5cdHsgd2l0aFByZWZpeCA9IHRydWUsIC4uLm9wdGlvbnMgfSA9IHt9LFxuKSB7XG5cdENhbGN1bGF0ZWRGb3JtdWxhLmNhbGwoIHRoaXMsIHJvb3QsIG9wdGlvbnMgKTtcblxuXHRpZiAoIHdpdGhQcmVmaXggKSB7XG5cdFx0dGhpcy5yZWdleHAgPSAvSkZCX0ZJRUxEOjooLispL2dpO1xuXHR9XG5cblx0dGhpcy5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xuXHRcdGxldCBmaWVsZFZhbHVlID0gYXBwbHlGaWx0ZXJzKFxuXHRcdFx0J2pldC5mYi5tYWNyby5maWVsZC52YWx1ZScsXG5cdFx0XHRmYWxzZSxcblx0XHRcdGpRdWVyeSggaW5wdXQubm9kZXNbIDAgXSApLFxuXHRcdCk7XG5cblx0XHRmaWVsZFZhbHVlID0gd3A/Lmhvb2tzPy5hcHBseUZpbHRlcnMgP1xuXHRcdCAgICAgICAgICAgICB3cC5ob29rcy5hcHBseUZpbHRlcnMoXG5cdFx0XHQgICAgICAgICAgICAgJ2pldC5mYi5tYWNyby5maWVsZC52YWx1ZScsXG5cdFx0XHQgICAgICAgICAgICAgZmllbGRWYWx1ZSxcblx0XHRcdCAgICAgICAgICAgICBqUXVlcnkoIGlucHV0Lm5vZGVzWyAwIF0gKSxcblx0XHQgICAgICAgICAgICAgKSA6IGZpZWxkVmFsdWU7XG5cblx0XHRyZXR1cm4gZmFsc2UgPT09IGZpZWxkVmFsdWUgPyBpbnB1dC52YWx1ZS5jdXJyZW50IDogZmllbGRWYWx1ZTtcblx0fTtcblxuXHR0aGlzLm9uTWlzc2luZ1BhcnQgPSBmdW5jdGlvbiAoKSB7XG5cdH07XG59XG5cbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENhbGN1bGF0ZWRGb3JtdWxhLnByb3RvdHlwZSApO1xuXG5DYWxjdWxhdGVkSHRtbFN0cmluZy5wcm90b3R5cGUuY2FsY3VsYXRlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLnBhcnRzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xuXHR9XG5cblx0cmV0dXJuIHRoaXMucGFydHMubWFwKCBjdXJyZW50ID0+IHtcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdCA9IGN1cnJlbnQoKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQgICAgICAgbnVsbCA9PT0gcmVzdWx0IHx8ICcnID09PSByZXN1bHRcblx0XHQgICAgICAgKSA/ICcnIDogcmVzdWx0O1xuXHR9ICkuam9pbiggJycgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRIdG1sU3RyaW5nOyIsImZ1bmN0aW9uKiBpdGVyYXRlQ29tbWVudHMoXG5cdHJvb3ROb2RlLCBhY2NlcHRDYWxsYmFjayA9ICgpID0+IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCApIHtcblx0Ly8gRm91cnRoIGFyZ3VtZW50LCB3aGljaCBpcyBhY3R1YWxseSBvYnNvbGV0ZSBhY2NvcmRpbmcgdG8gdGhlXG5cdC8vIERPTTQgc3RhbmRhcmQsIGlzIHJlcXVpcmVkIGluIElFIDExXG5cdGNvbnN0IGl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKFxuXHRcdHJvb3ROb2RlLFxuXHRcdE5vZGVGaWx0ZXIuU0hPV19DT01NRU5ULFxuXHRcdHtcblx0XHRcdGFjY2VwdE5vZGU6IGFjY2VwdENhbGxiYWNrLFxuXHRcdH0sXG5cdCk7XG5cdGxldCBjdXJOb2RlO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxuXHR3aGlsZSAoIGN1ck5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpICkge1xuXHRcdGN1ck5vZGUubm9kZVZhbHVlID0gY3VyTm9kZS5ub2RlVmFsdWUudHJpbSgpO1xuXG5cdFx0eWllbGQgY3VyTm9kZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRlQ29tbWVudHM7IiwiaW1wb3J0IGl0ZXJhdGVDb21tZW50cyBmcm9tICcuL2l0ZXJhdGVDb21tZW50cyc7XG5cbmZ1bmN0aW9uKiBpdGVyYXRlSmZiQ29tbWVudHMoIHJvb3ROb2RlICkge1xuXHRjb25zdCBhY2NlcHRDYWxsYmFjayA9IG5vZGUgPT4ge1xuXHRcdHJldHVybiBub2RlLnRleHRDb250ZW50LmluY2x1ZGVzKCAnSkZCX0ZJRUxEOjonICk7XG5cdH07XG5cblx0eWllbGQqIGl0ZXJhdGVDb21tZW50cyggcm9vdE5vZGUsIGFjY2VwdENhbGxiYWNrICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdGVKZmJDb21tZW50czsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbmNvbnN0IHtcblx0ICAgICAgX18sXG5cdCAgICAgIHNwcmludGYsXG4gICAgICB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBAcGFyYW0gY29tbWVudFxuICogQHBhcmFtIHJvb3QgICAge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIG9ic2VydmVDb21tZW50KCBjb21tZW50LCByb290ICkge1xuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRIdG1sU3RyaW5nKCByb290ICk7XG5cdGZvcm11bGEub2JzZXJ2ZSggY29tbWVudC50ZXh0Q29udGVudCApO1xuXG5cdGlmICggIWZvcm11bGEucGFydHM/Lmxlbmd0aCApIHtcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdFx0Y29uc29sZS5ncm91cChcblx0XHRcdF9fKFxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gY29tbWVudCB0ZXh0XG5cdFx0XHRcdF9fKCAnQ29udGVudDogJXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0Y29tbWVudC50ZXh0Q29udGVudCxcblx0XHRcdCksXG5cdFx0KTtcblx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblx0XHRmb3JtdWxhLmNsZWFyV2F0Y2hlcnMoKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcblxuXHRjb25zdCBwcmV2U2libGluZyA9IGNvbW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG5cdFx0d3JhcHBlcixcblx0XHRjb21tZW50LFxuXHQpO1xuXG5cdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xuXHRcdHByZXZTaWJsaW5nLmlubmVySFRNTCA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XG5cdH07XG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG5cdGNvbW1lbnQuamZiT2JzZXJ2ZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlQ29tbWVudDsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XG5cbi8qKlxuICogQHBhcmFtIG5vZGUgICAgIHtOb2RlfVxuICogQHBhcmFtIGF0dHJOYW1lIHtzdHJpbmd9XG4gKiBAcGFyYW0gcm9vdCAgICAge09ic2VydmFibGV9XG4gKi9cbmZ1bmN0aW9uIG9ic2VydmVNYWNyb0F0dHIoIG5vZGUsIGF0dHJOYW1lLCByb290ICkge1xuXHRjb25zdCBub2RlVmFsdWUgPSBub2RlWyBhdHRyTmFtZSBdID8/ICcnO1xuXG5cdGlmICggJ3N0cmluZycgIT09IHR5cGVvZiBub2RlVmFsdWUgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRIdG1sU3RyaW5nKCByb290ICk7XG5cdGZvcm11bGEub2JzZXJ2ZSggbm9kZVZhbHVlICk7XG5cblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XG5cdFx0bm9kZVsgYXR0ck5hbWUgXSA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XG5cdH07XG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVNYWNyb0F0dHI7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xuXG5pbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge05vZGV9XG4gKiBAcGFyYW0gcm9vdCB7T2JzZXJ2YWJsZX1cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZU5vZGUoIG5vZGUsIHJvb3QgKSB7XG5cdGNvbnN0IGZvcm11bGEgPSBuZXcgQ2FsY3VsYXRlZEh0bWxTdHJpbmcoIHJvb3QsIHsgd2l0aFByZWZpeDogZmFsc2UgfSApO1xuXHRmb3JtdWxhLm9ic2VydmUoIGAlJHsgbm9kZS5kYXRhc2V0LmpmYk1hY3JvIH0lYCApO1xuXG5cdGlmICggIWZvcm11bGEucGFydHM/Lmxlbmd0aCApIHtcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5cdFx0Y29uc29sZS5ncm91cChcblx0XHRcdF9fKFxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCksXG5cdFx0KTtcblx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0c3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gbWFjcm9cblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRub2RlLmRhdGFzZXQuamZiTWFjcm8sXG5cdFx0XHQpLFxuXHRcdCk7XG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXHRcdGZvcm11bGEuY2xlYXJXYXRjaGVycygpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZS5kYXRhc2V0LmpmYk9ic2VydmVkID0gMTtcblxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcblx0XHRub2RlLmlubmVySFRNTCA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XG5cdH07XG5cdGZvcm11bGEuc2V0UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVOb2RlOyIsImZ1bmN0aW9uIHF1ZXJ5QnlBdHRyVmFsdWUoIHJvb3ROb2RlLCB2YWx1ZSApIHtcblx0Y29uc3QgeyByZXBsYWNlQXR0cnMgPSBbXSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cblx0Y29uc3QgcXVlcnlTZWxlY3RvciA9IFtdO1xuXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IHJlcGxhY2VBdHRycy5sZW5ndGg7IGkrKyApIHtcblx0XHRxdWVyeVNlbGVjdG9yLnB1c2goIGBbJHsgcmVwbGFjZUF0dHJzWyBpIF0gfSo9XCIkeyB2YWx1ZSB9XCJdYCApO1xuXHR9XG5cblx0cmV0dXJuIHJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoIHF1ZXJ5U2VsZWN0b3Iuam9pbiggJywgJyApICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QnlBdHRyVmFsdWU7IiwiaW1wb3J0IGluaXRGb3JtIGZyb20gJy4vaW5pdEZvcm0nO1xuXG5mdW5jdGlvbiBpbml0RWxlbWVudG9yKCkge1xuXHRpZiAoICEgd2luZG93LmVsZW1lbnRvckZyb250ZW5kICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCB3aWRnZXRzID0ge1xuXHRcdCdqZXQtZW5naW5lLWJvb2tpbmctZm9ybS5kZWZhdWx0JzogaW5pdEZvcm0sXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXItZm9ybS5kZWZhdWx0JzogaW5pdEZvcm0sXG5cdH07XG5cblx0alF1ZXJ5LmVhY2goIHdpZGdldHMsIGZ1bmN0aW9uKCB3aWRnZXQsIGNhbGxiYWNrICkge1xuXHRcdHdpbmRvdy5lbGVtZW50b3JGcm9udGVuZC5ob29rcy5hZGRBY3Rpb24oICdmcm9udGVuZC9lbGVtZW50X3JlYWR5LycgKyB3aWRnZXQsIGNhbGxiYWNrICk7XG5cdH0gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEVsZW1lbnRvcjsiLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxud2luZG93LkpldEZvcm1CdWlsZGVyID0gd2luZG93LkpldEZvcm1CdWlsZGVyID8/IHt9O1xuXG5mdW5jdGlvbiBpbml0Rm9ybSggJHNjb3BlICkge1xuXHRjb25zdCBmb3JtID0gJHNjb3BlWyAwIF0ucXVlcnlTZWxlY3RvciggJ2Zvcm0uamV0LWZvcm0tYnVpbGRlcicgKTtcblxuXHRpZiAoICFmb3JtICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG5cdHdpbmRvdy5KZXRGb3JtQnVpbGRlclsgZm9ybS5kYXRhc2V0LmZvcm1JZCBdID0gb2JzZXJ2YWJsZTtcblxuXHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHQnamV0LWZvcm0tYnVpbGRlci9pbml0Jyxcblx0XHRbICRzY29wZSwgb2JzZXJ2YWJsZSBdLFxuXHQpO1xuXG5cdG9ic2VydmFibGUub2JzZXJ2ZSggZm9ybSApO1xuXG5cdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2FmdGVyLWluaXQnLFxuXHRcdFsgJHNjb3BlLCBvYnNlcnZhYmxlIF0sXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRGb3JtOyIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xuaW1wb3J0IHsgaXNDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2snO1xuaW1wb3J0IHsgU1RSSUNUX01PREUgfSBmcm9tICcuLi9zaWduYWxzL0Jhc2VTaWduYWwnO1xuXG5mdW5jdGlvbiBDaGFuZ2VEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0NoYW5nZVR5cGUoIG5vZGUgKTtcblx0fTtcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdH0gKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhU1RSSUNUX01PREUgJiYgalF1ZXJ5KCBub2RlICkub24oICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRpZiAoIHRoaXMudmFsdWUuY3VycmVudCA9PSBldmVudC50YXJnZXQudmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApICk7XG5cdH07XG5cblx0dGhpcy5vbkNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuc2lsZW5jZVNldCggJycgKTtcblx0fTtcbn1cblxuQ2hhbmdlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZURhdGE7IiwiaW1wb3J0IExvYWRpbmdSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcbmltcG9ydCBSZWFjdGl2ZUhvb2sgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcbmltcG9ydCB7IGdldFNpZ25hbCB9IGZyb20gJy4uL3NpZ25hbHMvZnVuY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZVJlcG9ydCB9IGZyb20gJy4uL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGFyc2VkTmFtZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCB7IGdldE9mZnNldFRvcCwgaXNWaXNpYmxlIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IFNUUklDVF9NT0RFIH0gZnJvbSAnLi4vc2lnbmFscy9CYXNlU2lnbmFsJztcblxuY29uc3QgeyBkb0FjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAdHlwZWRlZiB7SW5wdXREYXRhfVxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZSAgICBOYW1lIG9mIGh0bWwgZmllbGRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRpbmcgc3BlY2lhbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgICAgICBQcmVwYXJlZCBuYW1lIG9mXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZpZWxkXG4gKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR8KltdfSAgICAgICAgICAgICAgIG5vZGVzICAgICAgUmVsYXRlZCBub2Rlc1xuICogQHByb3BlcnR5IHtSZWFjdGl2ZVZhcn0gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgIFJlYWN0aXZlIHZhbHVlXG4gKiBAcHJvcGVydHkge0NvbmRpdGlvbkNoZWNrZXJ8bnVsbH0gICAgICAgICAgICAgIGNoZWNrZXIgICAgQ29uZGl0aW9uIGNoZWNrZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIGJ5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZGl0aW9uYWwgQmxvY2tcbiAqIEBwcm9wZXJ0eSB7Kn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsY1ZhbHVlICBDYWxjdWxhdGVkIHZhbHVlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBieSBDYWxjdWxhdGVkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmllbGRcbiAqIEBwcm9wZXJ0eSB7QWR2YW5jZWRSZXBvcnRpbmd8QnJvd3NlclJlcG9ydGluZ30gcmVwb3J0aW5nICBSZXBvcnRpbmcgb2JqZWN0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHZhbGlkYXRpb24gYW5kXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd2luZyBlcnJvcnNcbiAqIEBwcm9wZXJ0eSB7T2JzZXJ2YWJsZX0gICAgICAgICAgICAgICAgICAgICAgICAgcm9vdCAgICAgICBOZWFyZXN0IG9ic2VydmFibGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSwgY291bGQgYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cgb2YgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0ZXJcbiAqIEBwcm9wZXJ0eSB7UGFnZVN0YXRlfSAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSAgICAgICBSZWxhdGVkIHBhZ2UgaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXN0ZXAgZm9ybVxuICogQHByb3BlcnR5IHtMb2FkaW5nUmVhY3RpdmVWYXJ9ICAgICAgICAgICAgICAgICBsb2FkaW5nICAgIFJlYWN0aXZlIHZhciB0b1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZSB2aXN1YWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSBvZiB0aGUgZmllbGRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PFJlYWN0aXZlVmFyPn0gICAgICAgICAgICAgICAgYXR0cnMgICAgICBPYmplY3Qgd2l0aFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlIGF0dHJpYnV0ZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZCBJcyByZXF1aXJlZCBmaWVsZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIG5vdFxuICogQHByb3BlcnR5IHtudWxsfFJlYWN0aXZlSG9va30gICAgICAgICAgICAgICAgICBlbnRlcktleSAgIFVzZWQgZm9yIGhhbmRsaW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXIgaG9va3Mgb25cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzcyBFbnRlciBidXR0b25cbiAqIEBwcm9wZXJ0eSB7bnVsbHxzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlICBUeXBlIGlkZW50aWZpZXIgb2ZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZmllbGRcbiAqL1xuZnVuY3Rpb24gSW5wdXREYXRhKCkge1xuXHR0aGlzLnJhd05hbWUgPSAnJztcblx0dGhpcy5uYW1lICAgID0gJyc7XG5cdHRoaXMuY29tbWVudCA9IGZhbHNlO1xuXHQvKipcblx0ICogQHR5cGUge0hUTUxFbGVtZW50W118SFRNTElucHV0RWxlbWVudFtdfVxuXHQgKi9cblx0dGhpcy5ub2RlcyA9IFtdO1xuXHR0aGlzLmF0dHJzICAgICAgICAgPSB7fTtcblx0dGhpcy5lbnRlcktleSAgICAgID0gbnVsbDtcblx0dGhpcy5pbnB1dFR5cGUgICAgID0gbnVsbDtcblx0dGhpcy5vZmZzZXRPbkZvY3VzID0gNzU7XG5cblx0LyoqXG5cdCAqIFBhdGggZnJvbSB0b3Agb2YgZm9ybSB0byBjdXJyZW50IGZpZWxkIG5hbWVcblx0ICogRXguOiBbICdyZXBlYXRlcl9uYW1lJywgMCwgJ3RleHRfZmllbGQnIF1cblx0ICogV2hlcmU6XG5cdCAqICAtICdyZXBlYXRlcl9uYW1lJzogbmFtZSBvZiByZXBlYXRlciwgd2hlcmUgY3VycmVudCBmaWVsZCBpcyBwbGFjZWRcblx0ICogIC0gMDogaW5kZXggb2YgcmVwZWF0ZXIgcm93LCB3aGVyZSBjdXJyZW50IGZpZWxkIGlzIHBsYWNlZFxuXHQgKiAgLSAndGV4dF9maWVsZCc6IG5hbWUgb2YgY3VycmVudCBmaWVsZCBuYW1lXG5cdCAqIEB0eXBlIHtBcnJheTxzdHJpbmcgfCBudW1iZXI+fVxuXHQgKi9cblx0dGhpcy5wYXRoID0gW107XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHRoaXMudmFsdWUgPSB0aGlzLmdldFJlYWN0aXZlKCk7XG5cdHRoaXMudmFsdWUud2F0Y2goIHRoaXMub25DaGFuZ2UuYmluZCggdGhpcyApICk7XG5cblx0dGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XG5cdHRoaXMuY2FsY1ZhbHVlICA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtBZHZhbmNlZFJlcG9ydGluZ3xCcm93c2VyUmVwb3J0aW5nfVxuXHQgKi9cblx0dGhpcy5yZXBvcnRpbmcgPSBudWxsO1xuXG5cdHRoaXMuY2hlY2tlciA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0dGhpcy5yb290ID0gbnVsbDtcblxuXHR0aGlzLmxvYWRpbmcgPSBuZXcgTG9hZGluZ1JlYWN0aXZlVmFyKCBmYWxzZSApO1xuXHR0aGlzLmxvYWRpbmcubWFrZSgpO1xuXG5cdC8qKlxuXHQgKiBJbiBDaGVja2JveERhdGEgY2FzZSB3ZSBoYXZlIGp1c3QgbWFpbiBzYW5pdGl6ZXIsIHdpdGhvdXQgY2FsbGFibGUuXG5cdCAqIFNvIHdlIHNldCAuY2FsY1ZhbHVlIGluc2lkZSBjYWxsYWJsZS5ydW5TaWduYWwoKVxuXHQgKlxuXHQgKiBBbmQgdG8gcHJldmVudCByZXNldHRpbmcgLmNhbGNWYWx1ZSBieSBvbkNoYW5nZVxuXHQgKiBzZXQgdGhpcyBwcm9wZXJ0eSB0byBGQUxTRS5cblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHR0aGlzLmlzUmVzZXRDYWxjVmFsdWUgPSB0cnVlO1xuXHR0aGlzLnZhbGlkYXRlVGltZXIgICAgPSBmYWxzZTtcblx0dGhpcy5zdG9wVmFsaWRhdGlvbiAgID0gZmFsc2U7XG5cdHRoaXMuYWJvcnRDb250cm9sbGVyICA9IG51bGw7XG59XG5cbklucHV0RGF0YS5wcm90b3R5cGUuYXR0cnMgPSB7fTtcblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5JbnB1dERhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsIGV2ZW50ID0+IHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdH0gKTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgKCkgPT4ge30gKTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsICgpID0+IHtcblx0XHRpZiAoIHRoaXMucmVwb3J0aW5nICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB0aGlzLnJlcG9ydGluZy5zd2l0Y2hCdXR0b25zU3RhdGUgKSB7XG5cdFx0XHR0aGlzLnJlcG9ydGluZy5zd2l0Y2hCdXR0b25zU3RhdGUoIHRydWUgKTtcblx0XHR9XG5cblx0XHR0aGlzLmRlYm91bmNlZFJlcG9ydCgpO1xuXHR9ICk7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHQhU1RSSUNUX01PREUgJiYgalF1ZXJ5KCBub2RlICkub24oICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdGlmICggdGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLmNhbGxhYmxlLnVubG9ja1RyaWdnZXIoKTtcblx0fSApO1xuXG5cdGlmICggJ2lucHV0JyAhPT0gdGhpcy5pbnB1dFR5cGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5lbnRlcktleSA9IG5ldyBSZWFjdGl2ZUhvb2soKTtcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApICk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5tYWtlUmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMub25PYnNlcnZlKCk7XG5cdHRoaXMuYWRkTGlzdGVuZXJzKCk7XG5cdHRoaXMuc2V0VmFsdWUoKTtcblx0dGhpcy5pbml0Tm90aWZ5VmFsdWUoKTtcblxuXHR0aGlzLnZhbHVlLm1ha2UoKTtcblxuXHRkb0FjdGlvbiggJ2pldC5mYi5pbnB1dC5tYWtlUmVhY3RpdmUnLCB0aGlzICk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5vbkNoYW5nZSAgICAgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSApIHtcblx0aWYgKCB0aGlzLmlzUmVzZXRDYWxjVmFsdWUgKSB7XG5cdFx0dGhpcy5jYWxjVmFsdWUgPSB0aGlzLnZhbHVlLmN1cnJlbnQ7XG5cdH1cblxuXHQvLyBhcHBseSBjaGFuZ2VzIGluIERPTVxuXHR0aGlzPy5jYWxsYWJsZT8ucnVuKCBwcmV2VmFsdWUgKTtcblxuXHQvLyBzaG93IGVycm9yc1xuXHR0aGlzLnJlcG9ydCgpO1xufTtcbklucHV0RGF0YS5wcm90b3R5cGUucmVwb3J0ICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnJlcG9ydGluZy52YWxpZGF0ZU9uQ2hhbmdlKCk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5yZXBvcnRPbkJsdXIgPSBmdW5jdGlvbiAoIHNpZ25hbCA9IG51bGwgKSB7XG5cdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25CbHVyKCBzaWduYWwgKTtcbn07XG5JbnB1dERhdGEucHJvdG90eXBlLmRlYm91bmNlZFJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIHRoaXMudmFsaWRhdGVUaW1lciApIHtcblx0XHR0aGlzLnN0b3BWYWxpZGF0aW9uID0gdHJ1ZTtcblx0XHRjbGVhclRpbWVvdXQoIHRoaXMudmFsaWRhdGVUaW1lciApO1xuXG5cdFx0aWYgKCB0aGlzLmFib3J0Q29udHJvbGxlciApIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgIH1cblx0fVxuXG5cdHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgbGV0IHNpZ25hbCA9IHRoaXMuYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcblxuXHR0aGlzLnZhbGlkYXRlVGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0dGhpcy5yZXBvcnRPbkJsdXIoIHNpZ25hbCApO1xuXHR9LCA0NTAgKTtcbn1cbi8qKlxuICogQHBhcmFtICBjYWxsYWJsZVxuICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICp8KltdKXwqfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0cmV0dXJuIHRoaXMudmFsdWUud2F0Y2goIGNhbGxhYmxlICk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS53YXRjaFZhbGlkaXR5ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0cmV0dXJuIHRoaXMucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUud2F0Y2goIGNhbGxhYmxlICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gIGNhbGxhYmxlXG4gKiBAcmV0dXJuIHsoZnVuY3Rpb24oKTogKnwqW10pfCp9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuc2FuaXRpemUgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRyZXR1cm4gdGhpcy52YWx1ZS5zYW5pdGl6ZSggY2FsbGFibGUgKTtcbn07XG4vKipcbiAqIEBwYXJhbSBpbnB1dERhdGEge0lucHV0RGF0YX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uICggaW5wdXREYXRhICkge1xuXHR0aGlzLm5vZGVzID0gWyAuLi5pbnB1dERhdGEuZ2V0Tm9kZSgpIF07XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0bGV0IGZpZWxkVmFsdWU7XG5cdGlmICggdGhpcy5pc0FycmF5KCkgKSB7XG5cdFx0ZmllbGRWYWx1ZSA9IEFycmF5LmZyb20oIHRoaXMubm9kZXMgKS5cblx0XHRcdG1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGZpZWxkVmFsdWUgPSB0aGlzLm5vZGVzWyAwIF0/LnZhbHVlO1xuXHR9XG5cdHRoaXMuY2FsY1ZhbHVlICAgICA9IGZpZWxkVmFsdWU7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IGZpZWxkVmFsdWU7XG59O1xuLyoqXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHR0aGlzLm5vZGVzICAgPSBbIG5vZGUgXTtcblx0dGhpcy5yYXdOYW1lID0gbm9kZS5uYW1lID8/ICcnO1xuXHR0aGlzLm5hbWUgICAgPSBnZXRQYXJzZWROYW1lKCB0aGlzLnJhd05hbWUgKTtcblxuXHR0aGlzLmlucHV0VHlwZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbn07XG4vKipcbiAqIFJ1bnMgb25jZSBpbiBsaWZlY3ljbGUuXG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUub25PYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0LyoqXG5cdCAqIFNhdmUgbGluayB0byB0aGlzIG9iamVjdFxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0bm9kZS5qZmJTeW5jID0gdGhpcztcblxuXHR0aGlzLmlzUmVxdWlyZWQgPSB0aGlzLmNoZWNrSXNSZXF1aXJlZCgpO1xuXG5cdHRoaXMuY2FsbGFibGUgPSBnZXRTaWduYWwoIG5vZGUsIHRoaXMgKTtcblx0dGhpcy5jYWxsYWJsZS5zZXRJbnB1dCggdGhpcyApO1xuXG5cdHRoaXMucmVwb3J0aW5nID0gY3JlYXRlUmVwb3J0KCB0aGlzICk7XG5cblx0dGhpcy5sb2FkaW5nLndhdGNoKCAoKSA9PiB0aGlzLm9uQ2hhbmdlTG9hZGluZygpICk7XG5cblx0dGhpcy5wYXRoID0gWyAuLi50aGlzLmdldFBhcmVudFBhdGgoKSwgdGhpcy5uYW1lIF07XG5cblx0aWYgKFxuXHRcdC8vIGlzIGFqYXhcblx0XHQhdGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIuaGFzT3duUHJvcGVydHkoICdzdGF0dXMnICkgfHxcblx0XHR0aGlzLmhhc1BhcmVudCgpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLndhdGNoUmVzZXQoICgpID0+IHRoaXMub25DbGVhcigpICk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5vbkNoYW5nZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG5cblx0dGhpcy5nZXRTdWJtaXQoKS5sb2NrU3RhdGUuY3VycmVudCA9IHRoaXMubG9hZGluZy5jdXJyZW50O1xuXG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2Rlcztcblx0Y29uc3Qgd3JhcHBlciAgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XG5cblx0d3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtbG9hZGluZycsIHRoaXMubG9hZGluZy5jdXJyZW50ICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5zZXRSb290ID0gZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHR0aGlzLnJvb3QgPSBvYnNlcnZhYmxlO1xufTtcbi8qKlxuICogQnkgZGVmYXVsdCBpdCBydW5zIG9ubHkgaWYgcmVwZWF0ZXIgaXRlbSB3YXMgcmVtb3ZlZFxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xufTtcbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLm5hbWU7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtBcnJheSB8IHN0cmluZyB8IGJvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnZhbHVlLmN1cnJlbnQ7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXROb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5ub2Rlcztcbn07XG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuaXNBcnJheSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucmF3TmFtZS5pbmNsdWRlcyggJ1tdJyApO1xufTtcbi8qKlxuICogQHBhcmFtIGNhbGxhYmxlICAgICB7RnVuY3Rpb258bWl4ZWR9XG4gKiBAcGFyYW0gaW5wdXRDb250ZXh0IHtJbnB1dERhdGF8Qm9vbGVhbn1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5iZWZvcmVTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlLCBpbnB1dENvbnRleHQgPSBmYWxzZSApIHtcblx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIucHJvbWlzZSggY2FsbGFibGUsIGlucHV0Q29udGV4dCApO1xufTtcbi8qKlxuICogQHJldHVybiB7Rm9ybVN1Ym1pdH1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmdldFJvb3QoKS5mb3JtO1xufTtcbi8qKlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX1cbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cdHJldHVybiB0aGlzLnJvb3QucGFyZW50LmdldFJvb3QoKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xuXG5cdHJldHVybiBpc1Zpc2libGUoIHdyYXBwZXIgKTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zaWxlbmNlU2V0KCBudWxsICk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gbmV3IFJlYWN0aXZlVmFyKCk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmNoZWNrSXNSZXF1aXJlZCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdHJldHVybiBub2RlLnJlcXVpcmVkID8/ICEhbm9kZS5kYXRhc2V0LnJlcXVpcmVkPy5sZW5ndGg7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLnNpbGVuY2VTZXQgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHQvKipcblx0ICogUmVsYXRlZCB0byBpc3N1ZVxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMjYxI2lzc3VlY29tbWVudC0xMjkzMjkwMjkxXG5cdCAqL1xuXHRjb25zdCB0ZW1wUmVwb3J0ID0gdGhpcy5yZXBvcnQuYmluZCggdGhpcyApO1xuXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XG5cblx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdmFsdWU7XG5cblx0dGhpcy5yZXBvcnQgPSB0ZW1wUmVwb3J0O1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5zaWxlbmNlTm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB0ZW1wUmVwb3J0ID0gdGhpcy5yZXBvcnQuYmluZCggdGhpcyApO1xuXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XG5cblx0dGhpcy52YWx1ZS5ub3RpZnkoKTtcblxuXHR0aGlzLnJlcG9ydCA9IHRlbXBSZXBvcnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuaGFzUGFyZW50ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gISF0aGlzLnJvb3Q/LnBhcmVudDtcbn07XG5cbi8qKlxuICogRm9yIGluc2VydCBlcnJvcnMgaW4gYWR2YW5jZWQgdmFsaWRhdGlvbiBtb2RlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFdyYXBwZXJOb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5ub2Rlc1sgMCBdLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1yb3cnICk7XG59O1xuXG5JbnB1dERhdGEucHJvdG90eXBlLmhhbmRsZUVudGVyS2V5ID0gZnVuY3Rpb24gKCBldmVudCApIHtcblx0aWYgKCBldmVudC5rZXkgIT09ICdFbnRlcicgfHwgLy8gbm90IGVudGVyIGtleVxuXHRcdCF0aGlzLmVudGVyS2V5IHx8IC8vIGhhbmRsaW5nIGVudGVyIGtleSBpcyBkaXNhYmxlZFxuXHRcdGV2ZW50LnNoaWZ0S2V5IHx8IC8vIHRoZSBzaGlmdCBrZXkgd2FzIHByZXNzZWRcblx0XHRldmVudC5pc0NvbXBvc2luZyAvLyBpZiB0aGUgZXZlbnQgaXMgZmlyZWQgd2l0aGluIGEgY29tcG9zaXRpb24gc2Vzc2lvblxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdHRoaXMub25FbnRlcktleSgpO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5vbkVudGVyS2V5ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjYW5TdWJtaXQgPSB0aGlzLmVudGVyS2V5LmFwcGx5RmlsdGVycyggdHJ1ZSApO1xuXG5cdGlmICggY2FuU3VibWl0ICkge1xuXHRcdGNvbnN0IGNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IHRoaXMuZ2V0U3VibWl0KCkuY2FuVHJpZ2dlckVudGVyU3VibWl0O1xuXG5cdFx0aWYgKCB0cnVlID09PSBjYW5UcmlnZ2VyRW50ZXJTdWJtaXQgKSB7XG5cdFx0XHR0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdCgpO1xuXHRcdH1cblx0fVxufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5pbml0Tm90aWZ5VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2lsZW5jZU5vdGlmeSgpO1xufTtcblxuSW5wdXREYXRhLnByb3RvdHlwZS5vbkZvY3VzICA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zY3JvbGxUbygpO1xuXHR0aGlzLmZvY3VzUmF3KCk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5mb2N1c1JhdyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdC8qKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yMjY1I2lzc3VlY29tbWVudC0xNDQ3OTg4NzE4XG5cdCAqL1xuXHRpZiAoIFsgJ2RhdGUnLCAndGltZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZT8uZm9jdXMoIHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9ICk7XG59O1xuSW5wdXREYXRhLnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcblxuXHR3aW5kb3cuc2Nyb2xsVG8oIHtcblx0XHR0b3A6IGdldE9mZnNldFRvcCggd3JhcHBlciApIC0gdGhpcy5vZmZzZXRPbkZvY3VzLFxuXHRcdGJlaGF2aW9yOiAnc21vb3RoJyxcblx0fSApO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtSZXBvcnRpbmdDb250ZXh0fVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnJvb3QuZ2V0Q29udGV4dCgpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufElucHV0RGF0YVtdfVxuICovXG5JbnB1dERhdGEucHJvdG90eXBlLnBvcHVsYXRlSW5uZXIgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogRXhlY3V0ZWQgd2l0aCBkZWZhdWx0IGJyb3dzZXIgdmFsaWRhdGlvblxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuaGFzQXV0b1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XG4gKi9cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UmVwb3J0aW5nTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMubm9kZXNbIDAgXTtcbn07XG5cbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UGFyZW50UGF0aCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5yb290Py5wYXJlbnQgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtBcnJheXxPYmplY3R9XG5cdCAqL1xuXHRjb25zdCB2YWx1ZSA9IHRoaXMucm9vdC5wYXJlbnQudmFsdWUuY3VycmVudDtcblxuXHRpZiAoICdvYmplY3QnICE9PSB0eXBlb2YgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Zm9yICggY29uc3QgWyBpbmRleCwgcm93IF0gb2YgT2JqZWN0LmVudHJpZXMoIHZhbHVlICkgKSB7XG5cdFx0aWYgKCByb3cgIT09IHRoaXMucm9vdCApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4udGhpcy5yb290LnBhcmVudC5nZXRQYXJlbnRQYXRoKCksXG5cdFx0XHR0aGlzLnJvb3QucGFyZW50Lm5hbWUsXG5cdFx0XHRpbmRleCxcblx0XHRdO1xuXHR9XG5cblx0cmV0dXJuIFtdO1xufTtcblxuLyoqXG4gKiBSdW5zIG9ubHkgb25jZSBvbiB3aW5kb3cgXCJsb2FkXCIgZXZlbnRcbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5yZVF1ZXJ5VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuc2V0VmFsdWUoKTtcblx0dGhpcy5pbml0Tm90aWZ5VmFsdWUoKTtcbn07XG5cbi8qKlxuICogUnVucyBvbiBzZXQgT2JzZXJ2YWJsZS52YWx1ZS5jdXJyZW50XG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5yZXZlcnRWYWx1ZSA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHZhbHVlO1xufTtcblxuLyoqXG4gKiBSZWNhbGN1bGF0ZSB0aGUgZm9ybXVsYSBiYXNlZCBvbiB0aGUgY3VycmVudCBpbnB1dCBkYXRhLlxuICogQHNpbmNlIDMuNC41XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTE3ODZcbiAqL1xuSW5wdXREYXRhLnByb3RvdHlwZS5yZUNhbGN1bGF0ZUZvcm11bGEgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5zZXRWYWx1ZSgpO1xuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXREYXRhO1xuIiwiaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL0lucHV0RGF0YSc7XG5pbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3N1cHBvcnRzJztcblxuZnVuY3Rpb24gTm9MaXN0ZW5EYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXHQvKipcblx0ICogQHR5cGUge05vZGV9XG5cdCAqL1xuXHR0aGlzLmNvbW1lbnQgPSBudWxsO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0hpZGRlbiggbm9kZSApO1xuXHR9O1xuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBzaWxlbmNlIGlzIGdvbGRlblxuXHR9O1xuXHR0aGlzLm9uT2JzZXJ2ZSAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLm9uT2JzZXJ2ZS5jYWxsKCB0aGlzICk7XG5cblx0XHRpZiAoICF0aGlzLmlzQXJyYXkoKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnNldENvbW1lbnQoKTtcblx0fTtcblx0dGhpcy5zZXRDb21tZW50ICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jb21tZW50ICAgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCB0aGlzLm5hbWUgKTtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKCB0aGlzLmNvbW1lbnQsIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLmlzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0dGhpcy5tZXJnZSA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdFx0dGhpcy5ub2Rlcy5wdXNoKCAuLi5pbnB1dC5nZXROb2RlKCkgKTtcblx0fTtcbn1cblxuTm9MaXN0ZW5EYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTm9MaXN0ZW5EYXRhOyIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xuaW1wb3J0IHsgaXNSYW5nZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcblxuZnVuY3Rpb24gUmFuZ2VEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLm51bWJlck5vZGUgPSBudWxsO1xuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc1JhbmdlKCBub2RlICk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblxuXHRcdHRoaXMubnVtYmVyTm9kZSA9IG5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC12YWx1ZS1udW1iZXInLFxuXHRcdCk7XG5cdH07XG59XG5cblJhbmdlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlRGF0YTsiLCJpbXBvcnQgTm9MaXN0ZW5EYXRhIGZyb20gJy4vTm9MaXN0ZW5EYXRhJztcbmltcG9ydCBSZWFjdGl2ZVNldCBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVNldCc7XG5cbmNvbnN0IHsgYnVpbHRJblN0YXRlcyB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZWFjdGl2ZVNldH0gdmFsdWUgUmVhY3RpdmUgdmFsdWVcbiAqXG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gUmVuZGVyU3RhdGVEYXRhKCkge1xuXHROb0xpc3RlbkRhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCdoaWRkZW4nID09PSBub2RlPy50eXBlICYmXG5cdFx0XHQnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXNbXScgPT09IG5vZGUubmFtZVxuXHRcdCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cblx0ICovXG5cdHRoaXMuYWRkID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUgKSB7XG5cdFx0dGhpcy52YWx1ZS5hZGQoIHN0YXRlTmFtZSApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gc3RhdGVOYW1lIHtTdHJpbmd9XG5cdCAqL1xuXHR0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHRcdHRoaXMudmFsdWUucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHN0YXRlTmFtZSB7U3RyaW5nfVxuXHQgKiBAcGFyYW0gZm9yY2UgICAgIHtudWxsfEJvb2xlYW59XG5cdCAqL1xuXHR0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lLCBmb3JjZSA9IG51bGwgKSB7XG5cdFx0dGhpcy52YWx1ZS50b2dnbGUoIHN0YXRlTmFtZSwgZm9yY2UgKTtcblx0fTtcblxuXHR0aGlzLmlzQ3VzdG9tID0gZnVuY3Rpb24gKCBrZXkgKSB7XG5cdFx0cmV0dXJuICFidWlsdEluU3RhdGVzLmluY2x1ZGVzKCBrZXkgKTtcblx0fTtcbn1cblxuUmVuZGVyU3RhdGVEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIE5vTGlzdGVuRGF0YS5wcm90b3R5cGUgKTtcblxuUmVuZGVyU3RhdGVEYXRhLnByb3RvdHlwZS5nZXRSZWFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIG5ldyBSZWFjdGl2ZVNldCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyU3RhdGVEYXRhOyIsImltcG9ydCBDaGFuZ2VEYXRhIGZyb20gJy4vQ2hhbmdlRGF0YSc7XG5pbXBvcnQgUmFuZ2VEYXRhIGZyb20gJy4vUmFuZ2VEYXRhJztcbmltcG9ydCBOb0xpc3RlbkRhdGEgZnJvbSAnLi9Ob0xpc3RlbkRhdGEnO1xuaW1wb3J0IFJlbmRlclN0YXRlRGF0YSBmcm9tICcuL1JlbmRlclN0YXRlRGF0YSc7XG5pbXBvcnQgeyBzZXRBdHRycyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuXHQgICAgICBkb0FjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEB0eXBlIHtmdW5jdGlvbigpOiAqfVxuICovXG5jb25zdCBnZXREYXRhVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0W1xuXHRcdFJlbmRlclN0YXRlRGF0YSxcblx0XHRSYW5nZURhdGEsXG5cdFx0Q2hhbmdlRGF0YSxcblx0XHROb0xpc3RlbkRhdGEsXG5cdF0sXG4pO1xuXG5sZXQgZGF0YVR5cGVzID0gW107XG5cbi8qKlxuICogQHBhcmFtICBub2RlXG4gKiBAcGFyYW0gIG9ic2VydmFibGUge09ic2VydmFibGV9XG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnB1dCggbm9kZSwgb2JzZXJ2YWJsZSApIHtcblx0aWYgKCAhZGF0YVR5cGVzLmxlbmd0aCApIHtcblx0XHRkYXRhVHlwZXMgPSBnZXREYXRhVHlwZXMoKTtcblx0fVxuXHRmb3IgKCBjb25zdCBkYXRhVHlwZSBvZiBkYXRhVHlwZXMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBkYXRhVHlwZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggbm9kZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGN1cnJlbnQuc2V0Um9vdCggb2JzZXJ2YWJsZSApO1xuXHRcdGN1cnJlbnQuc2V0Tm9kZSggbm9kZSApO1xuXHRcdHNldEF0dHJzKCBjdXJyZW50ICk7XG5cblx0XHRkb0FjdGlvbiggJ2pldC5mYi5pbnB1dC5jcmVhdGVkJywgY3VycmVudCApO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoICdTb21ldGhpbmcgd2VudCB3cm9uZycgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VkTmFtZSggbmFtZSApIHtcblx0Y29uc3QgcmVnZXhwcyA9IFtcblx0XHQvLyBtdWx0aXBsZSBmaWVsZHMgKGNoZWNrYm94W10pXG5cdFx0L14oW1xcd1xcLV0rKVxcW1xcXSQvLFxuXHRcdC8vIGZpZWxkcyBpbnNpZGUgcmVwZWF0ZXIgKHJlcF9uYW1lWzFdW2NvbnRlbnRfZmllbGRdKVxuXHRcdC9eW1xcd1xcLV0rXFxbXFxkK1xcXVxcWyhbXFx3XFwtXSspXFxdXFxbP1xcXT8kLyxcblx0XTtcblxuXHRmb3IgKCBjb25zdCByZWdFeHAgb2YgcmVnZXhwcyApIHtcblx0XHRpZiAoICFyZWdFeHAudGVzdCggbmFtZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IG1hdGNoZXMgPSBuYW1lLm1hdGNoKCByZWdFeHAgKTtcblxuXHRcdHJldHVybiBtYXRjaGVzWyAxIF07XG5cdH1cblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzIHtJbnB1dERhdGFbXX1cbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVJbnB1dHMoIGlucHV0cyApIHtcblx0Y29uc3QgbGlzdCA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcblx0XHRjb25zdCBpbm5lciA9IGlucHV0LnBvcHVsYXRlSW5uZXIoKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRpbm5lcj8ubGVuZ3RoICYmIGxpc3QucHVzaCggLi4uaW5uZXIgKTtcblxuXHRcdGxpc3QucHVzaCggaW5wdXQgKTtcblx0fVxuXG5cdHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgeyBnZXRQYXJzZWROYW1lLCBjcmVhdGVJbnB1dCwgcG9wdWxhdGVJbnB1dHMgfTsiLCIvKipcbiAqIEB0aGlzIHtSZWFjdGl2ZVZhcn1cbiAqXG4gKiBAY2xhc3NcbiAqL1xuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4vUmVhY3RpdmVWYXInO1xuXG5mdW5jdGlvbiBMb2FkaW5nUmVhY3RpdmVWYXIoKSB7XG5cdFJlYWN0aXZlVmFyLmNhbGwoIHRoaXMsIGZhbHNlICk7XG5cblx0dGhpcy5zdGFydCAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jdXJyZW50ID0gdHJ1ZTtcblx0fTtcblx0dGhpcy5lbmQgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jdXJyZW50ID0gZmFsc2U7XG5cdH07XG5cdHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY3VycmVudCA9ICF0aGlzLmN1cnJlbnQ7XG5cdH07XG59XG5cbkxvYWRpbmdSZWFjdGl2ZVZhci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZWFjdGl2ZVZhci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1JlYWN0aXZlVmFyOyIsImZ1bmN0aW9uIFJlYWN0aXZlSG9vaygpIHtcblx0dGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG5SZWFjdGl2ZUhvb2sucHJvdG90eXBlID0ge1xuXHRhZGRGaWx0ZXIoIGNhbGxhYmxlICkge1xuXHRcdHRoaXMuaGFuZGxlcnMucHVzaCggY2FsbGFibGUgKTtcblxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xuXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuaGFuZGxlcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHR9LFxuXHRhcHBseUZpbHRlcnMoIC4uLnBhcmFtcyApIHtcblx0XHRsZXQgY3VycmVudCAgICAgPSBwYXJhbXNbIDAgXTtcblx0XHRjb25zdCBuZXdQYXJhbXMgPSBwYXJhbXMuc2xpY2UoIDEgKTtcblxuXHRcdGZvciAoIGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycyApIHtcblx0XHRcdGN1cnJlbnQgPSBoYW5kbGVyKCBjdXJyZW50LCAuLi5uZXdQYXJhbXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3VycmVudDtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlSG9vaztcbiIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcblxuZnVuY3Rpb24gUmVhY3RpdmVTZXQoIHZhbHVlICkge1xuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCB2YWx1ZSApO1xufVxuXG5SZWFjdGl2ZVNldC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZWFjdGl2ZVZhci5wcm90b3R5cGUgKTtcblxuUmVhY3RpdmVTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xuXHQvLyBhZGQgdW5pcXVlIHZhbHVlXG5cdHRoaXMuY3VycmVudCA9IFtcblx0XHQuLi5uZXcgU2V0KCBbXG5cdFx0XHQuLi4oXG5cdFx0XHRcdHRoaXMuY3VycmVudCA/PyBbXVxuXHRcdFx0KSxcblx0XHRcdHN0YXRlTmFtZSxcblx0XHRdICksXG5cdF07XG59O1xuXG5SZWFjdGl2ZVNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUgKSB7XG5cdHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5maWx0ZXIoXG5cdFx0aXRlbSA9PiBpdGVtICE9PSBzdGF0ZU5hbWUsXG5cdCk7XG59O1xuXG5SZWFjdGl2ZVNldC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCBzdGF0ZU5hbWUsIGZvcmNlID0gbnVsbCApIHtcblx0aWYgKCBudWxsICE9PSBmb3JjZSApIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0Zm9yY2UgPyB0aGlzLmFkZCggc3RhdGVOYW1lICkgOiB0aGlzLnJlbW92ZSggc3RhdGVOYW1lICk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIHRoaXMuY3VycmVudC5pbmNsdWRlcyggc3RhdGVOYW1lICkgKSB7XG5cdFx0dGhpcy5yZW1vdmUoIHN0YXRlTmFtZSApO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHRoaXMuYWRkKCBzdGF0ZU5hbWUgKTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVTZXQ7IiwiaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5cbmZ1bmN0aW9uIFJlYWN0aXZlVmFyKCB2YWx1ZSA9IG51bGwgKSB7XG5cdHRoaXMuY3VycmVudCAgICA9IHZhbHVlO1xuXHR0aGlzLnNpZ25hbHMgICAgPSBbXTtcblx0dGhpcy5zYW5pdGl6ZXJzID0gW107XG5cdHRoaXMuaXNEZWJ1ZyAgICA9IGZhbHNlO1xuXHR0aGlzLmlzU2lsZW5jZSAgPSBmYWxzZTtcblx0dGhpcy5pc01ha2VkICAgID0gZmFsc2U7XG59XG5cblJlYWN0aXZlVmFyLnByb3RvdHlwZSA9IHtcblx0d2F0Y2hPbmNlICggY2FsbGFibGUgKSB7XG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGNsZWFyV2F0Y2hlciA9IHRoaXMud2F0Y2goICgpID0+IHtcblx0XHRcdGNsZWFyV2F0Y2hlcigpO1xuXHRcdFx0Y2FsbGFibGUoKTtcblx0XHR9ICk7XG5cdH0sXG5cdHdhdGNoICggY2FsbGFibGUgKSB7XG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLnNpZ25hbHMuc29tZSggKCB7IHNpZ25hbCB9ICkgPT4gc2lnbmFsID09PSBjYWxsYWJsZSApICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5zaWduYWxzLnB1c2goIHtcblx0XHRcdHNpZ25hbDogY2FsbGFibGUsXG5cdFx0XHR0cmFjZTogbmV3IEVycm9yKCkuc3RhY2ssXG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNpZ25hbHMubGVuZ3RoIC0gMTtcblxuXHRcdHJldHVybiAoKSA9PiB0aGlzLnNpZ25hbHMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHR9LFxuXHRzYW5pdGl6ZSAoIGNhbGxhYmxlICkge1xuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxhYmxlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggLTEgIT09IHRoaXMuc2FuaXRpemVycy5pbmRleE9mKCBjYWxsYWJsZSApICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5zYW5pdGl6ZXJzLnB1c2goIGNhbGxhYmxlICk7XG5cblx0XHRjb25zdCBpbmRleCA9IHRoaXMuc2FuaXRpemVycy5sZW5ndGggLSAxO1xuXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuc2FuaXRpemVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdH0sXG5cdG1ha2UgKCkge1xuXHRcdGlmICggdGhpcy5pc01ha2VkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmlzTWFrZWQgID0gdHJ1ZTtcblx0XHRsZXQgY3VycmVudCAgID0gdGhpcy5jdXJyZW50O1xuXHRcdGxldCBwcmV2VmFsdWUgPSBudWxsO1xuXHRcdGNvbnN0IHNlbGYgICAgPSB0aGlzO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCAnY3VycmVudCcsIHtcblx0XHRcdGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0XHR9LFxuXHRcdFx0c2V0KCBuZXdWYWwgKSB7XG5cdFx0XHRcdGlmICggY3VycmVudCA9PT0gbmV3VmFsICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRwcmV2VmFsdWUgPSBjdXJyZW50O1xuXHRcdFx0XHRpZiAoIHNlbGYuaXNEZWJ1ZyApIHtcblx0XHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCBuby1kZWJ1Z2dlciAqL1xuXHRcdFx0XHRcdGNvbnNvbGUuZ3JvdXAoICdSZWFjdGl2ZVZhciBoYXMgY2hhbmdlZCcgKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ2N1cnJlbnQ6JywgY3VycmVudCApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCAnbmV3VmFsOicsIG5ld1ZhbCApO1xuXHRcdFx0XHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcblx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUsIG5vLWRlYnVnZ2VyICovXG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudCA9IHNlbGYuYXBwbHlTYW5pdGl6ZXJzKCBuZXdWYWwgKTtcblxuXHRcdFx0XHRpZiAoIHNlbGYuaXNTaWxlbmNlICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLm5vdGlmeSggcHJldlZhbHVlICk7XG5cdFx0XHR9LFxuXHRcdH0gKTtcblx0fSxcblx0bm90aWZ5ICggcHJldlZhbHVlID0gbnVsbCApIHtcblx0XHR0aGlzLnNpZ25hbHMuZm9yRWFjaChcblx0XHRcdCggeyBzaWduYWwgfSApID0+IHNpZ25hbC5jYWxsKCB0aGlzLCBwcmV2VmFsdWUgKSApO1xuXHR9LFxuXHRhcHBseVNhbml0aXplcnMgKCB2YWx1ZSApIHtcblx0XHRmb3IgKCBjb25zdCBzYW5pdGl6ZXIgb2YgdGhpcy5zYW5pdGl6ZXJzICkge1xuXHRcdFx0dmFsdWUgPSBzYW5pdGl6ZXIuY2FsbCggdGhpcywgdmFsdWUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdHNldElmRW1wdHkoIG5ld1ZhbHVlICkge1xuXHRcdGlmICggIWlzRW1wdHkoIHRoaXMuY3VycmVudCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY3VycmVudCA9IG5ld1ZhbHVlO1xuXHR9LFxuXHRkZWJ1ZygpIHtcblx0XHR0aGlzLmlzRGVidWcgPSAhdGhpcy5pc0RlYnVnO1xuXHR9LFxuXHRzaWxlbmNlKCkge1xuXHRcdHRoaXMuaXNTaWxlbmNlID0gIXRoaXMuaXNTaWxlbmNlO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVWYXI7IiwiaW1wb3J0IFJlcG9ydGluZ0ludGVyZmFjZSBmcm9tICcuL1JlcG9ydGluZ0ludGVyZmFjZSc7XG5pbXBvcnQgeyBhbGxSZWplY3RlZCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBCcm93c2VyUmVwb3J0aW5nKCkge1xuXHRSZXBvcnRpbmdJbnRlcmZhY2UuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblx0dGhpcy5yZXBvcnRSYXcgICA9IGZ1bmN0aW9uICgpIHtcblx0fTtcblx0dGhpcy5yZXBvcnRGaXJzdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCk7XG5cblx0XHRub2RlLnJlcG9ydFZhbGlkaXR5KCk7XG5cdH07XG5cblx0dGhpcy5zZXRSZXN0cmljdGlvbnMgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMoIHRoaXMsIG5vZGUgKTtcblx0fTtcblx0dGhpcy5jbGVhclJlcG9ydCAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIGJyb3dzZXIgYXV0b21hdGljYWxseSBoaWRlIHRvb2x0aXAgbWVzc2FnZXNcblx0fTtcblx0dGhpcy52YWxpZGF0ZU9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudmFsaWRhdGUoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xuXHR9O1xuXG5cdHRoaXMuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcyApIHtcblx0XHRjb25zdCBlcnJvcnMgICA9IGF3YWl0IGFsbFJlamVjdGVkKCBwcm9taXNlcyApO1xuXHRcdHRoaXMudmFsdWVQcmV2ID0gdGhpcy5pbnB1dC5nZXRWYWx1ZSgpO1xuXG5cdFx0cmV0dXJuIGVycm9ycztcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xuXHR9O1xuXG5cdHRoaXMuaGFzQXV0b1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5oYXNBdXRvU2Nyb2xsKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLmdldE5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXQuZ2V0UmVwb3J0aW5nTm9kZSgpO1xuXHR9O1xufVxuXG5Ccm93c2VyUmVwb3J0aW5nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlclJlcG9ydGluZzsiLCJmdW5jdGlvbiBSZXBvcnRpbmdDb250ZXh0KCByb290ICkge1xuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLnJvb3QgPSByb290O1xuXG5cdHRoaXMucmVwb3J0ZWRGaXJzdCA9IGZhbHNlO1xuXHR0aGlzLnNpbGVuY2UgICAgICAgPSB0cnVlO1xuXG59XG5cblJlcG9ydGluZ0NvbnRleHQucHJvdG90eXBlID0ge1xuXHRyZXNldCggcHJvcHMgPSB7fSApIHtcblx0XHR0aGlzLnJlcG9ydGVkRmlyc3QgPSBmYWxzZTtcblx0XHR0aGlzLnNldFNpbGVuY2UoIHByb3BzPy5zaWxlbmNlID8/IHRydWUgKTtcblx0fSxcblx0cmVwb3J0Rmlyc3QoKSB7XG5cdFx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gdHJ1ZTtcblx0fSxcblx0c2V0U2lsZW5jZSggdmFsdWUgKSB7XG5cdFx0dGhpcy5zaWxlbmNlID0gISF2YWx1ZTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGluZ0NvbnRleHQ7XG5cbiIsIi8qKlxuICogVmFsaWRhdGlvbiBsb2dpYzogb24gY2hhbmdlIGlucHV0IHZhbHVlIHdlIHJ1blxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UudmFsaWRhdGVPbkNoYW5nZVxuICpcbiAqIEluIHRoYXQgZnVuY3Rpb24gd2UgY2xlYXIgc3RvcmVkIGVycm9yc1xuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UuZXJyb3JzXG4gKiBjaGVjayBhbGwgcmVzdHJpY3Rpb25zIGFnYWluIGFuZCBzYXZlIGVycm9yc1xuICogdG8gdGhlIHNhbWUgcHJvcGVydHkuXG4gKlxuICogV2hlbiB1c2VyIHRyaWVzIHRvIHN1Ym1pdCBmb3JtIHdlIHJ1blxuICogQHNlZSBSZXBvcnRpbmdJbnRlcmZhY2UudmFsaWRhdGVcbiAqIElmIHRoZXJlIHdhcyBzdG9yZWQgZXJyb3JzIC0gaXQgd2lsbCByZXR1cm4gdGhlbS5cbiAqIE90aGVyd2lzZSB3ZSBjaGVjayBhbGwgYW5kIHNhdmUgZXJyb3JzLlxuICpcbiAqIEluIHRoZSBjYXNlIHdoZW4gd2UgcnVuIHRoZSB2YWxpZGF0aW9uIHRocm91Z2ggdGhlXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5pc1ZhbGlkXG4gKiBXZSBcImJsb2NrIHRoZSBmb3JtXCIgdGhyb3VnaCB0aGUgXCJ0ZXN0XCIgcHJvcGVydHkuXG4gKiBUaGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCBhbmQgd2hlbiBpdCBjaGFuZ2VzLFxuICogdGhlIHN0YXRlIG9mIHRoZSBidXR0b24gZm9yIHN1Ym1pdHRpbmcgdGhlIGZvcm1cbiAqIGFuZCB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGJldHdlZW4gcGFnZXMgY2hhbmdlcy5cbiAqL1xuaW1wb3J0IFJlc3RyaWN0aW9uRXJyb3IgZnJvbSAnLi9SZXN0cmljdGlvbkVycm9yJztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5cbmZ1bmN0aW9uIFJlcG9ydGluZ0ludGVyZmFjZSgpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHR0aGlzLmlucHV0ID0gbnVsbDtcblx0dGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBAdHlwZSB7QXJyYXkgfCBudWxsfVxuXHQgKi9cblx0dGhpcy5lcnJvcnMgPSBudWxsO1xuXHR0aGlzLnJlc3RyaWN0aW9ucyA9IFtdO1xuXG5cdHRoaXMudmFsdWVQcmV2ICAgICA9IG51bGw7XG5cdHRoaXMudmFsaWRpdHlTdGF0ZSA9IG51bGw7XG5cdHRoaXMucHJvbWlzZXNDb3VudCA9IDA7XG59XG5cblJlcG9ydGluZ0ludGVyZmFjZS5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVzdHJpY3Rpb25bXX1cblx0ICovXG5cdHJlc3RyaWN0aW9uczogW10sXG5cdHZhbHVlUHJldjogbnVsbCxcblx0LyoqXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHZhbGlkaXR5U3RhdGU6IG51bGwsXG5cdHByb21pc2VzQ291bnQ6IDAsXG5cdC8qKlxuXHQgKiBSdW5zIG9uIGNoYW5naW5nIHZhbHVlIGluIHRoZSBmaWVsZFxuXHQgKiBAc2VlIElucHV0RGF0YS5vbkNoYW5nZVxuXHQgKi9cblx0dmFsaWRhdGVPbkNoYW5nZSAoKSB7XG5cdH0sXG5cdHZhbGlkYXRlT25CbHVyICgpIHtcblx0fSxcblx0LyoqXG5cdCAqIFJ1bnMgb24gdHJ5aW5nIHRvIHN1Ym1pdCBmb3JtXG5cdCAqIEBzZWUgT2JzZXJ2YWJsZS5pbnB1dHNBcmVWYWxpZFxuXHQgKlxuXHQgKiBSdW5zIG9uIGNoYW5naW5nIHZhbHVlLCBpZiB0aGlzIGZpZWxkIGluc2lkZSBwYWdlXG5cdCAqIEBzZWUgSW5wdXREYXRhLnNldFBhZ2Vcblx0ICogQHNlZSBQYWdlU3RhdGUudXBkYXRlU3RhdGVcblx0ICpcblx0ICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cblx0ICovXG5cdGFzeW5jIHZhbGlkYXRlICggc2lnbmFsID0gbnVsbCApIHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0gYXdhaXQgdGhpcy5nZXRFcnJvcnMoIHNpZ25hbCApO1xuXG5cdFx0dGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgPSAhQm9vbGVhbiggZXJyb3JzLmxlbmd0aCApO1xuXG5cdFx0aWYgKCAhZXJyb3JzLmxlbmd0aCApIHtcblx0XHRcdHRoaXMuY2xlYXJSZXBvcnQoKTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdCF0aGlzLmlucHV0LnJvb3QuZ2V0Q29udGV4dCgpLnNpbGVuY2UgJiYgdGhpcy5yZXBvcnQoIGVycm9ycyApO1xuXG5cdFx0dGhyb3cgbmV3IFJlc3RyaWN0aW9uRXJyb3IoIGVycm9yc1sgMCBdLm5hbWUgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgcHJvbWlzZXMge0Z1bmN0aW9uW119XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXkgfCBudWxsPn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRhc3luYyBnZXRFcnJvcnNSYXcgKCBwcm9taXNlcyApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdnZXRFcnJvciBtdXN0IHJldHVybiBhIFByb21pc2UnICk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXkgfCAqW10gfCBudWxsPn1cblx0ICovXG5cdGFzeW5jIGdldEVycm9ycyAoIHNpZ25hbCA9IG51bGwgKSB7XG5cdFx0aWYgKFxuXHRcdFx0dGhpcy5pbnB1dC5sb2FkaW5nLmN1cnJlbnQgfHxcblx0XHRcdHRoaXMuaW5wdXQ/LmNhbGxhYmxlPy5sb2NrPy5jdXJyZW50IHx8XG5cdFx0XHQhdGhpcy5pbnB1dC5pc1Zpc2libGUoKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5nZXRQcm9taXNlcyggc2lnbmFsICk7XG5cblx0XHRpZiAoXG5cdFx0XHQhdGhpcy5oYXNDaGFuZ2VkVmFsdWUoKSAmJlxuXHRcdFx0dGhpcy5wcm9taXNlc0NvdW50ID09PSBwcm9taXNlcy5sZW5ndGggJiZcblx0XHRcdCF0aGlzLmlucHV0LnN0b3BWYWxpZGF0aW9uXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvcnMgPz8gW107XG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9taXNlc0NvdW50ID0gcHJvbWlzZXMubGVuZ3RoO1xuXHRcdHRoaXMuZXJyb3JzICAgICAgICA9IFtdO1xuXG5cdFx0aWYgKCAhcHJvbWlzZXMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JzO1xuXHRcdH1cblxuXHRcdHRoaXMuZXJyb3JzID0gYXdhaXQgdGhpcy5nZXRFcnJvcnNSYXcoIHByb21pc2VzLCBzaWduYWwgKTtcblxuXHRcdHJldHVybiB0aGlzLmVycm9ycztcblx0fSxcblx0cmVwb3J0ICggdmFsaWRhdGlvbkVycm9ycyApIHtcblx0XHRpZiAoIHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnJlcG9ydGVkRmlyc3QgKSB7XG5cdFx0XHR0aGlzLnJlcG9ydFJhdyggdmFsaWRhdGlvbkVycm9ycyApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkucmVwb3J0Rmlyc3QoKTtcblxuXHRcdHRoaXMucmVwb3J0Rmlyc3QoIHZhbGlkYXRpb25FcnJvcnMgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSB2YWxpZGF0aW9uRXJyb3JzIHtSZXN0cmljdGlvbltdfVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdHJlcG9ydFJhdyAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCAncmVwb3J0IGlzIGVtcHR5JyApO1xuXHR9LFxuXHRyZXBvcnRGaXJzdCAoIHZhbGlkYXRpb25FcnJvcnMgKSB7XG5cdFx0dGhpcy5yZXBvcnQoIHZhbGlkYXRpb25FcnJvcnMgKTtcblx0fSxcblx0Y2xlYXJSZXBvcnQgKCkge1xuXHRcdHRocm93IG5ldyBFcnJvciggJ2NsZWFyUmVwb3J0IGlzIGVtcHR5JyApO1xuXHR9LFxuXHRnZXRQcm9taXNlcyAoIHNpZ25hbCA9IG51bGwpIHtcblx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgdGhpcy5yZXN0cmljdGlvbnMgKSB7XG5cdFx0XHRpZiAoICF0aGlzLmNhblByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKTtcblxuXHRcdFx0cHJvbWlzZXMucHVzaCggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRcdHJlc3RyaWN0aW9uLnZhbGlkYXRlUHJvbWlzZSggc2lnbmFsICkuXG5cdFx0XHRcdFx0dGhlbiggKCkgPT4gcmVzb2x2ZSggcmVzdHJpY3Rpb24gKSApLlxuXHRcdFx0XHRcdGNhdGNoKCBlcnJvciA9PiByZWplY3QoIFsgcmVzdHJpY3Rpb24sIGVycm9yIF0gKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSAgcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGNhblByb2Nlc3NSZXN0cmljdGlvbiAoIHJlc3RyaWN0aW9uICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiAoIHJlc3RyaWN0aW9uICkge1xuXHR9LFxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1yZXR1cm5zLWNoZWNrXG5cdC8qKlxuXHQgKiBAcGFyYW0gIG5vZGUgIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XG5cdCAqXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0aXNTdXBwb3J0ZWQgKCBub2RlLCBpbnB1dCApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdpc1N1cHBvcnRlZCBpcyBlbXB0eScgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxuXHQgKi9cblx0c2V0SW5wdXQgKCBpbnB1dCApIHtcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUubWFrZSgpO1xuXG5cdFx0dGhpcy5pbnB1dCA9IGlucHV0O1xuXHRcdHRoaXMuc2V0UmVzdHJpY3Rpb25zKCk7XG5cdFx0dGhpcy5maWx0ZXJSZXN0cmljdGlvbnMoKTtcblx0fSxcblx0c2V0UmVzdHJpY3Rpb25zICgpIHtcblx0fSxcblx0LyoqXG5cdCAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRnZXROb2RlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5ub2Rlc1sgMCBdO1xuXHR9LFxuXG5cdGhhc0NoYW5nZWRWYWx1ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVQcmV2ICE9PSB0aGlzLmlucHV0LmdldFZhbHVlKCk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxuXHQgKi9cblx0Y2hlY2tWYWxpZGl0eSAoKSB7XG5cdFx0Y29uc3QgaXNTaWxlbmNlID0gdGhpcy5pbnB1dC5nZXRDb250ZXh0KCkuc2lsZW5jZTtcblxuXHRcdGlmICggbnVsbCA9PT0gdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKCB0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzU2lsZW5jZSApIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHQhaXNTaWxlbmNlICYmIHRoaXMucmVwb3J0KCB0aGlzLmVycm9ycyB8fCBbXSApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICpcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGhhc0F1dG9TY3JvbGwgKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0LyoqXG5cdCAqIFdpdGggdGhlIGhlbHAgb2YgZmlsdGVycyB0aGF0IGFkZCBuZXcgcmVzdHJpY3Rpb25zLFxuXHQgKiB5b3UgY2FuIG92ZXJ3cml0ZSBhIHBhcnRpY3VsYXIgcmVzdHJpY3Rpb25cblx0ICogaWYgdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIGRlZmluZWQgaW4gaXRcblx0ICovXG5cdGZpbHRlclJlc3RyaWN0aW9ucyAoKSB7XG5cdFx0Y29uc3QgbWFwID0ge307XG5cblx0XHRmb3IgKCBsZXQgWyBpbmRleCwgcmVzdHJpY3Rpb24gXSBvZiBPYmplY3QuZW50cmllcyhcblx0XHRcdHRoaXMucmVzdHJpY3Rpb25zICkgKSB7XG5cdFx0XHRpbmRleCA9IHJlc3RyaWN0aW9uLmdldFR5cGUoKSA/IHJlc3RyaWN0aW9uLmdldFR5cGUoKSA6IGluZGV4O1xuXG5cdFx0XHRtYXBbIGluZGV4IF0gPSByZXN0cmljdGlvbjtcblx0XHR9XG5cblx0XHR0aGlzLnJlc3RyaWN0aW9ucyA9IE9iamVjdC52YWx1ZXMoIG1hcCApO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0aW5nSW50ZXJmYWNlOyIsImZ1bmN0aW9uIFJlc3RyaWN0aW9uRXJyb3IoIG1lc3NhZ2UgKSB7XG5cdEVycm9yLmNhbGwoIHRoaXMsIG1lc3NhZ2UgKTtcblxuXHRpZiAoIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlICkge1xuXHRcdEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKCB0aGlzLCBSZXN0cmljdGlvbkVycm9yICk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5zdGFjayA9IChcblx0XHRcdG5ldyBFcnJvcigpXG5cdFx0KS5zdGFjaztcblx0fVxufVxuXG5SZXN0cmljdGlvbkVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEVycm9yLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZXN0cmljdGlvbkVycm9yOyIsIi8qKlxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxuICovXG5pbXBvcnQgQnJvd3NlclJlcG9ydGluZyBmcm9tICcuL0Jyb3dzZXJSZXBvcnRpbmcnO1xuaW1wb3J0IHsgYWxsUmVqZWN0ZWQgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcbmltcG9ydCBOYXRpdmVSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9OYXRpdmVSZXN0cmljdGlvbic7XG5pbXBvcnQgUmVxdWlyZWRSZXN0cmljdGlvbiBmcm9tICcuL3Jlc3RyaWN0aW9ucy9SZXF1aXJlZFJlc3RyaWN0aW9uJztcblxuY29uc3Qge1xuXHQgICAgICBhcHBseUZpbHRlcnMsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3QgZ2V0UmVwb3J0VHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIucmVwb3J0aW5nJyxcblx0W1xuXHRcdEJyb3dzZXJSZXBvcnRpbmcsXG5cdF0sXG4pO1xuXG5sZXQgcmVwb3J0VHlwZXMgPSBbXTtcblxuY29uc3QgZ2V0RGVmYXVsdFJlc3RyaWN0aW9ucyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXG5cdFtcblx0XHROYXRpdmVSZXN0cmljdGlvbixcblx0XHRSZXF1aXJlZFJlc3RyaWN0aW9uLFxuXHRdLFxuKTtcblxubGV0IGRlZmF1bHRSZXN0cmljdGlvbnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gIHJlcG9ydGluZyB7QnJvd3NlclJlcG9ydGluZ31cbiAqIEBwYXJhbSAgbm9kZVxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyggcmVwb3J0aW5nLCBub2RlICkge1xuXHRpZiAoICFkZWZhdWx0UmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcblx0XHRkZWZhdWx0UmVzdHJpY3Rpb25zID0gZ2V0RGVmYXVsdFJlc3RyaWN0aW9ucygpO1xuXHR9XG5cblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgZGVmYXVsdFJlc3RyaWN0aW9ucyApIHtcblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlc3RyaWN0aW9uKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBub2RlLCByZXBvcnRpbmcgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJlcG9ydGluZy5yZXN0cmljdGlvbnMucHVzaCggY3VycmVudCApO1xuXHR9XG5cblx0cmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5mb3JFYWNoKCBpdGVtID0+IGl0ZW0uc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKSApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cbiAqIEByZXR1cm4ge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlcG9ydCggaW5wdXQgKSB7XG5cdGlmICggIXJlcG9ydFR5cGVzLmxlbmd0aCApIHtcblx0XHRyZXBvcnRUeXBlcyA9IGdldFJlcG9ydFR5cGVzKCk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCByZXBvcnRUeXBlIG9mIHJlcG9ydFR5cGVzICkge1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVwb3J0VHlwZSgpO1xuXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggaW5wdXQubm9kZXNbIDAgXSwgaW5wdXQgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjdXJyZW50LnNldElucHV0KCBpbnB1dCApO1xuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHR0aHJvdyBuZXcgRXJyb3IoICdTb21ldGhpbmcgd2VudCB3cm9uZycgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIGlucHV0cyAge0lucHV0RGF0YVtdfVxuICogQHBhcmFtICBzaWxlbmNlIHtCb29sZWFufVxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9uW119XG4gKi9cbmZ1bmN0aW9uIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcblx0Y29uc3QgY2FsbGJhY2tzID0gW107XG5cblx0aW5wdXRzPy5bIDAgXT8uZ2V0Q29udGV4dCgpPy5yZXNldCggeyBzaWxlbmNlIH0gKTtcblxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0aWYgKCAhKFxuXHRcdFx0aW5wdXQgaW5zdGFuY2VvZiBJbnB1dERhdGFcblx0XHQpICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnSW5wdXQgaXMgbm90IGluc3RhbmNlIG9mIElucHV0RGF0YScgKTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tzLnB1c2goXG5cdFx0XHQoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdFx0aW5wdXQucmVwb3J0aW5nLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSgpLlxuXHRcdFx0XHRcdHRoZW4oIHJlc29sdmUgKS5cblx0XHRcdFx0XHRjYXRjaCggcmVqZWN0ICk7XG5cdFx0XHR9LFxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gY2FsbGJhY2tzO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gIHNpbGVuY2Uge0Jvb2xlYW59XG4gKiBAcmV0dXJuIHtQcm9taXNlPHVua25vd25bXT59XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRzKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcblx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgKS5tYXAoXG5cdFx0XHRjdXJyZW50ID0+IG5ldyBQcm9taXNlKCBjdXJyZW50ICksXG5cdFx0KSxcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gaW5wdXRzICB7SW5wdXREYXRhW119XG4gKiBAcGFyYW0gc2lsZW5jZSB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dHNBbGwoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xuXHRyZXR1cm4gYWxsUmVqZWN0ZWQoIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgKSApO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVSZXBvcnQsXG5cdHZhbGlkYXRlSW5wdXRzLFxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcblx0Y3JlYXRlRGVmYXVsdFJlc3RyaWN0aW9ucyxcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXG59OyIsImltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL1Jlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gTmF0aXZlUmVzdHJpY3Rpb24oKSB7XG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAhIW5vZGUuY2hlY2tWYWxpZGl0eTtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgbm9kZXMgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0O1xuXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBub2RlcyApIHtcblx0XHRcdGlmICggbm9kZS5jaGVja1ZhbGlkaXR5KCkgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcbn1cblxuTmF0aXZlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZVJlc3RyaWN0aW9uOyIsImltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL1Jlc3RyaWN0aW9uJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBSZXF1aXJlZFJlc3RyaWN0aW9uKCkge1xuXHRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy50eXBlID0gJ3JlcXVpcmVkJztcbn1cblxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0cmV0dXJuIHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkO1xufTtcblxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWU7XG5cblx0cmV0dXJuICFpc0VtcHR5KCBjdXJyZW50ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1aXJlZFJlc3RyaWN0aW9uOyIsImZ1bmN0aW9uIFJlc3RyaWN0aW9uKCkge1xuXHQvKipcblx0ICogQHR5cGUge1JlcG9ydGluZ0ludGVyZmFjZX1cblx0ICovXG5cdHRoaXMucmVwb3J0aW5nID0gbnVsbDtcblx0LyoqXG5cdCAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBwcm9wZXJ0eVxuXHQgKiBpZiB5b3Ugd2FudCB0byBtYWtlIHRoaXMgUmVzdHJpY3Rpb24gb3ZlcnJpZGFibGVcblx0ICpcblx0ICogQHNpbmNlIDMuMS4wXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHR0aGlzLnR5cGUgPSAnJztcbn1cblxuUmVzdHJpY3Rpb24ucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogQHBhcmFtIG5vZGUgICAgICB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cblx0ICogQHBhcmFtIHJlcG9ydGluZyB7UmVwb3J0aW5nSW50ZXJmYWNlfVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMS4wXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdldFR5cGUgKCkge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcGFyYW0gcmVwb3J0aW5nIHtSZXBvcnRpbmdJbnRlcmZhY2V9XG5cdCAqL1xuXHRzZXRSZXBvcnRpbmcgKCByZXBvcnRpbmcgKSB7XG5cdFx0dGhpcy5yZXBvcnRpbmcgPSByZXBvcnRpbmc7XG5cdH0sXG5cdGdldFZhbHVlICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWUuY3VycmVudDtcblx0fSxcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xuXHQvKipcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHZhbGlkYXRlICgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoICd2YWxpZGF0ZSBpcyB3cm9uZycgKTtcblx0fSxcblx0LyoqXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Kj59XG5cdCAqL1xuXHRhc3luYyB2YWxpZGF0ZVByb21pc2UgKCkge1xuXHRcdGxldCB2YWxpZGF0aW9uUmVzdWx0O1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhbGlkYXRpb25SZXN1bHQgPSBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoIGVycm9yPy5tZXNzYWdlID8/IGVycm9yICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbGlkYXRpb25SZXN1bHRcblx0XHQgICAgICAgPyBQcm9taXNlLnJlc29sdmUoKVxuXHRcdCAgICAgICA6IFByb21pc2UucmVqZWN0KCAndmFsaWRhdGUgaXMgd3JvbmcnICk7XG5cdH0sXG5cdG9uUmVhZHkoKSB7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN0cmljdGlvbjsiLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xuXG5jb25zdCB7IHN0cmljdF9tb2RlID0gZmFsc2UgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncztcblxuY29uc3QgU1RSSUNUX01PREUgPSBCb29sZWFuKCBzdHJpY3RfbW9kZSApO1xuXG5mdW5jdGlvbiBCYXNlU2lnbmFsKCkge1xuXHR0aGlzLmlucHV0ID0gbnVsbDtcblx0dGhpcy5sb2NrICA9IG5ldyBSZWFjdGl2ZVZhcigpO1xuXHR0aGlzLmxvY2subWFrZSgpO1xuXG5cdHRoaXMudHJpZ2dlcmpRdWVyeSA9ICFTVFJJQ1RfTU9ERTtcbn1cblxuQmFzZVNpZ25hbC5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0aW5wdXQ6IG51bGwsXG5cdC8qKlxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHRsb2NrOiBudWxsLFxuXHQvKipcblx0ICogQHBhcmFtICBub2RlICAgICAge0hUTUxFbGVtZW50fVxuXHQgKiBAcGFyYW0gIGlucHV0RGF0YSB7SW5wdXREYXRhfVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGlzU3VwcG9ydGVkICggbm9kZSwgaW5wdXREYXRhICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0c2V0SW5wdXQgKCBpbnB1dCApIHtcblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XG5cdH0sXG5cdHJ1biAoIHByZXZWYWx1ZSApIHtcblx0XHRpZiAoICF0aGlzLmxvY2suY3VycmVudCApIHtcblx0XHRcdHRoaXMucnVuU2lnbmFsKCBwcmV2VmFsdWUgKTtcblx0XHRcdHRoaXMudW5sb2NrVHJpZ2dlcigpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCAhdGhpcy5sb2NrLnNpZ25hbHMubGVuZ3RoICkge1xuXHRcdFx0dGhpcy5sb2NrLndhdGNoT25jZSggKCkgPT4gdGhpcy5ydW5TaWduYWwoIHByZXZWYWx1ZSApICk7XG5cdFx0fVxuXHR9LFxuXHR0cmlnZ2VySlF1ZXJ5KCBub2RlICkge1xuXHRcdGlmICggIXRoaXMudHJpZ2dlcmpRdWVyeSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0alF1ZXJ5KCBub2RlICkudHJpZ2dlciggJ2NoYW5nZScgKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwYXJhbSBwcmV2VmFsdWVcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdHJ1blNpZ25hbCAoIHByZXZWYWx1ZSApIHtcblx0XHQvLyB5b3VyIGNvZGVcblx0fSxcblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKi9cblx0bG9ja1RyaWdnZXIgKCkge1xuXHRcdHRoaXMudHJpZ2dlcmpRdWVyeSA9IGZhbHNlO1xuXHR9LFxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqL1xuXHR1bmxvY2tUcmlnZ2VyICgpIHtcblx0XHRpZiAoIFNUUklDVF9NT0RFICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXJqUXVlcnkgPSB0cnVlO1xuXHR9LFxufTtcblxuZXhwb3J0IHsgU1RSSUNUX01PREUgfTtcbmV4cG9ydCBkZWZhdWx0IEJhc2VTaWduYWw7IiwiaW1wb3J0IEJhc2VTaWduYWwgZnJvbSAnLi9CYXNlU2lnbmFsJztcbmltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xuXG5mdW5jdGlvbiBTaWduYWxIaWRkZW5BcnJheSgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG59XG5cblNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cblNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXREYXRhICkge1xuXHRyZXR1cm4gaXNIaWRkZW4oIG5vZGUgKSAmJiBpbnB1dERhdGEuaXNBcnJheSgpO1xufTtcblNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZS5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmlucHV0LnZhbHVlO1xuXG5cdGlmICggIWN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMuaW5wdXQubm9kZXMgKSB7XG5cdFx0XHRub2RlLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXQubm9kZXMuc3BsaWNlKCAwLCB0aGlzLmlucHV0Lm5vZGVzLmxlbmd0aCApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNhdmVOb2RlcyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IHZhbHVlIG9mIGN1cnJlbnQgKSB7XG5cdFx0Y29uc3QgaGFzTm9kZVdpdGhTYW1lVmFsdWUgPSB0aGlzLmlucHV0Lm5vZGVzLnNvbWUoXG5cdFx0XHQoIG5vZGUsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHRpZiAoIG5vZGUudmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzYXZlTm9kZXMucHVzaCggaW5kZXggKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9ICk7XG5cblx0XHRpZiAoIGhhc05vZGVXaXRoU2FtZVZhbHVlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbnB1dCcgKTtcblx0XHRuZXdFbGVtZW50LnR5cGUgID0gJ2hpZGRlbic7XG5cdFx0bmV3RWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuXHRcdG5ld0VsZW1lbnQubmFtZSAgPSB0aGlzLmlucHV0LnJhd05hbWU7XG5cblx0XHR0aGlzLmlucHV0Lm5vZGVzLnB1c2goIG5ld0VsZW1lbnQgKTtcblx0XHRzYXZlTm9kZXMucHVzaCggdGhpcy5pbnB1dC5ub2Rlcy5sZW5ndGggLSAxICk7XG5cblx0XHR0aGlzLmlucHV0LmNvbW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRuZXdFbGVtZW50LFxuXHRcdFx0dGhpcy5pbnB1dC5jb21tZW50Lm5leHRFbGVtZW50U2libGluZyxcblx0XHQpO1xuXHR9XG5cblx0dGhpcy5pbnB1dC5ub2RlcyA9IHRoaXMuaW5wdXQubm9kZXMuZmlsdGVyKCAoIG5vZGUsIGluZGV4ICkgPT4ge1xuXHRcdGlmICggc2F2ZU5vZGVzLmluY2x1ZGVzKCBpbmRleCApICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdG5vZGUucmVtb3ZlKCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxIaWRkZW5BcnJheTsiLCJpbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL0Jhc2VTaWduYWwnO1xuaW1wb3J0IHsgaXNSYW5nZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JhbmdlRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICovXG5mdW5jdGlvbiBTaWduYWxSYW5nZSgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNSYW5nZSggbm9kZSApO1xuXHR9O1xuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2Rlcztcblx0XHRub2RlLnZhbHVlICAgICA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcblxuXHRcdHRoaXMuaW5wdXQubnVtYmVyTm9kZS50ZXh0Q29udGVudCA9IG5vZGUudmFsdWU7XG5cblx0XHR0aGlzLnRyaWdnZXJKUXVlcnkoIG5vZGUgKTtcblx0fTtcbn1cblxuU2lnbmFsUmFuZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmFuZ2U7IiwiaW1wb3J0IFNpZ25hbEhpZGRlbkFycmF5IGZyb20gJy4vU2lnbmFsSGlkZGVuQXJyYXknO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVuZGVyU3RhdGVEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKiBAY2xhc3NcbiAqL1xuZnVuY3Rpb24gU2lnbmFsUmVuZGVyU3RhdGUoKSB7XG5cdFNpZ25hbEhpZGRlbkFycmF5LmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXNbXScgPT09IG5vZGUubmFtZTtcblx0fTtcblxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICggcHJldlZhbHVlICkge1xuXHRcdFNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZS5ydW5TaWduYWwuY2FsbCggdGhpcywgcHJldlZhbHVlICk7XG5cblx0XHRjb25zdCB1cmwgICAgID0gbmV3IFVSTCggd2luZG93LmxvY2F0aW9uICk7XG5cdFx0Y29uc3QgZm9ybUlkICA9IHRoaXMuaW5wdXQuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCB8fCBbXTtcblx0XHRjb25zdCBwYXJhbSAgID0gYGpmYlskeyBmb3JtSWQgfV1bc3RhdGVdYDtcblx0XHRjb25zdCBzdGF0ZXMgID0gW107XG5cblx0XHRmb3IgKCBjb25zdCBzdGF0ZVNsdWcgb2YgY3VycmVudCApIHtcblx0XHRcdGlmICggIXRoaXMuaW5wdXQuaXNDdXN0b20oIHN0YXRlU2x1ZyApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0c3RhdGVzLnB1c2goIHN0YXRlU2x1ZyApO1xuXHRcdH1cblxuXHRcdGlmICggIXN0YXRlcy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoICF1cmwuc2VhcmNoUGFyYW1zLmhhcyggcGFyYW0gKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSggcGFyYW0gKTtcblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgge30sICcnLCB1cmwudG9TdHJpbmcoKSApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyYW1WYWx1ZSA9IHN0YXRlcy5qb2luKCAnLCcgKTtcblx0XHRpZiAoIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCBwYXJhbSApID09PSBwYXJhbVZhbHVlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHVybC5zZWFyY2hQYXJhbXMuc2V0KCBwYXJhbSwgcGFyYW1WYWx1ZSApO1xuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgge30sICcnLCB1cmwudG9TdHJpbmcoKSApO1xuXHR9O1xufVxuXG5TaWduYWxSZW5kZXJTdGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVuZGVyU3RhdGU7IiwiaW1wb3J0IFNpZ25hbEhpZGRlbkFycmF5IGZyb20gJy4vU2lnbmFsSGlkZGVuQXJyYXknO1xuaW1wb3J0IFNpZ25hbFJhbmdlIGZyb20gJy4vU2lnbmFsUmFuZ2UnO1xuaW1wb3J0IFNpZ25hbFJlbmRlclN0YXRlIGZyb20gJy4vU2lnbmFsUmVuZGVyU3RhdGUnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRTaWduYWxUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcblx0J2pldC5mYi5zaWduYWxzJyxcblx0W1xuXHRcdFNpZ25hbFJhbmdlLFxuXHRcdFNpZ25hbFJlbmRlclN0YXRlLFxuXHRcdFNpZ25hbEhpZGRlbkFycmF5LFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7KEJhc2VTaWduYWwpW119XG4gKi9cbmxldCBzaWduYWxUeXBlcyA9IFtdO1xuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSAge0hUTUxFbGVtZW50fVxuICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxuICogQHJldHVybiB7QmFzZVNpZ25hbH1cbiAqL1xuZnVuY3Rpb24gZ2V0U2lnbmFsKCBub2RlLCBpbnB1dCApIHtcblx0aWYgKCAhc2lnbmFsVHlwZXMubGVuZ3RoICkge1xuXHRcdHNpZ25hbFR5cGVzID0gZ2V0U2lnbmFsVHlwZXMoKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHNpZ25hbFR5cGUgb2Ygc2lnbmFsVHlwZXMgKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBzaWduYWxUeXBlKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBub2RlLCBpbnB1dCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IHsgZ2V0U2lnbmFsIH07IiwiaW1wb3J0IEJhc2VTdWJtaXQgZnJvbSAnLi9CYXNlU3VibWl0JztcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5pbXBvcnQgeyBpc1N1Y2Nlc3NTdGF0dXMgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBBamF4U3VibWl0KCBmb3JtICkge1xuXHRCYXNlU3VibWl0LmNhbGwoIHRoaXMsIGZvcm0gKTtcblxuXHR0aGlzLnN0YXR1cyA9IG5ldyBSZWFjdGl2ZVZhcigpO1xuXHR0aGlzLnN0YXR1cy5tYWtlKCk7XG5cblx0dGhpcy5zdWJtaXQgICAgICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0ICRmb3JtICAgICAgICAgICAgPSBqUXVlcnkoIHRoaXMuZm9ybS5vYnNlcnZhYmxlLnJvb3ROb2RlICk7XG5cdFx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cblx0XHRQcm9taXNlLmFsbChcblx0XHRcdGFwcGx5RmlsdGVycyhcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQuYWpheC5wcm9taXNlcycsXG5cdFx0XHRcdHRoaXMuZ2V0UHJvbWlzZXMoKSxcblx0XHRcdFx0JGZvcm0sXG5cdFx0XHQpLFxuXHRcdCkudGhlbihcblx0XHRcdGNhbGxiYWNrcyA9PiB0aGlzLnJ1blN1Ym1pdCggY2FsbGJhY2tzICksXG5cdFx0KS5jYXRjaChcblx0XHRcdCgpID0+IHRoaXMuZm9ybS50b2dnbGUoKSxcblx0XHQpO1xuXHR9O1xuXHR0aGlzLnJ1blN1Ym1pdCAgICAgPSBmdW5jdGlvbiAoIGNhbGxiYWNrcyApIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcblxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCByb290Tm9kZSApO1xuXHRcdGZvcm1EYXRhLmFwcGVuZChcblx0XHRcdCdfamV0X2VuZ2luZV9ib29raW5nX2Zvcm1faWQnLFxuXHRcdFx0dGhpcy5mb3JtLmdldEZvcm1JZCgpLFxuXHRcdCk7XG5cblx0XHQvLyBkaXNhYmxlIHdhdGNoZXJzXG5cdFx0dGhpcy5zdGF0dXMuc2lsZW5jZSgpO1xuXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IG51bGw7XG5cblx0XHQvLyBlbmFibGUgd2F0Y2hlcnNcblx0XHR0aGlzLnN0YXR1cy5zaWxlbmNlKCk7XG5cblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiBKZXRGb3JtQnVpbGRlclNldHRpbmdzLmFqYXh1cmwsXG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdFx0ZGF0YTogZm9ybURhdGEsXG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0XHRjb250ZW50VHlwZTogZmFsc2UsXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXG5cdFx0fSApLmRvbmUoXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHRoaXMub25TdWNjZXNzKCByZXNwb25zZSApO1xuXHRcdFx0XHRjb25zdCAkZm9ybSA9IGpRdWVyeSggcm9vdE5vZGUgKTtcblxuXHRcdFx0XHRjYWxsYmFja3MuZm9yRWFjaCggY2IgPT4ge1xuXHRcdFx0XHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGNiICkge1xuXHRcdFx0XHRcdFx0Y2IuY2FsbCggJGZvcm0sIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9LFxuXHRcdCkuZmFpbChcblx0XHRcdHRoaXMub25GYWlsLmJpbmQoIHRoaXMgKSxcblx0XHQpO1xuXHR9O1xuXHR0aGlzLm9uU3VjY2VzcyAgICAgPSBmdW5jdGlvbiAoIHJlc3BvbnNlICkge1xuXHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblxuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdFx0dGhpcy5sYXN0UmVzcG9uc2UgPSByZXNwb25zZTtcblx0XHRjb25zdCAkZm9ybSAgICAgICA9IGpRdWVyeSggcm9vdE5vZGUgKTtcblxuXHRcdHN3aXRjaCAoIHJlc3BvbnNlLnN0YXR1cyApIHtcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci9hamF4L29uLXN1Y2Nlc3MnLFxuXHRcdFx0XHRcdFsgcmVzcG9uc2UsICRmb3JtIF0sXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW4gc3RhdHVzIHdhdGNoZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IHJlc3BvbnNlLnN0YXR1cztcblxuXHRcdGlmICggcmVzcG9uc2UucmVkaXJlY3QgKSB7XG5cdFx0XHRpZiAoIHJlc3BvbnNlLm9wZW5faW5fbmV3X3RhYiApIHtcblx0XHRcdFx0d2luZG93Lm9wZW4oIHJlc3BvbnNlLnJlZGlyZWN0LCAnX2JsYW5rJyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UucmVkaXJlY3Q7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCByZXNwb25zZS5yZWxvYWQgKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnNlcnRNZXNzYWdlKCByZXNwb25zZS5tZXNzYWdlICk7XG5cdH07XG5cdHRoaXMub25GYWlsICAgICAgICA9IGZ1bmN0aW9uICgganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xuXHRcdHRoaXMuZm9ybS50b2dnbGUoKTtcblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gZmFsc2U7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUuZXJyb3IoIGpxWEhSLnJlc3BvbnNlVGV4dCwgZXJyb3JUaHJvd24gKTtcblx0fTtcblx0dGhpcy5pbnNlcnRNZXNzYWdlID0gZnVuY3Rpb24gKCBtZXNzYWdlICkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xuXG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKCAnamV0LWZvcm0tYnVpbGRlci1tZXNzYWdlcy13cmFwJyApO1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZTtcblxuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKCBub2RlICk7XG5cdH07XG59XG5cbkFqYXhTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcbi8qKlxuICogQHR5cGUge1JlYWN0aXZlVmFyfVxuICovXG5BamF4U3VibWl0LnByb3RvdHlwZS5zdGF0dXMgPSBudWxsO1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaFJlc2V0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcblx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cblx0aWYgKCAhcm9vdE5vZGUuZGF0YXNldD8uY2xlYXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy53YXRjaFN1Y2Nlc3MoIGNhbGxhYmxlICk7XG59O1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaFN1Y2Nlc3MgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcblxuXHRzdGF0dXMud2F0Y2goICgpID0+IHtcblx0XHRpZiAoIGlzU3VjY2Vzc1N0YXR1cyggc3RhdHVzLmN1cnJlbnQgKSApIHtcblx0XHRcdGNhbGxhYmxlKCk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaEZhaWwgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcblxuXHRzdGF0dXMud2F0Y2goICgpID0+IHtcblx0XHRpZiAoICFpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cy5jdXJyZW50ICkgKSB7XG5cdFx0XHRjYWxsYWJsZSgpO1xuXHRcdH1cblx0fSApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWpheFN1Ym1pdDsiLCIvKipcbiAqIEBwYXJhbSBmb3JtIHtGb3JtU3VibWl0fVxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIEJhc2VTdWJtaXQoIGZvcm0gKSB7XG5cdHRoaXMuZm9ybSAgICAgICAgID0gZm9ybTtcblx0dGhpcy5sYXN0UmVzcG9uc2UgPSB7fTtcblx0dGhpcy5wcm9taXNlcyAgICAgPSBbXTtcbn1cblxuQmFzZVN1Ym1pdC5wcm90b3R5cGUuc3VibWl0ICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyBFcnJvciggJ1lvdSBuZWVkIHRvIHJlcGxhY2UgdGhpcyBjYWxsYmFjaycgKTtcbn07XG5CYXNlU3VibWl0LnByb3RvdHlwZS5nZXRQcm9taXNlcyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMucHJvbWlzZXMubWFwKCAoIHsgY2FsbGFibGUgfSApID0+IG5ldyBQcm9taXNlKCBjYWxsYWJsZSApICk7XG59O1xuLyoqXG4gKiBAcGFyYW0gY2FsbGFibGUgICAgIHtGdW5jdGlvbn1cbiAqIEBwYXJhbSBpbnB1dENvbnRleHQge0lucHV0RGF0YXxCb29sZWFufVxuICovXG5CYXNlU3VibWl0LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCBjYWxsYWJsZSwgaW5wdXRDb250ZXh0ID0gZmFsc2UgKSB7XG5cdGNvbnN0IHBhdGhTdHIgPSBpbnB1dENvbnRleHQgPyBpbnB1dENvbnRleHQucGF0aC5qb2luKCAnLicgKSA6ICcnO1xuXG5cdHRoaXMucHJvbWlzZXMgPSB0aGlzLnByb21pc2VzLmZpbHRlcihcblx0XHQoIHsgaWRQYXRoIH0gKSA9PiAhaWRQYXRoIHx8IGlkUGF0aCAhPT0gcGF0aFN0cixcblx0KTtcblxuXHR0aGlzLnByb21pc2VzLnB1c2goIHtcblx0XHRjYWxsYWJsZSxcblx0XHRpZFBhdGg6IGlucHV0Q29udGV4dCA/IGlucHV0Q29udGV4dC5wYXRoLmpvaW4oICcuJyApIDogJycsXG5cdH0gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VTdWJtaXQ7IiwiaW1wb3J0IExvYWRpbmdSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xuaW1wb3J0IEFqYXhTdWJtaXQgZnJvbSAnLi9BamF4U3VibWl0JztcbmltcG9ydCBSZWxvYWRTdWJtaXQgZnJvbSAnLi9SZWxvYWRTdWJtaXQnO1xuaW1wb3J0IHsgZm9jdXNPbkludmFsaWRJbnB1dCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBwb3B1bGF0ZUlucHV0cyB9IGZyb20gJy4uL2lucHV0cy9mdW5jdGlvbnMnO1xuXG4vKipcbiAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuICogQGNsYXNzXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBGb3JtU3VibWl0KCBvYnNlcnZhYmxlICkge1xuXG5cdHRoaXMub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XG5cdHRoaXMubG9ja1N0YXRlICA9IG5ldyBMb2FkaW5nUmVhY3RpdmVWYXIoIGZhbHNlICk7XG5cdHRoaXMubG9ja1N0YXRlLm1ha2UoKTtcblx0dGhpcy5hdXRvRm9jdXMgICAgICAgICAgICAgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uYXV0b19mb2N1cztcblx0dGhpcy5jYW5TdWJtaXRGb3JtICAgICAgICAgPSB0cnVlO1xuXHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IHRydWU7XG5cdC8qKlxuXHQgKiBAcGFyYW0gZXZlbnQge0V2ZW50fVxuXHQgKi9cblx0dGhpcy5vblN1Ym1pdCA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRoaXMuc3VibWl0KCk7XG5cdH07XG5cblx0dGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCB0cnVlID09PSB0aGlzLmNhblN1Ym1pdEZvcm0gKSB7XG5cdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gICAgICAgICA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5vYnNlcnZhYmxlLmlucHV0c0FyZVZhbGlkKCkudGhlbiggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNsZWFyRXJyb3JzKCk7XG5cdFx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cdFx0XHRcdHRoaXMuc3VibWl0dGVyLnN1Ym1pdCgpO1xuXHRcdFx0fSApLmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdFx0dGhpcy5hdXRvRm9jdXMgJiYgZm9jdXNPbkludmFsaWRJbnB1dChcblx0XHRcdFx0XHRwb3B1bGF0ZUlucHV0cyggdGhpcy5vYnNlcnZhYmxlLmdldElucHV0cygpICksXG5cdFx0XHRcdCk7XG5cdFx0XHR9ICkuZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuY2FuU3VibWl0Rm9ybSAgICAgICAgID0gdHJ1ZTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5jbGVhckVycm9ycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBtZXNzYWdlcyA9IHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLW1lc3NhZ2VzLXdyYXAnLFxuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzICkge1xuXHRcdFx0bWVzc2FnZS5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5sb2NrU3RhdGUudG9nZ2xlKCk7XG5cdFx0dGhpcy50b2dnbGVMb2FkaW5nKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHR0aGlzLmhhbmRsZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge05vZGVMaXN0T2Y8RWxlbWVudD59XG5cdFx0ICovXG5cdFx0Y29uc3QgYnV0dG9ucyA9IHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19zdWJtaXQnLFxuXHRcdCk7XG5cblx0XHR0aGlzLmxvY2tTdGF0ZS53YXRjaCggKCkgPT4ge1xuXHRcdFx0Zm9yICggY29uc3QgYnV0dG9uIG9mIGJ1dHRvbnMgKSB7XG5cdFx0XHRcdGJ1dHRvbi5kaXNhYmxlZCA9IHRoaXMubG9ja1N0YXRlLmN1cnJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZmFsc2UgPT09IHRoaXMubG9ja1N0YXRlLmN1cnJlbnQgKSB7XG5cdFx0XHRcdHRoaXMuY2FuU3VibWl0Rm9ybSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9O1xuXG5cdHRoaXMudG9nZ2xlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLm9ic2VydmFibGUucm9vdE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWxvYWRpbmcnICk7XG5cdH07XG5cblx0dGhpcy5jcmVhdGVTdWJtaXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBjbGFzc0xpc3QgfSA9IHRoaXMub2JzZXJ2YWJsZS5yb290Tm9kZTtcblx0XHRjb25zdCBpc0FqYXggICAgICAgID0gY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3VibWl0LXR5cGUtYWpheCcgKTtcblxuXHRcdHJldHVybiBpc0FqYXggPyBuZXcgQWpheFN1Ym1pdCggdGhpcyApIDogbmV3IFJlbG9hZFN1Ym1pdCggdGhpcyApO1xuXHR9O1xuXG5cdHRoaXMuZ2V0Rm9ybUlkID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMub2JzZXJ2YWJsZTtcblxuXHRcdHJldHVybiArcm9vdE5vZGUuZGF0YXNldC5mb3JtSWQ7XG5cdH07XG5cblx0dGhpcy5vbkVuZFN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdHRoaXMuc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApXG5cdFx0PyB0aGlzLnN1Ym1pdHRlci5zdGF0dXMud2F0Y2goIGNhbGxhYmxlIClcblx0XHQ6IHRoaXMuc3VibWl0dGVyLm9uRmFpbFN1Ym1pdCggY2FsbGFibGUgKTtcblx0fTtcblxuXHR0aGlzLm9ic2VydmFibGUucm9vdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnc3VibWl0Jyxcblx0XHQoIGV2ZW50ICkgPT4gdGhpcy5vblN1Ym1pdCggZXZlbnQgKSxcblx0KTtcblxuXHQvKipcblx0ICogQHR5cGUge0FqYXhTdWJtaXR8UmVsb2FkU3VibWl0fVxuXHQgKi9cblx0dGhpcy5zdWJtaXR0ZXIgPSB0aGlzLmNyZWF0ZVN1Ym1pdHRlcigpO1xuXG5cdHRoaXMuaGFuZGxlQnV0dG9ucygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtU3VibWl0OyIsImltcG9ydCBCYXNlU3VibWl0IGZyb20gJy4vQmFzZVN1Ym1pdCc7XG5cbmZ1bmN0aW9uIFJlbG9hZFN1Ym1pdCggZm9ybSApIHtcblx0QmFzZVN1Ym1pdC5jYWxsKCB0aGlzLCBmb3JtICk7XG5cblx0dGhpcy5mYWlsUHJvbWlzZXMgPSBbXTtcblxuXHR0aGlzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gICAgID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XG5cdFx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cblx0XHRQcm9taXNlLmFsbChcblx0XHRcdGFwcGx5RmlsdGVycyhcblx0XHRcdFx0J2pldC5mYi5zdWJtaXQucmVsb2FkLnByb21pc2VzJyxcblx0XHRcdFx0dGhpcy5nZXRQcm9taXNlcygpLFxuXHRcdFx0XHR7IHRhcmdldDogcm9vdE5vZGUgfSxcblx0XHRcdCksXG5cdFx0KS50aGVuKFxuXHRcdFx0KCkgPT4gcm9vdE5vZGUuc3VibWl0KCksXG5cdFx0KS5jYXRjaCggKCkgPT4ge1xuXHRcdFx0dGhpcy5mYWlsUHJvbWlzZXMuZm9yRWFjaCggY3VycmVudCA9PiBjdXJyZW50KCkgKTtcblxuXHRcdFx0dGhpcy5mb3JtLnRvZ2dsZSgpO1xuXHRcdH0gKTtcblx0fTtcblxuXHR0aGlzLm9uRmFpbFN1Ym1pdCA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuZmFpbFByb21pc2VzLnB1c2goIGNhbGxhYmxlICk7XG5cdH07XG59XG5cblJlbG9hZFN1Ym1pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU3VibWl0LnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBSZWxvYWRTdWJtaXQ7IiwiZnVuY3Rpb24gaXNTdWNjZXNzU3RhdHVzKCBzdGF0dXMgKSB7XG5cdHJldHVybiAnc3VjY2VzcycgPT09IHN0YXR1cyB8fCBzdGF0dXM/LmluY2x1ZGVzKCAnZHN1Y2Nlc3N8JyApO1xufVxuXG5leHBvcnQgeyBpc1N1Y2Nlc3NTdGF0dXMgfTsiLCIvKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NoYW5nZVR5cGUoIG5vZGUgKSB7XG5cdHJldHVybiBbICdzZWxlY3Qtb25lJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNIaWRkZW4oIG5vZGUgKSB7XG5cdHJldHVybiAnaGlkZGVuJyA9PT0gbm9kZS50eXBlO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1JhbmdlKCBub2RlICkge1xuXHRyZXR1cm4gJ3JhbmdlJyA9PT0gbm9kZS50eXBlO1xufVxuXG5leHBvcnQge1xuXHRpc0hpZGRlbixcblx0aXNSYW5nZSxcblx0aXNDaGFuZ2VUeXBlLFxufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3R5bGVzXG5pbXBvcnQgJy4vbWFpbi5wY3NzJ1xuXG5pbXBvcnQgaW5pdEVsZW1lbnRvciBmcm9tICcuL2luaXQvaW5pdEVsZW1lbnRvcic7XG5pbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL3NpZ25hbHMvQmFzZVNpZ25hbCc7XG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XG5pbXBvcnQgUmVhY3RpdmVIb29rIGZyb20gJy4vcmVhY3RpdmUvUmVhY3RpdmVIb29rJztcbmltcG9ydCBSZWFjdGl2ZVNldCBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlU2V0JztcbmltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL2lucHV0cy9JbnB1dERhdGEnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCBSZXBvcnRpbmdJbnRlcmZhY2UgZnJvbSAnLi9yZXBvcnRpbmcvUmVwb3J0aW5nSW50ZXJmYWNlJztcbmltcG9ydCB7XG5cdGFsbFJlamVjdGVkLFxuXHRnZXRMYW5ndWFnZSxcblx0dG9IVE1MLFxuXHRpc0VtcHR5LFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdGlzVmlzaWJsZSwgZ2V0U2Nyb2xsUGFyZW50LCBhcHBseVVzZXJBZ2VudHMsIGlzVUEsXG59IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24nO1xuaW1wb3J0IFJlc3RyaWN0aW9uRXJyb3IgZnJvbSAnLi9yZXBvcnRpbmcvUmVzdHJpY3Rpb25FcnJvcic7XG5pbXBvcnQge1xuXHR2YWxpZGF0ZUlucHV0cyxcblx0dmFsaWRhdGVJbnB1dHNBbGwsXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxufSBmcm9tICcuL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xuXG5pbXBvcnQgJy4vY2FsYy5tb2R1bGUvbWFpbic7XG5pbXBvcnQge1xuXHRnZXRQYXJzZWROYW1lLFxuXHRwb3B1bGF0ZUlucHV0cyxcbn0gZnJvbSAnLi9pbnB1dHMvZnVuY3Rpb25zJztcbmltcG9ydCBpbml0Rm9ybSBmcm9tICcuL2luaXQvaW5pdEZvcm0nO1xuaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL2F0dHJzL0Jhc2VIdG1sQXR0cic7XG5pbXBvcnQgcXVlcnlCeUF0dHJWYWx1ZSBmcm9tICcuL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZSc7XG5pbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlQ29tbWVudHMnO1xuaW1wb3J0IGl0ZXJhdGVKZmJDb21tZW50cyBmcm9tICcuL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzJztcbmltcG9ydCBvYnNlcnZlQ29tbWVudCBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZUNvbW1lbnQnO1xuaW1wb3J0IG9ic2VydmVNYWNyb0F0dHIgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVNYWNyb0F0dHInO1xuaW1wb3J0IFJlcXVpcmVkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1JlcXVpcmVkUmVzdHJpY3Rpb24nO1xuXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcblx0Li4uKFxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0ID8/IHt9XG5cdCksXG5cdElucHV0RGF0YSxcblx0QmFzZVNpZ25hbCxcblx0UmVhY3RpdmVWYXIsXG5cdFJlYWN0aXZlSG9vayxcblx0TG9hZGluZ1JlYWN0aXZlVmFyLFxuXHRPYnNlcnZhYmxlLFxuXHRSZXBvcnRpbmdJbnRlcmZhY2UsXG5cdFJlc3RyaWN0aW9uLFxuXHRSZXN0cmljdGlvbkVycm9yLFxuXHRCYXNlSHRtbEF0dHIsXG5cdFJlYWN0aXZlU2V0LFxuXHRSZXF1aXJlZFJlc3RyaWN0aW9uLFxufTtcblxud2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID0ge1xuXHQuLi4oXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID8/IHt9XG5cdCksXG5cdGFsbFJlamVjdGVkLFxuXHRnZXRMYW5ndWFnZSxcblx0dG9IVE1MLFxuXHR2YWxpZGF0ZUlucHV0cyxcblx0dmFsaWRhdGVJbnB1dHNBbGwsXG5cdGdldFBhcnNlZE5hbWUsXG5cdGlzRW1wdHksXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxuXHRnZXRPZmZzZXRUb3AsXG5cdGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdHBvcHVsYXRlSW5wdXRzLFxuXHRpc1Zpc2libGUsXG5cdHF1ZXJ5QnlBdHRyVmFsdWUsXG5cdGl0ZXJhdGVDb21tZW50cyxcblx0b2JzZXJ2ZU1hY3JvQXR0cixcblx0b2JzZXJ2ZUNvbW1lbnQsXG5cdGl0ZXJhdGVKZmJDb21tZW50cyxcblx0Z2V0U2Nyb2xsUGFyZW50LFxuXHRpc1VBLFxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHBseVVzZXJBZ2VudHMgKTtcblxualF1ZXJ5KCAoKSA9PiBKZXRQbHVnaW5zLmluaXQoKSApO1xuXG5KZXRQbHVnaW5zLmJ1bGtCbG9ja3NJbml0KCBbXG5cdHtcblx0XHRibG9jazogJ2pldC1mb3Jtcy5mb3JtLWJsb2NrJyxcblx0XHRjYWxsYmFjazogaW5pdEZvcm0sXG5cdFx0Y29uZGl0aW9uOiAoKSA9PiAnbG9hZGluZycgIT09IGRvY3VtZW50LnJlYWR5U3RhdGUsXG5cdH0sXG5dICk7XG5cbmpRdWVyeSggd2luZG93ICkub24oICdlbGVtZW50b3IvZnJvbnRlbmQvaW5pdCcsIGluaXRFbGVtZW50b3IgKTtcblxuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoKSA9PiB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZVtdfVxuXHQgKi9cblx0Y29uc3QgZm9ybXMgPSBPYmplY3QudmFsdWVzKCB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXIgKTtcblxuXHRmb3IgKCBjb25zdCByb290IG9mIGZvcm1zICkge1xuXHRcdGlmICggISggcm9vdCBpbnN0YW5jZW9mIE9ic2VydmFibGUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyb290LnJlUXVlcnlWYWx1ZXMoKTtcblx0fVxufSApO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=