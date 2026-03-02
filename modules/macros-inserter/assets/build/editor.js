/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/blocks/macros-inserter/block.json":
/*!**************************************************!*\
  !*** ./editor/blocks/macros-inserter/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"jet-forms/macros-inserter","title":"Macros Inserter","category":"jet-form-builder-fields","icon":"editor-code","supports":{"html":false},"attributes":{"content":{"type":"string","source":"html","selector":"div","default":""}}}');

/***/ }),

/***/ "./editor/blocks/macros-inserter/edit.js":
/*!***********************************************!*\
  !*** ./editor/blocks/macros-inserter/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function toHtmlMacro(name, field) {
  const macro = String(name).replace(/^%|%$/g, '').trim();
  let repeaterNote = '';
  if (field?.is_repeater) {
    repeaterNote = 'repeater tooltip';
  } else if (field?.is_repeater_child) {
    repeaterNote = 'this field can be used only inside repeater - ' + field.repeater_name;
  }
  return `<div data-jfb-macro="${macro}">${repeaterNote}</div>`;
}
function insertAtCursor(cm, text) {
  if (!cm) {
    return;
  }
  cm.focus();
  cm.replaceSelection(text, 'end');
}
function Edit({
  attributes,
  setAttributes
}) {
  var _attributes$content2;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const MacrosFields = window?.JetFBComponents?.MacrosFields;
  const textareaRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const cmRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // Init CodeMirror once: CodeMirror is the source of truth
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _attributes$content;
    if (!textareaRef.current) {
      return;
    }
    if (!window?.wp?.codeEditor?.initialize) {
      return;
    }
    const instance = wp.codeEditor.initialize(textareaRef.current, {
      codemirror: {
        mode: 'htmlmixed',
        lineNumbers: true,
        lineWrapping: true,
        indentUnit: 2,
        tabSize: 2
      }
    });
    const cm = instance?.codemirror;
    if (!cm) {
      return;
    }
    cmRef.current = cm;

    // Set initial value once
    cm.setValue((_attributes$content = attributes?.content) !== null && _attributes$content !== void 0 ? _attributes$content : '');
    const onChange = () => {
      setAttributes({
        content: cm.getValue()
      });
    };
    cm.on('change', onChange);
    return () => {
      try {
        cm.off('change', onChange);
      } catch (e) {}
      cmRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, MacrosFields ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
    group: "other"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MacrosFields, {
    withCurrent: true,
    onClick: (macroName, field) => {
      insertAtCursor(cmRef.current, toHtmlMacro(macroName, field));
    }
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    ref: textareaRef,
    defaultValue: (_attributes$content2 = attributes?.content) !== null && _attributes$content2 !== void 0 ? _attributes$content2 : '',
    rows: 5,
    placeholder: "Use the toolbar to insert macros. You can also write custom HTML here\u2026",
    style: {
      width: '100%',
      fontFamily: 'monospace',
      boxSizing: 'border-box'
    }
  })));
}

/***/ }),

/***/ "./editor/blocks/macros-inserter/index.js":
/*!************************************************!*\
  !*** ./editor/blocks/macros-inserter/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/macros-inserter/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/macros-inserter/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./editor/blocks/macros-inserter/save.js");



const name = _block_json__WEBPACK_IMPORTED_MODULE_0__.name;
const settings = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_0__,
  name,
  settings
});

/***/ }),

