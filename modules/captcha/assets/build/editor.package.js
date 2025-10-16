/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor-package/components/CaptchaBlockEdit.js":
/*!*******************************************************!*\
  !*** ./editor-package/components/CaptchaBlockEdit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  createSlotFill
} = wp.components;
const {
  Slot,
  Fill
} = createSlotFill('JFBCaptchaBlockEdit');
function CaptchaBlockEdit({
  children,
  provider
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, ({
    attributes,
    ...props
  }) => {
    if (provider && provider !== attributes.provider) {
      return null;
    }
    if ('function' !== typeof children) {
      return children;
    }
    return children({
      attributes,
      ...props
    });
  });
}
CaptchaBlockEdit.Slot = Slot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptchaBlockEdit);

/***/ }),

/***/ "./editor-package/components/CaptchaBlockTip.js":
/*!******************************************************!*\
  !*** ./editor-package/components/CaptchaBlockTip.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_getCaptchaProviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getCaptchaProviders */ "./editor-package/helpers/getCaptchaProviders.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const {
  useMetaState
} = JetFBHooks;
const {
  useMemo,
  useCallback
} = wp.element;
const {
  useDispatch,
  useSelect
} = wp.data;
const {
  createBlock
} = wp.blocks;
const {
  Tip,
  Button
} = wp.components;
const getCaptchaLabel = current => {
  var _provider$label;
  const provider = (0,_helpers_getCaptchaProviders__WEBPACK_IMPORTED_MODULE_1__["default"])().find(({
    value
  }) => value === current);
  return (_provider$label = provider?.label) !== null && _provider$label !== void 0 ? _provider$label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('captcha', 'jet-form-builder');
};
const name = 'jet-forms/captcha-container';
function CaptchaBlockTip() {
  const [args] = useMetaState('_jf_recaptcha');
  const buttonLabel = useMemo(() => getCaptchaLabel(args.captcha), [args.captcha]);
  const {
    insertBlock
  } = useDispatch('core/block-editor');
  const canAddBlock = useSelect(select => {
    const captchaBlock = select('jet-forms/fields').getBlock(name);
    return !captchaBlock;
  });
  const insertCaptchaBlock = useCallback(() => {
    if (!canAddBlock) {
      return;
    }
    const container = createBlock(name, {
      provider: args.captcha
    });
    insertBlock(container);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canAddBlock]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '1.5em'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tip, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`By default, the captcha is added before the submit button of the form. However, you can determine its location yourself using the block.`, 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    variant: 'secondary',
    disabled: !canAddBlock,
    onClick: insertCaptchaBlock
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
  // translators: %s - selected captcha label
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Add %s block`, 'jet-form-builder'), buttonLabel)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptchaBlockTip);

/***/ }),

/***/ "./editor-package/components/CaptchaOptions.js":
/*!*****************************************************!*\
  !*** ./editor-package/components/CaptchaOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  createSlotFill
} = wp.components;
const {
  Slot,
  Fill
} = createSlotFill('JFBCaptchaOptions');
function CaptchaOptions({
  children,
  provider = false
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, ({
    args,
    setArgs
  }) => {
    if (provider && provider !== args.captcha) {
      return null;
    }
    if ('function' !== typeof children) {
      return children;
    }
    return children({
      args,
      setArgs
    });
  });
}
CaptchaOptions.Slot = Slot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptchaOptions);

/***/ }),

/***/ "./editor-package/helpers/getCaptchaProviders.js":
/*!*******************************************************!*\
  !*** ./editor-package/helpers/getCaptchaProviders.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 *
 * @return {Object[]}
 */
function getCaptchaProviders() {
  var _window$JetFormEditor;
  return (_window$JetFormEditor = window.JetFormEditorData['captcha-tab-config']) !== null && _window$JetFormEditor !== void 0 ? _window$JetFormEditor : [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCaptchaProviders);

/***/ }),

/***/ "./editor-package/hooks/useCaptchaProvider.js":
/*!****************************************************!*\
  !*** ./editor-package/hooks/useCaptchaProvider.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  useMetaState
} = JetFBHooks;
function useCaptchaProvider() {
  var _args$captcha;
  const [args, setArgs] = useMetaState('_jf_recaptcha');
  const {
    captcha
  } = args;
  if (!captcha) {
    return [{}, () => {}];
  }
  const providerArgs = (_args$captcha = args?.[captcha]) !== null && _args$captcha !== void 0 ? _args$captcha : {};
  const setProviderArgs = (props = {}) => {
    if (!captcha) {
      return;
    }
    setArgs(prev => ({
      ...prev,
      [captcha]: {
        ...providerArgs,
        ...props
      }
    }));
  };
  return [providerArgs, setProviderArgs];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCaptchaProvider);

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
/*!********************************!*\
  !*** ./editor-package/main.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CaptchaOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CaptchaOptions */ "./editor-package/components/CaptchaOptions.js");
/* harmony import */ var _components_CaptchaBlockEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CaptchaBlockEdit */ "./editor-package/components/CaptchaBlockEdit.js");
/* harmony import */ var _hooks_useCaptchaProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useCaptchaProvider */ "./editor-package/hooks/useCaptchaProvider.js");
/* harmony import */ var _helpers_getCaptchaProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/getCaptchaProviders */ "./editor-package/helpers/getCaptchaProviders.js");
/* harmony import */ var _components_CaptchaBlockTip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CaptchaBlockTip */ "./editor-package/components/CaptchaBlockTip.js");





window.JetFBComponents = {
  ...window.JetFBComponents,
  CaptchaOptions: _components_CaptchaOptions__WEBPACK_IMPORTED_MODULE_0__["default"],
  CaptchaBlockEdit: _components_CaptchaBlockEdit__WEBPACK_IMPORTED_MODULE_1__["default"],
  CaptchaBlockTip: _components_CaptchaBlockTip__WEBPACK_IMPORTED_MODULE_4__["default"]
};
window.JetFBActions = {
  ...window.JetFBActions,
  getCaptchaProviders: _helpers_getCaptchaProviders__WEBPACK_IMPORTED_MODULE_3__["default"]
};
window.JetFBHooks = {
  ...window.JetFBHooks,
  useCaptchaProvider: _hooks_useCaptchaProvider__WEBPACK_IMPORTED_MODULE_2__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnBhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDaENBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9DYXB0Y2hhQmxvY2tFZGl0LmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9DYXB0Y2hhQmxvY2tUaXAuanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3ItcGFja2FnZS9jb21wb25lbnRzL0NhcHRjaGFPcHRpb25zLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvaGVscGVycy9nZXRDYXB0Y2hhUHJvdmlkZXJzLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvaG9va3MvdXNlQ2FwdGNoYVByb3ZpZGVyLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3ItcGFja2FnZS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHQgICAgICBjcmVhdGVTbG90RmlsbCxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IFNsb3QsIEZpbGwgfSA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQ2FwdGNoYUJsb2NrRWRpdCcgKTtcclxuXHJcbmZ1bmN0aW9uIENhcHRjaGFCbG9ja0VkaXQoIHsgY2hpbGRyZW4sIHByb3ZpZGVyIH0gKSB7XHJcblx0cmV0dXJuIDxGaWxsPnsgKCB7IGF0dHJpYnV0ZXMsIC4uLnByb3BzIH0gKSA9PiB7XHJcblx0XHRpZiAoIHByb3ZpZGVyICYmIHByb3ZpZGVyICE9PSBhdHRyaWJ1dGVzLnByb3ZpZGVyICkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICkge1xyXG5cdFx0XHRyZXR1cm4gY2hpbGRyZW47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNoaWxkcmVuKCB7IGF0dHJpYnV0ZXMsIC4uLnByb3BzIH0gKTtcclxuXHR9IH08L0ZpbGw+O1xyXG59XHJcblxyXG5DYXB0Y2hhQmxvY2tFZGl0LlNsb3QgPSBTbG90O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FwdGNoYUJsb2NrRWRpdDsiLCJpbXBvcnQgZ2V0Q2FwdGNoYVByb3ZpZGVycyBmcm9tICcuLi9oZWxwZXJzL2dldENhcHRjaGFQcm92aWRlcnMnO1xyXG5pbXBvcnQgeyBzcHJpbnRmLCBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlTWV0YVN0YXRlLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VNZW1vLFxyXG5cdCAgICAgIHVzZUNhbGxiYWNrLFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VEaXNwYXRjaCxcclxuXHQgICAgICB1c2VTZWxlY3QsXHJcbiAgICAgIH0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGNyZWF0ZUJsb2NrLFxyXG4gICAgICB9ID0gd3AuYmxvY2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFRpcCxcclxuXHQgICAgICBCdXR0b24sXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgZ2V0Q2FwdGNoYUxhYmVsID0gY3VycmVudCA9PiB7XHJcblx0Y29uc3QgcHJvdmlkZXIgPSBnZXRDYXB0Y2hhUHJvdmlkZXJzKCkuZmluZChcclxuXHRcdCggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgPT09IGN1cnJlbnQsXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHByb3ZpZGVyPy5sYWJlbCA/PyBfXyggJ2NhcHRjaGEnLCAnamV0LWZvcm0tYnVpbGRlcicgKTtcclxufTtcclxuXHJcbmNvbnN0IG5hbWUgPSAnamV0LWZvcm1zL2NhcHRjaGEtY29udGFpbmVyJztcclxuXHJcbmZ1bmN0aW9uIENhcHRjaGFCbG9ja1RpcCgpIHtcclxuXHRjb25zdCBbIGFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9yZWNhcHRjaGEnICk7XHJcblxyXG5cdGNvbnN0IGJ1dHRvbkxhYmVsID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IGdldENhcHRjaGFMYWJlbCggYXJncy5jYXB0Y2hhICksXHJcblx0XHRbIGFyZ3MuY2FwdGNoYSBdLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHsgaW5zZXJ0QmxvY2sgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICk7XHJcblxyXG5cdGNvbnN0IGNhbkFkZEJsb2NrID0gdXNlU2VsZWN0KFxyXG5cdFx0c2VsZWN0ID0+IHtcclxuXHRcdFx0Y29uc3QgY2FwdGNoYUJsb2NrID0gc2VsZWN0KCAnamV0LWZvcm1zL2ZpZWxkcycgKS5nZXRCbG9jayggbmFtZSApO1xyXG5cclxuXHRcdFx0cmV0dXJuICFjYXB0Y2hhQmxvY2s7XHJcblx0XHR9LFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGluc2VydENhcHRjaGFCbG9jayA9IHVzZUNhbGxiYWNrKCAoKSA9PiB7XHJcblx0XHRpZiAoICFjYW5BZGRCbG9jayApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gY3JlYXRlQmxvY2soIG5hbWUsIHsgcHJvdmlkZXI6IGFyZ3MuY2FwdGNoYSB9ICk7XHJcblxyXG5cdFx0aW5zZXJ0QmxvY2soIGNvbnRhaW5lciApO1xyXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG5cdH0sIFsgY2FuQWRkQmxvY2sgXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxkaXYgc3R5bGU9eyB7IG1hcmdpbkJvdHRvbTogJzEuNWVtJyB9IH0+XHJcblx0XHRcdDxUaXA+XHJcblx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdGBCeSBkZWZhdWx0LCB0aGUgY2FwdGNoYSBpcyBhZGRlZCBiZWZvcmUgdGhlIHN1Ym1pdCBidXR0b24gb2YgdGhlIGZvcm0uIEhvd2V2ZXIsIHlvdSBjYW4gZGV0ZXJtaW5lIGl0cyBsb2NhdGlvbiB5b3Vyc2VsZiB1c2luZyB0aGUgYmxvY2suYCxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0PC9UaXA+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxCdXR0b25cclxuXHRcdFx0dmFyaWFudD17ICdzZWNvbmRhcnknIH1cclxuXHRcdFx0ZGlzYWJsZWQ9eyAhY2FuQWRkQmxvY2sgfVxyXG5cdFx0XHRvbkNsaWNrPXsgaW5zZXJ0Q2FwdGNoYUJsb2NrIH1cclxuXHRcdD5cclxuXHRcdFx0eyBzcHJpbnRmKFxyXG5cdFx0XHRcdC8vIHRyYW5zbGF0b3JzOiAlcyAtIHNlbGVjdGVkIGNhcHRjaGEgbGFiZWxcclxuXHRcdFx0XHRfXyggYEFkZCAlcyBibG9ja2AsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdGJ1dHRvbkxhYmVsXHJcblx0XHRcdCkgfVxyXG5cdFx0PC9CdXR0b24+XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXB0Y2hhQmxvY2tUaXA7IiwiY29uc3Qge1xyXG5cdCAgICAgIGNyZWF0ZVNsb3RGaWxsLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgU2xvdCwgRmlsbCB9ID0gY3JlYXRlU2xvdEZpbGwoICdKRkJDYXB0Y2hhT3B0aW9ucycgKTtcclxuXHJcbmZ1bmN0aW9uIENhcHRjaGFPcHRpb25zKCB7IGNoaWxkcmVuLCBwcm92aWRlciA9IGZhbHNlIH0gKSB7XHJcblx0cmV0dXJuIDxGaWxsPnsgKCB7IGFyZ3MsIHNldEFyZ3MgfSApID0+IHtcclxuXHRcdGlmICggcHJvdmlkZXIgJiYgcHJvdmlkZXIgIT09IGFyZ3MuY2FwdGNoYSApIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gKSB7XHJcblx0XHRcdHJldHVybiBjaGlsZHJlbjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY2hpbGRyZW4oIHsgYXJncywgc2V0QXJncyB9ICk7XHJcblx0fSB9PC9GaWxsPjtcclxufVxyXG5cclxuQ2FwdGNoYU9wdGlvbnMuU2xvdCA9IFNsb3Q7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXB0Y2hhT3B0aW9ucztcclxuIiwiLyoqXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdFtdfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q2FwdGNoYVByb3ZpZGVycygpIHtcclxuXHRyZXR1cm4gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhWyAnY2FwdGNoYS10YWItY29uZmlnJyBdID8/IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDYXB0Y2hhUHJvdmlkZXJzOyIsImNvbnN0IHtcclxuXHQgICAgICB1c2VNZXRhU3RhdGUsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuZnVuY3Rpb24gdXNlQ2FwdGNoYVByb3ZpZGVyKCkge1xyXG5cdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX3JlY2FwdGNoYScgKTtcclxuXHRjb25zdCB7IGNhcHRjaGEgfSAgICAgICA9IGFyZ3M7XHJcblxyXG5cdGlmICggIWNhcHRjaGEgKSB7XHJcblx0XHRyZXR1cm4gWyB7fSwgKCkgPT4ge30gXTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHByb3ZpZGVyQXJncyA9IGFyZ3M/LlsgY2FwdGNoYSBdID8/IHt9O1xyXG5cclxuXHRjb25zdCBzZXRQcm92aWRlckFyZ3MgPSAoIHByb3BzID0ge30gKSA9PiB7XHJcblx0XHRpZiAoICFjYXB0Y2hhICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRBcmdzKCBwcmV2ID0+IChcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC4uLnByZXYsXHJcblx0XHRcdFx0WyBjYXB0Y2hhIF06IHtcclxuXHRcdFx0XHRcdC4uLnByb3ZpZGVyQXJncyxcclxuXHRcdFx0XHRcdC4uLnByb3BzLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdCkgKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gWyBwcm92aWRlckFyZ3MsIHNldFByb3ZpZGVyQXJncyBdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDYXB0Y2hhUHJvdmlkZXI7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhcHRjaGFPcHRpb25zIGZyb20gJy4vY29tcG9uZW50cy9DYXB0Y2hhT3B0aW9ucyc7XHJcbmltcG9ydCBDYXB0Y2hhQmxvY2tFZGl0IGZyb20gJy4vY29tcG9uZW50cy9DYXB0Y2hhQmxvY2tFZGl0JztcclxuaW1wb3J0IHVzZUNhcHRjaGFQcm92aWRlciBmcm9tICcuL2hvb2tzL3VzZUNhcHRjaGFQcm92aWRlcic7XHJcbmltcG9ydCBnZXRDYXB0Y2hhUHJvdmlkZXJzIGZyb20gJy4vaGVscGVycy9nZXRDYXB0Y2hhUHJvdmlkZXJzJztcclxuaW1wb3J0IENhcHRjaGFCbG9ja1RpcCBmcm9tICcuL2NvbXBvbmVudHMvQ2FwdGNoYUJsb2NrVGlwJztcclxuXHJcbndpbmRvdy5KZXRGQkNvbXBvbmVudHMgPSB7XHJcblx0Li4ud2luZG93LkpldEZCQ29tcG9uZW50cyxcclxuXHRDYXB0Y2hhT3B0aW9ucyxcclxuXHRDYXB0Y2hhQmxvY2tFZGl0LFxyXG5cdENhcHRjaGFCbG9ja1RpcCxcclxufTtcclxuXHJcbndpbmRvdy5KZXRGQkFjdGlvbnMgPSB7XHJcblx0Li4ud2luZG93LkpldEZCQWN0aW9ucyxcclxuXHRnZXRDYXB0Y2hhUHJvdmlkZXJzLFxyXG59O1xyXG5cclxud2luZG93LkpldEZCSG9va3MgPSB7XHJcblx0Li4ud2luZG93LkpldEZCSG9va3MsXHJcblx0dXNlQ2FwdGNoYVByb3ZpZGVyLFxyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==