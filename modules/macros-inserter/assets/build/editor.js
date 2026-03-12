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
  if (field?.is_repeater_child) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyLy4vZWRpdG9yL2Jsb2Nrcy9tYWNyb3MtaW5zZXJ0ZXIvZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyLy4vZWRpdG9yL2Jsb2Nrcy9tYWNyb3MtaW5zZXJ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL3NhdmUuanMiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IHVzZUJsb2NrUHJvcHMsIEJsb2NrQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XHJcblxyXG5mdW5jdGlvbiB0b0h0bWxNYWNybyggbmFtZSwgZmllbGQgKSB7XHJcblx0Y29uc3QgbWFjcm8gPSBTdHJpbmcoIG5hbWUgKS5yZXBsYWNlKCAvXiV8JSQvZywgJycgKS50cmltKCk7XHJcblxyXG5cdGxldCByZXBlYXRlck5vdGUgPSAnJztcclxuXHJcblx0aWYgKCBmaWVsZD8uaXNfcmVwZWF0ZXJfY2hpbGQgKSB7IFxyXG5cdFx0cmVwZWF0ZXJOb3RlID1cclxuXHRcdFx0J3RoaXMgZmllbGQgY2FuIGJlIHVzZWQgb25seSBpbnNpZGUgcmVwZWF0ZXIgLSAnICsgZmllbGQucmVwZWF0ZXJfbmFtZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBgPHNwYW4gZGF0YS1qZmItbWFjcm89XCIkeyBtYWNybyB9XCI+JHsgcmVwZWF0ZXJOb3RlIH08L3NwYW4+YDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QXRDdXJzb3IoIGNtLCB0ZXh0ICkge1xyXG5cdGlmICggISBjbSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y20uZm9jdXMoKTtcclxuXHRjbS5yZXBsYWNlU2VsZWN0aW9uKCB0ZXh0LCAnZW5kJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCBNYWNyb3NGaWVsZHMgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cz8uTWFjcm9zRmllbGRzO1xyXG5cclxuXHRjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG5cdGNvbnN0IGNtUmVmID0gdXNlUmVmKCBudWxsICk7XHJcblxyXG5cdC8vIEluaXQgQ29kZU1pcnJvciBvbmNlOiBDb2RlTWlycm9yIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGhcclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggISB0ZXh0YXJlYVJlZi5jdXJyZW50ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoICEgd2luZG93Py53cD8uY29kZUVkaXRvcj8uaW5pdGlhbGl6ZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluc3RhbmNlID0gd3AuY29kZUVkaXRvci5pbml0aWFsaXplKCB0ZXh0YXJlYVJlZi5jdXJyZW50LCB7XHJcblx0XHRcdGNvZGVtaXJyb3I6IHtcclxuXHRcdFx0XHRtb2RlOiAnaHRtbG1peGVkJyxcclxuXHRcdFx0XHRsaW5lTnVtYmVyczogdHJ1ZSxcclxuXHRcdFx0XHRsaW5lV3JhcHBpbmc6IHRydWUsXHJcblx0XHRcdFx0aW5kZW50VW5pdDogMixcclxuXHRcdFx0XHR0YWJTaXplOiAyLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGNvbnN0IGNtID0gaW5zdGFuY2U/LmNvZGVtaXJyb3I7XHJcblx0XHRpZiAoICEgY20gKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjbVJlZi5jdXJyZW50ID0gY207XHJcblxyXG5cdFx0Ly8gU2V0IGluaXRpYWwgdmFsdWUgb25jZVxyXG5cdFx0Y20uc2V0VmFsdWUoIGF0dHJpYnV0ZXM/LmNvbnRlbnQgPz8gJycgKTtcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZSA9ICgpID0+IHtcclxuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50OiBjbS5nZXRWYWx1ZSgpIH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y20ub24oICdjaGFuZ2UnLCBvbkNoYW5nZSApO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y20ub2ZmKCAnY2hhbmdlJywgb25DaGFuZ2UgKTtcclxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxyXG5cclxuXHRcdFx0Y21SZWYuY3VycmVudCA9IG51bGw7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtdICk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdHsgTWFjcm9zRmllbGRzID8gKFxyXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGdyb3VwPVwib3RoZXJcIj5cclxuXHRcdFx0XHRcdDxNYWNyb3NGaWVsZHNcclxuXHRcdFx0XHRcdFx0d2l0aEN1cnJlbnRcclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICggbWFjcm9OYW1lLCBmaWVsZCApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpbnNlcnRBdEN1cnNvcihcclxuXHRcdFx0XHRcdFx0XHRcdGNtUmVmLmN1cnJlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHR0b0h0bWxNYWNybyggbWFjcm9OYW1lLCBmaWVsZCApXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cclxuXHRcdFx0KSA6IG51bGwgfVxyXG5cclxuXHRcdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdHJlZj17IHRleHRhcmVhUmVmIH1cclxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17IGF0dHJpYnV0ZXM/LmNvbnRlbnQgPz8gJycgfVxyXG5cdFx0XHRcdFx0cm93cz17IDUgfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2UgdGhlIHRvb2xiYXIgdG8gaW5zZXJ0IG1hY3Jvcy4gWW91IGNhbiBhbHNvIHdyaXRlIGN1c3RvbSBIVE1MIGhlcmXigKZcIlxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxyXG5cdFx0XHRcdFx0XHRib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59IiwiaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgbmFtZSA9IG1ldGFkYXRhLm5hbWU7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0ZWRpdCxcclxuXHRzYXZlLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgbWV0YWRhdGEgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzLFxyXG59OyIsImltcG9ydCB7IFJhd0hUTUwgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZSggeyBhdHRyaWJ1dGVzIH0gKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxSYXdIVE1MPnsgYXR0cmlidXRlcz8uY29udGVudCA/PyAnJyB9PC9SYXdIVE1MPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgTWFjcm9zSW5zZXJ0ZXIgZnJvbSAnLi9ibG9ja3MvbWFjcm9zLWluc2VydGVyJztcclxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21hY3Jvcy1pbnNlcnRlcicsXHJcblx0KCBibG9ja3MgKSA9PiB7XHJcblx0XHRibG9ja3MucHVzaCggTWFjcm9zSW5zZXJ0ZXIgKTtcclxuXHRcdHJldHVybiBibG9ja3M7XHJcblx0fVxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==