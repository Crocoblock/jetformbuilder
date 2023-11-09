/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/index.js":
/*!*************************!*\
  !*** ./editor/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-block */ \"./editor/welcome-block/index.js\");\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('jet.fb.register.fields', 'jet-form-builder/welcome-block', function (blocks) {\n  blocks.push(_welcome_block__WEBPACK_IMPORTED_MODULE_0__);\n  return blocks;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7QUFFM0MsSUFDT0MsU0FBUyxHQUNOQyxFQUFFLENBQUNDLEtBQUssQ0FEWEYsU0FBUztBQUdoQkEsU0FBUyxDQUNSLHdCQUF3QixFQUN4QixnQ0FBZ0MsRUFDaEMsVUFBV0csTUFBTSxFQUFHO0VBQ25CQSxNQUFNLENBQUNDLElBQUksQ0FBRUwsMkNBQVEsQ0FBQztFQUV0QixPQUFPSSxNQUFNO0FBQ2QsQ0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3IvaW5kZXguanM/NWZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3ZWxjb21lIGZyb20gJy4vd2VsY29tZS1ibG9jayc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG4gICAgICB9ID0gd3AuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZWdpc3Rlci5maWVsZHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL3dlbGNvbWUtYmxvY2snLFxyXG5cdGZ1bmN0aW9uICggYmxvY2tzICkge1xyXG5cdFx0YmxvY2tzLnB1c2goIHdlbGNvbWUgKTtcclxuXHJcblx0XHRyZXR1cm4gYmxvY2tzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbIndlbGNvbWUiLCJhZGRGaWx0ZXIiLCJ3cCIsImhvb2tzIiwiYmxvY2tzIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/index.js\n");

/***/ }),

