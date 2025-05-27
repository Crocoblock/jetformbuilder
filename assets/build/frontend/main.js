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

/***/ "./frontend/main/calc.module/filters/ToDayInMsFilter.js":
/*!**************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToDayInMsFilter.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/ToHourInMsFilter.js":
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToHourInMsFilter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/ToMinuteInMsFilter.js":
/*!*****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToMinuteInMsFilter.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/ToMonthInMsFilter.js":
/*!****************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToMonthInMsFilter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./frontend/main/calc.module/filters/ToWeekInMsFilter.js":
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToWeekInMsFilter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/main/calc.module/filters/ToYearInMsFilter.js":
/*!***************************************************************!*\
  !*** ./frontend/main/calc.module/filters/ToYearInMsFilter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./frontend/main/main.pcss":
/*!*********************************!*\
  !*** ./frontend/main/main.pcss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
      default:
        jQuery(document).trigger('jet-form-builder/ajax/on-success/not-success-status', [response, $form]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNUQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBTUE7QUFLQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBOztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFnQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBOztBQWNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBT0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDcERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pGQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFFQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFLQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9PYnNlcnZhYmxlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvQmFzZUh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvRmlsZUV4dGVuc2lvbkh0bWxBdHRyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vYXR0cnMvTWF4RmlsZVNpemVIdG1sQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2F0dHJzL01heEZpbGVzSHRtbEF0dHIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9hdHRycy9SZW1haW5pbmdDYWxjQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL0NhbGN1bGF0ZWRGb3JtdWxhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvYXBwbHlGaWx0ZXJzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvYXR0YWNoQ29uc3ROYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvQmFzZUludGVybmFsTWFjcm8uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvQ3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9jb25zdC5uYW1lc3BhY2UvRGF5X0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9Ib3VyX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9NaW5fSW5fU2VjLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvY29uc3QubmFtZXNwYWNlL01vbnRoX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0Lm5hbWVzcGFjZS9ZZWFyX0luX1NlYy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvQWRkRGF5RmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRIb3VyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9BZGRZZWFyRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9GYWxsQmFja0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9MZW5ndGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1NldERheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0SG91ckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0TWluRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9TZXRNb250aEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU2V0WWVhckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3REYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0SG91ckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvU3VidHJhY3RNaW5GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1N1YnRyYWN0WWVhckZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVGltZXN0YW1wRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub0RhdGVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF0ZVRpbWVGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9jYWxjLm1vZHVsZS9maWx0ZXJzL1RvRGF5SW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9Ib3VySW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9NaW51dGVJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub01vbnRoSW5Nc0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL2ZpbHRlcnMvVG9UaW1lRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub1dlZWtJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZmlsdGVycy9Ub1llYXJJbk1zRmlsdGVyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vY2FsYy5tb2R1bGUvZ2V0RmlsdGVycy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2NhbGMubW9kdWxlL21haW4uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vQ2FsY3VsYXRlZEh0bWxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL2l0ZXJhdGVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vaXRlcmF0ZUpmYkNvbW1lbnRzLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaHRtbC5tYWNyby9vYnNlcnZlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0ci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2h0bWwubWFjcm8vb2JzZXJ2ZU5vZGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbml0L2luaXRFbGVtZW50b3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbml0L2luaXRGb3JtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL0NoYW5nZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvSW5wdXREYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL05vTGlzdGVuRGF0YS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL2lucHV0cy9SYW5nZURhdGEuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9pbnB1dHMvUmVuZGVyU3RhdGVEYXRhLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vaW5wdXRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL21haW4ucGNzcz83NjBkIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVIb29rLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVhY3RpdmUvUmVhY3RpdmVTZXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZWFjdGl2ZS9SZWFjdGl2ZVZhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9Ccm93c2VyUmVwb3J0aW5nLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1JlcG9ydGluZ0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvUmVwb3J0aW5nSW50ZXJmYWNlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL1Jlc3RyaWN0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9yZXBvcnRpbmcvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vcmVwb3J0aW5nL3Jlc3RyaWN0aW9ucy9OYXRpdmVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL0Jhc2VTaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL1NpZ25hbEhpZGRlbkFycmF5LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc2lnbmFscy9TaWduYWxSYW5nZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3NpZ25hbHMvU2lnbmFsUmVuZGVyU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zaWduYWxzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9BamF4U3VibWl0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VibWl0L0Jhc2VTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvRm9ybVN1Ym1pdC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tYWluL3N1Ym1pdC9SZWxvYWRTdWJtaXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9zdWJtaXQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21haW4vc3VwcG9ydHMuanMiLCJ3ZWJwYWNrOi8vamZiL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWFpbi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUlucHV0LCBwb3B1bGF0ZUlucHV0cyB9IGZyb20gJy4vaW5wdXRzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4vc3VibWl0L0Zvcm1TdWJtaXQnO1xyXG5pbXBvcnQgcXVlcnlCeUF0dHJWYWx1ZSBmcm9tICcuL2h0bWwubWFjcm8vcXVlcnlCeUF0dHJWYWx1ZSc7XHJcbmltcG9ydCBpdGVyYXRlSmZiQ29tbWVudHMgZnJvbSAnLi9odG1sLm1hY3JvL2l0ZXJhdGVKZmJDb21tZW50cyc7XHJcbmltcG9ydCBvYnNlcnZlQ29tbWVudCBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZUNvbW1lbnQnO1xyXG5pbXBvcnQgb2JzZXJ2ZU1hY3JvQXR0ciBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU1hY3JvQXR0cic7XHJcbmltcG9ydCBvYnNlcnZlTm9kZSBmcm9tICcuL2h0bWwubWFjcm8vb2JzZXJ2ZU5vZGUnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0c0FsbCB9IGZyb20gJy4vcmVwb3J0aW5nL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBSZXBvcnRpbmdDb250ZXh0IGZyb20gJy4vcmVwb3J0aW5nL1JlcG9ydGluZ0NvbnRleHQnO1xyXG5pbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgZG9BY3Rpb24sXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuZnVuY3Rpb24gT2JzZXJ2YWJsZSggcGFyZW50ID0gbnVsbCApIHtcclxuXHR0aGlzLnBhcmVudCAgICAgPSBwYXJlbnQ7XHJcblx0dGhpcy5kYXRhSW5wdXRzID0ge307XHJcblx0dGhpcy5mb3JtICAgICAgID0gbnVsbDtcclxuXHR0aGlzLm11bHRpc3RlcCAgPSBudWxsO1xyXG5cdHRoaXMucm9vdE5vZGUgICA9IG51bGw7XHJcblx0dGhpcy5pc09ic2VydmVkID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuMVxyXG5cdCAqXHJcblx0ICogQHR5cGUge1JlcG9ydGluZ0NvbnRleHR9XHJcblx0ICovXHJcblx0dGhpcy5jb250ZXh0ID0gdGhpcy5wYXJlbnQgPyBudWxsIDogbmV3IFJlcG9ydGluZ0NvbnRleHQoIHRoaXMgKTtcclxufVxyXG5cclxuT2JzZXJ2YWJsZS5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlcGVhdGVyRGF0YXxudWxsfVxyXG5cdCAqL1xyXG5cdHBhcmVudDogbnVsbCxcclxuXHQvKipcclxuXHQgKiB7XHJcblx0ICogICAgIFtmaWVsZF9uYW1lXToge0lucHV0RGF0YX1cclxuXHQgKiB9XHJcblx0ICovXHJcblx0ZGF0YUlucHV0czoge30sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtGb3JtU3VibWl0fVxyXG5cdCAqL1xyXG5cdGZvcm06IG51bGwsXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtNdWx0aVN0ZXBTdGF0ZX1cclxuXHQgKi9cclxuXHRtdWx0aXN0ZXA6IG51bGwsXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudHxIVE1MRm9ybUVsZW1lbnR9XHJcblx0ICovXHJcblx0cm9vdE5vZGU6IG51bGwsXHJcblx0aXNPYnNlcnZlZDogZmFsc2UsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG5cdCAqL1xyXG5cdHZhbHVlOiBudWxsLFxyXG5cdG9ic2VydmUgKCByb290ID0gbnVsbCApIHtcclxuXHRcdGlmICggdGhpcy5pc09ic2VydmVkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoIG51bGwgIT09IHJvb3QgKSB7XHJcblx0XHRcdHRoaXMucm9vdE5vZGUgPSByb290O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pc09ic2VydmVkID0gdHJ1ZTtcclxuXHJcblx0XHRkb0FjdGlvbiggJ2pldC5mYi5vYnNlcnZlLmJlZm9yZScsIHRoaXMgKTtcclxuXHJcblx0XHR0aGlzLmluaXRTdWJtaXRIYW5kbGVyKCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbml0aWFsaXplIGRhdGFJbnB1dHMgd2l0aCBmaWVsZHMuXHJcblx0XHQgKiBXaXRob3V0IHZhbHVlc1xyXG5cdFx0ICovXHJcblx0XHR0aGlzLmluaXRGaWVsZHMoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldHVwIGZpZWxkcyB2YWx1ZXMgYW5kIG1ha2UgdGhlbSByZWFjdGl2ZVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLm1ha2VSZWFjdGl2ZVByb3h5KCk7XHJcblxyXG5cdFx0dGhpcy5pbml0TWFjcm9zKCk7XHJcblxyXG5cdFx0dGhpcy5pbml0QWN0aW9uQnV0dG9ucygpO1xyXG5cclxuXHRcdHRoaXMuaW5pdFZhbHVlKCk7XHJcblxyXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsIHRoaXMgKTtcclxuXHR9LFxyXG5cclxuXHRpbml0RmllbGRzICgpIHtcclxuXHRcdGZvciAoIGNvbnN0IGZvcm1FbGVtZW50IG9mIHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0J1tkYXRhLWpmYi1zeW5jXScsXHJcblx0XHQpICkge1xyXG5cdFx0XHR0aGlzLnB1c2hJbnB1dCggZm9ybUVsZW1lbnQgKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRpbml0TWFjcm9zICgpIHtcclxuXHRcdC8vIG1hY3JvcyBhcyBodG1sLWNvbW1lbnRzXHJcblx0XHRmb3IgKFxyXG5cdFx0XHRjb25zdCBjb21tZW50IG9mIGl0ZXJhdGVKZmJDb21tZW50cyggdGhpcy5yb290Tm9kZSApXHJcblx0XHRcdCkge1xyXG5cdFx0XHRvYnNlcnZlQ29tbWVudCggY29tbWVudCwgdGhpcyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1hY3JvcyBpbiBkZWZhdWx0IGF0dHJpYnV0ZXNcclxuXHRcdGNvbnN0IG5vZGVzV2l0aEF0dHJzID0gcXVlcnlCeUF0dHJWYWx1ZSggdGhpcy5yb290Tm9kZSwgJ0pGQl9GSUVMRDo6JyApO1xyXG5cclxuXHRcdGNvbnN0IHsgcmVwbGFjZUF0dHJzID0gW10gfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGVXaXRoQXR0ciBvZiBub2Rlc1dpdGhBdHRycyApIHtcclxuXHRcdFx0Zm9yICggY29uc3QgcmVwbGFjZUF0dHIgb2YgcmVwbGFjZUF0dHJzICkge1xyXG5cdFx0XHRcdG9ic2VydmVNYWNyb0F0dHIoIG5vZGVXaXRoQXR0ciwgcmVwbGFjZUF0dHIsIHRoaXMgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1hY3JvcyBpbiBkYXRhLWpmYi1tYWNybyBhdHRyaWJ1dGVcclxuXHRcdC8vIHJlc3VsdCB3aWxsIHBsYWNlZCBpbnNpZGUgcmVsYXRpdmUgbm9kZVxyXG5cdFx0Y29uc3Qgbm9kZXMgPSB0aGlzLnJvb3ROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdCdbZGF0YS1qZmItbWFjcm9dOm5vdChbZGF0YS1qZmItb2JzZXJ2ZWRdKScsXHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2Ygbm9kZXMgKSB7XHJcblx0XHRcdG9ic2VydmVOb2RlKCBub2RlLCB0aGlzICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0aW5pdFN1Ym1pdEhhbmRsZXIgKCkge1xyXG5cdFx0Ly8gY2hlY2sgaXMgY3VycmVudCBvYmplY3QgcmVsYXRlZCBmb3IgZ2xvYmFsIGZvcm0gZWxlbWVudFxyXG5cdFx0aWYgKCB0aGlzLnBhcmVudCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGb3JtU3VibWl0KCB0aGlzICk7XHJcblx0fSxcclxuXHJcblx0aW5pdEFjdGlvbkJ1dHRvbnMgKCkge1xyXG5cdFx0aWYgKCB0aGlzLnBhcmVudCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Zm9yICggY29uc3QgYnV0dG9uIG9mIHRoaXMucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19idXR0b24tc3dpdGNoLXN0YXRlJyxcclxuXHRcdCkgKSB7XHJcblx0XHRcdGxldCBzdGF0ZXM7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0c3RhdGVzID0gSlNPTi5wYXJzZSggYnV0dG9uLmRhdGFzZXQuc3dpdGNoT24gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZ2V0U3RhdGUoKS52YWx1ZS5jdXJyZW50ID0gc3RhdGVzO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxQcm9taXNlPG5ldmVyPnxQcm9taXNlPHZvaWQ+Pn1cclxuXHQgKi9cclxuXHRhc3luYyBpbnB1dHNBcmVWYWxpZCAoKSB7XHJcblx0XHRjb25zdCBpbnZhbGlkID0gYXdhaXQgdmFsaWRhdGVJbnB1dHNBbGwoXHJcblx0XHRcdHBvcHVsYXRlSW5wdXRzKCB0aGlzLmdldElucHV0cygpICksXHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiBCb29sZWFuKCBpbnZhbGlkLmxlbmd0aCApXHJcblx0XHQgICAgICAgPyBQcm9taXNlLnJlamVjdCggaW52YWxpZCApXHJcblx0XHQgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHR9LFxyXG5cclxuXHR3YXRjaCAoIGZpZWxkTmFtZSwgY2FsbGFibGUgKSB7XHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoIGZpZWxkTmFtZSApO1xyXG5cclxuXHRcdGlmICggaW5wdXQgKSB7XHJcblx0XHRcdHJldHVybiBpbnB1dC53YXRjaCggY2FsbGFibGUgKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdGBkYXRhSW5wdXRzIGluIE9ic2VydmFibGUgZG9uXFwndCBoYXZlICR7IGZpZWxkTmFtZSB9IGZpZWxkYCxcclxuXHRcdCk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG5vZGUgICAge0VsZW1lbnR9XHJcblx0ICogQHBhcmFtIHJlcGxhY2Uge0Jvb2xlYW59XHJcblx0ICovXHJcblx0b2JzZXJ2ZUlucHV0ICggbm9kZSwgcmVwbGFjZSA9IGZhbHNlICkge1xyXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLnB1c2hJbnB1dCggbm9kZSwgcmVwbGFjZSApO1xyXG5cclxuXHRcdGlucHV0Lm1ha2VSZWFjdGl2ZSgpO1xyXG5cclxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm9ic2VydmUuaW5wdXQubWFudWFsJywgaW5wdXQgKTtcclxuXHR9LFxyXG5cclxuXHRtYWtlUmVhY3RpdmVQcm94eSAoKSB7XHJcblx0XHRmb3IgKCBjb25zdCBjdXJyZW50IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XHJcblx0XHRcdGN1cnJlbnQubWFrZVJlYWN0aXZlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG5vZGUgICAge0VsZW1lbnR9XHJcblx0ICogQHBhcmFtIHJlcGxhY2Uge0Jvb2xlYW59XHJcblx0ICovXHJcblx0cHVzaElucHV0ICggbm9kZSwgcmVwbGFjZSA9IGZhbHNlICkge1xyXG5cdFx0Ly8gcHJldmVudCBzYXZpbmcgaW5wdXRzIGZyb20gcHJlc2V0IHJlcGVhdGVyIGl0ZW1zIGluIHJvb3Qgb2JqZWN0XHJcblx0XHQvLyB0aG9zZSBpbnB1dHMgd291bGQgc2F2ZWQgaW4gT2JzZXJ2YWJsZVJvdyBvYmplY3RcclxuXHJcblx0XHRpZiAoICF0aGlzLnBhcmVudCAmJlxyXG5cdFx0XHRub2RlLnBhcmVudEVsZW1lbnQuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyJyApXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlucHV0RGF0YSA9IGNyZWF0ZUlucHV0KCBub2RlLCB0aGlzICk7XHJcblx0XHRjb25zdCBmaW5kSW5wdXQgPSB0aGlzLmRhdGFJbnB1dHNbIGlucHV0RGF0YS5nZXROYW1lKCkgXSA/PyBmYWxzZTtcclxuXHJcblx0XHRpZiAoIGZhbHNlID09PSBmaW5kSW5wdXQgfHwgcmVwbGFjZSApIHtcclxuXHRcdFx0dGhpcy5kYXRhSW5wdXRzWyBpbnB1dERhdGEuZ2V0TmFtZSgpIF0gPSBpbnB1dERhdGE7XHJcblxyXG5cdFx0XHRyZXR1cm4gaW5wdXREYXRhO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZpbmRJbnB1dC5tZXJnZSggaW5wdXREYXRhICk7XHJcblxyXG5cdFx0cmV0dXJuIGZpbmRJbnB1dDtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtBcnJheTxJbnB1dERhdGE+fVxyXG5cdCAqL1xyXG5cdGdldElucHV0cyAoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyggdGhpcy5kYXRhSW5wdXRzICk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7bnVsbHxSZW5kZXJTdGF0ZURhdGF8SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdGdldFN0YXRlICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldElucHV0KCAnX2pmYl9jdXJyZW50X3JlbmRlcl9zdGF0ZXMnICk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtICBmaWVsZE5hbWVcclxuXHQgKiBAcmV0dXJuIHtudWxsfElucHV0RGF0YX1cclxuXHQgKi9cclxuXHRnZXRJbnB1dCAoIGZpZWxkTmFtZSApIHtcclxuXHRcdGlmICggdGhpcy5kYXRhSW5wdXRzLmhhc093blByb3BlcnR5KCBmaWVsZE5hbWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XHJcblx0XHR9XHJcblx0XHRjb25zdCByb290ID0gdGhpcy5wYXJlbnQ/LnJvb3QgPz8gbnVsbDtcclxuXHJcblx0XHRpZiAoICFyb290ICkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHJvb3QuZGF0YUlucHV0cy5oYXNPd25Qcm9wZXJ0eSggZmllbGROYW1lICkgKSB7XHJcblx0XHRcdHJldHVybiByb290LmRhdGFJbnB1dHNbIGZpZWxkTmFtZSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH0sXHJcblx0Z2V0U3VibWl0ICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmZvcm0gPyB0aGlzLmZvcm0gOiB0aGlzLnBhcmVudC5yb290LmZvcm07XHJcblx0fSxcclxuXHRnZXRDb250ZXh0ICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnRleHQgPz8gdGhpcy5wYXJlbnQucm9vdC5jb250ZXh0O1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjcxMVxyXG5cdCAqXHJcblx0ICogQHNpbmNlIDMuMC44XHJcblx0ICovXHJcblx0cmVtb3ZlICgpIHtcclxuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XHJcblx0XHRcdGlucHV0Lm9uUmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBSdW5zIG9ubHkgb25jZSBvbiB3aW5kb3cgXCJsb2FkXCIgZXZlbnRcclxuXHQgKi9cclxuXHRyZVF1ZXJ5VmFsdWVzICgpIHtcclxuXHRcdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XHJcblx0XHRcdGlucHV0LnJlUXVlcnlWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5pdFZhbHVlKCkge1xyXG5cdFx0dGhpcy52YWx1ZSA9IG5ldyBSZWFjdGl2ZVZhcigge30gKTtcclxuXHJcblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhcclxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQsXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRmb3IgKCBjb25zdCBbIGZpZWxkTmFtZSwgdmFsdWUgXSBvZiBlbnRyaWVzICkge1xyXG5cdFx0XHRcdHRoaXMuZ2V0SW5wdXQoIGZpZWxkTmFtZSApLnJldmVydFZhbHVlKCB2YWx1ZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcclxuXHRcdFx0aW5wdXQud2F0Y2goICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnRbIGlucHV0LmdldE5hbWUoKSBdID0gaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmFsdWUubWFrZSgpO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlOyIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZVZhcic7XHJcblxyXG5mdW5jdGlvbiBCYXNlSHRtbEF0dHIoKSB7XHJcblx0dGhpcy5hdHRyTmFtZSAgID0gJyc7XHJcblx0dGhpcy5pbml0aWFsICAgID0gbnVsbDtcclxuXHR0aGlzLmlzRnJvbURhdGEgPSBmYWxzZTtcclxuXHR0aGlzLnZhbHVlICAgICAgPSBudWxsO1xyXG59XHJcblxyXG5CYXNlSHRtbEF0dHIucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIE5hbWUgb2YgZGF0YSBhdHRyaWJ1dGVcclxuXHQgKi9cclxuXHRhdHRyTmFtZTogJycsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRpbnB1dDogbnVsbCxcclxuXHRpbml0aWFsOiBudWxsLFxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cclxuXHQgKi9cclxuXHR2YWx1ZTogbnVsbCxcclxuXHRvYnNlcnZlKCkge1xyXG5cdFx0dGhpcy52YWx1ZSA9IG5ldyBSZWFjdGl2ZVZhciggdGhpcy5pbml0aWFsICk7XHJcblx0XHR0aGlzLnZhbHVlLm1ha2UoKTtcclxuXHJcblx0XHR0aGlzLmFkZFdhdGNoZXJBdHRyKCk7XHJcblx0fSxcclxuXHRub2RlU2lnbmFsKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdG5vZGVbIHRoaXMuYXR0ck5hbWUgXSA9IHRoaXMudmFsdWUuY3VycmVudDtcclxuXHR9LFxyXG5cdGFkZFdhdGNoZXJBdHRyKCkge1xyXG5cdFx0dGhpcy52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5ub2RlU2lnbmFsKCkgKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIElmIHlvdSBuZWVkIHNwZWNpZmljIGNoZWNrLFxyXG5cdCAqIHlvdSBjYW4gcmV3cml0ZSB0aGlzIGZ1bmN0aW9uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRpc1N1cHBvcnRlZCggaW5wdXQgKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdGNvbnN0IGhhc0luUm9vdCAgICA9IC0xICE9PSBub2RlWyB0aGlzLmF0dHJOYW1lIF0gPz8gLTE7XHJcblx0XHRjb25zdCBoYXNJbkRhdGFTZXQgPSBub2RlLmRhdGFzZXQuaGFzT3duUHJvcGVydHkoIHRoaXMuYXR0ck5hbWUgKTtcclxuXHJcblx0XHRpZiAoICFoYXNJbkRhdGFTZXQgJiYgIWhhc0luUm9vdCApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5pdGlhbCA9IHRoaXMuZ2V0SW5pdGlhbCggaW5wdXQgKTtcclxuXHJcblx0XHRyZXR1cm4gQm9vbGVhbiggdGhpcy5pbml0aWFsICk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gIGlucHV0IHtJbnB1dERhdGF9XHJcblx0ICogQHJldHVybiB7Knxib29sZWFufVxyXG5cdCAqL1xyXG5cdGdldEluaXRpYWwoIGlucHV0ICkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcclxuXHJcblx0XHRyZXR1cm4gbm9kZS5kYXRhc2V0WyB0aGlzLmF0dHJOYW1lIF0gfHwgbm9kZVsgdGhpcy5hdHRyTmFtZSBdIHx8IGZhbHNlO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHNldElucHV0KCBpbnB1dCApIHtcclxuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUh0bWxBdHRyOyIsImltcG9ydCBNYXhGaWxlc0h0bWxBdHRyIGZyb20gJy4vTWF4RmlsZXNIdG1sQXR0cic7XHJcblxyXG5mdW5jdGlvbiBGaWxlRXh0ZW5zaW9uSHRtbEF0dHIoKSB7XHJcblx0TWF4RmlsZXNIdG1sQXR0ci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuYXR0ck5hbWUgPSAnZmlsZV9leHQnO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlICYmIEJvb2xlYW4oIG5vZGUuYWNjZXB0ICk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSBpbnB1dC5ub2RlcztcclxuXHJcblx0XHR0aGlzLmluaXRpYWwgPSBub2RlLmFjY2VwdC5zcGxpdCggJywnICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hZGRXYXRjaGVyQXR0ciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHJcblx0XHR0aGlzLnZhbHVlLndhdGNoKCAoKSA9PiB7XHJcblx0XHRcdG5vZGUuYWNjZXB0ID0gdGhpcy52YWx1ZS5jdXJyZW50LmpvaW4oICcsJyApO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkZpbGVFeHRlbnNpb25IdG1sQXR0ci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZUV4dGVuc2lvbkh0bWxBdHRyOyIsImltcG9ydCBNYXhGaWxlc0h0bWxBdHRyIGZyb20gJy4vTWF4RmlsZXNIdG1sQXR0cic7XHJcblxyXG5mdW5jdGlvbiBNYXhGaWxlU2l6ZUh0bWxBdHRyKCkge1xyXG5cdE1heEZpbGVzSHRtbEF0dHIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmF0dHJOYW1lID0gJ21heF9zaXplJztcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGlucHV0IHtGaWxlRGF0YXxJbnB1dERhdGF9XHJcblx0ICovXHJcblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRNYXhGaWxlc0h0bWxBdHRyLnByb3RvdHlwZS5zZXRJbnB1dC5jYWxsKCB0aGlzLCBpbnB1dCApO1xyXG5cclxuXHRcdGNvbnN0IHsgbWF4X3NpemU6IG1heFNpemUgPSAxIH0gPSBKU09OLnBhcnNlKFxyXG5cdFx0XHRpbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5kYXRhc2V0LmFyZ3MsXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuaW5pdGlhbCA9ICttYXhTaXplO1xyXG5cdH07XHJcbn1cclxuXHJcbk1heEZpbGVTaXplSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWF4RmlsZXNIdG1sQXR0ci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1heEZpbGVTaXplSHRtbEF0dHI7IiwiaW1wb3J0IEJhc2VIdG1sQXR0ciBmcm9tICcuL0Jhc2VIdG1sQXR0cic7XHJcblxyXG5mdW5jdGlvbiBNYXhGaWxlc0h0bWxBdHRyKCkge1xyXG5cdEJhc2VIdG1sQXR0ci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuYXR0ck5hbWUgPSAnbWF4X2ZpbGVzJztcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XHJcblx0ICovXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IGlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gaW5wdXQge0ZpbGVEYXRhfElucHV0RGF0YX1cclxuXHQgKi9cclxuXHR0aGlzLnNldElucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRcdEJhc2VIdG1sQXR0ci5wcm90b3R5cGUuc2V0SW5wdXQuY2FsbCggdGhpcywgaW5wdXQgKTtcclxuXHJcblx0XHRjb25zdCB7IG1heF9maWxlczogbWF4RmlsZXMgPSAxIH0gPSBKU09OLnBhcnNlKFxyXG5cdFx0XHRpbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5kYXRhc2V0LmFyZ3MsXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuaW5pdGlhbCA9ICttYXhGaWxlcztcclxuXHR9O1xyXG5cclxuXHR0aGlzLmFkZFdhdGNoZXJBdHRyID0gKCkgPT4ge307XHJcbn1cclxuXHJcbk1heEZpbGVzSHRtbEF0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUh0bWxBdHRyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZXNIdG1sQXR0cjsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vQmFzZUh0bWxBdHRyJztcclxuXHJcbmZ1bmN0aW9uIFJlbWFpbmluZ0NhbGNBdHRyKCkge1xyXG5cdEJhc2VIdG1sQXR0ci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuYXR0ck5hbWUgPSAncmVtYWluaW5nJztcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gaW5wdXQuYXR0cnMuaGFzT3duUHJvcGVydHkoICdtYXhMZW5ndGgnICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0XHRCYXNlSHRtbEF0dHIucHJvdG90eXBlLnNldElucHV0LmNhbGwoIHRoaXMsIGlucHV0ICk7XHJcblx0XHRjb25zdCB7IG1heExlbmd0aCB9ID0gaW5wdXQuYXR0cnM7XHJcblx0XHRjb25zdCBjdXJyZW50ID0gaW5wdXQudmFsdWUuY3VycmVudD8ubGVuZ3RoID8/IDA7XHJcblxyXG5cdFx0dGhpcy5pbml0aWFsID0gbWF4TGVuZ3RoLnZhbHVlLmN1cnJlbnQgLSBjdXJyZW50O1xyXG5cdH07XHJcblxyXG5cdHRoaXMuYWRkV2F0Y2hlckF0dHIgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0QmFzZUh0bWxBdHRyLnByb3RvdHlwZS5vYnNlcnZlLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0XHR0aGlzLmlucHV0LnZhbHVlLndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUF0dHIoKSApO1xyXG5cdFx0dGhpcy5pbnB1dC5hdHRycy5tYXhMZW5ndGgudmFsdWUud2F0Y2goICgpID0+IHRoaXMudXBkYXRlQXR0cigpICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy51cGRhdGVBdHRyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyBtYXhMZW5ndGggfSA9IHRoaXMuaW5wdXQuYXR0cnM7XHJcblx0XHRjb25zdCBjdXJyZW50ICAgICAgID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50Py5sZW5ndGggPz8gMDtcclxuXHJcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBtYXhMZW5ndGgudmFsdWUuY3VycmVudCAtIGN1cnJlbnQ7XHJcblx0fTtcclxufVxyXG5cclxuUmVtYWluaW5nQ2FsY0F0dHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUh0bWxBdHRyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVtYWluaW5nQ2FsY0F0dHI7IiwiLyoqXHJcbiAqIEBwYXJhbSBmb3JtdWxhXHJcbiAqIEBwYXJhbSByb290ICAgIHtPYnNlcnZhYmxlfVxyXG4gKiBAY2xhc3NcclxuICovXHJcbmltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xyXG5pbXBvcnQgZ2V0RmlsdGVycyBmcm9tICcuL2dldEZpbHRlcnMnO1xyXG5pbXBvcnQgYXR0YWNoQ29uc3ROYW1lc3BhY2UgZnJvbSAnLi9hdHRhY2hDb25zdE5hbWVzcGFjZSc7XHJcbmltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi4vaW5wdXRzL0lucHV0RGF0YSc7XHJcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnM6IHdwRmlsdGVycyxcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuY3VzdG9tLmZvcm11bGEubWFjcm8nLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRhdHRhY2hDb25zdE5hbWVzcGFjZSxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gcm9vdCAgICB7SW5wdXREYXRhfE9ic2VydmFibGV9XHJcbiAqIEBwYXJhbSBvcHRpb25zIHt7Zm9yY2VGdW5jdGlvbjogYm9vbGVhbn19XHJcbiAqL1xyXG5mdW5jdGlvbiBDYWxjdWxhdGVkRm9ybXVsYShcclxuXHRyb290LFxyXG5cdG9wdGlvbnMgPSB7fSxcclxuKSB7XHJcblx0dGhpcy5wYXJ0cyAgICAgICAgPSBbXTtcclxuXHR0aGlzLnJlbGF0ZWQgICAgICA9IFtdO1xyXG5cdHRoaXMucmVsYXRlZEF0dHJzID0gW107XHJcblx0dGhpcy5yZWdleHAgICAgICAgPSAvJShbXFx3XFwtXS4qP1xcUz8pJS9nO1xyXG5cdHRoaXMud2F0Y2hlcnMgICAgID0gW107XHJcblxyXG5cdGNvbnN0IHsgZm9yY2VGdW5jdGlvbiA9IGZhbHNlIH0gPSBvcHRpb25zO1xyXG5cclxuXHR0aGlzLmZvcmNlRnVuY3Rpb24gPSBmb3JjZUZ1bmN0aW9uO1xyXG5cclxuXHRpZiAoIHJvb3QgaW5zdGFuY2VvZiBJbnB1dERhdGEgKSB7XHJcblx0XHR0aGlzLmlucHV0ID0gcm9vdDtcclxuXHR9XHJcblxyXG5cdHRoaXMucm9vdCA9IHRoaXMuaW5wdXQ/LnJvb3QgPz8gcm9vdDtcclxufVxyXG5cclxuQ2FsY3VsYXRlZEZvcm11bGEucHJvdG90eXBlID0ge1xyXG5cdC8vIHJhdyB2YWx1ZVxyXG5cdGZvcm11bGE6IG51bGwsXHJcblx0cGFydHM6IFtdLFxyXG5cdHJlbGF0ZWQ6IFtdLFxyXG5cdHJlbGF0ZWRBdHRyczogW10sXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRpbnB1dDogbnVsbCxcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZXxPYnNlcnZhYmxlUm93fVxyXG5cdCAqL1xyXG5cdHJvb3Q6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlZ0V4cH1cclxuXHQgKi9cclxuXHRyZWdleHA6IG51bGwsXHJcblx0Zm9yY2VGdW5jdGlvbjogZmFsc2UsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0Z1bmN0aW9ufVxyXG5cdCAqL1xyXG5cdHNldFJlc3VsdDogKCkgPT4ge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnQ2FsY3VsYXRlZEZvcm11bGEuc2V0UmVzdWx0IGlzIG5vdCBzZXQhJyApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHJlbGF0ZWRJbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqIEByZXR1cm4geyp9XHJcblx0ICovXHJcblx0cmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gcmVsYXRlZElucHV0LnZhbHVlLmN1cnJlbnQ7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB2YWx1ZVxyXG5cdCAqL1xyXG5cdG9ic2VydmUoIHZhbHVlICkge1xyXG5cdFx0dGhpcy5mb3JtdWxhID0gdmFsdWU7XHJcblxyXG5cdFx0aWYgKCAhQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlSXRlbSggdmFsdWUgKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YWx1ZS5mb3JFYWNoKCBpdGVtID0+IHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlSXRlbSggaXRlbSApO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0gdmFsdWUge1N0cmluZ31cclxuXHQgKi9cclxuXHRvYnNlcnZlSXRlbSggdmFsdWUgKSB7XHJcblx0XHRsZXQgbWF0Y2g7XHJcblx0XHRsZXQgcHJldkluZGV4ID0gMDtcclxuXHJcblx0XHR2YWx1ZSArPSAnJztcclxuXHJcblx0XHR3aGlsZSAoIChcclxuXHRcdFx0bWF0Y2ggPSB0aGlzLnJlZ2V4cC5leGVjKCB2YWx1ZSApXHJcblx0XHQpICE9PSBudWxsICkge1xyXG5cdFx0XHRjb25zdCBwYXJ0ID0gdGhpcy5vYnNlcnZlTWFjcm8oIG1hdGNoWyAxIF0gKTtcclxuXHJcblx0XHRcdGlmICggMCAhPT0gbWF0Y2guaW5kZXggKSB7XHJcblx0XHRcdFx0dGhpcy5wYXJ0cy5wdXNoKCB2YWx1ZS5zbGljZSggcHJldkluZGV4LCBtYXRjaC5pbmRleCApICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHByZXZJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbIDAgXS5sZW5ndGg7XHJcblxyXG5cdFx0XHRpZiAoIGZhbHNlID09PSBwYXJ0ICkge1xyXG5cdFx0XHRcdHRoaXMub25NaXNzaW5nUGFydCggbWF0Y2hbIDAgXSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucGFydHMucHVzaCggcGFydCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2F2ZSBsYXN0IHBhcnRcclxuXHRcdGlmICggcHJldkluZGV4ID09PSB2YWx1ZS5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhcnRzLnB1c2goIHZhbHVlLnNsaWNlKCBwcmV2SW5kZXggKSApO1xyXG5cclxuXHRcdGlmICggMSA9PT0gdGhpcy5wYXJ0cy5sZW5ndGggKSB7XHJcblx0XHRcdHRoaXMucGFydHMgPSBbXTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBpbnB1dE1hdGNoIHtTdHJpbmd9XHJcblx0ICovXHJcblx0b25NaXNzaW5nUGFydCggaW5wdXRNYXRjaCApIHtcclxuXHRcdHRoaXMucGFydHMucHVzaCggaW5wdXRNYXRjaCApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGZpZWxkTmFtZSB7U3RyaW5nfVxyXG5cdCAqL1xyXG5cdGlzRmllbGROb2RlRXhpc3RzKCBmaWVsZE5hbWUgKSB7XHJcblxyXG5cdFx0Y29uc3QgaXNGaWVsZE5vZGUgPSB0aGlzLnJvb3QuZGF0YUlucHV0c1sgZmllbGROYW1lIF07XHJcblxyXG5cdFx0aWYgKCB1bmRlZmluZWQgPT09IGlzRmllbGROb2RlICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVjayBpZiB0aGUgc3BlY2lmaWVkIG5vZGUgZXhpc3RzIGluIHRoZSByb290Tm9kZS5cclxuXHRcdCAqIElmIHRoZSBub2RlIGRvZXMgbm90IGV4aXN0LCBhbmFseXplIHRoZSBmb3JtdWxhIHRvIGRldGVybWluZSBhbiBhZGp1c3RlZCB2YWx1ZVxyXG5cdFx0ICogYmFzZWQgb24gdGhlIG9wZXJhdG9ycyBzdXJyb3VuZGluZyB0aGUgcGxhY2Vob2xkZXIuXHJcblx0XHQgKiBAc2luY2UgMy40LjVcclxuXHRcdCAqXHJcblx0XHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMTc4NlxyXG5cdFx0ICovXHJcblx0XHRsZXQgZXhpc3ROb2RlID0gdGhpcy5yb290LnJvb3ROb2RlWyBmaWVsZE5hbWUgXVxyXG5cdFx0XHRcdFx0XHR8fCB0aGlzLnJvb3Qucm9vdE5vZGVbIGZpZWxkTmFtZSArICdbXScgXVxyXG5cdFx0XHRcdFx0XHR8fCB0aGlzLnJvb3Qucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWZpZWxkLW5hbWU9XCInICsgZmllbGROYW1lICsgJ1wiXScpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogV2hlbiB3ZSBjYWxsIHF1ZXJ5U2VsZWN0b3JBbGwgaXQgcmV0dXJucyBlbXB0eSBOb2RlTGlzdCBhcnJheSBpZiB0aGUgZWxlbWVudCBub3QgZm91bmQsIHNvIHdlIG5lZWQgdG8gcmVzZXQgaXRcclxuXHRcdCAqL1xyXG5cdFx0aWYgKCBleGlzdE5vZGUgJiYgMCA9PT0gZXhpc3ROb2RlLmxlbmd0aCApIHtcclxuXHRcdFx0ZXhpc3ROb2RlID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0LyoqXHJcblx0XHQgKiBAc2VlICAgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEzNzMwXHJcblx0XHQgKiBAc2luY2UgMy40LjUuMVxyXG5cdFx0ICovXHJcblx0XHRleGlzdE5vZGUgPSB3cEZpbHRlcnMoXHJcblx0XHRcdCdqZXQuZmIuZm9ybXVsYS5ub2RlLmV4aXN0cycsXHJcblx0XHRcdGV4aXN0Tm9kZSxcclxuXHRcdFx0ZmllbGROYW1lLFxyXG5cdFx0XHR0aGlzXHJcblx0XHQpO1xyXG5cclxuXHRcdHJldHVybiBleGlzdE5vZGU7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gIGN1cnJlbnQge1N0cmluZ31cclxuXHQgKiBAcmV0dXJuIHsoZnVuY3Rpb24oKTogKil8Kn1cclxuXHQgKi9cclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5cdG9ic2VydmVNYWNybyggY3VycmVudCApIHtcclxuXHRcdGlmICggbnVsbCA9PT0gdGhpcy5mb3JtdWxhICkge1xyXG5cdFx0XHR0aGlzLmZvcm11bGEgPSBjdXJyZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAd29yZHByZXNzL25vLXVudXNlZC12YXJzLWJlZm9yZS1yZXR1cm5cclxuXHRcdGNvbnN0IFsgbmFtZSwgLi4uZmlsdGVycyBdID0gY3VycmVudC5zcGxpdCggJ3wnICk7XHJcblx0XHRjb25zdCBwYXJzZWROYW1lICAgICAgICAgICA9IG5hbWUubWF0Y2goIC9bXFx3XFwtOl0rL2cgKTtcclxuXHJcblx0XHRpZiAoICFwYXJzZWROYW1lICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgWyBmaWVsZE5hbWUsIC4uLnBhcmFtcyBdID0gcGFyc2VkTmFtZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBzZWUgICBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTM3MzBcclxuXHRcdCAqIEBzaW5jZSAzLjQuNS4xIChtb3ZlZCB0byBhIG1ldGhvZCBhbmQgYWRkZWQgYWRkaXRpb25hbCBjaGVja3MpXHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGV4aXN0Tm9kZSA9IHRoaXMuaXNGaWVsZE5vZGVFeGlzdHMoIGZpZWxkTmFtZSApO1xyXG5cclxuXHRcdGlmICggdW5kZWZpbmVkID09PSBleGlzdE5vZGUgKSB7XHJcblx0XHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCggYCUke2ZpZWxkTmFtZX0lYCwgJ2cnICk7XHJcblxyXG5cdFx0XHRsZXQgYWRqdXN0ZWRWYWx1ZSAgID0gMDtcclxuXHRcdFx0bGV0IGFkanVzdGVkRm9ybXVsYSA9IHRoaXMuZm9ybXVsYTtcclxuXHRcdFx0bGV0IG1hdGNoO1xyXG5cclxuXHRcdFx0d2hpbGUgKCBudWxsICE9PSAoIG1hdGNoID0gcmVnZXguZXhlYyggdGhpcy5mb3JtdWxhICkgKSApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgYmVmb3JlID0gdGhpcy5mb3JtdWxhWyBtYXRjaC5pbmRleCAtIDEgXTtcclxuXHRcdFx0XHRjb25zdCBhZnRlciAgPSB0aGlzLmZvcm11bGFbIG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIF07XHJcblxyXG5cdFx0XHRcdGlmICggJyonID09PSBiZWZvcmUgfHwgJy8nID09PSBiZWZvcmUgfHwgJyonID09PSBhZnRlciB8fCAnLycgPT09IGFmdGVyICkge1xyXG5cdFx0XHRcdFx0aWYgKCAnLycgPT09IGJlZm9yZSB8fCAoICcqJyA9PT0gYmVmb3JlICYmICcqJyA9PT0gYWZ0ZXIgKSApIHtcclxuXHRcdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRhZGp1c3RlZFZhbHVlID0gMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWRqdXN0ZWRWYWx1ZSA9IDA7XHJcblxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhZGp1c3RlZEZvcm11bGEgPSBhZGp1c3RlZEZvcm11bGEucmVwbGFjZSggbWF0Y2hbMF0sIGFkanVzdGVkVmFsdWUgKTtcclxuXHJcblx0XHRcdHRoaXMuZm9ybXVsYSA9IGFkanVzdGVkRm9ybXVsYTtcclxuXHJcblx0XHRcdHJldHVybiBhZGp1c3RlZFZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHJlbGF0ZWRJbnB1dCA9IGZpZWxkTmFtZSAhPT0gJ3RoaXMnXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucm9vdC5nZXRJbnB1dCggZmllbGROYW1lIClcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5pbnB1dDtcclxuXHJcblx0XHRpZiAoICFyZWxhdGVkSW5wdXQgJiYgIWZpZWxkTmFtZS5pbmNsdWRlcyggJzo6JyApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB3b3JkcHJlc3Mvbm8tdW51c2VkLXZhcnMtYmVmb3JlLXJldHVyblxyXG5cdFx0Y29uc3QgZmlsdGVyc0xpc3QgPSBnZXRGaWx0ZXJzKCBmaWx0ZXJzICk7XHJcblxyXG5cdFx0aWYgKCBmaWVsZE5hbWUuaW5jbHVkZXMoICc6OicgKSApIHtcclxuXHRcdFx0Y29uc3QgY3VzdG9tVmFsdWUgPSB3cEZpbHRlcnMoXHJcblx0XHRcdFx0J2pldC5mYi5jdXN0b20uZm9ybXVsYS5tYWNybycsXHJcblx0XHRcdFx0ZmFsc2UsXHJcblx0XHRcdFx0ZmllbGROYW1lLFxyXG5cdFx0XHRcdHBhcmFtcyxcclxuXHRcdFx0XHR0aGlzLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKCBmYWxzZSA9PT0gY3VzdG9tVmFsdWUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBjdXN0b21WYWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKCBjdXN0b21WYWx1ZSgpLCBmaWx0ZXJzTGlzdCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYXBwbHlGaWx0ZXJzKCBjdXN0b21WYWx1ZSwgZmlsdGVyc0xpc3QgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICF0aGlzLnJlbGF0ZWQuaW5jbHVkZXMoIHJlbGF0ZWRJbnB1dC5uYW1lICkgKSB7XHJcblx0XHRcdHRoaXMucmVsYXRlZC5wdXNoKCByZWxhdGVkSW5wdXQubmFtZSApO1xyXG5cclxuXHRcdFx0dGhpcy53YXRjaGVycy5wdXNoKFxyXG5cdFx0XHRcdHJlbGF0ZWRJbnB1dC53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggIXBhcmFtcz8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdHRoaXMucmVsYXRlZENhbGxiYWNrKCByZWxhdGVkSW5wdXQgKSxcclxuXHRcdFx0XHRmaWx0ZXJzTGlzdCxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBbIGF0dHJOYW1lIF0gPSBwYXJhbXM7XHJcblxyXG5cdFx0aWYgKCAhcmVsYXRlZElucHV0LmF0dHJzLmhhc093blByb3BlcnR5KCBhdHRyTmFtZSApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHtCYXNlSHRtbEF0dHJ9XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGh0bWxBdHRyID0gcmVsYXRlZElucHV0LmF0dHJzWyBhdHRyTmFtZSBdO1xyXG5cclxuXHRcdGlmICggIXRoaXMucmVsYXRlZEF0dHJzLmluY2x1ZGVzKCByZWxhdGVkSW5wdXQubmFtZSArIGF0dHJOYW1lICkgKSB7XHJcblx0XHRcdHRoaXMucmVsYXRlZEF0dHJzLnB1c2goIHJlbGF0ZWRJbnB1dC5uYW1lICsgYXR0ck5hbWUgKTtcclxuXHJcblx0XHRcdHRoaXMud2F0Y2hlcnMucHVzaChcclxuXHRcdFx0XHRodG1sQXR0ci52YWx1ZS53YXRjaCggKCkgPT4gdGhpcy5zZXRSZXN1bHQoKSApLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoKSA9PiBhcHBseUZpbHRlcnMoIGh0bWxBdHRyLnZhbHVlLmN1cnJlbnQsIGZpbHRlcnNMaXN0ICk7XHJcblx0fSxcclxuXHRjYWxjdWxhdGVTdHJpbmcoKSB7XHJcblx0XHRpZiAoICF0aGlzLnBhcnRzLmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybXVsYTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdCAgICAgIGFwcGx5RmlsdGVyczogZGVwcmVjYXRlZEFwcGx5RmlsdGVycyA9IGZhbHNlLFxyXG5cdFx0ICAgICAgfSA9IHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJNYWluPy5maWx0ZXJzID8/IHt9O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnBhcnRzLm1hcCggY3VycmVudCA9PiB7XHJcblx0XHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGN1cnJlbnQgKSB7XHJcblxyXG5cdFx0XHRcdGlmICggIXRoaXMuaW5wdXQ/Lm5vZGVzXHJcblx0XHRcdFx0XHR8fCBmYWxzZSA9PT0gZGVwcmVjYXRlZEFwcGx5RmlsdGVyc1xyXG5cdFx0XHRcdFx0fHwgJ3N0cmluZycgIT09IHR5cGVvZiBjdXJyZW50XHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGN1cnJlbnQgPSB3cEZpbHRlcnMoXHJcblx0XHRcdFx0XHQnamV0LmZiLm9uQ2FsY3VsYXRlLnBhcnQnLFxyXG5cdFx0XHRcdFx0Y3VycmVudCxcclxuXHRcdFx0XHRcdHRoaXMsXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGRlcHJlY2F0ZWRBcHBseUZpbHRlcnMoXHJcblx0XHRcdFx0XHQnZm9ybXMvY2FsY3VsYXRlZC1mb3JtdWxhLWJlZm9yZS12YWx1ZScsXHJcblx0XHRcdFx0XHRjdXJyZW50LFxyXG5cdFx0XHRcdFx0alF1ZXJ5KCB0aGlzLmlucHV0Lm5vZGVzWyAwIF0gKSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGN1cnJlbnQoKTtcclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0ICAgICAgIG51bGwgPT09IHJlc3VsdCB8fFxyXG5cdFx0XHRcdCAgICAgICAnJyA9PT0gcmVzdWx0IHx8XHJcblx0XHRcdFx0ICAgICAgIE51bWJlci5pc05hTiggcmVzdWx0IClcclxuXHRcdFx0ICAgICAgICkgPyB0aGlzLmVtcHR5VmFsdWUoKSA6IHJlc3VsdDtcclxuXHRcdH0gKS5qb2luKCAnJyApO1xyXG5cdH0sXHJcblx0ZW1wdHlWYWx1ZSgpIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9LFxyXG5cdGNhbGN1bGF0ZSgpIHtcclxuXHRcdGlmICggIXRoaXMucGFydHMubGVuZ3RoICYmICF0aGlzLmZvcmNlRnVuY3Rpb24gKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmZvcm11bGE7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZm9ybXVsYSA9IHRoaXMuY2FsY3VsYXRlU3RyaW5nKCk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRuZXcgRnVuY3Rpb24oICdyZXR1cm4gJyArIGZvcm11bGEgKVxyXG5cdFx0XHQpKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHQvL2NvbnNvbGUuZXJyb3IoIGVycm9yICk7XHJcblx0XHRcdHRoaXMuc2hvd0Vycm9yKCBmb3JtdWxhICk7XHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblx0Y2xlYXJXYXRjaGVycygpIHtcclxuXHRcdHRoaXMud2F0Y2hlcnMuZm9yRWFjaChcclxuXHRcdFx0Y3VycmVudCA9PiAnZnVuY3Rpb24nID09PSB0eXBlb2YgY3VycmVudCAmJiBjdXJyZW50KCksXHJcblx0XHQpO1xyXG5cdFx0dGhpcy53YXRjaGVycyAgICAgPSBbXTtcclxuXHRcdHRoaXMucmVsYXRlZEF0dHJzID0gW107XHJcblx0XHR0aGlzLnJlbGF0ZWQgICAgICA9IFtdO1xyXG5cdH0sXHJcblx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG5cdHNob3dFcnJvciggZm9ybXVsYSApIHtcclxuXHRcdGNvbnNvbGUuZ3JvdXAoXHJcblx0XHRcdF9fKFxyXG5cdFx0XHRcdCdKZXRGb3JtQnVpbGRlcjogWW91IGhhdmUgaW52YWxpZCBjYWxjdWxhdGVkIGZvcm11bGEnLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KSxcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5zaG93RXJyb3JEZXRhaWxzKCBmb3JtdWxhICk7XHJcblxyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdH0sXHJcblx0c2hvd0Vycm9yRGV0YWlscyggZm9ybXVsYSApIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gaW5pdGlhbCBmb3JtdWxhXHJcblx0XHRcdFx0X18oICdJbml0aWFsOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdHRoaXMuZm9ybXVsYSxcclxuXHRcdFx0KSxcclxuXHRcdCk7XHJcblx0XHRjb25zb2xlLmVycm9yKFxyXG5cdFx0XHRzcHJpbnRmKFxyXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIGNvbXB1dGVkIGZvcm11bGFcclxuXHRcdFx0XHRfXyggJ0NvbXB1dGVkOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdGZvcm11bGEsXHJcblx0XHRcdCksXHJcblx0XHQpO1xyXG5cclxuXHRcdGlmICggIXRoaXMuaW5wdXQgJiYgIXRoaXMucm9vdD8ucGFyZW50ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLmlucHV0ICkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFxyXG5cdFx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBmaWxlZCBuYW1lXHJcblx0XHRcdFx0XHRfXyggJ0ZpZWxkOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdFx0dGhpcy5pbnB1dC5wYXRoLmpvaW4oICcuJyApLFxyXG5cdFx0XHRcdCksXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnJvb3QucGFyZW50LmZpbmRJbmRleCggdGhpcy5yb290ICk7XHJcblxyXG5cdFx0Y29uc29sZS5lcnJvcihcclxuXHRcdFx0c3ByaW50ZihcclxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBwYXRoIHRvIGN1cnJlbnQgZmllbGRcclxuXHRcdFx0XHRfXyggJ1Njb3BlOiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdC4uLnRoaXMucm9vdC5wYXJlbnQucGF0aCxcclxuXHRcdFx0XHRcdC0xID09PSBpbmRleCA/ICcnIDogaW5kZXgsXHJcblx0XHRcdFx0XS5maWx0ZXIoIEJvb2xlYW4gKS5qb2luKCAnLicgKSxcclxuXHRcdFx0KSxcclxuXHRcdCk7XHJcblx0fSxcclxuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0ZWRGb3JtdWxhO1xyXG4iLCJmdW5jdGlvbiBhcHBseUZpbHRlcnMoIHZhbHVlLCBmaWx0ZXJzICkge1xyXG5cdGlmICggbnVsbCA9PT0gZmlsdGVycyB8fCAhZmlsdGVycz8ubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHRmb3IgKCBjb25zdCBmaWx0ZXIgb2YgZmlsdGVycyApIHtcclxuXHRcdHZhbHVlID0gZmlsdGVyLmFwcGx5V2l0aFByb3BzKCB2YWx1ZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBseUZpbHRlcnM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbmltcG9ydCBDdXJyZW50RGF0ZSBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9DdXJyZW50RGF0ZSc7XHJcbmltcG9ydCBNaW5fSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL01pbl9Jbl9TZWMnO1xyXG5pbXBvcnQgTW9udGhfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL01vbnRoX0luX1NlYyc7XHJcbmltcG9ydCBIb3VyX0luX1NlYyBmcm9tICcuL2NvbnN0Lm5hbWVzcGFjZS9Ib3VyX0luX1NlYyc7XHJcbmltcG9ydCBEYXlfSW5fU2VjIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0RheV9Jbl9TZWMnO1xyXG5pbXBvcnQgWWVhcl9Jbl9TZWMgZnJvbSAnLi9jb25zdC5uYW1lc3BhY2UvWWVhcl9Jbl9TZWMnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnM6IHdwQXBwbHlGaWx0ZXJzIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3QgZ2V0U3RhdGljRnVuY3Rpb25zID0gKCkgPT4gd3BBcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5zdGF0aWMuZnVuY3Rpb25zJyxcclxuXHRbXHJcblx0XHRDdXJyZW50RGF0ZSxcclxuXHRcdE1pbl9Jbl9TZWMsXHJcblx0XHRNb250aF9Jbl9TZWMsXHJcblx0XHRIb3VyX0luX1NlYyxcclxuXHRcdERheV9Jbl9TZWMsXHJcblx0XHRZZWFyX0luX1NlYyxcclxuXHRdLFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtCYXNlSW50ZXJuYWxNYWNyb1tdfVxyXG4gKi9cclxubGV0IHN0YXRpY0Z1bmN0aW9ucyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgc2x1Z1xyXG4gKiBAcmV0dXJuIHtib29sZWFufEJhc2VJbnRlcm5hbE1hY3JvfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RnVuY3Rpb24oIHNsdWcgKSB7XHJcblx0aWYgKCAhc3RhdGljRnVuY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdHN0YXRpY0Z1bmN0aW9ucyA9IGdldFN0YXRpY0Z1bmN0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3Qgc3RhdGljRnVuY3Rpb24gb2Ygc3RhdGljRnVuY3Rpb25zICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBzdGF0aWNGdW5jdGlvbigpO1xyXG5cclxuXHRcdGlmICggY3VycmVudC5nZXRJZCgpICE9PSBzbHVnICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICByZXN1bHQgICAge1N0cmluZ31cclxuICogQHBhcmFtICBmaWVsZE5hbWUge1N0cmluZ31cclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGF0dGFjaENvbnN0TmFtZXNwYWNlKFxyXG5cdHJlc3VsdCxcclxuXHRmaWVsZE5hbWUsXHJcbikge1xyXG5cdGlmICggIWZpZWxkTmFtZS5pbmNsdWRlcyggJ0NUOjonICkgKSB7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHRmaWVsZE5hbWUgPSBmaWVsZE5hbWUucmVwbGFjZSggJ0NUOjonLCAnJyApO1xyXG5cclxuXHRjb25zdCBzdGF0aWNGdW5jID0gZ2V0RnVuY3Rpb24oIGZpZWxkTmFtZSApO1xyXG5cclxuXHRpZiAoIGZhbHNlID09PSBzdGF0aWNGdW5jICkge1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzdGF0aWNGdW5jLmdldFJlc3VsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdHRhY2hDb25zdE5hbWVzcGFjZTsiLCJmdW5jdGlvbiBCYXNlSW50ZXJuYWxNYWNybygpIHtcclxufVxyXG5cclxuQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlID0ge1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XHJcblx0ICovXHJcblx0Z2V0SWQgKCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnWW91IG5lZWQgdG8gcmV3cml0ZSB0aGlzIG1ldGhvZCcgKTtcclxuXHR9LFxyXG5cdGdldFJlc3VsdCAoKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXdyaXRlIHRoaXMgbWV0aG9kJyApO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlSW50ZXJuYWxNYWNybzsiLCJpbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XHJcblxyXG5mdW5jdGlvbiBDdXJyZW50RGF0ZSgpIHtcclxuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ0N1cnJlbnREYXRlJztcclxuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG59XHJcblxyXG5DdXJyZW50RGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnREYXRlOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIERheV9Jbl9TZWMoKSB7XHJcblx0QmFzZUludGVybmFsTWFjcm8uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldElkID0gKCkgPT4gJ0RheV9Jbl9TZWMnO1xyXG5cdHRoaXMuZ2V0UmVzdWx0ID0gKCkgPT4gQ29uc3RhbnRzLkRheV9Jbl9TZWM7XHJcbn1cclxuXHJcbkRheV9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXlfSW5fU2VjOyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG5pbXBvcnQgQmFzZUludGVybmFsTWFjcm8gZnJvbSAnLi9CYXNlSW50ZXJuYWxNYWNybyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmZ1bmN0aW9uIEhvdXJfSW5fU2VjKCkge1xyXG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRJZCA9ICgpID0+ICdIb3VyX0luX1NlYyc7XHJcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuSG91cl9Jbl9TZWM7XHJcbn1cclxuXHJcbkhvdXJfSW5fU2VjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VJbnRlcm5hbE1hY3JvLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG91cl9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gTWluX0luX1NlYygpIHtcclxuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0SWQgPSAoKSA9PiAnTWluX0luX1NlYyc7XHJcblx0dGhpcy5nZXRSZXN1bHQgPSAoKSA9PiBDb25zdGFudHMuTWluX0luX1NlYztcclxufVxyXG5cclxuTWluX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbl9Jbl9TZWM7IiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbmltcG9ydCBCYXNlSW50ZXJuYWxNYWNybyBmcm9tICcuL0Jhc2VJbnRlcm5hbE1hY3JvJztcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZnVuY3Rpb24gTW9udGhfSW5fU2VjKCkge1xyXG5cdEJhc2VJbnRlcm5hbE1hY3JvLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRJZCAgICAgPSAoKSA9PiAnTW9udGhfSW5fU2VjJztcclxuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5Nb250aF9Jbl9TZWM7XHJcbn1cclxuXHJcbk1vbnRoX0luX1NlYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlSW50ZXJuYWxNYWNyby5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vbnRoX0luX1NlYzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cclxuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vQmFzZUludGVybmFsTWFjcm8nO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBZZWFyX0luX1NlYygpIHtcclxuXHRCYXNlSW50ZXJuYWxNYWNyby5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0SWQgICAgID0gKCkgPT4gJ1llYXJfSW5fU2VjJztcclxuXHR0aGlzLmdldFJlc3VsdCA9ICgpID0+IENvbnN0YW50cy5ZZWFyX0luX1NlYztcclxufVxyXG5cclxuWWVhcl9Jbl9TZWMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUludGVybmFsTWFjcm8ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZZWFyX0luX1NlYzsiLCJjb25zdCBDb25zdGFudHMgPSB7XHJcblx0TWlsbGlfSW5fU2VjOiAxMDAwLFxyXG5cdFNlY19Jbl9NaW46IDYwLFxyXG5cdE1pbl9Jbl9Ib3VyOiA2MCxcclxuXHRIb3VyX0luX0RheTogMjQsXHJcblx0RGF5X0luX01vbnRoOiAzMCxcclxuXHRZZWFyX0luX0RheTogMzY1LFxyXG5cdEtiX0luX0J5dGVzOiAxMDI0LFxyXG59O1xyXG5cclxuQ29uc3RhbnRzLk1pbl9Jbl9TZWMgICA9IENvbnN0YW50cy5TZWNfSW5fTWluICogQ29uc3RhbnRzLk1pbGxpX0luX1NlYztcclxuQ29uc3RhbnRzLkhvdXJfSW5fU2VjICA9IENvbnN0YW50cy5NaW5fSW5fSG91ciAqIENvbnN0YW50cy5NaW5fSW5fU2VjO1xyXG5Db25zdGFudHMuRGF5X0luX1NlYyAgID0gQ29uc3RhbnRzLkhvdXJfSW5fRGF5ICogQ29uc3RhbnRzLkhvdXJfSW5fU2VjO1xyXG5Db25zdGFudHMuTW9udGhfSW5fU2VjID0gQ29uc3RhbnRzLkRheV9Jbl9Nb250aCAqIENvbnN0YW50cy5EYXlfSW5fU2VjO1xyXG5Db25zdGFudHMuWWVhcl9Jbl9TZWMgID0gQ29uc3RhbnRzLlllYXJfSW5fRGF5ICogQ29uc3RhbnRzLkRheV9Jbl9TZWM7XHJcbkNvbnN0YW50cy5NYl9Jbl9CeXRlcyAgPSBDb25zdGFudHMuS2JfSW5fQnl0ZXMgKiAxMDI0O1xyXG5Db25zdGFudHMuR2JfSW5fQnl0ZXMgID0gQ29uc3RhbnRzLk1iX0luX0J5dGVzICogMTAyNDtcclxuQ29uc3RhbnRzLlRiX0luX0J5dGVzICA9IENvbnN0YW50cy5HYl9Jbl9CeXRlcyAqIDEwMjQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdGFudHM7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBBZGREYXlGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdhZGREYXknO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgZGF5cyApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdGRheXMgPSBkYXlzID8gKyhcclxuXHRcdFx0ZGF5cy50cmltKClcclxuXHRcdCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldERhdGUoIGN1cnJlbnQuZ2V0RGF0ZSgpICsgZGF5cyApO1xyXG5cdH07XHJcbn1cclxuXHJcbkFkZERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGREYXlGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBBZGRIb3VyRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnYWRkSG91cic7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBob3VycyApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHJcblx0XHRob3VycyA9IGhvdXJzID8gKyhcclxuXHRcdFx0aG91cnMudHJpbSgpXHJcblx0XHQpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRIb3VycyggY3VycmVudC5nZXRIb3VycygpICsgaG91cnMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5BZGRIb3VyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEhvdXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBBZGRNaW5GaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdhZGRNaW4nO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbWludXRlcyApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHJcblx0XHRtaW51dGVzID0gbWludXRlcyA/ICsoXHJcblx0XHRcdG1pbnV0ZXMudHJpbSgpXHJcblx0XHQpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRNaW51dGVzKCBjdXJyZW50LmdldE1pbnV0ZXMoKSArIG1pbnV0ZXMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5BZGRNaW5GaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTWluRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQWRkRGF5RmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnYWRkTW9udGgnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGhzICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0bW9udGhzID0gbW9udGhzID8gK21vbnRocy50cmltKCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldE1vbnRoKCBjdXJyZW50LmdldE1vbnRoKCkgKyBtb250aHMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5BZGREYXlGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRGF5RmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gQWRkWWVhckZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ2FkZFllYXInO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgeWVhcnMgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHR5ZWFycyA9IHllYXJzID8gK3llYXJzLnRyaW0oKSA6IDE7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIGN1cnJlbnQuZ2V0RnVsbFllYXIoKSArIHllYXJzICk7XHJcblx0fTtcclxufVxyXG5cclxuQWRkWWVhckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRZZWFyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIEZhbGxCYWNrRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnaWZFbXB0eSc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBmYWxsYmFjayApIHtcclxuXHRcdHJldHVybiBpc0VtcHR5KCB2YWx1ZSApID8gdmFsdWUgOiBmYWxsYmFjaztcclxuXHR9O1xyXG59XHJcblxyXG5GYWxsQmFja0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWxsQmFja0ZpbHRlcjsiLCJmdW5jdGlvbiBGaWx0ZXIoKSB7XHJcblx0dGhpcy5wcm9wcyA9IFtdO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganNkb2MvcmVxdWlyZS1yZXR1cm5zLWNoZWNrXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5GaWx0ZXIucHJvdG90eXBlLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0U2x1ZyBpcyBlbXB0eScgKTtcclxufTtcclxuRmlsdGVyLnByb3RvdHlwZS5zZXRQcm9wcyAgICAgICA9IGZ1bmN0aW9uICggcHJvcHMgKSB7XHJcblx0dGhpcy5wcm9wcy5wdXNoKCAuLi5wcm9wcyApO1xyXG59O1xyXG5GaWx0ZXIucHJvdG90eXBlLmFwcGx5V2l0aFByb3BzID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRyZXR1cm4gdGhpcy5hcHBseSggdmFsdWUsIC4uLnRoaXMucHJvcHMgKTtcclxufTtcclxuLyoqXHJcbiAqIEBwYXJhbSAgdmFsdWVcclxuICogQHBhcmFtICBwcm9wc1xyXG4gKiBAcmV0dXJuIHsqfVxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbkZpbHRlci5wcm90b3R5cGUuYXBwbHkgPSBmdW5jdGlvbiAoIHZhbHVlLCAuLi5wcm9wcyApIHtcclxuXHRyZXR1cm4gdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcblxyXG5mdW5jdGlvbiBMZW5ndGhGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdsZW5ndGgnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdHJldHVybiB2YWx1ZT8ubGVuZ3RoID8/IDA7XHJcblx0fTtcclxufVxyXG5cclxuTGVuZ3RoRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlbmd0aEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFNldERheUZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3NldERheSc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXkgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRkYXkgPSBkYXkgPyArZGF5LnRyaW0oKSA6IDE7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RGF0ZSggZGF5ICk7XHJcblx0fTtcclxufVxyXG5cclxuU2V0RGF5RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFNldEhvdXJGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdzZXRIb3VyJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIGhvdXIgKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0aG91ciA9IGhvdXIgPyAraG91ci50cmltKCkgOiAwO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldEhvdXJzKCBob3VyICk7XHJcblx0fTtcclxufVxyXG5cclxuU2V0SG91ckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXRIb3VyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU2V0TWluRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc2V0TWluJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUsIG1pbiApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblx0XHRtaW4gPSBtaW4gPyArbWluLnRyaW0oKSA6IDA7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TWludXRlcyggbWluICk7XHJcblx0fTtcclxufVxyXG5cclxuU2V0TWluRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldE1pbkZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFNldE1vbnRoRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc2V0TW9udGgnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGggKSB7XHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRtb250aCA9IG1vbnRoID8gK21vbnRoLnRyaW0oKSA6IDE7XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0TW9udGgoIG1vbnRoICk7XHJcblx0fTtcclxufVxyXG5cclxuU2V0TW9udGhGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0TW9udGhGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBTZXRZZWFyRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc2V0WWVhcic7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXIgKSB7XHJcblx0XHR5ZWFyID0geWVhciA/ICt5ZWFyLnRyaW0oKSA6IGZhbHNlO1xyXG5cclxuXHRcdGlmICggIXllYXIgKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB7IHRpbWUgfSA9IGdldFRpbWVzdGFtcCggdmFsdWUgKTtcclxuXHRcdGNvbnN0IGN1cnJlbnQgID0gbmV3IERhdGUoIHRpbWUgKTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggY3VycmVudC5nZXRUaW1lKCkgKSApIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQuc2V0RnVsbFllYXIoIHllYXIgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TZXRZZWFyRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldFllYXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBTdWJ0cmFjdERheUZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3N1YkRheSc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBkYXlzICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRheXMgPSBkYXlzID8gK2RheXMudHJpbSgpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXREYXRlKCBjdXJyZW50LmdldERhdGUoKSAtIGRheXMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TdWJ0cmFjdERheUZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdERheUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgZ2V0VGltZXN0YW1wIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFN1YnRyYWN0SG91ckZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3N1YkhvdXInO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSwgaG91ciApIHtcclxuXHRcdGNvbnN0IHsgdGltZSB9ID0gZ2V0VGltZXN0YW1wKCB2YWx1ZSApO1xyXG5cdFx0Y29uc3QgY3VycmVudCAgPSBuZXcgRGF0ZSggdGltZSApO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCBjdXJyZW50LmdldFRpbWUoKSApICkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHRcdGhvdXIgPSBob3VyID8gK2hvdXIudHJpbSgpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRIb3VycyggY3VycmVudC5nZXRIb3VycygpIC0gaG91ciApO1xyXG5cdH07XHJcbn1cclxuXHJcblN1YnRyYWN0SG91ckZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdEhvdXJGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IGdldFRpbWVzdGFtcCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBTdWJ0cmFjdE1pbkZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3N1Yk1pbic7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlLCBtaW51dGVzICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0bWludXRlcyA9IG1pbnV0ZXMgPyArbWludXRlcy50cmltKCkgOiAxO1xyXG5cclxuXHRcdHJldHVybiBjdXJyZW50LnNldE1pbnV0ZXMoIGN1cnJlbnQuZ2V0TWludXRlcygpIC0gbWludXRlcyApO1xyXG5cdH07XHJcbn1cclxuXHJcblN1YnRyYWN0TWluRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnRyYWN0TWluRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU3VidHJhY3RNb250aEZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3N1Yk1vbnRoJztcclxuXHR9O1xyXG5cclxuXHR0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKCB2YWx1ZSwgbW9udGhzICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1vbnRocyA9IG1vbnRocyA/ICttb250aHMudHJpbSgpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRNb250aCggY3VycmVudC5nZXRNb250aCgpIC0gbW9udGhzICk7XHJcblx0fTtcclxufVxyXG5cclxuU3VidHJhY3RNb250aEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJ0cmFjdE1vbnRoRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gU3VidHJhY3RZZWFyRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnc3ViWWVhcic7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hcHBseSA9IGZ1bmN0aW9uICggdmFsdWUsIHllYXJzICkge1xyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblx0XHRjb25zdCBjdXJyZW50ICA9IG5ldyBEYXRlKCB0aW1lICk7XHJcblxyXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIGN1cnJlbnQuZ2V0VGltZSgpICkgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHllYXJzID0geWVhcnMgPyAreWVhcnMudHJpbSgpIDogMTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudC5zZXRGdWxsWWVhciggY3VycmVudC5nZXRGdWxsWWVhcigpIC0geWVhcnMgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TdWJ0cmFjdFllYXJGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VidHJhY3RZZWFyRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyBnZXRUaW1lc3RhbXAgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gVGltZXN0YW1wRmlsdGVyKCkge1xyXG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnVCc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xyXG5cdFx0aWYgKCAhdmFsdWUgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgeyB0aW1lIH0gPSBnZXRUaW1lc3RhbXAoIHZhbHVlICk7XHJcblxyXG5cdFx0cmV0dXJuIHRpbWU7XHJcblx0fTtcclxufVxyXG5cclxuVGltZXN0YW1wRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVzdGFtcEZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFRvRGF0ZUZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3RvRGF0ZSc7XHJcblx0fTtcclxuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIHRvRGF0ZSggbmV3IERhdGUoIHZhbHVlICkgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ub0RhdGVGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EYXRlRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgeyB0b0RhdGVUaW1lIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFRvRGF0ZVRpbWVGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICd0b0RhdGVUaW1lJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gdG9EYXRlVGltZSggbmV3IERhdGUoIHZhbHVlICkgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ub0RhdGVUaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvRGF0ZVRpbWVGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcblxyXG5mdW5jdGlvbiBUb0RheUluTXNGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICd0b0RheUluTXMnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdGNvbnN0IE9ORV9EQVlfTVMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5cdFx0cmV0dXJuIHZhbHVlICogT05FX0RBWV9NUztcclxuXHR9O1xyXG59XHJcblxyXG5Ub0RheUluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9EYXlJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5cclxuZnVuY3Rpb24gVG9Ib3VySW5Nc0ZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3RvSG91ckluTXMnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdGNvbnN0IE9ORV9IT1VSX01TID0gNjAgKiA2MCAqIDEwMDA7XHJcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfSE9VUl9NUztcclxuXHR9O1xyXG59XHJcblxyXG5Ub0hvdXJJbk1zRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvSG91ckluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcblxyXG5mdW5jdGlvbiBUb01pbnV0ZUluTXNGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICd0b01pbnV0ZUluTXMnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdGNvbnN0IE9ORV9NSU5VVEVfTVMgPSA2MCAqIDEwMDA7XHJcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfTUlOVVRFX01TO1xyXG5cdH07XHJcbn1cclxuXHJcblRvTWludXRlSW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb01pbnV0ZUluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcblxyXG5mdW5jdGlvbiBUb01vbnRoSW5Nc0ZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3RvTW9udGhJbk1zJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XHJcblx0XHRjb25zdCBPTkVfTU9OVEhfTVMgPSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcblx0XHRyZXR1cm4gdmFsdWUgKiBPTkVfTU9OVEhfTVM7XHJcblx0fTtcclxufVxyXG5cclxuVG9Nb250aEluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9Nb250aEluTXNGaWx0ZXI7IiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCB7IHRvVGltZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBUb1RpbWVGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICd0b1RpbWUnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdHJldHVybiB0b1RpbWUoIG5ldyBEYXRlKCB2YWx1ZSApICk7XHJcblx0fTtcclxufVxyXG5cclxuVG9UaW1lRmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvVGltZUZpbHRlcjsiLCJpbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuXHJcbmZ1bmN0aW9uIFRvV2Vla0luTXNGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICd0b1dlZWtJbk1zJztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XHJcblx0XHRjb25zdCBPTkVfV0VFS19NUyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5cdFx0cmV0dXJuIHZhbHVlICogT05FX1dFRUtfTVM7XHJcblx0fTtcclxufVxyXG5cclxuVG9XZWVrSW5Nc0ZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb1dlZWtJbk1zRmlsdGVyOyIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5cclxuZnVuY3Rpb24gVG9ZZWFySW5Nc0ZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3RvWWVhckluTXMnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdGNvbnN0IE9ORV9ZRUFSX01TID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuXHRcdHJldHVybiB2YWx1ZSAqIE9ORV9ZRUFSX01TO1xyXG5cdH07XHJcbn1cclxuXHJcblRvWWVhckluTXNGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9ZZWFySW5Nc0ZpbHRlcjsiLCJmdW5jdGlvbiB6ZXJvZmlsbCggbnVtYmVyLCBjb3VudCApIHtcclxuXHRudW1iZXIgPSAnJyArIG51bWJlcjtcclxuXHJcblx0aWYgKCBudW1iZXIubGVuZ3RoID49IGNvdW50ICkge1xyXG5cdFx0cmV0dXJuIG51bWJlcjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHplcm9zID0gbmV3IEFycmF5KCBjb3VudCAtIG51bWJlci5sZW5ndGggKS5maWxsKCAwICk7XHJcblxyXG5cdHJldHVybiB6ZXJvcyArIG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBkYXRlICB7RGF0ZX1cclxuICogQHBhcmFtIGlzVXRjXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKCBkYXRlLCBpc1V0YyA9IHRydWUgKSB7XHJcblx0Y29uc3QgbW9udGggPSBpc1V0YyA/IGRhdGUuZ2V0VVRDTW9udGgoKSA6IGRhdGUuZ2V0TW9udGgoKTtcclxuXHRjb25zdCBkYXkgICA9IGlzVXRjID8gZGF0ZS5nZXRVVENEYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcclxuXHRjb25zdCB5ZWFyICA9IGlzVXRjID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0eWVhcixcclxuXHRcdHplcm9maWxsKCBtb250aCArIDEsIDIgKSxcclxuXHRcdHplcm9maWxsKCBkYXksIDIgKSxcclxuXHRdLmpvaW4oICctJyApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGRhdGUgIHtEYXRlfVxyXG4gKiBAcGFyYW0gaXNVdGNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1RpbWUoIGRhdGUsIGlzVXRjID0gdHJ1ZSApIHtcclxuXHRjb25zdCBob3VycyA9IGlzVXRjID8gZGF0ZS5nZXRVVENIb3VycygpIDogZGF0ZS5nZXRIb3VycygpO1xyXG5cdGNvbnN0IG1pbnMgID0gaXNVdGMgPyBkYXRlLmdldFVUQ01pbnV0ZXMoKSA6IGRhdGUuZ2V0TWludXRlcygpO1xyXG5cclxuXHRyZXR1cm4gW1xyXG5cdFx0emVyb2ZpbGwoIGhvdXJzLCAyICksXHJcblx0XHR6ZXJvZmlsbCggbWlucywgMiApLFxyXG5cdF0uam9pbiggJzonICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGVUaW1lKCBkYXRlICkge1xyXG5cdHJldHVybiB0b0RhdGUoIGRhdGUsIGZhbHNlICkgKyAnVCcgKyB0b1RpbWUoIGRhdGUsIGZhbHNlICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHRpbWVPckRhdGUge1N0cmluZ3xOdW1iZXJ9XHJcbiAqIEByZXR1cm4ge3t0aW1lOiBudW1iZXIsIHR5cGU6IHN0cmluZ319XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCB0aW1lT3JEYXRlICkge1xyXG5cdGlmICggIU51bWJlci5pc05hTiggK3RpbWVPckRhdGUgKSApIHtcclxuXHRcdHJldHVybiB7IHRpbWU6ICt0aW1lT3JEYXRlLCB0eXBlOiAnbnVtYmVyJyB9O1xyXG5cdH1cclxuXHJcblx0dGltZU9yRGF0ZSA9IHRpbWVPckRhdGUudG9TdHJpbmcoKTtcclxuXHJcblx0Y29uc3QgZGF0ZVBhcnRzID0gdGltZU9yRGF0ZS5zcGxpdCggJy0nICk7XHJcblxyXG5cdGlmICggZGF0ZVBhcnRzLmxlbmd0aCA+IDEgKSB7XHJcblx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoIHRpbWVPckRhdGUgKTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0aW1lOiBkYXRlLmdldFRpbWUoKSxcclxuXHRcdFx0dHlwZTogJ2RhdGUnLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRpbWVQYXJ0cyA9IHRpbWVPckRhdGUuc3BsaXQoICc6JyApO1xyXG5cdGNvbnN0IGNhbGxiYWNrcyA9IFtcclxuXHRcdERhdGUucHJvdG90eXBlLnNldEhvdXJzLFxyXG5cdFx0RGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcyxcclxuXHRcdERhdGUucHJvdG90eXBlLnNldFNlY29uZHMsXHJcblx0XTtcclxuXHJcblx0Y29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IGluZGV4IGluIHRpbWVQYXJ0cyApIHtcclxuXHRcdGlmIChcclxuXHRcdFx0IXRpbWVQYXJ0cy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSB8fFxyXG5cdFx0XHQhY2FsbGJhY2tzLmhhc093blByb3BlcnR5KCBpbmRleCApXHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FsbGJhY2tzWyBpbmRleCBdLmNhbGwoIHRpbWUsIHRpbWVQYXJ0c1sgaW5kZXggXSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHRpbWU6IHRpbWUuZ2V0VGltZSgpLFxyXG5cdFx0dHlwZTogJ3RpbWUnLFxyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IExlbmd0aEZpbHRlciBmcm9tICcuL2ZpbHRlcnMvTGVuZ3RoRmlsdGVyJztcclxuaW1wb3J0IEZhbGxCYWNrRmlsdGVyIGZyb20gJy4vZmlsdGVycy9GYWxsQmFja0ZpbHRlcic7XHJcbmltcG9ydCBUb0RhdGVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvRGF0ZUZpbHRlcic7XHJcbmltcG9ydCBUb1RpbWVGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvVGltZUZpbHRlcic7XHJcbmltcG9ydCBUb0RhdGVUaW1lRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RhdGVUaW1lRmlsdGVyJztcclxuaW1wb3J0IEFkZFllYXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZFllYXJGaWx0ZXInO1xyXG5pbXBvcnQgQWRkTW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZE1vbnRoRmlsdGVyJztcclxuaW1wb3J0IEFkZERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvQWRkRGF5RmlsdGVyJztcclxuaW1wb3J0IEFkZEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL0FkZEhvdXJGaWx0ZXInO1xyXG5pbXBvcnQgQWRkTWluRmlsdGVyIGZyb20gJy4vZmlsdGVycy9BZGRNaW5GaWx0ZXInO1xyXG5pbXBvcnQgVGltZXN0YW1wRmlsdGVyIGZyb20gJy4vZmlsdGVycy9UaW1lc3RhbXBGaWx0ZXInO1xyXG5pbXBvcnQgU2V0SG91ckZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU2V0SG91ckZpbHRlcic7XHJcbmltcG9ydCBTZXRNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldE1pbkZpbHRlcic7XHJcbmltcG9ydCBTZXREYXlGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1NldERheUZpbHRlcic7XHJcbmltcG9ydCBTZXRZZWFyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRZZWFyRmlsdGVyJztcclxuaW1wb3J0IFNldE1vbnRoRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TZXRNb250aEZpbHRlcic7XHJcbmltcG9ydCBTdWJ0cmFjdEhvdXJGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0SG91ckZpbHRlcic7XHJcbmltcG9ydCBTdWJ0cmFjdERheUZpbHRlciBmcm9tICcuL2ZpbHRlcnMvU3VidHJhY3REYXlGaWx0ZXInO1xyXG5pbXBvcnQgU3VidHJhY3RNaW5GaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0TWluRmlsdGVyJztcclxuaW1wb3J0IFN1YnRyYWN0TW9udGhGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1N1YnRyYWN0TW9udGhGaWx0ZXInO1xyXG5pbXBvcnQgU3VidHJhY3RZZWFyRmlsdGVyIGZyb20gJy4vZmlsdGVycy9TdWJ0cmFjdFllYXJGaWx0ZXInO1xyXG5pbXBvcnQgVG9EYXlJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub0RheUluTXNGaWx0ZXInO1xyXG5pbXBvcnQgVG9Nb250aEluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvTW9udGhJbk1zRmlsdGVyJztcclxuaW1wb3J0IFRvWWVhckluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvWWVhckluTXNGaWx0ZXInO1xyXG5pbXBvcnQgVG9Ib3VySW5Nc0ZpbHRlciBmcm9tICcuL2ZpbHRlcnMvVG9Ib3VySW5Nc0ZpbHRlcic7XHJcbmltcG9ydCBUb01pbnV0ZUluTXNGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL1RvTWludXRlSW5Nc0ZpbHRlcic7XHJcbmltcG9ydCBUb1dlZWtJbk1zRmlsdGVyIGZyb20gJy4vZmlsdGVycy9Ub1dlZWtJbk1zRmlsdGVyJztcclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHR5cGUge0FycmF5PEZpbHRlcj59XHJcbiAqL1xyXG5sZXQgZmlsdGVycyA9IFtdO1xyXG5cclxuY29uc3QgZ2V0RmlsdGVySXRlbXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5maWx0ZXJzJyxcclxuXHRbXHJcblx0XHRTZXRZZWFyRmlsdGVyLFxyXG5cdFx0U2V0TW9udGhGaWx0ZXIsXHJcblx0XHRTZXREYXlGaWx0ZXIsXHJcblx0XHRTZXRIb3VyRmlsdGVyLFxyXG5cdFx0U2V0TWluRmlsdGVyLFxyXG5cdFx0U3VidHJhY3RZZWFyRmlsdGVyLFxyXG5cdFx0U3VidHJhY3RNb250aEZpbHRlcixcclxuXHRcdFN1YnRyYWN0RGF5RmlsdGVyLFxyXG5cdFx0U3VidHJhY3RIb3VyRmlsdGVyLFxyXG5cdFx0U3VidHJhY3RNaW5GaWx0ZXIsXHJcblx0XHRBZGRZZWFyRmlsdGVyLFxyXG5cdFx0QWRkTW9udGhGaWx0ZXIsXHJcblx0XHRBZGREYXlGaWx0ZXIsXHJcblx0XHRBZGRIb3VyRmlsdGVyLFxyXG5cdFx0QWRkTWluRmlsdGVyLFxyXG5cdFx0TGVuZ3RoRmlsdGVyLFxyXG5cdFx0RmFsbEJhY2tGaWx0ZXIsXHJcblx0XHRUb0RhdGVGaWx0ZXIsXHJcblx0XHRUb1RpbWVGaWx0ZXIsXHJcblx0XHRUb0RhdGVUaW1lRmlsdGVyLFxyXG5cdFx0VGltZXN0YW1wRmlsdGVyLFxyXG5cdFx0VG9EYXlJbk1zRmlsdGVyLFxyXG5cdFx0VG9Nb250aEluTXNGaWx0ZXIsXHJcblx0XHRUb1llYXJJbk1zRmlsdGVyLFxyXG5cdFx0VG9Ib3VySW5Nc0ZpbHRlcixcclxuXHRcdFRvTWludXRlSW5Nc0ZpbHRlcixcclxuXHRcdFRvV2Vla0luTXNGaWx0ZXIsXHJcblx0XSxcclxuKTtcclxubGV0IHJlc3BvbnNlICAgICAgICAgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHB1c2hGaWx0ZXIoIG5hbWUsIHByb3BzID0gJycgKSB7XHJcblx0aWYgKCAhZmlsdGVycy5sZW5ndGggKSB7XHJcblx0XHRmaWx0ZXJzID0gZ2V0RmlsdGVySXRlbXMoKTtcclxuXHR9XHJcblxyXG5cdGxldCBmaWx0ZXI7XHJcblxyXG5cdGZvciAoIGxldCBjdXJyZW50IG9mIGZpbHRlcnMgKSB7XHJcblx0XHRjdXJyZW50ID0gbmV3IGN1cnJlbnQoKTtcclxuXHJcblx0XHRpZiAoIG5hbWUgPT09IGN1cnJlbnQuZ2V0U2x1ZygpICkge1xyXG5cdFx0XHRmaWx0ZXIgPSBjdXJyZW50O1xyXG5cclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoICFmaWx0ZXIgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHByb3BzID0gcHJvcHMuc3BsaXQoICcsJyApLm1hcChcclxuXHRcdGl0ZW0gPT4gaXRlbS50cmltKCksXHJcblx0KTtcclxuXHJcblx0ZmlsdGVyLnNldFByb3BzKCBwcm9wcyApO1xyXG5cdHJlc3BvbnNlLnB1c2goIGZpbHRlciApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaWx0ZXJzKCBmaWx0ZXJzTGlzdCApIHtcclxuXHRpZiAoIG51bGwgPT09IGZpbHRlcnNMaXN0IHx8ICFmaWx0ZXJzTGlzdD8ubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBjb25zdCBmaWx0ZXJOYW1lIG9mIGZpbHRlcnNMaXN0ICkge1xyXG5cdFx0Y29uc3QgbWF0Y2hlcyA9IGZpbHRlck5hbWUubWF0Y2goIC9eKFxcdyspXFwoKFteKCldKylcXCkvICk7XHJcblxyXG5cdFx0aWYgKCBudWxsID09PSBtYXRjaGVzICkge1xyXG5cdFx0XHRwdXNoRmlsdGVyKCBmaWx0ZXJOYW1lICk7XHJcblxyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRwdXNoRmlsdGVyKCBtYXRjaGVzWyAxIF0sIG1hdGNoZXNbIDIgXSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdGVtcFJlc3BvbnNlID0gWyAuLi5yZXNwb25zZSBdO1xyXG5cdHJlc3BvbnNlICAgICAgICAgICA9IFtdO1xyXG5cclxuXHRyZXR1cm4gdGVtcFJlc3BvbnNlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRGaWx0ZXJzOyIsImltcG9ydCBDYWxjdWxhdGVkRm9ybXVsYSBmcm9tICcuL0NhbGN1bGF0ZWRGb3JtdWxhJztcclxuaW1wb3J0IEJhc2VJbnRlcm5hbE1hY3JvIGZyb20gJy4vY29uc3QubmFtZXNwYWNlL0Jhc2VJbnRlcm5hbE1hY3JvJztcclxuaW1wb3J0IGdldEZpbHRlcnMgZnJvbSAnLi9nZXRGaWx0ZXJzJztcclxuaW1wb3J0IGFwcGx5RmlsdGVycyBmcm9tICcuL2FwcGx5RmlsdGVycyc7XHJcbmltcG9ydCB7IHRvRGF0ZSwgdG9EYXRlVGltZSwgdG9UaW1lLCBnZXRUaW1lc3RhbXAgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVycy9GaWx0ZXInO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPSB7XHJcblx0Li4uKFxyXG5cdFx0d2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3QgPz8ge31cclxuXHQpLFxyXG5cdEZpbHRlcixcclxuXHRDYWxjdWxhdGVkRm9ybXVsYSxcclxuXHRCYXNlSW50ZXJuYWxNYWNybyxcclxufTtcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMgPz8ge31cclxuXHQpLFxyXG5cdGdldEZpbHRlcnMsXHJcblx0YXBwbHlGaWx0ZXJzLFxyXG5cdHRvRGF0ZSxcclxuXHR0b0RhdGVUaW1lLFxyXG5cdHRvVGltZSxcclxuXHRnZXRUaW1lc3RhbXAsXHJcbn07XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25zdCA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJDb25zdCA/PyB7fVxyXG5cdCksXHJcblx0Li4uQ29uc3RhbnRzLFxyXG59OyIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk4NDc1ODAvaG93LXRvLWRldGVjdC1zYWZhcmktY2hyb21lLWllLWZpcmVmb3gtYW5kLW9wZXJhLWJyb3dzZXJcclxuXHJcbmNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblxyXG4vLyBTYWZhcmkgMy4wKyBcIltvYmplY3QgSFRNTEVsZW1lbnRDb25zdHJ1Y3Rvcl1cIlxyXG5jb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoIHVzZXJBZ2VudCApIHx8XHJcblx0L2NvbnN0cnVjdG9yL2kudGVzdCggd2luZG93LkhUTUxFbGVtZW50ICkgfHxcclxuXHQoXHJcblx0XHQoIHAgKSA9PiB7XHJcblx0XHRcdHJldHVybiAnW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dJyA9PT0gcC50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdCkoICF3aW5kb3cuc2FmYXJpIHx8IChcclxuXHRcdHR5cGVvZiBzYWZhcmkgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zYWZhcmkucHVzaE5vdGlmaWNhdGlvblxyXG5cdCkgKTtcclxuXHJcbmNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cdHNhZmFyaTogaXNTYWZhcmksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDsiLCJpbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvQmFzZUh0bWxBdHRyJztcclxuaW1wb3J0IE1heEZpbGVzSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlc0h0bWxBdHRyJztcclxuaW1wb3J0IE1heEZpbGVTaXplSHRtbEF0dHIgZnJvbSAnLi9hdHRycy9NYXhGaWxlU2l6ZUh0bWxBdHRyJztcclxuaW1wb3J0IFJlbWFpbmluZ0NhbGNBdHRyIGZyb20gJy4vYXR0cnMvUmVtYWluaW5nQ2FsY0F0dHInO1xyXG5pbXBvcnQgRmlsZUV4dGVuc2lvbkh0bWxBdHRyIGZyb20gJy4vYXR0cnMvRmlsZUV4dGVuc2lvbkh0bWxBdHRyJztcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHBhcmFtICBjYWxsYmFja3Mge0Z1bmN0aW9uW119XHJcbiAqIEByZXR1cm4ge1Byb21pc2U8Kj59XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBhbGxSZWplY3RlZCggY2FsbGJhY2tzICkge1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoXHJcblx0XHRjYWxsYmFja3MubWFwKCBjdXJyZW50ID0+IG5ldyBQcm9taXNlKCBjdXJyZW50ICkgKSxcclxuXHQpO1xyXG5cclxuXHRpZiAoIHdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uZGV2bW9kZSApIHtcclxuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuXHRcdGNvbnNvbGUuZ3JvdXAoICdhbGxSZWplY3RlZCcgKTtcclxuXHRcdGNvbnNvbGUuaW5mbyggLi4ucmVzdWx0cyApO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXHJcblx0fVxyXG5cclxuXHRjb25zdCBpbnZhbGlkID0gcmVzdWx0cy5maWx0ZXIoXHJcblx0XHQoIGVycm9yICkgPT4gJ3JlamVjdGVkJyA9PT0gZXJyb3Iuc3RhdHVzLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiBpbnZhbGlkLm1hcCggKCB7IHJlYXNvbiwgdmFsdWUgfSApID0+IHtcclxuXHRcdHJldHVybiByZWFzb24/Lmxlbmd0aCA/IHJlYXNvblsgMCBdIDogKFxyXG5cdFx0XHRyZWFzb24gPz8gdmFsdWVcclxuXHRcdCk7XHJcblx0fSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZSgpIHtcclxuXHRjb25zdCBsYW5nID0gd2luZG93Py5uYXZpZ2F0b3I/Lmxhbmd1YWdlcz8ubGVuZ3RoXHJcblx0ICAgICAgICAgICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbIDAgXVxyXG5cdCAgICAgICAgICAgICA6IHdpbmRvdz8ubmF2aWdhdG9yPy5sYW5ndWFnZTtcclxuXHJcblx0cmV0dXJuIGxhbmcgPz8gJ2VuLVVTJztcclxufVxyXG5cclxuY29uc3QgZ2V0SW5wdXRIdG1sQXR0ciA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmlucHV0Lmh0bWwuYXR0cnMnLFxyXG5cdFtcclxuXHRcdCdtaW4nLFxyXG5cdFx0J21heCcsXHJcblx0XHQnbWluTGVuZ3RoJyxcclxuXHRcdCdtYXhMZW5ndGgnLFxyXG5cdFx0TWF4RmlsZXNIdG1sQXR0cixcclxuXHRcdE1heEZpbGVTaXplSHRtbEF0dHIsXHJcblx0XHRSZW1haW5pbmdDYWxjQXR0cixcclxuXHRcdEZpbGVFeHRlbnNpb25IdG1sQXR0cixcclxuXHRdLFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtCYXNlSHRtbEF0dHJbXX1cclxuICovXHJcbmxldCBpbnB1dEh0bWxBdHRycyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBuYW1lIHtTdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXREZWZhdWx0QXR0ckJ5TmFtZSggbmFtZSApIHtcclxuXHRjb25zdCBhdHRyICAgID0gbmV3IEJhc2VIdG1sQXR0cigpO1xyXG5cdGF0dHIuYXR0ck5hbWUgPSBuYW1lO1xyXG5cclxuXHRyZXR1cm4gYXR0cjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0QXR0cnMoIGlucHV0ICkge1xyXG5cdGlmICggIWlucHV0SHRtbEF0dHJzLmxlbmd0aCApIHtcclxuXHRcdGlucHV0SHRtbEF0dHJzID0gZ2V0SW5wdXRIdG1sQXR0cigpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgaW5wdXRIdG1sQXR0ciBvZiBpbnB1dEh0bWxBdHRycyApIHtcclxuXHRcdGxldCBjdXJyZW50O1xyXG5cdFx0aWYgKCAnc3RyaW5nJyA9PT0gdHlwZW9mIGlucHV0SHRtbEF0dHIgKSB7XHJcblx0XHRcdGN1cnJlbnQgPSBnZXREZWZhdWx0QXR0ckJ5TmFtZSggaW5wdXRIdG1sQXR0ciApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGN1cnJlbnQgPSBuZXcgaW5wdXRIdG1sQXR0cigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0aW5wdXQuYXR0cnNbIGN1cnJlbnQuYXR0ck5hbWUgXSA9IGN1cnJlbnQ7XHJcblxyXG5cdFx0Y3VycmVudC5zZXRJbnB1dCggaW5wdXQgKTtcclxuXHRcdGN1cnJlbnQub2JzZXJ2ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9IVE1MKCB0ZXh0ICkge1xyXG5cdGNvbnN0IHRlbXBsYXRlICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0ZXh0LnRyaW0oKTtcclxuXHJcblx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkoIHZhbHVlICkge1xyXG5cdGlmICggJ2Jvb2xlYW4nID09PSB0eXBlb2YgdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gIXZhbHVlO1xyXG5cdH1cclxuXHJcblx0aWYgKCBudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgdmFsdWUgJiYgIUFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XHJcblx0XHRyZXR1cm4gIU9iamVjdC5rZXlzKCB2YWx1ZSApPy5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRpZiAoICdudW1iZXInID09PSB0eXBlb2YgdmFsdWUgKSB7XHJcblx0XHRyZXR1cm4gMCA9PT0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gIXZhbHVlPy5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1Zpc2libGUoIG5vZGUgKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdG5vZGU/LmlzQ29ubmVjdGVkICYmIG51bGwgIT09IG5vZGU/Lm9mZnNldFBhcmVudFxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldE9mZnNldFRvcCggbm9kZSApIHtcclxuXHRjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0Y29uc3QgbWF5YmVXaW5kb3cgPSBnZXRTY3JvbGxQYXJlbnQoIG5vZGUgKTtcclxuXHJcblx0cmV0dXJuIHJlY3Q/LnRvcCArIChcclxuXHRcdG1heWJlV2luZG93Py5zY3JvbGxZID8/IDBcclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBnZXROb2RlID0gY3VycmVudCA9PiAoXHJcblx0Y3VycmVudC5zY3JvbGxIZWlnaHQgPiBjdXJyZW50LmNsaWVudEhlaWdodCA/IGN1cnJlbnQgOiBmYWxzZVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KCBub2RlICkge1xyXG5cclxuXHQvLyBqZXQtcG9wdXAgY29tcGF0aWJpbGl0eVxyXG5cdGxldCBjb250YWluZXIgPSBub2RlLmNsb3Nlc3QoICcuamV0LXBvcHVwX19jb250YWluZXItaW5uZXInICk7XHJcblxyXG5cdGlmICggY29udGFpbmVyICkge1xyXG5cdFx0cmV0dXJuIGdldE5vZGUoIGNvbnRhaW5lciApO1xyXG5cdH1cclxuXHJcblx0Ly8gZWxlbWVudG9yLXBybyBwb3B1cCBjb21wYXRpYmlsaXR5XHJcblx0Y29udGFpbmVyID0gbm9kZS5jbG9zZXN0KCAnLmVsZW1lbnRvci1wb3B1cC1tb2RhbCAuZGlhbG9nLW1lc3NhZ2UnICk7XHJcblxyXG5cdGlmICggY29udGFpbmVyICkge1xyXG5cdFx0cmV0dXJuIGdldE5vZGUoIGNvbnRhaW5lciApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHdpbmRvdztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dHMge0lucHV0RGF0YVtdfVxyXG4gKi9cclxuZnVuY3Rpb24gZm9jdXNPbkludmFsaWRJbnB1dCggaW5wdXRzICkge1xyXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcclxuXHRcdGlmICggaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcblx0XHQhaW5wdXQucmVwb3J0aW5nLmhhc0F1dG9TY3JvbGwoKSAmJiBpbnB1dC5vbkZvY3VzKCk7XHJcblx0XHRicmVhaztcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VXNlckFnZW50cygpIHtcclxuXHRmb3IgKCBjb25zdCBbIG5hbWUsIGlzQWN0aXZlIF0gb2YgT2JqZWN0LmVudHJpZXMoIGVudmlyb25tZW50ICkgKSB7XHJcblx0XHRpZiAoICFpc0FjdGl2ZSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoIGBqZXQtLXVhLSR7IG5hbWUgfWAgKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVUEoIGJyb3dzZXIgKSB7XHJcblx0cmV0dXJuIGVudmlyb25tZW50Py5bIGJyb3dzZXIgXTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRhbGxSZWplY3RlZCxcclxuXHRnZXRMYW5ndWFnZSxcclxuXHRzZXRBdHRycyxcclxuXHR0b0hUTUwsXHJcblx0aXNFbXB0eSxcclxuXHRnZXRPZmZzZXRUb3AsXHJcblx0Zm9jdXNPbkludmFsaWRJbnB1dCxcclxuXHRpc1Zpc2libGUsXHJcblx0Z2V0U2Nyb2xsUGFyZW50LFxyXG5cdGlzVUEsXHJcblx0YXBwbHlVc2VyQWdlbnRzLFxyXG59OyIsImltcG9ydCBDYWxjdWxhdGVkRm9ybXVsYSBmcm9tICcuLi9jYWxjLm1vZHVsZS9DYWxjdWxhdGVkRm9ybXVsYSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmZ1bmN0aW9uIENhbGN1bGF0ZWRIdG1sU3RyaW5nKFxyXG5cdHJvb3QsXHJcblx0eyB3aXRoUHJlZml4ID0gdHJ1ZSwgLi4ub3B0aW9ucyB9ID0ge30sXHJcbikge1xyXG5cdENhbGN1bGF0ZWRGb3JtdWxhLmNhbGwoIHRoaXMsIHJvb3QsIG9wdGlvbnMgKTtcclxuXHJcblx0aWYgKCB3aXRoUHJlZml4ICkge1xyXG5cdFx0dGhpcy5yZWdleHAgPSAvSkZCX0ZJRUxEOjooLispL2dpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5yZWxhdGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0bGV0IGZpZWxkVmFsdWUgPSBhcHBseUZpbHRlcnMoXHJcblx0XHRcdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxyXG5cdFx0XHRmYWxzZSxcclxuXHRcdFx0alF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXHJcblx0XHQpO1xyXG5cclxuXHRcdGZpZWxkVmFsdWUgPSB3cD8uaG9va3M/LmFwcGx5RmlsdGVycyA/XHJcblx0XHQgICAgICAgICAgICAgd3AuaG9va3MuYXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHQgICAgICAgICAgICAgJ2pldC5mYi5tYWNyby5maWVsZC52YWx1ZScsXHJcblx0XHRcdCAgICAgICAgICAgICBmaWVsZFZhbHVlLFxyXG5cdFx0XHQgICAgICAgICAgICAgalF1ZXJ5KCBpbnB1dC5ub2Rlc1sgMCBdICksXHJcblx0XHQgICAgICAgICAgICAgKSA6IGZpZWxkVmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlID09PSBmaWVsZFZhbHVlID8gaW5wdXQudmFsdWUuY3VycmVudCA6IGZpZWxkVmFsdWU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vbk1pc3NpbmdQYXJ0ID0gZnVuY3Rpb24gKCkge1xyXG5cdH07XHJcbn1cclxuXHJcbkNhbGN1bGF0ZWRIdG1sU3RyaW5nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENhbGN1bGF0ZWRGb3JtdWxhLnByb3RvdHlwZSApO1xyXG5cclxuQ2FsY3VsYXRlZEh0bWxTdHJpbmcucHJvdG90eXBlLmNhbGN1bGF0ZVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoICF0aGlzLnBhcnRzLmxlbmd0aCApIHtcclxuXHRcdHJldHVybiB0aGlzLmZvcm11bGE7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5wYXJ0cy5tYXAoIGN1cnJlbnQgPT4ge1xyXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY3VycmVudCApIHtcclxuXHRcdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0XHR9XHJcblx0XHRjb25zdCByZXN1bHQgPSBjdXJyZW50KCk7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0ICAgICAgIG51bGwgPT09IHJlc3VsdCB8fCAnJyA9PT0gcmVzdWx0XHJcblx0XHQgICAgICAgKSA/ICcnIDogcmVzdWx0O1xyXG5cdH0gKS5qb2luKCAnJyApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRlZEh0bWxTdHJpbmc7IiwiZnVuY3Rpb24qIGl0ZXJhdGVDb21tZW50cyhcclxuXHRyb290Tm9kZSwgYWNjZXB0Q2FsbGJhY2sgPSAoKSA9PiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgKSB7XHJcblx0Ly8gRm91cnRoIGFyZ3VtZW50LCB3aGljaCBpcyBhY3R1YWxseSBvYnNvbGV0ZSBhY2NvcmRpbmcgdG8gdGhlXHJcblx0Ly8gRE9NNCBzdGFuZGFyZCwgaXMgcmVxdWlyZWQgaW4gSUUgMTFcclxuXHRjb25zdCBpdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihcclxuXHRcdHJvb3ROb2RlLFxyXG5cdFx0Tm9kZUZpbHRlci5TSE9XX0NPTU1FTlQsXHJcblx0XHR7XHJcblx0XHRcdGFjY2VwdE5vZGU6IGFjY2VwdENhbGxiYWNrLFxyXG5cdFx0fSxcclxuXHQpO1xyXG5cdGxldCBjdXJOb2RlO1xyXG5cclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cclxuXHR3aGlsZSAoIGN1ck5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpICkge1xyXG5cdFx0Y3VyTm9kZS5ub2RlVmFsdWUgPSBjdXJOb2RlLm5vZGVWYWx1ZS50cmltKCk7XHJcblxyXG5cdFx0eWllbGQgY3VyTm9kZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGl0ZXJhdGVDb21tZW50czsiLCJpbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaXRlcmF0ZUNvbW1lbnRzJztcclxuXHJcbmZ1bmN0aW9uKiBpdGVyYXRlSmZiQ29tbWVudHMoIHJvb3ROb2RlICkge1xyXG5cdGNvbnN0IGFjY2VwdENhbGxiYWNrID0gbm9kZSA9PiB7XHJcblx0XHRyZXR1cm4gbm9kZS50ZXh0Q29udGVudC5pbmNsdWRlcyggJ0pGQl9GSUVMRDo6JyApO1xyXG5cdH07XHJcblxyXG5cdHlpZWxkKiBpdGVyYXRlQ29tbWVudHMoIHJvb3ROb2RlLCBhY2NlcHRDYWxsYmFjayApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpdGVyYXRlSmZiQ29tbWVudHM7IiwiaW1wb3J0IENhbGN1bGF0ZWRIdG1sU3RyaW5nIGZyb20gJy4vQ2FsY3VsYXRlZEh0bWxTdHJpbmcnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG5cdCAgICAgIHNwcmludGYsXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBjb21tZW50XHJcbiAqIEBwYXJhbSByb290ICAgIHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2ZUNvbW1lbnQoIGNvbW1lbnQsIHJvb3QgKSB7XHJcblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkSHRtbFN0cmluZyggcm9vdCApO1xyXG5cdGZvcm11bGEub2JzZXJ2ZSggY29tbWVudC50ZXh0Q29udGVudCApO1xyXG5cclxuXHRpZiAoICFmb3JtdWxhLnBhcnRzPy5sZW5ndGggKSB7XHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcblx0XHRjb25zb2xlLmdyb3VwKFxyXG5cdFx0XHRfXyhcclxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gY29tbWVudCB0ZXh0XHJcblx0XHRcdFx0X18oICdDb250ZW50OiAlcycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdGNvbW1lbnQudGV4dENvbnRlbnQsXHJcblx0XHRcdCksXHJcblx0XHQpO1xyXG5cdFx0Y29uc29sZS5ncm91cEVuZCgpO1xyXG5cdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXHJcblxyXG5cdFx0Zm9ybXVsYS5jbGVhcldhdGNoZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xyXG5cclxuXHRjb25zdCBwcmV2U2libGluZyA9IGNvbW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcblx0XHR3cmFwcGVyLFxyXG5cdFx0Y29tbWVudCxcclxuXHQpO1xyXG5cclxuXHRmb3JtdWxhLnNldFJlc3VsdCA9ICgpID0+IHtcclxuXHRcdHByZXZTaWJsaW5nLmlubmVySFRNTCA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XHJcblx0fTtcclxuXHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG5cdGNvbW1lbnQuamZiT2JzZXJ2ZWQgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlQ29tbWVudDsiLCJpbXBvcnQgQ2FsY3VsYXRlZEh0bWxTdHJpbmcgZnJvbSAnLi9DYWxjdWxhdGVkSHRtbFN0cmluZyc7XHJcblxyXG4vKipcclxuICogQHBhcmFtIG5vZGUgICAgIHtOb2RlfVxyXG4gKiBAcGFyYW0gYXR0ck5hbWUge3N0cmluZ31cclxuICogQHBhcmFtIHJvb3QgICAgIHtPYnNlcnZhYmxlfVxyXG4gKi9cclxuZnVuY3Rpb24gb2JzZXJ2ZU1hY3JvQXR0ciggbm9kZSwgYXR0ck5hbWUsIHJvb3QgKSB7XHJcblx0Y29uc3Qgbm9kZVZhbHVlID0gbm9kZVsgYXR0ck5hbWUgXSA/PyAnJztcclxuXHJcblx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIG5vZGVWYWx1ZSApIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZm9ybXVsYSA9IG5ldyBDYWxjdWxhdGVkSHRtbFN0cmluZyggcm9vdCApO1xyXG5cdGZvcm11bGEub2JzZXJ2ZSggbm9kZVZhbHVlICk7XHJcblxyXG5cdGZvcm11bGEuc2V0UmVzdWx0ID0gKCkgPT4ge1xyXG5cdFx0bm9kZVsgYXR0ck5hbWUgXSA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XHJcblx0fTtcclxuXHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlTWFjcm9BdHRyOyIsImltcG9ydCBDYWxjdWxhdGVkSHRtbFN0cmluZyBmcm9tICcuL0NhbGN1bGF0ZWRIdG1sU3RyaW5nJztcclxuXHJcbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZX1cclxuICogQHBhcmFtIHJvb3Qge09ic2VydmFibGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYnNlcnZlTm9kZSggbm9kZSwgcm9vdCApIHtcclxuXHRjb25zdCBmb3JtdWxhID0gbmV3IENhbGN1bGF0ZWRIdG1sU3RyaW5nKCByb290LCB7IHdpdGhQcmVmaXg6IGZhbHNlIH0gKTtcclxuXHRmb3JtdWxhLm9ic2VydmUoIGAlJHsgbm9kZS5kYXRhc2V0LmpmYk1hY3JvIH0lYCApO1xyXG5cclxuXHRpZiAoICFmb3JtdWxhLnBhcnRzPy5sZW5ndGggKSB7XHJcblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcblx0XHRjb25zb2xlLmdyb3VwKFxyXG5cdFx0XHRfXyhcclxuXHRcdFx0XHQnSmV0Rm9ybUJ1aWxkZXI6IFlvdSBoYXZlIGludmFsaWQgaHRtbCBtYWNybycsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXHJcblx0XHRcdHNwcmludGYoXHJcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gbWFjcm9cclxuXHRcdFx0XHRfXyggJ0NvbnRlbnQ6ICVzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdFx0bm9kZS5kYXRhc2V0LmpmYk1hY3JvLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xyXG5cdFx0Zm9ybXVsYS5jbGVhcldhdGNoZXJzKCk7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0bm9kZS5kYXRhc2V0LmpmYk9ic2VydmVkID0gMTtcclxuXHJcblx0Zm9ybXVsYS5zZXRSZXN1bHQgPSAoKSA9PiB7XHJcblx0XHRub2RlLmlubmVySFRNTCA9IGZvcm11bGEuY2FsY3VsYXRlU3RyaW5nKCk7XHJcblx0fTtcclxuXHRmb3JtdWxhLnNldFJlc3VsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlTm9kZTsiLCJmdW5jdGlvbiBxdWVyeUJ5QXR0clZhbHVlKCByb290Tm9kZSwgdmFsdWUgKSB7XHJcblx0Y29uc3QgeyByZXBsYWNlQXR0cnMgPSBbXSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XHJcblxyXG5cdGNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSBbXTtcclxuXHJcblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcmVwbGFjZUF0dHJzLmxlbmd0aDsgaSsrICkge1xyXG5cdFx0cXVlcnlTZWxlY3Rvci5wdXNoKCBgWyR7IHJlcGxhY2VBdHRyc1sgaSBdIH0qPVwiJHsgdmFsdWUgfVwiXWAgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByb290Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCBxdWVyeVNlbGVjdG9yLmpvaW4oICcsICcgKSApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBxdWVyeUJ5QXR0clZhbHVlOyIsImltcG9ydCBpbml0Rm9ybSBmcm9tICcuL2luaXRGb3JtJztcclxuXHJcbmZ1bmN0aW9uIGluaXRFbGVtZW50b3IoKSB7XHJcblx0aWYgKCAhIHdpbmRvdy5lbGVtZW50b3JGcm9udGVuZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3Qgd2lkZ2V0cyA9IHtcclxuXHRcdCdqZXQtZW5naW5lLWJvb2tpbmctZm9ybS5kZWZhdWx0JzogaW5pdEZvcm0sXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci1mb3JtLmRlZmF1bHQnOiBpbml0Rm9ybSxcclxuXHR9O1xyXG5cclxuXHRqUXVlcnkuZWFjaCggd2lkZ2V0cywgZnVuY3Rpb24oIHdpZGdldCwgY2FsbGJhY2sgKSB7XHJcblx0XHR3aW5kb3cuZWxlbWVudG9yRnJvbnRlbmQuaG9va3MuYWRkQWN0aW9uKCAnZnJvbnRlbmQvZWxlbWVudF9yZWFkeS8nICsgd2lkZ2V0LCBjYWxsYmFjayApO1xyXG5cdH0gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEVsZW1lbnRvcjsiLCJpbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9PYnNlcnZhYmxlJztcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlciA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlciA/PyB7fTtcclxuXHJcbmZ1bmN0aW9uIGluaXRGb3JtKCAkc2NvcGUgKSB7XHJcblx0Y29uc3QgZm9ybSA9ICRzY29wZVsgMCBdLnF1ZXJ5U2VsZWN0b3IoICdmb3JtLmpldC1mb3JtLWJ1aWxkZXInICk7XHJcblxyXG5cdGlmICggIWZvcm0gKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcclxuXHJcblx0d2luZG93LkpldEZvcm1CdWlsZGVyWyBmb3JtLmRhdGFzZXQuZm9ybUlkIF0gPSBvYnNlcnZhYmxlO1xyXG5cclxuXHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlcihcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL2luaXQnLFxyXG5cdFx0WyAkc2NvcGUsIG9ic2VydmFibGUgXSxcclxuXHQpO1xyXG5cclxuXHRvYnNlcnZhYmxlLm9ic2VydmUoIGZvcm0gKTtcclxuXHJcblx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci9hZnRlci1pbml0JyxcclxuXHRcdFsgJHNjb3BlLCBvYnNlcnZhYmxlIF0sXHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEZvcm07IiwiaW1wb3J0IElucHV0RGF0YSBmcm9tICcuL0lucHV0RGF0YSc7XHJcbmltcG9ydCB7IGlzQ2hhbmdlVHlwZSB9IGZyb20gJy4uL3N1cHBvcnRzJztcclxuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2snO1xyXG5pbXBvcnQgeyBTVFJJQ1RfTU9ERSB9IGZyb20gJy4uL3NpZ25hbHMvQmFzZVNpZ25hbCc7XHJcblxyXG5mdW5jdGlvbiBDaGFuZ2VEYXRhKCkge1xyXG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzQ2hhbmdlVHlwZSggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG5cdFx0IVNUUklDVF9NT0RFICYmIGpRdWVyeSggbm9kZSApLm9uKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXHJcblx0XHRcdGlmICggdGhpcy52YWx1ZS5jdXJyZW50ID09IGV2ZW50LnRhcmdldC52YWx1ZSApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jYWxsYWJsZS5sb2NrVHJpZ2dlcigpO1xyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0XHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5oYW5kbGVFbnRlcktleS5iaW5kKCB0aGlzICkgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnNpbGVuY2VTZXQoICcnICk7XHJcblx0fTtcclxufVxyXG5cclxuQ2hhbmdlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VEYXRhOyIsImltcG9ydCBMb2FkaW5nUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvTG9hZGluZ1JlYWN0aXZlVmFyJztcclxuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcclxuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuLi9yZWFjdGl2ZS9SZWFjdGl2ZUhvb2snO1xyXG5pbXBvcnQgeyBnZXRTaWduYWwgfSBmcm9tICcuLi9zaWduYWxzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlcG9ydCB9IGZyb20gJy4uL3JlcG9ydGluZy9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRQYXJzZWROYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRUb3AsIGlzVmlzaWJsZSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IFNUUklDVF9NT0RFIH0gZnJvbSAnLi4vc2lnbmFscy9CYXNlU2lnbmFsJztcclxuXHJcbmNvbnN0IHsgZG9BY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge0lucHV0RGF0YX1cclxuICpcclxuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lICAgIE5hbWUgb2YgaHRtbCBmaWVsZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkaW5nIHNwZWNpYWxcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnNcclxuICogQHByb3BlcnR5IHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICAgICAgIFByZXBhcmVkIG5hbWUgb2ZcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaWVsZFxyXG4gKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR8KltdfSAgICAgICAgICAgICAgIG5vZGVzICAgICAgUmVsYXRlZCBub2Rlc1xyXG4gKiBAcHJvcGVydHkge1JlYWN0aXZlVmFyfSAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICAgUmVhY3RpdmUgdmFsdWVcclxuICogQHByb3BlcnR5IHtDb25kaXRpb25DaGVja2VyfG51bGx9ICAgICAgICAgICAgICBjaGVja2VyICAgIENvbmRpdGlvbiBjaGVja2VyXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIGJ5XHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25kaXRpb25hbCBCbG9ja1xyXG4gKiBAcHJvcGVydHkgeyp9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGNWYWx1ZSAgQ2FsY3VsYXRlZCB2YWx1ZVxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBieSBDYWxjdWxhdGVkXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWVsZFxyXG4gKiBAcHJvcGVydHkge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9IHJlcG9ydGluZyAgUmVwb3J0aW5nIG9iamVjdFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHZhbGlkYXRpb24gYW5kXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93aW5nIGVycm9yc1xyXG4gKiBAcHJvcGVydHkge09ic2VydmFibGV9ICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QgICAgICAgTmVhcmVzdCBvYnNlcnZhYmxlXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSwgY291bGQgYmVcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyBvZiB0aGVcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGVyXHJcbiAqIEBwcm9wZXJ0eSB7UGFnZVN0YXRlfSAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZSAgICAgICBSZWxhdGVkIHBhZ2UgaW5cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc3RlcCBmb3JtXHJcbiAqIEBwcm9wZXJ0eSB7TG9hZGluZ1JlYWN0aXZlVmFyfSAgICAgICAgICAgICAgICAgbG9hZGluZyAgICBSZWFjdGl2ZSB2YXIgdG9cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZSB2aXN1YWxcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlIG9mIHRoZSBmaWVsZFxyXG4gKiBAcHJvcGVydHkge09iamVjdDxSZWFjdGl2ZVZhcj59ICAgICAgICAgICAgICAgIGF0dHJzICAgICAgT2JqZWN0IHdpdGhcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aXZlIGF0dHJpYnV0ZXNcclxuICogQHByb3BlcnR5IHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkIElzIHJlcXVpcmVkIGZpZWxkXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBub3RcclxuICogQHByb3BlcnR5IHtudWxsfFJlYWN0aXZlSG9va30gICAgICAgICAgICAgICAgICBlbnRlcktleSAgIFVzZWQgZm9yIGhhbmRsaW5nXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lciBob29rcyBvblxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc3MgRW50ZXIgYnV0dG9uXHJcbiAqIEBwcm9wZXJ0eSB7bnVsbHxzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlICBUeXBlIGlkZW50aWZpZXIgb2ZcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmaWVsZFxyXG4gKi9cclxuZnVuY3Rpb24gSW5wdXREYXRhKCkge1xyXG5cdHRoaXMucmF3TmFtZSA9ICcnO1xyXG5cdHRoaXMubmFtZSAgICA9ICcnO1xyXG5cdHRoaXMuY29tbWVudCA9IGZhbHNlO1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfEhUTUxJbnB1dEVsZW1lbnRbXX1cclxuXHQgKi9cclxuXHR0aGlzLm5vZGVzID0gW107XHJcblx0dGhpcy5hdHRycyAgICAgICAgID0ge307XHJcblx0dGhpcy5lbnRlcktleSAgICAgID0gbnVsbDtcclxuXHR0aGlzLmlucHV0VHlwZSAgICAgPSBudWxsO1xyXG5cdHRoaXMub2Zmc2V0T25Gb2N1cyA9IDc1O1xyXG5cclxuXHQvKipcclxuXHQgKiBQYXRoIGZyb20gdG9wIG9mIGZvcm0gdG8gY3VycmVudCBmaWVsZCBuYW1lXHJcblx0ICogRXguOiBbICdyZXBlYXRlcl9uYW1lJywgMCwgJ3RleHRfZmllbGQnIF1cclxuXHQgKiBXaGVyZTpcclxuXHQgKiAgLSAncmVwZWF0ZXJfbmFtZSc6IG5hbWUgb2YgcmVwZWF0ZXIsIHdoZXJlIGN1cnJlbnQgZmllbGQgaXMgcGxhY2VkXHJcblx0ICogIC0gMDogaW5kZXggb2YgcmVwZWF0ZXIgcm93LCB3aGVyZSBjdXJyZW50IGZpZWxkIGlzIHBsYWNlZFxyXG5cdCAqICAtICd0ZXh0X2ZpZWxkJzogbmFtZSBvZiBjdXJyZW50IGZpZWxkIG5hbWVcclxuXHQgKiBAdHlwZSB7QXJyYXk8c3RyaW5nIHwgbnVtYmVyPn1cclxuXHQgKi9cclxuXHR0aGlzLnBhdGggPSBbXTtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG5cdCAqL1xyXG5cdHRoaXMudmFsdWUgPSB0aGlzLmdldFJlYWN0aXZlKCk7XHJcblx0dGhpcy52YWx1ZS53YXRjaCggdGhpcy5vbkNoYW5nZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcblx0dGhpcy5pc1JlcXVpcmVkID0gZmFsc2U7XHJcblx0dGhpcy5jYWxjVmFsdWUgID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0FkdmFuY2VkUmVwb3J0aW5nfEJyb3dzZXJSZXBvcnRpbmd9XHJcblx0ICovXHJcblx0dGhpcy5yZXBvcnRpbmcgPSBudWxsO1xyXG5cclxuXHR0aGlzLmNoZWNrZXIgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cclxuXHQgKi9cclxuXHR0aGlzLnJvb3QgPSBudWxsO1xyXG5cclxuXHR0aGlzLmxvYWRpbmcgPSBuZXcgTG9hZGluZ1JlYWN0aXZlVmFyKCBmYWxzZSApO1xyXG5cdHRoaXMubG9hZGluZy5tYWtlKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluIENoZWNrYm94RGF0YSBjYXNlIHdlIGhhdmUganVzdCBtYWluIHNhbml0aXplciwgd2l0aG91dCBjYWxsYWJsZS5cclxuXHQgKiBTbyB3ZSBzZXQgLmNhbGNWYWx1ZSBpbnNpZGUgY2FsbGFibGUucnVuU2lnbmFsKClcclxuXHQgKlxyXG5cdCAqIEFuZCB0byBwcmV2ZW50IHJlc2V0dGluZyAuY2FsY1ZhbHVlIGJ5IG9uQ2hhbmdlXHJcblx0ICogc2V0IHRoaXMgcHJvcGVydHkgdG8gRkFMU0UuXHJcblx0ICogQHR5cGUge2Jvb2xlYW59XHJcblx0ICovXHJcblx0dGhpcy5pc1Jlc2V0Q2FsY1ZhbHVlID0gdHJ1ZTtcclxuXHR0aGlzLnZhbGlkYXRlVGltZXIgICAgPSBmYWxzZTtcclxuXHR0aGlzLnN0b3BWYWxpZGF0aW9uICAgPSBmYWxzZTtcclxuXHR0aGlzLmFib3J0Q29udHJvbGxlciAgPSBudWxsO1xyXG59XHJcblxyXG5JbnB1dERhdGEucHJvdG90eXBlLmF0dHJzID0ge307XHJcblxyXG4vKipcclxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsIGV2ZW50ID0+IHtcclxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHR9ICk7XHJcblxyXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2JsdXInLCAoKSA9PiB7fSApO1xyXG5cclxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsICgpID0+IHtcclxuXHRcdGlmICggdGhpcy5yZXBvcnRpbmcgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMucmVwb3J0aW5nLnN3aXRjaEJ1dHRvbnNTdGF0ZSApIHtcclxuXHRcdFx0dGhpcy5yZXBvcnRpbmcuc3dpdGNoQnV0dG9uc1N0YXRlKCB0cnVlICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kZWJvdW5jZWRSZXBvcnQoKTtcclxuXHR9ICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuMVxyXG5cdCAqL1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuXHQhU1RSSUNUX01PREUgJiYgalF1ZXJ5KCBub2RlICkub24oICdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXHJcblx0XHRpZiAoIHRoaXMudmFsdWUuY3VycmVudCA9PSBldmVudC50YXJnZXQudmFsdWUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2FsbGFibGUubG9ja1RyaWdnZXIoKTtcclxuXHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdHRoaXMuY2FsbGFibGUudW5sb2NrVHJpZ2dlcigpO1xyXG5cdH0gKTtcclxuXHJcblx0aWYgKCAnaW5wdXQnICE9PSB0aGlzLmlucHV0VHlwZSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMuZW50ZXJLZXkgPSBuZXcgUmVhY3RpdmVIb29rKCk7XHJcblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuaGFuZGxlRW50ZXJLZXkuYmluZCggdGhpcyApICk7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUubWFrZVJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMub25PYnNlcnZlKCk7XHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuXHR0aGlzLnNldFZhbHVlKCk7XHJcblx0dGhpcy5pbml0Tm90aWZ5VmFsdWUoKTtcclxuXHJcblx0dGhpcy52YWx1ZS5tYWtlKCk7XHJcblxyXG5cdGRvQWN0aW9uKCAnamV0LmZiLmlucHV0Lm1ha2VSZWFjdGl2ZScsIHRoaXMgKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5vbkNoYW5nZSAgICAgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSApIHtcclxuXHRpZiAoIHRoaXMuaXNSZXNldENhbGNWYWx1ZSApIHtcclxuXHRcdHRoaXMuY2FsY1ZhbHVlID0gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG5cdH1cclxuXHJcblx0Ly8gYXBwbHkgY2hhbmdlcyBpbiBET01cclxuXHR0aGlzPy5jYWxsYWJsZT8ucnVuKCBwcmV2VmFsdWUgKTtcclxuXHJcblx0Ly8gc2hvdyBlcnJvcnNcclxuXHR0aGlzLnJlcG9ydCgpO1xyXG59O1xyXG5JbnB1dERhdGEucHJvdG90eXBlLnJlcG9ydCAgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnJlcG9ydGluZy52YWxpZGF0ZU9uQ2hhbmdlKCk7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUucmVwb3J0T25CbHVyID0gZnVuY3Rpb24gKCBzaWduYWwgPSBudWxsICkge1xyXG5cdHRoaXMucmVwb3J0aW5nLnZhbGlkYXRlT25CbHVyKCBzaWduYWwgKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5kZWJvdW5jZWRSZXBvcnQgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAoIHRoaXMudmFsaWRhdGVUaW1lciApIHtcclxuXHRcdHRoaXMuc3RvcFZhbGlkYXRpb24gPSB0cnVlO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLnZhbGlkYXRlVGltZXIgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMuYWJvcnRDb250cm9sbGVyICkge1xyXG4gICAgICAgICAgICB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG5cclxuICAgIGxldCBzaWduYWwgPSB0aGlzLmFib3J0Q29udHJvbGxlci5zaWduYWw7XHJcblxyXG5cdHRoaXMudmFsaWRhdGVUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHRcdHRoaXMucmVwb3J0T25CbHVyKCBzaWduYWwgKTtcclxuXHR9LCA0NTAgKTtcclxufVxyXG4vKipcclxuICogQHBhcmFtICBjYWxsYWJsZVxyXG4gKiBAcmV0dXJuIHsoZnVuY3Rpb24oKTogKnwqW10pfCp9XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcclxuXHRyZXR1cm4gdGhpcy52YWx1ZS53YXRjaCggY2FsbGFibGUgKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS53YXRjaFZhbGlkaXR5ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcclxuXHRyZXR1cm4gdGhpcy5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS53YXRjaCggY2FsbGFibGUgKTtcclxufTtcclxuLyoqXHJcbiAqIEBwYXJhbSAgY2FsbGFibGVcclxuICogQHJldHVybiB7KGZ1bmN0aW9uKCk6ICp8KltdKXwqfVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5zYW5pdGl6ZSA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XHJcblx0cmV0dXJuIHRoaXMudmFsdWUuc2FuaXRpemUoIGNhbGxhYmxlICk7XHJcbn07XHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXREYXRhIHtJbnB1dERhdGF9XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKCBpbnB1dERhdGEgKSB7XHJcblx0dGhpcy5ub2RlcyA9IFsgLi4uaW5wdXREYXRhLmdldE5vZGUoKSBdO1xyXG59O1xyXG5JbnB1dERhdGEucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdGxldCBmaWVsZFZhbHVlO1xyXG5cdGlmICggdGhpcy5pc0FycmF5KCkgKSB7XHJcblx0XHRmaWVsZFZhbHVlID0gQXJyYXkuZnJvbSggdGhpcy5ub2RlcyApLlxyXG5cdFx0XHRtYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRmaWVsZFZhbHVlID0gdGhpcy5ub2Rlc1sgMCBdPy52YWx1ZTtcclxuXHR9XHJcblx0dGhpcy5jYWxjVmFsdWUgICAgID0gZmllbGRWYWx1ZTtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBmaWVsZFZhbHVlO1xyXG59O1xyXG4vKipcclxuICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR9XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0dGhpcy5ub2RlcyAgID0gWyBub2RlIF07XHJcblx0dGhpcy5yYXdOYW1lID0gbm9kZS5uYW1lID8/ICcnO1xyXG5cdHRoaXMubmFtZSAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xyXG5cclxuXHR0aGlzLmlucHV0VHlwZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxufTtcclxuLyoqXHJcbiAqIFJ1bnMgb25jZSBpbiBsaWZlY3ljbGUuXHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLm9uT2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNhdmUgbGluayB0byB0aGlzIG9iamVjdFxyXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0bm9kZS5qZmJTeW5jID0gdGhpcztcclxuXHJcblx0dGhpcy5pc1JlcXVpcmVkID0gdGhpcy5jaGVja0lzUmVxdWlyZWQoKTtcclxuXHJcblx0dGhpcy5jYWxsYWJsZSA9IGdldFNpZ25hbCggbm9kZSwgdGhpcyApO1xyXG5cdHRoaXMuY2FsbGFibGUuc2V0SW5wdXQoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5yZXBvcnRpbmcgPSBjcmVhdGVSZXBvcnQoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5sb2FkaW5nLndhdGNoKCAoKSA9PiB0aGlzLm9uQ2hhbmdlTG9hZGluZygpICk7XHJcblxyXG5cdHRoaXMucGF0aCA9IFsgLi4udGhpcy5nZXRQYXJlbnRQYXRoKCksIHRoaXMubmFtZSBdO1xyXG5cclxuXHRpZiAoXHJcblx0XHQvLyBpcyBhamF4XHJcblx0XHQhdGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIuaGFzT3duUHJvcGVydHkoICdzdGF0dXMnICkgfHxcclxuXHRcdHRoaXMuaGFzUGFyZW50KClcclxuXHQpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLndhdGNoUmVzZXQoICgpID0+IHRoaXMub25DbGVhcigpICk7XHJcbn07XHJcbklucHV0RGF0YS5wcm90b3R5cGUub25DaGFuZ2VMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHR0aGlzLmdldFN1Ym1pdCgpLmxvY2tTdGF0ZS5jdXJyZW50ID0gdGhpcy5sb2FkaW5nLmN1cnJlbnQ7XHJcblxyXG5cdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcclxuXHRjb25zdCB3cmFwcGVyICA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcclxuXHJcblx0d3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCAnaXMtbG9hZGluZycsIHRoaXMubG9hZGluZy5jdXJyZW50ICk7XHJcbn07XHJcbi8qKlxyXG4gKiBAcGFyYW0gb2JzZXJ2YWJsZSB7T2JzZXJ2YWJsZX1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuc2V0Um9vdCA9IGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcclxuXHR0aGlzLnJvb3QgPSBvYnNlcnZhYmxlO1xyXG59O1xyXG4vKipcclxuICogQnkgZGVmYXVsdCBpdCBydW5zIG9ubHkgaWYgcmVwZWF0ZXIgaXRlbSB3YXMgcmVtb3ZlZFxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxufTtcclxuLyoqXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5uYW1lO1xyXG59O1xyXG4vKipcclxuICogQHJldHVybiB7QXJyYXkgfCBzdHJpbmcgfCBib29sZWFufVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy52YWx1ZS5jdXJyZW50O1xyXG59O1xyXG4vKipcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmdldE5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMubm9kZXM7XHJcbn07XHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLnJhd05hbWUuaW5jbHVkZXMoICdbXScgKTtcclxufTtcclxuLyoqXHJcbiAqIEBwYXJhbSBjYWxsYWJsZSAgICAge0Z1bmN0aW9ufG1peGVkfVxyXG4gKiBAcGFyYW0gaW5wdXRDb250ZXh0IHtJbnB1dERhdGF8Qm9vbGVhbn1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuYmVmb3JlU3VibWl0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSwgaW5wdXRDb250ZXh0ID0gZmFsc2UgKSB7XHJcblx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXR0ZXIucHJvbWlzZSggY2FsbGFibGUsIGlucHV0Q29udGV4dCApO1xyXG59O1xyXG4vKipcclxuICogQHJldHVybiB7Rm9ybVN1Ym1pdH1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0U3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLmdldFJvb3QoKS5mb3JtO1xyXG59O1xyXG4vKipcclxuICogQHJldHVybiB7T2JzZXJ2YWJsZX1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcclxuXHRcdHJldHVybiB0aGlzLnJvb3Q7XHJcblx0fVxyXG5cdHJldHVybiB0aGlzLnJvb3QucGFyZW50LmdldFJvb3QoKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHdyYXBwZXIgPSB0aGlzLmdldFdyYXBwZXJOb2RlKCk7XHJcblxyXG5cdHJldHVybiBpc1Zpc2libGUoIHdyYXBwZXIgKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUub25DbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnNpbGVuY2VTZXQoIG51bGwgKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UmVhY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIG5ldyBSZWFjdGl2ZVZhcigpO1xyXG59O1xyXG5cclxuSW5wdXREYXRhLnByb3RvdHlwZS5jaGVja0lzUmVxdWlyZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRyZXR1cm4gbm9kZS5yZXF1aXJlZCA/PyAhIW5vZGUuZGF0YXNldC5yZXF1aXJlZD8ubGVuZ3RoO1xyXG59O1xyXG5cclxuSW5wdXREYXRhLnByb3RvdHlwZS5zaWxlbmNlU2V0ID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHQvKipcclxuXHQgKiBSZWxhdGVkIHRvIGlzc3VlXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTI2MSNpc3N1ZWNvbW1lbnQtMTI5MzI5MDI5MVxyXG5cdCAqL1xyXG5cdGNvbnN0IHRlbXBSZXBvcnQgPSB0aGlzLnJlcG9ydC5iaW5kKCB0aGlzICk7XHJcblxyXG5cdHRoaXMucmVwb3J0ID0gKCkgPT4ge307XHJcblxyXG5cdHRoaXMudmFsdWUuY3VycmVudCA9IHZhbHVlO1xyXG5cclxuXHR0aGlzLnJlcG9ydCA9IHRlbXBSZXBvcnQ7XHJcbn07XHJcblxyXG5JbnB1dERhdGEucHJvdG90eXBlLnNpbGVuY2VOb3RpZnkgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgdGVtcFJlcG9ydCA9IHRoaXMucmVwb3J0LmJpbmQoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5yZXBvcnQgPSAoKSA9PiB7fTtcclxuXHJcblx0dGhpcy52YWx1ZS5ub3RpZnkoKTtcclxuXHJcblx0dGhpcy5yZXBvcnQgPSB0ZW1wUmVwb3J0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmhhc1BhcmVudCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gISF0aGlzLnJvb3Q/LnBhcmVudDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGb3IgaW5zZXJ0IGVycm9ycyBpbiBhZHZhbmNlZCB2YWxpZGF0aW9uIG1vZGVcclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0V3JhcHBlck5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMubm9kZXNbIDAgXS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcm93JyApO1xyXG59O1xyXG5cclxuSW5wdXREYXRhLnByb3RvdHlwZS5oYW5kbGVFbnRlcktleSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblx0aWYgKCBldmVudC5rZXkgIT09ICdFbnRlcicgfHwgLy8gbm90IGVudGVyIGtleVxyXG5cdFx0IXRoaXMuZW50ZXJLZXkgfHwgLy8gaGFuZGxpbmcgZW50ZXIga2V5IGlzIGRpc2FibGVkXHJcblx0XHRldmVudC5zaGlmdEtleSB8fCAvLyB0aGUgc2hpZnQga2V5IHdhcyBwcmVzc2VkXHJcblx0XHRldmVudC5pc0NvbXBvc2luZyAvLyBpZiB0aGUgZXZlbnQgaXMgZmlyZWQgd2l0aGluIGEgY29tcG9zaXRpb24gc2Vzc2lvblxyXG5cdCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0dGhpcy5vbkVudGVyS2V5KCk7XHJcbn07XHJcblxyXG5JbnB1dERhdGEucHJvdG90eXBlLm9uRW50ZXJLZXkgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgY2FuU3VibWl0ID0gdGhpcy5lbnRlcktleS5hcHBseUZpbHRlcnMoIHRydWUgKTtcclxuXHJcblx0aWYgKCBjYW5TdWJtaXQgKSB7XHJcblx0XHRjb25zdCBjYW5UcmlnZ2VyRW50ZXJTdWJtaXQgPSB0aGlzLmdldFN1Ym1pdCgpLmNhblRyaWdnZXJFbnRlclN1Ym1pdDtcclxuXHJcblx0XHRpZiAoIHRydWUgPT09IGNhblRyaWdnZXJFbnRlclN1Ym1pdCApIHtcclxuXHRcdFx0dGhpcy5nZXRTdWJtaXQoKS5zdWJtaXQoKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5JbnB1dERhdGEucHJvdG90eXBlLmluaXROb3RpZnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnNpbGVuY2VOb3RpZnkoKTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUub25Gb2N1cyAgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5zY3JvbGxUbygpO1xyXG5cdHRoaXMuZm9jdXNSYXcoKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5mb2N1c1JhdyA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzIyNjUjaXNzdWVjb21tZW50LTE0NDc5ODg3MThcclxuXHQgKi9cclxuXHRpZiAoIFsgJ2RhdGUnLCAndGltZScsICdkYXRldGltZS1sb2NhbCcgXS5pbmNsdWRlcyggbm9kZS50eXBlICkgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRub2RlPy5mb2N1cyggeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0gKTtcclxufTtcclxuSW5wdXREYXRhLnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xyXG5cclxuXHR3aW5kb3cuc2Nyb2xsVG8oIHtcclxuXHRcdHRvcDogZ2V0T2Zmc2V0VG9wKCB3cmFwcGVyICkgLSB0aGlzLm9mZnNldE9uRm9jdXMsXHJcblx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXHJcblx0fSApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge1JlcG9ydGluZ0NvbnRleHR9XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmdldENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMucm9vdC5nZXRDb250ZXh0KCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHJldHVybiB7Ym9vbGVhbnxJbnB1dERhdGFbXX1cclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUucG9wdWxhdGVJbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG4vKipcclxuICogRXhlY3V0ZWQgd2l0aCBkZWZhdWx0IGJyb3dzZXIgdmFsaWRhdGlvblxyXG4gKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuSW5wdXREYXRhLnByb3RvdHlwZS5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLmdldFJlcG9ydGluZ05vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMubm9kZXNbIDAgXTtcclxufTtcclxuXHJcbklucHV0RGF0YS5wcm90b3R5cGUuZ2V0UGFyZW50UGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoICF0aGlzLnJvb3Q/LnBhcmVudCApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtBcnJheXxPYmplY3R9XHJcblx0ICovXHJcblx0Y29uc3QgdmFsdWUgPSB0aGlzLnJvb3QucGFyZW50LnZhbHVlLmN1cnJlbnQ7XHJcblxyXG5cdGlmICggJ29iamVjdCcgIT09IHR5cGVvZiB2YWx1ZSApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9XHJcblxyXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIHJvdyBdIG9mIE9iamVjdC5lbnRyaWVzKCB2YWx1ZSApICkge1xyXG5cdFx0aWYgKCByb3cgIT09IHRoaXMucm9vdCApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHQuLi50aGlzLnJvb3QucGFyZW50LmdldFBhcmVudFBhdGgoKSxcclxuXHRcdFx0dGhpcy5yb290LnBhcmVudC5uYW1lLFxyXG5cdFx0XHRpbmRleCxcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gW107XHJcbn07XHJcblxyXG4vKipcclxuICogUnVucyBvbmx5IG9uY2Ugb24gd2luZG93IFwibG9hZFwiIGV2ZW50XHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLnJlUXVlcnlWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLnNldFZhbHVlKCk7XHJcblx0dGhpcy5pbml0Tm90aWZ5VmFsdWUoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSdW5zIG9uIHNldCBPYnNlcnZhYmxlLnZhbHVlLmN1cnJlbnRcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqL1xyXG5JbnB1dERhdGEucHJvdG90eXBlLnJldmVydFZhbHVlID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWNhbGN1bGF0ZSB0aGUgZm9ybXVsYSBiYXNlZCBvbiB0aGUgY3VycmVudCBpbnB1dCBkYXRhLlxyXG4gKiBAc2luY2UgMy40LjVcclxuICpcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTE3ODZcclxuICovXHJcbklucHV0RGF0YS5wcm90b3R5cGUucmVDYWxjdWxhdGVGb3JtdWxhID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dERhdGE7XHJcbiIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xyXG5pbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3N1cHBvcnRzJztcclxuXHJcbmZ1bmN0aW9uIE5vTGlzdGVuRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOb2RlfVxyXG5cdCAqL1xyXG5cdHRoaXMuY29tbWVudCA9IG51bGw7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzSGlkZGVuKCBub2RlICk7XHJcblx0fTtcclxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIHNpbGVuY2UgaXMgZ29sZGVuXHJcblx0fTtcclxuXHR0aGlzLm9uT2JzZXJ2ZSAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdElucHV0RGF0YS5wcm90b3R5cGUub25PYnNlcnZlLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0XHRpZiAoICF0aGlzLmlzQXJyYXkoKSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2V0Q29tbWVudCgpO1xyXG5cdH07XHJcblx0dGhpcy5zZXRDb21tZW50ICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmNvbW1lbnQgICA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoIHRoaXMubmFtZSApO1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdG5vZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoIHRoaXMuY29tbWVudCwgbm9kZSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMubWVyZ2UgPSBmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0dGhpcy5ub2Rlcy5wdXNoKCAuLi5pbnB1dC5nZXROb2RlKCkgKTtcclxuXHR9O1xyXG59XHJcblxyXG5Ob0xpc3RlbkRhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9MaXN0ZW5EYXRhOyIsImltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9JbnB1dERhdGEnO1xyXG5pbXBvcnQgeyBpc1JhbmdlIH0gZnJvbSAnLi4vc3VwcG9ydHMnO1xyXG5cclxuZnVuY3Rpb24gUmFuZ2VEYXRhKCkge1xyXG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MRWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLm51bWJlck5vZGUgPSBudWxsO1xyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNSYW5nZSggbm9kZSApO1xyXG5cdH07XHJcblx0dGhpcy5zZXROb2RlICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XHJcblxyXG5cdFx0dGhpcy5udW1iZXJOb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdmFsdWUtbnVtYmVyJyxcclxuXHRcdCk7XHJcblx0fTtcclxufVxyXG5cclxuUmFuZ2VEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhbmdlRGF0YTsiLCJpbXBvcnQgTm9MaXN0ZW5EYXRhIGZyb20gJy4vTm9MaXN0ZW5EYXRhJztcclxuaW1wb3J0IFJlYWN0aXZlU2V0IGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlU2V0JztcclxuXHJcbmNvbnN0IHsgYnVpbHRJblN0YXRlcyB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtSZWFjdGl2ZVNldH0gdmFsdWUgUmVhY3RpdmUgdmFsdWVcclxuICpcclxuICogQGNsYXNzXHJcbiAqL1xyXG5mdW5jdGlvbiBSZW5kZXJTdGF0ZURhdGEoKSB7XHJcblx0Tm9MaXN0ZW5EYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdCdoaWRkZW4nID09PSBub2RlPy50eXBlICYmXHJcblx0XHRcdCdfamZiX2N1cnJlbnRfcmVuZGVyX3N0YXRlc1tdJyA9PT0gbm9kZS5uYW1lXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cclxuXHQgKi9cclxuXHR0aGlzLmFkZCA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xyXG5cdFx0dGhpcy52YWx1ZS5hZGQoIHN0YXRlTmFtZSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cclxuXHQgKi9cclxuXHR0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xyXG5cdFx0dGhpcy52YWx1ZS5yZW1vdmUoIHN0YXRlTmFtZSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBzdGF0ZU5hbWUge1N0cmluZ31cclxuXHQgKiBAcGFyYW0gZm9yY2UgICAgIHtudWxsfEJvb2xlYW59XHJcblx0ICovXHJcblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSwgZm9yY2UgPSBudWxsICkge1xyXG5cdFx0dGhpcy52YWx1ZS50b2dnbGUoIHN0YXRlTmFtZSwgZm9yY2UgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmlzQ3VzdG9tID0gZnVuY3Rpb24gKCBrZXkgKSB7XHJcblx0XHRyZXR1cm4gIWJ1aWx0SW5TdGF0ZXMuaW5jbHVkZXMoIGtleSApO1xyXG5cdH07XHJcbn1cclxuXHJcblJlbmRlclN0YXRlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBOb0xpc3RlbkRhdGEucHJvdG90eXBlICk7XHJcblxyXG5SZW5kZXJTdGF0ZURhdGEucHJvdG90eXBlLmdldFJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBuZXcgUmVhY3RpdmVTZXQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlclN0YXRlRGF0YTsiLCJpbXBvcnQgQ2hhbmdlRGF0YSBmcm9tICcuL0NoYW5nZURhdGEnO1xyXG5pbXBvcnQgUmFuZ2VEYXRhIGZyb20gJy4vUmFuZ2VEYXRhJztcclxuaW1wb3J0IE5vTGlzdGVuRGF0YSBmcm9tICcuL05vTGlzdGVuRGF0YSc7XHJcbmltcG9ydCBSZW5kZXJTdGF0ZURhdGEgZnJvbSAnLi9SZW5kZXJTdGF0ZURhdGEnO1xyXG5pbXBvcnQgeyBzZXRBdHRycyB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG5cdCAgICAgIGRvQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7ZnVuY3Rpb24oKTogKn1cclxuICovXHJcbmNvbnN0IGdldERhdGFUeXBlcyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0W1xyXG5cdFx0UmVuZGVyU3RhdGVEYXRhLFxyXG5cdFx0UmFuZ2VEYXRhLFxyXG5cdFx0Q2hhbmdlRGF0YSxcclxuXHRcdE5vTGlzdGVuRGF0YSxcclxuXHRdLFxyXG4pO1xyXG5cclxubGV0IGRhdGFUeXBlcyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZVxyXG4gKiBAcGFyYW0gIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcbiAqIEByZXR1cm4geyp9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVJbnB1dCggbm9kZSwgb2JzZXJ2YWJsZSApIHtcclxuXHRpZiAoICFkYXRhVHlwZXMubGVuZ3RoICkge1xyXG5cdFx0ZGF0YVR5cGVzID0gZ2V0RGF0YVR5cGVzKCk7XHJcblx0fVxyXG5cdGZvciAoIGNvbnN0IGRhdGFUeXBlIG9mIGRhdGFUeXBlcyApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgZGF0YVR5cGUoKTtcclxuXHJcblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCBub2RlICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y3VycmVudC5zZXRSb290KCBvYnNlcnZhYmxlICk7XHJcblx0XHRjdXJyZW50LnNldE5vZGUoIG5vZGUgKTtcclxuXHRcdHNldEF0dHJzKCBjdXJyZW50ICk7XHJcblxyXG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIuaW5wdXQuY3JlYXRlZCcsIGN1cnJlbnQgKTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudDtcclxuXHR9XHJcblxyXG5cdHRocm93IG5ldyBFcnJvciggJ1NvbWV0aGluZyB3ZW50IHdyb25nJyApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJzZWROYW1lKCBuYW1lICkge1xyXG5cdGNvbnN0IHJlZ2V4cHMgPSBbXHJcblx0XHQvLyBtdWx0aXBsZSBmaWVsZHMgKGNoZWNrYm94W10pXHJcblx0XHQvXihbXFx3XFwtXSspXFxbXFxdJC8sXHJcblx0XHQvLyBmaWVsZHMgaW5zaWRlIHJlcGVhdGVyIChyZXBfbmFtZVsxXVtjb250ZW50X2ZpZWxkXSlcclxuXHRcdC9eW1xcd1xcLV0rXFxbXFxkK1xcXVxcWyhbXFx3XFwtXSspXFxdXFxbP1xcXT8kLyxcclxuXHRdO1xyXG5cclxuXHRmb3IgKCBjb25zdCByZWdFeHAgb2YgcmVnZXhwcyApIHtcclxuXHRcdGlmICggIXJlZ0V4cC50ZXN0KCBuYW1lICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgbWF0Y2hlcyA9IG5hbWUubWF0Y2goIHJlZ0V4cCApO1xyXG5cclxuXHRcdHJldHVybiBtYXRjaGVzWyAxIF07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmFtZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dHMge0lucHV0RGF0YVtdfVxyXG4gKi9cclxuZnVuY3Rpb24gcG9wdWxhdGVJbnB1dHMoIGlucHV0cyApIHtcclxuXHRjb25zdCBsaXN0ID0gW107XHJcblxyXG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIGlucHV0cyApIHtcclxuXHRcdGNvbnN0IGlubmVyID0gaW5wdXQucG9wdWxhdGVJbm5lcigpO1xyXG5cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuXHRcdGlubmVyPy5sZW5ndGggJiYgbGlzdC5wdXNoKCAuLi5pbm5lciApO1xyXG5cclxuXHRcdGxpc3QucHVzaCggaW5wdXQgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRQYXJzZWROYW1lLCBjcmVhdGVJbnB1dCwgcG9wdWxhdGVJbnB1dHMgfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcclxuICogQHRoaXMge1JlYWN0aXZlVmFyfVxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICovXHJcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdSZWFjdGl2ZVZhcigpIHtcclxuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCBmYWxzZSApO1xyXG5cclxuXHR0aGlzLnN0YXJ0ICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuY3VycmVudCA9IHRydWU7XHJcblx0fTtcclxuXHR0aGlzLmVuZCAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuY3VycmVudCA9IGZhbHNlO1xyXG5cdH07XHJcblx0dGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmN1cnJlbnQgPSAhdGhpcy5jdXJyZW50O1xyXG5cdH07XHJcbn1cclxuXHJcbkxvYWRpbmdSZWFjdGl2ZVZhci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZWFjdGl2ZVZhci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdSZWFjdGl2ZVZhcjsiLCJmdW5jdGlvbiBSZWFjdGl2ZUhvb2soKSB7XHJcblx0dGhpcy5oYW5kbGVycyA9IFtdO1xyXG59XHJcblxyXG5SZWFjdGl2ZUhvb2sucHJvdG90eXBlID0ge1xyXG5cdGFkZEZpbHRlciggY2FsbGFibGUgKSB7XHJcblx0XHR0aGlzLmhhbmRsZXJzLnB1c2goIGNhbGxhYmxlICk7XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuaGFuZGxlcnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cdH0sXHJcblx0YXBwbHlGaWx0ZXJzKCAuLi5wYXJhbXMgKSB7XHJcblx0XHRsZXQgY3VycmVudCAgICAgPSBwYXJhbXNbIDAgXTtcclxuXHRcdGNvbnN0IG5ld1BhcmFtcyA9IHBhcmFtcy5zbGljZSggMSApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGhhbmRsZXIgb2YgdGhpcy5oYW5kbGVycyApIHtcclxuXHRcdFx0Y3VycmVudCA9IGhhbmRsZXIoIGN1cnJlbnQsIC4uLm5ld1BhcmFtcyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjdXJyZW50O1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2ZUhvb2s7XHJcbiIsImltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL1JlYWN0aXZlVmFyJztcclxuXHJcbmZ1bmN0aW9uIFJlYWN0aXZlU2V0KCB2YWx1ZSApIHtcclxuXHRSZWFjdGl2ZVZhci5jYWxsKCB0aGlzLCB2YWx1ZSApO1xyXG59XHJcblxyXG5SZWFjdGl2ZVNldC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZWFjdGl2ZVZhci5wcm90b3R5cGUgKTtcclxuXHJcblJlYWN0aXZlU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoIHN0YXRlTmFtZSApIHtcclxuXHQvLyBhZGQgdW5pcXVlIHZhbHVlXHJcblx0dGhpcy5jdXJyZW50ID0gW1xyXG5cdFx0Li4ubmV3IFNldCggW1xyXG5cdFx0XHQuLi4oXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID8/IFtdXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlTmFtZSxcclxuXHRcdF0gKSxcclxuXHRdO1xyXG59O1xyXG5cclxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lICkge1xyXG5cdHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5maWx0ZXIoXHJcblx0XHRpdGVtID0+IGl0ZW0gIT09IHN0YXRlTmFtZSxcclxuXHQpO1xyXG59O1xyXG5cclxuUmVhY3RpdmVTZXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICggc3RhdGVOYW1lLCBmb3JjZSA9IG51bGwgKSB7XHJcblx0aWYgKCBudWxsICE9PSBmb3JjZSApIHtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuXHRcdGZvcmNlID8gdGhpcy5hZGQoIHN0YXRlTmFtZSApIDogdGhpcy5yZW1vdmUoIHN0YXRlTmFtZSApO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICggdGhpcy5jdXJyZW50LmluY2x1ZGVzKCBzdGF0ZU5hbWUgKSApIHtcclxuXHRcdHRoaXMucmVtb3ZlKCBzdGF0ZU5hbWUgKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aGlzLmFkZCggc3RhdGVOYW1lICk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RpdmVTZXQ7IiwiaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBSZWFjdGl2ZVZhciggdmFsdWUgPSBudWxsICkge1xyXG5cdHRoaXMuY3VycmVudCAgICA9IHZhbHVlO1xyXG5cdHRoaXMuc2lnbmFscyAgICA9IFtdO1xyXG5cdHRoaXMuc2FuaXRpemVycyA9IFtdO1xyXG5cdHRoaXMuaXNEZWJ1ZyAgICA9IGZhbHNlO1xyXG5cdHRoaXMuaXNTaWxlbmNlICA9IGZhbHNlO1xyXG5cdHRoaXMuaXNNYWtlZCAgICA9IGZhbHNlO1xyXG59XHJcblxyXG5SZWFjdGl2ZVZhci5wcm90b3R5cGUgPSB7XHJcblx0d2F0Y2hPbmNlICggY2FsbGFibGUgKSB7XHJcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY2xlYXJXYXRjaGVyID0gdGhpcy53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHRjbGVhcldhdGNoZXIoKTtcclxuXHRcdFx0Y2FsbGFibGUoKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG5cdHdhdGNoICggY2FsbGFibGUgKSB7XHJcblx0XHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYWJsZSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdGhpcy5zaWduYWxzLnNvbWUoICggeyBzaWduYWwgfSApID0+IHNpZ25hbCA9PT0gY2FsbGFibGUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zaWduYWxzLnB1c2goIHtcclxuXHRcdFx0c2lnbmFsOiBjYWxsYWJsZSxcclxuXHRcdFx0dHJhY2U6IG5ldyBFcnJvcigpLnN0YWNrLFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zaWduYWxzLmxlbmd0aCAtIDE7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHRoaXMuc2lnbmFscy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblx0fSxcclxuXHRzYW5pdGl6ZSAoIGNhbGxhYmxlICkge1xyXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIC0xICE9PSB0aGlzLnNhbml0aXplcnMuaW5kZXhPZiggY2FsbGFibGUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zYW5pdGl6ZXJzLnB1c2goIGNhbGxhYmxlICk7XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnNhbml0aXplcnMubGVuZ3RoIC0gMTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5zYW5pdGl6ZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHR9LFxyXG5cdG1ha2UgKCkge1xyXG5cdFx0aWYgKCB0aGlzLmlzTWFrZWQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuaXNNYWtlZCAgPSB0cnVlO1xyXG5cdFx0bGV0IGN1cnJlbnQgICA9IHRoaXMuY3VycmVudDtcclxuXHRcdGxldCBwcmV2VmFsdWUgPSBudWxsO1xyXG5cdFx0Y29uc3Qgc2VsZiAgICA9IHRoaXM7XHJcblxyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCAnY3VycmVudCcsIHtcclxuXHRcdFx0Z2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiBjdXJyZW50O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQoIG5ld1ZhbCApIHtcclxuXHRcdFx0XHRpZiAoIGN1cnJlbnQgPT09IG5ld1ZhbCApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cHJldlZhbHVlID0gY3VycmVudDtcclxuXHRcdFx0XHRpZiAoIHNlbGYuaXNEZWJ1ZyApIHtcclxuXHRcdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUsIG5vLWRlYnVnZ2VyICovXHJcblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwKCAnUmVhY3RpdmVWYXIgaGFzIGNoYW5nZWQnICk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggJ2N1cnJlbnQ6JywgY3VycmVudCApO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coICduZXdWYWw6JywgbmV3VmFsICk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSwgbm8tZGVidWdnZXIgKi9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3VycmVudCA9IHNlbGYuYXBwbHlTYW5pdGl6ZXJzKCBuZXdWYWwgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBzZWxmLmlzU2lsZW5jZSApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2VsZi5ub3RpZnkoIHByZXZWYWx1ZSApO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSApO1xyXG5cdH0sXHJcblx0bm90aWZ5ICggcHJldlZhbHVlID0gbnVsbCApIHtcclxuXHRcdHRoaXMuc2lnbmFscy5mb3JFYWNoKFxyXG5cdFx0XHQoIHsgc2lnbmFsIH0gKSA9PiBzaWduYWwuY2FsbCggdGhpcywgcHJldlZhbHVlICkgKTtcclxuXHR9LFxyXG5cdGFwcGx5U2FuaXRpemVycyAoIHZhbHVlICkge1xyXG5cdFx0Zm9yICggY29uc3Qgc2FuaXRpemVyIG9mIHRoaXMuc2FuaXRpemVycyApIHtcclxuXHRcdFx0dmFsdWUgPSBzYW5pdGl6ZXIuY2FsbCggdGhpcywgdmFsdWUgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fSxcclxuXHRzZXRJZkVtcHR5KCBuZXdWYWx1ZSApIHtcclxuXHRcdGlmICggIWlzRW1wdHkoIHRoaXMuY3VycmVudCApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50ID0gbmV3VmFsdWU7XHJcblx0fSxcclxuXHRkZWJ1ZygpIHtcclxuXHRcdHRoaXMuaXNEZWJ1ZyA9ICF0aGlzLmlzRGVidWc7XHJcblx0fSxcclxuXHRzaWxlbmNlKCkge1xyXG5cdFx0dGhpcy5pc1NpbGVuY2UgPSAhdGhpcy5pc1NpbGVuY2U7XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZlVmFyOyIsImltcG9ydCBSZXBvcnRpbmdJbnRlcmZhY2UgZnJvbSAnLi9SZXBvcnRpbmdJbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBhbGxSZWplY3RlZCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBCcm93c2VyUmVwb3J0aW5nKCkge1xyXG5cdFJlcG9ydGluZ0ludGVyZmFjZS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJlcG9ydFJhdyAgID0gZnVuY3Rpb24gKCkge1xyXG5cdH07XHJcblx0dGhpcy5yZXBvcnRGaXJzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKTtcclxuXHJcblx0XHRub2RlLnJlcG9ydFZhbGlkaXR5KCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRSZXN0cmljdGlvbnMgID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRcdGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMoIHRoaXMsIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMuY2xlYXJSZXBvcnQgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIGJyb3dzZXIgYXV0b21hdGljYWxseSBoaWRlIHRvb2x0aXAgbWVzc2FnZXNcclxuXHR9O1xyXG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMudmFsaWRhdGUoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0RXJyb3JzUmF3ID0gYXN5bmMgZnVuY3Rpb24gKCBwcm9taXNlcyApIHtcclxuXHRcdGNvbnN0IGVycm9ycyAgID0gYXdhaXQgYWxsUmVqZWN0ZWQoIHByb21pc2VzICk7XHJcblx0XHR0aGlzLnZhbHVlUHJldiA9IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHJcblx0XHRyZXR1cm4gZXJyb3JzO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGVPbkNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5oYXNBdXRvU2Nyb2xsKCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7SFRNTElucHV0RWxlbWVudHxIVE1MRWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLmdldE5vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5nZXRSZXBvcnRpbmdOb2RlKCk7XHJcblx0fTtcclxufVxyXG5cclxuQnJvd3NlclJlcG9ydGluZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyUmVwb3J0aW5nOyIsImZ1bmN0aW9uIFJlcG9ydGluZ0NvbnRleHQoIHJvb3QgKSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0dGhpcy5yb290ID0gcm9vdDtcclxuXHJcblx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gZmFsc2U7XHJcblx0dGhpcy5zaWxlbmNlICAgICAgID0gdHJ1ZTtcclxuXHJcbn1cclxuXHJcblJlcG9ydGluZ0NvbnRleHQucHJvdG90eXBlID0ge1xyXG5cdHJlc2V0KCBwcm9wcyA9IHt9ICkge1xyXG5cdFx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldFNpbGVuY2UoIHByb3BzPy5zaWxlbmNlID8/IHRydWUgKTtcclxuXHR9LFxyXG5cdHJlcG9ydEZpcnN0KCkge1xyXG5cdFx0dGhpcy5yZXBvcnRlZEZpcnN0ID0gdHJ1ZTtcclxuXHR9LFxyXG5cdHNldFNpbGVuY2UoIHZhbHVlICkge1xyXG5cdFx0dGhpcy5zaWxlbmNlID0gISF2YWx1ZTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0aW5nQ29udGV4dDtcclxuXHJcbiIsIi8qKlxyXG4gKiBWYWxpZGF0aW9uIGxvZ2ljOiBvbiBjaGFuZ2UgaW5wdXQgdmFsdWUgd2UgcnVuXHJcbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLnZhbGlkYXRlT25DaGFuZ2VcclxuICpcclxuICogSW4gdGhhdCBmdW5jdGlvbiB3ZSBjbGVhciBzdG9yZWQgZXJyb3JzXHJcbiAqIEBzZWUgUmVwb3J0aW5nSW50ZXJmYWNlLmVycm9yc1xyXG4gKiBjaGVjayBhbGwgcmVzdHJpY3Rpb25zIGFnYWluIGFuZCBzYXZlIGVycm9yc1xyXG4gKiB0byB0aGUgc2FtZSBwcm9wZXJ0eS5cclxuICpcclxuICogV2hlbiB1c2VyIHRyaWVzIHRvIHN1Ym1pdCBmb3JtIHdlIHJ1blxyXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS52YWxpZGF0ZVxyXG4gKiBJZiB0aGVyZSB3YXMgc3RvcmVkIGVycm9ycyAtIGl0IHdpbGwgcmV0dXJuIHRoZW0uXHJcbiAqIE90aGVyd2lzZSB3ZSBjaGVjayBhbGwgYW5kIHNhdmUgZXJyb3JzLlxyXG4gKlxyXG4gKiBJbiB0aGUgY2FzZSB3aGVuIHdlIHJ1biB0aGUgdmFsaWRhdGlvbiB0aHJvdWdoIHRoZVxyXG4gKiBAc2VlIFJlcG9ydGluZ0ludGVyZmFjZS5pc1ZhbGlkXHJcbiAqIFdlIFwiYmxvY2sgdGhlIGZvcm1cIiB0aHJvdWdoIHRoZSBcInRlc3RcIiBwcm9wZXJ0eS5cclxuICogVGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgYW5kIHdoZW4gaXQgY2hhbmdlcyxcclxuICogdGhlIHN0YXRlIG9mIHRoZSBidXR0b24gZm9yIHN1Ym1pdHRpbmcgdGhlIGZvcm1cclxuICogYW5kIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYmV0d2VlbiBwYWdlcyBjaGFuZ2VzLlxyXG4gKi9cclxuaW1wb3J0IFJlc3RyaWN0aW9uRXJyb3IgZnJvbSAnLi9SZXN0cmljdGlvbkVycm9yJztcclxuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcclxuXHJcbmZ1bmN0aW9uIFJlcG9ydGluZ0ludGVyZmFjZSgpIHtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxyXG5cdCAqL1xyXG5cdHRoaXMuaW5wdXQgPSBudWxsO1xyXG5cdHRoaXMuaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtBcnJheSB8IG51bGx9XHJcblx0ICovXHJcblx0dGhpcy5lcnJvcnMgPSBudWxsO1xyXG5cdHRoaXMucmVzdHJpY3Rpb25zID0gW107XHJcblxyXG5cdHRoaXMudmFsdWVQcmV2ICAgICA9IG51bGw7XHJcblx0dGhpcy52YWxpZGl0eVN0YXRlID0gbnVsbDtcclxuXHR0aGlzLnByb21pc2VzQ291bnQgPSAwO1xyXG59XHJcblxyXG5SZXBvcnRpbmdJbnRlcmZhY2UucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtSZXN0cmljdGlvbltdfVxyXG5cdCAqL1xyXG5cdHJlc3RyaWN0aW9uczogW10sXHJcblx0dmFsdWVQcmV2OiBudWxsLFxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cclxuXHQgKi9cclxuXHR2YWxpZGl0eVN0YXRlOiBudWxsLFxyXG5cdHByb21pc2VzQ291bnQ6IDAsXHJcblx0LyoqXHJcblx0ICogUnVucyBvbiBjaGFuZ2luZyB2YWx1ZSBpbiB0aGUgZmllbGRcclxuXHQgKiBAc2VlIElucHV0RGF0YS5vbkNoYW5nZVxyXG5cdCAqL1xyXG5cdHZhbGlkYXRlT25DaGFuZ2UgKCkge1xyXG5cdH0sXHJcblx0dmFsaWRhdGVPbkJsdXIgKCkge1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogUnVucyBvbiB0cnlpbmcgdG8gc3VibWl0IGZvcm1cclxuXHQgKiBAc2VlIE9ic2VydmFibGUuaW5wdXRzQXJlVmFsaWRcclxuXHQgKlxyXG5cdCAqIFJ1bnMgb24gY2hhbmdpbmcgdmFsdWUsIGlmIHRoaXMgZmllbGQgaW5zaWRlIHBhZ2VcclxuXHQgKiBAc2VlIElucHV0RGF0YS5zZXRQYWdlXHJcblx0ICogQHNlZSBQYWdlU3RhdGUudXBkYXRlU3RhdGVcclxuXHQgKlxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XHJcblx0ICovXHJcblx0YXN5bmMgdmFsaWRhdGUgKCBzaWduYWwgPSBudWxsICkge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyA9IGF3YWl0IHRoaXMuZ2V0RXJyb3JzKCBzaWduYWwgKTtcclxuXHJcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCA9ICFCb29sZWFuKCBlcnJvcnMubGVuZ3RoICk7XHJcblxyXG5cdFx0aWYgKCAhZXJyb3JzLmxlbmd0aCApIHtcclxuXHRcdFx0dGhpcy5jbGVhclJlcG9ydCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG5cdFx0IXRoaXMuaW5wdXQucm9vdC5nZXRDb250ZXh0KCkuc2lsZW5jZSAmJiB0aGlzLnJlcG9ydCggZXJyb3JzICk7XHJcblxyXG5cdFx0dGhyb3cgbmV3IFJlc3RyaWN0aW9uRXJyb3IoIGVycm9yc1sgMCBdLm5hbWUgKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSAgcHJvbWlzZXMge0Z1bmN0aW9uW119XHJcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheSB8IG51bGw+fVxyXG5cdCAqL1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5cdGFzeW5jIGdldEVycm9yc1JhdyAoIHByb21pc2VzICkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnZ2V0RXJyb3IgbXVzdCByZXR1cm4gYSBQcm9taXNlJyApO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXkgfCAqW10gfCBudWxsPn1cclxuXHQgKi9cclxuXHRhc3luYyBnZXRFcnJvcnMgKCBzaWduYWwgPSBudWxsICkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR0aGlzLmlucHV0LmxvYWRpbmcuY3VycmVudCB8fFxyXG5cdFx0XHR0aGlzLmlucHV0Py5jYWxsYWJsZT8ubG9jaz8uY3VycmVudCB8fFxyXG5cdFx0XHQhdGhpcy5pbnB1dC5pc1Zpc2libGUoKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuZ2V0UHJvbWlzZXMoIHNpZ25hbCApO1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0IXRoaXMuaGFzQ2hhbmdlZFZhbHVlKCkgJiZcclxuXHRcdFx0dGhpcy5wcm9taXNlc0NvdW50ID09PSBwcm9taXNlcy5sZW5ndGggJiZcclxuXHRcdFx0IXRoaXMuaW5wdXQuc3RvcFZhbGlkYXRpb24gJiZcclxuXHRcdFx0Ly8gUmVmcmVzaCBhbGwgc2VsZWN0cyBiZWNhdXNlIHRoZWlyIHN0YXRlIG1pZ2h0IGhhdmUgY2hhbmdlZFxyXG5cdFx0XHR0aGlzLmlucHV0LmlucHV0VHlwZSAhPT0gJ2hyLXNlbGVjdC1sZXZlbCdcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvcnMgPz8gW107XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wcm9taXNlc0NvdW50ID0gcHJvbWlzZXMubGVuZ3RoO1xyXG5cdFx0dGhpcy5lcnJvcnMgICAgICAgID0gW107XHJcblxyXG5cdFx0aWYgKCAhcHJvbWlzZXMubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvcnM7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5lcnJvcnMgPSBhd2FpdCB0aGlzLmdldEVycm9yc1JhdyggcHJvbWlzZXMsIHNpZ25hbCApO1xyXG5cdFx0cmV0dXJuIHRoaXMuZXJyb3JzO1xyXG5cdH0sXHJcblx0cmVwb3J0ICggdmFsaWRhdGlvbkVycm9ycyApIHtcclxuXHJcblx0XHRpZiAoIHRoaXMuaW5wdXQuZ2V0Q29udGV4dCgpLnJlcG9ydGVkRmlyc3QgKSB7XHJcblx0XHRcdHRoaXMucmVwb3J0UmF3KCB2YWxpZGF0aW9uRXJyb3JzICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5pbnB1dC5nZXRDb250ZXh0KCkucmVwb3J0Rmlyc3QoKTtcclxuXHJcblx0XHR0aGlzLnJlcG9ydEZpcnN0KCB2YWxpZGF0aW9uRXJyb3JzICk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gdmFsaWRhdGlvbkVycm9ycyB7UmVzdHJpY3Rpb25bXX1cclxuXHQgKi9cclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuXHRyZXBvcnRSYXcgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAncmVwb3J0IGlzIGVtcHR5JyApO1xyXG5cdH0sXHJcblx0cmVwb3J0Rmlyc3QgKCB2YWxpZGF0aW9uRXJyb3JzICkge1xyXG5cdFx0dGhpcy5yZXBvcnQoIHZhbGlkYXRpb25FcnJvcnMgKTtcclxuXHR9LFxyXG5cdGNsZWFyUmVwb3J0ICgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvciggJ2NsZWFyUmVwb3J0IGlzIGVtcHR5JyApO1xyXG5cdH0sXHJcblx0Z2V0UHJvbWlzZXMgKCBzaWduYWwgPSBudWxsKSB7XHJcblx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHRoaXMucmVzdHJpY3Rpb25zICkge1xyXG5cdFx0XHRpZiAoICF0aGlzLmNhblByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiggcmVzdHJpY3Rpb24gKTtcclxuXHJcblx0XHRcdHByb21pc2VzLnB1c2goICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0aW9uLnZhbGlkYXRlUHJvbWlzZSggc2lnbmFsICkuXHJcblx0XHRcdFx0XHR0aGVuKCAoKSA9PiByZXNvbHZlKCByZXN0cmljdGlvbiApICkuXHJcblx0XHRcdFx0XHRjYXRjaCggZXJyb3IgPT4gcmVqZWN0KCBbIHJlc3RyaWN0aW9uLCBlcnJvciBdICkgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwcm9taXNlcztcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSAgcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxyXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XHJcblx0ICovXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0Y2FuUHJvY2Vzc1Jlc3RyaWN0aW9uICggcmVzdHJpY3Rpb24gKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gcmVzdHJpY3Rpb24ge1Jlc3RyaWN0aW9ufVxyXG5cdCAqL1xyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5cdGJlZm9yZVByb2Nlc3NSZXN0cmljdGlvbiAoIHJlc3RyaWN0aW9uICkge1xyXG5cdH0sXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzZG9jL3JlcXVpcmUtcmV0dXJucy1jaGVja1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSAgbm9kZSAge0VsZW1lbnR9XHJcblx0ICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxyXG5cdCAqXHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIGlucHV0ICkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnaXNTdXBwb3J0ZWQgaXMgZW1wdHknICk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRzZXRJbnB1dCAoIGlucHV0ICkge1xyXG5cdFx0dGhpcy52YWxpZGl0eVN0YXRlID0gbmV3IFJlYWN0aXZlVmFyKCk7XHJcblx0XHR0aGlzLnZhbGlkaXR5U3RhdGUubWFrZSgpO1xyXG5cclxuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuXHRcdHRoaXMuc2V0UmVzdHJpY3Rpb25zKCk7XHJcblx0XHR0aGlzLmZpbHRlclJlc3RyaWN0aW9ucygpO1xyXG5cdH0sXHJcblx0c2V0UmVzdHJpY3Rpb25zICgpIHtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0Z2V0Tm9kZSAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5ub2Rlc1sgMCBdO1xyXG5cdH0sXHJcblxyXG5cdGhhc0NoYW5nZWRWYWx1ZSAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVByZXYgIT09IHRoaXMuaW5wdXQuZ2V0VmFsdWUoKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8Kj59XHJcblx0ICovXHJcblx0Y2hlY2tWYWxpZGl0eSAoKSB7XHJcblx0XHRjb25zdCBpc1NpbGVuY2UgPSB0aGlzLmlucHV0LmdldENvbnRleHQoKS5zaWxlbmNlO1xyXG5cclxuXHRcdGlmICggbnVsbCA9PT0gdGhpcy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbGlkYXRlT25DaGFuZ2VTdGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCB0aGlzLnZhbGlkaXR5U3RhdGUuY3VycmVudCApIHtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggaXNTaWxlbmNlICkge1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcblx0XHQhaXNTaWxlbmNlICYmIHRoaXMucmVwb3J0KCB0aGlzLmVycm9ycyB8fCBbXSApO1xyXG5cclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHNpbmNlIDMuMC4xXHJcblx0ICpcclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGhhc0F1dG9TY3JvbGwgKCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogV2l0aCB0aGUgaGVscCBvZiBmaWx0ZXJzIHRoYXQgYWRkIG5ldyByZXN0cmljdGlvbnMsXHJcblx0ICogeW91IGNhbiBvdmVyd3JpdGUgYSBwYXJ0aWN1bGFyIHJlc3RyaWN0aW9uXHJcblx0ICogaWYgdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIGRlZmluZWQgaW4gaXRcclxuXHQgKi9cclxuXHRmaWx0ZXJSZXN0cmljdGlvbnMgKCkge1xyXG5cdFx0Y29uc3QgbWFwID0ge307XHJcblxyXG5cdFx0Zm9yICggbGV0IFsgaW5kZXgsIHJlc3RyaWN0aW9uIF0gb2YgT2JqZWN0LmVudHJpZXMoXHJcblx0XHRcdHRoaXMucmVzdHJpY3Rpb25zICkgKSB7XHJcblx0XHRcdGluZGV4ID0gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpID8gcmVzdHJpY3Rpb24uZ2V0VHlwZSgpIDogaW5kZXg7XHJcblxyXG5cdFx0XHRtYXBbIGluZGV4IF0gPSByZXN0cmljdGlvbjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlc3RyaWN0aW9ucyA9IE9iamVjdC52YWx1ZXMoIG1hcCApO1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRpbmdJbnRlcmZhY2U7IiwiZnVuY3Rpb24gUmVzdHJpY3Rpb25FcnJvciggbWVzc2FnZSApIHtcclxuXHRFcnJvci5jYWxsKCB0aGlzLCBtZXNzYWdlICk7XHJcblxyXG5cdGlmICggRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgKSB7XHJcblx0XHRFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSggdGhpcywgUmVzdHJpY3Rpb25FcnJvciApO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuc3RhY2sgPSAoXHJcblx0XHRcdG5ldyBFcnJvcigpXHJcblx0XHQpLnN0YWNrO1xyXG5cdH1cclxufVxyXG5cclxuUmVzdHJpY3Rpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFcnJvci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RyaWN0aW9uRXJyb3I7IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmltcG9ydCBCcm93c2VyUmVwb3J0aW5nIGZyb20gJy4vQnJvd3NlclJlcG9ydGluZyc7XHJcbmltcG9ydCB7IGFsbFJlamVjdGVkIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcclxuaW1wb3J0IElucHV0RGF0YSBmcm9tICcuLi9pbnB1dHMvSW5wdXREYXRhJztcclxuaW1wb3J0IE5hdGl2ZVJlc3RyaWN0aW9uIGZyb20gJy4vcmVzdHJpY3Rpb25zL05hdGl2ZVJlc3RyaWN0aW9uJztcclxuaW1wb3J0IFJlcXVpcmVkUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IGdldFJlcG9ydFR5cGVzID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxyXG5cdCdqZXQuZmIucmVwb3J0aW5nJyxcclxuXHRbXHJcblx0XHRCcm93c2VyUmVwb3J0aW5nLFxyXG5cdF0sXHJcbik7XHJcblxyXG5sZXQgcmVwb3J0VHlwZXMgPSBbXTtcclxuXHJcbmNvbnN0IGdldERlZmF1bHRSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXHJcblx0W1xyXG5cdFx0TmF0aXZlUmVzdHJpY3Rpb24sXHJcblx0XHRSZXF1aXJlZFJlc3RyaWN0aW9uLFxyXG5cdF0sXHJcbik7XHJcblxyXG5sZXQgZGVmYXVsdFJlc3RyaWN0aW9ucyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgcmVwb3J0aW5nIHtCcm93c2VyUmVwb3J0aW5nfVxyXG4gKiBAcGFyYW0gIG5vZGVcclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRSZXN0cmljdGlvbnMoIHJlcG9ydGluZywgbm9kZSApIHtcclxuXHRpZiAoICFkZWZhdWx0UmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdGRlZmF1bHRSZXN0cmljdGlvbnMgPSBnZXREZWZhdWx0UmVzdHJpY3Rpb25zKCk7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBjb25zdCByZXN0cmljdGlvbiBvZiBkZWZhdWx0UmVzdHJpY3Rpb25zICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXN0cmljdGlvbigpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIG5vZGUsIHJlcG9ydGluZyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXBvcnRpbmcucmVzdHJpY3Rpb25zLnB1c2goIGN1cnJlbnQgKTtcclxuXHR9XHJcblxyXG5cdHJlcG9ydGluZy5yZXN0cmljdGlvbnMuZm9yRWFjaCggaXRlbSA9PiBpdGVtLnNldFJlcG9ydGluZyggcmVwb3J0aW5nICkgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgaW5wdXQge0lucHV0RGF0YX1cclxuICogQHJldHVybiB7QWR2YW5jZWRSZXBvcnRpbmd8QnJvd3NlclJlcG9ydGluZ31cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlcG9ydCggaW5wdXQgKSB7XHJcblx0aWYgKCAhcmVwb3J0VHlwZXMubGVuZ3RoICkge1xyXG5cdFx0cmVwb3J0VHlwZXMgPSBnZXRSZXBvcnRUeXBlcygpO1xyXG5cdH1cclxuXHJcblx0Zm9yICggY29uc3QgcmVwb3J0VHlwZSBvZiByZXBvcnRUeXBlcyApIHtcclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVwb3J0VHlwZSgpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIGlucHV0Lm5vZGVzWyAwIF0sIGlucHV0ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y3VycmVudC5zZXRJbnB1dCggaW5wdXQgKTtcclxuXHJcblx0XHRyZXR1cm4gY3VycmVudDtcclxuXHR9XHJcblxyXG5cdHRocm93IG5ldyBFcnJvciggJ1NvbWV0aGluZyB3ZW50IHdyb25nJyApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBpbnB1dHMgIHtJbnB1dERhdGFbXX1cclxuICogQHBhcmFtICBzaWxlbmNlIHtCb29sZWFufVxyXG4gKlxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbltdfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSA9IGZhbHNlICkge1xyXG5cdGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xyXG5cclxuXHRpbnB1dHM/LlsgMCBdPy5nZXRDb250ZXh0KCk/LnJlc2V0KCB7IHNpbGVuY2UgfSApO1xyXG5cclxuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XHJcblx0XHRpZiAoICEoXHJcblx0XHRcdGlucHV0IGluc3RhbmNlb2YgSW5wdXREYXRhXHJcblx0XHQpICkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdJbnB1dCBpcyBub3QgaW5zdGFuY2Ugb2YgSW5wdXREYXRhJyApO1xyXG5cdFx0fVxyXG5cdFx0Y2FsbGJhY2tzLnB1c2goXHJcblx0XHRcdCggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0XHRcdGlucHV0LnJlcG9ydGluZy52YWxpZGF0ZU9uQ2hhbmdlU3RhdGUoKS5cclxuXHRcdFx0XHRcdHRoZW4oIHJlc29sdmUgKS5cclxuXHRcdFx0XHRcdGNhdGNoKCByZWplY3QgKTtcclxuXHRcdFx0fSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2FsbGJhY2tzO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBpbnB1dHMgIHtJbnB1dERhdGFbXX1cclxuICogQHBhcmFtICBzaWxlbmNlIHtCb29sZWFufVxyXG4gKiBAcmV0dXJuIHtQcm9taXNlPHVua25vd25bXT59XHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0cyggaW5wdXRzLCBzaWxlbmNlID0gZmFsc2UgKSB7XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKFxyXG5cdFx0Z2V0VmFsaWRhdGVDYWxsYmFja3MoIGlucHV0cywgc2lsZW5jZSApLm1hcChcclxuXHRcdFx0Y3VycmVudCA9PiBuZXcgUHJvbWlzZSggY3VycmVudCApLFxyXG5cdFx0KSxcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0cyAge0lucHV0RGF0YVtdfVxyXG4gKiBAcGFyYW0gc2lsZW5jZSB7Qm9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXRzQWxsKCBpbnB1dHMsIHNpbGVuY2UgPSBmYWxzZSApIHtcclxuXHRyZXR1cm4gYWxsUmVqZWN0ZWQoIGdldFZhbGlkYXRlQ2FsbGJhY2tzKCBpbnB1dHMsIHNpbGVuY2UgKSApO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGNyZWF0ZVJlcG9ydCxcclxuXHR2YWxpZGF0ZUlucHV0cyxcclxuXHR2YWxpZGF0ZUlucHV0c0FsbCxcclxuXHRjcmVhdGVEZWZhdWx0UmVzdHJpY3Rpb25zLFxyXG5cdGdldFZhbGlkYXRlQ2FsbGJhY2tzLFxyXG59OyIsImltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL1Jlc3RyaWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIE5hdGl2ZVJlc3RyaWN0aW9uKCkge1xyXG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiAhIW5vZGUuY2hlY2tWYWxpZGl0eTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyBub2RlcyB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQ7XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiBub2RlcyApIHtcclxuXHRcdFx0aWYgKCBub2RlLmNoZWNrVmFsaWRpdHkoKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG59XHJcblxyXG5OYXRpdmVSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZVJlc3RyaWN0aW9uOyIsImltcG9ydCBSZXN0cmljdGlvbiBmcm9tICcuL1Jlc3RyaWN0aW9uJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uLy4uL2Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBSZXF1aXJlZFJlc3RyaWN0aW9uKCkge1xyXG5cdFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy50eXBlID0gJ3JlcXVpcmVkJztcclxufVxyXG5cclxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcblJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0cmV0dXJuIHJlcG9ydGluZy5pbnB1dC5pc1JlcXVpcmVkO1xyXG59O1xyXG5cclxuUmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZTtcclxuXHJcblx0cmV0dXJuICFpc0VtcHR5KCBjdXJyZW50ICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1aXJlZFJlc3RyaWN0aW9uOyIsImZ1bmN0aW9uIFJlc3RyaWN0aW9uKCkge1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtSZXBvcnRpbmdJbnRlcmZhY2V9XHJcblx0ICovXHJcblx0dGhpcy5yZXBvcnRpbmcgPSBudWxsO1xyXG5cdC8qKlxyXG5cdCAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBwcm9wZXJ0eVxyXG5cdCAqIGlmIHlvdSB3YW50IHRvIG1ha2UgdGhpcyBSZXN0cmljdGlvbiBvdmVycmlkYWJsZVxyXG5cdCAqXHJcblx0ICogQHNpbmNlIDMuMS4wXHJcblx0ICpcclxuXHQgKiBAdHlwZSB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdHRoaXMudHlwZSA9ICcnO1xyXG59XHJcblxyXG5SZXN0cmljdGlvbi5wcm90b3R5cGUgPSB7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG5vZGUgICAgICB7SFRNTEVsZW1lbnR8SFRNTElucHV0RWxlbWVudH1cclxuXHQgKiBAcGFyYW0gcmVwb3J0aW5nIHtSZXBvcnRpbmdJbnRlcmZhY2V9XHJcblx0ICovXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0aXNTdXBwb3J0ZWQgKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjEuMFxyXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHQgKi9cclxuXHRnZXRUeXBlICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnR5cGU7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gcmVwb3J0aW5nIHtSZXBvcnRpbmdJbnRlcmZhY2V9XHJcblx0ICovXHJcblx0c2V0UmVwb3J0aW5nICggcmVwb3J0aW5nICkge1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcgPSByZXBvcnRpbmc7XHJcblx0fSxcclxuXHRnZXRWYWx1ZSAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHR9LFxyXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc2RvYy9yZXF1aXJlLXJldHVybnMtY2hlY2tcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHZhbGlkYXRlICgpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvciggJ3ZhbGlkYXRlIGlzIHdyb25nJyApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7UHJvbWlzZTwqPn1cclxuXHQgKi9cclxuXHRhc3luYyB2YWxpZGF0ZVByb21pc2UgKCkge1xyXG5cdFx0bGV0IHZhbGlkYXRpb25SZXN1bHQ7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCggZXJyb3I/Lm1lc3NhZ2UgPz8gZXJyb3IgKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdmFsaWRhdGlvblJlc3VsdFxyXG5cdFx0ICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKClcclxuXHRcdCAgICAgICA6IFByb21pc2UucmVqZWN0KCAndmFsaWRhdGUgaXMgd3JvbmcnICk7XHJcblx0fSxcclxuXHRvblJlYWR5KCkge1xyXG5cdH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0cmljdGlvbjsiLCJpbXBvcnQgUmVhY3RpdmVWYXIgZnJvbSAnLi4vcmVhY3RpdmUvUmVhY3RpdmVWYXInO1xyXG5cclxuY29uc3QgeyBzdHJpY3RfbW9kZSA9IGZhbHNlIH0gPSB3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M7XHJcblxyXG5jb25zdCBTVFJJQ1RfTU9ERSA9IEJvb2xlYW4oIHN0cmljdF9tb2RlICk7XHJcblxyXG5mdW5jdGlvbiBCYXNlU2lnbmFsKCkge1xyXG5cdHRoaXMuaW5wdXQgPSBudWxsO1xyXG5cdHRoaXMubG9jayAgPSBuZXcgUmVhY3RpdmVWYXIoKTtcclxuXHR0aGlzLmxvY2subWFrZSgpO1xyXG5cclxuXHR0aGlzLnRyaWdnZXJqUXVlcnkgPSAhU1RSSUNUX01PREU7XHJcbn1cclxuXHJcbkJhc2VTaWduYWwucHJvdG90eXBlID0ge1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0aW5wdXQ6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG5cdCAqL1xyXG5cdGxvY2s6IG51bGwsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtICBub2RlICAgICAge0hUTUxFbGVtZW50fVxyXG5cdCAqIEBwYXJhbSAgaW5wdXREYXRhIHtJbnB1dERhdGF9XHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuXHRpc1N1cHBvcnRlZCAoIG5vZGUsIGlucHV0RGF0YSApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdHNldElucHV0ICggaW5wdXQgKSB7XHJcblx0XHR0aGlzLmlucHV0ID0gaW5wdXQ7XHJcblx0fSxcclxuXHRydW4gKCBwcmV2VmFsdWUgKSB7XHJcblx0XHRpZiAoICF0aGlzLmxvY2suY3VycmVudCApIHtcclxuXHRcdFx0dGhpcy5ydW5TaWduYWwoIHByZXZWYWx1ZSApO1xyXG5cdFx0XHR0aGlzLnVubG9ja1RyaWdnZXIoKTtcclxuXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICF0aGlzLmxvY2suc2lnbmFscy5sZW5ndGggKSB7XHJcblx0XHRcdHRoaXMubG9jay53YXRjaE9uY2UoICgpID0+IHRoaXMucnVuU2lnbmFsKCBwcmV2VmFsdWUgKSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dHJpZ2dlckpRdWVyeSggbm9kZSApIHtcclxuXHRcdGlmICggIXRoaXMudHJpZ2dlcmpRdWVyeSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0alF1ZXJ5KCBub2RlICkudHJpZ2dlciggJ2NoYW5nZScgKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBwcmV2VmFsdWVcclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICovXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0cnVuU2lnbmFsICggcHJldlZhbHVlICkge1xyXG5cdFx0Ly8geW91ciBjb2RlXHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBAc2luY2UgMy4wLjFcclxuXHQgKi9cclxuXHRsb2NrVHJpZ2dlciAoKSB7XHJcblx0XHR0aGlzLnRyaWdnZXJqUXVlcnkgPSBmYWxzZTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuMVxyXG5cdCAqL1xyXG5cdHVubG9ja1RyaWdnZXIgKCkge1xyXG5cdFx0aWYgKCBTVFJJQ1RfTU9ERSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50cmlnZ2VyalF1ZXJ5ID0gdHJ1ZTtcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgU1RSSUNUX01PREUgfTtcclxuZXhwb3J0IGRlZmF1bHQgQmFzZVNpZ25hbDsiLCJpbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL0Jhc2VTaWduYWwnO1xyXG5pbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3N1cHBvcnRzJztcclxuXHJcbmZ1bmN0aW9uIFNpZ25hbEhpZGRlbkFycmF5KCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG59XHJcblxyXG5TaWduYWxIaWRkZW5BcnJheS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xyXG5cclxuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XHJcblx0cmV0dXJuIGlzSGlkZGVuKCBub2RlICkgJiYgaW5wdXREYXRhLmlzQXJyYXkoKTtcclxufTtcclxuU2lnbmFsSGlkZGVuQXJyYXkucHJvdG90eXBlLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuXHJcblx0aWYgKCAhY3VycmVudD8ubGVuZ3RoICkge1xyXG5cdFx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLmlucHV0Lm5vZGVzICkge1xyXG5cdFx0XHRub2RlLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5wdXQubm9kZXMuc3BsaWNlKCAwLCB0aGlzLmlucHV0Lm5vZGVzLmxlbmd0aCApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2F2ZU5vZGVzID0gW107XHJcblxyXG5cdGZvciAoIGNvbnN0IHZhbHVlIG9mIGN1cnJlbnQgKSB7XHJcblx0XHRjb25zdCBoYXNOb2RlV2l0aFNhbWVWYWx1ZSA9IHRoaXMuaW5wdXQubm9kZXMuc29tZShcclxuXHRcdFx0KCBub2RlLCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRpZiAoIG5vZGUudmFsdWUgIT09IHZhbHVlICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzYXZlTm9kZXMucHVzaCggaW5kZXggKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdGlmICggaGFzTm9kZVdpdGhTYW1lVmFsdWUgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW5wdXQnICk7XHJcblx0XHRuZXdFbGVtZW50LnR5cGUgID0gJ2hpZGRlbic7XHJcblx0XHRuZXdFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcblx0XHRuZXdFbGVtZW50Lm5hbWUgID0gdGhpcy5pbnB1dC5yYXdOYW1lO1xyXG5cclxuXHRcdHRoaXMuaW5wdXQubm9kZXMucHVzaCggbmV3RWxlbWVudCApO1xyXG5cdFx0c2F2ZU5vZGVzLnB1c2goIHRoaXMuaW5wdXQubm9kZXMubGVuZ3RoIC0gMSApO1xyXG5cclxuXHRcdHRoaXMuaW5wdXQuY29tbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcclxuXHRcdFx0bmV3RWxlbWVudCxcclxuXHRcdFx0dGhpcy5pbnB1dC5jb21tZW50Lm5leHRFbGVtZW50U2libGluZyxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmlucHV0Lm5vZGVzID0gdGhpcy5pbnB1dC5ub2Rlcy5maWx0ZXIoICggbm9kZSwgaW5kZXggKSA9PiB7XHJcblx0XHRpZiAoIHNhdmVOb2Rlcy5pbmNsdWRlcyggaW5kZXggKSApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRub2RlLnJlbW92ZSgpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbEhpZGRlbkFycmF5OyIsImltcG9ydCBCYXNlU2lnbmFsIGZyb20gJy4vQmFzZVNpZ25hbCc7XHJcbmltcG9ydCB7IGlzUmFuZ2UgfSBmcm9tICcuLi9zdXBwb3J0cyc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtSYW5nZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbFJhbmdlKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzUmFuZ2UoIG5vZGUgKTtcclxuXHR9O1xyXG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblx0XHRub2RlLnZhbHVlICAgICA9IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudDtcclxuXHJcblx0XHR0aGlzLmlucHV0Lm51bWJlck5vZGUudGV4dENvbnRlbnQgPSBub2RlLnZhbHVlO1xyXG5cclxuXHRcdHRoaXMudHJpZ2dlckpRdWVyeSggbm9kZSApO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbFJhbmdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxSYW5nZTsiLCJpbXBvcnQgU2lnbmFsSGlkZGVuQXJyYXkgZnJvbSAnLi9TaWduYWxIaWRkZW5BcnJheSc7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtSZW5kZXJTdGF0ZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcclxuICogQGNsYXNzXHJcbiAqL1xyXG5mdW5jdGlvbiBTaWduYWxSZW5kZXJTdGF0ZSgpIHtcclxuXHRTaWduYWxIaWRkZW5BcnJheS5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gJ19qZmJfY3VycmVudF9yZW5kZXJfc3RhdGVzW10nID09PSBub2RlLm5hbWU7XHJcblx0fTtcclxuXHJcblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoIHByZXZWYWx1ZSApIHtcclxuXHRcdFNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZS5ydW5TaWduYWwuY2FsbCggdGhpcywgcHJldlZhbHVlICk7XHJcblxyXG5cdFx0Y29uc3QgdXJsICAgICA9IG5ldyBVUkwoIHdpbmRvdy5sb2NhdGlvbiApO1xyXG5cdFx0Y29uc3QgZm9ybUlkICA9IHRoaXMuaW5wdXQuZ2V0U3VibWl0KCkuZ2V0Rm9ybUlkKCk7XHJcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50IHx8IFtdO1xyXG5cdFx0Y29uc3QgcGFyYW0gICA9IGBqZmJbJHsgZm9ybUlkIH1dW3N0YXRlXWA7XHJcblx0XHRjb25zdCBzdGF0ZXMgID0gW107XHJcblxyXG5cdFx0Zm9yICggY29uc3Qgc3RhdGVTbHVnIG9mIGN1cnJlbnQgKSB7XHJcblx0XHRcdGlmICggIXRoaXMuaW5wdXQuaXNDdXN0b20oIHN0YXRlU2x1ZyApICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzdGF0ZXMucHVzaCggc3RhdGVTbHVnICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhc3RhdGVzLmxlbmd0aCApIHtcclxuXHRcdFx0aWYgKCAhdXJsLnNlYXJjaFBhcmFtcy5oYXMoIHBhcmFtICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSggcGFyYW0gKTtcclxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCB7fSwgJycsIHVybC50b1N0cmluZygpICk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcGFyYW1WYWx1ZSA9IHN0YXRlcy5qb2luKCAnLCcgKTtcclxuXHRcdGlmICggdXJsLnNlYXJjaFBhcmFtcy5nZXQoIHBhcmFtICkgPT09IHBhcmFtVmFsdWUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR1cmwuc2VhcmNoUGFyYW1zLnNldCggcGFyYW0sIHBhcmFtVmFsdWUgKTtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgge30sICcnLCB1cmwudG9TdHJpbmcoKSApO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbFJlbmRlclN0YXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNpZ25hbEhpZGRlbkFycmF5LnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsUmVuZGVyU3RhdGU7IiwiaW1wb3J0IFNpZ25hbEhpZGRlbkFycmF5IGZyb20gJy4vU2lnbmFsSGlkZGVuQXJyYXknO1xyXG5pbXBvcnQgU2lnbmFsUmFuZ2UgZnJvbSAnLi9TaWduYWxSYW5nZSc7XHJcbmltcG9ydCBTaWduYWxSZW5kZXJTdGF0ZSBmcm9tICcuL1NpZ25hbFJlbmRlclN0YXRlJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnMsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3QgZ2V0U2lnbmFsVHlwZXMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHRbXHJcblx0XHRTaWduYWxSYW5nZSxcclxuXHRcdFNpZ25hbFJlbmRlclN0YXRlLFxyXG5cdFx0U2lnbmFsSGlkZGVuQXJyYXksXHJcblx0XSxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7KEJhc2VTaWduYWwpW119XHJcbiAqL1xyXG5sZXQgc2lnbmFsVHlwZXMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUgIHtIVE1MRWxlbWVudH1cclxuICogQHBhcmFtICBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKiBAcmV0dXJuIHtCYXNlU2lnbmFsfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U2lnbmFsKCBub2RlLCBpbnB1dCApIHtcclxuXHRpZiAoICFzaWduYWxUeXBlcy5sZW5ndGggKSB7XHJcblx0XHRzaWduYWxUeXBlcyA9IGdldFNpZ25hbFR5cGVzKCk7XHJcblx0fVxyXG5cclxuXHRmb3IgKCBjb25zdCBzaWduYWxUeXBlIG9mIHNpZ25hbFR5cGVzICkge1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyBzaWduYWxUeXBlKCk7XHJcblxyXG5cdFx0aWYgKCAhY3VycmVudC5pc1N1cHBvcnRlZCggbm9kZSwgaW5wdXQgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0U2lnbmFsIH07IiwiaW1wb3J0IEJhc2VTdWJtaXQgZnJvbSAnLi9CYXNlU3VibWl0JztcclxuaW1wb3J0IFJlYWN0aXZlVmFyIGZyb20gJy4uL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcclxuaW1wb3J0IHsgaXNTdWNjZXNzU3RhdHVzIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuZnVuY3Rpb24gQWpheFN1Ym1pdCggZm9ybSApIHtcclxuXHRCYXNlU3VibWl0LmNhbGwoIHRoaXMsIGZvcm0gKTtcclxuXHJcblx0dGhpcy5zdGF0dXMgPSBuZXcgUmVhY3RpdmVWYXIoKTtcclxuXHR0aGlzLnN0YXR1cy5tYWtlKCk7XHJcblxyXG5cdHRoaXMuc3VibWl0ICAgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0ICRmb3JtICAgICAgICAgICAgPSBqUXVlcnkoIHRoaXMuZm9ybS5vYnNlcnZhYmxlLnJvb3ROb2RlICk7XHJcblx0XHRjb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcblx0XHRQcm9taXNlLmFsbChcclxuXHRcdFx0YXBwbHlGaWx0ZXJzKFxyXG5cdFx0XHRcdCdqZXQuZmIuc3VibWl0LmFqYXgucHJvbWlzZXMnLFxyXG5cdFx0XHRcdHRoaXMuZ2V0UHJvbWlzZXMoKSxcclxuXHRcdFx0XHQkZm9ybSxcclxuXHRcdFx0KSxcclxuXHRcdCkudGhlbihcclxuXHRcdFx0Y2FsbGJhY2tzID0+IHRoaXMucnVuU3VibWl0KCBjYWxsYmFja3MgKSxcclxuXHRcdCkuY2F0Y2goXHJcblx0XHRcdCgpID0+IHRoaXMuZm9ybS50b2dnbGUoKSxcclxuXHRcdCk7XHJcblx0fTtcclxuXHR0aGlzLnJ1blN1Ym1pdCAgICAgPSBmdW5jdGlvbiAoIGNhbGxiYWNrcyApIHtcclxuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xyXG5cclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCByb290Tm9kZSApO1xyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKFxyXG5cdFx0XHQnX2pldF9lbmdpbmVfYm9va2luZ19mb3JtX2lkJyxcclxuXHRcdFx0dGhpcy5mb3JtLmdldEZvcm1JZCgpLFxyXG5cdFx0KTtcclxuXHJcblx0XHQvLyBkaXNhYmxlIHdhdGNoZXJzXHJcblx0XHR0aGlzLnN0YXR1cy5zaWxlbmNlKCk7XHJcblxyXG5cdFx0dGhpcy5zdGF0dXMuY3VycmVudCA9IG51bGw7XHJcblxyXG5cdFx0Ly8gZW5hYmxlIHdhdGNoZXJzXHJcblx0XHR0aGlzLnN0YXR1cy5zaWxlbmNlKCk7XHJcblxyXG5cdFx0alF1ZXJ5LmFqYXgoIHtcclxuXHRcdFx0dXJsOiBKZXRGb3JtQnVpbGRlclNldHRpbmdzLmFqYXh1cmwsXHJcblx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0ZGF0YTogZm9ybURhdGEsXHJcblx0XHRcdGNhY2hlOiBmYWxzZSxcclxuXHRcdFx0Y29udGVudFR5cGU6IGZhbHNlLFxyXG5cdFx0XHRwcm9jZXNzRGF0YTogZmFsc2UsXHJcblx0XHR9ICkuZG9uZShcclxuXHRcdFx0cmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHRoaXMub25TdWNjZXNzKCByZXNwb25zZSApO1xyXG5cdFx0XHRcdGNvbnN0ICRmb3JtID0galF1ZXJ5KCByb290Tm9kZSApO1xyXG5cclxuXHRcdFx0XHRjYWxsYmFja3MuZm9yRWFjaCggY2IgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgY2IgKSB7XHJcblx0XHRcdFx0XHRcdGNiLmNhbGwoICRmb3JtLCByZXNwb25zZSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSxcclxuXHRcdCkuZmFpbChcclxuXHRcdFx0dGhpcy5vbkZhaWwuYmluZCggdGhpcyApLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHRoaXMub25TdWNjZXNzICAgICA9IGZ1bmN0aW9uICggcmVzcG9uc2UgKSB7XHJcblx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XHJcblxyXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XHJcblxyXG5cdFx0dGhpcy5sYXN0UmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHRcdGNvbnN0ICRmb3JtICAgICAgID0galF1ZXJ5KCByb290Tm9kZSApO1xyXG5cclxuXHRcdHN3aXRjaCAoIHJlc3BvbnNlLnN0YXR1cyApIHtcclxuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXHJcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlci9hamF4L29uLXN1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0WyByZXNwb25zZSwgJGZvcm0gXSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VyKFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXIvYWpheC9vbi1zdWNjZXNzL25vdC1zdWNjZXNzLXN0YXR1cycsXHJcblx0XHRcdFx0XHRbIHJlc3BvbnNlLCAkZm9ybSBdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdC8qKlxyXG5cdFx0ICogUnVuIHN0YXR1cyB3YXRjaGVyc1xyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG5cclxuXHRcdGlmICggcmVzcG9uc2UucmVkaXJlY3QgKSB7XHJcblx0XHRcdGlmICggcmVzcG9uc2Uub3Blbl9pbl9uZXdfdGFiICkge1xyXG5cdFx0XHRcdHdpbmRvdy5vcGVuKCByZXNwb25zZS5yZWRpcmVjdCwgJ19ibGFuaycgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24gPSByZXNwb25zZS5yZWRpcmVjdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIHJlc3BvbnNlLnJlbG9hZCApIHtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuaW5zZXJ0TWVzc2FnZSggcmVzcG9uc2UubWVzc2FnZSApO1xyXG5cdH07XHJcblx0dGhpcy5vbkZhaWwgICAgICAgID0gZnVuY3Rpb24gKCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKSB7XHJcblx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XHJcblx0XHR0aGlzLnN0YXR1cy5jdXJyZW50ID0gZmFsc2U7XHJcblxyXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ID0gdGhpcy5mb3JtLm9ic2VydmFibGU7XHJcblx0XHRjb25zdCAkZm9ybSAgICAgICAgPSBqUXVlcnkoIHJvb3ROb2RlICk7XHJcblxyXG5cdFx0alF1ZXJ5KCBkb2N1bWVudCApLnRyaWdnZXIoXHJcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2FqYXgvb24tZmFpbCcsXHJcblx0XHRcdFsganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duLCAkZm9ybSBdXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcblx0XHRjb25zb2xlLmVycm9yKCBqcVhIUi5yZXNwb25zZVRleHQsIGVycm9yVGhyb3duICk7XHJcblx0fTtcclxuXHR0aGlzLmluc2VydE1lc3NhZ2UgPSBmdW5jdGlvbiAoIG1lc3NhZ2UgKSB7XHJcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcclxuXHJcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggJ2pldC1mb3JtLWJ1aWxkZXItbWVzc2FnZXMtd3JhcCcgKTtcclxuXHRcdG5vZGUuaW5uZXJIVE1MID0gbWVzc2FnZTtcclxuXHJcblx0XHRyb290Tm9kZS5hcHBlbmRDaGlsZCggbm9kZSApO1xyXG5cdH07XHJcbn1cclxuXHJcbkFqYXhTdWJtaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVN1Ym1pdC5wcm90b3R5cGUgKTtcclxuLyoqXHJcbiAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cclxuICovXHJcbkFqYXhTdWJtaXQucHJvdG90eXBlLnN0YXR1cyA9IG51bGw7XHJcblxyXG5BamF4U3VibWl0LnByb3RvdHlwZS53YXRjaFJlc2V0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcclxuXHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLmZvcm0ub2JzZXJ2YWJsZTtcclxuXHJcblx0aWYgKCAhcm9vdE5vZGUuZGF0YXNldD8uY2xlYXIgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLndhdGNoU3VjY2VzcyggY2FsbGFibGUgKTtcclxufTtcclxuXHJcbkFqYXhTdWJtaXQucHJvdG90eXBlLndhdGNoU3VjY2VzcyA9IGZ1bmN0aW9uICggY2FsbGFibGUgKSB7XHJcblx0Y29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcblxyXG5cdHN0YXR1cy53YXRjaCggKCkgPT4ge1xyXG5cdFx0aWYgKCBpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cy5jdXJyZW50ICkgKSB7XHJcblx0XHRcdGNhbGxhYmxlKCk7XHJcblx0XHR9XHJcblx0fSApO1xyXG59O1xyXG5cclxuQWpheFN1Ym1pdC5wcm90b3R5cGUud2F0Y2hGYWlsID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcclxuXHRjb25zdCBzdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuXHJcblx0c3RhdHVzLndhdGNoKCAoKSA9PiB7XHJcblx0XHRpZiAoICFpc1N1Y2Nlc3NTdGF0dXMoIHN0YXR1cy5jdXJyZW50ICkgKSB7XHJcblx0XHRcdGNhbGxhYmxlKCk7XHJcblx0XHR9XHJcblx0fSApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWpheFN1Ym1pdDsiLCIvKipcclxuICogQHBhcmFtIGZvcm0ge0Zvcm1TdWJtaXR9XHJcbiAqIEBjbGFzc1xyXG4gKi9cclxuZnVuY3Rpb24gQmFzZVN1Ym1pdCggZm9ybSApIHtcclxuXHR0aGlzLmZvcm0gICAgICAgICA9IGZvcm07XHJcblx0dGhpcy5sYXN0UmVzcG9uc2UgPSB7fTtcclxuXHR0aGlzLnByb21pc2VzICAgICA9IFtdO1xyXG59XHJcblxyXG5CYXNlU3VibWl0LnByb3RvdHlwZS5zdWJtaXQgICAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoICdZb3UgbmVlZCB0byByZXBsYWNlIHRoaXMgY2FsbGJhY2snICk7XHJcbn07XHJcbkJhc2VTdWJtaXQucHJvdG90eXBlLmdldFByb21pc2VzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLnByb21pc2VzLm1hcCggKCB7IGNhbGxhYmxlIH0gKSA9PiBuZXcgUHJvbWlzZSggY2FsbGFibGUgKSApO1xyXG59O1xyXG4vKipcclxuICogQHBhcmFtIGNhbGxhYmxlICAgICB7RnVuY3Rpb259XHJcbiAqIEBwYXJhbSBpbnB1dENvbnRleHQge0lucHV0RGF0YXxCb29sZWFufVxyXG4gKi9cclxuQmFzZVN1Ym1pdC5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uICggY2FsbGFibGUsIGlucHV0Q29udGV4dCA9IGZhbHNlICkge1xyXG5cdGNvbnN0IHBhdGhTdHIgPSBpbnB1dENvbnRleHQgPyBpbnB1dENvbnRleHQucGF0aC5qb2luKCAnLicgKSA6ICcnO1xyXG5cclxuXHR0aGlzLnByb21pc2VzID0gdGhpcy5wcm9taXNlcy5maWx0ZXIoXHJcblx0XHQoIHsgaWRQYXRoIH0gKSA9PiAhaWRQYXRoIHx8IGlkUGF0aCAhPT0gcGF0aFN0cixcclxuXHQpO1xyXG5cclxuXHR0aGlzLnByb21pc2VzLnB1c2goIHtcclxuXHRcdGNhbGxhYmxlLFxyXG5cdFx0aWRQYXRoOiBpbnB1dENvbnRleHQgPyBpbnB1dENvbnRleHQucGF0aC5qb2luKCAnLicgKSA6ICcnLFxyXG5cdH0gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VTdWJtaXQ7IiwiaW1wb3J0IExvYWRpbmdSZWFjdGl2ZVZhciBmcm9tICcuLi9yZWFjdGl2ZS9Mb2FkaW5nUmVhY3RpdmVWYXInO1xyXG5pbXBvcnQgQWpheFN1Ym1pdCBmcm9tICcuL0FqYXhTdWJtaXQnO1xyXG5pbXBvcnQgUmVsb2FkU3VibWl0IGZyb20gJy4vUmVsb2FkU3VibWl0JztcclxuaW1wb3J0IHsgZm9jdXNPbkludmFsaWRJbnB1dCB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IHBvcHVsYXRlSW5wdXRzIH0gZnJvbSAnLi4vaW5wdXRzL2Z1bmN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQHBhcmFtIG9ic2VydmFibGUge09ic2VydmFibGV9XHJcbiAqIEBjbGFzc1xyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuZnVuY3Rpb24gRm9ybVN1Ym1pdCggb2JzZXJ2YWJsZSApIHtcclxuXHJcblx0dGhpcy5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcclxuXHR0aGlzLmxvY2tTdGF0ZSAgPSBuZXcgTG9hZGluZ1JlYWN0aXZlVmFyKCBmYWxzZSApO1xyXG5cdHRoaXMubG9ja1N0YXRlLm1ha2UoKTtcclxuXHR0aGlzLmF1dG9Gb2N1cyAgICAgICAgICAgICA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5hdXRvX2ZvY3VzO1xyXG5cdHRoaXMuY2FuU3VibWl0Rm9ybSAgICAgICAgID0gdHJ1ZTtcclxuXHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IHRydWU7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGV2ZW50IHtFdmVudH1cclxuXHQgKi9cclxuXHR0aGlzLm9uU3VibWl0ID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0dGhpcy5zdWJtaXQoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggdHJ1ZSA9PT0gdGhpcy5jYW5TdWJtaXRGb3JtICkge1xyXG5cdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gICAgICAgICA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmNhblRyaWdnZXJFbnRlclN1Ym1pdCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0dGhpcy5vYnNlcnZhYmxlLmlucHV0c0FyZVZhbGlkKCkudGhlbiggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY2xlYXJFcnJvcnMoKTtcclxuXHRcdFx0XHR0aGlzLnRvZ2dsZSgpO1xyXG5cdFx0XHRcdHRoaXMuc3VibWl0dGVyLnN1Ym1pdCgpO1xyXG5cdFx0XHR9ICkuY2F0Y2goICgpID0+IHtcclxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcblx0XHRcdFx0dGhpcy5hdXRvRm9jdXMgJiYgZm9jdXNPbkludmFsaWRJbnB1dChcclxuXHRcdFx0XHRcdHBvcHVsYXRlSW5wdXRzKCB0aGlzLm9ic2VydmFibGUuZ2V0SW5wdXRzKCkgKSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9ICkuZmluYWxseSggKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY2FuVHJpZ2dlckVudGVyU3VibWl0ID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmNhblN1Ym1pdEZvcm0gICAgICAgICA9IHRydWU7XHJcblx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGlzLmNsZWFyRXJyb3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLW1lc3NhZ2VzLXdyYXAnLFxyXG5cdFx0KTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzICkge1xyXG5cdFx0XHRtZXNzYWdlLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5sb2NrU3RhdGUudG9nZ2xlKCk7XHJcblx0XHR0aGlzLnRvZ2dsZUxvYWRpbmcoKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHRoaXMuaGFuZGxlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge05vZGVMaXN0T2Y8RWxlbWVudD59XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGJ1dHRvbnMgPSB0aGlzLm9ic2VydmFibGUucm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19zdWJtaXQnLFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmxvY2tTdGF0ZS53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHRmb3IgKCBjb25zdCBidXR0b24gb2YgYnV0dG9ucyApIHtcclxuXHRcdFx0XHRidXR0b24uZGlzYWJsZWQgPSB0aGlzLmxvY2tTdGF0ZS5jdXJyZW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGZhbHNlID09PSB0aGlzLmxvY2tTdGF0ZS5jdXJyZW50ICkge1xyXG5cdFx0XHRcdHRoaXMuY2FuU3VibWl0Rm9ybSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnRvZ2dsZUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLm9ic2VydmFibGUucm9vdE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSggJ2lzLWxvYWRpbmcnICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5jcmVhdGVTdWJtaXR0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IGNsYXNzTGlzdCB9ID0gdGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlO1xyXG5cdFx0Y29uc3QgaXNBamF4ICAgICAgICA9IGNsYXNzTGlzdC5jb250YWlucyggJ3N1Ym1pdC10eXBlLWFqYXgnICk7XHJcblxyXG5cdFx0cmV0dXJuIGlzQWpheCA/IG5ldyBBamF4U3VibWl0KCB0aGlzICkgOiBuZXcgUmVsb2FkU3VibWl0KCB0aGlzICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRGb3JtSWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IHJvb3ROb2RlIH0gPSB0aGlzLm9ic2VydmFibGU7XHJcblxyXG5cdFx0cmV0dXJuICtyb290Tm9kZS5kYXRhc2V0LmZvcm1JZDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm9uRW5kU3VibWl0ID0gZnVuY3Rpb24gKCBjYWxsYWJsZSApIHtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuXHRcdHRoaXMuc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApXHJcblx0XHQ/IHRoaXMuc3VibWl0dGVyLnN0YXR1cy53YXRjaCggY2FsbGFibGUgKVxyXG5cdFx0OiB0aGlzLnN1Ym1pdHRlci5vbkZhaWxTdWJtaXQoIGNhbGxhYmxlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vYnNlcnZhYmxlLnJvb3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQnc3VibWl0JyxcclxuXHRcdCggZXZlbnQgKSA9PiB0aGlzLm9uU3VibWl0KCBldmVudCApLFxyXG5cdCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtBamF4U3VibWl0fFJlbG9hZFN1Ym1pdH1cclxuXHQgKi9cclxuXHR0aGlzLnN1Ym1pdHRlciA9IHRoaXMuY3JlYXRlU3VibWl0dGVyKCk7XHJcblxyXG5cdHRoaXMuaGFuZGxlQnV0dG9ucygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtU3VibWl0OyIsImltcG9ydCBCYXNlU3VibWl0IGZyb20gJy4vQmFzZVN1Ym1pdCc7XHJcblxyXG5mdW5jdGlvbiBSZWxvYWRTdWJtaXQoIGZvcm0gKSB7XHJcblx0QmFzZVN1Ym1pdC5jYWxsKCB0aGlzLCBmb3JtICk7XHJcblxyXG5cdHRoaXMuZmFpbFByb21pc2VzID0gW107XHJcblxyXG5cdHRoaXMuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyByb290Tm9kZSB9ICAgICA9IHRoaXMuZm9ybS5vYnNlcnZhYmxlO1xyXG5cdFx0Y29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5cdFx0UHJvbWlzZS5hbGwoXHJcblx0XHRcdGFwcGx5RmlsdGVycyhcclxuXHRcdFx0XHQnamV0LmZiLnN1Ym1pdC5yZWxvYWQucHJvbWlzZXMnLFxyXG5cdFx0XHRcdHRoaXMuZ2V0UHJvbWlzZXMoKSxcclxuXHRcdFx0XHR7IHRhcmdldDogcm9vdE5vZGUgfSxcclxuXHRcdFx0KSxcclxuXHRcdCkudGhlbihcclxuXHRcdFx0KCkgPT4gcm9vdE5vZGUuc3VibWl0KCksXHJcblx0XHQpLmNhdGNoKCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZmFpbFByb21pc2VzLmZvckVhY2goIGN1cnJlbnQgPT4gY3VycmVudCgpICk7XHJcblxyXG5cdFx0XHR0aGlzLmZvcm0udG9nZ2xlKCk7XHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5vbkZhaWxTdWJtaXQgPSBmdW5jdGlvbiAoIGNhbGxhYmxlICkge1xyXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2FsbGFibGUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuZmFpbFByb21pc2VzLnB1c2goIGNhbGxhYmxlICk7XHJcblx0fTtcclxufVxyXG5cclxuUmVsb2FkU3VibWl0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTdWJtaXQucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWxvYWRTdWJtaXQ7IiwiZnVuY3Rpb24gaXNTdWNjZXNzU3RhdHVzKCBzdGF0dXMgKSB7XHJcblx0cmV0dXJuICdzdWNjZXNzJyA9PT0gc3RhdHVzIHx8IHN0YXR1cz8uaW5jbHVkZXMoICdkc3VjY2Vzc3wnICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzU3VjY2Vzc1N0YXR1cyB9OyIsIi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNDaGFuZ2VUeXBlKCBub2RlICkge1xyXG5cdHJldHVybiBbICdzZWxlY3Qtb25lJywgJ3JhbmdlJyBdLmluY2x1ZGVzKCBub2RlLnR5cGUgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0hpZGRlbiggbm9kZSApIHtcclxuXHRyZXR1cm4gJ2hpZGRlbicgPT09IG5vZGUudHlwZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1JhbmdlKCBub2RlICkge1xyXG5cdHJldHVybiAncmFuZ2UnID09PSBub2RlLnR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcblx0aXNIaWRkZW4sXHJcblx0aXNSYW5nZSxcclxuXHRpc0NoYW5nZVR5cGUsXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgJy4vbWFpbi5wY3NzJ1xyXG5cclxuaW1wb3J0IGluaXRFbGVtZW50b3IgZnJvbSAnLi9pbml0L2luaXRFbGVtZW50b3InO1xyXG5pbXBvcnQgQmFzZVNpZ25hbCBmcm9tICcuL3NpZ25hbHMvQmFzZVNpZ25hbCc7XHJcbmltcG9ydCBSZWFjdGl2ZVZhciBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlVmFyJztcclxuaW1wb3J0IFJlYWN0aXZlSG9vayBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlSG9vayc7XHJcbmltcG9ydCBSZWFjdGl2ZVNldCBmcm9tICcuL3JlYWN0aXZlL1JlYWN0aXZlU2V0JztcclxuaW1wb3J0IExvYWRpbmdSZWFjdGl2ZVZhciBmcm9tICcuL3JlYWN0aXZlL0xvYWRpbmdSZWFjdGl2ZVZhcic7XHJcbmltcG9ydCBJbnB1dERhdGEgZnJvbSAnLi9pbnB1dHMvSW5wdXREYXRhJztcclxuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlJztcclxuaW1wb3J0IFJlcG9ydGluZ0ludGVyZmFjZSBmcm9tICcuL3JlcG9ydGluZy9SZXBvcnRpbmdJbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG5cdGFsbFJlamVjdGVkLFxyXG5cdGdldExhbmd1YWdlLFxyXG5cdHRvSFRNTCxcclxuXHRpc0VtcHR5LFxyXG5cdGdldE9mZnNldFRvcCxcclxuXHRmb2N1c09uSW52YWxpZElucHV0LFxyXG5cdGlzVmlzaWJsZSwgZ2V0U2Nyb2xsUGFyZW50LCBhcHBseVVzZXJBZ2VudHMsIGlzVUEsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgUmVzdHJpY3Rpb24gZnJvbSAnLi9yZXBvcnRpbmcvcmVzdHJpY3Rpb25zL1Jlc3RyaWN0aW9uJztcclxuaW1wb3J0IFJlc3RyaWN0aW9uRXJyb3IgZnJvbSAnLi9yZXBvcnRpbmcvUmVzdHJpY3Rpb25FcnJvcic7XHJcbmltcG9ydCB7XHJcblx0dmFsaWRhdGVJbnB1dHMsXHJcblx0dmFsaWRhdGVJbnB1dHNBbGwsXHJcblx0Z2V0VmFsaWRhdGVDYWxsYmFja3MsXHJcbn0gZnJvbSAnLi9yZXBvcnRpbmcvZnVuY3Rpb25zJztcclxuXHJcbmltcG9ydCAnLi9jYWxjLm1vZHVsZS9tYWluJztcclxuaW1wb3J0IHtcclxuXHRnZXRQYXJzZWROYW1lLFxyXG5cdHBvcHVsYXRlSW5wdXRzLFxyXG59IGZyb20gJy4vaW5wdXRzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBpbml0Rm9ybSBmcm9tICcuL2luaXQvaW5pdEZvcm0nO1xyXG5pbXBvcnQgQmFzZUh0bWxBdHRyIGZyb20gJy4vYXR0cnMvQmFzZUh0bWxBdHRyJztcclxuaW1wb3J0IHF1ZXJ5QnlBdHRyVmFsdWUgZnJvbSAnLi9odG1sLm1hY3JvL3F1ZXJ5QnlBdHRyVmFsdWUnO1xyXG5pbXBvcnQgaXRlcmF0ZUNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlQ29tbWVudHMnO1xyXG5pbXBvcnQgaXRlcmF0ZUpmYkNvbW1lbnRzIGZyb20gJy4vaHRtbC5tYWNyby9pdGVyYXRlSmZiQ29tbWVudHMnO1xyXG5pbXBvcnQgb2JzZXJ2ZUNvbW1lbnQgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVDb21tZW50JztcclxuaW1wb3J0IG9ic2VydmVNYWNyb0F0dHIgZnJvbSAnLi9odG1sLm1hY3JvL29ic2VydmVNYWNyb0F0dHInO1xyXG5pbXBvcnQgUmVxdWlyZWRSZXN0cmljdGlvbiBmcm9tICcuL3JlcG9ydGluZy9yZXN0cmljdGlvbnMvUmVxdWlyZWRSZXN0cmljdGlvbic7XHJcblxyXG53aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA9IHtcclxuXHQuLi4oXHJcblx0XHR3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdCA/PyB7fVxyXG5cdCksXHJcblx0SW5wdXREYXRhLFxyXG5cdEJhc2VTaWduYWwsXHJcblx0UmVhY3RpdmVWYXIsXHJcblx0UmVhY3RpdmVIb29rLFxyXG5cdExvYWRpbmdSZWFjdGl2ZVZhcixcclxuXHRPYnNlcnZhYmxlLFxyXG5cdFJlcG9ydGluZ0ludGVyZmFjZSxcclxuXHRSZXN0cmljdGlvbixcclxuXHRSZXN0cmljdGlvbkVycm9yLFxyXG5cdEJhc2VIdG1sQXR0cixcclxuXHRSZWFjdGl2ZVNldCxcclxuXHRSZXF1aXJlZFJlc3RyaWN0aW9uLFxyXG59O1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA/PyB7fVxyXG5cdCksXHJcblx0YWxsUmVqZWN0ZWQsXHJcblx0Z2V0TGFuZ3VhZ2UsXHJcblx0dG9IVE1MLFxyXG5cdHZhbGlkYXRlSW5wdXRzLFxyXG5cdHZhbGlkYXRlSW5wdXRzQWxsLFxyXG5cdGdldFBhcnNlZE5hbWUsXHJcblx0aXNFbXB0eSxcclxuXHRnZXRWYWxpZGF0ZUNhbGxiYWNrcyxcclxuXHRnZXRPZmZzZXRUb3AsXHJcblx0Zm9jdXNPbkludmFsaWRJbnB1dCxcclxuXHRwb3B1bGF0ZUlucHV0cyxcclxuXHRpc1Zpc2libGUsXHJcblx0cXVlcnlCeUF0dHJWYWx1ZSxcclxuXHRpdGVyYXRlQ29tbWVudHMsXHJcblx0b2JzZXJ2ZU1hY3JvQXR0cixcclxuXHRvYnNlcnZlQ29tbWVudCxcclxuXHRpdGVyYXRlSmZiQ29tbWVudHMsXHJcblx0Z2V0U2Nyb2xsUGFyZW50LFxyXG5cdGlzVUEsXHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGFwcGx5VXNlckFnZW50cyApO1xyXG5cclxualF1ZXJ5KCAoKSA9PiBKZXRQbHVnaW5zLmluaXQoKSApO1xyXG5cclxuSmV0UGx1Z2lucy5idWxrQmxvY2tzSW5pdCggW1xyXG5cdHtcclxuXHRcdGJsb2NrOiAnamV0LWZvcm1zLmZvcm0tYmxvY2snLFxyXG5cdFx0Y2FsbGJhY2s6IGluaXRGb3JtLFxyXG5cdFx0Y29uZGl0aW9uOiAoKSA9PiAnbG9hZGluZycgIT09IGRvY3VtZW50LnJlYWR5U3RhdGUsXHJcblx0fSxcclxuXSApO1xyXG5cclxualF1ZXJ5KCB3aW5kb3cgKS5vbiggJ2VsZW1lbnRvci9mcm9udGVuZC9pbml0JywgaW5pdEVsZW1lbnRvciApO1xyXG5cclxuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoKSA9PiB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGVbXX1cclxuXHQgKi9cclxuXHRjb25zdCBmb3JtcyA9IE9iamVjdC52YWx1ZXMoIHdpbmRvdy5KZXRGb3JtQnVpbGRlciApO1xyXG5cclxuXHRmb3IgKCBjb25zdCByb290IG9mIGZvcm1zICkge1xyXG5cdFx0aWYgKCAhKCByb290IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHJvb3QucmVRdWVyeVZhbHVlcygpO1xyXG5cdH1cclxufSApO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9