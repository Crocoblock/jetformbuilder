/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../blocks/multi-gateway/block.json":
/*!*********************************************!*\
  !*** ../../blocks/multi-gateway/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"jet-forms/multi-gateway","title":"Multi Gateway","description":"Displays available payment gateways selected in form settings.","category":"jet-form-builder-fields","textdomain":"jet-form-builder","keywords":["jetformbuilder","gateway","payment"],"supports":{"html":false,"multiple":false},"attributes":{"isPreview":{"type":"boolean","default":false},"title":{"type":"string","default":""},"description":{"type":"string","default":""},"gatewaysSettings":{"type":"object","default":{}}},"viewScript":"jet-fb-multi-gateway","style":"jet-fb-multi-gateway"}');

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
  const gatewaysSettings = attributes.gatewaysSettings || {};
  const updateGatewaySetting = (key, field, value) => {
    setAttributes({
      gatewaysSettings: {
        ...gatewaysSettings,
        [key]: {
          ...(gatewaysSettings[key] || {}),
          [field]: value
        }
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jfb-multi-gateway"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "h3",
    className: "jfb-multi-gateway__title",
    value: attributes.title || '',
    placeholder: "Optional: add a heading for payment options\u2026",
    onChange: title => setAttributes({
      title
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "p",
    className: "jfb-multi-gateway__desc",
    value: attributes.description || '',
    placeholder: "Optional: add a short description for this step\u2026",
    onChange: description => setAttributes({
      description
    })
  }), selected.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jfb-multi-gateway__list"
  }, selected.map((key, index) => {
    const saved = gatewaysSettings?.[key] || {};
    const itemLabel = typeof saved.label === 'string' ? saved.label : getGatewayLabel(key);
    const itemDesc = typeof saved.description === 'string' ? saved.description : '';
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      key: key,
      className: "jfb-multi-gateway__item"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      className: "jet-form-builder__field",
      checked: index === 0,
      readOnly: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jfb-multi-gateway__content",
      onMouseDown: e => {
        if (!e.target?.closest?.('[contenteditable="true"]')) {
          e.preventDefault();
        }
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "jfb-multi-gateway__label",
      value: itemLabel,
      placeholder: getGatewayLabel(key),
      onChange: value => updateGatewaySetting(key, 'label', value)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jfb-multi-gateway__description"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "span",
      value: itemDesc,
      placeholder: "You can add description here",
      onChange: value => updateGatewaySetting(key, 'description', value)
    })))));
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBR0E7QUFBQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDeERBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUVBO0FBSUE7QUFJQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW11bHRpLWdhdGV3YXkvLi9lZGl0b3IvYmxvY2tzL211bHRpLWdhdGV3YXkvYmxvY2suc2Nzcz8zMTNhIiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5Ly4vZWRpdG9yL2Jsb2Nrcy9tdWx0aS1nYXRld2F5L2VkaXQuanMiLCJ3ZWJwYWNrOi8vamZiLW11bHRpLWdhdGV3YXkvLi9lZGl0b3IvYmxvY2tzL211bHRpLWdhdGV3YXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLW11bHRpLWdhdGV3YXkvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9qZmItbXVsdGktZ2F0ZXdheS9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItbXVsdGktZ2F0ZXdheS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1tdWx0aS1nYXRld2F5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLW11bHRpLWdhdGV3YXkvLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCB7IHVzZUJsb2NrUHJvcHMsIFJpY2hUZXh0IH0gPSB3cC5ibG9ja0VkaXRvcjtcclxuY29uc3QgeyB1c2VNZXRhU3RhdGUgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCBnYXRld2F5c0RhdGEgPSB3aW5kb3c/LkpldEZvcm1FZGl0b3JEYXRhPy5nYXRld2F5cztcclxuY29uc3QgTU9ERV9NQU5VQUwgPSAnbWFudWFsJztcclxuXHJcbmNvbnN0IGdldEdhdGV3YXlMYWJlbCA9ICggdHlwZSApID0+IChcclxuXHRnYXRld2F5c0RhdGE/Lmxpc3Q/LmZpbmQoIGVsID0+IGVsLnZhbHVlID09PSB0eXBlICk/LmxhYmVsIHx8IHR5cGVcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11bHRpR2F0ZXdheUVkaXQoIHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ICkge1xyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCB7XHJcblx0XHRjbGFzc05hbWU6ICdqZmItbXVsdGktZ2F0ZXdheScsXHJcblx0fSApO1xyXG5cclxuXHRjb25zdCBbIG1ldGEgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9nYXRld2F5cycgKTtcclxuXHJcblx0Y29uc3QgbW9kZSA9IG1ldGE/Lm1vZGUgfHwgJ3NpbmdsZSc7XHJcblxyXG5cdGxldCBzZWxlY3RlZCA9IFtdO1xyXG5cdGlmICggbW9kZSA9PT0gTU9ERV9NQU5VQUwgKSB7XHJcblx0XHRzZWxlY3RlZCA9ICggZ2F0ZXdheXNEYXRhPy5saXN0IHx8IFtdIClcclxuXHRcdFx0Lm1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApXHJcblx0XHRcdC5maWx0ZXIoICgga2V5ICkgPT4gISFtZXRhPy5bIGtleSBdPy5zaG93X29uX2Zyb250ICk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnN0IGd3ID0gbWV0YT8uZ2F0ZXdheTtcclxuXHRcdGlmICggZ3cgJiYgZ3cgIT09ICdub25lJyApIHtcclxuXHRcdFx0c2VsZWN0ZWQgPSBbIGd3IF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBnYXRld2F5c1NldHRpbmdzID0gYXR0cmlidXRlcy5nYXRld2F5c1NldHRpbmdzIHx8IHt9O1xyXG5cclxuXHRjb25zdCB1cGRhdGVHYXRld2F5U2V0dGluZyA9ICgga2V5LCBmaWVsZCwgdmFsdWUgKSA9PiB7XHJcblx0XHRzZXRBdHRyaWJ1dGVzKCB7XHJcblx0XHRcdGdhdGV3YXlzU2V0dGluZ3M6IHtcclxuXHRcdFx0XHQuLi5nYXRld2F5c1NldHRpbmdzLFxyXG5cdFx0XHRcdFsga2V5IF06IHtcclxuXHRcdFx0XHRcdC4uLiggZ2F0ZXdheXNTZXR0aW5nc1sga2V5IF0gfHwge30gKSxcclxuXHRcdFx0XHRcdFsgZmllbGQgXTogdmFsdWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZmItbXVsdGktZ2F0ZXdheVwiPlxyXG5cdFx0XHRcdDxSaWNoVGV4dFxyXG5cdFx0XHRcdFx0dGFnTmFtZT1cImgzXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1tdWx0aS1nYXRld2F5X190aXRsZVwiXHJcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfHwgJycgfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJPcHRpb25hbDogYWRkIGEgaGVhZGluZyBmb3IgcGF5bWVudCBvcHRpb25z4oCmXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB0aXRsZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgdGl0bGUgfSApIH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHQ8UmljaFRleHRcclxuXHRcdFx0XHRcdHRhZ05hbWU9XCJwXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1tdWx0aS1nYXRld2F5X19kZXNjXCJcclxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5kZXNjcmlwdGlvbiB8fCAnJyB9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIk9wdGlvbmFsOiBhZGQgYSBzaG9ydCBkZXNjcmlwdGlvbiBmb3IgdGhpcyBzdGVw4oCmXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBkZXNjcmlwdGlvbiApID0+IHNldEF0dHJpYnV0ZXMoIHsgZGVzY3JpcHRpb24gfSApIH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHR7IHNlbGVjdGVkLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamZiLW11bHRpLWdhdGV3YXlfX2xpc3RcIj5cclxuXHRcdFx0XHRcdFx0eyBzZWxlY3RlZC5tYXAoICgga2V5LCBpbmRleCApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBzYXZlZCA9IGdhdGV3YXlzU2V0dGluZ3M/Llsga2V5IF0gfHwge307XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGl0ZW1MYWJlbCA9ICggdHlwZW9mIHNhdmVkLmxhYmVsID09PSAnc3RyaW5nJyApXHJcblx0XHRcdFx0XHRcdFx0XHQ/IHNhdmVkLmxhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHQ6IGdldEdhdGV3YXlMYWJlbCgga2V5ICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGl0ZW1EZXNjID0gKCB0eXBlb2Ygc2F2ZWQuZGVzY3JpcHRpb24gPT09ICdzdHJpbmcnIClcclxuXHRcdFx0XHRcdFx0XHRcdD8gc2F2ZWQuZGVzY3JpcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdDogJyc7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsga2V5IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamZiLW11bHRpLWdhdGV3YXlfX2l0ZW1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgaW5kZXggPT09IDAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamZiLW11bHRpLWdhdGV3YXlfX2NvbnRlbnRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VEb3duPXsgKCBlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAhIGUudGFyZ2V0Py5jbG9zZXN0Py4oICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXScgKSApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJpY2hUZXh0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwiZGl2XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1tdWx0aS1nYXRld2F5X19sYWJlbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGl0ZW1MYWJlbCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGdldEdhdGV3YXlMYWJlbCgga2V5ICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlICkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlR2F0ZXdheVNldHRpbmcoIGtleSwgJ2xhYmVsJywgdmFsdWUgKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamZiLW11bHRpLWdhdGV3YXlfX2Rlc2NyaXB0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJpY2hUZXh0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cInNwYW5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgaXRlbURlc2MgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91IGNhbiBhZGQgZGVzY3JpcHRpb24gaGVyZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlICkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUdhdGV3YXlTZXR0aW5nKCBrZXksICdkZXNjcmlwdGlvbicsIHZhbHVlIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamZiLW11bHRpLWdhdGV3YXlfX2VtcHR5XCI+XHJcblx0XHRcdFx0XHRcdE5vIGdhdGV3YXlzIHNlbGVjdGVkXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCBNdWx0aUdhdGV3YXlFZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tICdAcm9vdC9ibG9ja3MvbXVsdGktZ2F0ZXdheS9ibG9jay5qc29uJztcclxuaW1wb3J0ICcuL2Jsb2NrLnNjc3MnO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHsgY3JlYXRlQmxvY2sgfSA9IHdwLmJsb2NrcztcclxuXHJcbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcclxuXHJcbm1ldGFkYXRhLmF0dHJpYnV0ZXMuaXNQcmV2aWV3ID0ge1xyXG5cdCd0eXBlJzogJ2Jvb2xlYW4nLFxyXG5cdCdkZWZhdWx0JzogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxyXG5cdGRlc2NyaXB0aW9uOiBfXyhcclxuXHRcdGBEaXNwbGF5cyBhdmFpbGFibGUgcGF5bWVudCBnYXRld2F5cyBzZWxlY3RlZCBpbiBmb3JtIHNldHRpbmdzLmAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRlZGl0OiBNdWx0aUdhdGV3YXlFZGl0LFxyXG5cdGV4YW1wbGU6IHtcclxuXHRcdGF0dHJpYnV0ZXM6IHtcclxuXHRcdFx0aXNQcmV2aWV3OiB0cnVlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHRyYW5zZm9ybXM6IHtcclxuXHRcdHRvOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAnYmxvY2snLFxyXG5cdFx0XHRcdGJsb2NrczogW1xyXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy90ZXh0LWZpZWxkJyxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogKCBhdHRyaWJ1dGVzICkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCAnamV0LWZvcm1zL3RleHQtZmllbGQnLFxyXG5cdFx0XHRcdFx0XHR7IC4uLmF0dHJpYnV0ZXMgfSApO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cHJpb3JpdHk6IDAsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0ZnJvbTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2Jsb2NrJyxcclxuXHRcdFx0XHRibG9ja3M6IFtcclxuXHRcdFx0XHRcdCdqZXQtZm9ybXMvY2hlY2tib3gtZmllbGQnLFxyXG5cdFx0XHRcdFx0J2pldC1mb3Jtcy9yYWRpby1maWVsZCcsXHJcblx0XHRcdFx0XHQnamV0LWZvcm1zL3NlbGVjdC1maWVsZCcsXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR0cmFuc2Zvcm06ICggYXR0cmlidXRlcyApID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVCbG9jayggbmFtZSwgeyAuLi5hdHRyaWJ1dGVzIH0gKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHByaW9yaXR5OiAwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzLFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBNdWx0aUdhdGV3YXkgZnJvbSAnLi9ibG9ja3MvbXVsdGktZ2F0ZXdheSc7XHJcblxyXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktZ2F0ZXdheScsXHJcblx0ZnVuY3Rpb24gKCBibG9ja3MgKSB7XHJcblx0XHRibG9ja3MucHVzaChcclxuXHRcdFx0TXVsdGlHYXRld2F5LFxyXG5cdFx0KTtcclxuXHJcblx0XHRyZXR1cm4gYmxvY2tzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9