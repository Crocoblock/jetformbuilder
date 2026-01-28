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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HtmlParserModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlParserModal */ "../../admin/HtmlParserModal.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function HtmlParserButton() {
  const [showModal, setShowModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "page-title-action",
    onClick: event => {
      event.preventDefault();
      setShowModal(true);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Import from HTML', 'jet-form-builder')), showModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HtmlParserModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setShowModal: setShowModal
  }));
}

/***/ }),

/***/ "../../admin/HtmlParserFooter.js":
/*!***************************************!*\
  !*** ../../admin/HtmlParserFooter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HtmlParserFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serialize */ "../../admin/serialize.js");






const {
  parseHTMLtoBlocks
} = JetFormBuilderParser;
const getPostEditUrl = id => {
  const url = new URL(JetFormBuilderAdmin.edit_url);
  url.searchParams.set('post', id);
  return url.href;
};
function HtmlParserFooter({
  clearHTML,
  rawHTML,
  setShowModal
}) {
  const [isBusy, setIsBusy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const createForm = async () => {
    setIsBusy(true);
    try {
      const blocks = parseHTMLtoBlocks(rawHTML);
      if (!blocks.length) {
        console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('JFB: Could not parse blocks', 'jet-form-builder'), rawHTML);
        setIsBusy(false);
        return;
      }
      const serialized = (0,_serialize__WEBPACK_IMPORTED_MODULE_5__["default"])(blocks);
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'POST',
        path: '/wp/v2/jet-form-builder',
        data: {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Imported HTML Form', 'jet-form-builder') + ' ' + new Date().toLocaleString('sv-SE').replace('T', ' '),
          content: serialized,
          status: 'publish'
        }
      });
      window.location.href = getPostEditUrl(response.id);
    } catch (error) {
      console.error('Failed to create form:', error);
      setIsBusy(false);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "space-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: clearHTML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: createForm,
    isBusy: isBusy,
    disabled: isBusy
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Create Form', 'jet-form-builder')));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HtmlParserFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HtmlParserFooter */ "../../admin/HtmlParserFooter.js");





const {
  parseHTMLtoBlocks,
  getFormInnerFields
} = JetFormBuilderParser;
function HtmlParserModal({
  setShowModal
}) {
  const [html, setHtml] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [formHTML, setFormHTML] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [isParsing, setParsing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const handleSubmit = () => {
    setParsing(true);
    setError('');
    try {
      const innerHTML = getFormInnerFields(html);
      const styledHTML = `
			<div class="jet-form-builder-html-parser-preview">
				<style>
					.jet-form-builder-html-parser-preview {
						pointer-events: none;
					}
					.jet-form-builder-html-parser-preview textarea,
					.jet-form-builder-html-parser-preview input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),
					.jet-form-builder-html-parser-preview select {
						display: block;
						width: 100% !important;
						max-width: 100% !important;
						margin-bottom: 10px;
					}
					.jet-form-builder-html-parser-preview label {
						display:block;
						margin-bottom:5px;
					}
					.jet-form-builder-html-parser-preview br {
						display:none;
					}
					.jet-form-builder-html-parser-preview input[type="submit"],
					.jet-form-builder-html-parser-preview button {
						display:block;
						border: none;
						background-color: #0071a1;
						color: #fff;
						padding: 10px 20px;
						cursor: pointer;
					}
				</style>
				${innerHTML}
			</div>
			`;
      setFormHTML(styledHTML);
    } catch (err) {
      console.error(err);
      setError(err?.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Failed to parse HTML.', 'jet-form-builder'));
    } finally {
      setParsing(false);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    style: {
      width: '60vw'
    },
    onRequestClose: () => setShowModal(false),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Import HTML Form', 'jet-form-builder'),
    className: "jfb-html-parser-modal"
  }, error && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: "error",
    isDismissible: true,
    onRemove: () => setError('')
  }, error), Boolean(formHTML.length) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: formHTML
    },
    style: {
      padding: '2em 1em',
      backgroundColor: '#f6f7f7',
      marginBottom: '1em'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HtmlParserFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clearHTML: () => setFormHTML(''),
    formHTML: formHTML,
    rawHTML: html,
    setShowModal: setShowModal
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Paste your HTML here', 'jet-form-builder'),
    value: html,
    onChange: setHtml,
    rows: 7
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: {
      listStyle: 'disc',
      paddingInlineStart: '1em'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You can use any HTML code that contains form elements, but only headings, form controls, and buttons will be parsed.', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`All the code you paste here will be parsed into a single Form, even if it contains more than one <form> tag.`, 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`The parser can only understand form elements and structure; it can't parse styling or behavior.`, 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "flex-end",
    style: {
      marginTop: '1em'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isPrimary: true,
    isBusy: isParsing,
    disabled: isParsing || !html.trim().length,
    onClick: handleSubmit
  }, isParsing ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Parsing...', 'jet-form-builder') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Parse HTML', 'jet-form-builder')))));
}

/***/ }),

/***/ "../../admin/serialize.js":
/*!********************************!*\
  !*** ../../admin/serialize.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertToCommentBlock({
  name,
  attributes
}) {
  const blockAttrs = JSON.stringify(attributes);
  return `<!-- wp:${name} ${blockAttrs} /-->`;
}

/**
 * @param blocks {Object[]}
 */
function serialize(blocks) {
  return blocks.map(convertToCommentBlock).join('\n\n');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serialize);

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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
  container.style.marginLeft = '4px';
  target.after(container);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container).render(wp.element.createElement(_HtmlParserButton__WEBPACK_IMPORTED_MODULE_2__["default"]));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBV0E7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9IdG1sUGFyc2VyQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9IdG1sUGFyc2VyRm9vdGVyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9IdG1sUGFyc2VyTW9kYWwuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJhcGlGZXRjaFwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRvbVJlYWR5XCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIdG1sUGFyc2VyTW9kYWwgZnJvbSAnLi9IdG1sUGFyc2VyTW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdG1sUGFyc2VyQnV0dG9uKCkge1xyXG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZyYWdtZW50PlxyXG5cdFx0XHQ8YVxyXG5cdFx0XHRcdGhyZWY9XCIjXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJwYWdlLXRpdGxlLWFjdGlvblwiXHJcblx0XHRcdFx0b25DbGljaz17ICggZXZlbnQgKSA9PiB7XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0c2V0U2hvd01vZGFsKCB0cnVlICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnSW1wb3J0IGZyb20gSFRNTCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHR7IHNob3dNb2RhbCAmJiA8SHRtbFBhcnNlck1vZGFsIHNldFNob3dNb2RhbD17IHNldFNob3dNb2RhbCB9IC8+IH1cclxuXHRcdDwvRnJhZ21lbnQ+XHJcblx0KTtcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJy4vc2VyaWFsaXplJztcclxuXHJcbmNvbnN0IHsgcGFyc2VIVE1MdG9CbG9ja3MgfSA9IEpldEZvcm1CdWlsZGVyUGFyc2VyO1xyXG5cclxuY29uc3QgZ2V0UG9zdEVkaXRVcmwgPSBpZCA9PiB7XHJcblx0Y29uc3QgdXJsID0gbmV3IFVSTCggSmV0Rm9ybUJ1aWxkZXJBZG1pbi5lZGl0X3VybCApO1xyXG5cdHVybC5zZWFyY2hQYXJhbXMuc2V0KCAncG9zdCcsIGlkICk7XHJcblxyXG5cdHJldHVybiB1cmwuaHJlZjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEh0bWxQYXJzZXJGb290ZXIoIHsgY2xlYXJIVE1MLCByYXdIVE1MLCBzZXRTaG93TW9kYWwgfSApIHtcclxuXHRjb25zdCBbIGlzQnVzeSwgc2V0SXNCdXN5IF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRjb25zdCBjcmVhdGVGb3JtID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0c2V0SXNCdXN5KCB0cnVlICk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBibG9ja3MgPSBwYXJzZUhUTUx0b0Jsb2NrcyggcmF3SFRNTCApO1xyXG5cclxuXHRcdFx0aWYgKCAhYmxvY2tzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBfXyggJ0pGQjogQ291bGQgbm90IHBhcnNlIGJsb2NrcycsICdqZXQtZm9ybS1idWlsZGVyJyApLCByYXdIVE1MICk7XHJcblx0XHRcdFx0c2V0SXNCdXN5KCBmYWxzZSApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZSggYmxvY2tzICk7XHJcblxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUZldGNoKCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0cGF0aDogJy93cC92Mi9qZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogX18oICdJbXBvcnRlZCBIVE1MIEZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyArIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ3N2LVNFJykucmVwbGFjZSgnVCcsICcgJyksXHJcblx0XHRcdFx0XHRjb250ZW50OiBzZXJpYWxpemVkLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAncHVibGlzaCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBnZXRQb3N0RWRpdFVybCggcmVzcG9uc2UuaWQgKTtcclxuXHJcblx0XHR9IGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoICdGYWlsZWQgdG8gY3JlYXRlIGZvcm06JywgZXJyb3IgKTtcclxuXHRcdFx0c2V0SXNCdXN5KCBmYWxzZSApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RmxleCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXHJcblx0XHRcdFx0b25DbGljaz17IGNsZWFySFRNTCB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnQmFjaycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXHJcblx0XHRcdFx0b25DbGljaz17IGNyZWF0ZUZvcm0gfVxyXG5cdFx0XHRcdGlzQnVzeT17IGlzQnVzeSB9XHJcblx0XHRcdFx0ZGlzYWJsZWQ9eyBpc0J1c3kgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBfXyggJ0NyZWF0ZSBGb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvRmxleD5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRGbGV4LFxyXG5cdE5vdGljZSxcclxuXHRNb2RhbCxcclxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IEh0bWxQYXJzZXJGb290ZXIgZnJvbSAnLi9IdG1sUGFyc2VyRm9vdGVyJztcclxuXHJcbmNvbnN0IHtcclxuXHRwYXJzZUhUTUx0b0Jsb2NrcyxcclxuXHRnZXRGb3JtSW5uZXJGaWVsZHMsXHJcbn0gPSBKZXRGb3JtQnVpbGRlclBhcnNlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEh0bWxQYXJzZXJNb2RhbCgge3NldFNob3dNb2RhbH0gKSB7XHJcblx0Y29uc3QgWyBodG1sLCBzZXRIdG1sIF0gICAgICAgICA9IHVzZVN0YXRlKCAnJyApO1xyXG5cdGNvbnN0IFsgZm9ybUhUTUwsIHNldEZvcm1IVE1MIF0gPSB1c2VTdGF0ZSggJycgKTtcclxuXHRjb25zdCBbIGlzUGFyc2luZywgc2V0UGFyc2luZyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSAgICAgICA9IHVzZVN0YXRlKCAnJyApO1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcblx0XHRzZXRQYXJzaW5nKCB0cnVlICk7XHJcblx0XHRzZXRFcnJvciggJycgKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBpbm5lckhUTUwgPSBnZXRGb3JtSW5uZXJGaWVsZHMoIGh0bWwgKTtcclxuXHJcblx0XHRcdGNvbnN0IHN0eWxlZEhUTUwgPSBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJqZXQtZm9ybS1idWlsZGVyLWh0bWwtcGFyc2VyLXByZXZpZXdcIj5cclxuXHRcdFx0XHQ8c3R5bGU+XHJcblx0XHRcdFx0XHQuamV0LWZvcm0tYnVpbGRlci1odG1sLXBhcnNlci1wcmV2aWV3IHtcclxuXHRcdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuamV0LWZvcm0tYnVpbGRlci1odG1sLXBhcnNlci1wcmV2aWV3IHRleHRhcmVhLFxyXG5cdFx0XHRcdFx0LmpldC1mb3JtLWJ1aWxkZXItaHRtbC1wYXJzZXItcHJldmlldyBpbnB1dDpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cInN1Ym1pdFwiXSksXHJcblx0XHRcdFx0XHQuamV0LWZvcm0tYnVpbGRlci1odG1sLXBhcnNlci1wcmV2aWV3IHNlbGVjdCB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5qZXQtZm9ybS1idWlsZGVyLWh0bWwtcGFyc2VyLXByZXZpZXcgbGFiZWwge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5qZXQtZm9ybS1idWlsZGVyLWh0bWwtcGFyc2VyLXByZXZpZXcgYnIge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuamV0LWZvcm0tYnVpbGRlci1odG1sLXBhcnNlci1wcmV2aWV3IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcblx0XHRcdFx0XHQuamV0LWZvcm0tYnVpbGRlci1odG1sLXBhcnNlci1wcmV2aWV3IGJ1dHRvbiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNzFhMTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdFx0JHtpbm5lckhUTUx9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRgO1xyXG5cclxuXHRcdFx0c2V0Rm9ybUhUTUwoIHN0eWxlZEhUTUwgKTtcclxuXHRcdH0gY2F0Y2ggKCBlcnIgKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGVyciApO1xyXG5cdFx0XHRzZXRFcnJvcihcclxuXHRcdFx0XHRlcnI/Lm1lc3NhZ2UgfHxcclxuXHRcdFx0XHRfXyggJ0ZhaWxlZCB0byBwYXJzZSBIVE1MLicsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0XHRcdCk7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRzZXRQYXJzaW5nKCBmYWxzZSApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TW9kYWxcclxuXHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnNjB2dycgfSB9XHJcblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gc2V0U2hvd01vZGFsKCBmYWxzZSApIH1cclxuXHRcdFx0dGl0bGU9eyBfXyggJ0ltcG9ydCBIVE1MIEZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImpmYi1odG1sLXBhcnNlci1tb2RhbFwiXHJcblx0XHQ+XHJcblx0XHRcdHsgZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxOb3RpY2VcclxuXHRcdFx0XHRcdHN0YXR1cz1cImVycm9yXCJcclxuXHRcdFx0XHRcdGlzRGlzbWlzc2libGVcclxuXHRcdFx0XHRcdG9uUmVtb3ZlPXsgKCkgPT4gc2V0RXJyb3IoICcnICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgZXJyb3IgfVxyXG5cdFx0XHRcdDwvTm90aWNlPlxyXG5cdFx0XHQpIH1cclxuXHJcblx0XHRcdHsgQm9vbGVhbiggZm9ybUhUTUwubGVuZ3RoICkgPyAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogZm9ybUhUTUwgfSB9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcyZW0gMWVtJyxcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZjZmN2Y3JyxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PEh0bWxQYXJzZXJGb290ZXJcclxuXHRcdFx0XHRcdFx0Y2xlYXJIVE1MPXsgKCkgPT4gc2V0Rm9ybUhUTUwoICcnICkgfVxyXG5cdFx0XHRcdFx0XHRmb3JtSFRNTD17IGZvcm1IVE1MIH1cclxuXHRcdFx0XHRcdFx0cmF3SFRNTD17IGh0bWwgfVxyXG5cdFx0XHRcdFx0XHRzZXRTaG93TW9kYWw9eyBzZXRTaG93TW9kYWwgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnUGFzdGUgeW91ciBIVE1MIGhlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgaHRtbCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0SHRtbCB9XHJcblx0XHRcdFx0XHRcdHJvd3M9eyA3IH1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PHVsIHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHRsaXN0U3R5bGU6ICdkaXNjJyxcclxuXHRcdFx0XHRcdFx0cGFkZGluZ0lubGluZVN0YXJ0OiAnMWVtJyxcclxuXHRcdFx0XHRcdH0gfT5cclxuXHRcdFx0XHRcdFx0PGxpPnsgX18oXHJcblx0XHRcdFx0XHRcdFx0J1lvdSBjYW4gdXNlIGFueSBIVE1MIGNvZGUgdGhhdCBjb250YWlucyBmb3JtIGVsZW1lbnRzLCBidXQgb25seSBoZWFkaW5ncywgZm9ybSBjb250cm9scywgYW5kIGJ1dHRvbnMgd2lsbCBiZSBwYXJzZWQuJyxcclxuXHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHRcdCkgfTwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaT57IF9fKFxyXG5cdFx0XHRcdFx0XHRcdGBBbGwgdGhlIGNvZGUgeW91IHBhc3RlIGhlcmUgd2lsbCBiZSBwYXJzZWQgaW50byBhIHNpbmdsZSBGb3JtLCBldmVuIGlmIGl0IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgPGZvcm0+IHRhZy5gLFxyXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdFx0KSB9PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPnsgX18oXHJcblx0XHRcdFx0XHRcdFx0YFRoZSBwYXJzZXIgY2FuIG9ubHkgdW5kZXJzdGFuZCBmb3JtIGVsZW1lbnRzIGFuZCBzdHJ1Y3R1cmU7IGl0IGNhbid0IHBhcnNlIHN0eWxpbmcgb3IgYmVoYXZpb3IuYCxcclxuXHRcdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHRcdCkgfTwvbGk+XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cclxuXHRcdFx0XHRcdDxGbGV4IGp1c3RpZnk9XCJmbGV4LWVuZFwiIHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcxZW0nIH0gfT5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0XHRcdGlzQnVzeT17IGlzUGFyc2luZyB9XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBpc1BhcnNpbmcgfHwgIWh0bWwudHJpbSgpLmxlbmd0aCB9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IGhhbmRsZVN1Ym1pdCB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7IGlzUGFyc2luZ1xyXG5cdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1BhcnNpbmcuLi4nLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG5cdFx0XHRcdFx0XHRcdFx0OiBfXyggJ1BhcnNlIEhUTUwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpIH1cclxuXHRcdDwvTW9kYWw+XHJcblx0KTtcclxufVxyXG4iLCJmdW5jdGlvbiBjb252ZXJ0VG9Db21tZW50QmxvY2soIHsgbmFtZSwgYXR0cmlidXRlcyB9ICkge1xyXG5cdGNvbnN0IGJsb2NrQXR0cnMgPSBKU09OLnN0cmluZ2lmeSggYXR0cmlidXRlcyApO1xyXG5cclxuXHRyZXR1cm4gYDwhLS0gd3A6JHsgbmFtZSB9ICR7IGJsb2NrQXR0cnMgfSAvLS0+YDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBibG9ja3Mge09iamVjdFtdfVxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplKCBibG9ja3MgKSB7XHJcblx0cmV0dXJuIGJsb2Nrcy5tYXAoIGNvbnZlcnRUb0NvbW1lbnRCbG9jayApLmpvaW4oICdcXG5cXG4nICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcmlhbGl6ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYXBpRmV0Y2hcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRvbVJlYWR5XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xyXG5pbXBvcnQgSHRtbFBhcnNlckJ1dHRvbiBmcm9tICcuL0h0bWxQYXJzZXJCdXR0b24nO1xyXG5cclxuZG9tUmVhZHkoICgpID0+IHtcclxuXHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2UtdGl0bGUtYWN0aW9uW2hyZWYqPVwicG9zdC1uZXcucGhwXCJdJyApO1xyXG5cclxuXHRpZiAoICEgdGFyZ2V0ICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuXHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XHJcblx0Y29udGFpbmVyLnN0eWxlLm1hcmdpbkxlZnQgPSAnNHB4JztcclxuXHJcblx0dGFyZ2V0LmFmdGVyKCBjb250YWluZXIgKTtcclxuXHRjcmVhdGVSb290KCBjb250YWluZXIgKS5yZW5kZXIoXHJcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoIEh0bWxQYXJzZXJCdXR0b24gKVxyXG5cdCk7XHJcbn0gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=