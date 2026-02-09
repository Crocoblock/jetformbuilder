/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../blocks/multi-gateway/block.json":
/*!*********************************************!*\
  !*** ../../blocks/multi-gateway/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/multi-gateway","title":"Multi Gateway","description":"Displays available payment gateways selected in form settings.","category":"jet-form-builder-fields","textdomain":"jet-form-builder","keywords":["jetformbuilder","gateway","payment"],"supports":{"html":false,"multiple":false},"attributes":{"isPreview":{"type":"boolean","default":false},"title":{"type":"string","default":""},"description":{"type":"string","default":""}},"viewScript":"jet-fb-multi-gateway","style":"jet-fb-multi-gateway"}');

/***/ }),

/***/ "./editor/blocks/multi-gateway/block.scss":
/*!************************************************!*\
  !*** ./editor/blocks/multi-gateway/block.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./editor/blocks/multi-gateway/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/multi-gateway/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultiGatewayEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  useBlockProps,
  RichText
} = wp.blockEditor;
const {
  useMetaState
} = JetFBHooks;
const gatewaysData = window?.JetFormEditorData?.gateways;
const MODE_MANUAL = 'manual';
const getGatewayLabel = type => gatewaysData?.list?.find(el => el.value === type)?.label || type;
function MultiGatewayEdit({
  attributes,
  setAttributes
}) {
  const blockProps = useBlockProps({
    className: 'jfb-multi-gateway'
  });
  const [meta] = useMetaState('_jf_gateways');
  const mode = meta?.mode || 'single';
  let selected = [];
  if (mode === MODE_MANUAL) {
    selected = (gatewaysData?.list || []).map(({
      value
    }) => value).filter(key => !!meta?.[key]?.show_on_front);
  } else {
    const gw = meta?.gateway;
    if (gw && gw !== 'none') {
      selected = [gw];
    }
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "h3",
    value: attributes.title || '',
    placeholder: "Payment options",
    onChange: title => setAttributes({
      title
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "p",
    value: attributes.description || '',
    placeholder: "Optional text for this form step.",
    onChange: description => setAttributes({
      description
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jfb-multi-gateway__list"
  }, selected.length ? selected.map((key, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    key: key,
    className: "jfb-multi-gateway__item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    checked: index === 0,
    readOnly: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, getGatewayLabel(key)))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jfb-multi-gateway__empty"
  }, "No gateways selected")));
}

/***/ }),

/***/ "./editor/blocks/multi-gateway/index.js":
/*!**********************************************!*\
  !*** ./editor/blocks/multi-gateway/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metadata: () => (/* reexport default export from named module */ _root_blocks_multi_gateway_block_json__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/multi-gateway/edit.js");
/* harmony import */ var _root_blocks_multi_gateway_block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/blocks/multi-gateway/block.json */ "../../blocks/multi-gateway/block.json");
/* harmony import */ var _block_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.scss */ "./editor/blocks/multi-gateway/block.scss");




