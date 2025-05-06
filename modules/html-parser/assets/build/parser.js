/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./getFormInnerFields.js":
/*!*******************************!*\
  !*** ./getFormInnerFields.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const div = document.createElement('div');
function getFormInnerHTML(htmlContent) {
  div.innerHTML = htmlContent.trim();
  const form = div.querySelector('form');
  return form.innerHTML;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFormInnerHTML);

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
  if (!button.type || button.type && button.type !== 'submit') {
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseHTMLtoBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseHTMLtoBlocks */ "./parseHTMLtoBlocks.js");
/* harmony import */ var _resolveLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveLabel */ "./resolveLabel.js");
/* harmony import */ var _getFormInnerFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFormInnerFields */ "./getFormInnerFields.js");



window.JetFormBuilderParser = {
  parseHTMLtoBlocks: _parseHTMLtoBlocks__WEBPACK_IMPORTED_MODULE_0__["default"],
  resolveLabel: _resolveLabel__WEBPACK_IMPORTED_MODULE_1__["default"],
  getFormInnerFields: _getFormInnerFields__WEBPACK_IMPORTED_MODULE_2__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdlJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9nZXRGb3JtSW5uZXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vZ2V0SW5wdXROdW1iZXJBdHRycy5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9nZXRNaW1lVHlwZS5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9ub2RlLXBhcnNlcnMvYnV0dG9uUGFyc2VyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL25vZGUtcGFyc2Vycy9pbnB1dFBhcnNlci5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9ub2RlLXBhcnNlcnMvc2VsZWN0UGFyc2VyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL25vZGUtcGFyc2Vycy90ZXh0QXJlYVBhcnNlci5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9wYXJzZUhUTUx0b0Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9yZXNvbHZlTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vcmVzb2x2ZUxlZ2VuZC5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9yZXNvbHZlT3B0aW9uTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1Jbm5lckhUTUwoIGh0bWxDb250ZW50ICkge1xyXG5cdGRpdi5pbm5lckhUTUwgPSBodG1sQ29udGVudC50cmltKCk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBkaXYucXVlcnlTZWxlY3RvciggJ2Zvcm0nICk7XHJcblxyXG5cdHJldHVybiBmb3JtLmlubmVySFRNTDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9ybUlubmVySFRNTDsiLCJpbXBvcnQgcmVzb2x2ZUxhYmVsIGZyb20gJy4vcmVzb2x2ZUxhYmVsJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0hUTUxJbnB1dEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbnB1dE51bWJlckF0dHJzKCBpbnB1dCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdGRlZmF1bHQ6IGlucHV0LnZhbHVlLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMYWJlbCggaW5wdXQgKSxcclxuXHRcdHJlcXVpcmVkOiBpbnB1dC5yZXF1aXJlZCxcclxuXHR9O1xyXG5cclxuXHRpZiAoIGlucHV0Lmhhc0F0dHJpYnV0ZSggJ21pbicgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMubWluID0gaW5wdXQubWluO1xyXG5cdH1cclxuXHJcblx0aWYgKCBpbnB1dC5oYXNBdHRyaWJ1dGUoICdtYXgnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLm1heCA9IGlucHV0Lm1heDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhdHRyaWJ1dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRJbnB1dE51bWJlckF0dHJzOyIsImNvbnN0IHtcclxuXHQgICAgICBtaW1lcyxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclBhcnNlckNvbmZpZztcclxuXHJcbmZ1bmN0aW9uIGdldE1pbWVUeXBlKCBmaWxlbmFtZSApIHtcclxuXHRsZXQgdHlwZSA9IGZhbHNlO1xyXG5cclxuXHRmb3IgKCBjb25zdCBleHRQcmVnIGluIG1pbWVzICkge1xyXG5cdFx0aWYgKCAhbWltZXMuaGFzT3duUHJvcGVydHkoIGV4dFByZWcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCAnXFwuKCcgKyBleHRQcmVnICsgJykkJywgJ2knICk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEbyBub3QgcmV0dXJuIHRvbyBsYXRlLFxyXG5cdFx0ICogYmVjYXVzZSBzYW1lIGZpbGUgY2FuIG1hdGNoIG11bHRpcGxlIGV4dGVuc2lvbnNcclxuXHRcdCAqL1xyXG5cdFx0aWYgKCBmaWxlbmFtZS5tYXRjaCggcmVnZXggKSApIHtcclxuXHRcdFx0dHlwZSA9IG1pbWVzWyBleHRQcmVnIF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TWltZVR5cGU7IiwiZnVuY3Rpb24qIGJ1dHRvblBhcnNlciggYnV0dG9uICkge1xyXG5cdGlmICghYnV0dG9uLnR5cGUgfHwgYnV0dG9uLnR5cGUgJiYgYnV0dG9uLnR5cGUgIT09ICdzdWJtaXQnKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3N1Ym1pdC1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGxhYmVsOiBidXR0b24uaW5uZXJIVE1MLnRyaW0oKSxcclxuXHRcdFx0Y2xhc3NfbmFtZTogYnV0dG9uLmNsYXNzTmFtZSxcclxuXHRcdH0sXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uUGFyc2VyOyIsImltcG9ydCByZXNvbHZlTGFiZWwgZnJvbSAnLi4vcmVzb2x2ZUxhYmVsJztcclxuaW1wb3J0IHJlc29sdmVMZWdlbmQgZnJvbSAnLi4vcmVzb2x2ZUxlZ2VuZCc7XHJcbmltcG9ydCBnZXRJbnB1dE51bWJlckF0dHJzIGZyb20gJy4uL2dldElucHV0TnVtYmVyQXR0cnMnO1xyXG5pbXBvcnQgcmVzb2x2ZU9wdGlvbkxhYmVsIGZyb20gJy4uL3Jlc29sdmVPcHRpb25MYWJlbCc7XHJcbmltcG9ydCBnZXRNaW1lVHlwZSBmcm9tICcuLi9nZXRNaW1lVHlwZSc7XHJcblxyXG5jb25zdCB0eXBlTWFwID0ge1xyXG5cdGVtYWlsOiB0ZXh0UGFyc2VyLFxyXG5cdHRlbDogdGV4dFBhcnNlcixcclxuXHR1cmw6IHRleHRQYXJzZXIsXHJcblx0cGFzc3dvcmQ6IHRleHRQYXJzZXIsXHJcblx0dGV4dDogdGV4dFBhcnNlcixcclxuXHRjb2xvcjogY29sb3JQaWNrZXJQYXJzZXIsXHJcblx0cmFkaW86IHJhZGlvUGFyc2VyLFxyXG5cdGNoZWNrYm94OiBjaGVja2JveFBhcnNlcixcclxuXHRkYXRlOiBkYXRlUGFyc2VyLFxyXG5cdGRhdGV0aW1lOiBkYXRlVGltZVBhcnNlcixcclxuXHQnZGF0ZXRpbWUtbG9jYWwnOiBkYXRlVGltZVBhcnNlcixcclxuXHR0aW1lOiB0aW1lUGFyc2VyLFxyXG5cdGZpbGU6IG1lZGlhUGFyc2VyLFxyXG5cdGhpZGRlbjogaGlkZGVuUGFyc2VyLFxyXG5cdG51bWJlcjogbnVtYmVyUGFyc2VyLFxyXG5cdHJhbmdlOiByYW5nZVBhcnNlcixcclxuXHRzdWJtaXQ6IHN1Ym1pdFBhcnNlcixcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBpbnB1dFBhcnNlciggaW5wdXQgKSB7XHJcblx0aW5wdXQudHlwZSA9IGlucHV0LnR5cGUgfHwgJ3RleHQnO1xyXG5cclxuXHRpZiAoICF0eXBlTWFwLmhhc093blByb3BlcnR5KCBpbnB1dC50eXBlICkgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZW5lcmF0b3IgPSB0eXBlTWFwWyBpbnB1dC50eXBlIF07XHJcblxyXG5cdHlpZWxkKiBnZW5lcmF0b3IoIGlucHV0ICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0hUTUxJbnB1dEVsZW1lbnR9XHJcbiAqIEByZXR1cm5zIHtHZW5lcmF0b3I8KiwgKHN0cmluZ3x7bmFtZSwgZmllbGRfdHlwZX0pW10sICo+fVxyXG4gKi9cclxuZnVuY3Rpb24qIHRleHRQYXJzZXIoIGlucHV0ICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRmaWVsZF90eXBlOiBpbnB1dC50eXBlLFxyXG5cdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdGRlZmF1bHQ6IGlucHV0LnZhbHVlLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMYWJlbCggaW5wdXQgKSxcclxuXHRcdHJlcXVpcmVkOiBpbnB1dC5yZXF1aXJlZCxcclxuXHRcdHBsYWNlaG9sZGVyOiBpbnB1dC5wbGFjZWhvbGRlcixcclxuXHR9O1xyXG5cclxuXHRpZiAoIGlucHV0Lmhhc0F0dHJpYnV0ZSggJ21heGxlbmd0aCcgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMubWF4bGVuZ3RoID0gaW5wdXQubWF4TGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0aWYgKCBpbnB1dC5oYXNBdHRyaWJ1dGUoICdtaW5sZW5ndGgnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLm1pbmxlbmd0aCA9IGlucHV0Lm1pbkxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0hUTUxJbnB1dEVsZW1lbnR9XHJcbiAqIEByZXR1cm5zIHtHZW5lcmF0b3I8KiwgKHN0cmluZ3x7bmFtZSwgZmllbGRfdHlwZX0pW10sICo+fVxyXG4gKi9cclxuZnVuY3Rpb24qIGNvbG9yUGlja2VyUGFyc2VyKCBpbnB1dCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdGRlZmF1bHQ6IGlucHV0LnZhbHVlLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMYWJlbCggaW5wdXQgKSxcclxuXHRcdHJlcXVpcmVkOiBpbnB1dC5yZXF1aXJlZCxcclxuXHR9O1xyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL2NvbG9yLXBpY2tlci1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0hUTUxJbnB1dEVsZW1lbnR9XHJcbiAqIEByZXR1cm5zIHtHZW5lcmF0b3I8KiwgKHN0cmluZ3x7bmFtZSwgZmllbGRfdHlwZX0pW10sICo+fVxyXG4gKi9cclxuZnVuY3Rpb24qIHJhZGlvUGFyc2VyKCBpbnB1dCApIHtcclxuXHRpZiAoIGlucHV0LmpmYk9ic2VydmVkICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRjb25zdCByb290ID0gaW5wdXQuZ2V0Um9vdE5vZGUoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX1cclxuXHQgKi9cclxuXHRjb25zdCBvcHRpb25Ob2RlcyA9IEFycmF5LmZyb20oXHJcblx0XHRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7IGlucHV0Lm5hbWUgfVwiXWAsXHJcblx0XHQpLFxyXG5cdCk7XHJcblxyXG5cdC8vIHByZXZlbnQgcGFyc2luZyBmdXR1cmUgcmFkaW8gbm9kZXNcclxuXHRvcHRpb25Ob2Rlcy5mb3JFYWNoKCBub2RlID0+IHsgbm9kZS5qZmJPYnNlcnZlZCA9IHRydWU7IH0gKTtcclxuXHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHRcdG5hbWU6IGlucHV0Lm5hbWUsXHJcblx0XHRjbGFzc19uYW1lOiBpbnB1dC5jbGFzc05hbWUsXHJcblx0XHRmaWVsZF9vcHRpb25zOiBbXSxcclxuXHRcdGxhYmVsOiByZXNvbHZlTGVnZW5kKCBpbnB1dCApIHx8IHJlc29sdmVMYWJlbCggaW5wdXQgKSxcclxuXHRcdHJlcXVpcmVkOiBpbnB1dC5yZXF1aXJlZCxcclxuXHR9O1xyXG5cclxuXHRmb3IgKCBjb25zdCBvcHRpb25Ob2RlIG9mIG9wdGlvbk5vZGVzICkge1xyXG5cdFx0YXR0cmlidXRlcy5maWVsZF9vcHRpb25zLnB1c2goIHtcclxuXHRcdFx0dmFsdWU6IG9wdGlvbk5vZGUudmFsdWUsXHJcblx0XHRcdGxhYmVsOiByZXNvbHZlT3B0aW9uTGFiZWwoIG9wdGlvbk5vZGUgKSxcclxuXHRcdH0gKTtcclxuXHJcblx0XHRpZiAoIG9wdGlvbk5vZGUuY2hlY2tlZCApIHtcclxuXHRcdFx0YXR0cmlidXRlcy5kZWZhdWx0ID0gb3B0aW9uTm9kZS52YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvcmFkaW8tZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtIVE1MSW5wdXRFbGVtZW50fVxyXG4gKiBAcmV0dXJucyB7R2VuZXJhdG9yPCosIChzdHJpbmd8e25hbWUsIGZpZWxkX3R5cGV9KVtdLCAqPn1cclxuICovXHJcbmZ1bmN0aW9uKiBjaGVja2JveFBhcnNlciggaW5wdXQgKSB7XHJcblx0aWYgKCBpbnB1dC5qZmJPYnNlcnZlZCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3Qgcm9vdCA9IGlucHV0LmdldFJvb3ROb2RlKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50W119XHJcblx0ICovXHJcblx0Y29uc3Qgb3B0aW9uTm9kZXMgPSBBcnJheS5mcm9tKFxyXG5cdFx0cm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW25hbWU9XCIkeyBpbnB1dC5uYW1lIH1cIl1gLFxyXG5cdFx0KSxcclxuXHQpO1xyXG5cclxuXHQvLyBwcmV2ZW50IHBhcnNpbmcgZnV0dXJlIHJhZGlvIG5vZGVzXHJcblx0b3B0aW9uTm9kZXMuZm9yRWFjaCggbm9kZSA9PiB7IG5vZGUuamZiT2JzZXJ2ZWQgPSB0cnVlOyB9ICk7XHJcblxyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRuYW1lOiBpbnB1dC5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0ZmllbGRfb3B0aW9uczogW10sXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxlZ2VuZCggaW5wdXQgKSB8fCByZXNvbHZlTGFiZWwoIGlucHV0ICksXHJcblx0XHRyZXF1aXJlZDogaW5wdXQucmVxdWlyZWQsXHJcblx0fTtcclxuXHJcblx0Zm9yICggY29uc3Qgb3B0aW9uTm9kZSBvZiBvcHRpb25Ob2RlcyApIHtcclxuXHRcdGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucy5wdXNoKCB7XHJcblx0XHRcdHZhbHVlOiBvcHRpb25Ob2RlLnZhbHVlLFxyXG5cdFx0XHRsYWJlbDogcmVzb2x2ZU9wdGlvbkxhYmVsKCBvcHRpb25Ob2RlICksXHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL2NoZWNrYm94LWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGRhdGVQYXJzZXIoIGlucHV0ICkge1xyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvZGF0ZS1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzOiBnZXRJbnB1dE51bWJlckF0dHJzKCBpbnB1dCApLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkYXRlVGltZVBhcnNlciggaW5wdXQgKSB7XHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9kYXRldGltZS1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzOiBnZXRJbnB1dE51bWJlckF0dHJzKCBpbnB1dCApLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB0aW1lUGFyc2VyKCBpbnB1dCApIHtcclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3RpbWUtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlczogZ2V0SW5wdXROdW1iZXJBdHRycyggaW5wdXQgKSxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiogaGlkZGVuUGFyc2VyKCBpbnB1dCApIHtcclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL2hpZGRlbi1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdG5hbWU6IGlucHV0Lm5hbWUsXHJcblx0XHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdFx0ZGVmYXVsdDogaW5wdXQudmFsdWUsXHJcblx0XHR9LFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBtZWRpYVBhcnNlciggaW5wdXQgKSB7XHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHRcdG5hbWU6IGlucHV0Lm5hbWUsXHJcblx0XHRjbGFzc19uYW1lOiBpbnB1dC5jbGFzc05hbWUsXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxhYmVsKCBpbnB1dCApLFxyXG5cdFx0cmVxdWlyZWQ6IGlucHV0LnJlcXVpcmVkLFxyXG5cdFx0YWxsb3dlZF9taW1lczogW10sXHJcblx0fTtcclxuXHJcblx0YXR0cmlidXRlcy5hbGxvd2VkX21pbWVzID0gaW5wdXQuYWNjZXB0LnNwbGl0KCAnLCcgKS5tYXAoXHJcblx0XHRwYXJ0ID0+IGdldE1pbWVUeXBlKCBwYXJ0LnRyaW0oKSApLFxyXG5cdCk7XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvbWVkaWEtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiogbnVtYmVyUGFyc2VyKCBpbnB1dCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzICAgICAgID0gZ2V0SW5wdXROdW1iZXJBdHRycyggaW5wdXQgKTtcclxuXHRhdHRyaWJ1dGVzLnBsYWNlaG9sZGVyID0gaW5wdXQucGxhY2Vob2xkZXI7XHJcblxyXG5cdGlmICggaW5wdXQuaGFzQXR0cmlidXRlKCAnc3RlcCcgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMuc3RlcCA9IGlucHV0LnN0ZXA7XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL251bWJlci1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0hUTUxJbnB1dEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiogcmFuZ2VQYXJzZXIoIGlucHV0ICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBnZXRJbnB1dE51bWJlckF0dHJzKCBpbnB1dCApO1xyXG5cclxuXHRpZiAoIGlucHV0Lmhhc0F0dHJpYnV0ZSggJ3N0ZXAnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLnN0ZXAgPSBpbnB1dC5zdGVwO1xyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9yYW5nZS1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzdWJtaXRQYXJzZXIoIGlucHV0ICkge1xyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6IGlucHV0LnZhbHVlIHx8ICdTdWJtaXQnLFxyXG5cdFx0XHRjbGFzc19uYW1lOiBpbnB1dC5jbGFzc05hbWUsXHJcblx0XHR9LFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlucHV0UGFyc2VyOyIsImltcG9ydCByZXNvbHZlTGFiZWwgZnJvbSAnLi4vcmVzb2x2ZUxhYmVsJztcclxuXHJcbmZ1bmN0aW9uKiBzZWxlY3RQYXJzZXIoIHNlbGVjdCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogc2VsZWN0Lm5hbWUsXHJcblx0XHRjbGFzc19uYW1lOiBzZWxlY3QuY2xhc3NOYW1lLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMYWJlbCggc2VsZWN0ICksXHJcblx0XHRyZXF1aXJlZDogc2VsZWN0LnJlcXVpcmVkLFxyXG5cdFx0ZmllbGRfb3B0aW9uczogW10sXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3B0aW9uRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKCBzZWxlY3Qub3B0aW9ucyApO1xyXG5cclxuXHRmb3IgKCBjb25zdCBbIGluZGV4LCBvcHRpb24gXSBvZiBvcHRpb25FbnRyaWVzICkge1xyXG5cdFx0aWYgKCAwID09PSAraW5kZXggJiYgIW9wdGlvbi52YWx1ZSApIHtcclxuXHRcdFx0YXR0cmlidXRlcy5wbGFjZWhvbGRlciA9IG9wdGlvbi5sYWJlbDtcclxuXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucy5wdXNoKCB7XHJcblx0XHRcdHZhbHVlOiBvcHRpb24udmFsdWUsXHJcblx0XHRcdGxhYmVsOiBvcHRpb24ubGFiZWwsXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0aWYgKCAhb3B0aW9uLnNlbGVjdGVkICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRhdHRyaWJ1dGVzLmRlZmF1bHQgPSBvcHRpb24udmFsdWU7XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3NlbGVjdC1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdFBhcnNlcjsiLCJpbXBvcnQgcmVzb2x2ZUxhYmVsIGZyb20gJy4uL3Jlc29sdmVMYWJlbCc7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHRleHRhcmVhIHtIVE1MVGV4dEFyZWFFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24qIHRleHRBcmVhUGFyc2VyKCB0ZXh0YXJlYSApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogdGV4dGFyZWEubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IHRleHRhcmVhLmNsYXNzTmFtZSxcclxuXHRcdGxhYmVsOiByZXNvbHZlTGFiZWwoIHRleHRhcmVhICksXHJcblx0XHRyZXF1aXJlZDogdGV4dGFyZWEucmVxdWlyZWQsXHJcblx0XHRwbGFjZWhvbGRlcjogdGV4dGFyZWEucGxhY2Vob2xkZXIsXHJcblx0fTtcclxuXHJcblx0aWYgKCB0ZXh0YXJlYS5oYXNBdHRyaWJ1dGUoICdtYXhsZW5ndGgnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLm1heGxlbmd0aCA9IHRleHRhcmVhLm1heExlbmd0aDtcclxuXHR9XHJcblxyXG5cdGlmICggdGV4dGFyZWEuaGFzQXR0cmlidXRlKCAnbWlubGVuZ3RoJyApICkge1xyXG5cdFx0YXR0cmlidXRlcy5taW5sZW5ndGggPSB0ZXh0YXJlYS5taW5MZW5ndGg7XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3RleHRhcmVhLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGV4dEFyZWFQYXJzZXI7IiwiaW1wb3J0IGlucHV0UGFyc2VyIGZyb20gJy4vbm9kZS1wYXJzZXJzL2lucHV0UGFyc2VyJztcclxuaW1wb3J0IHNlbGVjdFBhcnNlciBmcm9tICcuL25vZGUtcGFyc2Vycy9zZWxlY3RQYXJzZXInO1xyXG5pbXBvcnQgdGV4dEFyZWFQYXJzZXIgZnJvbSAnLi9ub2RlLXBhcnNlcnMvdGV4dEFyZWFQYXJzZXInO1xyXG5pbXBvcnQgYnV0dG9uUGFyc2VyIGZyb20gJy4vbm9kZS1wYXJzZXJzL2J1dHRvblBhcnNlcic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IG5vZGVQYXJzZXJzID0ge1xyXG5cdElOUFVUOiBpbnB1dFBhcnNlcixcclxuXHRTRUxFQ1Q6IHNlbGVjdFBhcnNlcixcclxuXHRURVhUQVJFQTogdGV4dEFyZWFQYXJzZXIsXHJcblx0QlVUVE9OOiBidXR0b25QYXJzZXIsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZUhUTUx0b0Jsb2NrcyggY29udGVudCApIHtcclxuXHRjb25zdCBlbGVtZW50ICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG5cclxuXHRjb25zdCBibG9ja3MgPSBbXTtcclxuXHJcblx0Ly8gaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QgLSBmb3IgZmllbGRzLCBhbmQgbWF5YmUgc3VibWl0IGJ1dHRvblxyXG5cdC8vIGJ1dHRvbiAtIGZvciBzdWJtaXQgYnV0dG9uXHJcblx0LyoqXHJcblx0ICogQHR5cGUge05vZGVbXX1cclxuXHQgKi9cclxuXHRjb25zdCBmaWVsZHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHQnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbicsXHJcblx0KTtcclxuXHJcblx0Zm9yICggY29uc3QgZmllbGQgb2YgZmllbGRzICkge1xyXG5cdFx0Ly8gZm9yIHRoaXJkLXBhcnR5IHBhcnNlcnNcclxuXHRcdGNvbnN0IHByZUJsb2NrcyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5wYXJzZS5ub2RlJywgZmFsc2UsIGZpZWxkICk7XHJcblxyXG5cdFx0Ly8gc2hvdWxkIGJlIGFycmF5IG9mIGJsb2Nrc1xyXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwcmVCbG9ja3MgKSApIHtcclxuXHRcdFx0YmxvY2tzLnB1c2goIC4uLnByZUJsb2NrcyApO1xyXG5cclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZ2VuZXJhdG9yID0gbm9kZVBhcnNlcnNbIGZpZWxkLm5vZGVOYW1lIF07XHJcblxyXG5cdFx0YmxvY2tzLnB1c2goIC4uLkFycmF5LmZyb20oIGdlbmVyYXRvciggZmllbGQgKSApICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYmxvY2tzO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlSFRNTHRvQmxvY2tzOyIsIi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7Tm9kZXxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gcmVzb2x2ZUxhYmVsKCBub2RlICkge1xyXG5cdGxldCBsYWJlbCA9IG5vZGUuY2xvc2VzdCggJ2xhYmVsJyApO1xyXG5cclxuXHQvLyB0cnkgdG8gZmluZCBsYWJlbFxyXG5cdGlmICggbm9kZS5pZCAmJiAhbGFiZWwgKSB7XHJcblx0XHRjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSgpO1xyXG5cclxuXHRcdGxhYmVsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCBgbGFiZWxbZm9yPVwiJHsgbm9kZS5pZCB9XCJdYCApO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhbGFiZWwgKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRsYWJlbC5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnICkuZm9yRWFjaChcclxuXHRcdGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSxcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gbGFiZWwuaW5uZXJIVE1MO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlTGFiZWw7IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtOb2RlfEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlTGVnZW5kKCBub2RlICkge1xyXG5cdGNvbnN0IGxlZ2VuZCA9IG5vZGUuY2xvc2VzdCggJ2ZpZWxkc2V0JyApPy5xdWVyeVNlbGVjdG9yPy4oICdsZWdlbmQnICk7XHJcblxyXG5cdGlmICggISBsZWdlbmQgKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRsZWdlbmQucXVlcnlTZWxlY3RvckFsbCggJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyApLmZvckVhY2goXHJcblx0XHRpdGVtID0+IGl0ZW0ucmVtb3ZlKCksXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIGxlZ2VuZC5pbm5lckhUTUw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVMZWdlbmQ7IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtOb2RlfEVsZW1lbnR9XHJcbiAqL1xyXG5pbXBvcnQgcmVzb2x2ZUxhYmVsIGZyb20gJy4vcmVzb2x2ZUxhYmVsJztcclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVPcHRpb25MYWJlbCggb3B0aW9uICkge1xyXG5cdGlmICggJyN0ZXh0JyA9PT0gb3B0aW9uPy5uZXh0U2libGluZz8ubm9kZU5hbWUgKSB7XHJcblx0XHRyZXR1cm4gb3B0aW9uLm5leHRTaWJsaW5nLm5vZGVWYWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNvbHZlTGFiZWwoIG9wdGlvbiApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlT3B0aW9uTGFiZWw7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFyc2VIVE1MdG9CbG9ja3MgZnJvbSAnLi9wYXJzZUhUTUx0b0Jsb2Nrcyc7XHJcbmltcG9ydCByZXNvbHZlTGFiZWwgZnJvbSAnLi9yZXNvbHZlTGFiZWwnO1xyXG5pbXBvcnQgZ2V0Rm9ybUlubmVyRmllbGRzIGZyb20gJy4vZ2V0Rm9ybUlubmVyRmllbGRzJztcclxuXHJcbndpbmRvdy5KZXRGb3JtQnVpbGRlclBhcnNlciA9IHtcclxuXHRwYXJzZUhUTUx0b0Jsb2NrcyxcclxuXHRyZXNvbHZlTGFiZWwsXHJcblx0Z2V0Rm9ybUlubmVyRmllbGRzLFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=