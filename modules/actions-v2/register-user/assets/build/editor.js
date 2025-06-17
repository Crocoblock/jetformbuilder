/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

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

/***/ "./UserIDComputedField.js":
/*!********************************!*\
  !*** ./UserIDComputedField.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function UserIDComputedField() {
  jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0__.BaseComputedField.call(this);
  this.isSupported = function (action) {
    return 'register_user' === action.type && action.selfSettings.add_user_id;
  };
  this.getName = function () {
    return 'user_id';
  };
  this.getHelp = function () {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A computed field from the <b>Register User</b> action.', 'jet-form-builder');
  };
}
UserIDComputedField.prototype = Object.create(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_0__.BaseComputedField.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserIDComputedField);

/***/ }),

/***/ "./registerUserAction/RememberMeRow.jsx":
/*!**********************************************!*\
  !*** ./registerUserAction/RememberMeRow.jsx ***!
  \**********************************************/
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
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__);





function RememberMeRow({
  settings,
  onChangeSettingObj
}) {
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__.useFields)({
    withInner: false,
    placeholder: '--'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('"Remember me" field:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    id: id,
    value: settings.remember_me_field,
    options: formFields,
    onChange: remember_me_field => onChangeSettingObj({
      remember_me_field
    }),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RememberMeRow);

/***/ }),

/***/ "./registerUserAction/Render.jsx":
/*!***************************************!*\
  !*** ./registerUserAction/Render.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RoleCanRegisterRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoleCanRegisterRow */ "./registerUserAction/RoleCanRegisterRow.jsx");
/* harmony import */ var _UserFieldsRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserFieldsRow */ "./registerUserAction/UserFieldsRow.jsx");
/* harmony import */ var _UserRoleRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserRoleRow */ "./registerUserAction/UserRoleRow.jsx");
/* harmony import */ var _UserMetaRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserMetaRow */ "./registerUserAction/UserMetaRow.jsx");
/* harmony import */ var _RememberMeRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RememberMeRow */ "./registerUserAction/RememberMeRow.jsx");











function RegisterUserRender(props) {
  const {
    settings,
    onChangeSettingObj,
    getMapField,
    setMapField
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.ClearBaseControlStyle,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Allow creating new users by existing users', 'jet-form-builder'),
    checked: settings.allow_register,
    onChange: allow_register => onChangeSettingObj({
      allow_register
    }),
    __nextHasNoMarginBottom: true,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('If this option is enabled, logged-in users with the selected role will be able to add new users using this form. If disabled, only non-logged-in users will be able to register themselves.', 'jet-form-builder')
  }), settings.allow_register && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RoleCanRegisterRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_UserFieldsRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    getMapField: getMapField,
    setMapField: setMapField
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_UserRoleRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.ClearBaseControlStyle,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Log In User after Register:', 'jet-form-builder'),
    checked: settings.log_in,
    onChange: log_in => onChangeSettingObj({
      log_in
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('To use the "Remember me" option, first add a checkbox, radio button, or switcher field to your form with a value of 1, and label it "Remember me" or similar. Then, select it here.', 'jet-form-builder'),
    __nextHasNoMarginBottom: true
  }), settings.log_in && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RememberMeRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    settings: settings,
    onChangeSettingObj: onChangeSettingObj
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.ClearBaseControlStyle,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add User ID to form data:', 'jet-form-builder'),
    checked: settings.add_user_id,
    onChange: val => onChangeSettingObj({
      add_user_id: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Registered user ID will be added to form data. Current user ID will be added to form data only if "Allow creating new users by existing users" option was disabled.', 'jet-form-builder'),
    __nextHasNoMarginBottom: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_UserMetaRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    getMapField: getMapField,
    setMapField: setMapField
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__.ActionMessages, {
    ...props
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterUserRender);

/***/ }),

/***/ "./registerUserAction/RoleCanRegisterRow.jsx":
/*!***************************************************!*\
  !*** ./registerUserAction/RoleCanRegisterRow.jsx ***!
  \***************************************************/
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
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @linaria/core */ "../../../../../node_modules/@linaria/core/dist/index.mjs");






function RoleCanRegisterRow({
  settings,
  onChangeSettingObj
}) {
  const {
    hasError,
    setShowError
  } = (0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.useActionValidatorProvider)({
    isSupported: error => 'role_can_register' === error?.property
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RequiredLabel, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Who can add new user?', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: (0,_linaria_core__WEBPACK_IMPORTED_MODULE_5__.cx)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControlEndStyle, hasError && jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.ControlWithErrorStyle),
    direction: "column"
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    id: id,
    value: settings.role_can_register,
    options: JetFBRegisterAction.allUserRoles,
    onChange: role_can_register => onChangeSettingObj({
      role_can_register
    }),
    onBlur: () => setShowError(true),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleCanRegisterRow);

/***/ }),

/***/ "./registerUserAction/UserFieldsRow.jsx":
/*!**********************************************!*\
  !*** ./registerUserAction/UserFieldsRow.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _userFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userFields */ "./registerUserAction/userFields.js");

/* eslint-disable import/no-extraneous-dependencies */






