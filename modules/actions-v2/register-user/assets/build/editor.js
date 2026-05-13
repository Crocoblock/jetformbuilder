/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js"
/*!**************************************************************************************************!*\
  !*** ../../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./UserIDComputedField.js"
/*!********************************!*\
  !*** ./UserIDComputedField.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./registerUserAction/RememberMeRow.jsx"
/*!**********************************************!*\
  !*** ./registerUserAction/RememberMeRow.jsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__);




function RememberMeRow({
  settings,
  onChangeSettingObj
}) {
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__.useFields)({
    withInner: false,
    placeholder: '--'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('"Remember me" field:', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.StyledSelectControl, {
    id: id,
    value: settings.remember_me_field,
    options: formFields,
    onChange: remember_me_field => onChangeSettingObj({
      remember_me_field
    })
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RememberMeRow);

/***/ },

/***/ "./registerUserAction/Render.jsx"
/*!***************************************!*\
  !*** ./registerUserAction/Render.jsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.StyledFlexControl, {
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.ClearBaseControlStyle,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Allow creating new users by existing users', 'jet-form-builder'),
    checked: settings.allow_register,
    onChange: allow_register => onChangeSettingObj({
      allow_register
    }),
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
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('To use the "Remember me" option, first add a checkbox, radio button, or switcher field to your form with a value of 1, and label it "Remember me" or similar. Then, select it here.', 'jet-form-builder')
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
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Registered user ID will be added to form data. Current user ID will be added to form data only if "Allow creating new users by existing users" option was disabled.', 'jet-form-builder')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_UserMetaRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    getMapField: getMapField,
    setMapField: setMapField
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_4__.WideLine, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_3__.ActionMessages, {
    ...props
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterUserRender);

/***/ },

/***/ "./registerUserAction/RoleCanRegisterRow.jsx"
/*!***************************************************!*\
  !*** ./registerUserAction/RoleCanRegisterRow.jsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  }, hasError && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.IconText, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please fill this required field', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.StyledSelectControl, {
    id: id,
    value: settings.role_can_register,
    options: JetFBRegisterAction.allUserRoles,
    onChange: role_can_register => onChangeSettingObj({
      role_can_register
    }),
    onBlur: () => setShowError(true)
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleCanRegisterRow);

/***/ },

/***/ "./registerUserAction/UserFieldsRow.jsx"
/*!**********************************************!*\
  !*** ./registerUserAction/UserFieldsRow.jsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _userFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userFields */ "./registerUserAction/userFields.js");

/* eslint-disable import/no-extraneous-dependencies */





