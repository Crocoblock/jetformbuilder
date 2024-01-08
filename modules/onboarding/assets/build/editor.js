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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _excluded = [\"view\"];\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n  cloneElement = _wp$element.cloneElement,\n  Children = _wp$element.Children,\n  useState = _wp$element.useState;\nvar _wp$components = wp.components,\n  Placeholder = _wp$components.Placeholder,\n  ToggleControl = _wp$components.ToggleControl,\n  Flex = _wp$components.Flex;\nvar useBlockProps = wp.blockEditor.useBlockProps;\nvar _wp$data = wp.data,\n  useSelect = _wp$data.useSelect,\n  useDispatch = _wp$data.useDispatch;\nvar _JetFBComponents = JetFBComponents,\n  PatternInserterButton = _JetFBComponents.PatternInserterButton;\nfunction WelcomeBlockEdit(props) {\n  var blockProps = useBlockProps();\n  var elements = useSelect(function (select) {\n    return select('jet-forms/patterns').getTypes().map(function (_ref) {\n      var View = _ref.view,\n        pattern = _objectWithoutProperties(_ref, _excluded);\n      return wp.element.createElement(View, {\n        pattern: pattern\n      });\n    });\n  }, []);\n  var saveRecord = useSelect(function (select) {\n    return select('jet-forms/patterns').getSetting('saveRecord');\n  });\n  var _useDispatch = useDispatch('jet-forms/patterns'),\n    updateSettings = _useDispatch.updateSettings;\n  return wp.element.createElement(\"div\", blockProps, wp.element.createElement(Placeholder, {\n    icon: 'admin-tools',\n    label: __('Select form pattern', 'jet-form-builder'),\n    instructions: __('You can select one of predefined layout, or build custom', 'jet-form-builder')\n  }, wp.element.createElement(\"ul\", {\n    className: \"block-editor-block-variation-picker__variations jet-fb\",\n    role: \"list\",\n    \"aria-label\": __('Form patterns', 'jet-form-builder')\n  }, Children.map(elements, cloneElement)), wp.element.createElement(Flex, {\n    className: \"block-editor-block-variation-picker__skip\",\n    justify: \"space-between\"\n  }, wp.element.createElement(PatternInserterButton, {\n    patternName: 'default',\n    variant: \"link\"\n  }, __('Start from scratch', 'jet-form-builder')), wp.element.createElement(ToggleControl, {\n    label: __('Add Save Form Record action', 'jet-form-builder'),\n    checked: saveRecord,\n    onChange: function onChange(saveRecord) {\n      return updateSettings({\n        saveRecord: saveRecord\n      });\n    }\n  }))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeBlockEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3pCQyxPQUFPLEVBQUM7RUFBTSxHQUVaL0MsRUFBRSxDQUFFLG9CQUFvQixFQUFFLGtCQUFtQixDQUN6QixDQUFDLEVBQ3hCQyxFQUFBLENBQUFHLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ3hCLGFBQWE7SUFDYjhCLEtBQUssRUFBR3pDLEVBQUUsQ0FBRSw2QkFBNkIsRUFDeEMsa0JBQW1CLENBQUc7SUFDdkJnRCxPQUFPLEVBQUdaLFVBQVk7SUFDdEJhLFFBQVEsRUFBRyxTQUFBQSxTQUFBYixVQUFVO01BQUEsT0FBSUcsY0FBYyxDQUFFO1FBQUVILFVBQVUsRUFBVkE7TUFBVyxDQUFFLENBQUM7SUFBQTtFQUFFLENBQzNELENBQ0ksQ0FDTSxDQUNULENBQUM7QUFFUDtBQUVBLGlFQUFlZCxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItb25ib2FyZGluZy8uL2VkaXRvci93ZWxjb21lLWJsb2NrL2VkaXQuanM/YWNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGNsb25lRWxlbWVudCxcclxuXHQgICAgICBDaGlsZHJlbixcclxuXHQgICAgICB1c2VTdGF0ZSxcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUGxhY2Vob2xkZXIsXHJcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcclxuXHQgICAgICBGbGV4LFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VCbG9ja1Byb3BzLFxyXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlU2VsZWN0LFxyXG5cdCAgICAgIHVzZURpc3BhdGNoLFxyXG4gICAgICB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBQYXR0ZXJuSW5zZXJ0ZXJCdXR0b24sXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5mdW5jdGlvbiBXZWxjb21lQmxvY2tFZGl0KCBwcm9wcyApIHtcclxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xyXG5cclxuXHRjb25zdCBlbGVtZW50cyA9IHVzZVNlbGVjdChcclxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdqZXQtZm9ybXMvcGF0dGVybnMnICkuZ2V0VHlwZXMoKS5tYXAoXHJcblx0XHRcdCggeyB2aWV3OiBWaWV3LCAuLi5wYXR0ZXJuIH0gKSA9PiA8VmlldyBwYXR0ZXJuPXsgcGF0dGVybiB9Lz4sXHJcblx0XHQpLFxyXG5cdFx0W10sXHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc2F2ZVJlY29yZCA9IHVzZVNlbGVjdChcclxuXHRcdHNlbGVjdCA9PiBzZWxlY3QoICdqZXQtZm9ybXMvcGF0dGVybnMnICkuZ2V0U2V0dGluZyggJ3NhdmVSZWNvcmQnICksXHJcblx0KTtcclxuXHJcblx0Y29uc3QgeyB1cGRhdGVTZXR0aW5ncyB9ID0gdXNlRGlzcGF0Y2goICdqZXQtZm9ybXMvcGF0dGVybnMnICk7XHJcblxyXG5cdHJldHVybiA8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9ID5cclxuXHRcdDxQbGFjZWhvbGRlclxyXG5cdFx0XHRpY29uPXsgJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdGxhYmVsPXsgX18oICdTZWxlY3QgZm9ybSBwYXR0ZXJuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRpbnN0cnVjdGlvbnM9eyBfXyhcclxuXHRcdFx0XHQnWW91IGNhbiBzZWxlY3Qgb25lIG9mIHByZWRlZmluZWQgbGF5b3V0LCBvciBidWlsZCBjdXN0b20nLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KSB9XHJcblx0XHQ+XHJcblx0XHRcdDx1bFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb25zIGpldC1mYlwiXHJcblx0XHRcdFx0cm9sZT1cImxpc3RcIlxyXG5cdFx0XHRcdGFyaWEtbGFiZWw9eyBfXyggJ0Zvcm0gcGF0dGVybnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IENoaWxkcmVuLm1hcChcclxuXHRcdFx0XHRcdGVsZW1lbnRzLFxyXG5cdFx0XHRcdFx0Y2xvbmVFbGVtZW50LFxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8RmxleFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX19za2lwXCJcclxuXHRcdFx0XHRqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8UGF0dGVybkluc2VydGVyQnV0dG9uXHJcblx0XHRcdFx0XHRwYXR0ZXJuTmFtZT17ICdkZWZhdWx0JyB9XHJcblx0XHRcdFx0XHR2YXJpYW50PVwibGlua1wiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ1N0YXJ0IGZyb20gc2NyYXRjaCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHQ8L1BhdHRlcm5JbnNlcnRlckJ1dHRvbj5cclxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FkZCBTYXZlIEZvcm0gUmVjb3JkIGFjdGlvbicsXHJcblx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBzYXZlUmVjb3JkIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2F2ZVJlY29yZCA9PiB1cGRhdGVTZXR0aW5ncyggeyBzYXZlUmVjb3JkIH0gKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9GbGV4PlxyXG5cdFx0PC9QbGFjZWhvbGRlcj5cclxuXHQ8L2Rpdj47XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lQmxvY2tFZGl0OyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsIl93cCRlbGVtZW50IiwiZWxlbWVudCIsImNsb25lRWxlbWVudCIsIkNoaWxkcmVuIiwidXNlU3RhdGUiLCJfd3AkY29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJQbGFjZWhvbGRlciIsIlRvZ2dsZUNvbnRyb2wiLCJGbGV4IiwidXNlQmxvY2tQcm9wcyIsImJsb2NrRWRpdG9yIiwiX3dwJGRhdGEiLCJkYXRhIiwidXNlU2VsZWN0IiwidXNlRGlzcGF0Y2giLCJfSmV0RkJDb21wb25lbnRzIiwiSmV0RkJDb21wb25lbnRzIiwiUGF0dGVybkluc2VydGVyQnV0dG9uIiwiV2VsY29tZUJsb2NrRWRpdCIsInByb3BzIiwiYmxvY2tQcm9wcyIsImVsZW1lbnRzIiwic2VsZWN0IiwiZ2V0VHlwZXMiLCJtYXAiLCJfcmVmIiwiVmlldyIsInZpZXciLCJwYXR0ZXJuIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsInNhdmVSZWNvcmQiLCJnZXRTZXR0aW5nIiwiX3VzZURpc3BhdGNoIiwidXBkYXRlU2V0dGluZ3MiLCJpY29uIiwibGFiZWwiLCJpbnN0cnVjdGlvbnMiLCJjbGFzc05hbWUiLCJyb2xlIiwianVzdGlmeSIsInBhdHRlcm5OYW1lIiwidmFyaWFudCIsImNoZWNrZWQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/welcome-block/edit.js\n");

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