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
  if (false) // removed by dead control flow
{}
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
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('If this option is enabled, logged-in users with the Administrator role will be able to add new users using this form. If disabled, only non-logged-in users will be able to register themselves.', 'jet-form-builder')
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
    columns: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Form Fields`, 'jet-form-builder'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta Fields`, 'jet-form-builder')]
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
    columns: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta Fields`, 'jet-form-builder'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Form Fields`, 'jet-form-builder')]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUlBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvY29yZS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9jb21tZW50LWF1dGhvci1hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9Vc2VySURDb21wdXRlZEZpZWxkLmpzIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL1JlbWVtYmVyTWVSb3cuanN4Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL1JlbmRlci5qc3giLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9yZWdpc3RlclVzZXJBY3Rpb24vUm9sZUNhblJlZ2lzdGVyUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9Vc2VyRmllbGRzUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9Vc2VyTWV0YVJvdy5qc3giLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9yZWdpc3RlclVzZXJBY3Rpb24vVXNlclJvbGVSb3cuanN4Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL3VzZXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJibG9ja3NUb0FjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY3NzLnRzXG52YXIgaWR4ID0gMDtcbnZhciBjc3MgPSAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCIpIHtcbiAgICByZXR1cm4gYG1vY2tlZC1jc3MtJHtpZHgrK31gO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnVXNpbmcgdGhlIFwiY3NzXCIgdGFnIGluIHJ1bnRpbWUgaXMgbm90IHN1cHBvcnRlZC4gTWFrZSBzdXJlIHlvdSBoYXZlIHNldCB1cCB0aGUgQmFiZWwgcGx1Z2luIGNvcnJlY3RseS4nXG4gICk7XG59O1xudmFyIGNzc19kZWZhdWx0ID0gY3NzO1xuXG4vLyBzcmMvY3gudHNcbnZhciBjeCA9IGZ1bmN0aW9uIGN4MigpIHtcbiAgY29uc3QgcHJlc2VudENsYXNzTmFtZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgYXRvbWljQ2xhc3NlcyA9IHt9O1xuICBjb25zdCBub25BdG9taWNDbGFzc2VzID0gW107XG4gIHByZXNlbnRDbGFzc05hbWVzLmZvckVhY2goKGFyZykgPT4ge1xuICAgIGNvbnN0IGluZGl2aWR1YWxDbGFzc05hbWVzID0gYXJnID8gYXJnLnNwbGl0KFwiIFwiKSA6IFtdO1xuICAgIGluZGl2aWR1YWxDbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgaWYgKGNsYXNzTmFtZS5zdGFydHNXaXRoKFwiYXRtX1wiKSkge1xuICAgICAgICBjb25zdCBbLCBrZXlIYXNoXSA9IGNsYXNzTmFtZS5zcGxpdChcIl9cIik7XG4gICAgICAgIGF0b21pY0NsYXNzZXNba2V5SGFzaF0gPSBjbGFzc05hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25BdG9taWNDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGNvbnN0IGtleUhhc2ggaW4gYXRvbWljQ2xhc3Nlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXRvbWljQ2xhc3Nlcywga2V5SGFzaCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGF0b21pY0NsYXNzZXNba2V5SGFzaF0pO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaCguLi5ub25BdG9taWNDbGFzc2VzKTtcbiAgcmV0dXJuIHJlc3VsdC5qb2luKFwiIFwiKTtcbn07XG52YXIgY3hfZGVmYXVsdCA9IGN4O1xuZXhwb3J0IHtcbiAgY3NzX2RlZmF1bHQgYXMgY3NzLFxuICBjeF9kZWZhdWx0IGFzIGN4XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBQYXRoLCBTVkcgfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgY29tbWVudEF1dGhvckF2YXRhciA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGQ6IFwiTTcuMjUgMTYuNDM3YTYuNSA2LjUgMCAxIDEgOS41IDBWMTZBMi43NSAyLjc1IDAgMCAwIDE0IDEzLjI1aC00QTIuNzUgMi43NSAwIDAgMCA3LjI1IDE2di40MzdabTEuNSAxLjE5M2E2LjQ3IDYuNDcgMCAwIDAgMy4yNS44NyA2LjQ3IDYuNDcgMCAwIDAgMy4yNS0uODdWMTZjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1aC00Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYxLjYzWk00IDEyYTggOCAwIDEgMSAxNiAwIDggOCAwIDAgMS0xNiAwWm0xMC0yYTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMFpcIixcbiAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBjb21tZW50QXV0aG9yQXZhdGFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWVudC1hdXRob3ItYXZhdGFyLmpzLm1hcCIsImltcG9ydCB7IEJhc2VDb21wdXRlZEZpZWxkIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuZnVuY3Rpb24gVXNlcklEQ29tcHV0ZWRGaWVsZCgpIHtcblx0QmFzZUNvbXB1dGVkRmllbGQuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIGFjdGlvbiApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0J3JlZ2lzdGVyX3VzZXInID09PSBhY3Rpb24udHlwZSAmJlxuXHRcdFx0YWN0aW9uLnNlbGZTZXR0aW5ncy5hZGRfdXNlcl9pZFxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAndXNlcl9pZCc7XG5cdH07XG5cblx0dGhpcy5nZXRIZWxwID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBfXyhcblx0XHRcdCdBIGNvbXB1dGVkIGZpZWxkIGZyb20gdGhlIDxiPlJlZ2lzdGVyIFVzZXI8L2I+IGFjdGlvbi4nLFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdCk7XG5cdH07XG59XG5cblVzZXJJRENvbXB1dGVkRmllbGQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUNvbXB1dGVkRmllbGQucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJRENvbXB1dGVkRmllbGQ7IiwiaW1wb3J0IHtcblx0TGFiZWwsXG5cdFJvd0NvbnRyb2wsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBTZWxlY3RDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xuXG5mdW5jdGlvbiBSZW1lbWJlck1lUm93KCB7IHNldHRpbmdzLCBvbkNoYW5nZVNldHRpbmdPYmogfSApIHtcblx0Y29uc3QgZm9ybUZpZWxkcyA9IHVzZUZpZWxkcygge1xuXHRcdHdpdGhJbm5lcjogZmFsc2UsXG5cdFx0cGxhY2Vob2xkZXI6ICctLScsXG5cdH0gKTtcblxuXHRyZXR1cm4gPFJvd0NvbnRyb2w+XG5cdFx0eyAoIHsgaWQgfSApID0+IDw+XG5cdFx0XHQ8TGFiZWwgaHRtbEZvcj17IGlkIH0+XG5cdFx0XHRcdHsgX18oICdcIlJlbWVtYmVyIG1lXCIgZmllbGQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9MYWJlbD5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGlkPXsgaWQgfVxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlbWVtYmVyX21lX2ZpZWxkIH1cblx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRvbkNoYW5nZT17IHJlbWVtYmVyX21lX2ZpZWxkID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcblx0XHRcdFx0XHR7IHJlbWVtYmVyX21lX2ZpZWxkIH0gKSB9XG5cdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0Lz5cblx0XHQ8Lz4gfVxuXHQ8L1Jvd0NvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1lbWJlck1lUm93OyIsImltcG9ydCB7XG5cdFRvZ2dsZUNvbnRyb2wsXG5cdEZsZXgsXG5cdEZsZXhJdGVtLFxuXHRDYXJkLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgQWN0aW9uTWVzc2FnZXMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuaW1wb3J0IHtDbGVhckJhc2VDb250cm9sU3R5bGUsIExhYmVsfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgV2lkZUxpbmUgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJvbGVDYW5SZWdpc3RlclJvdyBmcm9tICcuL1JvbGVDYW5SZWdpc3RlclJvdyc7XG5pbXBvcnQgVXNlckZpZWxkc1JvdyBmcm9tICcuL1VzZXJGaWVsZHNSb3cnO1xuaW1wb3J0IFVzZXJSb2xlUm93IGZyb20gJy4vVXNlclJvbGVSb3cnO1xuaW1wb3J0IFVzZXJNZXRhUm93IGZyb20gJy4vVXNlck1ldGFSb3cnO1xuaW1wb3J0IFJlbWVtYmVyTWVSb3cgZnJvbSAnLi9SZW1lbWJlck1lUm93JztcblxuZnVuY3Rpb24gUmVnaXN0ZXJVc2VyUmVuZGVyKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgc2V0dGluZ3MsXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nT2JqLFxuXHRcdCAgICAgIGdldE1hcEZpZWxkLFxuXHRcdCAgICAgIHNldE1hcEZpZWxkLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuXHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9eyBDbGVhckJhc2VDb250cm9sU3R5bGUgfVxuXHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0J0FsbG93IGNyZWF0aW5nIG5ldyB1c2VycyBieSBleGlzdGluZyB1c2VycycsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfVxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmFsbG93X3JlZ2lzdGVyIH1cblx0XHRcdG9uQ2hhbmdlPXsgYWxsb3dfcmVnaXN0ZXIgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxuXHRcdFx0XHR7IGFsbG93X3JlZ2lzdGVyIH0sXG5cdFx0XHQpIH1cblx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdCdJZiB0aGlzIG9wdGlvbiBpcyBlbmFibGVkLCBsb2dnZWQtaW4gdXNlcnMgd2l0aCB0aGUgQWRtaW5pc3RyYXRvciByb2xlIHdpbGwgYmUgYWJsZSB0byBhZGQgbmV3IHVzZXJzIHVzaW5nIHRoaXMgZm9ybS4gSWYgZGlzYWJsZWQsIG9ubHkgbm9uLWxvZ2dlZC1pbiB1c2VycyB3aWxsIGJlIGFibGUgdG8gcmVnaXN0ZXIgdGhlbXNlbHZlcy4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHQvPlxuXHRcdHsgc2V0dGluZ3MuYWxsb3dfcmVnaXN0ZXIgJiYgPD5cblx0XHRcdDxXaWRlTGluZS8+XG5cdFx0XHQ8Um9sZUNhblJlZ2lzdGVyUm93XG5cdFx0XHRcdHNldHRpbmdzPXsgc2V0dGluZ3MgfVxuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmdPYmo9eyBvbkNoYW5nZVNldHRpbmdPYmogfVxuXHRcdFx0Lz5cblx0XHQ8Lz4gfVxuXHRcdDxXaWRlTGluZS8+XG5cdFx0PFVzZXJGaWVsZHNSb3dcblx0XHRcdGdldE1hcEZpZWxkPXsgZ2V0TWFwRmllbGQgfVxuXHRcdFx0c2V0TWFwRmllbGQ9eyBzZXRNYXBGaWVsZCB9XG5cdFx0Lz5cblx0XHQ8V2lkZUxpbmUvPlxuXHRcdDxVc2VyUm9sZVJvd1xuXHRcdFx0c2V0dGluZ3M9eyBzZXR0aW5ncyB9XG5cdFx0XHRvbkNoYW5nZVNldHRpbmdPYmo9eyBvbkNoYW5nZVNldHRpbmdPYmogfVxuXHRcdC8+XG5cdFx0PFdpZGVMaW5lLz5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPXsgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH1cblx0XHRcdGxhYmVsPXsgX18oICdMb2cgSW4gVXNlciBhZnRlciBSZWdpc3RlcjonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MubG9nX2luIH1cblx0XHRcdG9uQ2hhbmdlPXsgbG9nX2luID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyBsb2dfaW4gfSApIH1cblx0XHRcdGhlbHA9eyBfXyhcblx0XHRcdFx0J1RvIHVzZSB0aGUgXCJSZW1lbWJlciBtZVwiIG9wdGlvbiwgZmlyc3QgYWRkIGEgY2hlY2tib3gsIHJhZGlvIGJ1dHRvbiwgb3Igc3dpdGNoZXIgZmllbGQgdG8geW91ciBmb3JtIHdpdGggYSB2YWx1ZSBvZiAxLCBhbmQgbGFiZWwgaXQgXCJSZW1lbWJlciBtZVwiIG9yIHNpbWlsYXIuIFRoZW4sIHNlbGVjdCBpdCBoZXJlLicsXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcblx0XHRcdCkgfVxuXHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHQvPlxuXHRcdHsgc2V0dGluZ3MubG9nX2luICYmIDw+XG5cdFx0XHQ8V2lkZUxpbmUvPlxuXHRcdFx0PFJlbWVtYmVyTWVSb3dcblx0XHRcdFx0c2V0dGluZ3M9eyBzZXR0aW5ncyB9XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaj17IG9uQ2hhbmdlU2V0dGluZ09iaiB9XG5cdFx0XHQvPlxuXHRcdDwvPiB9XG5cdFx0PFdpZGVMaW5lLz5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPXsgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH1cblx0XHRcdGxhYmVsPXsgX18oICdBZGQgVXNlciBJRCB0byBmb3JtIGRhdGE6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmFkZF91c2VyX2lkIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyBhZGRfdXNlcl9pZDogdmFsIH0gKSB9XG5cdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdCdSZWdpc3RlcmVkIHVzZXIgSUQgd2lsbCBiZSBhZGRlZCB0byBmb3JtIGRhdGEuIEN1cnJlbnQgdXNlciBJRCB3aWxsIGJlIGFkZGVkIHRvIGZvcm0gZGF0YSBvbmx5IGlmIFwiQWxsb3cgY3JlYXRpbmcgbmV3IHVzZXJzIGJ5IGV4aXN0aW5nIHVzZXJzXCIgb3B0aW9uIHdhcyBkaXNhYmxlZC4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0Lz5cblx0XHQ8V2lkZUxpbmUvPlxuXHRcdDxVc2VyTWV0YVJvd1xuXHRcdFx0Z2V0TWFwRmllbGQ9eyBnZXRNYXBGaWVsZCB9XG5cdFx0XHRzZXRNYXBGaWVsZD17IHNldE1hcEZpZWxkIH1cblx0XHQvPlxuXHRcdDxXaWRlTGluZS8+XG5cdFx0PEFjdGlvbk1lc3NhZ2VzXG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPlxuXHQ8L0ZsZXg+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclVzZXJSZW5kZXI7XG4iLCJpbXBvcnQge1xuXHRDb250cm9sV2l0aEVycm9yU3R5bGUsIEljb25UZXh0LFxuXHRSZXF1aXJlZExhYmVsLFxuXHRSb3dDb250cm9sLFxuXHRSb3dDb250cm9sRW5kU3R5bGUsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBTZWxlY3RDb250cm9sLCBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB7IGN4IH0gZnJvbSAnQGxpbmFyaWEvY29yZSc7XG5cbmZ1bmN0aW9uIFJvbGVDYW5SZWdpc3RlclJvdyggeyBzZXR0aW5ncywgb25DaGFuZ2VTZXR0aW5nT2JqIH0gKSB7XG5cblx0Y29uc3QgeyBoYXNFcnJvciwgc2V0U2hvd0Vycm9yIH0gPSB1c2VBY3Rpb25WYWxpZGF0b3JQcm92aWRlcigge1xuXHRcdGlzU3VwcG9ydGVkOiBlcnJvciA9PiAncm9sZV9jYW5fcmVnaXN0ZXInID09PSBlcnJvcj8ucHJvcGVydHksXG5cdH0gKTtcblxuXHRyZXR1cm4gPFJvd0NvbnRyb2w+XG5cdFx0eyAoIHsgaWQgfSApID0+IDw+XG5cdFx0XHQ8UmVxdWlyZWRMYWJlbCBodG1sRm9yPXsgaWQgfT5cblx0XHRcdFx0eyBfXyggJ1dobyBjYW4gYWRkIG5ldyB1c2VyPycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdDwvUmVxdWlyZWRMYWJlbD5cblx0XHRcdDxGbGV4XG5cdFx0XHRcdGNsYXNzTmFtZT17IGN4KFxuXHRcdFx0XHRcdFJvd0NvbnRyb2xFbmRTdHlsZSxcblx0XHRcdFx0XHRoYXNFcnJvciAmJiBDb250cm9sV2l0aEVycm9yU3R5bGUsXG5cdFx0XHRcdCkgfVxuXHRcdFx0XHRkaXJlY3Rpb249XCJjb2x1bW5cIlxuXHRcdFx0PlxuXHRcdFx0XHR7IGhhc0Vycm9yICYmIDxJY29uVGV4dD5cblx0XHRcdFx0XHR7IF9fKFxuXHRcdFx0XHRcdFx0J1BsZWFzZSBmaWxsIHRoaXMgcmVxdWlyZWQgZmllbGQnLFxuXHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L0ljb25UZXh0PiB9XG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0aWQ9eyBpZCB9XG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yb2xlX2Nhbl9yZWdpc3RlciB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IEpldEZCUmVnaXN0ZXJBY3Rpb24uYWxsVXNlclJvbGVzIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHJvbGVfY2FuX3JlZ2lzdGVyID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcblx0XHRcdFx0XHRcdHsgcm9sZV9jYW5fcmVnaXN0ZXIgfSxcblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRvbkJsdXI9eyAoKSA9PiBzZXRTaG93RXJyb3IoIHRydWUgKSB9XG5cdFx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmxleD5cblx0XHQ8Lz4gfVxuXHQ8L1Jvd0NvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSb2xlQ2FuUmVnaXN0ZXJSb3c7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRIZWxwLFxuXHRMYWJlbCxcblx0VGFibGVMaXN0U3R5bGUsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQge1NlbGVjdENvbnRyb2x9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcbmltcG9ydCB7IFRhYmxlTGlzdENvbnRhaW5lciwgVGFibGVMaXN0SGVhZCwgVGFibGVMaXN0Um93IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB1c2VyRmllbGRzIGZyb20gJy4vdXNlckZpZWxkcyc7XG5cbmZ1bmN0aW9uIFVzZXJGaWVsZHNSb3coIHsgZ2V0TWFwRmllbGQsIHNldE1hcEZpZWxkIH0gKSB7XG5cblx0Y29uc3QgZm9ybUZpZWxkcyA9IHVzZUZpZWxkcygge1xuXHRcdHdpdGhJbm5lcjogZmFsc2UsXG5cdFx0cGxhY2Vob2xkZXI6ICctLScsXG5cdH0gKTtcblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBUYWJsZUxpc3RTdHlsZS5XcmFwIH0+XG5cdFx0PExhYmVsIGNsYXNzTmFtZT17VGFibGVMaXN0U3R5bGUuTGFiZWx9ID5cblx0XHRcdHsgX18oIGBGaWVsZHMgbWFwYCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvTGFiZWw+XG5cdFx0PEhlbHAgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5XaGl0ZVNwYWNlTm9ybWFsfT5cblx0XHRcdE1hcCB5b3VyIGZvcm0gZmllbGRzIHRvIHN0YW5kYXJkIHVzZXLigJlzIGZpZWxkcy4gVGhpcyBsaW5rcyB0aGUgZm9ybSBpbnB1dCB0byB1c2VyIHByb2ZpbGUgZGF0YSwgc28gdmFsdWVzIGFyZSBzYXZlZCBpbiB0aGUgdXNlcuKAmXMgYWNjb3VudC5cblx0XHQ8L0hlbHA+XG5cblx0XHQ8VGFibGVMaXN0Q29udGFpbmVyPlxuXHRcdFx0PFRhYmxlTGlzdEhlYWRcblx0XHRcdFx0Y29sdW1ucz17IFtcblx0XHRcdFx0XHRfXyggYEZvcm0gRmllbGRzYCwgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0XHRcdFx0X18oIGBVc2VyIE1ldGEgRmllbGRzYCwgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XSB9XG5cdFx0XHQvPlxuXHRcdFx0eyB1c2VyRmllbGRzLm1hcCggKCBmaWVsZCApID0+IDxUYWJsZUxpc3RSb3dcblx0XHRcdFx0a2V5PXsgZmllbGQudmFsdWUgfVxuXHRcdFx0XHR0YWc9eyBmaWVsZC52YWx1ZSB9XG5cdFx0XHRcdGxhYmVsPXsgZmllbGQubGFiZWwgfVxuXHRcdFx0XHRoZWxwPXsgZmllbGQuaGVscCB9XG5cdFx0XHRcdGlzUmVxdWlyZWQ9eyBmaWVsZC5yZXF1aXJlZCB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKCB7IHNldFNob3dFcnJvciwgaHRtbElkIH0gKSA9PiAoIDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0aWQ9eyBodG1sSWQgfVxuXHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRcdFx0Zm9ybUZpZWxkcz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogZmllbGQudmFsdWUgfSApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKFxuXHRcdFx0XHRcdFx0eyBuYW1lRmllbGQ6IGZpZWxkLnZhbHVlLCB2YWx1ZSB9LFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdF9fbmV4dDQwcHhEZWZhdWx0U2l6ZVxuXHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdC8+ICkgfVxuXHRcdFx0PC9UYWJsZUxpc3RSb3c+ICkgfVxuXHRcdDwvVGFibGVMaXN0Q29udGFpbmVyPlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJGaWVsZHNSb3c7XG4iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRIZWxwLFxuXHRMYWJlbCxcblx0VGFibGVMaXN0U3R5bGUsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcbmltcG9ydCB7IFRhYmxlTGlzdENvbnRhaW5lciwgVGFibGVMaXN0SGVhZCwgVGFibGVMaXN0Um93IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcblxuXG5mdW5jdGlvbiBVc2VyRmllbGRzUm93KCB7IGdldE1hcEZpZWxkLCBzZXRNYXBGaWVsZCwgIH0gKSB7XG5cblx0Y29uc3QgZm9ybUZpZWxkcyA9IHVzZUZpZWxkcyggeyB3aXRoSW5uZXI6IGZhbHNlIH0gKTtcblxuXHRyZXR1cm4gPGRpdiBjcmVhdGVJZD17IGZhbHNlIH0gY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5XcmFwfT5cblx0XHQ8TGFiZWwgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5MYWJlbH0+XG5cdFx0XHR7IF9fKCBgVXNlciBNZXRhYCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvTGFiZWw+XG5cdFx0PEhlbHAgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5XaGl0ZVNwYWNlTm9ybWFsfT5cblx0XHRcdE1hcCBmb3JtIGZpZWxkcyB0byBjdXN0b20gdXNlciBtZXRhIGZpZWxkcyAoZS5nLiwgXCJQaG9uZVwiKSBub3QgaW5jbHVkZWQgaW4gV29yZFByZXNzIGJ5IGRlZmF1bHQuXG5cdFx0PC9IZWxwPlxuXHRcdDxUYWJsZUxpc3RDb250YWluZXI+XG5cdFx0XHQ8VGFibGVMaXN0SGVhZFxuXHRcdFx0XHRjb2x1bW5zPXsgW1xuXHRcdFx0XHRcdF9fKCBgVXNlciBNZXRhIEZpZWxkc2AsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRcdF9fKCBgRm9ybSBGaWVsZHNgLCAnamV0LWZvcm0tYnVpbGRlcicgKVxuXHRcdFx0XHRdIH1cblx0XHRcdC8+XG5cdFx0XHR7IGZvcm1GaWVsZHMubWFwKCAoIGZpZWxkICkgPT4gPFRhYmxlTGlzdFJvd1xuXHRcdFx0XHRrZXk9eyBmaWVsZC52YWx1ZSB9XG5cdFx0XHRcdHRhZz17IGZpZWxkLnZhbHVlIH1cblx0XHRcdFx0bGFiZWw9eyBmaWVsZC5sYWJlbCB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKCB7IGh0bWxJZCB9ICkgPT4gKFxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVc2VyIG1ldGEgZmllbGQva2V5XCJcblx0XHRcdFx0XHRcdGlkPXsgaHRtbElkIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHtcblx0XHRcdFx0XHRcdFx0c291cmNlOiAnbWV0YV9maWVsZHNfbWFwJyxcblx0XHRcdFx0XHRcdFx0bmFtZTogZmllbGQudmFsdWUsXG5cdFx0XHRcdFx0XHR9ICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0TWFwRmllbGQoIHtcblx0XHRcdFx0XHRcdFx0bmFtZUZpZWxkOiBmaWVsZC52YWx1ZSxcblx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbCxcblx0XHRcdFx0XHRcdFx0c291cmNlOiAnbWV0YV9maWVsZHNfbWFwJyxcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRfX25leHQ0MHB4RGVmYXVsdFNpemVcblx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L1RhYmxlTGlzdFJvdz4gKSB9XG5cdFx0PC9UYWJsZUxpc3RDb250YWluZXI+XG5cdDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckZpZWxkc1JvdztcbiIsImltcG9ydCB7XG5cdExhYmVsLFxuXHRSb3dDb250cm9sLFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgU2VsZWN0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmZ1bmN0aW9uIFVzZXJSb2xlUm93KCB7IHNldHRpbmdzLCBvbkNoYW5nZVNldHRpbmdPYmogfSApIHtcblxuXHRyZXR1cm4gPFJvd0NvbnRyb2w+XG5cdFx0eyAoIHsgaWQgfSApID0+IDw+XG5cdFx0XHQ8TGFiZWwgaHRtbEZvcj17IGlkIH0gPlxuXHRcdFx0XHR7IF9fKCAnVXNlciBSb2xlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9MYWJlbD5cblx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdGlkPXsgaWQgfVxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfcm9sZSB9XG5cdFx0XHRcdG9wdGlvbnM9eyBKZXRGQlJlZ2lzdGVyQWN0aW9uLnVzZXJSb2xlcyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgdXNlcl9yb2xlID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcblx0XHRcdFx0XHR7IHVzZXJfcm9sZSB9LFxuXHRcdFx0XHQpIH1cblx0XHRcdFx0X19uZXh0NDBweERlZmF1bHRTaXplXG5cdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdGhlbHA9eyBfXyggJ0hvbGQgQ3RybCAoV2luZG93cykgb3IgQ29tbWFuZCAoTWFjKSB0byBzZWxlY3QgbXVsdGlwbGUgcm9sZXMuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Lz5cblx0XHQ8Lz4gfVxuXG5cdDwvUm93Q29udHJvbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJSb2xlUm93OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IFJlZ2lzdGVyVXNlclJlbmRlciBmcm9tICcuL1JlbmRlcic7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBjb21tZW50QXV0aG9yQXZhdGFyIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5pbXBvcnQgdXNlckZpZWxkcyBmcm9tICcuL3VzZXJGaWVsZHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHR5cGU6ICdyZWdpc3Rlcl91c2VyJyxcblx0bGFiZWw6IF9fKCAnUmVnaXN0ZXIgVXNlcicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRlZGl0OiBSZWdpc3RlclVzZXJSZW5kZXIsXG5cdGljb246IGNvbW1lbnRBdXRob3JBdmF0YXIsXG5cdGRvY0hyZWY6ICdodHRwczovL2pldGZvcm1idWlsZGVyLmNvbS9mZWF0dXJlcy9yZWdpc3Rlci11c2VyLycsXG5cdGNhdGVnb3J5OiAndXNlcicsXG5cdHZhbGlkYXRvcnM6IFtcblx0XHQoIHsgc2V0dGluZ3MgfSApID0+IHtcblx0XHRcdGlmICggIXNldHRpbmdzLmFsbG93X3JlZ2lzdGVyICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXR0aW5ncz8ucm9sZV9jYW5fcmVnaXN0ZXJcblx0XHRcdCAgICAgICA/IGZhbHNlXG5cdFx0XHQgICAgICAgOiB7IHR5cGU6ICdlbXB0eScsIHByb3BlcnR5OiAncm9sZV9jYW5fcmVnaXN0ZXInIH07XG5cdFx0fSxcblx0XHQoIHsgc2V0dGluZ3MgfSApID0+IHtcblx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBmaWVsZCBvZiB1c2VyRmllbGRzICkge1xuXHRcdFx0XHRpZiAoICFmaWVsZC5yZXF1aXJlZCApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBmaWVsZFZhbHVlID0gc2V0dGluZ3M/LmZpZWxkc19tYXA/LlsgZmllbGQudmFsdWUgXTtcblxuXHRcdFx0XHRpZiAoICFmaWVsZFZhbHVlICkge1xuXHRcdFx0XHRcdGVycm9ycy5wdXNoKFxuXHRcdFx0XHRcdFx0eyB0eXBlOiAnZW1wdHknLCBwcm9wZXJ0eTogJ2ZpZWxkXycgKyBmaWVsZC52YWx1ZSB9LFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVycm9ycztcblx0XHR9LFxuXHRdLFxufTtcbiIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuY29uc3QgdXNlckZpZWxkcyA9IFtcblx0e1xuXHRcdHZhbHVlOiAnbG9naW4nLFxuXHRcdGxhYmVsOiBfXyggJ1VzZXIgTG9naW4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRoZWxwOiBfXyggJ0Nob29zZSB0aGUgZm9ybSBmaWVsZCB0aGF0IHdpbGwgYmUgdXNlZCB0byBnZXQgdGhlIHVzZXIgbG9naW4uIFRoZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIHdpbGwgYmUgc3RvcmVkIGFzIHRoZSB1c2VyIGxvZ2luIGluIHRoZSBkYXRhYmFzZS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnZW1haWwnLFxuXHRcdGxhYmVsOiBfXyggJ0VtYWlsJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oICdDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRoZSB1c2VyIGVtYWlsLiBUaGUgdmFsdWUgb2YgdGhpcyBmaWVsZCB3aWxsIGJlIHN0b3JlZCBhcyB0aGUgdXNlciBlbWFpbCBpbiB0aGUgZGF0YWJhc2UuIFlvdSBjYW4gdXNlIHRoZSBzYW1lIGZpZWxkIGluIHRoZSBVc2VyIExvZ2luIHNldHRpbmcgaWYgeW91IHdhbnQgdGhlIGxvZ2luIGFuZCBlbWFpbCB0byBiZSB0aGUgc2FtZS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAncGFzc3dvcmQnLFxuXHRcdGxhYmVsOiBfXyggJ1Bhc3N3b3JkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oICdDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRoZSB1c2VyIHBhc3N3b3JkLiBUaGUgdmFsdWUgb2YgdGhpcyBmaWVsZCB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgZGF0YWJhc2UgaW4gYSBoYXNoZWQgZm9ybWF0LicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdHJlcXVpcmVkOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdjb25maXJtX3Bhc3N3b3JkJyxcblx0XHRsYWJlbDogX18oICdDb25maXJtIFBhc3N3b3JkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oICdDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY29uZmlybSB0aGUgdXNlciBwYXNzd29yZC4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZCB0byBlbnN1cmUgdGhlIHVzZXIgaGFzIGVudGVyZWQgdGhlIGNvcnJlY3QgcGFzc3dvcmQuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0cmVxdWlyZWQ6IHRydWUsXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2ZpcnN0X25hbWUnLFxuXHRcdGxhYmVsOiBfXyggJ0ZpcnN0IE5hbWUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRoZWxwOiBfXyggJyhPcHRpb25hbCkgQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgdXNlclxcJ3MgZmlyc3QgbmFtZS4gVGhlIHZhbHVlIG9mIHRoaXMgZmllbGQgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIGRhdGFiYXNlIGFzIHRoZSBGaXJzdCBOYW1lIGluIHRoZSB1c2VyIHByb2ZpbGUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2xhc3RfbmFtZScsXG5cdFx0bGFiZWw6IF9fKCAnTGFzdCBOYW1lJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oICcoT3B0aW9uYWwpIENob29zZSB0aGUgZm9ybSBmaWVsZCB0aGF0IHdpbGwgYmUgdXNlZCB0byBnZXQgdGhlIHVzZXJcXCdzIGxhc3QgbmFtZS4gVGhlIHZhbHVlIG9mIHRoaXMgZmllbGQgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIFdvcmRQcmVzcyBkYXRhYmFzZSBhcyB0aGUgbGFzdCBuYW1lIGluIHRoZSB1c2VyIHByb2ZpbGUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ3VzZXJfdXJsJyxcblx0XHRsYWJlbDogX18oICdVc2VyIFVSTCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGhlbHA6IF9fKCAnKE9wdGlvbmFsKSBDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRoZSB1c2Vy4oCZcyB3ZWJzaXRlLiBUaGUgdmFsdWUgb2YgdGhpcyBmaWVsZCB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgV29yZFByZXNzIGRhdGFiYXNlIGFzIHRoZSB3ZWJzaXRlIGluIHRoZSBDb250YWN0cyBzZWN0aW9uIG9mIHRoZSB1c2VyIHByb2ZpbGUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyRmllbGRzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwcmltaXRpdmVzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImJsb2Nrc1RvQWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFjdGlvbiBmcm9tICcuL3JlZ2lzdGVyVXNlckFjdGlvbic7XG5pbXBvcnQgeyBhZGRDb21wdXRlZEZpZWxkLCByZWdpc3RlckFjdGlvbiB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYWN0aW9ucyc7XG5pbXBvcnQgVXNlcklEQ29tcHV0ZWRGaWVsZCBmcm9tICcuL1VzZXJJRENvbXB1dGVkRmllbGQnO1xuXG5yZWdpc3RlckFjdGlvbiggYWN0aW9uICk7XG5hZGRDb21wdXRlZEZpZWxkKCBVc2VySURDb21wdXRlZEZpZWxkICk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=