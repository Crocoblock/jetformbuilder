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

/***/ }),

/***/ "jet-form-builder-actions":
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["jfb"]["actions"];

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


})();

(window.jfb = window.jfb || {}).blocksToActions = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQVFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUN6Q0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvLi9Ib29rcy91c2VGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zLy4vSG9va3MvdXNlU2FuaXRpemVGaWVsZHNNYXAuanMiLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2pmYi1ibG9ja3MtdG8tYWN0aW9ucy9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJhY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi1ibG9ja3MtdG8tYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWJsb2Nrcy10by1hY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItYmxvY2tzLXRvLWFjdGlvbnMvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xyXG5pbXBvcnQgeyB1c2VCbG9ja0VkaXRDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xyXG5pbXBvcnQgeyB1c2VSZXF1ZXN0RmllbGRzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG9wdGlvbnMge3tcclxuICogICAgICAgICAgICAgICAgIHdpdGhJbm5lcjogQm9vbGVhbnx1bmRlZmluZWQsXHJcbiAqICAgICAgICAgICAgICAgICBleGNsdWRlQ3VycmVudDogQm9vbGVhbnx1bmRlZmluZWRcclxuICogICAgICAgICAgICAgICAgIGN1cnJlbnRJZDogU3RyaW5nfHVuZGVmaW5lZFxyXG4gKiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZ3x1bmRlZmluZWRcclxuICogICAgICAgICAgICAgICAgIH19XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKi9cclxuZnVuY3Rpb24gdXNlRmllbGRzKCBvcHRpb25zID0ge30gKSB7XHJcblx0Y29uc3QgYmxvY2tQcm9wcyAgID0gdXNlQmxvY2tFZGl0Q29udGV4dCgpO1xyXG5cdGNvbnN0IGFjdGlvbkZpZWxkcyA9IHVzZVJlcXVlc3RGaWVsZHMoKTtcclxuXHJcblx0aWYgKCBvcHRpb25zLmV4Y2x1ZGVDdXJyZW50ICYmIGJsb2NrUHJvcHM/LmNsaWVudElkPy5sZW5ndGggKSB7XHJcblx0XHRvcHRpb25zLmN1cnJlbnRJZCA9IGJsb2NrUHJvcHMuY2xpZW50SWQ7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmaWVsZHMgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL2ZpZWxkcycgKS5nZXRGaWVsZHMoIG9wdGlvbnMgKSxcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuXHRcdFtdLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiBvcHRpb25zLnBsYWNlaG9sZGVyXHJcblx0ICAgICAgID8gW1xyXG5cdFx0XHR7IHZhbHVlOiAnJywgbGFiZWw6IG9wdGlvbnMucGxhY2Vob2xkZXIgfSxcclxuXHRcdFx0Li4uZmllbGRzLFxyXG5cdFx0XHQuLi5hY3Rpb25GaWVsZHMsXHJcblx0XHRdXHJcblx0ICAgICAgIDogW1xyXG5cdFx0XHQuLi5maWVsZHMsXHJcblx0XHRcdC4uLmFjdGlvbkZpZWxkcyxcclxuXHRcdF07XHJcbn1cclxuXHJcbi8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxud2luZG93LkpldEZCSG9va3MgICAgICAgICAgID0gd2luZG93LkpldEZCSG9va3MgPz8ge307XHJcbndpbmRvdy5KZXRGQkhvb2tzLnVzZUZpZWxkcyA9IHVzZUZpZWxkcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZpZWxkczsiLCJpbXBvcnQgdXNlRmllbGRzIGZyb20gJy4vdXNlRmllbGRzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcclxuaW1wb3J0IHsgQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIHVzZVNhbml0aXplRmllbGRzTWFwKCBtYXBQcm9wZXJ0eSA9ICdmaWVsZHNfbWFwJyApIHtcclxuXHRjb25zdCBmaWVsZHMgPSB1c2VGaWVsZHMoKTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgc2V0dGluZ3MsXHJcblx0XHQgICAgICBvbkNoYW5nZVNldHRpbmdPYmosXHJcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggIXNldHRpbmdzLmhhc093blByb3BlcnR5KCBtYXBQcm9wZXJ0eSApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBmaWVsZHNNYXAgPSBzZXR0aW5nc1sgbWFwUHJvcGVydHkgXTtcclxuXHJcblx0XHRjb25zdCBoYXNGaWVsZCA9IGZpZWxkTmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiAtMSAhPT0gZmllbGRzLmZpbmRJbmRleChcclxuXHRcdFx0XHRjdXJyZW50ID0+IGN1cnJlbnQudmFsdWUgPT09IGZpZWxkTmFtZSxcclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Zm9yICggY29uc3QgZmllbGROYW1lIGluIGZpZWxkc01hcCApIHtcclxuXHRcdFx0aWYgKCAhZmllbGRzTWFwLmhhc093blByb3BlcnR5KCBmaWVsZE5hbWUgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAhaGFzRmllbGQoIGZpZWxkTmFtZSApICkge1xyXG5cdFx0XHRcdGRlbGV0ZSBmaWVsZHNNYXBbIGZpZWxkTmFtZSBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRvbkNoYW5nZVNldHRpbmdPYmooIHsgWyBtYXBQcm9wZXJ0eSBdOiBmaWVsZHNNYXAgfSApO1xyXG5cdH0sIFsgbWFwUHJvcGVydHkgXSApO1xyXG59XHJcblxyXG4vLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbndpbmRvdy5KZXRGQkhvb2tzICAgICAgICAgICAgICAgICAgICAgID0gd2luZG93LkpldEZCSG9va3MgPz8ge307XHJcbndpbmRvdy5KZXRGQkhvb2tzLnVzZVNhbml0aXplRmllbGRzTWFwID0gdXNlU2FuaXRpemVGaWVsZHNNYXA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTYW5pdGl6ZUZpZWxkc01hcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJhY3Rpb25zXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZUZpZWxkcyB9IGZyb20gJy4vSG9va3MvdXNlRmllbGRzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTYW5pdGl6ZUZpZWxkc01hcCB9IGZyb20gJy4vSG9va3MvdXNlU2FuaXRpemVGaWVsZHNNYXAnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=