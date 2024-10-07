/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@wordpress/icons/build-module/library/cloud.js":
/*!**********************************************************************************!*\
  !*** ../../../../../node_modules/@wordpress/icons/build-module/library/cloud.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const cloud = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloud);
//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ "./call.webhook/WebhookTimeoutRow.jsx":
/*!********************************************!*\
  !*** ./call.webhook/WebhookTimeoutRow.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);





function WebhookTimeoutRow({
  settings,
  onChangeSettingObj
}) {
  var _settings$webhook_tim;
  const id = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, 'jfb-control');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, {
    createId: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Timeout in seconds', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    id: id,
    type: "number",
    value: (_settings$webhook_tim = settings.webhook_timeout) !== null && _settings$webhook_tim !== void 0 ? _settings$webhook_tim : 10,
    onChange: webhook_timeout => onChangeSettingObj({
      webhook_timeout
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebhookTimeoutRow);

/***/ }),

/***/ "./call.webhook/WebhookURLRow.jsx":
/*!****************************************!*\
  !*** ./call.webhook/WebhookURLRow.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__);







const {
  PresetButton,
  MacrosFields
} = JetFBComponents;
function RedirectCustomUrl({
  settings,
  onChangeSettingObj
}) {
  const {
    hasError,
    setShowError
  } = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.useActionValidatorProvider)({
    isSupported: error => 'webhook_url' === error?.property
  });
  const id = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControl, 'jfb-control');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControl, {
    createId: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.LabelWithActions, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RequiredLabel, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Webhook URL', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PresetButton, {
    value: settings.webhook_url,
    onChange: webhook_url => onChangeSettingObj({
      webhook_url
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MacrosFields, {
    onClick: name => {
      var _settings$webhook_url;
      return onChangeSettingObj({
        webhook_url: ((_settings$webhook_url = settings.webhook_url) !== null && _settings$webhook_url !== void 0 ? _settings$webhook_url : '') + name
      });
    },
    withCurrent: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_6__.cx)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.RowControlEndStyle, hasError && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.ControlWithErrorStyle),
    direction: "column"
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    id: id,
    value: settings.webhook_url,
    onChange: webhook_url => onChangeSettingObj({
      webhook_url
    }),
    onBlur: () => setShowError(true),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedirectCustomUrl);

/***/ }),

/***/ "./call.webhook/index.js":
/*!*******************************!*\
  !*** ./call.webhook/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./call.webhook/render.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "../../../../../node_modules/@wordpress/icons/build-module/library/cloud.js");


// eslint-disable-next-line import/no-extraneous-dependencies

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  type: 'call_webhook',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Call Webhook', 'jet-form-builder'),
  edit: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
  docHref: 'https://jetformbuilder.com/features/call-webhook/',
  category: 'advanced',
  validators: [({
    settings
  }) => settings?.webhook_url ? false : {
    type: 'empty',
    property: 'webhook_url'
  }]
});

/***/ }),

/***/ "./call.webhook/render.js":
/*!********************************!*\
  !*** ./call.webhook/render.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WebhookURLRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebhookURLRow */ "./call.webhook/WebhookURLRow.jsx");
/* harmony import */ var _WebhookTimeoutRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebhookTimeoutRow */ "./call.webhook/WebhookTimeoutRow.jsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function CallWebHookRender({
  settings,
  onChangeSettingObj
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WebhookURLRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WebhookTimeoutRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallWebHookRender);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "jet-form-builder-actions":
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["jfb"]["actions"];

/***/ }),

/***/ "jet-form-builder-components":
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["jfb"]["components"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "../../../../../node_modules/@linaria/core/dist/index.mjs":
/*!****************************************************************!*\
  !*** ../../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css_default),
/* harmony export */   cx: () => (/* binding */ cx_default)
/* harmony export */ });
// src/css.ts
var idx = 0;
var css = () => {
  if (false) {}
  throw new Error(
    'Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.'
  );
};
var css_default = css;

