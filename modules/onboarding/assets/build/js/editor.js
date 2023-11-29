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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _excluded = [\"view\"];\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n  cloneElement = _wp$element.cloneElement,\n  Children = _wp$element.Children;\nvar Placeholder = wp.components.Placeholder;\nvar useBlockProps = wp.blockEditor.useBlockProps;\nvar useSelect = wp.data.useSelect;\nvar _JetFBComponents = JetFBComponents,\n  PatternInserterButton = _JetFBComponents.PatternInserterButton;\nfunction WelcomeBlockEdit(props) {\n  var elements = useSelect(function (select) {\n    return select('jet-forms/patterns').getTypes().map(function (_ref) {\n      var View = _ref.view,\n        pattern = _objectWithoutProperties(_ref, _excluded);\n      return wp.element.createElement(View, {\n        pattern: pattern\n      });\n    });\n  }, []);\n  var blockProps = useBlockProps();\n  return wp.element.createElement(\"div\", blockProps, wp.element.createElement(Placeholder, {\n    icon: 'admin-tools',\n    label: __('Select form pattern', 'jet-form-builder'),\n    instructions: __('You can select one of predefined layout, or build custom', 'jet-form-builder')\n  }, wp.element.createElement(\"ul\", {\n    className: \"block-editor-block-variation-picker__variations jet-fb\",\n    role: \"list\",\n    \"aria-label\": __('Form patterns', 'jet-form-builder')\n  }, Children.map(elements, cloneElement)), wp.element.createElement(\"div\", {\n    className: \"block-editor-block-variation-picker__skip\"\n  }, wp.element.createElement(PatternInserterButton, {\n    patternName: 'default',\n    variant: \"link\"\n  }, __('Start from scratch', 'jet-form-builder')))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeBlockEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3Ivd2VsY29tZS1ibG9jay9lZGl0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUNPQSxFQUFFLEdBQ0NDLEVBQUUsQ0FBQ0MsSUFBSSxDQURWRixFQUFFO0FBR1QsSUFBQUcsV0FBQSxHQUdVRixFQUFFLENBQUNHLE9BQU87RUFGYkMsWUFBWSxHQUFBRixXQUFBLENBQVpFLFlBQVk7RUFDWkMsUUFBUSxHQUFBSCxXQUFBLENBQVJHLFFBQVE7QUFHZixJQUNPQyxXQUFXLEdBQ1JOLEVBQUUsQ0FBQ08sVUFBVSxDQURoQkQsV0FBVztBQUdsQixJQUNPRSxhQUFhLEdBQ1ZSLEVBQUUsQ0FBQ1MsV0FBVyxDQURqQkQsYUFBYTtBQUdwQixJQUNPRSxTQUFTLEdBQ05WLEVBQUUsQ0FBQ1csSUFBSSxDQURWRCxTQUFTO0FBR2hCLElBQUFFLGdCQUFBLEdBRVVDLGVBQWU7RUFEbEJDLHFCQUFxQixHQUFBRixnQkFBQSxDQUFyQkUscUJBQXFCO0FBRzVCLFNBQVNDLGdCQUFnQkEsQ0FBRUMsS0FBSyxFQUFHO0VBQ2xDLElBQU1DLFFBQVEsR0FBR1AsU0FBUyxDQUN6QixVQUFBUSxNQUFNO0lBQUEsT0FBSUEsTUFBTSxDQUFFLG9CQUFxQixDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FDdEQsVUFBQUMsSUFBQTtNQUFBLElBQVVDLElBQUksR0FBQUQsSUFBQSxDQUFWRSxJQUFJO1FBQVdDLE9BQU8sR0FBQUMsd0JBQUEsQ0FBQUosSUFBQSxFQUFBSyxTQUFBO01BQUEsT0FBUTFCLEVBQUEsQ0FBQUcsT0FBQSxDQUFBd0IsYUFBQSxDQUFDTCxJQUFJO1FBQUNFLE9BQU8sRUFBR0E7TUFBUyxDQUFDLENBQUM7SUFBQSxDQUM5RCxDQUFDO0VBQUEsR0FDRCxFQUNELENBQUM7RUFFRCxJQUFNSSxVQUFVLEdBQUdwQixhQUFhLENBQUMsQ0FBQztFQUVsQyxPQUFPUixFQUFBLENBQUFHLE9BQUEsQ0FBQXdCLGFBQUEsUUFBVUMsVUFBVSxFQUMxQjVCLEVBQUEsQ0FBQUcsT0FBQSxDQUFBd0IsYUFBQSxDQUFDckIsV0FBVztJQUNYdUIsSUFBSSxFQUFHLGFBQWU7SUFDdEJDLEtBQUssRUFBRy9CLEVBQUUsQ0FBRSxxQkFBcUIsRUFBRSxrQkFBbUIsQ0FBRztJQUN6RGdDLFlBQVksRUFBR2hDLEVBQUUsQ0FDaEIsMERBQTBELEVBQzFELGtCQUNEO0VBQUcsR0FPSEMsRUFBQSxDQUFBRyxPQUFBLENBQUF3QixhQUFBO0lBQ0NLLFNBQVMsRUFBQyx3REFBd0Q7SUFDbEVDLElBQUksRUFBQyxNQUFNO0lBQ1gsY0FBYWxDLEVBQUUsQ0FBRSxlQUFlLEVBQUUsa0JBQW1CO0VBQUcsR0FFdERNLFFBQVEsQ0FBQ2UsR0FBRyxDQUNiSCxRQUFRLEVBQ1JiLFlBQ0QsQ0FDRyxDQUFDLEVBRUxKLEVBQUEsQ0FBQUcsT0FBQSxDQUFBd0IsYUFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBMkMsR0FDekRoQyxFQUFBLENBQUFHLE9BQUEsQ0FBQXdCLGFBQUEsQ0FBQ2IscUJBQXFCO0lBQ3JCb0IsV0FBVyxFQUFHLFNBQVc7SUFDekJDLE9BQU8sRUFBQztFQUFNLEdBRVpwQyxFQUFFLENBQUUsb0JBQW9CLEVBQUUsa0JBQW1CLENBQ3pCLENBQ25CLENBQ08sQ0FDVCxDQUFDO0FBRVA7QUFFQSxpRUFBZWdCLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1vbmJvYXJkaW5nLy4vZWRpdG9yL3dlbGNvbWUtYmxvY2svZWRpdC5qcz9hY2E3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgY2xvbmVFbGVtZW50LFxyXG5cdCAgICAgIENoaWxkcmVuLFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBQbGFjZWhvbGRlcixcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlQmxvY2tQcm9wcyxcclxuICAgICAgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVNlbGVjdCxcclxuICAgICAgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUGF0dGVybkluc2VydGVyQnV0dG9uLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gV2VsY29tZUJsb2NrRWRpdCggcHJvcHMgKSB7XHJcblx0Y29uc3QgZWxlbWVudHMgPSB1c2VTZWxlY3QoXHJcblx0XHRzZWxlY3QgPT4gc2VsZWN0KCAnamV0LWZvcm1zL3BhdHRlcm5zJyApLmdldFR5cGVzKCkubWFwKFxyXG5cdFx0XHQoIHsgdmlldzogVmlldywgLi4ucGF0dGVybiB9ICkgPT4gPFZpZXcgcGF0dGVybj17IHBhdHRlcm4gfS8+LFxyXG5cdFx0KSxcclxuXHRcdFtdLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XHJcblxyXG5cdHJldHVybiA8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9ID5cclxuXHRcdDxQbGFjZWhvbGRlclxyXG5cdFx0XHRpY29uPXsgJ2FkbWluLXRvb2xzJyB9XHJcblx0XHRcdGxhYmVsPXsgX18oICdTZWxlY3QgZm9ybSBwYXR0ZXJuJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRpbnN0cnVjdGlvbnM9eyBfXyhcclxuXHRcdFx0XHQnWW91IGNhbiBzZWxlY3Qgb25lIG9mIHByZWRlZmluZWQgbGF5b3V0LCBvciBidWlsZCBjdXN0b20nLFxyXG5cdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJyxcclxuXHRcdFx0KSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgLypcclxuXHRcdFx0ICogRGlzYWJsZSByZWFzb246IFRoZSBgbGlzdGAgQVJJQSByb2xlIGlzIHJlZHVuZGFudCBidXRcclxuXHRcdFx0ICogU2FmYXJpK1ZvaWNlT3ZlciB3b24ndCBhbm5vdW5jZSB0aGUgbGlzdCBvdGhlcndpc2UuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXJlZHVuZGFudC1yb2xlcyAqLyB9XHJcblx0XHRcdDx1bFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrLWVkaXRvci1ibG9jay12YXJpYXRpb24tcGlja2VyX192YXJpYXRpb25zIGpldC1mYlwiXHJcblx0XHRcdFx0cm9sZT1cImxpc3RcIlxyXG5cdFx0XHRcdGFyaWEtbGFiZWw9eyBfXyggJ0Zvcm0gcGF0dGVybnMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7IENoaWxkcmVuLm1hcChcclxuXHRcdFx0XHRcdGVsZW1lbnRzLFxyXG5cdFx0XHRcdFx0Y2xvbmVFbGVtZW50LFxyXG5cdFx0XHRcdCkgfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHR7IC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tcmVkdW5kYW50LXJvbGVzICovIH1cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibG9jay1lZGl0b3ItYmxvY2stdmFyaWF0aW9uLXBpY2tlcl9fc2tpcFwiPlxyXG5cdFx0XHRcdDxQYXR0ZXJuSW5zZXJ0ZXJCdXR0b25cclxuXHRcdFx0XHRcdHBhdHRlcm5OYW1lPXsgJ2RlZmF1bHQnIH1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJsaW5rXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IF9fKCAnU3RhcnQgZnJvbSBzY3JhdGNoJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdDwvUGF0dGVybkluc2VydGVyQnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUGxhY2Vob2xkZXI+XHJcblx0PC9kaXY+O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZUJsb2NrRWRpdDsiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJfd3AkZWxlbWVudCIsImVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJDaGlsZHJlbiIsIlBsYWNlaG9sZGVyIiwiY29tcG9uZW50cyIsInVzZUJsb2NrUHJvcHMiLCJibG9ja0VkaXRvciIsInVzZVNlbGVjdCIsImRhdGEiLCJfSmV0RkJDb21wb25lbnRzIiwiSmV0RkJDb21wb25lbnRzIiwiUGF0dGVybkluc2VydGVyQnV0dG9uIiwiV2VsY29tZUJsb2NrRWRpdCIsInByb3BzIiwiZWxlbWVudHMiLCJzZWxlY3QiLCJnZXRUeXBlcyIsIm1hcCIsIl9yZWYiLCJWaWV3IiwidmlldyIsInBhdHRlcm4iLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiYmxvY2tQcm9wcyIsImljb24iLCJsYWJlbCIsImluc3RydWN0aW9ucyIsImNsYXNzTmFtZSIsInJvbGUiLCJwYXR0ZXJuTmFtZSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./editor/welcome-block/edit.js\n");

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