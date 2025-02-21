/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/GenerateFormModal.js":
/*!*****************************************!*\
  !*** ./components/GenerateFormModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GenerateFormModal_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerateFormModal.pcss */ "./components/GenerateFormModal.pcss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);






const {
  parseHTMLtoBlocks,
  getFormInnerFields
} = JetFormBuilderParser;
const promptsExamples = ['Registration form with minimum inputs', 'Opt-in form with gender selector like radio', 'Quiz form with 5 questions with choices about math'];
function GenerateFormModal({
  setShowModal,
  footer: Footer = () => 'Here may be buttons'
}) {
  const [prompt, setPrompt] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [formHTML, setFormHTML] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [usage, setUsage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [limit, setLimit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const generateForm = () => {
    setIsLoading(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: '/jet-form-builder/v1/ai/generate',
      method: 'POST',
      data: {
        prompt
      }
    }).then(response => {
      setError('');
      setFormHTML(getFormInnerFields(response.form));
      console.group((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('JFB: Parsed blocks from generated HTML', 'jet-form-builder'));
      console.log(parseHTMLtoBlocks(response.form));
      console.groupEnd();
      setUsage(response.usage);
      setLimit(response.limit);
    }).catch(response => {
      var _response$message;
      setError((_response$message = response?.message) !== null && _response$message !== void 0 ? _response$message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Undefined error.', 'jet-form-builder'));
    }).finally(() => {
      setIsLoading(false);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    style: {
      width: '60vw'
    },
    onRequestClose: () => setShowModal(false),
    title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Generate Form with AI', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "badge"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Beta. Limited 10 requests per month', 'jet-form-builder'))),
    className: "jfb-ai-modal"
  }, error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "error",
    onRemove: () => setError('')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    direction: "column"
  }, error, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: "https://support.crocoblock.com/support/home/"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Contact Crocoblock support', 'jet-form-builder')))), Boolean(formHTML.length) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: formHTML
    },
    style: {
      padding: '2em 1em',
      backgroundColor: '#f6f7f7',
      marginBottom: '1em'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Footer, {
    clearHTML: () => setFormHTML(''),
    formHTML: formHTML,
    prompt: prompt
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      flex: '1',
      textAlign: 'end',
      color: 'rgb( 117, 117, 117 )'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Requests used: %d/%d', 'jet-form-builder'), usage, limit)))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Describe the form you want', 'jet-form-builder'),
    value: prompt,
    onChange: setPrompt,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Prompt example: Simple contact form', 'jet-form-builder')
  }), Boolean(prompt.length) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    isBusy: isLoading,
    disabled: isLoading,
    onClick: generateForm
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Generate', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Tips to write good prompt:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: {
      listStyle: 'disc',
      paddingInlineStart: '1em'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Start with the main purpose of the form.', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(`If you need specific fields – describe them in the prompt as well.`, 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(`It is better to use the English language for the prompt, as AI understands it better than others.`, 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Examples of the good prompts:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: {
      listStyle: 'disc',
      paddingInlineStart: '1em'
    }
  }, promptsExamples.map(textPrompt => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: textPrompt
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setPrompt(textPrompt),
    variant: "link"
  }, textPrompt))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateFormModal);

/***/ }),

/***/ "./editor/AiEditorFooterFill.js":
/*!**************************************!*\
  !*** ./editor/AiEditorFooterFill.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__);




const {
  parseHTMLtoBlocks
} = JetFormBuilderParser;
const {
  usePattern
} = JetFBHooks;
function AiEditorFooterFill({
  clearHTML,
  formHTML,
  children = null
}) {
  const {
    showPopover,
    setShowPopover,
    ref,
    popoverProps
  } = (0,jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.useTriggerPopover)();
  const {
    insert,
    append,
    blocks // another blocks
  } = usePattern({
    name: 'ai'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    ref: ref,
    variant: "primary",
    onClick: () => blocks.length ? setShowPopover(prev => !prev) : insert({
      blocks: parseHTMLtoBlocks(formHTML)
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use this form', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: clearHTML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change generation prompt', 'jet-form-builder')), showPopover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_3__.PopoverStandard, {
    position: 'top-start',
    noArrow: false,
    ...popoverProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('I want to', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isLink: true,
    isDestructive: true,
    onClick: () => insert({
      blocks: parseHTMLtoBlocks(formHTML)
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('replace', 'jet-form-builder')), ' / ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isLink: true,
    onClick: () => append({
      blocks: parseHTMLtoBlocks(formHTML)
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('append', 'jet-form-builder')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('form settings and blocks', 'jet-form-builder'))), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AiEditorFooterFill);

/***/ }),

/***/ "./editor/AiFormHeaderButton.js":
/*!**************************************!*\
  !*** ./editor/AiFormHeaderButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GenerateFormModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GenerateFormModal */ "./components/GenerateFormModal.js");
/* harmony import */ var _AiEditorFooterFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AiEditorFooterFill */ "./editor/AiEditorFooterFill.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






function AiFormHeaderButton() {
  const [showModal, setShowModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "tertiary",
    iconSize: "16",
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 22 22",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M7.5 3.6L10 5L8.6 2.5L10 0L7.5 1.4L5 0L6.4 2.5L5 5L7.5 3.6ZM19.5 13.4L17 12L18.4 14.5L17 17L19.5 15.6L22 17L20.6 14.5L22 12L19.5 13.4ZM22 0L19.5 1.4L17 0L18.4 2.5L17 5L19.5 3.6L22 5L20.6 2.5L22 0ZM14.37 5.29C13.98 4.9 13.35 4.9 12.96 5.29L1.29 16.96C0.899998 17.35 0.899998 17.98 1.29 18.37L3.63 20.71C4.02 21.1 4.65 21.1 5.04 20.71L16.7 9.05C17.09 8.66 17.09 8.03 16.7 7.64L14.37 5.29ZM13.34 10.78L11.22 8.66L13.66 6.22L15.78 8.34L13.34 10.78Z",
      fill: "currentColor"
    })),
    onClick: () => setShowModal(prev => !prev)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Generate Form with AI', 'jet-form-builder')), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GenerateFormModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setShowModal: setShowModal,
    footer: _AiEditorFooterFill__WEBPACK_IMPORTED_MODULE_2__["default"]
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AiFormHeaderButton);

