/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/main.js":
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verification_plugin_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-plugin/render */ \"./editor/verification-plugin/render.js\");\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('jet.fb.register.plugin.jf-actions-panel.before', 'jet-form-builder/verification', function (plugins) {\n  plugins.push(_verification_plugin_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  return plugins;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUE4RDtBQUU5RCxJQUNPQyxTQUFTLEdBQ05DLEVBQUUsQ0FBQ0MsS0FBSyxDQURYRixTQUFTO0FBR2hCQSxTQUFTLENBQ1IsZ0RBQWdELEVBQ2hELCtCQUErQixFQUMvQixVQUFXRyxPQUFPLEVBQUc7RUFDcEJBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFFTCxtRUFBbUIsQ0FBQztFQUVsQyxPQUFPSSxPQUFPO0FBQ2YsQ0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXZlcmlmaWNhdGlvbi8uL2VkaXRvci9tYWluLmpzPzA5ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsdWdpblZlcmlmaWNhdGlvbiBmcm9tICcuL3ZlcmlmaWNhdGlvbi1wbHVnaW4vcmVuZGVyJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcbiAgICAgIH0gPSB3cC5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlZ2lzdGVyLnBsdWdpbi5qZi1hY3Rpb25zLXBhbmVsLmJlZm9yZScsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvdmVyaWZpY2F0aW9uJyxcclxuXHRmdW5jdGlvbiAoIHBsdWdpbnMgKSB7XHJcblx0XHRwbHVnaW5zLnB1c2goIFBsdWdpblZlcmlmaWNhdGlvbiApO1xyXG5cclxuXHRcdHJldHVybiBwbHVnaW5zO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbIlBsdWdpblZlcmlmaWNhdGlvbiIsImFkZEZpbHRlciIsIndwIiwiaG9va3MiLCJwbHVnaW5zIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/main.js\n");

/***/ }),

