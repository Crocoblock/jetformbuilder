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
  return `<span data-jfb-macro="${macro}">${repeaterNote}</span>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBOzs7Ozs7Ozs7O0FDUkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvLi9lZGl0b3IvYmxvY2tzL21hY3Jvcy1pbnNlcnRlci9zYXZlLmpzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VCbG9ja1Byb3BzLCBCbG9ja0NvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xyXG5cclxuZnVuY3Rpb24gdG9IdG1sTWFjcm8oIG5hbWUsIGZpZWxkICkge1xyXG5cdGNvbnN0IG1hY3JvID0gU3RyaW5nKCBuYW1lICkucmVwbGFjZSggL14lfCUkL2csICcnICkudHJpbSgpO1xyXG5cclxuXHRsZXQgcmVwZWF0ZXJOb3RlID0gJyc7XHJcblxyXG5cdGlmICggZmllbGQ/LmlzX3JlcGVhdGVyICkge1xyXG5cdFx0cmVwZWF0ZXJOb3RlID0gJ3JlcGVhdGVyIHRvb2x0aXAnO1xyXG5cdH0gZWxzZSBpZiAoIGZpZWxkPy5pc19yZXBlYXRlcl9jaGlsZCApIHtcclxuXHRcdHJlcGVhdGVyTm90ZSA9XHJcblx0XHRcdCd0aGlzIGZpZWxkIGNhbiBiZSB1c2VkIG9ubHkgaW5zaWRlIHJlcGVhdGVyIC0gJyArIGZpZWxkLnJlcGVhdGVyX25hbWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYDxzcGFuIGRhdGEtamZiLW1hY3JvPVwiJHsgbWFjcm8gfVwiPiR7IHJlcGVhdGVyTm90ZSB9PC9zcGFuPmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydEF0Q3Vyc29yKCBjbSwgdGV4dCApIHtcclxuXHRpZiAoICEgY20gKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGNtLmZvY3VzKCk7XHJcblx0Y20ucmVwbGFjZVNlbGVjdGlvbiggdGV4dCwgJ2VuZCcgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcclxuXHJcblx0Y29uc3QgTWFjcm9zRmllbGRzID0gd2luZG93Py5KZXRGQkNvbXBvbmVudHM/Lk1hY3Jvc0ZpZWxkcztcclxuXHJcblx0Y29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWYoIG51bGwgKTtcclxuXHRjb25zdCBjbVJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG5cclxuXHQvLyBJbml0IENvZGVNaXJyb3Igb25jZTogQ29kZU1pcnJvciBpcyB0aGUgc291cmNlIG9mIHRydXRoXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoICEgdGV4dGFyZWFSZWYuY3VycmVudCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCAhIHdpbmRvdz8ud3A/LmNvZGVFZGl0b3I/LmluaXRpYWxpemUgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbnN0YW5jZSA9IHdwLmNvZGVFZGl0b3IuaW5pdGlhbGl6ZSggdGV4dGFyZWFSZWYuY3VycmVudCwge1xyXG5cdFx0XHRjb2RlbWlycm9yOiB7XHJcblx0XHRcdFx0bW9kZTogJ2h0bWxtaXhlZCcsXHJcblx0XHRcdFx0bGluZU51bWJlcnM6IHRydWUsXHJcblx0XHRcdFx0bGluZVdyYXBwaW5nOiB0cnVlLFxyXG5cdFx0XHRcdGluZGVudFVuaXQ6IDIsXHJcblx0XHRcdFx0dGFiU2l6ZTogMixcclxuXHRcdFx0fSxcclxuXHRcdH0gKTtcclxuXHJcblx0XHRjb25zdCBjbSA9IGluc3RhbmNlPy5jb2RlbWlycm9yO1xyXG5cdFx0aWYgKCAhIGNtICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y21SZWYuY3VycmVudCA9IGNtO1xyXG5cclxuXHRcdC8vIFNldCBpbml0aWFsIHZhbHVlIG9uY2VcclxuXHRcdGNtLnNldFZhbHVlKCBhdHRyaWJ1dGVzPy5jb250ZW50ID8/ICcnICk7XHJcblxyXG5cdFx0Y29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY29udGVudDogY20uZ2V0VmFsdWUoKSB9ICk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNtLm9uKCAnY2hhbmdlJywgb25DaGFuZ2UgKTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNtLm9mZiggJ2NoYW5nZScsIG9uQ2hhbmdlICk7XHJcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cclxuXHJcblx0XHRcdGNtUmVmLmN1cnJlbnQgPSBudWxsO1xyXG5cdFx0fTtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHR9LCBbXSApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZyYWdtZW50PlxyXG5cdFx0XHR7IE1hY3Jvc0ZpZWxkcyA/IChcclxuXHRcdFx0XHQ8QmxvY2tDb250cm9scyBncm91cD1cIm90aGVyXCI+XHJcblx0XHRcdFx0XHQ8TWFjcm9zRmllbGRzXHJcblx0XHRcdFx0XHRcdHdpdGhDdXJyZW50XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoIG1hY3JvTmFtZSwgZmllbGQgKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aW5zZXJ0QXRDdXJzb3IoXHJcblx0XHRcdFx0XHRcdFx0XHRjbVJlZi5jdXJyZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0dG9IdG1sTWFjcm8oIG1hY3JvTmFtZSwgZmllbGQgKVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XHJcblx0XHRcdCkgOiBudWxsIH1cclxuXHJcblx0XHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0+XHJcblx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRyZWY9eyB0ZXh0YXJlYVJlZiB9XHJcblx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9eyBhdHRyaWJ1dGVzPy5jb250ZW50ID8/ICcnIH1cclxuXHRcdFx0XHRcdHJvd3M9eyA1IH1cclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXNlIHRoZSB0b29sYmFyIHRvIGluc2VydCBtYWNyb3MuIFlvdSBjYW4gYWxzbyB3cml0ZSBjdXN0b20gSFRNTCBoZXJl4oCmXCJcclxuXHRcdFx0XHRcdHN0eWxlPXsge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRcdFx0XHRmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcclxuXHRcdFx0XHRcdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvRnJhZ21lbnQ+XHJcblx0KTtcclxufSIsImltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hbWUgPSBtZXRhZGF0YS5uYW1lO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG5cdGVkaXQsXHJcblx0c2F2ZSxcclxufTtcclxuXHJcbmV4cG9ydCB7IG1ldGFkYXRhIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5ncyxcclxufTsiLCJpbXBvcnQgeyBSYXdIVE1MIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8UmF3SFRNTD57IGF0dHJpYnV0ZXM/LmNvbnRlbnQgPz8gJycgfTwvUmF3SFRNTD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIE1hY3Jvc0luc2VydGVyIGZyb20gJy4vYmxvY2tzL21hY3Jvcy1pbnNlcnRlcic7XHJcbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tYWNyb3MtaW5zZXJ0ZXInLFxyXG5cdCggYmxvY2tzICkgPT4ge1xyXG5cdFx0YmxvY2tzLnB1c2goIE1hY3Jvc0luc2VydGVyICk7XHJcblx0XHRyZXR1cm4gYmxvY2tzO1xyXG5cdH1cclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=