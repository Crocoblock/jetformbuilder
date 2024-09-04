/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Hooks/useFields.js":
/*!****************************!*\
  !*** ./Hooks/useFields.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__);
var _window$JetFBHooks;




/**
 * @param  options {{
 *                 withInner: Boolean|undefined,
 *                 excludeCurrent: Boolean|undefined
 *                 currentId: String|undefined
 *                 placeholder: String|undefined
 *                 }}
 * @return {Array}
 */
function useFields(options = {}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockEditContext)();
  const actionFields = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.useRequestFields)();
  if (options.excludeCurrent && blockProps?.clientId?.length) {
    options.currentId = blockProps.clientId;
  }
  const fields = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select('jet-forms/fields').getFields(options),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return options.placeholder ? [{
    value: '',
    label: options.placeholder
  }, ...fields, ...actionFields] : [...fields, ...actionFields];
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useFields = useFields;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFields);

/***/ }),

/***/ "./Hooks/useSanitizeFieldsMap.js":
/*!***************************************!*\
  !*** ./Hooks/useSanitizeFieldsMap.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useFields */ "./Hooks/useFields.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__);
var _window$JetFBHooks;



function useSanitizeFieldsMap(mapProperty = 'fields_map') {
  //const fields = useFields( { withInner: false }, [] );
  const fields = (0,_useFields__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    settings,
    onChangeSettingObj
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_2__.CurrentActionEditContext);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!settings.hasOwnProperty(mapProperty)) {
      return;
    }
    const fieldsMap = settings[mapProperty];
    const hasField = fieldName => {
      return -1 !== fields.findIndex(current => current.value === fieldName);
    };
    for (const fieldName in fieldsMap) {
      if (!fieldsMap.hasOwnProperty(fieldName)) {
        continue;
      }
      if (!hasField(fieldName)) {
        delete fieldsMap[fieldName];
      }
    }
    onChangeSettingObj({
      [mapProperty]: fieldsMap
    });
  }, [mapProperty]);
}

// backward compatibility
window.JetFBHooks = (_window$JetFBHooks = window.JetFBHooks) !== null && _window$JetFBHooks !== void 0 ? _window$JetFBHooks : {};
window.JetFBHooks.useSanitizeFieldsMap = useSanitizeFieldsMap;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSanitizeFieldsMap);

/***/ }),

