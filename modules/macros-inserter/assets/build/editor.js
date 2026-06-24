/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/blocks/macros-inserter/edit.js"
/*!***********************************************!*\
  !*** ./editor/blocks/macros-inserter/edit.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



const MACRO_FORMAT_OPTION_LABEL = 'option-label';
function toHtmlMacro(name, field, format) {
  const macro = String(name).replace(/^%|%$/g, '').trim();
  let repeaterNote = '';
  if (field?.is_repeater_child) {
    repeaterNote = 'this field can be used only inside repeater - ' + field.repeater_name;
  }
  const formatAttr = MACRO_FORMAT_OPTION_LABEL === format ? ` data-jfb-macro-format="${MACRO_FORMAT_OPTION_LABEL}"` : '';
  return `<span data-jfb-macro="${macro}"${formatAttr}>${repeaterNote}</span>`;
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
    onClick: (macroName, field, format) => {
      insertAtCursor(cmRef.current, toHtmlMacro(macroName, field, format));
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

/***/ },

/***/ "./editor/blocks/macros-inserter/index.js"
/*!************************************************!*\
  !*** ./editor/blocks/macros-inserter/index.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./editor/blocks/macros-inserter/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./editor/blocks/macros-inserter/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./editor/blocks/macros-inserter/save.js");




const name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name;
const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "46",
  height: "50",
  viewBox: "0 0 46 50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M34 37C36.7614 37 39 39.2386 39 42C39 44.7614 36.7614 47 34 47C31.2386 47 29 44.7614 29 42C29 39.2386 31.2386 37 34 37ZM34 39C32.3431 39 31 40.3431 31 42C31 43.6569 32.3431 45 34 45C35.6568 45 37 43.6568 37 42C37 40.3431 35.6568 39 34 39Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M17 34C18.6569 34 20 35.3431 20 37C20 38.6569 18.6569 40 17 40H9C7.34315 40 6 38.6569 6 37C6 35.3431 7.34315 34 9 34H17ZM9 36C8.44772 36 8 36.4477 8 37C8 37.5523 8.44772 38 9 38H17C17.5523 38 18 37.5523 18 37C18 36.4477 17.5523 36 17 36H9Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M27 24C28.6569 24 30 25.3431 30 27C30 28.6569 28.6569 30 27 30H9C7.34315 30 6 28.6569 6 27C6 25.3431 7.34315 24 9 24H27ZM9 26C8.44772 26 8 26.4477 8 27C8 27.5523 8.44772 28 9 28H27C27.5523 28 28 27.5523 28 27C28 26.4477 27.5523 26 27 26H9Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 20C17.5523 20 18 20.4477 18 21C18 21.5523 17.5523 22 17 22H7.5C6.94772 22 6.5 21.5523 6.5 21C6.5 20.4477 6.94772 20 7.5 20H17Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M27 10C28.6569 10 30 11.3431 30 13C30 14.6569 28.6569 16 27 16H9C7.34315 16 6 14.6569 6 13C6 11.3431 7.34315 10 9 10H27ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H27C27.5523 14 28 13.5523 28 13C28 12.4477 27.5523 12 27 12H9Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 6C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H7.5C6.94772 8 6.5 7.55228 6.5 7C6.5 6.44772 6.94772 6 7.5 6H17Z",
  fill: "#0F172A"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M32 0C34.2091 0 36 1.79086 36 4V34.1797L38 34.7109C42.6608 36.3599 46 40 46 42C46 45 40.6274 50 34 50C31.5909 50 29.1601 49.1756 27.1221 48H4C1.79086 48 0 46.2091 0 44V4C0 1.79086 1.79086 0 4 0H32ZM34 36C31.1823 36 28.5936 37.0692 26.7129 38.4766C25.7753 39.1782 25.0602 39.9301 24.5957 40.6113C24.1088 41.3255 24 41.8063 24 42C24 42.1937 24.1088 42.6745 24.5957 43.3887C25.0602 44.0699 25.7753 44.8218 26.7129 45.5234C28.5936 46.9308 31.1823 48 34 48C36.8177 48 39.4064 46.9308 41.2871 45.5234C42.2247 44.8218 42.9398 44.0699 43.4043 43.3887C43.8433 42.7448 43.9745 42.2906 43.9961 42.0654C43.9861 42.0342 43.9677 41.9803 43.9326 41.9023C43.841 41.6985 43.68 41.4166 43.4336 41.0742C42.9417 40.3909 42.1912 39.5818 41.2305 38.8076C39.289 37.2431 36.7186 36 34 36ZM4 2C2.89543 2 2 2.89543 2 4V44C2 45.1046 2.89543 46 4 46H24.3799C22.9152 44.6521 22 43.2041 22 42.0654C22.0002 39.131 28.0665 34 34 34V4C34 2.89543 33.1046 2 32 2H4Z",
  fill: "#0F172A"
}));
const settings = {
  icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metadata: _block_json__WEBPACK_IMPORTED_MODULE_1__,
  name,
  settings
});

/***/ },