/***/ "./editor/welcome-block/edit.js":
/*!**************************************!*\
  !*** ./editor/welcome-block/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nvar __ = wp.i18n.__;\nvar applyFilters = wp.hooks.applyFilters;\nvar _wp$element = wp.element,\n  cloneElement = _wp$element.cloneElement,\n  Children = _wp$element.Children,\n  useMemo = _wp$element.useMemo;\nvar Placeholder = wp.components.Placeholder;\nvar useBlockProps = wp.blockEditor.useBlockProps;\nvar useSelect = wp.data.useSelect;\nvar _JetFBComponents = JetFBComponents,\n  PatternInserterButton = _JetFBComponents.PatternInserterButton;\nfunction WelcomeBlockEdit(props) {\n  var patterns = useSelect(function (select) {\n    return select('jet-forms/patterns').getTypes();\n  }, []);\n  var blockProps = useBlockProps();\n  var elements = useMemo(function () {\n    return applyFilters('jet.fb.welcome.block.patterns.elements', patterns.map(function (pattern) {\n      return wp.element.createElement(SinglePattern, {\n        pattern: pattern\n      });\n    }));\n  }, []);\n  return wp.element.createElement(Placeholder, _extends({\n    icon: 'admin-tools',\n    label: __('Select form pattern', 'jet-form-builder'),\n    instructions: __('You can select one of predefined layout, or build custom', 'jet-form-builder')\n  }, blockProps), wp.element.createElement(\"ul\", {\n    className: \"block-editor-block-variation-picker__variations jet-fb\",\n    role: \"list\",\n    \"aria-label\": __('Form patterns', 'jet-form-builder')\n  }, Children.map(elements, cloneElement)), wp.element.createElement(\"div\", {\n    className: \"block-editor-block-variation-picker__skip\"\n  }, wp.element.createElement(PatternInserterButton, {\n    patternName: 'default',\n    variant: \"link\"\n  }, __('Start from scratch', 'jet-form-builder'))));\n}\nfunction SinglePattern(_ref) {\n  var pattern = _ref.pattern;\n  return wp.element.createElement(\"li\", {\n    key: pattern.name\n  }, wp.element.createElement(PatternInserterButton, {\n    key: pattern.name,\n    variant: \"secondary\",\n    patternName: pattern.name,\n    withPatternIcon: true,\n    iconSize: 48,\n    className: \"block-editor-block-variation-picker__variation\"\n  }), wp.element.createElement(\"span\", {\n    className: \"block-editor-block-variation-picker__variation-label\"\n  }, pattern.title));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeBlockEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDbkJELFdBQVcsRUFBR1QsT0FBTyxDQUFDYSxJQUFNO0lBQzVCQyxlQUFlO0lBQ2ZDLFFBQVEsRUFBRyxFQUFJO0lBQ2ZSLFNBQVMsRUFBQztFQUFnRCxDQUMxRCxDQUFDLEVBQ0ZqQyxFQUFBLENBQUFLLE9BQUEsQ0FBQXNCLGFBQUE7SUFDQ00sU0FBUyxFQUFDO0VBQXNELEdBRTlEUCxPQUFPLENBQUNnQixLQUNMLENBQ0gsQ0FBQztBQUNOO0FBRUEsaUVBQWV4QixnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci93ZWxjb21lLWJsb2NrL2VkaXQuanM/YWNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFwcGx5RmlsdGVycyxcclxuICAgICAgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGNsb25lRWxlbWVudCxcclxuXHQgICAgICBDaGlsZHJlbixcclxuXHQgICAgICB1c2VNZW1vLFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBQbGFjZWhvbGRlcixcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcclxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVNlbGVjdCxcclxuICAgICAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUGF0dGVybkluc2VydGVyQnV0dG9uLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gV2VsY29tZUJsb2NrRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3QgcGF0dGVybnMgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL3BhdHRlcm5zJyApLmdldFR5cGVzKCksXHJcblx0XHRbXSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCBlbGVtZW50cyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0XHRcdCdqZXQuZmIud2VsY29tZS5ibG9jay5wYXR0ZXJucy5lbGVtZW50cycsXHJcblx0XHRcdHBhdHRlcm5zLm1hcCggKCBwYXR0ZXJuICkgPT4gPFNpbmdsZVBhdHRlcm4gcGF0dGVybj17IHBhdHRlcm4gfS8+ICksXHJcblx0XHQpLFxyXG5cdFx0W10sXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIDxQbGFjZWhvbGRlclxyXG5cdFx0aWNvbj17ICdhZG1pbi10b29scycgfVxyXG5cdFx0bGFiZWw9eyBfXyggJ1NlbGVjdCBmb3JtIHBhdHRlcm4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRpbnN0cnVjdGlvbnM9eyBfXyhcclxuXHRcdFx0J1lvdSBjYW4gc2VsZWN0IG9uZSBvZiBwcmVkZWZpbmVkIGxheW91dCwgb3IgYnVpbGQgY3VzdG9tJyxcclxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0KSB9XHJcblx0XHR7IC4uLmJsb2NrUHJvcHMgfVxyXG5cdD5cclxuXHRcdHsgLypcclxuXHRcdCAqIERpc2FibGUgcmVhc29uOiBUaGUgYGxpc3RgIEFSSUEgcm9sZSBpcyByZWR1bmRhbnQgYnV0XHJcblx0XHQgKiBTYWZhcmkrVm9pY2VPdmVyIHdvbid0IGFubm91bmNlIHRoZSBsaXN0IG90aGVyd2lzZS5cclxuXHRcdCAqL1xyXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1yZWR1bmRhbnQtcm9sZXMgKi8gfVxyXG5cdFx0PHVsXHJcblx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb25zIGpldC1mYlwiXHJcblx0XHRcdHJvbGU9XCJsaXN0XCJcclxuXHRcdFx0YXJpYS1sYWJlbD17IF9fKCAnRm9ybSBwYXR0ZXJucycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdD5cclxuXHRcdFx0eyBDaGlsZHJlbi5tYXAoXHJcblx0XHRcdFx0ZWxlbWVudHMsXHJcblx0XHRcdFx0Y2xvbmVFbGVtZW50LFxyXG5cdFx0XHQpIH1cclxuXHRcdDwvdWw+XHJcblx0XHR7IC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tcmVkdW5kYW50LXJvbGVzICovIH1cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stZWRpdG9yLWJsb2NrLXZhcmlhdGlvbi1waWNrZXJfX3NraXBcIj5cclxuXHRcdFx0PFBhdHRlcm5JbnNlcnRlckJ1dHRvblxyXG5cdFx0XHRcdHBhdHRlcm5OYW1lPXsgJ2RlZmF1bHQnIH1cclxuXHRcdFx0XHR2YXJpYW50PVwibGlua1wiXHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IF9fKCAnU3RhcnQgZnJvbSBzY3JhdGNoJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L1BhdHRlcm5JbnNlcnRlckJ1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvUGxhY2Vob2xkZXI+O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gU2luZ2xlUGF0dGVybiggeyBwYXR0ZXJuIH0gKSB7XHJcblx0cmV0dXJuIDxsaSBrZXk9eyBwYXR0ZXJuLm5hbWUgfT5cclxuXHRcdDxQYXR0ZXJuSW5zZXJ0ZXJCdXR0b25cclxuXHRcdFx0a2V5PXsgcGF0dGVybi5uYW1lIH1cclxuXHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXHJcblx0XHRcdHBhdHRlcm5OYW1lPXsgcGF0dGVybi5uYW1lIH1cclxuXHRcdFx0d2l0aFBhdHRlcm5JY29uXHJcblx0XHRcdGljb25TaXplPXsgNDggfVxyXG5cdFx0XHRjbGFzc05hbWU9XCJibG9jay1lZGl0b3ItYmxvY2stdmFyaWF0aW9uLXBpY2tlcl9fdmFyaWF0aW9uXCJcclxuXHRcdC8+XHJcblx0XHQ8c3BhblxyXG5cdFx0XHRjbGFzc05hbWU9XCJibG9jay1lZGl0b3ItYmxvY2stdmFyaWF0aW9uLXBpY2tlcl9fdmFyaWF0aW9uLWxhYmVsXCJcclxuXHRcdD5cclxuXHRcdFx0eyBwYXR0ZXJuLnRpdGxlIH1cclxuXHRcdDwvc3Bhbj5cclxuXHQ8L2xpPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZUJsb2NrRWRpdDsiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJhcHBseUZpbHRlcnMiLCJob29rcyIsIl93cCRlbGVtZW50IiwiZWxlbWVudCIsImNsb25lRWxlbWVudCIsIkNoaWxkcmVuIiwidXNlTWVtbyIsIlBsYWNlaG9sZGVyIiwiY29tcG9uZW50cyIsInVzZUJsb2NrUHJvcHMiLCJibG9ja0VkaXRvciIsInVzZVNlbGVjdCIsImRhdGEiLCJfSmV0RkJDb21wb25lbnRzIiwiSmV0RkJDb21wb25lbnRzIiwiUGF0dGVybkluc2VydGVyQnV0dG9uIiwiV2VsY29tZUJsb2NrRWRpdCIsInByb3BzIiwicGF0dGVybnMiLCJzZWxlY3QiLCJnZXRUeXBlcyIsImJsb2NrUHJvcHMiLCJlbGVtZW50cyIsIm1hcCIsInBhdHRlcm4iLCJjcmVhdGVFbGVtZW50IiwiU2luZ2xlUGF0dGVybiIsIl9leHRlbmRzIiwiaWNvbiIsImxhYmVsIiwiaW5zdHJ1Y3Rpb25zIiwiY2xhc3NOYW1lIiwicm9sZSIsInBhdHRlcm5OYW1lIiwidmFyaWFudCIsIl9yZWYiLCJrZXkiLCJuYW1lIiwid2l0aFBhdHRlcm5JY29uIiwiaWNvblNpemUiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/welcome-block/edit.js\n");

/***/ }),

