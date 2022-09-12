"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_call_hook_render_js"],{

/***/ "./editor/form-actions/call.hook/render.js":
/*!*************************************************!*\
  !*** ./editor/form-actions/call.hook/render.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Internal dependencies\r\n */\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    BaseControl = _wp$components.BaseControl;\nvar __ = wp.i18n.__;\n\nfunction CallHookRender(_ref) {\n  var settings = _ref.settings,\n      onChangeSettingObj = _ref.onChangeSettingObj,\n      source = _ref.source,\n      label = _ref.label,\n      help = _ref.help;\n\n  /* eslint-disable jsx-a11y/no-onchange */\n  return wp.element.createElement(\"div\", {\n    key: \"call_hook\"\n  }, wp.element.createElement(TextControl, {\n    key: \"hook_name\",\n    label: label('hook_name'),\n    value: settings.hook_name,\n    onChange: function onChange(hook_name) {\n      return onChangeSettingObj({\n        hook_name: hook_name\n      });\n    }\n  }), wp.element.createElement(BaseControl, {\n    key: \"help_message\"\n  }, wp.element.createElement(\"div\", {\n    className: \"jet-call-hook-instruction\"\n  }, __('Called hook names:'), wp.element.createElement(\"ul\", null, wp.element.createElement(\"li\", null, wp.element.createElement(\"code\", null, \"jet-form-builder/custom-action/\", settings.hook_name), \" - \", __('WP action. Perform a hook without an ability to validate form,')), wp.element.createElement(\"li\", null, wp.element.createElement(\"code\", null, \"jet-form-builder/custom-filter/\", settings.hook_name), \" - \", __('WP filter. Perform a hook with an ability to validate form. Allows to return error message.'))), __('Hook arguments:'), wp.element.createElement(\"ul\", null, wp.element.createElement(\"li\", null, wp.element.createElement(\"code\", null, \"$result\"), \" - \", __('only for WP filter. Hook execution result,')), wp.element.createElement(\"li\", null, wp.element.createElement(\"code\", null, \"$request\"), \" - \", __('array with submitted form data,')), wp.element.createElement(\"li\", null, wp.element.createElement(\"code\", null, \"$action_handler\"), \" - \", __('action handler object, allows to manage actions data and to throws error status:'), wp.element.createElement(\"code\", null, \"throw new Action_Exception( 'failed' )\"))))));\n  /* eslint-enable jsx-a11y/no-onchange */\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallHookRender);\n\n//# sourceURL=webpack:///./editor/form-actions/call.hook/render.js?");

/***/ })

}]);