/***/ }),

/***/ "./editor/AiFormPatternButton.js":
/*!***************************************!*\
  !*** ./editor/AiFormPatternButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GenerateFormModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GenerateFormModal */ "./components/GenerateFormModal.js");
/* harmony import */ var _AiEditorFooterFill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AiEditorFooterFill */ "./editor/AiEditorFooterFill.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






const {
  PatternInserterButton
} = JetFBComponents;
function AiFormPatternButton({
  pattern
}) {
  const [showModal, setShowModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {
    className: "block-editor-block-variation-picker__or"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('or', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PatternInserterButton, {
    patternName: 'ai',
    variant: "secondary",
    withPatternIcon: true,
    iconSize: 32,
    className: "block-editor-block-variation-picker__variation",
    onClick: () => setShowModal(true)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-editor-block-variation-picker__variation-label"
  }, pattern.title)), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_GenerateFormModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setShowModal: setShowModal,
    footer: _AiEditorFooterFill__WEBPACK_IMPORTED_MODULE_2__["default"]
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AiFormPatternButton);

/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./components/GenerateFormModal.pcss":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./components/GenerateFormModal.pcss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.jfb-ai-modal .badge{background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,#fff);font-size:0.65em;padding:0.2em 0.5em;border-radius:1em}.jfb-ai-modal .components-notice{margin:0 0 2em 0}`, "",{"version":3,"sources":["webpack://./components/GenerateFormModal.pcss"],"names":[],"mappings":"AACC,qBACC,gFAAmF,CACnF,qDAAuD,CACvD,gBAAiB,CACjB,mBAAoB,CACpB,iBACD,CAEA,iCACC,gBACD","sourcesContent":[".jfb-ai-modal {\n\t.badge {\n\t\tbackground: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));\n\t\tcolor: var(--wp-components-color-accent-inverted, #fff);\n\t\tfont-size: 0.65em;\n\t\tpadding: 0.2em 0.5em;\n\t\tborder-radius: 1em;\n\t}\n\n\t.components-notice {\n\t\tmargin: 0 0 2em 0;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!**********************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \**********************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./components/GenerateFormModal.pcss":
/*!*******************************************!*\
  !*** ./components/GenerateFormModal.pcss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GenerateFormModal_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!./GenerateFormModal.pcss */ "../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!./components/GenerateFormModal.pcss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GenerateFormModal_pcss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GenerateFormModal_pcss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GenerateFormModal_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GenerateFormModal_pcss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!********************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!********************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*******************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "jet-form-builder-components":
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["jfb"]["components"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AiFormHeaderButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AiFormHeaderButton */ "./editor/AiFormHeaderButton.js");
/* harmony import */ var _AiFormPatternButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AiFormPatternButton */ "./editor/AiFormPatternButton.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5__);






const buttonDiv = document.createElement('div');
buttonDiv.classList.add('jfb-generate-form-ai-wrapper');

// Render our button.
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRoot)(buttonDiv).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AiFormHeaderButton__WEBPACK_IMPORTED_MODULE_1__["default"], null));
const appendButton = function (unsubscribeCallback, result) {
  const header = document.querySelector('.edit-post-header-toolbar');
  if (!header) {
    return;
  }

  // unsubscribeCallback();
  header.appendChild(buttonDiv);
  if (!result.isAddedTimeout) {
    result.isAddedTimeout = true;
    setTimeout(unsubscribeCallback, 500);
  }
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5___default()(() => {
  const result = {
    isAddedTimeout: false
  };
  setTimeout(() => {
    const unsubscribe = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.subscribe)(() => appendButton(unsubscribe, result));
  });
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('jet-forms/patterns').register({
  name: 'ai',
  title: 'Generate via AI',
  view: _AiFormPatternButton__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M40 16L36 13.76L32 16L34.24 12L32 8L36 10.24L40 8L37.76 12L40 16Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21 18L17 15.76L13 18L15.24 14L13 10L17 12.24L21 10L18.76 14L21 18Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M34.32 30L36 27L33 28.68L30 27L31.68 30L30 33L33 31.32L36 33L34.32 30Z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.59073 33.7046C7.80309 34.4923 7.80309 35.7693 8.59073 36.5569L11.4431 39.4093C12.2307 40.1969 13.5077 40.1969 14.2954 39.4093L31.4093 22.2954C32.1969 21.5077 32.1969 20.2307 31.4093 19.4431L28.5569 16.5907C27.7693 15.8031 26.4923 15.8031 25.7046 16.5907L8.59073 33.7046ZM22.8548 22.269L10.0049 35.1188L10.002 35.1221L10.0013 35.123C10.0011 35.1236 10 35.1266 10 35.1308C10 35.1332 10.0003 35.135 10.0005 35.1363L10.0011 35.1382C10.0012 35.1383 10.0023 35.1401 10.0049 35.1427L12.8573 37.9951C12.8581 37.9959 12.8588 37.9966 12.8594 37.9971C12.8599 37.9975 12.8603 37.9978 12.8606 37.9981L12.8614 37.9987C12.862 37.9989 12.865 38 12.8692 38C12.8716 38 12.8735 37.9997 12.8748 37.9994C12.8757 37.9992 12.8763 37.999 12.8766 37.9989C12.8767 37.9988 12.8785 37.9977 12.8812 37.9951L25.731 25.1452L22.8548 22.269ZM24.269 20.8548L27.1452 23.731L29.9951 20.8812L29.9978 20.8781L29.9987 20.877L29.9995 20.8743C29.9998 20.8731 30 20.8713 30 20.8692C30 20.8674 29.9998 20.8659 29.9996 20.8647C29.9994 20.8631 29.999 20.8622 29.9989 20.8618C29.9988 20.8617 29.9977 20.8599 29.9951 20.8573L27.1427 18.0049C27.1401 18.0023 27.1387 18.0014 27.1386 18.0013C27.1384 18.0012 27.1375 18.0009 27.1369 18.0007C27.1356 18.0004 27.1336 18 27.1308 18C27.1266 18 27.124 18.0009 27.1234 18.0011C27.1233 18.0012 27.1215 18.0023 27.1188 18.0049L24.269 20.8548Z"
  }))
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBT0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFZQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWFpLy4vY29tcG9uZW50cy9HZW5lcmF0ZUZvcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly9qZmItYWkvLi9lZGl0b3IvQWlFZGl0b3JGb290ZXJGaWxsLmpzIiwid2VicGFjazovL2pmYi1haS8uL2VkaXRvci9BaUZvcm1IZWFkZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWFpLy4vZWRpdG9yL0FpRm9ybVBhdHRlcm5CdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWFpLy4vY29tcG9uZW50cy9HZW5lcmF0ZUZvcm1Nb2RhbC5wY3NzIiwid2VicGFjazovL2pmYi1haS8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pmYi1haS8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qZmItYWkvLi9jb21wb25lbnRzL0dlbmVyYXRlRm9ybU1vZGFsLnBjc3M/OGE0NSIsIndlYnBhY2s6Ly9qZmItYWkvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pmYi1haS8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pmYi1haS8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamZiLWFpLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qZmItYWkvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamZiLWFpLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pmYi1haS9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1haS9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1haS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImFwaUZldGNoXCJdIiwid2VicGFjazovL2pmYi1haS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLWFpL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItYWkvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkb21SZWFkeVwiXSIsIndlYnBhY2s6Ly9qZmItYWkvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1haS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1haS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItYWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1haS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1haS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1haS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamZiLWFpLy4vZWRpdG9yL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL0dlbmVyYXRlRm9ybU1vZGFsLnBjc3MnO1xuaW1wb3J0IHtcblx0VGV4dGFyZWFDb250cm9sLFxuXHRCdXR0b24sXG5cdEZsZXgsXG5cdEV4dGVybmFsTGluayxcblx0Tm90aWNlLFxuXHRNb2RhbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCBhcGlGZXRjaCBmcm9tICdAd29yZHByZXNzL2FwaS1mZXRjaCc7XG5cbmNvbnN0IHtcblx0ICAgICAgcGFyc2VIVE1MdG9CbG9ja3MsXG5cdCAgICAgIGdldEZvcm1Jbm5lckZpZWxkcyxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlclBhcnNlcjtcblxuY29uc3QgcHJvbXB0c0V4YW1wbGVzID0gW1xuXHQnUmVnaXN0cmF0aW9uIGZvcm0gd2l0aCBtaW5pbXVtIGlucHV0cycsXG5cdCdPcHQtaW4gZm9ybSB3aXRoIGdlbmRlciBzZWxlY3RvciBsaWtlIHJhZGlvJyxcblx0J1F1aXogZm9ybSB3aXRoIDUgcXVlc3Rpb25zIHdpdGggY2hvaWNlcyBhYm91dCBtYXRoJyxcbl07XG5cbmZ1bmN0aW9uIEdlbmVyYXRlRm9ybU1vZGFsKCB7XG5cdHNldFNob3dNb2RhbCxcblx0Zm9vdGVyOiBGb290ZXIgPSAoKSA9PiAnSGVyZSBtYXkgYmUgYnV0dG9ucycsXG59ICkge1xuXHRjb25zdCBbIHByb21wdCwgc2V0UHJvbXB0IF0gICAgICAgPSB1c2VTdGF0ZSggJycgKTtcblx0Y29uc3QgWyBmb3JtSFRNTCwgc2V0Rm9ybUhUTUwgXSAgID0gdXNlU3RhdGUoICcnICk7XG5cdGNvbnN0IFsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXHRjb25zdCBbIGVycm9yLCBzZXRFcnJvciBdICAgICAgICAgPSB1c2VTdGF0ZSggJycgKTtcblx0Y29uc3QgWyB1c2FnZSwgc2V0VXNhZ2UgXSAgICAgICAgID0gdXNlU3RhdGUoIDAgKTtcblx0Y29uc3QgWyBsaW1pdCwgc2V0TGltaXQgXSAgICAgICAgID0gdXNlU3RhdGUoIDAgKTtcblxuXHRjb25zdCBnZW5lcmF0ZUZvcm0gPSAoKSA9PiB7XG5cdFx0c2V0SXNMb2FkaW5nKCB0cnVlICk7XG5cdFx0YXBpRmV0Y2goIHtcblx0XHRcdHBhdGg6ICcvamV0LWZvcm0tYnVpbGRlci92MS9haS9nZW5lcmF0ZScsXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHsgcHJvbXB0IH0sXG5cdFx0fSApLnRoZW4oIHJlc3BvbnNlID0+IHtcblxuXHRcdFx0c2V0RXJyb3IoICcnICk7XG5cdFx0XHRzZXRGb3JtSFRNTCggZ2V0Rm9ybUlubmVyRmllbGRzKCByZXNwb25zZS5mb3JtICkgKTtcblx0XHRcdGNvbnNvbGUuZ3JvdXAoIF9fKFxuXHRcdFx0XHQnSkZCOiBQYXJzZWQgYmxvY2tzIGZyb20gZ2VuZXJhdGVkIEhUTUwnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpICk7XG5cdFx0XHRjb25zb2xlLmxvZyggcGFyc2VIVE1MdG9CbG9ja3MoIHJlc3BvbnNlLmZvcm0gKSApO1xuXHRcdFx0Y29uc29sZS5ncm91cEVuZCgpO1xuXG5cdFx0XHRzZXRVc2FnZSggcmVzcG9uc2UudXNhZ2UgKTtcblx0XHRcdHNldExpbWl0KCByZXNwb25zZS5saW1pdCApO1xuXG5cdFx0fSApLmNhdGNoKCByZXNwb25zZSA9PiB7XG5cdFx0XHRzZXRFcnJvciggcmVzcG9uc2U/Lm1lc3NhZ2UgPz9cblx0XHRcdFx0X18oICdVbmRlZmluZWQgZXJyb3IuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHQpO1xuXHRcdH0gKS5maW5hbGx5KCAoKSA9PiB7XG5cdFx0XHRzZXRJc0xvYWRpbmcoIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdHJldHVybiA8TW9kYWxcblx0XHRzdHlsZT17IHtcblx0XHRcdHdpZHRoOiAnNjB2dycsXG5cdFx0fSB9XG5cdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxuXHRcdHRpdGxlPXsgPEZsZXg+XG5cdFx0XHR7IF9fKCAnR2VuZXJhdGUgRm9ybSB3aXRoIEFJJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj5cblx0XHRcdFx0eyBfXyhcblx0XHRcdFx0XHQnQmV0YS4gTGltaXRlZCAxMCByZXF1ZXN0cyBwZXIgbW9udGgnLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KSB9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9GbGV4PiB9XG5cdFx0Y2xhc3NOYW1lPVwiamZiLWFpLW1vZGFsXCJcblx0PlxuXHRcdHsgZXJyb3IgJiYgPE5vdGljZVxuXHRcdFx0c3RhdHVzPVwiZXJyb3JcIlxuXHRcdFx0b25SZW1vdmU9eyAoKSA9PiBzZXRFcnJvciggJycgKSB9XG5cdFx0PlxuXHRcdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XG5cdFx0XHRcdHsgZXJyb3IgfVxuXHRcdFx0XHQ8RXh0ZXJuYWxMaW5rXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vc3VwcG9ydC5jcm9jb2Jsb2NrLmNvbS9zdXBwb3J0L2hvbWUvXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdDb250YWN0IENyb2NvYmxvY2sgc3VwcG9ydCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0PC9FeHRlcm5hbExpbms+XG5cdFx0XHQ8L0ZsZXg+XG5cdFx0PC9Ob3RpY2U+IH1cblx0XHR7IEJvb2xlYW4oIGZvcm1IVE1MLmxlbmd0aCApID8gPD5cblx0XHRcdDxkaXZcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogZm9ybUhUTUwgfSB9XG5cdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdHBhZGRpbmc6ICcyZW0gMWVtJyxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZjZmN2Y3Jyxcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0XHQ8Rm9vdGVyXG5cdFx0XHRcdGNsZWFySFRNTD17ICgpID0+IHNldEZvcm1IVE1MKCAnJyApIH1cblx0XHRcdFx0Zm9ybUhUTUw9eyBmb3JtSFRNTCB9XG5cdFx0XHRcdHByb21wdD17IHByb21wdCB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdFx0XHRmbGV4OiAnMScsXG5cdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdlbmQnLFxuXHRcdFx0XHRcdFx0Y29sb3I6ICdyZ2IoIDExNywgMTE3LCAxMTcgKScsXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IHNwcmludGYoXG5cdFx0XHRcdFx0XHRfXyggJ1JlcXVlc3RzIHVzZWQ6ICVkLyVkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdFx0XHR1c2FnZSxcblx0XHRcdFx0XHRcdGxpbWl0LFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L0Zvb3Rlcj5cblx0XHQ8Lz4gOiA8PlxuXHRcdFx0ICA8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdCAgbGFiZWw9eyBfXyggJ0Rlc2NyaWJlIHRoZSBmb3JtIHlvdSB3YW50Jyxcblx0XHRcdFx0XHQgICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0ICB2YWx1ZT17IHByb21wdCB9XG5cdFx0XHRcdCAgb25DaGFuZ2U9eyBzZXRQcm9tcHQgfVxuXHRcdFx0XHQgIGhlbHA9eyBfXyhcblx0XHRcdFx0XHQgICdQcm9tcHQgZXhhbXBsZTogU2ltcGxlIGNvbnRhY3QgZm9ybScsXG5cdFx0XHRcdFx0ICAnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCAgKSB9XG5cdFx0XHQgIC8+XG5cdFx0XHQgIHsgQm9vbGVhbiggcHJvbXB0Lmxlbmd0aCApICYmIDxCdXR0b25cblx0XHRcdFx0ICB2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdCAgaXNCdXN5PXsgaXNMb2FkaW5nIH1cblx0XHRcdFx0ICBkaXNhYmxlZD17IGlzTG9hZGluZyB9XG5cdFx0XHRcdCAgb25DbGljaz17IGdlbmVyYXRlRm9ybSB9XG5cdFx0XHQgID5cblx0XHRcdFx0ICB7IF9fKCAnR2VuZXJhdGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQgIDwvQnV0dG9uPiB9XG5cdFx0XHQgIDxoND5cblx0XHRcdFx0ICB7IF9fKCAnVGlwcyB0byB3cml0ZSBnb29kIHByb21wdDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQgIDwvaDQ+XG5cdFx0XHQgIDx1bCBzdHlsZT17IHtcblx0XHRcdFx0ICBsaXN0U3R5bGU6ICdkaXNjJyxcblx0XHRcdFx0ICBwYWRkaW5nSW5saW5lU3RhcnQ6ICcxZW0nLFxuXHRcdFx0ICB9IH0+XG5cdFx0XHRcdCAgPGxpPnsgX18oXG5cdFx0XHRcdFx0ICAnU3RhcnQgd2l0aCB0aGUgbWFpbiBwdXJwb3NlIG9mIHRoZSBmb3JtLicsXG5cdFx0XHRcdFx0ICAnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCAgKSB9PC9saT5cblx0XHRcdFx0ICA8bGk+eyBfXyhcblx0XHRcdFx0XHQgIGBJZiB5b3UgbmVlZCBzcGVjaWZpYyBmaWVsZHMg4oCTIGRlc2NyaWJlIHRoZW0gaW4gdGhlIHByb21wdCBhcyB3ZWxsLmAsXG5cdFx0XHRcdFx0ICAnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCAgKSB9PC9saT5cblx0XHRcdFx0ICA8bGk+eyBfXyhcblx0XHRcdFx0XHQgIGBJdCBpcyBiZXR0ZXIgdG8gdXNlIHRoZSBFbmdsaXNoIGxhbmd1YWdlIGZvciB0aGUgcHJvbXB0LCBhcyBBSSB1bmRlcnN0YW5kcyBpdCBiZXR0ZXIgdGhhbiBvdGhlcnMuYCxcblx0XHRcdFx0XHQgICdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0ICApIH08L2xpPlxuXHRcdFx0ICA8L3VsPlxuXHRcdFx0ICA8aDQ+XG5cdFx0XHRcdCAgeyBfXyggJ0V4YW1wbGVzIG9mIHRoZSBnb29kIHByb21wdHM6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0ICA8L2g0PlxuXHRcdFx0ICA8dWwgc3R5bGU9eyB7XG5cdFx0XHRcdCAgbGlzdFN0eWxlOiAnZGlzYycsXG5cdFx0XHRcdCAgcGFkZGluZ0lubGluZVN0YXJ0OiAnMWVtJyxcblx0XHRcdCAgfSB9PlxuXHRcdFx0XHQgIHsgcHJvbXB0c0V4YW1wbGVzLm1hcCggdGV4dFByb21wdCA9PiA8bGkga2V5PXsgdGV4dFByb21wdCB9PlxuXHRcdFx0XHRcdCAgPEJ1dHRvblxuXHRcdFx0XHRcdFx0ICBvbkNsaWNrPXsgKCkgPT4gc2V0UHJvbXB0KCB0ZXh0UHJvbXB0ICkgfVxuXHRcdFx0XHRcdFx0ICB2YXJpYW50PVwibGlua1wiXG5cdFx0XHRcdFx0ICA+eyB0ZXh0UHJvbXB0IH08L0J1dHRvbj5cblx0XHRcdFx0ICA8L2xpPiApIH1cblx0XHRcdCAgPC91bD5cblx0XHQgIDwvPiB9XG5cdDwvTW9kYWw+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZUZvcm1Nb2RhbDtcbiIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IEJ1dHRvbiwgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQge1xuXHRQb3BvdmVyU3RhbmRhcmQsXG5cdHVzZVRyaWdnZXJQb3BvdmVyLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuXG5jb25zdCB7XG5cdCAgICAgIHBhcnNlSFRNTHRvQmxvY2tzLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyUGFyc2VyO1xuXG5jb25zdCB7IHVzZVBhdHRlcm4gfSA9IEpldEZCSG9va3M7XG5cbmZ1bmN0aW9uIEFpRWRpdG9yRm9vdGVyRmlsbCggeyBjbGVhckhUTUwsIGZvcm1IVE1MLCBjaGlsZHJlbiA9IG51bGwgfSApIHtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgc2hvd1BvcG92ZXIsXG5cdFx0ICAgICAgc2V0U2hvd1BvcG92ZXIsXG5cdFx0ICAgICAgcmVmLFxuXHRcdCAgICAgIHBvcG92ZXJQcm9wcyxcblx0ICAgICAgfSA9IHVzZVRyaWdnZXJQb3BvdmVyKCk7XG5cblx0Y29uc3Qge1xuXHRcdCAgICAgIGluc2VydCxcblx0XHQgICAgICBhcHBlbmQsXG5cdFx0ICAgICAgYmxvY2tzLCAvLyBhbm90aGVyIGJsb2Nrc1xuXHQgICAgICB9ID0gdXNlUGF0dGVybiggeyBuYW1lOiAnYWknIH0gKTtcblxuXHRyZXR1cm4gPEZsZXgganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cblx0XHQ8QnV0dG9uXG5cdFx0XHRyZWY9eyByZWYgfVxuXHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxuXHRcdFx0b25DbGljaz17ICgpID0+IChcblx0XHRcdFx0YmxvY2tzLmxlbmd0aFxuXHRcdFx0XHQ/IHNldFNob3dQb3BvdmVyKCBwcmV2ID0+ICFwcmV2IClcblx0XHRcdFx0OiBpbnNlcnQoIHtcblx0XHRcdFx0XHRibG9ja3M6IHBhcnNlSFRNTHRvQmxvY2tzKCBmb3JtSFRNTCApLFxuXHRcdFx0XHR9IClcblx0XHRcdCkgfVxuXHRcdD5cblx0XHRcdHsgX18oICdVc2UgdGhpcyBmb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvQnV0dG9uPlxuXHRcdDxCdXR0b25cblx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0b25DbGljaz17IGNsZWFySFRNTCB9XG5cdFx0PlxuXHRcdFx0eyBfXyggJ0NoYW5nZSBnZW5lcmF0aW9uIHByb21wdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L0J1dHRvbj5cblx0XHR7IHNob3dQb3BvdmVyICYmIDxQb3BvdmVyU3RhbmRhcmRcblx0XHRcdHBvc2l0aW9uPXsgJ3RvcC1zdGFydCcgfVxuXHRcdFx0bm9BcnJvdz17IGZhbHNlIH1cblx0XHRcdHsgLi4ucG9wb3ZlclByb3BzIH1cblx0XHQ+XG5cdFx0XHQ8c3Bhbj57IF9fKCAnSSB3YW50IHRvJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTwvc3Bhbj5cblx0XHRcdCZuYnNwO1xuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gaW5zZXJ0KCB7XG5cdFx0XHRcdFx0YmxvY2tzOiBwYXJzZUhUTUx0b0Jsb2NrcyggZm9ybUhUTUwgKSxcblx0XHRcdFx0fSApIH1cblx0XHRcdD5cblx0XHRcdFx0eyBfXyggJ3JlcGxhY2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHRcdHsgJyAvICcgfVxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc0xpbmtcblx0XHRcdFx0b25DbGljaz17ICgpID0+IGFwcGVuZCgge1xuXHRcdFx0XHRcdGJsb2NrczogcGFyc2VIVE1MdG9CbG9ja3MoIGZvcm1IVE1MICksXG5cdFx0XHRcdH0gKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgX18oICdhcHBlbmQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHRcdCZuYnNwO1xuXHRcdFx0PHNwYW4+eyBfXyhcblx0XHRcdFx0J2Zvcm0gc2V0dGluZ3MgYW5kIGJsb2NrcycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfTwvc3Bhbj5cblx0XHQ8L1BvcG92ZXJTdGFuZGFyZD4gfVxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0ZsZXg+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBaUVkaXRvckZvb3RlckZpbGw7IiwiaW1wb3J0IEdlbmVyYXRlRm9ybU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhdGVGb3JtTW9kYWwnO1xuaW1wb3J0IEFpRWRpdG9yRm9vdGVyRmlsbCBmcm9tICcuL0FpRWRpdG9yRm9vdGVyRmlsbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5mdW5jdGlvbiBBaUZvcm1IZWFkZXJCdXR0b24oKSB7XG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxCdXR0b25cblx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRpY29uU2l6ZT1cIjE2XCJcblx0XHRcdGljb249eyA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiBmaWxsPVwibm9uZVwiXG5cdFx0XHQgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0ZD1cIk03LjUgMy42TDEwIDVMOC42IDIuNUwxMCAwTDcuNSAxLjRMNSAwTDYuNCAyLjVMNSA1TDcuNSAzLjZaTTE5LjUgMTMuNEwxNyAxMkwxOC40IDE0LjVMMTcgMTdMMTkuNSAxNS42TDIyIDE3TDIwLjYgMTQuNUwyMiAxMkwxOS41IDEzLjRaTTIyIDBMMTkuNSAxLjRMMTcgMEwxOC40IDIuNUwxNyA1TDE5LjUgMy42TDIyIDVMMjAuNiAyLjVMMjIgMFpNMTQuMzcgNS4yOUMxMy45OCA0LjkgMTMuMzUgNC45IDEyLjk2IDUuMjlMMS4yOSAxNi45NkMwLjg5OTk5OCAxNy4zNSAwLjg5OTk5OCAxNy45OCAxLjI5IDE4LjM3TDMuNjMgMjAuNzFDNC4wMiAyMS4xIDQuNjUgMjEuMSA1LjA0IDIwLjcxTDE2LjcgOS4wNUMxNy4wOSA4LjY2IDE3LjA5IDguMDMgMTYuNyA3LjY0TDE0LjM3IDUuMjlaTTEzLjM0IDEwLjc4TDExLjIyIDguNjZMMTMuNjYgNi4yMkwxNS43OCA4LjM0TDEzLjM0IDEwLjc4WlwiXG5cdFx0XHRcdFx0ZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cblx0XHRcdDwvc3ZnPiB9XG5cdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0U2hvd01vZGFsKCBwcmV2ID0+ICFwcmV2ICkgfVxuXHRcdD5cblx0XHRcdHsgX18oICdHZW5lcmF0ZSBGb3JtIHdpdGggQUknLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0PC9CdXR0b24+XG5cdFx0eyBzaG93TW9kYWwgJiYgPD5cblx0XHRcdDxHZW5lcmF0ZUZvcm1Nb2RhbFxuXHRcdFx0XHRzZXRTaG93TW9kYWw9eyBzZXRTaG93TW9kYWwgfVxuXHRcdFx0XHRmb290ZXI9eyBBaUVkaXRvckZvb3RlckZpbGwgfVxuXHRcdFx0Lz5cblx0XHQ8Lz4gfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFpRm9ybUhlYWRlckJ1dHRvbjsiLCJpbXBvcnQgR2VuZXJhdGVGb3JtTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9HZW5lcmF0ZUZvcm1Nb2RhbCc7XG5pbXBvcnQgQWlFZGl0b3JGb290ZXJGaWxsIGZyb20gJy4vQWlFZGl0b3JGb290ZXJGaWxsJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IEZsZXhJdGVtLCBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICBQYXR0ZXJuSW5zZXJ0ZXJCdXR0b24sXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5mdW5jdGlvbiBBaUZvcm1QYXR0ZXJuQnV0dG9uKCB7IHBhdHRlcm4gfSApIHtcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PEZsZXhJdGVtXG5cdFx0XHRjbGFzc05hbWU9XCJibG9jay1lZGl0b3ItYmxvY2stdmFyaWF0aW9uLXBpY2tlcl9fb3JcIlxuXHRcdD5cblx0XHRcdHsgX18oICdvcicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHQ8L0ZsZXhJdGVtPlxuXHRcdDxsaT5cblx0XHRcdDxQYXR0ZXJuSW5zZXJ0ZXJCdXR0b25cblx0XHRcdFx0cGF0dGVybk5hbWU9eyAnYWknIH1cblx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdHdpdGhQYXR0ZXJuSWNvblxuXHRcdFx0XHRpY29uU2l6ZT17IDMyIH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvblwiXG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TW9kYWwoIHRydWUgKSB9XG5cdFx0XHQvPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3ZhcmlhdGlvbi1sYWJlbFwiXG5cdFx0XHQ+XG5cdFx0XHR7IHBhdHRlcm4udGl0bGUgfVxuXHRcdDwvc3Bhbj5cblx0XHQ8L2xpPlxuXHRcdHsgc2hvd01vZGFsICYmIDw+XG5cdFx0XHQ8R2VuZXJhdGVGb3JtTW9kYWxcblx0XHRcdFx0c2V0U2hvd01vZGFsPXsgc2V0U2hvd01vZGFsIH1cblx0XHRcdFx0Zm9vdGVyPXsgQWlFZGl0b3JGb290ZXJGaWxsIH1cblx0XHRcdC8+XG5cdFx0PC8+IH1cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBaUZvcm1QYXR0ZXJuQnV0dG9uOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuamZiLWFpLW1vZGFsIC5iYWRnZXtiYWNrZ3JvdW5kOnZhcigtLXdwLWNvbXBvbmVudHMtY29sb3ItYWNjZW50LHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yLCMzODU4ZTkpKTtjb2xvcjp2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudC1pbnZlcnRlZCwjZmZmKTtmb250LXNpemU6MC42NWVtO3BhZGRpbmc6MC4yZW0gMC41ZW07Ym9yZGVyLXJhZGl1czoxZW19LmpmYi1haS1tb2RhbCAuY29tcG9uZW50cy1ub3RpY2V7bWFyZ2luOjAgMCAyZW0gMH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2NvbXBvbmVudHMvR2VuZXJhdGVGb3JtTW9kYWwucGNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQyxxQkFDQyxnRkFBbUYsQ0FDbkYscURBQXVELENBQ3ZELGdCQUFpQixDQUNqQixtQkFBb0IsQ0FDcEIsaUJBQ0QsQ0FFQSxpQ0FDQyxnQkFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuamZiLWFpLW1vZGFsIHtcXG5cXHQuYmFkZ2Uge1xcblxcdFxcdGJhY2tncm91bmQ6IHZhcigtLXdwLWNvbXBvbmVudHMtY29sb3ItYWNjZW50LCB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvciwgIzM4NThlOSkpO1xcblxcdFxcdGNvbG9yOiB2YXIoLS13cC1jb21wb25lbnRzLWNvbG9yLWFjY2VudC1pbnZlcnRlZCwgI2ZmZik7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjY1ZW07XFxuXFx0XFx0cGFkZGluZzogMC4yZW0gMC41ZW07XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdH1cXG5cXG5cXHQuY29tcG9uZW50cy1ub3RpY2Uge1xcblxcdFxcdG1hcmdpbjogMCAwIDJlbSAwO1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dlbmVyYXRlRm9ybU1vZGFsLnBjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HZW5lcmF0ZUZvcm1Nb2RhbC5wY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYXBpRmV0Y2hcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRvbVJlYWR5XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBBaUZvcm1IZWFkZXJCdXR0b24gZnJvbSAnLi9BaUZvcm1IZWFkZXJCdXR0b24nO1xuaW1wb3J0IEFpRm9ybVBhdHRlcm5CdXR0b24gZnJvbSAnLi9BaUZvcm1QYXR0ZXJuQnV0dG9uJztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBkaXNwYXRjaCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xuXG5jb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoICdqZmItZ2VuZXJhdGUtZm9ybS1haS13cmFwcGVyJyApO1xuXG4vLyBSZW5kZXIgb3VyIGJ1dHRvbi5cbmNyZWF0ZVJvb3QoIGJ1dHRvbkRpdiApLnJlbmRlciggPEFpRm9ybUhlYWRlckJ1dHRvbi8+ICk7XG5cbmNvbnN0IGFwcGVuZEJ1dHRvbiA9IGZ1bmN0aW9uICggdW5zdWJzY3JpYmVDYWxsYmFjaywgcmVzdWx0ICkge1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuZWRpdC1wb3N0LWhlYWRlci10b29sYmFyJyxcblx0KTtcblxuXHRpZiAoICFoZWFkZXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdW5zdWJzY3JpYmVDYWxsYmFjaygpO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoIGJ1dHRvbkRpdiApO1xuXG5cdGlmICggIXJlc3VsdC5pc0FkZGVkVGltZW91dCApIHtcblx0XHRyZXN1bHQuaXNBZGRlZFRpbWVvdXQgPSB0cnVlO1xuXHRcdHNldFRpbWVvdXQoIHVuc3Vic2NyaWJlQ2FsbGJhY2ssIDUwMCApO1xuXHR9XG59O1xuXG5kb21SZWFkeSggKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSB7IGlzQWRkZWRUaW1lb3V0OiBmYWxzZSB9O1xuXHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoXG5cdFx0XHQoKSA9PiBhcHBlbmRCdXR0b24oIHVuc3Vic2NyaWJlLCByZXN1bHQgKSxcblx0XHQpO1xuXHR9ICk7XG59ICk7XG5cbmRpc3BhdGNoKCAnamV0LWZvcm1zL3BhdHRlcm5zJyApLnJlZ2lzdGVyKCB7XG5cdG5hbWU6ICdhaScsXG5cdHRpdGxlOiAnR2VuZXJhdGUgdmlhIEFJJyxcblx0dmlldzogQWlGb3JtUGF0dGVybkJ1dHRvbixcblx0aWNvbjogPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG5cdCAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTQwIDE2TDM2IDEzLjc2TDMyIDE2TDM0LjI0IDEyTDMyIDhMMzYgMTAuMjRMNDAgOEwzNy43NiAxMkw0MCAxNlpcIlxuXHRcdC8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMjEgMThMMTcgMTUuNzZMMTMgMThMMTUuMjQgMTRMMTMgMTBMMTcgMTIuMjRMMjEgMTBMMTguNzYgMTRMMjEgMThaXCJcblx0XHQvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTM0LjMyIDMwTDM2IDI3TDMzIDI4LjY4TDMwIDI3TDMxLjY4IDMwTDMwIDMzTDMzIDMxLjMyTDM2IDMzTDM0LjMyIDMwWlwiXG5cdFx0Lz5cblx0XHQ8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdCAgICAgIGQ9XCJNOC41OTA3MyAzMy43MDQ2QzcuODAzMDkgMzQuNDkyMyA3LjgwMzA5IDM1Ljc2OTMgOC41OTA3MyAzNi41NTY5TDExLjQ0MzEgMzkuNDA5M0MxMi4yMzA3IDQwLjE5NjkgMTMuNTA3NyA0MC4xOTY5IDE0LjI5NTQgMzkuNDA5M0wzMS40MDkzIDIyLjI5NTRDMzIuMTk2OSAyMS41MDc3IDMyLjE5NjkgMjAuMjMwNyAzMS40MDkzIDE5LjQ0MzFMMjguNTU2OSAxNi41OTA3QzI3Ljc2OTMgMTUuODAzMSAyNi40OTIzIDE1LjgwMzEgMjUuNzA0NiAxNi41OTA3TDguNTkwNzMgMzMuNzA0NlpNMjIuODU0OCAyMi4yNjlMMTAuMDA0OSAzNS4xMTg4TDEwLjAwMiAzNS4xMjIxTDEwLjAwMTMgMzUuMTIzQzEwLjAwMTEgMzUuMTIzNiAxMCAzNS4xMjY2IDEwIDM1LjEzMDhDMTAgMzUuMTMzMiAxMC4wMDAzIDM1LjEzNSAxMC4wMDA1IDM1LjEzNjNMMTAuMDAxMSAzNS4xMzgyQzEwLjAwMTIgMzUuMTM4MyAxMC4wMDIzIDM1LjE0MDEgMTAuMDA0OSAzNS4xNDI3TDEyLjg1NzMgMzcuOTk1MUMxMi44NTgxIDM3Ljk5NTkgMTIuODU4OCAzNy45OTY2IDEyLjg1OTQgMzcuOTk3MUMxMi44NTk5IDM3Ljk5NzUgMTIuODYwMyAzNy45OTc4IDEyLjg2MDYgMzcuOTk4MUwxMi44NjE0IDM3Ljk5ODdDMTIuODYyIDM3Ljk5ODkgMTIuODY1IDM4IDEyLjg2OTIgMzhDMTIuODcxNiAzOCAxMi44NzM1IDM3Ljk5OTcgMTIuODc0OCAzNy45OTk0QzEyLjg3NTcgMzcuOTk5MiAxMi44NzYzIDM3Ljk5OSAxMi44NzY2IDM3Ljk5ODlDMTIuODc2NyAzNy45OTg4IDEyLjg3ODUgMzcuOTk3NyAxMi44ODEyIDM3Ljk5NTFMMjUuNzMxIDI1LjE0NTJMMjIuODU0OCAyMi4yNjlaTTI0LjI2OSAyMC44NTQ4TDI3LjE0NTIgMjMuNzMxTDI5Ljk5NTEgMjAuODgxMkwyOS45OTc4IDIwLjg3ODFMMjkuOTk4NyAyMC44NzdMMjkuOTk5NSAyMC44NzQzQzI5Ljk5OTggMjAuODczMSAzMCAyMC44NzEzIDMwIDIwLjg2OTJDMzAgMjAuODY3NCAyOS45OTk4IDIwLjg2NTkgMjkuOTk5NiAyMC44NjQ3QzI5Ljk5OTQgMjAuODYzMSAyOS45OTkgMjAuODYyMiAyOS45OTg5IDIwLjg2MThDMjkuOTk4OCAyMC44NjE3IDI5Ljk5NzcgMjAuODU5OSAyOS45OTUxIDIwLjg1NzNMMjcuMTQyNyAxOC4wMDQ5QzI3LjE0MDEgMTguMDAyMyAyNy4xMzg3IDE4LjAwMTQgMjcuMTM4NiAxOC4wMDEzQzI3LjEzODQgMTguMDAxMiAyNy4xMzc1IDE4LjAwMDkgMjcuMTM2OSAxOC4wMDA3QzI3LjEzNTYgMTguMDAwNCAyNy4xMzM2IDE4IDI3LjEzMDggMThDMjcuMTI2NiAxOCAyNy4xMjQgMTguMDAwOSAyNy4xMjM0IDE4LjAwMTFDMjcuMTIzMyAxOC4wMDEyIDI3LjEyMTUgMTguMDAyMyAyNy4xMTg4IDE4LjAwNDlMMjQuMjY5IDIwLjg1NDhaXCJcblx0XHQvPlxuXHQ8L3N2Zz4sXG59ICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9