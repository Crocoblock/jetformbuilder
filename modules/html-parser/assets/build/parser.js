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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDdlJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9nZXRGb3JtSW5uZXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vZ2V0SW5wdXROdW1iZXJBdHRycy5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9nZXRNaW1lVHlwZS5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9ub2RlLXBhcnNlcnMvYnV0dG9uUGFyc2VyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL25vZGUtcGFyc2Vycy9pbnB1dFBhcnNlci5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9ub2RlLXBhcnNlcnMvc2VsZWN0UGFyc2VyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uL25vZGUtcGFyc2Vycy90ZXh0QXJlYVBhcnNlci5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9wYXJzZUhUTUx0b0Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9yZXNvbHZlTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vcmVzb2x2ZUxlZ2VuZC5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi9yZXNvbHZlT3B0aW9uTGFiZWwuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1Jbm5lckhUTUwoIGh0bWxDb250ZW50ICkge1xyXG5cdGRpdi5pbm5lckhUTUwgPSBodG1sQ29udGVudC50cmltKCk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBkaXYucXVlcnlTZWxlY3RvciggJ2Zvcm0nICk7XHJcblxyXG5cdHJldHVybiBmb3JtLmlubmVySFRNTDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Rm9ybUlubmVySFRNTDsiLCJpbXBvcnQgcmVzb2x2ZUxhYmVsIGZyb20gJy4vcmVzb2x2ZUxhYmVsJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0hUTUxJbnB1dEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbnB1dE51bWJlckF0dHJzKCBpbnB1dCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdGRlZmF1bHQ6IGlucHV0LnZhbHVlLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMYWJlbCggaW5wdXQgKSxcclxuXHRcdHJlcXVpcmVkOiBpbnB1dC5yZXF1aXJlZCxcclxuXHR9O1xyXG5cclxuXHRpZiAoIGlucHV0Lmhhc0F0dHJpYnV0ZSggJ21pbicgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMubWluID0gaW5wdXQubWluO1xyXG5cdH1cclxuXHJcblx0aWYgKCBpbnB1dC5oYXNBdHRyaWJ1dGUoICdtYXgnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLm1heCA9IGlucHV0Lm1heDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhdHRyaWJ1dGVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRJbnB1dE51bWJlckF0dHJzOyIsImNvbnN0IHtcclxuXHQgICAgICBtaW1lcyxcclxuICAgICAgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclBhcnNlckNvbmZpZztcclxuXHJcbmZ1bmN0aW9uIGdldE1pbWVUeXBlKCBmaWxlbmFtZSApIHtcclxuXHRsZXQgdHlwZSA9IGZhbHNlO1xyXG5cclxuXHRmb3IgKCBjb25zdCBleHRQcmVnIGluIG1pbWVzICkge1xyXG5cdFx0aWYgKCAhbWltZXMuaGFzT3duUHJvcGVydHkoIGV4dFByZWcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCAnXFwuKCcgKyBleHRQcmVnICsgJykkJywgJ2knICk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEbyBub3QgcmV0dXJuIHRvbyBsYXRlLFxyXG5cdFx0ICogYmVjYXVzZSBzYW1lIGZpbGUgY2FuIG1hdGNoIG11bHRpcGxlIGV4dGVuc2lvbnNcclxuXHRcdCAqL1xyXG5cdFx0aWYgKCBmaWxlbmFtZS5tYXRjaCggcmVnZXggKSApIHtcclxuXHRcdFx0dHlwZSA9IG1pbWVzWyBleHRQcmVnIF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TWltZVR5cGU7IiwiZnVuY3Rpb24qIGJ1dHRvblBhcnNlciggYnV0dG9uICkge1xyXG5cdGJ1dHRvbi50eXBlID0gYnV0dG9uLnR5cGUgfHwgJ3N1Ym1pdCc7XHJcblxyXG5cdGlmICggJ3N1Ym1pdCcgIT09IGJ1dHRvbiApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvc3VibWl0LWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bGFiZWw6IGJ1dHRvbi5pbm5lckhUTUwudHJpbSgpLFxyXG5cdFx0XHRjbGFzc19uYW1lOiBidXR0b24uY2xhc3NOYW1lLFxyXG5cdFx0fSxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25QYXJzZXI7IiwiaW1wb3J0IHJlc29sdmVMYWJlbCBmcm9tICcuLi9yZXNvbHZlTGFiZWwnO1xyXG5pbXBvcnQgcmVzb2x2ZUxlZ2VuZCBmcm9tICcuLi9yZXNvbHZlTGVnZW5kJztcclxuaW1wb3J0IGdldElucHV0TnVtYmVyQXR0cnMgZnJvbSAnLi4vZ2V0SW5wdXROdW1iZXJBdHRycyc7XHJcbmltcG9ydCByZXNvbHZlT3B0aW9uTGFiZWwgZnJvbSAnLi4vcmVzb2x2ZU9wdGlvbkxhYmVsJztcclxuaW1wb3J0IGdldE1pbWVUeXBlIGZyb20gJy4uL2dldE1pbWVUeXBlJztcclxuXHJcbmNvbnN0IHR5cGVNYXAgPSB7XHJcblx0ZW1haWw6IHRleHRQYXJzZXIsXHJcblx0dGVsOiB0ZXh0UGFyc2VyLFxyXG5cdHVybDogdGV4dFBhcnNlcixcclxuXHRwYXNzd29yZDogdGV4dFBhcnNlcixcclxuXHR0ZXh0OiB0ZXh0UGFyc2VyLFxyXG5cdGNvbG9yOiBjb2xvclBpY2tlclBhcnNlcixcclxuXHRyYWRpbzogcmFkaW9QYXJzZXIsXHJcblx0Y2hlY2tib3g6IGNoZWNrYm94UGFyc2VyLFxyXG5cdGRhdGU6IGRhdGVQYXJzZXIsXHJcblx0ZGF0ZXRpbWU6IGRhdGVUaW1lUGFyc2VyLFxyXG5cdCdkYXRldGltZS1sb2NhbCc6IGRhdGVUaW1lUGFyc2VyLFxyXG5cdHRpbWU6IHRpbWVQYXJzZXIsXHJcblx0ZmlsZTogbWVkaWFQYXJzZXIsXHJcblx0aGlkZGVuOiBoaWRkZW5QYXJzZXIsXHJcblx0bnVtYmVyOiBudW1iZXJQYXJzZXIsXHJcblx0cmFuZ2U6IHJhbmdlUGFyc2VyLFxyXG5cdHN1Ym1pdDogc3VibWl0UGFyc2VyLFxyXG59O1xyXG5cclxuZnVuY3Rpb24qIGlucHV0UGFyc2VyKCBpbnB1dCApIHtcclxuXHRpbnB1dC50eXBlID0gaW5wdXQudHlwZSB8fCAndGV4dCc7XHJcblxyXG5cdGlmICggIXR5cGVNYXAuaGFzT3duUHJvcGVydHkoIGlucHV0LnR5cGUgKSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdlbmVyYXRvciA9IHR5cGVNYXBbIGlucHV0LnR5cGUgXTtcclxuXHJcblx0eWllbGQqIGdlbmVyYXRvciggaW5wdXQgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SFRNTElucHV0RWxlbWVudH1cclxuICogQHJldHVybnMge0dlbmVyYXRvcjwqLCAoc3RyaW5nfHtuYW1lLCBmaWVsZF90eXBlfSlbXSwgKj59XHJcbiAqL1xyXG5mdW5jdGlvbiogdGV4dFBhcnNlciggaW5wdXQgKSB7XHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHRcdGZpZWxkX3R5cGU6IGlucHV0LnR5cGUsXHJcblx0XHRuYW1lOiBpbnB1dC5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0ZGVmYXVsdDogaW5wdXQudmFsdWUsXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxhYmVsKCBpbnB1dCApLFxyXG5cdFx0cmVxdWlyZWQ6IGlucHV0LnJlcXVpcmVkLFxyXG5cdFx0cGxhY2Vob2xkZXI6IGlucHV0LnBsYWNlaG9sZGVyLFxyXG5cdH07XHJcblxyXG5cdGlmICggaW5wdXQuaGFzQXR0cmlidXRlKCAnbWF4bGVuZ3RoJyApICkge1xyXG5cdFx0YXR0cmlidXRlcy5tYXhsZW5ndGggPSBpbnB1dC5tYXhMZW5ndGg7XHJcblx0fVxyXG5cclxuXHRpZiAoIGlucHV0Lmhhc0F0dHJpYnV0ZSggJ21pbmxlbmd0aCcgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMubWlubGVuZ3RoID0gaW5wdXQubWluTGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SFRNTElucHV0RWxlbWVudH1cclxuICogQHJldHVybnMge0dlbmVyYXRvcjwqLCAoc3RyaW5nfHtuYW1lLCBmaWVsZF90eXBlfSlbXSwgKj59XHJcbiAqL1xyXG5mdW5jdGlvbiogY29sb3JQaWNrZXJQYXJzZXIoIGlucHV0ICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRuYW1lOiBpbnB1dC5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0ZGVmYXVsdDogaW5wdXQudmFsdWUsXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxhYmVsKCBpbnB1dCApLFxyXG5cdFx0cmVxdWlyZWQ6IGlucHV0LnJlcXVpcmVkLFxyXG5cdH07XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvY29sb3ItcGlja2VyLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SFRNTElucHV0RWxlbWVudH1cclxuICogQHJldHVybnMge0dlbmVyYXRvcjwqLCAoc3RyaW5nfHtuYW1lLCBmaWVsZF90eXBlfSlbXSwgKj59XHJcbiAqL1xyXG5mdW5jdGlvbiogcmFkaW9QYXJzZXIoIGlucHV0ICkge1xyXG5cdGlmICggaW5wdXQuamZiT2JzZXJ2ZWQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNvbnN0IHJvb3QgPSBpbnB1dC5nZXRSb290Tm9kZSgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudFtdfVxyXG5cdCAqL1xyXG5cdGNvbnN0IG9wdGlvbk5vZGVzID0gQXJyYXkuZnJvbShcclxuXHRcdHJvb3QucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0YGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJHsgaW5wdXQubmFtZSB9XCJdYCxcclxuXHRcdCksXHJcblx0KTtcclxuXHJcblx0Ly8gcHJldmVudCBwYXJzaW5nIGZ1dHVyZSByYWRpbyBub2Rlc1xyXG5cdG9wdGlvbk5vZGVzLmZvckVhY2goIG5vZGUgPT4geyBub2RlLmpmYk9ic2VydmVkID0gdHJ1ZTsgfSApO1xyXG5cclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdGZpZWxkX29wdGlvbnM6IFtdLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMZWdlbmQoIGlucHV0ICkgfHwgcmVzb2x2ZUxhYmVsKCBpbnB1dCApLFxyXG5cdFx0cmVxdWlyZWQ6IGlucHV0LnJlcXVpcmVkLFxyXG5cdH07XHJcblxyXG5cdGZvciAoIGNvbnN0IG9wdGlvbk5vZGUgb2Ygb3B0aW9uTm9kZXMgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMucHVzaCgge1xyXG5cdFx0XHR2YWx1ZTogb3B0aW9uTm9kZS52YWx1ZSxcclxuXHRcdFx0bGFiZWw6IHJlc29sdmVPcHRpb25MYWJlbCggb3B0aW9uTm9kZSApLFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGlmICggb3B0aW9uTm9kZS5jaGVja2VkICkge1xyXG5cdFx0XHRhdHRyaWJ1dGVzLmRlZmF1bHQgPSBvcHRpb25Ob2RlLnZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9yYWRpby1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0hUTUxJbnB1dEVsZW1lbnR9XHJcbiAqIEByZXR1cm5zIHtHZW5lcmF0b3I8KiwgKHN0cmluZ3x7bmFtZSwgZmllbGRfdHlwZX0pW10sICo+fVxyXG4gKi9cclxuZnVuY3Rpb24qIGNoZWNrYm94UGFyc2VyKCBpbnB1dCApIHtcclxuXHRpZiAoIGlucHV0LmpmYk9ic2VydmVkICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRjb25zdCByb290ID0gaW5wdXQuZ2V0Um9vdE5vZGUoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnRbXX1cclxuXHQgKi9cclxuXHRjb25zdCBvcHRpb25Ob2RlcyA9IEFycmF5LmZyb20oXHJcblx0XHRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHRcdGBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bbmFtZT1cIiR7IGlucHV0Lm5hbWUgfVwiXWAsXHJcblx0XHQpLFxyXG5cdCk7XHJcblxyXG5cdC8vIHByZXZlbnQgcGFyc2luZyBmdXR1cmUgcmFkaW8gbm9kZXNcclxuXHRvcHRpb25Ob2Rlcy5mb3JFYWNoKCBub2RlID0+IHsgbm9kZS5qZmJPYnNlcnZlZCA9IHRydWU7IH0gKTtcclxuXHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IHtcclxuXHRcdG5hbWU6IGlucHV0Lm5hbWUsXHJcblx0XHRjbGFzc19uYW1lOiBpbnB1dC5jbGFzc05hbWUsXHJcblx0XHRmaWVsZF9vcHRpb25zOiBbXSxcclxuXHRcdGxhYmVsOiByZXNvbHZlTGVnZW5kKCBpbnB1dCApIHx8IHJlc29sdmVMYWJlbCggaW5wdXQgKSxcclxuXHRcdHJlcXVpcmVkOiBpbnB1dC5yZXF1aXJlZCxcclxuXHR9O1xyXG5cclxuXHRmb3IgKCBjb25zdCBvcHRpb25Ob2RlIG9mIG9wdGlvbk5vZGVzICkge1xyXG5cdFx0YXR0cmlidXRlcy5maWVsZF9vcHRpb25zLnB1c2goIHtcclxuXHRcdFx0dmFsdWU6IG9wdGlvbk5vZGUudmFsdWUsXHJcblx0XHRcdGxhYmVsOiByZXNvbHZlT3B0aW9uTGFiZWwoIG9wdGlvbk5vZGUgKSxcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvY2hlY2tib3gtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiogZGF0ZVBhcnNlciggaW5wdXQgKSB7XHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9kYXRlLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXM6IGdldElucHV0TnVtYmVyQXR0cnMoIGlucHV0ICksXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGRhdGVUaW1lUGFyc2VyKCBpbnB1dCApIHtcclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL2RhdGV0aW1lLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXM6IGdldElucHV0TnVtYmVyQXR0cnMoIGlucHV0ICksXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHRpbWVQYXJzZXIoIGlucHV0ICkge1xyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvdGltZS1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzOiBnZXRJbnB1dE51bWJlckF0dHJzKCBpbnB1dCApLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBoaWRkZW5QYXJzZXIoIGlucHV0ICkge1xyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvaGlkZGVuLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdFx0Y2xhc3NfbmFtZTogaW5wdXQuY2xhc3NOYW1lLFxyXG5cdFx0XHRkZWZhdWx0OiBpbnB1dC52YWx1ZSxcclxuXHRcdH0sXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24qIG1lZGlhUGFyc2VyKCBpbnB1dCApIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG5cdFx0bmFtZTogaW5wdXQubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdGxhYmVsOiByZXNvbHZlTGFiZWwoIGlucHV0ICksXHJcblx0XHRyZXF1aXJlZDogaW5wdXQucmVxdWlyZWQsXHJcblx0XHRhbGxvd2VkX21pbWVzOiBbXSxcclxuXHR9O1xyXG5cclxuXHRhdHRyaWJ1dGVzLmFsbG93ZWRfbWltZXMgPSBpbnB1dC5hY2NlcHQuc3BsaXQoICcsJyApLm1hcChcclxuXHRcdHBhcnQgPT4gZ2V0TWltZVR5cGUoIHBhcnQudHJpbSgpICksXHJcblx0KTtcclxuXHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9tZWRpYS1maWVsZCcsXHJcblx0XHRhdHRyaWJ1dGVzLFxyXG5cdFx0aW5uZXJCbG9ja3M6IFtdLFxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBudW1iZXJQYXJzZXIoIGlucHV0ICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgICAgICAgPSBnZXRJbnB1dE51bWJlckF0dHJzKCBpbnB1dCApO1xyXG5cdGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgPSBpbnB1dC5wbGFjZWhvbGRlcjtcclxuXHJcblx0aWYgKCBpbnB1dC5oYXNBdHRyaWJ1dGUoICdzdGVwJyApICkge1xyXG5cdFx0YXR0cmlidXRlcy5zdGVwID0gaW5wdXQuc3RlcDtcclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvbnVtYmVyLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SFRNTElucHV0RWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uKiByYW5nZVBhcnNlciggaW5wdXQgKSB7XHJcblx0Y29uc3QgYXR0cmlidXRlcyA9IGdldElucHV0TnVtYmVyQXR0cnMoIGlucHV0ICk7XHJcblxyXG5cdGlmICggaW5wdXQuaGFzQXR0cmlidXRlKCAnc3RlcCcgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMuc3RlcCA9IGlucHV0LnN0ZXA7XHJcblx0fVxyXG5cclxuXHR5aWVsZCB7XHJcblx0XHRuYW1lOiAnamV0LWZvcm1zL3JhbmdlLWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHN1Ym1pdFBhcnNlciggaW5wdXQgKSB7XHJcblx0eWllbGQge1xyXG5cdFx0bmFtZTogJ2pldC1mb3Jtcy9zdWJtaXQtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlczoge1xyXG5cdFx0XHRsYWJlbDogaW5wdXQudmFsdWUgfHwgJ1N1Ym1pdCcsXHJcblx0XHRcdGNsYXNzX25hbWU6IGlucHV0LmNsYXNzTmFtZSxcclxuXHRcdH0sXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5wdXRQYXJzZXI7IiwiaW1wb3J0IHJlc29sdmVMYWJlbCBmcm9tICcuLi9yZXNvbHZlTGFiZWwnO1xyXG5cclxuZnVuY3Rpb24qIHNlbGVjdFBhcnNlciggc2VsZWN0ICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRuYW1lOiBzZWxlY3QubmFtZSxcclxuXHRcdGNsYXNzX25hbWU6IHNlbGVjdC5jbGFzc05hbWUsXHJcblx0XHRsYWJlbDogcmVzb2x2ZUxhYmVsKCBzZWxlY3QgKSxcclxuXHRcdHJlcXVpcmVkOiBzZWxlY3QucmVxdWlyZWQsXHJcblx0XHRmaWVsZF9vcHRpb25zOiBbXSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvcHRpb25FbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoIHNlbGVjdC5vcHRpb25zICk7XHJcblxyXG5cdGZvciAoIGNvbnN0IFsgaW5kZXgsIG9wdGlvbiBdIG9mIG9wdGlvbkVudHJpZXMgKSB7XHJcblx0XHRpZiAoIDAgPT09ICtpbmRleCAmJiAhb3B0aW9uLnZhbHVlICkge1xyXG5cdFx0XHRhdHRyaWJ1dGVzLnBsYWNlaG9sZGVyID0gb3B0aW9uLmxhYmVsO1xyXG5cclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0YXR0cmlidXRlcy5maWVsZF9vcHRpb25zLnB1c2goIHtcclxuXHRcdFx0dmFsdWU6IG9wdGlvbi52YWx1ZSxcclxuXHRcdFx0bGFiZWw6IG9wdGlvbi5sYWJlbCxcclxuXHRcdH0gKTtcclxuXHJcblx0XHRpZiAoICFvcHRpb24uc2VsZWN0ZWQgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGF0dHJpYnV0ZXMuZGVmYXVsdCA9IG9wdGlvbi52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvc2VsZWN0LWZpZWxkJyxcclxuXHRcdGF0dHJpYnV0ZXMsXHJcblx0XHRpbm5lckJsb2NrczogW10sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0UGFyc2VyOyIsImltcG9ydCByZXNvbHZlTGFiZWwgZnJvbSAnLi4vcmVzb2x2ZUxhYmVsJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gdGV4dGFyZWEge0hUTUxUZXh0QXJlYUVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiogdGV4dEFyZWFQYXJzZXIoIHRleHRhcmVhICkge1xyXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcblx0XHRuYW1lOiB0ZXh0YXJlYS5uYW1lLFxyXG5cdFx0Y2xhc3NfbmFtZTogdGV4dGFyZWEuY2xhc3NOYW1lLFxyXG5cdFx0bGFiZWw6IHJlc29sdmVMYWJlbCggdGV4dGFyZWEgKSxcclxuXHRcdHJlcXVpcmVkOiB0ZXh0YXJlYS5yZXF1aXJlZCxcclxuXHRcdHBsYWNlaG9sZGVyOiB0ZXh0YXJlYS5wbGFjZWhvbGRlcixcclxuXHR9O1xyXG5cclxuXHRpZiAoIHRleHRhcmVhLmhhc0F0dHJpYnV0ZSggJ21heGxlbmd0aCcgKSApIHtcclxuXHRcdGF0dHJpYnV0ZXMubWF4bGVuZ3RoID0gdGV4dGFyZWEubWF4TGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0aWYgKCB0ZXh0YXJlYS5oYXNBdHRyaWJ1dGUoICdtaW5sZW5ndGgnICkgKSB7XHJcblx0XHRhdHRyaWJ1dGVzLm1pbmxlbmd0aCA9IHRleHRhcmVhLm1pbkxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHlpZWxkIHtcclxuXHRcdG5hbWU6ICdqZXQtZm9ybXMvdGV4dGFyZWEtZmllbGQnLFxyXG5cdFx0YXR0cmlidXRlcyxcclxuXHRcdGlubmVyQmxvY2tzOiBbXSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZXh0QXJlYVBhcnNlcjsiLCJpbXBvcnQgaW5wdXRQYXJzZXIgZnJvbSAnLi9ub2RlLXBhcnNlcnMvaW5wdXRQYXJzZXInO1xyXG5pbXBvcnQgc2VsZWN0UGFyc2VyIGZyb20gJy4vbm9kZS1wYXJzZXJzL3NlbGVjdFBhcnNlcic7XHJcbmltcG9ydCB0ZXh0QXJlYVBhcnNlciBmcm9tICcuL25vZGUtcGFyc2Vycy90ZXh0QXJlYVBhcnNlcic7XHJcbmltcG9ydCBidXR0b25QYXJzZXIgZnJvbSAnLi9ub2RlLXBhcnNlcnMvYnV0dG9uUGFyc2VyJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnMsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3Qgbm9kZVBhcnNlcnMgPSB7XHJcblx0SU5QVVQ6IGlucHV0UGFyc2VyLFxyXG5cdFNFTEVDVDogc2VsZWN0UGFyc2VyLFxyXG5cdFRFWFRBUkVBOiB0ZXh0QXJlYVBhcnNlcixcclxuXHRCVVRUT046IGJ1dHRvblBhcnNlcixcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlSFRNTHRvQmxvY2tzKCBjb250ZW50ICkge1xyXG5cdGNvbnN0IGVsZW1lbnQgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuXHRlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblxyXG5cdGNvbnN0IGJsb2NrcyA9IFtdO1xyXG5cclxuXHQvLyBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCAtIGZvciBmaWVsZHMsIGFuZCBtYXliZSBzdWJtaXQgYnV0dG9uXHJcblx0Ly8gYnV0dG9uIC0gZm9yIHN1Ym1pdCBidXR0b25cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7Tm9kZVtdfVxyXG5cdCAqL1xyXG5cdGNvbnN0IGZpZWxkcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgYnV0dG9uJyxcclxuXHQpO1xyXG5cclxuXHRmb3IgKCBjb25zdCBmaWVsZCBvZiBmaWVsZHMgKSB7XHJcblx0XHQvLyBmb3IgdGhpcmQtcGFydHkgcGFyc2Vyc1xyXG5cdFx0Y29uc3QgcHJlQmxvY2tzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnBhcnNlLm5vZGUnLCBmYWxzZSwgZmllbGQgKTtcclxuXHJcblx0XHQvLyBzaG91bGQgYmUgYXJyYXkgb2YgYmxvY2tzXHJcblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHByZUJsb2NrcyApICkge1xyXG5cdFx0XHRibG9ja3MucHVzaCggLi4ucHJlQmxvY2tzICk7XHJcblxyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBnZW5lcmF0b3IgPSBub2RlUGFyc2Vyc1sgZmllbGQubm9kZU5hbWUgXTtcclxuXHJcblx0XHRibG9ja3MucHVzaCggLi4uQXJyYXkuZnJvbSggZ2VuZXJhdG9yKCBmaWVsZCApICkgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBibG9ja3M7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFyc2VIVE1MdG9CbG9ja3M7IiwiLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtOb2RlfEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlTGFiZWwoIG5vZGUgKSB7XHJcblx0bGV0IGxhYmVsID0gbm9kZS5jbG9zZXN0KCAnbGFiZWwnICk7XHJcblxyXG5cdC8vIHRyeSB0byBmaW5kIGxhYmVsXHJcblx0aWYgKCBub2RlLmlkICYmICFsYWJlbCApIHtcclxuXHRcdGNvbnN0IHJvb3QgPSBub2RlLmdldFJvb3ROb2RlKCk7XHJcblxyXG5cdFx0bGFiZWwgPSByb290LnF1ZXJ5U2VsZWN0b3IoIGBsYWJlbFtmb3I9XCIkeyBub2RlLmlkIH1cIl1gICk7XHJcblx0fVxyXG5cclxuXHRpZiAoICFsYWJlbCApIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGxhYmVsLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScgKS5mb3JFYWNoKFxyXG5cdFx0aXRlbSA9PiBpdGVtLnJlbW92ZSgpLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiBsYWJlbC5pbm5lckhUTUw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVMYWJlbDsiLCIvKipcclxuICogQHBhcmFtIG5vZGUge05vZGV8RWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIHJlc29sdmVMZWdlbmQoIG5vZGUgKSB7XHJcblx0Y29uc3QgbGVnZW5kID0gbm9kZS5jbG9zZXN0KCAnZmllbGRzZXQnICk/LnF1ZXJ5U2VsZWN0b3I/LiggJ2xlZ2VuZCcgKTtcclxuXHJcblx0aWYgKCAhIGxlZ2VuZCApIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGxlZ2VuZC5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnICkuZm9yRWFjaChcclxuXHRcdGl0ZW0gPT4gaXRlbS5yZW1vdmUoKSxcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gbGVnZW5kLmlubmVySFRNTDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZUxlZ2VuZDsiLCIvKipcclxuICogQHBhcmFtIG5vZGUge05vZGV8RWxlbWVudH1cclxuICovXHJcbmltcG9ydCByZXNvbHZlTGFiZWwgZnJvbSAnLi9yZXNvbHZlTGFiZWwnO1xyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbkxhYmVsKCBvcHRpb24gKSB7XHJcblx0aWYgKCAnI3RleHQnID09PSBvcHRpb24/Lm5leHRTaWJsaW5nPy5ub2RlTmFtZSApIHtcclxuXHRcdHJldHVybiBvcHRpb24ubmV4dFNpYmxpbmcubm9kZVZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc29sdmVMYWJlbCggb3B0aW9uICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVPcHRpb25MYWJlbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYXJzZUhUTUx0b0Jsb2NrcyBmcm9tICcuL3BhcnNlSFRNTHRvQmxvY2tzJztcclxuaW1wb3J0IHJlc29sdmVMYWJlbCBmcm9tICcuL3Jlc29sdmVMYWJlbCc7XHJcbmltcG9ydCBnZXRGb3JtSW5uZXJGaWVsZHMgZnJvbSAnLi9nZXRGb3JtSW5uZXJGaWVsZHMnO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyUGFyc2VyID0ge1xyXG5cdHBhcnNlSFRNTHRvQmxvY2tzLFxyXG5cdHJlc29sdmVMYWJlbCxcclxuXHRnZXRGb3JtSW5uZXJGaWVsZHMsXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==