function UserFieldsRow({
  getMapField,
  setMapField
}) {
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__.useFields)({
    withInner: false,
    placeholder: '--'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Wrap
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Label, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Label
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Fields map`, 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Help, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.WhiteSpaceNormal
  }, "Map your form fields to standard user\u2019s fields. This links the form input to user profile data, so values are saved in the user\u2019s account."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListContainer, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListHead, {
    columns: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta Fields`, 'jet-form-builder'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Form Fields`, 'jet-form-builder')]
  }), _userFields__WEBPACK_IMPORTED_MODULE_6__["default"].map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListRow, {
    key: field.value,
    tag: field.value,
    label: field.label,
    help: field.help,
    isRequired: field.required
  }, ({
    setShowError,
    htmlId
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    id: htmlId,
    onBlur: () => setShowError(true),
    options: formFields,
    formFields: formFields,
    value: getMapField({
      name: field.value
    }),
    onChange: value => setMapField({
      nameField: field.value,
      value
    }),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserFieldsRow);

/***/ }),

/***/ "./registerUserAction/UserMetaRow.jsx":
/*!********************************************!*\
  !*** ./registerUserAction/UserMetaRow.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jet-form-builder-components */ "jet-form-builder-components");
/* harmony import */ var jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__);






function UserFieldsRow({
  getMapField,
  setMapField
}) {
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_4__.useFields)({
    withInner: false
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    createId: false,
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Wrap
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Label, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Label
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta`, 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Help, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.WhiteSpaceNormal
  }, "Map form fields to custom user meta fields (e.g., \"Phone\") not included in WordPress by default."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListContainer, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListHead, {
    columns: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Form Fields`, 'jet-form-builder'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta Fields`, 'jet-form-builder')]
  }), formFields.map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_5__.TableListRow, {
    key: field.value,
    tag: field.value,
    label: field.label
  }, ({
    htmlId
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    placeholder: "User meta field/key",
    id: htmlId,
    value: getMapField({
      source: 'meta_fields_map',
      name: field.value
    }),
    onChange: newVal => setMapField({
      nameField: field.value,
      value: newVal,
      source: 'meta_fields_map'
    }),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserFieldsRow);

/***/ }),

/***/ "./registerUserAction/UserRoleRow.jsx":
/*!********************************************!*\
  !*** ./registerUserAction/UserRoleRow.jsx ***!
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




function UserRoleRow({
  settings,
  onChangeSettingObj
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('User Role', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    multiple: true,
    id: id,
    value: settings.user_role,
    options: JetFBRegisterAction.userRoles,
    onChange: user_role => onChangeSettingObj({
      user_role
    }),
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hold Ctrl (Windows) or Command (Mac) to select multiple roles.', 'jet-form-builder')
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRoleRow);

/***/ }),

/***/ "./registerUserAction/index.js":
/*!*************************************!*\
  !*** ./registerUserAction/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./registerUserAction/Render.jsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "../../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js");
/* harmony import */ var _userFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userFields */ "./registerUserAction/userFields.js");
/* eslint-disable import/no-extraneous-dependencies */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  type: 'register_user',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Register User', 'jet-form-builder'),
  edit: _Render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  docHref: 'https://jetformbuilder.com/features/register-user/',
  category: 'user',
  validators: [({
    settings
  }) => {
    if (!settings.allow_register) {
      return false;
    }
    return settings?.role_can_register ? false : {
      type: 'empty',
      property: 'role_can_register'
    };
  }, ({
    settings
  }) => {
    const errors = [];
    for (const field of _userFields__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      if (!field.required) {
        continue;
      }
      const fieldValue = settings?.fields_map?.[field.value];
      if (!fieldValue) {
        errors.push({
          type: 'empty',
          property: 'field_' + field.value
        });
      }
    }
    return errors;
  }]
});

/***/ }),

/***/ "./registerUserAction/userFields.js":
/*!******************************************!*\
  !*** ./registerUserAction/userFields.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const userFields = [{
  value: 'login',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('User Login', 'jet-form-builder'),
  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose the form field that will be used to get the user login. The value of this field will be stored as the user login in the database.', 'jet-form-builder'),
  required: true
}, {
  value: 'email',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'jet-form-builder'),
  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose the form field that will be used to get the user email. The value of this field will be stored as the user email in the database. You can use the same field in the User Login setting if you want the login and email to be the same.', 'jet-form-builder'),
  required: true
}, {
  value: 'password',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Password', 'jet-form-builder'),
  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose the form field that will be used to get the user password. The value of this field will be stored in the database in a hashed format.', 'jet-form-builder'),
  required: true
}, {
  value: 'confirm_password',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Confirm Password', 'jet-form-builder'),
  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose the form field that will be used to confirm the user password. This field is required to ensure the user has entered the correct password.', 'jet-form-builder'),
  required: true
}, {
  value: 'first_name',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First Name', 'jet-form-builder'),
  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('(Optional) Choose the form field that will be used to get the user\'s first name. The value of this field will be stored in the database as the First Name in the user profile.', 'jet-form-builder')
}, {
  value: 'last_name',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Last Name', 'jet-form-builder'),
  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('(Optional) Choose the form field that will be used to get the user\'s last name. The value of this field will be stored in the WordPress database as the last name in the user profile.', 'jet-form-builder')
}, {
  value: 'user_url',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('User URL', 'jet-form-builder'),
  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('(Optional) Choose the form field that will be used to get the user’s website. The value of this field will be stored in the WordPress database as the website in the Contacts section of the user profile.', 'jet-form-builder')
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userFields);

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
/* harmony import */ var _registerUserAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerUserAction */ "./registerUserAction/index.js");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserIDComputedField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserIDComputedField */ "./UserIDComputedField.js");



