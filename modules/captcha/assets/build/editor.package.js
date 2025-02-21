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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnBhY2thZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDaENBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci1wYWNrYWdlL2NvbXBvbmVudHMvQ2FwdGNoYUJsb2NrRWRpdC5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci1wYWNrYWdlL2NvbXBvbmVudHMvQ2FwdGNoYUJsb2NrVGlwLmpzIiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvY29tcG9uZW50cy9DYXB0Y2hhT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci1wYWNrYWdlL2hlbHBlcnMvZ2V0Q2FwdGNoYVByb3ZpZGVycy5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS8uL2VkaXRvci1wYWNrYWdlL2hvb2tzL3VzZUNhcHRjaGFQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1jYXB0Y2hhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWNhcHRjaGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FwdGNoYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1jYXB0Y2hhLy4vZWRpdG9yLXBhY2thZ2UvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG5cdCAgICAgIGNyZWF0ZVNsb3RGaWxsLFxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgU2xvdCwgRmlsbCB9ID0gY3JlYXRlU2xvdEZpbGwoICdKRkJDYXB0Y2hhQmxvY2tFZGl0JyApO1xuXG5mdW5jdGlvbiBDYXB0Y2hhQmxvY2tFZGl0KCB7IGNoaWxkcmVuLCBwcm92aWRlciB9ICkge1xuXHRyZXR1cm4gPEZpbGw+eyAoIHsgYXR0cmlidXRlcywgLi4ucHJvcHMgfSApID0+IHtcblx0XHRpZiAoIHByb3ZpZGVyICYmIHByb3ZpZGVyICE9PSBhdHRyaWJ1dGVzLnByb3ZpZGVyICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICkge1xuXHRcdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHRcdH1cblxuXHRcdHJldHVybiBjaGlsZHJlbiggeyBhdHRyaWJ1dGVzLCAuLi5wcm9wcyB9ICk7XG5cdH0gfTwvRmlsbD47XG59XG5cbkNhcHRjaGFCbG9ja0VkaXQuU2xvdCA9IFNsb3Q7XG5cbmV4cG9ydCBkZWZhdWx0IENhcHRjaGFCbG9ja0VkaXQ7IiwiaW1wb3J0IGdldENhcHRjaGFQcm92aWRlcnMgZnJvbSAnLi4vaGVscGVycy9nZXRDYXB0Y2hhUHJvdmlkZXJzJztcbmltcG9ydCB7IHNwcmludGYsIF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3Qge1xuXHQgICAgICB1c2VNZXRhU3RhdGUsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuY29uc3Qge1xuXHQgICAgICB1c2VNZW1vLFxuXHQgICAgICB1c2VDYWxsYmFjayxcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdCAgICAgIHVzZURpc3BhdGNoLFxuXHQgICAgICB1c2VTZWxlY3QsXG4gICAgICB9ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHQgICAgICBjcmVhdGVCbG9jayxcbiAgICAgIH0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0ICAgICAgVGlwLFxuXHQgICAgICBCdXR0b24sXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgZ2V0Q2FwdGNoYUxhYmVsID0gY3VycmVudCA9PiB7XG5cdGNvbnN0IHByb3ZpZGVyID0gZ2V0Q2FwdGNoYVByb3ZpZGVycygpLmZpbmQoXG5cdFx0KCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSA9PT0gY3VycmVudCxcblx0KTtcblxuXHRyZXR1cm4gcHJvdmlkZXI/LmxhYmVsID8/IF9fKCAnY2FwdGNoYScsICdqZXQtZm9ybS1idWlsZGVyJyApO1xufTtcblxuY29uc3QgbmFtZSA9ICdqZXQtZm9ybXMvY2FwdGNoYS1jb250YWluZXInO1xuXG5mdW5jdGlvbiBDYXB0Y2hhQmxvY2tUaXAoKSB7XG5cdGNvbnN0IFsgYXJncyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX3JlY2FwdGNoYScgKTtcblxuXHRjb25zdCBidXR0b25MYWJlbCA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0Q2FwdGNoYUxhYmVsKCBhcmdzLmNhcHRjaGEgKSxcblx0XHRbIGFyZ3MuY2FwdGNoYSBdLFxuXHQpO1xuXG5cdGNvbnN0IHsgaW5zZXJ0QmxvY2sgfSA9IHVzZURpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICk7XG5cblx0Y29uc3QgY2FuQWRkQmxvY2sgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHtcblx0XHRcdGNvbnN0IGNhcHRjaGFCbG9jayA9IHNlbGVjdCggJ2pldC1mb3Jtcy9maWVsZHMnICkuZ2V0QmxvY2soIG5hbWUgKTtcblxuXHRcdFx0cmV0dXJuICFjYXB0Y2hhQmxvY2s7XG5cdFx0fSxcblx0KTtcblxuXHRjb25zdCBpbnNlcnRDYXB0Y2hhQmxvY2sgPSB1c2VDYWxsYmFjayggKCkgPT4ge1xuXHRcdGlmICggIWNhbkFkZEJsb2NrICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBjb250YWluZXIgPSBjcmVhdGVCbG9jayggbmFtZSwgeyBwcm92aWRlcjogYXJncy5jYXB0Y2hhIH0gKTtcblxuXHRcdGluc2VydEJsb2NrKCBjb250YWluZXIgKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFsgY2FuQWRkQmxvY2sgXSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxkaXYgc3R5bGU9eyB7IG1hcmdpbkJvdHRvbTogJzEuNWVtJyB9IH0+XG5cdFx0XHQ8VGlwPlxuXHRcdFx0XHR7IF9fKFxuXHRcdFx0XHRcdGBCeSBkZWZhdWx0LCB0aGUgY2FwdGNoYSBpcyBhZGRlZCBiZWZvcmUgdGhlIHN1Ym1pdCBidXR0b24gb2YgdGhlIGZvcm0uIEhvd2V2ZXIsIHlvdSBjYW4gZGV0ZXJtaW5lIGl0cyBsb2NhdGlvbiB5b3Vyc2VsZiB1c2luZyB0aGUgYmxvY2suYCxcblx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9UaXA+XG5cdFx0PC9kaXY+XG5cdFx0PEJ1dHRvblxuXHRcdFx0dmFyaWFudD17ICdzZWNvbmRhcnknIH1cblx0XHRcdGRpc2FibGVkPXsgIWNhbkFkZEJsb2NrIH1cblx0XHRcdG9uQ2xpY2s9eyBpbnNlcnRDYXB0Y2hhQmxvY2sgfVxuXHRcdD5cblx0XHRcdHsgc3ByaW50Zihcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzIC0gc2VsZWN0ZWQgY2FwdGNoYSBsYWJlbFxuXHRcdFx0XHRfXyggYEFkZCAlcyBibG9ja2AsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRidXR0b25MYWJlbFxuXHRcdFx0KSB9XG5cdFx0PC9CdXR0b24+XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGNoYUJsb2NrVGlwOyIsImNvbnN0IHtcblx0ICAgICAgY3JlYXRlU2xvdEZpbGwsXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBTbG90LCBGaWxsIH0gPSBjcmVhdGVTbG90RmlsbCggJ0pGQkNhcHRjaGFPcHRpb25zJyApO1xuXG5mdW5jdGlvbiBDYXB0Y2hhT3B0aW9ucyggeyBjaGlsZHJlbiwgcHJvdmlkZXIgPSBmYWxzZSB9ICkge1xuXHRyZXR1cm4gPEZpbGw+eyAoIHsgYXJncywgc2V0QXJncyB9ICkgPT4ge1xuXHRcdGlmICggcHJvdmlkZXIgJiYgcHJvdmlkZXIgIT09IGFyZ3MuY2FwdGNoYSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICggJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNoaWxkcmVuICkge1xuXHRcdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHRcdH1cblxuXHRcdHJldHVybiBjaGlsZHJlbiggeyBhcmdzLCBzZXRBcmdzIH0gKTtcblx0fSB9PC9GaWxsPjtcbn1cblxuQ2FwdGNoYU9wdGlvbnMuU2xvdCA9IFNsb3Q7XG5cbmV4cG9ydCBkZWZhdWx0IENhcHRjaGFPcHRpb25zO1xuIiwiLyoqXG4gKlxuICogQHJldHVybiB7T2JqZWN0W119XG4gKi9cbmZ1bmN0aW9uIGdldENhcHRjaGFQcm92aWRlcnMoKSB7XG5cdHJldHVybiB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGFbICdjYXB0Y2hhLXRhYi1jb25maWcnIF0gPz8gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENhcHRjaGFQcm92aWRlcnM7IiwiY29uc3Qge1xuXHQgICAgICB1c2VNZXRhU3RhdGUsXG4gICAgICB9ID0gSmV0RkJIb29rcztcblxuZnVuY3Rpb24gdXNlQ2FwdGNoYVByb3ZpZGVyKCkge1xuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9yZWNhcHRjaGEnICk7XG5cdGNvbnN0IHsgY2FwdGNoYSB9ICAgICAgID0gYXJncztcblxuXHRpZiAoICFjYXB0Y2hhICkge1xuXHRcdHJldHVybiBbIHt9LCAoKSA9PiB7fSBdO1xuXHR9XG5cblx0Y29uc3QgcHJvdmlkZXJBcmdzID0gYXJncz8uWyBjYXB0Y2hhIF0gPz8ge307XG5cblx0Y29uc3Qgc2V0UHJvdmlkZXJBcmdzID0gKCBwcm9wcyA9IHt9ICkgPT4ge1xuXHRcdGlmICggIWNhcHRjaGEgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNldEFyZ3MoIHByZXYgPT4gKFxuXHRcdFx0e1xuXHRcdFx0XHQuLi5wcmV2LFxuXHRcdFx0XHRbIGNhcHRjaGEgXToge1xuXHRcdFx0XHRcdC4uLnByb3ZpZGVyQXJncyxcblx0XHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHQpICk7XG5cdH07XG5cblx0cmV0dXJuIFsgcHJvdmlkZXJBcmdzLCBzZXRQcm92aWRlckFyZ3MgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FwdGNoYVByb3ZpZGVyOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDYXB0Y2hhT3B0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvQ2FwdGNoYU9wdGlvbnMnO1xuaW1wb3J0IENhcHRjaGFCbG9ja0VkaXQgZnJvbSAnLi9jb21wb25lbnRzL0NhcHRjaGFCbG9ja0VkaXQnO1xuaW1wb3J0IHVzZUNhcHRjaGFQcm92aWRlciBmcm9tICcuL2hvb2tzL3VzZUNhcHRjaGFQcm92aWRlcic7XG5pbXBvcnQgZ2V0Q2FwdGNoYVByb3ZpZGVycyBmcm9tICcuL2hlbHBlcnMvZ2V0Q2FwdGNoYVByb3ZpZGVycyc7XG5pbXBvcnQgQ2FwdGNoYUJsb2NrVGlwIGZyb20gJy4vY29tcG9uZW50cy9DYXB0Y2hhQmxvY2tUaXAnO1xuXG53aW5kb3cuSmV0RkJDb21wb25lbnRzID0ge1xuXHQuLi53aW5kb3cuSmV0RkJDb21wb25lbnRzLFxuXHRDYXB0Y2hhT3B0aW9ucyxcblx0Q2FwdGNoYUJsb2NrRWRpdCxcblx0Q2FwdGNoYUJsb2NrVGlwLFxufTtcblxud2luZG93LkpldEZCQWN0aW9ucyA9IHtcblx0Li4ud2luZG93LkpldEZCQWN0aW9ucyxcblx0Z2V0Q2FwdGNoYVByb3ZpZGVycyxcbn07XG5cbndpbmRvdy5KZXRGQkhvb2tzID0ge1xuXHQuLi53aW5kb3cuSmV0RkJIb29rcyxcblx0dXNlQ2FwdGNoYVByb3ZpZGVyLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=