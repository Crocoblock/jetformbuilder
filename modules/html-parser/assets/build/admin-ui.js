/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../admin/HtmlParserButton.js":
/*!***************************************!*\
  !*** ../../admin/HtmlParserButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HtmlParserButton)
/* harmony export */ });
/* harmony import */ var _HtmlParserModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlParserModal */ "../../admin/HtmlParserModal.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function HtmlParserButton() {
  const [showModal, setShowModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {
    href: '#',
    className: 'page-title-action',
    onClick: event => {
      event.preventDefault();
      setShowModal(true);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Parse HTML', 'jet-form-builder')), showModal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_HtmlParserModal__WEBPACK_IMPORTED_MODULE_0__["default"], {
    setShowModal
  }));
}

/***/ }),

/***/ "../../admin/HtmlParserModal.js":
/*!**************************************!*\
  !*** ../../admin/HtmlParserModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HtmlParserModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_src_parseHTMLtoBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/src/parseHTMLtoBlocks */ "./parseHTMLtoBlocks.js");




function HtmlParserModal({
  setShowModal
}) {
  const [html, setHtml] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [isParsing, setParsing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleSubmit = () => {
    setParsing(true);
    try {
      const blocks = (0,_assets_src_parseHTMLtoBlocks__WEBPACK_IMPORTED_MODULE_3__["default"])(html);
      wp.data.dispatch('core/block-editor').replaceBlocks(wp.data.select('core/block-editor').getSelectedBlockClientId(), blocks);
      setShowModal(false);
    } catch (error) {
      console.error('Parse error:', error);
    } finally {
      setParsing(false);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Import HTML Form', 'jet-form-builder'),
    onRequestClose: () => setShowModal(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Paste your HTML here', 'jet-form-builder'),
    value: html,
    onChange: setHtml,
    rows: 12
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
    isPrimary: true,
    onClick: handleSubmit,
    disabled: isParsing
  }, isParsing ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Parsing...', 'jet-form-builder') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Import')));
}

/***/ }),

/***/ "./getInputNumberAttrs.js":
/*!********************************!*\
  !*** ./getInputNumberAttrs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resolveLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveLabel */ "./resolveLabel.js");


/**
 * @param input {HTMLInputElement}
 */
function getInputNumberAttrs(input) {
  const attributes = {
    name: input.name,
    class_name: input.className,
    default: input.value,
    label: (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
    required: input.required
  };
  if (input.hasAttribute('min')) {
    attributes.min = input.min;
  }
  if (input.hasAttribute('max')) {
    attributes.max = input.max;
  }
  return attributes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInputNumberAttrs);

/***/ }),

/***/ "./getMimeType.js":
/*!************************!*\
  !*** ./getMimeType.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  mimes
} = window.JetFormBuilderParserConfig;
function getMimeType(filename) {
  let type = false;
  for (const extPreg in mimes) {
    if (!mimes.hasOwnProperty(extPreg)) {
      continue;
    }
    const regex = new RegExp('\.(' + extPreg + ')$', 'i');

    /**
     * Do not return too late,
     * because same file can match multiple extensions
     */
    if (filename.match(regex)) {
      type = mimes[extPreg];
    }
  }
  return type;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMimeType);

/***/ }),

/***/ "./node-parsers/buttonParser.js":
/*!**************************************!*\
  !*** ./node-parsers/buttonParser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function* buttonParser(button) {
  button.type = button.type || 'submit';
  if ('submit' !== button) {
    return;
  }
  yield {
    name: 'jet-forms/submit-field',
    attributes: {
      label: button.innerHTML.trim(),
      class_name: button.className
    },
    innerBlocks: []
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonParser);

/***/ }),

/***/ "./node-parsers/inputParser.js":
/*!*************************************!*\
  !*** ./node-parsers/inputParser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resolveLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolveLabel */ "./resolveLabel.js");
/* harmony import */ var _resolveLegend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolveLegend */ "./resolveLegend.js");
/* harmony import */ var _getInputNumberAttrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getInputNumberAttrs */ "./getInputNumberAttrs.js");
/* harmony import */ var _resolveOptionLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolveOptionLabel */ "./resolveOptionLabel.js");
/* harmony import */ var _getMimeType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getMimeType */ "./getMimeType.js");