// src/cx.ts
var cx = function cx2() {
  const presentClassNames = Array.prototype.slice.call(arguments).filter(Boolean);
  const atomicClasses = {};
  const nonAtomicClasses = [];
  presentClassNames.forEach((arg) => {
    const individualClassNames = arg ? arg.split(" ") : [];
    individualClassNames.forEach((className) => {
      if (className.startsWith("atm_")) {
        const [, keyHash] = className.split("_");
        atomicClasses[keyHash] = className;
      } else {
        nonAtomicClasses.push(className);
      }
    });
  });
  const result = [];
  for (const keyHash in atomicClasses) {
    if (Object.prototype.hasOwnProperty.call(atomicClasses, keyHash)) {
      result.push(atomicClasses[keyHash]);
    }
  }
  result.push(...nonAtomicClasses);
  return result.join(" ");
};
var cx_default = cx;

//# sourceMappingURL=index.mjs.map

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _call_webhook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call.webhook */ "./call.webhook/index.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__);


(0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.registerAction)(_call_webhook__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBSUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvY2xvdWQuanMiLCJ3ZWJwYWNrOi8vamZiLWNhbGwtd2ViaG9vay8uL2NhbGwud2ViaG9vay9XZWJob29rVGltZW91dFJvdy5qc3giLCJ3ZWJwYWNrOi8vamZiLWNhbGwtd2ViaG9vay8uL2NhbGwud2ViaG9vay9XZWJob29rVVJMUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItY2FsbC13ZWJob29rLy4vY2FsbC53ZWJob29rL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svLi9jYWxsLndlYmhvb2svcmVuZGVyLmpzIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItY2FsbC13ZWJob29rL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLWNhbGwtd2ViaG9vay9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BsaW5hcmlhL2NvcmUvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLWNhbGwtd2ViaG9vay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItY2FsbC13ZWJob29rL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1jYWxsLXdlYmhvb2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItY2FsbC13ZWJob29rL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWNhbGwtd2ViaG9vay8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgY2xvdWQgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTcuMyAxMC4xYzAtMi41LTIuMS00LjQtNC44LTQuNC0yLjIgMC00LjEgMS40LTQuNiAzLjNoLS4yQzUuNyA5IDQgMTAuNyA0IDEyLjhjMCAyLjEgMS43IDMuOCAzLjcgMy44aDljMS44IDAgMy4yLTEuNSAzLjItMy4zLjEtMS42LTEuMS0yLjktMi42LTMuMnptLS41IDUuMWgtOWMtMS4yIDAtMi4yLTEuMS0yLjItMi4zczEtMi40IDIuMi0yLjRoMS4zbC4zLTEuMWMuNC0xLjMgMS43LTIuMiAzLjItMi4yIDEuOCAwIDMuMyAxLjMgMy4zIDIuOXYxLjNsMS4zLjJjLjguMSAxLjQuOSAxLjQgMS44LS4xIDEtLjkgMS44LTEuOCAxLjh6XCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGNsb3VkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xvdWQuanMubWFwIiwiaW1wb3J0IHtcclxuXHRMYWJlbCxcclxuXHRSb3dDb250cm9sLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgVGV4dENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VJbnN0YW5jZUlkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcclxuXHJcbmZ1bmN0aW9uIFdlYmhvb2tUaW1lb3V0Um93KCB7IHNldHRpbmdzLCBvbkNoYW5nZVNldHRpbmdPYmogfSApIHtcclxuXHRjb25zdCBpZCA9IHVzZUluc3RhbmNlSWQoIFJvd0NvbnRyb2wsICdqZmItY29udHJvbCcgKTtcclxuXHJcblx0cmV0dXJuIDxSb3dDb250cm9sIGNyZWF0ZUlkPXsgZmFsc2UgfT5cclxuXHRcdDxMYWJlbCBodG1sRm9yPXsgaWQgfT5cclxuXHRcdFx0eyBfXyggJ1RpbWVvdXQgaW4gc2Vjb25kcycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdDwvTGFiZWw+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLndlYmhvb2tfdGltZW91dCA/PyAxMH1cclxuXHRcdFx0b25DaGFuZ2U9eyB3ZWJob29rX3RpbWVvdXQgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdHsgd2ViaG9va190aW1lb3V0IH0sXHJcblx0XHRcdCkgfVxyXG5cdFx0Lz5cclxuXHQ8L1Jvd0NvbnRyb2w+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWJob29rVGltZW91dFJvdzsiLCJpbXBvcnQgeyB1c2VJbnN0YW5jZUlkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcclxuaW1wb3J0IHtcclxuXHRDb250cm9sV2l0aEVycm9yU3R5bGUsIEljb25UZXh0LCBMYWJlbFdpdGhBY3Rpb25zLFxyXG5cdFJlcXVpcmVkTGFiZWwsXHJcblx0Um93Q29udHJvbCxcclxuXHRSb3dDb250cm9sRW5kU3R5bGUsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQgeyBGbGV4LCBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGN4IH0gZnJvbSAnQGxpbmFyaWEvY29yZSc7XHJcbmltcG9ydCB7IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBQcmVzZXRCdXR0b24sXHJcblx0ICAgICAgTWFjcm9zRmllbGRzLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUmVkaXJlY3RDdXN0b21VcmwoIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiB9ICkge1xyXG5cclxuXHRjb25zdCB7IGhhc0Vycm9yLCBzZXRTaG93RXJyb3IgfSA9IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyKCB7XHJcblx0XHRpc1N1cHBvcnRlZDogZXJyb3IgPT4gJ3dlYmhvb2tfdXJsJyA9PT0gZXJyb3I/LnByb3BlcnR5LFxyXG5cdH0gKTtcclxuXHJcblx0Y29uc3QgaWQgPSB1c2VJbnN0YW5jZUlkKCBSb3dDb250cm9sLCAnamZiLWNvbnRyb2wnICk7XHJcblxyXG5cdHJldHVybiA8Um93Q29udHJvbCBjcmVhdGVJZD17IGZhbHNlIH0+XHJcblx0XHQ8TGFiZWxXaXRoQWN0aW9ucz5cclxuXHRcdFx0PFJlcXVpcmVkTGFiZWwgaHRtbEZvcj17IGlkIH0+XHJcblx0XHRcdFx0eyBfXyggJ1dlYmhvb2sgVVJMJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L1JlcXVpcmVkTGFiZWw+XHJcblx0XHRcdDxQcmVzZXRCdXR0b25cclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLndlYmhvb2tfdXJsIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IHdlYmhvb2tfdXJsID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdHsgd2ViaG9va191cmwgfSxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PE1hY3Jvc0ZpZWxkc1xyXG5cdFx0XHRcdG9uQ2xpY2s9eyBuYW1lID0+IG9uQ2hhbmdlU2V0dGluZ09iaigge1xyXG5cdFx0XHRcdFx0d2ViaG9va191cmw6IChcclxuXHRcdFx0XHRcdFx0c2V0dGluZ3Mud2ViaG9va191cmwgPz8gJydcclxuXHRcdFx0XHRcdCkgKyBuYW1lLFxyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0d2l0aEN1cnJlbnRcclxuXHRcdFx0Lz5cclxuXHRcdDwvTGFiZWxXaXRoQWN0aW9ucz5cclxuXHRcdDxGbGV4XHJcblx0XHRcdGNsYXNzTmFtZT17IGN4KFxyXG5cdFx0XHRcdFJvd0NvbnRyb2xFbmRTdHlsZSxcclxuXHRcdFx0XHRoYXNFcnJvciAmJiBDb250cm9sV2l0aEVycm9yU3R5bGUsXHJcblx0XHRcdCkgfVxyXG5cdFx0XHRkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG5cdFx0PlxyXG5cdFx0XHR7IGhhc0Vycm9yICYmIDxJY29uVGV4dD5cclxuXHRcdFx0XHR7IF9fKFxyXG5cdFx0XHRcdFx0J1BsZWFzZSBmaWxsIHRoaXMgcmVxdWlyZWQgZmllbGQnLFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHQ8L0ljb25UZXh0PiB9XHJcblx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdGlkPXsgaWQgfVxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mud2ViaG9va191cmwgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgd2ViaG9va191cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyB3ZWJob29rX3VybCB9LFxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cclxuXHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcclxuXHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9GbGV4PlxyXG5cdDwvUm93Q29udHJvbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0Q3VzdG9tVXJsO1xyXG4iLCJpbXBvcnQgQ2FsbFdlYkhvb2tSZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgY2xvdWQgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0eXBlOiAnY2FsbF93ZWJob29rJyxcclxuXHRsYWJlbDogX18oICdDYWxsIFdlYmhvb2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRlZGl0OiBDYWxsV2ViSG9va1JlbmRlcixcclxuXHRpY29uOiBjbG91ZCxcclxuXHRkb2NIcmVmOiAnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vZmVhdHVyZXMvY2FsbC13ZWJob29rLycsXHJcblx0Y2F0ZWdvcnk6ICdhZHZhbmNlZCcsXHJcblx0dmFsaWRhdG9yczogW1xyXG5cdFx0KCB7IHNldHRpbmdzIH0gKSA9PiBzZXR0aW5ncz8ud2ViaG9va191cmxcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgPyBmYWxzZVxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICA6IHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICd3ZWJob29rX3VybCcgfSxcclxuXHRdLFxyXG59O1xyXG4iLCJpbXBvcnQgV2ViaG9va1VSTFJvdyBmcm9tICcuL1dlYmhvb2tVUkxSb3cnO1xyXG5pbXBvcnQgV2ViaG9va1RpbWVvdXRSb3cgZnJvbSAnLi9XZWJob29rVGltZW91dFJvdyc7XHJcblxyXG5pbXBvcnQge0ZsZXh9IGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcclxuXHJcbmZ1bmN0aW9uIENhbGxXZWJIb29rUmVuZGVyKCB7IHNldHRpbmdzLCBvbkNoYW5nZVNldHRpbmdPYmogfSApIHtcclxuXHRyZXR1cm4gPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcblx0XHQ8V2ViaG9va1VSTFJvd1xyXG5cdFx0XHRzZXR0aW5ncz17IHNldHRpbmdzIH1cclxuXHRcdFx0b25DaGFuZ2VTZXR0aW5nT2JqPXsgb25DaGFuZ2VTZXR0aW5nT2JqIH1cclxuXHRcdC8+XHJcblx0XHQ8V2ViaG9va1RpbWVvdXRSb3dcclxuXHRcdFx0c2V0dGluZ3M9eyBzZXR0aW5ncyB9XHJcblx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaj17IG9uQ2hhbmdlU2V0dGluZ09iaiB9XHJcblx0XHQvPlxyXG5cdDwvRmxleD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxXZWJIb29rUmVuZGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gc3JjL2Nzcy50c1xudmFyIGlkeCA9IDA7XG52YXIgY3NzID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgcmV0dXJuIGBtb2NrZWQtY3NzLSR7aWR4Kyt9YDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1VzaW5nIHRoZSBcImNzc1wiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuJ1xuICApO1xufTtcbnZhciBjc3NfZGVmYXVsdCA9IGNzcztcblxuLy8gc3JjL2N4LnRzXG52YXIgY3ggPSBmdW5jdGlvbiBjeDIoKSB7XG4gIGNvbnN0IHByZXNlbnRDbGFzc05hbWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGF0b21pY0NsYXNzZXMgPSB7fTtcbiAgY29uc3Qgbm9uQXRvbWljQ2xhc3NlcyA9IFtdO1xuICBwcmVzZW50Q2xhc3NOYW1lcy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICBjb25zdCBpbmRpdmlkdWFsQ2xhc3NOYW1lcyA9IGFyZyA/IGFyZy5zcGxpdChcIiBcIikgOiBbXTtcbiAgICBpbmRpdmlkdWFsQ2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChcImF0bV9cIikpIHtcbiAgICAgICAgY29uc3QgWywga2V5SGFzaF0gPSBjbGFzc05hbWUuc3BsaXQoXCJfXCIpO1xuICAgICAgICBhdG9taWNDbGFzc2VzW2tleUhhc2hdID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uQXRvbWljQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChjb25zdCBrZXlIYXNoIGluIGF0b21pY0NsYXNzZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0b21pY0NsYXNzZXMsIGtleUhhc2gpKSB7XG4gICAgICByZXN1bHQucHVzaChhdG9taWNDbGFzc2VzW2tleUhhc2hdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goLi4ubm9uQXRvbWljQ2xhc3Nlcyk7XG4gIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59O1xudmFyIGN4X2RlZmF1bHQgPSBjeDtcbmV4cG9ydCB7XG4gIGNzc19kZWZhdWx0IGFzIGNzcyxcbiAgY3hfZGVmYXVsdCBhcyBjeFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFjdGlvbiBmcm9tICcuL2NhbGwud2ViaG9vayc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyQWN0aW9uIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuXHJcbnJlZ2lzdGVyQWN0aW9uKCBhY3Rpb24gKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9