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
    multiple: true,
    id: id,
    value: settings.user_role,
    options: source.userRoles,
    onChange: newValue => onChangeSetting(newValue, 'user_role'),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Hold Ctrl (Windows) or Command (Mac) to select multiple roles.', 'jet-form-builder')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7QUM3RkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2NvbW1lbnQtYXV0aG9yLWF2YXRhci5qcyIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvLi9jb21wb25lbnRzL1VzZXJQcm9wZXJ0eVNlbGVjdC5qcyIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvLi91cGRhdGUudXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvLi91cGRhdGUudXNlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImJsb2Nrc1RvQWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFBhdGgsIFNWRyB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBjb21tZW50QXV0aG9yQXZhdGFyID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgZDogXCJNNy4yNSAxNi40MzdhNi41IDYuNSAwIDEgMSA5LjUgMFYxNkEyLjc1IDIuNzUgMCAwIDAgMTQgMTMuMjVoLTRBMi43NSAyLjc1IDAgMCAwIDcuMjUgMTZ2LjQzN1ptMS41IDEuMTkzYTYuNDcgNi40NyAwIDAgMCAzLjI1Ljg3IDYuNDcgNi40NyAwIDAgMCAzLjI1LS44N1YxNmMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVoLTRjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djEuNjNaTTQgMTJhOCA4IDAgMSAxIDE2IDAgOCA4IDAgMCAxLTE2IDBabTEwLTJhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwWlwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRBdXRob3JBdmF0YXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tZW50LWF1dGhvci1hdmF0YXIuanMubWFwIiwiY29uc3Qge1xyXG5cdCAgICAgIFRleHRDb250cm9sLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZUNvbnRleHQsXHJcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7XHJcblx0ICAgICAgQ3VycmVudEFjdGlvbkVkaXRDb250ZXh0LFxyXG5cdCAgICAgIEFjdGlvbkZpZWxkc01hcENvbnRleHQsXHJcblx0ICAgICAgQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFVzZXJQcm9wZXJ0eVNlbGVjdCgpIHtcclxuXHQvLyBjb250ZXh0IHdpdGggYWN0aW9uIHByb3BzXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgRmllbGRTZWxlY3QsXHJcblx0XHQgICAgICBwcm9wZXJ0eSxcclxuXHQgICAgICB9ID0gdXNlQ29udGV4dCggQ3VycmVudFByb3BlcnR5TWFwQ29udGV4dCApO1xyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHNldE1hcEZpZWxkLFxyXG5cdFx0ICAgICAgZ2V0TWFwRmllbGQsXHJcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCApO1xyXG5cdC8vIGNvbnRleHQgd2l0aCBjdXJyZW50IGZpZWxkIGluIGZpZWxkcyBtYXBcclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBuYW1lLFxyXG5cdFx0ICAgICAgaW5kZXgsXHJcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEFjdGlvbkZpZWxkc01hcENvbnRleHQgKTtcclxuXHJcblx0c3dpdGNoICggcHJvcGVydHkgKSB7XHJcblx0XHRjYXNlICd1c2VyX21ldGEnOlxyXG5cdFx0XHRyZXR1cm4gPGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGpldC1tYXJnaW4tYm90dG9tLXdyYXBwZXJcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyBGaWVsZFNlbGVjdCB9XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9eyBuYW1lICsgaW5kZXggKyAnX3RleHQnIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZSB9ICkgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBzZXRNYXBGaWVsZChcclxuXHRcdFx0XHRcdFx0eyBuYW1lRmllbGQ6IG5hbWUsIHZhbHVlIH0sXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxyXG5cdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj47XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gRmllbGRTZWxlY3Q7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvcGVydHlTZWxlY3Q7IiwiaW1wb3J0IFVwZGF0ZVVzZXJSZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgY29tbWVudEF1dGhvckF2YXRhciB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHR5cGU6ICd1cGRhdGVfdXNlcicsXHJcblx0bGFiZWw6IF9fKCAnVXBkYXRlIFVzZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRlZGl0OiBVcGRhdGVVc2VyUmVuZGVyLFxyXG5cdGljb246IGNvbW1lbnRBdXRob3JBdmF0YXIsXHJcblx0ZG9jSHJlZjogJ2h0dHBzOi8vamV0Zm9ybWJ1aWxkZXIuY29tL2ZlYXR1cmVzL3VwZGF0ZS11c2VyLycsXHJcblx0Y2F0ZWdvcnk6ICd1c2VyJyxcclxuXHR2YWxpZGF0b3JzOiBbXHJcblx0XHQoIHsgc2V0dGluZ3MgfSApID0+IHtcclxuXHRcdFx0Y29uc3QgZW50cmllcyA9IE9iamVjdC52YWx1ZXMoIHNldHRpbmdzPy5maWVsZHNfbWFwID8/IHt9ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZW50cmllcy5zb21lKCBwcm9wZXJ0eSA9PiAnSUQnID09PSBwcm9wZXJ0eSApXHJcblx0XHRcdCAgICAgICA/IGZhbHNlXHJcblx0XHRcdCAgICAgICA6IHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICdmaWVsZF9pZCcgfTtcclxuXHRcdH0sXHJcblx0XSxcclxufTtcclxuIiwiaW1wb3J0IFVzZXJQcm9wZXJ0eVNlbGVjdCBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJQcm9wZXJ0eVNlbGVjdCc7XHJcbmltcG9ydCB7XHJcblx0dXNlU2FuaXRpemVGaWVsZHNNYXAsXHJcblx0dXNlRmllbGRzLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG5cdGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAsXHJcblx0dXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIsXHJcblx0QWN0aW9uTWVzc2FnZXMsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuaW1wb3J0IHsgU2VsZWN0Q29udHJvbCwgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHtcclxuXHRJY29uVGV4dCxcclxuXHRMYWJlbCxcclxuXHRSb3dDb250cm9sLFxyXG5cdFdpZGVMaW5lLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQWN0aW9uRmllbGRzTWFwLFxyXG5cdCAgICAgIFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcblx0ICAgICAgRHluYW1pY1Byb3BlcnR5U2VsZWN0LFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cclxuZnVuY3Rpb24gVXBkYXRlVXNlclJlbmRlciggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBjb252ZXJ0TGlzdFRvRmllbGRzTWFwKFxyXG5cdFx0dXNlRmllbGRzKCB7IHdpdGhJbm5lcjogZmFsc2UgfSApLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHNldHRpbmdzLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nLFxyXG5cdFx0ICAgICAgc291cmNlLFxyXG5cdFx0ICAgICAgbGFiZWwsXHJcblx0ICAgICAgfSA9IHByb3BzO1xyXG5cclxuXHQvKipcclxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMzE1XHJcblx0ICovXHJcblx0dXNlU2FuaXRpemVGaWVsZHNNYXAoKTtcclxuXHJcblx0Y29uc3QgeyBoYXNFcnJvciB9ID0gdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIoIHtcclxuXHRcdGlzU3VwcG9ydGVkOiBlcnJvciA9PiAnZmllbGRfaWQnID09PSBlcnJvcj8ucHJvcGVydHksXHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcblx0XHRcdDxBY3Rpb25GaWVsZHNNYXBcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XHJcblx0XHRcdFx0ZmllbGRzPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdFx0Y3VzdG9tSGVscD17ICgpID0+IGhhc0Vycm9yICYmIDxJY29uVGV4dD5cclxuXHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdCdQbGVhc2Ugc2VsZWN0IGEgZmllbGQgZm9yIFVzZXIgSUQnLFxyXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L0ljb25UZXh0PiB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8V3JhcHBlclJlcXVpcmVkQ29udHJvbD5cclxuXHRcdFx0XHRcdDxEeW5hbWljUHJvcGVydHlTZWxlY3RcclxuXHRcdFx0XHRcdFx0ZHluYW1pYz17IFsgJ3VzZXJfbWV0YScgXSB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxVc2VyUHJvcGVydHlTZWxlY3QvPlxyXG5cdFx0XHRcdFx0PC9EeW5hbWljUHJvcGVydHlTZWxlY3Q+XHJcblx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPlxyXG5cdFx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cclxuXHRcdFx0PFdpZGVMaW5lLz5cclxuXHRcdFx0PFJvd0NvbnRyb2w+XHJcblx0XHRcdFx0eyAoIHsgaWQgfSApID0+IDw+XHJcblx0XHRcdFx0XHQ8TGFiZWwgaHRtbEZvcj17IGlkIH0+XHJcblx0XHRcdFx0XHRcdHsgX18oICdVc2VyIHJvbGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHQ8L0xhYmVsPlxyXG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRcdFx0bXVsdGlwbGVcclxuXHRcdFx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlcl9yb2xlIH1cclxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS51c2VyUm9sZXMgfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0J3VzZXJfcm9sZScgKSB9XHJcblx0XHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxyXG5cdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxyXG5cdFx0XHRcdFx0XHRoZWxwPXsgX18oICdIb2xkIEN0cmwgKFdpbmRvd3MpIG9yIENvbW1hbmQgKE1hYykgdG8gc2VsZWN0IG11bHRpcGxlIHJvbGVzLicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC8+IH1cclxuXHRcdFx0PC9Sb3dDb250cm9sPlxyXG5cdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHQ8QWN0aW9uTWVzc2FnZXMgeyAuLi5wcm9wcyB9IC8+XHJcblx0XHQ8L0ZsZXg+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlVXNlclJlbmRlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJhY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYmxvY2tzVG9BY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWN0aW9uIGZyb20gJy4vdXBkYXRlLnVzZXInO1xyXG5pbXBvcnQgeyByZWdpc3RlckFjdGlvbiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcblxyXG5yZWdpc3RlckFjdGlvbiggYWN0aW9uICk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==