"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_save_record_render_js"],{

/***/ "./editor/form-actions/save.record/render.js":
/*!***************************************************!*\
  !*** ./editor/form-actions/save.record/render.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ToggleControl = wp.components.ToggleControl;\n\nfunction SaveRecordRender(_ref) {\n  var settings = _ref.settings,\n      label = _ref.label,\n      onChangeSettingObj = _ref.onChangeSettingObj;\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {\n    label: label('save_user_data'),\n    checked: settings.save_user_data,\n    onChange: function onChange(save_user_data) {\n      return onChangeSettingObj({\n        save_user_data: save_user_data\n      });\n    }\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveRecordRender);\n\n//# sourceURL=webpack:///./editor/form-actions/save.record/render.js?");

/***/ })

}]);