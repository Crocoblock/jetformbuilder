/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/blocks/macros-inserter/block.json":
/*!**************************************************!*\
  !*** ./editor/blocks/macros-inserter/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"jet-forms/macros-inserter","title":"Fields Preview","category":"jet-form-builder-fields","supports":{"html":false},"attributes":{"content":{"type":"string","source":"html","selector":"div","default":""}}}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyLy4vZWRpdG9yL2Jsb2Nrcy9tYWNyb3MtaW5zZXJ0ZXIvZWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyLy4vZWRpdG9yL2Jsb2Nrcy9tYWNyb3MtaW5zZXJ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9ibG9ja3MvbWFjcm9zLWluc2VydGVyL3NhdmUuanMiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1tYWNyb3MtaW5zZXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItbWFjcm9zLWluc2VydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW1hY3Jvcy1pbnNlcnRlci8uL2VkaXRvci9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XHJcbmltcG9ydCB7IHVzZUJsb2NrUHJvcHMsIEJsb2NrQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XHJcblxyXG5mdW5jdGlvbiB0b0h0bWxNYWNybyggbmFtZSwgZmllbGQgKSB7XHJcblx0Y29uc3QgbWFjcm8gPSBTdHJpbmcoIG5hbWUgKS5yZXBsYWNlKCAvXiV8JSQvZywgJycgKS50cmltKCk7XHJcblxyXG5cdGxldCByZXBlYXRlck5vdGUgPSAnJztcclxuXHJcblx0aWYgKCBmaWVsZD8uaXNfcmVwZWF0ZXJfY2hpbGQgKSB7IFxyXG5cdFx0cmVwZWF0ZXJOb3RlID1cclxuXHRcdFx0J3RoaXMgZmllbGQgY2FuIGJlIHVzZWQgb25seSBpbnNpZGUgcmVwZWF0ZXIgLSAnICsgZmllbGQucmVwZWF0ZXJfbmFtZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBgPHNwYW4gZGF0YS1qZmItbWFjcm89XCIkeyBtYWNybyB9XCI+JHsgcmVwZWF0ZXJOb3RlIH08L3NwYW4+YDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QXRDdXJzb3IoIGNtLCB0ZXh0ICkge1xyXG5cdGlmICggISBjbSApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y20uZm9jdXMoKTtcclxuXHRjbS5yZXBsYWNlU2VsZWN0aW9uKCB0ZXh0LCAnZW5kJyApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCBNYWNyb3NGaWVsZHMgPSB3aW5kb3c/LkpldEZCQ29tcG9uZW50cz8uTWFjcm9zRmllbGRzO1xyXG5cclxuXHRjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZiggbnVsbCApO1xyXG5cdGNvbnN0IGNtUmVmID0gdXNlUmVmKCBudWxsICk7XHJcblxyXG5cdC8vIEluaXQgQ29kZU1pcnJvciBvbmNlOiBDb2RlTWlycm9yIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGhcclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggISB0ZXh0YXJlYVJlZi5jdXJyZW50ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoICEgd2luZG93Py53cD8uY29kZUVkaXRvcj8uaW5pdGlhbGl6ZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluc3RhbmNlID0gd3AuY29kZUVkaXRvci5pbml0aWFsaXplKCB0ZXh0YXJlYVJlZi5jdXJyZW50LCB7XHJcblx0XHRcdGNvZGVtaXJyb3I6IHtcclxuXHRcdFx0XHRtb2RlOiAnaHRtbG1peGVkJyxcclxuXHRcdFx0XHRsaW5lTnVtYmVyczogdHJ1ZSxcclxuXHRcdFx0XHRsaW5lV3JhcHBpbmc6IHRydWUsXHJcblx0XHRcdFx0aW5kZW50VW5pdDogMixcclxuXHRcdFx0XHR0YWJTaXplOiAyLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdGNvbnN0IGNtID0gaW5zdGFuY2U/LmNvZGVtaXJyb3I7XHJcblx0XHRpZiAoICEgY20gKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjbVJlZi5jdXJyZW50ID0gY207XHJcblxyXG5cdFx0Ly8gU2V0IGluaXRpYWwgdmFsdWUgb25jZVxyXG5cdFx0Y20uc2V0VmFsdWUoIGF0dHJpYnV0ZXM/LmNvbnRlbnQgPz8gJycgKTtcclxuXHJcblx0XHRjb25zdCBvbkNoYW5nZSA9ICgpID0+IHtcclxuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBjb250ZW50OiBjbS5nZXRWYWx1ZSgpIH0gKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y20ub24oICdjaGFuZ2UnLCBvbkNoYW5nZSApO1xyXG5cclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y20ub2ZmKCAnY2hhbmdlJywgb25DaGFuZ2UgKTtcclxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxyXG5cclxuXHRcdFx0Y21SZWYuY3VycmVudCA9IG51bGw7XHJcblx0XHR9O1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFtdICk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdHsgTWFjcm9zRmllbGRzID8gKFxyXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzIGdyb3VwPVwib3RoZXJcIj5cclxuXHRcdFx0XHRcdDxNYWNyb3NGaWVsZHNcclxuXHRcdFx0XHRcdFx0d2l0aEN1cnJlbnRcclxuXHRcdFx0XHRcdFx0b25DbGljaz17ICggbWFjcm9OYW1lLCBmaWVsZCApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpbnNlcnRBdEN1cnNvcihcclxuXHRcdFx0XHRcdFx0XHRcdGNtUmVmLmN1cnJlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHR0b0h0bWxNYWNybyggbWFjcm9OYW1lLCBmaWVsZCApXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQmxvY2tDb250cm9scz5cclxuXHRcdFx0KSA6IG51bGwgfVxyXG5cclxuXHRcdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdHJlZj17IHRleHRhcmVhUmVmIH1cclxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17IGF0dHJpYnV0ZXM/LmNvbnRlbnQgPz8gJycgfVxyXG5cdFx0XHRcdFx0cm93cz17IDUgfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2UgdGhlIHRvb2xiYXIgdG8gaW5zZXJ0IG1hY3Jvcy4gWW91IGNhbiBhbHNvIHdyaXRlIGN1c3RvbSBIVE1MIGhlcmXigKZcIlxyXG5cdFx0XHRcdFx0c3R5bGU9eyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdFx0XHRcdGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLFxyXG5cdFx0XHRcdFx0XHRib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59IiwiaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XHJcbmltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgbmFtZSA9IG1ldGFkYXRhLm5hbWU7XHJcblxyXG5jb25zdCBpY29uID0gKFxyXG5cdDxzdmdcclxuXHRcdHdpZHRoPVwiNDZcIlxyXG5cdFx0aGVpZ2h0PVwiNTBcIlxyXG5cdFx0dmlld0JveD1cIjAgMCA0NiA1MFwiXHJcblx0XHRmaWxsPVwibm9uZVwiXHJcblx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuXHQ+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRkPVwiTTM0IDM3QzM2Ljc2MTQgMzcgMzkgMzkuMjM4NiAzOSA0MkMzOSA0NC43NjE0IDM2Ljc2MTQgNDcgMzQgNDdDMzEuMjM4NiA0NyAyOSA0NC43NjE0IDI5IDQyQzI5IDM5LjIzODYgMzEuMjM4NiAzNyAzNCAzN1pNMzQgMzlDMzIuMzQzMSAzOSAzMSA0MC4zNDMxIDMxIDQyQzMxIDQzLjY1NjkgMzIuMzQzMSA0NSAzNCA0NUMzNS42NTY4IDQ1IDM3IDQzLjY1NjggMzcgNDJDMzcgNDAuMzQzMSAzNS42NTY4IDM5IDM0IDM5WlwiXHJcblx0XHRcdGZpbGw9XCIjMEYxNzJBXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRkPVwiTTE3IDM0QzE4LjY1NjkgMzQgMjAgMzUuMzQzMSAyMCAzN0MyMCAzOC42NTY5IDE4LjY1NjkgNDAgMTcgNDBIOUM3LjM0MzE1IDQwIDYgMzguNjU2OSA2IDM3QzYgMzUuMzQzMSA3LjM0MzE1IDM0IDkgMzRIMTdaTTkgMzZDOC40NDc3MiAzNiA4IDM2LjQ0NzcgOCAzN0M4IDM3LjU1MjMgOC40NDc3MiAzOCA5IDM4SDE3QzE3LjU1MjMgMzggMTggMzcuNTUyMyAxOCAzN0MxOCAzNi40NDc3IDE3LjU1MjMgMzYgMTcgMzZIOVpcIlxyXG5cdFx0XHRmaWxsPVwiIzBGMTcyQVwiXHJcblx0XHQvPlxyXG5cdFx0PHBhdGhcclxuXHRcdFx0ZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdFx0Y2xpcFJ1bGU9XCJldmVub2RkXCJcclxuXHRcdFx0ZD1cIk0yNyAyNEMyOC42NTY5IDI0IDMwIDI1LjM0MzEgMzAgMjdDMzAgMjguNjU2OSAyOC42NTY5IDMwIDI3IDMwSDlDNy4zNDMxNSAzMCA2IDI4LjY1NjkgNiAyN0M2IDI1LjM0MzEgNy4zNDMxNSAyNCA5IDI0SDI3Wk05IDI2QzguNDQ3NzIgMjYgOCAyNi40NDc3IDggMjdDOCAyNy41NTIzIDguNDQ3NzIgMjggOSAyOEgyN0MyNy41NTIzIDI4IDI4IDI3LjU1MjMgMjggMjdDMjggMjYuNDQ3NyAyNy41NTIzIDI2IDI3IDI2SDlaXCJcclxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9XCJNMTcgMjBDMTcuNTUyMyAyMCAxOCAyMC40NDc3IDE4IDIxQzE4IDIxLjU1MjMgMTcuNTUyMyAyMiAxNyAyMkg3LjVDNi45NDc3MiAyMiA2LjUgMjEuNTUyMyA2LjUgMjFDNi41IDIwLjQ0NzcgNi45NDc3MiAyMCA3LjUgMjBIMTdaXCJcclxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIlxyXG5cdFx0Lz5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHRcdGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcblx0XHRcdGQ9XCJNMjcgMTBDMjguNjU2OSAxMCAzMCAxMS4zNDMxIDMwIDEzQzMwIDE0LjY1NjkgMjguNjU2OSAxNiAyNyAxNkg5QzcuMzQzMTUgMTYgNiAxNC42NTY5IDYgMTNDNiAxMS4zNDMxIDcuMzQzMTUgMTAgOSAxMEgyN1pNOSAxMkM4LjQ0NzcyIDEyIDggMTIuNDQ3NyA4IDEzQzggMTMuNTUyMyA4LjQ0NzcyIDE0IDkgMTRIMjdDMjcuNTUyMyAxNCAyOCAxMy41NTIzIDI4IDEzQzI4IDEyLjQ0NzcgMjcuNTUyMyAxMiAyNyAxMkg5WlwiXHJcblx0XHRcdGZpbGw9XCIjMEYxNzJBXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRkPVwiTTE3IDZDMTcuNTUyMyA2IDE4IDYuNDQ3NzIgMTggN0MxOCA3LjU1MjI4IDE3LjU1MjMgOCAxNyA4SDcuNUM2Ljk0NzcyIDggNi41IDcuNTUyMjggNi41IDdDNi41IDYuNDQ3NzIgNi45NDc3MiA2IDcuNSA2SDE3WlwiXHJcblx0XHRcdGZpbGw9XCIjMEYxNzJBXCJcclxuXHRcdC8+XHJcblx0XHQ8cGF0aFxyXG5cdFx0XHRmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRkPVwiTTMyIDBDMzQuMjA5MSAwIDM2IDEuNzkwODYgMzYgNFYzNC4xNzk3TDM4IDM0LjcxMDlDNDIuNjYwOCAzNi4zNTk5IDQ2IDQwIDQ2IDQyQzQ2IDQ1IDQwLjYyNzQgNTAgMzQgNTBDMzEuNTkwOSA1MCAyOS4xNjAxIDQ5LjE3NTYgMjcuMTIyMSA0OEg0QzEuNzkwODYgNDggMCA0Ni4yMDkxIDAgNDRWNEMwIDEuNzkwODYgMS43OTA4NiAwIDQgMEgzMlpNMzQgMzZDMzEuMTgyMyAzNiAyOC41OTM2IDM3LjA2OTIgMjYuNzEyOSAzOC40NzY2QzI1Ljc3NTMgMzkuMTc4MiAyNS4wNjAyIDM5LjkzMDEgMjQuNTk1NyA0MC42MTEzQzI0LjEwODggNDEuMzI1NSAyNCA0MS44MDYzIDI0IDQyQzI0IDQyLjE5MzcgMjQuMTA4OCA0Mi42NzQ1IDI0LjU5NTcgNDMuMzg4N0MyNS4wNjAyIDQ0LjA2OTkgMjUuNzc1MyA0NC44MjE4IDI2LjcxMjkgNDUuNTIzNEMyOC41OTM2IDQ2LjkzMDggMzEuMTgyMyA0OCAzNCA0OEMzNi44MTc3IDQ4IDM5LjQwNjQgNDYuOTMwOCA0MS4yODcxIDQ1LjUyMzRDNDIuMjI0NyA0NC44MjE4IDQyLjkzOTggNDQuMDY5OSA0My40MDQzIDQzLjM4ODdDNDMuODQzMyA0Mi43NDQ4IDQzLjk3NDUgNDIuMjkwNiA0My45OTYxIDQyLjA2NTRDNDMuOTg2MSA0Mi4wMzQyIDQzLjk2NzcgNDEuOTgwMyA0My45MzI2IDQxLjkwMjNDNDMuODQxIDQxLjY5ODUgNDMuNjggNDEuNDE2NiA0My40MzM2IDQxLjA3NDJDNDIuOTQxNyA0MC4zOTA5IDQyLjE5MTIgMzkuNTgxOCA0MS4yMzA1IDM4LjgwNzZDMzkuMjg5IDM3LjI0MzEgMzYuNzE4NiAzNiAzNCAzNlpNNCAyQzIuODk1NDMgMiAyIDIuODk1NDMgMiA0VjQ0QzIgNDUuMTA0NiAyLjg5NTQzIDQ2IDQgNDZIMjQuMzc5OUMyMi45MTUyIDQ0LjY1MjEgMjIgNDMuMjA0MSAyMiA0Mi4wNjU0QzIyLjAwMDIgMzkuMTMxIDI4LjA2NjUgMzQgMzQgMzRWNEMzNCAyLjg5NTQzIDMzLjEwNDYgMiAzMiAySDRaXCJcclxuXHRcdFx0ZmlsbD1cIiMwRjE3MkFcIlxyXG5cdFx0Lz5cclxuXHQ8L3N2Zz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuXHRpY29uLFxyXG5cdGVkaXQsXHJcblx0c2F2ZSxcclxufTtcclxuXHJcbmV4cG9ydCB7IG1ldGFkYXRhIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5ncyxcclxufTsiLCJpbXBvcnQgeyBSYXdIVE1MIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoIHsgYXR0cmlidXRlcyB9ICkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8UmF3SFRNTD57IGF0dHJpYnV0ZXM/LmNvbnRlbnQgPz8gJycgfTwvUmF3SFRNTD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIE1hY3Jvc0luc2VydGVyIGZyb20gJy4vYmxvY2tzL21hY3Jvcy1pbnNlcnRlcic7XHJcbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVnaXN0ZXIuZmllbGRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tYWNyb3MtaW5zZXJ0ZXInLFxyXG5cdCggYmxvY2tzICkgPT4ge1xyXG5cdFx0YmxvY2tzLnB1c2goIE1hY3Jvc0luc2VydGVyICk7XHJcblx0XHRyZXR1cm4gYmxvY2tzO1xyXG5cdH1cclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=