function UserFieldsRow({
  getMapField,
  setMapField
}) {
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__.useFields)({
    withInner: false,
    placeholder: '--'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Wrap
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Label, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Label
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Fields map`, 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Help, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.WhiteSpaceNormal
  }, "Map your form fields to standard user\u2019s fields. This links the form input to user profile data, so values are saved in the user\u2019s account."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.TableListContainer, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.TableListHead, {
    columns: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta Fields`, 'jet-form-builder'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Form Fields`, 'jet-form-builder')]
  }), _userFields__WEBPACK_IMPORTED_MODULE_5__["default"].map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.TableListRow, {
    key: field.value,
    tag: field.value,
    label: field.label,
    help: field.help,
    isRequired: field.required
  }, ({
    setShowError,
    htmlId
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.StyledSelectControl, {
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
    })
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserFieldsRow);

/***/ },

/***/ "./registerUserAction/UserMetaRow.jsx"
/*!********************************************!*\
  !*** ./registerUserAction/UserMetaRow.jsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jet-form-builder-blocks-to-actions */ "jet-form-builder-blocks-to-actions");
/* harmony import */ var jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jet-form-builder-actions */ "jet-form-builder-actions");
/* harmony import */ var jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__);





function UserFieldsRow({
  getMapField,
  setMapField
}) {
  const formFields = (0,jet_form_builder_blocks_to_actions__WEBPACK_IMPORTED_MODULE_3__.useFields)({
    withInner: false
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    createId: false,
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Wrap
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Label, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.Label
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta`, 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.Help, {
    className: jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.TableListStyle.WhiteSpaceNormal
  }, "Map form fields to custom user meta fields (e.g., \"Phone\") not included in WordPress by default."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.TableListContainer, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.TableListHead, {
    columns: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Form Fields`, 'jet-form-builder'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`User Meta Fields`, 'jet-form-builder')]
  }), formFields.map(field => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.TableListRow, {
      key: field.value,
      tag: field.value,
      label: field.label
    }, ({
      htmlId
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jet-margin-bottom-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_2__.StyledTextControl, {
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
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_actions__WEBPACK_IMPORTED_MODULE_4__.SingleValueAsArrayToggle, {
      fieldName: field.value,
      getMapField: getMapField,
      setMapField: setMapField
    })));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserFieldsRow);

/***/ },

/***/ "./registerUserAction/UserRoleRow.jsx"
/*!********************************************!*\
  !*** ./registerUserAction/UserRoleRow.jsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



function UserRoleRow({
  settings,
  onChangeSettingObj
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.RowControl, null, ({
    id
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.Label, {
    htmlFor: id
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('User Role', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(jet_form_builder_components__WEBPACK_IMPORTED_MODULE_1__.StyledSelectControl, {
    multiple: true,
    id: id,
    value: settings.user_role,
    options: JetFBRegisterAction.userRoles,
    onChange: user_role => onChangeSettingObj({
      user_role
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hold Ctrl (Windows) or Command (Mac) to select multiple roles.', 'jet-form-builder')
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserRoleRow);

/***/ },

/***/ "./registerUserAction/index.js"
/*!*************************************!*\
  !*** ./registerUserAction/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./registerUserAction/Render.jsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "../../../../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js");
/* harmony import */ var _userFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userFields */ "./registerUserAction/userFields.js");
/* eslint-disable import/no-extraneous-dependencies */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  type: 'register_user',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Register User', 'jet-form-builder'),
  edit: _Render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
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
    for (const field of _userFields__WEBPACK_IMPORTED_MODULE_3__["default"]) {
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

/***/ },

/***/ "./registerUserAction/userFields.js"
/*!******************************************!*\
  !*** ./registerUserAction/userFields.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "jet-form-builder-actions"
/*!**********************************!*\
  !*** external ["jfb","actions"] ***!
  \**********************************/
(module) {

module.exports = window["jfb"]["actions"];

/***/ },

/***/ "jet-form-builder-blocks-to-actions"
/*!******************************************!*\
  !*** external ["jfb","blocksToActions"] ***!
  \******************************************/
(module) {

module.exports = window["jfb"]["blocksToActions"];

/***/ },

/***/ "jet-form-builder-components"
/*!*************************************!*\
  !*** external ["jfb","components"] ***!
  \*************************************/
(module) {

module.exports = window["jfb"]["components"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "@wordpress/primitives"
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["primitives"];

/***/ },

/***/ "../../../../../node_modules/@linaria/core/dist/index.mjs"
/*!****************************************************************!*\
  !*** ../../../../../node_modules/@linaria/core/dist/index.mjs ***!
  \****************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBS0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFLQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQU1BO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFNQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FDNUNBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvY29tbWVudC1hdXRob3ItYXZhdGFyLmpzIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vVXNlcklEQ29tcHV0ZWRGaWVsZC5qcyIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9SZW1lbWJlck1lUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9SZW5kZXIuanN4Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL1JvbGVDYW5SZWdpc3RlclJvdy5qc3giLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9yZWdpc3RlclVzZXJBY3Rpb24vVXNlckZpZWxkc1Jvdy5qc3giLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvLi9yZWdpc3RlclVzZXJBY3Rpb24vVXNlck1ldGFSb3cuanN4Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vcmVnaXN0ZXJVc2VyQWN0aW9uL1VzZXJSb2xlUm93LmpzeCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uL3JlZ2lzdGVyVXNlckFjdGlvbi91c2VyRmllbGRzLmpzIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiYWN0aW9uc1wiXSIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci9leHRlcm5hbCB3aW5kb3cgW1wiamZiXCIsXCJibG9ja3NUb0FjdGlvbnNcIl0iLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcImpmYlwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGxpbmFyaWEvY29yZS9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXJlZ2lzdGVyLXVzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItcmVnaXN0ZXItdXNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1yZWdpc3Rlci11c2VyLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFBhdGgsIFNWRyB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBjb21tZW50QXV0aG9yQXZhdGFyID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgZDogXCJNNy4yNSAxNi40MzdhNi41IDYuNSAwIDEgMSA5LjUgMFYxNkEyLjc1IDIuNzUgMCAwIDAgMTQgMTMuMjVoLTRBMi43NSAyLjc1IDAgMCAwIDcuMjUgMTZ2LjQzN1ptMS41IDEuMTkzYTYuNDcgNi40NyAwIDAgMCAzLjI1Ljg3IDYuNDcgNi40NyAwIDAgMCAzLjI1LS44N1YxNmMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVoLTRjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djEuNjNaTTQgMTJhOCA4IDAgMSAxIDE2IDAgOCA4IDAgMCAxLTE2IDBabTEwLTJhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwWlwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRBdXRob3JBdmF0YXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tZW50LWF1dGhvci1hdmF0YXIuanMubWFwIiwiaW1wb3J0IHsgQmFzZUNvbXB1dGVkRmllbGQgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5mdW5jdGlvbiBVc2VySURDb21wdXRlZEZpZWxkKCkge1xuXHRCYXNlQ29tcHV0ZWRGaWVsZC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggYWN0aW9uICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQncmVnaXN0ZXJfdXNlcicgPT09IGFjdGlvbi50eXBlICYmXG5cdFx0XHRhY3Rpb24uc2VsZlNldHRpbmdzLmFkZF91c2VyX2lkXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICd1c2VyX2lkJztcblx0fTtcblxuXHR0aGlzLmdldEhlbHAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIF9fKFxuXHRcdFx0J0EgY29tcHV0ZWQgZmllbGQgZnJvbSB0aGUgPGI+UmVnaXN0ZXIgVXNlcjwvYj4gYWN0aW9uLicsXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0KTtcblx0fTtcbn1cblxuVXNlcklEQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlQ29tcHV0ZWRGaWVsZC5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcklEQ29tcHV0ZWRGaWVsZDsiLCJpbXBvcnQge1xuXHRMYWJlbCxcblx0Um93Q29udHJvbCxcblx0U3R5bGVkU2VsZWN0Q29udHJvbFxufSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlRmllbGRzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1ibG9ja3MtdG8tYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIFJlbWVtYmVyTWVSb3coIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiB9ICkge1xuXHRjb25zdCBmb3JtRmllbGRzID0gdXNlRmllbGRzKCB7XG5cdFx0d2l0aElubmVyOiBmYWxzZSxcblx0XHRwbGFjZWhvbGRlcjogJy0tJyxcblx0fSApO1xuXG5cdHJldHVybiA8Um93Q29udHJvbD5cblx0XHR7ICggeyBpZCB9ICkgPT4gPD5cblx0XHRcdDxMYWJlbCBodG1sRm9yPXsgaWQgfT5cblx0XHRcdFx0eyBfXyggJ1wiUmVtZW1iZXIgbWVcIiBmaWVsZDonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0xhYmVsPlxuXHRcdFx0PFN0eWxlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0aWQ9eyBpZCB9XG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVtZW1iZXJfbWVfZmllbGQgfVxuXHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgcmVtZW1iZXJfbWVfZmllbGQgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxuXHRcdFx0XHRcdHsgcmVtZW1iZXJfbWVfZmllbGQgfSApIH1cblx0XHRcdC8+XG5cdFx0PC8+IH1cblx0PC9Sb3dDb250cm9sPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVtZW1iZXJNZVJvdzsiLCJpbXBvcnQge1xuXHRUb2dnbGVDb250cm9sLFxuXHRGbGV4LFxuXHRGbGV4SXRlbSxcblx0Q2FyZCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IEFjdGlvbk1lc3NhZ2VzIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB7IENsZWFyQmFzZUNvbnRyb2xTdHlsZSwgU3R5bGVkRmxleENvbnRyb2wgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgV2lkZUxpbmUgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJvbGVDYW5SZWdpc3RlclJvdyBmcm9tICcuL1JvbGVDYW5SZWdpc3RlclJvdyc7XG5pbXBvcnQgVXNlckZpZWxkc1JvdyBmcm9tICcuL1VzZXJGaWVsZHNSb3cnO1xuaW1wb3J0IFVzZXJSb2xlUm93IGZyb20gJy4vVXNlclJvbGVSb3cnO1xuaW1wb3J0IFVzZXJNZXRhUm93IGZyb20gJy4vVXNlck1ldGFSb3cnO1xuaW1wb3J0IFJlbWVtYmVyTWVSb3cgZnJvbSAnLi9SZW1lbWJlck1lUm93JztcblxuZnVuY3Rpb24gUmVnaXN0ZXJVc2VyUmVuZGVyKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0ICAgICAgc2V0dGluZ3MsXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nT2JqLFxuXHRcdCAgICAgIGdldE1hcEZpZWxkLFxuXHRcdCAgICAgIHNldE1hcEZpZWxkLFxuXHQgICAgICB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIDxTdHlsZWRGbGV4Q29udHJvbCBkaXJlY3Rpb249XCJjb2x1bW5cIj5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPXsgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH1cblx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdCdBbGxvdyBjcmVhdGluZyBuZXcgdXNlcnMgYnkgZXhpc3RpbmcgdXNlcnMnLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy5hbGxvd19yZWdpc3RlciB9XG5cdFx0XHRvbkNoYW5nZT17IGFsbG93X3JlZ2lzdGVyID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcblx0XHRcdFx0eyBhbGxvd19yZWdpc3RlciB9LFxuXHRcdFx0KSB9XG5cdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdCdJZiB0aGlzIG9wdGlvbiBpcyBlbmFibGVkLCBsb2dnZWQtaW4gdXNlcnMgd2l0aCB0aGUgc2VsZWN0ZWQgcm9sZSB3aWxsIGJlIGFibGUgdG8gYWRkIG5ldyB1c2VycyB1c2luZyB0aGlzIGZvcm0uIElmIGRpc2FibGVkLCBvbmx5IG5vbi1sb2dnZWQtaW4gdXNlcnMgd2lsbCBiZSBhYmxlIHRvIHJlZ2lzdGVyIHRoZW1zZWx2ZXMuJyxcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxuXHRcdFx0KSB9XG5cdFx0Lz5cblx0XHR7IHNldHRpbmdzLmFsbG93X3JlZ2lzdGVyICYmIDw+XG5cdFx0XHQ8V2lkZUxpbmUvPlxuXHRcdFx0PFJvbGVDYW5SZWdpc3RlclJvd1xuXHRcdFx0XHRzZXR0aW5ncz17IHNldHRpbmdzIH1cblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nT2JqPXsgb25DaGFuZ2VTZXR0aW5nT2JqIH1cblx0XHRcdC8+XG5cdFx0PC8+IH1cblx0XHQ8V2lkZUxpbmUvPlxuXHRcdDxVc2VyRmllbGRzUm93XG5cdFx0XHRnZXRNYXBGaWVsZD17IGdldE1hcEZpZWxkIH1cblx0XHRcdHNldE1hcEZpZWxkPXsgc2V0TWFwRmllbGQgfVxuXHRcdC8+XG5cdFx0PFdpZGVMaW5lLz5cblx0XHQ8VXNlclJvbGVSb3dcblx0XHRcdHNldHRpbmdzPXsgc2V0dGluZ3MgfVxuXHRcdFx0b25DaGFuZ2VTZXR0aW5nT2JqPXsgb25DaGFuZ2VTZXR0aW5nT2JqIH1cblx0XHQvPlxuXHRcdDxXaWRlTGluZS8+XG5cdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdGNsYXNzTmFtZT17IENsZWFyQmFzZUNvbnRyb2xTdHlsZSB9XG5cdFx0XHRsYWJlbD17IF9fKCAnTG9nIEluIFVzZXIgYWZ0ZXIgUmVnaXN0ZXI6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmxvZ19pbiB9XG5cdFx0XHRvbkNoYW5nZT17IGxvZ19pbiA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHsgbG9nX2luIH0gKSB9XG5cdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdCdUbyB1c2UgdGhlIFwiUmVtZW1iZXIgbWVcIiBvcHRpb24sIGZpcnN0IGFkZCBhIGNoZWNrYm94LCByYWRpbyBidXR0b24sIG9yIHN3aXRjaGVyIGZpZWxkIHRvIHlvdXIgZm9ybSB3aXRoIGEgdmFsdWUgb2YgMSwgYW5kIGxhYmVsIGl0IFwiUmVtZW1iZXIgbWVcIiBvciBzaW1pbGFyLiBUaGVuLCBzZWxlY3QgaXQgaGVyZS4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHQvPlxuXHRcdHsgc2V0dGluZ3MubG9nX2luICYmIDw+XG5cdFx0XHQ8V2lkZUxpbmUvPlxuXHRcdFx0PFJlbWVtYmVyTWVSb3dcblx0XHRcdFx0c2V0dGluZ3M9eyBzZXR0aW5ncyB9XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaj17IG9uQ2hhbmdlU2V0dGluZ09iaiB9XG5cdFx0XHQvPlxuXHRcdDwvPiB9XG5cdFx0PFdpZGVMaW5lLz5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0Y2xhc3NOYW1lPXsgQ2xlYXJCYXNlQ29udHJvbFN0eWxlIH1cblx0XHRcdGxhYmVsPXsgX18oICdBZGQgVXNlciBJRCB0byBmb3JtIGRhdGE6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmFkZF91c2VyX2lkIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyBhZGRfdXNlcl9pZDogdmFsIH0gKSB9XG5cdFx0XHRoZWxwPXsgX18oXG5cdFx0XHRcdCdSZWdpc3RlcmVkIHVzZXIgSUQgd2lsbCBiZSBhZGRlZCB0byBmb3JtIGRhdGEuIEN1cnJlbnQgdXNlciBJRCB3aWxsIGJlIGFkZGVkIHRvIGZvcm0gZGF0YSBvbmx5IGlmIFwiQWxsb3cgY3JlYXRpbmcgbmV3IHVzZXJzIGJ5IGV4aXN0aW5nIHVzZXJzXCIgb3B0aW9uIHdhcyBkaXNhYmxlZC4nLFxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHQpIH1cblx0XHQvPlxuXHRcdDxXaWRlTGluZS8+XG5cdFx0PFVzZXJNZXRhUm93XG5cdFx0XHRnZXRNYXBGaWVsZD17IGdldE1hcEZpZWxkIH1cblx0XHRcdHNldE1hcEZpZWxkPXsgc2V0TWFwRmllbGQgfVxuXHRcdC8+XG5cdFx0PFdpZGVMaW5lLz5cblx0XHQ8QWN0aW9uTWVzc2FnZXNcblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+XG5cdDwvU3R5bGVkRmxleENvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlclVzZXJSZW5kZXI7XG4iLCJpbXBvcnQge1xuXHRDb250cm9sV2l0aEVycm9yU3R5bGUsIEljb25UZXh0LFxuXHRSZXF1aXJlZExhYmVsLFxuXHRSb3dDb250cm9sLFxuXHRSb3dDb250cm9sRW5kU3R5bGUsXG5cdFN0eWxlZFNlbGVjdENvbnRyb2xcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IEZsZXggfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlQWN0aW9uVmFsaWRhdG9yUHJvdmlkZXIgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWFjdGlvbnMnO1xuaW1wb3J0IHsgY3ggfSBmcm9tICdAbGluYXJpYS9jb3JlJztcblxuZnVuY3Rpb24gUm9sZUNhblJlZ2lzdGVyUm93KCB7IHNldHRpbmdzLCBvbkNoYW5nZVNldHRpbmdPYmogfSApIHtcblxuXHRjb25zdCB7IGhhc0Vycm9yLCBzZXRTaG93RXJyb3IgfSA9IHVzZUFjdGlvblZhbGlkYXRvclByb3ZpZGVyKCB7XG5cdFx0aXNTdXBwb3J0ZWQ6IGVycm9yID0+ICdyb2xlX2Nhbl9yZWdpc3RlcicgPT09IGVycm9yPy5wcm9wZXJ0eSxcblx0fSApO1xuXG5cdHJldHVybiA8Um93Q29udHJvbD5cblx0XHR7ICggeyBpZCB9ICkgPT4gPD5cblx0XHRcdDxSZXF1aXJlZExhYmVsIGh0bWxGb3I9eyBpZCB9PlxuXHRcdFx0XHR7IF9fKCAnV2hvIGNhbiBhZGQgbmV3IHVzZXI/JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0PC9SZXF1aXJlZExhYmVsPlxuXHRcdFx0PEZsZXhcblx0XHRcdFx0Y2xhc3NOYW1lPXsgY3goXG5cdFx0XHRcdFx0Um93Q29udHJvbEVuZFN0eWxlLFxuXHRcdFx0XHRcdGhhc0Vycm9yICYmIENvbnRyb2xXaXRoRXJyb3JTdHlsZSxcblx0XHRcdFx0KSB9XG5cdFx0XHRcdGRpcmVjdGlvbj1cImNvbHVtblwiXG5cdFx0XHQ+XG5cdFx0XHRcdHsgaGFzRXJyb3IgJiYgPEljb25UZXh0PlxuXHRcdFx0XHRcdHsgX18oXG5cdFx0XHRcdFx0XHQnUGxlYXNlIGZpbGwgdGhpcyByZXF1aXJlZCBmaWVsZCcsXG5cdFx0XHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcicsXG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvSWNvblRleHQ+IH1cblx0XHRcdFx0PFN0eWxlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRpZD17IGlkIH1cblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJvbGVfY2FuX3JlZ2lzdGVyIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgSmV0RkJSZWdpc3RlckFjdGlvbi5hbGxVc2VyUm9sZXMgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgcm9sZV9jYW5fcmVnaXN0ZXIgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxuXHRcdFx0XHRcdFx0eyByb2xlX2Nhbl9yZWdpc3RlciB9LFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmxleD5cblx0XHQ8Lz4gfVxuXHQ8L1Jvd0NvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSb2xlQ2FuUmVnaXN0ZXJSb3c7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRIZWxwLFxuXHRMYWJlbCxcblx0VGFibGVMaXN0U3R5bGUsXG5cdFN0eWxlZFNlbGVjdENvbnRyb2wsXG59IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VGaWVsZHMgfSBmcm9tICdqZXQtZm9ybS1idWlsZGVyLWJsb2Nrcy10by1hY3Rpb25zJztcbmltcG9ydCB7IFRhYmxlTGlzdENvbnRhaW5lciwgVGFibGVMaXN0SGVhZCwgVGFibGVMaXN0Um93IH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCB1c2VyRmllbGRzIGZyb20gJy4vdXNlckZpZWxkcyc7XG5cbmZ1bmN0aW9uIFVzZXJGaWVsZHNSb3coIHsgZ2V0TWFwRmllbGQsIHNldE1hcEZpZWxkIH0gKSB7XG5cblx0Y29uc3QgZm9ybUZpZWxkcyA9IHVzZUZpZWxkcygge1xuXHRcdHdpdGhJbm5lcjogZmFsc2UsXG5cdFx0cGxhY2Vob2xkZXI6ICctLScsXG5cdH0gKTtcblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9eyBUYWJsZUxpc3RTdHlsZS5XcmFwIH0+XG5cdFx0PExhYmVsIGNsYXNzTmFtZT17VGFibGVMaXN0U3R5bGUuTGFiZWx9ID5cblx0XHRcdHsgX18oIGBGaWVsZHMgbWFwYCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvTGFiZWw+XG5cdFx0PEhlbHAgY2xhc3NOYW1lPXtUYWJsZUxpc3RTdHlsZS5XaGl0ZVNwYWNlTm9ybWFsfT5cblx0XHRcdE1hcCB5b3VyIGZvcm0gZmllbGRzIHRvIHN0YW5kYXJkIHVzZXLigJlzIGZpZWxkcy4gVGhpcyBsaW5rcyB0aGUgZm9ybSBpbnB1dCB0byB1c2VyIHByb2ZpbGUgZGF0YSwgc28gdmFsdWVzIGFyZSBzYXZlZCBpbiB0aGUgdXNlcuKAmXMgYWNjb3VudC5cblx0XHQ8L0hlbHA+XG5cblx0XHQ8VGFibGVMaXN0Q29udGFpbmVyPlxuXHRcdFx0PFRhYmxlTGlzdEhlYWRcblx0XHRcdFx0Y29sdW1ucz17IFtcblx0XHRcdFx0XHRfXyggYFVzZXIgTWV0YSBGaWVsZHNgLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0XHRfXyggYEZvcm0gRmllbGRzYCwgJ2pldC1mb3JtLWJ1aWxkZXInIClcblx0XHRcdFx0XSB9XG5cdFx0XHQvPlxuXHRcdFx0eyB1c2VyRmllbGRzLm1hcCggKCBmaWVsZCApID0+IDxUYWJsZUxpc3RSb3dcblx0XHRcdFx0a2V5PXsgZmllbGQudmFsdWUgfVxuXHRcdFx0XHR0YWc9eyBmaWVsZC52YWx1ZSB9XG5cdFx0XHRcdGxhYmVsPXsgZmllbGQubGFiZWwgfVxuXHRcdFx0XHRoZWxwPXsgZmllbGQuaGVscCB9XG5cdFx0XHRcdGlzUmVxdWlyZWQ9eyBmaWVsZC5yZXF1aXJlZCB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKCB7IHNldFNob3dFcnJvciwgaHRtbElkIH0gKSA9PiAoIDxTdHlsZWRTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0aWQ9eyBodG1sSWQgfVxuXHRcdFx0XHRcdG9uQmx1cj17ICgpID0+IHNldFNob3dFcnJvciggdHJ1ZSApIH1cblx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XG5cdFx0XHRcdFx0Zm9ybUZpZWxkcz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogZmllbGQudmFsdWUgfSApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKFxuXHRcdFx0XHRcdFx0eyBuYW1lRmllbGQ6IGZpZWxkLnZhbHVlLCB2YWx1ZSB9LFxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQvPiApIH1cblx0XHRcdDwvVGFibGVMaXN0Um93PiApIH1cblx0XHQ8L1RhYmxlTGlzdENvbnRhaW5lcj5cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyRmllbGRzUm93O1xuIiwiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0SGVscCxcblx0TGFiZWwsXG5cdFRhYmxlTGlzdFN0eWxlLFxuXHRTdHlsZWRUZXh0Q29udHJvbCxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUZpZWxkcyB9IGZyb20gJ2pldC1mb3JtLWJ1aWxkZXItYmxvY2tzLXRvLWFjdGlvbnMnO1xuaW1wb3J0IHtcblx0U2luZ2xlVmFsdWVBc0FycmF5VG9nZ2xlLFxuXHRUYWJsZUxpc3RDb250YWluZXIsXG5cdFRhYmxlTGlzdEhlYWQsXG5cdFRhYmxlTGlzdFJvdyxcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcblxuZnVuY3Rpb24gVXNlckZpZWxkc1JvdyggeyBnZXRNYXBGaWVsZCwgc2V0TWFwRmllbGQgfSApIHtcblxuXHRjb25zdCBmb3JtRmllbGRzID0gdXNlRmllbGRzKCB7IHdpdGhJbm5lcjogZmFsc2UgfSApO1xuXG5cdHJldHVybiA8ZGl2IGNyZWF0ZUlkPXsgZmFsc2UgfSBjbGFzc05hbWU9eyBUYWJsZUxpc3RTdHlsZS5XcmFwIH0+XG5cdFx0PExhYmVsIGNsYXNzTmFtZT17IFRhYmxlTGlzdFN0eWxlLkxhYmVsIH0+XG5cdFx0XHR7IF9fKCBgVXNlciBNZXRhYCwgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdDwvTGFiZWw+XG5cdFx0PEhlbHAgY2xhc3NOYW1lPXsgVGFibGVMaXN0U3R5bGUuV2hpdGVTcGFjZU5vcm1hbCB9PlxuXHRcdFx0TWFwIGZvcm0gZmllbGRzIHRvIGN1c3RvbSB1c2VyIG1ldGEgZmllbGRzIChlLmcuLCBcIlBob25lXCIpIG5vdCBpbmNsdWRlZCBpbiBXb3JkUHJlc3MgYnkgZGVmYXVsdC5cblx0XHQ8L0hlbHA+XG5cdFx0PFRhYmxlTGlzdENvbnRhaW5lcj5cblx0XHRcdDxUYWJsZUxpc3RIZWFkXG5cdFx0XHRcdGNvbHVtbnM9eyBbXG5cdFx0XHRcdFx0X18oIGBGb3JtIEZpZWxkc2AsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRcdF9fKCBgVXNlciBNZXRhIEZpZWxkc2AsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdFx0XHRdIH1cblx0XHRcdC8+XG5cdFx0XHR7IGZvcm1GaWVsZHMubWFwKCBmaWVsZCA9PiB7XG5cdFx0XHRcdHJldHVybiA8VGFibGVMaXN0Um93XG5cdFx0XHRcdFx0a2V5PXsgZmllbGQudmFsdWUgfVxuXHRcdFx0XHRcdHRhZz17IGZpZWxkLnZhbHVlIH1cblx0XHRcdFx0XHRsYWJlbD17IGZpZWxkLmxhYmVsIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgKCB7IGh0bWxJZCB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC1tYXJnaW4tYm90dG9tLXdyYXBwZXInPlxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkVGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVzZXIgbWV0YSBmaWVsZC9rZXlcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPXsgaHRtbElkIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGdldE1hcEZpZWxkKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzb3VyY2U6ICdtZXRhX2ZpZWxkc19tYXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogZmllbGQudmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBzZXRNYXBGaWVsZCgge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZUZpZWxkOiBmaWVsZC52YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBuZXdWYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRzb3VyY2U6ICdtZXRhX2ZpZWxkc19tYXAnLFxuXHRcdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0PFNpbmdsZVZhbHVlQXNBcnJheVRvZ2dsZVxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkTmFtZT17IGZpZWxkLnZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRnZXRNYXBGaWVsZD17IGdldE1hcEZpZWxkIH1cblx0XHRcdFx0XHRcdFx0XHRzZXRNYXBGaWVsZD17IHNldE1hcEZpZWxkIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L1RhYmxlTGlzdFJvdz47XG5cdFx0XHR9ICkgfVxuXHRcdDwvVGFibGVMaXN0Q29udGFpbmVyPlxuXHQ8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJGaWVsZHNSb3c7IiwiaW1wb3J0IHtcblx0TGFiZWwsXG5cdFJvd0NvbnRyb2wsXG5cdFN0eWxlZFNlbGVjdENvbnRyb2xcbn0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1jb21wb25lbnRzJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuZnVuY3Rpb24gVXNlclJvbGVSb3coIHsgc2V0dGluZ3MsIG9uQ2hhbmdlU2V0dGluZ09iaiB9ICkge1xuXG5cdHJldHVybiA8Um93Q29udHJvbD5cblx0XHR7ICggeyBpZCB9ICkgPT4gPD5cblx0XHRcdDxMYWJlbCBodG1sRm9yPXsgaWQgfSA+XG5cdFx0XHRcdHsgX18oICdVc2VyIFJvbGUnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHQ8L0xhYmVsPlxuXHRcdFx0PFN0eWxlZFNlbGVjdENvbnRyb2xcblx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0aWQ9eyBpZCB9XG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlcl9yb2xlIH1cblx0XHRcdFx0b3B0aW9ucz17IEpldEZCUmVnaXN0ZXJBY3Rpb24udXNlclJvbGVzIH1cblx0XHRcdFx0b25DaGFuZ2U9eyB1c2VyX3JvbGUgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxuXHRcdFx0XHRcdHsgdXNlcl9yb2xlIH0sXG5cdFx0XHRcdCkgfVxuXHRcdFx0XHRoZWxwPXsgX18oICdIb2xkIEN0cmwgKFdpbmRvd3MpIG9yIENvbW1hbmQgKE1hYykgdG8gc2VsZWN0IG11bHRpcGxlIHJvbGVzLicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdC8+XG5cdFx0PC8+IH1cblxuXHQ8L1Jvd0NvbnRyb2w+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUm9sZVJvdzsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBSZWdpc3RlclVzZXJSZW5kZXIgZnJvbSAnLi9SZW5kZXInO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgY29tbWVudEF1dGhvckF2YXRhciB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuaW1wb3J0IHVzZXJGaWVsZHMgZnJvbSAnLi91c2VyRmllbGRzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0eXBlOiAncmVnaXN0ZXJfdXNlcicsXG5cdGxhYmVsOiBfXyggJ1JlZ2lzdGVyIFVzZXInLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0ZWRpdDogUmVnaXN0ZXJVc2VyUmVuZGVyLFxuXHRpY29uOiBjb21tZW50QXV0aG9yQXZhdGFyLFxuXHRkb2NIcmVmOiAnaHR0cHM6Ly9qZXRmb3JtYnVpbGRlci5jb20vZmVhdHVyZXMvcmVnaXN0ZXItdXNlci8nLFxuXHRjYXRlZ29yeTogJ3VzZXInLFxuXHR2YWxpZGF0b3JzOiBbXG5cdFx0KCB7IHNldHRpbmdzIH0gKSA9PiB7XG5cdFx0XHRpZiAoICFzZXR0aW5ncy5hbGxvd19yZWdpc3RlciApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0dGluZ3M/LnJvbGVfY2FuX3JlZ2lzdGVyXG5cdFx0XHQgICAgICAgPyBmYWxzZVxuXHRcdFx0ICAgICAgIDogeyB0eXBlOiAnZW1wdHknLCBwcm9wZXJ0eTogJ3JvbGVfY2FuX3JlZ2lzdGVyJyB9O1xuXHRcdH0sXG5cdFx0KCB7IHNldHRpbmdzIH0gKSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcnMgPSBbXTtcblxuXHRcdFx0Zm9yICggY29uc3QgZmllbGQgb2YgdXNlckZpZWxkcyApIHtcblx0XHRcdFx0aWYgKCAhZmllbGQucmVxdWlyZWQgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZmllbGRWYWx1ZSA9IHNldHRpbmdzPy5maWVsZHNfbWFwPy5bIGZpZWxkLnZhbHVlIF07XG5cblx0XHRcdFx0aWYgKCAhZmllbGRWYWx1ZSApIHtcblx0XHRcdFx0XHRlcnJvcnMucHVzaChcblx0XHRcdFx0XHRcdHsgdHlwZTogJ2VtcHR5JywgcHJvcGVydHk6ICdmaWVsZF8nICsgZmllbGQudmFsdWUgfSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlcnJvcnM7XG5cdFx0fSxcblx0XSxcbn07XG4iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IHVzZXJGaWVsZHMgPSBbXG5cdHtcblx0XHR2YWx1ZTogJ2xvZ2luJyxcblx0XHRsYWJlbDogX18oICdVc2VyIExvZ2luJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oICdDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRoZSB1c2VyIGxvZ2luLiBUaGUgdmFsdWUgb2YgdGhpcyBmaWVsZCB3aWxsIGJlIHN0b3JlZCBhcyB0aGUgdXNlciBsb2dpbiBpbiB0aGUgZGF0YWJhc2UuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0cmVxdWlyZWQ6IHRydWUsXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2VtYWlsJyxcblx0XHRsYWJlbDogX18oICdFbWFpbCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGhlbHA6IF9fKCAnQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgdXNlciBlbWFpbC4gVGhlIHZhbHVlIG9mIHRoaXMgZmllbGQgd2lsbCBiZSBzdG9yZWQgYXMgdGhlIHVzZXIgZW1haWwgaW4gdGhlIGRhdGFiYXNlLiBZb3UgY2FuIHVzZSB0aGUgc2FtZSBmaWVsZCBpbiB0aGUgVXNlciBMb2dpbiBzZXR0aW5nIGlmIHlvdSB3YW50IHRoZSBsb2dpbiBhbmQgZW1haWwgdG8gYmUgdGhlIHNhbWUuJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0cmVxdWlyZWQ6IHRydWUsXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ3Bhc3N3b3JkJyxcblx0XHRsYWJlbDogX18oICdQYXNzd29yZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGhlbHA6IF9fKCAnQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgdXNlciBwYXNzd29yZC4gVGhlIHZhbHVlIG9mIHRoaXMgZmllbGQgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIGRhdGFiYXNlIGluIGEgaGFzaGVkIGZvcm1hdC4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnY29uZmlybV9wYXNzd29yZCcsXG5cdFx0bGFiZWw6IF9fKCAnQ29uZmlybSBQYXNzd29yZCcsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGhlbHA6IF9fKCAnQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNvbmZpcm0gdGhlIHVzZXIgcGFzc3dvcmQuIFRoaXMgZmllbGQgaXMgcmVxdWlyZWQgdG8gZW5zdXJlIHRoZSB1c2VyIGhhcyBlbnRlcmVkIHRoZSBjb3JyZWN0IHBhc3N3b3JkLicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdHJlcXVpcmVkOiB0cnVlLFxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdmaXJzdF9uYW1lJyxcblx0XHRsYWJlbDogX18oICdGaXJzdCBOYW1lJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdFx0aGVscDogX18oICcoT3B0aW9uYWwpIENob29zZSB0aGUgZm9ybSBmaWVsZCB0aGF0IHdpbGwgYmUgdXNlZCB0byBnZXQgdGhlIHVzZXJcXCdzIGZpcnN0IG5hbWUuIFRoZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBkYXRhYmFzZSBhcyB0aGUgRmlyc3QgTmFtZSBpbiB0aGUgdXNlciBwcm9maWxlLicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdsYXN0X25hbWUnLFxuXHRcdGxhYmVsOiBfXyggJ0xhc3QgTmFtZScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHRcdGhlbHA6IF9fKCAnKE9wdGlvbmFsKSBDaG9vc2UgdGhlIGZvcm0gZmllbGQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZ2V0IHRoZSB1c2VyXFwncyBsYXN0IG5hbWUuIFRoZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBXb3JkUHJlc3MgZGF0YWJhc2UgYXMgdGhlIGxhc3QgbmFtZSBpbiB0aGUgdXNlciBwcm9maWxlLicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd1c2VyX3VybCcsXG5cdFx0bGFiZWw6IF9fKCAnVXNlciBVUkwnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRoZWxwOiBfXyggJyhPcHRpb25hbCkgQ2hvb3NlIHRoZSBmb3JtIGZpZWxkIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGdldCB0aGUgdXNlcuKAmXMgd2Vic2l0ZS4gVGhlIHZhbHVlIG9mIHRoaXMgZmllbGQgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIFdvcmRQcmVzcyBkYXRhYmFzZSBhcyB0aGUgd2Vic2l0ZSBpbiB0aGUgQ29udGFjdHMgc2VjdGlvbiBvZiB0aGUgdXNlciBwcm9maWxlLicsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckZpZWxkczsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiamZiXCJdW1wiYWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImJsb2Nrc1RvQWN0aW9uc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcImpmYlwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gc3JjL2Nzcy50c1xudmFyIGlkeCA9IDA7XG52YXIgY3NzID0gKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwidGVzdFwiKSB7XG4gICAgcmV0dXJuIGBtb2NrZWQtY3NzLSR7aWR4Kyt9YDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1VzaW5nIHRoZSBcImNzc1wiIHRhZyBpbiBydW50aW1lIGlzIG5vdCBzdXBwb3J0ZWQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBzZXQgdXAgdGhlIEJhYmVsIHBsdWdpbiBjb3JyZWN0bHkuJ1xuICApO1xufTtcbnZhciBjc3NfZGVmYXVsdCA9IGNzcztcblxuLy8gc3JjL2N4LnRzXG52YXIgY3ggPSBmdW5jdGlvbiBjeDIoKSB7XG4gIGNvbnN0IHByZXNlbnRDbGFzc05hbWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IGF0b21pY0NsYXNzZXMgPSB7fTtcbiAgY29uc3Qgbm9uQXRvbWljQ2xhc3NlcyA9IFtdO1xuICBwcmVzZW50Q2xhc3NOYW1lcy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICBjb25zdCBpbmRpdmlkdWFsQ2xhc3NOYW1lcyA9IGFyZyA/IGFyZy5zcGxpdChcIiBcIikgOiBbXTtcbiAgICBpbmRpdmlkdWFsQ2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChjbGFzc05hbWUuc3RhcnRzV2l0aChcImF0bV9cIikpIHtcbiAgICAgICAgY29uc3QgWywga2V5SGFzaF0gPSBjbGFzc05hbWUuc3BsaXQoXCJfXCIpO1xuICAgICAgICBhdG9taWNDbGFzc2VzW2tleUhhc2hdID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uQXRvbWljQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChjb25zdCBrZXlIYXNoIGluIGF0b21pY0NsYXNzZXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF0b21pY0NsYXNzZXMsIGtleUhhc2gpKSB7XG4gICAgICByZXN1bHQucHVzaChhdG9taWNDbGFzc2VzW2tleUhhc2hdKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goLi4ubm9uQXRvbWljQ2xhc3Nlcyk7XG4gIHJldHVybiByZXN1bHQuam9pbihcIiBcIik7XG59O1xudmFyIGN4X2RlZmF1bHQgPSBjeDtcbmV4cG9ydCB7XG4gIGNzc19kZWZhdWx0IGFzIGNzcyxcbiAgY3hfZGVmYXVsdCBhcyBjeFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYWN0aW9uIGZyb20gJy4vcmVnaXN0ZXJVc2VyQWN0aW9uJztcbmltcG9ydCB7IGFkZENvbXB1dGVkRmllbGQsIHJlZ2lzdGVyQWN0aW9uIH0gZnJvbSAnamV0LWZvcm0tYnVpbGRlci1hY3Rpb25zJztcbmltcG9ydCBVc2VySURDb21wdXRlZEZpZWxkIGZyb20gJy4vVXNlcklEQ29tcHV0ZWRGaWVsZCc7XG5cbnJlZ2lzdGVyQWN0aW9uKCBhY3Rpb24gKTtcbmFkZENvbXB1dGVkRmllbGQoIFVzZXJJRENvbXB1dGVkRmllbGQgKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==