const typeMap = {
  email: textParser,
  tel: textParser,
  url: textParser,
  password: textParser,
  text: textParser,
  color: colorPickerParser,
  radio: radioParser,
  checkbox: checkboxParser,
  date: dateParser,
  datetime: dateTimeParser,
  'datetime-local': dateTimeParser,
  time: timeParser,
  file: mediaParser,
  hidden: hiddenParser,
  number: numberParser,
  range: rangeParser,
  submit: submitParser
};
function* inputParser(input) {
  input.type = input.type || 'text';
  if (!typeMap.hasOwnProperty(input.type)) {
    return;
  }
  const generator = typeMap[input.type];
  yield* generator(input);
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* textParser(input) {
  const attributes = {
    field_type: input.type,
    name: input.name,
    class_name: input.className,
    default: input.value,
    label: (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
    required: input.required,
    placeholder: input.placeholder
  };
  if (input.hasAttribute('maxlength')) {
    attributes.maxlength = input.maxLength;
  }
  if (input.hasAttribute('minlength')) {
    attributes.minlength = input.minLength;
  }
  yield {
    name: 'jet-forms/text-field',
    attributes,
    innerBlocks: []
  };
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* colorPickerParser(input) {
  const attributes = {
    name: input.name,
    class_name: input.className,
    default: input.value,
    label: (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
    required: input.required
  };
  yield {
    name: 'jet-forms/color-picker-field',
    attributes,
    innerBlocks: []
  };
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* radioParser(input) {
  if (input.jfbObserved) {
    return;
  }
  const root = input.getRootNode();

  /**
   * @type {HTMLInputElement[]}
   */
  const optionNodes = Array.from(root.querySelectorAll(`input[type="radio"][name="${input.name}"]`));

  // prevent parsing future radio nodes
  optionNodes.forEach(node => {
    node.jfbObserved = true;
  });
  const attributes = {
    name: input.name,
    class_name: input.className,
    field_options: [],
    label: (0,_resolveLegend__WEBPACK_IMPORTED_MODULE_1__["default"])(input) || (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
    required: input.required
  };
  for (const optionNode of optionNodes) {
    attributes.field_options.push({
      value: optionNode.value,
      label: (0,_resolveOptionLabel__WEBPACK_IMPORTED_MODULE_3__["default"])(optionNode)
    });
    if (optionNode.checked) {
      attributes.default = optionNode.value;
    }
  }
  yield {
    name: 'jet-forms/radio-field',
    attributes,
    innerBlocks: []
  };
}

/**
 * @param input {HTMLInputElement}
 * @returns {Generator<*, (string|{name, field_type})[], *>}
 */
function* checkboxParser(input) {
  if (input.jfbObserved) {
    return;
  }
  const root = input.getRootNode();

  /**
   * @type {HTMLInputElement[]}
   */
  const optionNodes = Array.from(root.querySelectorAll(`input[type="checkbox"][name="${input.name}"]`));

  // prevent parsing future radio nodes
  optionNodes.forEach(node => {
    node.jfbObserved = true;
  });
  const attributes = {
    name: input.name,
    class_name: input.className,
    field_options: [],
    label: (0,_resolveLegend__WEBPACK_IMPORTED_MODULE_1__["default"])(input) || (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
    required: input.required
  };
  for (const optionNode of optionNodes) {
    attributes.field_options.push({
      value: optionNode.value,
      label: (0,_resolveOptionLabel__WEBPACK_IMPORTED_MODULE_3__["default"])(optionNode)
    });
  }
  yield {
    name: 'jet-forms/checkbox-field',
    attributes,
    innerBlocks: []
  };
}
function* dateParser(input) {
  yield {
    name: 'jet-forms/date-field',
    attributes: (0,_getInputNumberAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(input),
    innerBlocks: []
  };
}
function* dateTimeParser(input) {
  yield {
    name: 'jet-forms/datetime-field',
    attributes: (0,_getInputNumberAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(input),
    innerBlocks: []
  };
}
function* timeParser(input) {
  yield {
    name: 'jet-forms/time-field',
    attributes: (0,_getInputNumberAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(input),
    innerBlocks: []
  };
}
function* hiddenParser(input) {
  yield {
    name: 'jet-forms/hidden-field',
    attributes: {
      name: input.name,
      class_name: input.className,
      default: input.value
    },
    innerBlocks: []
  };
}
function* mediaParser(input) {
  const attributes = {
    name: input.name,
    class_name: input.className,
    label: (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
    required: input.required,
    allowed_mimes: []
  };
  attributes.allowed_mimes = input.accept.split(',').map(part => (0,_getMimeType__WEBPACK_IMPORTED_MODULE_4__["default"])(part.trim()));
  yield {
    name: 'jet-forms/media-field',
    attributes,
    innerBlocks: []
  };
}
function* numberParser(input) {
  const attributes = (0,_getInputNumberAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
  attributes.placeholder = input.placeholder;
  if (input.hasAttribute('step')) {
    attributes.step = input.step;
  }
  yield {
    name: 'jet-forms/number-field',
    attributes,
    innerBlocks: []
  };
}

/**
 * @param input {HTMLInputElement}
 */
function* rangeParser(input) {
  const attributes = (0,_getInputNumberAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
  if (input.hasAttribute('step')) {
    attributes.step = input.step;
  }
  yield {
    name: 'jet-forms/range-field',
    attributes,
    innerBlocks: []
  };
}
function* submitParser(input) {
  yield {
    name: 'jet-forms/submit-field',
    attributes: {
      label: input.value || 'Submit',
      class_name: input.className
    },
    innerBlocks: []
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputParser);

/***/ }),

/***/ "./node-parsers/selectParser.js":
/*!**************************************!*\
  !*** ./node-parsers/selectParser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resolveLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolveLabel */ "./resolveLabel.js");

function* selectParser(select) {
  const attributes = {
    name: select.name,
    class_name: select.className,
    label: (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(select),
    required: select.required,
    field_options: []
  };
  const optionEntries = Object.entries(select.options);
  for (const [index, option] of optionEntries) {
    if (0 === +index && !option.value) {
      attributes.placeholder = option.label;
      continue;
    }
    attributes.field_options.push({
      value: option.value,
      label: option.label
    });
    if (!option.selected) {
      continue;
    }
    attributes.default = option.value;
  }
  yield {
    name: 'jet-forms/select-field',
    attributes,
    innerBlocks: []
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectParser);

/***/ }),

/***/ "./node-parsers/textAreaParser.js":
/*!****************************************!*\
  !*** ./node-parsers/textAreaParser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resolveLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolveLabel */ "./resolveLabel.js");


/**
 * @param textarea {HTMLTextAreaElement}
 */
function* textAreaParser(textarea) {
  const attributes = {
    name: textarea.name,
    class_name: textarea.className,
    label: (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(textarea),
    required: textarea.required,
    placeholder: textarea.placeholder
  };
  if (textarea.hasAttribute('maxlength')) {
    attributes.maxlength = textarea.maxLength;
  }
  if (textarea.hasAttribute('minlength')) {
    attributes.minlength = textarea.minLength;
  }
  yield {
    name: 'jet-forms/textarea-field',
    attributes,
    innerBlocks: []
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textAreaParser);

/***/ }),

/***/ "./parseHTMLtoBlocks.js":
/*!******************************!*\
  !*** ./parseHTMLtoBlocks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_parsers_inputParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-parsers/inputParser */ "./node-parsers/inputParser.js");
/* harmony import */ var _node_parsers_selectParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-parsers/selectParser */ "./node-parsers/selectParser.js");
/* harmony import */ var _node_parsers_textAreaParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node-parsers/textAreaParser */ "./node-parsers/textAreaParser.js");
/* harmony import */ var _node_parsers_buttonParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node-parsers/buttonParser */ "./node-parsers/buttonParser.js");




const {
  applyFilters
} = JetPlugins.hooks;
const nodeParsers = {
  INPUT: _node_parsers_inputParser__WEBPACK_IMPORTED_MODULE_0__["default"],
  SELECT: _node_parsers_selectParser__WEBPACK_IMPORTED_MODULE_1__["default"],
  TEXTAREA: _node_parsers_textAreaParser__WEBPACK_IMPORTED_MODULE_2__["default"],
  BUTTON: _node_parsers_buttonParser__WEBPACK_IMPORTED_MODULE_3__["default"]
};
function parseHTMLtoBlocks(content) {
  const element = document.createElement('div');
  element.innerHTML = content;
  const blocks = [];

  // input, textarea, select - for fields, and maybe submit button
  // button - for submit button
  /**
   * @type {Node[]}
   */
  const fields = element.querySelectorAll('input, textarea, select, button');
  for (const field of fields) {
    // for third-party parsers
    const preBlocks = applyFilters('jet.fb.parse.node', false, field);

    // should be array of blocks
    if (Array.isArray(preBlocks)) {
      blocks.push(...preBlocks);
      continue;
    }
    const generator = nodeParsers[field.nodeName];
    blocks.push(...Array.from(generator(field)));
  }
  return blocks;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseHTMLtoBlocks);

/***/ }),

/***/ "./resolveLabel.js":
/*!*************************!*\
  !*** ./resolveLabel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param node {Node|Element}
 */
function resolveLabel(node) {
  let label = node.closest('label');

  // try to find label
  if (node.id && !label) {
    const root = node.getRootNode();
    label = root.querySelector(`label[for="${node.id}"]`);
  }
  if (!label) {
    return '';
  }
  label.querySelectorAll('input, select, textarea').forEach(item => item.remove());
  return label.innerHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveLabel);

/***/ }),

/***/ "./resolveLegend.js":
/*!**************************!*\
  !*** ./resolveLegend.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param node {Node|Element}
 */
function resolveLegend(node) {
  const legend = node.closest('fieldset')?.querySelector?.('legend');
  if (!legend) {
    return '';
  }
  legend.querySelectorAll('input, select, textarea').forEach(item => item.remove());
  return legend.innerHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveLegend);

/***/ }),

