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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFHQTtBQUVBOzs7Ozs7Ozs7O0FDNUZBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi11cGRhdGUtdXNlci8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9jb21tZW50LWF1dGhvci1hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyLy4vY29tcG9uZW50cy9Vc2VyUHJvcGVydHlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyLy4vdXBkYXRlLnVzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyLy4vdXBkYXRlLnVzZXIvcmVuZGVyLmpzIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJhY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJibG9ja3NUb0FjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLXVwZGF0ZS11c2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItdXBkYXRlLXVzZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi11cGRhdGUtdXNlci8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBQYXRoLCBTVkcgfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgY29tbWVudEF1dGhvckF2YXRhciA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGQ6IFwiTTcuMjUgMTYuNDM3YTYuNSA2LjUgMCAxIDEgOS41IDBWMTZBMi43NSAyLjc1IDAgMCAwIDE0IDEzLjI1aC00QTIuNzUgMi43NSAwIDAgMCA3LjI1IDE2di40MzdabTEuNSAxLjE5M2E2LjQ3IDYuNDcgMCAwIDAgMy4yNS44NyA2LjQ3IDYuNDcgMCAwIDAgMy4yNS0uODdWMTZjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1aC00Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYxLjYzWk00IDEyYTggOCAwIDEgMSAxNiAwIDggOCAwIDAgMS0xNiAwWm0xMC0yYTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMFpcIixcbiAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBjb21tZW50QXV0aG9yQXZhdGFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWVudC1hdXRob3ItYXZhdGFyLmpzLm1hcCIsImNvbnN0IHtcclxuXHQgICAgICBUZXh0Q29udHJvbCxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VDb250ZXh0LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuY29uc3Qge1xyXG5cdCAgICAgIEN1cnJlbnRBY3Rpb25FZGl0Q29udGV4dCxcclxuXHQgICAgICBBY3Rpb25GaWVsZHNNYXBDb250ZXh0LFxyXG5cdCAgICAgIEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5mdW5jdGlvbiBVc2VyUHJvcGVydHlTZWxlY3QoKSB7XHJcblx0Ly8gY29udGV4dCB3aXRoIGFjdGlvbiBwcm9wc1xyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIEZpZWxkU2VsZWN0LFxyXG5cdFx0ICAgICAgcHJvcGVydHksXHJcblx0ICAgICAgfSA9IHVzZUNvbnRleHQoIEN1cnJlbnRQcm9wZXJ0eU1hcENvbnRleHQgKTtcclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBzZXRNYXBGaWVsZCxcclxuXHRcdCAgICAgIGdldE1hcEZpZWxkLFxyXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBDdXJyZW50QWN0aW9uRWRpdENvbnRleHQgKTtcclxuXHQvLyBjb250ZXh0IHdpdGggY3VycmVudCBmaWVsZCBpbiBmaWVsZHMgbWFwXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgbmFtZSxcclxuXHRcdCAgICAgIGluZGV4LFxyXG5cdCAgICAgIH0gPSB1c2VDb250ZXh0KCBBY3Rpb25GaWVsZHNNYXBDb250ZXh0ICk7XHJcblxyXG5cdHN3aXRjaCAoIHByb3BlcnR5ICkge1xyXG5cdFx0Y2FzZSAndXNlcl9tZXRhJzpcclxuXHRcdFx0cmV0dXJuIDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgRmllbGRTZWxlY3QgfVxyXG5cdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0a2V5PXsgbmFtZSArIGluZGV4ICsgJ190ZXh0JyB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGdldE1hcEZpZWxkKCB7IG5hbWUgfSApIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gc2V0TWFwRmllbGQoXHJcblx0XHRcdFx0XHRcdHsgbmFtZUZpZWxkOiBuYW1lLCB2YWx1ZSB9LFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcclxuXHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIEZpZWxkU2VsZWN0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb3BlcnR5U2VsZWN0OyIsImltcG9ydCBVcGRhdGVVc2VyUmVuZGVyIGZyb20gJy4vcmVuZGVyJztcclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IGNvbW1lbnRBdXRob3JBdmF0YXIgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0eXBlOiAndXBkYXRlX3VzZXInLFxyXG5cdGxhYmVsOiBfXyggJ1VwZGF0ZSBVc2VyJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0ZWRpdDogVXBkYXRlVXNlclJlbmRlcixcclxuXHRpY29uOiBjb21tZW50QXV0aG9yQXZhdGFyLFxyXG5cdGRvY0hyZWY6ICdodHRwczovL2pldGZvcm1idWlsZGVyLmNvbS9mZWF0dXJlcy91cGRhdGUtdXNlci8nLFxyXG5cdGNhdGVnb3J5OiAndXNlcicsXHJcblx0dmFsaWRhdG9yczogW1xyXG5cdFx0KCB7IHNldHRpbmdzIH0gKSA9PiB7XHJcblx0XHRcdGNvbnN0IGVudHJpZXMgPSBPYmplY3QudmFsdWVzKCBzZXR0aW5ncz8uZmllbGRzX21hcCA/PyB7fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGVudHJpZXMuc29tZSggcHJvcGVydHkgPT4gJ0lEJyA9PT0gcHJvcGVydHkgKVxyXG5cdFx0XHQgICAgICAgPyBmYWxzZVxyXG5cdFx0XHQgICAgICAgOiB7IHR5cGU6ICdlbXB0eScsIHByb3BlcnR5OiAnZmllbGRfaWQnIH07XHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbiIsImltcG9ydCBVc2VyUHJvcGVydHlTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUHJvcGVydHlTZWxlY3QnO1xyXG5pbXBvcnQge1xyXG5cdHVzZVNhbml0aXplRmllbGRzTWFwLFxyXG5cdHVzZUZpZWxkcyxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuXHRjb252ZXJ0TGlzdFRvRmllbGRzTWFwLFxyXG5cdHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyLFxyXG5cdEFjdGlvbk1lc3NhZ2VzLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNlbGVjdENvbnRyb2wsIEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7XHJcblx0SWNvblRleHQsXHJcblx0TGFiZWwsXHJcblx0Um93Q29udHJvbCxcclxuXHRXaWRlTGluZSxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEFjdGlvbkZpZWxkc01hcCxcclxuXHQgICAgICBXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxyXG5cdCAgICAgIER5bmFtaWNQcm9wZXJ0eVNlbGVjdCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIFVwZGF0ZVVzZXJSZW5kZXIoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gY29udmVydExpc3RUb0ZpZWxkc01hcChcclxuXHRcdHVzZUZpZWxkcyggeyB3aXRoSW5uZXI6IGZhbHNlIH0gKSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBzZXR0aW5ncyxcclxuXHRcdCAgICAgIG9uQ2hhbmdlU2V0dGluZyxcclxuXHRcdCAgICAgIHNvdXJjZSxcclxuXHRcdCAgICAgIGxhYmVsLFxyXG5cdCAgICAgIH0gPSBwcm9wcztcclxuXHJcblx0LyoqXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTMxNVxyXG5cdCAqL1xyXG5cdHVzZVNhbml0aXplRmllbGRzTWFwKCk7XHJcblxyXG5cdGNvbnN0IHsgaGFzRXJyb3IgfSA9IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyKCB7XHJcblx0XHRpc1N1cHBvcnRlZDogZXJyb3IgPT4gJ2ZpZWxkX2lkJyA9PT0gZXJyb3I/LnByb3BlcnR5LFxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG5cdFx0XHQ8QWN0aW9uRmllbGRzTWFwXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxyXG5cdFx0XHRcdGZpZWxkcz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdGN1c3RvbUhlbHA9eyAoKSA9PiBoYXNFcnJvciAmJiA8SWNvblRleHQ+XHJcblx0XHRcdFx0XHR7IF9fKFxyXG5cdFx0XHRcdFx0XHQnUGxlYXNlIHNlbGVjdCBhIGZpZWxkIGZvciBVc2VyIElEJyxcclxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0PC9JY29uVGV4dD4gfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFdyYXBwZXJSZXF1aXJlZENvbnRyb2w+XHJcblx0XHRcdFx0XHQ8RHluYW1pY1Byb3BlcnR5U2VsZWN0XHJcblx0XHRcdFx0XHRcdGR5bmFtaWM9eyBbICd1c2VyX21ldGEnIF0gfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VXNlclByb3BlcnR5U2VsZWN0Lz5cclxuXHRcdFx0XHRcdDwvRHluYW1pY1Byb3BlcnR5U2VsZWN0PlxyXG5cdFx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD5cclxuXHRcdFx0PC9BY3Rpb25GaWVsZHNNYXA+XHJcblx0XHRcdDxXaWRlTGluZS8+XHJcblx0XHRcdDxSb3dDb250cm9sPlxyXG5cdFx0XHRcdHsgKCB7IGlkIH0gKSA9PiA8PlxyXG5cdFx0XHRcdFx0PExhYmVsIGh0bWxGb3I9eyBpZCB9PlxyXG5cdFx0XHRcdFx0XHR7IF9fKCAnVXNlciByb2xlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0PC9MYWJlbD5cclxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRcdG11bHRpcGxlXHJcblx0XHRcdFx0XHRcdGlkPXsgaWQgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfcm9sZSB9XHJcblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBzb3VyY2UudXNlclJvbGVzIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdCd1c2VyX3JvbGUnICkgfVxyXG5cdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcclxuXHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC8+IH1cclxuXHRcdFx0PC9Sb3dDb250cm9sPlxyXG5cdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHQ8QWN0aW9uTWVzc2FnZXMgeyAuLi5wcm9wcyB9IC8+XHJcblx0XHQ8L0ZsZXg+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlVXNlclJlbmRlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJhY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYmxvY2tzVG9BY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWN0aW9uIGZyb20gJy4vdXBkYXRlLnVzZXInO1xyXG5pbXBvcnQgeyByZWdpc3RlckFjdGlvbiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcblxyXG5yZWdpc3RlckFjdGlvbiggYWN0aW9uICk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==