const {
  __
} = wp.i18n;
const {
  createBlock
} = wp.blocks;
const {
  name,
  icon = ''
} = _root_blocks_multi_gateway_block_json__WEBPACK_IMPORTED_MODULE_2__;
_root_blocks_multi_gateway_block_json__WEBPACK_IMPORTED_MODULE_2__.attributes.isPreview = {
  'type': 'boolean',
  'default': false
};
const settings = {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  description: __(`Displays available payment gateways selected in form settings.`, 'jet-form-builder'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  example: {
    attributes: {
      isPreview: true
    }
  },
  transforms: {
    to: [{
      type: 'block',
      blocks: ['jet-forms/text-field'],
      transform: attributes => {
        return createBlock('jet-forms/text-field', {
          ...attributes
        });
      },
      priority: 0
    }],
    from: [{
      type: 'block',
      blocks: ['jet-forms/checkbox-field', 'jet-forms/radio-field', 'jet-forms/select-field'],
      transform: attributes => {
        return createBlock(name, {
          ...attributes
        });
      },
      priority: 0
    }]
  }
};


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
/* harmony import */ var _blocks_multi_gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/multi-gateway */ "./editor/blocks/multi-gateway/index.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);


(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('jet.fb.register.fields', 'jet-form-builder/multi-gateway', function (blocks) {
  blocks.push(_blocks_multi_gateway__WEBPACK_IMPORTED_MODULE_0__);
  return blocks;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDeERBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUVBO0FBSUE7QUFJQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW11bHRpLWdhdGV3YXkvLi9lZGl0b3IvYmxvY2tzL211bHRpLWdhdGV3YXkvYmxvY2suc2NzcyIsIndlYnBhY2s6Ly9qZmItbXVsdGktZ2F0ZXdheS8uL2VkaXRvci9ibG9ja3MvbXVsdGktZ2F0ZXdheS9lZGl0LmpzIiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5Ly4vZWRpdG9yL2Jsb2Nrcy9tdWx0aS1nYXRld2F5L2luZGV4LmpzIiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5L2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vamZiLW11bHRpLWdhdGV3YXkvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItbXVsdGktZ2F0ZXdheS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItbXVsdGktZ2F0ZXdheS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItbXVsdGktZ2F0ZXdheS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLW11bHRpLWdhdGV3YXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItbXVsdGktZ2F0ZXdheS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5Ly4vZWRpdG9yL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgeyB1c2VCbG9ja1Byb3BzLCBSaWNoVGV4dCB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5jb25zdCB7IHVzZU1ldGFTdGF0ZSB9ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IGdhdGV3YXlzRGF0YSA9IHdpbmRvdz8uSmV0Rm9ybUVkaXRvckRhdGE/LmdhdGV3YXlzO1xyXG5jb25zdCBNT0RFX01BTlVBTCA9ICdtYW51YWwnO1xyXG5cclxuY29uc3QgZ2V0R2F0ZXdheUxhYmVsID0gKCB0eXBlICkgPT4gKFxyXG5cdGdhdGV3YXlzRGF0YT8ubGlzdD8uZmluZCggZWwgPT4gZWwudmFsdWUgPT09IHR5cGUgKT8ubGFiZWwgfHwgdHlwZVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVsdGlHYXRld2F5RWRpdCggeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoIHtcclxuXHRcdGNsYXNzTmFtZTogJ2pmYi1tdWx0aS1nYXRld2F5JyxcclxuXHR9ICk7XHJcblxyXG5cdGNvbnN0IFsgbWV0YSBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX2dhdGV3YXlzJyApO1xyXG5cclxuXHRjb25zdCBtb2RlID0gbWV0YT8ubW9kZSB8fCAnc2luZ2xlJztcclxuXHJcblx0bGV0IHNlbGVjdGVkID0gW107XHJcblx0aWYgKCBtb2RlID09PSBNT0RFX01BTlVBTCApIHtcclxuXHRcdHNlbGVjdGVkID0gKCBnYXRld2F5c0RhdGE/Lmxpc3QgfHwgW10gKVxyXG5cdFx0XHQubWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlIClcclxuXHRcdFx0LmZpbHRlciggKCBrZXkgKSA9PiAhIW1ldGE/Llsga2V5IF0/LnNob3dfb25fZnJvbnQgKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgZ3cgPSBtZXRhPy5nYXRld2F5O1xyXG5cdFx0aWYgKCBndyAmJiBndyAhPT0gJ25vbmUnICkge1xyXG5cdFx0XHRzZWxlY3RlZCA9IFsgZ3cgXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9PlxyXG5cdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHR0YWdOYW1lPVwiaDNcIlxyXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy50aXRsZSB8fCAnJyB9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXltZW50IG9wdGlvbnNcIlxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCB0aXRsZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGUgfSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFJpY2hUZXh0XHJcblx0XHRcdFx0dGFnTmFtZT1cInBcIlxyXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZXNjcmlwdGlvbiB8fCAnJyB9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJPcHRpb25hbCB0ZXh0IGZvciB0aGlzIGZvcm0gc3RlcC5cIlxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBkZXNjcmlwdGlvbiApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGVzY3JpcHRpb24gfSApIH1cclxuXHRcdFx0Lz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamZiLW11bHRpLWdhdGV3YXlfX2xpc3RcIj5cclxuXHRcdFx0XHR7IHNlbGVjdGVkLmxlbmd0aCA/IHNlbGVjdGVkLm1hcCggKCBrZXksIGluZGV4ICkgPT4gKFxyXG5cdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdGtleT17IGtleSB9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1tdWx0aS1nYXRld2F5X19pdGVtXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgaW5kZXggPT09IDAgfVxyXG5cdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxzcGFuPnsgZ2V0R2F0ZXdheUxhYmVsKCBrZXkgKSB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHQpICkgOiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1tdWx0aS1nYXRld2F5X19lbXB0eVwiPlxyXG5cdFx0XHRcdFx0XHRObyBnYXRld2F5cyBzZWxlY3RlZFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSB9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgTXVsdGlHYXRld2F5RWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnQHJvb3QvYmxvY2tzL211bHRpLWdhdGV3YXkvYmxvY2suanNvbic7XHJcbmltcG9ydCAnLi9ibG9jay5zY3NzJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7IGNyZWF0ZUJsb2NrIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XHJcblxyXG5tZXRhZGF0YS5hdHRyaWJ1dGVzLmlzUHJldmlldyA9IHtcclxuXHQndHlwZSc6ICdib29sZWFuJyxcclxuXHQnZGVmYXVsdCc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcclxuXHRkZXNjcmlwdGlvbjogX18oXHJcblx0XHRgRGlzcGxheXMgYXZhaWxhYmxlIHBheW1lbnQgZ2F0ZXdheXMgc2VsZWN0ZWQgaW4gZm9ybSBzZXR0aW5ncy5gLFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdCksXHJcblx0ZWRpdDogTXVsdGlHYXRld2F5RWRpdCxcclxuXHRleGFtcGxlOiB7XHJcblx0XHRhdHRyaWJ1dGVzOiB7XHJcblx0XHRcdGlzUHJldmlldzogdHJ1ZSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHR0cmFuc2Zvcm1zOiB7XHJcblx0XHR0bzogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcclxuXHRcdFx0XHRibG9ja3M6IFtcclxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvdGV4dC1maWVsZCcsXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jayggJ2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0XHRcdFx0eyAuLi5hdHRyaWJ1dGVzIH0gKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHByaW9yaXR5OiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdGZyb206IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdibG9jaycsXHJcblx0XHRcdFx0YmxvY2tzOiBbXHJcblx0XHRcdFx0XHQnamV0LWZvcm1zL2NoZWNrYm94LWZpZWxkJyxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvcmFkaW8tZmllbGQnLFxyXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9zZWxlY3QtZmllbGQnLFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0dHJhbnNmb3JtOiAoIGF0dHJpYnV0ZXMgKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlQmxvY2soIG5hbWUsIHsgLi4uYXR0cmlidXRlcyB9ICk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwcmlvcml0eTogMCxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcblx0bWV0YWRhdGEsXHJcblx0bmFtZSxcclxuXHRzZXR0aW5ncyxcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgTXVsdGlHYXRld2F5IGZyb20gJy4vYmxvY2tzL211bHRpLWdhdGV3YXknO1xyXG5cclxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLWdhdGV3YXknLFxyXG5cdGZ1bmN0aW9uICggYmxvY2tzICkge1xyXG5cdFx0YmxvY2tzLnB1c2goXHJcblx0XHRcdE11bHRpR2F0ZXdheSxcclxuXHRcdCk7XHJcblxyXG5cdFx0cmV0dXJuIGJsb2NrcztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==