/***/ "./resolveOptionLabel.js":
/*!*******************************!*\
  !*** ./resolveOptionLabel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resolveLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveLabel */ "./resolveLabel.js");
/**
 * @param node {Node|Element}
 */

function resolveOptionLabel(option) {
  if ('#text' === option?.nextSibling?.nodeName) {
    return option.nextSibling.nodeValue;
  }
  return (0,_resolveLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(option);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveOptionLabel);

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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
/*!****************************!*\
  !*** ../../admin/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HtmlParserButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlParserButton */ "../../admin/HtmlParserButton.js");



_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  const target = document.querySelector('.page-title-action[href*="post-new.php"]');
  if (!target) {
    return;
  }
  const container = document.createElement('div');
  container.style.display = 'inline-flex';
  target.after(container);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container).render(wp.element.createElement(_HtmlParserButton__WEBPACK_IMPORTED_MODULE_2__["default"]));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdlJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9nZXRJbnB1dE51bWJlckF0dHJzLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL2dldE1pbWVUeXBlLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL25vZGUtcGFyc2Vycy9idXR0b25QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vbm9kZS1wYXJzZXJzL2lucHV0UGFyc2VyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL25vZGUtcGFyc2Vycy9zZWxlY3RQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vbm9kZS1wYXJzZXJzL3RleHRBcmVhUGFyc2VyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL3BhcnNlSFRNTHRvQmxvY2tzLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL3Jlc29sdmVMYWJlbC5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9yZXNvbHZlTGVnZW5kLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL3Jlc29sdmVPcHRpb25MYWJlbC5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRvbVJlYWR5XCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIdG1sUGFyc2VyTW9kYWwgZnJvbSAnLi9IdG1sUGFyc2VyTW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdG1sUGFyc2VyQnV0dG9uKCkge1xyXG5cclxuXHRjb25zdCBbIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXHJcblx0XHRGcmFnbWVudCxcclxuXHRcdG51bGwsXHJcblx0XHRjcmVhdGVFbGVtZW50KFxyXG5cdFx0XHQnYScsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRocmVmOiAnIycsXHJcblx0XHRcdFx0Y2xhc3NOYW1lOiAncGFnZS10aXRsZS1hY3Rpb24nLFxyXG5cdFx0XHRcdG9uQ2xpY2s6ICggZXZlbnQgKSA9PiB7XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0c2V0U2hvd01vZGFsKCB0cnVlICk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0X18oICdQYXJzZSBIVE1MJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHRcdCksXHJcblx0XHRzaG93TW9kYWwgJiYgY3JlYXRlRWxlbWVudCggSHRtbFBhcnNlck1vZGFsLCB7IHNldFNob3dNb2RhbCB9IClcclxuXHQpO1xyXG59IiwiaW1wb3J0IHsgTW9kYWwsIFRleHRhcmVhQ29udHJvbCwgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCBwYXJzZUhUTUx0b0Jsb2NrcyBmcm9tICcuLi9hc3NldHMvc3JjL3BhcnNlSFRNTHRvQmxvY2tzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEh0bWxQYXJzZXJNb2RhbCggeyBzZXRTaG93TW9kYWwgfSApIHtcclxuXHRjb25zdCBbIGh0bWwsIHNldEh0bWwgXSA9IHVzZVN0YXRlKCAnJyApO1xyXG5cdGNvbnN0IFsgaXNQYXJzaW5nLCBzZXRQYXJzaW5nIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG5cdFx0c2V0UGFyc2luZyggdHJ1ZSApO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGJsb2NrcyA9IHBhcnNlSFRNTHRvQmxvY2tzKCBodG1sICk7XHJcblxyXG5cdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkucmVwbGFjZUJsb2NrcyhcclxuXHRcdFx0XHR3cC5kYXRhLnNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCgpLFxyXG5cdFx0XHRcdGJsb2Nrc1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0c2V0U2hvd01vZGFsKCBmYWxzZSApO1xyXG5cdFx0fSBjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnUGFyc2UgZXJyb3I6JywgZXJyb3IgKTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldFBhcnNpbmcoIGZhbHNlICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXHJcblx0XHRNb2RhbCxcclxuXHRcdHtcclxuXHRcdFx0dGl0bGU6IF9fKCAnSW1wb3J0IEhUTUwgRm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZTogKCkgPT4gc2V0U2hvd01vZGFsKCBmYWxzZSApLFxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZUVsZW1lbnQoIFRleHRhcmVhQ29udHJvbCwge1xyXG5cdFx0XHRsYWJlbDogX18oICdQYXN0ZSB5b3VyIEhUTUwgaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHR2YWx1ZTogaHRtbCxcclxuXHRcdFx0b25DaGFuZ2U6IHNldEh0bWwsXHJcblx0XHRcdHJvd3M6IDEyLFxyXG5cdFx0fSApLFxyXG5cdFx0Y3JlYXRlRWxlbWVudChcclxuXHRcdFx0QnV0dG9uLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aXNQcmltYXJ5OiB0cnVlLFxyXG5cdFx0XHRcdG9uQ2xpY2s6IGhhbmRsZVN1Ym1pdCxcclxuXHRcdFx0XHRkaXNhYmxlZDogaXNQYXJzaW5nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpc1BhcnNpbmcgPyBfXyggJ1BhcnNpbmcuLi4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSA6IF9fKCAnSW1wb3J0JyApXHJcblx0XHQpXHJcblx0KTtcclxufSIsImltcG9ydCByZXNvbHZlTGFiZWwgZnJvbSAnLi9yZXNvbHZlTGFiZWwnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SFRNTElucHV0RWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGdldElucHV0TnVtYmVyQXR0cnMoIGlucHV0ICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRuYW1lOiBpbnB1dC5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0ZGVmYXVsdDogaW5wdXQudmFsdWUsXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxhYmVsKCBpbnB1dCApLFxyXG5cdFx0cmVxdWlyZWQ6IGlucHV0LnJlcXVpcmVkLFxyXG5cdH07XHJcblxyXG5cdGlmICggaW5wdXQuaGFzQXR0cmlidXRlKCAnbWluJyApICkge1xyXG5cdFx0YXR0cmlidXRlcy5taW4gPSBpbnB1dC5taW47XHJcblx0fVxyXG5cclxuXHRpZiAoIGlucHV0Lmhhc0F0dHJpYnV0ZSggJ21heCcgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMubWF4ID0gaW5wdXQubWF4O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGF0dHJpYnV0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldElucHV0TnVtYmVyQXR0cnM7IiwiY29uc3Qge1xyXG5cdCAgICAgIG1pbWVzLFxyXG4gICAgICB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyUGFyc2VyQ29uZmlnO1xyXG5cclxuZnVuY3Rpb24gZ2V0TWltZVR5cGUoIGZpbGVuYW1lICkge1xyXG5cdGxldCB0eXBlID0gZmFsc2U7XHJcblxyXG5cdGZvciAoIGNvbnN0IGV4dFByZWcgaW4gbWltZXMgKSB7XHJcblx0XHRpZiAoICFtaW1lcy5oYXNPd25Qcm9wZXJ0eSggZXh0UHJlZyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoICdcXC4oJyArIGV4dFByZWcgKyAnKSQnLCAnaScgKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERvIG5vdCByZXR1cm4gdG9vIGxhdGUsXHJcblx0XHQgKiBiZWNhdXNlIHNhbWUgZmlsZSBjYW4gbWF0Y2ggbXVsdGlwbGUgZXh0ZW5zaW9uc1xyXG5cdFx0ICovXHJcblx0XHRpZiAoIGZpbGVuYW1lLm1hdGNoKCByZWdleCApICkge1xyXG5cdFx0XHR0eXBlID0gbWltZXNbIGV4dFByZWcgXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0eXBlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNaW1lVHlwZTsiLCJmdW5jdGlvbiogYnV0dG9uUGFyc2VyKCBidXR0b24gKSB7XHJcblx0YnV0dG9uLnR5cGUgPSBidXR0b24udHlwZSB8fCAnc3VibWl0JztcclxuXHJcblx0aWYgKCAnc3VibWl0JyAhPT0gYnV0dG9uICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogYnV0dG9uLmlubmVySFRNTC50cmltKCksXHJcblx0XHRcdGNsYXNzX25hbWU6IGJ1dHRvbi5jbGFzc05hbWUsXHJcblx0XHR9LFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblBhcnNlcjsiLCJpbXBvcnQgcmVzb2x2ZUxhYmVsIGZyb20gJy4uL3Jlc29sdmVMYWJlbCc7XHJcbmltcG9ydCByZXNvbHZlTGVnZW5kIGZyb20gJy4uL3Jlc29sdmVMZWdlbmQnO1xyXG5pbXBvcnQgZ2V0SW5wdXROdW1iZXJBdHRycyBmcm9tICcuLi9nZXRJbnB1dE51bWJlckF0dHJzJztcclxuaW1wb3J0IHJlc29sdmVPcHRpb25MYWJlbCBmcm9tICcuLi9yZXNvbHZlT3B0aW9uTGFiZWwnO1xyXG5pbXBvcnQgZ2V0TWltZVR5cGUgZnJvbSAnLi4vZ2V0TWltZVR5cGUnO1xyXG5cclxuY29uc3QgdHlwZU1hcCA9IHtcclxuXHRlbWFpbDogdGV4dFBhcnNlcixcclxuXHR0ZWw6IHRleHRQYXJzZXIsXHJcblx0dXJsOiB0ZXh0UGFyc2VyLFxyXG5cdHBhc3N3b3JkOiB0ZXh0UGFyc2VyLFxyXG5cdHRleHQ6IHRleHRQYXJzZXIsXHJcblx0Y29sb3I6IGNvbG9yUGlja2VyUGFyc2VyLFxyXG5cdHJhZGlvOiByYWRpb1BhcnNlcixcclxuXHRjaGVja2JveDogY2hlY2tib3hQYXJzZXIsXHJcblx0ZGF0ZTogZGF0ZVBhcnNlcixcclxuXHRkYXRldGltZTogZGF0ZVRpbWVQYXJzZXIsXHJcblx0J2RhdGV0aW1lLWxvY2FsJzogZGF0ZVRpbWVQYXJzZXIsXHJcblx0dGltZTogdGltZVBhcnNlcixcclxuXHRmaWxlOiBtZWRpYVBhcnNlcixcclxuXHRoaWRkZW46IGhpZGRlblBhcnNlcixcclxuXHRudW1iZXI6IG51bWJlclBhcnNlcixcclxuXHRyYW5nZTogcmFuZ2VQYXJzZXIsXHJcblx0c3VibWl0OiBzdWJtaXRQYXJzZXIsXHJcbn07XHJcblxyXG5mdW5jdGlvbiogaW5wdXRQYXJzZXIoIGlucHV0ICkge1xyXG5cdGlucHV0LnR5cGUgPSBpbnB1dC50eXBlIHx8ICd0ZXh0JztcclxuXHJcblx0aWYgKCAhdHlwZU1hcC5oYXNPd25Qcm9wZXJ0eSggaW5wdXQudHlwZSApICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2VuZXJhdG9yID0gdHlwZU1hcFsgaW5wdXQudHlwZSBdO1xyXG5cclxuXHR5aWVsZCogZ2VuZXJhdG9yKCBpbnB1dCApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtIVE1MSW5wdXRFbGVtZW50fVxyXG4gKiBAcmV0dXJucyB7R2VuZXJhdG9yPCosIChzdHJpbmd8e25hbWUsIGZpZWxkX3R5cGV9KVtdLCAqPn1cclxuICovXHJcbmZ1bmN0aW9uKiB0ZXh0UGFyc2VyKCBpbnB1dCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0ZmllbGRfdHlwZTogaW5wdXQudHlwZSxcclxuXHRcdG5hbWU6IGlucHV0Lm5hbWUsXHJcblx0XHRjbGFzc19uYW1lOiBpbnB1dC5jbGFzc05hbWUsXHJcblx0XHRkZWZhdWx0OiBpbnB1dC52YWx1ZSxcclxuXHRcdGxhYmVsOiByZXNvbHZlTGFiZWwoIGlucHV0ICksXHJcblx0XHRyZXF1aXJlZDogaW5wdXQucmVxdWlyZWQsXHJcblx0XHRwbGFjZWhvbGRlcjogaW5wdXQucGxhY2Vob2xkZXIsXHJcblx0fTtcclxuXHJcblx0aWYgKCBpbnB1dC5oYXNBdHRyaWJ1dGUoICdtYXhsZW5ndGgnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLm1heGxlbmd0aCA9IGlucHV0Lm1heExlbmd0aDtcclxuXHR9XHJcblxyXG5cdGlmICggaW5wdXQuaGFzQXR0cmlidXRlKCAnbWlubGVuZ3RoJyApICkge1xyXG5cdFx0YXR0cmlidXRlcy5taW5sZW5ndGggPSBpbnB1dC5taW5MZW5ndGg7XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3RleHQtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtIVE1MSW5wdXRFbGVtZW50fVxyXG4gKiBAcmV0dXJucyB7R2VuZXJhdG9yPCosIChzdHJpbmd8e25hbWUsIGZpZWxkX3R5cGV9KVtdLCAqPn1cclxuICovXHJcbmZ1bmN0aW9uKiBjb2xvclBpY2tlclBhcnNlciggaW5wdXQgKSB7XHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHRcdG5hbWU6IGlucHV0Lm5hbWUsXHJcblx0XHRjbGFzc19uYW1lOiBpbnB1dC5jbGFzc05hbWUsXHJcblx0XHRkZWZhdWx0OiBpbnB1dC52YWx1ZSxcclxuXHRcdGxhYmVsOiByZXNvbHZlTGFiZWwoIGlucHV0ICksXHJcblx0XHRyZXF1aXJlZDogaW5wdXQucmVxdWlyZWQsXHJcblx0fTtcclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9jb2xvci1waWNrZXItZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtIVE1MSW5wdXRFbGVtZW50fVxyXG4gKiBAcmV0dXJucyB7R2VuZXJhdG9yPCosIChzdHJpbmd8e25hbWUsIGZpZWxkX3R5cGV9KVtdLCAqPn1cclxuICovXHJcbmZ1bmN0aW9uKiByYWRpb1BhcnNlciggaW5wdXQgKSB7XHJcblx0aWYgKCBpbnB1dC5qZmJPYnNlcnZlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3Qgcm9vdCA9IGlucHV0LmdldFJvb3ROb2RlKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119XHJcblx0ICovXHJcblx0Y29uc3Qgb3B0aW9uTm9kZXMgPSBBcnJheS5mcm9tKFxyXG5cdFx0cm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIkeyBpbnB1dC5uYW1lIH1cIl1gLFxyXG5cdFx0KSxcclxuXHQpO1xyXG5cclxuXHQvLyBwcmV2ZW50IHBhcnNpbmcgZnV0dXJlIHJhZGlvIG5vZGVzXHJcblx0b3B0aW9uTm9kZXMuZm9yRWFjaCggbm9kZSA9PiB7IG5vZGUuamZiT2JzZXJ2ZWQgPSB0cnVlOyB9ICk7XHJcblxyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRuYW1lOiBpbnB1dC5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0ZmllbGRfb3B0aW9uczogW10sXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxlZ2VuZCggaW5wdXQgKSB8fCByZXNvbHZlTGFiZWwoIGlucHV0ICksXHJcblx0XHRyZXF1aXJlZDogaW5wdXQucmVxdWlyZWQsXHJcblx0fTtcclxuXHJcblx0Zm9yICggY29uc3Qgb3B0aW9uTm9kZSBvZiBvcHRpb25Ob2RlcyApIHtcclxuXHRcdGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucy5wdXNoKCB7XHJcblx0XHRcdHZhbHVlOiBvcHRpb25Ob2RlLnZhbHVlLFxyXG5cdFx0XHRsYWJlbDogcmVzb2x2ZU9wdGlvbkxhYmVsKCBvcHRpb25Ob2RlICksXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aWYgKCBvcHRpb25Ob2RlLmNoZWNrZWQgKSB7XHJcblx0XHRcdGF0dHJpYnV0ZXMuZGVmYXVsdCA9IG9wdGlvbk5vZGUudmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3JhZGlvLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SFRNTElucHV0RWxlbWVudH1cclxuICogQHJldHVybnMge0dlbmVyYXRvcjwqLCAoc3RyaW5nfHtuYW1lLCBmaWVsZF90eXBlfSlbXSwgKj59XHJcbiAqL1xyXG5mdW5jdGlvbiogY2hlY2tib3hQYXJzZXIoIGlucHV0ICkge1xyXG5cdGlmICggaW5wdXQuamZiT2JzZXJ2ZWQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNvbnN0IHJvb3QgPSBpbnB1dC5nZXRSb290Tm9kZSgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudFtdfVxyXG5cdCAqL1xyXG5cdGNvbnN0IG9wdGlvbk5vZGVzID0gQXJyYXkuZnJvbShcclxuXHRcdHJvb3QucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0YGlucHV0W3R5cGU9XCJjaGVja2JveFwiXVtuYW1lPVwiJHsgaW5wdXQubmFtZSB9XCJdYCxcclxuXHRcdCksXHJcblx0KTtcclxuXHJcblx0Ly8gcHJldmVudCBwYXJzaW5nIGZ1dHVyZSByYWRpbyBub2Rlc1xyXG5cdG9wdGlvbk5vZGVzLmZvckVhY2goIG5vZGUgPT4geyBub2RlLmpmYk9ic2VydmVkID0gdHJ1ZTsgfSApO1xyXG5cclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdGZpZWxkX29wdGlvbnM6IFtdLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMZWdlbmQoIGlucHV0ICkgfHwgcmVzb2x2ZUxhYmVsKCBpbnB1dCApLFxyXG5cdFx0cmVxdWlyZWQ6IGlucHV0LnJlcXVpcmVkLFxyXG5cdH07XHJcblxyXG5cdGZvciAoIGNvbnN0IG9wdGlvbk5vZGUgb2Ygb3B0aW9uTm9kZXMgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMucHVzaCgge1xyXG5cdFx0XHR2YWx1ZTogb3B0aW9uTm9kZS52YWx1ZSxcclxuXHRcdFx0bGFiZWw6IHJlc29sdmVPcHRpb25MYWJlbCggb3B0aW9uTm9kZSApLFxyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9jaGVja2JveC1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkYXRlUGFyc2VyKCBpbnB1dCApIHtcclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL2RhdGUtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlczogZ2V0SW5wdXROdW1iZXJBdHRycyggaW5wdXQgKSxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiogZGF0ZVRpbWVQYXJzZXIoIGlucHV0ICkge1xyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvZGF0ZXRpbWUtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlczogZ2V0SW5wdXROdW1iZXJBdHRycyggaW5wdXQgKSxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiogdGltZVBhcnNlciggaW5wdXQgKSB7XHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy90aW1lLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXM6IGdldElucHV0TnVtYmVyQXR0cnMoIGlucHV0ICksXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGhpZGRlblBhcnNlciggaW5wdXQgKSB7XHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9oaWRkZW4tZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRuYW1lOiBpbnB1dC5uYW1lLFxyXG5cdFx0XHRjbGFzc19uYW1lOiBpbnB1dC5jbGFzc05hbWUsXHJcblx0XHRcdGRlZmF1bHQ6IGlucHV0LnZhbHVlLFxyXG5cdFx0fSxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiogbWVkaWFQYXJzZXIoIGlucHV0ICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRuYW1lOiBpbnB1dC5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMYWJlbCggaW5wdXQgKSxcclxuXHRcdHJlcXVpcmVkOiBpbnB1dC5yZXF1aXJlZCxcclxuXHRcdGFsbG93ZWRfbWltZXM6IFtdLFxyXG5cdH07XHJcblxyXG5cdGF0dHJpYnV0ZXMuYWxsb3dlZF9taW1lcyA9IGlucHV0LmFjY2VwdC5zcGxpdCggJywnICkubWFwKFxyXG5cdFx0cGFydCA9PiBnZXRNaW1lVHlwZSggcGFydC50cmltKCkgKSxcclxuXHQpO1xyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL21lZGlhLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24qIG51bWJlclBhcnNlciggaW5wdXQgKSB7XHJcblx0Y29uc3QgYXR0cmlidXRlcyAgICAgICA9IGdldElucHV0TnVtYmVyQXR0cnMoIGlucHV0ICk7XHJcblx0YXR0cmlidXRlcy5wbGFjZWhvbGRlciA9IGlucHV0LnBsYWNlaG9sZGVyO1xyXG5cclxuXHRpZiAoIGlucHV0Lmhhc0F0dHJpYnV0ZSggJ3N0ZXAnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLnN0ZXAgPSBpbnB1dC5zdGVwO1xyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9udW1iZXItZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtIVE1MSW5wdXRFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24qIHJhbmdlUGFyc2VyKCBpbnB1dCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0gZ2V0SW5wdXROdW1iZXJBdHRycyggaW5wdXQgKTtcclxuXHJcblx0aWYgKCBpbnB1dC5oYXNBdHRyaWJ1dGUoICdzdGVwJyApICkge1xyXG5cdFx0YXR0cmlidXRlcy5zdGVwID0gaW5wdXQuc3RlcDtcclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvcmFuZ2UtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiogc3VibWl0UGFyc2VyKCBpbnB1dCApIHtcclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGxhYmVsOiBpbnB1dC52YWx1ZSB8fCAnU3VibWl0JyxcclxuXHRcdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0fSxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dFBhcnNlcjsiLCJpbXBvcnQgcmVzb2x2ZUxhYmVsIGZyb20gJy4uL3Jlc29sdmVMYWJlbCc7XHJcblxyXG5mdW5jdGlvbiogc2VsZWN0UGFyc2VyKCBzZWxlY3QgKSB7XHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHRcdG5hbWU6IHNlbGVjdC5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogc2VsZWN0LmNsYXNzTmFtZSxcclxuXHRcdGxhYmVsOiByZXNvbHZlTGFiZWwoIHNlbGVjdCApLFxyXG5cdFx0cmVxdWlyZWQ6IHNlbGVjdC5yZXF1aXJlZCxcclxuXHRcdGZpZWxkX29wdGlvbnM6IFtdLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wdGlvbkVudHJpZXMgPSBPYmplY3QuZW50cmllcyggc2VsZWN0Lm9wdGlvbnMgKTtcclxuXHJcblx0Zm9yICggY29uc3QgWyBpbmRleCwgb3B0aW9uIF0gb2Ygb3B0aW9uRW50cmllcyApIHtcclxuXHRcdGlmICggMCA9PT0gK2luZGV4ICYmICFvcHRpb24udmFsdWUgKSB7XHJcblx0XHRcdGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgPSBvcHRpb24ubGFiZWw7XHJcblxyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMucHVzaCgge1xyXG5cdFx0XHR2YWx1ZTogb3B0aW9uLnZhbHVlLFxyXG5cdFx0XHRsYWJlbDogb3B0aW9uLmxhYmVsLFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGlmICggIW9wdGlvbi5zZWxlY3RlZCApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0YXR0cmlidXRlcy5kZWZhdWx0ID0gb3B0aW9uLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9zZWxlY3QtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RQYXJzZXI7IiwiaW1wb3J0IHJlc29sdmVMYWJlbCBmcm9tICcuLi9yZXNvbHZlTGFiZWwnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB0ZXh0YXJlYSB7SFRNTFRleHRBcmVhRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uKiB0ZXh0QXJlYVBhcnNlciggdGV4dGFyZWEgKSB7XHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHRcdG5hbWU6IHRleHRhcmVhLm5hbWUsXHJcblx0XHRjbGFzc19uYW1lOiB0ZXh0YXJlYS5jbGFzc05hbWUsXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxhYmVsKCB0ZXh0YXJlYSApLFxyXG5cdFx0cmVxdWlyZWQ6IHRleHRhcmVhLnJlcXVpcmVkLFxyXG5cdFx0cGxhY2Vob2xkZXI6IHRleHRhcmVhLnBsYWNlaG9sZGVyLFxyXG5cdH07XHJcblxyXG5cdGlmICggdGV4dGFyZWEuaGFzQXR0cmlidXRlKCAnbWF4bGVuZ3RoJyApICkge1xyXG5cdFx0YXR0cmlidXRlcy5tYXhsZW5ndGggPSB0ZXh0YXJlYS5tYXhMZW5ndGg7XHJcblx0fVxyXG5cclxuXHRpZiAoIHRleHRhcmVhLmhhc0F0dHJpYnV0ZSggJ21pbmxlbmd0aCcgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMubWlubGVuZ3RoID0gdGV4dGFyZWEubWluTGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy90ZXh0YXJlYS1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRleHRBcmVhUGFyc2VyOyIsImltcG9ydCBpbnB1dFBhcnNlciBmcm9tICcuL25vZGUtcGFyc2Vycy9pbnB1dFBhcnNlcic7XHJcbmltcG9ydCBzZWxlY3RQYXJzZXIgZnJvbSAnLi9ub2RlLXBhcnNlcnMvc2VsZWN0UGFyc2VyJztcclxuaW1wb3J0IHRleHRBcmVhUGFyc2VyIGZyb20gJy4vbm9kZS1wYXJzZXJzL3RleHRBcmVhUGFyc2VyJztcclxuaW1wb3J0IGJ1dHRvblBhcnNlciBmcm9tICcuL25vZGUtcGFyc2Vycy9idXR0b25QYXJzZXInO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVycyxcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCBub2RlUGFyc2VycyA9IHtcclxuXHRJTlBVVDogaW5wdXRQYXJzZXIsXHJcblx0U0VMRUNUOiBzZWxlY3RQYXJzZXIsXHJcblx0VEVYVEFSRUE6IHRleHRBcmVhUGFyc2VyLFxyXG5cdEJVVFRPTjogYnV0dG9uUGFyc2VyLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcGFyc2VIVE1MdG9CbG9ja3MoIGNvbnRlbnQgKSB7XHJcblx0Y29uc3QgZWxlbWVudCAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHJcblx0Y29uc3QgYmxvY2tzID0gW107XHJcblxyXG5cdC8vIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IC0gZm9yIGZpZWxkcywgYW5kIG1heWJlIHN1Ym1pdCBidXR0b25cclxuXHQvLyBidXR0b24gLSBmb3Igc3VibWl0IGJ1dHRvblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtOb2RlW119XHJcblx0ICovXHJcblx0Y29uc3QgZmllbGRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0J2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24nLFxyXG5cdCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IGZpZWxkIG9mIGZpZWxkcyApIHtcclxuXHRcdC8vIGZvciB0aGlyZC1wYXJ0eSBwYXJzZXJzXHJcblx0XHRjb25zdCBwcmVCbG9ja3MgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucGFyc2Uubm9kZScsIGZhbHNlLCBmaWVsZCApO1xyXG5cclxuXHRcdC8vIHNob3VsZCBiZSBhcnJheSBvZiBibG9ja3NcclxuXHRcdGlmICggQXJyYXkuaXNBcnJheSggcHJlQmxvY2tzICkgKSB7XHJcblx0XHRcdGJsb2Nrcy5wdXNoKCAuLi5wcmVCbG9ja3MgKTtcclxuXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGdlbmVyYXRvciA9IG5vZGVQYXJzZXJzWyBmaWVsZC5ub2RlTmFtZSBdO1xyXG5cclxuXHRcdGJsb2Nrcy5wdXNoKCAuLi5BcnJheS5mcm9tKCBnZW5lcmF0b3IoIGZpZWxkICkgKSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGJsb2NrcztcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXJzZUhUTUx0b0Jsb2NrczsiLCIvKipcclxuICogQHBhcmFtIG5vZGUge05vZGV8RWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIHJlc29sdmVMYWJlbCggbm9kZSApIHtcclxuXHRsZXQgbGFiZWwgPSBub2RlLmNsb3Nlc3QoICdsYWJlbCcgKTtcclxuXHJcblx0Ly8gdHJ5IHRvIGZpbmQgbGFiZWxcclxuXHRpZiAoIG5vZGUuaWQgJiYgIWxhYmVsICkge1xyXG5cdFx0Y29uc3Qgcm9vdCA9IG5vZGUuZ2V0Um9vdE5vZGUoKTtcclxuXHJcblx0XHRsYWJlbCA9IHJvb3QucXVlcnlTZWxlY3RvciggYGxhYmVsW2Zvcj1cIiR7IG5vZGUuaWQgfVwiXWAgKTtcclxuXHR9XHJcblxyXG5cdGlmICggIWxhYmVsICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0bGFiZWwucXVlcnlTZWxlY3RvckFsbCggJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyApLmZvckVhY2goXHJcblx0XHRpdGVtID0+IGl0ZW0ucmVtb3ZlKCksXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIGxhYmVsLmlubmVySFRNTDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZUxhYmVsOyIsIi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZXxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gcmVzb2x2ZUxlZ2VuZCggbm9kZSApIHtcclxuXHRjb25zdCBsZWdlbmQgPSBub2RlLmNsb3Nlc3QoICdmaWVsZHNldCcgKT8ucXVlcnlTZWxlY3Rvcj8uKCAnbGVnZW5kJyApO1xyXG5cclxuXHRpZiAoICEgbGVnZW5kICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0bGVnZW5kLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScgKS5mb3JFYWNoKFxyXG5cdFx0aXRlbSA9PiBpdGVtLnJlbW92ZSgpLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiBsZWdlbmQuaW5uZXJIVE1MO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlTGVnZW5kOyIsIi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZXxFbGVtZW50fVxyXG4gKi9cclxuaW1wb3J0IHJlc29sdmVMYWJlbCBmcm9tICcuL3Jlc29sdmVMYWJlbCc7XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlT3B0aW9uTGFiZWwoIG9wdGlvbiApIHtcclxuXHRpZiAoICcjdGV4dCcgPT09IG9wdGlvbj8ubmV4dFNpYmxpbmc/Lm5vZGVOYW1lICkge1xyXG5cdFx0cmV0dXJuIG9wdGlvbi5uZXh0U2libGluZy5ub2RlVmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzb2x2ZUxhYmVsKCBvcHRpb24gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZU9wdGlvbkxhYmVsOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkb21SZWFkeVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCBkb21SZWFkeSBmcm9tICdAd29yZHByZXNzL2RvbS1yZWFkeSc7XHJcbmltcG9ydCBIdG1sUGFyc2VyQnV0dG9uIGZyb20gJy4vSHRtbFBhcnNlckJ1dHRvbic7XHJcblxyXG5kb21SZWFkeSggKCkgPT4ge1xyXG5cdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS10aXRsZS1hY3Rpb25baHJlZio9XCJwb3N0LW5ldy5waHBcIl0nICk7XHJcblxyXG5cdGlmICggISB0YXJnZXQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG5cdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuXHJcblx0dGFyZ2V0LmFmdGVyKCBjb250YWluZXIgKTtcclxuXHRjcmVhdGVSb290KCBjb250YWluZXIgKS5yZW5kZXIoXHJcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoIEh0bWxQYXJzZXJCdXR0b24gKVxyXG5cdCk7XHJcbn0gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=