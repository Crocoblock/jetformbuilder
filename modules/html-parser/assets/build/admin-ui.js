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
function getPostEditUrl(id) {
  const url = new URL(window.location.origin + '/wp-admin/post.php');
  url.searchParams.set('post', id);
  url.searchParams.set('action', 'edit');
  return url.href;
}
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBV0E7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi4vLi4vYWRtaW4vSHRtbFBhcnNlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi4vLi4vYWRtaW4vSHRtbFBhcnNlckZvb3Rlci5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi4vLi4vYWRtaW4vSHRtbFBhcnNlck1vZGFsLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9zZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYXBpRmV0Y2hcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkb21SZWFkeVwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci8uLi8uLi9hZG1pbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHRtbFBhcnNlck1vZGFsIGZyb20gJy4vSHRtbFBhcnNlck1vZGFsJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSHRtbFBhcnNlckJ1dHRvbigpIHtcclxuXHRjb25zdCBbIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0PGFcclxuXHRcdFx0XHRocmVmPVwiI1wiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwicGFnZS10aXRsZS1hY3Rpb25cIlxyXG5cdFx0XHRcdG9uQ2xpY2s9eyAoIGV2ZW50ICkgPT4ge1xyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdHNldFNob3dNb2RhbCggdHJ1ZSApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBfXyggJ0ltcG9ydCBmcm9tIEhUTUwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdDwvYT5cclxuXHRcdFx0eyBzaG93TW9kYWwgJiYgPEh0bWxQYXJzZXJNb2RhbCBzZXRTaG93TW9kYWw9eyBzZXRTaG93TW9kYWwgfSAvPiB9XHJcblx0XHQ8L0ZyYWdtZW50PlxyXG5cdCk7XHJcbn0iLCJpbXBvcnQgeyBCdXR0b24sIEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCBhcGlGZXRjaCBmcm9tICdAd29yZHByZXNzL2FwaS1mZXRjaCc7XHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnLi9zZXJpYWxpemUnO1xyXG5cclxuY29uc3QgeyBwYXJzZUhUTUx0b0Jsb2NrcyB9ID0gSmV0Rm9ybUJ1aWxkZXJQYXJzZXI7XHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0RWRpdFVybCggaWQgKSB7XHJcblx0Y29uc3QgdXJsID0gbmV3IFVSTCggd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvd3AtYWRtaW4vcG9zdC5waHAnICk7XHJcblx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoICdwb3N0JywgaWQgKTtcclxuXHR1cmwuc2VhcmNoUGFyYW1zLnNldCggJ2FjdGlvbicsICdlZGl0JyApO1xyXG5cdHJldHVybiB1cmwuaHJlZjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSHRtbFBhcnNlckZvb3RlciggeyBjbGVhckhUTUwsIHJhd0hUTUwsIHNldFNob3dNb2RhbCB9ICkge1xyXG5cdGNvbnN0IGNyZWF0ZUZvcm0gPSBhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBibG9ja3MgPSBwYXJzZUhUTUx0b0Jsb2NrcyggcmF3SFRNTCApO1xyXG5cclxuXHRcdFx0aWYgKCAhYmxvY2tzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBfXyggJ0pGQjogQ291bGQgbm90IHBhcnNlIGJsb2NrcycsICdqZXQtZm9ybS1idWlsZGVyJyApLCByYXdIVE1MICk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBzZXJpYWxpemVkID0gc2VyaWFsaXplKCBibG9ja3MgKTtcclxuXHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpRmV0Y2goIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRwYXRoOiAnL3dwL3YyL2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiBfXyggJ0ltcG9ydGVkIEhUTUwgRm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdFx0Y29udGVudDogc2VyaWFsaXplZCxcclxuXHRcdFx0XHRcdHN0YXR1czogJ3B1Ymxpc2gnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZ2V0UG9zdEVkaXRVcmwoIHJlc3BvbnNlLmlkICk7XHJcblxyXG5cdFx0fSBjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnRmFpbGVkIHRvIGNyZWF0ZSBmb3JtOicsIGVycm9yICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuXHRcdFx0XHRvbkNsaWNrPXsgY2xlYXJIVE1MIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgX18oICdCYWNrJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuXHRcdFx0XHRvbkNsaWNrPXsgY3JlYXRlRm9ybSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnQ3JlYXRlIEZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0PC9GbGV4PlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0QnV0dG9uLFxyXG5cdEZsZXgsXHJcblx0Tm90aWNlLFxyXG5cdE1vZGFsLFxyXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgSHRtbFBhcnNlckZvb3RlciBmcm9tICcuL0h0bWxQYXJzZXJGb290ZXInO1xyXG5cclxuY29uc3Qge1xyXG5cdHBhcnNlSFRNTHRvQmxvY2tzLFxyXG5cdGdldEZvcm1Jbm5lckZpZWxkcyxcclxufSA9IEpldEZvcm1CdWlsZGVyUGFyc2VyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSHRtbFBhcnNlck1vZGFsKCB7c2V0U2hvd01vZGFsfSApIHtcclxuXHRjb25zdCBbIGh0bWwsIHNldEh0bWwgXSAgICAgICAgID0gdXNlU3RhdGUoICcnICk7XHJcblx0Y29uc3QgWyBmb3JtSFRNTCwgc2V0Rm9ybUhUTUwgXSA9IHVzZVN0YXRlKCAnJyApO1xyXG5cdGNvbnN0IFsgaXNQYXJzaW5nLCBzZXRQYXJzaW5nIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHRjb25zdCBbIGVycm9yLCBzZXRFcnJvciBdICAgICAgID0gdXNlU3RhdGUoICcnICk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuXHRcdHNldFBhcnNpbmcoIHRydWUgKTtcclxuXHRcdHNldEVycm9yKCAnJyApO1xyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGlubmVySFRNTCA9IGdldEZvcm1Jbm5lckZpZWxkcyggaHRtbCApO1xyXG5cclxuXHRcdFx0Y29uc3Qgc3R5bGVkSFRNTCA9IGBcclxuXHRcdFx0PHN0eWxlPlxyXG5cdFx0XHRcdHRleHRhcmVhLCBpbnB1dDpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6bm90KFt0eXBlPVwicmFkaW9cIl0pIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGFiZWwge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206NXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRiciB7XHJcblx0XHRcdFx0XHRkaXNwbGF5Om5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvbiB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdFx0JHtpbm5lckhUTUx9XHJcblx0XHRgO1xyXG5cclxuXHRcdFx0c2V0Rm9ybUhUTUwoIHN0eWxlZEhUTUwgKTtcclxuXHRcdH0gY2F0Y2ggKCBlcnIgKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGVyciApO1xyXG5cdFx0XHRzZXRFcnJvcihcclxuXHRcdFx0XHRlcnI/Lm1lc3NhZ2UgfHxcclxuXHRcdFx0XHRfXyggJ0ZhaWxlZCB0byBwYXJzZSBIVE1MLicsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0XHRcdCk7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRzZXRQYXJzaW5nKCBmYWxzZSApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TW9kYWxcclxuXHRcdFx0c3R5bGU9eyB7IHdpZHRoOiAnNjB2dycgfSB9XHJcblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gc2V0U2hvd01vZGFsKCBmYWxzZSApIH1cclxuXHRcdFx0dGl0bGU9eyBfXyggJ0ltcG9ydCBIVE1MIEZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdGNsYXNzTmFtZT1cImpmYi1odG1sLXBhcnNlci1tb2RhbFwiXHJcblx0XHQ+XHJcblx0XHRcdHsgZXJyb3IgJiYgKFxyXG5cdFx0XHRcdDxOb3RpY2VcclxuXHRcdFx0XHRcdHN0YXR1cz1cImVycm9yXCJcclxuXHRcdFx0XHRcdGlzRGlzbWlzc2libGVcclxuXHRcdFx0XHRcdG9uUmVtb3ZlPXsgKCkgPT4gc2V0RXJyb3IoICcnICkgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgZXJyb3IgfVxyXG5cdFx0XHRcdDwvTm90aWNlPlxyXG5cdFx0XHQpIH1cclxuXHJcblx0XHRcdHsgQm9vbGVhbiggZm9ybUhUTUwubGVuZ3RoICkgPyAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogZm9ybUhUTUwgfSB9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcyZW0gMWVtJyxcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZjZmN2Y3JyxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxZW0nLFxyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PEh0bWxQYXJzZXJGb290ZXJcclxuXHRcdFx0XHRcdFx0Y2xlYXJIVE1MPXsgKCkgPT4gc2V0Rm9ybUhUTUwoICcnICkgfVxyXG5cdFx0XHRcdFx0XHRmb3JtSFRNTD17IGZvcm1IVE1MIH1cclxuXHRcdFx0XHRcdFx0cmF3SFRNTD17IGh0bWwgfVxyXG5cdFx0XHRcdFx0XHRzZXRTaG93TW9kYWw9eyBzZXRTaG93TW9kYWwgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnUGFzdGUgeW91ciBIVE1MIGhlcmUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgaHRtbCB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2V0SHRtbCB9XHJcblx0XHRcdFx0XHRcdHJvd3M9eyA3IH1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PEZsZXgganVzdGlmeT1cImZsZXgtZW5kXCIgc3R5bGU9eyB7IG1hcmdpblRvcDogJzFlbScgfSB9PlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0aXNQcmltYXJ5XHJcblx0XHRcdFx0XHRcdFx0aXNCdXN5PXsgaXNQYXJzaW5nIH1cclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IGlzUGFyc2luZyB8fCAhaHRtbC50cmltKCkubGVuZ3RoIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgaGFuZGxlU3VibWl0IH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHsgaXNQYXJzaW5nXHJcblx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnUGFyc2luZy4uLicsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnUGFyc2UgSFRNTCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCkgfVxyXG5cdFx0PC9Nb2RhbD5cclxuXHQpO1xyXG59XHJcbiIsImZ1bmN0aW9uIGNvbnZlcnRUb0NvbW1lbnRCbG9jayggeyBuYW1lLCBhdHRyaWJ1dGVzIH0gKSB7XHJcblx0Y29uc3QgYmxvY2tBdHRycyA9IEpTT04uc3RyaW5naWZ5KCBhdHRyaWJ1dGVzICk7XHJcblxyXG5cdHJldHVybiBgPCEtLSB3cDokeyBuYW1lIH0gJHsgYmxvY2tBdHRycyB9IC8tLT5gO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGJsb2NrcyB7T2JqZWN0W119XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXJpYWxpemUoIGJsb2NrcyApIHtcclxuXHRyZXR1cm4gYmxvY2tzLm1hcCggY29udmVydFRvQ29tbWVudEJsb2NrICkuam9pbiggJ1xcblxcbicgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VyaWFsaXplOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZG9tUmVhZHlcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCBkb21SZWFkeSBmcm9tICdAd29yZHByZXNzL2RvbS1yZWFkeSc7XHJcbmltcG9ydCBIdG1sUGFyc2VyQnV0dG9uIGZyb20gJy4vSHRtbFBhcnNlckJ1dHRvbic7XHJcblxyXG5kb21SZWFkeSggKCkgPT4ge1xyXG5cdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnZS10aXRsZS1hY3Rpb25baHJlZio9XCJwb3N0LW5ldy5waHBcIl0nICk7XHJcblxyXG5cdGlmICggISB0YXJnZXQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG5cdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4JztcclxuXHJcblx0dGFyZ2V0LmFmdGVyKCBjb250YWluZXIgKTtcclxuXHRjcmVhdGVSb290KCBjb250YWluZXIgKS5yZW5kZXIoXHJcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoIEh0bWxQYXJzZXJCdXR0b24gKVxyXG5cdCk7XHJcbn0gKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=