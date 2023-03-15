"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ToggleControl = wp.components.ToggleControl;\nfunction SaveRecordRender(_ref) {\n  var settings = _ref.settings,\n    label = _ref.label,\n    onChangeSettingObj = _ref.onChangeSettingObj;\n  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {\n    label: label('save_user_data'),\n    checked: settings.save_user_data,\n    onChange: function onChange(save_user_data) {\n      return onChangeSettingObj({\n        save_user_data: save_user_data\n      });\n    }\n  }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveRecordRender);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3NhdmUucmVjb3JkL3JlbmRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFDT0EsYUFBYSxHQUNWQyxFQUFFLENBQUNDLFVBQVUsQ0FEaEJGLGFBQWE7QUFHcEIsU0FBU0csZ0JBQWdCQSxDQUFBQyxJQUFBLEVBSXJCO0VBQUEsSUFISEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7SUFDUkMsS0FBSyxHQUFBRixJQUFBLENBQUxFLEtBQUs7SUFDTEMsa0JBQWtCLEdBQUFILElBQUEsQ0FBbEJHLGtCQUFrQjtFQUdsQixPQUFPTixFQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFBQyxLQUFBLENBQUFDLFFBQUEsUUFDTlYsRUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1QsYUFBYTtJQUNiTSxLQUFLLEVBQUdBLEtBQUssQ0FBRSxnQkFBZ0IsQ0FBSTtJQUNuQ00sT0FBTyxFQUFHUCxRQUFRLENBQUNRLGNBQWdCO0lBQ25DQyxRQUFRLEVBQ1AsU0FBQUEsU0FBQUQsY0FBYztNQUFBLE9BQUlOLGtCQUFrQixDQUFFO1FBQUVNLGNBQWMsRUFBZEE7TUFBZSxDQUFDLENBQUU7SUFBQTtFQUMxRCxFQUNBLENBQ0E7QUFDSjtBQUVBLGlFQUFlVixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3NhdmUucmVjb3JkL3JlbmRlci5qcz80NzFiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHQgICAgICBUb2dnbGVDb250cm9sLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFNhdmVSZWNvcmRSZW5kZXIoIHtcclxuXHRzZXR0aW5ncyxcclxuXHRsYWJlbCxcclxuXHRvbkNoYW5nZVNldHRpbmdPYmosXHJcbn0gKSB7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3NhdmVfdXNlcl9kYXRhJyApIH1cclxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLnNhdmVfdXNlcl9kYXRhIH1cclxuXHRcdFx0b25DaGFuZ2U9e1xyXG5cdFx0XHRcdHNhdmVfdXNlcl9kYXRhID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyBzYXZlX3VzZXJfZGF0YSB9IClcclxuXHRcdFx0fVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhdmVSZWNvcmRSZW5kZXI7Il0sIm5hbWVzIjpbIlRvZ2dsZUNvbnRyb2wiLCJ3cCIsImNvbXBvbmVudHMiLCJTYXZlUmVjb3JkUmVuZGVyIiwiX3JlZiIsInNldHRpbmdzIiwibGFiZWwiLCJvbkNoYW5nZVNldHRpbmdPYmoiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJjaGVja2VkIiwic2F2ZV91c2VyX2RhdGEiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/form-actions/save.record/render.js\n");

/***/ })

}]);