/***/ "jet-form-builder-actions":
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["jfb"]["actions"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFields: () => (/* reexport safe */ _Hooks_useFields__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useSanitizeFieldsMap: () => (/* reexport safe */ _Hooks_useSanitizeFieldsMap__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Hooks_useFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hooks/useFields */ "./Hooks/useFields.js");
/* harmony import */ var _Hooks_useSanitizeFieldsMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hooks/useSanitizeFieldsMap */ "./Hooks/useSanitizeFieldsMap.js");


(window.jfb = window.jfb || {}).blocksToActions = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQzFDQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvLi9Ib29rcy91c2VGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zLy4vSG9va3MvdXNlU2FuaXRpemVGaWVsZHNNYXAuanMiLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1ibG9ja3MtdG8tYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQmxvY2tFZGl0Q29udGV4dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHVzZVJlcXVlc3RGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuXG4vKipcbiAqIEBwYXJhbSAgb3B0aW9ucyB7e1xuICogICAgICAgICAgICAgICAgIHdpdGhJbm5lcjogQm9vbGVhbnx1bmRlZmluZWQsXG4gKiAgICAgICAgICAgICAgICAgZXhjbHVkZUN1cnJlbnQ6IEJvb2xlYW58dW5kZWZpbmVkXG4gKiAgICAgICAgICAgICAgICAgY3VycmVudElkOiBTdHJpbmd8dW5kZWZpbmVkXG4gKiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZ3x1bmRlZmluZWRcbiAqICAgICAgICAgICAgICAgICB9fVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHVzZUZpZWxkcyggb3B0aW9ucyA9IHt9ICkge1xuXHRjb25zdCBibG9ja1Byb3BzICAgPSB1c2VCbG9ja0VkaXRDb250ZXh0KCk7XG5cdGNvbnN0IGFjdGlvbkZpZWxkcyA9IHVzZVJlcXVlc3RGaWVsZHMoKTtcblxuXHRpZiAoIG9wdGlvbnMuZXhjbHVkZUN1cnJlbnQgJiYgYmxvY2tQcm9wcz8uY2xpZW50SWQ/Lmxlbmd0aCApIHtcblx0XHRvcHRpb25zLmN1cnJlbnRJZCA9IGJsb2NrUHJvcHMuY2xpZW50SWQ7XG5cdH1cblxuXHRjb25zdCBmaWVsZHMgPSB1c2VTZWxlY3QoXG5cdFx0c2VsZWN0ID0+IHNlbGVjdCggJ2pldC1mb3Jtcy9maWVsZHMnICkuZ2V0RmllbGRzKCBvcHRpb25zICksXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXHRcdFtdLFxuXHQpO1xuXG5cdHJldHVybiBvcHRpb25zLnBsYWNlaG9sZGVyXG5cdCAgICAgICA/IFtcblx0XHRcdHsgdmFsdWU6ICcnLCBsYWJlbDogb3B0aW9ucy5wbGFjZWhvbGRlciB9LFxuXHRcdFx0Li4uZmllbGRzLFxuXHRcdFx0Li4uYWN0aW9uRmllbGRzLFxuXHRcdF1cblx0ICAgICAgIDogW1xuXHRcdFx0Li4uZmllbGRzLFxuXHRcdFx0Li4uYWN0aW9uRmllbGRzLFxuXHRcdF07XG59XG5cbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbndpbmRvdy5KZXRGQkhvb2tzICAgICAgICAgICA9IHdpbmRvdy5KZXRGQkhvb2tzID8/IHt9O1xud2luZG93LkpldEZCSG9va3MudXNlRmllbGRzID0gdXNlRmllbGRzO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VGaWVsZHM7IiwiaW1wb3J0IHVzZUZpZWxkcyBmcm9tICcuL3VzZUZpZWxkcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcblxuZnVuY3Rpb24gdXNlU2FuaXRpemVGaWVsZHNNYXAoIG1hcFByb3BlcnR5ID0gJ2ZpZWxkc19tYXAnICkge1xuXHQvL2NvbnN0IGZpZWxkcyA9IHVzZUZpZWxkcyggeyB3aXRoSW5uZXI6IGZhbHNlIH0sIFtdICk7XG5cdGNvbnN0IGZpZWxkcyA9IHVzZUZpZWxkcygpO1xuXG5cdGNvbnN0IHtcblx0XHQgICAgICBzZXR0aW5ncyxcblx0XHQgICAgICBvbkNoYW5nZVNldHRpbmdPYmosXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBDdXJyZW50QWN0aW9uRWRpdENvbnRleHQgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoICFzZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSggbWFwUHJvcGVydHkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZmllbGRzTWFwID0gc2V0dGluZ3NbIG1hcFByb3BlcnR5IF07XG5cblx0XHRjb25zdCBoYXNGaWVsZCA9IGZpZWxkTmFtZSA9PiB7XG5cdFx0XHRyZXR1cm4gLTEgIT09IGZpZWxkcy5maW5kSW5kZXgoXG5cdFx0XHRcdGN1cnJlbnQgPT4gY3VycmVudC52YWx1ZSA9PT0gZmllbGROYW1lLFxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Zm9yICggY29uc3QgZmllbGROYW1lIGluIGZpZWxkc01hcCApIHtcblx0XHRcdGlmICggIWZpZWxkc01hcC5oYXNPd25Qcm9wZXJ0eSggZmllbGROYW1lICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICFoYXNGaWVsZCggZmllbGROYW1lICkgKSB7XG5cdFx0XHRcdGRlbGV0ZSBmaWVsZHNNYXBbIGZpZWxkTmFtZSBdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRvbkNoYW5nZVNldHRpbmdPYmooIHsgWyBtYXBQcm9wZXJ0eSBdOiBmaWVsZHNNYXAgfSApO1xuXHR9LCBbIG1hcFByb3BlcnR5IF0gKTtcbn1cblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxud2luZG93LkpldEZCSG9va3MgICAgICAgICAgICAgICAgICAgICAgPSB3aW5kb3cuSmV0RkJIb29rcyA/PyB7fTtcbndpbmRvdy5KZXRGQkhvb2tzLnVzZVNhbml0aXplRmllbGRzTWFwID0gdXNlU2FuaXRpemVGaWVsZHNNYXA7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNhbml0aXplRmllbGRzTWFwOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRmllbGRzIH0gZnJvbSAnLi9Ib29rcy91c2VGaWVsZHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTYW5pdGl6ZUZpZWxkc01hcCB9IGZyb20gJy4vSG9va3MvdXNlU2FuaXRpemVGaWVsZHNNYXAnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9