/***/ "./editor/welcome-block/index.js":
/*!***************************************!*\
  !*** ./editor/welcome-block/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   metadata: () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   settings: () => (/* binding */ settings)\n/* harmony export */ });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./editor/welcome-block/edit.js\");\n/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ \"./editor/welcome-block/block.json\");\n\n\nvar name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,\n  icon = _block_json__WEBPACK_IMPORTED_MODULE_1__.icon;\nvar __ = wp.i18n.__;\nvar settings = {\n  icon: wp.element.createElement(\"span\", {\n    dangerouslySetInnerHTML: {\n      __html: icon\n    }\n  }),\n  description: __(\"\", 'jet-form-builder'),\n  edit: _edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3Ivd2VsY29tZS1ibG9jay9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzQztBQUNGO0FBRXBDLElBQ09FLElBQUksR0FFREQsNkNBRkM7RUFDSkUsSUFBSSxHQUNERiw2Q0FEQztBQUdYLElBQ09HLEVBQUUsR0FDQ0MsRUFBRSxDQUFDQyxJQUFJLENBRFZGLEVBQUU7QUFHVCxJQUFNRyxRQUFRLEdBQUc7RUFDaEJKLElBQUksRUFBRUUsRUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7SUFBTUMsdUJBQXVCLEVBQUc7TUFBRUMsTUFBTSxFQUFFUjtJQUFLO0VBQUcsQ0FBTyxDQUFDO0VBQ2hFUyxXQUFXLEVBQUVSLEVBQUUsS0FFZCxrQkFDRCxDQUFDO0VBQ0RTLElBQUksRUFBRWIsNkNBQWdCQTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLW9uYm9hcmRpbmcvLi9lZGl0b3Ivd2VsY29tZS1ibG9jay9pbmRleC5qcz84YTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWxjb21lQmxvY2tFZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIG5hbWUsXHJcblx0ICAgICAgaWNvbixcclxuICAgICAgfSA9IG1ldGFkYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXHJcblx0ZGVzY3JpcHRpb246IF9fKFxyXG5cdFx0YGAsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlcicsXHJcblx0KSxcclxuXHRlZGl0OiBXZWxjb21lQmxvY2tFZGl0LFxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuXHRtZXRhZGF0YSxcclxuXHRuYW1lLFxyXG5cdHNldHRpbmdzLFxyXG59OyJdLCJuYW1lcyI6WyJXZWxjb21lQmxvY2tFZGl0IiwibWV0YWRhdGEiLCJuYW1lIiwiaWNvbiIsIl9fIiwid3AiLCJpMThuIiwic2V0dGluZ3MiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJlZGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/welcome-block/index.js\n");

/***/ }),

/***/ "./editor/welcome-block/block.json":
/*!*****************************************!*\
  !*** ./editor/welcome-block/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/welcome","title":"Welcome","category":"jet-form-builder-elements","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path d=\\"M43 35C42.4477 35 42 35.4477 42 36V44C42 44.5523 42.4477 45 43 45H48C48.5523 45 49 44.5523 49 44C49 43.4477 48.5523 43 48 43H44V36C44 35.4477 43.5523 35 43 35Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M58 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H28C28 50.2843 34.7157 57 43 57C51.2843 57 58 50.2843 58 42ZM60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H28.1322C29.11 32.6613 35.3938 27 43 27C50.6062 27 56.89 32.6613 57.8678 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM43 55C50.1797 55 56 49.1797 56 42C56 34.8203 50.1797 29 43 29C35.8203 29 30 34.8203 30 42C30 49.1797 35.8203 55 43 55Z\\" fill=\\"currentColor\\"/>\\n</svg>","keywords":["jetformbuilder","start","welcome"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"attributes":{}}');

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/index.js");
/******/ 	
/******/ })()
;