/***/ "./editor/blocks/macros-inserter/save.js"
/*!***********************************************!*\
  !*** ./editor/blocks/macros-inserter/save.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/hooks"
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
(module) {

module.exports = window["wp"]["hooks"];

/***/ },

/***/ "./editor/blocks/macros-inserter/block.json"
/*!**************************************************!*\
  !*** ./editor/blocks/macros-inserter/block.json ***!
  \**************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"jet-forms/macros-inserter","title":"Fields Preview","description":"Build a custom preview of filled form data with HTML, CSS, and macros that display field values.","category":"jet-form-builder-fields","supports":{"html":false},"attributes":{"content":{"type":"string","source":"html","selector":"div","default":""}},"editorScript":"jet-fb-macros-inserter-editor","editorStyle":["wp-codemirror","jet-fb-macros-inserter-editor"]}');

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvLi9lZGl0b3IvYmxvY2tzL21hY3Jvcy1pbnNlcnRlci9zYXZlLmpzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgdXNlQmxvY2tQcm9wcywgQmxvY2tDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuY29uc3QgTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9ICdvcHRpb24tbGFiZWwnO1xuXG5mdW5jdGlvbiB0b0h0bWxNYWNybyggbmFtZSwgZmllbGQsIGZvcm1hdCApIHtcblx0Y29uc3QgbWFjcm8gPSBTdHJpbmcoIG5hbWUgKS5yZXBsYWNlKCAvXiV8JSQvZywgJycgKS50cmltKCk7XG5cblx0bGV0IHJlcGVhdGVyTm90ZSA9ICcnO1xuXG5cdGlmICggZmllbGQ/LmlzX3JlcGVhdGVyX2NoaWxkICkgeyBcblx0XHRyZXBlYXRlck5vdGUgPVxuXHRcdFx0J3RoaXMgZmllbGQgY2FuIGJlIHVzZWQgb25seSBpbnNpZGUgcmVwZWF0ZXIgLSAnICsgZmllbGQucmVwZWF0ZXJfbmFtZTtcblx0fSBcblxuXHRjb25zdCBmb3JtYXRBdHRyID0gTUFDUk9fRk9STUFUX09QVElPTl9MQUJFTCA9PT0gZm9ybWF0XG5cdFx0PyBgIGRhdGEtamZiLW1hY3JvLWZvcm1hdD1cIiR7TUFDUk9fRk9STUFUX09QVElPTl9MQUJFTH1cImBcblx0XHQ6ICcnO1xuXG5cdHJldHVybiBgPHNwYW4gZGF0YS1qZmItbWFjcm89XCIke21hY3JvfVwiJHtmb3JtYXRBdHRyfT4ke3JlcGVhdGVyTm90ZX08L3NwYW4+YDtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QXRDdXJzb3IoIGNtLCB0ZXh0ICkge1xuXHRpZiAoICEgY20gKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNtLmZvY3VzKCk7XG5cdGNtLnJlcGxhY2VTZWxlY3Rpb24oIHRleHQsICdlbmQnICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IE1hY3Jvc0ZpZWxkcyA9IHdpbmRvdz8uSmV0RkJDb21wb25lbnRzPy5NYWNyb3NGaWVsZHM7XG5cblx0Y29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWYoIG51bGwgKTtcblx0Y29uc3QgY21SZWYgPSB1c2VSZWYoIG51bGwgKTtcblxuXHQvLyBJbml0IENvZGVNaXJyb3Igb25jZTogQ29kZU1pcnJvciBpcyB0aGUgc291cmNlIG9mIHRydXRoXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGlmICggISB0ZXh0YXJlYVJlZi5jdXJyZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoICEgd2luZG93Py53cD8uY29kZUVkaXRvcj8uaW5pdGlhbGl6ZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9IFxuXG5cdFx0Y29uc3QgaW5zdGFuY2UgPSB3cC5jb2RlRWRpdG9yLmluaXRpYWxpemUoIHRleHRhcmVhUmVmLmN1cnJlbnQsIHtcblx0XHRcdGNvZGVtaXJyb3I6IHtcblx0XHRcdFx0bW9kZTogJ2h0bWxtaXhlZCcsXG5cdFx0XHRcdGxpbmVOdW1iZXJzOiB0cnVlLFxuXHRcdFx0XHRsaW5lV3JhcHBpbmc6IHRydWUsXG5cdFx0XHRcdGluZGVudFVuaXQ6IDIsXG5cdFx0XHRcdHRhYlNpemU6IDIsXG5cdFx0XHR9LFxuXHRcdH0gKTtcblxuXHRcdGNvbnN0IGNtID0gaW5zdGFuY2U/LmNvZGVtaXJyb3I7XG5cdFx0aWYgKCAhIGNtICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNtUmVmLmN1cnJlbnQgPSBjbTtcblxuXHRcdC8vIFNldCBpbml0aWFsIHZhbHVlIG9uY2Vcblx0XHRjbS5zZXRWYWx1ZSggYXR0cmlidXRlcz8uY29udGVudCA/PyAnJyApO1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNvbnRlbnQ6IGNtLmdldFZhbHVlKCkgfSApO1xuXHRcdH07XG5cblx0XHRjbS5vbiggJ2NoYW5nZScsIG9uQ2hhbmdlICk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y20ub2ZmKCAnY2hhbmdlJywgb25DaGFuZ2UgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblxuXHRcdFx0Y21SZWYuY3VycmVudCA9IG51bGw7XG5cdFx0fTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFtdICk7XG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHR7IE1hY3Jvc0ZpZWxkcyA/IChcblx0XHRcdFx0PEJsb2NrQ29udHJvbHMgZ3JvdXA9XCJvdGhlclwiPlxuXHRcdFx0XHRcdDxNYWNyb3NGaWVsZHNcblx0XHRcdFx0XHRcdHdpdGhDdXJyZW50XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsobWFjcm9OYW1lLCBmaWVsZCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGluc2VydEF0Q3Vyc29yKFxuXHRcdFx0XHRcdFx0XHRcdGNtUmVmLmN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdFx0dG9IdG1sTWFjcm8obWFjcm9OYW1lLCBmaWVsZCwgZm9ybWF0KVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQpIDogbnVsbCB9XG5cblx0XHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdHJlZj17IHRleHRhcmVhUmVmIH1cblx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9eyBhdHRyaWJ1dGVzPy5jb250ZW50ID8/ICcnIH1cblx0XHRcdFx0XHRyb3dzPXsgNSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2UgdGhlIHRvb2xiYXIgdG8gaW5zZXJ0IG1hY3Jvcy4gWW91IGNhbiBhbHNvIHdyaXRlIGN1c3RvbSBIVE1MIGhlcmXigKZcIlxuXHRcdFx0XHRcdHN0eWxlPXsge1xuXHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxuXHRcdFx0XHRcdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufSIsImltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gbWV0YWRhdGEubmFtZTtcblxuY29uc3QgaWNvbiA9IChcblx0PHN2Z1xuXHRcdHdpZHRoPVwiNDZcIlxuXHRcdGhlaWdodD1cIjUwXCJcblx0XHR2aWV3Qm94PVwiMCAwIDQ2IDUwXCJcblx0XHRmaWxsPVwibm9uZVwiXG5cdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdD5cblx0XHQ8cGF0aFxuXHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRkPVwiTTM0IDM3QzM2Ljc2MTQgMzcgMzkgMzkuMjM4NiAzOSA0MkMzOSA0NC43NjE0IDM2Ljc2MTQgNDcgMzQgNDdDMzEuMjM4NiA0NyAyOSA0NC43NjE0IDI5IDQyQzI5IDM5LjIzODYgMzEuMjM4NiAzNyAzNCAzN1pNMzQgMzlDMzIuMzQzMSAzOSAzMSA0MC4zNDMxIDMxIDQyQzMxIDQzLjY1NjkgMzIuMzQzMSA0NSAzNCA0NUMzNS42NTY4IDQ1IDM3IDQzLjY1NjggMzcgNDJDMzcgNDAuMzQzMSAzNS42NTY4IDM5IDM0IDM5WlwiXG5cdFx0XHRmaWxsPVwiIzBGMTcyQVwiXG5cdFx0Lz5cblx0XHQ8cGF0aFxuXHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRkPVwiTTE3IDM0QzE4LjY1NjkgMzQgMjAgMzUuMzQzMSAyMCAzN0MyMCAzOC42NTY5IDE4LjY1NjkgNDAgMTcgNDBIOUM3LjM0MzE1IDQwIDYgMzguNjU2OSA2IDM3QzYgMzUuMzQzMSA3LjM0MzE1IDM0IDkgMzRIMTdaTTkgMzZDOC40NDc3MiAzNiA4IDM2LjQ0NzcgOCAzN0M4IDM3LjU1MjMgOC40NDc3MiAzOCA5IDM4SDE3QzE3LjU1MjMgMzggMTggMzcuNTUyMyAxOCAzN0MxOCAzNi40NDc3IDE3LjU1MjMgMzYgMTcgMzZIOVpcIlxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIlxuXHRcdC8+XG5cdFx0PHBhdGhcblx0XHRcdGZpbGxSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0ZD1cIk0yNyAyNEMyOC42NTY5IDI0IDMwIDI1LjM0MzEgMzAgMjdDMzAgMjguNjU2OSAyOC42NTY5IDMwIDI3IDMwSDlDNy4zNDMxNSAzMCA2IDI4LjY1NjkgNiAyN0M2IDI1LjM0MzEgNy4zNDMxNSAyNCA5IDI0SDI3Wk05IDI2QzguNDQ3NzIgMjYgOCAyNi40NDc3IDggMjdDOCAyNy41NTIzIDguNDQ3NzIgMjggOSAyOEgyN0MyNy41NTIzIDI4IDI4IDI3LjU1MjMgMjggMjdDMjggMjYuNDQ3NyAyNy41NTIzIDI2IDI3IDI2SDlaXCJcblx0XHRcdGZpbGw9XCIjMEYxNzJBXCJcblx0XHQvPlxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTE3IDIwQzE3LjU1MjMgMjAgMTggMjAuNDQ3NyAxOCAyMUMxOCAyMS41NTIzIDE3LjU1MjMgMjIgMTcgMjJINy41QzYuOTQ3NzIgMjIgNi41IDIxLjU1MjMgNi41IDIxQzYuNSAyMC40NDc3IDYuOTQ3NzIgMjAgNy41IDIwSDE3WlwiXG5cdFx0XHRmaWxsPVwiIzBGMTcyQVwiXG5cdFx0Lz5cblx0XHQ8cGF0aFxuXHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXG5cdFx0XHRkPVwiTTI3IDEwQzI4LjY1NjkgMTAgMzAgMTEuMzQzMSAzMCAxM0MzMCAxNC42NTY5IDI4LjY1NjkgMTYgMjcgMTZIOUM3LjM0MzE1IDE2IDYgMTQuNjU2OSA2IDEzQzYgMTEuMzQzMSA3LjM0MzE1IDEwIDkgMTBIMjdaTTkgMTJDOC40NDc3MiAxMiA4IDEyLjQ0NzcgOCAxM0M4IDEzLjU1MjMgOC40NDc3MiAxNCA5IDE0SDI3QzI3LjU1MjMgMTQgMjggMTMuNTUyMyAyOCAxM0MyOCAxMi40NDc3IDI3LjU1MjMgMTIgMjcgMTJIOVpcIlxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIlxuXHRcdC8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMTcgNkMxNy41NTIzIDYgMTggNi40NDc3MiAxOCA3QzE4IDcuNTUyMjggMTcuNTUyMyA4IDE3IDhINy41QzYuOTQ3NzIgOCA2LjUgNy41NTIyOCA2LjUgN0M2LjUgNi40NDc3MiA2Ljk0NzcyIDYgNy41IDZIMTdaXCJcblx0XHRcdGZpbGw9XCIjMEYxNzJBXCJcblx0XHQvPlxuXHRcdDxwYXRoXG5cdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxuXHRcdFx0Y2xpcFJ1bGU9XCJldmVub2RkXCJcblx0XHRcdGQ9XCJNMzIgMEMzNC4yMDkxIDAgMzYgMS43OTA4NiAzNiA0VjM0LjE3OTdMMzggMzQuNzEwOUM0Mi42NjA4IDM2LjM1OTkgNDYgNDAgNDYgNDJDNDYgNDUgNDAuNjI3NCA1MCAzNCA1MEMzMS41OTA5IDUwIDI5LjE2MDEgNDkuMTc1NiAyNy4xMjIxIDQ4SDRDMS43OTA4NiA0OCAwIDQ2LjIwOTEgMCA0NFY0QzAgMS43OTA4NiAxLjc5MDg2IDAgNCAwSDMyWk0zNCAzNkMzMS4xODIzIDM2IDI4LjU5MzYgMzcuMDY5MiAyNi43MTI5IDM4LjQ3NjZDMjUuNzc1MyAzOS4xNzgyIDI1LjA2MDIgMzkuOTMwMSAyNC41OTU3IDQwLjYxMTNDMjQuMTA4OCA0MS4zMjU1IDI0IDQxLjgwNjMgMjQgNDJDMjQgNDIuMTkzNyAyNC4xMDg4IDQyLjY3NDUgMjQuNTk1NyA0My4zODg3QzI1LjA2MDIgNDQuMDY5OSAyNS43NzUzIDQ0LjgyMTggMjYuNzEyOSA0NS41MjM0QzI4LjU5MzYgNDYuOTMwOCAzMS4xODIzIDQ4IDM0IDQ4QzM2LjgxNzcgNDggMzkuNDA2NCA0Ni45MzA4IDQxLjI4NzEgNDUuNTIzNEM0Mi4yMjQ3IDQ0LjgyMTggNDIuOTM5OCA0NC4wNjk5IDQzLjQwNDMgNDMuMzg4N0M0My44NDMzIDQyLjc0NDggNDMuOTc0NSA0Mi4yOTA2IDQzLjk5NjEgNDIuMDY1NEM0My45ODYxIDQyLjAzNDIgNDMuOTY3NyA0MS45ODAzIDQzLjkzMjYgNDEuOTAyM0M0My44NDEgNDEuNjk4NSA0My42OCA0MS40MTY2IDQzLjQzMzYgNDEuMDc0MkM0Mi45NDE3IDQwLjM5MDkgNDIuMTkxMiAzOS41ODE4IDQxLjIzMDUgMzguODA3NkMzOS4yODkgMzcuMjQzMSAzNi43MTg2IDM2IDM0IDM2Wk00IDJDMi44OTU0MyAyIDIgMi44OTU0MyAyIDRWNDRDMiA0NS4xMDQ2IDIuODk1NDMgNDYgNCA0NkgyNC4zNzk5QzIyLjkxNTIgNDQuNjUyMSAyMiA0My4yMDQxIDIyIDQyLjA2NTRDMjIuMDAwMiAzOS4xMzEgMjguMDY2NSAzNCAzNCAzNFY0QzM0IDIuODk1NDMgMzMuMTA0NiAyIDMyIDJINFpcIlxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIlxuXHRcdC8+XG5cdDwvc3ZnPlxuKTtcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHRpY29uLFxuXHRlZGl0LFxuXHRzYXZlLFxufTtcblxuZXhwb3J0IHsgbWV0YWRhdGEgfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3MsXG59OyIsImltcG9ydCB7IFJhd0hUTUwgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlKCB7IGF0dHJpYnV0ZXMgfSApIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PFJhd0hUTUw+eyBhdHRyaWJ1dGVzPy5jb250ZW50ID8/ICcnIH08L1Jhd0hUTUw+XG5cdFx0PC9kaXY+XG5cdCk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIE1hY3Jvc0luc2VydGVyIGZyb20gJy4vYmxvY2tzL21hY3Jvcy1pbnNlcnRlcic7XG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21hY3Jvcy1pbnNlcnRlcicsXG5cdCggYmxvY2tzICkgPT4ge1xuXHRcdGJsb2Nrcy5wdXNoKCBNYWNyb3NJbnNlcnRlciApO1xuXHRcdHJldHVybiBibG9ja3M7XG5cdH1cbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9