(0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.registerAction)(_registerUserAction__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_1__.addComputedField)(_UserIDComputedField__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBTUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FDNUNBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BsaW5hcmlhL2NvcmUvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvY29tbWVudC1hdXRob3ItYXZhdGFyLmpzIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vVXNlcklEQ29tcHV0ZWRGaWVsZC5qcyIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9SZW1lbWJlck1lUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9SZW5kZXIuanN4Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL1JvbGVDYW5SZWdpc3RlclJvdy5qc3giLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9yZWdpc3RlclVzZXJBY3Rpb24vVXNlckZpZWxkc1Jvdy5qc3giLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9yZWdpc3RlclVzZXJBY3Rpb24vVXNlck1ldGFSb3cuanN4Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL1VzZXJSb2xlUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi91c2VyRmllbGRzLmpzIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImFjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYmxvY2tzVG9BY3Rpb25zXCJdIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJqZmJcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2Nzcy50c1xudmFyIGlkeCA9IDA7XG52YXIgY3NzID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgcmV0dXJuIGBtb2NrZWQtY3NzLSR7aWR4Kyt9YDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1VzaW5nIHRoZSBcImNzc1wiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuJ1xuICApO1xufTtcbnZhciBjc3NfZGVmYXVsdCA9IGNzcztcblxuLy8gc3JjL2N4LnRzXG52YXIgY3ggPSBmdW5jdGlvbiBjeDIoKSB7XG4gIGNvbnN0IHByZXNlbnRDbGFzc05hbWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGF0b21pY0NsYXNzZXMgPSB7fTtcbiAgY29uc3Qgbm9uQXRvbWljQ2xhc3NlcyA9IFtdO1xuICBwcmVzZW50Q2xhc3NOYW1lcy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICBjb25zdCBpbmRpdmlkdWFsQ2xhc3NOYW1lcyA9IGFyZyA/IGFyZy5zcGxpdChcIiBcIikgOiBbXTtcbiAgICBpbmRpdmlkdWFsQ2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChcImF0bV9cIikpIHtcbiAgICAgICAgY29uc3QgWywga2V5SGFzaF0gPSBjbGFzc05hbWUuc3BsaXQoXCJfXCIpO1xuICAgICAgICBhdG9taWNDbGFzc2VzW2tleUhhc2hdID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uQXRvbWljQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChjb25zdCBrZXlIYXNoIGluIGF0b21pY0NsYXNzZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0b21pY0NsYXNzZXMsIGtleUhhc2gpKSB7XG4gICAgICByZXN1bHQucHVzaChhdG9taWNDbGFzc2VzW2tleUhhc2hdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goLi4ubm9uQXRvbWljQ2xhc3Nlcyk7XG4gIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59O1xudmFyIGN4X2RlZmF1bHQgPSBjeDtcbmV4cG9ydCB7XG4gIGNzc19kZWZhdWx0IGFzIGNzcyxcbiAgY3hfZGVmYXVsdCBhcyBjeFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgUGF0aCwgU1ZHIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGNvbW1lbnRBdXRob3JBdmF0YXIgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBkOiBcIk03LjI1IDE2LjQzN2E2LjUgNi41IDAgMSAxIDkuNSAwVjE2QTIuNzUgMi43NSAwIDAgMCAxNCAxMy4yNWgtNEEyLjc1IDIuNzUgMCAwIDAgNy4yNSAxNnYuNDM3Wm0xLjUgMS4xOTNhNi40NyA2LjQ3IDAgMCAwIDMuMjUuODcgNi40NyA2LjQ3IDAgMCAwIDMuMjUtLjg3VjE2YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNWgtNGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2MS42M1pNNCAxMmE4IDggMCAxIDEgMTYgMCA4IDggMCAwIDEtMTYgMFptMTAtMmEyIDIgMCAxIDEtNCAwIDIgMiAwIDAgMSA0IDBaXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgY29tbWVudEF1dGhvckF2YXRhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1lbnQtYXV0aG9yLWF2YXRhci5qcy5tYXAiLCJpbXBvcnQgeyBCYXNlQ29tcHV0ZWRGaWVsZCB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmZ1bmN0aW9uIFVzZXJJRENvbXB1dGVkRmllbGQoKSB7XHJcblx0QmFzZUNvbXB1dGVkRmllbGQuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBhY3Rpb24gKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQncmVnaXN0ZXJfdXNlcicgPT09IGFjdGlvbi50eXBlICYmXHJcblx0XHRcdGFjdGlvbi5zZWxmU2V0dGluZ3MuYWRkX3VzZXJfaWRcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICd1c2VyX2lkJztcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldEhlbHAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gX18oXHJcblx0XHRcdCdBIGNvbXB1dGVkIGZpZWxkIGZyb20gdGhlIDxiPlJlZ2lzdGVyIFVzZXI8L2I+IGFjdGlvbi4nLFxyXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcblVzZXJJRENvbXB1dGVkRmllbGQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUNvbXB1dGVkRmllbGQucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySURDb21wdXRlZEZpZWxkOyIsImltcG9ydCB7XHJcblx0TGFiZWwsXHJcblx0Um93Q29udHJvbCxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IFNlbGVjdENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIFJlbWVtYmVyTWVSb3coIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiB9ICkge1xyXG5cdGNvbnN0IGZvcm1GaWVsZHMgPSB1c2VGaWVsZHMoIHtcclxuXHRcdHdpdGhJbm5lcjogZmFsc2UsXHJcblx0XHRwbGFjZWhvbGRlcjogJy0tJyxcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiA8Um93Q29udHJvbD5cclxuXHRcdHsgKCB7IGlkIH0gKSA9PiA8PlxyXG5cdFx0XHQ8TGFiZWwgaHRtbEZvcj17IGlkIH0+XHJcblx0XHRcdFx0eyBfXyggJ1wiUmVtZW1iZXIgbWVcIiBmaWVsZDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdDwvTGFiZWw+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZW1lbWJlcl9tZV9maWVsZCB9XHJcblx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcmVtZW1iZXJfbWVfZmllbGQgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyByZW1lbWJlcl9tZV9maWVsZCB9ICkgfVxyXG5cdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxyXG5cdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHRcdC8+XHJcblx0XHQ8Lz4gfVxyXG5cdDwvUm93Q29udHJvbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbWVtYmVyTWVSb3c7IiwiaW1wb3J0IHtcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdEZsZXgsXHJcblx0RmxleEl0ZW0sXHJcblx0Q2FyZCxcclxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IEFjdGlvbk1lc3NhZ2VzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuaW1wb3J0IHtDbGVhckJhc2VDb250cm9sU3R5bGUsIExhYmVsfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBXaWRlTGluZSB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XHJcbmltcG9ydCBSb2xlQ2FuUmVnaXN0ZXJSb3cgZnJvbSAnLi9Sb2xlQ2FuUmVnaXN0ZXJSb3cnO1xyXG5pbXBvcnQgVXNlckZpZWxkc1JvdyBmcm9tICcuL1VzZXJGaWVsZHNSb3cnO1xyXG5pbXBvcnQgVXNlclJvbGVSb3cgZnJvbSAnLi9Vc2VyUm9sZVJvdyc7XHJcbmltcG9ydCBVc2VyTWV0YVJvdyBmcm9tICcuL1VzZXJNZXRhUm93JztcclxuaW1wb3J0IFJlbWVtYmVyTWVSb3cgZnJvbSAnLi9SZW1lbWJlck1lUm93JztcclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyVXNlclJlbmRlciggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIHNldHRpbmdzLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nT2JqLFxyXG5cdFx0ICAgICAgZ2V0TWFwRmllbGQsXHJcblx0XHQgICAgICBzZXRNYXBGaWVsZCxcclxuXHQgICAgICB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGNsYXNzTmFtZT17IENsZWFyQmFzZUNvbnRyb2xTdHlsZSB9XHJcblx0XHRcdGxhYmVsPXsgX18oXHJcblx0XHRcdFx0J0FsbG93IGNyZWF0aW5nIG5ldyB1c2VycyBieSBleGlzdGluZyB1c2VycycsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpIH1cclxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmFsbG93X3JlZ2lzdGVyIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBhbGxvd19yZWdpc3RlciA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0eyBhbGxvd19yZWdpc3RlciB9LFxyXG5cdFx0XHQpIH1cclxuXHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdFx0aGVscD17IF9fKFxyXG5cdFx0XHRcdCdJZiB0aGlzIG9wdGlvbiBpcyBlbmFibGVkLCBsb2dnZWQtaW4gdXNlcnMgd2l0aCB0aGUgc2VsZWN0ZWQgcm9sZSB3aWxsIGJlIGFibGUgdG8gYWRkIG5ldyB1c2VycyB1c2luZyB0aGlzIGZvcm0uIElmIGRpc2FibGVkLCBvbmx5IG5vbi1sb2dnZWQtaW4gdXNlcnMgd2lsbCBiZSBhYmxlIHRvIHJlZ2lzdGVyIHRoZW1zZWx2ZXMuJyxcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0XHRcdCkgfVxyXG5cdFx0Lz5cclxuXHRcdHsgc2V0dGluZ3MuYWxsb3dfcmVnaXN0ZXIgJiYgPD5cclxuXHRcdFx0PFdpZGVMaW5lLz5cclxuXHRcdFx0PFJvbGVDYW5SZWdpc3RlclJvd1xyXG5cdFx0XHRcdHNldHRpbmdzPXsgc2V0dGluZ3MgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaj17IG9uQ2hhbmdlU2V0dGluZ09iaiB9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz4gfVxyXG5cdFx0PFdpZGVMaW5lLz5cclxuXHRcdDxVc2VyRmllbGRzUm93XHJcblx0XHRcdGdldE1hcEZpZWxkPXsgZ2V0TWFwRmllbGQgfVxyXG5cdFx0XHRzZXRNYXBGaWVsZD17IHNldE1hcEZpZWxkIH1cclxuXHRcdC8+XHJcblx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0PFVzZXJSb2xlUm93XHJcblx0XHRcdHNldHRpbmdzPXsgc2V0dGluZ3MgfVxyXG5cdFx0XHRvbkNoYW5nZVNldHRpbmdPYmo9eyBvbkNoYW5nZVNldHRpbmdPYmogfVxyXG5cdFx0Lz5cclxuXHRcdDxXaWRlTGluZS8+XHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRjbGFzc05hbWU9eyBDbGVhckJhc2VDb250cm9sU3R5bGUgfVxyXG5cdFx0XHRsYWJlbD17IF9fKCAnTG9nIEluIFVzZXIgYWZ0ZXIgUmVnaXN0ZXI6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MubG9nX2luIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBsb2dfaW4gPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IGxvZ19pbiB9ICkgfVxyXG5cdFx0XHRoZWxwPXsgX18oXHJcblx0XHRcdFx0J1RvIHVzZSB0aGUgXCJSZW1lbWJlciBtZVwiIG9wdGlvbiwgZmlyc3QgYWRkIGEgY2hlY2tib3gsIHJhZGlvIGJ1dHRvbiwgb3Igc3dpdGNoZXIgZmllbGQgdG8geW91ciBmb3JtIHdpdGggYSB2YWx1ZSBvZiAxLCBhbmQgbGFiZWwgaXQgXCJSZW1lbWJlciBtZVwiIG9yIHNpbWlsYXIuIFRoZW4sIHNlbGVjdCBpdCBoZXJlLicsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpIH1cclxuXHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdC8+XHJcblx0XHR7IHNldHRpbmdzLmxvZ19pbiAmJiA8PlxyXG5cdFx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0XHQ8UmVtZW1iZXJNZVJvd1xyXG5cdFx0XHRcdHNldHRpbmdzPXsgc2V0dGluZ3MgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaj17IG9uQ2hhbmdlU2V0dGluZ09iaiB9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz4gfVxyXG5cdFx0PFdpZGVMaW5lLz5cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGNsYXNzTmFtZT17IENsZWFyQmFzZUNvbnRyb2xTdHlsZSB9XHJcblx0XHRcdGxhYmVsPXsgX18oICdBZGQgVXNlciBJRCB0byBmb3JtIGRhdGE6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MuYWRkX3VzZXJfaWQgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHZhbCA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHsgYWRkX3VzZXJfaWQ6IHZhbCB9ICkgfVxyXG5cdFx0XHRoZWxwPXsgX18oXHJcblx0XHRcdFx0J1JlZ2lzdGVyZWQgdXNlciBJRCB3aWxsIGJlIGFkZGVkIHRvIGZvcm0gZGF0YS4gQ3VycmVudCB1c2VyIElEIHdpbGwgYmUgYWRkZWQgdG8gZm9ybSBkYXRhIG9ubHkgaWYgXCJBbGxvdyBjcmVhdGluZyBuZXcgdXNlcnMgYnkgZXhpc3RpbmcgdXNlcnNcIiBvcHRpb24gd2FzIGRpc2FibGVkLicsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpIH1cclxuXHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdC8+XHJcblx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0PFVzZXJNZXRhUm93XHJcblx0XHRcdGdldE1hcEZpZWxkPXsgZ2V0TWFwRmllbGQgfVxyXG5cdFx0XHRzZXRNYXBGaWVsZD17IHNldE1hcEZpZWxkIH1cclxuXHRcdC8+XHJcblx0XHQ8V2lkZUxpbmUvPlxyXG5cdFx0PEFjdGlvbk1lc3NhZ2VzXHJcblx0XHRcdHsgLi4ucHJvcHMgfVxyXG5cdFx0Lz5cclxuXHQ8L0ZsZXg+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclVzZXJSZW5kZXI7XHJcbiIsImltcG9ydCB7XHJcblx0Q29udHJvbFdpdGhFcnJvclN0eWxlLCBJY29uVGV4dCxcclxuXHRSZXF1aXJlZExhYmVsLFxyXG5cdFJvd0NvbnRyb2wsXHJcblx0Um93Q29udHJvbEVuZFN0eWxlLFxyXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuaW1wb3J0IHsgU2VsZWN0Q29udHJvbCwgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcclxuaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcclxuXHJcbmZ1bmN0aW9uIFJvbGVDYW5SZWdpc3RlclJvdyggeyBzZXR0aW5ncywgb25DaGFuZ2VTZXR0aW5nT2JqIH0gKSB7XHJcblxyXG5cdGNvbnN0IHsgaGFzRXJyb3IsIHNldFNob3dFcnJvciB9ID0gdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIoIHtcclxuXHRcdGlzU3VwcG9ydGVkOiBlcnJvciA9PiAncm9sZV9jYW5fcmVnaXN0ZXInID09PSBlcnJvcj8ucHJvcGVydHksXHJcblx0fSApO1xyXG5cclxuXHRyZXR1cm4gPFJvd0NvbnRyb2w+XHJcblx0XHR7ICggeyBpZCB9ICkgPT4gPD5cclxuXHRcdFx0PFJlcXVpcmVkTGFiZWwgaHRtbEZvcj17IGlkIH0+XHJcblx0XHRcdFx0eyBfXyggJ1dobyBjYW4gYWRkIG5ldyB1c2VyPycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9SZXF1aXJlZExhYmVsPlxyXG5cdFx0XHQ8RmxleFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17IGN4KFxyXG5cdFx0XHRcdFx0Um93Q29udHJvbEVuZFN0eWxlLFxyXG5cdFx0XHRcdFx0aGFzRXJyb3IgJiYgQ29udHJvbFdpdGhFcnJvclN0eWxlLFxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHRcdGRpcmVjdGlvbj1cImNvbHVtblwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IGhhc0Vycm9yICYmIDxJY29uVGV4dD5cclxuXHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdCdQbGVhc2UgZmlsbCB0aGlzIHJlcXVpcmVkIGZpZWxkJyxcclxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0PC9JY29uVGV4dD4gfVxyXG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRpZD17IGlkIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3Mucm9sZV9jYW5fcmVnaXN0ZXIgfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17IEpldEZCUmVnaXN0ZXJBY3Rpb24uYWxsVXNlclJvbGVzIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgcm9sZV9jYW5fcmVnaXN0ZXIgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0XHR7IHJvbGVfY2FuX3JlZ2lzdGVyIH0sXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cclxuXHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxyXG5cdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHQ8Lz4gfVxyXG5cdDwvUm93Q29udHJvbD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvbGVDYW5SZWdpc3RlclJvdzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cclxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xyXG5pbXBvcnQge1xyXG5cdEhlbHAsXHJcblx0TGFiZWwsXHJcblx0VGFibGVMaXN0U3R5bGUsXHJcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcclxuaW1wb3J0IHtTZWxlY3RDb250cm9sfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcclxuaW1wb3J0IHsgVGFibGVMaXN0Q29udGFpbmVyLCBUYWJsZUxpc3RIZWFkLCBUYWJsZUxpc3RSb3cgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5pbXBvcnQgdXNlckZpZWxkcyBmcm9tICcuL3VzZXJGaWVsZHMnO1xyXG5cclxuZnVuY3Rpb24gVXNlckZpZWxkc1JvdyggeyBnZXRNYXBGaWVsZCwgc2V0TWFwRmllbGQgfSApIHtcclxuXHJcblx0Y29uc3QgZm9ybUZpZWxkcyA9IHVzZUZpZWxkcygge1xyXG5cdFx0d2l0aElubmVyOiBmYWxzZSxcclxuXHRcdHBsYWNlaG9sZGVyOiAnLS0nLFxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgVGFibGVMaXN0U3R5bGUuV3JhcCB9PlxyXG5cdFx0PExhYmVsIGNsYXNzTmFtZT17VGFibGVMaXN0U3R5bGUuTGFiZWx9ID5cclxuXHRcdFx0eyBfXyggYEZpZWxkcyBtYXBgLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHQ8L0xhYmVsPlxyXG5cdFx0PEhlbHAgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5XaGl0ZVNwYWNlTm9ybWFsfT5cclxuXHRcdFx0TWFwIHlvdXIgZm9ybSBmaWVsZHMgdG8gc3RhbmRhcmQgdXNlcuKAmXMgZmllbGRzLiBUaGlzIGxpbmtzIHRoZSBmb3JtIGlucHV0IHRvIHVzZXIgcHJvZmlsZSBkYXRhLCBzbyB2YWx1ZXMgYXJlIHNhdmVkIGluIHRoZSB1c2Vy4oCZcyBhY2NvdW50LlxyXG5cdFx0PC9IZWxwPlxyXG5cclxuXHRcdDxUYWJsZUxpc3RDb250YWluZXI+XHJcblx0XHRcdDxUYWJsZUxpc3RIZWFkXHJcblx0XHRcdFx0Y29sdW1ucz17IFtcclxuXHRcdFx0XHRcdF9fKCBgVXNlciBNZXRhIEZpZWxkc2AsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdFx0X18oIGBGb3JtIEZpZWxkc2AsICdqZXQtZm9ybS1idWlsZGVyJyApXHJcblx0XHRcdFx0XSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdHsgdXNlckZpZWxkcy5tYXAoICggZmllbGQgKSA9PiA8VGFibGVMaXN0Um93XHJcblx0XHRcdFx0a2V5PXsgZmllbGQudmFsdWUgfVxyXG5cdFx0XHRcdHRhZz17IGZpZWxkLnZhbHVlIH1cclxuXHRcdFx0XHRsYWJlbD17IGZpZWxkLmxhYmVsIH1cclxuXHRcdFx0XHRoZWxwPXsgZmllbGQuaGVscCB9XHJcblx0XHRcdFx0aXNSZXF1aXJlZD17IGZpZWxkLnJlcXVpcmVkIH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHsgKCB7IHNldFNob3dFcnJvciwgaHRtbElkIH0gKSA9PiAoIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0XHRpZD17IGh0bWxJZCB9XHJcblx0XHRcdFx0XHRvbkJsdXI9eyAoKSA9PiBzZXRTaG93RXJyb3IoIHRydWUgKSB9XHJcblx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdFx0XHRmb3JtRmllbGRzPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdFx0XHR2YWx1ZT17IGdldE1hcEZpZWxkKCB7IG5hbWU6IGZpZWxkLnZhbHVlIH0gKSB9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKFxyXG5cdFx0XHRcdFx0XHR7IG5hbWVGaWVsZDogZmllbGQudmFsdWUsIHZhbHVlIH0sXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxyXG5cdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cclxuXHRcdFx0XHQvPiApIH1cclxuXHRcdFx0PC9UYWJsZUxpc3RSb3c+ICkgfVxyXG5cdFx0PC9UYWJsZUxpc3RDb250YWluZXI+XHJcblx0PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyRmllbGRzUm93O1xyXG4iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7XHJcblx0SGVscCxcclxuXHRMYWJlbCxcclxuXHRUYWJsZUxpc3RTdHlsZSxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUYWJsZUxpc3RDb250YWluZXIsIFRhYmxlTGlzdEhlYWQsIFRhYmxlTGlzdFJvdyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XHJcblxyXG5cclxuZnVuY3Rpb24gVXNlckZpZWxkc1JvdyggeyBnZXRNYXBGaWVsZCwgc2V0TWFwRmllbGQsICB9ICkge1xyXG5cclxuXHRjb25zdCBmb3JtRmllbGRzID0gdXNlRmllbGRzKCB7IHdpdGhJbm5lcjogZmFsc2UgfSApO1xyXG5cclxuXHRyZXR1cm4gPGRpdiBjcmVhdGVJZD17IGZhbHNlIH0gY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5XcmFwfT5cclxuXHRcdDxMYWJlbCBjbGFzc05hbWU9e1RhYmxlTGlzdFN0eWxlLkxhYmVsfT5cclxuXHRcdFx0eyBfXyggYFVzZXIgTWV0YWAsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdDwvTGFiZWw+XHJcblx0XHQ8SGVscCBjbGFzc05hbWU9e1RhYmxlTGlzdFN0eWxlLldoaXRlU3BhY2VOb3JtYWx9PlxyXG5cdFx0XHRNYXAgZm9ybSBmaWVsZHMgdG8gY3VzdG9tIHVzZXIgbWV0YSBmaWVsZHMgKGUuZy4sIFwiUGhvbmVcIikgbm90IGluY2x1ZGVkIGluIFdvcmRQcmVzcyBieSBkZWZhdWx0LlxyXG5cdFx0PC9IZWxwPlxyXG5cdFx0PFRhYmxlTGlzdENvbnRhaW5lcj5cclxuXHRcdFx0PFRhYmxlTGlzdEhlYWRcclxuXHRcdFx0XHRjb2x1bW5zPXsgW1xyXG5cdFx0XHRcdFx0X18oIGBGb3JtIEZpZWxkc2AsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0XHRcdFx0X18oIGBVc2VyIE1ldGEgRmllbGRzYCwgJ2pldC1mb3JtLWJ1aWxkZXInIClcclxuXHRcdFx0XHRdIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0eyBmb3JtRmllbGRzLm1hcCggKCBmaWVsZCApID0+IDxUYWJsZUxpc3RSb3dcclxuXHRcdFx0XHRrZXk9eyBmaWVsZC52YWx1ZSB9XHJcblx0XHRcdFx0dGFnPXsgZmllbGQudmFsdWUgfVxyXG5cdFx0XHRcdGxhYmVsPXsgZmllbGQubGFiZWwgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyAoIHsgaHRtbElkIH0gKSA9PiAoXHJcblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2VyIG1ldGEgZmllbGQva2V5XCJcclxuXHRcdFx0XHRcdFx0aWQ9eyBodG1sSWQgfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGdldE1hcEZpZWxkKCB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlOiAnbWV0YV9maWVsZHNfbWFwJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBmaWVsZC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0TWFwRmllbGQoIHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lRmllbGQ6IGZpZWxkLnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBuZXdWYWwsXHJcblx0XHRcdFx0XHRcdFx0c291cmNlOiAnbWV0YV9maWVsZHNfbWFwJyxcclxuXHRcdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXHJcblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHQ8L1RhYmxlTGlzdFJvdz4gKSB9XHJcblx0XHQ8L1RhYmxlTGlzdENvbnRhaW5lcj5cclxuXHQ8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJGaWVsZHNSb3c7XHJcbiIsImltcG9ydCB7XHJcblx0TGFiZWwsXHJcblx0Um93Q29udHJvbCxcclxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IFNlbGVjdENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xyXG5cclxuZnVuY3Rpb24gVXNlclJvbGVSb3coIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiB9ICkge1xyXG5cclxuXHRyZXR1cm4gPFJvd0NvbnRyb2w+XHJcblx0XHR7ICggeyBpZCB9ICkgPT4gPD5cclxuXHRcdFx0PExhYmVsIGh0bWxGb3I9eyBpZCB9ID5cclxuXHRcdFx0XHR7IF9fKCAnVXNlciBSb2xlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L0xhYmVsPlxyXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdG11bHRpcGxlXHJcblx0XHRcdFx0aWQ9eyBpZCB9XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy51c2VyX3JvbGUgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBKZXRGQlJlZ2lzdGVyQWN0aW9uLnVzZXJSb2xlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyB1c2VyX3JvbGUgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyB1c2VyX3JvbGUgfSxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcclxuXHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxyXG5cdFx0XHRcdGhlbHA9eyBfXyggJ0hvbGQgQ3RybCAoV2luZG93cykgb3IgQ29tbWFuZCAoTWFjKSB0byBzZWxlY3QgbXVsdGlwbGUgcm9sZXMuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC8+IH1cclxuXHJcblx0PC9Sb3dDb250cm9sPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclJvbGVSb3c7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXHJcbmltcG9ydCBSZWdpc3RlclVzZXJSZW5kZXIgZnJvbSAnLi9SZW5kZXInO1xyXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcbmltcG9ydCB7IGNvbW1lbnRBdXRob3JBdmF0YXIgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcclxuaW1wb3J0IHVzZXJGaWVsZHMgZnJvbSAnLi91c2VyRmllbGRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0eXBlOiAncmVnaXN0ZXJfdXNlcicsXHJcblx0bGFiZWw6IF9fKCAnUmVnaXN0ZXIgVXNlcicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdGVkaXQ6IFJlZ2lzdGVyVXNlclJlbmRlcixcclxuXHRpY29uOiBjb21tZW50QXV0aG9yQXZhdGFyLFxyXG5cdGRvY0hyZWY6ICdodHRwczovL2pldGZvcm1idWlsZGVyLmNvbS9mZWF0dXJlcy9yZWdpc3Rlci11c2VyLycsXHJcblx0Y2F0ZWdvcnk6ICd1c2VyJyxcclxuXHR2YWxpZGF0b3JzOiBbXHJcblx0XHQoIHsgc2V0dGluZ3MgfSApID0+IHtcclxuXHRcdFx0aWYgKCAhc2V0dGluZ3MuYWxsb3dfcmVnaXN0ZXIgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3M/LnJvbGVfY2FuX3JlZ2lzdGVyXHJcblx0XHRcdCAgICAgICA/IGZhbHNlXHJcblx0XHRcdCAgICAgICA6IHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICdyb2xlX2Nhbl9yZWdpc3RlcicgfTtcclxuXHRcdH0sXHJcblx0XHQoIHsgc2V0dGluZ3MgfSApID0+IHtcclxuXHRcdFx0Y29uc3QgZXJyb3JzID0gW107XHJcblxyXG5cdFx0XHRmb3IgKCBjb25zdCBmaWVsZCBvZiB1c2VyRmllbGRzICkge1xyXG5cdFx0XHRcdGlmICggIWZpZWxkLnJlcXVpcmVkICkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IGZpZWxkVmFsdWUgPSBzZXR0aW5ncz8uZmllbGRzX21hcD8uWyBmaWVsZC52YWx1ZSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoICFmaWVsZFZhbHVlICkge1xyXG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2goXHJcblx0XHRcdFx0XHRcdHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICdmaWVsZF8nICsgZmllbGQudmFsdWUgfSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZXJyb3JzO1xyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XHJcblxyXG5jb25zdCB1c2VyRmllbGRzID0gW1xyXG5cdHtcclxuXHRcdHZhbHVlOiAnbG9naW4nLFxyXG5cdFx0bGFiZWw6IF9fKCAnVXNlciBMb2dpbicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0aGVscDogX18oICdDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRoZSB1c2VyIGxvZ2luLiBUaGUgdmFsdWUgb2YgdGhpcyBmaWVsZCB3aWxsIGJlIHN0b3JlZCBhcyB0aGUgdXNlciBsb2dpbiBpbiB0aGUgZGF0YWJhc2UuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAnZW1haWwnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRW1haWwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdGhlbHA6IF9fKCAnQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgdXNlciBlbWFpbC4gVGhlIHZhbHVlIG9mIHRoaXMgZmllbGQgd2lsbCBiZSBzdG9yZWQgYXMgdGhlIHVzZXIgZW1haWwgaW4gdGhlIGRhdGFiYXNlLiBZb3UgY2FuIHVzZSB0aGUgc2FtZSBmaWVsZCBpbiB0aGUgVXNlciBMb2dpbiBzZXR0aW5nIGlmIHlvdSB3YW50IHRoZSBsb2dpbiBhbmQgZW1haWwgdG8gYmUgdGhlIHNhbWUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAncGFzc3dvcmQnLFxyXG5cdFx0bGFiZWw6IF9fKCAnUGFzc3dvcmQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdGhlbHA6IF9fKCAnQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgdXNlciBwYXNzd29yZC4gVGhlIHZhbHVlIG9mIHRoaXMgZmllbGQgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIGRhdGFiYXNlIGluIGEgaGFzaGVkIGZvcm1hdC4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdjb25maXJtX3Bhc3N3b3JkJyxcclxuXHRcdGxhYmVsOiBfXyggJ0NvbmZpcm0gUGFzc3dvcmQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdGhlbHA6IF9fKCAnQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNvbmZpcm0gdGhlIHVzZXIgcGFzc3dvcmQuIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQgdG8gZW5zdXJlIHRoZSB1c2VyIGhhcyBlbnRlcmVkIHRoZSBjb3JyZWN0IHBhc3N3b3JkLicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0fSxcclxuXHR7XHJcblx0XHR2YWx1ZTogJ2ZpcnN0X25hbWUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnRmlyc3QgTmFtZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdFx0aGVscDogX18oICcoT3B0aW9uYWwpIENob29zZSB0aGUgZm9ybSBmaWVsZCB0aGF0IHdpbGwgYmUgdXNlZCB0byBnZXQgdGhlIHVzZXJcXCdzIGZpcnN0IG5hbWUuIFRoZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBkYXRhYmFzZSBhcyB0aGUgRmlyc3QgTmFtZSBpbiB0aGUgdXNlciBwcm9maWxlLicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dmFsdWU6ICdsYXN0X25hbWUnLFxyXG5cdFx0bGFiZWw6IF9fKCAnTGFzdCBOYW1lJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0XHRoZWxwOiBfXyggJyhPcHRpb25hbCkgQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgdXNlclxcJ3MgbGFzdCBuYW1lLiBUaGUgdmFsdWUgb2YgdGhpcyBmaWVsZCB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgV29yZFByZXNzIGRhdGFiYXNlIGFzIHRoZSBsYXN0IG5hbWUgaW4gdGhlIHVzZXIgcHJvZmlsZS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHZhbHVlOiAndXNlcl91cmwnLFxyXG5cdFx0bGFiZWw6IF9fKCAnVXNlciBVUkwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxuXHRcdGhlbHA6IF9fKCAnKE9wdGlvbmFsKSBDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRoZSB1c2Vy4oCZcyB3ZWJzaXRlLiBUaGUgdmFsdWUgb2YgdGhpcyBmaWVsZCB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgV29yZFByZXNzIGRhdGFiYXNlIGFzIHRoZSB3ZWJzaXRlIGluIHRoZSBDb250YWN0cyBzZWN0aW9uIG9mIHRoZSB1c2VyIHByb2ZpbGUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcblx0fSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJGaWVsZHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJqZmJcIl1bXCJhY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYmxvY2tzVG9BY3Rpb25zXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWN0aW9uIGZyb20gJy4vcmVnaXN0ZXJVc2VyQWN0aW9uJztcclxuaW1wb3J0IHsgYWRkQ29tcHV0ZWRGaWVsZCwgcmVnaXN0ZXJBY3Rpb24gfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xyXG5pbXBvcnQgVXNlcklEQ29tcHV0ZWRGaWVsZCBmcm9tICcuL1VzZXJJRENvbXB1dGVkRmllbGQnO1xyXG5cclxucmVnaXN0ZXJBY3Rpb24oIGFjdGlvbiApO1xyXG5hZGRDb21wdXRlZEZpZWxkKCBVc2VySURDb21wdXRlZEZpZWxkICk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==