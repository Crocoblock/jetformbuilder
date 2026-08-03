/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor-package/components/CaptchaBlockEdit.js"
/*!*******************************************************!*\
  !*** ./editor-package/components/CaptchaBlockEdit.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./editor-package/components/CaptchaBlockTip.js"
/*!******************************************************!*\
  !*** ./editor-package/components/CaptchaBlockTip.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./editor-package/components/CaptchaOptions.js"
/*!*****************************************************!*\
  !*** ./editor-package/components/CaptchaOptions.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./editor-package/helpers/getCaptchaProviders.js"
/*!*******************************************************!*\
  !*** ./editor-package/helpers/getCaptchaProviders.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./editor-package/hooks/useCaptchaProvider.js"
/*!****************************************************!*\
  !*** ./editor-package/hooks/useCaptchaProvider.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnBhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDaENBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9DYXB0Y2hhQmxvY2tFZGl0LmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9DYXB0Y2hhQmxvY2tUaXAuanMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3ItcGFja2FnZS9jb21wb25lbnRzL0NhcHRjaGFPcHRpb25zLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvaGVscGVycy9nZXRDYXB0Y2hhUHJvdmlkZXJzLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvaG9va3MvdXNlQ2FwdGNoYVByb3ZpZGVyLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvLi9lZGl0b3ItcGFja2FnZS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcblx0ICAgICAgY3JlYXRlU2xvdEZpbGwsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBTbG90LCBGaWxsIH0gPSBjcmVhdGVTbG90RmlsbCggJ0pGQkNhcHRjaGFCbG9ja0VkaXQnICk7XG5cbmZ1bmN0aW9uIENhcHRjaGFCbG9ja0VkaXQoIHsgY2hpbGRyZW4sIHByb3ZpZGVyIH0gKSB7XG5cdHJldHVybiA8RmlsbD57ICggeyBhdHRyaWJ1dGVzLCAuLi5wcm9wcyB9ICkgPT4ge1xuXHRcdGlmICggcHJvdmlkZXIgJiYgcHJvdmlkZXIgIT09IGF0dHJpYnV0ZXMucHJvdmlkZXIgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gKSB7XG5cdFx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNoaWxkcmVuKCB7IGF0dHJpYnV0ZXMsIC4uLnByb3BzIH0gKTtcblx0fSB9PC9GaWxsPjtcbn1cblxuQ2FwdGNoYUJsb2NrRWRpdC5TbG90ID0gU2xvdDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGNoYUJsb2NrRWRpdDsiLCJpbXBvcnQgZ2V0Q2FwdGNoYVByb3ZpZGVycyBmcm9tICcuLi9oZWxwZXJzL2dldENhcHRjaGFQcm92aWRlcnMnO1xuaW1wb3J0IHsgc3ByaW50ZiwgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZU1ldGFTdGF0ZSxcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZU1lbW8sXG5cdCAgICAgIHVzZUNhbGxiYWNrLFxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHtcblx0ICAgICAgdXNlRGlzcGF0Y2gsXG5cdCAgICAgIHVzZVNlbGVjdCxcbiAgICAgIH0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdCAgICAgIGNyZWF0ZUJsb2NrLFxuICAgICAgfSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHQgICAgICBUaXAsXG5cdCAgICAgIEJ1dHRvbixcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBnZXRDYXB0Y2hhTGFiZWwgPSBjdXJyZW50ID0+IHtcblx0Y29uc3QgcHJvdmlkZXIgPSBnZXRDYXB0Y2hhUHJvdmlkZXJzKCkuZmluZChcblx0XHQoIHsgdmFsdWUgfSApID0+IHZhbHVlID09PSBjdXJyZW50LFxuXHQpO1xuXG5cdHJldHVybiBwcm92aWRlcj8ubGFiZWwgPz8gX18oICdjYXB0Y2hhJywgJ2pldC1mb3JtLWJ1aWxkZXInICk7XG59O1xuXG5jb25zdCBuYW1lID0gJ2pldC1mb3Jtcy9jYXB0Y2hhLWNvbnRhaW5lcic7XG5cbmZ1bmN0aW9uIENhcHRjaGFCbG9ja1RpcCgpIHtcblx0Y29uc3QgWyBhcmdzIF0gPSB1c2VNZXRhU3RhdGUoICdfamZfcmVjYXB0Y2hhJyApO1xuXG5cdGNvbnN0IGJ1dHRvbkxhYmVsID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRDYXB0Y2hhTGFiZWwoIGFyZ3MuY2FwdGNoYSApLFxuXHRcdFsgYXJncy5jYXB0Y2hhIF0sXG5cdCk7XG5cblx0Y29uc3QgeyBpbnNlcnRCbG9jayB9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcblxuXHRjb25zdCBjYW5BZGRCbG9jayA9IHVzZVNlbGVjdChcblx0XHRzZWxlY3QgPT4ge1xuXHRcdFx0Y29uc3QgY2FwdGNoYUJsb2NrID0gc2VsZWN0KCAnamV0LWZvcm1zL2ZpZWxkcycgKS5nZXRCbG9jayggbmFtZSApO1xuXG5cdFx0XHRyZXR1cm4gIWNhcHRjaGFCbG9jaztcblx0XHR9LFxuXHQpO1xuXG5cdGNvbnN0IGluc2VydENhcHRjaGFCbG9jayA9IHVzZUNhbGxiYWNrKCAoKSA9PiB7XG5cdFx0aWYgKCAhY2FuQWRkQmxvY2sgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUJsb2NrKCBuYW1lLCB7IHByb3ZpZGVyOiBhcmdzLmNhcHRjaGEgfSApO1xuXG5cdFx0aW5zZXJ0QmxvY2soIGNvbnRhaW5lciApO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblx0fSwgWyBjYW5BZGRCbG9jayBdICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PGRpdiBzdHlsZT17IHsgbWFyZ2luQm90dG9tOiAnMS41ZW0nIH0gfT5cblx0XHRcdDxUaXA+XG5cdFx0XHRcdHsgX18oXG5cdFx0XHRcdFx0YEJ5IGRlZmF1bHQsIHRoZSBjYXB0Y2hhIGlzIGFkZGVkIGJlZm9yZSB0aGUgc3VibWl0IGJ1dHRvbiBvZiB0aGUgZm9ybS4gSG93ZXZlciwgeW91IGNhbiBkZXRlcm1pbmUgaXRzIGxvY2F0aW9uIHlvdXJzZWxmIHVzaW5nIHRoZSBibG9jay5gLFxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdFx0KSB9XG5cdFx0XHQ8L1RpcD5cblx0XHQ8L2Rpdj5cblx0XHQ8QnV0dG9uXG5cdFx0XHR2YXJpYW50PXsgJ3NlY29uZGFyeScgfVxuXHRcdFx0ZGlzYWJsZWQ9eyAhY2FuQWRkQmxvY2sgfVxuXHRcdFx0b25DbGljaz17IGluc2VydENhcHRjaGFCbG9jayB9XG5cdFx0PlxuXHRcdFx0eyBzcHJpbnRmKFxuXHRcdFx0XHQvLyB0cmFuc2xhdG9yczogJXMgLSBzZWxlY3RlZCBjYXB0Y2hhIGxhYmVsXG5cdFx0XHRcdF9fKCBgQWRkICVzIGJsb2NrYCwgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdGJ1dHRvbkxhYmVsXG5cdFx0XHQpIH1cblx0XHQ8L0J1dHRvbj5cblx0PC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0Y2hhQmxvY2tUaXA7IiwiY29uc3Qge1xuXHQgICAgICBjcmVhdGVTbG90RmlsbCxcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IFNsb3QsIEZpbGwgfSA9IGNyZWF0ZVNsb3RGaWxsKCAnSkZCQ2FwdGNoYU9wdGlvbnMnICk7XG5cbmZ1bmN0aW9uIENhcHRjaGFPcHRpb25zKCB7IGNoaWxkcmVuLCBwcm92aWRlciA9IGZhbHNlIH0gKSB7XG5cdHJldHVybiA8RmlsbD57ICggeyBhcmdzLCBzZXRBcmdzIH0gKSA9PiB7XG5cdFx0aWYgKCBwcm92aWRlciAmJiBwcm92aWRlciAhPT0gYXJncy5jYXB0Y2hhICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0aWYgKCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgY2hpbGRyZW4gKSB7XG5cdFx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNoaWxkcmVuKCB7IGFyZ3MsIHNldEFyZ3MgfSApO1xuXHR9IH08L0ZpbGw+O1xufVxuXG5DYXB0Y2hhT3B0aW9ucy5TbG90ID0gU2xvdDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGNoYU9wdGlvbnM7XG4iLCIvKipcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqL1xuZnVuY3Rpb24gZ2V0Q2FwdGNoYVByb3ZpZGVycygpIHtcblx0cmV0dXJuIHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YVsgJ2NhcHRjaGEtdGFiLWNvbmZpZycgXSA/PyBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2FwdGNoYVByb3ZpZGVyczsiLCJjb25zdCB7XG5cdCAgICAgIHVzZU1ldGFTdGF0ZSxcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xuXG5mdW5jdGlvbiB1c2VDYXB0Y2hhUHJvdmlkZXIoKSB7XG5cdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX3JlY2FwdGNoYScgKTtcblx0Y29uc3QgeyBjYXB0Y2hhIH0gICAgICAgPSBhcmdzO1xuXG5cdGlmICggIWNhcHRjaGEgKSB7XG5cdFx0cmV0dXJuIFsge30sICgpID0+IHt9IF07XG5cdH1cblxuXHRjb25zdCBwcm92aWRlckFyZ3MgPSBhcmdzPy5bIGNhcHRjaGEgXSA/PyB7fTtcblxuXHRjb25zdCBzZXRQcm92aWRlckFyZ3MgPSAoIHByb3BzID0ge30gKSA9PiB7XG5cdFx0aWYgKCAhY2FwdGNoYSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0QXJncyggcHJldiA9PiAoXG5cdFx0XHR7XG5cdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdFsgY2FwdGNoYSBdOiB7XG5cdFx0XHRcdFx0Li4ucHJvdmlkZXJBcmdzLFxuXHRcdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHR9LFxuXHRcdFx0fVxuXHRcdCkgKTtcblx0fTtcblxuXHRyZXR1cm4gWyBwcm92aWRlckFyZ3MsIHNldFByb3ZpZGVyQXJncyBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VDYXB0Y2hhUHJvdmlkZXI7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FwdGNoYU9wdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL0NhcHRjaGFPcHRpb25zJztcbmltcG9ydCBDYXB0Y2hhQmxvY2tFZGl0IGZyb20gJy4vY29tcG9uZW50cy9DYXB0Y2hhQmxvY2tFZGl0JztcbmltcG9ydCB1c2VDYXB0Y2hhUHJvdmlkZXIgZnJvbSAnLi9ob29rcy91c2VDYXB0Y2hhUHJvdmlkZXInO1xuaW1wb3J0IGdldENhcHRjaGFQcm92aWRlcnMgZnJvbSAnLi9oZWxwZXJzL2dldENhcHRjaGFQcm92aWRlcnMnO1xuaW1wb3J0IENhcHRjaGFCbG9ja1RpcCBmcm9tICcuL2NvbXBvbmVudHMvQ2FwdGNoYUJsb2NrVGlwJztcblxud2luZG93LkpldEZCQ29tcG9uZW50cyA9IHtcblx0Li4ud2luZG93LkpldEZCQ29tcG9uZW50cyxcblx0Q2FwdGNoYU9wdGlvbnMsXG5cdENhcHRjaGFCbG9ja0VkaXQsXG5cdENhcHRjaGFCbG9ja1RpcCxcbn07XG5cbndpbmRvdy5KZXRGQkFjdGlvbnMgPSB7XG5cdC4uLndpbmRvdy5KZXRGQkFjdGlvbnMsXG5cdGdldENhcHRjaGFQcm92aWRlcnMsXG59O1xuXG53aW5kb3cuSmV0RkJIb29rcyA9IHtcblx0Li4ud2luZG93LkpldEZCSG9va3MsXG5cdHVzZUNhcHRjaGFQcm92aWRlcixcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