/***/ "./editor/verification-plugin/render.js":
/*!**********************************************!*\
  !*** ./editor/verification-plugin/render.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure \" + obj); }\nvar __ = wp.i18n.__;\nvar _JetFBHooks = JetFBHooks,\n  useMetaState = _JetFBHooks.useMetaState;\n_objectDestructuringEmpty(wp.components);\nvar _wp$components = wp.components,\n  __experimentalToggleGroupControl = _wp$components.__experimentalToggleGroupControl,\n  __experimentalToggleGroupControlOption = _wp$components.__experimentalToggleGroupControlOption,\n  ToggleGroupControl = _wp$components.ToggleGroupControl,\n  ToggleGroupControlOption = _wp$components.ToggleGroupControlOption,\n  ToggleControl = _wp$components.ToggleControl,\n  TextControl = _wp$components.TextControl;\nToggleGroupControl = ToggleGroupControl || __experimentalToggleGroupControl;\nToggleGroupControlOption = ToggleGroupControlOption || __experimentalToggleGroupControlOption;\nfunction PluginVerification() {\n  var _useMetaState = useMetaState('_jf_verification'),\n    _useMetaState2 = _slicedToArray(_useMetaState, 2),\n    args = _useMetaState2[0],\n    setArgs = _useMetaState2[1];\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {\n    label: __('Enable verification by email', 'jet-form-builder'),\n    checked: args.enable,\n    help: __(\"Enable this option if you need to post all, \\nor individual actions after verification using a mailing address\", 'jet-form-builder'),\n    onChange: function onChange(enable) {\n      return setArgs(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          enable: enable\n        });\n      });\n    }\n  }), args.enable && wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {\n    label: __('Custom verification availability duration', 'jet-form-builder'),\n    checked: args.lifetime,\n    help: __(\"By default, you can pass verification in the next \\n4 hours after submitting the form\", 'jet-form-builder'),\n    onChange: function onChange(lifetime) {\n      return setArgs(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          lifetime: lifetime\n        });\n      });\n    }\n  }), args.lifetime && wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {\n    value: args.duration,\n    onChange: function onChange(duration) {\n      return setArgs(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, {\n          duration: duration\n        });\n      });\n    },\n    label: __('Duration', 'jet-form-builder'),\n    help: __(\"Specify the number of hours during which the \\nuser can pass verification. Leave this field empty to \\nmake life expectancy no end.\", 'jet-form-builder')\n  }))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginVerification);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQzlCRCxJQUFJO1VBQUVJLFFBQVEsRUFBUkE7UUFBUTtNQUFBLENBQ2xCLENBQUM7SUFBQSxDQUFFO0lBQ0xULEtBQUssRUFBR3pCLEVBQUUsQ0FBRSxVQUFVLEVBQUUsa0JBQW1CLENBQUc7SUFDOUM0QixJQUFJLEVBQUc1QixFQUFFLHdJQUlSLGtCQUNEO0VBQUcsQ0FDSCxDQUNBLENBQ0QsQ0FDRCxDQUFDO0FBQ0o7QUFFQSxpRUFBZWUsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXZlcmlmaWNhdGlvbi8uL2VkaXRvci92ZXJpZmljYXRpb24tcGx1Z2luL3JlbmRlci5qcz9hOTVkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlTWV0YVN0YXRlLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IHt9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmxldCB7XHJcblx0ICAgIF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sLFxyXG5cdCAgICBfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbixcclxuXHQgICAgVG9nZ2xlR3JvdXBDb250cm9sLFxyXG5cdCAgICBUb2dnbGVHcm91cENvbnRyb2xPcHRpb24sXHJcblx0ICAgIFRvZ2dsZUNvbnRyb2wsXHJcblx0ICAgIFRleHRDb250cm9sLFxyXG4gICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5Ub2dnbGVHcm91cENvbnRyb2wgICAgICAgPSAoXHJcblx0VG9nZ2xlR3JvdXBDb250cm9sIHx8IF9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sXHJcbik7XHJcblRvZ2dsZUdyb3VwQ29udHJvbE9wdGlvbiA9IChcclxuXHRUb2dnbGVHcm91cENvbnRyb2xPcHRpb24gfHwgX19leHBlcmltZW50YWxUb2dnbGVHcm91cENvbnRyb2xPcHRpb25cclxuKTtcclxuXHJcbmZ1bmN0aW9uIFBsdWdpblZlcmlmaWNhdGlvbigpIHtcclxuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl92ZXJpZmljYXRpb24nICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBfXyggJ0VuYWJsZSB2ZXJpZmljYXRpb24gYnkgZW1haWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdGNoZWNrZWQ9eyBhcmdzLmVuYWJsZSB9XHJcblx0XHRcdGhlbHA9eyBfXyhcclxuXHRcdFx0XHRgRW5hYmxlIHRoaXMgb3B0aW9uIGlmIHlvdSBuZWVkIHRvIHBvc3QgYWxsLCBcclxub3IgaW5kaXZpZHVhbCBhY3Rpb25zIGFmdGVyIHZlcmlmaWNhdGlvbiB1c2luZyBhIG1haWxpbmcgYWRkcmVzc2AsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBlbmFibGUgPT4gc2V0QXJncyggcHJldiA9PiAoXHJcblx0XHRcdFx0eyAuLi5wcmV2LCBlbmFibGUgfVxyXG5cdFx0XHQpICkgfVxyXG5cdFx0Lz5cclxuXHRcdHsgYXJncy5lbmFibGUgJiYgPD5cclxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IF9fKCAnQ3VzdG9tIHZlcmlmaWNhdGlvbiBhdmFpbGFiaWxpdHkgZHVyYXRpb24nLFxyXG5cdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdGNoZWNrZWQ9eyBhcmdzLmxpZmV0aW1lIH1cclxuXHRcdFx0XHRoZWxwPXsgX18oXHJcblx0XHRcdFx0XHRgQnkgZGVmYXVsdCwgeW91IGNhbiBwYXNzIHZlcmlmaWNhdGlvbiBpbiB0aGUgbmV4dCBcclxuNCBob3VycyBhZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtYCxcclxuXHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IGxpZmV0aW1lID0+IHNldEFyZ3MoIHByZXYgPT4gKFxyXG5cdFx0XHRcdFx0eyAuLi5wcmV2LCBsaWZldGltZSB9XHJcblx0XHRcdFx0KSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0eyBhcmdzLmxpZmV0aW1lICYmIDw+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHR2YWx1ZT17IGFyZ3MuZHVyYXRpb24gfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBkdXJhdGlvbiA9PiBzZXRBcmdzKCBwcmV2ID0+IChcclxuXHRcdFx0XHRcdFx0eyAuLi5wcmV2LCBkdXJhdGlvbiB9XHJcblx0XHRcdFx0XHQpICkgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0R1cmF0aW9uJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0aGVscD17IF9fKFxyXG5cdFx0XHRcdFx0XHRgU3BlY2lmeSB0aGUgbnVtYmVyIG9mIGhvdXJzIGR1cmluZyB3aGljaCB0aGUgXHJcbnVzZXIgY2FuIHBhc3MgdmVyaWZpY2F0aW9uLiBMZWF2ZSB0aGlzIGZpZWxkIGVtcHR5IHRvIFxyXG5tYWtlIGxpZmUgZXhwZWN0YW5jeSBubyBlbmQuYCxcclxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC8+IH1cclxuXHRcdDwvPiB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5WZXJpZmljYXRpb247XHJcbiJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsIl9KZXRGQkhvb2tzIiwiSmV0RkJIb29rcyIsInVzZU1ldGFTdGF0ZSIsIl9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkiLCJjb21wb25lbnRzIiwiX3dwJGNvbXBvbmVudHMiLCJfX2V4cGVyaW1lbnRhbFRvZ2dsZUdyb3VwQ29udHJvbCIsIl9fZXhwZXJpbWVudGFsVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIiwiVG9nZ2xlR3JvdXBDb250cm9sIiwiVG9nZ2xlR3JvdXBDb250cm9sT3B0aW9uIiwiVG9nZ2xlQ29udHJvbCIsIlRleHRDb250cm9sIiwiUGx1Z2luVmVyaWZpY2F0aW9uIiwiX3VzZU1ldGFTdGF0ZSIsIl91c2VNZXRhU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhcmdzIiwic2V0QXJncyIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUmVhY3QiLCJGcmFnbWVudCIsImxhYmVsIiwiY2hlY2tlZCIsImVuYWJsZSIsImhlbHAiLCJvbkNoYW5nZSIsInByZXYiLCJfb2JqZWN0U3ByZWFkIiwibGlmZXRpbWUiLCJ2YWx1ZSIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/verification-plugin/render.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/main.js");
/******/ 	
/******/ })()
;