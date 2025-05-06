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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVdBOzs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJGb290ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi4vLi4vYWRtaW4vc2VyaWFsaXplLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImFwaUZldGNoXCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZG9tUmVhZHlcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi4vLi4vYWRtaW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0bWxQYXJzZXJNb2RhbCBmcm9tICcuL0h0bWxQYXJzZXJNb2RhbCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEh0bWxQYXJzZXJCdXR0b24oKSB7XHJcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdDxhXHJcblx0XHRcdFx0aHJlZj1cIiNcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cInBhZ2UtdGl0bGUtYWN0aW9uXCJcclxuXHRcdFx0XHRvbkNsaWNrPXsgKCBldmVudCApID0+IHtcclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRzZXRTaG93TW9kYWwoIHRydWUgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgX18oICdJbXBvcnQgZnJvbSBIVE1MJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdHsgc2hvd01vZGFsICYmIDxIdG1sUGFyc2VyTW9kYWwgc2V0U2hvd01vZGFsPXsgc2V0U2hvd01vZGFsIH0gLz4gfVxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xyXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJy4vc2VyaWFsaXplJztcclxuXHJcbmNvbnN0IHsgcGFyc2VIVE1MdG9CbG9ja3MgfSA9IEpldEZvcm1CdWlsZGVyUGFyc2VyO1xyXG5cclxuY29uc3QgZ2V0UG9zdEVkaXRVcmwgPSBpZCA9PiB7XHJcblx0Y29uc3QgdXJsID0gbmV3IFVSTCggSmV0Rm9ybUJ1aWxkZXJBZG1pbi5lZGl0X3VybCApO1xyXG5cdHVybC5zZWFyY2hQYXJhbXMuc2V0KCAncG9zdCcsIGlkICk7XHJcblx0cmV0dXJuIHVybC5ocmVmO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdG1sUGFyc2VyRm9vdGVyKCB7IGNsZWFySFRNTCwgcmF3SFRNTCwgc2V0U2hvd01vZGFsIH0gKSB7XHJcblx0Y29uc3QgY3JlYXRlRm9ybSA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGJsb2NrcyA9IHBhcnNlSFRNTHRvQmxvY2tzKCByYXdIVE1MICk7XHJcblxyXG5cdFx0XHRpZiAoICFibG9ja3MubGVuZ3RoICkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIF9fKCAnSkZCOiBDb3VsZCBub3QgcGFyc2UgYmxvY2tzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksIHJhd0hUTUwgKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUoIGJsb2NrcyApO1xyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlGZXRjaCgge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdHBhdGg6ICcvd3AvdjIvamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0dGl0bGU6IF9fKCAnSW1wb3J0ZWQgSFRNTCBGb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRcdFx0XHRjb250ZW50OiBzZXJpYWxpemVkLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAncHVibGlzaCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBnZXRQb3N0RWRpdFVybCggcmVzcG9uc2UuaWQgKTtcclxuXHJcblx0XHR9IGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoICdGYWlsZWQgdG8gY3JlYXRlIGZvcm06JywgZXJyb3IgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjbGVhckhUTUwgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBfXyggJ0JhY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxyXG5cdFx0XHRcdG9uQ2xpY2s9eyBjcmVhdGVGb3JtIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgX18oICdDcmVhdGUgRm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQ8L0ZsZXg+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRCdXR0b24sXHJcblx0RmxleCxcclxuXHROb3RpY2UsXHJcblx0TW9kYWwsXHJcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCBIdG1sUGFyc2VyRm9vdGVyIGZyb20gJy4vSHRtbFBhcnNlckZvb3Rlcic7XHJcblxyXG5jb25zdCB7XHJcblx0cGFyc2VIVE1MdG9CbG9ja3MsXHJcblx0Z2V0Rm9ybUlubmVyRmllbGRzLFxyXG59ID0gSmV0Rm9ybUJ1aWxkZXJQYXJzZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIdG1sUGFyc2VyTW9kYWwoIHtzZXRTaG93TW9kYWx9ICkge1xyXG5cdGNvbnN0IFsgaHRtbCwgc2V0SHRtbCBdICAgICAgICAgPSB1c2VTdGF0ZSggJycgKTtcclxuXHRjb25zdCBbIGZvcm1IVE1MLCBzZXRGb3JtSFRNTCBdID0gdXNlU3RhdGUoICcnICk7XHJcblx0Y29uc3QgWyBpc1BhcnNpbmcsIHNldFBhcnNpbmcgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cdGNvbnN0IFsgZXJyb3IsIHNldEVycm9yIF0gICAgICAgPSB1c2VTdGF0ZSggJycgKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG5cdFx0c2V0UGFyc2luZyggdHJ1ZSApO1xyXG5cdFx0c2V0RXJyb3IoICcnICk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgaW5uZXJIVE1MID0gZ2V0Rm9ybUlubmVyRmllbGRzKCBodG1sICk7XHJcblxyXG5cdFx0XHRjb25zdCBzdHlsZWRIVE1MID0gYFxyXG5cdFx0XHQ8c3R5bGU+XHJcblx0XHRcdFx0dGV4dGFyZWEsIGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKTpub3QoW3R5cGU9XCJyYWRpb1wiXSkge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsYWJlbCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTo1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6bm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHQke2lubmVySFRNTH1cclxuXHRcdGA7XHJcblxyXG5cdFx0XHRzZXRGb3JtSFRNTCggc3R5bGVkSFRNTCApO1xyXG5cdFx0fSBjYXRjaCAoIGVyciApIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggZXJyICk7XHJcblx0XHRcdHNldEVycm9yKFxyXG5cdFx0XHRcdGVycj8ubWVzc2FnZSB8fFxyXG5cdFx0XHRcdF9fKCAnRmFpbGVkIHRvIHBhcnNlIEhUTUwuJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHRcdFx0KTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldFBhcnNpbmcoIGZhbHNlICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNb2RhbFxyXG5cdFx0XHRzdHlsZT17IHsgd2lkdGg6ICc2MHZ3JyB9IH1cclxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBzZXRTaG93TW9kYWwoIGZhbHNlICkgfVxyXG5cdFx0XHR0aXRsZT17IF9fKCAnSW1wb3J0IEhUTUwgRm9ybScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0Y2xhc3NOYW1lPVwiamZiLWh0bWwtcGFyc2VyLW1vZGFsXCJcclxuXHRcdD5cclxuXHRcdFx0eyBlcnJvciAmJiAoXHJcblx0XHRcdFx0PE5vdGljZVxyXG5cdFx0XHRcdFx0c3RhdHVzPVwiZXJyb3JcIlxyXG5cdFx0XHRcdFx0aXNEaXNtaXNzaWJsZVxyXG5cdFx0XHRcdFx0b25SZW1vdmU9eyAoKSA9PiBzZXRFcnJvciggJycgKSB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBlcnJvciB9XHJcblx0XHRcdFx0PC9Ob3RpY2U+XHJcblx0XHRcdCkgfVxyXG5cclxuXHRcdFx0eyBCb29sZWFuKCBmb3JtSFRNTC5sZW5ndGggKSA/IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBmb3JtSFRNTCB9IH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzJlbSAxZW0nLFxyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNmNmY3ZjcnLFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzFlbScsXHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHQ8SHRtbFBhcnNlckZvb3RlclxyXG5cdFx0XHRcdFx0XHRjbGVhckhUTUw9eyAoKSA9PiBzZXRGb3JtSFRNTCggJycgKSB9XHJcblx0XHRcdFx0XHRcdGZvcm1IVE1MPXsgZm9ybUhUTUwgfVxyXG5cdFx0XHRcdFx0XHRyYXdIVE1MPXsgaHRtbCB9XHJcblx0XHRcdFx0XHRcdHNldFNob3dNb2RhbD17IHNldFNob3dNb2RhbCB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdQYXN0ZSB5b3VyIEhUTUwgaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBodG1sIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRIdG1sIH1cclxuXHRcdFx0XHRcdFx0cm93cz17IDcgfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHQ8RmxleCBqdXN0aWZ5PVwiZmxleC1lbmRcIiBzdHlsZT17IHsgbWFyZ2luVG9wOiAnMWVtJyB9IH0+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRpc1ByaW1hcnlcclxuXHRcdFx0XHRcdFx0XHRpc0J1c3k9eyBpc1BhcnNpbmcgfVxyXG5cdFx0XHRcdFx0XHRcdGRpc2FibGVkPXsgaXNQYXJzaW5nIHx8ICFodG1sLnRyaW0oKS5sZW5ndGggfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBoYW5kbGVTdWJtaXQgfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0eyBpc1BhcnNpbmdcclxuXHRcdFx0XHRcdFx0XHRcdD8gX18oICdQYXJzaW5nLi4uJywgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHRcdFx0XHRcdFx0XHRcdDogX18oICdQYXJzZSBIVE1MJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KSB9XHJcblx0XHQ8L01vZGFsPlxyXG5cdCk7XHJcbn1cclxuIiwiZnVuY3Rpb24gY29udmVydFRvQ29tbWVudEJsb2NrKCB7IG5hbWUsIGF0dHJpYnV0ZXMgfSApIHtcclxuXHRjb25zdCBibG9ja0F0dHJzID0gSlNPTi5zdHJpbmdpZnkoIGF0dHJpYnV0ZXMgKTtcclxuXHJcblx0cmV0dXJuIGA8IS0tIHdwOiR7IG5hbWUgfSAkeyBibG9ja0F0dHJzIH0gLy0tPmA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gYmxvY2tzIHtPYmplY3RbXX1cclxuICovXHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZSggYmxvY2tzICkge1xyXG5cdHJldHVybiBibG9ja3MubWFwKCBjb252ZXJ0VG9Db21tZW50QmxvY2sgKS5qb2luKCAnXFxuXFxuJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJpYWxpemU7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImFwaUZldGNoXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkb21SZWFkeVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IGRvbVJlYWR5IGZyb20gJ0B3b3JkcHJlc3MvZG9tLXJlYWR5JztcclxuaW1wb3J0IEh0bWxQYXJzZXJCdXR0b24gZnJvbSAnLi9IdG1sUGFyc2VyQnV0dG9uJztcclxuXHJcbmRvbVJlYWR5KCAoKSA9PiB7XHJcblx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdlLXRpdGxlLWFjdGlvbltocmVmKj1cInBvc3QtbmV3LnBocFwiXScgKTtcclxuXHJcblx0aWYgKCAhIHRhcmdldCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcblx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnO1xyXG5cclxuXHR0YXJnZXQuYWZ0ZXIoIGNvbnRhaW5lciApO1xyXG5cdGNyZWF0ZVJvb3QoIGNvbnRhaW5lciApLnJlbmRlcihcclxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCggSHRtbFBhcnNlckJ1dHRvbiApXHJcblx0KTtcclxufSApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==