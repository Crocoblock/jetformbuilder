/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js":
/*!**************************************************************************************************!*\
  !*** ../../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js ***!
  \**************************************************************************************************/
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

const commentAuthorAvatar = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentAuthorAvatar);
//# sourceMappingURL=comment-author-avatar.js.map

/***/ }),

/***/ "./components/UserPropertySelect.js":
/*!******************************************!*\
  !*** ./components/UserPropertySelect.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  TextControl
} = wp.components;
const {
  useContext
} = wp.element;
const {
  CurrentActionEditContext,
  ActionFieldsMapContext,
  CurrentPropertyMapContext
} = JetFBComponents;
function UserPropertySelect() {
  // context with action props
  const {
    FieldSelect,
    property
  } = useContext(CurrentPropertyMapContext);
  const {
    setMapField,
    getMapField
  } = useContext(CurrentActionEditContext);
  // context with current field in fields map
  const {
    name,
    index
  } = useContext(ActionFieldsMapContext);
  switch (property) {
    case 'user_meta':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-base-control jet-margin-bottom-wrapper"
      }, FieldSelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
        key: name + index + '_text',
        value: getMapField({
          name
        }),
        onChange: value => setMapField({
          nameField: name,
          value
        }),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }));
    default:
      return FieldSelect;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPropertySelect);

/***/ }),

/***/ "./update.user/index.js":
/*!******************************!*\
  !*** ./update.user/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./update.user/render.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "../../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js");


// eslint-disable-next-line import/no-extraneous-dependencies

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  type: 'update_user',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update User', 'jet-form-builder'),
  edit: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
  docHref: 'https://jetformbuilder.com/features/update-user/',
  category: 'user',
  validators: [({
    settings
  }) => {
    var _settings$fields_map;
    const entries = Object.values((_settings$fields_map = settings?.fields_map) !== null && _settings$fields_map !== void 0 ? _settings$fields_map : {});
    return entries.some(property => 'ID' === property) ? false : {
      type: 'empty',
      property: 'field_id'
    };
  }]
});

/***/ }),

/***/ "./update.user/render.js":
/*!*******************************!*\
  !*** ./update.user/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserPropertySelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserPropertySelect */ "./components/UserPropertySelect.js");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6__);







const {
  ActionFieldsMap,
  WrapperRequiredControl,
  DynamicPropertySelect
} = JetFBComponents;

// eslint-disable-next-line max-lines-per-function
function UpdateUserRender(props) {
  const formFields = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__.convertListToFieldsMap)((0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_2__.useFields)({
    withInner: false
  }));
  const {
    settings,
    onChangeSetting,
    source,
    label
  } = props;

  /**
   * @see https://github.com/Crocoblock/issues-tracker/issues/1315
   */
  (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_2__.useSanitizeFieldsMap)();
  const {
    hasError
  } = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__.useActionValidatorProvider)({
    isSupported: error => 'field_id' === error?.property
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionFieldsMap, {
    label: label('fields_map'),
    fields: formFields,
    customHelp: () => hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Please select a field for User ID', 'jet-form-builder'))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrapperRequiredControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicPropertySelect, {
    dynamic: ['user_meta']
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_UserPropertySelect__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6__.Label, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('User role', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    id: id,
    value: settings.user_role,
    options: source.userRoles,
    onChange: newValue => onChangeSetting(newValue, 'user_role'),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_6__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__.ActionMessages, {
    ...props
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateUserRender);

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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

/***/ "jet-form-builder-actions":
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["jfb"]["actions"];

/***/ }),

/***/ "jet-form-builder-blocks-to-actions":
/*!******************************************!*\
  !*** external ["jfb","blocksToActions"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["jfb"]["blocksToActions"];

/***/ }),

/***/ "jet-form-builder-components":
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["jfb"]["components"];

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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.user */ "./update.user/index.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__);