/***/ "./editor/blocks/macros-inserter/save.js":
/*!***********************************************!*\
  !*** ./editor/blocks/macros-inserter/save.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


function Save({
  attributes
}) {
  var _attributes$content;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.RawHTML, null, (_attributes$content = attributes?.content) !== null && _attributes$content !== void 0 ? _attributes$content : ''));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

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
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_macros_inserter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/macros-inserter */ "./editor/blocks/macros-inserter/index.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('jet.fb.register.fields', 'jet-form-builder/macros-inserter', blocks => {
  blocks.push(_blocks_macros_inserter__WEBPACK_IMPORTED_MODULE_0__);
  return blocks;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBOzs7Ozs7Ozs7O0FDUkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvLi9lZGl0b3IvYmxvY2tzL21hY3Jvcy1pbnNlcnRlci9zYXZlLmpzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VCbG9ja1Byb3BzLCBCbG9ja0NvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xyXG5cclxuZnVuY3Rpb24gdG9IdG1sTWFjcm8oIG5hbWUsIGZpZWxkICkge1xyXG5cdGNvbnN0IG1hY3JvID0gU3RyaW5nKCBuYW1lICkucmVwbGFjZSggL14lfCUkL2csICcnICkudHJpbSgpO1xyXG5cclxuXHRsZXQgcmVwZWF0ZXJOb3RlID0gJyc7XHJcblxyXG5cdGlmICggZmllbGQ/LmlzX3JlcGVhdGVyICkge1xyXG5cdFx0cmVwZWF0ZXJOb3RlID0gJ3JlcGVhdGVyIHRvb2x0aXAnO1xyXG5cdH0gZWxzZSBpZiAoIGZpZWxkPy5pc19yZXBlYXRlcl9jaGlsZCApIHtcclxuXHRcdHJlcGVhdGVyTm90ZSA9XHJcblx0XHRcdCd0aGlzIGZpZWxkIGNhbiBiZSB1c2VkIG9ubHkgaW5zaWRlIHJlcGVhdGVyIC0gJyArIGZpZWxkLnJlcGVhdGVyX25hbWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYDxkaXYgZGF0YS1qZmItbWFjcm89XCIkeyBtYWNybyB9XCI+JHsgcmVwZWF0ZXJOb3RlIH08L2Rpdj5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRBdEN1cnNvciggY20sIHRleHQgKSB7XHJcblx0aWYgKCAhIGNtICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRjbS5mb2N1cygpO1xyXG5cdGNtLnJlcGxhY2VTZWxlY3Rpb24oIHRleHQsICdlbmQnICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ICkge1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdGNvbnN0IE1hY3Jvc0ZpZWxkcyA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzPy5NYWNyb3NGaWVsZHM7XHJcblxyXG5cdGNvbnN0IHRleHRhcmVhUmVmID0gdXNlUmVmKCBudWxsICk7XHJcblx0Y29uc3QgY21SZWYgPSB1c2VSZWYoIG51bGwgKTtcclxuXHJcblx0Ly8gSW5pdCBDb2RlTWlycm9yIG9uY2U6IENvZGVNaXJyb3IgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aFxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCAhIHRleHRhcmVhUmVmLmN1cnJlbnQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICggISB3aW5kb3c/LndwPy5jb2RlRWRpdG9yPy5pbml0aWFsaXplICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5zdGFuY2UgPSB3cC5jb2RlRWRpdG9yLmluaXRpYWxpemUoIHRleHRhcmVhUmVmLmN1cnJlbnQsIHtcclxuXHRcdFx0Y29kZW1pcnJvcjoge1xyXG5cdFx0XHRcdG1vZGU6ICdodG1sbWl4ZWQnLFxyXG5cdFx0XHRcdGxpbmVOdW1iZXJzOiB0cnVlLFxyXG5cdFx0XHRcdGxpbmVXcmFwcGluZzogdHJ1ZSxcclxuXHRcdFx0XHRpbmRlbnRVbml0OiAyLFxyXG5cdFx0XHRcdHRhYlNpemU6IDIsXHJcblx0XHRcdH0sXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0Y29uc3QgY20gPSBpbnN0YW5jZT8uY29kZW1pcnJvcjtcclxuXHRcdGlmICggISBjbSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNtUmVmLmN1cnJlbnQgPSBjbTtcclxuXHJcblx0XHQvLyBTZXQgaW5pdGlhbCB2YWx1ZSBvbmNlXHJcblx0XHRjbS5zZXRWYWx1ZSggYXR0cmlidXRlcz8uY29udGVudCA/PyAnJyApO1xyXG5cclxuXHRcdGNvbnN0IG9uQ2hhbmdlID0gKCkgPT4ge1xyXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnQ6IGNtLmdldFZhbHVlKCkgfSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjbS5vbiggJ2NoYW5nZScsIG9uQ2hhbmdlICk7XHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjbS5vZmYoICdjaGFuZ2UnLCBvbkNoYW5nZSApO1xyXG5cdFx0XHR9IGNhdGNoICggZSApIHt9XHJcblxyXG5cdFx0XHRjbVJlZi5jdXJyZW50ID0gbnVsbDtcclxuXHRcdH07XHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcblx0fSwgW10gKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0eyBNYWNyb3NGaWVsZHMgPyAoXHJcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMgZ3JvdXA9XCJvdGhlclwiPlxyXG5cdFx0XHRcdFx0PE1hY3Jvc0ZpZWxkc1xyXG5cdFx0XHRcdFx0XHR3aXRoQ3VycmVudFxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCBtYWNyb05hbWUsIGZpZWxkICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGluc2VydEF0Q3Vyc29yKFxyXG5cdFx0XHRcdFx0XHRcdFx0Y21SZWYuY3VycmVudCxcclxuXHRcdFx0XHRcdFx0XHRcdHRvSHRtbE1hY3JvKCBtYWNyb05hbWUsIGZpZWxkIClcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxyXG5cdFx0XHQpIDogbnVsbCB9XHJcblxyXG5cdFx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0cmVmPXsgdGV4dGFyZWFSZWYgfVxyXG5cdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXsgYXR0cmlidXRlcz8uY29udGVudCA/PyAnJyB9XHJcblx0XHRcdFx0XHRyb3dzPXsgNSB9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVzZSB0aGUgdG9vbGJhciB0byBpbnNlcnQgbWFjcm9zLiBZb3UgY2FuIGFsc28gd3JpdGUgY3VzdG9tIEhUTUwgaGVyZeKAplwiXHJcblx0XHRcdFx0XHRzdHlsZT17IHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0XHRcdFx0Zm9udEZhbWlseTogJ21vbm9zcGFjZScsXHJcblx0XHRcdFx0XHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0ZyYWdtZW50PlxyXG5cdCk7XHJcbn0iLCJpbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcclxuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJztcclxuXHJcbmV4cG9ydCBjb25zdCBuYW1lID0gbWV0YWRhdGEubmFtZTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuXHRlZGl0LFxyXG5cdHNhdmUsXHJcbn07XHJcblxyXG5leHBvcnQgeyBtZXRhZGF0YSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG1ldGFkYXRhLFxyXG5cdG5hbWUsXHJcblx0c2V0dGluZ3MsXHJcbn07IiwiaW1wb3J0IHsgUmF3SFRNTCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PFJhd0hUTUw+eyBhdHRyaWJ1dGVzPy5jb250ZW50ID8/ICcnIH08L1Jhd0hUTUw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBNYWNyb3NJbnNlcnRlciBmcm9tICcuL2Jsb2Nrcy9tYWNyb3MtaW5zZXJ0ZXInO1xyXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWFjcm9zLWluc2VydGVyJyxcclxuXHQoIGJsb2NrcyApID0+IHtcclxuXHRcdGJsb2Nrcy5wdXNoKCBNYWNyb3NJbnNlcnRlciApO1xyXG5cdFx0cmV0dXJuIGJsb2NrcztcclxuXHR9XHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9