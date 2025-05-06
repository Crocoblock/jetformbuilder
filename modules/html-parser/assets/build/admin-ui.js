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
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serialize */ "../../admin/serialize.js");





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
  const createForm = async () => {
    try {
      const blocks = parseHTMLtoBlocks(rawHTML);
      if (!blocks.length) {
        console.error((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('JFB: Could not parse blocks', 'jet-form-builder'), rawHTML);
        return;
      }
      const serialized = (0,_serialize__WEBPACK_IMPORTED_MODULE_4__["default"])(blocks);
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        method: 'POST',
        path: '/wp/v2/jet-form-builder',
        data: {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Imported HTML Form', 'jet-form-builder'),
          content: serialized,
          status: 'publish'
        }
      });
      window.location.href = getPostEditUrl(response.id);
    } catch (error) {
      console.error('Failed to create form:', error);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "space-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: clearHTML
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Back', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: createForm
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
			<style>
				textarea, input:not([type="checkbox"]):not([type="radio"]) {
					display: block;
					margin-bottom: 20px;
				}
				label {
					display:block;
					margin-bottom:5px;
				}
				br {
					display:none;
				}
				input[type="submit"], button {
					display:block;
				}
			</style>
			${innerHTML}
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
  target.after(container);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container).render(wp.element.createElement(_HtmlParserButton__WEBPACK_IMPORTED_MODULE_2__["default"]));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9IdG1sUGFyc2VyQnV0dG9uLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9IdG1sUGFyc2VyRm9vdGVyLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9IdG1sUGFyc2VyTW9kYWwuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJhcGlGZXRjaFwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRvbVJlYWR5XCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIdG1sUGFyc2VyTW9kYWwgZnJvbSAnLi9IdG1sUGFyc2VyTW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdG1sUGFyc2VyQnV0dG9uKCkge1xyXG5cdGNvbnN0IFsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZyYWdtZW50PlxyXG5cdFx0XHQ8YVxyXG5cdFx0XHRcdGhyZWY9XCIjXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJwYWdlLXRpdGxlLWFjdGlvblwiXHJcblx0XHRcdFx0b25DbGljaz17ICggZXZlbnQgKSA9PiB7XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0c2V0U2hvd01vZGFsKCB0cnVlICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnSW1wb3J0IGZyb20gSFRNTCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHR7IHNob3dNb2RhbCAmJiA8SHRtbFBhcnNlck1vZGFsIHNldFNob3dNb2RhbD17IHNldFNob3dNb2RhbCB9IC8+IH1cclxuXHRcdDwvRnJhZ21lbnQ+XHJcblx0KTtcclxufSIsImltcG9ydCB7IEJ1dHRvbiwgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICcuL3NlcmlhbGl6ZSc7XHJcblxyXG5jb25zdCB7IHBhcnNlSFRNTHRvQmxvY2tzIH0gPSBKZXRGb3JtQnVpbGRlclBhcnNlcjtcclxuXHJcbmNvbnN0IGdldFBvc3RFZGl0VXJsID0gaWQgPT4ge1xyXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoIEpldEZvcm1CdWlsZGVyQWRtaW4uZWRpdF91cmwgKTtcclxuXHR1cmwuc2VhcmNoUGFyYW1zLnNldCggJ3Bvc3QnLCBpZCApO1xyXG5cclxuXHRyZXR1cm4gdXJsLmhyZWY7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdG1sUGFyc2VyRm9vdGVyKCB7IGNsZWFySFRNTCwgcmF3SFRNTCwgc2V0U2hvd01vZGFsIH0gKSB7XHJcblx0Y29uc3QgY3JlYXRlRm9ybSA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGJsb2NrcyA9IHBhcnNlSFRNTHRvQmxvY2tzKCByYXdIVE1MICk7XHJcblxyXG5cdFx0XHRpZiAoICFibG9ja3MubGVuZ3RoICkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIF9fKCAnSkZCOiBDb3VsZCBub3QgcGFyc2UgYmxvY2tzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksIHJhd0hUTUwgKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUoIGJsb2NrcyApO1xyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlGZXRjaCgge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdHBhdGg6ICcvd3AvdjIvamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0dGl0bGU6IF9fKCAnSW1wb3J0ZWQgSFRNTCBGb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdFx0XHRjb250ZW50OiBzZXJpYWxpemVkLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAncHVibGlzaCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBnZXRQb3N0RWRpdFVybCggcmVzcG9uc2UuaWQgKTtcclxuXHJcblx0XHR9IGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoICdGYWlsZWQgdG8gY3JlYXRlIGZvcm06JywgZXJyb3IgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjbGVhckhUTUwgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBfXyggJ0JhY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjcmVhdGVGb3JtIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgX18oICdDcmVhdGUgRm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L0ZsZXg+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0RmxleCxcclxuXHROb3RpY2UsXHJcblx0TW9kYWwsXHJcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCBIdG1sUGFyc2VyRm9vdGVyIGZyb20gJy4vSHRtbFBhcnNlckZvb3Rlcic7XHJcblxyXG5jb25zdCB7XHJcblx0cGFyc2VIVE1MdG9CbG9ja3MsXHJcblx0Z2V0Rm9ybUlubmVyRmllbGRzLFxyXG59ID0gSmV0Rm9ybUJ1aWxkZXJQYXJzZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdG1sUGFyc2VyTW9kYWwoIHtzZXRTaG93TW9kYWx9ICkge1xyXG5cdGNvbnN0IFsgaHRtbCwgc2V0SHRtbCBdICAgICAgICAgPSB1c2VTdGF0ZSggJycgKTtcclxuXHRjb25zdCBbIGZvcm1IVE1MLCBzZXRGb3JtSFRNTCBdID0gdXNlU3RhdGUoICcnICk7XHJcblx0Y29uc3QgWyBpc1BhcnNpbmcsIHNldFBhcnNpbmcgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cdGNvbnN0IFsgZXJyb3IsIHNldEVycm9yIF0gICAgICAgPSB1c2VTdGF0ZSggJycgKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG5cdFx0c2V0UGFyc2luZyggdHJ1ZSApO1xyXG5cdFx0c2V0RXJyb3IoICcnICk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgaW5uZXJIVE1MID0gZ2V0Rm9ybUlubmVyRmllbGRzKCBodG1sICk7XHJcblxyXG5cdFx0XHRjb25zdCBzdHlsZWRIVE1MID0gYFxyXG5cdFx0XHQ8c3R5bGU+XHJcblx0XHRcdFx0dGV4dGFyZWEsIGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKTpub3QoW3R5cGU9XCJyYWRpb1wiXSkge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsYWJlbCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHQke2lubmVySFRNTH1cclxuXHRcdGA7XHJcblxyXG5cdFx0XHRzZXRGb3JtSFRNTCggc3R5bGVkSFRNTCApO1xyXG5cdFx0fSBjYXRjaCAoIGVyciApIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggZXJyICk7XHJcblx0XHRcdHNldEVycm9yKFxyXG5cdFx0XHRcdGVycj8ubWVzc2FnZSB8fFxyXG5cdFx0XHRcdF9fKCAnRmFpbGVkIHRvIHBhcnNlIEhUTUwuJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHRcdFx0KTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldFBhcnNpbmcoIGZhbHNlICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNb2RhbFxyXG5cdFx0XHRzdHlsZT17IHsgd2lkdGg6ICc2MHZ3JyB9IH1cclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxyXG5cdFx0XHR0aXRsZT17IF9fKCAnSW1wb3J0IEhUTUwgRm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0Y2xhc3NOYW1lPVwiamZiLWh0bWwtcGFyc2VyLW1vZGFsXCJcclxuXHRcdD5cclxuXHRcdFx0eyBlcnJvciAmJiAoXHJcblx0XHRcdFx0PE5vdGljZVxyXG5cdFx0XHRcdFx0c3RhdHVzPVwiZXJyb3JcIlxyXG5cdFx0XHRcdFx0aXNEaXNtaXNzaWJsZVxyXG5cdFx0XHRcdFx0b25SZW1vdmU9eyAoKSA9PiBzZXRFcnJvciggJycgKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBlcnJvciB9XHJcblx0XHRcdFx0PC9Ob3RpY2U+XHJcblx0XHRcdCkgfVxyXG5cclxuXHRcdFx0eyBCb29sZWFuKCBmb3JtSFRNTC5sZW5ndGggKSA/IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBmb3JtSFRNTCB9IH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzJlbSAxZW0nLFxyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNmNmY3ZjcnLFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzFlbScsXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHQ8SHRtbFBhcnNlckZvb3RlclxyXG5cdFx0XHRcdFx0XHRjbGVhckhUTUw9eyAoKSA9PiBzZXRGb3JtSFRNTCggJycgKSB9XHJcblx0XHRcdFx0XHRcdGZvcm1IVE1MPXsgZm9ybUhUTUwgfVxyXG5cdFx0XHRcdFx0XHRyYXdIVE1MPXsgaHRtbCB9XHJcblx0XHRcdFx0XHRcdHNldFNob3dNb2RhbD17IHNldFNob3dNb2RhbCB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdQYXN0ZSB5b3VyIEhUTUwgaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBodG1sIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRIdG1sIH1cclxuXHRcdFx0XHRcdFx0cm93cz17IDcgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHQ8dWwgc3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdGxpc3RTdHlsZTogJ2Rpc2MnLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nSW5saW5lU3RhcnQ6ICcxZW0nLFxyXG5cdFx0XHRcdFx0fSB9PlxyXG5cdFx0XHRcdFx0XHQ8bGk+eyBfXyhcclxuXHRcdFx0XHRcdFx0XHQnWW91IGNhbiB1c2UgYW55IEhUTUwgY29kZSB0aGF0IGNvbnRhaW5zIGZvcm0gZWxlbWVudHMsIGJ1dCBvbmx5IGhlYWRpbmdzLCBmb3JtIGNvbnRyb2xzLCBhbmQgYnV0dG9ucyB3aWxsIGJlIHBhcnNlZC4nLFxyXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdFx0KSB9PC9saT5cclxuXHRcdFx0XHRcdFx0PGxpPnsgX18oXHJcblx0XHRcdFx0XHRcdFx0YEFsbCB0aGUgY29kZSB5b3UgcGFzdGUgaGVyZSB3aWxsIGJlIHBhcnNlZCBpbnRvIGEgc2luZ2xlIEZvcm0sIGV2ZW4gaWYgaXQgY29udGFpbnMgbW9yZSB0aGFuIG9uZSA8Zm9ybT4gdGFnLmAsXHJcblx0XHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0XHQpIH08L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGk+eyBfXyhcclxuXHRcdFx0XHRcdFx0XHRgVGhlIHBhcnNlciBjYW4gb25seSB1bmRlcnN0YW5kIGZvcm0gZWxlbWVudHMgYW5kIHN0cnVjdHVyZTsgaXQgY2FuJ3QgcGFyc2Ugc3R5bGluZyBvciBiZWhhdmlvci5gLFxyXG5cdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdFx0KSB9PC9saT5cclxuXHRcdFx0XHRcdDwvdWw+XHJcblxyXG5cdFx0XHRcdFx0PEZsZXgganVzdGlmeT1cImZsZXgtZW5kXCIgc3R5bGU9eyB7IG1hcmdpblRvcDogJzFlbScgfSB9PlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdFx0aXNCdXN5PXsgaXNQYXJzaW5nIH1cclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzUGFyc2luZyB8fCAhaHRtbC50cmltKCkubGVuZ3RoIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgaGFuZGxlU3VibWl0IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHsgaXNQYXJzaW5nXHJcblx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnUGFyc2luZy4uLicsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnUGFyc2UgSFRNTCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCkgfVxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpO1xyXG59XHJcbiIsImZ1bmN0aW9uIGNvbnZlcnRUb0NvbW1lbnRCbG9jayggeyBuYW1lLCBhdHRyaWJ1dGVzIH0gKSB7XHJcblx0Y29uc3QgYmxvY2tBdHRycyA9IEpTT04uc3RyaW5naWZ5KCBhdHRyaWJ1dGVzICk7XHJcblxyXG5cdHJldHVybiBgPCEtLSB3cDokeyBuYW1lIH0gJHsgYmxvY2tBdHRycyB9IC8tLT5gO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGJsb2NrcyB7T2JqZWN0W119XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemUoIGJsb2NrcyApIHtcclxuXHRyZXR1cm4gYmxvY2tzLm1hcCggY29udmVydFRvQ29tbWVudEJsb2NrICkuam9pbiggJ1xcblxcbicgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VyaWFsaXplOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZG9tUmVhZHlcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCBkb21SZWFkeSBmcm9tICdAd29yZHByZXNzL2RvbS1yZWFkeSc7XHJcbmltcG9ydCBIdG1sUGFyc2VyQnV0dG9uIGZyb20gJy4vSHRtbFBhcnNlckJ1dHRvbic7XHJcblxyXG5kb21SZWFkeSggKCkgPT4ge1xyXG5cdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS10aXRsZS1hY3Rpb25baHJlZio9XCJwb3N0LW5ldy5waHBcIl0nICk7XHJcblxyXG5cdGlmICggISB0YXJnZXQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG5cdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuXHJcblx0dGFyZ2V0LmFmdGVyKCBjb250YWluZXIgKTtcclxuXHRjcmVhdGVSb290KCBjb250YWluZXIgKS5yZW5kZXIoXHJcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoIEh0bWxQYXJzZXJCdXR0b24gKVxyXG5cdCk7XHJcbn0gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=