(0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.registerAction)(_update_user__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBR0E7QUFFQTs7Ozs7Ozs7OztBQzNGQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvY29tbWVudC1hdXRob3ItYXZhdGFyLmpzIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci8uL2NvbXBvbmVudHMvVXNlclByb3BlcnR5U2VsZWN0LmpzIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci8uL3VwZGF0ZS51c2VyL2luZGV4LmpzIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci8uL3VwZGF0ZS51c2VyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYmxvY2tzVG9BY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgUGF0aCwgU1ZHIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGNvbW1lbnRBdXRob3JBdmF0YXIgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBkOiBcIk03LjI1IDE2LjQzN2E2LjUgNi41IDAgMSAxIDkuNSAwVjE2QTIuNzUgMi43NSAwIDAgMCAxNCAxMy4yNWgtNEEyLjc1IDIuNzUgMCAwIDAgNy4yNSAxNnYuNDM3Wm0xLjUgMS4xOTNhNi40NyA2LjQ3IDAgMCAwIDMuMjUuODcgNi40NyA2LjQ3IDAgMCAwIDMuMjUtLjg3VjE2YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNWgtNGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2MS42M1pNNCAxMmE4IDggMCAxIDEgMTYgMCA4IDggMCAwIDEtMTYgMFptMTAtMmEyIDIgMCAxIDEtNCAwIDIgMiAwIDAgMSA0IDBaXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgY29tbWVudEF1dGhvckF2YXRhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1lbnQtYXV0aG9yLWF2YXRhci5qcy5tYXAiLCJjb25zdCB7XHJcblx0ICAgICAgVGV4dENvbnRyb2wsXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlQ29udGV4dCxcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHtcclxuXHQgICAgICBDdXJyZW50QWN0aW9uRWRpdENvbnRleHQsXHJcblx0ICAgICAgQWN0aW9uRmllbGRzTWFwQ29udGV4dCxcclxuXHQgICAgICBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0LFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gVXNlclByb3BlcnR5U2VsZWN0KCkge1xyXG5cdC8vIGNvbnRleHQgd2l0aCBhY3Rpb24gcHJvcHNcclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBGaWVsZFNlbGVjdCxcclxuXHRcdCAgICAgIHByb3BlcnR5LFxyXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBDdXJyZW50UHJvcGVydHlNYXBDb250ZXh0ICk7XHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgc2V0TWFwRmllbGQsXHJcblx0XHQgICAgICBnZXRNYXBGaWVsZCxcclxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0ICk7XHJcblx0Ly8gY29udGV4dCB3aXRoIGN1cnJlbnQgZmllbGQgaW4gZmllbGRzIG1hcFxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIG5hbWUsXHJcblx0XHQgICAgICBpbmRleCxcclxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQWN0aW9uRmllbGRzTWFwQ29udGV4dCApO1xyXG5cclxuXHRzd2l0Y2ggKCBwcm9wZXJ0eSApIHtcclxuXHRcdGNhc2UgJ3VzZXJfbWV0YSc6XHJcblx0XHRcdHJldHVybiA8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgamV0LW1hcmdpbi1ib3R0b20td3JhcHBlclwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IEZpZWxkU2VsZWN0IH1cclxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdGtleT17IG5hbWUgKyBpbmRleCArICdfdGV4dCcgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBnZXRNYXBGaWVsZCggeyBuYW1lIH0gKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKFxyXG5cdFx0XHRcdFx0XHR7IG5hbWVGaWVsZDogbmFtZSwgdmFsdWUgfSxcclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXHJcblx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PjtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBGaWVsZFNlbGVjdDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9wZXJ0eVNlbGVjdDsiLCJpbXBvcnQgVXBkYXRlVXNlclJlbmRlciBmcm9tICcuL3JlbmRlcic7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xyXG5pbXBvcnQgeyBjb21tZW50QXV0aG9yQXZhdGFyIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dHlwZTogJ3VwZGF0ZV91c2VyJyxcclxuXHRsYWJlbDogX18oICdVcGRhdGUgVXNlcicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGVkaXQ6IFVwZGF0ZVVzZXJSZW5kZXIsXHJcblx0aWNvbjogY29tbWVudEF1dGhvckF2YXRhcixcclxuXHRkb2NIcmVmOiAnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vZmVhdHVyZXMvdXBkYXRlLXVzZXIvJyxcclxuXHRjYXRlZ29yeTogJ3VzZXInLFxyXG5cdHZhbGlkYXRvcnM6IFtcclxuXHRcdCggeyBzZXR0aW5ncyB9ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBlbnRyaWVzID0gT2JqZWN0LnZhbHVlcyggc2V0dGluZ3M/LmZpZWxkc19tYXAgPz8ge30gKTtcclxuXHJcblx0XHRcdHJldHVybiBlbnRyaWVzLnNvbWUoIHByb3BlcnR5ID0+ICdJRCcgPT09IHByb3BlcnR5IClcclxuXHRcdFx0ICAgICAgID8gZmFsc2VcclxuXHRcdFx0ICAgICAgIDogeyB0eXBlOiAnZW1wdHknLCBwcm9wZXJ0eTogJ2ZpZWxkX2lkJyB9O1xyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG4iLCJpbXBvcnQgVXNlclByb3BlcnR5U2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb3BlcnR5U2VsZWN0JztcclxuaW1wb3J0IHtcclxuXHR1c2VTYW5pdGl6ZUZpZWxkc01hcCxcclxuXHR1c2VGaWVsZHMsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1ibG9ja3MtdG8tYWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcblx0Y29udmVydExpc3RUb0ZpZWxkc01hcCxcclxuXHR1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcixcclxuXHRBY3Rpb25NZXNzYWdlcyxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZWxlY3RDb250cm9sLCBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQge1xyXG5cdEljb25UZXh0LFxyXG5cdExhYmVsLFxyXG5cdFJvd0NvbnRyb2wsXHJcblx0V2lkZUxpbmUsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBBY3Rpb25GaWVsZHNNYXAsXHJcblx0ICAgICAgV3JhcHBlclJlcXVpcmVkQ29udHJvbCxcclxuXHQgICAgICBEeW5hbWljUHJvcGVydHlTZWxlY3QsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5mdW5jdGlvbiBVcGRhdGVVc2VyUmVuZGVyKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAoXHJcblx0XHR1c2VGaWVsZHMoIHsgd2l0aElubmVyOiBmYWxzZSB9ICksXHJcblx0KTtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgc2V0dGluZ3MsXHJcblx0XHQgICAgICBvbkNoYW5nZVNldHRpbmcsXHJcblx0XHQgICAgICBzb3VyY2UsXHJcblx0XHQgICAgICBsYWJlbCxcclxuXHQgICAgICB9ID0gcHJvcHM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzEzMTVcclxuXHQgKi9cclxuXHR1c2VTYW5pdGl6ZUZpZWxkc01hcCgpO1xyXG5cclxuXHRjb25zdCB7IGhhc0Vycm9yIH0gPSB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcigge1xyXG5cdFx0aXNTdXBwb3J0ZWQ6IGVycm9yID0+ICdmaWVsZF9pZCcgPT09IGVycm9yPy5wcm9wZXJ0eSxcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuXHRcdFx0PEFjdGlvbkZpZWxkc01hcFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cclxuXHRcdFx0XHRmaWVsZHM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0XHRjdXN0b21IZWxwPXsgKCkgPT4gaGFzRXJyb3IgJiYgPEljb25UZXh0PlxyXG5cdFx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdFx0J1BsZWFzZSBzZWxlY3QgYSBmaWVsZCBmb3IgVXNlciBJRCcsXHJcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdDwvSWNvblRleHQ+IH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxXcmFwcGVyUmVxdWlyZWRDb250cm9sPlxyXG5cdFx0XHRcdFx0PER5bmFtaWNQcm9wZXJ0eVNlbGVjdFxyXG5cdFx0XHRcdFx0XHRkeW5hbWljPXsgWyAndXNlcl9tZXRhJyBdIH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFVzZXJQcm9wZXJ0eVNlbGVjdC8+XHJcblx0XHRcdFx0XHQ8L0R5bmFtaWNQcm9wZXJ0eVNlbGVjdD5cclxuXHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+XHJcblx0XHRcdDwvQWN0aW9uRmllbGRzTWFwPlxyXG5cdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHQ8Um93Q29udHJvbD5cclxuXHRcdFx0XHR7ICggeyBpZCB9ICkgPT4gPD5cclxuXHRcdFx0XHRcdDxMYWJlbCBodG1sRm9yPXsgaWQgfT5cclxuXHRcdFx0XHRcdFx0eyBfXyggJ1VzZXIgcm9sZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdDwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRpZD17IGlkIH1cclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy51c2VyX3JvbGUgfVxyXG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnVzZXJSb2xlcyB9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHQndXNlcl9yb2xlJyApIH1cclxuXHRcdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXHJcblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvPiB9XHJcblx0XHRcdDwvUm93Q29udHJvbD5cclxuXHRcdFx0PFdpZGVMaW5lLz5cclxuXHRcdFx0PEFjdGlvbk1lc3NhZ2VzIHsgLi4ucHJvcHMgfSAvPlxyXG5cdFx0PC9GbGV4PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVVzZXJSZW5kZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwcmltaXRpdmVzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImJsb2Nrc1RvQWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFjdGlvbiBmcm9tICcuL3VwZGF0ZS51c2VyJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJBY3Rpb24gfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5cclxucmVnaXN0ZXJBY3Rpb24oIGFjdGlvbiApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=