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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVdBOzs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJGb290ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyLy4uLy4uL2FkbWluL0h0bWxQYXJzZXJNb2RhbC5qcyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi4vLi4vYWRtaW4vc2VyaWFsaXplLmpzIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImFwaUZldGNoXCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZG9tUmVhZHlcIl0iLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1odG1sLXBhcnNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWh0bWwtcGFyc2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItaHRtbC1wYXJzZXIvLi4vLi4vYWRtaW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0bWxQYXJzZXJNb2RhbCBmcm9tICcuL0h0bWxQYXJzZXJNb2RhbCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEh0bWxQYXJzZXJCdXR0b24oKSB7XHJcblx0Y29uc3QgWyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdDxhXHJcblx0XHRcdFx0aHJlZj1cIiNcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cInBhZ2UtdGl0bGUtYWN0aW9uXCJcclxuXHRcdFx0XHRvbkNsaWNrPXsgKCBldmVudCApID0+IHtcclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRzZXRTaG93TW9kYWwoIHRydWUgKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgX18oICdJbXBvcnQgZnJvbSBIVE1MJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdHsgc2hvd01vZGFsICYmIDxIdG1sUGFyc2VyTW9kYWwgc2V0U2hvd01vZGFsPXsgc2V0U2hvd01vZGFsIH0gLz4gfVxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59IiwiaW1wb3J0IHsgQnV0dG9uLCBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xyXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJy4vc2VyaWFsaXplJztcclxuXHJcbmNvbnN0IHsgcGFyc2VIVE1MdG9CbG9ja3MgfSA9IEpldEZvcm1CdWlsZGVyUGFyc2VyO1xyXG5cclxuY29uc3QgZ2V0UG9zdEVkaXRVcmwgPSBpZCA9PiB7XHJcblx0Y29uc3QgdXJsID0gbmV3IFVSTCggSmV0Rm9ybUJ1aWxkZXJBZG1pbi5lZGl0X3VybCApO1xyXG5cdHVybC5zZWFyY2hQYXJhbXMuc2V0KCAncG9zdCcsIGlkICk7XHJcblxyXG5cdHJldHVybiB1cmwuaHJlZjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEh0bWxQYXJzZXJGb290ZXIoIHsgY2xlYXJIVE1MLCByYXdIVE1MLCBzZXRTaG93TW9kYWwgfSApIHtcclxuXHRjb25zdCBjcmVhdGVGb3JtID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgYmxvY2tzID0gcGFyc2VIVE1MdG9CbG9ja3MoIHJhd0hUTUwgKTtcclxuXHJcblx0XHRcdGlmICggIWJsb2Nrcy5sZW5ndGggKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggX18oICdKRkI6IENvdWxkIG5vdCBwYXJzZSBibG9ja3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSwgcmF3SFRNTCApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZSggYmxvY2tzICk7XHJcblxyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaUZldGNoKCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0cGF0aDogJy93cC92Mi9qZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHR0aXRsZTogX18oICdJbXBvcnRlZCBIVE1MIEZvcm0nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IHNlcmlhbGl6ZWQsXHJcblx0XHRcdFx0XHRzdGF0dXM6ICdwdWJsaXNoJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldFBvc3RFZGl0VXJsKCByZXNwb25zZS5pZCApO1xyXG5cclxuXHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggJ0ZhaWxlZCB0byBjcmVhdGUgZm9ybTonLCBlcnJvciApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RmxleCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXHJcblx0XHRcdFx0b25DbGljaz17IGNsZWFySFRNTCB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnQmFjaycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXHJcblx0XHRcdFx0b25DbGljaz17IGNyZWF0ZUZvcm0gfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBfXyggJ0NyZWF0ZSBGb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L0J1dHRvbj5cclxuXHRcdDwvRmxleD5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdEJ1dHRvbixcclxuXHRGbGV4LFxyXG5cdE5vdGljZSxcclxuXHRNb2RhbCxcclxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IEh0bWxQYXJzZXJGb290ZXIgZnJvbSAnLi9IdG1sUGFyc2VyRm9vdGVyJztcclxuXHJcbmNvbnN0IHtcclxuXHRwYXJzZUhUTUx0b0Jsb2NrcyxcclxuXHRnZXRGb3JtSW5uZXJGaWVsZHMsXHJcbn0gPSBKZXRGb3JtQnVpbGRlclBhcnNlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEh0bWxQYXJzZXJNb2RhbCgge3NldFNob3dNb2RhbH0gKSB7XHJcblx0Y29uc3QgWyBodG1sLCBzZXRIdG1sIF0gICAgICAgICA9IHVzZVN0YXRlKCAnJyApO1xyXG5cdGNvbnN0IFsgZm9ybUhUTUwsIHNldEZvcm1IVE1MIF0gPSB1c2VTdGF0ZSggJycgKTtcclxuXHRjb25zdCBbIGlzUGFyc2luZywgc2V0UGFyc2luZyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblx0Y29uc3QgWyBlcnJvciwgc2V0RXJyb3IgXSAgICAgICA9IHVzZVN0YXRlKCAnJyApO1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcblx0XHRzZXRQYXJzaW5nKCB0cnVlICk7XHJcblx0XHRzZXRFcnJvciggJycgKTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBpbm5lckhUTUwgPSBnZXRGb3JtSW5uZXJGaWVsZHMoIGh0bWwgKTtcclxuXHJcblx0XHRcdGNvbnN0IHN0eWxlZEhUTUwgPSBgXHJcblx0XHRcdDxzdHlsZT5cclxuXHRcdFx0XHR0ZXh0YXJlYSwgaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pOm5vdChbdHlwZT1cInJhZGlvXCJdKSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxhYmVsIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOjVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b24ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHRcdCR7aW5uZXJIVE1MfVxyXG5cdFx0YDtcclxuXHJcblx0XHRcdHNldEZvcm1IVE1MKCBzdHlsZWRIVE1MICk7XHJcblx0XHR9IGNhdGNoICggZXJyICkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBlcnIgKTtcclxuXHRcdFx0c2V0RXJyb3IoXHJcblx0XHRcdFx0ZXJyPy5tZXNzYWdlIHx8XHJcblx0XHRcdFx0X18oICdGYWlsZWQgdG8gcGFyc2UgSFRNTC4nLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0c2V0UGFyc2luZyggZmFsc2UgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1vZGFsXHJcblx0XHRcdHN0eWxlPXsgeyB3aWR0aDogJzYwdncnIH0gfVxyXG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XHJcblx0XHRcdHRpdGxlPXsgX18oICdJbXBvcnQgSFRNTCBGb3JtJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRjbGFzc05hbWU9XCJqZmItaHRtbC1wYXJzZXItbW9kYWxcIlxyXG5cdFx0PlxyXG5cdFx0XHR7IGVycm9yICYmIChcclxuXHRcdFx0XHQ8Tm90aWNlXHJcblx0XHRcdFx0XHRzdGF0dXM9XCJlcnJvclwiXHJcblx0XHRcdFx0XHRpc0Rpc21pc3NpYmxlXHJcblx0XHRcdFx0XHRvblJlbW92ZT17ICgpID0+IHNldEVycm9yKCAnJyApIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IGVycm9yIH1cclxuXHRcdFx0XHQ8L05vdGljZT5cclxuXHRcdFx0KSB9XHJcblxyXG5cdFx0XHR7IEJvb2xlYW4oIGZvcm1IVE1MLmxlbmd0aCApID8gKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGZvcm1IVE1MIH0gfVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMmVtIDFlbScsXHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2Y2ZjdmNycsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMWVtJyxcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxIdG1sUGFyc2VyRm9vdGVyXHJcblx0XHRcdFx0XHRcdGNsZWFySFRNTD17ICgpID0+IHNldEZvcm1IVE1MKCAnJyApIH1cclxuXHRcdFx0XHRcdFx0Zm9ybUhUTUw9eyBmb3JtSFRNTCB9XHJcblx0XHRcdFx0XHRcdHJhd0hUTUw9eyBodG1sIH1cclxuXHRcdFx0XHRcdFx0c2V0U2hvd01vZGFsPXsgc2V0U2hvd01vZGFsIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Bhc3RlIHlvdXIgSFRNTCBoZXJlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGh0bWwgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHNldEh0bWwgfVxyXG5cdFx0XHRcdFx0XHRyb3dzPXsgNyB9XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxGbGV4IGp1c3RpZnk9XCJmbGV4LWVuZFwiIHN0eWxlPXsgeyBtYXJnaW5Ub3A6ICcxZW0nIH0gfT5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGlzUHJpbWFyeVxyXG5cdFx0XHRcdFx0XHRcdGlzQnVzeT17IGlzUGFyc2luZyB9XHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBpc1BhcnNpbmcgfHwgIWh0bWwudHJpbSgpLmxlbmd0aCB9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17IGhhbmRsZVN1Ym1pdCB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7IGlzUGFyc2luZ1xyXG5cdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1BhcnNpbmcuLi4nLCAnamV0LWZvcm0tYnVpbGRlcicgKVxyXG5cdFx0XHRcdFx0XHRcdFx0OiBfXyggJ1BhcnNlIEhUTUwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpIH1cclxuXHRcdDwvTW9kYWw+XHJcblx0KTtcclxufVxyXG4iLCJmdW5jdGlvbiBjb252ZXJ0VG9Db21tZW50QmxvY2soIHsgbmFtZSwgYXR0cmlidXRlcyB9ICkge1xyXG5cdGNvbnN0IGJsb2NrQXR0cnMgPSBKU09OLnN0cmluZ2lmeSggYXR0cmlidXRlcyApO1xyXG5cclxuXHRyZXR1cm4gYDwhLS0gd3A6JHsgbmFtZSB9ICR7IGJsb2NrQXR0cnMgfSAvLS0+YDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBibG9ja3Mge09iamVjdFtdfVxyXG4gKi9cclxuZnVuY3Rpb24gc2VyaWFsaXplKCBibG9ja3MgKSB7XHJcblx0cmV0dXJuIGJsb2Nrcy5tYXAoIGNvbnZlcnRUb0NvbW1lbnRCbG9jayApLmpvaW4oICdcXG5cXG4nICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcmlhbGl6ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYXBpRmV0Y2hcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRvbVJlYWR5XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xyXG5pbXBvcnQgSHRtbFBhcnNlckJ1dHRvbiBmcm9tICcuL0h0bWxQYXJzZXJCdXR0b24nO1xyXG5cclxuZG9tUmVhZHkoICgpID0+IHtcclxuXHRjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2UtdGl0bGUtYWN0aW9uW2hyZWYqPVwicG9zdC1uZXcucGhwXCJdJyApO1xyXG5cclxuXHRpZiAoICEgdGFyZ2V0ICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuXHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XHJcblxyXG5cdHRhcmdldC5hZnRlciggY29udGFpbmVyICk7XHJcblx0Y3JlYXRlUm9vdCggY29udGFpbmVyICkucmVuZGVyKFxyXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCBIdG1sUGFyc2VyQnV0dG9uIClcclxuXHQpO1xyXG59ICk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9